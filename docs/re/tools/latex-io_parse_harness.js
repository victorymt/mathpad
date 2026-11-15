// latex-io 解析器运行时验证 harness（不依赖浏览器）
// 只加载 28623(语法) + 51737(入口)，其余依赖用 stub 记录调用参数。
// 目的：验证 parseLatex 的可行性、槽位参数顺序、$ / $$ / \[ 支持、未知命令行为。
const fs = require("fs");
const path = require("path");
const DIR = path.join(__dirname, "..", "modules");

function loadFactory(id) {
  const src = fs.readFileSync(path.join(DIR, id + ".js"), "utf8");
  const body = src.slice(src.indexOf("\n") + 1); // 去掉 /* module ... */ 行
  const obj = eval("({" + body + "})");
  return obj[id];
}

let idc = 0;
const nextId = () => "n" + ++idc;
function newEditor(lines) {
  return { id: nextId(), lines: lines || [{ id: nextId(), blocks: [] }] };
}
function lineOf(blocks) { return { id: nextId(), blocks: blocks || [] }; }

// ---- stub modules ----
const lodash = {
  isArray: Array.isArray,
  isString: (x) => typeof x === "string",
  last: (a) => (a && a.length ? a[a.length - 1] : undefined),
  findIndex: (a, f) => a.findIndex(f),
  map: (a, f) => a.map(f),
  filter: (a, f) => a.filter(f),
  reduce: (a, f, init) => a.reduce(f, init),
  times: (n, f) => Array.from({ length: n }, (_, i) => f(i)),
  assign: Object.assign,
  clone: (o) => JSON.parse(JSON.stringify(o)),
  startsWith: (s, p) => s.startsWith(p),
  endsWith: (s, p) => s.endsWith(p),
  isEmpty: (s) => !s || s.length === 0,
  some: (a, f) => a.some(f),
  trim: (s) => (s || "").trim(),
};

const KNOWN_SYMBOLS = {
  "\\alpha": "α", "\\beta": "β", "\\gamma": "γ", "\\Delta": "∆", "\\sum": "∑",
  "\\int": "∫", "\\times": "×", "\\leq": "≤", "\\geq": "≥", "\\infty": "∞",
  "\\pi": "π", "\\theta": "θ", "\\pm": "±", "\\cdot": "⋅", "\\to": "→",
};
const callLog = [];
function makeComponent(name) {
  return {
    names: [name],
    getModel() { return { id: nextId(), type: "composite", text: name, elements: {} }; },
    toModel(nm, options, ...args) {
      callLog.push({ name: nm, options, args: args.map((a) => (Array.isArray(a) ? "<lines:" + a.length + ">" : a)) });
      // 模仿关键组件的真实语义，便于观察结构
      const base = { id: nextId(), type: "composite", text: nm, elements: {} };
      if (nm === "\\math-container") {
        const displayMode = args[0];
        return { id: nextId(), type: "composite", text: "\\math-container", displayMode: !!displayMode,
          elements: { mathValue: newEditor(args[1]) } };
      }
      if (nm === "\\power-index") {
        // 真实签名：toModel(e, t, [atom, ..., arg0, arg1]) 由 _l 规则拼；这里记录并用通用槽位
        return base;
      }
      // 80931 基类语义：isFlatten && 单参 -> 直接返回内部 blocks
      if ((nm === "\\group" || nm === "\\mathbb" || nm === "\\mathrm" || nm === "\\mathbf") && args.length === 1) {
        return (args[0] && args[0][0] && args[0][0].blocks) || [];
      }
      if (args.length === 1) base.elements.value = newEditor(args[0]);
      else if (args.length >= 2) { base.elements.value = newEditor(args[0]); base.elements.sub1 = newEditor(args[1]); }
      if (options) base.options = options;
      return base;
    },
  };
}
const compCache = {};
const symbolProvider = {
  getCustomSymbolComponent(name) {
    if (!compCache[name]) compCache[name] = makeComponent(name);
    return compCache[name];
  },
  getByName(name) {
    if (KNOWN_SYMBOLS[name]) return { symbol: KNOWN_SYMBOLS[name], names: [name] };
    return undefined;
  },
  getLatexTextCommandFromUnicode() { return null; },
  categoryByUnicodeChar() { return "Normal"; },
};

const modules = {
  2543: lodash,
  30803: { Z: { nextId }, w: { nextId } },
  70224: {
    A: {
      createEmptyLine: () => ({ id: nextId(), blocks: [] }),
      createComposite: (t) => ({ id: nextId(), type: "composite", text: t, elements: {} }),
      createPureTextLine: (t) => t ? { id: nextId(), blocks: [{ id: nextId(), text: t }] } : { id: nextId(), blocks: [] },
      createEmptyEditor: (id) => ({ id: id || nextId(), lines: [{ id: nextId(), blocks: [] }] }),
      createEditorWith: (x) => newEditor(typeof x === "string" ? [{ id: nextId(), blocks: [{ id: nextId(), text: x }] }] : x),
      createOneTextEditor: (s) => newEditor([{ id: nextId(), blocks: [{ id: nextId(), text: s }] }]),
    },
  },
  47858: { A: { addStyleMod(block, k, v) { block.style = Object.assign({}, block.style, { [k]: v }); return block; }, isTextBlock: () => false } },
  98095: { A: symbolProvider },
  86081: { A: { isSingleBlock: (b) => !!b && (b.type === "single" || b.type === "composite"), isTextBlock: (b) => !!b && !b.type, are2TextBlockSameFormat: () => false } },
  49812: { A: { isSingleLineEditor: () => true } },
  97372: { A: { isTextBlock: (b) => !!b && !b.type, are2TextBlockSameFormat: () => false, isSingleTextBlock: () => false } },
};
const webpackRequire = (id) => req(id);
webpackRequire.d = (t, defs) => { for (const k in defs) Object.defineProperty(t, k, { get: defs[k], enumerable: true }); };
webpackRequire.r = (t) => {};
webpackRequire.n = (m) => () => m;
const cache = {};
function req(id) {
  if (id in cache) return cache[id];
  if (!(id in modules)) throw new Error("missing module " + id);
  const t = modules[id];
  cache[id] = t.default || t;
  return cache[id];
}
// 用真实的 28623 覆盖 stub 里的占位
const grammarFactory = loadFactory(28623);
const grammarModule = {}; grammarModule.exports = {};
grammarFactory(grammarModule, {}, webpackRequire); // 28623(e) -> e.exports={SyntaxError,parse}
modules[28623] = { default: grammarModule.exports };

const parserFactory = loadFactory(51737);
const parserModule = {}, parserExports = {};
parserFactory(parserModule, parserExports, webpackRequire);
const LatexParser = parserExports.A;
const parser = new LatexParser();
const origLog = console.log;
console.log = function (...a) { if (typeof a[0] !== "string") global.__lastParseErr = (a[0] && (a[0].message || String(a[0]))) || ""; origLog.apply(console, a); };

function strip(m, depth) {
  depth = depth || 0;
  if (depth > 12) return "<deep>";
  if (Array.isArray(m)) return m.map((x) => strip(x, depth + 1));
  if (m && typeof m === "object") {
    const o = {};
    for (const k of Object.keys(m)) {
      if (k === "id") continue;
      if (k === "lines" || k === "blocks" || k === "elements" || k === "sections") o[k] = strip(m[k], depth + 1);
      else if (["text", "type", "displayMode", "row", "column", "singleBlock", "mathContainer", "firstHLine", "lastHLine", "style", "bracket", "layoutType"].includes(k)) o[k] = m[k];
    }
    return o;
  }
  return m;
}

const samples = [
  ["\\frac{a}{b}", "MathExpression"],
  ["x^{2}_{i}", "MathExpression"],
  ["\\sqrt[3]{x+y}", "MathExpression"],
  ["\\left( \\frac{1}{2} \\right)", "MathExpression"],
  ["\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}", "MathExpression"],
  ["\\begin{cases}a&x>0\\\\b&x<0\\end{cases}", "MathExpression"],
  ["\\begin{array}{l|c}1&2\\\\3&4\\end{array}", "MathExpression"],
  ["\\alpha + \\beta \\, \\% \\{y\\}", "MathExpression"],
  ["\\foo{x}", "MathExpression"],
  ["\\[ x \\]", "MathExpression"],
  ["\\( x \\)", "MathExpression"],
  ["$x^2$", "Expression"],
  ["$$x^2$$", "Expression"],
  ["\\begin{equation}x^2\\end{equation}", "Expression"],
  ["\\text{abc}", "MathExpression"],
  ["{a+b}", "MathExpression"],
  ["\\over", "MathExpression"],
  ["a \\over b", "MathExpression"],
  ["a \\choose b", "MathExpression"],
  ["\\sum_{i=1}^{n}", "MathExpression"],
  ["\\mathbb{R}", "MathExpression"],
  ["\\mathrm{d}x", "MathExpression"],
  ["inline $x+1$ text", "Expression"],
];

for (const [src, rule] of samples) {
  callLog.length = 0;
  let out, err = null;
  let lastErrMsg = "";
  try { out = parser.parse(src, rule); } catch (e) { err = String(e); lastErrMsg = e && e.message; }
  lastErrMsg = lastErrMsg || (global.__lastParseErr || "");
  global.__lastParseErr = "";
  const ok = out && out.length > 0;
  console.log("=".repeat(70));
  console.log("SRC:", JSON.stringify(src), "rule:", rule);
  console.log("OK:", ok, "lines:", out && out.length, err ? "ERR:" + err : "");
  if (!ok) console.log("FAILMSG:", lastErrMsg);
  if (ok) console.log("MODEL:", JSON.stringify(strip(out), null, 1).replace(/\n\s*/g, " "));
  if (callLog.length) console.log("toModel CALLS:", JSON.stringify(callLog));
}
