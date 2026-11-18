/* module 71219 — 3780 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(67882),
    l = r(55007),
    c = r(49812),
    d = r(80931),
    h = r(84881),
    p = r(32485),
    u = r.n(p);
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
  class f extends l.A {
    getClassName() {
      return u()("over-line-symbol", {
        "ig-ex-br": !this.getMtFuncs().getBracketSettings().extendBracketsForOversymbol
      });
    }
    getPowerIndexInfo() {
      var e = this.getElementRect(this.refMap.value.editor);
      return {
        rect: {
          top: e.top,
          height: e.bottom - e.top
        },
        shouldConsiderAsChar: this.isSingleTextBlockFirstLine(this.props.data.elements.value)
      };
    }
    renderEditArea() {
      return c.A.isSingleLineEditor(this.props.data.elements.value) ? o().createElement(a.A, m({
        key: "value",
        fontSizeRatio: 1
      }, this.buildMetaDataDirectChildOrEmpty("value"))) : o().createElement(s.A, m(m({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        optimizeForOneLine: !0
      }));
    }
    renderComponent() {
      var e = {
        height: this.getRoundEmStr(.33),
        marginTop: this.getRoundEmStr(.1),
        marginBottom: this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.48) : this.getRoundEmStr(-.23)
      };
      return [o().createElement("line-border", {
        key: "line",
        style: e
      }, o().createElement(h.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        repeatChar: "⏨",
        baseMathModeFontFamily: this.context.baseMathModeFontFamily
      })), this.renderEditArea()];
    }
  }
  class y extends d.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isOverSymbol", !0), (0, n.A)(this, "renderSymbolIcon", () => o().createElement("div", {
        style: {
          margin: "auto",
          borderTop: "solid 1px black",
          width: 12,
          paddingTop: 4,
          marginTop: 8
        }
      }, o().createElement("div", {
        className: "common-big-square-icon"
      })));
    }
    getSymbol() {
      return "¯";
    }
    getViewComponent() {
      return f;
    }
    getLatextName() {
      return "\\overline";
    }
    toLatex(e, t, r) {
      return "".concat(e.text, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
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
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        renderSymbol: this.renderSymbolIcon
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\bar"],
        renderSymbol: this.renderSymbolIcon
      })];
    }
  }
  const v = new y();
};
