/* module 69577 — 2314 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.SketchPresetColors = void 0;
  var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    i,
    o = h(r(40927)),
    s,
    a = h(r(5556)),
    l,
    c = h(r(58527)),
    d = r(2825);
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var p = t.SketchPresetColors = function e(t) {
    var r = t.colors,
      i = t.onClick,
      s = void 0 === i ? function () {} : i,
      a = t.onSwatchHover,
      l = (0, c.default)({
        default: {
          colors: {
            margin: "0 -10px",
            padding: "10px 0 0 10px",
            borderTop: "1px solid #eee",
            display: "flex",
            flexWrap: "wrap",
            position: "relative"
          },
          swatchWrap: {
            width: "16px",
            height: "16px",
            margin: "0 10px 10px 0"
          },
          swatch: {
            borderRadius: "3px",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
          }
        },
        "no-presets": {
          colors: {
            display: "none"
          }
        }
      }, {
        "no-presets": !r || !r.length
      }),
      h = function e(t, r) {
        s({
          hex: t,
          source: "hex"
        }, r);
      };
    return o.default.createElement("div", {
      style: l.colors,
      className: "flexbox-fix"
    }, r.map(function (e) {
      var t = "string" == typeof e ? {
          color: e
        } : e,
        r = "" + t.color + (t.title || "");
      return o.default.createElement("div", {
        key: r,
        style: l.swatchWrap
      }, o.default.createElement(d.Swatch, n({}, t, {
        style: l.swatch,
        onClick: h,
        onHover: a,
        focusStyle: {
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color
        }
      })));
    }));
  };
  p.propTypes = {
    colors: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.shape({
      color: a.default.string,
      title: a.default.string
    })])).isRequired
  }, t.default = p;
};
