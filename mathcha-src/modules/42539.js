/* module 42539 — 3819 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    w: () => g
  });
  var n = r(64467),
    i = r(97372),
    o = r(86081),
    s = r(2543),
    a = r.n(s),
    l = r(70224),
    c = r(41587),
    d = r(49812);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u {
    insertLine(e, t) {
      var r = t.lines,
        n = t.delta,
        i = t.extendedCharCount,
        o = c.A.insertLines(r, e, null != n);
      if (o.editorSelected = g.mergeLeafCursorSelectedDelta(o.editorSelected, n), i && o.editorSelected && !o.editorExtendedSelected) {
        var s = a().cloneDeep(o.editorSelected),
          l;
        d.A.findLeafSelected(s).charIndex += i, o = p(p({}, o), {}, {
          editorExtendedSelected: s
        });
      }
      return o;
    }
    processCursorReplacement(e) {
      var t = this.buildCursorSelectedFromLines(e);
      return {
        lines: this.removeAllCursorPlacements(e, !(null == t || !t[1])),
        delta: null == t ? void 0 : t[0],
        extendedCharCount: null == t ? void 0 : t[1]
      };
    }
    processCursorReplacementBlocks(e) {
      var t = [{
          id: "fl",
          blocks: e
        }],
        r = this.buildCursorSelectedFromLines(t);
      return {
        blocks: this.removeAllCursorPlacements(t, !(null == r || !r[1]))[0].blocks,
        delta: null == r ? void 0 : r[0],
        extendedCharCount: null == r ? void 0 : r[1]
      };
    }
    removeAllCursorPlacements(e, t) {
      return e.forEach(e => {
        e.blocks = t ? e.blocks.map(e => o.A.isCursorPlacement(e) ? l.A.createTextBlock(" ", {
          style: a().cloneDeep(e.style)
        }) : e) : e.blocks.filter(e => !o.A.isCursorPlacement(e)), e.blocks.forEach(e => {
          o.A.isComposite(e) && a().values(e.elements).filter(e => e).forEach(e => {
            this.removeAllCursorPlacements(e.lines, t);
          });
        });
      }), e;
    }
    buildCursorSelectedFromLines(e) {
      for (var t = 0; t < e.length; t++) for (var r = e[t], n = 0, s = 0; n < r.blocks.length; s += i.A.getCharCount(r.blocks[n]), n++) {
        var l = r.blocks[n];
        if (o.A.isCursorPlacement(l)) return [{
          lineIndex: t,
          charIndex: s
        }, l.style && Object.keys(l.style).length > 0 ? 1 : void 0];
        if (o.A.isComposite(l)) for (var c = a().keys(l.elements), d = 0; d < c.length; d++) {
          var h = c[d];
          if (h && l.elements[h]) {
            var p = this.buildCursorSelectedFromLines(l.elements[h].lines);
            if (p) return [{
              lineIndex: t,
              charIndex: s,
              key: h,
              selected: p[0]
            }, p[1]];
          }
        }
      }
    }
    modifyLeafSelected(e, t) {
      var r = a().cloneDeep(e);
      function n(e) {
        e.selected ? n(e.selected) : t(e);
      }
      return n(r), r;
    }
    mergeLeafCursorSelectedDelta(e, t) {
      return t ? this.modifyLeafSelected(e, e => {
        e.lineIndex += t.lineIndex, e.charIndex += t.charIndex, t.key && (e.key = t.key, e.selected = t.selected);
      }) : e;
    }
  }
  var g = new u();
};
