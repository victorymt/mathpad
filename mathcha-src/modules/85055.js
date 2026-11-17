/* module 85055 — 2127 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    j: () => d
  });
  var n = r(10467),
    i = r(92207),
    o = r.n(i),
    s = r(37566),
    a = r(19539),
    l = r(20243);
  class c {
    generatePlotlyToSvgGroup(e) {
      var t = this;
      return (0, n.A)(o().mark(function n() {
        var i, c;
        return o().wrap(function n(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              return o.next = 2, Promise.all([r.e(287), r.e(673), r.e(288)]).then(r.bind(r, 94887));
            case 2:
              return i = o.sent, o.next = 5, Promise.all(s.YG(e, ".plotly-render-container").map(e => {
                var r = Number.parseFloat(s._T(e, "left").replace("px", "")),
                  n = Number.parseFloat(s._T(e, "top").replace("px", "")),
                  o = Number.parseFloat(s._T(e, "width").replace("px", "")),
                  c = Number.parseFloat(s._T(e, "height").replace("px", "")),
                  d = a.A.round2(Number.parseFloat(s.vK(e, "data-rotation"))),
                  h = a.A.round2(Number.parseFloat(s.vK(e, "data-skewx"))),
                  p = "true" == s.vK(e, "data-flipx"),
                  u = new l.Z().orgin(a.A.round2(o / 2), a.A.round2(c / 2)).translate(r, n);
                d && (u = u.rotate(d, "deg")), h && (u = u.skew(h, 0, "deg")), p && (u = u.scale(-1, 1));
                var g = Math.round(o),
                  m = Math.round(c);
                return i.default.toImage(e, {
                  format: "svg",
                  width: g,
                  height: m
                }).then(e => {
                  var r = decodeURIComponent(e.substring(19)),
                    n;
                  return t.addSvgPositionAndStyle(r, u);
                });
              }));
            case 5:
              return c = o.sent, o.abrupt("return", c.join("\n"));
            case 7:
            case "end":
              return o.stop();
          }
        }, n);
      }))();
    }
    addSvgPositionAndStyle(e, t) {
      return '<g transform="'.concat(t.toSVG(), '"> ').concat(e, "</g>");
    }
  }
  var d = new c();
};
