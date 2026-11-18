/* module 1825 — 10257 chars */
module.exports = function (e, t) {
  (function () {
    var e = this;
    void 0 === Math.sgn && (Math.sgn = function (e) {
      return 0 == e ? 0 : e > 0 ? 1 : -1;
    });
    var r = function (e, t) {
        return {
          x: e.x - t.x,
          y: e.y - t.y
        };
      },
      n = function (e, t) {
        return e.x * t.x + e.y * t.y;
      },
      i = function (e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
      },
      o = function (e, t) {
        return {
          x: e.x * t,
          y: e.y * t
        };
      },
      s = 64,
      a = Math.pow(2, -65),
      l = function (e, t) {
        for (var n = [], o = d(e, t), s = t.length - 1, a, l = h(o, 2 * s - 1, n, 0), c = r(e, t[0]), p = i(c), u = 0, g = 0; g < l; g++) {
          c = r(e, m(t, s, n[g], null, null));
          var f = i(c);
          f < p && (p = f, u = n[g]);
        }
        return c = r(e, t[s]), (f = i(c)) < p && (p = f, u = 1), {
          location: u,
          distance: p
        };
      },
      c = function (e, t) {
        var r = l(e, t);
        return {
          point: m(t, t.length - 1, r.location, null, null),
          location: r.location
        };
      },
      d = function (e, t) {
        for (var i = t.length - 1, s = 2 * i - 1, a = [], l = [], c = [], d = [], h = [[1, .6, .3, .1], [.4, .6, .6, .4], [.1, .3, .6, 1]], p = 0; p <= i; p++) a[p] = r(t[p], e);
        for (var p = 0; p <= i - 1; p++) l[p] = r(t[p + 1], t[p]), l[p] = o(l[p], 3);
        for (var u = 0; u <= i - 1; u++) for (var g = 0; g <= i; g++) c[u] || (c[u] = []), c[u][g] = n(l[u], a[g]);
        for (p = 0; p <= s; p++) d[p] || (d[p] = []), d[p].y = 0, d[p].x = parseFloat(p) / s;
        for (var m = i, f = i - 1, y = 0; y <= m + f; y++) {
          var v = Math.max(0, y - f),
            b = Math.min(y, m);
          for (p = v; p <= b; p++) {
            var x = y - p;
            d[p + x].y += c[x][p] * h[x][p];
          }
        }
        return d;
      },
      h = function (e, t, r, n) {
        var i = [],
          o = [],
          a,
          l,
          c = [],
          d = [];
        switch (p(e, t)) {
          case 0:
            return 0;
          case 1:
            if (n >= s) return r[0] = (e[0].x + e[t].x) / 2, 1;
            if (u(e, t)) return r[0] = g(e, t), 1;
        }
        m(e, t, .5, i, o), a = h(i, t, c, n + 1), l = h(o, t, d, n + 1);
        for (var f = 0; f < a; f++) r[f] = c[f];
        for (var f = 0; f < l; f++) r[f + a] = d[f];
        return a + l;
      },
      p = function (e, t) {
        var r = 0,
          n,
          i;
        n = i = Math.sgn(e[0].y);
        for (var o = 1; o <= t; o++) (n = Math.sgn(e[o].y)) != i && r++, i = n;
        return r;
      },
      u = function (e, t) {
        var r, n, i, o, s, l, c, d, h, p, u, g, m, f, y, v, b, x;
        l = e[0].y - e[t].y, c = e[t].x - e[0].x, d = e[0].x * e[t].y - e[t].x * e[0].y, b = x = 0;
        for (var C = 1; C < t; C++) {
          var S = l * e[C].x + c * e[C].y + d;
          S > b ? b = S : S < x && (x = S);
        }
        return u = 0, g = 1, m = 0, n = (1 * (v = d - b) - 0 * (y = c)) * (p = 1 / (h = 0 * y - 1 * (f = l))), i = (1 * (v = d - x) - 0 * (y = c)) * (p = 1 / (h = 0 * y - 1 * (f = l))), o = Math.min(n, i), (r = (s = Math.max(n, i)) - o) < a ? 1 : 0;
      },
      g = function (e, t) {
        var r = 1,
          n = 0,
          i = e[t].x - e[0].x,
          o = e[t].y - e[0].y,
          s = e[0].x - 0,
          a,
          l,
          c,
          d;
        return 0 + 1 * ((i * (e[0].y - 0) - o * s) * (1 / (0 * i - 1 * o)));
      },
      m = function (e, t, r, n, i) {
        for (var o = [[]], s = 0; s <= t; s++) o[0][s] = e[s];
        for (var a = 1; a <= t; a++) for (var s = 0; s <= t - a; s++) o[a] || (o[a] = []), o[a][s] || (o[a][s] = {}), o[a][s].x = (1 - r) * o[a - 1][s].x + r * o[a - 1][s + 1].x, o[a][s].y = (1 - r) * o[a - 1][s].y + r * o[a - 1][s + 1].y;
        if (null != n) for (s = 0; s <= t; s++) n[s] = o[s][0];
        if (null != i) for (s = 0; s <= t; s++) i[s] = o[t - s][s];
        return o[t][0];
      },
      f = {},
      y = function (e) {
        var t = f[e];
        if (!t) {
          var r,
            n = function () {
              return function (t) {
                return Math.pow(1 - t, e);
              };
            },
            i = function (e) {
              return function (t) {
                return e;
              };
            },
            o = function () {
              return function (e) {
                return e;
              };
            },
            s = function () {
              return function (e) {
                return 1 - e;
              };
            },
            a = function (e) {
              return function (t) {
                for (var r = 1, n = 0; n < e.length; n++) r *= e[n](t);
                return r;
              };
            };
          (t = []).push(new function () {
            return function (t) {
              return Math.pow(t, e);
            };
          }());
          for (var l = 1; l < e; l++) {
            for (var c = [new i(e)], d = 0; d < e - l; d++) c.push(new o());
            for (var d = 0; d < l; d++) c.push(new s());
            t.push(new a(c));
          }
          t.push(new n()), f[e] = t;
        }
        return t;
      },
      v = function (e, t) {
        for (var r = y(e.length - 1), n = 0, i = 0, o = 0; o < e.length; o++) n += e[o].x * r[o](t), i += e[o].y * r[o](t);
        return {
          x: n,
          y: i
        };
      },
      b = function (e, t) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      },
      x = function (e) {
        return e[0].x === e[1].x && e[0].y === e[1].y;
      },
      C = function (e, t, r) {
        if (x(e)) return {
          point: e[0],
          location: t
        };
        for (var n = v(e, t), i = 0, o = t, s = r > 0 ? 1 : -1, a = null; i < Math.abs(r);) a = v(e, o += .005 * s), i += b(a, n), n = a;
        return {
          point: a,
          location: o
        };
      },
      S = function (e) {
        if (x(e)) return 0;
        for (var t = v(e, 0), r = 0, n = 0, i = 1, o = null; n < 1;) o = v(e, n += .005), r += b(o, t), t = o;
        return r;
      },
      A = function (e, t, r) {
        return C(e, t, r).point;
      },
      w = function (e, t, r) {
        return C(e, t, r).location;
      },
      E = function (e, t) {
        var r = v(e, t),
          n = v(e.slice(0, e.length - 1), t),
          i = n.y - r.y,
          o = n.x - r.x;
        return 0 === i ? 1 / 0 : Math.atan(i / o);
      },
      k = function (e, t, r) {
        var n = C(e, t, r);
        return n.location > 1 && (n.location = 1), n.location < 0 && (n.location = 0), E(e, n.location);
      },
      O = function (e, t, r, n) {
        var i = C(e, t, n = n ?? 0),
          o = E(e, i.location),
          s = Math.atan(-1 / o),
          a = r / 2 * Math.sin(s),
          l = r / 2 * Math.cos(s);
        return [{
          x: i.point.x + l,
          y: i.point.y + a
        }, {
          x: i.point.x - l,
          y: i.point.y - a
        }];
      },
      D = function (e, t, r, n, i) {
        var o = n - t,
          s = e - r,
          a = e * (t - n) + t * (r - e),
          l = T(i),
          c = [o * l[0][0] + s * l[1][0], o * l[0][1] + s * l[1][1], o * l[0][2] + s * l[1][2], o * l[0][3] + s * l[1][3] + a],
          d = R.apply(null, c),
          h = [];
        if (null != d) for (var p = 0; p < 3; p++) {
          var u = d[p],
            g = Math.pow(u, 2),
            m = Math.pow(u, 3),
            f = [l[0][0] * m + l[0][1] * g + l[0][2] * u + l[0][3], l[1][0] * m + l[1][1] * g + l[1][2] * u + l[1][3]],
            y;
          y = r - e !== 0 ? (f[0] - e) / (r - e) : (f[1] - t) / (n - t), u >= 0 && u <= 1 && y >= 0 && y <= 1 && h.push(f);
        }
        return h;
      },
      P = function (e, t, r, n, i) {
        var o = [];
        return o.push.apply(o, D(e, t, e + r, t, i)), o.push.apply(o, D(e + r, t, e + r, t + n, i)), o.push.apply(o, D(e + r, t + n, e, t + n, i)), o.push.apply(o, D(e, t + n, e, t, i)), o;
      },
      M = function (e, t) {
        var r = [];
        return r.push.apply(r, D(e.x, e.y, e.x + e.w, e.y, t)), r.push.apply(r, D(e.x + e.w, e.y, e.x + e.w, e.y + e.h, t)), r.push.apply(r, D(e.x + e.w, e.y + e.h, e.x, e.y + e.h, t)), r.push.apply(r, D(e.x, e.y + e.h, e.x, e.y, t)), r;
      };
    function I(e, t) {
      return [-e[0][t] + 3 * e[1][t] + -3 * e[2][t] + e[3][t], 3 * e[0][t] - 6 * e[1][t] + 3 * e[2][t], -3 * e[0][t] + 3 * e[1][t], e[0][t]];
    }
    function T(e) {
      return [I(e, "x"), I(e, "y")];
    }
    function L(e) {
      return e < 0 ? -1 : e > 0 ? 1 : 0;
    }
    function R(e, t, r, n) {
      var i = t / e,
        o = r / e,
        s = n / e,
        a = (3 * o - Math.pow(i, 2)) / 9,
        l = (9 * i * o - 27 * s - 2 * Math.pow(i, 3)) / 54,
        c = Math.pow(a, 3) + Math.pow(l, 2),
        d,
        h,
        p = [];
      if (c >= 0) d = L(l + Math.sqrt(c)) * Math.pow(Math.abs(l + Math.sqrt(c)), 1 / 3), h = L(l - Math.sqrt(c)) * Math.pow(Math.abs(l - Math.sqrt(c)), 1 / 3), p[0] = -i / 3 + (d + h), p[1] = -i / 3 - (d + h) / 2, p[2] = -i / 3 - (d + h) / 2, 0 !== Math.abs(Math.sqrt(3) * (d - h) / 2) && (p[1] = -1, p[2] = -1);else {
        var u = Math.acos(l / Math.sqrt(-Math.pow(a, 3)));
        p[0] = 2 * Math.sqrt(-a) * Math.cos(u / 3) - i / 3, p[1] = 2 * Math.sqrt(-a) * Math.cos((u + 2 * Math.PI) / 3) - i / 3, p[2] = 2 * Math.sqrt(-a) * Math.cos((u + 4 * Math.PI) / 3) - i / 3;
      }
      for (var g = 0; g < 3; g++) (p[g] < 0 || p[g] > 1) && (p[g] = -1);
      return p;
    }
    var B = this.jsBezier = {
      distanceFromCurve: l,
      gradientAtPoint: E,
      gradientAtPointAlongCurveFrom: k,
      nearestPointOnCurve: c,
      pointOnCurve: v,
      pointAlongCurveFrom: A,
      perpendicularToCurveAt: O,
      locationAlongCurveFrom: w,
      getLength: S,
      lineIntersection: D,
      boxIntersection: P,
      boundingBoxIntersection: M,
      version: "0.9.0"
    };
    t.jsBezier = B;
  }).call("undefined" != typeof window ? window : this);
};
