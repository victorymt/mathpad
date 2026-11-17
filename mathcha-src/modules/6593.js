/* module 6593 — 6185 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.EditableInput = void 0;
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
    o = l(i),
    s,
    a = l(r(58527));
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function c(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function d(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function h(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function p(e, t) {
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
  var u = 1,
    g = 38,
    m,
    f = [g, 40],
    y = function e(t) {
      return f.indexOf(t) > -1;
    },
    v = function e(t) {
      return t + "%";
    },
    b = function e(t) {
      return Number(String(t).replace(/%/g, ""));
    },
    x = function e(t) {
      return String(t).indexOf("%") > -1;
    },
    C = t.EditableInput = function (e) {
      function t(e) {
        d(this, t);
        var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return r.handleBlur = function () {
          r.state.blurValue && r.setState({
            value: r.state.blurValue,
            blurValue: null
          });
        }, r.handleChange = function (e) {
          r.setUpdatedValue(e.target.value, e);
        }, r.handleKeyDown = function (e) {
          var t = b(e.target.value);
          if (!isNaN(t) && y(e.keyCode)) {
            var n = r.getArrowOffset(),
              i = e.keyCode === g ? t + n : t - n;
            r.setUpdatedValue(i, e);
          }
        }, r.handleDrag = function (e) {
          if (r.props.dragLabel) {
            var t = Math.round(r.props.value + e.movementX);
            t >= 0 && t <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(t), e);
          }
        }, r.handleMouseDown = function (e) {
          r.props.dragLabel && (e.preventDefault(), r.handleDrag(e), window.addEventListener("mousemove", r.handleDrag), window.addEventListener("mouseup", r.handleMouseUp));
        }, r.handleMouseUp = function () {
          r.unbindEventListeners();
        }, r.unbindEventListeners = function () {
          window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp);
        }, r.state = {
          value: String(e.value).toUpperCase(),
          blurValue: String(e.value).toUpperCase()
        }, r;
      }
      return p(t, e), n(t, [{
        key: "componentWillReceiveProps",
        value: function e(t) {
          var r = this.input;
          t.value !== this.state.value && (r === document.activeElement ? this.setState({
            blurValue: String(t.value).toUpperCase()
          }) : this.setState({
            value: String(t.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(t.value).toUpperCase()
          }));
        }
      }, {
        key: "componentWillUnmount",
        value: function e() {
          this.unbindEventListeners();
        }
      }, {
        key: "getValueObjectWithLabel",
        value: function e(t) {
          return c({}, this.props.label, t);
        }
      }, {
        key: "getArrowOffset",
        value: function e() {
          return this.props.arrowOffset || 1;
        }
      }, {
        key: "setUpdatedValue",
        value: function e(t, r) {
          var n = null !== this.props.label ? this.getValueObjectWithLabel(t) : t;
          this.props.onChange && this.props.onChange(n, r);
          var i = x(r.target.value);
          this.setState({
            value: i ? v(t) : t
          });
        }
      }, {
        key: "render",
        value: function e() {
          var t = this,
            r = (0, a.default)({
              default: {
                wrap: {
                  position: "relative"
                }
              },
              "user-override": {
                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                label: this.props.style && this.props.style.label ? this.props.style.label : {}
              },
              "dragLabel-true": {
                label: {
                  cursor: "ew-resize"
                }
              }
            }, {
              "user-override": !0
            }, this.props);
          return o.default.createElement("div", {
            style: r.wrap
          }, o.default.createElement("input", {
            style: r.input,
            ref: function e(r) {
              return t.input = r;
            },
            value: this.state.value,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            placeholder: this.props.placeholder,
            spellCheck: "false"
          }), this.props.label && !this.props.hideLabel ? o.default.createElement("span", {
            style: r.label,
            onMouseDown: this.handleMouseDown
          }, this.props.label) : null);
        }
      }]), t;
    }(i.PureComponent || i.Component);
  t.default = C;
};
