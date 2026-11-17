/* module 21735 — 8894 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(47858),
    o = r(61848),
    s = r(57691);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c {
    constructor() {
      (0, n.A)(this, "defaultUnOrder", ["•", "–", "*", "·"]), (0, n.A)(this, "defaultOrder", ["\\1.", "\\a.", "\\i.", "\\A."]);
    }
    getSupportedStyleNames() {
      return ["color", "fontSize", "isBold", "isItalic", "textDecoration"];
    }
    getUnorderBullet(e) {
      return 0 == (e %= 4) ? "• " : 1 == e ? "– " : 2 == e ? "* " : 3 == e ? "· " : void 0;
    }
    expandOrDefaultForOrder(e) {
      return e instanceof Array ? e : "unorder" == e ? this.defaultUnOrder : this.defaultOrder;
    }
    expandOrDefaultForUnOrder(e) {
      return e instanceof Array ? e : "order" == e ? this.defaultOrder : ["•", "–", "*", "·"];
    }
    toAlphabet(e) {
      return (e >= 26 ? this.toAlphabet((e / 26 | 0) - 1) : "") + "abcdefghijklmnopqrstuvwxyz"[e % 26 | 0];
    }
    getOrderNumber(e, t) {
      return 0 == (e %= 4) ? t + 1 + ". " : 1 == e ? "(".concat(this.toAlphabet(t), ") ") : 2 == e ? "".concat(s.i.toRoman(t + 1).toLowerCase(), ". ") : 3 == e ? "".concat(this.toAlphabet(t).toUpperCase(), ". ") : void 0;
    }
    getBuletText(e, t, r) {
      var n = (r = r || [])[t] || 0,
        i = e[t] || "\\1.";
      if ("\\.1." == i) {
        for (var o = "", a = 0; a <= t; a++) o += "".concat(r[a] + 1, ".");
        return o + " ";
      }
      switch (i) {
        case "\\1.":
          return "".concat(n + 1, ". ");
        case "\\01.":
          return n + 1 >= 10 ? "".concat(n + 1, ". ") : "0".concat(n + 1, ". ");
        case "\\1)":
          return "".concat(n + 1, ") ");
        case "\\(1)":
          return "(".concat(n + 1, ") ");
        case "\\a.":
          return "".concat(this.toAlphabet(n), ". ");
        case "\\a)":
          return "".concat(this.toAlphabet(n), ") ");
        case "\\(a)":
          return "(".concat(this.toAlphabet(n), ") ");
        case "\\A.":
          return "".concat(this.toAlphabet(n).toUpperCase(), ". ");
        case "\\A)":
          return "".concat(this.toAlphabet(n).toUpperCase(), ") ");
        case "\\(A)":
          return "(".concat(this.toAlphabet(n).toUpperCase(), ") ");
        case "\\i.":
          return "".concat(s.i.toRoman(n + 1).toLowerCase(), ". ");
        case "\\i)":
          return "".concat(s.i.toRoman(n + 1).toLowerCase(), ") ");
        case "\\(i)":
          return "(".concat(s.i.toRoman(n + 1).toLowerCase(), ") ");
        case "\\I.":
          return "".concat(s.i.toRoman(n + 1).toUpperCase(), ". ");
        case "\\I)":
          return "".concat(s.i.toRoman(n + 1).toUpperCase(), ") ");
        case "\\(I)":
          return "(".concat(s.i.toRoman(n + 1).toUpperCase(), ") ");
        default:
          return "".concat(i.startsWith("\\") ? (n + 1).toString() : i, " ");
      }
    }
    isOrderListType(e, t) {
      if ("order" == e) return !0;
      if (e instanceof Array) {
        var r = e[t] || ".";
        return this.isOrderBullet(r);
      }
      return !1;
    }
    isUnOrderListType(e, t) {
      if ("unorder" == e) return !0;
      if (e instanceof Array) {
        var r = e[t] || ".";
        return this.isUnOrderBullet(r);
      }
      return !1;
    }
    isOrderBullet(e) {
      return e.length > 1 && e.startsWith("\\");
    }
    isUnOrderBullet(e) {
      return !this.isOrderBullet(e);
    }
    isBulletListType(e) {
      return "order" == e || "unorder" == e || e instanceof Array;
    }
    getSection(e, t, r) {
      if (!1 === (r = r || {}).includingUpperSection) {
        var n = this.getSectionLevelCustomized(e, r),
          i = this.getSectionChar(t[e] || 0, n);
        return this.wrapPrefixSuffix(i, n);
      }
      t = t || [0, 0, 0, 0, 0];
      var o = this.getSectionLevelCustomized(e, r) || {},
        s = [];
      if ("None" != o.numbering) for (var a = 0; a <= e; a++) {
        var l = this.getSectionLevelCustomized(a, r),
          c = this.getSectionChar(null == t[a] ? -1 : t[a], l);
        c && s.push(c);
      }
      return this.wrapPrefixSuffix(s.join("."), o);
    }
    wrapPrefixSuffix(e, t) {
      var r = this.getPrefix(t),
        n = this.getSuffix(t);
      return e || r || n ? "".concat(r).concat(e).concat(n, " ") : "";
    }
    getPrefix(e) {
      return e && e.prefix ? e.prefix : "";
    }
    getSuffix(e) {
      return e && void 0 !== e.suffix ? e.suffix : ".";
    }
    getSectionLevelCustomized(e, t) {
      switch (e) {
        case 0:
          return t.level1 || {};
        case 1:
          return t.level2 || {};
        case 2:
          return t.level3 || {};
      }
      return t.level1 || {};
    }
    getSectionChar(e, t) {
      if (e < 0) return "0";
      if (!t) return "".concat(e + 1);
      var r;
      switch (t.numbering) {
        case "None":
          return "";
        case "1":
          return "".concat(e + 1);
        case "a":
          return "".concat(this.toAlphabet(e));
        case "A":
          return "".concat(this.toAlphabet(e).toUpperCase());
        case "i":
          return "".concat(s.i.toRoman(e + 1).toLowerCase());
        case "I":
          return "".concat(s.i.toRoman(e + 1).toUpperCase());
      }
      return "".concat(e + 1);
    }
    setListItemResetIndex(e, t) {
      return t < 0 && (t = void 0), l(l({}, e), {}, {
        style: l(l({}, e.style), {}, {
          listItemResetIndex: t
        })
      });
    }
    setBulletForLine(e, t) {
      if ("Skip" == t) return l(l({}, e), {}, {
        style: l(l({}, e.style), {}, {
          listTypeSkip: !0
        })
      });
      var r = i.A.getLineStyle(e, "listType"),
        n = i.A.getLineTempOrStoreIndent(e, 0),
        s;
      return s = this.isOrderBullet(t) ? this.expandOrDefaultForOrder(r) : this.expandOrDefaultForUnOrder(r), s = o.A.setIndex(s, n, t), l(l({}, e), {}, {
        style: l(l({}, e.style), {}, {
          listType: s,
          listTypeSkip: void 0
        })
      });
    }
    findHtmlLinesSameLevel(e, t) {
      for (var r = [], n = i.A.getLineTempOrStoreIndent(e.reactInstance.getLineData(), 0), o = 0; o < t.length; o++) {
        var s = t[o],
          a;
        i.A.getLineTempOrStoreIndent(s.reactInstance.getLineData(), 0) == n && r.push(s);
      }
      return r;
    }
    expandRelatedListItemHtmlLines(e) {
      for (var t = [], r = e;;) {
        var n = r.previousElementSibling;
        if (!n) break;
        var o = n.reactInstance.getLineData();
        if (!this.isBulletListType(i.A.getLineStyle(o, "listType"))) break;
        t.unshift(n), r = n;
      }
      var s = [];
      for (r = e;;) {
        var a = r.nextElementSibling;
        if (!a) break;
        var l = a.reactInstance.getLineData();
        if (!this.isBulletListType(i.A.getLineStyle(l, "listType"))) break;
        s.push(a), r = a;
      }
      return t.concat(e).concat(s);
    }
    findRelatedListItemLinesByAction(e, t, r) {
      var n = this.expandRelatedListItemLines(e, t, t),
        i = n.from,
        o = n.to,
        s = e.slice(i, o + 1),
        a = [],
        l;
      if ("all" == r && (a = s), "level" == r) {
        var c = e[t];
        a = this.findLinesSameLevel(c, s);
      }
      "single" == r && (a = [e[t]]);
      return {
        scopeLineFrom: i,
        scopeLineTo: o,
        selectedLines: a,
        action: r
      };
    }
    expandRelatedListItemLines(e, t, r) {
      for (var n = t, o = r, s = t - 1; s >= 0; s--) {
        var a = e[s];
        if (!this.isBulletListType(i.A.getLineStyle(a, "listType"))) break;
        n = s;
      }
      for (var l = r + 1; l < e.length; l++) {
        var c = e[l];
        if (!this.isBulletListType(i.A.getLineStyle(c, "listType"))) break;
        o = l;
      }
      return {
        from: n,
        to: o
      };
    }
    findLinesSameLevel(e, t) {
      for (var r = [], n = i.A.getLineTempOrStoreIndent(e, 0), o = 0; o < t.length; o++) {
        var s = t[o],
          a;
        i.A.getLineTempOrStoreIndent(s, 0) == n && r.push(s);
      }
      return r;
    }
  }
  const d = new c();
};
