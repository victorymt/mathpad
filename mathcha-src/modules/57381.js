/* module 57381 — 1951 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(84258);
  class o extends i.R {
    constructor() {
      super(), (0, n.A)(this, "colTickInterval", 400), this.colTickInterval = Number.parseInt(this.queryMap["col-tick-interval"]) || 500;
    }
    isSaveDisabled() {
      return "main" != mathGlobal.appMode;
    }
    isAppSettingStoreDisabled() {
      return "main" != mathGlobal.appMode;
    }
    isForceQuickStart() {
      try {
        return window.location.href.indexOf("---quickstart---") >= 0;
      } catch (e) {
        return !1;
      }
    }
    isDisableSideBar() {
      return window.location.href.indexOf("-side-bar-off-") >= 0;
    }
    shareFeatureDisabled() {
      return !!mathGlobal.shareDisabled;
    }
    accountFeatureDisabled() {
      return !!mathGlobal.accountDisabled || this.isElectronEnv();
    }
    headerAsTitle() {
      return !!mathGlobal.headerAsTitle;
    }
    hideMenu() {
      return !!mathGlobal.hideMenu;
    }
    licenseManagement() {
      return !!mathGlobal.licenseManagement;
    }
    windowControls() {
      return !!mathGlobal.windowControls;
    }
    licenseDialogTest() {
      return window.location.href.indexOf("-license-dialog-test-") >= 0;
    }
    getDelayFetchMilisecond() {
      return window.location.href.indexOf("-delay-fetch-") >= 0 ? 3e3 : 0;
    }
    getColTickInterval() {
      return this.colTickInterval;
    }
  }
  var s = new o();
  if (s.isTestEnv()) {
    var a = Object.fromEntries(new URLSearchParams(location.search));
    Object.keys(a).filter(e => e.startsWith("env_")).forEach(e => {
      var t = e.substr(4);
      if (console.log("env_:", e), s[t]) {
        var r = a[e];
        "true" == r.toLowerCase() ? s[t] = () => !0 : "false" == r.toLowerCase() ? s[t] = () => !1 : isNaN(r) ? s[t] = () => r : s[t] = () => Number.parseFloat(r);
      }
    }), window.envSettings = s;
  }
  const l = s;
};
