/* module 99588 — 2530 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    NormalText: () => g,
    NormalTextSc: () => m,
    default: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(61848),
    d = r(70224),
    h = r(58578);
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
  class g extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "normal-text");
    }
    renderComponent() {
      return o().createElement(s.A, u(u({
        borderIfEmpty: !0
      }, this.buildMetaDataFromName("textValue")), {}, {
        style: {
          fontFamily: h.A.textFontFamilyFromKey(this.context.fixedContextHandler.getMtFuncs().getBaseTextModeFont()),
          fontSize: this.getTextFontSizePixel(),
          fontStyle: "normal"
        },
        renderAsPlainText: !0
      }));
    }
  }
  class m extends l.A {
    getViewComponent() {
      return g;
    }
    getLatextName() {
      return "\\text";
    }
    getSymbol() {
      return "text";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          textValue: {
            onRemove: "all"
          }
        }
      };
    }
    toModel(e) {
      e = e.replace(/\t\r\n/g, " ");
      var t = this.getModel();
      return t.elements.textValue = d.A.createOneTextEditor(e), t;
    }
    toLatex(e, t, r) {
      return t = c.A.setProp(t, "inMathExpression", !1), "\\text{".concat(r.toLatexFromEditor(e.elements.textValue, t), "}");
    }
    toMathml(e, t) {
      var r = e.elements.textValue && e.elements.textValue.lines[0].blocks[0],
        n,
        i;
      return {
        type: "mtext",
        value: (r && r.text || "").replace(/\s/g, " ")
      };
    }
  }
  const f = new m();
};
