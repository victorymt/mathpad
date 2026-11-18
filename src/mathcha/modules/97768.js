/* module 97768 — 5147 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    WideTilde: () => y,
    WideTildeSc: () => b,
    default: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(55007),
    l = r(516),
    c = r(80931),
    d = r(12481),
    h = r(40490),
    p = r(15706),
    u = r(19340),
    g = r(7258);
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
    constructor(e) {
      super(e), (0, n.A)(this, "composedRef", p.q.create()), (0, n.A)(this, "renderSvg", (e, t, r) => {
        var n = (0, g.qJ)((0, u.zN)(this.context.baseMathModeFontFamily), this.props.data.text, e, t, r);
        if (void 0 !== n) return n;
        var i = {
            left: 0,
            top: r / 18,
            right: e - 0,
            bottom: Math.max(Math.min(e / 4, t / 3), r / 9) + r / 18
          },
          s = {
            x: (i = this.translateToBottom(i, t, r)).left,
            y: i.bottom
          },
          a = {
            x: (i.right + i.left) / 16,
            y: i.top
          },
          c = {
            x: (i.right + i.left) / 4,
            y: i.top
          },
          d = {
            x: (i.right + i.left) / 2,
            y: (i.bottom - i.top) / 4 * 3 + i.top
          },
          h = {
            x: i.left + (i.right - i.left) / 16 * 15,
            y: i.top + (i.bottom - i.top) / 2
          },
          p = {
            x: i.right,
            y: i.top
          },
          m,
          f,
          y,
          v = "M".concat(s.x.toFixed(2), ",").concat(s.y.toFixed(2)) + " " + "C ".concat(a.x.toFixed(2), " ").concat(a.y.toFixed(2), ", ").concat(c.x.toFixed(2), " ").concat(c.y.toFixed(2), ", ").concat(d.x.toFixed(2), " ").concat(d.y.toFixed(2), " ") + " " + "S ".concat(h.x.toFixed(2), " ").concat(h.y.toFixed(2), ", ").concat(p.x.toFixed(2), " ").concat(p.y.toFixed(2));
        return o().createElement("path", {
          d: v,
          strokeWidth: (0, l.U)(r),
          fill: "none"
        });
      }), this.containerClassName = "wide-tilde-symbol";
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    translateToBottom(e, t, r) {
      var n = Math.max(t - e.bottom - r / 18, 0);
      return e.bottom += n, e.top += n, e;
    }
    renderComponent() {
      var e = f({
        display: "block",
        width: "100%",
        position: "relative",
        height: this.getRoundEmStr(.5),
        marginBottom: this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.3) : this.getRoundEmStr(-.1)
      }, (0, g.kO)((0, u.zN)(this.context.baseMathModeFontFamily), this.props.data.text, this.isSingleTextBlockAndUperSmall(this.props.data.elements.value), !0));
      return [o().createElement("symbol", {
        key: "symbol",
        style: e
      }, o().createElement(d.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        style: v,
        changedData: (0, g.eS)((0, u.zN)(this.context.baseMathModeFontFamily)),
        renderSvg: this.renderSvg
      })), o().createElement(s.A, f(f({
        key: "value"
      }, this.buildMetaDataFromName("value")), {}, {
        style: {
          display: "inline-flex"
        },
        optimizeForOneLine: !0,
        borderIfEmpty: this.isSelected()
      }))];
    }
  }
  var v = {
    position: "absolute",
    left: 0,
    top: 0,
    display: "block",
    width: "100%",
    height: "100%"
  };
  class b extends c.A {
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\widetilde";
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
          return o().createElement(h.A, {
            symbol: this.symbol
          });
        }
      });
    }
    toLatex(e, t, r) {
      var n = "widetilde";
      return this.isEmptyOrOneCharEditor(e.elements.value) && (n = "tilde"), "\\".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
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
  const x = new b();
};
