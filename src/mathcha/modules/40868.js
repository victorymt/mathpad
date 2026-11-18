/* module 40868 — 2416 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(84881),
    a = r(24222),
    l = r(15706),
    c = r(19340),
    d = r(7258);
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
  class u extends a.W {
    constructor() {
      super(...arguments), (0, n.A)(this, "composedRef", l.q.create());
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    renderArrow() {
      var e = (0, d.wb)((0, c.zN)(this.context.baseMathModeFontFamily), {
        char: "←",
        fontSize: this.getMathFontSizePixel(),
        fixedContextHandler: this.context.fixedContextHandler,
        notifyData: this.props.data.elements.value,
        drawingRef: this.composedRef.ref,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "visible"
        }
      });
      return o().createElement("arrow-symbol", {
        key: "arrow",
        style: p(p({}, this.getArrowStyle()), (0, d.PY)((0, c.zN)(this.context.baseMathModeFontFamily), this.isSingleTextBlockAndUperSmall(this.props.data.elements.value)))
      }, e || o().createElement(s.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        repeatChar: "⏭",
        startChar: "⏮",
        baseMathModeFontFamily: this.context.baseMathModeFontFamily
      }));
    }
  }
  class g extends a.Q {
    getViewComponent() {
      return u;
    }
    getLatextName() {
      return "\\overleftarrow";
    }
    getSymbol() {
      return "←";
    }
  }
  const m = new g();
};
