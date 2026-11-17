/* module 79787 — 4401 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => x
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
    p = r(2543),
    u = r.n(p),
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
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleExpandIconEnter", () => {
        this.setState({
          expandIconHover: !0
        });
      }), (0, n.A)(this, "handleExpandIconLeave", () => {
        this.setState({
          expandIconHover: !1
        });
      }), (0, n.A)(this, "handleToggleCollapse", () => {
        var e = c.A.toggleShowHide(this.props.data, "text"),
          t = e.selected,
          r = e.data;
        g.A.in(() => {
          this.props.onDataChanged(r, {
            allowChangeEvenNotInWriteMode: !0
          }), this.props.onSelectedChanged(t);
        });
      });
    }
    getClassName() {
      return this.props.data.collapsed ? h()(super.getClassName(), c.A.getCompositeBlockClassName(), "role-text-mode-group") : h()(super.getClassName(), "text-mode-group-expanded", "role-text-mode-group");
    }
    renderShowHideElement() {
      if (this.props.isRootLine || this.isChildSelected()) return c.A.renderShowHideElement(this.props.data.collapsed, this.handleToggleCollapse, this.handleExpandIconEnter, this.handleExpandIconLeave);
    }
    renderComponent() {
      var e = this.props.data;
      return v(e), e.collapsed ? [o().createElement(a.A, f(f({
        key: "editor-collapsed"
      }, this.buildMetaDataFromName("value")), {}, {
        showBorderOnSelected: !1,
        isTextMode: !0
      })), this.renderShowHideElement()] : [o().createElement(a.A, f(f({
        key: "editor-expanded"
      }, this.buildMetaDataFromName("value")), {}, {
        showBorder: this.isSelected(),
        isTextMode: !0
      })), this.renderShowHideElement()];
    }
    getCompositeBlockStyle() {
      return {
        display: "block",
        outline: this.state.expandIconHover && !this.props.data.collapsed ? "1px dotted lightgray" : "none"
      };
    }
  }
  function v(e) {
    if (e.elements.textValue) {
      if (e.hiddenData = u().cloneDeep(e.elements.textValue), c.A.assignDefaultStyle(e.hiddenData.lines, "text"), delete e.elements.textValue, e.collapsed) {
        var t = e.elements.value;
        e.elements.value = e.hiddenData, e.hiddenData = t;
      }
    } else if (e.elements.collapsedValue && (e.hiddenData = u().cloneDeep(e.elements.collapsedValue), delete e.elements.collapsedValue, e.collapsed)) {
      var r = e.elements.value;
      e.elements.value = e.hiddenData, e.hiddenData = r;
    }
  }
  class b extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\text-mode-group";
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
        insertInTextModeOnly: !0,
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        singleBlockLine: !0
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return v(e), r.toLatexFromEditor(e.elements.value, t);
    }
  }
  const x = new b();
};
