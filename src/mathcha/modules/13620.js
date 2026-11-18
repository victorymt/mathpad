/* module 13620 — 36863 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => N
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(61848),
    a = r(49812),
    l = r(97372),
    c = r(73524),
    d = r(70224);
  class h {
    merge(e, t, r, n) {
      return l.A.isPower(t) || l.A.isIndex(t) ? this.handleMergeForPowerIndex(e, t, r, n) : null;
    }
    handleMergeForPowerIndex(e, t, r, n) {
      if (r > 0) {
        var i,
          o = e[i = r - 1];
        if (l.A.isIndex(t) && l.A.isPower(o)) return this.appendIndex(o, e, i, n - 1);
        if (l.A.isPower(t) && l.A.isIndex(o)) return this.appendPower(o, e, i, n - 1);
        if (l.A.isPlainIntegralLike(o) && l.A.isPower(t)) return this.appendPowerIndexForIntegralLike(o, e, i, n, "from");
        if (l.A.isPlainIntegralLike(o) && l.A.isIndex(t)) return this.appendPowerIndexForIntegralLike(o, e, i, n, "to");
      }
      if (r < e.length) {
        var i = r;
        if (l.A.isIndex(t) && l.A.isPower(e[i])) return this.appendIndex(e[i], e, i, n);
        if (l.A.isPower(t) && l.A.isIndex(e[i])) return this.appendPower(e[i], e, i, n);
      }
      return null;
    }
    appendPowerIndexForIntegralLike(e, t, r, n, i) {
      var o = s.A.set(e, "elements.from", d.A.createEmptyEditor());
      return o = s.A.set(o, "elements.to", d.A.createEmptyEditor()), {
        blocks: s.A.set(t, r, o),
        selected: {
          lineIndex: void 0,
          charIndex: n - 1,
          key: i,
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }
      };
    }
    appendPower(e, t, r, n) {
      return this.append("powerValue", e, t, r, n);
    }
    appendIndex(e, t, r, n) {
      return this.append("indexValue", e, t, r, n);
    }
    append(e, t, r, n, i) {
      var o = s.A.set(t, "elements." + e, d.A.createEmptyEditor());
      return o = s.A.set(o, "text", "\\power-index"), {
        blocks: s.A.set(r, n, o),
        selected: {
          lineIndex: void 0,
          charIndex: i,
          key: e,
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }
      };
    }
  }
  const p = new h();
  var u = r(47858),
    g = r(30803),
    m = r(42539);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class v {
    handleIndentPattern(e, t, r, n, i) {
      if (n && 1 == t && l.A.isTextBlock(r) && " " == r.text && 1 == e.blocks.length && l.A.isTextBlock(e.blocks[0]) && "-" == e.blocks[0].text) {
        var o;
        if (u.A.getLineStyle(e, "listType")) return;
        var a = s.A.setProp(e, "blocks", []);
        return {
          line: a = u.A.setListType(a, i.getUnOrderDefaults(), !0),
          selected: {
            lineIndex: void 0,
            charIndex: 0
          }
        };
      }
      return null;
    }
    handleReplaceTextEnd(e, t, r, n, i, o) {
      var s, a;
      if (r <= 0) return null;
      if (e.length > 5) return null;
      if (e.length > 1 && c.Ay.length(t) > 1) return null;
      if (i.isCodeSection) return null;
      var d = i.shortcutMatcher.matchSequenceByInsertedOneChar(t, e, r);
      if (!d) return null;
      if ("char-sequence" == d.data.shortcut.type && d.data.shortcut.startAtLineOrWhiteSpace) {
        var h = d.data.shortcut.sequence,
          p = t.toString() + e,
          u = r - h.length + 1,
          g = 0 == u && null == o,
          f = u > 0 && " " == p[u - 1],
          v = 0 == u && o && !o.type && " " == o.text[o.text.length - 1];
        if (!(g || f || v)) return;
      }
      var b = i.isTextMode || i.isInsideTextSymbol,
        x = b ? null === (s = d.data.textModeLine) || void 0 === s ? void 0 : s.blocks : null === (a = d.data.mathModeLine) || void 0 === a ? void 0 : a.blocks;
      if (x && 0 != x.length) {
        var C = d.replacementInfo.deletedCount,
          S = b ? d.replacementInfo.textModeInsertedCount : d.replacementInfo.mathModeInsertedCount,
          A = b ? d.replacementInfo.singleTextModeTextOnly : d.replacementInfo.singleMathModeTextOnly,
          w = c.Ay.getUnistring(n);
        if (A) {
          var E = x[0].text,
            k;
          return c.Ay.throwInvalidInsertedStr(E), {
            blocks: [y(y({}, n), {}, {
              text: c.Ay.strPslice(n, r + 1 - C, C, E)
            })],
            shouldNormalizeLine: !1,
            delta: {
              lineIndex: 0,
              charIndex: S - C + 1
            }
          };
        }
        var O = y(y({}, n), {}, {
            text: c.Ay.unistrPslice(w, r + 1 - C, C, "")
          }),
          D = m.w.processCursorReplacementBlocks(x),
          P = D.blocks,
          M = D.delta,
          I = D.extendedCharCount,
          T,
          L;
        return O.text ? {
          blocks: l.A.splitBlockAndInsertMultipleModels(O, P, r + 1 - C, i.isTextMode),
          shouldNormalizeLine: !0,
          delta: this.mergeCursorDelta(S, C - 1, M),
          extendedCharCount: I
        } : {
          blocks: this.copyFormatForBlocks(n, P, i.isTextMode),
          shouldNormalizeLine: !0,
          delta: this.mergeCursorDelta(S, C - 1, M),
          extendedCharCount: I
        };
      }
    }
    mergeCursorDelta(e, t, r) {
      var n = {
        lineIndex: 0,
        charIndex: e - t
      };
      return r && (n.charIndex = -t + r.charIndex, r.key && (n.key = r.key, n.selected = r.selected)), n;
    }
    handleReplaceFromReplacementOfComposition(e, t, r, n, i) {
      var o = c.Ay.strPsliceWithOriginalUniStr(n, e, t, r),
        s = o.firstSection,
        a = o.result;
      if (!a) return {
        blocks: [],
        delta: {
          lineIndex: 0,
          charIndex: -t
        },
        shouldNormalizeLine: !1,
        stopComposition: !1
      };
      var d = c.Ay.getUnistringUncached(r),
        h = i.shortcutMatcher.matchSequence(s, d, s.length + d.length - 1);
      if (!h) return c.Ay.throwInvalidInsertedStr(a), {
        blocks: [y(y({}, n), {}, {
          text: a
        })],
        delta: {
          lineIndex: 0,
          charIndex: d.length - t
        },
        shouldNormalizeLine: !1,
        stopComposition: !1
      };
      var p = i.isTextMode || i.isInsideTextSymbol,
        u = p ? h.data.textModeLine && h.data.textModeLine.blocks : h.data.mathModeLine && h.data.mathModeLine.blocks;
      if (!u || 0 == u.length) return c.Ay.throwInvalidInsertedStr(a), {
        blocks: [y(y({}, n), {}, {
          text: a
        })],
        delta: {
          lineIndex: 0,
          charIndex: d.length - t
        },
        shouldNormalizeLine: !1,
        stopComposition: !1
      };
      var g = s.length + d.length,
        f = c.Ay.getUnistringUncached(a),
        v = h.replacementInfo.deletedCount,
        b = p ? h.replacementInfo.textModeInsertedCount : h.replacementInfo.mathModeInsertedCount,
        x = p ? h.replacementInfo.singleTextModeTextOnly : h.replacementInfo.singleMathModeTextOnly,
        C = t - d.length + v,
        S = b - C;
      if (x) {
        var A = u[0].text,
          w;
        return c.Ay.throwInvalidInsertedStr(A), {
          blocks: [y(y({}, n), {}, {
            text: c.Ay.unistrPslice(f, g - v, v, A)
          })],
          delta: {
            lineIndex: 0,
            charIndex: S
          },
          shouldNormalizeLine: !1,
          stopComposition: !0
        };
      }
      var E = y(y({}, n), {}, {
          text: c.Ay.unistrPslice(f, g - v, v, "")
        }),
        k = m.w.processCursorReplacementBlocks(u),
        O = k.blocks,
        D = k.delta,
        P = k.extendedCharCount,
        M,
        I;
      return E.text ? {
        blocks: l.A.splitBlockAndInsertMultipleModels(E, O, g - v, i.isTextMode),
        shouldNormalizeLine: !0,
        delta: this.mergeCursorDelta(b, C, D),
        stopComposition: !0,
        extendedCharCount: P
      } : {
        blocks: this.copyFormatForBlocks(E, O, i.isTextMode),
        shouldNormalizeLine: !0,
        delta: this.mergeCursorDelta(b, C, D),
        extendedCharCount: P,
        stopComposition: !0
      };
    }
    copyFormatForBlocks(e, t, r) {
      return t.map(t => l.A.copyFormatByMode(t, e, r));
    }
  }
  const b = new v();
  var x = r(27271),
    C = r(21735);
  class S {
    constructor(e, t) {
      (0, n.A)(this, "style", void 0), (0, n.A)(this, "value", void 0), this.style = e, this.value = t;
    }
    modifyRootStyleForMath(e) {
      return l.A.addRootStyleForMath(e, this.style, this.value);
    }
    modifyStyle(e) {
      return u.A.addStyle(e, this.style, this.value);
    }
    modifyPrefix(e) {
      return C.A.getSupportedStyleNames().includes(this.style) ? u.A.addStyleForBulletLine(e, this.style, this.value) : e;
    }
  }
  function A(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class E {
    constructor(e) {
      (0, n.A)(this, "blockStyle", void 0), this.blockStyle = e || {};
    }
    modifyRootStyleForMath(e) {
      return l.A.overriddeRootStyleForMath(e, this.blockStyle);
    }
    modifyStyle(e) {
      return u.A.overrideStyle(e, this.blockStyle);
    }
    modifyPrefix(e) {
      var t = {};
      return C.A.getSupportedStyleNames().forEach(e => {
        t[e] = this.blockStyle[e];
      }), t = u.A.normalizeStyle(t), w(w({}, e), {}, {
        style: w(w({}, e.style), {}, {
          listBulletStyle: t
        })
      });
    }
  }
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function O(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class D {
    modifyRootStyleForMath(e) {
      return e.style ? O(O({}, e), {}, {
        style: void 0
      }) : e;
    }
    modifyStyle(e) {
      return e.style ? e.style.hyperLink ? O(O({}, e), {}, {
        style: {
          hyperLink: e.style.hyperLink
        }
      }) : O(O({}, e), {}, {
        style: void 0
      }) : e;
    }
    modifyPrefix(e) {
      return e.style ? O(O({}, e), {}, {
        style: void 0
      }) : e;
    }
  }
  var P = r(25154),
    M = r(90437);
  function I(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? I(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class L {
    extract(e, t) {
      for (var r = M.Z.getMinMaxTabularKeyIndex(t), n = T(T({}, e), {}, {
          row: r.maxRow - r.minRow + 1,
          column: r.maxCol - r.minCol + 1,
          elements: {}
        }), i = r.minRow; i <= r.maxRow; i++) for (var o = r.minCol; o <= r.maxCol; o++) {
        var s = M.Z.getKeyFromRowCol(i, o),
          a = t.indexOf(s) >= 0,
          l = M.Z.getKeyFromRowCol(i - r.minRow, o - r.minCol);
        n.elements[l] = a ? e.elements[s] : d.A.createEmptyEditor();
      }
      return n = P.A.handleExtractTabular(n, r), P.A.normalizeTabular(n);
    }
  }
  const R = new L();
  var B = r(86081);
  function F(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function j(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? F(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _ {
    replaceBlock(e, t, r) {
      var n = s.A.set(e.blocks, r, t);
      return s.A.setProp(e, "blocks", n);
    }
    replaceBlockInEditor(e, t, r, n) {
      return s.A.set(e, "lines.".concat(r, ".blocks.").concat(n), t);
    }
    removeCompositeBlockInEditor(e, t, r) {
      var n = s.A.remove(e.lines[t].blocks, r);
      return s.A.set(e, "lines.".concat(t, ".blocks"), n);
    }
    removeBlock(e, t) {
      var r = s.A.remove(e.blocks, t);
      return s.A.setProp(e, "blocks", r);
    }
    splitLineAt(e, t) {
      if (0 == t && e.blocks.length <= 0) return [e, this.cloneLineProperty(e)];
      if (0 == t) return [this.cloneLineProperty(e), e];
      var r = a.A.blockEach(e, (r, n, i, o) => {
        if (t >= i && t <= o) {
          var a, c;
          if (t == i) a = e.blocks.slice(0, n), c = e.blocks.slice(n);else {
            var d = l.A.splitBlock(r, t - i);
            a = e.blocks.slice(0, n).concat([d[0]]), c = [d[1]].concat(e.blocks.slice(n + 1));
          }
          return [s.A.setProp(e, "blocks", a), this.cloneLineProperty(e, c)];
        }
      });
      return r || [e, this.cloneLineProperty(e)];
    }
    splitBlockInLine(e, t) {
      var r = a.A.blockEach(e, (r, n, i, o) => {
        if (t >= i && t <= o) {
          if (t == i) return e;
          var a = l.A.splitBlock(r, t - i);
          return s.A.setProp(e, "blocks", s.A.splice(e.blocks, n, 1, a[0], a[1]));
        }
      });
      return r || e;
    }
    cloneLineProperty(e, t) {
      var r,
        n,
        i = {
          id: g.w.nextId(),
          blocks: t || [],
          style: e.style ? o().cloneDeep(e.style) : null
        };
      return void 0 !== e.___tempIndentIndex && (i = u.A.setLineStyle(i, "indentIndex", e.___tempIndentIndex)), null !== (r = e.style) && void 0 !== r && r.listTypeSkip && (i = u.A.removeLineStyle(i, "listTypeSkip")), null != (null === (n = i.style) || void 0 === n ? void 0 : n.listItemResetIndex) && (i = u.A.removeLineStyle(i, "listItemResetIndex")), i;
    }
    removeCharAt(e, t) {
      var r;
      return a.A.blockEach(e, (r, n, i, o) => {
        if (t >= i && t <= o) {
          if (!l.A.isTextBlock(r)) {
            var a = s.A.remove(e.blocks, n);
            return a = this.joinBlocksIfPossible(a, n - 1), s.A.setProp(e, "blocks", a);
          }
          var d = r;
          if (1 == c.Ay.lengthByCache(d)) {
            var a = s.A.remove(e.blocks, n);
            return a = this.joinBlocksIfPossible(a, n - 1), s.A.setProp(e, "blocks", a);
          }
          var h = t - i,
            p = s.A.setProp(r, "text", c.Ay.strPslice(d, h, 1, "")),
            a = s.A.setIndex(e.blocks, n, p);
          return s.A.setProp(e, "blocks", a);
        }
      }) || o().clone(e);
    }
    joinBlocks(e) {
      if (0 == e.blocks.length) return e;
      if (1 == e.blocks.length) return e;
      for (var t = e.blocks, r = 0; r < t.length - 1; r++) {
        var n = t[r],
          i = t[r + 1];
        l.A.are2TextBlockSameFormat(n, i) ? (t = this.joinBlocksIfPossible(t, r), r--) : n.text || i.text ? n.text ? i.text || (t = s.A.splice(t, r + 1, 1), r--) : (t = s.A.splice(t, r, 1), r--) : (t = s.A.splice(t, r, 2), r -= 2);
      }
      return t == e.blocks ? e : s.A.setProp(e, "blocks", t);
    }
    normalizeBlocks(e) {
      for (var t = e, r = 0; r < e.length; r++) {
        var n = e[r],
          i = this.normalizeStyle(n);
        n != i && (t = s.A.setIndex(t, r, i));
      }
      return t;
    }
    joinBlocksAndNormalizeStyleForLine(e) {
      var t = this.joinBlocks(e),
        r = this.normalizeBlocks(t.blocks);
      return r != t.blocks ? j(j({}, t), {}, {
        blocks: r
      }) : t;
    }
    joinBlocksIfPossibleForLine(e, t) {
      var r = this.joinBlocksIfPossible(e.blocks, t);
      return r == e.blocks ? e : s.A.setProp(e, "blocks", r);
    }
    joinBlocksIfPossible(e, t) {
      if (t < 0 || t >= e.length - 1) return e;
      var r = e[t],
        n = e[t + 1];
      if (l.A.are2TextBlockSameFormat(r, n)) {
        var i = s.A.setProp(r, "text", r.text + n.text);
        return s.A.splice(e, t, 2, i);
      }
      return e;
    }
    mergeStyleForLines(e, t, r) {
      for (var n = 0; n < t.length; n++) for (var i = t[n], o = 0; o < i.blocks.length; o++) {
        var s = i.blocks[o];
        l.A.mergeFormatMod(s, e, r ? "root" : "math");
      }
      return t;
    }
    insertLinesAt(e, t, r, n) {
      var i = a.A.isFirstLineWithSingleBlockLine(r),
        c = a.A.isLastLineWithSingleBlockLine(r),
        d = a.A.blockEach(e, (o, a, d, h) => {
          if (t >= d && t <= h) {
            this.mergeStyleForLines(o, r, n);
            var p = e.blocks,
              u = a;
            if (t > d) {
              var m = t - d;
              p = s.A.replaceWithArray(e.blocks, a, 1, l.A.splitBlock(o, m)), u = a + 1;
            }
            if (1 == r.length) {
              if (i) return 0 == t ? [r[0], s.A.update(e, {
                id: g.w.nextId(),
                blocks: p
              })] : [s.A.setProp(e, "blocks", p.slice(0, u)), r[0], s.A.update(e, {
                id: g.w.nextId(),
                blocks: p.slice(u)
              })];
              var f = s.A.replaceWithArray(p, u, 0, r[0].blocks),
                y = this.joinBlocksIfPossible(f, u - 1),
                v = u + r[0].blocks.length - 1;
              return y.length < f.length && (v -= 1), y = this.joinBlocksIfPossible(y, v), [s.A.setProp(e, "blocks", y)];
            }
            var b = r[r.length - 1],
              x,
              C,
              S;
            if (i && c) {
              if (x = s.A.setProp(e, "blocks", p.slice(0, u)), C = s.A.update(e, {
                id: g.w.nextId(),
                blocks: p.slice(u)
              }), S = r, 0 == t) return S.concat([C]);
            } else if (i) {
              var A = this.joinBlocksIfPossible(b.blocks.concat(p.slice(u)), b.blocks.length - 1);
              if (x = s.A.setProp(e, "blocks", p.slice(0, u)), C = s.A.setProp(b, "blocks", A), S = r.slice(0, r.length - 1), 0 == t) return S.concat([C]);
            } else if (c) {
              var w = this.joinBlocksIfPossible(p.slice(0, u).concat(r[0].blocks), u - 1);
              x = s.A.setProp(e, "blocks", w), C = s.A.update(e, {
                id: g.w.nextId(),
                blocks: p.slice(u)
              }), S = r.slice(1);
            } else {
              var E = this.joinBlocksIfPossible(p.slice(0, u).concat(r[0].blocks), u - 1),
                k = this.joinBlocksIfPossible(b.blocks.concat(p.slice(u)), b.blocks.length - 1);
              x = s.A.setProp(e, "blocks", E), C = s.A.setProp(b, "blocks", k), S = r.slice(1, r.length - 1);
            }
            return [x].concat(S).concat([C]);
          }
        });
      if (d) return d;
      if (i) return 0 == e.blocks.length ? r : [e].concat(r);
      var h = this.joinBlocksIfPossible(e.blocks.concat(r[0].blocks), e.blocks.length - 1),
        p = e.style;
      return p && 0 != o().keys(p).length || (p = r[0].style), 1 == r.length ? [j(j({}, e), {}, {
        blocks: h,
        style: p
      })] : [j(j({}, e), {}, {
        blocks: h,
        style: p
      })].concat(r.slice(1));
    }
    buildInsertedModelResult(e, t, r) {
      return {
        line: e,
        selected: t,
        extendedCharCount: r
      };
    }
    checkToPreventCopyCertainStyle(e, t, r, n, i) {
      if (!e) return t;
      if (!r && e.style && e.style.mathType && !t.style) {
        var o = u.A.safeGetBlockStyle(i, "mathType"),
          s = u.A.safeGetBlockStyle(n, "mathType");
        return o == s && null != s ? t : j(j({}, t), {}, {
          style: {
            mathType: void 0
          }
        });
      }
      if (r && e.style && e.style.hyperLink && !t.style) {
        var a = u.A.safeGetBlockStyle(i, "hyperLink"),
          l = u.A.safeGetBlockStyle(n, "hyperLink");
        return a == l && null != l ? t : j(j({}, t), {}, {
          style: {
            hyperLink: void 0
          }
        });
      }
      return t;
    }
    handleEmptyLine(e, t, r) {
      e = this.checkToPreventCopyCertainStyle(t.blocks[0], e, r, null, null);
      var n = s.A.insert(t.blocks, t.blocks.length, e);
      return this.buildInsertedModelResult(s.A.set(t, "blocks", n));
    }
    handle_InsertNon_CurrentNon(e, t) {
      var r = t.block,
        n = t.insertedIndex,
        i = t.startIndex,
        o = t.line,
        a = t.blockIndex,
        c = t.isTextMode,
        d = t.previousBlock,
        h = t.nextBlock,
        u = i == n ? a : a + 1;
      e = i == n ? this.checkToPreventCopyCertainStyle(r, e, c, r, d) : this.checkToPreventCopyCertainStyle(r, e, c, h, r), e = l.A.copyFormatByMode(e, r, c), e = this.normalizeStyle(e);
      var g = p.merge(o.blocks, e, u, n);
      if (g) return this.buildInsertedModelResult(s.A.setProp(o, "blocks", g.blocks), g.selected);
      var m = s.A.insert(o.blocks, u, e);
      return this.buildInsertedModelResult(s.A.setProp(o, "blocks", m));
    }
    normalizeStyle(e) {
      var t = u.A.normalizeStyleAndMakeUndefinedIfEmpty(e.style);
      return t !== e.style ? j(j({}, e), {}, {
        style: t
      }) : e;
    }
    handle_InsertText_CurrentNon(e, t) {
      var r = t.block,
        n = t.line,
        i = t.blockIndex,
        o = t.isTextMode,
        a = t.previousBlock,
        c = t.insertedIndex,
        d = t.startIndex,
        h = t.nextBlock,
        p;
      d == c ? (p = i, e = this.checkToPreventCopyCertainStyle(r, e, o, r, a)) : (p = i + 1, e = this.checkToPreventCopyCertainStyle(r, e, o, h, r)), e = l.A.copyFormatByMode(e, r, o), e = this.normalizeStyle(e);
      var u = s.A.insert(n.blocks, p, e);
      return this.buildInsertedModelResult(s.A.setProp(n, "blocks", u));
    }
    handle_InsertNon_CurrentText(e, t) {
      var r = t.line,
        n = t.blockIndex,
        i = t.isTextMode,
        o = t.insertedIndex,
        a = t.startIndex,
        c = t.block,
        d = t.previousBlock,
        h = t.endIndex,
        p = t.nextBlock;
      o == a ? e = this.checkToPreventCopyCertainStyle(c, e, i, c, d) : o == h + 1 && (e = this.checkToPreventCopyCertainStyle(c, e, i, p, c));
      var u = o - a,
        g = l.A.splitBlockAndInsertModel(c, e, u, i),
        m = r.blocks.slice(0, n).concat(g).concat(r.blocks.slice(n + 1));
      return this.buildInsertedModelResult(s.A.setProp(r, "blocks", m));
    }
    handle_InsertText_CurrentText(e, t, r) {
      var n = t.line,
        i = t.blockIndex,
        a = t.isTextMode,
        d = t.insertedIndex,
        h = t.startIndex,
        p = t.block,
        u = t.previousBlock,
        g = t.endIndex,
        m = t.nextBlock;
      d == h ? e = this.checkToPreventCopyCertainStyle(p, e, a, p, u) : d == g + 1 && (e = this.checkToPreventCopyCertainStyle(p, e, a, m, p));
      var f = p,
        y = e,
        v = d - h;
      if (null != y.style && o().keys(y.style).length > 0) {
        var x = l.A.splitBlockAndInsertModel(f, y, v, a),
          C = n.blocks.slice(0, i).concat(x).concat(n.blocks.slice(i + 1)),
          S = s.A.setProp(n, "blocks", C);
        return S = this.joinBlocksAndNormalizeStyleForLine(S), this.buildInsertedModelResult(S);
      }
      var A = c.Ay.strPsliceWithOriginalUniStr(f, v, 0, y.text),
        w = A.result,
        E = A.originalTextUniStr;
      if (this.handleUnicodeCombinedCharAtMiddle(E, v, y.text)) return this.buildInsertedModelResult(this.buildNewLineWithText(n, i, w), {
        lineIndex: void 0,
        charIndex: d
      });
      var k = j(j({}, f), {}, {
          text: w
        }),
        O = b.handleReplaceTextEnd(y.text, E, v, k, r, u);
      if (O) {
        var D = s.A.replaceWithArray(n.blocks, i, 1, O.blocks),
          P = j(j({}, n), {}, {
            blocks: D
          });
        return O.shouldNormalizeLine && (P = this.joinBlocksAndNormalizeStyleForLine(P)), this.buildInsertedModelResult(P, {
          lineIndex: void 0,
          charIndex: d + O.delta.charIndex,
          key: O.delta.key,
          selected: O.delta.selected
        }, O.extendedCharCount);
      }
      return this.buildInsertedModelResult(j(j({}, n), {}, {
        blocks: s.A.set(n.blocks, i, k)
      }));
    }
    insertModelAtNormal(e, t, r, n) {
      var i = b.handleIndentPattern(e, t, r, n.isRootLine, n.liDefaultsProvider);
      if (i) return i;
      var o = l.A.isTextBlock(r),
        s = a.A.blockEach(e, (i, s, a, c, d) => {
          if (!(t < a || t > c + 1)) {
            var h = l.A.isTextBlock(i),
              p = !h && !o,
              u = h && o,
              g = e.blocks[s + 1],
              m = {
                insertedIndex: t,
                block: i,
                blockIndex: s,
                isTextMode: n.isTextMode,
                line: e,
                previousBlock: d,
                startIndex: a,
                endIndex: c,
                nextBlock: g
              };
            if (t == a) return p ? this.handle_InsertNon_CurrentNon(r, m) : u ? this.handle_InsertText_CurrentText(r, m, n) : o ? this.handle_InsertText_CurrentNon(r, m) : this.handle_InsertNon_CurrentText(r, m);
            if (t == c + 1) {
              if (p) return this.handle_InsertNon_CurrentNon(r, m);
              if (u) return this.handle_InsertText_CurrentText(r, m, n);
              if (g && l.A.isTextBlock(g)) return;
              if (!o && g) return;
              return o ? this.handle_InsertText_CurrentNon(r, m) : this.handle_InsertNon_CurrentText(r, m);
            }
            return o ? this.handle_InsertText_CurrentText(r, m, n) : this.handle_InsertNon_CurrentText(r, m);
          }
        });
      return s || this.handleEmptyLine(r, e, n.isTextMode);
    }
    handleUnicodeCombinedCharAtMiddle(e, t, r) {
      if (t > 0) try {
        var n = e.clusterAt(t - 1);
        if (c.Ay.length(n + r) == c.Ay.length(r)) return !0;
      } catch (e) {}
      return !1;
    }
    shouldNotCopyStyle(e) {
      return e.style && !!e.style.mathType;
    }
    insertModelAt(e, t, r, n) {
      return this.insertModelAtNormal(e, t, r, n);
    }
    buildNewLineWithText(e, t, r) {
      var n = s.A.set(e.blocks[t], "text", r),
        i = s.A.set(e.blocks, t, n);
      return s.A.setProp(e, "blocks", i);
    }
    replaceTextInBlockForComposition(e, t, r, n, i) {
      return b.handleReplaceFromReplacementOfComposition(e, t, r, n, i);
    }
    getSelectionForTabular(e, t) {
      var r = e[t.fromLineIndex],
        n,
        i = a.A.blockFromIndex(r, t.fromCharIndex).block,
        o = this.extractAndNormalizeKeys(i, t);
      return o = x.A.normalizeCells(o), [d.A.createLineFromBlock(o)];
    }
    extractAndNormalizeKeys(e, t) {
      var r = t.getTabularSelectedKeys();
      return R.extract(e, r);
    }
    getSelectionData(e, t) {
      if (t.isTabularRoute()) return this.getSelectionForTabular(e, t);
      if (t.fromLineIndex == t.toLineIndex) return [this.getSelectionDataInLine(e[t.fromLineIndex], t.fromCharIndex, t.toCharIndex)];
      var r = e[t.fromLineIndex],
        n = e[t.toLineIndex];
      return this.removeLineUntil(r, t.fromCharIndex).concat(e.slice(t.fromLineIndex + 1, t.toLineIndex)).concat(this.removeLineFrom(n, t.toCharIndex));
    }
    actionOnStyleForTabularSelection(e, t, r, n) {
      for (var i = t.getTabularSelectedKeys(), o = e[t.fromLineIndex], l = a.A.blockFromIndex(o, t.fromCharIndex), c = l.block, d = a.A.cloneCompositeBlockWithNewElements(c), h = 0; h < i.length; h++) {
        for (var p = i[h], u = c.elements[p], g = [], m = 0; m < u.lines.length; m++) {
          for (var f = u.lines[m], y = [], v = 0; v < f.blocks.length; v++) {
            var b = f.blocks[v];
            n && B.A.isComposite(b) ? B.A.isRootCompositeBlockAsTextBlockProperty(b) ? y.push(r.modifyStyle(b)) : y.push(r.modifyRootStyleForMath(b)) : y.push(r.modifyStyle(b));
          }
          g.push(s.A.setProp(f, "blocks", y));
        }
        d.elements[p] = j(j({}, u), {}, {
          lines: g
        });
      }
      var x = this.replaceBlock(o, d, l.blockIndex);
      return s.A.setIndex(e, t.fromLineIndex, x);
    }
    setStyleForSelection(e, t, r, n, i) {
      return this.actionOnStyleForSelection(e, t, new S(r, n), i);
    }
    overrideStyleForSelection(e, t, r, n) {
      return this.actionOnStyleForSelection(e, t, new E(r), n);
    }
    clearStyleForSelection(e, t, r) {
      return this.actionOnStyleForSelection(e, t, new D(), r);
    }
    modifyStyleForLineFrom(e, t, r, n, i) {
      for (var o = {}, a = r; a < n; a++) {
        var l = e.blocks[a];
        o[a] = this.handleModifyBlockStyle(l, t, i);
      }
      return s.A.setProp(e, "blocks", s.A.update(e.blocks, o));
    }
    handleModifyBlockStyle(e, t, r) {
      return r && B.A.isComposite(e) ? B.A.isRootCompositeBlockAsTextBlockProperty(e) ? t.modifyStyle(e) : t.modifyRootStyleForMath(e) : t.modifyStyle(e);
    }
    modifyStyleForLine(e, t, r) {
      return j(j({}, e), {}, {
        blocks: o().map(e.blocks, e => this.handleModifyBlockStyle(e, t, r))
      });
    }
    actionOnStyleForSelection(e, t, r, n) {
      if (t.isCurrentLevelSameRoute()) return e;
      if (t.isTabularRoute()) return this.actionOnStyleForTabularSelection(e, t, r, n);
      for (var i = this.splitBySelection(e, t), o = {}, l = t.fromLineIndex; l <= t.toLineIndex; l++) {
        var c = i[l];
        if (l == t.fromLineIndex && l == t.toLineIndex) {
          var d = a.A.blockFromIndex(c, t.fromCharIndex).blockIndex,
            h = a.A.blockFromIndex(c, t.toCharIndex),
            p = h ? h.blockIndex : c.blocks.length;
          c = this.modifyStyleForLineFrom(c, r, d, p, n), u.A.getLineStyle(c, "listType") && 0 == t.fromCharIndex && p >= c.blocks.length - 1 && t.toCharIndex >= a.A.getTotalChar(c.blocks) && (c = r.modifyPrefix(c));
        } else if (l == t.fromLineIndex) {
          var g = a.A.blockFromIndex(c, t.fromCharIndex);
          if (null != g) {
            var m = g.blockIndex;
            c = this.modifyStyleForLineFrom(c, r, m, c.blocks.length, n);
          }
          0 == t.fromCharIndex && u.A.getLineStyle(c, "listType") && (c = r.modifyPrefix(c));
        } else if (l == t.toLineIndex) {
          var f = a.A.blockFromIndex(c, t.toCharIndex),
            y = f ? f.blockIndex : c.blocks.length;
          c = this.modifyStyleForLineFrom(c, r, 0, y, n), u.A.getLineStyle(c, "listType") && (c = r.modifyPrefix(c));
        } else c = this.modifyStyleForLine(i[l], r, n), u.A.getLineStyle(c, "listType") && (c = r.modifyPrefix(c));
        c = this.joinBlocksAndNormalizeStyleForLine(c), o[l] = c;
      }
      return s.A.update(i, o);
    }
    splitBySelection(e, t) {
      if (t.isCurrentLevelSameRoute()) return e;
      if (t.fromLineIndex == t.toLineIndex) {
        var r = this.splitBlockInLine(e[t.fromLineIndex], t.fromCharIndex);
        return (r = this.splitBlockInLine(r, t.toCharIndex)) == e[t.fromLineIndex] ? e : s.A.setIndex(e, t.fromLineIndex, r);
      }
      var n = this.splitBlockInLine(e[t.fromLineIndex], t.fromCharIndex),
        i = this.splitBlockInLine(e[t.toLineIndex], t.toCharIndex),
        o = {};
      return o[t.fromLineIndex] = n, o[t.toLineIndex] = i, s.A.update(e, o);
    }
    removeSelection(e, t) {
      if (t.isTabularRoute()) {
        var r = t.getTabularSelectedKeys(),
          n = e[t.fromLineIndex],
          i = a.A.blockFromIndex(n, t.fromCharIndex),
          o = a.A.cloneCompositeBlockWithNewElements(i.block);
        r.forEach(e => o.elements[e] = s.A.setProp(o.elements[e], "lines", d.A.createEmptyEditor().lines));
        var l = this.replaceBlock(n, o, i.blockIndex);
        return s.A.setIndex(e, t.fromLineIndex, l);
      }
      if (t.fromLineIndex == t.toLineIndex) {
        var c = this.removeSelectionInLine(e[t.fromLineIndex], t.fromCharIndex, t.toCharIndex);
        return s.A.setIndex(e, t.fromLineIndex, c);
      }
      var h = e[t.fromLineIndex],
        p = e[t.toLineIndex],
        u = e.slice(0, t.fromLineIndex).concat(this.joinLines(this.removeLineFrom(h, t.fromCharIndex).concat(this.removeLineUntil(p, t.toCharIndex)))).concat(e.slice(t.toLineIndex + 1));
      return this.preserveOneLineIfEmpty(u);
    }
    preserveOneLineIfEmpty(e) {
      return e.length >= 1 ? e : [{
        id: e[0].id,
        blocks: []
      }];
    }
    getSelectionDataInLine(e, t, r) {
      var n, i;
      if (t == r) return j(j({}, e), {}, {
        blocks: [],
        style: void 0
      });
      var o = this.removeLineFrom(e, r);
      if (0 == o.length) return j(j({}, e), {}, {
        blocks: [],
        style: void 0
      });
      if (0 == (o = this.removeLineUntil(o[0], t)).length) return j(j({}, e), {}, {
        blocks: [],
        style: void 0
      });
      var s = o[0],
        a,
        l;
      return s.blocks == e.blocks ? s : null !== (n = s.style) && void 0 !== n && n.align || null !== (i = s.style) && void 0 !== i && i.textDirection ? j(j({}, s), {}, {
        style: {
          align: null === (a = s.style) || void 0 === a ? void 0 : a.align,
          textDirection: null === (l = s.style) || void 0 === l ? void 0 : l.textDirection
        }
      }) : j(j({}, s), {}, {
        style: void 0
      });
    }
    removeSelectionInLine(e, t, r) {
      return t == r ? e : this.joinLines(this.removeLineFrom(e, t).concat(this.removeLineUntil(e, r)));
    }
    joinLines(e) {
      if (0 == e.length) throw new Error("no lines to join");
      if (1 == e.length) return e[0];
      for (var t = e[0].blocks, r = 1; r < e.length; r++) {
        var n = e[r],
          i = t.concat(n.blocks);
        t = i = this.joinBlocksIfPossible(i, t.length - 1);
      }
      return s.A.setProp(e[0], "blocks", t);
    }
    removeLineFrom(e, t) {
      var r = e.blocks,
        n = a.A.blockEach(e, (e, n, i, o) => {
          if (t == i) return r.slice(0, n);
          if (t >= i && t <= o) {
            var s = l.A.splitBlock(e, t - i);
            return r.slice(0, n).concat([s[0]]);
          }
        });
      return null == n ? [e] : 0 == n.length ? [s.A.setProp(e, "blocks", [])] : [s.A.setProp(e, "blocks", n)];
    }
    removeLineUntil(e, t) {
      if (0 == t) return [e];
      var r = e.blocks,
        n = a.A.blockEach(e, (e, n, i, o) => {
          if (t == i) return r.slice(n);
          if (t >= i && t <= o) {
            var s = l.A.splitBlock(e, t - i);
            return [s[s.length - 1]].concat(r.slice(n + 1));
          }
        });
      return null == n || 0 == n.length ? [s.A.setProp(e, "blocks", [])] : [s.A.setProp(e, "blocks", n)];
    }
  }
  const N = new _();
};
