/* module 7258 — 21931 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    eS: () => Q,
    kO: () => K,
    oB: () => ee,
    PY: () => q,
    t8: () => U,
    zc: () => H,
    si: () => _,
    _S: () => j,
    $9: () => J,
    tZ: () => V,
    A3: () => N,
    Mt: () => $,
    wb: () => W,
    AI: () => X,
    Q5: () => Z,
    qJ: () => Y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(37566),
    c = r(12481),
    d = r(59769);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var u = {
    "open-parenthesis": "(",
    "close-parenthesis": ")",
    "open-bracket": "[",
    "close-bracket": "]",
    "open-brace": "{",
    "close-brace": "}",
    "open-floor": "⌊",
    "close-floor": "⌋",
    "open-ceil": "⌈",
    "close-ceil": "⌉",
    "open-vert": "|",
    "close-vert": "|",
    "open-Vert": "‖",
    "close-Vert": "‖",
    "open-slash": "/",
    "close-slash": "\\",
    "open-angle": "⟨",
    "close-angle": "⟩"
  };
  function g(e, t) {
    var r,
      n = e.source(),
      i = u[t];
    return n && (n.vertical[i] || "axis-fit" === e.svg.largestVariantOverflow && null !== (r = n.symbols) && void 0 !== r && r[i]) ? i : null;
  }
  function m(e, t) {
    var r = e.source(),
      n = g(e, t);
    if (!n) return null;
    var i = r.vertical[n],
      o = i ? i.variants.map(e => e.glyph).concat((i.parts || []).map(e => e.glyph)) : [r.symbols[n]];
    return Math.max(...o.map(e => Math.max(r.glyphs[e].width, r.glyphs[e].bounds[2] - Math.min(0, r.glyphs[e].bounds[0])))) / r.unitsPerEm + e.svg.delimiterWidthPaddingEm;
  }
  function f(e, t, r, n, i, s) {
    var a = e.source();
    return o().createElement("g", {
      "data-math-font": e.id,
      "data-math-symbol": t,
      "data-construction-mode": r.mode,
      "data-extender-repeats": r.repeats,
      "data-part-count": r.placements.length,
      transform: "translate(".concat(i - r.bounds[0] * n, ",").concat(s + r.bounds[3] * n, ") scale(").concat(n, ",").concat(-n, ")")
    }, r.placements.map((e, t) => o().createElement("g", {
      key: t,
      transform: "translate(".concat(e.x, ",").concat(e.y, ")")
    }, o().createElement("path", {
      d: a.glyphs[e.glyph].path,
      stroke: "none"
    }))));
  }
  class y extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderGlyph", (e, t) => {
        if (![e, t, this.props.fontSize].every(e => Number.isFinite(e) && e > 0)) return null;
        var r = this.props.font,
          n = r.source(),
          i = g(r, this.props.delimiter),
          s = this.props.fontSize / n.unitsPerEm,
          a = this.props.fontSize * r.svg.delimiterInsetEm,
          l = (0, d.H)(n, i, Math.max(1, t - 2 * a) / s);
        if (!l) {
          if ("axis-fit" !== r.svg.largestVariantOverflow) return null;
          var c = n.vertical[i],
            h = c ? c.variants[c.variants.length - 1].glyph : n.symbols[i],
            p = n.glyphs[h];
          if (!p) return null;
          var u = Math.max(1, t - 2 * a) / (p.bounds[3] - p.bounds[1]),
            m = (p.bounds[2] - p.bounds[0]) * s;
          return o().createElement("g", {
            "data-math-font": r.id,
            "data-math-symbol": i,
            "data-construction-mode": "source-axis-fit",
            "data-source-glyph": h,
            transform: "translate(".concat((e - m) / 2 - p.bounds[0] * s, ",").concat(a + p.bounds[3] * u, ") scale(").concat(s, ",").concat(-u, ")")
          }, o().createElement("path", {
            d: p.path,
            stroke: "none"
          }));
        }
        var y = s * l.fit,
          v;
        return f(r, i, l, y, (e - (l.bounds[2] - l.bounds[0]) * y) / 2, a);
      });
    }
    render() {
      return o().createElement(c.A, {
        fixedContextHandler: this.props.fixedContextHandler,
        heightShouldNotBeSmall: !0,
        className: this.props.font.svg.classPrefix + "-delimiter",
        dimensionChangedInStyle: !0,
        style: {
          width: m(this.props.font, this.props.delimiter) * this.props.fontSize,
          fontSize: this.props.fontSize,
          height: this.props.stretchToParent ? "auto" : "100%",
          alignSelf: this.props.stretchToParent ? "stretch" : void 0,
          zIndex: this.props.zIndex,
          overflow: "visible"
        },
        changedData: {
          family: this.props.font.id,
          delimiter: this.props.delimiter,
          data: this.props.notifyData
        },
        renderSvg: this.renderGlyph
      });
    }
  }
  function v(e, t, r, n) {
    var i = e.source(),
      s = n ? "⏟" : "⏞",
      a = r / i.unitsPerEm,
      l = (0, d.H)(i, s, Math.max(t, 1) / a, !0),
      c = a * l.fit,
      h = (l.bounds[3] - l.bounds[1]) * c;
    return o().createElement("brace-top-wrapper", {
      className: e.svg.classPrefix + "-horizontal-brace",
      style: {
        width: t,
        height: h,
        flexShrink: 0
      }
    }, o().createElement("svg", {
      width: t,
      height: h,
      style: {
        overflow: "visible",
        display: "block"
      }
    }, f(e, s, l, c, 0, 0)));
  }
  function b(e, t, r, n, i) {
    if (![t, r, n].every(e => Number.isFinite(e) && e > 0)) return null;
    var o = e.source(),
      s = i ? "⏝" : "⏜",
      a = n / o.unitsPerEm,
      l = Math.max(o.minConnectorOverlap, (e.arcs.minimumConnectorOverlapEm || 0) * o.unitsPerEm),
      c = (0, d.H)(o, s, t / a, !0, l);
    if (!c) return null;
    var h = a * c.fit,
      p = (c.bounds[3] - c.bounds[1]) * h,
      u = (e.arcs.insetEm || 0) * n,
      g;
    return f(e, s, c, h, 0, i ? u : Math.max(0, r - p - u));
  }
  class x extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "drawing", void 0), (0, n.A)(this, "renderGlyph", (e, t) => {
        var r = this.props.font,
          n = r.source(),
          i = this.props.fontSize / n.unitsPerEm,
          s = (0, d.H)(n, "√", t / i);
        if (!s) return null;
        var a = i * s.fit,
          l = (s.bounds[2] - s.bounds[0]) * a,
          c = n.radicalRuleThickness * a;
        return o().createElement("g", p({}, r.svg.radicalAttributes), f(r, "√", s, a, 0, 0), o().createElement("rect", {
          x: l - c,
          y: 0,
          width: Math.max(0, e - l + c),
          height: c,
          stroke: "none"
        }));
      });
    }
    invalidateDrawing() {
      var e;
      null === (e = this.drawing) || void 0 === e || e.invalidateDrawing();
    }
    render() {
      return o().createElement(c.A, {
        ref: e => this.drawing = e,
        className: this.props.font.svg.classPrefix + "-radical",
        fixedContextHandler: this.props.fixedContextHandler,
        changedData: this.props.notifyData,
        style: {
          width: "100%",
          height: "100%",
          fontSize: this.props.fontSize,
          overflow: "visible"
        },
        renderSvg: this.renderGlyph
      });
    }
  }
  class C {
    constructor(e) {
      (0, n.A)(this, "points", void 0), this.points = a().chunk(e, 2).map(e => ({
        x: e[0],
        y: e[1]
      }));
    }
    getPoints(e, t, r) {
      var n = 18 / e * 43,
        i = this.toScaledPoints(n),
        o = t / e;
      return i = this.translateToCorrectPosition(i, e, t), i = this.extendTopLineToPositionX(i, r), i = this.extendTopLineToPositionY(i, o), i = this.calculateValleyPoint(i);
    }
    calculateValleyPoint(e) {
      var t = Math.abs(e[4].y - e[5].y),
        r = this.findLineEquation(e[1], e[2]),
        n = this.findLineEquation(e[6], e[7]);
      n.b -= t * Math.sqrt(1 + Math.pow(n.a, 2));
      var i = r.a - n.a,
        o,
        s = (n.b - r.b) / i,
        a = this.findPointYByX(s, r);
      return e[2] = {
        x: s,
        y: a
      }, e;
    }
    findLineEquation(e, t) {
      var r = (t.y - e.y) / (t.x - e.x),
        n;
      return {
        a: r,
        b: e.y - r * e.x
      };
    }
    findPointYByX(e, t) {
      return t.a * e + t.b;
    }
    extendTopLineToPositionY(e, t) {
      var r = e[5].y - e[4].y;
      return e[3].y = 0, e[4].y = 0, e[5].y = r, e[6].y = r, e[6].x += t / 15, e;
    }
    extendTopLineToPositionX(e, t) {
      return e[4].x = t, e[5].x = t, e;
    }
    toScaledPoints(e) {
      return a().map(this.points, t => ({
        x: t.x / e,
        y: t.y / e
      }));
    }
    translateToCorrectPosition(e, t, r) {
      var n = a().maxBy(e, e => e.y).y,
        i = t / 18 / 5;
      return a().map(e, e => ({
        x: e.x,
        y: e.y - n + r + i
      }));
    }
  }
  class S {
    constructor() {
      (0, n.A)(this, "arr", [16, 596, 218, 488, 425, 927, 745, 23, 1590, 23, 1590, 71, 774, 71, 418, 1156, 141, 576, 29, 618]), (0, n.A)(this, "draw", new C(this.arr));
    }
    getPoints(e, t, r) {
      return this.draw.getPoints(e, t, r);
    }
  }
  const A = new S();
  class w {
    constructor() {
      (0, n.A)(this, "arr", [46, 596, 218, 488, 425, 927, 745, 23, 1590, 23, 1590, 93, 789, 93, 475, 994, 385, 994, 184, 586, 46, 664]), (0, n.A)(this, "draw", new C(this.arr));
    }
    getPoints(e, t, r) {
      return this.draw.getPoints(e, t, r);
    }
  }
  var E = new w();
  function k(e, t) {
    if (!e || !Number.isFinite(t) || t <= 0) return null;
    var r = e.axis,
      n = e.bounds.slice(),
      i = n[r + 2] - n[r],
      o = Math.min(1, t / i),
      s = Math.max(0, t - i),
      a = e.contours.map(t => t.map(t => {
        var n = t.slice();
        return n[r] > e.cut && (n[r] += s), n;
      })),
      l;
    return n[r + 2] += s, {
      path: e.commands ? e.commands.map(t => t.op + t.points.map(t => {
        var n = t.slice();
        return n[r] > e.cut && (n[r] += s), n.join(",");
      }).join(" ")).join("") : a.map(e => e.map((e, t) => "".concat(t ? "L" : "M").concat(e[0], ",").concat(e[1])).join("") + "Z").join(""),
      bounds: n,
      fit: o,
      extension: s
    };
  }
  var O = {
    uparrow: "↑",
    downarrow: "↓",
    updownarrow: "↕",
    Uparrow: "⇑",
    Downarrow: "⇓",
    Updownarrow: "⇕"
  };
  function D(e) {
    return O[e.replace(/^(open|close)-/, "")];
  }
  function P(e, t, r, n, i) {
    if (![r, n, i].every(e => Number.isFinite(e) && e > 0)) return null;
    var s = e.source(),
      a = s.arrows[t],
      l = 1 === a.axis,
      c = l ? (e.arrows.delimiterInsetEm || 0) * i : 0,
      d = i / s.unitsPerEm,
      h = k(a, Math.max(1, (l ? n : r) - 2 * c) / d);
    if (!h) return null;
    var p = d * h.fit,
      u = (h.bounds[2] - h.bounds[0]) * p,
      g = (h.bounds[3] - h.bounds[1]) * p,
      m = l ? (r - u) / 2 : 0,
      f = l ? c : (n - g) / 2;
    return o().createElement("g", {
      "data-math-font": e.id,
      "data-math-symbol": t,
      "data-construction-mode": "source-outline",
      "data-source-glyph": a.glyph,
      "data-shaft-extension": h.extension,
      transform: "translate(".concat(m - h.bounds[0] * p, ",").concat(f + h.bounds[3] * p, ") scale(").concat(p, ",").concat(-p, ")")
    }, o().createElement("path", {
      d: h.path,
      stroke: "none"
    }));
  }
  class M extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "drawing", void 0), (0, n.A)(this, "renderGlyph", (e, t) => P(this.props.font, this.props.char, e, t, this.props.fontSize));
    }
    invalidateDrawing() {
      var e;
      null === (e = this.drawing) || void 0 === e || e.invalidateDrawing();
    }
    render() {
      return o().createElement(c.A, {
        ref: e => this.drawing = e,
        fixedContextHandler: this.props.fixedContextHandler,
        className: this.props.font.svg.classPrefix + "-arrow",
        dimensionChangedInStyle: !0,
        heightShouldNotBeSmall: !0,
        style: this.props.style,
        changedData: {
          family: this.props.font.id,
          char: this.props.char,
          data: this.props.notifyData
        },
        renderSvg: this.renderGlyph
      });
    }
  }
  function I(e, t, r, n, i, s) {
    if (![r, n, i].every(e => Number.isFinite(e) && e > 0)) return null;
    var a = e.source(),
      l = e.accents.glyphs[t],
      c = a.symbols[l],
      d = a.glyphs[c],
      h = e.accents.wide;
    if (s && r / i > h.nativeMaxWidthEm) {
      var p = h.strokeEm * i,
        u = p / 2,
        g = r - p / 2,
        m = n - e.accents.insetEm * i - p / 2,
        f = Math.min(h.riseEm * i, r / 3, m - p / 2),
        y = m - f,
        v = (u + g) / 2,
        b = g - u,
        x = (y + m) / 2,
        C,
        S = "hat" === h.shapes[t] ? "M".concat(u, ",").concat(m, "L").concat(v, ",").concat(y, "L").concat(g, ",").concat(m) : "M".concat(u, ",").concat(x + .2 * f, "C").concat(u + .08 * b, ",").concat(x - .15 * f, " ").concat(u + .12 * b, ",").concat(y, " ").concat(u + .25 * b, ",").concat(y) + "C".concat(u + .36 * b, ",").concat(y, " ").concat(u + .4 * b, ",").concat(x - .15 * f, " ").concat(v, ",").concat(x) + "C".concat(u + .6 * b, ",").concat(x + .15 * f, " ").concat(u + .64 * b, ",").concat(m, " ").concat(u + .75 * b, ",").concat(m) + "C".concat(u + .88 * b, ",").concat(m, " ").concat(u + .92 * b, ",").concat(x + .15 * f, " ").concat(g, ",").concat(x - .2 * f);
      return o().createElement("g", {
        "data-math-font": e.id,
        "data-math-symbol": l,
        "data-construction-mode": "metric-geometry"
      }, o().createElement("path", {
        d: S,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: p,
        strokeLinecap: "butt",
        strokeLinejoin: "miter"
      }));
    }
    var A = i / a.unitsPerEm,
      w = d.bounds[2] - d.bounds[0],
      E = d.bounds[3] - d.bounds[1],
      k = Math.min(1, r / (w * A)),
      O = A * k,
      D = A * k,
      P = (r - w * O) / 2 + (s ? 0 : e.accents.centerOffsetEm * i),
      M = n - E * D - e.accents.insetEm * i;
    return o().createElement("g", {
      "data-math-font": e.id,
      "data-math-symbol": l,
      "data-source-glyph": c,
      "data-construction-mode": "source-glyph",
      transform: "translate(".concat(P - d.bounds[0] * O, ",").concat(M + d.bounds[3] * D, ") scale(").concat(O, ",").concat(-D, ")")
    }, o().createElement("path", {
      d: d.path,
      stroke: "none"
    }));
  }
  class T extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "drawing", void 0), (0, n.A)(this, "renderGlyph", (e, t) => I(this.props.font, this.props.command, e, t, this.props.fontSize, !1));
    }
    invalidateDrawing() {
      var e;
      null === (e = this.drawing) || void 0 === e || e.invalidateDrawing();
    }
    render() {
      return o().createElement(c.A, {
        ref: e => this.drawing = e,
        fixedContextHandler: this.props.fixedContextHandler,
        className: this.props.font.svg.classPrefix + "-accent",
        dimensionChangedInStyle: !0,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "visible"
        },
        changedData: {
          family: this.props.font.id,
          command: this.props.command,
          data: this.props.notifyData
        },
        renderSvg: this.renderGlyph
      });
    }
  }
  function L(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function R(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? L(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var B = {
      asana: A,
      sans: E
    },
    F = {
      legacy: {
        render: (e, t) => o().createElement("svg", {
          style: {
            stroke: "none"
          }
        }, o().createElement("polygon", {
          ref: t.polygonRef,
          points: ""
        })),
        update(e, t) {
          var r = B[e.radical.legacyShape].getPoints(t.fontSize, t.height, t.width),
            n = a().map(r, e => e.x.toFixed(2) + "," + e.y.toFixed(2)).join(" ");
          l.Bq(t.polygon, "points", n);
        }
      },
      opentype: {
        render: (e, t) => o().createElement(x, {
          font: e,
          fontSize: t.fontSize,
          notifyData: t.notifyData,
          fixedContextHandler: t.fixedContextHandler,
          ref: t.drawingRef
        }),
        update(e, t) {
          var r;
          null === (r = t.drawing) || void 0 === r || r.invalidateDrawing();
        }
      }
    };
  function j(e) {
    return F[e.radical.renderer];
  }
  function _(e, t) {
    var r = z(e, D(t));
    return r ? (r.bounds[2] - r.bounds[0]) / e.source().unitsPerEm + (e.arrows.delimiterPaddingEm || 0) : e.source ? m(e, t) : void 0;
  }
  function N(e, t) {
    var r = D(t.delimiter),
      n;
    return z(e, r) ? o().createElement(M, {
      font: e,
      char: r,
      fontSize: t.fontSize,
      fixedContextHandler: t.fixedContextHandler,
      notifyData: t.notifyData,
      style: {
        width: _(e, t.delimiter) * t.fontSize,
        fontSize: t.fontSize,
        height: t.stretchToParent ? "auto" : "100%",
        alignSelf: t.stretchToParent ? "stretch" : void 0,
        zIndex: t.zIndex,
        overflow: "visible"
      }
    }) : e.source && g(e, t.delimiter) ? o().createElement(y, R(R({}, t), {}, {
      font: e
    })) : void 0;
  }
  function z(e, t) {
    var r, n;
    return "source-outline" === e.arrows.renderer && e.source && (null === (r = e.source()) || void 0 === r || null === (n = r.arrows) || void 0 === n ? void 0 : n[t]);
  }
  function H(e, t) {
    var r = z(e, t);
    if (r && 0 === r.axis) return {
      heightEm: (r.bounds[3] - r.bounds[1]) / e.source().unitsPerEm + 2 * (e.arrows.labelClearanceEm || 0),
      marginEm: e.arrows.labelMarginEm || 0
    };
  }
  function W(e, t) {
    var r = z(e, t.char);
    if (r && 0 === r.axis) return o().createElement(M, R(R({
      font: e
    }, t), {}, {
      ref: t.drawingRef
    }));
  }
  function V(e, t, r, n, i) {
    if (z(e, t)) return P(e, t, r, n, i);
  }
  function U(e) {
    return "source-outline" === e.arrows.renderer ? e.id : void 0;
  }
  function q(e, t) {
    if (void 0 !== e.arrows.accentBoxHeightEm) return {
      height: "".concat(e.arrows.accentBoxHeightEm, "em"),
      marginBottom: "".concat(t ? e.arrows.accentSmallMarginEm : e.arrows.accentOtherMarginEm, "em")
    };
  }
  function G(e, t) {
    var r,
      n,
      i,
      o = null === (r = e.accents) || void 0 === r ? void 0 : r.glyphs[t],
      s = o && (null === (n = e.source) || void 0 === n ? void 0 : n.call(e)),
      a = null == s || null === (i = s.symbols) || void 0 === i ? void 0 : i[o];
    return a && s.glyphs[a];
  }
  function K(e, t, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = arguments.length > 4 ? arguments[4] : void 0,
      o = G(e, t);
    if (o) {
      var s = r ? e.accents.smallMarginEm : e.accents.otherMarginEm,
        a = e.source(),
        l = Array.from(i || "").filter(e => !/\s/.test(e)).map(e => {
          var t;
          return null === (t = a.accentBaseHeights) || void 0 === t ? void 0 : t[e];
        });
      return !n && l.length && l.every(e => void 0 !== e) && void 0 !== e.accents.baseAscentEm && void 0 !== e.accents.gapEm && (s = e.accents.gapEm - e.accents.baseAscentEm + Math.max(...l) / a.unitsPerEm - e.accents.insetEm), R({
        height: "".concat(e.accents.boxHeightEm, "em"),
        marginBottom: "".concat(s, "em")
      }, n ? {} : {
        minWidth: "".concat((o.bounds[2] - o.bounds[0]) / e.source().unitsPerEm + 2 * e.accents.insetEm, "em")
      });
    }
  }
  function Z(e, t) {
    if (G(e, t.command)) return o().createElement(T, R(R({
      font: e
    }, t), {}, {
      ref: t.drawingRef
    }));
  }
  function Y(e, t, r, n, i) {
    var o;
    if ("geometry" === (null === (o = e.accents) || void 0 === o ? void 0 : o.wide.renderer) && e.accents.wide.shapes[t] && G(e, t)) return I(e, t, r, n, i, !0);
  }
  function Q(e) {
    return e.accents ? e.id : void 0;
  }
  function J(e, t) {
    var r,
      n,
      i,
      o,
      s = null === (r = e.standaloneSymbols) || void 0 === r ? void 0 : r[t];
    return s && null !== (n = e.source) && void 0 !== n && null !== (i = n.call(e)) && void 0 !== i && null !== (o = i.symbols) && void 0 !== o && o[s] ? e.constructionFont : void 0;
  }
  function X(e, t, r, n) {
    var i;
    if (e.source && null !== (i = e.source()) && void 0 !== i && i.horizontal[n ? "⏟" : "⏞"]) return v(e, t, r, n);
  }
  function $(e, t, r, n, i) {
    var o;
    if ("opentype" === e.arcs.renderer && e.source && null !== (o = e.source()) && void 0 !== o && o.horizontal[i ? "⏝" : "⏜"]) return b(e, t, r, n, i);
  }
  function ee(e) {
    return "opentype" === e.arcs.renderer ? e.id : void 0;
  }
};
