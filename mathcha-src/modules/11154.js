/* module 11154 — 980486 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    yZ: () => Vr.A,
    Ay: () => Wu,
    JF: () => ut.A
  });
  var n = r(64467),
    i = r(91636),
    o = r(5777),
    s = r(28128),
    a = r(68583),
    l = r(40927),
    c = r.n(l),
    d = r(40961),
    h = r.n(d),
    p = r(63971),
    u = r(37566),
    g = r(1825),
    m = r(2543),
    f = r.n(m),
    y = r(32485),
    v = r.n(y),
    b = r(5556),
    x = r.n(b),
    C = r(39791),
    S = r(516),
    A = r(48397),
    w = r(11742),
    E = r(55451),
    k = r(47858);
  class O extends A.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "selected", void 0), (0, n.A)(this, "lineData", void 0), (0, n.A)(this, "getRef", e => {
        this.line = e, e && (e.reactInstance = this);
      });
    }
    shouldComponentUpdate(e, t) {
      return void 0 !== this.selected || void 0 !== this.lineData ? (this.selected = void 0, this.lineData = void 0, !0) : super.shouldComponentUpdate(e, t);
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate && super.componentDidUpdate(e, t);
      var r = this.getLineData();
      "section" == k.A.getLineStyle(r, "listType") && r.blocks != e.line.blocks && this.getMt().handleSectionRefAction({
        type: "section-line-text-change",
        htmlLine: this.line,
        line: r
      });
    }
    updateSelected(e) {
      this.selected = e, E.A.nextMicro(() => {
        this.forceUpdate();
      });
    }
    updateData(e, t) {
      this.selected = t, this.lineData = e, this.registerForceUpdate(!1);
    }
    getLineSelected() {
      return void 0 !== this.selected ? this.selected : this.props.selected;
    }
    getLineData() {
      var e = void 0 !== this.lineData ? this.lineData : this.props.line;
      return w.A.makeSureBlocks(e), e;
    }
  }
  var D = r(32017),
    P = r.n(D);
  class M {
    getUpdateInfo(e, t) {
      try {
        if (e.fontSizeRatio != t.fontSizeRatio || e.extendedSelected != t.extendedSelected || e.pageSection != t.pageSection) return "all";
        if (e.isOneLineChanged && e.data != t.data && e.data.lines.length == t.data.lines.length && e.selected && t.selected && e.selected.lineIndex == t.selected.lineIndex) {
          var r = e.data.lines[e.selected.lineIndex],
            n = t.data.lines[t.selected.lineIndex];
          return r.style != n.style || r.id != n.id || r == n ? "all" : "one-line";
        }
        return e.data != t.data ? "all" : null == e.selected && null == t.selected || P()(e.selected, t.selected) ? "none" : "cursor";
      } catch (e) {
        return "all";
      }
    }
  }
  const I = new M();
  class T extends C.A {
    shouldComponentUpdate(e) {
      var t = I.getUpdateInfo(e, this.props);
      if ("all" == t) return !0;
      if ("one-line" == t) {
        var r = e.data.lines[e.selected.lineIndex],
          n = this.updateDataCache.bind(this, r, e.selected);
        return this.context.fixedContextHandler.getBatchUpdater().push(n, this), !1;
      }
      if ("cursor" == t) {
        var i = this.updateLineCacheBySelectedChange.bind(this, this.props.selected, e.selected);
        return E.A.nextMicro(i), !1;
      }
      return !1;
    }
    updateDataCache(e, t) {
      var r = h().findDOMNode(this),
        n;
      S.A.findLineByIndex(r, t.lineIndex).reactInstance.updateData(e, t);
    }
    updateLineCacheBySelectedChange(e, t) {
      var r = h().findDOMNode(this);
      if (e && t && e.lineIndex == t.lineIndex) {
        var n;
        S.A.findLineByIndex(r, t.lineIndex).reactInstance.updateSelected(t);
      } else {
        var i;
        if (t) if (this.props.data.lines && t.lineIndex >= this.props.data.lines.length) console.warn("selected line invalid");else S.A.findLineByIndex(r, t.lineIndex).reactInstance.updateSelected(t);
        if (e) {
          var o = S.A.findLineByIndex(r, e.lineIndex);
          o && o.reactInstance && o.reactInstance.updateSelected(null);
        }
      }
    }
    getEditClss() {
      return O;
    }
  }
  const L = T;
  var R = r(41587),
    B = r(85355),
    F = r(59310),
    j = r(25644),
    _ = r(94841),
    N = r(13764);
  class z {
    visit(e, t) {
      return S.A.isEditArea(e) ? this.visitEditArea(e, t) : S.A.isComposite(e) ? this.visitComposite(e, t) : S.A.isEditLine(e) ? this.visitEditLine(e, t) : S.A.isEditAreaBlock(e) ? this.visitEditAreaBlock(e, t) : S.A.isEditAreaLine(e) ? this.visitEditAreaLine(e, t) : void 0;
    }
  }
  const H = z;
  var W = r(89473),
    V = r(96579);
  class U extends H {
    constructor(e) {
      super(), (0, n.A)(this, "pos", void 0), (0, n.A)(this, "dzc", void 0), this.pos = e, this.dzc = e.zc;
    }
    visitUnknown() {
      var e = document.elementFromPoint(this.pos.left, this.pos.top);
      return this.visit(S.A.closestEditor(e));
    }
    tryVisitNonCharBlockFromHtmlLine(e) {
      var t = S.A.findBlocks(e),
        r = W.z.extract(e, t, this.dzc),
        n = V.l.findWLineFromGeo(r, this.pos);
      if (n.rect.left <= this.pos.left && this.pos.left <= n.rect.right) return this.tryVisitNonCharFromWLine(n);
    }
    tryVisitNonCharFromWLine(e) {
      var t = V.l.findRectBLock(e.rbs, this.pos);
      if (S.A.hasChildEditorAndAllowMoveInside(t.block)) return this.visitComposite(t.block);
    }
  }
  var q = r(60693);
  class G extends U {
    constructor(e, t) {
      super(e), (0, n.A)(this, "forceFound", void 0), this.forceFound = t;
    }
    visitComposite(e) {
      var t = q.T.getWrappedRects(e.reactInstance.getEditorDoms(), this.dzc);
      if (!(t.length <= 0)) {
        var r = B.A.findNearestBottomRects(t, this.pos);
        return !r && this.forceFound && (r = t[0]), null == r ? null : this.visit(r.element);
      }
    }
    visitEditLine(e) {
      if (S.A.isEmptyLine(e)) return _.X.emptyLine(e);
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      var t = this.tryVisitNonCharBlockFromHtmlLine(e);
      return t || N.A.build(e, S.A.closestEditor(e), this.pos);
    }
    visitEditAreaBlock(e) {
      var t = q.T.getBCRect(e, this.dzc);
      return j.A.buildCursorPositionForEditAreaBlock(e, {
        left: this.pos.left,
        top: t.top + 2,
        zc: this.dzc
      });
    }
    visitEditAreaLine(e) {
      return this.visitEditLine(e);
    }
    visitEditArea(e) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var t = S.A.getFirstEditLine(e);
      return this.visitEditLine(t);
    }
  }
  const K = G;
  var Z = r(27271),
    Y = r(97994),
    Q = r(90437);
  class J extends U {
    constructor(e) {
      super(q.T.getMaxXAxisPos(e, "middle")), (0, n.A)(this, "curPos", void 0), (0, n.A)(this, "customVisitor", new X()), this.curPos = e;
    }
    fillCurPosMeta(e) {
      return "lazy" == e.type ? e : _.X.copyMetadata(this.curPos, e);
    }
    visitEditAreaBlock(e) {
      var t = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(t, e);
    }
    visitEditAreaLine(e) {
      var t = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(t, e);
    }
    visitEditArea(e, t) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var r = this.findFromNextLine(e, t, this.pos);
      if (null != r) return this.fillCurPosMeta(r);
      var n = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(n, e);
    }
    visitFromTextEditLine(e, t) {
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      if (!S.A.isEmptyLine(e)) {
        var r = S.A.findBlocks(e),
          n = W.z.extract(e, r, this.dzc),
          i = V.l.findWLineFromGeo(n, this.pos),
          o = n.indexOf(i);
        if (o < n.length - 1) {
          var s = n[o + 1];
          t = t || !(s.rect.left <= this.pos.left && this.pos.left <= s.rect.right);
          var a = V.l.clampPosWithWLine(s, this.pos),
            l = !t && this.tryVisitNonCharFromWLine(n[o + 1]);
          if (l) return l;
          var c = new K(a).visit(e);
          return this.fillCurPosMeta(c);
        }
      }
      var d = S.A.closestEditor(e);
      return this.visitEditArea(d, e);
    }
    visitEditLine(e, t) {
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      if (S.A.isTextEditLine(e) && !S.A.isEmptyLine(e)) return this.visitFromTextEditLine(e, t);
      var r = S.A.closestEditor(e);
      return this.visitEditArea(r, e);
    }
    visitComposite(e, t) {
      if (!S.A.shouldNotMoveOutsideEditor(e)) {
        var r = this.customVisitor.handle(e, t);
        if (r) return "outside" == r ? this.visitEditLine(S.A.closetEditLine(e), !0) : this.fillCurPosMeta(new K(this.pos, !0).visitEditArea(r));
        var n = this.findNearestEditorBottom(e, t, this.pos);
        if (n) {
          if (!t) return this.fillCurPosMeta(new K(this.pos).visit(n));
          var i = q.T.getBCRect(n, this.dzc);
          if (f().inRange(this.pos.left, i.left - 2, i.right + 3)) return this.fillCurPosMeta(new K(this.pos).visit(n));
          var o = q.T.getBCRect(t, this.dzc);
          if (Y.A.rangeOverlap(i.left - 2, i.right + 2, o.left - 2, o.right + 2)) return this.fillCurPosMeta(new K(this.pos).visit(n));
        }
        return this.visitEditLine(S.A.closetEditLine(e), !1);
      }
    }
    visitRoot(e) {
      return null;
    }
    findNearestEditorBottom(e, t, r) {
      var n = S.A.findEditors(e);
      n = F.Q.exclude(n, t);
      var i = q.T.getWrappedRects(n, this.dzc),
        o = B.A.findNearestBottomRects(i, r);
      return null == o ? null : o.element;
    }
    findFromNextLine(e, t, r) {
      var n = this.getNextLine(e, t);
      return null == n ? null : new K(r).visit(n);
    }
    getNextLine(e, t) {
      return S.A.findNextLine(t);
    }
  }
  class X {
    handle(e, t) {
      if (t) {
        var r = S.A.getCompositeLatexName(e);
        if ("\\power-index" == r || "\\prescript" == r) return "powerValue" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "indexValue" == e.reactInstance.getKeyName()) : "outside";
        if ("\\z-schema" == r) return "name" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "symDec" == e.reactInstance.getKeyName()) : "symDec" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "conPre" == e.reactInstance.getKeyName()) : "outside";
        if ("\\sqrt" == r) return "sub1" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "value" == e.reactInstance.getKeyName()) : "outside";
        if (u.nB(e, "limit-type")) {
          if ("from" == t.reactInstance.getKeyName()) {
            var n = S.A.findEditors(e);
            return (n = F.Q.exclude(n, t))[0];
          }
          return "outside";
        }
        if (S.A.isTabularComposite(e)) {
          var i = t.reactInstance.getKeyName();
          if (!Q.Z.isKeyInTabularFormat(i)) return;
          var o = Z.A.getBelowAvailableCellKey(i, e.reactInstance.getModel());
          if (!o) return "outside";
          var s = S.A.findEditors(e),
            a;
          return f().find(s, e => e.reactInstance.getKeyName() == o);
        }
        if (u.nB(e, "stackrel-symbol")) {
          if ("sub1" == t.reactInstance.getKeyName()) {
            var l = S.A.findEditors(e);
            return (l = F.Q.exclude(l, t))[0];
          }
          return "outside";
        }
        if (u.nB(e, "over-under-set-symbol")) {
          if ("sub1" == t.reactInstance.getKeyName()) return f().find(S.A.findEditors(e), e => "value" == e.reactInstance.getKeyName());
          if ("value" == t.reactInstance.getKeyName()) return f().find(S.A.findEditors(e), e => "sub2" == e.reactInstance.getKeyName());
          if ("sub2" == t.reactInstance.getKeyName()) return "outside";
        }
        return u.nB(e, "under-brace-symbol") && "value" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "sub1" == e.reactInstance.getKeyName()) : void 0;
      }
    }
  }
  class $ {
    move(e) {
      if (e.isTextMode) {
        var t = e.line;
        return S.A.isLineOfSubSuperScript(t) && (t = S.A.findOuterLineNotInline(t)), new J(e).visitFromTextEditLine(t, !1);
      }
      return S.A.isEditAreaBlock(e.editor) ? new J(e).visitEditAreaBlock(e.editor) : S.A.isEditAreaLine(e.editor) ? new J(e).visitEditLine(e.editor) : new J(e).visitEditLine(e.line);
    }
  }
  const ee = new $();
  class te extends U {
    constructor(e, t) {
      super(e), (0, n.A)(this, "forceFound", void 0), this.forceFound = t;
    }
    visitComposite(e) {
      var t = q.T.getWrappedRects(S.A.findEditors(e), this.dzc);
      if (!(t.length <= 0)) {
        var r = B.A.findNearestTopRects(t, this.pos);
        return !r && this.forceFound && (r = t[0]), null == r ? null : this.visitEditArea(r.element);
      }
    }
    visitEditAreaBlock(e) {
      var t = q.T.getBCRect(e, this.dzc);
      return j.A.buildCursorPositionForEditAreaBlock(e, {
        left: this.pos.left,
        top: t.bottom - 2,
        zc: this.dzc
      });
    }
    visitEditAreaLine(e) {
      return this.visitEditLine(e);
    }
    visitEditArea(e) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var t = S.A.getLastEditLine(e);
      return this.visitEditLine(t);
    }
    visitEditLine(e) {
      if (S.A.isEmptyLine(e)) return _.X.emptyLine(e);
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      var t = this.tryVisitNonCharBlockFromHtmlLine(e);
      return t || N.A.build(e, S.A.closestEditor(e), this.pos);
    }
  }
  const re = te;
  class ne extends U {
    constructor(e) {
      super(q.T.getMaxXAxisPos(e, "middle")), (0, n.A)(this, "curPos", void 0), (0, n.A)(this, "customVisitor", new ie()), this.curPos = e;
    }
    fillCurPosMeta(e) {
      return "lazy" == e.type ? e : _.X.copyMetadata(this.curPos, e);
    }
    visitEditAreaBlock(e) {
      var t = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(t, e);
    }
    visitEditAreaLine(e) {
      var t = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(t, e);
    }
    visitEditArea(e, t) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var r = this.findFromPreviousLine(e, t, this.pos);
      if (null != r) return this.fillCurPosMeta(r);
      var n = S.A.closestSymbolContainerOrRoot(e);
      return this.visit(n, e);
    }
    visitFromTextEditLine(e, t) {
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      if (!S.A.isEmptyLine(e)) {
        var r = S.A.findBlocks(e),
          n = W.z.extract(e, r, this.dzc),
          i = V.l.findWLineFromGeo(n, this.pos),
          o = n.indexOf(i);
        if (o > 0) {
          var s = n[o - 1];
          t = t || !(s.rect.left <= this.pos.left && this.pos.left <= s.rect.right);
          var a = V.l.clampPosWithWLine(n[o - 1], this.pos),
            l = !t && this.tryVisitNonCharFromWLine(s);
          if (l) return l;
          var c = new re(a).visit(e);
          return this.fillCurPosMeta(c);
        }
      }
      var d = S.A.closestEditor(e);
      return this.visitEditArea(d, e);
    }
    visitEditLine(e, t) {
      if (S.A.isLazyLine(e)) return _.X.lazyLine();
      if (S.A.isTextEditLine(e) && !S.A.isEmptyLine(e)) return this.visitFromTextEditLine(e, t);
      var r = S.A.closestEditor(e);
      return this.visitEditArea(r, e);
    }
    visitComposite(e, t) {
      if (S.A.shouldNotMoveOutsideEditor(e)) return null;
      var r = this.customVisitor.handle(e, t);
      if (r) return "outside" == r ? this.visitEditLine(S.A.closetEditLine(e), !0) : this.fillCurPosMeta(new re(this.pos, !0).visitEditArea(r));
      var n = this.findNearestEditorTop(e, t, this.pos);
      if (n) {
        if (!t) return this.fillCurPosMeta(new re(this.pos).visit(n));
        var i = q.T.getBCRect(n, this.dzc);
        if (f().inRange(this.pos.left, i.left - 2, i.right + 3)) return this.fillCurPosMeta(new re(this.pos).visit(n));
        var o = q.T.getBCRect(t, this.dzc);
        if (Y.A.rangeOverlap(i.left - 2, i.right + 2, o.left - 2, o.right + 2)) return this.fillCurPosMeta(new re(this.pos).visit(n));
      }
      return this.visitEditLine(S.A.closetEditLine(e), !1);
    }
    findNearestEditorTop(e, t, r) {
      var n = S.A.findEditors(e);
      n = F.Q.exclude(n, t);
      var i = q.T.getWrappedRects(n, this.dzc),
        o = B.A.findNearestTopRects(i, r);
      return null == o ? null : o.element;
    }
    findFromPreviousLine(e, t, r) {
      var n = this.getPreviousLine(e, t);
      if (n) return S.A.isLazyLine(n) ? _.X.lazyLine() : new re(r).visitEditLine(n);
    }
    getPreviousLine(e, t) {
      return S.A.findPrevLine(t);
    }
  }
  class ie {
    handle(e, t) {
      if (t) {
        var r = S.A.getCompositeLatexName(e);
        if ("\\power-index" == r || "\\prescript" == r) return "indexValue" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "powerValue" == e.reactInstance.getKeyName()) : "outside";
        if ("\\z-schema" == r) return "symDec" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "name" == e.reactInstance.getKeyName()) : "conPre" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "symDec" == e.reactInstance.getKeyName()) : "outside";
        if ("\\sqrt" == r) return "value" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "sub1" == e.reactInstance.getKeyName()) : "outside";
        if (u.nB(e, "limit-type")) {
          if ("to" == t.reactInstance.getKeyName()) {
            var n = S.A.findEditors(e);
            return (n = F.Q.exclude(n, t))[0];
          }
          return "outside";
        }
        if (S.A.isTabularComposite(e)) {
          var i = t.reactInstance.getKeyName();
          if (!Q.Z.isKeyInTabularFormat(i)) return;
          var o = Z.A.getAboveAvailableCellKey(i, e.reactInstance.getModel());
          if (!o) return "outside";
          var s = S.A.findEditors(e),
            a;
          return f().find(s, e => e.reactInstance.getKeyName() == o);
        }
        if (u.nB(e, "stackrel-symbol")) {
          if (u.nB(t, "cur-value")) {
            var l = S.A.findEditors(e);
            return (l = F.Q.exclude(l, t))[0];
          }
          return "outside";
        }
        if (u.nB(e, "over-under-set-symbol")) {
          if ("sub1" == t.reactInstance.getKeyName()) return "outside";
          if ("value" == t.reactInstance.getKeyName()) return f().find(S.A.findEditors(e), e => "sub1" == e.reactInstance.getKeyName());
          if ("sub2" == t.reactInstance.getKeyName()) return f().find(S.A.findEditors(e), e => "value" == e.reactInstance.getKeyName());
        }
        return u.nB(e, "under-brace-symbol") && "sub1" == t.reactInstance.getKeyName() ? f().find(S.A.findEditors(e), e => "value" == e.reactInstance.getKeyName()) : void 0;
      }
    }
  }
  class oe {
    move(e) {
      if (e.isTextMode) {
        var t = e.line;
        return S.A.isLineOfSubSuperScript(t) && (t = S.A.findOuterLineNotInline(t)), new ne(e).visitFromTextEditLine(t, !1);
      }
      return S.A.isEditAreaBlock(e.editor) ? new ne(e).visitEditAreaBlock(e.editor) : S.A.isEditAreaLine(e.editor) ? new ne(e).visitEditLine(e.editor) : new ne(e).visitEditLine(e.line);
    }
  }
  const se = new oe();
  function ae(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ae(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ce extends U {
    constructor(e, t) {
      super(e), (0, n.A)(this, "forceFound", void 0), this.forceFound = t;
    }
    visitEditArea(e) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var t = S.A.findEditLines(e, !0),
        r = q.T.getWrappedRects(t, this.dzc),
        n = B.A.findNearestVerticalStackOfRect(r, this.pos);
      return n && S.A.isLazyLine(n.element) ? _.X.lazyLine() : this.visit(n.element);
    }
    visitEditLine(e) {
      return S.A.isLazyLine(e) ? _.X.lazyLine() : N.A.build(e, S.A.closestEditor(e), this.pos);
    }
    visitEditAreaBlock(e) {
      return j.A.getLastCursorPositionFormEditAreaBlock(e);
    }
    visitEditAreaLine(e) {
      var t = q.T.getWrappedRects([e], this.dzc),
        r = B.A.findNearestVerticalStackOfRect(t, this.pos);
      return this.visitEditLine(r.element);
    }
    visitComposite(e) {
      var t = q.T.getWrappedRects(e.reactInstance.getEditorDoms(), this.dzc),
        r = this.pos;
      if (S.A.isFrac(e)) {
        var n = S.A.getComputedFontSize(e);
        r = le(le({}, r), {}, {
          top: r.top - Math.fround(n / 2)
        });
      }
      var i = B.A.findNearestLeftRects(t, r, "loose-as-outside-in");
      return !i && this.forceFound && (i = t[0]), null == i ? null : this.visit(i.element);
    }
  }
  const de = ce;
  var he = r(41257),
    pe = r(80741);
  class ue {
    constructor(e, t) {
      (0, n.A)(this, "currentLine", void 0), (0, n.A)(this, "curPos", void 0), this.currentLine = e, this.curPos = t;
    }
    visit() {
      var e = S.A.closestEditor(this.currentLine);
      return new ge(this.curPos).visitEditArea(e, this.currentLine);
    }
  }
  class ge extends U {
    constructor(e) {
      super(q.T.geoPosFromCursor(e, "middle")), (0, n.A)(this, "customVisitor", new fe());
    }
    visitEditAreaBlock(e, t) {
      return this.visitEditArea(e, t);
    }
    visitEditAreaLine(e, t) {
      return this.visitEditArea(e, t);
    }
    visitEditArea(e, t) {
      var r = S.A.closestSymbolContainerOrRoot(e);
      return S.A.isMathTypeElement(r) ? this.visitLastBlockOfPreviousLineOrStop(e, t) : S.A.shouldNotMoveOutsideEditor(r) ? null : this.visitComposite(r, e);
    }
    visitLastBlockOfPreviousLineOrStop(e, t) {
      var r = S.A.findPrevLine(t);
      if (!r) return null;
      var n = q.T.getBCRect(t, this.dzc);
      return N.A.build(r, e, pe.y.fromRect(n).pickBuild("right", "middle"));
    }
    visitEditLine(e, t) {
      var r = q.T.getBCRect(t, this.dzc);
      return S.A.isLeftOverlapped(t) ? new _.X().withRequestGeoPos(pe.y.fromRect(r).pickBuild("left", "middle")).withCharIndex(he.A.findStartCharIndexOfBlock(e, t)).withEditor(S.A.closestEditor(e)).withLine(e).build() : N.A.build(e, S.A.closestEditor(e), {
        left: r.left,
        top: (r.top + r.bottom) / 2,
        zc: this.dzc
      });
    }
    visitComposite(e, t) {
      var r = this.customVisitor.handle(e, t);
      if (r) return "outside" == r ? this.visitEditLine(S.A.closetEditLine(e), e) : new de(this.pos).visit(r);
      var n = S.A.findEditors(e),
        i = q.T.getWrappedRects(F.Q.exclude(n, t), this.dzc),
        o = B.A.findNearestLeftRects(i, this.pos, "strict-as-in-sibling");
      if (null != o) return new de(this.pos).visit(o.element);
      var s = S.A.closetEditLine(e);
      return this.visitEditLine(s, e);
    }
  }
  const me = ue;
  class fe {
    handle(e, t) {
      if (u.nB(e, "integral-like-symbol")) return "outside";
      if (S.A.isTabularComposite(e)) {
        var r = t.reactInstance.getKeyName();
        if (!Q.Z.isKeyInTabularFormat(r)) return;
        var n = Z.A.getLeftAvailableCellKey(r, e.reactInstance.getModel());
        if (!n) return "outside";
        var i = S.A.findEditors(e),
          o;
        return f().find(i, e => e.reactInstance.getKeyName() == n);
      }
    }
  }
  var ye = r(36487),
    ve = r(90113),
    be = r(50255),
    xe = r(73524),
    Ce = r(10632);
  class Se {
    findByDir(e, t, r, n, i, o) {
      return "increase" == n ? this.find(e, t, r, i, o) : this.backwardFind(e, t, r, i, o);
    }
    find(e, t, r, n, i) {
      var o = this.parseInitPhase(e, t, r),
        s = o.curBlockIndex,
        a = o.blockUniStrings,
        l = o.localCurIndex,
        c = o.curIndex,
        d = o.lineDir;
      r = c;
      for (var h = 0;;) {
        var p = this.raisePredicate(t, a, c, l, s, d, n, i);
        if (p) return p;
        if (c++, ++l >= a[s].length && (l = 0, s++), s >= t.length && (s = 0, c = 0, l = 0, h++), h > 2) return;
        if (c == r) return;
      }
    }
    backwardFind(e, t, r, n, i) {
      var o = this.parseInitPhase(e, t, r),
        s = o.curBlockIndex,
        a = o.blockUniStrings,
        l = o.localCurIndex,
        c = o.curIndex,
        d = o.lineDir,
        h = o.allCharCount;
      r = c;
      for (var p = 0;;) {
        var u = this.raisePredicate(t, a, c, l, s, d, n, i);
        if (u) return u;
        if (l--, --c < 0 ? (c = h - 1, l = a[s = t.length - 1].length - 1, p++) : l < 0 && (l = a[--s].length - 1), p > 2) return;
        if (c == r) return;
      }
    }
    raisePredicate(e, t, r, n, i, o, s, a) {
      var l = e[i],
        c = t[i],
        d = Ce.x.retrieveSingleRangePosInfo(l, c, n, o, a),
        h = {
          rects: d.rects,
          flow: d.flow,
          charIndex: r,
          attachedElement: l
        };
      if (s(h)) return h;
    }
    parseInitPhase(e, t, r) {
      for (var n = r, i, o, s = t.map(e => S.A.isChar(e) ? xe.Ay.getUnistring(e) : xe.Ay.whitespaceUni), a = 0, l = 0; l < t.length; l++) {
        var c = s[l].length;
        if (a <= n && n < a + c) {
          o = l, i = n - a;
          break;
        }
        a += c;
      }
      var d;
      return void 0 === o && (o = 0, n = 0, i = 0, r = 0), {
        curBlockIndex: o,
        blockUniStrings: s,
        localCurIndex: i,
        curIndex: n,
        lineDir: ve.H.getLineDir(e),
        allCharCount: a
      };
    }
  }
  var Ae = new Se();
  class we {
    resolveClosestVLineFrom2VLines(e, t, r, n) {
      if (!t || !r || n.length <= 0) return e;
      var i = V.l.findWLineFromGeo(n, r),
        o = V.l.findWLine(n, t),
        s = V.l.findWLine(n, e);
      return o == i && s == i ? Math.abs(e.left - r.left) <= Math.abs(t.left - r.left) ? e : t : o != i && s != i ? Math.abs(e.top - r.top) <= Math.abs(t.top - r.top) ? e : t : s == i ? e : t;
    }
  }
  var Ee = new we();
  class ke {
    log(e, t, r) {
      console.log("cur: ", e, ", left: ", this.logNcr(t), ", right: ", this.logNcr(r));
    }
    logNcr(e) {
      switch (e.type) {
        case "inside-block":
        case "line-down":
        case "line-up":
          return e.type;
      }
      return e.nextCharIndex;
    }
    tupleMatchedAnyVLineExtended(e, t, r) {
      switch (r.type) {
        case "out-of-range":
        case "empty-line":
          return;
        case "begin-line":
        case "end-line":
          var n = f().last(r.iRange.rects),
            i = V.l.matchWithExtendedVLinesWithRect(e, n, t);
          return i ? {
            ve: i[1],
            rect: n,
            vlineSide: i[0],
            rectSide: i[2]
          } : void 0;
        case "middle-index":
          var o = f().first(r.firstIRange.rects),
            s = V.l.matchWithExtendedVLinesWithRect(e, o, t);
          if (s) return {
            ve: s[1],
            rect: o,
            vlineSide: s[0],
            rectSide: s[2]
          };
          var a = f().first(r.secondIRange.rects);
          if (s = V.l.matchWithExtendedVLinesWithRect(e, a, t)) return {
            ve: s[1],
            rect: a,
            vlineSide: s[0],
            rectSide: s[2]
          };
      }
    }
    findFirstRangeWith(e, t, r, n, i, o) {
      var s = Ae.findByDir(e, t, r, n, e => e.flow == i, o);
      if (s && S.A.hasChildEditorAndAllowMoveInside(s.attachedElement)) return {
        type: "inside-block",
        posibleCharIndex: s.charIndex,
        attachedElement: s.attachedElement
      };
    }
    extractVLineExtended(e, t, r) {
      switch (t.type) {
        case "single":
          return t.altVCursor ? this.extractVLineExtendedFromVCursor(e, t.vcursor).concat(this.extractVLineExtendedFromVCursor(e, t.altVCursor)) : this.extractVLineExtendedFromVCursor(e, t.vcursor);
        case "line-wrap":
          var n;
          return t.vcursor.edgeWrapVLine ? this.extractVLineExtendedFromVCursor(e, t.vcursor).concat(this.extractVLineExtendedFromVCursor(e, t.altVCursor)) : Ee.resolveClosestVLineFrom2VLines(t.vcursor.vline, t.altVCursor.vline, r, e) == t.vcursor.vline ? this.extractVLineExtendedFromVCursor(e, t.vcursor) : this.extractVLineExtendedFromVCursor(e, t.altVCursor);
        case "gap":
          return this.extractVLineExtendedFromVCursor(e, t.vcursor).concat(this.extractVLineExtendedFromVCursor(e, t.altVCursor));
        case "same-dir-break":
        case "change-direction":
          return this.extractVLineExtendedFromVCursor(e, t.vcursor);
      }
    }
    findByDirection(e, t, r, n, i, o, s, a, l, c) {
      var d = this.predictNextPosition(o, l, n, a, c),
        h = ye.S.findWithDir(e, t, r, s, (e, t) => {
          if (r != t) {
            var n = be.T.extractVLine(e, o, c.zc),
              s = Oe.tupleMatchedAnyVLineExtended(o, i, e);
            if (s && s.rectSide == a && s.vlineSide == ve.H.positionOposite(a)) {
              if ("gap" == n.type || "line-wrap" == n.type || "single" == n.type || "same-dir-break" == n.type) return !0;
              if (n.vcursor.attachedRect == s.rect) return !0;
            }
            if ("line-wrap" == n.type && !n.vcursor.edgeWrapVLine) {
              var l = Ee.resolveClosestVLineFrom2VLines(n.vcursor.vline, n.altVCursor.vline, c, o);
              return d && d.some(e => V.l.matchWithExtendedVLine(o, l, e));
            }
            return d && d.some(e => V.l.matchWithExtendedVLine(o, n.vcursor.vline, e));
          }
        }, c.zc);
      return h ? {
        type: "next-char",
        nextCharIndex: h.charIndex
      } : "gave-up";
    }
    extractVLineExtendedFromVCursor(e, t) {
      return t.edgeWrapVLine ? [V.l.inferVLineExtended(e, t.vline), V.l.inferVLineExtended(e, t.edgeWrapVLine)] : [V.l.inferVLineExtended(e, t.vline)];
    }
    predictNextPosition(e, t, r, n, i) {
      return "left-overlaped" == r.type ? this.extractEVLines(e, t, ve.H.vlineFromRect(r.vcursor.attachedRect, "right")) : "line-wrap" != r.type || r.vcursor.edgeWrapVLine ? r.vcursor.vlineSide != n ? this.extractEVLines(e, t, ve.H.vlineFromRect(r.vcursor.attachedRect, n)) : "change-direction" != r.type && "same-dir-break" != r.type && r.altVCursor ? this.extractEVLines(e, t, ve.H.vlineFromRect(r.altVCursor.attachedRect, n)) : void 0 : Ee.resolveClosestVLineFrom2VLines(r.vcursor.vline, r.altVCursor.vline, i, e) == r.altVCursor.vline ? r.altVCursor.vlineSide != n ? this.extractEVLines(e, t, ve.H.vlineFromRect(r.altVCursor.attachedRect, n)) : void 0 : r.vcursor.vlineSide != n ? this.extractEVLines(e, t, ve.H.vlineFromRect(r.vcursor.attachedRect, n)) : void 0;
      var o;
    }
    extractEVLines(e, t, r) {
      var n = be.T.findEdgeVLine(e, t, r),
        i;
      return (n ? [r, n] : [r]).map(t => V.l.inferVLineExtended(e, t));
    }
  }
  var Oe = new ke();
  class De {
    run(e, t, r, n) {
      var i = ve.H.getLineDir(e),
        o = S.A.findBlocks(e),
        s = W.z.extract(e, o, n),
        a = ye.S.extractTuple(e, o, t, n),
        l = be.T.extractVLine(a, s, n);
      if ("empty-line" == a.type || "out-of-range" == a.type || "empty-line" == l.curInLine) return "ltr" == i ? {
        type: "line-up"
      } : {
        type: "line-down"
      };
      if ("middle-left-overlaped-index" == a.type) return {
        type: "next-char",
        nextCharIndex: t - 1
      };
      var c = V.l.isAtEdge(s, l.vcursor.vline);
      if ("ltr" == i && c && "left" == c[1] && c[0] == f().first(s)) return {
        type: "line-up"
      };
      if ("rtl" == i && c && "left" == c[1] && c[0] == f().last(s)) return {
        type: "line-down"
      };
      var d = this.checkLeftInsideMove(e, o, l, t, i, n);
      if (d) return d;
      var h = "decrease";
      switch (l.type) {
        case "gap":
        case "line-wrap":
        case "single":
        case "same-dir-break":
          h = "right" == l.flowDirection ? "decrease" : "increase";
          break;
        case "change-direction":
          h = "join" == l.changeDirection ? "decrease" : "increase";
      }
      var p = Oe.extractVLineExtended(s, l, r),
        u = Oe.findByDirection(e, o, t, l, p, s, h, "left", i, r);
      return "gave-up" == u ? "begin-line" == a.type ? {
        type: "line-up"
      } : {
        type: "next-char",
        nextCharIndex: t - 1
      } : u;
    }
    getInsideResultIfPossible(e, t) {
      return S.A.hasChildEditorAndAllowMoveInside(e) ? {
        type: "inside-block",
        posibleCharIndex: t,
        attachedElement: e
      } : void 0;
    }
    checkLeftInsideMove(e, t, r, n, i, o) {
      switch (r.type) {
        case "gap":
        case "line-wrap":
        case "single":
          return "begin" == r.curInLine ? "left" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n) : Oe.findFirstRangeWith(e, t, n + 1, "increase", "left", o) : "end" == r.curInLine ? "right" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n - 1) : Oe.findFirstRangeWith(e, t, n - 1, "decrease", "right", o) : "left" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n) : this.getInsideResultIfPossible(r.altVCursor.attachedElement, n - 1);
        case "change-direction":
          return "ltr" == i ? "split" == r.changeDirection ? Oe.findFirstRangeWith(e, t, n - 1, "decrease", "right", o) : this.getInsideResultIfPossible(r.vcursor.attachedElement, n) : "split" == r.changeDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n - 1) : Oe.findFirstRangeWith(e, t, n + 1, "increase", "left", o);
      }
    }
  }
  var Pe = new De();
  class Me {
    move(e, t) {
      var r = Pe.run(e.line, e.charIndex, q.T.geoPosFromCursor(e, "ori"), t),
        n = {
          pos: q.T.geoPosFromCursor(e, "ori"),
          positionType: e.positionType
        };
      switch (r.type) {
        case "line-up":
          if (e.lineIndex > 0) {
            var i,
              o = S.A.findEditLines(e.editor, !0)[e.lineIndex - 1];
            if (S.A.isLazyLine(o)) return _.X.lazyLine();
            var s = q.T.getBCRect(o, t);
            return N.A.build(o, e.editor, pe.y.fromRect(s).pickBuild("right", "bottom", {
              x: 1,
              y: -1
            }), n);
          }
          return new me(e.line, e).visit();
        case "line-down":
          var a = S.A.findEditLines(e.editor, !0);
          if (e.lineIndex < a.length - 1) {
            var l = a[e.lineIndex + 1];
            if (S.A.isLazyLine(l)) return _.X.lazyLine();
            var c = q.T.getBCRect(l, t);
            return N.A.build(l, e.editor, pe.y.fromRect(c).pickBuild("right", "top", {
              x: 1,
              y: 1
            }), n);
          }
          return new me(e.line, e).visit();
        case "next-char":
          return {
            type: "cursor-position",
            charIndex: r.nextCharIndex,
            lineIndex: e.lineIndex,
            line: e.line,
            editor: e.editor,
            prevPos: n
          };
        case "inside-block":
          var d = q.T.geoPosFromCursor(e, "ori");
          return new de(d, !0).visit(r.attachedElement);
      }
    }
  }
  const Ie = new Me();
  function Te(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Te(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Re extends U {
    constructor(e, t) {
      super(e), (0, n.A)(this, "forceFound", void 0), this.forceFound = t;
    }
    visitEditArea(e) {
      if (S.A.isEditAreaBlock(e)) return this.visitEditAreaBlock(e);
      if (S.A.isEditAreaLine(e)) return this.visitEditAreaLine(e);
      var t = S.A.findEditLines(e, !0),
        r = q.T.getWrappedRects(t, this.dzc),
        n = B.A.findNearestVerticalStackOfRect(r, this.pos);
      return n && S.A.isLazyLine(n.element) ? _.X.lazyLine() : this.visit(n.element);
    }
    visitEditLine(e) {
      return S.A.isLazyLine(e) ? _.X.lazyLine() : N.A.build(e, S.A.closestEditor(e), this.pos);
    }
    visitEditAreaLine(e) {
      var t = q.T.getWrappedRects([e], this.dzc),
        r = B.A.findNearestVerticalStackOfRect(t, this.pos);
      return this.visitEditLine(r.element);
    }
    visitEditAreaBlock(e) {
      return j.A.getFirstCursorPositionFormEditAreaBlock(e);
    }
    visitComposite(e) {
      var t = q.T.getWrappedRects(e.reactInstance.getEditorDoms(), this.dzc);
      if (1 == t.length) return this.visitEditArea(t[0].element);
      var r = this.pos;
      if (S.A.isFrac(e)) {
        var n = S.A.getComputedFontSize(e);
        r = Le(Le({}, r), {}, {
          top: r.top - Math.fround(n / 2)
        });
      }
      var i = B.A.findNearestRightRects(t, r, "loose-as-outside-in");
      return !i && this.forceFound && (i = t[0]), null == i ? null : this.visitEditArea(i.element);
    }
  }
  const Be = Re;
  class Fe {
    constructor(e, t) {
      (0, n.A)(this, "currentLine", void 0), (0, n.A)(this, "curPos", void 0), this.currentLine = e, this.curPos = t;
    }
    visit() {
      var e = S.A.closestEditor(this.currentLine);
      return new je(this.currentLine, this.curPos).visitEditArea(e, this.currentLine);
    }
  }
  class je extends U {
    constructor(e, t) {
      super(q.T.geoPosFromCursor(t, "middle")), (0, n.A)(this, "customVisitor", new Ne());
    }
    visitEditAreaBlock(e, t) {
      return this.visitEditArea(e, t);
    }
    visitEditAreaLine(e, t) {
      return this.visitEditArea(e, t);
    }
    visitEditArea(e, t) {
      var r = S.A.closestSymbolContainerOrRoot(e);
      return S.A.isMathTypeElement(r) ? this.getFirstCharNextNextLineOrStop(e, t) : S.A.shouldNotMoveOutsideEditor(r) ? null : this.visitComposite(r, e);
    }
    getFirstCharNextNextLineOrStop(e, t) {
      var r = S.A.getNextLine(t);
      return r ? this.visitEditLine(r, null) : null;
    }
    visitEditLine(e, t) {
      if (!t) {
        var r = q.T.getBCRect(e, this.dzc);
        return N.A.build(e, S.A.closestEditor(e), pe.y.fromRect(r).pickBuild("left", "middle"));
      }
      var n = q.T.getBCRect(t, this.dzc);
      return N.A.build(e, S.A.closestEditor(e), pe.y.fromRect(n).pickBuild("right", "middle"));
    }
    visitComposite(e, t) {
      var r = this.customVisitor.handle(e, t);
      if (r) return "outside" == r ? this.visitEditLine(S.A.closetEditLine(e), e) : new Be(this.pos).visit(r);
      var n = S.A.findEditors(e),
        i = q.T.getWrappedRects(F.Q.exclude(n, t), this.dzc),
        o = B.A.findNearestRightRects(i, this.pos, "strict-as-in-sibling");
      if (null != o) return new Be(this.pos).visit(o.element);
      var s = S.A.closetEditLine(e);
      return this.visitEditLine(s, e);
    }
  }
  const _e = Fe;
  class Ne {
    handle(e, t) {
      if (t) {
        if (u.nB(e, "integral-like-symbol")) return "outside";
        if (S.A.isTabularComposite(e)) {
          var r = t.reactInstance.getKeyName();
          if (!Q.Z.isKeyInTabularFormat(r)) return;
          var n = Z.A.getRightAvailableCellKey(r, e.reactInstance.getModel());
          if (!n) return "outside";
          var i = S.A.findEditors(e),
            o;
          return f().find(i, e => e.reactInstance.getKeyName() == n);
        }
      }
    }
  }
  class ze {
    run(e, t, r, n) {
      var i = ve.H.getLineDir(e),
        o = S.A.findBlocks(e),
        s = W.z.extract(e, o, n),
        a = ye.S.extractTuple(e, o, t, n),
        l = be.T.extractVLine(a, s, n);
      if ("empty-line" == a.type || "out-of-range" == a.type || "empty-line" == l.curInLine) return "ltr" == i ? {
        type: "line-down"
      } : {
        type: "line-up"
      };
      if ("middle-left-overlaped-index" == a.type) return {
        type: "inside-block",
        attachedElement: a.secondIRange.block,
        posibleCharIndex: 0
      };
      var c = V.l.isAtEdge(s, l.vcursor.vline);
      if ("ltr" == i && c && "right" == c[1] && c[0] == f().last(s)) return {
        type: "line-down"
      };
      if ("rtl" == i && c && "right" == c[1] && c[0] == f().first(s)) return {
        type: "line-up"
      };
      var d = Oe.extractVLineExtended(s, l, r),
        h = this.checkRightInsideMove(e, o, l, t, i, n);
      if (h) return h;
      var p = "increase";
      switch (l.type) {
        case "gap":
        case "line-wrap":
        case "single":
          p = "right" == l.flowDirection ? "increase" : "decrease";
          break;
        case "same-dir-break":
          p = "right" == l.flowDirection ? "decrease" : "increase";
          break;
        case "change-direction":
          p = "join" == l.changeDirection ? "increase" : "decrease";
      }
      var u = Oe.findByDirection(e, o, t, l, d, s, p, "right", i, r);
      return "gave-up" == u ? "end-line" == a.type ? {
        type: "line-down"
      } : {
        type: "next-char",
        nextCharIndex: t + 1
      } : u;
    }
    getInsideResultIfPossible(e, t) {
      return S.A.hasChildEditorAndAllowMoveInside(e) ? {
        type: "inside-block",
        posibleCharIndex: t,
        attachedElement: e
      } : void 0;
    }
    checkRightInsideMove(e, t, r, n, i, o) {
      switch (r.type) {
        case "gap":
        case "line-wrap":
        case "single":
          return "begin" == r.curInLine ? "right" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n) : Oe.findFirstRangeWith(e, t, n + 1, "increase", "right", o) : "end" == r.curInLine ? "left" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n - 1) : Oe.findFirstRangeWith(e, t, n - 1, "decrease", "left", o) : "right" == r.flowDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n) : this.getInsideResultIfPossible(r.altVCursor.attachedElement, n - 1);
        case "change-direction":
          return "ltr" == i ? "split" == r.changeDirection ? this.getInsideResultIfPossible(r.vcursor.attachedElement, n - 1) : Oe.findFirstRangeWith(e, t, n + 1, "increase", "right", o) : "split" == r.changeDirection ? Oe.findFirstRangeWith(e, t, n - 1, "decrease", "left", o) : this.getInsideResultIfPossible(r.vcursor.attachedElement, n);
      }
    }
  }
  var He = new ze();
  class We {
    move(e, t) {
      var r = He.run(e.line, e.charIndex, q.T.geoPosFromCursor(e, "ori"), t),
        n = {
          pos: q.T.geoPosFromCursor(e, "ori"),
          positionType: e.positionType
        };
      switch (r.type) {
        case "line-up":
          if (e.lineIndex > 0) {
            var i,
              o = S.A.findEditLines(e.editor, !0)[e.lineIndex - 1];
            if (S.A.isLazyLine(o)) return _.X.lazyLine();
            var s = q.T.getBCRect(o, t);
            return N.A.build(o, e.editor, pe.y.fromRect(s).pickBuild("left", "bottom", {
              x: 1,
              y: -1
            }), n);
          }
          return new _e(e.line, e).visit();
        case "line-down":
          var a = S.A.findEditLines(e.editor, !0);
          if (e.lineIndex < a.length - 1) {
            var l = a[e.lineIndex + 1];
            if (S.A.isLazyLine(l)) return _.X.lazyLine();
            var c = q.T.getBCRect(l, t);
            return N.A.build(l, e.editor, pe.y.fromRect(c).pickBuild("left", "top", {
              x: 1,
              y: 1
            }), n);
          }
          return new _e(e.line, e).visit();
        case "next-char":
          return {
            type: "cursor-position",
            charIndex: r.nextCharIndex,
            lineIndex: e.lineIndex,
            line: e.line,
            editor: e.editor,
            prevPos: n
          };
        case "inside-block":
          var d = q.T.geoPosFromCursor(e, "ori");
          return new Be(d, !0).visit(r.attachedElement);
      }
    }
  }
  const Ve = new We();
  function Ue(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ue(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ue(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ge {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
      (0, n.A)(this, "groupingIntervalMs", void 0), (0, n.A)(this, "stack", []), (0, n.A)(this, "index", -1), (0, n.A)(this, "lastPushTime", void 0), this.groupingIntervalMs = e;
    }
    push(e, t) {
      e.mainSelected || (e = qe(qe({}, e), {}, {
        mainSelected: {
          lineIndex: 0,
          charIndex: 0
        }
      })), !this.lastPushTime || this.stack.length <= 1 || new Date().getTime() - this.lastPushTime.getTime() >= this.groupingIntervalMs ? (this.innerHandlePush(e, t), this.lastPushTime = new Date()) : this.updateItemAtTopOfStack(e);
    }
    updateItemAtTopOfStack(e) {
      if (this.stack.length <= 0) throw new Error("something is wrong with handling history");
      this.stack[this.stack.length - 1] = e;
    }
    innerHandlePush(e, t) {
      this.limitTheHistory(), this.stack.length > this.index + 1 && (this.stack = this.stack.slice(0, this.index + 1)), t && this.stack.length > 0 && (this.stack[this.stack.length - 1] = t), this.stack.push(e), this.index = this.stack.length - 1;
    }
    limitTheHistory() {
      this.stack.length > 200 && (console.log("limit history: ", this.stack.length), this.stack = this.stack.slice(100));
    }
    clearLastPushDate() {
      this.lastPushTime && (this.lastPushTime = void 0);
    }
    canUndo() {
      return !(this.index - 1 < 0);
    }
    canRedo() {
      return !(this.index + 1 >= this.stack.length);
    }
    asArray() {
      return this.stack;
    }
    setContentArray(e) {
      this.clearLastPushDate(), this.stack = f().clone(e), this.index = e.length - 1;
    }
    undo() {
      return this.clearLastPushDate(), this.canUndo() ? (this.index--, this.stack[this.index]) : null;
      var e;
    }
    redo() {
      return this.clearLastPushDate(), this.canRedo() ? (this.index = Math.min(this.stack.length - 1, this.index + 1), this.stack[this.index]) : null;
    }
    clear() {
      this.clearLastPushDate(), this.index = -1, this.stack = [];
    }
  }
  class Ke {
    constructor() {
      (0, n.A)(this, "stack", []);
    }
    handle(e) {
      if ("left" != e && "right" != e) return this.clear(), null;
      if (this.stack.length <= 0) return null;
      var t = f().last(this.stack);
      return t.historyDirection == e ? (this.stack.pop(), t.cursorPosition) : null;
    }
    isTheSame(e, t) {
      return !!e == !!t && e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.editor == t.editor;
    }
    push(e, t) {
      var r = f().last(this.stack);
      r && this.isTheSame(r.cursorPosition, e) || (r && r.historyDirection != t && this.clear(), this.stack.push({
        cursorPosition: e,
        historyDirection: t
      }));
    }
    clear() {
      this.stack.length > 0 && (this.stack = []);
    }
  }
  var Ze = r(49812),
    Ye = r(78316);
  class Qe extends Ye.K {
    constructor() {
      super(...arguments), (0, n.A)(this, "cursorPos", void 0), (0, n.A)(this, "keyInfo", void 0), (0, n.A)(this, "action", void 0), (0, n.A)(this, "copiedLines", void 0), (0, n.A)(this, "data", void 0), (0, n.A)(this, "isUndoRedo", void 0), (0, n.A)(this, "surpressClearCursorHistory", void 0), (0, n.A)(this, "surpressScrollToCursor", void 0), (0, n.A)(this, "isOneLineChanged", void 0), (0, n.A)(this, "editorChangeInfo", void 0), (0, n.A)(this, "clearSelectedBullets", void 0);
    }
    static setSelected(e) {
      var t = new Qe();
      return t.action = "SetSelected", t.data = e, t;
    }
    static stopComposition() {
      var e = new Qe();
      return e.action = "StopComposition", e;
    }
    static requestImageLibrary(e) {
      var t = new Qe();
      return t.action = "RequestImageLibrary", t.data = {
        isInlineImage: e
      }, t;
    }
    static requestCasDialog() {
      var e = new Qe();
      return e.action = "RequestCasDialog", e.keyInfo = {
        clearHiddenIputText: !0
      }, e;
    }
    static message(e, t) {
      var r = new Qe();
      return r.action = "ShowMessage", r.data = {
        message: t,
        type: e
      }, r;
    }
    static isEmptyResult(e) {
      return !e || !e.action;
    }
    static insertRowColumnIndication() {
      var e = new Qe();
      return e.action = "InsertRowColumnIndication", e;
    }
    static emptyResult(e) {
      var t = new Qe();
      return e && (t.keyInfo = e), t;
    }
    static confirmDelete(e) {
      var t = new Qe();
      return t.action = "ConfirmDelete", t.data = e, t;
    }
    static emptyResultPreventDefault() {
      var e = Qe.emptyResult();
      return e.keyInfo = {
        noPreventDefault: !1,
        clearHiddenIputText: !1
      }, e;
    }
    static cursorPosition(e, t, r) {
      var n = new Qe();
      return n.action = "ModelCursorPosition", n.data = {
        toSelected: e,
        cursorPosition: t,
        selection: r
      }, n;
    }
    static selection(e, t, r, n) {
      var i = new Qe();
      return i.action = "Selection", i.data = {
        fromSelected: e,
        toSelected: t,
        cursorPosition: r
      }, i.surpressScrollToCursor = n, i;
    }
    static selectAllMathMode(e) {
      var t = e.findOuterMostMathScope();
      if (!t) return null;
      var r = t.block.text;
      return "\\inline-math" == r || "\\math-container" == r || "\\multiline" == r ? Qe.selectAllForEditorScope(t, "mathValue") : "\\gather" == r || "\\align" == r ? Qe.selectAllForTabularMathScope(t) : void 0;
    }
    static selectAll(e) {
      if (e.insideCodeSection()) {
        var t = e.getCodeSectionBlock();
        if (t) {
          var r = Ze.A.clearLeafLevel(e.cursorSelected);
          return Qe.selectAllForEditorScope({
            block: t,
            selectedFromRoot: r
          }, "rawCode");
        }
      }
      if (e.isAtCaption()) {
        var n = e.getParentBlockOfSelected();
        if (n) {
          var i = Ze.A.clearLeafLevel(e.cursorSelected);
          return Qe.selectAllForEditorScope({
            block: n,
            selectedFromRoot: i
          }, "caption");
        }
      }
      var o, s;
      if (!e.isTextModeSelected() && (s = Qe.selectAllMathMode(e)), s) return s;
      if (e.isInsideDiagram()) {
        var a = e.findOuterMostDiagramEditorScope();
        return a ? Qe.selectAllForEditorScope(a, a.key) : Qe.emptyResult();
      }
      var l = {
          lineIndex: 0,
          charIndex: 0
        },
        c = {
          lineIndex: e.model.lines.length - 1,
          charIndex: Ze.A.getTotalCharLastLine(e.model)
        };
      return Qe.selection(l, c, c);
    }
    static selectAllForTabularMathScope(e) {
      var t = e.block,
        r = Q.Z.getKeyFromRowCol(0, 0),
        n = Q.Z.getKeyFromRowCol(t.row - 1, t.column - 1),
        i = t.elements[n],
        o = f().cloneDeep(e.selectedFromRoot),
        s = Ze.A.findLeafSelected(o);
      s.key = r, s.selected = {
        lineIndex: 0,
        charIndex: 0
      };
      var a = f().cloneDeep(e.selectedFromRoot),
        l = Ze.A.findLeafSelected(a);
      return l.key = n, l.selected = {
        lineIndex: i.lines.length - 1,
        charIndex: Ze.A.getTotalCharLastLine(i)
      }, Qe.selection(o, a, f().cloneDeep(Ze.A.findLeafSelected(l)), !0);
    }
    static selectAllForEditorScope(e, t) {
      var r = e.block.elements[t],
        n = f().cloneDeep(e.selectedFromRoot),
        i = Ze.A.findLeafSelected(n);
      i.key = t, i.selected = {
        lineIndex: 0,
        charIndex: 0
      };
      var o = f().cloneDeep(e.selectedFromRoot),
        s = Ze.A.findLeafSelected(o);
      return s.key = t, s.selected = {
        lineIndex: r.lines.length - 1,
        charIndex: Ze.A.getTotalCharLastLine(r)
      }, Qe.selection(n, o, f().cloneDeep(Ze.A.findLeafSelected(s)), !0);
    }
    static clearCopy() {
      var e = new Qe();
      return e.action = "ClearCopy", e;
    }
    static prepareCopy(e) {
      var t = new Qe();
      return t.action = "PrepareCopy", t.copiedLines = e, t;
    }
    static fromDataOrCursorSelectedInfoChanged(e, t, r) {
      if (null == e) return Qe.emptyResultPreventDefault();
      var n = new Qe();
      return n.isUndoRedo = r, n.action = "DataOrCursorSelectedInfoChanged", n.editorChangeInfo = e, n.keyInfo = t, n;
    }
    static fromCursorChagnedFromCharId(e, t) {
      var r = new Qe();
      return r.action = "CursorChagnedFromCharId", r.cursorPos = e, r.keyInfo = t, r;
    }
    static setTemporarySelectedBlockStyle(e) {
      var t = new Qe();
      return t.action = "SetTemporarySelectedBlockStyle", t.data = e, t;
    }
    static setStyle(e, t) {
      var r = new Qe();
      return r.action = "SetStyle", r.data = e, r.isOneLineChanged = t, r;
    }
    static setLineStyle(e, t) {
      var r = new Qe();
      return r.action = "SetLineStyle", r.data = e, r.clearSelectedBullets = t, r;
    }
    static stepOut(e) {
      var t = new Qe();
      return t.action = "StepOut", t.editorChangeInfo = {
        selected: e,
        model: null
      }, t;
    }
    static externalUndoRedo(e) {
      var t = new Qe();
      return t.action = e, t;
    }
    getRelativeCursorPosition() {
      return this.getCursorPosition(this.editorChangeInfo.selected);
    }
    getRawCursorPos() {
      return this.cursorPos;
    }
    getCursorPosition(e) {
      return null != e.selected ? this.getCursorPosition(e.selected) : {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      };
      var t;
    }
  }
  var Je = r(98095),
    Xe = r(84258);
  class $e {
    constructor() {
      (0, n.A)(this, "actionMapping", void 0), Xe.A.isMac() ? this.actionMapping = new tt() : this.actionMapping = new rt();
    }
    isSaveKey(e) {
      return this.actionMapping.isSaveKey(e);
    }
    isAlphaBetaNumber(e) {
      return e >= 48 && e <= 57 || e >= 65 && e <= 90;
    }
    getCommandFrom(e, t) {
      if (!e.metaKey && !e.ctrlKey && !e.altKey && this.isAlphaBetaNumber(e.keyCode)) return {
        action: null,
        e
      };
      var r = this.actionMapping.map(e, t);
      return Xe.A.isPossibleLinux() && 90 == e.keyCode && e.shiftKey && e.ctrlKey ? {
        action: "redo",
        e
      } : {
        action: r,
        e
      };
    }
  }
  class et {}
  class tt extends et {
    isSaveKey(e) {
      return e.metaKey && 83 === e.keyCode;
    }
    map(e, t) {
      switch (e.keyCode) {
        case 55:
          return e.metaKey && e.shiftKey ? "order-list" : null;
        case 56:
          return e.metaKey && e.shiftKey ? "unorder-list" : null;
        case 49:
          return e.metaKey && e.altKey ? "section-level-1" : null;
        case 50:
          return e.metaKey && e.altKey ? "section-level-2" : null;
        case 51:
          return e.metaKey && e.altKey ? "section-level-3" : null;
        case 65:
          return e.metaKey ? "select-all" : null;
        case 66:
          return e.metaKey ? t.isTextModeSelected() ? "toggle-bold" : e.shiftKey ? "toggle-mathbb" : "toggle-mathbf" : null;
        case 73:
          return e.metaKey && t.isTextModeSelected() ? "toggle-italic" : null;
        case 85:
          return e.metaKey && t.isTextModeSelected() ? "toggle-underline" : null;
        case 67:
          return e.metaKey ? e.shiftKey && !t.isTextModeSelected() ? "toggle-mathcal" : "copy" : null;
        case 82:
          return t.isMathModeSelected() && e.metaKey && e.shiftKey ? "toggle-mathrm" : t.isTextModeSelected() && e.metaKey && e.shiftKey ? "align-right" : null;
        case 76:
          return t.isTextModeSelected() && e.metaKey && e.shiftKey ? "align-left" : void 0;
        case 69:
          return t.isTextModeSelected() && e.metaKey && e.shiftKey ? "align-middle" : void 0;
        case 74:
          return t.isTextModeSelected() && e.metaKey && e.shiftKey ? "align-justify" : void 0;
        case 86:
          return e.metaKey ? "paste" : null;
        case 88:
          return e.metaKey ? "cut" : null;
        case 37:
          return e.metaKey ? "first-line" : e.altKey ? "previous-break" : "left";
        case 115:
          return e.metaKey || e.ctrlKey ? "home" : "first-line";
        case 38:
          return e.metaKey ? "home" : "up";
        case 39:
          return e.metaKey ? "end-line" : e.altKey ? "next-break" : "right";
        case 119:
          return e.metaKey || e.ctrlKey ? "end" : "end-line";
        case 40:
          return e.metaKey ? "end" : e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey ? "duplicate-line" : "down";
        case 13:
          return e.shiftKey ? "enter-clear" : "enter";
        case 8:
          return e.altKey ? "word-backspace" : "backspace";
        case 90:
          return e.metaKey && e.shiftKey ? "redo" : e.metaKey ? "undo" : null;
        case 9:
          return e.ctrlKey ? null : t.isSelectedLineListType() ? e.shiftKey ? "outdent" : "indent" : t.isAtTabularCell() ? e.shiftKey ? "previous-cell" : t.isLastTabularCell() ? "step-out" : "next-cell" : t.isTextModeSelected() ? "tab" : e.shiftKey ? t.findPreviousElementNameOfComposite() ? "previous-element" : "none" : t.findNextElementNameOfComposite() ? "next-element" : "step-out";
          var r, n;
        case 46:
          return e.altKey ? "word-delete" : "delete";
      }
    }
  }
  class rt extends et {
    isSaveKey(e) {
      return e.ctrlKey && 83 == e.keyCode;
    }
    map(e, t) {
      switch (e.keyCode) {
        case 55:
          return e.ctrlKey && e.shiftKey ? "order-list" : null;
        case 56:
          return e.ctrlKey && e.shiftKey ? "unorder-list" : null;
        case 49:
          return e.ctrlKey && e.altKey ? "section-level-1" : null;
        case 50:
          return e.ctrlKey && e.altKey ? "section-level-2" : null;
        case 51:
          return e.ctrlKey && e.altKey ? "section-level-3" : null;
        case 65:
          return e.ctrlKey ? "select-all" : null;
        case 66:
          return e.ctrlKey ? t.isTextModeSelected() ? "toggle-bold" : e.shiftKey ? "toggle-mathbb" : "toggle-mathbf" : null;
        case 73:
          return e.ctrlKey && t.isTextModeSelected() ? "toggle-italic" : null;
        case 85:
          return e.ctrlKey && t.isTextModeSelected() ? "toggle-underline" : null;
        case 67:
          return e.ctrlKey ? e.shiftKey && !t.isTextModeSelected() ? "toggle-mathcal" : "copy" : null;
        case 82:
          return t.isMathModeSelected() && e.ctrlKey && e.shiftKey ? "toggle-mathrm" : t.isTextModeSelected() && e.ctrlKey && e.shiftKey ? "align-right" : null;
        case 76:
          return t.isTextModeSelected() && e.ctrlKey && e.shiftKey ? "align-left" : void 0;
        case 69:
          return t.isTextModeSelected() && e.ctrlKey && e.shiftKey ? "align-middle" : void 0;
        case 74:
          return t.isTextModeSelected() && e.ctrlKey && e.shiftKey ? "align-justify" : void 0;
        case 86:
          return e.ctrlKey ? "paste" : null;
        case 88:
          return e.ctrlKey ? "cut" : null;
        case 37:
          return e.ctrlKey ? "previous-break" : "left";
        case 36:
          return e.ctrlKey ? "home" : "first-line";
        case 38:
          return "up";
        case 35:
          return e.ctrlKey ? "end" : "end-line";
        case 39:
          return e.ctrlKey ? "next-break" : "right";
        case 40:
          return e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey ? "duplicate-line" : "down";
        case 13:
          return e.shiftKey ? "enter-clear" : "enter";
        case 8:
          return e.ctrlKey ? "word-backspace" : "backspace";
        case 89:
          return e.ctrlKey ? "redo" : null;
        case 90:
          return e.ctrlKey ? "undo" : null;
        case 9:
          return e.ctrlKey ? null : t.isSelectedLineListType() ? e.shiftKey ? "outdent" : "indent" : t.isAtTabularCell() ? e.shiftKey ? "previous-cell" : t.isLastTabularCell() ? "step-out" : "next-cell" : t.isTextModeSelected() ? "tab" : e.shiftKey ? t.findPreviousElementNameOfComposite() ? "previous-element" : "none" : t.findNextElementNameOfComposite() ? "next-element" : "step-out";
          var r, n;
        case 46:
          return e.ctrlKey ? "word-delete" : "delete";
      }
    }
  }
  const nt = new $e();
  function it(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ot(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? it(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : it(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class st {
    handleText(e, t, r) {
      if (!e) return null;
      if (t.isTextModeSelected()) {
        if ("$" == e) {
          var n = Je.A.getInlineMathContainerModel();
          return r && (n = ot(ot({}, n), {}, {
            style: ot(ot({}, n.style), {}, {
              mathModeType: "\\displaystyle"
            })
          })), n;
        }
        return null;
      }
      return t.isInsideTextSymbol() ? null : "[" == e || "(" == e || "{" == e || "]" == e || ")" == e || "}" == e ? Je.A.getCompositeOrSingleModel(e) : "^" == e || "_" == e ? Je.A.getCompositeOrSingleModel("^" == e ? "\\power" : "\\index") : null;
    }
  }
  const at = new st();
  var lt = r(86745),
    ct = r(13620),
    dt = r(61848);
  class ht {
    move(e) {
      var t = this.changeSelected(e.cursorSelected);
      return dt.A.setProp(e, "cursorSelected", t);
    }
    changeSelected(e) {
      if (null == e.selected) throw new Error("wrong data passed");
      return null == e.selected.selected ? dt.A.update(e, {
        selected: void 0,
        key: void 0,
        charIndex: e.charIndex + 1
      }) : dt.A.setProp(e, "selected", this.changeSelected(e.selected));
    }
  }
  const pt = new ht();
  var ut = r(46086),
    gt = r(7849),
    mt = r(97372);
  class ft {
    constructor() {
      (0, n.A)(this, "blockStyle", void 0);
    }
    setStyle(e, t) {
      return this.blockStyle = f().clone(this.blockStyle || {}), this.blockStyle[e] = t, this.blockStyle;
    }
    getStyleObj() {
      return this.blockStyle;
    }
    clear() {
      this.blockStyle && (this.blockStyle = void 0);
    }
  }
  const yt = ft;
  var vt = r(30803),
    bt = r(79490),
    xt = r(72966);
  class Ct {
    visitEditor(e) {
      var t = e.editorSelected,
        r = e.extendedEditorSelected,
        n = e.obj,
        i = e.findSelectedEditor,
        o = e.processEditor,
        s = new xt.A(t, r);
      if (s.isCurrentLevelSameRoute() && t.selected) {
        var a = i(n, t.lineIndex, t.charIndex, t.key);
        return a ? this.visitEditor({
          editorSelected: t.selected,
          extendedEditorSelected: r.selected,
          obj: a,
          findSelectedEditor: i,
          processEditor: o
        }) : null;
      }
      return o(s, n);
    }
  }
  const St = new Ct();
  function At(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function wt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? At(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : At(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Et {
    getSelectedEditor(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "null",
        n = this.innerGetSelectedEditor(e, t, r);
      if (n) return n[0];
    }
    getSelectedEditorWithLeafSelected(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "null";
      return this.innerGetSelectedEditor(e, t, r);
    }
    innerGetSelectedEditor(e, t, r) {
      if (t.selected) {
        var n = S.A.findLineByIndex(e, t.lineIndex),
          i = he.A.findSelectedBlock(n, t.charIndex);
        if (!i) {
          if ("null" == r) return console.warn("char index out of bound"), null;
          var o = S.A.findBlocks(n);
          if (o.length <= 0) return [e, t];
          i = {
            element: f().last(o),
            localIndex: he.A.getNumberOfCharsInBlock(f().last(o))
          };
        }
        i.sub && (i = i.sub);
        var s = i.element.reactInstance;
        if (!s) return "null" == r ? (console.warn("selected block is not composite"), null) : [e, t];
        if (s.isTemporaryContentHidden && s.isTemporaryContentHidden()) return console.log("compositeBlock isTemporaryContentHidden"), [e, wt(wt({}, t), {}, {
          key: void 0,
          selected: void 0
        })];
        var a = s.refMap[t.key];
        return a ? this.innerGetSelectedEditor(a.editor, t.selected, r) : "null" == r ? (console.warn("key is out of bound"), null) : [e, t];
      }
      return [e, t];
    }
    findLine(e, t) {
      var r = S.A.findLineByIndex(e, t.lineIndex);
      if (!t.selected) return r;
      var n = he.A.findSelectedBlock(r, t.charIndex);
      if (n.sub && (n = n.sub), !n.element.reactInstance) throw new Error("selected is wrong: " + JSON.stringify(t));
      var i = n.element.reactInstance.refMap[t.key].editor;
      return this.findLine(i, t.selected);
    }
    closestMathArea(e, t) {
      var r = this.getSelectedEditor(e, t);
      return u.f$(r, "compositeblock.role-mathmode-area, dg-editor-container")[0];
    }
    closestCompositeBlock(e, t) {
      var r = this.getSelectedEditor(e, t);
      return u.f$(r, "compositeblock")[0];
    }
  }
  const kt = new Et();
  var Ot = r(21735),
    Dt = r(21774);
  class Pt {
    isCodeSectionEditArea(e) {
      return e.className && e.className.indexOf("code-section-edit-area") >= 0;
    }
    getRectOfFirstLineBlocksContainer(e, t) {
      var r = S.A.getFirstEditLine(e),
        n = S.A.getBlocksContainerElement(r);
      return q.T.getBCRect(n, t);
    }
  }
  const Mt = new Pt();
  function It(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Tt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? It(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : It(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Lt {
    getLeafSelected(e) {
      return null == e.selected ? e : this.getLeafSelected(e.selected);
    }
    getLeafEditor(e, t) {
      if (null == t.selected) return e;
      var r = this.getNestedEditor(e, t);
      return this.getLeafEditor(r, t.selected);
    }
    getNestedEditor(e, t) {
      var r = t.lineIndex,
        n = t.charIndex,
        i = t.key,
        o;
      return Ze.A.blockFromIndex(e.lines[r], n).block.elements[i];
    }
    buildSelectionRectsFromEditor(e) {
      if ("text-selection" == e.type) {
        var t = e.rootEditor,
          r = e.selected,
          n = e.extendSelected,
          i = e.elementToCalculate,
          o = e.dzContainer,
          s = q.T.getBCRect(i, o);
        return St.visitEditor({
          editorSelected: r,
          extendedEditorSelected: n,
          obj: t,
          findSelectedEditor: (e, t, r, n) => {
            var i = this.getCompositeBlock(e, t, r);
            if (i && "lazy-line" != i.type) return i.blockHtml.reactInstance.refMap[n].editor;
          },
          processEditor: (e, t) => this.buildSelectionRects(t, e, s)
        });
      }
      if ("list-type-selection" == e.type) {
        var a = e.rootEditor,
          l = e.selected,
          c = e.leafSelected,
          d = e.elementToCalculate,
          h = e.dzContainer,
          p = q.T.getBCRect(d, h),
          u = kt.findLine(a, l);
        if ("single" == c.listTypeSelect) return [this.findPrefixRectForLine(u, p)];
        var g = Ot.A.expandRelatedListItemHtmlLines(u);
        return "level" == c.listTypeSelect ? Ot.A.findHtmlLinesSameLevel(u, g).map(e => this.findPrefixRectForLine(e, p)) : g.map(e => this.findPrefixRectForLine(e, p));
      }
      return [];
    }
    findPrefixRectForLine(e, t) {
      var r = u.YG(e, ">prefix");
      if (0 == r.length) throw new Error("must have prefix for line");
      return q.T.getBCRectToRect(r[0], t);
    }
    buildCursorSelectedFindResultPosition(e, t) {
      var r = {
        from: {
          lineIndex: 0,
          charIndex: 0
        },
        to: {
          lineIndex: 0,
          charIndex: 0
        }
      };
      return this.innerBuildCursorSelectedFindResultPosition(e, t, r.from, r.to), r;
    }
    innerBuildCursorSelectedFindResultPosition(e, t, r, n) {
      var i = e[t.resultIndex];
      if (t.nestedPosition) {
        r.lineIndex = i.lineIndex, r.charIndex = i.charIndex, n.lineIndex = i.lineIndex, n.charIndex = i.charIndex, r.selected = {
          lineIndex: 0,
          charIndex: 0
        }, n.selected = {
          lineIndex: 0,
          charIndex: 0
        };
        var o = this.innerBuildCursorSelectedFindResultPosition(i.children, t.nestedPosition, r.selected, n.selected);
        r.key = o, n.key = o;
      } else r.lineIndex = i.from.lineIndex, r.charIndex = i.from.charIndex, n.lineIndex = i.to.lineIndex, n.charIndex = i.to.charIndex + 1;
      return i.key;
    }
    buildRectsFromFindResults(e, t, r) {
      var n = [];
      return this.innerBuildRectsFromFindResults(e, t, r, n), n;
    }
    innerBuildRectsFromFindResults(e, t, r, n) {
      for (var i = 0; i < t.length; i++) {
        var o = t[i];
        n.push({
          rects: this.buildRectsFromLineResult(o, e, r)
        });
      }
    }
    buildRectsFromLineResult(e, t, r) {
      var n = [];
      if (e.from && e.to && (n = n.concat(this.buildNonTabularRects(t, {
        fromLineIndex: e.from.lineIndex,
        fromCharIndex: e.from.charIndex,
        toLineIndex: e.to.lineIndex,
        toCharIndex: e.to.charIndex + 1
      }, r))), e.children) {
        var i = this.getCompositeBlock(t, e.lineIndex, e.charIndex);
        if (!i) return n;
        if ("lazy-line" == i.type) return n.concat([this.buildLazyLine(i.line, r, this.countFindResultChildren(e))]);
        e.children.forEach(e => {
          var t = i.blockHtml.reactInstance.refMap[e.key];
          if (t) {
            var o = t.editor;
            n = n.concat(this.buildRectsFromLineResult(e, o, r));
          }
        });
      }
      return n;
    }
    buildLazyLine(e, t, r) {
      return 1 == r ? q.T.getBCRectToRect(e, t) : Tt(Tt({}, q.T.getBCRectToRect(e, t)), {}, {
        accumulatedCount: r
      });
    }
    countFindResultChildren(e) {
      return e.from && e.to ? 1 : f().sumBy(e.children, e => this.countFindResultChildren(e));
    }
    getCompositeBlock(e, t, r) {
      var n = S.A.findLineByIndex(e, t);
      if (S.A.isLazyLine(n)) return {
        type: "lazy-line",
        line: n
      };
      var i = he.A.findSelectedBlock(n, r);
      return i.sub && (i = i.sub), {
        type: "block-found",
        blockHtml: i.element
      };
    }
    buildRectsForTabularSelect(e, t, r) {
      var n = t.getTabularSelectedKeys(),
        i = this.getCompositeBlock(e, t.fromLineIndex, t.fromCharIndex);
      return i ? "lazy-line" == i.type ? [this.buildLazyLine(i.line, r, 1)] : f().flatMap(n, e => {
        var t = i.blockHtml.reactInstance.getEditorDomByKey(e);
        return t ? [q.T.getBCRectToRect(t, r)] : [];
      }) : [];
    }
    buildSelectionRects(e, t, r) {
      return t.isTabularRoute() ? this.buildRectsForTabularSelect(e, t, r) : this.isEmptySelection(t) ? [] : this.buildNonTabularRects(e, t, r);
    }
    buildNonTabularRects(e, t, r) {
      if (S.A.isEditAreaBlock(e)) return this.buildSelectionInSingleCharBlock(e, r, t.fromCharIndex, t.toCharIndex);
      var n = this.buildFirstAndLastRects(e, t, r);
      if ("all" == n.type) return n.firstRects.concat(n.lastRects);
      if (n.firstRects.length <= 0 || n.lastRects.length <= 0) return n.firstRects.concat(n.lastRects);
      var i = f().maxBy(n.firstRects, e => e.bottom).bottom,
        o = f().minBy(n.lastRects, e => e.top).top,
        s = this.buildMiddleRect(r, e, i, o);
      return s ? n.firstRects.concat([s]).concat(n.lastRects) : n.firstRects.concat(n.lastRects);
    }
    buildMiddleRect(e, t, r, n) {
      if (r + 2 < n) {
        var i = q.T.getBCRect(t, e.zc),
          o = i.left - e.left,
          s = o + q.T.widthOf(i);
        return Mt.isCodeSectionEditArea(t) && (o = Mt.getRectOfFirstLineBlocksContainer(t, e.zc).left - e.left), q.T.buildBcRect(o, r, s, n, e.zc);
      }
      return null;
    }
    findRectIncludingMargin(e, t) {
      if (S.A.isSubSuperScript(e) || S.A.isBibCiteBlock(e) || S.A.isSectionRef(e)) return q.T.getBCRectsToRect(e, t);
      var r = q.T.getBCRectToRect(e, t),
        n = window.getComputedStyle(e),
        i = r.left - this.parseOrZero(n.marginLeft),
        o = r.top - this.parseOrZero(n.marginTop),
        s = r.right + this.parseOrZero(n.marginRight),
        a = r.bottom + this.parseOrZero(n.marginBottom);
      return [q.T.buildBcRect(i, o, s, a, t.zc)];
    }
    parseOrZero(e) {
      var t = Number.parseFloat(e);
      return Number.isNaN(t) ? 0 : t;
    }
    buildRectsFromLine(e, t, r, n) {
      if (S.A.isLazyLine(e)) return [this.buildLazyLine(e, n, 1)];
      var i = S.A.findBlocks(e);
      if (0 == i.length) {
        var o = S.A.getEmptyBlock(e),
          s;
        return [q.T.getBCRectToRect(o, n)];
      }
      for (var a = 0, l = Dt.A.emptyArr, c = 0; c < i.length; c++) {
        var d = i[c],
          h = S.A.isNonChar(d),
          p = xe.Ay.getUnistring(d),
          u = h ? 1 : p.length;
        if (a + u <= t) a += u;else if (h) {
          if (l = l.concat(this.findRectIncludingMargin(d, n)), (a += 1) >= r) break;
        } else {
          var g = Math.max(0, t - a),
            m = Math.min(r - a, u);
          if (0 == g && m == u) l = l.concat([q.T.getBCRectToRect(d, n)]);else {
            var y = S.A.rangeFrom2Indexes(d, p.rawIndexAt(g), p.rawIndexAt(m)),
              v = q.T.getBCRectsToRect(y, n);
            l = l.concat(v);
          }
          if ((a += u) >= r) break;
        }
      }
      if (0 == l.length && r >= a) {
        if ("ltr" == S.A.getTextDirectionFromLine(e)) {
          var b = f().last(q.T.getBCRectsToRect(f().last(i), n));
          return [q.T.buildBcRectWH(b.right, b.top, 2, q.T.heightOf(b), n.zc)];
        }
        var x = i.map(e => ({
            r: q.T.getBCRectToRect(e, n),
            b: e
          })),
          C = f().orderBy(x, [e => e.r.bottom, e => e.r.right], ["desc", "desc"]),
          A = f().last(C).b,
          w = f().last(q.T.getBCRectsToRect(A, n));
        return [q.T.buildBcRectWH(w.right, w.top, 2, q.T.heightOf(w), n.zc)];
      }
      return this.joinRects(l);
    }
    joinRects(e) {
      if (0 == e.length) return e;
      var t = [];
      t.push(e[0]);
      for (var r = 1; r < e.length; r++) {
        var n = e[r],
          i = t[t.length - 1];
        this.equalTolerate(n.left, i.right) && this.equalTolerate(n.top, i.top) && this.equalTolerate(n.bottom, i.bottom) ? t[t.length - 1] = Tt(Tt({}, i), {}, {
          right: n.right
        }) : this.equalTolerate(n.left, i.right) ? (t[t.length - 1] = Tt(Tt({}, i), {}, {
          right: n.left + .5
        }), t.push(n)) : t.push(n);
      }
      return t;
    }
    equalTolerate(e, t) {
      return Math.abs(e - t) <= 2;
    }
    buildFirstAndLastRects(e, t, r) {
      var n = S.A.findLineByIndex(e, t.fromLineIndex);
      if (t.fromLineIndex == t.toLineIndex) return {
        type: "all",
        firstRects: this.buildRectsFromLine(n, t.fromCharIndex, t.toCharIndex, r),
        lastRects: Dt.A.emptyArr
      };
      var i = S.A.findLineByIndex(e, t.toLineIndex),
        o = this.buildRectsFromLine(n, t.fromCharIndex, Number.MAX_SAFE_INTEGER, r),
        s = this.buildRectsFromLine(i, 0, t.toCharIndex, r);
      return Math.abs(t.toLineIndex - t.fromLineIndex) <= 1 ? {
        type: "all",
        firstRects: o,
        lastRects: s
      } : {
        type: "partial",
        firstRects: o,
        lastRects: s
      };
    }
    buildSelectionInSingleCharBlock(e, t, r, n) {
      var i = S.A.rangeFrom2Indexes(e, xe.Ay.rawIndexAt(e, r), xe.Ay.rawIndexAt(e, n));
      return q.T.getBCRectsToRect(i, t);
    }
    isEmptySelection(e) {
      return e.fromLineIndex == e.toLineIndex && e.fromCharIndex == e.toCharIndex;
    }
    isSameRoute(e, t) {
      return new xt.A(e, t).isLeafLevelSameRoute();
    }
    isNoSelectionOrSameRoute(e, t) {
      return !e || !t || this.isSameRoute(e, t);
    }
    getFirstSelected(e, t) {
      return this.isNoSelectionOrSameRoute(e, t) ? e || t : new xt.A(e, t).fromSelected;
    }
  }
  const Rt = new Lt();
  function Bt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ft(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Bt(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class jt {
    expandSelectionWithSameStyle(e, t) {
      if (Rt.isNoSelectionOrSameRoute(e.cursorSelected, e.extendedCursorSelected)) return this.expandSelectionWithSameStyleForNoSelection(e, t);
      var r, n, i, o;
      lt.A.handleEditor(e, e => {
        var s = e.selection;
        i = s.fromSelected, o = s.toSelected;
        var a = e.editorModel.lines[i.lineIndex],
          l = e.editorModel.lines[o.lineIndex],
          c = Ze.A.getBlocksInfo(a),
          d = i.lineIndex == o.lineIndex ? c : Ze.A.getBlocksInfo(l);
        return r = this.expandLeft(c, i, t), n = this.expandRight(d, o, t), null;
      }, !1);
      var s = this.buildNewRootSelected(e.cursorSelected, i, o, r, n),
        a = this.buildNewRootSelected(e.extendedCursorSelected, i, o, r, n);
      return Qe.selection(a, s, Ze.A.findLeafSelected(s));
    }
    expandSelectionWithSameStyleForNoSelection(e, t) {
      var r = Ze.A.findLeafSelected(e.cursorSelected),
        n,
        i = Ze.A.getSelectedEditor(e.model, e.cursorSelected).lines[r.lineIndex],
        o = Ze.A.getBlocksInfo(i),
        s = o.find(e => e.start <= r.charIndex && r.charIndex <= e.end),
        a;
      if (!s) return Qe.emptyResult();
      if (!k.A.safeGetBlockStyle(s.block, t)) return Qe.emptyResult();
      var l = this.expandLeft(o, r, t),
        c = this.expandRight(o, r, t);
      if (r == e.cursorSelected) return Rt.isSameRoute(l, c) ? Qe.emptyResult() : Qe.selection(l, c, Ze.A.findLeafSelected(l));
      var d = f().cloneDeep(e.cursorSelected),
        h = f().cloneDeep(e.cursorSelected),
        p = Ze.A.findLeafParentSelected(d),
        u = Ze.A.findLeafParentSelected(h);
      return p.selected = l, u.selected = c, Rt.isSameRoute(d, h) ? Qe.emptyResult() : Qe.selection(p, u, Ze.A.findLeafSelected(p));
    }
    expandRight(e, t, r) {
      var n = e.find(e => e.start <= t.charIndex && t.charIndex <= e.end);
      if (!n) return t;
      var i = k.A.safeGetBlockStyle(n.block, r);
      if (!i) return t;
      for (var o = Ft(Ft({}, t), {}, {
          charIndex: n.end + 1
        }), s = n.blockIndex; s < e.length; s++) {
        var a = e[s],
          l;
        if (k.A.safeGetBlockStyle(a.block, r) != i) break;
        o = Ft(Ft({}, t), {}, {
          charIndex: a.end + 1
        });
      }
      return o;
    }
    expandLeft(e, t, r) {
      var n = e.find(e => e.start <= t.charIndex && t.charIndex <= e.end);
      if (!n) return t;
      var i = k.A.safeGetBlockStyle(n.block, r);
      if (!i) return t;
      for (var o = Ft(Ft({}, t), {}, {
          charIndex: n.start
        }), s = n.blockIndex; s >= 0; s--) {
        var a = e[s],
          l;
        if (k.A.safeGetBlockStyle(a.block, r) != i) break;
        o = Ft(Ft({}, t), {}, {
          charIndex: a.start
        });
      }
      return o;
    }
    buildNewRootSelected(e, t, r, n, i) {
      if (e == t) return n;
      if (e == r) return i;
      var o = Ze.A.findParentSelectedOf(e, t);
      if (o) {
        var s = f().cloneDeep(e);
        return o.selected = n, s;
      }
      if (o = Ze.A.findParentSelectedOf(e, r)) {
        var a = f().cloneDeep(e);
        return o.selected = i, a;
      }
      throw new Error("moust found");
    }
  }
  const _t = new jt();
  class Nt {
    constructor(e, t) {
      (0, n.A)(this, "line", void 0), (0, n.A)(this, "charIndex", void 0), (0, n.A)(this, "currentResult", void 0), this.line = e, this.charIndex = t;
      var r = Ze.A.blockFromIndex(e, t);
      if (null != r) {
        var i = t - r.startIndex;
        this.currentResult = {
          block: r.block,
          blockStartIndex: r.startIndex,
          blockEndIndex: r.endIndex,
          blockIndex: r.blockIndex,
          localIndex: i,
          char: mt.A.charFromLocalIndex(r.block, i),
          charIndex: t
        };
      }
    }
    clone() {
      return f().clone(this);
    }
    next() {
      if (null == this.currentResult) return null;
      if (this.charIndex += 1, this.charIndex > this.currentResult.blockEndIndex) {
        var e = this.currentResult.blockIndex + 1;
        if (e >= this.line.blocks.length) return this.currentResult = null, null;
        var t = this.line.blocks[e],
          r = mt.A.getCharCount(t);
        return this.currentResult = {
          block: t,
          blockIndex: e,
          blockStartIndex: this.currentResult.blockEndIndex + 1,
          blockEndIndex: this.currentResult.blockEndIndex + r,
          localIndex: 0,
          char: mt.A.charFromLocalIndex(t, 0),
          charIndex: this.charIndex
        }, this.currentResult;
      }
      var n = f().clone(this.currentResult);
      return n.charIndex += 1, n.localIndex += 1, n.char = mt.A.charFromLocalIndex(this.currentResult.block, n.localIndex), this.currentResult = n, this.currentResult;
    }
    back() {
      if (null == this.currentResult) return null;
      if (this.charIndex -= 1, this.charIndex < this.currentResult.blockStartIndex) {
        var e = this.currentResult.blockIndex - 1;
        if (e < 0) return this.currentResult = null, null;
        var t = this.line.blocks[e],
          r = mt.A.getCharCount(t);
        return this.currentResult = {
          block: t,
          blockIndex: e,
          blockStartIndex: this.currentResult.blockStartIndex - r,
          blockEndIndex: this.currentResult.blockStartIndex - 1,
          localIndex: r - 1,
          char: mt.A.charFromLocalIndex(t, r - 1),
          charIndex: this.charIndex
        }, this.currentResult;
      }
      var n = f().clone(this.currentResult);
      return n.charIndex -= 1, n.localIndex -= 1, n.char = mt.A.charFromLocalIndex(this.currentResult.block, n.localIndex), this.currentResult = n, this.currentResult;
    }
    nextWhile(e) {
      for (; null != this.currentResult && e(this.currentResult);) this.next();
      return this.currentResult;
    }
    backWhile(e) {
      for (; null != this.currentResult && e(this.currentResult);) this.back();
      return this.currentResult;
    }
    current() {
      return this.currentResult;
    }
  }
  class zt {
    constructor(e, t, r) {
      if ((0, n.A)(this, "editor", void 0), (0, n.A)(this, "lineIndex", void 0), (0, n.A)(this, "currentLine", void 0), (0, n.A)(this, "lineCharIterator", void 0), (0, n.A)(this, "currentResult", void 0), this.editor = e, this.lineIndex = t, this.currentLine = e.lines[t], this.lineCharIterator = new Nt(this.currentLine, r), null == this.lineCharIterator.current() && t >= this.editor.lines.length - 1) return null;
      this.currentResult = this.fillWithLineInfoOrLineBreakResult(this.lineCharIterator.current(), r);
    }
    next() {
      if (this.currentResult && this.currentResult.isLineBreak) return this.lineIndex++, this.currentLine = this.editor.lines[this.lineIndex], this.lineCharIterator = new Nt(this.currentLine, 0), this.currentResult = this.fillWithLineInfoOrLineBreakResult(this.lineCharIterator.current()), this.currentResult;
      var e = this.lineCharIterator.next();
      return e ? (this.currentResult = this.fillWithLineInfoOrLineBreakResult(e), this.currentResult) : this.lineIndex >= this.editor.lines.length - 1 ? (this.currentResult = null, null) : (this.currentResult = this.lineBreakResult(this.currentResult.charIndex + 1), this.currentResult);
    }
    lineBreakResult(e) {
      return {
        block: null,
        blockIndex: 0,
        blockStartIndex: 0,
        blockEndIndex: 0,
        charIndex: e || 0,
        line: this.currentLine,
        isLineBreak: !0,
        lineIndex: this.lineIndex,
        localIndex: 0,
        char: null
      };
    }
    back() {
      if (this.currentResult && this.currentResult.isLineBreak) {
        this.lineCharIterator = new Nt(this.currentLine, Math.max(0, Ze.A.getTotalChar(this.currentLine.blocks) - 1));
        var e = this.lineCharIterator.current();
      } else var e = this.lineCharIterator.back();
      return e ? (this.currentResult = this.fillWithLineInfoOrLineBreakResult(e), this.currentResult) : this.lineIndex <= 0 ? (this.currentResult = null, null) : (this.lineIndex--, this.currentLine = this.editor.lines[this.lineIndex], this.lineCharIterator = null, this.currentResult = this.fillWithLineInfoOrLineBreakResult(null, Ze.A.getTotalChar(this.currentLine.blocks)), this.currentResult);
    }
    current() {
      return this.currentResult;
    }
    nextWhile(e) {
      for (; null != this.currentResult && e(this.currentResult);) this.next();
      return this.currentResult;
    }
    backWhile(e) {
      for (; null != this.currentResult && e(this.currentResult);) this.back();
      return this.currentResult;
    }
    fillWithLineInfoOrLineBreakResult(e, t) {
      if (null == e) return this.lineBreakResult(t);
      var r = e;
      return r.line = this.currentLine, r.lineIndex = this.lineIndex, r;
    }
  }
  var Ht = r(86081),
    Wt = r(3453);
  class Vt {
    next(e, t) {
      for (var r = this.cloneBasicSelected(e.cursorSelected), n = Rt.getLeafSelected(r), i = !1, o = e.cursorPos, s, a = S.A.findBlocks(o.line).map(e => [e, S.A.isChar(e) ? xe.Ay.getUnistring(e) : " "]), l = 0; l < 50; l++) {
        var c = e.getDocZoomContainer(),
          d = "right" == t ? He.run(o.line, n.charIndex, q.T.geoPosFromCursor(o, "ori"), c) : Pe.run(o.line, n.charIndex, q.T.geoPosFromCursor(o, "ori"), c);
        if (!d) return;
        if ("next-char" != d.type) return l > 0 ? {
          type: "selected",
          cloneSelected: r,
          leafSelected: n
        } : {
          type: "dom-cursor-info",
          info: "right" == t ? Ve.move(o, c) : Ie.move(o, c)
        };
        var h = this.findCharAtIdx(a, n.charIndex, d.nextCharIndex),
          p = !h || h.match(/\s/);
        if (p && i) return {
          type: "selected",
          cloneSelected: r,
          leafSelected: n
        };
        p || (i = !0), n.charIndex = d.nextCharIndex;
      }
      return {
        type: "selected",
        cloneSelected: r,
        leafSelected: n
      };
    }
    findCharAtIdx(e, t, r) {
      try {
        var n = 0,
          i,
          o;
        if (t > r) {
          var s = [r, t];
          t = s[0], r = s[1];
        }
        for (var a = 0; a < e.length; a++) {
          var l = (0, Wt.A)(e[a], 2),
            c = l[0],
            d = l[1];
          if (n <= t && t < n + d.length && !i && (i = {
            block: c,
            rawIdx: d.rawIndexAt(t - n)
          }), n <= r && r <= n + d.length && !o && (o = {
            block: c,
            rawIdx: d.rawIndexAt(r - n)
          }), n += d.length, i && o) break;
        }
        if (o && i) {
          if (S.A.isComposite(i.block) || S.A.isComposite(o.block)) return;
          var h;
          return S.A.rangeFrom2DifBlocksIndexes(i.block, i.rawIdx, o.block, o.rawIdx).toString();
        }
      } catch (e) {
        return console.warn(e), " ";
      }
      return " ";
    }
    cloneBasicSelected(e) {
      return {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex,
        key: e.key,
        selected: f().cloneDeep(e.selected)
      };
    }
  }
  var Ut = new Vt();
  function qt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Gt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? qt(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Kt {
    moveToNextBreak(e) {
      return this.getNextBreakSelected(e);
    }
    getNextBreakSelected(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = Rt.getLeafSelected(t),
        n = Rt.getLeafEditor(e.model, t),
        i,
        o;
      if (e.isTextModeSelected() && "rtl" == (null === (i = n.lines[r.lineIndex].style) || void 0 === i ? void 0 : i.textDirection)) return Ut.next(e, "right");
      var s = new zt(n, r.lineIndex, r.charIndex);
      s.nextWhile(e => " " == e.char);
      for (var a = s.current(), l = this.getBlockCategory(a, e.isTextModeSelected()); s.next();) {
        a = s.current();
        var c = this.getBlockCategory(a, e.isTextModeSelected());
        if ("space" == c || "line-break" == c || l != c) return r.charIndex = a.charIndex, r.lineIndex = a.lineIndex, {
          type: "selected",
          cloneSelected: t,
          leafSelected: f().clone(r)
        };
      }
      var d = Ze.A.getTotalCharLastLine(n),
        h = n.lines.length - 1;
      if (r.lineIndex != h || r.charIndex != d) return r.charIndex = Ze.A.getTotalCharLastLine(n), r.lineIndex = n.lines.length - 1, {
        type: "selected",
        cloneSelected: t,
        leafSelected: f().clone(r)
      };
    }
    getBlockCategory(e, t) {
      if (!e) return "null";
      if (e.isLineBreak) return "line-break";
      if (!e.block) return "null";
      if (Ht.A.isComposite(e.block)) return "composite";
      var r = e.char;
      return " " == r ? "space" : t && ("(" == r || ")" == r || "{" == r || "}" == r || "[" == r || "]" == r || "." == r || "," == r || ";" == r || '"' == r || "'" == r) ? "non-normal-char" : "normal-char";
    }
    cloneBasicSelected(e) {
      return {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex,
        key: e.key,
        selected: f().cloneDeep(e.selected)
      };
    }
    getPreviousBreakSelected(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = Rt.getLeafSelected(t),
        n = Rt.getLeafEditor(e.model, t),
        i,
        o;
      if (e.isTextModeSelected() && "rtl" == (null === (i = n.lines[r.lineIndex].style) || void 0 === i ? void 0 : i.textDirection)) return Ut.next(e, "left");
      if (0 != r.charIndex) {
        var s = new zt(n, r.lineIndex, Math.max(0, r.charIndex - 1));
        s.backWhile(e => " " == e.char);
        var a = s.current();
        if (a) {
          var l = this.getBlockCategory(a, e.isTextModeSelected()),
            c = e.isTextModeSelected();
          if (0 == a.charIndex && t.charIndex > 0) return r.charIndex = a.charIndex, r.lineIndex = a.lineIndex, {
            type: "selected",
            cloneSelected: t,
            leafSelected: f().clone(r)
          };
          for (; s.back();) {
            a = s.current();
            var d = this.getBlockCategory(a, c);
            if (0 == a.charIndex) return r.charIndex = a.charIndex, r.lineIndex = a.lineIndex, {
              type: "selected",
              cloneSelected: t,
              leafSelected: f().clone(r)
            };
            if ("line-break" == d) return r.charIndex = a.charIndex, r.lineIndex = a.lineIndex, {
              type: "selected",
              cloneSelected: t,
              leafSelected: f().clone(r)
            };
            if ("space" == d || d != l) return r.charIndex = a.charIndex + 1, r.lineIndex = a.lineIndex, {
              type: "selected",
              cloneSelected: t,
              leafSelected: f().clone(r)
            };
          }
          return 0 == r.lineIndex && 0 == r.charIndex ? null : (r.charIndex = 0, r.lineIndex = 0, {
            type: "selected",
            cloneSelected: t,
            leafSelected: f().clone(r)
          });
        }
      }
    }
    moveToPreviousBreak(e) {
      return this.getPreviousBreakSelected(e);
    }
    moveEndEditor(e, t) {
      if (e.insideCodeSection()) return this.changeLeafSelectedBy(e.cursorSelected, t, t => {
        var r = Ze.A.getSelectedEditor(e.model, e.cursorSelected),
          n = f().last(r.lines);
        return Gt(Gt({}, t), {}, {
          charIndex: Ze.A.getTotalChar(n.blocks),
          lineIndex: r.lines.length - 1
        });
      });
      var r = {
        lineIndex: e.model.lines.length - 1,
        charIndex: Ze.A.getTotalCharLastLine(e.model)
      };
      return Qe.cursorPosition(r, r, t);
    }
    handleDoubleClickForRoot(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = this.cloneBasicSelected(e.cursorSelected),
        n = Rt.getLeafSelected(t),
        i = Rt.getLeafSelected(r),
        o = Rt.getLeafEditor(e.model, e.cursorSelected),
        s = new Nt(o.lines[n.lineIndex], n.charIndex),
        a = s.clone(),
        l = s.current();
      if (null == l) return Qe.emptyResult();
      i.charIndex = i.charIndex + 1;
      for (var c = this.getBlockCategory(l, e.isTextModeSelected()), d, h;;) {
        var p, u;
        if (!s.next()) {
          d && (i.charIndex = d.charIndex + 1);
          break;
        }
        if (d = s.current(), c != this.getBlockCategory(d, e.isTextModeSelected())) {
          i.charIndex = d.charIndex;
          break;
        }
      }
      for (;;) {
        var g, m;
        if (!a.back()) {
          h && (n.charIndex = h.charIndex);
          break;
        }
        if (h = a.current(), c != this.getBlockCategory(h, e.isTextModeSelected())) {
          n.charIndex = h.charIndex + 1;
          break;
        }
      }
      return Qe.selection(t, r, f().clone(i));
    }
    handleTripleClick(e, t) {
      return this.selectWholeLine(e);
    }
    selectWholeLine(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = this.cloneBasicSelected(e.cursorSelected),
        n = this.getFirstLineLeftCharIndex(e),
        i = this.getEndLineCharIndex(e),
        o = Rt.getLeafSelected(r);
      return Rt.getLeafSelected(t).charIndex = n, o.charIndex = i, Qe.selection(t, r, f().clone(o));
    }
    handleDoubleClick(e) {
      return e.isTextModeSelected() ? this.handleDoubleClickForRoot(e) : this.selectWholeLine(e);
    }
    changeLeafSelectedBy(e, t, r) {
      var n = this.cloneBasicSelected(e),
        i = Rt.getLeafSelected(n),
        o = r(i);
      return f().assign(i, o), Qe.cursorPosition(n, f().clone(i), t);
    }
    getFirstLineLeftCharIndex(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = Rt.getLeafSelected(t),
        n = Rt.getLeafEditor(e.model, t),
        i = new Nt(n.lines[r.lineIndex], Math.max(0, r.charIndex - 1));
      i.backWhile(e => !Ht.A.isLineBreak(e.block));
      var o = i.current();
      return o ? o.charIndex + 1 : 0;
    }
    moveFirstLine(e, t) {
      var r = this.getFirstLineLeftCharIndex(e);
      return this.changeLeafSelectedBy(e.cursorSelected, t, e => Gt(Gt({}, e), {}, {
        charIndex: r
      }));
    }
    getEndLineCharIndex(e) {
      var t = this.cloneBasicSelected(e.cursorSelected),
        r = Rt.getLeafSelected(t),
        n = Rt.getLeafEditor(e.model, t),
        i = new Nt(n.lines[r.lineIndex], r.charIndex);
      i.nextWhile(e => !Ht.A.isLineBreak(e.block));
      var o = i.current();
      return o ? o.charIndex : he.A.getNumberOfCharsFromLine(S.A.findLineByIndex(e.cursorPos.editor, r.lineIndex));
    }
    moveEndLine(e, t) {
      var r = this.getEndLineCharIndex(e);
      return this.changeLeafSelectedBy(e.cursorSelected, t, e => Gt(Gt({}, e), {}, {
        charIndex: r
      }));
    }
    moveHome(e, t) {
      if (e.insideCodeSection()) return this.changeLeafSelectedBy(e.cursorSelected, t, e => Gt(Gt({}, e), {}, {
        charIndex: 0,
        lineIndex: 0
      }));
      var r = {
        lineIndex: 0,
        charIndex: 0
      };
      return Qe.cursorPosition(r, r, t);
    }
  }
  const Zt = new Kt();
  var Yt = r(56069),
    Qt = r(75067),
    Jt = r(86835),
    Xt = r(65620),
    $t = r(59074);
  function er(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function tr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? er(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class rr {
    constructor(e) {
      (0, n.A)(this, "target", void 0), this.target = e;
    }
    handleKeyForDiagram(e, t, r) {
      switch (t.action) {
        case "paste":
        case "copy":
        case "cut":
        case "undo":
        case "redo":
          return null;
      }
      if ("select-all" == t.action) {
        var n = lt.A.handleEditor(e, t => {
          var r,
            n = e.selectedBlockModel,
            i = Yt.A.getAllSelectableEntityIds(n),
            o = tr(tr({}, e.cursorSelected), {}, {
              controlSelectedInfo: {
                selectedIds: i
              }
            });
          return {
            editorModel: t.editorModel,
            editorSelected: o
          };
        });
        return this.handleResult(n);
      }
      var i = Ze.A.findLeafSelected(e.cursorSelected),
        o = Xt.A.getSelectedIdsOrUndefined(i);
      if (!o || o.length <= 0) {
        switch (t.action) {
          case "left":
          case "right":
          case "down":
          case "up":
            return null;
          case "backspace":
          case "delete":
            return this.target.handleDelete(e, null);
        }
        return null;
      }
      var s = lt.A.handleEditor(e, n => {
        var i,
          o = e.selectedBlockModel,
          s = n.editorSelected,
          a = Xt.A.getSelectedIdsOrUndefined(n.editorSelected),
          l;
        if ("select-all" === t.action) {
          var c = Yt.A.getAllSelectableEntityIds(o),
            d = tr(tr({}, e.cursorSelected), {}, {
              controlSelectedInfo: {
                selectedIds: c
              }
            });
          return {
            editorModel: n.editorModel,
            editorSelected: d
          };
        }
        var h = s.controlSelectedInfo && s.controlSelectedInfo.subSelection,
          p = r ? 10 : 1;
        if (h && "line-point" == h.type) {
          var u = Jt.A.getEntityById(o, a[0]);
          switch (t.action) {
            case "left":
              var g = Yt.A.moveMainControlPoint(u, h.index, null, {
                x: -1 * p,
                y: 0
              });
              l = Qt.A.changeEntityInData(o, g);
              break;
            case "right":
              var m = Yt.A.moveMainControlPoint(u, h.index, null, {
                x: 1 * p,
                y: 0
              });
              l = Qt.A.changeEntityInData(o, m);
              break;
            case "up":
              var f = Yt.A.moveMainControlPoint(u, h.index, null, {
                x: 0,
                y: -1 * p
              });
              l = Qt.A.changeEntityInData(o, f);
              break;
            case "down":
              var y = Yt.A.moveMainControlPoint(u, h.index, null, {
                x: 0,
                y: 1 * p
              });
              l = Qt.A.changeEntityInData(o, y);
              break;
            case "backspace":
            case "delete":
              var v = $t.f.removeControlPoint(u, h);
              v != u && (l = Qt.A.changeEntityInData(o, v));
          }
        } else {
          var b = new Set(a);
          switch (t.action) {
            case "left":
              l = Yt.A.moveEntitiesByIds(o, b, {
                x: -1 * p,
                y: 0
              }, q.T.emptyZoomInfo).diagram;
              break;
            case "right":
              l = Yt.A.moveEntitiesByIds(o, b, {
                x: 1 * p,
                y: 0
              }, q.T.emptyZoomInfo).diagram;
              break;
            case "up":
              l = Yt.A.moveEntitiesByIds(o, b, {
                x: 0,
                y: -1 * p
              }, q.T.emptyZoomInfo).diagram;
              break;
            case "down":
              l = Yt.A.moveEntitiesByIds(o, b, {
                x: 0,
                y: 1 * p
              }, q.T.emptyZoomInfo).diagram;
              break;
            case "backspace":
            case "delete":
              l = Yt.A.removeEntitiesAndRelating(o, b);
              var x = [];
          }
        }
        if (l) {
          var C = n.editorSelected.lineIndex,
            S = n.editorSelected.charIndex,
            A = Ze.A.blockIndexFromCharIndex(n.editorModel.lines[C], S),
            w = ct.A.replaceBlockInEditor(n.editorModel, l, C, A),
            E = n.editorSelected;
          return x && (E = tr(tr({}, E), {}, {
            controlSelectedInfo: {
              selectedIds: x
            }
          })), {
            editorModel: w,
            editorSelected: E
          };
        }
        return null;
      });
      return this.handleResult(s);
    }
    handleResult(e) {
      if (!e) return Qe.emptyResult();
      var t = this.target.toKeyHandledResult(e, {
        clearHiddenIputText: !0
      });
      return t.isOneLineChanged = !0, t;
    }
  }
  var nr = r(92944);
  class ir {
    constructor(e) {
      (0, n.A)(this, "target", void 0), this.target = e;
    }
    handleNextCell(e) {
      try {
        var t = Ze.A.findTabularBlock(e.model, e.cursorSelected),
          r = f().cloneDeep(e.cursorSelected),
          n = Ze.A.findLeafParentSelected(r),
          i = Q.Z.nextCell(n.key, t.row, t.column);
        return n.key = i, n.selected = {
          lineIndex: 0,
          charIndex: 0
        }, Qe.cursorPosition(r, f().clone(n.selected), !1);
      } catch (e) {
        return Qe.emptyResult();
      }
    }
    handlePreviousCell(e) {
      try {
        var t = Ze.A.findTabularBlock(e.model, e.cursorSelected),
          r = f().cloneDeep(e.cursorSelected),
          n = Ze.A.findLeafParentSelected(r),
          i = Q.Z.previousCell(n.key, t.row, t.column);
        return n.key = i, n.selected = {
          lineIndex: 0,
          charIndex: 0
        }, Qe.cursorPosition(r, f().clone(n.selected), !1);
      } catch (e) {
        return Qe.emptyResult();
      }
    }
    mergeTableCells(e) {
      var t = lt.A.travelForTabular(e, e => {
        var t = Z.A.mergeCells(e.block, e.keys);
        t = Z.A.makeSureNoWidthForHiddenColumn(t);
        var r = ct.A.replaceBlockInEditor(e.editor, t, e.selected.lineIndex, e.blockIndex),
          n = Q.Z.getMinMaxTabularKeyIndex(e.keys);
        return {
          editorModel: r,
          editorSelected: dt.A.update(e.selected, {
            key: Q.Z.getKeyFromRowCol(n.minRow, n.minCol),
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          })
        };
      });
      return this.target.toKeyHandledResult(t, null);
    }
    unmergeTableCells(e, t) {
      var r = lt.A.travelForTabular(e, e => {
        var r = Z.A.unmergeCells(e.block, e.keys[0]),
          n;
        return r = Z.A.recalculateColumnWidth(r, t), {
          editorModel: ct.A.replaceBlockInEditor(e.editor, r, e.selected.lineIndex, e.blockIndex),
          editorSelected: e.selected
        };
      });
      return this.target.toKeyHandledResult(r, null);
    }
    getIntersectTabularEditorStyle(e) {
      var t = null;
      return lt.A.travelForTabular(e, e => (t = k.A.getIntersectEditorStyleForTabular(e.block, e.keys), null)), t;
    }
    setTabularEditorsStyle(e, t, r) {
      var n = lt.A.travelForTabular(e, e => {
        var n, i;
        return n = "border" == t && "string" == typeof r ? nr.T.setBorderStyleForTabular(e.block, e.keys, r) : k.A.setStyleForTabular(e.block, e.keys, t, r), {
          editorModel: ct.A.replaceBlockInEditor(e.editor, n, e.selected.lineIndex, e.blockIndex),
          editorSelected: e.selected
        };
      });
      return Qe.setStyle(n.editorModel, !0);
    }
    removeMostNestedTabular(e) {
      var t = {
          cursorSelected: this.goOutMostNestedTabular(e.cursorSelected),
          extendedCursorSelected: null,
          model: e.model,
          isInSelection: () => !1
        },
        r = R.A.removeCurrentForDelete(t, !1);
      return this.target.toKeyHandledResult(r, {
        selection: !1,
        clearHiddenIputText: !0
      });
    }
    goOutMostNestedTabular(e) {
      var t = null;
      return e.selected && (t = this.goOutMostNestedTabular(e.selected)), t ? dt.A.setProp(e, "selected", t) : e.key && Q.Z.isKeyInTabularFormat(e.key) ? dt.A.update(e, {
        key: void 0,
        selected: void 0
      }) : null;
    }
  }
  var or = r(80045),
    sr = r(70224),
    ar = r(22012);
  function lr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function cr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? lr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class dr {
    constructor() {
      (0, n.A)(this, "handleNewLineOnLeaf", e => ({
        uplevelHandler: t => {
          var r = this.findNextIndexToInsert(e.compositeKey),
            n = this.shiftToInsertPairFromIndex(r, t.childSelectedBlock),
            i = Ze.A.replaceBlockInEditor(t.editorModel, t.editorSelected.lineIndex, n),
            o = ar.t.buildRemainderKey(r),
            s = n.elements[o].lines[0].blocks[0],
            a = s ? s.text.length : 0;
          return {
            editorSelected: cr(cr({}, t.editorSelected), {}, {
              key: o,
              selected: {
                lineIndex: 0,
                charIndex: a
              }
            }),
            editorModel: i
          };
        }
      }));
    }
    handleEnter(e) {
      return lt.A.handleEditor(e, this.handleNewLineOnLeaf);
    }
    findNextKey(e, t) {
      for (var r = ar.t.parseRemainderIndex(e); r >= 0;) {
        if (t[ar.t.buildRemainderKey(r)]) return ar.t.buildRemainderKey(r);
        r--;
      }
      return f().keys(t)[0];
    }
    normalizeElementsAndShiftSpaceLeft(e, t) {
      var r = this.extractOrderedEditors(e);
      this.shiftWhiteSpaceLeft(r, t);
      var n = f().clone(e);
      return this.constructElementMap(n, r), n;
    }
    constructElementMap(e, t) {
      f().keys(e).forEach(t => {
        ar.t.isRemainderKey(t) && delete e[t];
      }), t.forEach((t, r) => {
        e[ar.t.buildRemainderKey(r)] = t;
      });
    }
    shiftToInsertPairFromIndex(e, t) {
      var r = this.extractOrderedEditors(t.elements),
        n = r[e - 1];
      r.splice(e, 0, this.buildEditorAtLevel(n), this.buildEditorAtLevel(n)), this.shiftWhiteSpaceRight(r, e + 2);
      var i = Ze.A.cloneCompositeBlockWithNewElements(t);
      return this.constructElementMap(i.elements, r), i;
    }
    shiftWhiteSpaceRight(e, t) {
      for (var r = 0; r < e.length; r++) if (r >= t) {
        var n = e[r],
          i = n.lines[0].blocks[0];
        if (!i || !mt.A.isTextBlock(i)) continue;
        var o = cr(cr({}, i), {}, {
            text: "  " + i.text
          }),
          s = Ze.A.replaceBlockInEditor(n, 0, o);
        e[r] = s;
      }
    }
    shiftWhiteSpaceLeft(e, t) {
      for (var r = 0; r < e.length; r++) if (r >= t) {
        var n = e[r],
          i = n.lines[0].blocks[0];
        if (!i || !mt.A.isTextBlock(i)) continue;
        var o = i.text;
        " " == o[0] && (o = o.substr(1)), " " == o[0] && (o = o.substr(1));
        var s = cr(cr({}, i), {}, {
            text: o
          }),
          a = Ze.A.replaceBlockInEditor(n, 0, s);
        e[r] = a;
      }
    }
    extractOrderedEditors(e) {
      var t = f().keys(e).map(t => ar.t.isRemainderKey(t) ? {
          editor: e[t],
          index: ar.t.parseRemainderIndex(t)
        } : void 0).filter(e => e),
        r;
      return f().sortBy(t, e => e.index).map(e => e.editor);
    }
    countBeginWhiteSpace(e) {
      var t = e.lines[0].blocks,
        r = 0;
      e: for (var n = 0; n < t.length; n++) {
        var i = t[n];
        if (!mt.A.isTextBlock(i)) break;
        for (var o = 0; o < i.text.length; o++) {
          var s;
          if (" " != i.text[o]) break e;
          r++;
        }
      }
      return r;
    }
    buildEditorAtLevel(e) {
      if (!e) return sr.A.createEmptyEditor();
      var t = this.countBeginWhiteSpace(e);
      return sr.A.createEditorWith(f().repeat(" ", t + 2));
    }
    findNextIndexToInsert(e) {
      if (!ar.t.isRemainderKey(e)) return 0;
      var t = ar.t.parseRemainderIndex(e);
      return t % 2 == 0 ? t + 2 : t + 1;
    }
  }
  const hr = new dr();
  var pr = ["columnDeleteSelected"],
    ur = ["columnDeleteSelected"];
  function gr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function mr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class fr {
    handleDeleteFromConfirmInfo(e, t) {
      var r = this.handleInnerEditor(e, t);
      if (null == r) return Qe.emptyResult();
      var n = Qe.fromDataOrCursorSelectedInfoChanged({
        model: r.editorModel,
        selected: r.editorSelected
      }, {
        clearHiddenIputText: !0
      });
      return n.isOneLineChanged = !0, n;
    }
    handleTabular(e, t, r, n) {
      var i = t;
      return n.columnDeleteSelected ? t.column <= 1 ? (i = mr(mr({}, t), {}, {
        elements: {}
      }), f().keys(t.elements).forEach(e => i.elements[e] = sr.A.createEmptyEditor()), this.buildNewModel(e, i, n, r)) : (i = Z.A.removeColumns(t, [n.key]), this.buildNewModel(e, i, n, r)) : t.row <= 1 ? (i = mr(mr({}, t), {}, {
        elements: {}
      }), f().keys(t.elements).forEach(e => i.elements[e] = sr.A.createEmptyEditor()), this.buildNewModel(e, i, n, r)) : (i = Z.A.removeRows(t, [n.key]), this.buildNewModel(e, i, n, r));
    }
    buildNewModel(e, t, r, n) {
      var i = ct.A.replaceBlockInEditor(e, t, r.lineIndex, n),
        o = Q.Z.getTabularCellIndexFromKey(r.key),
        s = Q.Z.getKeyFromRowCol(Math.min(o.row, t.row - 1), Math.min(o.column, t.column - 1)),
        a = r.columnDeleteSelected,
        l = (0, or.A)(r, pr);
      return {
        editorModel: i,
        editorSelected: dt.A.update(l, {
          key: s,
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        })
      };
    }
    confirmDeleteInfoToSelected(e, t) {
      return t ? {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex,
        selected: {
          lineIndex: 0,
          charIndex: 0
        },
        key: t
      } : {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      };
    }
    handleInnerEditor(e, t) {
      if (null != t.selected) return this.handleNestedEditor(e, t);
      var r = Ze.A.blockFromIndex(e.lines[t.lineIndex], t.charIndex),
        n = r.block;
      if (t.key && Ht.A.isTabularCompositeBlock(n)) return this.handleTabular(e, n, r.blockIndex, t);
      if (null != t.key && !this.isPowerIndexLastItem(n)) {
        var i = dt.A.set(n, "elements.".concat(t.key), void 0);
        delete i.elements[t.key];
        var o = ct.A.replaceBlockInEditor(e, i, t.lineIndex, r.blockIndex);
        return this.handleBlockAfterRemove(i, o, t);
      }
      if (null != t.keys) {
        var s = n,
          a;
        if (t.keys.forEach(e => {
          delete (s = mr(mr({}, s), {}, {
            elements: mr(mr({}, s.elements), {}, {
              [e]: void 0
            })
          })).elements[e];
        }), Ht.A.isLongDivision(s) && ar.t.isRemainderKey(t.keys[0])) {
          var l = ar.t.parseRemainderIndex(t.keys[0]);
          s = mr(mr({}, s), {}, {
            elements: hr.normalizeElementsAndShiftSpaceLeft(s.elements, l)
          }), a = hr.findNextKey(t.keys[0], s.elements);
        }
        var c = ct.A.replaceBlockInEditor(e, s, t.lineIndex, r.blockIndex);
        return this.handleBlockAfterRemove(s, c, t, a);
      }
      return {
        editorModel: ct.A.removeCompositeBlockInEditor(e, t.lineIndex, r.blockIndex),
        editorSelected: this.confirmDeleteInfoToSelected(t, null)
      };
    }
    handleBlockAfterRemove(e, t, r, n) {
      return null == (n = n || this.findFirstKey(e)) ? {
        editorModel: t,
        editorSelected: {
          lineIndex: r.lineIndex,
          charIndex: r.charIndex
        }
      } : {
        editorModel: t,
        editorSelected: this.confirmDeleteInfoToSelected(r, n)
      };
    }
    isPowerIndexLastItem(e) {
      return ("\\power-index" == e.text || "\\power" == e.text || "\\index" == e.text) && 1 == f().keys(e.elements).length;
    }
    findFirstKey(e) {
      return f().first(f().keys(e.elements));
    }
    handleNestedEditor(e, t) {
      var r = t.lineIndex,
        n = t.charIndex,
        i = t.columnDeleteSelected,
        o = (0, or.A)(t, ur),
        s = t.key,
        a = Ze.A.blockFromIndex(e.lines[r], n),
        l = a.block.elements[s],
        c = this.handleInnerEditor(l, mr(mr({}, t.selected), {}, {
          columnDeleteSelected: i
        })),
        d,
        h;
      return null == c || null == c.editorModel || null == c.editorSelected ? c : {
        editorModel: dt.A.set(e, "lines.".concat(r, ".blocks.").concat(a.blockIndex, ".elements.").concat(s), c.editorModel),
        editorSelected: dt.A.set(o, "selected", c.editorSelected),
        customData: c.customData
      };
    }
  }
  const yr = new fr();
  class vr {
    constructor(e) {
      (0, n.A)(this, "target", void 0), this.target = e;
    }
    handleBackspace(e, t) {
      if (e.isListBulletSelected()) return this.target.removeListType(e);
      var r = e.confirmDeleted();
      if (r) return yr.handleDeleteFromConfirmInfo(e.model, r);
      if (e.isCursorBeginInTextLine() && !e.isInSelection() && e.isSelectedLineListType()) return e.isListTypeSkip() || e.isSelectedLineSection() ? this.target.removeListType(e) : this.target.skipListType(e);
      var n = R.A.removeCurrent(e, !!r);
      return n instanceof R.h ? Qe.confirmDelete(n.selected) : this.target.toKeyHandledResult(n, t);
    }
    handleDelete(e, t) {
      if (e.isListBulletSelected()) return this.target.removeListType(e);
      var r = e.confirmDeleted();
      if (r) return yr.handleDeleteFromConfirmInfo(e.model, r);
      var n = R.A.removeCurrentForDelete(e, !!r);
      return n instanceof R.h ? Qe.confirmDelete(n.selected) : this.target.toKeyHandledResult(n, t);
    }
    handleWordBackspace(e, t) {
      if (e.isInSelection()) return this.handleBackspace(e, t);
      var r = this.target.moveToPreviousBreak(e, !1);
      if (Qe.isEmptyResult(r)) return r;
      var n = r.data;
      if (!n) return Qe.emptyResult();
      var i = {
          cursorSelected: n.toSelected,
          extendedCursorSelected: e.cursorSelected,
          model: e.model,
          isInSelection: () => !0
        },
        o = R.A.removeCurrent(i, !0);
      return this.target.toKeyHandledResult(o, t);
    }
    handleWordDelete(e, t) {
      if (e.isInSelection()) return this.handleDelete(e, t);
      var r = this.target.moveToNextBreak(e, !1);
      if (Qe.isEmptyResult(r)) return r;
      var n = r.data;
      if (!n) return Qe.emptyResult();
      var i = {
          cursorSelected: n.toSelected,
          extendedCursorSelected: e.cursorSelected,
          model: e.model,
          isInSelection: () => !0
        },
        o = R.A.removeCurrent(i, !0);
      return this.target.toKeyHandledResult(o, t);
    }
  }
  class br {
    next(e) {
      try {
        var t = e.findNextElementNameOfComposite(),
          r = f().cloneDeep(e.cursorSelected),
          n = Ze.A.findLeafParentSelected(r);
        return n.key = t, n.selected = {
          lineIndex: 0,
          charIndex: 0
        }, Qe.cursorPosition(r, f().clone(n.selected), !1);
      } catch (e) {
        return Qe.emptyResult();
      }
    }
    previous(e) {
      try {
        var t = e.findPreviousElementNameOfComposite(),
          r = f().cloneDeep(e.cursorSelected),
          n = Ze.A.findLeafParentSelected(r);
        return n.key = t, n.selected = {
          lineIndex: 0,
          charIndex: 0
        }, Qe.cursorPosition(r, f().clone(n.selected), !1);
      } catch (e) {
        return Qe.emptyResult();
      }
    }
  }
  var xr = r(51915),
    Cr = r(29856),
    Sr = r(42539),
    Ar = r(5717);
  class wr {
    constructor(e) {
      (0, n.A)(this, "symbolProvider", void 0), this.symbolProvider = e;
    }
    handle(e, t) {
      return e.templateDynamic && "template" == e.type ? this.handleDynamicMathTemplate(e, t) : this.handleLatexBlocksTemplate(e, t);
    }
    handleDynamicMathTemplate(e, t) {
      var r = Sr.w.processCursorReplacement(Ar.h.assignIds(e.insertedLines)),
        n;
      return Sr.w.insertLine(t, r);
    }
    handleLatexBlocksTemplate(e, t) {
      var r = this.symbolProvider.getByName(e.names[0]);
      if (!r.commandBlocks) throw new Error("Not implmented");
      var n = R.A.insertLines(this.createLinesFromcommandBlocks(r.commandBlocks), t, null != r.selected);
      return r.selected && void 0 !== r.selected.charIndex && (n.editorSelected = Sr.w.mergeLeafCursorSelectedDelta(n.editorSelected, {
        lineIndex: 0,
        charIndex: r.selected.charIndex
      })), n;
    }
    createLinesFromcommandBlocks(e) {
      var t = f().map(e, e => this.symbolProvider.getModelByName(e));
      return [sr.A.createLineFromBlocks(t)];
    }
  }
  var Er = r(68821),
    kr = r(26895);
  function Or(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Dr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Or(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Or(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pr {
    duplicate(e, t) {
      var r = kr.A.insertNewRowBelow(e, t),
        n,
        i = Q.Z.getTabularCellIndexFromKey(t).row,
        o = Q.Z.getAllKeysFromRow(r, i + 1),
        s = Dr({}, r.elements);
      return o.forEach(e => {
        var t = Q.Z.previousRowFormKey(e);
        s[t] && (s[e] = ut.A.cloneEditor(s[t]));
      }), r.elements = s, r;
    }
  }
  var Mr = new Pr();
  function Ir(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Tr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ir(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Lr {
    handle(e) {
      return lt.A.handleEditor(e, t => {
        if (e.isAtTabularCellPreferSingleLine()) return {
          uplevelHandler: e => {
            if (!Ht.A.isTabularCompositeBlock(e.childSelectedBlock)) return {
              editorModel: e.editorModel
            };
            var r = Mr.duplicate(e.childSelectedBlock, t.compositeKey),
              n = Ze.A.replaceBlockInEditor(e.editorModel, e.editorSelected.lineIndex, r),
              i = Er.A.getBelowAvailableCellKey(t.compositeKey, r);
            return {
              editorSelected: Tr(Tr({}, e.editorSelected), {}, {
                key: i,
                selected: {
                  lineIndex: 0,
                  charIndex: e.editorSelected.selected.charIndex
                }
              }),
              editorModel: n
            };
          }
        };
        var r = t.editorSelected.lineIndex,
          n = t.editorModel.lines[r],
          i = ut.A.cloneLine(n),
          o = dt.A.insert(t.editorModel.lines, r + 1, i);
        return {
          editorModel: Tr(Tr({}, t.editorModel), {}, {
            lines: o
          }),
          editorSelected: {
            lineIndex: r + 1,
            charIndex: t.editorSelected.charIndex
          }
        };
      }, !1);
    }
  }
  var Rr = new Lr(),
    Br = r(19032);
  class Fr {
    constructor() {}
    visitFromEditor(e, t) {
      this.visitLines(e.lines, t);
    }
    visitLines(e, t) {
      e.forEach(e => {
        this.visitLine(e, t);
      });
    }
    visitLine(e, t) {
      var r;
      null === (r = t.visitLine) || void 0 === r || r.call(t, e), e.blocks.forEach(e => {
        var r;
        null === (r = t.visitBlock) || void 0 === r || r.call(t, e), this.visitBlock(e, t);
      });
    }
    visitBlock(e, t) {
      if (Ht.A.isComposite(e)) {
        var r;
        if (!e.elements) return;
        Br.A.getElementKeys(e).forEach(r => {
          var n = e.elements[r];
          this.visitFromEditor(n, t);
        });
      }
    }
  }
  var jr = new Fr();
  class _r {
    detect(e) {
      var t = {
          hasDiagram: !1
        },
        r = {
          visitBlock: e => {
            Ht.A.isDiagramBlock(e) && (t.hasDiagram = !0);
          }
        };
      return jr.visitLines(e.lines, r), t;
    }
  }
  var Nr = new _r();
  function zr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Hr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? zr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Wr {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
      (0, n.A)(this, "historyHandler", void 0), (0, n.A)(this, "inputComposition", null), (0, n.A)(this, "cursorHistory", new Ke()), (0, n.A)(this, "blockStyleCapture", new yt()), (0, n.A)(this, "goOutOfRegionIfTextFlag", !1), (0, n.A)(this, "backspaceDeleteController", new vr(this)), (0, n.A)(this, "diagramController", new rr(this)), (0, n.A)(this, "tabularController", new ir(this)), (0, n.A)(this, "elementSwitchController", new br()), (0, n.A)(this, "mtTemplateController", new wr(Je.A)), (0, n.A)(this, "settings", void 0), this.historyHandler = new Ge(e);
    }
    changeSettings(e) {
      this.settings = e;
    }
    clearTemporarySelectedBlockStyle() {
      this.blockStyleCapture.clear();
    }
    canUndo() {
      return this.historyHandler.canUndo();
    }
    canRedo() {
      return this.historyHandler.canRedo();
    }
    getSelectionData(e) {
      var t;
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1])) return R.A.getSelectionData(e);
      if (e.isDiagramSelected) return R.A.extractDiagramSelected(e);
      if (e.isCursorControlled) {
        var r = e.selectedBlockModel;
        return [sr.A.createLineFromBlock(r)];
      }
      return R.A.getSelectionData(e);
    }
    mergeTableCells(e) {
      return this.tabularController.mergeTableCells(e);
    }
    unmergeTableCells(e, t) {
      return this.tabularController.unmergeTableCells(e, t);
    }
    getIntersectTabularEditorStyle(e) {
      return this.tabularController.getIntersectTabularEditorStyle(e);
    }
    setTabularEditorsStyle(e, t, r) {
      return this.tabularController.setTabularEditorsStyle(e, t, r);
    }
    addToHistory(e, t) {
      this.historyHandler.push(e, t);
    }
    resetHistoryToCurrent(e) {
      this.historyHandler.clear(), this.historyHandler.push(e);
    }
    getHistoryContents() {
      return this.historyHandler.asArray();
    }
    clearHistory() {
      this.historyHandler.clear();
    }
    clearCursorHistory() {
      this.cursorHistory.clear();
    }
    isShiftKey(e) {
      return e.shiftKey;
    }
    handleKeyUp(e) {
      if (91 == e.keyCode) return Qe.clearCopy();
    }
    handleDelete(e, t) {
      if ("diagram" == e.oneMode()) {
        var r = e.cursorSelected;
        if (!r) return Qe.emptyResult();
        if (0 == r.lineIndex && 0 == r.charIndex && !r.selected && r.controlled) return Qe.emptyResult();
      }
      return this.backspaceDeleteController.handleDelete(e, t);
    }
    handleSetStyleForBulletSelected(e, t, r) {
      return this.callSetStyleForSelectedBullets(e, e => k.A.addStyleForBulletLine(e, t, r));
    }
    setStyle(e, t, r) {
      if (e.isListBulletSelected()) return Ot.A.getSupportedStyleNames().includes(t) ? this.handleSetStyleForBulletSelected(e, t, r) : Qe.emptyResult();
      if (!e.isInSelection()) return Qe.setTemporarySelectedBlockStyle(this.blockStyleCapture.setStyle(t, r));
      var n = lt.A.handleEditor(e, n => this.setStyleHandler(e, t, r, n), !1);
      return Qe.setStyle(n.editorModel, n.customData && n.customData.isOneLineChanged);
    }
    pasteCopiedStyle(e, t) {
      if (!e.isInSelection()) return Qe.emptyResult();
      var r = lt.A.handleEditor(e, r => this.overrideStyleHandler(e, t, r), !1);
      return Qe.setStyle(r.editorModel, r.customData && r.customData.isOneLineChanged);
    }
    clearStyle(e) {
      if (!e.isInSelection()) return Qe.emptyResult();
      var t = lt.A.handleEditor(e, t => this.clearStyleHandler(e, t), !1);
      return Qe.setStyle(t.editorModel, t.customData && t.customData.isOneLineChanged);
    }
    setStyleHandler(e, t, r, n) {
      var i = ct.A.setStyleForSelection(n.editorModel.lines, n.selection, t, r, e.isTextModeSelected());
      return {
        editorSelected: n.editorSelected,
        editorModel: dt.A.set(n.editorModel, "lines", i),
        customData: {
          isOneLineChanged: null != n.compositeKey || n.selection.isCurrentLevelSameLine()
        }
      };
    }
    overrideStyleHandler(e, t, r) {
      var n = ct.A.overrideStyleForSelection(r.editorModel.lines, r.selection, t, e.isTextModeSelected());
      return {
        editorSelected: r.editorSelected,
        editorModel: dt.A.set(r.editorModel, "lines", n),
        customData: {
          isOneLineChanged: null != r.compositeKey || r.selection.isCurrentLevelSameLine()
        }
      };
    }
    clearStyleHandler(e, t) {
      var r = ct.A.clearStyleForSelection(t.editorModel.lines, t.selection, e.isTextModeSelected());
      return {
        editorSelected: t.editorSelected,
        editorModel: dt.A.set(t.editorModel, "lines", r),
        customData: {
          isOneLineChanged: null != t.compositeKey || t.selection.isCurrentLevelSameLine()
        }
      };
    }
    handleSetLineListType(e, t, r) {
      if (e.isTableSelected() && e.isTabularCellsSelected()) return Qe.emptyResult();
      if (e.isListBulletSelected() && f().isString(t)) return this.callSetStyleForSelectedBullets(e, e => k.A.setListType(e, t, !1));
      if (t instanceof Array && !r) {
        var n = lt.A.handleEditor(e, e => {
          var r, n;
          e.selection ? (r = e.selection.fromLineIndex, n = e.selection.toLineIndex) : n = r = e.editorSelected.lineIndex;
          var i = Ot.A.expandRelatedListItemLines(e.editorModel.lines, r, n),
            o = i.from,
            s = i.to;
          return {
            editorModel: this.setStyleForLinesForEditor(e.editorModel, o, s, e => k.A.setListType(e, t, !1)),
            editorSelected: e.editorSelected
          };
        }, !1);
        return Qe.setLineStyle(n.editorModel);
      }
      return this.callSetStyleForLines(e, e => k.A.setListType(e, t, !1));
    }
    changeLineAlignment(e, t) {
      return this.setLineStyle(e, "align", t);
    }
    setLineStyle(e, t, r) {
      if ("listType" == t) return this.handleSetLineListType(e, r, !1);
      var n = e => k.A.setLineStyle(e, t, r);
      if (e.isTableSelected() && e.isTabularCellsSelected()) {
        var i = lt.A.travelForTabular(e, e => {
          var t = Z.A.modifyEditors(e.block, e.keys, e => this.setStyleForLinesForEditor(e, 0, e.lines.length - 1, n)),
            r;
          return {
            editorModel: ct.A.replaceBlockInEditor(e.editor, t, e.selected.lineIndex, e.blockIndex),
            editorSelected: e.selected
          };
        });
        return Qe.setStyle(i.editorModel, !1);
      }
      return this.callSetStyleForLines(e, n);
    }
    setBulletLine(e, t) {
      return this.innerSetListItemOnLine(e, e => Ot.A.setBulletForLine(e, t));
    }
    setListItemResetIndex(e, t) {
      return this.innerSetListItemOnLine(e, e => Ot.A.setListItemResetIndex(e, t));
    }
    innerSetListItemOnLine(e, t) {
      return e.isListBulletSelected() ? this.callSetStyleForSelectedBullets(e, e => t(e)) : e.isTextModeSelected() ? this.callSetStyleForLines(e, e => t(e)) : Qe.emptyResultPreventDefault();
    }
    indentLine(e) {
      return e.isTextModeSelected() ? this.callSetStyleForLines(e, e => k.A.indentLine(e)) : Qe.emptyResultPreventDefault();
    }
    outdentLine(e) {
      return e.isTextModeSelected() ? this.callSetStyleForLines(e, e => k.A.outdentLine(e)) : Qe.emptyResultPreventDefault();
    }
    callSetStyleForSelectedBullets(e, t, r) {
      var n = lt.A.handleEditor(e, e => {
        for (var r = e.editorSelected, n = Ot.A.findRelatedListItemLinesByAction(e.editorModel.lines, r.lineIndex, r.listTypeSelect), i = n.scopeLineFrom, o = n.scopeLineTo, s = n.selectedLines, a = f().clone(e.editorModel.lines), l = i; l <= o; l++) {
          var c = e.editorModel.lines[l];
          if (s.includes(c)) {
            var d = t(c);
            a[l] = d;
          }
        }
        return {
          editorModel: Hr(Hr({}, e.editorModel), {}, {
            lines: a
          }),
          editorSelected: e.editorSelected
        };
      }, !1);
      return Qe.setLineStyle(n.editorModel, r);
    }
    callSetStyleForLines(e, t) {
      var r = lt.A.handleEditor(e, e => {
        var r, n;
        return e.selection ? (r = e.selection.fromLineIndex, n = e.selection.toLineIndex) : n = r = e.editorSelected.lineIndex, {
          editorModel: this.setStyleForLinesForEditor(e.editorModel, r, n, t),
          editorSelected: e.editorSelected
        };
      }, !1);
      return Qe.setLineStyle(r.editorModel);
    }
    setStyleForLinesForEditor(e, t, r, n) {
      var i = f().range(t, r + 1),
        o = e.lines;
      return i.forEach(e => {
        var t = n(o[e]);
        o = dt.A.set(o, e, t);
      }), dt.A.set(e, "lines", o);
    }
    getStyleFromSelfSelected(e, t, r) {
      var n = e.lines[t.lineIndex];
      if (n.blocks.length <= 0) return {};
      var i = t.charIndex - 1,
        o = Ze.A.blockEach(n, (e, t, o, s) => {
          if (i >= o && i <= s) return mt.A.isTextBlock(e) ? e : r ? r ? n.blocks[t + 1] : null : e;
        });
      return o ? o.style || {} : f().last(n.blocks).style;
    }
    getSelectedStyleIgnoreSelection(e) {
      return this.getIntersectStyleInner(e, !0);
    }
    getIntersectStyle(e) {
      return this.getIntersectStyleInner(e, !1);
    }
    getIntersectStyleForBullets(e) {
      var t = {};
      return lt.A.handleEditor(e, e => {
        for (var r = new Cr.B(["fontSize"]), n = e.editorSelected, i, o = Ot.A.findRelatedListItemLinesByAction(e.editorModel.lines, n.lineIndex, n.listTypeSelect).selectedLines, s = 0; s < o.length; s++) {
          var a = o[s],
            l;
          if ("stop" == r.next(k.A.getLineStyle(a, "listBulletStyle"))) break;
        }
        return t = r.end(), null;
      }), t;
    }
    getIntersectStyleInner(e, t) {
      var r = {};
      return lt.A.handleEditor(e, n => {
        if (!n.selection || t) {
          r = this.getStyleFromSelfSelected(n.editorModel, n.editorExtendedSelected || n.editorSelected, e.isTextModeSelected());
          var i = this.blockStyleCapture.getStyleObj();
          return i && (r = f().assign({}, r, i)), r = k.A.mergeWithAncestorBlockStyles(r, n.ancestorBlocks, e.fixedContextHandler), null;
        }
        return r = k.A.getIntersectStyle(n.editorModel.lines, n.selection, e.isTextModeSelected()), r = k.A.mergeWithAncestorBlockStyles(r, n.ancestorBlocks, e.fixedContextHandler), null;
      }, !1), r || {};
    }
    handleKeyForControlledSelected(e, t) {
      switch (t.action) {
        case "backspace":
        case "delete":
          return this.backspaceDeleteController.handleDelete(e, null);
      }
      return null;
    }
    handleCursorLeftRightHistory(e, t, r) {
      var n, i, i, n, i;
      return "left" == r.action ? (this.goOutOfRegionIfTextFlag = !1, (n = this.cursorHistory.handle("left")) ? ((i = this.handledResultFromCursorPos(n, "left", {
        selection: e.shiftKey,
        clearHiddenIputText: !0
      })).surpressClearCursorHistory = !0, i) : ((i = this.innerHandleKey(e, t)).action && this.cursorHistory.push(j.A.fullPosToDomPos(t.cursorPos), "right"), i.surpressClearCursorHistory = !0, i)) : "right" == r.action ? (this.goOutOfRegionIfTextFlag = !1, (n = this.cursorHistory.handle("right")) ? ((i = this.handledResultFromCursorPos(n, "right", {
        selection: e.shiftKey,
        clearHiddenIputText: !0
      })).surpressClearCursorHistory = !0, i) : ((i = this.innerHandleKey(e, t)).action && this.cursorHistory.push(j.A.fullPosToDomPos(t.cursorPos), "left"), i.surpressClearCursorHistory = !0, i)) : void 0;
    }
    handleKey(e, t) {
      return S.A.cacheGetElementRectWithin(() => {
        if (null == t.cursorSelected) return Qe.emptyResult();
        var r = nt.getCommandFrom(e, t);
        if (t.selectOnly()) switch (r.action) {
          case "copy":
          case "left":
          case "right":
          case "up":
          case "down":
          case "select-all":
          case "first-line":
          case "previous-break":
          case "home":
          case "end-line":
          case "next-break":
          case "end":
            break;
          default:
            return Qe.emptyResult();
        }
        if (t.isDiagramSelected) {
          var n = this.diagramController.handleKeyForDiagram(t, r, e.shiftKey);
          if (n) return n;
        } else if (t.isCursorControlled) {
          var i = this.handleKeyForControlledSelected(t, r);
          if (i) return i;
        }
        var o = this.handleCursorLeftRightHistory(e, t, r);
        if (o) return o;
        this.cursorHistory.clear();
        var s = this.innerHandleKey(e, t, r);
        return this.goOutOfRegionIfTextFlag && s && (f().isArray(s) || s.action) && (this.goOutOfRegionIfTextFlag = !1), s;
      });
    }
    composeStart() {
      this.inputComposition = {
        text: ""
      };
    }
    composeEnd(e, t) {
      var r = null,
        n = this.inputComposition;
      return this.inputComposition && (this.inputComposition = null), n && n.text != e ? (e = this.sanitizeTextInput(e), (r = this.handleTextInput(e, t)) ? r instanceof Array ? (r[0] && (r[0].keyInfo = r[0].keyInfo || {}, r[0].keyInfo.clearHiddenIputText = !0), r) : (r.keyInfo = r.keyInfo || {}, r.keyInfo.clearHiddenIputText = !0, r) : null) : r;
    }
    isInInputComposition() {
      return null != this.inputComposition;
    }
    cleanInputComposition() {
      this.inputComposition = null;
    }
    handleDoubleClick(e) {
      return this.cursorHistory.clear(), Zt.handleDoubleClick(e);
    }
    handleTripleClick(e, t) {
      return this.cursorHistory.clear(), Zt.handleTripleClick(e, t);
    }
    insertLines(e, t) {
      var r = R.A.insertLines(e, t),
        n;
      return this.toKeyHandledResult(r, {
        clearHiddenIputText: !0
      });
    }
    insertBlock(e, t) {
      return this.toKeyHandledResult(this.insertInput(e, t), null);
    }
    insertText(e, t) {
      return this.toKeyHandledResult(this.insertInput(e, t), null);
    }
    insertInput(e, t, r) {
      var n = this.blockStyleCapture.getStyleObj();
      n && (f().isString(e) ? e = sr.A.createTextBlock(e, {
        style: f().clone(n)
      }) : t.isTextModeSelected() || e.style || (e = dt.A.setProp(e, "style", f().clone(n))));
      var i = R.A.insertInput(e, t, r);
      if (this.goOutOfRegionIfTextFlag) {
        if ("-" == e) return i;
        console.log("got here");
        var o = f().cloneDeep(i.editorSelected),
          s = Ze.A.findLeafParentSelected(o);
        s && (s.selected = void 0, s.charIndex++), this.goOutOfRegionIfTextFlag = !1, i = dt.A.setProp(i, "editorSelected", o);
      }
      return i;
    }
    isDisplayStyleForInlineMathSetting() {
      return this.settings && this.settings.displayStyleForInlineMath;
    }
    insertImageContainer(e, t, r) {
      return e.isTextModeSelected() ? r ? this.handleBySymbolInfo(Hr(Hr({}, Je.A.getInlineImageBox()), {}, {
        imageUrl: t
      }), e) : this.handleBySymbolInfo(Hr(Hr({}, Je.A.getImageContainer()), {}, {
        imageUrl: t
      }), e) : (xr.A.requestFileUpload = null, Qe.message("error", "Can not insert image in Math Mode Area"));
    }
    handleBySymbolInfo(e, t) {
      if (this.cursorHistory.clear(), "composite" == e.type || "single" == e.type) {
        if (this.goOutOfRegionIfTextFlag = !1, !("\\image-container" != e.names[0] && "\\inline-image" != e.names[0] || e.imageUrl || xr.A.requestFileUpload)) return Qe.requestImageLibrary("\\inline-image" == e.names[0]);
        e = dt.A.setProp(e, "isInsideMathDisplayMode", t.isSelectedInDisplayMathContainer());
        var r = Je.A.getModelByInfo(e);
        this.isDisplayStyleForInlineMathSetting() && "\\inline-math" == e.names[0] && (r = Hr(Hr({}, r), {}, {
          style: Hr(Hr({}, r.style), {}, {
            mathModeType: "\\displaystyle"
          })
        }));
        var n = this.toKeyHandledResult(this.insertInput(r, t, e), {
          clearHiddenIputText: !1
        });
        return n.isOneLineChanged = !0, Ze.A.isTheoremLatexName(e.names[0]) && (n.isOneLineChanged = !1), n;
      }
      if ("template" == e.type) {
        this.goOutOfRegionIfTextFlag = !1;
        var i = this.mtTemplateController.handle(e, t),
          o;
        return this.toKeyHandledResult(i, {
          clearHiddenIputText: !0
        });
      }
      if (e.forceCreateModel) {
        this.goOutOfRegionIfTextFlag = !1;
        var s = sr.A.createTextBlock(e.symbol);
        return this.toKeyHandledResult(this.insertInput(s, t), {
          clearHiddenIputText: !1
        });
      }
      if ("mathxx" == e.type) {
        this.goOutOfRegionIfTextFlag = !1;
        var a = sr.A.createTextBlock(e.symbol, {
          style: {
            mathType: e.mathxxType
          }
        });
        return this.toKeyHandledResult(this.insertInput(a, t), {
          clearHiddenIputText: !1
        });
      }
      return this.handleTextInput(e.symbol, t);
    }
    isAtRootEditor(e) {
      return null == e.cursorSelected.selected;
    }
    pasteAction(e, t, r) {
      var n, i;
      try {
        n = ut.A.fromPasteText(e, t.isTextModeSelected(), !t.disableAutoAlignRTL());
      } catch (e) {
        return {
          status: "error",
          message: "Could not parse pasted data"
        };
      }
      if (t.isInsideDiagram() && Nr.detect(n).hasDiagram) return console.warn("inside diagram has diagram"), {
        status: "error",
        message: "Could not insert Diagram inside Diagram"
      };
      var o = gt.A.process(n, t, {
        rootSymbolSupports: r.rootSymbolSupports
      });
      if (!o.lines || o.lines.length <= 0) return null;
      if (t.isOneLine() && o.lines.length > 1) return null;
      if (t.isPlainTextOnly() && f().some(o.lines, e => f().some(e.blocks, e => Ht.A.isComposite(e)))) return null;
      var s = n.theoremInfo,
        a;
      s && s.theorems && (a = bt.T.merge(t.model.theoremInfo, s), bt.T.modifyLinesWithMergeMod(o.lines, a));
      var l = n;
      t.isDiagramSelected && r.selectedDg && (l = Hr(Hr({}, l), {}, {
        dgInstance: r.selectedDg
      }));
      var c = R.A.insertLines(o.lines, t, !1, l);
      return c ? (a && a.info && (c.editorModel = dt.A.setProp(c.editorModel, "theoremInfo", a.info)), {
        status: o.status,
        message: o.message,
        model: c.editorModel,
        selected: c.editorSelected,
        theoremInfo: a && a.info
      }) : void 0;
    }
    handleInternalShortcutForTextInput(e, t) {
      if (e.isPlainTextOnly()) return null;
      var r = at.handleText(t, e, this.isDisplayStyleForInlineMathSetting());
      if (!r) return null;
      var n = this.toKeyHandledResult(this.insertInput(r, e), {
        clearHiddenIputText: !0
      });
      return this.isDisablePowerIndexOneChar() || f().isString(r) || "\\power" != r.text && "\\index" != r.text || (this.goOutOfRegionIfTextFlag = !0), this.inputComposition ? [Qe.stopComposition(), n] : n;
    }
    handleCompositionTextInput(e, t) {
      var r = this.goOutOfRegionIfTextFlag,
        n;
      console.log("using compose input, text: ", e);
      var i = r && !this.goOutOfRegionIfTextFlag;
      if ("" == this.inputComposition.text && e) n = this.toKeyHandledResult(this.insertInput(e, t), {
        clearHiddenIputText: !1
      });else {
        var o = t.cursorPos.charIndex - xe.Ay.length(this.inputComposition.text),
          s = R.A.replaceTextForComposition(e, o, this.inputComposition.text.length, t);
        n = this.toKeyHandledResult(s, {
          clearHiddenIputText: !1
        }), i = i || s.customData && s.customData.stopComposition;
      }
      return n.isOneLineChanged = !0, this.inputComposition.text = e, i ? (console.log("stop composition"), [Qe.stopComposition(), n]) : n;
    }
    sanitizeTextInput(e) {
      return e ? /[\r\n\b]/.test(e) ? "" : xe.Ay.validateSurrogatePair(e) ? e : "" : "";
    }
    handleTextInput(e, t) {
      if ((null == (e = this.sanitizeTextInput(e)) || "" == e) && !this.inputComposition) return Qe.emptyResult();
      this.cursorHistory.clear();
      var r = this.handleInternalShortcutForTextInput(t, this.inputComposition ? f().last(e) : e);
      if (r) return r;
      if (this.inputComposition) return this.handleCompositionTextInput(e, t);
      var n = this.toKeyHandledResult(this.insertInput(e, t), {
        clearHiddenIputText: !0
      });
      return n.isOneLineChanged = !0, n;
    }
    isDisablePowerIndexOneChar() {
      return this.settings && this.settings.isDisablePowerIndexOneChar;
    }
    toggleStyle(e, t) {
      return t.isCursorControlled || t.insideCodeSection() ? Qe.emptyResult() : this.getIntersectStyle(t)[e] ? this.setStyle(t, e, k.A.getUnsetValue(t.getStyleCascadeContext())) : this.setStyle(t, e, !0);
      var r;
    }
    toggleSetStyle(e, t, r) {
      if (r.isInsideTextSymbol()) return Qe.emptyResult();
      var n = this.getIntersectStyle(r);
      return this.setStyle(r, e, n[e] != t ? t : void 0);
    }
    toggleUnderline(e) {
      var t;
      return "underline" == this.getIntersectStyle(e).textDecoration ? this.setStyle(e, "textDecoration", k.A.getUnsetValue(e.getStyleCascadeContext())) : this.setStyle(e, "textDecoration", "underline");
    }
    requestUndo() {
      var e = this.historyHandler.undo();
      if (!e) return Qe.emptyResultPreventDefault();
      var t = Qe.fromDataOrCursorSelectedInfoChanged({
        model: e.mainModel,
        selected: e.mainSelected,
        extendedSelected: e.extendedMainSelected
      }, {
        selection: !1,
        clearHiddenIputText: !0
      }, !0);
      return null != t.action && (t.action = "UndoRedo"), t;
    }
    requestRedo() {
      var e = this.historyHandler.redo();
      if (!e) return Qe.emptyResultPreventDefault();
      var t = Qe.fromDataOrCursorSelectedInfoChanged({
        model: e.mainModel,
        selected: e.mainSelected,
        extendedSelected: e.extendedMainSelected
      }, {
        selection: !1,
        clearHiddenIputText: !0
      }, !0);
      return null != t.action && (t.action = "UndoRedo"), t;
    }
    buildCopyHandleResult(e) {
      return null == e ? null : Qe.prepareCopy(e);
    }
    copyAction(e) {
      return this.getSelectionData(e, !0);
    }
    cutAction(e) {
      if (e.isDiagramSelected) {
        var t = R.A.extractDiagramSelected(e),
          r = this.diagramController.handleKeyForDiagram(e, {
            action: "delete",
            e: null
          }, !1);
        return {
          cutLines: t,
          model: r.editorChangeInfo.model,
          selected: r.editorChangeInfo.selected
        };
      }
      if (e.isCursorControlled) {
        var n = e.selectedBlockModel,
          i = [sr.A.createLineFromBlock(n)],
          o = this.handleKeyForControlledSelected(e, {
            action: "delete",
            e: null
          });
        return {
          cutLines: i,
          model: o.editorChangeInfo.model,
          selected: o.editorChangeInfo.selected
        };
      }
      var s = R.A.getSelectionData(e),
        a = R.A.removeSelection(e);
      return {
        cutLines: s,
        model: a.editorModel,
        selected: a.editorSelected
      };
    }
    buildCutHandleResult(e, t, r, n) {
      var i = {
          selection: n,
          clearHiddenIputText: !0,
          noPreventDefault: !0
        },
        o,
        s = [this.toKeyHandledResult(t, i)],
        a = r;
      return null != a && (s = [Qe.prepareCopy(a)].concat(s)), s;
    }
    replaceSearch(e, t, r, n, i) {
      f().isString(i) || (i = ut.A.cloneBlocks(i));
      var o = {
          cursorSelected: r,
          extendedCursorSelected: n,
          model: e,
          isInSelection: () => !0
        },
        s = [];
      return f().isString(i) ? s.push({
        id: vt.w.nextId(),
        blocks: [{
          id: vt.w.nextId(),
          text: i
        }]
      }) : s.push({
        id: vt.w.nextId(),
        blocks: i
      }), this.toKeyHandledResult(R.A.replaceLines(o, t, s), {
        ingoreFocusAfterChanged: !0
      });
    }
    replaceLines(e, t, r) {
      return this.toKeyHandledResult(R.A.replaceLines(e, t, r), {});
    }
    handleSectionAction(e, t) {
      return t.isRootLineSelected() ? this.callSetStyleForLines(t, t => {
        var r = this.sectionActionToLevelNumber(e);
        if (this.isSectionMatch(t, r)) return k.A.setListType(t, void 0, !0);
        var n = k.A.setLineStyle(t, "listType", "section");
        return k.A.setLineStyle(n, "indentIndex", r);
      }) : Qe.emptyResult();
    }
    sectionActionToLevelNumber(e) {
      switch (e) {
        case "section-level-1":
          return 0;
        case "section-level-2":
          return 1;
        case "section-level-3":
          return 2;
      }
      return 0;
    }
    isSectionMatch(e, t) {
      return "section" == k.A.getLineStyle(e, "listType") && k.A.getLineStyle(e, "indentIndex") === t;
    }
    handleListAction(e, t) {
      if (!t.isTextModeSelected()) return Qe.emptyResult();
      var r = "order-list" == e ? "order" : "unorder";
      return "order" == r ? r = t.liDefaultsProvider.getOrderDefaults() : "unorder" == r && (r = t.liDefaultsProvider.getUnOrderDefaults()), this.callSetStyleForLines(t, e => {
        var t;
        return k.A.getLineStyle(e, "listType") == r ? k.A.setListType(e, void 0, !0) : k.A.setListType(e, r, !0);
      });
    }
    innerHandleKey(e, t, r) {
      var n = this.getCursorPosition(t),
        i = t.getDocZoomContainer(),
        o = {
          selection: e.shiftKey,
          clearHiddenIputText: !0,
          ctrlKey: e.ctrlKey
        };
      if ((r = r || nt.getCommandFrom(e, t)).action) switch (r.action) {
        case "duplicate-line":
          return this.toKeyHandledResult(Rr.handle(t), {});
        case "order-list":
        case "unorder-list":
          return this.handleListAction(r.action, t);
        case "section-level-1":
        case "section-level-2":
        case "section-level-3":
          return this.handleSectionAction(r.action, t);
        case "toggle-bold":
          return this.toggleStyle("isBold", t);
        case "toggle-underline":
          return this.toggleUnderline(t);
        case "toggle-italic":
          return this.toggleStyle("isItalic", t);
        case "toggle-mathbf":
          return this.toggleSetStyle("mathType", "\\mathbf", t);
        case "toggle-mathbb":
          return this.toggleSetStyle("mathType", "\\mathbb", t);
        case "toggle-mathcal":
          return this.toggleSetStyle("mathType", "\\mathcal", t);
        case "toggle-mathrm":
          return this.toggleSetStyle("mathType", "\\mathrm", t);
        case "select-all":
          return Qe.selectAll(t);
        case "previous-break":
          return this.moveToPreviousBreak(t, this.isShiftKey(e), o);
        case "left":
          return this.handledResultFromDomCursorInfoFound(Ie.move(n, i), "left", o);
        case "next-break":
          return this.moveToNextBreak(t, this.isShiftKey(e), o);
        case "right":
          return this.handledResultFromDomCursorInfoFound(Ve.move(n, i), "right", o);
        case "up":
          return this.handledResultFromDomCursorInfoFound(se.move(n), "up", o);
        case "home":
          return Zt.moveHome(t, this.isShiftKey(e));
        case "first-line":
          return Zt.moveFirstLine(t, this.isShiftKey(e));
        case "end-line":
          return Zt.moveEndLine(t, this.isShiftKey(e));
        case "down":
          return this.handledResultFromDomCursorInfoFound(ee.move(n), "down", o);
        case "end":
          return Zt.moveEndEditor(t, this.isShiftKey(e));
        case "enter":
          return this.handleEnter(t, o, !1);
        case "enter-clear":
          var s = R.A.insertNewLine(t, !0);
          return this.toKeyHandledResult(s, o);
        case "backspace":
          return this.backspaceDeleteController.handleBackspace(t, o);
        case "word-backspace":
          return this.backspaceDeleteController.handleWordBackspace(t, o);
        case "delete":
          return this.backspaceDeleteController.handleDelete(t, o);
        case "word-delete":
          return this.backspaceDeleteController.handleWordDelete(t, o);
        case "undo":
          return t.isExternalUndoRedo() ? Qe.externalUndoRedo("ExternalUndoRequest") : this.requestUndo();
        case "redo":
          return t.isExternalUndoRedo() ? Qe.externalUndoRedo("ExternalRedoRequest") : this.requestRedo();
        case "indent":
          return this.indentLine(t);
        case "outdent":
          return this.outdentLine(t);
        case "step-out":
          return this.handleStepOut(t);
        case "tab":
          return t.insideCodeSection() ? this.handleTabForCodeSection(t, e.shiftKey) : this.toKeyHandledResult(this.insertInput("\t", t), {
            clearHiddenIputText: !0
          });
        case "next-element":
          return this.elementSwitchController.next(t);
        case "previous-element":
          return this.elementSwitchController.previous(t);
        case "previous-cell":
          return this.handlePreviousCell(t);
        case "next-cell":
          return this.handleNextCell(t);
        case "align-left":
          return this.changeLineAlignment(t, "left");
        case "align-middle":
          return this.changeLineAlignment(t, "center");
        case "align-right":
          var a;
          return this.changeLineAlignment(t, "right");
        case "align-justify":
          return this.changeLineAlignment(t, "justify");
        case "none":
          return Qe.emptyResult();
      }
    }
    handleTabForCodeSection(e, t) {
      return this.toKeyHandledResult(R.A.insertTabForCodeSection(e, t), {
        clearHiddenIputText: !0
      });
    }
    handleNextCell(e) {
      return this.tabularController.handleNextCell(e);
    }
    handlePreviousCell(e) {
      return this.tabularController.handlePreviousCell(e);
    }
    handleStepOut(e) {
      var t = pt.move(e);
      return Qe.stepOut(t.cursorSelected);
    }
    moveToPreviousBreak(e, t, r) {
      var n = Zt.moveToPreviousBreak(e);
      if (n) switch (n.type) {
        case "selected":
          return Qe.cursorPosition(n.cloneSelected, n.leafSelected, t);
        case "dom-cursor-info":
          return this.handledResultFromDomCursorInfoFound(n.info, "left", r || {});
      }
      if (r) return this.handledResultFromDomCursorInfoFound(Ie.move(e.cursorPos, e.getDocZoomContainer()), "left", r);
    }
    moveToNextBreak(e, t, r) {
      var n = Zt.moveToNextBreak(e);
      if (n) switch (n.type) {
        case "selected":
          return Qe.cursorPosition(n.cloneSelected, n.leafSelected, t);
        case "dom-cursor-info":
          return this.handledResultFromDomCursorInfoFound(n.info, "right", r || {});
      }
      if (r) return this.handledResultFromDomCursorInfoFound(Ve.move(e.cursorPos, e.getDocZoomContainer()), "right", r);
    }
    requestDeleteCurrent(e) {
      return this.handleKey({
        keyCode: 46
      }, e);
    }
    requestBackSpaceCurrent(e) {
      return this.handleKey({
        keyCode: 8
      }, e);
    }
    moveLeft(e) {
      return this.handleKey({
        keyCode: 37
      }, e);
    }
    moveUp(e) {
      return this.handleKey({
        keyCode: 38
      }, e);
    }
    moveRight(e) {
      return this.handleKey({
        keyCode: 39
      }, e);
    }
    moveDown(e) {
      return this.handleKey({
        keyCode: 40
      }, e);
    }
    selectAll(e) {
      return Qe.selectAll(e);
    }
    removeMostNestedTabular(e) {
      return this.tabularController.removeMostNestedTabular(e);
    }
    removeListType(e) {
      return e.isListBulletSelected() ? this.callSetStyleForSelectedBullets(e, e => k.A.removeListType(e), !0) : this.callSetStyleForLines(e, e => k.A.removeListType(e));
    }
    skipListType(e) {
      return this.callSetStyleForLines(e, e => {
        var t;
        return k.A.setLineStyle(e, "listTypeSkip", !0);
      });
    }
    outdentOrRemoveListType(e) {
      var t;
      return k.A.getLineStyle(e.getSelectedLine(), "indentIndex", 0) <= 0 || e.isSelectedLineSection() ? e.isListTypeSkip() || e.isSelectedLineSection() ? this.removeListType(e) : this.skipListType(e) : this.callSetStyleForLines(e, e => {
        var t;
        return k.A.outdentLine(e);
      });
    }
    handleEnter(e, t, r) {
      if (e.isCursorBeginInTextLine() && e.isSelectedLineListType() && Ze.A.isEmptyLine(e.getSelectedLine())) return this.outdentOrRemoveListType(e);
      if (e.quickRowColumnInsertionSupport()) return Qe.insertRowColumnIndication();
      if (e.isAtLongDivision()) return this.toKeyHandledResult(hr.handleEnter(e), t);
      if (e.isOneLine()) return Qe.emptyResult();
      if (t.ctrlKey && (e.isInsideLatexTable() || e.isTableSelected())) {
        var n = S.A.findTabularReactInstance(e.cursorPos);
        return n && n.insertRowBelow(!0), Qe.emptyResult();
      }
      return e.isAtSubSuperScript() ? Qe.emptyResult() : this.toKeyHandledResult(R.A.insertNewLine(e, r), t);
    }
    expandSelectionWithSameStyle(e, t) {
      return this.cursorHistory.clear(), _t.expandSelectionWithSameStyle(e, t);
    }
    getCursorPosition(e) {
      return e.cursorPos;
    }
    toKeyHandledResult(e, t) {
      if (null == e) return Qe.emptyResult();
      var r = Qe.fromDataOrCursorSelectedInfoChanged({
        model: e.editorModel,
        selected: e.editorSelected,
        extendedSelected: e.editorExtendedSelected
      }, t);
      return e.customData && e.customData.isOneLineChanged && (r.isOneLineChanged = !0), r;
    }
    handledResultFromDomCursorInfoFound(e, t, r) {
      return e ? "lazy" == e.type ? Qe.emptyResult(r) : this.handledResultFromCursorPos(e, t, r) : Qe.emptyResult(r);
    }
    handledResultFromCursorPos(e, t, r) {
      return e ? null == e ? Qe.emptyResult(r) : (e.direction = t, Qe.fromCursorChagnedFromCharId(e, r)) : Qe.emptyResult(r);
    }
  }
  var Vr = r(94668),
    Ur = r(10467),
    qr = r(92207),
    Gr = r.n(qr),
    Kr = r(6283),
    Zr = r(58907),
    Yr = r(58578),
    Qr = r(91617),
    Jr = r(85020),
    Xr = r(96971),
    $r = r(45862);
  class en extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "actionItems", [{
        value: "save-set-as-default",
        display: "Save and Set as default for New document"
      }]);
    }
    render() {
      return c().createElement("div", {
        className: "tw:w-full"
      }, c().createElement(Xr.d, {
        busy: this.props.loading,
        tone: this.props.isError ? "error" : "info",
        message: this.props.isError && !this.props.loading ? this.props.errorMessage : this.props.loadingMessage
      }), c().createElement(Jr.i, {
        separator: !this.props.loading
      }, this.props.onCancel && c().createElement($r.$, {
        dialogAction: !0,
        disabled: this.props.loading,
        onClick: this.props.onCancel
      }, "Cancel"), c().createElement(Qr.A, {
        useFixedPosition: this.props.buttonActionFixed,
        onItemSelect: this.props.onSave,
        onMainButtonClick: () => {
          this.props.onSave("default");
        },
        buttonWithMoreOptionsStyle: !0,
        buttonWithMoreOptionsStyleClass: "ui-button-dialog",
        containerStyle: {
          width: 280,
          left: "auto",
          right: 0
        },
        disabled: this.props.loading,
        labelStyle: {
          justifyContent: "center"
        },
        label: this.props.buttonDefaultName,
        items: this.actionItems
      })));
    }
  }
  function tn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function rn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? tn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var nn = Zr.A.getModalDialog();
  class on extends l.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        loading: !1
      }), (0, n.A)(this, "pageSettingsRef", void 0), (0, n.A)(this, "isUnmounted", !1), (0, n.A)(this, "saving", !1), (0, n.A)(this, "handleSave", e => {
        if (!this.saving) {
          this.saving = !0, this.setState({
            loading: !0,
            isError: !1,
            loadingMessage: "Saving…"
          });
          var t = this.pageSettingsRef.getData(),
            r = !1;
          this.handleIfFontChange(this.props.data, t).then(() => {
            if (!this.isUnmounted) return r = !0, this.setState({
              loadingMessage: "Saving…"
            }), this.props.onDataChanged(t, "save-set-as-default" === e);
          }).catch(e => {
            this.isUnmounted || (console.error(e), this.setState({
              isError: !0,
              errorMessage: r ? "Could not save settings. Please try again." : "Could not load font, please check internet connection"
            }));
          }).finally(() => {
            this.saving = !1, this.isUnmounted || this.state.loading && this.setState({
              loading: !1
            });
          });
        }
      });
    }
    componentWillUnmount() {
      this.isUnmounted = !0;
    }
    isAnyFontChange(e, t) {
      return e.fontName != t.fontName || e.mathFontName != t.mathFontName;
    }
    handleIfFontChange(e, t) {
      if (!this.isAnyFontChange(e, t)) return Promise.resolve();
      this.setState({
        loading: !0,
        isError: !1,
        loadingMessage: "Loading fonts..."
      });
      var r = Xe.A.isTestEnv() ? 0 : 300,
        n = [];
      return Yr.A.isLocalFont(t.fontName) || n.push(t.fontName), Yr.A.isLocalFont(t.mathFontName) || n.push(t.mathFontName), Promise.all([(0, i.cb)(r), this.props.fontsLoader.loadFontsCssWith(n)]);
    }
    render() {
      return c().createElement(nn, {
        show: !0
      }, c().createElement(Vr.A, {
        size: "medium",
        scroll: "body",
        title: "Document Settings",
        busy: this.state.loading,
        footerProgressing: this.state.loading,
        contentDisabled: this.state.loading,
        show: !0,
        style: rn({
          width: "auto",
          height: "auto",
          minHeight: 150,
          maxWidth: "95vw",
          overflow: "visible"
        }, Zr.A.getCenterStyle()),
        contentStyle: {
          overflow: "visible"
        },
        onClose: this.props.onClose,
        renderFooterContent: () => c().createElement(en, {
          isError: this.state.isError,
          loading: this.state.loading,
          errorMessage: this.state.errorMessage,
          loadingMessage: this.state.loadingMessage,
          onSave: this.handleSave,
          onCancel: this.props.onClose,
          buttonDefaultName: "OK"
        })
      }, c().createElement(Kr.A, {
        spellCheckInfo: this.props.spellCheckInfo,
        onRequestDicManager: this.props.onRequestDicManager,
        requestLocalFonts: this.props.requestLocalFonts,
        getMathTypeClss: this.props.getMathTypeClss,
        onGlobalIgnoreSaved: this.props.onGlobalIgnoreSaved,
        onRequestRefreshLazy: () => {
          this.props.onClose(), E.A.next(() => {
            this.props.onRequestRefreshLazy();
          });
        },
        data: this.props.data,
        ref: e => this.pageSettingsRef = e
      })));
    }
  }
  class sn {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "deactivated", !1), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    setState(e, t) {
      this.target.setState(e, t);
    }
    getState() {
      return this.target.state;
    }
    getTarget() {
      return this.target;
    }
  }
  var an = r(77664),
    ln = r(16831),
    cn = r(14930),
    dn = r(7147);
  function hn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function pn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? hn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var un = {
    info: {
      icon: "fa-info-circle",
      color: "var(--ui-info, #1755a8)",
      label: "Information"
    },
    warning: {
      icon: "fa-warning",
      color: "var(--ui-warning, #956300)",
      label: "Warning"
    },
    error: {
      icon: "fa-times-circle",
      color: "var(--ui-danger, #b00020)",
      label: "Error"
    }
  };
  class gn extends c().Component {
    render() {
      var e = this.props,
        t = e.tone,
        r = void 0 === t ? "info" : t,
        n = e.title,
        i = e.compact,
        o = e.action,
        s = e.children,
        a = e.className,
        l = e.style,
        d = i ? void 0 : n,
        h = un[r];
      return c().createElement("div", {
        role: "error" === r ? "alert" : "note",
        "aria-label": h.label,
        className: v()("ui-note tw:flex tw:rounded-[3px] tw:border tw:border-solid tw:leading-5", i ? "ui-note-compact tw:items-center tw:gap-2 tw:px-2 tw:py-1 tw:text-xs" : "tw:items-start tw:gap-2.5 tw:p-3 tw:text-[13px]", a),
        style: pn({
          background: "var(--ui-surface-muted, #f7f7f7)",
          borderColor: "var(--ui-border, lightgray)",
          color: "var(--ui-text-muted, #666)"
        }, l)
      }, c().createElement("i", {
        className: v()("fa tw:w-4 tw:shrink-0 tw:text-center", i ? "tw:text-[14px]" : "tw:mt-0.5 tw:text-[16px]", h.icon),
        "aria-hidden": "true",
        style: {
          color: h.color
        }
      }), c().createElement("div", {
        className: v()("tw:min-w-0 tw:flex-1", !i && "tw:break-words")
      }, d && c().createElement("div", {
        className: "tw:font-semibold",
        style: {
          color: "var(--ui-text, #333)"
        }
      }, d), s && c().createElement("div", {
        className: i ? "tw:truncate" : d ? "tw:mt-1" : void 0,
        title: i && "string" == typeof s ? s : void 0
      }, s)), o && c().createElement("div", {
        className: "tw:shrink-0"
      }, o));
    }
  }
  var mn = r(12557);
  function fn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function yn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? fn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var vn = Zr.A.getModalDialog();
  class bn extends c().Component {
    constructor() {
      var e;
      super(...arguments), e = this, (0, n.A)(this, "state", {
        draft: (0, mn.WK)({
          worksheetLabels: this.props.labels
        }),
        saving: !1
      }), (0, n.A)(this, "saving", !1), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "previewDraft", void 0), (0, n.A)(this, "previewPageSettings", void 0), (0, n.A)(this, "previewModel", void 0), (0, n.A)(this, "previewSource", yn(yn({}, sr.A.createEmptyEditor()), {}, {
        lines: [yn(yn({}, (0, p.ZP)()), {}, {
          marks: 1,
          elements: {
            question: sr.A.createEditorWith("Sample question"),
            hint: sr.A.createEditorWith("Sample hint"),
            solution: sr.A.createEditorWith("Sample solution")
          }
        }), yn(yn({}, (0, p.ZP)()), {}, {
          marks: 3
        })].map(sr.A.createLineFromBlock)
      })), (0, n.A)(this, "close", () => {
        this.saving || this.props.onClose();
      }), (0, n.A)(this, "change", (e, t) => {
        this.setState({
          draft: yn(yn({}, this.state.draft), {}, {
            [e]: t
          }),
          error: void 0
        });
      }), (0, n.A)(this, "changeMarks", (e, t) => {
        var r = yn(yn({}, this.state.draft.marks), {}, {
          [e]: t
        });
        this.setState({
          draft: yn(yn({}, this.state.draft), {}, {
            marks: r
          }),
          error: void 0
        });
      }), (0, n.A)(this, "save", function () {
        var t = (0, Ur.A)(Gr().mark(function t(r) {
          var n;
          return Gr().wrap(function t(i) {
            for (;;) switch (i.prev = i.next) {
              case 0:
                if (!e.saving) {
                  i.next = 2;
                  break;
                }
                return i.abrupt("return");
              case 2:
                if (n = e.errors(), !Object.keys(n).some(e => n[e])) {
                  i.next = 6;
                  break;
                }
                return e.setState({
                  validate: !0
                }), i.abrupt("return");
              case 6:
                return e.saving = !0, e.setState({
                  saving: !0,
                  error: void 0
                }), i.prev = 8, i.next = 11, e.props.onApply(e.state.draft, "save-set-as-default" === r);
              case 11:
                i.next = 16;
                break;
              case 13:
                i.prev = 13, i.t0 = i.catch(8), e.unmounted || e.setState({
                  error: "Could not save labels. Please try again."
                });
              case 16:
                return i.prev = 16, e.saving = !1, e.unmounted || e.setState({
                  saving: !1
                }), i.finish(16);
              case 20:
              case "end":
                return i.stop();
            }
          }, t, null, [[8, 13, 16, 20]]);
        }));
        return function (e) {
          return t.apply(this, arguments);
        };
      }());
    }
    getPreviewModel() {
      return this.previewDraft === this.state.draft && this.previewPageSettings === this.props.pageSettings || (this.previewDraft = this.state.draft, this.previewPageSettings = this.props.pageSettings, this.previewModel = (0, p.gA)(yn(yn({}, this.previewSource), {}, {
        pageSettings: yn(yn({}, this.props.pageSettings), {}, {
          worksheetLabels: this.state.draft,
          isDarkMode: !1,
          pageSize: {
            width: 460,
            margin: {
              top: 8,
              right: 8,
              bottom: 8,
              left: 8
            }
          }
        })
      }), "teacher")), this.previewModel;
    }
    componentWillUnmount() {
      this.unmounted = !0;
    }
    errors() {
      var e = this.state.draft,
        t = {};
      return ["exerciseHeading", "hintHeading", "solutionHeading"].forEach(r => {
        t[r] = (0, mn.Lh)(e[r], "exerciseHeading" === r ? "number" : void 0);
      }), ["one", "other"].forEach(r => {
        t[r] = (0, mn.Lh)(e.marks[r], "count");
      }), t;
    }
    render() {
      var e = this.state.draft,
        t = this.state.validate ? this.errors() : {},
        r = this.props.getMathTypeClss();
      return c().createElement(vn, {
        show: !0
      }, c().createElement(Vr.A, {
        show: !0,
        title: "Worksheet labels",
        size: "medium",
        scroll: "body",
        busy: this.state.saving,
        contentDisabled: this.state.saving,
        footerProgressing: this.state.saving,
        style: yn(yn({}, Zr.A.getCenterStyle()), {}, {
          width: 540,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "calc(100vh - 32px)"
        }),
        onClose: this.close,
        renderFooterContent: () => c().createElement("div", {
          className: "tw:w-full"
        }, this.state.error && c().createElement(gn, {
          compact: !0,
          tone: "error",
          className: "tw:mb-3"
        }, this.state.error), this.props.canSaveDefault ? c().createElement(en, {
          loading: this.state.saving,
          loadingMessage: void 0,
          isError: !1,
          errorMessage: void 0,
          onSave: this.save,
          onCancel: this.close,
          buttonDefaultName: "Apply"
        }) : c().createElement("div", {
          className: "tw:w-full"
        }, c().createElement(Xr.d, {
          busy: this.state.saving
        }), c().createElement(Jr.i, null, c().createElement($r.$, {
          dialogAction: !0,
          disabled: this.state.saving,
          onClick: this.close
        }, "Cancel"), c().createElement($r.$, {
          dialogAction: !0,
          variant: "primary",
          disabled: this.state.saving,
          onClick: () => this.save("default")
        }, "Apply"))))
      }, c().createElement("div", {
        className: "tw:min-w-0 tw:flex-1 tw:p-3"
      }, c().createElement(gn, {
        compact: !0,
        className: "tw:mb-3"
      }, "Applies to every exercise and printed worksheet in this document."), c().createElement(dn.zB, {
        label: "Exercise heading",
        labelWidth: 145,
        error: t.exerciseHeading
      }, c().createElement(dn.ks, {
        value: e.exerciseHeading,
        maxLength: 160,
        onChange: e => this.change("exerciseHeading", e.currentTarget.value)
      })), c().createElement(dn.zB, {
        label: "Hint heading",
        labelWidth: 145,
        error: t.hintHeading
      }, c().createElement(dn.ks, {
        value: e.hintHeading,
        maxLength: 160,
        onChange: e => this.change("hintHeading", e.currentTarget.value)
      })), c().createElement(dn.zB, {
        label: "Solution heading",
        labelWidth: 145,
        error: t.solutionHeading
      }, c().createElement(dn.ks, {
        value: e.solutionHeading,
        maxLength: 160,
        onChange: e => this.change("solutionHeading", e.currentTarget.value)
      })), ["one", "other"].map(r => {
        var n;
        return c().createElement(dn.zB, {
          key: r,
          label: "one" === r ? "Marks (single)" : "Marks (others)",
          labelWidth: 145,
          error: t[r]
        }, c().createElement(dn.ks, {
          value: null !== (n = e.marks[r]) && void 0 !== n ? n : "",
          maxLength: 160,
          onChange: e => this.changeMarks(r, e.currentTarget.value)
        }));
      }), c().createElement("div", {
        className: "tw:mt-3 tw:max-h-[220px] tw:overflow-auto tw:border tw:border-solid tw:border-[var(--ui-border)] tw:bg-white tw:text-black",
        role: "group",
        "aria-label": "Label preview"
      }, c().createElement(r, {
        readOnly: !0,
        model: this.getPreviewModel(),
        toolbarEnabled: !1,
        style: {
          padding: 0,
          width: "100%"
        },
        rootEditorStyle: {
          minHeight: 0,
          height: "auto",
          width: "100%"
        }
      })), c().createElement("div", {
        className: "tw:mt-3 tw:flex tw:flex-wrap tw:gap-2"
      }, c().createElement($r.$, {
        disabled: !this.props.defaults,
        onClick: () => this.setState({
          draft: (0, mn.WK)({
            worksheetLabels: this.props.defaults
          }),
          validate: !1,
          error: void 0
        })
      }, "Use my defaults"), c().createElement($r.$, {
        onClick: () => this.setState({
          draft: (0, mn.WK)({
            worksheetLabels: mn.PT
          }),
          validate: !1,
          error: void 0
        })
      }, "Reset to English")))));
    }
  }
  function xn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Cn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Sn extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "worksheetLabelsOpen", !1), (0, n.A)(this, "showWorksheetLabels", () => {
        this.worksheetLabelsOpen = !0, this.getTarget().requestRender(this);
      }), (0, n.A)(this, "handleRequestRefreshLazy", () => {
        this.getTarget().requestRecreateWholePage();
      });
    }
    upgradePageWidthNewFormat() {
      var e,
        t,
        r = this.getTarget();
      if (r.props.deprecatedPageWidth && (null === (e = r.state.mainModel.pageSettings) || void 0 === e || null === (t = e.pageSize) || void 0 === t || !t.width)) {
        var n = r.state.mainModel;
        n.pageSettings || (n.pageSettings = {}), n.pageSettings.pageSize || (n.pageSettings.pageSize = {}), n.pageSettings.pageSize.width = r.props.deprecatedPageWidth, r.invalidatePageSettingCache(), r.props.onModelChanged && r.props.onModelChanged(n);
      }
    }
    handleSetRequest(e) {
      var t = this.getTarget(),
        r = this.getAndPreparePs();
      switch (e.type) {
        case "ps-recent-csl-style-added":
          var n;
          r.pageSettings.cites = Cn(Cn({}, r.pageSettings.cites), {}, {
            recentCslStyles: this.addCslStyle(null === (n = r.pageSettings.cites) || void 0 === n ? void 0 : n.recentCslStyles, e.item)
          }), t.invalidatePageSettingCache(), t.props.onModelChanged && t.props.onModelChanged(r);
          break;
        case "ps-change-tag-ref-style":
          var i = r.pageSettings,
            o = Cn(Cn({}, i), {}, {
              mathTagRefs: Cn(Cn({}, i.mathTagRefs), {}, {
                blockStyle: e.style
              })
            });
          this.updatePageSettingsWithChangeOnly(o, !1);
          break;
        case "ps-change-math-tags":
          var s,
            a = Cn(Cn({}, r.pageSettings), {}, {
              mathTags: e.mathTags
            });
          this.updatePageSettingsWithChangeOnly(a, !1);
      }
    }
    addCslStyle(e, t) {
      return (e = (e = e || []).concat([t])).length > 20 && (e = e.slice(e.length - 20)), e;
    }
    setPrintedPageSize(e) {
      var t = this.getTarget(),
        r = this.getAndPreparePs();
      r.pageSettings.printedPageSize = e, t.invalidatePageSettingCache(), t.props.onModelChanged && t.props.onModelChanged(r);
    }
    getAndPreparePs() {
      var e,
        t = this.getTarget().state.mainModel;
      return t.pageSettings || (t.pageSettings = {}), t;
    }
    getDocumentWidth() {
      var e,
        t,
        r = null !== (e = null === (t = this.getTarget().state.mainModel.pageSettings) || void 0 === t ? void 0 : t.pageSize) && void 0 !== e ? e : {
          width: 700
        };
      return ln.m.widthFromKey(r.presetSize, r.width, r.sizeUnit, "px");
    }
    getPageSettings() {
      var e = this.getState().mainModel.pageSettings || {};
      return an.A.getOrDefault(e);
    }
    getNativePageSettings() {
      return this.getState().mainModel.pageSettings || {};
    }
    setPageSection(e) {
      var t = Cn(Cn({}, this.getPageSettings()), {}, {
        pageSection: e
      });
      this.updatePageSettingsWithChangeOnly(t, !1);
    }
    setDocumentWidth(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px",
        r = this.getPageSettings(),
        n = Cn(Cn({}, r), {}, {
          pageSize: Cn(Cn({}, r.pageSize), {}, {
            width: e,
            sizeUnit: t,
            presetSize: void 0
          })
        });
      this.updatePageSettingsWithChangeOnly(n, !1);
    }
    tripExistDefault(e) {
      var t = this.getPageSettings(),
        r = new Set(f().keys(this.getNativePageSettings())),
        n = f().clone(e) || {};
      for (var i in e) r.has(i) || e[i] == t[i] && delete n[i];
      return n;
    }
    updatePageSettingsWithChangeOnly(e, t) {
      e = this.tripExistDefault(e), this.getTarget().setPageSettings(e), t && this.getTarget().raiseSavePageSettingsAsDefault(e);
    }
    addIgnoreWord(e) {
      var t = this.getPageSettings(),
        r = Cn(Cn({}, t.spellCheck), {}, {
          ignoreWords: cn.u.getIgnoreWordsOrDefault(t.spellCheck) + "\n" + e
        });
      this.updatePageSettingsWithChangeOnly(Cn(Cn({}, t), {}, {
        spellCheck: r
      }), !1);
    }
    showPageSetting() {
      this.worksheetLabelsOpen = !1, this.getTarget().requestRender(this);
    }
    setSettingsIfChanged(e) {
      var t = this.getState();
      e.pageSettings != t.mainModel.pageSettings && (e.pageSettings = t.mainModel.pageSettings);
    }
    getAsCssStyle() {
      var e = this.getPageSettings(),
        t;
      return {
        fontFamily: Yr.A.textFontFamilyFromKey(e.fontName),
        fontSize: e.fontSize
      };
    }
    render() {
      var e = this,
        t,
        r,
        n = this.getTarget();
      if (this.worksheetLabelsOpen) {
        var i,
          o,
          s,
          a = null === (i = n.props.settings) || void 0 === i || null === (o = i.complexObject) || void 0 === o || null === (s = o.defaultPageInformation) || void 0 === s ? void 0 : s.pageSettings;
        return c().createElement(bn, {
          labels: this.getNativePageSettings().worksheetLabels,
          getMathTypeClss: n.getMathTypeClss,
          pageSettings: this.getPageSettings(),
          defaults: null == a ? void 0 : a.worksheetLabels,
          canSaveDefault: !!n.props.onPageInformationChange,
          onClose: () => n.closeRender(this),
          onApply: function () {
            var t = (0, Ur.A)(Gr().mark(function t(r, i) {
              return Gr().wrap(function t(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    if (!i) {
                      o.next = 3;
                      break;
                    }
                    return o.next = 3, n.raiseSavePageSettingsAsDefault(Cn(Cn({}, a), {}, {
                      worksheetLabels: r
                    }));
                  case 3:
                    n.setPageSettings(Cn(Cn({}, e.getNativePageSettings()), {}, {
                      worksheetLabels: r
                    })), n.closeRender(e);
                  case 5:
                  case "end":
                    return o.stop();
                }
              }, t);
            }));
            function r(e, r) {
              return t.apply(this, arguments);
            }
            return r;
          }()
        });
      }
      return c().createElement(on, {
        spellCheckInfo: null === (t = n.props.settings) || void 0 === t || null === (r = t.complexObject) || void 0 === r ? void 0 : r.spellCheckInfo,
        onRequestRefreshLazy: this.handleRequestRefreshLazy,
        getMathTypeClss: n.getMathTypeClss,
        requestLocalFonts: n.props.requestLocalFonts,
        fontsLoader: n.getFontsLoader(),
        data: this.getPageSettings(),
        onClose: () => n.closeRender(this),
        onDataChanged: (e, t) => {
          var r = this.tripExistDefault(e),
            i = () => {
              n.setPageSettings(r), n.closeRender(this);
            };
          if (t) return n.raiseSavePageSettingsAsDefault(r).then(i);
          i();
        },
        onRequestDicManager: () => {
          n.props.onRequestDicManager && n.props.onRequestDicManager();
        },
        onGlobalIgnoreSaved: e => {
          this.target.saveGlobalIgnoreWord(e);
        }
      });
    }
  }
  var An = 1e3;
  class wn {
    getFindResultPositionFromIndex(e, t) {
      var r = {
        count: 0
      };
      return this.countingFromFindResult(e, r, t);
    }
    countingFromFindResult(e, t, r) {
      for (var n = 0; n < e.length; n++) {
        if (t.count == r) return this.getFirstMostNested(e, n);
        var i = e[n];
        if (i.from && i.to) t.count++;else {
          var o = this.countingFromFindResult(i.children, t, r);
          if (o) return {
            resultIndex: n,
            nestedPosition: o
          };
        }
      }
    }
    getFindResultFromPosition(e, t) {
      var r = e[t.resultIndex];
      if (!r || !e || e.length <= 0) return {};
      if (!t.nestedPosition) return {
        from: r.from,
        to: r.to,
        key: r.key
      };
      var n = this.getFindResultFromPosition(r.children, t.nestedPosition);
      return {
        lineIndex: r.lineIndex,
        charIndex: r.charIndex,
        key: r.key,
        children: [n]
      };
    }
    findNext(e, t) {
      return this.innerFindNext(e.results, t, !0);
    }
    innerFindNext(e, t, r) {
      var n;
      if (!t.nestedPosition) return (n = t.resultIndex + 1) < e.length ? this.getFirstMostNested(e, n) : r ? this.getFirstMostNested(e, 0) : null;
      var i = e[t.resultIndex],
        o = this.innerFindNext(i.children, t.nestedPosition, !1),
        n;
      return o ? {
        resultIndex: t.resultIndex,
        nestedPosition: o
      } : (n = t.resultIndex + 1) < e.length ? this.getFirstMostNested(e, n) : r ? this.getFirstMostNested(e, 0) : null;
    }
    findPrevious(e, t) {
      return this.innerFindPrevious(e.results, t, !0);
    }
    innerFindPrevious(e, t, r) {
      var n;
      if (!t.nestedPosition) return (n = t.resultIndex - 1) >= 0 ? this.getLastMostNested(e, n) : r ? this.getFirstMostNested(e, e.length - 1) : null;
      var i = e[t.resultIndex],
        o = this.innerFindPrevious(i.children, t.nestedPosition, !1),
        n;
      return o ? {
        resultIndex: t.resultIndex,
        nestedPosition: o
      } : (n = t.resultIndex - 1) >= 0 ? this.getLastMostNested(e, n) : r ? this.getLastMostNested(e, e.length - 1) : null;
    }
    getFirstMostNested(e, t) {
      var r = e[t];
      return r.children ? {
        resultIndex: t,
        nestedPosition: this.getFirstMostNested(r.children, 0)
      } : {
        resultIndex: t
      };
    }
    getLastMostNested(e, t) {
      var r = e[t];
      return r.children ? {
        resultIndex: t,
        nestedPosition: this.getLastMostNested(r.children, r.children.length - 1)
      } : {
        resultIndex: t
      };
    }
    analyzeReplacementInfo(e, t, r) {
      var n = null;
      n = f().isString(t) ? [sr.A.createTextBlock(t)] : t;
      var i = [{
          id: vt.w.nextId(),
          blocks: n
        }],
        o = null;
      return {
        repeatInReplacement: (o = "plain-text" == r ? this.findText(i, e) : this.findMath(i, e, !1)).total
      };
    }
    find(e, t, r) {
      return "plain-text" == r ? this.findText(e, t) : this.findMath(e, t, !0);
    }
    findText(e, t) {
      if (!t) return {
        total: 0,
        results: [],
        inMathMode: !1
      };
      t = t.toLowerCase();
      var r = {
        total: 0
      };
      try {
        var n = [];
        return this.findTextLines(e, t, xe.Ay.getUnistringUncached(t), void 0, n, r), {
          total: r.total,
          results: n,
          inMathMode: !1
        };
      } catch (e) {
        if ("limited" == e.message) return {
          total: r.total,
          results: n,
          inMathMode: !1
        };
        throw e;
      }
    }
    findMath(e, t) {
      var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        n = [],
        i = {
          total: 0
        };
      if (!t) return {
        total: 0,
        results: [],
        inMathMode: !0
      };
      try {
        return f().isString(t) ? (t = t.toLowerCase(), this.findMathLines(e, t, xe.Ay.getUnistringUncached(t), void 0, n, r, i)) : (t = f().cloneDeep(t), this.addUnicodeInfo(t), this.findMathLinesByBlocks(e, t, void 0, n, r, i)), {
          total: i.total,
          results: n,
          inMathMode: !0
        };
      } catch (e) {
        if ("limited" == e.message) return {
          total: i.total,
          results: n,
          inMathMode: !0
        };
        throw e;
      }
    }
    addUnicodeInfo(e) {
      e.forEach(e => {
        mt.A.isTextBlock(e) && (e.___textUnicode = xe.Ay.getUnistringUncached(e.text));
      });
    }
    deepBlockContentCompare(e, t) {
      if (e.type != t.type) return !1;
      if (e.text != t.text) return !1;
      if (!Ht.A.isComposite(e)) return !0;
      if (e.bracket != t.bracket) return !1;
      var r = f().keys(e.elements);
      if (r.length != f().keys(t.elements).length) return !1;
      for (var n = 0; n < r.length; n++) {
        var i = r[n],
          o = e.elements[i],
          s = t.elements[i];
        if (o.lines.length != s.lines.length) return !1;
        for (var a = 0; a < o.lines.length; a++) {
          var l = o.lines[a],
            c = s.lines[a];
          if (l.blocks.length != c.blocks.length) return !1;
          for (var d = 0; d < l.blocks.length; d++) {
            var h = l.blocks[d],
              p = c.blocks[d];
            if (!this.deepBlockContentCompare(h, p)) return !1;
          }
        }
      }
      return !0;
    }
    findMathLinesByBlocks(e, t, r, n, i, o) {
      if (0 != t.length) {
        if (1 == t.length && mt.A.isTextBlock(t[0])) return this.findMathLines(e, t[0].text.toLowerCase(), xe.Ay.getUnistringUncached(t[0].text), r, n, i, o);
        var s,
          a,
          l = void 0,
          c = 0;
        d(), e.forEach((e, h) => {
          var p = "",
            u = void 0;
          d(), Ze.A.blockEach(e, (g, m, f, y) => {
            if (!mt.A.isTextBlock(g)) {
              var v = Br.A.blockStillTextModeFromRoot(g) || Br.A.isCodeSectionBlock(g),
                b = g.elements,
                x = [];
              Ht.A.isDiagramBlock(g) ? Br.A.getElementKeys(g).forEach(e => {
                var r = b[e].isTextMode || "caption" == e;
                this.findMathLinesByBlocks(b[e].lines, t, e, x, r, o);
              }) : Br.A.getElementKeys(g).forEach(e => this.findMathLinesByBlocks(b[e].lines, t, e, x, v, o)), x.length > 0 && n.push({
                key: r,
                lineIndex: h,
                charIndex: f,
                children: x
              });
            }
            if (!i) {
              mt.A.isTextBlock(g) && (a ? (p += g.text.toLowerCase(), void 0 === u && (u = f)) : d());
              var C = m == e.blocks.length - 1;
              if (!mt.A.isTextBlock(g) || C) {
                if (a && !p) return void d();
                var S = xe.Ay.getUnistringUncached(p);
                if (a) {
                  var A = 0 == s,
                    w = s < t.length - 1,
                    E = s == t.length - 1,
                    k = t[s].text.toLowerCase(),
                    O = t[s].___textUnicode;
                  A && p.endsWith(k) ? (s++, a = !1, l = u + S.length - O.length) : w && p == k ? (s++, a = !1) : E && p.startsWith(k) && (s++, a = !1, c = u + O.length - 1), s >= t.length && (o.total++, n.push({
                    key: r,
                    from: {
                      lineIndex: h,
                      charIndex: l || 0
                    },
                    to: {
                      lineIndex: h,
                      charIndex: c
                    }
                  }), d());
                }
                a || (this.deepBlockContentCompare(t[s], g) ? (s++, void 0 === l && (l = f)) : d(), s >= t.length ? (o.total++, n.push({
                  key: r,
                  from: {
                    lineIndex: h,
                    charIndex: l
                  },
                  to: {
                    lineIndex: h,
                    charIndex: y
                  }
                }), d()) : a = mt.A.isTextBlock(t[s])), p = "", u = void 0;
              }
            }
          });
        });
      }
      function d() {
        0 !== s && (s = 0, a = mt.A.isTextBlock(t[0]), l = void 0, c = 0);
      }
    }
    findMathLines(e, t, r, n, i, o, s) {
      if (t) {
        var a = 0;
        e.forEach((e, l) => {
          var c = "",
            d = void 0;
          Ze.A.blockEach(e, (h, p, u) => {
            if (mt.A.isTextBlock(h) && !o && (c += h.text.toLowerCase(), void 0 === d && (d = u)), !mt.A.isTextBlock(h)) {
              var g = Ht.A.isTable(h) || Ht.A.isTheorem(h),
                m = h.elements,
                f = [];
              Ht.A.isDiagramBlock(h) ? Br.A.getElementKeys(h).forEach(e => {
                var n = m[e].isTextMode || "caption" == e;
                this.findMathLines(m[e].lines, t, r, e, f, n, s);
              }) : Br.A.getElementKeys(h).forEach(e => this.findMathLines(m[e].lines, t, r, e, f, g, s)), f.length > 0 && i.push({
                key: n,
                lineIndex: l,
                charIndex: u,
                children: f
              });
            }
            if (c && (!mt.A.isTextBlock(h) || p == e.blocks.length - 1)) {
              for (var y, v = 0, b = xe.Ay.getUnistringUncached(c); (y = c.indexOf(t, v)) >= 0;) {
                if (++a > An) throw new Error("limited");
                var x = b.getClusterIndexFromUTF16Index(y),
                  C = d + x,
                  S = d + x + r.length - 1;
                s.total++, i.push({
                  key: n,
                  from: {
                    lineIndex: l,
                    charIndex: C
                  },
                  to: {
                    lineIndex: l,
                    charIndex: S
                  }
                }), v = y + t.length;
              }
              c = "", d = void 0;
            }
          });
        });
      }
    }
    findTextLines(e, t, r, n, i, o) {
      if (t) {
        var s = 0;
        e.forEach((e, a) => {
          var l = "",
            c = void 0;
          Ze.A.blockEach(e, (d, h, p) => {
            if (Br.A.blockStillTextModeFromRootIncludeDiagram(d) || Br.A.isCodeSectionBlock(d)) {
              var u = [],
                g = d.elements;
              Ht.A.isDiagramBlock(d) ? Br.A.getElementKeys(d).forEach(e => {
                var n;
                (g[e].isTextMode || "caption" == e) && this.findTextLines(d.elements[e].lines, t, r, e, u, o);
              }) : Br.A.getElementKeys(d).forEach(e => {
                var n = d.elements[e];
                n && this.findTextLines(n.lines, t, r, e, u, o);
              }), u.length > 0 && i.push({
                key: n,
                lineIndex: a,
                charIndex: p,
                children: u
              });
            } else mt.A.isTextBlock(d) && (l += d.text.toLowerCase(), void 0 === c && (c = p));
            if (l && (!mt.A.isTextBlock(d) || h == e.blocks.length - 1)) {
              for (var m, f = 0, y = xe.Ay.getUnistringUncached(l); (m = l.indexOf(t, f)) >= 0;) {
                if (++s > An) throw new Error("limited");
                var v = y.getClusterIndexFromUTF16Index(m),
                  b = c + v,
                  x = c + v + r.length - 1;
                o.total++, i.push({
                  key: n,
                  from: {
                    lineIndex: a,
                    charIndex: b
                  },
                  to: {
                    lineIndex: a,
                    charIndex: x
                  }
                }), f = m + t.length;
              }
              l = "", c = void 0;
            }
          });
        });
      }
    }
  }
  const En = new wn();
  class kn {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "lastFindInfo", void 0), (0, n.A)(this, "incrementFindDelayRunObj", E.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "runIncrementFindDelayFunc", () => {
        var e = this.lastFindInfo,
          t = e.mode,
          r = e.searchInfo,
          n = e.inReplacing,
          i = e.dzContainer,
          o = En.find(this.target.state.mainModel.lines, r, t),
          s,
          a;
        if (n) {
          var l = En.analyzeReplacementInfo(r, this.lastFindInfo.replaceInfo, t),
            c;
          console.log("analyzed: ", l), s = this.target.getRegionHighlight().getSelectedInfo().currentIndexPosition, (s += l.repeatInReplacement) >= o.total && (s = 0);
        }
        this.target.getRegionHighlight() && (a = this.target.getRegionHighlight().fromFindResult(o, i, this.target.getEditorHtmlElement(), i.mtElement, this.target.getScrollSelector(), {
          isIncremental: !0,
          indexSuggestion: s,
          requestScroll: this.lastFindInfo.requestScroll
        })), this.target.props.onIncrementalFindInfoChanged && this.target.props.onIncrementalFindInfoChanged({
          index: a,
          result: o
        }), this.lastFindInfo = {
          searchInfo: r,
          mode: t,
          searchResult: o,
          dzContainer: i
        };
      }), this.target = e;
    }
    find(e, t, r) {
      var n, i;
      return n = "plain-text" == t ? En.findText(this.target.state.mainModel.lines, e) : En.findMath(this.target.state.mainModel.lines, e, !0), this.lastFindInfo = {
        searchInfo: e,
        mode: t,
        searchResult: n,
        dzContainer: r
      }, this.target.getRegionHighlight() && (i = this.target.getRegionHighlight().fromFindResult(n, r, this.target.getEditorHtmlElement(), this.target.getMathTypeHtmlElement(), this.target.getScrollSelector())), {
        result: n,
        index: i
      };
    }
    findNext() {
      if (this.target.getRegionHighlight()) return this.target.getRegionHighlight().findNext();
    }
    findPrevious() {
      if (this.target.getRegionHighlight()) return this.target.getRegionHighlight().findPrevious();
    }
    requestReplace(e, t) {
      if (this.lastFindInfo) {
        var r = this.lastFindInfo,
          n = r.mode,
          i = r.searchResult;
        if (!(i.total <= 0)) {
          if (t != n) throw new Error("unexpected mode");
          var o = this.target.getRegionHighlight().getSelectedInfo();
          if (o.currentFindPosition) {
            var s = Rt.buildCursorSelectedFindResultPosition(i.results, o.currentFindPosition);
            console.log("range: ", s), this.lastFindInfo.inReplacing = !0, this.lastFindInfo.delay = 10, this.lastFindInfo.scrollToView = !0, this.lastFindInfo.replaceInfo = e;
            var a = this.target.getController().replaceSearch(this.target.state.mainModel, "plain-text" == t, s.from, s.to, e);
            this.lastFindInfo.requestScroll = !0, this.target.handleResult(a);
          }
        }
      }
    }
    delayIncrementalFind(e) {
      if (this.lastFindInfo && this.target.getRegionHighlight() && this.target.getRegionHighlight().isInHighlightMode()) {
        var t = e ? 0 : 100;
        this.incrementFindDelayRunObj.later(this.runIncrementFindDelayFunc, void 0 === this.lastFindInfo.delay ? t : this.lastFindInfo.delay);
      }
    }
    requestReplaceAll(e, t) {
      if (this.lastFindInfo) {
        var r = this.lastFindInfo,
          n = r.mode,
          i = r.searchResult,
          o = r.searchInfo;
        if (!(i.total <= 0)) {
          if (t != n) throw new Error("unexpected mode");
          var s;
          if (this.target.getRegionHighlight().getSelectedInfo().currentFindPosition) {
            for (var a = i.total, l = this.target.state.mainModel, c = i, d = 0, h = En.getFindResultPositionFromIndex(c.results, 0), p, u = En.analyzeReplacementInfo(o, e, n), g = 0; g < a; g++) {
              var m = Rt.buildCursorSelectedFindResultPosition(c.results, h);
              l = (p = this.target.getController().replaceSearch(l, "plain-text" == t, m.from, m.to, e)).editorChangeInfo.model, c = En.find(l.lines, o, n), d += u.repeatInReplacement, h = En.getFindResultPositionFromIndex(c.results, d);
            }
            this.target.needFocusAcquire(), this.target.needPreventScroll(), this.target.handleResult(p), this.target.refreshDelayRenderView(), this.lastFindInfo.delay = 0;
          }
        }
      }
    }
    closeFindSession() {
      this.target.getRegionHighlight() && (this.target.getRegionHighlight().closeFindSession(), this.lastFindInfo = null);
    }
  }
  var On = r(69153);
  class Dn extends On.g4 {
    getTextType() {
      return "plain";
    }
    processTextForTextMode(e, t) {
      return t;
    }
    toLatexTextLine(e, t, r) {
      return r.currentStr += this.getLatexTextLine(e, t, r), r;
    }
    getLatexTextLine(e, t, r) {
      var n;
      return ("" == r.currentStr ? "" : "\n") + t;
    }
    processListItem(e, t, r, n) {
      return n.currentStr += this.getLineWithPrefixText(e, t, n), n;
    }
    getLineWithPrefixText(e, t, r) {
      var n = "" == r.currentStr ? "" : "\n",
        i = "",
        o = "",
        s = k.A.getLineTempOrStoreIndent(e, 0);
      return s > 0 && (o = f().repeat("  ", s)), n + o + i + t;
    }
    handleLineAlign(e, t) {
      return e;
    }
    processSection(e, t, r) {
      return r.currentStr += this.getLineWithPrefixText(e, t, r), r;
    }
    appendStyleBeginForText(e, t) {
      return t;
    }
    appendStyleEndForText(e, t) {
      return t;
    }
  }
  var Pn = new Dn(),
    Mn = r(27077),
    In = r(92342);
  class Tn {
    toLatex(e) {
      for (var t = new Array(e.length), r = 0, n = e.length; r < n; r++) t[r] = this.getTextFromLine(e[r]);
      return t.join("\n");
    }
    toLatexFromEditor(e) {
      return this.toLatex(e.lines);
    }
    getTextFromLine(e) {
      for (var t = new Array(e.blocks.length), r = 0; r < e.blocks.length; r++) {
        var n = e.blocks[r];
        t[r] = this.getTextFromBlock(n);
      }
      return t.join("");
    }
    getTextFromBlock(e) {
      if (mt.A.isOpenBlock(e)) return e.text;
      if (mt.A.isCloseBlock(e)) return e.text;
      var t, r;
      if (Ht.A.isBibBibliography(e)) return In.k.render((null === (t = e.cslInfo) || void 0 === t ? void 0 : t.nodes) || []);
      if (Ht.A.isBibCite(e)) return In.k.render((null === (r = e.cslInfo) || void 0 === r ? void 0 : r.nodes) || []);
      if (Ht.A.isComposite(e)) {
        var n,
          i = Br.A.getElementKeys(e).map(t => e.elements[t]);
        return "".concat(e.text, "{").concat(i.map(e => this.toLatexFromEditor(e)).join("|"), "}");
      }
      return e.text;
    }
  }
  var Ln = new Tn();
  class Rn extends Dn {
    getTextType() {
      return "bbcode";
    }
    appendStyleBeginForText(e, t) {
      return e.styles.forEach(e => {
        var r = this.styleToBBCode(e.key, e.value, !0);
        r && t.push(r);
      }), t;
    }
    appendStyleEndForText(e, t) {
      return e.closeStyles.forEach(e => {
        var r = this.styleToBBCode(e.key, e.value, !1);
        r && t.push(r);
      }), t;
    }
    handleLineAlign(e, t) {
      var r, n, n, r;
      e.align && t && e.align != t && ((r = this.styleToBBCodeTagName("align", e.align)) && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "[/".concat(r, "]")), e.currentStr = this.removeEmptyAlign(e.currentStr, r)), (n = this.styleToBBCodeTagName("align", t)) && (e.currentStr += "[".concat(n, "]")));
      !e.align && t && (n = this.styleToBBCodeTagName("align", t)) && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "[".concat(n, "]")));
      e.align && !t && (r = this.styleToBBCodeTagName("align", e.align)) && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "[/".concat(r, "]")), e.currentStr = this.removeEmptyAlign(e.currentStr, r));
      return e.align = t, e;
    }
    processSection(e, t, r) {
      r = this.popAllIndentsIfExists(r);
      var n = this.getLineWithPrefixText(e, t, r),
        i = k.A.getLineTempOrStoreIndent(e, 0),
        o = this.getSectionSizeFromIndentIndex(i);
      return r.currentStr += "[size=".concat(o, "][b]").concat(n, "[/b][/size]"), r;
    }
    processListItem(e, t, r, n) {
      var i = k.A.getLineStyle(e, "listTypeSkip", !1),
        o = n.indents.length - 1,
        s = k.A.getLineTempOrStoreIndent(e, 0),
        a = this.getBBCodeListChar(s, r),
        l = this.getListTypeAsString(r);
      return o < s ? (n.currentStr = this.addNewLineStrAtEnd(n.currentStr, "[list".concat(a, "]")), n.indents.push(l)) : (o == s || (n.currentStr += this.popAllIndents(n, o - s)), n = this.changeListItemIfDiffentBBCode(n, l, a)), n.currentStr += i ? "\n" : "\n[*] ", n.currentStr += t, n;
    }
    changeListItemIfDiffentBBCode(e, t, r) {
      var n;
      return t != f().last(e.indents) && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "[/list][list".concat(r, "]"))), e.indents.pop(), e.indents.push(t), e;
    }
    popAllIndents(e, t) {
      var r = "";
      for (void 0 === t && (t = 999); e.indents.length > 0 && t > 0;) e.indents.pop(), r += "\n[/list]", t--;
      return r;
    }
    getBBCodeListChar(e, t) {
      if ("unorder" == t) return "";
      switch (e) {
        case 0:
          return "=1";
        case 1:
          return "=a";
        case 2:
          return "=i";
        case 3:
          return "=A";
      }
      return "";
    }
    getSectionSizeFromIndentIndex(e) {
      switch (e) {
        case 0:
          return 4;
        case 1:
          return 3;
        case 2:
          return 2;
      }
      return 2;
    }
    removeEmptyAlign(e, t) {
      var r = "[".concat(t, "]\n[/").concat(t, "]");
      return f().endsWith(e, r) ? e.substr(0, e.length - r.length) : e;
    }
    styleToBBCode(e, t, r) {
      var n = this.styleToBBCodeTagName(e, t);
      return n ? ("fontSize" == e && (n = r ? "size=".concat(n) : "size"), r ? "[".concat(n, "]") : "[/".concat(n, "]")) : null;
    }
    toLatexTextLine(e, t, r) {
      var n = "" == r.currentStr ? "" : "\n",
        i = k.A.getLineStyle(e, "align");
      return "left" == i && (i = void 0), (r = this.popAllIndentsIfExists(r)).align != i && (n = ""), (r = this.handleLineAlign(r, i)).currentStr += n + t, r;
    }
    styleToBBCodeTagName(e, t) {
      switch (e) {
        case "isBold":
          return t ? "b" : "";
        case "isItalic":
          return t ? "i" : "";
        case "textDecoration":
          return "underline" == t ? "u" : "line-through" == t ? "s" : "";
        case "align":
          switch (t) {
            case "left":
              return "";
            case "center":
              return "center";
            case "right":
              return "right";
          }
        case "fontSize":
          switch (t) {
            case "\\tiny":
            case "\\scriptsize":
            case "\\footnotesize":
            case "\\small":
              return "1";
            case "\\normalsize":
              return "2";
            case "\\large":
              return "3";
            case "\\Large":
              return "4";
            case "\\LARGE":
              return "5";
            case "\\huge":
              return "6";
            case "\\Huge":
              return "7";
          }
      }
    }
  }
  var Bn = new Rn(),
    Fn = r(59399),
    jn = r.n(Fn);
  class _n extends c().Component {
    render() {
      return "internal-mathml" === this.props.selectedOption ? null : c().createElement("div", {
        className: "tw:mb-2 tw:flex tw:flex-col tw:gap-2"
      }, this.renderWarning());
    }
    renderWarning() {
      if ("internal-mathml" != this.props.selectedOption) return [c().createElement(gn, {
        key: "w1",
        tone: "warning",
        compact: !0
      }, "The LaTeX below is for reference and may need adjustments to compile in your LaTeX document."), this.renderDiagramWarning()];
    }
    renderDiagramWarning() {
      if (this.props.isDiagram) return c().createElement(gn, {
        key: "w2",
        tone: "warning",
        compact: !0
      }, "Plots and images are not supported when converting to TikZ.");
    }
  }
  class Nn extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "packagesInfo", [{
        name: "physics"
      }, {
        name: "amsmath"
      }, {
        name: "tikz"
      }, {
        name: "mathdots"
      }, {
        name: "yhmath"
      }, {
        name: "cancel"
      }, {
        name: "color"
      }, {
        name: "siunitx"
      }, {
        name: "array"
      }, {
        name: "multirow"
      }, {
        name: "amssymb"
      }, {
        name: "gensymb"
      }, {
        name: "tabularx"
      }, {
        name: "extarrows"
      }, {
        name: "booktabs"
      }, {
        name: "fadings",
        isTikzPackage: !0
      }, {
        name: "patterns",
        isTikzPackage: !0
      }, {
        name: "shadows.blur",
        isTikzPackage: !0
      }, {
        name: "shapes",
        isTikzPackage: !0
      }]);
    }
    render() {
      return c().createElement("div", {
        className: this.isMathmlSelect() ? void 0 : "tw:mb-2"
      }, this.renderPackageHelper(), this.renderImportPackagesScript());
    }
    renderPackageHelper() {
      if (!this.isMathmlSelect()) return c().createElement(gn, {
        compact: !0,
        action: c().createElement($r.$, {
          variant: "toolbar",
          compact: !0,
          "aria-expanded": this.props.showImportScript,
          onClick: () => this.props.onShowImportScriptChange(!this.props.showImportScript),
          className: "tw:underline",
          style: {
            color: "var(--ui-info, #1755a8)"
          }
        }, this.props.showImportScript ? "Hide Include Script" : "Show Include Script")
      }, "For LaTeX, you may need to include required packages.");
    }
    isMathmlSelect() {
      return "internal-mathml" == this.props.selectedOption;
    }
    renderImportPackagesScript() {
      if (!this.isMathmlSelect() && this.props.showImportScript) {
        var e = {
            outline: "none",
            flexGrow: 1,
            resize: "none",
            minHeight: 100,
            marginTop: 5
          },
          t = this.packagesInfo.map(e => e.isTikzPackage ? "\\usetikzlibrary{".concat(e.name, "}") : "\\usepackage{".concat(e.name, "}")).join("\n") + "\n\n\n";
        return c().createElement("div", {
          style: {
            display: "flex"
          }
        }, c().createElement("textarea", {
          onKeyDown: e => e.stopPropagation(),
          readOnly: !0,
          style: e
        }, t));
      }
    }
  }
  function zn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Hn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? zn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Wn extends c().Component {
    render() {
      return c().createElement("div", {
        className: "tw:text-[13px]"
      }, this.renderOutputSettings());
    }
    renderOutputSettings() {
      var e = [],
        t = {
          height: 25
        },
        r = {
          cursor: "pointer",
          margin: "0px 3px"
        },
        n = {
          cursor: "pointer"
        };
      return this.props.hideExportOutputOptions || this.props.mathml ? this.props.mathml && e.push(c().createElement("div", {
        key: "div",
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, c().createElement("div", {
        style: {
          height: 20,
          marginRight: 30,
          marginLeft: 5
        },
        key: "internal-latex"
      }, c().createElement("input", {
        style: n,
        type: "radio",
        value: "internal-latex",
        checked: "internal-latex" === this.props.selectedOption,
        onClick: () => this.props.onSelectedChange("internal-latex")
      }), c().createElement("label", {
        style: r,
        onClick: () => {
          this.props.onSelectedChange("internal-latex");
        }
      }, "LaTex")), c().createElement("div", {
        style: {
          height: 20
        },
        key: "internal-mathml"
      }, c().createElement("input", {
        style: n,
        type: "radio",
        value: "internal-mathml",
        checked: "internal-mathml" === this.props.selectedOption,
        onClick: () => this.props.onSelectedChange("internal-mathml")
      }), c().createElement("label", {
        style: r,
        onClick: () => {
          this.props.onSelectedChange("internal-mathml");
        }
      }, "MathML")))) : e = [c().createElement("div", {
        style: t,
        key: "1"
      }, c().createElement("input", {
        style: n,
        type: "radio",
        value: "latex-latex",
        checked: "latex-latex" === this.props.selectedOption,
        onClick: () => this.props.onSelectedChange("latex-latex")
      }), c().createElement("label", {
        style: r,
        onClick: () => {
          this.props.onSelectedChange("latex-latex");
        }
      }, "Convert to Math Mode Latex + Latex (Diagram - Tikz, Section, List Item, Style)")), c().createElement("div", {
        style: Hn(Hn({}, t), {}, {
          height: 20
        }),
        key: "2"
      }, c().createElement("input", {
        style: n,
        type: "radio",
        value: "latex",
        checked: "latex" === this.props.selectedOption,
        onClick: () => this.props.onSelectedChange("latex")
      }), c().createElement("label", {
        style: r,
        onClick: () => {
          this.props.onSelectedChange("latex");
        }
      }, "Convert to Math Mode Latex + Plain Text"))], e;
    }
  }
  var Vn = r(91414);
  function Un(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function qn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Un(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Un(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Gn extends c().Component {
    render() {
      var e = this.props.st,
        t = e.nodeDelta,
        r = e.nodeScale;
      return c().createElement("div", {
        style: {
          paddingLeft: 5,
          paddingBottom: 5,
          border: "1px solid var(--ui-border, lightgray)",
          marginBottom: 5,
          position: "relative"
        }
      }, c().createElement("span", {
        style: {
          paddingRight: 10
        }
      }, "Text Node Transform: "), c().createElement("span", null, "X"), c().createElement(Vn.A, {
        containerStyle: {
          paddingTop: 4,
          marginLeft: 2,
          display: "inline-block"
        },
        style: {
          width: 25
        },
        unit: "",
        disableSlider: !0,
        min: -1e4,
        max: 1e4,
        step: 1,
        value: t.x,
        onValueChanged: e => this.props.onChange(qn(qn({}, this.props.st), {}, {
          nodeDelta: qn(qn({}, this.props.st.nodeDelta), {}, {
            x: e
          })
        }))
      }), c().createElement("span", null, "Y"), c().createElement(Vn.A, {
        containerStyle: {
          paddingTop: 4,
          marginLeft: 2,
          display: "inline-block"
        },
        style: {
          width: 25
        },
        unit: "",
        min: -1e4,
        max: 1e4,
        disableSlider: !0,
        step: 1,
        value: t.y,
        onValueChanged: e => this.props.onChange(qn(qn({}, this.props.st), {}, {
          nodeDelta: qn(qn({}, this.props.st.nodeDelta), {}, {
            y: e
          })
        }))
      }), c().createElement("span", null, "Scale "), c().createElement(Vn.A, {
        containerStyle: {
          paddingTop: 4,
          marginLeft: 2,
          display: "inline-block"
        },
        style: {
          width: 25
        },
        unit: "",
        decimals: 2,
        min: 0,
        max: 1e4,
        step: .1,
        disableSlider: !0,
        value: r,
        onValueChanged: e => this.props.onChange(qn(qn({}, this.props.st), {}, {
          nodeScale: e
        }))
      }));
    }
  }
  var Kn = r(91936),
    Zn = r.n(Kn),
    Yn = r(23466);
  function Qn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Jn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Xn = Zr.A.getModalDialog();
  class $n extends c().Component {
    constructor(e) {
      var t;
      super(e), (0, n.A)(this, "requestDiagramReloadDelay", E.A.createLaterRunObject("latest", 500)), (0, n.A)(this, "handleSelectedOptionChange", e => {
        this.setState({
          selectedOption: e
        }), e.startsWith("internal") || this.props.onSelectedChange(e);
      }), (0, n.A)(this, "onCancelClick", () => {
        this.props.onExportSettingVisibilityChanged(!1, this.state.selectedOption);
      }), (0, n.A)(this, "onDownloadClick", () => {
        var e = new Blob([this.getCurrentLatexOrMathml()], {
          type: "text/plain"
        });
        Zn().saveAs(e, "".concat(document.title, ".txt"));
      }), this.state = {
        selectedOption: this.props.mathml ? "internal-latex" : "latex-latex",
        copied: !1,
        tizkNodeSettings: null !== (t = this.props.tizkNodeSettings) && void 0 !== t ? t : {
          nodeDelta: {
            x: 0,
            y: 0
          },
          nodeScale: 1
        }
      };
    }
    shouldComponenetUpdate(e, t) {
      return e.latex != this.props.latex || e.mathml != this.props.mathml || t.isConvertToPlainText != this.state.isConvertToPlainText || t.isConvertToBBCode != this.state.isConvertToBBCode;
    }
    getConverterType() {
      return this.state.selectedOption;
    }
    isMathmlSelect() {
      return "internal-mathml" == this.state.selectedOption;
    }
    getCurrentLatexOrMathml() {
      return this.isMathmlSelect() ? this.props.mathml : this.props.latex;
    }
    requestReloadDiagramTikz() {
      var e;
      null !== (e = this.props.handler) && void 0 !== e && e.onReloadDiagramLatex && this.requestDiagramReloadDelay.later(() => {
        this.props.handler.onReloadDiagramLatex(this.state.tizkNodeSettings);
      });
    }
    renderTikzNodeSettings() {
      if (this.props.isDiagram) return c().createElement(Gn, {
        st: this.state.tizkNodeSettings,
        onChange: e => {
          this.setState({
            tizkNodeSettings: e
          }, () => {
            this.requestReloadDiagramTikz();
          });
        }
      });
    }
    renderMathLatexConvertSettings() {
      var e;
      if (null !== (e = this.props.handler) && void 0 !== e && e.onReloadLatex && !this.isMathmlSelect() && !this.props.isDiagram) return this.props.containerModel.isMathModeSelected() ? c().createElement("div", {
        style: {
          marginLeft: 40
        }
      }, c().createElement(Yn.A, {
        checked: !!this.state.ignoreSpace,
        onValueChanged: e => {
          var t;
          this.setState({
            ignoreSpace: e
          }), null !== (t = this.props.handler) && void 0 !== t && t.onReloadLatex && E.A.next(() => {
            this.props.handler.onReloadLatex(e);
          });
        },
        name: "Do not convert space character"
      })) : void 0;
    }
    componentWillUnmount() {
      this.requestDiagramReloadDelay.cancel();
    }
    render() {
      var e = !Xe.A.isMobileOrTablet(),
        t = c().createElement(Jr.i, {
          className: "tw:pt-3"
        }, c().createElement($r.$, {
          dialogAction: !0,
          key: "close",
          onClick: this.onCancelClick
        }, "Close"), e && c().createElement(jn(), {
          key: "cptc",
          text: this.getCurrentLatexOrMathml(),
          onCopy: () => this.setState({
            copied: !0
          })
        }, c().createElement($r.$, {
          dialogAction: !0
        }, "Copy To Clipboard")), e && c().createElement($r.$, {
          dialogAction: !0,
          variant: "primary",
          onClick: this.onDownloadClick
        }, "Download"), e && c().createElement("span", {
          role: "status",
          style: {
            visibility: this.state.copied ? "visible" : "hidden",
            padding: 5
          }
        }, "Copied!"));
      return c().createElement(Xn, {
        show: !0
      }, c().createElement(Vr.A, {
        size: "large",
        scroll: "body",
        style: Jn({
          maxWidth: "95vw"
        }, Zr.A.getCenterStyle()),
        title: "Export Latex Dialog",
        show: !f().isEmpty(this.props.latex),
        className: "export-latex",
        backDrop: !0,
        onClose: this.onCancelClick
      }, c().createElement("export-container", {
        style: ei,
        onTouchStart: e => {
          e.nativeEvent.handledTouchStart = !0;
        }
      }, c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "baseline"
        }
      }, c().createElement(Wn, {
        selectedOption: this.state.selectedOption,
        onSelectedChange: this.handleSelectedOptionChange,
        mathml: this.props.mathml,
        hideExportOutputOptions: this.props.hideExportOutputOptions
      }), this.renderMathLatexConvertSettings()), c().createElement(_n, {
        selectedOption: this.state.selectedOption,
        isDiagram: this.props.isDiagram
      }), c().createElement(Nn, {
        selectedOption: this.state.selectedOption,
        showImportScript: this.state.showImportScript,
        onShowImportScriptChange: e => {
          this.setState({
            showImportScript: e
          });
        }
      }), this.renderTikzNodeSettings(), c().createElement("textarea", {
        style: ti,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: !1,
        value: this.getCurrentLatexOrMathml()
      }), t)));
    }
  }
  var ei = {
      fontSize: 12,
      color: "var(--ui-text-muted, gray)",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      minWidth: 0
    },
    ti = {
      outline: "none",
      flexGrow: 1,
      minHeight: 150,
      resize: "none"
    },
    ri = r(51737);
  const ni = "Big Matrix\n\n$$\n\\begin{vmatrix}\n  a_{1,1} & \\ldots & a_{1,j-1} & a_{1,j+1} & \\ldots & a_{1,n} \\\\\n  \\vdots & \\ddots & \\vdots & \\vdots & \\ddots & \\vdots \\\\\n  a_{i-1,1} & \\ldots & a_{i-1, j-1} & a_{i-1, j+1} & \\ldots & a_{i-1, n} \\\\\n  a_{i+1,1} & \\ldots & a_{i+1, j-1} & a_{i+1, j+1} & \\ldots & a_{i+1, n} \\\\\n  \\vdots & \\ddots & \\vdots & \\vdots & \\ddots & \\vdots \\\\\n  a_{n,1} & \\ldots & a_{n, j-1} & a_{n, j+1} & \\ldots & a_{n, n}\n\\end{vmatrix}\n $$\n\nRepeating fractions\n\n$$\\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots} } } }\n$$\n\nSummation notation\n\n$$\n\\left( \\sum_{k=1}^n a_k b_k \\right)^2 \\leq \\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)\n$$\n\nSum of a Series\n$$ \\displaystyle\\sum_{i=1}^{k+1}i  $$\n\n";
  function ii(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function oi(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ii(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ii(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var si = Zr.A.getModalDialog(),
    ai = new ri.A(),
    li,
    ci;
  class di extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "textArea", void 0), (0, n.A)(this, "textChangeDelayRunObj", E.A.createLaterRunObject("latest", 600)), (0, n.A)(this, "onTextAreaChange", e => {
        var t = e.currentTarget.value;
        this.cacheLastLatex(t), this.setState({
          latex: t
        }), this.textChangeDelayRunObj.later(() => {
          var e = this.parseLatex(t);
          if (0 != e.length) {
            var r = {
              id: vt.w.nextId(),
              lines: e
            };
            this.setState({
              model: r,
              errorMessage: ""
            });
          } else this.setState({
            errorMessage: "Could not parse latex"
          });
        });
      }), (0, n.A)(this, "onOkClick", () => {
        var e = this.parseLatex(this.state.latex);
        0 != e.length && (this.props.forMathMode ? this.props.onSuccessfulParse(e[0].blocks[0].elements.mathValue.lines) : this.props.onSuccessfulParse(e));
      }), (0, n.A)(this, "onCancelClick", () => {
        this.props.onClose();
      });
      var t = ni;
      Xe.A.isMobileOrTablet() && (t = "$$\na^2\n$$"), this.props.forMathMode && (t = "\\frac{a}{b}"), t = this.getCachedLastLatex() || t;
      var r = this.parseLatex(t);
      this.state = {
        latex: t,
        model: {
          id: vt.w.nextId(),
          lines: r
        },
        errorMessage: ""
      };
    }
    wrapInMathContainer(e) {
      var t = {
        id: vt.w.nextId(),
        type: "composite",
        text: "\\math-container",
        elements: {
          mathValue: {
            id: vt.w.nextId(),
            lines: e
          }
        },
        displayMode: !0
      };
      return [{
        id: vt.w.nextId(),
        blocks: [t]
      }];
    }
    parseLatex(e) {
      var t = this.props.forMathMode ? "MathExpression" : "Expression",
        r = ai.parse(e, t);
      return 0 == r.length ? r : this.props.forMathMode ? this.wrapInMathContainer(r) : r;
    }
    shouldComponentUpdate(e, t) {
      return e.show != this.props.show || t.latex != this.state.latex || t.model != this.state.model || t.errorMessage != this.state.errorMessage;
    }
    cacheLastLatex(e) {
      this.props.forMathMode ? ci = e : li = e;
    }
    getCachedLastLatex() {
      return this.props.forMathMode ? ci : li;
    }
    renderTextAreaHeader() {
      if (this.props.forMathMode) return c().createElement("div", {
        style: oi(oi({}, mi), {}, {
          borderBottom: "1px solid var(--ui-border, lightgray)"
        })
      }, "\\begin{equation*}", c().createElement("span", {
        style: {
          fontSize: 12,
          color: "var(--ui-text-muted, gray)",
          float: "right",
          paddingRight: 5
        }
      }, "(You are inserting latex inside Math Mode area)"));
    }
    renderTextAreaFooter() {
      if (this.props.forMathMode) return c().createElement("div", {
        style: oi(oi({}, mi), {}, {
          borderTop: "1px solid var(--ui-border, lightgray)"
        })
      }, "\\end{equation*}");
    }
    componentDidMount() {
      E.A.waitALitteWhile(() => {
        this.textArea.select(), this.textArea.focus();
      });
    }
    render() {
      var e = this.props.getMathTypeClss();
      return c().createElement(si, {
        show: !0
      }, c().createElement(Vr.A, {
        size: "large",
        scroll: "body",
        style: oi({
          maxWidth: "95vw"
        }, Zr.A.getCenterStyle()),
        title: "Import Latex Dialog",
        show: this.props.show,
        className: "import-latex",
        onClose: this.onCancelClick,
        renderFooterContent: () => c().createElement(Jr.i, null, c().createElement($r.$, {
          dialogAction: !0,
          onClick: this.onCancelClick
        }, "Cancel"), c().createElement($r.$, {
          dialogAction: !0,
          variant: "primary",
          disabled: !!this.state.errorMessage,
          className: "ok",
          onClick: this.onOkClick
        }, "Import"))
      }, c().createElement("import-container", {
        style: ui
      }, c().createElement("import-info", {
        style: gi
      }, "* Only support basic Math Mode with commands/symbols existed in this app ", c().createElement("br", null), "* Do not support macro or commands like: \\hphantom, \\rlap, \\hskip"), c().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, gray)",
          display: "flex",
          flexDirection: "column",
          alignContent: "stretch"
        }
      }, this.renderTextAreaHeader(), c().createElement("textarea", {
        ref: e => this.textArea = e,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: !1,
        style: {
          border: "none",
          minHeight: 200,
          resize: "none",
          outline: "none",
          flex: 1,
          background: "var(--ui-surface, white)",
          padding: "5px 10px"
        },
        className: "latex",
        value: this.state.latex,
        onChange: this.onTextAreaChange
      }), this.renderTextAreaFooter()), c().createElement("parse-error", {
        style: hi
      }, this.state.errorMessage), c().createElement("display-math", {
        style: pi
      }, c().createElement(e, {
        readOnly: !0,
        model: this.state.model
      })))));
    }
  }
  var hi = {
      fontSize: "12px",
      color: "#e44c4c",
      textAlign: "center"
    },
    pi = {
      overflow: "auto",
      flexGrow: 1,
      height: "10px"
    },
    ui = {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    gi = {
      marginBottom: "2px",
      fontSize: "12px",
      color: "var(--ui-text-muted, gray)"
    },
    mi = {
      background: "var(--ui-surface, white)",
      fontSize: 13,
      color: "green",
      padding: 5,
      opacity: .6
    };
  class fi extends sn {
    constructor(e) {
      super(e), (0, n.A)(this, "exportLatexMathmlDialogRef", void 0), (0, n.A)(this, "getExportSettingRef", e => {
        this.exportLatexMathmlDialogRef = e;
      }), (0, n.A)(this, "onExportSettingSelectedChanged", e => {
        this.exportLatex(e);
      }), (0, n.A)(this, "handleRequestExportSelection", e => {
        if (!this.deactivated) {
          var t = this.getState();
          E.A.next(() => {
            e || (e = this.exportLatexMathmlDialogRef.getConverterType());
            var t = this.getSelectedLatex(e, !1) || "no selection";
            this.setState({
              exportInfo: {
                latex: t
              },
              isExportAll: !1
            });
          }), t.exportInfo && t.exportInfo.latex || this.setState({
            exportInfo: {
              latex: "loading"
            }
          });
        }
      }), (0, n.A)(this, "onExportSettingVisibilityChanged", (e, t) => {
        e ? this.exportLatex(t) : this.setState({
          exportInfo: null,
          hideExportOutputOptions: !1
        });
      }), (0, n.A)(this, "requestExportDialog", e => {
        this.deactivated || this.setState({
          exportInfo: {
            latex: e.latex,
            mathml: e.mathml,
            isDiagram: e.isDiagram,
            handler: e.handler,
            tizkNodeSettings: e.tizkNodeSettings
          },
          isExportAll: !1,
          hideExportOutputOptions: !0
        });
      }), (0, n.A)(this, "onImportLatexBoxClose", () => {
        this.setState({
          importLatexBoxShow: !1
        }), this.getTarget().hidenInputFocus();
      }), (0, n.A)(this, "onSuccessfulParse", e => {
        var t = this.getTarget().getContainerModel();
        t.cursorSelected || this.setSelectAtBegin(), E.A.next(() => {
          h().unstable_batchedUpdates(() => {
            if (t.cursorSelected) {
              var r = this.getTarget().getController().insertLines(e, t);
              this.getTarget().handleResult(r);
            } else {
              var n = {
                lineIndex: 0,
                charIndex: 0
              };
              this.getTarget().setSelected(n), E.A.waitABit(() => {
                this.onSuccessfulParse(e);
              });
            }
            this.setState({
              importLatexBoxShow: !1
            }), this.getTarget().hidenInputFocus();
          });
        });
      });
    }
    getConverter(e) {
      if (!this.deactivated) switch (e) {
        case "bbcode":
          return Bn;
        case "latex":
          return Pn;
        case "latex-latex":
          return Mn.H;
        case "text-only":
          return Ln;
        default:
          throw new Error("Convert type " + e + "not supported error");
      }
    }
    getSelectedLatex(e, t) {
      var r, n, i;
      if (!this.deactivated) {
        if (void 0 === e) throw new Error("no convert type");
        var o = this.getTarget(),
          s = o.getController().getSelectionData(o.getContainerModel(), !0);
        return null == s ? null : this.getConverter(e).toLatex(s, {
          inMathExpression: !o.getContainerModel().isTextModeSelected(),
          theoremInfo: o.state.mainModel.theoremInfo,
          mathTypeHtml: o.getMathTypeHtmlElement(),
          pageSettings: o.getPageSettings(),
          ignoreSpace: t,
          usingStandardMathWrapper: !(null === (r = o.props) || void 0 === r || null === (n = r.settings) || void 0 === n || null === (i = n.complexObject) || void 0 === i || !i.usingStandardMathWrapper)
        });
      }
    }
    requestExportAll(e) {
      if (!this.deactivated) {
        var t = this.getState();
        E.A.next(() => {
          var r, n, i;
          e = e || this.exportLatexMathmlDialogRef.getConverterType();
          var o = t.mainModel.lines,
            s = this.getConverter(e).toLatex(o, {
              inMathExpression: !1,
              theoremInfo: t.mainModel.theoremInfo,
              mathTypeHtml: this.getTarget().getMathTypeHtmlElement(),
              pageSettings: this.getTarget().getPageSettings(),
              usingStandardMathWrapper: !(null === (r = this.target.props) || void 0 === r || null === (n = r.settings) || void 0 === n || null === (i = n.complexObject) || void 0 === i || !i.usingStandardMathWrapper)
            });
          s = s || " ", this.setState({
            exportInfo: {
              latex: s
            },
            isExportAll: !0
          });
        }), t.exportInfo && t.exportInfo.latex || this.setState({
          exportInfo: {
            latex: "loading"
          }
        });
      }
    }
    exportLatex(e, t) {
      this.deactivated || (void 0 === t && (t = this.getState().isExportAll), t ? this.requestExportAll(e) : this.handleRequestExportSelection(e));
    }
    requestExportSelection(e) {
      this.deactivated || this.handleRequestExportSelection(e);
    }
    renderExportSettings() {
      if (!this.deactivated) {
        var e = this.getState();
        return e.exportInfo ? c().createElement($n, {
          containerModel: this.getTarget().getContainerModel(),
          latex: e.exportInfo.latex,
          mathml: e.exportInfo.mathml,
          isDiagram: e.exportInfo.isDiagram,
          tizkNodeSettings: e.exportInfo.tizkNodeSettings,
          handler: e.exportInfo.handler,
          ref: this.getExportSettingRef,
          hideExportOutputOptions: e.hideExportOutputOptions,
          isExportAll: e.isExportAll,
          onSelectedChange: this.onExportSettingSelectedChanged,
          onExportSettingVisibilityChanged: this.onExportSettingVisibilityChanged
        }) : null;
      }
    }
    setSelectAtBegin() {
      this.getTarget().setSelected({
        lineIndex: 0,
        charIndex: 0
      });
    }
    showImportFromLatex() {
      if (!this.deactivated) {
        var e = this.getTarget().getContainerModel();
        e.isInsideTextSymbol() || this.setState({
          importLatexBoxShow: !0,
          forMathMode: !e.isTextModeSelected()
        });
      }
    }
    renderImportLatexBox() {
      if (!this.deactivated && !(this.getTarget().isReadOnly() || this.getTarget().isSelectOnly() || this.getTarget().isRestrictedView()) && this.getState().importLatexBoxShow) return c().createElement(di, {
        getMathTypeClss: this.getTarget().getMathTypeClss,
        show: this.getState().importLatexBoxShow,
        forMathMode: this.getState().forMathMode,
        onClose: this.onImportLatexBoxClose,
        onSuccessfulParse: this.onSuccessfulParse
      });
    }
  }
  class yi {
    isExtensionImage(e) {
      var t;
      switch (this.getFileExtension(e).toLowerCase()) {
        case "jpg":
        case "jpeg":
        case "jfif":
        case "pjpeg":
        case "pjp":
        case "ico":
        case "cur":
        case "gif":
        case "bmp":
        case "apng":
        case "png":
        case "svg":
        case "tif":
        case "tiff":
        case "webp":
          return !0;
      }
      return !1;
    }
    getFileExtension(e) {
      return e.split(".").pop();
    }
  }
  const vi = new yi();
  class bi {
    handlePasteAsFile(e, t, r) {
      var n,
        o = this.tryGetFileFromEvent(t);
      if (!o || o.length <= 0) return !1;
      var s = e.getContainerModel();
      if (s.isDiagramSelected || S.A.isDiagram(null === (n = s.cursorPos) || void 0 === n ? void 0 : n.attachGeoPosElement)) {
        var a,
          l,
          c = null === (a = s.cursorPos) || void 0 === a || null === (l = a.attachGeoPosElement) || void 0 === l ? void 0 : l.reactInstance;
        return !c || (c.uploadImages(o, r), console.log("handle image ", c), !0);
      }
      return (0, i.__)(o.slice(0, 10), t => (xr.A.requestFileUpload = t, e.insertImageContainer(), (0, i.cb)(200))), !0;
    }
    tryGetFileFromEvent(e) {
      if (!(e.types || []).some(e => "files" == e.toLowerCase())) return [];
      var t = Array.from(e.files) || [];
      return (t = t.filter(e => {
        if (!e.type.startsWith("image")) {
          var t = e.name;
          if (!vi.isExtensionImage(t)) return !1;
        }
        return !0;
      })).length <= 0 ? [] : t;
    }
  }
  const xi = new bi();
  var Ci = r(73894);
  function Si(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = Ai(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function Ai(e, t) {
    if (e) {
      if ("string" == typeof e) return wi(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? wi(e, t) : void 0;
    }
  }
  function wi(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  class Ei {
    tryHandle(e, t) {
      try {
        var r = e.getContainerModel();
        if (!r.isTextModeSelected()) return !1;
        var n = t.getData("text/html");
        if (!n) return !1;
        var i,
          o = new DOMParser().parseFromString(n, "text/html"),
          s = this.findTableHtml(o);
        if (!s) return !1;
        console.log(s);
        var a = this.parseTableHtmlToTable(s),
          l = e.getController().insertBlock(a, r);
        return e.handleResult(l), !0;
      } catch (e) {
        console.log(e);
      }
    }
    parseTableHtmlToTable(e) {
      var t,
        r = 1,
        n = [],
        i = Si(e.tBodies[0].children),
        o;
      try {
        for (i.s(); !(o = i.n()).done;) {
          var s = o.value,
            a = Array.from(s.children).map(e => this.getTextContent(e));
          if (n.push(a), r = Math.max(a.length, r), n.length > 300) break;
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      if (n.length <= 0) throw new Error("row is empty");
      r = Math.min(r, 50);
      var l = sr.A.createComposite("\\table");
      l.row = n.length, l.column = r, l.columnWidths = this.parseColumnWidths(Array.from(e.children).find(e => "COLGROUP" == e.tagName)), l.columnWidths && l.columnWidths.length > 0 && (l.columnWidths[r - 1] = void 0);
      for (var c = 0; c < n.length; c++) for (var d = 0; d < r; d++) {
        var h = Q.Z.getKeyFromRowCol(c, d),
          p = n[c][d];
        l.elements[h] = this.textToEditorModel(p);
      }
      return l;
    }
    getTextContent(e) {
      if (1 == e.childNodes.length && e.childNodes[0].nodeType == e.childNodes[0].ELEMENT_NODE && "BR" == e.childNodes[0].tagName) return "";
      var t = "";
      return Array.from(e.childNodes).forEach((r, n) => {
        r.nodeType == r.ELEMENT_NODE && "BR" == r.tagName ? t += "\n" : r.nodeType == r.TEXT_NODE && "\n" == r.textContent || (r.nodeType, r.ELEMENT_NODE, t += r.textContent), n < e.childNodes.length - 1 && r.nodeType == r.ELEMENT_NODE && "P" == r.tagName && (t += "\n");
      }), t;
    }
    parseColumnWidths(e) {
      var t;
      if (e) return Array.from(e.children).filter(e => "COL" == e.tagName).map(e => Number.parseFloat(e.getAttribute("width") || void 0));
    }
    textToEditorModel(e) {
      if (!e) return sr.A.createEmptyEditor();
      var t = ut.A.handlePureText(e, !0, !0);
      return t.lines.length <= 0 ? sr.A.createEmptyEditor() : sr.A.createEditorWith(t.lines);
    }
    findTableIn(e) {
      if (e) return Array.from(e).find(e => "TABLE" == e.tagName);
    }
    findTableHtml(e) {
      var t = e.body,
        r = this.findTableIn(t.children);
      if (r) return r;
      var n = Si(t.children),
        i;
      try {
        for (n.s(); !(i = n.n()).done;) {
          var o = i.value;
          if (r = this.findTableIn(o.children)) return r;
          var s = Si(o.children),
            a;
          try {
            for (s.s(); !(a = s.n()).done;) {
              var l = a.value;
              if (r = this.findTableIn(l.children)) return r;
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    }
  }
  var ki = new Ei();
  class Oi {
    write(e, t) {
      if (e) {
        t.copyText = e.json, t.systemText = e.text;
        var r = navigator.clipboard;
        r && "function" == typeof r.writeText && r.writeText(e.text).catch(e => {
          console.warn("Could not write to system clipboard; using internal clipboard", e);
        });
      }
    }
    read(e) {
      var t = navigator.clipboard;
      return t && "function" == typeof t.readText ? t.readText().then(t => t === e.systemText && e.copyText ? e.copyText : t, t => (console.warn("Could not read from system clipboard; using internal clipboard", t), e.copyText)) : Promise.resolve(e.copyText);
    }
  }
  const Di = new Oi();
  class Pi {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "onCopy", e => {
        if (Xe.A.isElectronEnv()) {
          var t = this.target.getContainerModel();
          if (t.isImageContainerSelected || t.isInlineImageSelected) {
            var r = t.selectedBlockModel;
            r.url && Ci.A.getService().copyImageToClipboardRequest(r.url), e.preventDefault();
          }
        }
        var n = e.clipboardData;
        this.handleTextCopy(n), e.preventDefault();
      }), (0, n.A)(this, "onCut", e => {
        if (this.target.isBusy()) return console.warn("Could not handle cut in busy"), void e.preventDefault();
        var t = this.executeCut(e),
          r = t.json,
          n = t.text;
        r ? (this.handleSetClipboardData(e.clipboardData, r, n), e.preventDefault()) : e.preventDefault();
      }), (0, n.A)(this, "onPaste", e => {
        if (this.target.isBusy()) return console.warn("Could not handle paste in busy"), void e.preventDefault();
        if (console.log("------------------onpaste------------------"), this.target.isReadOnly() || this.target.isSelectOnly()) return e.preventDefault(), null;
        var t = ki.tryHandle(this.target, e.clipboardData);
        if (t) e.preventDefault();else {
          if (!(t = xi.handlePasteAsFile(this.target, e.clipboardData))) {
            var r = e.clipboardData.getData("mathcha/json") || e.clipboardData.getData("text/plain");
            this.pasteFrom(r);
          }
          e.preventDefault();
        }
      }), this.target = e;
    }
    copyToSystemClipboard() {
      Di.write(this.executeCopy(), this.target.getInternalClipboard());
    }
    cutToSystemClipboard() {
      this.target.isBusy() || this.target.isReadOnly() || this.target.isSelectOnly() || Di.write(this.executeCut(), this.target.getInternalClipboard());
    }
    pasteFromSystemClipboard() {
      this.target.isBusy() || this.target.isReadOnly() || this.target.isSelectOnly() || Di.read(this.target.getInternalClipboard()).then(e => this.pasteFrom(e));
    }
    executeCopy() {
      console.log("------------------executeCopy------------------");
      var e = this.target.getContainerModel(),
        t = this.target.getController().copyAction(e);
      if (!t || t.length <= 0) return null;
      var r = ut.A.toCopyText(t, e),
        n;
      return {
        text: this.target.getLatexIoHandler().getConverter("text-only").toLatex(t, {
          mathTypeHtml: this.target.getMathTypeHtmlElement(),
          pageSettings: this.target.getPageSettings()
        }),
        json: r
      };
    }
    handleTextCopy(e) {
      var t = this.executeCopy(),
        r = t.json,
        n = t.text;
      r && this.handleSetClipboardData(e, r, n);
    }
    handleSetClipboardData(e, t, r) {
      if (Xe.A.isPossibleLinux() && Xe.A.isChrome() && Xe.A.getBrowserMajorVersion() >= 90) e.setData("text/plain", t);else {
        e.setData("text/plain", r);
        try {
          e.setData("mathcha/json", t);
        } catch (e) {
          console.warn("Could not write Mathcha clipboard format", e);
        }
      }
    }
    executeCut(e) {
      if (this.target.isBusy()) return console.warn("Could not handle executeCut in busy"), void e.preventDefault();
      if (console.log("------------------executeCut------------------"), this.target.isReadOnly() || this.target.isSelectOnly()) return e && e.preventDefault(), null;
      var t = this.target.getContainerModel(),
        r = this.target.getController().cutAction(t),
        n,
        i;
      return !r || r.cutLines.length <= 0 ? null : (this.target.changeModel(r.model, !1, {
        mainSelected: r.selected,
        extendedMainSelected: void 0
      }, !1), {
        json: ut.A.toCopyText(r.cutLines, t),
        text: this.target.getLatexIoHandler().getConverter("text-only").toLatex(r.cutLines, {
          mathTypeHtml: this.target.getMathTypeHtmlElement(),
          pageSettings: this.target.getPageSettings()
        })
      });
    }
    pasteFrom(e) {
      e && h().unstable_batchedUpdates(() => {
        var t = this.target,
          r = t.getContainerModel(),
          n = t.getController().pasteAction(e, r, {
            rootSymbolSupports: t.props.rootSymbolSupports,
            selectedDg: this.target.getSelectedDiagramInstance()
          });
        n && (n.theoremInfo && (n.model = dt.A.setProp(n.model, "theoremInfo", n.theoremInfo)), "error" !== n.status ? (0, p.rk)(n.model) > (0, p.rk)(t.state.mainModel) ? t.showError("Paste exercises at document level, outside questions, tables and other containers.", !0) : (t.changeModel(n.model, !1, {
          mainSelected: n.selected,
          extendedMainSelected: void 0
        }, !1), "ok" !== n.status && t.showMessage(n.message, n.status)) : t.showError(n.message, !0));
      });
    }
  }
  function Mi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ii(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Mi(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ti extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "cacheMathKeys", void 0), (0, n.A)(this, "cacheTextKeys", void 0);
    }
    shouldComponentUpdate(e) {
      return this.props.show != e.show || this.props.selectOnly != e.selectOnly || Ze.A.isControlledSelected(this.props.mainSelected) != Ze.A.isControlledSelected(e.mainSelected);
    }
    handleArrowMove(e, t) {
      this.props.handleArrowMove(e, t);
    }
    handleInsertMathOrTextSymbolFromKey(e, t) {
      this.props.handleInsertMathOrTextSymbolFromKey(e, t);
    }
    getKeyStyle(e) {
      return {
        width: e || 37
      };
    }
    getMathKeys() {
      return this.cacheMathKeys || (this.cacheMathKeys = f().map(["\\sqrt", "\\frac", "\\power", "\\index", "=", "+", "-", "\\vec", "\\int", "\\sum"], e => {
        var t = Je.A.getByName(e),
          r = e;
        return t.renderSymbol && (r = t.renderSymbol(!1, void 0)), c().createElement("button", {
          key: e,
          className: "btn-ripple math-symbol",
          onTouchStart: t => this.handleInsertMathOrTextSymbolFromKey(e, t),
          onMouseDown: e => {
            e.stopPropagation(), e.preventDefault();
          },
          style: {
            display: "none",
            width: 37,
            fontFamily: "Asana"
          }
        }, r);
      })), this.cacheMathKeys;
    }
    getTextKeys() {
      return this.cacheTextKeys || (this.cacheTextKeys = f().map(["\\inline-math", "\\math-container"], e => {
        var t = Je.A.getByName(e),
          r = e;
        return t.renderSymbol && (r = t.renderSymbol(!1, void 0)), c().createElement("button", {
          key: e,
          className: "btn-ripple text-to-math-symbol",
          onTouchStart: t => this.handleInsertMathOrTextSymbolFromKey(e, t),
          onMouseDown: e => {
            e.stopPropagation(), e.preventDefault();
          },
          style: {
            display: "none",
            width: 37,
            fontFamily: "Asana"
          }
        }, r);
      })), this.cacheTextKeys;
    }
    setEditMode(e) {
      if (this.props.show) {
        var t = h().findDOMNode(this);
        "unknown" != e ? (u.hS(t, {
          display: ""
        }), u.hS(u.YG(t, ">.math-symbol"), {
          display: "text" == e ? "none" : "inline-block"
        }), u.hS(u.YG(t, ">.text-to-math-symbol"), {
          display: "math" == e ? "none" : "inline-block"
        })) : u.hS(t, {
          display: "none"
        });
      }
    }
    render() {
      if (!this.props.show) return c().createElement("empty", null);
      var e = {},
        t;
      Ze.A.isControlledSelected(this.props.mainSelected) && (e.left = 35, t = c().createElement("button", {
        className: "btn-ripple",
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault(), this.props.requestCopy(e);
        },
        style: this.getKeyStyle(48)
      }, "Copy"));
      var r = this.getKeyStyle(),
        n = this.getMathKeys(),
        i = this.getTextKeys(),
        o = v()("mobile-keys-support-region", {
          "select-only": this.props.selectOnly,
          "is-android": Xe.A.isAndroid()
        });
      return c().createElement("arrows-key-support", {
        class: o,
        style: e
      }, c().createElement("button", {
        className: "btn-ripple btn-suggestion-box-mobile",
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault(), this.props.requestSuggestionBox();
        },
        style: Ii(Ii({}, r), {}, {
          marginRight: 17
        })
      }, c().createElement("svg", {
        style: {
          margin: "4px 4px 1px 4px"
        },
        fill: "black",
        viewBox: "0 0 16 16"
      }, c().createElement("path", {
        d: "M0 4v11h16v-14h-16v3zM14 2h1v1h-1v-1zM1 4h14v10h-14v-10z",
        stroke: "none"
      })), c().createElement("i", {
        style: {
          position: "absolute",
          left: 0,
          top: 14,
          right: 0,
          fontSize: 12,
          color: "var(--ui-text, black)"
        },
        className: "fa fa-bars",
        "aria-hidden": "true"
      })), c().createElement("button", {
        className: "btn-ripple",
        onTouchStart: e => this.handleArrowMove("left", e),
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault();
        },
        onTouchEnd: this.props.endArrowMoveHold,
        onTouchCancel: this.props.endArrowMoveHold,
        style: r
      }, c().createElement("i", {
        className: "fa fa-arrow-left",
        "aria-hidden": "true"
      })), c().createElement("button", {
        className: "btn-ripple",
        onTouchStart: e => this.handleArrowMove("right", e),
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault();
        },
        onTouchEnd: this.props.endArrowMoveHold,
        onTouchCancel: this.props.endArrowMoveHold,
        style: r
      }, c().createElement("i", {
        className: "fa fa-arrow-right",
        "aria-hidden": "true"
      })), c().createElement("button", {
        className: "btn-ripple",
        onTouchStart: e => this.handleArrowMove("up", e),
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault();
        },
        onTouchEnd: this.props.endArrowMoveHold,
        onTouchCancel: this.props.endArrowMoveHold,
        style: r
      }, c().createElement("i", {
        className: "fa fa-arrow-up",
        "aria-hidden": "true"
      })), c().createElement("button", {
        className: "btn-ripple",
        onTouchStart: e => this.handleArrowMove("down", e),
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault();
        },
        onTouchEnd: this.props.endArrowMoveHold,
        onTouchCancel: this.props.endArrowMoveHold,
        style: r
      }, c().createElement("i", {
        className: "fa fa-arrow-down",
        "aria-hidden": "true"
      })), t, c().createElement("button", {
        className: "btn-ripple",
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault(), this.props.requestPaste(e);
        },
        style: this.getKeyStyle(53)
      }, "Paste"), n, i);
    }
  }
  var Li = r(36223),
    Ri = r(47168),
    Bi = r.n(Ri);
  class Fi {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "handledTouchStart", void 0), (0, n.A)(this, "selectionMark", void 0), (0, n.A)(this, "arrowsKeySupport", void 0), (0, n.A)(this, "touchHoldHammer", void 0), (0, n.A)(this, "arrowFirstTimeout", void 0), (0, n.A)(this, "arrowHoldInterval", void 0), (0, n.A)(this, "selectionTouchMargin", void 0), (0, n.A)(this, "arrowKeySupportLaterRunObj", E.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "onMathTypeTouchStart", e => {
        this.deactivated || e.nativeEvent.handledTouchStart && (this.handledTouchStart = !0);
      }), (0, n.A)(this, "getSelectionMarkRef", e => {
        this.selectionMark = e;
      }), (0, n.A)(this, "getArrowsKeySupportRef", e => {
        this.arrowsKeySupport = e;
      }), (0, n.A)(this, "updateArrowsKeySupportStatusRunLaterFunc", () => {
        if (this.arrowsKeySupport) {
          var e = "unknown",
            t;
          if (this.target.getSafeSelected()) e = this.target.getContainerModel().isTextModeSelected() ? "text" : "math";
          this.arrowsKeySupport.setEditMode(e);
        }
      }), (0, n.A)(this, "onMathTypeTouchEnd", () => {
        this.deactivated || (this.target.setMouseDown(!1), this.target.state.contextMenuShowInfo && E.A.next(() => {
          this.target.state.contextMenuShowInfo && (this.target.state.contextMenuShowInfo.touchRelease = !0);
        }), this.handledTouchStart = !1);
      }), (0, n.A)(this, "onSelectionMarkTouchEnd", e => {
        this.selectionTouchMargin = null, u.hS(u.YG(e.target, ">exact-mark"), {
          display: "none"
        }), e.preventDefault(), e.stopPropagation();
      }), (0, n.A)(this, "onSelectionMarkTouchStart", e => {
        var t;
        (this.target.forceStopCompositionOrReserve() || Promise.resolve()).then(() => {
          var t = q.T.getPosFromAbsToElement(Li.A.getLeftTopFromEvent(e), e.target, this.target.getDocZoomContainer());
          this.selectionTouchMargin = {
            dx: t.left,
            dy: t.top
          };
        }), e.preventDefault(), e.stopPropagation();
      }), (0, n.A)(this, "onSelectionMarkTouchMove", e => {
        var t = this.target.getDocZoomContainer(),
          r = q.T.getBCRect(this.target.getMathTypeHtmlElement(), t),
          n = q.T.getFromAbsLt(Li.A.getLeftTopFromEvent(e), t),
          i = q.T.getPosToRect(n, r),
          o = {
            left: i.left - this.selectionTouchMargin.dx,
            top: i.top - this.selectionTouchMargin.dy
          };
        u.hS(e.target, o);
        var s = u.YG(e.target, ">exact-mark");
        u.hS(s, {
          display: "block"
        });
        var a = q.T.getBCRectToRect(s[0], r);
        e.preventDefault(), e.stopPropagation();
        var l = q.T.getRectWidthHeight(r),
          c = l.rWidth,
          d = l.rHeight;
        a.left <= 0 || a.top <= 0 || a.left >= c || a.top >= d || h().unstable_batchedUpdates(() => {
          var e = pe.y.fromPos(a).toAbsolute();
          this.target.handleSelectFromPosition(document.elementFromPoint(e.absLeft, e.absTop), a, !0);
        });
      }), (0, n.A)(this, "handleArrowMove", (e, t) => {
        t.preventDefault(), t.stopPropagation(), this.target.forceStopCompositionOrReserve(), this.handleMovePosition(e), this.arrowFirstTimeout = setTimeout(() => {
          this.arrowFirstTimeout = void 0, this.handleMovePosition(e), this.arrowHoldInterval = setInterval(() => {
            this.handleMovePosition(e);
          }, 80);
        }, 500);
      }), (0, n.A)(this, "handleMovePosition", e => {
        var t;
        switch (e) {
          case "left":
            t = this.target.getController().moveLeft(this.target.getContainerModel());
            break;
          case "up":
            t = this.target.getController().moveUp(this.target.getContainerModel());
            break;
          case "right":
            t = this.target.getController().moveRight(this.target.getContainerModel());
            break;
          case "down":
            t = this.target.getController().moveDown(this.target.getContainerModel());
        }
        this.target.handleResult(t);
      }), (0, n.A)(this, "handleInsertMathOrTextSymbolFromKey", (e, t) => {
        var r;
        if (t.preventDefault(), t.stopPropagation(), this.target.forceStopCompositionOrReserve(), f().startsWith(e, "\\")) {
          var n = Je.A.getByName(e);
          r = this.target.getController().handleBySymbolInfo(n, this.target.getContainerModel());
        } else r = this.target.getController().handleTextInput(e, this.target.getContainerModel());
        this.target.handleResult(r);
      }), (0, n.A)(this, "endArrowMoveHold", () => {
        (this.arrowHoldInterval || this.arrowFirstTimeout) && (clearInterval(this.arrowHoldInterval), clearTimeout(this.arrowFirstTimeout), this.arrowHoldInterval = void 0, this.arrowFirstTimeout = void 0);
      }), this.target = e;
    }
    shouldUseTouchSupport() {
      return Xe.A.isMobileOrTablet();
    }
    writeToSystemClipboard(e) {
      Di.write(e, this.target.getInternalClipboard());
    }
    copyToSystemClipboard() {
      this.writeToSystemClipboard(this.target.executeCopy());
    }
    cutToSystemClipboard() {
      this.writeToSystemClipboard(this.target.executeCut());
    }
    pasteFromSystemClipboard() {
      Di.read(this.target.getInternalClipboard()).then(e => this.target.pasteFrom(e));
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    renderSelectionMark() {
      if (!this.deactivated && this.shouldUseTouchSupport() && !this.target.isReadOnly() && this.target.props.mobileSelectionMark) {
        var e = {
          width: "40px",
          height: "40px",
          position: "absolute",
          left: 200,
          top: 200,
          background: "green",
          border: "1px solid lightgray",
          borderRadius: "15px",
          opacity: .5,
          zIndex: 999
        };
        return c().createElement("selection-mark", {
          style: e,
          ref: this.getSelectionMarkRef
        }, c().createElement("exact-mark", {
          style: {
            position: "absolute",
            left: "50%",
            marginLeft: -3,
            top: -27,
            display: "none",
            height: 5,
            width: 5,
            border: "1px solid gray",
            background: "gray",
            opacity: .6,
            borderRadius: 3
          }
        }));
      }
    }
    renderCopyPasteButtonForMobile() {
      if (!this.deactivated && this.shouldUseTouchSupport() && !this.target.isReadOnly() && !this.target.isRestrictedView() && this.target.getSafeExtendedSelected()) {
        var e = null,
          t = null;
        this.target.isSelectOnly() || (e = c().createElement("button", {
          className: "btn-ripple",
          onMouseDown: e => {
            e.preventDefault(), e.stopPropagation(), this.pasteFromSystemClipboard();
          },
          style: this.getKeyStyle(53)
        }, "Paste"), t = c().createElement("button", {
          className: "btn-ripple",
          onMouseDown: e => {
            e.preventDefault(), e.stopPropagation(), this.cutToSystemClipboard();
          },
          style: this.getKeyStyle(53)
        }, "Cut"));
        var r = v()("mobile-keys-support-region", {
          "select-only": this.target.isSelectOnly(),
          "is-android": Xe.A.isAndroid()
        });
        return c().createElement("copy-paste-key-support", {
          class: r
        }, c().createElement("button", {
          className: "btn-ripple",
          onMouseDown: e => {
            e.preventDefault(), e.stopPropagation(), this.copyToSystemClipboard();
          },
          style: this.getKeyStyle(48)
        }, "Copy"), t, e, c().createElement("button", {
          className: "btn-ripple",
          onMouseDown: e => {
            e.preventDefault(), e.stopPropagation();
            var t = this.target.getController().selectAll(this.target.getContainerModel());
            this.target.handleResult(t);
          },
          style: this.getKeyStyle(77)
        }, "Select All"));
      }
    }
    renderArrowKeySupport() {
      if (!this.deactivated && this.shouldUseTouchSupport() && !(this.target.isReadOnly() || this.target.isSelectOnly() || this.target.isRestrictedView())) return c().createElement(Ti, {
        show: !this.target.getSafeExtendedSelected(),
        selectOnly: this.target.isSelectOnly(),
        ref: this.getArrowsKeySupportRef,
        requestPaste: e => {
          e.preventDefault(), e.stopPropagation(), this.target.forceStopCompositionOrReserve(), this.pasteFromSystemClipboard();
        },
        requestCopy: e => {
          e.preventDefault(), e.stopPropagation(), this.target.forceStopCompositionOrReserve(), this.copyToSystemClipboard();
        },
        mainSelected: this.target.getSafeSelected(),
        handleArrowMove: this.handleArrowMove,
        handleInsertMathOrTextSymbolFromKey: this.handleInsertMathOrTextSymbolFromKey,
        endArrowMoveHold: this.endArrowMoveHold,
        requestSuggestionBox: () => this.target.requestAutoComplete()
      });
    }
    registerTouchHold() {
      if (!this.deactivated && this.shouldUseTouchSupport() && !this.target.isReadOnly()) {
        var e = this.target.getElementRoot(),
          t;
        this.touchHoldHammer = new (Bi())(e, {
          touchAction: "auto",
          preset: ["press"]
        }), this.touchHoldHammer.get("press").set({
          time: 400
        }), this.touchHoldHammer.on("press pressup", e => {
          if (!this.handledTouchStart) if ("pressup" != e.type) {
            if (!this.arrowFirstTimeout && !this.arrowHoldInterval) {
              console.log("press", e);
              var t = pe.y.fromAbsLeftTop(e.center.x, e.center.y, this.target.getDocZoomContainer()).toAbsolute();
              this.target.showContextMenu(t, e.target, {
                touchRelease: !1
              });
            }
          } else this.target.state.contextMenuShowInfo && !1 === this.target.state.contextMenuShowInfo.touchRelease && (e.preventDefault(), E.A.waitALitteWhile(() => {
            var t = pe.y.fromAbsLeftTop(e.center.x, e.center.y, this.target.getDocZoomContainer()).toAbsolute();
            this.target.showContextMenu(t, e.target, {
              touchRelease: !0
            });
          }));
        });
      }
    }
    unregisterTouchHold() {
      this.deactivated || this.touchHoldHammer && (this.touchHoldHammer.destroy(), this.touchHoldHammer = void 0);
    }
    unregisterSelectionMarkTouchEvents() {
      this.deactivated || this.shouldUseTouchSupport() && this.selectionMark && (this.selectionMark.removeEventListener("touchstart", this.onSelectionMarkTouchStart), this.selectionMark.removeEventListener("touchmove", this.onSelectionMarkTouchMove), this.selectionMark.removeEventListener("touchend", this.onSelectionMarkTouchEnd), this.selectionMark.removeEventListener("touchcancel", this.onSelectionMarkTouchEnd));
    }
    registerSelectionMarkTouchEvents() {
      if (!this.deactivated && this.shouldUseTouchSupport() && this.selectionMark) {
        var e = Li.A.getFalsePassiveObject();
        this.selectionMark.addEventListener("touchstart", this.onSelectionMarkTouchStart, e), this.selectionMark.addEventListener("touchmove", this.onSelectionMarkTouchMove, e), this.selectionMark.addEventListener("touchend", this.onSelectionMarkTouchEnd, e), this.selectionMark.addEventListener("touchcancel", this.onSelectionMarkTouchEnd, e);
      }
    }
    updateArrowsKeySupportStatus() {
      if (!this.deactivated && this.shouldUseTouchSupport()) {
        if (!this.arrowsKeySupport) return;
        this.arrowKeySupportLaterRunObj.later(this.updateArrowsKeySupportStatusRunLaterFunc);
      }
    }
    calculateSelectionMarkPosition(e, t) {
      this.deactivated || this.shouldUseTouchSupport() && (this.selectionTouchMargin ? u.hS(this.selectionMark, {
        display: "block"
      }) : !e && this.target.getSafeSelected() ? u.hS(this.selectionMark, {
        left: t.left - 20,
        top: t.top + 30,
        display: "block"
      }) : this.selectionMark && this.hideSelectionMark());
    }
    isArrowKeyPressOrHold() {
      return !(!this.arrowFirstTimeout && !this.arrowHoldInterval);
    }
    showSelectionMark() {
      this.deactivated || u.hS(this.selectionMark, {
        display: "block"
      });
    }
    hideSelectionMark() {
      this.deactivated || u.hS(this.selectionMark, {
        display: "none"
      });
    }
    getKeyStyle(e) {
      return {
        width: e || "37px"
      };
    }
  }
  var ji = r(20323),
    _i = r(77137);
  class Ni {
    handleEscapeForDiagram(e) {
      if (e) {
        var t = Ze.A.findLeafSelected(e);
        if (t.controlled && t.controlSelectedInfo && t.controlSelectedInfo.subSelection && "rotation-around" == t.controlSelectedInfo.subSelection.type) {
          var r = f().cloneDeep(e),
            n;
          return Ze.A.findLeafSelected(r).controlSelectedInfo.subSelection = void 0, Qe.setSelected(r);
        }
      }
    }
  }
  const zi = new Ni();
  class Hi {
    constructor() {
      (0, n.A)(this, "storedFirstHotkeyMatch", void 0);
    }
    handle(e) {
      var t = e.matcher,
        r = e.e,
        n = e.containerModel,
        i = t.matchHotkey(r, this.storedFirstHotkeyMatch);
      if (i) {
        if ("first-matched" == i.type) return console.log("handled!!"), this.storedFirstHotkeyMatch = i, {
          type: "first-matched"
        };
        this.storedFirstHotkeyMatch = null;
        var o = n.isTextModeSelected() ? i.data.textModeLine : i.data.mathModeLine;
        if (o) {
          var s = Sr.w.processCursorReplacement([o]),
            a;
          return {
            type: "matched",
            visitResult: Sr.w.insertLine(n, s)
          };
        }
      } else this.storedFirstHotkeyMatch && (this.storedFirstHotkeyMatch = void 0);
    }
  }
  class Wi {
    changeSettings(e) {
      this.suggestionBoxHotkeyInfo = ji.A.safeParseHotkey(e && e.suggestionBoxTriggerShortcut);
    }
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "reserveTextInput", void 0), (0, n.A)(this, "temporarySupressInputFromLastCompositionEnd", void 0), (0, n.A)(this, "temporarySupressInputUntilCompositionEnd", void 0), (0, n.A)(this, "compositionIndicator", void 0), (0, n.A)(this, "suggestionBoxHotkeyInfo", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "altDownBy", void 0), (0, n.A)(this, "shortcutShl", new Hi()), (0, n.A)(this, "onEditorKeyUp", e => {
        18 == e.keyCode && this.hideAllHotkeys(!1);
      }), (0, n.A)(this, "hideAllHotkeysByBlur", () => {
        this.hideAllHotkeys(!0);
      }), (0, n.A)(this, "onEditorKeyDown", e => {
        if (this.changeSelectDisabledExcludeByDelay()) console.warn("document in busy to process onEditorKeyDown");else {
          var t, r;
          if (e.altKey) if ("handled" == this.handleAltKeyDown(e)) return;
          if (13 == e.keyCode) if (this.target.getContainerModel().isDiagramSelected && this.target.getSelectedDiagramInstance() && this.target.getSelectedDiagramInstance().enterEditModeForTextBoxIfRequired()) return e.preventDefault(), void e.stopPropagation();
          if (!this.handleIpadHardwareClipboardShortcut(e) && !this.handleShortcut(e)) {
            if (Xe.A.isMac()) {
              if (75 == e.keyCode && e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) return void this.target.showLinkInput();
            } else if (75 == e.keyCode && e.ctrlKey && !e.altKey && !e.shiftKey) return void this.target.showLinkInput();
            if (9 == e.keyCode && this.target.isConfirmDeleteWithTabular()) return e.preventDefault(), e.stopPropagation(), void this.target.requestConfirmDeleteTabularToggleRowColumn();
            if (13 == e.keyCode && this.target.props.handleEnter) this.target.props.handleEnter(e);else if (27 != e.keyCode) {
              if (!Xe.A.isIos() || (13 != e.keyCode && 32 != e.keyCode && 9 != e.keyCode || this.cleanReserveAndInput(e), 8 != e.keyCode || !this.hasAnyReserveInput() && !this.target.getController().isInInputComposition())) {
                if (this.isArrowKey(e) && this.target.forceStopCompositionOrReserve(), nt.isSaveKey(e)) return e.stopPropagation(), e.preventDefault(), void (this.target.props.onSaveRequest && this.target.props.onSaveRequest());
                if (Xe.A.isMac()) {
                  if (e.metaKey && 82 == e.keyCode && !e.shiftKey) return void console.log("refresh");
                  if (e.metaKey && 70 == e.keyCode) return void console.log("find");
                } else {
                  if (116 == e.keyCode) return void console.log("refresh");
                  if (e.ctrlKey && 70 == e.keyCode) return void console.log("find");
                }
                if (this.target.needShowCursor(), this.matchAutoCompleteKey(e) && this.target.requestAutoComplete()) return e.preventDefault(), void e.stopPropagation();
                if (Xe.A.isMac()) {
                  if (e.metaKey && 13 == e.keyCode && this.target.requestAutoComplete()) return e.preventDefault(), void e.stopPropagation();
                } else if (e.altKey && 13 == e.keyCode && this.target.requestAutoComplete()) return e.preventDefault(), void e.stopPropagation();
                if (76 == e.keyCode) {
                  var n = this.target.getContainerModel();
                  if (n.isMathModeSelected() || n.isDiagramSelected || n.isInsideLatexTable()) {
                    if (Xe.A.isMac() && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) return e.preventDefault(), void this.target.onCopyMathAsImageToClipboard();
                    if (!Xe.A.isMac() && e.ctrlKey && e.shiftKey && !e.altKey) return e.preventDefault(), void this.target.onCopyMathAsImageToClipboard();
                  }
                }
                if (71 == e.keyCode) {
                  var i = this.target.getContainerModel();
                  if (i.isMathModeSelected() || i.isDiagramSelected || i.isInsideLatexTable()) {
                    if (Xe.A.isMac() && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) return e.preventDefault(), void this.target.onCopyMathAsSVGToClipboard();
                    if (!Xe.A.isMac() && e.ctrlKey && e.shiftKey && !e.altKey) return e.preventDefault(), void this.target.onCopyMathAsSVGToClipboard();
                  }
                }
                if (74 == e.keyCode) {
                  var o = this.target.getContainerModel();
                  if (o.isMathModeSelected() || o.isDiagramSelected || o.isInsideLatexTable()) {
                    if (Xe.A.isMac() && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) return e.preventDefault(), void this.target.onCopyLatexToClipboard();
                    if (!Xe.A.isMac() && e.ctrlKey && e.shiftKey && !e.altKey) return e.preventDefault(), void this.target.onCopyLatexToClipboard();
                  }
                }
                var s = this.target.getController().handleKey(e, this.target.getContainerModel());
                this.target.handleResult(s, e);
              }
            } else {
              var a = this.target.getContainerModel();
              if (a.isInsideDiagram() && !a.isCursorControlled) {
                e.preventDefault(), e.stopPropagation();
                var l = Yt.A.buildDiagramControlledSelected(a.cursorSelected);
                if (!l) return;
                this.target.setSelected(l);
              } else if (this.target.isConfirmDeleted()) this.target.clearConfirmDelete();else if (a.isDiagramSelected) {
                var c = zi.handleEscapeForDiagram(a.cursorSelected);
                if (c) return void this.target.handleResult(c);
              }
            }
          }
        }
      }), (0, n.A)(this, "onEditorInput", e => {
        if (this.changeSelectDisabledExcludeByDelay()) return console.warn("not allowed to make change"), this.target.isDocEnabled() && this.target.showPreventInputMessage(), e.preventDefault(), e.stopPropagation(), void (e.currentTarget.value = "");
        if (this.temporarySupressInputFromLastCompositionEnd) {
          var t = this.target.getHiddenInput();
          Xe.A.isIos() ? E.A.waitABit(() => {
            t.value = "";
          }) : t.value = "";
        } else if (!this.temporarySupressInputUntilCompositionEnd) {
          var r = this.target,
            n = e.currentTarget.value;
          if ("\\" == n && !this.isDefaultSuggesstionHotkeyDisabled() && this.target.requestAutoComplete()) return e.preventDefault(), e.stopPropagation(), void (e.currentTarget.value = "");
          if ("\b" != n) {
            if (!Xe.A.isIos() || r.getController().isInInputComposition()) {
              var i = r.getController().handleTextInput(n, r.getContainerModel());
              r.handleResult(i, e), this.reserveTextInput = "", !f().isArray(i) && i && i.keyInfo && i.keyInfo.clearHiddenIputText && (e.currentTarget.value = "");
            } else {
              var o = this.inferInputActionFromInput(e);
              if ("insert" == o.action) {
                var s = r.getController().handleTextInput(o.text, r.getContainerModel());
                r.handleResult(s, e);
              } else if ("backspace" == o.action) {
                var a = r.getController().requestBackSpaceCurrent(r.getContainerModel());
                r.handleResult(a, e);
              } else "clear" == o.action && this.cleanReserveAndInput();
            }
          } else _i.A.warn("Composition: backspace inputted");
        }
      }), (0, n.A)(this, "onEditorCompositionEnd", e => {
        if (!this.changeSelectDisabledExcludeByDelay()) {
          if (console.log("compose end: ", e.data), this.temporarySupressInputUntilCompositionEnd && (this.temporarySupressInputUntilCompositionEnd = !1), this.hideCompositionIndicator(), !this.target.getController().isInInputComposition()) return e.preventDefault(), e.stopPropagation(), e.currentTarget.value = "", void this.temporaryPreventInput();
          if (Xe.A.isFirefox()) {
            var t = this.target.getController().composeEnd(e.data, this.target.getContainerModel());
            this.target.handleResult(t);
          } else if (Xe.A.isIos()) {
            var r = this.target.getController().composeEnd(e.data, this.target.getContainerModel());
            this.target.handleResult(r);
          } else this.target.getController().composeEnd(e.data, this.target.getContainerModel());
          e.currentTarget.value = "", this.temporaryPreventInput();
        }
      }), (0, n.A)(this, "onEditorCompositionStart", () => {
        this.changeSelectDisabledExcludeByDelay() || (console.log("Composition start"), this.target.getController().composeStart());
      }), (0, n.A)(this, "handleBlur", () => {
        this.hideCompositionIndicator(), this.hideAllHotkeysByBlur();
      }), (0, n.A)(this, "getCompositionIndicatorRef", e => {
        this.compositionIndicator = e;
      }), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    isDefaultSuggesstionHotkeyDisabled() {
      var e, t, r;
      return null === (e = this.target.props) || void 0 === e || null === (t = e.settings) || void 0 === t || null === (r = t.complexObject) || void 0 === r ? void 0 : r.disableDefaultSuggesstionHotkey;
    }
    matchAutoCompleteKey(e) {
      var t = !(220 != e.keyCode || e.shiftKey || e.metaKey || e.altKey || e.ctrlKey);
      if (this.suggestionBoxHotkeyInfo) try {
        return ji.A.match(e, this.suggestionBoxHotkeyInfo) || this.checkWithIntlBackslashOrDeadKey(t, e);
      } catch (e) {}
      return this.checkWithIntlBackslashOrDeadKey(t, e);
    }
    checkWithIntlBackslashOrDeadKey(e, t) {
      return !(!e || this.isDefaultSuggesstionHotkeyDisabled()) && (!t.nativeEvent || "IntlBackslash" != t.nativeEvent.code || "\\" == t.nativeEvent.char) && "Dead" != t.key && e;
    }
    handleShortcut(e) {
      var t = this.target.getContainerModel(),
        r = this.shortcutShl.handle({
          e,
          containerModel: t,
          matcher: this.target.getShortcutMatcher()
        });
      if (!r) return !1;
      if (e.stopPropagation(), e.preventDefault(), "first-matched" == r.type) return !0;
      var n,
        i = this.target.getController().toKeyHandledResult(r.visitResult, {
          clearHiddenIputText: !0
        });
      return this.target.handleResult(i), !0;
    }
    handleIpadHardwareClipboardShortcut(e) {
      if (!Xe.A.isIpadOs() || !e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return !1;
      var t = (e.key || "").toLowerCase();
      return 67 == e.keyCode || "c" == t ? (e.preventDefault(), e.stopPropagation(), this.target.copyToSystemClipboard(), !0) : 88 == e.keyCode || "x" == t ? (e.preventDefault(), e.stopPropagation(), this.target.cutToSystemClipboard(), !0) : (86 == e.keyCode || "v" == t) && (e.preventDefault(), e.stopPropagation(), this.target.pasteFromSystemClipboard(), !0);
    }
    hideAllHotkeys(e) {
      var t;
      if ("diagram" == this.altDownBy) this.altDownBy = void 0, null === (t = this.target.getSelectedDiagramInstance()) || void 0 === t || t.hideHotkey(e);else if ("text-mode" == this.altDownBy) {
        var r;
        this.altDownBy = void 0, null === (r = this.target.getSelectionSettingsHandler()) || void 0 === r || r.hideHotkeys(e);
      }
    }
    handleAltKeyDown(e) {
      var t, r;
      if ("diagram" == this.altDownBy) t = null === (r = this.target.getSelectedDiagramInstance()) || void 0 === r ? void 0 : r.selectHotKey(e.keyCode);else if ("text-mode" == this.altDownBy) {
        var n;
        t = null === (n = this.target.getSelectionSettingsHandler()) || void 0 === n ? void 0 : n.selectHotKey(e.keyCode);
      }
      if ("handled" == t) return e.preventDefault(), e.stopPropagation(), "handled";
      var i = this.target.getContainerModel(),
        o,
        s;
      if (i.isDiagramSelected) return this.altDownBy = "diagram", null === (o = this.target.getSelectedDiagramInstance()) || void 0 === o || o.showHotkey(), e.preventDefault(), e.stopPropagation(), "handled";
      (i.isTextModeSelected() || i.isMathModeSelected()) && (this.altDownBy = "text-mode", null === (s = this.target.getSelectionSettingsHandler()) || void 0 === s || s.showHotkeys());
    }
    cleanReserveAndInput(e) {
      Xe.A.isIos() && (this.reserveTextInput = "", e ? e.currentTarget.value = "" : this.target.getHiddenInput().value = "");
    }
    hasAnyReserveInput() {
      return !!this.reserveTextInput;
    }
    temporaryPreventInputUntilCompositionEnd() {
      Xe.A.isIos() && (this.temporarySupressInputUntilCompositionEnd = !0, setTimeout(() => {
        this.temporarySupressInputUntilCompositionEnd = !1;
      }, 1e3));
    }
    temporaryPreventInput(e) {
      if (Xe.A.isSafari() || Xe.A.isIos()) {
        if (this.temporarySupressInputFromLastCompositionEnd = !0, e) return;
        setTimeout(() => {
          this.temporarySupressInputFromLastCompositionEnd = !1;
        }, 20);
      }
    }
    isArrowKey(e) {
      return 37 == e.keyCode || 38 == e.keyCode || 39 == e.keyCode || 40 == e.keyCode;
    }
    inferInputActionFromInput(e) {
      var t = e.currentTarget.value;
      if (!Xe.A.isIos()) return {
        action: "nothing"
      };
      if (this.target.getController().isInInputComposition()) return {
        action: "nothing"
      };
      if (!this.reserveTextInput) return this.reserveTextInput = t, {
        action: "insert",
        text: t
      };
      if (this.reserveTextInput.length < t.length) {
        if (0 != t.indexOf(this.reserveTextInput)) return {
          action: "clear"
        };
        var r = {
          action: "insert",
          text: t.substring(this.reserveTextInput.length)
        };
        return this.reserveTextInput = t, r;
      }
      return this.reserveTextInput.length > t.length ? 0 != this.reserveTextInput.indexOf(t) ? {
        action: "clear"
      } : (this.reserveTextInput = t, {
        action: "backspace"
      }) : {
        action: "nothing"
      };
    }
    calculateCompositionLineDrawing(e, t) {
      this.target.getController().isInInputComposition() && ("none" == this.compositionIndicator.style.display && (this.compositionIndicator.style.display = "", this.compositionIndicator.style.top = e.top + e.cursorHeight + "px", this.compositionIndicator.style.left = e.left - e.cursorHeight / 2 + "px"), this.compositionIndicator.style.width = e.left - Number.parseFloat(this.compositionIndicator.style.left) + "px");
    }
    hideCompositionIndicator() {
      this.changeSelectDisabledExcludeByDelay() || this.compositionIndicator && (this.compositionIndicator.style.display = "none");
    }
    renderCompositionIndicator() {
      if (!this.changeSelectDisabledExcludeByDelay()) return c().createElement("composition-indicator", {
        style: {
          display: "none"
        },
        ref: this.getCompositionIndicatorRef
      });
    }
    changeSelectDisabledExcludeByDelay() {
      return this.deactivated || !this.target.isDocEnabled() || this.target.isBusy();
    }
  }
  class Vi {
    constructor(e, t, r) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "mobileSupportHandler", void 0), (0, n.A)(this, "keyboardInputHandler", void 0), (0, n.A)(this, "hiddenFocusDelayRunObj", E.A.createLaterRunObject("first-request", 50)), (0, n.A)(this, "focusRequestActiveElement", void 0), (0, n.A)(this, "focusElement", void 0), (0, n.A)(this, "hiddenInput", void 0), (0, n.A)(this, "hiddenInputBackup", void 0), (0, n.A)(this, "hiddenInputWrapperBackup", void 0), (0, n.A)(this, "hiddenInputWrapper", void 0), (0, n.A)(this, "hiddenInputWrapperForFocusInput", void 0), (0, n.A)(this, "__testPreventFocus", void 0), (0, n.A)(this, "restoreRequestedFocus", () => {
        document.activeElement !== this.focusRequestActiveElement && document.activeElement !== document.body || this.innerHiddenFocus();
      }), (0, n.A)(this, "innerHiddenFocus", () => {
        var e = this.target.getSafeSelected();
        if (e) if (Ze.A.isControlledSelected(e)) {
          if (document.activeElement == this.focusElement) return;
          this.focusElement.focus(this.getFocusParams());
        } else {
          if (this.isHiddenInputFocus()) return;
          this.hiddenInput && this.hiddenInput.focus(this.getFocusParams());
        }
      }), (0, n.A)(this, "getHiddenInputBackupWrapperRef", e => {
        this.hiddenInputWrapperBackup = e;
      }), (0, n.A)(this, "getHiddenInputBackupRef", e => {
        this.hiddenInputBackup = e;
      }), (0, n.A)(this, "getHiddenInputWrapperRef", e => {
        this.hiddenInputWrapper = e;
      }), (0, n.A)(this, "getHiddenInputRef", e => {
        this.hiddenInput = e;
      }), (0, n.A)(this, "getHiddenInputWrapperForFocusRef", e => {
        this.hiddenInputWrapperForFocusInput = e;
      }), (0, n.A)(this, "getHiddenFocusRef", e => {
        this.focusElement = e;
      }), (0, n.A)(this, "onMathTypeFocus", () => {
        this.target.cancelClearSelect(), this.target.setCursorMathTypeFocus(!0);
      }), (0, n.A)(this, "onMathTypeBlur", () => {
        this.target.setCursorMathTypeFocus(!1);
      }), (0, n.A)(this, "onHiddenInputBlur", () => {
        this.keyboardInputHandler.handleBlur(), this.target.setCursorInputFocus(!1), Xe.A.isMobileOrTablet && this.mobileSupportHandler.hideSelectionMark();
      }), (0, n.A)(this, "onHiddenInputFocus", e => (this.target.cancelClearSelect(), this.target.setCursorInputFocus(!0), Xe.A.isMobileOrTablet && this.mobileSupportHandler.showSelectionMark(), e.preventDefault(), e.stopPropagation(), !1)), this.target = e, this.mobileSupportHandler = t, this.keyboardInputHandler = r;
    }
    handleOnTargetMounted() {
      this.target.props.shouldFocusOnCreated && E.A.waitALitteWhile(() => {
        this.hidenInputFocus();
      });
    }
    handleOnTargetOnBatchMounted() {
      this.target.props.preventFocusOnCreated || E.A.waitABit(() => {
        this.hidenInputFocus();
      });
    }
    requestFocusWithoutScroll() {
      E.A.waitABit(() => {
        !this.target.isHidden() && this.hiddenInput && this.hiddenInput.focus({
          preventScroll: !0
        });
      });
    }
    hidenInputFocusDelay(e) {
      E.A.waitABit(() => {
        this.hidenInputFocus(e);
      });
    }
    hidenInputFocus(e) {
      this.__testPreventFocus || this.target.isReadOnly() || this.target.getSafeSelected() && (e ? this.innerHiddenFocus() : (this.focusRequestActiveElement = document.activeElement, this.hiddenFocusDelayRunObj.later(this.restoreRequestedFocus)));
    }
    isHiddenInputFocus() {
      return document.activeElement == this.hiddenInput;
    }
    isMtFocus() {
      return document.activeElement == this.hiddenInput || document.activeElement == this.focusElement;
    }
    getFocusParams() {
      if ("diagram" == this.target.props.oneMode) return {
        preventScroll: !0
      };
    }
    forceRefreshFocus() {
      return new Promise(e => {
        this.hiddenInputWrapperBackup.style.left = this.hiddenInputWrapper.style.left, this.hiddenInputWrapperBackup.style.top = this.hiddenInputWrapper.style.top, this.target.temporaryPreventInput(!0), this.hiddenInputBackup.focus(this.getFocusParams()), E.A.waitABit(() => {
          this.target.temporaryPreventInput(!1), this.hiddenInput.value = "", this.hiddenInput.focus(this.getFocusParams()), e();
        });
      });
    }
    putHiddenInputInVisibleView() {
      var e = window.innerHeight,
        t = S.A.getElementRect(this.hiddenInputWrapper);
      if (t.top < 50 || t.bottom > e - 50) {
        var r = S.A.getElementRect(this.target.getMathTypeHtmlElement()),
          n = this.target.getDocZoomContainer(),
          i = r.top / n.zoomRatio;
        this.hiddenInputWrapper.style.top = "".concat(200 - i, "px"), this.hiddenInputWrapperBackup.style.top = "".concat(200 - i, "px"), this.hiddenInputWrapperForFocusInput.style.top = "".concat(200 - i, "px");
      }
    }
    calculateHiddenInputPosition(e, t) {
      var r = e.top,
        n = e.left;
      if (t) {
        var i = S.A.getElementRect(this.target.getMathTypeHtmlElement()),
          o = this.target.getDocZoomContainer(),
          s = i.left / o.zoomRatio,
          a = i.top / o.zoomRatio;
        r = 100 - Math.min(a, 0), n = 100 - Math.min(s || 0, 0);
      }
      if (Xe.A.shouldMoveHiddenInputOnFocus()) {
        if (Xe.A.isMobileOrTablet()) return this.hiddenInputWrapper.style.top = r + "px", this.hiddenInputWrapper.style.left = n + "px", this.hiddenInputWrapperForFocusInput.style.top = r + "px", void (this.hiddenInputWrapperForFocusInput.style.left = n + "px");
        var l = "".concat(r + 25, "px"),
          c = "top:".concat(l, "; left:").concat(n, "px;");
        this.hiddenInputWrapperBackup.style.cssText = c, this.hiddenInputWrapperForFocusInput.style.cssText = c, this.hiddenInputWrapper.style.cssText = c;
      }
    }
    getHiddenInput() {
      return this.hiddenInput;
    }
    renderHiddenInputWrapper() {
      return c().createElement("hidden-input-wrapper", {
        ref: this.getHiddenInputBackupWrapperRef
      }, c().createElement("input", {
        autoCorrect: "off",
        autoCapitalize: "off",
        ref: this.getHiddenInputBackupRef
      }));
    }
  }
  class Ui {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "editorContainer", void 0), (0, n.A)(this, "mouseDown", void 0), (0, n.A)(this, "onEditorMouseMove", e => {
        var t;
        if (this.detectLeftButton(e) && this.mouseDown && e.target != this.editorContainer && e.target != this.target.getEditorHtmlElement() && null != this.target.getCursorPosition() && !this.target.getContainerModel().isCursorControlled) return e.preventDefault(), S.A.cacheGetElementRectWithin(t => {
          this.handleSelectFromPosition(Li.A.getTargetOnMoveEvent(e), q.T.getFromAbsLt(Li.A.getLeftTopFromEvent(e), this.target.getDocZoomContainer()), !0), this.target.notifyDomElementRectCache(t);
        });
      }), (0, n.A)(this, "getMathEditContainerRef", e => {
        this.editorContainer = e;
      }), (0, n.A)(this, "handleSelectFromPosition", (e, t, r) => {
        if (null == e) return null;
        if ("LAZY-LINE" == e.tagName) return null;
        if ("TR" == e.tagName) return null;
        if ("DIV" === e.tagName && u.nB(e, "align-cell")) {
          var n = this.getEditAreaInTd(e);
          if (n) return void n.reactInstance.selectCursorFromPosition(n, t, r);
        }
        if ("TD" === e.tagName) {
          var i = this.getEditAreaInTd(e);
          if (i) return void i.reactInstance.selectCursorFromPosition(i, t, r);
        }
        if ("COMPOSITEBLOCK" == e.tagName && u.nB(e, "theorem")) {
          var o = u.YG(e, ">editarea")[0];
          o.reactInstance.selectCursorFromPosition(o, t, r);
        } else {
          if ("SQRT-TOP" == e.tagName) {
            var s = u.YG(e, ">editarea")[0];
            if (s) return void s.reactInstance.selectCursorFromPosition(s, t, r);
          }
          if ("SQRT-EDIT" == e.tagName) {
            var a = u.YG(e, ">editarea-line")[0];
            if (a) return void a.reactInstance.selectCursorFromPosition(a, t, r);
          }
          if ("TD" === e.tagName && (e.className || "").indexOf("non-select") >= 0) {
            var l = this.findSelectableTd(e, t, this.target.getDocZoomContainer());
            if (l) {
              var c = this.getEditAreaInTd(l);
              null == c || c.reactInstance.selectCursorFromPosition(c, t, r);
            }
          } else if ("DIV" === e.tagName && u.nB(e, "align-row")) {
            var d = this.findSelectableAlignCell(e, t, this.target.getDocZoomContainer());
            if (d) {
              var h = this.getEditAreaInTd(d);
              null == h || h.reactInstance.selectCursorFromPosition(h, t, r);
            }
          } else if (("LABEL" != e.tagName || "REF-TAG" != e.parentElement.tagName) && "BORDER-RESIZING-CONTAINER" != e.tagName && "BORDER-LINE" != e.tagName && "FIRST-LINE-PREFIX" != e.tagName) {
            if ("AREA-CONTAINER" == e.tagName) {
              var p = e.parentNode;
              return p.reactInstance.selectCursorFromPosition(p, t, r);
            }
            if ("EDITAREA" == e.tagName || "EDITAREA-BLOCK" == e.tagName || "EDITAREA-LINE" == e.tagName) {
              var g = e;
              return g.reactInstance.selectCursorFromPosition(g, t, r);
            }
            var m = S.A.closestEditor(e);
            m && m.reactInstance.selectCursorFromPosition(e, t, r);
          }
        }
      }), (0, n.A)(this, "handleCursorMouseDown", (e, t) => {
        if (!this.target.isBusy() && "LAZY-LINE" != t.target.tagName) {
          this.target.forceStopCompositionOrReserve();
          var r = Li.A.getCustomEventInfo(t),
            n = !r || !r.handledCursorSelected || r.requestCursorSelect;
          if (this.target.state.contextMenuShowInfo && !1 === this.target.state.contextMenuShowInfo.touchRelease) return console.log("prevent"), t.preventDefault(), void Li.A.cleanCustomInfo(t);
          if (n) {
            this.mouseDown = !0;
            var i = this.target.getController().isShiftKey(t);
            i || this.target.clearSelection();
            var o = Li.A.getLeftTopFromEvent(t);
            this.handleSelectFromPosition(e, q.T.getFromAbsPos(o.left, o.top, this.target.getDocZoomContainer()), i), t.preventDefault();
          }
          this.target.state.contextMenuShowInfo && this.target.setState({
            contextMenuShowInfo: null
          }), r && r.focusAcquired || (this.target.hidenInputFocus(), t.preventDefault()), Li.A.cleanCustomInfo(t);
        }
      }), (0, n.A)(this, "onEditorMouseDown", e => {
        3 != e.nativeEvent.detail ? w.A.isCurrentDocumentInCorruption() || Li.A.isLeftButtonOrTouch(e) && (e.stopPropagation(), this.handleCursorMouseDown(e.target, e)) : this.handleTripleClick(e);
      }), (0, n.A)(this, "onMathTypeMouseDown", e => {
        if (Li.A.isRightButton(e)) return e.preventDefault(), void e.stopPropagation();
        Li.A.isLeftButtonOrTouch(e) && (e.target == this.target.getMathTypeHtmlElement() && this.handleCursorMouseDown(this.target.getEditorHtmlElement(), e), e.stopPropagation());
      }), (0, n.A)(this, "onMathTypeMouseUp", e => {
        this.mouseDown && (this.handleStyleCopy(), this.mouseDown = !1);
      }), (0, n.A)(this, "onEditorMouseUp", () => {}), (0, n.A)(this, "onEditorDoubleClick", () => {
        var e = this.target.getController().handleDoubleClick(this.target.getContainerModel());
        this.target.handleResult(e);
      }), this.target = e;
    }
    detectLeftButton(e) {
      return !!Xe.A.isMobileOrTablet() || (Xe.A.isSafari() ? 1 === e.nativeEvent.which : 1 == e.buttons);
    }
    findSelectableTd(e, t, r) {
      var n = u.aY(e),
        i = u.jS(n, "td:not(.non-select)"),
        o = q.T.getWrappedRects(i, r),
        s = B.A.findNearestRectsInXAxis(o, t);
      return s && s.element;
    }
    findSelectableAlignCell(e, t, r) {
      var n = u.jS(e, ".align-cell"),
        i = q.T.getWrappedRects(n, r),
        o = B.A.findNearestRectsInXAxis(i, t);
      return o && o.element;
    }
    getEditAreaInTd(e) {
      if (e.firstElementChild) {
        var t = e.firstElementChild;
        return "EDITAREA" == t.tagName || "EDITAREA-LINE" == t.tagName || "EDITAREA-BLOCK" == t.tagName ? t : void 0;
      }
    }
    handleTripleClick(e) {
      var t = this.target.getController().handleTripleClick(this.target.getContainerModel(), e);
      this.target.handleResult(t);
    }
    handleStyleCopy() {
      if (this.target.state.blockStyleClipboard) {
        var e = this.target.state.blockStyleClipboard,
          t = this.target.getController(),
          r = this.target.getContainerModel();
        if (r.isTextModeSelected() == e.isTextMode) {
          var n = t.pasteCopiedStyle(r, e.style);
          this.target.handleResult(n);
        } else {
          var i = {
              color: e.style.color
            },
            o = t.pasteCopiedStyle(r, i);
          this.target.handleResult(o);
        }
        this.target.clearCopiedBlockStyle();
      }
    }
    setMouseDown(e) {
      this.mouseDown = e;
    }
  }
  var qi = r(46600),
    Gi = r(30156),
    Ki = r(80395),
    Zi = r(24829);
  class Yi extends c().PureComponent {
    render() {
      return c().createElement("list-items-options", {
        class: "setting-group-options",
        style: {
          marginLeft: 3
        },
        title: Gi.A.getToolTipByKey("hyper-link"),
        onClick: this.props.onClick
      }, Zi.A.link);
    }
  }
  var Qi = "toolbar_svg-icon-wrapper tw:inline-flex tw:items-center tw:justify-center tw:w-[19px] tw:h-[19px] tw:cursor-pointer tw:border tw:border-solid tw:border-transparent",
    Ji = "toolbar__item-with-option tw:flex tw:justify-stretch tw:cursor-pointer tw:border tw:border-solid tw:border-transparent",
    Xi = "toolbar__item-with-option__caret tw:inline-block tw:text-[0.8em] tw:pl-[3px] tw:pt-[0.45em] tw:[border-left:1px_solid_transparent]",
    $i = "tw:flex tw:shrink-0",
    eo = "tw:block tw:w-[4px] tw:ml-[4px] tw:my-[6px]",
    to = "tw:block tw:mt-[2px] tw:mb-[9px] tw:ml-[2px]",
    ro = r(26642);
  function no(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function io(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? no(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class oo extends ro.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleCopyStyleSelect", e => {
        e.stopPropagation(), e.preventDefault(), this.props.onCopyStyle();
      });
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.selected != this.props.selected;
    }
    renderExpandComponent() {
      return c().createElement("div", {
        ref: e => this.registerExpandContainer(e),
        style: io({
          position: "absolute",
          padding: 5,
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          fontSize: 13,
          color: "var(--ui-text-muted, gray)",
          boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)"
        }, this.getSuggestExpandStyle())
      }, c().createElement("div", {
        className: "hover-hightlight",
        style: {
          padding: 5
        },
        onMouseDown: () => this.props.onCopyStyle()
      }, Zi.A.stylePaste({
        width: 13,
        height: 13,
        fill: "var(--ui-text-muted, gray)",
        marginRight: 10,
        verticalAlign: "-3px"
      }, void 0), c().createElement("span", null, "Copy Style/Format")), c().createElement("div", {
        className: "hover-hightlight",
        style: {
          padding: 5
        },
        onMouseDown: () => this.props.onRemoveFormat()
      }, Zi.A.removeFormat({
        width: 13,
        height: 13,
        fill: "var(--ui-text-muted, gray)",
        marginRight: 10,
        verticalAlign: "-3px"
      }), c().createElement("span", null, "Remove Style/Format")));
    }
    renderComponent() {
      var e = this.props.selected;
      return c().createElement("div", {
        className: v()(Ji, "test-copy-style"),
        style: {
          marginTop: 3
        },
        title: "Copy Style"
      }, Zi.A.stylePaste({
        width: 13,
        height: 13,
        padding: 3,
        fill: "var(--ui-text-muted, gray)",
        background: e ? "var(--ui-surface, white)" : void 0,
        border: e ? "1px solid var(--ui-border, lightgray)" : "1px solid transparent",
        margin: -1
      }, this.handleCopyStyleSelect), c().createElement("i", {
        style: {
          padding: 2,
          fontSize: 11,
          lineHeight: "15px"
        },
        className: "fa fa-caret-down " + Xi,
        "aria-hidden": "true"
      }));
    }
  }
  var so = r(35847),
    ao = r(52175),
    lo = r(97422),
    co = r(80137),
    ho = r(38187),
    po = r(23009),
    uo = r(77982),
    go = r(77753),
    mo = r(6984),
    fo = r(39528);
  class yo extends fo.d {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectors", [{
        key: "T",
        keyCode: 84,
        selector: 'item[title="Text Color"]'
      }]);
    }
  }
  function vo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class xo extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showExportDialog: null
      }), (0, n.A)(this, "lastSelectionComponent", void 0), (0, n.A)(this, "hotkeysRef", void 0), (0, n.A)(this, "onFontSizeChange", e => {
        this.props.handlers.onFontSizeChange(e);
      }), (0, n.A)(this, "onFontChange", e => {
        this.props.handlers.onFontChange(e);
      }), (0, n.A)(this, "handleFontBoldSelected", () => {
        this.isStyleSelected("isBold") ? this.props.handlers.onFontBoldChange(this.getUnsetValue()) : this.props.handlers.onFontBoldChange(!0);
      }), (0, n.A)(this, "handleFontItalicSelect", () => {
        this.isStyleSelected("isItalic") ? this.props.handlers.onFontItalicChange(this.getUnsetValue()) : this.props.handlers.onFontItalicChange(!0);
      }), (0, n.A)(this, "handleFontUnderlineSelect", () => {
        if (this.textDecorationSelected("underline")) return this.props.handlers.onTextDecorationChange(this.getUnsetValue());
        this.props.handlers.onTextDecorationChange("underline");
      }), (0, n.A)(this, "handleFontLineThroughSelect", () => {
        if (this.textDecorationSelected("line-through")) return this.props.handlers.onTextDecorationChange(this.getUnsetValue());
        this.props.handlers.onTextDecorationChange("line-through");
      }), (0, n.A)(this, "handleFontColorChanged", e => {
        this.props.handlers.onFontColorChanged(e, !0);
      }), (0, n.A)(this, "handleBgColorChanged", e => {
        this.props.handlers.onFontBgColorChanged(e, !0);
      }), (0, n.A)(this, "handleImageExport", e => {
        Xe.A.isTestEnv() ? co.A.handleMathExportForTest(this.getMathEditAreaElement(), this.getbaseMathModeFontFamily(), this.getSubMathFont(), this.getMtFuncs().getDocZoomContainer(), this.props.fixedContextHandler.getBatchUpdater()) : this.setState({
          showExportDialog: e
        });
      }), (0, n.A)(this, "handleCopyImageToClipboard", () => {
        this.setState({
          showExportDialog: "Clipboard"
        });
      }), (0, n.A)(this, "onExportLatex", e => {
        var t = this.props.selectionSettingInfo.selected;
        if (this.props.selectionSettingInfo.isInsideLatexTable) {
          var r,
            n = kt.closestCompositeBlock(this.props.editorRef.editor, t).reactInstance.getModel();
          this.handleExportLatexMathML([{
            id: "fake-line-id",
            blocks: [n]
          }], {
            ignoreSpace: !1,
            inMathExpression: !1
          }, void 0, e);
        } else {
          var i = kt.closestMathArea(this.props.editorRef.editor, t);
          if ("dg-editor-container" == i.tagName.toLowerCase()) {
            var o = i.firstElementChild.reactInstance.getModel();
            this.handleExportLatexMathML(o.lines, {
              ignoreSpace: !1,
              inMathExpression: !0
            }, {
              type: "editor",
              editor: o
            }, e);
          } else {
            var s = i.reactInstance.getModel(),
              a = sr.A.createLineFromBlock(s);
            this.handleExportLatexMathML([a], {
              ignoreSpace: !1,
              inMathExpression: !1
            }, {
              type: "math-block",
              block: s
            }, e);
          }
        }
      }), (0, n.A)(this, "handleRequestMathEditAreaElement", () => this.getMathEditAreaElement()), (0, n.A)(this, "handleDisplayStyleSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.selectMathModeType("\\displaystyle");
      }), (0, n.A)(this, "handleTextStyleSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.selectMathModeType("\\textstyle");
      }), (0, n.A)(this, "handleRequestLocalFont", () => {
        this.setState({
          showLocalFontsDialog: !0
        });
      }), (0, n.A)(this, "handleHotkeysRef", e => {
        this.hotkeysRef = e;
      });
    }
    selectFontName(e) {
      "default" == e && (e = void 0), this.props.handlers.onFontNameChange(e);
    }
    selectMathModeType(e) {
      this.isMathModeTypeSelected(e) && (e = null), this.props.handlers.onMathModeTypeChange(e);
    }
    isMathModeTypeSelected(e) {
      return this.getStyleInfo().mathModeType == e;
    }
    getStyleInfo() {
      var e = this.props.selectionSettingInfo.style || {};
      return this.props.temporarySelectedBlockStyle ? bo(bo({}, e), this.props.temporarySelectedBlockStyle) : e;
    }
    getFontSize() {
      return this.getStyleInfo().fontSize;
    }
    getFontName() {
      return this.getStyleInfo().fontName;
    }
    getFontColor() {
      return this.getStyleInfo().color || "#000";
    }
    getBackgroundColor() {
      return this.getStyleInfo().bgColor || "#FFF";
    }
    isStyleSelected(e) {
      return !!this.getStyleInfo()[e];
    }
    textDecorationSelected(e) {
      return this.getStyleInfo().textDecoration == e;
    }
    getUnsetValue() {
      return k.A.getUnsetValue(this.props.styleCascadeContext);
    }
    renderListItemSettings(e) {
      return this.lastSelectionComponent = c().createElement("selection-content", {
        class: "tw:flex"
      }, c().createElement(ho.C, {
        requestPickerSettings: e.requestColorPickerSettings,
        containerStyle: {
          display: "flex"
        },
        fontName: this.getFontName(),
        fontSize: this.getFontSize(),
        isBold: this.isStyleSelected("isBold"),
        isItalic: this.isStyleSelected("isItalic"),
        isUnderline: this.textDecorationSelected("underline"),
        isLineThrough: this.textDecorationSelected("line-through"),
        fontColor: this.getFontColor(),
        fontBgColor: this.getBackgroundColor(),
        isFontNameHidden: !0,
        isUnderlineHidden: !0,
        isFontBgColorHidden: !0,
        fontBaseSize: this.props.fontBaseSize,
        onFontNameChange: this.onFontChange,
        onFontSizeChange: this.onFontSizeChange,
        onFontBoldSelected: this.handleFontBoldSelected,
        onFontItalicSelected: this.handleFontItalicSelect,
        onFontUnderlineSelectd: this.handleFontUnderlineSelect,
        onFontLineThroughSelectd: this.handleFontLineThroughSelect,
        onFontColorChange: this.handleFontColorChanged,
        onFontBgColorChange: this.handleBgColorChanged,
        onRequestLocalFont: this.handleRequestLocalFont,
        requestFontSizeRatio: this.props.requestFontSizeRatio
      })), this.lastSelectionComponent;
    }
    renderRootSelectionSetting(e) {
      return this.props.selectionSettingInfo.listTypeSelected ? this.renderListItemSettings(e) : (this.lastSelectionComponent = c().createElement("selection-content", {
        class: "tw:flex"
      }, c().createElement(ho.C, {
        showChangingPresetColorBtn: !0,
        requestPickerSettings: e.requestColorPickerSettings,
        containerStyle: {
          display: "flex"
        },
        fontName: this.getFontName(),
        fontSize: this.getFontSize(),
        isBold: this.isStyleSelected("isBold"),
        isItalic: this.isStyleSelected("isItalic"),
        isUnderline: this.textDecorationSelected("underline"),
        isLineThrough: this.textDecorationSelected("line-through"),
        fontColor: this.getFontColor(),
        fontBgColor: this.getBackgroundColor(),
        textModeSelectLocalFonts: !0,
        fontBaseSize: this.props.fontBaseSize,
        onFontNameChange: this.onFontChange,
        onFontSizeChange: this.onFontSizeChange,
        onFontBoldSelected: this.handleFontBoldSelected,
        onFontItalicSelected: this.handleFontItalicSelect,
        onFontUnderlineSelectd: this.handleFontUnderlineSelect,
        onFontLineThroughSelectd: this.handleFontLineThroughSelect,
        onFontColorChange: this.handleFontColorChanged,
        onFontBgColorChange: this.handleBgColorChanged,
        onRequestLocalFont: () => {
          this.setState({
            showLocalFontsDialog: !0
          });
        },
        requestFontSizeRatio: this.props.requestFontSizeRatio
      }), c().createElement(Yi, {
        onClick: this.props.handlers.requestLinkInput
      }), c().createElement("separate-hbar", {
        style: {
          marginLeft: 5,
          marginRight: 5
        }
      }), c().createElement(oo, {
        useFixedPosition: !0,
        selected: this.props.styleCopiedSelected,
        onCopyStyle: this.props.handlers.onCopyStyle,
        onRemoveFormat: this.props.handlers.onRemoveFormat
      }), this.renderExportLatexButtonForLatexTable()), this.lastSelectionComponent);
    }
    renderExportLatexButtonForLatexTable() {
      if (this.props.selectionSettingInfo.isInsideLatexTable) return [c().createElement("separate-hbar", {
        key: "separator",
        style: Co
      }), c().createElement(mo.b, {
        key: "export-latex-t",
        label: "Latex",
        buttonWithMoreOptionsTitle: "Export Latex",
        shortcutText: "Copy Latex to Clipboard",
        buttonWithMoreOptionsStyleClass: "btn-normal",
        onExportLatex: () => this.onExportLatex(!1),
        onCopyLatexToClipboard: () => this.onExportLatex(!0),
        style: {
          marginTop: 2,
          marginLeft: 4,
          width: 52,
          zIndex: 10
        }
      }), c().createElement("button", {
        key: "add-caption",
        className: "btn-normal",
        style: {
          marginLeft: 5,
          marginTop: 2
        },
        onClick: () => {
          this.props.handlers.onLatexTableAddingCaption();
        }
      }, "Caption")];
    }
    getSubMathFont() {
      return this.props.fixedContextHandler.getMtFuncs().getSubMathFont();
    }
    getbaseMathModeFontFamily() {
      return this.props.fixedContextHandler.getMtFuncs().getbaseMathModeFontFamily();
    }
    getMtFuncs() {
      return this.props.fixedContextHandler.getMtFuncs();
    }
    handleExportLatexMathML(e, t, r, n) {
      var i,
        o,
        s = Mn.H.toLatex(e, {
          ignoreSpace: t.ignoreSpace,
          inMathExpression: t.inMathExpression,
          mathTypeHtml: this.props.selectionSettingInfo.mathType,
          pageSettings: this.props.fixedContextHandler.getMtFuncs().getPageSettings(),
          usingStandardMathWrapper: null === (i = this.props.fixedContextHandler.getMtFuncs().getMtSettings()) || void 0 === i || null === (o = i.complexObject) || void 0 === o ? void 0 : o.usingStandardMathWrapper
        }),
        a;
      if (n) return this.copyLatexToClipboard(s);
      r && "math-block" == r.type ? a = this.generateMathml(r.block) : r && "editor" == r.type ? a = this.generateMathmlFromEditor(r.editor) : r && "text" == r.type && (a = r.mathml), this.props.handlers.requestExportDialog(s, a, r => {
        this.handleExportLatexMathML(e, bo(bo({}, t), {}, {
          ignoreSpace: r
        }), {
          type: "text",
          mathml: a
        }, !1);
      });
    }
    copyLatexToClipboard(e) {
      var t = new Blob([e], {
          type: "text/plain"
        }),
        r = new window.ClipboardItem({
          "text/plain": t
        });
      navigator.clipboard.write([r]), this.props.fixedContextHandler.getMtFuncs().showMessage("Latex copied!", "info", 2e3);
    }
    generateMathmlFromEditor(e) {
      var t,
        r,
        n = {
          type: "math",
          elements: [new so.R().generateEditor(e)]
        },
        i = ao.A.generate(n),
        o;
      return (0, lo.renderToStaticMarkup)(i.mathml);
    }
    generateMathml(e) {
      var t,
        r = new so.R().generateMath(e),
        n = ao.A.generate(r),
        i;
      return (0, lo.renderToStaticMarkup)(n.mathml);
    }
    getMathEditAreaElement() {
      var e = this.props.selectionSettingInfo.selected;
      return kt.closestMathArea(this.props.editorRef.editor, e);
    }
    renderMathExportButtons() {
      if (!this.props.exportOptionsHide) {
        var e = 501;
        return [c().createElement("span", {
          key: "export-span",
          style: {
            marginTop: 6,
            color: "var(--ui-text-muted, gray)",
            fontSize: 12,
            marginLeft: 3
          }
        }, "Export: "), c().createElement(uo.U, {
          key: "svg-image",
          fixedContextHandler: this.props.fixedContextHandler,
          requestMathAreaElement: this.handleRequestMathEditAreaElement,
          onCopyImageToClipboard: this.handleCopyImageToClipboard,
          onExportImage: () => this.handleImageExport("SVG"),
          buttonWithMoreOptionsStyleClass: "btn-normal save-as-svg",
          isDiagram: !1,
          style: {
            marginTop: 2,
            marginLeft: 4,
            fontSize: 12,
            zIndex: e
          }
        }), c().createElement(mo.b, {
          key: "export-latex",
          label: "Latex",
          buttonWithMoreOptionsTitle: "Export Latex",
          shortcutText: "Copy Latex to Clipboard",
          buttonWithMoreOptionsStyleClass: "btn-normal",
          onExportLatex: () => this.onExportLatex(!1),
          onCopyLatexToClipboard: () => this.onExportLatex(!0),
          style: {
            marginTop: 2,
            marginLeft: 4,
            width: 95,
            height: 22,
            fontSize: 12,
            zIndex: e
          }
        })];
      }
    }
    renderMathSelectionSettings(e) {
      return c().createElement("selection-content", {
        class: "tw:flex"
      }, c().createElement("styled-select", null, c().createElement(Ki.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        onChange: e => this.selectFontName(e),
        value: this.getStyleInfo().mathType || "default"
      })), c().createElement("separate-hbar", {
        style: Co
      }), c().createElement("font-select", {
        class: v()("displaystyle", {
          selected: this.isMathModeTypeSelected("\\displaystyle")
        }),
        onMouseDown: this.handleDisplayStyleSelect,
        title: Gi.A.getToolTipByKey("displayStyle")
      }, c().createElement("font-select-container", null, c().createElement("small-symbol", null, "∑"), c().createElement("arrow-inside", null, "→"), c().createElement("big-symbol", null, "∑"))), c().createElement("separate-hbar", {
        style: Co
      }), c().createElement("font-select", {
        class: v()("textstyle", {
          selected: this.isMathModeTypeSelected("\\textstyle")
        }),
        onMouseDown: this.handleTextStyleSelect,
        title: Gi.A.getToolTipByKey("textStyle")
      }, c().createElement("font-select-container", null, c().createElement("big-symbol", null, "∑"), c().createElement("arrow-inside", null, "→"), c().createElement("small-symbol", null, "∑"))), c().createElement("separate-hbar", {
        style: Co
      }), c().createElement(qi.A, {
        showChangingPresetColorBtn: !0,
        requestPickerSettings: e.requestColorPickerSettings,
        style: {
          marginTop: -2,
          zIndex: 0
        },
        value: this.getFontColor(),
        onItemSelect: this.handleFontColorChanged
      }), c().createElement(go.A, {
        showChangingPresetColorBtn: !0,
        requestPickerSettings: e.requestColorPickerSettings,
        stopPropagation: !0,
        style: {
          zIndex: 0,
          marginLeft: 2,
          marginTop: -2,
          marginRight: -2
        },
        value: this.getBackgroundColor(),
        onItemSelect: this.handleBgColorChanged
      }), c().createElement("separate-hbar", {
        style: {
          marginLeft: 5,
          marginRight: 5
        }
      }), c().createElement(oo, {
        selected: this.props.styleCopiedSelected,
        onCopyStyle: this.props.handlers.onCopyStyle,
        onRemoveFormat: this.props.handlers.onRemoveFormat
      }), c().createElement("separate-hbar", {
        style: Co
      }), this.renderMathExportButtons());
    }
    renderDisableLayer(e) {
      if (e) return c().createElement("disabled-layer", null);
    }
    renderLocalFontsDialog() {
      if (this.state.showLocalFontsDialog && this.props.requestLocalFonts) return c().createElement(po.O, {
        requestLocalFonts: this.props.requestLocalFonts,
        onClose: e => {
          e && this.onFontChange({
            name: e
          }), this.setState({
            showLocalFontsDialog: !1
          });
        }
      });
    }
    showHotkeys() {
      var e;
      null === (e = this.hotkeysRef) || void 0 === e || e.show();
    }
    hideHotkeys(e) {
      var t;
      null === (t = this.hotkeysRef) || void 0 === t || t.hide(e);
    }
    selectHotKey(e) {
      var t;
      return null === (t = this.hotkeysRef) || void 0 === t ? void 0 : t.triggerSelectByKey(e);
    }
    render() {
      var e = this.props.selectionSettingInfo.isInsideTextSymbol || this.props.selectionSettingInfo.noSelected || this.props.isDisabled,
        t = this.props.fixedContextHandler.getMtFuncs();
      return this.props.selectionSettingInfo.isTextMode ? c().createElement("selection-settings", {
        class: "math mt-common-dialog tw:flex tw:h-[23px] tw:flex-row tw:whitespace-nowrap tw:-mt-[1px]"
      }, this.renderRootSelectionSetting(t), this.renderDisableLayer(e), this.renderLocalFontsDialog(), c().createElement(yo, {
        ref: this.handleHotkeysRef
      })) : c().createElement("selection-settings", {
        class: "math mt-common-dialog tw:flex tw:h-[23px] tw:flex-row tw:whitespace-nowrap tw:-mt-[1px]"
      }, this.renderMathSelectionSettings(t), this.renderDisableLayer(e), this.renderLocalFontsDialog(), c().createElement(yo, {
        ref: this.handleHotkeysRef
      }));
    }
  }
  var Co = {
    marginLeft: 5,
    marginTop: 2,
    marginBottom: 1
  };
  class So {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "renderSelectionSettingDelayRunObj", E.A.createLaterRunObject("latest", "a-little-while", !0)), (0, n.A)(this, "handlers", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "isDisabled", !1), (0, n.A)(this, "selectionSettingsRef", void 0), (0, n.A)(this, "handleLatexTableAddingCaption", () => {
        var e,
          t = this.target.getContainerModel(),
          r = null === (e = t.cursorPos) || void 0 === e ? void 0 : e.attachGeoPosElement;
        if (t.isInsideLatexTable() && r) {
          var n = u.f$(r, ".latex-table-symbol")[0];
          n && n.reactInstance.addCaption();
        }
      }), (0, n.A)(this, "handleRequestExportDialog", (e, t, r) => {
        this.target.requestExportDialog({
          latex: e,
          mathml: t,
          isDiagram: !1,
          handler: {
            onReloadLatex: r
          },
          tizkNodeSettings: void 0
        });
      }), (0, n.A)(this, "setSelectionSettingState", () => {
        var e = null,
          t = this.target,
          r = t.getContainerModel(),
          n = this.target.getController();
        if (!r.isDiagramSelected) {
          var i = this.isDisabled && r.isTextModeSelected() && !r.isInsideTextSymbol();
          if (!t.getSafeSelected() || !r.isSelected() || i) return e = {
            noSelected: !0,
            isTextMode: !0
          }, void this.requestSelectionSetting(e, r);
          var o = this.getIntersectedStyle(n, r);
          e = {
            noSelected: this.isDisabled,
            mathType: t.getMathTypeHtmlElement(),
            style: o,
            mainEditor: t.getEditorHtmlElement(),
            selected: t.getSafeSelected(),
            isTextMode: r.isTextModeSelected(),
            isInsideTextSymbol: r.isInsideTextSymbol(),
            isInsideLatexTable: r.isInsideLatexTable(),
            listTypeSelected: r.getListItemSelectedType()
          }, this.requestSelectionSetting(e, r);
        }
      }), (0, n.A)(this, "handleRequestFontSizeRatio", () => this.target.getContainerModel().requestFontSizeRatio()), (0, n.A)(this, "handleSelectionSettingsRef", e => {
        this.selectionSettingsRef = e;
      }), (0, n.A)(this, "handleCopyStyle", () => {
        var e = this.target.getContainerModel(),
          t = this.target.getController().getSelectedStyleIgnoreSelection(e);
        this.target.setState({
          blockStyleClipboard: {
            style: t,
            isTextMode: e.isTextModeSelected()
          }
        });
      }), (0, n.A)(this, "handleRemoveFormat", () => {
        var e = this.target.getContainerModel(),
          t = this.target.getController().clearStyle(e);
        this.target.handleResult(t);
      }), (0, n.A)(this, "onFontChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "fontName", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onFontNameChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "mathType", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onMathModeTypeChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "mathModeType", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onFontSizeChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "fontSize", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onFontBoldChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "isBold", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onFontItalicChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "isItalic", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onTextDecorationChange", e => {
        var t = this.target,
          r = t.getController().setStyle(t.getContainerModel(), "textDecoration", e);
        t.handleResult(r);
      }), (0, n.A)(this, "onFontColorChanged", (e, t) => {
        var r = this.target;
        t && r.needFocusAcquire();
        var n = r.getController().setStyle(r.getContainerModel(), "color", e);
        r.handleResult(n);
      }), (0, n.A)(this, "onFontBgColorChanged", (e, t) => {
        var r = this.target;
        t && r.needFocusAcquire();
        var n = r.getController().setStyle(r.getContainerModel(), "bgColor", e);
        r.handleResult(n);
      }), (0, n.A)(this, "handleRequestLinkInput", () => {
        this.target.showLinkInput();
      }), this.target = e, this.handlers = {
        onFontNameChange: this.onFontNameChange,
        onMathModeTypeChange: this.onMathModeTypeChange,
        onFontSizeChange: this.onFontSizeChange,
        onFontBoldChange: this.onFontBoldChange,
        onFontItalicChange: this.onFontItalicChange,
        onTextDecorationChange: this.onTextDecorationChange,
        onFontColorChanged: this.onFontColorChanged,
        onFontBgColorChanged: this.onFontBgColorChanged,
        onFontChange: this.onFontChange,
        onCopyStyle: this.handleCopyStyle,
        onRemoveFormat: this.handleRemoveFormat,
        requestLinkInput: this.handleRequestLinkInput,
        requestExportDialog: this.handleRequestExportDialog,
        onLatexTableAddingCaption: this.handleLatexTableAddingCaption
      };
    }
    setDisabled(e) {
      this.isDisabled = e;
    }
    deactivateHandler(e) {
      this.deactivated = e;
    }
    triggerRenderSelectionSetting() {
      this.deactivated || this.target.isReadOnly() || this.renderSelectionSettingDelayRunObj.later(() => {
        this.target.unMounted || this.setSelectionSettingState();
      }, 100);
    }
    clearCopiedBlockStyle() {
      this.deactivated || this.target.setState({
        blockStyleClipboard: null
      });
    }
    getIntersectedStyle(e, t) {
      try {
        return t.isListBulletSelected() ? e.getIntersectStyleForBullets(t) : k.A.getComputedStyle(e.getIntersectStyle(t));
      } catch (e) {
        return console.warn(e), {};
      }
    }
    requestSelectionSetting(e, t) {
      if (this.target.isToolBarReady()) {
        var r = t.isCursorControlled || t.insideCodeSection();
        e.listTypeSelected && (r = !1), !this.target.isSelectOnly() && this.target.getSafeSelected() || (r = !0), this.target.requestRenderToolBarComponent({
          type: "add",
          key: "SelectionSettings",
          component: c().createElement(xo, {
            requestFontSizeRatio: this.handleRequestFontSizeRatio,
            fontBaseSize: this.target.getBaseFontSize(),
            styleCascadeContext: t.getStyleCascadeContext(),
            fixedContextHandler: this.target.getFixedContextHandler(),
            baseMathModeFontFamily: this.target.getBaseMathModeFontFamily(),
            exportOptionsHide: this.target.props.toolbarExportOptionsHide,
            editorRef: this.target.getEditorComponent(),
            temporarySelectedBlockStyle: this.target.state.temporarySelectedBlockStyle,
            isDisabled: r,
            selectionSettingInfo: e,
            styleCopiedSelected: !!this.target.state.blockStyleClipboard,
            handlers: this.handlers,
            requestLocalFonts: this.target.props.requestLocalFonts,
            ref: this.handleSelectionSettingsRef
          })
        });
      }
    }
    showHotkeys() {
      var e;
      null === (e = this.selectionSettingsRef) || void 0 === e || e.showHotkeys();
    }
    hideHotkeys(e) {
      var t;
      null === (t = this.selectionSettingsRef) || void 0 === t || t.hideHotkeys(e);
    }
    selectHotKey(e) {
      var t;
      return null === (t = this.selectionSettingsRef) || void 0 === t ? void 0 : t.selectHotKey(e);
    }
    setMathFontName(e) {
      this.deactivated || this.onFontNameChange(e);
    }
  }
  var Ao = r(52402);
  class wo extends ro.A {
    renderComponent() {
      return c().createElement("div", {
        style: {
          padding: "0 2px 0"
        },
        className: Qi
      }, Zi.A.tableSettings({
        width: 16,
        height: 16,
        stroke: "var(--ui-text-muted, gray)",
        fill: "var(--ui-text-muted, gray)",
        overflow: "visible"
      }));
    }
    withInstance(e) {
      var t = this.props.onRequestTableInstance();
      if (t) return e(t);
    }
    renderExpandComponent() {
      return c().createElement(Ao.Y, {
        dzContainer: {
          zoomRatio: 1
        },
        onRequestCellCount: () => this.withInstance(e => e.requestCellCount() || 0),
        onVAlignChange: e => {
          this.withInstance(t => t.changeVAlign(e)), this.closeExpand();
        },
        onBorderSelect: e => {
          this.withInstance(t => t.changeBorders(e));
        },
        onOpenCellSettings: () => {
          this.withInstance(e => e.openCellSettings()), this.closeExpand();
        },
        onOpenTableSettings: () => {
          this.withInstance(e => e.openTableSettings()), this.closeExpand();
        },
        onRequestAddCaption: () => {
          this.withInstance(e => e.addCaption()), this.closeExpand();
        },
        style: {
          position: "absolute",
          left: 0,
          top: 25
        }
      });
    }
  }
  class Eo extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRequestTableInstance", () => S.A.findTableReactInstance(this.props.onRequestEditorContainer().cursorPos));
    }
    getAlignClassName(e, t) {
      return e == t ? "selected" : "";
    }
    renderSetting() {
      return c().createElement("detail", {
        className: "table-settings-detail"
      }, c().createElement(wo, {
        onRequestTableInstance: this.handleRequestTableInstance
      }));
    }
    render() {
      return c().createElement("line-setting", null, this.renderSetting());
    }
  }
  class ko extends c().Component {
    iconClass(e, t) {
      return v()(Qi, t, {
        selected: this.props.align === e,
        disabled: !this.props.canAlign || "justify" === e && !this.props.justifySupported
      });
    }
    render() {
      var e = this.props,
        t = e.canAlign,
        r = e.iconStyle;
      return c().createElement("align-options", {
        class: this.props.className,
        style: this.props.style
      }, c().createElement("div", {
        title: Gi.A.getToolTipByKey("align-left"),
        style: r,
        className: this.iconClass("left", "role-align-left-item"),
        onMouseDown: t ? this.props.onLeftMouseDown : void 0
      }, Zi.A.alignLeft), c().createElement("div", {
        title: Gi.A.getToolTipByKey("align-middle"),
        style: r,
        className: this.iconClass("center", "role-align-center-item"),
        onMouseDown: t ? this.props.onCenterMouseDown : void 0
      }, Zi.A.alignCenter), c().createElement("div", {
        title: Gi.A.getToolTipByKey("align-right"),
        style: r,
        className: this.iconClass("right", "role-align-right-item"),
        onMouseDown: t ? this.props.onRightMouseDown : void 0
      }, Zi.A.alignRight), c().createElement("div", {
        title: Gi.A.getToolTipByKey("align-justify"),
        style: r,
        className: this.iconClass("justify", "role-align-justify-item toolbar-container"),
        onMouseDown: t ? this.props.onJustifyMouseDown : void 0
      }, Zi.A.alignJustify, this.props.justifyHint));
    }
  }
  function Oo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Do(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Oo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Po extends c().Component {
    render() {
      return c().createElement($r.$, {
        className: v()("ui-preset-option tw:hover:border-[var(--ui-border-hover,#858585)] tw:hover:bg-[var(--ui-surface-hover,#eee)] tw:focus-visible:bg-[var(--ui-surface-hover,#eee)]", this.props.className),
        "aria-label": this.props.ariaLabel,
        style: Do({
          display: "block",
          height: "auto",
          padding: 0,
          boxSizing: "content-box",
          flexShrink: 1,
          fontFamily: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          whiteSpace: "normal",
          textAlign: "left"
        }, this.props.style),
        onMouseDown: e => {
          e.preventDefault(), this.props.onSelect();
        },
        onClick: e => {
          e.nativeEvent.detail || this.props.onSelect();
        }
      }, this.props.children);
    }
  }
  function Mo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Io(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Mo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class To extends c().Component {
    render() {
      var e = this.props,
        t = e.data,
        r = e.noMarginOnLevels,
        n = e.itemStyle,
        i,
        o = {
          width: 70,
          margin: 3,
          padding: 8,
          fontFamily: e.fontFamily || '"Helvetica Neue", Helvetica, arial, freesans, clean, sans-serif',
          fontWeight: 400,
          fontSize: "0.9em"
        },
        s = Io({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "2px 0"
        }, n),
        a = {
          flex: 1,
          height: 3,
          background: "var(--ui-surface-active, lightgray)",
          marginLeft: 5
        },
        l = {
          whiteSpace: "pre"
        };
      return c().createElement(Po, {
        className: "test-preset-item",
        ariaLabel: this.props.ariaLabel,
        style: o,
        onSelect: this.props.onSelect
      }, c().createElement("div", {
        style: Io(Io({}, s), {}, {
          marginLeft: 0
        })
      }, c().createElement("span", {
        style: l
      }, t[0]), c().createElement("div", {
        style: a
      })), c().createElement("div", {
        style: Io(Io({}, s), {}, {
          marginLeft: r ? 0 : 15
        })
      }, c().createElement("span", {
        style: l
      }, t[1]), c().createElement("div", {
        style: a
      })), c().createElement("div", {
        style: Io(Io({}, s), {}, {
          marginLeft: r ? 0 : 15
        })
      }, c().createElement("span", {
        style: l
      }, t[2]), c().createElement("div", {
        style: a
      })), c().createElement("div", {
        style: Io(Io({}, s), {}, {
          marginLeft: r ? 0 : 30
        })
      }, c().createElement("span", {
        style: l
      }, t[3]), c().createElement("div", {
        style: a
      })), c().createElement("div", {
        style: Io(Io({}, s), {}, {
          marginLeft: 0
        })
      }, c().createElement("span", {
        style: l
      }, t[4]), c().createElement("div", {
        style: a
      })));
    }
  }
  function Lo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ro(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bo extends c().Component {
    render() {
      var e = Ro({
        width: 27,
        height: 25,
        margin: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.9em"
      }, this.props.style);
      return c().createElement(Po, {
        className: "test-li",
        style: e,
        onSelect: this.props.onSelect
      }, c().createElement("span", null, this.props.text));
    }
  }
  var Fo = r(91335);
  function jo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class No extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "orderListItemContainerStyle", {
        position: "absolute",
        left: 0,
        top: 25,
        border: "1px solid var(--ui-border, lightgray)",
        padding: "10px 7px",
        background: "var(--ui-surface, white)",
        display: "flex",
        flexDirection: "column"
      }), (0, n.A)(this, "orderListItemRow", {
        display: "flex",
        flexDirection: "row"
      });
    }
    renderItemContent(e, t, r) {
      return c().createElement(To, {
        fontFamily: r,
        data: e,
        onSelect: () => this.props.onSelectBullets(t)
      });
    }
    render() {
      var e = this.props,
        t = e.onHtmlRef,
        r = e.style,
        n = e.defaultTextFont,
        i = Yr.A.textFontFamilyFromKey(n);
      return c().createElement("div", {
        ref: t,
        style: _o(_o({}, this.orderListItemContainerStyle), r)
      }, c().createElement("div", {
        style: {
          fontSize: "0.9em",
          textAlign: "center",
          paddingBottom: 5
        }
      }, "Change Templates for related lines"), c().createElement("div", {
        style: this.orderListItemRow
      }, this.renderItemContent(["1.", "a.", "b.", "i.", "2."], ["\\1.", "\\a.", "\\i.", "\\A."], i), this.renderItemContent(["1)", "a)", "b)", "i)", "2)"], ["\\1)", "\\a)", "\\i)", "\\A)"], i), this.renderItemContent(["1.", "1.1.", "1.2.", "1.2.1.", "2."], ["\\.1.", "\\.1.", "\\.1.", "\\.1."], i), this.renderItemContent(["(1)", "(a)", "(b)", "(i)", "(2)"], ["\\(1)", "\\(a)", "\\(i)", "\\(A)"], i)), c().createElement("div", {
        style: this.orderListItemRow
      }, this.renderItemContent(["A.", "a.", "b.", "i.", "B."], ["\\A.", "\\a.", "\\i.", "\\1."], i), this.renderItemContent(["I.", "A.", "B.", "1.", "II."], ["\\I.", "\\A.", "\\1.", "\\a."], i), this.renderItemContent(["01.", "a.", "b.", "i.", "02."], ["\\01.", "\\a.", "\\i.", "\\A."], i)), c().createElement("div", {
        style: {
          fontSize: "0.9em",
          textAlign: "center",
          paddingTop: 5,
          paddingBottom: 5
        }
      }, "Change List Item for selected lines"), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          fontFamily: i
        }
      }, c().createElement(Bo, {
        text: "1.",
        onSelect: () => this.props.onSelectSingleBullet("\\1.")
      }), c().createElement(Bo, {
        text: "1)",
        onSelect: () => this.props.onSelectSingleBullet("\\1)")
      }), c().createElement(Bo, {
        text: "01.",
        onSelect: () => this.props.onSelectSingleBullet("\\01.")
      }), c().createElement(Bo, {
        text: c().createElement("span", null, "1.", c().createElement("span", {
          style: {
            color: "var(--ui-text-disabled, lightgray)"
          }
        }, "1.")),
        onSelect: () => this.props.onSelectSingleBullet("\\.1.")
      }), c().createElement(Bo, {
        text: "a.",
        onSelect: () => this.props.onSelectSingleBullet("\\a.")
      }), c().createElement(Bo, {
        text: "a)",
        onSelect: () => this.props.onSelectSingleBullet("\\a)")
      }), c().createElement(Bo, {
        text: "A.",
        onSelect: () => this.props.onSelectSingleBullet("\\A.")
      }), c().createElement(Bo, {
        text: "A)",
        onSelect: () => this.props.onSelectSingleBullet("\\A)")
      }), c().createElement(Bo, {
        text: "i.",
        onSelect: () => this.props.onSelectSingleBullet("\\i.")
      }), c().createElement(Bo, {
        text: "i)",
        onSelect: () => this.props.onSelectSingleBullet("\\i)")
      })), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          fontFamily: i
        }
      }, c().createElement(Bo, {
        text: "I.",
        onSelect: () => this.props.onSelectSingleBullet("\\I.")
      }), c().createElement(Bo, {
        text: "I)",
        onSelect: () => this.props.onSelectSingleBullet("\\I)")
      }), c().createElement(Bo, {
        text: "(1)",
        onSelect: () => this.props.onSelectSingleBullet("\\(1)")
      }), c().createElement(Bo, {
        text: "(a)",
        onSelect: () => this.props.onSelectSingleBullet("\\(a)")
      }), c().createElement(Bo, {
        text: "(A)",
        onSelect: () => this.props.onSelectSingleBullet("\\(A)")
      }), c().createElement(Bo, {
        text: "(i)",
        onSelect: () => this.props.onSelectSingleBullet("\\(i)")
      }), c().createElement(Bo, {
        text: "(I)",
        onSelect: () => this.props.onSelectSingleBullet("\\(I)")
      }), this.renderSkip()), this.renderNumberingReset(), this.renderSetDefaultSettings());
    }
    renderSkip() {
      if (!this.props.selectDefaultView) return c().createElement(Bo, {
        text: "Skip",
        style: {
          width: 62
        },
        onSelect: () => this.props.onSelectSingleBullet("Skip")
      });
    }
    renderSetDefaultSettings() {
      if (!this.props.selectDefaultView) return c().createElement("div", {
        onMouseDown: () => {
          this.props.onDefaultSettingsSelect();
        },
        style: {
          marginTop: 5
        }
      }, c().createElement("span", {
        style: {
          fontSize: "0.9em",
          paddingRight: 10,
          paddingLeft: 3,
          width: 130,
          display: "inline-block"
        }
      }, "Default settings:"), c().createElement("button", {
        className: "btn-normal",
        style: {
          display: "inline-block",
          width: 60
        }
      }, "Change"));
    }
    renderNumberingReset() {
      if (!this.props.selectDefaultView) {
        var e = this.props.listItemResetIndex,
          t = [{
            key: "none",
            value: "None"
          }].concat(f().times(40).map(e => ({
            key: e.toString(),
            value: (e + 1).toString()
          }))),
          r = (null != e ? e : "none").toString();
        return c().createElement("div", {
          onMouseDown: e => {
            e.stopPropagation(), e.preventDefault();
          },
          style: {
            marginTop: 5,
            paddingTop: 5,
            borderTop: "1px solid var(--ui-border, lightgray)"
          }
        }, c().createElement("span", {
          style: {
            fontSize: "0.9em",
            paddingRight: 10,
            paddingLeft: 3,
            display: "inline-block",
            width: 130
          }
        }, "Numbering Reset to:"), c().createElement(Fo.A, {
          style: {
            display: "inline-block"
          },
          width: 60,
          itemsStyle: {
            maxHeight: 200,
            overflowY: "auto"
          },
          data: t,
          value: r,
          onChange: e => {
            "none" == e ? this.props.onResetNumbering(void 0) : this.props.onResetNumbering(Number.parseInt(e) || 1);
          }
        }));
      }
    }
  }
  var zo = r(47286),
    Ho = Zr.A.getModalDialog();
  class Wo extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        selectedText: ""
      }), (0, n.A)(this, "handleOnSelectTextChange", e => {
        this.setState({
          selectedText: e
        });
      });
    }
    componentDidMount() {
      r.e(397).then(r.bind(r, 6397)).then(e => {
        var t = e.SpecialSymbols;
        this.setState({
          SpecialSymbolsClss: t
        });
      }).catch(() => {
        this.setState({
          error: "Error on loading special characters, please close and try again"
        });
      });
    }
    renderElement() {
      return this.state.SpecialSymbolsClss ? c().createElement(this.state.SpecialSymbolsClss, {
        fixedContextHandler: this.props.fixedContextHandler,
        selectMode: this.props.selectMode,
        onSelectedTextChange: this.handleOnSelectTextChange
      }) : c().createElement("div", {
        style: {
          fontSize: 15,
          height: 100,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: this.state.error ? "#ce0303" : void 0
        }
      }, this.state.error || "Loading Special characters...");
    }
    render() {
      return c().createElement(Ho, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Special symbols",
        size: "medium",
        scroll: "body",
        style: {
          width: 560,
          maxWidth: "95vw"
        },
        noLabel: "Cancel",
        okLabel: "OK",
        message: "",
        isProgressing: !this.state.SpecialSymbolsClss && !this.state.error,
        onOk: () => {
          this.props.onOk(this.state.selectedText);
        },
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        isOkDisabled: !this.state.selectedText,
        show: !0,
        className: "confirm-dialog"
      }, this.renderElement()));
    }
  }
  function Vo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Uo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Vo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class qo extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        listType: this.resolveAsArr(this.props.liDefault),
        mtModel: this.createModel()
      }), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "handleOk", () => {
        this.setState({
          saving: !0,
          saveError: void 0
        }), this.props.onDefaultChange(this.state.listType).then(() => {
          this.props.onClose();
        }).catch(() => {
          this.setState({
            saveError: !0,
            saving: !1
          });
        });
      });
    }
    createModel() {
      var e = this.resolveAsArr(this.props.liDefault),
        t = sr.A.createPureTextLine("", {
          listType: e,
          lineHeightEm: 1.65
        }),
        r = sr.A.createPureTextLine("", {
          listType: e,
          indentIndex: 1,
          lineHeightEm: 1.65
        }),
        n = sr.A.createPureTextLine("", {
          listType: e,
          indentIndex: 2,
          lineHeightEm: 1.65
        }),
        i = sr.A.createPureTextLine("", {
          listType: e,
          indentIndex: 3,
          lineHeightEm: 1.65
        });
      return sr.A.createEditorWith([t, r, n, i]);
    }
    resolveAsArr(e) {
      return "string" == typeof e ? this.props.arrDefault : e;
    }
    updateModelWithListItems(e, t) {
      for (var r = this.state.mtModel, n = 0; n < 4; n++) "all" != t && t != n || (r = Uo(Uo({}, r), {}, {
        lines: dt.A.setIndex(r.lines, n, Uo(Uo({}, r.lines[n]), {}, {
          style: Uo(Uo({}, r.lines[n].style), {}, {
            listType: e
          })
        }))
      }));
      this.setState({
        mtModel: r,
        listType: e
      });
    }
    renderContent() {
      var e = {
        height: 10,
        width: 50,
        backgroundColor: "var(--ui-surface-active, lightgray)",
        opacity: .4,
        marginTop: 14,
        marginBottom: 10
      };
      return c().createElement("div", null, c().createElement("div", {
        style: {
          fontSize: 14,
          textAlign: "center",
          color: "var(--ui-text, black)",
          padding: 10,
          borderBottom: "1px solid var(--ui-border, lightgray)"
        }
      }, "Please select default bullet for each level"), c().createElement("div", {
        style: {
          position: "relative"
        }
      }, this.renderMtArea(), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          position: "absolute",
          left: 220,
          top: 10
        }
      }, this.getChangeListItemButton(0), this.getChangeListItemButton(1), this.getChangeListItemButton(2), this.getChangeListItemButton(3)), c().createElement("div", {
        style: {
          position: "absolute",
          left: 40,
          top: 10
        }
      }, c().createElement("div", {
        style: Uo(Uo({}, e), {}, {
          marginLeft: 10,
          width: 160,
          marginTop: 8
        })
      }), c().createElement("div", {
        style: Uo(Uo({}, e), {}, {
          marginLeft: 50,
          width: 120
        })
      }), c().createElement("div", {
        style: Uo(Uo({}, e), {}, {
          marginLeft: 90,
          width: 80
        })
      }), c().createElement("div", {
        style: Uo(Uo({}, e), {}, {
          marginLeft: 130,
          width: 40
        })
      })), this.renderSpecialSymbolDialog()));
    }
    renderSpecialSymbolDialog() {
      if (this.state.showSpecialSymbolDialog) return c().createElement(Wo, {
        fixedContextHandler: this.props.fixedContextHandler,
        selectMode: "single",
        onOk: e => {
          var t = this.state.showSpecialSymbolDialog.index,
            r = dt.A.setIndex(this.state.listType, t, e);
          this.updateModelWithListItems(r, t), this.setState({
            showSpecialSymbolDialog: void 0
          });
        },
        onClose: () => {
          this.setState({
            showSpecialSymbolDialog: void 0
          });
        }
      });
    }
    getChangeListItemButton(e) {
      var t = this.props.PresetSelectClss,
        r = {
          value: "any",
          display: () => c().createElement("div", null, c().createElement(t, {
            style: {
              position: "static"
            },
            defaultTextFont: this.props.fixedContextHandler.getMtFuncs().getBaseTextModeFont(),
            onDefaultSettingsSelect: Dt.A.noopFunc,
            listItemResetIndex: 0,
            onHtmlRef: Dt.A.noopFunc,
            onResetNumbering: Dt.A.noopFunc,
            onSelectBullets: e => {
              this.updateModelWithListItems(e, "all");
            },
            onSelectSingleBullet: t => {
              if ("Skip" != t) if ("More" != t) {
                var r = dt.A.setIndex(this.state.listType, e, t);
                this.updateModelWithListItems(r, e);
              } else this.setState({
                showSpecialSymbolDialog: {
                  index: e
                }
              });
            },
            selectDefaultView: !0
          })),
          noSelect: !0
        };
      return c().createElement(Qr.A, {
        containerStyle: {
          width: "auto"
        },
        label: "",
        icon: c().createElement("i", {
          className: this.props.iconClss
        }),
        items: [r],
        noZIndex: !0
      });
    }
    renderMtArea() {
      var e = this.props.MtClass;
      return c().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          overflow: "auto",
          marginTop: 10,
          width: 300,
          marginBottom: 30,
          paddingTop: 10
        }
      }, c().createElement(e, {
        model: this.state.mtModel,
        readOnly: !0,
        style: {
          flex: 1,
          padding: 0
        },
        rootEditorStyle: {
          minHeight: 0
        }
      }));
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Default list markers",
        size: "medium",
        scroll: "body",
        onClose: this.props.onClose,
        onOk: this.handleOk,
        isProgressing: this.state.saving,
        message: this.state.saveError ? "Error on saving" : void 0,
        show: !0,
        style: Uo({
          minWidth: 200,
          minHeight: 200,
          width: "auto"
        }, Zr.A.getCenterStyle())
      }, this.renderContent()));
    }
  }
  function Go(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ko(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Go(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Go(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Zo extends ro.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleSelectSingleBullet", e => {
        this.props.onSingleBulletSelect(e);
      }), (0, n.A)(this, "handleOrderListSelect", e => {
        e.stopPropagation(), e.preventDefault();
        var t = this.props,
          r = t.listType,
          n = t.indentIndex;
        Ot.A.isOrderListType(r, n) ? this.props.onListItemOrderSelect("none") : this.props.onListItemOrderSelect("order");
      });
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.listType != this.props.listType || e.indentIndex != this.props.indentIndex || t.showDefaultSettings != this.state.showDefaultSettings;
    }
    renderExpandComponent() {
      return c().createElement(No, {
        onDefaultSettingsSelect: () => {
          this.setState({
            showDefaultSettings: !0
          });
        },
        style: this.getSuggestExpandStyle(),
        onHtmlRef: e => this.registerExpandContainer(e),
        onSelectSingleBullet: this.handleSelectSingleBullet,
        onResetNumbering: this.props.onResetNumbering,
        onSelectBullets: this.props.onListItemOrderSelect,
        listItemResetIndex: this.props.listItemResetIndex,
        defaultTextFont: this.props.fixedContextHandler.getMtFuncs().getBaseTextModeFont()
      });
    }
    renderDefaultSettings() {
      if (this.state.showDefaultSettings) return c().createElement(qo, {
        MtClass: this.props.fixedContextHandler.getMtFuncs().getMathTypeClss(),
        PresetSelectClss: No,
        iconClss: "fa fa-list-ol",
        fixedContextHandler: this.props.fixedContextHandler,
        onClose: () => {
          this.setState({
            showDefaultSettings: void 0
          });
        },
        onDefaultChange: this.props.onDefaultChange,
        liDefault: this.props.requestListItemDefaults(),
        arrDefault: Ot.A.defaultOrder
      });
    }
    renderComponent() {
      var e = this.props,
        t = e.listType,
        r = e.indentIndex,
        n = {
          padding: 3,
          border: "1px solid transparent",
          margin: -1
        };
      return Ot.A.isOrderListType(t, r) && (n = Ko(Ko({}, n), {}, {
        background: "var(--ui-surface, white)",
        border: "1px solid var(--ui-border, lightgray)"
      })), c().createElement("div", {
        title: Gi.A.getToolTipByKey("ordered-list"),
        className: Ji,
        style: {
          paddingRight: 3
        }
      }, c().createElement("i", {
        style: n,
        className: "fa fa-list-ol",
        onMouseDown: this.handleOrderListSelect
      }), c().createElement("i", {
        className: "fa fa-caret-down " + Xi,
        "aria-hidden": "true"
      }), this.renderDefaultSettings());
    }
    getStyle() {
      return {
        display: "inline-block"
      };
    }
  }
  function Yo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Qo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Yo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Jo extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "orderListItemContainerStyle", {
        position: "absolute",
        left: 0,
        top: 25,
        border: "1px solid var(--ui-border, lightgray)",
        padding: "10px 7px",
        background: "var(--ui-surface, white)",
        display: "flex",
        flexDirection: "column"
      }), (0, n.A)(this, "orderListItemRow", {
        display: "flex",
        flexDirection: "row"
      });
    }
    renderItemContent(e, t, r) {
      return c().createElement(To, {
        fontFamily: r,
        data: e,
        onSelect: () => this.props.onSelectBullets(t)
      });
    }
    render() {
      var e = this.props,
        t = e.onHtmlRef,
        r = e.style,
        n = e.defaultTextFont,
        i = Yr.A.textFontFamilyFromKey(n);
      return c().createElement("div", {
        ref: t,
        style: Qo(Qo({}, this.orderListItemContainerStyle), r)
      }, c().createElement("div", {
        style: {
          fontSize: "0.9em",
          textAlign: "center",
          paddingBottom: 5
        }
      }, "Change Templates for related lines"), c().createElement("div", {
        style: this.orderListItemRow
      }, this.renderItemContent(["•", "–", "–", "*", "•"], ["•", "–", "*", "·"], i), this.renderItemContent(["❖", "➢", "➢", "■", "❖"], ["❖", "➢", "■", "●"], i), this.renderItemContent(["❏", "❏", "❏", "❏", "❏"], ["❏", "❏", "❏", "❏"], i)), c().createElement("div", {
        style: this.orderListItemRow
      }, this.renderItemContent(["➔", "◆", "◆", "●", "➔"], ["➔", "◆", "●", "○"], i), this.renderItemContent(["★", "○", "○", "■", "★"], ["★", "○", "■", "●"], i), this.renderItemContent(["➢", "○", "○", "■", "➢"], ["➢", "○", "■", "●"], i)), c().createElement("div", {
        style: {
          fontSize: "0.9em",
          textAlign: "center",
          paddingTop: 5,
          paddingBottom: 5
        }
      }, "Change List Item for selected lines"), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          fontFamily: i
        }
      }, c().createElement(Bo, {
        text: "★",
        onSelect: () => this.props.onSelectSingleBullet("★")
      }), c().createElement(Bo, {
        text: "•",
        onSelect: () => this.props.onSelectSingleBullet("•")
      }), c().createElement(Bo, {
        text: "–",
        onSelect: () => this.props.onSelectSingleBullet("–")
      }), c().createElement(Bo, {
        text: "*",
        onSelect: () => this.props.onSelectSingleBullet("*")
      }), c().createElement(Bo, {
        text: "❖",
        onSelect: () => this.props.onSelectSingleBullet("❖")
      }), c().createElement(Bo, {
        text: "➢",
        onSelect: () => this.props.onSelectSingleBullet("➢")
      }), c().createElement(Bo, {
        text: "■",
        onSelect: () => this.props.onSelectSingleBullet("■")
      }), c().createElement(Bo, {
        text: "●",
        onSelect: () => this.props.onSelectSingleBullet("●")
      })), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          fontFamily: i
        }
      }, c().createElement(Bo, {
        text: "❏",
        onSelect: () => this.props.onSelectSingleBullet("❏")
      }), c().createElement(Bo, {
        text: "➔",
        onSelect: () => this.props.onSelectSingleBullet("➔")
      }), c().createElement(Bo, {
        text: "○",
        onSelect: () => this.props.onSelectSingleBullet("○")
      }), this.renderSkip(), c().createElement(Bo, {
        text: "More ...",
        style: {
          width: 62,
          color: "#4CAF50"
        },
        onSelect: () => this.props.onSelectSingleBullet("More")
      })), this.renderSetDefaultSettings());
    }
    renderSkip() {
      if (!this.props.selectDefaultView) return c().createElement(Bo, {
        text: "Skip",
        style: {
          width: 62
        },
        onSelect: () => this.props.onSelectSingleBullet("Skip")
      });
    }
    renderSetDefaultSettings() {
      if (!this.props.selectDefaultView) return c().createElement("div", {
        onMouseDown: () => {
          this.props.onDefaultSettingsSelect();
        },
        style: {
          marginTop: 5,
          paddingTop: 5,
          borderTop: "1px solid var(--ui-border, lightgray)"
        }
      }, c().createElement("span", {
        style: {
          fontSize: "0.9em",
          paddingRight: 10,
          paddingLeft: 3,
          width: 95,
          display: "inline-block"
        }
      }, "Default settings:"), c().createElement("button", {
        className: "btn-normal",
        style: {
          display: "inline-block",
          width: 60
        }
      }, "Change"));
    }
  }
  function Xo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function $o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Xo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class es extends ro.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleSelectSingleBullet", e => {
        this.props.onSingleBulletSelect(e);
      }), (0, n.A)(this, "handleOrderListSelect", e => {
        e.stopPropagation(), e.preventDefault();
        var t = this.props,
          r = t.listType,
          n = t.indentIndex;
        Ot.A.isUnOrderListType(r, n) ? this.props.onListItemUnOrderSelect("none") : this.props.onListItemUnOrderSelect("unorder");
      });
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.listType != this.props.listType || e.indentIndex != this.props.indentIndex || t.showDefaultSettings != this.state.showDefaultSettings;
    }
    renderExpandComponent() {
      return c().createElement(Jo, {
        onDefaultSettingsSelect: () => {
          this.setState({
            showDefaultSettings: !0
          });
        },
        style: this.getSuggestExpandStyle(),
        onHtmlRef: e => this.registerExpandContainer(e),
        onSelectSingleBullet: this.handleSelectSingleBullet,
        onSelectBullets: this.props.onListItemUnOrderSelect,
        defaultTextFont: this.props.fixedContextHandler.getMtFuncs().getBaseTextModeFont()
      });
    }
    renderComponent() {
      var e = this.props,
        t = e.listType,
        r = e.indentIndex,
        n = {
          padding: 3,
          border: "1px solid transparent",
          margin: -1
        };
      return Ot.A.isUnOrderListType(t, r) && (n = $o($o({}, n), {}, {
        background: "var(--ui-surface, white)",
        border: "1px solid var(--ui-border, lightgray)"
      })), c().createElement("div", {
        title: Gi.A.getToolTipByKey("unordered-list"),
        className: Ji,
        style: {
          paddingRight: 3
        }
      }, c().createElement("i", {
        style: n,
        className: "fa fa-list-ul",
        onMouseDown: this.handleOrderListSelect
      }), c().createElement("i", {
        className: "fa fa-caret-down " + Xi,
        "aria-hidden": "true"
      }), this.renderDefaultSettings());
    }
    renderDefaultSettings() {
      if (this.state.showDefaultSettings) return c().createElement(qo, {
        MtClass: this.props.fixedContextHandler.getMtFuncs().getMathTypeClss(),
        PresetSelectClss: Jo,
        iconClss: "fa fa-list-ol",
        fixedContextHandler: this.props.fixedContextHandler,
        onClose: () => {
          this.setState({
            showDefaultSettings: void 0
          });
        },
        onDefaultChange: this.props.onDefaultChange,
        liDefault: this.props.requestListItemDefaults(),
        arrDefault: Ot.A.defaultUnOrder
      });
    }
    getStyle() {
      return {
        display: "inline-block"
      };
    }
  }
  var ts = r(60150);
  function rs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ns(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? rs(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rs(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class is extends c().Component {
    renderItemContent(e, t, r, n, i) {
      return c().createElement(To, {
        itemStyle: n,
        noMarginOnLevels: r,
        data: e,
        onSelect: () => this.props.onPageSectionChange(this.getPageSectionBy(t[0])),
        fontFamily: i,
        ariaLabel: {
          1: "Decimal sections",
          I: "Roman numeral sections",
          A: "Alphabetic sections",
          Article: "Article sections",
          Chapter: "Chapter sections",
          None: "No section numbering"
        }[t[0]]
      });
    }
    render() {
      var e = this.props,
        t = e.onHtmlRef,
        r = e.style,
        n = e.defaultTextFont,
        i = Yr.A.textFontFamilyFromKey(n);
      return c().createElement("div", {
        ref: t,
        style: ns(ns({}, os), r)
      }, c().createElement("div", {
        style: {
          fontSize: "0.9em",
          textAlign: "center",
          paddingBottom: 5
        }
      }, "Change Section Templates for whole Document"), c().createElement("div", {
        style: ss
      }, this.renderItemContent(["1.", "1.1.", "1.2.", "1.2.1.", "2."], ["1"], !0, void 0, i), this.renderItemContent(["I", "I.I", "I.II", "I.II.I", "II."], ["I"], !0, void 0, i), this.renderItemContent(["A.", "  a.", "  b.", "      i.", "B."], ["A"], !0, void 0, i)), c().createElement("div", {
        style: ss
      }, this.renderItemContent(["Article I", "Section 1", "Section 2", "(a)", "Article II"], ["Article"], !0, void 0, i), this.renderItemContent(["Chapter 1", " ", " ", " ", "Chapter 2"], ["Chapter"], !0, void 0, i), this.renderItemContent(["A", "A", "A", "A", "A"], ["None"], !0, {
        color: "transparent"
      }, i)), c().createElement("div", {
        style: ss
      }, c().createElement(Bo, {
        text: "Customize Sections",
        style: {
          width: "100%",
          color: "#4CAF50"
        },
        onSelect: () => this.props.onOpenAdvancedSettings()
      })), c().createElement("div", {
        style: ss
      }, c().createElement(Bo, {
        text: "Set current Section as Default",
        style: {
          width: "100%",
          color: "var(--ui-text-muted, gray)"
        },
        onSelect: () => this.props.onSetCurrentSectionAsDefault()
      })));
    }
    getPageSectionBy(e) {
      switch (e) {
        case "1":
          return {};
        case "I":
          return {
            level1: {
              numbering: "I"
            },
            level2: {
              numbering: "I"
            },
            level3: {
              numbering: "I"
            }
          };
        case "A":
          return {
            includingUpperSection: !1,
            level1: {
              numbering: "A",
              prefix: "",
              suffix: ".",
              paddingLeft: 0
            },
            level2: {
              numbering: "a",
              prefix: "   ",
              suffix: ".",
              paddingLeft: 0
            },
            level3: {
              numbering: "i",
              prefix: "      ",
              suffix: ".",
              paddingLeft: 0
            }
          };
        case "Article":
          return {
            includingUpperSection: !1,
            level1: {
              numbering: "I",
              prefix: "Article ",
              suffix: "",
              paddingLeft: 0
            },
            level2: {
              numbering: "1",
              prefix: "Section ",
              suffix: "",
              paddingLeft: 0
            },
            level3: {
              numbering: "a",
              prefix: "(",
              suffix: ")",
              paddingLeft: 0
            }
          };
        case "Chapter":
          return {
            includingUpperSection: !1,
            level1: {
              numbering: "1",
              prefix: "Chapter ",
              paddingLeft: 0,
              suffix: ""
            },
            level2: {
              numbering: "None",
              paddingLeft: 0,
              suffix: ""
            },
            level3: {
              numbering: "None",
              paddingLeft: 0,
              suffix: ""
            }
          };
        case "None":
          return {
            level1: {
              numbering: "None",
              paddingLeft: 0,
              suffix: ""
            },
            level2: {
              numbering: "None",
              paddingLeft: 0,
              suffix: ""
            },
            level3: {
              numbering: "None",
              paddingLeft: 0,
              suffix: ""
            }
          };
      }
      return {};
    }
  }
  var os = {
      position: "absolute",
      left: 0,
      top: 25,
      border: "1px solid var(--ui-border, lightgray)",
      padding: "10px 7px",
      background: "var(--ui-surface, white)",
      display: "flex",
      flexDirection: "column"
    },
    ss = {
      display: "flex",
      flexDirection: "row"
    },
    as = r(82477);
  class ls extends ro.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "ConfirmModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "handleSectionSelect", e => {
        this.props.disabled || (e.stopPropagation(), e.preventDefault(), this.props.onSectionSelect());
      }), (0, n.A)(this, "handleSectionItemWrapper", e => {
        this.props.disabled && (e.stopPropagation(), e.preventDefault());
      });
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || t.showSaveDefaultConfirm != this.state.showSaveDefaultConfirm || e.selected != this.props.selected || e.disabled != this.props.disabled;
    }
    renderExpandComponent() {
      return c().createElement(is, {
        style: this.getSuggestExpandStyle(),
        onHtmlRef: e => this.registerExpandContainer(e),
        onOpenAdvancedSettings: this.props.onOpenAdvancedSettings,
        onPageSectionChange: this.props.onPageSectionChange,
        onSetCurrentSectionAsDefault: () => {
          this.setState({
            showSaveDefaultConfirm: !0
          });
        },
        defaultTextFont: this.props.fixedContextHandler.getMtFuncs().getBaseTextModeFont()
      });
    }
    renderSaveAsDefaultConfirm() {
      if (this.state.showSaveDefaultConfirm) return c().createElement(this.ConfirmModalDialog, {
        show: !0
      }, c().createElement(as.A, {
        title: "Set default sections",
        okLabel: "Set as default",
        label: "Are you sure to set Section in this document as Default, and it will be used in New Created Document?",
        show: !0,
        onOk: (e, t) => {
          this.props.onSaveSectionAsDefault().then(() => {
            e(), E.A.next(() => {
              this.setState({
                showSaveDefaultConfirm: !1
              });
            });
          }).catch(() => {
            t("Error on save, please try again");
          });
        },
        onClose: () => {
          this.setState({
            showSaveDefaultConfirm: !1
          });
        }
      }));
    }
    renderComponent() {
      var e = this.props,
        t = e.disabled,
        r = e.selected;
      return c().createElement("div", {
        onMouseDown: this.handleSectionItemWrapper,
        className: v()(Ji, "section-toolbar-settings", {
          disabled: t
        }),
        title: Gi.A.getToolTipByKey("section")
      }, c().createElement("svg", {
        className: v()("section-icon", {
          selected: r
        }),
        onMouseDown: this.handleSectionSelect
      }, c().createElement("text", {
        x: "2",
        y: "6.5"
      }, "1."), c().createElement("text", {
        x: "2",
        y: "13.5"
      }, "1.2.")), c().createElement("i", {
        className: "fa fa-caret-down " + Xi,
        "aria-hidden": "true"
      }), this.renderSaveAsDefaultConfirm());
    }
  }
  var cs = r(98231),
    ds = () => JSON.parse('{"id": "r0.6518017455951512","lines": [{"id": "n0.914434895459748","blocks": [{"id": "n0.17346614520742243","text": "First Level Section 1"}],"style": {"listType": "section"}},{"id": "n0.010224825998841558","blocks": [{"id": "n0.6371705159257519","text": "Second Level Section 1"}],"style": {"listType": "section","indentIndex": 1}},{"id": "n0.03892797735132447","blocks": [{"id": "n0.9084561422259085","text": "Second Level Section 2"}],"style": {"listType": "section","indentIndex": 1}},{"id": "n0.5227264879307334","blocks": [{"id": "n0.09533167125095776","text": "Third Level Section 1"}],"style": {"listType": "section","indentIndex": 2}},{"id": "n0.5907746312120761","blocks": [{"id": "n0.9667731293305308","text": "Third Level Section 2"}],"style": {"listType": "section","indentIndex": 2}},{"id": "n0.07399740361907248","blocks": [{"id": "n0.8245741782467846","text": "First Level Section 2"}],"style": {"listType": "section","indentIndex": 0}},{"id": "n0.8835785319852878","blocks": [{"id": "n0.9058332210127273","text": "Another Second Level Section 1 "}],"style": {"listType": "section","indentIndex": 1}}]}');
  function hs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ps(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? hs(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hs(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var us = Zr.A.getModalDialog();
  class gs extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        pageSection: this.props.pageSection
      }), (0, n.A)(this, "numberingItems", void 0), (0, n.A)(this, "mathTypeCompRef", void 0), (0, n.A)(this, "refreshSettingsLater", E.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "previewModel", ps(ps({}, ds()), {}, {
        pageSettings: {
          pageSection: this.props.pageSection,
          fontName: this.props.pageSettings.fontName
        }
      })), (0, n.A)(this, "refreshPreview", () => {
        this.mathTypeCompRef && this.mathTypeCompRef.setPageSettings(ps(ps({}, an.A.getOrDefault({})), {}, {
          pageSection: this.state.pageSection
        }));
      }), this.numberingItems = [{
        key: "None",
        value: "None"
      }, {
        key: "1",
        value: "1 2 3 4"
      }, {
        key: "I",
        value: "I II III IV"
      }, {
        key: "i",
        value: "i ii iii iv"
      }, {
        key: "A",
        value: "A B C D"
      }, {
        key: "a",
        value: "a b c d"
      }];
    }
    componentDidUpdate() {
      this.refreshSettingsLater.later(this.refreshPreview);
    }
    changeLevel(e, t) {
      var r = this.state.pageSection || {},
        n = t(r[e]);
      this.setState(ps(ps({}, this.state), {}, {
        pageSection: ps(ps({}, r), {}, {
          [e]: n
        })
      }));
    }
    renderSectionStyle(e, t, r, n, i, o) {
      var s,
        a = (this.state.pageSection || {})[e] || {},
        l = a.numbering,
        d = void 0 === l ? "1" : l,
        h = a.prefix,
        p = void 0 === h ? "" : h,
        u = a.suffix,
        g = void 0 === u ? "." : u,
        m = a.color,
        f = void 0 === m ? "#000" : m,
        y = a.fontSizeEm,
        v = void 0 === y ? r : y,
        b = a.isBold,
        x = void 0 === b || b,
        C = a.paddingTopBottom,
        S = void 0 === C ? n : C,
        A = a.paddingLeft,
        w = void 0 === A ? i : A,
        E = {
          display: "inline-block",
          width: 100
        },
        k = {
          marginBottom: 5
        },
        O = {
          display: "inline-flex",
          marginLeft: -2,
          fontSize: 13,
          width: 60
        },
        D = {
          fontSize: 13,
          width: 30
        };
      return c().createElement("div", {
        className: "test-section-level-settings",
        style: ps({
          width: 240,
          display: "flex",
          flexDirection: "column"
        }, o)
      }, c().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, lightgray)",
          padding: 5,
          marginBottom: -1,
          background: "var(--ui-surface-hover, rgb(234, 232, 232))",
          paddingLeft: 10
        }
      }, t), c().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, lightgray)",
          padding: 10,
          flex: 1,
          background: "var(--ui-surface, white)"
        }
      }, c().createElement("div", {
        style: k
      }, c().createElement("span", {
        style: E
      }, "Prefix"), c().createElement("input", {
        style: {
          width: 104
        },
        value: p,
        onChange: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            prefix: t.currentTarget.value
          }));
        }
      })), c().createElement("div", {
        style: k
      }, c().createElement("span", {
        style: E
      }, "Suffix"), c().createElement("input", {
        style: {
          width: 104
        },
        value: g,
        onChange: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            suffix: t.currentTarget.value
          }));
        }
      })), c().createElement("div", {
        style: k
      }, c().createElement("span", {
        style: E
      }, "Numbering"), c().createElement(Fo.A, {
        width: 110,
        style: {
          display: "inline-block",
          fontSize: 13
        },
        data: this.numberingItems,
        value: d,
        onChange: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            numbering: t
          }));
        }
      })), c().createElement("div", {
        style: {
          marginBottom: 8
        }
      }, c().createElement("span", {
        style: ps(ps({}, E), {}, {
          width: 102
        })
      }, "Font Size"), c().createElement(Vn.A, {
        containerStyle: O,
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: v,
        unitStyle: {
          fontSize: 13
        },
        style: D,
        onValueChanging: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            fontSizeEm: t
          }));
        },
        onValueChanged: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            fontSizeEm: t
          }));
        }
      })), c().createElement("div", {
        style: {
          background: "var(--ui-surface, white)",
          zIndex: 1,
          position: "relative"
        }
      }, "Padding"), c().createElement("div", {
        style: {
          marginTop: 2,
          marginBottom: 2
        }
      }, this.renderConnectLine(), c().createElement("div", {
        style: {
          width: 83,
          display: "inline-block"
        }
      }, "Top/Bottom "), c().createElement(Vn.A, {
        containerStyle: O,
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: S,
        unitStyle: {
          fontSize: 13
        },
        style: D,
        onValueChanging: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            paddingTopBottom: t
          }));
        },
        onValueChanged: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            paddingTopBottom: t
          }));
        }
      })), c().createElement("div", {
        style: k
      }, this.renderConnectLine(), c().createElement("div", {
        style: {
          width: 83,
          display: "inline-block"
        }
      }, "Left "), c().createElement(Vn.A, {
        containerStyle: O,
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: w,
        unitStyle: {
          fontSize: 13
        },
        style: D,
        onValueChanging: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            paddingLeft: t
          }));
        },
        onValueChanged: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            paddingLeft: t
          }));
        }
      })), c().createElement("div", {
        style: k
      }, c().createElement("span", {
        style: E
      }, "Bold"), c().createElement(Yn.A, {
        style: {
          display: "inline-block",
          marginLeft: 1
        },
        name: "",
        checked: x,
        onValueChanged: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            isBold: t
          }));
        }
      })), c().createElement("div", {
        style: k
      }, c().createElement("span", {
        style: E
      }, "Color"), c().createElement(cs.A, {
        requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        stopPropagation: !0,
        style: {
          display: "inline-block",
          verticalAlign: -6
        },
        value: f,
        onItemSelect: t => {
          this.changeLevel(e, e => ps(ps({}, e), {}, {
            color: t
          }));
        }
      }))));
    }
    renderConnectLine() {
      return c().createElement("div", {
        style: {
          width: 20,
          display: "inline-block",
          position: "relative"
        }
      }, c().createElement("div", {
        style: {
          position: "absolute",
          left: 5,
          top: -33,
          borderLeft: "1px solid var(--ui-border, lightgray)",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          width: 10,
          height: 28
        }
      }));
    }
    renderMathTypeArea() {
      var e = this.props.MathTypeClss;
      return c().createElement(e, {
        ref: e => this.mathTypeCompRef = e,
        model: this.previewModel,
        readOnly: !0,
        style: {
          flex: 1,
          padding: 0
        },
        rootEditorStyle: {
          minHeight: 0
        }
      });
    }
    render() {
      var e,
        t = (this.state.pageSection || {}).includingUpperSection,
        r = void 0 === t || t;
      return c().createElement(us, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Section settings",
        size: "medium",
        scroll: "body",
        style: ps({
          height: "auto",
          maxHeight: 800,
          width: "auto",
          maxWidth: 900,
          padding: 10,
          paddingTop: 15
        }, Zr.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onClose(this.state.pageSection),
        onCancel: () => this.props.onClose(),
        okLabel: "OK",
        show: !0
      }, c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
          fontSize: 13,
          width: "100%"
        }
      }, c().createElement("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column"
        }
      }, c().createElement(Yn.A, {
        style: {
          marginBottom: 10,
          display: "inline-block"
        },
        textStyle: {
          fontSize: 13
        },
        name: "Lower level Section Numbering includes upper level Section",
        checked: r,
        onValueChanged: e => this.setState(ps(ps({}, this.state), {}, {
          pageSection: ps(ps({}, this.state.pageSection), {}, {
            includingUpperSection: e
          })
        }))
      })), c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          flexShrink: 0
        }
      }, this.renderSectionStyle("level1", "Section Level 1", 1.2, .5, .5, {}), this.renderSectionStyle("level2", "Section Level 2", 1.1, .5, .25, {
        marginLeft: 10
      }), this.renderSectionStyle("level3", "Section Level 3", 1, .5, 0, {
        marginLeft: 10
      })), c().createElement("div", {
        style: {
          padding: 5
        }
      }, "Preview:"), c().createElement("div", {
        style: {
          flex: 1,
          minHeight: 200,
          border: "1px solid var(--ui-border, lightgray)",
          padding: 10,
          maxHeight: 200,
          overflow: "auto"
        }
      }, this.renderMathTypeArea()))));
    }
  }
  class ms extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "inputHtml", void 0), (0, n.A)(this, "handleApplyClick", () => {
        if (this.inputHtml) {
          var e = this.parseFontSizeValue(this.inputHtml.value);
          this.props.onChange(e);
        }
      }), (0, n.A)(this, "handleFontSizeRenderItem", e => "custom" == e.key ? c().createElement("span", null, this.props.lineHeight) : "default" == e.key ? c().createElement("span", null, "Default (", this.props.pageLineHeight, ")") : c().createElement("div", {
        onMouseDown: e => e.stopPropagation(),
        style: {
          lineHeight: "1.2",
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          background: "none",
          marginTop: 6,
          marginBottom: 5
        }
      }, c().createElement("input", {
        defaultValue: "" + (this.props.lineHeight || this.props.pageLineHeight),
        ref: e => this.inputHtml = e,
        style: {
          width: 35,
          fontSize: 13
        }
      }), c().createElement("span", {
        style: {
          paddingLeft: 3
        }
      }), c().createElement("button", {
        className: "btn-primary",
        style: {
          marginLeft: 22,
          width: 52
        },
        onClick: this.handleApplyClick
      }, "Apply"))), (0, n.A)(this, "handleChange", e => {
        "custom" != e ? "default" == e && this.props.onChange(void 0) : this.props.onChange(this.props.lineHeight);
      });
    }
    getRenderItems() {
      var e = [{
        key: "default",
        value: "Default (".concat(this.props.pageLineHeight, ")")
      }, {
        key: "custom-select",
        value: "Custom",
        noSelect: !0
      }];
      return this.props.lineHeight && e.splice(1, 0, {
        key: "custom",
        value: "" + this.props.lineHeight
      }), e;
    }
    getSelectedValue() {
      var e;
      return this.props.lineHeight ? "custom" : "default";
    }
    parseFontSizeValue(e) {
      var t = Number.parseFloat(e);
      return "number" != typeof t || Number.isNaN(t) ? 1.2 : f().clamp(t, .1, 100);
    }
    render() {
      return c().createElement("div", {
        className: "test-lhsl",
        onMouseDown: e => e.stopPropagation()
      }, c().createElement("span", {
        style: {
          paddingLeft: 5,
          paddingRight: 5,
          display: "inline-block",
          width: 70
        }
      }, "Line Height: "), c().createElement(Fo.A, {
        data: this.getRenderItems(),
        usePositionFixedOnExpand: !0,
        style: {
          display: "inline-block"
        },
        isReadOnly: !0,
        onChange: this.handleChange,
        value: this.getSelectedValue(),
        width: 110,
        expansionWidth: 145,
        onRenderItem: this.handleFontSizeRenderItem,
        title: "Line Height"
      }));
    }
  }
  class fs extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "inputHtmlBefore", void 0), (0, n.A)(this, "inputHtmlAfter", void 0), (0, n.A)(this, "handleApplyClick", () => {
        if (this.inputHtmlBefore) {
          var e = this.parseSpacing(this.inputHtmlBefore.value, this.inputHtmlAfter.value);
          this.props.onChange(e);
        }
      }), (0, n.A)(this, "handleFontSizeRenderItem", e => "custom" == e.key ? c().createElement("span", null, "(", this.getSpacingText(this.props.pSpacing), ")") : "default" == e.key ? c().createElement("span", null, "Default (", this.getSpacingText(this.props.defaultPSpacing), ")") : c().createElement("div", {
        onMouseDown: e => e.stopPropagation(),
        style: {
          lineHeight: "1.2",
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          background: "none",
          marginTop: 6,
          marginBottom: 5
        }
      }, c().createElement("input", {
        defaultValue: "".concat(this.inputValues(this.props).before),
        ref: e => this.inputHtmlBefore = e,
        style: {
          width: 35,
          fontSize: 13
        }
      }), c().createElement("span", {
        style: {
          paddingLeft: 3
        }
      }), c().createElement("input", {
        defaultValue: "".concat(this.inputValues(this.props).after),
        ref: e => this.inputHtmlAfter = e,
        style: {
          width: 35,
          fontSize: 13
        }
      }), c().createElement("span", {
        style: {
          paddingLeft: 3
        }
      }), c().createElement("button", {
        className: "btn-primary",
        style: {
          marginLeft: 22,
          width: 52
        },
        onClick: this.handleApplyClick
      }, "Apply"))), (0, n.A)(this, "handleChange", e => {
        "custom" != e ? "default" == e && this.props.onChange(void 0) : this.props.onChange(this.props.pSpacing);
      });
    }
    inputValues(e) {
      var t, r, n, i, o, s, a, l;
      return {
        before: null !== (t = null !== (r = null === (n = e.pSpacing) || void 0 === n ? void 0 : n.before) && void 0 !== r ? r : null === (i = e.defaultPSpacing) || void 0 === i ? void 0 : i.before) && void 0 !== t ? t : 0,
        after: null !== (o = null !== (s = null === (a = e.pSpacing) || void 0 === a ? void 0 : a.after) && void 0 !== s ? s : null === (l = e.defaultPSpacing) || void 0 === l ? void 0 : l.after) && void 0 !== o ? o : 0
      };
    }
    componentDidUpdate(e) {
      var t = this.inputValues(e),
        r = this.inputValues(this.props);
      this.inputHtmlBefore && t.before !== r.before && (this.inputHtmlBefore.value = "".concat(r.before)), this.inputHtmlAfter && t.after !== r.after && (this.inputHtmlAfter.value = "".concat(r.after));
    }
    getRenderItems() {
      var e = [{
        key: "default",
        value: "Default (".concat(this.getSpacingText(this.props.defaultPSpacing), ")")
      }, {
        key: "custom-select",
        value: "Custom",
        noSelect: !0
      }];
      return this.props.pSpacing && e.splice(1, 0, {
        key: "custom",
        value: "(".concat(this.getSpacingText(this.props.pSpacing), ")")
      }), e;
    }
    getSelectedValue() {
      var e;
      return this.props.pSpacing ? "custom" : "default";
    }
    parseSpacing(e, t) {
      return {
        before: this.parseSpacingValue(e),
        after: this.parseSpacingValue(t)
      };
    }
    parseSpacingValue(e) {
      var t = Number.parseFloat(e);
      return "number" != typeof t || Number.isNaN(t) ? 0 : f().clamp(t, 0, 50);
    }
    getSpacingText(e) {
      return "".concat(e.before || 0, ", ").concat(e.after || 0);
    }
    render() {
      return c().createElement("div", {
        className: "test-pspc",
        onMouseDown: e => e.stopPropagation()
      }, c().createElement("span", {
        style: {
          paddingLeft: 5,
          paddingRight: 5,
          display: "inline-block",
          width: 70
        }
      }, "Spacing: "), c().createElement(Fo.A, {
        data: this.getRenderItems(),
        usePositionFixedOnExpand: !0,
        style: {
          display: "inline-block"
        },
        isReadOnly: !0,
        onChange: this.handleChange,
        value: this.getSelectedValue(),
        width: 110,
        expansionWidth: 175,
        onRenderItem: this.handleFontSizeRenderItem,
        title: "Paragraph Spacing"
      }));
    }
  }
  var ys = r(50510);
  function vs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vs(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vs(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class xs extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "lastRenderSettings", void 0), (0, n.A)(this, "moreActionItems", [{
        value: "ltr",
        display: c().createElement("span", null, "Text Left to Right"),
        icon: c().createElement("span", {
          style: Ss
        }, Zi.A.textDirectionRight)
      }, {
        value: "rtl",
        display: c().createElement("span", null, "Text Right to Left"),
        icon: c().createElement("span", {
          style: Cs
        }, Zi.A.textDirectionRight)
      }, {
        value: "set-line-height",
        display: () => c().createElement(ms, {
          pageLineHeight: this.props.fixedContextHandler.getMtFuncs().getPageSettings().textLineHeight,
          lineHeight: this.props.lineInfo.lineHeight,
          onChange: this.handleLineHeightChange
        }),
        icon: c().createElement("span", null),
        noSelect: !0
      }, {
        value: "set-paragraph-spacing",
        display: () => {
          var e = this.props.fixedContextHandler.getMtFuncs().getPageSettings(),
            t = ys.m.extractParagraphSpacing(e, {
              isRoot: "root" == this.props.renderRequestType,
              isListItem: Ot.A.isBulletListType(this.props.lineInfo.listType),
              isSection: "section" == this.props.lineInfo.listType
            });
          return c().createElement(fs, {
            defaultPSpacing: t,
            pSpacing: this.props.lineInfo.pSpacing,
            onChange: this.handleParagraphSpacingChange
          });
        },
        icon: c().createElement("span", null),
        noSelect: !0
      }]), (0, n.A)(this, "handleParagraphSpacingChange", e => {
        this.props.triggers.onParagraphSpacingChange(e);
      }), (0, n.A)(this, "handleLineHeightChange", e => {
        this.props.triggers.onLineHeightChange(e);
      }), (0, n.A)(this, "handleSectionSelect", e => {
        e && (e.preventDefault(), e.stopPropagation()), this.setLineSection(this.props.lineInfo.listType);
      }), (0, n.A)(this, "handleListItemOrderSelect", e => {
        this.props.triggers.setLineList(e);
      }), (0, n.A)(this, "handleListItemUnOrderSelect", e => {
        this.props.triggers.setLineList(e);
      }), (0, n.A)(this, "handleIndentSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.props.triggers.indent();
      }), (0, n.A)(this, "handleOutdentSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.props.triggers.outdent();
      }), (0, n.A)(this, "handleAlignLeftSelect", e => {
        e.preventDefault(), e.stopPropagation(), "at-caption" != this.props.renderRequestType ? this.changeAlign("left") : k.A.lineStyleContext("align", () => {
          this.changeAlign("left");
        });
      }), (0, n.A)(this, "handleAlignCenterSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.changeAlign("center");
      }), (0, n.A)(this, "handleAlignRightSelect", e => {
        e.preventDefault(), e.stopPropagation(), this.changeAlign("right");
      }), (0, n.A)(this, "handleAlignJustifySelect", e => {
        Xe.A.supportTextJustify() && (e.preventDefault(), e.stopPropagation(), this.changeAlign("justify"));
      }), (0, n.A)(this, "handleOrderDefaultChange", e => {
        var t = this.props.requestListItemDefaults().unorders;
        return this.props.triggers.onListItemDefaultChange(e, t);
      }), (0, n.A)(this, "handleUnOrderDefaultChange", e => {
        var t = this.props.requestListItemDefaults().orders;
        return this.props.triggers.onListItemDefaultChange(t, e);
      }), (0, n.A)(this, "handleOrderLiDefaultsRequest", () => this.props.requestListItemDefaults().orders), (0, n.A)(this, "handleUnOrderLiDefaultsRequest", () => this.props.requestListItemDefaults().unorders), (0, n.A)(this, "handleApplyPageSection", e => {
        this.props.triggers.onPageSectionChange(e);
      }), (0, n.A)(this, "handleMoreSettingsSelect", e => {
        "set-line-height" != e && "set-paragraph-spacing" != e && ("rtl" == e ? this.props.triggers.onTextDirectionSelect("rtl") : this.props.triggers.onTextDirectionSelect("inherit" == this.props.styleCascadeContext ? "ltr" : void 0));
      });
    }
    shouldComponentUpdate(e, t) {
      return e.editorModel != this.props.editorModel || e.renderRequestType != this.props.renderRequestType || e.selected != this.props.selected || t != this.state;
    }
    changeAlign(e) {
      "latex-table" != this.props.renderRequestType ? this.props.triggers.changeLineAlign(e, this.props.selected.lineIndex) : this.props.triggers.changeCellAlign(e);
    }
    setLineSection(e) {
      "section" != e ? this.props.triggers.setLineList("section") : this.props.triggers.setLineList("none");
    }
    isIndentDisabled() {
      if ("list-bullet" == this.props.renderRequestType) return !0;
      var e = this.props.lineInfo,
        t,
        r;
      return e.indentIndex >= e.maxIndentIndex;
    }
    isOutdentDisabled() {
      return "list-bullet" == this.props.renderRequestType || this.props.lineInfo.indentIndex <= 0;
      var e;
    }
    renderListItemIndentSetting() {
      var e = this.props.renderRequestType;
      if ("root" != e && "list-bullet" != e && "table" != e && "boxed-container" != e && "text-mode-grouping" != e) return null;
      var t = this.props.lineInfo,
        r = t.listType,
        n = t.indentIndex,
        i = t.listItemResetIndex,
        o = v()("fa fa-indent", {
          disabled: this.isIndentDisabled()
        }),
        s = v()("fa fa-outdent", {
          disabled: this.isOutdentDisabled()
        });
      return [c().createElement("v-separator", {
        class: to,
        key: "0"
      }), c().createElement("list-items-options", {
        key: "1",
        class: this.getGroupSettingClass() + " tw:pl-[3px]",
        style: {
          display: "flex"
        }
      }, this.renderSectionItem(r), c().createElement(Zo, {
        useFixedPosition: !0,
        onSingleBulletSelect: this.props.triggers.onSingleBulletSelect,
        indentIndex: n,
        listType: r,
        onListItemOrderSelect: this.handleListItemOrderSelect,
        onResetNumbering: this.props.triggers.onResetNumbering,
        listItemResetIndex: i,
        fixedContextHandler: this.props.fixedContextHandler,
        onDefaultChange: this.handleOrderDefaultChange,
        requestListItemDefaults: this.handleOrderLiDefaultsRequest
      }), c().createElement(es, {
        useFixedPosition: !0,
        onSingleBulletSelect: this.props.triggers.onSingleBulletSelect,
        indentIndex: n,
        listType: r,
        onListItemUnOrderSelect: this.handleListItemUnOrderSelect,
        fixedContextHandler: this.props.fixedContextHandler,
        onDefaultChange: this.handleUnOrderDefaultChange,
        requestListItemDefaults: this.handleUnOrderLiDefaultsRequest
      })), c().createElement("v-separator", {
        class: to,
        key: "2"
      }), c().createElement("indent-outdent-options", {
        key: "3",
        class: this.getGroupSettingClass() + " tw:pl-[3px]"
      }, c().createElement("i", {
        className: o,
        onMouseDown: this.handleIndentSelect,
        title: Gi.A.getToolTipByKey("increase-indent")
      }), c().createElement("i", {
        className: s,
        onMouseDown: this.handleOutdentSelect,
        title: Gi.A.getToolTipByKey("decrease-indent")
      }))];
    }
    renderSectionItem(e) {
      var t;
      if ("root" == this.props.renderRequestType) return c().createElement(ls, {
        fixedContextHandler: this.props.fixedContextHandler,
        useFixedPosition: !0,
        onSaveSectionAsDefault: this.props.triggers.onSaveSectionAsDefault,
        onOpenAdvancedSettings: () => {
          this.setState({
            showSectionAdvancedSettings: !0
          });
        },
        onPageSectionChange: this.handleApplyPageSection,
        onSectionSelect: this.handleSectionSelect,
        style: {
          display: "inline-block"
        },
        disabled: "list-bullet" == this.props.renderRequestType,
        selected: "section" == e
      });
    }
    getGroupSettingClass() {
      return ts.A.addMobileTabletClssIfRequired("setting-group-options");
    }
    renderSetting() {
      return !this.props.selected && this.lastRenderSettings || (this.lastRenderSettings = c().createElement("detail", {
        className: "tw:flex tw:mt-[8px]"
      }, this.renderAlignOptions(), this.renderListItemIndentSetting(), this.renderMoreSettings())), this.lastRenderSettings;
    }
    renderMoreSettings() {
      return [c().createElement("v-separator", {
        class: to,
        key: "0"
      }), c().createElement(Qr.A, {
        className: "test-line-more-options",
        key: "1",
        containerStyle: {
          width: 220
        },
        caret: !1,
        label: "...",
        style: {
          marginLeft: 4,
          color: "var(--ui-text-muted, gray)",
          fill: "var(--ui-text-muted, gray)"
        },
        labelStyle: {
          paddingTop: 0,
          lineHeight: "1.5em",
          paddingBottom: 1
        },
        items: this.moreActionItems,
        onItemSelect: this.handleMoreSettingsSelect
      })];
    }
    renderUnsupportJustificationText() {
      return Xe.A.supportTextJustify() ? null : c().createElement("div", {
        className: "unsupport-justification-text tool-bar-text",
        style: {
          position: "absolute",
          top: "100%",
          margintop: 5,
          color: "orange",
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          fontSize: 13,
          padding: 3,
          width: 130
        }
      }, "Justification is only supported in Chrome");
    }
    renderAlignOptions() {
      var e = this.props.renderRequestType,
        t = "root" == e || "table" == e || "inside-diagram-text" == e || "text-mode-grouping" == e || "boxed-container" == e || "underline-section" == e || "at-caption" == e || "latex-table" == e;
      t = t || this.props.lineInfo.allowAlign;
      var r = k.A.getLineAlign(this.props.lineInfo, "left");
      return c().createElement(ko, {
        className: this.getGroupSettingClass(),
        align: r,
        canAlign: t,
        justifySupported: Xe.A.supportTextJustify(),
        justifyHint: this.renderUnsupportJustificationText(),
        onLeftMouseDown: this.handleAlignLeftSelect,
        onCenterMouseDown: this.handleAlignCenterSelect,
        onRightMouseDown: this.handleAlignRightSelect,
        onJustifyMouseDown: this.handleAlignJustifySelect
      });
    }
    renderDisabledLayer(e) {
      if (e) return c().createElement("disabled-layer", null);
    }
    renderSectionAdvancedSettings() {
      if (this.state.showSectionAdvancedSettings) return c().createElement(gs, {
        fixedContextHandler: this.props.fixedContextHandler,
        MathTypeClss: this.props.fixedContextHandler.getMtFuncs().getMathTypeClss(),
        pageSection: this.props.requestPageSection(),
        pageSettings: this.props.requestPageSettings(),
        onClose: e => {
          e && this.props.triggers.onPageSectionChange(e), this.setState({
            showSectionAdvancedSettings: !1
          });
        }
      });
    }
    render() {
      var e = this.props,
        t = e.selected,
        r = e.renderRequestType;
      return c().createElement("line-setting", {
        class: "tw:flex tw:relative tw:-mt-[1px]"
      }, this.renderSetting(), this.renderDisabledLayer(!t || "none" == r), this.renderSectionAdvancedSettings());
    }
  }
  var Cs = {
      width: "1.6em",
      display: "inline-block",
      verticalAlign: "-5px",
      marginRight: 5,
      marginBottom: -4
    },
    Ss = bs(bs({}, Cs), {}, {
      transform: "scaleX(-1)"
    });
  class As {
    constructor() {
      (0, n.A)(this, "orderDefaults", void 0), (0, n.A)(this, "unorderDefaults", void 0);
    }
    updateSettings(e) {
      var t, r, n, i;
      this.orderDefaults = null == e || null === (t = e.complexObject) || void 0 === t || null === (r = t.liDefaults) || void 0 === r ? void 0 : r.orders, this.unorderDefaults = null == e || null === (n = e.complexObject) || void 0 === n || null === (i = n.liDefaults) || void 0 === i ? void 0 : i.unorders;
    }
    getOrderDefaults() {
      return this.orderDefaults || "order";
    }
    getUnOrderDefaults() {
      return this.unorderDefaults || "unorder";
    }
  }
  class ws {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "runLaterObj", E.A.createLaterRunObject("latest", "a-little-while", !0)), (0, n.A)(this, "liDefaultsService", new As()), (0, n.A)(this, "lineSettingTriggers", void 0), (0, n.A)(this, "nullLineInfo", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "isDisabled", !1), (0, n.A)(this, "handleSaveSectionAsDefault", () => this.target.raiseSaveSectionAsDefault()), (0, n.A)(this, "handleListItemDefaultChange", (e, t) => this.target.raiseListItemDefaultChange(e, t)), (0, n.A)(this, "handleResetNumbering", e => {
        var t = this.target,
          r = t.getController().setListItemResetIndex(t.getContainerModel(), e);
        t.handleResult(r);
      }), (0, n.A)(this, "handleLineHeightChange", e => {
        var t = this.target,
          r = t.getController().setLineStyle(t.getContainerModel(), "lineHeightEm", e);
        t.handleResult(r);
      }), (0, n.A)(this, "handleParagraphSpacingChange", e => {
        var t = this.target,
          r = t.getController().setLineStyle(t.getContainerModel(), "pSpacing", e);
        t.handleResult(r);
      }), (0, n.A)(this, "handlePageSectionChange", e => {
        this.target.setPageSection(e);
      }), (0, n.A)(this, "handleLineSetting", () => {
        this.deactivated || this.runLaterObj.later(this.handleLineSettingRunLaterFunc);
      }), (0, n.A)(this, "handleTextDirectionSelect", e => {
        var t = this.target,
          r = t.getController().setLineStyle(t.getContainerModel(), "textDirection", e);
        t.handleResult(r);
      }), (0, n.A)(this, "handleChangeCellAlign", e => {
        var t = this.target.getContainerModel();
        this.target.handleResult(this.target.getController().setTabularEditorsStyle(t, "align", e));
      }), (0, n.A)(this, "handleLineSettingRunLaterFunc", () => {
        if (!this.target.unMounted) {
          var e = this.target.getContainerModel();
          e.isToolbarBasic() || e.isDiagramSelected || (this.isNoSelect() || this.isDisabled ? this.requestRenderDisabledLineSettings(e) : !e.isCursorControlled || e.isListBulletSelected() ? (this.requestRenderTableToolbar(e), this.requestRenderLineSettings(e)) : this.requestRenderDisabledLineSettings(e));
        }
      }), (0, n.A)(this, "handleRequestListItemDefaults", () => ({
        orders: this.liDefaultsService.getOrderDefaults(),
        unorders: this.liDefaultsService.getUnOrderDefaults()
      })), (0, n.A)(this, "getPageSection", () => this.target.getFixedContextHandler().getMtFuncs().getPageSettings().pageSection || {}), (0, n.A)(this, "getPageSettings", () => this.target.getFixedContextHandler().getMtFuncs().getPageSettings()), (0, n.A)(this, "handleSpecialSymbolSelected", e => {
        if (e) {
          var t = this.target,
            r = t.getController().setBulletLine(t.getContainerModel(), e);
          t.handleResult(r);
        }
      }), (0, n.A)(this, "handleSingleBulletSelect", e => {
        var t = this.target;
        if ("More" != e) {
          var r = t.getController().setBulletLine(t.getContainerModel(), e);
          t.handleResult(r);
        } else t.showSpecialSymbolDialog("single", this.handleSpecialSymbolSelected);
      }), (0, n.A)(this, "onSetLineList", e => {
        var t = this.target,
          r;
        r = "order" == e ? t.getController().handleSetLineListType(t.getContainerModel(), this.liDefaultsService.getOrderDefaults(), !0) : "unorder" == e ? t.getController().handleSetLineListType(t.getContainerModel(), this.liDefaultsService.getUnOrderDefaults(), !0) : t.getController().setLineStyle(t.getContainerModel(), "listType", e), t.handleResult(r);
      }), (0, n.A)(this, "onChangeLineAlign", e => {
        var t = this.target,
          r = t.getController().changeLineAlignment(t.getContainerModel(), e);
        t.handleResult(r);
      }), (0, n.A)(this, "onIndentLine", () => {
        var e = this.target,
          t = e.getController().indentLine(e.getContainerModel());
        e.handleResult(t);
      }), (0, n.A)(this, "onOutdentLine", () => {
        var e = this.target,
          t = e.getController().outdentLine(e.getContainerModel());
        e.handleResult(t);
      }), this.target = e, this.lineSettingTriggers = {
        changeLineAlign: this.onChangeLineAlign,
        setLineList: this.onSetLineList,
        onSingleBulletSelect: this.handleSingleBulletSelect,
        indent: this.onIndentLine,
        outdent: this.onOutdentLine,
        changeCellAlign: this.handleChangeCellAlign,
        onTextDirectionSelect: this.handleTextDirectionSelect,
        onPageSectionChange: this.handlePageSectionChange,
        onLineHeightChange: this.handleLineHeightChange,
        onResetNumbering: this.handleResetNumbering,
        onListItemDefaultChange: this.handleListItemDefaultChange,
        onSaveSectionAsDefault: this.handleSaveSectionAsDefault,
        onParagraphSpacingChange: this.handleParagraphSpacingChange
      }, this.nullLineInfo = {
        align: "left",
        indentIndex: 0,
        listType: "none",
        maxIndentIndex: k.A.getMaxLineIndentLevel(),
        lineHeight: void 0,
        listItemResetIndex: void 0,
        allowAlign: !1,
        pSpacing: void 0
      };
    }
    getLiDefaultsProvider() {
      return this.liDefaultsService;
    }
    updateSettings(e) {
      this.liDefaultsService.updateSettings(e);
    }
    setDisabled(e) {
      this.isDisabled = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    requestRenderTableToolbar(e) {
      e.isTableSelected() && this.target.requestRenderToolBarComponent({
        type: "add",
        key: "TableSettings",
        component: c().createElement(Eo, {
          onRequestEditorContainer: this.target.getContainerModel
        })
      });
    }
    getSelectedLine() {
      var e = this.target.state.mainModel,
        t = this.target.getSafeSelected();
      return t ? Ze.A.getSelectedLineFromRoot(e, t) : {
        blocks: []
      };
    }
    getSelectedCell() {
      var e = this.target.state.mainModel,
        t = this.target.getSafeSelected(),
        r = Ze.A.findTabularBlock(e, t);
      return r ? r.elements[Ze.A.findLeafParentSelected(t).key] : null;
    }
    getLineInfoWithAlignNoIndent(e) {
      var t;
      return {
        listType: "none",
        maxIndentIndex: k.A.getMaxIndentLevelByListType("none"),
        align: k.A.getLineStyle(e, "align", "left"),
        indentIndex: k.A.getLineTempOrStoreIndent(e, 0),
        lineHeight: k.A.getLineStyle(e, "lineHeightEm", void 0),
        listItemResetIndex: void 0,
        allowAlign: !0,
        pSpacing: null === (t = e.style) || void 0 === t ? void 0 : t.pSpacing
      };
    }
    getFullLineInfo(e, t) {
      var r,
        n = k.A.getLineStyle(t, "listType"),
        i;
      return [{
        listType: n,
        maxIndentIndex: k.A.getMaxIndentLevelByListType(n),
        align: k.A.getLineStyle(t, "align", "left"),
        indentIndex: k.A.getLineTempOrStoreIndent(t, 0),
        lineHeight: k.A.getLineStyle(t, "lineHeightEm", void 0),
        listItemResetIndex: k.A.getLineStyle(t, "listItemResetIndex", void 0),
        allowAlign: !0,
        pSpacing: null === (r = t.style) || void 0 === r ? void 0 : r.pSpacing
      }, e];
    }
    requestRenderLineSettings(e) {
      var t = "none",
        r = this.nullLineInfo,
        n = this.getSelectedLine();
      if (e.isListBulletSelected()) t = "list-bullet";else if (e.isRootLineSelected()) {
        var i = this.getFullLineInfo("root", n),
          o = (0, Wt.A)(i, 2);
        r = o[0], t = o[1];
      } else if (e.isTableSelected()) {
        var s = this.getFullLineInfo("table", n),
          a = (0, Wt.A)(s, 2);
        r = a[0], t = a[1];
      } else if (e.isInsideLatexTable()) {
        var l = this.getSelectedCell();
        l && (t = "latex-table", r = {
          listType: "none",
          maxIndentIndex: k.A.getMaxIndentLevelByListType("none"),
          align: k.A.getLatexTableCellStyle(l, "align"),
          indentIndex: 0,
          lineHeight: void 0,
          listItemResetIndex: void 0,
          allowAlign: !0,
          pSpacing: void 0
        });
      } else if (e.isAtTextModeGroup()) {
        var d = this.getFullLineInfo("text-mode-grouping", n),
          h = (0, Wt.A)(d, 2);
        r = h[0], t = h[1];
      } else if (e.isAtBoxedContainer()) {
        var p = this.getFullLineInfo("boxed-container", n),
          u = (0, Wt.A)(p, 2);
        r = u[0], t = u[1];
      } else e.isAtUnderlineSection() ? (t = "underline-section", r = this.getLineInfoWithAlignNoIndent(n)) : e.isAtCaption() ? (t = "at-caption", r = this.getLineInfoWithAlignNoIndent(n)) : e.isInsideDiagram() && e.isTextModeSelected() ? (t = "inside-diagram-text", r = this.getLineInfoWithAlignNoIndent(n)) : (e.isRestrictedTextMode() || e.isInsideTheorem()) && (t = "restricted-text", r = this.getLineInfoWithAlignNoIndent(n));
      (e.isInsideRawLatex() || e.isAtSubSuperScript()) && (r.allowAlign = !1), this.target.requestRenderToolBarComponent({
        type: "add",
        key: "LineSettings",
        component: c().createElement(xs, {
          requestPageSection: this.getPageSection,
          requestPageSettings: this.getPageSettings,
          fixedContextHandler: this.target.getFixedContextHandler(),
          renderRequestType: t,
          editorModel: this.target.state.mainModel,
          selected: this.target.getSafeSelected(),
          triggers: this.lineSettingTriggers,
          lineInfo: r,
          styleCascadeContext: e.getStyleCascadeContext(),
          requestListItemDefaults: this.handleRequestListItemDefaults
        })
      });
    }
    requestRenderDisabledLineSettings(e) {
      this.target.requestRenderToolBarComponent({
        type: "add",
        key: "LineSettings",
        component: c().createElement(xs, {
          requestPageSection: this.getPageSection,
          requestPageSettings: this.getPageSettings,
          fixedContextHandler: this.target.getFixedContextHandler(),
          renderRequestType: "none",
          editorModel: this.target.state.mainModel,
          selected: this.target.getSafeSelected(),
          triggers: this.lineSettingTriggers,
          lineInfo: this.nullLineInfo,
          styleCascadeContext: e.getStyleCascadeContext(),
          requestListItemDefaults: this.handleRequestListItemDefaults
        })
      });
    }
    isNoSelect() {
      return !this.target.getSafeSelected();
    }
  }
  class Es {
    constructor(e) {
      (0, n.A)(this, "cursorHiddenOnLostFocus", void 0), (0, n.A)(this, "cursorDisplayChanged", void 0), (0, n.A)(this, "focusStateChanged", void 0), (0, n.A)(this, "timeoutId", void 0), (0, n.A)(this, "isShow", !1), (0, n.A)(this, "cursorDisplayType", "hide"), (0, n.A)(this, "focusState", "completelyLostFocus"), (0, n.A)(this, "inputFocus", !1), (0, n.A)(this, "mathTypeFocus", !1), (0, n.A)(this, "cursorControlled", !1), (0, n.A)(this, "batchFuncs", []), (0, n.A)(this, "batchOperationDelayRunObj", E.A.createLaterRunObject("first-request", 10)), (0, n.A)(this, "tempHide", !1), (0, n.A)(this, "batchOperationDelayRunFunc", () => {
        this.batchFuncs.forEach(e => e()), this.batchFuncs = [];
      }), (0, n.A)(this, "refreshBlink", () => {
        this.cursorDisplayChanged && this.cursorDisplayChanged(this.cursorDisplayType);
      }), this.cursorHiddenOnLostFocus = e;
    }
    isDocFocus() {
      return this.inputFocus || this.mathTypeFocus;
    }
    isInputFocus() {
      return this.inputFocus;
    }
    setInputFocus(e) {
      e && this.tempHide && (this.tempHide = !1), this.inputFocus = e, this.refreshBlinkIfRequire();
    }
    setMathTypeFocus(e) {
      e && this.tempHide && (this.tempHide = !1), this.mathTypeFocus = e, this.refreshBlinkIfRequire();
    }
    temporaryHideCursor() {
      this.tempHide = !0, this.refreshBlinkIfRequire();
    }
    setCursorControlled(e) {
      this.cursorControlled = e, this.refreshBlinkIfRequire();
    }
    inferDisplayType() {
      return this.tempHide ? "hide" : this.cursorControlled ? "hide-by-controlled" : this.inputFocus ? this.isShow ? "show" : "hide" : this.cursorHiddenOnLostFocus ? "hide" : "deactivated";
    }
    inferFocusState() {
      return !this.inputFocus && this.mathTypeFocus ? "lostInputFocus" : this.inputFocus ? "focus" : "completelyLostFocus";
    }
    refreshBlinkIfRequire(e) {
      var t = this.inferDisplayType(),
        r = this.inferFocusState();
      t != this.cursorDisplayType && (this.cursorDisplayType = t, this.batchOperation(this.refreshBlink)), r != this.focusState && (this.focusState = r, this.batchOperation(() => {
        this.focusStateChanged(this.focusState, this.cursorDisplayType);
      })), e && this.batchOperation(() => {
        this.stopBlink(), this.startBlink();
      });
    }
    batchOperation(e) {
      this.batchFuncs.push(e), this.batchOperationDelayRunObj.later(this.batchOperationDelayRunFunc);
    }
    startBlink() {
      this.timeoutId = setTimeout(() => {
        this.isShow = !this.isShow, this.refreshBlinkIfRequire(), this.startBlink();
      }, 500);
    }
    clear() {
      this.stopBlink();
    }
    stopBlink() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }
    requestShow() {
      this.tempHide && (this.tempHide = !1), this.isShow = !0, this.refreshBlinkIfRequire(!0);
    }
  }
  function ks(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Os(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ks(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ds {
    calculateGeoPos(e) {
      var t = e.line,
        r = e.charIndex,
        n = e.requestGeoPos,
        i = e.prevPos,
        o = e.dzContainer;
      if (S.A.isEmptyLine(t)) {
        var s = V.l.inferCursorHPositionEmptyLine(t, o),
          a = this.resolveTop(s),
          l = (0, Wt.A)(a, 2),
          c = l[0],
          d = l[1],
          h = S.A.getEmptyBlock(t),
          p;
        return {
          cursor: {
            pos: {
              left: q.T.getBCRect(h, o).left,
              top: c,
              zc: o
            },
            positionType: d,
            attachElement: t
          },
          bidiInfo: {
            type: "empty-line"
          }
        };
      }
      var u = S.A.findBlocks(t),
        g = W.z.extract(t, u, o),
        m = ye.S.extractTuple(t, u, r, o),
        f = be.T.extractVLine(m, g, o),
        y = null != n ? n : null == i ? void 0 : i.pos,
        v = this.resolveFromIVLine(f, y, g, t, o),
        b;
      if ("change-direction" == f.type) {
        var x = this.resolveClosestVLineFromVCursor(f.subVCursor, y, g);
        b = this.resolveSingleCursor(x, f.subVCursor.attachedElement, g, t, o);
      } else if ("same-dir-break" == f.type) {
        var C = this.resolveClosestVLineFromVCursor(f.subVCursor, y, g);
        b = this.resolveSingleCursor(C, f.subVCursor.attachedElement, g, t, o);
      } else "single" == f.type && f.subVLine && (b = this.resolveSingleCursor(f.subVLine, f.vcursor.attachedElement, g, t, o));
      return {
        cursor: v,
        bidiInfo: {
          type: "normal",
          ivline: f,
          tuple: m
        },
        subCursor: b
      };
    }
    resolveFromIVLine(e, t, r, n, i) {
      if ("left-overlaped" == e.type) {
        var o = this.resolveSingleCursor(e.vcursor.vline, e.vcursor.attachedElement, r, n, i);
        return Os(Os({}, o), {}, {
          pos: Os(Os({}, o.pos), {}, {
            top: o.pos.top - S.A.getComputedFontSize(e.vcursor.attachedElement) / 2
          })
        });
      }
      var s = this.resolveClosestVLineFromVCursor(e.vcursor, t, r);
      if ("line-wrap" == e.type && !e.vcursor.edgeWrapVLine) {
        var a = this.resolveClosestVLineFromVCursor(e.altVCursor, t, r),
          l;
        return Ee.resolveClosestVLineFrom2VLines(s, a, t, r) == a ? this.resolveSingleCursor(a, e.altVCursor.attachedElement, r, n, i) : this.resolveSingleCursor(s, e.vcursor.attachedElement, r, n, i);
      }
      return this.resolveSingleCursor(s, e.vcursor.attachedElement, r, n, i);
    }
    resolveSingleCursor(e, t, r, n, i) {
      var o = V.l.findWLine(r, e),
        s = V.l.inferCursorHPosition(n, o, t),
        a = this.resolveTop(s),
        l = (0, Wt.A)(a, 2),
        c = l[0],
        d = l[1];
      return {
        pos: {
          left: e.left,
          top: c,
          zc: i
        },
        positionType: d,
        attachElement: t
      };
    }
    resolveTop(e) {
      switch (e.type) {
        case "base-line-block":
          return [e.baselineBlockRect.bottom, "baseline"];
        case "edit-area-block":
          return [(e.rect.top + e.rect.bottom) / 2, "middle"];
        case "non-char-block-intersection":
          return [e.bottom, "bottom"];
        case "rect-block":
          return [(e.rb.rect.top + e.rb.rect.bottom) / 2, "middle"];
        case "empty-block":
          return [(e.emptyBlockRect.top + e.emptyBlockRect.bottom) / 2, "middle"];
        case "custom-baseline":
          return [e.info.top, e.info.positionType];
      }
    }
    resolveClosestVLineFromVCursor(e, t, r) {
      return Ee.resolveClosestVLineFrom2VLines(e.vline, e.edgeWrapVLine, t, r);
    }
  }
  var Ps = new Ds();
  class Ms {
    buildFullCursorInformation(e, t, r, n, i) {
      return S.A.cacheGetElementRectWithin(() => {
        try {
          n = n || {};
          var o = Ze.A.findLeafSelected(t),
            s = "closest" == i ? "closest" : "null",
            a = n.htmlEditor;
          if (!a) {
            var l = kt.getSelectedEditorWithLeafSelected(e, t, s);
            if (!l) return "not-matched";
            o != l[1] && (o = l[1]), a = l[0];
          }
          if (!a) return "not-matched";
          var c = n.htmLine;
          if (!c && S.A.isEditAreaBlock(a) && (c = a), null == c && (c = S.A.findLineByIndex(a, o.lineIndex)), null == c) return "not-matched";
          var d = u.nB(a, "text-mode") || u.nB(a, "root-editor"),
            h = Ps.calculateGeoPos({
              line: c,
              charIndex: o.charIndex,
              requestGeoPos: n.requestGeoPos,
              prevPos: n.prevPos,
              dzContainer: r
            }),
            p;
          return h ? (h.subCursor && (p = {
            relativeGeoPosition: h.subCursor.pos,
            attachGeoPosElement: h.subCursor.attachElement,
            positionType: h.subCursor.positionType
          }), {
            lineIndex: o.lineIndex,
            charIndex: o.charIndex,
            editor: a,
            line: c,
            isTextMode: d,
            relativeGeoPosition: h.cursor.pos,
            attachGeoPosElement: h.cursor.attachElement,
            positionType: h.cursor.positionType,
            subSCursor: p,
            maxRelativeXAxisPosition: this.calculateMaxXAxisPosition(n, h.cursor.pos),
            mathTypeElement: r.mtElement,
            direction: n.direction,
            bidiInfo: h.bidiInfo
          }) : "not-matched";
        } catch (e) {
          return console.error(e), "not-matched";
        }
      }, n.domElementRectCache);
    }
    calculateMaxXAxisPosition(e, t) {
      return e.maxRelativeXAxisPosition && ("up" == e.direction || "down" == e.direction) ? {
        left: e.maxRelativeXAxisPosition.left,
        top: t.top,
        zc: t.zc
      } : t;
    }
  }
  const Is = new Ms();
  class Ts {
    drawRemote(e, t) {
      var r = e.relativeGeoPosition,
        n = S.A.getComputedFontSize(e.attachGeoPosElement),
        i = this.calculateTop(e, n, !0);
      return {
        height: n,
        left: r.left - 1,
        top: i,
        borderColor: t.color
      };
    }
    draw(e, t, r) {
      var n = this.drawWithSCursor(e, t, r),
        i = e.subSCursor && this.drawWithSCursor(e.subSCursor, t, r);
      return {
        cursorStyle: n.cursorStyle,
        drawnPosition: n.drawnPosition,
        subCursorStyle: null == i ? void 0 : i.cursorStyle
      };
    }
    drawWithSCursor(e, t, r) {
      var n = e.relativeGeoPosition,
        i = S.A.getComputedFontSize(e.attachGeoPosElement),
        o = t.isTextModeSelected,
        s = this.calculateTop(e, i, t.isTextModeSelected),
        a = o ? "black" : "";
      t.insideCodeSectionDarkTheme ? a = "#e0e0e0" : t.insideCodeSection ? a = "black" : r && (a = o ? r.getTextCursorColor() : r.getMathCursorColor()), e.attachGeoPosElement && S.A.isSubSuperScript(e.attachGeoPosElement) && (i *= 1.45);
      var l = {
        left: n.left,
        top: s,
        cursorHeight: i
      };
      return {
        drawnPosition: l,
        cursorStyle: {
          height: i,
          transform: "translate(".concat(l.left - 1, "px,").concat(l.top, "px)"),
          borderColor: a
        }
      };
    }
    calculateTop(e, t, r) {
      var n = 0,
        i = e.relativeGeoPosition.top;
      return n = "middle" == e.positionType ? i - t / 2 : "bottom" == e.positionType ? i - (t - t / 15) : "baseline" == e.positionType ? i - t / 1.1 : i, n += r ? 0 : t / 15;
    }
  }
  const Ls = new Ts();
  function Rs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Bs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Rs(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Fs {
    constructor(e, t, r, i) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "focusHandler", void 0), (0, n.A)(this, "keyboardInputHandler", void 0), (0, n.A)(this, "mobileSupportHandler", void 0), (0, n.A)(this, "cursorPosition", void 0), (0, n.A)(this, "cursor", void 0), (0, n.A)(this, "subCursor", void 0), (0, n.A)(this, "cursorBlinkHandler", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "cursorsCache", void 0), (0, n.A)(this, "getCursorRef", e => {
        this.cursor = e, e && (this.cursor.style.visibility = "hidden");
      }), (0, n.A)(this, "getSubCursorRef", e => {
        this.subCursor = e, e && (this.subCursor.style.visibility = "hidden");
      }), (0, n.A)(this, "cursorStateChanged", e => {
        if (this.cursor) switch (e) {
          case "show":
            this.cursor.style.visibility = "", this.cursor.style.opacity = "1";
            break;
          case "hide":
          case "hide-by-controlled":
            this.cursor.style.visibility = "hidden";
            break;
          case "deactivated":
            this.cursor.style.visibility = "", this.cursor.style.opacity = "0.5";
        }
      }), (0, n.A)(this, "focusStateChanged", (e, t) => {
        var r = this.target.getSelection();
        if (this.target.props.onFocusStateChanged && this.target.props.onFocusStateChanged(e), ("focus" == e || "lostInputFocus" == e && "hide-by-controlled" == t) && this.target.closeAutoComplete(), r) switch (e) {
          case "focus":
          case "lostInputFocus":
            r.setActive(!0);
            break;
          case "completelyLostFocus":
            r.setActive(!1);
        }
      }), this.target = e, this.focusHandler = t, this.keyboardInputHandler = r, this.mobileSupportHandler = i, this.cursorBlinkHandler = new Es(this.target.props.cursorHiddenOnLostFocus), this.cursorBlinkHandler.cursorDisplayChanged = this.cursorStateChanged, this.cursorBlinkHandler.focusStateChanged = this.focusStateChanged;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    getSafeSelected() {
      return this.target.state.mainSelected;
    }
    cleanUp() {
      this.deactivated || this.cursorBlinkHandler.clear();
    }
    startBlink() {
      this.deactivated || this.cursorBlinkHandler.startBlink();
    }
    isDocFocus() {
      if (!this.deactivated) return this.cursorBlinkHandler.isDocFocus();
    }
    temporaryHideCursor() {
      this.deactivated || this.cursorBlinkHandler.temporaryHideCursor();
    }
    getCursorPosition() {
      return this.cursorPosition;
    }
    setCursorMathTypeFocus(e) {
      this.deactivated || this.cursorBlinkHandler.setMathTypeFocus(e);
    }
    setCursorInputFocus(e) {
      this.deactivated || this.cursorBlinkHandler.setInputFocus(e);
    }
    getCursorHTMLElement() {
      return this.cursor;
    }
    requestShowCursor() {
      this.deactivated || this.cursorBlinkHandler.requestShow();
    }
    getCursorGeoPosition() {
      if (!this.deactivated) return this.cursorPosition && this.cursorPosition.relativeGeoPosition;
    }
    extractPrevPos(e) {
      if (e) return {
        pos: q.T.geoPosFromCursor(e, "ori"),
        positionType: e.positionType
      };
    }
    calculateCursorPosition(e, t) {
      if (!this.deactivated) {
        var r = this.getSafeSelected();
        if (r && !this.target.isReadOnly()) {
          var n = Is.buildFullCursorInformation(this.target.getEditorHtmlElement(), r, this.target.getDocZoomContainer(), Bs(Bs({}, e.cursorContext), {}, {
            prevPos: this.extractPrevPos(this.cursorPosition),
            domElementRectCache: e.domElementRectCache
          }), "error");
          if (!t && "not-matched" == n) throw new Error("selected is not matched with its content");
          if ("not-matched" != n) {
            this.cursorPosition = n, e.isCursorControlled ? this.cursorBlinkHandler.setCursorControlled(!0) : this.cursorBlinkHandler.setCursorControlled(!1);
            var i = this.drawCursorPosition(this.cursorPosition, e);
            this.focusHandler.calculateHiddenInputPosition(i, e.isCursorControlled), this.keyboardInputHandler.calculateCompositionLineDrawing(i, this.cursorPosition), this.mobileSupportHandler.calculateSelectionMarkPosition(e.isCursorControlled, i);
          } else console.warn("selected is not matched with its content");
        }
      }
    }
    refreshCursorPosition(e) {
      this.calculateCursorPosition(e, !0);
    }
    renderCursor() {
      if (!this.deactivated) return this.cursorsCache || (this.cursorsCache = [c().createElement("span", {
        key: "mc",
        className: "text-cursor",
        ref: this.getCursorRef
      }), c().createElement("span", {
        key: "sc",
        className: "sub-text-cursor",
        ref: this.getSubCursorRef
      })]), this.cursorsCache;
    }
    drawCursorPosition(e, t) {
      var r = Ls.draw(e, t, this.target.getFixedContextHandler()),
        n = r.cursorStyle;
      if (u.hS(this.cursor, "height", n.height), u.hS(this.cursor, "transform", n.transform), u.hS(this.cursor, "borderColor", n.borderColor), r.subCursorStyle) {
        var i = r.subCursorStyle;
        u.hS(this.subCursor, "height", i.height), u.hS(this.subCursor, "transform", i.transform), u.hS(this.subCursor, "borderColor", i.borderColor), "hidden" == this.subCursor.style.visibility && (this.subCursor.style.visibility = "visible");
      } else "visible" == this.subCursor.style.visibility && (this.subCursor.style.visibility = "hidden");
      return r.drawnPosition;
    }
  }
  var js = r(24373);
  class _s {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "scrollElement", void 0), this.target = e;
    }
    scrollToPositionIfNotInView() {
      var e;
      if (!this.target.isReadOnly() && !this.target.isRestrictedView() && !this.target.isPreventScroll() && this.target.getSafeSelected() && !this.target.getContainerModel().preventScrollOnSelect()) {
        var t = this.getExpectedScrollPosition(),
          r = this.getScrollSelector();
        this.setScrollPosition(r, t, !1);
      }
    }
    scrollOnZoomChange() {
      var e = this.getExpectedScrollPosition(),
        t = this.getScrollSelector();
      this.setScrollPosition(t, e, !0);
    }
    setScrollPosition(e, t, r) {
      if (void 0 !== t.scrollLeft || void 0 !== t.scrollTop) {
        var n = u.Yt(e);
        u.C6(n), r ? (void 0 !== t.scrollLeft && u.m7(n, {
          scrollLeft: t.scrollLeft
        }), void 0 !== t.scrollTop && u.m7(n, {
          scrollTop: t.scrollTop
        })) : u.i0(n, t);
      }
    }
    getExpectedScrollPosition() {
      if (!this.scrollElement) return {};
      var e,
        t,
        r = S.A.getElementRect(this.target.getCursorHTMLElement()),
        n = r.top + r.height / 2,
        i = r.left,
        o = this.getExpecEditorTopPosition(),
        s = 40,
        a = this.getScrollInfo();
      if (n < o) e = a.scrollTop - (o - n);else {
        var l = u.vc(window, "height");
        n + s > l && (e = a.scrollTop + (s + n - l));
      }
      if (i < 40) t = a.scrollLeft - (40 - i);else {
        var c = u.vc(window, "width");
        i + 30 > c && (t = a.scrollLeft + (30 + i - c));
      }
      return {
        scrollTop: e,
        scrollLeft: t
      };
    }
    getScrollInfo() {
      var e = S.A.getElementRect(this.scrollElement);
      return {
        scrollTop: this.scrollElement.scrollTop,
        scrollLeft: this.scrollElement.scrollLeft,
        elementTop: e.top,
        elementLeft: e.left
      };
    }
    getExpecEditorTopPosition() {
      return Xe.A.isMobileOrTablet() ? 130 : 100;
    }
    getScrollSelector() {
      return js.A.getScrollSelector(this.scrollElement);
    }
    setScrollElement(e) {
      this.scrollElement && this.scrollElement !== e && u.Rq(this.scrollElement), this.scrollElement = e;
    }
    cleanUp() {
      u.Rq(this.getScrollSelector());
    }
  }
  var Ns = r(28187),
    zs = r.n(Ns);
  class Hs {
    constructor(e) {
      (0, n.A)(this, "itemFuncMap", void 0), this.itemFuncMap = e;
    }
    get(e) {
      return e.filter(e => "none" != e).map((e, t) => {
        switch (e) {
          case "paste":
            return c().createElement("ct-item", {
              key: e,
              class: "paste disabled",
              tabIndex: -1
            }, c().createElement("ct-icon", null, c().createElement("i", {
              className: "fa fa-clipboard",
              "aria-hidden": "true"
            })), c().createElement("ct-name", null, " Paste ", c().createElement("span", {
              style: {
                fontSize: 11
              }
            }, "(Please press ".concat(Gi.A.getToolTipByKey("paste"), ")"))));
          case "seperator":
            return c().createElement("ct-separator", {
              key: "key_".concat(t)
            });
          case "insert-row-above":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Insert Row Above"));
          case "insert-row-below":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Insert Row Below"));
          case "insert-column-left":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Insert Column on Left"));
          case "insert-column-right":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Insert Column on Right"));
          case "delete-row":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Delete Row"));
          case "delete-column":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Delete Column"));
          case "remove-table":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Delete Table"));
          case "unmerge-cells":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Unmerge Cells"));
          case "merge-cells":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Merge Cells"));
          case "group":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null, Zi.A.objectGroup({
              fill: "var(--ui-text-muted, gray)",
              width: 15,
              verticalAlign: -3
            })), c().createElement("ct-name", null, "Group"));
          case "ungroup":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null, Zi.A.objectUngroup({
              fill: "var(--ui-text-muted, gray)",
              width: 15,
              verticalAlign: -3
            })), c().createElement("ct-name", null, "Ungroup"));
          case "to-latex":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "To Latex"));
          case "from-latex":
            return c().createElement("ct-item", {
              key: e,
              onMouseDown: this.itemFuncMap[e]
            }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "From Latex"));
        }
      });
    }
  }
  class Ws extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showSub: !1,
        suggestionWords: [],
        disabled: !1
      }), (0, n.A)(this, "rootElement", void 0), (0, n.A)(this, "handleMouseEnter", () => {
        this.setState({
          showSub: !0
        });
      }), (0, n.A)(this, "handleMouseLeave", () => {
        this.setState({
          showSub: !1
        });
      });
    }
    componentDidMount() {
      this.rootElement = h().findDOMNode(this), E.A.next(() => {
        this.props.requestSpellCheckSuggestions().then(e => {
          e && e.suggestions ? this.setState({
            suggestionWords: e.suggestions,
            suggestionResult: e
          }) : this.setState({
            disabled: !0
          });
        });
      });
    }
    render() {
      return c().createElement("ct-item", {
        class: v()({
          disabled: this.state.disabled
        }),
        style: {
          position: "relative"
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Spell Check"), c().createElement("ct-more", {
        style: {
          position: "absolute",
          right: "1em",
          top: "0.5em"
        }
      }, c().createElement("i", {
        className: "fa fa-caret-right",
        "aria-hidden": "true"
      })), this.renderSubMenu());
    }
    handleWordClick(e) {
      if (this.state.suggestionResult) {
        var t = this.state.suggestionResult;
        this.props.replaceWordWith({
          originalWord: t.word,
          newWord: e,
          selected: t.selected,
          extendedSelected: t.extendedSelected
        });
      }
    }
    getSubMenuStyle() {
      if (!this.rootElement) return {
        position: "absolute",
        left: "100%",
        top: 0,
        marginLeft: -2
      };
      var e = S.A.getElementRect(this.rootElement),
        t = window.innerWidth,
        r = window.innerHeight - e.top,
        n = Math.min(r - 28 * (this.state.suggestionWords.length + 1) - 20, -5);
      return e.right > t - 150 ? {
        position: "absolute",
        left: "-100%",
        top: n,
        marginRight: -2
      } : {
        position: "absolute",
        left: "100%",
        top: n,
        marginLeft: -2
      };
    }
    getLimitedCharWord(e) {
      return e.length > 13 ? e.substring(0, 13) + "..." : e;
    }
    renderSubMenu() {
      if (this.state.showSub && this.state.suggestionWords && this.state.suggestionResult) return c().createElement("context-menu-container", {
        style: this.getSubMenuStyle()
      }, c().createElement("ct-item", {
        key: "ignore",
        onClick: () => this.props.ignoreWord(this.state.suggestionResult.word, !1)
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, 'Ignore "', c().createElement("span", {
        style: {
          fontWeight: "bold"
        }
      }, this.getLimitedCharWord(this.state.suggestionResult.word)), '" (current doc)')), c().createElement("ct-item", {
        key: "ignore-globally",
        onClick: () => this.props.ignoreWord(this.state.suggestionResult.word, !0)
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, 'Ignore "', c().createElement("span", {
        style: {
          fontWeight: "bold"
        }
      }, this.getLimitedCharWord(this.state.suggestionResult.word)), '" (globally)')), c().createElement("ct-separator", {
        key: "key_seperator"
      }), this.state.suggestionWords.map(e => c().createElement("ct-item", {
        key: e,
        onClick: () => this.handleWordClick(e)
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, e))));
    }
  }
  var Vs = r(61048);
  function Us(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function qs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Us(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Us(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Gs extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "ctIcon", {
        verticalAlign: "-6px",
        lineHeight: "8px",
        marginRight: "10px",
        marginBottom: -2
      }), (0, n.A)(this, "items", [{
        value: "top",
        display: "Top",
        icon: c().createElement("ct-icon", {
          style: qs(qs({}, this.ctIcon), {}, {
            transform: "rotate(-90deg)"
          })
        }, Zi.A.shapeRightAlign)
      }, {
        value: "middle",
        display: "Middle",
        icon: c().createElement("ct-icon", {
          style: qs(qs({}, this.ctIcon), {}, {
            transform: "rotate(-90deg) translate(2px,0px)"
          })
        }, Zi.A.shapeCenterAlign)
      }, {
        value: "bottom",
        display: "Bottom",
        icon: c().createElement("ct-icon", {
          style: qs(qs({}, this.ctIcon), {}, {
            transform: "rotate(90deg) translate(0px,1px)"
          })
        }, Zi.A.shapeRightAlign)
      }, {
        value: null,
        display: null
      }, {
        value: "left",
        display: "Left",
        icon: c().createElement("ct-icon", {
          style: qs(qs({}, this.ctIcon), {}, {
            transform: "scaleX(-1) translate(1px,0px)"
          })
        }, Zi.A.shapeRightAlign)
      }, {
        value: "center",
        display: "Center",
        icon: c().createElement("ct-icon", {
          style: this.ctIcon
        }, Zi.A.shapeCenterAlign)
      }, {
        value: "right",
        display: "Right",
        icon: c().createElement("ct-icon", {
          style: this.ctIcon
        }, Zi.A.shapeRightAlign)
      }, {
        value: null,
        display: null
      }, {
        value: "central",
        display: "Central",
        icon: c().createElement("ct-icon", {
          style: this.ctIcon
        }, Zi.A.shapeCentralAlign)
      }]);
    }
    render() {
      return c().createElement(Vs.A, {
        text: "Align",
        items: this.items,
        onItemSelect: this.props.onShapeAlignmentSelect
      });
    }
  }
  function Ks(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Zs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ks(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ks(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ys extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "ctIcon", {
        verticalAlign: "-6px",
        lineHeight: "8px",
        marginRight: "10px",
        marginBottom: -2
      }), (0, n.A)(this, "items", [{
        value: "distribute-horizontally",
        display: "Horizontally",
        icon: c().createElement("ct-icon", {
          style: this.ctIcon
        }, Zi.A.shapeDistributionHorizontally)
      }, {
        value: "distribute-vertically",
        display: "Vertically",
        icon: c().createElement("ct-icon", {
          style: Zs(Zs({}, this.ctIcon), {}, {
            transform: "rotate(-90deg) translate(2px,0)"
          })
        }, Zi.A.shapeDistributionHorizontally)
      }]), (0, n.A)(this, "handleShapeAlignment", e => {
        this.props.onShapeDistributionSelect(e);
      });
    }
    render() {
      return c().createElement(Vs.A, {
        text: "Distribute",
        items: this.items,
        onItemSelect: this.handleShapeAlignment
      });
    }
  }
  class Qs extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "iconStyle", {
        width: 13,
        fill: "var(--ui-text-muted, gray)",
        stroke: "var(--ui-text-muted, gray)",
        overflow: "visible",
        marginRight: 10,
        verticalAlign: -3
      }), (0, n.A)(this, "items", [{
        value: "unite",
        display: "Unite",
        icon: Zi.A.objectUnion(this.iconStyle)
      }, {
        value: "intersect",
        display: "Intersect",
        icon: Zi.A.objectIntersection(this.iconStyle)
      }, {
        value: "subtract",
        display: "Subtract",
        icon: Zi.A.objectSubtraction(this.iconStyle)
      }, {
        value: "exclude",
        display: "Exclude",
        icon: Zi.A.objectExclusion(this.iconStyle)
      }, {
        value: "divide",
        display: "Divide",
        icon: Zi.A.objectDivision(this.iconStyle)
      }]), (0, n.A)(this, "handleShapeCombination", e => {
        this.props.onShapeCombinationSelect(e);
      });
    }
    render() {
      return c().createElement(Vs.A, {
        icon: Zi.A.objectIntersection(this.iconStyle),
        text: "Combine",
        itemStyle: {
          padding: "7px 12px"
        },
        items: this.items,
        onItemSelect: this.handleShapeCombination
      });
    }
  }
  class Js extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRotateSelect", e => {
        this.props.onRotateSelect(e);
      });
    }
    render() {
      var e = [{
        value: "clockwise",
        display: "Rotate Clockwise 90"
      }, {
        value: "couter-clockwise",
        display: "Rotate Counter-Clockwise 90"
      }, {
        value: "flip-horizontally",
        display: "Flip Horizontally"
      }, {
        value: "flip-vertically",
        display: "Flip Vertically"
      }, {
        value: void 0,
        display: void 0
      }, {
        value: "show-rotate-around",
        display: "Show Rotate/Flip Around Point",
        disabled: this.props.aroundPointReady
      }, {
        value: "flip-to-line-through-point",
        display: "Flip To Point",
        disabled: !this.props.aroundPointReady
      }, {
        value: "flip-to-point",
        display: "Reflect To Point",
        disabled: !this.props.aroundPointReady
      }];
      return c().createElement(Vs.A, {
        containerWidth: 230,
        text: "Rotate",
        items: e,
        onItemSelect: this.handleRotateSelect
      });
    }
  }
  class Xs extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleArrangeSelect", e => {
        this.props.onArrange(e);
      });
    }
    render() {
      var e = [{
          value: "front",
          display: "Bring to Front"
        }, {
          value: "forward",
          display: "Bring Forward"
        }, {
          value: "backward",
          display: "Send Backward"
        }, {
          value: "back",
          display: "Send to Back"
        }],
        t = {
          width: 20,
          height: 15,
          float: "left"
        };
      return c().createElement(Vs.A, {
        icon: c().createElement("svg", {
          style: t
        }, c().createElement("rect", {
          x: "2",
          y: "3",
          width: "9",
          height: "7",
          style: {
            stroke: "var(--ui-text-muted, gray)",
            fill: "var(--ui-text-disabled, #c1c0c0)"
          }
        }), c().createElement("rect", {
          x: "7",
          y: "7",
          width: "9",
          height: "7",
          style: {
            stroke: "var(--ui-text-muted, gray)",
            fill: "var(--ui-on-accent, #f9f8f8)"
          }
        })),
        text: "Arrange",
        items: e,
        onItemSelect: this.handleArrangeSelect
      });
    }
  }
  var $s = r(85576),
    ea = r(40383);
  function ta(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ra(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ta(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ta(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class na {
    isTheSameCtx(e, t) {
      return !e || P()(e, t);
    }
    capture(e, t) {
      var r,
        n,
        i,
        o,
        s,
        a = {
          spellcheck: t.supportSpellCheck && !e.isInSelection() && !e.isCursorControlled,
          selectedControlled: t.selected && t.selected.controlled,
          readOnly: t.readOnly,
          isMathModeSelected: e.isMathModeSelected(),
          blockInfo: s = e.selectedBlockModel ? e.selectedBlockModel.type ? "single" == e.selectedBlockModel.type ? "#single" : "#composite-".concat(e.selectedBlockModel.text) : "#text" : "#empty"
        };
      if (e.findBinomSelected()) return ra({
        type: "default",
        symbolCtx: "binom"
      }, a);
      if (e.isPlotCasesSelected()) return ra({
        type: "default",
        symbolCtx: "plot-cases"
      }, a);
      if (e.isTabularCellsSelected()) return ra({
        type: "default",
        symbolCtx: "tab-cells"
      }, a);
      if (e.isAtTabularCell() && !e.isCursorControlled) return ra({
        type: "default",
        symbolCtx: "at-tabular-cell-controlled"
      }, a);
      if (e.isImageContainerSelected || e.isInlineImageSelected) return ra({
        type: "default",
        symbolCtx: "image"
      }, a);
      if (e.isDiagramSelected) {
        var l = t.requestSelectedDiagramInstance(),
          c = l && l.allowRequestAction("rotate-flip"),
          d = l && l.allowRequestAction("arrange"),
          h = Yt.A.isAtleast3EntitiesSelected(e.leafCursorSelected);
        return Yt.A.isMultipleEntitiesSelected(e.leafCursorSelected) ? ra({
          type: "diagram",
          selectedType: "multiple-entities",
          allowRotateFlip: c,
          allowArrange: d,
          atLeast3EntitiesSelected: h
        }, a) : Yt.A.isGroupEntitySelected(e.leafCursorSelected, e.selectedBlockModel) ? ra({
          type: "diagram",
          selectedType: "group-entity",
          allowRotateFlip: c,
          allowArrange: d,
          atLeast3EntitiesSelected: h
        }, a) : ra({
          type: "diagram",
          selectedType: "default",
          allowRotateFlip: c,
          allowArrange: d,
          atLeast3EntitiesSelected: h
        }, a);
      }
      return ra({
        type: "default",
        symbolCtx: "default"
      }, a);
    }
  }
  var ia = new na();
  class oa extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "clipboard", null), (0, n.A)(this, "componentUnmounted", !1), (0, n.A)(this, "focus", void 0), (0, n.A)(this, "lastCapturedState", void 0), (0, n.A)(this, "exportLatex", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        E.A.next(() => {
          this.props.onClose();
        }), this.props.requestExportLatex();
      }), (0, n.A)(this, "importLatex", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        E.A.next(() => {
          this.props.onClose();
        }), this.props.requestImportLatex();
      }), (0, n.A)(this, "onBlur", () => {
        console.log(new Date().getMilliseconds()), this.focus = !1, console.log("on blur-------------------context"), E.A.waitALitteWhile(() => {
          this.componentUnmounted || this.focus || (console.log("close context-menu"), this.props.onClose());
        });
      }), (0, n.A)(this, "onFocus", () => {
        setTimeout(() => {
          console.log(new Date().getMilliseconds()), console.log("on focus-------------------context"), this.focus = !0;
        }, 50);
      }), (0, n.A)(this, "handleInsertRowBelow", () => {
        var e;
        if (!this.checkContextValid()) return this.props.onClose(!0);
        null === (e = this.findTabularReactInstance()) || void 0 === e || e.insertRowBelow();
      }), (0, n.A)(this, "handleInsertRowAbove", () => {
        var e;
        if (!this.checkContextValid()) return this.props.onClose(!0);
        null === (e = this.findTabularReactInstance()) || void 0 === e || e.insertRowAbove();
      }), (0, n.A)(this, "handleInsertNewColumnOnLeft", () => {
        var e;
        if (!this.checkContextValid()) return this.props.onClose(!0);
        null === (e = this.findTabularReactInstance()) || void 0 === e || e.insertColumnOnLeft();
      }), (0, n.A)(this, "handleInsertNewColumnOnRight", () => {
        var e;
        if (!this.checkContextValid()) return this.props.onClose(!0);
        null === (e = this.findTabularReactInstance()) || void 0 === e || e.insertColumnOnRight();
      }), (0, n.A)(this, "handleRemoveCurrentColumn", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        var e = this.props.requestContainerModel(),
          t = null,
          r,
          n;
        e.isTabularCellsSelected() ? t = null === (r = this.findTabularReactInstance()) || void 0 === r ? void 0 : r.removeCurrentColumn(e.getTabularCellKeysSelected()) : t = null === (n = this.findTabularReactInstance()) || void 0 === n ? void 0 : n.removeCurrentColumn();
        t && t.removeSelf && this.props.requestRemoveTabular();
      }), (0, n.A)(this, "handleRemoveTable", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.props.requestRemoveTabular();
      }), (0, n.A)(this, "handleRemoveCurrentRow", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        var e = this.props.requestContainerModel(),
          t = null,
          r,
          n;
        e.isTabularCellsSelected() ? t = null === (r = this.findTabularReactInstance()) || void 0 === r ? void 0 : r.removeCurrentRow(e.getTabularCellKeysSelected()) : t = null === (n = this.findTabularReactInstance()) || void 0 === n ? void 0 : n.removeCurrentRow();
        t && t.removeSelf && this.props.requestRemoveTabular();
      }), (0, n.A)(this, "handleMergeCells", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.props.requestMergeCells();
      }), (0, n.A)(this, "handleUnmergeCells", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.props.requestUnmergeCells();
      }), (0, n.A)(this, "handleDiagramGroup", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        "diagram" == this.props.requestContainerModel().oneMode() ? u.Yf(".dg-full-view .btn-diagram-group", "click") : u.Yf(".btn-diagram-group", "click");
      }), (0, n.A)(this, "handleDiagramUngroup", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        "diagram" == this.props.requestContainerModel().oneMode() ? u.Yf(".dg-full-view .btn-diagram-ungroup", "click") : u.Yf(".btn-diagram-ungroup", "click");
      }), (0, n.A)(this, "handleCopyAsImage", () => {}), (0, n.A)(this, "handleIgnoreWord", (e, t) => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.props.ignoreWord(e, t), E.A.next(() => this.props.onClose());
      }), (0, n.A)(this, "handleShapeAlignment", e => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.callDiagramWith(t => t.alignShapes(e));
      }), (0, n.A)(this, "handleShapeCombination", e => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.callDiagramWith(t => t.combine(e));
      }), (0, n.A)(this, "handleRotateSelect", e => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.callDiagramWith(t => t.rotateByRequest(e));
      }), (0, n.A)(this, "handleArrangeSelect", e => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        this.callDiagramWith(t => t.arrangeRequest(e));
      }), (0, n.A)(this, "handleCopyImageToClipboard", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        var e,
          t = this.props.requestContainerModel().selectedBlockModel;
        t.url && Ci.A.getService().copyImageToClipboardRequest(t.url), this.props.onClose();
      }), (0, n.A)(this, "handleDownloadImage", () => {
        if (!this.checkContextValid()) return this.props.onClose(!0);
        var e,
          t = this.props.requestContainerModel().selectedBlockModel;
        t.url && Ci.A.getService().downloadImageRequest(t.url), this.props.onClose();
      }), this.clipboard = null, this.componentUnmounted = !1;
    }
    registerClipboard() {
      this.clipboard || !1 !== this.props.info.touchRelease && (this.clipboard = new (zs())("context-menu-container ct-item.clipboard", {
        text: e => {
          if (this.checkContextValid()) {
            if (E.A.waitABit(() => {
              this.props.onClose();
            }), u.nB(e, "copy")) return console.log("----------copy----------", e), this.props.requestCopy() || void 0;
            if (u.nB(e, "copy-text-only") && !u.nB(e, "disabled")) return console.log("----------copy-text-only----------", e), this.props.requestCopyTextOnly() || void 0;
            if (u.nB(e, "copy-plain-text-latex") && !u.nB(e, "disabled")) {
              console.log("----------copy-plain-text-latex----------", e);
              var t = this.props.requestCopyPlainTextLatex() || void 0;
              return Xe.A.isTestEnv() && (window.lastCopyPlainTextLatex = t), t;
            }
            if (u.nB(e, "copy-latex") && !u.nB(e, "disabled")) {
              console.log("----------copy-latex----------", e);
              var r = this.props.requestCopyLatex(!1) || void 0;
              return Xe.A.isTestEnv() && (window.lastCopyLatex = r), r;
            }
            if (u.nB(e, "copy-latex-ignore-space") && !u.nB(e, "disabled")) {
              console.log("----------copy-latex----------", e);
              var n = this.props.requestCopyLatex(!0) || void 0;
              return Xe.A.isTestEnv() && (window.lastCopyLatex = n), n;
            }
            return u.nB(e, "cut") ? (console.log("----------cut----------", e), this.props.requestCut() || void 0) : void 0;
          }
          this.props.onClose(!0);
        }
      }));
    }
    componentDidMount() {
      this.registerClipboard(), !1 !== this.props.info.touchRelease && E.A.waitALitteWhile(() => {
        var e;
        this.componentUnmounted || h().findDOMNode(this).focus();
      });
    }
    componentDidUpdate() {
      this.registerClipboard(), !0 === this.props.info.touchRelease && E.A.waitALitteWhile(() => {
        var e;
        this.componentUnmounted || h().findDOMNode(this).focus();
      });
    }
    componentWillUnmount() {
      this.componentUnmounted = !0, this.clipboard && this.clipboard.destroy();
    }
    findTabularReactInstance() {
      return S.A.findTabularReactInstance(this.props.requestContainerModel().cursorPos);
    }
    nop() {
      console.log("call nop");
    }
    wrapMouseDown(e) {
      return !1 === this.props.info.touchRelease ? this.nop : e;
    }
    createBuilder() {
      return new Hs({
        "insert-row-above": this.wrapMouseDown(this.handleInsertRowAbove),
        "insert-row-below": this.wrapMouseDown(this.handleInsertRowBelow),
        "insert-column-left": this.wrapMouseDown(this.handleInsertNewColumnOnLeft),
        "insert-column-right": this.wrapMouseDown(this.handleInsertNewColumnOnRight),
        "delete-row": this.wrapMouseDown(this.handleRemoveCurrentRow),
        "delete-column": this.wrapMouseDown(this.handleRemoveCurrentColumn),
        "remove-table": this.wrapMouseDown(this.handleRemoveTable),
        "unmerge-cells": this.wrapMouseDown(this.handleUnmergeCells),
        "merge-cells": this.wrapMouseDown(this.handleMergeCells),
        group: this.wrapMouseDown(this.handleDiagramGroup),
        ungroup: this.wrapMouseDown(this.handleDiagramUngroup),
        "to-latex": this.wrapMouseDown(this.exportLatex),
        "from-latex": this.wrapMouseDown(this.importLatex),
        seperator: null,
        paste: null,
        "copy-as-image": this.wrapMouseDown(this.handleCopyAsImage),
        none: null
      });
    }
    calculateLeftTop(e) {
      var t = this.props.info.pos || {
          absLeft: 0,
          absTop: 0
        },
        r = t.absLeft,
        n = t.absTop;
      r = Math.min(r, window.innerWidth - 200), r = Math.max(0, r), n = Math.min(window.innerHeight - 28 * e - 10 - 10, n), console.log("top: ", n), console.log("left: ", r), console.log("window.innerHeight: ", window.innerHeight);
      var i = this.props.dzContainer,
        o = $s.c.findFixedContextElement(i.mtElement);
      return q.T.resolveFixLeftTop(q.T.getFromAbsPos(r, n, i), o);
    }
    renderSpellCheckItem(e) {
      if (e.spellcheck) return c().createElement(Ws, {
        replaceWordWith: this.props.replaceWordWith,
        ignoreWord: this.handleIgnoreWord,
        requestSpellCheckSuggestions: this.props.requestSpellCheckSuggestions
      });
    }
    callDiagramWith(e) {
      var t = this.props.requestSelectedDiagramInstance();
      t && e(t), E.A.next(() => this.props.onClose());
    }
    renderShapeAlignItem(e) {
      if ("diagram" == e.type && "multiple-entities" == e.selectedType) return c().createElement(Gs, {
        onShapeAlignmentSelect: this.handleShapeAlignment
      });
    }
    renderShapeDistribution(e) {
      if ("diagram" == e.type && e.atLeast3EntitiesSelected) return c().createElement(Ys, {
        onShapeDistributionSelect: this.handleShapeAlignment
      });
    }
    renderShapeCombination(e) {
      if ("diagram" == e.type && "multiple-entities" == e.selectedType) return c().createElement(Qs, {
        onShapeCombinationSelect: this.handleShapeCombination
      });
    }
    renderRotateSelect(e) {
      if ("diagram" == e.type && e.allowRotateFlip) {
        var t = this.props.requestSelectedDiagramInstance();
        return c().createElement(Js, {
          aroundPointReady: t.rotateAroundPointReady(),
          onRotateSelect: this.handleRotateSelect
        });
      }
    }
    renderArrange(e) {
      if ("diagram" == e.type && e.allowArrange) return c().createElement(Xs, {
        onArrange: this.handleArrangeSelect
      });
    }
    checkContextValid() {
      var e = this.props.requestContainerModel();
      return ia.isTheSameCtx(this.lastCapturedState, ia.capture(e, this.props));
    }
    renderImageMenu(e) {
      if (Xe.A.isElectronEnv()) return "default" == e.type && "image" == e.symbolCtx ? [c().createElement("ct-item", {
        key: "copy-clipboard",
        onMouseDown: this.handleCopyImageToClipboard
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Copy Image to Clipboard")), c().createElement("ct-item", {
        key: "download-image",
        onMouseDown: this.handleDownloadImage
      }, c().createElement("ct-icon", null), c().createElement("ct-name", null, "Download Image"))] : void 0;
    }
    render() {
      var e = this.props.requestContainerModel();
      this.lastCapturedState = ia.capture(e, this.props);
      var t = this.lastCapturedState,
        r = [],
        n = this.createBuilder();
      switch (t.type) {
        case "default":
          switch (t.symbolCtx) {
            case "binom":
              r = [];
              break;
            case "plot-cases":
              r = n.get(["seperator", "insert-row-above", "insert-row-below", "delete-row"]);
              break;
            case "tab-cells":
              r = n.get(["seperator", "delete-row", "delete-column", "remove-table", e.isCellsMergable() ? "seperator" : "none", e.isCellsMergable() ? "merge-cells" : "none"]);
              break;
            case "at-tabular-cell-controlled":
              r = n.get(["seperator", "insert-row-above", "insert-row-below", "insert-column-left", "insert-column-right", "seperator", "delete-row", "delete-column", "remove-table", e.isMergedCell() ? "seperator" : "none", e.isMergedCell() ? "unmerge-cells" : "none"]);
              break;
            case "image":
              r = n.get(["seperator"]);
              break;
            case "default":
              r = n.get(["seperator", "to-latex", "from-latex"]);
          }
          break;
        case "diagram":
          switch (t.selectedType) {
            case "multiple-entities":
              r = n.get(["seperator", "group"]);
              break;
            case "group-entity":
              r = n.get(["seperator", "ungroup"]);
              break;
            case "default":
              r = n.get(["seperator"]);
          }
      }
      var i = this.calculateLeftTop(r.length + 7),
        o = ea.a.applyReverseZoomStyle({
          left: i.left,
          top: i.top
        }, this.props.dzContainer);
      return c().createElement("context-menu-container", {
        onPaste: () => console.log("paste"),
        style: o,
        tabIndex: -1,
        onBlur: this.onBlur,
        onFocus: this.onFocus
      }, c().createElement("ct-menus", null, c().createElement("ct-item", {
        class: "clipboard copy",
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0)),
        tabIndex: -1
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-files-o",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Copy ", c().createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--ui-text-disabled, lightgray)"
        }
      }, "(", Gi.A.getToolTipByKey("copy"), ")"))), c().createElement("ct-item", {
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0)),
        class: v()("clipboard copy-text-only", {
          disabled: t.selectedControlled
        }),
        tabIndex: -1
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-files-o",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Copy Plain Text")), c().createElement("ct-item", {
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0)),
        class: v()("clipboard copy-latex", {
          disabled: t.selectedControlled
        }),
        tabIndex: -1
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-files-o",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Copy Latex")), !t.isMathModeSelected && c().createElement("ct-item", {
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0)),
        class: v()("clipboard copy-plain-text-latex", {
          disabled: t.selectedControlled
        }),
        tabIndex: -1
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-files-o",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Copy Plain Text+Latex")), t.isMathModeSelected && c().createElement("ct-item", {
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0)),
        class: v()("clipboard copy-latex-ignore-space", {
          disabled: t.selectedControlled
        }),
        tabIndex: -1
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-files-o",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Copy Latex (Ignore Spaces)")), c().createElement("ct-item", {
        class: v()("clipboard cut", {
          disabled: t.readOnly
        }),
        onMouseDown: this.wrapMouseDown(() => E.A.waitABit(() => this.focus = !0))
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-scissors",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Cut ", c().createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--ui-text-disabled, lightgray)"
        }
      }, "(", Gi.A.getToolTipByKey("cut"), ")"))), c().createElement("ct-item", {
        class: v()({
          disabled: t.readOnly
        }),
        onMouseDown: this.wrapMouseDown(() => this.props.requestDelete())
      }, c().createElement("ct-icon", null, c().createElement("i", {
        className: "fa fa-trash",
        "aria-hidden": "true"
      })), c().createElement("ct-name", null, "Delete")), this.renderSpellCheckItem(t), r, this.renderArrange(t), this.renderRotateSelect(t), this.renderShapeAlignItem(t), this.renderShapeDistribution(t), this.renderShapeCombination(t), this.renderImageMenu(t)));
    }
  }
  function sa(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function aa(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? sa(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sa(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class la {
    constructor(e, t, r) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "copyPasteHandler", void 0), (0, n.A)(this, "latexIoHandler", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "onMathTypeContextMenu", e => {
        this.deactivated || (Xe.A.isMobileOrTablet() || this.target.isArrowKeyPressOrHold() ? e.preventDefault() : e.nativeEvent.handledContextMenu || (this.showContextMenu(pe.y.fromAbsLeftTop(e.clientX, e.clientY, this.target.getDocZoomContainer()).toAbsolute(), e.target), e.preventDefault(), e.stopPropagation()));
      }), (0, n.A)(this, "handleRequestSpellCheckSuggestions", () => this.target.handleRequestSpellCheckSuggestions()), (0, n.A)(this, "handleReplaceWordWith", e => {
        console.log("new word:", e);
        var t = this.target.getController(),
          r = this.target.getContainerModel(),
          n = {
            cursorSelected: e.selected,
            extendedCursorSelected: e.extendedSelected,
            model: r.model,
            isInSelection: () => !0
          },
          i = [{
            id: vt.w.nextId(),
            blocks: [{
              id: vt.w.nextId(),
              text: e.newWord
            }]
          }],
          o = t.replaceLines(n, !0, i);
        this.target.handleResult(o);
      }), (0, n.A)(this, "handleIgnoreWord", (e, t) => {
        this.target.addIgnoreWord(e, t);
      }), (0, n.A)(this, "handleRequestContainerModel", () => this.target.getContainerModel()), this.target = e, this.copyPasteHandler = t, this.latexIoHandler = r;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    showContextMenu(e, t, r) {
      if (!this.deactivated && (this.target.props.enableContextMenu || !this.target.isReadOnly() && !this.target.isRestrictedView())) {
        var n = t.tagName;
        if ("SELECTION-MARK" != n && "INPUT" != n && "TEXTAREA" != n) {
          var i = e.absLeft,
            o = e.absTop;
          Xe.A.shouldUseSmallLayout() && (i = u.vc(window, "width") / 2 - 90, o = 140), this.target.setState({
            contextMenuShowInfo: aa({
              pos: pe.y.fromAbsLeftTop(i, o, e.zc).toAbsolute()
            }, r)
          });
        }
      }
    }
    renderContextMenu() {
      if (!this.deactivated) return !this.target.state.contextMenuShowInfo || this.target.isReadOnly() ? null : c().createElement(oa, {
        dzContainer: this.target.getDocZoomContainer(),
        supportSpellCheck: this.target.supportSpellCheck(),
        requestContainerModel: this.handleRequestContainerModel,
        ignoreWord: this.handleIgnoreWord,
        replaceWordWith: this.handleReplaceWordWith,
        requestSpellCheckSuggestions: this.handleRequestSpellCheckSuggestions,
        requestSelectedDiagramInstance: this.target.getSelectedDiagramInstance,
        readOnly: this.target.isSelectOnly(),
        selected: this.target.getSafeSelected(),
        requestMergeCells: () => this.requestMergeCells(),
        requestUnmergeCells: () => this.requestUnmergeCells(),
        requestRemoveTabular: () => this.requestRemoveTabular(),
        requestExportLatex: () => this.latexIoHandler.requestExportSelection(),
        requestImportLatex: () => {
          this.latexIoHandler.showImportFromLatex();
        },
        requestDelete: () => {
          this.target.requestDeleteHandle();
        },
        onPaste: this.copyPasteHandler.onPaste,
        requestCopy: () => {
          var e,
            t = this.copyPasteHandler.executeCopy().json;
          return Xe.A.isMobileOrTablet() && (this.target.getInternalClipboard().copyText = t), t;
        },
        requestCopyTextOnly: () => {
          var e = this.executeCopyTextOnly();
          return Xe.A.isMobileOrTablet() && (this.target.getInternalClipboard().copyText = e), e;
        },
        requestCopyPlainTextLatex: () => {
          var e = this.latexIoHandler.getSelectedLatex("latex", !1);
          return Xe.A.isMobileOrTablet() && (this.target.getInternalClipboard().copyText = e), e;
        },
        requestCopyLatex: e => {
          var t = this.latexIoHandler.getSelectedLatex("latex-latex", e);
          return Xe.A.isMobileOrTablet() && (this.target.getInternalClipboard().copyText = t), t;
        },
        requestCut: () => {
          var e,
            t = this.copyPasteHandler.executeCut().json;
          return Xe.A.isMobileOrTablet() && (this.target.getInternalClipboard().copyText = t), t;
        },
        info: this.target.state.contextMenuShowInfo,
        onClose: e => {
          e && this.target.showMessage("Cursor has been changed to different Context, could not perform this action", "warning", !0), this.target.setState({
            contextMenuShowInfo: !1
          });
        }
      });
    }
    requestRemoveTabular() {
      var e = this.target.getController().removeMostNestedTabular(this.target.getContainerModel());
      this.target.handleResult(e);
    }
    requestMergeCells() {
      var e = this.target.getController().mergeTableCells(this.target.getContainerModel());
      this.target.handleResult(e);
    }
    requestUnmergeCells() {
      var e = this.target.getContainerModel(),
        t = u.f$(e.cursorPos.editor, "table"),
        r = this.target.getController().unmergeTableCells(e, u.vc(t, "width"));
      this.target.handleResult(r);
    }
    executeCopyTextOnly() {
      return console.log("------------------oncopy-text-only------------------"), this.latexIoHandler.getSelectedLatex("text-only", !1);
    }
  }
  class ca {
    sort(e) {}
    getForTemplates(e, t) {
      return [];
    }
    getBySymbolNames(e) {
      return e.map(e => Je.A.getByName(e));
    }
    getForTextMode() {
      var e;
      return [Je.A.getInlineMathContainer(), Je.A.getDisplayMathContainer(), Je.A.getDiagram(), Je.A.getInlineDiagram(), Je.A.getTable(), {
        id: Math.random(),
        type: "action",
        names: ["\\latex-table"],
        symbol: "Latex Table"
      }, Je.A.getAlignContainer(), Je.A.getGatherContainer(), Je.A.getImageBox(), Je.A.getInlineImageBox(), Je.A.getMultilineContainer(), Je.A.getCheckbox(), Je.A.getPageBreak(), Je.A.getHorizontalLine(), Je.A.getTableOfContent(), Je.A.getTextModeGroup(), Je.A.getWithKey("\\exercise"), Je.A.getTextModeGroupInline(), Je.A.getZSchema(), Je.A.getZAxiom(), Je.A.getZBasic(), Je.A.getUnderlineSection(), Je.A.getCodeSection(), Je.A.getVideoContainer(), Je.A.getTemplateManagementSymbolInfo(), Je.A.getSuperScript(), Je.A.getSubScript(), Je.A.getFootnote(), Je.A.getImageCaptionRef(), Je.A.getTableCaptionRef(), Je.A.getDiagramCaptionRef(), Je.A.getWithKey("\\section-ref"), Je.A.getWithKey("\\anchor-tag"), Je.A.getWithKey("\\anchor-tag-ref"), Je.A.getWithKey("\\table-of-content-item"), Je.A.getWithKey("\\theorem-ref"), {
        id: Math.random(),
        type: "action",
        names: ["\\from-latex"],
        symbol: "from Latex"
      }, {
        id: Math.random(),
        type: "settings",
        names: ["\\theorem-options"],
        symbol: "Theorem Options"
      }, {
        id: Math.random(),
        type: "action",
        names: ["\\special-char"],
        symbol: "Insert Special Characters"
      }, {
        id: Math.random(),
        type: "action",
        names: ["\\tag-select", "\\math-tag-ref"],
        symbol: "Math Tag Ref",
        description: "Insert Math Tag Reference"
      }, {
        id: Math.random(),
        type: "action",
        names: ["\\define-shortcuts"],
        symbol: "Define Input Shortcuts",
        description: "Define your own shortcuts/hotkeys to quickly insert symbols/characters in Text/Math Mode"
      }, Je.A.getInlineBoxedSymbol(), Je.A.getBoxedContainerSymbol(), Je.A.getQed(), Je.A.getDollarSign(), Je.A.getBackSlashSign(), Je.A.getMathchaText(), Je.A.getLatexText(), {
        id: Math.random(),
        type: "action",
        names: ["\\plot"],
        symbol: "Function/Data Plot",
        noFocusOnCloseAutoComplete: !0,
        description: "Insert Function/Data Plot"
      }, {
        id: Math.random(),
        type: "action",
        names: ["\\xymatrix"],
        symbol: "XyMatrix (Comm.)",
        noFocusOnCloseAutoComplete: !0,
        description: "Insert XyMatrix Commutative Diagram"
      }, {
        id: Math.random(),
        type: "action",
        names: ["\\cas-dialog"],
        symbol: "CAS Dialog",
        noFocusOnCloseAutoComplete: !0,
        description: "Open Computer Algebra System tools to simplify, solve, transform, or analyze the current math selection or line"
      }, Je.A.getWithKey("\\cite"), Je.A.getWithKey("\\bibliography")];
    }
    isLeftRightDelimiter(e) {
      return "\\rvert" == e.names[0] || "\\lvert" == e.names[0];
    }
    getForAll(e) {
      var t = Je.A.getAllSymbols().filter(e => !this.isLeftRightDelimiter(e) && !e.isHidden && !e.insertInTextModeOnly && "\\cursor-placement" != e.names[0] && "\\theorem" != e.names[0] && "\\plot-cases" != e.names[0] && "\\page-break" != e.names[0] && "\\horizontal-line" != e.names[0] && "\\mathcha" != e.names[0] && "\\diagram" != e.names[0] && "\\mathbb" != e.names[0] && "\\math-container" != e.names[0] && "\\inline-math" != e.names[0] && "\\mathrel" != e.names[0] && "\\group" != e.names[0] && "\\multiline" != e.names[0] && "\\align" != e.names[0] && "\\gather" != e.names[0] && "\\image-container" != e.names[0] && "\\inline-image" != e.names[0] && "\\table" != e.names[0] && "\\latex-table" != e.names[0] && "\\table-of-content" != e.names[0] && "\\prefix-block" != e.names[0] && "\\checkbox" != e.names[0] && "\\not-found-symbol" != e.names[0] && "\\tag-ref" != e.names[0]);
      return this.addMathFontCommands(t), t.push({
        id: Math.random(),
        type: "action",
        names: ["\\from-latex"],
        symbol: "from Latex"
      }), t.push({
        id: Math.random(),
        type: "action",
        names: ["\\cas-dialog"],
        symbol: "CAS Dialog",
        noFocusOnCloseAutoComplete: !0,
        description: "Open Computer Algebra System tools to simplify, solve, transform, or analyze the current math selection or line"
      }), t.push(Je.A.getTemplateManagementSymbolInfo()), t.concat(this.templatesToInfo(e || []));
    }
    addMathFontCommands(e) {
      ["mathnormal", "mathrm", "mathbf", "boldsymbol", "mathit", "mathbb", "mathcal", "mathscr", "mathfrak", "mathsf", "mathtt"].forEach(t => {
        e.push({
          type: "action",
          names: ["\\".concat(t)],
          filterTag: t,
          renderSymbol: () => "boldsymbol" == t ? c().createElement("span", {
            style: {
              fontFamily: Yr.A.mathFontFamilyFromKey("\\boldsymbol", "Asana", "characters", "default"),
              fontWeight: "bold"
            }
          }, "(ABCabc...)") : c().createElement("span", {
            style: {
              fontFamily: Yr.A.mathFontFamilyFromKey("\\" + t, "Asana", "characters", "default")
            }
          }, "(ABCabc...)"),
          numberOfFrequency: 0
        });
      });
    }
    templatesToInfo(e) {
      return e.map(e => ({
        searchText: e.name,
        names: ["* " + e.name],
        type: "template",
        insertedLines: e.lines,
        description: e.description,
        templateDynamic: !0
      }));
    }
    getForComposite() {
      var e = this.getForAll([]);
      return e = f().filter(e, e => "composite" == e.type || "template" == e.type);
    }
    getForCategory(e) {
      return [];
    }
    getForDrawing(e) {
      return null == e ? Je.A.getRecognizableSymbols() : Je.A.recognize(e);
    }
  }
  var da = r(91638);
  class ha extends ca {
    constructor() {
      super(...arguments), (0, n.A)(this, "composite", void 0), (0, n.A)(this, "forDrawing", void 0), (0, n.A)(this, "textModes", void 0), (0, n.A)(this, "cachedMathTemplates", []), (0, n.A)(this, "allSortableProvider", void 0);
    }
    initAll() {
      if (!this.allSortableProvider) {
        var e = super.getForAll([]);
        f().forEach(e, e => {
          e.numberOfFrequency = 0, "\\frac" != e.names[0] && "\\power" != e.names[0] && "\\index" != e.names[0] && "\\sqrt" != e.names[0] && "\\inline-diagram" != e.names[0] || (e.numberOfFrequency = 1);
        }), this.allSortableProvider = new da.g(e), this.composite = super.getForComposite();
      }
    }
    sort(e) {
      this.allSortableProvider.sort(e);
    }
    getForTextMode() {
      return this.textModes || (this.textModes = super.getForTextMode()), this.textModes;
    }
    getForAll(e) {
      return e != this.cachedMathTemplates && (this.allSortableProvider = new da.g(super.getForAll(e)), this.cachedMathTemplates = e, console.log("cached invalid")), this.allSortableProvider.getdata();
    }
    getForComposite() {
      return this.composite;
    }
    getForTemplates(e, t) {
      var r = Je.A.getTemplateManagementSymbolInfo(),
        n = this.templatesToInfo(e);
      return t ? n : [r].concat(n);
    }
    getForCategory(e) {
      switch (e) {
        case "sin":
          var t = this.composite,
            r = ["\\sin", "\\sinh", "\\cos", "\\cosh", "\\tan", "\\tanh", "\\cot", "\\coth", "\\sec", "\\sech", "\\csc", "\\csch"],
            n;
          t = n = f().filter(t, e => {
            return e.names[0].toLowerCase().indexOf("\\arc") >= 0 || null != f().find(r, function (t) {
              return e.names[0] == t;
            });
            var t;
          });
          break;
        case "overBrace":
          var t = this.composite,
            r = ["\\breve", "\\bar", "\\acute", "\\grave", "\\hat", "\\small-hat", "\\tilde", "\\small-tilde", "\\overline", "\\dot", "\\ddot", "\\dddot", "\\ddddot", "\\underline", "\\underline-double", "\\overbrace", "\\underbrace", "\\power", "\\index", "\\power-index", "\\leftarrow", "\\rightarrow", "\\overrightharpoondown", "\\overrightharpoonup", "\\stackrel", "\\overset", "\\underset", "\\overparen", "\\underparen", "\\vec", "\\overunderset", "\\widehat", "\\widetilde", "\\overarc", "\\underarc", "\\dirac-bracket", "\\ket", "\\bra\\ket", "\\expval", "\\angle-pair", "\\ceil-pair", "\\floor-pair", "\\vert-pair", "\\Vert-pair", "\\empty-brace-pair", "\\brace-empty-pair", "\\brace-pair", "\\bracket-pair", "\\parenthesis-pair", "\\middle|", "\\xhookleftarrow", "\\xhookrightarrow", "\\xleftharpoondown", "\\xleftharpoonup", "\\xleftrightarrow", "\\xleftrightarrows", "\\xleftrightharpoons", "\\xlongequal", "\\xmapsto", "\\rightharpoondown", "\\xrightharpoonup", "\\xrightleftarrows", "\\xrightleftharpoons", "\\xLeftarrow", "\\xLeftrightarrow", "\\xRightarrow"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0].indexOf("arrow") >= 0 || e.names[0] == t;
            });
          });
          break;
        case "summation":
          var t = this.composite,
            r = ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\\lim", "\\limsup", "\\varlimsup", "\\sup", "\\liminf", "\\varliminf", "\\sum", "\\prod", "\\coprod", "\\bigwedge", "\\bigvee", "\\bigcup", "\\bigcap", "\\exp", "\\ln", "\\log", "\\mbox", "\\fbox", "\\group", "\\mathrel"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "multiply":
          var t = this.allSortableProvider.getdata(),
            r = ["\\plus", "\\minus", "\\pm", "\\mp", "\\oplus", "\\ominus", "\\times", "\\cdot", "\\circ", "\\ast", "\\otimes", "\\odot", "\\bullet", "\\div", "/", "%", "\\diameter", "\\diamond", "\\cup", "\\cap", "\\neg", "\\vee", "\\wedge", "\\forall", "\\exists", "\\nexists", "\\pi", "\\infty", "\\smalltriangleup", "\\smalltriangledown", "\\partial", "\\prime", "\\second", "\\complement", "\\rightangle", "\\angle", "\\measuredangle", "\\sphericalangle", "\\perp", "\\parallel", "\\degree", "\\therefore", "\\because"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "less":
          var t = this.allSortableProvider.getdata(),
            r = ["=", "\\sim", "\\simeq", "\\equiv", "\\approx", "\\cong", "\\leqslant", "\\geqslant", "\\geq", "\\leq", "\\ne", "\\nsim", "\\not", "\\simeq", "\\nequiv", "\\napprox", "\\ncong", ">", "\\ge", "\\gg", "<", "\\le", "\\ll", "\\ngtr", "\\ngeqq", "\\asymp", "\\nless", "\\nleqq", "\\propto", "in", "\\subset", "\\subseteq", "\\ni", "\\supset", "\\supseteq", "\\notin", "\\nsubset", "\\nsubseteq", "\\nni", "\\nsupset", "\\nsupseteq", "\\mathbb{N}", "\\mathbb{Z}", "\\mathbb{R}", "\\prec", "\\preccurlyeq", "\\succ", "\\succcurlyeq", "\\sqsubset", "\\sqsubseteq", "\\vdash", "\\sqsupset", "\\sqsupseteq", "\\dashv", "\\parallel", "\\nparallel", "\\perp"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "arrow":
          var t = this.allSortableProvider.getdata(),
            r = ["\\leftarrow", "\\rightarrow", "\\rightharpoondown", "\\rightharpoonup", "\\xhookleftarrow", "\\xhookrightarrow", "\\xleftharpoondown", "\\xleftharpoonup", "\\xleftrightarrow", "\\xleftrightarrows", "\\xleftrightharpoons", "\\xlongequal", "\\xmapsto", "\\rightharpoondown", "\\xrightharpoonup", "\\xrightleftarrows", "\\xrightleftharpoons", "\\xLeftarrow", "\\xLeftrightarrow", "\\xRightarrow", "\\overrightharpoondown", "\\overrightharpoonup", "\\to", "\\leftrightarrow", "\\uparrow", "\\downarrow", "\\updownarrow", "\\Leftarrow", "\\Rightarrow", "\\Leftrightarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "\\nearrow", "\\nwarrow", "\\searrow", "\\swarrow", "\\leftleftarrows", "\\rightrightarrows", "\\leftrightarrows", "\\rightleftarrows", "\\upuparrows", "\\downdownarrows", "\\leftrightharpoons", "\\rightleftharpoons", "\\upharpoonleft", "\\upharpoonright", "\\downharpoonleft", "\\downharpoonright", "\\nleftarrow", "\\nrightarrow", "\\nleftrightarrow", "\\nLeftarrow", "\\nRightarrow", "\\nLeftrightarrow", "\\mapsto", "\\dashleftarrow", "\\dashrightarrow", "\\twoheadleftarrow", "\\twoheadrightarrow", "\\hookleftarrow", "\\hookrightarrow", "\\looparrowleft", "\\looparrowright", "\\leftarrowtail", "\\rightarrowtail", "\\Lsh", "\\Rsh", "\\Lleftarrow", "\\Rrightarrow", "\\curvearrowleft", "\\curvearrowright", "\\circlearrowleft", "\\circlearrowright", "\\multimap", "\\leftrightsquigarrow", "\\rightsquigarrow", "\\leftharpoonup", "\\leftharpoondown", "\\rightharpoonup", "\\rightharpoondown", "\\rightsquigarrow"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "alpha":
          var t = this.allSortableProvider.getdata(),
            r = ["\\alpha", "\\beta", "\\gamma", "\\delta", "\\epsilon", "\\zeta", "\\eta", "\\theta", "\\vartheta", "\\iota", "\\kappa", "\\lambda", "\\mu", "\\nu", "\\xi", "\\pi", "\\varpi", "\\rho", "\\varrho", "\\sigma", "\\varsigma", "\\tau", "\\upsilon", "\\phi", "\\varphi", "\\chi", "\\psi", "\\omega", "\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "matrix":
          var t = this.composite,
            r = ["\\matrix", "\\pmatrix", "\\bmatrix", "\\Bmatrix", "\\vmatrix", "\\Vmatrix", "\\eqnarray", "\\array", "\\cases", "\\sqcases", "\\drcases", "\\binom", "\\gathered", "\\aligned"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
          break;
        case "frac":
          var t = this.composite,
            r = ["\\frac", "\\sqrt", "\\left.", "\\right.", "\\cancel", "\\bcancel", "\\xcancel", "\\cfrac", "\\tfrac", "\\fracslashed", "\\tfracslashed", "\\tallymarks"],
            n;
          t = n = f().filter(t, e => {
            var t;
            return null != f().find(r, function (t) {
              return e.names[0] == t;
            });
          });
      }
      return t;
    }
    getForDrawing(e) {
      return null == e ? (null == this.forDrawing && (this.forDrawing = super.getForDrawing(null)), this.forDrawing) : super.getForDrawing(e);
    }
  }
  const pa = new ha();
  class ua {
    calculatePosition(e, t, r, n, i, o) {
      var s = pe.y.fromPos(t),
        a = s.toAbsolute(),
        l = a.absLeft,
        c = a.absTop,
        d = "categories" == e ? 320 : 280,
        h = "drawing" == e ? 320 : 314;
      "textMode" == e && (h = 283);
      var p = window.innerWidth,
        u = window.innerHeight,
        g = 75;
      if (c + h > u - 40 && ("avoid" == o ? (c = s.toTopAbsolute() - h - 45) < g && (c = s.toTopAbsolute()) : (c = u - h - 40, c = Math.max(g, c))), l + d > p && (l = p - d - 10), n) {
        var m = $s.c.findFixedContextElement(i);
        return q.T.resolveFixLeftTop({
          absLeft: l,
          absTop: c,
          zc: r
        }, m);
      }
      return q.T.toLeftTopRelative({
        left: l,
        top: c
      }, r);
    }
  }
  const ga = new ua();
  var ma = r(35969),
    fa = r.n(ma);
  class ya {
    filter(e, t) {
      var r = new (fa())(e, ba),
        n;
      return null != t && "" != t ? (f().startsWith(t, "\\") && t.length > 1 && (t = t.substr(1)), r.search(t)) : e;
    }
  }
  const va = new ya();
  var ba = {
      shouldSort: !0,
      caseSensitive: !0,
      getFn(e, t) {
        var r = [];
        return t ? "names" == t ? (e.names.forEach(e => {
          f().startsWith(e, "\\") ? r.push(e.substr(1)) : r.push(e);
        }), r) : "filterTag" == t ? (e.filterTag && r.push(e.filterTag), r) : (e.description && r.push(e.description), r) : (console.warn("not path"), r.push(e.filterTag), r);
      },
      keys: [{
        name: "names",
        weight: .4
      }, {
        name: "filterTag",
        weight: .4
      }, {
        name: "description",
        weight: .2
      }]
    },
    xa = r(32725),
    Ca = r(87010);
  class Sa extends c().Component {
    render() {
      var e = this.props,
        t = e.dataProvider,
        r = e.symbolFilter,
        n = e.mathTemplates,
        i = e.tabItems,
        o = e.onTabSelect,
        s = e.mathModeAdditionalSymbolSupports,
        a = t.getForAll(n),
        l;
      s && (a = pa.getBySymbolNames(s).concat(a));
      return c().createElement(Ca.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: a,
        symbolFilter: r,
        onItemCommit: this.props.onItemCommit,
        tabItems: i,
        tabSelectedKey: "all",
        onTabSelect: o
      });
    }
  }
  class Aa extends c().Component {
    render() {
      var e = this.props,
        t = e.dataProvider,
        r = e.symbolFilter,
        n = e.tabItems,
        i = e.onTabSelect,
        o = e.mathModeAdditionalSymbolSupports,
        s = t.getForComposite(),
        a;
      o && (s = pa.getBySymbolNames(o).concat(s));
      return c().createElement(Ca.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: s,
        dataProvider: t,
        symbolFilter: r,
        onItemCommit: this.props.onItemCommit,
        tabItems: n,
        tabSelectedKey: "composite",
        onTabSelect: i
      });
    }
  }
  class wa extends c().Component {
    render() {
      var e = this.props,
        t = e.dataProvider,
        r = e.symbolFilter,
        n = e.tabItems,
        i = e.onTabSelect,
        o = t.getForTemplates(this.props.mathTemplates, this.props.disableMathTemplateManagement);
      return c().createElement(Ca.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: o,
        dataProvider: t,
        symbolFilter: r,
        onItemCommit: this.props.onItemCommit,
        tabItems: n,
        tabSelectedKey: "templates",
        onTabSelect: i
      });
    }
  }
  var Ea = r(34354);
  class ka extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "previousPoint", {
        x: 0,
        y: 0
      }), (0, n.A)(this, "currentPoint", {
        x: 0,
        y: 0
      }), (0, n.A)(this, "mouseDownFlag", !1), (0, n.A)(this, "strokes", []), (0, n.A)(this, "points", []), (0, n.A)(this, "canvas", void 0), (0, n.A)(this, "onMouseMove", e => {
        this.mouseDownFlag && (e.preventDefault(), e.stopPropagation(), this.storePreviousPoint(e), this.draw(), console.log("p: ", this.currentPoint));
      }), (0, n.A)(this, "onMouseDown", e => {
        this.points = [], this.strokes.push(this.points), this.storePreviousPoint(e), this.mouseDownFlag = !0;
      }), (0, n.A)(this, "onMouseUp", e => {
        e.preventDefault(), e.stopPropagation(), this.mouseDownFlag && this.props.onStrokesReceived(this.strokes), this.mouseDownFlag = !1;
      }), (0, n.A)(this, "onMouseOut", e => {
        e.preventDefault(), e.stopPropagation(), this.mouseDownFlag && this.props.onStrokesReceived(this.strokes), this.mouseDownFlag = !1;
      }), (0, n.A)(this, "onClear", () => {
        this.getContext().clearRect(0, 0, this.canvas.width, this.canvas.height), this.strokes = [], this.points = [];
      });
    }
    componentDidMount() {
      var e = this.getContext();
      e.strokeStyle = "green", e.lineWidth = 3, e.lineJoin = "round", e.lineCap = "round";
      var t = h().findDOMNode(this),
        r = u.YG(t, ">canvas")[0],
        n = Li.A.getFalsePassiveObject();
      r.addEventListener("touchstart", this.onMouseDown, n), r.addEventListener("touchmove", this.onMouseMove, n), r.addEventListener("touchend", this.onMouseUp, n), r.addEventListener("touchcancel", this.onMouseOut, n);
    }
    componentWillUnmount() {
      var e = h().findDOMNode(this),
        t = u.YG(e, ">canvas")[0];
      t.removeEventListener("touchstart", this.onMouseDown), t.removeEventListener("touchmove", this.onMouseMove), t.removeEventListener("touchend", this.onMouseUp), t.removeEventListener("touchcancel", this.onMouseOut);
    }
    shouldComponentUpdate() {
      return !1;
    }
    storePreviousPoint(e) {
      this.previousPoint = f().clone(this.currentPoint);
      var t = S.A.getElementRect(this.canvas),
        r = Li.A.getLeftTopFromEvent(e);
      this.currentPoint = {
        x: r.left - t.left,
        y: r.top - t.top
      }, this.points.push({
        x: this.currentPoint.x,
        y: this.currentPoint.y,
        time: new Date().getTime()
      });
    }
    draw() {
      var e = this.getContext();
      e.beginPath(), e.moveTo(this.previousPoint.x, this.previousPoint.y), e.lineTo(this.currentPoint.x, this.currentPoint.y), e.stroke(), e.closePath();
    }
    getContext() {
      return this.canvas.getContext("2d");
    }
    render() {
      return c().createElement("div", {
        style: {
          marginBottom: 10
        },
        onWheel: e => e.preventDefault(),
        className: "drawing-container"
      }, c().createElement("span", {
        style: {
          position: "absolute",
          left: "50%",
          fontSize: 10,
          color: "#777",
          marginLeft: -69,
          display: "block"
        }
      }, "Draw to find (support 359 symbols)"), c().createElement("canvas", {
        style: {
          position: "relative",
          marginTop: 10,
          height: 120,
          width: 250,
          cursor: "crosshair"
        },
        width: "250",
        height: "120",
        onMouseMove: this.onMouseMove,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseOut: this.onMouseOut,
        ref: e => this.canvas = e
      }), c().createElement("clear-button", {
        onMouseDown: this.onClear
      }, " ", c().createElement("i", {
        className: "fa fa-eraser",
        "aria-hidden": "true"
      }), " "));
    }
  }
  function Oa(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Da(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Oa(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oa(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pa extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        selectedItem: this.props.data[0] || null
      }), (0, n.A)(this, "handleRenderFilter", () => c().createElement(ka, {
        onStrokesReceived: this.props.onStrokesReceived
      }));
    }
    render() {
      return c().createElement(Ea.A, Da(Da({}, this.props), {}, {
        data: this.props.data,
        mainContainerFocus: !0,
        itemsHeight: 125,
        renderFilter: this.handleRenderFilter
      }));
    }
  }
  class Ma extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        filteredData: this.props.dataProvider.getForDrawing(null)
      }), (0, n.A)(this, "handleStrokesReceived", e => {
        this.setState({
          filteredData: this.props.dataProvider.getForDrawing(e)
        });
      });
    }
    render() {
      var e = this.props,
        t = e.dataProvider,
        r = e.symbolFilter,
        n = e.tabItems,
        i = e.onTabSelect;
      return c().createElement(Pa, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        onStrokesReceived: this.handleStrokesReceived,
        data: this.state.filteredData,
        dataProvider: t,
        symbolFilter: r,
        onItemCommit: this.props.onItemCommit,
        tabItems: n,
        tabSelectedKey: "drawing",
        onTabSelect: i
      });
    }
  }
  var Ia = r(87170),
    Ta = r(39774),
    La = r(37058);
  class Ra extends c().Component {
    shouldComponentUpdate(e) {
      return e.category != this.props.category;
    }
    onClick(e) {
      this.props.onCategoriesChanged(e), this.setState({
        category: e
      });
    }
    render() {
      var e = {
        sin: "",
        overBrace: "",
        summation: "",
        multiply: "",
        less: "",
        arrow: "",
        alpha: "",
        matrix: "",
        frac: ""
      };
      e[this.props.category] += "selected";
      var t = ts.A.addMobileTabletClssIfRequired("categories-container");
      return c().createElement("div", {
        className: t
      }, c().createElement("div", {
        className: e.sin + " item",
        onClick: () => {
          this.onClick("sin");
        },
        style: {
          borderTop: "1px solid var(--ui-border, lightgray)"
        }
      }, c().createElement("div", {
        className: "symbol"
      }, "Sin")), c().createElement("div", {
        className: e.overBrace + " item",
        onClick: () => {
          this.onClick("overBrace");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, c().createElement(Ia.A, {
        symbol: "→",
        isExpanded: !0
      }))), c().createElement("div", {
        className: e.summation + " item",
        onClick: () => {
          this.onClick("summation");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, "Σ∫")), c().createElement("div", {
        className: e.multiply + " item",
        onClick: () => {
          this.onClick("multiply");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, "×÷")), c().createElement("div", {
        className: e.less + " item",
        onClick: () => {
          this.onClick("less");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, "<⊆")), c().createElement("div", {
        className: e.arrow + " item",
        onClick: () => {
          this.onClick("arrow");
        }
      }, c().createElement("div", {
        className: "symbol",
        style: {
          width: "24px"
        }
      }, "←⇑")), c().createElement("div", {
        className: e.alpha + " item",
        onClick: () => {
          this.onClick("alpha");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, "αβ")), c().createElement("div", {
        className: e.matrix + " item",
        onClick: () => {
          this.onClick("matrix");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, c().createElement(Ta.A, {
        bracketType: "("
      }))), c().createElement("div", {
        className: e.frac + " item",
        onClick: () => {
          this.onClick("frac");
        }
      }, c().createElement("div", {
        className: "symbol"
      }, c().createElement(La.A, null))));
    }
  }
  class Ba extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        selectedCategory: "sin",
        filteredData: this.props.dataProvider.getForCategory("sin")
      }), (0, n.A)(this, "subCategories", ["sin", "overBrace", "summation", "multiply", "less", "arrow", "alpha", "matrix", "frac"]), (0, n.A)(this, "handleCategoryChanged", e => {
        this.setSubCategory(e);
      }), (0, n.A)(this, "handleRenderExtra", () => c().createElement(Ra, {
        category: this.state.selectedCategory,
        onCategoriesChanged: this.handleCategoryChanged
      })), (0, n.A)(this, "handleKeyDown", (e, t) => 38 == e.keyCode && e.shiftKey ? (t.handled = !0, this.previousSubCategory(), e.preventDefault(), void e.stopPropagation()) : 40 == e.keyCode && e.shiftKey ? (t.handled = !0, this.nextSubCategory(), e.preventDefault(), void e.stopPropagation()) : void 0);
    }
    setSubCategory(e) {
      this.setState({
        filteredData: this.props.dataProvider.getForCategory(e),
        selectedCategory: e
      });
    }
    nextSubCategory() {
      var e = this.subCategories.indexOf(this.state.selectedCategory);
      this.setSubCategory(this.subCategories[(e + 1) % this.subCategories.length]);
    }
    previousSubCategory() {
      var e = this.subCategories.indexOf(this.state.selectedCategory);
      this.setSubCategory(this.subCategories[e > 0 ? e - 1 : this.subCategories.length - 1]);
    }
    render() {
      var e = this.props,
        t = e.dataProvider,
        r = e.symbolFilter,
        n = e.tabItems,
        i = e.onTabSelect;
      return c().createElement(Ca.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        onKeyDown: this.handleKeyDown,
        data: this.state.filteredData,
        dataProvider: t,
        symbolFilter: r,
        onItemCommit: this.props.onItemCommit,
        tabItems: n,
        tabSelectedKey: "categories",
        onTabSelect: i,
        renderExtra: this.handleRenderExtra
      });
    }
  }
  class Fa {
    symbolByName(e, t) {
      var r = Je.A.getByName(e);
      return r || console.log("missing: ", e), t ? dt.A.setProp(r, "description", t) : r;
    }
    getSourceForPlotFunction() {
      return [this.symbolByName("\\sqrt"), this.symbolByName("\\frac"), this.symbolByName("\\dfrac"), this.symbolByName("\\power"), this.symbolByName("\\plot-cases"), this.symbolByName("\\abs", "the absolute value of a number, ex: abs(3-x)"), this.symbolByName("\\acos", "arccosine (in radians) of the given number if it's between -1 and 1, ex: acos(0.5)"), this.symbolByName("\\asin", "arcsine (in radians) of the given number if it's between -1 and 1, ex: asin(0.5) "), this.symbolByName("\\atan", "arctangent (in radians) of the given number, ex: atan(2x)"), this.symbolByName("\\cos", "cosine of the given number (radians), ex: cos(x𝜋)"), this.symbolByName("\\cosec", "cosecant of given number (in radians), ex: cosec(x𝜋)"), this.symbolByName("\\sec", "secant of given number (in radians), ex: sec(x𝜋)"), this.symbolByName("\\cosh", "hyperbolic cosine of the given number, ex: cosh(2x)"), this.symbolByName("\\cot", "cotangent of given number (in radians),ex: cot(x𝜋) "), this.symbolByName("\\ln", "natural (e) logarithm of a number, ex: ln(10)"), this.symbolByName("\\log10", "logarithm to the base 10, ex: log10(10)"), this.symbolByName("\\log2", "logarithm to the base 2, ex: log2(10)"), this.symbolByName("\\max", "maximum value from numbers, ex: max(10,x,2x,...)"), this.symbolByName("\\min", "minimum value from numbers, ex: min(10,x,2x,...)"), this.symbolByName("\\sin", "sin of the given number (radians), ex: sin(x𝜋)"), this.symbolByName("\\sinh", "hyperbolic sin of the given number, ex: sinh(2x)"), this.symbolByName("\\tan", "tangent of the given number, ex: ran(1)"), this.symbolByName("\\tanh", "hyperbolic tangent of the given number, ex: tanh(1)"), this.symbolByName("\\floor-pair", "the largest integer less than or equal to a given number, ex: ⌊x⌋"), this.symbolByName("\\floor", "the largest integer less than or equal to a given number, ex: floor(x)"), this.symbolByName("\\ceil-pair", "smallest integer greater than or equal to a given number, ex: ⌈x⌉"), this.symbolByName("\\ceil-fun", "smallest integer greater than or equal to a given number, ex: ceil(x)"), this.symbolByName("\\vert-pair", "the absolute value of a number, ex: |3-x|"), this.symbolByName("\\times"), this.symbolByName("\\plus"), this.symbolByName("\\minus"), this.symbolByName("\\slash"), this.symbolByName("\\percent", "remainder operator. ex: 5 % 2 = 1"), this.symbolByName("\\exclam", "factorials, ex: 6! = 720"), this.symbolByName("\\ast"), this.symbolByName("\\caret", "power, ex: 2^3 = 8"), this.symbolByName("\\ampersand"), this.symbolByName("\\vert"), this.symbolByName("\\degree", "convert degrees to radians, ex: sin(60°) or 2sin(2x-60°)"), this.symbolByName("\\pi")].filter(e => e);
    }
  }
  const ja = new Fa();
  var _a = r(40455),
    Na = r(24320),
    za = r(98318),
    Ha = r(36606);
  function Wa(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Va(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Wa(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wa(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ua extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "groups", void 0), (0, n.A)(this, "handleKeyDown", (e, t) => {
        if (9 == e.keyCode) return e.shiftKey ? this.previousTabItem() : this.nextTabItem(), e.preventDefault(), e.stopPropagation(), void (t.handled = !0);
      }), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      }), (0, n.A)(this, "handleCommit", e => {
        this.props.onItemCommit(e.item);
      }), this.groups = [{
        name: "Functions",
        items: this.buildGroup("function")
      }, {
        name: "Relations",
        items: this.buildGroup("relation")
      }, {
        name: "Greeks",
        items: this.buildGroup("greek")
      }, {
        name: "Brackets",
        items: this.buildGroup("bracket")
      }, {
        name: "Logic",
        items: this.buildGroup("logic")
      }, {
        name: "Set and Expression",
        items: this.buildGroup("set").concat(this.buildGroup("expression"))
      }, {
        name: "Schema",
        items: this.buildGroup("schema")
      }, {
        name: "Bag",
        items: this.buildGroup("bag")
      }, {
        name: "Sequence",
        items: this.buildGroup("sequence")
      }, {
        name: "Number",
        items: this.buildGroup("number")
      }, {
        name: "Others",
        items: this.buildGroup("others")
      }], this.state = {
        selectedItem: {
          group: this.groups[0],
          item: this.groups[0].items[0]
        }
      };
    }
    buildGroup(e) {
      return _a.N.get().filter(t => t.zcategory instanceof Array ? t.zcategory.includes(e) : t.zcategory == e);
    }
    nextTabItem() {
      if (this.hasTabItems() && this.props.onTabSelect) {
        var e,
          t = (this.props.tabItems.findIndex(e => "z-spec-fancy" == e.key) + 1) % this.props.tabItems.length;
        this.props.onTabSelect(this.props.tabItems[t].key);
      }
    }
    previousTabItem() {
      if (this.hasTabItems() && this.props.onTabSelect) {
        var e = this.props.tabItems.findIndex(e => "z-spec-fancy" == e.key),
          t = e - 1 >= 0 ? e - 1 : this.props.tabItems.length - 1;
        this.props.onTabSelect(this.props.tabItems[t].key);
      }
    }
    renderTabItem() {
      if (this.hasTabItems()) return c().createElement(Na.A, {
        items: this.props.tabItems,
        selectedKey: "z-spec-fancy",
        onSelect: this.props.onTabSelect
      });
    }
    hasTabItems() {
      return this.props.tabItems && this.props.tabItems.length > 0;
    }
    renderContent() {
      var e = {
          width: 25,
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 14,
          border: "1px solid var(--ui-border, lightgray)",
          display: "flex",
          marginLeft: -1,
          marginBottom: -1,
          cursor: "pointer",
          background: "var(--ui-surface, white)"
        },
        t = Va(Va({}, e), {}, {
          background: "var(--ui-selection, #bfe4bd)"
        });
      return c().createElement("div", {
        style: {
          height: 242
        }
      }, c().createElement(Ha.A, {
        itemContainerStyle: e,
        itemContainerStyleSelected: t,
        groups: this.groups,
        numberOfItemsPerLine: 9,
        renderGroupName: e => c().createElement("span", {
          style: {
            padding: 5,
            fontWeight: "bold",
            fontFamily: '"Helvetica Neue", Helvetica, arial, freesans, clean, sans-serif'
          }
        }, e.name),
        renderItem: (e, t, r) => {
          var n = e.renderSymbol ? e.renderSymbol(!1, this.props.baseMathModeFontFamily) : e.symbol;
          return c().createElement("span", {
            style: {
              fontFamily: Yr.A.mathFontFamilyFromKey("\\mathnormal", this.props.baseMathModeFontFamily, "characters")
            },
            className: v()("role-symbol-item", {
              selected: r
            }),
            key: e.names[0]
          }, n);
        },
        selected: this.state.selectedItem,
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit,
        onKeyDown: this.handleKeyDown
      }));
    }
    renderDescription(e) {
      if (!Xe.A.isMobileOrTablet()) return e ? c().createElement(za.A, {
        item: e,
        showLatex: !0
      }) : null;
    }
    render() {
      return c().createElement("div", null, c().createElement("ac-main", {
        style: Ea.x
      }, c().createElement("div", {
        className: "auto-complete-content"
      }, this.renderContent()), this.renderTabItem()), this.renderDescription(this.state.selectedItem && this.state.selectedItem.item));
    }
  }
  function qa(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ga(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? qa(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qa(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ka extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "recreationKey", void 0), (0, n.A)(this, "handleDocumentKeyDown", e => {
        27 == e.event.keyCode && (this.props.onClose(!1), e.stopOther = !0);
      }), (0, n.A)(this, "handleItemCommit", e => {
        var t = this.props.cursorInsertionState,
          r = t.isInsideDiagram,
          n = t.insideZSpec,
          i = t.insidePlotFunction;
        if ("\\inline-diagram" == e.names[0] && r) return console.log("diagram inside diagram"), this.props.onShowQuickWarnMessage("Diagram inside Diagram is not supported"), void this.props.onClose(!1);
        e.numberOfFrequency += 2, n && _a.N.sort(e), i || pa.sort(e), "(" != e.symbol && ")" != e.symbol || (e = Ga(Ga({}, e), {}, {
          forceCreateModel: !0
        })), this.props.onSelect(e), this.props.onClose(e.noFocusOnCloseAutoComplete);
      }), (0, n.A)(this, "handleTabSelect", e => {
        this.setSelectedTab(e);
      }), pa.initAll();
      var t = this.props.cursorInsertionState,
        r,
        i,
        o = t.isTextMode ? "textMode" : "all";
      t.insideZSpec && (o = "z-spec"), this.state = {
        selectedTab: o
      }, this.recreationKey = Math.random();
    }
    isPropsChanged(e, t) {
      return e.requestedLefTop.top != t.requestedLefTop.top || e.requestedLefTop.left != t.requestedLefTop.left || this.isContextInputChanged(e, t) || e.show != t.show;
    }
    isContextInputChanged(e, t) {
      return e.cursorInsertionState != t.cursorInsertionState;
    }
    shouldComponentUpdate(e, t) {
      return this.isPropsChanged(e, this.props) || !Dt.A.areEqualShallow(t, this.state);
    }
    componentDidMount() {
      xa.A.stack(this.handleDocumentKeyDown), js.A.registerEventToFixScroll(u.Yt(".ReactVirtualized__Grid.ReactVirtualized__List"));
    }
    componentWillUnmount() {
      xa.A.remove(this.handleDocumentKeyDown), console.log("call me off"), js.A.unregisterEventToFixScroll(u.Yt(".ReactVirtualized__Grid.ReactVirtualized__List"));
    }
    componentWillReceiveProps(e) {
      this.isContextInputChanged(e, this.props) && (this.recreationKey = Math.random());
    }
    getTheoremsSymbolInfo() {
      var e = this.props.mainModel.theoremInfo,
        t;
      return bt.T.getTheorems(e).map(e => ({
        type: "composite",
        names: ["\\theorem"],
        theorem: e,
        description: e.name,
        searchText: "theorem " + e.name,
        symbol: e.name
      }));
    }
    setSelectedTab(e) {
      this.setState({
        selectedTab: e
      });
    }
    renderContent() {
      var e = this.props.cursorInsertionState;
      if (e.insidePlotFunction) return c().createElement(Ca.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: ja.getSourceForPlotFunction(),
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit
      });
      if ("textMode" == this.state.selectedTab) {
        var t;
        if (this.props.rootSymbolSupports) {
          var r = pa.getBySymbolNames(this.props.rootSymbolSupports);
          return c().createElement(Ca.A, {
            baseMathModeFontFamily: this.props.baseMathModeFontFamily,
            data: r,
            symbolFilter: va,
            onItemCommit: this.handleItemCommit
          });
        }
        var n = pa.getForTextMode(),
          i;
        if (n = e.isRestrictedTextModeInMath ? n.filter(e => "\\inline-math" == e.names[0] || "\\$" == e.names[0] || "\\backslash" == e.names[0] || "\\mathcha" == e.names[0]) : e.isInsideDiagram || e.isInsideLatexTable || e.isInsideRawLatex || e.isAtCaption || e.isRestrictedTextMode || e.isAtTextModeGroupInline ? n.filter(e => "\\inline-math" == e.names[0] || "\\$" == e.names[0] || "\\text-mode-group-inline" == e.names[0] || "\\backslash" == e.names[0] || "\\anchor-tag" == e.names[0] || "\\anchor-tag-ref" == e.names[0] || "\\mathcha" == e.names[0] || "\\footnote" == e.names[0] || "\\sub-script" == e.names[0] || "\\super-script" == e.names[0] || "\\checkbox" == e.names[0]) : n.concat(this.getTheoremsSymbolInfo()), this.props.textModeAdditionalSymbolSupports) n = pa.getBySymbolNames(this.props.textModeAdditionalSymbolSupports).concat(n);
        return null !== (t = this.props.selected) && void 0 !== t && t.selected && (n = n.filter(e => "\\exercise" !== e.names[0])), c().createElement(Ca.A, {
          baseMathModeFontFamily: this.props.baseMathModeFontFamily,
          data: n,
          symbolFilter: va,
          onItemCommit: this.handleItemCommit
        });
      }
      var o = [{
        key: "all",
        value: "All"
      }, {
        key: "composite",
        value: "Composite"
      }, {
        key: "categories",
        value: "Categories"
      }, {
        key: "templates",
        value: "Custom"
      }, {
        key: "drawing",
        value: "Drawing"
      }];
      return e.insideZSpec && (o = [{
        key: "z-spec",
        value: "Z Spec"
      }, {
        key: "z-spec-fancy",
        value: "Z Categories"
      }, {
        key: "all",
        value: "All Others"
      }]), "z-spec" == this.state.selectedTab ? c().createElement(_a.A, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: pa.getForComposite(),
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        mathTemplates: this.props.mathTemplates,
        onTabSelect: this.handleTabSelect
      }) : "z-spec-fancy" == this.state.selectedTab ? c().createElement(Ua, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        data: pa.getForComposite(),
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        mathTemplates: this.props.mathTemplates,
        onTabSelect: this.handleTabSelect
      }) : "all" == this.state.selectedTab ? c().createElement(Sa, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        mathModeAdditionalSymbolSupports: this.props.mathModeAdditionalSymbolSupports,
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        mathTemplates: this.props.mathTemplates,
        onTabSelect: this.handleTabSelect
      }) : "composite" == this.state.selectedTab ? c().createElement(Aa, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        mathModeAdditionalSymbolSupports: this.props.mathModeAdditionalSymbolSupports,
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        onTabSelect: this.handleTabSelect
      }) : "templates" == this.state.selectedTab ? c().createElement(wa, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        onTabSelect: this.handleTabSelect,
        mathTemplates: this.props.mathTemplates,
        disableMathTemplateManagement: this.props.disableMathTemplateManagement
      }) : "drawing" == this.state.selectedTab ? c().createElement(Ma, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        onTabSelect: this.handleTabSelect
      }) : "categories" == this.state.selectedTab ? c().createElement(Ba, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        dataProvider: pa,
        symbolFilter: va,
        onItemCommit: this.handleItemCommit,
        tabItems: o,
        onTabSelect: this.handleTabSelect
      }) : void 0;
    }
    render() {
      if (!this.props.show) return null;
      var e = null;
      Xe.A.isMobileOrTablet() || (e = ea.a.applyReverseZoomStyle(ga.calculatePosition(this.state.selectedTab, this.props.requestedLefTop, this.props.dzContainer, this.props.usingPositionFixed, this.props.mathTypeElement, this.props.preferPosition), this.props.dzContainer)), this.props.usingPositionFixed && (e.position = "fixed", e.zIndex = 999999);
      var t = ts.A.addMobileTabletClssIfRequired(v()("auto-complete-container", {
        "is-android": Xe.A.isAndroid()
      }));
      return c().createElement("div", {
        key: this.recreationKey,
        onDoubleClick: Li.A.onDoubleClickStopPropagation,
        style: e,
        tabIndex: -1,
        className: t
      }, this.renderContent());
    }
  }
  const Za = Ka;
  class Ya {
    detectInsertionMode(e, t) {
      return e.insidePlotFunction ? "plot-func" : e.isTextMode ? t ? "root-custom-symbols" : e.isRestrictedTextModeInMath ? "very-restricted-text-mode" : e.isInsideDiagram || e.isInsideLatexTable || e.isInsideRawLatex || e.isAtCaption || e.isRestrictedTextMode || e.isAtTextModeGroupInline ? "restricted-text-mode" : "text-mode" : e.insideZSpec ? "z-spec" : "math-mode";
    }
  }
  var Qa = new Ya(),
    Ja = Zr.A.getModalDialog();
  class Xa extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleShowQuickWarnMessage", e => {
        this.getTarget().showMessage(e, "warning", !0);
      }), (0, n.A)(this, "handleAutoCompleteClose", e => {
        var t;
        this.getState().autoCompleteInfo && (this.setState({
          autoCompleteInfo: null
        }), e || this.getTarget().hidenInputFocus());
      }), (0, n.A)(this, "onAutoCompleteSelect", e => {
        if (!this.deactivated && this.getState().autoCompleteInfo) {
          var t = this.getState().autoCompleteInfo.cursorInsertionState,
            r = !!this.getTarget().props.rootSymbolSupports,
            n,
            i;
          Qa.detectInsertionMode(t, r) == Qa.detectInsertionMode(this.buildCursorInsertionState(this.getTarget().getContainerModel()), r) ? this.getTarget().insertBySymbolInfo(e) : this.getTarget().showMessage("Cursor has been changed to different Context, could not insert current symbol", "warning", !0);
        }
      });
    }
    renderAutoComplete() {
      if (!this.deactivated) {
        var e = this.getState();
        if (e.autoCompleteInfo) {
          var t = e.autoCompleteInfo,
            r = this.getTarget(),
            n = r.props,
            i = r.getMathTypeSettings(),
            o = c().createElement(Za, {
              dzContainer: r.getDocZoomContainer(),
              mathTypeElement: r.getMathTypeHtmlElement(),
              preferPosition: i.complexObject && i.complexObject.suggestionBoxPreferPosition || "default",
              baseMathModeFontFamily: r.getBaseMathModeFontFamily(),
              rootSymbolSupports: n.rootSymbolSupports,
              textModeAdditionalSymbolSupports: n.textModeAdditionalSymbolSupports,
              mathModeAdditionalSymbolSupports: n.mathModeAdditionalSymbolSupports,
              usingPositionFixed: n.autoCompleteUsingPositionFixed,
              disableMathTemplateManagement: !!n.mathTemplatesDisable,
              mathTemplates: r.getMathTemplatesItems(),
              cursorInsertionState: t.cursorInsertionState,
              onSelect: this.onAutoCompleteSelect,
              selected: r.getSafeSelected(),
              mainModel: e.mainModel,
              requestedLefTop: t.autoCompleteLeftTop,
              show: !0,
              onClose: this.handleAutoCompleteClose,
              onShowQuickWarnMessage: this.handleShowQuickWarnMessage
            });
          return this.getTarget().props.autoCompleteAsModal ? this.wrapInModal(o) : o;
        }
      }
    }
    wrapInModal(e) {
      var t = {
        width: "auto",
        background: "transparent",
        border: "none",
        boxShadow: "none",
        left: "50%",
        top: 40
      };
      return Xe.A.isAndroid() && (t = {
        width: "auto",
        background: "transparent",
        border: "none",
        boxShadow: "none",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)"
      }), c().createElement(Ja, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Symbol suggestions",
        size: "medium",
        scroll: "body",
        headerHidden: !0,
        footerStyle: {
          display: "none"
        },
        backDrop: !0,
        onCancel: this.handleAutoCompleteClose,
        className: "auto-complete-external-area",
        style: t,
        show: !0
      }, e));
    }
    closeAutoComplete() {
      this.deactivated || this.getState().autoCompleteInfo && this.setState({
        autoCompleteInfo: null
      });
    }
    requestAutoComplete() {
      if (!this.deactivated) {
        if (this.getTarget().isReadOnly() || this.getTarget().isSelectOnly() || this.getTarget().isPlainTextOnly()) return !1;
        var e = this.getTarget().getContainerModel();
        if (!e.isSelected()) return !1;
        if (e.isInsideTextSymbol()) return !1;
        if (e.insideCodeSection()) return !1;
        if (e.isCursorControlled) return !1;
        var t = this.getTarget();
        t.forceStopCompositionOrReserve();
        var r = t.getCursorGeoPosition(),
          n = r.zc.zoomRatio;
        return this.setState({
          autoCompleteInfo: {
            cursorInsertionState: this.buildCursorInsertionState(e),
            autoCompleteLeftTop: pe.y.fromPos(r).deltaBuild(5 / n, 20 / n)
          }
        }), !0;
      }
    }
    buildCursorInsertionState(e) {
      return {
        isTextMode: e.isTextModeSelected(),
        isInsideDiagram: e.isInsideDiagram(),
        isInsideLatexTable: e.isInsideLatexTable(),
        isInsideRawLatex: e.isInsideRawLatex(),
        isAtTextModeGroupInline: e.isAtTextModeGroupInline(),
        isAtCaption: e.isAtCaption(),
        insideZSpec: e.insideZSpec(),
        isRestrictedTextMode: e.isRestrictedTextMode(),
        isRestrictedTextModeInMath: e.isRestrictedTextModeInMath(),
        insidePlotFunction: this.getTarget().props.insidePlotFunction
      };
    }
  }
  class $a extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "fixedRow", 6), (0, n.A)(this, "fixedColumn", 6), (0, n.A)(this, "handleMouseMove", e => {
        var t = this.calculateRowColumn(e.clientX, e.clientY),
          r = t.row,
          n = t.column;
        this.setState({
          row: r,
          column: n,
          regionWidth: 15 * Math.max(n, 6) + 2,
          regionHeight: 15 * Math.max(r, 6) + 2
        });
      }), this.state = {
        row: 3,
        column: 3,
        regionWidth: 92,
        regionHeight: 92
      };
    }
    componentDidMount() {
      E.A.waitALitteWhile(() => {
        var e;
        h().findDOMNode(this).focus();
      });
    }
    calculateRowColumn(e, t) {
      var r = h().findDOMNode(this),
        n = S.A.getElementRect(r),
        i = Math.max(0, e - n.left),
        o = Math.max(0, t - n.top),
        s,
        a;
      return {
        row: Math.min(Math.ceil(o / 15), 12),
        column: Math.min(Math.ceil(i / 15), 12)
      };
    }
    renderCells() {
      var e = {
          border: "1px solid var(--ui-border, lightgray)",
          background: "lightgreen",
          display: "inline-block",
          width: 9,
          height: 9,
          margin: 2
        },
        t = {
          display: "block",
          height: 15
        };
      return c().createElement("tc-cells", {
        style: {
          position: "absolute",
          left: 2,
          top: 2
        }
      }, f().range(0, this.state.row).map(r => c().createElement("tc-row", {
        style: t,
        key: r
      }, f().range(0, this.state.column).map(t => c().createElement("tc-box", {
        style: e,
        key: r + "_" + t
      })))));
    }
    renderFixedCells() {
      var e = {
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          display: "inline-block",
          width: 9,
          height: 9,
          margin: 2
        },
        t = {
          display: "block",
          height: 15
        };
      return c().createElement("tc-cells", {
        style: {
          position: "absolute",
          left: 2,
          top: 2
        }
      }, f().range(0, this.fixedRow).map(r => c().createElement("tc-row", {
        style: t,
        key: r
      }, f().range(0, this.fixedColumn).map(t => c().createElement("tc-box", {
        style: e,
        key: r + "_" + t
      })))));
    }
    render() {
      var e = {
          position: "fixed",
          top: this.props.top || 300,
          left: this.props.left || 300,
          width: 200,
          height: 200,
          outline: "none",
          overflow: "hidden"
        },
        t = {
          display: "block",
          padding: 0,
          margin: 0,
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface-muted, #f7f7f7)",
          width: this.state.regionWidth,
          height: this.state.regionHeight
        };
      return c().createElement("table-creator", {
        tabIndex: -1,
        onMouseDown: e => {
          var t = this.calculateRowColumn(e.clientX, e.clientY),
            r = t.row,
            n = t.column;
          this.props.onSelect(r, n);
        },
        onBlur: () => this.props.onClose(),
        style: e,
        onMouseMove: this.handleMouseMove
      }, c().createElement("tc-wrapper", {
        style: t
      }, this.renderFixedCells(), this.renderCells()));
    }
  }
  var el = r(88987);
  function tl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function rl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? tl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class nl extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "autoCompleteEnabled", !0), (0, n.A)(this, "enableTheRest", !0), (0, n.A)(this, "component", null), (0, n.A)(this, "lastOptions", void 0), (0, n.A)(this, "renderDelayRunObj", E.A.createLaterRunObject("first-request", 50)), (0, n.A)(this, "state", {
        showTableCreator: !1
      }), (0, n.A)(this, "handleForceRefreshDelayFunc", () => {
        this.forceUpdate();
      }), (0, n.A)(this, "handleSuggestionClick", e => {
        this.raiseRequestItem(e, "autocomplete");
      }), (0, n.A)(this, "handleTableClick", e => {
        this.enableTheRest && (this.setState({
          showTableCreator: !0
        }), e.stopPropagation());
      }), (0, n.A)(this, "handleImageClick", e => {
        this.enableTheRest && this.raiseRequestItem(e, "image");
      }), (0, n.A)(this, "handleCheckboxClick", e => {
        this.enableTheRest && this.raiseRequestItem(e, "checkbox");
      }), (0, n.A)(this, "handleDiagramItemSelect", e => {
        this.props.onRequestItem(e);
      });
    }
    shouldComponentUpdate(e, t) {
      var r;
      return t != this.state || e.hide != this.props.hide || e.diagramOnlyMode != this.props.diagramOnlyMode || e.hiddenOnDefaultItemsBar != this.props.hiddenOnDefaultItemsBar;
    }
    raiseRequestItem(e, t) {
      e.stopPropagation(), e.preventDefault(), this.props.onRequestItem(t);
    }
    setItemsEnable(e, t) {
      this.props.diagramOnlyMode || this.autoCompleteEnabled == e && this.enableTheRest == t && null == this.component || (this.autoCompleteEnabled = e, this.enableTheRest = t, this.component = null, this.forceRefresh());
    }
    requestRender(e, t) {
      this.component != e && (!this.props.diagramOnlyMode || "diagram" == t.requestType && null != e) && (this.component = e, this.lastOptions = t, this.forceRefresh());
    }
    forceRefresh() {
      this.renderDelayRunObj.later(this.handleForceRefreshDelayFunc);
    }
    renderNormalItems() {
      var e = v()({
          disabled: !this.autoCompleteEnabled
        }),
        t = v()({
          disabled: !this.enableTheRest
        });
      return c().createElement("item-container", null, c().createElement("item", {
        title: "Show Suggestion Box",
        className: v()("trigger-item", e),
        onMouseDown: this.handleSuggestionClick
      }, c().createElement("svg", null, c().createElement("path", {
        d: "M0 4v11h16v-14h-16v3zM14 2h1v1h-1v-1zM1 4h14v10h-14v-10z",
        stroke: "none"
      })), c().createElement("i", {
        className: "fa fa-bars",
        "aria-hidden": "true"
      })), c().createElement("div", {
        title: "Insert Diagram",
        "data-amt": "insert-diagram",
        className: t
      }, c().createElement(el.c, {
        disabled: !this.enableTheRest,
        onItemSelect: this.handleDiagramItemSelect
      })), c().createElement("item", {
        title: "Insert Table",
        className: v()("table-item", t),
        onMouseDown: this.handleTableClick
      }, Zi.A.table), c().createElement("item", {
        title: "Insert Image",
        style: {
          padding: "4px 0px 0px 5px"
        },
        className: v()("image-item", t),
        onMouseDown: this.handleImageClick
      }, Zi.A.imageIcon), c().createElement("item", {
        title: "Insert Checkbox",
        style: {
          paddingBottom: 1
        },
        className: v()("checkbox-item", t),
        onMouseDown: this.handleCheckboxClick
      }, Zi.A.checkboxIcon));
    }
    renderTableCreator() {
      if (this.state.showTableCreator) {
        var e = h().findDOMNode(this);
        if (e) var t = S.A.getElementRect(e),
          r = t.left + 40,
          n = t.top + 60;
        return c().createElement($a, {
          left: r,
          top: n,
          onSelect: (e, t) => {
            this.setState({
              showTableCreator: !1
            }), this.props.onRequestItem("table", {
              row: e,
              column: t
            });
          },
          onClose: () => this.setState({
            showTableCreator: !1
          })
        });
      }
    }
    renderForCustomComponent(e) {
      if (this.lastOptions.noWrap) return this.component;
      var t = rl(rl({}, this.props.itemsBarContainerStyle), {}, {
        padding: 3,
        display: "nothing" == this.component.key ? "none" : void 0
      });
      return c().createElement("items-bar", {
        class: v()(e, "diagram"),
        style: t
      }, this.component);
    }
    render() {
      var e = v()({
        "mobile-tablet": Xe.A.isMobileOrTablet(),
        "is-android": Xe.A.isAndroid()
      });
      if (this.component) return this.renderForCustomComponent(e);
      if (Xe.A.isMobileOrTablet()) return c().createElement("div", null);
      if (this.props.hide || "component-specific" == this.props.itemsBarEnabled) return c().createElement("nothing", null);
      var t = this.props.itemsBarContainerStyle;
      return this.props.hiddenOnDefaultItemsBar && (t = rl(rl({}, this.props.itemsBarContainerStyle), {}, {
        display: "none"
      })), c().createElement("items-bar", {
        class: e,
        style: t
      }, this.renderNormalItems(), this.renderTableCreator(), c().createElement("round-close-icon", {
        onClick: this.props.onHide
      }, c().createElement("div", {
        style: {
          position: "absolute",
          width: 24,
          height: 15,
          top: -6,
          left: -2,
          background: "transparent"
        }
      }), c().createElement("i", {
        className: "fa fa-times",
        "aria-hidden": "true"
      })));
    }
  }
  function il(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ol(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? il(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : il(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class sl {
    get(e, t) {
      if ("function" == e) {
        var r = {
            type: "function-plot",
            diagramWidth: t
          },
          n;
        return ol(ol({}, Je.A.getByName("\\diagram")), {}, {
          customData: r
        });
      }
      if ("xymatrix" == e) {
        var i = {
            type: "xymatrix-request",
            diagramWidth: t
          },
          o;
        return ol(ol({}, Je.A.getByName("\\diagram")), {}, {
          customData: i
        });
      }
      switch (e) {
        case "3d-func":
        case "surface":
        case "scatter3d":
        case "mesh3d":
        case "scatter":
        case "line":
        case "area":
        case "bar":
        case "contour":
        case "heatmap":
        case "pie":
          var s = {
              type: "plotly-request",
              plotType: e,
              diagramWidth: t
            },
            a;
          return ol(ol({}, Je.A.getByName("\\diagram")), {}, {
            customData: s
          });
      }
    }
  }
  const al = new sl();
  function ll(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function cl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ll(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ll(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class dl {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "renderSelectionSettingDelayRunObj", E.A.createLaterRunObject("latest", 50, !0)), (0, n.A)(this, "requestRenderDelayRunObj", E.A.createLaterRunObject("latest", 10, !0)), (0, n.A)(this, "itemsBar", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "getItemsBarRef", e => {
        this.itemsBar = e;
      }), (0, n.A)(this, "requestRenderItemsBarComponent", (e, t) => {
        this.deactivated || this.requestRenderDelayRunObj.later(() => {
          this.itemsBar && this.itemsBar.requestRender(e, t);
        });
      }), (0, n.A)(this, "handleRequestItem", (e, t) => {
        if ("autocomplete" != e) {
          if ("diagram" != e && "drawing" != e) {
            if ("table" != e) {
              if ("image" != e) {
                if ("checkbox" != e) {
                  var r = this.target.getContainerModel(),
                    n = q.T.getBCRect(r.getEditorHtmlElement(), this.target.getDocZoomContainer()),
                    i = al.get(e, q.T.widthOf(n));
                  if (i) {
                    var o = this.target.getController().handleBySymbolInfo(i, this.target.getContainerModel());
                    this.target.handleResult(o);
                  }
                } else {
                  var s = this.target.getController().handleBySymbolInfo(Je.A.getCheckbox(), this.target.getContainerModel());
                  this.target.handleResult(s);
                }
              } else {
                var a = this.target.getController().insertImageContainer(this.target.getContainerModel());
                this.target.handleResult(a);
              }
            } else {
              var l = cl(cl({}, Je.A.getByName("\\table")), {}, {
                  row: t.row,
                  column: t.column
                }),
                c = this.target.getController().handleBySymbolInfo(l, this.target.getContainerModel());
              this.target.handleResult(c);
            }
          } else {
            var d = Je.A.getByName("\\diagram"),
              h = this.target.getController().handleBySymbolInfo(d, this.target.getContainerModel());
            this.target.handleResult(h);
          }
        } else this.target.requestAutoComplete();
      }), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    updateItemsBar() {
      this.deactivated || this.target.isReadOnly() || this.renderSelectionSettingDelayRunObj.later(() => {
        if (this.itemsBar) {
          var e = this.target.getContainerModel();
          if (!e.isDiagramSelected) if (Xe.A.isMobileOrTablet() && (e.isImageContainerSelected || e.isInlineImageSelected)) this.itemsBar.requestRender(c().createElement("nothing", {
            key: "nothing"
          }), {
            requestType: "nothing"
          });else if (e.isSelected()) {
            if (e.isInsideDiagram() || e.isInsideLatexTable() || e.isInsideRawLatex() || e.isAtCaption() || e.isRestrictedTextMode() || e.isAtTextModeGroupInline()) this.itemsBar.setItemsEnable(!0, !1);else if (e.isCursorControlled || e.insideCodeSection()) this.itemsBar.setItemsEnable(!1, !1);else {
              var t = !e.isInsideTextSymbol() && !this.target.isSelectOnly();
              this.itemsBar.setItemsEnable(t, e.isTextModeSelected() && t);
            }
          } else this.itemsBar.setItemsEnable(!1, !1);
        }
      });
    }
    renderItemsBar() {
      if (!this.deactivated) {
        var e = this.target.props;
        if (e.itemsBarEnabled || !this.target.isRestrictedView() && !this.target.isReadOnly()) if (e.requestRenderItemsBar) {
          var t = c().createElement(nl, {
            itemsBarContainerStyle: e.itemsBarContainerStyle,
            itemsBarEnabled: e.itemsBarEnabled,
            hide: Xe.A.isMobileOrTablet() && this.target.isSelectOnly() || e.itemsBarHide,
            onHide: e.onItemsBarHide,
            onRequestItem: this.handleRequestItem,
            ref: this.getItemsBarRef
          });
          e.requestRenderItemsBar(t);
        } else ;
      }
    }
  }
  var hl = r(6810),
    pl = r(98930),
    ul = r(92855);
  function gl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ml(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class fl extends c().Component {
    constructor() {
      var e;
      super(...arguments), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "state", {
        style: this.props.theorem.style || bt.T.getDefaultTheoremStyle(),
        countTemplate: null !== (e = this.props.theorem.countTemplate) && void 0 !== e ? e : bt.T.getDefaultCountingTemplate(),
        countPaddings: this.props.theorem.countPaddings || bt.T.getDefaultCountPaddings(),
        italicContent: this.props.theorem.italicContent
      }), (0, n.A)(this, "handleOk", () => {
        this.props.onOk(ml(ml({}, this.props.theorem), {}, {
          style: this.state.style,
          countTemplate: this.state.countTemplate,
          countPaddings: this.state.countPaddings,
          italicContent: this.state.italicContent
        }));
      });
    }
    renderContent() {
      var e = {
          display: "inline-block",
          width: 140
        },
        t = {
          display: "flex",
          alignItems: "baseline",
          marginBottom: 5
        },
        r = this.state.countPaddings;
      return c().createElement("div", {
        style: {
          fontSize: 13,
          padding: 5
        }
      }, c().createElement("div", {
        style: t
      }, c().createElement("span", {
        style: e
      }, "Style: "), c().createElement(ul.G, {
        requestPickerSettings: this.props.requestPickerSettings,
        isFontNameHidden: !0,
        isFontSizeHidden: !0,
        requestFontSizeRatio: () => 1,
        fontBaseSize: 17,
        expandZIndex: 100,
        isFontBgColorHidden: !0,
        hBarStyle: {
          marginBottom: 0
        },
        containerStyle: {
          width: 200,
          display: "inline-flex",
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          padding: "3px 10px 5px 10px",
          flex: 1,
          zIndex: 1
        },
        blockStyle: this.state.style,
        onBlockStyleChange: e => {
          this.setState({
            style: e
          });
        },
        showClearButton: !0,
        clearButtonText: "Clear",
        onClear: () => {
          this.setState({
            style: {}
          });
        }
      })), c().createElement("div", {
        style: t
      }, c().createElement("span", {
        style: e
      }, "Count Template: "), this.renderCountTemplate()), c().createElement("div", {
        style: t
      }, c().createElement("span", {
        style: e
      }, "Count Padding Left: "), this.renderNumbericInput(r.left, e => {
        this.setState({
          countPaddings: ml(ml({}, this.state.countPaddings), {}, {
            left: e
          })
        });
      })), c().createElement("div", {
        style: t
      }, c().createElement("span", {
        style: e
      }, "Count Padding Right: "), this.renderNumbericInput(r.right, e => {
        this.setState({
          countPaddings: ml(ml({}, this.state.countPaddings), {}, {
            right: e
          })
        });
      })), c().createElement("div", {
        style: t
      }, c().createElement("span", {
        style: e
      }, "Italic Content: "), this.renderItalicContent()));
    }
    renderNumbericInput(e, t) {
      return c().createElement(Vn.A, {
        disableSlider: !0,
        containerStyle: {
          display: "inline-flex",
          marginLeft: 0,
          fontSize: 13,
          paddingTop: 0
        },
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: e,
        unitStyle: {
          fontSize: 12
        },
        style: {
          fontSize: 12,
          width: 30,
          color: "var(--ui-text-muted, gray)"
        },
        onValueChanged: t
      });
    }
    renderCountTemplate() {
      var e = this.state.countTemplate,
        t = {
          fontSize: 13,
          width: 220
        };
      return c().createElement("div", null, c().createElement("input", {
        style: t,
        value: e,
        onChange: e => {
          this.setState({
            countTemplate: e.target.value
          });
        }
      }), c().createElement(pl.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        msg: c().createElement("span", null, "Theorem Counting to display, ", c().createElement("b", null, "${count}"), " will be replaced by actual number. For example: ", c().createElement("br", null), "Prefix ", "${count} ->", " Prefix 1 ")
      }));
    }
    renderItalicContent() {
      var e,
        t = [{
          key: "inherit",
          value: this.props.isContentItalicAll ? "Default (True)" : "Default (False)"
        }, {
          key: "true",
          value: "True"
        }, {
          key: "false",
          value: "False"
        }];
      return c().createElement(Fo.A, {
        width: 250,
        data: t,
        value: this.state.italicContent || "inherit",
        onChange: e => {
          this.setState({
            italicContent: "inherit" == e ? void 0 : e
          });
        }
      });
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "More Options for ".concat(this.props.theorem.name),
        style: ml({
          minWidth: 200,
          minHeight: 150,
          width: "auto",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, Zr.A.getCenterStyle()),
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  class yl extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "onShareNumeringChanged", (e, t) => {
        this.raiseTheoremPropChange(t, "shareWith", e);
      }), (0, n.A)(this, "onWithNestedNumeringChanged", (e, t) => {
        this.raiseTheoremPropChange(t, "nestedWith", e);
      }), (0, n.A)(this, "onNumeringSectionChanged", (e, t) => {
        this.raiseTheoremPropChange(t, "section", e);
      }), (0, n.A)(this, "onNumeringTypeChanged", (e, t) => {
        var r = dt.A.setProp(t, "numeringType", e);
        if ("share" == e) {
          var n = this.getSharableKeys(t),
            i = t.shareWith || (n[0] || {
              key: ""
            }).key;
          r = dt.A.setProp(r, "shareWith", i), r = dt.A.setProp(r, "section", void 0), r = dt.A.setProp(r, "nestedWith", void 0);
        } else if ("section" == e) r = dt.A.setProp(r, "section", "section"), r = dt.A.setProp(r, "shareWith", void 0), r = dt.A.setProp(r, "nestedWith", void 0);else if ("with" == e) {
          var o = this.getSharableKeys(t),
            s = t.nestedWith || (o[0] || {
              key: ""
            }).key;
          r = dt.A.setProp(r, "nestedWith", s), r = dt.A.setProp(r, "shareWith", void 0), r = dt.A.setProp(r, "section", void 0);
        }
        this.props.onTheoremChange(r);
      }), (0, n.A)(this, "numeringTypes", [{
        key: "default",
        value: "Default"
      }, {
        key: "share",
        value: "Share With"
      }, {
        key: "section",
        value: "Section"
      }, {
        key: "with",
        value: "Nested With "
      }]), (0, n.A)(this, "sectionTypes", [{
        key: "section",
        value: "First Level"
      }, {
        key: "subsection",
        value: "Second Level"
      }, {
        key: "subsubsection",
        value: "Third Level"
      }]);
    }
    render() {
      var e = this.props.theorem;
      return c().createElement("theorem-input", {
        style: {
          fontSize: 12,
          display: "flex",
          alignItems: "baseline",
          flexDirection: "row",
          padding: 4
        }
      }, c().createElement("button", {
        className: "btn-normal",
        style: {
          marginRight: 5
        },
        onClick: () => this.setState({
          showStyleDialog: !0
        })
      }, "Options"), hl.A.wrapInput(c().createElement("input", {
        value: e.env,
        onChange: t => this.onTheoremEnvChanged(t.target.value, e)
      }), {
        width: 80,
        marginRight: 5
      }), hl.A.wrapInput(c().createElement("input", {
        value: e.name,
        onChange: t => this.onTheoremNameChanged(t.target.value, e)
      })), c().createElement("theorem-input-options", {
        style: {
          flexGrow: 1,
          paddingLeft: 5
        }
      }, this.renderOptions(e)), this.renderUseOrDelete(), this.renderStyleDialog());
    }
    renderStyleDialog() {
      if (this.state.showStyleDialog) return c().createElement(fl, {
        requestPickerSettings: this.props.requestPickerSettings,
        isContentItalicAll: this.props.isContentItalicAll,
        theorem: this.props.theorem,
        onClose: () => {
          this.setState({
            showStyleDialog: !1
          });
        },
        onOk: e => {
          this.setState({
            showStyleDialog: !1
          }), this.props.onTheoremChange(e);
        }
      });
    }
    renderOptions(e) {
      if (e.ignoreNumbering) return c().createElement("span", null, c().createElement(Yn.A, {
        name: "Numbering",
        checked: !1,
        onValueChanged: () => this.onCheckboxNumeringChanged(!1, e)
      }));
      var t;
      if ("section" == e.numeringType) t = c().createElement(Fo.A, {
        style: {
          display: "inline-block",
          paddingLeft: 5
        },
        width: 90,
        value: e.section,
        onChange: t => this.onNumeringSectionChanged(t, e),
        data: this.sectionTypes
      });else if ("share" == e.numeringType) {
        var r = this.getSharableKeys(e);
        t = c().createElement(Fo.A, {
          style: {
            display: "inline-block",
            paddingLeft: 5
          },
          width: 120,
          value: e.shareWith,
          onChange: t => this.onShareNumeringChanged(t, e),
          data: r
        });
      } else if ("with" == e.numeringType) {
        var r = this.getSharableKeys(e);
        t = c().createElement(Fo.A, {
          style: {
            display: "inline-block",
            paddingLeft: 5
          },
          width: 120,
          value: e.nestedWith,
          onChange: t => this.onWithNestedNumeringChanged(t, e),
          data: r
        });
      }
      return c().createElement("span", null, c().createElement(Yn.A, {
        checked: !0,
        onValueChanged: () => this.onCheckboxNumeringChanged(!0, e),
        name: "Numbering on",
        style: {
          display: "inline-block"
        }
      }), c().createElement(Fo.A, {
        style: {
          display: "inline-block",
          paddingLeft: 5
        },
        width: 90,
        value: e.numeringType || "default",
        onChange: t => this.onNumeringTypeChanged(t, e),
        data: this.numeringTypes
      }), t);
    }
    onTheoremNameChanged(e, t) {
      this.raiseTheoremPropChange(t, "name", e);
    }
    onTheoremEnvChanged(e, t) {
      this.raiseTheoremPropChange(t, "env", e);
    }
    raiseTheoremPropChange(e, t, r) {
      var n = dt.A.setProp(e, t, r);
      this.props.onTheoremChange(n);
    }
    onCheckboxNumeringChanged(e, t) {
      var r = dt.A.setProp(t, "ignoreNumbering", e);
      e && (r = dt.A.update(r, {
        section: void 0,
        shareWith: void 0
      })), this.props.onTheoremChange(r);
    }
    getSharableKeys(e) {
      return this.props.allTheorems.filter(t => t != e && !t.ignoreNumbering).map(e => ({
        key: e.key,
        value: e.name
      }));
    }
    renderUseOrDelete() {
      var e = this.props.usage;
      return e ? c().createElement("span", {
        style: {
          paddingRight: 10
        }
      }, "(", e, " used)") : c().createElement("span", {
        style: {
          paddingRight: 10,
          fontSize: 14
        }
      }, c().createElement("i", {
        onMouseDown: () => this.props.onTheoremChange("removed"),
        className: "fa fa-trash-o deletable",
        style: {
          padding: "1px 4px"
        }
      }));
    }
  }
  class vl extends l.Component {
    constructor(e) {
      var t, r, i;
      super(e), (0, n.A)(this, "onAdd", () => {
        var e = this.state.theorems.concat([{
          key: "trr".concat(Math.random().toString()),
          env: "new theorem",
          name: "New Theorem"
        }]);
        this.setState({
          theorems: e
        });
      }), (0, n.A)(this, "handleTheoremChange", (e, t) => {
        if ("removed" != t) {
          var r = this.state.theorems.findIndex(e => e.key == t.key);
          F.Q.idxFound(r) && this.setState({
            theorems: dt.A.setIndex(this.state.theorems, r, t)
          });
        } else this.removeTheorem(e.key);
      }), this.state = {
        theorems: bt.T.getTheorems(this.props.theoremInfo),
        italic: null === (t = null === (r = this.props.theoremInfo) || void 0 === r || null === (i = r.theoremContentStyle) || void 0 === i ? void 0 : i.isItalic) || void 0 === t || t
      };
    }
    getAllUsages() {
      return this.props.theoremUsages || {};
    }
    getUsageOf(e) {
      var t;
      return this.getAllUsages()[e.key] || 0;
    }
    getTheorems() {
      return this.state.theorems;
    }
    isTheoremItalic() {
      return this.state.italic;
    }
    removeTheorem(e) {
      var t = this.state.theorems.findIndex(t => t.key == e),
        r = dt.A.splice(this.state.theorems, t, 1);
      this.setState({
        theorems: r
      });
    }
    validate(e) {
      var t = f().uniqBy(e, e => e.name).length < e.length,
        r;
      return t ? {
        isError: !0,
        messages: "Duplication of theorem name is not allowed"
      } : (t = f().uniqBy(e, e => e.env).length < e.length) ? {
        isError: !0,
        messages: "Duplication of theorem Latex environment is not allowed"
      } : f().some(e, e => !e.name || !e.env) ? {
        isError: !0,
        messages: "Name and Latex Environemnt must have value"
      } : {
        isError: !1
      };
    }
    renderTheorems(e) {
      return e.map(e => c().createElement(yl, {
        requestPickerSettings: this.props.requestPickerSettings,
        isContentItalicAll: this.state.italic,
        key: e.key,
        allTheorems: this.state.theorems,
        theorem: e,
        onTheoremChange: t => {
          this.handleTheoremChange(e, t);
        },
        usage: this.getUsageOf(e)
      }));
    }
    isValid() {
      return !this.validate(this.state.theorems).isError;
    }
    renderValidationError() {
      var e = this.validate(this.state.theorems);
      if (e.isError) return c().createElement("validation-error-message", {
        style: {
          color: "var(--ui-danger, #ce0303)",
          textAlign: "center",
          width: "100%",
          fontSize: 12
        }
      }, e.messages);
    }
    render() {
      return c().createElement("theorem-management", {
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          minWidth: 630
        }
      }, c().createElement("div", {
        style: {
          padding: 5,
          paddingBottom: 10,
          borderBottom: "solid 1px var(--ui-border, lightgray)",
          marginBottom: 10
        }
      }, c().createElement(Yn.A, {
        name: "Italic Content",
        checked: this.state.italic,
        onValueChanged: e => {
          this.setState({
            italic: e
          });
        }
      })), c().createElement("theorem-header", {
        style: {
          fontSize: 12,
          paddingBottom: 5
        }
      }, c().createElement("span", {
        style: {
          width: 91,
          display: "inline-block",
          marginLeft: 64
        }
      }, "Latex Env"), c().createElement("span", null, "Name")), c().createElement("theorem-content", {
        style: {
          flexGrow: 1,
          overflow: "auto"
        }
      }, this.renderTheorems(this.state.theorems), c().createElement("span", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: 10,
          paddingRight: 10
        }
      }, c().createElement("button", {
        onMouseDown: this.onAdd,
        className: "btn-normal",
        style: {
          width: 60
        }
      }, "Add"))), this.renderValidationError());
    }
  }
  function bl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function xl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? bl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Cl = Zr.A.getModalDialog();
  class Sl extends l.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "theormManagement", void 0), (0, n.A)(this, "saving", !1), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "handleSave", e => {
        this.saving || this.theormManagement.isValid() && (this.saving = !0, this.setState({
          loading: !0,
          errorMessage: void 0
        }), this.props.onSave(this.theormManagement.getTheorems(), this.theormManagement.isTheoremItalic(), "save-set-as-default" == e).then(() => {
          this.saving = !1, this.unmounted || this.setState({
            loading: !1
          });
        }).catch(() => {
          this.saving = !1, this.unmounted || this.setState({
            loading: !1,
            errorMessage: "Error on Saving, please try again"
          });
        }));
      });
    }
    componentWillUnmount() {
      this.unmounted = !0;
    }
    render() {
      return c().createElement(Cl, {
        show: !0
      }, c().createElement(Vr.A, {
        size: "large",
        scroll: "body",
        title: "Theorem Options",
        busy: this.state.loading,
        footerProgressing: this.state.loading,
        contentDisabled: this.state.loading,
        show: !0,
        style: xl({
          height: 400,
          maxWidth: "95vw",
          overflowY: "auto",
          overflowX: "hidden"
        }, Zr.A.getCenterStyle()),
        contentStyle: {
          overflow: "auto"
        },
        onClose: this.props.onClose,
        renderFooterContent: () => c().createElement(en, {
          isError: !!this.state.errorMessage,
          loading: this.state.loading,
          errorMessage: this.state.errorMessage,
          loadingMessage: void 0,
          onSave: this.handleSave,
          onCancel: this.props.onClose,
          buttonActionFixed: !0,
          buttonDefaultName: "OK"
        })
      }, c().createElement(vl, {
        requestPickerSettings: this.props.requestPickerSettings,
        theoremUsages: this.props.theoremUsages,
        theoremInfo: this.props.theoremInfo,
        ref: e => this.theormManagement = e
      })));
    }
  }
  class Al {
    build(e) {
      var t = [];
      return u.YG(e, "compositeblock.theorem").forEach((e, r) => {
        var n = e.reactInstance;
        if (n) {
          var i = u.yR(u.jS(e, "theorem-name")),
            o = u.yR(u.jS(e, "theorem-counting")),
            s = u.yR(u.YG(e, ">editarea>line").slice(0, 1));
          s.length > 50 && (s = s.substr(0, 47) + "..."), t.push({
            id: n.getModel().id,
            prefix: "".concat(i, " ").concat(o),
            text: s
          });
        }
      }), t;
    }
  }
  var wl = new Al();
  function El(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function kl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? El(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : El(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Ol = Zr.A.getModalDialog();
  class Dl extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleCommit", e => {
        this.props.onSelect(e.item.id);
      }), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      });
      var t = this.buildGroups();
      this.state = {
        groups: t,
        selectedItem: {
          group: t[0],
          item: f().last(t[0].items)
        }
      };
    }
    buildGroups() {
      var e;
      return [{
        name: "root",
        items: wl.build(this.props.requestRootEditor())
      }];
    }
    renderItemSelect() {
      return this.state.groups[0].items.length <= 0 ? c().createElement("div", {
        style: {
          padding: 10,
          fontSize: 14,
          textAlign: "center"
        }
      }, "There is no theorem to select") : c().createElement(Ha.A, {
        mainStyle: {
          paddingBottom: 0
        },
        itemContainerStyle: {
          width: "100%",
          border: "1px solid transparent"
        },
        itemContainerStyleSelected: {
          width: "100%",
          background: "var(--ui-selection, rgb(227, 253, 225))",
          border: "1px dotted var(--ui-border, gray)"
        },
        groups: this.state.groups,
        scrollToSelectedOnOpen: !0,
        preventHover: !0,
        numberOfItemsPerLine: 1,
        renderGroupName: () => null,
        renderItem: (e, t, r) => c().createElement("div", {
          style: {
            padding: 5,
            cursor: "pointer"
          }
        }, c().createElement("span", {
          style: {
            fontWeight: "bold",
            paddingRight: "0.3em"
          }
        }, e.prefix), c().createElement("span", null, e.text)),
        selected: this.state.selectedItem,
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit
      });
    }
    render() {
      return c().createElement(Ol, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Select theorem",
        size: "medium",
        scroll: "body",
        headerHidden: !0,
        style: kl({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 400,
          maxHeight: 250
        }, Zr.A.getCenterStyle()),
        backDrop: !0,
        onCancel: this.props.onClose,
        onClose: this.props.onClose,
        showOk: !1,
        show: !0
      }, c().createElement("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          fontSize: 13
        },
        className: "theorem-ref-select"
      }, this.renderItemSelect())));
    }
  }
  function Pl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ml(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Pl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Il extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "needTheoremNumbering", !0), (0, n.A)(this, "needTheoremRefNumbering", !0), (0, n.A)(this, "renderRequest", void 0), (0, n.A)(this, "handleTheoremRefSelect", e => {
        var t,
          r = Ml(Ml({}, Je.A.getByName("\\theorem-ref")), {}, {
            tagId: e
          });
        this.getTarget().closeRender(this), E.A.next(() => {
          this.getTarget().insertBySymbolInfo(r);
        });
      }), (0, n.A)(this, "notifyTheorem", e => {
        "theorem-change" == e ? this.needTheoremNumbering = !0 : this.needTheoremRefNumbering = !0;
      }), (0, n.A)(this, "showTheoremRefSelect", () => {
        this.renderRequest = "ref-select", this.getTarget().requestRender(this);
      });
    }
    render() {
      return this.renderRequest && "management" != this.renderRequest ? this.renderTagSelect() : this.renderManagement();
    }
    renderTagSelect() {
      var e = this.getTarget();
      return c().createElement(Dl, {
        requestRootEditor: () => e.getEditorHtmlElement(),
        onClose: () => {
          this.getTarget().closeRender(this), this.getTarget().hidenInputFocus(!0);
        },
        onSelect: this.handleTheoremRefSelect
      });
    }
    renderManagement() {
      var e = this.getState(),
        t = this.getTarget(),
        r = bt.T.getTheoremUsages(t.getEditorHtmlElement());
      return c().createElement(Sl, {
        requestPickerSettings: this.target.getFixedContextHandler().getMtFuncs().requestColorPickerSettings,
        theoremInfo: e.mainModel.theoremInfo,
        theoremUsages: r,
        onSave: (t, r, n) => {
          var o,
            s = {
              theorems: t,
              theoremContentStyle: Ml(Ml({}, null === (o = e.mainModel.theoremInfo) || void 0 === o ? void 0 : o.theoremContentStyle), {}, {
                isItalic: r
              })
            };
          return n ? this.getTarget().raiseSaveTheoremAsDefault(s).then(() => {
            this.applyNewTheorems(s);
          }) : (0, i.cb)(200).then(() => {
            this.applyNewTheorems(s);
          });
        },
        onClose: () => this.getTarget().closeRender(this)
      });
    }
    applyNewTheorems(e) {
      this.getTarget().setTheoremInfo(e), E.A.next(() => {
        this.getTarget().closeRender(this);
      });
    }
    setTheoremIfChanged(e) {
      var t = this.getState();
      e.theoremInfo != t.mainModel.theoremInfo && (e.theoremInfo = t.mainModel.theoremInfo);
    }
    processTheoremNumbering(e, t) {
      var r;
      if (this.needTheoremNumbering || e) {
        this.needTheoremRefNumbering = !0;
        var n,
          i = this.getTarget().getPageSettingsSessionCache().pageSection || {};
        this.needTheoremNumbering = !1, r = bt.T.buildTheoremNumber(this.getTarget().getEditorHtmlElement(), this.getState().mainModel.theoremInfo, i, t);
      }
      this.needTheoremRefNumbering && (this.needTheoremRefNumbering = !1, bt.T.buildTheoremRef(this.getTarget().getEditorHtmlElement(), r));
    }
    showTheoremManagement() {
      this.renderRequest = "management", this.getTarget().requestRender(this);
    }
  }
  var Tl = r(35267);
  class Ll {
    forceUpdateAllTagRefs(e) {
      u.YG(e, "tag-ref-name.tag-ref-name").forEach((e, t) => {
        var r = e.parentElement.reactInstance;
        r && r.forceRefresh();
      }), u.YG(e, "ref-tag.line-tag").forEach((e, t) => {
        var r = e.reactInstance;
        r && r.forceRefresh();
      });
    }
    autoNumbering(e, t, r) {
      if (e) {
        var n = this.runTags(e, t, r);
        this.runTagRefs(e, n);
      }
    }
    runTags(e, t, r) {
      var n = {},
        i = S.A.findEditLines(e),
        o = {
          ctx: this.initCountingCtx(r),
          lines: i,
          pageSection: t.pageSection || {}
        },
        s;
      return this.gatherTagsInOrder(e).forEach(e => {
        var t = e.reactInstance;
        if (t) {
          var r = t.getTagInfo();
          if (r.type && "none" != r.type) {
            var i = r.tagId;
            if ("auto" == r.type) {
              var s = this.resolveCounting(o, e, {
                type: "increase"
              });
              n[i] = {
                type: "text",
                value: "(".concat(s, ")")
              }, t.setResolved("(".concat(s, ")"));
            } else if ("reset" == r.type) {
              var a = this.resolveCounting(o, e, {
                type: "reset",
                resetTo: r.resetNumber || 1
              });
              n[i] = {
                type: "text",
                value: "(".concat(a, ")")
              }, t.setResolved("(".concat(a, ")"));
            } else if ("custom-in" == r.type) {
              var l = this.resolveCounting(o, e, {
                  type: "increase"
                }),
                c = this.resolveDisplay(r.tagName, l);
              n[i] = {
                type: "text",
                value: c
              }, t.setResolved(c);
            } else {
              var d = this.resolveCounting(o, e, {
                  type: "skip"
                }),
                h = this.resolveDisplay(r.tagName, d);
              n[i] = {
                type: "text",
                value: h
              }, t.setResolved(h);
            }
          }
        }
      }), n;
    }
    initCountingCtx(e) {
      switch (e) {
        case "normal":
          return {
            type: "normal",
            counting: 1
          };
        case "section1":
          return {
            type: "section",
            counting: 1,
            level: "1",
            prevPrefix: void 0
          };
        case "section2":
          return {
            type: "section",
            counting: 1,
            level: "2",
            prevPrefix: void 0
          };
        case "section3":
          return {
            type: "section",
            counting: 1,
            level: "3",
            prevPrefix: void 0
          };
      }
    }
    resolveCounting(e, t, r) {
      var n = e.lines,
        i = e.pageSection;
      switch (e.ctx.type) {
        case "normal":
          var o = this.processCounting(e.ctx.counting, r),
            s = (0, Wt.A)(o, 2),
            a = s[0],
            l = s[1];
          return e.ctx.counting = l, "".concat(a);
        case "section":
          var c = u.f$(t, "line.root")[0],
            d = "";
          switch (e.ctx.level) {
            case "1":
              d = Tl.A.buildPrefix(c, n, 1, i) || "0.";
              break;
            case "2":
              d = Tl.A.buildPrefix(c, n, 2, i) || "0.0.";
              break;
            case "3":
              d = Tl.A.buildPrefix(c, n, 3, i) || "0.0.0.";
          }
          var h = e.ctx.prevPrefix == d ? e.ctx.counting : 1,
            p = this.processCounting(h, r),
            g = (0, Wt.A)(p, 2),
            m = g[0],
            f = g[1];
          return e.ctx.counting = f, e.ctx.prevPrefix = d, "".concat(d).concat(m);
      }
    }
    processCounting(e, t) {
      switch (t.type) {
        case "increase":
          return [e, e + 1];
        case "skip":
          return [e, e];
        default:
          return [t.resetTo, t.resetTo + 1];
      }
    }
    runTagRefs(e, t) {
      u.YG(e, "tag-ref-name.tag-ref-name").forEach((e, r) => {
        var n = e.parentElement.reactInstance;
        if (n) {
          var i = n.getModel();
          if (i.refTagId) {
            var o = t[i.refTagId];
            if (o) {
              if ("text" === o.type) n.setResolved("".concat(o.value));
            } else n.setUnresolved();
          } else n.setUnresolved();
        }
      });
    }
    gatherTagsInOrder(e) {
      if (!e) return [];
      for (var t = u.YG(e, "ref-tag.line-tag"), r = [], n = !1, i = 0; i < t.length; i++) {
        var o = t[i];
        if (u.nB(u.aY(o), "tag-direction-vertical")) {
          n = !0;
          var s = u.aY(u.aY(o)),
            a = u.vK(s, "data-tag-group-id");
          this.appendOrAddGroup(r, s, a, o);
        } else r.push(o);
      }
      return n ? f().flatMap(r, e => {
        return this.isVGroup(e) ? f().orderBy(e.cells, [e => e.cIndex, e => e.rIndex], ["asc", "asc"]).map(e => e.tagHtml) : [e];
        var t;
      }) : r;
    }
    appendOrAddGroup(e, t, r, n) {
      var i = f().last(e),
        o = {
          tagHtml: n,
          cIndex: Number.parseInt(u.vK(t, "data-cIndex"), 10),
          rIndex: Number.parseInt(u.vK(t, "data-rIndex"), 10)
        };
      if (i && this.isVGroup(i) && i.groupId == r) i.cells.push(o);else {
        var s = {
          groupId: r,
          cells: [o]
        };
        e.push(s);
      }
    }
    resolveDisplay(e, t) {
      return "(".concat(e.split("${count}").join(t.toString()), ")");
    }
    isVGroup(e) {
      return !!e.cells;
    }
  }
  var Rl = new Ll(),
    Bl = r(4258);
  function Fl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function jl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Fl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _l {
    buildSelectModel(e, t) {
      var r = this.buildTagItems(e);
      if (!(r.length <= 0)) {
        var n = {},
          i = r.map(e => {
            var t = vt.w.nextId();
            n[t] = {
              [e.line.id]: {
                h: q.T.heightOf(e.rect),
                w: q.T.widthOf(e.rect)
              }
            };
            var r = {
              id: vt.w.nextId(),
              type: "composite",
              text: "\\mci-tag-ref",
              tagText: e.tagName,
              tagId: e.tagId,
              elements: {
                value: {
                  id: t,
                  lines: [e.line]
                }
              }
            };
            return {
              id: vt.w.nextId(),
              blocks: [r]
            };
          });
        return [{
          id: vt.w.nextId(),
          lines: i,
          delayRenderCache: {
            av: 1,
            map: n
          },
          pageSettings: t
        }, this.findTagInMiddleOfScreen(r)];
      }
    }
    findTagInMiddleOfScreen(e) {
      for (var t = window.innerHeight, r = e[0].tagId, n = Number.MAX_SAFE_INTEGER, i = 0; i < e.length; i++) {
        var o = e[i],
          s = q.T.toAbsoluteRect(o.rect),
          a = Math.abs((s.top + s.bottom) / 2 - t / 2);
        a < n && (n = a, r = o.tagId);
      }
      return r;
    }
    buildTagItems(e) {
      var t = [];
      return u.YG(e.mtElement, "ref-tag.line-tag").forEach((r, n) => {
        var i = u.vK(r, "data-tag-position"),
          o = u.vK(r, "data-tag-id");
        switch (i) {
          case "line":
            var s = u.f$(r, "line,lazy-line")[0];
            if (S.A.isLazyLine(s)) {
              var a = Bl.O.getDelayLineModel(s);
              t.push({
                line: this.stripBigLine(a),
                tagName: u.yR(r),
                rect: q.T.getBCRect(s, e),
                tagId: o
              });
            } else t.push({
              line: this.stripBigLine(s.reactInstance.getLineData()),
              tagName: u.yR(r),
              rect: q.T.getBCRect(s, e),
              tagId: o
            });
            break;
          case "editarea":
            var l = u.f$(r, "editarea")[0],
              c = u.f$(l, "compositeblock")[0];
            if (c && S.A.isAlignBlock(c)) {
              var d = u.nB(c, "align-symbol-v2"),
                h = d ? ".align-cell" : "td",
                p = d ? ".align-row" : "tr",
                g = u.f$(l, h),
                m = u.KL(g, "previous", h),
                y = u.jS(g, "editarea")[0].reactInstance.getModel().lines[0],
                v = [],
                b = u.jS(m, "editarea")[0];
              b && (v = b.reactInstance.getModel().lines[0].blocks), t.push({
                line: this.stripBigLine(jl(jl({}, y), {}, {
                  blocks: v.concat(y.blocks)
                })),
                tagName: u.yR(r),
                rect: q.T.getBCRect(u.f$(g, p)[0], e),
                tagId: o
              });
            } else t.push({
              line: this.stripBigLine(l.reactInstance.getModel().lines[0]),
              tagName: u.yR(r),
              rect: q.T.getBCRect(u.f$(l, "tr")[0], e),
              tagId: o
            });
            break;
          case "block":
            var x = u.f$(r, "compositeblock")[0],
              C = x.reactInstance.getModel(),
              A = S.A.findEditors(x)[0],
              w = f().last(Object.values(C.elements)[0].lines),
              E = S.A.getLastEditLine(A);
            t.push({
              line: this.stripBigLine(w),
              tagName: u.yR(r),
              rect: q.T.getBCRect(E, e),
              tagId: o
            });
        }
      }), t;
    }
    stripBigLine(e) {
      return e.blocks.length > 50 ? jl(jl({}, e), {}, {
        blocks: e.blocks.slice(0, 49)
      }) : e;
    }
  }
  var Nl = new _l();
  class zl {
    constructor() {
      (0, n.A)(this, "selectItems", []), (0, n.A)(this, "selectedIdx", 0), (0, n.A)(this, "lastSelectedIdx", void 0);
    }
    init(e, t) {
      this.selectItems = u.YG(e, ".mci-tag-select-box-symbol"), this.selectedIdx = this.selectItems.findIndex(e => {
        var r;
        return e.reactInstance.getModel().tagId == t;
      }), this.selectItemCurIdx();
    }
    moveDown() {
      this.selectedIdx < this.selectItems.length - 1 && (this.lastSelectedIdx = this.selectedIdx, this.selectedIdx++, this.selectItemCurIdx());
    }
    moveUp() {
      this.selectedIdx > 0 && (this.lastSelectedIdx = this.selectedIdx, this.selectedIdx--, this.selectItemCurIdx());
    }
    retrieveCurSelectedTagId() {
      var e, t;
      if (F.Q.idxFound(this.selectedIdx)) {
        var r = null === (e = this.selectItems[this.selectedIdx]) || void 0 === e || null === (t = e.reactInstance) || void 0 === t ? void 0 : t.getModel();
        return null == r ? void 0 : r.tagId;
      }
    }
    selectItemCurIdx() {
      var e, t, r, n;
      F.Q.idxFound(this.lastSelectedIdx) && (null === (r = this.selectItems[this.lastSelectedIdx]) || void 0 === r || null === (n = r.reactInstance) || void 0 === n || n.deselect());
      F.Q.idxFound(this.selectedIdx) && (null === (e = this.selectItems[this.selectedIdx]) || void 0 === e || null === (t = e.reactInstance) || void 0 === t || t.select());
    }
  }
  function Hl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Wl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Hl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Vl extends c().Component {
    constructor(e) {
      var t;
      super(e), t = this, (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "mtRef", void 0), (0, n.A)(this, "containerHtml", void 0), (0, n.A)(this, "keyHdl", new zl()), (0, n.A)(this, "handleTagSelectEvent", e => {
        this.props.onOk(e.detail);
      }), (0, n.A)(this, "handleScroll", () => {
        var e;
        null === (e = this.mtRef) || void 0 === e || e.notifyScroll();
      }), (0, n.A)(this, "handleContainerRef", e => {
        e && !this.containerHtml && (this.containerHtml = e, u.KT(this.containerHtml, "tag-select", this.handleTagSelectEvent), E.A.next(() => {
          var e;
          null === (e = this.containerHtml) || void 0 === e || e.focus();
        }, 100));
      }), (0, n.A)(this, "handleContainerKeyDown", e => {
        if (e.stopPropagation(), e.preventDefault(), 40 == e.keyCode && this.keyHdl.moveDown(), 38 == e.keyCode && this.keyHdl.moveUp(), 13 == e.keyCode) {
          var t = this.keyHdl.retrieveCurSelectedTagId();
          t && this.props.onOk(t);
        }
      }), (0, n.A)(this, "handleMtMounted", () => {
        for (var e = u.YG(this.mtRef.getMathTypeHtmlElement(), ".mci-tag-select-box-symbol"), r = function r(n) {
            var i = e[n],
              o;
            if (i.reactInstance.getModel().tagId == t.state.tagIdInView) return E.A.next(() => {
              i.scrollIntoView({
                block: "center"
              });
            }), "break";
          }, n = 0; n < e.length; n++) {
          var i;
          if ("break" === r(n)) break;
        }
        this.keyHdl.init(this.mtRef.getMathTypeHtmlElement(), this.state.tagIdInView);
      });
      var r = Nl.buildSelectModel(this.props.dzc, this.props.pageSettings) || [void 0, void 0];
      this.state = {
        selectRootModel: r[0],
        tagIdInView: r[1]
      };
    }
    componentWillUnmount() {
      u.Bo(this.containerHtml, "tag-select", this.handleTagSelectEvent);
    }
    renderContent() {
      return c().createElement("div", {
        tabIndex: -1,
        style: {
          width: 500,
          height: 370,
          overflowY: "auto",
          overflowX: "hidden",
          outline: "none"
        },
        onScroll: this.handleScroll,
        ref: this.handleContainerRef,
        onKeyDown: this.handleContainerKeyDown
      }, this.renderMtClss());
    }
    renderMtClss() {
      if (!this.state.selectRootModel) return c().createElement("div", null, "There is no Tag to select");
      var e = this.props.MathTypeClss;
      return c().createElement(e, {
        ref: e => this.mtRef = e,
        settings: this.props.mtSettings,
        readOnly: !0,
        model: this.state.selectRootModel,
        style: {
          padding: 0,
          minHeight: 0
        },
        rootEditorStyle: {
          minHeight: 0
        },
        deplayRenderEnabled: !0,
        onMountedProcessed: this.handleMtMounted
      });
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        size: "medium",
        scroll: "body",
        style: Wl({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, Zr.A.getCenterStyle()),
        headerHidden: !1,
        title: "Select Math Tag",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {},
        onCancel: this.props.onClose,
        cancelLabel: "Close",
        showOk: !1,
        show: !0
      }, this.renderContent()));
    }
  }
  function Ul(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ql(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ul(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ul(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Gl {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "needLineTagProcess", !0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "unmountedTagMap", new Map()), (0, n.A)(this, "notifyLineTagRender", e => {
        if ("change" != e.type && e.tagId) switch (e.type) {
          case "unmounted":
            this.unmountedTagMap.set(e.tagId, e.resolvedText);
            break;
          case "willmount":
            var t = this.unmountedTagMap.get(e.tagId);
            if (t) return this.unmountedTagMap.delete(e.tagId), t;
            this.needLineTagProcess = !0;
        } else this.needLineTagProcess = !0;
      }), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    processLineTagNumbering() {
      this.deactivated || (this.needLineTagProcess || this.unmountedTagMap.size > 0) && (console.log("handle tag"), this.needLineTagProcess = !1, this.unmountedTagMap.clear(), this.runTagsAndRefsNumbering());
    }
    runTagsAndRefsNumbering() {
      var e;
      Rl.autoNumbering(this.target.getEditorHtmlElement(), this.target.getPageSettingsSessionCache(), (null === (e = this.target.getPageSettingsSessionCache().mathTags) || void 0 === e ? void 0 : e.autoNumberingType) || "normal");
    }
    buildTagSelection() {
      this.target.requestRender(this);
    }
    forceUpdateTagsAll() {
      Rl.forceUpdateAllTagRefs(this.target.getMathTypeHtmlElement()), this.runTagsAndRefsNumbering();
    }
    notifyTagsAndRefsNumberingIfSections() {
      var e, t;
      "normal" != ((null === (e = this.target.getPageSettingsSessionCache().mathTags) || void 0 === e ? void 0 : e.autoNumberingType) || "normal") && (this.needLineTagProcess = !0);
    }
    render() {
      if (!this.deactivated) return c().createElement(Vl, {
        pageSettings: this.target.getPageSettingsSessionCache(),
        mtSettings: this.target.getMathTypeSettings(),
        MathTypeClss: this.target.getMathTypeClss(),
        dzc: this.target.getDocZoomContainer(),
        onClose: () => {
          this.target.closeRender(this);
        },
        onOk: e => {
          this.target.closeRender(this), this.target.insertBySymbolInfo(ql(ql({}, Je.A.getTagRef()), {}, {
            tagId: e
          }));
        }
      });
    }
  }
  var Kl = {
      flexGrow: 1
    },
    Zl = {
      flexGrow: 1,
      position: "fixed",
      width: "77px",
      top: "35px",
      zIndex: 1e9,
      height: "43px",
      display: "block",
      right: "0",
      background: "var(--ui-surface-muted, #f7f7f7)",
      boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
      border: "1px var(--ui-border, lightgray) solid"
    },
    Yl = {
      float: "right",
      height: 22,
      marginLeft: 0
    },
    Ql = {
      float: "right",
      height: 22
    },
    Jl = {
      float: "right",
      height: 22,
      marginLeft: 0,
      display: "none"
    },
    Xl = {
      float: "right",
      height: 22,
      display: "none"
    };
  class $l {
    registerScroll(e, t) {
      var r = new (Bi())(e, {
          presets: ["pan"]
        }),
        n = 0,
        i = 500;
      return r.on("panstart panmove panend pancancel", r => {
        if (!t()) {
          r.preventDefault();
          var i = e.firstElementChild.style;
          if ("panstart" == r.type && (n = Number.parseInt(i.left || "0", 10)), "panend" == r.type) {
            var o = Number.parseInt(i.left || "0", 10);
            if (Math.abs(1e3 * r.velocityX) > 100 || o > 0 || o < -500) {
              if (r.deltaX < 0) var s = o - Math.abs(1e3 * r.velocityX) / 7;else var s = o + Math.abs(1e3 * r.velocityX) / 7;
              s = f().clamp(s, -500, 0), u.i0(e.firstElementChild, {
                left: s
              }, 300);
            }
          }
          i.left = f().clamp(n + r.deltaX, -600, 100) + "px";
        }
      }), r;
    }
  }
  const ec = new $l();
  class tc {
    constructor(e) {
      (0, n.A)(this, "mathOptionOnly", void 0), (0, n.A)(this, "componentMap", {}), (0, n.A)(this, "lastRequestComponent", void 0), this.mathOptionOnly = e;
    }
    requestComponent(e, t) {
      this.componentMap[e] = t, this.lastRequestComponent = {
        key: e,
        component: t
      };
    }
    removeComponent(e) {
      this.componentMap[e] = void 0, this.lastRequestComponent && this.lastRequestComponent.key == e && (this.lastRequestComponent = null);
    }
    clearCycle() {
      this.componentMap = {
        LineSettings: this.componentMap.LineSettings,
        SelectionSettings: this.componentMap.SelectionSettings
      };
    }
    renderAndEndCycle() {
      var e = this.render();
      return this.clearCycle(), e;
    }
    render() {
      return this.lastRequestComponent && (this.componentMap[this.lastRequestComponent.key] = this.lastRequestComponent.component), this.componentMap.TableSettings ? this.renderLayout(["LineSettings", "TableSettings", "SelectionSettings"]) : this.componentMap.DiagramSettings ? this.renderLayout(["DiagramSettings"]) : (this.mathOptionOnly && this.renderLayout(["SelectionSettings"]), this.renderLayout(["LineSettings", "SelectionSettings"]));
    }
    renderLayout(e) {
      return f().map(e, e => {
        if (this.componentMap[e]) return c().createElement("tool-bar-item", {
          class: $i,
          key: e
        }, c().createElement("tool-bar-item-separator", {
          class: eo
        }), this.componentMap[e]);
      });
    }
  }
  class rc extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "shouldIgnoreScrolling", !1), (0, n.A)(this, "refreshToolbarDelayRunObj", E.A.createLaterRunObject("first-request", 1)), (0, n.A)(this, "scrollHammer", void 0), (0, n.A)(this, "canUndo", void 0), (0, n.A)(this, "canRedo", void 0), (0, n.A)(this, "unMounted", !1), (0, n.A)(this, "componentHandler", void 0), (0, n.A)(this, "onTouchStart", e => {
        e.nativeEvent.handledTouchStart ? this.shouldIgnoreScrolling = !0 : this.shouldIgnoreScrolling = !1;
      }), (0, n.A)(this, "forceUpdateDelayRunFunc", () => {
        this.unMounted || this.forceUpdate();
      }), (0, n.A)(this, "handleUndo", e => {
        e.stopPropagation(), e.preventDefault(), this.props.onUndoRequest();
      }), (0, n.A)(this, "handleRedo", e => {
        e.stopPropagation(), e.preventDefault(), this.props.onRedoRequest();
      }), this.componentHandler = new tc(e.mathOptionOnly);
    }
    componentDidMount() {
      this.props.style || this.registerScroll();
    }
    registerScroll() {
      if (Xe.A.isMobileOrTablet()) {
        var e = h().findDOMNode(this);
        this.scrollHammer = ec.registerScroll(e, () => this.shouldIgnoreScrolling);
      }
    }
    unregisterScroll() {
      Xe.A.isMobileOrTablet() && this.scrollHammer.off("panstart panmove panend pancancel");
    }
    componentWillUnmount() {
      this.unregisterScroll(), this.unMounted = !0;
    }
    shouldComponentUpdate(e) {
      return e.canUndo != this.props.canUndo || e.selectOnly != this.props.selectOnly || e.canRedo != this.props.canRedo;
    }
    updateUndoRedo(e, t) {
      this.canUndo == e && this.canRedo == t || (this.canUndo = e, this.canRedo = t, this.requestForceUpdate(200));
    }
    requestForceUpdate() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      this.refreshToolbarDelayRunObj.later(this.forceUpdateDelayRunFunc, e);
    }
    requestRender(e) {
      switch (e.type) {
        case "add":
          this.componentHandler.requestComponent(e.key, e.component);
          break;
        case "remove":
          this.componentHandler.removeComponent(e.key);
      }
      this.requestForceUpdate(100);
    }
    renderRequestedComponent() {
      return this.componentHandler.renderAndEndCycle();
    }
    getUndoRedoComponent() {
      if (this.props.mathOptionOnly || this.props.hideUndoRedo) return null;
      var e = Xe.A.shouldUseSmallLayout(),
        t = e ? Zl : Kl,
        r = e ? Jl : Yl,
        n = e ? Xl : Ql,
        i = this.canUndo ? {} : f().clone(nc),
        o = this.canRedo ? {} : f().clone(nc),
        s = {
          float: "right",
          paddingTop: 11,
          paddingRight: 4
        };
      return e && (s = {
        float: "right",
        paddingTop: 12,
        paddingRight: 8
      }, i.paddingTop = 7, o.paddingTop = 7), c().createElement("div", {
        style: t
      }, c().createElement("tool-bar-item-separator", {
        class: eo,
        style: r
      }), c().createElement("div", {
        style: s
      }, c().createElement("span", {
        title: "Undo",
        className: "undo-redo-span",
        onMouseDown: this.handleUndo,
        style: i
      }, e ? Zi.A.undoMobile : Zi.A.undo), c().createElement("span", {
        title: "Redo",
        className: "undo-redo-span",
        onMouseDown: this.handleRedo,
        style: o
      }, e ? Zi.A.redoMobile : Zi.A.redo)), c().createElement("tool-bar-item-separator", {
        class: eo,
        style: n
      }));
    }
    getStyle() {
      return this.props.style ? this.props.style : {
        paddingLeft: 0
      };
      var e;
    }
    getContainerStyle() {
      if (this.props.style) return {
        display: "flex",
        justifyContent: "initial",
        width: "auto",
        minWidth: "auto"
      };
      var e = {};
      return Xe.A.shouldUseSmallLayout() && (e.justifyContent = "flex-start"), e;
    }
    render() {
      var e = this.getUndoRedoComponent(),
        t = v()("tw:cursor-default tw:h-[35px]", {
          "mobile-tablet": Xe.A.isMobileOrTablet(),
          "select-only": this.props.selectOnly
        });
      return c().createElement("tool-bar", {
        style: this.getStyle(),
        class: t,
        onTouchStart: this.onTouchStart,
        onDoubleClick: Li.A.onDoubleClickStopPropagation
      }, c().createElement("too-bar-container", {
        class: "tw:flex tw:justify-center tw:w-[770px] tw:min-w-[770px]",
        style: this.getContainerStyle()
      }, this.renderRequestedComponent(), Xe.A.shouldUseSmallLayout() ? null : e), Xe.A.shouldUseSmallLayout() ? e : null);
    }
  }
  var nc = {
    fill: "var(--ui-text-disabled, lightgray)",
    border: "1px solid transparent",
    cursor: "default"
  };
  class ic {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "toolBar", void 0), (0, n.A)(this, "getToolbarRef", e => {
        this.toolBar = e;
      }), (0, n.A)(this, "requestRenderToolBarComponent", e => {
        this.toolBar ? this.toolBar.requestRender(e) : E.A.next(() => {
          this.toolBar && this.toolBar.requestRender(e);
        });
      }), (0, n.A)(this, "handleUndoRequest", () => {
        this.target.handleResult(this.target.getController().requestUndo());
      }), (0, n.A)(this, "handleRedoRequest", () => {
        this.target.handleResult(this.target.getController().requestRedo());
      }), this.target = e;
    }
    renderToolBar(e) {
      var t = this.target.props,
        r;
      (t.toolbarEnabled || !this.target.isRestrictedView() && !this.target.isReadOnly()) && e && e(c().createElement(rc, {
        fixedContextHandler: this.target.getFixedContextHandler(),
        mathOptionOnly: t.toolbarMathOptionOnly,
        forceEnabled: t.toolbarEnabled,
        hideUndoRedo: t.hideUndoRedo || t.toolbarBasic,
        style: t.toolbarStyle,
        selectOnly: this.target.isSelectOnly(),
        onUndoRequest: this.handleUndoRequest,
        onRedoRequest: this.handleRedoRequest,
        ref: this.getToolbarRef
      }));
    }
    updateUndoRedoState() {
      if (this.toolBar) {
        var e = this.target.getController();
        this.toolBar.updateUndoRedo(e.canUndo(), e.canRedo());
      }
    }
    isToolBarReady() {
      return !!this.toolBar;
    }
  }
  var oc = r(20243);
  class sc extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        zpos: void 0
      }), (0, n.A)(this, "delayRun", E.A.createLaterRunObject("latest", 300)), (0, n.A)(this, "showActionButtons", () => {
        var e = this.props.rects;
        (!e || e.length <= 0) && this.state.zpos && this.setState({
          zpos: void 0
        }), e && e.length > 0 && this.setState({
          zpos: this.calculateButtonActionsPosition(this.props.rects)
        });
      });
    }
    componentWillReceiveProps(e) {
      this.props.rects != e.rects && (!e.rects || e.rects.length <= 0) && this.setState({
        zpos: void 0
      }), this.props.rects != e.rects && e.rects && e.rects.length > 0 && this.delayRun.later(this.showActionButtons);
    }
    shouldComponentUpdate(e, t) {
      return this.state != t || !e.rects || e.rects.length <= 0;
    }
    calculateButtonActionsPosition(e) {
      var t;
      if (e && !(e.length <= 0) && this.props.getContainerModel().isMathModeSelected()) {
        for (var r = q.T.toAbsoluteRect(e[0]), n = q.T.toAbsoluteRect(e[0]), i = 1; i < e.length; i++) {
          var o = q.T.toAbsoluteRect(e[i]);
          n.left = Math.min(o.left, n.left), n.top = Math.min(o.top, n.top), n.right = Math.max(o.right, n.right), n.bottom = Math.max(o.bottom, n.bottom);
        }
        var s = u.Yt(this.props.getScrollSelector())[0].getBoundingClientRect(),
          a = {
            left: f().clamp(r.right, s.left + 50, s.right - 50),
            top: f().clamp(n.top, s.top + 50, s.bottom - 50)
          },
          l = q.T.toLeftTopRelative(a, e[0].zc);
        return pe.y.fromRelativeLeftTop(l.left, l.top, e[0].zc).get();
      }
    }
    render() {
      if (!this.state.zpos) return c().createElement("div", null);
      var e = this.state.zpos;
      return c().createElement("div", {
        style: {
          position: "absolute",
          left: e.left - 20,
          top: e.top - 25,
          pointerEvents: "auto",
          zIndex: 1
        }
      }, c().createElement("button", {
        className: "btn-normal",
        onClick: () => this.props.requestEvaluation(),
        style: {
          fontFamily: Yr.A.defaultMathUsageFamily(),
          border: "1px solid var(--ui-border, #93b194)",
          borderRadius: 4,
          boxShadow: "1px 1px 2px var(--ui-shadow, grey)",
          color: "var(--ui-success, #4caf4f)",
          fontWeight: "bold"
        }
      }, "fx"));
    }
  }
  function ac(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function lc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ac(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ac(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class cc extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        model: void 0,
        resultModel: void 0
      }), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog());
    }
    renderSelection() {
      if (this.state.model) {
        var e = this.props.getMathTypeClss();
        return c().createElement("div", {
          style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%"
          }
        }, c().createElement("div", {
          style: {
            border: "1px solid var(--ui-border, lightgray)",
            maxHeight: 150,
            overflow: "auto"
          }
        }, c().createElement("div", {
          style: {}
        }, c().createElement(e, {
          selectOnly: !0,
          model: this.state.model,
          rootEditorStyle: {
            minHeight: 0
          },
          style: {
            padding: 5
          }
        }))), c().createElement("div", {
          style: {
            textAlign: "center",
            color: "var(--ui-text-muted, gray)",
            padding: 5,
            fontSize: 15
          }
        }, c().createElement("i", {
          className: "fa fa-caret-down"
        })), c().createElement("div", {
          style: {
            border: "1px solid var(--ui-border, lightgray)",
            padding: 5,
            minHeight: 100,
            maxHeight: 400,
            overflow: "auto"
          }
        }, c().createElement("div", null, this.renderResult(e))));
      }
    }
    renderResult(e) {
      return this.state.resultModel ? "string" == typeof this.state.resultModel ? c().createElement("div", {
        style: {
          textAlign: "center"
        }
      }, c().createElement("div", {
        style: {
          color: "orange"
        }
      }, this.state.resultModel), c().createElement("div", null, c().createElement("button", {
        className: "btn-normal btn-large",
        onClick: () => this.fetchResult(void 0),
        style: {
          display: "inline-block",
          width: 70,
          margin: 10
        }
      }, "Retry"))) : c().createElement(e, {
        selectOnly: !0,
        model: this.state.resultModel,
        rootEditorStyle: {
          minHeight: 0
        },
        style: {
          padding: 5
        }
      }) : c().createElement("div", {
        style: {
          textAlign: "center",
          padding: 10
        }
      }, c().createElement("span", null, "Loading..."));
    }
    fetchResult(e) {
      this.setState({
        resultModel: void 0
      }), e || (e = this.props.getSelectionData()), console.log("lines to fetch", e);
      var t = ut.A.stringifyStripId({
        lines: e
      });
      hc(Xe.A.getEvaluationApiUrl(), t).then(e => e.text()).then(e => {
        var t = ut.A.parse(e);
        this.setState({
          resultModel: lc({
            id: vt.w.nextId()
          }, t)
        });
      }).catch(e => {
        console.error(e), this.setState({
          resultModel: "Error on loading Result"
        });
      });
    }
    isLinesNoNeedWrapInMath(e) {
      if (1 != e.length || 1 != e[0].blocks.length || "composite" != e[0].blocks[0].type) return !1;
      var t = e[0].blocks[0];
      return "\\align" == t.text || "\\gather" == t.text;
    }
    wrapLines(e) {
      return this.isLinesNoNeedWrapInMath(e) ? {
        id: vt.w.nextId(),
        lines: e
      } : {
        id: vt.w.nextId(),
        lines: [sr.A.createLineFromBlock({
          id: vt.w.nextId(),
          type: "composite",
          text: "\\math-container",
          displayMode: !0,
          elements: {
            mathValue: {
              id: vt.w.nextId(),
              lines: e
            }
          }
        })]
      };
    }
    componentDidMount() {
      var e = this.props.getSelectionData();
      this.fetchResult(e), this.setState({
        model: this.wrapLines(e)
      });
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Evaluation",
        size: "large",
        scroll: "body",
        style: {
          maxWidth: "95vw"
        },
        cancelLabel: "Close",
        message: "",
        showOk: !1,
        isProgressing: !1,
        onOk: () => {
          this.props.onOk();
        },
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        show: !0
      }, c().createElement("div", {
        style: {
          flex: 1,
          color: "var(--ui-text, black)",
          fontSize: 14,
          padding: 5,
          maxHeight: "80vh",
          display: "flex",
          width: "calc(100% - 35px)"
        }
      }, this.renderSelection())));
    }
  }
  function dc() {
    return window.customFetch ? window.customFetch : window.fetch;
  }
  var hc = function e(t, r, n) {
      return Promise.resolve(dc()(t, {
        method: "POST",
        headers: lc(lc({}, pc), n),
        mode: "cors",
        body: uc(r)
      }));
    },
    pc = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    };
  function uc(e) {
    return e ? "string" == typeof e ? e : JSON.stringify(e) : null;
  }
  class gc extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "latestHandler", E.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "selectionInfo", void 0), (0, n.A)(this, "comUnmounted", !1), (0, n.A)(this, "state", {
        rects: [],
        isActive: !0,
        evaluationDialogShown: void 0
      }), (0, n.A)(this, "handleRequestEvaluationDialog", () => {
        Xe.A.casSupport ? this.props.onRequestCasDialog() : this.setState({
          evaluationDialogShown: !0
        });
      });
    }
    componentWillUnmount() {
      this.comUnmounted = !0, this.latestHandler.cancel();
    }
    clearInfo() {
      this.setState({
        rects: []
      });
    }
    shouldComponentUpdate(e, t) {
      return t.rects != this.state.rects || t.isActive != this.state.isActive || t.evaluationDialogShown != this.state.evaluationDialogShown;
    }
    setActive(e) {
      this.latestHandler.later(() => {
        this.comUnmounted || this.state.isActive != e && this.setState({
          isActive: e
        });
      });
    }
    setTextSelectionInfo(e) {
      this.innerSetSelectionInfo(e);
    }
    setListTypeSelectionInfo(e) {
      this.innerSetSelectionInfo(e);
    }
    innerSetSelectionInfo(e) {
      this.selectionInfo = e;
      var t = Rt.buildSelectionRectsFromEditor(e);
      this.setState({
        rects: t
      });
    }
    refresh() {
      this.state.rects && 0 != this.state.rects.length && this.innerSetSelectionInfo(this.selectionInfo);
    }
    getRectElement(e, t) {
      var r = {
        transform: new oc.Z().translate(Math.round(e.left), Math.round(e.top)).scale(q.T.widthOf(e) / 100, (q.T.heightOf(e) + 1) / 100).toCssStyle()
      };
      return c().createElement("selection", {
        key: t,
        style: r
      });
    }
    renderRects() {
      return f().map(this.state.rects, (e, t) => this.getRectElement(e, t));
    }
    renderEvaluationDialog() {
      if (this.state.evaluationDialogShown) return c().createElement(cc, {
        getMathTypeClss: this.props.getMathTypeClss,
        getSelectionData: this.props.getSelectionData,
        onClose: () => this.setState({
          evaluationDialogShown: void 0
        }),
        onOk: () => this.setState({
          evaluationDialogShown: void 0
        })
      });
    }
    renderSelectionActions() {
      if ((Xe.A.getEvaluationApiUrl() || Xe.A.casSupport && this.props.casEnabled) && !this.props.isNotEditable) return c().createElement(sc, {
        getScrollSelector: this.props.getScrollSelector,
        getContainerModel: this.props.getContainerModel,
        rects: this.state.rects,
        requestEvaluation: this.handleRequestEvaluationDialog
      });
    }
    render() {
      return c().createElement("selection-wrapper", {
        class: v()({
          inactive: !this.state.isActive
        })
      }, this.renderSelectionActions(), this.renderEvaluationDialog(), this.renderRects());
    }
  }
  class mc {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "selection", void 0), (0, n.A)(this, "clearSelectRequest", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "getSelectionRef", e => {
        this.selection = e;
      }), (0, n.A)(this, "handleRequestCasDialog", () => {
        this.target.requestCasDialog();
      }), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    renderSelection() {
      if (!this.deactivated) return c().createElement(gc, {
        casEnabled: this.target.props.casEnable,
        getSelectionData: this.target.getSelectionData,
        getMathTypeClss: this.target.getMathTypeClss,
        getScrollSelector: this.target.getScrollSelector,
        getContainerModel: this.target.getContainerModel,
        ref: this.getSelectionRef,
        isNotEditable: this.target.isNotEditable(),
        onRequestCasDialog: this.handleRequestCasDialog
      });
    }
    getSelection() {
      return this.selection;
    }
    handleSelectionChanged(e, t) {
      if (t.mainSelected) {
        if (t.extendedMainSelected) this.selection.setTextSelectionInfo(this.buildTextSelectionInfo(t.extendedMainSelected, t.mainSelected, this.target.getDocZoomContainer()));else {
          this.selection.clearInfo();
          var r = Ze.A.findLeafSelected(t.mainSelected);
          this.isListItemSelected(r) && this.selection.setListTypeSelectionInfo(this.buildListTypeSelectionInfo(t.mainSelected, r, this.target.getDocZoomContainer()));
        }
      } else this.selection.clearInfo();
    }
    clearExtendedSelected() {
      this.changeSelectDisabled() ? console.warn("clearExtendedSelected changeSelectDisabled") : this.target.state.extendedMainSelected && (this.target.setState({
        extendedMainSelected: void 0
      }), this.target.props.onSelectionChange && this.target.props.onSelectionChange(this.target.state.mainSelected, void 0));
    }
    clearSelected() {
      this.changeSelectDisabled() ? console.warn("clearExtendedSelected changeSelectDisabled") : (this.target.setState({
        mainSelected: this.target.getInitSelect(),
        extendedMainSelected: void 0
      }), this.target.props.onSelectionChange && this.target.props.onSelectionChange(this.target.getInitSelect(), void 0));
    }
    setSelected(e) {
      this.changeSelectDisabled() ? console.warn("clearExtendedSelected changeSelectDisabled") : this.target.shouldPreventSelect(e) || (this.target.setState({
        mainSelected: e,
        extendedMainSelected: void 0
      }), this.target.props.onSelectionChange && this.target.props.onSelectionChange(e, void 0));
    }
    setSelection(e, t) {
      this.changeSelectDisabled() ? console.warn("clearExtendedSelected changeSelectDisabled") : this.target.shouldPreventSelect(e) || this.target.shouldPreventSelect(t) || (this.target.setState({
        mainSelected: t,
        extendedMainSelected: e || void 0
      }), this.target.props.onSelectionChange && this.target.props.onSelectionChange(t, e || void 0));
    }
    extendSelection(e) {
      this.changeSelectDisabled() ? console.warn("clearExtendedSelected changeSelectDisabled") : this.target.shouldPreventSelect(e) || (this.target.state.extendedMainSelected ? this.target.setState({
        mainSelected: e
      }) : this.target.setState({
        extendedMainSelected: this.target.state.mainSelected,
        mainSelected: e
      }));
    }
    buildTextSelectionInfo(e, t, r) {
      return {
        rootEditor: this.target.getEditorHtmlElement(),
        extendSelected: e,
        selected: t,
        elementToCalculate: this.target.getMathTypeHtmlElement(),
        dzContainer: r,
        type: "text-selection"
      };
    }
    buildListTypeSelectionInfo(e, t, r) {
      return {
        rootEditor: this.target.getEditorHtmlElement(),
        selected: e,
        leafSelected: t,
        elementToCalculate: this.target.getMathTypeHtmlElement(),
        dzContainer: r,
        type: "list-type-selection"
      };
    }
    isListItemSelected(e) {
      return e && e.controlled && !!e.listTypeSelect;
    }
    refreshSelection() {
      this.selection && this.selection.refresh();
    }
    cancelClearSelect() {
      this.clearSelectRequest && (clearTimeout(this.clearSelectRequest), this.clearSelectRequest = null);
    }
    endLineSelectedForMathModeOnly() {
      var e = this.target.state.mainModel.lines[0].blocks[0];
      if (e && mt.A.isMathContainer(e)) {
        var t = e.elements.mathValue,
          r;
        return {
          lineIndex: 0,
          charIndex: 0,
          key: "mathValue",
          selected: {
            lineIndex: 0,
            charIndex: Ze.A.getTotalChar(t.lines[0].blocks)
          }
        };
      }
    }
    changeSelectDisabled() {
      var e = this.target;
      return this.deactivated || e.isBusy() || !e.isDocEnabled();
    }
  }
  class fc {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "handleResult", (e, t) => e ? "StopComposition" == e.action ? this.innerHandleResult(e, t) : Promise.resolve(h().unstable_batchedUpdates(() => {
        this.innerHandleResult(e, t);
      })) : Promise.resolve()), this.target = e;
    }
    innerHandleResult(e, t) {
      if (this.target.resetTempVariables(), null != e) {
        if (f().isArray(e)) return (0, i.__)(e, e => this.handleResult(e, t));
        if (e.domElementRectCache && this.target.notifyDomElementRectCache(e.domElementRectCache), e.data && void 0 !== e.data.status && "ok" != e.data.status) {
          var r = e.data;
          if (this.target.showMessage(r.message, r.status), "error" == r.status) return;
        }
        if ("InsertRowColumnIndication" == e.action) return this.target.showTabularRowColumnIndication(), void this.preventEvent(t);
        if ("Selection" == e.action) {
          var n = e.data;
          return this.target.setSelection(n.fromSelected, n.toSelected), this.target.setPreventScroll(e.surpressScrollToCursor), void this.preventEvent(t);
        }
        if ("ModelCursorPosition" == e.action) {
          var o = e.data;
          return o.selection ? this.target.extendSelection(o.toSelected) : this.target.setSelected(o.toSelected), void t.preventDefault();
        }
        if ("CursorChagnedFromCharId" == e.action) {
          var s = S.A.closestEditor(e.cursorPos.line);
          return e.surpressClearCursorHistory && this.target.setSurpressClearCursorHistory(!0), s.reactInstance.select(e.cursorPos, e.keyInfo.selection), void (e.keyInfo.noPreventDefault || this.preventEvent(t));
        }
        var a;
        if ("DataOrCursorSelectedInfoChanged" == e.action) return this.target.setIsOneLineChanged(e.isOneLineChanged), this.target.changeModel(e.editorChangeInfo.model, e.isUndoRedo, {
          mainSelected: e.editorChangeInfo.selected,
          extendedMainSelected: e.editorChangeInfo.extendedSelected
        }, !1) && (!t || e.keyInfo && e.keyInfo.noPreventDefault || (t.preventDefault(), t.stopPropagation())), !t || e.keyInfo && e.keyInfo.noPreventDefault || t && t.preventDefault(), void (e.keyInfo && e.keyInfo.ingoreFocusAfterChanged && this.target.needFocusAcquire());
        if ("UndoRedo" == e.action) return this.target.changeModel(e.editorChangeInfo.model, e.isUndoRedo, {
          mainSelected: e.editorChangeInfo.selected,
          extendedMainSelected: e.editorChangeInfo.extendedSelected
        }, !1), void this.preventEvent(t);
        if ("SetStyle" == e.action) {
          if (this.target.isPlainTextOnly()) return;
          return this.target.setIsOneLineChanged(e.isOneLineChanged), this.target.changeModel(e.data, !1, void 0, !1), void this.preventEvent(t);
        }
        if ("SetLineStyle" != e.action) {
          if ("StepOut" == e.action) return this.target.setSelected(e.editorChangeInfo.selected), void this.preventEvent(t);
          if ("ConfirmDelete" == e.action) {
            var l = e.data,
              c;
            return !this.target.isMathOnly() && !this.target.isCodeSectionOnly() || 0 != l.lineIndex || 0 != l.charIndex || l.selected ? (this.target.setState({
              confirmDeleted: e.data
            }), void this.preventEvent(t)) : void this.preventEvent(t);
          }
          if ("SetTemporarySelectedBlockStyle" == e.action) return this.target.hidenInputFocus(), this.target.setState({
            temporarySelectedBlockStyle: e.data
          }), void this.preventEvent(t);
          if ("ShowMessage" == e.action) {
            var d = e.data;
            return this.target.showMessage(d.message, d.type), void this.preventEvent(t);
          }
          return "RequestImageLibrary" == e.action ? (this.target.requestImageSelection(null, (e, t) => {
            this.target.insertImageContainer(e, t && t.isInlineImage);
          }, e.data), void this.preventEvent(t)) : "RequestCasDialog" == e.action ? (this.target.requestCasDialog(), void this.preventEvent(t)) : "StopComposition" == e.action ? this.target.forceStopCompositionOrReserve() : "ExternalUndoRequest" == e.action ? (this.preventEvent(t), void this.target.onUndoRequest()) : "ExternalRedoRequest" == e.action ? (this.preventEvent(t), void this.target.onRedoRequest()) : "SetSelected" == e.action ? (this.target.setSelected(e.data), void this.preventEvent(t)) : (null == e.action && e.keyInfo && !e.keyInfo.selection && this.target.getSafeExtendedSelected() && this.target.clearSelection(), null != e.action || e.keyInfo && e.keyInfo.noPreventDefault ? void 0 : e.keyInfo && e.keyInfo.event ? void this.preventEvent(e.keyInfo.event) : void this.preventEvent(t));
        }
        if (this.target.isPlainTextOnly()) return;
        if (this.preventEvent(t), e.clearSelectedBullets) {
          var h = Ze.A.changeLeafSelected(this.target.getSafeSelected(), {
            controlled: void 0,
            listTypeSelect: void 0
          });
          this.target.changeModel(e.data, !1, {
            mainSelected: h,
            extendedMainSelected: void 0
          }, !1);
        } else this.target.changeModel(e.data, !1, void 0, !1);
      }
    }
    preventEvent(e) {
      e && (e.preventDefault(), e.stopPropagation());
    }
  }
  class yc extends sn {
    showError(e, t) {
      this.deactivated || this.getTarget().requestMsgBox(!0, e, "error", t);
    }
    showInfo(e, t) {
      this.deactivated || this.getTarget().requestMsgBox(!0, e, "info", t);
    }
    clearMessage() {
      this.deactivated || this.getTarget().requestMsgBox(!1);
    }
    showMessage(e, t, r) {
      this.deactivated || this.getTarget().requestMsgBox(!0, e, t, r);
    }
  }
  class vc {
    findRectIndexInView(e) {
      var t = e.lineRects,
        r = e.scrollSelector;
      if (!r) return 0;
      for (var n = 0, i = 0; i < t.length; i++) {
        var o = t[i],
          s = o.rects[0];
        if (s) {
          var a = q.T.leftTopOf(s),
            l = this.extractInfo(a, r, void 0),
            c = l.calculatedTop,
            d = l.distanceTop,
            h = l.scrollContainerRect;
          if (this.withinScrollContainerView(c, h, d)) return n;
          o.rects.length > 1 ? n += o.rects.length : n += s.accumulatedCount || 1;
        }
      }
      return 0;
    }
    calculate(e) {
      var t,
        r = e.findAndReplaceElement,
        n = e.pos,
        i = e.scrollSelector;
      if (!i) return "none";
      var o = this.extractInfo(n, i, r),
        s = o.calculatedTop,
        a = o.distanceTop,
        l = o.scrollContainerRect;
      return this.withinScrollContainerView(s, l, a) ? "none" : s + (null === (t = u.Yt(i)[0]) || void 0 === t ? void 0 : t.scrollTop) - a;
    }
    extractInfo(e, t, r) {
      var n,
        i = pe.y.fromPos(e).toAbsolute().absTop,
        o = r ? u.vc(r, "height") : 30,
        s = this.retreiveScrollRect(t),
        a;
      return {
        calculatedTop: i - s.top,
        distanceTop: o,
        scrollContainerRect: s
      };
    }
    withinScrollContainerView(e, t, r) {
      return e > r && e < t.height - 50;
    }
    retreiveScrollRect(e) {
      return u.Yt(e)[0].getBoundingClientRect();
    }
  }
  var bc = new vc();
  class xc extends c().Component {
    componentWillUnmount() {
      this.refreshRectsRunLater.cancel(), this.findInfo = null;
    }
    constructor(e) {
      super(e), (0, n.A)(this, "findInfo", null), (0, n.A)(this, "refreshRectsRunLater", E.A.createLaterRunObject("latest", 50)), (0, n.A)(this, "refreshRects", () => {
        this.refreshRectsRunLater.later(this.innerRefreshRects);
      }), (0, n.A)(this, "innerRefreshRects", () => {
        if (this.findInfo) {
          var e = this.findInfo,
            t = e.findResult,
            r = e.dzContainer,
            n = e.rootEditorElement,
            i = e.anchorElement,
            o = q.T.getBCRect(i, r),
            s = Rt.buildRectsFromFindResults(n, t.results, o),
            a = this.state.currentLineRect;
          if (this.state.currentFindPosition) {
            var l = En.getFindResultFromPosition(t.results, this.state.currentFindPosition);
            a = Rt.buildRectsFromFindResults(n, [l], o)[0];
          }
          this.setState({
            lineRects: s,
            currentLineRect: a
          });
        }
      }), this.state = {
        lineRects: null,
        currentLineRect: null,
        currentFindPosition: null,
        currentIndexPosition: 0
      };
    }
    findResultInMathMode() {
      return this.findInfo && this.findInfo.findResult && this.findInfo.findResult.inMathMode;
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    closeFindSession() {
      xe.Ay.endGlobalTextCahce(), this.setEmptyHighlight();
    }
    setEmptyHighlight() {
      this.setState({
        lineRects: [],
        currentLineRect: null
      }), this.findInfo = null;
    }
    isInHighlightMode() {
      return !!this.findInfo;
    }
    getSelectedInfo() {
      return {
        currentFindPosition: this.state.currentFindPosition,
        currentIndexPosition: this.state.currentIndexPosition
      };
    }
    fromFindResult(e, t, r, n, i) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
      if (this.refreshRectsRunLater.cancel(), e.total <= 0) return this.setState({
        lineRects: [],
        currentLineRect: null
      }), void (this.findInfo = {
        findResult: e,
        dzContainer: t,
        rootEditorElement: r,
        anchorElement: n
      });
      xe.Ay.startGlobalTextCache();
      var s = q.T.getBCRect(n, t);
      this.findInfo = {
        findResult: e,
        dzContainer: t,
        rootEditorElement: r,
        anchorElement: n
      };
      var a = new Date().getTime();
      console.log("build rects take: ", new Date().getTime() - a);
      var l = 0,
        c = Rt.buildRectsFromFindResults(r, e.results, s),
        d;
      void 0 !== o.indexSuggestion ? (l = o.indexSuggestion, l = f().clamp(l, 0, e.total - 1)) : l = bc.findRectIndexInView({
        lineRects: c,
        scrollSelector: i
      });
      var h = En.getFindResultPositionFromIndex(e.results, l),
        p = En.getFindResultFromPosition(e.results, h),
        u = Rt.buildRectsFromFindResults(r, [p], s)[0];
      return this.setState({
        lineRects: c,
        currentFindPosition: h,
        currentLineRect: u,
        currentIndexPosition: l
      }), !u.rects[0] || o.isIncremental && !o.requestScroll || this.props.requestScrollTo(q.T.leftTopOf(u.rects[0])), l;
    }
    findNext() {
      if (this.refreshRectsRunLater.cancel(), this.findInfo && !(this.findInfo.findResult.total <= 0)) {
        var e = this.findInfo,
          t = e.findResult,
          r = e.dzContainer,
          n = e.rootEditorElement,
          i = e.anchorElement,
          o = q.T.getBCRect(i, r),
          s = En.findNext(t, this.state.currentFindPosition),
          a = En.getFindResultFromPosition(t.results, s),
          l = Rt.buildRectsFromFindResults(n, [a], o)[0],
          c = this.state.currentIndexPosition + 1;
        return c >= t.total && (c = 0), this.setState({
          currentFindPosition: s,
          currentLineRect: l,
          currentIndexPosition: c
        }), l.rects[0] && this.props.requestScrollTo(q.T.leftTopOf(l.rects[0])), c;
      }
    }
    findPrevious() {
      if (this.refreshRectsRunLater.cancel(), this.findInfo && !(this.findInfo.findResult.total <= 0)) {
        var e = this.findInfo,
          t = e.findResult,
          r = e.dzContainer,
          n = e.rootEditorElement,
          i = e.anchorElement,
          o = q.T.getBCRect(i, r),
          s = En.findPrevious(t, this.state.currentFindPosition),
          a = En.getFindResultFromPosition(t.results, s),
          l = Rt.buildRectsFromFindResults(n, [a], o)[0],
          c = this.state.currentIndexPosition - 1;
        return c < 0 && (c = t.total - 1), this.setState({
          currentFindPosition: s,
          currentIndexPosition: c,
          currentLineRect: l
        }), l.rects[0] && this.props.requestScrollTo(q.T.leftTopOf(l.rects[0])), c;
      }
    }
    renderRects(e) {
      if (e && !(e.length <= 0)) {
        var t = f().flatMap(e, (e, t) => f().map(e.rects, (e, r) => {
          var n = {
            left: e.left,
            top: e.top,
            width: q.T.widthOf(e),
            height: q.T.heightOf(e)
          };
          return c().createElement("rh-rect", {
            key: t + "_" + r,
            style: n
          });
        }));
        return c().createElement("rhc-all", null, t);
      }
    }
    renderSelectedRect() {
      if (this.state.currentLineRect && !(this.state.currentLineRect.rects.length <= 0)) return f().map(this.state.currentLineRect.rects, (e, t) => c().createElement("rh-selected-rect", {
        key: t,
        style: {
          left: e.left,
          top: e.top,
          width: q.T.widthOf(e),
          height: q.T.heightOf(e)
        }
      }));
    }
    render() {
      return c().createElement("region-highlight-container", {
        style: {
          zIndex: 1
        }
      }, this.renderRects(this.state.lineRects), this.renderSelectedRect());
    }
  }
  class Cc {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "regionHighlight", void 0), (0, n.A)(this, "deactivated", !1), (0, n.A)(this, "getRegionHighlightRef", e => {
        this.regionHighlight = e;
      }), (0, n.A)(this, "requestHighlightScrollTo", e => {
        if (!this.deactivated) {
          var t = this.target.getScrollSelector(),
            r = bc.calculate({
              pos: e,
              findAndReplaceElement: this.target.getFindAndReplaceElement(),
              scrollSelector: t
            });
          "none" != r && E.A.waitABit(() => {
            this.deactivated || (u.C6(t), u.i0(t, {
              scrollTop: r
            }));
          });
        }
      }), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0, u.Rq(this.target.getScrollSelector());
    }
    refreshRects() {
      this.regionHighlight && this.regionHighlight.refreshRects();
    }
    getRegionHighlight() {
      return this.regionHighlight;
    }
    renderRegionHighlight(e) {
      if (!this.deactivated && !this.target.isReadOnly() && !this.target.isRestrictedView()) return c().createElement(xc, {
        model: e,
        requestScrollTo: this.requestHighlightScrollTo,
        ref: this.getRegionHighlightRef
      });
    }
  }
  class Sc extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderDelayRunObj", E.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "didMount", !1), (0, n.A)(this, "overrideStyle", void 0);
    }
    componentDidMount() {
      this.didMount = !0, this.requestDelayRender();
    }
    componentWillUnmount() {
      this.renderDelayRunObj.cancel();
    }
    shouldComponentUpdate(e) {
      return this.overrideStyle = null, this.requestDelayRender(e), !1;
    }
    componentDidUpdate() {
      this.recalculatePosition();
    }
    recalculatePosition() {
      if (!this.overrideStyle) {
        var e = h().findDOMNode(this).firstElementChild;
        if (e) {
          var t = this.props,
            r = t.rootEditor,
            n = t.baseElement,
            i = t.dzContainer,
            o = q.T.getBCRect(e, i),
            s = q.T.getBCRectToElement(r, n, i),
            a = this.getSelectedRect();
          a && (this.overrideStyle = {
            left: f().clamp(a.left + q.T.widthOf(a) / 2, s.left + q.T.widthOf(o) / 2, s.right - q.T.widthOf(o) / 2),
            top: a.top + q.T.heightOf(a) + 5,
            position: "absolute",
            transform: "translate(-50%,0)",
            zIndex: 99999
          }, this.forceUpdate());
        }
      }
    }
    requestDelayRender() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
      this.renderDelayRunObj.later(() => {
        this.forceUpdate();
      }, e.delay);
    }
    getSelectedRect() {
      var e = this.props,
        t = e.rootEditor,
        r = e.selected,
        n = e.extendSelected,
        i = e.baseElement,
        o = e.dzContainer,
        s,
        a;
      if (n && !Rt.isSameRoute(r, n)) return Rt.buildSelectionRectsFromEditor({
        rootEditor: t,
        selected: r,
        extendSelected: n,
        elementToCalculate: i,
        dzContainer: o,
        type: "text-selection"
      })[0];
      var l = this.props.requestCursorPosition();
      return q.T.buildBcRectWH(l.relativeGeoPosition.left, l.relativeGeoPosition.top, 1, 10, o);
    }
    render() {
      var e = this.props,
        t = e.rootEditor,
        r = e.baseElement;
      if (!this.didMount || !t || !r) return c().createElement("div", null);
      var n = this.getSelectedRect();
      if (!n) return c().createElement("div", null);
      var i = this.overrideStyle || {
        left: n.left + q.T.widthOf(n) / 2,
        top: n.top + q.T.heightOf(n) + 10,
        position: "absolute",
        zIndex: 99999,
        transform: "translate(-50%,0)"
      };
      return i = ea.a.applyReverseZoomStyle(i, this.props.dzContainer, "center top"), c().createElement("div", {
        style: i
      }, this.props.requestChildren());
    }
  }
  function Ac(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function wc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ac(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ac(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ec extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        link: this.props.link || "",
        text: ""
      }), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "onLinkChange", e => {
        this.setState({
          link: e.currentTarget.value
        });
      }), (0, n.A)(this, "onTextChange", e => {
        this.setState({
          text: e.currentTarget.value
        });
      }), (0, n.A)(this, "applyChange", () => {
        this.props.onApply(this.state.link, this.state.text);
      }), (0, n.A)(this, "buttonStyle", {
        marginLeft: 5
      }), (0, n.A)(this, "inputStyle", {
        width: 150
      }), (0, n.A)(this, "rootDivStyle", {
        border: "1px solid var(--ui-border, lightgray)",
        padding: 6,
        background: "var(--ui-surface, white)",
        display: "flex",
        boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
        alignItems: "flex-end"
      });
    }
    renderText() {
      if (this.props.showText) return c().createElement("input", {
        value: this.state.text,
        placeholder: "Text",
        onKeyDown: e => {
          13 == e.keyCode && this.applyChange();
        },
        style: wc(wc({}, this.inputStyle), {}, {
          marginBottom: 5
        }),
        onChange: this.onTextChange
      });
    }
    componentWillUnmount() {
      this.unmounted = !0;
    }
    componentDidMount() {
      E.A.waitALitteWhile(() => {
        if (!this.unmounted) {
          var e = h().findDOMNode(this),
            t = u.YG(e, "input")[0];
          t.focus(), t.select();
        }
      });
    }
    render() {
      return c().createElement("div", {
        style: this.rootDivStyle,
        "data-test-name": "hyper-link-input-dialog"
      }, c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, this.renderText(), c().createElement("input", {
        value: this.state.link,
        onKeyDown: e => {
          13 == e.keyCode && this.applyChange();
        },
        placeholder: "Link",
        style: this.inputStyle,
        onChange: this.onLinkChange
      })), c().createElement("button", {
        style: wc(wc({}, this.buttonStyle), {}, {
          width: 60
        }),
        onClick: this.applyChange,
        className: "btn-normal"
      }, "Apply"));
    }
  }
  var kc = r(84542);
  class Oc extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "isExpanding", !1), (0, n.A)(this, "changeImmediately", !1), (0, n.A)(this, "onHyperLinkApply", (e, t) => {
        t ? this.insertLink(e, t) : this.setHyperLinkForBlock(e), this.hideInput();
      });
    }
    renderContent() {
      var e = this.getFirstSelectedLink();
      if ("info" == this.getState().linkInputState) return c().createElement(kc.A, {
        link: e,
        onRequestChange: () => {
          this.changeImmediately = !0, this.showLinkInput();
        },
        onClear: () => {
          this.clearHyperLink();
        }
      });
      var t = this.getTarget().getContainerModel();
      return c().createElement(Ec, {
        link: e,
        onApply: this.onHyperLinkApply,
        showText: Rt.isNoSelectionOrSameRoute(t.cursorSelected, t.extendedCursorSelected)
      });
    }
    getFirstSelectedLink() {
      var e = this.getTarget().getContainerModel(),
        t = Rt.getFirstSelected(e.cursorSelected, e.extendedCursorSelected),
        r = Ze.A.getSelectedBlockFromRoot(e.model, t),
        n;
      return k.A.safeGetBlockStyle(r, "hyperLink");
    }
    clearHyperLink() {
      this.expandSelection().then(() => {
        var e = this.getTarget(),
          t = e.getContainerModel(),
          r = e.getController().setStyle(t, "hyperLink", null);
        e.handleResult(r), E.A.next(() => {
          this.hideInput();
        });
      });
    }
    render() {
      var e = this.getTarget(),
        t = c().createElement(Sc, {
          dzContainer: this.getTarget().getDocZoomContainer(),
          delay: this.changeImmediately ? 0 : 200,
          rootEditor: e.getEditorHtmlElement(),
          selected: e.getSafeSelected(),
          extendSelected: e.getSafeExtendedSelected(),
          baseElement: e.getMathTypeHtmlElement(),
          requestCursorPosition: e.getCursorPosition,
          requestChildren: () => this.renderContent()
        });
      return this.changeImmediately = !1, t;
    }
    insertLink(e, t) {
      if (t) {
        var r = this.getTarget(),
          n = {
            id: vt.w.nextId(),
            text: t,
            style: e ? {
              hyperLink: e
            } : void 0
          },
          i = r.getController().insertBlock(n, r.getContainerModel());
        r.handleResult(i);
      }
    }
    setHyperLinkForBlock(e) {
      var t = this.getTarget(),
        r = t.getController().setStyle(t.getContainerModel(), "hyperLink", e);
      t.handleResult(r);
    }
    expandSelection() {
      return new Promise(e => {
        this.isExpanding = !0;
        var t = this.getTarget(),
          r = t.getContainerModel(),
          n = t.getController().expandSelectionWithSameStyle(r, "hyperLink");
        t.handleResult(n), E.A.next(() => {
          this.isExpanding = !1, e();
        });
      });
    }
    showLinkInput(e) {
      this.getTarget().needFocusAcquire(), e && (this.changeImmediately = !0), this.expandSelection().then(() => {
        this.setState({
          linkInputState: "input"
        }), E.A.next(() => {
          this.getTarget().requestRender(this);
        });
      });
    }
    showLinkInfo() {
      this.getTarget().requestRender(this), "info" != this.getState().linkInputState && this.setState({
        linkInputState: "info"
      });
    }
    hideInput() {
      this.getTarget().closeRender(this);
    }
    handleShowingInputOnMatched(e) {
      if (e.isHyperLinkSelected()) this.showLinkInfo(), console.log("show info");else {
        if (this.isExpanding) return;
        this.hideInput();
      }
    }
  }
  class Dc {
    tempraryHide(e) {
      var t = u.f$(e, "compositeblock");
      return u.hS(u.YG(t, "bulb"), "display", "none");
    }
    restore(e) {
      u.hS(e, "display", "block");
    }
  }
  const Pc = new Dc();
  function Mc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ic(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Mc(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mc(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Tc extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "jBulb", void 0), (0, n.A)(this, "tabTextStyle", {
        background: "var(--ui-surface, white)",
        fontWeight: "normal",
        display: "inline-block",
        border: "1px solid var(--ui-border, lightgray)",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 3,
        boxShadow: "var(--ui-shadow, rgb(232, 229, 229)) 1px 1px 0px",
        position: "absolute",
        fontSize: 11,
        zIndex: 999999,
        color: "var(--ui-text-muted, gray)"
      }), (0, n.A)(this, "confirmStyle", {
        position: "absolute",
        display: "block",
        backgroundColor: "rgba(255, 0, 0, 0.37)",
        opacity: .3,
        border: "1px solid #e82b2b",
        boxSizing: "border-box",
        zIndex: 999999
      });
    }
    shouldComponentUpdate(e) {
      return e.confirmDeleteInfo != this.props.confirmDeleteInfo;
    }
    getForTabular(e, t) {
      var r = e.element,
        n = Q.Z.getTabularCellIndexFromKey(t.key),
        i,
        o,
        s = Q.Z.getAllKeysFromColumn(r.reactInstance.getModel(), n.column),
        a = Q.Z.getAllKeysFromRow(r.reactInstance.getModel(), n.row);
      return this.props.confirmDeleteInfo.columnDeleteSelected ? (i = s, o = a) : (i = a, o = s), this.props.rowOnly && (o = []), f().reduce(f().orderBy(f().uniq(i.concat(o))), (e, n) => {
        var s = r.reactInstance.refMap[n];
        return s && e.push({
          element: s.editor.parentElement,
          alternative: o.indexOf(n) >= 0,
          isPrimary: i.indexOf(n) >= 0,
          key: t.key
        }), e;
      }, []);
    }
    getSelectedElements(e, t) {
      var r = S.A.findLineByIndex(e, t.lineIndex),
        n = he.A.findSelectedBlock(r, t.charIndex);
      n.sub && (n = n.sub);
      var i = n.element,
        o;
      if (t.selected) {
        var s = i.reactInstance.refMap[t.key].editor;
        return this.getSelectedElements(s, t.selected);
      }
      return t.key ? Q.Z.isKeyInTabularFormat(t.key) ? this.getForTabular(n, t) : [{
        element: i.reactInstance.refMap[t.key].editor,
        key: t.key,
        isPrimary: !0,
        alternative: !1
      }] : t.keys ? t.keys.map(e => {
        var t;
        return {
          element: i.reactInstance.refMap[e].editor,
          key: e,
          isPrimary: !0,
          alternative: !1
        };
      }) : [{
        element: n.element,
        key: t.key,
        isPrimary: !0,
        alternative: !1
      }];
    }
    componentDidMount() {
      if (this.props.isTabular) {
        var e = kt.getSelectedEditor(this.props.mainEditor.editor, this.props.selected);
        if (!e) return;
        this.jBulb = Pc.tempraryHide(e);
      }
    }
    componentWillUnmount() {
      this.props.isTabular && this.jBulb && Pc.restore(this.jBulb);
    }
    getRectanglesInfo(e, t) {
      var r,
        n = f().map(e, (e, n) => {
          var i = q.T.getBCRect(e.element, this.props.dzContainer),
            o = Ic(Ic({}, this.confirmStyle), {}, {
              left: i.left - t.left,
              top: i.top - t.top,
              width: i.right - i.left,
              height: i.bottom - i.top,
              backgroundColor: e.isPrimary ? "rgba(255, 0, 0, 0.37)" : "transparent"
            });
          return this.props.isTabular && e.alternative && !r && (r = {
            left: i.left,
            top: i.top
          }), c().createElement("confirm", {
            key: n,
            style: o
          }, " ");
        });
      return {
        elements: n,
        leftTopAlt: r
      };
    }
    getTabText(e, t) {
      if (this.props.isTabular && !this.props.rowOnly) {
        var r = this.props.confirmDeleteInfo.columnDeleteSelected ? {
          left: -40,
          top: 0
        } : {
          left: 0,
          top: -27
        };
        return c().createElement("div", {
          style: Ic(Ic({}, this.tabTextStyle), {}, {
            left: e.left - t.left + r.left,
            top: e.top - t.top + r.top
          })
        }, "Tab");
      }
    }
    render() {
      if (!this.props.confirmDeleteInfo || !this.props.mainEditor) return c().createElement("div", null);
      var e = this.getSelectedElements(this.props.mainEditor.editor, this.props.confirmDeleteInfo);
      if (0 == e.length) return c().createElement("div", null);
      var t = q.T.getBCRect(this.props.mathType, this.props.dzContainer),
        r = this.getRectanglesInfo(e, t),
        n = r.elements,
        i = r.leftTopAlt,
        o = this.getTabText(i, t);
      return c().createElement("remove-confirm-container", {
        style: {
          pointerEvents: "none"
        }
      }, n, o);
    }
  }
  function Lc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Rc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lc(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lc(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bc {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "deactivated", !1), this.target = e;
    }
    deactivateHandler() {
      this.deactivated = !0;
    }
    isConfirmDeleted() {
      return !!this.target.state.confirmDeleted;
    }
    clearConfirmDelete() {
      this.target.state.confirmDeleted && this.target.setState({
        confirmDeleted: null
      });
    }
    requestConfirmDeleteTabularToggleRowColumn() {
      var e;
      this.deactivated || this.target.getContainerModel().isPlotCasesSelected() || this.target.setState({
        confirmDeleted: Rc(Rc({}, this.target.state.confirmDeleted), {}, {
          columnDeleteSelected: !this.target.state.confirmDeleted.columnDeleteSelected
        })
      });
    }
    isConfirmDeleteWithTabular() {
      if (!this.isConfirmDeleted()) return !1;
      var e = Ze.A.findLeafSelected(this.target.state.confirmDeleted).key;
      return Q.Z.isKeyInTabularFormat(e);
    }
    renderConfirmDelete() {
      if (!this.deactivated) {
        if (!this.target.state.confirmDeleted) return null;
        var e = this.target.getContainerModel();
        return c().createElement(Tc, {
          dzContainer: this.target.getDocZoomContainer(),
          mainEditor: this.target.getEditorComponent(),
          rowOnly: e.isPlotCasesSelected(),
          isTabular: e.quickRowColumnInsertionSupport(),
          mathType: this.target.getMathTypeHtmlElement(),
          selected: e.cursorSelected,
          confirmDeleteInfo: this.target.state.confirmDeleted
        });
      }
    }
  }
  function Fc(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function jc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Fc(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _c extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "jBulb", void 0), (0, n.A)(this, "state", {
        position: "bottom"
      }), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "handleKeyDown", e => {
        if (e.preventDefault(), e.stopPropagation(), 37 != e.keyCode) {
          if (39 != e.keyCode) 38 != e.keyCode ? 40 != e.keyCode ? 13 != e.keyCode ? this.props.onClose() : this.props.onSelect(this.state.position) : this.setState({
            position: "bottom"
          }) : this.setState({
            position: "top"
          });else {
            if (this.props.rowOnly) return;
            this.setState({
              position: "right"
            });
          }
        } else {
          if (this.props.rowOnly) return;
          this.setState({
            position: "left"
          });
        }
      });
    }
    renderInsertLeftColumn(e, t) {
      if (!this.props.rowOnly) return c().createElement("div", {
        style: ea.a.applyReverseZoomStyle({
          position: "absolute",
          left: -5,
          top: "50%",
          backgroundColor: "var(--ui-surface, white)",
          whiteSpace: "nowrap",
          padding: 3,
          borderRadius: 2,
          boxShadow: "var(--ui-shadow, rgb(144, 143, 143)) 1px 1px 2px",
          marginRight: 2,
          transform: "translate(-100%, -50%)",
          border: "left" == e ? "1px solid green" : "1px solid var(--ui-border, #c3c2c2)",
          fontSize: 11,
          color: "left" == e ? "green" : "var(--ui-text, black)",
          zIndex: 999999
        }, t, "right center")
      }, "Left Column");
    }
    renderInsertRightColumn(e, t) {
      if (!this.props.rowOnly) return c().createElement("div", {
        style: ea.a.applyReverseZoomStyle({
          position: "absolute",
          top: "50%",
          left: "100%",
          backgroundColor: "var(--ui-surface, white)",
          whiteSpace: "nowrap",
          padding: 3,
          borderRadius: 2,
          boxShadow: "var(--ui-shadow, rgb(144, 143, 143)) 1px 1px 2px",
          marginLeft: 5,
          transform: "translate(0, -50%)",
          border: "right" == e ? "1px solid green" : "1px solid var(--ui-border, #c3c2c2)",
          fontSize: 11,
          color: "right" == e ? "green" : "var(--ui-text, black)",
          zIndex: 999999
        }, t, "left center")
      }, "Right Column");
    }
    renderInsertRowAbove(e, t) {
      return c().createElement("div", {
        style: ea.a.applyReverseZoomStyle({
          position: "absolute",
          top: -5,
          left: "50%",
          transform: "translate(-50%,-100%)",
          backgroundColor: "var(--ui-surface, white)",
          whiteSpace: "nowrap",
          padding: 3,
          borderRadius: 2,
          boxShadow: "var(--ui-shadow, rgb(144, 143, 143)) 1px 1px 2px",
          marginBottom: 2,
          border: "top" == e ? "1px solid green" : "1px solid var(--ui-border, #c3c2c2)",
          fontSize: 11,
          color: "top" == e ? "green" : "var(--ui-text, black)",
          zIndex: 999999
        }, t, "center bottom")
      }, "Row Above");
    }
    renderInsertRowBelow(e, t) {
      return c().createElement("div", {
        style: ea.a.applyReverseZoomStyle({
          position: "absolute",
          top: "100%",
          left: "50%",
          backgroundColor: "var(--ui-surface, white)",
          whiteSpace: "nowrap",
          padding: 3,
          borderRadius: 2,
          boxShadow: "var(--ui-shadow, rgb(144, 143, 143)) 1px 1px 2px",
          marginTop: 5,
          transform: "translateX(-50%)",
          border: "bottom" == e ? "1px solid green" : "1px solid var(--ui-border, #c3c2c2)",
          fontSize: 11,
          color: "bottom" == e ? "green" : "var(--ui-text, black)",
          zIndex: 999999
        }, t, "center top")
      }, "Row Below");
    }
    componentDidMount() {
      E.A.waitALitteWhile(() => {
        var e;
        h().findDOMNode(this).focus();
      });
      var e = kt.getSelectedEditor(this.props.editor, this.props.selected);
      e && (this.jBulb = Pc.tempraryHide(e));
    }
    componentWillUnmount() {
      this.unmounted = !0, this.jBulb && Pc.restore(this.jBulb);
    }
    raiseCloseAsSelectedNotFound() {
      this.unmounted || setTimeout(() => {
        this.unmounted || this.props.onClose();
      }, 100);
    }
    render() {
      var e = this.props,
        t = e.editor,
        r = e.selected,
        n = e.baseElement,
        i = kt.getSelectedEditor(t, r);
      if (!i) return this.raiseCloseAsSelectedNotFound(), c().createElement("div", null);
      var o = this.props.getDzContainer(),
        s = q.T.getBCRectToElement(i.parentElement, n, o),
        a = jc(jc({}, Nc), {}, {
          width: s.right - s.left,
          height: s.bottom - s.top,
          top: s.top,
          left: s.left
        });
      return c().createElement("div", {
        "data-test-select": "row-column-insertion",
        style: a,
        tabIndex: -1,
        onKeyDown: this.handleKeyDown
      }, this.renderInsertLeftColumn(this.state.position, o), this.renderInsertRightColumn(this.state.position, o), this.renderInsertRowAbove(this.state.position, o), this.renderInsertRowBelow(this.state.position, o));
    }
  }
  var Nc = {
    width: 100,
    height: 100,
    position: "absolute",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: '"Segoe UI", Arial, Verdana, sans-serif'
  };
  class zc {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "handleClose", () => {
        this.clear(), this.target.hidenInputFocus();
      }), (0, n.A)(this, "handleSelect", e => {
        var t = S.A.findTabularReactInstance(this.target.getContainerModel().cursorPos);
        if (t) switch (e) {
          case "left":
            t.insertColumnOnLeft();
            break;
          case "top":
            t.insertRowAbove();
            break;
          case "right":
            t.insertColumnOnRight(!0);
            break;
          case "bottom":
            t.insertRowBelow(!0);
        }
      }), this.target = e;
    }
    show() {
      this.target.requestRender(this);
    }
    clear() {
      this.target.closeRender(this);
    }
    render() {
      var e = this.target.getContainerModel();
      return c().createElement(_c, {
        getDzContainer: this.target.getDocZoomContainer,
        rowOnly: e.isPlotCasesSelected(),
        onClose: this.handleClose,
        onSelect: this.handleSelect,
        baseElement: this.target.getMathTypeHtmlElement(),
        selected: e.cursorSelected,
        editor: this.target.getEditorHtmlElement()
      });
    }
  }
  var Hc = {
      display: "flex",
      flexDirection: "row",
      alignContent: "stretch",
      flexGrow: 1,
      marginBottom: 3,
      fontSize: 12,
      width: "100%"
    },
    Wc = {
      display: "flex",
      flexDirection: "row",
      minHeight: 25,
      border: "1px solid var(--ui-border, lightgray)",
      borderBottom: "none",
      background: "var(--ui-surface-muted, #f7f7f7)",
      alignItems: "center",
      padding: "5px 5px",
      paddingBottom: 0
    },
    Vc = {
      flex: 1,
      alignItems: "stretch",
      display: "flex",
      marginLeft: 5,
      position: "relative",
      flexDirection: "column",
      minWidth: 0
    },
    Uc = {
      width: 250,
      display: "flex",
      flexDirection: "column"
    },
    qc = {
      display: "flex",
      padding: "0 0 5px 0px",
      minHeight: 25
    },
    Gc = {
      position: "static",
      paddingLeft: 0,
      top: 0,
      width: "100%",
      minWidth: "none",
      boxShadow: "none",
      border: "none",
      borderBottom: "1px solid var(--ui-border, lightgray)",
      background: "var(--ui-surface-muted, #f7f7f7)"
    },
    Kc = {
      flexGrow: 1,
      padding: 5,
      marginTop: 0,
      paddingTop: 20,
      minHeight: 200
    },
    Zc = null,
    Yc = {
      fontSize: "1.1em",
      color: "var(--ui-danger, #ce0303)"
    },
    Qc = null,
    Jc = {
      flexGrow: 1,
      paddingLeft: 5,
      color: "var(--ui-text-muted, gray)"
    },
    Xc = {
      border: "1px solid var(--ui-border, lightgray)",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column"
    },
    $c = {
      height: 35,
      background: "var(--ui-surface-muted, #f7f7f7)",
      borderBottom: "1px var(--ui-border, lightgray) solid"
    };
  class ed extends c().Component {
    constructor(e) {
      super(e), this.state = {
        element: c().createElement("div", {
          style: $c
        })
      };
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    updateElement(e) {
      this.setState({
        element: e
      });
    }
    render() {
      return this.props.hide ? c().createElement("div", {
        style: $c
      }) : c().createElement("div", {
        style: {
          background: "var(--ui-surface-muted, #f7f7f7)",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          height: 35
        },
        className: "role-toolbar-wrapper"
      }, this.state.element);
    }
  }
  class td extends c().Component {
    render() {
      return c().createElement("div", {
        onClick: e => {
          this.props.onSelectId(this.props.treeItem.id, this.props.parentId, "item", e.shiftKey, e.metaKey || e.ctrlKey);
        },
        draggable: !0,
        onDragStart: e => this.props.onDragStart(e, this.props.treeItem.id),
        className: "tree-node tree-node-name",
        style: {
          padding: "4px 0px",
          background: this.props.isSelected ? "var(--ui-selection, #e1e8f5)" : void 0,
          paddingLeft: 18 * this.props.level + 11
        }
      }, c().createElement("span", {
        style: {
          paddingRight: 5
        }
      }, c().createElement("i", {
        className: "fa fa-file-o",
        "aria-hidden": "true"
      })), c().createElement("span", null, this.props.treeItem.name));
    }
  }
  class rd {
    constructor() {
      (0, n.A)(this, "enterTarget", void 0), (0, n.A)(this, "onDragLeave", void 0), (0, n.A)(this, "onDragEnter", void 0), (0, n.A)(this, "handleDragLeave", e => {
        this.enterTarget == e.target && (e.preventDefault(), e.stopPropagation(), this.onDragLeave(e));
      }), (0, n.A)(this, "handleDragEnter", e => {
        this.enterTarget = e.target, e.dataTransfer.dropEffect = "move", this.onDragEnter(e), e.preventDefault(), e.stopPropagation();
      }), (0, n.A)(this, "handleDragOver", e => {
        e.preventDefault();
      });
    }
  }
  function nd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function id(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? nd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class od {
    sort(e) {
      return f().sortBy(e, e => e.name);
    }
    findFolderNode(e, t) {
      var r = this.findNodeRecursive(e, t);
      if (r && "folder" == r.nodeType) return r;
    }
    findNodeRecursive(e, t) {
      if (t.id == e) return t;
      for (var r = 0; r < t.folders.length; r++) {
        var n = t.folders[r],
          i = this.findNodeRecursive(e, n);
        if (i) return i;
      }
      for (var o = 0; o < t.items.length; o++) {
        var s = t.items[o];
        if (s.id == e) return s;
      }
    }
    findParentOf(e, t) {
      return this.findParentOfRecursive(e, t);
    }
    findParentOfRecursive(e, t) {
      for (var r = 0; r < e.items.length; r++) {
        var n;
        if (e.items[r].id == t) return e;
      }
      for (var i = 0; i < e.folders.length; i++) {
        var o = e.folders[i];
        if (o.id == t) return e;
        var s = this.findParentOfRecursive(o, t);
        if (s) return s;
      }
    }
    findNode(e, t) {
      return this.findNodeRecursive(e, t);
    }
    changeName(e, t, r) {
      return t ? this.updateById(e, t, e => id(id({}, e), {}, {
        name: r
      })) : e;
    }
    findAllChildItemIds(e) {
      if ("item" == e.nodeType) return [e.id];
      var t = e.items.map(e => e.id),
        r = f().flatMap(e.folders, e => this.findAllChildItemIds(e));
      return t.concat(r);
    }
    removeNode(e, t) {
      var r = this.findNode(t, e);
      if (!r) return [e, void 0];
      var n = this.findParentOfRecursive(e, t),
        i;
      return n ? [this.updateById(e, n.id, e => "folder" == r.nodeType ? id(id({}, e), {}, {
        folders: e.folders.filter(e => e.id != t)
      }) : id(id({}, e), {}, {
        items: e.items.filter(e => e.id != t)
      })), r] : [e, void 0];
    }
    addItem(e, t) {
      t || (t = e.id);
      var r = this.findNode(t, e);
      if (!r) return [e, void 0];
      var n = {
          id: this.genItemId(),
          name: "New Item",
          nodeType: "item"
        },
        i = "item" == r.nodeType ? this.findParentOfRecursive(e, r.id).id : r.id;
      return [this.updateById(e, i, e => id(id({}, e), {}, {
        items: e.items.concat([n])
      })), n];
    }
    addFolder(e, t) {
      t || (t = e.id);
      var r = this.findNode(t, e);
      if (!r) return [e, void 0];
      var n = {
          id: this.genFolderId(),
          name: "New Folder",
          folders: [],
          items: [],
          nodeType: "folder"
        },
        i = "item" == r.nodeType ? this.findParentOfRecursive(e, r.id).id : r.id;
      return [this.updateById(e, i, e => id(id({}, e), {}, {
        folders: e.folders.concat([n])
      })), n];
    }
    deepCloneTree(e) {
      return f().cloneDeep(e);
    }
    buildOrGetTree(e) {
      return e.tree ? e.tree : {
        id: "root",
        name: "Root",
        nodeType: "folder",
        folders: [],
        items: (e.items || []).map(e => ({
          id: e.id,
          name: e.name,
          nodeType: "item"
        }))
      };
      var t;
    }
    updateById(e, t, r) {
      return this.updateByIdRecursive(e, t, r);
    }
    updateByIdRecursive(e, t, r) {
      var n = this;
      if (e.id == t) return r(e);
      for (var i = function i(o) {
          var s = n.updateByIdRecursive(e.folders[o], t, r);
          if (s && s != e.folders[o]) return {
            v: id(id({}, e), {}, {
              folders: e.folders.map(t => t == e.folders[o] ? s : t)
            })
          };
        }, o = 0; o < e.folders.length; o++) {
        var s = i(o);
        if ("object" == typeof s) return s.v;
      }
      for (var a = function n(i) {
          var o;
          if (e.items[i].id == t) return {
            v: id(id({}, e), {}, {
              items: e.items.map(t => t == e.items[i] ? r(t) : t)
            })
          };
        }, l = 0; l < e.items.length; l++) {
        var c = a(l);
        if ("object" == typeof c) return c.v;
      }
      return e;
    }
    toggleCollapse(e, t) {
      return this.updateById(e, t, e => "item" == e.nodeType ? e : id(id({}, e), {}, {
        collapsed: !e.collapsed
      }));
    }
    moveNode(e, t, r) {
      var n = this.findParentOf(e, t);
      if (!n || n.id == r) return e;
      var i = this.findNode(t, e);
      if (!i) return e;
      var o = this.removeNode(e, t),
        s,
        a = (0, Wt.A)(o, 1)[0],
        l = this.updateById(a, r, e => "item" == e.nodeType ? e : "item" == i.nodeType ? id(id({}, e), {}, {
          items: e.items.concat([i])
        }) : id(id({}, e), {}, {
          folders: e.folders.concat([i])
        }));
      return l == a ? (console.warn("move into its child"), e) : l;
    }
    genFolderId() {
      return "tlf" + Math.random();
    }
    genItemId() {
      return "tl" + Math.random();
    }
  }
  const sd = new od();
  function ad(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ld(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ad(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ad(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class cd extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "dragHandler", new rd()), (0, n.A)(this, "handleDragEnter", () => {
        this.state.dropShow || this.setState({
          dropShow: !0
        });
      }), (0, n.A)(this, "handleDragLeave", () => {
        this.state.dropShow && this.setState({
          dropShow: !1
        });
      }), (0, n.A)(this, "handleDrop", e => {
        this.setState({
          dropShow: !1
        }), e.stopPropagation(), e.preventDefault();
        var t = e.dataTransfer.getData("text/plain");
        t && this.props.onMoveNode(t, this.props.treeFolder.id);
      }), this.dragHandler.onDragEnter = this.handleDragEnter, this.dragHandler.onDragLeave = this.handleDragLeave;
    }
    shouldComponentUpdate(e, t) {
      var r = this.props;
      return e.treeFolder != r.treeFolder || e.parentId != r.parentId || e.asRoot != r.asRoot || e.selectedInfo != r.selectedInfo || e.isSelected != r.isSelected || e.level != r.level || t.dropShow != this.state.dropShow;
    }
    render() {
      return c().createElement("div", {
        style: ld(ld({}, this.props.style), {}, {
          background: this.state.dropShow ? "var(--ui-surface-hover, #e2e0e0)" : "transparent"
        }),
        className: "tree-node",
        onDragEnter: this.dragHandler.handleDragEnter,
        onDragLeave: this.dragHandler.handleDragLeave,
        onDragOver: this.dragHandler.handleDragOver,
        onDrop: this.handleDrop
      }, this.renderNodeName(), this.renderChildren());
    }
    renderNodeName() {
      if (!this.props.asRoot) {
        var e = this.props.treeFolder;
        return c().createElement("div", {
          onClick: e => {
            this.props.onSelectId(this.props.treeFolder.id, this.props.parentId, "folder", e.shiftKey, e.metaKey || e.ctrlKey);
          },
          draggable: !0,
          onDragStart: e => this.props.onDragStart(e, this.props.treeFolder.id),
          className: "tree-node-name",
          style: {
            padding: "4px 0px",
            background: this.props.isSelected ? "var(--ui-selection, #e1e8f5)" : void 0,
            paddingLeft: 18 * this.props.level
          }
        }, c().createElement("span", {
          onClick: e => {
            e.stopPropagation(), e.preventDefault(), this.props.onToggleCollapse(this.props.treeFolder.id);
          },
          style: {
            paddingRight: 5,
            cursor: "pointer",
            width: 7,
            display: "inline-block",
            visibility: this.hasAnyChild() ? "visible" : "hidden"
          }
        }, this.renderOpenCloseIcon()), c().createElement("span", {
          style: {
            paddingRight: 5
          }
        }, c().createElement("i", {
          className: "fa fa-folder",
          "aria-hidden": "true"
        })), c().createElement("span", null, e.name));
      }
    }
    hasAnyChild() {
      var e = this.props.treeFolder;
      return e.folders.length > 0 || e.items.length > 0;
    }
    renderChildren() {
      if (!this.props.treeFolder.collapsed) return c().createElement("div", {
        style: {}
      }, this.renderFolders(this.props.treeFolder.folders), this.renderItems(this.props.treeFolder.items));
    }
    isFolderSelected(e) {
      if (this.isAnyItemSelected()) return "folder" == this.props.selectedInfo.nodeType && this.props.selectedInfo.ids.includes(e);
    }
    isItemSelected(e) {
      if (this.isAnyItemSelected()) return "item" == this.props.selectedInfo.nodeType && this.props.selectedInfo.ids.includes(e);
    }
    isAnyItemSelected() {
      return !!this.props.selectedInfo;
    }
    renderOpenCloseIcon() {
      return this.props.treeFolder.collapsed ? c().createElement("i", {
        className: "fa fa-caret-right",
        "aria-hidden": "true"
      }) : c().createElement("i", {
        className: "fa fa-caret-down",
        "aria-hidden": "true"
      });
    }
    nextLevel() {
      return this.props.asRoot ? 0 : this.props.level + 1;
    }
    renderFolders(e) {
      if (e) {
        var t = this.nextLevel();
        return sd.sort(e).map(e => c().createElement(cd, {
          key: e.id,
          onDragStart: this.props.onDragStart,
          onDragEnd: this.props.onDragEnd,
          parentId: this.props.treeFolder.id,
          level: t,
          treeFolder: e,
          onSelectId: this.props.onSelectId,
          isSelected: this.isFolderSelected(e.id),
          onToggleCollapse: this.props.onToggleCollapse,
          onMoveNode: this.props.onMoveNode,
          selectedInfo: this.props.selectedInfo
        }));
      }
    }
    renderItems(e) {
      if (e) {
        var t = this.nextLevel();
        return sd.sort(e).map(e => c().createElement(td, {
          onDragStart: this.props.onDragStart,
          onDragEnd: this.props.onDragEnd,
          parentId: this.props.treeFolder.id,
          level: t,
          key: e.id,
          onSelectId: this.props.onSelectId,
          isSelected: this.isItemSelected(e.id),
          treeItem: e
        }));
      }
    }
  }
  function dd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function hd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class pd extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleSelectId", (e, t, r, n, i) => {
        if (t) {
          var o = this.props.selectedInfo;
          o && o.nodeType == r ? o.ids.includes(e) || this.props.onSelectedInfoChange(hd(hd({}, o), {}, {
            ids: [e]
          })) : this.props.onSelectedInfoChange({
            ids: [e],
            nodeType: r
          });
        }
      }), (0, n.A)(this, "handleDragStart", (e, t) => {
        e.dataTransfer.setData("text/plain", t), console.log(t);
      }), (0, n.A)(this, "handleDragEnd", () => {});
    }
    render() {
      return c().createElement("div", {
        style: this.props.style,
        className: "math-template-tree"
      }, c().createElement(cd, {
        level: 0,
        asRoot: !0,
        treeFolder: this.props.tree,
        style: {
          padding: 5,
          float: "left",
          minWidth: "calc(100% - 10px)",
          minHeight: 200
        },
        isSelected: !1,
        parentId: void 0,
        selectedInfo: this.props.selectedInfo,
        onSelectId: this.handleSelectId,
        onToggleCollapse: this.props.onToggleCollapse,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        onMoveNode: this.props.onMoveNode
      }));
    }
  }
  class ud extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleSelectedInfoChange", e => {
        this.props.selectedNameId != e.ids[0] && this.props.selectedNameIdChanged(e.ids[0]);
      }), (0, n.A)(this, "handleToggleCollapse", e => {
        this.props.onTreeChange(sd.toggleCollapse(this.props.templates.tree, e));
      }), (0, n.A)(this, "handleMoveNode", (e, t) => {
        var r = sd.moveNode(this.props.templates.tree, e, t);
        r != this.props.templates.tree && this.props.onTreeChange(r);
      }), this.state = {
        selectedInfo: this.buildSelectedInfo(e.selectedNameId, e.templates.tree)
      };
    }
    static firstName(e) {
      return e.length < 0 ? null : ud.orderNames(e)[0];
      var t;
    }
    static orderNames(e) {
      return f().orderBy(e, [e => e.name], ["asc"]);
    }
    buildSelectedInfo(e, t) {
      if (e) {
        var r = sd.findNode(e, t),
          n;
        if (sd.findParentOf(t, e) && r) return {
          ids: [e],
          nodeType: r.nodeType
        };
      }
    }
    componentWillReceiveProps(e) {
      e.selectedNameId != this.props.selectedNameId && this.setState({
        selectedInfo: this.buildSelectedInfo(e.selectedNameId, e.templates.tree)
      });
    }
    render() {
      var e = sd.buildOrGetTree(this.props.templates);
      return c().createElement(pd, {
        tree: e,
        selectedInfo: this.state.selectedInfo,
        style: {
          width: "calc(100% - 2px)",
          height: "100%",
          border: "1px solid var(--ui-border, lightgray)",
          fontSize: 13,
          overflow: "auto"
        },
        onSelectedInfoChange: this.handleSelectedInfoChange,
        onToggleCollapse: this.handleToggleCollapse,
        onMoveNode: this.handleMoveNode
      });
    }
  }
  function gd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function md(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var fd = Zr.A.getModalDialog();
  class yd extends c().Component {
    constructor(e) {
      var t;
      super(e), t = this, (0, n.A)(this, "mathTypeRef", void 0), (0, n.A)(this, "fakeToolbarRef", void 0), (0, n.A)(this, "changedWrap", function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function () {
          E.A.next(() => {
            t.state.lastTemplates && !r.noDismissUndo && t.setState({
              lastTemplates: null,
              lastSelectedTemplateId: null
            }), t.state.isDirty || t.setState({
              isDirty: !0
            }), t.state.successMessage && t.setState({
              successMessage: ""
            });
          });
          for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
          return e.apply(t, i);
        };
      }), (0, n.A)(this, "handleSelectedTemplateChanged", e => {
        this.setState({
          selectedTemplateId: e
        });
        var t = this.state.templates.items.find(t => t.id == e),
          r = t ? t.lines : [sr.A.createEmptyLine()];
        this.mathTypeRef && this.mathTypeRef.setModel(this.wrapToMainModel(r));
      }), (0, n.A)(this, "handleNameChanged", e => {
        if (this.state.selectedTemplateId) {
          var t = sd.changeName(this.state.templates.tree, this.state.selectedTemplateId, e.currentTarget.value);
          if (t != this.state.templates.tree) {
            var r = this.state.templates.items,
              n = this.state.templates.items.find(e => e.id == this.state.selectedTemplateId);
            if (n) {
              var i = md(md({}, n), {}, {
                name: e.currentTarget.value
              });
              r = dt.A.replaceArrayByEntity(this.state.templates.items, i);
            }
            this.setState({
              templates: md(md({}, this.state.templates), {}, {
                tree: t,
                items: r
              })
            });
          }
        }
      }), (0, n.A)(this, "handleAddItem", () => {
        var e = sd.addItem(this.state.templates.tree, this.state.selectedTemplateId),
          t = (0, Wt.A)(e, 2),
          r = t[0],
          n = t[1];
        if (n) {
          var i = this.state.templates.items.concat({
            id: n.id,
            name: n.name,
            lines: [sr.A.createEmptyLine()]
          });
          this.setState({
            templates: md(md({}, this.state.templates), {}, {
              items: i,
              tree: r
            })
          }, () => {
            this.handleSelectedTemplateChanged(n.id);
          });
        }
      }), (0, n.A)(this, "handleAddFolder", () => {
        var e = sd.addFolder(this.state.templates.tree, this.state.selectedTemplateId),
          t = (0, Wt.A)(e, 2),
          r = t[0],
          n = t[1];
        n && this.setState({
          templates: md(md({}, this.state.templates), {}, {
            tree: r
          })
        }, () => {
          this.handleSelectedTemplateChanged(n.id);
        });
      }), (0, n.A)(this, "handleRemoveItem", () => {
        if (this.state.selectedTemplateId) {
          var e = sd.removeNode(this.state.templates.tree, this.state.selectedTemplateId),
            t = (0, Wt.A)(e, 2),
            r = t[0],
            n = t[1];
          if (n) {
            var i = sd.findAllChildItemIds(n),
              o = this.state.templates.items.filter(e => !i.includes(e.id));
            this.setState({
              templates: md(md({}, this.state.templates), {}, {
                items: o,
                tree: r
              }),
              selectedTemplateId: this.state.lastSelectedTemplateId,
              lastTemplates: this.state.templates,
              lastSelectedTemplateId: this.state.selectedTemplateId
            }), this.handleSelectedTemplateChanged(o[0] ? o[0].id : null);
          }
        }
      }), (0, n.A)(this, "handleMathTypeModelChanged", e => {
        var t = this.findSelectedTemplate();
        if (t) {
          var r = md(md({}, t), {}, {
            lines: e.lines[0].blocks[0].elements.mathValue.lines
          });
          this.setState({
            templates: md(md({}, this.state.templates), {}, {
              items: dt.A.replaceArrayByEntity(this.state.templates.items, r)
            })
          });
        }
      }), (0, n.A)(this, "handleUndoDelete", () => {
        if (this.setState({
          templates: this.state.lastTemplates,
          lastTemplates: null,
          lastSelectedTemplateId: null
        }), this.state.lastSelectedTemplateId) {
          var e = this.state.lastSelectedTemplateId;
          E.A.waitABit(() => {
            this.handleSelectedTemplateChanged(e);
          });
        }
      }), (0, n.A)(this, "handleSave", () => {
        this.setState({
          isSaving: !0,
          errorMessage: null,
          successMessage: null
        }), this.props.onSaveTemplates(this.state.templates).then(() => {
          this.setState({
            isDirty: !1,
            errorMessage: null,
            successMessage: "Saved."
          });
        }).catch(e => {
          this.setState({
            errorMessage: e.message,
            successMessage: null
          });
        }).finally(() => {
          this.setState({
            isSaving: !1
          });
        });
      }), (0, n.A)(this, "handleMathTypeRef", e => {
        this.mathTypeRef = e;
      }), (0, n.A)(this, "handleFakeToolbarRef", e => {
        this.fakeToolbarRef = e;
      }), (0, n.A)(this, "handleRequestRenderToolbar", e => {
        E.A.next(() => {
          this.fakeToolbarRef && this.fakeToolbarRef.updateElement(e);
        });
      }), (0, n.A)(this, "handleTreeChange", e => {
        this.setState({
          templates: md(md({}, this.state.templates), {}, {
            tree: e
          })
        });
      }), this.state = {
        templates: this.initStateTemplates(e)
      }, this.handleNameChanged = this.changedWrap(this.handleNameChanged), this.handleMathTypeModelChanged = this.changedWrap(this.handleMathTypeModelChanged), this.handleAddItem = this.changedWrap(this.handleAddItem), this.handleRemoveItem = this.changedWrap(this.handleRemoveItem, {
        noDismissUndo: !0
      }), this.handleUndoDelete = this.changedWrap(this.handleUndoDelete), this.handleAddFolder = this.changedWrap(this.handleAddFolder), this.handleTreeChange = this.changedWrap(this.handleTreeChange, {
        noDismissUndo: !0
      });
    }
    initStateTemplates(e) {
      var t = e.templates || {
        items: []
      };
      return t.tree ? e.templates : {
        tree: sd.buildOrGetTree(t),
        items: t.items
      };
    }
    getTemplateItems(e) {
      return (e || {
        items: []
      }).items || [];
    }
    componentDidMount() {
      var e = ud.firstName(this.getTemplateItems(this.props.templates));
      e && E.A.next(() => {
        this.handleSelectedTemplateChanged(e.id);
      });
    }
    wrapToMainModel(e) {
      var t = sr.A.createComposite("\\inline-math");
      t.elements.mathValue = sr.A.createEmptyEditor();
      var r = sr.A.createEmptyEditor();
      return r.lines[0].blocks.push(t), t.elements.mathValue.lines = Ar.h.assignIds(e), r;
    }
    findSelectedTemplate() {
      return this.state.templates.items.find(e => e.id == this.state.selectedTemplateId);
    }
    renderUndoDeleteButton() {
      if (this.state.lastTemplates) return c().createElement("button", {
        className: "btn-normal math-template-btb",
        style: {
          marginLeft: 10
        },
        onClick: this.handleUndoDelete
      }, c().createElement("span", {
        style: {
          color: "rgb(76, 175, 80)"
        }
      }, "Undo Delete"));
    }
    noSelect() {
      return !this.state.selectedTemplateId || !this.state.templates.items.some(e => e.id == this.state.selectedTemplateId);
    }
    render() {
      var e = {
          width: 13,
          height: 13,
          overflow: "visible",
          fill: "var(--ui-text-muted, gray)"
        },
        t = md(md({}, e), {}, {
          verticalAlign: "-2px"
        }),
        r = sd.findNode(this.state.selectedTemplateId, this.state.templates.tree),
        n = this.props.MathTypeClss;
      return c().createElement(fd, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Custom math manager",
        size: "wide",
        scroll: "body",
        style: md({
          height: "calc(100% - 100px)",
          maxHeight: 900,
          width: "calc(100% - 100px)",
          maxWidth: 1300
        }, Zr.A.getCenterStyle()),
        disableEscapeToClose: !0,
        message: this.state.errorMessage || this.state.successMessage,
        isMessageOk: !this.state.errorMessage && !!this.state.successMessage,
        cancelLabel: this.state.isDirty ? "Cancel" : "Close",
        isProgressing: this.state.isSaving,
        isOkDisabled: !this.state.isDirty,
        backDrop: !1,
        okLabel: "Save",
        onOk: this.handleSave,
        onCancel: this.props.onClose,
        footerStyle: {
          flexShrink: 0
        },
        show: !0
      }, c().createElement("div", {
        style: Hc
      }, c().createElement("div", {
        style: Uc
      }, c().createElement("div", {
        style: Wc
      }, c().createElement("button", {
        className: "btn-normal math-template-btb",
        style: {
          marginRight: 5
        },
        onClick: this.handleAddItem
      }, Zi.A.newFile(e)), c().createElement("button", {
        className: "btn-normal math-template-btb",
        onClick: this.handleAddFolder
      }, Zi.A.newFolder(t)), c().createElement("button", {
        className: "btn-normal math-template-btb",
        onClick: this.handleRemoveItem,
        style: {
          marginLeft: 10
        }
      }, c().createElement("i", {
        className: "fa fa-trash",
        "aria-hidden": "true",
        style: Yc
      })), this.renderUndoDeleteButton()), c().createElement(ud, {
        selectedNameId: this.state.selectedTemplateId,
        templates: this.state.templates,
        selectedNameIdChanged: this.handleSelectedTemplateChanged,
        onTreeChange: this.handleTreeChange
      })), c().createElement("div", {
        style: Vc
      }, c().createElement("div", {
        className: "test-node-name-input-container",
        style: qc
      }, c().createElement("input", {
        disabled: !r,
        style: Jc,
        onChange: this.handleNameChanged,
        type: "text",
        value: r && r.name || ""
      })), c().createElement("div", {
        style: Xc
      }, c().createElement(ed, {
        ref: this.handleFakeToolbarRef,
        hide: this.noSelect()
      }), c().createElement("div", {
        className: "test-mt-container",
        style: {
          overflow: "auto",
          flex: 1,
          marginTop: 0,
          visibility: this.noSelect() ? "hidden" : void 0
        }
      }, c().createElement(n, {
        requestRenderToolbar: this.handleRequestRenderToolbar,
        autoCompleteUsingPositionFixed: !0,
        onModelChanged: this.handleMathTypeModelChanged,
        mathModeAdditionalSymbolSupports: ["\\cursor-placement"],
        ref: this.handleMathTypeRef,
        toolbarEnabled: !0,
        restrictedView: !0,
        toolbarMathOptionOnly: !0,
        toolbarExportOptionsHide: !0,
        toolbarStyle: Gc,
        style: Kc,
        oneMode: "math-mode",
        mathTemplatesDisable: !0
      })))))));
    }
  }
  class vd extends sn {
    render() {
      var e = this.getTarget();
      return c().createElement(yd, {
        MathTypeClss: e.getMathTypeClss(),
        templates: e.getMathTemplates(),
        onSaveTemplates: e.setMathTemplates,
        onClose: () => e.closeRender(this)
      });
    }
    getKey() {
      return "MathTemplateHandler";
    }
    showMathTemplate() {
      this.getTarget().props.mathTemplatesDisable || this.getTarget().requestRender(this);
    }
  }
  class bd extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "specialSymbolDialogInfo", void 0), (0, n.A)(this, "handleClose", () => {
        this.specialSymbolDialogInfo = null, this.getTarget().closeRender(this);
      }), (0, n.A)(this, "handleOk", e => {
        if (e) {
          var t = this.specialSymbolDialogInfo;
          this.specialSymbolDialogInfo = null, t.callback ? t.callback(e) : (this.getTarget().insertText(e), this.getTarget().closeRender(this));
        }
      });
    }
    render() {
      if (this.specialSymbolDialogInfo) return c().createElement(Wo, {
        fixedContextHandler: this.getTarget().getFixedContextHandler(),
        selectMode: this.specialSymbolDialogInfo.mode,
        onOk: this.handleOk,
        onClose: this.handleClose
      });
    }
    showSpecialSymbolDialog() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "multiple",
        t = arguments.length > 1 ? arguments[1] : void 0;
      this.specialSymbolDialogInfo = {
        mode: e,
        callback: t
      }, this.getTarget().requestRender(this);
    }
  }
  var xd = r(71930),
    Cd = r(17825),
    Sd = r(79194),
    Ad = r(44124);
  function wd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ed(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class kd extends sn {
    insertBySymbolInfo(e) {
      var t;
      if (e && ("\\exercise" !== (null === (t = e.names) || void 0 === t ? void 0 : t[0]) || this.getTarget().getContainerModel().isRootLineSelected())) {
        if (e.names && e.names[0]) switch (e.names[0]) {
          case "\\mathnormal":
          case "\\mathrm":
          case "\\mathbf":
          case "\\boldsymbol":
          case "\\mathit":
          case "\\mathbb":
          case "\\mathcal":
          case "\\mathscr":
          case "\\mathfrak":
          case "\\mathsf":
          case "\\mathtt":
            return void this.getTarget().setMathFontName(e.names[0]);
        }
        if (e.names && "\\tag-select" == e.names[0]) this.getTarget().buildTagSelection();else if (e.names && "\\from-latex" == e.names[0]) this.getTarget().showImportLatex();else if (e.names && "\\theorem-options" == e.names[0]) this.getTarget().showTheoremManagement();else if (e.names && "\\theorem-ref-select" == e.names[0]) this.getTarget().showTheoremRefSelect();else if (e.names && "Manage Custom Math" == e.names[0]) this.getTarget().showMathTemplate();else if (e.names && "\\special-char" == e.names[0]) this.getTarget().showSpecialSymbolDialog();else if (e.names && "\\define-shortcuts" == e.names[0]) this.getTarget().showShortcutManager();else {
          if (e.names) {
            if ("\\section-ref" == e.names[0] && !e.tagId) return void this.getTarget().showSectionRefDialog();
            if ("\\table-caption-ref" == e.names[0] && !e.tagId) return void this.getTarget().showCaptionRefDialog("table");
            if ("\\image-caption-ref" == e.names[0] && !e.tagId) return void this.getTarget().showCaptionRefDialog("image");
            if ("\\diagram-caption-ref" == e.names[0] && !e.tagId) return void this.getTarget().showCaptionRefDialog("diagram");
            if ("\\theorem-ref" == e.names[0] && !e.tagId) return void this.getTarget().showTheoremRefSelect();
          }
          if ("action" == e.type && e.names && "\\latex-table" == e.names[0]) this.getTarget().showLatexTemplateDialog();else if ("action" == e.type && e.names && "\\plot" == e.names[0]) this.getTarget().showPlotSelection();else if ("action" == e.type && e.names && "\\xymatrix" == e.names[0]) this.getTarget().showPlotSelection("xymatrix", !0);else if ("action" == e.type && e.names && "\\cas-dialog" == e.names[0]) this.getTarget().requestCasDialog();else {
            if (e.names && "\\table-of-content" == e.names[0] && (e = Ed(Ed({}, e), {}, {
              editor: this.getTarget().getEditorHtmlElement(),
              editorModel: this.getState().mainModel
            })), e.names && "\\footnote" == e.names[0]) {
              var r = "footnote-insert-by-auto-complete";
              e = Ed(Ed({}, e), {}, {
                customData: r
              });
            }
            "\\anchor-tag" == e.names[0] && (xd.AnchorTag.showDialogOnMount = !0), "\\anchor-tag-ref" == e.names[0] && (Cd.AnchorTagRef.showDialogOnMount = !0), "\\cite" == e.names[0] && (Sd.BibCite.showDialogOnMount = !0), "\\bibliography" == e.names[0] && (Ad.BibBibliography.showDialogOnMount = !0);
            var n = this.getTarget();
            e = Ed(Ed({}, e), {}, {
              restrictedView: n.isRestrictedView()
            });
            var i = n.getController().handleBySymbolInfo(e, n.getContainerModel());
            n.handleResult(i), n.hidenInputFocus(!0);
          }
        }
      }
    }
    insertText(e) {
      if (e) {
        var t = this.getTarget().getController().insertText(e, this.getTarget().getContainerModel());
        this.getTarget().handleResult(t);
      }
    }
  }
  class Od {
    assignPathD(e, t, r, n) {
      return n || (n = this.toBlockInfo(e)), t.map(e => {
        var t = n.find(t => t.isText && t.start <= e.from && e.from <= t.end + 1),
          i = e.to + 1,
          o = n.find(e => e.isText && e.start <= i && i <= e.end + 1);
        if (t && o) {
          var s, a;
          if (t == o) {
            var l = S.A.rangeFrom2Indexes(t.block, e.from - t.start, i - o.start);
            s = q.T.getBCRectsToRect(l, r);
          } else {
            var c;
            c = e.from - t.start == t.block.textContent.length ? S.A.rangeFromIndex(t.block.nextElementSibling, 0) : S.A.rangeFromIndex(t.block, e.from - t.start);
            var d = S.A.rangeFrom2Indexes(o.block, 0, i - o.start),
              h = q.T.getBCRectsToRect(c, r),
              p = q.T.getBCRectsToRect(d, r);
            s = 1 == h.length && 1 == p.length ? [q.T.buildBcRect(h[0].left, h[0].top, p[0].right, p[0].bottom, r.zc)] : h.concat(p);
          }
          return a = 1 == s.length ? this.buildPathFromRect(s[0]) : s.map(e => this.buildPathFromRect(e)).join(" "), e.pathD = a, a;
        }
      });
    }
    toBlockInfo(e) {
      for (var t = S.A.findBlocks(e), r = 0, n = [], i = 0; i < t.length; i++) {
        var o = t[i],
          s = S.A.isNonChar(o),
          a = s ? 1 : o.textContent.length;
        n.push({
          block: o,
          isText: !s,
          start: r,
          end: r + a - 1
        }), r += a;
      }
      return n;
    }
    buildPathFromRect(e) {
      for (var t = e.right - e.left, r = Math.floor(t / 4), n = [], i = 0; i < r; i++) n.push({
        x: Math.round(e.left + 4 * i),
        y: Math.round(e.bottom + 2)
      }), n.push({
        x: Math.round(e.left + 4 * i + 2),
        y: Math.round(e.bottom)
      }), n.push({
        x: Math.round(e.left + 4 * i + 4),
        y: Math.round(e.bottom + 2)
      });
      return n.length <= 0 ? "" : "M ".concat(n[0].x, " ").concat(n[0].y, " ") + n.map(e => "".concat(e.x, " ").concat(e.y)).join(" L ");
    }
  }
  const Dd = new Od();
  class Pd {
    updateSpellCheckPosition(e, t) {
      if (e.model) {
        var r = e.anchorElement,
          n = e.model,
          i = r.reactInstance.getLineData();
        e.originalCharRanges || (e.originalCharRanges = e.charRanges);
        var o = this.analyze(n, i),
          s = this.rebuildRanges(e.originalCharRanges, o);
        e.charRanges = s, Dd.assignPathD(e.anchorElement, e.charRanges, t, void 0);
      }
    }
    rebuildRanges(e, t) {
      var r = e.filter(e => e.from <= t.start && e.to <= t.start),
        n = e.filter(e => e.from >= t.prevEnd && e.to >= t.prevEnd),
        i = t.nextTotal - t.prevTotal,
        o = n.map(e => ({
          from: e.from + i,
          to: e.to + i
        }));
      return r.concat(o);
    }
    analyze(e, t) {
      for (var r = this.getLineText(e), n = this.getLineText(t), i = -1, o = 0; o < r.length && r[o] == n[o]; o++) i = o;
      for (var s = r.length - 1, a = n.length - 1, l = r.length - 1, c = n.length - 1; l >= 0 && c >= 0 && !(r[l] != n[c] || l <= i || c <= i); l--, c--) s = l, a = c;
      return {
        start: i,
        prevEnd: s,
        nextEnd: a,
        prevTotal: r.length,
        nextTotal: n.length
      };
    }
    getLineText(e) {
      return e.blocks.map(e => e.type ? " " : e.text).join("");
    }
  }
  const Md = new Pd();
  class Id {
    constructor() {
      (0, n.A)(this, "count", 0);
    }
    resetCount() {
      this.count = 0;
    }
    getCount() {
      return this.count;
    }
    asignAnchor(e, t, r, n) {
      if (!e.anchorElement || n) {
        e.anchorElement = t;
        var i = q.T.getBCRectToRect(t, r);
        e.originalAnchorRect = {
          left: i.left,
          top: i.top
        }, e.time || (e.time = new Date().getTime());
        var o = this.getModelFromElement(e);
        o && (e.model = o);
      }
    }
    getModelFromElement(e) {
      var t = e.anchorElement.reactInstance;
      return t.getModel || t.getModel ? t.getModel() : t.getLineData ? t.getLineData() : void 0;
    }
    updateRect(e, t, r) {
      this.updateRectSpellCheckRootEditor(e.editor, t, r);
    }
    updateRectSpellCheckRootEditor(e, t, r) {
      this.count++;
      var n = e.lines;
      if (void 0 !== r && r >= 0) {
        for (var i = f().partition(n, e => e.lineIndex <= r), o = (0, Wt.A)(i, 2), s = o[0], a = o[1], l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (!this.updateRectSpellCheckLine(c, t)) break;
          c.changed = !0;
        }
        for (var d = 0; d < a.length; d++) {
          var h = a[d];
          if (!this.updateRectSpellCheckLine(h, t)) break;
          h.changed = !0;
        }
      } else for (var p = 0; p < n.length; p++) {
        var u = n[p];
        this.updateRectSpellCheckLine(u, t), u.changed = !0;
      }
    }
    updateRectSpellCheckEditor(e, t) {
      this.count++;
      for (var r = !1, n = e.lines, i = 0; i < n.length; i++) {
        var o = n[i];
        r = this.updateRectSpellCheckLine(o, t) || r;
      }
      return r;
    }
    updateRectSpellCheckLine(e, t) {
      return !!e.anchorElement && (this.count++, this.isModelChanged(e) ? (Md.updateSpellCheckPosition(e, t), e.compositeBlocks.forEach(e => {
        this.updateCompositeBlock(e, t);
      }), !0) : this.updateAnchorElementIfChanged(e, t));
    }
    updateCompositeBlock(e, t) {
      this.isModelChanged(e) ? (this.count++, e.editors.forEach(e => {
        this.updateRectSpellCheckEditor(e, t);
      })) : this.updateAnchorElementIfChanged(e, t);
    }
    updateAnchorElementIfChanged(e, t) {
      var r = q.T.getBCRectToRect(e.anchorElement, t);
      return r.left == r.right ? (e.isHidden = !0, !0) : !!this.compareAnchorRectChanged(r, e.originalAnchorRect) && (e.delta = this.getDelta(r, e.originalAnchorRect), !0);
    }
    isModelChanged(e) {
      return !!e.model && e.model != this.getModelFromElement(e);
    }
    compareAnchorRectChanged(e, t) {
      return Math.round(e.left) != Math.round(t.left) || Math.round(e.top) != Math.round(t.top);
    }
    getDelta(e, t) {
      return {
        x: e.left - t.left,
        y: e.top - t.top
      };
    }
  }
  const Td = new Id();
  var Ld = 1e4;
  class Rd {
    processSpellCheckEditor(e, t, r, n) {
      Td.asignAnchor(e, t, r, n);
      var i = S.A.findEditLines(t);
      e.lines.forEach(e => {
        var t = i[e.lineIndex];
        return this.processSpellCheckLine(e, t, r, n);
      });
    }
    processSpellCheckLines(e) {
      var t = e.lines,
        r = e.htmlEditor,
        n = e.rectAnchor,
        i = S.A.findEditLines(r);
      return t.forEach(e => {
        var t = i[e.lineIndex];
        return this.processSpellCheckLine(e, t, n, !0);
      }), this.limitLines(t, e.limitType);
    }
    mergeSpellCheckLines(e, t, r) {
      var n = e.lines,
        i = e.htmlEditor,
        o = e.rectAnchor,
        s = S.A.findEditLines(i);
      n.forEach(e => {
        var t = s[e.lineIndex];
        return this.processSpellCheckLine(e, t, o, !1);
      });
      var a = this.mergeLines(t, n, r);
      return this.limitLines(a, e.limitType);
    }
    mergeLines(e, t, r) {
      for (var n = 0, i = 0, o = []; n < e.length || i < t.length;) {
        var s = e[n] || {
            lineIndex: Number.MAX_SAFE_INTEGER
          },
          a = t[i] || {
            lineIndex: Number.MAX_SAFE_INTEGER
          };
        a.lineIndex != s.lineIndex ? a.lineIndex < s.lineIndex ? (o.push(a), i++) : (r.includes(s.lineIndex) || o.push(s), n++) : (o.push(a), i++, n++);
      }
      return o;
    }
    limitLines(e, t) {
      if (e.length < Ld) return e;
      var r = e.length - Ld + Math.round(2500);
      if ("line-index" == t) return e.slice(0, e.length - r);
      var n = f().orderBy(e, [e => e.time], ["desc"]);
      return f().sortBy(n.slice(0, e.length - r), e => e.lineIndex);
    }
    processSpellCheckLine(e, t, r, n) {
      Td.asignAnchor(e, t, r, n);
      var i = Dd.toBlockInfo(t);
      Dd.assignPathD(t, e.charRanges, r, i), e.compositeBlocks.forEach(e => {
        var t = i.find(t => t.start >= e.charIndex && e.charIndex <= t.end);
        t ? (Td.asignAnchor(e, t.block, r, n), e.editors.forEach(t => {
          var i = e.anchorElement.reactInstance.getEditorDomByKey(t.key);
          if (i) return this.processSpellCheckEditor(t, i, r, n);
        })) : console.warn("block not found for", e);
      });
    }
  }
  const Bd = new Rd();
  var Fd = r(9371);
  class jd {
    getSpellCheckErrorWord(e, t, r) {
      return t && r ? this.findSpellCheckErrorWordRecursive(t, e, r.editor) : null;
      var n;
    }
    findSpellCheckErrorWordRecursive(e, t, r) {
      if (!e || !t || !r) return null;
      var n = t.lines[e.lineIndex],
        i = r.lines.find(t => t.lineIndex == e.lineIndex);
      if (!n || !i) return null;
      var o = Ze.A.toRawIndex(n, e.charIndex);
      if (e.selected && e.key) {
        var s = Ze.A.blockFromIndex(n, e.charIndex);
        if (!s) return null;
        if ("composite" != s.block.type) return null;
        var a = s.block.elements[e.key],
          l = i.compositeBlocks.find(e => e.charIndex == o);
        if (!a || !l) return null;
        var c = l.editors.find(t => t.key == e.key);
        if (!c) return null;
        var d = this.findSpellCheckErrorWordRecursive(e.selected, a, c);
        return d ? {
          word: d.word,
          selected: {
            selected: d.selected,
            lineIndex: e.lineIndex,
            charIndex: e.charIndex,
            key: e.key
          },
          extendedSelected: {
            selected: d.extendedSelected,
            lineIndex: e.lineIndex,
            charIndex: e.charIndex,
            key: e.key
          }
        } : null;
      }
      var h = i.charRanges.find(e => e.from <= o && o <= e.to),
        p,
        u;
      return h ? {
        word: n.blocks.map(e => e.type ? " " : e.text).join("").substring(h.from, h.to + 1),
        selected: {
          lineIndex: e.lineIndex,
          charIndex: Ze.A.toCharIndex(n, h.from)
        },
        extendedSelected: {
          lineIndex: e.lineIndex,
          charIndex: Ze.A.toCharIndex(n, h.to) + 1
        }
      } : null;
    }
  }
  const _d = new jd();
  class Nd extends c().Component {
    render() {
      return this.renderSpellCheckLine(this.props.line);
    }
    shouldComponentUpdate(e) {
      return e.line != this.props.line || !!e.line.changed && (e.line.changed = !1, !0);
    }
    renderSpellCheckLine(e) {
      if (e.isHidden) return null;
      var t = e.charRanges.map(e => c().createElement("path", {
          key: "".concat(e.from, "-").concat(e.to),
          fill: "none",
          strokeLinecap: "square",
          stroke: "#dd0000",
          d: e.pathD
        })),
        r = e.compositeBlocks.map(e => {
          var t = e.editors.map(e => this.renderSpellCheckEditor(e));
          return c().createElement("g", {
            key: e.charIndex,
            style: this.anchorStyleTransform(e)
          }, t);
        });
      return c().createElement("g", {
        key: e.lineIndex,
        style: this.anchorStyleTransform(e)
      }, t, r);
    }
    renderSpellCheckEditor(e) {
      if (e.isHidden) return null;
      var t = e.lines.map(e => this.renderSpellCheckLine(e));
      return c().createElement("g", {
        key: e.key || "root",
        style: this.anchorStyleTransform(e)
      }, t, ";");
    }
    anchorStyleTransform(e) {
      if (e.delta) return {
        transform: new oc.Z().translate(e.delta.x, e.delta.y).toCssStyle()
      };
    }
  }
  function zd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Hd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? zd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Wd extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "refreshAllRunLater", E.A.createLaterRunObject("latest", 350)), (0, n.A)(this, "refreshPositionRunLater", E.A.createLaterRunObject("latest", 350)), (0, n.A)(this, "rootEditorElement", void 0), (0, n.A)(this, "anchor", void 0), (0, n.A)(this, "sameDataChecking", new Vd()), (0, n.A)(this, "isUpdatingRectWithAnchor", !1), (0, n.A)(this, "state", {
        spellCheckResult: null,
        spellCheckLines: []
      }), (0, n.A)(this, "didUmounted", void 0), (0, n.A)(this, "processSpellCheckPosition", () => {
        var e = this.state.spellCheckLines;
        if ("none" == e) return this.refreshSpellCheckAll();
        this.setLinesForState(e, this.linesToRenderLines(e));
      }), (0, n.A)(this, "updateSpellCheckOnVisibleView", () => {
        if (this.anchor) {
          var e = this.props.requestVisibleLines();
          this.requestSpellCheckOnLines(e);
        }
      }), (0, n.A)(this, "updateRectWithAnchor", e => {
        if (this.state.spellCheckResult) {
          this.isUpdatingRectWithAnchor = !0;
          var t = q.T.getBCRect(this.anchor, this.getDocZoomContainer());
          Td.resetCount();
          var r = -1;
          e && this.props.selected && (r = this.props.selected.lineIndex), Td.updateRect(this.state.spellCheckResult, t, r), this.setState({
            spellCheckResult: Hd(Hd({}, this.state.spellCheckResult), {}, {
              editor: this.state.spellCheckResult.editor
            })
          }, () => {
            this.isUpdatingRectWithAnchor = !1;
          });
        }
      }), (0, n.A)(this, "processSpellCheckForAll", () => {
        this.rootEditorElement && this.shouldRenderSpellCheck() && (console.log("Run processSpellCheckForAll"), this.sameDataChecking.setData(this.props.model), Fd.A.request({
          model: this.props.model,
          ignoreWords: this.getIgnoreWordArr(),
          action: "check"
        }, this.props.language, this.props.spellCheckSessionId).then(e => {
          if ("result" == e.status) {
            var t;
            if (!this.anchor) return void console.warn("there is no anchor yet");
            if (!this.sameDataChecking.isSame(this.props.model)) return;
            if ("all-result" != e.data.type) return;
            var r,
              n = (null === (t = e.data.editor) || void 0 === t ? void 0 : t.lines) || [];
            this.setLinesForState(n, this.linesToRenderLines(n));
          }
        }));
      });
    }
    componentWillUnmount() {
      this.didUmounted = !0, Fd.A.cancellAllRequests();
    }
    componentDidMount() {}
    getSpellCheckErrorWord() {
      return _d.getSpellCheckErrorWord(this.props.model, this.props.selected, this.state.spellCheckResult);
    }
    componentWillReceiveProps(e) {
      if (e.language != this.props.language) return this.setState({
        spellCheckResult: null
      }), void E.A.waitALitteWhile(this.processSpellCheckForAll);
      e.ignoreWords == this.props.ignoreWords && e.globalIgnoreWords == this.props.globalIgnoreWords ? e.model != this.props.model && (this.refreshPositionRunLater.cancel(), this.props.fixedContextHandler.getBatchUpdater().requestExtraCycle(() => {
        this.isUpdatingRectWithAnchor || this.updateRectWithAnchor(e.isOneLineChanged);
      }), e.isOneLineChanged ? this.refreshAllRunLater.later(this.updateSpellCheckOnVisibleView) : this.refreshAllRunLater.later(this.processSpellCheckForAll)) : E.A.waitALitteWhile(this.processSpellCheckForAll);
    }
    refreshSpellCheckAll() {
      this.refreshPositionRunLater.cancel(), this.refreshAllRunLater.later(this.processSpellCheckForAll);
    }
    refreshSpellCheckPosition() {
      this.refreshPositionRunLater.later(this.processSpellCheckPosition);
    }
    shouldComponentUpdate(e, t) {
      return t.spellCheckResult != this.state.spellCheckResult;
    }
    setRootEditorElement(e, t) {
      this.rootEditorElement = e, this.anchor = t, E.A.waitALitteWhile(this.processSpellCheckForAll);
    }
    getDocZoomContainer() {
      return this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer();
    }
    getIgnoreWordArr() {
      return "".concat(this.props.ignoreWords, "\n").concat(this.props.globalIgnoreWords || "").split(/[\r\n\t\s]/).map(e => e.trim()).filter(e => e);
    }
    requestSpellCheckOnLines(e) {
      if (this.anchor && this.shouldRenderSpellCheck()) {
        var t = e.map(e => ({
          index: e.lineIndex,
          line: e.line.reactInstance.getLineData()
        }));
        this.sameDataChecking.setData(this.props.model), Fd.A.request({
          request: {
            lines: t
          },
          ignoreWords: this.getIgnoreWordArr(),
          action: "check-multiple-lines"
        }, this.props.language, this.props.spellCheckSessionId).then(t => {
          if ("result" == t.status) {
            if (!this.sameDataChecking.isSame(this.props.model)) return;
            if ("lines-result" != t.data.type) return;
            var r = t.data.lines,
              n = this.state.spellCheckResult ? this.state.spellCheckResult.editor.lines : [],
              i = q.T.getBCRect(this.anchor, this.getDocZoomContainer()),
              o = Bd.mergeSpellCheckLines({
                lines: r,
                htmlEditor: this.rootEditorElement,
                rectAnchor: i,
                limitType: "line-index"
              }, n, e.map(e => e.lineIndex));
            this.setLinesForState("none", o);
          }
        });
      }
    }
    setLinesForState(e, t) {
      this.didUmounted || this.setState({
        spellCheckLines: e,
        spellCheckResult: {
          type: "all-result",
          editor: {
            key: "root",
            lines: t
          }
        }
      });
    }
    linesToRenderLines(e) {
      var t = q.T.getBCRect(this.anchor, this.getDocZoomContainer()),
        r;
      return Bd.processSpellCheckLines({
        lines: e,
        htmlEditor: this.rootEditorElement,
        rectAnchor: t,
        limitType: "line-index"
      });
    }
    renderSpellCheckEditor(e) {
      var t = e.lines.map(e => c().createElement(Nd, {
        key: e.lineIndex,
        line: e
      }));
      return c().createElement("g", {
        key: "root"
      }, t, ";");
    }
    renderSpellCheckingResult() {
      return c().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, this.renderSpellCheckEditor(this.state.spellCheckResult.editor));
    }
    shouldRenderSpellCheck() {
      return !!this.props.language && "none" != this.props.language;
    }
    render() {
      return this.anchor && this.shouldRenderSpellCheck() && this.state.spellCheckResult ? c().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          pointerEvents: "none"
        },
        className: "no-print role-spell-checker-container"
      }, this.renderSpellCheckingResult()) : c().createElement("div", null);
    }
  }
  class Vd {
    constructor() {
      (0, n.A)(this, "data", void 0);
    }
    setData(e) {
      this.data = e;
    }
    isSame(e) {
      return this.data == e;
    }
  }
  function Ud(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function qd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ud(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ud(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Gd extends sn {
    constructor(e, t) {
      super(e), (0, n.A)(this, "pageSettingsHdl", void 0), (0, n.A)(this, "spellCheckerRef", void 0), (0, n.A)(this, "lastUserSettings", void 0), (0, n.A)(this, "spellCheckSessionId", "ss-".concat(Math.random())), (0, n.A)(this, "handleSpellCheckLoadingEvent", (e, t) => {
        this.getTarget().props.onSpellCheckLoadingEvent && this.getTarget().props.onSpellCheckLoadingEvent(e, t);
      }), (0, n.A)(this, "handleRef", e => {
        this.spellCheckerRef = e, this.spellCheckerRef && E.A.waitABit(() => {
          var e,
            t = this.getTarget();
          null === (e = this.spellCheckerRef) || void 0 === e || e.setRootEditorElement(t.getEditorHtmlElement(), t.getMathTypeHtmlElement());
        });
      }), (0, n.A)(this, "handleRequestSpellCheckSuggestions", () => {
        if (this.spellCheckerRef && !this.deactivated) return new Promise((e, t) => {
          var r = this.spellCheckerRef.getSpellCheckErrorWord();
          if (console.log("word to lookup: ", r), r) {
            var n = this.getSpellCheckInfo();
            Fd.A.request({
              action: "suggestion",
              word: r.word
            }, n.language, this.spellCheckSessionId).then(t => {
              if ("result" == t.status) {
                if ("suggestions-result" != t.data.type) return;
                var n = t.data.words;
                e({
                  word: r.word,
                  suggestions: n,
                  selected: r.selected,
                  extendedSelected: r.extendedSelected
                });
              }
            }).catch(t);
          } else e(null);
        });
      }), this.pageSettingsHdl = t, Fd.A.loadingEvent = {
        onEvent: this.handleSpellCheckLoadingEvent
      };
    }
    getSpellCheckInfo() {
      return this.getTarget().getCurrentSpellCheckInfo();
    }
    updateWithUserSettings(e) {
      var t, r, n;
      if (this.lastUserSettings != e) {
        this.lastUserSettings = e;
        var i = this.getTarget(),
          o,
          s = i.getCurrentSpellCheckInfo().language;
        if ("string" != typeof s) {
          var a = null == e || null === (t = e.complexObject) || void 0 === t || null === (r = t.spellCheckInfo) || void 0 === r || null === (n = r.addedDics) || void 0 === n ? void 0 : n.find(e => e.id == s.id);
          if (a && a.ver != s.ver) {
            var l = this.pageSettingsHdl.getPageSettings(),
              c = qd(qd({}, l), {}, {
                spellCheck: qd(qd({}, l.spellCheck), {}, {
                  language: a
                })
              });
            i.onModelUpdateReady().then(() => {
              console.log("update spell check ps from user settings", c), this.pageSettingsHdl.updatePageSettingsWithChangeOnly(c, !1), i.requestSpellCheckLanguageChange();
            });
          }
        }
      }
    }
    retryLoadingSpellCheck() {
      Fd.A.retryLoadingSpellCheck(this.getTarget().getCurrentSpellCheckInfo().language), E.A.next(() => {
        this.refreshSpellCheckAll();
      }, 100);
    }
    refreshSpellCheckAll() {
      this.spellCheckerRef && !this.deactivated && this.spellCheckerRef.refreshSpellCheckAll();
    }
    refreshSpellCheckPosition() {
      this.spellCheckerRef && !this.deactivated && this.spellCheckerRef.refreshSpellCheckPosition();
    }
    render() {
      var e = this.getTarget();
      if (e.props.spellCheck) {
        var t = e.getCurrentSpellCheckInfo();
        return c().createElement(Wd, {
          spellCheckSessionId: this.spellCheckSessionId,
          fixedContextHandler: this.getTarget().getFixedContextHandler(),
          language: t.language,
          ignoreWords: t.ignoreWords,
          globalIgnoreWords: t.globalIgnoreWords,
          requestVisibleLines: e.requestVisibleLines,
          isOneLineChanged: e.checkIsOneLineChanged(),
          selected: e.getSafeSelected(),
          ref: this.handleRef,
          model: this.getState().mainModel
        });
      }
    }
  }
  class Kd extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "scrollContainer", void 0);
    }
    init() {
      var e = u.f$(this.getTarget().getMathTypeHtmlElement(), "container-layer");
      e.length <= 0 || (this.scrollContainer = e[0]);
    }
    requestVisibleLines() {
      return this.getRootHtmlLinesInView();
    }
    getRootHtmlLinesInView() {
      var e = S.A.findEditLines(this.getTarget().getEditorHtmlElement()),
        t = window.innerHeight,
        r = -100,
        n = t + 100;
      return e.map((e, t) => {
        var r;
        return {
          line: e,
          lineIndex: t,
          rect: S.A.getElementRect(e)
        };
      }).filter(e => !(e.rect.bottom < r || e.rect.top > n));
    }
    cleanUp() {
      this.scrollContainer && (this.scrollContainer = null);
    }
  }
  var Zd = r(55719);
  function Yd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Qd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Yd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Jd extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        shortcutInfo: this.props.shortcutInfo
      }), (0, n.A)(this, "inputElement", void 0), (0, n.A)(this, "handleReactTextChange", e => {
        var t = e.currentTarget.value,
          r = {
            type: "char-sequence",
            sequence: t
          };
        this.changeShortcut(r, this.validateCharSequenceValue(t)), e.stopPropagation(), e.preventDefault();
      }), (0, n.A)(this, "handleKeyDown", e => {
        var t = ji.A.detect(e);
        if (this.anyControlKeyNotShift(t)) return this.handleHotkeyInput(t), e.stopPropagation(), void e.preventDefault();
        if (this.state.shortcutInfo && "hot-key" == this.state.shortcutInfo.type) {
          var r = String.fromCharCode(e.keyCode);
          return 65 <= e.keyCode && e.keyCode <= 90 || (r = ""), t.shift || (r = r.toLowerCase()), this.changeShortcut({
            type: "char-sequence",
            sequence: r.trim()
          }, "At least two characters"), e.stopPropagation(), void e.preventDefault();
        }
      });
    }
    getShortcutInfo() {
      return this.state.shortcutInfo;
    }
    isError() {
      return this.state.error;
    }
    render() {
      var e = Qd(Qd({}, this.props.style), {}, {
          border: this.state.error ? "1px solid #bb0505" : "1px solid var(--ui-border, lightgray)",
          color: "var(--ui-text, black)"
        }),
        t = Zd.A.getText(this.state.shortcutInfo);
      return hl.A.wrapInput(c().createElement("input", {
        onChange: this.handleReactTextChange,
        style: e,
        ref: e => this.inputElement = e,
        value: t
      }));
    }
    validateCharSequenceValue(e) {
      var t;
      return xe.Ay.length(e) <= 1 ? "At least two characters" : /[\[\]\(\)\{\}]/.test(e) ? "()[]{} it not allowed" : void 0;
    }
    anyControlKeyNotShift(e) {
      return e.control || e.meta || e.optionOrAlt;
    }
    changeShortcut(e, t) {
      this.setState({
        shortcutInfo: e,
        error: t
      }), this.props.onShortcutChange(e, t);
    }
    handleHotkeyInput(e) {
      if (e.modifierOnly) this.changeShortcut(Qd(Qd({}, e), {}, {
        type: "hot-key"
      }), "Character required");else {
        var t, r;
        if ("hot-key" == this.state.shortcutInfo.type && !this.state.shortcutInfo.modifierOnly && Zd.A.constructModifierHashForShorctut(this.state.shortcutInfo) == Zd.A.constructModifierHashForShorctut(Qd({
          type: "hot-key"
        }, e))) return void this.changeShortcut(Qd(Qd({}, this.state.shortcutInfo), {}, {
          secondKeyCode: e.keyCode
        }), null);
        this.changeShortcut(Qd(Qd({}, e), {}, {
          type: "hot-key"
        }), null);
      }
    }
    componentDidMount() {
      this.inputElement.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
      this.inputElement.removeEventListener("keydown", this.handleKeyDown);
    }
  }
  var Xd = r(63241);
  class $d {
    constructor() {
      (0, n.A)(this, "textModeRootModel", {
        id: "1",
        lines: [{
          id: "1",
          blocks: []
        }],
        pageSettings: {
          fontSize: 14,
          mathFontSize: 15
        }
      }), (0, n.A)(this, "mathModeRootModel", {
        id: "1",
        lines: [{
          id: "l1",
          blocks: [{
            id: "b1",
            type: "composite",
            text: "\\math-container",
            elements: {
              mathValue: {
                id: "1",
                lines: [{
                  id: "1",
                  blocks: []
                }]
              }
            }
          }]
        }],
        pageSettings: {
          fontSize: 14,
          mathFontSize: 15
        }
      });
    }
    wrapTextModeModel(e) {
      var t;
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (this.textModeRootModel = f().cloneDeep(this.textModeRootModel)), this.textModeRootModel.lines[0] = e, this.textModeRootModel;
    }
    wrapMathModeModel(e) {
      var t;
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (this.mathModeRootModel = f().cloneDeep(this.mathModeRootModel)), this.mathModeRootModel.lines[0].blocks[0].elements.mathValue.lines[0] = e, this.mathModeRootModel;
    }
    extractTextModelLine(e) {
      var t = e.lines[0];
      return t && 0 == t.blocks.length && (t = void 0), t;
    }
    extractMathModelLine(e) {
      var t = e.lines[0].blocks[0].elements.mathValue.lines[0];
      return t && 0 == t.blocks.length && (t = void 0), t;
    }
  }
  class eh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        lineModel: this.props.lineModel
      }), (0, n.A)(this, "rootEditorWrapper", new $d()), (0, n.A)(this, "textMathType", void 0), (0, n.A)(this, "mathMathType", void 0);
    }
    getModelLine() {
      return "math" === this.props.mode ? this.rootEditorWrapper.extractMathModelLine(this.mathMathType.getModel()) : this.rootEditorWrapper.extractTextModelLine(this.textMathType.getModel());
    }
    updateModelLine(e) {
      if ("math" === this.props.mode) this.rootEditorWrapper.wrapMathModeModel(this.getLineOrEmpty(e), !0), this.setState({
        lineModel: e
      });else this.rootEditorWrapper.wrapTextModeModel(this.getLineOrEmpty(e), !0), this.setState({
        lineModel: e
      });
    }
    render() {
      var e = this.props,
        t = e.mode,
        r = e.MathTypeClss,
        n = e.mtStyle,
        i = this.state.lineModel;
      return "math" == t ? c().createElement(r, {
        className: "ui-math-input",
        requestRenderToolbar: this.props.requestRenderToolbar,
        toolbarEnabled: !!this.props.requestRenderToolbar,
        toolbarBasic: !0,
        toolbarStyle: {},
        toolbarExportOptionsHide: !0,
        settings: this.props.mtSettings,
        ref: e => {
          this.mathMathType = e;
        },
        cursorHiddenOnLostFocus: !0,
        autoCompleteUsingPositionFixed: !0,
        restrictedView: !0,
        oneMode: "math-mode",
        multiline: !1,
        preventFocusOnCreated: !0,
        model: this.rootEditorWrapper.wrapMathModeModel(this.getLineOrEmpty(i)),
        mathModeAdditionalSymbolSupports: ["\\cursor-placement"],
        style: n
      }) : c().createElement(r, {
        className: "ui-math-input",
        requestRenderToolbar: this.props.requestRenderToolbar,
        toolbarEnabled: !!this.props.requestRenderToolbar,
        toolbarExportOptionsHide: !0,
        toolbarBasic: !0,
        toolbarStyle: {},
        settings: this.props.mtSettings,
        ref: e => {
          this.textMathType = e;
        },
        cursorHiddenOnLostFocus: !0,
        autoCompleteUsingPositionFixed: !0,
        restrictedView: !0,
        model: this.rootEditorWrapper.wrapTextModeModel(this.getLineOrEmpty(i)),
        multiline: !1,
        preventFocusOnCreated: !0,
        rootSymbolSupports: ["\\cursor-placement", "\\inline-math", "\\$", "\\mathcha", "\\checkbox", "\\sub-script", "\\super-script"],
        mathModeAdditionalSymbolSupports: ["\\cursor-placement"],
        style: n
      });
    }
    getLineOrEmpty(e) {
      return e || {
        id: "l1",
        blocks: []
      };
    }
  }
  var th = {
    height: 34,
    background: "var(--ui-surface-muted, #f7f7f7)"
  };
  class rh extends c().Component {
    constructor(e) {
      super(e), this.state = {
        element: c().createElement("div", {
          style: th
        })
      };
    }
    shouldComponentUpdate(e, t) {
      return this.state != t || e.hide != this.props.hide;
    }
    updateElement(e) {
      this.setState({
        element: e
      });
    }
    render() {
      return c().createElement("div", {
        className: "role-toolbar-wrapper",
        style: {
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          borderBottom: "1px solid var(--ui-border, rgb(221, 221, 221))",
          height: 33
        }
      }, this.state.element);
    }
  }
  class nh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "mt", void 0), (0, n.A)(this, "fakeToolbarRef", void 0), (0, n.A)(this, "handleRequestRenderToolbar", e => {
        E.A.next(() => {
          this.fakeToolbarRef && this.fakeToolbarRef.updateElement(e);
        });
      }), (0, n.A)(this, "handleFakeToolbarRef", e => {
        this.fakeToolbarRef = e;
      });
    }
    renderInput() {
      return c().createElement(eh, {
        requestRenderToolbar: this.handleRequestRenderToolbar,
        mtSettings: this.props.mtSettings,
        MathTypeClss: this.props.MathTypeClss,
        lineModel: this.props.lineModel,
        mode: this.props.mode,
        ref: e => this.mt = e,
        mtStyle: {
          minWidth: 200,
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, #9c9c9c)"
        }
      });
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Edit shortcut content",
        size: "large",
        scroll: "body",
        className: "big-view-edit-container",
        style: {
          width: 650,
          maxWidth: "95vw"
        },
        noLabel: "Cancel",
        okLabel: "OK",
        message: "",
        isProgressing: !1,
        onOk: () => {
          this.props.onClose(this.mt.getModelLine());
        },
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        okStyle: {
          width: 90
        },
        cancelStyle: {
          width: 90
        },
        isOkDisabled: !1,
        show: !0,
        btnLarge: !0,
        disableEscapeToClose: !0
      }, c().createElement("div", {
        style: {
          flex: 1,
          maxHeight: "80vh",
          minHeight: 250,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 20,
          position: "relative",
          padding: 40,
          paddingTop: 90,
          background: "var(--ui-surface-active, lightgray)",
          overflow: "auto"
        }
      }, c().createElement("div", null, c().createElement(rh, {
        ref: this.handleFakeToolbarRef
      })), this.renderInput())));
    }
  }
  function ih(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function oh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ih(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ih(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class sh extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "textMathType", void 0), (0, n.A)(this, "mathMathType", void 0), (0, n.A)(this, "shortcutInput", void 0), (0, n.A)(this, "matcher", new Xd.p()), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleShorcutChange", (e, t) => {
        this.setState({
          errorMessage: t
        }), t || this.checkDuplication(e);
      }), (0, n.A)(this, "handleOk", () => {
        this.isError() || this.props.onChangeOk(this.getShortcutModel());
      }), this.matcher.setShortcutModels(this.props.allShortcutModels);
    }
    componentWillReceiveProps(e) {
      this.matcher.setShortcutModels(e.allShortcutModels);
    }
    checkDuplication(e) {
      var t;
      this.matcher.isShorcutDuplicate(oh(oh({}, this.props.shortcutData), {}, {
        shortcut: e
      })) && this.setState({
        errorMessage: "Duplicate Shortcut"
      });
    }
    render() {
      var e = this.props.shortcutData,
        t = {
          width: 20,
          height: 20,
          verticalAlign: "-6px",
          paddingLeft: 4,
          fill: "var(--ui-text-muted, gray)",
          display: "inline-block",
          cursor: "pointer"
        };
      return c().createElement("div", {
        className: "test-shortcut-input-row",
        style: {
          padding: "10px 5px 5px 10px",
          fontSize: 14,
          borderTop: "1px solid var(--ui-border, lightgray)",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface-muted, whitesmoke)"
        }
      }, c().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, c().createElement("span", {
        style: {
          display: "inline-block",
          width: 170,
          paddingRight: 10,
          color: "var(--ui-text, black)"
        }
      }, c().createElement(Jd, {
        style: {
          height: 21,
          width: 170
        },
        onShortcutChange: this.handleShorcutChange,
        shortcutInfo: e.shortcut,
        ref: e => this.shortcutInput = e
      })), c().createElement("span", {
        style: {
          position: "relative",
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          marginLeft: 23
        }
      }, c().createElement("span", {
        className: "scroll-without-scrollbar",
        style: {
          display: "inline-block",
          overflowX: "auto"
        }
      }, c().createElement(eh, {
        mtSettings: this.props.mtSettings,
        lineModel: e.textModeLine,
        MathTypeClss: this.props.MathTypeClss,
        ref: e => this.textMathType = e,
        mode: "text",
        mtStyle: {
          width: 130,
          padding: "5px 2px"
        }
      })), c().createElement("span", {
        style: {},
        className: "bigger-view-icon",
        onClick: () => {
          this.setState({
            biggerView: {
              line: this.textMathType.getModelLine(),
              mode: "text"
            }
          });
        }
      }, Zi.A.fullScreen(t))), c().createElement("span", {
        style: {
          position: "relative",
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          marginLeft: 25
        }
      }, c().createElement("span", {
        className: "scroll-without-scrollbar",
        style: {
          display: "inline-block",
          overflowX: "auto"
        }
      }, c().createElement(eh, {
        mtSettings: this.props.mtSettings,
        lineModel: e.mathModeLine,
        MathTypeClss: this.props.MathTypeClss,
        ref: e => this.mathMathType = e,
        mode: "math",
        mtStyle: {
          width: 130,
          padding: "5px 2px"
        }
      })), c().createElement("span", {
        style: {},
        className: "bigger-view-icon",
        onClick: () => {
          this.setState({
            biggerView: {
              line: this.mathMathType.getModelLine(),
              mode: "math"
            }
          });
        }
      }, Zi.A.fullScreen(t))), this.renderActions()), this.renderErrorMessage(), this.renderBiggerView());
    }
    renderBiggerView() {
      if (this.state.biggerView) {
        var e = this.state.biggerView;
        return c().createElement(nh, {
          mtSettings: this.props.mtSettings,
          MathTypeClss: this.props.MathTypeClss,
          lineModel: e.line,
          mode: e.mode,
          onClose: e => {
            e && ("math" == this.state.biggerView.mode ? this.mathMathType.updateModelLine(e) : this.textMathType.updateModelLine(e)), this.setState({
              biggerView: void 0
            });
          }
        });
      }
    }
    renderErrorMessage() {
      return this.state.errorMessage ? c().createElement("span", {
        style: {
          color: "var(--ui-danger, #ce0303)",
          fontSize: 12
        }
      }, this.state.errorMessage) : c().createElement("span", {
        style: {
          color: "var(--ui-danger, #ce0303)",
          fontSize: 12,
          visibility: "hidden"
        }
      }, "A");
    }
    isError() {
      return this.shortcutInput.isError() || this.state.errorMessage;
    }
    getShortcutModel() {
      var e = this.textMathType.getModelLine(),
        t = this.mathMathType.getModelLine(),
        r;
      return oh(oh({}, this.props.shortcutData), {}, {
        textModeLine: e,
        mathModeLine: t,
        shortcut: this.shortcutInput.getShortcutInfo()
      });
    }
    renderActions() {
      return [c().createElement("span", {
        key: "1",
        style: {
          fontSize: "1.1em",
          display: "inline-block",
          padding: "2px 5px",
          cursor: "pointer",
          color: "green",
          marginLeft: 19
        },
        onClick: this.handleOk
      }, c().createElement("i", {
        className: "fa fa-check"
      })), c().createElement("span", {
        key: "2",
        style: {
          fontSize: "1.1em",
          display: "inline-block",
          padding: "2px 2px",
          cursor: "pointer",
          color: "var(--ui-danger, #ce0303)",
          marginLeft: 13
        },
        onClick: this.props.onCancel
      }, c().createElement("i", {
        className: "fa fa-times"
      }))];
    }
  }
  var ah = r(54084);
  class lh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        hover: !1
      }), (0, n.A)(this, "rootEditorWrapper", new $d()), (0, n.A)(this, "handleMouseEnter", () => {
        this.setState({
          hover: !0
        });
      }), (0, n.A)(this, "handleMouseLeave", () => {
        this.setState({
          hover: !1
        });
      });
    }
    renderActions() {
      return c().createElement("div", {
        style: {
          fontSize: "1.1em"
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, c().createElement("span", {
        key: "1",
        style: {
          display: "inline-block",
          padding: "2px 5px",
          cursor: "pointer"
        },
        onClick: this.props.onRequestEdit
      }, c().createElement("i", {
        className: "fa fa-edit"
      })), c().createElement("span", {
        key: "2",
        style: {
          display: "inline-block",
          padding: "2px 2px",
          cursor: "pointer",
          color: "var(--ui-danger, #ce0303)",
          marginLeft: 13
        },
        onClick: this.props.onRequestDelete
      }, c().createElement("i", {
        className: "fa fa-trash"
      })));
    }
    getLineOrEmpty(e) {
      return e || {
        id: "l1",
        blocks: []
      };
    }
    renderTextModeMathType() {
      var e = this.props.shortcutData;
      if (!e.textModeLine || 0 == e.textModeLine.blocks.length) return c().createElement("span", {
        style: {
          color: "var(--ui-text-disabled, lightgray)"
        }
      }, "None");
      var t = this.props.MathTypeClss;
      return c().createElement(t, {
        className: "ui-math-input",
        restrictedView: !0,
        readOnly: !0,
        model: this.rootEditorWrapper.wrapTextModeModel(this.getLineOrEmpty(e.textModeLine)),
        multiline: !1,
        preventFocusOnCreated: !0,
        style: {
          width: 150,
          padding: "0px 2px",
          border: "1px none lightgray",
          cursor: "default",
          overflow: "hidden"
        }
      });
    }
    renderMathModeMathType() {
      var e = this.props.shortcutData;
      if (!e.mathModeLine || 0 == e.mathModeLine.blocks.length) return c().createElement("span", {
        style: {
          color: "var(--ui-text-disabled, lightgray)"
        }
      }, "None");
      var t = this.props.MathTypeClss;
      return c().createElement(t, {
        className: "ui-math-input",
        readOnly: !0,
        restrictedView: !0,
        oneMode: "math-mode",
        multiline: !1,
        preventFocusOnCreated: !0,
        model: this.rootEditorWrapper.wrapMathModeModel(this.getLineOrEmpty(e.mathModeLine)),
        style: {
          width: 150,
          padding: "0px 2px",
          border: "1px none lightgray",
          cursor: "default",
          overflow: "hidden"
        }
      });
    }
    toHtml(e) {
      if ("char-sequence" == e.type) return Zd.A.getText(e);
      var t = [],
        r = ah.u[e.keyCode] || "none";
      if (e.meta && (Xe.A.isMac() ? t.push(c().createElement("span", {
        style: ch,
        key: "Meta"
      }, "Cmd")) : t.push(c().createElement("span", {
        style: ch,
        key: "Meta"
      }, "Win"))), e.control && t.push(c().createElement("span", {
        style: ch,
        key: "Ctrl"
      }, "Ctrl")), e.optionOrAlt && t.push(c().createElement("span", {
        style: ch,
        key: "Alt"
      }, "Alt")), e.shift && t.push(c().createElement("span", {
        style: ch,
        key: "Shift"
      }, "Shift")), e.modifierOnly || t.push(c().createElement("span", {
        style: ch,
        key: "KeyCode"
      }, r.toUpperCase())), e.secondKeyCode) {
        var n = ah.u[e.secondKeyCode] || "none";
        t.push(c().createElement("span", {
          style: ch,
          key: "SecondKeyCode"
        }, n.toUpperCase()));
      }
      return t;
    }
    render() {
      var e = this.props.shortcutData;
      return c().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          padding: "5px 5px 5px 10px",
          fontSize: 14,
          background: this.state.hover ? "var(--ui-surface-hover, #f1f1f1)" : void 0,
          borderBottom: "1px solid var(--ui-border, lightgray)"
        }
      }, c().createElement("span", {
        style: {
          display: "inline-block",
          width: 190,
          paddingLeft: 5,
          paddingRight: 5,
          color: "var(--ui-text, black)"
        }
      }, c().createElement("span", null, this.toHtml(e.shortcut))), c().createElement("span", {
        style: {
          display: "inline-block",
          width: 170,
          paddingLeft: 5,
          paddingRight: 5
        }
      }, this.renderTextModeMathType()), c().createElement("span", {
        style: {
          display: "inline-block",
          width: 170,
          paddingLeft: 5,
          paddingRight: 5
        }
      }, this.renderMathModeMathType()), this.renderActions());
    }
  }
  var ch = {
    display: "inline-block",
    border: "1px solid var(--ui-border, lightgray)",
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 13,
    boxShadow: "1px 1px 1px -1px var(--ui-shadow, #4c4949)",
    marginRight: 3
  };
  function dh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function hh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ph extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        shortcuts: this.props.shortcuts
      }), (0, n.A)(this, "start", new Date().getTime()), (0, n.A)(this, "currentEditingRowRef", void 0), (0, n.A)(this, "rowContainerRef", void 0), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "handleChangeOk", (e, t) => {
        this.setState({
          shortcuts: dt.A.replaceArrayByEntity(this.state.shortcuts, e),
          selectedEditId: null
        }, t);
      }), (0, n.A)(this, "handleAddNewShortcut", () => {
        var e = "s" + Math.random();
        this.setState({
          selectedEditId: e,
          shortcuts: [{
            id: e,
            shortcut: {
              type: "char-sequence",
              sequence: this.getRandomSequence()
            },
            textModeLine: {
              id: "l1",
              blocks: [{
                id: "b1",
                text: "↕"
              }]
            },
            mathModeLine: {
              id: "l1",
              blocks: [{
                id: "b1",
                text: "↕"
              }]
            }
          }].concat(this.state.shortcuts)
        }), E.A.waitABit(() => {
          this.rowContainerRef && u.m7(this.rowContainerRef, {
            scrollTop: 0
          });
        });
      }), (0, n.A)(this, "handleOk", () => {
        if (this.currentEditingRowRef) {
          if (this.currentEditingRowRef.isError()) return;
          this.handleChangeOk(this.currentEditingRowRef.getShortcutModel(), () => {
            this.handleSave();
          });
        } else this.handleSave();
      });
    }
    componentWillMount() {
      this.start = new Date().getTime();
    }
    componentDidMount() {
      console.log("take: ", new Date().getTime() - this.start);
    }
    handleRequestEdit(e) {
      this.setState({
        selectedEditId: e.id
      });
    }
    handleRequestDelete(e) {
      var t = this.state.shortcuts.filter(t => t.id != e.id);
      this.setState({
        shortcuts: t
      });
    }
    handleCancel() {
      this.setState({
        selectedEditId: null
      });
    }
    getRandomSequence() {
      return Xe.A.isTestEnv() ? "sc 123" : "sc " + Math.floor(1e3 * Math.random());
    }
    renderRow(e) {
      return this.state.selectedEditId == e.id ? c().createElement(sh, {
        mtSettings: this.props.mtSettings,
        MathTypeClss: this.props.MathTypeClss,
        allShortcutModels: this.state.shortcuts,
        key: e.id,
        ref: e => this.currentEditingRowRef = e,
        onChangeOk: this.handleChangeOk,
        onCancel: () => this.handleCancel(),
        shortcutData: e
      }) : c().createElement(lh, {
        key: e.id,
        MathTypeClss: this.props.MathTypeClss,
        onRequestEdit: () => this.handleRequestEdit(e),
        onRequestDelete: () => this.handleRequestDelete(e),
        shortcutData: e
      });
    }
    renderHeader() {
      return c().createElement("div", {
        style: {
          padding: "10px 5px",
          fontSize: 14,
          fontWeight: "bold"
        }
      }, c().createElement("span", {
        style: {
          display: "inline-block",
          width: 190,
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "Shortcut"), c().createElement("span", {
        style: {
          display: "inline-block",
          width: 170,
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "Text Mode"), c().createElement("span", {
        style: {
          display: "inline-block",
          width: 170,
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "Math Mode"), c().createElement("button", {
        onClick: this.handleAddNewShortcut,
        className: "btn-normal btn-large",
        style: {
          padding: "0px 13px",
          display: "inline-block",
          fontSize: 13
        }
      }, "Add ", c().createElement("i", {
        className: "fa fa-plus",
        style: {
          color: "green",
          verticalAlign: "-1px"
        }
      })));
    }
    handleSave() {
      this.setState({
        isSaving: !0
      }), this.props.onSave(this.state.shortcuts).then(() => {
        this.props.onClose();
      }).catch(() => {
        this.setState({
          isSaving: !1,
          saveError: "Could not save, please check Internet Connection, or Login to save"
        });
      });
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        size: "large",
        scroll: "body",
        style: hh({
          width: 650,
          maxWidth: "95vw",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, Zr.A.getCenterStyle()),
        headerHidden: !1,
        noLabel: "Cancel",
        okLabel: "Save",
        message: this.state.saveError,
        isProgressing: this.state.isSaving,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        isOkDisabled: this.state.isSaving,
        show: !0,
        btnLarge: !0,
        disableEscapeToClose: !0,
        title: "Shortcut Manager"
      }, c().createElement("div", {
        style: {
          flex: 1,
          maxHeight: "80vh",
          minHeight: 250,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 20,
          position: "relative"
        }
      }, this.renderHeader(), c().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, lightgray)",
          marginBottom: 5
        }
      }), c().createElement("div", {
        style: {
          overflow: "auto"
        },
        ref: e => this.rowContainerRef = e
      }, this.state.shortcuts.map(e => this.renderRow(e))), c().createElement("div", {
        style: {
          fontSize: "0.9em",
          color: "#4CAF50",
          position: "absolute",
          left: 5,
          bottom: 1
        }
      }, "* Use ", c().createElement("b", null, "\\cursor-placement"), " to specify cursor position"))));
    }
  }
  class uh extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "shortcutMatcher", new Xd.p()), (0, n.A)(this, "handleSaveShortcuts", e => this.getTarget().raiseShortcutSettingsChange(e)), (0, n.A)(this, "handleClose", () => {
        this.getTarget().closeRender(this);
      });
    }
    render() {
      return c().createElement(ph, {
        mtSettings: this.getTarget().getMathTypeSettings(),
        MathTypeClss: this.getTarget().getMathTypeClss(),
        onSave: this.handleSaveShortcuts,
        shortcuts: this.getShortcuts(),
        onClose: this.handleClose
      });
    }
    getShortcuts(e) {
      return (e = e || this.getTarget().getMathTypeSettings()).complexObject && e.complexObject.inputShortcuts ? e.complexObject.inputShortcuts : Dt.A.emptyArr;
    }
    updateSingleShortcutService(e) {
      this.shortcutMatcher.setShortcutModels(this.getShortcuts(e));
    }
    getShortcutMatcher() {
      return this.shortcutMatcher;
    }
    showShortcutManager() {
      this.getTarget().requestRender(this);
    }
  }
  var gh = r(8583);
  function mh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function fh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? mh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class yh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectBoxItems", this.buildSelectBoxItems()), (0, n.A)(this, "handleNameChange", e => {
        var t = fh(fh({}, this.props.caption), {}, {
          name: e
        });
        this.props.onCaptionChange(t);
      }), (0, n.A)(this, "handleNumberingOn", e => {
        var t = fh(fh({}, this.props.caption), {}, {
          numeringType: e
        });
        this.props.onCaptionChange(t);
      }), (0, n.A)(this, "handleTextStyleChange", e => {
        var t = fh(fh({}, this.props.caption), {}, {
          textStyle: e
        });
        this.props.onCaptionChange(t);
      });
    }
    render() {
      var e = this.props,
        t = e.caption,
        r = e.title,
        n = e.zIndex;
      return c().createElement("form", {
        style: {
          marginBottom: 10,
          fontSize: 13
        }
      }, c().createElement("fieldset", {
        style: {
          border: "1px solid var(--ui-border, lightgray)",
          padding: 10
        }
      }, c().createElement("legend", null, r), c().createElement("div", null, c().createElement("span", {
        style: {
          width: 70,
          display: "inline-block"
        }
      }, " Prefix:"), c().createElement("input", {
        style: {
          marginRight: 10,
          fontSize: 13
        },
        value: t.name,
        onChange: e => this.handleNameChange(e.currentTarget.value)
      }), c().createElement("span", {
        style: {
          marginRight: 10,
          width: 100,
          display: "inline-block"
        }
      }, "Numbering on: "), c().createElement(Fo.A, {
        width: 150,
        style: {
          display: "inline-block",
          color: "var(--ui-text, black)",
          fontSize: 13
        },
        data: this.selectBoxItems,
        value: t.numeringType || "default",
        onChange: e => this.handleNumberingOn(e)
      })), c().createElement("div", {
        style: {
          marginTop: 5
        }
      }, c().createElement("span", {
        style: {
          width: 70,
          display: "inline-block"
        }
      }, " Style:"), c().createElement(ul.G, {
        requestPickerSettings: this.props.requestPickerSettings,
        isFontNameHidden: !0,
        isFontSizeHidden: !0,
        requestFontSizeRatio: () => 1,
        fontBaseSize: 17,
        expandZIndex: n,
        isFontBgColorHidden: !0,
        hBarStyle: {
          marginBottom: 0
        },
        containerStyle: {
          width: 399,
          display: "inline-flex",
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          padding: "3px 10px 5px 10px",
          flex: 1
        },
        blockStyle: t.textStyle || gh.c.defaultPsStyle,
        onBlockStyleChange: e => {
          this.handleTextStyleChange(e);
        },
        onClear: () => {
          this.handleTextStyleChange({});
        }
      }))));
    }
    buildSelectBoxItems() {
      var e = [{
          key: "default",
          value: "Default"
        }, {
          key: "section",
          value: "Section Level 1"
        }, {
          key: "subsection",
          value: "Section Level 2"
        }, {
          key: "subsubsection",
          value: "Section Level 3"
        }, {
          key: "section-rs",
          value: "Section Level 1 (Reset)"
        }, {
          key: "subsection-rs",
          value: "Section Level 2 (Reset)"
        }, {
          key: "subsubsection-rs",
          value: "Section Level 3 (Reset)"
        }],
        t = [];
      switch (this.props.captionType) {
        case "diagram":
          t = [{
            key: "sw-table",
            value: "Share with Table"
          }, {
            key: "sw-image",
            value: "Share with Image"
          }];
          break;
        case "image":
          t = [{
            key: "sw-table",
            value: "Share with Table"
          }, {
            key: "sw-diagram",
            value: "Share with Diagram"
          }];
          break;
        case "table":
          t = [{
            key: "sw-image",
            value: "Share with Image"
          }, {
            key: "sw-diagram",
            value: "Share with Diagram"
          }];
      }
      return e.concat(t);
    }
  }
  function vh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var xh = Zr.A.getModalDialog();
  class Ch extends c().Component {
    constructor(e) {
      super(e), this.state = {
        imageCaption: this.props.info.image,
        tableCaption: this.props.info.table,
        diagramCaption: this.props.info.diagram
      };
    }
    renderCaptionSettings(e, t, r, n) {
      return c().createElement(yh, {
        requestPickerSettings: this.props.requestPickerSettings,
        captionType: e,
        title: t,
        zIndex: n,
        caption: this.state[r],
        onCaptionChange: e => {
          var t = {
            [r]: e
          };
          this.setState(t);
        }
      });
    }
    renderContent() {
      return c().createElement("div", {
        style: {
          padding: 10
        }
      }, this.renderCaptionSettings("image", "Image", "imageCaption", 3), this.renderCaptionSettings("table", "Table", "tableCaption", 2), this.renderCaptionSettings("diagram", "Diagram/Drawing", "diagramCaption", 1), c().createElement("div", {
        style: {
          paddingTop: 10,
          color: "orange"
        }
      }, "*Note: Prefix apply for all captions of tables/images/drawings"));
    }
    render() {
      return c().createElement(xh, {
        show: !0
      }, c().createElement(zo.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Page Captions",
        style: bh({
          width: 550,
          maxWidth: "95vw",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, Zr.A.getCenterStyle()),
        noLabel: "Cancel",
        okLabel: "OK",
        message: "",
        isProgressing: !1,
        onOk: () => this.props.onOk({
          image: this.state.imageCaption,
          table: this.state.tableCaption,
          diagram: this.state.diagramCaption
        }),
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        isOkDisabled: !1,
        show: !0
      }, c().createElement("div", {
        style: {
          flex: 1,
          overflow: "visible",
          minHeight: 170,
          position: "relative"
        }
      }, this.renderContent())));
    }
  }
  class Sh {
    select(e, t) {
      var r = [];
      return u.YG(e, ".role-".concat(t, "-caption-container")).forEach((e, n) => {
        var i = u.YG(e, ">span>span.role-".concat(t, "-caption-prefix")),
          o = u.yR(u.YG(e, ">span>.".concat(t, "-caption>line")).slice(0, 1));
        o.length > 50 && (o = o.substr(0, 47) + "..."), r.push({
          id: u.vK(e, "data-caption-block-id"),
          prefix: u.yR(i),
          text: o
        });
      }), r;
    }
  }
  const Ah = new Sh();
  function wh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Eh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var kh = Zr.A.getModalDialog();
  class Oh extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleCommit", e => {
        this.props.onSelect(e.item.id, this.props.refType);
      }), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      });
      var t = this.buildGroups();
      this.state = {
        groups: t,
        selectedItem: {
          group: t[0],
          item: f().last(t[0].items)
        }
      };
    }
    buildGroups() {
      var e;
      return [{
        name: "root",
        items: Ah.select(this.props.requestRootEditor(), this.props.refType)
      }];
    }
    renderItemSelect() {
      return this.state.groups[0].items.length <= 0 ? c().createElement("div", {
        style: {
          padding: 10,
          fontSize: 14,
          textAlign: "center"
        }
      }, "There is no caption to select") : c().createElement(Ha.A, {
        mainStyle: {
          paddingBottom: 0
        },
        itemContainerStyle: {
          width: "100%",
          border: "1px solid transparent"
        },
        itemContainerStyleSelected: {
          width: "100%",
          background: "var(--ui-selection, rgb(227, 253, 225))",
          border: "1px dotted var(--ui-border, gray)"
        },
        groups: this.state.groups,
        scrollToSelectedOnOpen: !0,
        preventHover: !0,
        numberOfItemsPerLine: 1,
        renderGroupName: () => null,
        renderItem: (e, t, r) => c().createElement("div", {
          style: {
            padding: 5,
            cursor: "pointer"
          }
        }, c().createElement("span", {
          style: {
            fontWeight: "bold",
            paddingRight: "0.3em"
          }
        }, e.prefix), c().createElement("span", null, e.text)),
        selected: this.state.selectedItem,
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit
      });
    }
    render() {
      return c().createElement(kh, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Select caption",
        size: "medium",
        scroll: "body",
        headerHidden: !0,
        style: Eh({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 400,
          maxHeight: 250
        }, Zr.A.getCenterStyle()),
        backDrop: !0,
        onCancel: this.props.onClose,
        onClose: this.props.onClose,
        showOk: !1,
        show: !0
      }, c().createElement("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          fontSize: 13
        },
        className: "caption-ref-select"
      }, this.renderItemSelect())));
    }
  }
  var Dh = r(64777);
  class Ph {
    buildPrefix(e, t, r, n) {
      return "default" == r ? this.buildPrefixNumber(t, e, n) : this.buildPrefixNumberForSection(r, t, e, n);
    }
    buildPrefixNumber(e, t, r) {
      var n = {},
        i = 0,
        o = this.buildSelector(e);
      return u.YG(t, o).forEach((e, t) => {
        var o = e.reactInstance;
        o && (i = this.handleStep(r, o, n, i, ""));
      }), n;
    }
    buildSelector(e) {
      return e.map(e => ".role-".concat(e, "-caption-container")).join(",");
    }
    resolveDisplay(e, t) {
      return e.split("${count}").join(t.toString());
    }
    buildPrefixNumberForSection(e, t, r, n) {
      var i = n.pageSection || {},
        o = {},
        s = S.A.findEditLines(r),
        a = 0,
        l = this.buildSelector(t),
        c = "",
        d = "",
        h = "";
      return u.YG(r, l).forEach((t, r) => {
        var l = t.reactInstance;
        if (l) {
          var p = u.f$(t, "line.root")[0],
            g = "0.";
          "section" == e ? g = Tl.A.buildPrefix(p, s, 1, i) || "0." : "subsection" == e ? g = Tl.A.buildPrefix(p, s, 2, i) || "0.0." : "subsubsection" == e ? g = Tl.A.buildPrefix(p, s, 3, i) || "0.0.0." : "section-rs" == e ? (g = Tl.A.buildPrefix(p, s, 1, i) || "0.", c != g && (a = 0, c = g)) : "subsection-rs" == e ? (g = Tl.A.buildPrefix(p, s, 2, i) || "0.0.", d != g && (a = 0, d = g)) : "subsubsection-rs" == e && (g = Tl.A.buildPrefix(p, s, 3, i) || "0.0.0.", h != g && (a = 0, h = g)), a = this.handleStep(n, l, o, a, g);
        }
      }), o;
    }
    handleStep(e, t, r, n, i) {
      var o = t.getInfo(),
        s = (0, Wt.A)(o, 3),
        a = s[0],
        l = s[1],
        c = s[2],
        d = gh.c.captionModelFromType(e, c);
      a && a.resetAtNumber && (n = a.resetAtNumber - 1);
      var h = {
        type: "missing"
      };
      return a && a.display && "auto" != a.display ? Dt.A.isObj(a.display) && (h = {
        type: "custom",
        prefixResolved: this.resolveDisplay(a.display.template, "".concat(i).concat(n + 1))
      }) : h = {
        type: "auto",
        prefix: d.name,
        count: "".concat(i).concat(n + 1)
      }, r[l] = h, t.setResolve(h, d.textStyle), a && Dt.A.isObj(a.display) && "custom-ignore" == a.display.type ? n : ++n;
    }
    buildRef(e, t, r) {
      u.YG(e, ".".concat(t, "-caption-ref")).forEach((e, t) => {
        var n = e.getAttribute("data-caption-ref-id"),
          i = e.parentNode.reactInstance,
          o = r[n];
        i && i.setResolve(o || {
          type: "missing"
        });
      });
    }
  }
  const Mh = new Ph();
  class Ih {
    constructor(e, t, r, i, o) {
      (0, n.A)(this, "rTypes", void 0), (0, n.A)(this, "numeringType", void 0), (0, n.A)(this, "requestEditorHtml", void 0), (0, n.A)(this, "onCaptionHandled", void 0), (0, n.A)(this, "requestPageSettings", void 0), (0, n.A)(this, "needCaption", !1), (0, n.A)(this, "needCaptionRef", !1), (0, n.A)(this, "lastResolvedMap", {}), (0, n.A)(this, "notifyCaptionNumbering", e => {
        this.rTypes.includes(e) && (this.needCaption || (this.needCaption = !0, this.needCaptionRef = !0));
      }), (0, n.A)(this, "notifyCaptionRef", e => {
        this.rTypes.includes(e) && (this.needCaptionRef || (this.needCaptionRef = !0));
      }), this.rTypes = e, this.numeringType = t, this.requestEditorHtml = r, this.onCaptionHandled = i, this.requestPageSettings = o;
    }
    processCaptionNumbering(e) {
      this.lastResolvedMap = this.processCaptions(e), this.processCaptionRef(e, this.lastResolvedMap);
    }
    processCaptions(e) {
      if (this.needCaption || e) {
        console.log("%c processing ".concat(this.rTypes.join(","), " caption"), "color:purple"), this.needCaption = !1;
        var t = Mh.buildPrefix(this.requestEditorHtml(), this.rTypes, this.numeringType, this.requestPageSettings());
        return this.onCaptionHandled(), t;
      }
      return this.lastResolvedMap;
    }
    processCaptionRef(e, t) {
      (this.needCaptionRef || e) && (this.needCaptionRef = !1, this.rTypes.forEach(e => {
        Mh.buildRef(this.requestEditorHtml(), e, t);
      }), this.onCaptionHandled());
    }
  }
  class Th {
    constructor(e) {
      (0, n.A)(this, "rq", void 0), (0, n.A)(this, "internalStateArr", void 0), (0, n.A)(this, "lastCaps", void 0), (0, n.A)(this, "anyCaptionNotified", !0), (0, n.A)(this, "notifyCaptionNumbering", e => {
        var t;
        this.anyCaptionNotified = !0, this.getInternalStates(this.rq.requestPageSettings()).forEach(t => t.notifyCaptionNumbering(e));
      }), (0, n.A)(this, "notifyCaptionRef", e => {
        var t;
        this.anyCaptionNotified = !0, this.getInternalStates(this.rq.requestPageSettings()).forEach(t => t.notifyCaptionRef(e));
      }), this.rq = e;
    }
    processCaptionNumbering(e) {
      var t;
      (e || this.anyCaptionNotified) && (console.log("run caption numbering!"), this.getInternalStates(this.rq.requestPageSettings()).forEach(t => t.processCaptionNumbering(e)), this.anyCaptionNotified = !1);
    }
    getInternalStates(e) {
      return this.internalStateArr && !this.isLastCaptionsChanged(e) || (this.lastCaps = this.pageSettingsToCaptionArr(e), this.internalStateArr = this.createStates(e)), this.internalStateArr;
    }
    pageSettingsToCaptionArr(e) {
      return [e.imageCaptions[0], e.tableCaptions[0], e.diagramCaptions[0]];
    }
    isLastCaptionsChanged(e) {
      return !this.lastCaps || e.imageCaptions[0] != this.lastCaps[0] || e.tableCaptions[0] != this.lastCaps[1] || e.diagramCaptions[0] != this.lastCaps[2];
    }
    createStates(e) {
      var t = this.buildCaptions(e),
        r = f().partition(t, e => this.isSharedType(e.model.numeringType || "default")),
        n = (0, Wt.A)(r, 2),
        i = n[0],
        o,
        s = n[1].map(e => this.buildState(e, i, this.rq)),
        a,
        l = t.filter(e => !s.some(t => t.rTypes.includes(e.cType))).map(e => this.newState([e.cType], "default", this.rq));
      return s.concat(l);
    }
    buildState(e, t, r) {
      var n = [];
      return this.findConnectedShared(e, t, n, 1), this.newState([e.cType].concat(n.map(e => e.cType)), e.model.numeringType, r);
    }
    newState(e, t, r) {
      return new Ih(e, t || "default", r.requestEditorHtml, r.onCaptionHandled, r.requestPageSettings);
    }
    findConnectedShared(e, t, r, n) {
      if (!(n > 20)) {
        var i = t.filter(t => this.isSharedWith(t.model.numeringType, e.cType));
        i.length <= 0 || i.forEach(e => {
          r.push(e), this.findConnectedShared(e, t, r, n + 1);
        });
      }
    }
    isSharedWith(e, t) {
      switch (e) {
        case "sw-diagram":
          return "diagram" == t;
        case "sw-table":
          return "table" == t;
        case "sw-image":
          return "image" == t;
      }
    }
    isSharedType(e) {
      return "sw-diagram" == e || "sw-image" == e || "sw-table" == e;
    }
    buildCaptions(e) {
      return [{
        cType: "diagram",
        model: e.diagramCaptions[0]
      }, {
        cType: "image",
        model: e.imageCaptions[0]
      }, {
        cType: "table",
        model: e.tableCaptions[0]
      }];
    }
  }
  function Lh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Rh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bh extends sn {
    constructor(e) {
      super(e), (0, n.A)(this, "curRenderMode", void 0), (0, n.A)(this, "captionRefType", "image"), (0, n.A)(this, "captionStates", void 0), (0, n.A)(this, "handleCaptionHandled", () => {}), (0, n.A)(this, "getCaptionInfo", e => {
        switch (e) {
          case "image":
            return this.getTarget().getPageSettings().imageCaptions[0];
          case "diagram":
            return this.getTarget().getPageSettings().diagramCaptions[0];
          case "table":
            return this.getTarget().getPageSettings().tableCaptions[0];
        }
        (0, Dh.d)(e);
      }), (0, n.A)(this, "notifyCaptionRef", e => {
        this.captionStates.notifyCaptionRef(e);
      }), (0, n.A)(this, "notifyCaptionNumbering", (e, t) => {
        "request-prefix-edit" != e ? this.captionStates.notifyCaptionNumbering(t) : this.showCaptionNumberDialog();
      }), (0, n.A)(this, "handleManagerDialogOk", e => {
        var t,
          r = Rh(Rh({}, this.getTarget().getPageSettings()), {}, {
            imageCaptions: [e.image],
            tableCaptions: [e.table],
            diagramCaptions: [e.diagram]
          });
        this.getTarget().setPageSettings(r), this.handleClose();
      }), (0, n.A)(this, "handleCaptionRefSelect", (e, t) => {
        var r,
          n = Rh(Rh({}, this.getCaptionSymbolInfo(t)), {}, {
            tagId: e
          });
        this.handleClose(), E.A.next(() => {
          this.getTarget().insertBySymbolInfo(n);
        });
      }), (0, n.A)(this, "handleClose", () => {
        this.getTarget().closeRender(this);
      }), this.captionStates = new Th({
        onCaptionHandled: this.handleCaptionHandled,
        requestEditorHtml: () => this.getTarget().getEditorHtmlElement(),
        requestPageSettings: () => this.getTarget().getPageSettings()
      });
    }
    processAllCaptions(e) {
      this.captionStates.processCaptionNumbering(e);
    }
    renderCaptionManager() {
      var e = this.getTarget().getPageSettings(),
        t = e.imageCaptions[0],
        r = e.tableCaptions[0],
        n = e.diagramCaptions[0];
      return c().createElement(Ch, {
        requestPickerSettings: this.target.getFixedContextHandler().getMtFuncs().requestColorPickerSettings,
        info: {
          image: t,
          table: r,
          diagram: n
        },
        onOk: this.handleManagerDialogOk,
        onClose: this.handleClose
      });
    }
    getCaptionSymbolInfo(e) {
      switch (e) {
        case "diagram":
          return Je.A.getByName("\\diagram-caption-ref");
        case "table":
          return Je.A.getByName("\\table-caption-ref");
        case "image":
          return Je.A.getByName("\\image-caption-ref");
      }
      (0, Dh.d)(e);
    }
    renderCaptionRefInsertion() {
      return c().createElement(Oh, {
        refType: this.captionRefType,
        onClose: () => {
          this.handleClose(), this.getTarget().hidenInputFocus(!0);
        },
        onSelect: this.handleCaptionRefSelect,
        requestRootEditor: this.getTarget().getEditorHtmlElement
      });
    }
    render() {
      return "reference" == this.curRenderMode ? this.renderCaptionRefInsertion() : this.renderCaptionManager();
    }
    showCaptionNumberDialog() {
      this.curRenderMode = "manager", this.getTarget().requestRender(this);
    }
    showCaptionRefDialog(e) {
      this.curRenderMode = "reference", this.captionRefType = e, this.getTarget().requestRender(this);
    }
  }
  var Fh = r(565);
  class jh {
    build(e, t, r) {
      var n = Is.buildFullCursorInformation(r, e.selected, t, j.A.emptyCursorContext(), "closest");
      if ("not-matched" == n) return "no-matched";
      var i = Ls.drawRemote(n, {
        color: Fh.A.generate(e.siteId)
      });
      return {
        siteId: e.siteId,
        style: i,
        remoteCursor: e,
        position: n,
        objectMetrics: void 0,
        rects: this.buildClientRectsSelection(e, t, r)
      };
    }
    buildClientRectsSelection(e, t, r) {
      if (e.selected) {
        var n = Ze.A.findLeafSelected(e.selected);
        if (n && n.listTypeSelect) {
          var i = {
            type: "list-type-selection",
            selected: e.selected,
            elementToCalculate: t.mtElement,
            rootEditor: r,
            leafSelected: n,
            dzContainer: t
          };
          return this.safeBuildSelectionRects(i);
        }
      }
      if (!e.extendedSelected) return [];
      console.log("calculate selections");
      var o = {
        type: "text-selection",
        selected: e.selected,
        extendSelected: e.extendedSelected,
        elementToCalculate: t.mtElement,
        rootEditor: r,
        dzContainer: t
      };
      return this.safeBuildSelectionRects(o);
    }
    safeBuildSelectionRects(e) {
      try {
        return Rt.buildSelectionRectsFromEditor(e);
      } catch (e) {
        return [];
      }
    }
  }
  var _h = new jh();
  function Nh(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = zh(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function zh(e, t) {
    if (e) {
      if ("string" == typeof e) return Hh(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Hh(e, t) : void 0;
    }
  }
  function Hh(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  class Wh {
    constructor() {
      (0, n.A)(this, "map", {}), (0, n.A)(this, "lastOtherParties", []), (0, n.A)(this, "lastChangeCursors", []);
    }
    clear() {
      this.map = {}, this.lastOtherParties = [], this.lastChangeCursors = [], this.draw();
    }
    getSelectedDiagramInstances() {
      return f().values(this.map).reduce((e, t) => {
        var r = this.extractDgCursor(t);
        return r ? e.concat([r]) : e;
      }, []);
    }
    extractDgCursor(e) {
      var t;
      if (e) {
        var r = null === (t = e.position) || void 0 === t ? void 0 : t.attachGeoPosElement,
          n;
        if (r) return S.A.isDiagram(r) && (n = r.reactInstance), n ? {
          instance: n,
          selected: e.remoteCursor.selected,
          eSelected: e.remoteCursor.extendedSelected,
          color: e.style.borderColor,
          siteId: e.siteId
        } : void 0;
      }
    }
    draw() {
      return this.lastOtherParties.map(e => {
        if (this.map[e.siteId]) {
          var t = this.map[e.siteId];
          return {
            name: e.displayName || "Anonymous",
            siteId: e.siteId,
            rects: t.rects,
            style: t.style,
            namePosition: S.A.isDiagram(t.position.attachGeoPosElement) ? "left" : "right"
          };
        }
      }).filter(e => e);
    }
    removeCursors(e) {
      e.forEach(e => {
        delete this.map[e];
      });
    }
    setRemoteCursors(e, t, r, n) {
      var i;
      this.lastOtherParties = t, this.lastChangeCursors = e, e.map(e => _h.build(e, r, n)).filter(e => e).forEach(e => {
        "no-matched" != e && (this.map[e.siteId] = e);
      });
      var o = Nh(t),
        s;
      try {
        for (o.s(); !(s = o.n()).done;) {
          var a = s.value;
          if (!this.map[a.siteId]) {
            var l = _h.build({
              siteId: a.siteId,
              selected: {
                lineIndex: 0,
                charIndex: 0
              },
              extendedSelected: void 0
            }, r, n);
            l && "no-matched" != l && (this.map[a.siteId] = l);
          }
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      var c = {};
      t.forEach(e => {
        this.map[e.siteId] && (c[e.siteId] = this.map[e.siteId]);
      }), this.map = c;
    }
    getSiteIds() {
      return f().keys(this.map).map(e => Number.parseInt(e, 10));
    }
    invalidateCursorPositions(e, t) {
      this.setRemoteCursors(this.lastChangeCursors, this.lastOtherParties, e, t);
    }
  }
  class Vh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    getRectElement(e, t) {
      var r = {
        transform: new oc.Z().translate(Math.round(e.left), Math.round(e.top)).scale(q.T.widthOf(e) / 100, (q.T.heightOf(e) + 1) / 100).toCssStyle(),
        background: this.props.color,
        opacity: .15
      };
      return c().createElement("selection", {
        key: t,
        style: r
      });
    }
    renderRects() {
      return f().map(this.props.rects, (e, t) => this.getRectElement(e, t));
    }
    render() {
      return c().createElement("selection-wrapper", {
        class: "remote-selection"
      }, this.renderRects());
    }
  }
  class Uh extends c().Component {
    render() {
      var e = this.props.cursors;
      return c().createElement("div", {
        className: "rmcsgr"
      }, this.renderCaretCursors(e), this.renderSelections(e));
    }
    renderCaretCursors(e) {
      var t = this.props.transparentSiteIds,
        r = e[0],
        n = .8;
      return t.includes(r.siteId) && (n = .1), [c().createElement("div", {
        key: "cursor",
        className: "rmcs",
        style: {
          width: 1,
          position: "absolute",
          left: r.style.left,
          top: r.style.top,
          borderLeft: "2px solid ".concat(r.style.borderColor),
          height: r.style.height,
          zIndex: 1e4,
          opacity: 1,
          pointerEvents: "none"
        }
      }), c().createElement("div", {
        key: "cnames",
        style: {
          position: "absolute",
          left: r.style.left,
          width: 100,
          bottom: 0,
          top: 0
        }
      }, c().createElement("div", {
        style: {
          height: r.style.top - r.style.height - 3
        }
      }), c().createElement("div", {
        className: "rcnt",
        style: {
          position: this.props.inZoomMode ? "static" : "sticky"
        }
      }, e.map(e => c().createElement("div", {
        key: e.siteId,
        style: {
          background: e.style.borderColor,
          opacity: n,
          padding: 2,
          maxWidth: 100,
          whiteSpace: "nowrap",
          display: "inline-block"
        }
      }, e.name))))];
    }
    renderSelections(e) {
      return e.map((e, t) => {
        if (e.rects && e.rects.length > 0) return c().createElement(Vh, {
          key: t,
          rects: e.rects,
          color: e.style.borderColor
        });
      });
    }
  }
  class qh extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        cursors: [],
        transparentSiteIds: []
      }), (0, n.A)(this, "drawing", new Wh()), (0, n.A)(this, "mainCursorPos", void 0), (0, n.A)(this, "mainCursorControlled", void 0), (0, n.A)(this, "runObj", E.A.createLaterRunObject("latest", 200, !1)), (0, n.A)(this, "tryUpdateWithMainCursorChanged", () => {
        var e = this.buildTransparentSiteIds(this.mainCursorPos, this.mainCursorControlled, this.state.cursors),
          t;
        Dt.A.arrayEquals(e, this.state.transparentSiteIds) || this.setState({
          transparentSiteIds: e
        });
      }), (0, n.A)(this, "processUpdateRemoteCursorPositions", () => {
        this.props.requestPreposition(this.drawing.getSiteIds());
      });
    }
    shouldComponentUpdate(e, t) {
      return this.state.cursors != t.cursors || this.state.transparentSiteIds != t.transparentSiteIds || this.props.inZoomMode != e.inZoomMode;
    }
    componentWillUnmount() {
      this.drawing.clear();
    }
    getSelectedDiagramInstances() {
      return this.drawing.getSelectedDiagramInstances();
    }
    clear() {
      this.setState({
        cursors: [],
        transparentSiteIds: []
      }), this.drawing.clear();
    }
    render() {
      return this.runObj.cancel(), c().createElement("div", {
        className: "remote-cursor-container",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 3
        }
      }, this.renderCursors());
    }
    renderCursors() {
      var e = this.state,
        t = e.cursors,
        r = e.transparentSiteIds,
        n = f().groupBy(t, e => "".concat(e.style.left, "-").concat(e.style.top));
      return f().values(n).map((e, t) => c().createElement(Uh, {
        key: t,
        cursors: e,
        transparentSiteIds: r,
        fixedContextHandler: this.props.fixedContextHandler,
        inZoomMode: this.props.inZoomMode
      }));
    }
    setRemoteCursors(e, t) {
      var r = this.props.fixedContextHandler.getMtFuncs(),
        n = r.getEditorInfo();
      this.drawing.setRemoteCursors(t, e, r.getDocZoomContainer(), n.rootEditorElement), this.refreshCursorsFromDrawing();
    }
    shouldTransparentCursorTagName(e, t) {
      return f().inRange(e.left, t.left, t.left + 100) && f().inRange(e.top, t.top - 50, t.top + 20);
    }
    buildTransparentSiteIds(e, t, r) {
      if (!e || t) return [];
      var n = [];
      return r.forEach(t => {
        this.shouldTransparentCursorTagName(e, t.style) && n.push(t.siteId);
      }), n;
    }
    notifyMainSelectedPosition(e, t) {
      this.mainCursorPos = e, this.mainCursorControlled = t, this.runObj.later(this.tryUpdateWithMainCursorChanged);
    }
    refreshCursorsFromDrawing() {
      var e = this.drawing.draw(),
        t = this.buildTransparentSiteIds(this.mainCursorPos, this.mainCursorControlled, e);
      this.setState({
        cursors: e,
        transparentSiteIds: t
      });
    }
    removeSites(e) {
      this.drawing.removeCursors(e), this.refreshCursorsFromDrawing();
    }
  }
  class Gh {
    constructor() {
      (0, n.A)(this, "targetSet", new Set()), (0, n.A)(this, "cursorMap", new Map());
    }
    clear() {
      this.targetSet.forEach(e => {
        e.unsetRemote(), this.removeTarget(e);
      }), this.targetSet.clear();
    }
    addTarget(e) {
      this.targetSet.add(e);
    }
    removeTarget(e) {
      this.targetSet.delete(e), this.cursorMap.has(e) && this.cursorMap.delete(e);
    }
    updateCursors(e, t) {
      var r = this.buildMap(e.filter(e => e.selected));
      this.unselect(this.cursorMap, r), this.select(r, t), this.cursorMap = r;
    }
    select(e, t) {
      e.forEach((e, r) => {
        this.targetSet.has(r) && r.remoteSelect(e.map(e => {
          var r, n, i, o;
          return {
            siteId: e.siteId,
            ids: null !== (r = null === (n = e.selected.controlSelectedInfo) || void 0 === n ? void 0 : n.selectedIds) && void 0 !== r ? r : [],
            color: e.color,
            siteName: null !== (i = null === (o = t.find(t => t.siteId == e.siteId)) || void 0 === o ? void 0 : o.displayName) && void 0 !== i ? i : "Unknown",
            rootSelected: e.selected,
            eRootSelected: e.eSelected
          };
        }));
      });
    }
    unselect(e, t) {
      e.forEach((e, r) => {
        t.has(r) || this.targetSet.has(r) && r.unsetRemote();
      });
    }
    buildMap(e) {
      var t = new Map();
      return e.forEach(e => {
        t.has(e.instance) || t.set(e.instance, []), t.get(e.instance).push(e);
      }), t;
    }
  }
  class Kh extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "remoteCursors", void 0), (0, n.A)(this, "diagramSelectionHandler", new Gh()), (0, n.A)(this, "handleRef", e => {
        this.remoteCursors = e;
      }), (0, n.A)(this, "registerDiagram", e => {
        this.diagramSelectionHandler.addTarget(e);
      }), (0, n.A)(this, "unregisterDiagram", e => {
        this.diagramSelectionHandler.removeTarget(e);
      });
    }
    clear() {
      this.remoteCursors && this.remoteCursors.clear(), this.diagramSelectionHandler.clear();
    }
    render() {
      return this.getTarget().inColMode() ? c().createElement(qh, {
        ref: this.handleRef,
        requestPreposition: this.getTarget().requestPreposition,
        fixedContextHandler: this.getTarget().getFixedContextHandler(),
        inZoomMode: this.getTarget().inZoomMode()
      }) : null;
    }
    notifyMainSelectedPosition(e, t) {
      this.remoteCursors && this.remoteCursors.notifyMainSelectedPosition(e, t);
    }
    setRemoteCursors(e, t) {
      if (this.remoteCursors) {
        this.remoteCursors.setRemoteCursors(e, t);
        var r = this.remoteCursors.getSelectedDiagramInstances();
        this.diagramSelectionHandler.updateCursors(r, e);
      }
    }
    processUpdateRemoteCursorPositions() {
      this.remoteCursors && this.remoteCursors.processUpdateRemoteCursorPositions();
    }
    removeSites(e) {
      this.remoteCursors && this.remoteCursors.removeSites(e);
    }
  }
  class Zh {
    constructor() {
      (0, n.A)(this, "isUnmountedFlag", !1), (0, n.A)(this, "changeSessionInfo", {}), (0, n.A)(this, "pSessionInfo", {}), (0, n.A)(this, "containerModel", void 0), (0, n.A)(this, "isAnyFlagSet", !1);
    }
    notifyUnmount() {
      this.isUnmountedFlag = !0;
    }
    isUnmounted() {
      return this.isUnmountedFlag;
    }
    end() {
      this.isAnyFlagSet && (this.changeSessionInfo = {}, this.isAnyFlagSet = !1);
    }
    setSessionValue(e, t) {
      this.isAnyFlagSet || (this.isAnyFlagSet = !0), this.changeSessionInfo[e] = t;
    }
    getSessionValue(e, t) {
      var r = this.changeSessionInfo[e];
      return void 0 === r ? t : r;
    }
    setContainerModel(e) {
      this.containerModel = e;
    }
    getContainerModel() {
      return this.containerModel;
    }
    persistableSet(e, t) {
      this.pSessionInfo[e] = t;
    }
    persistableClear(e) {
      this.pSessionInfo[e] && delete this.pSessionInfo[e];
    }
    persistableGet(e) {
      return this.pSessionInfo[e];
    }
  }
  class Yh extends sn {
    requestRender(e) {
      this.deactivated || this.getState().requestRenderer != e && this.setState({
        requestRenderer: e
      });
    }
    closeRender(e) {
      this.deactivated || this.getState().requestRenderer == e && this.setState({
        requestRenderer: null
      });
    }
    render() {
      if (!this.deactivated && this.getState().requestRenderer) return this.getState().requestRenderer.render();
    }
  }
  function Qh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Jh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Xh {
    detect(e, t, r) {
      return r ? e.map(e => {
        var n = r.find(t => t.item.id == e.id);
        return n && n.model.lines == e.lines && n.item.prefixText == e.prefixText ? n : this.wrap(e, t);
      }) : e.map(e => this.wrap(e, t));
    }
    wrapLines(e) {
      return !e || e.length <= 0 ? [{
        id: "flineIe",
        blocks: []
      }] : e;
    }
    wrap(e, t) {
      return {
        item: e,
        model: {
          id: e.id,
          lines: this.wrapLines(e.lines),
          pageSettings: Jh(Jh({}, t), {}, {
            fontSize: .9 * t.fontSize,
            mathFontSize: .9 * t.mathFontSize
          })
        }
      };
    }
  }
  const $h = new Xh();
  function ep(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function tp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ep(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class rp extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleMouseDown", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "handleClick", e => {
        e.stopPropagation(), e.preventDefault();
      }), (0, n.A)(this, "handleMoreOptionsClick", (e, t) => {
        e.stopPropagation(), e.preventDefault(), this.allowEdit() && this.openFootnoteEdit(t);
      }), this.state = {
        wItems: [],
        pageSettings: this.extractPageSettingsForFootnote(this.props.pageSettings)
      };
    }
    extractPageSettingsForFootnote(e) {
      return tp(tp({}, e), {}, {
        paragraph: void 0
      });
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    setItems(e) {
      this.setState({
        wItems: $h.detect(e, this.state.pageSettings, this.state.wItems)
      });
    }
    render() {
      return this.state.wItems.length <= 0 ? c().createElement("div", null) : c().createElement("div", {
        className: "doc-footnote-container",
        style: {
          marginBottom: 6
        },
        onMouseDown: this.handleMouseDown
      }, c().createElement("div", {
        style: {
          width: "30%",
          borderTop: "1px solid black",
          height: 6
        }
      }), this.renderItems(this.state.wItems));
    }
    openFootnoteEdit(e) {
      for (var t = u.YG(this.props.requestMathTypeHtml(), ".footnote-symbol"), r = 0; r < t.length; r++) {
        var n = t[r];
        if (u.vK(n.firstElementChild, "data-footnote-id") == e) {
          var i;
          if (n.reactInstance) n.reactInstance.showFootnoteSettings(!0);
          return;
        }
      }
    }
    allowEdit() {
      return this.props.fixedContextHandler.getMtFuncs().allowEdit();
    }
    renderMoreOptionsIcon(e) {
      if (this.allowEdit()) return c().createElement("div", {
        key: "more-options",
        className: "more-option-box no-print tw:absolute tw:-left-[60px] tw:top-0 tw:bottom-0 tw:hidden tw:w-[70px] tw:group-hover:block"
      }, c().createElement("div", {
        className: "more-option-box-inner tw:mr-[10px] tw:inline-block tw:cursor-pointer tw:border tw:border-[#d6d3d3] tw:bg-[#f7f7f7] tw:px-[0.2em] tw:py-0 tw:text-gray-500",
        onClick: () => {
          var t;
          null === (t = u.Zy(document, 'span[data-footnote-id="'.concat(e, '"]'))) || void 0 === t || t.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      }, c().createElement("i", {
        className: "fa fa-arrow-left",
        style: {
          fontSize: 15
        }
      })), c().createElement("div", {
        className: "more-option-box-inner tw:mr-[10px] tw:inline-block tw:cursor-pointer tw:border tw:border-[#d6d3d3] tw:bg-[#f7f7f7] tw:px-[0.2em] tw:py-0 tw:text-gray-500",
        onClick: t => this.handleMoreOptionsClick(t, e)
      }, c().createElement("i", {
        className: "fa fa-cog",
        style: {
          fontSize: 15
        }
      })));
    }
    renderItems(e) {
      var t = this.props.MathTypeClss,
        r = v()("footnote-mt-container tw:relative", {
          "hover-select tw:group": this.allowEdit()
        });
      return e.map(e => c().createElement("div", {
        key: e.item.id,
        "data-footnote-id": e.item.id,
        className: r,
        onClick: this.handleClick
      }, c().createElement(t, {
        readOnly: !0,
        model: e.model,
        style: {
          padding: 0,
          display: "inline"
        },
        rootEditorStyle: {
          minHeight: 0,
          padding: 0,
          display: "inline"
        },
        firstLinePrefix: e.item.prefixText,
        firstLinePrefixStyle: {
          fontFamily: Yr.A.textFontFamilyFromKey(this.state.pageSettings.fontName),
          fontSize: .65 * this.state.pageSettings.fontSize,
          verticalAlign: "super"
        },
        className: "blocks-inline mt-doc-fn"
      }), this.renderMoreOptionsIcon(e.item.id)));
    }
  }
  class np {
    numering(e) {
      var t = [];
      return u.YG(e, ".footnote-symbol").forEach((e, r) => {
        var n = "".concat(r + 1);
        u.c3(e.firstElementChild, n), t.push({
          text: n,
          id: u.vK(e.firstElementChild, "data-footnote-id")
        });
      }), t;
    }
  }
  const ip = new np();
  function op(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function sp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? op(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : op(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ap extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "actionQueue", []), (0, n.A)(this, "docFootnoteRef", void 0), (0, n.A)(this, "lastDataItems", []), (0, n.A)(this, "handleDocFootnoteRef", e => {
        this.docFootnoteRef = e;
      });
    }
    notifyFootnote(e) {
      this.actionQueue.push(e);
    }
    processFootnote() {
      if (!(this.actionQueue.length <= 0)) if (this.docFootnoteRef) {
        console.log(this.actionQueue);
        var e = ip.numering(this.getTarget().getMathTypeHtmlElement());
        this.lastDataItems = this.mergeWithDataItems(this.actionQueue, this.lastDataItems), this.lastDataItems = this.orderByNumeringItems(this.lastDataItems, e), this.actionQueue = [], E.A.nextMicro(() => {
          this.docFootnoteRef.setItems(this.lastDataItems.map((e, t) => ({
            id: e.id,
            lines: e.lines || [],
            prefixText: (t + 1).toString()
          })));
        });
      } else this.actionQueue = [];
    }
    orderByNumeringItems(e, t) {
      return t.map(t => {
        var r = e.find(e => e.id == t.id);
        return r || {
          id: t.id,
          lines: []
        };
      });
    }
    mergeWithDataItems(e, t) {
      for (var r = function r(n) {
          var i = e[n];
          switch (i.type) {
            case "delete":
              var o = t.findIndex(e => e.id == i.id);
              o >= 0 && t.splice(o, 1);
              break;
            case "change":
              var s = t.findIndex(e => e.id == i.id);
              if (s >= 0) {
                t[s] = sp(sp({}, t[s]), {}, {
                  lines: i.lines
                });
                break;
              }
              t.push({
                id: i.id,
                lines: i.lines
              });
          }
        }, n = 0; n < e.length; n++) r(n);
      return t;
    }
    render(e) {
      if (this.getTarget().props.footnoteEnabled) return c().createElement(rp, {
        fixedContextHandler: this.getTarget().getFixedContextHandler(),
        requestMathTypeHtml: this.getTarget().getMathTypeHtmlElement,
        ref: this.handleDocFootnoteRef,
        MathTypeClss: e,
        pageSettings: this.getTarget().getPageSettings()
      });
    }
  }
  var lp = r(99909),
    cp = r(19775),
    dp = r(22372),
    hp = r(83538),
    pp = r(25245),
    up = r(94483),
    gp = r(43485),
    mp = r(56724),
    fp = r(81190),
    yp = r(49799);
  function vp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var xp = Zr.A.getModalDialog();
  class Cp extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleCommit", e => {
        this.props.onSelect(e.item);
      }), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      });
      var t = this.buildGroups(),
        r = e.selectedItem || f().first(t[0].items);
      this.state = {
        groups: t,
        selectedItem: {
          group: t[0],
          item: r
        }
      };
    }
    buildGroups() {
      return [{
        name: "root",
        items: ["function", "3d-func", "xymatrix", "scatter", "line", "area", "contour", "heatmap", "pie", "bar", "surface", "scatter3d", "mesh3d"]
      }];
    }
    renderItemSelect() {
      if (this.state.groups[0].items.length <= 0) return c().createElement("div", {
        style: {
          padding: 10,
          fontSize: 14,
          textAlign: "center"
        }
      }, "There is no caption to select");
      var e = {
        height: 20
      };
      return c().createElement(Ha.A, {
        mainStyle: {
          paddingTop: 5
        },
        itemContainerStyle: {
          width: 60,
          border: "1px solid transparent",
          padding: 5
        },
        itemContainerStyleSelected: {
          width: 60,
          background: "var(--ui-selection, rgb(227, 253, 225))",
          padding: 5,
          border: "1px dotted var(--ui-border, gray)"
        },
        groups: this.state.groups,
        scrollToSelectedOnOpen: !0,
        preventHover: !0,
        numberOfItemsPerLine: 5,
        renderGroupName: () => null,
        renderItem: (t, r, n) => {
          switch (t) {
            case "function":
              return this.renderPlotlyItem(c().createElement("div", {
                style: {
                  stroke: "var(--ui-text-muted, gray)",
                  padding: 2,
                  height: 18,
                  transform: "scale(1.2)"
                }
              }, Zi.A.diagram), "Function Plot");
            case "3d-func":
              return this.renderPlotlyItem(c().createElement("div", {
                style: {
                  stroke: "var(--ui-text-muted, gray)",
                  padding: 2,
                  height: 18,
                  transform: "scale(1.2)"
                }
              }, Zi.A.plot3dfunc), "Function 3d Plot");
            case "xymatrix":
              return this.renderPlotlyItem(this.renderXyMatrixIcon(), "XyMatrix (Comm.)");
            case "scatter":
              return this.renderPlotlyItem(c().createElement(lp.A, {
                style: e
              }), "Scatter Plot");
            case "line":
              return this.renderPlotlyItem(c().createElement(cp.A, {
                style: e
              }), "Line Plot");
            case "area":
              return this.renderPlotlyItem(c().createElement(dp.A, {
                style: e
              }), "Area Plot");
            case "bar":
              return this.renderPlotlyItem(c().createElement(hp.A, {
                style: e
              }), "Bar Plot");
            case "contour":
              return this.renderPlotlyItem(c().createElement(pp.A, {
                style: e
              }), "Contour Plot");
            case "heatmap":
              return this.renderPlotlyItem(c().createElement(up.A, {
                style: e
              }), "Heatmap Plot");
            case "pie":
              return this.renderPlotlyItem(c().createElement(gp.A, {
                style: e
              }), "Pie Plot");
            case "surface":
              return this.renderPlotlyItem(c().createElement(mp.A, {
                style: e
              }), "Surface 3d Plot");
            case "mesh3d":
              return this.renderPlotlyItem(c().createElement(yp.A, {
                style: e
              }), "Mesh 3d Plot");
            case "scatter3d":
              return this.renderPlotlyItem(c().createElement(fp.A, {
                style: e
              }), "Scatter 3d Plot");
          }
        },
        selected: this.state.selectedItem,
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit
      });
    }
    renderPlotlyItem(e, t) {
      return c().createElement("div", {
        style: {
          textAlign: "center"
        }
      }, e, c().createElement("div", {
        style: {
          fontSize: "0.9em"
        }
      }, t));
    }
    renderXyMatrixIcon() {
      return c().createElement("svg", {
        viewBox: "0 0 26 22",
        style: {
          width: 24,
          height: 20,
          stroke: "var(--ui-text-muted, gray)",
          fill: "none",
          strokeWidth: 1.4
        }
      }, c().createElement("rect", {
        x: "3",
        y: "4",
        width: "6",
        height: "4"
      }), c().createElement("rect", {
        x: "17",
        y: "4",
        width: "6",
        height: "4"
      }), c().createElement("rect", {
        x: "3",
        y: "14",
        width: "6",
        height: "4"
      }), c().createElement("rect", {
        x: "17",
        y: "14",
        width: "6",
        height: "4"
      }), c().createElement("path", {
        d: "M9,6 L17,6 M6,8 L6,14"
      }), c().createElement("path", {
        d: "M14.5,4.5 L17,6 L14.5,7.5 M4.5,11.5 L6,14 L7.5,11.5"
      }));
    }
    render() {
      return c().createElement(xp, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Select plot type",
        size: "medium",
        scroll: "body",
        headerHidden: !0,
        style: bp({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 400,
          maxHeight: 250
        }, Zr.A.getCenterStyle()),
        backDrop: !0,
        onCancel: this.props.onClose,
        onClose: this.props.onClose,
        showOk: !1,
        show: !0
      }, c().createElement("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          fontSize: 13
        },
        className: "plot-item-select"
      }, this.renderItemSelect())));
    }
  }
  class Sp extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectedItem", void 0), (0, n.A)(this, "handleClose", () => {
        this.getTarget().closeRender(this);
      }), (0, n.A)(this, "handleSelect", e => {
        this.handleClose(), this.insertItem(e);
      });
    }
    insertItem(e) {
      E.A.next(() => {
        var t = this.getTarget(),
          r = t.getContainerModel(),
          n = q.T.getBCWidth(r.getEditorHtmlElement(), this.getTarget().getDocZoomContainer()),
          i = al.get(e, n);
        if (i) {
          var o = t.getController().handleBySymbolInfo(i, t.getContainerModel());
          t.handleResult(o);
        }
      });
    }
    showPlotSelection(e, t) {
      t && e ? this.insertItem(e) : (this.selectedItem = e, this.getTarget().requestRender(this));
    }
    render() {
      return c().createElement(Cp, {
        selectedItem: this.selectedItem,
        onSelect: this.handleSelect,
        onClose: this.handleClose
      });
    }
  }
  class Ap extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "refreshCodeSectionLanguages", () => {
        var e = this.getTarget().getMathTypeHtmlElement();
        u.YG(e, ".code-section-symbol").forEach((e, t) => {
          var r = e.reactInstance;
          r && r.refreshLanguage && r.refreshLanguage();
        });
      });
    }
  }
  var wp = r(3531);
  class Ep extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        progress: .01,
        show: !1
      });
    }
    shouldComponentUpdate(e, t) {
      return t != this.state;
    }
    isShown() {
      return this.state.show;
    }
    show(e) {
      this.setState({
        show: !0,
        centerPosition: e
      });
    }
    hide() {
      this.setState({
        show: !1
      });
    }
    setProgress(e) {
      this.setState({
        progress: e
      });
    }
    render() {
      return this.state.show ? c().createElement("div", {
        className: "test-mt-progressing",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.17)",
          zIndex: 9999
        }
      }, c().createElement("div", {
        style: {
          display: this.state.centerPosition ? void 0 : "none",
          position: "fixed",
          left: this.state.centerPosition ? this.state.centerPosition : "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: 340,
          background: "var(--ui-surface, white)",
          height: 70,
          padding: 10,
          paddingTop: 40,
          fontSize: 13,
          textAlign: "center"
        }
      }, c().createElement("span", null, "Processing..."), c().createElement(wp.Z, {
        progress: this.state.progress,
        strokeWidth: 2,
        style: {
          marginBottom: 5,
          marginTop: 10
        }
      }))) : c().createElement("div", {
        style: {
          display: "none"
        }
      });
    }
  }
  var kp = r(62095);
  class Op {
    calculateForUnsizeOnly(e, t, r) {
      return this.runBy(e, t, r, "on-unsized");
    }
    recalculateAll(e, t, r) {
      return this.runBy(e, t, r, "full-visible");
    }
    runBy(e, t, r, n) {
      var o = t.length;
      return Promise.resolve((0, i.__)(t, (t, i) => kp.$.run(t, n, e, e => {
        Bl.O.tryRunStoreCacheSizeOnHtmlLine(e);
      }, (e, t) => {
        null == r || r(i + e, o + t);
      }).then(() => {
        if (r && (i % 25 == 0 || i == o - 1)) return r(i, o), Bl.O.delay();
      })));
    }
  }
  var Dp = new Op();
  class Pp {
    constructor() {
      (0, n.A)(this, "curCtx", void 0), (0, n.A)(this, "cancel", () => {
        this.curCtx && (this.curCtx.latestLineRunParam && (this.curCtx.latestLineRunParam.cancel = !0), this.curCtx.cancel = !0, this.curCtx = void 0);
      });
    }
    getRandomArbitrary(e, t) {
      return Math.random() * (t - e) + e;
    }
    run(e, t) {
      var r = Array.from(t),
        n = this.getRequiredRefreshes(r),
        i = this.sortByMostVisibleParts(n),
        o = {
          id: "ctx-".concat(this.getRandomArbitrary(100, 999)),
          almostLineProcessingCount: 0,
          index: 0,
          target: e,
          rInfo: i
        };
      return this.curCtx = o, e.getBatchUpdater().withinDelayRenderNonBusy(e => this.runOnContext(e, o).then(() => {
        if (!o.cancel) return e().then(() => this.curCtx = void 0);
        this.curCtx = void 0;
      }), {
        cancel: this.cancel
      });
    }
    sortByMostVisibleParts(e) {
      var t = window.innerHeight / 2;
      return f().orderBy(e, e => Math.abs((e[1].top + e[1].bottom) / 2 - t), "asc");
    }
    getRequiredRefreshes(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r],
          i = n.requireRefresh();
        "no-processing" != i && t.push([n, i]);
      }
      return t;
    }
    runOnContext(e, t) {
      if (t.cancel) return Promise.resolve();
      for (var r = t.rInfo; t.index < r.length;) {
        var n = (0, Wt.A)(r[t.index], 2),
          i = n[0],
          o,
          s = {
            rect: n[1],
            almostLineProcessingCount: t.almostLineProcessingCount
          },
          a = i.optimizerRefresh(e, s);
        return t.latestLineRunParam = s, t.index++, Promise.resolve(a).then(r => (t.almostLineProcessingCount = r, this.runOnContext(e, t)));
      }
      return Promise.resolve();
    }
  }
  class Mp {
    constructor() {
      (0, n.A)(this, "disableLazy", (e, t, r) => {
        var n = e[t];
        n || (n = {}, e[t] = n), n[r] = "d";
      }), (0, n.A)(this, "resumeLazy", (e, t, r) => {
        var n = e[t];
        n && "d" == n[r] && delete n[r];
      });
    }
    set(e, t, r, n) {
      var i = e[t];
      i || (i = {}, e[t] = i), i[r] = n;
    }
    unset(e, t, r) {
      var n = e[t];
      n && (delete n[r], f().isEmpty(n) && delete e[t]);
    }
    unsetEditArea(e, t) {
      delete e[t];
    }
    fetchCacheSize(e, t, r) {
      var n = e[t];
      if (n) return n[r];
    }
  }
  var Ip = new Mp(),
    Tp = r(57381);
  class Lp {
    constructor() {
      (0, n.A)(this, "cache", {});
    }
    set(e, t, r) {
      var n = this.cache[e];
      n && "removed" != n || (n = {}, this.cache[e] = n), n[t] = r;
    }
    unset(e, t) {
      var r = this.cache[e];
      "removed" != r && (r || (r = {}, this.cache[e] = r), r[t] = "removed");
    }
    unsetEditArea(e) {
      this.cache[e] = "removed";
    }
    consume() {
      var e = this.cache;
      return this.cache = {}, e;
    }
  }
  class Rp extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "delayRun", E.A.createLaterRunObject("latest", 10)), (0, n.A)(this, "isBusy", !1), (0, n.A)(this, "isRefreshing", !1), (0, n.A)(this, "unSizedEditInstanceSet", void 0), (0, n.A)(this, "registedEditAreaLineRemovedMap", new Map()), (0, n.A)(this, "editMtAllInstanceSet", new Set()), (0, n.A)(this, "refreshVisibleEditInstanceSet", void 0), (0, n.A)(this, "mtProcessingBarRef", void 0), (0, n.A)(this, "wholePageRecreatedFlag", !1), (0, n.A)(this, "renderRefreshing", new Pp()), (0, n.A)(this, "requestUnsizeOnBusyCount", 0), (0, n.A)(this, "isFreeDelayCachedChangeForDiagramFullView", void 0), (0, n.A)(this, "disableLazy", (e, t) => {
        var r = this.getSafeCacheMap();
        Ip.disableLazy(r, e, t);
      }), (0, n.A)(this, "resumeLazy", (e, t) => {
        var r = this.getSafeCacheMap();
        Ip.resumeLazy(r, e, t);
      }), (0, n.A)(this, "mergeCacheSize", e => {
        if (e) {
          var t = this.getState().mainModel;
          this.makeSureDelayRenderCacheExists(t), Object.entries(e).forEach(e => {
            var r = (0, Wt.A)(e, 2),
              n = r[0],
              i = r[1];
            "string" != typeof i ? Object.entries(i || {}).forEach(e => {
              var r = (0, Wt.A)(e, 2),
                i = r[0],
                o = r[1];
              "string" == typeof o ? Ip.unset(t.delayRenderCache.map, n, i) : Ip.set(t.delayRenderCache.map, n, i, o);
            }) : Ip.unsetEditArea(t.delayRenderCache.map, n);
          });
        }
      }), (0, n.A)(this, "freeDelayCacheChangeForDgFullView", e => {
        this.isFreeDelayCachedChangeForDiagramFullView = e;
      }), (0, n.A)(this, "delayRegisterLineRemoved", (e, t) => {
        if (!this.isFreeDelayCachedChangeForDiagramFullView) {
          var r = this.registedEditAreaLineRemovedMap.get(e);
          r || (r = new Set(), this.registedEditAreaLineRemovedMap.set(e, r)), r.add(t);
        }
      }), (0, n.A)(this, "delayRegisterLazyLineAdded", (e, t) => {
        if (!this.isFreeDelayCachedChangeForDiagramFullView) {
          var r = this.registedEditAreaLineRemovedMap.get(e);
          r && r.delete(t);
        }
      }), (0, n.A)(this, "delayRegisterEditareaRemoved", e => {
        if (!this.isFreeDelayCachedChangeForDiagramFullView && (this.registedEditAreaLineRemovedMap.delete(e), !this.storeCacheSizeDisabled)) if (this.changeCapture) this.changeCapture.unsetEditArea(e);else {
          var t = this.getSafeCacheMap();
          Ip.unsetEditArea(t, e);
        }
      }), (0, n.A)(this, "setLineCacheSize", (e, t, r) => {
        if (!this.isFreeDelayCachedChangeForDiagramFullView && !this.storeCacheSizeDisabled) if (this.changeCapture) this.changeCapture.set(e, t, r);else {
          var n = this.getSafeCacheMap();
          Ip.set(n, e, t, r);
        }
      }), (0, n.A)(this, "unsetLineCacheSize", (e, t) => {
        if (!this.isFreeDelayCachedChangeForDiagramFullView && !this.storeCacheSizeDisabled) if (this.changeCapture) this.changeCapture.unset(e, t);else {
          var r = this.getSafeCacheMap();
          Ip.unset(r, e, t);
        }
      }), (0, n.A)(this, "fetchCacheSize", (e, t) => {
        if (this.getTarget().isLazyDisable(e, t)) return "d";
        var r = this.getSafeCacheMap();
        return Ip.fetchCacheSize(r, e, t);
      }), (0, n.A)(this, "registerDelayEditArea", e => {
        this.editMtAllInstanceSet.add(e);
      }), (0, n.A)(this, "unregisterDelayEditArea", (e, t) => {
        this.editMtAllInstanceSet.delete(e), this.delayRegisterEditareaRemoved(t);
      }), (0, n.A)(this, "refreshViewWithEditors", (e, t) => Promise.resolve((0, i.__)(t, t => t.optimizerRefresh(e)))), (0, n.A)(this, "refreshDelayRenderView", () => {
        var e;
        this.deactivated || this.getTarget().deplayRenderEnabled() && this.delayRun.later(() => {
          this.runRefreshDelayRenderView();
        });
      }), (0, n.A)(this, "runRefreshDelayRenderView", () => {
        var e;
        if (!this.deactivated && !this.getTarget().isBusy()) {
          if (this.isRefreshing) return this.renderRefreshing.cancel(), void this.refreshDelayRenderView();
          this.isRefreshing = !0, this.renderRefreshing.run(this.getTarget(), this.editMtAllInstanceSet).then(() => {
            this.isRefreshing = !1, this.deactivated || (this.getTarget().refreshSpellCheckPosition(), this.getTarget().refreshRectsOnFind());
          }).catch(() => {
            this.isRefreshing = !1;
          });
        }
      });
    }
    deactivateHandler() {
      super.deactivateHandler(), this.delayRun.cancel(), this.renderRefreshing.cancel();
    }
    makeSureDelayRenderCacheExists(e) {
      e.delayRenderCache || (e.delayRenderCache = {
        av: 0,
        map: {}
      });
    }
    getSafeCacheMap() {
      var e = this.getState().mainModel;
      return this.makeSureDelayRenderCacheExists(e), e.delayRenderCache.map;
    }
    consumeDelayRenderChanges() {
      var e;
      return null === (e = this.changeCapture) || void 0 === e ? void 0 : e.consume();
    }
    notifyMathTypeComponentWillMount(e) {
      e && (this.storeCacheSizeDisabled = !0, this.changeCapture = new Lp());
    }
    notifyMathTypeMountProcessed(e) {
      this.storeCacheSizeDisabled && (this.storeCacheSizeDisabled = !1);
    }
    procesEditAreaLineRemoved() {
      if (!(this.registedEditAreaLineRemovedMap.size <= 0)) {
        var e = this.getSafeCacheMap();
        this.storeCacheSizeDisabled || this.registedEditAreaLineRemovedMap.forEach((t, r) => {
          t.forEach(t => {
            this.changeCapture ? this.changeCapture.unset(r, t) : Ip.unset(e, r, t);
          });
        }), this.registedEditAreaLineRemovedMap.clear();
      }
    }
    setCacheIfChanged(e) {
      var t = this.getState();
      e.delayRenderCache != t.mainModel.delayRenderCache && (e.delayRenderCache = t.mainModel.delayRenderCache), this.makeSureDelayRenderCacheExists(e), e.delayRenderCache.av = e.av;
    }
    registerRefreshVisible(e) {
      this.refreshVisibleEditInstanceSet || (this.refreshVisibleEditInstanceSet = new Set()), this.refreshVisibleEditInstanceSet.add(e);
    }
    disableDelayRendering() {
      return this.requestUnsizeOnBusyCount > 30;
    }
    registerWholePageRecreated() {
      this.getTarget().deplayRenderEnabled() && (this.wholePageRecreatedFlag = !0);
    }
    forceRunProcessDelayForWholePage(e) {
      var t = this.getState().mainModel;
      return t.delayRenderCache && (t.delayRenderCache.map = {}), this.processAfterRecreateWholePage(e).then(() => (E.A.next(() => {
        this.getTarget().refreshSpellCheckAll(), this.getTarget().processLineTagNumbering(), this.getTarget().processAnchorTagAndRef();
      }), !0));
    }
    processAfterUpdate(e) {
      if (this.disableDelayRendering()) return Promise.resolve(!1);
      if (!this.getTarget().deplayRenderEnabled()) return Promise.resolve(!1);
      if (this.procesEditAreaLineRemoved(), this.wholePageRecreatedFlag) return this.wholePageRecreatedFlag = !1, this.unSizedEditInstanceSet = void 0, this.refreshVisibleEditInstanceSet = void 0, this.forceRunProcessDelayForWholePage(e);
      if (this.unSizedEditInstanceSet) {
        var t = this.unSizedEditInstanceSet,
          r = this.refreshVisibleEditInstanceSet;
        return this.unSizedEditInstanceSet = void 0, this.refreshVisibleEditInstanceSet = void 0, this.processUnsizedEditInstances(e, t, r || new Set()).then(() => (this.getTarget().processLineTagNumbering(), this.getTarget().processAnchorTagAndRef(), this.getTarget().refreshSpellCheckPosition(), !0));
      }
      if (this.refreshVisibleEditInstanceSet) {
        var n = this.refreshVisibleEditInstanceSet;
        return this.refreshVisibleEditInstanceSet = void 0, this.refreshViewWithEditors(e, Array.from(n)).then(() => !1);
      }
      return Promise.resolve(!1);
    }
    mergeSet(e, t) {
      return e = e || new Set(), t = t || new Set(), new Set(Array.from(e).concat(Array.from(t)));
    }
    processUnsizedEditInstances(e, t, r) {
      return this.isBusy ? Promise.resolve() : (this.isBusy = !0, E.A.nextMicroPromise().then(() => {
        var n = Array.from(t.values());
        if (n.length > 10 || n.some(e => e.getLineCount() > Tp.A.numberOfLinesToUseLazySeparateLines)) return this.showProgress(), Dp.calculateForUnsizeOnly(e, n, (e, t) => {
          this.mtProcessingBarRef.setProgress(e / t);
        }).then(() => (this.mtProcessingBarRef.hide(), this.refreshViewWithEditors(e, Array.from(this.editMtAllInstanceSet))));
        var i = Array.from(this.mergeSet(t, r));
        return Dp.calculateForUnsizeOnly(e, i).then(t => this.refreshViewWithEditors(e, t));
      }).then(() => {
        this.isBusy = !1;
      }).catch(e => {
        var t;
        console.error(e), null === (t = this.mtProcessingBarRef) || void 0 === t || t.hide(), this.isBusy = !1;
      }));
    }
    showProgress() {
      var e = u.Yt(this.getTarget().getScrollSelector())[0].getBoundingClientRect();
      this.mtProcessingBarRef.show(e.left + e.width / 2);
    }
    processAfterRecreateWholePage(e) {
      return this.isBusy ? Promise.resolve() : (this.isBusy = !0, E.A.nextMicroPromise().then(() => (this.showProgress(), Dp.recalculateAll(e, Array.from(this.editMtAllInstanceSet), (e, t) => {
        this.mtProcessingBarRef.setProgress(e / t);
      }))).then(() => (this.mtProcessingBarRef.hide(), this.refreshViewWithEditors(e, Array.from(this.editMtAllInstanceSet)))).then(() => {
        this.isBusy = !1;
      }).catch(e => {
        var t;
        console.error(e), null === (t = this.mtProcessingBarRef) || void 0 === t || t.hide(), this.isBusy = !1;
      }));
    }
    registerRecalculateSize(e) {
      if (!this.disableDelayRendering()) {
        if (this.isBusy) return this.requestUnsizeOnBusyCount++, console.error("Something wrong here"), void (this.requestUnsizeOnBusyCount > 30 && (E.A.next(() => {
          this.getTarget().requestRecreateWholePage();
        }, 1e3), console.error("we should disable lazy rendering")));
        this.unSizedEditInstanceSet || (this.unSizedEditInstanceSet = new Set()), this.unSizedEditInstanceSet.add(e);
      }
    }
    renderProcessingDialog() {
      return c().createElement(Ep, {
        ref: e => this.mtProcessingBarRef = e
      });
    }
  }
  var Bp = r(72341);
  class Fp extends sn {
    constructor(e, t) {
      super(e), (0, n.A)(this, "excludeLazyStore", void 0), (0, n.A)(this, "anchorTagChanged", !1), (0, n.A)(this, "anchorTagRefChanged", !1), this.excludeLazyStore = t;
    }
    processRefAnchor() {
      this.anchorTagChanged ? (this.anchorTagChanged = !1, this.anchorTagRefChanged = !1, Bp.t.runAll(this.getTarget().getMathTypeHtmlElement())) : this.anchorTagRefChanged && (this.anchorTagRefChanged = !1, Bp.t.runRefOnly(this.getTarget().getMathTypeHtmlElement()));
    }
    registerRefSymbol(e) {
      this.storeAnchorInfo(e), this.anchorTagRefChanged = !0;
    }
    notifyRefSymbolChange() {
      this.anchorTagRefChanged = !0;
    }
    unregisterRefSymbol(e) {
      this.anchorTagRefChanged = !0, this.unregisterAnchor(e);
    }
    registerSymbol(e) {
      this.storeAnchorInfo(e), this.anchorTagChanged = !0;
    }
    storeAnchorInfo(e) {
      if (e.lazyInfo) {
        var t = e.lazyInfo,
          r = t.editorId,
          n = t.lineId;
        this.excludeLazyStore.add(r, n, e.blockId), this.getTarget().disableLazy(r, n);
      }
    }
    notifySymbolChange(e) {
      this.anchorTagChanged = !0;
    }
    unregisterSymbol(e) {
      this.anchorTagChanged = !0, this.unregisterAnchor(e);
    }
    unregisterAnchor(e) {
      this.excludeLazyStore.remove(e, (e, t) => {
        this.getTarget().resumeLazy(e, t);
      });
    }
  }
  class jp {
    select(e) {
      var t = [];
      return u.YG(e, "line.section.text-mode").forEach((e, r) => {
        var n = u.YG(e, ">prefix"),
          i = u.yR(u.YG(e, ">blocks"));
        i.length > 50 && (i = i.substr(0, 47) + "..."), t.push({
          lineId: e.getAttribute("data-line-id"),
          prefix: u.yR(n),
          text: i
        });
      }), t;
    }
  }
  var _p = new jp();
  function Np(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function zp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Np(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Hp = Zr.A.getModalDialog();
  class Wp extends c().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleCommit", e => {
        this.props.onSelect(e.item.lineId);
      }), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      });
      var t = this.buildGroups();
      this.state = {
        groups: t,
        selectedItem: {
          group: t[0],
          item: f().last(t[0].items)
        }
      };
    }
    buildGroups() {
      var e;
      return [{
        name: "root",
        items: _p.select(this.props.requestRootEditor())
      }];
    }
    renderItemSelect() {
      return this.state.groups[0].items.length <= 0 ? c().createElement("div", {
        style: {
          padding: 10,
          fontSize: 14,
          textAlign: "center"
        }
      }, "There is Section select") : c().createElement(Ha.A, {
        mainStyle: {
          paddingBottom: 0
        },
        itemContainerStyle: {
          width: "100%",
          border: "1px solid transparent"
        },
        itemContainerStyleSelected: {
          width: "100%",
          background: "var(--ui-selection, rgb(227, 253, 225))",
          border: "1px dotted var(--ui-border, gray)"
        },
        groups: this.state.groups,
        scrollToSelectedOnOpen: !0,
        preventHover: !0,
        numberOfItemsPerLine: 1,
        renderGroupName: () => null,
        renderItem: (e, t, r) => c().createElement("div", {
          style: {
            padding: 5,
            cursor: "pointer"
          }
        }, c().createElement("span", {
          style: {
            fontWeight: "bold",
            paddingRight: "0.3em"
          }
        }, e.prefix), c().createElement("span", null, e.text)),
        selected: this.state.selectedItem,
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit
      });
    }
    render() {
      return c().createElement(Hp, {
        show: !0
      }, c().createElement(zo.A, {
        title: "Select section",
        size: "medium",
        scroll: "body",
        headerHidden: !0,
        style: zp({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 400,
          maxHeight: 250
        }, Zr.A.getCenterStyle()),
        backDrop: !0,
        onCancel: this.props.onClose,
        onClose: this.props.onClose,
        showOk: !1,
        show: !0
      }, c().createElement("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          fontSize: 13
        },
        className: "section-ref-select"
      }, this.renderItemSelect())));
    }
  }
  class Vp {
    build(e, t) {
      if (!(t.size <= 0)) {
        var r = new Set();
        u.jS(u.jS(e, "area-container"), "line.section").forEach((e, n) => {
          var i = e.getAttribute("data-line-id");
          if (i && t.has(i)) {
            r.add(i);
            var o = t.get(i),
              s = u.yR(u.jS(e, "prefix")).trim(),
              a = e.reactInstance.getLineData();
            this.updateForSectionLine(s, a, o);
          }
        }), r.size < t.size && Array.from(t.keys()).forEach(e => {
          r.has(e) || t.get(e).forEach(e => e.setDisplayRendered("?"));
        });
      }
    }
    updateTextFor(e, t, r) {
      if (!(r.size <= 0)) {
        var n = r.get(t.id);
        if (n) {
          var i = u.yR(u.jS(e, "prefix")).trim();
          this.updateForSectionLine(i, t, n);
        }
      }
    }
    updateForSectionLine(e, t, r) {
      var n;
      r.forEach(r => {
        if (r.setDisplayRendered) {
          var i = r.getModel().refSettings.display || "Section ${prefix}";
          i.includes("${text}") && void 0 === n && (n = t.blocks.map(e => Ht.A.isTextBlockModel(e) ? e.text : " ").join()), console.log("set: ", n);
          var o = this.resolveDisplay(i, e, n);
          r.setDisplayRendered(o);
        }
      });
    }
    resolveDisplay(e, t, r) {
      return e.split("${prefix}").join(t).split("${text}").join(r);
    }
  }
  var Up = new Vp();
  function qp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Gp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? qp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Kp extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "sectionRefInstanceMap", new Map()), (0, n.A)(this, "shouldUpdate", void 0), (0, n.A)(this, "handleSectionRefAction", e => {
        if ("section-line-text-change" != e.type || this.shouldUpdate) switch (this.shouldUpdate = !0, e.type) {
          case "register":
            var t,
              r = null === (t = e.instance.getModel().refSettings) || void 0 === t ? void 0 : t.sectionLineId;
            r && (this.sectionRefInstanceMap.has(r) || this.sectionRefInstanceMap.set(r, new Set()), this.sectionRefInstanceMap.get(r).add(e.instance));
            break;
          case "deregister":
            var n,
              i = null === (n = e.instance.getModel().refSettings) || void 0 === n ? void 0 : n.sectionLineId;
            i && this.sectionRefInstanceMap.has(i) && this.sectionRefInstanceMap.get(i).delete(e.instance);
        } else Up.updateTextFor(e.htmlLine, e.line, this.sectionRefInstanceMap);
      }), (0, n.A)(this, "handleSectionLineSelect", e => {
        console.log(e);
        var t,
          r = Gp(Gp({}, Je.A.getByName("\\section-ref")), {}, {
            tagId: e
          });
        this.handleClose(), E.A.next(() => {
          this.getTarget().insertBySymbolInfo(r);
        });
      }), (0, n.A)(this, "handleClose", () => {
        this.getTarget().closeRender(this);
      });
    }
    render() {
      return c().createElement(Wp, {
        onClose: () => {
          this.handleClose(), this.getTarget().hidenInputFocus(!0);
        },
        onSelect: this.handleSectionLineSelect,
        requestRootEditor: this.getTarget().getEditorHtmlElement
      });
    }
    notifySectionPrefixChange() {
      this.shouldUpdate = !0;
    }
    process() {
      this.shouldUpdate && (this.shouldUpdate = !1, Up.build(this.getTarget().getEditorHtmlElement(), this.sectionRefInstanceMap));
    }
    showSectionRefDialog() {
      this.getTarget().requestRender(this);
    }
  }
  var Zp = r(73856),
    Yp = r(91614),
    Qp = r(46774);
  function Jp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Xp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Jp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class $p extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        selectedPos: 0,
        colors: this.props.presetColors || Qp.r
      }), (0, n.A)(this, "FakeModalDialog", Zr.A.getModalDialog()), (0, n.A)(this, "handleOk", () => {
        this.props.onClose(this.state.colors);
      });
    }
    renderContent() {
      var e = this.state.colors[this.state.selectedPos];
      return console.log(e), c().createElement("div", null, this.renderPresets(), c().createElement(Yp.Ay, {
        presetColors: [],
        disableAlpha: !0,
        color: e,
        onChange: e => {
          var t = dt.A.setIndex(this.state.colors, this.state.selectedPos, e.hex);
          this.setState({
            colors: t
          });
        }
      }));
    }
    renderPresets() {
      var e = {
          width: 16,
          height: 16,
          margin: "0px 10px 10px 0px"
        },
        t = {
          height: "100%",
          width: "100%",
          cursor: "pointer",
          position: "relative",
          outline: "none",
          borderRadius: 3,
          boxShadow: "rgb(0 0 0 / 15%) 0px 0px 0px 1px inset",
          boxSizing: "border-box"
        };
      return c().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: 200,
          background: "var(--ui-surface, rgb(255, 255, 255))",
          borderRadius: 4,
          boxShadow: "rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",
          marginBottom: 20,
          padding: 10
        }
      }, c().createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          marginRight: -15
        }
      }, this.state.colors.map((r, n) => {
        var i = Xp(Xp({}, t), {}, {
            background: r
          }),
          o = n == this.state.selectedPos ? c().createElement("div", {
            style: {
              width: 20,
              height: 20,
              border: "2px solid var(--ui-border, #252525)",
              position: "absolute",
              left: -4,
              top: -4,
              borderRadius: 4
            }
          }) : void 0;
        return c().createElement("div", {
          key: n,
          style: e,
          className: "preset-color-item"
        }, c().createElement("span", {
          style: {
            position: "relative"
          }
        }, o, c().createElement("div", {
          style: i,
          onClick: () => {
            this.setState({
              selectedPos: n
            });
          }
        })));
      })), c().createElement("button", {
        className: "btn-normal",
        style: {
          borderRadius: 3
        },
        onClick: () => {
          this.setState({
            colors: Qp.r
          });
        }
      }, "Reset"));
    }
    render() {
      return c().createElement(this.FakeModalDialog, {
        show: !0
      }, c().createElement(zo.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Change Preset Color",
        style: Xp({
          minWidth: 200,
          minHeight: 150,
          width: "auto",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, Zr.A.getCenterStyle()),
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: this.handleOk,
        onCancel: () => {
          this.props.onClose();
        },
        okLabel: "Ok",
        show: !0
      }, this.renderContent()));
    }
  }
  class eu extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "showType", void 0), (0, n.A)(this, "showColorPresetManager", () => {
        this.showType = "color-preset-manager", this.getTarget().requestRender(this);
      });
    }
    render() {
      if ("color-preset-manager" == this.showType) {
        var e = this.target.getFixedContextHandler().getMtFuncs();
        return c().createElement($p, {
          presetColors: e.requestColorPickerSettings().presetColors,
          onClose: e => {
            e && this.target.props.onUserSettingsChange && this.target.props.onUserSettingsChange({
              type: "preset-colors",
              colors: e
            }), this.getTarget().closeRender(this);
          }
        });
      }
    }
  }
  function tu(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = ru(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function ru(e, t) {
    if (e) {
      if ("string" == typeof e) return nu(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? nu(e, t) : void 0;
    }
  }
  function nu(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function iu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ou(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? iu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class su {
    constructor(e, t, r, i, o, s) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "pageSettingsHandler", void 0), (0, n.A)(this, "theoremManagementHandler", void 0), (0, n.A)(this, "delayRenderHandler", void 0), (0, n.A)(this, "changeSessionHandler", void 0), (0, n.A)(this, "mathTagHandler", void 0), (0, n.A)(this, "rootBatchUpdater", void 0), this.target = e, this.pageSettingsHandler = t, this.theoremManagementHandler = r, this.delayRenderHandler = i, this.changeSessionHandler = o, this.mathTagHandler = s;
    }
    set(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
      w.A.clearDocumentCorruptionState();
      var i = this.target;
      if (!i.isBusy() || (console.warn("Could not change Model in busy"), i.showPreventInputMessage(), Xe.A.inProd())) {
        var o = this.handleModelChange(e),
          s = (0, Wt.A)(o, 2),
          a = s[0],
          l = s[1];
        if (l && "unchanged" == t && "unchanged" == r) n ? this.targetSetState(ou({
          mainModel: a
        }, n)) : this.targetSetState({
          mainModel: a
        });else {
          var c = [],
            d = [];
          if ("unchanged" != t) {
            var h = a.pageSettings || {};
            c = this.executePageSettingsChanged(t, h), a.pageSettings = t, this.changeSessionHandler.setSessionValue("pageSettings", void 0);
          }
          if ("unchanged" != r) {
            var p = a.theoremInfo || {
              theorems: []
            };
            d = this.executeTheoremInfoChanged(r, p), a.theoremInfo = r;
          }
          var u = this.mergeChangeType(c, d);
          if (l || !(u.length <= 0)) {
            var g = this.mergeStateIfRequire(l ? a : void 0, n);
            if (u.some(e => "all" == e)) {
              var m = "nochange" == g ? "force" : g;
              return this.changeSessionHandler.persistableSet("raiseModelChange", !0), void this.requestRecreateWholePage(m);
            }
            if (u.some(e => "layout-change" == e)) return this.changeSessionHandler.setSessionValue("regionalActions", u), this.changeSessionHandler.persistableSet("raiseModelChange", !0), void ("nochange" == g ? i.forceUpdate() : this.targetSetState(g));
            "nochange" == g ? (this.handleRegionalChange(u), this.raiseModelChange(a)) : this.targetSetState(g);
          }
        }
      }
    }
    raiseModelChange(e) {
      this.target.props.onModelChanged && this.target.props.onModelChanged(e);
    }
    targetSetState(e) {
      this.target.setState(e);
    }
    handleRegionalChange(e) {
      var t = this.target,
        r = tu(e),
        n;
      try {
        for (r.s(); !(n = r.n()).done;) {
          var i = n.value;
          switch (i) {
            case "all":
            case "none":
              break;
            case "layout-change":
              var o;
              if (t.props.onPageSizeChanged) t.props.onPageSizeChanged(null === (o = this.target.state.mainModel.pageSettings) || void 0 === o ? void 0 : o.pageSize);
              t.notifyLayoutChange();
              break;
            case "caption-numbering":
              t.forceAllCaptionNumbering();
              break;
            case "page-section":
              t.refreshDocForPageSection();
              break;
            case "spell-check":
              t.requestSpellCheckLanguageChange();
              break;
            case "theorem-numbering":
              this.theoremManagementHandler.processTheoremNumbering(!0, !0);
              break;
            case "math-tag-ref-force-update":
              this.mathTagHandler.forceUpdateTagsAll();
              break;
            default:
              (0, Dh.d)(i);
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    mergeStateIfRequire(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      return e || t ? t ? e ? ou({
        mainModel: e
      }, t) : t : {
        mainModel: e
      } : "nochange";
    }
    requestRecreateWholePage(e) {
      var t = this.target;
      t.changeNextMathKey(), this.changeSessionHandler.end(), t.refreshFixedContextHandler(), this.delayRenderHandler.registerWholePageRecreated(), "force" == e ? t.forceUpdate() : this.targetSetState(e);
    }
    handleModelChange(e) {
      if ("unchanged" != e) {
        !e || 2 == e.___version && 2 == e.version || (e.prevVersion = e.___version, e.___version = 2, e.version = 2);
        var t = this.target.state.mainModel;
        if (e && t && e.id == t.id) {
          var r = t.av || 1;
          e.av = r + 1, this.pageSettingsHandler.setSettingsIfChanged(e), this.theoremManagementHandler.setTheoremIfChanged(e), this.delayRenderHandler.setCacheIfChanged(e);
        }
        return this.rootBatchUpdater.isDelayLazyBusy() && this.rootBatchUpdater.upgradeDelayToRoot(), [e, !0];
      }
      return [this.target.state.mainModel, !1];
    }
    executePageSettingsChanged(e, t) {
      if (e == t) return [];
      for (var r = {
          worksheetLabels: !0,
          fontName: !0,
          fontSize: !0,
          mathFontSize: !0,
          mathFontName: !0,
          isDarkMode: !0,
          codeSectionFontSize: !0,
          subMathFontName: !0,
          bracketSettings: !0,
          compatibility: !0,
          textLineHeight: !0,
          mathLineHeight: !0,
          disableDelayRendering: !0,
          disableDelayInDiagram: !0,
          paragraph: !0
        }, n = Object.keys(r), i = 0; i < n.length; i++) {
        var o = n[i];
        if (t[o] != e[o]) return ["all"];
      }
      var s = [];
      return t.spellCheck != e.spellCheck && s.push("spell-check"), t.imageCaptions == e.imageCaptions && t.tableCaptions == e.tableCaptions && t.diagramCaptions == e.diagramCaptions || s.push("caption-numbering"), t.pageSection != e.pageSection && s.push("page-section"), t.pageSize != e.pageSize && s.push("layout-change"), t.mathTagRefs == e.mathTagRefs && t.mathTags == e.mathTags || s.push("math-tag-ref-force-update"), s;
    }
    executeTheoremInfoChanged(e, t) {
      var r, n;
      return e == t ? [] : (null == t || null === (r = t.theoremContentStyle) || void 0 === r ? void 0 : r.isItalic) !== (null == e || null === (n = e.theoremContentStyle) || void 0 === n ? void 0 : n.isItalic) || this.anyTheoremContentItalicChange(e, t) ? ["all"] : ["theorem-numbering"];
    }
    anyTheoremContentItalicChange(e, t) {
      var r;
      return !(!e || !t) && (null === (r = e.theorems) || void 0 === r ? void 0 : r.some(e => {
        var r,
          n = null === (r = t.theorems) || void 0 === r ? void 0 : r.find(t => t.key == e.key);
        return n && n.italicContent != e.italicContent;
      }));
    }
    mergeChangeType(e, t) {
      return e = e.filter(e => "none" != e), t = t.filter(e => "none" != e), e.some(e => "all" == e) ? (console.warn("require refresh whole doc", e), ["all"]) : t.some(e => "all" == e) ? (console.warn("require refresh whole doc", t), ["all"]) : f().uniq(e.concat(t));
    }
  }
  var au = r(39600);
  class lu extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "lastPosition", void 0), (0, n.A)(this, "dragEnterCounter", 0), (0, n.A)(this, "currentSelectedImage", void 0), (0, n.A)(this, "requestImageSelection", (e, t, r) => {
        Xe.A.isUploadHandleByService() ? Ci.A.getService().requestFileUploadFromService().then(e => {
          t(e, r);
        }) : (this.currentSelectedImage = {
          url: e,
          fromLibrary: !1,
          cb: t,
          customData: r
        }, this.getTarget().requestRender(this));
      }), (0, n.A)(this, "onUrlChanged", (e, t) => {
        this.currentSelectedImage && (this.currentSelectedImage.cb(e, t), this.currentSelectedImage = null), this.getTarget().closeRender(this);
      }), (0, n.A)(this, "handleDragEnter", e => {
        e.preventDefault(), 0 == this.dragEnterCounter && this.handleDragAction(), this.dragEnterCounter++;
      }), (0, n.A)(this, "handleDragLeave", e => {
        e.preventDefault(), this.dragEnterCounter--, 0 == this.dragEnterCounter && this.handleStopDragAction();
      }), (0, n.A)(this, "handleDragOver", e => {
        if (e.preventDefault(), !this.lastPosition || e.clientX != this.lastPosition.left || e.clientY != this.lastPosition.top) {
          this.lastPosition = {
            left: e.clientX,
            top: e.clientY
          };
          var t = q.T.getFromAbsPos(e.clientX, e.clientY, this.getTarget().getDocZoomContainer());
          this.getTarget().handleSelectFromPosition(e.target, t, !1);
        }
      }), (0, n.A)(this, "handleDrop", e => {
        e.preventDefault(), e.stopPropagation(), this.handleStopDragAction(), xi.handlePasteAsFile(this.getTarget(), e.dataTransfer, Li.A.getLeftTopFromEvent(e));
      });
    }
    handleDragAction() {
      u.hS(this.getTarget().getMathTypeHtmlElement(), "outline", "1px solid green"), u.hS(".text-cursor", "visibility", "visible");
    }
    handleStopDragAction() {
      this.dragEnterCounter = 0, u.hS(this.getTarget().getMathTypeHtmlElement(), "outline", ""), u.hS(".text-cursor", "visibility", "hidden");
    }
    render() {
      if (this.currentSelectedImage) {
        var e = this.currentSelectedImage;
        return c().createElement(au.A, {
          url: e.url,
          fromLibrary: e.fromLibrary,
          customData: e.customData,
          onCancel: () => {
            this.currentSelectedImage = null, this.getTarget().closeRender(this);
          },
          onUrlChanged: this.onUrlChanged
        });
      }
    }
  }
  function cu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function du(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? cu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class hu extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "handleKeyDown", e => {
        switch (e.keyCode) {
          case 37:
            return this.props.onArrow("left");
          case 38:
            return this.props.onArrow("top");
          case 39:
            return this.props.onArrow("right");
          case 40:
            return this.props.onArrow("bottom");
          case 13:
            return this.props.onArrow("enter");
        }
      });
    }
    componentDidMount() {
      this.mounted = !0, E.A.waitALitteWhile(() => {
        var e;
        this.mounted && h().findDOMNode(this).focus();
      });
    }
    componentWillUnmount() {
      this.mounted = !1;
    }
    render() {
      return c().createElement("div", {
        style: du(du({}, this.props.style), {}, {
          outline: "none"
        }),
        tabIndex: -1,
        onKeyDown: this.handleKeyDown
      }, this.props.children);
    }
  }
  function pu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function uu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? pu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var gu = Zr.A.getModalDialog();
  class mu extends c().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        selected: {
          row: 0,
          column: 0
        }
      }), (0, n.A)(this, "models", [this.make({
        hLines: [{
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }],
        vLines: [{
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }]
      }), this.make({}), this.make({
        hLines: [{
          nOfLines: 1
        }, {
          nOfLines: 2
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }],
        vLines: [{
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }, {
          nOfLines: 1
        }]
      }, !0), this.make({
        hLines: [{
          nOfLines: 1,
          booktabRule: !0
        }, {
          nOfLines: 1,
          booktabRule: !0
        }, null, {
          nOfLines: 1,
          booktabRule: !0
        }]
      }, !1), this.make({
        hLines: [{
          nOfLines: 1,
          booktabRule: !0
        }, {
          nOfLines: 1,
          booktabRule: !0
        }, null, {
          nOfLines: 1,
          booktabRule: !0
        }]
      }, !0)]), (0, n.A)(this, "handleArrowKey", e => {
        var t = Math.floor((this.models.length - 1) / 4),
          r = this.state.selected,
          n = r.row,
          i,
          o = r.column,
          s = n;
        "left" == e && (o - 1 < 0 ? s > 0 && (o = 3, s--) : o--), "top" == e && s > 0 && s--, "right" == e && (o + 1 > this.maxColumnOf(s) ? s < t && (o = 0, s++) : o++), "bottom" == e && s + 1 <= t && (s++, o = Math.min(o, this.maxColumnOf(s))), "enter" != e ? this.setState({
          selected: {
            row: s,
            column: Math.max(0, o)
          }
        }) : this.props.onOk(this.getCurrentModel());
      });
    }
    make(e, t) {
      var r = uu({
        id: vt.w.nextId(),
        type: "composite",
        text: "\\latex-table",
        column: 3,
        row: 3,
        elements: {
          "0_0": sr.A.createEmptyEditor(),
          "0_1": sr.A.createEmptyEditor(),
          "0_2": sr.A.createEmptyEditor(),
          "1_0": sr.A.createEmptyEditor(),
          "1_1": sr.A.createEmptyEditor(),
          "1_2": sr.A.createEmptyEditor(),
          "2_0": sr.A.createEmptyEditor(),
          "2_1": sr.A.createEmptyEditor(),
          "2_2": sr.A.createEmptyEditor()
        }
      }, e);
      return t && (r.elements["0_0"].colSpan = 3, r.elements["0_1"].hidden = !0, r.elements["0_2"].hidden = !0), r;
    }
    getSvgStyle(e, t) {
      return {
        border: e == this.state.selected.row && t == this.state.selected.column ? "2px solid #47af4c" : "2px solid transparent",
        width: 110,
        height: 75
      };
    }
    maxColumnOf(e) {
      return Math.min(4, this.models.length - 4 * e) - 1;
    }
    getCurrentModel() {
      var e = 4 * this.state.selected.row + this.state.selected.column;
      return this.models[e];
    }
    render() {
      return c().createElement(gu, {
        show: !0
      }, c().createElement(zo.A, {
        title: "LaTeX table",
        size: "medium",
        scroll: "body",
        style: {
          width: 500,
          maxWidth: "95vw"
        },
        noLabel: "Cancel",
        okLabel: "OK",
        message: "",
        isProgressing: !1,
        onOk: () => {
          this.props.onOk(this.getCurrentModel());
        },
        onCancel: this.props.onClose,
        onNo: this.props.onClose,
        isOkDisabled: !1,
        show: !0
      }, c().createElement("div", null, c().createElement(hu, {
        onArrow: this.handleArrowKey,
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: 5,
          flexWrap: "wrap"
        }
      }, c().createElement("svg", {
        style: this.getSvgStyle(0, 0),
        onClick: () => this.setState({
          selected: {
            row: 0,
            column: 0
          }
        })
      }, c().createElement("g", {
        style: {
          stroke: "var(--ui-text, black)"
        }
      }, c().createElement("path", {
        d: "M10,10 L100,10"
      }), c().createElement("path", {
        d: "M10,25 L100,25"
      }), c().createElement("path", {
        d: "M10,40 L100,40"
      }), c().createElement("path", {
        d: "M10,55 L100,55"
      }), c().createElement("path", {
        d: "M10,10 L10,55"
      }), c().createElement("path", {
        d: "M40,10 L40,55"
      }), c().createElement("path", {
        d: "M70,10 L70,55"
      }), c().createElement("path", {
        d: "M100,10 L100,55"
      }), this.box(14, 14), this.box(44, 14), this.box(74, 14), this.box(14, 29), this.box(44, 29), this.box(74, 29), this.box(14, 44), this.box(44, 44), this.box(74, 44))), c().createElement("svg", {
        style: this.getSvgStyle(0, 1),
        onClick: () => this.setState({
          selected: {
            row: 0,
            column: 1
          }
        })
      }, c().createElement("g", {
        style: {
          stroke: "var(--ui-text, black)"
        }
      }, this.box(14, 14), this.box(44, 14), this.box(74, 14), this.box(14, 29), this.box(44, 29), this.box(74, 29), this.box(14, 44), this.box(44, 44), this.box(74, 44))), c().createElement("svg", {
        style: this.getSvgStyle(0, 2),
        onClick: () => this.setState({
          selected: {
            row: 0,
            column: 2
          }
        })
      }, c().createElement("g", {
        style: {
          stroke: "var(--ui-text, black)"
        }
      }, c().createElement("path", {
        d: "M10,10 L100,10"
      }), c().createElement("path", {
        d: "M10,25 L100,25"
      }), c().createElement("path", {
        d: "M10,28 L100,28"
      }), c().createElement("path", {
        d: "M10,43 L100,43"
      }), c().createElement("path", {
        d: "M10,58 L100,58"
      }), c().createElement("path", {
        d: "M10,10 L10,25"
      }), c().createElement("path", {
        d: "M10,28 L10,58"
      }), c().createElement("path", {
        d: "M40,28 L40,58"
      }), c().createElement("path", {
        d: "M70,28 L70,58"
      }), c().createElement("path", {
        d: "M100,10 L100,25"
      }), c().createElement("path", {
        d: "M100,28 L100,58"
      }), this.box(14, 14, 82), this.box(14, 32), this.box(44, 32), this.box(74, 32), this.box(14, 47), this.box(44, 47), this.box(74, 47))), c().createElement("svg", {
        style: this.getSvgStyle(0, 3),
        onClick: () => this.setState({
          selected: {
            row: 0,
            column: 3
          }
        })
      }, c().createElement("g", {
        style: {
          stroke: "var(--ui-text, black)"
        }
      }, c().createElement("path", {
        d: "M10,10 L100,10",
        style: {
          strokeWidth: 2
        }
      }), c().createElement("path", {
        d: "M10,29 L100,29"
      }), c().createElement("path", {
        d: "M10,62 L100,62",
        style: {
          strokeWidth: 2
        }
      }), this.box(14, 16), this.box(44, 16), this.box(74, 16), this.box(14, 35), this.box(44, 35), this.box(74, 35), this.box(14, 48), this.box(44, 48), this.box(74, 48))), c().createElement("svg", {
        style: this.getSvgStyle(1, 0),
        onClick: () => this.setState({
          selected: {
            row: 1,
            column: 0
          }
        })
      }, c().createElement("g", {
        style: {
          stroke: "var(--ui-text, black)"
        }
      }, c().createElement("path", {
        d: "M10,10 L100,10",
        style: {
          strokeWidth: 2
        }
      }), c().createElement("path", {
        d: "M10,29 L100,29"
      }), c().createElement("path", {
        d: "M10,62 L100,62",
        style: {
          strokeWidth: 2
        }
      }), this.box(14, 16, 82), this.box(44, 16), this.box(74, 16), this.box(14, 35), this.box(44, 35), this.box(74, 35), this.box(14, 48), this.box(44, 48), this.box(74, 48)))))));
    }
    box(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 22;
      return c().createElement("rect", {
        x: e,
        y: t,
        width: r,
        height: "7",
        style: {
          fill: "var(--ui-text-disabled, lightgray)",
          stroke: "none"
        }
      });
    }
  }
  class fu extends sn {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleClose", () => {
        this.getTarget().closeRender(this);
      }), (0, n.A)(this, "handleOk", e => {
        var t = this.getTarget(),
          r = t.getController(),
          n = sr.A.createLineFromBlock(f().cloneDeep(e));
        n.style = {
          align: "center"
        };
        var i = [{
            id: vt.w.nextId(),
            blocks: []
          }, n, {
            id: vt.w.nextId(),
            blocks: []
          }],
          o = r.insertLines(i, t.getContainerModel()),
          s = f().cloneDeep(o.editorChangeInfo.selected),
          a = Ze.A.findLeafSelected(s);
        a.lineIndex--, a.charIndex = 0, a.key = "0_0", a.selected = {
          lineIndex: 0,
          charIndex: 0
        }, o.editorChangeInfo.selected = s, t.handleResult(o), t.closeRender(this);
      });
    }
    render() {
      return c().createElement(mu, {
        onClose: this.handleClose,
        onOk: this.handleOk
      });
    }
    showLatexTemplateDialog() {
      this.getTarget().requestRender(this);
    }
  }
  class yu extends Error {
    constructor(e) {
      super(e);
    }
  }
  class vu {
    correctIfChange(e, t, r) {
      if (t == r) return t;
      var n = this.correct(e, t);
      return this.isTheSameLineAndChar(n, t) ? t : n;
    }
    correct(e, t) {
      return t ? this.build(e, t) : t;
    }
    isTheSameLineAndChar(e, t) {
      return e == t || !!e == !!t && e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.key == t.key && !!e.selected == !!t.selected && (!e.selected || e.key == t.key && this.isTheSameLineAndChar(e.selected, t.selected));
    }
    build(e, t) {
      var r = t.lineIndex;
      e.lines[r] || (r = e.lines.length - 1);
      var n = t.charIndex,
        i = e.lines[r],
        o;
      if (!t.selected) return {
        lineIndex: r,
        charIndex: Math.min(n, Ze.A.getTotalChar(i.blocks))
      };
      var s = Ze.A.blockFromIndex(i, n);
      if (!s) return {
        lineIndex: r,
        charIndex: Math.min(n, Ze.A.getTotalChar(i.blocks))
      };
      if ("composite" != s.block.type) return {
        lineIndex: r,
        charIndex: Math.min(n, Ze.A.getTotalChar(i.blocks))
      };
      var a = s.block.elements[t.key];
      return a ? {
        lineIndex: r,
        charIndex: n,
        key: t.key,
        selected: this.build(a, t.selected)
      } : {
        lineIndex: r,
        charIndex: Math.min(n, Ze.A.getTotalChar(i.blocks))
      };
    }
  }
  const bu = new vu();
  class xu {
    constructor() {
      (0, n.A)(this, "nextCycleLastRendering", !1);
    }
    isNextCycleLastRendering() {
      return this.nextCycleLastRendering;
    }
    nextCycleIfRequired(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      if (this.nextCycleLastRendering) return E.A.next(e, t);
      e();
    }
  }
  var Cu = {};
  class Su {
    constructor(e, t) {
      (0, n.A)(this, "key", void 0), this.key = e, null == Cu[e] && t && (Cu[e] = t);
    }
    get() {
      return Cu[this.key];
    }
    set(e) {
      return Cu[this.key] = e, e;
    }
  }
  class Au {
    constructor(e, t, r) {
      (0, n.A)(this, "batchUpdater", void 0), (0, n.A)(this, "renderingContext", void 0), (0, n.A)(this, "docPersistableDataProvider", void 0), (0, n.A)(this, "darkMode", !1), (0, n.A)(this, "codeSectionFontSize", 15), (0, n.A)(this, "mathTypeFuncs", void 0), this.batchUpdater = e, this.renderingContext = t, this.docPersistableDataProvider = r;
    }
    createPersistentData(e, t, r) {
      if ("instance" == e) return new Su(t, r);
      if ("print" != t) throw new Error("not supported");
      if (!this.docPersistableDataProvider) throw new Error("not supported document persistable data");
      return this.docPersistableDataProvider.create(t, r);
    }
    getMtFuncs() {
      return this.mathTypeFuncs;
    }
    setMtFuncs(e) {
      this.mathTypeFuncs = e;
    }
    setCodeSectionFontSize(e) {
      this.codeSectionFontSize = e;
    }
    getCodeSectionFontSize() {
      return this.codeSectionFontSize;
    }
    getRenderingContext() {
      return this.renderingContext;
    }
    getBatchUpdater() {
      return this.batchUpdater;
    }
    setDarkMode(e) {
      this.darkMode = e;
    }
    isDarkMode() {
      return this.darkMode;
    }
    getOutlineSelected() {
      return this.darkMode ? "1px solid rgba(210, 208, 208, 0.3)" : "1px solid rgba(93, 92, 92, 0.3)";
    }
    getDefaultBorderColor() {
      return this.darkMode ? "#e0e0e0" : "#000";
    }
    getMainThemeColor() {
      return this.darkMode ? "#1e1e1e" : "#FFF";
    }
    getTextCursorColor() {
      return this.darkMode ? "#e0e0e0" : "#000";
    }
    getMathCursorColor() {
      return this.darkMode ? "#03b703" : "#008000";
    }
    getSelectedMathBg() {
      return this.darkMode ? "#2a352a" : "rgb(244, 249, 244)";
    }
  }
  var wu = r(3897);
  class Eu {
    scan(e) {
      var t = {
        insideDiagram: !1,
        insideRawLatex: !1,
        insideTextSymbol: !1,
        insideTheorem: !1,
        insideZSpec: !1,
        isAtPlotCases: !1,
        isAtTextModeGroup: !1,
        isAtLongDivision: !1,
        quickRowColumnInsertSupport: !1,
        isAtTabularCell: !1,
        isLastTabularCell: !1,
        isAtTabularCellPreferSingleLine: !1,
        isTextMode: !1,
        isRootLineSelected: !1,
        isAtCaption: !1,
        isAtUnderlineSection: !1,
        insideCodeSection: !1,
        insideCodeSectionDarkTheme: !1,
        isRestrictedTextMode: !1,
        isRestrictedTextModeInMath: !1,
        isAtSubSuperScript: !1,
        insideSubSuperScript: !1,
        isAtBoxedContainer: !1,
        isAtBibliography: !1,
        isAtTextModeGroupInline: !1,
        selectedTableBlock: null,
        selectedMergeableTabularBlock: null,
        selectedBinomBlock: null,
        selectedLatexTableBlock: null,
        selectedLine: null,
        selectedTabularCellKeys: null,
        input: e
      };
      return e.joinSelected ? (this.traverseDown(e.model, e.joinSelected, t), t) : t;
    }
    detectByKey(e, t) {
      e == wu.A.theoremSymbolElementName && (t.insideTheorem = !0), vt.w.isStrictDiagramEditorId(e) && "caption" != e && (t.insideDiagram = !0), e == wu.A.textSymbolElementName && (t.insideTextSymbol = !0), e == wu.A.rawLatexSymbolElementName && (t.insideRawLatex = !0), "tsuperValue" != e && "tsubValue" != e || (t.insideSubSuperScript = !0);
    }
    detectTabulars(e, t, r, n) {
      if (r) {
        if (1 == n.length) {
          t.isAtTabularCell = !0, Ht.A.isTabularPreferCellAsSingleLine(e) && (t.isAtTabularCellPreferSingleLine = !0);
          var i = Q.Z.getTabularCellIndexFromKey(n[0]),
            o = i.row,
            s = i.column;
          e.row == o + 1 && e.column == s + 1 && (t.isLastTabularCell = !0);
        }
        Ht.A.isTable(e) && (t.selectedTableBlock = e), (Ht.A.isTable(e) || Ht.A.isLatexTable(e)) && (t.selectedMergeableTabularBlock = e), Ht.A.isBinom(e) && (t.selectedBinomBlock = e), Ht.A.isLatexTable(e) && (t.selectedLatexTableBlock = e), Ht.A.isPlotCases(e) && (t.isAtPlotCases = !0), Ht.A.isTable(e) || Ht.A.isBinom(e) || Ht.A.isLatexTable(e) || t.input.isCursorControlled || (t.quickRowColumnInsertSupport = !0);
      }
    }
    determineAtCurrent(e, t) {
      Ht.A.isBibBibliography(e) && (t.isAtBibliography = !0);
    }
    determineAtCompositeLeaf(e, t, r, n) {
      var i;
      ((Ht.A.isInTableNotCaption(e, r.key) || Ht.A.isLatexTable(e) || Ht.A.isTextModeGroup(e) || Ht.A.isExercise(e) || Ht.A.isTextModeGroupInline(e) || Ht.A.isTocItem(e) || Ht.A.isTheorem(e) || Ht.A.isUnderlineSection(e) || Ht.A.isBoxedContainer(e) || Ht.A.isCodeSection(e)) && (n.isTextMode = !0), Ht.A.isRawLatex(e) && (n.isTextMode = !0, n.isRestrictedTextModeInMath = !0, n.isRestrictedTextMode = !0), Ht.A.isBoxedContainer(e) && (n.isAtBoxedContainer = !0), Ht.A.isDiagramBlock(e) && "caption" == r.key && (n.isTextMode = !0, n.isAtCaption = !0), Ht.A.isInlineBoxed(e) && (n.isTextMode = !0, n.isRestrictedTextMode = !0), (Ht.A.isTextSuperScript(e) || Ht.A.isTextSubScript(e)) && (n.isRestrictedTextMode = !0, n.isTextMode = !0, n.isAtSubSuperScript = !0), (Ht.A.isImageContainerBlock(e) || Ht.A.isInlineImageBlock(e)) && (n.isTextMode = !0, n.isAtCaption = !0, n.isRestrictedTextMode = !0), Ht.A.isCodeSection(e) && (n.insideCodeSection = !0, n.insideCodeSectionDarkTheme = "tomorrow-night" == e.theme), Ht.A.isInTableCaption(e, r.key) && (n.isTextMode = !0, n.isAtCaption = !0, n.isRestrictedTextMode = !0), Ht.A.isDiagramBlock(e) && t) && t.isTextMode && (n.isTextMode = !0, n.isRestrictedTextMode = !0);
      Ht.A.isTextModeGroup(e) && (n.isAtTextModeGroup = !0), Ht.A.isUnderlineSection(e) && (n.isAtUnderlineSection = !0), Ht.A.isTextModeGroupInline(e) && (n.isAtTextModeGroupInline = !0, n.isRestrictedTextMode = !0), Ht.A.isLongDivision(e) && (n.isAtLongDivision = !0);
    }
    traverseDown(e, t, r) {
      var n = t.lineIndex,
        i = t.charIndex,
        o = !t.selected;
      o && e == r.input.model && !t.keys && (r.isTextMode = !0, r.isRootLineSelected = !0), o && (r.selectedLine = e.lines[n]), t.key && this.detectByKey(t.key, r), t.keys && (r.selectedTabularCellKeys = t.keys);
      var s = Ze.A.blockFromIndex(e.lines[n], i);
      if (s && s.block) {
        var a = s.block,
          l = !!t.selected && !t.selected.selected,
          c = a && t.selected && t.key ? a.elements[t.key] : null;
        a.type && t.selected && mt.A.isZSpec(a) && (r.insideZSpec = !0), t.keys ? (this.detectTabulars(a, r, !0, t.keys), this.determineAtCompositeLeaf(a, null, t, r)) : t.key && Q.Z.isKeyInTabularFormat(t.key) && this.detectTabulars(a, r, l, [t.key]), l && this.determineAtCompositeLeaf(a, c, t, r), t.selected ? this.traverseDown(c, t.selected, r) : this.determineAtCurrent(a, r);
      }
    }
  }
  class ku {
    constructor() {
      (0, n.A)(this, "tokens", new Set()), (0, n.A)(this, "handleFinished", (e, t) => {
        this.tokens.delete(e), t && console.warn("Timeout on processing", e.tag);
      });
    }
    isBusy() {
      return this.tokens.size > 0;
    }
    acquire(e) {
      var t,
        r = new Ou(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3, this.handleFinished);
      return this.tokens.add(r), r;
    }
  }
  class Ou {
    constructor(e, t, r) {
      (0, n.A)(this, "tag", void 0), (0, n.A)(this, "finishFunc", void 0), (0, n.A)(this, "timeoutId", void 0), (0, n.A)(this, "finishCalled", void 0), this.tag = e, this.finishFunc = r, this.timeoutId = setTimeout(() => {
        this.finishCalled || (this.finishCalled = !0, this.finishFunc(this, !0));
      }, t);
    }
    finish() {
      this.finishCalled || (this.finishCalled = !0, this.finishFunc(this, !1), clearTimeout(this.timeoutId));
    }
  }
  class Du {
    next(e, t) {
      var r = this.nextElement(e.text, t);
      return e.elements[r] ? r : null;
    }
    previous(e, t) {
      var r = this.previousElement(e.text, t);
      return e.elements[r] ? r : null;
    }
    previousElement(e, t) {
      var r = Pu[e];
      if (!r) return null;
      var n = r.indexOf(t);
      if (n <= 0) return null;
      var i = r[n - 1];
      return i || null;
    }
    nextElement(e, t) {
      var r = Pu[e];
      if (!r) return null;
      var n = r.indexOf(t);
      if (n < 0) return null;
      var i = r[n + 1];
      return i || null;
    }
  }
  var Pu = {
    "\\frac": ["value", "sub1"],
    "\\int": ["from", "to"],
    "\\leftarrow": ["top", "bottom"],
    "\\power-index": ["powerValue", "indexValue"],
    "\\sqrt": ["sub1", "value"],
    "\\overunderset": ["sub1", "value", "sub2"],
    "\\stackrel": ["sub1", "value"],
    "\\underset": ["value", "sub1"]
  };
  Pu["\\rightarrow"] = Pu["\\leftarrow"], Pu["\\overset"] = Pu["\\stackrel"], Pu["\\overbrace"] = Pu["\\stackrel"], Pu["\\underbrace"] = Pu["\\underset"], Pu["\\dfrac"] = Pu["\\frac"], Pu["\\cfrac"] = Pu["\\frac"], Pu["\\tfrac"] = Pu["\\frac"], Pu["\\iint"] = Pu["\\int"], Pu["\\iiint"] = Pu["\\int"], Pu["\\oint"] = Pu["\\int"], Pu["\\oiint"] = Pu["\\int"], Pu["\\oiiint"] = Pu["\\int"], Pu["\\sum"] = Pu["\\int"], Pu["\\bigcap"] = Pu["\\int"], Pu["\\prod"] = Pu["\\int"], Pu["\\coprod"] = Pu["\\int"], Pu["\\bigcup"] = Pu["\\int"], Pu["\\bigvee"] = Pu["\\int"], Pu["\\bigwedge"] = Pu["\\int"], Pu["\\lim"] = Pu["\\int"], Pu["\\liminf"] = Pu["\\int"], Pu["\\limsup"] = Pu["\\int"], Pu["\\sup"] = Pu["\\int"], Pu["\\varliminf"] = Pu["\\int"], Pu["\\varlimsup"] = Pu["\\int"];
  const Mu = new Du();
  class Iu {
    constructor(e) {
      (0, n.A)(this, "model", void 0), (0, n.A)(this, "cursorSelected", void 0), (0, n.A)(this, "leafCursorSelected", void 0), (0, n.A)(this, "extendedCursorSelected", void 0), (0, n.A)(this, "cursorPos", void 0), (0, n.A)(this, "selectedBlockModel", void 0), (0, n.A)(this, "isCursorControlled", void 0), (0, n.A)(this, "joinStartSelected", void 0), (0, n.A)(this, "isDiagramSelected", void 0), (0, n.A)(this, "isImageContainerSelected", void 0), (0, n.A)(this, "isInlineImageSelected", void 0), (0, n.A)(this, "shortcutMatcher", void 0), (0, n.A)(this, "liDefaultsProvider", void 0), (0, n.A)(this, "fixedContextHandler", void 0), (0, n.A)(this, "detectionResult", void 0), (0, n.A)(this, "target", void 0), (0, n.A)(this, "requestFontSizeRatio", () => {
        var e = this.getJointSelected();
        if (!e) return 1;
        var t = kt.getSelectedEditor(this.getEditorHtmlElement(), e, "null");
        return t ? t.reactInstance.getFontSizeRatio() : 1;
      }), null != e && (this.target = e, this.model = e.mainModel, this.cursorSelected = e.mainSelected, this.extendedCursorSelected = e.extendedMainSelected, this.cursorPos = e.cursorPos, this.shortcutMatcher = e.shortcutMatcher, this.liDefaultsProvider = e.liDefaultsProvider, this.fixedContextHandler = e.fixedContextHandler, e.mainSelected && (this.leafCursorSelected = Ze.A.findLeafSelected(e.mainSelected), e.extendedMainSelected || (this.selectedBlockModel = Ze.A.getSelectedBlockFromRoot(e.mainModel, e.mainSelected), this.isCursorControlled = this.leafCursorSelected.controlled, this.selectedBlockModel && (this.isDiagramSelected = Ht.A.isDiagramBlock(this.selectedBlockModel) && this.leafCursorSelected.controlled, this.isImageContainerSelected = Ht.A.isImageContainerBlock(this.selectedBlockModel) && this.leafCursorSelected.controlled, this.isInlineImageSelected = Ht.A.isInlineImageBlock(this.selectedBlockModel) && this.leafCursorSelected.controlled))));
    }
    isToolbarBasic() {
      return this.target.targetProps.toolbarBasic;
    }
    modelDetect() {
      return this.detectionResult || (this.detectionResult = this.target.modelDetection.scan({
        joinSelected: this.getJointSelected(),
        model: this.target.mainModel,
        isCursorControlled: this.isCursorControlled
      })), this.detectionResult;
    }
    preventScrollOnSelect() {
      return this.detectionResult.isAtBibliography || this.isDiagramSelected || this.isImageContainerSelected;
    }
    docWidth() {
      return this.target.docWidth;
    }
    isAtBoxedContainer() {
      return this.modelDetect().isAtBoxedContainer;
    }
    insideCodeSection() {
      return this.modelDetect().insideCodeSection;
    }
    insideCodeSectionDarkTheme() {
      return this.modelDetect().insideCodeSectionDarkTheme;
    }
    isExternalUndoRedo() {
      return this.target.inColMode;
    }
    confirmDeleted() {
      return this.target.confirmDeleted;
    }
    selectOnly() {
      return this.target.selectOnly;
    }
    isPlainTextOnly() {
      return this.target.isPlainTextOnly;
    }
    isOneLine() {
      return this.target.isOneLineOnly;
    }
    getEditorHtmlElement() {
      return this.target.editorHtmlElement;
    }
    getDocZoomContainer() {
      return this.target.docZoomContainer;
    }
    isAtLongDivision() {
      return this.modelDetect().isAtLongDivision;
    }
    isAtUnderlineSection() {
      return this.modelDetect().isAtUnderlineSection;
    }
    insideZSpec() {
      return this.modelDetect().insideZSpec;
    }
    getListItemSelectedType() {
      return this.leafCursorSelected.controlled ? this.leafCursorSelected.listTypeSelect : null;
    }
    isListBulletSelected() {
      return !!this.getListItemSelectedType();
    }
    findInlineMathScope() {
      return Ze.A.traverseDown(this.target.mainModel, this.getJointSelected(), (e, t) => mt.A.isInlineMathContainer(e) && !!t.selected);
    }
    isHyperLinkSelected() {
      if (!this.isTextModeSelected()) return !1;
      if (this.selectedBlockModel) return !!k.A.safeGetBlockStyle(this.selectedBlockModel, "hyperLink");
      if (this.target.extendedMainSelected && this.isSameRoute(this.target.mainSelected, this.target.extendedMainSelected)) {
        var e = Ze.A.getSelectedBlockFromRoot(this.target.mainModel, this.target.mainSelected);
        return !!k.A.safeGetBlockStyle(e, "hyperLink");
      }
    }
    isAtTextModeGroup() {
      return this.modelDetect().isAtTextModeGroup;
    }
    isAtTextModeGroupInline() {
      return this.modelDetect().isAtTextModeGroupInline;
    }
    isAtCaption() {
      return this.modelDetect().isAtCaption;
    }
    isSelected() {
      return null != this.target.mainSelected;
    }
    isSelectControlled() {
      return this.isCursorControlled;
    }
    isInSelection() {
      return null != this.target.extendedMainSelected && !this.isSameRoute(this.target.mainSelected, this.target.extendedMainSelected);
    }
    isSameRoute(e, t) {
      return Rt.isSameRoute(e, t);
    }
    isRootLineSelected() {
      return this.modelDetect().isRootLineSelected;
    }
    isTextModeSelected() {
      return this.modelDetect().isTextMode;
    }
    isMathModeSelected() {
      return !this.modelDetect().isTextMode && !this.isInsideRawLatex();
    }
    isRestrictedTextMode() {
      return this.modelDetect().isTextMode && this.modelDetect().isRestrictedTextMode;
    }
    isRestrictedTextModeInMath() {
      return this.modelDetect().isTextMode && this.modelDetect().isRestrictedTextModeInMath;
    }
    isAtSubSuperScript() {
      return this.modelDetect().isAtSubSuperScript;
    }
    insideSubSuperScript() {
      return this.modelDetect().insideSubSuperScript;
    }
    getStyleCascadeContext() {
      return this.insideSubSuperScript() || this.isInsideTheorem() ? "inherit" : "none";
    }
    findNextElementNameOfComposite() {
      if (this.isInSelection()) return null;
      var e = Ze.A.findLeafParentSelected(this.target.mainSelected);
      if (!e) return null;
      var t = this.getParentBlockOfSelected();
      return Mu.next(t, e.key);
    }
    findPreviousElementNameOfComposite() {
      if (this.isInSelection()) return null;
      var e = Ze.A.findLeafParentSelected(this.target.mainSelected);
      if (!e) return null;
      var t = this.getParentBlockOfSelected();
      return Mu.previous(t, e.key);
    }
    getParentBlockOfSelected() {
      var e = f().cloneDeep(this.target.mainSelected),
        t = Ze.A.findLeafParentSelected(e);
      return t.key = null, t.selected = null, Ze.A.getSelectedBlockFromRoot(this.target.mainModel, e);
    }
    isMergedCell() {
      var e = Ze.A.getSelectedEditor(this.target.mainModel, this.target.mainSelected);
      return !!e.colSpan || !!e.rowSpan;
    }
    isCellsMergable() {
      var e = this.getJointSelected(),
        t = Ze.A.findLeafSelected(e);
      if (!t.keys) return !1;
      var r = this.findMergeableSelected();
      return !!r && Z.A.isMergable(t.keys, r);
    }
    findTableSelected() {
      return this.modelDetect().selectedTableBlock;
    }
    findMergeableSelected() {
      return this.modelDetect().selectedMergeableTabularBlock;
    }
    findBinomSelected() {
      return this.modelDetect().selectedBinomBlock;
    }
    isTableSelected() {
      return !!this.findTableSelected();
    }
    isPlotCasesSelected() {
      return this.modelDetect().isAtPlotCases;
    }
    isInsideLatexTable() {
      return !!this.modelDetect().selectedLatexTableBlock;
    }
    getTabularCellKeysSelected() {
      return this.modelDetect().selectedTabularCellKeys;
    }
    isTabularCellsSelected() {
      return !!this.target.extendedMainSelected && !!this.getTabularCellKeysSelected();
    }
    quickRowColumnInsertionSupport() {
      return this.modelDetect().quickRowColumnInsertSupport;
    }
    isCursorBeginInTextLine() {
      return !!this.isTextModeSelected() && 0 == this.leafCursorSelected.charIndex;
    }
    getSelectedLine() {
      return this.modelDetect().selectedLine;
    }
    isSelectedLineListType() {
      return "none" != k.A.getLineStyle(this.getSelectedLine(), "listType", "none");
    }
    isListTypeSkip() {
      return !!k.A.getLineStyle(this.getSelectedLine(), "listTypeSkip");
    }
    isSelectedLineSection() {
      return "section" == k.A.getLineStyle(this.getSelectedLine(), "listType", "none");
    }
    isAtTabularCell() {
      return this.modelDetect().isAtTabularCell;
    }
    isAtTabularCellPreferSingleLine() {
      return this.modelDetect().isAtTabularCellPreferSingleLine;
    }
    isLastTabularCell() {
      return this.modelDetect().isLastTabularCell;
    }
    getJointSelected() {
      return this.target.mainSelected ? (void 0 === this.joinStartSelected && (this.target.extendedMainSelected ? this.joinStartSelected = new xt.A(this.target.mainSelected, this.target.extendedMainSelected).getJoinStartSelected() : this.joinStartSelected = this.target.mainSelected), this.joinStartSelected) : null;
    }
    isInsideTextSymbol() {
      return this.modelDetect().insideTextSymbol;
    }
    isInsideTheorem() {
      return this.modelDetect().insideTheorem;
    }
    isInsideDiagram() {
      return this.modelDetect().insideDiagram;
    }
    isInsideRawLatex() {
      return this.modelDetect().insideRawLatex;
    }
    isSelectedInMathContainer() {
      return this.getJointSelected().key == wu.A.mathContainerElementName;
    }
    isSelectedInDisplayMathContainer() {
      var e = this.getJointSelected();
      return e.key == wu.A.mathContainerElementName && 0 == e.charIndex && this.target.mainModel.lines[e.lineIndex].blocks[0].displayMode;
    }
    isAnyMathScopeElement(e) {
      return "\\inline-math" == e || "\\math-container" == e || "\\align" == e || "\\multiline" == e || "\\gather" == e;
    }
    findOuterMostDiagramEditorScope() {
      for (var e = f().cloneDeep(this.target.mainSelected), t = this.target.mainModel, r = e;;) {
        var n = Ze.A.getBlockFromLineCharIndex(t, r.lineIndex, r.charIndex);
        if (!n) return;
        if ("composite" == n.type && r.selected && r.key && vt.w.isStrictDiagramEditorId(r.key)) {
          var i = r.key;
          return r.selected = null, r.key = null, {
            block: n,
            selectedFromRoot: e,
            key: i
          };
        }
        if (!r.selected) return null;
        if ("composite" != n.type) return null;
        t = n.elements[r.key], r = r.selected;
      }
    }
    findOuterMostMathScope() {
      for (var e = f().cloneDeep(this.target.mainSelected), t = this.target.mainModel, r = e;;) {
        var n = Ze.A.getBlockFromLineCharIndex(t, r.lineIndex, r.charIndex);
        if (!n) return;
        if ("composite" == n.type && this.isAnyMathScopeElement(n.text)) return r.selected = null, r.key = null, {
          block: n,
          selectedFromRoot: e
        };
        if (!r.selected) return null;
        if ("composite" != n.type) return null;
        t = n.elements[r.key], r = r.selected;
      }
    }
    getCodeSectionBlock() {
      var e = Ze.A.getParentSelectedBlockFromRoot(this.target.mainModel, this.target.mainSelected);
      if (e && Ht.A.isCodeSection(e)) return e;
    }
    clone() {
      return f().clone(this);
    }
    disableAutoAlignRTL() {
      return this.target.disableAutoAlignRTL;
    }
    oneMode() {
      return this.target.oneMode;
    }
  }
  class Tu {
    constructor(e, t, r, i, o, s, a, l, c, d, h, p, u, g, m, f, y, v, b, x, C, S, A, w) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "theoremManagementHandler", void 0), (0, n.A)(this, "captionNumberingHandler", void 0), (0, n.A)(this, "anchorTagHandler", void 0), (0, n.A)(this, "footnoteHandler", void 0), (0, n.A)(this, "delayRenderHandler", void 0), (0, n.A)(this, "focusHandler", void 0), (0, n.A)(this, "editorCursorHandler", void 0), (0, n.A)(this, "mobileSupportHandler", void 0), (0, n.A)(this, "editorContainerController", void 0), (0, n.A)(this, "editorScrollHandler", void 0), (0, n.A)(this, "itemsBarHandler", void 0), (0, n.A)(this, "selectionSettingsHandler", void 0), (0, n.A)(this, "mathTagHandler", void 0), (0, n.A)(this, "changeSessionHandler", void 0), (0, n.A)(this, "lineTableSettingsHandler", void 0), (0, n.A)(this, "modelDetection", void 0), (0, n.A)(this, "remoteCursorHandler", void 0), (0, n.A)(this, "selectionHandler", void 0), (0, n.A)(this, "hyperlinkInputBoxHandler", void 0), (0, n.A)(this, "findReplaceHandler", void 0), (0, n.A)(this, "toolbarHandler", void 0), (0, n.A)(this, "modelTransaction", void 0), (0, n.A)(this, "sectionRefHandler", void 0), this.target = e, this.theoremManagementHandler = t, this.captionNumberingHandler = r, this.anchorTagHandler = i, this.footnoteHandler = o, this.delayRenderHandler = s, this.focusHandler = a, this.editorCursorHandler = l, this.mobileSupportHandler = c, this.editorContainerController = d, this.editorScrollHandler = h, this.itemsBarHandler = p, this.selectionSettingsHandler = u, this.mathTagHandler = g, this.changeSessionHandler = m, this.lineTableSettingsHandler = f, this.modelDetection = y, this.remoteCursorHandler = v, this.selectionHandler = b, this.hyperlinkInputBoxHandler = x, this.findReplaceHandler = C, this.toolbarHandler = S, this.modelTransaction = A, this.sectionRefHandler = w;
    }
    isNonDataChange(e, t) {
      return this.target.state.mainModel == t.mainModel;
    }
    notifyForDelayRender() {
      this.target.unMounted || (this.mathTagHandler.processLineTagNumbering(), this.anchorTagHandler.processRefAnchor(), this.target.refreshRectsOnFind());
    }
    batchUpdateAfterMount() {
      this.processNotifiedHandlers(), this.isDocOpenedInPrevVersion() && this.delayRenderHandler.registerWholePageRecreated();
    }
    delayRenderAfterMount(e) {
      e && E.A.next(() => {
        Xe.A.preventNotifyModelChangedToSaveSizeCached() || this.isReadOnly() || this.isSelectOnly() || !this.target.props.onModelChanged || this.target.props.onModelChanged(this.target.state.mainModel, !1, "size-cache");
      }), this.initContainerModelAndCursorPosition(), this.withNonReadonly(() => {
        this.focusHandler.handleOnTargetMounted(), this.editorCursorHandler.startBlink(), this.mobileSupportHandler.registerSelectionMarkTouchEvents(), this.mobileSupportHandler.registerTouchHold(), this.mobileSupportHandler.updateArrowsKeySupportStatus();
        var e = this.target.props,
          t = this.target.state;
        e.inColMode || this.editorContainerController.addToHistory({
          mainModel: t.mainModel,
          mainSelected: t.mainSelected,
          extendedMainSelected: t.extendedMainSelected
        }), this.editorScrollHandler.scrollToPositionIfNotInView(), this.refreshToolbarItemBar(), this.focusHandler.handleOnTargetOnBatchMounted(), Xe.A.isTestEnv() && E.A.waitALitteWhile(() => {
          window.mathchaPageLoaded = !0;
        });
      }), this.mathTagHandler.processLineTagNumbering(), this.anchorTagHandler.processRefAnchor(), this.changeSessionHandler.end();
    }
    initContainerModelAndCursorPosition() {
      var e = this.newContainerModel(),
        t = this.changeSessionHandler.getSessionValue("domElementRectCache");
      t && this.changeSessionHandler.setSessionValue("domElementRectCache", void 0);
      var r = {
        insideDiagram: e.isInsideDiagram(),
        isTextModeSelected: e.isTextModeSelected(),
        isCursorControlled: e.isCursorControlled,
        insideCodeSectionDarkTheme: e.insideCodeSectionDarkTheme(),
        insideCodeSection: e.insideCodeSection(),
        cursorContext: this.changeSessionHandler.getSessionValue("cursorContext", j.A.emptyCursorContext()),
        domElementRectCache: t
      };
      return this.editorCursorHandler.calculateCursorPosition(r, !0), e.cursorPos = this.editorCursorHandler.getCursorPosition(), this.changeSessionHandler.setContainerModel(e), e;
    }
    newContainerModel() {
      var e,
        t,
        r = this.target.props,
        n = this.target.state,
        i = this.target;
      return new Iu({
        mainModel: n.mainModel,
        mainSelected: i.getSafeSelected(),
        extendedMainSelected: i.getSafeExtendedSelected(),
        cursorPos: i.getCursorPosition(),
        cursorElement: this.editorCursorHandler.getCursorHTMLElement(),
        confirmDeleted: n.confirmDeleted,
        selectOnly: r.selectOnly,
        isRestrictedView: i.isRestrictedView(),
        isPlainTextOnly: i.isPlainTextOnly(),
        isOneLineOnly: i.isOneLineOnly(),
        shortcutMatcher: i.getShortcutMatcher(),
        editorHtmlElement: i.getEditorHtmlElement(),
        inColMode: !!r.inColMode,
        modelDetection: this.modelDetection,
        disableAutoAlignRTL: null === (e = r.settings) || void 0 === e || null === (t = e.complexObject) || void 0 === t ? void 0 : t.disableAutoAlignRTL,
        oneMode: r.oneMode,
        docWidth: i.getDocumentWidthPixel(),
        liDefaultsProvider: this.lineTableSettingsHandler.getLiDefaultsProvider(),
        docZoomContainer: i.getDocZoomContainer(),
        fixedContextHandler: i.getFixedContextHandler(),
        targetProps: i.props
      });
    }
    refreshToolbarItemBar() {
      this.itemsBarHandler.updateItemsBar(), this.selectionSettingsHandler.triggerRenderSelectionSetting(), this.lineTableSettingsHandler.handleLineSetting();
    }
    isReadOnly() {
      return this.target.isReadOnly();
    }
    isSelectOnly() {
      return this.target.isSelectOnly();
    }
    raiseModelChangeIfRequire(e, t, r) {
      this.target.props.onModelChanged && (this.changeSessionHandler.getSessionValue("surpressRaiseModelChanged") || this.isSelectOnly() || this.isReadOnly() || (t || this.changeSessionHandler.persistableGet("raiseModelChange")) && (this.changeSessionHandler.persistableClear("raiseModelChange"), this.target.props.onModelChanged(e, this.changeSessionHandler.getSessionValue("isOneLineChanged"), r)));
    }
    batchUpdateAfterChange(e, t) {
      var r = this.target.props,
        n = this.target.state,
        i = t.mainModel != n.mainModel;
      e.inColMode && !r.inColMode && (this.remoteCursorHandler.clear(), this.editorContainerController.resetHistoryToCurrent({
        mainModel: n.mainModel,
        mainSelected: n.mainSelected,
        extendedMainSelected: n.extendedMainSelected
      })), this.raiseModelChangeIfRequire(n.mainModel, i), e.oneMode != r.oneMode && E.A.next(() => {
        var e = r.selected || this.target.getInitSelect();
        this.target.changeModel(r.model || this.target.getEmptyModel(), !1, {
          mainSelected: e,
          extendedMainSelected: void 0
        });
      }), this.processNotifiedHandlers();
      var o = this.changeSessionHandler.getSessionValue("regionalActions");
      o && this.modelTransaction.handleRegionalChange(o), Xe.A.isTestEnv() && (window.cursorSelected = n.mainSelected);
    }
    processNotifiedHandlers() {
      this.theoremManagementHandler.processTheoremNumbering(!1, !1), this.captionNumberingHandler.processAllCaptions(!1), this.footnoteHandler.processFootnote(), this.anchorTagHandler.processRefAnchor(), this.mathTagHandler.processLineTagNumbering(), this.sectionRefHandler.process();
    }
    isDocOpenedInPrevVersion() {
      var e = this.target.state.mainModel;
      return !(e.___version || !e.version || e.___version == e.version) && (e.___version = e.version, !0);
    }
    withNonReadonly(e) {
      if (!this.isReadOnly()) return e();
    }
    refreshZoomOnSelectedDg() {
      var e = this.target.getSelectedDiagramInstance();
      e && e.refreshSelectedOnZoomChange();
    }
    delayRenderAfterChange(e, t, r) {
      this.initContainerModelAndCursorPosition();
      var n = t.mainModel != this.target.state.mainModel;
      h().unstable_batchedUpdates(() => {
        this.afterChanged(e, t);
        var r = t.contextMenuShowInfo != this.target.state.contextMenuShowInfo,
          i = e.docZoomPercentage != this.target.props.docZoomPercentage;
        i ? (this.editorScrollHandler.scrollOnZoomChange(), this.refreshZoomOnSelectedDg()) : r || this.editorScrollHandler.scrollToPositionIfNotInView();
        var o = t.mainSelected != this.target.getSafeSelected(),
          s = this.changeSessionHandler.getSessionValue("focusAcquire"),
          a = this.changeSessionHandler.getSessionValue("changeByCol"),
          l;
        if (!s && (n || o) && !a && !i) {
          var c = Xe.A.isIos();
          this.target.hidenInputFocus(c);
        }
      }), this.mobileSupportHandler.updateArrowsKeySupportStatus(), this.changeSessionHandler.end(), !r || this.isReadOnly() || this.isSelectOnly() || this.raiseModelChangeIfRequire(this.target.state.mainModel, r, "size-cache");
    }
    afterChanged(e, t) {
      if (!this.target.unMounted) {
        var r = this.target.state,
          n = this.target.props,
          i = t.mainModel != r.mainModel;
        i && this.remoteCursorHandler.processUpdateRemoteCursorPositions(), this.withNonReadonly(() => {
          this.selectionHandler.handleSelectionChanged(t, r);
          var e = this.changeSessionHandler.getContainerModel(),
            o = t.mainSelected != this.target.getSafeSelected();
          o && (this.editorContainerController.clearTemporarySelectedBlockStyle(), r.temporarySelectedBlockStyle && this.target.setState({
            temporarySelectedBlockStyle: void 0
          }), this.hyperlinkInputBoxHandler.handleShowingInputOnMatched(e)), !i || this.changeSessionHandler.getSessionValue("ignoreAddingToHistory") || n.inColMode || this.editorContainerController.addToHistory({
            mainModel: r.mainModel,
            mainSelected: r.mainSelected,
            extendedMainSelected: r.extendedMainSelected
          }, {
            mainModel: t.mainModel,
            mainSelected: t.mainSelected,
            extendedMainSelected: t.extendedMainSelected
          }), i && this.findReplaceHandler.delayIncrementalFind(), this.refreshToolbarItemBar(), this.toolbarHandler.updateUndoRedoState(), o && this.remoteCursorHandler.notifyMainSelectedPosition(this.editorCursorHandler.getCursorGeoPosition(), e.isCursorControlled);
        });
      }
    }
  }
  var Lu = r(55272),
    Ru = r(79354),
    Bu = r(12488),
    Fu = r(98489).g;
  class ju extends sn {
    constructor(e) {
      super(e), (0, n.A)(this, "restoringPersistedState", !1), (0, n.A)(this, "handleCasClose", () => {
        this.target.updateCasDockLayout(void 0), this.setState({
          showCasDialog: !1
        });
      });
    }
    renderCasDialog() {
      if (this.target.state.showCasDialog) return c().createElement(Fu, {
        onClose: this.handleCasClose,
        MathTypeClss: this.target.getMathTypeClss(),
        getInputBlocks: this.target.getCasInputBlocks.bind(this.target),
        insertResultBlocks: this.target.insertCasResultBlocks.bind(this.target),
        onDockLayoutChange: this.target.updateCasDockLayout.bind(this.target)
      });
    }
    requestCasDialog() {
      this.setState({
        showCasDialog: !0
      });
    }
    loadPersistedCasDialogState() {
      this.target.props.casEnable && !this.restoringPersistedState && (this.restoringPersistedState = !0, Bu.d.load().then(e => {
        this.restoringPersistedState = !1, e && e.show && this.setState({
          showCasDialog: !0
        });
      }).catch(() => {
        this.restoringPersistedState = !1;
      }));
    }
  }
  function _u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Nu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var zu = 240;
  class Hu extends c().Component {
    copyToSystemClipboard() {
      this.copyPasteHandler.copyToSystemClipboard();
    }
    cutToSystemClipboard() {
      this.copyPasteHandler.cutToSystemClipboard();
    }
    pasteFromSystemClipboard() {
      this.copyPasteHandler.pasteFromSystemClipboard();
    }
    getLatexIoHandler() {
      return this.latexIoHandler;
    }
    isDocEnabled() {
      return this.state.docEnabled;
    }
    onModelUpdateReady() {
      return this.updateModelReadyPromise.then(() => this.rootBatchUpdater.waitFree());
    }
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        mainModel: this.props.model || this.getEmptyModel(),
        mainSelected: this.props.selected || this.getInitSelect(),
        extendedMainSelected: void 0,
        docEnabled: !this.props.disabledOnInit
      }), (0, n.A)(this, "selectedDiagramInstace", void 0), (0, n.A)(this, "pageSettingsHandler", new Sn(this)), (0, n.A)(this, "findReplaceHandler", new kn(this)), (0, n.A)(this, "latexIoHandler", new fi(this)), (0, n.A)(this, "copyPasteHandler", new Pi(this)), (0, n.A)(this, "mobileSupportHandler", new Fi(this)), (0, n.A)(this, "keyboardInputHandler", new Wi(this)), (0, n.A)(this, "mouseInputHandler", new Ui(this)), (0, n.A)(this, "lineTableSettingsHandler", new ws(this)), (0, n.A)(this, "editorScrollHandler", new _s(this)), (0, n.A)(this, "autoCompleteHandler", new Xa(this)), (0, n.A)(this, "itemsBarHandler", new dl(this)), (0, n.A)(this, "theoremManagementHandler", new Il(this)), (0, n.A)(this, "mathTagHandler", new Gl(this)), (0, n.A)(this, "toolbarHandler", new ic(this)), (0, n.A)(this, "resultHandler", new fc(this)), (0, n.A)(this, "messageBoxHandler", new yc(this)), (0, n.A)(this, "regionHighlightHandler", new Cc(this)), (0, n.A)(this, "hyperlinkInputBoxHandler", new Oc(this)), (0, n.A)(this, "confirmDeleteHandler", new Bc(this)), (0, n.A)(this, "tabularRowColumnHandler", new zc(this)), (0, n.A)(this, "imageLibraryHandler", new lu(this)), (0, n.A)(this, "mathTemplateHandler", new vd(this)), (0, n.A)(this, "specialSymbolHandler", new bd(this)), (0, n.A)(this, "insertDataHandler", new kd(this)), (0, n.A)(this, "spellCheckHandler", new Gd(this, this.pageSettingsHandler)), (0, n.A)(this, "mathVisibleViewHandler", new Kd(this)), (0, n.A)(this, "shortcutManagerHandler", new uh(this)), (0, n.A)(this, "captionNumberingHandler", new Bh(this)), (0, n.A)(this, "remoteCursorHandler", new Kh(this)), (0, n.A)(this, "footnoteHandler", new ap(this)), (0, n.A)(this, "plotSelectionHandler", new Sp(this)), (0, n.A)(this, "codeSectionHandler", new Ap(this)), (0, n.A)(this, "excludeLazyStore", new Zp.w()), (0, n.A)(this, "anchorTagHandler", new Fp(this, this.excludeLazyStore)), (0, n.A)(this, "delayRenderHandler", new Rp(this)), (0, n.A)(this, "genericAttachedRenderHandler", new eu(this)), (0, n.A)(this, "contextMenuHandler", new la(this, this.copyPasteHandler, this.latexIoHandler)), (0, n.A)(this, "selectionSettingsHandler", new So(this)), (0, n.A)(this, "focusHandler", new Vi(this, this.mobileSupportHandler, this.keyboardInputHandler)), (0, n.A)(this, "editorCursorHandler", new Fs(this, this.focusHandler, this.keyboardInputHandler, this.mobileSupportHandler)), (0, n.A)(this, "selectionHandler", new mc(this)), (0, n.A)(this, "latexTableTemplateHandler", new fu(this)), (0, n.A)(this, "casHandler", new ju(this)), (0, n.A)(this, "sectionRefHandler", new Kp(this)), (0, n.A)(this, "changeSessionHandler", new Zh()), (0, n.A)(this, "fixedContextHandler", void 0), (0, n.A)(this, "mathTypeKey", this.nextMathKey()), (0, n.A)(this, "editorContainerController", void 0), (0, n.A)(this, "internalClipboard", {
        copyText: ""
      }), (0, n.A)(this, "mathType", void 0), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "findAndReplaceElement", void 0), (0, n.A)(this, "error", !1), (0, n.A)(this, "handlerRenderSelect", new Yh(this)), (0, n.A)(this, "rootBatchUpdater", void 0), (0, n.A)(this, "renderingContext", new xu()), (0, n.A)(this, "unMounted", !1), (0, n.A)(this, "modelDetection", new Eu()), (0, n.A)(this, "busyHandler", new ku()), (0, n.A)(this, "afterChangeHandler", void 0), (0, n.A)(this, "docZoomContainer", void 0), (0, n.A)(this, "modelTransaction", void 0), (0, n.A)(this, "updateModelReadyPromise", (0, i.cb)(50)), (0, n.A)(this, "disableLazy", (e, t) => {
        this.delayRenderHandler.disableLazy(e, t);
      }), (0, n.A)(this, "resumeLazy", (e, t) => {
        this.delayRenderHandler.resumeLazy(e, t);
      }), (0, n.A)(this, "getExcludeLazyStore", () => this.excludeLazyStore), (0, n.A)(this, "handleRequestMathTypeFocus", () => {
        this.focusHandler.hidenInputFocus(!0);
      }), (0, n.A)(this, "handleRequestColorPickerSettings", () => {
        var e;
        return {
          presetColors: null === (e = this.getMtSettings().complexObject) || void 0 === e ? void 0 : e.presetColors,
          onChangePresetColor: this.showColorPresetManager,
          allowChangePresetColor: this.allowChangePresetColor
        };
      }), (0, n.A)(this, "allowChangePresetColor", () => this.props.primary || "diagram" == this.props.oneMode), (0, n.A)(this, "showColorPresetManager", () => {
        this.genericRequest("preset-color-manager-request");
      }), (0, n.A)(this, "genericRequest", e => {
        "preset-color-manager-request" == e && this.genericAttachedRenderHandler.showColorPresetManager();
      }), (0, n.A)(this, "handlePageSettingsSetRequest", e => {
        this.pageSettingsHandler.handleSetRequest(e);
      }), (0, n.A)(this, "setCurrentRootModel", e => {
        this.setMainModel(e);
      }), (0, n.A)(this, "registerSymbol", e => {
        switch (e.type) {
          case "anchor-tag":
            this.anchorTagHandler.registerSymbol(e);
            break;
          case "anchor-tag-change":
            this.anchorTagHandler.notifySymbolChange(e.blockId);
            break;
          case "anchor-tag-ref":
            this.anchorTagHandler.registerRefSymbol(e);
            break;
          case "anchor-tag-ref-change":
            this.anchorTagHandler.notifyRefSymbolChange();
        }
      }), (0, n.A)(this, "unregisterSymbol", (e, t) => {
        switch (e) {
          case "anchor-tag":
            this.anchorTagHandler.unregisterSymbol(t);
            break;
          case "anchor-tag-ref":
            this.anchorTagHandler.unregisterRefSymbol(t);
        }
      }), (0, n.A)(this, "getDocZoomContainer", () => this.docZoomContainer), (0, n.A)(this, "handlerequestDgExternalConnector", () => this.props.requestDgExternalConnector ? this.props.requestDgExternalConnector() : "none"), (0, n.A)(this, "inColMode", () => this.props.inColMode), (0, n.A)(this, "requestDocumentActualHeight", () => this.mathType ? u.cP(this.mathType) : 1122), (0, n.A)(this, "setPrintedPageSize", e => {
        this.pageSettingsHandler.setPrintedPageSize(e);
      }), (0, n.A)(this, "getMtSettings", () => this.props.settings), (0, n.A)(this, "requestSave", () => {
        this.props.requestSave && this.props.requestSave();
      }), (0, n.A)(this, "requestDocumentInfoCompClss", () => this.props.requestDocumentInfoCompClss ? this.props.requestDocumentInfoCompClss() : class e extends c().Component {
        render() {
          return this.props.children("error", "Error");
        }
      }), (0, n.A)(this, "requestColInfoCompClss", () => this.props.requestColInfoCompClss ? this.props.requestColInfoCompClss() : class e extends c().Component {
        render() {
          return this.props.children({
            status: "ok"
          });
        }
      }), (0, n.A)(this, "getMathTypeWidth", () => this.mathType.clientWidth), (0, n.A)(this, "getOneMode", () => this.props.oneMode), (0, n.A)(this, "isMathTypeFocused", () => this.focusHandler.isMtFocus()), (0, n.A)(this, "registerRefreshVisible", e => {
        this.delayRenderHandler.registerRefreshVisible(e);
      }), (0, n.A)(this, "registerRecalculateSize", e => {
        this.delayRenderHandler.registerRecalculateSize(e);
      }), (0, n.A)(this, "deplayRenderInDiagramEnabled", () => {
        return !!this.deplayRenderEnabled() && !this.getPageSettingsSessionCache().disableDelayInDiagram;
        var e;
      }), (0, n.A)(this, "deplayRenderEnabled", () => {
        var e = this.getPageSettingsSessionCache();
        return this.props.deplayRenderEnabled && !Xe.A.disableLazyRendering() && !this.delayRenderHandler.disableDelayRendering() && !e.disableDelayRendering;
      }), (0, n.A)(this, "shouldUseOpmEditArea", () => this.props.deplayRenderEnabled), (0, n.A)(this, "isReadOnly", () => this.props.readOnly), (0, n.A)(this, "getJointSelected", () => this.getContainerModel().getJointSelected()), (0, n.A)(this, "getBracketSettings", () => this.getPageSettingsSessionCache().bracketSettings || {}), (0, n.A)(this, "refreshCodeSectionLanguages", () => {
        this.codeSectionHandler.refreshCodeSectionLanguages();
      }), (0, n.A)(this, "getCustomLanguageProvider", () => this.props.customLanguageProvider), (0, n.A)(this, "getCodeSectionOneModeItem", () => this.props.codeSectionOneModeItem), (0, n.A)(this, "allowEdit", () => !(this.isSelectOnly() || this.isReadOnly())), (0, n.A)(this, "registerSelectDiagramInstance", (e, t) => {
        e ? this.selectedDiagramInstace = t : this.selectedDiagramInstace == t && (this.selectedDiagramInstace = void 0);
      }), (0, n.A)(this, "getSelectedDiagramInstance", () => this.selectedDiagramInstace), (0, n.A)(this, "notifySectionPrefixChange", () => {
        this.theoremManagementHandler.notifyTheorem("theorem-change"), this.captionNumberingHandler.notifyCaptionNumbering("notify", "image"), this.captionNumberingHandler.notifyCaptionNumbering("notify", "table"), this.captionNumberingHandler.notifyCaptionNumbering("notify", "diagram"), this.mathTagHandler.notifyTagsAndRefsNumberingIfSections(), this.sectionRefHandler.notifySectionPrefixChange();
      }), (0, n.A)(this, "notifyLayoutChange", () => {
        this.spellCheckHandler.refreshSpellCheckPosition(), this.selectionHandler.refreshSelection(), this.refreshCursorPositionAndContainerModel();
      }), (0, n.A)(this, "getMathTypeClss", () => Hu), (0, n.A)(this, "getCurrentRootModel", () => this.state.mainModel), (0, n.A)(this, "notifyFootnote", e => {
        this.footnoteHandler.notifyFootnote(e);
      }), (0, n.A)(this, "getBaseTextModeFontSize", () => this.getPageSettingsSessionCache().fontSize), (0, n.A)(this, "getbaseMathModeFontFamily", () => this.getPageSettingsSessionCache().mathFontName || "Asana"), (0, n.A)(this, "getSubMathFont", () => this.getPageSettingsSessionCache().subMathFontName || "\\mathnormal"), (0, n.A)(this, "getBaseTextModeFont", () => this.getPageSettingsSessionCache().fontName), (0, n.A)(this, "registerDiagram", e => {
        this.remoteCursorHandler && this.remoteCursorHandler.registerDiagram(e), e.isInLazyContext() && E.A.nextMicro(() => {
          var t = e.getLazyInfo();
          t && (this.excludeLazyStore.add(t.editorId, t.lineId, t.blockId), this.disableLazy(t.editorId, t.lineId));
        });
      }), (0, n.A)(this, "unregisterDiagram", e => {
        this.remoteCursorHandler && this.remoteCursorHandler.unregisterDiagram(e), e.isInLazyContext() && this.excludeLazyStore.remove(e.getModel().id, (e, t) => {
          this.resumeLazy(e, t);
        });
      }), (0, n.A)(this, "isNotEditable", () => this.isReadOnly() || this.isSelectOnly()), (0, n.A)(this, "getMathTemplates", () => {
        return this.props.mathTemplateProvider && this.props.mathTemplateProvider.getTemplates() || {
          items: []
        };
        var e;
      }), (0, n.A)(this, "getMathTemplatesItems", () => this.getMathTemplates().items), (0, n.A)(this, "setMathTemplates", e => this.props.mathTemplateProvider ? this.props.mathTemplateProvider.saveTemplates(e) : Promise.reject("There is no service to handle saving templates")), (0, n.A)(this, "getEditorHtmlElement", () => this.editor && this.editor.editor), (0, n.A)(this, "getMathTypeHtmlElement", () => this.mathType), (0, n.A)(this, "getUpdater", () => this.rootBatchUpdater), (0, n.A)(this, "requestDeleteHandle", () => {
        var e = this.changeSessionHandler.getContainerModel(),
          t = this.editorContainerController.requestDeleteCurrent(e);
        this.handleResult(t);
      }), (0, n.A)(this, "getTheoremInfo", () => this.state.mainModel.theoremInfo), (0, n.A)(this, "requestImageSelection", (e, t, r) => this.imageLibraryHandler.requestImageSelection(e, t, r)), (0, n.A)(this, "requestExportDialog", e => {
        this.latexIoHandler.requestExportDialog(e);
      }), (0, n.A)(this, "selectFromPos", (e, t) => {
        this.handleSelectFromPosition(e, t, !1), this.hidenInputFocus();
      }), (0, n.A)(this, "handleSelectFromPosition", (e, t, r) => this.mouseInputHandler.handleSelectFromPosition(e, t, r)), (0, n.A)(this, "getEditorInfo", () => ({
        isSelectionMode: null != this.state.extendedMainSelected,
        isReadOnly: this.props.readOnly,
        selectOnly: this.props.selectOnly,
        mathTypeRef: this.mathType,
        scrollSelector: this.getScrollSelector(),
        mainModel: this.state.mainModel,
        rootEditorElement: this.editor && this.editor.editor
      })), (0, n.A)(this, "showMessage", (e, t, r) => {
        this.messageBoxHandler.showMessage(e, t, r);
      }), (0, n.A)(this, "refreshCursorPositionAndContainerModel", () => {
        var e = this.changeSessionHandler.getContainerModel(),
          t = {
            insideDiagram: e.isInsideDiagram(),
            isTextModeSelected: e.isTextModeSelected(),
            isCursorControlled: e.isCursorControlled,
            insideCodeSectionDarkTheme: e.insideCodeSectionDarkTheme(),
            insideCodeSection: e.insideCodeSection(),
            cursorContext: this.changeSessionHandler.getSessionValue("cursorContext", j.A.emptyCursorContext()),
            domElementRectCache: void 0
          };
        this.editorCursorHandler.refreshCursorPosition(t), e.cursorPos = this.editorCursorHandler.getCursorPosition();
      }), (0, n.A)(this, "getScrollSelector", () => this.editorScrollHandler.getScrollSelector()), (0, n.A)(this, "getBatchUpdater", () => this.rootBatchUpdater), (0, n.A)(this, "showTheoremManagement", () => {
        this.theoremManagementHandler.showTheoremManagement();
      }), (0, n.A)(this, "showTheoremRefSelect", () => {
        this.theoremManagementHandler.showTheoremRefSelect();
      }), (0, n.A)(this, "onDataChanged", (e, t) => {
        if (this.resetTempVariables(), t) {
          var r = this.changeSessionHandler.getSessionValue("focusAcquire"),
            n = this.changeSessionHandler.getSessionValue("preventScroll");
          this.changeSessionHandler.setSessionValue("focusAcquire", !!t.focusAcquired || r), this.changeSessionHandler.setSessionValue("preventScroll", !!t.preventScroll || !!n), this.changeSessionHandler.setSessionValue("isOneLineChanged", !!t.isOneLineChanged), t.cacheMapToMerge && this.delayRenderHandler.mergeCacheSize(t.cacheMapToMerge);
        }
        this.changeModel(e, !1, null, t && t.allowChangeEvenNotInWriteMode);
      }), (0, n.A)(this, "onSelectedChanged", (e, t) => {
        if (t && t.gatheredSelectedArr) t.gatheredSelectedArr.push(e);else {
          if (this.shouldPreventSelect(e)) {
            if (!this.isMathOnly() || 1 != e.charIndex || e.selected) return void this.getController().clearCursorHistory();
            var r = this.selectionHandler.endLineSelectedForMathModeOnly();
            if (!r) return void this.getController().clearCursorHistory();
            e = r, t = this.clearEditLineInfo(t), this.getController().clearCursorHistory();
          }
          t = t || {}, e = this.handleListItemSelected(e), this.resetTempVariables(), this.changeSessionHandler.getSessionValue("surpressClearCursorHistory") || this.editorContainerController.clearCursorHistory(), t.cursorContext && this.changeSessionHandler.setSessionValue("cursorContext", t.cursorContext), t.focusAcquired && this.changeSessionHandler.setSessionValue("focusAcquire", !0), t.isExtendingSelection ? this.extendSelection(e) : this.setSelected(e), this.editorCursorHandler.requestShowCursor();
        }
      }), (0, n.A)(this, "getContainerModel", () => this.changeSessionHandler.getContainerModel()), (0, n.A)(this, "handleResult", (e, t) => {
        this.resultHandler.handleResult(e, t);
      }), (0, n.A)(this, "handleGetMathTypeRef", e => {
        this.mathType = e, e && (e.reactInstance = this), Xe.A.isTestEnv() && this.mathType && (this.mathType.mtInstance = this);
      }), (0, n.A)(this, "getRootEditAreaRef", e => {
        this.editor = e;
      }), (0, n.A)(this, "requestRenderToolBarComponent", e => {
        this.toolbarHandler.requestRenderToolBarComponent(e);
      }), (0, n.A)(this, "isSelectOnly", () => this.props.selectOnly), (0, n.A)(this, "getCursorPosition", () => this.editorCursorHandler.getCursorPosition()), (0, n.A)(this, "requestVisibleLines", () => this.mathVisibleViewHandler.requestVisibleLines()), (0, n.A)(this, "getPageSettings", () => this.pageSettingsHandler.getPageSettings()), (0, n.A)(this, "getPageSettingsSessionCache", () => {
        var e = this.changeSessionHandler.getSessionValue("pageSettings");
        if (e) return e;
        var t = this.pageSettingsHandler.getPageSettings();
        return this.changeSessionHandler.setSessionValue("pageSettings", t), t;
      }), (0, n.A)(this, "setPageSection", e => {
        this.pageSettingsHandler.setPageSection(e);
      }), (0, n.A)(this, "handleRequestSpellCheckSuggestions", () => this.spellCheckHandler.handleRequestSpellCheckSuggestions()), (0, n.A)(this, "supportSpellCheck", () => !!this.props.spellCheck), (0, n.A)(this, "requestPreposition", e => {
        this.raiseColEvent({
          type: "remote-cursor-reposition",
          siteIds: e
        });
      }), (0, n.A)(this, "raiseColEvent", e => {
        this.props.onColEvent && this.props.onColEvent(e);
      }), (0, n.A)(this, "getSelectionData", () => {
        var e = this.getContainerModel();
        return this.editorContainerController.getSelectionData(e, !1);
      }), this.docZoomContainer = new Ru.n(1, document.body), Je.A.initAll(), this.editorContainerController = new Wr(Xe.A.getHistoryGroupingIntervalMs());
      var t = e.settings || {};
      this.editorContainerController.changeSettings(t), this.keyboardInputHandler.changeSettings(t), this.shortcutManagerHandler.updateSingleShortcutService(t), this.lineTableSettingsHandler.updateSettings(t), this.spellCheckHandler.updateWithUserSettings(t), this.deactivateOnReadonly(), this.props.selectOnly && this.setSelectOnlyMode(!0), this.modelTransaction = new su(this, this.pageSettingsHandler, this.theoremManagementHandler, this.delayRenderHandler, this.changeSessionHandler, this.mathTagHandler), this.afterChangeHandler = new Tu(this, this.theoremManagementHandler, this.captionNumberingHandler, this.anchorTagHandler, this.footnoteHandler, this.delayRenderHandler, this.focusHandler, this.editorCursorHandler, this.mobileSupportHandler, this.editorContainerController, this.editorScrollHandler, this.itemsBarHandler, this.selectionSettingsHandler, this.mathTagHandler, this.changeSessionHandler, this.lineTableSettingsHandler, this.modelDetection, this.remoteCursorHandler, this.selectionHandler, this.hyperlinkInputBoxHandler, this.findReplaceHandler, this.toolbarHandler, this.modelTransaction, this.sectionRefHandler), this.rootBatchUpdater = new Lu.i(this.afterChangeHandler, this.delayRenderHandler, this.props.onMountedProcessed), this.modelTransaction.rootBatchUpdater = this.rootBatchUpdater, this.fixedContextHandler = new Au(this.rootBatchUpdater, this.renderingContext, this.props.docPersistableDataProvider), this.fixedContextHandler.setMtFuncs(this.buildMathTypeFuncs()), Xe.A.isCollaboratingTesting() && (window.focusHandler = this.focusHandler);
    }
    consumeDelayRenderChanges() {
      return this.delayRenderHandler.consumeDelayRenderChanges();
    }
    isLazyDisable(e, t) {
      return this.excludeLazyStore.has(e, t);
    }
    requestRecreateWholePage() {
      this.modelTransaction.requestRecreateWholePage("force");
    }
    setSelectOnlyMode(e) {
      this.selectionSettingsHandler.setDisabled(e), this.lineTableSettingsHandler.setDisabled(e);
    }
    deactivateOnReadonly() {
      this.isReadOnly() && (this.editorCursorHandler.deactivateHandler(), this.spellCheckHandler.deactivateHandler(), this.selectionHandler.deactivateHandler(), this.autoCompleteHandler.deactivateHandler(), this.latexIoHandler.deactivateHandler(), this.messageBoxHandler.deactivateHandler(), this.confirmDeleteHandler.deactivateHandler(), this.keyboardInputHandler.deactivateHandler(), this.itemsBarHandler.deactivateHandler(), this.mathTagHandler.deactivateHandler(), this.contextMenuHandler.deactivateHandler(), this.mobileSupportHandler.deactivateHandler(), this.regionHighlightHandler.deactivateHandler(), this.handlerRenderSelect.deactivateHandler());
    }
    buildMathTypeFuncs() {
      return {
        requestRenderToolBarComponent: this.requestRenderToolBarComponent,
        requestRenderItemsBarComponent: this.itemsBarHandler.requestRenderItemsBarComponent,
        getEditorInfo: this.getEditorInfo,
        selectFromPos: this.selectFromPos,
        notifyLineTagRender: this.mathTagHandler.notifyLineTagRender,
        notifyTheorem: this.theoremManagementHandler.notifyTheorem,
        requestDelete: this.requestDeleteHandle,
        getTheoremInfo: this.getTheoremInfo,
        requestExportDialog: this.latexIoHandler.requestExportDialog,
        requestPrintExercise: this.props.onRequestPrintExercise,
        requestWorksheetLabels: this.pageSettingsHandler.showWorksheetLabels,
        requestImageSelection: this.requestImageSelection,
        showMessage: this.showMessage,
        notifyLayoutChange: this.notifyLayoutChange,
        getCaptionInfo: this.captionNumberingHandler.getCaptionInfo,
        notifyCaptionNumbering: this.captionNumberingHandler.notifyCaptionNumbering,
        notifyCaptionRef: this.captionNumberingHandler.notifyCaptionRef,
        registerDiagram: this.registerDiagram,
        unregisterDiagram: this.unregisterDiagram,
        getBaseTextModeFont: this.getBaseTextModeFont,
        getSubMathFont: this.getSubMathFont,
        getbaseMathModeFontFamily: this.getbaseMathModeFontFamily,
        getBaseTextModeFontSize: this.getBaseTextModeFontSize,
        notifyFootnote: this.notifyFootnote,
        getMathTypeClss: this.getMathTypeClss,
        getPageSettings: this.getPageSettingsSessionCache,
        notifySectionPrefixChange: this.notifySectionPrefixChange,
        registerSelectDiagramInstance: this.registerSelectDiagramInstance,
        allowEdit: this.allowEdit,
        getCodeSectionEventConnector: this.getCodeSectionOneModeItem,
        getCustomLanguageProvider: this.getCustomLanguageProvider,
        refreshCodeSectionLanguages: this.refreshCodeSectionLanguages,
        getBracketSettings: this.getBracketSettings,
        getJointSelected: this.getJointSelected,
        isReadOnly: this.isReadOnly,
        isSelectOnly: this.isSelectOnly,
        getMathTypeHtmlElement: this.getMathTypeHtmlElement,
        requestLocalFonts: this.props.requestLocalFonts,
        deplayRenderEnabled: this.deplayRenderEnabled,
        deplayRenderInDiagramEnabled: this.deplayRenderInDiagramEnabled,
        registerRecalculateSize: this.registerRecalculateSize,
        registerDelayEditArea: this.delayRenderHandler.registerDelayEditArea,
        unregisterDelayEditArea: this.delayRenderHandler.unregisterDelayEditArea,
        getBatchUpdater: this.getBatchUpdater,
        registerRefreshVisible: this.registerRefreshVisible,
        setLineCacheSize: this.delayRenderHandler.setLineCacheSize,
        unsetLineCacheSize: this.delayRenderHandler.unsetLineCacheSize,
        fetchCacheSize: this.delayRenderHandler.fetchCacheSize,
        shouldUseOpmEditArea: this.shouldUseOpmEditArea,
        requestTheoremConfig: this.showTheoremManagement,
        isMathTypeFocused: this.isMathTypeFocused,
        getOneMode: this.getOneMode,
        getMathTypeWidth: this.getMathTypeWidth,
        requestRenderDiagramExtraControls: this.props.requestRenderDiagramExtraControls,
        requestDocumentInfoCompClss: this.requestDocumentInfoCompClss,
        requestSave: this.requestSave,
        getMtSettings: this.getMtSettings,
        setPrintedPageSize: this.setPrintedPageSize,
        requestRenderDiagramShapePositions: this.props.requestRenderDiagramShapePositionDetails,
        requestDocumentActualHeight: this.requestDocumentActualHeight,
        inColMode: this.inColMode,
        requestDgExternalConnector: this.handlerequestDgExternalConnector,
        getDocZoomContainer: this.getDocZoomContainer,
        raiseMtColEvent: this.raiseColEvent,
        requestColInfoCompClss: this.requestColInfoCompClss,
        isNotEditable: this.isNotEditable,
        getCurrentRootModel: this.getCurrentRootModel,
        registerSymbol: this.registerSymbol,
        unregisterSymbol: this.unregisterSymbol,
        setCurrentRootModel: this.setCurrentRootModel,
        requestPageSettingsSet: this.handlePageSettingsSetRequest,
        delayRegisterLineRemoved: this.delayRenderHandler.delayRegisterLineRemoved,
        delayRegisterLazyLineAdded: this.delayRenderHandler.delayRegisterLazyLineAdded,
        freeDelayCacheChange: this.delayRenderHandler.freeDelayCacheChangeForDgFullView,
        refreshDelayRenderView: this.delayRenderHandler.refreshDelayRenderView,
        handleSectionRefAction: this.sectionRefHandler.handleSectionRefAction,
        genericRequest: this.genericRequest,
        requestColorPickerSettings: this.handleRequestColorPickerSettings,
        requestMathTypeFocus: this.handleRequestMathTypeFocus,
        onUserSettingsChange: this.props.onUserSettingsChange,
        getExcludeLazyStore: this.getExcludeLazyStore,
        disableLazy: this.disableLazy,
        resumeLazy: this.resumeLazy
      };
    }
    inZoomMode() {
      return !!this.props.docZoomPercentage && 100 != this.props.docZoomPercentage;
    }
    onCopyMathAsImageToClipboard() {
      console.log("request save image to clipboard");
      var e = u.Yt(".dg-full-view .hidden-cp-image");
      e.length > 0 ? u.Yf(e, "click") : u.Yf(".hidden-cp-image", "click");
    }
    onCopyMathAsSVGToClipboard() {
      console.log("request save image to clipboard");
      var e = u.Yt(".dg-full-view .hidden-cp-svg");
      e.length > 0 ? u.Yf(e, "click") : u.Yf(".hidden-cp-svg", "click");
    }
    onCopyLatexToClipboard() {
      console.log("request save latex to clipboard");
      var e = u.Yt(".dg-full-view .hidden-cp-latex");
      e.length > 0 ? u.Yf(e, "click") : u.Yf(".hidden-cp-latex", "click");
    }
    getSelectionSettingsHandler() {
      return this.selectionSettingsHandler;
    }
    showPlotSelection(e, t) {
      this.plotSelectionHandler.showPlotSelection(e, t);
    }
    showCaptionRefDialog(e) {
      this.captionNumberingHandler.showCaptionRefDialog(e);
    }
    showSectionRefDialog() {
      this.sectionRefHandler.showSectionRefDialog();
    }
    refreshSpellCheckAll() {
      this.spellCheckHandler.refreshSpellCheckAll();
    }
    refreshSpellCheckPosition() {
      this.spellCheckHandler.refreshSpellCheckPosition();
    }
    getFixedContextHandler() {
      return this.fixedContextHandler;
    }
    isColBusy() {
      return this.isBusy() || this.busyHandler.isBusy();
    }
    isBusy() {
      return this.rootBatchUpdater.isBusy();
    }
    getShortcutMatcher() {
      return this.shortcutManagerHandler.getShortcutMatcher();
    }
    getMathTypeSettings() {
      return this.props.settings || {};
    }
    isIgnoreIntlBackslashChange() {
      return this.props.settings && this.props.settings.complexObject && this.props.settings.complexObject.ignoreIntlBackslash;
    }
    raiseShortcutSettingsChange(e) {
      return this.props.onUserSettingsChange ? this.props.onUserSettingsChange({
        type: "shortcuts",
        shortcuts: e
      }) : Promise.resolve(null);
    }
    raiseListItemDefaultChange(e, t) {
      return this.props.onUserSettingsChange ? this.props.onUserSettingsChange({
        type: "list-items-defaults",
        orders: e,
        unorders: t
      }) : Promise.resolve(null);
    }
    requestRender(e) {
      this.handlerRenderSelect.requestRender(e);
    }
    closeRender(e) {
      this.handlerRenderSelect.closeRender(e);
    }
    showShortcutManager() {
      this.shortcutManagerHandler.showShortcutManager();
    }
    getSelection() {
      return this.selectionHandler.getSelection();
    }
    setCursorMathTypeFocus(e) {
      this.editorCursorHandler.setCursorMathTypeFocus(e);
    }
    setCursorInputFocus(e) {
      this.editorCursorHandler.setCursorInputFocus(e);
    }
    temporaryPreventInput(e) {
      return this.keyboardInputHandler.temporaryPreventInput(e);
    }
    getRegionHighlight() {
      return this.regionHighlightHandler.getRegionHighlight();
    }
    getEditorComponent() {
      return this.editor;
    }
    nextMathKey() {
      return "key" + Math.random().toString();
    }
    changeNextMathKey() {
      this.mathTypeKey = this.nextMathKey();
    }
    requestSpellCheckLanguageChange() {
      this.forceUpdate();
    }
    getInitSelect(e) {
      return this.isMathOnly(e) ? {
        lineIndex: 0,
        charIndex: 0,
        key: "mathValue",
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      } : this.isCodeSectionOnly(e) ? {
        lineIndex: 0,
        charIndex: 0,
        key: "rawCode",
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      } : {
        lineIndex: 0,
        charIndex: 0
      };
    }
    getEmptyModel(e) {
      if (this.isMathOnly(e)) {
        var t = sr.A.createComposite("\\inline-math");
        t.elements.mathValue = sr.A.createEmptyEditor();
        var r = sr.A.createEmptyEditor();
        return r.lines[0].blocks.push(t), r.pageSettings = this.props.defaultPageSettingsOnNoModel, r;
      }
      if (this.isCodeSectionOnly(e)) {
        var n = sr.A.createComposite("\\code-section");
        n.elements.rawCode = sr.A.createEmptyEditor();
        var i = sr.A.createEmptyEditor();
        return i.lines[0].blocks.push(n), i.pageSettings = this.props.defaultPageSettingsOnNoModel, i;
      }
      return Nu(Nu({}, sr.A.createEmptyEditor()), {}, {
        pageSettings: this.props.defaultPageSettingsOnNoModel
      });
    }
    find(e, t) {
      return this.findReplaceHandler.find(e, t, this.getDocZoomContainer());
    }
    findNext() {
      return this.findReplaceHandler.findNext();
    }
    findPrevious() {
      return this.findReplaceHandler.findPrevious();
    }
    getController() {
      return this.editorContainerController;
    }
    requestReplace(e, t) {
      return this.findReplaceHandler.requestReplace(e, t);
    }
    requestReplaceAll(e, t) {
      return this.findReplaceHandler.requestReplaceAll(e, t);
    }
    needFocusAcquire() {
      this.changeSessionHandler.setSessionValue("focusAcquire", !0);
    }
    needPreventScroll() {
      this.changeSessionHandler.setSessionValue("preventScroll", !0);
    }
    isPreventScroll() {
      return !!this.changeSessionHandler.getSessionValue("preventScroll");
    }
    closeFindSession() {
      return this.findReplaceHandler.closeFindSession();
    }
    componentWillReceiveProps(e) {
      e.docZoomPercentage != this.props.docZoomPercentage && (this.docZoomContainer.zoomRatio = e.docZoomPercentage / 100), e.model != this.props.model && this.setModel(e.model, e.selected), e.selectOnly != this.props.selectOnly && this.setSelectOnlyMode(e.selectOnly);
      var t = e.settings || {};
      this.editorContainerController.changeSettings(t), this.keyboardInputHandler.changeSettings(t), this.shortcutManagerHandler.updateSingleShortcutService(t), this.lineTableSettingsHandler.updateSettings(t), this.spellCheckHandler.updateWithUserSettings(t);
    }
    clearSelect() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      w.A.isCurrentDocumentInCorruption() || (e && (this.changeSessionHandler.setSessionValue("preventScroll", !0), this.changeSessionHandler.setSessionValue("focusAcquire", !0)), this.selectionHandler.clearSelected());
    }
    cancelClearSelect() {
      this.selectionHandler.cancelClearSelect();
    }
    setDocumentWidth(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
      this.pageSettingsHandler.setDocumentWidth(e, t);
    }
    getDocumentWidthPixel() {
      return this.pageSettingsHandler.getDocumentWidth();
    }
    getModel() {
      return this.state.mainModel;
    }
    getHistoryContents() {
      return this.editorContainerController.getHistoryContents();
    }
    shouldComponentUpdate(e, t) {
      var r = !Dt.A.areEqualShallow(t, this.state),
        n = e.settings != this.props.settings,
        i = r || e.model != this.props.model || e.oneMode != this.props.oneMode || e.selectOnly != this.props.selectOnly || e.itemsBarHide != this.props.itemsBarHide || e.firstLinePrefix != this.props.firstLinePrefix || e.inColMode != this.props.inColMode || e.docZoomPercentage != this.props.docZoomPercentage,
        o = i || n,
        s;
      return o ? (!(!i && n) || !this.rootBatchUpdater.isBusy()) && o : o;
    }
    colIncrementUpdate(e) {
      if (!this.unMounted) {
        if (this.isBusy()) throw new yu("Document is busy on Updating");
        var t = e.model,
          r = e.pageSettings,
          n = e.remoteCursors,
          i = e.theoremInfo,
          o = e.selection;
        if (o && (o = {
          selected: bu.correctIfChange(t, o.selected, this.state.mainSelected),
          extendedSelected: bu.correctIfChange(t, o.extendedSelected, this.state.extendedMainSelected)
        }), o && o.extendedSelected && Rt.isSameRoute(o.selected, o.extendedSelected) && (o = Nu(Nu({}, o), {}, {
          extendedSelected: void 0
        })), o && bu.isTheSameLineAndChar(this.state.mainSelected, o.selected) && bu.isTheSameLineAndChar(this.state.extendedMainSelected, o.extendedSelected) && (o = void 0), t) {
          this.changeSessionHandler.setSessionValue("surpressRaiseModelChanged", !0), this.changeSessionHandler.setSessionValue("ignoreFindingMovingBlocksForRootEditor", !0), this.needPreventScroll(), this.changeSessionHandler.setSessionValue("changeByCol", !0);
          var s = o ? {
            mainSelected: o.selected,
            extendedMainSelected: o.extendedSelected
          } : void 0;
          this.modelTransaction.set(t, null != r ? r : "unchanged", null != i ? i : "unchanged", s);
        } else this.modelTransaction.set("unchanged", null != r ? r : "unchanged", null != i ? i : "unchanged");
        n && this.remoteCursorHandler.setRemoteCursors(n.otherParties, n.cursors);
      }
    }
    enableDoc(e) {
      e != this.state.docEnabled && this.setState({
        docEnabled: e
      });
    }
    setModel(e, t) {
      this.state.docEnabled && (t = t || this.getInitSelect(), this.changeSessionHandler.setSessionValue("surpressRaiseModelChanged", !0), this.changeSessionHandler.setSessionValue("ignoreFindingMovingBlocksForRootEditor", !0), h().unstable_batchedUpdates(() => {
        this.setMainModel(e, {
          mainSelected: t,
          extendedMainSelected: void 0
        }), this.props.readOnly || (this.editorContainerController.clearHistory(), this.changeSessionHandler.setSessionValue("ignoreAddingToHistory", !0));
      }));
    }
    showImportFromLatex() {
      this.latexIoHandler.showImportFromLatex();
    }
    hidenInputFocus(e) {
      this.focusHandler.hidenInputFocus(e);
    }
    getChildContext() {
      var e = this.pageSettingsHandler.getPageSettings();
      return {
        mathFontSizeBase: this.props.mathFontSizeBase || e.mathFontSize,
        fontSizeBase: e.fontSize,
        baseMathModeFontFamily: e.mathFontName,
        fixedContextHandler: this.fixedContextHandler
      };
    }
    getElementRoot() {
      return h().findDOMNode(this);
    }
    componentWillMount() {
      this.refreshFixedContextHandler(), this.pageSettingsHandler.upgradePageWidthNewFormat(), this.delayRenderHandler.notifyMathTypeComponentWillMount("diagram" == this.props.oneMode);
    }
    refreshFixedContextHandler() {
      this.fixedContextHandler.setDarkMode(Xe.A.isDarkMode() || !!this.getPageSettings().isDarkMode), this.fixedContextHandler.setCodeSectionFontSize(this.getPageSettings().codeSectionFontSize);
    }
    componentWillUnmount() {
      this.unMounted = !0, this.delayRenderHandler.deactivateHandler(), this.mathVisibleViewHandler.cleanUp(), this.mobileSupportHandler.unregisterSelectionMarkTouchEvents(), this.mobileSupportHandler.unregisterTouchHold(), this.editorCursorHandler.cleanUp(), this.editorScrollHandler.cleanUp(), this.regionHighlightHandler.deactivateHandler();
    }
    showError(e, t) {
      this.messageBoxHandler.showError(e, t);
    }
    showInfo(e, t) {
      this.messageBoxHandler.showInfo(e, t);
    }
    clearMessage() {
      this.messageBoxHandler.clearMessage();
    }
    processLineTagNumbering() {
      this.mathTagHandler.processLineTagNumbering();
    }
    processAnchorTagAndRef() {
      this.anchorTagHandler.processRefAnchor();
    }
    processFootnoteNumbering() {
      this.footnoteHandler.processFootnote();
    }
    getSafeSelected() {
      return this.editorCursorHandler.getSafeSelected();
    }
    getSafeExtendedSelected() {
      return this.state.extendedMainSelected;
    }
    getExtendedSelected() {
      return this.state.extendedMainSelected;
    }
    setScrollElement(e) {
      this.editorScrollHandler.setScrollElement(e);
    }
    getExpecEditorTopPosition() {
      return this.editorScrollHandler.getExpecEditorTopPosition();
    }
    componentDidMount() {
      Xe.A.testDocErrorShouldLog && setTimeout(() => {
        this.props.onError();
      }, 4e3), this.docZoomContainer.zoomRatio = this.props.docZoomPercentage / 100, this.docZoomContainer.mtElement = this.mathType, w.A.isCurrentDocumentInCorruption() || (this.rootBatchUpdater.processMount(), (0, p.O4)(this.mathType, this.state.mainModel), this.casHandler.loadPersistedCasDialogState());
    }
    componentDidUpdate(e, t) {
      w.A.isCurrentDocumentInCorruption() || (this.docZoomContainer.zoomRatio = this.props.docZoomPercentage / 100, this.docZoomContainer.mtElement = this.mathType, this.rootBatchUpdater.processUpdate(e, t), (0, p.O4)(this.mathType, this.state.mainModel));
    }
    insertBySymbolInfo(e) {
      this.insertDataHandler.insertBySymbolInfo(e);
    }
    insertText(e) {
      this.insertDataHandler.insertText(e);
    }
    buildTagSelection() {
      this.mathTagHandler.buildTagSelection();
    }
    showImportLatex() {
      this.latexIoHandler.showImportFromLatex();
    }
    needShowCursor() {
      this.editorCursorHandler.requestShowCursor();
    }
    getCursorGeoPosition() {
      return this.editorCursorHandler.getCursorGeoPosition();
    }
    checkIsOneLineChanged() {
      return this.changeSessionHandler.getSessionValue("isOneLineChanged");
    }
    setPreventScroll(e) {
      this.changeSessionHandler.setSessionValue("preventScroll", e);
    }
    setSurpressClearCursorHistory(e) {
      this.changeSessionHandler.setSessionValue("surpressClearCursorHistory", e);
    }
    setIsOneLineChanged(e) {
      this.changeSessionHandler.setSessionValue("isOneLineChanged", e);
    }
    changeModel(e, t, r, n) {
      return !(this.isSelectOnly() && !n) && !(this.isOneLineOnly() && e.lines.length > 1) && ("diagram" != this.getOneMode() || !(e.lines.length > 1 || e.lines[0].blocks.length > 1)) && (this.changeSessionHandler.setSessionValue("ignoreAddingToHistory", t), r ? this.setMainModel(e, {
        contextMenuShowInfo: null,
        mainSelected: r.mainSelected,
        extendedMainSelected: r.extendedMainSelected
      }) : this.setMainModel(e, {
        contextMenuShowInfo: null
      }), !0);
    }
    showPreventInputMessage() {
      Xe.A.inProd() ? console.warn("There is another action on busy processing") : this.showMessage("Please wait a little bit for Mathcha to process before inputting", "warning", 7e3);
    }
    setMainModel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
      this.modelTransaction.set(e, "unchanged", "unchanged", t);
    }
    clearSelection() {
      this.selectionHandler.clearExtendedSelected();
    }
    shouldPreventSelect(e) {
      return this.isDiagramOnly() ? 0 != e.lineIndex || 0 != e.charIndex || !e.selected && !e.controlled : (this.isMathOnly() || this.isCodeSectionOnly()) && e && !e.selected;
    }
    refreshSelection() {
      this.selectionHandler.refreshSelection();
    }
    clearCopiedBlockStyle() {
      this.selectionSettingsHandler.clearCopiedBlockStyle();
    }
    clearEditLineInfo(e) {
      return null != e && e.cursorContext ? Nu(Nu({}, e), {}, {
        cursorContext: Nu(Nu({}, e.cursorContext), {}, {
          htmlEditor: void 0,
          htmLine: void 0
        })
      }) : e;
    }
    handleListItemSelected(e) {
      var t = Ze.A.findLeafSelected(e);
      if (this.selectionHandler.isListItemSelected(t)) {
        var r = Ze.A.findLeafSelected(this.getSafeSelected());
        if (!this.selectionHandler.isListItemSelected(r)) return e;
        if ("all" == r.listTypeSelect) return Ze.A.changeLeafSelected(e, {
          listTypeSelect: "level"
        });
        if ("level" == r.listTypeSelect) return Ze.A.changeLeafSelected(e, {
          listTypeSelect: "single"
        });
        if ("single" == r.listTypeSelect) return Ze.A.changeLeafSelected(e, {
          listTypeSelect: "single"
        });
      }
      return e;
    }
    forceStopCompositionOrReserve() {
      return Xe.A.isIos() ? this.editorContainerController.isInInputComposition() ? (this.keyboardInputHandler.hideCompositionIndicator(), this.editorContainerController.cleanInputComposition(), this.keyboardInputHandler.cleanReserveAndInput(), this.keyboardInputHandler.temporaryPreventInputUntilCompositionEnd(), void this.focusHandler.forceRefreshFocus()) : this.keyboardInputHandler.hasAnyReserveInput() ? (this.keyboardInputHandler.cleanReserveAndInput(), this.focusHandler.forceRefreshFocus()) : void 0 : this.editorContainerController.isInInputComposition() ? (this.keyboardInputHandler.hideCompositionIndicator(), this.editorContainerController.cleanInputComposition(), this.focusHandler.forceRefreshFocus()) : void 0;
    }
    resetTempVariables() {
      this.confirmDeleteHandler.clearConfirmDelete(), this.tabularRowColumnHandler.clear();
    }
    isConfirmDeleteWithTabular() {
      return this.confirmDeleteHandler.isConfirmDeleteWithTabular();
    }
    isConfirmDeleted() {
      return this.confirmDeleteHandler.isConfirmDeleted();
    }
    clearConfirmDelete() {
      return this.confirmDeleteHandler.clearConfirmDelete();
    }
    requestConfirmDeleteTabularToggleRowColumn() {
      this.confirmDeleteHandler.requestConfirmDeleteTabularToggleRowColumn();
    }
    requestExportSelection() {
      return this.latexIoHandler.requestExportSelection();
    }
    requestExportAll() {
      return this.latexIoHandler.requestExportAll();
    }
    setMouseDown(e) {
      this.mouseInputHandler.setMouseDown(e);
    }
    getSelectedJson() {
      var e = this.editorContainerController.getSelectionData(this.getContainerModel()),
        t = this.getContainerModel();
      return ut.A.toCopyText(e, t, !0);
    }
    getMathTypeBaseClass() {
      return v()("math-type-no-print", {
        "dark-mode": this.fixedContextHandler.isDarkMode(),
        "paragraph-mark": !0,
        enabled: this.state.docEnabled
      });
    }
    getMathTypeStyle() {
      var e = ln.m.getMaringOrDefaultInPixel(this.getPageSettings().pageSize.margin, "clamp"),
        t = this.pageSettingsHandler.getDocumentWidth(),
        r = this.props.deprecatedPageWidth,
        n = (e, t) => {
          if ("number" == typeof e) return e;
          var r = parseFloat(e);
          return isNaN(r) ? t : r;
        },
        i = e => {
          var t = this.state.casDockLayout;
          return t ? "right" === t.dockMode ? Nu(Nu({}, e), {}, {
            marginRight: n(e.marginRight, 0) + t.dockSize
          }) : void 0 : e;
        };
      return r ? this.wrapByZoom(i(Nu({
        paddingLeft: e.left,
        paddingTop: e.top,
        paddingRight: e.right,
        paddingBottom: e.bottom,
        width: ln.m.calculatePageWidthCoutingPadding(t, e, "clamp")
      }, this.props.style))) : this.wrapByZoom(i(this.props.style || {}));
    }
    wrapByZoom(e) {
      var t = this.props.docZoomPercentage / 100;
      return 1 != t ? Nu(Nu({}, e), {}, {
        transform: "scale(".concat(t, ")"),
        transformOrigin: "left top"
      }) : e;
    }
    renderReadOnly() {
      return c().createElement("math-type", {
        "aria-label": "Editor Content",
        key: this.mathTypeKey,
        style: this.getMathTypeStyle(),
        ref: this.handleGetMathTypeRef,
        class: v()(this.getMathTypeBaseClass(), "read-only", this.props.className, {
          primary: this.props.primary
        })
      }, this.renderMathEditContainer(!0), this.remoteCursorHandler.render(), this.delayRenderHandler.renderProcessingDialog());
    }
    getRootEditStyle() {
      return this.props.rootEditorStyle ? Nu(Nu({}, this.pageSettingsHandler.getAsCssStyle()), this.props.rootEditorStyle) : this.pageSettingsHandler.getAsCssStyle();
    }
    renderRootEditorArea(e, t) {
      return c().createElement(L, {
        keyName: "root-edit-area",
        showBorderOnSelected: !1,
        pageSection: t,
        style: this.getRootEditStyle(),
        ignoreFindingMovingBlocks: this.changeSessionHandler.getSessionValue("ignoreFindingMovingBlocksForRootEditor"),
        fracLevel: 0,
        fontSizeRatio: 1,
        className: v()("root-editor", {
          "restricted-view": this.isRestrictedView(),
          "test-view": Xe.A.isTestEnv() && !this.props.restrictedView
        }),
        rootLevel: !0,
        readOnly: this.props.readOnly,
        isOneLineChanged: this.changeSessionHandler.getSessionValue("isOneLineChanged"),
        ref: this.getRootEditAreaRef,
        data: this.state.mainModel,
        selected: e ? void 0 : this.state.mainSelected,
        extendedSelected: e ? void 0 : this.state.extendedMainSelected,
        onDataChanged: this.onDataChanged,
        onSelectedChanged: e ? Dt.A.noopFunc : this.onSelectedChanged,
        firstLinePrefix: this.props.firstLinePrefix,
        firstLinePrefixStyle: this.props.firstLinePrefixStyle
      });
    }
    renderMathEditContainer(e) {
      var t = this.getPageSettings().pageSection,
        r = this.renderRootEditorArea(e, t);
      return e ? c().createElement("math-edit-container", {
        style: this.props.mathEditContainerStyle,
        ref: this.mouseInputHandler.getMathEditContainerRef
      }, r, this.footnoteHandler.render(Hu)) : c().createElement("math-edit-container", {
        style: this.props.mathEditContainerStyle,
        onMouseMove: this.mouseInputHandler.onEditorMouseMove,
        onMouseDown: this.mouseInputHandler.onEditorMouseDown,
        onMouseUp: this.mouseInputHandler.onEditorMouseUp,
        onDoubleClick: this.mouseInputHandler.onEditorDoubleClick,
        ref: this.mouseInputHandler.getMathEditContainerRef
      }, r, this.footnoteHandler.render(Hu));
    }
    notifyDomElementRectCache(e) {
      this.changeSessionHandler.setSessionValue("domElementRectCache", e);
    }
    requestAutoComplete() {
      return this.autoCompleteHandler.requestAutoComplete();
    }
    executeCut(e) {
      return this.copyPasteHandler.executeCut(e);
    }
    executeCopy() {
      return this.copyPasteHandler.executeCopy();
    }
    getInternalClipboard() {
      return this.internalClipboard;
    }
    getHiddenInput() {
      return this.focusHandler.getHiddenInput();
    }
    pasteFrom(e) {
      return this.copyPasteHandler.pasteFrom(e);
    }
    isRestrictedView() {
      return this.props.restrictedView;
    }
    isPlainTextOnly() {
      return "plain-text" == this.props.oneMode;
    }
    isMathOnly() {
      var e;
      return "math-mode" == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).oneMode;
    }
    isCodeSectionOnly() {
      var e;
      return "code-section" == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).oneMode;
    }
    isDiagramOnly() {
      var e;
      return "diagram" == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).oneMode;
    }
    isOneLineOnly() {
      return !1 === this.props.multiline;
    }
    showContextMenu(e, t, r) {
      this.contextMenuHandler.showContextMenu(e, t, r);
    }
    isArrowKeyPressOrHold() {
      return this.mobileSupportHandler.isArrowKeyPressOrHold();
    }
    isToolBarReady() {
      return this.toolbarHandler.isToolBarReady();
    }
    setFindAndReplaceElementArea(e) {
      this.findAndReplaceElement = e;
    }
    getFindAndReplaceElement() {
      return this.findAndReplaceElement;
    }
    showPageSetting() {
      this.pageSettingsHandler.showPageSetting();
    }
    getCursorHTMLElement() {
      return this.editorCursorHandler.getCursorHTMLElement();
    }
    showLinkInput() {
      this.hyperlinkInputBoxHandler.showLinkInput(!0);
    }
    unstable_handleError(e) {
      _i.A.error(e), this.error = !0, this.props.onError && this.props.onError(), w.A.requestDocumentCorruption();
    }
    showTabularRowColumnIndication() {
      this.tabularRowColumnHandler.show();
    }
    setMathFontName(e) {
      this.selectionSettingsHandler.setMathFontName(e);
    }
    insertImageContainer(e, t) {
      var r = this.editorContainerController.insertImageContainer(this.getContainerModel(), e, t);
      this.handleResult(r);
    }
    showMathTemplate() {
      this.mathTemplateHandler.showMathTemplate();
    }
    showSpecialSymbolDialog(e, t) {
      this.specialSymbolHandler.showSpecialSymbolDialog(e, t);
    }
    showLatexTemplateDialog() {
      this.latexTableTemplateHandler.showLatexTemplateDialog();
    }
    getCurrentSpellCheckInfo() {
      var e,
        t,
        r,
        n,
        i = this.getPageSettings().spellCheck || {},
        o = "none";
      return Xe.A.isTestEnv() && (o = "vi"), {
        language: i.language || o,
        ignoreWords: cn.u.getIgnoreWordsOrDefault(i),
        globalIgnoreWords: null === (e = this.props.settings) || void 0 === e || null === (t = e.complexObject) || void 0 === t || null === (r = t.spellCheckInfo) || void 0 === r ? void 0 : r.ignoreWords
      };
    }
    invalidatePageSettingCache() {
      this.changeSessionHandler.setSessionValue("pageSettings", void 0);
    }
    setPageSettings(e) {
      this.modelTransaction.set("unchanged", e, "unchanged");
    }
    setTheoremInfo(e) {
      this.modelTransaction.set("unchanged", "unchanged", e);
    }
    refreshDocForPageSection() {
      this.changeSessionHandler.end(), this.refreshFixedContextHandler(), this.forceUpdate(), E.A.next(() => {
        this.spellCheckHandler.refreshSpellCheckAll(), this.refreshSelection();
      }, 10);
    }
    retryLoadingSpellCheck() {
      this.spellCheckHandler.retryLoadingSpellCheck();
    }
    saveGlobalIgnoreWord(e) {
      if (this.props.onUserSettingsChange) {
        var t,
          r,
          n = null === (t = this.props.settings) || void 0 === t || null === (r = t.complexObject) || void 0 === r ? void 0 : r.spellCheckInfo,
          i = Nu(Nu({}, n), {}, {
            addedDics: (null == n ? void 0 : n.addedDics) || [],
            ignoreWords: e
          });
        return this.props.onUserSettingsChange({
          type: "spellcheck-info",
          newInfo: i
        });
      }
      return Promise.resolve();
    }
    addIgnoreWord(e, t) {
      if (t) {
        var r,
          n,
          i = null === (r = this.props.settings) || void 0 === r || null === (n = r.complexObject) || void 0 === n ? void 0 : n.spellCheckInfo,
          o = "".concat((null == i ? void 0 : i.ignoreWords) || "", "\n").concat(e);
        this.saveGlobalIgnoreWord(o);
      } else this.pageSettingsHandler.addIgnoreWord(e);
    }
    closeAutoComplete() {
      this.autoCompleteHandler.closeAutoComplete();
    }
    forceAllCaptionNumbering() {
      this.captionNumberingHandler.processAllCaptions(!0);
    }
    notifyTableCaptionNumbering() {
      this.captionNumberingHandler.notifyCaptionNumbering("notify", "table");
    }
    raiseSavePageSettingsAsDefault(e) {
      return this.props.onPageInformationChange ? this.props.onPageInformationChange({
        pageSettings: e
      }, "merge") : Promise.resolve(null);
    }
    raiseSaveTheoremAsDefault(e) {
      return this.props.onPageInformationChange ? this.props.onPageInformationChange({
        theoremInfo: e
      }, "merge") : Promise.resolve(null);
    }
    raiseSaveSectionAsDefault() {
      if (this.props.onPageSettingChange) {
        var e = this.getPageSettings().pageSection;
        return this.props.onPageSettingChange({
          pageSection: e
        }, "merge");
      }
      return Promise.resolve(null);
    }
    getCursorSelected() {
      return this.getSafeSelected();
    }
    getBaseMathModeFontFamily() {
      return this.getPageSettingsSessionCache().mathFontName;
    }
    getBaseFontSize() {
      return this.getPageSettingsSessionCache().fontSize;
    }
    setRemoteCursors(e, t) {
      this.remoteCursorHandler.setRemoteCursors(e, t);
    }
    removeSites(e) {
      this.remoteCursorHandler.removeSites(e);
    }
    setSelected(e) {
      (!this.isMathOnly() && !this.isCodeSectionOnly() || e.selected) && this.selectionHandler.setSelected(e);
    }
    setSelection(e, t) {
      this.selectionHandler.setSelection(e, t);
    }
    extendSelection(e) {
      this.selectionHandler.extendSelection(e);
    }
    onUndoRequest() {
      this.raiseColEvent({
        type: "undo"
      });
    }
    onRedoRequest() {
      this.raiseColEvent({
        type: "redo"
      });
    }
    getFontsLoader() {
      if (!this.props.fontsLoader) throw new Error("not fonts loader");
      return this.props.fontsLoader;
    }
    temporaryHideCursor() {
      this.editorCursorHandler.temporaryHideCursor();
    }
    requestMsgBox(e, t, r, n) {
      this.props.onRequestMsgBox && this.props.onRequestMsgBox(e, t, r, n);
    }
    requestAddItem(e) {
      var t = Je.A.getByName(e);
      t && this.insertBySymbolInfo(t);
    }
    hidenInputFocusDelay() {
      this.focusHandler.hidenInputFocusDelay();
    }
    requestFocusWithoutScroll() {
      return this.focusHandler.requestFocusWithoutScroll();
    }
    notifyScroll() {
      this.refreshDelayRenderView();
    }
    refreshDelayRenderView() {
      this.props.deplayRenderEnabled && this.rootBatchUpdater.refreshDelayRender();
    }
    refreshRectsOnFind() {
      this.regionHighlightHandler.refreshRects();
    }
    isHidden() {
      return this.props.isMtHidden && this.props.isMtHidden();
    }
    renderSpaceAround() {
      if (this.props.spaceAround || this.state.casDockLayout) return c().createElement("div", {
        className: "mt-sa",
        style: this.getSpaceAroundStyle()
      });
    }
    getSpaceAroundStyle() {
      var e = this.state.casDockLayout;
      return e && "right" == e.dockMode ? {
        right: -240
      } : {};
    }
    getCasInputBlocks() {
      var e = this.getContainerModel();
      if (e && e.isMathModeSelected()) {
        var t = e.isInSelection() ? this.editorContainerController.getSelectionData(e, !1) : [],
          r;
        if (t && 1 == t.length && t[0].blocks.length > 0) return f().cloneDeep(t[0].blocks);
        if (e.cursorSelected) if (lt.A.handleEditor(e, e => (r = e.editorModel.lines[e.editorSelected.lineIndex], null), !1), r && !(r.blocks.length <= 0)) return f().cloneDeep(r.blocks);
      }
    }
    insertCasResultBlocks(e) {
      var t = this.getContainerModel();
      if (t && t.isMathModeSelected() && e && !(e.length <= 0) && t.cursorSelected) {
        var r = {
            id: vt.w.nextId(),
            blocks: f().cloneDeep(e)
          },
          n = lt.A.handleEditor(t, e => {
            var t = Math.min(e.editorSelected.lineIndex + 1, e.editorModel.lines.length),
              n = e.editorModel.lines.slice(0, t).concat([r], e.editorModel.lines.slice(t));
            return {
              editorModel: Nu(Nu({}, e.editorModel), {}, {
                lines: n
              }),
              editorSelected: Nu(Nu({}, e.editorSelected), {}, {
                lineIndex: t,
                charIndex: 0
              })
            };
          }, !1);
        this.changeModel(n.editorModel, !1, {
          mainSelected: n.editorSelected,
          extendedMainSelected: void 0
        }, !1);
      }
    }
    requestCasDialog() {
      this.casHandler.requestCasDialog();
    }
    updateCasDockLayout(e) {
      this.setState({
        casDockLayout: e
      });
    }
    renderPageView() {
      Xe.A.enablePageView;
    }
    render() {
      return this.error ? (console.error(this.error), c().createElement("math-type-error", {
        style: {
          padding: 10,
          display: "inline-block",
          color: "orange",
          fontSize: 13
        }
      }, "This document has been corrupted, please report to ", c().createElement("b", null, "team@mathcha.io"), " for recovery, sorry for this issue.", c().createElement("br", null), "Please send your ", c().createElement("b", null, "username"), " and ", c().createElement("b", null, "name"), " of this document.")) : this.isReadOnly() ? this.renderReadOnly() : c().createElement("math-type", {
        "aria-label": "Editor Content",
        key: this.mathTypeKey,
        style: this.getMathTypeStyle(),
        onContextMenu: this.contextMenuHandler.onMathTypeContextMenu,
        class: v()(this.getMathTypeBaseClass(), this.props.className, {
          "select-only": this.props.selectOnly,
          "mobile-tablet": Xe.A.isMobileOrTablet(),
          ios: Xe.A.isIos(),
          "math-only": this.isMathOnly(),
          "code-section-only": this.isCodeSectionOnly(),
          primary: this.props.primary
        }),
        tabIndex: -1,
        onDragEnter: this.imageLibraryHandler.handleDragEnter,
        onDragOver: this.imageLibraryHandler.handleDragOver,
        onDragLeave: this.imageLibraryHandler.handleDragLeave,
        onDrop: this.imageLibraryHandler.handleDrop,
        onMouseDown: this.mouseInputHandler.onMathTypeMouseDown,
        onMouseUp: this.mouseInputHandler.onMathTypeMouseUp,
        onTouchStart: this.mobileSupportHandler.onMathTypeTouchStart,
        onTouchEnd: this.mobileSupportHandler.onMathTypeTouchEnd,
        onTouchCancel: this.mobileSupportHandler.onMathTypeTouchEnd,
        ref: this.handleGetMathTypeRef,
        onFocus: this.focusHandler.onMathTypeFocus,
        onBlur: this.focusHandler.onMathTypeBlur
      }, this.renderSpaceAround(), this.focusHandler.renderHiddenInputWrapper(), c().createElement("hidden-input-wrapper", {
        "aria-hidden": !0,
        ref: this.focusHandler.getHiddenInputWrapperRef
      }, c().createElement("textarea", {
        spellCheck: !1,
        onCopy: this.copyPasteHandler.onCopy,
        onCut: this.copyPasteHandler.onCut,
        onPaste: this.copyPasteHandler.onPaste,
        autoCorrect: "off",
        autoCapitalize: "off",
        ref: this.focusHandler.getHiddenInputRef,
        onInput: this.keyboardInputHandler.onEditorInput,
        onKeyDown: this.keyboardInputHandler.onEditorKeyDown,
        onKeyUp: this.keyboardInputHandler.onEditorKeyUp,
        readOnly: Xe.A.isMobileOrTablet() && this.props.selectOnly,
        onCompositionStart: this.keyboardInputHandler.onEditorCompositionStart,
        onCompositionEnd: this.keyboardInputHandler.onEditorCompositionEnd,
        onBlur: this.focusHandler.onHiddenInputBlur,
        onFocus: this.focusHandler.onHiddenInputFocus
      })), c().createElement("hidden-input-wrapper", {
        "aria-hidden": !0,
        ref: this.focusHandler.getHiddenInputWrapperForFocusRef
      }, c().createElement("input", {
        spellCheck: !1,
        onCopy: this.copyPasteHandler.onCopy,
        onCut: this.copyPasteHandler.onCut,
        onPaste: this.copyPasteHandler.onPaste,
        autoCorrect: "off",
        autoCapitalize: "off",
        className: "focus-element",
        readOnly: !0,
        ref: this.focusHandler.getHiddenFocusRef,
        onKeyUp: this.keyboardInputHandler.onEditorKeyUp,
        onKeyDown: this.keyboardInputHandler.onEditorKeyDown,
        onBlur: this.keyboardInputHandler.hideAllHotkeysByBlur
      })), this.toolbarHandler.renderToolBar(this.props.requestRenderToolbar), this.renderMathEditContainer(!1), this.selectionHandler.renderSelection(), this.editorCursorHandler.renderCursor(), this.autoCompleteHandler.renderAutoComplete(), this.latexIoHandler.renderExportSettings(), this.confirmDeleteHandler.renderConfirmDelete(), this.latexIoHandler.renderImportLatexBox(), this.keyboardInputHandler.renderCompositionIndicator(), this.itemsBarHandler.renderItemsBar(), this.contextMenuHandler.renderContextMenu(), this.mobileSupportHandler.renderSelectionMark(), this.mobileSupportHandler.renderArrowKeySupport(), this.mobileSupportHandler.renderCopyPasteButtonForMobile(), this.regionHighlightHandler.renderRegionHighlight(this.state.mainModel), this.handlerRenderSelect.render(), this.spellCheckHandler.render(), this.remoteCursorHandler.render(), this.delayRenderHandler.renderProcessingDialog(), this.casHandler.renderCasDialog(), this.renderPageView());
    }
  }
  (0, n.A)(Hu, "childContextTypes", {
    mathFontSizeBase: x().any,
    fontSizeBase: x().any,
    showMessage: x().any,
    baseMathModeFontFamily: x().any,
    fixedContextHandler: x().any
  }), (0, n.A)(Hu, "defaultProps", {
    docZoomPercentage: 100
  });
  const Wu = Hu;
};
