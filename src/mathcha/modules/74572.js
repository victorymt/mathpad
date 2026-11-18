/* module 74572 — 2615 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.handleFocus = void 0;
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
    o,
    s = a(r(40927));
  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function l(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function c(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function d(e, t) {
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
  var h = t.handleFocus = function e(t) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return function (e) {
      function o() {
        var e, t, r, n;
        l(this, o);
        for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
        return t = r = c(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(s))), r.state = {
          focus: !1
        }, r.handleFocus = function () {
          return r.setState({
            focus: !0
          });
        }, r.handleBlur = function () {
          return r.setState({
            focus: !1
          });
        }, c(r, n = t);
      }
      return d(o, e), i(o, [{
        key: "render",
        value: function e() {
          return s.default.createElement(r, {
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, s.default.createElement(t, n({}, this.props, this.state)));
        }
      }]), o;
    }(s.default.Component);
  };
};
