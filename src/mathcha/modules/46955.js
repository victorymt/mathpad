/* module 46955 — 3816 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => S
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(74987),
    a = r.n(s),
    l = r(39429),
    c = r(12481),
    d = r(24222),
    h = r(15706),
    p = r(19340),
    u = r(7258);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var f = new l.A();
  f.push("M 0 217"), f.push("l -206 -217"), f.push("l -32 34"), f.push("l 126 152"), f.push("h -10"), f.push("v 59"), f.push("h 10"), f.push("l -126 152"), f.push("l 32 34");
  var y = 1e3,
    v = a()(function (e, t, r) {
      var n = (e || r) / y,
        i = f.shift(0, 100).scale(n, n).shift(t, 0),
        s = f.shift(0, 100).scale(n, n).flipX(),
        a = new l.A(),
        c = Math.max(0, t / n - 140);
      a.pushArr(["M 40 242", "h ".concat(c, " "), "v -59", "h ".concat(-c)]);
      var d = a.shift(0, 100).scale(n, n);
      return [o().createElement("path", {
        key: "0",
        d: " ".concat(i.path(), " z ").concat(d.path(), " z"),
        stroke: "none"
      }), o().createElement("path", {
        key: "1",
        d: " ".concat(s.path(), " z"),
        stroke: "none"
      })];
    }),
    b = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    };
  class x extends d.W {
    constructor() {
      super(...arguments), (0, n.A)(this, "composedRef", h.q.create());
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
        style: m(m({}, this.getArrowStyle()), (0, u.PY)((0, p.zN)(this.context.baseMathModeFontFamily), this.isSingleTextBlockAndUperSmall(this.props.data.elements.value)))
      }, o().createElement(c.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        style: b,
        renderSvg: (e, t, r) => {
          var n = (0, u.tZ)((0, p.zN)(this.context.baseMathModeFontFamily), "↔", e, t, this.getFontSizeForArrow() || r);
          return void 0 === n ? v(this.getFontSizeForArrow(), e, r) : n;
        },
        changedData: (0, u.t8)((0, p.zN)(this.context.baseMathModeFontFamily)) ? {
          family: this.context.baseMathModeFontFamily,
          value: this.props.data.elements.value
        } : this.props.data.elements.value
      }));
    }
  }
  class C extends d.Q {
    getViewComponent() {
      return x;
    }
    getLatextName() {
      return "\\over-left-right-arrow";
    }
    getSymbol() {
      return "↔";
    }
    toLatex(e, t, r) {
      return "\\stackrel {\\leftrightarrow}{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const S = new C();
};
