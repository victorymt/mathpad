/* module 47168 — 30549 chars */
module.exports = function (e, t, r) {
  var n;
  !function (i, o, s, a) {
    "use strict";

    var l = ["", "webkit", "Moz", "MS", "ms", "o"],
      c = o.createElement("div"),
      d = "function",
      h = Math.round,
      p = Math.abs,
      u = Date.now,
      g;
    function m(e, t, r) {
      return setTimeout(S(e, r), t);
    }
    function f(e, t, r) {
      return !!Array.isArray(e) && (y(e, r[t], r), !0);
    }
    function y(e, t, r) {
      var n;
      if (e) if (e.forEach) e.forEach(t, r);else if (e.length !== a) for (n = 0; n < e.length;) t.call(r, e[n], n, e), n++;else for (n in e) e.hasOwnProperty(n) && t.call(r, e[n], n, e);
    }
    function v(e, t, r) {
      var n = "DEPRECATED METHOD: " + t + "\n" + r + " AT \n";
      return function () {
        var t = new Error("get-stack-trace"),
          r = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          o = i.console && (i.console.warn || i.console.log);
        return o && o.call(i.console, n, r), e.apply(this, arguments);
      };
    }
    g = "function" != typeof Object.assign ? function e(t) {
      if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
      for (var r = Object(t), n = 1; n < arguments.length; n++) {
        var i = arguments[n];
        if (i !== a && null !== i) for (var o in i) i.hasOwnProperty(o) && (r[o] = i[o]);
      }
      return r;
    } : Object.assign;
    var b = v(function e(t, r, n) {
        for (var i = Object.keys(r), o = 0; o < i.length;) (!n || n && t[i[o]] === a) && (t[i[o]] = r[i[o]]), o++;
        return t;
      }, "extend", "Use `assign`."),
      x = v(function e(t, r) {
        return b(t, r, !0);
      }, "merge", "Use `assign`.");
    function C(e, t, r) {
      var n = t.prototype,
        i;
      (i = e.prototype = Object.create(n)).constructor = e, i._super = n, r && g(i, r);
    }
    function S(e, t) {
      return function r() {
        return e.apply(t, arguments);
      };
    }
    function A(e, t) {
      return typeof e == d ? e.apply(t && t[0] || a, t) : e;
    }
    function w(e, t) {
      return e === a ? t : e;
    }
    function E(e, t, r) {
      y(P(t), function (t) {
        e.addEventListener(t, r, !1);
      });
    }
    function k(e, t, r) {
      y(P(t), function (t) {
        e.removeEventListener(t, r, !1);
      });
    }
    function O(e, t) {
      for (; e;) {
        if (e == t) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function D(e, t) {
      return e.indexOf(t) > -1;
    }
    function P(e) {
      return e.trim().split(/\s+/g);
    }
    function M(e, t, r) {
      if (e.indexOf && !r) return e.indexOf(t);
      for (var n = 0; n < e.length;) {
        if (r && e[n][r] == t || !r && e[n] === t) return n;
        n++;
      }
      return -1;
    }
    function I(e) {
      return Array.prototype.slice.call(e, 0);
    }
    function T(e, t, r) {
      for (var n = [], i = [], o = 0; o < e.length;) {
        var s = t ? e[o][t] : e[o];
        M(i, s) < 0 && n.push(e[o]), i[o] = s, o++;
      }
      return r && (n = t ? n.sort(function e(r, n) {
        return r[t] > n[t];
      }) : n.sort()), n;
    }
    function L(e, t) {
      for (var r, n, i = t[0].toUpperCase() + t.slice(1), o = 0; o < l.length;) {
        if ((n = (r = l[o]) ? r + i : t) in e) return n;
        o++;
      }
      return a;
    }
    var R = 1;
    function B() {
      return R++;
    }
    function F(e) {
      var t = e.ownerDocument || e;
      return t.defaultView || t.parentWindow || i;
    }
    var j = /mobile|tablet|ip(ad|hone|od)|android/i,
      _ = "ontouchstart" in i,
      N = L(i, "PointerEvent") !== a,
      z = _ && j.test(navigator.userAgent),
      H = "touch",
      W = "pen",
      V = "mouse",
      U = "kinect",
      q = 25,
      G = 1,
      K = 2,
      Z = 4,
      Y = 8,
      Q = 1,
      J = 2,
      X = 4,
      $ = 8,
      ee = 16,
      te = 6,
      re = 24,
      ne = 30,
      ie = ["x", "y"],
      oe = ["clientX", "clientY"];
    function se(e, t) {
      var r = this;
      this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
        A(e.options.enable, [e]) && r.handler(t);
      }, this.init();
    }
    function ae(e) {
      var t,
        r = e.options.inputClass;
      return new (t = r || (N ? De : z ? Fe : _ ? ze : Ae))(e, le);
    }
    function le(e, t, r) {
      var n = r.pointers.length,
        i = r.changedPointers.length,
        o = 1 & t && n - i === 0,
        s = 12 & t && n - i === 0;
      r.isFirst = !!o, r.isFinal = !!s, o && (e.session = {}), r.eventType = t, ce(e, r), e.emit("hammer.input", r), e.recognize(r), e.session.prevInput = r;
    }
    function ce(e, t) {
      var r = e.session,
        n = t.pointers,
        i = n.length;
      r.firstInput || (r.firstInput = pe(t)), i > 1 && !r.firstMultiple ? r.firstMultiple = pe(t) : 1 === i && (r.firstMultiple = !1);
      var o = r.firstInput,
        s = r.firstMultiple,
        a = s ? s.center : o.center,
        l = t.center = ue(n);
      t.timeStamp = u(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = ye(a, l), t.distance = fe(a, l), de(r, t), t.offsetDirection = me(t.deltaX, t.deltaY);
      var c = ge(t.deltaTime, t.deltaX, t.deltaY);
      t.overallVelocityX = c.x, t.overallVelocityY = c.y, t.overallVelocity = p(c.x) > p(c.y) ? c.x : c.y, t.scale = s ? be(s.pointers, n) : 1, t.rotation = s ? ve(s.pointers, n) : 0, t.maxPointers = r.prevInput ? t.pointers.length > r.prevInput.maxPointers ? t.pointers.length : r.prevInput.maxPointers : t.pointers.length, he(r, t);
      var d = e.element;
      O(t.srcEvent.target, d) && (d = t.srcEvent.target), t.target = d;
    }
    function de(e, t) {
      var r = t.center,
        n = e.offsetDelta || {},
        i = e.prevDelta || {},
        o = e.prevInput || {};
      1 !== t.eventType && 4 !== o.eventType || (i = e.prevDelta = {
        x: o.deltaX || 0,
        y: o.deltaY || 0
      }, n = e.offsetDelta = {
        x: r.x,
        y: r.y
      }), t.deltaX = i.x + (r.x - n.x), t.deltaY = i.y + (r.y - n.y);
    }
    function he(e, t) {
      var r = e.lastInterval || t,
        n = t.timeStamp - r.timeStamp,
        i,
        o,
        s,
        l;
      if (8 != t.eventType && (n > q || r.velocity === a)) {
        var c = t.deltaX - r.deltaX,
          d = t.deltaY - r.deltaY,
          h = ge(n, c, d);
        o = h.x, s = h.y, i = p(h.x) > p(h.y) ? h.x : h.y, l = me(c, d), e.lastInterval = t;
      } else i = r.velocity, o = r.velocityX, s = r.velocityY, l = r.direction;
      t.velocity = i, t.velocityX = o, t.velocityY = s, t.direction = l;
    }
    function pe(e) {
      for (var t = [], r = 0; r < e.pointers.length;) t[r] = {
        clientX: h(e.pointers[r].clientX),
        clientY: h(e.pointers[r].clientY)
      }, r++;
      return {
        timeStamp: u(),
        pointers: t,
        center: ue(t),
        deltaX: e.deltaX,
        deltaY: e.deltaY
      };
    }
    function ue(e) {
      var t = e.length;
      if (1 === t) return {
        x: h(e[0].clientX),
        y: h(e[0].clientY)
      };
      for (var r = 0, n = 0, i = 0; i < t;) r += e[i].clientX, n += e[i].clientY, i++;
      return {
        x: h(r / t),
        y: h(n / t)
      };
    }
    function ge(e, t, r) {
      return {
        x: t / e || 0,
        y: r / e || 0
      };
    }
    function me(e, t) {
      return e === t ? 1 : p(e) >= p(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : ee;
    }
    function fe(e, t, r) {
      r || (r = ie);
      var n = t[r[0]] - e[r[0]],
        i = t[r[1]] - e[r[1]];
      return Math.sqrt(n * n + i * i);
    }
    function ye(e, t, r) {
      r || (r = ie);
      var n = t[r[0]] - e[r[0]],
        i = t[r[1]] - e[r[1]];
      return 180 * Math.atan2(i, n) / Math.PI;
    }
    function ve(e, t) {
      return ye(t[1], t[0], oe) + ye(e[1], e[0], oe);
    }
    function be(e, t) {
      return fe(t[0], t[1], oe) / fe(e[0], e[1], oe);
    }
    se.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(F(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(F(this.element), this.evWin, this.domHandler);
      }
    };
    var xe = {
        mousedown: 1,
        mousemove: 2,
        mouseup: 4
      },
      Ce = "mousedown",
      Se = "mousemove mouseup";
    function Ae() {
      this.evEl = Ce, this.evWin = Se, this.pressed = !1, se.apply(this, arguments);
    }
    C(Ae, se, {
      handler: function e(t) {
        var r = xe[t.type];
        1 & r && 0 === t.button && (this.pressed = !0), 2 & r && 1 !== t.which && (r = 4), this.pressed && (4 & r && (this.pressed = !1), this.callback(this.manager, r, {
          pointers: [t],
          changedPointers: [t],
          pointerType: V,
          srcEvent: t
        }));
      }
    });
    var we = {
        pointerdown: 1,
        pointermove: 2,
        pointerup: 4,
        pointercancel: 8,
        pointerout: 8
      },
      Ee = {
        2: H,
        3: W,
        4: V,
        5: U
      },
      ke = "pointerdown",
      Oe = "pointermove pointerup pointercancel";
    function De() {
      this.evEl = ke, this.evWin = Oe, se.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    i.MSPointerEvent && !i.PointerEvent && (ke = "MSPointerDown", Oe = "MSPointerMove MSPointerUp MSPointerCancel"), C(De, se, {
      handler: function e(t) {
        var r = this.store,
          n = !1,
          i = t.type.toLowerCase().replace("ms", ""),
          o = we[i],
          s = Ee[t.pointerType] || t.pointerType,
          a = s == H,
          l = M(r, t.pointerId, "pointerId");
        1 & o && (0 === t.button || a) ? l < 0 && (r.push(t), l = r.length - 1) : 12 & o && (n = !0), l < 0 || (r[l] = t, this.callback(this.manager, o, {
          pointers: r,
          changedPointers: [t],
          pointerType: s,
          srcEvent: t
        }), n && r.splice(l, 1));
      }
    });
    var Pe = {
        touchstart: 1,
        touchmove: 2,
        touchend: 4,
        touchcancel: 8
      },
      Me = "touchstart",
      Ie = "touchstart touchmove touchend touchcancel";
    function Te() {
      this.evTarget = Me, this.evWin = Ie, this.started = !1, se.apply(this, arguments);
    }
    function Le(e, t) {
      var r = I(e.touches),
        n = I(e.changedTouches);
      return 12 & t && (r = T(r.concat(n), "identifier", !0)), [r, n];
    }
    C(Te, se, {
      handler: function e(t) {
        var r = Pe[t.type];
        if (1 === r && (this.started = !0), this.started) {
          var n = Le.call(this, t, r);
          12 & r && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, r, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: H,
            srcEvent: t
          });
        }
      }
    });
    var Re = {
        touchstart: 1,
        touchmove: 2,
        touchend: 4,
        touchcancel: 8
      },
      Be = "touchstart touchmove touchend touchcancel";
    function Fe() {
      this.evTarget = Be, this.targetIds = {}, se.apply(this, arguments);
    }
    function je(e, t) {
      var r = I(e.touches),
        n = this.targetIds;
      if (3 & t && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
      var i,
        o,
        s = I(e.changedTouches),
        a = [],
        l = this.target;
      if (o = r.filter(function (e) {
        return O(e.target, l);
      }), 1 === t) for (i = 0; i < o.length;) n[o[i].identifier] = !0, i++;
      for (i = 0; i < s.length;) n[s[i].identifier] && a.push(s[i]), 12 & t && delete n[s[i].identifier], i++;
      return a.length ? [T(o.concat(a), "identifier", !0), a] : void 0;
    }
    C(Fe, se, {
      handler: function e(t) {
        var r = Re[t.type],
          n = je.call(this, t, r);
        n && this.callback(this.manager, r, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: H,
          srcEvent: t
        });
      }
    });
    var _e = 2500,
      Ne = 25;
    function ze() {
      se.apply(this, arguments);
      var e = S(this.handler, this);
      this.touch = new Fe(this.manager, e), this.mouse = new Ae(this.manager, e), this.primaryTouch = null, this.lastTouches = [];
    }
    function He(e, t) {
      1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, We.call(this, t)) : 12 & e && We.call(this, t);
    }
    function We(e) {
      var t = e.changedPointers[0];
      if (t.identifier === this.primaryTouch) {
        var r = {
          x: t.clientX,
          y: t.clientY
        };
        this.lastTouches.push(r);
        var n = this.lastTouches,
          i;
        setTimeout(function () {
          var e = n.indexOf(r);
          e > -1 && n.splice(e, 1);
        }, _e);
      }
    }
    function Ve(e) {
      for (var t = e.srcEvent.clientX, r = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
        var i = this.lastTouches[n],
          o = Math.abs(t - i.x),
          s = Math.abs(r - i.y);
        if (o <= Ne && s <= Ne) return !0;
      }
      return !1;
    }
    C(ze, se, {
      handler: function e(t, r, n) {
        var i = n.pointerType == H,
          o = n.pointerType == V;
        if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (i) He.call(this, r, n);else if (o && Ve.call(this, n)) return;
          this.callback(t, r, n);
        }
      },
      destroy: function e() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    var Ue = L(c.style, "touchAction"),
      qe = Ue !== a,
      Ge = "compute",
      Ke = "auto",
      Ze = "manipulation",
      Ye = "none",
      Qe = "pan-x",
      Je = "pan-y",
      Xe = tt();
    function $e(e, t) {
      this.manager = e, this.set(t);
    }
    function et(e) {
      if (D(e, Ye)) return Ye;
      var t = D(e, Qe),
        r = D(e, Je);
      return t && r ? Ye : t || r ? t ? Qe : Je : D(e, Ze) ? Ze : Ke;
    }
    function tt() {
      if (!qe) return !1;
      var e = {},
        t = i.CSS && i.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (r) {
        e[r] = !t || i.CSS.supports("touch-action", r);
      }), e;
    }
    $e.prototype = {
      set: function (e) {
        e == Ge && (e = this.compute()), qe && this.manager.element.style && Xe[e] && (this.manager.element.style[Ue] = e), this.actions = e.toLowerCase().trim();
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var e = [];
        return y(this.manager.recognizers, function (t) {
          A(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
        }), et(e.join(" "));
      },
      preventDefaults: function (e) {
        var t = e.srcEvent,
          r = e.offsetDirection;
        if (this.manager.session.prevented) t.preventDefault();else {
          var n = this.actions,
            i = D(n, Ye) && !Xe[Ye],
            o = D(n, Je) && !Xe[Je],
            s = D(n, Qe) && !Xe[Qe];
          if (i) {
            var a = 1 === e.pointers.length,
              l = e.distance < 2,
              c = e.deltaTime < 250;
            if (a && l && c) return;
          }
          if (!s || !o) return i || o && 6 & r || s && r & re ? this.preventSrc(t) : void 0;
        }
      },
      preventSrc: function (e) {
        this.manager.session.prevented = !0, e.preventDefault();
      }
    };
    var rt = 1,
      nt = 2,
      it = 4,
      ot = 8,
      st = 8,
      at = 16,
      lt = 32;
    function ct(e) {
      this.options = g({}, this.defaults, e || {}), this.id = B(), this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = [];
    }
    function dt(e) {
      return e & at ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : "";
    }
    function ht(e) {
      return e == ee ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : "";
    }
    function pt(e, t) {
      var r = t.manager;
      return r ? r.get(e) : e;
    }
    function ut() {
      ct.apply(this, arguments);
    }
    function gt() {
      ut.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function mt() {
      ut.apply(this, arguments);
    }
    function ft() {
      ct.apply(this, arguments), this._timer = null, this._input = null;
    }
    function yt() {
      ut.apply(this, arguments);
    }
    function vt() {
      ut.apply(this, arguments);
    }
    function bt() {
      ct.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    function xt(e, t) {
      return (t = t || {}).recognizers = w(t.recognizers, xt.defaults.preset), new wt(e, t);
    }
    ct.prototype = {
      defaults: {},
      set: function (e) {
        return g(this.options, e), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function (e) {
        if (f(e, "recognizeWith", this)) return this;
        var t = this.simultaneous;
        return t[(e = pt(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this;
      },
      dropRecognizeWith: function (e) {
        return f(e, "dropRecognizeWith", this) || (e = pt(e, this), delete this.simultaneous[e.id]), this;
      },
      requireFailure: function (e) {
        if (f(e, "requireFailure", this)) return this;
        var t = this.requireFail;
        return -1 === M(t, e = pt(e, this)) && (t.push(e), e.requireFailure(this)), this;
      },
      dropRequireFailure: function (e) {
        if (f(e, "dropRequireFailure", this)) return this;
        e = pt(e, this);
        var t = M(this.requireFail, e);
        return t > -1 && this.requireFail.splice(t, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (e) {
        return !!this.simultaneous[e.id];
      },
      emit: function (e) {
        var t = this,
          r = this.state;
        function n(r) {
          t.manager.emit(r, e);
        }
        r < 8 && n(t.options.event + dt(r)), n(t.options.event), e.additionalEvent && n(e.additionalEvent), r >= 8 && n(t.options.event + dt(r));
      },
      tryEmit: function (e) {
        if (this.canEmit()) return this.emit(e);
        this.state = lt;
      },
      canEmit: function () {
        for (var e = 0; e < this.requireFail.length;) {
          if (!(33 & this.requireFail[e].state)) return !1;
          e++;
        }
        return !0;
      },
      recognize: function (e) {
        var t = g({}, e);
        if (!A(this.options.enable, [this, t])) return this.reset(), void (this.state = lt);
        56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t);
      },
      process: function (e) {},
      getTouchAction: function () {},
      reset: function () {}
    }, C(ut, ct, {
      defaults: {
        pointers: 1
      },
      attrTest: function (e) {
        var t = this.options.pointers;
        return 0 === t || e.pointers.length === t;
      },
      process: function (e) {
        var t = this.state,
          r = e.eventType,
          n = 6 & t,
          i = this.attrTest(e);
        return n && (8 & r || !i) ? t | at : n || i ? 4 & r ? 8 | t : 2 & t ? 4 | t : 2 : lt;
      }
    }), C(gt, ut, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: ne
      },
      getTouchAction: function () {
        var e = this.options.direction,
          t = [];
        return 6 & e && t.push(Je), e & re && t.push(Qe), t;
      },
      directionTest: function (e) {
        var t = this.options,
          r = !0,
          n = e.distance,
          i = e.direction,
          o = e.deltaX,
          s = e.deltaY;
        return i & t.direction || (6 & t.direction ? (i = 0 === o ? 1 : o < 0 ? 2 : 4, r = o != this.pX, n = Math.abs(e.deltaX)) : (i = 0 === s ? 1 : s < 0 ? 8 : ee, r = s != this.pY, n = Math.abs(e.deltaY))), e.direction = i, r && n > t.threshold && i & t.direction;
      },
      attrTest: function (e) {
        return ut.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e));
      },
      emit: function (e) {
        this.pX = e.deltaX, this.pY = e.deltaY;
        var t = ht(e.direction);
        t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e);
      }
    }), C(mt, ut, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [Ye];
      },
      attrTest: function (e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state);
      },
      emit: function (e) {
        if (1 !== e.scale) {
          var t = e.scale < 1 ? "in" : "out";
          e.additionalEvent = this.options.event + t;
        }
        this._super.emit.call(this, e);
      }
    }), C(ft, ct, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function () {
        return [Ke];
      },
      process: function (e) {
        var t = this.options,
          r = e.pointers.length === t.pointers,
          n = e.distance < t.threshold,
          i = e.deltaTime > t.time;
        if (this._input = e, !n || !r || 12 & e.eventType && !i) this.reset();else if (1 & e.eventType) this.reset(), this._timer = m(function () {
          this.state = 8, this.tryEmit();
        }, t.time, this);else if (4 & e.eventType) return 8;
        return lt;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (e) {
        8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = u(), this.manager.emit(this.options.event, this._input)));
      }
    }), C(yt, ut, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [Ye];
      },
      attrTest: function (e) {
        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state);
      }
    }), C(vt, ut, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .3,
        direction: 30,
        pointers: 1
      },
      getTouchAction: function () {
        return gt.prototype.getTouchAction.call(this);
      },
      attrTest: function (e) {
        var t = this.options.direction,
          r;
        return 30 & t ? r = e.overallVelocity : 6 & t ? r = e.overallVelocityX : t & re && (r = e.overallVelocityY), this._super.attrTest.call(this, e) && t & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && p(r) > this.options.velocity && 4 & e.eventType;
      },
      emit: function (e) {
        var t = ht(e.offsetDirection);
        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e);
      }
    }), C(bt, ct, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function () {
        return [Ze];
      },
      process: function (e) {
        var t = this.options,
          r = e.pointers.length === t.pointers,
          n = e.distance < t.threshold,
          i = e.deltaTime < t.time;
        if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
        if (n && i && r) {
          if (4 != e.eventType) return this.failTimeout();
          var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
            s = !this.pCenter || fe(this.pCenter, e.center) < t.posThreshold,
            a;
          if (this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = m(function () {
            this.state = 8, this.tryEmit();
          }, t.interval, this), 2) : 8;
        }
        return lt;
      },
      failTimeout: function () {
        return this._timer = m(function () {
          this.state = lt;
        }, this.options.interval, this), lt;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    }), xt.VERSION = "2.0.7", xt.defaults = {
      domEvents: !1,
      touchAction: Ge,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [[yt, {
        enable: !1
      }], [mt, {
        enable: !1
      }, ["rotate"]], [vt, {
        direction: 6
      }], [gt, {
        direction: 6
      }, ["swipe"]], [bt], [bt, {
        event: "doubletap",
        taps: 2
      }, ["tap"]], [ft]],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var Ct = 1,
      St = 2,
      At;
    function wt(e, t) {
      this.options = g({}, xt.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = ae(this), this.touchAction = new $e(this, this.options.touchAction), Et(this, !0), y(this.options.recognizers, function (e) {
        var t = this.add(new e[0](e[1]));
        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
      }, this);
    }
    function Et(e, t) {
      var r = e.element,
        n;
      r.style && (y(e.options.cssProps, function (i, o) {
        n = L(r.style, o), t ? (e.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = e.oldCssProps[n] || "";
      }), t || (e.oldCssProps = {}));
    }
    function kt(e, t) {
      var r = o.createEvent("Event");
      r.initEvent(e, !0, !0), r.gesture = t, t.target.dispatchEvent(r);
    }
    wt.prototype = {
      set: function (e) {
        return g(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this;
      },
      stop: function (e) {
        this.session.stopped = e ? 2 : 1;
      },
      recognize: function (e) {
        var t = this.session;
        if (!t.stopped) {
          var r;
          this.touchAction.preventDefaults(e);
          var n = this.recognizers,
            i = t.curRecognizer;
          (!i || i && 8 & i.state) && (i = t.curRecognizer = null);
          for (var o = 0; o < n.length;) r = n[o], 2 === t.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(e), !i && 14 & r.state && (i = t.curRecognizer = r), o++;
        }
      },
      get: function (e) {
        if (e instanceof ct) return e;
        for (var t = this.recognizers, r = 0; r < t.length; r++) if (t[r].options.event == e) return t[r];
        return null;
      },
      add: function (e) {
        if (f(e, "add", this)) return this;
        var t = this.get(e.options.event);
        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e;
      },
      remove: function (e) {
        if (f(e, "remove", this)) return this;
        if (e = this.get(e)) {
          var t = this.recognizers,
            r = M(t, e);
          -1 !== r && (t.splice(r, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (e, t) {
        if (e !== a && t !== a) {
          var r = this.handlers;
          return y(P(e), function (e) {
            r[e] = r[e] || [], r[e].push(t);
          }), this;
        }
      },
      off: function (e, t) {
        if (e !== a) {
          var r = this.handlers;
          return y(P(e), function (e) {
            t ? r[e] && r[e].splice(M(r[e], t), 1) : delete r[e];
          }), this;
        }
      },
      emit: function (e, t) {
        this.options.domEvents && kt(e, t);
        var r = this.handlers[e] && this.handlers[e].slice();
        if (r && r.length) {
          t.type = e, t.preventDefault = function () {
            t.srcEvent.preventDefault();
          };
          for (var n = 0; n < r.length;) r[n](t), n++;
        }
      },
      destroy: function () {
        this.element && Et(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    }, g(xt, {
      INPUT_START: 1,
      INPUT_MOVE: 2,
      INPUT_END: 4,
      INPUT_CANCEL: 8,
      STATE_POSSIBLE: 1,
      STATE_BEGAN: 2,
      STATE_CHANGED: 4,
      STATE_ENDED: 8,
      STATE_RECOGNIZED: 8,
      STATE_CANCELLED: at,
      STATE_FAILED: lt,
      DIRECTION_NONE: 1,
      DIRECTION_LEFT: 2,
      DIRECTION_RIGHT: 4,
      DIRECTION_UP: 8,
      DIRECTION_DOWN: ee,
      DIRECTION_HORIZONTAL: 6,
      DIRECTION_VERTICAL: re,
      DIRECTION_ALL: ne,
      Manager: wt,
      Input: se,
      TouchAction: $e,
      TouchInput: Fe,
      MouseInput: Ae,
      PointerEventInput: De,
      TouchMouseInput: ze,
      SingleTouchInput: Te,
      Recognizer: ct,
      AttrRecognizer: ut,
      Tap: bt,
      Pan: gt,
      Swipe: vt,
      Pinch: mt,
      Rotate: yt,
      Press: ft,
      on: E,
      off: k,
      each: y,
      merge: x,
      extend: b,
      assign: g,
      inherit: C,
      bindFn: S,
      prefixed: L
    }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = xt, (n = function () {
      return xt;
    }.call(t, r, t, e)) === a || (e.exports = n);
  }(window, document, "Hammer");
};
