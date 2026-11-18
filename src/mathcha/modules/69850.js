/* module 69850 — 3143 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    t: () => l
  });
  var n = r(64467),
    i = r(49812),
    o = r(32422);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l {
    handleExtractTabular(e, t) {
      throw new Error("Method not implemented.");
    }
    shouldHandle(e) {
      throw new Error("Method not implemented.");
    }
    handleInsertColumnOnLeft(e, t) {
      return this.expandColSpan(e, t);
    }
    handleInsertColumnOnRight(e, t) {
      return this.expandColSpan(e, t);
    }
    handleInsertNewRowBelow(e, t) {
      return this.expandRowSpan(e, t);
    }
    handleInsertNewRowAbove(e, t) {
      return this.expandRowSpan(e, t);
    }
    handleRemoveColumn(e, t) {
      return this.decreaseColSpanWithRemovedColumn(e, t);
    }
    handleRemoveRow(e, t) {
      return this.decreaseRowSpanWithRemovedRow(e, t);
    }
    normalizeTabular(e) {
      throw new Error("Method not implemented.");
    }
    expandColSpan(e, t) {
      var r = i.A.cloneCompositeBlockWithNewElements(e);
      return o.A.cellLoop(r, e => {
        var n = e.hidden,
          i = e.colSpan,
          o = e.cIndex,
          s = e.key,
          l = e.editor;
        !n && t > o && o + i > t && (r.elements[s] = a(a({}, l), {}, {
          colSpan: i + 1
        }));
      }), r;
    }
    expandRowSpan(e, t) {
      var r = i.A.cloneCompositeBlockWithNewElements(e);
      return o.A.cellLoop(r, e => {
        var n = e.hidden,
          i = e.rowSpan,
          o = e.rIndex,
          s = e.key,
          l = e.editor;
        !n && t > o && o + i > t && (r.elements[s] = a(a({}, l), {}, {
          rowSpan: i + 1
        }));
      }), r;
    }
    decreaseRowSpanWithRemovedRow(e, t) {
      var r = i.A.cloneCompositeBlockWithNewElements(e);
      return o.A.cellLoop(r, e => {
        var n = e.key,
          i = e.rIndex,
          o = e.rowSpan,
          s = e.editor;
        i < t && i + o > t && (r.elements[n] = a(a({}, s), {}, {
          rowSpan: o <= 2 ? void 0 : o - 1
        }));
      }), r;
    }
    decreaseColSpanWithRemovedColumn(e, t) {
      var r = i.A.cloneCompositeBlockWithNewElements(e);
      return o.A.cellLoop(r, e => {
        var n = e.key,
          i = e.cIndex,
          o = e.colSpan,
          s = e.editor;
        i < t && i + o > t && (r.elements[n] = a(a({}, s), {}, {
          colSpan: o <= 2 ? void 0 : o - 1
        }));
      }), r;
    }
  }
};
