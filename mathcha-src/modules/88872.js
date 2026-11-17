/* module 88872 — 627 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    DiagramCaptionRef: () => o,
    default: () => a
  });
  var n = r(64467),
    i = r(5012);
  class o extends i.z {
    constructor() {
      super(...arguments), (0, n.A)(this, "spanClssName", "diagram-caption-ref"), (0, n.A)(this, "cType", "diagram");
    }
  }
  class s extends i.l {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\diagram-caption-ref";
    }
    renderSymbolText() {
      return "Drawing 1";
    }
    getDescription() {
      return "Reference to Diagram/Drawing Caption";
    }
  }
  const a = new s();
};
