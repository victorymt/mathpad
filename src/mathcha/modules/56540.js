/* module 56540 — 2060 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48327),
    a = r(39314);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d extends s.A {
    renderComponent() {
      var e = this.props,
        t = e.noHoverBorder,
        r = e.showEmpty,
        n = e.shape,
        i = void 0 === n ? "rect" : n,
        s = a.A.getHtmlColor(this.props.value || "#FFF");
      return o().createElement("item", {
        className: "setting",
        style: c({
          width: 29,
          border: t ? "none" : void 0
        }, this.props.itemStyle),
        title: "Color Select"
      }, o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%",
          overflow: "visible",
          marginTop: -2
        }
      }, "circle" === i ? o().createElement("circle", {
        cx: "50%",
        cy: "50%",
        r: "7",
        style: {
          strokeWidth: 1,
          stroke: "var(--ui-text-muted, gray)",
          fill: r ? "none" : s
        }
      }) : o().createElement("rect", {
        x: "2",
        y: "5",
        width: "25",
        height: "18",
        style: {
          strokeWidth: 1,
          stroke: "var(--ui-text-muted, gray)",
          fill: r ? "none" : s
        }
      })));
    }
  }
};
