/* module 25665 — 4713 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    m: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(85576),
    c = r(516);
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
  class p extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "id", "ui-tooltip-" + ++p.nextId), (0, n.A)(this, "root", void 0), (0, n.A)(this, "popup", void 0), (0, n.A)(this, "hovered", !1), (0, n.A)(this, "focused", !1), (0, n.A)(this, "state", {
        visible: !1
      }), (0, n.A)(this, "show", () => {
        this.props.content && this.setState({
          visible: !0
        });
      }), (0, n.A)(this, "hide", () => {
        this.state.visible && this.setState({
          visible: !1
        });
      }), (0, n.A)(this, "outside", e => {
        this.root.contains(e.target) || this.hide();
      }), (0, n.A)(this, "scroll", () => {
        this.state.visible && this.position();
      }), (0, n.A)(this, "keyDown", e => {
        27 === e.keyCode && this.state.visible && (e.preventDefault(), e.stopPropagation(), this.hide());
      });
    }
    componentDidMount() {
      document.addEventListener("keydown", this.keyDown, !0), document.addEventListener("mousedown", this.outside, !0), document.addEventListener("touchstart", this.outside, !0), window.addEventListener("resize", this.hide), window.addEventListener("scroll", this.scroll, !0);
    }
    componentDidUpdate(e, t) {
      this.props.content || !this.state.visible ? !this.state.visible || t.visible && e.content === this.props.content && e.popupStyle === this.props.popupStyle || this.position() : this.hide();
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.keyDown, !0), document.removeEventListener("mousedown", this.outside, !0), document.removeEventListener("touchstart", this.outside, !0), window.removeEventListener("resize", this.hide), window.removeEventListener("scroll", this.scroll, !0);
    }
    position() {
      if (this.popup && this.root) {
        var e = c.A.getElementClientSize(this.popup),
          t = l.c.suggestExpandPositionLeftTop({
            type: "fixed",
            mainElement: this.root,
            elementToSearchContext: this.root
          }, e);
        this.setState({
          position: {
            left: t.left,
            top: t.top
          }
        });
      }
    }
    render() {
      return o().createElement("span", {
        ref: e => this.root = e,
        className: a()("tw:inline-block tw:relative", this.props.className),
        style: this.props.style,
        onMouseEnter: () => {
          this.hovered = !0, this.show();
        },
        onMouseLeave: () => {
          this.hovered = !1, this.focused || this.hide();
        },
        onFocus: () => {
          this.focused = !0, this.show();
        },
        onBlur: () => {
          this.focused = !1, this.hovered || this.hide();
        }
      }, o().createElement("button", {
        type: "button",
        className: "ui-tooltip-trigger tw:p-0 tw:border tw:border-solid tw:border-transparent tw:[background:transparent] tw:cursor-help",
        "aria-label": this.props.label || "More information",
        "aria-describedby": this.state.visible ? this.id : void 0,
        onClick: e => {
          e.stopPropagation(), this.show();
        }
      }, this.props.children), this.state.visible && o().createElement("span", {
        id: this.id,
        role: "tooltip",
        ref: e => this.popup = e,
        className: "ui-tooltip tw:fixed tw:z-[100001] tw:box-border tw:border tw:border-solid tw:p-2.5 tw:text-left tw:max-w-[min(240px,calc(100vw-16px))] tw:whitespace-pre-wrap tw:leading-[1.4em] tw:border-[var(--ui-border,lightgray)] tw:[background:var(--ui-surface,white)] tw:text-[color:var(--ui-text-muted,gray)]",
        style: h(h({}, this.props.popupStyle), this.state.position)
      }, this.props.content));
    }
  }
  (0, n.A)(p, "nextId", 0);
};
