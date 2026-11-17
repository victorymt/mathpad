/* module 39314 — 3929 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(97994);
  class a {
    constructor() {
      (0, n.A)(this, "blackArr", [0, 0, 0]), (0, n.A)(this, "whiteArr", [255, 255, 255]), (0, n.A)(this, "greenArr", [0, 255, 0]), (0, n.A)(this, "transparentArr", [0, 0, 0, 0]);
    }
    setAlpha(e, t) {
      return [e[0], e[1], e[2], t];
    }
    isBlackColor(e) {
      return !!e && ("black" == e || "#000" == e || "#000000" == e || (e = this.colorToArr(e, this.blackArr)) instanceof Array && 0 == e[0] && 0 == e[1] && 0 == e[2]);
    }
    getHtmlColor(e, t) {
      return "none" == e ? "none" != t && t ? this.getHtmlColor(t) : e : o().isString(e) ? e : 3 == e.length ? "rgb(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ")") : "rgba(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ",").concat(e[3], ")");
    }
    getHtmlColorWithOpacity(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!e) return {
        color: void 0,
        opacity: 1
      };
      if (o().isString(e)) {
        if ("none" == e) return {
          color: "none",
          opacity: 1
        };
        if (t) {
          var r = this.colorToArr(e, this.blackArr);
          return this.getHtmlColorWithOpacity(r, !1);
        }
        return {
          color: e,
          opacity: 1
        };
      }
      return 3 == e.length ? {
        color: "rgb(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ")"),
        opacity: 1
      } : {
        color: "rgb(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ")"),
        opacity: e[3]
      };
    }
    colorToHex(e, t) {
      return this.colorArrToHex(this.colorToArr(e, t));
    }
    colorArrToHex(e) {
      return 4 == e.length ? "#".concat(this.byteHex(e[0])).concat(this.byteHex(e[1])).concat(this.byteHex(e[2])).concat(this.byteHex(Math.round(255 * e[3]))) : "#".concat(this.byteHex(e[0])).concat(this.byteHex(e[1])).concat(this.byteHex(e[2]));
    }
    byteHex(e) {
      e > 255 && (e = 255), e < 0 && (e = 0);
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t;
    }
    colorToArr(e, t) {
      return e instanceof Array ? e : this.stringToRgbaArr(e, t);
    }
    stringToRgbaArr(e, t) {
      if ("none" === e || !e) return t;
      if (o().startsWith(e, "rgba")) {
        var r,
          n = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/g.exec(e);
        return [Number.parseInt(n[1], 10), Number.parseInt(n[2], 10), Number.parseInt(n[3], 10), Number.parseFloat(n[4])];
      }
      if (o().startsWith(e, "rgb")) {
        var i,
          a = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/g.exec(e);
        return [Number.parseInt(a[1], 10), Number.parseInt(a[2], 10), Number.parseInt(a[3], 10), 1];
      }
      if (o().startsWith(e, "#")) {
        if (9 == e.length || 5 == e.length) {
          var l = this.hexToRgba(e);
          return [l.r, l.g, l.b, s.A.round2(l.a / 255)];
        }
        var c = this.hexToRgb(e);
        return [c.r, c.g, c.b, 1];
      }
      return t;
    }
    hexToRgb(e) {
      var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      e = e.replace(t, function (e, t, r, n) {
        return t + t + r + r + n + n;
      });
      var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return r ? {
        r: parseInt(r[1], 16),
        g: parseInt(r[2], 16),
        b: parseInt(r[3], 16)
      } : null;
    }
    hexToRgba(e) {
      var t = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
      e = e.replace(t, function (e, t, r, n, i) {
        return t + t + r + r + n + n + i + i;
      });
      var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return r ? {
        r: parseInt(r[1], 16),
        g: parseInt(r[2], 16),
        b: parseInt(r[3], 16),
        a: parseInt(r[4], 16)
      } : null;
    }
  }
  const l = new a();
};
