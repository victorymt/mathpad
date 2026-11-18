/* module 87170 — 789 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = {
        margin: "2px auto 2px auto",
        background: this.props.isExpanded ? "var(--ui-surface, white)" : void 0
      };
      return i().createElement("div", {
        style: {
          margin: "auto"
        }
      }, i().createElement("div", {
        className: "common-square-icon",
        style: e
      }), i().createElement("div", {
        style: {
          height: 5,
          lineHeight: "4px",
          margin: "auto",
          textAlign: "center"
        }
      }, this.props.symbol), i().createElement("div", {
        className: "common-square-icon",
        style: e
      }));
    }
  }
};
