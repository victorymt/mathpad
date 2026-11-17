/* module 25413 — 1137 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Checkboard = void 0;
  var n,
    i = d(r(40927)),
    o,
    s = d(r(58527)),
    a,
    l = c(r(27218));
  function c(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var h = t.Checkboard = function e(t) {
    var r = t.white,
      n = t.grey,
      o = t.size,
      a = t.renderers,
      c = t.borderRadius,
      d = t.boxShadow,
      h = (0, s.default)({
        default: {
          grid: {
            borderRadius: c,
            boxShadow: d,
            absolute: "0px 0px 0px 0px",
            background: "url(" + l.get(r, n, o, a.canvas) + ") center left"
          }
        }
      });
    return i.default.createElement("div", {
      style: h.grid
    });
  };
  h.defaultProps = {
    size: 8,
    white: "transparent",
    grey: "rgba(0,0,0,.08)",
    renderers: {}
  }, t.default = h;
};
