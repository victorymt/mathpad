/* module 13067 — 7303 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(39791),
    l = r(67882);
  class c {
    parseInt(e, t, r) {
      return e ? (e = parseInt(e, 10), isNaN(e) && (e = t), e > r && (e = r), e < t && (e = t), e) : "";
    }
  }
  const d = new c();
  var h = r(27271),
    p = r(49812),
    u = r(49414),
    g = r(32485),
    m = r.n(g),
    f = r(68286),
    y = r(90437);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends f.A {
    constructor(e) {
      super(e), (0, n.A)(this, "matrix", void 0), (0, n.A)(this, "disableLayoutType", void 0), (0, n.A)(this, "drawingFontFamily", void 0), (0, n.A)(this, "onRowChange", e => {
        var t = d.parseInt(e.target.value, 1, 100);
        this.setState({
          row: t
        }), t && "string" != typeof t && this.changeModelBaseOnRow(t);
      }), (0, n.A)(this, "onColumnChange", e => {
        var t = d.parseInt(e.target.value, 1, 50);
        this.setState({
          column: t
        }), t && "string" != typeof t && this.changeModelBaseOnColumn(t);
      }), (0, n.A)(this, "updateMatrix", () => {
        if (this.compositeBlock) {
          var e = this.getElementHeight(s.jS(s.jS(this.compositeBlock, "matrix"), "table")[0]);
          s.hS(s.jS(s.jS(this.compositeBlock, "matrix"), "svg"), "height", e);
        }
      }), (0, n.A)(this, "handleMatrixRef", e => {
        this.matrix = e;
      }), this.state = {
        row: this.props.data.row,
        column: this.props.data.column,
        bracket: "(",
        showBorderDesign: !1
      };
    }
    useCustomBaseLine() {
      return !0;
    }
    getClassName() {
      return m()(super.getClassName(), "matrix-symbol", "matrix-like", "matrix-math-mode", "role-tabular");
    }
    componentWillUpdate(e) {
      e.data.row == this.props.data.row && e.data.column == this.props.data.column || this.setState({
        row: e.data.row,
        column: e.data.column
      }), e.selected == this.props.selected || e.selected || this.setState({
        showBorderDesign: !1
      });
    }
    changeSelectedIfRequire(e, t) {
      var r = this.props.selected;
      if (r && r.key) {
        var n = y.Z.getTabularCellIndexFromKey(r.key);
        if (n.column >= t || n.row >= e) {
          var i = {
            key: y.Z.getKeyFromRowCol(Math.min(n.row, e - 1), Math.min(n.column, t - 1)),
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          };
          this.props.onSelectedChanged(i);
        }
      }
    }
    changeModelBaseOnRow(e) {
      if (this.props.data.row != e) {
        var t = h.A.adjustModelByRowCollumn(this.props.data, e, this.props.data.column);
        this.props.onDataChanged(t, u.A.getBuilder().withFocusAcquired().build()), this.changeSelectedIfRequire(t.row, t.column);
      }
    }
    changeModelBaseOnColumn(e) {
      if (this.props.data.column != e) {
        var t = h.A.adjustModelByRowCollumn(this.props.data, this.props.data.row, e);
        this.props.onDataChanged(t, u.A.getBuilder().withFocusAcquired().build()), this.changeSelectedIfRequire(t.row, t.column);
      }
    }
    getDisplayMode() {
      return this.props.displayMode;
    }
    shouldShowSmaller() {
      return !1;
    }
    renderEditArea(e, t, r) {
      var n = this.shouldShowSmaller() ? .75 * this.props.fontSizeRatio : this.props.fontSizeRatio,
        i = "editor-cell",
        s = p.A.isSingleLineEditor(this.props.data.elements[e]) ? l.A : a.A;
      return o().createElement(s, b(b({}, this.buildMetaDataFromName(e)), {}, {
        className: i,
        showBorderOnSelected: !1,
        optimizeForOneLine: !0,
        displayMode: this.getDisplayMode(),
        fontSizeRatio: n
      }));
    }
    shouldShowBorder() {
      return this.isChildSelected();
    }
    getColumnStyle(e, t) {}
    renderSelectedBorderBox(e, t) {
      var r;
      if (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) {
        var n = this.props.data,
          i = n.row == e + 1,
          s = n.column == t + 1;
        return o().createElement("div", {
          className: m()("sbd no-print", {
            "sbd-lr": i,
            "sbd-lc": s
          })
        });
      }
    }
    renderColumn(e, t) {
      var r = e + "_" + t,
        n = m()({
          selected: this.shouldShowBorder()
        }),
        i = this.props.data;
      return o().createElement("td", {
        style: this.getColumnStyle(e, t),
        key: i.elements[r].id,
        className: n
      }, this.renderEditArea(r, e, t), this.renderSelectedBorderBox(e, t));
    }
    renderRowContent(e) {
      for (var t = [], r = this.props.data.column, n = 0; n < r; n++) t.push(this.renderColumn(e, n));
      return t;
    }
    renderRow(e) {
      var t = m()("math-row", {
        selected: this.shouldShowBorder(),
        smaller: this.shouldShowSmaller()
      });
      return o().createElement("tr", {
        key: this.getKeyForRow(e),
        className: t
      }, this.renderRowContent(e));
    }
    renderTables() {
      for (var e = [], t = this.props.data.row, r = 0; r < t; r++) e.push(this.renderRow(r));
      return e;
    }
    isArray() {
      return "\\array" == this.props.data.text;
    }
    componentWillUnmount() {
      this.willComponentUnmount = !0;
    }
    afterReactRenderWhenDataChanged() {
      this.context.fixedContextHandler.getBatchUpdater().push(this.updateMatrix, this);
    }
    afterReactRender(e, t) {
      super.afterReactRender(e, t), this.drawingFontFamily != this.context.baseMathModeFontFamily && (this.drawingFontFamily = this.context.baseMathModeFontFamily, this.context.fixedContextHandler.getBatchUpdater().push(this.updateMatrix, this));
    }
    currentSelectedColumn() {
      var e = this.props.selected.key;
      return parseInt(e.split("_")[1], 10);
    }
    renderPlaceHolderAtEnd() {
      return null;
    }
    getTableCssStyle() {
      return null;
    }
    renderColumns() {}
    renderBeforeTable() {
      return null;
    }
    renderAfterTable() {
      return null;
    }
    renderComponent() {
      return o().createElement("matrix", {
        ref: this.handleMatrixRef,
        className: this.props.data.text.substr(1)
      }, this.renderBeforeTable(), o().createElement("table", {
        style: this.getTableCssStyle()
      }, this.renderColumns(), o().createElement("tbody", null, this.renderTables())), this.renderAfterTable(), this.renderSetting(), this.renderPlaceHolderAtEnd());
    }
  }
};
