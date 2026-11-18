/* module 93843 — 3710 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TagSelectBox: () => m,
    default: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(25742),
    l = r(47858),
    c = r(38937),
    d = r(40961),
    h = r.n(d),
    p = r(37566);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "containerClassName", "mci-tag-select-box-symbol");
    }
    getCompositeBlockStyle() {
      return {
        display: "block",
        borderTop: "1px solid lightgray",
        fontSize: this.context.mathFontSizeBase
      };
    }
    select() {
      this.state.selected || this.setState({
        selected: !0
      });
    }
    deselect() {
      this.state.selected && this.setState({
        selected: !1
      });
    }
    renderComponent() {
      var e = this.props.data;
      return o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          minHeight: 35
        },
        onMouseOver: () => {
          this.setState({
            hover: !0
          });
        },
        onMouseLeave: () => {
          this.setState({
            hover: !1
          });
        },
        onClick: () => {
          var t = h().findDOMNode(this);
          p.ms(t, "tag-select", e.tagId);
        }
      }, o().createElement("div", {
        style: {
          width: 100,
          padding: 5,
          backgroundColor: this.resolveBgCl(),
          marginRight: 10,
          flexShrink: 0,
          fontSize: this.context.fontSizeBase,
          cursor: "pointer"
        }
      }, e.tagText), o().createElement(c.s, g(g({}, this.buildMetaDataFromName("value")), {}, {
        delayEnabled: !0,
        className: "math-mode-font",
        noAreaContainer: !1,
        displayMode: !0,
        isFirstMathModeLevel: !0,
        ignoreFindingMovingBlocks: !0,
        inlineMath: !1,
        style: g(g({}, l.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)), {}, {
          padding: 5
        })
      })));
    }
    resolveBgCl() {
      return this.state.selected ? "lightgray" : this.state.hover ? "#e8e8e8" : "#f7f7f7";
    }
  }
  class f extends s.A {
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
      return m;
    }
    getLatextName() {
      return "\\mci-tag-ref";
    }
    getSymbol() {
      return "ref";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    toLatex() {
      return "";
    }
  }
  const y = new f();
};
