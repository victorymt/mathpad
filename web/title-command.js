/**
 * 编辑器增强：在正文（文本模式）里直接敲 LaTeX 风格的标题命令。
 *
 *   \title1 一级标题内容
 *   \title2 二级标题内容
 *   \title3 三级标题内容
 *
 * 行为：这 7 个字符输入过程中不会进入文档；敲完 `\titleN` 的最后一个字符时，
 * 自动触发编辑器的「章节」命令（等同 Ctrl+Alt+1/2/3），把当前行变成对应级别标题，
 * 之后继续输入就是标题文字。
 *
 * 边界（刻意保守）：
 *   - 只在文本模式（root text-mode 行被选中）里生效；数学模式下的 `\frac` 等不受影响；
 *   - 带 Ctrl/Cmd/Alt 的组合键、IME 组合输入（中文输入法）、非单字符键全部放行；
 *   - 缓冲区不匹配（比如想写 `\theta`）会把已吞的字符原样回放，不丢字。
 *
 * 由 server.py 注入到 editor.html，只在本机离线版生效，不改上游 bundle。
 */
(function () {
  'use strict';

  var IS_MAC = /Mac|iPhone|iPad|iPod/.test(navigator.platform || '');
  var PATTERNS = [
    { text: '\\title1', level: 1 },
    { text: '\\title2', level: 2 },
    { text: '\\title3', level: 3 }
  ];
  var PREFIXES = PATTERNS.map(function (p) { return p.text; });

  var buffer = '';
  var timer = null;

  function currentTextarea() {
    var el = document.activeElement;
    if (el && el.tagName === 'TEXTAREA') return el;
    var list = document.querySelectorAll('textarea');
    return list.length ? list[list.length - 1] : null;
  }

  // 文本模式判定：取"最内层"的选中行（鼠标在行内数学里时，内层 line 也被标记 selected）。
  // 只有最内层 line 带 text-mode 类才算正文；数学容器内的 line 没有这个类。
  function inTextMode() {
    var sels = document.querySelectorAll('line.selected');
    if (!sels.length) return false;
    var deepest = sels[sels.length - 1];
    return deepest.classList.contains('text-mode');
  }

  function isPrefix(s) {
    for (var i = 0; i < PREFIXES.length; i++) {
      if (PREFIXES[i].indexOf(s) === 0) return true;
    }
    return false;
  }

  function matchPattern(s) {
    for (var i = 0; i < PATTERNS.length; i++) {
      if (PATTERNS[i].text === s) return PATTERNS[i];
    }
    return null;
  }

  // 回放被吞掉的字符：写进隐藏 textarea 并派发 input，等同用户敲入
  function replay(chars) {
    if (!chars) return;
    var ta = currentTextarea();
    if (!ta) return;
    ta.value = chars;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(function () { if (ta.value) ta.value = ''; }, 80);
  }

  function applyHeading(level) {
    var ta = currentTextarea();
    if (!ta) return;
    var ev = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: String(level),
      code: 'Digit' + level,
      ctrlKey: !IS_MAC,
      metaKey: IS_MAC,
      altKey: true
    });
    Object.defineProperty(ev, 'keyCode', { get: function () { return 48 + level; } });
    Object.defineProperty(ev, 'which', { get: function () { return 48 + level; } });
    ta.dispatchEvent(ev);
  }

  function resetBuffer(flush) {
    if (buffer && flush !== false) replay(buffer);
    buffer = '';
    if (timer) { clearTimeout(timer); timer = null; }
  }

  // 调试/自检用：window.__titleCommand.inTextMode() 可查当前是否在正文模式
  try {
    window.__titleCommand = {
      inTextMode: inTextMode,
      pending: function () { return buffer; }
    };
  } catch (err) { /* ignore */ }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.isComposing || e.keyCode === 229) return;
    if (!e.key || e.key.length !== 1) return;
    if (!inTextMode()) { resetBuffer(true); return; }

    var next = buffer + e.key;
    if (!isPrefix(next)) {
      // 不是标题命令：把吞掉的字符补回去，当前这次按键照常放行
      var swallowed = buffer;
      buffer = '';
      if (timer) { clearTimeout(timer); timer = null; }
      if (swallowed) replay(swallowed);
      return;
    }

    // 仍是命令前缀：拦下，不交给编辑器
    e.preventDefault();
    e.stopPropagation();
    buffer = next;

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () { resetBuffer(true); }, 1500);

    var hit = matchPattern(buffer);
    if (hit) {
      buffer = '';
      if (timer) { clearTimeout(timer); timer = null; }
      applyHeading(hit.level);
    }
  }, true);
})();
