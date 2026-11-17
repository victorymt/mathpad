/* module 57045 — 4329 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => A
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(74987),
    a = r.n(s),
    l = r(39429),
    c = r(12481),
    d = r(40490),
    h = r(24222),
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
  var y = new l.A();
  y.push("M 0 217"), y.push("l -206 -217"), y.push("l -32 34"), y.push("l 126 152"), y.push("h -10"), y.push("v 59"), y.push("h 10"), y.push("l -126 152"), y.push("l 32 34");
  var v = 1e3,
    b = a()(function (e, t, r) {
      var n = (e || r) / v,
        i = y.shift(0, 100).scale(n, n).shift(t, 0),
        s = new l.A(),
        a = Math.max(0, t / n - 140);
      s.pushArr(["M 110 242", "h ".concat(a, " "), "v -59", "h ".concat(-a)]);
      var c = s.shift(0, 100).scale(n, n);
      return [o().createElement("path", {
        key: "0",
        d: "".concat(i.path(), " z ").concat(c.path(), " z"),
        stroke: "none"
      })];
    }),
    x = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    };
  class C extends h.W {
    constructor() {
      super(...arguments), (0, n.A)(this, "composedRef", p.q.create());
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    getArrowStyle() {
      return {
        height: this.getRoundEmStr(.6),
        marginBottom: this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.48) : this.getRoundEmStr(-.26)
      };
    }
    getFontSizeForArrow() {
      if (this.isEmptyOrOneChar(this.props.data.elements.value)) return .9 * this.getMathFontSizePixel();
    }
    renderArrow() {
      return o().createElement("arrow-symbol", {
        key: "arrow",
        style: f(f({}, this.getArrowStyle()), (0, g.PY)((0, u.zN)(this.context.baseMathModeFontFamily), this.isSingleTextBlockAndUperSmall(this.props.data.elements.value)))
      }, o().createElement(c.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        style: x,
        renderSvg: (e, t, r) => {
          var n = (0, g.tZ)((0, u.zN)(this.context.baseMathModeFontFamily), "→", e, t, this.getFontSizeForArrow() || r);
          return void 0 === n ? b(this.getFontSizeForArrow(), e, r) : n;
        },
        changedData: (0, g.t8)((0, u.zN)(this.context.baseMathModeFontFamily)) ? {
          family: this.context.baseMathModeFontFamily,
          value: this.props.data.elements.value
        } : this.props.data.elements.value
      }));
    }
  }
  class S extends h.Q {
    getViewComponent() {
      return C;
    }
    getLatextName() {
      return "\\overrightarrow";
    }
    getSymbol() {
      return "→";
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(d.A, {
            symbol: this.symbol,
            height: 10
          });
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\vec"],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(d.A, {
            symbol: this.symbol,
            height: 10
          });
        }
      })];
    }
    toLatex(e, t, r) {
      var n = "overrightarrow";
      return this.isEmptyOrOneCharEditor(e.elements.value) && (n = "vec"), "\\".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const A = new S();
};
