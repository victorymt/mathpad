/* module 52560 — 1613 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var n = r(6284);
  function i(e) {
    for (var t = e.cellCache, r = e.cellRenderer, n = e.columnSizeAndPositionManager, i = e.columnStartIndex, o = e.columnStopIndex, s = e.deferredMeasurementCache, a = e.horizontalOffsetAdjustment, l = e.isScrolling, c = e.isScrollingOptOut, d = e.parent, h = e.rowSizeAndPositionManager, p = e.rowStartIndex, u = e.rowStopIndex, g = e.styleCache, m = e.verticalOffsetAdjustment, f = e.visibleColumnIndices, y = e.visibleRowIndices, v = [], b = n.areOffsetsAdjusted() || h.areOffsetsAdjusted(), x = !l && !b, C = p; C <= u; C++) for (var S = h.getSizeAndPositionOfCell(C), A = i; A <= o; A++) {
      var w = n.getSizeAndPositionOfCell(A),
        E = A >= f.start && A <= f.stop && C >= y.start && C <= y.stop,
        k = C + "-" + A,
        O = void 0;
      x && g[k] ? O = g[k] : s && !s.has(C, A) ? O = {
        height: "auto",
        left: 0,
        position: "absolute",
        top: 0,
        width: "auto"
      } : (O = {
        height: S.size,
        left: w.offset + a,
        position: "absolute",
        top: S.offset + m,
        width: w.size
      }, g[k] = O);
      var D = {
          columnIndex: A,
          isScrolling: l,
          isVisible: E,
          key: k,
          parent: d,
          rowIndex: C,
          style: O
        },
        P = void 0;
      !c && !l || a || m ? P = r(D) : (t[k] || (t[k] = r(D)), P = t[k]), null != P && !1 !== P && v.push(P);
    }
    return v;
  }
  function o(e, t) {
    0;
  }
};
