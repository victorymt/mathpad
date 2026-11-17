/* module 31595 — 3027 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(91636),
    i = r(64467);
  class o {
    constructor() {
      (0, i.A)(this, "blobToFile", (e, t) => new File([e], t, {
        type: "image/jpeg"
      }));
    }
    resize(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new n.uG();
      return this.readToCanvas(e, t).then(n => {
        t.check();
        var i = document.createElement("canvas");
        return i.width = 150, i.height = n.height * i.width / n.width, r.e(244).then(r.t.bind(r, 5244, 23)).then(r => {
          var o = r.default;
          t.check();
          var s = o();
          return s.resize(n, i, {
            alpha: !0
          }).then(e => (t.check(), s.toBlob(e, "image/png", .9))).then(r => (t.check(), this.blobToFile(r, e.name.replace(/\.png/g, ".jpg"))));
        });
      });
    }
    readToCanvas(e, t) {
      return new Promise((r, i) => {
        t.check();
        var o = new Image(),
          s = window.URL.createObjectURL(e),
          a = () => {},
          l = () => {
            a(), o.onload = null, o.onerror = null, window.URL.revokeObjectURL(s);
          };
        o.onload = () => {
          l(), r(o);
        }, o.onerror = () => {
          l(), i(new Error("Not an image!"));
        }, a = t.onCancel(() => {
          l(), o.src = "", i(new n.TB());
        }), o.src = s;
      });
    }
  }
  const s = new o();
  var a = r(73894);
  class l {
    makeid(e) {
      for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 62, i = 0; i < e; i++) t += r.charAt(Math.floor(Math.random() * n));
      return t;
    }
    generateRandomPrefix() {
      return this.makeid(10);
    }
    uploadImage(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new n.uG(),
        i = new n.uG(),
        o = r.onCancel(() => i.cancel()),
        a = !1,
        l = 0,
        c;
      return r.wait(s.resize(e, i)).then(t => (r.check(), l = e.size + t.size, c = t, this.getService().requestUploadInfo("".concat(this.generateRandomPrefix(), "-").concat(e.name), i))).then(n => {
        r.check();
        var o = n.imagePolicy,
          s = n.thumbnailPolicy,
          d = n.newFileName,
          h = n.folderName;
        return Promise.all([this.getService().uploadFile(c, d, s, e => {
          a || r.cancelled || t(e * c.size / l);
        }, i), this.getService().uploadFile(e, d, o, n => {
          a || r.cancelled || t(n * e.size / l);
        }, i)]).then(() => (r.check(), {
          name: d,
          size: e.size,
          date: new Date().getTime(),
          folderName: h
        }));
      }).catch(e => {
        throw a = !0, i.cancel(), e;
      }).finally(o);
    }
    getImageList() {
      return this.getService().getImageList();
    }
    deleteImages(e) {
      return this.getService().deleteImages(e);
    }
    getService() {
      return a.A.getService();
    }
  }
  const c = new l();
};
