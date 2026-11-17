/* module 49812 — 9716 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(61848),
    a = r(97372),
    l = r(73524),
    c = r(91783),
    d = r(86081),
    h = r(90437),
    p = r(11742),
    u = r(98095);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f {
    replaceBlockInEditor(e, t, r) {
      var n = e.lines[t],
        i = s.A.replaceArrayByEntity(n.blocks, r),
        o = m(m({}, n), {}, {
          blocks: i
        }),
        a = s.A.replaceArrayByEntity(e.lines, o);
      return m(m({}, e), {}, {
        lines: a
      });
    }
    isControlledSelected(e) {
      return !!e && (!!e.controlled || !!e.selected && this.isControlledSelected(e.selected));
    }
    setLineTag(e, t) {
      return t && null == t.tagId && (t = s.A.setProp(t, "tagId", "tid" + Math.random())), s.A.setProp(e, "tagInfo", t);
    }
    traverseDown(e, t, r) {
      var n = t.lineIndex,
        i = t.charIndex,
        o = this.blockFromIndex(e.lines[n], i);
      if (!o || !o.block) return null;
      if (r && r(o.block, t)) return o.block;
      if (!t.selected) return null;
      var s = o.block.elements[t.key];
      return this.traverseDown(s, t.selected, r);
    }
    getSelectedBlockFromRoot(e, t) {
      var r = t.lineIndex,
        n = t.charIndex,
        i = this.blockFromIndex(e.lines[r], n);
      if (!t.selected) return i ? i.block : null;
      if (!i) return null;
      var o = i.block.elements[t.key];
      return this.getSelectedBlockFromRoot(o, t.selected);
    }
    getParentSelectedBlockFromRoot(e, t) {
      var r = t.lineIndex,
        n = t.charIndex,
        i = this.blockFromIndex(e.lines[r], n);
      if (!t.selected) return null;
      if (!t.selected.selected) return i ? i.block : null;
      var o = i.block.elements[t.key];
      return this.getParentSelectedBlockFromRoot(o, t.selected);
    }
    getSelectedLineFromRoot(e, t) {
      var r = t.lineIndex;
      if (!t.selected) return e.lines[r];
      var n = t.charIndex,
        i,
        o = this.blockFromIndex(e.lines[r], n).block.elements[t.key];
      return this.getSelectedLineFromRoot(o, t.selected);
    }
    getSelectedEditor(e, t) {
      if (!t.selected) return e;
      var r = t.lineIndex,
        n = t.charIndex,
        i,
        o = this.blockFromIndex(e.lines[r], n).block.elements[t.key];
      return this.getSelectedEditor(o, t.selected);
    }
    findTabularBlock(e, t) {
      var r = t.lineIndex;
      if (!t.selected) return null;
      var n = t.charIndex,
        i = this.blockFromIndex(e.lines[r], n),
        o = i.block.elements[t.key],
        s = this.findTabularBlock(o, t.selected);
      return s || (t.key && h.Z.isKeyInTabularFormat(t.key) ? i.block : null);
    }
    nextTagId() {
      return "tid" + Math.random();
    }
    findParentSelectedOf(e, t) {
      return null == e.selected ? null : e.selected == t ? e : this.findParentSelectedOf(e.selected, t);
    }
    findLeafKeysJoinedSelected(e) {
      return e.keys ? e.keys : e.selected && (e.selected.key || e.selected.keys) ? this.findLeafKeysJoinedSelected(e.selected) : e.key ? [e.key] : [];
    }
    findLeafSelected(e) {
      return e ? e.selected ? this.findLeafSelected(e.selected) : e : null;
    }
    findLeafParentSelected(e) {
      return e && e.selected ? e.selected.selected ? this.findLeafParentSelected(e.selected) : e : null;
    }
    changeLeafSelected(e, t) {
      if (!e.selected) return m(m({}, e), t);
      var r = o().cloneDeep(e),
        n = this.findLeafParentSelected(r);
      return n.selected = m(m({}, n.selected), t), r;
    }
    clearLeafLevel(e) {
      if (!e.selected) return o().clone(e);
      var t = o().cloneDeep(e),
        r = this.findLeafParentSelected(t);
      return r.key = void 0, r.selected = void 0, t;
    }
    isAnyLowerBigLastLine(e) {
      var t = o().last(e.lines);
      return o().some(t.blocks, e => a.A.isTextBlock(e) ? c.A.isAnyLowerBig(e.text) : !!a.A.isNonTextBlock(e) || void 0);
    }
    isAnyUpperBigFirstLine(e) {
      var t = o().first(e.lines);
      return o().some(t.blocks, e => a.A.isTextBlock(e) ? c.A.isAnyUpperBig(e.text) : !!a.A.isNonTextBlock(e) || void 0);
    }
    isEmptyOrOneTextEditor(e) {
      if (!e) return !0;
      if (p.A.makeSureLines(e), e.lines.length > 1 || e.lines[0].blocks.length > 1) return !1;
      var t = e.lines[0].blocks[0];
      return null == t || a.A.isTextBlock(t) && 1 == t.text.length;
    }
    cloneCompositeBlockWithNewElements(e) {
      return m(m({}, e), {}, {
        elements: m({}, e.elements)
      });
    }
    isSingleLineEditor(e) {
      return e.lines.length <= 1;
    }
    isSingeLineBlockInLine(e) {
      return 1 == e.blocks.length && d.A.isSingeLineBlock(e.blocks[0]);
    }
    isLineWithSingleBlockLine(e) {
      return 1 == e.blocks.length && d.A.isSingeLineBlock(e.blocks[0]);
    }
    isLineWithSingleTheorem(e) {
      return 1 == e.blocks.length && d.A.isTheorem(e.blocks[0]);
    }
    isFirstLineWithSingleBlockLine(e) {
      return !(e.length <= 0) && this.isLineWithSingleBlockLine(e[0]);
    }
    isLastLineWithSingleBlockLine(e) {
      return !(e.length <= 0) && this.isLineWithSingleBlockLine(e[e.length - 1]);
    }
    isSqrtLatexName(e) {
      return "\\sqrt" == e;
    }
    isFracLatexName(e) {
      return "\\frac" == e;
    }
    isFracClassLatexName(e) {
      return "\\frac" == e || "\\cfrac" == e || "\\dfrac" == e || "\\tfrac" == e;
    }
    isTheoremLatexName(e) {
      return "\\theorem" == e;
    }
    getChildModelKeys(e) {
      return o().keys(e.elements);
    }
    cloneCompositeWithoutStyle(e) {
      return s.A.setProp(e, "style", void 0);
    }
    isEmptyLine(e) {
      return 0 == e.blocks.length;
    }
    isEditorEmpty(e) {
      return !e || 1 == e.lines.length && 0 == e.lines[0].blocks.length;
    }
    isEditorEmptyCheckTag(e) {
      return !e || 1 == e.lines.length && 0 == e.lines[0].blocks.length && !e.tagInfo;
    }
    blockEach(e, t) {
      for (var r = 0, n = 0; n < e.blocks.length; n++) {
        var i = e.blocks[n],
          o = r,
          s = a.A.getCharCount(i),
          l,
          c = t(i, n, o, r + s - 1, e.blocks[n - 1]);
        if (c) return c;
        r += s;
      }
    }
    getBlocksInfo(e) {
      var t = [];
      return this.blockEach(e, (e, r, n, i) => {
        t.push({
          block: e,
          blockIndex: r,
          start: n,
          end: i
        });
      }), t;
    }
    getTotalChar(e) {
      return o().sumBy(e, e => a.A.getCharCount(e));
    }
    getTotalCharLastLine(e) {
      var t = o().last(e.lines);
      return this.getTotalChar(t.blocks);
    }
    blockFromIndex(e, t) {
      return this.blockEach(e, (e, r, n, i) => {
        if (t >= n && t <= i) return {
          block: e,
          blockIndex: r,
          startIndex: n,
          endIndex: i
        };
      });
    }
    getBlockFromLineCharIndex(e, t, r) {
      var n = e.lines[t],
        i = this.blockFromIndex(n, r);
      return i ? i.block : null;
    }
    blockIndexFromCharIndex(e, t) {
      for (var r = 0, n = 0; n < e.blocks.length; n++) {
        var i = e.blocks[n],
          o = r,
          s = r + a.A.getCharCount(i) - 1;
        if (t >= o && t <= s) return n;
        r += a.A.getCharCount(i);
      }
      return e.blocks.length - 1;
    }
    buildSelectedForInsertedNewModel(e, t) {
      if (a.A.isNonTextBlock(e)) {
        var r = this.getChildModelKeys(e);
        if (r.length > 0) {
          var n = u.A.getMetaDataByName(e.text);
          return null != n && n.keyInsertCursor && r.includes(n.keyInsertCursor) ? m(m({}, t), {}, {
            key: n.keyInsertCursor,
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          }) : s.A.update(t, {
            key: r[0],
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          });
        }
        return s.A.update(t, {
          charIndex: t.charIndex + 1,
          selected: null
        });
      }
      return s.A.update(t, {
        charIndex: t.charIndex + l.Ay.lengthByCache(e),
        selected: null
      });
    }
    toRawIndex(e, t) {
      var r = 0,
        n = 0;
      return this.blockEach(e, (e, i, o, s) => {
        if (o <= t && t <= s) return n = e.type ? r : r + l.Ay.rawIndexAt(e, t - o);
        r += e.type ? 1 : e.text.length;
      }), n;
    }
    toCharIndex(e, t) {
      var r = 0,
        n = 0;
      return this.blockEach(e, (e, i, o) => {
        var s = e.type ? 1 : e.text.length;
        if (r <= t && t <= r + s - 1) return n = e.type ? o : o + l.Ay.clusterIndexAt(e, t - r);
        r += s;
      }), n;
    }
    isSingleCharEditor(e) {
      if (!e) return !1;
      if (1 != e.lines.length) return !1;
      var t = e.lines[0].blocks;
      if (1 != t.length) return !1;
      var r = t[0];
      return !r.type && 1 == r.text.length;
    }
  }
  const y = new f();
};
