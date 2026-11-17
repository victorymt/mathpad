/* module 27812 — 1540 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(84258);
  class i {
    getThumbnailUrl(e, t) {
      return n.A.isTestEnv() ? "thumbnails/".concat(e) : "".concat(n.A.userImageUrl, "/").concat(t, "/thumbnails/").concat(e);
    }
    getComponentUrl(e, t) {
      return "mc://".concat(t, "/contents/").concat(e);
    }
    getComponentUrlToRawUrl(e) {
      if (e) return n.A.isTestEnv() || n.A.isCollaboratingTesting() ? "images/".concat(e.substr(5)) : e.startsWith("mc://") ? n.A.renderImgFromProdServer ? "https://mathcha-user-images.s3.amazonaws.com/".concat(e.substr(5)) : "".concat(n.A.userImageUrl, "/").concat(e.substr(5)) : e;
    }
    getRawUrl(e) {
      switch (e.type) {
        case "external":
          return e.key;
        case "internal":
          return "".concat(n.A.userImageUrl, "/").concat(e.imageFolder, "/contents/").concat(e.key);
      }
    }
    getImageDisplayName(e) {
      var t = e.indexOf("-");
      return e.substr(t + 1);
    }
    parseUrlToImageInfo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (e.startsWith("mc://")) {
        var t = e.indexOf("/", 12),
          r = e.substring(5, t),
          n = e.substr(t + 10);
        return {
          key: n,
          imageFolder: r,
          imageDisplayName: this.getImageDisplayName(n),
          type: "internal"
        };
      }
      return {
        key: e,
        imageDisplayName: e,
        type: "external"
      };
    }
  }
  const o = new i();
};
