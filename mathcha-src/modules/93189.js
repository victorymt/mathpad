/* module 93189 — 4467 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OverArc: () => x,
    OverArcSc: () => S,
    default: () => w
  });
  var n = r(64467),
    i = r(19340),
    o = r(7258),
    s = r(40927),
    a = r.n(s),
    l = r(39791),
    c = r(55007),
    d = r(80931),
    h = r(12481),
    p = r(44002);
  class u extends a().Component {
    render() {
      return a().createElement("div", null, a().createElement("div", {
        style: {
          marginBottom: -7
        }
      }, this.props.symbol), a().createElement("div", {
        className: "common-big-square-icon square"
      }));
    }
  }
  var g = r(32485),
    m = r.n(g),
    f = r(69446),
    y = r(15706);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends c.A {
    constructor(e) {
      super(e), (0, n.A)(this, "composedRef", y.q.create()), (0, n.A)(this, "renderSvg", (e, t, r) => {
        var n = (0, o.Mt)((0, i.zN)(this.context.baseMathModeFontFamily), e, t, r, !1);
        if (void 0 !== n) return n;
        var s = p.A.getPathInfo(e, t, r, !1, (0, i.zN)(this.context.baseMathModeFontFamily).arcs.thinAtEnd);
        return a().createElement("path", {
          d: s.path,
          strokeWidth: s.strokeWidth + "em",
          fill: s.fill
        });
      }), this.getEditContentTopBottom = void 0;
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    getClassName() {
      return m()("over-arc-symbol", {
        "ig-ex-br": !this.getMtFuncs().getBracketSettings().extendBracketsForOversymbol
      });
    }
    renderComponent() {
      var e = {
        display: "block",
        width: "100%",
        position: "relative",
        height: this.getRoundEmStr(.5),
        marginBottom: this.getRoundEmStr(-.15)
      };
      return [a().createElement("symbol", {
        key: "symbol",
        style: e
      }, a().createElement(h.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        changedData: (0, o.oB)((0, i.zN)(this.context.baseMathModeFontFamily)),
        style: C,
        renderSvg: this.renderSvg
      })), a().createElement(l.A, b(b({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        stripInfo: this.getMergedStripInfoWithProps(f.zZ),
        optimizeForOneLine: !0
      }))];
    }
  }
  var C = {
    position: "absolute",
    left: 0,
    top: 0,
    display: "block",
    width: "100%",
    height: "100%"
  };
  class S extends d.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isOverSymbol", !0);
    }
    getViewComponent() {
      return x;
    }
    getLatextName() {
      return "\\overarc";
    }
    getSymbol() {
      return "⏜";
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return a().createElement(u, {
            style: A,
            symbol: this.symbol
          });
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\overparen"],
        symbol: "⏜",
        renderSymbol() {
          return a().createElement(u, {
            style: A,
            symbol: this.symbol
          });
        }
      })];
    }
    toLatex(e, t, r) {
      return "\\wideparen{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
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
  var A = {
    margin: "auto",
    width: 12,
    fontSize: 12
  };
  const w = new S();
};
