/* module 10848 — 14344 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => O
  });
  var n = r(40927),
    i = r.n(n),
    o = r(9903),
    s = r(64467),
    a = r(25352),
    l = r(37566),
    c = r(516),
    d = r(24829),
    h = r(9828),
    p = r(21774);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, s.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends i().Component {
    constructor() {
      super(...arguments), (0, s.A)(this, "tableHtml", void 0), (0, s.A)(this, "symbolHtml", void 0), (0, s.A)(this, "data", void 0), (0, s.A)(this, "state", {
        hBorders: {
          borders: [],
          fullLines: []
        },
        vBorders: {
          borders: [],
          fullLines: []
        },
        selectedColumn: 0
      }), (0, s.A)(this, "toggleBooktab", e => {
        this.props.onToggleBooktab(e);
      }), (0, s.A)(this, "handleAddNewLine", e => {
        this.props.onAddHorizontalLine(e);
      }), (0, s.A)(this, "handleDeleteLine", e => {
        this.props.onDeleteHorizontalLine(e);
      });
    }
    shouldComponentUpdate(e, t) {
      return !p.A.areEqualShallow(t, this.state);
    }
    setElementInfo(e, t, r) {
      this.tableHtml = e, this.symbolHtml = t, this.data = r, this.calculatePosition();
    }
    invalidatePosition(e) {
      this.tableHtml && (this.data = e, this.calculatePosition());
    }
    calculatePosition() {
      var e = l.YG(this.tableHtml, ">tbody>tr>td.role-cell-data").map(e => ({
        colSpan: Number.parseInt(l.vK(e, "data-colSpan"), 10),
        rowSpan: Number.parseInt(l.vK(e, "data-rowSpan"), 10),
        rIndex: Number.parseInt(l.vK(e, "data-rIndex"), 10),
        cIndex: Number.parseInt(l.vK(e, "data-cIndex"), 10),
        rect: c.A.findRectElementToElement(e, this.symbolHtml),
        editorId: l.vK(e, "data-editorId")
      }));
      this.setState({
        hBorders: this.calculateHLines(e),
        vBorders: this.calculateVLines(e)
      });
    }
    calculateHLines(e) {
      return h.A.calculateHorizontalSections(e, this.data);
    }
    calculateVLines(e) {
      return h.A.calculateVerticalSections(e, this.data);
    }
    rectangleBoundingToStyle(e) {
      return {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
        position: "absolute"
      };
    }
    renderHorizontalBorderSelection() {
      var e = {
        width: "0.8em",
        height: "0.8em",
        cursor: "pointer",
        position: "absolute"
      };
      return i().createElement("div", null, i().createElement("div", null, this.state.hBorders.borders.map((e, t) => i().createElement("div", {
        key: t,
        onClick: () => this.props.onHorizontalLineClick(e.lineIndex, e.sectionIndex),
        style: this.rectangleBoundingToStyle(e.rect),
        className: "border-selection__line-section role-h-border-section"
      }))), i().createElement("div", null, this.state.hBorders.fullLines.map((t, r) => i().createElement("div", {
        key: r
      }, i().createElement("div", {
        className: "role-h-decrease",
        onClick: () => this.handleDeleteLine(t.lineIndex),
        style: g(g({}, e), {}, {
          right: -20,
          top: t.rect.top - 3,
          fill: "red"
        })
      }, d.A.minus), i().createElement("div", {
        className: "role-h-increase",
        onClick: () => this.handleAddNewLine(t.lineIndex),
        style: g(g({}, e), {}, {
          right: -40,
          top: t.rect.top - 5,
          fill: "green"
        })
      }, d.A.plus), i().createElement("div", {
        className: "role-booktab-tick",
        onClick: () => this.toggleBooktab(t.lineIndex),
        style: g(g({}, e), {}, {
          right: -70,
          top: t.rect.top - 7,
          fill: t.booktabRule ? "green" : "gray",
          stroke: t.booktabRule ? "green" : "gray"
        })
      }, d.A.checkIcon)))));
    }
    renderVerticalBorderSelection() {
      var e = {
        width: "0.8em",
        height: "0.8em",
        position: "absolute",
        cursor: "pointer"
      };
      return i().createElement("div", null, i().createElement("div", null, this.state.vBorders.borders.map((e, t) => i().createElement("div", {
        onClick: () => this.props.onVerticalLineClick(e.lineIndex, e.sectionIndex),
        style: this.rectangleBoundingToStyle(e.rect),
        key: t,
        className: "border-selection__line-section role-v-border-section"
      }))), i().createElement("div", null, this.state.vBorders.fullLines.map((t, r) => i().createElement("div", {
        key: r
      }, i().createElement("div", {
        className: "role-v-decrease",
        onClick: () => this.props.onDeleteVerticalLine(t.lineIndex),
        style: g(g({}, e), {}, {
          top: -17,
          fill: "red",
          left: t.rect.left - 3
        })
      }, d.A.minus), i().createElement("div", {
        className: "role-v-increase",
        onClick: () => this.props.onAddVerticalLine(t.lineIndex),
        style: g(g({}, e), {}, {
          top: -35,
          fill: "green",
          left: t.rect.left - 3
        })
      }, d.A.plus)))));
    }
    render() {
      var e = [];
      return this.state.hBorders.borders.forEach(t => {
        var r = e.find(e => e.cIndex == t.sectionIndex);
        r || (r = {
          cIndex: t.sectionIndex,
          rect: t.rect
        }, e.push(r)), r.rect = h.A.extendRect(r.rect, t.rect);
      }), i().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }, i().createElement("div", null, e.map((e, t) => i().createElement("div", {
        key: t,
        onClick: () => {
          this.props.onColumnSelected(t), this.setState({
            selectedColumn: t
          });
        },
        style: g(g({}, this.rectangleBoundingToStyle(e.rect)), {}, {
          background: this.state.selectedColumn == t ? "rgba(135, 206, 250, 0.2)" : void 0
        }),
        className: "border-selection__column-section"
      }))), this.renderHorizontalBorderSelection(), this.renderVerticalBorderSelection(), i().createElement("div", {
        style: {
          position: "absolute",
          right: -100,
          top: -30,
          fontSize: "0.9em"
        }
      }, "Booktabs"));
    }
  }
  var f = r(40961),
    y = r.n(f),
    v = r(61196),
    b = r(61848),
    x = r(72297),
    C = r(55451),
    S = r(84543);
  function A(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(r), !0).forEach(function (t) {
        (0, s.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class E extends a.A {
    constructor() {
      super(...arguments), (0, s.A)(this, "borderSelection", void 0), (0, s.A)(this, "positionLater", C.A.createLaterRunObject("latest", "a-little-while")), (0, s.A)(this, "handleColumnSelected", e => {
        var t = this.getTableProperties(e);
        S.A.changeData(w(w({}, t), {}, {
          columnIndex: e
        }));
      }), (0, s.A)(this, "handleToggleBooktab", e => {
        var t = h.A.getSafeLineInfo(this.props.data.hLines, e),
          r = v.A.toggleBooktab(t, 0 == e || e >= this.props.data.row),
          n = this.getChangedHorizontalLineData(this.props.data, e, () => r);
        this.props.onDataChanged(n);
      }), (0, s.A)(this, "handleAddHorizontalLine", e => {
        var t = h.A.getSafeLineInfo(this.props.data.hLines, e),
          r = v.A.increaseLine(t),
          n = this.getChangedHorizontalLineData(this.props.data, e, () => r);
        this.props.onDataChanged(n);
      }), (0, s.A)(this, "handleDeleteHorizontalLine", e => {
        var t = h.A.getSafeLineInfo(this.props.data.hLines, e),
          r = v.A.reduceLine(t),
          n = this.getChangedHorizontalLineData(this.props.data, e, () => r);
        this.props.onDataChanged(n);
      }), (0, s.A)(this, "handleAddVerticalLine", e => {
        var t = h.A.getSafeLineInfo(this.props.data.vLines, e),
          r = v.A.increaseLine(t),
          n = this.getChangedVerticalLineData(this.props.data, e, () => r);
        this.props.onDataChanged(n);
      }), (0, s.A)(this, "handleDeleteVerticalLine", e => {
        var t = h.A.getSafeLineInfo(this.props.data.vLines, e),
          r = v.A.reduceLine(t),
          n = this.getChangedVerticalLineData(this.props.data, e, () => r);
        this.props.onDataChanged(n);
      }), (0, s.A)(this, "handleHorizontalLineClick", (e, t) => {
        var r = h.A.getSafeLineInfo(this.props.data.hLines, e),
          n = v.A.toggleLineSection(r, {
            nOfSections: this.props.data.column,
            toggleIndex: t
          }, 0 == e || e >= this.props.data.row),
          i = this.getChangedHorizontalLineData(this.props.data, e, () => n);
        this.props.onDataChanged(i);
      }), (0, s.A)(this, "handleVerticalLineClick", (e, t) => {
        var r = h.A.getSafeLineInfo(this.props.data.vLines, e),
          n = v.A.toggleLineSection(r, {
            nOfSections: this.props.data.row,
            toggleIndex: t
          }, !1),
          i = this.getChangedVerticalLineData(this.props.data, e, () => n);
        this.props.onDataChanged(i);
      });
    }
    getTableProperties(e) {
      var t = (this.props.data.columnWidths || [])[e];
      return t = t || "auto", {
        tableWidth: this.props.data.tableWidth || "grow",
        columnWidth: t,
        columnIndex: e
      };
    }
    getNoneBorderStyle() {
      return "1px solid rgba(0, 0, 0, 0.13)";
    }
    notifiy(e) {
      var t = this.getTableProperties(e.columnIndex);
      if (e.columnWidth != t.columnWidth || e.tableWidth != t.tableWidth) {
        var r = w(w({}, this.props.data), {}, {
          columnWidths: b.A.setIndex(this.props.data.columnWidths || [], e.columnIndex, e.columnWidth),
          tableWidth: "grow" == e.tableWidth ? void 0 : e.tableWidth
        });
        console.log(r.columnWidths), console.log(r.tableWidth), this.props.onDataChanged(r);
      }
    }
    componentDidMount() {
      super.componentDidMount(), S.A.subscribeModelHandler(this), S.A.changeData(this.getTableProperties(0)), this.borderSelection && this.positionLater.later(() => {
        if (!this.willComponentUnmount) {
          var e = y().findDOMNode(this);
          this.borderSelection.setElementInfo(l.YG(e, ">table")[0], e, this.props.data);
        }
      });
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.positionLater.cancel(), S.A.unsubscribeModelHandler();
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate(e, t), e.data != this.props.data && this.borderSelection && this.borderSelection.invalidatePosition(this.props.data);
    }
    extraInfoOnDataTd(e, t) {
      return {
        "data-rIndex": e.originRow,
        "data-cIndex": e.originColumn,
        "data-rowSpan": e.originalRowSpan,
        "data-colSpan": e.originalColSpan,
        "data-editorId": t.id
      };
    }
    renderSettings() {
      return i().createElement("div", null, this.renderBorderSelection());
    }
    renderBorderSelection() {
      return i().createElement(m, {
        key: "border-selection",
        onAddHorizontalLine: this.handleAddHorizontalLine,
        onDeleteHorizontalLine: this.handleDeleteHorizontalLine,
        onAddVerticalLine: this.handleAddVerticalLine,
        onDeleteVerticalLine: this.handleDeleteVerticalLine,
        onHorizontalLineClick: this.handleHorizontalLineClick,
        onVerticalLineClick: this.handleVerticalLineClick,
        onToggleBooktab: this.handleToggleBooktab,
        onColumnSelected: this.handleColumnSelected,
        ref: e => this.borderSelection = e
      });
    }
    getChangedHorizontalLineData(e, t, r) {
      var n = e.hLines || [],
        i,
        o = r(n[t] || {
          nOfLines: 0
        }),
        s = b.A.setIndex(n, t, o);
      return x.A.normalizeTabular(w(w({}, e), {}, {
        hLines: s
      }));
    }
    getChangedVerticalLineData(e, t, r) {
      var n = e.vLines || [],
        i,
        o = r(n[t] || {
          nOfLines: 0
        }),
        s = b.A.setIndex(n, t, o);
      return x.A.normalizeTabular(w(w({}, e), {}, {
        vLines: s
      }));
    }
  }
  class k extends o.LatexTableSc {
    getViewComponent() {
      return E;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatexName()],
        height: 30,
        insertInTextModeOnly: !0,
        isHidden: !0,
        renderSymbol: () => i().createElement("svg", {
          style: {
            width: 19,
            height: 15,
            transform: "translate(2px,1px)",
            stroke: "var(--ui-text-muted, gray)"
          }
        }, i().createElement("path", {
          style: {
            transform: "translate(2px,2px)"
          },
          d: "M-0.5,0 L12.5,0 M-0.5,6 L12.5,6 M-0.5,12 L12.5,12 M0,0 L0,12 M6,0 L6,12 M12,0 L12,12",
          fill: "none"
        }))
      });
    }
    getLatexName() {
      return "\\latex-table-designed";
    }
  }
  const O = new k();
};
