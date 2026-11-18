/* module 51164 — 24388 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    s: () => z,
    O: () => H
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(39791),
    c = r(25742),
    d = r(48440),
    h = r(61848),
    p = r(49632),
    u = r(49812),
    g = r(30803),
    m = r(68657),
    f = r(24829);
  class y extends o().Component {
    render() {
      var e = "square-down common-square-icon ",
        t = "square-up common-square-icon ";
      return this.props.isExpanded && (e = e.concat("common-square-icon-expand"), t = t.concat("common-square-icon-expand")), o().createElement("div", {
        className: "icon-integral-symbol"
      }, o().createElement("div", {
        className: e
      }), o().createElement("div", {
        className: t
      }), o().createElement("div", {
        className: "align-end"
      }, this.props.symbol));
    }
  }
  var v = r(58578),
    b = r(19340),
    x = r(71311);
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A {
    getEditorStyle(e, t, r, n, i, o) {
      var s = this.rawGetEditorStyle(e, t, r, n, i, o);
      return S(S({}, s), {}, {
        marginLeft: s.marginLeft ? "".concat(s.marginLeft, "em") : void 0,
        marginRight: s.marginRight ? "".concat(s.marginRight, "em") : void 0
      });
    }
    rawGetEditorStyleAsana(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: .05
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: .23
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: .05
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: .23
                      };
                  }
              }
            case "display":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: .35
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: .45
                      };
                  }
              }
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(.95, e, r, -.7, -.3);
                case "editor-block":
                  return this.styleForIntNonLimitKind(1.42 - .05, e, r, -.4, -.3);
              }
            case "display":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(1.4, e, r, -1, -.6);
                case "editor-block":
                  return this.styleForIntNonLimitKind(2.01, e, r, -.6, -.6);
              }
          }
      }
    }
    rawGetEditorStyleSans(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: .05
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: -0
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: .05
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: -0
                      };
                  }
              }
            case "display":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: .05
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: .05
                      };
                  }
              }
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(.95, e, r, -.7, -.5, .3);
                case "editor-block":
                  return this.styleForIntNonLimitKind(1.42 - .05, e, r, -.4, -.5, .3);
              }
            case "display":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(1.4, e, r, -1, -.8, .3);
                case "editor-block":
                  return this.styleForIntNonLimitKind(2.01, e, r, -.6, -.8, .3);
              }
          }
      }
    }
    rawGetEditorStyleLatin(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: .07
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: -.05
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: .07
                      };
                  }
              }
            case "display":
              switch (t) {
                case "editor":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .2,
                        marginBottom: -.2
                      };
                    case "to":
                      return {
                        marginLeft: -.2,
                        marginRight: .2,
                        marginTop: .07
                      };
                  }
                case "editor-block":
                  switch (e) {
                    case "from":
                      return {
                        marginLeft: .284,
                        marginBottom: -.2
                      };
                    case "to":
                      return {
                        marginLeft: -.284,
                        marginRight: .284,
                        marginTop: .07
                      };
                  }
              }
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(.83, e, r, -.7, -.4);
                case "editor-block":
                  return this.styleForIntNonLimitKind(1.17, e, r, -.4, -.4);
              }
            case "display":
              switch (t) {
                case "editor":
                  return this.styleForIntNonLimitKind(1.28, e, r, -1.1, -.74);
                case "editor-block":
                  return this.styleForIntNonLimitKind(2.13 - .35, e, r, -.7, -.8);
              }
          }
      }
    }
    rawGetEditorStyle(e, t, r, n, i, o) {
      switch (o) {
        case "Asana":
          return this.rawGetEditorStyleAsana(e, t, r, n, i);
        case "LatinModern":
        case "ThickerLm":
          return this.rawGetEditorStyleLatin(e, t, r, n, i);
        case "Sans":
          return this.rawGetEditorStyleSans(e, t, r, n, i);
      }
      return this.rawGetEditorStyleAsana(e, t, r, n, i);
    }
    styleForIntNonLimitKind(e, t, r, n, i) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .4;
      switch (t) {
        case "from":
          return {
            justifyContent: "flex-start",
            marginLeft: this.leftMarginForIntNonLimitKind(e, t, r, o),
            marginBottom: n
          };
        case "to":
          return {
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            marginLeft: this.leftMarginForIntNonLimitKind(e, t, r, o),
            marginTop: i
          };
      }
    }
    leftMarginForIntNonLimitKind(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .4,
        i = .85,
        o = .5;
      switch (r) {
        case "\\int":
        case "\\oint":
          switch (t) {
            case "from":
              return w(i * e);
            case "to":
              return w(o * e);
          }
        case "\\iint":
        case "\\oiint":
          switch (t) {
            case "from":
              return w((i + 1 * n) * e);
            case "to":
              return w((o + 1 * n) * e);
          }
        case "\\iiint":
        case "\\oiiint":
          switch (t) {
            case "from":
              return w((i + 2 * n) * e);
            case "to":
              return w((o + 2 * n) * e);
          }
      }
    }
  }
  function w(e) {
    return Math.round(100 * e) / 100;
  }
  const E = new A();
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function O(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class D {
    getEditorStyle(e, t, r, n, i, o) {
      var s = (0, b.zN)(o),
        a = (0, x.b1)(s, e, t, r, n, i);
      return a ? O(O({}, a), {}, {
        marginLeft: a.marginLeft ? "".concat(a.marginLeft, "em") : void 0,
        marginRight: a.marginRight ? "".concat(a.marginRight, "em") : void 0
      }) : E.getEditorStyle(e, t, r, n, i, s.legacyPositionFamily);
    }
  }
  const P = new D();
  var M = r(32485),
    I = r.n(M),
    T = r(70224),
    L = r(40961),
    R = r.n(L),
    B = r(37566),
    F = r(69446),
    j = r(40383);
  function _(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class z extends c.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "integral-like-symbol limit-type"), (0, n.A)(this, "onSettingClick", e => {
        e.stopPropagation(), e.preventDefault(), console.log("see"), this.props.onDataChanged(h.A.set(this.props.data, "isLimitKind", !this.isLimitKind()));
      });
    }
    getSymbol() {
      return "∫";
    }
    getSymbolClassName() {
      return "";
    }
    isLimitKind() {
      return !!this.props.data.isLimitKind;
    }
    getPowerIndexInfo() {
      var e = R().findDOMNode(this),
        t = B.jS(e, "symbol")[0] || e,
        r = this.getElementRect(t),
        n = r.bottom - r.top,
        i = .09 * n,
        o = .05 * -n,
        s,
        a;
      return {
        shouldConsiderAsChar: !1,
        rect: {
          top: r.top + i,
          height: n - i - o
        }
      };
    }
    onAddClick(e) {
      e.stopPropagation(), e.preventDefault();
      var t = {
        from: {
          id: g.w.nextId(),
          lines: [{
            id: g.w.nextId(),
            blocks: []
          }]
        },
        to: {
          id: g.w.nextId(),
          lines: [{
            id: g.w.nextId(),
            blocks: []
          }]
        }
      };
      this.props.onDataChanged(h.A.set(this.props.data, "elements", t)), this.selectElement("from");
    }
    getSettingTopEm() {
      return this.isEditorEmpty(this.props.data.elements.from) ? -2.9 : -1.9;
    }
    renderSetting() {
      if (!this.isSelectModeOnly() && this.isDirectSelectedNoSelectionMode() && (this.props.data.elements.to || this.props.data.elements.from)) {
        var e = this.getIconContainerStyle() || {};
        return this.isLimitKind() ? (e.top = this.getSettingTopEm() + "em", o().createElement("setting", {
          key: "setting",
          className: "setting-popup-zindex  no-print",
          style: e,
          onMouseDown: this.onSettingClick
        }, f.A.limitTypeIcon)) : o().createElement("setting", {
          key: "setting",
          className: "setting-popup-zindex  no-print",
          style: e,
          onMouseDown: this.onSettingClick
        }, f.A.limitTypeIcon);
      }
    }
    getIconContainerStyle() {
      return j.a.applyReverseZoomStyleConsiderMobileScale(void 0, this.getDzContainer(), "center bottom");
    }
    renderAdd() {
      if (!this.isSelectModeOnly()) {
        var e = this.getIconContainerStyle();
        return !this.isDirectSelectedNoSelectionMode() || this.props.data.elements.to || this.props.data.elements.from ? void 0 : o().createElement("add", {
          key: "add",
          className: "no-print",
          style: e,
          onMouseDown: e => {
            this.onAddClick(e);
          }
        }, o().createElement("i", {
          className: "fa fa-plus",
          "aria-hidden": "true"
        }));
      }
    }
    getIntBaseEditorStyle(e) {
      var t = this.shoudUseEditAreaBlock(this.props.data.elements[e]),
        r = this.isInlineMode(),
        n = this.isLimitKind();
      return P.getEditorStyle(e, t ? "editor-block" : "editor", this.props.data.text, n ? "limit" : "non-limit", r ? "inline" : "display", this.context.baseMathModeFontFamily);
    }
    getFromStyle() {
      var e = this.isInlineMode(),
        t = this.isLimitKind(),
        r = this.getIntBaseEditorStyle("from");
      return N(N({}, r), {}, {
        marginBottom: this.getRoundEmStr(r.marginBottom),
        minHeight: t ? "" : e ? this.getRoundEmStr(1) : this.getRoundEmStr(1.1)
      });
    }
    getToStyle() {
      var e = this.isInlineMode(),
        t = this.isLimitKind(),
        r = this.getIntBaseEditorStyle("to");
      return N(N({}, r), {}, {
        marginTop: this.getRoundEmStr(r.marginTop),
        minHeight: t || e ? "" : this.getRoundEmStr(1)
      });
    }
    renderFrom() {
      var e = this.props.data.elements.from;
      if (e) {
        var t = I()("from", this.getFromClass()),
          r;
        return r = this.shoudUseEditAreaBlock(e) ? o().createElement(m.A, N(N({
          key: "from",
          className: t,
          style: this.getFromStyle()
        }, this.buildLightMetaDataDirectChildOrEmpty("from")), {}, {
          fontScale: .7,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          stripInfo: this.getMergedStripInfoWithProps(F.m5),
          showBorder: this.isDirectEmptyOrDirectChild("from")
        })) : o().createElement(l.A, N(N({
          key: "from",
          className: t,
          style: this.getFromStyle()
        }, this.buildMetaDataDirectChildOrEmpty("from")), {}, {
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noAreaContainer: !0,
          noSpacingRule: !0,
          stripInfo: this.getMergedStripInfoWithProps(F.m5),
          showBorder: this.isDirectEmptyOrDirectChild("from")
        })), this.isEditorEmpty(e) && this.isLimitKind() ? o().createElement("empty", {
          key: "from-wrap",
          className: "from"
        }, r) : r;
      }
    }
    shoudUseEditAreaBlock(e) {
      return u.A.isEmptyOrOneTextEditor(e);
    }
    renderTo() {
      var e = this.props.data.elements.to;
      if (e) {
        var t = I()("to", this.getToClass()),
          r;
        return r = this.shoudUseEditAreaBlock(e) ? o().createElement(m.A, N(N({
          key: "to",
          className: t,
          style: this.getToStyle()
        }, this.buildLightMetaDataDirectChildOrEmpty("to")), {}, {
          fontScale: .7,
          takeHeightIntoAccount: !this.isInlineMode(),
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          stripInfo: this.getMergedStripInfoWithProps({
            stripUp: this.isLimitKind() || this.isInlineMode()
          }),
          showBorder: this.isDirectEmptyOrDirectChild("to")
        })) : o().createElement(l.A, N(N({
          key: "to",
          style: this.getToStyle(),
          className: t
        }, this.buildMetaDataDirectChildOrEmpty("to")), {}, {
          highZOrderIndexOfEmpty: !0,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noSpacingRule: !0,
          noAreaContainer: !0,
          stripInfo: this.getMergedStripInfoWithProps(F.zZ),
          showBorder: this.isDirectEmptyOrDirectChild("to")
        })), this.isEditorEmpty(e) && this.isLimitKind() ? o().createElement("empty", {
          key: "to-wrap",
          className: "to"
        }, r) : r;
      }
    }
    getEditorFromToMarginLeft() {
      return "";
    }
    getFromClass() {
      return "";
    }
    getToClass() {
      return "";
    }
    getClassName() {
      var e = this.isLimitKind();
      return I()(this.containerClassName, {
        "limit-kind": e,
        "non-limit-kind": !e
      }, this.props.customDataStr);
    }
    getSymbolFontFamily() {
      return v.A.mathFontFamilyFromKey("\\mathnormal", this.context.baseMathModeFontFamily, "use-custom-symbol");
    }
    forceFontWeightNormal() {
      return !0;
    }
    renderComponent() {
      return [this.renderFrom(), o().createElement("symbol", {
        key: "symbol",
        className: this.getSymbolClassName(),
        style: {
          fontFamily: this.getSymbolFontFamily(),
          fontStyle: "normal",
          fontWeight: this.forceFontWeightNormal() ? "normal" : void 0
        }
      }, o().createElement("span", null, this.getSymbol())), this.renderTo(), this.renderSetting(), this.renderAdd()];
    }
  }
  class H extends d.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isIntegralLike", !0);
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "from",
        elements: {
          from: {
            defaultHide: !0,
            onRemove: "only"
          },
          to: {
            defaultHide: !0,
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 40,
        hasExpanded: !0,
        renderSymbol() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return o().createElement(y, {
            symbol: this.symbol,
            isExpanded: e
          });
        }
      });
    }
    toLatex(e, t, r, n) {
      var i = {
          id: "fake-id",
          text: "\\fake",
          type: "composite",
          elements: {
            powerValue: this.isEmptyEditor(e.elements.from) ? null : e.elements.from,
            indexValue: this.isEmptyEditor(e.elements.to) ? null : e.elements.to
          }
        },
        o = " ";
      if (void 0 !== e.isLimitKind && null !== e.isLimitKind) var o = e.isLimitKind ? "\\limits " : "\\nolimits ";
      this.isEmptyEditor(e.elements.from) && this.isEmptyEditor(e.elements.to) && (o = "");
      var s = p.default.toLatex(i, t, r, {
          blockIndex: n.blockIndex,
          wrapBlocks: n.wrapBlocks,
          latexArray: []
        }),
        l = this.getLatextName() + o + s;
      return s && a().endsWith(s, "}") || (l += " "), l;
    }
    toModel(e, t, r) {
      var n = {};
      null != r && (n = {
        from: r.elements.powerValue || T.A.createEmptyEditor(),
        to: r.elements.indexValue || T.A.createEmptyEditor()
      });
      var i = T.A.createComposite(e);
      return i.elements = n, null != t && ("\\limits" == t && (i.isLimitKind = !0), "\\nolimits" == t && (i.isLimitKind = !1)), i;
    }
    toMathml(e, t) {
      return e.elements.from || e.elements.to ? {
        type: "munderover",
        base: {
          type: "mo",
          value: this.getSymbol(),
          largeop: !0,
          movablelimit: !0
        },
        overscript: t.generateEditor(e.elements.from),
        underscript: t.generateEditor(e.elements.to)
      } : {
        type: "mo",
        value: this.getSymbol(),
        largeop: !0
      };
    }
  }
};
