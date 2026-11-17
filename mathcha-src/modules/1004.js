/* module 1004 — 607 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    ImageCaptionRef: () => o,
    default: () => a
  });
  var n = r(64467),
    i = r(5012);
  class o extends i.z {
    constructor() {
      super(...arguments), (0, n.A)(this, "spanClssName", "image-caption-ref"), (0, n.A)(this, "cType", "image");
    }
  }
  class s extends i.l {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\image-caption-ref";
    }
    renderSymbolText() {
      return "Image 1";
    }
    getDescription() {
      return "Reference to Image Caption";
    }
  }
  const a = new s();
};
