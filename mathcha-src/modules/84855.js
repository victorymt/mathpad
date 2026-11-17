/* module 84855 — 61934 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => He
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(6720),
    c = r(52970),
    d = r(32422),
    h = r(8685),
    p = r(59310);
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
  class m {
    toInputTabular(e) {
      var t = {
          cells: p.Q.newArray(e.row, !0),
          column: e.column,
          row: e.row,
          hLines: [],
          vLines: [],
          columnWidths: a().times(e.column, () => "auto"),
          tableWidth: "grow"
        },
        r = a().times(e.row + 1, () => ({
          borders: a().times(e.column, () => !1)
        })),
        n = a().times(e.column + 1, () => ({
          borders: a().times(e.row, () => !1)
        }));
      return a().times(t.row).forEach(r => t.cells[r] = p.Q.newArray(e.column, !0)), d.A.cellLoop(e, e => {
        var i = e.rIndex,
          o = e.cIndex,
          s = e.rowSpan,
          l = e.colSpan,
          c = e.hidden,
          d = e.editor;
        if (t.cells[i][o] = {
          rowSpan: s,
          colSpan: l,
          hidden: c,
          data: d,
          align: "left"
        }, !c) {
          var h = 15;
          d.style && null != d.style.border && (h = d.style.border), (1 & h) > 0 && a().times(s, e => n[o].borders[i + e] = !0), (4 & h) > 0 && a().times(s, e => n[o + l].borders[i + e] = !0), (2 & h) > 0 && a().times(l, e => r[i].borders[o + e] = !0), (8 & h) > 0 && a().times(l, e => r[i + s].borders[o + e] = !0);
        }
      }), console.log(r), console.log(n), this.normalizeLinesInfo(r), this.normalizeLinesInfo(n), t.hLines = r, t.vLines = n, this.ignoreVHiddenForVLines(t), t;
    }
    normalizeLinesInfo(e) {
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.borders.every(e => e) ? e[t] = {
          nOfLines: 1
        } : r.borders.every(e => !e) && (e[t] = null);
      }
    }
    ignoreVHiddenForVLines(e) {
      for (var t = 0; t < e.column - 1; t++) {
        var r = e.vLines[t + 1];
        if (r && r.borders) {
          for (var n = !0, i = 0; i < r.borders.length; i++) {
            var o = e.cells[i][t],
              s = e.cells[i][t + 1];
            (o.hidden || o.colSpan > 1) && s.hidden || (n = n && r.borders[i]);
          }
          n && (e.vLines[t + 1] = {
            nOfLines: 1
          });
        }
      }
    }
    assignColumnWidths(e, t) {
      for (var r = 0, n = 0; n < e.columnsOptions.length; n++) {
        var i;
        "align" == e.columnsOptions[n].type && (e.columnsOptions[n] = {
          type: "paragraph",
          width: "".concat((t.columnWidths[r] / t.tableWidth).toFixed(2), "\\textwidth"),
          cIndex: r
        }, r++);
      }
    }
    toLatex(e, t, r) {
      var n = this.toInputTabular(e),
        i = c.A.toLatexStructure(n);
      this.assignColumnWidths(i, t);
      var o = h.A.toLatex(i, r, t);
      return t.isNestedTable ? o : "\\begin{table}[!h]\n        \\centering\n        ".concat(o, "\n        ").concat(this.convertCaption(e.elements.caption, t, r), "\n        \\end{table}");
    }
    convertCaption(e, t, r) {
      if (!e) return "";
      var n = e.lines.map(e => g(g({}, e), {}, {
          style: void 0
        })),
        i = g(g({}, e), {}, {
          lines: n
        }),
        o = r.toLatexFromEditor(i, t);
      return "\\caption{".concat(o, "}");
    }
  }
  const f = new m();
  var y = r(48440),
    v = r(40961),
    b = r.n(v),
    x = r(37566),
    C = r(49414),
    S = r(36223),
    A = r(84258),
    w = r(11474),
    E = r(20418),
    k = r(60693),
    O = r(85576);
  function D(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function P(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class M extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", new E.X({}, this.props.getDZContainer)), (0, n.A)(this, "onVerticalLineMouseDown", (e, t, r, n) => {
        n.preventDefault(), n.stopPropagation(), this.handleResizingMoving(n, !0, e, t, r);
      }), (0, n.A)(this, "onHorizontalLineMouseDown", (e, t, r, n) => {
        n.preventDefault(), n.stopPropagation(), this.handleResizingMoving(n, !1, e, t, r);
      }), (0, n.A)(this, "handleResizingMoving", (e, t, r, n, i) => {
        var o = b().findDOMNode(this);
        if (!this.movingHandler.baseElement) {
          var s = o.parentNode.parentNode;
          this.movingHandler.setBaseElement(s), this.movingHandler.setContainer(x.Yt("body"));
        }
        this.props.onResizeStart(), this.movingHandler.mouseDown(e, {
          isVertical: t,
          lineIndex: r,
          lines: i,
          span: n,
          fixContainer: O.c.findFixedContextElement(o)
        });
      }), this.movingHandler.onMoving = (e, t, r, n) => {
        n.stopPropagation(), n.preventDefault();
        var i = b().findDOMNode(this),
          o = i.parentNode.parentNode,
          s = this.props.getDZContainer(),
          a = k.T.getBCRect(o, s),
          l = k.T.getFromAbsLt(S.A.getLeftTopFromEvent(n), s);
        r.customData.lastPoint = {
          x: l.left,
          y: l.top
        };
        var c = this.getTableRect(),
          d = k.T.resolveFixLeftTop(a, r.customData.fixContainer),
          h = k.T.resolveFixLeftTop(l, r.customData.fixContainer);
        if (r.customData.isVertical) {
          var p = x.YG(i, ">border-v-resizing");
          x.hS(p, {
            display: "block",
            position: "fixed",
            height: 2,
            borderTop: "1px solid green",
            left: c.left + d.left,
            width: c.right - c.left,
            top: h.top
          });
        } else {
          var u = x.YG(i, ">border-h-resizing");
          x.hS(u, {
            display: "block",
            position: "fixed",
            width: 2,
            borderRight: "1px solid green",
            top: c.top + d.top,
            height: c.bottom - c.top,
            left: h.left
          });
        }
      }, this.movingHandler.onMoved = e => {
        if (e.customData && e.customData.lastPoint) {
          var t = b().findDOMNode(this),
            r = x.YG(t, ">border-v-resizing"),
            n = x.YG(t, ">border-h-resizing");
          x.hS(r, {
            position: "",
            display: "none"
          }), x.hS(n, {
            position: "",
            display: "none"
          }), this.props.onResizeEnd(P(P({}, e.customData), e.customData.lastPoint));
        }
      };
    }
    getTableRect() {
      var e = this.props.vLines,
        t = this.props.hLines;
      return {
        left: t[0][0].fromPoint.x,
        top: e[0][0].fromPoint.y,
        right: t[t.length - 1][0].fromPoint.x,
        bottom: e[e.length - 1][0].fromPoint.y
      };
    }
    render() {
      var e = this.props.vLines,
        t = this.props.hLines,
        r,
        n,
        i = 6;
      if (A.A.isMobileOrTablet()) {
        var s = this.getTableRect();
        r = a().flatMap(e, (t, r) => {
          if (!t || t.length <= 0) return [];
          var n = {
              display: "block",
              position: "absolute",
              padding: "2px",
              left: s.left - 30,
              top: t[0].fromPoint.y - 11,
              height: "19px",
              width: "19px",
              background: "#f7f7f7",
              border: "1px solid lightgray",
              boxShadow: "#e0dddd 1px 1px 1px 0px",
              opacity: .5,
              zIndex: 100
            },
            i = a().assign({}, n, {
              left: s.right + 10
            }),
            l = o().createElement("svg", {
              style: {
                width: "100%",
                height: "100%",
                stroke: "none",
                transform: "scale(1.2)",
                transformOrigin: " 0 0"
              }
            }, o().createElement("path", {
              fill: "gray",
              d: "M0 7h16v2h-16v-2z"
            }), o().createElement("path", {
              fill: "gray",
              d: "M7 6h2v-3h2l-3-3-3 3h2z"
            }), o().createElement("path", {
              fill: "gray",
              d: "M9 10h-2v3h-2l3 3 3-3h-2z"
            }));
          return [o().createElement("vline-support", {
            onTouchStart: this.onVerticalLineMouseDown.bind(this, r, t[0], e),
            key: r,
            style: n
          }, l), o().createElement("vline-support", {
            onTouchStart: this.onVerticalLineMouseDown.bind(this, r, t[0], e),
            key: r + "_right",
            style: i
          }, l)];
        }), n = a().flatMap(t, (e, r) => {
          if (!e || e.length <= 0) return [];
          var n = {
              display: "block",
              position: "absolute",
              padding: "2px",
              left: e[0].fromPoint.x - 11,
              top: s.top - 30,
              height: "19px",
              width: "19px",
              background: "#f7f7f7",
              border: "1px solid lightgray",
              boxShadow: "#e0dddd 1px 1px 1px 0px",
              opacity: .5,
              zIndex: 100
            },
            i = a().assign({}, n, {
              top: s.bottom + 10
            }),
            l = o().createElement("svg", {
              style: {
                width: "100%",
                height: "100%",
                stroke: "none",
                transform: "scale(1.2)",
                transformOrigin: " 0 0"
              }
            }, o().createElement("path", {
              fill: "gray",
              d: "M7 0h2v16h-2v-16z"
            }), o().createElement("path", {
              fill: "gray",
              d: "M3 5l-3 3 3 3v-2h3v-2h-3z"
            }), o().createElement("path", {
              fill: "gray",
              d: "M16 8l-3-3v2h-3v2h3v2z"
            }));
          return [o().createElement("vline-support", {
            onTouchStart: this.onHorizontalLineMouseDown.bind(this, r, e[0], t),
            key: r,
            style: n
          }, l), o().createElement("vline-support", {
            onTouchStart: this.onHorizontalLineMouseDown.bind(this, r, e[0], t),
            key: r + "_right",
            style: i
          }, l)];
        });
      } else r = a().flatMap(e, (t, r) => a().map(t, (t, n) => o().createElement("border-line", {
        onMouseDown: this.onVerticalLineMouseDown.bind(this, r, t, e),
        key: r + "_" + n,
        style: {
          position: "absolute",
          top: t.fromPoint.y - 3,
          height: 6,
          left: t.fromPoint.x,
          width: t.toPoint.x - t.fromPoint.x,
          cursor: "row-resize",
          background: "transparent"
        }
      }))), n = a().flatMap(t, (e, r) => a().map(e, (e, n) => o().createElement("border-line", {
        onMouseDown: this.onHorizontalLineMouseDown.bind(this, r, e, t),
        key: r + "_" + n,
        style: {
          position: "absolute",
          left: e.fromPoint.x - 3,
          width: 6,
          top: e.fromPoint.y,
          height: e.toPoint.y - e.fromPoint.y,
          cursor: "col-resize",
          background: "transparent"
        }
      })));
      return o().createElement("border-resizing-container", null, r, n, o().createElement("border-v-resizing", null), o().createElement("border-h-resizing", null));
    }
  }
  var I = r(55451),
    T = r(39791),
    L = r(47858),
    R = r(32485),
    B = r.n(R),
    F = r(68286),
    j = r(94362),
    _ = r(87571),
    N = r(58907),
    z = r(47286),
    H = r(56540),
    W = r(91414),
    V = r(91335),
    U = r(98231),
    q = r(180);
  class G {}
  class K {
    constructor() {
      (0, n.A)(this, "mixedValue", new G());
    }
    isArrOrPrimitive(e) {
      return "number" == typeof e || "string" == typeof e || "boolean" == typeof e || !e || e instanceof Array || !!e[0];
    }
    isMixedValue(e) {
      return e instanceof G;
    }
    specificValue(e, t) {
      return null == e || this.isMixedValue(e) ? t : e;
    }
    verifyObjectClean(e) {
      if (this.isMixedValue(e)) throw new Error("Mixed Object found");
      this.traverse(e);
    }
    traverse(e) {
      for (var t in e) {
        if (this.isMixedValue(e[t])) throw new Error("Mixed Object found");
        e[t] && "object" == typeof e[t] && this.traverse(e[t]);
      }
    }
  }
  var Z = new K();
  function Y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class J extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    render() {
      var e = this.props.zIndexPosition,
        t = this.props.borderStyle || {},
        r = t.borderColor,
        n = t.borderType,
        i = t.thickness,
        s = [{
          key: "solid",
          value: "Solid"
        }, {
          key: "dotted",
          value: "Dotted"
        }, {
          key: "dashed",
          value: "Dashed"
        }],
        a = Z.specificValue(r, "#000"),
        l = Z.specificValue(n, "solid"),
        c = Z.specificValue(i, 1);
      return o().createElement("div", {
        style: {
          display: "inline-block"
        }
      }, o().createElement(V.A, {
        width: 70,
        style: {
          display: "inline-block",
          fontSize: 13
        },
        data: s,
        value: l,
        showEmpty: Z.isMixedValue(n),
        onChange: e => {
          this.props.onBorderStyleChange(Q(Q({}, this.props.borderStyle), {}, {
            borderType: e
          }));
        }
      }), o().createElement(U.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        disableNoColor: !0,
        stopPropagation: !0,
        style: {
          display: "inline-block",
          marginLeft: 5,
          verticalAlign: -6,
          zIndex: 9999 + e
        },
        value: a,
        showEmpty: Z.isMixedValue(r),
        onItemSelect: e => {
          this.props.onBorderStyleChange(Q(Q({}, this.props.borderStyle), {}, {
            borderColor: e
          }));
        }
      }), o().createElement(q.A, {
        style: {
          display: "inline-block",
          marginLeft: 5,
          verticalAlign: -6,
          zIndex: 9999 + e
        },
        value: c,
        showEmpty: Z.isMixedValue(i),
        onItemSelect: e => this.props.onBorderStyleChange(Q(Q({}, this.props.borderStyle), {}, {
          thickness: e
        }))
      }));
    }
  }
  var X = r(21774);
  class $ {
    mixPrimitive(e, t) {
      return e == t ? e : !!e != !!t || Z.isMixedValue(e) || Z.isMixedValue(t) ? Z.mixedValue : e instanceof Array && t instanceof Array && X.A.arrayEquals(e, t) ? e : Z.mixedValue;
    }
    mixObject(e, t) {
      if (e == t) return e;
      if (!!e != !!t) return e || t;
      var r = a().uniq(a().keys(e).concat(a().keys(t))),
        n = {};
      return r.forEach(r => {
        var i = e[r],
          o = t[r];
        n[r] = this.mix(i, o);
      }), n;
    }
    mix(e, t) {
      if (e == t) return e;
      if (!!e != !!t) {
        var r = e || t;
        return Z.isMixedValue(r) ? r : Z.isArrOrPrimitive(r) ? Z.mixedValue : r;
      }
      return Z.isMixedValue(e) || Z.isMixedValue(t) ? Z.mixedValue : Z.isArrOrPrimitive(e) && Z.isArrOrPrimitive(t) ? this.mixPrimitive(e, t) : "object" == typeof e && "object" == typeof t ? this.mixObject(e, t) : Z.mixedValue;
    }
    mixArr(e) {
      if (e.length <= 1) return e[0];
      for (var t = e[0], r = 1; r < e.length; r++) t = this.mix(t, e[r]);
      return t;
    }
  }
  var ee = new $();
  class te {
    compare(e, t) {
      return !Z.isMixedValue(e) && !Z.isMixedValue(t) && !!e == !!t && (Z.isArrOrPrimitive(e) && Z.isArrOrPrimitive(t) ? this.comparePrimitive(e, t) : "object" == typeof e && "object" == typeof t && this.compareObject(e, t));
    }
    compareObject(e, t) {
      var r = a().keys(e),
        n = a().keys(t);
      if (r.length != n.length) return !1;
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        if (!this.compare(e[o], t[o])) return !1;
      }
      return !0;
    }
    comparePrimitive(e, t) {
      return e instanceof Array && t instanceof Array ? X.A.arrayEquals(e, t) : e == t;
    }
  }
  var re = new te();
  class ne {
    merge(e, t) {
      return void 0 === t || Z.isMixedValue(t) ? e : Z.isArrOrPrimitive(t) ? t : this.mergeObject(e, t);
    }
    mergeObject(e, t) {
      var r;
      return e = a().clone(e || {}), a().keys(t).forEach(r => {
        e[r] = this.merge(e[r], t[r]);
      }), e;
    }
  }
  var ie = new ne();
  function oe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function se(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? oe(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ae extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        useBorderAll: this.allBorderTheSame(this.props.cellBorders)
      }), (0, n.A)(this, "changeAllBorderStyles", e => {
        var t = this.props.cellBorders,
          r = void 0 === t ? {} : t,
          n = se(se({}, r), {}, {
            left: ie.merge(r.left || {}, e),
            top: ie.merge(r.top || {}, e),
            right: ie.merge(r.right || {}, e),
            bottom: ie.merge(r.bottom || {}, e)
          });
        this.props.onChange(n);
      }), (0, n.A)(this, "changeBorderStyle", (e, t) => {
        var r = this.props.cellBorders,
          n = void 0 === r ? {} : r,
          i = se(se({}, n), {}, {
            [e]: ie.merge(n[e] || {}, t)
          });
        this.props.onChange(i);
      });
    }
    render() {
      return o().createElement("div", {
        style: {
          margin: "2px 0",
          zIndex: 5,
          background: "var(--ui-surface, white)"
        }
      }, o().createElement("button", {
        onClick: () => this.toggleAllEdges(),
        className: "btn-normal",
        style: {
          display: "inline-block",
          border: "none",
          position: "relative",
          zIndex: 1
        }
      }, o().createElement("span", null, "Borders"), o().createElement("i", {
        style: {
          paddingLeft: 5
        },
        className: this.state.useBorderAll ? "fa fa-caret-right" : "fa fa-caret-down"
      })), this.renderCellsBorderStyle());
    }
    mergeToSingle(e, t, r, n) {
      var i,
        o = e;
      return [t, r, n].forEach(e => {
        o = ee.mix(o, e);
      }), o;
    }
    renderCellsBorderStyle() {
      if (this.state.useBorderAll) {
        var e = this.props.cellBorders || {},
          t = e.left,
          r = void 0 === t ? {} : t,
          n = e.top,
          i = void 0 === n ? {} : n,
          s = e.right,
          a = void 0 === s ? {} : s,
          l = e.bottom,
          c = void 0 === l ? {} : l,
          d = this.mergeToSingle(r, i, a, c);
        return o().createElement("div", {
          style: {
            marginBottom: 10
          }
        }, this.renderSettingView(4, d, "4 Edges", e => this.changeAllBorderStyles(e)));
      }
      return o().createElement("div", {
        style: {
          marginBottom: 10
        }
      }, this.renderBorderStyleSetting("left", "Left", 4), this.renderBorderStyleSetting("top", "Top", 3), this.renderBorderStyleSetting("right", "Right", 2), this.renderBorderStyleSetting("bottom", "Bottom", 1));
    }
    toggleAllEdges() {
      this.setState({
        useBorderAll: !this.state.useBorderAll
      });
    }
    renderBorderStyleSetting(e, t, r) {
      var n = this.props.cellBorders,
        i,
        o = (void 0 === n ? {} : n)[e] || {};
      return this.renderSettingView(r, o, t, t => this.changeBorderStyle(e, t));
    }
    renderSettingView(e, t, r, n) {
      return o().createElement("div", {
        style: {
          margin: "2px 0"
        },
        className: "test-border-style-settings"
      }, o().createElement("div", {
        style: {
          width: 35,
          display: "inline-block",
          position: "relative"
        }
      }, o().createElement("div", {
        style: {
          position: "absolute",
          left: 20,
          top: -33,
          borderLeft: "1px solid var(--ui-border, lightgray)",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          width: 10,
          height: 28
        }
      })), o().createElement("div", {
        style: {
          width: 65,
          display: "inline-block"
        }
      }, r), o().createElement(J, {
        requestPickerSettings: this.props.requestPickerSettings,
        zIndexPosition: e,
        borderStyle: t,
        onBorderStyleChange: n
      }));
    }
    allBorderTheSame(e) {
      if (!e) return !0;
      var t = e.left,
        r = e.top,
        n = e.right,
        i = e.bottom;
      return !!(t && r && n && i) && re.compare(t, r) && re.compare(r, n) && re.compare(n, i);
    }
  }
  var le = r(90112);
  function ce(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function de(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ce(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var he = N.A.getModalDialog();
  class pe extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        cellStyle: this.getMergedCellStyle(this.props.table, this.props.selectedKeys)
      });
    }
    getMergedCellStyle(e, t) {
      var r = t.map(t => this.getCellStyleFromKey(e, t)).filter(e => e);
      return ee.mixArr(r);
    }
    getCellStyleFromKey(e, t) {
      var r = e.elements[t];
      if (!r.hidden) return r.style ? {
        borders: r.style.borders,
        padding: r.style.padding,
        backgroundColor: r.style.backgroundColor
      } : {
        borders: {
          left: {
            thickness: 1,
            borderType: "solid"
          },
          top: {
            thickness: 1,
            borderType: "solid"
          },
          right: {
            thickness: 1,
            borderType: "solid"
          },
          bottom: {
            thickness: 1,
            borderType: "solid"
          }
        },
        padding: .5
      };
    }
    mergeStateToTable() {
      var e = this.props,
        t = e.table,
        r = e.selectedKeys,
        n = this.state.cellStyle,
        i = a().clone(t.elements);
      return r.forEach(e => {
        var r = ie.merge(i[e].style || {}, n);
        Z.verifyObjectClean(r), i[e] = de(de({}, i[e]), {}, {
          style: r
        });
        var o = le.d.getLeftAvailableCellKeys(e, t),
          s = le.d.getAboveAvailableCellKeys(e, t),
          a = le.d.getRightAvailableCellKeys(e, t),
          l = le.d.getBelowAvailableCellKeys(e, t);
        o.forEach(e => {
          i[e] = de(de({}, i[e]), {}, {
            style: this.mergeBorderPosition(i[e].style, n, "left", "right")
          });
        }), s.forEach(e => {
          i[e] = de(de({}, i[e]), {}, {
            style: this.mergeBorderPosition(i[e].style, n, "top", "bottom")
          });
        }), a.forEach(e => {
          i[e] = de(de({}, i[e]), {}, {
            style: this.mergeBorderPosition(i[e].style, n, "right", "left")
          });
        }), l.forEach(e => {
          i[e] = de(de({}, i[e]), {}, {
            style: this.mergeBorderPosition(i[e].style, n, "bottom", "top")
          });
        });
      }), de(de({}, t), {}, {
        elements: i
      });
    }
    mergeBorderPosition(e, t, r, n) {
      var i,
        o,
        s = null == e || null === (i = e.borders) || void 0 === i ? void 0 : i[n],
        a = ie.merge(s, null === (o = t.borders) || void 0 === o ? void 0 : o[r]);
      return de(de({}, e), {}, {
        borders: de(de({}, null == e ? void 0 : e.borders), {}, {
          [n]: a
        })
      });
    }
    handleOk() {
      this.props.onClose(this.mergeStateToTable());
    }
    renderPaddingInput() {
      var e = this.state.cellStyle.padding,
        t = Z.specificValue(e, .5);
      return o().createElement("div", null, o().createElement("span", {
        style: {
          display: "inline-block",
          width: 100
        }
      }, "Padding: "), o().createElement(W.A, {
        containerStyle: {
          display: "inline-flex",
          fontSize: 13,
          width: 40
        },
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        disableSlider: !0,
        showEmpty: Z.isMixedValue(e),
        value: t,
        unitStyle: {
          fontSize: 13
        },
        style: {
          fontSize: 13
        },
        onValueChanged: e => {
          this.setState({
            cellStyle: de(de({}, this.state.cellStyle), {}, {
              padding: e
            })
          });
        }
      }));
    }
    renderCellBordersSetting() {
      return o().createElement(ae, {
        requestPickerSettings: this.props.requestPickerSettings,
        cellBorders: this.state.cellStyle.borders,
        onChange: e => {
          this.setState({
            cellStyle: de(de({}, this.state.cellStyle), {}, {
              borders: e
            })
          });
        }
      });
    }
    render() {
      var e = this.state.cellStyle.backgroundColor,
        t = Z.specificValue(e, "#FFF");
      return o().createElement(he, {
        show: !0
      }, o().createElement(z.A, {
        title: "Table settings",
        size: "medium",
        scroll: "body",
        style: {
          height: "auto",
          padding: 15
        },
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.handleOk(),
        onCancel: () => this.props.onClose(),
        okLabel: "OK",
        show: !0
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
          fontSize: 13
        }
      }, this.renderCellBordersSetting(), this.renderPaddingInput(), o().createElement("div", {
        style: {
          marginTop: 5
        },
        className: "test-bg-fill"
      }, o().createElement("span", {
        style: {
          display: "inline-block",
          width: 100
        }
      }, "Background: "), o().createElement(H.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        noColorValue: null,
        style: {
          width: 30,
          height: 25,
          display: "inline-block",
          verticalAlign: "-5px",
          marginLeft: -2,
          zIndex: 1,
          cursor: "pointer"
        },
        showEmpty: Z.isMixedValue(e),
        value: t,
        onItemSelect: e => {
          this.setState({
            cellStyle: de(de({}, this.state.cellStyle), {}, {
              backgroundColor: e
            })
          });
        }
      })))));
    }
  }
  var ue = r(90437),
    ge = r(33476),
    me = r(52402),
    fe = r(24829),
    ye = r(49812),
    ve = r(39314);
  function be(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function xe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? be(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Ce = {
    borderColor: ve.A.blackArr,
    borderType: "solid",
    thickness: 1
  };
  class Se {
    getBorderInfo(e, t) {
      var r, n, i, o, s;
      if (!e) {
        var a = xe(xe({}, Ce), {}, {
          borderColor: t
        });
        return {
          borders: {
            bottom: a,
            left: a,
            right: a,
            top: a
          }
        };
      }
      var l = null !== (r = e.border) && void 0 !== r ? r : 15;
      return {
        borders: {
          bottom: 8 & l ? this.getBorderStyleOrDefault(null === (n = e.borders) || void 0 === n ? void 0 : n.bottom, t) : void 0,
          left: 1 & l ? this.getBorderStyleOrDefault(null === (i = e.borders) || void 0 === i ? void 0 : i.left, t) : void 0,
          right: 4 & l ? this.getBorderStyleOrDefault(null === (o = e.borders) || void 0 === o ? void 0 : o.right, t) : void 0,
          top: 2 & l ? this.getBorderStyleOrDefault(null === (s = e.borders) || void 0 === s ? void 0 : s.top, t) : void 0
        }
      };
    }
    getBorderStyleOrDefault(e, t) {
      var r, n, i;
      return e ? {
        borderColor: null !== (r = e.borderColor) && void 0 !== r ? r : ve.A.blackArr,
        borderType: null !== (n = e.borderType) && void 0 !== n ? n : "solid",
        thickness: null !== (i = e.thickness) && void 0 !== i ? i : 1
      } : xe(xe({}, Ce), {}, {
        borderColor: t
      });
    }
  }
  var Ae = new Se();
  class we extends o().Component {
    shouldComponentUpdate(e, t) {
      if (t != this.state) return !0;
      var r = this.props;
      return e.selected != r.selected || e.editor != r.editor || e.rIndex != r.rIndex || e.cIndex != r.cIndex || e.isLastColumn != r.isLastColumn || e.isLastRow != r.isLastRow || e.defaultBorderColor != r.defaultBorderColor;
    }
    render() {
      var e = this.props,
        t = e.rIndex,
        r = e.cIndex,
        n = e.editor,
        i = e.onRenderEditArea,
        s = e.defaultBorderColor,
        a = n.colSpan,
        l = n.rowSpan,
        c = n.style || {},
        d = this.getCellPadding(c),
        h = {
          padding: "".concat(d, "em"),
          backgroundColor: this.getBgColor(c),
          verticalAlign: c["v-align"]
        };
      this.fillBorderCssStyle(Ae.getBorderInfo(n.style, s), h);
      var p = t + "_" + r;
      return o().createElement("td", {
        "data-rIndex": t,
        "data-cIndex": r,
        colSpan: a,
        rowSpan: l,
        style: h,
        key: n.id
      }, i(p), o().createElement("div", {
        className: B()("sbd no-print", {
          "sbd-lr": this.props.isLastRow,
          "sbd-lc": this.props.isLastColumn
        })
      }));
    }
    fillBorderCssStyle(e, t) {
      if (e && e.borders) {
        if (e.borders.left) {
          var r = e.borders.left;
          t.borderLeftColor = ve.A.getHtmlColor(r.borderColor), t.borderLeftStyle = r.borderType, t.borderLeftWidth = r.thickness;
        }
        if (e.borders.top) {
          var n = e.borders.top;
          t.borderTopColor = ve.A.getHtmlColor(n.borderColor), t.borderTopStyle = n.borderType, t.borderTopWidth = n.thickness;
        }
        if (e.borders.right) {
          var i = e.borders.right;
          t.borderRightColor = ve.A.getHtmlColor(i.borderColor), t.borderRightStyle = i.borderType, t.borderRightWidth = i.thickness;
        }
        if (e.borders.bottom) {
          var o = e.borders.bottom;
          t.borderBottomColor = ve.A.getHtmlColor(o.borderColor), t.borderBottomStyle = o.borderType, t.borderBottomWidth = o.thickness;
        }
      }
    }
    getCellPadding(e) {
      return e && null != e.padding ? e.padding : .5;
    }
    getBgColor(e) {
      if (e && e.backgroundColor) return ve.A.getHtmlColor(e.backgroundColor);
    }
  }
  class Ee extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "cellMap", {}), (0, n.A)(this, "handleRef", e => {
        e && (e.reactInstance = this);
      }), (0, n.A)(this, "handleCellRef", (e, t) => {
        this.cellMap[e] = t;
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props,
        r;
      return !(e.rowHeight == t.rowHeight && e.rIndex == t.rIndex && e.nOfColumn == t.nOfColumn && e.isLastRow == t.isLastRow && e.defaultBorderColor == t.defaultBorderColor && !this.isElementsInRowChanged(e.elements, t.elements, e.rIndex)) || !!this.isSelectedChanged(e.selected, t.selected, e.rIndex);
    }
    isSelectedChanged(e, t, r) {
      var n = !!(e && e.key && ue.Z.isInRow(e.key, r)),
        i = !!(t && t.key && ue.Z.isInRow(t.key, r));
      return !(!n && !i) && e != t;
    }
    isElementsInRowChanged(e, t, r) {
      var n = a().keys(e).filter(e => ue.Z.isInRow(e, r)),
        i = a().keys(t).filter(e => ue.Z.isInRow(e, r));
      return n.length != i.length || a().difference(n, i).length > 0 || n.some(r => e[r] != t[r]);
    }
    render() {
      var e = this.props,
        t = e.rowHeight,
        r = e.rIndex,
        n;
      return t && (n = {
        height: t
      }), o().createElement("tr", {
        ref: this.handleRef,
        style: n
      }, this.renderRowContent(r));
    }
    renderRowContent(e) {
      for (var t = this.props, r = t.nOfColumn, n = t.elements, i = t.onRenderEditArea, s = t.defaultBorderColor, a = t.selected, l = [], c = 0; c < r; c++) {
        var d = e + "_" + c,
          h = n[d];
        h.hidden || l.push(o().createElement(we, {
          ref: this.handleCellRef.bind(this, h.id),
          isLastColumn: c == r - 1,
          isLastRow: this.props.isLastRow,
          key: h.id,
          rIndex: e,
          cIndex: c,
          defaultBorderColor: s,
          editor: h,
          selected: a && a.key == d ? a : void 0,
          onRenderEditArea: i
        }));
      }
      return l;
    }
  }
  var ke = r(92944);
  function Oe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function De(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Oe(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pe extends F.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "refMap", {}), (0, n.A)(this, "showSelectedAnyLevel", !0), (0, n.A)(this, "bulbRef", void 0), (0, n.A)(this, "handleDeleteCaption", () => {
        var e = De(De({}, this.props.data), {}, {
          elements: De({}, this.props.data.elements)
        });
        delete e.elements.caption, j.A.in(() => {
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
      }), (0, n.A)(this, "handleCaptionPrefixMouseDown", e => {
        this.props.onSelectedChanged({
          key: "caption",
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }), e.stopPropagation(), e.preventDefault();
      }), (0, n.A)(this, "handleCaptionPosChange", e => {
        var t = De(De({}, this.getTableModel()), {}, {
          capPos: e
        });
        this.props.onDataChanged(t);
      }), (0, n.A)(this, "handleCaptionInfoChange", e => {
        this.props.onDataChanged(De(De({}, this.props.data), {}, {
          cpi: e
        }));
      }), (0, n.A)(this, "getBulbRef", e => this.bulbRef = e), (0, n.A)(this, "handleRequestCellCount", () => this.getSelectedKeys().length), (0, n.A)(this, "handleOpenCellSettings", () => {
        var e = this.getSelectedKeys();
        e && this.setState({
          selectedCellsForSettings: e
        }), this.closeBulbChildren();
      }), (0, n.A)(this, "handleOpentableSettings", () => {
        var e = ue.Z.getAllValidTabularKeys(this.props.data);
        e && this.setState({
          selectedCellsForSettings: e
        }), this.closeBulbChildren();
      }), (0, n.A)(this, "handleVAlignChange", e => {
        var t = this.getSelectedKeys();
        if (!(t.length <= 0)) {
          var r = L.A.setStyleForTabular(this.props.data, t, "v-align", e);
          this.closeBulbChildren(), this.props.onDataChanged(r, {
            isOneLineChanged: !0
          });
        }
      }), (0, n.A)(this, "handleBorderSelect", e => {
        var t = this.getSelectedKeys();
        if (!(t.length <= 0)) {
          var r = ke.T.setBorderStyleForTabular(this.props.data, t, e);
          this.props.onDataChanged(r, {
            isOneLineChanged: !0,
            focusAcquired: !0
          });
        }
      }), (0, n.A)(this, "handleRequestAddCaption", () => {
        if (!this.props.data.elements.caption) {
          var e = w.A.addCaption(this.props.data);
          j.A.in(() => {
            this.props.onDataChanged(e, {
              isOneLineChanged: !0
            }), this.props.onSelectedChanged({
              key: "caption",
              selected: {
                lineIndex: 0,
                charIndex: 0
              }
            });
          }), this.closeBulbChildren();
        }
      }), (0, n.A)(this, "handleRequestTableElement", () => {
        var e = b().findDOMNode(this);
        return x.YG(e, ">matrix>table")[0];
      });
    }
    useCustomBaseLine() {
      return !1;
    }
    getClassName() {
      return B()("matrix-symbol", "table-symbol", "role-tabular");
    }
    isInlineMode() {
      return !1;
    }
    getDisplayMode() {
      return !0;
    }
    renderRow(e, t) {
      return o().createElement(Ee, {
        defaultBorderColor: this.context.fixedContextHandler.getDefaultBorderColor(),
        key: this.getKeyForRow(t),
        rIndex: t,
        isLastRow: t == e.row - 1,
        nOfColumn: e.column,
        rowHeight: e.rowHeights && e.rowHeights[t],
        elements: e.elements,
        selected: this.props.selected,
        onRenderEditArea: e => o().createElement(T.A, De(De({}, this.buildMetaDataFromName(e)), {}, {
          isTextMode: !0,
          showBorderOnSelected: !1
        }))
      });
    }
    getTableCssStyle(e) {
      if (!e.style) return {};
      var t = {};
      return e.style.left && (t = a().assign(t, {
        position: "relative",
        top: 0,
        left: e.style.left
      })), e.style.width && (t.width = e.style.width), t;
    }
    renderColumns(e) {
      return o().createElement("colgroup", null, a().range(0, e.column).map(t => {
        var r = {};
        return e.columnWidths && e.columnWidths[t] && (r.width = e.columnWidths[t]), o().createElement("col", {
          style: r,
          key: t
        });
      }));
    }
    renderSetting() {
      return null;
    }
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
    renderPlaceHolderAtEnd() {
      return o().createElement("table-resize", {
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault();
        },
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: 0,
          height: 0
        }
      });
    }
    getTableModel() {
      return this.props.data;
    }
    renderTables(e) {
      for (var t = [], r = e.row, n = 0; n < r; n++) t.push(this.renderRow(e, n));
      return t;
    }
    getTextAlignFromFirstLine(e) {
      var t = e.elements.caption.lines[0].style;
      return t && t.align || "left";
    }
    renderCaption(e) {
      if (e.elements.caption) {
        var t = this.getMtFuncs().getCaptionInfo("table");
        return o().createElement(_.q, {
          requestPickerSettings: this.props.requestPickerSettings,
          capPos: e.capPos || "below",
          allowSwichCaption: !0,
          onCaptionPosChange: this.handleCaptionPosChange,
          classNameKey: "table",
          cType: "table",
          blockId: e.id,
          captionPrefix: t.name,
          psTextStyle: t.textStyle,
          selected: this.props.selected,
          textAlignFirstLine: this.getTextAlignFromFirstLine(e),
          onCaptionPrefixMouseDown: this.handleCaptionPrefixMouseDown,
          onDeleteCaption: this.handleDeleteCaption,
          onEditCaptionPrefix: this.handleEditCaptionPrefix,
          notifyCaptionNumbering: this.context.fixedContextHandler.getMtFuncs().notifyCaptionNumbering,
          captionInfo: this.props.data.cpi,
          onCaptionInfoChange: this.handleCaptionInfoChange
        }, o().createElement(T.A, De(De({}, this.buildMetaDataFromName("caption")), {}, {
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
    isAnyCellSelected() {
      return !(!this.props.selected || !this.props.selected.key) && !!ue.Z.isKeyInTabularFormat(this.props.selected.key);
    }
    getSelectedKeys() {
      if (!this.isAnyCellSelected()) return [];
      var e = this.getMtFuncs().getJointSelected();
      return e ? ye.A.findLeafKeysJoinedSelected(e) : [];
    }
    openCellSettings() {
      this.handleOpenCellSettings();
    }
    openTableSettings() {
      this.handleOpentableSettings();
    }
    requestCellCount() {
      return this.handleRequestCellCount();
    }
    changeVAlign(e) {
      this.handleVAlignChange(e);
    }
    changeBorders(e) {
      this.handleBorderSelect(e);
    }
    addCaption() {
      this.handleRequestAddCaption();
    }
    closeBulbChildren() {
      this.bulbRef && this.bulbRef.closeChildren();
    }
    renderBulbSettings() {
      if (this.isDirectCellSelected() && !this.isSelectModeOnly()) {
        var e = this.getDzContainer();
        return o().createElement(ge.A, {
          appliedDzContainer: e,
          reversedScaleDZOrigin: "right bottom",
          icon: fe.A.tableSettings({
            width: 16,
            height: 16,
            stroke: "#5d5b5b",
            fill: "#5d5b5b",
            overflow: "visible"
          }),
          ref: this.getBulbRef,
          key: "settings",
          closeOnClickOutside: !0,
          style: {
            left: -26,
            top: -26
          }
        }, o().createElement(me.Y, {
          dzContainer: e,
          onRequestAddCaption: this.handleRequestAddCaption,
          onVAlignChange: this.handleVAlignChange,
          onBorderSelect: this.handleBorderSelect,
          onRequestCellCount: this.handleRequestCellCount,
          onOpenCellSettings: this.handleOpenCellSettings,
          onOpenTableSettings: this.handleOpentableSettings,
          style: {
            position: "absolute",
            left: -26,
            top: -26
          }
        }));
      }
    }
    isDirectCellSelected() {
      return this.isAnyCellSelected() && !this.props.selected.selected.selected;
    }
    renderCellsAdvanceSettingsDialog(e) {
      if (this.state.selectedCellsForSettings) return o().createElement(pe, {
        requestPickerSettings: this.context.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        table: e,
        selectedKeys: this.state.selectedCellsForSettings,
        requestTableElement: this.handleRequestTableElement,
        onClose: e => {
          e && this.props.onDataChanged(e, {
            isOneLineChanged: !0
          }), this.setState({
            selectedCellsForSettings: void 0
          });
        }
      });
    }
    renderCaptionAbove(e) {
      if ("above" == e.capPos) return this.renderCaption(e);
    }
    renderCaptionBelow(e) {
      if (!e.capPos || "below" == e.capPos) return this.renderCaption(e);
    }
    renderComponent() {
      var e = this.getTableModel();
      return o().createElement("matrix", {
        className: e.text.substr(1)
      }, this.renderCaptionAbove(e), o().createElement("table", {
        "data-table-id": e.id,
        style: this.getTableCssStyle(e)
      }, this.renderColumns(e), o().createElement("tbody", null, this.renderTables(e))), this.renderPlaceHolderAtEnd(), this.renderCaptionBelow(e), this.renderBulbSettings(), this.renderCellsAdvanceSettingsDialog(e));
    }
  }
  var Me = r(27271),
    Ie = r(61848);
  function Te(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Te(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Re {
    handleRowResize(e, t, r, n) {
      var i = e.lineIndex,
        o = e.lines,
        s = e.y,
        l = a().clone(r),
        c = k.T.getBCRect(t, n);
      if (l.rowHeights = l.rowHeights || [], 0 == i) {
        var d = w.A.getNextAvailableLine(o, 0),
          h = Math.max(10, d.spans[0].toPoint.y + c.top - s);
        return l.rowHeights = Ie.A.setIndex(l.rowHeights, 0, h), l;
      }
      var p = w.A.getPreviousAvailableLine(o, i),
        u = p.line,
        g = Math.max(10, s - (p.spans[0].toPoint.y + c.top));
      return l.rowHeights = Ie.A.setIndex(l.rowHeights, u, g), l;
    }
    fetchRowHeights(e, t) {
      return this.fetchRowRects(e, t).map(e => e.bottom - e.top);
    }
    fetchRowRects(e, t) {
      var r = this.getTableHtml(e),
        n;
      return x.YG(r, ">tbody>tr").map(e => k.T.getBCRect(e, t));
    }
    recalculateRowResizeOneMorePrev(e, t, r, n, i) {
      var o = Math.max(e.lineIndex - 1, 0);
      if (!(o <= 0)) {
        for (var s = n.map(e => e.bottom - e.top), a = this.fetchRowHeights(t, i), l = [], c = 0; c < o - 1; c++) s[c] != a[c] && l.push({
          index: c,
          height: s[c]
        });
        if (!(l.length <= 0)) return this.updateWithHeightUpdations(r, l);
        console.log("%c no need second updation", "color: green");
      }
    }
    isRowAutoHeight(e, t) {
      var r;
      return !this.getHtmlRow(e, t).style.height;
    }
    recalculateRowResize(e, t, r, n, i) {
      var o = Math.max(e.lineIndex - 1, 0),
        s = this.getTableHtml(t),
        a = this.fetchRowRects(t, i),
        l = a.map(e => e.bottom - e.top),
        c = n.map(e => e.bottom - e.top),
        d = this.getHtmlRow(o, s),
        h = Number.parseFloat(d.style.height);
      if (h < c[o] && l.every((e, t) => e == c[t] || t == o || this.isRowAutoHeight(t, s))) console.log("%c other row heights ok, nothing to recalculate", "color: green");else if (l.every((e, t) => e == c[t] || t == o)) console.log("%c other row heights ok, nothing to recalculate", "color: green");else {
        var p = w.A.isLastRowInMergedRow(r, o);
        console.log("%c need recalculation", "color: orange");
        var u = [];
        if (h < c[o]) {
          var g = h;
          if (p && (g = a[o].bottom - n[o].top, u.push({
            index: o,
            height: g
          })), o < r.row && c[o + 1] != l[o + 1]) {
            var m = c[o] - g;
            u.push({
              index: o + 1,
              height: c[o + 1] + m
            });
          }
        }
        for (var f = function e(t) {
            return t == o || u.some(e => e.index == t) ? "continue" : void (c[t] != l[t] && u.push({
              index: t,
              height: c[t]
            }));
          }, y = 0; y < c.length; y++) var v = f(y);
        if (!(u.length <= 0)) return this.updateWithHeightUpdations(r, u);
      }
    }
    updateWithHeightUpdations(e, t) {
      if (!t || t.length <= 0) return e;
      var r = a().clone(e.rowHeights || []);
      return t.forEach(e => r[e.index] = e.height), Le(Le({}, e), {}, {
        rowHeights: r
      });
    }
    getTableHtml(e) {
      return x.YG(e, ">matrix>table")[0];
    }
    getHtmlRow(e, t) {
      return x.YG(t, ">tbody>tr")[e];
    }
    handleColumnResize(e, t, r, n) {
      var i = e.lineIndex,
        o = e.x,
        s = e.lines,
        l = x.YG(t, ">matrix>table")[0],
        c = k.T.getBCRect(x.f$(l, "line")[0], n),
        d = k.T.getBCRect(t, n),
        h = k.T.getBCRect(l, n);
      if (0 == i) {
        var p = 10 * r.column,
          u = a().clamp(c.left + 1, o, h.right - p),
          g = u - c.left,
          m = h.right - u,
          f = L.A.addStyle(r, "left", g);
        return f = L.A.addStyle(f, "width", m), f = Me.A.recalculateColumnWidth(f, m);
      }
      if (i == r.column) {
        var y = Math.max(o, h.left - 10),
          v = (y = Math.min(y, c.right)) - h.left + 1,
          b = L.A.addStyle(r, "width", v);
        return b = Me.A.recalculateColumnWidth(b, v);
      }
      var C = a().clone(r),
        S = w.A.getNextAvailableLine(s, i),
        A = w.A.getPreviousAvailableLine(s, i),
        E = a().clamp(A.spans[0].fromPoint.x + d.left + 10, o, S.spans[0].fromPoint.x + d.left - 10);
      C.columnWidths = C.columnWidths || [];
      var O = A.line,
        D = Math.max(10, E - (A.spans[0].toPoint.x + d.left));
      C.columnWidths = Ie.A.setIndex(C.columnWidths, O, D);
      var P = S.spans[0].toPoint.x - A.spans[0].toPoint.x,
        M = 0;
      return S.line == C.column && (M = 1), C.columnWidths = Ie.A.setIndex(C.columnWidths, i, P - D - M), C;
    }
  }
  var Be = new Re();
  class Fe extends Pe {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderBorderResizeDelayRunObj", I.A.createLaterRunObject("latest", 200)), (0, n.A)(this, "resizing", void 0), (0, n.A)(this, "requestUnmountResizing", void 0), (0, n.A)(this, "rowChangedData", void 0), (0, n.A)(this, "onTableResizeTouchStart", e => {
        e.preventDefault();
      }), (0, n.A)(this, "renderBorderResizeDelayRunFunc", () => {
        var e = b().findDOMNode(this),
          t;
        x.YG(e, ">matrix>table-resize")[0].firstElementChild && this.renderBordersResizing();
      }), (0, n.A)(this, "handleResizeEnd", e => {
        this.resizing = !1, this.requestUnmountResizing && (this.requestUnmountResizing = !1, this.unrenderBordersResizing()), e.isVertical ? this.handleRowResize(e).then(() => {
          this.renderBordersResizing();
        }) : (this.handleColumnResize(e), this.renderBordersResizing());
      }), (0, n.A)(this, "handleRowResize", e => {
        var t = this.getMtFuncs().getDocZoomContainer(),
          r = b().findDOMNode(this),
          n = Be.fetchRowRects(r, t),
          i = Be.handleRowResize(e, r, this.props.data, t);
        return this.rowChangedData = i, this.forceUpdatePromise().then(() => {
          var i = Be.recalculateRowResize(e, r, this.rowChangedData, n, t);
          if (i) return this.rowChangedData = i, this.forceUpdatePromise().then(() => {
            var i = Be.recalculateRowResizeOneMorePrev(e, r, this.rowChangedData, n, t);
            if (i) return this.rowChangedData = i, this.forceUpdatePromise();
          });
        }).finally(() => {
          var e = this.rowChangedData;
          this.rowChangedData = void 0, this.requestDataChanged(e);
        });
      }), (0, n.A)(this, "handleColumnResize", e => {
        var t = this.getMtFuncs().getDocZoomContainer();
        this.requestDataChanged(Be.handleColumnResize(e, b().findDOMNode(this), this.props.data, t));
      }), (0, n.A)(this, "handleMouseEnter", () => {
        this.allowEdit() && this.renderBordersResizing();
      }), (0, n.A)(this, "handleMouseLeave", () => {
        A.A.isTestEnv() || this.unrenderBordersResizing();
      });
    }
    componentWillReceiveProps(e, t) {
      super.componentWillReceiveProps && super.componentWillReceiveProps(e, t), this.rowChangedData && (this.rowChangedData = void 0);
    }
    componentDidMount() {
      super.componentDidMount();
      var e = b().findDOMNode(this);
      if (A.A.isMobileOrTablet() || (x.KT(e, "mouseenter", this.handleMouseEnter), x.KT(e, "mouseleave", this.handleMouseLeave)), A.A.isMobileOrTablet()) {
        var t = x.YG(e, ">matrix>table-resize"),
          r = S.A.getFalsePassiveObject();
        t[0].addEventListener("touchstart", this.onTableResizeTouchStart, r);
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount();
      var e = b().findDOMNode(this),
        t;
      (A.A.isMobileOrTablet() || (x.Bo(e, "mouseenter", this.handleMouseEnter), x.Bo(e, "mouseleave", this.handleMouseLeave)), A.A.isMobileOrTablet()) && x.YG(e, ">matrix>table-resize")[0].removeEventListener("touchstart", this.onTableResizeTouchStart, !1);
      this.renderBorderResizeDelayRunObj.cancel();
    }
    afterReactRender(e, t) {
      if (super.afterReactRender(e, t), A.A.isMobileOrTablet() || A.A.isTestEnv()) if (this.isChildSelected()) {
        var r;
        if (this.getEditorInfo) if (this.getEditorInfo().selectOnly) return;
        this.renderBordersResizing();
      } else this.unrenderBordersResizing();
    }
    afterReactRenderWhenDataChanged() {
      A.A.isMobileOrTablet() || this.requestRenderBorderResizing();
    }
    requestRenderBorderResizing() {
      this.renderBorderResizeDelayRunObj.later(this.renderBorderResizeDelayRunFunc);
    }
    getTableModel() {
      return this.rowChangedData || this.props.data;
    }
    forceUpdatePromise() {
      return new Promise(e => this.forceUpdate(e));
    }
    requestDataChanged(e) {
      this.props.onDataChanged(e, C.A.getBuilder().withPreventScroll().build());
    }
    renderBordersResizing() {
      if (this.requestUnmountResizing) this.requestUnmountResizing = !1;else {
        var e = b().findDOMNode(this),
          t = x.YG(e, ">matrix>table")[0],
          r = x.YG(e, ">matrix>table-resize"),
          n = this.getMtFuncs().getDocZoomContainer(),
          i = w.A.buildResizeRowLines(this.props.data, this.refMap, e, t, n),
          s = w.A.buildResizeColumnLines(this.props.data, this.refMap, e, t, n);
        b().render(o().createElement(M, {
          getDZContainer: this.getDzContainer,
          onResizeStart: () => this.resizing = !0,
          onResizeEnd: e => this.handleResizeEnd(e),
          vLines: i,
          hLines: s
        }), r[0]);
      }
    }
    unrenderBordersResizing() {
      if (this.resizing) this.requestUnmountResizing = !0;else {
        var e = b().findDOMNode(this),
          t = x.YG(e, ">matrix>table-resize");
        b().unmountComponentAtNode(t[0]), console.log("mouse leave");
      }
    }
  }
  var je = r(9828);
  function _e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ne(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _e(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _e(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ze extends y.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return Fe;
    }
    getModel(e) {
      for (var t = (e = e || {
          names: [],
          row: 3,
          column: 3
        }).row || 3, r = e.column || 3, n = {}, i = 0; i < t; i++) for (var o = 0; o < r; o++) {
        var s;
        n[ue.Z.getKeyFromRowCol(i, o)] = "editor";
      }
      var a = this.getModelFromStructure(n, "\\table");
      return a.row = t, a.column = r, a;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\table"],
        height: 30,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("svg", {
          style: {
            width: 19,
            height: 15,
            transform: "translate(2px,1px)",
            stroke: "var(--ui-text-muted, gray)"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(2px,2px)"
          },
          d: "M-0.5,0 L12.5,0 M-0.5,6 L12.5,6 M-0.5,12 L12.5,12 M0,0 L0,12 M6,0 L6,12 M12,0 L12,12",
          fill: "none"
        }))
      });
    }
    getLatexName() {
      return "\\table";
    }
    toModel(e, t) {
      var r;
      return (0, l.tC)(this.getLatexName(), t);
    }
    isInMathExpression() {
      return !1;
    }
    isNestedTable(e) {
      var t;
      return x.f$(x.aY(e), "table").length > 0;
    }
    toLatex(e, t, r) {
      var n = e.id;
      t = Ne(Ne({}, t), {}, {
        inMathExpression: !1,
        inTable: !0
      });
      var i = x.Yt("table[data-table-id='".concat(n, "']"));
      if (i.length <= 0) return "";
      var o = x.f$(i, "compositeblock")[0].reactInstance,
        s = o.getDzContainer(),
        a = o.getModel(),
        l = this.getCellsRectInfo(i, s),
        c = je.A.findSizeSpans(a.column, l, "row"),
        d = this.splitToColumnWidths(c);
      return f.toLatex(a, Ne(Ne({}, t), {}, {
        isNestedTable: this.isNestedTable(i),
        tableWidth: x.vc(i, "width"),
        columnWidths: d
      }), r);
    }
    splitToColumnWidths(e) {
      var t = [];
      return e.forEach(e => {
        if (e.fromIndex != e.toIndex) {
          var r = e.toIndex - e.fromIndex + 1,
            n = (e.toPosition - e.fromPosition) / r;
          a().times(r, () => {
            t.push(n);
          });
        } else t.push(e.toPosition - e.fromPosition);
      }), t;
    }
    getCellsRectInfo(e, t) {
      return x.YG(e, ">tbody>tr>td").map(r => {
        var n = k.T.getBCRectToElement(r, e[0], t);
        return {
          colSpan: Number.parseInt(x.vK(r, "colSpan") || "1", 10),
          rowSpan: Number.parseInt(x.vK(r, "rowSpan") || "1", 10),
          rIndex: Number.parseInt(x.vK(r, "data-rIndex"), 10),
          cIndex: Number.parseInt(x.vK(r, "data-cIndex"), 10),
          rect: {
            left: n.left,
            top: n.top,
            bottom: n.bottom,
            right: n.right
          }
        };
      });
    }
  }
  const He = new ze();
};
