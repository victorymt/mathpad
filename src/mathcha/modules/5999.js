/* module 5999 — 908 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n,
    i = s(r(30022)),
    o = r(6284);
  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function a(e) {
    var t = e.cellSize,
      r = e.cellSizeAndPositionManager,
      n = e.previousCellsCount,
      i = e.previousCellSize,
      o = e.previousScrollToAlignment,
      s = e.previousScrollToIndex,
      a = e.previousSize,
      l = e.scrollOffset,
      c = e.scrollToAlignment,
      d = e.scrollToIndex,
      h = e.size,
      p = e.sizeJustIncreasedFromZero,
      u = e.updateScrollIndexCallback,
      g = r.getCellCount(),
      m = d >= 0 && d < g,
      f;
    m && (h !== a || p || !i || "number" == typeof t && t !== i || c !== o || d !== s) ? u(d) : !m && g > 0 && (h < a || g < n) && l > r.getTotalSize() - h && u(g - 1);
  }
};
