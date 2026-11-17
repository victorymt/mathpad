/* module 25982 — 857 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    constructor(e) {
      super(e), this.renderEmpty = this.renderEmpty.bind(this);
    }
    renderEmpty() {
      return i().createElement("div", {
        style: {
          height: 12,
          border: "1px solid lightgray"
        }
      });
    }
    render() {
      return i().createElement("div", {
        style: {
          margin: "auto",
          display: "flex"
        }
      }, i().createElement("div", null, this.props.start), i().createElement("div", {
        style: {
          margin: "4px 2px"
        },
        className: "square common-big-square-icon common-square-icon-expand"
      }), i().createElement("div", null, this.props.end ? this.props.end : this.renderEmpty()));
    }
  }
};
