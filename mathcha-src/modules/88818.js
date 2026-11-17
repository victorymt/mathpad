/* module 88818 — 6005 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = w;
  var n,
    i = o(r(54843));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var s = 0,
    a = 1,
    l = 2;
  function c(e, t, r, n, i) {
    this.mid = e, this.left = t, this.right = r, this.leftPoints = n, this.rightPoints = i, this.count = (t ? t.count : 0) + (r ? r.count : 0) + n.length;
  }
  var d = c.prototype;
  function h(e, t) {
    e.mid = t.mid, e.left = t.left, e.right = t.right, e.leftPoints = t.leftPoints, e.rightPoints = t.rightPoints, e.count = t.count;
  }
  function p(e, t) {
    var r = C(t);
    e.mid = r.mid, e.left = r.left, e.right = r.right, e.leftPoints = r.leftPoints, e.rightPoints = r.rightPoints, e.count = r.count;
  }
  function u(e, t) {
    var r = e.intervals([]);
    r.push(t), p(e, r);
  }
  function g(e, t) {
    var r = e.intervals([]),
      n = r.indexOf(t);
    return n < 0 ? 0 : (r.splice(n, 1), p(e, r), 1);
  }
  function m(e, t, r) {
    for (var n = 0; n < e.length && e[n][0] <= t; ++n) {
      var i = r(e[n]);
      if (i) return i;
    }
  }
  function f(e, t, r) {
    for (var n = e.length - 1; n >= 0 && e[n][1] >= t; --n) {
      var i = r(e[n]);
      if (i) return i;
    }
  }
  function y(e, t) {
    for (var r = 0; r < e.length; ++r) {
      var n = t(e[r]);
      if (n) return n;
    }
  }
  function v(e, t) {
    return e - t;
  }
  function b(e, t) {
    var r = e[0] - t[0];
    return r || e[1] - t[1];
  }
  function x(e, t) {
    var r = e[1] - t[1];
    return r || e[0] - t[0];
  }
  function C(e) {
    if (0 === e.length) return null;
    for (var t = [], r = 0; r < e.length; ++r) t.push(e[r][0], e[r][1]);
    t.sort(v);
    for (var n = t[t.length >> 1], i = [], o = [], s = [], r = 0; r < e.length; ++r) {
      var a = e[r];
      a[1] < n ? i.push(a) : n < a[0] ? o.push(a) : s.push(a);
    }
    var l = s,
      d = s.slice();
    return l.sort(b), d.sort(x), new c(n, C(i), C(o), l, d);
  }
  function S(e) {
    this.root = e;
  }
  d.intervals = function (e) {
    return e.push.apply(e, this.leftPoints), this.left && this.left.intervals(e), this.right && this.right.intervals(e), e;
  }, d.insert = function (e) {
    var t = this.count - this.leftPoints.length;
    if (this.count += 1, e[1] < this.mid) this.left ? 4 * (this.left.count + 1) > 3 * (t + 1) ? u(this, e) : this.left.insert(e) : this.left = C([e]);else if (e[0] > this.mid) this.right ? 4 * (this.right.count + 1) > 3 * (t + 1) ? u(this, e) : this.right.insert(e) : this.right = C([e]);else {
      var r = i.default.ge(this.leftPoints, e, b),
        n = i.default.ge(this.rightPoints, e, x);
      this.leftPoints.splice(r, 0, e), this.rightPoints.splice(n, 0, e);
    }
  }, d.remove = function (e) {
    var t = this.count - this.leftPoints,
      r,
      n,
      o,
      n;
    if (e[1] < this.mid) return this.left ? 4 * (this.right ? this.right.count : 0) > 3 * (t - 1) ? g(this, e) : 2 === (n = this.left.remove(e)) ? (this.left = null, this.count -= 1, 1) : (1 === n && (this.count -= 1), n) : 0;
    if (e[0] > this.mid) return this.right ? 4 * (this.left ? this.left.count : 0) > 3 * (t - 1) ? g(this, e) : 2 === (n = this.right.remove(e)) ? (this.right = null, this.count -= 1, 1) : (1 === n && (this.count -= 1), n) : 0;
    if (1 === this.count) return this.leftPoints[0] === e ? 2 : 0;
    if (1 === this.leftPoints.length && this.leftPoints[0] === e) {
      if (this.left && this.right) {
        for (var s = this, a = this.left; a.right;) s = a, a = a.right;
        if (s === this) a.right = this.right;else {
          var l = this.left,
            n = this.right;
          s.count -= a.count, s.right = a.left, a.left = l, a.right = n;
        }
        h(this, a), this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else this.left ? h(this, this.left) : h(this, this.right);
      return 1;
    }
    for (var l = i.default.ge(this.leftPoints, e, b); l < this.leftPoints.length && this.leftPoints[l][0] === e[0]; ++l) if (this.leftPoints[l] === e) {
      this.count -= 1, this.leftPoints.splice(l, 1);
      for (var n = i.default.ge(this.rightPoints, e, x); n < this.rightPoints.length && this.rightPoints[n][1] === e[1]; ++n) if (this.rightPoints[n] === e) return this.rightPoints.splice(n, 1), 1;
    }
    return 0;
  }, d.queryPoint = function (e, t) {
    if (e < this.mid) {
      var r;
      if (this.left) if (r = this.left.queryPoint(e, t)) return r;
      return m(this.leftPoints, e, t);
    }
    if (e > this.mid) {
      var r;
      if (this.right) if (r = this.right.queryPoint(e, t)) return r;
      return f(this.rightPoints, e, t);
    }
    return y(this.leftPoints, t);
  }, d.queryInterval = function (e, t, r) {
    var n, n;
    if (e < this.mid && this.left && (n = this.left.queryInterval(e, t, r))) return n;
    if (t > this.mid && this.right && (n = this.right.queryInterval(e, t, r))) return n;
    return t < this.mid ? m(this.leftPoints, t, r) : e > this.mid ? f(this.rightPoints, e, r) : y(this.leftPoints, r);
  };
  var A = S.prototype;
  function w(e) {
    return e && 0 !== e.length ? new S(C(e)) : new S(null);
  }
  A.insert = function (e) {
    this.root ? this.root.insert(e) : this.root = new c(e[0], null, null, [e], [e]);
  }, A.remove = function (e) {
    if (this.root) {
      var t = this.root.remove(e);
      return 2 === t && (this.root = null), 0 !== t;
    }
    return !1;
  }, A.queryPoint = function (e, t) {
    if (this.root) return this.root.queryPoint(e, t);
  }, A.queryInterval = function (e, t, r) {
    if (e <= t && this.root) return this.root.queryInterval(e, t, r);
  }, Object.defineProperty(A, "count", {
    get: function e() {
      return this.root ? this.root.count : 0;
    }
  }), Object.defineProperty(A, "intervals", {
    get: function e() {
      return this.root ? this.root.intervals([]) : [];
    }
  });
};
