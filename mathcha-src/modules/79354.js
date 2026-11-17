/* module 79354 — 683 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    R: () => s,
    n: () => o
  });
  var n = r(64467),
    i = r(516);
  class o {
    constructor(e, t) {
      (0, n.A)(this, "zoomRatio", void 0), (0, n.A)(this, "mtElement", void 0), this.zoomRatio = e, this.mtElement = t;
    }
    getMtLefTop() {
      var e = i.A.getElementRect(this.mtElement);
      return {
        left: e.left,
        top: e.top
      };
    }
  }
  class s {
    constructor(e) {
      (0, n.A)(this, "mtElement", void 0), (0, n.A)(this, "zoomRatio", 1), (0, n.A)(this, "pos", {
        left: 0,
        top: 0
      }), this.mtElement = e;
    }
    getMtLefTop() {
      return this.pos;
    }
  }
};
