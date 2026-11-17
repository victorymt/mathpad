/* module 79230 — 1272 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(84258),
    o = r(19539),
    s = r(33272),
    a = r(391);
  class l {
    constructor() {
      (0, n.A)(this, "getRotationPoint", (e, t, r) => {
        var n = o.A.normalizePointTupple(e),
          i = n.p1,
          a = n.p2,
          l = o.A.getCenterPoint(i, a),
          c = {
            x: l.x,
            y: l.y - (a.y - i.y) / 2 - s.A.rotateControlDistance() / r.zoomRatio
          },
          d;
        return {
          p: o.A.pointRotate(c, l, t),
          cp: l
        };
      });
    }
    baseStyle(e) {
      return {
        pointerEvents: "visiblePainted",
        cursor: "crosshair",
        fill: "green",
        stroke: "white",
        strokeWidth: 1 / e
      };
    }
    getReverseScale(e) {
      return 1 / e;
    }
    getCpRadius(e) {
      return (i.A.isMobileOrTablet() ? 10 : 5) / e;
    }
    isSnapToGrid(e, t) {
      return a.A.getSettings(e, "grid") && a.A.getSettings(e, "textSnapToGrid") && !t.ctrlKey;
    }
    isSnapToOtherShapes(e, t) {
      return a.A.getSettings(e, "snapToOtherShapes") && !t.ctrlKey;
    }
    snapToGridSize(e) {
      return a.A.getSettings(e, "gridSize");
    }
  }
  const c = new l();
};
