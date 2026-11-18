/* module 89473 — 3966 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    z: () => p
  });
  var n = r(64467),
    i = r(516),
    o = r(2543),
    s = r.n(o),
    a = r(60693),
    l = r(10632);
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
    extract(e, t, r) {
      var n = this.extractRects(t, r);
      n.sort(this.sortComparator);
      var i = this.verticalSlot(n);
      return this.normalizeLines(e, i, r);
    }
    sortComparator(e, t) {
      return e.rect.top - t.rect.top;
    }
    normalizeLines(e, t, r) {
      if (t.length <= 0 || t[0].length <= 0) return [];
      for (var n = a.T.getBCRect(e, r), i = new Array(t.length), o = 0; o < t.length; o++) {
        var l = t[o],
          c = this.extractBounding(l, r),
          h = {
            rect: c,
            rbs: l
          };
        if (0 == o) {
          var p = Math.min(n.top, c.top);
          h.rect = d(d({}, h.rect), {}, {
            top: p
          });
        }
        if (o > 0) {
          var u = i[o - 1],
            g = Math.round((u.rect.bottom + h.rect.top) / 2);
          u.rect = d(d({}, u.rect), {}, {
            bottom: g
          }), h.rect = d(d({}, h.rect), {}, {
            top: g + 1
          });
        }
        if (o >= t.length - 1) {
          var m = Math.max(n.bottom, c.bottom);
          h.rect = d(d({}, h.rect), {}, {
            bottom: m
          });
        }
        i[o] = h;
      }
      return i.forEach(e => {
        e.rbs = s().orderBy(e.rbs, e => e.rect.left, "asc");
      }), i;
    }
    extractBounding(e, t) {
      for (var r = e[0].rect, n = r.left, i = r.top, o = r.right, s = r.bottom, l = 1; l < e.length; l++) {
        var c = e[l];
        n = Math.min(n, c.rect.left), o = Math.max(o, c.rect.right), i = Math.min(i, c.rect.top), s = Math.max(s, c.rect.bottom);
      }
      return a.T.buildBcRect(n, i, o, s, t);
    }
    verticalSlot(e) {
      for (var t = [[]], r = t[0], n = 0, i = 0; i < e.length; i++) {
        var o = e[i];
        r.length <= 0 ? (r.push(o), n = o.rect.bottom) : o.rect.top < n - 2 ? (r.push(o), n = o.rect.bottom) : (r = [], t.push(r), r.push(o), n = o.rect.bottom);
      }
      return t;
    }
    extractRectsForDiagramInline(e, t) {
      var r = a.T.getBCRect(e, t),
        n = i.A.getComputedStyleAsNumber(e, "verticalAlign"),
        o,
        s;
      return isNaN(n) ? [{
        block: e,
        isChar: !1,
        rect: r
      }] : (n > 0 ? o = d(d({}, r), {}, {
        bottom: r.bottom + n
      }) : n + a.T.heightOf(r) <= 0 && (o = d(d({}, r), {}, {
        top: r.bottom + n - 5
      })), [{
        block: e,
        isChar: !1,
        rect: o || r
      }]);
    }
    extractRects(e, t) {
      var r;
      return s().flatMap(e, e => {
        if (i.A.isNonChar(e)) return i.A.isInlineDiagram(e) ? this.extractRectsForDiagramInline(e, t) : l.x.getCompositeBlockRects(e, t).map(t => ({
          block: e,
          isChar: !1,
          rect: t
        }));
        var r = document.createRange(),
          n;
        return r.setStart(e.firstChild, 0), r.setEnd(e.firstChild, e.textContent.length), a.T.getBCRects(r, t).map(t => ({
          block: e,
          isChar: !0,
          rect: t
        }));
      });
    }
  }
  var p = new h();
};
