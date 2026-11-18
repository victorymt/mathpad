/* module 77753 — 612 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(40927),
    i = r.n(n),
    o = r(48327),
    s = r(24829),
    a = r(39314);
  class l extends o.A {
    renderComponent() {
      var e = {
        fill: a.A.getHtmlColor(this.props.value),
        stroke: "var(--ui-text-disabled, rgb(202, 199, 199))"
      };
      return i().createElement("item", {
        className: "setting",
        style: {
          width: 19,
          height: 20,
          padding: 0,
          marginTop: 4
        },
        title: "Text Background Color"
      }, s.A.bgTextColor(e));
    }
  }
};
