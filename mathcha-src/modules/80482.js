/* module 80482 — 4622 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    BoxedSc: () => v,
    InlineBoxed: () => y,
    default: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(5043),
    d = r(33476),
    h = r(39314),
    p = r(40961),
    u = r.n(p),
    g = r(60693);
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
      super(e), this.containerClassName = "inline-boxed";
    }
    getDefaultBaseLine() {
      var e = u().findDOMNode(this),
        t = this.getElementRect(e);
      return {
        top: t.top + g.T.heightOf(t) / 2,
        positionType: "middle"
      };
    }
    renderSettings() {
      if (this.isDirectChildSelected()) {
        var e = this.props.data.settings || {},
          t = this.getDzContainer();
        return o().createElement(d.A, {
          key: "settings",
          appliedDzContainer: t,
          reversedScaleDZOrigin: "right bottom",
          smaller: !0,
          closeOnClickOutside: !0,
          style: {
            left: -20,
            top: -18
          }
        }, o().createElement(c.i, {
          fixedContextHandler: this.context.fixedContextHandler,
          dzContainer: t,
          settings: e,
          defaultBorderColor: this.getDefaultFillBorderColor(),
          defaultPadding: .1,
          onSettingsChange: (e, t) => {
            this.props.onDataChanged(f(f({}, this.props.data), {}, {
              settings: e
            }), {
              focusAcquired: t,
              isOneLineChanged: !0
            });
          }
        }));
      }
    }
    getDefaultFillBorderColor() {
      return this.context.fixedContextHandler.getDefaultBorderColor();
    }
    renderComponent() {
      var e = this.props.data.settings || {},
        t = e.lineType,
        r = void 0 === t ? "solid" : t,
        n = e.lineColor,
        i = void 0 === n ? this.getDefaultFillBorderColor() : n,
        a = e.padding,
        l = void 0 === a ? .1 : a,
        c = e.thickness,
        d = void 0 === c ? 1 : c,
        p = e.bgColor,
        u = e.corner,
        g = void 0 === u ? 0 : u;
      return o().createElement("div", {
        style: {
          borderStyle: r,
          borderWidth: d,
          padding: "".concat(l, "em"),
          marginTop: "0.1em",
          marginBottom: "0.1em",
          borderColor: h.A.getHtmlColor(i),
          background: p ? h.A.getHtmlColor(p) : void 0,
          borderRadius: g
        }
      }, o().createElement(s.A, f(f({}, this.buildMetaDataFromName("value")), {}, {
        showBorderOnSelected: !1,
        textDirection: this.props.textDirection,
        isTextMode: !0
      })), this.renderSettings());
    }
  }
  class v extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\inline-boxed";
    }
    getSymbol() {
      return "Inline Boxed";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          value: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 25,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 10,
            height: 10,
            border: "1px solid var(--ui-text, black)",
            transform: "translateX(3px)"
          }
        })
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex(e, t, r) {
      return t = f({}, t), "\\boxed{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const b = new v();
};
