/* module 98381 — 3526 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    K: () => m,
    Y: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(51164),
    a = r(516),
    l = r(64080),
    c = r(58578),
    d = r(19340),
    h = r(71311);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g extends s.s {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "lim-like-symbol limit-type");
    }
    shoudUseEditAreaBlock() {
      return !1;
    }
    getSymbol() {
      return "∑";
    }
    getSymbolClassName() {
      return "";
    }
    isLimitKind() {
      return null != this.props.data.isLimitKind ? !!this.props.data.isLimitKind : !this.isInlineMode();
    }
    getFontLimitStyle(e) {
      var t = (0, h.Vu)((0, d.zN)(this.context.baseMathModeFontFamily), this.props.data.text, e, this.isLimitKind());
      if (t) return u(u({}, t), {}, {
        marginTop: void 0 !== t.marginTop ? this.getRoundEmStr(t.marginTop) : void 0,
        marginBottom: void 0 !== t.marginBottom ? this.getRoundEmStr(t.marginBottom) : void 0
      });
    }
    getFromStyle() {
      var e = this.getFontLimitStyle(!0);
      return e || {
        marginBottom: this.isLimitKind() ? a.A.getEmRound(-.35, this.getMathFontSizePixel()) + "em" : a.A.getEmRound(-.6, this.getMathFontSizePixel()) + "em"
      };
    }
    getToStyle() {
      var e = this.getFontLimitStyle(!1);
      return e || {
        marginTop: this.isLimitKind() ? a.A.getEmRound(-.18, this.getMathFontSizePixel()) + "em" : a.A.getEmRound(-.63, this.getMathFontSizePixel()) + "em"
      };
    }
    getSymbolFontFamily() {
      return c.A.mathFontFamilyFromKey("raw", this.context.baseMathModeFontFamily, "characters");
    }
    forceFontWeightNormal() {
      return !1;
    }
  }
  class m extends s.O {
    constructor() {
      super(), this.isOperatorName = !0;
    }
    getModel(e) {
      var t = super.getModel(u(u({}, e), {}, {
        isExpanded: !0
      }));
      return t.elements.from && delete t.elements.from, t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        height: 30,
        renderSymbol() {
          return o().createElement(l.A, {
            symbol: this.symbol,
            isExpanded: !0
          });
        }
      });
    }
    toMathml(e, t) {
      return e.elements.from || e.elements.to ? {
        type: "munderover",
        base: {
          type: "mo",
          value: this.getSymbol(),
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
