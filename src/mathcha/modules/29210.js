/* module 29210 — 5439 chars */
module.exports = function (e, t, r) {
  var n, i, o, s, a, l;
  s = this, a = function (e, t) {
    "use strict";

    var r = n(t);
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    var s = function () {
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
      a = function () {
        function e(t) {
          o(this, e), this.resolveOptions(t), this.initSelection();
        }
        return s(e, [{
          key: "resolveOptions",
          value: function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
          }
        }, {
          key: "initSelection",
          value: function e() {
            this.text ? this.selectFake() : this.target && this.selectTarget();
          }
        }, {
          key: "selectFake",
          value: function e() {
            var t = this,
              n = "rtl" == document.documentElement.getAttribute("dir");
            this.removeFake(), this.fakeHandlerCallback = function () {
              return t.removeFake();
            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
            var i = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText();
          }
        }, {
          key: "removeFake",
          value: function e() {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
          }
        }, {
          key: "selectTarget",
          value: function e() {
            this.selectedText = (0, r.default)(this.target), this.copyText();
          }
        }, {
          key: "copyText",
          value: function e() {
            var t = void 0;
            try {
              t = document.execCommand(this.action);
            } catch (e) {
              t = !1;
            }
            this.handleResult(t);
          }
        }, {
          key: "handleResult",
          value: function e(t) {
            this.emitter.emit(t ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
        }, {
          key: "clearSelection",
          value: function e() {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
          }
        }, {
          key: "destroy",
          value: function e() {
            this.removeFake();
          }
        }, {
          key: "action",
          set: function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          },
          get: function e() {
            return this._action;
          }
        }, {
          key: "target",
          set: function e(t) {
            if (void 0 !== t) {
              if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
              if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
              if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              this._target = t;
            }
          },
          get: function e() {
            return this._target;
          }
        }]), e;
      }();
    e.exports = a;
  }, i = [e, r(50618)], void 0 === (o = "function" == typeof (n = a) ? n.apply(t, i) : n) || (e.exports = o);
};
