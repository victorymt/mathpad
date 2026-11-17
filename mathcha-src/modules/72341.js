/* module 72341 — 5279 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    t: () => p
  });
  var n = r(64467),
    i = r(37566),
    o = r(86081),
    s = r(49812),
    a = r(86745),
    l = r(61848);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    runAll(e) {
      this.innerRun(e, !1);
    }
    runRefOnly(e) {
      this.innerRun(e, !0);
    }
    innerRun(e, t) {
      var r = new Map(),
        n = new Map();
      i.YG(e, "compositeblock.anchor-tag").forEach(e => {
        var i = e.reactInstance,
          o = i.getModel(),
          s = o.refSettings || {},
          a = s.name || "",
          l,
          c = (r.get(a) || 0) + 1,
          d = this.resolveDisplay(s.display || "", c);
        r.set(a, c), n.set(o.id, {
          block: o,
          resolvedDisplay: d,
          count: c
        }), t || i.setDisplayRendered(d);
      }), i.YG(e, "compositeblock.anchor-tag-ref").forEach(e => {
        var t,
          r = e.reactInstance,
          i = r.getModel();
        if (null !== (t = i.refSettings) && void 0 !== t && t.refBlockId) {
          var o = n.get(i.refSettings.refBlockId);
          if (o) {
            if (i.refSettings.useAnchorDisplay) r.setDisplayRendered(o.resolvedDisplay);else {
              var s = this.resolveDisplay(i.refSettings.display || "", o.count);
              r.setDisplayRendered(s);
            }
          } else r.setDisplayRendered("?");
        } else r.setDisplayRendered("?");
      });
    }
    fetchResolvedAnchorTags(e) {
      return i.YG(e, "compositeblock.anchor-tag").map(e => {
        var t = e.reactInstance,
          r,
          n;
        return {
          block: t.getModel(),
          resolvedDisplay: t.getResolvedDisplay()
        };
      });
    }
    fetchBlocks(e) {
      return i.YG(e, "compositeblock.anchor-tag").map(e => {
        var t, r;
        return e.reactInstance.getModel();
      });
    }
    setDisplayForAnchorTagRefs(e, t, r, n) {
      var o = i.YG(e, "compositeblock.anchor-tag").map(e => {
          var t,
            r,
            i = e.reactInstance.getModel();
          if ((null === (t = i.refSettings) || void 0 === t ? void 0 : t.name) == n) return i;
        }).filter(e => e),
        s = new Set(o.map(e => e.id)),
        a = t;
      return i.YG(e, "compositeblock.anchor-tag-ref").forEach(e => {
        var t,
          n = e.reactInstance,
          i = n.getModel();
        if (i.id == r.id || s.has(null === (t = i.refSettings) || void 0 === t ? void 0 : t.refBlockId)) {
          var o = [];
          n.gatherSelected(o), a = this.replaceInTree(o, a, r, {
            display: r.refSettings.display,
            useAnchorDisplay: r.refSettings.useAnchorDisplay,
            useTextModeFont: r.refSettings.useTextModeFont
          });
        }
      }), a;
    }
    replaceInTree(e, t, r, n) {
      var i;
      return a.A.handleEditor(this.buildTreeInput(e, t), e => {
        var t = e.editorModel,
          i = e.editorSelected,
          c = t.lines[i.lineIndex],
          h = s.A.blockFromIndex(c, i.charIndex);
        if (!h || !o.A.isAnchorTag(h.block) && !o.A.isAnchorTagRef(h.block)) return {
          editorModel: t,
          editorSelected: i
        };
        var p = c.blocks;
        if (h.block.id == r.id) p = l.A.setIndex(c.blocks, h.blockIndex, r);else {
          var u = d(d({}, h.block), {}, {
            refSettings: d(d({}, h.block.refSettings), n),
            style: r.style
          });
          p = l.A.setIndex(c.blocks, h.blockIndex, u);
        }
        var g = d(d({}, c), {}, {
          blocks: p
        });
        return a.A.updateLineToVisitResult(e, g, i);
      }).editorModel;
    }
    setDisplayForAnchorTags(e, t, r) {
      var n = t;
      return i.YG(e, "compositeblock.anchor-tag").forEach(e => {
        var t,
          i,
          o = e.reactInstance,
          s = o.getModel();
        if (s.id == r.id || (null === (t = s.refSettings) || void 0 === t ? void 0 : t.name) == (null === (i = r.refSettings) || void 0 === i ? void 0 : i.name)) {
          var a = [];
          o.gatherSelected(a), n = this.replaceInTree(a, n, r, {
            display: r.refSettings.display,
            useTextModeFont: r.refSettings.useTextModeFont
          });
        }
      }), n;
    }
    buildTreeInput(e, t) {
      return {
        cursorSelected: e[0],
        extendedCursorSelected: void 0,
        isInSelection: () => !1,
        model: t
      };
    }
    resolveDisplay(e, t) {
      return e.split("${count}").join(t.toString());
    }
  }
  var p = new h();
};
