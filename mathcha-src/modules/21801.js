/* module 21801 — 8481 chars */
module.exports = function (e) {
  !function () {
    "use strict";

    var e,
      t = [];
    function r(r) {
      t.push(r), 1 == t.length && e();
    }
    function n() {
      for (; t.length;) t[0](), t.shift();
    }
    function i(e) {
      this.a = o, this.b = void 0, this.f = [];
      var t = this;
      try {
        e(function (e) {
          l(t, e);
        }, function (e) {
          c(t, e);
        });
      } catch (e) {
        c(t, e);
      }
    }
    e = function e() {
      setTimeout(n);
    };
    var o = 2;
    function s(e) {
      return new i(function (t, r) {
        r(e);
      });
    }
    function a(e) {
      return new i(function (t) {
        t(e);
      });
    }
    function l(e, t) {
      if (e.a == o) {
        if (t == e) throw new TypeError();
        var r = !1;
        try {
          var n = t && t.then;
          if (null != t && "object" == typeof t && "function" == typeof n) return void n.call(t, function (t) {
            r || l(e, t), r = !0;
          }, function (t) {
            r || c(e, t), r = !0;
          });
        } catch (t) {
          return void (r || c(e, t));
        }
        e.a = 0, e.b = t, d(e);
      }
    }
    function c(e, t) {
      if (e.a == o) {
        if (t == e) throw new TypeError();
        e.a = 1, e.b = t, d(e);
      }
    }
    function d(e) {
      r(function () {
        if (e.a != o) for (; e.f.length;) {
          var t,
            r = (t = e.f.shift())[0],
            n = t[1],
            i = t[2],
            t = t[3];
          try {
            0 == e.a ? i("function" == typeof r ? r.call(void 0, e.b) : e.b) : 1 == e.a && ("function" == typeof n ? i(n.call(void 0, e.b)) : t(e.b));
          } catch (e) {
            t(e);
          }
        }
      });
    }
    function h(e) {
      return new i(function (t, r) {
        function n(r) {
          return function (n) {
            o[r] = n, (i += 1) == e.length && t(o);
          };
        }
        var i = 0,
          o = [];
        0 == e.length && t(o);
        for (var s = 0; s < e.length; s += 1) a(e[s]).c(n(s), r);
      });
    }
    function p(e) {
      return new i(function (t, r) {
        for (var n = 0; n < e.length; n += 1) a(e[n]).c(t, r);
      });
    }
    i.prototype.g = function (e) {
      return this.c(void 0, e);
    }, i.prototype.c = function (e, t) {
      var r = this;
      return new i(function (n, i) {
        r.f.push([e, t, n, i]), d(r);
      });
    }, window.Promise || (window.Promise = i, window.Promise.resolve = a, window.Promise.reject = s, window.Promise.race = p, window.Promise.all = h, window.Promise.prototype.then = i.prototype.c, window.Promise.prototype.catch = i.prototype.g);
  }(), function () {
    function t(e, t) {
      document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t);
    }
    function r(e) {
      document.body ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function t() {
        document.removeEventListener("DOMContentLoaded", t), e();
      }) : document.attachEvent("onreadystatechange", function t() {
        "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", t), e());
      });
    }
    function n(e) {
      this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
    }
    function i(e, t) {
      e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";";
    }
    function o(e) {
      var t = e.a.offsetWidth,
        r = t + 100;
      return e.f.style.width = r + "px", e.c.scrollLeft = r, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t && (e.g = t, !0);
    }
    function s(e, r) {
      function n() {
        var e = i;
        o(e) && e.a.parentNode && r(e.g);
      }
      var i = e;
      t(e.b, n), t(e.c, n), o(e);
    }
    function a(e, t) {
      var r = t || {};
      this.family = e, this.style = r.style || "normal", this.weight = r.weight || "normal", this.stretch = r.stretch || "normal";
    }
    var l = null,
      c = null,
      d = null,
      h = null;
    function p() {
      if (null === c) if (u() && /Apple/.test(window.navigator.vendor)) {
        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
        c = !!e && 603 > parseInt(e[1], 10);
      } else c = !1;
      return c;
    }
    function u() {
      return null === h && (h = !!document.fonts), h;
    }
    function g() {
      if (null === d) {
        var e = document.createElement("div");
        try {
          e.style.font = "condensed 100px sans-serif";
        } catch (e) {}
        d = "" !== e.style.font;
      }
      return d;
    }
    function m(e, t) {
      return [e.style, e.weight, g() ? e.stretch : "", "100px", t].join(" ");
    }
    a.prototype.load = function (e, t) {
      var o = this,
        a = e || "BESbswy",
        c = 0,
        d = t || 3e3,
        h = new Date().getTime();
      return new Promise(function (e, t) {
        if (u() && !p()) {
          var g = new Promise(function (e, t) {
              function r() {
                new Date().getTime() - h >= d ? t() : document.fonts.load(m(o, '"' + o.family + '"'), a).then(function (t) {
                  1 <= t.length ? e() : setTimeout(r, 25);
                }, function () {
                  t();
                });
              }
              r();
            }),
            f = new Promise(function (e, t) {
              c = setTimeout(t, d);
            });
          Promise.race([f, g]).then(function () {
            clearTimeout(c), e(o);
          }, function () {
            t(o);
          });
        } else r(function () {
          function r() {
            var t;
            (t = -1 != y && -1 != v || -1 != y && -1 != b || -1 != v && -1 != b) && ((t = y != v && y != b && v != b) || (null === l && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), l = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = l && (y == x && v == x && b == x || y == C && v == C && b == C || y == S && v == S && b == S)), t = !t), t && (A.parentNode && A.parentNode.removeChild(A), clearTimeout(c), e(o));
          }
          function p() {
            if (new Date().getTime() - h >= d) A.parentNode && A.parentNode.removeChild(A), t(o);else {
              var e = document.hidden;
              !0 !== e && void 0 !== e || (y = u.a.offsetWidth, v = g.a.offsetWidth, b = f.a.offsetWidth, r()), c = setTimeout(p, 50);
            }
          }
          var u = new n(a),
            g = new n(a),
            f = new n(a),
            y = -1,
            v = -1,
            b = -1,
            x = -1,
            C = -1,
            S = -1,
            A = document.createElement("div");
          A.dir = "ltr", i(u, m(o, "sans-serif")), i(g, m(o, "serif")), i(f, m(o, "monospace")), A.appendChild(u.a), A.appendChild(g.a), A.appendChild(f.a), document.body.appendChild(A), x = u.a.offsetWidth, C = g.a.offsetWidth, S = f.a.offsetWidth, p(), s(u, function (e) {
            y = e, r();
          }), i(u, m(o, '"' + o.family + '",sans-serif')), s(g, function (e) {
            v = e, r();
          }), i(g, m(o, '"' + o.family + '",serif')), s(f, function (e) {
            b = e, r();
          }), i(f, m(o, '"' + o.family + '",monospace'));
        });
      });
    }, e.exports = a;
  }();
};
