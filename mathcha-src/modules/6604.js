/* module 6604 — 3091 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    StackrelSc: () => m,
    default: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(83846),
    l = r(48440),
    c = r(89522),
    d = r(70224),
    h = r(69446);
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
      super(...arguments), (0, n.A)(this, "containerClassName", "stackrel-symbol");
    }
    renderComponent() {
      return [o().createElement(s.A, u(u({
        key: "top",
        className: "top cur-top center"
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        fontSizeRatio: .7 * this.props.fontSizeRatio,
        noAreaContainer: !0,
        noSpacingRule: !0,
        stripInfo: this.getMergedStripInfoWithProps(h.m5)
      })), o().createElement("div", {
        style: {
          clear: "both"
        },
        key: "value"
      }, o().createElement(s.A, u(u({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        stripInfo: this.getMergedStripInfoWithProps(h.zZ),
        className: "cur-value center",
        optimizeForOneLine: !0
      })))];
    }
  }
  class m extends l.A {
    getViewComponent() {
      return g;
    }
    getLatextName() {
      return "\\stackrel";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "value",
        elements: {
          value: {
            onRemove: "all"
          },
          sub1: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        renderSymbol: () => o().createElement(c.A, {
          isUnder: !1
        })
      });
    }
    toLatex(e, t, r) {
      return "".concat(this.getLatextName(), "{").concat(r.toLatexFromEditor(e.elements.sub1, t), "}{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toModel(e, t, r, n) {
      var i = this.getModel();
      return i.elements.sub1 = d.A.createEditorWith(r), i.elements.value = d.A.createEditorWith(n), i;
    }
    toMathml(e, t) {
      return {
        type: "mover",
        base: t.generateEditor(e.elements.value),
        overscript: t.generateEditor(e.elements.sub1)
      };
    }
  }
  const f = new m();
};
