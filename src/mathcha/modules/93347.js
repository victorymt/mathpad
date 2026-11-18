/* module 93347 — 1288 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => c
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l {
    extractBaseChanged(e, t) {
      for (var r = o().uniq(o().keys(e || {}).concat(o().keys(t.merged))), n = t.base, i = 0; i < r.length; i++) {
        var s,
          l = r[i];
        (null == e ? void 0 : e[l]) !== (null === (s = t.merged) || void 0 === s ? void 0 : s[l]) && (n = a(a({}, n), {}, {
          [l]: e[l]
        }));
      }
      return n;
    }
  }
  var c = new l();
};
