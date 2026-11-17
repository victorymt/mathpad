/* module 54843 — 3078 chars */
module.exports = function (e, t) {
  "use strict";

  function r(e, t, r, n) {
    for (var i = r + 1; t <= r;) {
      var o = t + r >>> 1,
        s;
      e[o] >= n ? (i = o, r = o - 1) : t = o + 1;
    }
    return i;
  }
  function n(e, t, r, n, i) {
    for (var o = r + 1; t <= r;) {
      var s = t + r >>> 1,
        a;
      i(e[s], n) >= 0 ? (o = s, r = s - 1) : t = s + 1;
    }
    return o;
  }
  function i(e, t, i, o, s) {
    return "function" == typeof i ? n(e, void 0 === o ? 0 : 0 | o, void 0 === s ? e.length - 1 : 0 | s, t, i) : r(e, void 0 === i ? 0 : 0 | i, void 0 === o ? e.length - 1 : 0 | o, t);
  }
  function o(e, t, r, n) {
    for (var i = r + 1; t <= r;) {
      var o = t + r >>> 1,
        s;
      e[o] > n ? (i = o, r = o - 1) : t = o + 1;
    }
    return i;
  }
  function s(e, t, r, n, i) {
    for (var o = r + 1; t <= r;) {
      var s = t + r >>> 1,
        a;
      i(e[s], n) > 0 ? (o = s, r = s - 1) : t = s + 1;
    }
    return o;
  }
  function a(e, t, r, n, i) {
    return "function" == typeof r ? s(e, void 0 === n ? 0 : 0 | n, void 0 === i ? e.length - 1 : 0 | i, t, r) : o(e, void 0 === r ? 0 : 0 | r, void 0 === n ? e.length - 1 : 0 | n, t);
  }
  function l(e, t, r, n) {
    for (var i = t - 1; t <= r;) {
      var o = t + r >>> 1,
        s;
      e[o] < n ? (i = o, t = o + 1) : r = o - 1;
    }
    return i;
  }
  function c(e, t, r, n, i) {
    for (var o = t - 1; t <= r;) {
      var s = t + r >>> 1,
        a;
      i(e[s], n) < 0 ? (o = s, t = s + 1) : r = s - 1;
    }
    return o;
  }
  function d(e, t, r, n, i) {
    return "function" == typeof r ? c(e, void 0 === n ? 0 : 0 | n, void 0 === i ? e.length - 1 : 0 | i, t, r) : l(e, void 0 === r ? 0 : 0 | r, void 0 === n ? e.length - 1 : 0 | n, t);
  }
  function h(e, t, r, n) {
    for (var i = t - 1; t <= r;) {
      var o = t + r >>> 1,
        s;
      e[o] <= n ? (i = o, t = o + 1) : r = o - 1;
    }
    return i;
  }
  function p(e, t, r, n, i) {
    for (var o = t - 1; t <= r;) {
      var s = t + r >>> 1,
        a;
      i(e[s], n) <= 0 ? (o = s, t = s + 1) : r = s - 1;
    }
    return o;
  }
  function u(e, t, r, n, i) {
    return "function" == typeof r ? p(e, void 0 === n ? 0 : 0 | n, void 0 === i ? e.length - 1 : 0 | i, t, r) : h(e, void 0 === r ? 0 : 0 | r, void 0 === n ? e.length - 1 : 0 | n, t);
  }
  function g(e, t, r, n) {
    for (; t <= r;) {
      var i = t + r >>> 1,
        o = e[i];
      if (o === n) return i;
      o <= n ? t = i + 1 : r = i - 1;
    }
    return -1;
  }
  function m(e, t, r, n, i) {
    for (; t <= r;) {
      var o = t + r >>> 1,
        s,
        a = i(e[o], n);
      if (0 === a) return o;
      a <= 0 ? t = o + 1 : r = o - 1;
    }
    return -1;
  }
  function f(e, t, r, n, i) {
    return "function" == typeof r ? m(e, void 0 === n ? 0 : 0 | n, void 0 === i ? e.length - 1 : 0 | i, t, r) : g(e, void 0 === r ? 0 : 0 | r, void 0 === n ? e.length - 1 : 0 | n, t);
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {
    ge: i,
    gt: a,
    lt: d,
    le: u,
    eq: f
  };
};
