/* module 86846 — 4883 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e) {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof self ? self : r.g;
    var n = "undefined" != typeof document && document.attachEvent,
      i,
      o;
    if (!n) {
      var s = (o = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || function (e) {
          return t.setTimeout(e, 20);
        }, function (e) {
          return o(e);
        }),
        a = (i = t.cancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelAnimationFrame || t.clearTimeout, function (e) {
          return i(e);
        }),
        l = function e(t) {
          var r = t.__resizeTriggers__,
            n = r.firstElementChild,
            i = r.lastElementChild,
            o = n.firstElementChild;
          i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight, o.style.width = n.offsetWidth + 1 + "px", o.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight;
        },
        c = function e(t) {
          return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height;
        },
        d = function e(t) {
          if (!(t.target.className && "function" == typeof t.target.className.indexOf && t.target.className.indexOf("contract-trigger") < 0 && t.target.className.indexOf("expand-trigger") < 0)) {
            var r = this;
            l(this), this.__resizeRAF__ && a(this.__resizeRAF__), this.__resizeRAF__ = s(function () {
              c(r) && (r.__resizeLast__.width = r.offsetWidth, r.__resizeLast__.height = r.offsetHeight, r.__resizeListeners__.forEach(function (e) {
                e.call(r, t);
              }));
            });
          }
        },
        h = !1,
        p = "",
        u = "animationstart",
        g = "Webkit Moz O ms".split(" "),
        m = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
        f = "",
        y = document.createElement("fakeelement");
      if (void 0 !== y.style.animationName && (h = !0), !1 === h) for (var v = 0; v < g.length; v++) if (void 0 !== y.style[g[v] + "AnimationName"]) {
        p = "-" + (f = g[v]).toLowerCase() + "-", u = m[v], h = !0;
        break;
      }
      var b = "resizeanim",
        x = "@" + p + "keyframes " + b + " { from { opacity: 0; } to { opacity: 0; } } ",
        C = p + "animation: 1ms " + b + "; ";
    }
    var S = function t(r) {
        if (!r.getElementById("detectElementResize")) {
          var n = (x || "") + ".resize-triggers { " + (C || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
            i = r.head || r.getElementsByTagName("head")[0],
            o = r.createElement("style");
          o.id = "detectElementResize", o.type = "text/css", null != e && o.setAttribute("nonce", e), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(r.createTextNode(n)), i.appendChild(o);
        }
      },
      A,
      w;
    return {
      addResizeListener: function e(r, i) {
        if (n) r.attachEvent("onresize", i);else {
          if (!r.__resizeTriggers__) {
            var o = r.ownerDocument,
              s = t.getComputedStyle(r);
            s && "static" == s.position && (r.style.position = "relative"), S(o), r.__resizeLast__ = {}, r.__resizeListeners__ = [], (r.__resizeTriggers__ = o.createElement("div")).className = "resize-triggers", r.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', r.appendChild(r.__resizeTriggers__), l(r), r.addEventListener("scroll", d, !0), u && (r.__resizeTriggers__.__animationListener__ = function e(t) {
              t.animationName == b && l(r);
            }, r.__resizeTriggers__.addEventListener(u, r.__resizeTriggers__.__animationListener__));
          }
          r.__resizeListeners__.push(i);
        }
      },
      removeResizeListener: function e(t, r) {
        if (n) t.detachEvent("onresize", r);else if (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(r), 1), !t.__resizeListeners__.length) {
          t.removeEventListener("scroll", d, !0), t.__resizeTriggers__.__animationListener__ && (t.__resizeTriggers__.removeEventListener(u, t.__resizeTriggers__.__animationListener__), t.__resizeTriggers__.__animationListener__ = null);
          try {
            t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__);
          } catch (e) {}
        }
      }
    };
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
};
