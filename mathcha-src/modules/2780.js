/* module 2780 — 1386 chars */
module.exports = function (e, t, r) {
  var n = r(35052),
    i = r(24877),
    o = r(61308),
    s = r(46034),
    a = r(67526),
    l = a.process,
    c = a.setImmediate,
    d = a.clearImmediate,
    h = a.MessageChannel,
    p = a.Dispatch,
    u = 0,
    g = {},
    m = "onreadystatechange",
    f,
    y,
    v,
    b = function () {
      var e = +this;
      if (g.hasOwnProperty(e)) {
        var t = g[e];
        delete g[e], t();
      }
    },
    x = function (e) {
      b.call(e.data);
    };
  c && d || (c = function e(t) {
    for (var r = [], n = 1; arguments.length > n;) r.push(arguments[n++]);
    return g[++u] = function () {
      i("function" == typeof t ? t : Function(t), r);
    }, f(u), u;
  }, d = function e(t) {
    delete g[t];
  }, "process" == r(55089)(l) ? f = function (e) {
    l.nextTick(n(b, e, 1));
  } : p && p.now ? f = function (e) {
    p.now(n(b, e, 1));
  } : h ? (v = (y = new h()).port2, y.port1.onmessage = x, f = n(v.postMessage, v, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts ? (f = function (e) {
    a.postMessage(e + "", "*");
  }, a.addEventListener("message", x, !1)) : f = m in s("script") ? function (e) {
    o.appendChild(s("script"))[m] = function () {
      o.removeChild(this), b.call(e);
    };
  } : function (e) {
    setTimeout(n(b, e, 1), 0);
  }), e.exports = {
    set: c,
    clear: d
  };
};
