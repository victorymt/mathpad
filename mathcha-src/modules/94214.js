/* module 94214 — 3987 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    D: () => a
  });
  var n = r(19539),
    i = r(83084),
    o = r(516);
  class s {
    repositionForAnchorChange(e, t, r) {
      var s = o.A.getComputedStyleAsNumber(r, "width") + 2,
        a = o.A.getComputedStyleAsNumber(r, "height") + 2,
        l = i.x.calculateCenterPointWithWh(e.shape.data.p, e.shape.anchor, s, a, e.shape.data),
        c = i.x.getSamplePosition(t, s, a, e.shape.data),
        d = {
          x: s / 2,
          y: a / 2
        },
        h = n.A.substractPoint(l, d);
      return n.A.addPoint(c, h);
    }
    getAnchorTranslate(e) {
      if (!e || "center" == e) return "translate(-50%, -50%)";
      switch (e) {
        case "left-top":
          return "translate(0%, 0%)";
        case "top":
          return "translate(-50%, 0%)";
        case "top-right":
          return "translate(-100%, 0%)";
        case "left":
          return "translate(0%, -50%)";
        case "right":
          return "translate(-100%, -50%)";
        case "bottom-left":
          return "translate(0, -100%)";
        case "bottom":
          return "translate(-50%, -100%)";
        case "right-bottom":
          return "translate(-100%, -100%)";
      }
      return "translate(-50%, -50%)";
    }
    shouldHandleAnchorAbsoluteMapping(e) {
      return !!e && "center" != e;
    }
    buildAbsoluteTransform(e, t) {
      if (!t || "center" == t) return "translate(-50%, -50%)";
      var r = e.width,
        n = e.height;
      switch (t) {
        case "left-top":
          return "translate(-".concat(r / 2, "px, -").concat(n / 2, "px)");
        case "top":
          return "translate(-50%, -".concat(n / 2, "px)");
        case "top-right":
          return "translate(calc(-100% + ".concat(r / 2, "px ), -").concat(n / 2, "px)");
        case "left":
          return "translate(-".concat(r / 2, "px, -50%)");
        case "right":
          return "translate(calc(-100% + ".concat(r / 2, "px ), -50%)");
        case "bottom-left":
          return "translate(-".concat(r / 2, "px, calc(-100% + ").concat(n / 2, "px ))");
        case "bottom":
          return "translate(-50%, calc(-100% + ".concat(n / 2, "px ))");
        case "right-bottom":
          return "translate(calc(-100% + ".concat(r / 2, "px ), calc(-100% + ").concat(n / 2, "px ))");
      }
      return "translate(-50%, -50%)";
    }
    rebuildPosition(e, t, r, i, o) {
      if (!i || "center" == i) return r;
      var s = {
          x: e.left + e.width / 2,
          y: e.top + e.height / 2
        },
        a = {
          x: t.left + t.width / 2,
          y: t.top + t.height / 2
        },
        l = n.A.substractPoint(a, s),
        c;
      switch (i) {
        case "left-top":
          c = {
            x: e.left,
            y: e.top
          };
          break;
        case "top":
          c = {
            x: e.left + e.width / 2,
            y: e.top
          };
          break;
        case "top-right":
          c = {
            x: e.right,
            y: e.top
          };
          break;
        case "left":
          c = {
            x: e.left,
            y: e.top + e.height / 2
          };
          break;
        case "right":
          c = {
            x: e.right,
            y: e.top + e.height / 2
          };
          break;
        case "bottom-left":
          c = {
            x: e.left,
            y: e.bottom
          };
          break;
        case "bottom":
          c = {
            x: e.left + e.width / 2,
            y: e.bottom
          };
          break;
        case "right-bottom":
          c = {
            x: e.right,
            y: e.bottom
          };
      }
      var d = n.A.addPoint(c, l),
        h = this.getDeltaRotationToMatch(c, d, s, o);
      return n.A.addPoint(r, h);
    }
    getDeltaRotationToMatch(e, t, r, i) {
      return n.A.substractPoint(n.A.pointRotate(t, r, i), n.A.pointRotate(e, r, i));
    }
  }
  var a = new s();
};
