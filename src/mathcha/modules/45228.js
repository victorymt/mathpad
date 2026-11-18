/* module 45228 — 1269 chars */
module.exports = function (e) {
  "use strict";

  var t = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable;
  function i(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e);
  }
  function o() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc"),
        t;
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var r = {}, n = 0; n < 10; n++) r["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(r).map(function (e) {
        return r[e];
      }).join("")) return !1;
      var i = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (e) {
        i[e] = e;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
    } catch (e) {
      return !1;
    }
  }
  e.exports = o() ? Object.assign : function (e, o) {
    for (var s, a = i(e), l, c = 1; c < arguments.length; c++) {
      for (var d in s = Object(arguments[c])) r.call(s, d) && (a[d] = s[d]);
      if (t) {
        l = t(s);
        for (var h = 0; h < l.length; h++) n.call(s, l[h]) && (a[l[h]] = s[l[h]]);
      }
    }
    return a;
  };
};
