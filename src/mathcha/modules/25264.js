/* module 25264 — 2949 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.CopyToClipboard = void 0;
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
    s = c(r(40927)),
    a,
    l = c(r(17965));
  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function d(e, t) {
    var r = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r;
  }
  function h(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function p(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function u(e, t) {
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
  var g = t.CopyToClipboard = function (e) {
    function t() {
      var e, r, n, i;
      h(this, t);
      for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
      return r = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.onClick = function (e) {
        var t = n.props,
          r = t.text,
          i = t.onCopy,
          o = t.children,
          a = t.options,
          c = s.default.Children.only(o),
          d = (0, l.default)(r, a);
        i && i(r, d), c && c.props && "function" == typeof c.props.onClick && c.props.onClick(e);
      }, p(n, i = r);
    }
    return u(t, e), i(t, [{
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.text,
          i = t.onCopy,
          o = t.options,
          a = t.children,
          l = d(t, ["text", "onCopy", "options", "children"]),
          c = s.default.Children.only(a);
        return s.default.cloneElement(c, n({}, l, {
          onClick: this.onClick
        }));
      }
    }]), t;
  }(s.default.PureComponent);
  g.defaultProps = {
    onCopy: void 0,
    options: void 0
  };
};
