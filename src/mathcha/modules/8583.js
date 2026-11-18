/* module 8583 — 777 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    c: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "defaultPsStyle", {
        isBold: !0
      });
    }
    captionModelFromType(e, t) {
      switch (t) {
        case "image":
          var r;
          return null === (r = e.imageCaptions) || void 0 === r ? void 0 : r[0];
        case "diagram":
          var n;
          return null === (n = e.diagramCaptions) || void 0 === n ? void 0 : n[0];
        default:
          var i;
          return null === (i = e.tableCaptions) || void 0 === i ? void 0 : i[0];
      }
    }
    isPossibleInsideCaption(e) {
      return "caption" == e.key || e.selected && this.isPossibleInsideCaption(e.selected);
    }
  }
  var o = new i();
};
