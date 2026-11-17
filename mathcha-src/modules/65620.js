/* module 65620 — 414 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    getSubOrUndefined(e, t) {
      if (e) return e.type == t ? e : void 0;
    }
    getSelectedIdsOrUndefined(e) {
      var t = e.controlSelectedInfo;
      return t && t.selectedIds;
    }
    getSelectedIdsOrEmpty(e) {
      var t = e.controlSelectedInfo;
      return t && t.selectedIds || [];
    }
  }
  const i = new n();
};
