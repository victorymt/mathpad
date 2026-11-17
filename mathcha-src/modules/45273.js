/* module 45273 — 826 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.SCROLL_DIRECTION_VERTICAL = t.SCROLL_DIRECTION_HORIZONTAL = t.SCROLL_DIRECTION_FORWARD = t.SCROLL_DIRECTION_BACKWARD = void 0, t.default = l;
  var n = r(6284),
    i = t.SCROLL_DIRECTION_BACKWARD = -1,
    o = t.SCROLL_DIRECTION_FORWARD = 1,
    s = t.SCROLL_DIRECTION_HORIZONTAL = "horizontal",
    a = t.SCROLL_DIRECTION_VERTICAL = "vertical";
  function l(e) {
    var t = e.cellCount,
      r = e.overscanCellsCount,
      n = e.scrollDirection,
      i = e.startIndex,
      s = e.stopIndex;
    return n === o ? {
      overscanStartIndex: Math.max(0, i),
      overscanStopIndex: Math.min(t - 1, s + r)
    } : {
      overscanStartIndex: Math.max(0, i - r),
      overscanStopIndex: Math.min(t - 1, s)
    };
  }
};
