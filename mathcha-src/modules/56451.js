/* module 56451 — 1287 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    i,
    o = l(r(40927)),
    s,
    a = l(r(5556));
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function c(e, t) {
    var r = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r;
  }
  var d = function e(t) {
    var r = t.children,
      i = t.width,
      s = t.height,
      a = t.style,
      l = void 0 === a ? {} : a,
      d = c(t, ["children", "width", "height", "style"]);
    return o.default.createElement("svg", n({
      children: r,
      fill: "currentColor",
      preserveAspectRatio: "xMidYMid meet",
      height: s,
      width: i,
      style: l
    }, d));
  };
  d.propTypes = {
    children: a.default.node.isRequired,
    width: a.default.oneOfType([a.default.number, a.default.string]),
    height: a.default.oneOfType([a.default.number, a.default.string]),
    style: a.default.object
  }, t.default = d;
};
