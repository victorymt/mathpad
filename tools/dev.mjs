#!/usr/bin/env node
// 开发启动器：npm run dev / npm start / pnpm dev
//   npm run dev            → 起服务并自动打开浏览器
//   npm start              → 只起服务
//   npm run dev -- 8080    → 指定端口
import { spawn } from 'node:child_process';
import path from 'node:path';
import { ROOT, assertAssetsReady, requirePython } from './python.mjs';

const argv = process.argv.slice(2);
const wantOpen = argv.includes('--open') && !argv.includes('--no-open');
const pass = argv.filter((a) => a !== '--open' && a !== '--no-open');

if (!assertAssetsReady()) process.exit(1);
const py = requirePython();

const server = path.join(ROOT, 'src', 'server.py');
const args = [...py.pre, server, ...pass];
if (wantOpen) args.push('--open');

const child = spawn(py.cmd, args, { cwd: ROOT, stdio: 'inherit' });

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => {
    if (!child.killed) child.kill(sig);
  });
}
child.on('exit', (code, signal) => {
  if (signal === 'SIGINT' || signal === 'SIGTERM') process.exit(0);
  process.exit(code ?? 0);
});
