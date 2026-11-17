/* module 27332 — 10189 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => P
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(57858),
    a = r(19340),
    l = r(7258),
    c = r(334),
    d = r(25742),
    h = r(48440),
    p = r(33476),
    u = r(36223),
    g = r(91335),
    m = r(61848),
    f = r(37566),
    y = r(58578),
    v = r(70224),
    b = r(32485),
    x = r.n(b),
    C = r(40383);
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends d.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "big-delimiter-symbol"), (0, n.A)(this, "onSizeChanged", e => {
        var t = m.A.set(this.props.data, "size", e);
        this.props.onDataChanged(t);
      }), (0, n.A)(this, "onBracketNameChanged", e => {
        var t = m.A.set(this.props.data, "bracketName", e);
        this.props.onDataChanged(t);
      }), (0, n.A)(this, "onLeftRightChanged", e => {
        var t = m.A.set(this.props.data, "isClose", "left" != e);
        t = m.A.set(t, "text", "left" == e ? "\\bigl" : "\\bigr"), this.props.onDataChanged(t);
      }), (0, n.A)(this, "onBulbMouseEnter", e => {
        f.hS(f.aY(e), "background", "#d2f3d2");
      }), (0, n.A)(this, "onBulbMouseLeave", e => {
        f.hS(f.aY(e), "background", "");
      });
    }
    useCustomBaseLine() {
      return !0;
    }
    baseLineIndicatorStyle() {
      return {
        marginTop: "-0.2em"
      };
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.data.bracketName != this.props.data.bracketName || e.data.size != this.props.data.size || e.data.isClose != this.props.data.isClose;
    }
    getSizeEmFromLatexName(e) {
      switch (e) {
        case "big":
          return 1.5;
        case "Big":
          return 2.2;
        case "bigg":
          return 2.9;
        case "Bigg":
          return 3.6;
      }
    }
    getOpenCloseBracketName(e, t) {
      var r;
      return (t ? "close-" : "open-") + e;
    }
    renderSetting() {
      if (!this.isSelectModeOnly()) return this.isSelected() ? o().createElement(p.A, {
        appliedDzContainer: this.getDzContainer(),
        reversedScaleDZOrigin: "center bottom",
        smaller: !0,
        onBulbMouseEnter: this.onBulbMouseEnter,
        onBulbMouseLeave: this.onBulbMouseLeave
      }, o().createElement("setting", A({
        style: C.a.applyReverseZoomStyle({
          color: "#757575"
        }, this.getDzContainer(), "left bottom"),
        className: "mt-common-dialog  no-print"
      }, u.A.getStopPropagationForFocusClickMouseDown()), o().createElement(g.A, {
        data: k,
        isReadOnly: !0,
        onChange: this.onSizeChanged,
        width: 50,
        value: this.props.data.size
      }), o().createElement(g.A, {
        data: O,
        isReadOnly: !0,
        onChange: this.onBracketNameChanged,
        width: 50,
        value: this.props.data.bracketName
      }), o().createElement(g.A, {
        data: D,
        isReadOnly: !0,
        onChange: this.onLeftRightChanged,
        width: 50,
        value: this.props.data.isClose ? "right" : "left"
      }))) : void 0;
    }
    renderComponent() {
      var e = this.getOpenCloseBracketName(this.props.data.bracketName, this.props.data.isClose),
        t = this.getSizeEmFromLatexName(this.props.data.size),
        r = this.getMathFontSizePixel(),
        n = r * t,
        i = (0, l.si)((0, a.zN)(this.context.baseMathModeFontFamily), e),
        d,
        h = {
          height: t + "em",
          width: i ? i * r : c.A.bracketWitdhFromHeight(n, r, e),
          fontFamily: y.A.mathFontFamilyFromKey("\\mathrm", this.context.baseMathModeFontFamily, "use-custom-symbol"),
          fontStyle: "normal",
          fontWeight: "normal"
        };
      return o().createElement("big-delimiter", {
        class: x()({
          "big-open": !this.props.data.isClose,
          "big-close": !!this.props.data.isClose
        }),
        style: h
      }, o().createElement(s.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        notifyData: this.props.data,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        delimiter: e,
        fontSize: this.getMathFontSizePixel()
      }), this.renderSetting());
    }
  }
  class E extends h.A {
    getViewComponent() {
      return w;
    }
    getModel(e) {
      var t = (e = e || {
        names: ["\\bigl"]
      }).names[0];
      if ("\\Big|" == t) {
        var r = v.A.createComposite("\\bigl");
        return r.bracketName = "vert", r.size = "Big", r.isClose = !1, r;
      }
      if ("\\Big{" == t) {
        var n = v.A.createComposite("\\bigl");
        return n.bracketName = "brace", n.size = "Big", n.isClose = !1, n;
      }
      if ("\\Big}" == t) {
        var i = v.A.createComposite("\\bigr");
        return i.bracketName = "brace", i.size = "Big", i.isClose = !0, i;
      }
      if ("\\Big[" == t) {
        var o = v.A.createComposite("\\bigl");
        return o.bracketName = "bracket", o.size = "Big", o.isClose = !1, o;
      }
      if ("\\Big]" == t) {
        var s = v.A.createComposite("\\bigr");
        return s.bracketName = "bracket", s.size = "Big", s.isClose = !0, s;
      }
      t = "\\bigl" == t || "\\bigr" == t ? t : "\\bigl";
      var a = v.A.createComposite(t);
      return a.bracketName = "brace", a.size = "big", a.isClose = "\\bigr" == t, a;
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\bigl"],
        symbol: "{ [ (",
        description: "big manually adjustable bracket size "
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\bigr"],
        symbol: "} ] )",
        description: "big manually adjustable bracket size "
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Big|"],
        symbol: "big |",
        description: "big|,big | ",
        filterTag: "big"
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Big{"],
        symbol: "big {",
        description: "big{, big {",
        filterTag: "big"
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Big}"],
        symbol: "big }",
        description: "big }, big}",
        filterTag: "big"
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Big["],
        symbol: "big [",
        description: "big [, big[",
        filterTag: "big"
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Big]"],
        symbol: "big ]",
        description: "big ], big]",
        filterTag: "big"
      })];
    }
    toModel(e, t, r) {
      r || (r = "(");
      var n = r.substring(1);
      return "\\lceil" == r && (n = "ceil", t = "l"), "\\rceil" == r && (n = "ceil", t = "r"), "\\lfloor" == r && (n = "floor", t = "l"), "\\rfloor" == r && (n = "floor", t = "r"), "<" == r && (n = "angle", t = "l"), ">" == r && (n = "angle", t = "r"), "\\{" == r && (n = "brace", t = "l"), "\\}" == r && (n = "brace", t = "r"), "[" == r && (n = "bracket", t = "l"), "]" == r && (n = "bracket", t = "r"), "(" == r && (n = "parenthesis", t = "l"), ")" == r && (n = "parenthesis", t = "r"), "|" == r && (n = "vert"), "/" == r && (n = "slash", t = "l"), "\\backslash" == r && (n = "slash", t = "r"), this.toModelInner(e, "r" == t, n);
    }
    toModelInner(e, t, r) {
      var n = this.getModel();
      return n.size = e, n.isClose = t, n.bracketName = r, n.text = t ? "\\bigr" : "\\bigl", n;
    }
    toLatex(e) {
      var t = e.isClose ? "r" : "l",
        r = c.A.bracketNameToLatex((e.isClose ? "close-" : "open-") + e.bracketName);
      return "\\".concat(e.size).concat(t).concat(r);
    }
    toMathml(e, t) {
      var r = this.getMathmlSize(e.size),
        n;
      return {
        type: "mo",
        value: c.A.bracketNameUnicodeSymbol((e.isClose ? "close-" : "open-") + (e.bracketName || "brace")),
        maxsize: r,
        minsize: r
      };
    }
    getMathmlSize() {
      var e;
      switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "big") {
        case "big":
          return "1.2em";
        case "Big":
          return "1.623em";
        case "bigg":
          return "2.047em";
        case "Bigg":
          return "2.470em";
      }
      return "1.2em";
    }
  }
  var k = [{
      key: "big",
      value: "big"
    }, {
      key: "Big",
      value: "Big"
    }, {
      key: "bigg",
      value: "bigg"
    }, {
      key: "Bigg",
      value: "Bigg"
    }],
    O = [{
      key: "brace",
      value: "{ }"
    }, {
      key: "bracket",
      value: "[ ]"
    }, {
      key: "parenthesis",
      value: "( )"
    }, {
      key: "ceil",
      value: "⌈ ⌉"
    }, {
      key: "floor",
      value: "⌊ ⌋"
    }, {
      key: "vert",
      value: "| |"
    }, {
      key: "Vert",
      value: "‖ ‖"
    }, {
      key: "angle",
      value: "< >"
    }, {
      key: "uparrow",
      value: "↑ ↑"
    }, {
      key: "Uparrow",
      value: "⇑ ⇑"
    }, {
      key: "downarrow",
      value: "↓ ↓"
    }, {
      key: "Downarrow",
      value: "⇓ ⇓"
    }, {
      key: "updownarrow",
      value: "↕ ↕"
    }, {
      key: "Updownarrow",
      value: "⇕ ⇕"
    }, {
      key: "slash",
      value: "/ \\"
    }],
    D = [{
      key: "left",
      value: "Left"
    }, {
      key: "right",
      value: "Right"
    }];
  const P = new E();
};
