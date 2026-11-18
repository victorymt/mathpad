/* module 51737 — 4761 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(2543),
    i = r.n(n),
    o = r(98095),
    s = r(47858),
    a = r(97372),
    l = r(30803),
    c = r(70224);
  class d {
    constructor() {
      this.processLines = this.processLines.bind(this);
    }
    processLines(e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = e, n = [], o = !1, s; r.length > 0;) {
        var l = r.shift();
        if ("" != l) if (i().isArray(l)) r = l.concat(r);else {
          if (i().isString(l)) {
            if (o = !0, l = c.A.createPureTextLine(l), n.length <= 0) {
              n.push(l);
              continue;
            }
            s = i().last(n);
            var d = i().last(s.blocks);
            if (d && a.A.isTextBlock(d)) {
              i().last(s.blocks).text += l.blocks[0].text;
              continue;
            }
            s.blocks = s.blocks.concat(l.blocks[0]);
          }
          var h = this.processLine(l, t);
          o && 0 == l.blocks.length ? o = !1 : o && n.length > 0 ? ((s = i().last(n)).blocks = s.blocks.concat(l.blocks), o = !1) : (o = !1, n.push(h));
        }
      }
      if (t) return n;
      var p = this.handleOneGroup(n);
      return p || n;
    }
    processLine(e, t) {
      if (i().isString(e)) return e;
      for (var r = [], n = e.blocks, o = {
          isChoose: !1,
          isOver: !1,
          displayStyle: !1,
          textStyle: !1
        }; n.length > 0;) {
        var a = n.shift();
        if (a && ("" != a.text || a.type)) if (t) r.push(a);else {
          if ("unknown-command" == a.type && "\\choose" == a.text) {
            if (o.isChoose) continue;
            o.isChoose = !0;
          }
          if ("unknown-command" == a.type && "\\over" == a.text) {
            if (o.isOver) continue;
            o.isOver = !0;
          }
          if ("unknown-command" != a.type || "\\displaystyle" != a.text) {
            if ("unknown-command" != a.type || "\\textstyle" != a.text) {
              var l = this.flattenLines(a);
              l ? n = l.concat(n) : (o.displayStyle && s.A.addStyleMod(a, "mathModeType", "\\displaystyle"), o.textStyle && s.A.addStyleMod(a, "mathModeType", "\\textstyle"), this.isTheSameWithPreviousBlock(r, a) ? r = this.mergeTextBlockWithPrevious(r, a) : r.push(a));
            } else o.textStyle = !0;
          } else o.displayStyle = !0;
        }
      }
      return e.blocks = r, t || (o.isChoose && (e = this.handleLeftRightEditor(e, "\\choose", "\\binom")), o.isOver && (e = this.handleLeftRightEditor(e, "\\over", "\\frac"))), e;
    }
    mergeTextBlockWithPrevious(e, t) {
      return e[e.length - 1].text += t.text, e;
    }
    isTheSameWithPreviousBlock(e, t) {
      return !(e.length <= 0) && a.A.are2TextBlockSameFormat(e[e.length - 1], t);
    }
    handleLeftRightEditor(e, t, r) {
      var n = e.blocks,
        s = i().findIndex(n, e => "unknown-command" == e.type && e.text == t);
      if (s >= 0) {
        var a,
          c = o.A.getCustomSymbolComponent(r).toModel(r, null, [{
            id: l.w.nextId(),
            blocks: n.slice(0, s)
          }], [{
            id: l.w.nextId(),
            blocks: n.slice(s + 1)
          }]);
        e.blocks = c instanceof Array ? c : [c];
      }
      return e;
    }
    handleOneGroup(e) {
      if (1 == e.length && 1 == e[0].blocks.length) {
        var t = e[0].blocks[0];
        if ("\\group" == t.text && "composite" == t.type) return t.elements.value.lines;
        if ("\\gathered" == t.text && "composite" == t.type) {
          var r = t;
          if (1 == r.column) {
            for (var n = [], i = 0; i < r.row; i++) {
              var o = r.elements[i + "_0"].lines;
              if (o.length > 1) return e;
              n.push(o[0]);
            }
            return n;
          }
        }
      }
      return e;
    }
    flattenLines(e) {
      return i().isArray(e) ? e : null;
    }
  }
  const h = new d();
  var p = r(49812),
    u = r(28623),
    g = r.n(u),
    m = r(86081);
  class f {
    parse(e, t) {
      try {
        t = t || "Expression";
        var r = g().parse(e, {
          _: i(),
          symbolProvider: o.A,
          openBraces: "{",
          closeBraces: "}",
          grammarHelper: h,
          startRule: t,
          generator: l.w,
          modelHelper: p.A,
          modelCreator: c.A
        });
        return this.addingLastLineIfNeeded(r);
      } catch (e) {
        return console.log(e), [];
      }
    }
    addingLastLineIfNeeded(e) {
      if (0 == e.length) return e;
      var t = i().last(e);
      return 1 == t.blocks.length && m.A.isSingleBlock(t.blocks[0]) && (e = e.concat([c.A.createEmptyLine()])), e;
    }
  }
};
