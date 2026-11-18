/* module 26324 — 4177 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    MiddleVert: () => m,
    MiddleVertSc: () => f,
    default: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(57858),
    l = r(25742),
    c = r(71074),
    d = r(32485),
    h = r.n(d),
    p = r(47858);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "managedState", c.x);
    }
    setHeightInfo(e, t, r, n) {
      var i = c.A.constructManageState(e, t, r, n, "open-vert", this.managedState);
      return this.resolveMixinResult(i);
    }
    clearCustomHeight() {
      var e = c.A.clearCustomHeight(this.managedState);
      return this.resolveMixinResult(e);
    }
    getCompositeBlockStyle() {
      var e = p.A.getHtmlFromStyle(this.props.data, void 0, this.context.baseMathModeFontFamily, void 0),
        t;
      return null !== this.managedState.height && (e = g(g({}, e), {}, {
        height: this.managedState.height
      })), g(g({}, super.getCompositeBlockStyle()), e);
    }
    getClassName() {
      return h()("middle-vert-symbol", {
        normal: this.isNormalBracket()
      });
    }
    resolveMixinResult(e) {
      if ("unchanged" != e) return this.managedState = e, new Promise(e => {
        this.forceUpdate(e);
      });
    }
    renderNormal() {
      return o().createElement("bracket-span", {
        key: "normal"
      }, "|");
    }
    renderComposed() {
      return o().createElement(a.A, {
        key: "composed",
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        delimiter: "open-vert",
        fontSize: this.getMathFontSizePixel(),
        fontSizeEm: this.managedState.fontSizeEm
      });
    }
    isNormalBracket() {
      return !this.managedState.heightTop;
    }
    renderBracket() {
      return this.isNormalBracket() ? (this.props.data.___normal = !0, this.renderNormal()) : (this.props.data.___normal = !1, this.renderComposed());
    }
    renderHiddenSpan() {
      if (!this.isNormalBracket()) return o().createElement("hidden-span", {
        key: "hidden-span",
        style: {
          marginTop: this.managedState.hiddenSpanMarginTop,
          alignSelf: this.managedState.hiddenSpanAlignSelf
        }
      }, this.bracketText());
    }
    bracketText() {
      return "|";
    }
    renderComponent() {
      return [this.renderHiddenSpan(), this.renderBracket()];
    }
  }
  class f extends s.A {
    getViewComponent() {
      return m;
    }
    getLatextName() {
      return "\\middle|";
    }
    getSymbol() {
      return "middle|";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        description: "Vertical Bar with Height extended by surrounding brackets",
        renderSymbol: () => o().createElement("span", {
          style: {
            fontFamily: "Asana-Math, Asana",
            fontSize: "1.2em"
          }
        }, "|")
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex(e) {
      return e.___normal ? " | " : "\\middle| ";
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const y = new f();
};
