#!/usr/bin/env node
// 清理构建/运行缓存（不动 data/ 里的文档）
//   npm run clean
import { readdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { ROOT } from './python.mjs';

const targets = [];
function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name === '__pycache__') {
      targets.push(p);
      continue;
    }
    if (entry.name === '.git' || entry.name === 'assets' || entry.name === 'docs') continue;
    walk(p);
  }
}
walk(ROOT);

for (const dir of ['.logs']) {
  const p = path.join(ROOT, dir);
  try {
    rmSync(p, { recursive: true, force: true });
    console.log(`删除 ${dir}/`);
  } catch {
    /* 不存在就跳过 */
  }
}
for (const t of targets) {
  rmSync(t, { recursive: true, force: true });
}
if (targets.length) console.log(`删除 ${targets.length} 个 __pycache__/`);
console.log('data/ 未动（文档不会丢）。');
