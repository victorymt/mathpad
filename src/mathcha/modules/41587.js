/* module 41587 — 28714 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    h: () => U,
    A: () => q
  });
  var n = r(87695),
    i = r(64467),
    o = r(2543),
    s = r.n(o),
    a = r(49812),
    l = r(61848),
    c = r(86745),
    d = r(13620),
    h = r(30803),
    p = r(98095),
    u = r(27271),
    g = r(97372),
    m = r(7849),
    f = r(56069),
    y = r(77137),
    v = r(86081);
  function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C {
    processVisitResult(e) {
      return this.processForCheckbox(e);
    }
    processForCheckbox(e) {
      try {
        var t = e.editorSelected.lineIndex;
        if (t <= 0) return e;
        var r = t - 1,
          n = e.editorModel.lines[r];
        if (n.blocks.length <= 1 || !v.A.isCheckbox(n.blocks[0])) return e;
        var i = e.editorModel.lines[t],
          o = x(x({}, i), {}, {
            blocks: [p.A.getModelByName("\\checkbox")].concat(i.blocks)
          });
        return x(x({}, e), {}, {
          editorModel: x(x({}, e.editorModel), {}, {
            lines: l.A.setIndex(e.editorModel.lines, e.editorSelected.lineIndex, o)
          }),
          editorSelected: x(x({}, e.editorSelected), {}, {
            charIndex: 1
          })
        });
      } catch (e) {}
      return e;
    }
  }
  const S = new C();
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class E {
    processVisitResult(e) {
      return this.processForCheckbox(e);
    }
    processForCheckbox(e) {
      try {
        var t = e.editorSelected.lineIndex,
          r = e.editorModel.lines[t];
        if (1 != r.blocks.length || !v.A.isCheckbox(r.blocks[0]) || 1 != e.editorSelected.charIndex) return null;
        var n = w(w({}, r), {}, {
          blocks: []
        });
        return w(w({}, e), {}, {
          editorModel: w(w({}, e.editorModel), {}, {
            lines: l.A.setIndex(e.editorModel.lines, e.editorSelected.lineIndex, n)
          }),
          editorSelected: w(w({}, e.editorSelected), {}, {
            charIndex: 0
          })
        });
      } catch (e) {}
      return null;
    }
  }
  const k = new E();
  var O = r(63241),
    D = r(23017),
    P = r(3502),
    M = r(90437),
    I = r(70224),
    T = r(65620),
    L = r(76001),
    R = r(47858),
    B = r(3453);
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _ {
    shouldHandleInsertBracketAround(e, t) {
      if (t.isMathModeSelected() && t.extendedCursorSelected) {
        var r = this.extractBracket(e);
        return "|" == r || "(" == r || "[" == r || "{" == r || "<" == r;
      }
    }
    getBracketAroundPair(e) {
      var t = this.extractBracket(e);
      switch (t) {
        case "|":
          return [I.A.createSingleBlock("\\left|"), I.A.createSingleBlock("\\right|")];
        case "{":
          return [I.A.createSingleBlock("{"), I.A.createSingleBlock("}")];
        case "[":
          return [I.A.createSingleBlock("["), I.A.createSingleBlock("]")];
        case "(":
          return [I.A.createSingleBlock("("), I.A.createSingleBlock(")")];
        case "<":
          return [I.A.createSingleBlock("\\left\\angle"), I.A.createSingleBlock("\\right\\angle")];
      }
      throw new Error("unsupported bracket around:" + t);
    }
    insertPairsTo(e, t, r, n, i) {
      var o = {
          isTextMode: i.isTextModeSelected(),
          isRootLine: i.isRootLineSelected(),
          shortcutMatcher: i.shortcutMatcher,
          isCodeSection: i.insideCodeSection(),
          isInsideTextSymbol: i.isInsideTextSymbol(),
          liDefaultsProvider: i.liDefaultsProvider
        },
        s = d.A.insertModelAt(e, t.charIndex, r[0], o).line,
        l = d.A.insertLinesAt(s, t.charIndex + 1, [n], i.isTextModeSelected()),
        c;
      s = (0, B.A)(l, 1)[0];
      var h = t.charIndex + a.A.getTotalChar(n.blocks) + 1;
      return [s = d.A.insertModelAt(s, h, r[1], o).line, j(j({}, t), {}, {
        charIndex: h + 1
      })];
    }
    extractBracket(e) {
      var t = e;
      return "single" == e.type && (t = e.text), t;
    }
  }
  var N = new _(),
    z = r(22012);
  function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function W(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class V {
    constructor() {
      (0, i.A)(this, "zSpecMathcher", void 0);
    }
    getSelectionData(e) {
      return null == e.extendedCursorSelected ? [] : (c.A.handleEditor(e, e => (null == e.selection || (t = d.A.getSelectionData(e.editorModel.lines, e.selection)), null), !1), t || []);
      var t;
    }
    extractDiagramSelected(e) {
      var t = e.selectedBlockModel,
        r = T.A.getSelectedIdsOrUndefined(e.leafCursorSelected);
      if (!r || r.length <= 0) return [I.A.createLineFromBlock(t)];
      var n = f.A.extractSelectedEntities(t, new Set(r));
      return [I.A.createLineFromBlock(n)];
    }
    insertLines(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0;
      return t.isDiagramSelected ? c.A.handleEditor(t, r => {
        var i = t.selectedBlockModel,
          o = f.A.mergeLines(e, i, r.editorSelected, {
            retainShapesInHeight: !!n,
            docWidth: t.docWidth(),
            dgInstance: null == n ? void 0 : n.dgInstance,
            originalPastedLines: n.lines
          }),
          s = a.A.blockIndexFromCharIndex(r.editorModel.lines[r.editorSelected.lineIndex], r.editorSelected.charIndex),
          l;
        return {
          editorModel: d.A.replaceBlockInEditor(r.editorModel, o.block, r.editorSelected.lineIndex, s),
          editorSelected: o.selected
        };
      }) : !t.findBinomSelected() && !t.isPlotCasesSelected() && n && n.isTextMode === t.isTextModeSelected() && n && n.isTabularCellsSelected && (t.isAtTabularCell() || t.isTabularCellsSelected()) ? e[0].blocks.length <= 0 ? null : c.A.travelForTabular(t, t => {
        var r = M.Z.getMinMaxTabularKeyIndex(t.keys),
          n = M.Z.getKeyFromRowCol(r.minRow, r.minCol),
          i = u.A.replaceAtKey(t.block, n, e[0].blocks[0]),
          o;
        return {
          editorModel: d.A.replaceBlockInEditor(t.editor, i, t.selected.lineIndex, t.blockIndex),
          editorSelected: l.A.update(t.selected, {
            key: n,
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
      }) : (t.isAtSubSuperScript() && e.length > 1 && (e = [e[0]]), c.A.handleEditor(t, n => this.insertLinesToLine(t.isTextModeSelected(), e, r, n)));
    }
    replaceLines(e, t, r) {
      return c.A.handleEditor(e, e => this.insertLinesToLine(t, r, !1, e));
    }
    insertLinesToLine(e, t, r, n) {
      var i = n.editorSelected.lineIndex,
        o = n.editorModel.lines[i],
        l = d.A.insertLinesAt(o, n.editorSelected.charIndex, t, e),
        h = n.editorSelected;
      return r || ((h = s().clone(n.editorSelected)).lineIndex = i + l.length - 1, a.A.isLastLineWithSingleBlockLine(t) && !a.A.isLastLineWithSingleBlockLine(l) ? h.charIndex = 0 : h.charIndex = a.A.getTotalChar(t[t.length - 1].blocks), 1 == l.length && (h.charIndex += n.editorSelected.charIndex)), c.A.updateLinesToVisitResult(n, l, h);
    }
    insertInput(e, t, r) {
      var n;
      t.insideZSpec() && (this.zSpecMathcher || (this.zSpecMathcher = new O.p(!1), this.zSpecMathcher.setShortcutModels(D.A.getForZSpec())), (t = s().clone(t)).shortcutMatcher = this.zSpecMathcher);
      var i = N.shouldHandleInsertBracketAround(e, t),
        o = c.A.handleEditor(t, n => this.insertInputToLine(t, e, r, n, i), !0, i || g.A.isCompositeBlockWithNestedEditor(e));
      if (o.editorSelected && !o.editorExtendedSelected && null !== (n = o.customData) && void 0 !== n && n.extendedCharCount) {
        var l,
          d = s().cloneDeep(o.editorSelected),
          h;
        a.A.findLeafSelected(d).charIndex += null === (l = o.customData) || void 0 === l ? void 0 : l.extendedCharCount, o = W(W({}, o), {}, {
          editorExtendedSelected: d
        });
      }
      return o;
    }
    insertTabForCodeSection(e, t) {
      if (e.isInSelection()) return t ? this.handleUnTabOnSelectionForCodeSection(e) : this.handleTabOnSelectionForCodeSection(e);
      if (t) return this.handleUnTabForCodeSection(e);
      var r = "  ";
      return c.A.handleEditor(e, t => this.insertInputToLine(e, r, void 0, t, !1), !0, g.A.isCompositeBlockWithNestedEditor(r));
    }
    handleUnTabForCodeSection(e) {
      return c.A.handleEditor(e, e => {
        var t = e.editorSelected,
          r = e.editorModel.lines[t.lineIndex],
          i = (0, n.A)(r.blocks),
          o = i[0],
          s = i.slice(1),
          a = W(W({}, r), {}, {
            blocks: [W(W({}, o), {}, {
              text: this.remove2SpacesAtStart(o.text)
            }), ...s]
          }),
          c = l.A.setIndex(e.editorModel.lines, t.lineIndex, a),
          d = a.blocks[0].text.length - r.blocks[0].text.length;
        return {
          editorModel: W(W({}, e.editorModel), {}, {
            lines: c
          }),
          editorSelected: W(W({}, t), {}, {
            charIndex: Math.max(t.charIndex + d, 0)
          })
        };
      }, !0);
    }
    handleUnTabOnSelectionForCodeSection(e) {
      return c.A.handleEditor(e, e => {
        for (var t = e.editorModel.lines, r = s().clone(t), i = e.selection.fromLineIndex; i <= e.selection.toLineIndex; i++) {
          var o = t[i],
            a = (0, n.A)(o.blocks),
            l = a[0],
            c = a.slice(1);
          r[i] = W(W({}, o), {}, {
            blocks: [W(W({}, l), {}, {
              text: this.remove2SpacesAtStart(l.text)
            }), ...c]
          });
        }
        var d = e.selection.orginalFromSelected || e.selection.fromSelected,
          h = e.selection.orginalToSelected || e.selection.toSelected,
          p = r[d.lineIndex].blocks[0].text.length - t[d.lineIndex].blocks[0].text.length,
          u = r[h.lineIndex].blocks[0].text.length - t[h.lineIndex].blocks[0].text.length;
        return {
          editorModel: W(W({}, e.editorModel), {}, {
            lines: r
          }),
          editorSelected: W(W({}, d), {}, {
            charIndex: Math.max(0, d.charIndex + p)
          }),
          editorExtendedSelected: W(W({}, h), {}, {
            charIndex: Math.max(0, h.charIndex + u)
          })
        };
      }, !1);
    }
    remove2SpacesAtStart(e) {
      return e.startsWith("  ") ? e.substr(2) : e.startsWith(" ") ? e.substr(1) : e;
    }
    handleTabOnSelectionForCodeSection(e) {
      return c.A.handleEditor(e, e => {
        for (var t = e.editorModel.lines, r = s().clone(t), i = e.selection.fromLineIndex; i <= e.selection.toLineIndex; i++) {
          var o = t[i],
            a = (0, n.A)(o.blocks),
            l = a[0],
            c = a.slice(1);
          r[i] = W(W({}, o), {}, {
            blocks: [W(W({}, l), {}, {
              text: "  " + l.text
            }), ...c]
          });
        }
        var d = e.selection.orginalFromSelected || e.selection.fromSelected,
          h = e.selection.orginalToSelected || e.selection.toSelected;
        return {
          editorModel: W(W({}, e.editorModel), {}, {
            lines: r
          }),
          editorSelected: W(W({}, d), {}, {
            charIndex: d.charIndex + 2
          }),
          editorExtendedSelected: W(W({}, h), {}, {
            charIndex: h.charIndex + 2
          })
        };
      }, !1);
    }
    assignRemovedLine(e, t, r) {
      if (t.removedLines && g.A.isCompositeBlockWithNestedEditor(e)) {
        var n = s().first(s().keys(e.elements)),
          i = p.A.getMetaDataByName(e.text);
        if (i && i.noInnerInsert) return e;
        i && i.keyInsertOnSelection && (n = i.keyInsertOnSelection), v.A.isTabularCompositeBlock(e) && (n = "0_0");
        var o,
          a = m.A.processLinesTo({
            inlineMathDisplayStyle: !1,
            isInsideInlineMath: !1,
            isPureText: !1,
            isTextMode: r.isTextModeSelected(),
            lines: t.removedLines
          }, {
            isTextMode: v.A.isTable(e) || v.A.isTheorem(e),
            isTextSymbol: v.A.isTextSymbol(e),
            isTheorem: r.isInsideTheorem(),
            isTable: r.isTableSelected(),
            rootSymbolSupports: null
          }).lines,
          l;
        return W(W({}, e), {}, {
          elements: W(W({}, e.elements), {}, {
            [n]: I.A.createEditorWith(a)
          })
        });
      }
      return e;
    }
    insertInputToLine(e, t, r, n, i) {
      if (e.isTextModeSelected() && "string" == typeof t && n.removedLines && 1 == n.removedLines.length) {
        var o = n.removedLines[0].blocks;
        1 == o.length && " " == o[0].text && v.A.isTextBlockModel(o[0]) && s().keys(o[0].style || {}).length > 0 && (t = I.A.createTextBlock(t, {
          style: s().clone(o[0].style)
        }));
      }
      var p = n.editorSelected.lineIndex,
        u = n.editorModel.lines[p];
      if (i && n.removedLines && 1 == n.removedLines.length) {
        console.log("should handle bracket around");
        var g = N.getBracketAroundPair(t),
          m = N.insertPairsTo(u, n.editorSelected, g, n.removedLines[0], e);
        return c.A.updateLineToVisitResult(n, m[0], m[1]);
      }
      var f = !1,
        y;
      if (!s().isString(t) && v.A.isComposite(t) && "\\theorem" == t.text && (n.editorSelected.charIndex > 0 || u.blocks.length > 0) && (f = !0), t = this.assignRemovedLine(t, n, e), f) {
        var b = this.insertToNextSingleBlockLine(t, n),
          x = n.editorSelected;
        return {
          editorModel: b,
          editorSelected: x = l.A.update(x, {
            lineIndex: x.lineIndex + 1,
            charIndex: 0,
            key: "theorem",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
      }
      if (s().isString(t)) y = {
        id: h.w.nextId(),
        text: t
      };else {
        var C, S, A, w;
        if (v.A.isComposite(t) && "\\math-container" == t.text && t.displayMode || "\\multiline" == t.text) return {
          editorModel: this.insertToNextSingleBlockLine(t, n),
          editorSelected: l.A.update(n.editorSelected, {
            lineIndex: n.editorSelected.lineIndex + 1,
            charIndex: 0,
            key: "mathValue",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
        if (v.A.isComposite(t) && "\\align" == t.text || "\\gather" == t.text) return {
          editorModel: this.insertToNextSingleBlockLine(t, n),
          editorSelected: l.A.update(n.editorSelected, {
            lineIndex: n.editorSelected.lineIndex + 1,
            charIndex: 0,
            key: "0_0",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
        if (r && r.singleBlockLine || f) return {
          editorModel: this.insertToNextSingleBlockLine(t, n),
          editorSelected: w = r.selectControlled ? W(W({}, n.editorSelected), {}, {
            lineIndex: n.editorSelected.lineIndex + 1,
            charIndex: 0,
            controlled: !0
          }) : W(W({}, n.editorSelected), {}, {
            lineIndex: n.editorSelected.lineIndex + 1,
            charIndex: 0,
            key: s().keys(t.elements)[0],
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
        y = t;
      }
      var E = e.isTextModeSelected(),
        k = d.A.insertModelAt(u, n.editorSelected.charIndex, y, {
          isTextMode: E,
          isRootLine: e.isRootLineSelected(),
          shortcutMatcher: e.shortcutMatcher,
          isCodeSection: e.insideCodeSection(),
          isInsideTextSymbol: e.isInsideTextSymbol(),
          liDefaultsProvider: e.liDefaultsProvider
        }),
        O = n.editorSelected;
      k.selected ? (k.selected.lineIndex = p, O = l.A.update(O, k.selected)) : O = a.A.buildSelectedForInsertedNewModel(y, n.editorSelected), null != r && r.selectControlled && (O = W(W({}, O), {}, {
        charIndex: O.charIndex - 1,
        controlled: !0
      }));
      var D = k.line;
      E && !e.disableAutoAlignRTL() && (D = this.handleRTLAutoDetect(y, D));
      var P = c.A.updateLineToVisitResult(n, D, O);
      return k.extendedCharCount && !P.customData && (P.customData = {
        extendedCharCount: k.extendedCharCount
      }), P;
    }
    handleRTLAutoDetect(e, t) {
      var r, n;
      return "rtl" == (null === (r = t.style) || void 0 === r ? void 0 : r.textDirection) ? t : v.A.isTextBlockModel(e) && L.F.isRTL(e.text) ? (t.rtla || null !== (n = (t = R.A.setLineStyle(t, "textDirection", "rtl")).style) && void 0 !== n && n.align || (t = W(W({}, t = R.A.setLineStyle(t, "align", "right")), {}, {
        rtla: !0
      })), t) : t;
    }
    replaceTextForComposition(e, t, r, n) {
      var i = {
        isTextMode: n.isTextModeSelected(),
        shortcutMatcher: n.shortcutMatcher,
        isRootLine: n.isRootLineSelected(),
        isCodeSection: n.insideCodeSection(),
        isInsideTextSymbol: n.isInsideTextSymbol(),
        liDefaultsProvider: n.liDefaultsProvider
      };
      return c.A.handleEditor(n, this.replaceTextToLineForComposition.bind(this, e, t, r, i));
    }
    replaceTextToLineForComposition(e, t, r, n, i) {
      var o = i.editorSelected.lineIndex,
        s = i.editorModel.lines[o],
        h = a.A.blockFromIndex(s, t);
      if (!h || !h.block) return y.A.warn("Composition wrong: replace Text To Line with Block null"), null;
      if (h.block.type) return y.A.warn("Composition wrong: replace Text for Block which is composite"), null;
      var p = d.A.replaceTextInBlockForComposition(t - h.startIndex, r, e, h.block, n),
        u = W(W({}, i.editorSelected), {}, {
          charIndex: i.editorSelected.charIndex + p.delta.charIndex,
          key: p.delta.key,
          selected: p.delta.selected
        }),
        g = {
          stopComposition: p.stopComposition
        };
      if (i.customData = g, 0 == p.blocks.length) {
        var m = d.A.removeBlock(s, h.blockIndex);
        return c.A.updateLineToVisitResult(i, m, u);
      }
      var f = l.A.replaceWithArray(s.blocks, h.blockIndex, 1, p.blocks),
        v = W(W({}, s), {}, {
          blocks: f
        });
      return p.shouldNormalizeLine && (v = d.A.joinBlocksAndNormalizeStyleForLine(v)), c.A.updateLineToVisitResult(i, v, u);
    }
    insertNewLine(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return c.A.handleEditor(e, this.insertNewLineToEditor.bind(this, t));
    }
    supportEnterToNextRow(e) {
      return !v.A.isTable(e) && !v.A.isBinom(e) && !v.A.isLatexTable(e);
    }
    insertNewLineToEditor(e, t) {
      if (!e && t.compositeKey && v.A.isTabularCompositeBlock(t.compositeParent) && this.supportEnterToNextRow(t.compositeParent)) return t.compositeParent.row >= 100 ? null : {
        uplevelHandler(e, r) {
          var n = e.editorModel.lines[e.editorSelected.lineIndex],
            i = a.A.blockFromIndex(n, e.editorSelected.charIndex),
            o = u.A.insertNewRowBelow(i.block, e.editorSelected.key),
            s;
          return {
            editorModel: d.A.replaceBlockInEditor(e.editorModel, o, e.editorSelected.lineIndex, i.blockIndex),
            editorSelected: l.A.update(e.editorSelected, {
              key: M.Z.nextRowFormKey(t.compositeKey),
              selected: {
                lineIndex: 0,
                charIndex: 0
              }
            }),
            customData: {
              isOneLineChanged: !0
            }
          };
        }
      };
      var r = k.processVisitResult(t);
      if (r) return r;
      var n = t.editorSelected.lineIndex,
        i = t.editorModel.lines[n],
        o = t.editorModel,
        s = d.A.splitLineAt(i, t.editorSelected.charIndex),
        c = o.lines.slice(0, t.editorSelected.lineIndex).concat(s).concat(o.lines.slice(t.editorSelected.lineIndex + 1)),
        h = {
          editorModel: l.A.set(o, "lines", c),
          editorSelected: {
            lineIndex: t.editorSelected.lineIndex + 1,
            charIndex: 0
          },
          customData: {
            isOneLineChanged: null != t.compositeKey
          }
        };
      return S.processVisitResult(h);
    }
    insertToNextSingleBlockLine(e, t) {
      var r = t.editorSelected.lineIndex,
        n = t.editorModel.lines[r],
        i = t.editorModel,
        o = d.A.splitLineAt(n, t.editorSelected.charIndex),
        s = {
          id: h.w.nextId(),
          blocks: [e]
        };
      o = [o[0], s, o[1]];
      var a = i.lines.slice(0, t.editorSelected.lineIndex).concat(o).concat(i.lines.slice(t.editorSelected.lineIndex + 1));
      return l.A.setProp(i, "lines", a);
    }
    removeSelection(e) {
      return c.A.handleEditor(e, e => e);
    }
    removeCurrent(e, t) {
      var r = c.A.handleEditor(e, this.removeCurrentFromEditor.bind(this, t));
      return r && null != r.customData && null == r.editorModel ? new U(e.cursorSelected, r.customData.key || r.customData.keys) : r;
    }
    removeCurrentForDelete(e, t) {
      var r = c.A.handleEditor(e, this.removeCurrentFromEditorForDelete.bind(this, t));
      return r && null != r.customData && null == r.editorModel ? new U(e.cursorSelected, r.customData.key || r.customData.keys) : r;
    }
    handleConfirmDelete(e) {
      if (v.A.isLongDivision(e.compositeParent)) {
        if (!z.t.isRemainderKey(e.compositeKey)) return {
          customData: {
            key: void 0
          }
        };
        var t = z.t.parseRemainderIndex(e.compositeKey);
        return {
          customData: {
            keys: P.A.getRemainderPairFromIndex(t)
          }
        };
      }
      if (v.A.isTabularNotBinomAndTableAndLatexTable(e.compositeParent)) return {
        customData: {
          key: e.compositeKey
        }
      };
      var r = p.A.getMetaDataByName(e.compositeParent.text);
      if (!r || r.noInnerRemove) return null;
      if (!r.elements[e.compositeKey]) return null;
      var n = r.elements[e.compositeKey].onRemove;
      return "only" == n || "all" == n ? {
        customData: {
          key: "only" == n ? e.compositeKey : void 0
        }
      } : void 0;
    }
    removeCurrentFromEditor(e, t) {
      if (t.usedToHasSelection) return W(W({}, t), {}, {
        customData: {
          isOneLineChanged: t.removedSelectionWithOneLineChanged
        }
      });
      var r = t.editorSelected.lineIndex,
        n = t.editorModel.lines[r];
      if (t.editorSelected.charIndex > 0) {
        var i = d.A.removeCharAt(n, t.editorSelected.charIndex - 1),
          o = l.A.set(t.editorModel.lines, t.editorSelected.lineIndex, i);
        return {
          editorModel: l.A.set(t.editorModel, "lines", o),
          editorSelected: {
            lineIndex: t.editorSelected.lineIndex,
            charIndex: t.editorSelected.charIndex - 1
          },
          customData: {
            isOneLineChanged: !0
          }
        };
      }
      if (t.editorSelected.lineIndex <= 0) return !e && t.compositeParent ? this.handleConfirmDelete(t) : null;
      var c = t.editorModel.lines[t.editorSelected.lineIndex - 1],
        h = a.A.getTotalChar(c.blocks),
        p = s().concat(c.blocks, n.blocks);
      p = d.A.joinBlocksIfPossible(p, c.blocks.length - 1);
      var u = l.A.set(c, "blocks", p),
        g = l.A.set(t.editorModel.lines, t.editorSelected.lineIndex - 1, u);
      return g = l.A.remove(g, t.editorSelected.lineIndex), {
        editorModel: l.A.set(t.editorModel, "lines", g),
        editorSelected: {
          lineIndex: t.editorSelected.lineIndex - 1,
          charIndex: h
        },
        customData: {
          isOneLineChanged: null != t.compositeKey
        }
      };
    }
    removeCurrentFromEditorForDelete(e, t) {
      if (t.usedToHasSelection) return W(W({}, t), {}, {
        customData: {
          isOneLineChanged: t.removedSelectionWithOneLineChanged
        }
      });
      var r = t.editorSelected.lineIndex,
        n = t.editorModel.lines[r],
        i = a.A.getTotalChar(n.blocks);
      if (t.editorSelected.charIndex <= i - 1) {
        var o = d.A.removeCharAt(n, t.editorSelected.charIndex),
          c = l.A.set(t.editorModel.lines, t.editorSelected.lineIndex, o);
        return {
          editorModel: l.A.set(t.editorModel, "lines", c),
          editorSelected: {
            lineIndex: t.editorSelected.lineIndex,
            charIndex: t.editorSelected.charIndex
          },
          customData: {
            isOneLineChanged: !0
          }
        };
      }
      if (t.editorSelected.lineIndex >= t.editorModel.lines.length - 1) return !e && t.compositeParent ? this.handleConfirmDelete(t) : null;
      var h = t.editorModel.lines[t.editorSelected.lineIndex + 1],
        p = s().concat(n.blocks, h.blocks);
      p = d.A.joinBlocksIfPossible(p, n.blocks.length - 1);
      var u = l.A.set(n, "blocks", p),
        g = l.A.set(t.editorModel.lines, t.editorSelected.lineIndex, u);
      return g = l.A.remove(g, t.editorSelected.lineIndex + 1), {
        editorModel: l.A.set(t.editorModel, "lines", g),
        editorSelected: {
          lineIndex: t.editorSelected.lineIndex,
          charIndex: t.editorSelected.charIndex
        },
        customData: {
          isOneLineChanged: null != t.compositeKey
        }
      };
    }
  }
  class U {
    constructor(e, t) {
      (0, i.A)(this, "selected", void 0);
      var r = s().cloneDeep(e),
        n = this.getSecondLeafSelected(r);
      this.selected = r, t instanceof Array ? (n.keys = t, n.key = void 0) : n.key = t, n.selected = void 0;
    }
    getSecondLeafSelected(e) {
      return null == e.selected.selected ? e : this.getSecondLeafSelected(e.selected);
    }
  }
  const q = new V();
};
