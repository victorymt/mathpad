/* module 46600 — 671 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48327),
    a = r(24829),
    l = r(39314);
  class c extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "disableNoColor", !0);
    }
    renderComponent() {
      var e = {
        strokeWidth: 3,
        stroke: l.A.getHtmlColor(this.props.value)
      };
      return o().createElement("item", {
        className: "setting",
        style: {
          width: 19,
          height: 19,
          padding: 0,
          marginTop: 4
        },
        title: "Text Color"
      }, a.A.textColor(e));
    }
  }
};
