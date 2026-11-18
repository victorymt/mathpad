/* module 91614 — 4735 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n;
  n = {
    value: !0
  }, n = void 0;
  var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    o,
    s = v(r(40927)),
    a,
    l = v(r(5556)),
    c,
    d = v(r(58527)),
    h,
    p = v(r(55364)),
    u = r(2825),
    g,
    m = v(r(22939)),
    f,
    y = v(r(69577));
  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var b = n = function e(t) {
    var r = t.width,
      n = t.rgb,
      o = t.hex,
      a = t.hsv,
      l = t.hsl,
      c = t.onChange,
      h = t.onSwatchHover,
      g = t.disableAlpha,
      f = t.presetColors,
      v = t.renderers,
      b = t.styles,
      x = void 0 === b ? {} : b,
      C = t.className,
      S = void 0 === C ? "" : C,
      A = (0, d.default)((0, p.default)({
        default: i({
          picker: {
            width: r,
            padding: "10px 10px 0",
            boxSizing: "initial",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
          },
          saturation: {
            width: "100%",
            paddingBottom: "75%",
            position: "relative",
            overflow: "hidden"
          },
          Saturation: {
            radius: "3px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          controls: {
            display: "flex"
          },
          sliders: {
            padding: "4px 0",
            flex: "1"
          },
          color: {
            width: "24px",
            height: "24px",
            position: "relative",
            marginTop: "4px",
            marginLeft: "4px",
            borderRadius: "3px"
          },
          activeColor: {
            absolute: "0px 0px 0px 0px",
            borderRadius: "2px",
            background: "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          hue: {
            position: "relative",
            height: "10px",
            overflow: "hidden"
          },
          Hue: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          },
          alpha: {
            position: "relative",
            height: "10px",
            marginTop: "4px",
            overflow: "hidden"
          },
          Alpha: {
            radius: "2px",
            shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
          }
        }, x),
        disableAlpha: {
          color: {
            height: "10px"
          },
          hue: {
            height: "10px"
          },
          alpha: {
            display: "none"
          }
        }
      }, x), {
        disableAlpha: g
      });
    return s.default.createElement("div", {
      style: A.picker,
      className: "sketch-picker " + S
    }, s.default.createElement("div", {
      style: A.saturation
    }, s.default.createElement(u.Saturation, {
      style: A.Saturation,
      hsl: l,
      hsv: a,
      onChange: c
    })), s.default.createElement("div", {
      style: A.controls,
      className: "flexbox-fix"
    }, s.default.createElement("div", {
      style: A.sliders
    }, s.default.createElement("div", {
      style: A.hue
    }, s.default.createElement(u.Hue, {
      style: A.Hue,
      hsl: l,
      onChange: c
    })), s.default.createElement("div", {
      style: A.alpha
    }, s.default.createElement(u.Alpha, {
      style: A.Alpha,
      rgb: n,
      hsl: l,
      renderers: v,
      onChange: c
    }))), s.default.createElement("div", {
      style: A.color
    }, s.default.createElement(u.Checkboard, null), s.default.createElement("div", {
      style: A.activeColor
    }))), s.default.createElement(m.default, {
      rgb: n,
      hsl: l,
      hex: o,
      onChange: c,
      disableAlpha: g
    }), s.default.createElement(y.default, {
      colors: f,
      onClick: c,
      onSwatchHover: h
    }));
  };
  b.propTypes = {
    disableAlpha: l.default.bool,
    width: l.default.oneOfType([l.default.string, l.default.number]),
    styles: l.default.object
  }, b.defaultProps = {
    disableAlpha: !1,
    width: 200,
    styles: {},
    presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
  }, t.Ay = (0, u.ColorWrap)(b);
};
