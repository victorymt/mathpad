// Split the minified Mathcha webpack bundle into per-module readable files.
// Usage: node split_bundle.mjs <bundle.js> <outDir>
import fs from 'node:fs';
import path from 'node:path';
import * as babelParser from '@babel/parser';
import generate from '@babel/generator';

const [bundlePath, outDir] = process.argv.slice(2);
if (!bundlePath || !outDir) {
  console.error('usage: node split_bundle.mjs <bundle.js> <outDir>');
  process.exit(1);
}
const src = fs.readFileSync(bundlePath, 'utf8');
console.error(`read ${src.length} chars`);

console.error('parsing...');
const t0 = Date.now();
const ast = babelParser.parse(src, {
  sourceType: 'script',
  allowReturnOutsideFunction: true,
  allowAwaitOutsideFunction: true,
  errorRecovery: true,
});
console.error(`parsed in ${Date.now() - t0}ms, errors: ${ast.errors?.length ?? 0}`);

fs.mkdirSync(outDir, { recursive: true });

// Walk the whole AST for object expressions that look like a webpack module table:
// numeric keys whose values are function expressions with 3 params.
const candidates = [];
function keyName(prop) {
  if (!prop.computed) {
    if (prop.key.type === 'Identifier') return prop.key.name;
    if (prop.key.type === 'NumericLiteral') return String(prop.key.value);
    if (prop.key.type === 'StringLiteral') return prop.key.value;
  }
  return null;
}
function walk(node) {
  if (!node || typeof node.type !== 'string') return;
  if (node.type === 'ObjectExpression' && node.properties.length > 5) {
    let fnCount = 0;
    const names = [];
    for (const p of node.properties) {
      if (p.type !== 'ObjectProperty' && p.type !== 'ObjectMethod') continue;
      const k = keyName(p);
      const fn = p.value ?? p;
      const isFn =
        fn.type === 'FunctionExpression' ||
        fn.type === 'ArrowFunctionExpression' ||
        p.type === 'ObjectMethod';
      if (k && /^\d+$/.test(k) && isFn) {
        fnCount++;
        if (names.length < 3) names.push(k);
      }
    }
    if (fnCount > 50) candidates.push({ node, fnCount, names });
  }
  for (const k of Object.keys(node)) {
    const v = node[k];
    if (Array.isArray(v)) {
      for (const c of v) walk(c);
    } else if (v && typeof v === 'object' && typeof v.type === 'string') {
      walk(v);
    }
  }
}
walk(ast);
console.error('module-table candidates:', candidates.map((c) => c.fnCount).slice(0, 10));
if (!candidates.length) {
  console.error('no module table found');
  process.exit(2);
}
const table = candidates.sort((a, b) => b.fnCount - a.fnCount)[0];
console.error(`chosen table with ${table.fnCount} modules, e.g. ${table.names}`);

const index = [];
for (const p of table.node.properties) {
  const k = keyName(p);
  if (!k || !/^\d+$/.test(k)) continue;
  const fn = p.type === 'ObjectMethod' ? p : p.value;
  if (!fn) continue;
  let code;
  try {
    code = generate(fn, { comments: true, jsescOption: { minimal: true } }, src).code;
  } catch (e) {
    code = `/* generation failed: ${e.message} */`;
  }
  const file = path.join(outDir, `${k}.js`);
  const header = `/* module ${k} — ${code.length} chars */\n`;
  fs.writeFileSync(file, header + code);
  // crude content hints
  const strings = [...code.matchAll(/"((?:[^"\\]|\\.){6,60})"/g)]
    .slice(0, 2000)
    .map((m) => m[1]);
  index.push({ id: Number(k), file, codeLength: code.length, nStrings: strings.length, sample: strings.slice(0, 40) });
}
fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(index, null, 1));
console.error(`wrote ${index.length} modules to ${outDir}`);
