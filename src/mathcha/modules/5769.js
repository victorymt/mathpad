/* module 5769 — 760 chars */
module.exports = function (e, t, r) {
  var n = r(54211),
    i = {
      x: !1,
      y: !1
    };
  function o(e, t, r) {
    if ("Z" !== t) {
      if ("M" !== t) {
        var n = [!1, i.x, i.y].concat(r),
          o,
          s = new (e.bind.apply(e, n))(),
          a = r.slice(-2);
        return i = {
          x: a[0],
          y: a[1]
        }, s;
      }
      i = {
        x: r[0],
        y: r[1]
      };
    }
  }
  function s(e, t) {
    for (var r = n(t).split(" "), i, s = new RegExp("[MLCQZ]", ""), a, l, c = [], d = {
        C: 6,
        Q: 4,
        L: 2,
        M: 2
      }; r.length;) i = r.splice(0, 1)[0], s.test(i) && (a = o(e, i, l = r.splice(0, d[i]).map(parseFloat))) && c.push(a);
    return new e.PolyBezier(c);
  }
  e.exports = s;
};
