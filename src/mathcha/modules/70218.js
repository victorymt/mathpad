/* module 70218 — 4074 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    UnderArc: () => f,
    UnderArcSc: () => y,
    default: () => v
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
      return a().createElement("div", {
        className: "under-symbol-icon",
        style: {
          margin: "auto",
          width: 12,
          fontSize: 12,
          marginLeft: 5
        }
      }, a().createElement("div", {
        className: "common-big-square-icon square"
      }), a().createElement("div", {
        className: "under-wrapper",
        style: {
          marginTop: -16,
          marginLeft: -1
        }
      }, this.props.symbol));
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
  class f extends c.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "under-arc-symbol ig-ex-br"), (0, n.A)(this, "renderSvg", (e, t, r) => {
        var n = (0, o.Mt)((0, i.zN)(this.context.baseMathModeFontFamily), e, t, r, !0);
        if (void 0 !== n) return n;
        var s = p.A.getPathInfo(e, t, r, !0, (0, i.zN)(this.context.baseMathModeFontFamily).arcs.thinAtEnd);
        return a().createElement("path", {
          d: s.path,
          strokeWidth: s.strokeWidth + "em",
          fill: s.fill
        });
      });
    }
    renderComponent() {
      var e = (0, i.zN)(this.context.baseMathModeFontFamily).arcs,
        t,
        r = {
          marginTop: this.isSingleTextBlockAndLowerSmall(this.props.data.elements.value) ? this.getRoundEmStr(e.smallUnderMarginEm) : void 0 !== e.otherUnderMarginEm ? this.getRoundEmStr(e.otherUnderMarginEm) : "",
          height: this.getRoundEmStr(.5)
        };
      return [a().createElement(l.A, m({
        key: "arc-editor"
      }, this.buildMetaDataDirectChildOrEmpty("value"))), a().createElement("symbol", {
        style: r,
        key: "arc-symbol"
      }, a().createElement(h.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        changedData: (0, o.oB)((0, i.zN)(this.context.baseMathModeFontFamily)),
        renderSvg: this.renderSvg
      }))];
    }
  }
  class y extends d.A {
    getViewComponent() {
      return f;
    }
    getLatextName() {
      return "\\underarc";
    }
    getSymbol() {
      return "⏝";
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return a().createElement(u, {
            symbol: this.symbol
          });
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\underparen"],
        symbol: this.getSymbol(),
        renderSymbol() {
          return a().createElement(u, {
            symbol: this.symbol
          });
        }
      })];
    }
    toLatex(e, t, r) {
      return "\\underparen{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "munder",
        base: t.generateEditor(e.elements.value),
        accent: !0,
        underscript: {
          type: "mo",
          value: this.getSymbol()
        }
      };
    }
  }
  const v = new y();
};
