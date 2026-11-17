/* module 81676 — 2700 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(47858);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "math-xx");
    }
    renderComponent() {
      return o().createElement(s.A, h({
        borderIfEmpty: !0
      }, this.buildMetaDataFromName("value")));
    }
  }
  class u extends l.A {
    getViewComponent() {
      return p;
    }
    getSymbol() {
      return "mathxx";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        renderSymbol() {
          var e = {
            width: "23px",
            height: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            textAlign: "center",
            borderColor: "var(--ui-border, gray)",
            fontFamily: "fantasy",
            color: "var(--ui-text, black)",
            paddingTop: "1px",
            fontSize: "9px",
            lineHeight: "14px",
            verticalAlign: "middle",
            margin: "auto"
          };
          return o().createElement("div", {
            className: "math-xx-icon"
          }, o().createElement("div", {
            style: e
          }, this.symbol));
        }
      });
    }
    toModel(e, t, r) {
      var n = super.toModel(e, t, r);
      if ("" == n.text) return n;
      var i = e,
        r;
      return (r = n.elements.value.lines)[0].blocks.forEach(e => c.A.addStyleMod(e, "mathType", i)), r[0].blocks;
    }
  }
  class g extends u {
    toMathml(e, t) {
      return t.generateEditor(e.elements.value);
    }
    getLatextName() {
      return "\\mathbb";
    }
    getSymbol() {
      return "ℕℝ";
    }
  }
  const m = new g();
};
