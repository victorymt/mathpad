/* module 28333 — 1861 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Swatch = void 0;
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
    a = h(r(58527)),
    l = r(74572),
    c,
    d = h(r(25413));
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var p = 13,
    u = t.Swatch = function e(t) {
      var r = t.color,
        i = t.style,
        s = t.onClick,
        l = void 0 === s ? function () {} : s,
        c = t.onHover,
        h = t.title,
        u = void 0 === h ? r : h,
        g = t.children,
        m = t.focus,
        f = t.focusStyle,
        y = void 0 === f ? {} : f,
        v = "transparent" === r,
        b = (0, a.default)({
          default: {
            swatch: n({
              background: r,
              height: "100%",
              width: "100%",
              cursor: "pointer",
              position: "relative",
              outline: "none"
            }, i, m ? y : {})
          }
        }),
        x = function e(t) {
          return l(r, t);
        },
        C = function e(t) {
          return t.keyCode === p && l(r, t);
        },
        S = function e(t) {
          return c(r, t);
        },
        A = {};
      return c && (A.onMouseOver = S), o.default.createElement("div", n({
        style: b.swatch,
        onClick: x,
        title: u,
        tabIndex: 0,
        onKeyDown: C
      }, A), g, v && o.default.createElement(d.default, {
        borderRadius: b.swatch.borderRadius,
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
      }));
    };
  t.default = (0, l.handleFocus)(u);
};
