/* module 66977 — 61700 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    c: () => oe
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(17196),
    a = r(34651),
    l = r(38070),
    c = r(2543),
    d = r.n(c);
  class h {
    drawPoint(e, t) {
      var r = t.view,
        n = t.domainToViewScale,
        i = t.domain,
        o = r.viewHeight,
        s = r.p1,
        a = r.p2;
      return {
        x: s.x + (e.x - i.xDomain.from) * n.x,
        y: d().clamp(s.y + o - (e.y - i.yDomain.from) * n.y, s.y - o, a.y + o)
      };
    }
    regionToSvg(e, t, r) {
      for (var n = "", i = t.view, o = t.domainToViewScale, s = t.domain, a = o.x, l = o.y, c = i.p1, h = i.viewHeight, p = c.x, u = c.y, g = s.xDomain.from, m = s.yDomain.from, f = i.p1, y = i.p2, v = 0; v < e.length; v++) {
        for (var b = e[v], x = 0; x < b.length; x++) {
          var C = b[x],
            S = d().clamp(u + h - (C.y - m) * l, f.y - h, y.y + h),
            A = p + (C.x - g) * a,
            w;
          n += " ".concat(0 == x ? "M" : "L").concat(A.toFixed(2), ",").concat(S.toFixed(2));
        }
        r && (n += " Z");
      }
      return n;
    }
    regionToSvgByY(e, t, r) {
      for (var n = "", i = t.view, o = t.domainToViewScale, s = t.domain, a = o.x, l = o.y, c = i.p1, h = i.viewHeight, p = i.viewWidth, u = c.x, g = c.y, m = s.xDomain.from, f = s.yDomain.from, y = i.p1, v = i.p2, b = 0; b < e.length; b++) {
        for (var x = e[b], C = 0; C < x.length; C++) {
          var S = x[C],
            A = g + h - (S.x - f) * l,
            w = d().clamp(u + (S.y - m) * a, y.x - p, v.x + p),
            E;
          n += " ".concat(0 == C ? "M" : "L").concat(w.toFixed(2), ", ").concat(A.toFixed(2));
        }
        r && (n += " Z");
      }
      return n;
    }
  }
  var p = new h();
  class u extends o().Component {
    render() {
      var e = this.props.plotExpressionResponse,
        t;
      return e.expression.type ? o().createElement("g", null) : e.expression.switchXToY ? this.renderDisplayXSwitchedByY() : this.renderDisplay();
    }
    renderDisplayXSwitchedByY() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r),
        c = p.regionToSvgByY(s, n, !1),
        d = a.style;
      return o().createElement("path", {
        d: c,
        style: d
      });
    }
    renderDisplay() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r),
        c = p.regionToSvg(s, n, !1),
        d = a.style;
      return o().createElement("path", {
        d: c,
        style: d
      });
    }
  }
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends o().Component {
    render() {
      var e = this.props.plotExpressionResponse,
        t;
      return e.expression.type ? o().createElement("g", null) : e.expression.switchXToY ? this.renderSwitchXToY() : this.renderNormal();
    }
    renderSwitchXToY() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = n.domain,
        c = i,
        d = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType", "fillColor"], void 0, r),
        h = ">" == c.comparison || "≥" == c.comparison ? ">" : "<",
        u = s.map(e => this.closePointForInequality(e, a.xDomain, h)),
        g = p.regionToSvgByY(s, n, !1),
        f = p.regionToSvgByY(u, n, !0),
        y = m(m({}, d.style), {}, {
          fill: "none"
        }),
        v = {
          fill: d.style.fill,
          fillOpacity: d.style.fillOpacity,
          stroke: "none"
        };
      return o().createElement("g", null, o().createElement("path", {
        d: f,
        style: v
      }), o().createElement("path", {
        d: g,
        style: y
      }));
    }
    renderNormal() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = n.domain,
        c = i,
        d = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType", "fillColor"], void 0, r),
        h = ">" == c.comparison || "≥" == c.comparison ? ">" : "<",
        u = s.map(e => this.closePointForInequality(e, a.yDomain, h)),
        g = p.regionToSvg(s, n, !1),
        f = p.regionToSvg(u, n, !0),
        y = m(m({}, d.style), {}, {
          fill: "none"
        }),
        v = {
          fill: d.style.fill,
          fillOpacity: d.style.fillOpacity,
          stroke: "none"
        };
      return o().createElement("g", null, o().createElement("path", {
        d: f,
        style: v
      }), o().createElement("path", {
        d: g,
        style: y
      }));
    }
    closePointForGreater(e, t) {
      if (e.length <= 1) return e;
      var r = (e = d().clone(e))[0],
        n = e[e.length - 1],
        i = Math.max(r.y, n.y, t.to) + 1,
        o = {
          x: r.x,
          y: i
        },
        s = {
          x: n.x,
          y: i
        };
      return e.splice(0, 0, o), e.push(s), e;
    }
    closePointForLesser(e, t) {
      if (e.length <= 1) return e;
      var r = (e = d().clone(e))[0],
        n = e[e.length - 1],
        i = Math.min(r.y, n.y, t.from) - 1,
        o = {
          x: r.x,
          y: i
        },
        s = {
          x: n.x,
          y: i
        };
      return e.splice(0, 0, o), e.push(s), e;
    }
    closePointForInequality(e, t, r) {
      return ">" == r ? this.closePointForGreater(e, t) : this.closePointForLesser(e, t);
    }
  }
  class y extends o().Component {
    render() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a;
      return "bounded-inequality" !== i.type ? o().createElement("g", null) : i.switchXToY ? this.renderSwitchXToY(s) : this.renderNormal(s);
    }
    renderNormal(e) {
      var t = this.props,
        r = t.plotExpressionResponse,
        n = t.styleId,
        i = t.containerSettings,
        s = r.expression,
        a = l.A.getReactStyleInfo(s.style, ["thickness", "strokeColor", "strokeType", "fillColor"], void 0, n),
        c = p.regionToSvg(e, i, !0),
        d = {
          fill: a.style.fill,
          fillOpacity: a.style.fillOpacity,
          stroke: a.style.stroke,
          strokeWidth: a.style.strokeWidth
        };
      return o().createElement("g", null, o().createElement("path", {
        d: c,
        style: d
      }));
    }
    renderSwitchXToY(e) {
      var t = this.props,
        r = t.plotExpressionResponse,
        n = t.styleId,
        i = t.containerSettings,
        s = r.expression,
        a = l.A.getReactStyleInfo(s.style, ["thickness", "strokeColor", "strokeType", "fillColor"], void 0, n),
        c = p.regionToSvgByY(e, i, !0),
        d = {
          fill: a.style.fill,
          fillOpacity: a.style.fillOpacity,
          stroke: a.style.stroke,
          strokeWidth: a.style.strokeWidth
        };
      return o().createElement("g", null, o().createElement("path", {
        d: c,
        style: d
      }));
    }
  }
  class v extends o().Component {
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r),
        c = p.regionToSvg(s, n, !1),
        d = a.style;
      return o().createElement("path", {
        d: c,
        style: d
      });
    }
  }
  class b extends o().Component {
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r),
        c = p.regionToSvg(s, n, !1),
        d = a.style;
      return o().createElement("path", {
        d: c,
        style: d
      });
    }
  }
  var x = r(25005);
  class C extends o().Component {
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      var e = this.props.plotExpressionResponse.expression;
      return e.style && "line" == e.style.pType ? this.drawLine() : this.drawPoints();
    }
    drawLine() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.styleId,
        n = e.containerSettings,
        i = t.expression,
        s = t.regions,
        a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r),
        c = p.regionToSvg(s, n, !1),
        d = a.style;
      return o().createElement("path", {
        d: c,
        style: d
      });
    }
    drawPoints() {
      var e,
        t,
        r = this.props,
        n = r.plotExpressionResponse,
        i = r.styleId,
        s = r.containerSettings,
        a = n.expression,
        c = n.regions,
        d = a.style,
        h = void 0 === d ? {} : d,
        u = l.A.getReactStyleInfo(a.style, ["thickness", "strokeColor", "strokeType", "fillColor"], void 0, i),
        g = null !== (e = h.pSize) && void 0 !== e ? e : 6,
        m = null !== (t = h.pType) && void 0 !== t ? t : "o";
      return "line" == m ? o().createElement("g", null) : o().createElement("g", null, c[0].map((e, t) => {
        var r = p.drawPoint(e, s);
        return x.I.draw(r, g, m, t, u.style);
      }));
    }
  }
  var S = r(48541);
  class A extends o().Component {
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      var e = this.props,
        t = e.plotExpressionResponse,
        r = e.containerSettings,
        n = e.styleId,
        i = t.expression,
        s = t.regions[0];
      if (!s || s.length <= 0) return o().createElement("g", null);
      for (var a = i.style, c = i.head, d = i.tail, h = [], u = l.A.getReactStyleInfo(i.style, ["strokeColor", "thickness", "strokeType"], "#000", n), g = 0; g < s.length; g += 2) {
        var m;
        if (s[g] && s[g + 1]) {
          var f = p.drawPoint(s[g], r),
            y = p.drawPoint(s[g + 1], r);
          h.push(o().createElement(S.Ay, {
            key: g,
            type: "straight",
            tail: d || "no",
            head: c || "no",
            mAngleBy: 0,
            shaft: "-",
            middle: void 0,
            thickness: null !== (m = null == a ? void 0 : a.thickness) && void 0 !== m ? m : 1,
            headScale: 1,
            data: [f, y],
            onMouseDown: () => {},
            className: "vector-plot",
            isSelected: !1,
            isGroupSelected: !1,
            isRemoteSelected: !1,
            remoteSelectedColor: void 0,
            settings: void 0,
            htmlStyleInfo: u
          }));
        }
      }
      return o().createElement("g", null, h);
    }
  }
  var w = r(19539);
  class E extends o().Component {
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      for (var e = this.props, t = e.plotExpressionResponse, r = e.styleId, n = e.containerSettings, i = t.expression, s = t.regions, a = l.A.getReactStyleInfo(i.style, ["thickness", "strokeColor", "strokeType"], void 0, r), c = s[0], d = s[1], h = n.domainToViewScale, u = h.x, g = h.y, m = new Array(c.length), f = 0; f < c.length; f++) {
        var y = c[f],
          v = d[f],
          b = p.drawPoint(y, n),
          x = {
            x: v.x * u,
            y: -v.y * g
          },
          C = {
            x: b.x + x.x,
            y: b.y + x.y
          },
          S = w.A.angleFrom2Points360P(b, C),
          A = w.A.pointRotate({
            x: C.x - 6,
            y: C.y
          }, C, S + 35),
          E = w.A.pointRotate({
            x: C.x - 6,
            y: C.y
          }, C, S - 35),
          k = "M".concat(b.x.toFixed(2), ",").concat(b.y.toFixed(2), " L").concat(C.x.toFixed(2), ",").concat(C.y.toFixed(2)),
          O = "M".concat(E.x.toFixed(2), ",").concat(E.y.toFixed(2), "  L").concat(C.x.toFixed(2), ",").concat(C.y.toFixed(2), " L").concat(A.x.toFixed(2), ",").concat(A.y.toFixed(2));
        m[f] = "".concat(k, " ").concat(O);
      }
      var D = m.join(" "),
        P = a.style;
      return o().createElement("path", {
        d: D,
        style: P
      });
    }
  }
  var k = r(60441),
    O = r(86562),
    D = r(39314),
    P = () => Promise.all([r.e(54), r.e(538)]).then(r.bind(r, 58673));
  class M extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "loading", !1);
    }
    componentDidMount() {
      this.mounted = !0, this.load();
    }
    componentDidUpdate() {
      this.load();
    }
    componentWillUnmount() {
      this.mounted = !1;
    }
    load() {
      this.loading || this.state.preview || (this.loading = !0, P().then(e => {
        this.mounted && this.setState({
          preview: e
        });
      }).catch(e => {
        console.warn("Unable to load orbit preview", e);
      }).then(() => {
        this.loading = !1;
      }));
    }
    render() {
      return this.state.preview ? o().createElement("g", null, this.state.preview.compileAndRenderOrbitPreview(this.props)) : null;
    }
  }
  var I = 1,
    T = .99;
  function L(e, t) {
    var r = {
      x: 1 * e.x,
      y: 1 * e.y
    };
    return p.drawPoint(r, t);
  }
  function R(e, t) {
    var r = t.domainToViewScale,
      n = L({
        x: 0,
        y: 0
      }, t),
      i = (e.x - n.x) / (1 * r.x),
      o = -(e.y - n.y) / (1 * r.y),
      s;
    return i * i + o * o >= .9801 ? null : {
      x: i,
      y: o
    };
  }
  var B = r(61234);
  function F(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function j(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? F(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _ extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleHoverChange", () => {
        this.setState(e => ({
          hoverVersion: e.hoverVersion + 1
        }));
      }), (0, n.A)(this, "viewToDiscConverter", (e, t) => R({
        x: e,
        y: t
      }, this.props.containerSettings)), (0, n.A)(this, "renderOverlayContent", e => {
        var t = e.mousePos,
          r = this.props,
          n = r.styleId,
          i = r.plotExpressionResponse,
          s = L({
            x: 0,
            y: 0
          }, this.props.containerSettings),
          a = L({
            x: 1,
            y: 0
          }, this.props.containerSettings),
          l = Math.abs(a.x - s.x),
          c = [];
        if (c.push(o().createElement("circle", {
          key: "disc-highlight-".concat(n),
          cx: s.x,
          cy: s.y,
          r: l,
          fill: "rgba(33, 150, 243, 0.08)",
          stroke: "#2196f3",
          strokeWidth: 2,
          strokeDasharray: "5,5",
          pointerEvents: "none"
        })), t) {
          var d = R(t, this.props.containerSettings);
          d && c.push(o().createElement(M, {
            key: "orbit-preview-".concat(n),
            discPos: d,
            styleId: n,
            pExpr: i.expStr,
            qExpr: i.expStr2 || "",
            variables: i.variables,
            discToView: e => L(e, this.props.containerSettings),
            expression: i.expression
          }));
        }
        return o().createElement("g", {
          key: "poincare-overlay"
        }, c);
      }), this.state = {
        hoverVersion: 0
      };
    }
    componentDidMount() {
      if (this.props.inSettingArea) {
        var e = this.props.plotExpressionResponse.expression.model.id;
        k.T.registerDisplay(e, this.viewToDiscConverter, this.renderOverlayContent), O.a.subscribe(e, this.handleHoverChange);
      }
    }
    componentWillUnmount() {
      if (this.props.inSettingArea) {
        var e = this.props.plotExpressionResponse.expression.model.id;
        k.T.unregisterDisplay(e), O.a.unsubscribe(e, this.handleHoverChange);
      }
    }
    render() {
      return this.renderDisplay();
    }
    renderDisplay() {
      var e,
        t,
        r,
        n,
        i,
        s,
        a,
        c,
        d = this.props,
        h = d.plotExpressionResponse,
        p = d.styleId,
        u = h.expression,
        g = h.regions,
        m = u,
        f = l.A.getReactStyleInfo(u.style, ["thickness", "strokeColor", "strokeType"], void 0, p),
        y = [],
        v = null !== (e = this.props.currentExpression) && void 0 !== e ? e : m,
        b = null === (t = v.showBoundary) || void 0 === t || t;
      g.length > 0 && b && y.push(this.renderDiscBoundary(p));
      for (var x = null !== (r = m.showEquilibria) && void 0 !== r && r, C = null === (n = m.showBoundaryEquilibria) || void 0 === n || n, S = !0, A = null !== (i = null !== (s = v.arrowStyle) && void 0 !== s ? s : m.arrowStyle) && void 0 !== i ? i : "mid", w = x || C, E = w ? 2 : 0, k = 1, P = Math.floor((g.length - 1 - E - 1) / 4), M = null !== (a = null !== (c = v.trajectories) && void 0 !== c ? c : m.trajectories) && void 0 !== a ? a : [], I = O.a.getState(u.model.id), T = I.hoveredTrajectoryIndex, L = 0; L < P; L++) {
        var R,
          F,
          _,
          N = M[L];
        if (!1 !== (null == N ? void 0 : N.visible)) {
          var z = null !== (R = null == N ? void 0 : N.color) && void 0 !== R ? R : D.A.colorToArr(null === (F = u.style) || void 0 === F ? void 0 : F.strokeColor, D.A.greenArr),
            H,
            W = T === L ? (null !== (_ = f.style.strokeWidth) && void 0 !== _ ? _ : 2) + 2 : f.style.strokeWidth,
            V = j(j({}, f.style), {}, z ? {
              stroke: "rgb(".concat(z[0], ",").concat(z[1], ",").concat(z[2], ")"),
              strokeWidth: W
            } : {
              strokeWidth: W
            }),
            U = 1 + 4 * L,
            q = g[U],
            G = g[U + 1],
            K = g[U + 3];
          if (q && q.length > 0 && y.push(this.renderTrajectoryPath(q, "traj-fwd-".concat(L), V)), G && G.length > 0 && y.push(this.renderTrajectoryPath(G, "traj-bwd-".concat(L), V)), "none" !== A) {
            var Z = (0, B.Z)(q, G, A);
            if (Z) y.push(this.renderArrow(Z.position, Z.angle, "arrow-".concat(L), V));else if (K && K.length >= 2) {
              var Y = K[0],
                Q = K[1];
              y.push(this.renderArrow(Y, Q.x, "arrow-".concat(L), V));
            }
          }
        }
      }
      if (w) {
        var J,
          X,
          $ = 1 + 4 * P,
          ee = g[$] || [],
          te = g[$ + 1] || [],
          re = [221, 0, 0],
          ne = [255, 153, 0],
          ie = null !== (J = v.equilibriaColors) && void 0 !== J ? J : [],
          oe = null !== (X = v.boundaryEquilibriaColors) && void 0 !== X ? X : [],
          se = I.hoveredEquilibriaIndex,
          ae = I.hoveredBoundaryEquilibriaIndex;
        x && ee.forEach((e, t) => {
          var r,
            n = t % 7,
            i = null !== (r = ie[n]) && void 0 !== r ? r : re,
            o = se === n;
          y.push(this.renderEquilibriumPoint(e, "eq-finite-".concat(t), i, o));
        }), C && te.forEach((e, t) => {
          var r,
            n = t % 7,
            i = null !== (r = oe[n]) && void 0 !== r ? r : ne,
            o = ae === n;
          y.push(this.renderBoundaryEquilibriumPoint(e, "eq-boundary-".concat(t), i, o));
        });
      }
      for (var le, ce, de, he = g[1 + 4 * P + E] || [], pe = D.A.colorToArr(null === (le = u.style) || void 0 === le ? void 0 : le.strokeColor, D.A.greenArr), ue = null !== (ce = v.boundaryColor) && void 0 !== ce ? ce : pe, ge = j(j({}, f.style), {}, {
          stroke: "rgb(".concat(ue[0], ",").concat(ue[1], ",").concat(ue[2], ")")
        }), me = 0; me < he.length; me += 2) {
        var fe = he[me],
          ye = he[me + 1];
        fe && ye && y.push(this.renderBoundaryArrow(fe, ye.x, "boundary-arrow-".concat(me / 2), ge));
      }
      return o().createElement("g", {
        key: "poincare-disc"
      }, y);
    }
    renderDiscBoundary(e) {
      for (var t, r, n, i, s = 1, a = 100, c = [], d = 0; d <= a; d++) {
        var h = 2 * Math.PI * d / a;
        c.push({
          x: 1 * Math.cos(h),
          y: 1 * Math.sin(h)
        });
      }
      var p = c.map((e, t) => {
          var r = L(e, this.props.containerSettings);
          return "".concat(0 === t ? "M" : "L").concat(r.x.toFixed(2), ",").concat(r.y.toFixed(2));
        }).join(" ") + " Z",
        u = this.props.plotExpressionResponse.expression,
        g = u,
        m = null !== (t = this.props.currentExpression) && void 0 !== t ? t : g,
        f = D.A.colorToArr(null === (r = u.style) || void 0 === r ? void 0 : r.strokeColor, D.A.greenArr),
        y = null !== (n = m.boundaryColor) && void 0 !== n ? n : f,
        v = "rgb(".concat(y[0], ",").concat(y[1], ",").concat(y[2], ")"),
        b,
        x = null !== (i = l.A.getReactStyleInfo(u.style, ["thickness", "strokeColor", "strokeType"], void 0, e).style.strokeWidth) && void 0 !== i ? i : 2;
      return o().createElement("path", {
        key: "disc-boundary-".concat(e),
        d: p,
        fill: "none",
        stroke: v,
        strokeWidth: x
      });
    }
    renderTrajectoryPath(e, t, r) {
      if (e.length < 2) return o().createElement("g", {
        key: t
      });
      var n = e.map((e, t) => {
        var r = L(e, this.props.containerSettings);
        return "".concat(0 === t ? "M" : "L").concat(r.x.toFixed(2), ",").concat(r.y.toFixed(2));
      }).join(" ");
      return o().createElement("path", {
        key: t,
        d: n,
        fill: "none",
        style: j(j({}, r), {}, {
          fill: "none"
        })
      });
    }
    renderArrow(e, t, r, n) {
      if (!isFinite(e.x) || !isFinite(e.y) || !isFinite(t)) return o().createElement("g", {
        key: r
      });
      var i = L(e, this.props.containerSettings),
        s = 12,
        a = i.x,
        l = i.y,
        c = -t,
        d = c + Math.PI + .4,
        h = c + Math.PI - .4,
        p = a + s * Math.cos(d),
        u = l + s * Math.sin(d),
        g = a + s * Math.cos(h),
        m = l + s * Math.sin(h),
        f = "M".concat(p.toFixed(2), ",").concat(u.toFixed(2), " L").concat(a.toFixed(2), ",").concat(l.toFixed(2), " L").concat(g.toFixed(2), ",").concat(m.toFixed(2));
      return o().createElement("path", {
        key: r,
        d: f,
        fill: "none",
        style: j(j({}, n), {}, {
          fill: "none"
        })
      });
    }
    renderBoundaryArrow(e, t, r, n) {
      if (!isFinite(e.x) || !isFinite(e.y) || !isFinite(t)) return o().createElement("g", {
        key: r
      });
      var i = L(e, this.props.containerSettings),
        s = 14,
        a = i.x,
        l = i.y,
        c = -t,
        d = c + Math.PI + .4,
        h = c + Math.PI - .4,
        p = a + s * Math.cos(d),
        u = l + s * Math.sin(d),
        g = a + s * Math.cos(h),
        m = l + s * Math.sin(h),
        f = "M".concat(p.toFixed(2), ",").concat(u.toFixed(2), " L").concat(a.toFixed(2), ",").concat(l.toFixed(2), " L").concat(g.toFixed(2), ",").concat(m.toFixed(2));
      return o().createElement("path", {
        key: r,
        d: f,
        fill: "none",
        style: j(j({}, n), {}, {
          fill: "none"
        })
      });
    }
    renderEquilibriumPoint(e, t, r, n) {
      var i = L(e, this.props.containerSettings),
        s = "rgb(".concat(r[0], ",").concat(r[1], ",").concat(r[2], ")"),
        a = n ? 4 : 2;
      return o().createElement("g", {
        key: t
      }, o().createElement("circle", {
        cx: i.x,
        cy: i.y,
        r: 6,
        fill: "none",
        stroke: s,
        strokeWidth: a
      }), o().createElement("circle", {
        cx: i.x,
        cy: i.y,
        r: 2,
        fill: s,
        stroke: "none"
      }));
    }
    renderBoundaryEquilibriumPoint(e, t, r, n) {
      var i = L(e, this.props.containerSettings),
        s = 5,
        a = "rgb(".concat(r[0], ",").concat(r[1], ",").concat(r[2], ")"),
        l = [Math.floor(.78 * r[0]), Math.floor(.78 * r[1]), Math.floor(.78 * r[2])],
        c = "rgb(".concat(l[0], ",").concat(l[1], ",").concat(l[2], ")"),
        d = n ? 3.5 : 1.5,
        h = "M".concat(i.x, ",").concat(i.y - 5, " ") + "L".concat(i.x + 5, ",").concat(i.y, " ") + "L".concat(i.x, ",").concat(i.y + 5, " ") + "L".concat(i.x - 5, ",").concat(i.y, " Z");
      return o().createElement("path", {
        key: t,
        d: h,
        fill: a,
        stroke: c,
        strokeWidth: d
      });
    }
  }
  var N = r(65706),
    z = r(55451);
  class H extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "plotRun", new a.A()), (0, n.A)(this, "delayRun", z.A.createLaterRunObject("latest", 10)), (0, n.A)(this, "runRequestPlotDelayed", () => {
        this.requestPlot(this.props);
      }), (0, n.A)(this, "handlePlotFinish", e => {
        var t = e.status,
          r = e.data;
        if ("running" != t) {
          var n = r.expressions.filter(e => "error" == e.type).map(e => ({
            modelId: e.expression.model.id,
            message: e.message
          }));
          this.props.onRendered(n), this.setState({
            plotResult: r
          });
        }
      }), this.state = {
        plotResult: {
          responseType: "plot",
          expressions: []
        }
      };
    }
    componentWillMount() {
      this.requestPlot(this.props);
    }
    shouldComponentUpdate(e, t) {
      if (t.plotResult != this.state.plotResult) return !0;
      var r = e.expressions != this.props.expressions || e.variables != this.props.variables || e.settings != this.props.settings;
      return r && this.delayRun.later(this.runRequestPlotDelayed), r;
    }
    requestPlot(e) {
      var t = e.expressions,
        r = e.settings,
        n = e.variables,
        i = t.filter(e => !e.hidden).map(e => {
          var t, i;
          return "vector-field" == e.type ? t = s.A.editorModelToExpression(e.jmodel) : "bounded-inequality" == e.type ? t = s.A.editorModelToExpression(e.upperModel) : "poincare-disc" == e.type && (t = s.A.editorModelToExpression(e.qmodel)), {
            expStr: s.A.editorModelToExpression(e.model),
            expStr2: t,
            expression: e,
            settings: r,
            variables: N.r.buildVariableScope(n)
          };
        });
      this.plotRun.plot(i).then(this.handlePlotFinish);
    }
    renderRegions(e) {
      var t = e.expression;
      if (!t.type) {
        var r = t;
        return r.comparison && "=" != r.comparison ? o().createElement(f, {
          key: t.model.id,
          plotExpressionResponse: e,
          containerSettings: this.props.settings,
          styleId: this.props.styleId
        }) : o().createElement(u, {
          key: t.model.id,
          plotExpressionResponse: e,
          containerSettings: this.props.settings,
          styleId: this.props.styleId
        });
      }
      return "implicit" == t.type ? o().createElement(b, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "parametric" == t.type ? o().createElement(v, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "point-list" == t.type ? o().createElement(C, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "vector" == t.type ? o().createElement(A, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "vector-field" == t.type ? o().createElement(E, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "bounded-inequality" == t.type ? o().createElement(y, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId
      }) : "poincare-disc" == t.type ? o().createElement(_, {
        key: t.model.id,
        plotExpressionResponse: e,
        containerSettings: this.props.settings,
        styleId: this.props.styleId,
        currentExpression: t,
        inSettingArea: this.props.inSettingArea
      }) : void 0;
    }
    renderExpression(e) {
      if ("ok" == e.type) return this.renderRegions(e);
      console.warn(e.message);
    }
    render() {
      var e = this.props,
        t = e.styleId,
        r,
        n = e.settings.view,
        i = n.p1,
        s = n.viewWidth,
        a = n.viewHeight,
        l = "cp".concat(t);
      return o().createElement("g", {
        className: "test-plot-expression"
      }, o().createElement("defs", null, o().createElement("clipPath", {
        id: l
      }, o().createElement("rect", {
        x: i.x + 1,
        y: i.y + 1,
        width: s - 2,
        height: a - 2
      }))), o().createElement("g", {
        clipPath: "url(#".concat(l, ")")
      }, this.state.plotResult.expressions.map(e => this.renderExpression(e))));
    }
  }
  var W = r(80238);
  class V extends o().Component {
    render() {
      var e = this.props,
        t = e.start,
        r = e.lineSize,
        n = e.minMax,
        i = e.fromY,
        s = e.toY,
        a = this.props.axisInfo,
        l = a.unitType,
        c = a.minorStep,
        d = a.minorGridShow,
        h = a.majorStepsResolved,
        p = a.majorTickThickness,
        u = a.minorTickThickness,
        g = n.max - n.min,
        m = [],
        f = [],
        y,
        v,
        b = {
          majorSteps: h,
          minMax: n,
          unitType: l
        },
        x = null != p ? p : d ? 1 : .5;
      if (W.A.run(b, (e, a, l) => {
        void 0 === y && (y = e, v = l / (c + 1));
        var d = (e - n.min) / g * r + t.x;
        m.push(o().createElement("line", {
          key: a,
          x1: d,
          y1: i,
          x2: d,
          y2: s,
          fill: "none",
          stroke: "#c3c3c3",
          strokeWidth: x
        }));
      }), d) {
        for (var C = y, S = 0; C < n.max; C += v, S += 1) {
          var A = (C - n.min) / g * r + t.x;
          f.push(o().createElement("line", {
            key: S,
            x1: A,
            y1: i,
            x2: A,
            y2: s,
            fill: "none",
            stroke: "lightgray",
            strokeWidth: null != u ? u : .5
          }));
        }
        for (var w = y, E = -1; w > n.min; w -= v, E -= 1) {
          var k = (w - n.min) / g * r + t.x;
          f.push(o().createElement("line", {
            key: E,
            x1: k,
            y1: i,
            x2: k,
            y2: s,
            fill: "none",
            stroke: "lightgray",
            strokeWidth: null != u ? u : .5
          }));
        }
      }
      return o().createElement("g", {
        className: "test-xgi"
      }, f, m);
    }
  }
  class U extends o().Component {
    render() {
      var e = this.props,
        t = e.start,
        r = e.lineSize,
        n = e.minMax,
        i = e.fromX,
        s = e.toX,
        a = this.props.axisInfo,
        l = a.unitType,
        c = a.minorStep,
        d = a.minorGridShow,
        h = a.majorStepsResolved,
        p = a.majorTickThickness,
        u = a.minorTickThickness,
        g = n.max - n.min,
        m = [],
        f = [],
        y,
        v,
        b = {
          majorSteps: h,
          minMax: n,
          unitType: l
        },
        x = null != p ? p : d ? 1 : .5;
      if (W.A.run(b, (e, a, l) => {
        void 0 === y && (y = e, v = l / (c + 1));
        var d = r - (e - n.min) / g * r + t.y;
        m.push(o().createElement("line", {
          key: a,
          x1: i,
          y1: d,
          x2: s,
          y2: d,
          fill: "none",
          stroke: "#c3c3c3",
          strokeWidth: x
        }));
      }), d) {
        for (var C = y, S = 0; C < n.max; C += v, S += 1) {
          var A = r - (C - n.min) / g * r + t.y;
          f.push(o().createElement("line", {
            key: S,
            x1: i,
            y1: A,
            x2: s,
            y2: A,
            fill: "none",
            stroke: "lightgray",
            strokeWidth: null != u ? u : .5
          }));
        }
        for (var w = y, E = -1; w > n.min; w -= v, E -= 1) {
          var k = r - (w - n.min) / g * r + t.y;
          f.push(o().createElement("line", {
            key: E,
            x1: i,
            y1: k,
            x2: s,
            y2: k,
            fill: "none",
            stroke: "lightgray",
            strokeWidth: null != u ? u : .5
          }));
        }
      }
      return o().createElement("g", {
        className: "test-ygi"
      }, f, m);
    }
  }
  var q = r(75331);
  class G extends o().Component {
    render() {
      return o().createElement("g", null, this.getXGridElement(), this.getYGridElement());
    }
    getXGridElement() {
      var e = this.props,
        t = e.xAxis,
        r = e.settings;
      if (t.plotGridShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s = r.view.p1,
          a = i.viewHeight,
          l = i.viewWidth,
          c = q.j.getXStart(s, a, i.centerDelta),
          d = q.j.getXMinMax(i.centerDelta, n.x, l);
        return o().createElement(V, {
          axisInfo: t,
          start: c,
          lineSize: l,
          minMax: d,
          fromY: s.y,
          toY: s.y + a
        });
      }
    }
    getYGridElement() {
      var e = this.props,
        t = e.yAxis,
        r = e.settings;
      if (t.plotGridShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s = r.view.p1,
          a = i.viewHeight,
          l = i.viewWidth,
          c = q.j.getYTickStart(s, i.centerDelta),
          d = q.j.getYMinMax(i.centerDelta, n.y, a);
        return o().createElement(U, {
          axisInfo: t,
          start: c,
          lineSize: a,
          minMax: d,
          fromX: s.x,
          toX: s.x + l
        });
      }
    }
  }
  var K = r(3453);
  class Z {
    buildYArrow(e) {
      var t = 7 + Math.floor(1.6 * e),
        r = .9 * t,
        n = e + e / 2 + 1,
        i;
      return {
        arrowDeltaY: 1,
        lineDeltaY: Math.round(e / 2) + .5 + n,
        arrowHeight: t,
        arrowWidth: r,
        thickness: e
      };
    }
    buildXArrow(e) {
      var t = 7 + Math.floor(1.6 * e),
        r = .9 * t,
        n = e + e / 2 + 1,
        i;
      return {
        arrowDeltaX: 1,
        lineDeltaX: Math.round(e / 2) + .5 + n,
        arrowHeight: r,
        arrowWidth: t,
        thickness: e
      };
    }
  }
  var Y = new Z();
  class Q extends o().Component {
    getYPosition(e) {
      var t = this.props,
        r = t.start,
        n;
      switch (t.halfSizePosition) {
        case "left":
          return {
            x1: r.x - e,
            x2: r.x
          };
        case "right":
          return {
            x1: r.x,
            x2: r.x + e
          };
        default:
          return {
            x1: r.x - e,
            x2: r.x + e
          };
      }
    }
    getResolvedArrowMode() {
      var e = this.props,
        t = e.showArrow,
        r = e.arrowMode;
      return r || (t ? "positive" : "none");
    }
    drawArrows(e, t) {
      var r = this.getResolvedArrowMode();
      if ("none" === r) return [];
      var n = this.props,
        i = n.start,
        s = n.lineSize,
        a = t.arrowHeight,
        l = t.arrowWidth,
        c = t.arrowDeltaY,
        d = t.thickness,
        h = l / 2,
        p = [],
        u = i.y + c,
        g = "M".concat(i.x - h, ",").concat(u + a, " L").concat(i.x, ",").concat(u, " L").concat(i.x + h, ",").concat(u + a, " Z");
      if (p.push(o().createElement("path", {
        key: "arrow-top",
        d: g,
        stroke: "none",
        strokeWidth: d,
        fill: e.color,
        fillOpacity: e.opacity
      })), "both" === r) {
        var m = i.y + s - c,
          f = "M".concat(i.x - h, ",").concat(m - a, " L").concat(i.x, ",").concat(m, " L").concat(i.x + h, ",").concat(m - a, " Z");
        p.push(o().createElement("path", {
          key: "arrow-bottom",
          d: f,
          stroke: "none",
          strokeWidth: d,
          fill: e.color,
          fillOpacity: e.opacity
        }));
      }
      return p;
    }
    render() {
      var e,
        t,
        r = this.props,
        n = r.start,
        i = r.lineSize,
        s = r.minMax,
        a = r.zeroPosition,
        l = r.showAxisLine,
        c = this.props.axisInfo,
        d = c.axisColor,
        h = c.minorStep,
        p = c.minorTickShow,
        u = c.unitType,
        g = c.axisThickness,
        m = c.majorStepsResolved,
        f = null !== (e = this.props.axisInfo.majorTickThickness) && void 0 !== e ? e : g,
        y = null !== (t = this.props.axisInfo.minorTickThickness) && void 0 !== t ? t : g,
        v = s.max - s.min,
        b = this.getResolvedArrowMode(),
        x = "positive" === b || "both" === b,
        C = "both" === b,
        S = D.A.getHtmlColorWithOpacity(d, !0),
        A = [],
        w = [],
        E,
        k,
        O = {
          majorSteps: m,
          minMax: s,
          unitType: u
        };
      if (W.A.run(O, (e, t, r, o, l) => {
        void 0 === E && (E = e, k = r / (h + 1));
        var c = i - (e - s.min) / v * i + n.y;
        if (!a || !l) {
          var d = this.getYPosition(4 + Math.floor(g / 2)),
            p = d.x1,
            u = d.x2;
          A.push(this.makeLine(t, p, c, u, c, S, f));
        }
      }), p) {
        for (var P = x ? s.max - 15 / i * v : s.max, M = C ? s.min + 15 / i * v : s.min, I = this.getYPosition(2 + Math.floor(g / 2)), T = I.x1, L = I.x2, R = E, B = 0; R < P; R += k, B += 1) {
          var F = i - (R - s.min) / v * i + n.y;
          w.push(this.makeLine(B, T, F, L, F, S, y));
        }
        for (var j = E, _ = -1; j > M; j -= k, _ -= 1) {
          var N = i - (j - s.min) / v * i + n.y;
          w.push(this.makeLine(_, T, N, L, N, S, y));
        }
      }
      var z = Y.buildYArrow(g),
        H = z.lineDeltaY,
        V = this.drawArrows(S, z),
        U = x ? n.y + H : n.y,
        q = C ? n.y + i - H : n.y + i,
        G = l ? this.makeLine("axis-line", n.x, U, n.x, q, S, g) : void 0;
      return o().createElement("g", {
        className: "test-yti",
        style: {
          fontFamily: "Asana-Math, Asana"
        }
      }, G, w, A, V);
    }
    makeLine(e, t, r, n, i, s, a) {
      return o().createElement("line", {
        key: e,
        x1: t,
        y1: r,
        x2: n,
        y2: i,
        fill: "none",
        stroke: s.color,
        strokeOpacity: s.opacity,
        strokeWidth: a
      });
    }
  }
  class J extends o().Component {
    render() {
      var e = this.props,
        t = e.start,
        r = e.lineSize,
        n = e.minMax,
        i = e.zeroPosition,
        s = e.preventShowingNumber,
        a = this.props.axisInfo,
        l = a.majorTextColor,
        c = a.plotAxisNumering,
        d = a.majorTextFontSize,
        h = a.unitType,
        p = a.axisThickness,
        u = a.majorStepsResolved,
        g = n.max - n.min,
        m = D.A.getHtmlColorWithOpacity(l, !0),
        f = [],
        y = {
          majorSteps: u,
          minMax: n,
          unitType: h
        };
      if (W.A.run(y, (e, a, l, h, u) => {
        var y = r - (e - n.min) / g * r + t.y;
        i && u || c && !s && f.push(o().createElement("text", {
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: d,
          key: a,
          stroke: "none",
          fill: m.color,
          fillOpacity: m.opacity,
          x: t.x - 8 - Math.floor(p / 2),
          y
        }, h));
      }), c && !s && "lower" == i && n.min < 0 && n.max > 0) {
        var v = r - (0 - n.min) / g * r + t.y;
        f.push(o().createElement("text", {
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: d,
          key: "zero",
          stroke: "none",
          fill: m.color,
          fillOpacity: m.opacity,
          x: t.x - 8 - Math.floor(p / 2),
          y: v
        }, "0"));
      }
      return o().createElement("g", {
        className: "test-ytl",
        style: {
          fontFamily: '"Open Sans", verdana, arial, sans-serif'
        }
      }, f);
    }
  }
  class X extends o().Component {
    getYPosition(e) {
      var t = this.props,
        r = t.start,
        n;
      switch (t.halfSizePosition) {
        case "above":
          return {
            y1: r.y - e,
            y2: r.y
          };
        case "below":
          return {
            y1: r.y,
            y2: r.y + e
          };
        default:
          return {
            y1: r.y - e,
            y2: r.y + e
          };
      }
    }
    getResolvedArrowMode() {
      var e = this.props,
        t = e.showArrow,
        r = e.arrowMode;
      return r || (t ? "positive" : "none");
    }
    drawArrows(e, t, r) {
      var n = this.getResolvedArrowMode();
      if ("none" === n) return [];
      var i = this.props.start,
        s = t.arrowDeltaX,
        a = t.arrowHeight,
        l = t.arrowWidth,
        c = t.thickness,
        d = a / 2,
        h = [],
        p = i.x + r - s,
        u = "M".concat(p - l, ",").concat(i.y - d, " L").concat(p, ",").concat(i.y, " L").concat(p - l, ",").concat(i.y + d, " Z");
      if (h.push(o().createElement("path", {
        key: "arrow-right",
        d: u,
        stroke: "none",
        strokeWidth: c,
        fill: e.color,
        fillOpacity: e.opacity
      })), "both" === n) {
        var g = i.x + s,
          m = "M".concat(g + l, ",").concat(i.y - d, " L").concat(g, ",").concat(i.y, " L").concat(g + l, ",").concat(i.y + d, " Z");
        h.push(o().createElement("path", {
          key: "arrow-left",
          d: m,
          stroke: "none",
          strokeWidth: c,
          fill: e.color,
          fillOpacity: e.opacity
        }));
      }
      return h;
    }
    render() {
      var e,
        t,
        r = this.props,
        n = r.start,
        i = r.lineSize,
        s = r.minMax,
        a = r.zeroPosition,
        l = r.showAxisLine,
        c = this.props.axisInfo,
        d = c.axisColor,
        h = c.minorStep,
        p = c.minorTickShow,
        u = c.unitType,
        g = c.axisThickness,
        m = c.majorStepsResolved,
        f = null !== (e = this.props.axisInfo.majorTickThickness) && void 0 !== e ? e : g,
        y = null !== (t = this.props.axisInfo.minorTickThickness) && void 0 !== t ? t : g,
        v = s.max - s.min,
        b = this.getResolvedArrowMode(),
        x = "positive" === b || "both" === b,
        C = "both" === b,
        S = D.A.getHtmlColorWithOpacity(d, !0),
        A = [],
        w = [],
        E,
        k,
        O = {
          majorSteps: m,
          minMax: s,
          unitType: u
        };
      if (W.A.run(O, (e, t, r, o, l) => {
        void 0 === E && (E = e, k = r / (h + 1));
        var c = (e - s.min) / v * i + n.x;
        if (!a || !l) {
          var d = this.getYPosition(4 + Math.floor(g / 2)),
            p = d.y1,
            u = d.y2;
          A.push(this.makeLine(t, c, p, c, u, S, f));
        }
      }), p) {
        for (var P = x ? s.max - 15 / i * v : s.max, M = C ? s.min + 15 / i * v : s.min, I = this.getYPosition(2 + Math.floor(g / 2)), T = I.y1, L = I.y2, R = E, B = 0; R < P; R += k, B += 1) {
          var F = (R - s.min) / v * i + n.x;
          w.push(this.makeLine(B, F, T, F, L, S, y));
        }
        for (var j = E, _ = -1; j > M; j -= k, _ -= 1) {
          var N = (j - s.min) / v * i + n.x;
          w.push(this.makeLine(_, N, T, N, L, S, y));
        }
      }
      var z = Y.buildXArrow(g),
        H = z.lineDeltaX,
        V = this.drawArrows(S, z, i),
        U = C ? n.x + H : n.x,
        q = x ? n.x + i - H : n.x + i,
        G = l ? this.makeLine("axis-line", U, n.y, q, n.y, S, g) : void 0;
      return o().createElement("g", {
        className: "test-xti",
        style: {
          fontFamily: "Asana-Math, Asana"
        }
      }, G, w, A, V);
    }
    makeLine(e, t, r, n, i, s, a) {
      return o().createElement("line", {
        key: e,
        x1: t,
        y1: r,
        x2: n,
        y2: i,
        fill: "none",
        stroke: s.color,
        strokeOpacity: s.opacity,
        strokeWidth: a
      });
    }
  }
  class $ extends o().Component {
    render() {
      var e = this.props,
        t = e.start,
        r = e.lineSize,
        n = e.minMax,
        i = e.zeroPosition,
        s = e.preventShowingNumber,
        a = this.props.axisInfo,
        l = a.majorTextColor,
        c = a.plotAxisNumering,
        d = a.majorTextFontSize,
        h = a.unitType,
        p = a.axisThickness,
        u = a.majorStepsResolved,
        g = n.max - n.min,
        m = D.A.getHtmlColorWithOpacity(l, !0),
        f = [],
        y = {
          majorSteps: u,
          minMax: n,
          unitType: h
        };
      if (W.A.run(y, (e, a, l, h, u) => {
        if (!i || !u) {
          var y = h.startsWith("-") ? .57 * d / 2 : 0,
            v = (e - n.min) / g * r + t.x - y;
          c && !s && f.push(o().createElement("text", {
            textAnchor: "middle",
            fontSize: d,
            dominantBaseline: "hanging",
            key: a,
            stroke: "none",
            fill: m.color,
            fillOpacity: m.opacity,
            x: v,
            y: t.y + 7 + Math.floor(p / 2)
          }, h));
        }
      }), c && !s && "left" == i && n.min < 0 && n.max > 0) {
        var v = (0 - n.min) / g * r + t.x;
        f.push(o().createElement("text", {
          textAnchor: "middle",
          fontSize: d,
          dominantBaseline: "hanging",
          key: "zero",
          stroke: "none",
          fill: m.color,
          fillOpacity: m.opacity,
          x: v - 8 - Math.floor(p / 2),
          y: t.y + 5 + Math.floor(p / 2)
        }, "0"));
      }
      return o().createElement("g", {
        className: "test-xtl",
        style: {
          fontFamily: '"Open Sans", verdana, arial, sans-serif'
        }
      }, f);
    }
  }
  class ee extends o().Component {
    render() {
      var e = this.getXTickIntervalElement(),
        t = e.ticks,
        r = e.label,
        n = this.getYTickIntervalElement(),
        i = n.ticks,
        s = n.label,
        a = this.props,
        l = a.plot,
        c,
        d = a.settings.view,
        h = {
          fill: "transparent",
          stroke: "none"
        };
      return o().createElement("g", null, this.renderBaseOnArrangement([t, i, r, s, l]), o().createElement("rect", {
        className: "real",
        x: d.p1.x + 1,
        y: d.p1.y + 1,
        width: d.viewWidth - 2,
        height: d.viewHeight - 2,
        style: h
      }));
    }
    getYTickIntervalElement() {
      var e = this.props,
        t = e.yAxis,
        r = e.settings,
        n = e.arrowMode;
      if (t.plotAxisShow) {
        var i = r.domainToViewScale,
          s = r.view,
          a = s.p1,
          l = s.p2,
          c = q.j.getYTickStart(a, s.centerDelta);
        if (c.x < a.x + 5 || c.x > l.x - 5) return {
          ticks: null,
          label: null
        };
        var d = q.j.getYMinMax(s.centerDelta, i.y, s.viewHeight);
        return {
          ticks: o().createElement(Q, {
            key: "y-tick-interval",
            axisInfo: t,
            showAxisLine: !0,
            zeroPosition: "none",
            showArrow: !0,
            arrowMode: n,
            start: c,
            lineSize: s.viewHeight,
            minMax: d,
            halfSizePosition: null
          }),
          label: o().createElement(J, {
            key: "y-tick-label",
            preventShowingNumber: !1,
            axisInfo: t,
            zeroPosition: "none",
            start: c,
            lineSize: s.viewHeight,
            minMax: d,
            halfSizePosition: null
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
    getXTickIntervalElement() {
      var e = this.props,
        t = e.xAxis,
        r = e.settings,
        n = e.arrowMode;
      if (t.plotAxisShow) {
        var i = r.domainToViewScale,
          s = r.view,
          a = s.p1,
          l = s.p2,
          c = q.j.getXStart(a, s.viewHeight, s.centerDelta);
        if (c.y < a.y + 5 || c.y > l.y - 5) return {
          ticks: null,
          label: null
        };
        var d = q.j.getXMinMax(s.centerDelta, i.x, s.viewWidth);
        return {
          ticks: o().createElement(X, {
            key: "x-tick-interval",
            axisInfo: t,
            zeroPosition: "left",
            showAxisLine: !0,
            showArrow: !0,
            arrowMode: n,
            start: c,
            lineSize: s.viewWidth,
            minMax: d,
            halfSizePosition: null
          }),
          label: o().createElement($, {
            key: "x-tick-label",
            preventShowingNumber: !1,
            axisInfo: t,
            zeroPosition: "left",
            start: c,
            lineSize: s.viewWidth,
            minMax: d,
            halfSizePosition: null
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
    renderBaseOnArrangement(e) {
      var t = (0, K.A)(e, 5),
        r = t[0],
        n = t[1],
        i = t[2],
        o = t[3],
        s = t[4],
        a;
      switch (this.props.axisArrangement) {
        case "axis-plot-label":
          return [r, n, s, i, o];
        case "plot-axis-label":
          return [s, r, n, i, o];
        case "axis-label-plot":
          return [r, n, i, o, s];
      }
    }
  }
  class te extends o().Component {
    render() {
      var e = {
          fill: "transparent",
          stroke: "gray"
        },
        t = this.getXTickIntervalElement(),
        r = t.ticks,
        n = t.label,
        i = this.getYTickIntervalElement(),
        s = i.ticks,
        a = i.label,
        l = this.props,
        c = l.plot,
        d,
        h = l.settings.view;
      return o().createElement("g", null, o().createElement("rect", {
        className: "real",
        x: h.p1.x + 1,
        y: h.p1.y + 1,
        width: h.viewWidth - 2,
        height: h.viewHeight - 2,
        style: e
      }), c, r, s, n, a);
    }
    getYTickIntervalElement() {
      var e = this.props,
        t = e.yAxis,
        r = e.settings;
      if (t.plotAxisShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s = r.shapeView,
          a = s.p1,
          l = s.p2,
          c = i.p1,
          d = i.viewHeight,
          h = q.j.getYMinMax(i.centerDelta, n.y, d),
          p = o().createElement(Q, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: a.x + 15,
              y: c.y
            },
            lineSize: d,
            minMax: h,
            halfSizePosition: "left"
          }),
          u = o().createElement(Q, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: l.x - 9,
              y: c.y
            },
            lineSize: d,
            minMax: h,
            halfSizePosition: "right"
          });
        return {
          ticks: o().createElement("g", null, p, u),
          label: o().createElement(J, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: a.x + 15,
              y: c.y
            },
            lineSize: d,
            minMax: h,
            preventShowingNumber: !1,
            halfSizePosition: "left"
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
    getXTickIntervalElement() {
      var e = this.props,
        t = e.xAxis,
        r = e.settings;
      if (t.plotAxisShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s = r.shapeView,
          a = s.p1,
          l = s.p2,
          c = i.p1,
          d = i.viewWidth,
          h = q.j.getXMinMax(i.centerDelta, n.x, d),
          p = o().createElement(X, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: c.x,
              y: a.y + 4
            },
            lineSize: d,
            minMax: h,
            halfSizePosition: "above"
          }),
          u = o().createElement(X, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: c.x,
              y: l.y - 15
            },
            lineSize: d,
            minMax: h,
            halfSizePosition: "below"
          });
        return {
          ticks: o().createElement("g", null, p, u),
          label: o().createElement($, {
            axisInfo: t,
            showAxisLine: !1,
            zeroPosition: null,
            showArrow: !1,
            preventShowingNumber: !1,
            showZero: !0,
            start: {
              x: c.x,
              y: l.y - 15
            },
            lineSize: d,
            minMax: h,
            halfSizePosition: "below"
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
  }
  class re extends o().Component {
    render() {
      var e = this.getXTickIntervalElement(),
        t = e.ticks,
        r = e.label,
        n = this.getYTickIntervalElement(),
        i = n.ticks,
        s = n.label,
        a = this.props,
        l = a.plot,
        c = a.settings,
        d = a.xAxis,
        h = c.view,
        p = D.A.getHtmlColorWithOpacity(d.axisColor, !0),
        u = {
          fill: "transparent",
          stroke: p.color,
          strokeOpacity: p.opacity
        };
      return o().createElement("g", null, o().createElement("rect", {
        className: "real",
        x: h.p1.x + 1,
        y: h.p1.y + 1,
        width: h.viewWidth - 2,
        height: h.viewHeight - 2,
        style: u
      }), l, t, i, r, s);
    }
    getYTickIntervalElement() {
      var e = this.props,
        t = e.yAxis,
        r = e.settings;
      if (t.plotAxisShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s,
          a = r.shapeView.p1,
          l = i.p1,
          c = q.j.getYMinMax(i.centerDelta, n.y, i.viewHeight);
        return {
          ticks: o().createElement(Q, {
            axisInfo: t,
            showAxisLine: !0,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: a.x + 15,
              y: l.y
            },
            lineSize: i.viewHeight,
            minMax: c,
            halfSizePosition: "left"
          }),
          label: o().createElement(J, {
            axisInfo: t,
            preventShowingNumber: !1,
            showAxisLine: !0,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: a.x + 15,
              y: l.y
            },
            lineSize: i.viewHeight,
            minMax: c,
            halfSizePosition: "left"
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
    getXTickIntervalElement() {
      var e = this.props,
        t = e.xAxis,
        r = e.settings;
      if (t.plotAxisShow) {
        var n = r.domainToViewScale,
          i = r.view,
          s,
          a = r.shapeView.p2,
          l = i.p1,
          c = q.j.getXMinMax(i.centerDelta, n.x, i.viewWidth);
        return {
          ticks: o().createElement(X, {
            axisInfo: t,
            showAxisLine: !0,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: l.x,
              y: a.y - 15
            },
            lineSize: i.viewWidth,
            minMax: c,
            halfSizePosition: "below"
          }),
          label: o().createElement($, {
            axisInfo: t,
            preventShowingNumber: !1,
            showAxisLine: !0,
            zeroPosition: null,
            showArrow: !1,
            showZero: !0,
            start: {
              x: l.x,
              y: a.y - 15
            },
            lineSize: i.viewWidth,
            minMax: c,
            halfSizePosition: "below"
          })
        };
      }
      return {
        ticks: null,
        label: null
      };
    }
  }
  function ne(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ne(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class oe extends o().Component {
    buildMathPlotSettings(e) {
      var t = e.shapeView,
        r = e.plotInfo,
        n = e.delta;
      return N.r.buildMathPlotSettings(ie(ie({}, t), {}, {
        axisType: r.axes.axisType
      }), r.xAxis.scale, r.yAxis.scale, n.x, n.y);
    }
    renderPlot(e) {
      var t = this.props,
        r = t.expressions,
        n = t.variables;
      return o().createElement(H, {
        key: "plot-expression",
        settings: e,
        expressions: r,
        variables: n,
        onRendered: this.props.onRendered,
        styleId: this.props.styleId,
        inSettingArea: this.props.inSettingArea
      });
    }
    renderGrid(e) {
      var t = this.props.plotInfo;
      return o().createElement(G, {
        xAxis: t.xAxis,
        yAxis: t.yAxis,
        settings: e
      });
    }
    renderAxes(e, t) {
      var r = this.props.plotInfo,
        n = r.axes,
        i = r.xAxis,
        s = r.yAxis;
      switch (n.axisType || "school") {
        case "school":
          return o().createElement(ee, {
            axisArrangement: n.axisArrangement,
            arrowMode: this.props.plotInfo.arrowMode,
            xAxis: i,
            yAxis: s,
            plot: e,
            settings: t
          });
        case "scientific":
          return o().createElement(te, {
            xAxis: i,
            yAxis: s,
            plot: e,
            settings: t
          });
        case "scientific-clean":
          return o().createElement(re, {
            xAxis: i,
            yAxis: s,
            plot: e,
            settings: t
          });
      }
    }
    render() {
      var e = this.buildMathPlotSettings(this.props);
      return o().createElement("g", null, this.renderGrid(e), this.renderAxes(this.renderPlot(e), e));
    }
  }
};
