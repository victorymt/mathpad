/* module 57691 — 443 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => i
  });
  class n {
    toRomanLower(e) {
      return this.toRoman(e).toLowerCase();
    }
    toRoman(e) {
      for (var t = "", r = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], n = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"], i = 0; i < r.length; i++) for (; e >= r[i];) t += n[i], e -= r[i];
      return t;
    }
  }
  var i = new n();
};
