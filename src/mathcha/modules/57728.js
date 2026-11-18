/* module 57728 — 19868 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => E
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(83846),
    l = r(39791),
    c = r(91335),
    d = r(33476),
    h = r(36223);
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
  class g extends o().Component {
    render() {
      var e = [{
        key: "schema",
        value: "Schema"
      }, {
        key: "axdef",
        value: "Axiomatic"
      }, {
        key: "gendef",
        value: "Generic"
      }, {
        key: "basic",
        value: "Basic"
      }];
      return o().createElement(d.A, {
        smaller: !0,
        keepOpenKey: "z-specification",
        keepOpenTimeDuration: 200,
        closeOnClickOutside: !0,
        style: {
          top: -5,
          left: -24
        }
      }, o().createElement("setting", {
        className: "mt-common-dialog no-print",
        style: u({
          top: -38,
          left: 0,
          position: "absolute",
          fontSize: 12,
          paddingLeft: 10,
          paddingRight: 10
        }, this.props.settingsStyle),
        onMouseDown: h.A.focusAndCursorSelectAcquired,
        onDoubleClick: h.A.onDoubleClickStopPropagation
      }, o().createElement("span", {
        style: {
          paddingRight: 2
        }
      }, "Type: "), o().createElement(c.A, {
        width: 110,
        style: {
          display: "inline-block"
        },
        data: e,
        value: this.props.type,
        onChange: this.props.onSpecificationTypeChange
      }), this.props.needNameSection ? o().createElement("button", {
        className: "btn-normal",
        onClick: this.props.onAddNameSection,
        style: {
          display: "inline-block",
          marginLeft: 10
        }
      }, "Add Name Section") : void 0, this.props.needPredicateSection ? o().createElement("button", {
        className: "btn-normal",
        onClick: this.props.onAddPredicateSection,
        style: {
          display: "inline-block",
          marginLeft: 10
        }
      }, "Add Predicate Section") : void 0));
    }
  }
  var m = r(78183),
    f = r(40455),
    y = r(84258),
    v = r(94362),
    b = r(70224),
    x = r(47858);
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "z-schema-symbol role-mathmode-area"), (0, n.A)(this, "handleSpecificationTypeChange", e => {
        var t = this.props.data,
          r = this.props.data.___tempElements || {},
          n;
        switch (e) {
          case "axdef":
            n = S(S({}, t), {}, {
              elements: {
                symDec: t.elements.symDec,
                conPre: t.elements.conPre || r.conPre || b.A.createEmptyEditor()
              },
              ___tempElements: {
                name: t.elements.name
              },
              zType: e
            });
            break;
          case "basic":
            n = S(S({}, t), {}, {
              elements: {
                symDec: t.elements.symDec
              },
              ___tempElements: {
                name: t.elements.name,
                conPre: t.elements.conPre
              },
              zType: e
            });
            break;
          case "gendef":
          case "schema":
            n = S(S({}, t), {}, {
              elements: {
                symDec: t.elements.symDec,
                conPre: t.elements.conPre || r.conPre || b.A.createEmptyEditor(),
                name: t.elements.name || r.name || b.A.createEmptyEditor()
              },
              ___tempElements: void 0,
              zType: e
            });
        }
        v.A.in(() => {
          this.props.onDataChanged(n), this.props.onSelectedChanged({
            key: "symDec",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          });
        });
      }), (0, n.A)(this, "handleAddNameSection", () => {
        var e = this.props.data;
        e.elements.name || this.props.onDataChanged(S(S({}, e), {}, {
          elements: S(S({}, e.elements), {}, {
            name: b.A.createEmptyEditor()
          })
        }));
      }), (0, n.A)(this, "handleAddPredicateSection", () => {
        var e = this.props.data;
        e.elements.conPre || this.props.onDataChanged(S(S({}, e), {}, {
          elements: S(S({}, e.elements), {}, {
            conPre: b.A.createEmptyEditor()
          })
        }));
      });
    }
    getCompositeBlockStyle() {
      return {
        display: "block",
        paddingTop: "0.5em",
        paddingLeft: "1em",
        paddingBottom: "0.5em",
        fontSize: this.context.mathFontSizeBase,
        background: this.props.selected ? this.getSelectedMathBg() : void 0
      };
    }
    getSelectedMathBg() {
      return this.context.fixedContextHandler.getSelectedMathBg();
    }
    getSubMathFont() {
      var e = super.getSubMathFont();
      return "\\mathnormal" == e ? "\\mathit" : e;
    }
    renderSchema(e) {
      var t = "schema" == e || "gendef" == e,
        r = ("schema" == e || "gendef" == e) && !!this.props.data.elements.name,
        n = "gendef" == e,
        i = !!this.props.data.elements.conPre,
        s = "gendef" == e;
      return [r ? o().createElement("div", {
        className: "role-name-section",
        key: "top",
        style: {
          position: "relative",
          zIndex: 1,
          marginBottom: n ? "-0.55em" : "-0.32em",
          marginLeft: 15
        }
      }, o().createElement("div", {
        className: "role-name-content",
        style: S({
          background: this.props.selected ? this.getSelectedMathBg() : this.context.fixedContextHandler.getMainThemeColor(),
          display: "inline-block"
        }, x.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily))
      }, o().createElement("span", {
        style: {
          paddingLeft: 3,
          display: s ? void 0 : "none"
        }
      }, "["), o().createElement(l.A, S(S({}, this.buildMetaDataFromName("name")), {}, {
        style: {
          display: "inline-block",
          minWidth: s ? 5 : 10,
          paddingLeft: s ? void 0 : 3,
          paddingRight: s ? void 0 : 3
        },
        isFirstMathModeLevel: !0,
        className: "math-mode-font",
        showBorderOnSelected: !1,
        renderContext: "z-spec"
      })), o().createElement("span", {
        style: {
          paddingRight: 3,
          display: s ? void 0 : "none"
        }
      }, "]"))) : void 0,, n ? o().createElement("div", {
        key: "another-top-border",
        className: "role-another-top-border",
        style: {
          height: 2,
          borderTop: "1px solid ",
          borderLeft: "1px solid "
        }
      }) : void 0, o().createElement("div", {
        key: "bottom",
        className: "role-dec-pred-section",
        style: {
          borderLeft: "1px solid",
          borderTop: t ? "1px solid" : void 0,
          borderBottom: t ? "1px solid" : void 0,
          padding: i ? "4px 7px 7px 15px" : "4px 7px 4px 15px",
          position: "relative"
        }
      }, o().createElement(l.A, S(S({}, this.buildMetaDataFromName("symDec")), {}, {
        isFirstMathModeLevel: !0,
        className: "math-mode-font",
        style: S({
          paddingBottom: i ? 7 : void 0
        }, x.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)),
        showBorderOnSelected: !1,
        renderContext: "z-spec"
      })), i ? o().createElement("div", {
        className: "role-pred-border",
        style: {
          height: 1,
          borderTop: "1px solid ",
          width: 150,
          marginLeft: -15
        }
      }) : void 0, i ? o().createElement(l.A, S(S({
        style: S({
          paddingTop: 2
        }, x.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily))
      }, this.buildMetaDataFromName("conPre")), {}, {
        isFirstMathModeLevel: !0,
        className: "math-mode-font",
        showBorderOnSelected: !1,
        renderContext: "z-spec"
      })) : void 0), this.renderSetting()];
    }
    renderSetting() {
      if (!this.isSelectModeOnly() && this.isChildSelected()) {
        var e = this.zType(),
          t = ("schema" == e || "gendef" == e) && !this.props.data.elements.name,
          r = ("schema" == e || "gendef" == e || "axdef" == e) && !this.props.data.elements.conPre;
        return o().createElement(g, {
          key: "z-schema-settings",
          type: e,
          onAddNameSection: this.handleAddNameSection,
          onAddPredicateSection: this.handleAddPredicateSection,
          needNameSection: t,
          needPredicateSection: r,
          onSpecificationTypeChange: this.handleSpecificationTypeChange
        });
      }
    }
    zType() {
      return this.props.data.zType || "schema";
    }
    renderBasic() {
      return [o().createElement("div", {
        key: "bottom"
      }, o().createElement(l.A, S(S({}, this.buildMetaDataFromName("symDec")), {}, {
        isFirstMathModeLevel: !0,
        className: "math-mode-font",
        style: S({
          paddingBottom: 7
        }, x.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)),
        borderIfEmpty: !0,
        renderContext: "z-spec"
      }))), this.renderSetting()];
    }
    renderComponent() {
      var e = this.props.data.zType || "schema";
      return "basic" == e ? this.renderBasic() : this.renderSchema(e);
    }
  }
  class w extends s.A {
    getViewComponent() {
      return A;
    }
    getModel(e) {
      var t = super.getModel(e),
        r;
      switch (e && e.category || "schema") {
        case "schema":
          break;
        case "axdef":
          t.zType = "axdef", delete t.elements.name;
          break;
        case "basic":
          t.zType = "basic", delete t.elements.name, delete t.elements.conPre;
      }
      return t;
    }
    getModelMeta() {
      return {
        text: "\\z-schema",
        keyInsertOnSelection: "symDec",
        elements: {
          name: {
            onRemove: "only"
          },
          symDec: {
            onRemove: "all"
          },
          conPre: {
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\z-schema"],
        description: "Z Notation - Schema Definition",
        symbol: "Z Schema",
        insertInTextModeOnly: !0,
        category: "schema",
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 30,
            height: 20
          }
        }, o().createElement("svg", null, o().createElement("path", {
          d: "M1,2 L4,2 M14,2 L31,2 M1,2 L1,20 L30,20 M1,11 L15,11",
          stroke: "var(--ui-text-muted, gray)",
          fill: "none"
        }), o().createElement("path", {
          d: "M4,5 L23,5 L23,8 L4,8 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        }), o().createElement("path", {
          d: "M4,14 L23,14 L23,17 L4,17 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        }), o().createElement("path", {
          d: "M5,0 L12,0 L12,3 L5,3 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        })))
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\z-axiom"],
        description: "Z Notation - Axiomatic Definition",
        symbol: "Z Axiom",
        insertInTextModeOnly: !0,
        category: "axdef",
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 30,
            height: 20
          }
        }, o().createElement("svg", null, o().createElement("path", {
          d: " M1,2 L1,20  M1,11 L15,11",
          stroke: "var(--ui-text-muted, gray)",
          fill: "none"
        }), o().createElement("path", {
          d: "M4,5 L23,5 L23,8 L4,8 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        }), o().createElement("path", {
          d: "M4,14 L23,14 L23,17 L4,17 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        })))
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\z-basic"],
        description: "Z Notation - Free form",
        symbol: "Z Basic",
        insertInTextModeOnly: !0,
        category: "basic",
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 30,
            height: 20
          }
        }, o().createElement("svg", null, o().createElement("path", {
          d: "M4,7 L23,7 L23,10 L4,10 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        }), o().createElement("path", {
          d: "M4,12 L23,12 L23,15 L4,15 Z",
          stroke: "none",
          fill: "var(--ui-text-muted, gray)"
        })))
      })];
    }
    getHelpText() {
      return y.A.inNodeEnv() ? "" : "%You need to include zed-csp package (or zed-csp.sty) in order to use z-notation environments \n";
    }
    toLatex(e, t, r) {
      t = S(S({}, t), {}, {
        inMathExpression: !0,
        customMappingSymbols: f.N.get()
      });
      var n = {
          ignoreWrapMultiline: !0
        },
        i;
      switch (e.zType || "schema") {
        case "basic":
          var o = {
            type: "environment",
            name: "zed",
            element: {
              type: "raw-element",
              rawText: r.toLatexFromEditor(e.elements.symDec, t, n)
            }
          };
          return this.getHelpText() + m.A.fromEnvironment(o);
        case "gendef":
          var s = {
            type: "environment",
            name: "gendef",
            options: [{
              type: "environment-option",
              bracketType: "square",
              element: {
                type: "raw-element",
                rawText: e.elements.name ? r.toLatexFromEditor(e.elements.name, t) : ""
              }
            }],
            element: {
              type: "group",
              elements: [{
                type: "raw-element",
                rawText: r.toLatexFromEditor(e.elements.symDec, t, n)
              }, {
                type: "raw-element",
                rawText: e.elements.conPre ? "\n\\where\n" : ""
              },, {
                type: "raw-element",
                rawText: e.elements.conPre ? r.toLatexFromEditor(e.elements.conPre, t, n) : ""
              }]
            }
          };
          return this.getHelpText() + m.A.fromEnvironment(s);
        case "axdef":
          var a = {
            type: "environment",
            name: "axdef",
            element: {
              type: "group",
              elements: [{
                type: "raw-element",
                rawText: r.toLatexFromEditor(e.elements.symDec, t, n)
              }, {
                type: "raw-element",
                rawText: e.elements.conPre ? "\n\\where\n" : ""
              },, {
                type: "raw-element",
                rawText: e.elements.conPre ? r.toLatexFromEditor(e.elements.conPre, t, n) : ""
              }]
            }
          };
          return this.getHelpText() + m.A.fromEnvironment(a);
        case "schema":
          var l = {
            type: "environment",
            name: "schema",
            options: [{
              type: "environment-option",
              bracketType: "brace",
              element: {
                type: "raw-element",
                rawText: e.elements.name ? r.toLatexFromEditor(e.elements.name, t) : ""
              }
            }],
            element: {
              type: "group",
              elements: [{
                type: "raw-element",
                rawText: r.toLatexFromEditor(e.elements.symDec, t, n)
              }, {
                type: "raw-element",
                rawText: e.elements.conPre ? "\n\\where\n" : ""
              },, {
                type: "raw-element",
                rawText: e.elements.conPre ? r.toLatexFromEditor(e.elements.conPre, t, n) : ""
              }]
            }
          };
          return this.getHelpText() + m.A.fromEnvironment(l);
      }
      return "????";
    }
    alignLeftIfTable(e) {
      return "mtable" == e.type && (e.columnalign = "left"), e;
    }
    toMathml(e, t) {
      var r = e.zType || "schema",
        n,
        i,
        o,
        s = [{
          e: this.alignLeftIfTable(t.generateEditor(e.elements.name)),
          type: "name"
        }, {
          e: this.alignLeftIfTable(t.generateEditor(e.elements.symDec)),
          type: "symDec"
        }, {
          e: this.alignLeftIfTable(t.generateEditor(e.elements.conPre)),
          type: "conPre"
        }].filter(e => !("empty" == e.e.type || "mrow" == e.e.type && e.e.isNone)),
        a = t.getOptions() || {},
        l = {
          type: "mtable",
          columnalign: "left",
          rows: s.map(e => {
            var t = "",
              r,
              n;
            switch (e.type) {
              case "name":
                t = "Name Section: ";
                break;
              case "symDec":
                t = "Symbol Declration Section:";
                break;
              case "conPre":
                t = "Constraining Predicates Section:";
            }
            return a.screenReader || (t = ""), {
              type: "mtr",
              cells: [{
                type: "mtd",
                element: {
                  type: "mrow",
                  elements: [{
                    type: "mtext",
                    value: t
                  }, e.e]
                }
              }]
            };
          })
        };
      return {
        type: "math",
        elements: [{
          type: "mtext",
          value: a.screenReader ? this.getDescription(r) : ""
        }, l]
      };
    }
    getDescription(e) {
      switch (e) {
        case "axdef":
          return "Z-Notation, Axiomatic Definition in Table";
        case "basic":
          return "Z-Notation";
        case "gendef":
          return "Z-Notation,Generic Definition in Table";
        case "schema":
          return "Z-Notation,Schema Definition in Table";
      }
    }
    toModel(e, t, r) {
      return this.getModel();
    }
  }
  const E = new w();
};
