/* module 89522 — 731 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      return this.props.isUnder ? i().createElement("div", {
        className: "stackrel-icon"
      }, i().createElement("div", {
        className: "common-big-square-icon"
      }), i().createElement("div", {
        className: "common-square-icon common-square-icon-expand distance"
      })) : i().createElement("div", {
        className: "stackrel-icon"
      }, i().createElement("div", {
        className: "common-square-icon common-square-icon-expand"
      }), i().createElement("div", {
        className: "common-big-square-icon distance"
      }));
    }
  }
};
