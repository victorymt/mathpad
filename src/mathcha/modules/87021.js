/* module 87021 — 23298 chars */
module.exports = function (e, t, r) {
  var n;
  !function (i) {
    var o = /^\s+/,
      s = /\s+$/,
      a = 0,
      l = i.round,
      c = i.min,
      d = i.max,
      h = i.random;
    function p(e, t) {
      if (t = t || {}, (e = e || "") instanceof p) return e;
      if (!(this instanceof p)) return new p(e, t);
      var r = u(e);
      this._originalInput = e, this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = l(100 * this._a) / 100, this._format = t.format || r.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = l(this._r)), this._g < 1 && (this._g = l(this._g)), this._b < 1 && (this._b = l(this._b)), this._ok = r.ok, this._tc_id = a++;
    }
    function u(e) {
      var t = {
          r: 0,
          g: 0,
          b: 0
        },
        r = 1,
        n = null,
        i = null,
        o = null,
        s = !1,
        a = !1;
      return "string" == typeof e && (e = te(e)), "object" == typeof e && (ee(e.r) && ee(e.g) && ee(e.b) ? (t = g(e.r, e.g, e.b), s = !0, a = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : ee(e.h) && ee(e.s) && ee(e.v) ? (n = q(e.s), i = q(e.v), t = v(e.h, n, i), s = !0, a = "hsv") : ee(e.h) && ee(e.s) && ee(e.l) && (n = q(e.s), o = q(e.l), t = f(e.h, n, o), s = !0, a = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = _(r), {
        ok: s,
        format: e.format || a,
        r: c(255, d(t.r, 0)),
        g: c(255, d(t.g, 0)),
        b: c(255, d(t.b, 0)),
        a: r
      };
    }
    function g(e, t, r) {
      return {
        r: 255 * N(e, 255),
        g: 255 * N(t, 255),
        b: 255 * N(r, 255)
      };
    }
    function m(e, t, r) {
      e = N(e, 255), t = N(t, 255), r = N(r, 255);
      var n = d(e, t, r),
        i = c(e, t, r),
        o,
        s,
        a = (n + i) / 2;
      if (n == i) o = s = 0;else {
        var l = n - i;
        switch (s = a > .5 ? l / (2 - n - i) : l / (n + i), n) {
          case e:
            o = (t - r) / l + (t < r ? 6 : 0);
            break;
          case t:
            o = (r - e) / l + 2;
            break;
          case r:
            o = (e - t) / l + 4;
        }
        o /= 6;
      }
      return {
        h: o,
        s,
        l: a
      };
    }
    function f(e, t, r) {
      var n, i, o;
      function s(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
      }
      if (e = N(e, 360), t = N(t, 100), r = N(r, 100), 0 === t) n = i = o = r;else {
        var a = r < .5 ? r * (1 + t) : r + t - r * t,
          l = 2 * r - a;
        n = s(l, a, e + 1 / 3), i = s(l, a, e), o = s(l, a, e - 1 / 3);
      }
      return {
        r: 255 * n,
        g: 255 * i,
        b: 255 * o
      };
    }
    function y(e, t, r) {
      e = N(e, 255), t = N(t, 255), r = N(r, 255);
      var n = d(e, t, r),
        i = c(e, t, r),
        o,
        s,
        a = n,
        l = n - i;
      if (s = 0 === n ? 0 : l / n, n == i) o = 0;else {
        switch (n) {
          case e:
            o = (t - r) / l + (t < r ? 6 : 0);
            break;
          case t:
            o = (r - e) / l + 2;
            break;
          case r:
            o = (e - t) / l + 4;
        }
        o /= 6;
      }
      return {
        h: o,
        s,
        v: a
      };
    }
    function v(e, t, r) {
      e = 6 * N(e, 360), t = N(t, 100), r = N(r, 100);
      var n = i.floor(e),
        o = e - n,
        s = r * (1 - t),
        a = r * (1 - o * t),
        l = r * (1 - (1 - o) * t),
        c = n % 6,
        d,
        h,
        p;
      return {
        r: 255 * [r, a, s, s, l, r][c],
        g: 255 * [l, r, r, a, s, s][c],
        b: 255 * [s, s, l, r, r, a][c]
      };
    }
    function b(e, t, r, n) {
      var i = [U(l(e).toString(16)), U(l(t).toString(16)), U(l(r).toString(16))];
      return n && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
    }
    function x(e, t, r, n, i) {
      var o = [U(l(e).toString(16)), U(l(t).toString(16)), U(l(r).toString(16)), U(G(n))];
      return i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
    }
    function C(e, t, r, n) {
      var i;
      return [U(G(n)), U(l(e).toString(16)), U(l(t).toString(16)), U(l(r).toString(16))].join("");
    }
    function S(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = p(e).toHsl();
      return r.s -= t / 100, r.s = z(r.s), p(r);
    }
    function A(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = p(e).toHsl();
      return r.s += t / 100, r.s = z(r.s), p(r);
    }
    function w(e) {
      return p(e).desaturate(100);
    }
    function E(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = p(e).toHsl();
      return r.l += t / 100, r.l = z(r.l), p(r);
    }
    function k(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = p(e).toRgb();
      return r.r = d(0, c(255, r.r - l(-t / 100 * 255))), r.g = d(0, c(255, r.g - l(-t / 100 * 255))), r.b = d(0, c(255, r.b - l(-t / 100 * 255))), p(r);
    }
    function O(e, t) {
      t = 0 === t ? 0 : t || 10;
      var r = p(e).toHsl();
      return r.l -= t / 100, r.l = z(r.l), p(r);
    }
    function D(e, t) {
      var r = p(e).toHsl(),
        n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, p(r);
    }
    function P(e) {
      var t = p(e).toHsl();
      return t.h = (t.h + 180) % 360, p(t);
    }
    function M(e) {
      var t = p(e).toHsl(),
        r = t.h;
      return [p(e), p({
        h: (r + 120) % 360,
        s: t.s,
        l: t.l
      }), p({
        h: (r + 240) % 360,
        s: t.s,
        l: t.l
      })];
    }
    function I(e) {
      var t = p(e).toHsl(),
        r = t.h;
      return [p(e), p({
        h: (r + 90) % 360,
        s: t.s,
        l: t.l
      }), p({
        h: (r + 180) % 360,
        s: t.s,
        l: t.l
      }), p({
        h: (r + 270) % 360,
        s: t.s,
        l: t.l
      })];
    }
    function T(e) {
      var t = p(e).toHsl(),
        r = t.h;
      return [p(e), p({
        h: (r + 72) % 360,
        s: t.s,
        l: t.l
      }), p({
        h: (r + 216) % 360,
        s: t.s,
        l: t.l
      })];
    }
    function L(e, t, r) {
      t = t || 6, r = r || 30;
      var n = p(e).toHsl(),
        i = 360 / r,
        o = [p(e)];
      for (n.h = (n.h - (i * t >> 1) + 720) % 360; --t;) n.h = (n.h + i) % 360, o.push(p(n));
      return o;
    }
    function R(e, t) {
      t = t || 6;
      for (var r = p(e).toHsv(), n = r.h, i = r.s, o = r.v, s = [], a = 1 / t; t--;) s.push(p({
        h: n,
        s: i,
        v: o
      })), o = (o + a) % 1;
      return s;
    }
    p.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
      },
      getLuminance: function () {
        var e = this.toRgb(),
          t,
          r,
          n,
          o,
          s,
          a;
        return t = e.r / 255, r = e.g / 255, n = e.b / 255, .2126 * (o = t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .7152 * (s = r <= .03928 ? r / 12.92 : i.pow((r + .055) / 1.055, 2.4)) + .0722 * (a = n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4));
      },
      setAlpha: function (e) {
        return this._a = _(e), this._roundA = l(100 * this._a) / 100, this;
      },
      toHsv: function () {
        var e = y(this._r, this._g, this._b);
        return {
          h: 360 * e.h,
          s: e.s,
          v: e.v,
          a: this._a
        };
      },
      toHsvString: function () {
        var e = y(this._r, this._g, this._b),
          t = l(360 * e.h),
          r = l(100 * e.s),
          n = l(100 * e.v);
        return 1 == this._a ? "hsv(" + t + ", " + r + "%, " + n + "%)" : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
      },
      toHsl: function () {
        var e = m(this._r, this._g, this._b);
        return {
          h: 360 * e.h,
          s: e.s,
          l: e.l,
          a: this._a
        };
      },
      toHslString: function () {
        var e = m(this._r, this._g, this._b),
          t = l(360 * e.h),
          r = l(100 * e.s),
          n = l(100 * e.l);
        return 1 == this._a ? "hsl(" + t + ", " + r + "%, " + n + "%)" : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
      },
      toHex: function (e) {
        return b(this._r, this._g, this._b, e);
      },
      toHexString: function (e) {
        return "#" + this.toHex(e);
      },
      toHex8: function (e) {
        return x(this._r, this._g, this._b, this._a, e);
      },
      toHex8String: function (e) {
        return "#" + this.toHex8(e);
      },
      toRgb: function () {
        return {
          r: l(this._r),
          g: l(this._g),
          b: l(this._b),
          a: this._a
        };
      },
      toRgbString: function () {
        return 1 == this._a ? "rgb(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ")" : "rgba(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function () {
        return {
          r: l(100 * N(this._r, 255)) + "%",
          g: l(100 * N(this._g, 255)) + "%",
          b: l(100 * N(this._b, 255)) + "%",
          a: this._a
        };
      },
      toPercentageRgbString: function () {
        return 1 == this._a ? "rgb(" + l(100 * N(this._r, 255)) + "%, " + l(100 * N(this._g, 255)) + "%, " + l(100 * N(this._b, 255)) + "%)" : "rgba(" + l(100 * N(this._r, 255)) + "%, " + l(100 * N(this._g, 255)) + "%, " + l(100 * N(this._b, 255)) + "%, " + this._roundA + ")";
      },
      toName: function () {
        return 0 === this._a ? "transparent" : !(this._a < 1) && (F[b(this._r, this._g, this._b, !0)] || !1);
      },
      toFilter: function (e) {
        var t = "#" + C(this._r, this._g, this._b, this._a),
          r = t,
          n = this._gradientType ? "GradientType = 1, " : "";
        if (e) {
          var i = p(e);
          r = "#" + C(i._r, i._g, i._b, i._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")";
      },
      toString: function (e) {
        var t = !!e;
        e = e || this._format;
        var r = !1,
          n = this._a < 1 && this._a >= 0,
          i;
        return t || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (r = this.toRgbString()), "prgb" === e && (r = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (r = this.toHexString()), "hex3" === e && (r = this.toHexString(!0)), "hex4" === e && (r = this.toHex8String(!0)), "hex8" === e && (r = this.toHex8String()), "name" === e && (r = this.toName()), "hsl" === e && (r = this.toHslString()), "hsv" === e && (r = this.toHsvString()), r || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString();
      },
      clone: function () {
        return p(this.toString());
      },
      _applyModification: function (e, t) {
        var r = e.apply(null, [this].concat([].slice.call(t)));
        return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
      },
      lighten: function () {
        return this._applyModification(E, arguments);
      },
      brighten: function () {
        return this._applyModification(k, arguments);
      },
      darken: function () {
        return this._applyModification(O, arguments);
      },
      desaturate: function () {
        return this._applyModification(S, arguments);
      },
      saturate: function () {
        return this._applyModification(A, arguments);
      },
      greyscale: function () {
        return this._applyModification(w, arguments);
      },
      spin: function () {
        return this._applyModification(D, arguments);
      },
      _applyCombination: function (e, t) {
        return e.apply(null, [this].concat([].slice.call(t)));
      },
      analogous: function () {
        return this._applyCombination(L, arguments);
      },
      complement: function () {
        return this._applyCombination(P, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(R, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(T, arguments);
      },
      triad: function () {
        return this._applyCombination(M, arguments);
      },
      tetrad: function () {
        return this._applyCombination(I, arguments);
      }
    }, p.fromRatio = function (e, t) {
      if ("object" == typeof e) {
        var r = {};
        for (var n in e) e.hasOwnProperty(n) && (r[n] = "a" === n ? e[n] : q(e[n]));
        e = r;
      }
      return p(e, t);
    }, p.equals = function (e, t) {
      return !(!e || !t) && p(e).toRgbString() == p(t).toRgbString();
    }, p.random = function () {
      return p.fromRatio({
        r: h(),
        g: h(),
        b: h()
      });
    }, p.mix = function (e, t, r) {
      r = 0 === r ? 0 : r || 50;
      var n = p(e).toRgb(),
        i = p(t).toRgb(),
        o = r / 100,
        s;
      return p({
        r: (i.r - n.r) * o + n.r,
        g: (i.g - n.g) * o + n.g,
        b: (i.b - n.b) * o + n.b,
        a: (i.a - n.a) * o + n.a
      });
    }, p.readability = function (e, t) {
      var r = p(e),
        n = p(t);
      return (i.max(r.getLuminance(), n.getLuminance()) + .05) / (i.min(r.getLuminance(), n.getLuminance()) + .05);
    }, p.isReadable = function (e, t, r) {
      var n = p.readability(e, t),
        i,
        o;
      switch (o = !1, (i = re(r)).level + i.size) {
        case "AAsmall":
        case "AAAlarge":
          o = n >= 4.5;
          break;
        case "AAlarge":
          o = n >= 3;
          break;
        case "AAAsmall":
          o = n >= 7;
      }
      return o;
    }, p.mostReadable = function (e, t, r) {
      var n = null,
        i = 0,
        o,
        s,
        a,
        l;
      s = (r = r || {}).includeFallbackColors, a = r.level, l = r.size;
      for (var c = 0; c < t.length; c++) (o = p.readability(e, t[c])) > i && (i = o, n = p(t[c]));
      return p.isReadable(e, n, {
        level: a,
        size: l
      }) || !s ? n : (r.includeFallbackColors = !1, p.mostReadable(e, ["#fff", "#000"], r));
    };
    var B = p.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      },
      F = p.hexNames = j(B);
    function j(e) {
      var t = {};
      for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
      return t;
    }
    function _(e) {
      return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function N(e, t) {
      W(e) && (e = "100%");
      var r = V(e);
      return e = c(t, d(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), i.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
    }
    function z(e) {
      return c(1, d(0, e));
    }
    function H(e) {
      return parseInt(e, 16);
    }
    function W(e) {
      return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e);
    }
    function V(e) {
      return "string" == typeof e && -1 != e.indexOf("%");
    }
    function U(e) {
      return 1 == e.length ? "0" + e : "" + e;
    }
    function q(e) {
      return e <= 1 && (e = 100 * e + "%"), e;
    }
    function G(e) {
      return i.round(255 * parseFloat(e)).toString(16);
    }
    function K(e) {
      return H(e) / 255;
    }
    var Z = (X = "[\\s|\\(]+(" + (J = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")\\s*\\)?", $ = "[\\s|\\(]+(" + J + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")[,|\\s]+(" + J + ")\\s*\\)?", {
        CSS_UNIT: new RegExp(J),
        rgb: new RegExp("rgb" + X),
        rgba: new RegExp("rgba" + $),
        hsl: new RegExp("hsl" + X),
        hsla: new RegExp("hsla" + $),
        hsv: new RegExp("hsv" + X),
        hsva: new RegExp("hsva" + $),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      }),
      Y,
      Q,
      J,
      X,
      $;
    function ee(e) {
      return !!Z.CSS_UNIT.exec(e);
    }
    function te(e) {
      e = e.replace(o, "").replace(s, "").toLowerCase();
      var t = !1,
        r;
      if (B[e]) e = B[e], t = !0;else if ("transparent" == e) return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
      return (r = Z.rgb.exec(e)) ? {
        r: r[1],
        g: r[2],
        b: r[3]
      } : (r = Z.rgba.exec(e)) ? {
        r: r[1],
        g: r[2],
        b: r[3],
        a: r[4]
      } : (r = Z.hsl.exec(e)) ? {
        h: r[1],
        s: r[2],
        l: r[3]
      } : (r = Z.hsla.exec(e)) ? {
        h: r[1],
        s: r[2],
        l: r[3],
        a: r[4]
      } : (r = Z.hsv.exec(e)) ? {
        h: r[1],
        s: r[2],
        v: r[3]
      } : (r = Z.hsva.exec(e)) ? {
        h: r[1],
        s: r[2],
        v: r[3],
        a: r[4]
      } : (r = Z.hex8.exec(e)) ? {
        r: H(r[1]),
        g: H(r[2]),
        b: H(r[3]),
        a: K(r[4]),
        format: t ? "name" : "hex8"
      } : (r = Z.hex6.exec(e)) ? {
        r: H(r[1]),
        g: H(r[2]),
        b: H(r[3]),
        format: t ? "name" : "hex"
      } : (r = Z.hex4.exec(e)) ? {
        r: H(r[1] + "" + r[1]),
        g: H(r[2] + "" + r[2]),
        b: H(r[3] + "" + r[3]),
        a: K(r[4] + "" + r[4]),
        format: t ? "name" : "hex8"
      } : !!(r = Z.hex3.exec(e)) && {
        r: H(r[1] + "" + r[1]),
        g: H(r[2] + "" + r[2]),
        b: H(r[3] + "" + r[3]),
        format: t ? "name" : "hex"
      };
    }
    function re(e) {
      var t, r;
      return "AA" !== (t = ((e = e || {
        level: "AA",
        size: "small"
      }).level || "AA").toUpperCase()) && "AAA" !== t && (t = "AA"), "small" !== (r = (e.size || "small").toLowerCase()) && "large" !== r && (r = "small"), {
        level: t,
        size: r
      };
    }
    e.exports ? e.exports = p : void 0 === (n = function () {
      return p;
    }.call(t, r, t, e)) || (e.exports = n);
  }(Math);
};
