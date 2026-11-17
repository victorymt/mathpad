/* module 94114 — 837 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(40927),
    i = r.n(n),
    o = r(32485),
    s = r.n(o);
  class a extends i().Component {
    render() {
      var e = s()("common-square-icon", {
        "common-square-icon-expand": this.props.isExpanded
      });
      return i().createElement("div", {
        style: {
          margin: "auto",
          fontSize: 12
        }
      }, i().createElement("div", {
        className: e,
        style: {
          margin: "auto auto 1px auto"
        }
      }), i().createElement("div", {
        style: {
          margin: "auto",
          height: 15,
          lineHeight: "12px"
        }
      }, this.props.symbol), i().createElement("div", {
        className: e,
        style: {
          margin: "1px auto"
        }
      }));
    }
  }
};
