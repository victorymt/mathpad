/* module 67107 — 1344 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    L: () => o
  });
  var n = r(19539);
  class i {
    toPixel(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      switch (t || "px") {
        case "cm":
          return this.roundPixel(37.795276 * e, r);
        case "inch":
          return this.roundPixel(96 * e, r);
        case "px":
          return e;
        case "mm":
          return this.roundPixel(3.7795276 * e, r);
      }
      return e;
    }
    roundPixel(e, t) {
      return t ? Math.round(e) : e;
    }
    roundByDecimal(e, t) {
      return "0" == t ? Math.round(e) : "2" == t ? n.A.round2(e) : n.A.round4(e);
    }
    pixelToUnit(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "4";
      switch (t || "px") {
        case "cm":
          return this.roundByDecimal(e / 37.795276, r);
        case "inch":
          return this.roundByDecimal(e / 96, r);
        case "px":
          return e;
        case "mm":
          return this.roundByDecimal(e / 3.7795276, r);
      }
      return e;
    }
    convert(e, t, r) {
      if ((t = t || "px") == (r = r || "px")) return e;
      var n = this.toPixel(e, t, !0),
        i = "px" == r || "mm" == r ? "0" : "2";
      return this.pixelToUnit(n, r, i);
    }
  }
  var o = new i();
};
