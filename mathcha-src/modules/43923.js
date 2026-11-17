/* module 43923 — 629 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    getSelectionStyle(e, t) {
      if (e.isGroupSelected || e.isRemoteSelected) {
        var r = .5,
          n = "#b3d6b3";
        e.isGroupSelected || (r = .3, n = e.remoteSelectedColor || "#b3d6b3");
        var i = 1;
        return {
          stroke: n,
          strokeOpacity: r,
          strokeWidth: (i = "number" == typeof t ? t || 1 : t && t.style && t.style.thickness || 1) + 5
        };
      }
    }
    isAnySelection(e) {
      return e.isSelected || e.isGroupSelected || e.isRemoteSelected;
    }
  }
  const i = new n();
};
