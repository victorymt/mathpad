/* module 90113 — 1593 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    H: () => o
  });
  var n = r(516);
  class i {
    lineDirToSide(e) {
      return "ltr" == e ? "left" : "right";
    }
    isSideMatchLineDir(e, t) {
      return "ltr" == t ? "left" == e : "right" == e;
    }
    positionOposite(e) {
      return "left" == e ? "right" : "left";
    }
    almostMatch(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.abs(e - t) <= r;
    }
    horizontalCompare(e, t) {
      return e.left < t.left ? "left" : "right";
    }
    horizontalVLineSideCompare(e, t) {
      return Math.abs(e.left - t.left) <= 1 ? "left" : Math.abs(e.left - t.right) <= 1 ? "right" : t.left <= e.left && e.left <= t.right ? "inside" : "not-matched";
    }
    anyHorizontalVLineSideCompare(e, t, r) {
      var n,
        i = e.map(e => ({
          c: e,
          rs: o.horizontalVLineSideCompare(e, t)
        })).find(e => "not-matched" != e.rs && "inside" != e.rs);
      return null !== (n = null == i ? void 0 : i.rs) && void 0 !== n ? n : r;
    }
    vlineFromRect(e, t) {
      return {
        top: e.top,
        bottom: e.bottom,
        left: e[t]
      };
    }
    getLineDir(e) {
      return getComputedStyle(n.A.getBlocksContainerElement(e)).direction;
    }
    vlineCompare(e, t) {
      return Math.round(e.top) >= Math.round(t.bottom) ? "bottom" : Math.round(e.bottom) <= Math.round(t.top) ? "top" : Math.round(e.left) < Math.round(t.left) ? "left" : Math.round(e.left) > Math.round(t.left) ? "right" : "matched";
    }
  }
  var o = new i();
};
