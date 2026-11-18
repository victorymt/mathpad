/* module 35246 — 639 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    s: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends n.Component {
    render() {
      return i().createElement("label", {
        className: "ui-radio tw:inline-flex tw:items-center",
        style: this.props.style
      }, i().createElement("input", {
        type: "radio",
        name: this.props.name,
        disabled: this.props.disabled,
        value: this.props.value,
        checked: this.props.checked,
        onChange: this.props.onSelect
      }), i().createElement("span", {
        className: "tw:ml-[3px]"
      }, this.props.label));
    }
  }
};
