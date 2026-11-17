/* module 83757 — 2846 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(39791),
    l = r(25742),
    c = r(80931),
    d = r(58578);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "operator-name"), (0, n.A)(this, "requestUpperHandled", !0);
    }
    getEditContentTopBottom() {
      var e = s.jS(this.getRootDom(), "editarea")[0];
      return this.getElementRect(e);
    }
    getPowerIndexInfo() {
      var e = this.getElementRect(this.refMap.value.editor);
      return {
        rect: {
          top: e.top,
          height: e.bottom - e.top
        },
        shouldConsiderAsChar: !0
      };
    }
    renderComponent() {
      return o().createElement(a.A, p(p({
        key: "value",
        style: {
          fontFamily: d.A.mathFontFamilyFromKey("\\mathrm", this.context.baseMathModeFontFamily, "characters"),
          fontWeight: "normal",
          fontStyle: "normal"
        },
        className: this.props.customDataStr,
        optimizeForOneLine: !0
      }, this.buildMetaDataFromName("value")), {}, {
        borderIfEmpty: this.isSelected()
      }));
    }
  }
  class g extends c.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isOperatorName", !0);
    }
    getSymbol() {
      return "";
    }
    getViewComponent() {
      return u;
    }
    getLatextName() {
      return "\\operatorname";
    }
    toLatex(e, t, r) {
      return "\\operatorname{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        renderSymbol: () => o().createElement("div", null, o().createElement("div", {
          className: "common-big-square-icon"
        }))
      })];
    }
    toMathml(e, t) {
      t = t.withContextMathvariant("normal");
      var r = e.elements.value,
        n;
      return t.generateEditor(r);
    }
  }
  const m = new g();
};
