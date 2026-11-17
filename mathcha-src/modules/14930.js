/* module 14930 — 1029 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    u: () => a
  });
  var n = r(64467),
    i = r(21774),
    o = r(97751);
  class s {
    constructor() {
      (0, n.A)(this, "defaultIgnoreWords", "ok\neg");
    }
    langToUniqkey(e) {
      return "string" == typeof e ? "internal-".concat(e) : e.id;
    }
    getIgnoreWordsOrDefault(e) {
      return e ? void 0 === e.ignoreWords ? this.defaultIgnoreWords : e.ignoreWords : this.defaultIgnoreWords;
    }
    resolveMathchaDicUrl(e, t) {
      return "https://static.mathcha.io/hunspell-dics/".concat(e, "/index").concat(t);
    }
    entityEquals(e, t) {
      return e == t || typeof e == typeof t && "string" != typeof e && "string" != typeof t && e.id == t.id;
    }
    langToDisplay(e) {
      return e ? "string" == typeof e ? "none" == e ? "None" : "[".concat(e, "] ").concat(o.m[e]) : i.A.isObj(e) ? "preset-lang" == e.type ? "[".concat(e.lang, "] ").concat(o.m[e.lang]) : "[".concat(e.lang, "] ").concat(e.name) : void 0 : "None";
    }
  }
  var a = new s();
};
