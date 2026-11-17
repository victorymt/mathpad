/* module 39429 — 3316 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  var n = r(64467);
  class i {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      (0, n.A)(this, "fragments", void 0), this.fragments = e;
    }
    push(e) {
      this.fragments.push(this.parse(e));
    }
    pushArr(e) {
      e.forEach(e => this.fragments.push(this.parse(e)));
    }
    parse(e) {
      var t = e.trim().substr(1).split(/[,\s]/).filter(e => !!e.trim()).map(e => Number.parseFloat(e));
      return [e[0]].concat(t);
    }
    wrap(e) {
      return new i(e);
    }
    shift(e, t) {
      return this.wrap(this.fragments.map(r => {
        var n = r[0];
        switch (n) {
          case "M":
          case "T":
            return [n, r[1] + e, r[2] + t];
          default:
            return r;
        }
      }));
    }
    curveScaleX(e, t) {
      return this.wrap(this.fragments.map(r => {
        var n = r[0];
        switch (n.toLowerCase()) {
          case "t":
            return [n, r[1] * e, r[2] * t];
          case "q":
          case "s":
            return [n, r[1] * e, r[2] * t, r[3] * e, r[4] * t];
          case "c":
            return [n, r[1] * e, r[2] * t, r[3] * e, r[4] * t, r[5] * e, r[6] * t];
          default:
            return r;
        }
      }));
    }
    scale(e, t) {
      return this.wrap(this.fragments.map(r => {
        var n = r[0];
        switch (n.toLowerCase()) {
          case "m":
          case "l":
          case "t":
            return [n, r[1] * e, r[2] * t];
          case "q":
          case "s":
            return [n, r[1] * e, r[2] * t, r[3] * e, r[4] * t];
          case "c":
            return [n, r[1] * e, r[2] * t, r[3] * e, r[4] * t, r[5] * e, r[6] * t];
          case "v":
            return [n, r[1] * t];
          case "h":
            return [n, r[1] * e];
          default:
            return r;
        }
      }));
    }
    flipY() {
      return this.wrap(this.fragments.map(e => {
        var t = e[0];
        switch (t.toLowerCase()) {
          case "m":
          case "l":
          case "t":
            return [t, e[1], -1 * e[2]];
          case "q":
          case "s":
            return [t, e[1], -1 * e[2], e[3], -1 * e[4]];
          case "c":
            return [t, e[1], -1 * e[2], e[3], -1 * e[4], e[5], -1 * e[6]];
          case "v":
            return [t, -1 * e[1]];
          default:
            return e;
        }
      }));
    }
    flipX() {
      return this.wrap(this.fragments.map(e => {
        var t = e[0];
        switch (t.toLowerCase()) {
          case "m":
          case "t":
          case "l":
            return [t, -1 * e[1], e[2]];
          case "q":
          case "s":
            return [t, -1 * e[1], e[2], -1 * e[3], e[4]];
          case "c":
            return [t, -1 * e[1], e[2], -1 * e[3], e[4], -1 * e[5], e[6]];
          case "h":
            return [t, -1 * e[1]];
          default:
            return e;
        }
      }));
    }
    path() {
      for (var e = "", t = 0; t < this.fragments.length; t++) {
        var r = this.fragments[t];
        e += " " + r[0];
        for (var n = 1; n < r.length; n++) {
          var i;
          e += " " + r[n].toFixed(2);
        }
      }
      return e;
    }
  }
};
