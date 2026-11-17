/* module 4749 — 5567 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Saturation = void 0;
  var n = function () {
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
    i = r(40927),
    o = u(i),
    s,
    a = u(r(58527)),
    l,
    c = u(r(7350)),
    d,
    h = p(r(98222));
  function p(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function g(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function m(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function f(e, t) {
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
  var y = t.Saturation = function (e) {
    function t(e) {
      g(this, t);
      var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return r.handleChange = function (e) {
        "function" == typeof r.props.onChange && r.throttle(r.props.onChange, h.calculateChange(e, r.props.hsl, r.container), e);
      }, r.handleMouseDown = function (e) {
        r.handleChange(e), window.addEventListener("mousemove", r.handleChange), window.addEventListener("mouseup", r.handleMouseUp);
      }, r.handleMouseUp = function () {
        r.unbindEventListeners();
      }, r.throttle = (0, c.default)(function (e, t, r) {
        e(t, r);
      }, 50), r;
    }
    return f(t, e), n(t, [{
      key: "componentWillUnmount",
      value: function e() {
        this.throttle.cancel(), this.unbindEventListeners();
      }
    }, {
      key: "unbindEventListeners",
      value: function e() {
        window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
      }
    }, {
      key: "render",
      value: function e() {
        var t = this,
          r = this.props.style || {},
          n = r.color,
          i = r.white,
          s = r.black,
          l = r.pointer,
          c = r.circle,
          d = (0, a.default)({
            default: {
              color: {
                absolute: "0px 0px 0px 0px",
                background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                borderRadius: this.props.radius
              },
              white: {
                absolute: "0px 0px 0px 0px",
                borderRadius: this.props.radius
              },
              black: {
                absolute: "0px 0px 0px 0px",
                boxShadow: this.props.shadow,
                borderRadius: this.props.radius
              },
              pointer: {
                position: "absolute",
                top: -100 * this.props.hsv.v + 100 + "%",
                left: 100 * this.props.hsv.s + "%",
                cursor: "default"
              },
              circle: {
                width: "4px",
                height: "4px",
                boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                borderRadius: "50%",
                cursor: "hand",
                transform: "translate(-2px, -2px)"
              }
            },
            custom: {
              color: n,
              white: i,
              black: s,
              pointer: l,
              circle: c
            }
          }, {
            custom: !!this.props.style
          });
        return o.default.createElement("div", {
          style: d.color,
          ref: function e(r) {
            return t.container = r;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, o.default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), o.default.createElement("div", {
          style: d.white,
          className: "saturation-white"
        }, o.default.createElement("div", {
          style: d.black,
          className: "saturation-black"
        }), o.default.createElement("div", {
          style: d.pointer
        }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
          style: d.circle
        }))));
      }
    }]), t;
  }(i.PureComponent || i.Component);
  t.default = y;
};
