/* module 49820 — 1286 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(65606),
    i = r(3340),
    o = r(95839),
    s = r(75804),
    a = r(46113),
    l = r(60547),
    c = r(14594),
    d;
  function h(e, t, r, n) {
    var i = void 0 === e[r];
    null != t && i && (e[r] = o(t, !0));
  }
  var p = {
    instantiateChildren: function (e, t, r, n) {
      if (null == e) return null;
      var i = {};
      return l(e, h, i), i;
    },
    updateChildren: function (e, t, r, n, s, l, c, d, h) {
      if (t || e) {
        var p, u;
        for (p in t) if (t.hasOwnProperty(p)) {
          var g = (u = e && e[p]) && u._currentElement,
            m = t[p];
          if (null != u && a(g, m)) i.receiveComponent(u, m, s, d), t[p] = u;else {
            u && (n[p] = i.getHostNode(u), i.unmountComponent(u, !1));
            var f = o(m, !0);
            t[p] = f;
            var y = i.mountComponent(f, s, l, c, d, h);
            r.push(y);
          }
        }
        for (p in e) !e.hasOwnProperty(p) || t && t.hasOwnProperty(p) || (u = e[p], n[p] = i.getHostNode(u), i.unmountComponent(u, !1));
      }
    },
    unmountChildren: function (e, t) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        var n = e[r];
        i.unmountComponent(n, t);
      }
    }
  };
  e.exports = p;
};
