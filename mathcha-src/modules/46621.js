/* module 46621 — 2192 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(3453),
    i = r(64467),
    o = r(37566),
    s = r(61947);
  class a {
    constructor() {
      (0, i.A)(this, "convertBlobToBase64", e => new Promise((t, r) => {
        var n = new FileReader();
        n.onerror = r, n.onload = () => {
          t(n.result);
        }, n.readAsDataURL(e);
      }));
    }
    formatBytes(e, t) {
      if (0 == e) return "0 Bytes";
      var r = 1024,
        n = t || 2,
        i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        o = Math.floor(Math.log(e) / Math.log(r));
      return parseFloat((e / Math.pow(r, o)).toFixed(n)) + " " + i[o];
    }
    getImageSize(e) {
      return new Promise((t, r) => {
        var n = new Image();
        n.onload = () => {
          t({
            width: n.naturalWidth,
            height: n.naturalHeight
          });
        }, n.onerror = () => {
          r();
        }, n.src = e;
      });
    }
    getUrlFromSvgImg(e) {
      return o.vK(e, "xlink:href") || "";
    }
    getImageBase64Ver2(e, t) {
      return s.A.download(this.getUrlFromSvgImg(e)).then(e => this.convertBlobToBase64(e).then(t => [t, e])).then(r => {
        var i = (0, n.A)(r, 2),
          o = i[0],
          s = i[1];
        return s.type.includes("xml") || s.type.includes("XML") ? o : this.fromImgSrcToImage(o, e.width.baseVal.value, e.height.baseVal.value, t);
      });
    }
    fromImgSrcToImage(e, t, r, n) {
      return new Promise((i, o) => {
        var s = new Image();
        s.setAttribute("crossOrigin", "Anonymous"), s.onload = () => {
          try {
            var e = document.createElement("canvas"),
              a;
            e.width = t * n, e.height = r * n, e.style.width = "".concat(t, "px"), e.style.height = "".concat(r, "px"), console.log("canvas width", e.width), console.log("canvas height", e.height), e.getContext("2d").drawImage(s, 0, 0, t * n, r * n);
            var l = e.toDataURL("image/png");
            i(l);
          } catch (e) {
            o(e);
          }
        }, s.onerror = e => {
          o(e);
        }, s.src = e;
      });
    }
  }
  const l = new a();
};
