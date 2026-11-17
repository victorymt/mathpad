/* module 22647 — 5386 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(39791),
    l = r(48440),
    c = r(56585),
    d = r(32485),
    h = r.n(d),
    p = r(36223),
    u = r(24829),
    g = r(94362);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleToggleCollapse", () => {
        var e = c.A.toggleShowHide(this.props.data, "math"),
          t = e.selected,
          r = e.data;
        this.props.selected ? g.A.in(() => {
          this.props.onDataChanged(r, {
            allowChangeEvenNotInWriteMode: !0
          }), this.props.onSelectedChanged(t);
        }) : this.props.onDataChanged(r, {
          focusAcquired: !0,
          preventScroll: !0,
          allowChangeEvenNotInWriteMode: !0
        });
      });
    }
    getClassName() {
      return this.props.data.collapsed ? h()(super.getClassName(), "text-mode-group-inline-collapsed", "role-text-mode-group-inline") : h()(super.getClassName(), "text-mode-group-inline-expanded", "role-text-mode-group-inline");
    }
    renderShowHideElement() {
      return o().createElement("div", {
        key: "settings",
        className: "settings-show-hide no-print",
        style: {
          position: "absolute",
          left: -17,
          top: -1,
          bottom: -1,
          fontSize: 12,
          border: "1px solid lightgray",
          cursor: "pointer",
          width: 15,
          fill: "gray",
          zIndex: 3,
          background: "white",
          alignItems: "center",
          justifyContent: "center"
        },
        onMouseDown: p.A.onMouseDownStopPropagation,
        onDoubleClick: p.A.onDoubleClickStopPropagation,
        onClick: this.handleToggleCollapse
      }, o().createElement("span", {
        style: {
          width: "1em",
          height: "1em",
          display: "inline-block"
        }
      }, u.A.caretRight));
    }
    renderComponent() {
      var e;
      return this.props.data.collapsed ? [o().createElement("span", {
        key: "ss",
        style: {
          display: "flex",
          position: "absolute",
          top: -1,
          bottom: -1,
          left: -1,
          fontSize: 12,
          border: "1px solid lightgray",
          cursor: "pointer",
          width: 18,
          fill: "gray",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3
        },
        onMouseDown: p.A.onMouseDownStopPropagation,
        onDoubleClick: p.A.onDoubleClickStopPropagation,
        onClick: this.handleToggleCollapse
      }, o().createElement("span", {
        style: {
          width: "1em",
          height: "1em",
          display: "inline-block",
          marginRight: "-0.2em"
        }
      }, u.A.caretLeft), o().createElement("span", {
        style: {
          width: "1em",
          height: "1em",
          display: "inline-block",
          marginLeft: "-0.2em"
        }
      }, u.A.caretRight)), o().createElement(a.A, f(f({
        key: "editor-collapsed"
      }, this.buildMetaDataFromName("value")), {}, {
        showBorderOnSelected: !1,
        isTextMode: !0,
        style: {
          display: "inline-block",
          marginLeft: 21
        }
      }))] : [o().createElement(a.A, f(f({
        key: "editor-expanded"
      }, this.buildMetaDataFromName("value")), {}, {
        showBorder: this.isSelected(),
        isTextMode: !0
      })), this.renderShowHideElement()];
    }
    getCompositeBlockStyle() {
      if (this.props.data.collapsed) return f(f({}, super.getCompositeBlockStyle()), {}, {
        border: "1px dotted lightgray"
      });
    }
  }
  class v extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\text-mode-group-inline";
    }
    getSymbol() {
      return "group";
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
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return r.toLatexFromEditor(e.elements.value, t);
    }
  }
  const b = new v();
};
