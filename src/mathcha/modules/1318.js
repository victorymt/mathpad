/* module 1318 — 11130 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(39791),
    c = r(63971),
    d = r(91414),
    h = r(23466),
    p = r(40383),
    u = r(36223),
    g = r(45862),
    m = r(12557),
    f = r(70224);
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
  class b extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        settingsOpen: !1
      }), (0, n.A)(this, "containerClassName", "exercise-symbol"), (0, n.A)(this, "handleMarksChanged", e => {
        this.props.onDataChanged(v(v({}, this.props.data), {}, {
          marks: e
        }), {
          focusAcquired: !0,
          preventScroll: !0
        });
      }), (0, n.A)(this, "handleMarksEnabled", e => {
        this.handleMarksChanged(e ? 1 : void 0);
      }), (0, n.A)(this, "handleAnswerLinesChanged", e => {
        this.props.onDataChanged(v(v({}, this.props.data), {}, {
          answerLines: (0, c.yY)(e)
        }), {
          focusAcquired: !0,
          preventScroll: !0
        });
      });
    }
    getCompositeBlockStyle() {
      return v(v({}, super.getCompositeBlockStyle()), {}, {
        display: "block",
        width: "100%",
        margin: "0.8em 0"
      });
    }
    componentWillReceiveProps(e) {
      !e.selected && this.state.settingsOpen && this.setState({
        settingsOpen: !1
      });
    }
    sectionLabelEvents(e) {
      var t = t => {
        !this.isReadonly() && u.A.isLeftButtonOrTouch(t) && (t.preventDefault(), t.stopPropagation(), this.selectElement(e));
      };
      return {
        onMouseDown: t,
        onTouchStart: t
      };
    }
    renderSection(e, t) {
      return o().createElement("div", {
        key: e,
        className: "tw:mt-3"
      }, o().createElement("div", v(v({}, this.sectionLabelEvents(e)), {}, {
        className: "tw:mb-1 tw:cursor-text tw:text-[12px] tw:text-[#777]",
        "aria-hidden": "true",
        style: {
          fontFamily: '"Segoe UI", Arial, Verdana, sans-serif'
        }
      }), t), o().createElement(l.A, v(v({}, this.buildMetaDataFromName(e)), {}, {
        isTextMode: !0,
        showBorderOnSelected: !1,
        showBorder: this.isChildSelected(),
        style: {
          minHeight: "1.4em"
        }
      })));
    }
    renderComponent() {
      var e,
        t,
        r,
        n = this.props.data,
        i = !this.getMtFuncs().isNotEditable(),
        s = this.isSelected(),
        a = (0, c.b)(this.getMtFuncs().getCurrentRootModel())[n.id],
        l = (0, c.yY)(n.answerLines),
        u = this.getMtFuncs().getCurrentRootModel().pageSettings,
        f = (0, m.WK)(u);
      return o().createElement("div", {
        className: "tw:relative tw:p-0",
        "data-exercise-block-id": n.id
      }, o().createElement("div", v(v({}, this.sectionLabelEvents("question")), {}, {
        className: "tw:flex tw:cursor-text tw:items-center tw:justify-between tw:gap-3"
      }), o().createElement("strong", {
        className: "exercise-number",
        "data-exercise-id": n.id
      }, (0, m.rc)(u, a)), Number.isFinite(n.marks) && o().createElement("span", {
        className: "tw:text-[12px] tw:text-[#777]"
      }, (0, m.FX)(u, n.marks))), s && (i || this.getMtFuncs().requestPrintExercise) && o().createElement("div", {
        className: "no-print tw:absolute tw:right-0 tw:bottom-full tw:z-10 tw:mb-1 tw:text-[12px]",
        style: p.a.applyReverseZoomStyle({
          fontFamily: '"Segoe UI", Arial, Verdana, sans-serif',
          color: "var(--ui-text, #333)"
        }, this.getDzContainer(), "right bottom"),
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation();
        },
        onKeyDown: e => e.stopPropagation()
      }, !this.state.settingsOpen && o().createElement("div", {
        role: "group",
        "aria-label": "Exercise actions",
        className: "mt-common-dialog tw:ml-auto tw:flex tw:w-fit tw:gap-1"
      }, this.getMtFuncs().requestPrintExercise && o().createElement(g.$, {
        variant: "toolbar",
        "aria-label": "Print exercise",
        title: "Print worksheet or answer key",
        className: "tw:w-6",
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation();
        },
        onClick: e => {
          e.stopPropagation(), this.getMtFuncs().requestPrintExercise(n.id);
        }
      }, o().createElement("svg", {
        "aria-hidden": "true",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8"
      }, o().createElement("path", {
        d: "M6 9V3h12v6M6 17H3V9h18v8h-3"
      }), o().createElement("path", {
        d: "M6 14h12v7H6z"
      }), o().createElement("path", {
        d: "M17 12h1"
      }))), i && o().createElement(g.$, {
        variant: "toolbar",
        "aria-label": "Exercise settings",
        title: "Exercise settings",
        "aria-expanded": this.state.settingsOpen,
        className: "tw:w-6",
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation();
        },
        onClick: e => {
          e.stopPropagation(), this.setState({
            settingsOpen: !this.state.settingsOpen
          });
        }
      }, o().createElement("i", {
        className: "fa fa-cog",
        "aria-hidden": "true"
      }))), i && this.state.settingsOpen && o().createElement("div", {
        className: "mt-common-dialog tw:flex tw:w-max tw:max-w-[calc(100vw-32px)] tw:flex-wrap tw:items-center tw:gap-x-5 tw:gap-y-2",
        onMouseDown: e => e.stopPropagation(),
        onKeyDown: e => e.stopPropagation()
      }, o().createElement("div", {
        className: "exercise-marks-control tw:flex tw:items-center tw:gap-2"
      }, o().createElement("div", {
        role: "checkbox",
        "aria-label": "Include marks",
        "aria-checked": Number.isFinite(n.marks),
        tabIndex: 0,
        onKeyDown: e => {
          32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), this.handleMarksEnabled(!Number.isFinite(this.props.data.marks)));
        }
      }, o().createElement(h.A, {
        name: "Marks",
        checked: Number.isFinite(n.marks),
        textStyle: {
          fontSize: 12
        },
        onValueChanged: this.handleMarksEnabled
      })), o().createElement("label", null, o().createElement("span", {
        className: "tw:sr-only"
      }, "Marks"), o().createElement(d.A, {
        title: "Exercise marks",
        disableSlider: !0,
        ignorePropValueInFocusMode: !0,
        min: 0,
        step: .5,
        decimals: 2,
        value: null !== (e = n.marks) && void 0 !== e ? e : 0,
        disabled: !Number.isFinite(n.marks),
        showEmpty: !Number.isFinite(n.marks),
        style: {
          width: 45,
          fontSize: 12
        },
        containerStyle: {
          margin: 0,
          padding: 0
        },
        onValueChanged: this.handleMarksChanged
      }))), o().createElement("label", {
        className: "exercise-answer-lines-control tw:flex tw:items-center tw:gap-2"
      }, "Answer lines", o().createElement(d.A, {
        title: "Exercise answer lines",
        disableSlider: !0,
        ignorePropValueInFocusMode: !0,
        min: 0,
        max: 20,
        step: 1,
        decimals: 0,
        style: {
          width: 45,
          fontSize: 12
        },
        containerStyle: {
          margin: 0,
          padding: 0
        },
        value: l,
        onValueChanged: this.handleAnswerLinesChanged
      })), this.getMtFuncs().requestWorksheetLabels && o().createElement(g.$, {
        variant: "toolbar",
        "aria-label": "Worksheet labels",
        title: "Customize labels for this document",
        onClick: e => {
          e.stopPropagation(), this.getMtFuncs().requestWorksheetLabels();
        }
      }, "Labels…"), o().createElement(g.$, {
        variant: "toolbar",
        "aria-label": "Close exercise settings",
        title: "Close exercise settings",
        className: "tw:ml-auto tw:w-6",
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation();
        },
        onClick: e => {
          e.stopPropagation(), this.setState({
            settingsOpen: !1
          });
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        "aria-hidden": "true"
      })))), this.renderSection("question", "Question"), this.renderSection("hint", "".concat(f.hintHeading, " · optional")), this.renderSection("solution", "".concat(null !== (t = null == u || null === (r = u.worksheetLabels) || void 0 === r ? void 0 : r.solutionHeading) && void 0 !== t ? t : "Worked solution", " · teacher version")), l > 0 && o().createElement("div", v(v({}, this.sectionLabelEvents("solution")), {}, {
        className: "no-print tw:mt-3 tw:cursor-text tw:text-[11px] tw:text-[#777]"
      }), "Student worksheet: ", l, " answer ", 1 === l ? "line" : "lines"));
    }
  }
  class x extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return b;
    }
    getLatextName() {
      return "\\exercise";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "question",
        elements: {
          question: {
            onRemove: "all"
          },
          hint: {
            onRemove: "not"
          },
          solution: {
            onRemove: "not"
          }
        }
      };
    }
    getModel() {
      return (0, c.ZP)();
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\exercise"],
        symbol: "Exercise",
        description: "Worksheet question, hint and worked solution",
        insertInTextModeOnly: !0,
        singleBlockLine: !0
      });
    }
    toModel() {
      return this.getModel();
    }
    toLatex(e, t, r) {
      var n = (0, m.WK)(t.pageSettings),
        i = e => "\\textbf{".concat(r.toLatexFromEditor(f.A.createEditorWith(e), t), "}");
      return [i((0, m.rc)(t.pageSettings)), r.toLatexFromEditor(e.elements.question, t), i(n.hintHeading), r.toLatexFromEditor(e.elements.hint, t), i(n.solutionHeading), r.toLatexFromEditor(e.elements.solution, t)].join("\n\n");
    }
  }
  const C = new x();
};
