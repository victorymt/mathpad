/* module 66015 — 3225 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(39791),
    c = r(60693),
    d = r(40961),
    h = r.n(d);
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
  class g extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "text-super-script-symbol"), (0, n.A)(this, "preventTextDecorationStyleSet", !0), (0, n.A)(this, "ignoreLtrDirection", !0);
    }
    getWraplineRects() {
      return c.T.getBCRects(h().findDOMNode(this), this.getMtFuncs().getDocZoomContainer());
    }
    getCompositeBlockStyle() {
      var e = super.getCompositeBlockStyle(),
        t = .65 * this.getComputedFontSizeRatio();
      return u(u({}, e), {}, {
        fontSize: "".concat(t, "em")
      });
    }
    renderComponent() {
      return o().createElement(l.A, u(u({
        key: "editor"
      }, this.buildMetaDataFromName("tsuperValue")), {}, {
        textDirection: this.props.textDirection,
        textDecoration: this.getTextDecorationPassingToChildren(),
        fontSizeRatio: .65 * this.getComputedFontSizeRatio(),
        isTextMode: !0,
        showBorder: this.isChildSelected()
      }));
    }
  }
  class m extends a.A {
    getViewComponent() {
      return g;
    }
    getLatextName() {
      return "\\super-script";
    }
    getSymbol() {
      return "Super Script";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "tsuperValue",
        elements: {
          tsuperValue: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        description: "Super Script",
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("span", null, o().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, "A"), o().createElement("span", {
          style: {
            verticalAlign: "super"
          }
        }, "abc"))
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex(e, t, r) {
      return "\\textsuperscript{".concat(r.toLatexFromEditor(e.elements.tsuperValue, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const f = new m();
};
