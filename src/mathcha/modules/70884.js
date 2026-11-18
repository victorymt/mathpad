/* module 70884 — 1029 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(19539);
  class i {
    calculateDeltaFromAlignment(e, t, r) {
      var i = n.A.getCenterPoint(e),
        o = n.A.getCenterPoint(t);
      switch (r) {
        case "top":
          return {
            x: 0,
            y: e.p1.y - t.p1.y
          };
        case "middle":
          return {
            x: 0,
            y: i.y - o.y
          };
        case "bottom":
          return {
            x: 0,
            y: e.p2.y - t.p2.y
          };
        case "left":
          return {
            x: e.p1.x - t.p1.x,
            y: 0
          };
        case "center":
          return {
            x: i.x - o.x,
            y: 0
          };
        case "right":
          return {
            x: e.p2.x - t.p2.x,
            y: 0
          };
        case "central":
          return {
            x: i.x - o.x,
            y: i.y - o.y
          };
      }
      throw new Error("not supported");
    }
  }
  const o = new i();
};
