/* module 59531 — 849 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = this.props,
        t = e.symbol,
        r = e.double;
      return i().createElement("div", {
        className: "under-line-icon",
        style: {
          margin: "auto",
          width: 12,
          fontSize: 12,
          position: "relative"
        }
      }, i().createElement("div", {
        className: "under-wrapper"
      }, t), r && i().createElement("div", {
        style: {
          position: "absolute",
          bottom: -6,
          left: 3
        },
        className: "under-wrapper"
      }, t), i().createElement("div", {
        className: "common-big-square-icon square",
        style: {
          marginTop: -12
        }
      }));
    }
  }
};
