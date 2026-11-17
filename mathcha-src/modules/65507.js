/* module 65507 — 701 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ac: () => s,
    Ay: () => a,
    FF: () => o
  });
  var n = r(49812);
  class i {
    isBothTopBottomEmpty(e) {
      var t = !0,
        r = !0;
      return e.powerValue && (t = n.A.isEditorEmpty(e.powerValue)), e.indexValue && (r = n.A.isEditorEmpty(e.indexValue)), t && r;
    }
    isTopEmpty(e) {
      return !e.powerValue || n.A.isEditorEmpty(e.powerValue);
    }
    isBottomEmpty(e) {
      return !e.indexValue || n.A.isEditorEmpty(e.indexValue);
    }
  }
  var o = {
      marginBottomEm: -.885714,
      marginTopEm: -.60899
    },
    s = {
      marginBottomEm: -1.065714,
      marginTopEm: -.747899
    };
  const a = new i();
};
