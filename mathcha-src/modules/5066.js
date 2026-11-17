/* module 5066 — 1392 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    X: () => a
  });
  var n = r(64467);
  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? i(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class s {
    constructor() {
      (0, n.A)(this, "baseLineStyleMap", {});
    }
    getCacheBaseStyle(e, t, r) {
      var n = "".concat(e, "-").concat(t || 0, "-").concat(r || 0),
        i = this.baseLineStyleMap[n];
      return i || (i = t || r ? {
        lineHeight: e,
        marginTop: "".concat(t, "em"),
        marginBottom: "".concat(r, "em")
      } : {
        lineHeight: e
      }, this.baseLineStyleMap[n] = i, i);
    }
    mergeStyle(e, t) {
      return e ? t ? o(o({}, e), t) : e : t;
    }
  }
  var a = new s();
};
