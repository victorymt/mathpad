/* module 8019 — 2219 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    S: () => l,
    p: () => a
  });
  var n = r(40927),
    i = r.n(n),
    o = r(39429),
    s = 1e3,
    a = function e(t, r, n) {
      var a = n.lineSize,
        l = n.lineX,
        c = n.topBracketHeight,
        d = n.topPt,
        h = n.scaleXRatio,
        p = r / 10,
        u = r / s / h,
        g = r / s / 1.5,
        m = .9,
        f = t - 2 * p,
        y;
      2 * c * g > f && (g = f / (2 * c));
      var v = t - p,
        b = d.scale(u, g).shift(0, p),
        x = d.scale(u, g).flipY().shift(0, v);
      b = b.curveScaleX(m, 1), x = x.curveScaleX(m, 1);
      var C = Math.max((t - 2 * p) / g - 2 * c, 0),
        S = new o.A();
      S.pushArr(["M ".concat(l, " 0"), "v ".concat(C, " "), "h ".concat(a), "v ".concat(-C)]);
      var A = S.scale(u, g).shift(0, c * g + p),
        w;
      return [i().createElement("path", {
        key: "0",
        d: "".concat(b.path(), " z  ").concat(A.path(), " z"),
        stroke: "none"
      }), i().createElement("path", {
        key: "1",
        d: "".concat(x.path(), " z"),
        stroke: "none"
      })];
    },
    l = function e(t, r, n) {
      var a = n.lineSize,
        l = n.lineX,
        c = n.topBracketHeight,
        d = n.topPt,
        h = n.scaleXRatio,
        p = n.topBracketWidth,
        u = r / 10,
        g = r / s / h,
        m = r / s / 1.5,
        f = .9,
        y = t - 2 * u,
        v;
      2 * c * m > y && (m = y / (2 * c));
      var b = t - u,
        x = (p + 70) * g,
        C = d.scale(g, m).shift(-x, u).flipX(),
        S = d.scale(g, m).flipY().shift(-x, b).flipX();
      C = C.curveScaleX(f, 1), S = S.curveScaleX(f, 1);
      var A = Math.max((t - 2 * u) / m - 2 * c, 0),
        w = new o.A();
      w.pushArr(["M ".concat(l, " 0"), "v ".concat(A, " "), "h ".concat(a), "v ".concat(-A)]);
      var E = w.scale(g, m).shift(-x, c * m + u).flipX(),
        k;
      return [i().createElement("path", {
        key: "0",
        d: "".concat(C.path(), " z ").concat(E.path(), " z"),
        stroke: "none"
      }), i().createElement("path", {
        key: "1",
        d: "".concat(S.path(), " z"),
        stroke: "none"
      })];
    };
};
