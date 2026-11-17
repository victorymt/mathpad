/* module 61947 — 1352 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(84258),
    i = r(91636);
  class o {
    download(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new i.uG(),
        o = "https://resources-proxy.mathcha.io/".concat(e);
      return n.A.isElectronEnv() && e.startsWith("data-resources/") && (o = e), this.request(o, "blob", r, t);
    }
    downloadAsStr(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new i.uG();
      return this.request(e, "text", t);
    }
    request(e, t, r, n) {
      return new Promise((o, s) => {
        r.check();
        var a = new XMLHttpRequest(),
          l = !1,
          c = () => {},
          d = e => {
            l || (l = !0, c(), r.cancelled ? s(new i.TB()) : e ? s(e) : o(a.response));
          };
        a.open("GET", e, !0), a.responseType = t, a.onload = () => d(a.status >= 400 ? new Error("Unable to download image") : void 0), a.onerror = () => d(new Error("Unable to download image")), a.onabort = () => d(new i.TB()), a.onprogress = e => {
          r.cancelled || l || !n || n(e.lengthComputable ? e.loaded : 0, e.lengthComputable ? e.total : 1);
        }, c = r.onCancel(() => {
          d(new i.TB()), a.abort();
        }), a.send(null);
      });
    }
  }
  const s = new o();
};
