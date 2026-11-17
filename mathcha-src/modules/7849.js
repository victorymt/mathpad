/* module 7849 — 6214 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(98095),
    o = r(49812),
    s = r(2543),
    a = r.n(s),
    l = r(97372),
    c = r(46086),
    d = r(13620),
    h = r(86081),
    p = r(70224);
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
    process(e, t, r) {
      return this.processLinesTo({
        isInsideInlineMath: e.insideInlineMath,
        isPureText: e.isPureText,
        isTextMode: e.isTextMode,
        inlineMathDisplayStyle: e.inlineMathDisplayStyle,
        lines: e.lines
      }, {
        isTextMode: t.isTextModeSelected(),
        isTextSymbol: t.isInsideTextSymbol(),
        isTheorem: t.isInsideTheorem(),
        isTable: t.isTableSelected(),
        rootSymbolSupports: r.rootSymbolSupports
      });
    }
    processLinesTo(e, t) {
      if (e.isPureText) return this.okResult(e.lines, e.lines);
      if (t.isTextSymbol) {
        var r = this.stripNonTextBlocksForLines(e.lines);
        return this.resultFromStripInfo(r);
      }
      return t.isTextMode ? this.processInTextMode(e, t) : this.processInMathMode(e);
    }
    filterRootSupportedBlocks(e, t) {
      return e.map(e => g(g({}, e), {}, {
        blocks: e.blocks.filter(e => !e.type || t.includes(e.text))
      }));
    }
    processInTextMode(e, t) {
      if (e.isTextMode) {
        if (t.isTheorem || t.isTable) {
          var r = this.stripForLines(e.lines, (e, t) => h.A.isTheorem(e) ? {
            anyStrip: !0,
            result: t = t.concat(e.elements.theorem.lines[0].blocks)
          } : (t.push(e), {
            anyStrip: !1,
            result: t
          }), !1);
          return this.resultFromStripInfo(r);
        }
        return t.rootSymbolSupports ? this.okResult(this.filterRootSupportedBlocks(e.lines, t.rootSymbolSupports), e.lines) : this.okResult(e.lines, e.lines);
      }
      var n = e.lines,
        i;
      if (1 == n.length && 1 == n[0].blocks.length) {
        var o = n[0].blocks[0];
        if (l.A.isGather(o) || l.A.isAlign(o) || l.A.isMathContainer(o) || l.A.isMultiline(o)) return this.okResult(e.lines, e.lines);
      }
      return this.okResult(this.wrapLinesWithMathContainer(e), e.lines);
    }
    processInMathMode(e) {
      if (!e.isTextMode) {
        var t = e.lines,
          r;
        if (1 == t.length && 1 == t[0].blocks.length) {
          var n = t[0].blocks[0];
          if (l.A.isGather(n) || l.A.isAlign(n)) {
            var i = this.stripNonTextBlocksForMath(e.lines);
            return this.resultFromStripInfo(i);
          }
        }
        return this.okResult(e.lines, e.lines);
      }
      var o = this.stripNonTextBlocksForMath(e.lines);
      return this.resultFromStripInfo(o);
    }
    resultFromStripInfo(e) {
      return e.anyStrip ? {
        status: "info",
        lines: e.lines,
        message: "Some contents have been strip while pasting to this area"
      } : {
        status: "ok",
        lines: e.lines
      };
    }
    okResult(e, t) {
      return {
        status: "ok",
        lines: e,
        originalLines: t
      };
    }
    stripForLines(e, t, r) {
      var n = !1;
      return e = a().map(e, e => {
        var i = this.stripCompositeBlocks(e.blocks, t, r),
          o = p.A.createLineFromBlocks(i.blocks);
        return o = d.A.joinBlocksAndNormalizeStyleForLine(o), n = n || i.anyStrip, o;
      }), {
        anyStrip: n,
        lines: e
      };
    }
    stripNonTextBlocksForLines(e) {
      return this.stripForLines(e, (e, t) => ({
        anyStrip: !0,
        result: t
      }), !1);
    }
    stripNonTextBlocksForMath(e) {
      return this.stripForLines(e, (e, t) => {
        var r = !1;
        if (l.A.isMathContainer(e)) {
          var n = e.elements.mathValue.lines;
          t = t.concat(n[0].blocks), r = r || n.length > 1;
        } else if (l.A.isGather(e)) {
          var i = o.A.cloneCompositeWithoutStyle(e);
          i.text = "\\gathered", t.push(i);
        } else if (l.A.isAlign(e)) {
          var s = o.A.cloneCompositeWithoutStyle(e);
          s.text = "\\aligned", t.push(s);
        }
        return {
          anyStrip: r,
          result: t
        };
      }, !0);
    }
    replaceCharWithCompositeBlock(e) {
      for (var t = e.text, r = [], n = p.A.createTextBlock(""), i = 0, o = t.length; i < o; i++) {
        var s = t[i],
          a = c.A.handleComposite(s);
        a ? (n.text && r.push(n), r.push(a), n = p.A.createTextBlock("")) : n.text += s;
      }
      return n.text && r.push(n), r.length <= 1 ? null : r;
    }
    stripCompositeBlocks(e, t, r) {
      var n = !1,
        i = a().reduce(e, (e, i) => {
          if (l.A.isTextBlock(i)) {
            var o = p.A.createTextBlock(i.text);
            if (r) {
              var s = this.replaceCharWithCompositeBlock(o);
              s ? e = e.concat(s) : e.push(o);
            } else e.push(o);
            return e;
          }
          var a = t(i, e);
          return n = a.anyStrip, a.result || e;
        }, []);
      return {
        anyStrip: n,
        blocks: i
      };
    }
    wrapLinesWithMathContainer(e) {
      var t = a().cloneDeep(i.A.getModelByName("\\math-container"));
      return t.elements.mathValue.lines = e.lines, t.displayMode = !e.isInsideInlineMath, e.isInsideInlineMath && e.inlineMathDisplayStyle && (t.style = g(g({}, t.style), {}, {
        mathModeType: "\\displaystyle"
      })), [p.A.createLineFromBlock(t)];
    }
  }
  const f = new m();
};
