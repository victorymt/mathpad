/* module 61885 — 7159 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    u: () => a
  });
  var n = r(64467);
  class i {
    static isZero(e) {
      return e >= -i.EPSILON && e <= i.EPSILON;
    }
  }
  (0, n.A)(i, "EPSILON", 1e-12);
  class o {
    constructor(e, t) {
      (0, n.A)(this, "x", void 0), (0, n.A)(this, "y", void 0), (0, n.A)(this, "_angle", void 0), this.x = e, this.y = t;
    }
    subtract(e) {
      return new o(this.x - e.x, this.y - e.y);
    }
    getDistance(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.x - this.x,
        n = e.y - this.y,
        i = r * r + n * n;
      return t ? i : Math.sqrt(i);
    }
    normalize() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = this.getLength(),
        r = 0 !== t ? e / t : 0,
        n = new o(this.x * r, this.y * r);
      return r >= 0 && (n._angle = this._angle), n;
    }
    getLength() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    add(e) {
      return new o(this.x + e.x, this.y + e.y);
    }
    negate() {
      return new o(-this.x, -this.y);
    }
    multiply(e) {
      return new o(this.x * e, this.y * e);
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    isZero() {
      var e = i.isZero;
      return e(this.x) && e(this.y);
    }
  }
  class s {
    constructor(e, t) {
      (0, n.A)(this, "_point", void 0), (0, n.A)(this, "_handleIn", void 0), (0, n.A)(this, "_handleOut", void 0), this._point = e, this._handleIn = t;
    }
    setHandleOut(e) {
      this._handleOut = e;
    }
    _transformCoordinates(e, t, r) {
      var n = this._point,
        i = r && this._handleIn.isZero() ? null : this._handleIn,
        o = r && this._handleOut.isZero() ? null : this._handleOut,
        s = n.x,
        a = n.y,
        l = 2;
      return t[0] = s, t[1] = a, i && (t[2] = i.x + s, t[3] = i.y + a), o && (t[4] = o.x + s, t[5] = o.y + a), e && (e._transformCoordinates(t, t, l / 2), s = t[0], a = t[1], r ? (n.x = s, n.y = a, l = 2, i && (i.x = t[l++] - s, i.y = t[l++] - a), o && (o.x = t[l++] - s, o.y = t[l++] - a)) : (i || (t[l++] = s, t[l++] = a), o || (t[l++] = s, t[l++] = a))), t;
    }
  }
  class a {
    constructor(e) {
      (0, n.A)(this, "points", []), this.points = e.map(e => new o(e.x, e.y));
    }
    simplify() {
      var e = this.fit();
      return this.toCubicBezier(e);
    }
    toCubicBezier(e) {
      var t = e.length,
        r = new Array(6),
        n = !0,
        i,
        o,
        s,
        a,
        l,
        c,
        d,
        h,
        p = [];
      function u(e) {
        e._transformCoordinates(null, r), i = r[0], o = r[1], n ? n = !1 : (l = r[2], c = r[3], p.push({
          p1: {
            x: s,
            y: a
          },
          p2: {
            x: i,
            y: o
          },
          cp: {
            x: d,
            y: h
          },
          cp2: {
            x: l,
            y: c
          }
        })), s = i, a = o, d = r[4], h = r[5];
      }
      if (!t) return [];
      for (var g = 0; g < t; g++) u(e[g]);
      return p;
    }
    fit() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2.5,
        t = this.points,
        r = t.length,
        n = [];
      return r > 0 && (n = [new s(t[0])], r > 1 && this.fitCubic(n, e, 0, r - 1, t[1].subtract(t[0]), t[r - 2].subtract(t[r - 1]))), n;
    }
    fitCubic(e, t, r, n, i, o) {
      var s = this.points;
      if (n - r !== 1) {
        for (var a = this.chordLengthParameterize(r, n), l = Math.max(t, t * t), c, d = !0, h = 0; h <= 4; h++) {
          var p = this.generateBezier(r, n, a, i, o),
            u = this.findMaxError(r, n, p, a);
          if (u.error < t && d) return void this.addCurve(e, p);
          if (c = u.index, u.error >= l) break;
          d = this.reparameterize(r, n, a, p), l = u.error;
        }
        var g = s[c - 1].subtract(s[c + 1]);
        this.fitCubic(e, t, r, c, i, g), this.fitCubic(e, t, c, n, g.negate(), o);
      } else {
        var m = s[r],
          f = s[n],
          y = m.getDistance(f) / 3;
        this.addCurve(e, [m, m.add(i.normalize(y)), f.add(o.normalize(y)), f]);
      }
    }
    addCurve(e, t) {
      var r;
      e[e.length - 1].setHandleOut(t[1].subtract(t[0])), e.push(new s(t[3], t[2].subtract(t[3])));
    }
    generateBezier(e, t, r, n, o) {
      for (var s = i.EPSILON, a = Math.abs, l = this.points, c = l[e], d = l[t], h = [[0, 0], [0, 0]], p = [0, 0], u = 0, g = t - e + 1; u < g; u++) {
        var m = r[u],
          f = 1 - m,
          y = 3 * m * f,
          v = f * f * f,
          b = y * f,
          x = y * m,
          C = m * m * m,
          S = n.normalize(b),
          A = o.normalize(x),
          w = l[e + u].subtract(c.multiply(v + b)).subtract(d.multiply(x + C));
        h[0][0] += S.dot(S), h[0][1] += S.dot(A), h[1][0] = h[0][1], h[1][1] += A.dot(A), p[0] += S.dot(w), p[1] += A.dot(w);
      }
      var E = h[0][0] * h[1][1] - h[1][0] * h[0][1],
        k,
        O;
      if (a(E) > s) {
        var D = h[0][0] * p[1] - h[1][0] * p[0],
          P;
        k = (p[0] * h[1][1] - p[1] * h[0][1]) / E, O = D / E;
      } else {
        var M = h[0][0] + h[0][1],
          I = h[1][0] + h[1][1];
        k = O = a(M) > s ? p[0] / M : a(I) > s ? p[1] / I : 0;
      }
      var T = d.getDistance(c),
        L = s * T,
        R,
        B;
      if (k < L || O < L) k = O = T / 3;else {
        var F = d.subtract(c);
        R = n.normalize(k), B = o.normalize(O), R.dot(F) - B.dot(F) > T * T && (k = O = T / 3, R = B = null);
      }
      return [c, c.add(R || n.normalize(k)), d.add(B || o.normalize(O)), d];
    }
    reparameterize(e, t, r, n) {
      for (var i = e; i <= t; i++) r[i - e] = this.findRoot(n, this.points[i], r[i - e]);
      for (var o = 1, s = r.length; o < s; o++) if (r[o] <= r[o - 1]) return !1;
      return !0;
    }
    findRoot(e, t, r) {
      for (var n = [], o = [], s = 0; s <= 2; s++) n[s] = e[s + 1].subtract(e[s]).multiply(3);
      for (var s = 0; s <= 1; s++) o[s] = n[s + 1].subtract(n[s]).multiply(2);
      var a = this.evaluate(3, e, r),
        l = this.evaluate(2, n, r),
        c = this.evaluate(1, o, r),
        d = a.subtract(t),
        h = l.dot(l) + d.dot(c);
      return i.isZero(h) ? r : r - d.dot(l) / h;
    }
    evaluate(e, t, r) {
      for (var n = t.slice(), i = 1; i <= e; i++) for (var o = 0; o <= e - i; o++) n[o] = n[o].multiply(1 - r).add(n[o + 1].multiply(r));
      return n[0];
    }
    chordLengthParameterize(e, t) {
      for (var r = [0], n = e + 1; n <= t; n++) r[n - e] = r[n - e - 1] + this.points[n].getDistance(this.points[n - 1]);
      for (var i = 1, o = t - e; i <= o; i++) r[i] /= r[o];
      return r;
    }
    findMaxError(e, t, r, n) {
      for (var i = Math.floor((t - e + 1) / 2), o = 0, s = e + 1; s < t; s++) {
        var a,
          l = this.evaluate(3, r, n[s - e]).subtract(this.points[s]),
          c = l.x * l.x + l.y * l.y;
        c >= o && (o = c, i = s);
      }
      return {
        error: o,
        index: i
      };
    }
  }
};
