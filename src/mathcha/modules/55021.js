/* module 55021 — 4455 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(26642),
    c = r(77009);
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
  class p extends l.A {
    constructor(e) {
      super(e), (0, n.A)(this, "icons", void 0), (0, n.A)(this, "iconMap", void 0), (0, n.A)(this, "diagramHotkeyNumbering", void 0), (0, n.A)(this, "handleDiagramHotkeyNumbering", e => {
        this.diagramHotkeyNumbering = e;
      }), this.icons = null, this.iconMap = {}, this.state = {
        selectedIconKey: this.getIcons()[0].component.key
      };
    }
    innerExpandByHotKey(e, t) {
      this.setState({
        expand: !0
      }, () => {
        this.diagramHotkeyNumbering.show(e, t);
      });
    }
    renderExpandContainerPlaceHolder() {
      return o().createElement(c.d, {
        ref: this.handleDiagramHotkeyNumbering
      });
    }
    renderIconOption(e, t, r, n) {
      return o().createElement("item-option", {
        title: r,
        onClick: () => this.selectItem(t),
        style: h({
          width: 23,
          height: "auto",
          float: "left",
          marginRight: 1,
          textAlign: "center"
        }, n),
        key: (t || "").toString()
      }, e.component, o().createElement("item-caption", {
        style: {
          fontSize: 9,
          width: "100%",
          display: "block",
          marginTop: -2,
          textAlign: "center"
        }
      }, e.caption));
    }
    getCssExpandStyle() {
      return this.props.fullVisibleMode ? {
        display: "block",
        background: "var(--ui-surface, white)"
      } : {
        display: "block",
        position: "absolute",
        left: 38,
        top: 0,
        background: "var(--ui-surface, white)",
        boxShadow: "0px 0px 1px 1px var(--ui-shadow, #c7c3c3)",
        padding: 5
      };
      var e;
    }
    selectItem(e) {
      this.props.onItemSelect(e), this.setState({
        selectedIconKey: e
      }), this.closeExpand();
    }
    getIconOption(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = arguments.length > 2 ? arguments[2] : void 0,
        n = this.getIconMap()[e];
      return this.renderIconOption(n, e, t, r);
    }
    renderComponent() {
      var e = a().find(this.getIcons(), e => e.component.key == this.state.selectedIconKey),
        t = {
          width: 5,
          paddingLeft: 2
        };
      return o().createElement("composite-shape-selector", {
        onMouseDown: this.onMouseDown
      }, o().createElement("item", {
        style: {
          display: "flex",
          padding: 0,
          width: 30
        }
      }, o().createElement("div", {
        style: {
          width: 22
        }
      }, e.component), o().createElement("select-shape-mark", {
        style: t
      }, o().createElement("i", {
        className: "fa fa-caret-right",
        style: {
          lineHeight: "22px",
          fontSize: 10
        }
      }))));
    }
    render() {
      return this.props.fullVisibleMode ? this.renderExpandComponent() : o().createElement("expandable-component", {
        ref: e => this.component = e,
        class: this.getComponentClassName(),
        tabIndex: 0,
        onFocus: this.onFocus,
        onBlur: this.onLostFocus
      }, this.renderExpandContainer(), this.renderComponent());
    }
    getIcons() {
      return this.icons || (this.icons = this.initIcons(), this.icons.forEach(e => this.iconMap[e.component.key] = e)), this.icons;
    }
    getIconMap() {
      return this.getIcons(), this.iconMap;
    }
    getComponentClassName() {
      return "shape-selector";
    }
  }
};
