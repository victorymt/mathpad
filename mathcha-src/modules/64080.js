/* module 64080 — 725 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = "square-down common-square-icon ",
        t = "square-up common-square-icon ";
      this.props.isExpanded && (e = e.concat("common-square-icon-expand"), t = t.concat("common-square-icon-expand"));
      var r = "align-center ";
      return this.props.isBorderTop && (r += "border-top"), this.props.isBorderBottom && (r += "border-bottom"), i().createElement("div", {
        className: "icon-lim"
      }, i().createElement("div", {
        className: r
      }, this.props.symbol), i().createElement("div", {
        className: t
      }));
    }
  }
};
