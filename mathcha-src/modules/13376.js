/* module 13376 — 8135 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => w
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(39791),
    c = r(33476),
    d = r(36223),
    h = r(91335),
    p = r(98231),
    u = r(23466),
    g = r(40961),
    m = r.n(g),
    f = r(76769),
    y = r(39314),
    v = r(94320),
    b = r(40383);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class S extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "underline-section-symbol"), (0, n.A)(this, "divPlaceHolder", void 0), (0, n.A)(this, "resizeObservable", void 0), (0, n.A)(this, "handleLineTypeChanged", e => {
        var t,
          r = C(C({}, this.props.data.lineStyle || {}), {}, {
            line: e
          });
        this.props.onDataChanged(C(C({}, this.props.data), {}, {
          lineStyle: r
        }));
      }), (0, n.A)(this, "handleColorSelect", (e, t) => {
        var r,
          n = C(C({}, this.props.data.lineStyle || {}), {}, {
            color: e
          });
        this.props.onDataChanged(C(C({}, this.props.data), {}, {
          lineStyle: n
        }), {
          focusAcquired: t
        });
      }), (0, n.A)(this, "handleLineOnTextChange", e => {
        this.props.onDataChanged(C(C({}, this.props.data), {}, {
          lineOnText: e
        }));
      }), (0, n.A)(this, "handleRenderLines", () => {
        this.willComponentUnmount || this.context.fixedContextHandler.getRenderingContext().nextCycleIfRequired(() => {
          if (!this.willComponentUnmount) {
            var e = m().findDOMNode(this),
              t = this.getMtFuncs().getDocZoomContainer();
            f.A.generate(e, this.divPlaceHolder, this.getLineInfo(), t);
          }
        });
      });
    }
    getCompositeBlockStyle() {
      return C(C({}, super.getCompositeBlockStyle()), {}, {
        display: "block"
      });
    }
    componentDidMount() {
      super.componentDidMount();
      var e = m().findDOMNode(this);
      this.resizeObservable = new v.t(() => {
        console.log("changed"), this.updateLinesPosition();
      }), this.resizeObservable.observe(e);
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.resizeObservable.disconnect();
    }
    renderComponent() {
      var e = this.getLineInfo();
      return [o().createElement("div", {
        className: "role-lines-container",
        "data-line-type": e.lineType,
        "data-line-color": e.color,
        "data-line-on-text": !!e.lineOnText,
        key: "place-holder",
        ref: e => this.divPlaceHolder = e,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement(l.A, C(C({
        key: "editor"
      }, this.buildMetaDataFromName("ulvalue")), {}, {
        isTextMode: !0,
        style: {
          lineHeight: "1.4em"
        },
        showBorder: this.isChildSelected()
      })), this.renderSettings()];
    }
    renderSettings() {
      if (this.isChildSelected()) {
        var e = this.props.data.lineStyle || {},
          t = [{
            key: "solid",
            value: "Solid"
          }, {
            key: "dotted",
            value: "Dotted"
          }, {
            key: "dashed",
            value: "Dashed"
          }],
          r = this.getDzContainer();
        return o().createElement(c.A, {
          appliedDzContainer: r,
          reversedScaleDZOrigin: "right bottom",
          key: "settings",
          smaller: !0,
          closeOnClickOutside: !0,
          style: {
            left: -25
          }
        }, o().createElement("setting", {
          className: "mt-common-dialog no-print",
          style: b.a.applyReverseZoomStyle({
            top: -41,
            left: -1,
            position: "absolute",
            fontSize: 12,
            paddingLeft: 10,
            paddingRight: 10,
            color: "gray"
          }, r, "left bottom"),
          onMouseDown: d.A.focusAndCursorSelectAcquired,
          onDoubleClick: d.A.onDoubleClickStopPropagation
        }, o().createElement("span", {
          style: {
            paddingRight: 3
          }
        }, "Line: "), o().createElement(h.A, {
          width: 110,
          style: {
            display: "inline-block"
          },
          data: t,
          value: e.line || "solid",
          onChange: this.handleLineTypeChanged
        }), o().createElement(p.A, {
          requestPickerSettings: this.context.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
          stopPropagation: !0,
          style: {
            display: "inline-block",
            verticalAlign: "bottom",
            marginLeft: 5
          },
          value: e.color || this.getDefaultFillBorderColor(),
          onItemSelect: this.handleColorSelect
        }), o().createElement(u.A, {
          style: {
            marginLeft: 5,
            display: "inline-block"
          },
          name: "Line On Text",
          checked: this.props.data.lineOnText,
          onValueChanged: this.handleLineOnTextChange
        })));
      }
    }
    afterReactRenderWhenDataChanged() {
      this.context.fixedContextHandler.getBatchUpdater().pushToEnd(this.handleRenderLines, this);
    }
    updateLinesPosition() {
      this.handleRenderLines();
    }
    getDefaultFillBorderColor() {
      return this.context.fixedContextHandler.getDefaultBorderColor();
    }
    getLineInfo() {
      var e = this.props.data.lineStyle || {};
      return {
        lineOnText: this.props.data.lineOnText,
        lineType: e.line || "solid",
        color: e.color ? y.A.getHtmlColor(e.color) : this.getDefaultFillBorderColor()
      };
    }
  }
  class A extends a.A {
    getViewComponent() {
      return S;
    }
    getLatextName() {
      return "\\underline-section";
    }
    getSymbol() {
      return "underline-section";
    }
    getModelMeta() {
      return {
        text: "\\underline-section",
        keyInsertOnSelection: "ulvalue",
        elements: {
          ulvalue: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 40,
            height: 20
          }
        }, o().createElement("svg", null, o().createElement("path", {
          d: "M1,15 L40,15",
          fill: "none",
          stroke: "var(--ui-text, black)"
        }), o().createElement("path", {
          d: "M5,10 L15,10 L15,15 L5,15 Z",
          fill: "var(--ui-text-muted, gray)",
          stroke: "none"
        }), o().createElement("path", {
          d: "M25,10 L30,10 L30,15 L25,15 Z",
          fill: "var(--ui-text-muted, gray)",
          stroke: "none"
        }))),
        description: "Section filled with underline for all lines",
        insertInTextModeOnly: !0
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex(e, t, r) {
      return r.toLatexFromEditor(e.elements.ulvalue, t);
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const w = new A();
};
