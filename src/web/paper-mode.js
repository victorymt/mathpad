/* ============================================================================
   白纸模式（Paper Mode）—— 前端状态机
   ----------------------------------------------------------------------------
   设计要点：
   1) 布局复用 Mathcha 内置的 Content View Only（Alt+Shift+E）：
      它会隐藏 header / 侧栏 / 工具栏，并把内容区重新居中；
      我们不再自己算布局，避免和 React 的内联样式抢控制权。
   2) 在这个布局上，由 paper-mode.css 把一切刷白、藏掉残余 chrome。
   3) 内置模式被用户用原生快捷键（Alt+Shift+E）切换时，本脚本会自动跟随，
      不会出现"模式状态脱节"。
   4) 进入/退出入口：
        进入：普通模式右上角「白纸」按钮、Alt+Shift+E、?paper=1 / #paper、localStorage 记忆
        退出：右上角浮层「退出」按钮、Alt+Shift+E、双击 Esc、?paper=0
   5) 白纸模式里保留必要入口：右上角一个会自动淡出的「菜单 / 退出」胶囊；
      菜单会退出白纸模式并打开 Mathcha 完整菜单（完整功能都在那里）。
   6) 空白文档：纸上给一句很淡的提示（点击开始书写 / $ 插入公式 / 双击 Esc 退出），
      一旦点击或输入就消失。
   ========================================================================== */
(function () {
  'use strict';

  if (window.__paperModeInstalled) return;
  window.__paperModeInstalled = true;

  var LS_ON = 'mathcha-local.paper-mode';
  var SS_HINT = 'mathcha-local.paper-hint-dismissed';
  var ROOT = document.documentElement;

  var st = {
    on: false,            // 白纸模式（html.paper-mode）
    native: false,        // Mathcha 内置 Content View Only
    busy: false,          // 正在程序化切换
    ready: false,         // 编辑器已挂载
    themeForced: false,
    themePrev: null,
    bootThemeConsumed: false,
    idleTimer: 0,
    hintDismissed: false,
    chrome: null,
    hint: null,
    entry: null,
    escCount: 0,
    escTimer: 0
  };

  /* --------------------------------------------------------------------------
     小工具
     -------------------------------------------------------------------------- */
  var store = {
    get: function (k) {
      try { return localStorage.getItem(k); } catch (e) { return null; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, v); } catch (e) { /* 忽略 */ }
    }
  };
  var ss = {
    get: function (k) {
      try { return sessionStorage.getItem(k); } catch (e) { return null; }
    },
    set: function (k, v) {
      try { sessionStorage.setItem(k, v); } catch (e) { /* 忽略 */ }
    }
  };

  function waitFor(fn, timeout) {
    return new Promise(function (resolve) {
      var t0 = Date.now();
      (function tick() {
        var v = false;
        try { v = !!fn(); } catch (e) { v = false; }
        if (v) return resolve(true);
        if (Date.now() - t0 >= (timeout || 3000)) return resolve(false);
        setTimeout(tick, 40);
      })();
    });
  }

  function urlPref() {
    try {
      var q = new URLSearchParams(location.search);
      var v = String(q.get('paper') || '').toLowerCase();
      if (v === '1' || v === 'true' || v === 'on' || v === 'yes') return true;
      if (v === '0' || v === 'false' || v === 'off' || v === 'no') return false;
      var h = String(location.hash || '').toLowerCase();
      if (h === '#paper' || h === '#paper-mode' || h === '#papermode') return true;
      if (h === '#normal' || h === '#focused-off') return false;
    } catch (e) { /* 忽略 */ }
    return null;
  }

  /* --------------------------------------------------------------------------
     内置 Content View Only：探测与切换
     -------------------------------------------------------------------------- */
  function infoBar() {
    return document.querySelector('document-info-bar');
  }
  function exitBtn() {
    var b = infoBar();
    // 全屏时这里是一个 title 以 "Exit Content View Only" 开头的 span
    return b ? b.querySelector('[title^="Exit Content View Only"]') : null;
  }
  function enterBtn() {
    var b = infoBar();
    return b ? b.querySelector('.full-view-button') : null;
  }

  function detectNative() {
    // 判定只看"React 自己写下的痕迹"，不能看 header 的 computed display：
    // 白纸模式的 CSS 会把 header 藏掉，用 display 判断会把"自己藏的"误判成"已全屏"。
    // 1) 全屏时 document-info-bar 里会出现这个 title 的 span（正常模式没有）
    if (document.querySelector('[title^="Exit Content View Only"]')) return true;
    // 2) 全屏时 container-layer 被 React 内联拉满（移动端视图下 info bar 可能整条不渲染）
    var layer = document.querySelector('container-layer');
    if (layer && /height:\s*100%/i.test(layer.getAttribute('style') || '')) return true;
    return false;
  }


  function appReady() {
    return !!(document.querySelector('math-type') && infoBar());
  }

  /* --------------------------------------------------------------------------
     主题：白纸模式强制浅色（否则深色模式下浮层/建议框是深色，脏）
     -------------------------------------------------------------------------- */
  function forceLightTheme() {
    if (st.themeForced) return;
    // 首帧前的内联 boot 脚本可能已经把属性改成 light 了，
    // 它记录的"原主题"才是退出时该恢复的值。
    st.themePrev = (!st.bootThemeConsumed && window.__paperBootPrevTheme) ||
                   ROOT.getAttribute('data-ui-theme') || 'light';
    st.bootThemeConsumed = true;
    st.themeForced = true;
    if (ROOT.getAttribute('data-ui-theme') !== 'light') {
      ROOT.setAttribute('data-ui-theme', 'light');
    }
  }
  function restoreTheme() {
    if (!st.themeForced) return;
    st.themeForced = false;
    ROOT.setAttribute('data-ui-theme', st.themePrev || 'light');
  }

  /* --------------------------------------------------------------------------
     图标与浮层
     -------------------------------------------------------------------------- */
  var ICON_PAGE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M6.5 3.8h7.2L18.5 8.6v11.6h-12z"/><path d="M13.7 3.8v4.9h4.8"/></svg>';
  var ICON_MENU =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M4.5 7h15M4.5 12h15M4.5 17h15"/></svg>';
  var ICON_EXIT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>';

  function mountEntry() {
    if (st.entry || !document.body) return st.entry;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'paper-entry';
    b.setAttribute('aria-label', '进入白纸模式');
    b.title = '白纸模式（Alt+Shift+E）';
    b.innerHTML = ICON_PAGE + '<span class="pe-label">白纸模式</span>';
    // 关键：真实鼠标按下时不要让按钮抢焦点，否则编辑器光标会丢（打字会丢字）
    b.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
    b.addEventListener('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      enterPaper('entry');
    });
    document.body.appendChild(b);
    st.entry = b;
    return b;
  }

  function mountChrome() {
    if (st.chrome || !document.body) return st.chrome;
    var el = document.createElement('div');
    el.id = 'paper-chrome';
    el.setAttribute('role', 'toolbar');
    el.setAttribute('aria-label', '白纸模式');
    el.innerHTML =
      '<button type="button" class="pc-btn" data-paper-action="menu" ' +
      'title="打开完整菜单（会退出白纸模式）" aria-label="打开完整菜单">' +
      ICON_MENU + '<span class="pc-label">菜单</span></button>' +
      '<button type="button" class="pc-btn" data-paper-action="exit" ' +
      'title="退出白纸模式（Alt+Shift+E，或双击 Esc）" aria-label="退出白纸模式">' +
      ICON_EXIT + '<span class="pc-label">退出</span></button>';
    el.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
    el.addEventListener('click', function (ev) {
      var btn = ev.target && ev.target.closest ? ev.target.closest('[data-paper-action]') : null;
      if (!btn) return;
      var act = btn.getAttribute('data-paper-action');
      if (act === 'exit') exitPaper('chrome');
      else if (act === 'menu') openFullMenu();
    });
    document.body.appendChild(el);
    st.chrome = el;
    return el;
  }

  function mountHint() {
    if (st.hint || !document.body) return st.hint;
    var el = document.createElement('div');
    el.id = 'paper-hint';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML =
      '<div class="ph-main">点击纸张开始书写</div>' +
      '<div class="ph-sub"><kbd>$</kbd> 插入公式 · <kbd>\\</kbd> 打开符号建议 · ' +
      '<kbd>Esc</kbd><kbd>Esc</kbd> 或 <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd> 退出</div>';
    document.body.appendChild(el);
    st.hint = el;
    return el;
  }

  function removeHint() {
    if (st.hint && st.hint.parentNode) st.hint.parentNode.removeChild(st.hint);
    st.hint = null;
  }

  /* --------------------------------------------------------------------------
     空白文档判断 & 提示显隐
     -------------------------------------------------------------------------- */
  function docIsEmpty() {
    var ed = document.querySelector('math-edit-container');
    if (!ed) return true;
    var clone = ed.cloneNode(true);
    // 去掉只用于排版/输入镜像的占位元素（注意：area-container 里才是正文，不能删）
    var junk = clone.querySelectorAll('emptyblock, baselineblock, prefix, area-baseline');
    for (var i = 0; i < junk.length; i++) {
      if (junk[i].parentNode) junk[i].parentNode.removeChild(junk[i]);
    }
    var text = (clone.textContent || '').replace(/[\s\u200b\u00a0]+/g, '');
    if (text.length) return false;
    if (clone.querySelector('svg, img, canvas, composite, compositeblock, table, ' +
                            'math-container, inline-math, math-text, ' +
                            '[class*="drawing"], [class*="diagram"]')) {
      return false;
    }
    return true;
  }

  function refreshHint() {
    if (!st.on) return;
    if (st.hintDismissed) { hideHint(); return; }
    if (!docIsEmpty()) { hideHint(); return; }
    showHint();
  }

  function showHint() {
    var el = mountHint();
    if (!el) return;
    el.classList.remove('is-hidden');
    el.style.display = '';
  }

  function hideHint() {
    if (!st.hint) return;
    var el = st.hint;
    el.classList.add('is-hidden');
    setTimeout(function () {
      if (el.classList.contains('is-hidden')) el.style.display = 'none';
    }, 420);
  }

  function dismissHint() {
    if (st.hintDismissed) return;
    st.hintDismissed = true;
    ss.set(SS_HINT, '1');
    hideHint();
  }

  /* --------------------------------------------------------------------------
     焦点：进入白纸模式后可以直接打字
     -------------------------------------------------------------------------- */
  function hiddenTextarea() {
    return document.querySelector('hidden-input-wrapper textarea') ||
           document.querySelector('hidden-input-wrapper input.focus-element');
  }

  function placeCaret() {
    var paper = document.querySelector('math-type');
    if (!paper) return;
    var pr = paper.getBoundingClientRect();
    if (pr.width < 4 || pr.height < 4) return;
    var x, y;
    var cur = document.querySelector('span.text-cursor');
    var cr = cur && cur.getBoundingClientRect();
    var vh = window.innerHeight || 0;
    var vw = window.innerWidth || 0;
    var cursorOk = cr && cr.height > 2 && cr.top >= pr.top - 2 && cr.top <= pr.bottom - 2 &&
                   cr.left >= pr.left - 2 && cr.left <= pr.right &&
                   cr.top >= 2 && cr.top <= vh - 2 && cr.left >= 2 && cr.left <= vw - 2;
    if (cursorOk) {
      x = cr.left;
      y = cr.top + cr.height / 2;
    } else {
      var line = document.querySelector('math-edit-container line') ||
                 document.querySelector('math-edit-container');
      var lr = line && line.getBoundingClientRect();
      var lineOk = lr && lr.height > 2 && lr.top >= pr.top - 2 && lr.top <= pr.bottom - 2;
      if (lineOk) {
        x = lr.left + 2;
        y = lr.top + lr.height / 2;
      } else {
        x = pr.left + Math.min(Math.max(pr.width * 0.5, 48), Math.max(pr.width - 24, 48));
        y = pr.top + 28;
      }
    }
    // 点偏了也要落在纸张内
    x = Math.min(Math.max(x, pr.left + 4), pr.right - 4);
    y = Math.min(Math.max(y, pr.top + 4), pr.bottom - 4);
    var target = document.elementFromPoint(x, y) ||
                 document.querySelector('math-edit-container') || paper;
    var types = ['mousedown', 'mouseup', 'click'];
    for (var i = 0; i < types.length; i++) {
      try {
        target.dispatchEvent(new MouseEvent(types[i], {
          bubbles: true, cancelable: true, composed: true, view: window,
          clientX: x, clientY: y, button: 0,
          buttons: types[i] === 'mousedown' ? 1 : 0
        }));
      } catch (e) { /* 忽略 */ }
    }
  }

  function focusEditor(place) {
    // 已经在编辑器里时不要动光标（避免"进去就把光标挪走"）
    var ae = document.activeElement;
    var inEditor = ae && (ae.tagName === 'TEXTAREA' ||
                          (ae.closest && ae.closest('math-type')));
    if (!inEditor && place) {
      try { placeCaret(); } catch (e) { /* 忽略 */ }
    }
    var ta = hiddenTextarea();
    if (ta && ta.focus && document.activeElement !== ta) {
      try { ta.focus({ preventScroll: true }); } catch (e) {
        try { ta.focus(); } catch (e2) { /* 忽略 */ }
      }
    }
  }

  /* --------------------------------------------------------------------------
     浮层自动淡出
     -------------------------------------------------------------------------- */
  function pokeChrome() {
    if (!st.chrome) return;
    st.chrome.classList.remove('is-idle');
    clearTimeout(st.idleTimer);
    st.idleTimer = setTimeout(function () {
      if (st.chrome) st.chrome.classList.add('is-idle');
    }, 2800);
  }

  window.addEventListener('mousemove', function () { if (st.on) pokeChrome(); },
    { passive: true, capture: true });
  window.addEventListener('pointerdown', function () {
    if (!st.on) return;
    pokeChrome();
    var t = arguments[0] && arguments[0].target;
    var inChrome = t && t.closest && t.closest('#paper-chrome');
    if (!inChrome) dismissHint();
  }, { passive: true, capture: true });

  // 开始敲键盘也算"会用"，避免"全选删光后提示又冒出来"
  document.addEventListener('keydown', function (ev) {
    if (!st.on || st.hintDismissed) return;
    var k = ev.key || '';
    if (k.length === 1 || k === 'Enter' || k === 'Backspace' || k === 'Delete' || k === 'Tab') {
      dismissHint();
    }
  }, true);

  /* --------------------------------------------------------------------------
     状态应用
     -------------------------------------------------------------------------- */
  function applyPaper(on, opts) {
    opts = opts || {};
    if (st.on === on) return;
    st.on = on;

    if (on) {
      ROOT.classList.add('paper-mode');
      ROOT.classList.remove('paper-pending', 'paper-native');
      mountChrome();
      forceLightTheme();
      st.hintDismissed = ss.get(SS_HINT) === '1';
      refreshHint();
      pokeChrome();
      setTimeout(function () { focusEditor(true); }, 70);
    } else {
      ROOT.classList.remove('paper-mode', 'paper-pending');
      clearTimeout(st.idleTimer);
      restoreTheme();
      removeHint();
      st.hintDismissed = false;
    }
    if (opts.persist !== false) store.set(LS_ON, on ? '1' : '0');
  }

  /* 备用通道：内置快捷键 Alt+Shift+E（上游不检查 isTrusted，可以直接派发） */
  function dispatchFullScreenShortcut() {
    try {
      var ev = new KeyboardEvent('keydown', {
        key: 'E', code: 'KeyE', keyCode: 69, which: 69,
        altKey: true, shiftKey: true, bubbles: true, cancelable: true, composed: true
      });
      document.dispatchEvent(ev);
      return true;
    } catch (e) {
      return false;
    }
  }

  async function setNative(on) {
    if (detectNative() === on) return true;
    var el = on ? enterBtn() : exitBtn();
    if (!el) {
      await waitFor(function () { return !!(on ? enterBtn() : exitBtn()); }, 5000);
      el = on ? enterBtn() : exitBtn();
    }
    if (el) {
      try { el.click(); } catch (e) { el = null; }
      if (await waitFor(function () { return detectNative() === on; }, 1600)) return true;
    }
    // 按钮不可用（例如被上游隐藏）时退回内置快捷键
    dispatchFullScreenShortcut();
    return await waitFor(function () { return detectNative() === on; }, 3000);
  }

  async function enterPaper(source) {
    if (st.busy) return false;
    st.busy = true;
    ROOT.classList.add('paper-pending');
    try {
      if (!st.ready) st.ready = await waitFor(appReady, 10000);
      var ok = await setNative(true);
      ROOT.classList.remove('paper-pending');
      if (!ok) {
        ROOT.classList.remove('paper-mode', 'paper-pending');
        return false;
      }
      applyPaper(true);
      return true;
    } finally {
      st.busy = false;
    }
  }

  async function exitPaper(source) {
    if (st.busy) return false;
    st.busy = true;
    try {
      applyPaper(false);
      await setNative(false);
      // 退出后把焦点还给编辑器，方便接着写。
      // 「菜单」动作例外：焦点一离开菜单，Mathcha 的菜单就会 onBlur 收起。
      // 纯触摸设备不主动聚焦，避免退出后软键盘弹出。
      var touchOnly = window.matchMedia && window.matchMedia('(hover: none)').matches;
      if (source !== 'menu' && !touchOnly) {
        setTimeout(function () { focusEditor(false); }, 40);
      }
      return true;
    } finally {
      st.busy = false;
    }
  }

  function togglePaper() {
    if (st.on || detectNative()) exitPaper('toggle');
    else enterPaper('toggle');
  }

  /* 菜单：退出白纸模式，并把 Mathcha 完整菜单打开（完整功能都在那里）。
     注意：Mathcha 的 Menu 按钮挂在 onMouseDown 上，必须派发 mousedown 而不是 click。 */
  async function openFullMenu() {
    await exitPaper('menu');
    var btn = null;
    await waitFor(function () {
      btn = document.querySelector('.menu-bar-container .button') ||
            document.querySelector('.menu-bar-container');
      if (!btn) return false;
      var r = btn.getBoundingClientRect();
      return r.width > 2 && r.height > 2;
    }, 2500);
    if (!btn) return;
    try {
      var r = btn.getBoundingClientRect();
      btn.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true, cancelable: true, composed: true, view: window,
        clientX: r.left + 5, clientY: r.top + 5, button: 0, buttons: 1
      }));
    } catch (e) {
      try { btn.click(); } catch (e2) { /* 忽略 */ }
    }
  }

  /* --------------------------------------------------------------------------
     键盘：双击 Esc 退出（单次 Esc 保持 Mathcha 原生行为）
     -------------------------------------------------------------------------- */
  function hasOpenOverlay() {
    var sels = ['.auto-complete-container', '[role="dialog"]', '[class*="msg-box"]',
                '[class*="context-menu"]', '[class*="dialog-container"]'];
    for (var i = 0; i < sels.length; i++) {
      var els = document.querySelectorAll(sels[i]);
      for (var j = 0; j < els.length; j++) {
        var el = els[j];
        var r = el.getBoundingClientRect();
        if (r.width < 24 || r.height < 24) continue;
        var cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.1) continue;
        return true;
      }
    }
    return false;
  }

  document.addEventListener('keydown', function (ev) {
    if (!st.on) return;
    if (ev.key !== 'Escape' && ev.key !== 'Esc') {
      st.escCount = 0;
      return;
    }
    // 有浮层时把 Esc 让给 Mathcha（关建议框/对话框），不参与双击退出
    if (hasOpenOverlay()) {
      st.escCount = 0;
      return;
    }
    st.escCount += 1;
    clearTimeout(st.escTimer);
    st.escTimer = setTimeout(function () { st.escCount = 0; }, 520);
    if (st.escCount >= 2) {
      st.escCount = 0;
      ev.preventDefault();
      ev.stopPropagation();
      exitPaper('esc');
    }
  }, true);

  /* 上游（index.js / 设置面板）按自己的偏好写 data-ui-theme 时，白纸模式里立刻拉回浅色。
     MutationObserver 在校验/渲染前跑，比轮询快得多，深色偏好用户不会再看到闪一下深色。 */
  try {
    new MutationObserver(function (records) {
      if (!st.on || !st.themeForced) return;
      for (var i = 0; i < records.length; i++) {
        if (records[i].attributeName === 'data-ui-theme' &&
            ROOT.getAttribute('data-ui-theme') !== 'light') {
          ROOT.setAttribute('data-ui-theme', 'light');
          return;
        }
      }
    }).observe(ROOT, { attributes: true, attributeFilter: ['data-ui-theme'] });
  } catch (e) { /* 老浏览器忽略 */ }

  /* --------------------------------------------------------------------------
     状态轮询：跟随内置模式的任何变化（原生快捷键、React 重渲染等）
     -------------------------------------------------------------------------- */
  function tick() {
    if (!st.ready) {
      if (appReady()) st.ready = true;
      else return;
    }
    var nativeNow = detectNative();
    if (nativeNow !== st.native) {
      st.native = nativeNow;
      if (!st.busy) applyPaper(nativeNow);
    }
    if (st.on) {
      // 应用可能在启动后按 localStorage 重新写回深色主题；白纸模式里持续拉回浅色，
      // 否则建议框/对话框会变成深色，脏。
      if (st.themeForced && ROOT.getAttribute('data-ui-theme') !== 'light') {
        ROOT.setAttribute('data-ui-theme', 'light');
      }
      if (!st.hintDismissed) refreshHint();
    }
  }

  /* --------------------------------------------------------------------------
     启动
     -------------------------------------------------------------------------- */
  function boot() {
    mountEntry();

    var pref = urlPref();
    var want = pref !== null ? pref : store.get(LS_ON) === '1';

    setInterval(tick, 120);

    if (want) {
      // 首帧就按白纸模式上色，避免"先闪一下正常界面再进白纸"
      ROOT.classList.add('paper-mode', 'paper-pending');
      mountChrome();
      forceLightTheme();
      enterPaper('boot').then(function (ok) {
        if (!ok) {
          ROOT.classList.remove('paper-mode', 'paper-pending');
          restoreTheme();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  /* 调试/测试入口（自动化测试用，正常使用无需关心） */
  window.__paperMode = {
    enter: function () { return enterPaper('api'); },
    exit: function () { return exitPaper('api'); },
    toggle: togglePaper,
    state: function () {
      return {
        on: st.on, native: detectNative(), ready: st.ready, busy: st.busy,
        empty: docIsEmpty(), stored: store.get(LS_ON), url: urlPref()
      };
    }
  };
})();
