/* module 90098 — 244 chars */
module.exports = function (e, t, r) {
  var n = r(44968),
    i = r(30254)("iterator"),
    o = r(20210);
  e.exports = r(46438).isIterable = function (e) {
    var t = Object(e);
    return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(n(t));
  };
};
