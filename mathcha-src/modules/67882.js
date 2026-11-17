/* module 67882 — 4300 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48397),
    a = r(61848),
    l = r(25644),
    c = r(5066);
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
  class p extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "getEditorRef", e => {
        this.editor = e, e && (e.reactInstance = this);
      });
    }
    getKeyName() {
      return this.getProps().keyName;
    }
    getModel() {
      return this.getProps().data;
    }
    getProps() {
      return this.props;
    }
    getFontSizeRatio() {
      return this.props.fontSizeRatio;
    }
    shouldComponentUpdate(e, t) {
      var r = this.getProps();
      return e.mgTopEm != r.mgTopEm || e.mgBottomEm != r.mgBottomEm || r.data != e.data || r.showBorder != e.showBorder || r.showBorderOnSelected != e.showBorderOnSelected || super.shouldComponentUpdate(e, t);
    }
    select(e, t) {
      var r = {
        cursorContext: {
          direction: e.direction,
          maxRelativeXAxisPosition: e.maxRelativeXAxisPosition,
          htmlEditor: this.editor,
          htmLine: this.editor,
          requestGeoPos: e.requestGeoPos,
          prevPos: void 0
        },
        isExtendingSelection: !!t
      };
      this.getProps().onSelectedChanged({
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      }, r);
    }
    selectCursorFromPosition(e, t, r) {
      var n = l.A.buildCursorPosition(this.editor, e, t);
      if (!n) return null;
      this.select(n, r);
    }
    getLineData(e) {
      return e ? e.data.lines[0] : this.getProps().data.lines[0];
    }
    getLineInfo() {
      return {};
    }
    getLineElement() {
      return this.editor;
    }
    isLineInfoUpdate() {
      return !1;
    }
    onChildSelectedChanged(e, t, r, n) {
      r = h(h({}, r), {}, {
        lineIndex: 0,
        charIndex: t
      }), this.getProps().onSelectedChanged(r, n);
    }
    onSelectedChanged(e, t, r, n) {
      this.onChildSelectedChanged(e, t, r, n);
    }
    onChildDataChanged(e, t, r, n) {
      var i = a.A.set(this.getProps().data.lines[0].blocks, e, r);
      this.getProps().onDataChanged(a.A.set(this.getProps().data, "lines", a.A.set(this.getProps().data.lines, "0.blocks", i)), n);
    }
    onDataChanged(e, t, r, n) {
      this.onChildDataChanged(e, t, r, n);
    }
    shouldCollectTextMetrics() {
      return !0;
    }
    parseEmValue(e, t) {
      return e[t] ? Number.parseFloat((e[t] || "0").toString()) : 0;
    }
    render() {
      var e,
        t = this.getLineData(),
        r = this.getBaseLineClass("ltr") + " " + (this.getProps().className || ""),
        n = this.getRenderBlocksInfo("ltr"),
        i = n.blockRenders,
        s = n.mutableStyle,
        a = this.getProps(),
        l = this.context.fixedContextHandler.getMtFuncs().getPageSettings();
      return s = c.X.mergeStyle(s, this.getBaseStyle(t, l)), (a.showBorder || a.selected && (null === (e = a.showBorderOnSelected) || void 0 === e || e)) && (s.outline = this.context.fixedContextHandler.getOutlineSelected()), this.props.mgTopEm && (s.marginTop = this.parseEmValue(s, "marginTop") + this.props.mgTopEm + "em"), this.props.mgBottomEm && (s.marginBottom = this.parseEmValue(s, "marginBottom") + this.props.mgBottomEm + "em"), o().createElement("editarea-line", {
        style: s,
        ref: this.getEditorRef,
        class: r
      }, o().createElement("baselineblock", null), this.renderEmptyLineBlock(t.blocks, void 0), i);
    }
  }
};
