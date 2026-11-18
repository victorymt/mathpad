/* module 3108 — 2553 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    PrefixBlock: () => d,
    default: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(25742);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "prefix-block"), (0, n.A)(this, "ignoreLtrDirection", !0);
    }
    renderComponent() {
      var e,
        t = this.props.data,
        r = t.prefixText,
        n = {
          display: "inline-block",
          whiteSpace: "pre"
        };
      return null !== (e = t.extraStyles) && void 0 !== e && e.widthEm && (n = c(c({}, n), {}, {
        width: "".concat(t.extraStyles.widthEm, "em")
      })), t.captionBlockId ? o().createElement("span", {
        style: n,
        "data-caption-block-id": t.captionBlockId
      }, r) : t.tocBlockId ? o().createElement("span", {
        style: n,
        "data-toc-block-id": t.tocBlockId
      }) : o().createElement("span", {
        style: n,
        "data-line-id": t.lineId
      }, r);
    }
  }
  class h extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getViewComponent() {
      return d;
    }
    getLatextName() {
      return "\\prefix-block";
    }
    getSymbol() {
      return "";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol: () => "Prefix Block"
      });
    }
    toLatex(e) {
      return e.prefixText;
    }
  }
  const p = new h();
};
