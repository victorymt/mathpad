/* module 66517 — 5464 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(22750),
    i = r(67526),
    o = r(35052),
    s = r(34848),
    a = r(92127),
    l = r(43305),
    c = r(63387),
    d = r(16440),
    h = r(48790),
    p = r(19190),
    u = r(2780).set,
    g = r(31384)(),
    m = r(24258),
    f = r(80128),
    y = r(4514),
    v = r(85957),
    b = "Promise",
    x = i.TypeError,
    C = i.process,
    S = C && C.versions,
    A = S && S.v8 || "",
    w = i[b],
    E = "process" == s(C),
    k = function () {},
    O,
    D,
    P,
    M,
    I = D = m.f,
    T = !!function () {
      try {
        var e = w.resolve(1),
          t = (e.constructor = {})[r(67574)("species")] = function (e) {
            e(k, k);
          };
        return (E || "function" == typeof PromiseRejectionEvent) && e.then(k) instanceof t && 0 !== A.indexOf("6.6") && -1 === y.indexOf("Chrome/66");
      } catch (e) {}
    }(),
    L = function (e) {
      var t;
      return !(!l(e) || "function" != typeof (t = e.then)) && t;
    },
    R = function (e, t) {
      if (!e._n) {
        e._n = !0;
        var r = e._c;
        g(function () {
          for (var n = e._v, i = 1 == e._s, o = 0, s = function (t) {
              var r = i ? t.ok : t.fail,
                o = t.resolve,
                s = t.reject,
                a = t.domain,
                l,
                c,
                d;
              try {
                r ? (i || (2 == e._h && j(e), e._h = 1), !0 === r ? l = n : (a && a.enter(), l = r(n), a && (a.exit(), d = !0)), l === t.promise ? s(x("Promise-chain cycle")) : (c = L(l)) ? c.call(l, o, s) : o(l)) : s(n);
              } catch (e) {
                a && !d && a.exit(), s(e);
              }
            }; r.length > o;) s(r[o++]);
          e._c = [], e._n = !1, t && !e._h && B(e);
        });
      }
    },
    B = function (e) {
      u.call(i, function () {
        var t = e._v,
          r = F(e),
          n,
          o,
          s;
        if (r && (n = f(function () {
          E ? C.emit("unhandledRejection", t, e) : (o = i.onunhandledrejection) ? o({
            promise: e,
            reason: t
          }) : (s = i.console) && s.error && s.error("Unhandled promise rejection", t);
        }), e._h = E || F(e) ? 2 : 1), e._a = void 0, r && n.e) throw n.v;
      });
    },
    F = function (e) {
      return 1 !== e._h && 0 === (e._a || e._c).length;
    },
    j = function (e) {
      u.call(i, function () {
        var t;
        E ? C.emit("rejectionHandled", e) : (t = i.onrejectionhandled) && t({
          promise: e,
          reason: e._v
        });
      });
    },
    _ = function (e) {
      var t = this;
      t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), R(t, !0));
    },
    N = function (e) {
      var t = this,
        r;
      if (!t._d) {
        t._d = !0, t = t._w || t;
        try {
          if (t === e) throw x("Promise can't be resolved itself");
          (r = L(e)) ? g(function () {
            var n = {
              _w: t,
              _d: !1
            };
            try {
              r.call(e, o(N, n, 1), o(_, n, 1));
            } catch (e) {
              _.call(n, e);
            }
          }) : (t._v = e, t._s = 1, R(t, !1));
        } catch (e) {
          _.call({
            _w: t,
            _d: !1
          }, e);
        }
      }
    };
  T || (w = function e(t) {
    d(this, w, b, "_h"), c(t), O.call(this);
    try {
      t(o(N, this, 1), o(_, this, 1));
    } catch (e) {
      _.call(this, e);
    }
  }, (O = function e(t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
  }).prototype = r(96065)(w.prototype, {
    then: function e(t, r) {
      var n = I(p(this, w));
      return n.ok = "function" != typeof t || t, n.fail = "function" == typeof r && r, n.domain = E ? C.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise;
    },
    catch: function (e) {
      return this.then(void 0, e);
    }
  }), P = function () {
    var e = new O();
    this.promise = e, this.resolve = o(N, e, 1), this.reject = o(_, e, 1);
  }, m.f = I = function (e) {
    return e === w || e === M ? new P(e) : D(e);
  }), a(a.G + a.W + a.F * !T, {
    Promise: w
  }), r(3844)(w, b), r(55762)(b), M = r(56094)[b], a(a.S + a.F * !T, b, {
    reject: function e(t) {
      var r = I(this),
        n;
      return (0, r.reject)(t), r.promise;
    }
  }), a(a.S + a.F * (n || !T), b, {
    resolve: function e(t) {
      return v(n && this === M ? w : this, t);
    }
  }), a(a.S + a.F * !(T && r(98931)(function (e) {
    w.all(e).catch(k);
  })), b, {
    all: function e(t) {
      var r = this,
        n = I(r),
        i = n.resolve,
        o = n.reject,
        s = f(function () {
          var e = [],
            n = 0,
            s = 1;
          h(t, !1, function (t) {
            var a = n++,
              l = !1;
            e.push(void 0), s++, r.resolve(t).then(function (t) {
              l || (l = !0, e[a] = t, --s || i(e));
            }, o);
          }), --s || i(e);
        });
      return s.e && o(s.v), n.promise;
    },
    race: function e(t) {
      var r = this,
        n = I(r),
        i = n.reject,
        o = f(function () {
          h(t, !1, function (e) {
            r.resolve(e).then(n.resolve, i);
          });
        });
      return o.e && i(o.v), n.promise;
    }
  });
};
