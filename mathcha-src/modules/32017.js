/* module 32017 — 1067 chars */
module.exports = function (e) {
  "use strict";

  var t = Array.isArray,
    r = Object.keys,
    n = Object.prototype.hasOwnProperty;
  e.exports = function e(i, o) {
    if (i === o) return !0;
    if (i && o && "object" == typeof i && "object" == typeof o) {
      var s = t(i),
        a = t(o),
        l,
        c,
        d;
      if (s && a) {
        if ((c = i.length) != o.length) return !1;
        for (l = c; 0 !== l--;) if (!e(i[l], o[l])) return !1;
        return !0;
      }
      if (s != a) return !1;
      var h = i instanceof Date,
        p = o instanceof Date;
      if (h != p) return !1;
      if (h && p) return i.getTime() == o.getTime();
      var u = i instanceof RegExp,
        g = o instanceof RegExp;
      if (u != g) return !1;
      if (u && g) return i.toString() == o.toString();
      var m = r(i);
      if ((c = m.length) !== r(o).length) return !1;
      for (l = c; 0 !== l--;) if (!n.call(o, m[l])) return !1;
      for (l = c; 0 !== l--;) if (!e(i[d = m[l]], o[d])) return !1;
      return !0;
    }
    return i != i && o != o;
  };
};
