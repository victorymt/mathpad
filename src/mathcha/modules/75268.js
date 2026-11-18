/* module 75268 — 2209 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.active = void 0;
  var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    i,
    o = s(r(40927));
  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function a(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function c(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var d = t.active = function e(t) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return function (e) {
      function i() {
        var e, s, c, d;
        a(this, i);
        for (var h = arguments.length, p = Array(h), u = 0; u < h; u++) p[u] = arguments[u];
        return s = c = l(this, (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(e, [this].concat(p))), c.state = {
          active: !1
        }, c.handleMouseDown = function () {
          return c.setState({
            active: !0
          });
        }, c.handleMouseUp = function () {
          return c.setState({
            active: !1
          });
        }, c.render = function () {
          return o.default.createElement(r, {
            onMouseDown: c.handleMouseDown,
            onMouseUp: c.handleMouseUp
          }, o.default.createElement(t, n({}, c.props, c.state)));
        }, l(c, d = s);
      }
      return c(i, e), i;
    }(o.default.Component);
  };
  t.default = d;
};
