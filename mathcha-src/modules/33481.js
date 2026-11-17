/* module 33481 — 607 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TableCaptionRef: () => o,
    default: () => a
  });
  var n = r(64467),
    i = r(5012);
  class o extends i.z {
    constructor() {
      super(...arguments), (0, n.A)(this, "spanClssName", "table-caption-ref"), (0, n.A)(this, "cType", "table");
    }
  }
  class s extends i.l {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\table-caption-ref";
    }
    renderSymbolText() {
      return "Table 1";
    }
    getDescription() {
      return "Reference to Table Caption";
    }
  }
  const a = new s();
};
