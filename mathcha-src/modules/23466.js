/* module 23466 — 2064 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c,
    d: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(60150);
  class c extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "onMouseDown", e => {
        e.stopPropagation(), e.preventDefault(), this.props.disabled || this.props.onValueChanged(!this.props.checked);
      }), (0, n.A)(this, "onKeyDown", e => {
        32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), e.stopPropagation(), this.props.disabled || this.props.onValueChanged(!this.props.checked));
      });
    }
    render() {
      var e = l.A.addMobileTabletClssIfRequired(a()(this.props.checked ? "checked" : "unchecked", {
        disabled: this.props.disabled
      }));
      return o().createElement("check-box-wrapper", {
        onMouseDown: this.onMouseDown,
        onKeyDown: this.onKeyDown,
        role: "checkbox",
        "aria-checked": this.props.checked ? "true" : "false",
        "aria-disabled": this.props.disabled ? "true" : void 0,
        "aria-label": this.props.ariaLabel,
        tabIndex: this.props.disabled ? -1 : 0,
        class: a()("tw:block tw:cursor-pointer", e),
        style: this.props.style
      }, o().createElement(d, {
        checked: this.props.checked,
        disabled: this.props.disabled
      }), o().createElement("span", {
        className: a()("tw:pt-[8px] tw:pl-[5px]", this.props.bigger ? "tw:text-[13px]" : "tw:text-[12px]"),
        style: this.props.textStyle
      }, this.props.name));
    }
  }
  class d extends o().PureComponent {
    render() {
      return o().createElement("check-box-rect", {
        "aria-hidden": "true",
        class: a()("ui-check-mark tw:inline-flex tw:items-center tw:justify-center tw:relative tw:w-[1.4em] tw:h-[1.35em] tw:text-[11px]", {
          unchecked: !this.props.checked,
          disabled: this.props.disabled
        })
      }, o().createElement("i", {
        className: "fa fa-check"
      }));
    }
  }
};
