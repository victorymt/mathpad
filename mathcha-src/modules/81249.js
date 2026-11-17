/* module 81249 — 3869 chars */
module.exports = function (e) {
  var t, r;
  r = function () {
    function e(e, t) {
      var r, n, i, o, s, a, l, c, d, h, p, u, g, m, f, y, v;
      for (i = [], a = [], r = [], n = [], o = [], c = [], s = 0, m = (l = e.length) - 1; 0 <= m ? s < m : s > m; 0 <= m ? s += 1 : s -= 1) i[s] = (t[s + 1] - t[s]) / (e[s + 1] - e[s]), s > 0 && (a[s] = (i[s - 1] + i[s]) / 2);
      for (a[0] = i[0], a[l - 1] = i[l - 2], d = [], s = 0, f = l - 1; 0 <= f ? s < f : s > f; 0 <= f ? s += 1 : s -= 1) 0 === i[s] && d.push(s);
      for (h = 0, u = d.length; h < u; h++) a[s = d[h]] = a[s + 1] = 0;
      for (s = 0, y = l - 1; 0 <= y ? s < y : s > y; 0 <= y ? s += 1 : s -= 1) r[s] = a[s] / i[s], n[s] = a[s + 1] / i[s], o[s] = Math.pow(r[s], 2) + Math.pow(n[s], 2), c[s] = 3 / Math.sqrt(o[s]);
      for (d = [], s = 0, v = l - 1; 0 <= v ? s < v : s > v; 0 <= v ? s += 1 : s -= 1) o[s] > 9 && d.push(s);
      for (p = 0, g = d.length; p < g; p++) a[s = d[p]] = c[s] * r[s] * i[s], a[s + 1] = c[s] * n[s] * i[s];
      this.x = e.slice(0, l), this.y = t.slice(0, l), this.m = a;
    }
    return e.prototype.interpolate = function (e) {
      var t, r, n, i, o, s, a, l, c, d, h;
      for (s = h = this.x.length - 2; (h <= 0 ? s <= 0 : s >= 0) && !(this.x[s] <= e); h <= 0 ? s += 1 : s -= 1);
      if (0 == (t = this.x[s + 1] - this.x[s])) throw new Error("error h is zero");
      if (a = (e - this.x[s]) / t, l = Math.pow(a, 2), i = (c = Math.pow(a, 3)) - 2 * l + a, n = -2 * c + 3 * l, o = c - l, d = (r = 2 * c - 3 * l + 1) * this.y[s] + i * t * this.m[s] + n * this.y[s + 1] + o * t * this.m[s + 1], isNaN(d)) throw console.log("error: ", e), new Error("error");
      return d;
    }, e;
  }(), t = function () {
    function e(e, t, r, n) {
      var i, o, s, a, l, c, d, h, p, u, g, m, f, y;
      if (null != e && null != t) {
        for (s = null != r && null != n, p = e.length - 1, l = [], m = [], h = [], g = [], f = [], o = [], i = [], a = [], d = [], u = [], c = 0; 0 <= p ? c < p : c > p; 0 <= p ? c += 1 : c -= 1) l[c] = e[c + 1] - e[c], d[c] = t[c + 1] - t[c], u[c] = d[c] / l[c];
        for (s && (m[0] = 3 * (t[1] - t[0]) / l[0] - 3 * r, m[p] = 3 * n - 3 * (t[p] - t[p - 1]) / l[p - 1]), c = 1; 1 <= p ? c < p : c > p; 1 <= p ? c += 1 : c -= 1) m[c] = 3 / l[c] * (t[c + 1] - t[c]) - 3 / l[c - 1] * (t[c] - t[c - 1]);
        for (s ? (h[0] = 2 * l[0], g[0] = .5, f[0] = m[0] / h[0]) : (h[0] = 1, g[0] = 0, f[0] = 0), c = 1; 1 <= p ? c < p : c > p; 1 <= p ? c += 1 : c -= 1) h[c] = 2 * (e[c + 1] - e[c - 1]) - l[c - 1] * g[c - 1], g[c] = l[c] / h[c], f[c] = (m[c] - l[c - 1] * f[c - 1]) / h[c];
        for (s ? (h[p] = l[p - 1] * (2 - g[p - 1]), f[p] = (m[p] - l[p - 1] * f[p - 1]) / h[p], o[p] = f[p]) : (h[p] = 1, f[p] = 0, o[p] = 0), c = y = p - 1; y <= 0 ? c <= 0 : c >= 0; y <= 0 ? c += 1 : c -= 1) o[c] = f[c] - g[c] * o[c + 1], i[c] = (t[c + 1] - t[c]) / l[c] - l[c] * (o[c + 1] + 2 * o[c]) / 3, a[c] = (o[c + 1] - o[c]) / (3 * l[c]);
        this.x = e.slice(0, p + 1), this.a = t.slice(0, p), this.b = i, this.c = o.slice(0, p), this.d = a;
      }
    }
    return e.prototype.derivative = function () {
      var e, t, r, n, i, o, s, a, l, c, d;
      for ((r = new this.constructor()).x = this.x.slice(0, this.x.length), r.a = this.b.slice(0, this.b.length), i = 0, s = (l = this.c).length; i < s; i++) e = l[i], r.b = 2 * e;
      for (o = 0, a = (c = this.d).length; o < a; o++) t = c[o], r.c = 3 * t;
      for (n = 0, d = this.d.length; 0 <= d ? n < d : n > d; 0 <= d ? n += 1 : n -= 1) r.d = 0;
      return r;
    }, e.prototype.interpolate = function (e) {
      var t, r, n, i;
      for (r = i = this.x.length - 1; (i <= 0 ? r <= 0 : r >= 0) && !(this.x[r] <= e); i <= 0 ? r += 1 : r -= 1);
      return t = e - this.x[r], n = this.a[r] + this.b[r] * t + this.c[r] * Math.pow(t, 2) + this.d[r] * Math.pow(t, 3);
    }, e;
  }(), e.exports = r;
};
