/* module 9999 — 2446 chars */
module.exports = function (e, t, r) {
  var n = r(37217),
    i = r(83729),
    o = r(16547),
    s = r(74733),
    a = r(43838),
    l = r(93290),
    c = r(23007),
    d = r(92271),
    h = r(48948),
    p = r(50002),
    u = r(83349),
    g = r(5861),
    m = r(76189),
    f = r(77199),
    y = r(35529),
    v = r(56449),
    b = r(3656),
    x = r(87730),
    C = r(23805),
    S = r(38440),
    A = r(95950),
    w = r(37241),
    E = 1,
    k = 2,
    O = 4,
    D = "[object Arguments]",
    P = "[object Array]",
    M = "[object Boolean]",
    I = "[object Date]",
    T = "[object Error]",
    L = "[object Function]",
    R = "[object GeneratorFunction]",
    B = "[object Map]",
    F = "[object Number]",
    j = "[object Object]",
    _ = "[object RegExp]",
    N = "[object Set]",
    z = "[object String]",
    H = "[object Symbol]",
    W = "[object WeakMap]",
    V = "[object ArrayBuffer]",
    U = "[object DataView]",
    q = "[object Float32Array]",
    G = "[object Float64Array]",
    K = "[object Int8Array]",
    Z = "[object Int16Array]",
    Y = "[object Int32Array]",
    Q = "[object Uint8Array]",
    J = "[object Uint8ClampedArray]",
    X = "[object Uint16Array]",
    $ = "[object Uint32Array]",
    ee = {};
  function te(e, t, r, E, k, O) {
    var P,
      M = 1 & t,
      I = 2 & t,
      T = 4 & t;
    if (r && (P = k ? r(e, E, k, O) : r(e)), void 0 !== P) return P;
    if (!C(e)) return e;
    var B = v(e);
    if (B) {
      if (P = m(e), !M) return c(e, P);
    } else {
      var F = g(e),
        _ = F == L || F == R;
      if (b(e)) return l(e, M);
      if (F == j || F == D || _ && !k) {
        if (P = I || _ ? {} : y(e), !M) return I ? h(e, a(P, e)) : d(e, s(P, e));
      } else {
        if (!ee[F]) return k ? e : {};
        P = f(e, F, M);
      }
    }
    O || (O = new n());
    var N = O.get(e);
    if (N) return N;
    O.set(e, P), S(e) ? e.forEach(function (n) {
      P.add(te(n, t, r, n, e, O));
    }) : x(e) && e.forEach(function (n, i) {
      P.set(i, te(n, t, r, i, e, O));
    });
    var z,
      H = B ? void 0 : (T ? I ? u : p : I ? w : A)(e);
    return i(H || e, function (n, i) {
      H && (n = e[i = n]), o(P, i, te(n, t, r, i, e, O));
    }), P;
  }
  ee[D] = ee[P] = ee[V] = ee[U] = ee[M] = ee[I] = ee[q] = ee[G] = ee[K] = ee[Z] = ee[Y] = ee[B] = ee[F] = ee[j] = ee[_] = ee[N] = ee[z] = ee[H] = ee[Q] = ee[J] = ee[X] = ee[$] = !0, ee[T] = ee[L] = ee[W] = !1, e.exports = te;
};
