/* module 76502 — 2140 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(90646),
    o = {}.hasOwnProperty;
  function s(e) {
    return Array.isArray(e) ? e.concat() : e && "object" == typeof e ? n(new e.constructor(), e) : e;
  }
  var a = "$push",
    l = "$unshift",
    c = "$splice",
    d = "$set",
    h = "$merge",
    p = "$apply",
    u = [a, l, c, d, h, p],
    g = {};
  function m(e, t, r) {
    i(Array.isArray(e), "update(): expected target of %s to be an array; got %s.", r, e);
    var n = t[r];
    i(Array.isArray(n), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", r, n);
  }
  function f(e, t) {
    if (i("object" == typeof t, "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?", u.join(", "), d), o.call(t, d)) return i(1 === Object.keys(t).length, "Cannot have more than one key in an object with %s", d), t[d];
    var r = s(e);
    if (o.call(t, h)) {
      var y = t[h];
      i(y && "object" == typeof y, "update(): %s expects a spec of type 'object'; got %s", h, y), i(r && "object" == typeof r, "update(): %s expects a target of type 'object'; got %s", h, r), n(r, t[h]);
    }
    for (var v in o.call(t, a) && (m(e, t, a), t[a].forEach(function (e) {
      r.push(e);
    })), o.call(t, l) && (m(e, t, l), t[l].forEach(function (e) {
      r.unshift(e);
    })), o.call(t, c) && (i(Array.isArray(e), "Expected %s target to be an array; got %s", c, e), i(Array.isArray(t[c]), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", c, t[c]), t[c].forEach(function (e) {
      i(Array.isArray(e), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", c, t[c]), r.splice.apply(r, e);
    })), o.call(t, p) && (i("function" == typeof t[p], "update(): expected spec of %s to be a function; got %s.", p, t[p]), r = t[p](r)), t) g.hasOwnProperty(v) && g[v] || (r[v] = f(e[v], t[v]));
    return r;
  }
  u.forEach(function (e) {
    g[e] = !0;
  }), e.exports = f;
};
