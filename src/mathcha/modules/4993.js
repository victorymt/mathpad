/* module 4993 — 9549 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(36223),
    a = r(33476),
    l = r(91335),
    c = r(30156),
    d = r(18105),
    h = r(37566),
    p = r(23466),
    u = r(2543),
    g = r.n(u);
  class m extends o().Component {
    render() {
      var e = [{
          key: "second-right",
          value: "Second Right",
          noSelect: !0
        }, {
          key: "second-left",
          value: "Second Left",
          noSelect: !0
        }, {
          key: "ladder",
          value: "Ladder",
          noSelect: !0
        }, {
          key: "horizontal-middle",
          value: "Horizontal Middle",
          noSelect: !0
        }, {
          key: "vertical-middle",
          value: "Vertical Middle",
          noSelect: !0
        }],
        t = this.props.borderSeparation,
        r = void 0 === t ? {} : t;
      return o().createElement(l.A, {
        className: "matrix-border-presets",
        width: 101,
        style: {
          display: "inline-block",
          marginLeft: 7
        },
        data: e,
        value: void 0,
        onRenderValue: () => o().createElement("span", null, "Border Preset"),
        onRenderItem: e => {
          var t;
          switch (e.key) {
            case "ladder":
              t = [[0, 0, "horizontal"], [0, 1, "vertical"], [1, 1, "horizontal"], [1, 2, "vertical"], [2, 2, "horizontal"], [2, 3, "vertical"]];
              break;
            case "second-right":
              t = [[0, 2, "vertical"], [1, 2, "vertical"], [2, 2, "vertical"]];
              break;
            case "second-left":
              t = [[0, 1, "vertical"], [1, 1, "vertical"], [2, 1, "vertical"]];
              break;
            case "vertical-middle":
              t = [[0, 1, "vertical"], [1, 1, "vertical"], [2, 1, "vertical"], [0, 2, "vertical"], [1, 2, "vertical"], [2, 2, "vertical"]];
              break;
            case "horizontal-middle":
              t = [[1, 0, "horizontal"], [1, 1, "horizontal"], [1, 2, "horizontal"], [2, 0, "horizontal"], [2, 1, "horizontal"], [2, 2, "horizontal"]];
          }
          return o().createElement("span", {
            style: {
              display: "inline-block",
              paddingTop: 5
            }
          }, o().createElement(p.A, {
            checked: r[e.key],
            style: {
              display: "inline-block",
              marginRight: 5,
              verticalAlign: "13px"
            },
            name: "",
            onValueChanged: t => {
              var n = g().clone(r);
              t ? n[e.key] = !0 : delete n[e.key], this.props.onBorderSeparationChange(n);
            }
          }), o().createElement("svg", {
            style: {
              width: 33,
              height: 33,
              overflow: "visible",
              display: "inline-block"
            }
          }, this.buildBorder(t)));
        },
        onChange: () => {}
      });
    }
    buildBorder(e) {
      for (var t = [], r = 0; r < 4; r++) t.push(o().createElement("line", {
        key: Math.random(),
        x1: 0,
        x2: 33,
        y1: 11 * r,
        y2: 11 * r,
        stroke: "var(--ui-border, lightgray)"
      }));
      for (var n = 0; n < 4; n++) t.push(o().createElement("line", {
        key: Math.random(),
        x1: 11 * n,
        x2: 11 * n,
        y1: 0,
        y2: 33,
        stroke: "var(--ui-border, lightgray)"
      }));
      for (var i = function r(n) {
          for (var i = function r(i) {
              var s, a;
              e.find(e => e[0] == n && e[1] == i && "horizontal" == e[2]) && t.push(o().createElement("line", {
                key: Math.random(),
                x1: 11 * i,
                x2: 11 * (i + 1),
                y1: 11 * n,
                y2: 11 * n,
                stroke: "var(--ui-text, black)"
              })), e.find(e => e[0] == n && e[1] == i && "vertical" == e[2]) && t.push(o().createElement("line", {
                key: Math.random(),
                x1: 11 * i,
                x2: 11 * i,
                y1: 11 * n,
                y2: 11 * (n + 1),
                stroke: "var(--ui-text, black)"
              }));
            }, s = 0; s < 4; s++) i(s);
        }, s = 0; s < 4; s++) i(s);
      return t;
    }
  }
  var f = r(40383);
  class y extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "onBulbMouseEnter", e => {
        h.hS(h.aY(e), "background", "#d2f3d2");
      }), (0, n.A)(this, "onBulbMouseLeave", e => {
        h.hS(h.aY(e), "background", "");
      });
    }
    render() {
      var e = [{
          key: "\\matrix",
          value: "Matrix"
        }, {
          key: "\\cases",
          value: "Cases"
        }, {
          key: "\\drcases",
          value: "Right Cases"
        }, {
          key: "\\sqcases",
          value: "Square Cases"
        }, {
          key: "\\array",
          value: "Array"
        }, {
          key: "\\gathered",
          value: "Gathered"
        }, {
          key: "\\aligned",
          value: "Aligned"
        }],
        t = this.props,
        r = t.disableLayoutType ? null : o().createElement("layout-type", null, o().createElement("styled-select", {
          style: {
            color: "var(--ui-text-muted, #757575)"
          }
        }, o().createElement(l.A, {
          inputStyle: {
            textOverflow: "ellipsis",
            overflow: "hidden"
          },
          data: e,
          isReadOnly: !0,
          onChange: t.onLayoutChange,
          width: 80,
          height: 100,
          value: t.text,
          title: c.A.getToolTipByKey("layout")
        }))),
        n = this.props.getDzContainer();
      return o().createElement(a.A, {
        appliedDzContainer: n,
        reversedScaleDZOrigin: "right bottom",
        smaller: !0,
        keepOpenTimeDuration: 200,
        closeOnClickOutside: !this.isArrayLatex(t.text),
        onBulbMouseEnter: this.onBulbMouseEnter,
        onBulbMouseLeave: this.onBulbMouseLeave
      }, o().createElement("setting", {
        style: f.a.applyReverseZoomStyle({
          transform: "translate(0, -100%)"
        }, n, "left bottom"),
        className: "mt-common-dialog no-print",
        onMouseDown: s.A.focusAndCursorSelectAcquired,
        onDoubleClick: s.A.onDoubleClickStopPropagation
      }, o().createElement("main-setting", null, r, o().createElement(d.Ay, null, o().createElement(d.JU, null, "Row"), o().createElement(d.pd, {
        value: t.row,
        isFirstOne: !0,
        onChange: t.onRowChange
      }), o().createElement(d.JU, {
        key: "col_label"
      }, "Col"), o().createElement(d.pd, {
        key: "col_input",
        value: t.column,
        onChange: t.onColumnChange
      }))), this.renderArraySettings(t.colAlign, t.text, t.changeCurrentColumnAlign), this.renderMatrixSettingDetail(t.text, t.bracket, t.onBracketChange)));
    }
    isArrayLatex(e) {
      return "\\array" == e;
    }
    renderArraySettings(e, t, r) {
      if (this.isArrayLatex(t)) return o().createElement("column-setting", {
        style: {
          marginTop: 5,
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("align-options", {
        class: "setting-group-options",
        style: {
          marginLeft: 0
        }
      }, o().createElement("i", {
        className: "fa fa-align-left" + ("left" == e ? " selected" : ""),
        onClick: () => r("left"),
        title: c.A.getToolTipByKey("mx-align-left")
      }), o().createElement("i", {
        className: "fa fa-align-center" + ("center" == e ? " selected" : ""),
        onClick: () => r("center"),
        title: c.A.getToolTipByKey("mx-align-middle")
      }), o().createElement("i", {
        className: "fa fa-align-right" + ("right" == e ? " selected" : ""),
        onClick: () => r("right"),
        title: c.A.getToolTipByKey("mx-align-right")
      })), o().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-end"
        }
      }, o().createElement(d.JU, {
        key: "label"
      }, "Border"), o().createElement("i", {
        key: "border",
        className: "fa fa-table array-settings",
        onClick: () => this.props.onShowBorderDesignChange(!0)
      })));
    }
    renderMatrixSettingDetail(e, t, r) {
      if ("\\matrix" == e) {
        var n = [{
          key: "",
          value: "No"
        }, {
          key: "{",
          value: "{ }"
        }, {
          key: "[",
          value: "[ ]"
        }, {
          key: "(",
          value: "( )"
        }, {
          key: "|",
          value: "| |"
        }, {
          key: "‖",
          value: "‖ ‖"
        }];
        return [o().createElement("styled-select", {
          key: "value",
          style: {
            color: "var(--ui-text-muted, #757575)",
            backgroundColor: "transparent",
            display: "block",
            marginTop: 5
          }
        }, o().createElement(l.A, {
          style: {
            display: "inline-block"
          },
          data: n,
          isReadOnly: !0,
          onChange: r,
          width: 80,
          height: 100,
          value: t
        }), o().createElement(m, {
          borderSeparation: this.props.borderSeparation,
          onBorderSeparationChange: this.props.onBorderSeparationChange
        }))];
      }
    }
  }
};
