// 跨平台的小工具：找 Python、定位资源 bundle。
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const TOOLS_DIR = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.dirname(TOOLS_DIR);

/** 找可用的 Python 3：MATHCHA_PYTHON 优先，其次 python3 / python / py -3。 */
export function findPython() {
  const candidates = [];
  if (process.env.MATHCHA_PYTHON) {
    candidates.push(process.env.MATHCHA_PYTHON.trim().split(/\s+/));
  }
  candidates.push(['python3'], ['python'], ['py', '-3']);

  for (const [cmd, ...pre] of candidates) {
    try {
      const r = spawnSync(cmd, [...pre, '--version'], { encoding: 'utf8' });
      if (!r.error && r.status === 0) {
        const out = `${r.stdout || ''}${r.stderr || ''}`.trim();
        if (/^Python 3\.\d+/.test(out)) return { cmd, pre, version: out };
      }
    } catch {
      /* 继续试下一个 */
    }
  }
  return null;
}

export function requirePython() {
  const py = findPython();
  if (!py) {
    console.error('找不到 Python 3（>=3.8）。服务端只用标准库，装一个 Python 3 即可。');
    console.error('也可以用 MATHCHA_PYTHON=/path/to/python3 指定解释器。');
    process.exit(1);
  }
  return py;
}

/** 找 assets/cdn/bundle-<hash>.js */
export function findBundle() {
  const dir = path.join(ROOT, 'assets', 'cdn');
  if (!existsSync(dir)) return null;
  const hit = readdirSync(dir).find((f) => /^bundle-[0-9a-f]+-[0-9a-f]+\.js$/.test(f));
  return hit ? path.join(dir, hit) : null;
}

/** 启动前检查离线资源是否就位。 */
export function assertAssetsReady() {
  const editor = path.join(ROOT, 'assets', 'editor.html');
  const bundle = findBundle();
  const missing = [];
  if (!existsSync(editor)) missing.push('assets/editor.html');
  if (!bundle) missing.push('assets/cdn/bundle-*.js');
  if (!missing.length) return true;
  console.error('离线资源缺失：' + missing.join('、'));
  console.error('  仓库自带的 assets/ 应该包含全部资源；如果是自己裁掉的，跑一次：npm run fetch');
  return false;
}
