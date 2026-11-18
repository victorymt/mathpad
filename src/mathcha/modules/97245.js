/* module 97245 — 4972 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(66670),
    i = r(75509),
    o = r(58219),
    s = r(88535),
    a = r(61331),
    l = r(75172).KEY,
    c = r(81984),
    d = r(96308),
    h = r(1356),
    p = r(19191),
    u = r(30254),
    g = r(84336),
    m = r(67816),
    f = r(36473),
    y = r(15461),
    v = r(80812),
    b = r(24401),
    x = r(66310),
    C = r(65133),
    S = r(10752),
    A = r(86260),
    w = r(22087),
    E = r(36309),
    k = r(81033),
    O = r(59820),
    D = r(78423),
    P = r(54311),
    M = k.f,
    I = D.f,
    T = E.f,
    L = n.Symbol,
    R = n.JSON,
    B = R && R.stringify,
    F = "prototype",
    j = u("_hidden"),
    _ = u("toPrimitive"),
    N = {}.propertyIsEnumerable,
    z = d("symbol-registry"),
    H = d("symbols"),
    W = d("op-symbols"),
    V = Object[F],
    U = "function" == typeof L && !!O.f,
    q = n.QObject,
    G = !q || !q[F] || !q[F].findChild,
    K = o && c(function () {
      return 7 != w(I({}, "a", {
        get: function () {
          return I(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (e, t, r) {
      var n = M(V, t);
      n && delete V[t], I(e, t, r), n && e !== V && I(V, t, n);
    } : I,
    Z = function (e) {
      var t = H[e] = w(L[F]);
      return t._k = e, t;
    },
    Y = U && "symbol" == typeof L.iterator ? function (e) {
      return "symbol" == typeof e;
    } : function (e) {
      return e instanceof L;
    },
    Q = function e(t, r, n) {
      return t === V && Q(W, r, n), v(t), r = S(r, !0), v(n), i(H, r) ? (n.enumerable ? (i(t, j) && t[j][r] && (t[j][r] = !1), n = w(n, {
        enumerable: A(0, !1)
      })) : (i(t, j) || I(t, j, A(1, {})), t[j][r] = !0), K(t, r, n)) : I(t, r, n);
    },
    J = function e(t, r) {
      v(t);
      for (var n = f(r = C(r)), i = 0, o = n.length, s; o > i;) Q(t, s = n[i++], r[s]);
      return t;
    },
    X = function e(t, r) {
      return void 0 === r ? w(t) : J(w(t), r);
    },
    $ = function e(t) {
      var r = N.call(this, t = S(t, !0));
      return !(this === V && i(H, t) && !i(W, t)) && (!(r || !i(this, t) || !i(H, t) || i(this, j) && this[j][t]) || r);
    },
    ee = function e(t, r) {
      if (t = C(t), r = S(r, !0), t !== V || !i(H, r) || i(W, r)) {
        var n = M(t, r);
        return !n || !i(H, r) || i(t, j) && t[j][r] || (n.enumerable = !0), n;
      }
    },
    te = function e(t) {
      for (var r = T(C(t)), n = [], o = 0, s; r.length > o;) i(H, s = r[o++]) || s == j || s == l || n.push(s);
      return n;
    },
    re = function e(t) {
      for (var r = t === V, n = T(r ? W : C(t)), o = [], s = 0, a; n.length > s;) !i(H, a = n[s++]) || r && !i(V, a) || o.push(H[a]);
      return o;
    };
  U || (L = function e() {
    if (this instanceof L) throw TypeError("Symbol is not a constructor!");
    var t = p(arguments.length > 0 ? arguments[0] : void 0),
      r = function (e) {
        this === V && r.call(W, e), i(this, j) && i(this[j], t) && (this[j][t] = !1), K(this, t, A(1, e));
      };
    return o && G && K(V, t, {
      configurable: !0,
      set: r
    }), Z(t);
  }, a(L[F], "toString", function e() {
    return this._k;
  }), k.f = ee, D.f = Q, r(1743).f = E.f = te, r(36569).f = $, O.f = re, o && !r(74742) && a(V, "propertyIsEnumerable", $, !0), g.f = function (e) {
    return Z(u(e));
  }), s(s.G + s.W + s.F * !U, {
    Symbol: L
  });
  for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ie = 0; ne.length > ie;) u(ne[ie++]);
  for (var oe = P(u.store), se = 0; oe.length > se;) m(oe[se++]);
  s(s.S + s.F * !U, "Symbol", {
    for: function (e) {
      return i(z, e += "") ? z[e] : z[e] = L(e);
    },
    keyFor: function e(t) {
      if (!Y(t)) throw TypeError(t + " is not a symbol!");
      for (var r in z) if (z[r] === t) return r;
    },
    useSetter: function () {
      G = !0;
    },
    useSimple: function () {
      G = !1;
    }
  }), s(s.S + s.F * !U, "Object", {
    create: X,
    defineProperty: Q,
    defineProperties: J,
    getOwnPropertyDescriptor: ee,
    getOwnPropertyNames: te,
    getOwnPropertySymbols: re
  });
  var ae = c(function () {
    O.f(1);
  });
  s(s.S + s.F * ae, "Object", {
    getOwnPropertySymbols: function e(t) {
      return O.f(x(t));
    }
  }), R && s(s.S + s.F * (!U || c(function () {
    var e = L();
    return "[null]" != B([e]) || "{}" != B({
      a: e
    }) || "{}" != B(Object(e));
  })), "JSON", {
    stringify: function e(t) {
      for (var r = [t], n = 1, i, o; arguments.length > n;) r.push(arguments[n++]);
      if (o = i = r[1], (b(i) || void 0 !== t) && !Y(t)) return y(i) || (i = function (e, t) {
        if ("function" == typeof o && (t = o.call(this, e, t)), !Y(t)) return t;
      }), r[1] = i, B.apply(R, r);
    }
  }), L[F][_] || r(2677)(L[F], _, L[F].valueOf), h(L, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0);
};
