/* module 19539 — 90496 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => x
  });
  var n = r(64467),
    i = r(58370),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(1825),
    c = r(61848);
  function d(e) {
    arguments.length > 0 && this.init(e);
  }
  function h(e, t) {
    arguments.length > 0 && this.init(e, t);
  }
  function p(e, t) {
    arguments.length > 0 && this.init(e, t);
  }
  function u() {
    this.init(arguments);
  }
  function g(e, t) {
    arguments.length > 0 && this.init(e, t);
  }
  Array.prototype.min = function () {
    for (var e = this[0], t = 0; t < this.length; t++) this[t] < e && (e = this[t]);
    return e;
  }, Array.prototype.max = function () {
    for (var e = this[0], t = 0; t < this.length; t++) this[t] > e && (e = this[t]);
    return e;
  }, d.prototype.init = function (e) {
    this.status = e, this.points = new Array();
  }, d.prototype.appendPoint = function (e) {
    this.points.push(e);
  }, d.prototype.appendPoints = function (e) {
    this.points = this.points.concat(e);
  }, d.intersectShapes = function (e, t) {
    var r = e.getIntersectionParams(),
      n = t.getIntersectionParams(),
      i;
    if (null != r && null != n) {
      if ("Path" == r.name) i = d.intersectPathShape(e, t);else if ("Path" == n.name) i = d.intersectPathShape(t, e);else {
        var o, s;
        if (r.name < n.name ? (o = "intersect" + r.name + n.name, s = r.params.concat(n.params)) : (o = "intersect" + n.name + r.name, s = n.params.concat(r.params)), !(o in d)) throw new Error("Intersection not available: " + o);
        i = d[o].apply(null, s);
      }
    } else i = new d("No Intersection");
    return i;
  }, d.intersectPathShape = function (e, t) {
    return e.intersectShape(t);
  }, d.intersectBezier2Bezier2 = function (e, t, r, n, i, o) {
    var s,
      a,
      l,
      c,
      h,
      g,
      m,
      f,
      y = 1e-4,
      v = new d("No Intersection");
    s = t.multiply(-2), l = e.add(s.add(r)), s = e.multiply(-2), a = t.multiply(2), c = s.add(a), h = new p(e.x, e.y), s = i.multiply(-2), g = n.add(s.add(o)), s = n.multiply(-2), a = i.multiply(2), m = s.add(a), f = new p(n.x, n.y);
    for (var s = l.x * c.y - c.x * l.y, a = g.x * c.y - c.x * g.y, b = m.x * c.y - c.x * m.y, x = c.x * (h.y - f.y) + c.y * (-h.x + f.x), C = g.x * l.y - l.x * g.y, S = m.x * l.y - l.x * m.y, A = l.x * (h.y - f.y) + l.y * (-h.x + f.x), w, E = new u(-C * C, -2 * C * S, s * a - S * S - 2 * C * A, s * b - 2 * S * A, s * x - A * A).getRoots(), k = 0; k < E.length; k++) {
      var O = E[k];
      if (0 <= O && O <= 1) {
        var D = new u(-l.x, -c.x, -h.x + f.x + O * m.x + O * O * g.x).getRoots(),
          P = new u(-l.y, -c.y, -h.y + f.y + O * m.y + O * O * g.y).getRoots();
        if (D.length > 0 && P.length > 0) e: for (var M = 0; M < D.length; M++) {
          var I = D[M];
          if (0 <= I && I <= 1) for (var T = 0; T < P.length; T++) if (Math.abs(I - P[T]) < y) {
            v.points.push(g.multiply(O * O).add(m.multiply(O).add(f)));
            break e;
          }
        }
      }
    }
    return v;
  }, d.intersectBezier2Bezier3 = function (e, t, r, n, i, o, s) {
    var a,
      l,
      c,
      h,
      m,
      f,
      y,
      v,
      b,
      x,
      C,
      S = new d("No Intersection");
    a = t.multiply(-2), m = e.add(a.add(r)), a = e.multiply(-2), l = t.multiply(2), f = a.add(l), y = new p(e.x, e.y), a = n.multiply(-1), l = i.multiply(3), c = o.multiply(-3), v = new g((h = a.add(l.add(c.add(s)))).x, h.y), a = n.multiply(3), l = i.multiply(-6), c = o.multiply(3), b = new g((h = a.add(l.add(c))).x, h.y), a = n.multiply(-3), l = i.multiply(3), x = new g((c = a.add(l)).x, c.y), C = new g(n.x, n.y);
    for (var A = y.x * y.x, w = y.y * y.y, E = f.x * f.x, k = f.y * f.y, O = m.x * m.x, D = m.y * m.y, P = C.x * C.x, M = C.y * C.y, I = x.x * x.x, T = x.y * x.y, L = b.x * b.x, R = b.y * b.y, B = v.x * v.x, F = v.y * v.y, j, _ = new u(-2 * m.x * m.y * v.x * v.y + O * F + D * B, -2 * m.x * m.y * b.x * v.y - 2 * m.x * m.y * b.y * v.x + 2 * D * b.x * v.x + 2 * O * b.y * v.y, -2 * m.x * x.x * m.y * v.y - 2 * m.x * m.y * x.y * v.x - 2 * m.x * m.y * b.x * b.y + 2 * x.x * D * v.x + D * L + O * (2 * x.y * v.y + R), 2 * y.x * m.x * m.y * v.y + 2 * y.y * m.x * m.y * v.x + f.x * f.y * m.x * v.y + f.x * f.y * m.y * v.x - 2 * C.x * m.x * m.y * v.y - 2 * m.x * C.y * m.y * v.x - 2 * m.x * x.x * m.y * b.y - 2 * m.x * m.y * x.y * b.x - 2 * y.x * D * v.x - 2 * y.y * O * v.y + 2 * C.x * D * v.x + 2 * x.x * D * b.x - k * m.x * v.x - E * m.y * v.y + O * (2 * C.y * v.y + 2 * x.y * b.y), 2 * y.x * m.x * m.y * b.y + 2 * y.y * m.x * m.y * b.x + f.x * f.y * m.x * b.y + f.x * f.y * m.y * b.x - 2 * C.x * m.x * m.y * b.y - 2 * m.x * C.y * m.y * b.x - 2 * m.x * x.x * m.y * x.y - 2 * y.x * D * b.x - 2 * y.y * O * b.y + 2 * C.x * D * b.x - k * m.x * b.x - E * m.y * b.y + I * D + O * (2 * C.y * b.y + T), 2 * y.x * m.x * m.y * x.y + 2 * y.y * m.x * x.x * m.y + f.x * f.y * m.x * x.y + f.x * f.y * x.x * m.y - 2 * C.x * m.x * m.y * x.y - 2 * m.x * C.y * x.x * m.y - 2 * y.x * x.x * D - 2 * y.y * O * x.y + 2 * C.x * x.x * D - k * m.x * x.x - E * m.y * x.y + 2 * O * C.y * x.y, -2 * y.x * y.y * m.x * m.y - y.x * f.x * f.y * m.y - y.y * f.x * f.y * m.x + 2 * y.x * m.x * C.y * m.y + 2 * y.y * C.x * m.x * m.y + f.x * C.x * f.y * m.y + f.x * f.y * m.x * C.y - 2 * C.x * m.x * C.y * m.y - 2 * y.x * C.x * D + y.x * k * m.x + y.y * E * m.y - 2 * y.y * O * C.y - C.x * k * m.x - E * C.y * m.y + A * D + w * O + P * D + O * M).getRootsInInterval(0, 1), N = 0; N < _.length; N++) {
      var z = _[N],
        H = new u(m.x, f.x, y.x - C.x - z * x.x - z * z * b.x - z * z * z * v.x).getRoots(),
        W = new u(m.y, f.y, y.y - C.y - z * x.y - z * z * b.y - z * z * z * v.y).getRoots();
      if (H.length > 0 && W.length > 0) {
        var V = 1e-4;
        e: for (var U = 0; U < H.length; U++) {
          var q = H[U];
          if (0 <= q && q <= 1) for (var G = 0; G < W.length; G++) if (Math.abs(q - W[G]) < V) {
            S.points.push(v.multiply(z * z * z).add(b.multiply(z * z).add(x.multiply(z).add(C))));
            break e;
          }
        }
      }
    }
    return S.points.length > 0 && (S.status = "Intersection"), S;
  }, d.intersectBezier2Circle = function (e, t, r, n, i) {
    return d.intersectBezier2Ellipse(e, t, r, n, i, i);
  }, d.intersectBezier2Ellipse = function (e, t, r, n, i, o) {
    var s,
      a,
      l,
      c,
      h,
      g = new d("No Intersection");
    s = t.multiply(-2), l = e.add(s.add(r)), s = e.multiply(-2), a = t.multiply(2), c = s.add(a), h = new p(e.x, e.y);
    for (var m = i * i, f = o * o, y = new u(f * l.x * l.x + m * l.y * l.y, 2 * (f * l.x * c.x + m * l.y * c.y), f * (2 * l.x * h.x + c.x * c.x) + m * (2 * l.y * h.y + c.y * c.y) - 2 * (f * n.x * l.x + m * n.y * l.y), 2 * (f * c.x * (h.x - n.x) + m * c.y * (h.y - n.y)), f * (h.x * h.x + n.x * n.x) + m * (h.y * h.y + n.y * n.y) - 2 * (f * n.x * h.x + m * n.y * h.y) - m * f).getRoots(), v = 0; v < y.length; v++) {
      var b = y[v];
      0 <= b && b <= 1 && g.points.push(l.multiply(b * b).add(c.multiply(b).add(h)));
    }
    return g.points.length > 0 && (g.status = "Intersection"), g;
  }, d.intersectBezier2Line = function (e, t, r, n, i) {
    var o,
      s,
      a,
      l,
      c,
      h,
      m,
      f = n.min(i),
      y = n.max(i),
      v = new d("No Intersection");
    o = t.multiply(-2), a = e.add(o.add(r)), o = e.multiply(-2), s = t.multiply(2), l = o.add(s), c = new p(e.x, e.y), m = new g(n.y - i.y, i.x - n.x), h = n.x * i.y - i.x * n.y;
    for (var b = new u(m.dot(a), m.dot(l), m.dot(c) + h).getRoots(), x = 0; x < b.length; x++) {
      var C = b[x];
      if (0 <= C && C <= 1) {
        var S = e.lerp(t, C),
          A = t.lerp(r, C),
          w = S.lerp(A, C);
        n.x == i.x ? f.y <= w.y && w.y <= y.y && (v.status = "Intersection", v.appendPoint(w)) : n.y == i.y ? f.x <= w.x && w.x <= y.x && (v.status = "Intersection", v.appendPoint(w)) : w.gte(f) && w.lte(y) && (v.status = "Intersection", v.appendPoint(w));
      }
    }
    return v;
  }, d.intersectBezier2Polygon = function (e, t, r, n) {
    for (var i = new d("No Intersection"), o = n.length, s = 0; s < o; s++) {
      var a = n[s],
        l = n[(s + 1) % o],
        c = d.intersectBezier2Line(e, t, r, a, l);
      i.appendPoints(c.points);
    }
    return i.points.length > 0 && (i.status = "Intersection"), i;
  }, d.intersectBezier2Rectangle = function (e, t, r, n, i) {
    var o = n.min(i),
      s = n.max(i),
      a = new p(s.x, o.y),
      l = new p(o.x, s.y),
      c = d.intersectBezier2Line(e, t, r, o, a),
      h = d.intersectBezier2Line(e, t, r, a, s),
      u = d.intersectBezier2Line(e, t, r, s, l),
      g = d.intersectBezier2Line(e, t, r, l, o),
      m = new d("No Intersection");
    return m.appendPoints(c.points), m.appendPoints(h.points), m.appendPoints(u.points), m.appendPoints(g.points), m.points.length > 0 && (m.status = "Intersection"), m;
  }, d.intersectBezier3Bezier3 = function (e, t, r, n, i, o, s, a) {
    var l,
      c,
      h,
      p,
      m,
      f,
      y,
      v,
      b,
      x,
      C,
      S,
      A = new d("No Intersection");
    l = e.multiply(-1), c = t.multiply(3), h = r.multiply(-3), m = new g((p = l.add(c.add(h.add(n)))).x, p.y), l = e.multiply(3), c = t.multiply(-6), h = r.multiply(3), f = new g((p = l.add(c.add(h))).x, p.y), l = e.multiply(-3), c = t.multiply(3), y = new g((h = l.add(c)).x, h.y), v = new g(e.x, e.y), l = i.multiply(-1), c = o.multiply(3), h = s.multiply(-3), b = new g((p = l.add(c.add(h.add(a)))).x, p.y), l = i.multiply(3), c = o.multiply(-6), h = s.multiply(3), x = new g((p = l.add(c.add(h))).x, p.y), l = i.multiply(-3), c = o.multiply(3), C = new g((h = l.add(c)).x, h.y), S = new g(i.x, i.y);
    for (var w = v.x * v.x, E = v.x * v.x * v.x, k = v.y * v.y, O = v.y * v.y * v.y, D = y.x * y.x, P = y.x * y.x * y.x, M = y.y * y.y, I = y.y * y.y * y.y, T = f.x * f.x, L = f.x * f.x * f.x, R = f.y * f.y, B = f.y * f.y * f.y, F = m.x * m.x, j = m.x * m.x * m.x, _ = m.y * m.y, N = m.y * m.y * m.y, z = S.x * S.x, H = S.x * S.x * S.x, W = S.y * S.y, V = S.y * S.y * S.y, U = C.x * C.x, q = C.x * C.x * C.x, G = C.y * C.y, K = x.x * x.x, Z = x.x * x.x * x.x, Y = x.y * x.y, Q = b.x * b.x, J = b.x * b.x * b.x, X = b.y * b.y, $, ee, te = new u(-j * (b.y * b.y * b.y) + N * J - 3 * m.x * _ * Q * b.y + 3 * F * m.y * b.x * X, -6 * m.x * x.x * _ * b.x * b.y + 6 * F * m.y * x.y * b.x * b.y + 3 * x.x * N * Q - 3 * j * x.y * X - 3 * m.x * _ * x.y * Q + 3 * F * x.x * m.y * X, -6 * C.x * m.x * _ * b.x * b.y - 6 * m.x * x.x * _ * x.y * b.x + 6 * F * x.x * m.y * x.y * b.y + 3 * C.x * N * Q + 3 * K * N * b.x + 3 * C.x * F * m.y * X - 3 * m.x * C.y * _ * Q - 3 * m.x * K * _ * b.y + F * m.y * b.x * (6 * C.y * b.y + 3 * Y) + j * (-C.y * X - 2 * Y * b.y - b.y * (2 * C.y * b.y + Y)), y.x * f.y * m.x * m.y * b.x * b.y - y.y * f.x * m.x * m.y * b.x * b.y + 6 * C.x * x.x * N * b.x + 3 * y.x * f.x * m.x * m.y * X + 6 * v.x * m.x * _ * b.x * b.y - 3 * y.x * f.x * _ * b.x * b.y - 3 * y.y * f.y * m.x * m.y * Q - 6 * v.y * F * m.y * b.x * b.y - 6 * S.x * m.x * _ * b.x * b.y + 3 * y.y * f.y * F * b.x * b.y - 2 * f.x * R * m.x * b.x * b.y - 6 * C.x * m.x * x.x * _ * b.y - 6 * C.x * m.x * _ * x.y * b.x - 6 * m.x * C.y * x.x * _ * b.x + 6 * C.x * F * m.y * x.y * b.y + 2 * T * f.y * m.y * b.x * b.y + Z * N - 3 * v.x * N * Q + 3 * v.y * j * X + 3 * S.x * N * Q + B * m.x * Q - L * m.y * X - 3 * v.x * F * m.y * X + 3 * v.y * m.x * _ * Q - 2 * y.x * f.y * F * X + y.x * f.y * _ * Q - y.y * f.x * F * X + 2 * y.y * f.x * _ * Q + 3 * S.x * F * m.y * X - f.x * R * m.y * Q - 3 * S.y * m.x * _ * Q + T * f.y * m.x * X - 3 * m.x * K * _ * x.y + F * m.y * b.x * (6 * S.y * b.y + 6 * C.y * x.y) + F * x.x * m.y * (6 * C.y * b.y + 3 * Y) + j * (-2 * C.y * x.y * b.y - S.y * X - x.y * (2 * C.y * b.y + Y) - b.y * (2 * S.y * b.y + 2 * C.y * x.y)), 6 * y.x * f.x * m.x * m.y * x.y * b.y + y.x * f.y * m.x * x.x * m.y * b.y + y.x * f.y * m.x * m.y * x.y * b.x - y.y * f.x * m.x * x.x * m.y * b.y - y.y * f.x * m.x * m.y * x.y * b.x - 6 * y.y * f.y * m.x * x.x * m.y * b.x - 6 * v.x * x.x * N * b.x + 6 * S.x * x.x * N * b.x + 6 * v.y * j * x.y * b.y + 2 * B * m.x * x.x * b.x - 2 * L * m.y * x.y * b.y + 6 * v.x * m.x * x.x * _ * b.y + 6 * v.x * m.x * _ * x.y * b.x + 6 * v.y * m.x * x.x * _ * b.x - 3 * y.x * f.x * x.x * _ * b.y - 3 * y.x * f.x * _ * x.y * b.x + 2 * y.x * f.y * x.x * _ * b.x + 4 * y.y * f.x * x.x * _ * b.x - 6 * v.x * F * m.y * x.y * b.y - 6 * v.y * F * x.x * m.y * b.y - 6 * v.y * F * m.y * x.y * b.x - 4 * y.x * f.y * F * x.y * b.y - 6 * S.x * m.x * x.x * _ * b.y - 6 * S.x * m.x * _ * x.y * b.x - 2 * y.y * f.x * F * x.y * b.y + 3 * y.y * f.y * F * x.x * b.y + 3 * y.y * f.y * F * x.y * b.x - 2 * f.x * R * m.x * x.x * b.y - 2 * f.x * R * m.x * x.y * b.x - 2 * f.x * R * x.x * m.y * b.x - 6 * S.y * m.x * x.x * _ * b.x - 6 * C.x * m.x * C.y * _ * b.x - 6 * C.x * m.x * x.x * _ * x.y + 6 * S.x * F * m.y * x.y * b.y + 2 * T * f.y * m.x * x.y * b.y + 2 * T * f.y * x.x * m.y * b.y + 2 * T * f.y * m.y * x.y * b.x + 3 * C.x * K * N + 3 * U * N * b.x - 3 * m.x * C.y * K * _ - 3 * U * m.x * _ * b.y + F * x.x * m.y * (6 * S.y * b.y + 6 * C.y * x.y) + F * m.y * b.x * (6 * S.y * x.y + 3 * G) + C.x * F * m.y * (6 * C.y * b.y + 3 * Y) + j * (-2 * S.y * x.y * b.y - b.y * (2 * S.y * x.y + G) - C.y * (2 * C.y * b.y + Y) - x.y * (2 * S.y * b.y + 2 * C.y * x.y)), y.x * C.x * f.y * m.x * m.y * b.y + y.x * f.y * m.x * C.y * m.y * b.x + y.x * f.y * m.x * x.x * m.y * x.y - y.y * f.x * C.x * m.x * m.y * b.y - y.y * f.x * m.x * C.y * m.y * b.x - y.y * f.x * m.x * x.x * m.y * x.y - 6 * y.y * C.x * f.y * m.x * m.y * b.x - 6 * v.x * C.x * N * b.x + 6 * S.x * C.x * N * b.x + 2 * C.x * B * m.x * b.x + 6 * v.x * C.x * m.x * _ * b.y + 6 * v.x * m.x * C.y * _ * b.x + 6 * v.x * m.x * x.x * _ * x.y + 6 * v.y * C.x * m.x * _ * b.x - 3 * y.x * f.x * C.x * _ * b.y - 3 * y.x * f.x * C.y * _ * b.x - 3 * y.x * f.x * x.x * _ * x.y + 2 * y.x * C.x * f.y * _ * b.x + 4 * y.y * f.x * C.x * _ * b.x - 6 * v.y * C.x * F * m.y * b.y - 6 * v.y * F * C.y * m.y * b.x - 6 * v.y * F * x.x * m.y * x.y - 6 * S.x * C.x * m.x * _ * b.y - 6 * S.x * m.x * C.y * _ * b.x - 6 * S.x * m.x * x.x * _ * x.y + 3 * y.y * C.x * f.y * F * b.y - 3 * y.y * f.y * m.x * K * m.y + 3 * y.y * f.y * F * C.y * b.x + 3 * y.y * f.y * F * x.x * x.y - 2 * f.x * C.x * R * m.x * b.y - 2 * f.x * C.x * R * m.y * b.x - 2 * f.x * R * m.x * C.y * b.x - 2 * f.x * R * m.x * x.x * x.y - 6 * S.y * C.x * m.x * _ * b.x - 6 * C.x * m.x * C.y * x.x * _ + 6 * S.y * F * C.y * m.y * b.x + 2 * T * C.x * f.y * m.y * b.y + 2 * T * f.y * C.y * m.y * b.x + 2 * T * f.y * x.x * m.y * x.y - 3 * v.x * K * N + 3 * S.x * K * N + 3 * U * x.x * N + B * m.x * K + 3 * v.y * m.x * K * _ + y.x * f.y * K * _ + 2 * y.y * f.x * K * _ - f.x * R * K * m.y - 3 * S.y * m.x * K * _ - 3 * U * m.x * _ * x.y + T * f.y * m.x * (2 * C.y * b.y + Y) + y.x * f.x * m.x * m.y * (6 * C.y * b.y + 3 * Y) + C.x * F * m.y * (6 * S.y * b.y + 6 * C.y * x.y) + L * m.y * (-2 * C.y * b.y - Y) + v.y * j * (6 * C.y * b.y + 3 * Y) + y.y * f.x * F * (-2 * C.y * b.y - Y) + y.x * f.y * F * (-4 * C.y * b.y - 2 * Y) + v.x * F * m.y * (-6 * C.y * b.y - 3 * Y) + F * x.x * m.y * (6 * S.y * x.y + 3 * G) + S.x * F * m.y * (6 * C.y * b.y + 3 * Y) + j * (-2 * S.y * C.y * b.y - x.y * (2 * S.y * x.y + G) - S.y * (2 * C.y * b.y + Y) - C.y * (2 * S.y * b.y + 2 * C.y * x.y)), -v.x * y.x * f.y * m.x * m.y * b.y + v.x * y.y * f.x * m.x * m.y * b.y + 6 * v.x * y.y * f.y * m.x * m.y * b.x - 6 * v.y * y.x * f.x * m.x * m.y * b.y - v.y * y.x * f.y * m.x * m.y * b.x + v.y * y.y * f.x * m.x * m.y * b.x + y.x * y.y * f.x * f.y * m.x * b.y - y.x * y.y * f.x * f.y * m.y * b.x + y.x * S.x * f.y * m.x * m.y * b.y + y.x * S.y * f.y * m.x * m.y * b.x + y.x * C.x * f.y * m.x * m.y * x.y + y.x * f.y * m.x * C.y * x.x * m.y - S.x * y.y * f.x * m.x * m.y * b.y - 6 * S.x * y.y * f.y * m.x * m.y * b.x - y.y * f.x * S.y * m.x * m.y * b.x - y.y * f.x * C.x * m.x * m.y * x.y - y.y * f.x * m.x * C.y * x.x * m.y - 6 * y.y * C.x * f.y * m.x * x.x * m.y - 6 * v.x * S.x * N * b.x - 6 * v.x * C.x * x.x * N - 2 * v.x * B * m.x * b.x + 6 * S.x * C.x * x.x * N + 2 * S.x * B * m.x * b.x + 2 * C.x * B * m.x * x.x + 2 * v.y * L * m.y * b.y - 6 * v.x * v.y * m.x * _ * b.x + 3 * v.x * y.x * f.x * _ * b.y - 2 * v.x * y.x * f.y * _ * b.x - 4 * v.x * y.y * f.x * _ * b.x + 3 * v.y * y.x * f.x * _ * b.x + 6 * v.x * v.y * F * m.y * b.y + 6 * v.x * S.x * m.x * _ * b.y - 3 * v.x * y.y * f.y * F * b.y + 2 * v.x * f.x * R * m.x * b.y + 2 * v.x * f.x * R * m.y * b.x + 6 * v.x * S.y * m.x * _ * b.x + 6 * v.x * C.x * m.x * _ * x.y + 6 * v.x * m.x * C.y * x.x * _ + 4 * v.y * y.x * f.y * F * b.y + 6 * v.y * S.x * m.x * _ * b.x + 2 * v.y * y.y * f.x * F * b.y - 3 * v.y * y.y * f.y * F * b.x + 2 * v.y * f.x * R * m.x * b.x + 6 * v.y * C.x * m.x * x.x * _ - 3 * y.x * S.x * f.x * _ * b.y + 2 * y.x * S.x * f.y * _ * b.x + y.x * y.y * R * m.x * b.x - 3 * y.x * f.x * S.y * _ * b.x - 3 * y.x * f.x * C.x * _ * x.y - 3 * y.x * f.x * C.y * x.x * _ + 2 * y.x * C.x * f.y * x.x * _ + 4 * S.x * y.y * f.x * _ * b.x + 4 * y.y * f.x * C.x * x.x * _ - 2 * v.x * T * f.y * m.y * b.y - 6 * v.y * S.x * F * m.y * b.y - 6 * v.y * S.y * F * m.y * b.x - 6 * v.y * C.x * F * m.y * x.y - 2 * v.y * T * f.y * m.x * b.y - 2 * v.y * T * f.y * m.y * b.x - 6 * v.y * F * C.y * x.x * m.y - y.x * y.y * T * m.y * b.y - 2 * y.x * M * m.x * m.y * b.x + 3 * S.x * y.y * f.y * F * b.y - 2 * S.x * f.x * R * m.x * b.y - 2 * S.x * f.x * R * m.y * b.x - 6 * S.x * S.y * m.x * _ * b.x - 6 * S.x * C.x * m.x * _ * x.y - 6 * S.x * m.x * C.y * x.x * _ + 3 * y.y * S.y * f.y * F * b.x + 3 * y.y * C.x * f.y * F * x.y + 3 * y.y * f.y * F * C.y * x.x - 2 * f.x * S.y * R * m.x * b.x - 2 * f.x * C.x * R * m.x * x.y - 2 * f.x * C.x * R * x.x * m.y - 2 * f.x * R * m.x * C.y * x.x - 6 * S.y * C.x * m.x * x.x * _ - M * f.x * f.y * m.x * b.x + 2 * S.x * T * f.y * m.y * b.y + 6 * S.y * F * C.y * x.x * m.y + 2 * D * y.y * m.x * m.y * b.y + D * f.x * f.y * m.y * b.y + 2 * T * S.y * f.y * m.y * b.x + 2 * T * C.x * f.y * m.y * x.y + 2 * T * f.y * C.y * x.x * m.y + q * N + 3 * w * N * b.x - 3 * k * j * b.y + 3 * z * N * b.x + I * F * b.x - P * _ * b.y - y.x * M * F * b.y + D * y.y * _ * b.x - 3 * w * m.x * _ * b.y + 3 * k * F * m.y * b.x - D * R * m.x * b.y + M * T * m.y * b.x - 3 * U * m.x * C.y * _ - 3 * z * m.x * _ * b.y + 3 * W * F * m.y * b.x + y.x * f.x * m.x * m.y * (6 * S.y * b.y + 6 * C.y * x.y) + L * m.y * (-2 * S.y * b.y - 2 * C.y * x.y) + v.y * j * (6 * S.y * b.y + 6 * C.y * x.y) + y.y * f.x * F * (-2 * S.y * b.y - 2 * C.y * x.y) + T * f.y * m.x * (2 * S.y * b.y + 2 * C.y * x.y) + y.x * f.y * F * (-4 * S.y * b.y - 4 * C.y * x.y) + v.x * F * m.y * (-6 * S.y * b.y - 6 * C.y * x.y) + S.x * F * m.y * (6 * S.y * b.y + 6 * C.y * x.y) + C.x * F * m.y * (6 * S.y * x.y + 3 * G) + j * (-2 * S.y * C.y * x.y - W * b.y - C.y * (2 * S.y * x.y + G) - S.y * (2 * S.y * b.y + 2 * C.y * x.y)), -v.x * y.x * f.y * m.x * m.y * x.y + v.x * y.y * f.x * m.x * m.y * x.y + 6 * v.x * y.y * f.y * m.x * x.x * m.y - 6 * v.y * y.x * f.x * m.x * m.y * x.y - v.y * y.x * f.y * m.x * x.x * m.y + v.y * y.y * f.x * m.x * x.x * m.y + y.x * y.y * f.x * f.y * m.x * x.y - y.x * y.y * f.x * f.y * x.x * m.y + y.x * S.x * f.y * m.x * m.y * x.y + y.x * S.y * f.y * m.x * x.x * m.y + y.x * C.x * f.y * m.x * C.y * m.y - S.x * y.y * f.x * m.x * m.y * x.y - 6 * S.x * y.y * f.y * m.x * x.x * m.y - y.y * f.x * S.y * m.x * x.x * m.y - y.y * f.x * C.x * m.x * C.y * m.y - 6 * v.x * S.x * x.x * N - 2 * v.x * B * m.x * x.x + 2 * S.x * B * m.x * x.x + 2 * v.y * L * m.y * x.y - 6 * v.x * v.y * m.x * x.x * _ + 3 * v.x * y.x * f.x * _ * x.y - 2 * v.x * y.x * f.y * x.x * _ - 4 * v.x * y.y * f.x * x.x * _ + 3 * v.y * y.x * f.x * x.x * _ + 6 * v.x * v.y * F * m.y * x.y + 6 * v.x * S.x * m.x * _ * x.y - 3 * v.x * y.y * f.y * F * x.y + 2 * v.x * f.x * R * m.x * x.y + 2 * v.x * f.x * R * x.x * m.y + 6 * v.x * S.y * m.x * x.x * _ + 6 * v.x * C.x * m.x * C.y * _ + 4 * v.y * y.x * f.y * F * x.y + 6 * v.y * S.x * m.x * x.x * _ + 2 * v.y * y.y * f.x * F * x.y - 3 * v.y * y.y * f.y * F * x.x + 2 * v.y * f.x * R * m.x * x.x - 3 * y.x * S.x * f.x * _ * x.y + 2 * y.x * S.x * f.y * x.x * _ + y.x * y.y * R * m.x * x.x - 3 * y.x * f.x * S.y * x.x * _ - 3 * y.x * f.x * C.x * C.y * _ + 4 * S.x * y.y * f.x * x.x * _ - 2 * v.x * T * f.y * m.y * x.y - 6 * v.y * S.x * F * m.y * x.y - 6 * v.y * S.y * F * x.x * m.y - 6 * v.y * C.x * F * C.y * m.y - 2 * v.y * T * f.y * m.x * x.y - 2 * v.y * T * f.y * x.x * m.y - y.x * y.y * T * m.y * x.y - 2 * y.x * M * m.x * x.x * m.y + 3 * S.x * y.y * f.y * F * x.y - 2 * S.x * f.x * R * m.x * x.y - 2 * S.x * f.x * R * x.x * m.y - 6 * S.x * S.y * m.x * x.x * _ - 6 * S.x * C.x * m.x * C.y * _ + 3 * y.y * S.y * f.y * F * x.x + 3 * y.y * C.x * f.y * F * C.y - 2 * f.x * S.y * R * m.x * x.x - 2 * f.x * C.x * R * m.x * C.y - M * f.x * f.y * m.x * x.x + 2 * S.x * T * f.y * m.y * x.y - 3 * y.y * U * f.y * m.x * m.y + 6 * S.y * C.x * F * C.y * m.y + 2 * D * y.y * m.x * m.y * x.y + D * f.x * f.y * m.y * x.y + 2 * T * S.y * f.y * x.x * m.y + 2 * T * C.x * f.y * C.y * m.y - 3 * v.x * U * N + 3 * S.x * U * N + 3 * w * x.x * N - 3 * k * j * x.y + 3 * z * x.x * N + U * B * m.x + I * F * x.x - P * _ * x.y + 3 * v.y * U * m.x * _ - y.x * M * F * x.y + y.x * U * f.y * _ + 2 * y.y * f.x * U * _ + D * y.y * x.x * _ - f.x * U * R * m.y - 3 * S.y * U * m.x * _ - 3 * w * m.x * _ * x.y + 3 * k * F * x.x * m.y - D * R * m.x * x.y + M * T * x.x * m.y - 3 * z * m.x * _ * x.y + 3 * W * F * x.x * m.y + T * f.y * m.x * (2 * S.y * x.y + G) + y.x * f.x * m.x * m.y * (6 * S.y * x.y + 3 * G) + L * m.y * (-2 * S.y * x.y - G) + v.y * j * (6 * S.y * x.y + 3 * G) + y.y * f.x * F * (-2 * S.y * x.y - G) + y.x * f.y * F * (-4 * S.y * x.y - 2 * G) + v.x * F * m.y * (-6 * S.y * x.y - 3 * G) + S.x * F * m.y * (6 * S.y * x.y + 3 * G) + j * (-2 * S.y * G - W * x.y - S.y * (2 * S.y * x.y + G)), -v.x * y.x * f.y * m.x * C.y * m.y + v.x * y.y * f.x * m.x * C.y * m.y + 6 * v.x * y.y * C.x * f.y * m.x * m.y - 6 * v.y * y.x * f.x * m.x * C.y * m.y - v.y * y.x * C.x * f.y * m.x * m.y + v.y * y.y * f.x * C.x * m.x * m.y - y.x * y.y * f.x * C.x * f.y * m.y + y.x * y.y * f.x * f.y * m.x * C.y + y.x * S.x * f.y * m.x * C.y * m.y + 6 * y.x * f.x * S.y * m.x * C.y * m.y + y.x * S.y * C.x * f.y * m.x * m.y - S.x * y.y * f.x * m.x * C.y * m.y - 6 * S.x * y.y * C.x * f.y * m.x * m.y - y.y * f.x * S.y * C.x * m.x * m.y - 6 * v.x * S.x * C.x * N - 2 * v.x * C.x * B * m.x + 6 * v.y * S.y * j * C.y + 2 * S.x * C.x * B * m.x + 2 * v.y * L * C.y * m.y - 2 * L * S.y * C.y * m.y - 6 * v.x * v.y * C.x * m.x * _ + 3 * v.x * y.x * f.x * C.y * _ - 2 * v.x * y.x * C.x * f.y * _ - 4 * v.x * y.y * f.x * C.x * _ + 3 * v.y * y.x * f.x * C.x * _ + 6 * v.x * v.y * F * C.y * m.y + 6 * v.x * S.x * m.x * C.y * _ - 3 * v.x * y.y * f.y * F * C.y + 2 * v.x * f.x * C.x * R * m.y + 2 * v.x * f.x * R * m.x * C.y + 6 * v.x * S.y * C.x * m.x * _ + 4 * v.y * y.x * f.y * F * C.y + 6 * v.y * S.x * C.x * m.x * _ + 2 * v.y * y.y * f.x * F * C.y - 3 * v.y * y.y * C.x * f.y * F + 2 * v.y * f.x * C.x * R * m.x - 3 * y.x * S.x * f.x * C.y * _ + 2 * y.x * S.x * C.x * f.y * _ + y.x * y.y * C.x * R * m.x - 3 * y.x * f.x * S.y * C.x * _ + 4 * S.x * y.y * f.x * C.x * _ - 6 * v.x * S.y * F * C.y * m.y - 2 * v.x * T * f.y * C.y * m.y - 6 * v.y * S.x * F * C.y * m.y - 6 * v.y * S.y * C.x * F * m.y - 2 * v.y * T * C.x * f.y * m.y - 2 * v.y * T * f.y * m.x * C.y - y.x * y.y * T * C.y * m.y - 4 * y.x * S.y * f.y * F * C.y - 2 * y.x * M * C.x * m.x * m.y + 3 * S.x * y.y * f.y * F * C.y - 2 * S.x * f.x * C.x * R * m.y - 2 * S.x * f.x * R * m.x * C.y - 6 * S.x * S.y * C.x * m.x * _ - 2 * y.y * f.x * S.y * F * C.y + 3 * y.y * S.y * C.x * f.y * F - 2 * f.x * S.y * C.x * R * m.x - M * f.x * C.x * f.y * m.x + 6 * S.x * S.y * F * C.y * m.y + 2 * S.x * T * f.y * C.y * m.y + 2 * D * y.y * m.x * C.y * m.y + D * f.x * f.y * C.y * m.y + 2 * T * S.y * C.x * f.y * m.y + 2 * T * S.y * f.y * m.x * C.y + 3 * w * C.x * N - 3 * k * j * C.y + 3 * z * C.x * N + I * C.x * F - P * C.y * _ - 3 * W * j * C.y - y.x * M * F * C.y + D * y.y * C.x * _ - 3 * w * m.x * C.y * _ + 3 * k * C.x * F * m.y - D * R * m.x * C.y + M * T * C.x * m.y - 3 * z * m.x * C.y * _ + 3 * W * C.x * F * m.y, v.x * v.y * y.x * f.y * m.x * m.y - v.x * v.y * y.y * f.x * m.x * m.y + v.x * y.x * y.y * f.x * f.y * m.y - v.y * y.x * y.y * f.x * f.y * m.x - v.x * y.x * S.y * f.y * m.x * m.y + 6 * v.x * S.x * y.y * f.y * m.x * m.y + v.x * y.y * f.x * S.y * m.x * m.y - v.y * y.x * S.x * f.y * m.x * m.y - 6 * v.y * y.x * f.x * S.y * m.x * m.y + v.y * S.x * y.y * f.x * m.x * m.y - y.x * S.x * y.y * f.x * f.y * m.y + y.x * y.y * f.x * S.y * f.y * m.x + y.x * S.x * S.y * f.y * m.x * m.y - S.x * y.y * f.x * S.y * m.x * m.y - 2 * v.x * S.x * B * m.x + 2 * v.y * L * S.y * m.y - 3 * v.x * v.y * y.x * f.x * _ - 6 * v.x * v.y * S.x * m.x * _ + 3 * v.x * v.y * y.y * f.y * F - 2 * v.x * v.y * f.x * R * m.x - 2 * v.x * y.x * S.x * f.y * _ - v.x * y.x * y.y * R * m.x + 3 * v.x * y.x * f.x * S.y * _ - 4 * v.x * S.x * y.y * f.x * _ + 3 * v.y * y.x * S.x * f.x * _ + 6 * v.x * v.y * S.y * F * m.y + 2 * v.x * v.y * T * f.y * m.y + 2 * v.x * y.x * M * m.x * m.y + 2 * v.x * S.x * f.x * R * m.y + 6 * v.x * S.x * S.y * m.x * _ - 3 * v.x * y.y * S.y * f.y * F + 2 * v.x * f.x * S.y * R * m.x + v.x * M * f.x * f.y * m.x + v.y * y.x * y.y * T * m.y + 4 * v.y * y.x * S.y * f.y * F - 3 * v.y * S.x * y.y * f.y * F + 2 * v.y * S.x * f.x * R * m.x + 2 * v.y * y.y * f.x * S.y * F + y.x * S.x * y.y * R * m.x - 3 * y.x * S.x * f.x * S.y * _ - 2 * v.x * T * S.y * f.y * m.y - 6 * v.y * S.x * S.y * F * m.y - 2 * v.y * S.x * T * f.y * m.y - 2 * v.y * D * y.y * m.x * m.y - v.y * D * f.x * f.y * m.y - 2 * v.y * T * S.y * f.y * m.x - 2 * y.x * S.x * M * m.x * m.y - y.x * y.y * T * S.y * m.y + 3 * S.x * y.y * S.y * f.y * F - 2 * S.x * f.x * S.y * R * m.x - S.x * M * f.x * f.y * m.x + 3 * k * y.x * f.x * m.x * m.y + 3 * y.x * f.x * W * m.x * m.y + 2 * S.x * T * S.y * f.y * m.y - 3 * w * y.y * f.y * m.x * m.y + 2 * D * y.y * S.y * m.x * m.y + D * f.x * S.y * f.y * m.y - 3 * z * y.y * f.y * m.x * m.y - E * N + O * j + H * N - V * j - 3 * v.x * z * N - v.x * I * F + 3 * w * S.x * N + v.y * P * _ + 3 * v.y * W * j + S.x * I * F + w * B * m.x - 3 * k * S.y * j - k * L * m.y + z * B * m.x - P * S.y * _ - L * W * m.y - v.x * D * y.y * _ + v.y * y.x * M * F - 3 * v.x * k * F * m.y - v.x * M * T * m.y + v.y * D * R * m.x - y.x * M * S.y * F + 3 * w * v.y * m.x * _ + w * y.x * f.y * _ + 2 * w * y.y * f.x * _ - 2 * k * y.x * f.y * F - k * y.y * f.x * F + D * S.x * y.y * _ - 3 * v.x * W * F * m.y + 3 * v.y * z * m.x * _ + y.x * z * f.y * _ - 2 * y.x * W * f.y * F + S.x * M * T * m.y - y.y * f.x * W * F - w * f.x * R * m.y - 3 * w * S.y * m.x * _ + 3 * k * S.x * F * m.y + k * T * f.y * m.x - D * S.y * R * m.x + 2 * z * y.y * f.x * _ + 3 * S.x * W * F * m.y - z * f.x * R * m.y - 3 * z * S.y * m.x * _ + T * W * f.y * m.x).getRootsInInterval(0, 1), re = 0; re < te.length; re++) {
      var ne = te[re],
        ie = new u(m.x, f.x, y.x, v.x - S.x - ne * C.x - ne * ne * x.x - ne * ne * ne * b.x).getRoots(),
        oe = new u(m.y, f.y, y.y, v.y - S.y - ne * C.y - ne * ne * x.y - ne * ne * ne * b.y).getRoots();
      if (ie.length > 0 && oe.length > 0) {
        var se = 1e-4;
        e: for (var ae = 0; ae < ie.length; ae++) {
          var le = ie[ae];
          if (0 <= le && le <= 1) for (var ce = 0; ce < oe.length; ce++) if (Math.abs(le - oe[ce]) < se) {
            A.points.push(b.multiply(ne * ne * ne).add(x.multiply(ne * ne).add(C.multiply(ne).add(S))));
            break e;
          }
        }
      }
    }
    return A.points.length > 0 && (A.status = "Intersection"), A;
  }, d.intersectBezier3Circle = function (e, t, r, n, i, o) {
    return d.intersectBezier3Ellipse(e, t, r, n, i, o, o);
  }, d.intersectBezier3Ellipse = function (e, t, r, n, i, o, s) {
    var a,
      l,
      c,
      h,
      p,
      m,
      f,
      y,
      v = new d("No Intersection");
    a = e.multiply(-1), l = t.multiply(3), c = r.multiply(-3), p = new g((h = a.add(l.add(c.add(n)))).x, h.y), a = e.multiply(3), l = t.multiply(-6), c = r.multiply(3), m = new g((h = a.add(l.add(c))).x, h.y), a = e.multiply(-3), l = t.multiply(3), f = new g((c = a.add(l)).x, c.y), y = new g(e.x, e.y);
    for (var b = o * o, x = s * s, C, S = new u(p.x * p.x * x + p.y * p.y * b, 2 * (p.x * m.x * x + p.y * m.y * b), 2 * (p.x * f.x * x + p.y * f.y * b) + m.x * m.x * x + m.y * m.y * b, 2 * p.x * x * (y.x - i.x) + 2 * p.y * b * (y.y - i.y) + 2 * (m.x * f.x * x + m.y * f.y * b), 2 * m.x * x * (y.x - i.x) + 2 * m.y * b * (y.y - i.y) + f.x * f.x * x + f.y * f.y * b, 2 * f.x * x * (y.x - i.x) + 2 * f.y * b * (y.y - i.y), y.x * y.x * x - 2 * y.y * i.y * b - 2 * y.x * i.x * x + y.y * y.y * b + i.x * i.x * x + i.y * i.y * b - b * x).getRootsInInterval(0, 1), A = 0; A < S.length; A++) {
      var w = S[A];
      v.points.push(p.multiply(w * w * w).add(m.multiply(w * w).add(f.multiply(w).add(y))));
    }
    return v.points.length > 0 && (v.status = "Intersection"), v;
  }, d.intersectBezier3Line = function (e, t, r, n, i, o) {
    var s,
      a,
      l,
      c,
      h,
      p,
      m,
      f,
      y,
      v,
      b = i.min(o),
      x = i.max(o),
      C = new d("No Intersection");
    s = e.multiply(-1), a = t.multiply(3), l = r.multiply(-3), h = new g((c = s.add(a.add(l.add(n)))).x, c.y), s = e.multiply(3), a = t.multiply(-6), l = r.multiply(3), p = new g((c = s.add(a.add(l))).x, c.y), s = e.multiply(-3), a = t.multiply(3), m = new g((l = s.add(a)).x, l.y), f = new g(e.x, e.y), v = new g(i.y - o.y, o.x - i.x), y = i.x * o.y - o.x * i.y;
    for (var S = new u(v.dot(h), v.dot(p), v.dot(m), v.dot(f) + y).getRoots(), A = 0; A < S.length; A++) {
      var w = S[A];
      if (0 <= w && w <= 1) {
        var E = e.lerp(t, w),
          k = t.lerp(r, w),
          O = r.lerp(n, w),
          D = E.lerp(k, w),
          P = k.lerp(O, w),
          M = D.lerp(P, w);
        i.x == o.x ? b.y <= M.y && M.y <= x.y && (C.status = "Intersection", C.appendPoint(M)) : i.y == o.y ? b.x <= M.x && M.x <= x.x && (C.status = "Intersection", C.appendPoint(M)) : M.gte(b) && M.lte(x) && (C.status = "Intersection", C.appendPoint(M));
      }
    }
    return C;
  }, d.intersectBezier3Polygon = function (e, t, r, n, i) {
    for (var o = new d("No Intersection"), s = i.length, a = 0; a < s; a++) {
      var l = i[a],
        c = i[(a + 1) % s],
        h = d.intersectBezier3Line(e, t, r, n, l, c);
      o.appendPoints(h.points);
    }
    return o.points.length > 0 && (o.status = "Intersection"), o;
  }, d.intersectBezier3Rectangle = function (e, t, r, n, i, o) {
    var s = i.min(o),
      a = i.max(o),
      l = new p(a.x, s.y),
      c = new p(s.x, a.y),
      h = d.intersectBezier3Line(e, t, r, n, s, l),
      u = d.intersectBezier3Line(e, t, r, n, l, a),
      g = d.intersectBezier3Line(e, t, r, n, a, c),
      m = d.intersectBezier3Line(e, t, r, n, c, s),
      f = new d("No Intersection");
    return f.appendPoints(h.points), f.appendPoints(u.points), f.appendPoints(g.points), f.appendPoints(m.points), f.points.length > 0 && (f.status = "Intersection"), f;
  }, d.intersectCircleCircle = function (e, t, r, n) {
    var i,
      o = t + n,
      s = Math.abs(t - n),
      a = e.distanceFrom(r);
    if (a > o) i = new d("Outside");else if (a < s) i = new d("Inside");else {
      i = new d("Intersection");
      var l = (t * t - n * n + a * a) / (2 * a),
        c = Math.sqrt(t * t - l * l),
        h = e.lerp(r, l / a),
        u = c / a;
      i.points.push(new p(h.x - u * (r.y - e.y), h.y + u * (r.x - e.x))), i.points.push(new p(h.x + u * (r.y - e.y), h.y - u * (r.x - e.x)));
    }
    return i;
  }, d.intersectCircleEllipse = function (e, t, r, n, i) {
    return d.intersectEllipseEllipse(e, t, t, r, n, i);
  }, d.intersectCircleLine = function (e, t, r, n) {
    var i,
      o = (n.x - r.x) * (n.x - r.x) + (n.y - r.y) * (n.y - r.y),
      s = 2 * ((n.x - r.x) * (r.x - e.x) + (n.y - r.y) * (r.y - e.y)),
      a,
      l = s * s - 4 * o * (e.x * e.x + e.y * e.y + r.x * r.x + r.y * r.y - 2 * (e.x * r.x + e.y * r.y) - t * t);
    if (l < 0) i = new d("Outside");else if (0 == l) i = new d("Tangent");else {
      var c = Math.sqrt(l),
        h = (-s + c) / (2 * o),
        p = (-s - c) / (2 * o);
      (h < 0 || h > 1) && (p < 0 || p > 1) ? i = new d(h < 0 && p < 0 || h > 1 && p > 1 ? "Outside" : "Inside") : (i = new d("Intersection"), 0 <= h && h <= 1 && i.points.push(r.lerp(n, h)), 0 <= p && p <= 1 && i.points.push(r.lerp(n, p)));
    }
    return i;
  }, d.intersectCirclePolygon = function (e, t, r) {
    for (var n = new d("No Intersection"), i = r.length, o, s = 0; s < i; s++) {
      var a = r[s],
        l = r[(s + 1) % i];
      o = d.intersectCircleLine(e, t, a, l), n.appendPoints(o.points);
    }
    return n.points.length > 0 ? n.status = "Intersection" : n.status = o.status, n;
  }, d.intersectCircleRectangle = function (e, t, r, n) {
    var i = r.min(n),
      o = r.max(n),
      s = new p(o.x, i.y),
      a = new p(i.x, o.y),
      l = d.intersectCircleLine(e, t, i, s),
      c = d.intersectCircleLine(e, t, s, o),
      h = d.intersectCircleLine(e, t, o, a),
      u = d.intersectCircleLine(e, t, a, i),
      g = new d("No Intersection");
    return g.appendPoints(l.points), g.appendPoints(c.points), g.appendPoints(h.points), g.appendPoints(u.points), g.points.length > 0 ? g.status = "Intersection" : g.status = l.status, g;
  }, d.intersectEllipseEllipse = function (e, t, r, n, i, o) {
    for (var s = [r * r, 0, t * t, -2 * r * r * e.x, -2 * t * t * e.y, r * r * e.x * e.x + t * t * e.y * e.y - t * t * r * r], a = [o * o, 0, i * i, -2 * o * o * n.x, -2 * i * i * n.y, o * o * n.x * n.x + i * i * n.y * n.y - i * i * o * o], l, c = d.bezout(s, a).getRoots(), h = .001, g = (s[0] * s[0] + 2 * s[1] * s[1] + s[2] * s[2]) * h, m = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * h, f = new d("No Intersection"), y = 0; y < c.length; y++) for (var v, b = new u(s[0], s[3] + c[y] * s[1], s[5] + c[y] * (s[4] + c[y] * s[2])).getRoots(), x = 0; x < b.length; x++) {
      var C = (s[0] * b[x] + s[1] * c[y] + s[3]) * b[x] + (s[2] * c[y] + s[4]) * c[y] + s[5];
      Math.abs(C) < g && (C = (a[0] * b[x] + a[1] * c[y] + a[3]) * b[x] + (a[2] * c[y] + a[4]) * c[y] + a[5], Math.abs(C) < m && f.appendPoint(new p(b[x], c[y])));
    }
    return f.points.length > 0 && (f.status = "Intersection"), f;
  }, d.intersectEllipseLine = function (e, t, r, n, i) {
    var o,
      s = new g(n.x, n.y),
      a = g.fromPoints(n, i),
      l = new g(e.x, e.y),
      c = s.subtract(l),
      h = new g(a.x / (t * t), a.y / (r * r)),
      p = new g(c.x / (t * t), c.y / (r * r)),
      u = a.dot(h),
      m = a.dot(p),
      e,
      f = m * m - u * (e = c.dot(p) - 1);
    if (f < 0) o = new d("Outside");else if (f > 0) {
      var y = Math.sqrt(f),
        v = (-m - y) / u,
        b = (-m + y) / u;
      (v < 0 || 1 < v) && (b < 0 || 1 < b) ? o = new d(v < 0 && b < 0 || v > 1 && b > 1 ? "Outside" : "Inside") : (o = new d("Intersection"), 0 <= v && v <= 1 && o.appendPoint(n.lerp(i, v)), 0 <= b && b <= 1 && o.appendPoint(n.lerp(i, b)));
    } else {
      var x = -m / u;
      0 <= x && x <= 1 ? (o = new d("Intersection")).appendPoint(n.lerp(i, x)) : o = new d("Outside");
    }
    return o;
  }, d.intersectEllipsePolygon = function (e, t, r, n) {
    for (var i = new d("No Intersection"), o = n.length, s = 0; s < o; s++) {
      var a = n[s],
        l = n[(s + 1) % o],
        c = d.intersectEllipseLine(e, t, r, a, l);
      i.appendPoints(c.points);
    }
    return i.points.length > 0 && (i.status = "Intersection"), i;
  }, d.intersectEllipseRectangle = function (e, t, r, n, i) {
    var o = n.min(i),
      s = n.max(i),
      a = new p(s.x, o.y),
      l = new p(o.x, s.y),
      c = d.intersectEllipseLine(e, t, r, o, a),
      h = d.intersectEllipseLine(e, t, r, a, s),
      u = d.intersectEllipseLine(e, t, r, s, l),
      g = d.intersectEllipseLine(e, t, r, l, o),
      m = new d("No Intersection");
    return m.appendPoints(c.points), m.appendPoints(h.points), m.appendPoints(u.points), m.appendPoints(g.points), m.points.length > 0 && (m.status = "Intersection"), m;
  }, d.intersectLineLine = function (e, t, r, n) {
    var i,
      o = (n.x - r.x) * (e.y - r.y) - (n.y - r.y) * (e.x - r.x),
      s = (t.x - e.x) * (e.y - r.y) - (t.y - e.y) * (e.x - r.x),
      a = (n.y - r.y) * (t.x - e.x) - (n.x - r.x) * (t.y - e.y);
    if (0 != a) {
      var l = o / a,
        c = s / a;
      0 <= l && l <= 1 && 0 <= c && c <= 1 ? (i = new d("Intersection")).points.push(new p(e.x + l * (t.x - e.x), e.y + l * (t.y - e.y))) : i = new d("No Intersection");
    } else i = new d(0 == o || 0 == s ? "Coincident" : "Parallel");
    return i;
  }, d.intersectLinePolygon = function (e, t, r) {
    for (var n = new d("No Intersection"), i = r.length, o = 0; o < i; o++) {
      var s = r[o],
        a = r[(o + 1) % i],
        l = d.intersectLineLine(e, t, s, a);
      n.appendPoints(l.points);
    }
    return n.points.length > 0 && (n.status = "Intersection"), n;
  }, d.intersectLineRectangle = function (e, t, r, n) {
    var i = r.min(n),
      o = r.max(n),
      s = new p(o.x, i.y),
      a = new p(i.x, o.y),
      l = d.intersectLineLine(i, s, e, t),
      c = d.intersectLineLine(s, o, e, t),
      h = d.intersectLineLine(o, a, e, t),
      u = d.intersectLineLine(a, i, e, t),
      g = new d("No Intersection");
    return g.appendPoints(l.points), g.appendPoints(c.points), g.appendPoints(h.points), g.appendPoints(u.points), g.points.length > 0 && (g.status = "Intersection"), g;
  }, d.intersectPolygonPolygon = function (e, t) {
    for (var r = new d("No Intersection"), n = e.length, i = 0; i < n; i++) {
      var o = e[i],
        s = e[(i + 1) % n],
        a = d.intersectLinePolygon(o, s, t);
      r.appendPoints(a.points);
    }
    return r.points.length > 0 && (r.status = "Intersection"), r;
  }, d.intersectPolygonRectangle = function (e, t, r) {
    var n = t.min(r),
      i = t.max(r),
      o = new p(i.x, n.y),
      s = new p(n.x, i.y),
      a = d.intersectLinePolygon(n, o, e),
      l = d.intersectLinePolygon(o, i, e),
      c = d.intersectLinePolygon(i, s, e),
      h = d.intersectLinePolygon(s, n, e),
      u = new d("No Intersection");
    return u.appendPoints(a.points), u.appendPoints(l.points), u.appendPoints(c.points), u.appendPoints(h.points), u.points.length > 0 && (u.status = "Intersection"), u;
  }, d.intersectRayRay = function (e, t, r, n) {
    var i,
      o = (n.x - r.x) * (e.y - r.y) - (n.y - r.y) * (e.x - r.x),
      s = (t.x - e.x) * (e.y - r.y) - (t.y - e.y) * (e.x - r.x),
      a = (n.y - r.y) * (t.x - e.x) - (n.x - r.x) * (t.y - e.y);
    if (0 != a) {
      var l = o / a;
      (i = new d("Intersection")).points.push(new p(e.x + l * (t.x - e.x), e.y + l * (t.y - e.y)));
    } else i = new d(0 == o || 0 == s ? "Coincident" : "Parallel");
    return i;
  }, d.intersectRectangleRectangle = function (e, t, r, n) {
    var i = e.min(t),
      o = e.max(t),
      s = new p(o.x, i.y),
      a = new p(i.x, o.y),
      l = d.intersectLineRectangle(i, s, r, n),
      c = d.intersectLineRectangle(s, o, r, n),
      h = d.intersectLineRectangle(o, a, r, n),
      u = d.intersectLineRectangle(a, i, r, n),
      g = new d("No Intersection");
    return g.appendPoints(l.points), g.appendPoints(c.points), g.appendPoints(h.points), g.appendPoints(u.points), g.points.length > 0 && (g.status = "Intersection"), g;
  }, d.bezout = function (e, t) {
    var r = e[0] * t[1] - t[0] * e[1],
      n = e[0] * t[2] - t[0] * e[2],
      i = e[0] * t[3] - t[0] * e[3],
      o = e[0] * t[4] - t[0] * e[4],
      s = e[0] * t[5] - t[0] * e[5],
      a = e[1] * t[2] - t[1] * e[2],
      l = e[1] * t[4] - t[1] * e[4],
      c = e[1] * t[5] - t[1] * e[5],
      d = e[2] * t[3] - t[2] * e[3],
      h = e[3] * t[4] - t[3] * e[4],
      p = e[3] * t[5] - t[3] * e[5],
      g = c + h,
      m = l - d;
    return new u(r * a - n * n, r * m + i * a - 2 * n * o, r * g + i * m - o * o - 2 * n * s, r * p + i * g - 2 * o * s, i * p - s * s);
  }, h.prototype.init = function (e, t) {
    this.name = e, this.params = t;
  }, p.prototype.init = function (e, t) {
    this.x = e, this.y = t;
  }, p.prototype.add = function (e) {
    return new p(this.x + e.x, this.y + e.y);
  }, p.prototype.addEquals = function (e) {
    return this.x += e.x, this.y += e.y, this;
  }, p.prototype.scalarAdd = function (e) {
    return new p(this.x + e, this.y + e);
  }, p.prototype.scalarAddEquals = function (e) {
    return this.x += e, this.y += e, this;
  }, p.prototype.subtract = function (e) {
    return new p(this.x - e.x, this.y - e.y);
  }, p.prototype.subtractEquals = function (e) {
    return this.x -= e.x, this.y -= e.y, this;
  }, p.prototype.scalarSubtract = function (e) {
    return new p(this.x - e, this.y - e);
  }, p.prototype.scalarSubtractEquals = function (e) {
    return this.x -= e, this.y -= e, this;
  }, p.prototype.multiply = function (e) {
    return new p(this.x * e, this.y * e);
  }, p.prototype.multiplyEquals = function (e) {
    return this.x *= e, this.y *= e, this;
  }, p.prototype.divide = function (e) {
    return new p(this.x / e, this.y / e);
  }, p.prototype.divideEquals = function (e) {
    return this.x /= e, this.y /= e, this;
  }, p.prototype.eq = function (e) {
    return this.x == e.x && this.y == e.y;
  }, p.prototype.lt = function (e) {
    return this.x < e.x && this.y < e.y;
  }, p.prototype.lte = function (e) {
    return this.x <= e.x && this.y <= e.y;
  }, p.prototype.gt = function (e) {
    return this.x > e.x && this.y > e.y;
  }, p.prototype.gte = function (e) {
    return this.x >= e.x && this.y >= e.y;
  }, p.prototype.lerp = function (e, t) {
    return new p(this.x + (e.x - this.x) * t, this.y + (e.y - this.y) * t);
  }, p.prototype.distanceFrom = function (e) {
    var t = this.x - e.x,
      r = this.y - e.y;
    return Math.sqrt(t * t + r * r);
  }, p.prototype.min = function (e) {
    return new p(Math.min(this.x, e.x), Math.min(this.y, e.y));
  }, p.prototype.max = function (e) {
    return new p(Math.max(this.x, e.x), Math.max(this.y, e.y));
  }, p.prototype.toString = function () {
    return this.x + "," + this.y;
  }, p.prototype.setXY = function (e, t) {
    this.x = e, this.y = t;
  }, p.prototype.setFromPoint = function (e) {
    this.x = e.x, this.y = e.y;
  }, p.prototype.swap = function (e) {
    var t = this.x,
      r = this.y;
    this.x = e.x, this.y = e.y, e.x = t, e.y = r;
  }, u.TOLERANCE = 1e-6, u.ACCURACY = 6, u.prototype.init = function (e) {
    this.coefs = new Array();
    for (var t = e.length - 1; t >= 0; t--) this.coefs.push(e[t]);
  }, u.prototype.eval = function (e) {
    for (var t = 0, r = this.coefs.length - 1; r >= 0; r--) t = t * e + this.coefs[r];
    return t;
  }, u.prototype.multiply = function (e) {
    for (var t = new u(), r = 0; r <= this.getDegree() + e.getDegree(); r++) t.coefs.push(0);
    for (var r = 0; r <= this.getDegree(); r++) for (var n = 0; n <= e.getDegree(); n++) t.coefs[r + n] += this.coefs[r] * e.coefs[n];
    return t;
  }, u.prototype.divide_scalar = function (e) {
    for (var t = 0; t < this.coefs.length; t++) this.coefs[t] /= e;
  }, u.prototype.simplify = function () {
    for (var e = this.getDegree(); e >= 0 && Math.abs(this.coefs[e]) <= u.TOLERANCE; e--) this.coefs.pop();
  }, u.prototype.bisection = function (e, t) {
    var r = this.eval(e),
      n = this.eval(t),
      i;
    if (Math.abs(r) <= u.TOLERANCE) i = e;else if (Math.abs(n) <= u.TOLERANCE) i = t;else if (r * n <= 0) for (var o = Math.log(t - e), s = Math.log(10) * u.ACCURACY, a = Math.ceil((o + s) / Math.log(2)), l = 0; l < a; l++) {
      i = .5 * (e + t);
      var c = this.eval(i);
      if (Math.abs(c) <= u.TOLERANCE) break;
      c * r < 0 ? (t = i, n = c) : (e = i, r = c);
    }
    return i;
  }, u.prototype.toString = function () {
    for (var e = new Array(), t = new Array(), r = this.coefs.length - 1; r >= 0; r--) {
      var n = this.coefs[r];
      if (0 != n) {
        var i = n < 0 ? " - " : " + ";
        n = Math.abs(n), r > 0 && (1 == n ? n = "x" : n += "x"), r > 1 && (n += "^" + r), t.push(i), e.push(n);
      }
    }
    t[0] = " + " == t[0] ? "" : "-";
    for (var o = "", r = 0; r < e.length; r++) o += t[r] + e[r];
    return o;
  }, u.prototype.getDegree = function () {
    return this.coefs.length - 1;
  }, u.prototype.getDerivative = function () {
    for (var e = new u(), t = 1; t < this.coefs.length; t++) e.coefs.push(t * this.coefs[t]);
    return e;
  }, u.prototype.getRoots = function () {
    var e;
    switch (this.simplify(), this.getDegree()) {
      case 0:
      default:
        e = new Array();
        break;
      case 1:
        e = this.getLinearRoot();
        break;
      case 2:
        e = this.getQuadraticRoots();
        break;
      case 3:
        e = this.getCubicRoots();
        break;
      case 4:
        e = this.getQuarticRoots();
    }
    return e;
  }, u.prototype.getRootsInInterval = function (e, t) {
    var r = new Array(),
      n;
    if (1 == this.getDegree()) null != (n = this.bisection(e, t)) && r.push(n);else {
      var i,
        o = this.getDerivative().getRootsInInterval(e, t);
      if (o.length > 0) {
        null != (n = this.bisection(e, o[0])) && r.push(n);
        for (var s = 0; s <= o.length - 2; s++) null != (n = this.bisection(o[s], o[s + 1])) && r.push(n);
        null != (n = this.bisection(o[o.length - 1], t)) && r.push(n);
      } else null != (n = this.bisection(e, t)) && r.push(n);
    }
    return r;
  }, u.prototype.getLinearRoot = function () {
    var e = new Array(),
      t = this.coefs[1];
    return 0 != t && e.push(-this.coefs[0] / t), e;
  }, u.prototype.getQuadraticRoots = function () {
    var e = new Array();
    if (2 == this.getDegree()) {
      var t = this.coefs[2],
        r = this.coefs[1] / t,
        n,
        i = r * r - 4 * (this.coefs[0] / t);
      if (i > 0) {
        var o = Math.sqrt(i);
        e.push(.5 * (-r + o)), e.push(.5 * (-r - o));
      } else 0 == i && e.push(.5 * -r);
    }
    return e;
  }, u.prototype.getCubicRoots = function () {
    var e = new Array();
    if (3 == this.getDegree()) {
      var t = this.coefs[3],
        r = this.coefs[2] / t,
        n = this.coefs[1] / t,
        i,
        o = (3 * n - r * r) / 3,
        s = (2 * r * r * r - 9 * n * r + 27 * (this.coefs[0] / t)) / 27,
        a = r / 3,
        l = s * s / 4 + o * o * o / 27,
        c = s / 2;
      if (Math.abs(l) <= u.TOLERANCE) var d = 0;
      if (l > 0) {
        var h = Math.sqrt(l),
          p,
          g;
        g = (p = -c + h) >= 0 ? Math.pow(p, 1 / 3) : -Math.pow(-p, 1 / 3), (p = -c - h) >= 0 ? g += Math.pow(p, 1 / 3) : g -= Math.pow(-p, 1 / 3), e.push(g - a);
      } else if (l < 0) {
        var m = Math.sqrt(-o / 3),
          f = Math.atan2(Math.sqrt(-l), -c) / 3,
          y = Math.cos(f),
          v = Math.sin(f),
          b = Math.sqrt(3);
        e.push(2 * m * y - a), e.push(-m * (y + b * v) - a), e.push(-m * (y - b * v) - a);
      } else {
        var p;
        p = c >= 0 ? -Math.pow(c, 1 / 3) : Math.pow(-c, 1 / 3), e.push(2 * p - a), e.push(-p - a);
      }
    }
    return e;
  }, u.prototype.getQuarticRoots = function () {
    var e = new Array();
    if (4 == this.getDegree()) {
      var t = this.coefs[4],
        r = this.coefs[3] / t,
        n = this.coefs[2] / t,
        i = this.coefs[1] / t,
        o = this.coefs[0] / t,
        s,
        a = new u(1, -n, r * i - 4 * o, -r * r * o + 4 * n * o - i * i).getCubicRoots()[0],
        l = r * r / 4 - n + a;
      if (Math.abs(l) <= u.TOLERANCE && (l = 0), l > 0) {
        var c = Math.sqrt(l),
          d = 3 * r * r / 4 - c * c - 2 * n,
          h,
          p = d + (h = (4 * r * n - 8 * i - r * r * r) / (4 * c)),
          g = d - h;
        if (Math.abs(p) <= u.TOLERANCE && (p = 0), Math.abs(g) <= u.TOLERANCE && (g = 0), p >= 0) {
          var m = Math.sqrt(p);
          e.push(-r / 4 + (c + m) / 2), e.push(-r / 4 + (c - m) / 2);
        }
        if (g >= 0) {
          var m = Math.sqrt(g);
          e.push(-r / 4 + (m - c) / 2), e.push(-r / 4 - (m + c) / 2);
        }
      } else if (l < 0) ;else {
        var h;
        if ((h = a * a - 4 * o) >= -u.TOLERANCE) {
          if (h < 0 && (h = 0), (d = 3 * r * r / 4 - 2 * n) + (h = 2 * Math.sqrt(h)) >= u.TOLERANCE) {
            var f = Math.sqrt(d + h);
            e.push(-r / 4 + f / 2), e.push(-r / 4 - f / 2);
          }
          if (d - h >= u.TOLERANCE) {
            var f = Math.sqrt(d - h);
            e.push(-r / 4 + f / 2), e.push(-r / 4 - f / 2);
          }
        }
      }
    }
    return e;
  }, g.prototype.init = function (e, t) {
    this.x = e, this.y = t;
  }, g.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, g.prototype.dot = function (e) {
    return this.x * e.x + this.y * e.y;
  }, g.prototype.cross = function (e) {
    return this.x * e.y - this.y * e.x;
  }, g.prototype.unit = function () {
    return this.divide(this.length());
  }, g.prototype.unitEquals = function () {
    return this.divideEquals(this.length()), this;
  }, g.prototype.add = function (e) {
    return new g(this.x + e.x, this.y + e.y);
  }, g.prototype.addEquals = function (e) {
    return this.x += e.x, this.y += e.y, this;
  }, g.prototype.subtract = function (e) {
    return new g(this.x - e.x, this.y - e.y);
  }, g.prototype.subtractEquals = function (e) {
    return this.x -= e.x, this.y -= e.y, this;
  }, g.prototype.multiply = function (e) {
    return new g(this.x * e, this.y * e);
  }, g.prototype.multiplyEquals = function (e) {
    return this.x *= e, this.y *= e, this;
  }, g.prototype.divide = function (e) {
    return new g(this.x / e, this.y / e);
  }, g.prototype.divideEquals = function (e) {
    return this.x /= e, this.y /= e, this;
  }, g.prototype.perp = function () {
    return new g(-this.y, this.x);
  }, g.fromPoints = function (e, t) {
    return new g(t.x - e.x, t.y - e.y);
  };
  var m = r(61885);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class v {
    flipVerticallyPoint(e, t) {
      return e.y == t ? e : {
        x: e.x,
        y: t - (e.y - t)
      };
    }
    flipHorizontallyPoint(e, t) {
      return e.x == t ? e : {
        x: t - (e.x - t),
        y: e.y
      };
    }
    signSideOfPoint(e, t, r) {
      return (r.x - t.x) * (e.y - t.y) - (r.y - t.y) * (e.x - t.x);
    }
    isSameSide(e, t, r, n) {
      var i, o;
      return this.signSideOfPoint(e, r, n) >= 0 == this.signSideOfPoint(t, r, n) >= 0;
    }
    bezierBbox(e) {
      var t = b(e.p1.x, e.p1.y, e.cp.x, e.cp.y, e.cp2.x, e.cp2.y, e.p2.x, e.p2.y);
      return {
        p1: {
          x: t.min.x,
          y: t.min.y
        },
        p2: {
          x: t.max.x,
          y: t.max.y
        }
      };
    }
    quadraticBezierBbox(e) {
      var t = this.quadraticToCubic(e);
      return this.bezierBbox(t);
    }
    lineBbox(e) {
      return {
        p1: {
          x: Math.min(e.p1.x, e.p2.x),
          y: Math.min(e.p1.y, e.p2.y)
        },
        p2: {
          x: Math.max(e.p1.x, e.p2.x),
          y: Math.max(e.p1.y, e.p2.y)
        }
      };
    }
    beziersBbox(e) {
      return this.expandByMaxRectangles(e.map(e => this.bezierBbox(e)));
    }
    rectWidth(e) {
      return e.p2.x - e.p1.x;
    }
    rectHeight(e) {
      return e.p2.y - e.p1.y;
    }
    rectWidthHeight(e) {
      return {
        width: this.rectWidth(e),
        height: this.rectHeight(e)
      };
    }
    rectWidthHeightAbs(e) {
      return {
        width: Math.abs(this.rectWidth(e)),
        height: Math.abs(this.rectHeight(e))
      };
    }
    genericLinesBbox(e) {
      return this.expandByMaxRectangles(e.map(e => this.isCubicBezierData(e) ? this.bezierBbox(e) : this.isQuadraticBezierData(e) ? this.quadraticBezierBbox(e) : this.lineBbox(e)));
    }
    expandByMaxRectangleByPoint(e, t) {
      return {
        p1: {
          x: Math.min(e.p1.x, t.x),
          y: Math.min(e.p1.y, t.y)
        },
        p2: {
          x: Math.max(e.p2.x, t.x),
          y: Math.max(e.p2.y, t.y)
        }
      };
    }
    expandByMaxRectangleAround(e, t) {
      return {
        p1: {
          x: e.p1.x - t,
          y: e.p1.y - t
        },
        p2: {
          x: e.p2.x + t,
          y: e.p2.y + t
        }
      };
    }
    expandByMaxRectangles(e) {
      if (!e || 0 == e.length) return null;
      var t,
        r,
        n = {
          p1: {
            x: Number.MAX_SAFE_INTEGER,
            y: Number.MAX_SAFE_INTEGER
          },
          p2: {
            x: Number.MIN_SAFE_INTEGER,
            y: Number.MIN_SAFE_INTEGER
          }
        };
      return e.reduce((e, t) => this.expandByMaxRectangle(e, t), n);
    }
    expandByMaxRectangle(e, t) {
      return null == e ? t : null == t ? e : {
        p1: {
          x: Math.min(e.p1.x, t.p1.x),
          y: Math.min(e.p1.y, t.p1.y)
        },
        p2: {
          x: Math.max(e.p2.x, t.p2.x),
          y: Math.max(e.p2.y, t.p2.y)
        }
      };
    }
    boxCollideOrInsideEachOther(e, t) {
      return this.xyInsideRect(e.left, e.top, t) || this.xyInsideRect(e.right, e.top, t) || this.xyInsideRect(e.right, e.bottom, t) || this.xyInsideRect(e.left, e.bottom, t) || this.xyInsideRect(t.left, t.top, e) || this.xyInsideRect(t.right, t.top, e) || this.xyInsideRect(t.right, t.bottom, e) || this.xyInsideRect(t.left, t.bottom, e);
    }
    xyInsideRect(e, t, r) {
      return e >= r.left && e <= r.right && t >= r.top && t <= r.bottom;
    }
    getBoundingRectFromPoints(e) {
      for (var t = e[0].x, r = e[0].x, n = e[0].y, i = e[0].y, o = 0; o < e.length; o++) {
        var s = e[o];
        t = Math.min(s.x, t), r = Math.max(s.x, r), n = Math.min(s.y, n), i = Math.max(s.y, i);
      }
      return {
        p1: {
          x: t,
          y: n
        },
        p2: {
          x: r,
          y: i
        }
      };
    }
    getRotationInfo(e) {
      return {
        rotation: e.rotation,
        cp: this.getCenterPoint(e)
      };
    }
    removePointsDuplicationAtStartEnd(e) {
      e[0].x == e[1].x && e[0].y == e[1].y && e.shift();
      var t = e.length - 1;
      return t > 0 && e[t - 1].x == e[t].x && e[t - 1].y == e[t].y && e.pop(), e;
    }
    pointsToLines(e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = [], n = 0; n < e.length - 1; n++) {
        var i = e[n],
          o = e[n + 1];
        r.push({
          p1: i,
          p2: o
        });
      }
      if (e.length > 2 && t) {
        var s = a().last(e),
          l = a().first(e);
        this.pointEquals(l, s) || r.push({
          p1: s,
          p2: l
        });
      }
      return r;
    }
    snapLinePoint45(e, t) {
      var r = this.angleFrom2Points360(e.x, e.y, t.x, t.y),
        n = this.nearToNumer(r, 45),
        i = Math.max(Math.abs(t.x - e.x), Math.abs(t.y - e.y)),
        o;
      switch (n) {
        case 0:
        case 360:
          return {
            x: e.x + i,
            y: e.y
          };
        case 45:
          return {
            x: e.x + i,
            y: e.y + i
          };
        case 90:
          return {
            x: e.x,
            y: e.y + i
          };
        case 135:
          return {
            x: e.x - i,
            y: e.y + i
          };
        case 180:
          return {
            x: e.x - i,
            y: e.y
          };
        case 225:
          return {
            x: e.x - i,
            y: e.y - i
          };
        case 270:
          return {
            x: e.x,
            y: e.y - i
          };
        case 315:
          return {
            x: e.x + i,
            y: e.y - i
          };
      }
      return this.pointRotate({
        x: e.x + this.distance2Points(e, t),
        y: e.y
      }, e, n);
    }
    snapToGridSize(e, t, r) {
      return 0 == t ? e : (r = r || 10, {
        x: this.nearToNumer(e.x, t, r),
        y: this.nearToNumer(e.y, t, r)
      });
    }
    nearToNumer(e, t, r) {
      var n = Math.round(e / t) * t;
      return void 0 !== r && Math.abs(n - e) > r ? e : n;
    }
    removePointFromPoints(e, t) {
      return c.A.remove(e, t);
    }
    closePointFromPath(e, t) {
      if (this.isLineData(e)) var r = new (o())(e.p1, e.p2, e.p1, e.p2);else if (this.isCubicBezierData(e)) var r = new (o())(e.p1, e.cp, e.cp2, e.p2);else var r = new (o())(e.p1, e.cp, e.p2);
      return r.project(t);
    }
    insertBreakForPaths(e, t, r, n) {
      var i = a().sumBy(e, e => e.length || this.pathLength(e)),
        o = i * r,
        s = this.round2(Math.max(0, o - t / 2)),
        l = this.round2(Math.min(i, o + t / 2)),
        c = [],
        d = 0;
      n = n || "distance";
      for (var h = 0; h < e.length; h++) {
        var p = e[h],
          u = p.length || this.pathLength(p);
        if (d + u <= s) c.push(p);else if (d < s && s < d + u) {
          if (this.isLineData(p) || "distance" != n) var g = (s - d) / u;else var g = this.bezierRatioFromDistance(p, s - d);
          var m = this.splitPath(p, g)[0];
          m && c.push(m);
        }
        if (d >= l) c.push(p);else if (d < l && l < d + u) {
          if (this.isLineData(p) || "distance" != n) var g = (l - d) / u;else var g = this.bezierRatioFromDistance(p, l - d);
          c.push(this.splitPath(p, g)[1]);
        }
        d += u;
      }
      return c;
    }
    jointParallelLines(e, t) {
      if (e.length <= 1) return {
        lines1: e,
        lines2: t
      };
      for (var r = 0, n = 0, i = [e[0]], o = [t[0]], s = 0; s < e.length - 1; s++) {
        var a = i[r],
          l = o[n],
          c = e[s + 1],
          d = t[s + 1],
          h = this.jointNextLine(a, c),
          p = this.jointNextLine(l, d);
        h.parallel || p.parallel ? (i.push(c), o.push(d)) : (i[r] = h.line, h.middleLine && (r++, i.push(h.middleLine)), i.push(h.nextLine), o[n] = p.line, p.middleLine && (n++, o.push(p.middleLine)), o.push(p.nextLine)), r++, n++;
      }
      return {
        lines1: i,
        lines2: o
      };
    }
    jointNextLine(e, t) {
      var r = this.intersectLineToLine(e, t),
        n,
        i;
      if (r.length > 0) return {
        parallel: !1,
        line: {
          p1: e.p1,
          p2: r[0],
          original: e.original || e,
          startPointScale: e.startPointScale
        },
        nextLine: {
          p1: r[0],
          p2: t.p2,
          original: t.original || t,
          startPointScale: "reduce"
        },
        middleLine: null
      };
      var o = this.intersectRayRay(e.p1, e.p2, t.p1, t.p2);
      if (!o) return {
        parallel: !0,
        line: e,
        nextLine: t,
        middleLine: null
      };
      r = [o];
      var s = this.angleDifferentFrom3Points180(e.p1, t.p2, r[0]),
        a,
        l,
        c;
      return 180 == Number.parseInt(s, 10) ? {
        parallel: !0,
        line: e,
        nextLine: t,
        middleLine: null
      } : s < 90 ? {
        parallel: !1,
        line: e,
        nextLine: t,
        middleLine: {
          p1: e.p2,
          p2: t.p1
        }
      } : {
        parallel: !1,
        line: {
          p1: e.p1,
          p2: r[0],
          original: e.original || e,
          startPointScale: e.startPointScale
        },
        nextLine: {
          p1: r[0],
          p2: t.p2,
          original: t.original || t,
          startPointScale: "extend"
        },
        middleLine: null
      };
    }
    isQuadraticBezierPath(e) {
      return null != e.cp && null == e.cp2;
    }
    pointInsidePolygonLines(e, t) {
      for (var r = e.x, n = e.y, i = !1, o = 0, s = t.length - 1; o < t.length; s = o++) {
        var a = t[o].p1.x,
          l = t[o].p1.y,
          c = t[s].p1.x,
          d = t[s].p1.y,
          h;
        l > n != d > n && r < (c - a) * (n - l) / (d - l) + a && (i = !i);
      }
      return i;
    }
    pointInsidePolygon(e, t) {
      for (var r = e.x, n = e.y, i = !1, o = 0, s = t.length - 1; o < t.length; s = o++) {
        var a = t[o].x,
          l = t[o].y,
          c = t[s].x,
          d = t[s].y,
          h;
        l > n != d > n && r < (c - a) * (n - l) / (d - l) + a && (i = !i);
      }
      return i;
    }
    quadraticToCubic(e) {
      var t = e.p1,
        r = e.cp,
        n = e.p2;
      return {
        p1: t,
        cp: {
          x: this.round2(t.x + 2 / 3 * (r.x - t.x)),
          y: this.round2(t.y + 2 / 3 * (r.y - t.y))
        },
        cp2: {
          x: this.round2(n.x + 2 / 3 * (r.x - n.x)),
          y: this.round2(n.y + 2 / 3 * (r.y - n.y))
        },
        p2: n
      };
    }
    getCenterPoint(e, t) {
      if (e.p1) var r = e.p1,
        n = e.p2;else var r = e,
        n = t;
      return {
        x: (r.x + n.x) / 2,
        y: (r.y + n.y) / 2
      };
    }
    splitBezierByLine(e, t) {
      var r = new (o())(e.p1, e.cp, e.cp2, e.p2),
        n = r.intersects(t);
      if (0 == n.length) return [];
      if (1 == n.length) {
        var i = r.split(n[0]);
        return [this.pointsToCubicBezier(i.left.points), this.pointsToCubicBezier(i.right.points)];
      }
      return [e];
    }
    splitBezier(e, t) {
      var r,
        n = new (o())(e.p1, e.cp, e.cp2, e.p2).split(t);
      return [this.pointsToCubicBezier(n.left.points), this.pointsToCubicBezier(n.right.points)];
    }
    splitBezierByLineGetFirstPart(e, t) {
      var r = new (o())(e.p1, e.cp, e.cp2, e.p2),
        n = r.intersects(t);
      if (n.length > 0) {
        var i = r.split(n[0]);
        return this.pointsToCubicBezier(i.left.points);
      }
      return null;
    }
    splitBezierByVerticalLines(e, t, r) {
      var n = new (o())(e.p1, e.cp, e.cp2, e.p2),
        i = n.intersects(t),
        s = n.intersects(r);
      if (i.length <= 0 && s.length <= 0) return e;
      if (i.length > 0 && s.length > 0 && (n = n.split(i[0], s[0])), i.length <= 0) {
        var a = n.split(s[0]);
        n = a.left;
      }
      if (s.length <= 0) {
        var a = n.split(i[0]);
        n = a.right;
      }
      return this.pointsToCubicBezier(n.points);
    }
    pointsToCubicBezier(e) {
      return {
        p1: e[0],
        cp: e[1],
        cp2: e[2],
        p2: e[3]
      };
    }
    rotatePointsByShapeRect(e, t) {
      var r = e.data,
        n = r.p1,
        i = r.p2,
        o = r.rotation;
      if (!o) return t;
      var s = this.getCenterPoint(n, i);
      return t.map(e => this.pointRotate(e, s, o));
    }
    rotateGenericLinesByShapeRect(e, t) {
      var r = e.data,
        n = r.p1,
        i = r.p2,
        o = r.rotation;
      if (!o) return t;
      var s = this.getCenterPoint(n, i);
      return t.map(e => this.isCubicBezierData(e) ? this.rotatePropertyInData(e, ["p1", "cp", "cp2", "p2"], o, s) : this.isQuadraticBezierData(e) ? this.rotatePropertyInData(e, ["p1", "cp", "p2"], o, s) : this.rotatePropertyInData(e, ["p1", "p2"], o, s));
    }
    rotatePropertyInData(e, t, r, n) {
      var i = {};
      return t.forEach(t => {
        var o = this.pointRotate(e[t], n, r);
        i[t] = o;
      }), c.A.update(e, i);
    }
    pointsRotate(e, t, r) {
      return e.map(e => this.pointRotate(e, t, r));
    }
    segmentPointRotate(e, t, r) {
      if (!r) return e;
      var n = this.pointRotate({
        x: e[0],
        y: e[1]
      }, t, r);
      return [n.x, n.y];
    }
    pointRotate(e, t, r) {
      if (!r) return e;
      var n = this.toRadians(r),
        i = Math.cos(n),
        o = Math.sin(n);
      return {
        x: t.x + (e.x - t.x) * i - (e.y - t.y) * o,
        y: t.y + (e.x - t.x) * o + (e.y - t.y) * i
      };
    }
    bezierRotate(e, t, r) {
      return {
        p1: this.pointRotate(e.p1, t, r),
        cp: this.pointRotate(e.cp, t, r),
        cp2: this.pointRotate(e.cp2, t, r),
        p2: this.pointRotate(e.p2, t, r)
      };
    }
    quadraticBezierRotate(e, t, r) {
      return {
        p1: this.pointRotate(e.p1, t, r),
        cp: this.pointRotate(e.cp, t, r),
        p2: this.pointRotate(e.p2, t, r)
      };
    }
    lineRotate(e, t, r) {
      return {
        p1: this.pointRotate(e.p1, t, r),
        p2: this.pointRotate(e.p2, t, r)
      };
    }
    transformCubicBezier(e, t, r, n, i) {
      var o = e.p1,
        s = e.cp,
        a = e.cp2,
        l = e.p2;
      return t = t || 1, r = r || 1, n = n || 0, i = i || 0, {
        p1: {
          x: o.x * t + n,
          y: o.y * r + i
        },
        cp: {
          x: s.x * t + n,
          y: s.y * r + i
        },
        cp2: {
          x: a.x * t + n,
          y: a.y * r + i
        },
        p2: {
          x: l.x * t + n,
          y: l.y * r + i
        }
      };
    }
    keepPointInRect(e, t) {
      return {
        x: Math.max(t.p1.x, Math.min(e.x, t.p2.x)),
        y: Math.max(t.p1.y, Math.min(e.y, t.p2.y))
      };
    }
    keepBetween(e, t, r) {
      return Math.max(t, Math.min(e, r));
    }
    keepPointInX(e, t, r) {
      return {
        x: Math.max(t, Math.min(e.x, r)),
        y: e.y
      };
    }
    keepPointInY(e, t, r) {
      return {
        x: e.x,
        y: Math.max(t, Math.min(e.y, r))
      };
    }
    pointInsideRect(e, t) {
      return t = this.normalizePointTupple(t), e.x >= t.p1.x && e.x <= t.p2.x && e.y >= t.p1.y && e.y <= t.p2.y;
    }
    normalizePointTupple(e) {
      var t, r;
      return {
        p1: {
          x: Math.min(e.p1.x, e.p2.x),
          y: Math.min(e.p1.y, e.p2.y)
        },
        p2: {
          x: Math.max(e.p1.x, e.p2.x),
          y: Math.max(e.p1.y, e.p2.y)
        }
      };
    }
    getClientRect(e) {
      var t = this.normalizePointTupple(e),
        r = t.p1,
        n = t.p2,
        i = Math.abs(n.x - r.x),
        o = Math.abs(n.y - r.y);
      return {
        left: r.x,
        top: r.y,
        width: i,
        height: o,
        bottom: r.y + o,
        right: r.x + i
      };
    }
    getPointsRect(e) {
      var e, t;
      return [(e = this.normalizePointTupple(e)).p1, {
        x: e.p2.x,
        y: e.p1.y
      }, e.p2, {
        x: e.p1.x,
        y: e.p2.y
      }, e.p1];
    }
    getPointsFromPointTupple(e) {
      var t;
      return [e.p1, {
        x: e.p2.x,
        y: e.p1.y
      }, e.p2, {
        x: e.p1.x,
        y: e.p2.y
      }];
    }
    getLeftTopArc(e, t, r) {
      var n = e.x,
        i = e.y,
        o = .5522848,
        s,
        a;
      return {
        p1: {
          x: n - t,
          y: i
        },
        p2: {
          x: n,
          y: i - r
        },
        cp: {
          x: n - t,
          y: i - r * o
        },
        cp2: {
          x: n - t * o,
          y: i - r
        }
      };
    }
    reverseBezierDirection(e) {
      return {
        p1: e.p2,
        p2: e.p1,
        cp: e.cp2,
        cp2: e.cp
      };
    }
    reverseBeziersDirection(e) {
      return e.map(e => this.reverseBezierDirection(e));
    }
    getLeftTopArcReverse(e, t, r) {
      return this.reverseBezierDirection(this.getLeftTopArc(e, t, r));
    }
    getRightTopArc(e, t, r) {
      var n = e.x,
        i = e.y,
        o = .5522848,
        s,
        a,
        l = n + t;
      return {
        p1: {
          x: n,
          y: i - r
        },
        p2: {
          x: l,
          y: i
        },
        cp: {
          x: n + t * o,
          y: i - r
        },
        cp2: {
          x: l,
          y: i - r * o
        }
      };
    }
    getRightTopArcReverse(e, t, r) {
      return this.reverseBezierDirection(this.getRightTopArc(e, t, r));
    }
    getRightBottomArc(e, t, r) {
      var n = e.x,
        i = e.y,
        o = .5522848,
        s,
        a,
        l = n + t,
        c = i + r;
      return {
        p1: {
          x: l,
          y: i
        },
        p2: {
          x: n,
          y: c
        },
        cp: {
          x: l,
          y: i + r * o
        },
        cp2: {
          x: n + t * o,
          y: c
        }
      };
    }
    getLeftBottomArc(e, t, r) {
      var n = e.x,
        i = e.y,
        o = .5522848,
        s,
        a,
        l = i + r;
      return {
        p1: {
          x: n,
          y: l
        },
        p2: {
          x: n - t,
          y: i
        },
        cp: {
          x: n - t * o,
          y: l
        },
        cp2: {
          x: n - t,
          y: i + r * o
        }
      };
    }
    ellipseToCubicBeziers(e, t) {
      var r = Math.abs(t.x - e.x),
        n = Math.abs(t.y - e.y),
        i = r / 2,
        o = n / 2,
        s = e.x + r / 2,
        a = e.y + n / 2,
        l = .5522848,
        c = i * l,
        d = o * l,
        h = s + i,
        p = a + o;
      return [{
        p1: {
          x: s - i,
          y: a
        },
        p2: {
          x: s,
          y: a - o
        },
        cp: {
          x: s - i,
          y: a - d
        },
        cp2: {
          x: s - c,
          y: a - o
        }
      }, {
        p1: {
          x: s,
          y: a - o
        },
        p2: {
          x: h,
          y: a
        },
        cp: {
          x: s + c,
          y: a - o
        },
        cp2: {
          x: h,
          y: a - d
        }
      }, {
        p1: {
          x: h,
          y: a
        },
        p2: {
          x: s,
          y: p
        },
        cp: {
          x: h,
          y: a + d
        },
        cp2: {
          x: s + c,
          y: p
        }
      }, {
        p1: {
          x: s,
          y: p
        },
        p2: {
          x: s - i,
          y: a
        },
        cp: {
          x: s - c,
          y: p
        },
        cp2: {
          x: s - i,
          y: a + d
        }
      }];
    }
    smoothBeziers(e, t) {
      for (var r = [], n = 0; n < e.length; n++) if (0 != n || t) {
        var i = e[n],
          o = this.toAbsoluteControlPointCubic(i),
          s = e[this.previousIndexLoop(n, e.length)],
          a = this.toAbsoluteControlPointCubic(s);
        o.cp = this.reflectPoint(a.cp2, i.p1), r.push(this.toRelativeControlPointCubic(o));
      } else r.push(e[n]);
      return r;
    }
    previousIndexLoop(e, t) {
      return e <= 0 ? t - 1 : e - 1;
    }
    nextIndexLoop(e, t) {
      return e >= t - 1 ? 0 : e + 1;
    }
    smoothBeziersFromCurrentPoint(e, t) {
      for (var r = [], n = 0; n < e.length; n++) if (n != e.length - 1 || t) {
        var i = e[n],
          o = this.toAbsoluteControlPointCubic(i),
          s = e[this.nextIndexLoop(n, e.length)],
          a = this.toAbsoluteControlPointCubic(s);
        o.cp2 = this.reflectPoint(a.cp, s.p1), r.push(this.toRelativeControlPointCubic(o));
      } else r.push(e[e.length - 1]);
      return r;
    }
    reflectSegmentPoint(e, t) {
      var r = this.reflectPoint({
        x: e[0],
        y: e[1]
      }, t);
      return [r.x, r.y];
    }
    reflectPoint(e, t) {
      return this.pointRotate(e, t, 180);
    }
    distanceToLine(e, t, r) {
      var n = this.closestPointOnSegment(e, t, r),
        i = e.x - n.x,
        o = e.y - n.y;
      return Math.sqrt(i * i + o * o);
    }
    pointsCoincide(e, t) {
      return Math.abs(e.x - t.x) < 1e-6 && Math.abs(e.y - t.y) < 1e-6;
    }
    closestPointOnSegment(e, t, r) {
      if (this.pointsCoincide(t, r)) return t;
      var n = r.x - t.x,
        i = r.y - t.y,
        o = n * (e.x - t.x) + i * (e.y - t.y),
        s = -n * (e.x - r.x) - i * (e.y - r.y);
      if (o > -1e-6 && s > -1e-6) {
        var a = Math.sqrt(n * n + i * i),
          l = n / a,
          c = i / a,
          d = l * (e.x - t.x) + c * (e.y - t.y);
        return {
          x: t.x + l * d,
          y: t.y + c * d
        };
      }
      return o < 0 ? t : r;
    }
    distanceToGenericLine(e, t) {
      var r;
      return this.isCubicBezierData(e) ? this.distanceFromBezier(t, e).distance : this.distanceToLine(t, e.p1, e.p2);
    }
    splitByNearestPointOnLine(e, t, r) {
      var n = this.closestPointOnSegment(e, t, r);
      return this.pointsCoincide(t, r) || this.pointsCoincide(n, t) || this.pointsCoincide(n, r) ? [{
        p1: {
          x: t.x,
          y: t.y
        },
        p2: {
          x: r.x,
          y: r.y
        }
      }] : [{
        p1: {
          x: t.x,
          y: t.y
        },
        p2: n
      }, {
        p1: n,
        p2: {
          x: r.x,
          y: r.y
        }
      }];
    }
    moveCubicBeizerPoint(e, t, r, n) {
      if (0 == t && !n) return c.A.setIndex(e, t, {
        p1: r,
        p2: e[0].p2,
        cp: e[0].cp,
        cp2: e[0].cp2
      });
      if (t >= e.length && !n) return t = e.length - 1, c.A.setIndex(e, t, {
        p1: e[t].p1,
        p2: r,
        cp: e[t].cp,
        cp2: e[t].cp2
      });
      var i = {
          p1: r,
          p2: e[t].p2,
          cp: e[t].cp,
          cp2: e[t].cp2
        },
        o = this.previousIndexLoop(t, e.length),
        s = {
          p1: e[o].p1,
          p2: r,
          cp: e[o].cp,
          cp2: e[o].cp2
        },
        a = c.A.setIndex(e, t, i);
      return c.A.setIndex(a, o, s);
    }
    addPoint(e, t) {
      return {
        x: e.x + t.x,
        y: e.y + t.y
      };
    }
    substractPoint(e, t) {
      return {
        x: e.x - t.x,
        y: e.y - t.y
      };
    }
    distance2Points(e, t) {
      var r = e.x - t.x,
        n = e.y - t.y;
      return Math.sqrt(r * r + n * n);
    }
    quadraticBezierLength(e) {
      return new (o())(e.p1, e.cp, e.p2).length();
    }
    cubicBezierLength(e) {
      return new (o())(e.p1, e.cp, e.cp2, e.p2).length();
    }
    getMiddlePointLine(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
        n = arguments.length > 3 ? arguments[3] : void 0,
        i = {
          dx: 0,
          dy: 0
        };
      return n && (i = this.calcTranslationExact(n, e, t), e = this.addToPoint(e, i), t = this.addToPoint(t, i)), {
        x: e.x + (t.x - e.x) * r,
        y: e.y + (t.y - e.y) * r
      };
    }
    pointEquals(e, t) {
      var r;
      return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? (e = this.roundPoint(e), t = this.roundPoint(t), e.x == t.x && e.y == t.y) : e.x == t.x && e.y == t.y;
    }
    splitPath(e, t) {
      if (this.isLineData(e)) {
        var r = this.distance2Points(e.p1, e.p2) * t,
          n = this.pointAtDistance(e.p1, e.p2, r);
        return [{
          p1: e.p1,
          p2: n
        }, {
          p1: n,
          p2: e.p2
        }];
      }
      if (this.isQuadraticBezierData(e) && (e = this.quadraticToCubic(e)), this.isCubicBezierData(e)) return this.splitBezier(e, t);
    }
    pathLength(e) {
      return this.isLineData(e) ? this.distance2Points(e.p1, e.p2) : this.isCubicBezierData(e) ? this.cubicBezierLength(e) : this.isQuadraticBezierData(e) ? this.quadraticBezierLength(e) : void 0;
    }
    isLineData(e) {
      return e.p1 && e.p2 && !e.cp;
    }
    isEllipseData(e) {
      return e.rx && e.ry;
    }
    isCubicBezierData(e) {
      return e.cp && e.cp2;
    }
    isQuadraticBezierData(e) {
      return e.cp && !e.cp2;
    }
    pointAtDistance(e, t, r, n) {
      if (n = n || 0) {
        var i = this.calcTranslationExact(n, e, t);
        e = this.addToPoint(e, i), t = this.addToPoint(t, i);
      }
      var o,
        s = r / this.distance2Points(e, t);
      return {
        x: (1 - s) * e.x + s * t.x,
        y: (1 - s) * e.y + s * t.y
      };
    }
    pointAtDistanceFromSecondPoint(e, t, r, n) {
      var i = this.distance2Points(e, t);
      return this.pointAtDistance(e, t, i - r, n);
    }
    pointAtDistanceQuadratic(e, t, r) {
      return this.pointAtDistanceCubic(this.quadraticToCubic(e), t, r);
    }
    pointAtDistanceCubic(e, t, r) {
      var n, n;
      if (r = r || 0, t <= 0) return (n = new (o())(e.p1, e.cp, e.cp2, e.p2)).offset(t / n.length(), -r);
      if (t >= (n = new (o())(e.p1, e.cp, e.cp2, e.p2)).length()) return n.offset(t / n.length(), -r);
      var i = l.jsBezier.locationAlongCurveFrom([e.p2, e.cp2, e.cp, e.p1], 0, t);
      return n.offset(i, -r);
    }
    distanceFromBezier(e, t) {
      return l.jsBezier.distanceFromCurve(e, [t.p1, t.cp, t.cp2, t.p2]);
    }
    nearestPointOnBezier(e, t) {
      return l.jsBezier.nearestPointOnCurve(e, [t.p1, t.cp, t.cp2, t.p2]);
    }
    ratioFromDistance(e, t, r) {
      return this.isLineData(e) ? t / (r = r || this.distance2Points(e.p1, e.p2)) : this.bezierRatioFromDistance(e, t);
    }
    bezierRatioFromDistance(e, t) {
      return this.isCubicBezierData(e) ? l.jsBezier.locationAlongCurveFrom([e.p2, e.cp2, e.cp, e.p1], 0, t) : l.jsBezier.locationAlongCurveFrom([e.p2, e.cp, e.p1], 0, t);
    }
    pointAtDistanceFromSecondPointCubic(e, t, r) {
      var n = this.cubicBezierLength(e);
      return this.pointAtDistanceCubic(e, n - t, r);
    }
    angleFrom2Points(e, t, r, n) {
      var i = n - t,
        o = r - e,
        s = Math.atan2(i, o);
      return s *= 180 / Math.PI;
    }
    angleFrom2Points360P(e, t) {
      return this.angleFrom2Points360(e.x, e.y, t.x, t.y);
    }
    angleFrom2Points360(e, t, r, n) {
      var i = this.angleFrom2Points(e, t, r, n);
      return i < 0 && (i = 360 + i), this.round2(i);
    }
    angleEndPointOfQuadraticLine360(e, t, r) {
      var n,
        i = new (o())(e, t, r).derivative(1),
        s = 180 * Math.atan2(i.y, i.x) / Math.PI;
      return s < 0 && (s = 360 + s), this.round2(s);
    }
    angleStartPointOfQuadraticLine360(e, t, r) {
      var n,
        i = new (o())(e, t, r).derivative(0),
        s = 180 * Math.atan2(i.y, i.x) / Math.PI;
      return s < 0 && (s = 360 + s), this.round2(s);
    }
    angleEndPointOfCubicLine360(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r,
        n = new (o())(e.p1, e.cp, e.cp2, e.p2).derivative(1 - t),
        i = 180 * Math.atan2(n.y, n.x) / Math.PI;
      return i < 0 && (i = 360 + i), this.round2(i);
    }
    angleEndPointOfCubicLine360Distance(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        r = this.pointAtDistanceFromSecondPointCubic(e, t),
        n = this.angleFrom2Points360(r.x, r.y, e.p2.x, e.p2.y);
      return this.round2(n);
    }
    angleStartPointOfCubicLine360(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r,
        n = new (o())(e.p1, e.cp, e.cp2, e.p2).derivative(0 + t),
        i = 180 * Math.atan2(n.y, n.x) / Math.PI;
      return i < 0 && (i = 360 + i), this.round2(i);
    }
    angleStartPointOfCubicLine360Distance(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        r = this.pointAtDistanceCubic(e, t),
        n = this.angleFrom2Points360(e.p1.x, e.p1.y, r.x, r.y);
      return this.round2(n);
    }
    round2(e) {
      return Math.round(100 * e) / 100;
    }
    round1(e) {
      return Math.round(10 * e) / 10;
    }
    floor2(e) {
      return Math.floor(100 * e) / 100;
    }
    round4(e) {
      return Math.round(1e4 * e) / 1e4;
    }
    round6(e) {
      return Math.round(1e6 * e) / 1e6;
    }
    toRadians(e) {
      return e * (Math.PI / 180);
    }
    toDegree(e) {
      return e * (180 / Math.PI);
    }
    angleFrom3Points360(e, t, r) {
      var n = this.angleFrom2Points360(r.x, r.y, e.x, e.y);
      n = 0 == n ? 360 : n;
      var i = this.angleFrom2Points360(r.x, r.y, t.x, t.y),
        o = (i = 0 == i ? 360 : i) - n;
      return o < 0 && (o = 360 + o), o;
    }
    angleDifferentFrom3Points180(e, t, r) {
      var n = this.angleFrom3Points360(e, t, r);
      return n > 180 && (n = 360 - n), n;
    }
    parallelLine(e, t, r) {
      var n = this.calcTranslationExact(r, e, t);
      return {
        p1: this.addToPoint(e, n),
        p2: this.addToPoint(t, n)
      };
    }
    toRelativeControlPointCubic(e) {
      return c.A.update(e, {
        cp: {
          dx: e.cp.x - e.p1.x,
          dy: e.cp.y - e.p1.y
        },
        cp2: {
          dx: e.cp2.x - e.p2.x,
          dy: e.cp2.y - e.p2.y
        }
      });
    }
    toAbsoluteControlPointCubic(e) {
      return c.A.update(e, {
        cp: {
          x: e.cp.dx + e.p1.x,
          y: e.cp.dy + e.p1.y
        },
        cp2: {
          x: e.cp2.dx + e.p2.x,
          y: e.cp2.dy + e.p2.y
        }
      });
    }
    toAbsoluteControlPointCubics(e) {
      return a().map(e, e => this.toAbsoluteControlPointCubic(e));
    }
    setAbsoluteCpForBezier(e, t, r) {
      return t && (e = c.A.setProp(e, "cp", {
        dx: t.x - e.p1.x,
        dy: t.y - e.p1.y
      })), r && (e = c.A.setProp(e, "cp2", {
        dx: r.x - e.p2.x,
        dy: r.y - e.p2.y
      })), e;
    }
    toRelativeControlPoint(e, t, r) {
      var n = this.angleFrom3Points360(e, r, t),
        i = this.distance2Points(t, e),
        o = this.distance2Points(t, r),
        s,
        a;
      return {
        dh: Math.sin(this.toRadians(n)) * i,
        df: Math.cos(this.toRadians(n)) * i / o
      };
    }
    toAbsoluteConnectionControlPoint(e, t, r) {
      var n = e.df * this.distance2Points(t, r),
        i = Math.sqrt(e.dh * e.dh + n * n),
        o = this.angleFrom2Points360(t.x, t.y, r.x, r.y),
        s = Math.atan2(e.dh, n),
        a = this.toRadians(o) - s,
        l = +(t.x + Math.cos(a) * i).toFixed(5),
        c = +(t.y + Math.sin(a) * i).toFixed(5);
      return {
        x: this.round2(l),
        y: this.round2(c)
      };
    }
    parallelCubicBezier(e, t) {
      try {
        var r = new (o())(e.p1, e.cp, e.cp2, e.p2).offset(-t);
        return a().map(r, e => ({
          p1: e.points[0],
          cp: e.points[1],
          cp2: e.points[2],
          p2: e.points[3]
        }));
      } catch (t) {
        return [e];
      }
    }
    roundPoint(e) {
      return {
        x: this.round2(e.x),
        y: this.round2(e.y)
      };
    }
    roundLine(e) {
      return {
        p1: this.roundPoint(e.p1),
        p2: this.roundPoint(e.p2)
      };
    }
    roundQuadraticBezier(e) {
      return {
        p1: this.roundPoint(e.p1),
        cp: this.roundPoint(e.cp),
        p2: this.roundPoint(e.p2)
      };
    }
    roundCubicBezier(e) {
      return {
        p1: this.roundPoint(e.p1),
        cp: this.roundPoint(e.cp),
        cp2: this.roundPoint(e.cp2),
        p2: this.roundPoint(e.p2)
      };
    }
    roundPath(e) {
      var t = {
        p1: this.roundPoint(e.p1),
        p2: this.roundPoint(e.p2)
      };
      return e.cp && (t.cp = this.roundPoint(e.cp)), e.cp2 && (t.cp2 = this.roundPoint(e.cp2)), t;
    }
    addToPoint(e, t) {
      return {
        x: e.x + t.dx,
        y: e.y + t.dy
      };
    }
    calcTranslationExact(e, t, r) {
      var n = r.x - t.x,
        i = r.y - t.y,
        o,
        s;
      if (0 === i) t.x < r.x ? (o = 0, s = -e) : (o = 0, s = e);else if (t.x == r.x && t.y < r.y) o = e, s = 0;else if (t.y < r.y && t.x < r.x) {
        var a = Math.atan(n / i);
        o = e * Math.cos(a), s = -e * Math.sin(a);
      } else if (t.y < r.y && t.x > r.x) {
        var l = Math.atan(n / i);
        o = e * Math.cos(l), s = -e * Math.sin(l);
      } else {
        var c = Math.atan(n / i);
        o = -e * Math.cos(c), s = e * Math.sin(c);
      }
      return {
        dx: o,
        dy: s
      };
    }
    intersectRayRay(e, t, r, n) {
      var i = d.intersectRayRay(e, t, r, n);
      return i ? i.points[0] : null;
    }
    intersectLineToLine(e, t) {
      var r = d.intersectLineLine(this.pointToPoint2D(e.p1), this.pointToPoint2D(e.p2), this.pointToPoint2D(t.p1), this.pointToPoint2D(t.p2));
      return r ? r.points : [];
    }
    intersectLineToEllipse(e, t) {
      var r = d.intersectEllipseLine(this.pointToPoint2D(t.cp), t.rx, t.ry, this.pointToPoint2D(e.p1), this.pointToPoint2D(e.p2));
      return r ? r.points : [];
    }
    intersectBezierToEllipse(e, t) {
      var r = d.intersectBezier3Ellipse(this.pointToPoint2D(e.p1), this.pointToPoint2D(e.cp), this.pointToPoint2D(e.cp2), this.pointToPoint2D(e.p2), this.pointToPoint2D(t.cp), t.rx, t.ry);
      return r ? r.points : [];
    }
    intersectEllipseToEllipse(e, t) {
      var r = d.intersectEllipseEllipse(this.pointToPoint2D(e.cp), e.rx, e.ry, this.pointToPoint2D(t.cp), t.rx, t.ry);
      return r ? r.points : [];
    }
    intersectCubicBezierLineToLine(e, t) {
      var r = d.intersectBezier3Line(this.pointToPoint2D(e.p1), this.pointToPoint2D(e.cp), this.pointToPoint2D(e.cp2), this.pointToPoint2D(e.p2), this.pointToPoint2D(t.p1), this.pointToPoint2D(t.p2));
      return r ? r.points : [];
    }
    pointToPoint2D(e) {
      return new p(e.x, e.y);
    }
    intersectCubicBezierLineToCubicBezier(e, t) {
      var r = d.intersectBezier3Bezier3(this.pointToPoint2D(e.p1), this.pointToPoint2D(e.cp), this.pointToPoint2D(e.cp2), this.pointToPoint2D(e.p2), this.pointToPoint2D(t.p1), this.pointToPoint2D(t.cp), this.pointToPoint2D(t.cp2), this.pointToPoint2D(t.p2));
      return r ? r.points : [];
    }
    tryToFixInsideRectBounding(e, t) {
      if (e.left < t.left && (e = this.moveRectBounding(e, {
        x: t.left - e.left,
        y: 0
      })), e.right > t.right && (e = this.moveRectBounding(e, {
        x: t.right - e.right,
        y: 0
      })), e.left < t.left) {
        var r = (e.right + e.left) / 2,
          n = e.right - e.left;
        e = y({
          left: Math.round(r - n / 2),
          right: Math.round(r + n / 2)
        }, e);
      }
      if (e.top < t.top && (e = this.moveRectBounding(e, {
        x: 0,
        y: t.top - e.top
      })), e.bottom > t.bottom && (e = this.moveRectBounding(e, {
        x: 0,
        y: t.bottom - e.bottom
      })), e.top < t.top) {
        var i = (e.bottom + e.top) / 2,
          o = e.bottom - e.top;
        e = y({
          top: Math.round(i - o / 2),
          bottom: Math.round(i + o / 2)
        }, e);
      }
      return e;
    }
    moveRectBounding(e, t) {
      return {
        left: e.left + t.x,
        right: e.right + t.x,
        top: e.top + t.y,
        bottom: e.bottom + t.y
      };
    }
    expandMaxRectBounding(e, t) {
      return null == e ? t : null == t ? e : {
        left: Math.min(e.left, t.left),
        top: Math.min(e.top, t.top),
        right: Math.max(e.right, t.right),
        bottom: Math.max(e.bottom, t.bottom)
      };
    }
    extendRectBounding(e, t) {
      return {
        left: e.left - t,
        top: e.top - t,
        right: e.right + t,
        bottom: e.bottom + t
      };
    }
    reflectPointOverLine(e, t, r) {
      var n, i, o, s, a, l;
      return o = ((n = r.x - t.x) * n - (i = r.y - t.y) * i) / (n * n + i * i), s = 2 * n * i / (n * n + i * i), {
        x: a = Math.round(o * (e.x - t.x) + s * (e.y - t.y) + t.x),
        y: l = Math.round(s * (e.x - t.x) - o * (e.y - t.y) + t.y)
      };
    }
    getMiddlePointQuadraticLine(e, t, r, n, i) {
      var s;
      return new (o())(e, t, r).offset(n, -i);
    }
    clampPoint(e, t, r) {
      return {
        x: a().clamp(e.x, t.x, r.x),
        y: a().clamp(e.y, t.y, r.y)
      };
    }
    clampPoints(e, t, r) {
      return e.map(e => this.clampPoint(e, t, r));
    }
    toRectInfo(e) {
      return {
        left: e.p1.x,
        top: e.p1.y,
        width: e.p2.x - e.p1.x,
        height: e.p2.y - e.p1.y
      };
    }
    trimAngle360(e) {
      return e >= 360 ? e % 360 : e < 0 ? this.trimAngle360(360 + e) : e;
    }
    addRotation360(e) {
      var t,
        r = ((e = e || 0) + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)) % 360;
      return r < 0 ? 360 + r : r;
    }
    moveRectBy2Points(e, t, r) {
      var n = this.substractPoint(r, t);
      return y(y({}, e), {}, {
        p1: this.addPoint(e.p1, n),
        p2: this.addPoint(e.p2, n)
      });
    }
    absoluteToRelativePoint(e, t, r, n, i) {
      return i ? {
        x: this.round6((t.x - e.x) / r),
        y: this.round6((t.y - e.y) / n)
      } : {
        x: (t.x - e.x) / r,
        y: (t.y - e.y) / n
      };
    }
    relativeToAbsolutePoint(e, t, r, n) {
      return {
        x: e.x + r * t.x,
        y: e.y + n * t.y
      };
    }
    distanceFromVector(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
  }
  function b(e, t, r, n, i, o, s, a) {
    for (var l = [], c = [], d = [], h, p, u, g, m, f, y, v, b = 0; b < 2; ++b) if (0 == b ? (p = 6 * e - 12 * r + 6 * i, h = -3 * e + 9 * r - 9 * i + 3 * s, u = 3 * r - 3 * e) : (p = 6 * t - 12 * n + 6 * o, h = -3 * t + 9 * n - 9 * o + 3 * a, u = 3 * n - 3 * t), Math.abs(h) < 1e-12) {
      if (Math.abs(p) < 1e-12) continue;
      0 < (g = -u / p) && g < 1 && l.push(g);
    } else (y = p * p - 4 * u * h) < 0 ? Math.abs(y) < 1e-12 && 0 < (g = -p / (2 * h)) && g < 1 && l.push(g) : (0 < (m = (-p + (v = Math.sqrt(y))) / (2 * h)) && m < 1 && l.push(m), 0 < (f = (-p - v) / (2 * h)) && f < 1 && l.push(f));
    for (var x = l.length, C; x--;) C = 1 - (g = l[x]), c[x] = C * C * C * e + 3 * C * C * g * r + 3 * C * g * g * i + g * g * g * s, d[x] = C * C * C * t + 3 * C * C * g * n + 3 * C * g * g * o + g * g * g * a;
    return c.push(e, s), d.push(t, a), {
      min: {
        x: Math.min.apply(0, c),
        y: Math.min.apply(0, d)
      },
      max: {
        x: Math.max.apply(0, c),
        y: Math.max.apply(0, d)
      }
    };
  }
  const x = new v();
};
