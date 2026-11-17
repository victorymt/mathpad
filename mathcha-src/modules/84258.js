/* module 84258 — 9057 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l,
    R: () => a
  });
  var n = r(64467),
    i = r(43954),
    o = r.n(i),
    s = r(65606);
  class a {
    constructor() {
      (0, n.A)(this, "sniffr", void 0), (0, n.A)(this, "browserName", void 0), (0, n.A)(this, "browserMajorVersion", void 0), (0, n.A)(this, "cacheShouldMoveHiddenInputOnFocus", void 0), (0, n.A)(this, "isPossibleLinuxFlag", void 0), (0, n.A)(this, "queryMap", void 0), (0, n.A)(this, "isTestEnvFlag", void 0), (0, n.A)(this, "mobileViewEnabled", !1), (0, n.A)(this, "disableLazyRenderingFlag", void 0), (0, n.A)(this, "delayToShowProgress", 1), (0, n.A)(this, "evaluationApiUrl", void 0), (0, n.A)(this, "testPrintErrorShouldLog", void 0), (0, n.A)(this, "testDocErrorShouldLog", void 0), (0, n.A)(this, "enableDocHistory", !1), (0, n.A)(this, "userImageUrl", void 0), (0, n.A)(this, "newZipFormat", void 0), (0, n.A)(this, "matchaImportFlag", void 0), (0, n.A)(this, "forceRunImportForElectronEnv", void 0), (0, n.A)(this, "renderImgFromProdServer", void 0), (0, n.A)(this, "lazyRenderViewData", void 0), (0, n.A)(this, "numberOfLinesToUseLazySeparateLines", void 0), (0, n.A)(this, "plotSettingDialogFixHeight", void 0), (0, n.A)(this, "downloadAndUsingLocalDic", void 0), (0, n.A)(this, "casSupport", void 0), (0, n.A)(this, "mathWhiteBg", void 0), (0, n.A)(this, "enablePageView", void 0), (0, n.A)(this, "graphingDisabled", void 0);
      var e = this.getWindow();
      try {
        this.mobileViewEnabled = "mobile" === e.localStorage.getItem("mathcha-view-mode");
      } catch (e) {}
      var t = new (o())();
      t.sniff(e.navigator.userAgent), this.sniffr = t, this.browserName = this.sniffr.browser.name, this.browserMajorVersion = Number.parseInt(this.sniffr.browser.version[0], 10), this.cacheShouldMoveHiddenInputOnFocus = !0, console.log("env info: ", t);
      var r = new (o())();
      r.sniff("Mozilla/5.0 (Android 5.1; Tablet; rv:55.0) Gecko/55.0 Firefox/55.0"), console.log("Test", r);
      var i = e.navigator.platform;
      this.isPossibleLinuxFlag = /Linux/.test(i), this.queryMap = this.parseQuery(e.location.search), this.isTestEnvFlag = e.location.href.indexOf("---test---") >= 0, this.disableLazyRenderingFlag = !!this.queryMap["lazy-render-disabled"], this.delayToShowProgress = Number.parseInt(this.queryMap["lazy-render-delay-time"]) || 40, this.evaluationApiUrl = this.queryMap["evaluation-api-url"], this.testPrintErrorShouldLog = !!this.queryMap["test-print-error-should-log"], this.testDocErrorShouldLog = !!this.queryMap["test-doc-error-should-log"], this.forceRunImportForElectronEnv = !!this.queryMap["force-run-import-for-electron"], this.renderImgFromProdServer = !!this.queryMap["render-image-prod"], this.lazyRenderViewData = Number.parseInt(this.queryMap["lazy-render-view-delta"]) || 1200, this.numberOfLinesToUseLazySeparateLines = Number.parseInt(this.queryMap.numberOfLinesToUseLazySeparateLines) || 150, this.plotSettingDialogFixHeight = Number.parseInt(this.queryMap.plotSettingDialogFixHeight) || 0, this.downloadAndUsingLocalDic = !!this.queryMap["download-and-using-local-dic"] || this.isElectronEnv(), this.casSupport = !!this.queryMap["cas-support"], this.mathWhiteBg = !!this.queryMap["math-white-bg"], this.enablePageView = !!this.queryMap["enable-page-view"], this.graphingDisabled = this.graphingDisabled || !!this.queryMap["graphing-disabled"], this.enableDocHistory = !0, this.newZipFormat = !0, this.matchaImportFlag = !0, this.evaluationApiUrl && console.log("evaluationApiUrl", this.evaluationApiUrl), this.inProd() && !e.location.hostname.includes("mathcha-staging") ? this.userImageUrl = "https://mathcha-user-images.s3.amazonaws.com" : this.userImageUrl = "https://test-mathcha-user-images.s3.amazonaws.com";
    }
    parseQuery(e) {
      try {
        for (var t = {}, r = ("?" === e[0] ? e.substr(1) : e).split("&"), n = 0; n < r.length; n++) {
          var i = r[n].split("=");
          t[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "");
        }
        return t;
      } catch (e) {
        return {};
      }
    }
    getWindow() {
      return "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : window;
    }
    getEvaluationApiUrl() {
      return this.evaluationApiUrl;
    }
    getOsName() {
      return this.sniffr.os.name;
    }
    isFirefoxOs() {
      return "firefoxos" == this.sniffr.os.name;
    }
    isMac() {
      return "macos" == this.getOsName();
    }
    isPossibleLinux() {
      return this.isPossibleLinuxFlag;
    }
    isFirefox() {
      return "firefox" == this.browserName;
    }
    isSafari() {
      return "safari" == this.browserName;
    }
    isChrome() {
      return "chrome" == this.browserName;
    }
    isNoBoundingClientRectSupportForRange() {
      return this.isSafari() || this.isIos();
    }
    shouldMoveHiddenInputOnFocus() {
      return this.cacheShouldMoveHiddenInputOnFocus;
    }
    isDevEnv() {
      return window.mathGlobal && "dev" == window.mathGlobal.environment;
    }
    isEdge() {
      return "edge" == this.browserName;
    }
    shouldRangeDetach() {
      return !this.isEdge();
    }
    getBrowserMajorVersion() {
      return this.browserMajorVersion;
    }
    isMobileOrTablet() {
      return this.mobileViewEnabled;
    }
    saveViewMode(e) {
      this.getWindow().localStorage.setItem("mathcha-view-mode", e ? "mobile" : "desktop");
    }
    hasTouchInput() {
      return !1;
    }
    getScreenWidth() {
      return window.screen.width;
    }
    shouldUseSmallLayout() {
      return this.isMobileOrTablet() && this.getScreenWidth() < 900;
    }
    isIos() {
      return this.isMobileOrTablet() && ("ios" === this.sniffr.os.name || this.isIpadOs());
    }
    isIpadOs() {
      var e = this.getWindow().navigator;
      return /iPad/.test(e.userAgent) || "iPad" === e.platform || "MacIntel" === e.platform && e.maxTouchPoints > 1;
    }
    isAndroid() {
      return this.isMobileOrTablet() && "android" === this.sniffr.os.name;
    }
    isTestEnv() {
      return this.isTestEnvFlag;
    }
    getHistoryGroupingIntervalMs() {
      var e = this.queryMap["test-undo-group-ms"];
      return void 0 !== e && /^\d+$/.test(e) && Number.isFinite(Number(e)) ? Number(e) : 1e3;
    }
    isTestWithBigBorderAsPadding() {
      return window.location.href.indexOf("-big-border-") >= 0;
    }
    shouldUseBigBorder() {
      return this.isTestWithBigBorderAsPadding() || !this.isTestEnv();
    }
    isElectronEnv() {
      return !!{
        NODE_ENV: "production",
        NO_CDN: !1
      }.ELECTRON;
    }
    supportCopyMathImageToClipboard() {
      return !!(this.isChrome() && this.browserMajorVersion >= 76) || this.isElectronEnv() || window.location.href.indexOf("-image-to-clipboard-") >= 0;
    }
    isUploadHandleByService() {
      return this.isElectronEnv();
    }
    allowToChangeImage() {
      return !this.isUploadHandleByService();
    }
    inProd() {
      return !0;
    }
    allowImportFromMathchaFile() {
      return !!this.matchaImportFlag || !!this.isTestEnv() || this.isElectronEnv();
    }
    headerDoubleClickToToggleMaximize() {
      return this.isElectronEnv();
    }
    isOfflineMode() {
      return this.isElectronEnv();
    }
    isMenuHandledByService() {
      return this.isElectronEnv();
    }
    isDataOffline() {
      return window.location.href.indexOf("---data-offline---") >= 0 || this.isOfflineMode();
    }
    supportTextJustify() {
      return this.isChrome();
    }
    inNodeEnv() {
      return s && {
        NODE_ENV: "production",
        NO_CDN: !1
      } && {
        NODE_ENV: "production",
        NO_CDN: !1
      }.IN_NODE_ENV;
    }
    supportSaveAsPDF() {
      return this.isElectronEnv();
    }
    isCollaboratingTesting() {
      return window.location.href.indexOf("-collaborating-") >= 0;
    }
    isColEnabled() {
      return !0;
    }
    supportShowProminentShareButton() {
      return this.getScreenWidth() > 600 && !this.isElectronEnv();
    }
    isDarkMode() {
      return window.location.href.indexOf("-dark-mode-") >= 0;
    }
    suppressPreloadFont() {
      return window.location.href.indexOf("-suppress-font-preload-") >= 0;
    }
    supportLocalCustomFonts() {
      return window.location.href.indexOf("-local-fonts-") >= 0 || this.isElectronEnv();
    }
    isEmbedded() {
      return !!this.queryMap.embedded;
    }
    supportComplexShape() {
      return window.location.href.indexOf("-complex-shape-") >= 0;
    }
    retrieveOptimizerDelta() {
      return this.lazyRenderViewData;
    }
    preventNotifyModelChangedToSaveSizeCached() {
      return !!this.queryMap["lazy-render-prevent-save-cache"];
    }
    disableLazyRendering() {
      return this.disableLazyRenderingFlag;
    }
    getDelayToShowProgress() {
      return this.delayToShowProgress;
    }
    noCheckUnsaved() {
      return !!this.queryMap["no-check-unsaved"];
    }
    inCourseTest() {
      return !!this.queryMap["in-course"];
    }
  }
  const l = new a();
};
