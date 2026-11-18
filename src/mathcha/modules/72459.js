/* module 72459 — 3684 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s);
  class l extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "root", void 0), (0, n.A)(this, "buttons", {});
    }
    componentWillReceiveProps(e) {
      var t,
        r = (e.items || []).find(e => e.key === this.state.focusKey),
        n = !r || e.disabled || (e.disabledKeys || []).indexOf(r.key) >= 0 || (e.hiddenKeys || []).indexOf(r.key) >= 0,
        i = this.props.selectedKeys || [],
        o = e.selectedKeys || [],
        s = i.length !== o.length || o.some((e, t) => e !== i[t]);
      void 0 === this.state.focusKey || !n && (!s || null !== (t = this.root) && void 0 !== t && t.contains(document.activeElement)) || this.setState({
        focusKey: void 0
      });
    }
    isDisabled(e) {
      return this.props.disabled || (this.props.disabledKeys || []).indexOf(e.key) >= 0;
    }
    select(e) {
      var t, r;
      !this.isDisabled(e) && (this.props.hiddenKeys || []).indexOf(e.key) < 0 && (null === (t = (r = this.props).onSelect) || void 0 === t || t.call(r, e));
    }
    onKeyDown(e, t, r) {
      var n,
        i = r.filter(e => !this.isDisabled(e));
      if (i.length) {
        var o = i.indexOf(t),
          s;
        if (39 === e.keyCode || 40 === e.keyCode) s = (o + 1) % i.length;else if (37 === e.keyCode || 38 === e.keyCode) s = (o + i.length - 1) % i.length;else if (36 === e.keyCode) s = 0;else {
          if (35 !== e.keyCode) return;
          s = i.length - 1;
        }
        e.preventDefault(), e.stopPropagation(), i[s] && (null === (n = this.buttons[i[s].key]) || void 0 === n || n.focus());
      }
    }
    render() {
      var e = (this.props.items || []).filter(e => (this.props.hiddenKeys || []).indexOf(e.key) < 0),
        t = this.props.selectedKeys || [],
        r = e.find(e => !this.isDisabled(e) && e.key === this.state.focusKey) || e.find(e => !this.isDisabled(e) && t.indexOf(e.key) >= 0) || e.find(e => !this.isDisabled(e));
      return o().createElement("select-buttons", {
        ref: e => this.root = e,
        role: "group",
        "aria-label": this.props.ariaLabel,
        "aria-disabled": this.props.disabled ? "true" : void 0,
        style: this.props.style,
        class: "setting-group-options ui-toggle-group tw:block"
      }, e.map(n => {
        var i = t.indexOf(n.key) >= 0;
        return o().createElement("button", {
          type: "button",
          key: n.key,
          ref: e => {
            this.buttons[n.key] = e;
          },
          disabled: !!this.isDisabled(n),
          "aria-pressed": i,
          "aria-label": n.label || n.element.props.title || n.key,
          tabIndex: n === r ? 0 : -1,
          onFocus: () => {
            this.state.focusKey !== n.key && this.setState({
              focusKey: n.key
            });
          },
          className: a()("ui-toggle-item tw:inline-block tw:fill-current tw:[background:transparent] tw:select-none tw:p-[2px] tw:cursor-pointer tw:border tw:border-solid tw:border-transparent", {
            selected: i,
            disabled: this.isDisabled(n)
          }),
          style: i && n.selectedStyle ? n.selectedStyle : n.style,
          onKeyDown: t => this.onKeyDown(t, n, e),
          onMouseDown: e => {
            this.props.preventDefault && e.preventDefault(), this.props.stopPropagation && e.stopPropagation(), this.select(n);
          },
          onClick: e => {
            e.nativeEvent.detail || this.select(n);
          }
        }, n.element);
      }));
    }
  }
};
