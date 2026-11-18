/* module 88535 — 1310 chars */
module.exports = function (e, t, r) {
  var n = r(66670),
    i = r(46438),
    o = r(58852),
    s = r(2677),
    a = r(75509),
    l = "prototype",
    c = function (e, t, r) {
      var d = e & c.F,
        h = e & c.G,
        p = e & c.S,
        u = e & c.P,
        g = e & c.B,
        m = e & c.W,
        f = h ? i : i[t] || (i[t] = {}),
        y = f[l],
        v = h ? n : p ? n[t] : (n[t] || {})[l],
        b,
        x,
        C;
      for (b in h && (r = t), r) (x = !d && v && void 0 !== v[b]) && a(f, b) || (C = x ? v[b] : r[b], f[b] = h && "function" != typeof v[b] ? r[b] : g && x ? o(C, n) : m && v[b] == C ? function (e) {
        var t = function (t, r, n) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e();
              case 1:
                return new e(t);
              case 2:
                return new e(t, r);
            }
            return new e(t, r, n);
          }
          return e.apply(this, arguments);
        };
        return t[l] = e[l], t;
      }(C) : u && "function" == typeof C ? o(Function.call, C) : C, u && ((f.virtual || (f.virtual = {}))[b] = C, e & c.R && y && !y[b] && s(y, b, C)));
    };
  c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
};
