/* module 96734 — 2897 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CursorPlacement: () => d,
    CursorPlacementSc: () => p,
    default: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440);
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
  class d extends s.A {
    renderComponent() {
      return o().createElement("span", {
        style: {
          background: "#e8e7e7",
          paddingLeft: "0.1em",
          paddingRight: "0.1em"
        }
      }, h());
    }
  }
  function h(e) {
    return o().createElement("svg", {
      style: c({
        width: "0.38em",
        fill: "gray"
      }, e),
      viewBox: "0 0 256 512"
    }, o().createElement("path", {
      d: "M256 52.048V12.065C256 5.496 250.726.148 244.158.066 211.621-.344 166.469.011 128 37.959 90.266.736 46.979-.114 11.913.114 5.318.157 0 5.519 0 12.114v39.645c0 6.687 5.458 12.078 12.145 11.998C38.111 63.447 96 67.243 96 112.182V224H60c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h36v112c0 44.932-56.075 48.031-83.95 47.959C5.404 447.942 0 453.306 0 459.952v39.983c0 6.569 5.274 11.917 11.842 11.999 32.537.409 77.689.054 116.158-37.894 37.734 37.223 81.021 38.073 116.087 37.845 6.595-.043 11.913-5.405 11.913-12V460.24c0-6.687-5.458-12.078-12.145-11.998C217.889 448.553 160 444.939 160 400V288h36c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-36V112.182c0-44.932 56.075-48.213 83.95-48.142 6.646.018 12.05-5.346 12.05-11.992z"
    }));
  }
  class p extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return d;
    }
    getLatextName() {
      return "\\cursor-placement";
    }
    getSymbol() {
      return "cursor-placement";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol: () => h()
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex(e) {
      return "";
    }
  }
  const u = new p();
};
