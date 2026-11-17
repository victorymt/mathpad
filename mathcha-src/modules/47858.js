/* module 47858 — 13455 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => O,
    r2: () => S
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(97372),
    a = r(38070),
    l = r(49812),
    c = r(27271),
    d = r(19539),
    h = r(29856),
    p = r(84258),
    u = r(39314),
    g = r(58578),
    m = r(90437),
    f = r(86081),
    y = r(21774),
    v = r(18808),
    b = r(79490);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function S(e) {
    return d.A.round2(e);
  }
  var A = "rgb(17, 85, 204)",
    w = "rgb(0, 0, 0)",
    E = ["fontName", "mathType", "fontSize"];
  class k {
    constructor() {
      (0, n.A)(this, "tempDefaultLineStyleToIgnore", void 0), (0, n.A)(this, "getHtmlFromBlockStyle", (e, t, r, n, i) => {
        if (!e) return r && "none" != r ? {
          textDecoration: r
        } : y.A.emptyObj;
        var o = this.getComputedStyle(e),
          s = {};
        if (o.textDecoration && "none" != o.textDecoration ? s.textDecoration = o.textDecoration : null !== o.textDecoration && !1 !== o.textDecoration || (s.textDecoration = "none"), !s.textDecoration && r && "none" != r && (s.textDecoration = r), o.mathType) switch (s.fontFamily = g.A.mathFontFamilyFromKey(o.mathType, n, "characters", i), o.mathType) {
          case "\\boldsymbol":
          case "\\mathbf":
            s.fontWeight = "bold";
            break;
          case "\\mathit":
            g.A.mathFontFamilySupportSubFont(n) || (s.fontStyle = "italic");
        }
        if (o.fontName && (s.fontFamily = g.A.textFontFamilyFromKey(o.fontName)), o.fontSize && this.fillFontSizeStyle(o.fontSize, s), o.isBold ? s.fontWeight = "bold" : !1 === o.isBold && (s.fontWeight = "normal"), o.isItalic ? s.fontStyle = "italic" : !1 === o.isItalic && (s.fontStyle = "normal"), o.color) {
          var a = u.A.getHtmlColor(o.color);
          t ? s.color = a : (s.color = a, s.stroke = a, s.borderColor = a, s.fill = a);
        }
        if (o.bgColor) {
          var l = u.A.getHtmlColor(o.bgColor);
          s.backgroundColor = l;
        }
        return s;
      });
    }
    normalizeStyle(e) {
      if (!e) return e;
      var t;
      for (var r in e) e.hasOwnProperty(r) && void 0 === e[r] && delete (t = t || o().clone(e))[r];
      return t || e;
    }
    normalizeStyleAndMakeUndefinedIfEmpty(e) {
      var t = this.normalizeStyle(e);
      if (t) for (var r in t) if (void 0 !== t[r]) return t;
    }
    getUnsetValue(e) {
      return "inherit" != e && void 0;
    }
    setEditorsStyleForRow(e, t, r, n) {
      var i = o().range(0, e.column).map(e => m.Z.getKeyFromRowCol(t, e));
      return c.A.modifyEditors(e, i, e => this.setStyleToEditor(e, r, n));
    }
    setEditorsStyleForColumn(e, t, r, n) {
      var i = o().range(0, e.row).map(e => m.Z.getKeyFromRowCol(e, t));
      return c.A.modifyEditors(e, i, e => this.setStyleToEditor(e, r, n));
    }
    setStyleToEditor(e, t, r) {
      var n = null == e.style ? {} : o().clone(e.style);
      return null == r ? delete n[t] : n[t] = r, C(C({}, e), {}, {
        style: y.A.undefinedIfEmptyObj(n)
      });
    }
    getStyleForEditor(e, t, r) {
      var n = (e.style || {})[t];
      return void 0 !== n ? n : r;
    }
    addStyleMod(e, t, r) {
      null == e.style && (e.style = {}), e.style[t] = r;
    }
    hasHyperLink(e) {
      return !(!e.style || !e.style.hyperLink);
    }
    overrideStyle(e, t) {
      var r = t || {},
        n = e.style || {},
        i;
      return n.hyperLink && r.hyperLink ? r = C(C({}, r), {}, {
        hyperLink: n.hyperLink
      }) : r.hyperLink ? r = C(C({}, r), {}, {
        hyperLink: void 0,
        color: r.color || A,
        textDecoration: void 0 === r.textDecoration ? "underline" : r.textDecoration
      }) : n.hyperLink && (r = C(C({}, r), {}, {
        hyperLink: n.hyperLink,
        color: r.color || w,
        textDecoration: r.textDecoration || !1
      }), console.log(r)), C(C({}, e), {}, {
        style: y.A.undefinedIfEmptyObj(this.normalizeStyle(C({}, r)))
      });
    }
    getComputedStyle(e) {
      if (!e) return {};
      if (!e.hyperLink && !e.textDecoration) return e;
      var t = e || {},
        r = C({}, t);
      return t.hyperLink && (r.color = r.color || A, r.textDecoration = void 0 === r.textDecoration ? "underline" : void 0, delete r.hyperLink), null !== r.textDecoration && "none" !== r.textDecoration && !1 !== r.textDecoration || delete r.textDecoration, r;
    }
    addStyleForBullet(e, t, r) {
      var n = o().clone(e) || {};
      return n[t] = r, n;
    }
    addStyleForBulletLine(e, t, r) {
      var n = (e.style || {}).listBulletStyle,
        i = this.addStyleForBullet(n, t, r);
      return C(C({}, e), {}, {
        style: C(C({}, e.style), {}, {
          listBulletStyle: i
        })
      });
    }
    addStyle(e, t, r) {
      var n = null == e.style ? {} : o().clone(e.style);
      return n[t] = r, "textDecoration" != t || r || (n.textDecoration = !1), "bgColor" == t && "none" == r && delete n[t], C(C({}, e), {}, {
        style: y.A.undefinedIfEmptyObj(n)
      });
    }
    safeGetBlockStyle(e, t, r) {
      return e && e.style && e.style[t] || r;
    }
    setLineStyleMod(e, t, r) {
      var n = e;
      return void 0 === r ? delete n.style[t] : n.style[t] = r, n;
    }
    contextDefaultShouldIgnore(e) {
      return this.tempDefaultLineStyleToIgnore == e;
    }
    setLineStyle(e, t, r) {
      var n = null == e.style ? {} : o().clone(e.style);
      return void 0 === r ? delete n[t] : n[t] = r, "align" == t && "left" == r && (this.contextDefaultShouldIgnore("align") || delete n[t]), "textDirection" != t || r || delete n[t], C(C({}, e), {}, {
        style: y.A.undefinedIfEmptyObj(n)
      });
    }
    setListType(e, t, r) {
      var n, i;
      if (null == t || "none" == t) return this.removeListType(e);
      "section" == t && this.getLineTempOrStoreIndent(e, void 0) > 2 && (e = this.setLineStyle(e, "indentIndex", 2));
      return null !== (n = e.style) && void 0 !== n && n.listTypeSkip && r && (e = this.setLineStyle(e, "listTypeSkip", void 0)), this.setLineStyle(e, "listType", t);
    }
    hasListType(e) {
      return null != this.getLineStyle(e, "listType", void 0);
    }
    removeLineStyle(e, t) {
      return this.setLineStyle(e, t, void 0);
    }
    removeListType(e) {
      var t = this.removeLineStyle(e, "listType");
      return t = this.removeLineStyle(t, "indentIndex"), t = this.removeLineStyle(t, "listTypeSkip"), t = this.removeLineStyle(t, "listBulletStyle"), (t = this.removeLineStyle(t, "listItemResetIndex")).___tempIndentIndex = void 0, t;
    }
    indentLine(e) {
      var t = this.getLineStyle(e, "listType"),
        r = this.getLineTempOrStoreIndent(e, 0);
      if ("section" == t && r >= 2) return e;
      if (r >= 3) return e;
      var n = this.setLineStyle(e, "indentIndex", r + 1);
      return n = this.removeLineStyle(n, "listTypeSkip");
    }
    getLineAlign(e, t) {
      if (!e) return t;
      var r = e.align;
      return r ? "justify" != r || p.A.supportTextJustify() ? r : "left" : t;
    }
    outdentLine(e) {
      var t = this.getLineTempOrStoreIndent(e, 0);
      if (t > 0) {
        var r = this.setLineStyle(e, "indentIndex", t - 1);
        return r = this.removeLineStyle(r, "listTypeSkip");
      }
      return e;
    }
    getLatexTableCellStyle(e, t) {
      var r = e.style || {};
      if ("align" == t) return r.align || "center";
    }
    getLineStyle(e, t, r) {
      return e && e.style ? void 0 === e.style[t] ? r : e.style[t] : r;
      var n;
    }
    getLineTempOrStoreIndent(e, t) {
      return null != e.___tempIndentIndex ? e.___tempIndentIndex : this.getLineStyle(e, "indentIndex", t);
    }
    getMaxNestedListLevel() {
      return 3;
    }
    getMaxNestedSectionLevel() {
      return 2;
    }
    getMaxLineIndentLevel() {
      return 3;
    }
    getMaxIndentLevelByListType(e) {
      return "section" == e ? this.getMaxNestedSectionLevel() : 3;
    }
    getIntersectStyleForTabular(e, t, r) {
      for (var n = t.getTabularSelectedKeys(), i = l.A.blockFromIndex(e[t.fromLineIndex], t.fromCharIndex).block, o = new h.B(E), s = 0; s < n.length; s++) {
        var a = n[s],
          c = i.elements[a];
        if (c) for (var d = 0; d < c.lines.length; d++) for (var p = c.lines[d], u = 0; u < p.blocks.length; u++) {
          var g = p.blocks[u],
            m;
          if (!r || "composite" != g.type || f.A.isRootCompositeBlockAsTextBlockProperty(g)) if ("stop" == o.next(g.style)) return o.end();
        }
      }
      return o.end();
    }
    setStyleForTabular(e, t, r, n) {
      for (var i = l.A.cloneCompositeBlockWithNewElements(e), o = 0; o < t.length; o++) {
        var s = t[o],
          a = e.elements[s];
        i.elements[s] = this.setStyleToEditor(a, r, n);
      }
      return i;
    }
    getIntersectEditorStyleForTabular(e, t) {
      for (var r = new h.B([]), n = 0; n < t.length; n++) {
        var i = t[n],
          o = e.elements[i],
          s;
        if ("stop" == r.next(o.style)) break;
      }
      return r.end();
    }
    mergeWithAncestorBlockStyles(e, t, r) {
      for (var n = e, i = function i(s) {
          var a,
            l = t[s];
          if (!f.A.styleInheritToChildren(l)) return "continue";
          var c = l.style;
          if (f.A.isTheorem(l) && null == (null === (a = c) || void 0 === a ? void 0 : a.isItalic)) {
            var d = r.getMtFuncs().getTheoremInfo(),
              h = b.T.getTheoremOrDefault(l.theoremKey, d),
              p;
            b.T.theoremShouldItalic(d, h) && (c = C(C({}, c), {}, {
              isItalic: !0
            }));
          }
          if (!c) return "continue";
          o().keys(c).forEach(t => {
            if ("fontSize" != t) {
              var r = n,
                i = c;
              n && void 0 === n[t] && ((e = e == n ? o().clone(n || {}) : e || {})[t] = i[t]);
            }
          });
        }, s = t.length - 1; s >= 0; s--) var a = i(s);
      return e;
    }
    mergeStyle(e, t) {
      if (!t) return e;
      if (!e) return t;
      var r = e;
      return o().keys(t).forEach(n => {
        var i = r,
          s = t;
        r && void 0 === r[n] && ((e = e == r ? o().clone(r || {}) : e)[n] = s[n]);
      }), e;
    }
    getIntersectStyle(e, t, r) {
      if (t.isCurrentLevelSameRoute()) return {};
      if (t.isTabularRoute()) return this.getIntersectStyleForTabular(e, t, r);
      var n = new h.B(E);
      return t.forEach(e, (e, t, i, o) => {
        var s;
        r && "composite" == e.type && !f.A.isRootCompositeBlockAsTextBlockProperty(e) || "stop" == n.next(e.style) && o();
      }), n.end();
    }
    getHtmlFromStyleForBullet(e) {
      if (!e.style) return null;
      if (!e.style.listBulletStyle) return null;
      var t = e.style.listBulletStyle,
        r = {};
      return t.color && (r.color = u.A.getHtmlColor(t.color)), "line-through" == t.textDecoration && (r.textDecoration = "line-through"), t.fontSize && this.fillFontSizeStyle(t.fontSize, r), t.isBold && (r.fontWeight = "bold"), t.isItalic && (r.fontStyle = "italic"), r;
    }
    getHtmlFromStyle(e, t, r, n) {
      return this.getHtmlFromBlockStyle(e.style, s.A.isTextBlock(e), t, r, n);
    }
    basicMathStyle(e, t) {
      var r = {};
      switch (r.fontFamily = g.A.mathFontFamilyFromKey(e, t, "characters"), e) {
        case "\\boldsymbol":
          r.fontWeight = "bold", g.A.mathFontFamilySupportSubFont(t) || (r.fontStyle = "italic");
          break;
        case "\\mathbf":
          r.fontWeight = "bold";
          break;
        case "\\mathit":
          g.A.mathFontFamilySupportSubFont(t) || (r.fontStyle = "italic");
      }
      return r;
    }
    fillFontSizeStyle(e, t) {
      var r = v.l.getReactFontSizeStyle(e);
      r && (t.fontSize = r);
    }
    styleToLatex(e, t) {
      if ("mathType" == e) return t;
      if ("color" == e) {
        var r = a.A.colorAsArray(t, [0, 0, 0]);
        return "\\textcolor[rgb]{".concat(S(r[0] / 255), ",").concat(S(r[1] / 255), ",").concat(S(r[2] / 255), "}");
      }
      return t;
    }
    lineStyleToLatex(e, t) {
      if ("listType" == e) switch (t) {
        case "order":
          return "enumerate";
        case "unorder":
        default:
          return "itemize";
        case "section":
          return "second";
      }
      if ("align" == e) switch (t) {
        case "left":
          return "flushleft";
        case "center":
          return "center";
        case "right":
          return "flushright";
      }
    }
    lineStyleContext(e, t) {
      this.tempDefaultLineStyleToIgnore = e, t(), this.tempDefaultLineStyleToIgnore = void 0;
    }
  }
  const O = new k();
};
