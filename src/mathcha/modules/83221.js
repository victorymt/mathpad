/* module 83221 — 261 chars */
module.exports = function (e) {
  function t(e) {
    return function (t, r, n) {
      for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
        var l = s[e ? a : ++i];
        if (!1 === r(o[l], l, o)) break;
      }
      return t;
    };
  }
  e.exports = t;
};
