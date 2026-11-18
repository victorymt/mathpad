/* module 46086 — 9200 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(30803),
    o = r(2543),
    s = r.n(o),
    a = r(98095),
    l = r(79490),
    c = r(89870),
    d = r(86081),
    h = r(70224),
    p = r(76001),
    u = r(68655),
    g = r(71389);
  class m {
    constructor() {
      (0, n.A)(this, "magicText", "/*!)-*&~n/"), (0, n.A)(this, "map", {}), this.map["∫"] = "\\int", this.map["∬"] = "\\iint", this.map["∭"] = "\\iiint", this.map["∮"] = "\\oint", this.map["∯"] = "\\oiint", this.map["∰"] = "\\oiiint", this.map["∰"] = "\\oiiint", this.map["→"] = "\\rightarrow", this.map["←"] = "\\leftarrow", this.map["∑"] = "\\sum", this.map["∏"] = "\\prod", this.map["∐"] = "\\coprod", this.map["["] = "[", this.map["{"] = "{", this.map["("] = "(", this.map["}"] = "}", this.map["]"] = "]", this.map[")"] = ")";
    }
    cloneBlocks(e, t) {
      var r = {
          id: i.w.nextId(),
          lines: [{
            id: i.w.nextId(),
            blocks: e
          }]
        },
        n = this.stringifyStripId(r);
      return this.anyParse(n, t).lines[0].blocks;
    }
    cloneLine(e, t) {
      var r = {
          id: i.w.nextId(),
          lines: [e]
        },
        n = this.stringifyStripId(r);
      return this.anyParse(n, t).lines[0];
    }
    cloneEditor(e, t) {
      var r = this.stringifyStripId(e),
        n = this.anyParse(r, t);
      return n.id = i.w.nextId(), n;
    }
    stringifyForSave(e) {
      return e ? "string" == typeof e ? e : JSON.stringify(e, function (e, t) {
        if (!u.x.isKeyToIgnoreOnSave(e)) return t;
      }) : null;
    }
    stringifyStripId(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return JSON.stringify(e, function (e, n) {
        if ("id" != e || "n" != n[0]) {
          if (t) return n;
          if (!(e.length > 3 && "_" == e[0] && "_" == e[1] && "_" == e[2])) return r && "theoremKey" == e && r.theoremKeys.push(n), n;
        }
      });
    }
    parseFromSavedModel(e) {
      if (e) return JSON.parse(e);
    }
    parse(e, t) {
      return this.anyParse(e, t);
    }
    anyParse(e, t) {
      var r = {},
        n = [],
        o = JSON.parse(e, (e, o) => ("lines" != e && "blocks" != e && "fnLines" != e || o instanceof Array && o.forEach(e => e.id = i.w.nextId()), "elements" == e && s().values(o).forEach(e => {
          e.id || (e.id = i.w.nextId());
        }), t || (d.A.isDiagramBlock(o) && (o = this.regenerateNewIdForDiagram(o)), "tagInfo" == e && (r[o.tagId] = o), o && o.refTagId && (n[o.refTagId] ? n[o.refTagId].push(o) : n[o.refTagId] = [o])), o));
      return this.handleTagRefMap(r, n), o;
    }
    handleTagRefMap(e, t) {
      s().keys(e).forEach(r => {
        var n = "tid" + Math.random(),
          i;
        e[r].tagId = n;
        var o = t[r];
        o && o.forEach(e => {
          e.refTagId = n;
        });
      });
    }
    generateFunctionIdForPlot(e) {
      e.functions.forEach(e => e.model.id = i.w.nextId());
    }
    reasignShapesId(e, t, r) {
      e.forEach(e => {
        var n = e.id,
          o = null;
        i.w.isDiagramCompositeShapeId(e.id) ? (o = i.w.nextDiagramCompositeShapeId(), "plot" == e.type && this.generateFunctionIdForPlot(e)) : i.w.isDiagramArrowId(e.id) ? o = i.w.nextDiagramArrowId() : i.w.isDiagramShapeId(e.id) ? o = i.w.nextDiagramShapeId() : i.w.isDiagramGroupId(e.id) ? (o = i.w.nextDiagramGroupEntityId(), this.reasignShapesId(e.entities, t, r)) : i.w.isDiagramLinkedId(e.id) && (o = i.w.nextDiagramLinkedEntityId()), o && r && (r[n] = o), t.intersections.items.forEach(t => {
          if (t.entities.length > 1) throw new Error("not supported multiple intersections");
          t.entities[0] == e.id && (t.entities[0] = o);
        }), e.id = o;
      });
    }
    regenerateNewIdForDiagram(e) {
      var t = {},
        r = {};
      s().keys(e.elements).forEach(n => {
        if ("caption" != n) {
          var o = i.w.nextDiagramEditorId();
          r[n] = o, e.connections.forEach(e => {
            e.fromEditorId == n && (e.fromEditorId = o), e.toEditorId == n && (e.toEditorId = o);
          });
          var s = e.elements[n];
          s.id = o, t[o] = s;
          var a = c.A.findLinkWithLinkToEditor(n, e.shapes);
          a && (a.linkedId = o);
        } else t[n] = e.elements[n];
      }), e.connections.forEach(e => e.id = i.w.nextDiagramConnectionId());
      var n = {};
      return this.reasignShapesId(e.shapes, e, n), e.intersections.items.forEach(e => e.id = i.w.nextDiagramIntersectionId()), e.elements = t, this.reassignXyMatrixOwnedEditorsForPaste(e, r, n), e;
    }
    reassignXyMatrixOwnedEditorsForPaste(e, t, r) {
      var n = {},
        o = (r, o, s) => {
          if (!r) return r;
          var a = t[r] || r;
          if (n[a]) return n[a];
          var l = e.elements[a];
          if (!l) return a;
          var c = i.w.nextDiagramControlledEditorId(o);
          return delete e.elements[a], l.id = c, l.xyMatrixOwnerId = o, l.xyMatrixRole = s, e.elements[c] = l, n[a] = c, this.replaceDiagramEditorReferences(e, a, c), c;
        };
      this.forEachShape(e.shapes || [], t => {
        if (g.W.isXyMatrix(t)) {
          var r = t.id;
          t.data.cells.forEach(e => e.forEach(e => {
            e.editorId = o(e.editorId, r, "cell");
          })), t.data.arrows.forEach(e => {
            e.id = "xya" + Math.random().toString().substr(2), e.labels && e.labels.forEach(e => {
              e.editorId = o(e.editorId, r, "label");
            }), e.labelEditorId && (e.labelEditorId = o(e.labelEditorId, r, "label"));
          }), t.data.source = g.W.generateSource(t, e.elements);
        }
      }), s().values(e.elements).forEach(e => {
        e.xyMatrixOwnerId && r[e.xyMatrixOwnerId] && (e.xyMatrixOwnerId = r[e.xyMatrixOwnerId]);
      });
    }
    replaceDiagramEditorReferences(e, t, r) {
      e.connections.forEach(e => {
        e.fromEditorId == t && (e.fromEditorId = r), e.toEditorId == t && (e.toEditorId = r);
      });
      var n = c.A.findLinkWithLinkToEditor(t, e.shapes);
      n && (n.linkedId = r);
    }
    forEachShape(e, t) {
      e.forEach(e => {
        t(e), i.w.isDiagramGroupId(e.id) && this.forEachShape(e.entities || [], t);
      });
    }
    fromPasteText(e, t, r) {
      return s().startsWith(e, this.magicText) ? this.handleStructuredText(e.substr(this.magicText.length)) : this.handlePureText(e, t, r);
    }
    handlePureText(e, t, r) {
      if (t) {
        var n = e.replace(/\t/g, "  ").split(/\r?\n/);
        return {
          isRoot: !1,
          isTextMode: !1,
          isTabularCellsSelected: !1,
          isPureText: !0,
          lines: s().map(n, e => r && p.F.isRTL(e) ? h.A.createPureTextLine(e, {
            textDirection: "rtl",
            align: "right"
          }) : h.A.createPureTextLine(e))
        };
      }
      for (var i = [], o = h.A.createEmptyLine(), a = h.A.createTextBlock(""), l = 0, c = e.length; l < c; l++) {
        var d = e[l];
        if ("\t" != d) {
          if ("\n" != d) {
            if ("\r" != d) {
              var u = this.handleComposite(d);
              u ? (a.text && o.blocks.push(a), o.blocks.push(u), a = h.A.createTextBlock("")) : a.text += d;
            }
          } else i.push(o), o = h.A.createEmptyLine();
        } else a.text += "  ";
      }
      return a.text && o.blocks.push(a), o.blocks.length > 0 && i.push(o), {
        isRoot: !1,
        isTextMode: !1,
        isTabularCellsSelected: !1,
        isPureText: !0,
        lines: i
      };
    }
    handleComposite(e) {
      var t = this.map[e];
      return t ? a.A.getModelByName(t) : null;
    }
    handleStructuredText(e) {
      var t;
      return this.parse(e);
    }
    toCopyTextForCodeSection(e) {
      return this.linesToSectionCode(e);
    }
    linesToSectionCode(e) {
      return e.map(e => e.blocks.map(e => e.type ? " " : e.text).join("")).join("\n");
    }
    toCopyText(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (t.insideCodeSection()) return this.toCopyTextForCodeSection(e);
      var n = {
          theoremKeys: []
        },
        i = t.findInlineMathScope(),
        o = this.stringifyStripId(e, r, n);
      n.theoremKeys = s().uniq(n.theoremKeys);
      var a,
        c = {
          isRoot: t.isRootLineSelected(),
          isTextMode: t.isTextModeSelected(),
          isTabularCellsSelected: t.isTabularCellsSelected(),
          isPureText: !1,
          insideInlineMath: !!i,
          lines: "********to-be-replace***********",
          rootEditorId: t.model.id,
          inlineMathDisplayStyle: i && i.style && "\\displaystyle" == i.style.mathModeType
        },
        d;
      return n.theoremKeys.length > 0 && (c.theoremInfo = {
        theorems: l.T.getTheoremsByKeys(n.theoremKeys, t.model.theoremInfo)
      }), this.magicText + this.stringifyStripId(c, r).replace('"********to-be-replace***********"', o);
    }
    asignIdForLines(e) {
      return e.forEach(e => e.id = i.w.nextId()), e;
    }
  }
  const f = new m();
};
