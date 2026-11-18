/* module 31384 — 1180 chars */
module.exports = function (e, t, r) {
  var n = r(67526),
    i = r(2780).set,
    o = n.MutationObserver || n.WebKitMutationObserver,
    s = n.process,
    a = n.Promise,
    l = "process" == r(55089)(s);
  e.exports = function () {
    var e,
      t,
      r,
      c = function () {
        var n, i;
        for (l && (n = s.domain) && n.exit(); e;) {
          i = e.fn, e = e.next;
          try {
            i();
          } catch (n) {
            throw e ? r() : t = void 0, n;
          }
        }
        t = void 0, n && n.enter();
      };
    if (l) r = function () {
      s.nextTick(c);
    };else if (!o || n.navigator && n.navigator.standalone) {
      if (a && a.resolve) {
        var d = a.resolve(void 0);
        r = function () {
          d.then(c);
        };
      } else r = function () {
        i.call(n, c);
      };
    } else {
      var h = !0,
        p = document.createTextNode("");
      new o(c).observe(p, {
        characterData: !0
      }), r = function () {
        p.data = h = !h;
      };
    }
    return function (n) {
      var i = {
        fn: n,
        next: void 0
      };
      t && (t.next = i), e || (e = i, r()), t = i;
    };
  };
};
