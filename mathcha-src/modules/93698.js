/* module 93698 — 2811 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => m
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(32485),
    c = r.n(l),
    d = r(36053);
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
  class u extends i.A {
    getCompositeBlockStyle() {
      return p(p({}, super.getCompositeBlockStyle()), {}, {
        display: "inline"
      });
    }
    renderSettings() {
      if (this.isSelected()) return a().createElement(d.C, {
        dzContainer: this.getDzContainer(),
        data: this.props.data,
        onDataChanged: this.props.onDataChanged
      });
    }
    renderComponent() {
      return a().createElement("span", {
        className: c()("page-print-item", "role-page-section-level-1", {
          "isolate-style": this.props.data.isolateStyle
        })
      }, a().createElement("div", {
        className: "role-page-info-bg",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          border: "1px solid lightgray"
        }
      }), a().createElement("span", {
        className: "role-page-section-level1-value"
      }, "Section Level 1"), this.renderSettings());
    }
  }
  class g extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return u;
    }
    getLatextName() {
      return "\\page-section-level-1";
    }
    getSymbol() {
      return "Section Level 1";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getModel() {
      var e = super.getModel();
      return e.isolateStyle = !0, e;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        insertInTextModeOnly: !0,
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      var n;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return "";
    }
  }
  const m = new g();
};
