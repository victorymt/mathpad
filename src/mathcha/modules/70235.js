/* module 70235 — 2677 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(38479),
    o = r(14594),
    s = r(21980),
    a = Object.prototype.hasOwnProperty,
    l = r(88967),
    c = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    },
    d,
    h;
  function p(e) {
    var t;
    return void 0 !== e.ref;
  }
  function u(e) {
    var t;
    return void 0 !== e.key;
  }
  function g(e, t) {
    var r = function () {
      d || (d = !0);
    };
    r.isReactWarning = !0, Object.defineProperty(e, "key", {
      get: r,
      configurable: !0
    });
  }
  function m(e, t) {
    var r = function () {
      h || (h = !0);
    };
    r.isReactWarning = !0, Object.defineProperty(e, "ref", {
      get: r,
      configurable: !0
    });
  }
  var f = function (e, t, r, n, i, o, s) {
    var a;
    return {
      $$typeof: l,
      type: e,
      key: t,
      ref: r,
      props: s,
      _owner: o
    };
  };
  f.createElement = function (e, t, r) {
    var n,
      o = {},
      s = null,
      l = null,
      d = null,
      h = null;
    if (null != t) for (n in p(t) && (l = t.ref), u(t) && (s = "" + t.key), d = void 0 === t.__self ? null : t.__self, h = void 0 === t.__source ? null : t.__source, t) a.call(t, n) && !c.hasOwnProperty(n) && (o[n] = t[n]);
    var g = arguments.length - 2,
      m;
    if (1 === g) o.children = r;else if (g > 1) {
      for (var y = Array(g), v = 0; v < g; v++) y[v] = arguments[v + 2];
      0, o.children = y;
    }
    if (e && e.defaultProps) {
      var b = e.defaultProps;
      for (n in b) void 0 === o[n] && (o[n] = b[n]);
    }
    return f(e, s, l, d, h, i.current, o);
  }, f.createFactory = function (e) {
    var t = f.createElement.bind(null, e);
    return t.type = e, t;
  }, f.cloneAndReplaceKey = function (e, t) {
    var r;
    return f(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
  }, f.cloneElement = function (e, t, r) {
    var o,
      s = n({}, e.props),
      l = e.key,
      d = e.ref,
      h = e._self,
      g = e._source,
      m = e._owner,
      y;
    if (null != t) for (o in p(t) && (d = t.ref, m = i.current), u(t) && (l = "" + t.key), e.type && e.type.defaultProps && (y = e.type.defaultProps), t) a.call(t, o) && !c.hasOwnProperty(o) && (void 0 === t[o] && void 0 !== y ? s[o] = y[o] : s[o] = t[o]);
    var v = arguments.length - 2;
    if (1 === v) s.children = r;else if (v > 1) {
      for (var b = Array(v), x = 0; x < v; x++) b[x] = arguments[x + 2];
      s.children = b;
    }
    return f(e.type, l, d, h, g, m, s);
  }, f.isValidElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === l;
  }, e.exports = f;
};
