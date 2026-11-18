/* module 64899 — 5417 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Hue = void 0;
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
    o = h(i),
    s,
    a = h(r(58527)),
    l,
    c = d(r(89278));
  function d(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function p(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function u(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function g(e, t) {
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
  var m = t.Hue = function (e) {
    function t() {
      var e, r, n, i;
      p(this, t);
      for (var o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
      return r = n = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.handleChange = function (e) {
        var t = c.calculateChange(e, n.props.direction, n.props.hsl, n.container);
        t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
      }, n.handleMouseDown = function (e) {
        n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp);
      }, n.handleMouseUp = function () {
        n.unbindEventListeners();
      }, u(n, i = r);
    }
    return g(t, e), n(t, [{
      key: "componentWillUnmount",
      value: function e() {
        this.unbindEventListeners();
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
          r = this.props.direction,
          n = void 0 === r ? "horizontal" : r,
          i = (0, a.default)({
            default: {
              hue: {
                absolute: "0px 0px 0px 0px",
                borderRadius: this.props.radius,
                boxShadow: this.props.shadow
              },
              container: {
                padding: "0 2px",
                position: "relative",
                height: "100%",
                borderRadius: this.props.radius
              },
              pointer: {
                position: "absolute",
                left: 100 * this.props.hsl.h / 360 + "%"
              },
              slider: {
                marginTop: "1px",
                width: "4px",
                borderRadius: "1px",
                height: "8px",
                boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                background: "#fff",
                transform: "translateX(-2px)"
              }
            },
            vertical: {
              pointer: {
                left: "0px",
                top: -100 * this.props.hsl.h / 360 + 100 + "%"
              }
            }
          }, {
            vertical: "vertical" === n
          });
        return o.default.createElement("div", {
          style: i.hue
        }, o.default.createElement("div", {
          className: "hue-" + n,
          style: i.container,
          ref: function e(r) {
            return t.container = r;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        }, o.default.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), o.default.createElement("div", {
          style: i.pointer
        }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement("div", {
          style: i.slider
        }))));
      }
    }]), t;
  }(i.PureComponent || i.Component);
  t.default = m;
};
