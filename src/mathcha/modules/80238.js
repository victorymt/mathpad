/* module 80238 — 2731 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(19539);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    run(e, t) {
      var r = e.minMax,
        n = e.unitType,
        o = e.majorSteps;
      if ("radix10" != n) {
        if ("pi" == n) for (var a, l = (r.max - r.min) / o, c = this.parseAsPowerOf10(l / Math.PI), d = this.getMapNumber(c.value), h = s(s({}, c), {}, {
            value: d
          }), p = this.getNumberFromExponentInfo(h), u = p * Math.PI, g, m, f = this.getFirstStep(r.min, u), y = this.getFirstStep(r.min / Math.PI, p), v = 0; f <= r.max; f += u, v += 1, y += p) {
          var b = i.A.round4(y),
            x = "".concat(b, "π");
          1 == b && (x = "π"), 0 == b && (x = "0"), t(f, v, u, x, 0 == b);
        }
      } else for (var C = this.calculateRadix10StepSize(r, o), S, A = this.getFirstStep(r.min, C), w = 0; A <= r.max; A += C, w += 1) t(A = i.A.round4(A), w, C, A.toString(), 0 == A);
    }
    calculateRadix10StepSize(e, t) {
      var r,
        n = (e.max - e.min) / t,
        i = this.parseAsPowerOf10(n),
        o = this.getMapNumber(i.value),
        a = s(s({}, i), {}, {
          value: o
        }),
        l;
      return this.getNumberFromExponentInfo(a);
    }
    getFirstStep(e, t) {
      return e % t == 0 ? e : e + t < 0 ? i.A.round4(e - (e + t) % t) : i.A.round4(e + t - (e + t) % t);
    }
    getMapNumber(e) {
      if (e < 1.5) return 1;
      if (e < 2.3) return 2;
      if (e < 4) return 2.5;
      if (e < 7) return 5;
      if (e < 11) return 10;
      throw new Error("should not go here");
    }
    getNumberFromExponentInfo(e) {
      return Number("".concat(e.value, "e").concat(e.exponent));
    }
    parseAsPowerOf10(e) {
      var t = e.toExponential(),
        r,
        n = /e([-+]?\d+)$/g.exec(t);
      return {
        value: Number.parseInt("-" == t[0] ? t.substr(0, 2) : t[0]),
        exponent: Number.parseInt(n[1])
      };
    }
  }
  const l = new a();
};
