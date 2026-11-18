#!/usr/bin/env node
// 把上游压缩 bundle 还原成可读源码：assets/cdn/bundle-<hash>.js → src/mathcha/modules/<id>.js
//   npm run unpack
// 依赖 devDependencies 里的 @babel/*（只有这一步需要：npm install 一次；日常运行不需要）
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, renameSync } from 'node:fs';
import path from 'node:path';
import { ROOT, findBundle } from './python.mjs';

const bundle = findBundle();
if (!bundle) {
  console.error('找不到 assets/cdn/bundle-*.js：先跑 npm run fetch');
  process.exit(1);
}

let depsOk = true;
for (const dep of ['@babel/parser', '@babel/generator', '@babel/types']) {
  try {
    await import(dep);
  } catch {
    depsOk = false;
    console.error(`缺少 ${dep}`);
  }
}
if (!depsOk) {
  console.error('还原源码需要 Babel（仅开发用）：npm install 之后再 npm run unpack');
  process.exit(1);
}

// 校验 server.py 里锁定的 bundle 名字和实际资源一致（对不上的话提醒一下，不阻断）
const serverSrc = readFileSync(path.join(ROOT, 'src', 'server.py'), 'utf8');
const locked = serverSrc.match(/BUNDLE_NAME\s*=\s*"([^"]+)"/)?.[1];
if (locked && path.basename(bundle) !== locked) {
  console.log(`注意：server.py 锁定 ${locked}，实际还原 ${path.basename(bundle)}`);
}

const outDir = path.join(ROOT, 'src', 'mathcha', 'modules');
const r = spawnSync(process.execPath, [path.join(ROOT, 'tools', 'split_bundle.mjs'), bundle, outDir], {
  stdio: 'inherit',
});
if (r.status !== 0) process.exit(r.status ?? 1);

const idx = path.join(outDir, 'index.json');
if (existsSync(idx)) renameSync(idx, path.join(ROOT, 'src', 'mathcha', 'index.json'));

const count = readdirSync(outDir).filter((f) => f.endsWith('.js')).length;
console.log(`✓ 已还原 ${count} 个模块 → src/mathcha/modules/（索引 src/mathcha/index.json）`);
