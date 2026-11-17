/* module 66464 — 4905 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    F: () => v,
    t: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(55007),
    l = r(80931),
    c = r(40490),
    d = r(32485),
    h = r.n(d),
    p = r(19340),
    u = r(7258),
    g = r(15706);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "accentRef", g.q.create()), (0, n.A)(this, "shouldAdjustSymbolWithCharacterSign", !1), (0, n.A)(this, "symbol", void 0);
    }
    notifyChildrenWidthChange() {
      this.accentRef.invalidateDrawing();
    }
    getClassName() {
      return h()("over-symbol", {
        "ig-ex-br": !this.getMtFuncs().getBracketSettings().extendBracketsForOversymbol
      });
    }
    getSymbol() {
      return "*";
    }
    getPowerIndexInfo() {
      var e = this.getElementRect(this.refMap.value.editor);
      return {
        rect: {
          top: e.top,
          height: e.bottom - e.top
        },
        shouldConsiderAsChar: this.isSingleTextBlockFirstLine(this.props.data.elements.value)
      };
    }
    getInnerSymbolClass() {
      if (!this.shouldAdjustSymbolWithCharacterSign) return "";
      if (this.isStyleMathbf(this.props.data)) return "ignore-shift";
      var e = this.props.data.elements.value;
      return this.isOneTextBlock(e) && this.isStyleMathbf(e.lines[0].blocks[0]) ? "ignore-shift" : this.isSingleTextBlockLeftUpperSign(e) ? "left-sign" : this.isSingleTextBlockRightUpperSign(e) ? "right-sign" : this.isSingleOneCharTextBlockNumber(e) ? "ignore-shift" : "";
    }
    isStyleMathbf(e) {
      var t;
      return "\\mathbf" == (null === (t = e.style) || void 0 === t ? void 0 : t.mathType);
    }
    getSymbolHeight() {
      return this.getRoundEmStr(.4);
    }
    getMarginBottom() {
      return this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.4) : this.getRoundEmStr(-.2);
    }
    getSymbolClassName() {
      return null;
    }
    renderComponent() {
      var e = (0, p.zN)(this.context.baseMathModeFontFamily),
        t = (0, u.Q5)(e, {
          command: this.props.data.text,
          fontSize: this.getMathFontSizePixel(),
          fixedContextHandler: this.context.fixedContextHandler,
          notifyData: this.props.data.elements.value,
          drawingRef: this.accentRef.ref
        }),
        r = this.props.data.elements.value.lines,
        n = 1 === r.length && r[0].blocks.every(e => !e.type) ? r[0].blocks : void 0,
        i = n ? n.map(e => e.text).join("") : void 0,
        a = f({
          height: this.getSymbolHeight(),
          marginBottom: this.getMarginBottom(),
          fontStyle: "normal"
        }, (0, u.kO)(e, this.props.data.text, this.isSingleTextBlockAndUperSmall(this.props.data.elements.value), !1, i)),
        l = this.getSymbolClassName ? this.getSymbolClassName() : null;
      return [o().createElement("symbol", {
        key: "symbol",
        style: a,
        className: l,
        ref: e => this.symbol = e
      }, t || o().createElement("inner", {
        className: this.getInnerSymbolClass()
      }, this.getSymbol())), o().createElement(s.A, f(f({
        key: "value",
        className: "center",
        style: {
          display: "inline-flex",
          width: "100%"
        }
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        optimizeForOneLine: !0
      }))];
    }
  }
  class v extends l.A {
    constructor() {
      super(), this.isOverSymbol = !0;
    }
    getLatextName() {
      return "\\tilde";
    }
    getSymbol() {
      return "~";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(c.A, {
            symbol: this.symbol
          });
        }
      });
    }
    toMathml(e, t) {
      return {
        type: "mover",
        base: t.generateEditor(e.elements.value),
        accent: !0,
        overscript: {
          type: "mo",
          value: this.getSymbol()
        }
      };
    }
  }
};
