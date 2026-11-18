/* module 73477 — 5779 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Alpha = void 0;
  var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    i = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
    o = r(40927),
    s = g(o),
    a,
    l = g(r(58527)),
    c,
    d = u(r(46412)),
    h,
    p = g(r(25413));
  function u(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function g(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function m(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function f(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function y(e, t) {
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
  var v = t.Alpha = function (e) {
    function t() {
      var e, r, n, i;
      m(this, t);
      for (var o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
      return r = n = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.handleChange = function (e) {
        var t = d.calculateChange(e, n.props.hsl, n.props.direction, n.props.a, n.container);
        t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
      }, n.handleMouseDown = function (e) {
        n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp);
      }, n.handleMouseUp = function () {
        n.unbindEventListeners();
      }, n.unbindEventListeners = function () {
        window.removeEventListener("mousemove", n.handleChange), window.removeEventListener("mouseup", n.handleMouseUp);
      }, f(n, i = r);
    }
    return y(t, e), i(t, [{
      key: "componentWillUnmount",
      value: function e() {
        this.unbindEventListeners();
      }
    }, {
      key: "render",
      value: function e() {
        var t = this,
          r = this.props.rgb,
          i = (0, l.default)({
            default: {
              alpha: {
                absolute: "0px 0px 0px 0px",
                borderRadius: this.props.radius
              },
              checkboard: {
                absolute: "0px 0px 0px 0px",
                overflow: "hidden",
                borderRadius: this.props.radius
              },
              gradient: {
                absolute: "0px 0px 0px 0px",
                background: "linear-gradient(to right, rgba(" + r.r + "," + r.g + "," + r.b + ", 0) 0%,\n           rgba(" + r.r + "," + r.g + "," + r.b + ", 1) 100%)",
                boxShadow: this.props.shadow,
                borderRadius: this.props.radius
              },
              container: {
                position: "relative",
                height: "100%",
                margin: "0 3px"
              },
              pointer: {
                position: "absolute",
                left: 100 * r.a + "%"
              },
              slider: {
                width: "4px",
                borderRadius: "1px",
                height: "8px",
                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                background: "#fff",
                marginTop: "1px",
                transform: "translateX(-2px)"
              }
            },
            vertical: {
              gradient: {
                background: "linear-gradient(to bottom, rgba(" + r.r + "," + r.g + "," + r.b + ", 0) 0%,\n           rgba(" + r.r + "," + r.g + "," + r.b + ", 1) 100%)"
              },
              pointer: {
                left: 0,
                top: 100 * r.a + "%"
              }
            },
            overwrite: n({}, this.props.style)
          }, {
            vertical: "vertical" === this.props.direction,
            overwrite: !0
          });
        return s.default.createElement("div", {
          style: i.alpha
        }, s.default.createElement("div", {
          style: i.checkboard
        }, s.default.createElement(p.default, {
          renderers: this.props.renderers
        })), s.default.createElement("div", {
          style: i.gradient
        }), s.default.createElement("div", {
          style: i.container,
          ref: function e(r) {
            return t.container = r;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, s.default.createElement("div", {
          style: i.pointer
        }, this.props.pointer ? s.default.createElement(this.props.pointer, this.props) : s.default.createElement("div", {
          style: i.slider
        }))));
      }
    }]), t;
  }(o.PureComponent || o.Component);
  t.default = v;
};
