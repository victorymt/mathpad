/* module 93663 — 253 chars */
module.exports = function (e, t, r) {
  var n = r(41799),
    i = r(10776),
    o = r(67197);
  function s(e) {
    var t = i(e);
    return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (r) {
      return r === e || n(r, e, t);
    };
  }
  e.exports = s;
};
