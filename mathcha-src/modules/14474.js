/* module 14474 — 532 chars */
module.exports = function (e, t) {
  "use strict";

  function r(e) {
    var t = e.cellCount,
      r = e.cellSize,
      n = e.computeMetadataCallback,
      i = e.computeMetadataCallbackProps,
      o = e.nextCellsCount,
      s = e.nextCellSize,
      a = e.nextScrollToIndex,
      l = e.scrollToIndex,
      c = e.updateScrollOffsetForScrollToIndex;
    t === o && ("number" != typeof r && "number" != typeof s || r === s) || (n(i), l >= 0 && l === a && c());
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
};
