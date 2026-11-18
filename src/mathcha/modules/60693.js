/* module 60693 — 7015 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => l
  });
  var n = r(64467),
    i = r(516);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    constructor() {
      (0, n.A)(this, "emptyZoomInfo", {
        zoomRatio: 1
      });
    }
    isRelativePos(e) {
      return !!e.left;
    }
    resolveFixLeftTop(e, t) {
      var r = this.isRelativePos(e) ? e : this.getFromAbsPos(e.absLeft, e.absTop, e.zc);
      if (!t && 1 == r.zc.zoomRatio) {
        var n = r.zc.getMtLefTop();
        return {
          left: r.left + n.left,
          top: r.top + n.top
        };
      }
      if (!t) {
        var i = r.zc.getMtLefTop();
        return {
          left: r.left * r.zc.zoomRatio + i.left,
          top: r.top * r.zc.zoomRatio + i.top
        };
      }
      var o = t instanceof Element ? this.getBCRect(t, r.zc) : t;
      return r.zc.zoomRatio, {
        left: r.left - o.left,
        top: r.top - o.top
      };
    }
    collapseRect(e, t) {
      if ("left" === t) return s(s({}, e), {}, {
        right: e.left
      });
    }
    buildRectAtPoint(e, t, r) {
      return {
        left: e,
        top: t,
        right: e,
        bottom: t,
        zc: r
      };
    }
    widthOf(e) {
      return e.right - e.left;
    }
    heightOf(e) {
      return e.bottom - e.top;
    }
    leftTopOf(e) {
      return {
        left: e.left,
        top: e.top,
        zc: e.zc
      };
    }
    getFromAbsPos(e, t, r) {
      var n = r.getMtLefTop();
      return {
        left: (e - n.left) / r.zoomRatio,
        top: (t - n.top) / r.zoomRatio,
        zc: r
      };
    }
    getPosFromAbsToElement(e, t, r) {
      var n = this.getFromAbsLt(e, r),
        i = this.getBCRect(t, r);
      return this.getPosToRect(n, i);
    }
    getPosFromAbsToRect(e, t) {
      var r = this.getFromAbsLt(e, t.zc);
      return this.getPosToRect(r, t);
    }
    getFromAbsLt(e, t) {
      return this.getFromAbsPos(e.left, e.top, t);
    }
    buildBcRect(e, t, r, n, i) {
      return {
        left: e,
        top: t,
        right: r,
        bottom: n,
        zc: i
      };
    }
    buildBcRectWH(e, t, r, n, i) {
      return {
        left: e,
        top: t,
        right: e + r,
        bottom: t + n,
        zc: i
      };
    }
    getWrappedRects(e, t) {
      return e.map(e => ({
        element: e,
        rect: this.getBCRect(e, t)
      }));
    }
    getRectWidthHeight(e) {
      return {
        rWidth: e.right - e.left,
        rHeight: e.bottom - e.top
      };
    }
    getBCWidthHeight(e, t) {
      var r = i.A.getElementRect(e);
      return {
        rWidth: (r.right - r.left) / t.zoomRatio,
        rHeight: (r.bottom - r.top) / t.zoomRatio
      };
    }
    getBCRect(e, t) {
      var r = i.A.getElementRect(e),
        n = t.getMtLefTop();
      return {
        left: (r.left - n.left) / t.zoomRatio,
        top: (r.top - n.top) / t.zoomRatio,
        right: (r.right - n.left) / t.zoomRatio,
        bottom: (r.bottom - n.top) / t.zoomRatio,
        zc: t
      };
    }
    toPoint(e) {
      return {
        x: e.left,
        y: e.top
      };
    }
    getPosToRect(e, t) {
      return {
        left: e.left - t.left,
        top: e.top - t.top,
        zc: t.zc
      };
    }
    getBCWidth(e, t) {
      var r;
      return i.A.getElementRect(e).width / t.zoomRatio;
    }
    getBCHeight(e, t) {
      var r;
      return i.A.getElementRect(e).height / t.zoomRatio;
    }
    getBCRects(e, t) {
      var r = e.getClientRects(),
        n = t.getMtLefTop();
      return Array.from(r).map(e => ({
        left: (e.left - n.left) / t.zoomRatio,
        top: (e.top - n.top) / t.zoomRatio,
        right: (e.right - n.left) / t.zoomRatio,
        bottom: (e.bottom - n.top) / t.zoomRatio,
        zc: t
      }));
    }
    getBCRectsToRect(e, t) {
      var r = e.getClientRects(),
        n = t.zc.getMtLefTop(),
        i = t.zc.zoomRatio;
      return Array.from(r).map(e => ({
        left: (e.left - n.left) / i - t.left,
        top: (e.top - n.top) / i - t.top,
        right: (e.right - n.left) / i - t.left,
        bottom: (e.bottom - n.top) / i - t.top,
        zc: t.zc
      }));
    }
    getBCRectToRect(e, t) {
      var r = i.A.getElementRect(e),
        n = t.zc.getMtLefTop(),
        o = t.zc.zoomRatio;
      return {
        left: (r.left - n.left) / o - t.left,
        top: (r.top - n.top) / o - t.top,
        right: (r.right - n.left) / o - t.left,
        bottom: (r.bottom - n.top) / o - t.top,
        zc: t.zc
      };
    }
    getBCRectToElement(e, t, r) {
      var n = this.getBCRect(e, r),
        i = this.getBCRect(t, r);
      return {
        left: n.left - i.left,
        top: n.top - i.top,
        right: n.right - i.left,
        bottom: n.bottom - i.top,
        zc: r
      };
    }
    toAbsoluteRect(e) {
      var t = e.zc.getMtLefTop(),
        r = e.zc;
      return {
        left: e.left * r.zoomRatio + t.left,
        top: e.top * r.zoomRatio + t.top,
        right: e.right * r.zoomRatio + t.left,
        bottom: e.bottom * r.zoomRatio + t.top
      };
    }
    toLeftTopRelative(e, t) {
      var r = t.getMtLefTop();
      return {
        left: (e.left - r.left) / t.zoomRatio,
        top: (e.top - r.top) / t.zoomRatio
      };
    }
    expand(e, t) {
      return this.buildBcRect(e.left - (t.left || 0), e.top - (t.top || 0), e.right + (t.right || 0), e.bottom + (t.bottom || 0), e.zc);
    }
    expandAll(e, t) {
      return this.buildBcRect(e.left - t, e.top - t, e.right + t, e.bottom + t, e.zc);
    }
    getMaxXAxisPos(e, t) {
      var r = e.maxRelativeXAxisPosition.top;
      if ("middle" == t) switch (e.positionType) {
        case "bottom":
          r -= 2;
          break;
        case "top":
          r += 2;
      }
      return {
        left: e.maxRelativeXAxisPosition.left,
        top: r,
        zc: e.maxRelativeXAxisPosition.zc
      };
    }
    geoPosFromCursor(e, t) {
      var r = e.relativeGeoPosition.top;
      if ("middle" == t) switch (e.positionType) {
        case "bottom":
          r -= 2;
          break;
        case "top":
          r += 2;
      }
      return {
        left: e.relativeGeoPosition.left,
        top: r,
        zc: e.relativeGeoPosition.zc
      };
    }
  }
  var l = new a();
};
