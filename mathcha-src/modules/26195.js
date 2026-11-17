/* module 26195 — 1871 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0;
  var n,
    i = a(r(76135)),
    o,
    s = a(r(87021));
  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var l = t.simpleCheckForValidColor = function e(t) {
      var r = ["r", "g", "b", "a", "h", "s", "l", "v"],
        n = 0,
        o = 0;
      return (0, i.default)(r, function (e) {
        var r;
        t[e] && (n += 1, isNaN(t[e]) || (o += 1), ("s" === e || "l" === e) && /^\d+%$/.test(t[e]) && (o += 1));
      }), n === o && t;
    },
    c = t.toState = function e(t, r) {
      var n = t.hex ? (0, s.default)(t.hex) : (0, s.default)(t),
        i = n.toHsl(),
        o = n.toHsv(),
        a = n.toRgb(),
        l = n.toHex(),
        c;
      return 0 === i.s && (i.h = r || 0, o.h = r || 0), {
        hsl: i,
        hex: "000000" === l && 0 === a.a ? "transparent" : "#" + l,
        rgb: a,
        hsv: o,
        oldHue: t.h || r || i.h,
        source: t.source
      };
    },
    d = t.isValidHex = function e(t) {
      var r = "#" === String(t).charAt(0) ? 1 : 0;
      return t.length !== 4 + r && t.length < 7 + r && (0, s.default)(t).isValid();
    },
    h = t.getContrastingColor = function e(t) {
      if (!t) return "#fff";
      var r = c(t),
        n;
      return "transparent" === r.hex ? "rgba(0,0,0,0.4)" : (299 * r.rgb.r + 587 * r.rgb.g + 114 * r.rgb.b) / 1e3 >= 128 ? "#000" : "#fff";
    },
    p = t.red = {
      hsl: {
        a: 1,
        h: 0,
        l: .5,
        s: 1
      },
      hex: "#ff0000",
      rgb: {
        r: 255,
        g: 0,
        b: 0,
        a: 1
      },
      hsv: {
        h: 0,
        s: 1,
        v: 1,
        a: 1
      }
    };
  t.default = t;
};
