/* module 70536 — 14856 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => S
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(39791),
    c = r(57858),
    d = r(32485),
    h = r.n(d),
    p = r(33476),
    u = r(91335),
    g = r(36223),
    m = r(70224),
    f = r(40383);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleChangeDiracType", e => {
        switch (e) {
          case "bra":
          case "ket":
            var t, r, n, i;
            "sub2" != (null === (t = this.props.selected) || void 0 === t ? void 0 : t.key) && "sub1" != (null === (r = this.props.selected) || void 0 === r ? void 0 : r.key) || this.props.onSelectedChanged({
              key: "value",
              selected: {
                lineIndex: 0,
                charIndex: 0
              }
            }), this.props.onDataChanged(v(v({}, this.props.data), {}, {
              elements: {
                value: this.props.data.elements.value
              },
              ___tempElements: {
                sub1: this.props.data.elements.sub1 || (null === (n = this.props.data.___tempElements) || void 0 === n ? void 0 : n.sub1),
                sub2: this.props.data.elements.sub2 || (null === (i = this.props.data.___tempElements) || void 0 === i ? void 0 : i.sub2)
              },
              dtype: e
            }));
            break;
          case "bra-ket":
            var o, s, a;
            "sub2" == (null === (o = this.props.selected) || void 0 === o ? void 0 : o.key) && this.props.onSelectedChanged({
              key: "sub1",
              selected: {
                lineIndex: 0,
                charIndex: 0
              }
            }), this.props.onDataChanged(v(v({}, this.props.data), {}, {
              elements: {
                value: this.props.data.elements.value,
                sub1: this.props.data.elements.sub1 || (null === (s = this.props.data.___tempElements) || void 0 === s ? void 0 : s.sub1) || m.A.createEmptyEditor()
              },
              ___tempElements: {
                sub2: this.props.data.elements.sub2 || (null === (a = this.props.data.___tempElements) || void 0 === a ? void 0 : a.sub2)
              },
              dtype: e
            }));
            break;
          case "expval":
            var l, c;
            this.props.onDataChanged(v(v({}, this.props.data), {}, {
              elements: {
                value: this.props.data.elements.value,
                sub1: this.props.data.elements.sub1 || (null === (l = this.props.data.___tempElements) || void 0 === l ? void 0 : l.sub1) || m.A.createEmptyEditor(),
                sub2: this.props.data.elements.sub2 || (null === (c = this.props.data.___tempElements) || void 0 === c ? void 0 : c.sub2) || m.A.createEmptyEditor()
              },
              ___tempElements: {},
              dtype: e
            }));
        }
      });
    }
    getClassName() {
      return h()(super.getClassName(), "dirac-bracket-symbol");
    }
    renderEditor(e, t) {
      var r = {
        display: "inline-block"
      };
      return a().createElement(l.A, v(v({}, this.buildMetaDataFromName(e)), {}, {
        showBorderOnSelected: !0,
        showBorder: this.isSelected(),
        optimizeForOneLine: !0,
        style: r,
        className: t
      }));
    }
    renderBracket(e, t) {
      return a().createElement("div", {
        className: t
      }, a().createElement(c.A, {
        angleMoreSpace: !0,
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        updateOnlyOnNotifyDataChanged: !0,
        notifyData: this.props.data,
        delimiter: e,
        fontSize: this.getMathFontSizePixel()
      }));
    }
    renderLayout() {
      var e,
        t,
        r = {
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "baseline"
        };
      switch (null !== (e = this.props.data.dtype) && void 0 !== e ? e : "bra") {
        case "bra":
          return a().createElement("div", {
            key: "layout",
            style: r
          }, this.renderBracket("open-angle", "oangle"), this.renderEditor("value", "first"), this.renderBracket("open-vert", "vert"));
        case "ket":
          return a().createElement("div", {
            key: "layout",
            style: r
          }, this.renderBracket("open-vert", "vert"), this.renderEditor("value", "last"), this.renderBracket("close-angle", "cangle"));
        case "bra-ket":
          return a().createElement("div", {
            key: "layout",
            style: r
          }, this.renderBracket("open-angle", "oangle"), this.renderEditor("value", "first"), this.renderBracket("open-vert", "vert"), this.renderEditor("sub1", "last"), this.renderBracket("close-angle", "cangle"));
        case "expval":
          return a().createElement("div", {
            key: "layout",
            style: r
          }, this.renderBracket("open-angle", "oangle"), this.renderEditor("value", "first"), this.renderBracket("open-vert", "vert"), this.renderEditor("sub1", "middle"), this.renderBracket("open-vert", "vert"), this.renderEditor("sub2", "last"), this.renderBracket("close-angle", "cangle"));
      }
    }
    renderComponent() {
      return [this.renderLayout(), this.renderSettings()];
    }
    renderSettings() {
      var e;
      if (this.isDirectChildSelected() || this.isDirectSelected()) {
        var t = null !== (e = this.props.data.dtype) && void 0 !== e ? e : "bra",
          r = [{
            key: "ket",
            value: "\\ket"
          }, {
            key: "bra",
            value: "\\bra"
          }, {
            key: "bra-ket",
            value: "\\bra\\ket"
          }, {
            key: "expval",
            value: "\\expval"
          }];
        return a().createElement(p.A, {
          appliedDzContainer: this.getDzContainer(),
          reversedScaleDZOrigin: "right bottom",
          key: "settings",
          smaller: !0,
          closeOnClickOutside: !0,
          style: {
            left: -13,
            top: -20
          }
        }, a().createElement("setting", {
          className: "mt-common-dialog no-print",
          style: f.a.applyReverseZoomStyle({
            top: -45,
            left: 0,
            position: "absolute",
            fontSize: 12,
            paddingLeft: 10,
            paddingRight: 10,
            color: "gray"
          }, this.getDzContainer(), "left bottom"),
          onMouseDown: g.A.focusAndCursorSelectAcquired,
          onDoubleClick: g.A.onDoubleClickStopPropagation
        }, a().createElement(u.A, {
          style: {
            fontFamily: this.getMtFuncs().getbaseMathModeFontFamily()
          },
          inputStyle: {
            fontFamily: this.getMtFuncs().getbaseMathModeFontFamily()
          },
          width: 100,
          data: r,
          value: t,
          onRenderItem: this.handleRenderSelectBoxItem,
          onRenderValue: this.handleRenderSelectBoxItem,
          onChange: this.handleChangeDiracType
        })));
      }
    }
    handleRenderSelectBoxItem(e) {
      return x(e.key);
    }
  }
  function x(e) {
    var t = {
        fontSize: "1.3em"
      },
      r = {
        padding: "0.1em"
      };
    switch (e) {
      case "bra":
        return a().createElement("span", {
          style: t
        }, a().createElement("span", {
          style: r
        }, "⟨"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "|"));
      case "ket":
        return a().createElement("span", {
          style: t
        }, a().createElement("span", {
          style: r
        }, "|"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "⟩"));
      case "bra-ket":
        return a().createElement("span", {
          style: t
        }, a().createElement("span", {
          style: r
        }, "⟨"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "|"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "⟩"));
      case "expval":
        return a().createElement("span", {
          style: t
        }, a().createElement("span", {
          style: r
        }, "⟨"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "|"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "|"), a().createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "big-square common-big-square-icon"
        }), a().createElement("span", {
          style: r
        }, "⟩"));
    }
  }
  class C extends o.A {
    getViewComponent() {
      return b;
    }
    getModelMeta() {
      return {
        text: this.getLatexName(),
        keyInsertOnSelection: "value",
        elements: {
          value: {
            onRemove: "all"
          },
          sub1: {
            onRemove: "all"
          },
          sub2: {
            onRemove: "all"
          }
        }
      };
    }
    getModel(e) {
      var t = super.getModel(e);
      switch ((null == e ? void 0 : e.names[0]) || "\\dirac-bracket") {
        case "\\dirac-bracket":
        case "\\bra":
          t.dtype = "bra", delete t.elements.sub1, delete t.elements.sub2;
          break;
        case "\\ket":
          t.dtype = "ket", delete t.elements.sub1, delete t.elements.sub2;
          break;
        case "\\bra\\ket":
          t.dtype = "bra-ket", delete t.elements.sub2;
          break;
        case "\\expval":
          t.dtype = "expval";
      }
      return t;
    }
    getLatexName() {
      return "\\dirac-bracket";
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatexName(), "\\bra"],
        description: "dirac bracket",
        renderSymbol: function e() {
          return x("bra");
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\ket"],
        description: "dirac bracket",
        renderSymbol: function e() {
          return x("ket");
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\bra\\ket"],
        description: "dirac bracket",
        renderSymbol: function e() {
          return x("bra-ket");
        }
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\expval"],
        description: "dirac bracket",
        renderSymbol: function e() {
          return x("expval");
        }
      })];
    }
    toLatex(e, t, r) {
      var n,
        i = null !== (n = e.dtype) && void 0 !== n ? n : "bra",
        o = e.elements;
      switch (i) {
        case "bra":
          return "\\bra{".concat(r.toLatexFromEditor(o.value, t), "}");
        case "ket":
          return "\\ket{".concat(r.toLatexFromEditor(o.value, t), "}");
        case "bra-ket":
          return "\\bra{".concat(r.toLatexFromEditor(o.value, t), "}\\ket{").concat(r.toLatexFromEditor(o.sub1, t), "}");
        case "expval":
          return "\\mel**{".concat(r.toLatexFromEditor(o.value, t), "}{").concat(r.toLatexFromEditor(o.sub1, t), "}{").concat(r.toLatexFromEditor(o.sub2, t), "}");
      }
    }
    toMathml(e, t) {
      var r, n;
      switch (null !== (r = e.dtype) && void 0 !== r ? r : "bra") {
        case "bra":
          return {
            type: "mrow",
            elements: [{
              type: "mo",
              fence: !0,
              value: "⟨"
            }, t.generateEditor(e.elements.value), {
              type: "mo",
              fence: !0,
              value: "|"
            }]
          };
        case "ket":
          return {
            type: "mrow",
            elements: [{
              type: "mo",
              fence: !0,
              value: "|"
            }, t.generateEditor(e.elements.value), {
              type: "mo",
              fence: !0,
              value: "⟩"
            }]
          };
        case "bra-ket":
          return {
            type: "mrow",
            elements: [{
              type: "mo",
              fence: !0,
              value: "⟨"
            }, t.generateEditor(e.elements.value), {
              type: "mo",
              fence: !0,
              value: "|"
            }, t.generateEditor(e.elements.sub1), {
              type: "mo",
              fence: !0,
              value: "⟩"
            }]
          };
        case "expval":
          return {
            type: "mrow",
            elements: [{
              type: "mo",
              fence: !0,
              value: "⟨"
            }, t.generateEditor(e.elements.value), {
              type: "mo",
              fence: !0,
              value: "|"
            }, t.generateEditor(e.elements.sub1), {
              type: "mo",
              fence: !0,
              value: "|"
            }, t.generateEditor(e.elements.sub2), {
              type: "mo",
              fence: !0,
              value: "⟩"
            }]
          };
      }
    }
    toModel(e) {
      var t;
      return this.getModel();
    }
  }
  const S = new C();
};
