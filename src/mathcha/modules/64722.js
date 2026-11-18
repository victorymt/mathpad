/* module 64722 — 2216 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TableOfContentItem: () => h,
    TableOfContentItemSc: () => p,
    default: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(39791);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "toc-item-symbol");
    }
    renderComponent() {
      return o().createElement("span", {
        "data-toc-block-id": this.props.data.id
      }, o().createElement(l.A, d(d({
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        isTextMode: !0
      })));
    }
  }
  class p extends a.A {
    getViewComponent() {
      return h;
    }
    getLatextName() {
      return "\\table-of-content-item";
    }
    getSymbol() {
      return "";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "value",
        elements: {
          value: {
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
        insertInTextModeOnly: !0
      });
    }
    toModel(e, t, r) {}
    toLatex() {
      return this.getLatextName();
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const u = new p();
};
