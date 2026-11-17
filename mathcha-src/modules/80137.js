/* module 80137 — 2114 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(37566),
    i = r(45896);
  class o {
    handleMathExportForTest(e, t, r, o, s) {
      var a = n.Yt(this.requestTestContainer());
      i.A.exportSvg({
        type: "math-export",
        element: e
      }, {
        baseFamily: t,
        subMathFont: r,
        padding: 2,
        transparent: !1,
        bgColor: "white",
        mathLineHeight: 1.2,
        vectorTextNoExtraBorder: !1,
        dzc: o,
        rootUpdater: s
      }).then(e => {
        var t = document.createElement("canvas");
        e.drawToCanvas(t, 1).then(() => {
          n.UY(a, t);
        });
      });
    }
    handleDiagramExportForTest(e, t, r, o, s) {
      var a = n.Yt(this.requestTestContainer({
        width: 660,
        height: 700
      }));
      i.A.exportDiagramSvg({
        type: "diagram-export",
        element: e,
        noGrid: !1
      }, {
        baseFamily: t,
        subMathFont: r,
        padding: 2,
        transparent: !1,
        bgColor: "white",
        mathLineHeight: 1.2,
        vectorTextNoExtraBorder: !1,
        rootUpdater: s,
        dzc: o
      }).then(e => {
        var t = document.createElement("canvas");
        e.drawToCanvas(t, 1).then(e => {
          t.style.width = "".concat(e.width, "px"), t.style.height = "".concat(e.height, "px"), n.UY(a, t);
        });
      });
    }
    requestTestContainer() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = n.Yt(".target-test");
      if (0 == t.length) {
        var r = document.createElement("div");
        r.className = "target-test", n.hS(r, {
          position: "fixed",
          bottom: "100px",
          right: "100px",
          background: "white",
          zIndex: 999999999
        }), n.UY("container-layer", r), t = [r];
      }
      return e.width && n.hS(t, "width", "".concat(e.width, "px")), e.height && n.hS(t, "height", "".concat(e.height, "px")), n.g5(n.jS(t)), t[0];
    }
    clearTestContainer() {
      n.g5(".target-test");
    }
  }
  const s = new o();
};
