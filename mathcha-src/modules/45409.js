/* module 45409 — 2391 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(83846),
    a = r(39791),
    l = r(6604),
    c = r(89522),
    d = r(69446);
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
  class u extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "underset-symbol");
    }
    renderComponent() {
      return [o().createElement("div", {
        key: "value"
      }, o().createElement(a.A, p(p({
        key: "value",
        className: "center"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        noSpacingRule: !0,
        optimizeForOneLine: !0,
        stripInfo: this.getMergedStripInfoWithProps(d.m5)
      }))), o().createElement(a.A, p(p({
        key: "sub1",
        className: "bottom center"
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        fontSizeRatio: .7 * this.props.fontSizeRatio,
        noAreaContainer: !0,
        noSpacingRule: !0,
        stripInfo: this.getMergedStripInfoWithProps(d.zZ)
      }))];
    }
  }
  class g extends l.StackrelSc {
    getViewComponent() {
      return u;
    }
    getLatextName() {
      return "\\underset";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        renderSymbol: () => o().createElement(c.A, {
          isUnder: !0
        })
      });
    }
    toMathml(e, t) {
      return {
        type: "munder",
        base: t.generateEditor(e.elements.value),
        underscript: t.generateEditor(e.elements.sub1)
      };
    }
  }
  const m = new g();
};
