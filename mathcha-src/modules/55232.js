/* module 55232 — 1883 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(44085),
    i = r(70235),
    o = r(59395),
    s = r(68914),
    a = n.twoArgumentPooler,
    l = n.fourArgumentPooler,
    c = /\/+/g;
  function d(e) {
    return ("" + e).replace(c, "$&/");
  }
  function h(e, t) {
    this.func = e, this.context = t, this.count = 0;
  }
  function p(e, t, r) {
    var n = e.func,
      i = e.context;
    n.call(i, t, e.count++);
  }
  function u(e, t, r) {
    if (null == e) return e;
    var n = h.getPooled(t, r);
    s(e, p, n), h.release(n);
  }
  function g(e, t, r, n) {
    this.result = e, this.keyPrefix = t, this.func = r, this.context = n, this.count = 0;
  }
  function m(e, t, r) {
    var n = e.result,
      s = e.keyPrefix,
      a = e.func,
      l = e.context,
      c = a.call(l, t, e.count++);
    Array.isArray(c) ? f(c, n, r, o.thatReturnsArgument) : null != c && (i.isValidElement(c) && (c = i.cloneAndReplaceKey(c, s + (!c.key || t && t.key === c.key ? "" : d(c.key) + "/") + r)), n.push(c));
  }
  function f(e, t, r, n, i) {
    var o = "";
    null != r && (o = d(r) + "/");
    var a = g.getPooled(t, o, n, i);
    s(e, m, a), g.release(a);
  }
  function y(e, t, r) {
    if (null == e) return e;
    var n = [];
    return f(e, n, null, t, r), n;
  }
  function v(e, t, r) {
    return null;
  }
  function b(e, t) {
    return s(e, v, null);
  }
  function x(e) {
    var t = [];
    return f(e, t, null, o.thatReturnsArgument), t;
  }
  h.prototype.destructor = function () {
    this.func = null, this.context = null, this.count = 0;
  }, n.addPoolingTo(h, a), g.prototype.destructor = function () {
    this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
  }, n.addPoolingTo(g, l);
  var C = {
    forEach: u,
    map: y,
    mapIntoWithKeyPrefixInternal: f,
    count: b,
    toArray: x
  };
  e.exports = C;
};
