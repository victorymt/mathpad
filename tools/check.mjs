#!/usr/bin/env node
// 完整性检查：离线资源清单、Python 语法、Markdown 转换自检；--with-smoke 再跑端到端冒烟。
//   npm run check
//   npm test            （= check + smoke）
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { ROOT, findBundle, requirePython } from './python.mjs';

const withSmoke = process.argv.includes('--with-smoke');
const py = requirePython();
let failed = 0;

function ok(name, detail = '') {
  console.log(`  ok   ${name}${detail ? `  (${detail})` : ''}`);
}
function fail(name, detail = '') {
  failed += 1;
  console.log(`  FAIL ${name}${detail ? `  —— ${detail}` : ''}`);
}
function section(title) {
  console.log(`\n== ${title} ==`);
}
function readManifest(name) {
  const p = path.join(ROOT, 'src', 'manifests', name);
  return readFileSync(p, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => l.split('https://cdn.mathcha.io/').pop().replace(/^\/+/, ''));
}
function dirSize(dir) {
  let total = 0;
  let count = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const r = dirSize(p);
      total += r.total;
      count += r.count;
    } else {
      total += statSync(p).size;
      count += 1;
    }
  }
  return { total, count };
}

// ---------------------------------------------------------------- 1. 离线资源
section('离线资源（assets/）');
const editor = path.join(ROOT, 'assets', 'editor.html');
const cdnDir = path.join(ROOT, 'assets', 'cdn');
if (existsSync(editor)) ok('assets/editor.html');
else fail('assets/editor.html 缺失', '跑 npm run fetch');

const bundle = findBundle();
if (bundle) ok('主 bundle', path.basename(bundle));
else fail('assets/cdn/bundle-*.js 缺失', '跑 npm run fetch');

for (const man of ['assets.txt', 'chunks.txt', 'cas-assets.txt']) {
  let rels;
  try {
    rels = readManifest(man);
  } catch (err) {
    fail(`src/manifests/${man} 读不到`, String(err));
    continue;
  }
  const missing = rels.filter((rel) => !existsSync(path.join(cdnDir, rel)));
  if (missing.length) {
    fail(`${man}: 缺 ${missing.length} 个`, `例如 ${missing[0]}（跑 npm run fetch）`);
  } else {
    ok(`${man}: ${rels.length} 项齐全`);
  }
}
if (existsSync(cdnDir)) {
  const { total, count } = dirSize(cdnDir);
  ok('cdn 资源体积', `${count} 个文件 / ${(total / 1048576).toFixed(1)} MB`);
}

// ---------------------------------------------------------------- 2. Python 语法
section('Python 源码');
const pyFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '__pycache__') continue;
      walk(p);
    } else if (entry.name.endsWith('.py')) {
      pyFiles.push(p);
    }
  }
}
walk(path.join(ROOT, 'src'));
walk(path.join(ROOT, 'tools'));
let bad = 0;
for (const f of pyFiles) {
  const r = spawnSync(py.cmd, [...py.pre, '-m', 'py_compile', f], { encoding: 'utf8' });
  if (r.status !== 0) {
    bad += 1;
    fail(`py_compile ${path.relative(ROOT, f)}`, (r.stderr || '').split('\n').slice(-3).join(' '));
  }
}
if (!bad) ok(`${pyFiles.length} 个 .py 文件语法通过`);

// ---------------------------------------------------------------- 3. 自检
section('Markdown 转换自检');
const selftest = spawnSync(py.cmd, [...py.pre, path.join(ROOT, 'src', 'md', 'selftest.py')], {
  encoding: 'utf8',
});
const tail = `${selftest.stdout || ''}${selftest.stderr || ''}`.trim().split('\n').slice(-2).join(' / ');
if (selftest.status === 0) ok('自检通过', tail);
else fail('自检失败', tail);

// ---------------------------------------------------------------- 4. 可选冒烟
if (withSmoke) {
  const { runSmoke } = await import('./smoke.mjs');
  section('端到端冒烟');
  const before = failed;
  await runSmoke();
  if (failed > before) {
    /* smoke 自己会打印 FAIL */
  }
}

console.log(`\n${failed ? 'FAIL' : 'PASS'}${failed ? `，${failed} 项失败` : '，全部通过'}`);
process.exit(failed ? 1 : 0);
