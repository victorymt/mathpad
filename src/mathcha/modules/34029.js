/* module 34029 — 1687 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(40927),
    i = r.n(n),
    o = r(43923),
    s = r(19539),
    a = r(38070),
    l = r(88925),
    c = r(22005);
  class d {
    renderPolygon(e, t, r, n, l, c, d) {
      for (var h = "", p = 0; p < t.length; p++) {
        var u = t[p];
        h += " ".concat(s.A.round2(u.x), ",").concat(s.A.round2(u.y));
      }
      var g = null;
      return (a.A.noFillColor(c.style) || o.A.isAnySelection(d)) && (g = i().createElement("polygon", {
        className: "transparent no-print",
        points: h,
        style: o.A.getSelectionStyle(d, e)
      })), i().createElement("g", {
        key: e.id,
        className: r,
        onDoubleClick: l,
        onMouseDown: t => n(t, e),
        onTouchStart: t => n(t, e)
      }, c.defs, g, i().createElement("polygon", {
        className: "real",
        points: h,
        style: c.style
      }));
    }
    renderPolygonCurve(e, t, r, n, s, a, c) {
      var d = l.A.pathsD(t),
        h = s.disableGuide ? void 0 : this.renderCubicGuideLineToControlPoints(t, s.isSelected);
      return i().createElement("g", {
        key: e.id,
        className: r,
        onDoubleClick: a,
        onMouseDown: t => c(t, e),
        onTouchStart: t => c(t, e)
      }, n.defs, h, i().createElement("path", {
        className: "transparent no-print",
        d,
        style: o.A.getSelectionStyle(s, e)
      }), i().createElement("path", {
        className: "real",
        d,
        style: n.style
      }));
    }
    renderCubicGuideLineToControlPoints(e, t) {
      return t ? c.A.getCubicControlPointGuides(e) : null;
    }
  }
  const h = new d();
};
