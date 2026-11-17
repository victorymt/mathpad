/* module 32485 — 701 chars */
module.exports = function (e, t) {
  var r, n;
  !function () {
    "use strict";

    var i = {}.hasOwnProperty;
    function o() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
          var n = typeof r;
          if ("string" === n || "number" === n) e.push(r);else if (Array.isArray(r) && r.length) {
            var s = o.apply(null, r);
            s && e.push(s);
          } else if ("object" === n) for (var a in r) i.call(r, a) && r[a] && e.push(a);
        }
      }
      return e.join(" ");
    }
    e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function () {
      return o;
    }.apply(t, r = [])) || (e.exports = n);
  }();
};
