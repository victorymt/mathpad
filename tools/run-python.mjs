#!/usr/bin/env node
// 通用入口：用 Python 跑仓库里的脚本
//   npm run fetch                → node tools/run-python.mjs tools/fetch_assets.py
//   npm run md:import -- notes.md
import { spawn } from 'node:child_process';
import path from 'node:path';
import { ROOT, requirePython } from './python.mjs';

const [script, ...args] = process.argv.slice(2);
if (!script) {
  console.error('用法: node tools/run-python.mjs <script.py> [args...]');
  process.exit(1);
}
const py = requirePython();
const child = spawn(py.cmd, [...py.pre, path.resolve(ROOT, script), ...args], {
  cwd: ROOT,
  stdio: 'inherit',
});
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => {
    if (!child.killed) child.kill(sig);
  });
}
child.on('exit', (code, signal) => {
  if (signal === 'SIGINT' || signal === 'SIGTERM') process.exit(0);
  process.exit(code ?? 0);
});
