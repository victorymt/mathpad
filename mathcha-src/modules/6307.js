/* module 6307 — 17972 chars */
module.exports = function (e, t, r) {
  !function () {
    "use strict";

    var t = Math.abs,
      n = Math.min,
      i = Math.max,
      o = Math.cos,
      s = Math.sin,
      a = Math.acos,
      l = Math.sqrt,
      c = Math.PI,
      d = {
        x: 0,
        y: 0,
        z: 0
      },
      h = r(66583),
      p = r(26188),
      u = function (e) {
        var r = e && e.forEach ? e : [].slice.call(arguments),
          n = !1;
        if ("object" == typeof r[0]) {
          n = r.length;
          var i = [];
          r.forEach(function (e) {
            ["x", "y", "z"].forEach(function (t) {
              void 0 !== e[t] && i.push(e[t]);
            });
          }), r = i;
        }
        var o = !1,
          s = r.length;
        if (n) {
          if (n > 4) {
            if (1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
            o = !0;
          }
        } else if (6 !== s && 8 !== s && 9 !== s && 12 !== s && 1 !== arguments.length) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        var a = !o && (9 === s || 12 === s) || e && e[0] && void 0 !== e[0].z;
        this._3d = a;
        for (var l = [], c = 0, d = a ? 3 : 2; c < s; c += d) {
          var p = {
            x: r[c],
            y: r[c + 1]
          };
          a && (p.z = r[c + 2]), l.push(p);
        }
        this.order = l.length - 1, this.points = l;
        var u = ["x", "y"];
        a && u.push("z"), this.dims = u, this.dimlen = u.length, function (e) {
          for (var r = e.order, n = e.points, i = h.align(n, {
              p1: n[0],
              p2: n[r]
            }), o = 0; o < i.length; o++) if (t(i[o].y) > 1e-4) return void (e._linear = !1);
          e._linear = !0;
        }(this), this._t1 = 0, this._t2 = 1, this.update();
      },
      g = r(5769);
    function m(e, t, r, n, i) {
      void 0 === i && (i = .5);
      var o = h.projectionratio(i, e),
        s = 1 - o,
        a = {
          x: o * t.x + s * n.x,
          y: o * t.y + s * n.y
        },
        l = h.abcratio(i, e),
        c;
      return {
        A: {
          x: r.x + (r.x - a.x) / l,
          y: r.y + (r.y - a.y) / l
        },
        B: r,
        C: a
      };
    }
    u.SVGtoBeziers = function (e) {
      return g(u, e);
    }, u.quadraticFromPoints = function (e, t, r, n) {
      if (void 0 === n && (n = .5), 0 === n) return new u(t, t, r);
      if (1 === n) return new u(e, t, t);
      var i = m(2, e, t, r, n);
      return new u(e, i.A, r);
    }, u.cubicFromPoints = function (e, t, r, n, i) {
      void 0 === n && (n = .5);
      var o = m(3, e, t, r, n);
      void 0 === i && (i = h.dist(t, o.C));
      var s = i * (1 - n) / n,
        a = h.dist(e, r),
        l = (r.x - e.x) / a,
        c = (r.y - e.y) / a,
        d = i * l,
        p = i * c,
        g = s * l,
        f = s * c,
        y = t.x - d,
        v = t.y - p,
        b = t.x + g,
        x = t.y + f,
        C = o.A,
        S = C.x + (y - C.x) / (1 - n),
        A = C.y + (v - C.y) / (1 - n),
        w = C.x + (b - C.x) / n,
        E = C.y + (x - C.y) / n,
        k = {
          x: e.x + (S - e.x) / n,
          y: e.y + (A - e.y) / n
        },
        O = {
          x: r.x + (w - r.x) / (1 - n),
          y: r.y + (E - r.y) / (1 - n)
        };
      return new u(e, k, O, r);
    };
    var f = function () {
      return h;
    };
    u.getUtils = f, u.PolyBezier = p, u.prototype = {
      getUtils: f,
      valueOf: function () {
        return this.toString();
      },
      toString: function () {
        return h.pointsToString(this.points);
      },
      toSVG: function (e) {
        if (this._3d) return !1;
        for (var t = this.points, r, n, i = ["M", t[0].x, t[0].y, 2 === this.order ? "Q" : "C"], o = 1, s = t.length; o < s; o++) i.push(t[o].x), i.push(t[o].y);
        return i.join(" ");
      },
      update: function () {
        this._lut = [], this.dpoints = h.derive(this.points, this._3d), this.computedirection();
      },
      computedirection: function () {
        var e = this.points,
          t = h.angle(e[0], e[this.order], e[1]);
        this.clockwise = t > 0;
      },
      length: function () {
        return h.length(this.derivative.bind(this));
      },
      _lut: [],
      getLUT: function (e) {
        if (e = e || 100, this._lut.length === e) return this._lut;
        this._lut = [], e--;
        for (var t = 0; t <= e; t++) this._lut.push(this.compute(t / e));
        return this._lut;
      },
      on: function (e, t) {
        t = t || 5;
        for (var r = this.getLUT(), n = [], i, o = 0, s = 0; s < r.length; s++) i = r[s], h.dist(i, e) < t && (n.push(i), o += s / r.length);
        return !!n.length && o / n.length;
      },
      project: function (e) {
        var t = this.getLUT(),
          r = t.length - 1,
          n = h.closest(t, e),
          i = n.mdist,
          o = n.mpos;
        if (0 === o || o === r) {
          var s = o / r,
            a = this.compute(s);
          return a.t = s, a.d = i, a;
        }
        var l,
          s,
          c,
          d,
          p,
          u = (o + 1) / r,
          g = .1 / r;
        for (i += 1, l = s = (o - 1) / r; s < u + g; s += g) c = this.compute(s), (d = h.dist(e, c)) < i && (i = d, l = s);
        return (c = this.compute(l)).t = l, c.d = i, c;
      },
      get: function (e) {
        return this.compute(e);
      },
      point: function (e) {
        return this.points[e];
      },
      compute: function (e) {
        return h.compute(e, this.points, this._3d);
      },
      raise: function () {
        for (var e = this.points, t = [e[0]], r, n = e.length, i, o, r = 1; r < n; r++) i = e[r], o = e[r - 1], t[r] = {
          x: (n - r) / n * i.x + r / n * o.x,
          y: (n - r) / n * i.y + r / n * o.y
        };
        return t[n] = e[n - 1], new u(t);
      },
      derivative: function (e) {
        var t = 1 - e,
          r,
          n,
          i = 0,
          o = this.dpoints[0];
        2 === this.order && (o = [o[0], o[1], d], r = t, n = e), 3 === this.order && (r = t * t, n = t * e * 2, i = e * e);
        var s = {
          x: r * o[0].x + n * o[1].x + i * o[2].x,
          y: r * o[0].y + n * o[1].y + i * o[2].y
        };
        return this._3d && (s.z = r * o[0].z + n * o[1].z + i * o[2].z), s;
      },
      curvature: function (e) {
        return h.curvature(e, this.points, this._3d);
      },
      inflections: function () {
        return h.inflections(this.points);
      },
      normal: function (e) {
        return this._3d ? this.__normal3(e) : this.__normal2(e);
      },
      __normal2: function (e) {
        var t = this.derivative(e),
          r = l(t.x * t.x + t.y * t.y);
        return {
          x: -t.y / r,
          y: t.x / r
        };
      },
      __normal3: function (e) {
        var t = this.derivative(e),
          r = this.derivative(e + .01),
          n = l(t.x * t.x + t.y * t.y + t.z * t.z),
          i = l(r.x * r.x + r.y * r.y + r.z * r.z);
        t.x /= n, t.y /= n, t.z /= n, r.x /= i, r.y /= i, r.z /= i;
        var o = {
            x: r.y * t.z - r.z * t.y,
            y: r.z * t.x - r.x * t.z,
            z: r.x * t.y - r.y * t.x
          },
          s = l(o.x * o.x + o.y * o.y + o.z * o.z);
        o.x /= s, o.y /= s, o.z /= s;
        var a = [o.x * o.x, o.x * o.y - o.z, o.x * o.z + o.y, o.x * o.y + o.z, o.y * o.y, o.y * o.z - o.x, o.x * o.z - o.y, o.y * o.z + o.x, o.z * o.z],
          c;
        return {
          x: a[0] * t.x + a[1] * t.y + a[2] * t.z,
          y: a[3] * t.x + a[4] * t.y + a[5] * t.z,
          z: a[6] * t.x + a[7] * t.y + a[8] * t.z
        };
      },
      hull: function (e) {
        var t = this.points,
          r = [],
          n,
          i = [],
          o = 0,
          s = 0,
          a = 0;
        for (i[o++] = t[0], i[o++] = t[1], i[o++] = t[2], 3 === this.order && (i[o++] = t[3]); t.length > 1;) {
          for (r = [], s = 0, a = t.length - 1; s < a; s++) n = h.lerp(e, t[s], t[s + 1]), i[o++] = n, r.push(n);
          t = r;
        }
        return i;
      },
      split: function (e, t) {
        if (0 === e && t) return this.split(t).left;
        if (1 === t) return this.split(e).right;
        var r = this.hull(e),
          n = {
            left: 2 === this.order ? new u([r[0], r[3], r[5]]) : new u([r[0], r[4], r[7], r[9]]),
            right: 2 === this.order ? new u([r[5], r[4], r[2]]) : new u([r[9], r[8], r[6], r[3]]),
            span: r
          },
          i;
        return n.left._t1 = h.map(0, 0, 1, this._t1, this._t2), n.left._t2 = h.map(e, 0, 1, this._t1, this._t2), n.right._t1 = h.map(e, 0, 1, this._t1, this._t2), n.right._t2 = h.map(1, 0, 1, this._t1, this._t2), t ? (t = h.map(t, e, 1, 0, 1), n.right.split(t).left) : n;
      },
      extrema: function () {
        var e = this.dims,
          t = {},
          r = [],
          n,
          i;
        return e.forEach(function (e) {
          i = function (t) {
            return t[e];
          }, n = this.dpoints[0].map(i), t[e] = h.droots(n), 3 === this.order && (n = this.dpoints[1].map(i), t[e] = t[e].concat(h.droots(n))), t[e] = t[e].filter(function (e) {
            return e >= 0 && e <= 1;
          }), r = r.concat(t[e].sort(h.numberSort));
        }.bind(this)), r = r.sort(h.numberSort).filter(function (e, t) {
          return r.indexOf(e) === t;
        }), t.values = r, t;
      },
      bbox: function () {
        var e = this.extrema(),
          t = {};
        return this.dims.forEach(function (r) {
          t[r] = h.getminmax(this, r, e[r]);
        }.bind(this)), t;
      },
      overlaps: function (e) {
        var t = this.bbox(),
          r = e.bbox();
        return h.bboxoverlap(t, r);
      },
      offset: function (e, t) {
        if (void 0 !== t) {
          var r = this.get(e),
            n = this.normal(e),
            i = {
              c: r,
              n,
              x: r.x + n.x * t,
              y: r.y + n.y * t
            };
          return this._3d && (i.z = r.z + n.z * t), i;
        }
        if (this._linear) {
          var o = this.normal(0),
            s = this.points.map(function (t) {
              var r = {
                x: t.x + e * o.x,
                y: t.y + e * o.y
              };
              return t.z && n.z && (r.z = t.z + e * o.z), r;
            });
          return [new u(s)];
        }
        var a;
        return this.reduce().map(function (t) {
          return t.scale(e);
        });
      },
      simple: function () {
        if (3 === this.order) {
          var e = h.angle(this.points[0], this.points[3], this.points[1]),
            r = h.angle(this.points[0], this.points[3], this.points[2]);
          if (e > 0 && r < 0 || e < 0 && r > 0) return !1;
        }
        var n = this.normal(0),
          i = this.normal(1),
          o = n.x * i.x + n.y * i.y,
          s;
        return this._3d && (o += n.z * i.z), t(a(o)) < c / 3;
      },
      reduce: function () {
        var e,
          r = 0,
          n = 0,
          i = .01,
          o,
          s = [],
          a = [],
          l = this.extrema().values;
        for (-1 === l.indexOf(0) && (l = [0].concat(l)), -1 === l.indexOf(1) && l.push(1), r = l[0], e = 1; e < l.length; e++) n = l[e], (o = this.split(r, n))._t1 = r, o._t2 = n, s.push(o), r = n;
        return s.forEach(function (e) {
          for (r = 0, n = 0; n <= 1;) for (n = r + i; n <= 1.01; n += i) if (!(o = e.split(r, n)).simple()) {
            if (t(r - (n -= i)) < i) return [];
            (o = e.split(r, n))._t1 = h.map(r, 0, 1, e._t1, e._t2), o._t2 = h.map(n, 0, 1, e._t1, e._t2), a.push(o), r = n;
            break;
          }
          r < 1 && ((o = e.split(r, 1))._t1 = h.map(r, 0, 1, e._t1, e._t2), o._t2 = e._t2, a.push(o));
        }), a;
      },
      scale: function (e) {
        var t = this.order,
          r = !1;
        if ("function" == typeof e && (r = e), r && 2 === t) return this.raise().scale(r);
        var n = this.clockwise,
          i = r ? r(0) : e,
          o = r ? r(1) : e,
          s = [this.offset(0, 10), this.offset(1, 10)],
          a = h.lli4(s[0], s[0].c, s[1], s[1].c);
        if (!a) throw new Error("cannot scale this curve. Try reducing it first.");
        var c = this.points,
          d = [];
        return [0, 1].forEach(function (e) {
          var r = d[e * t] = h.copy(c[e * t]);
          r.x += (e ? o : i) * s[e].n.x, r.y += (e ? o : i) * s[e].n.y;
        }.bind(this)), r ? ([0, 1].forEach(function (i) {
          if (2 !== this.order || !i) {
            var o = c[i + 1],
              s = {
                x: o.x - a.x,
                y: o.y - a.y
              },
              h = r ? r((i + 1) / t) : e;
            r && !n && (h = -h);
            var p = l(s.x * s.x + s.y * s.y);
            s.x /= p, s.y /= p, d[i + 1] = {
              x: o.x + h * s.x,
              y: o.y + h * s.y
            };
          }
        }.bind(this)), new u(d)) : ([0, 1].forEach(function (e) {
          if (2 !== this.order || !e) {
            var r = d[e * t],
              n = this.derivative(e),
              i = {
                x: r.x + n.x,
                y: r.y + n.y
              };
            d[e + 1] = h.lli4(r, i, a, c[e + 1]);
          }
        }.bind(this)), new u(d));
      },
      outline: function (e, t, r, n) {
        t = void 0 === t ? e : t;
        var i = this.reduce(),
          o = i.length,
          s = [],
          a = [],
          l,
          c = 0,
          d = this.length(),
          u = void 0 !== r && void 0 !== n;
        function g(e, t, r, n, i) {
          return function (o) {
            var s = n / r,
              a = (n + i) / r,
              l = t - e;
            return h.map(o, 0, 1, e + s * l, e + a * l);
          };
        }
        i.forEach(function (i) {
          S = i.length(), u ? (s.push(i.scale(g(e, r, d, c, S))), a.push(i.scale(g(-t, -n, d, c, S)))) : (s.push(i.scale(e)), a.push(i.scale(-t))), c += S;
        }), a = a.map(function (e) {
          return (l = e.points)[3] ? e.points = [l[3], l[2], l[1], l[0]] : e.points = [l[2], l[1], l[0]], e;
        }).reverse();
        var m = s[0].points[0],
          f = s[o - 1].points[s[o - 1].points.length - 1],
          y = a[o - 1].points[a[o - 1].points.length - 1],
          v = a[0].points[0],
          b = h.makeline(y, m),
          x = h.makeline(f, v),
          C = [b].concat(s).concat([x]).concat(a),
          S = C.length;
        return new p(C);
      },
      outlineshapes: function (e, t, r) {
        t = t || e;
        for (var n = this.outline(e, t).curves, i = [], o = 1, s = n.length; o < s / 2; o++) {
          var a = h.makeshape(n[o], n[s - o], r);
          a.startcap.virtual = o > 1, a.endcap.virtual = o < s / 2 - 1, i.push(a);
        }
        return i;
      },
      intersects: function (e, t) {
        return e ? e.p1 && e.p2 ? this.lineIntersects(e) : (e instanceof u && (e = e.reduce()), this.curveintersects(this.reduce(), e, t)) : this.selfintersects(t);
      },
      lineIntersects: function (e) {
        var t = n(e.p1.x, e.p2.x),
          r = n(e.p1.y, e.p2.y),
          o = i(e.p1.x, e.p2.x),
          s = i(e.p1.y, e.p2.y),
          a = this;
        return h.roots(this.points, e).filter(function (e) {
          var n = a.get(e);
          return h.between(n.x, t, o) && h.between(n.y, r, s);
        });
      },
      selfintersects: function (e) {
        var t = this.reduce(),
          r,
          n = t.length - 2,
          i = [],
          o,
          s,
          a;
        for (r = 0; r < n; r++) s = t.slice(r, r + 1), a = t.slice(r + 2), o = this.curveintersects(s, a, e), i = i.concat(o);
        return i;
      },
      curveintersects: function (e, t, r) {
        var n = [];
        e.forEach(function (e) {
          t.forEach(function (t) {
            e.overlaps(t) && n.push({
              left: e,
              right: t
            });
          });
        });
        var i = [];
        return n.forEach(function (e) {
          var t = h.pairiteration(e.left, e.right, r);
          t.length > 0 && (i = i.concat(t));
        }), i;
      },
      arcs: function (e) {
        e = e || .5;
        var t = [];
        return this._iterate(e, t);
      },
      _error: function (e, r, n, i) {
        var o = (i - n) / 4,
          s = this.get(n + o),
          a = this.get(i - o),
          l = h.dist(e, r),
          c = h.dist(e, s),
          d = h.dist(e, a);
        return t(c - l) + t(d - l);
      },
      _iterate: function (e, t) {
        var r = 0,
          n = 1,
          i;
        do {
          i = 0, n = 1;
          var a = this.get(r),
            l,
            c,
            d,
            p,
            u = !1,
            g = !1,
            m,
            f = n,
            y = 1,
            v = 0;
          do {
            var b;
            if (g = u, p = d, f = (r + n) / 2, v++, l = this.get(f), c = this.get(n), (d = h.getccenter(a, l, c)).interval = {
              start: r,
              end: n
            }, u = this._error(d, a, r, n) <= e, (m = g && !u) || (y = n), u) {
              if (n >= 1) {
                if (d.interval.end = y = 1, p = d, n > 1) {
                  var x = {
                    x: d.x + d.r * o(d.e),
                    y: d.y + d.r * s(d.e)
                  };
                  d.e += h.angle({
                    x: d.x,
                    y: d.y
                  }, x, this.get(1));
                }
                break;
              }
              n += (n - r) / 2;
            } else n = f;
          } while (!m && i++ < 100);
          if (i >= 100) break;
          p = p || d, t.push(p), r = y;
        } while (n < 1);
        return t;
      }
    }, e.exports = u;
  }();
};
