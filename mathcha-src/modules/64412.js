/* module 64412 — 4560 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    BoxedContainer: () => g,
    BoxedContainerSc: () => m,
    default: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(39314),
    d = r(5043),
    h = r(33476);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g extends a.A {
    constructor(e) {
      super(e), this.containerClassName = "boxed-container";
    }
    getCompositeBlockStyle() {
      return u(u({}, super.getCompositeBlockStyle()), {}, {
        display: "block"
      });
    }
    renderSettings() {
      if (this.isDirectChildSelected()) {
        var e = this.props.data.settings || {},
          t = this.getDzContainer();
        return o().createElement(h.A, {
          key: "settings",
          appliedDzContainer: t,
          reversedScaleDZOrigin: "right bottom",
          smaller: !0,
          closeOnClickOutside: !0,
          style: {
            left: -20,
            top: -20
          }
        }, o().createElement(d.i, {
          fixedContextHandler: this.context.fixedContextHandler,
          dzContainer: t,
          settings: e,
          defaultBorderColor: this.getDefaultFillBorderColor(),
          defaultPadding: .5,
          onSettingsChange: (e, t) => {
            this.props.onDataChanged(u(u({}, this.props.data), {}, {
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
        l = void 0 === a ? .5 : a,
        d = e.thickness,
        h = void 0 === d ? 1 : d,
        p = e.bgColor,
        g = e.corner,
        m = void 0 === g ? 0 : g,
        f = c.A.getHtmlColor(i, "transparent");
      return o().createElement("div", {
        style: {
          borderStyle: r,
          borderWidth: h,
          padding: "".concat(l, "em"),
          marginTop: "0.1em",
          marginBottom: "0.1em",
          borderColor: f,
          background: p ? c.A.getHtmlColor(p) : void 0,
          borderRadius: m
        }
      }, o().createElement(s.A, u(u({}, this.buildMetaDataFromName("value")), {}, {
        showBorderOnSelected: !1,
        textDirection: this.props.textDirection,
        isTextMode: !0
      })), this.renderSettings());
    }
  }
  class m extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return g;
    }
    getLatextName() {
      return "\\boxed-container";
    }
    getSymbol() {
      return "Boxed Container";
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
      return t = u({}, t), "\\boxed-container{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const f = new m();
};
