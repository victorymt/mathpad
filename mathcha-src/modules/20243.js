/* module 20243 — 6200 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => D
  });
  var n = r(64467),
    i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    },
    o = function e(t) {
      return "number" == typeof t && !isNaN(t) && isFinite(t);
    },
    s = function e(t) {
      return null != t && "object" === (void 0 === t ? "undefined" : i(t));
    };
  function a(e) {
    return s(e) && e.hasOwnProperty("a") && o(e.a) && e.hasOwnProperty("b") && o(e.b) && e.hasOwnProperty("c") && o(e.c) && e.hasOwnProperty("d") && o(e.d) && e.hasOwnProperty("e") && o(e.e) && e.hasOwnProperty("f") && o(e.f);
  }
  function l(e) {
    return void 0 === e;
  }
  function c(e) {
    var t;
    return {
      a: 1,
      c: 0,
      e,
      b: 0,
      d: 1,
      f: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
    };
  }
  function d(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
      return r;
    }
    return Array.from(e);
  }
  function h(e) {
    return Array.isArray(e) ? e : Array.from(e);
  }
  function p() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = function e(t, r) {
      return {
        a: t.a * r.a + t.c * r.b,
        c: t.a * r.c + t.c * r.d,
        e: t.a * r.e + t.c * r.f + t.e,
        b: t.b * r.a + t.d * r.b,
        d: t.b * r.c + t.d * r.d,
        f: t.b * r.e + t.d * r.f + t.f
      };
    };
    switch ((t = Array.isArray(t[0]) ? t[0] : t).length) {
      case 0:
        throw new Error("no matrices provided");
      case 1:
        return t[0];
      case 2:
        return n(t[0], t[1]);
      default:
        var i,
          o = h(t),
          s = o[0],
          a = o[1],
          l = o.slice(2),
          c = n(s, a);
        return p.apply(void 0, [c].concat(d(l)));
    }
  }
  function u() {
    return p.apply(void 0, arguments);
  }
  var g = Math.cos,
    m = Math.sin,
    f = Math.PI;
  function y(e, t, r) {
    var n = g(e),
      i = m(e),
      o = {
        a: n,
        c: -i,
        e: 0,
        b: i,
        d: n,
        f: 0
      };
    return l(t) || l(r) ? o : p([c(t, r), o, c(-t, -r)]);
  }
  function v(e) {
    var t, r;
    return y(e * f / 180, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0);
  }
  function b(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
    return l(t) && (t = e), {
      a: e,
      c: 0,
      e: 0,
      b: 0,
      d: t,
      f: 0
    };
  }
  var x = Math.tan;
  function C(e, t) {
    return {
      a: 1,
      c: x(e),
      e: 0,
      b: x(t),
      d: 1,
      f: 0
    };
  }
  function S(e, t) {
    return C(e * Math.PI / 180, t * Math.PI / 180);
  }
  function A(e) {
    return E(e);
  }
  function w(e) {
    return E(e);
  }
  function E(e) {
    return "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")";
  }
  var k = r(2543),
    O = r.n(k);
  class D {
    constructor(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      (0, n.A)(this, "originValue", void 0), (0, n.A)(this, "transforms", []), (0, n.A)(this, "getMappedMatrix", e => {
        var t = null;
        switch (e.type) {
          case "rotation":
            t = v(e.value, e.cx, e.cy);
            break;
          case "scale":
            t = b(e.x, e.y);
            break;
          case "skew":
            t = S(e.x, e.y);
            break;
          case "translate":
            t = c(e.x, e.y);
        }
        return this.originValue && "translate" != e.type ? this.wrapAroundOrigin(t) : [t];
      }), this.originValue = e, this.transforms = t;
    }
    orgin(e, t) {
      return new D({
        x: e,
        y: t
      }, this.transforms);
    }
    rotate() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "deg";
      return e ? new D(this.originValue, this.transforms.concat({
        type: "rotation",
        value: e,
        unit: t
      })) : this;
    }
    rotateAround(e, t, r, n) {
      return e ? new D(this.originValue, this.transforms.concat({
        type: "rotation",
        value: e,
        unit: n,
        cx: t,
        cy: r
      })) : this;
    }
    skew() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "deg";
      return e || t ? new D(this.originValue, this.transforms.concat({
        type: "skew",
        x: e,
        y: t,
        unit: r
      })) : this;
    }
    translate() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return e || t ? new D(this.originValue, this.transforms.concat({
        type: "translate",
        x: e,
        y: t
      })) : this;
    }
    scale() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = arguments.length > 1 ? arguments[1] : void 0;
      return 1 != e || 1 != t && void 0 !== t ? new D(this.originValue, this.transforms.concat({
        type: "scale",
        x: e,
        y: t
      })) : this;
    }
    wrapAroundOrigin(e) {
      return [c(this.originValue.x, this.originValue.y), e, c(-this.originValue.x, -this.originValue.y)];
    }
    transformResult() {
      var e = O().flatMap(this.transforms, this.getMappedMatrix),
        t;
      return e.length <= 0 ? null : p(...e);
    }
    toCssStyle() {
      var e = this.transformResult();
      return e ? A(e) : null;
    }
    toSVG() {
      var e = this.transformResult();
      return e ? w(e) : null;
    }
  }
};
