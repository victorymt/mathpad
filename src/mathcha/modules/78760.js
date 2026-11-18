/* module 78760 — 1019 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48327),
    a = r(39314);
  class l extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "disableNoColor", !0);
    }
    renderComponent() {
      var e = {
        strokeWidth: 3,
        stroke: a.A.getHtmlColor(this.props.value)
      };
      return o().createElement("item", {
        className: "setting",
        style: {
          width: 26
        },
        title: "Text Color"
      }, o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%",
          transform: "translate(0px,2px)"
        }
      }, o().createElement("text", {
        style: {
          fontSize: 15,
          fontFamily: "Asana-Math, Asana"
        },
        x: "8",
        y: "13"
      }, "A"), o().createElement("line", {
        x1: "2",
        y1: "18",
        x2: "24",
        y2: "18",
        style: e
      })));
    }
  }
};
