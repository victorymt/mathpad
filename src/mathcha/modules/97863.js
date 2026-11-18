/* module 97863 — 368 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(43172)(!0);
  r(88839)(String, "String", function (e) {
    this._t = String(e), this._i = 0;
  }, function () {
    var e = this._t,
      t = this._i,
      r;
    return t >= e.length ? {
      value: void 0,
      done: !0
    } : (r = n(e, t), this._i += r.length, {
      value: r,
      done: !1
    });
  });
};
