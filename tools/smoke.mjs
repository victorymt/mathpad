#!/usr/bin/env node
// 端到端冒烟：起一个临时服务（独立 data 目录）→ 拉关键端点 → 关掉。
//   npm test            → npm run check 之后再跑这个
//   node tools/smoke.mjs → 单独跑
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { mkdtemp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { ROOT, findBundle, requirePython } from './python.mjs';

const TIMEOUT = 25000;
let passed = 0;
let failed = 0;

function check(name, cond, detail = '') {
  if (cond) {
    passed += 1;
    console.log(`  ok   ${name}`);
  } else {
    failed += 1;
    console.log(`  FAIL ${name}${detail ? `  —— ${detail}` : ''}`);
  }
}

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

async function get(url, asText = false) {
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  return { status: res.status, text: asText ? await res.text() : '', res };
}

export async function runSmoke() {
  const py = requirePython();
  const bundle = findBundle();
  const port = await freePort();
  const dataDir = await mkdtemp(path.join(os.tmpdir(), 'mathcha-smoke-'));
  const base = `http://127.0.0.1:${port}`;
  const child = spawn(py.cmd, [...py.pre, path.join(ROOT, 'src', 'server.py'), String(port)], {
    cwd: ROOT,
    env: { ...process.env, MATHCHA_DATA_DIR: dataDir },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let stderr = '';
  child.stderr.on('data', (b) => {
    stderr += b.toString();
  });

  try {
    let ready = false;
    const deadline = Date.now() + TIMEOUT;
    while (Date.now() < deadline) {
      try {
        const r = await fetch(`${base}/editor`, { signal: AbortSignal.timeout(1500) });
        if (r.status === 200) {
          ready = true;
          break;
        }
      } catch {
        /* 还没起来 */
      }
      await new Promise((r) => setTimeout(r, 150));
    }
    check('服务在 25s 内启动', ready, stderr.slice(-300));
    if (!ready) return;

    const editor = await get(`${base}/editor`, true);
    check('/editor 返回 200', editor.status === 200);
    check('页面注入白纸模式脚本', editor.text.includes('/web/paper-mode.js'));
    check('页面注入标题命令脚本', editor.text.includes('/web/title-command.js'));
    check('页面 CDN 域名已本地化', editor.text.includes(`http://127.0.0.1:${port}/cdn`));

    const init = await get(`${base}/api/init2`);
    check('/api/init2 返回 200', init.status === 200);
    const initJson = await init.res.json();
    check('init2 带用户信息', !!initJson?.user?.displayName);
    check('init2 带文档树', Array.isArray(initJson?.tree?.documents) && initJson.tree.documents.length > 0);

    const active = await get(`${base}/api/documents/active2`);
    const activeJson = await active.res.json();
    check('active2 拿到当前文档', activeJson?.status === 'found-document');

    if (bundle) {
      const js = await get(`${base}/cdn/${path.basename(bundle)}`);
      check('主 bundle 可取', js.status === 200 && Number(js.res.headers.get('content-length') || 0) > 1e6);
    }
    const web = await get(`${base}/web/paper-mode.js`);
    check('本地扩展 /web/paper-mode.js 可取', web.status === 200);
    const pyo = await get(`${base}/resources/pyodide/pyodide.mjs`);
    check('CAS 资源 /resources/pyodide/pyodide.mjs 可取', pyo.status === 200);

    check('首启自动建 data/store.json', existsSync(path.join(dataDir, 'store.json')));
    const missLog = path.join(dataDir, 'cache-misses.log');
    const misses = existsSync(missLog) ? readFileSync(missLog, 'utf8').trim() : '';
    check('无资源缺失（cache-misses 为空）', misses === '', misses.slice(0, 200));
  } finally {
    child.kill('SIGKILL');
    await new Promise((r) => setTimeout(r, 200));
    rmSync(dataDir, { recursive: true, force: true });
  }
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) {
  console.log('== 冒烟测试 ==');
  await runSmoke();
  console.log(`\n${failed ? 'FAIL' : 'PASS'} ${passed}/${passed + failed}`);
  process.exit(failed ? 1 : 0);
}
