/* module 25005 — 2870 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    I: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l {
    draw(e, t, r, n, i) {
      switch (r) {
        case "o":
          return o().createElement("circle", {
            key: n,
            cx: e.x,
            cy: e.y,
            r: t / 2,
            style: i
          });
        case "r":
          var s = t / 2;
          return o().createElement("rect", {
            key: n,
            x: e.x - s,
            y: e.y - s,
            width: t,
            height: t,
            style: i
          });
        case "x":
          var l = t / 2,
            c = "M".concat(e.x - l, ",").concat(e.y - l, " L").concat(e.x + l, ",").concat(e.y + l),
            d = "M".concat(e.x + l, ",").concat(e.y - l, " L").concat(e.x - l, ",").concat(e.y + l);
          return o().createElement("path", {
            key: n,
            d: c + " " + d,
            style: a(a({}, i), {}, {
              fill: "none"
            })
          });
        case "+":
          var h = t / 2,
            p = "M".concat(e.x - h, ",").concat(e.y, " L").concat(e.x + h, ",").concat(e.y),
            u = "M".concat(e.x, ",").concat(e.y - h, " L").concat(e.x, ",").concat(e.y + h);
          return o().createElement("path", {
            key: n,
            d: p + " " + u,
            style: a(a({}, i), {}, {
              fill: "none"
            })
          });
        case "-":
          var g = t / 2,
            m = "M".concat(e.x - g, ",").concat(e.y, " L").concat(e.x + g, ",").concat(e.y);
          return o().createElement("path", {
            key: n,
            d: m,
            style: a(a({}, i), {}, {
              fill: "none"
            })
          });
        case "|":
          var f = t / 2,
            y = "M".concat(e.x, ",").concat(e.y - f, " L").concat(e.x, ",").concat(e.y + f);
          return o().createElement("path", {
            key: n,
            d: y,
            style: a(a({}, i), {}, {
              fill: "none"
            })
          });
      }
    }
  }
  var c = new l();
};
