/* module 28187 — 4326 chars */
module.exports = function (e, t, r) {
  var n, i, o, s, a, l;
  s = this, a = function (e, t, r, n) {
    "use strict";

    var i = a(t),
      o = a(r),
      s = a(n);
    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    var d = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();
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
    var u = function (e) {
      function t(e, r) {
        c(this, t);
        var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return n.resolveOptions(r), n.listenClick(e), n;
      }
      return p(t, e), d(t, [{
        key: "resolveOptions",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === l(t.container) ? t.container : document.body;
        }
      }, {
        key: "listenClick",
        value: function e(t) {
          var r = this;
          this.listener = (0, s.default)(t, "click", function (e) {
            return r.onClick(e);
          });
        }
      }, {
        key: "onClick",
        value: function e(t) {
          var r = t.delegateTarget || t.currentTarget;
          this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new i.default({
            action: this.action(r),
            target: this.target(r),
            text: this.text(r),
            container: this.container,
            trigger: r,
            emitter: this
          });
        }
      }, {
        key: "defaultAction",
        value: function e(t) {
          return g("action", t);
        }
      }, {
        key: "defaultTarget",
        value: function e(t) {
          var r = g("target", t);
          if (r) return document.querySelector(r);
        }
      }, {
        key: "defaultText",
        value: function e(t) {
          return g("text", t);
        }
      }, {
        key: "destroy",
        value: function e() {
          this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
        }
      }], [{
        key: "isSupported",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
            r = "string" == typeof t ? [t] : t,
            n = !!document.queryCommandSupported;
          return r.forEach(function (e) {
            n = n && !!document.queryCommandSupported(e);
          }), n;
        }
      }]), t;
    }(o.default);
    function g(e, t) {
      var r = "data-clipboard-" + e;
      if (t.hasAttribute(r)) return t.getAttribute(r);
    }
    e.exports = u;
  }, i = [e, r(29210), r(51504), r(49539)], void 0 === (o = "function" == typeof (n = a) ? n.apply(t, i) : n) || (e.exports = o);
};
