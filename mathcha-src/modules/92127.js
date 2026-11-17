/* module 92127 — 808 chars */
module.exports = function (e, t, r) {
  var n = r(67526),
    i = r(56094),
    o = r(33341),
    s = r(28859),
    a = r(35052),
    l = "prototype",
    c = function (e, t, r) {
      var d = e & c.F,
        h = e & c.G,
        p = e & c.S,
        u = e & c.P,
        g = e & c.B,
        m = h ? n : p ? n[t] || (n[t] = {}) : (n[t] || {})[l],
        f = h ? i : i[t] || (i[t] = {}),
        y = f[l] || (f[l] = {}),
        v,
        b,
        x,
        C;
      for (v in h && (r = t), r) x = ((b = !d && m && void 0 !== m[v]) ? m : r)[v], C = g && b ? a(x, n) : u && "function" == typeof x ? a(Function.call, x) : x, m && s(m, v, x, e & c.U), f[v] != x && o(f, v, C), u && y[v] != x && (y[v] = x);
    };
  n.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
};
