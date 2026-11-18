/* module 39204 — 441 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    h: () => i
  });
  class n {
    useCdn() {
      return !{
        NODE_ENV: "production",
        NO_CDN: !1
      }.ELECTRON;
    }
    resolveStaticAssetPath(e) {
      return e = this.makeSureStartWithSlash(e), this.useCdn() ? "https://cdn.mathcha.io".concat(e) : e;
    }
    makeSureStartWithSlash(e) {
      return "/" == (e || "")[0] ? e : "/" + e;
    }
  }
  var i = new n();
};
