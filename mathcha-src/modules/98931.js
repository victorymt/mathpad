/* module 98931 — 521 chars */
module.exports = function (e, t, r) {
  var n = r(67574)("iterator"),
    i = !1;
  try {
    var o = [7][n]();
    o.return = function () {
      i = !0;
    }, Array.from(o, function () {
      throw 2;
    });
  } catch (e) {}
  e.exports = function (e, t) {
    if (!t && !i) return !1;
    var r = !1;
    try {
      var o = [7],
        s = o[n]();
      s.next = function () {
        return {
          done: r = !0
        };
      }, o[n] = function () {
        return s;
      }, e(o);
    } catch (e) {}
    return r;
  };
};
