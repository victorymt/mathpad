/* module 37566 — 10332 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t) {
    return e ? e.querySelector(t) : null;
  }
  function i(e) {
    var t;
    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document).getElementById(e);
  }
  function o(e) {
    return e ? "string" == typeof e ? Array.from(document.querySelectorAll(e)) : e.nodeType ? [e] : Array.from(e).filter(Boolean) : [];
  }
  function s(e) {
    return Array.from(new Set(e)).sort((e, t) => {
      var r = e.compareDocumentPosition(t);
      return 1 & r ? 0 : 4 & r ? -1 : 2 & r ? 1 : 0;
    });
  }
  function a(e, t) {
    for (var r = "", n = 0, i = 0; i < e.length; i++) {
      var o = e[i];
      if ("\\" !== o) {
        if (r) o === r && (r = "");else if ('"' !== o && "'" !== o) {
          if ("[" === o || "(" === o) n++;else if ("]" === o || ")" === o) n--;else if (!n && (t ? "," === o : /[>\s]/.test(o))) return i;
        } else r = o;
      } else i++;
    }
    return -1;
  }
  var l;
  function c() {
    if (void 0 === l) {
      var e = document.createElement("div");
      e.innerHTML = "<span></span>";
      try {
        l = e.querySelector(":scope > span") === e.firstElementChild;
      } catch (e) {
        l = !1;
      }
    }
    return l;
  }
  function d(e, t) {
    return 1 === e.length ? Array.from(e[0].querySelectorAll(t)) : s(e.reduce((e, r) => e.concat(Array.from(r.querySelectorAll(t))), []));
  }
  function h(e, t) {
    var r = o(e);
    if (!t) return [];
    if (!(t = t.trim())) return [];
    var n = a(t, !0);
    if (n >= 0) return s(h(r, t.slice(0, n)).concat(h(r, t.slice(n + 1))));
    if (">" !== t[0]) return d(r, t);
    if (r.length && r.every(e => 1 === e.nodeType) && c()) return d(r, ":scope " + t);
    var i = t.slice(1).trim(),
      l = a(i, !1),
      u = l < 0 ? i : i.slice(0, l),
      g = r.length > 1 ? s(p(r, u)) : p(r, u);
    return l < 0 ? g : h(g, i.slice(l).trim());
  }
  function p(e, t) {
    var r, n;
    return o(e).reduce((e, t) => e.concat(Array.from(t.children)), []).filter(e => !t || e.matches(t));
  }
  function u(e, t) {
    var r = [];
    return o(e).forEach(e => {
      for (var n = e; n; n = n.parentElement) if ("string" == typeof t ? n.matches(t) : n === t) {
        r.push(n);
        break;
      }
    }), s(r);
  }
  function g(e) {
    return s(o(e).map(e => e.parentElement).filter(Boolean));
  }
  function m(e, t, r) {
    return o(e).map(e => "previous" === t ? e.previousElementSibling : e.nextElementSibling).filter(e => !!e && (!r || e.matches(r)));
  }
  function f(e, t) {
    return o(e).some(e => e.classList.contains(t));
  }
  function y(e, t) {
    return o(e).some(e => e.matches(t));
  }
  function v(e, t, r) {
    var n = o(e),
      i = t.match(/\S+/g) || [];
    return n.forEach(e => i.forEach(t => r ? e.classList.add(t) : e.classList.remove(t))), n;
  }
  function b(e, t) {
    var r, n;
    return null !== (r = null === (n = o(e)[0]) || void 0 === n ? void 0 : n.getAttribute(t)) && void 0 !== r ? r : void 0;
  }
  function x(e, t, r) {
    var n = o(e);
    return void 0 !== r && n.forEach(e => null === r ? e.removeAttribute(t) : e.setAttribute(t, String(r))), n;
  }
  function C(e, t) {
    var r = o(e);
    return r.forEach(e => t.split(/\s+/).forEach(t => e.removeAttribute(t))), r;
  }
  function S(e) {
    return o(e).map(e => e.textContent || "").join("");
  }
  function A(e, t) {
    var r = o(e);
    return r.forEach(e => {
      e.textContent = null == t ? "" : String(t);
    }), r;
  }
  function w(e) {
    var t = o(e);
    return t.forEach(e => {
      e.parentNode && e.parentNode.removeChild(e);
    }), t;
  }
  function E(e, t) {
    var r = o(e),
      n = o(t);
    return r.forEach((e, t) => n.forEach(n => e.appendChild(t === r.length - 1 ? n : n.cloneNode(!0)))), r;
  }
  function k(e, t) {
    var r = o(e),
      n = o(t);
    r.forEach((e, t) => {
      var i;
      n.forEach(n => {
        var i;
        return null === (i = e.parentNode) || void 0 === i ? void 0 : i.insertBefore(t === r.length - 1 ? n : n.cloneNode(!0), e);
      }), null === (i = e.parentNode) || void 0 === i || i.removeChild(e);
    });
  }
  r.d(t, {
    Yf: () => Q,
    KL: () => m,
    i0: () => N,
    UY: () => E,
    cP: () => L,
    Rq: () => _,
    xP: () => v,
    f$: () => u,
    rm: () => H,
    vc: () => I,
    jS: () => p,
    ms: () => Y,
    XA: () => i,
    Yt: () => o,
    Sq: () => z,
    C6: () => j,
    nB: () => f,
    KT: () => K,
    _I: () => y,
    Wk: () => T,
    aY: () => g,
    YG: () => h,
    Zy: () => n,
    vK: () => b,
    _T: () => P,
    yR: () => S,
    uR: () => q,
    cd: () => C,
    g5: () => w,
    MV: () => k,
    Bq: () => x,
    m7: () => U,
    hS: () => M,
    c3: () => A,
    Bo: () => Z
  });
  var O = new Set(["animation-iteration-count", "column-count", "fill-opacity", "flex-grow", "flex-shrink", "font-weight", "grid-area", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "line-height", "opacity", "order", "orphans", "stroke-opacity", "stroke-width", "widows", "z-index", "zoom"]),
    D = e => e.startsWith("--") ? e : e.replace(/[A-Z]/g, e => "-".concat(e.toLowerCase()));
  function P(e, t) {
    var r = o(e)[0];
    if (r) {
      var n = D(t);
      return r.ownerDocument.defaultView.getComputedStyle(r).getPropertyValue(n) || r.style.getPropertyValue(n);
    }
  }
  function M(e, t, r) {
    var n = o(e),
      i = "string" == typeof t ? {
        [t]: r
      } : t;
    return n.forEach(e => Object.keys(i).forEach(t => {
      var r = i[t],
        n = D(t);
      null == r || "number" == typeof r && !Number.isFinite(r) || e.style.setProperty(n, "number" != typeof r || O.has(n) || n.startsWith("--") ? String(r) : "".concat(r, "px"));
    })), n;
  }
  function I(e, t) {
    if (e && e.window === e) {
      var r = e.document.documentElement;
      return "width" === t ? r.clientWidth : r.clientHeight;
    }
    var n = o(e)[0];
    if (n) {
      var i = n.ownerDocument.defaultView.getComputedStyle(n),
        s = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
        a = function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return s.reduce((e, n) => e + (parseFloat(i.getPropertyValue(D("".concat(t).concat(n).concat(r)))) || 0), 0);
        },
        l = parseFloat(i.getPropertyValue(t));
      if (Number.isFinite(l)) return Math.max(0, l - ("border-box" === i.boxSizing ? a("padding") + a("border", "Width") : 0));
      var c = n.getBoundingClientRect();
      return Math.max(0, c[t] - a("padding") - a("border", "Width"));
    }
  }
  function T(e) {
    var t = I(e, "height");
    return void 0 === t ? void 0 : t + (parseFloat(P(e, "padding-top")) || 0) + (parseFloat(P(e, "padding-bottom")) || 0);
  }
  function L(e) {
    var t = T(e);
    return void 0 === t ? void 0 : t + (parseFloat(P(e, "border-top-width")) || 0) + (parseFloat(P(e, "border-bottom-width")) || 0);
  }
  var R = new WeakMap(),
    B,
    F;
  function j(e) {
    o(e).forEach(e => {
      var t;
      return null === (t = R.get(e)) || void 0 === t ? void 0 : t.finish();
    });
  }
  function _(e) {
    o(e).forEach(e => {
      var t;
      return null === (t = R.get(e)) || void 0 === t ? void 0 : t.cancel();
    });
  }
  function N(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
      n = arguments.length > 3 ? arguments[3] : void 0;
    o(e).forEach(e => {
      j(e);
      var i = e.ownerDocument.defaultView,
        o = Object.keys(t).filter(e => void 0 !== t[e]),
        s = o.map(t => "scrollTop" === t || "scrollLeft" === t ? e[t] : parseFloat(P(e, t)) || 0),
        a,
        l = !1,
        c = r => o.forEach((n, i) => {
          var o = s[i] + (t[n] - s[i]) * r;
          "scrollTop" === n || "scrollLeft" === n ? e[n] = o : M(e, n, o);
        }),
        d = {
          frame: 0,
          cancel() {
            l || (l = !0, i.cancelAnimationFrame(d.frame), R.delete(e));
          },
          finish() {
            l || (d.cancel(), c(1), null == n || n());
          }
        },
        h = e => {
          if (!l) {
            void 0 === a && (a = e);
            var t = Math.min(1, (e - a) / Math.max(1, r));
            c(.5 - Math.cos(t * Math.PI) / 2), t >= 1 ? d.finish() : d.frame = i.requestAnimationFrame(h);
          }
        };
      R.set(e, d), r <= 0 ? d.finish() : d.frame = i.requestAnimationFrame(h);
    });
  }
  function z(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400;
    o(e).forEach(e => {
      P(e, "opacity") || M(e, "opacity", 1), N(e, {
        opacity: 0
      }, t, () => {
        var t;
        return null === (t = e.parentNode) || void 0 === t ? void 0 : t.removeChild(e);
      });
    });
  }
  function H(e, t) {
    var r = o(e);
    return o(t).filter(e => r.some(t => e !== t && t.contains(e)));
  }
  function W(e, t) {
    var r = B(e);
    return r.forEach(e => {
      e.innerHTML = t ?? "";
    }), r;
  }
  function V(e, t) {
    var r = B(e);
    return F(t, r), r;
  }
  function U(e, t) {
    o(e).forEach(e => {
      void 0 !== t.scrollTop && (e.scrollTop = t.scrollTop), void 0 !== t.scrollLeft && (e.scrollLeft = t.scrollLeft);
    });
  }
  function q(e) {
    var t = o(e)[0];
    if (t) {
      var r = t.getBoundingClientRect(),
        n = t.offsetParent,
        i = null == n ? void 0 : n.getBoundingClientRect();
      return {
        top: r.top - ((null == i ? void 0 : i.top) || 0) - ((null == n ? void 0 : n.clientTop) || 0) - (parseFloat(P(t, "margin-top")) || 0),
        left: r.left - ((null == i ? void 0 : i.left) || 0) - ((null == n ? void 0 : n.clientLeft) || 0) - (parseFloat(P(t, "margin-left")) || 0)
      };
    }
  }
  function G(e) {
    return e ? "addEventListener" in e ? [e] : Array.from(e) : [];
  }
  function K(e, t, r, n) {
    G(e).forEach(e => e.addEventListener(t, r, n));
  }
  function Z(e, t, r, n) {
    G(e).forEach(e => e.removeEventListener(t, r, n));
  }
  function Y(e, t, r) {
    o(e).forEach(e => {
      var n = e.ownerDocument.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    });
  }
  function Q(e, t) {
    o(e).forEach(e => e[t]());
  }
};
