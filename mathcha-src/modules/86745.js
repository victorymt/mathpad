/* module 86745 — 5610 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(64467),
    i = r(49812),
    o = r(61848),
    s = r(72966),
    a = r(13620),
    l = r(27271),
    c = r(90437);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p {
    updateLineToVisitResult(e, t, r) {
      return {
        editorModel: o.A.set(e.editorModel, "lines.".concat(e.editorSelected.lineIndex), t),
        editorSelected: r,
        customData: e.customData
      };
    }
    updateLinesToVisitResult(e, t, r) {
      var n = o.A.replaceWithArray(e.editorModel.lines, e.editorSelected.lineIndex, 1, t);
      return {
        editorModel: o.A.set(e.editorModel, "lines", n),
        editorSelected: r
      };
    }
    handleAtEditor(e, t, r, n, i, l, d, h, p, u) {
      if (n) {
        var g = new s.A(r, n);
        if (g.isCurrentLevelSameRoute()) return g.fromSelected.selected && g.toSelected.selected ? this.handleChildEditor(e, t, r, n, i, l, d, h) : i({
          editorModel: t,
          editorSelected: r,
          editorExtendedSelected: void 0,
          selection: null,
          usedToHasSelection: e.isInSelection(),
          compositeParent: p,
          compositeKey: u,
          ancestorBlocks: h
        });
        var m = g.fromSelected,
          f = t;
        if (l) {
          var y = a.A.removeSelection(t.lines, g);
          if (f = o.A.set(t, "lines", y), g.isTabularRoute()) return m = o.A.update(m, {
            key: c.Z.getTabularMinKey(g.fromSelected.key, g.toSelected.key),
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          }), this.handleChildEditor(e, f, m, null, i, !0, d, h);
          m = o.A.update(m, {
            selected: null,
            key: null
          });
        }
        var v = l && e.isInSelection() && (null != p || g.isCurrentLevelSameLine()),
          b = d;
        return g.isLeafLevelSameLine() && (b = !0), i({
          editorModel: f,
          editorSelected: m,
          editorExtendedSelected: l ? void 0 : g.toSelected,
          selection: l ? null : g,
          usedToHasSelection: e.isInSelection(),
          compositeParent: p,
          removedLines: b ? a.A.getSelectionData(t.lines, g) : null,
          compositeKey: u,
          removedSelectionWithOneLineChanged: v,
          ancestorBlocks: h
        });
      }
      return null != r.selected ? this.handleChildEditor(e, t, r, n, i, l, d, h) : i({
        editorModel: t,
        editorSelected: r,
        editorExtendedSelected: n,
        selection: null,
        usedToHasSelection: e.isInSelection(),
        compositeParent: p,
        compositeKey: u,
        ancestorBlocks: h
      });
    }
    handleChildEditor(e, t, r, n, s, a, l, c) {
      var d = r.lineIndex,
        p = r.charIndex,
        u = r.key,
        g = i.A.blockFromIndex(t.lines[d], p),
        m = g.block.elements[u],
        f = n ? n.selected : void 0,
        y = this.handleAtEditor(e, m, r.selected, f, s, a, l, c.concat([g.block]), g.block, u);
      if (this.isUpperResult(y)) return y.uplevelHandler({
        editorSelected: r,
        editorModel: t,
        childSelectedBlock: g.block,
        childSelectedBlockIndex: g.blockIndex
      });
      if (null == y || null == y.editorModel || null == y.editorSelected) return y;
      var v = o.A.set(t, "lines.".concat(d, ".blocks.").concat(g.blockIndex, ".elements.").concat(u), y.editorModel),
        b = o.A.set(r, "selected", y.editorSelected),
        x;
      return n && y.editorExtendedSelected && (x = h(h({}, n), {}, {
        selected: y.editorExtendedSelected
      })), {
        editorModel: v,
        editorSelected: b,
        editorExtendedSelected: x,
        customData: y.customData
      };
    }
    isUpperResult(e) {
      return e && null != e.uplevelHandler;
    }
    handleEditor(e, t) {
      var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      return this.handleAtEditor(e, e.model, e.cursorSelected, e.extendedCursorSelected, t, r, n, []);
    }
    travelForTabular(e, t) {
      var r = l.A.getTabularKeysSelected(e);
      return 1 == r.length ? this.handleEditor(e, e => ({
        uplevelHandler: (e, n) => t({
          keys: r,
          editor: e.editorModel,
          selected: e.editorSelected,
          block: e.childSelectedBlock,
          blockIndex: e.childSelectedBlockIndex
        })
      }), !1) : this.handleEditor(e, e => {
        var n = e.editorModel.lines[e.editorSelected.lineIndex],
          o = i.A.blockFromIndex(n, e.editorSelected.charIndex);
        return t({
          keys: r,
          editor: e.editorModel,
          selected: e.editorSelected,
          block: o.block,
          blockIndex: o.blockIndex
        });
      }, !1);
    }
  }
  const u = new p();
};
