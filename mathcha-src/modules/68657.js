/* module 68657 — 6124 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(47858),
    c = r(73524),
    d = r(53778),
    h = r(516),
    p = r(3897),
    u = r(32485),
    g = r.n(u),
    m = r(25644),
    f = r(5066),
    y = r(21774);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var x = {
    hasTextBlock: !0,
    haveComposite: !1,
    haveIndex: !1,
    haveLowerChar: !1,
    havePower: !1,
    haveUpperChar: !1
  };
  class C extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "handleRef", e => {
        e && (this.editor = e, e.reactInstance = this);
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.model != t.model || e.className != t.className || e.showBorder != t.showBorder || e.showBorderOnSelected != t.showBorderOnSelected || e.borderIfEmpty != t.borderIfEmpty || !y.A.areEqualShallow(e.style, t.style) || e.selected != t.selected || e.fontSizeRatio != t.fontSizeRatio || e.fontScale != t.fontScale || e.mgTopEm != t.mgTopEm || e.mgBottomEm != t.mgBottomEm || e.borderIfEmpty != t.borderIfEmpty;
    }
    getKeyName() {
      return this.props.keyName;
    }
    getModel() {
      return this.props.model;
    }
    getFontSizeRatio() {
      return this.props.fontSizeRatio;
    }
    isEditorEmpty() {
      return 1 == this.props.model.lines.length && 0 == this.props.model.lines[0].blocks.length;
    }
    getClassName() {
      return g()(this.props.className, {
        selected: !!this.props.selected
      });
    }
    getBaseStyle() {
      var e = this.context.fixedContextHandler.getMtFuncs().getPageSettings().mathLineHeight;
      return f.X.mergeStyle(f.X.getCacheBaseStyle(e, 0, 0), this.props.style);
    }
    render() {
      var e = this.props.model.lines[0].blocks[0],
        t,
        r = this.buildStyleInfo(e, this.context.baseMathModeFontFamily).style;
      if (!e || !e.text) {
        var n = b(b({}, r), {}, {
          display: "inline-block",
          height: "1.2em",
          width: "0.5em",
          verticalAlign: "-0.17em"
        });
        return o().createElement("editarea-block", {
          ref: this.handleRef,
          class: this.getClassName(),
          style: n
        });
      }
      return o().createElement("editarea-block", {
        ref: this.handleRef,
        style: r,
        class: this.getClassName()
      }, e.text);
    }
    selectCursorFromPosition(e, t, r) {
      var n = m.A.buildCursorPosition(this.getHtmlEditor(), e, t);
      if (!n) return null;
      this.select(n, r);
    }
    getHtmlEditor() {
      return a().findDOMNode(this);
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
      this.props.onSelectedChanged({
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      }, r);
    }
    buildStyleInfo(e, t) {
      var r,
        n = this.context.fixedContextHandler.getMtFuncs().getBaseTextModeFont(),
        i,
        o;
      if (e && e.text) {
        var s = c.Ay.getUnistring(e);
        i = d.A.fillMetricsForTextBlock(s), o = l.A.getHtmlFromStyle(e, void 0, t, n) || {};
      } else i = x, o = {};
      var a = 0,
        h = 0,
        u = b(b({}, o), this.getBaseStyle());
      if (u = f.X.mergeStyle(u, this.props.style), (this.props.showBorder || this.props.borderIfEmpty && this.isEditorEmpty() || this.props.selected && (null === (r = this.props.showBorderOnSelected) || void 0 === r || r)) && (u.outline = this.context.fixedContextHandler.getOutlineSelected()), this.props.stripInfo) {
        var g = this.props.stripInfo;
        a = g.stripUp && !i.haveUpperChar ? this.getRoundEm(g.stripUpEm || p.A.upperSmallMarginTopEm) : 0, h = g.stripDown && !i.haveLowerChar ? this.getRoundEm(p.A.lowerSmallMarginBottomEm) : 0, this.mergeMargin(u, "marginTop", a), this.mergeMargin(u, "marginBottom", h);
      }
      return this.props.mgTopEm && (u.marginTop = this.parseEmValue(u, "marginTop") + this.props.mgTopEm + "em"), this.props.mgBottomEm && (u.marginBottom = this.parseEmValue(u, "marginBottom") + this.props.mgBottomEm + "em"), {
        marginTop: a,
        marginBottom: h,
        style: u
      };
    }
    parseEmValue(e, t) {
      return e[t] ? Number.parseFloat((e[t] || "0").toString()) : 0;
    }
    mergeMargin(e, t, r) {
      this.props.takeHeightIntoAccount && "marginTop" == t ? e[t] = this.parseEmValue(e, t) + r + "em" : e[t] = this.parseEmValue(e, t) / (this.props.fontScale || 1) + r + "em";
    }
    getMathFontSizePixel() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return this.context.mathFontSizeBase * this.props.fontSizeRatio * e;
    }
    getRoundEm(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return h.A.getEmRound(e, this.getMathFontSizePixel(t));
    }
  }
  (0, n.A)(C, "contextTypes", {
    mathFontSizeBase: i.PropTypes.any,
    baseMathModeFontFamily: i.PropTypes.any,
    fixedContextHandler: i.PropTypes.any
  });
};
