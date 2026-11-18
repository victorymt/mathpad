/* module 96579 — 6880 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    l: () => p
  });
  var n = r(64467),
    i = r(90113),
    o = r(2543),
    s = r.n(o),
    a = r(516),
    l = r(60693);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    inferCursorHPositionEmptyLine(e, t) {
      if (a.A.isEditAreaBlock(e)) return {
        type: "edit-area-block",
        block: e,
        rect: l.T.getBCRect(e, t)
      };
      if (a.A.isTextEditLine(e)) {
        var r = a.A.getEmptyBlock(e);
        return {
          type: "empty-block",
          emptyBlockRect: l.T.getBCRect(r, t)
        };
      }
      var n = a.A.getBaseLineBlock(e);
      return {
        type: "base-line-block",
        baselineBlock: n,
        baselineBlockRect: l.T.getBCRect(n, t)
      };
    }
    inferCursorHPosition(e, t, r) {
      if (a.A.isTextEditLine(e)) return this.inferCursorHPositionForTextLine(t, r);
      if (a.A.isEditAreaBlock(e)) return {
        type: "edit-area-block",
        block: e,
        rect: l.T.getBCRect(e, t.rect.zc)
      };
      var n = a.A.getBaseLineBlock(e);
      return {
        type: "base-line-block",
        baselineBlock: n,
        baselineBlockRect: l.T.getBCRect(n, t.rect.zc)
      };
    }
    inferCursorHPositionForTextLine(e, t) {
      var r = e.rbs.find(e => e.isChar),
        n;
      if (r) return {
        type: "rect-block",
        rb: r
      };
      if (a.A.isComposite(t) && t.reactInstance && t.reactInstance.getDefaultBaseLine) return {
        type: "custom-baseline",
        info: t.reactInstance.getDefaultBaseLine()
      };
      for (var i = e.rbs, o = i[0].rect.top, s = i[0].rect.bottom, l = 1; l < i.length; l++) {
        var c = i[l];
        o = Math.max(o, c.rect.top), s = Math.min(s, c.rect.bottom);
      }
      return {
        type: "non-char-block-intersection",
        top: Math.min(o, s),
        bottom: Math.max(o, s)
      };
    }
    clampPos(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        n = this.findWLine(e, {
          top: t.top,
          bottom: t.top
        });
      return this.clampPosWithWLine(n, t, r);
    }
    clampPosWithWLine(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        n = this.findSelectedRectByPos(e.rbs, t),
        i = Math.max(n.rect.top, e.rect.top),
        o = Math.min(n.rect.bottom, e.rect.bottom);
      return d(d({}, t), {}, {
        left: s().clamp(t.left, n.rect.left + r, n.rect.right - r),
        top: s().clamp(t.top, i + r, o - r)
      });
    }
    findSelectedRectByPos(e, t) {
      if (t.left <= s().first(e).rect.right) return s().first(e);
      if (t.left >= s().last(e).rect.left) return s().last(e);
      for (var r = 0; r < e.length - 1; r++) {
        var n = e[r],
          i = e[r + 1];
        if (n.rect.left <= t.left && t.left <= n.rect.right) return n;
        if (i.rect.left <= t.left && t.left <= i.rect.right) return i;
        if (n.rect.right <= t.left && t.left <= i.rect.left) return Math.abs(t.left - n.rect.right) < Math.abs(t.left - i.rect.left) ? n : i;
      }
      return s().last(e);
    }
    isAtEdge(e, t) {
      if (!(e.length <= 0 || e[0].rbs.length <= 0)) {
        var r = this.findWLine(e, t);
        if (r) return i.H.almostMatch(r.rect.left, t.left) ? [r, "left"] : i.H.almostMatch(r.rect.right, t.left) ? [r, "right"] : void 0;
      }
    }
    findWLineFromRect(e, t) {
      return this.findWLine(e, t);
    }
    matchWithExtendedVLinesWithRect(e, t, r) {
      for (var n = 0; n < r.length; n++) {
        var i = r[n],
          o = this.matchWithExtendedVLineWithRect(e, t, i);
        if (o) return [o, i, Math.round(t.left) >= Math.round(i.vline.left - 1) ? "right" : "left"];
      }
    }
    matchWithExtendedVLineWithRect(e, t, r) {
      return this.matchWithExtendedVLine(e, t, r) ? "left" : this.matchWithExtendedVLine(e, i.H.vlineFromRect(t, "right"), r) ? "right" : void 0;
    }
    matchWithExtendedVLine(e, t, r) {
      var n, o, s;
      return this.findWLine(e, t) == this.findWLine(e, r.vline) && ("non-extended" == r.type ? i.H.almostMatch(t.left, r.vline.left) : "not-matched" != i.H.horizontalVLineSideCompare(t, r.extended));
    }
    almostMatchVLine(e, t, r) {
      var n, o;
      return this.findWLine(e, t) == this.findWLine(e, r) && i.H.almostMatch(t.left, r.left);
    }
    findWLineFromGeo(e, t) {
      var r;
      return null !== (r = e.find(e => t.top < e.rect.bottom)) && void 0 !== r ? r : e[e.length - 1];
    }
    findWLine(e, t) {
      var r;
      return null !== (r = e.find(e => (t.top + t.bottom) / 2 < e.rect.bottom)) && void 0 !== r ? r : e[e.length - 1];
    }
    findRectBLock(e, t) {
      var r;
      return null !== (r = e.find(e => t.left < e.rect.right)) && void 0 !== r ? r : e[e.length - 1];
    }
    inferVLineExtended(e, t) {
      for (var r, n = null !== (r = e.find(e => t.top < e.rect.bottom)) && void 0 !== r ? r : e[0], o = 0; o < n.rbs.length; o++) {
        var s = n.rbs[o],
          a = o <= 0 ? void 0 : n.rbs[o - 1],
          l = o < n.rbs.length - 1 ? n.rbs[o + 1] : void 0;
        if (i.H.almostMatch(s.rect.left, t.left)) return !a || i.H.almostMatch(a.rect.right, s.rect.left) ? {
          type: "non-extended",
          vline: t
        } : {
          type: "extended",
          vline: t,
          extended: {
            left: a.rect.right,
            top: n.rect.top,
            bottom: n.rect.bottom,
            right: s.rect.left
          }
        };
        if (i.H.almostMatch(s.rect.right, t.left)) return !l || i.H.almostMatch(l.rect.left, s.rect.left) ? {
          type: "non-extended",
          vline: t
        } : {
          type: "extended",
          vline: t,
          extended: {
            left: s.rect.right,
            top: n.rect.top,
            bottom: n.rect.bottom,
            right: l.rect.left
          }
        };
        if (s.rect.left < t.left && t.left < s.rect.right) return {
          type: "non-extended",
          vline: t
        };
      }
      return {
        type: "non-extended",
        vline: t
      };
    }
  }
  var p = new h();
};
