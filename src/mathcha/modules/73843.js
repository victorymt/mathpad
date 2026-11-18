/* module 73843 — 5332 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    WideHat: () => b,
    WideHatSc: () => x,
    default: () => w
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(55007),
    l = r(80931),
    c = r(12481),
    d = r(90826),
    h = r(516),
    p = r(32485),
    u = r.n(p),
    g = r(15706),
    m = r(19340),
    f = r(7258);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "composedRef", g.q.create()), (0, n.A)(this, "renderSvg", (e, t, r) => {
        var n = (0, f.qJ)((0, m.zN)(this.context.baseMathModeFontFamily), this.props.data.text, e, t, r);
        if (void 0 !== n) return n;
        var i = {
          left: 0,
          top: r / 18,
          right: e - 0,
          bottom: t - r / 18
        };
        i = this.narrowHatHeight(i);
        var s = "".concat(i.left.toFixed(2), ",").concat(i.bottom.toFixed(2), " ").concat(((i.right + i.left) / 2).toFixed(2), ",").concat(i.top.toFixed(2), " ").concat(i.right.toFixed(2), ",").concat(i.bottom.toFixed(2));
        return o().createElement("polyline", {
          points: s,
          strokeWidth: (0, h.U)(r),
          fill: "none",
          strokeLinejoin: "bevel"
        });
      });
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    getClassName() {
      return u()("wide-hat-symbol", {
        "ig-ex-br": !this.getMtFuncs().getBracketSettings().extendBracketsForOversymbol
      });
    }
    narrowHatHeight(e) {
      return (e.right - e.left) / (e.bottom - e.top) < 3 && (e.top = e.bottom - (e.right - e.left) / 3), e;
    }
    getSymbolStyle() {
      return this.isSingleTextBlockLeftUpperSign(this.props.data.elements.value) ? C : this.isSingleTextBlockRightUpperSign(this.props.data.elements.value) ? S : A;
    }
    renderComponent() {
      var e = v({
        display: "block",
        width: "100%",
        position: "relative",
        height: this.getRoundEmStr(.5),
        marginBottom: this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.4) : this.getRoundEmStr(-.2)
      }, (0, f.kO)((0, m.zN)(this.context.baseMathModeFontFamily), this.props.data.text, this.isSingleTextBlockAndUperSmall(this.props.data.elements.value), !0));
      return [o().createElement("symbol", {
        key: "symbol",
        style: e
      }, o().createElement(c.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        style: this.getSymbolStyle(),
        renderSvg: this.renderSvg,
        changedData: (0, f.eS)((0, m.zN)(this.context.baseMathModeFontFamily)) ? {
          family: this.context.baseMathModeFontFamily,
          data: this.props.data
        } : this.props.data,
        dimensionChangedInStyle: !0
      })), o().createElement(s.A, v(v({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        style: {
          display: "inline-flex"
        },
        optimizeForOneLine: !0
      }))];
    }
  }
  class x extends l.A {
    getViewComponent() {
      return b;
    }
    getLatextName() {
      return "\\widehat";
    }
    getSymbol() {
      return "^";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(d.A, {
            symbol: this.symbol
          });
        }
      });
    }
    toLatex(e, t, r) {
      var n = "widehat";
      return this.isEmptyOrOneCharEditor(e.elements.value) && (n = "hat"), "\\".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "mover",
        base: t.generateEditor(e.elements.value),
        accent: !0,
        overscript: {
          type: "mo",
          value: this.getSymbol()
        }
      };
    }
  }
  var C = {
      position: "absolute",
      left: 0,
      top: 0,
      display: "block",
      height: "100%",
      transform: "translate(-0.04em, 0)",
      width: "0.4em",
      overflow: "visible"
    },
    S = {
      position: "absolute",
      left: 0,
      top: 0,
      display: "block",
      height: "100%",
      transform: "translate(0.2em, 0)",
      width: "0.4em",
      overflow: "visible"
    },
    A = {
      position: "absolute",
      left: 0,
      top: 0,
      display: "block",
      width: "100%",
      height: "100%",
      overflow: "visible"
    };
  const w = new x();
};
