/* module 26642 — 8521 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => C,
    i: () => S
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(35835),
    c = r(21774),
    d = r(37566),
    h = r(36223),
    p = r(55451),
    u = r(32485),
    g = r.n(u),
    m = r(84258),
    f = r(32725),
    y = r(85576),
    v = r(516);
  function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "inFocus", void 0), (0, n.A)(this, "component", void 0), (0, n.A)(this, "title", void 0), (0, n.A)(this, "preventCloseOnLostFocus", void 0), (0, n.A)(this, "closedOnEscape", !0), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "focusRequest", 0), (0, n.A)(this, "expandContainerElement", void 0), (0, n.A)(this, "onMouseDown", e => {
        this.props.disabled || (this.state.expand ? this.closeExpand() : this.innerOpenExpand(!0, e));
      }), (0, n.A)(this, "onFocus", e => {
        this.inFocus = !0, e.preventDefault(), e.stopPropagation();
        var t = a().findDOMNode(this);
        d.ms(t, "custom-focus");
      }), (0, n.A)(this, "handleEscape", e => {
        27 == e.event.keyCode && this.state.expand && (this.closeExpand(), this.focusTrigger(), e.stopOther = !0);
      }), (0, n.A)(this, "outside", e => {
        this.state.expand && !this.preventCloseOnLostFocus && this.component && !this.component.contains(e.target) && this.closeExpand();
      }), (0, n.A)(this, "handleCustomFocus", () => {
        this.inFocus = !0;
      }), (0, n.A)(this, "onLostFocus", e => {
        C.__testDisableCollapsedOnBlur || (this.inFocus = !1, this.preventCloseOnLostFocus || p.A.next(() => {
          var e;
          !this.mounted || this.inFocus || null !== (e = this.component) && void 0 !== e && e.contains(document.activeElement) || this.state.expand && this.closeExpand();
        }));
      }), (0, n.A)(this, "onItemSelect", (e, t) => {
        var r, n;
        t && (t.stopPropagation(), t.preventDefault()), this.props.disabled || (this.props.preventCloseOnSelect || this.closeExpand(), null === (r = (n = this.props).onItemSelect) || void 0 === r || r.call(n, e));
      }), (0, n.A)(this, "onExpandContainerMouseDown", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "handleRef", e => {
        this.component = e;
      }), (0, n.A)(this, "onRootKeyDown", e => {
        e.target !== this.component || this.props.disabled || [13, 32, 40].indexOf(e.keyCode) >= 0 && (e.preventDefault(), e.stopPropagation(), this.openExpand(!0));
      }), this.state = {
        expand: !1
      };
    }
    isExpanded() {
      return !!this.state.expand;
    }
    shouldComponentUpdate(e, t) {
      return t != this.state || !c.A.areEqualShallow(e, this.props);
    }
    innerOpenExpand(e, t, r) {
      if (!this.props.disabled) {
        if (r && (this.onHide = r), !this.state.expand && (t && h.A.setCustomInfo(t, l.A.getBuilder().withFocusAcquired().build()), e)) {
          var n = ++this.focusRequest;
          p.A.waitABit(() => {
            n === this.focusRequest && this.mounted && this.component && this.state.expand && !this.props.disabled && !this.component.contains(document.activeElement) && this.component.focus();
          });
        }
        this.setState({
          expand: !0
        });
      }
    }
    openExpand(e, t) {
      this.innerOpenExpand(e, void 0, t);
    }
    closeExpand() {
      if (this.focusRequest++, this.state.expand) {
        var e = this.onHide;
        this.onHide = void 0, this.setState({
          expand: !1
        }, e);
      }
    }
    componentDidUpdate(e, t) {
      if (this.props.disabled && this.state.expand) this.closeExpand();else {
        if (this.state.expand && (this.state.expand != t.expand || e !== this.props) && this.expandContainerElement) {
          var r = v.A.getElementClientSize(this.expandContainerElement);
          this.state.expandContainerSize && r.width === this.state.expandContainerSize.width && r.height === this.state.expandContainerSize.height || this.setState({
            expandContainerSize: r
          });
        }
        this.closedOnEscape && this.state.expand != t.expand && (this.state.expand ? f.A.stack(this.handleEscape) : f.A.remove(this.handleEscape));
      }
    }
    componentDidMount() {
      this.mounted = !0, document.addEventListener("mousedown", this.outside, !0), document.addEventListener("touchstart", this.outside, !0);
      var e = a().findDOMNode(this);
      d.KT(e, "custom-focus", this.handleCustomFocus);
    }
    componentWillUnmount() {
      this.mounted = !1, document.removeEventListener("mousedown", this.outside, !0), document.removeEventListener("touchstart", this.outside, !0);
      var e = a().findDOMNode(this);
      d.Bo(e, "custom-focus", this.handleCustomFocus), this.closedOnEscape && f.A.remove(this.handleEscape);
    }
    getComponentClassName() {
      return "";
    }
    renderExpandContainer() {
      if (this.state.expand) return o().createElement("div", {
        style: this.props.expandContainerStyle,
        "data-role": "expand-container",
        onMouseDown: this.onExpandContainerMouseDown
      }, this.renderExpandComponent(), this.renderExpandContainerPlaceHolder());
    }
    renderExpandContainerPlaceHolder() {}
    getStyle() {
      return this.props.noZIndex ? x(x({}, this.props.style), {}, {
        zIndex: "unset"
      }) : this.props.style;
    }
    suggestExpandPositionLeftTop() {
      var e;
      return this.props.useFixedPosition && this.component ? y.c.suggestExpandPositionLeftTop({
        type: "fixed",
        elementToSearchContext: this.component,
        mainElement: this.component
      }, this.state.expandContainerSize) : y.c.suggestExpandPositionLeftTop({
        type: "absolute",
        absoluteTo: this.component,
        mainElement: this.component
      }, this.state.expandContainerSize);
    }
    getSuggestExpandStyle() {
      var e = this.props.useFixedPosition,
        t = this.suggestExpandPositionLeftTop();
      return {
        position: e ? "fixed" : "absolute",
        left: t.left,
        top: t.top,
        zIndex: 9999
      };
    }
    registerExpandContainer(e) {
      this.expandContainerElement = e;
    }
    focusTrigger() {
      var e;
      null === (e = this.component) || void 0 === e || e.focus();
    }
    getTabIndex() {
      return this.props.disabled ? -1 : 0;
    }
    render() {
      return o().createElement("expandable-component", {
        className: g()({
          "mobile-tablet": m.A.isMobileOrTablet()
        }),
        style: this.getStyle(),
        title: this.props.title || this.title,
        tabIndex: this.getTabIndex(),
        "aria-expanded": !!this.state.expand,
        "aria-disabled": !!this.props.disabled,
        onKeyDown: this.onRootKeyDown,
        ref: this.handleRef,
        class: this.getComponentClassName(),
        onMouseDown: this.onMouseDown,
        onFocus: this.onFocus,
        onBlur: this.onLostFocus
      }, this.renderExpandContainer(), this.renderComponent());
    }
  }
  (0, n.A)(C, "__testDisableCollapsedOnBlur", void 0);
  var S = e => {
      var t = e.children,
        r = e.style,
        n = e.onHtmlRef;
      return o().createElement("item-options", {
        ref: n,
        style: x(x({}, A), r)
      }, t);
    },
    A = {
      cursor: "default",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: "0",
      top: "26px",
      background: "var(--ui-surface, white)",
      border: "1px solid var(--ui-border, lightgray)",
      boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
      padding: "3px",
      zIndex: 20
    };
  m.A.isCollaboratingTesting() && (window.ExpandableComponent = C);
};
