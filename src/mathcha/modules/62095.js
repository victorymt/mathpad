/* module 62095 — 5019 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    $: () => d
  });
  var n = r(10467),
    i = r(92207),
    o = r.n(i),
    s = r(516),
    a = r(57381),
    l = r(4258);
  class c {
    run(e, t, r, n, i, o) {
      var s;
      o = o || {};
      var l = this.extactOpmEditor(e),
        c = this.extactHtmlEditor(e);
      if (!l || !l.startTempRender || !c) return Promise.resolve();
      var d = l.getLineCount();
      return d > ((null === (s = o) || void 0 === s ? void 0 : s.numberOfLinesToSeparate) || a.A.numberOfLinesToUseLazySeparateLines) ? (console.log("A lot of Lines in EditArea!!!: ", d), this.runLineChunkVisible(l, c, t, d, r, i, n, o)) : this.runFullEditAreaVisible(l, c, t, d, r, i, n, o);
    }
    extactOpmEditor(e) {
      return e.reactInstance ? e.reactInstance : e;
    }
    extactHtmlEditor(e) {
      return e.reactInstance ? e : e.editor;
    }
    runLineChunkVisible(e, t, r, i, a, c, d, h) {
      return (0, n.A)(o().mark(function p() {
        var u, g, m, f;
        return o().wrap(function p(y) {
          for (;;) switch (y.prev = y.next) {
            case 0:
              y.prev = 0, e.disableRegisterCalulateLine(), u = 50, g = Math.ceil(i / u), m = o().mark(function p(g) {
                var m, f;
                return o().wrap(function p(y) {
                  for (;;) switch (y.prev = y.next) {
                    case 0:
                      return m = u * g, f = Math.min(u, i - m), y.next = 4, e.runTempRender(a, (0, n.A)(o().mark(function e() {
                        var r, n, i, a, l;
                        return o().wrap(function e(o) {
                          for (;;) switch (o.prev = o.next) {
                            case 0:
                              if (r = s.A.findEditLines(t, !0), null == h || !h.onLineVisibleAsPromise) {
                                o.next = 12;
                                break;
                              }
                              n = m;
                            case 3:
                              if (!(n < m + f)) {
                                o.next = 10;
                                break;
                              }
                              return i = r[n], o.next = 7, d(i, n, r);
                            case 7:
                              n++, o.next = 3;
                              break;
                            case 10:
                              o.next = 13;
                              break;
                            case 12:
                              for (a = m; a < m + f; a++) l = r[a], d(l, a, r);
                            case 13:
                            case "end":
                              return o.stop();
                          }
                        }, e);
                      })), {
                        type: "full-visible" == r ? "lines-visible" : "no-size-only",
                        fromLineIdx: m,
                        toLineIdx: m + f - 1
                      }).then(() => (null == c || c(m + f, i), console.log(m + f, i), l.O.delay()));
                    case 4:
                    case "end":
                      return y.stop();
                  }
                }, p);
              }), f = 0;
            case 6:
              if (!(f < g)) {
                y.next = 11;
                break;
              }
              return y.delegateYield(m(f), "t0", 8);
            case 8:
              f++, y.next = 6;
              break;
            case 11:
              null == c || c(i, i);
            case 12:
              return y.prev = 12, e.enableRegisterCalulateLine(), y.finish(12);
            case 15:
            case "end":
              return y.stop();
          }
        }, p, null, [[0,, 12, 15]]);
      }))();
    }
    runFullEditAreaVisible(e, t, r, i, a, l, c, d) {
      var h;
      return e.disableRegisterCalulateLine(), e.runTempRender(a, (0, n.A)(o().mark(function e() {
        var r, n, i, a, l;
        return o().wrap(function e(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (r = s.A.findEditLines(t, !0), !d.onLineVisibleAsPromise) {
                o.next = 12;
                break;
              }
              n = 0;
            case 3:
              if (!(n < r.length)) {
                o.next = 10;
                break;
              }
              return i = r[n], o.next = 7, c(i, n, r);
            case 7:
              n++, o.next = 3;
              break;
            case 10:
              o.next = 13;
              break;
            case 12:
              for (a = 0; a < r.length; a++) l = r[a], c(l, a, r);
            case 13:
            case "end":
              return o.stop();
          }
        }, e);
      })), r).then(() => {
        null == l || l(i, i);
      }).finally(() => {
        e.enableRegisterCalulateLine();
      });
    }
    isEditLineHtmlElement(e) {
      return "LINE" == e.tagName && !!e.reactInstance;
    }
  }
  var d = new c();
};
