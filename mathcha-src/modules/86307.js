/* module 86307 — 12961 chars */
module.exports = function () {
  (function () {
    var e, t, r, n, i, o, s;
    n = function e(t, r) {
      var n, e, i, o;
      for (e in i = [], r.prototype) try {
        o = r.prototype[e], null == t[e] && "function" != typeof o ? i.push(t[e] = o) : i.push(void 0);
      } catch (e) {
        n = e;
      }
      return i;
    }, null == (e = {}).options && (e.options = {}), r = {
      checks: {
        xhr: {
          url: function e() {
            return "/favicon.ico?_=" + new Date().getTime();
          },
          timeout: 5e3,
          type: "HEAD"
        },
        image: {
          url: function e() {
            return "/favicon.ico?_=" + new Date().getTime();
          }
        },
        active: "xhr"
      },
      checkOnLoad: !1,
      interceptRequests: !0,
      reconnect: !0,
      deDupBody: !1
    }, i = function e(t, r) {
      var n, i, e, o, s, a;
      for (n = t, i = e = 0, o = (a = r.split(".")).length; o > e && "object" == typeof (n = n[s = a[i]]); i = ++e);
      return i === a.length - 1 ? n : void 0;
    }, e.getOption = function (t) {
      var n, o;
      return "function" == typeof (o = null != (n = i(e.options, t)) ? n : i(r, t)) ? o() : o;
    }, "function" == typeof window.addEventListener && window.addEventListener("online", function () {
      return setTimeout(e.confirmUp, 100);
    }, !1), "function" == typeof window.addEventListener && window.addEventListener("offline", function () {
      return e.confirmDown();
    }, !1), e.state = "up", e.markUp = function () {
      return e.trigger("confirmed-up"), "up" !== e.state ? (e.state = "up", e.trigger("up")) : void 0;
    }, e.markDown = function () {
      return e.trigger("confirmed-down"), "down" !== e.state ? (e.state = "down", e.trigger("down")) : void 0;
    }, o = {}, e.on = function (t, r, n) {
      var i, s, a, l, c;
      if ((s = t.split(" ")).length > 1) {
        for (c = [], a = 0, l = s.length; l > a; a++) i = s[a], c.push(e.on(i, r, n));
        return c;
      }
      return null == o[t] && (o[t] = []), o[t].push([n, r]);
    }, e.off = function (e, t) {
      var r, n, i, s, a;
      if (null != o[e]) {
        if (t) {
          for (i = 0, a = []; i < o[e].length;) n = (s = o[e][i])[0], (r = s[1]) === t ? a.push(o[e].splice(i, 1)) : a.push(i++);
          return a;
        }
        return o[e] = [];
      }
    }, e.trigger = function (e) {
      var t, r, n, i, s, a, l;
      if (null != o[e]) {
        for (l = [], n = 0, i = (s = o[e]).length; i > n; n++) t = (a = s[n])[0], r = a[1], l.push(r.call(t));
        return l;
      }
    }, t = function e(t, r, n) {
      var i, o, s, a, l;
      return l = function e() {
        return t.status && t.status < 12e3 ? r() : n();
      }, null === t.onprogress ? (i = t.onerror, t.onerror = function () {
        return n(), "function" == typeof i ? i.apply(null, arguments) : void 0;
      }, a = t.ontimeout, t.ontimeout = function () {
        return n(), "function" == typeof a ? a.apply(null, arguments) : void 0;
      }, o = t.onload, t.onload = function () {
        return l(), "function" == typeof o ? o.apply(null, arguments) : void 0;
      }) : (s = t.onreadystatechange, t.onreadystatechange = function () {
        return 4 === t.readyState ? l() : 0 === t.readyState && n(), "function" == typeof s ? s.apply(null, arguments) : void 0;
      });
    }, e.checks = {}, e.checks.xhr = function () {
      var r, n;
      (n = new XMLHttpRequest()).offline = !1, n.open(e.getOption("checks.xhr.type"), e.getOption("checks.xhr.url"), !0), null != n.timeout && (n.timeout = e.getOption("checks.xhr.timeout")), t(n, e.markUp, e.markDown);
      try {
        n.send();
      } catch (t) {
        r = t, e.markDown();
      }
      return n;
    }, e.checks.image = function () {
      var t;
      return (t = document.createElement("img")).onerror = e.markDown, t.onload = e.markUp, void (t.src = e.getOption("checks.image.url"));
    }, e.checks.down = e.markDown, e.checks.up = e.markUp, e.check = function () {
      return e.trigger("checking"), e.checks[e.getOption("checks.active")]();
    }, e.confirmUp = e.confirmDown = e.check, e.onXHR = function (e) {
      var t, r, i;
      return i = function t(r, n) {
        var i;
        return i = r.open, r.open = function (t, o, s, a, l) {
          return e({
            type: t,
            url: o,
            async: s,
            flags: n,
            user: a,
            password: l,
            xhr: r
          }), i.apply(r, arguments);
        };
      }, r = window.XMLHttpRequest, window.XMLHttpRequest = function (e) {
        var t, n, o;
        return o = new r(e), i(o, e), n = o.setRequestHeader, o.headers = {}, o.setRequestHeader = function (e, t) {
          return o.headers[e] = t, n.call(o, e, t);
        }, t = o.overrideMimeType, o.overrideMimeType = function (e) {
          return o.mimeType = e, t.call(o, e);
        }, o;
      }, n(window.XMLHttpRequest, r), null != window.XDomainRequest ? (t = window.XDomainRequest, window.XDomainRequest = function () {
        var e;
        return e = new t(), i(e), e;
      }, n(window.XDomainRequest, t)) : void 0;
    }, s = function r() {
      return e.getOption("interceptRequests") && e.onXHR(function (r) {
        var n;
        return !1 !== (n = r.xhr).offline ? t(n, e.markUp, e.confirmDown) : void 0;
      }), e.getOption("checkOnLoad") ? e.check() : void 0;
    }, setTimeout(s, 0), window.Offline = e;
  }).call(this), function () {
    var e, t, r, n, i, o, s, a, l;
    if (!window.Offline) throw new Error("Offline Reconnect brought in without offline.js");
    n = Offline.reconnect = {}, o = null, i = function e() {
      var t;
      return null != n.state && "inactive" !== n.state && Offline.trigger("reconnect:stopped"), n.state = "inactive", n.remaining = n.delay = null != (t = Offline.getOption("reconnect.initialDelay")) ? t : 3;
    }, t = function e() {
      var t, e;
      return t = null != (e = Offline.getOption("reconnect.delay")) ? e : Math.min(Math.ceil(1.5 * n.delay), 3600), n.remaining = n.delay = t;
    }, s = function e() {
      return "connecting" !== n.state ? (n.remaining -= 1, Offline.trigger("reconnect:tick"), 0 === n.remaining ? a() : void 0) : void 0;
    }, a = function e() {
      return "waiting" === n.state ? (Offline.trigger("reconnect:connecting"), n.state = "connecting", Offline.check()) : void 0;
    }, e = function e() {
      return Offline.getOption("reconnect") ? (i(), n.state = "waiting", Offline.trigger("reconnect:started"), o = setInterval(s, 1e3)) : void 0;
    }, l = function e() {
      return null != o && clearInterval(o), i();
    }, r = function e() {
      return Offline.getOption("reconnect") && "connecting" === n.state ? (Offline.trigger("reconnect:failure"), n.state = "waiting", t()) : void 0;
    }, n.tryNow = a, i(), Offline.on("down", e), Offline.on("confirmed-down", r), Offline.on("up", l);
  }.call(this), function () {
    var e, t, r, n, i, o;
    if (!window.Offline) throw new Error("Requests module brought in without offline.js");
    r = [], o = !1, n = function e(t) {
      return !1 !== Offline.getOption("requests") ? (Offline.trigger("requests:capture"), "down" !== Offline.state && (o = !0), r.push(t)) : void 0;
    }, i = function e(t) {
      var r, n, i, e, o, s, a, l, c;
      if (c = t.xhr, s = t.url, o = t.type, a = t.user, i = t.password, r = t.body, !1 !== Offline.getOption("requests")) {
        for (n in c.abort(), c.open(o, s, !0, a, i), e = c.headers, e) l = e[n], c.setRequestHeader(n, l);
        return c.mimeType && c.overrideMimeType(c.mimeType), c.send(r);
      }
    }, e = function e() {
      return r = [];
    }, t = function t() {
      var t, n, o, s, a, l, c;
      if (!1 !== Offline.getOption("requests")) {
        for (Offline.trigger("requests:flush"), l = {}, n = 0, s = r.length; s > n; n++) c = (a = r[n]).url.replace(/(\?|&)_=[0-9]+/, function (e, t) {
          return "?" === t ? t : "";
        }), Offline.getOption("deDupBody") ? (t = a.body, t = "[object Object]" === t.toString() ? JSON.stringify(t) : t.toString(), l[a.type.toUpperCase() + " - " + c + " - " + t] = a) : l[a.type.toUpperCase() + " - " + c] = a;
        for (o in l) a = l[o], i(a);
        return e();
      }
    }, setTimeout(function () {
      return !1 !== Offline.getOption("requests") ? (Offline.on("confirmed-up", function () {
        return o ? (o = !1, e()) : void 0;
      }), Offline.on("up", t), Offline.on("down", function () {
        return o = !1;
      }), Offline.onXHR(function (e) {
        var t, r, i, o, s;
        return s = e.xhr, i = e.async, !1 !== s.offline && (o = function t() {
          return n(e);
        }, r = s.send, s.send = function (t) {
          return e.body = t, r.apply(s, arguments);
        }, i) ? null === s.onprogress ? (s.addEventListener("error", o, !1), s.addEventListener("timeout", o, !1)) : (t = s.onreadystatechange, s.onreadystatechange = function () {
          return (0 === s.readyState || 4 === s.readyState && (0 === s.status || s.status >= 12e3)) && o(), "function" == typeof t ? t.apply(null, arguments) : void 0;
        }) : void 0;
      }), Offline.requests = {
        flush: t,
        clear: e
      }) : void 0;
    }, 0);
  }.call(this), function () {
    var e, t, r, n, i;
    if (!Offline) throw new Error("Offline simulate brought in without offline.js");
    for (t = 0, r = (n = ["up", "down"]).length; r > t; t++) i = n[t], (document.querySelector("script[data-simulate='" + i + "']") || ("undefined" != typeof localStorage && null !== localStorage ? localStorage.OFFLINE_SIMULATE : void 0) === i) && (null == Offline.options && (Offline.options = {}), null == (e = Offline.options).checks && (e.checks = {}), Offline.options.checks.active = i);
  }.call(this), function () {
    var e, t, r, n, i, o, s, a, l, c, d, h, p;
    if (!window.Offline) throw new Error("Offline UI brought in without offline.js");
    t = '<div class="offline-ui"><div class="offline-ui-content"></div></div>', e = '<a href class="offline-ui-retry"></a>', o = function e(t) {
      var r;
      return (r = document.createElement("div")).innerHTML = t, r.children[0];
    }, s = i = null, n = function e(t) {
      return d(t), s.className += " " + t;
    }, d = function e(t) {
      return s.className = s.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"), " ");
    }, l = {}, a = function e(t, r) {
      return n(t), null != l[t] && clearTimeout(l[t]), l[t] = setTimeout(function () {
        return d(t), delete l[t];
      }, 1e3 * r);
    }, p = function e(t) {
      var r, n, i, o;
      for (n in i = {
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      }) if (t >= (r = i[n])) return [o = Math.floor(t / r), n];
      return ["now", ""];
    }, h = function r() {
      var a, l;
      return s = o(t), document.body.appendChild(s), null != Offline.reconnect && Offline.getOption("reconnect") && (s.appendChild(o(e)), l = function e(t) {
        return t.preventDefault(), Offline.reconnect.tryNow();
      }, null != (a = s.querySelector(".offline-ui-retry")).addEventListener ? a.addEventListener("click", l, !1) : a.attachEvent("click", l)), n("offline-ui-" + Offline.state), i = s.querySelector(".offline-ui-content");
    }, c = function e() {
      return h(), Offline.on("up", function () {
        return d("offline-ui-down"), n("offline-ui-up"), a("offline-ui-up-2s", 2), a("offline-ui-up-5s", 5);
      }), Offline.on("down", function () {
        return d("offline-ui-up"), n("offline-ui-down"), a("offline-ui-down-2s", 2), a("offline-ui-down-5s", 5);
      }), Offline.on("reconnect:connecting", function () {
        return n("offline-ui-connecting"), d("offline-ui-waiting");
      }), Offline.on("reconnect:tick", function () {
        var e, t, r;
        return n("offline-ui-waiting"), d("offline-ui-connecting"), t = (e = p(Offline.reconnect.remaining))[0], r = e[1], i.setAttribute("data-retry-in-value", t), i.setAttribute("data-retry-in-unit", r);
      }), Offline.on("reconnect:stopped", function () {
        return d("offline-ui-connecting offline-ui-waiting"), i.setAttribute("data-retry-in-value", null), i.setAttribute("data-retry-in-unit", null);
      }), Offline.on("reconnect:failure", function () {
        return a("offline-ui-reconnect-failed-2s", 2), a("offline-ui-reconnect-failed-5s", 5);
      }), Offline.on("reconnect:success", function () {
        return a("offline-ui-reconnect-succeeded-2s", 2), a("offline-ui-reconnect-succeeded-5s", 5);
      });
    }, "complete" === document.readyState ? c() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", c, !1) : (r = document.onreadystatechange, document.onreadystatechange = function () {
      return "complete" === document.readyState && c(), "function" == typeof r ? r.apply(null, arguments) : void 0;
    });
  }.call(this);
};
