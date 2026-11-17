/* module 42824 — 904 chars */
module.exports = function (e, t, r) {
  var n = r(87805),
    i = r(93290),
    o = r(71961),
    s = r(23007),
    a = r(35529),
    l = r(72428),
    c = r(56449),
    d = r(83693),
    h = r(3656),
    p = r(1882),
    u = r(23805),
    g = r(11331),
    m = r(37167),
    f = r(14974),
    y = r(69884);
  function v(e, t, r, v, b, x, C) {
    var S = f(e, r),
      A = f(t, r),
      w = C.get(A);
    if (w) n(e, r, w);else {
      var E = x ? x(S, A, r + "", e, t, C) : void 0,
        k = void 0 === E;
      if (k) {
        var O = c(A),
          D = !O && h(A),
          P = !O && !D && m(A);
        E = A, O || D || P ? c(S) ? E = S : d(S) ? E = s(S) : D ? (k = !1, E = i(A, !0)) : P ? (k = !1, E = o(A, !0)) : E = [] : g(A) || l(A) ? (E = S, l(S) ? E = y(S) : u(S) && !p(S) || (E = a(A))) : k = !1;
      }
      k && (C.set(A, E), b(E, A, v, x, C), C.delete(A)), n(e, r, E);
    }
  }
  e.exports = v;
};
