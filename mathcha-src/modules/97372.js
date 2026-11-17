/* module 97372 — 9090 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(73524),
    o = r(2543),
    s = r.n(o),
    a = r(61848),
    l = r(30803),
    c = r(47858),
    d = r(98095),
    h = r(86081),
    p = r(21774);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m {
    constructor() {
      (0, n.A)(this, "bracketLists", ["(", ")", "{", "}", "[", "]"]);
    }
    charFromLocalIndex(e, t) {
      return this.isNonTextBlock(e) ? null : i.Ay.charAt(e, t);
    }
    isOpenCloseOrPowerIndex(e) {
      return this.isOpenClose(e) || this.isPowerIndex(e);
    }
    isCompositeBlockWithNestedEditor(e) {
      return h.A.isComposite(e) && s().keys(e.elements).length > 0;
    }
    isIntegralOrOIntegral(e) {
      return this.isIntegral(e) || this.isOIntegral(e);
    }
    isIntegral(e) {
      if (!h.A.isComposite(e)) return !1;
      switch (e.text) {
        case "\\int":
        case "\\iint":
        case "\\iiint":
        case "\\iiiint":
          return !0;
      }
    }
    isOIntegral(e) {
      if (!h.A.isComposite(e)) return !1;
      switch (e.text) {
        case "\\oint":
        case "\\oiint":
        case "\\oiiint":
        case "\\oiiiint":
          return !0;
      }
    }
    isIntegralLikeBlock(e) {
      return !!h.A.isComposite(e) && d.A.getCustomSymbolComponent(e.text).isIntegralLike;
      var t;
    }
    isPlainIntegralLike(e) {
      return !!this.isIntegralLikeBlock(e) && null == e.elements.from && null == e.elements.to;
    }
    isOpenClose(e) {
      if (1 == e.text.length) {
        var t = d.A.categoryByUnicodeChar(e.text);
        return "Opening" == t || "Closing" == t;
      }
      return "single" == e.type && (e.text.startsWith("\\right") || e.text.startsWith("\\left"));
    }
    isCloseBlock(e) {
      return 1 == e.text.length ? "Closing" == d.A.categoryByUnicodeChar(e.text) : "single" == e.type && e.text.startsWith("\\right");
    }
    isOpenBlock(e) {
      return 1 == e.text.length ? "Opening" == d.A.categoryByUnicodeChar(e.text) : "single" == e.type && e.text.startsWith("\\left");
    }
    isPowerIndex(e) {
      return h.A.isComposite(e) && ("\\power-index" == e.text || "\\power" == e.text || "\\index" == e.text);
    }
    isPower(e) {
      return "composite" == e.type && ("\\power" == e.text || "\\power-index" == e.text && null == e.elements.indexValue);
    }
    isIndex(e) {
      return "composite" == e.type && ("\\index" == e.text || "\\power-index" == e.text && null == e.elements.powerValue);
    }
    hasBothPowerAndIndex(e) {
      return this.isPowerIndex(e) && !!e.elements.indexValue && !!e.elements.powerValue;
    }
    isPlotCases(e) {
      return "composite" == e.type && "\\plot-cases" == e.text;
    }
    isSingleBlock(e) {
      return "single" == e.type;
    }
    isTextBlock(e) {
      return null == e.type;
    }
    isNonTextBlock(e) {
      return !this.isTextBlock(e);
    }
    getCharCount(e) {
      return this.isTextBlock(e) ? i.Ay.lengthByCache(e) : 1;
    }
    are2TextBlockSameFormat(e, t) {
      if (!this.isTextBlock(e)) return !1;
      if (!this.isTextBlock(t)) return !1;
      if (!e.style && !t.style) return !0;
      var r = e.style || {},
        n = t.style || {},
        i;
      for (i in r) if (r[i] && n[i] && "object" == typeof r[i] && "object" == typeof n[i]) {
        if (!p.A.objectMemberEquals(r[i], n[i])) return !1;
      } else if (r[i] != n[i]) return !1;
      for (i in n) if (r[i] && n[i] && "object" == typeof r[i] && "object" == typeof n[i]) {
        if (!p.A.objectMemberEquals(r[i], n[i])) return !1;
      } else if (r[i] != n[i]) return !1;
      return !0;
    }
    splitBlock(e, t) {
      return 0 == t || this.getCharCount(e) <= t ? [e] : [a.A.set(e, "text", i.Ay.substr(e, 0, t)), this.copyFormat({
        text: i.Ay.substr(e, t),
        id: l.w.nextId()
      }, e, "all")];
      var r;
    }
    isMathContainer(e) {
      return "composite" == e.type && "\\math-container" == e.text;
    }
    isZSpec(e) {
      return "composite" == e.type && ("\\z-schema" == e.text || "\\z-syntax" == e.text);
    }
    isGather(e) {
      return "composite" == e.type && "\\gather" == e.text;
    }
    isMultiline(e) {
      return "composite" == e.type && "\\multiline" == e.text;
    }
    isAlign(e) {
      return "composite" == e.type && "\\align" == e.text;
    }
    isInlineMathContainer(e) {
      return this.isMathContainer(e) && !e.displayMode || this.isInlineLatexComposite(e);
    }
    isInlineLatexComposite(e) {
      return "composite" == e.type && "\\inline-math" == e.text;
    }
    isTextModeGroupInline(e) {
      return h.A.isComposite(e) && "\\text-mode-group-inline" == e.text;
    }
    isDisplayMathContainer(e) {
      return this.isMathContainer(e) && e.displayMode;
    }
    getOverSymbolEditorValue(e) {
      return e.elements.value;
    }
    copyFormatByMode(e, t, r) {
      return this.copyFormat(e, t, r ? "text" : "math");
    }
    copyFormat(e, t, r) {
      return "text" == r ? (this.isInlineMathContainer(e) || this.isTextModeGroupInline(e)) && t.style && t.style.color ? c.A.addStyle(e, "color", t.style.color) : this.copyFormatForTextMode(e, t) : this.copyFormatForMath(e, t);
    }
    addRootStyleForMath(e, t, r) {
      return "fontSize" == t || "color" == t || "bgColor" == t ? c.A.addStyle(e, t, r) : e;
    }
    overriddeRootStyleForMath(e, t) {
      return t = t || {}, c.A.overrideStyle(e, g(g({}, e.style), {}, {
        fontSize: t.fontSize
      }));
    }
    mergeFormat(e, t) {
      var r;
      return "root" == (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all") ? this.mergeFormat(e, t) : this.mergeFormatForMath(e, t);
    }
    mergeFormatForMath(e, t) {
      return this.mergeFormatAll(e, t);
    }
    mergeFormatAll(e, t) {
      return a.A.update(e, {
        displayMode: t.displayMode,
        style: s().assignWith(s().clone(e.style), t.style)
      });
    }
    mergeFormatMod(e, t) {
      var r;
      return "root" == (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all") ? this.mergeFormatForRootMod(e, t) : this.mergeFormatForMathMod(e, t);
    }
    mergeFormatForMathMod(e, t) {
      return this.mergeFormatAllMod(e, t);
    }
    mergeFormatForRootMod(e, t) {
      return h.A.isComposite(e) ? (t.style && t.style.fontSize && c.A.addStyleMod(e, "fontSize", t.style.fontSize), e) : this.mergeFormatAllMod(e, t);
    }
    mergeFormatAllMod(e, t) {
      return t.style ? (e.style || (e.style = {}), a.A.update(e, {
        displayMode: t.displayMode,
        style: s().assignWith(e.style, t.style)
      })) : e;
    }
    copyFormatForMath(e, t) {
      var r = e;
      return (e.style || t.style) && (r = a.A.setProp(r, "style", s().assign({}, t.style || {}, e.style || {}))), "displayMode" in t ? a.A.update(r, {
        displayMode: t.displayMode
      }) : r;
    }
    copyFormatForTextMode(e, t) {
      if (h.A.isComposite(e)) return t.style && t.style.fontSize && (e = c.A.addStyle(e, "fontSize", t.style.fontSize)), "displayMode" in t ? a.A.update(e, {
        displayMode: t.displayMode
      }) : e;
      var r = c.A.normalizeStyle(this.copyStyleForTextModeTextBlock(t.style, e.style)),
        n;
      return g(g({}, e), {}, {
        style: r || void 0
      });
    }
    copyStyleForTextModeTextBlock(e, t) {
      if (e || t) {
        var r = s().clone(e || {}),
          n = t;
        if (s().keys(t || {}).forEach(e => {
          "mathModeType" != e && (r[e] = n[e]);
        }), r.mathModeType && delete r.mathModeType, !(s().keys(r).length <= 0)) return r;
      }
    }
    splitBlockAndInsertModel(e, t, r, n) {
      if (0 == r) return [this.copyFormatByMode(t, e, n), e];
      var i;
      if (this.getCharCount(e) <= r) return [e, this.copyFormatByMode(t, e, n)];
      var o = this.splitBlock(e, r);
      return [o[0], this.copyFormatByMode(t, o[0], n), o[1]];
    }
    splitBlockAndInsertMultipleModels(e, t, r, n) {
      var i = this.copyFormatForBlocks(e, t, n),
        o;
      if (0 == r) return i.concat([e]);
      if (this.getCharCount(e) <= r) return [e].concat(i);
      var s = this.splitBlock(e, r);
      return a.A.insertMultiple(s, 1, i);
    }
    copyFormatForBlocks(e, t, r) {
      return t.map(t => this.copyFormatByMode(t, e, r));
    }
  }
  const f = new m();
  var y = new m();
};
