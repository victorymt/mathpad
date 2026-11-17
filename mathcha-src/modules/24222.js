/* module 24222 — 2732 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Q: () => y,
    W: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(68657),
    l = r(55007),
    c = r(49812),
    d = r(80931),
    h = r(40490),
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
      return u()("over-arrow-symbol", {
        "ig-ex-br": !this.getMtFuncs().getBracketSettings().extendBracketsForOversymbol
      });
    }
    getSymbol() {
      return "unknown";
    }
    getArrowStyle() {
      return {
        height: this.getRoundEmStr(.6),
        marginBottom: this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.4) : this.getRoundEmStr(-.15)
      };
    }
    renderEditArea() {
      return c.A.isEmptyOrOneTextEditor(this.props.data.elements.value) ? o().createElement(a.A, m({
        key: "value"
      }, this.buildLightMetaDataDirectChildOrEmpty("value"))) : o().createElement(s.A, m(m({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        optimizeForOneLine: !0
      }));
    }
    renderComponent() {
      return [this.renderArrow(), this.renderEditArea()];
    }
  }
  class y extends d.A {
    getLatextName() {
      return "\\unknown";
    }
    getModel() {
      return this.getModelFromStructure({
        value: "editor"
      }, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(h.A, {
            symbol: this.symbol,
            height: 10
          });
        }
      });
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
};
