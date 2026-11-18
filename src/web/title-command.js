/**
 * 编辑器增强：在正文（文本模式）的空行行首直接敲 `#1` / `#2` / `#3` 生成层级标题。
 *
 *   空行里敲 #1 → 该行变成一级标题（等同 Ctrl+Alt+1），接着输入就是标题内容
 *   空行里敲 #2 → 二级标题   #3 → 三级标题
 *
 * 为什么不用 `\title1`：`\` 是编辑器的符号建议框触发键，在捕获阶段拦它会让 `\`
 * 延迟 1.5s 才进编辑器（v1 的 bug）。`#` 在正文模式只是普通字符，没有冲突。
 *
 * 边界（刻意保守）：
 *   - 只在文本模式 + 当前行为空行时生效；数学模式、已有文字的行完全不拦；
 *   - 带 Ctrl/Cmd/Alt 的组合键、IME 组合输入、非单字符键全部放行；
 *   - 缓冲区不匹配（比如你想写 "#tag"）立即回放已吞字符，不丢字；
 *   - 400ms 内没打出数字就回放，不会有"按键消失很久"的感觉。
 *
 * 由 server.py 注入到 editor.html，只在本机离线版生效，不改上游 bundle。
 */
(function () {
  'use strict';

  var IS_MAC = /Mac|iPhone|iPad|iPod/.test(navigator.platform || '');
  var LEVELS = { '1': 1, '2': 2, '3': 3 };
  var TRIGGER = '#';
  var TIMEOUT_MS = 400;

  var buffer = '';
  var timer = null;

  function currentTextarea() {
    var el = document.activeElement;
    if (el && el.tagName === 'TEXTAREA') return el;
    var list = document.querySelectorAll('textarea');
    return list.length ? list[list.length - 1] : null;
  }

  // 取"最内层"的选中行；只有它带 text-mode 类才算正文（数学容器内的 line 没有这个类）
  function selectedLine() {
    var sels = document.querySelectorAll('line.selected');
    return sels.length ? sels[sels.length - 1] : null;
  }

  function inTextMode() {
    var el = selectedLine();
    return !!el && el.classList.contains('text-mode');
  }

  // 只在空行行首启用（避免吃掉正文里正常出现的 "#1"、"#tag"）
  // 只看 <blocks> 里的内容，不算行首自动编号（section 行的 "1." 不算文字）
  function isEmptyLine() {
    var el = selectedLine();
    if (!el) return false;
    var blocksEl = el.querySelector('blocks');
    var text = ((blocksEl || el).innerText || '').replace(/[\s\u00a0]/g, '');
    return text.length === 0;
  }

  function enabled() {
    return inTextMode() && isEmptyLine();
  }

  function replay(chars) {
    if (!chars) return;
    var ta = currentTextarea();
    if (!ta) return;
    ta.value = chars;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(function () { if (ta.value) ta.value = ''; }, 60);
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

  function clearTimer() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function resetBuffer(flush) {
    if (buffer && flush !== false) replay(buffer);
    buffer = '';
    clearTimer();
  }

  // 调试/自检用：window.__titleCommand.inTextMode() / pending()
  try {
    window.__titleCommand = {
      inTextMode: inTextMode,
      enabled: enabled,
      pending: function () { return buffer; },
      trigger: TRIGGER
    };
  } catch (err) { /* ignore */ }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.isComposing || e.keyCode === 229) return;
    if (!e.key || e.key.length !== 1) return;

    if (!enabled()) { resetBuffer(true); return; }

    var next = buffer + e.key;
    // 空行行首：只拦 "#" 这一个个字符，以及随后的 1/2/3
    var interesting =
      (buffer === '' && next === TRIGGER) ||
      (buffer === TRIGGER && !!LEVELS[next.charAt(1)]);

    if (!interesting) {
      // 不是命令：把吞掉的字符补回去，当前按键照常放行
      var swallowed = buffer;
      buffer = '';
      clearTimer();
      if (swallowed) replay(swallowed);
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    buffer = next;

    if (LEVELS[next.charAt(1)]) {
      clearTimer();
      buffer = '';
      applyHeading(LEVELS[next.charAt(1)]);
      return;
    }

    clearTimer();
    timer = setTimeout(function () { resetBuffer(true); }, TIMEOUT_MS);
  }, true);
})();
