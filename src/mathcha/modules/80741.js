/* module 80741 — 2076 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    y: () => i
  });
  var n = r(64467);
  class i {
    constructor() {}
    static fromRelativeLeftTop(e, t, r) {
      return new a({
        left: e,
        top: t,
        zc: r
      });
    }
    static fromPos(e) {
      return new a(e);
    }
    static fromRect(e) {
      return new o(e);
    }
    static fromAbsLeftTop(e, t, r) {
      return new s(e, t, r);
    }
  }
  class o {
    constructor(e) {
      (0, n.A)(this, "rect", void 0), this.rect = e;
    }
    pickBuild(e, t, r) {
      r = r || {
        x: 0,
        y: 0
      };
      var n = this.rect;
      return {
        left: ("left" == e ? n.left : "right" == e ? n.right : (n.left + n.right) / 2) + r.x,
        top: ("top" == t ? n.top : "bottom" == t ? n.bottom : (n.top + n.bottom) / 2) + r.y,
        zc: n.zc
      };
    }
  }
  class s {
    constructor(e, t, r) {
      (0, n.A)(this, "left", void 0), (0, n.A)(this, "top", void 0), (0, n.A)(this, "dzc", void 0), this.left = e, this.top = t, this.dzc = r;
    }
    toAbsolute() {
      return {
        absLeft: this.left,
        absTop: this.top,
        zc: this.dzc
      };
    }
    toRelative() {
      var e = this.dzc.getMtLefTop();
      return {
        left: this.left - e.left,
        top: this.top - e.top,
        zc: this.dzc
      };
    }
  }
  class a {
    constructor(e) {
      (0, n.A)(this, "pos", void 0), this.pos = e;
    }
    get() {
      return this.pos;
    }
    deltaBuild(e, t) {
      return {
        left: this.pos.left + e,
        top: this.pos.top + t,
        zc: this.pos.zc
      };
    }
    toAbsolute() {
      var e = this.pos.zc,
        t = e.getMtLefTop();
      return {
        absLeft: this.pos.left * e.zoomRatio + t.left,
        absTop: this.pos.top * e.zoomRatio + t.top,
        zc: e
      };
    }
    toTopAbsolute() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = this.pos.zc,
        r = t.getMtLefTop();
      return (this.pos.top + e) * t.zoomRatio + r.top;
    }
  }
};
