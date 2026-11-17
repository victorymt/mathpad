/* module 22939 — 3461 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.SketchFields = void 0;
  var n,
    i = d(r(40927)),
    o,
    s = d(r(58527)),
    a,
    l = d(r(26195)),
    c = r(2825);
  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var h = t.SketchFields = function e(t) {
    var r = t.onChange,
      n = t.rgb,
      o = t.hsl,
      a = t.hex,
      d = t.disableAlpha,
      h = (0, s.default)({
        default: {
          fields: {
            display: "flex",
            paddingTop: "4px"
          },
          single: {
            flex: "1",
            paddingLeft: "6px"
          },
          alpha: {
            flex: "1",
            paddingLeft: "6px"
          },
          double: {
            flex: "2"
          },
          input: {
            width: "80%",
            padding: "4px 10% 3px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #ccc",
            fontSize: "11px"
          },
          label: {
            display: "block",
            textAlign: "center",
            fontSize: "11px",
            color: "#222",
            paddingTop: "3px",
            paddingBottom: "4px",
            textTransform: "capitalize"
          }
        },
        disableAlpha: {
          alpha: {
            display: "none"
          }
        }
      }, {
        disableAlpha: d
      }),
      p = function e(t, i) {
        t.hex ? l.default.isValidHex(t.hex) && r({
          hex: t.hex,
          source: "hex"
        }, i) : t.r || t.g || t.b ? r({
          r: t.r || n.r,
          g: t.g || n.g,
          b: t.b || n.b,
          a: n.a,
          source: "rgb"
        }, i) : t.a && (t.a < 0 ? t.a = 0 : t.a > 100 && (t.a = 100), t.a /= 100, r({
          h: o.h,
          s: o.s,
          l: o.l,
          a: t.a,
          source: "rgb"
        }, i));
      };
    return i.default.createElement("div", {
      style: h.fields,
      className: "flexbox-fix"
    }, i.default.createElement("div", {
      style: h.double
    }, i.default.createElement(c.EditableInput, {
      style: {
        input: h.input,
        label: h.label
      },
      label: "hex",
      value: a.replace("#", ""),
      onChange: p
    })), i.default.createElement("div", {
      style: h.single
    }, i.default.createElement(c.EditableInput, {
      style: {
        input: h.input,
        label: h.label
      },
      label: "r",
      value: n.r,
      onChange: p,
      dragLabel: "true",
      dragMax: "255"
    })), i.default.createElement("div", {
      style: h.single
    }, i.default.createElement(c.EditableInput, {
      style: {
        input: h.input,
        label: h.label
      },
      label: "g",
      value: n.g,
      onChange: p,
      dragLabel: "true",
      dragMax: "255"
    })), i.default.createElement("div", {
      style: h.single
    }, i.default.createElement(c.EditableInput, {
      style: {
        input: h.input,
        label: h.label
      },
      label: "b",
      value: n.b,
      onChange: p,
      dragLabel: "true",
      dragMax: "255"
    })), i.default.createElement("div", {
      style: h.alpha
    }, i.default.createElement(c.EditableInput, {
      style: {
        input: h.input,
        label: h.label
      },
      label: "a",
      value: Math.round(100 * n.a),
      onChange: p,
      dragLabel: "true",
      dragMax: "100"
    })));
  };
  t.default = h;
};
