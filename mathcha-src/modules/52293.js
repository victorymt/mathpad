/* module 52293 — 491 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(12560),
    i = r(20322),
    o = r(20210),
    s = r(65133);
  e.exports = r(88839)(Array, "Array", function (e, t) {
    this._t = s(e), this._i = 0, this._k = t;
  }, function () {
    var e = this._t,
      t = this._k,
      r = this._i++;
    return !e || r >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
  }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries");
};
