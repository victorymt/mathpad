/* module 25352 — 29036 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => U
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(47286),
    l = r(35246),
    c = r(91414),
    d = r(23466),
    h = r(84543),
    p;
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
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        tableWidth: "grow",
        columnWidth: "auto",
        columnIndex: 0
      }), (0, n.A)(this, "handleColumnWidthChanged", e => {
        h.A.changeData(g(g({}, this.state), {}, {
          columnWidth: e
        }));
      }), (0, n.A)(this, "handleColumnWidthAutoCheckChanged", e => {
        e ? h.A.changeData(g(g({}, this.state), {}, {
          columnWidth: "auto"
        })) : h.A.changeData(g(g({}, this.state), {}, {
          columnWidth: 2
        }));
      }), (0, n.A)(this, "onTableWidthSelect", e => {
        h.A.changeData(g(g({}, this.state), {}, {
          tableWidth: e
        }));
      });
    }
    notifiy(e) {
      this.state != e && this.setState(e);
    }
    componentDidMount() {
      h.A.subscribeTablePropertiesHandler(this);
    }
    componentWillUnmount() {
      h.A.unsubscribeTablePropertiesHandler();
    }
    getSafeColumnWidthNumber() {
      return "string" == typeof this.state.columnWidth ? 2 : this.state.columnWidth;
    }
    renderColumnWidthInput() {
      if ("auto" != this.state.columnWidth) return o().createElement(c.A, {
        style: {
          fontSize: 13,
          width: 30
        },
        unitStyle: {
          fontSize: 13
        },
        min: .1,
        max: 10,
        step: .5,
        decimals: 2,
        disableSlider: !0,
        value: this.getSafeColumnWidthNumber(),
        unit: "cm",
        onValueChanged: this.handleColumnWidthChanged,
        onValueChanging: this.handleColumnWidthChanged
      });
    }
    render() {
      var e = this.state.tableWidth || "grow";
      return o().createElement("div", {
        style: {
          width: 210,
          paddingLeft: 10,
          flexShrink: 0,
          flexDirection: "column",
          fontSize: 13,
          lineHeight: "17px",
          paddingTop: 10
        }
      }, o().createElement("div", {
        style: {
          fontWeight: "bold",
          paddingBottom: 5
        }
      }, "Table Width:"), o().createElement("div", null, o().createElement(l.s, {
        value: "tableWidth",
        checked: "grow" == e,
        style: {
          paddingRight: 20
        },
        onSelect: () => this.onTableWidthSelect("grow"),
        label: "Growing"
      }), o().createElement(l.s, {
        value: "tableWidth",
        checked: "full-width" == e,
        style: {
          paddingRight: 20
        },
        onSelect: () => this.onTableWidthSelect("full-width"),
        label: "Full Width"
      })), o().createElement("div", {
        style: {
          marginTop: 10,
          fontWeight: "bold"
        }
      }, "Column Width:"), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline"
        }
      }, o().createElement(d.A, {
        style: {
          marginRight: 42,
          lineHeight: "28px"
        },
        textStyle: {
          fontSize: 13
        },
        name: "Auto",
        checked: "auto" == this.state.columnWidth,
        onValueChanged: this.handleColumnWidthAutoCheckChanged
      }), this.renderColumnWidthInput()), o().createElement("div", {
        style: {
          marginTop: 10,
          fontWeight: "bold"
        }
      }, "Selected Column: ", this.state.columnIndex + 1));
    }
  }
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var v = r(58907).A.getModalDialog();
  class b extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "editorModel", void 0), (0, n.A)(this, "mathType", void 0), (0, n.A)(this, "handleOk", () => {
        var e,
          t = this.mathType.getModel().lines[0].blocks[0];
        this.props.onOk(y(y({}, t), {}, {
          text: "\\latex-table",
          ___designedWidth: void 0
        })), this.props.onClose();
      });
      var t = y(y({}, this.props.model), {}, {
        ___designedWidth: this.props.designedWidth
      });
      this.editorModel = {
        id: "tt1",
        lines: [{
          id: "tt2",
          blocks: [y(y({}, t), {}, {
            text: "\\latex-table-designed"
          })]
        }],
        pageSettings: this.props.pageSettings
      };
    }
    render() {
      var e = this.props.MathTypeClss;
      return o().createElement(v, {
        show: !0
      }, o().createElement(a.A, {
        title: "LaTeX table design",
        size: "medium",
        scroll: "body",
        style: {
          width: this.props.designedWidth + 360,
          maxWidth: "95vw",
          maxHeight: "80vh"
        },
        noLabel: "Cancel",
        okLabel: "OK",
        message: "",
        isProgressing: !1,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        onNo: null,
        isOkDisabled: null,
        show: !0
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%"
        }
      }, o().createElement(m, null), o().createElement("div", {
        style: {
          overflow: "auto",
          flexGrow: 1,
          borderLeft: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement(e, {
        ref: e => this.mathType = e,
        settings: this.props.mtSettings,
        onModelChanged: null,
        model: this.editorModel,
        readOnly: !0,
        style: {
          paddingTop: 40,
          border: "none",
          marginTop: 0,
          background: "white",
          width: "100%"
        },
        rootEditorStyle: {
          height: "auto",
          minHeight: "auto"
        }
      })))));
    }
  }
  var x = r(33476),
    C = r(32485),
    S = r.n(C),
    A = r(32422),
    w = r(2543),
    E = r.n(w),
    k = r(247),
    O = r(61848),
    D = r(59310);
  class P {
    makeSureLinesInfoSafe(e, t) {
      for (var r = D.Q.newArray(t + 1, !0), n = 0; n < t + 1; n++) e && e[n] ? (r[n] = e[n], r[n].borders && r[n].nOfLines && (r[n] = {
        borders: r[n].borders
      })) : r[n] = {};
      return r;
    }
    countExtraLineFromLineInfo(e, t, r) {
      return t.nOfLines > 1 ? t.nOfLines - 1 : r.includes(e) ? 1 : 0;
    }
    countExtraLineColumnForSpan(e, t, r, n) {
      for (var i = 0, o = t + 1; o < t + r; o++) {
        var s = e.vLines[o];
        i += this.countExtraLineFromLineInfo(o, s, n.vLineIndexesPartialInMergedRows);
      }
      return i;
    }
    countExtraLineRowForSpan(e, t, r, n) {
      for (var i = 0, o = t + 1; o < t + r; o++) {
        var s = e.hLines[o];
        i += this.countExtraLineFromLineInfo(o, s, n.hLineIndexesPartialInMergedColumns);
      }
      return i;
    }
    isLastColumnIncludingSpan(e, t, r) {
      return e + t >= r.column;
    }
    isLastRowIncludingSpan(e, t, r) {
      return e + t >= r.row;
    }
    countColumnIncludingLineColumn(e, t) {
      for (var r = 0, n = 0; n < e.column + 1; n++) {
        var i = e.vLines[n];
        r += this.countExtraLineFromLineInfo(n, i, t.vLineIndexesPartialInMergedRows);
      }
      return e.column + r;
    }
    countRowIncludingLineRow(e, t) {
      for (var r = 0, n = 0; n < e.row + 1; n++) {
        var i = e.hLines[n];
        r += this.countExtraLineFromLineInfo(n, i, t.hLineIndexesPartialInMergedColumns);
      }
      return e.row + r;
    }
    constructBorderForCell(e, t, r, n, i) {
      var o = e.hLines[t],
        s = e.vLines[r],
        a = e.cells[t][r],
        l = {
          left: this.calculateBorderStyleForColumn(s, t, r, n),
          top: this.calculateBorderStyleForRow(o, t, r, n)
        };
      return i ? (this.isLastColumnIncludingSpan(r, a.colSpan, e) && (l.right = this.calculateBorderStyleForColumn(e.vLines[e.column], t, e.column, n)), this.isLastRowIncludingSpan(t, a.rowSpan, e) && (l.bottom = this.calculateBorderStyleForRow(e.hLines[e.row], e.row, r, n))) : (r >= e.column - 1 && (l.right = this.calculateBorderStyleForColumn(e.vLines[e.column], t, e.column, n)), t >= e.row - 1 && (l.bottom = this.calculateBorderStyleForRow(e.hLines[e.row], e.row, r, n))), l;
    }
    processDataCell(e, t) {
      for (var r = [], n = 0; n < e.row; n++) {
        for (var i = D.Q.newArray(e.column, !0), o = 0; o < e.column; o++) {
          var s = e.cells[n][o];
          if (s.hidden) i[o] = {
            type: "data",
            borderInfo: {},
            colSpan: 1,
            rowSpan: 1,
            hidden: s.hidden,
            originRow: n,
            originColumn: o,
            originalColSpan: s.colSpan,
            originalRowSpan: s.rowSpan
          };else {
            var a = s.colSpan + this.countExtraLineColumnForSpan(e, o, s.colSpan, t),
              l = s.rowSpan + this.countExtraLineRowForSpan(e, n, s.rowSpan, t);
            i[o] = {
              type: "data",
              borderInfo: this.constructBorderForCell(e, n, o, t, !0),
              colSpan: a,
              rowSpan: l,
              hidden: s.hidden,
              originRow: n,
              originColumn: o,
              originalColSpan: s.colSpan,
              originalRowSpan: s.rowSpan
            };
          }
        }
        r.push(i);
      }
      return r;
    }
    process(e) {
      for (var t = k.A.extractInformation(e), r = this.constructDataMatrix(e, t), n = this.processDataCell(r, t), i = r.row - 1; i >= 0; i--) i >= r.row - 1 && (n = O.A.insertMultiple(n, r.row, this.constructRowPartialLineForMergedCell(r, r.row, t, "top")), n = O.A.insertMultiple(n, r.row, this.constructExtraRowLine(r, r.row, "bottom"))), n = O.A.insertMultiple(n, i, this.constructRowPartialLineForMergedCell(r, i, t, "bottom")), n = O.A.insertMultiple(n, i, this.constructExtraRowLine(r, i, "top"));
      for (var o = r.column - 1; o >= 0; o--) for (var s = 0, a = 0; a < n.length; a++) {
        var l = n[a][o],
          c = n[a][Math.max(0, o - 1)];
        if ("data" == l.type && (s = l.originRow), o >= r.column - 1) {
          var d = this.constructColumnPartialLineForMergedCell(l, r.vLines[r.column], r.column, s, t, "left"),
            h = this.constructExtraColumnLine(l, r, r.vLines[r.column], t, !0);
          n[a] = O.A.insertMultiple(n[a], r.column, d.concat(h));
        }
        var p = this.constructColumnPartialLineForMergedCell(l, r.vLines[o], o, s, t, "right"),
          u = this.constructExtraColumnLine(c, r, r.vLines[o], t, !1);
        n[a] = O.A.insertMultiple(n[a], o, p.concat(u));
      }
      for (var g = 0; g < n.length; g++) for (var m = n[g], f = 0; f < m.length; f++) {
        var y = m[f];
        "data" == y.type && (y.colSpan > 1 || y.rowSpan > 1) && this.fillHiddenSection(n, g, f, y.colSpan, y.rowSpan);
      }
      return this.modifyForBooktabRules(n, e.hLines || [], e.row), n;
    }
    isBooktabRule(e, t) {
      return e[t] && !!e[t].booktabRule;
    }
    anyHLine(e, t) {
      if (!e[t]) return !1;
      var r = e[t];
      return r.nOfLines > 0 || r.borders && r.borders.some(e => e);
    }
    modifyForBooktabRules(e, t, r) {
      for (var n = 0, i = 0; i < e.length; i++) for (var o = e[i], s = o.some(e => "data" == e.type), a = 0; a < o.length; a++) {
        var l = o[a],
          c;
        if ("line" == l.type || "extra-line" == l.type || "data" == l.type) {
          if (this.isBooktabRule(t, n)) {
            var d = 0 == n || n >= r ? "bold-exist" : "semi-bold-exist";
            "exist" == l.borderInfo.top && (l.borderInfo.top = d), "exist" != l.borderInfo.bottom || s || (l.borderInfo.bottom = d);
          }
          if (s) {
            var h = n + ("data" == l.type ? l.rowSpan : 1);
            if (this.isBooktabRule(t, h) && "exist" == l.borderInfo.bottom) {
              var p = h >= r ? "bold-exist" : "semi-bold-exist";
              l.borderInfo.bottom = p;
            }
          }
        }
        if (s && a >= o.length - 1) n = o.find(e => "data" == e.type).originRow + 1;
        "data" == l.type && (this.isBooktabRule(t, l.originRow) && this.anyHLine(t, l.originRow) && (l.extraPaddingTop = !0), this.isBooktabRule(t, l.originRow + l.rowSpan) && this.anyHLine(t, l.originRow + l.rowSpan) && (l.extraPaddingBottom = !0));
      }
    }
    constructExtraColumnLine(e, t, r, n, i) {
      if (!r.nOfLines || r.nOfLines <= 1) return [];
      if ("data" != e.type) return "extra-line" == e.type || "line" == e.type ? E().times(r.nOfLines - 1).map(() => ({
        type: "extra-line",
        borderInfo: e.borderInfo,
        joinSection: !0
      })) : E().times(r.nOfLines - 1).map(() => ({
        type: "nothing"
      }));
      var o = e.originColumn,
        s = e.originRow,
        a = this.constructBorderForCell(t, s, o, n, !1);
      return n.hLineHiddenPositions.some(e => e.lineIndex == s && e.sectionIndex == o) && (a.top = "transparent"), E().times(r.nOfLines - 1).map(() => ({
        type: "extra-line",
        borderInfo: {
          [i ? "right" : "left"]: "exist",
          top: a.top,
          bottom: a.bottom
        }
      }));
    }
    fillHiddenSection(e, t, r, n, i) {
      for (var o = t; o < t + i; o++) for (var s = r; s < r + n; s++) o == t && s == r || (e[o][s].hidden = !0);
    }
    constructDataMatrix(e, t) {
      var r = {
        cells: D.Q.newArray(e.row, !0),
        row: e.row,
        column: e.column,
        hLines: this.makeSureLinesInfoSafe(e.hLines, e.row),
        vLines: this.makeSureLinesInfoSafe(e.vLines, e.column),
        columnIncludingLineColumn: 0,
        rowIncludingLineRow: 0
      };
      return r.columnIncludingLineColumn = this.countColumnIncludingLineColumn(r, t), r.rowIncludingLineRow = this.countRowIncludingLineRow(r, t), E().times(e.row).forEach(t => r.cells[t] = D.Q.newArray(e.column, !0)), A.A.cellLoop(e, e => {
        var t = e.rIndex,
          n = e.cIndex,
          i = e.colSpan,
          o = e.rowSpan,
          s = e.hidden;
        r.cells[t][n] = {
          colSpan: i,
          rowSpan: o,
          hidden: s
        };
      }), r;
    }
    calculateBorderStyleForColumn(e, t, r, n) {
      return n.vLineHiddenPositions.some(e => e.lineIndex == r && e.sectionIndex == t) ? "none" : e.nOfLines > 0 ? "exist" : n.vLineIndexesPartialInMergedRows.includes(r) ? "none" : e.borders && e.borders[t] ? "exist" : "transparent";
    }
    calculateBorderStyleForRow(e, t, r, n) {
      return n.hLineHiddenPositions.some(e => e.lineIndex == t && e.sectionIndex == r) ? "none" : e.nOfLines > 0 ? "exist" : n.hLineIndexesPartialInMergedColumns.includes(t) ? "none" : e.borders && e.borders[r] ? "exist" : "transparent";
    }
    constructRowPartialLineForMergedCell(e, t, r, n) {
      if (r.hLineIndexesPartialInMergedColumns.includes(t)) {
        var i = e.hLines[t];
        return [E().times(e.column).map(e => {
          var o = r.hLineHiddenPositions.some(r => r.lineIndex == t && r.sectionIndex == e),
            s;
          return {
            type: "line",
            direction: "row",
            borderInfo: {
              [n]: !o && i && i.borders && i.borders[e] ? "exist" : "transparent"
            }
          };
        })];
      }
      return [];
    }
    constructColumnPartialLineForMergedCell(e, t, r, n, i, o) {
      return i.vLineIndexesPartialInMergedRows.includes(r) ? "data" != e.type ? [{
        type: "nothing"
      }] : [{
        type: "line",
        direction: "column",
        borderInfo: {
          [o]: t && t.borders && t.borders[n] ? "exist" : "transparent"
        }
      }] : [];
    }
    constructExtraRowLine(e, t, r) {
      var n = e.hLines[t];
      return !n.nOfLines || n.nOfLines <= 1 ? [] : E().times(n.nOfLines - 1).map(() => E().times(e.column).map(() => {
        var e;
        return {
          type: "extra-line",
          borderInfo: {
            [r]: "exist"
          }
        };
      }));
    }
  }
  const M = new P();
  var I = r(84258),
    T = r(68286),
    L = r(47858),
    R = r(90437),
    B = r(87571),
    F = r(94362),
    j = r(11474);
  function _(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var z = "1px solid",
    H = "2px solid",
    W = "1px solid",
    V = 20;
  class U extends T.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleCaptionPrefixMouseDown", e => {
        this.props.onSelectedChanged({
          key: "caption",
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }), e.stopPropagation(), e.preventDefault();
      }), (0, n.A)(this, "handleDeleteCaption", () => {
        var e = N(N({}, this.props.data), {}, {
          elements: N({}, this.props.data.elements)
        });
        delete e.elements.caption, F.A.in(() => {
          this.props.onDataChanged(e), this.props.onSelectedChanged({
            key: "0_0",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          });
        });
      }), (0, n.A)(this, "handleEditCaptionPrefix", () => {
        this.getMtFuncs().notifyCaptionNumbering("request-prefix-edit", "table");
      }), (0, n.A)(this, "handleCaptionPosChange", e => {
        var t = N(N({}, this.props.data), {}, {
          capPos: e
        });
        this.props.onDataChanged(t);
      }), (0, n.A)(this, "handleCaptionInfoChange", e => {
        this.props.onDataChanged(N(N({}, this.props.data), {}, {
          cpi: e
        }));
      }), (0, n.A)(this, "handleOk", e => {
        this.props.onDataChanged(e);
      });
    }
    renderComponent() {
      var e = this.props.data,
        t = M.process(e),
        r = e.___designedWidth ? e.___designedWidth : "100%";
      return [this.renderCaptionAbove(e), o().createElement("table", {
        key: "table",
        style: {
          borderCollapse: "collapse",
          tableLayout: "fixed",
          width: "full-width" == e.tableWidth ? r : void 0,
          margin: "auto"
        }
      }, this.renderColumns(t, e), o().createElement("tbody", null, this.renderTable(t))), this.renderCaptionBelow(e), o().createElement("div", {
        key: "settings"
      }, this.renderSettings())];
    }
    renderCaptionAbove(e) {
      if ("above" == e.capPos) return this.renderCaption();
    }
    renderCaptionBelow(e) {
      if (!e.capPos || "below" == e.capPos) return this.renderCaption();
    }
    addCaption() {
      if (!this.props.data.elements.caption) {
        var e = j.A.addCaption(this.props.data);
        F.A.in(() => {
          this.props.onDataChanged(e, {
            isOneLineChanged: !0
          }), this.props.onSelectedChanged({
            key: "caption",
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          });
        });
      }
    }
    getTextAlignFromFirstLine() {
      var e = this.props.data.elements.caption.lines[0].style;
      return e && e.align || "left";
    }
    renderCaption() {
      if (this.props.data.elements.caption) {
        var e = this.getMtFuncs().getCaptionInfo("table"),
          t = this.props.data;
        return o().createElement(B.q, {
          requestPickerSettings: this.props.requestPickerSettings,
          capPos: t.capPos || "below",
          allowSwichCaption: !0,
          onCaptionPosChange: this.handleCaptionPosChange,
          key: "tc-".concat(t.capPos || "below"),
          classNameKey: "table",
          cType: "table",
          blockId: this.props.data.id,
          captionPrefix: e.name,
          psTextStyle: e.textStyle,
          selected: this.props.selected,
          textAlignFirstLine: this.getTextAlignFromFirstLine(),
          onCaptionPrefixMouseDown: this.handleCaptionPrefixMouseDown,
          onDeleteCaption: this.handleDeleteCaption,
          onEditCaptionPrefix: this.handleEditCaptionPrefix,
          notifyCaptionNumbering: this.context.fixedContextHandler.getMtFuncs().notifyCaptionNumbering,
          captionInfo: this.props.data.cpi,
          onCaptionInfoChange: this.handleCaptionInfoChange
        }, o().createElement(s.A, N(N({}, this.buildMetaDataFromName("caption")), {}, {
          showBorderOnSelected: !1,
          isTextMode: !0,
          className: "table-caption",
          style: {
            minWidth: 50,
            display: "inline"
          }
        })));
      }
    }
    renderSettings() {
      return this.renderDesginerDialog(this.props.data);
    }
    renderDesginerDialog(e) {
      if (!this.isSelected()) return null;
      var t = this.getMtFuncs();
      return o().createElement(x.A, {
        appliedDzContainer: this.getDzContainer(),
        reversedScaleDZOrigin: "right bottom",
        style: {
          left: -25,
          top: -25
        },
        key: "design",
        childHasOnClose: !0
      }, o().createElement(b, {
        model: e,
        onOk: this.handleOk,
        designedWidth: 500,
        pageSettings: t.getPageSettings(),
        mtSettings: t.getMtSettings(),
        MathTypeClss: t.getMathTypeClss()
      }));
    }
    renderRowFromResult(e) {
      return e.map((e, t) => {
        if (e.hidden) return null;
        switch (e.type) {
          case "nothing":
            return o().createElement("td", {
              style: {
                padding: 0
              },
              key: t,
              className: "non-select"
            });
          case "extra-line":
            return o().createElement("td", {
              key: t,
              className: "non-select",
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                padding: e.joinSection ? 0 : void 0,
                maxWidth: 0
              })
            });
          case "line":
            return I.A.isFirefox() || I.A.inNodeEnv() ? "row" == e.direction ? o().createElement("td", {
              key: t,
              className: "non-select",
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                padding: 0,
                height: 0
              })
            }) : o().createElement("td", {
              key: t,
              className: "non-select",
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                padding: 0,
                width: 0
              })
            }) : "row" == e.direction ? o().createElement("td", {
              key: t,
              className: "non-select",
              style: {
                padding: 0,
                height: 0,
                position: "relative"
              }
            }, o().createElement("div", {
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                position: "absolute",
                left: 0,
                right: -1,
                userSelect: "none",
                pointerEvents: "none"
              })
            })) : o().createElement("td", {
              key: t,
              className: "non-select",
              style: {
                padding: 0,
                width: 0,
                position: "relative"
              }
            }, o().createElement("div", {
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                position: "absolute",
                top: 0,
                bottom: -1,
                userSelect: "none",
                pointerEvents: "none"
              })
            }));
          case "data":
            var r = R.Z.getKeyFromRowCol(e.originRow, e.originColumn),
              n = this.props.data.elements[r],
              i = L.A.getLatexTableCellStyle(n, "align"),
              s;
            return o().createElement("td", N(N({}, this.extraInfoOnDataTd(e, n)), {}, {
              className: "role-cell-data",
              colSpan: e.colSpan,
              rowSpan: e.rowSpan,
              style: N(N({}, this.buildBorderStyle(e.borderInfo)), {}, {
                minWidth: V,
                textAlign: i,
                paddingTop: e.extraPaddingTop ? 4 : void 0,
                paddingBottom: e.extraPaddingBottom ? 4 : void 0
              }),
              key: "".concat(n.id, "_").concat(t)
            }), this.renderEditArea(r));
        }
      }).filter(e => e);
    }
    extraInfoOnDataTd(e, t) {
      return null;
    }
    buildBorderStyle(e) {
      if (!e) return {};
      var t = {};
      return t.borderTop = this.mapeBorderStyle(e.top), t.borderRight = this.mapeBorderStyle(e.right), t.borderBottom = this.mapeBorderStyle(e.bottom), t.borderLeft = this.mapeBorderStyle(e.left), t;
    }
    mapeBorderStyle(e) {
      if (e) switch (e) {
        case "exist":
          return z;
        case "bold-exist":
          return H;
        case "semi-bold-exist":
          return W;
        case "transparent":
          return this.getNoneBorderStyle();
      }
    }
    renderTable(e) {
      return e.map((e, t) => {
        var r = this.renderRowFromResult(e);
        return r.length > 0 ? o().createElement("tr", {
          key: t
        }, r) : null;
      }).filter(e => e);
    }
    getNoneBorderStyle() {
      return this.isSelected() ? "1px solid rgba(0, 0, 0, 0.13)" : "1px solid transparent";
    }
    renderEditArea(e) {
      return o().createElement(s.A, N(N({}, this.buildMetaDataFromName(e)), {}, {
        style: {
          paddingLeft: 7,
          paddingRight: 7
        },
        isTextMode: !0,
        showBorderOnSelected: !1,
        allowTag: !1,
        allowEditorTag: !1,
        fontSizeRatio: this.props.fontSizeRatio,
        className: "lttb"
      }));
    }
    getcolumnInfo(e, t) {
      for (var r = !1, n = !0, i = 0; i < e.length; i++) {
        var o = e[i][t];
        "data" == o.type ? (r = !0, o.hidden || (n = !1)) : n = !1;
      }
      return {
        anyData: r,
        hiddenDataColumn: n
      };
    }
    isColumnWidthFixed(e, t) {
      var r;
      return "number" == typeof (e.columnWidths || [])[t];
    }
    renderColumns(e, t) {
      var r = e[0],
        n = -1;
      return o().createElement("colgroup", null, r.map((r, i) => {
        var s = this.getcolumnInfo(e, i),
          a = s.hiddenDataColumn,
          l = s.anyData;
        return a ? o().createElement("col", {
          style: {
            width: V
          },
          key: i
        }) : l ? (n++, this.isColumnWidthFixed(t, n) ? o().createElement("col", {
          key: i,
          style: {
            width: "".concat(t.columnWidths[n], "cm")
          }
        }) : o().createElement("col", {
          key: i
        })) : o().createElement("col", {
          style: {
            width: 2
          },
          key: i
        });
      }));
    }
    getClassName() {
      return S()(super.getClassName(), "role-tabular", "latex-table-symbol");
    }
  }
};
