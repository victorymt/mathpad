/* module 94320 — 12399 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    t: () => $
  });
  var n = [],
    i = function () {
      return n.some(function (e) {
        return e.activeTargets.length > 0;
      });
    },
    o = function () {
      return n.some(function (e) {
        return e.skippedTargets.length > 0;
      });
    },
    s = "ResizeObserver loop completed with undelivered notifications.",
    a = function () {
      var e;
      "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
        message: s
      }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = s), window.dispatchEvent(e);
    },
    l;
  !function (e) {
    e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
  }(l || (l = {}));
  var c = function (e) {
      return Object.freeze(e);
    },
    d = function () {
      function e(e, t) {
        this.inlineSize = e, this.blockSize = t, c(this);
      }
      return e;
    }(),
    h = function () {
      function e(e, t, r, n) {
        return this.x = e, this.y = t, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, c(this);
      }
      return e.prototype.toJSON = function () {
        var e = this,
          t,
          r,
          n,
          i,
          o,
          s,
          a,
          l;
        return {
          x: e.x,
          y: e.y,
          top: e.top,
          right: e.right,
          bottom: e.bottom,
          left: e.left,
          width: e.width,
          height: e.height
        };
      }, e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }, e;
    }(),
    p = function (e) {
      return e instanceof SVGElement && "getBBox" in e;
    },
    u = function (e) {
      if (p(e)) {
        var t = e.getBBox(),
          r = t.width,
          n = t.height;
        return !r && !n;
      }
      var i = e,
        o = i.offsetWidth,
        s = i.offsetHeight;
      return !(o || s || e.getClientRects().length);
    },
    g = function (e) {
      var t, r;
      if (e instanceof Element) return !0;
      var n = null === (r = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
      return !!(n && e instanceof n.Element);
    },
    m = function (e) {
      switch (e.tagName) {
        case "INPUT":
          if ("image" !== e.type) break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
          return !0;
      }
      return !1;
    },
    f = "undefined" != typeof window ? window : {},
    y = new WeakMap(),
    v = /auto|scroll/,
    b = /^tb|vertical/,
    x = /msie|trident/i.test(f.navigator && f.navigator.userAgent),
    C = function (e) {
      return parseFloat(e || "0");
    },
    S = function (e, t, r) {
      return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new d((r ? t : e) || 0, (r ? e : t) || 0);
    },
    A = c({
      devicePixelContentBoxSize: S(),
      borderBoxSize: S(),
      contentBoxSize: S(),
      contentRect: new h(0, 0, 0, 0)
    }),
    w = function (e, t) {
      if (void 0 === t && (t = !1), y.has(e) && !t) return y.get(e);
      if (u(e)) return y.set(e, A), A;
      var r = getComputedStyle(e),
        n = p(e) && e.ownerSVGElement && e.getBBox(),
        i = !x && "border-box" === r.boxSizing,
        o = b.test(r.writingMode || ""),
        s = !n && v.test(r.overflowY || ""),
        a = !n && v.test(r.overflowX || ""),
        l = n ? 0 : C(r.paddingTop),
        d = n ? 0 : C(r.paddingRight),
        g = n ? 0 : C(r.paddingBottom),
        m = n ? 0 : C(r.paddingLeft),
        f = n ? 0 : C(r.borderTopWidth),
        w = n ? 0 : C(r.borderRightWidth),
        E = n ? 0 : C(r.borderBottomWidth),
        k,
        O = m + d,
        D = l + g,
        P = (n ? 0 : C(r.borderLeftWidth)) + w,
        M = f + E,
        I = a ? e.offsetHeight - M - e.clientHeight : 0,
        T = s ? e.offsetWidth - P - e.clientWidth : 0,
        L = i ? O + P : 0,
        R = i ? D + M : 0,
        B = n ? n.width : C(r.width) - L - T,
        F = n ? n.height : C(r.height) - R - I,
        j = B + O + T + P,
        _ = F + D + I + M,
        N = c({
          devicePixelContentBoxSize: S(Math.round(B * devicePixelRatio), Math.round(F * devicePixelRatio), o),
          borderBoxSize: S(j, _, o),
          contentBoxSize: S(B, F, o),
          contentRect: new h(m, l, B, F)
        });
      return y.set(e, N), N;
    },
    E = function (e, t, r) {
      var n = w(e, r),
        i = n.borderBoxSize,
        o = n.contentBoxSize,
        s = n.devicePixelContentBoxSize;
      switch (t) {
        case l.DEVICE_PIXEL_CONTENT_BOX:
          return s;
        case l.BORDER_BOX:
          return i;
        default:
          return o;
      }
    },
    k = function () {
      function e(e) {
        var t = w(e);
        this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = c([t.borderBoxSize]), this.contentBoxSize = c([t.contentBoxSize]), this.devicePixelContentBoxSize = c([t.devicePixelContentBoxSize]);
      }
      return e;
    }(),
    O = function (e) {
      if (u(e)) return 1 / 0;
      for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
      return t;
    },
    D = function () {
      var e = 1 / 0,
        t = [];
      n.forEach(function r(n) {
        if (0 !== n.activeTargets.length) {
          var i = [];
          n.activeTargets.forEach(function t(r) {
            var n = new k(r.target),
              o = O(r.target);
            i.push(n), r.lastReportedSize = E(r.target, r.observedBox), o < e && (e = o);
          }), t.push(function e() {
            n.callback.call(n.observer, i, n.observer);
          }), n.activeTargets.splice(0, n.activeTargets.length);
        }
      });
      for (var r = 0, i = t; r < i.length; r++) {
        var o;
        (0, i[r])();
      }
      return e;
    },
    P = function (e) {
      n.forEach(function t(r) {
        r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function t(n) {
          n.isActive() && (O(n.target) > e ? r.activeTargets.push(n) : r.skippedTargets.push(n));
        });
      });
    },
    M = function () {
      var e = 0;
      for (P(e); i();) e = D(), P(e);
      return o() && a(), e > 0;
    },
    I,
    T = [],
    L = function () {
      return T.splice(0).forEach(function (e) {
        return e();
      });
    },
    R = function (e) {
      if (!I) {
        var t = 0,
          r = document.createTextNode(""),
          n = {
            characterData: !0
          };
        new MutationObserver(function () {
          return L();
        }).observe(r, n), I = function () {
          r.textContent = "" + (t ? t-- : t++);
        };
      }
      T.push(e), I();
    },
    B = function (e) {
      R(function t() {
        requestAnimationFrame(e);
      });
    },
    F = 0,
    j = function () {
      return !!F;
    },
    _ = 250,
    N = {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    },
    z = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
    H = function (e) {
      return void 0 === e && (e = 0), Date.now() + e;
    },
    W = !1,
    V,
    U = new (function () {
      function e() {
        var e = this;
        this.stopped = !0, this.listener = function () {
          return e.schedule();
        };
      }
      return e.prototype.run = function (e) {
        var t = this;
        if (void 0 === e && (e = _), !W) {
          W = !0;
          var r = H(e);
          B(function () {
            var n = !1;
            try {
              n = M();
            } finally {
              if (W = !1, e = r - H(), !j()) return;
              n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
            }
          });
        }
      }, e.prototype.schedule = function () {
        this.stop(), this.run();
      }, e.prototype.observe = function () {
        var e = this,
          t = function () {
            return e.observer && e.observer.observe(document.body, N);
          };
        document.body ? t() : f.addEventListener("DOMContentLoaded", t);
      }, e.prototype.start = function () {
        var e = this;
        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), z.forEach(function (t) {
          return f.addEventListener(t, e.listener, !0);
        }));
      }, e.prototype.stop = function () {
        var e = this;
        this.stopped || (this.observer && this.observer.disconnect(), z.forEach(function (t) {
          return f.removeEventListener(t, e.listener, !0);
        }), this.stopped = !0);
      }, e;
    }())(),
    q = function (e) {
      !F && e > 0 && U.start(), !(F += e) && U.stop();
    },
    G = function (e) {
      return !p(e) && !m(e) && "inline" === getComputedStyle(e).display;
    },
    K = function () {
      function e(e, t) {
        this.target = e, this.observedBox = t || l.CONTENT_BOX, this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        };
      }
      return e.prototype.isActive = function () {
        var e = E(this.target, this.observedBox, !0);
        return G(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
      }, e;
    }(),
    Z = function () {
      function e(e, t) {
        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
      }
      return e;
    }(),
    Y = new WeakMap(),
    Q = function (e, t) {
      for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
      return -1;
    },
    J = function () {
      function e() {}
      return e.connect = function (e, t) {
        var r = new Z(e, t);
        Y.set(e, r);
      }, e.observe = function (e, t, r) {
        var i = Y.get(e),
          o = 0 === i.observationTargets.length;
        Q(i.observationTargets, t) < 0 && (o && n.push(i), i.observationTargets.push(new K(t, r && r.box)), q(1), U.schedule());
      }, e.unobserve = function (e, t) {
        var r = Y.get(e),
          i = Q(r.observationTargets, t),
          o = 1 === r.observationTargets.length;
        i >= 0 && (o && n.splice(n.indexOf(r), 1), r.observationTargets.splice(i, 1), q(-1));
      }, e.disconnect = function (e) {
        var t = this,
          r = Y.get(e);
        r.observationTargets.slice().forEach(function (r) {
          return t.unobserve(e, r.target);
        }), r.activeTargets.splice(0, r.activeTargets.length);
      }, e;
    }(),
    X = function () {
      function e(e) {
        if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if ("function" != typeof e) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        J.connect(this, e);
      }
      return e.prototype.observe = function (e, t) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!g(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        J.observe(this, e, t);
      }, e.prototype.unobserve = function (e) {
        if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!g(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        J.unobserve(this, e);
      }, e.prototype.disconnect = function () {
        J.disconnect(this);
      }, e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }, e;
    }(),
    $ = window.ResizeObserver || X;
};
