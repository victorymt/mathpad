/* module 60150 — 621 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(32485),
    i = r.n(n),
    o = r(84258);
  class s {
    addMobileTabletClssIfRequired(e) {
      return o.A.isMobileOrTablet() ? i()(e, "mobile-tablet") : e;
    }
    autocompleteItemsScale() {
      return o.A.isMobileOrTablet() ? 1.2 : 1;
    }
    sidebarMenuDeltaX() {
      return o.A.isMobileOrTablet() ? 220 : 120;
    }
    getSettingScaleTransform() {
      return o.A.isMobileOrTablet() ? "scale(1.3)" : void 0;
    }
    getSettingScale() {
      return o.A.isMobileOrTablet() ? 1.3 : void 0;
    }
  }
  const a = new s();
};
