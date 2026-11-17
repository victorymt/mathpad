/* module 91617 — 11516 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => b
  });
  var n = r(64467),
    i = r(37566),
    o = r(40927),
    s = r.n(o),
    a = r(26642),
    l = r(32485),
    c = r.n(l),
    d = r(45862);
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
  class u extends s().Component {
    render() {
      return s().createElement(d.$, {
        variant: this.props.variant,
        className: c()("ui-menu-trigger", this.props.className),
        style: this.props.style,
        disabled: this.props.disabled,
        title: this.props.title,
        "aria-label": this.props.ariaLabel,
        "aria-haspopup": "menu",
        "aria-expanded": this.props.expanded,
        "aria-controls": this.props.expanded ? this.props.menuId : void 0,
        onMouseDown: e => {
          var t, r;
          (e.preventDefault(), e.stopPropagation(), this.props.disabled) || (null === (t = (r = this.props).onPointerDown) || void 0 === t || t.call(r, e), this.props.onToggle());
        },
        onClick: e => {
          e.stopPropagation(), e.nativeEvent.detail || this.props.disabled || (!this.props.expanded && this.props.onOpenKeyboard ? this.props.onOpenKeyboard() : this.props.onToggle());
        },
        onKeyDown: e => {
          var t, r;
          40 !== e.keyCode && 38 !== e.keyCode || this.props.disabled || (e.preventDefault(), e.stopPropagation(), null === (t = (r = this.props).onOpenKeyboard) || void 0 === t || t.call(r));
        }
      }, this.props.children, !1 !== this.props.caret && s().createElement("i", {
        className: "fa fa-caret-down tw:ml-[5px]",
        "aria-hidden": "true"
      }));
    }
  }
  class g extends s().Component {
    render() {
      return s().createElement("div", {
        className: "tw:inline-flex tw:items-stretch",
        style: this.props.style
      }, s().createElement(d.$, {
        className: this.props.actionClassName,
        variant: this.props.variant || "primary",
        disabled: this.props.disabled,
        title: this.props.actionTitle,
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation(), this.props.disabled || this.props.onAction();
        },
        onClick: e => {
          e.stopPropagation(), e.nativeEvent.detail || this.props.disabled || this.props.onAction();
        }
      }, this.props.children), !1 !== this.props.hasMenu && s().createElement(u, p(p({}, this.props), {}, {
        className: c()("ui-split-menu-trigger", this.props.className),
        style: {
          marginLeft: -1,
          padding: "2px 5px"
        },
        ariaLabel: this.props.ariaLabel || "More options"
      }), null));
    }
  }
  var m = r(23466);
  class f extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        active: void 0
      }), (0, n.A)(this, "root", void 0), (0, n.A)(this, "buttons", {}), (0, n.A)(this, "keyDown", e => {
        var t = e.target.getAttribute("role");
        if (!("menuitem" !== t && "menuitemcheckbox" !== t || e.defaultPrevented || [35, 36, 38, 40].indexOf(e.keyCode) < 0)) {
          e.preventDefault(), e.stopPropagation();
          var r = this.props.items.filter(e => this.eligible(e));
          if (r.length) {
            var n = r.findIndex(e => e.value === this.state.active),
              i = 36 === e.keyCode ? 0 : 35 === e.keyCode ? r.length - 1 : (n + (40 === e.keyCode ? 1 : r.length - 1)) % r.length;
            this.focus(r[i]);
          }
        }
      });
    }
    eligible(e) {
      return e && !e.noSelect && !e.isSeperator && !("function" == typeof e.disabled ? e.disabled() : e.disabled);
    }
    componentDidMount() {
      this.props.focusOnMount && this.focusEdge(!1);
    }
    componentDidUpdate() {
      void 0 === this.state.active || this.props.items.some(e => e.value === this.state.active && this.eligible(e)) || this.focusEdge(!1);
    }
    focusEdge(e) {
      var t = this.props.items.filter(e => this.eligible(e));
      this.focus(t[e ? t.length - 1 : 0]);
    }
    focus(e) {
      var t, r;
      this.state.active !== (null == e ? void 0 : e.value) && this.setState({
        active: null == e ? void 0 : e.value
      }), e ? null === (t = this.buttons[e.value]) || void 0 === t || t.focus() : null === (r = i.Zy(this.root, 'input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex="0"]')) || void 0 === r || r.focus();
    }
    select(e) {
      var t = this.props.items.find(t => t.value === e);
      this.eligible(t) && this.props.onSelect(t.value);
    }
    render() {
      return s().createElement("div", {
        ref: e => this.root = e,
        id: this.props.id,
        role: "menu",
        className: "ui-menu-list tw:flex tw:max-h-[calc(100vh-16px)] tw:flex-col tw:overflow-y-auto",
        onKeyDown: this.keyDown
      }, (this.props.items || []).map((e, t) => {
        if (e.isSeperator) return s().createElement("div", {
          role: "separator",
          key: t,
          className: "tw:mx-0 tw:my-[3px] tw:border-0 tw:border-t tw:border-solid tw:border-[var(--ui-border,lightgray)]"
        });
        var r = "function" == typeof e.display ? e.display(e) : e.display;
        return e.noSelect ? s().createElement("div", {
          role: "presentation",
          key: e.value,
          className: "tw:px-[8px] tw:py-[5px]",
          style: this.props.itemStyle
        }, r) : s().createElement("button", {
          type: "button",
          key: e.value,
          ref: t => this.buttons[e.value] = t,
          role: e.isCheckBox ? "menuitemcheckbox" : "menuitem",
          "aria-checked": e.isCheckBox ? !!e.checked : void 0,
          disabled: !this.eligible(e),
          tabIndex: -1,
          style: this.props.itemStyle,
          className: "ui-menu-item tw:text-left tw:border tw:border-solid tw:border-transparent tw:[background:transparent] tw:px-[8px] tw:py-[5px] tw:cursor-pointer",
          onFocus: () => {
            this.state.active !== e.value && this.setState({
              active: e.value
            });
          },
          onMouseDown: t => {
            t.preventDefault(), t.stopPropagation(), this.select(e.value);
          },
          onClick: t => {
            t.stopPropagation(), t.nativeEvent.detail || this.select(e.value);
          }
        }, e.isCheckBox && s().createElement("span", {
          "aria-hidden": "true",
          className: "tw:mr-2"
        }, s().createElement(m.d, {
          checked: !!e.checked,
          disabled: !this.eligible(e)
        })), e.icon, s().createElement("span", {
          style: e.isCheckBox ? this.props.checkboxTextStyle : void 0
        }, r));
      }));
    }
  }
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "menuId", "ui-menu-" + ++b.nextId), (0, n.A)(this, "keyboardOpen", !1), (0, n.A)(this, "toggle", () => {
        this.keyboardOpen = !1, this.state.expand ? this.closeExpand() : this.openExpand(!0);
      }), (0, n.A)(this, "openKeyboard", () => {
        var e;
        this.keyboardOpen = !0, this.state.expand ? null === (e = i.Zy(this.component, '[role="menuitem"]:not(:disabled), [role="menuitemcheckbox"]:not(:disabled)')) || void 0 === e || e.focus() : this.openExpand(!1);
      });
    }
    getComponentClassName() {
      return c()("button-action", this.props.className, {
        selected: this.state.expand
      });
    }
    getTabIndex() {
      return -1;
    }
    focusTrigger() {
      var e;
      null === (e = i.Zy(this.component, "button[aria-haspopup]")) || void 0 === e || e.focus();
    }
    renderComponent() {
      var e = {
          expanded: !!this.state.expand,
          disabled: this.props.disabled,
          menuId: this.menuId,
          title: this.props.title,
          ariaLabel: this.props.ariaLabel,
          onToggle: this.toggle,
          onOpenKeyboard: this.openKeyboard
        },
        t,
        r;
      return this.props.buttonWithMoreOptionsStyle ? s().createElement(g, v(v({}, e), {}, {
        style: this.props.labelStyle,
        actionClassName: this.props.buttonWithMoreOptionsStyleClass,
        variant: this.props.variant || (null !== (t = this.props.buttonWithMoreOptionsStyleClass) && void 0 !== t && t.includes("btn-normal") ? "normal" : "primary"),
        actionTitle: this.props.buttonWithMoreOptionsTitle,
        hasMenu: !(null === (r = this.props.items) || void 0 === r || !r.length),
        onAction: () => {
          var e, t;
          this.props.disabled || null === (e = (t = this.props).onMainButtonClick) || void 0 === e || e.call(t);
        }
      }), this.props.icon, this.props.label) : s().createElement(u, v(v({}, e), {}, {
        variant: this.props.variant || "toolbar",
        style: v({
          height: "auto",
          minHeight: "var(--ui-control-height, 24px)"
        }, this.props.labelStyle),
        caret: this.props.caret
      }), this.props.icon, this.props.label);
    }
    renderExpandComponent() {
      var e = v({
        display: "block",
        position: "absolute",
        left: 0,
        top: 27,
        width: 100,
        background: "var(--ui-surface-muted, rgb(247, 247, 247))",
        border: "1px solid var(--ui-border, #c5c5c5)",
        boxShadow: "1px 1px 1px 0px var(--ui-shadow, #8a8787)"
      }, this.getSuggestExpandStyle());
      return s().createElement("label-item-container", {
        ref: e => this.registerExpandContainer(e),
        style: v(v({}, e), this.props.containerStyle)
      }, s().createElement(f, {
        id: this.menuId,
        items: this.props.items || [],
        itemStyle: this.props.labelSelectStyle,
        checkboxTextStyle: this.props.checkboxTextStyle,
        focusOnMount: this.keyboardOpen,
        onSelect: e => {
          var t;
          !this.props.preventCloseOnSelect && (this.keyboardOpen || null !== (t = this.component) && void 0 !== t && t.contains(document.activeElement)) && this.focusTrigger(), this.onItemSelect(e);
        }
      }));
    }
  }
  (0, n.A)(b, "nextId", 0);
};
