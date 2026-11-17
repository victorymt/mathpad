/* module 73524 — 4723 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ay: () => g
  });
  var n = r(64467),
    i = r(74704),
    o = r.n(i),
    s = r(18799),
    a,
    l = r.n(s)(),
    c = new (o())();
  class d {
    constructor(e) {
      (0, n.A)(this, "text", void 0), this.text = e;
    }
    get length() {
      return this.text.length;
    }
    clusterAt(e) {
      return this.text.charAt(e);
    }
    clusterIndexAt(e) {
      return e;
    }
    rawStringAt(e) {
      return this.text.charAt(e);
    }
    rawIndexAt(e) {
      return e;
    }
    charAt(e) {
      return this.text.charAt(e);
    }
    slice(e, t) {
      return new d(this.text.slice(e, t));
    }
    substring(e, t) {
      return new d(this.text.substring(e, t));
    }
    substr(e, t) {
      return new d(this.text.substr(e, t));
    }
    getClusterIndexFromUTF16Index(e) {
      return e;
    }
    charCodeAt(e) {
      return this.text.charCodeAt(e);
    }
    codePointsAt(e) {
      return [this.text.codePointAt(e)];
    }
    toStringArray() {
      return this.text.split("");
    }
    toString() {
      return this.text;
    }
    concat(e) {
      this.text = "string" != typeof e ? this.text.concat(e.text) : this.text.concat(e);
    }
  }
  class h {
    constructor() {
      (0, n.A)(this, "globalTextCache", void 0), (0, n.A)(this, "whitespaceUni", new d(" "));
    }
    getUnistring(e) {
      return this.buildOrGetCacheUnistring(e);
    }
    getUnistringUncached(e) {
      var t = this.checkGlobalTextCache(e);
      return t || this.createUniString(e);
    }
    length(e) {
      return "string" == typeof e ? c.countGraphemes(e) : e.length;
    }
    lengthByCache(e) {
      return this.buildOrGetCacheUnistring(e).length;
    }
    charAt(e, t) {
      return this.buildOrGetCacheUnistring(e).clusterAt(t);
    }
    substring(e, t, r) {
      return this.buildOrGetCacheUnistring(e).substring(t, r).toString();
    }
    substr(e, t, r) {
      return this.buildOrGetCacheUnistring(e).substr(t, r).toString();
    }
    isEmpty(e) {
      return 0 == e.length;
    }
    isSingleChar(e) {
      return 1 == this.length(e);
    }
    rawIndexAt(e, t) {
      return this.buildOrGetCacheUnistring(e).rawIndexAt(t);
    }
    clusterIndexAt(e, t) {
      return this.buildOrGetCacheUnistring(e).getClusterIndexFromUTF16Index(t);
    }
    buildOrGetCacheUnistring(e) {
      var t = e.textContent && "BLOCK" == e.tagName ? e.textContent : e.text,
        r;
      null == t && (t = null !== (r = e.textContent) && void 0 !== r ? r : e.text);
      var n = this.checkGlobalTextCache(t);
      return n || (t.length < 400 ? this.createUniString(t) : (e.___uniStr && e.___cacheText && e.___cacheText == t && e.___uniStr.slice || (e.___uniStr = this.fromGlobalCache(t), e.___cacheText = t), e.___uniStr));
    }
    checkGlobalTextCache(e) {
      if (this.globalTextCache && this.globalTextCache.slice) return this.globalTextCache[e] || (this.globalTextCache[e] = this.fromGlobalCache(e)), this.globalTextCache[e];
    }
    fromGlobalCache(e) {
      return this.createUniString(e);
    }
    createUniString(e) {
      var t = new l(e);
      return null == t.clusters && (t = new d(e)), t;
    }
    startGlobalTextCache() {
      this.globalTextCache || (this.globalTextCache = {});
    }
    endGlobalTextCahce() {
      this.globalTextCache = void 0;
    }
    strPslice(e, t, r, n) {
      var i = this.buildOrGetCacheUnistring(e);
      return i.slice(0, t).toString() + n + i.slice(t + Math.abs(r)).toString();
    }
    unistrPslice(e, t, r, n) {
      return e.slice(0, t).toString() + n + e.slice(t + Math.abs(r)).toString();
    }
    normalPslice(e, t, r, n) {
      return e.slice(0, t).toString() + n + e.slice(t + Math.abs(r)).toString();
    }
    strPsliceWithOriginalUniStr(e, t, r, n) {
      var i = this.buildOrGetCacheUnistring(e),
        o = i.slice(0, t),
        s = i.slice(t + Math.abs(r));
      return {
        result: o.toString() + n + s.toString(),
        originalTextUniStr: i,
        firstSection: o,
        lastSection: s
      };
    }
    throwInvalidInsertedStr(e) {
      if (/[\r\n\b]/.test(e)) throw new Error("[Mathcha] Invalid Input, contain command characters");
      if (!this.validateSurrogatePair(e)) throw new Error("[Mathcha] Invalid SurrogatePair");
    }
    validateSurrogatePair(e) {
      for (var t = 55296, r = 56319, n = 56320, i = 57343, o = 0; o < e.length; o++) {
        var s = e.charCodeAt(o);
        if (s >= t && s <= r) {
          if (o >= e.length - 1) return !1;
          var a = e.charCodeAt(o + 1);
          if (!(a >= n && a <= i)) return !1;
        }
      }
      return !0;
    }
  }
  var p = null,
    u = null;
  const g = new h();
};
