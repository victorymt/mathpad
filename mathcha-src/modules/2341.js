/* module 2341 — 895 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(63475),
    o = r(24161),
    s = r(86420),
    a = r(83982),
    l = r(53309),
    c = r(3340),
    d = r(41624),
    h = r(7817),
    p = r(18806),
    u = r(5184),
    g = r(95839),
    m = r(90646),
    f = 0;
  function y(e, t) {
    var r;
    try {
      return p.injection.injectBatchingStrategy(d), r = h.getPooled(t), f++, r.perform(function () {
        var n = g(e, !0),
          i = c.mountComponent(n, r, null, o(), u, 0);
        return t || (i = l.addChecksumToMarkup(i)), i;
      }, null);
    } finally {
      f--, h.release(r), f || p.injection.injectBatchingStrategy(s);
    }
  }
  function v(e) {
    return i.isValidElement(e) || n("46"), y(e, !1);
  }
  function b(e) {
    return i.isValidElement(e) || n("47"), y(e, !0);
  }
  e.exports = {
    renderToString: v,
    renderToStaticMarkup: b
  };
};
