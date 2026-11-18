/* module 54742 — 1396 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(516),
    i = r(40961),
    o = r.n(i),
    s = r(40927),
    a = r.n(s),
    l = r(60693);
  class c {
    generate(e, t) {
      var r = e.nextElementSibling,
        i = r.parentElement,
        s = n.A.getTextDirection(i);
      if ("rtl" == s) {
        var a = l.T.getBCRect(e, t).right,
          c = l.T.getBCRect(r, t).right,
          d = this.buildSvgUnderline(c - a, s);
        o().render(d, e);
      } else {
        var h = l.T.getBCRect(e, t).left,
          p = l.T.getBCRect(r, t).left,
          u = this.buildSvgUnderline(p - h, s);
        o().render(u, e);
      }
    }
    buildSvgUnderline(e, t) {
      var r = e - 5;
      return "rtl" == t ? a().createElement("svg", {
        style: {
          width: e + 5,
          height: 5,
          overflow: "visible",
          display: "inline-block"
        }
      }, a().createElement("path", {
        d: "M 0,5 L".concat(r + 5, ",5"),
        strokeDasharray: "1 2",
        fill: "none"
      })) : a().createElement("svg", {
        style: {
          width: e,
          height: 5,
          overflow: "visible",
          display: "inline-block"
        }
      }, a().createElement("path", {
        d: "M 5,5 L".concat(r + 5, ",5"),
        strokeDasharray: "1 2",
        fill: "none"
      }));
    }
  }
  const d = new c();
};
