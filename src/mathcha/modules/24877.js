/* module 24877 — 500 chars */
module.exports = function (e) {
  e.exports = function (e, t, r) {
    var n = void 0 === r;
    switch (t.length) {
      case 0:
        return n ? e() : e.call(r);
      case 1:
        return n ? e(t[0]) : e.call(r, t[0]);
      case 2:
        return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
      case 3:
        return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
      case 4:
        return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3]);
    }
    return e.apply(r, t);
  };
};
