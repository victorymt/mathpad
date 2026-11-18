/* module 57858 — 24771 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => Ae
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(334),
    a = r(2543),
    l = r.n(a),
    c = r(516),
    d = r(84258),
    h = r(58578),
    p = r(60693);
  class u extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "willComponentUnmount", void 0), (0, n.A)(this, "rootElement", void 0), (0, n.A)(this, "updateComponent", () => {
        this.props.fixedContextHandler.getRenderingContext().nextCycleIfRequired(() => {
          this.forceUpdate();
        });
      });
    }
    renderRepeat(e, t) {
      t = t || c.A.getComputedFontSize(this.rootElement);
      for (var r = this.getCurrentRootHeight(), n = [], i = 0, s = 0; s <= r; s += t) n.push(o().createElement("inside", {
        key: i
      }, e)), i++;
      return n;
    }
    componentWillReceiveProps() {
      this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    shouldComponentUpdate() {
      return !1;
    }
    componentWillUnmount() {
      this.willComponentUnmount = !0;
    }
    componentDidMount() {
      this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    renderAs3Parts() {
      var e = this.props,
        t = e.startChar,
        r = e.repeatChar,
        n = e.endChar;
      return o().createElement("vcomposed-symbol", {
        style: this.getStyle(this.getCurrentRootHeight()),
        class: this.getClassName(),
        ref: e => this.rootElement = e
      }, t ? o().createElement("start", null, t) : null, o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r))), n ? o().createElement("end", null, n) : null);
    }
    getStyle(e) {
      var t = {
        fontFamily: h.A.mathFontFamilyFromKey("\\mathnormal", this.props.baseMathModeFontFamily, "use-custom-symbol"),
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "1.2"
      };
      if (this.props.fontSizeEm) {
        var r = l().isFunction(this.props.fontSizeEm) ? this.props.fontSizeEm(e) : this.props.fontSizeEm;
        t.fontSize = r + "em";
      }
      return t;
    }
    getClassName() {
      return d.A.isSafari() ? this.props.className : this.props.className + " non-safari";
    }
    getCurrentRootHeight() {
      return p.T.getBCHeight(this.rootElement, this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer());
    }
    renderAs5Parts() {
      var e = this.props,
        t = e.startChar,
        r = e.repeatChar,
        n = e.endChar,
        i = e.middleChar,
        s = this.props.fontSize;
      return o().createElement("vcomposed-symbol", {
        style: this.getStyle(this.getCurrentRootHeight()),
        class: this.getClassName(),
        ref: e => this.rootElement = e
      }, t ? o().createElement("start", null, t) : null, o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r, 2 * s))), o().createElement("middle-center", null, i), o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r, 2 * s))), n ? o().createElement("end", null, n) : null);
    }
    render() {
      if (null == this.rootElement) {
        var e = this.props.heightChar || this.props.repeatChar;
        return o().createElement("vcomposed-symbol", {
          style: {
            zIndex: this.props.zIndex,
            fontFamily: h.A.mathFontFamilyFromKey("\\mathnormal", this.props.baseMathModeFontFamily, "use-custom-symbol"),
            fontStyle: "normal",
            fontWeight: "normal"
          },
          class: this.getClassName(),
          ref: e => this.rootElement = e
        }, e);
      }
      return this.props.middleChar ? this.renderAs5Parts() : this.renderAs3Parts();
    }
  }
  var g = r(12481),
    m = r(23237),
    f = r(39429),
    y = r(74987),
    v = r.n(y),
    b = r(8019),
    x = new f.A();
  x.push("M 30 1744"), x.push("h 110"), x.push("c 0 -688 49 -1197 289 -1733"), x.push("l -72 -31"), x.push("c -252 516 -327 994 -327 1744");
  var C = {
      topPt: x,
      topBracketHeight: 1744,
      topBracketWidth: 399,
      lineX: 30,
      lineSize: 110,
      scaleXRatio: 1
    },
    S = v()(function (e, t) {
      return (0, b.p)(e, t, C);
    }),
    A = v()(function (e, t) {
      return (0, b.S)(e, t, C);
    }),
    w = new f.A();
  w.push("M 503 21"), w.push("c 0 -12 -10 -21 -21 -21"), w.push("c -5 0 -9 2 -12 4"), w.push("c -268 201 -423 751 -423 1241"), w.push("v 10"), w.push("h 102"), w.push("v -10"), w.push("c 0 -469 90 -1015 345 -1208"), w.push("c 6 -3 9 -9 9 -16");
  var E = {
      topPt: w,
      topBracketHeight: 1255,
      topBracketWidth: 526,
      lineX: 90,
      lineSize: 102,
      scaleXRatio: 1.2
    },
    k = v()(function (e, t) {
      return (0, b.p)(e, t, E);
    }),
    O = v()(function (e, t) {
      return (0, b.S)(e, t, E);
    });
  class D {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3;
      (0, n.A)(this, "timeoutTime", void 0), (0, n.A)(this, "cacheMap", {}), (0, n.A)(this, "timeoutId", void 0), this.timeoutTime = e;
    }
    triggerTimeOutIfRequire() {
      this.timeoutId || (this.timeoutId = setTimeout(() => {
        console.log("svg cache count: ", l().sumBy(l().values(this.cacheMap), e => l().keys(e).length)), this.cacheMap = {}, this.timeoutId = void 0, console.log("svg cache timeout clear");
      }, this.timeoutTime));
    }
    get(e, t) {
      var r = this.cacheMap[e];
      if (r) return r[t];
    }
    set(e, t, r) {
      this.triggerTimeOutIfRequire();
      var n = this.cacheMap[e];
      n || (n = {}, this.cacheMap[e] = n), n[t] = r;
    }
  }
  var P = 1e3;
  function M(e, t, r) {
    var n = r.topPt,
      i = r.middlePt,
      s = r.topBracketHeight,
      a = r.middleBracketHeight,
      l = r.lineX,
      c = r.lineSize,
      d = r.scaleXRatio,
      h = t / 10,
      p = e - h,
      u = t / P / d,
      g = t / P / 1.5,
      m = e - 2 * h,
      y;
    (2 * s + a) * g > m && (g = m / (2 * s + a));
    var v = n.scale(u, g).shift(0, h),
      b = n.scale(u, g).flipY().shift(0, p),
      x = i.scale(u, g).shift(0, e / 2 - a / 2 * g),
      C = Math.max(((e - 2 * h) / g - (2 * s + a)) / 2, 0),
      S = new f.A();
    S.pushArr(["M ".concat(l, " 0"), "v ".concat(C, " "), "h ".concat(c), "v ".concat(-C)]);
    var A = S.scale(u, g).shift(0, h + s * g),
      w = S.scale(u, g).shift(0, e / 2 + a / 2 * g),
      E;
    return [o().createElement("path", {
      key: "0",
      d: "".concat(v.path(), " z ").concat(A.path(), " z ").concat(x.path(), " z ").concat(w.path(), " z"),
      stroke: "none"
    }), o().createElement("path", {
      key: "1",
      d: "".concat(b.path(), " z"),
      stroke: "none"
    })];
  }
  function I(e, t, r) {
    var n = r.topPt,
      i = r.middlePt,
      s = r.topBracketHeight,
      a = r.middleBracketHeight,
      l = r.lineX,
      c = r.lineSize,
      d = r.scaleXRatio,
      h = t / 10,
      p = e - h,
      u = t / 2,
      g = t / P / d,
      m = t / P / 1.5,
      y = e - 2 * h,
      v;
    (2 * s + a) * m > y && (m = y / (2 * s + a));
    var b = n.scale(g, m).shift(-u, t / 10).flipX(),
      x = n.scale(g, m).flipY().shift(-u, p).flipX(),
      C = i.scale(g, m).shift(-u, e / 2 - a / 2 * m).flipX(),
      S = Math.max(((e - 2 * h) / m - (2 * s + a)) / 2, 0),
      A = new f.A();
    A.pushArr(["M ".concat(l, " 0"), "v ".concat(S, " "), "h ".concat(c), "v ".concat(-S)]);
    var w = A.scale(g, m).shift(-u, h + s * m).flipX(),
      E = A.scale(g, m).shift(-u, e / 2 + a / 2 * m).flipX(),
      k;
    return [o().createElement("path", {
      key: "0",
      d: "".concat(b.path(), " z  ").concat(w.path(), " z ").concat(C.path(), " z ").concat(E.path(), " z"),
      stroke: "none"
    }), o().createElement("path", {
      key: "1",
      d: "".concat(x.path(), " z"),
      stroke: "none"
    })];
  }
  var T = new f.A();
  T.push("M 491 0"), T.push("c 0 -3 -3 -5 -7 -5"), T.push("c -9 0 -26 8 -30 10"), T.push("c -178 95 -211 294 -211 654"), T.push("v 53"), T.push("h 95"), T.push("v -113"), T.push("c 0 -194 7 -455 125 -572"), T.push("c 8.66799 -8.59453 28 -19 28 -27");
  var L = new f.A();
  L.push("M 338 0"), L.push("h -95"), L.push("v 52"), L.push("c 0 262 -161 323 -162 323"), L.push("v 2"), L.push("c 1 0 162 66 162 327"), L.push("h 95"), L.push("c 0 -93 -5 -253 -174 -326"), L.push("c 169 -71 174 -232 174 -326"), L.push("v -52");
  var R = new D(),
    B = new D(),
    F = {
      topPt: T,
      middlePt: L,
      topBracketHeight: 659,
      middleBracketHeight: 680,
      lineX: 243,
      lineSize: 95,
      scaleXRatio: 1
    };
  function j(e, t) {
    var r = R.get(e, t);
    if (r) return r;
    var n = M(e, t, F);
    return R.set(e, t, n), n;
  }
  function _(e, t) {
    var r = B.get(e, t);
    if (r) return r;
    var n = I(e, t, F);
    return B.set(e, t, n), n;
  }
  var N = new f.A();
  N.push("M 230 420"), N.push("v -202"), N.push("c 0 -138 72 -218 243 -218"), N.push("v 89"), N.push("c -101 0 -139 54.6514 -139 118"), N.push("v 213");
  var z = new f.A();
  z.push("M 333 0"), z.push("l 1 100"), z.push("c 1 206 -62 303 -136 332"), z.push("c 74 30 136 126 137 332"), z.push("v 110"), z.push("h -105"), z.push("v -90"), z.push("c 0 -209 -56 -310 -158 -310"), z.push("v -83"), z.push("c 102 0 158 -101 158 -309"), z.push("v -82"), z.push("Z");
  var H = new D(),
    W = new D(),
    V = {
      topPt: N,
      middlePt: z,
      topBracketHeight: 420,
      middleBracketHeight: 874,
      lineX: 230,
      lineSize: 103,
      scaleXRatio: 1
    };
  function U(e, t) {
    var r = H.get(e, t);
    if (r) return r;
    var n = M(e, t, V);
    return H.set(e, t, n), n;
  }
  function q(e, t) {
    var r = W.get(e, t);
    if (r) return r;
    var n = I(e, t, V);
    return W.set(e, t, n), n;
  }
  var G = new f.A();
  G.push("M 508 26"), G.push("c 0 -14 -12 -26 -26 -26"), G.push("c -3 0 -6 1 -9 2"), G.push("c -169 61 -240 222.011 -240 373"), G.push("v 20"), G.push("h 102"), G.push("v -20"), G.push("c 0 -122.991 18 -274 156 -325"), G.push("c 10 -3 17 -13 17 -24");
  var K = new f.A();
  K.push("M 331 780"), K.push("v -15"), K.push("c 0 -147 -60 -300 -205 -375"), K.push("c 145 -75 205 -228 205 -375"), K.push("v -15"), K.push("h -102"), K.push("v 15"), K.push("c 0 137 -37 300 -176 351"), K.push("c -10 3 -17 13 -17 24"), K.push("s 7 21 17 24"), K.push("c 139 51 176 214 176 351"), K.push("v 15"), K.push("h 102");
  var Z = new D(),
    Y = new D(),
    Q = {
      topPt: G,
      middlePt: K,
      topBracketHeight: 395,
      middleBracketHeight: 780,
      lineX: 230,
      lineSize: 102,
      scaleXRatio: 1.2
    };
  function J(e, t) {
    var r = Z.get(e, t);
    if (r) return r;
    var n = M(e, t, Q);
    return Z.set(e, t, n), n;
  }
  function X(e, t) {
    var r = Y.get(e, t);
    if (r) return r;
    var n = I(e, t, Q);
    return Y.set(e, t, n), n;
  }
  var $ = 1e3,
    ee = function e(t, r, n) {
      var i = n.topPt,
        s = n.topBracketHeight,
        a = n.lineX,
        l = n.lineSize,
        c = r / 10,
        d = Math.min(r / $, (t - 2 * c) / (2 * s)),
        h = r / $,
        p = t - c,
        u = i.scale(h, d).shift(0, c),
        g = i.scale(h, d).flipY().shift(0, p),
        m = d < h ? 0 : Math.max((t - 2 * c) / d - 2 * s, 0),
        y = new f.A();
      y.pushArr(["M ".concat(a, " 0"), "v ".concat(m, " "), "h ".concat(l), "v ".concat(-m)]);
      var v = y.scale(h, d).shift(0, s * d + c),
        b;
      return [o().createElement("path", {
        key: "0",
        d: "".concat(u.path(), " z ").concat(v.path(), " z "),
        stroke: "none"
      }), o().createElement("path", {
        key: "1",
        d: "".concat(g.path(), " z"),
        stroke: "none"
      })];
    },
    te = function e(t, r, n) {
      var i = n.topPt,
        s = n.topBracketHeight,
        a = n.lineX,
        l = n.lineSize,
        c = r / 10,
        d = Math.min(r / $, (t - 2 * c) / (2 * s)),
        h = r / $,
        p = t - c,
        u = r / 2.25,
        g = i.scale(h, d).shift(-u, c).flipX(),
        m = i.scale(h, d).flipY().shift(-u, p).flipX(),
        y = d < h ? 0 : Math.max((t - 2 * c) / d - 2 * s, 0),
        v = new f.A();
      v.pushArr(["M ".concat(a, " 0"), "v ".concat(y, " "), "h ".concat(l), "v ".concat(-y)]);
      var b = v.scale(h, d).shift(-u, s * d + c).flipX(),
        x;
      return [o().createElement("path", {
        key: "0",
        d: "".concat(g.path(), " z ").concat(b.path(), " z"),
        stroke: "none"
      }), o().createElement("path", {
        key: "1",
        d: "".concat(m.path(), " z"),
        stroke: "none"
      })];
    },
    re = new f.A();
  re.push("M 352 0"), re.push("l -6 -6"), re.push("q -64 2 -127 2"), re.push("q -60 0 -126 -2"), re.push("l -9 13"), re.push("q 9 34 9 185"), re.push("v 50"), re.push("h 84"), re.push("v -50"), re.push("q 0 -77 4 -126"), re.push("q 3 -35 70 -35"), re.push("h 97"), re.push("l 4 -5"), re.push("v -26");
  var ne = {
      topPt: re,
      topBracketHeight: 231,
      lineX: 93,
      lineSize: 84
    },
    ie = v()(function (e, t) {
      return ee(e, t, ne);
    }),
    oe = v()(function (e, t) {
      return te(e, t, ne);
    }),
    se = new f.A();
  se.push("M 105 0"), se.push("v 418"), se.push("h 100"), se.push("v -329"), se.push("h 212"), se.push("v -89"), se.push("h -332");
  var ae = {
      topPt: se,
      topBracketHeight: 418,
      lineX: 105,
      lineSize: 100
    },
    le = v()(function (e, t) {
      return ee(e, t, ae);
    }),
    ce = v()(function (e, t) {
      return te(e, t, ae);
    }),
    de = new f.A();
  de.push("M 392 30"), de.push("c 0 -17 -13 -30 -30 -30"), de.push("h -256"), de.push("v 170"), de.push("h 60"), de.push("v -110"), de.push("h 196"), de.push("c 17 0 30 -13 30 -30");
  var he = {
      topPt: de,
      topBracketHeight: 170,
      lineX: 105,
      lineSize: 60
    },
    pe = v()(function (e, t) {
      return ee(e, t, he);
    }),
    ue = v()(function (e, t) {
      return te(e, t, he);
    }),
    ge = r(19340),
    me = r(7258);
  function fe(e, t, r) {
    return s.A.fontSizeEmByHeight(r, t, e);
  }
  function ye(e, t, r, n) {
    var i,
      s = (e - Math.min(1, t / (2 * r)) * e) / 2,
      a = Math.max(r / (n ? 9 : 18), s),
      l = r / 9,
      d = "".concat((e - s).toFixed(2), ",").concat(l.toFixed(2), " ").concat(a.toFixed(2), ",").concat((t / 2).toFixed(2), " ").concat((e - s).toFixed(2), ",").concat((t - l).toFixed(2));
    return o().createElement("polyline", {
      points: d,
      strokeWidth: (0, c.U)(r),
      fill: "none"
    });
  }
  function ve(e, t, r, n) {
    var i,
      s = (e - Math.min(1, t / (2 * r)) * e) / 2,
      a = Math.max(r / (n ? 9 : 18), s),
      l = r / 9,
      d = "".concat(s.toFixed(2), ",").concat(l.toFixed(2), " ").concat((e - a).toFixed(2), ",").concat((t / 2).toFixed(2), " ").concat(s.toFixed(2), ",").concat((t - l).toFixed(2));
    return o().createElement("polyline", {
      points: d,
      strokeWidth: (0, c.U)(r),
      fill: "none"
    });
  }
  function be(e, t, r) {
    var n = r / 9,
      i = r / 9,
      s = "".concat(e.toFixed(2), ",").concat(i.toFixed(2), " ").concat(n.toFixed(2), ",").concat((t - i).toFixed(2));
    return o().createElement("polyline", {
      points: s,
      strokeWidth: (0, c.U)(r),
      fill: "none"
    });
  }
  function xe(e, t, r) {
    var n = r / 9,
      i = r / 9,
      s = "".concat(0, ",", i.toFixed(2), " ").concat((e - n).toFixed(2), ",").concat((t - i).toFixed(2));
    return o().createElement("polyline", {
      points: s,
      strokeWidth: (0, c.U)(r),
      fill: "none"
    });
  }
  function Ce(e, t, r) {
    var n = r / 9,
      i = Math.max(1, Math.round(r / 16));
    return o().createElement("rect", {
      x: (e / 2 - i / 2).toFixed(2),
      y: n.toFixed(2),
      width: i,
      height: (t - 2 * n).toFixed(2),
      stroke: "none"
    });
  }
  var Se = {
    width: "0.5em"
  };
  class Ae extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderLeftParen", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? S(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? k(t, r) : (0, m._)(t, r)), (0, n.A)(this, "renderRightParen", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? A(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? O(t, r) : (0, m.d)(t, r)), (0, n.A)(this, "renderLeftBracket", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? le(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? pe(t, r) : ie(t, r)), (0, n.A)(this, "renderRightBracket", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? ce(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? ue(t, r) : oe(t, r)), (0, n.A)(this, "renderLeftBrace", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? U(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? J(t, r) : j(t, r)), (0, n.A)(this, "renderRightBrace", (e, t, r) => "Sans" == this.props.baseMathModeFontFamily ? q(t, r) : "LatinModern" == this.props.baseMathModeFontFamily || "ThickerLm" == this.props.baseMathModeFontFamily ? X(t, r) : _(t, r));
    }
    shouldComponentUpdate(e) {
      return e.baseMathModeFontFamily != this.props.baseMathModeFontFamily || e.fontSize != this.props.fontSize || e.delimiter != this.props.delimiter || !this.props.updateOnlyOnNotifyDataChanged || e.notifyData != this.props.notifyData;
    }
    render() {
      var e = this.props,
        t = (0, ge.zN)(e.baseMathModeFontFamily),
        r = (0, me.A3)(t, {
          delimiter: e.delimiter,
          fontSize: e.fontSize,
          fixedContextHandler: e.fixedContextHandler,
          notifyData: e.notifyData,
          zIndex: e.zIndex,
          stretchToParent: e.stretchToParent
        }),
        n,
        i,
        s,
        a,
        l;
      if (r) return r;
      var c = this.props.zIndex;
      switch (e.delimiter) {
        case "open-brace":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: c ? {
              width: "0.5em",
              zIndex: c
            } : Se,
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderLeftBrace,
            changedData: this.props.notifyData
          });
        case "close-brace":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: c ? {
              width: "0.5em",
              zIndex: c
            } : Se,
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderRightBrace,
            changedData: this.props.notifyData
          });
        case "open-bracket":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              width: "0.45em",
              zIndex: c
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderLeftBracket,
            changedData: this.props.notifyData
          });
        case "close-bracket":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              width: "0.45em",
              zIndex: c
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderRightBracket,
            changedData: this.props.notifyData
          });
        case "open-parenthesis":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: c ? {
              width: "0.5em",
              zIndex: c
            } : Se,
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderLeftParen,
            changedData: this.props.notifyData
          });
        case "close-parenthesis":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: c ? {
              width: "0.5em",
              zIndex: c
            } : Se,
            getReverseScale: this.props.getReverseScale,
            renderSvg: this.renderRightParen,
            changedData: this.props.notifyData
          });
        case "open-vert":
        case "close-vert":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              zIndex: c
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: Ce,
            changedData: this.props.notifyData
          });
        case "open-Vert":
        case "close-Vert":
          n = "‖", s = "⏰";
          break;
        case "open-floor":
          n = "⌊", a = "⏶", s = "⏷";
          break;
        case "close-floor":
          n = "⌋", a = "⏸", s = "⏹";
          break;
        case "open-ceil":
          n = "⌊", i = "⏲", s = "⏳";
          break;
        case "close-ceil":
          n = "⌋", i = "⏴", s = "⏵";
          break;
        case "open-uparrow":
        case "close-uparrow":
          n = "↑", i = "⏺", s = "⏻";
          break;
        case "open-downarrow":
        case "close-downarrow":
          n = "↓", a = "⏼", s = "⏽";
          break;
        case "open-updownarrow":
        case "close-updownarrow":
          n = "↕", i = "⏾", a = "⏿", s = "␀";
          break;
        case "open-Uparrow":
        case "close-Uparrow":
          n = "⇑", i = "␁", s = "␂";
          break;
        case "open-Downarrow":
        case "close-Downarrow":
          n = "↓", a = "␃", s = "␄";
          break;
        case "open-Updownarrow":
        case "close-Updownarrow":
          n = "⇕", i = "␁", a = "␃f", s = "␄";
          break;
        case "open-angle":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              zIndex: c,
              overflow: "visible"
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: (e, t, r) => ye(e, t, r, this.props.angleMoreSpace),
            changedData: this.props.notifyData
          });
        case "close-angle":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              zIndex: c,
              overflow: "visible"
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: (e, t, r) => ve(e, t, r, this.props.angleMoreSpace),
            changedData: this.props.notifyData
          });
        case "open-slash":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              zIndex: c
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: be,
            changedData: this.props.notifyData
          });
        case "close-slash":
          return o().createElement(g.A, {
            heightShouldNotBeSmall: !0,
            fixedContextHandler: this.props.fixedContextHandler,
            style: {
              zIndex: c
            },
            getReverseScale: this.props.getReverseScale,
            renderSvg: xe,
            changedData: this.props.notifyData
          });
      }
      var d = e.fontSizeEm;
      return d || (d = fe.bind(this, e.delimiter, e.fontSize)), o().createElement(u, {
        fixedContextHandler: this.props.fixedContextHandler,
        baseMathModeFontFamily: t.constructionFallback || this.props.baseMathModeFontFamily,
        zIndex: c,
        getReverseScale: this.props.getReverseScale,
        fontSizeEm: d,
        fontSize: e.fontSize,
        className: e.delimiter,
        heightChar: n,
        startChar: i,
        middleChar: l,
        repeatChar: s,
        endChar: a
      });
    }
  }
};
