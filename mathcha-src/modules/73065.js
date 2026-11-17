/* module 73065 — 3950 chars */
module.exports = function (e, t, r) {
  var n, i;
  !function (o, s) {
    "use strict";

    void 0 === (i = "function" == typeof (n = s) ? n.call(t, r, t, e) : n) || (e.exports = i);
  }(this, function () {
    "use strict";

    var e = function () {},
      t = "undefined",
      r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent),
      n = ["trace", "debug", "info", "warn", "error"];
    function i(e, t) {
      var r = e[t];
      if ("function" == typeof r.bind) return r.bind(e);
      try {
        return Function.prototype.bind.call(r, e);
      } catch (t) {
        return function () {
          return Function.prototype.apply.apply(r, [e, arguments]);
        };
      }
    }
    function o() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function s(n) {
      return "debug" === n && (n = "log"), typeof console !== t && ("trace" === n && r ? o : void 0 !== console[n] ? i(console, n) : void 0 !== console.log ? i(console, "log") : e);
    }
    function a(t, r) {
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        this[o] = i < t ? e : this.methodFactory(o, t, r);
      }
      this.log = this.debug;
    }
    function l(e, r, n) {
      return function () {
        typeof console !== t && (a.call(this, r, n), this[e].apply(this, arguments));
      };
    }
    function c(e, t, r) {
      return s(e) || l.apply(this, arguments);
    }
    function d(e, r, i) {
      var o = this,
        s,
        l = "loglevel";
      function d(e) {
        var r = (n[e] || "silent").toUpperCase();
        if (typeof window !== t) {
          try {
            return void (window.localStorage[l] = r);
          } catch (e) {}
          try {
            window.document.cookie = encodeURIComponent(l) + "=" + r + ";";
          } catch (e) {}
        }
      }
      function h() {
        var e;
        if (typeof window !== t) {
          try {
            e = window.localStorage[l];
          } catch (e) {}
          if (typeof e === t) try {
            var r = window.document.cookie,
              n = r.indexOf(encodeURIComponent(l) + "=");
            -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1]);
          } catch (e) {}
          return void 0 === o.levels[e] && (e = void 0), e;
        }
      }
      e && (l += ":" + e), o.name = e, o.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, o.methodFactory = i || c, o.getLevel = function () {
        return s;
      }, o.setLevel = function (r, n) {
        if ("string" == typeof r && void 0 !== o.levels[r.toUpperCase()] && (r = o.levels[r.toUpperCase()]), !("number" == typeof r && r >= 0 && r <= o.levels.SILENT)) throw "log.setLevel() called with invalid level: " + r;
        if (s = r, !1 !== n && d(r), a.call(o, r, e), typeof console === t && r < o.levels.SILENT) return "No console available for logging";
      }, o.setDefaultLevel = function (e) {
        h() || o.setLevel(e, !1);
      }, o.enableAll = function (e) {
        o.setLevel(o.levels.TRACE, e);
      }, o.disableAll = function (e) {
        o.setLevel(o.levels.SILENT, e);
      };
      var p = h();
      null == p && (p = r ?? "WARN"), o.setLevel(p, !1);
    }
    var h = new d(),
      p = {};
    h.getLogger = function e(t) {
      if ("string" != typeof t || "" === t) throw new TypeError("You must supply a name when creating a logger.");
      var r = p[t];
      return r || (r = p[t] = new d(t, h.getLevel(), h.methodFactory)), r;
    };
    var u = typeof window !== t ? window.log : void 0;
    return h.noConflict = function () {
      return typeof window !== t && window.log === h && (window.log = u), h;
    }, h.getLoggers = function e() {
      return p;
    }, h;
  });
};
