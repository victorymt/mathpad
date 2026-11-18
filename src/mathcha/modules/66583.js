/* module 66583 — 16692 chars */
module.exports = function (e, t, r) {
  !function () {
    "use strict";

    var t = Math.abs,
      n = Math.cos,
      i = Math.sin,
      o = Math.acos,
      s = Math.atan2,
      a = Math.sqrt,
      l = Math.pow,
      c = function (e) {
        return e < 0 ? -l(-e, 1 / 3) : l(e, 1 / 3);
      },
      d = Math.PI,
      h = 2 * d,
      p = d / 2,
      u = 1e-6,
      g = Number.MAX_SAFE_INTEGER || 9007199254740991,
      m = Number.MIN_SAFE_INTEGER || -9007199254740991,
      f = {
        x: 0,
        y: 0,
        z: 0
      },
      y = {
        Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
        Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
        arcfn: function (e, t) {
          var r = t(e),
            n = r.x * r.x + r.y * r.y;
          return void 0 !== r.z && (n += r.z * r.z), a(n);
        },
        compute: function (e, t, r) {
          if (0 === e) return t[0];
          var n = t.length - 1;
          if (1 === e) return t[n];
          var i = t,
            o = 1 - e;
          if (0 === n) return t[0];
          if (1 === n) return p = {
            x: o * i[0].x + e * i[1].x,
            y: o * i[0].y + e * i[1].y
          }, r && (p.z = o * i[0].z + e * i[1].z), p;
          if (n < 4) {
            var s = o * o,
              a = e * e,
              l,
              c,
              d,
              h = 0;
            2 === n ? (i = [i[0], i[1], i[2], f], l = s, c = o * e * 2, d = a) : 3 === n && (l = s * o, c = s * e * 3, d = o * a * 3, h = e * a);
            var p = {
              x: l * i[0].x + c * i[1].x + d * i[2].x + h * i[3].x,
              y: l * i[0].y + c * i[1].y + d * i[2].y + h * i[3].y
            };
            return r && (p.z = l * i[0].z + c * i[1].z + d * i[2].z + h * i[3].z), p;
          }
          for (var u = JSON.parse(JSON.stringify(t)); u.length > 1;) {
            for (var g = 0; g < u.length - 1; g++) u[g] = {
              x: u[g].x + (u[g + 1].x - u[g].x) * e,
              y: u[g].y + (u[g + 1].y - u[g].y) * e
            }, void 0 !== u[g].z && (u[g] = u[g].z + (u[g + 1].z - u[g].z) * e);
            u.splice(u.length - 1, 1);
          }
          return u[0];
        },
        derive: function (e, t) {
          for (var r = [], n = e, i = n.length, o = i - 1; i > 1; i--, o--) {
            for (var s = [], a = 0, l; a < o; a++) l = {
              x: o * (n[a + 1].x - n[a].x),
              y: o * (n[a + 1].y - n[a].y)
            }, t && (l.z = o * (n[a + 1].z - n[a].z)), s.push(l);
            r.push(s), n = s;
          }
          return r;
        },
        between: function (e, t, r) {
          return t <= e && e <= r || y.approximately(e, t) || y.approximately(e, r);
        },
        approximately: function (e, r, n) {
          return t(e - r) <= (n || u);
        },
        length: function (e) {
          var t = .5,
            r = 0,
            n = y.Tvalues.length,
            i,
            o;
          for (i = 0; i < n; i++) o = t * y.Tvalues[i] + t, r += y.Cvalues[i] * y.arcfn(o, e);
          return t * r;
        },
        map: function (e, t, r, n, i) {
          var o, s, a, l;
          return n + (i - n) * ((e - t) / (r - t));
        },
        lerp: function (e, t, r) {
          var n = {
            x: t.x + e * (r.x - t.x),
            y: t.y + e * (r.y - t.y)
          };
          return t.z && r.z && (n.z = t.z + e * (r.z - t.z)), n;
        },
        pointToString: function (e) {
          var t = e.x + "/" + e.y;
          return void 0 !== e.z && (t += "/" + e.z), t;
        },
        pointsToString: function (e) {
          return "[" + e.map(y.pointToString).join(", ") + "]";
        },
        copy: function (e) {
          return JSON.parse(JSON.stringify(e));
        },
        angle: function (e, t, r) {
          var n = t.x - e.x,
            i = t.y - e.y,
            o = r.x - e.x,
            a = r.y - e.y,
            l,
            c;
          return s(n * a - i * o, n * o + i * a);
        },
        round: function (e, t) {
          var r = "" + e,
            n = r.indexOf(".");
          return parseFloat(r.substring(0, n + 1 + t));
        },
        dist: function (e, t) {
          var r = e.x - t.x,
            n = e.y - t.y;
          return a(r * r + n * n);
        },
        closest: function (e, t) {
          var r = l(2, 63),
            n,
            i;
          return e.forEach(function (e, o) {
            (i = y.dist(t, e)) < r && (r = i, n = o);
          }), {
            mdist: r,
            mpos: n
          };
        },
        abcratio: function (e, r) {
          if (2 !== r && 3 !== r) return !1;
          if (void 0 === e) e = .5;else if (0 === e || 1 === e) return e;
          var n = l(e, r) + l(1 - e, r),
            i;
          return t((n - 1) / n);
        },
        projectionratio: function (e, t) {
          if (2 !== t && 3 !== t) return !1;
          if (void 0 === e) e = .5;else if (0 === e || 1 === e) return e;
          var r = l(1 - e, t),
            n;
          return r / (l(e, t) + r);
        },
        lli8: function (e, t, r, n, i, o, s, a) {
          var l,
            c,
            d = (e - r) * (o - a) - (t - n) * (i - s);
          return 0 != d && {
            x: ((e * n - t * r) * (i - s) - (e - r) * (i * a - o * s)) / d,
            y: ((e * n - t * r) * (o - a) - (t - n) * (i * a - o * s)) / d
          };
        },
        lli4: function (e, t, r, n) {
          var i = e.x,
            o = e.y,
            s = t.x,
            a = t.y,
            l = r.x,
            c = r.y,
            d = n.x,
            h = n.y;
          return y.lli8(i, o, s, a, l, c, d, h);
        },
        lli: function (e, t) {
          return y.lli4(e, e.c, t, t.c);
        },
        makeline: function (e, t) {
          var n = r(6307),
            i = e.x,
            o = e.y,
            s = t.x,
            a = t.y,
            l = (s - i) / 3,
            c = (a - o) / 3;
          return new n(i, o, i + l, o + c, i + 2 * l, o + 2 * c, s, a);
        },
        findbbox: function (e) {
          var t = g,
            r = g,
            n = m,
            i = m;
          return e.forEach(function (e) {
            var o = e.bbox();
            t > o.x.min && (t = o.x.min), r > o.y.min && (r = o.y.min), n < o.x.max && (n = o.x.max), i < o.y.max && (i = o.y.max);
          }), {
            x: {
              min: t,
              mid: (t + n) / 2,
              max: n,
              size: n - t
            },
            y: {
              min: r,
              mid: (r + i) / 2,
              max: i,
              size: i - r
            }
          };
        },
        shapeintersections: function (e, t, r, n, i) {
          if (!y.bboxoverlap(t, n)) return [];
          var o = [],
            s = [e.startcap, e.forward, e.back, e.endcap],
            a = [r.startcap, r.forward, r.back, r.endcap];
          return s.forEach(function (t) {
            t.virtual || a.forEach(function (n) {
              if (!n.virtual) {
                var s = t.intersects(n, i);
                s.length > 0 && (s.c1 = t, s.c2 = n, s.s1 = e, s.s2 = r, o.push(s));
              }
            });
          }), o;
        },
        makeshape: function (e, t, r) {
          var n = t.points.length,
            i = e.points.length,
            o = y.makeline(t.points[n - 1], e.points[0]),
            s = y.makeline(e.points[i - 1], t.points[0]),
            a = {
              startcap: o,
              forward: e,
              back: t,
              endcap: s,
              bbox: y.findbbox([o, e, t, s])
            },
            l = y;
          return a.intersections = function (e) {
            return l.shapeintersections(a, a.bbox, e, e.bbox, r);
          }, a;
        },
        getminmax: function (e, t, r) {
          if (!r) return {
            min: 0,
            max: 0
          };
          var n = g,
            i = m,
            o,
            s;
          -1 === r.indexOf(0) && (r = [0].concat(r)), -1 === r.indexOf(1) && r.push(1);
          for (var a = 0, l = r.length; a < l; a++) o = r[a], (s = e.get(o))[t] < n && (n = s[t]), s[t] > i && (i = s[t]);
          return {
            min: n,
            mid: (n + i) / 2,
            max: i,
            size: i - n
          };
        },
        align: function (e, t) {
          var r = t.p1.x,
            o = t.p1.y,
            a = -s(t.p2.y - o, t.p2.x - r),
            l = function (e) {
              return {
                x: (e.x - r) * n(a) - (e.y - o) * i(a),
                y: (e.x - r) * i(a) + (e.y - o) * n(a)
              };
            };
          return e.map(l);
        },
        roots: function (e, t) {
          t = t || {
            p1: {
              x: 0,
              y: 0
            },
            p2: {
              x: 1,
              y: 0
            }
          };
          var r = e.length - 1,
            i = y.align(e, t),
            s = function (e) {
              return 0 <= e && e <= 1;
            };
          if (2 === r) {
            var l, d, p, u;
            if (0 !== (u = (l = i[0].y) - 2 * (d = i[1].y) + (p = i[2].y))) {
              var g = -a(d * d - l * p),
                m = -l + d,
                f,
                v;
              return [f = -(g + m) / u, -(-g + m) / u].filter(s);
            }
            return d !== p && 0 === u ? [(2 * d - p) / (2 * d - 2 * p)].filter(s) : [];
          }
          var b = i[0].y,
            x = i[1].y,
            C = i[2].y,
            S,
            u = 3 * x - b - 3 * C + i[3].y,
            l = 3 * b - 6 * x + 3 * C,
            d = -3 * b + 3 * x,
            p = b;
          if (y.approximately(u, 0)) {
            if (y.approximately(l, 0)) return y.approximately(d, 0) ? [] : [-p / d].filter(s);
            var A,
              w = 2 * l;
            return [((A = a(d * d - 4 * l * p)) - d) / w, (-d - A) / w].filter(s);
          }
          var i,
            E = (i = (3 * (d /= u) - (l /= u) * l) / 3) / 3,
            A,
            k = (A = (2 * l * l * l - 9 * l * d + 27 * (p /= u)) / 27) / 2,
            O = k * k + E * E * E,
            D,
            f,
            P,
            M,
            I;
          if (O < 0) {
            var T = -i / 3,
              L,
              R = a(T * T * T),
              B = -A / (2 * R),
              F,
              j = o(B < -1 ? -1 : B > 1 ? 1 : B),
              _,
              N = 2 * c(R);
            return [P = N * n(j / 3) - l / 3, M = N * n((j + h) / 3) - l / 3, I = N * n((j + 2 * h) / 3) - l / 3].filter(s);
          }
          if (0 === O) return [P = 2 * (D = k < 0 ? c(-k) : -c(k)) - l / 3, M = -D - l / 3].filter(s);
          var z = a(O);
          return [(D = c(-k + z)) - (f = c(k + z)) - l / 3].filter(s);
        },
        droots: function (e) {
          if (3 === e.length) {
            var t = e[0],
              r = e[1],
              n = e[2],
              i = t - 2 * r + n;
            if (0 !== i) {
              var o = -a(r * r - t * n),
                s = -t + r,
                l,
                c;
              return [-(o + s) / i, -(-o + s) / i];
            }
            return r !== n && 0 === i ? [(2 * r - n) / (2 * (r - n))] : [];
          }
          var t, r;
          if (2 === e.length) return (t = e[0]) !== (r = e[1]) ? [t / (t - r)] : [];
        },
        curvature: function (e, t, r) {
          var n = y.derive(t),
            i = n[0],
            o = n[1],
            s = y.compute(e, i),
            c = y.compute(e, o),
            d,
            h;
          return r ? (d = a(l(s.y * c.z - c.y * s.z, 2) + l(s.z * c.x - c.z * s.x, 2) + l(s.x * c.y - c.x * s.y, 2)), h = l(s.x * s.x + s.y * s.y + s.z * s.z, 1.5)) : (d = s.x * c.y - s.y * c.x, h = l(s.x * s.x + s.y * s.y, 1.5)), 0 === d || 0 === h ? {
            k: 0,
            r: 0
          } : {
            k: d / h,
            r: h / d
          };
        },
        inflections: function (e) {
          if (e.length < 4) return [];
          var t = y.align(e, {
              p1: e[0],
              p2: e.slice(-1)[0]
            }),
            r = t[2].x * t[1].y,
            n = t[3].x * t[1].y,
            i = t[1].x * t[2].y,
            o,
            s = 18 * (-3 * r + 2 * n + 3 * i - (o = t[3].x * t[2].y)),
            a = 18 * (3 * r - n - 3 * i),
            l = 18 * (i - r);
          if (y.approximately(s, 0)) {
            if (!y.approximately(a, 0)) {
              var c = -l / a;
              if (0 <= c && c <= 1) return [c];
            }
            return [];
          }
          var d = a * a - 4 * s * l,
            h = Math.sqrt(d),
            o = 2 * s;
          return y.approximately(o, 0) ? [] : [(h - a) / o, -(a + h) / o].filter(function (e) {
            return 0 <= e && e <= 1;
          });
        },
        bboxoverlap: function (e, r) {
          var n = ["x", "y"],
            i = n.length,
            o,
            s,
            a,
            l,
            c;
          for (o = 0; o < i; o++) if (a = e[s = n[o]].mid, l = r[s].mid, c = (e[s].size + r[s].size) / 2, t(a - l) >= c) return !1;
          return !0;
        },
        expandbox: function (e, t) {
          t.x.min < e.x.min && (e.x.min = t.x.min), t.y.min < e.y.min && (e.y.min = t.y.min), t.z && t.z.min < e.z.min && (e.z.min = t.z.min), t.x.max > e.x.max && (e.x.max = t.x.max), t.y.max > e.y.max && (e.y.max = t.y.max), t.z && t.z.max > e.z.max && (e.z.max = t.z.max), e.x.mid = (e.x.min + e.x.max) / 2, e.y.mid = (e.y.min + e.y.max) / 2, e.z && (e.z.mid = (e.z.min + e.z.max) / 2), e.x.size = e.x.max - e.x.min, e.y.size = e.y.max - e.y.min, e.z && (e.z.size = e.z.max - e.z.min);
        },
        pairiteration: function (e, t, r) {
          var n = e.bbox(),
            i = t.bbox(),
            o = 1e5,
            s = r || .5;
          if (n.x.size + n.y.size < s && i.x.size + i.y.size < s) return [(o * (e._t1 + e._t2) / 2 | 0) / o + "/" + (o * (t._t1 + t._t2) / 2 | 0) / o];
          var a = e.split(.5),
            l = t.split(.5),
            c = [{
              left: a.left,
              right: l.left
            }, {
              left: a.left,
              right: l.right
            }, {
              left: a.right,
              right: l.right
            }, {
              left: a.right,
              right: l.left
            }];
          c = c.filter(function (e) {
            return y.bboxoverlap(e.left.bbox(), e.right.bbox());
          });
          var d = [];
          return 0 === c.length ? d : (c.forEach(function (e) {
            d = d.concat(y.pairiteration(e.left, e.right, s));
          }), d = d.filter(function (e, t) {
            return d.indexOf(e) === t;
          }));
        },
        getccenter: function (e, t, r) {
          var o = t.x - e.x,
            a = t.y - e.y,
            l = r.x - t.x,
            c = r.y - t.y,
            d = o * n(p) - a * i(p),
            u = o * i(p) + a * n(p),
            g = l * n(p) - c * i(p),
            m = l * i(p) + c * n(p),
            f = (e.x + t.x) / 2,
            v = (e.y + t.y) / 2,
            b = (t.x + r.x) / 2,
            x = (t.y + r.y) / 2,
            C = f + d,
            S = v + u,
            A = b + g,
            w = x + m,
            E = y.lli8(f, v, C, S, b, x, A, w),
            k = y.dist(E, e),
            O = s(e.y - E.y, e.x - E.x),
            D = s(t.y - E.y, t.x - E.x),
            P = s(r.y - E.y, r.x - E.x),
            M;
          return O < P ? ((O > D || D > P) && (O += h), O > P && (M = P, P = O, O = M)) : P < D && D < O ? (M = P, P = O, O = M) : P += h, E.s = O, E.e = P, E.r = k, E;
        },
        numberSort: function (e, t) {
          return e - t;
        }
      };
    e.exports = y;
  }();
};
