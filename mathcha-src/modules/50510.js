/* module 50510 — 2847 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    m: () => a
  });
  var n = r(64467),
    i = r(21735);
  class o {
    constructor(e, t) {
      (0, n.A)(this, "k1", void 0), (0, n.A)(this, "k2", void 0), (0, n.A)(this, "map", {}), this.k1 = e, this.k2 = t;
    }
    get(e, t) {
      var r = "".concat(e, "-").concat(t),
        n = this.map[r];
      if (n) return n;
      var i = {
        [this.k1]: e,
        [this.k2]: t
      };
      return this.map[r] = i, i;
    }
  }
  class s {
    constructor() {
      (0, n.A)(this, "defaultParagraphSpacing", {
        before: 0,
        after: 0
      }), (0, n.A)(this, "defaultParagraph", {
        listItem: this.defaultParagraphSpacing,
        nestedLevel: this.defaultParagraphSpacing,
        rootLevel: this.defaultParagraphSpacing
      }), (0, n.A)(this, "spacingResolvedCache", new o("beforeSpacingSet", "afterSpacingSet"));
    }
    resolveCurrentLineMarginForSpacing(e, t, r, n, i) {
      var o = r ? this.extractSpacing(r, n, i) : void 0;
      return this.runSpacing(e, t, o, !!r);
    }
    runSpacing(e, t, r, n) {
      var i = (null == e ? void 0 : e.after) || 0,
        o = t.before || 0,
        s = t.after || 0,
        a = Math.max(i, o) || 0,
        l = n ? 0 : s;
      return {
        resolvedSpacing: this.spacingResolvedCache.get(a, l),
        nextSpacing: r
      };
    }
    extractSpacing(e, t, r) {
      var n, o, s, a;
      return null !== (n = e.style) && void 0 !== n && n.pSpacing ? null === (a = e.style) || void 0 === a ? void 0 : a.pSpacing : this.extractParagraphSpacing(t, {
        isRoot: r,
        isSection: "section" == (null === (o = e.style) || void 0 === o ? void 0 : o.listType),
        isListItem: i.A.isBulletListType(null === (s = e.style) || void 0 === s ? void 0 : s.listType)
      });
    }
    getParagraphSpacingType(e) {
      return e.isSection || e.nonText ? "none" : e.isListItem ? "listItem" : e.isRoot ? "rootLevel" : "nestedLevel";
    }
    hasAnyParagraphSpacingSet(e) {
      return !!e.paragraph && e.paragraph != this.defaultParagraph && (this.anySpacingSet(e.paragraph.rootLevel) || this.anySpacingSet(e.paragraph.listItem) || this.anySpacingSet(e.paragraph.nestedLevel));
    }
    anySpacingSet(e) {
      return !!e && (!!e.before || !!e.after);
    }
    anySpacingResolvedSet(e) {
      return !!e && (!!e.beforeSpacingSet || !!e.afterSpacingSet);
    }
    extractParagraphSpacing(e, t) {
      if (!this.hasAnyParagraphSpacingSet(e)) return this.defaultParagraphSpacing;
      var r = this.getParagraphSpacingType(t);
      return this.extractParagraphSpacingFromKey(e, r);
    }
    extractParagraphSpacingFromKey(e, t) {
      return "none" == t ? this.defaultParagraphSpacing : e && e.paragraph && e.paragraph[t] && e.paragraph[t] || this.defaultParagraphSpacing;
    }
  }
  var a = new s();
};
