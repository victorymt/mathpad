/* module 68582 — 3339 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ColorWrap = void 0;
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
    s = h(o),
    a,
    l = h(r(38221)),
    c,
    d = h(r(26195));
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
  var m = t.ColorWrap = function e(t) {
    var r = function (e) {
      function r(e) {
        p(this, r);
        var t = u(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
        return t.handleChange = function (e, r) {
          var n;
          if (d.default.simpleCheckForValidColor(e)) {
            var i = d.default.toState(e, e.h || t.state.oldHue);
            t.setState(i), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, i, r), t.props.onChange && t.props.onChange(i, r);
          }
        }, t.handleSwatchHover = function (e, r) {
          var n;
          if (d.default.simpleCheckForValidColor(e)) {
            var i = d.default.toState(e, e.h || t.state.oldHue);
            t.props.onSwatchHover && t.props.onSwatchHover(i, r);
          }
        }, t.state = n({}, d.default.toState(e.color, 0)), t.debounce = (0, l.default)(function (e, t, r) {
          e(t, r);
        }, 100), t;
      }
      return g(r, e), i(r, [{
        key: "componentWillReceiveProps",
        value: function e(t) {
          this.setState(n({}, d.default.toState(t.color, this.state.oldHue)));
        }
      }, {
        key: "render",
        value: function e() {
          var r = {};
          return this.props.onSwatchHover && (r.onSwatchHover = this.handleSwatchHover), s.default.createElement(t, n({}, this.props, this.state, {
            onChange: this.handleChange
          }, r));
        }
      }]), r;
    }(o.PureComponent || o.Component);
    return r.propTypes = n({}, t.propTypes), r.defaultProps = n({}, t.defaultProps, {
      color: {
        h: 250,
        s: .5,
        l: .2,
        a: 1
      }
    }), r;
  };
  t.default = m;
};
