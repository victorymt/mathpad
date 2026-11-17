/* module 38482 — 1231 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    j: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = this.props,
        t = e.rect,
        r = e.char;
      return i().createElement("div", {
        className: "hk-btn",
        style: {
          position: "absolute",
          left: t.left,
          top: t.top,
          width: t.width,
          height: t.height,
          pointerEvents: "none"
        }
      }, i().createElement("span", {
        style: this.getSpanStyle()
      }, r));
    }
    getSpanStyle() {
      var e = this.props.pos,
        t = {
          position: "absolute",
          fontSize: 11,
          fontWeight: "bold",
          border: "1px solid lightgray",
          background: "white",
          padding: "1px 3px",
          boxShadow: "1px 1px 1px 0px #06060659",
          borderRadius: 3,
          color: "#4caf4f"
        };
      return "right" == e ? (t.right = -20, t.top = "50%", t.transform = "translate(0,-50%)", t) : "top" == e ? (t.top = -20, t.left = "50%", t.transform = "translate(-50%,0)", t) : "bottom" == e ? (t.bottom = -20, t.left = "50%", t.transform = "translate(-50%,0)", t) : void 0;
    }
  }
};
