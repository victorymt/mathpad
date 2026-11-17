/* module 30953 — 157 chars */
module.exports = function (e, t, r) {
  var n = r(2677);
  e.exports = function (e, t, r) {
    for (var i in t) r && e[i] ? e[i] = t[i] : n(e, i, t[i]);
    return e;
  };
};
