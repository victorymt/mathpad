/* module 4901 — 1046 chars */
module.exports = function (e, t, r) {
  var n = r(72552),
    i = r(30294),
    o = r(40346),
    s = "[object Arguments]",
    a = "[object Array]",
    l = "[object Boolean]",
    c = "[object Date]",
    d = "[object Error]",
    h = "[object Function]",
    p = "[object Map]",
    u = "[object Number]",
    g = "[object Object]",
    m = "[object RegExp]",
    f = "[object Set]",
    y = "[object String]",
    v = "[object WeakMap]",
    b = "[object ArrayBuffer]",
    x = "[object DataView]",
    C,
    S = "[object Float64Array]",
    A = "[object Int8Array]",
    w = "[object Int16Array]",
    E = "[object Int32Array]",
    k = "[object Uint8Array]",
    O = "[object Uint8ClampedArray]",
    D = "[object Uint16Array]",
    P = "[object Uint32Array]",
    M = {};
  function I(e) {
    return o(e) && i(e.length) && !!M[n(e)];
  }
  M["[object Float32Array]"] = M[S] = M[A] = M[w] = M[E] = M[k] = M[O] = M[D] = M[P] = !0, M[s] = M[a] = M[b] = M[l] = M[x] = M[c] = M[d] = M[h] = M[p] = M[u] = M[g] = M[m] = M[f] = M[y] = M[v] = !1, e.exports = I;
};
