/* module 47316 — 24430 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Xn: () => se,
    Ix: () => ee,
    HA: () => te,
    jb: () => ne,
    vv: () => oe,
    C7: () => ie,
    I5: () => re
  });
  var n = r(6720),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(6855),
    l = r(49812),
    c = r(67882),
    d = r(39791),
    h = r(32485),
    p = r.n(h),
    u = r(2543),
    g = r.n(u);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends a.A {
    constructor(e) {
      super(e);
    }
    getClassName() {
      return p()("matrix-symbol", "case-symbol", "role-tabular");
    }
    renderOpenBracket() {
      return this.renderBracket("open-brace");
    }
    renderCloseBracket() {
      return null;
    }
    renderRowContent(e) {
      for (var t = [], r = this.props.data, n = r.column, i = {}, o = r.row == e + 1, a = 0; a < n; a++) {
        var h = e + "_" + a,
          u = this.isChildSelected() ? "selected" : "";
        0 != a && t.push(s().createElement("td", {
          className: "non-select",
          key: a + "_middle",
          style: i
        }));
        var g = l.A.isSingleLineEditor(r.elements[h]) ? c.A : d.A;
        t.push(s().createElement("td", {
          key: r.elements[h].id,
          className: u
        }, s().createElement(g, f(f({}, this.buildMetaDataFromName(h)), {}, {
          fontSizeRatio: 1,
          className: "editor-cell",
          optimizeForOneLine: !0,
          displayMode: !0,
          showBorderOnSelected: !1
        })), s().createElement("div", {
          className: p()("sbd no-print sbd-lc", {
            "sbd-lr": o
          })
        })));
      }
      return t;
    }
  }
  class v extends n.eV {
    getViewComponent() {
      return y;
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.text = "\\cases", delete t.bracket, t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\cases"],
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return s().createElement("div", {
            className: "case-icon"
          }, s().createElement("div", null, "{"), s().createElement("div", {
            className: "display-flex"
          }, s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          })), s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          }))));
        }
      });
    }
    getLatexName() {
      return "\\cases";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    toLatex(e, t, r) {
      return this.innerToLatex(e, t, r, "cases");
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t);
      return r.columnalign = g().times(e.column, () => "left").join(" "), {
        type: "mrow",
        elements: [{
          type: "mo",
          value: "{",
          fence: !0
        }, r, {
          type: "mo",
          value: "",
          fence: !0,
          stretchy: !0,
          symmetric: !0
        }]
      };
    }
  }
  class b extends y {
    getClassName() {
      return p()("matrix-symbol", "square-case-symbol", "role-tabular");
    }
    renderOpenBracket() {
      return this.renderBracket("open-bracket");
    }
  }
  class x extends n.eV {
    getViewComponent() {
      return b;
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.text = "\\sqcases", delete t.bracket, t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\sqcases"],
        filterTag: "square cases",
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return s().createElement("div", {
            className: "case-icon"
          }, s().createElement("div", null, "["), s().createElement("div", {
            className: "display-flex"
          }, s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          })), s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          }))));
        }
      });
    }
    getLatexName() {
      return "\\sqcases";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    toLatex(e, t, r) {
      var i = (0, n.m_)({
        block: e,
        options: t,
        latexConverter: r,
        matrixName: "array",
        arrayOption: "{l l}",
        forceHLine: !1,
        inMathExpression: this.isInMathExpression(),
        columnJoinText: this.getColumnJoinText()
      });
      return "\\left[ ".concat(i, " \\right.");
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t);
      return r.columnalign = g().times(e.column, () => "left").join(" "), {
        type: "mrow",
        elements: [{
          type: "mo",
          value: "[",
          fence: !0
        }, r, {
          type: "mo",
          value: "",
          fence: !0,
          stretchy: !0,
          symmetric: !0
        }]
      };
    }
  }
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A extends a.A {
    constructor(e) {
      super(e);
    }
    getClassName() {
      return p()("matrix-symbol", "dr-case-symbol", "role-tabular");
    }
    renderOpenBracket() {}
    renderCloseBracket() {
      return this.renderBracket("close-brace");
    }
    renderRowContent(e) {
      for (var t = [], r = this.props.data.column, n = 0; n < r; n++) {
        var i = e + "_" + n,
          o = this.isChildSelected() ? "selected" : "",
          a = l.A.isSingleLineEditor(this.props.data.elements[i]) ? c.A : d.A;
        t.push(s().createElement("td", {
          key: this.props.data.elements[i].id,
          className: o
        }, s().createElement(a, S(S({}, this.buildMetaDataFromName(i)), {}, {
          fontSizeRatio: 1,
          className: "editor-cell",
          optimizeForOneLine: !0,
          displayMode: !0,
          showBorderOnSelected: !1
        }))));
      }
      return t;
    }
  }
  class w extends n.eV {
    getViewComponent() {
      return A;
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.text = this.getLatexName(), delete t.bracket, t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatexName()],
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return s().createElement("div", {
            className: "case-icon"
          }, s().createElement("div", {
            className: "display-flex"
          }, s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          })), s().createElement("div", null, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          }))), s().createElement("div", null, "}"));
        }
      });
    }
    getLatexName() {
      return "\\drcases";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    toLatex(e, t, r) {
      return this.innerToLatex(e, t, r, "drcases");
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t);
      return r.columnalign = g().times(e.column, () => "left").join(" "), {
        type: "mrow",
        elements: [{
          type: "mo",
          value: "",
          fence: !0,
          stretchy: !0,
          symmetric: !0
        }, r, {
          type: "mo",
          value: "}",
          fence: !0
        }]
      };
    }
  }
  const E = new w();
  var k = r(27271),
    O = r(13067),
    D = r(61848),
    P = r(48440),
    M = r(4993),
    I = r(37566),
    T = r(516),
    L = r(36223),
    R = r(60693);
  function B(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function F(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? B(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function j(e, t) {
    return t.indexOf(e) >= 0;
  }
  function _(e, t, r) {
    j(e, t) ? r(g().filter(t, t => t != e)) : r(t.concat([e]));
  }
  function N(e) {
    var t = e.matrixRef,
      r = e.vLines,
      n = e.hLines,
      i = e.onVLineChanged,
      o = e.onHLineChanged,
      a = e.getDzContainer,
      l = I.YG(t, ">table>tbody>tr"),
      c = R.T.getBCRect(t, a()),
      d = I.YG(l[0], ">td"),
      h,
      p = T.A.getComputedFontSize(t) / 3,
      u = a();
    return s().createElement("border-design", F({}, L.A.getStopPropagationForFocusClickMouseDown()), g().flatMap(l, (e, t) => {
      var r = R.T.getBCRect(e, u),
        i = {
          top: r.top - c.top - p / 2,
          left: r.left - c.left,
          width: r.right - r.left,
          height: p
        },
        a = [s().createElement("border-line", {
          class: j(t, n) ? "enabled" : "",
          key: t,
          style: i,
          onClick: () => _(t, n, o)
        }, s().createElement("horizontal-line", null))];
      if (t == l.length - 1) {
        var d = g().clone(i);
        d.top = r.bottom - c.top - p / 2, a.push(s().createElement("border-line", {
          class: j(t + 1, n) ? "enabled" : "",
          key: t + 1,
          style: d,
          onClick: () => _(t + 1, n, o)
        }, s().createElement("horizontal-line", null)));
      }
      return a;
    }), g().flatMap(d, (e, t) => {
      var n = R.T.getBCRect(e, u),
        o = {
          top: n.top - c.top,
          left: n.left - c.left - p / 2,
          width: p,
          height: c.bottom - c.top
        },
        a = [s().createElement("border-line", {
          class: j(t, r) ? "enabled" : "",
          key: t,
          style: o,
          onClick: () => _(t, r, i)
        }, s().createElement("vertical-line", null))];
      if (t == d.length - 1) {
        var l = g().clone(o);
        l.left = n.right - c.left - p / 2, a.push(s().createElement("border-line", {
          class: j(t + 1, r) ? "enabled" : "",
          key: t + 1,
          style: l,
          onClick: () => _(t + 1, r, i)
        }, s().createElement("vertical-line", null)));
      }
      return a;
    }));
  }
  function z(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? z(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  r.dn(N);
  class W extends O.A {
    constructor() {
      super(...arguments), (0, i.A)(this, "changeCurrentColumnAlign", e => {
        var t = D.A.set(this.props.data.aligns || {}, this.currentSelectedColumn(), e);
        this.props.onDataChanged(D.A.set(this.props.data, "aligns", t));
      }), (0, i.A)(this, "onLayoutChange", e => {
        this.props.onDataChanged(D.A.set(this.props.data, "text", e));
      });
    }
    getCurrentAlign(e) {
      return void 0 === e && (e = this.currentSelectedColumn()), (this.props.data.aligns || {})[e] || "center";
    }
    isHLineEnabled(e) {
      return (this.props.data.hLines || []).indexOf(e) >= 0;
    }
    isVLineEnabled(e) {
      return (this.props.data.vLines || []).indexOf(e) >= 0;
    }
    renderColumn(e, t) {
      var r = e + "_" + t,
        n = "",
        i = "";
      n += this.isChildSelected() ? " selected" : "", n += this.isVLineEnabled(t) ? " vline" : "", t == this.props.data.column - 1 && this.isVLineEnabled(t + 1) && (n += " last-vline");
      var i = "matrix-item editor-cell " + this.getCurrentAlign(t);
      return s().createElement("td", {
        key: t,
        className: n
      }, s().createElement(d.A, H(H({}, this.buildMetaDataFromName(r)), {}, {
        className: i,
        showBorderOnSelected: !1
      })), this.renderSelectedBorderBox(e, t));
    }
    renderRow(e) {
      var t = this.isChildSelected() ? " selected" : "";
      return t += this.isHLineEnabled(e) ? " hline" : "", e == this.props.data.row - 1 && this.isHLineEnabled(e + 1) && (t += " last-hline"), s().createElement("tr", {
        key: e,
        className: t
      }, this.renderRowContent(e));
    }
    renderPlaceHolderAtEnd() {
      return this.renderBorderDesign();
    }
    renderBorderDesign() {
      if (this.state.showBorderDesign && this.isArray()) return s().createElement(N, {
        getDzContainer: this.getDzContainer,
        matrixRef: this.matrix,
        vLines: this.props.data.vLines || [],
        hLines: this.props.data.hLines || [],
        onVLineChanged: e => this.props.onDataChanged(D.A.set(this.props.data, "vLines", e)),
        onHLineChanged: e => this.props.onDataChanged(D.A.set(this.props.data, "hLines", e))
      });
    }
    renderSetting() {
      if (!this.isSelectModeOnly()) {
        var e = this.props.data;
        return !this.isChildSelected() || this.isTabularDescendantSelected() || this.state.showBorderDesign ? void 0 : s().createElement(M.A, {
          getDzContainer: this.getDzContainer,
          disableLayoutType: !!this.disableLayoutType,
          onLayoutChange: this.onLayoutChange,
          onRowChange: this.onRowChange,
          onColumnChange: this.onColumnChange,
          text: e.text,
          row: this.state.row,
          column: this.state.column,
          colAlign: this.getCurrentAlign(),
          onShowBorderDesignChange: e => this.setState({
            showBorderDesign: e
          }),
          changeCurrentColumnAlign: this.changeCurrentColumnAlign
        });
      }
    }
  }
  class V extends P.A {
    getViewComponent() {
      return W;
    }
    getLatexName() {
      return "\\array";
    }
    getModel(e) {
      var t = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor",
        "1_0": "editor",
        "1_1": "editor"
      }, "\\matrix");
      return t.row = 2, t.column = 2, t.text = this.getLatexName(), t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\array"],
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return s().createElement("div", {
            className: "array-icon"
          }, s().createElement("div", {
            className: "display-flex"
          }, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          })), s().createElement("div", {
            className: "display-flex"
          }, s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          }), s().createElement("div", {
            className: e
          })));
        }
      });
    }
    toModel(e, t, r) {
      var i = (0, n.tC)(this.getLatexName(), t),
        o = this.parseAlignAndVLines(r),
        s = o.aligns,
        a = o.vLines,
        l = o.column,
        c = Math.max(1, t.length);
      return (i = k.A.adjustModelByRowCollumn(i, c, l)).aligns = s, i.vLines = a, i.row = c, i.column = Math.max(1, l), i.hLines = this.parseHLines(t), i;
    }
    parseHLines(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r];
        n.firstHLine && t.push(r), n.lastHLine && t.push(r + 1);
      }
      return t;
    }
    parseAlignAndVLines(e) {
      for (var t = g().filter(e.split(""), e => !!g().trim(e)), r = [], n = [], i = 0; i < t.length; i++) {
        var o = t[i];
        "|" == o ? r.push(n.length) : n.push(this.getAlignFromChar(o));
      }
      var s = n.length,
        a;
      return {
        aligns: g().assign({}, n),
        vLines: r,
        column: s
      };
    }
    getAlignFromChar(e) {
      switch (e) {
        case "l":
          return "left";
        case "r":
          return "right";
        default:
          return "center";
      }
    }
    toLatex(e, t, r) {
      var i = q(e);
      return (0, n.m_)({
        block: e,
        options: t,
        latexConverter: r,
        arrayOption: i,
        matrixName: "array",
        columnJoinText: " & ",
        forceHLine: !1,
        inMathExpression: !0
      });
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t),
        i = g().times(e.column, () => "center");
      g().keys(e.aligns).forEach(t => {
        var r = Number.parseInt(t, 10);
        r < e.column && (i[r] = e.aligns[r]);
      }), r.columnalign = i.join(" ");
      var o = this.getBorderInfo(e),
        s = this.buildLinesStr(o.rowlines);
      s && (r.rowlines = s);
      var a = this.buildLinesStr(o.columnlines);
      return a && (r.columnlines = a), o.borderLeft || o.borderTop || o.borderRight || o.borderBottom ? {
        type: "menclose",
        notation: [o.borderLeft && "left", o.borderTop && "top", o.borderRight && "right", o.borderBottom && "bottom"].filter(e => e).join(" "),
        element: r
      } : r;
    }
    buildLinesStr(e) {
      var t = g().max(e),
        r = g().times(t, () => "none");
      return e.forEach(e => r[e] = "solid"), r.join(" ");
    }
    getBorderInfo(e) {
      var t = e.vLines || [],
        r = e.hLines || [],
        n;
      return {
        borderLeft: t.some(e => 0 == e),
        borderRight: t.some(t => t == e.column),
        borderTop: r.some(e => 0 == e),
        borderBottom: r.some(t => t == e.row),
        rowlines: r.map(e => e - 1).filter(e => e >= 0),
        columnlines: t.map(e => e - 1).filter(e => e >= 0)
      };
    }
  }
  function U(e) {
    switch (e) {
      case "left":
        return "l";
      case "right":
        return "r";
      default:
        return "c";
    }
  }
  function q(e, t) {
    for (var r = "", n = e.vLines || [], i = e.aligns || {}, o = 0; o < e.column; o++) r += n.indexOf(o) >= 0 || t ? "|" : " ", r += U(i[o]);
    return r = "{" + (r += n.indexOf(o) >= 0 || t ? "|" : " ") + "}";
  }
  class G extends s().Component {
    render() {
      var e = {
          margin: "1px auto",
          border: "1px solid gray",
          width: "14px",
          height: "0px"
        },
        t = {
          margin: "1px auto",
          border: "1px solid gray",
          width: "10px",
          height: "0px"
        },
        r = {
          margin: "1px auto",
          border: "1px solid gray",
          width: "6px",
          height: "0px"
        };
      return s().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          border: "1px solid gray"
        }
      }, s().createElement("div", {
        style: e
      }), s().createElement("div", {
        style: t
      }), s().createElement("div", {
        style: r
      }));
    }
  }
  class K extends a.A {
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
  }
  class Z extends n.eV {
    getViewComponent() {
      return K;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor",
        "1_0": "editor",
        "1_1": "editor",
        "2_0": "editor",
        "2_1": "editor"
      }, "\\gathered");
      return e.row = 3, e.column = 2, e;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\gathered"],
        renderSymbol: () => s().createElement(G, null)
      });
    }
    getLatexName() {
      return "\\gathered";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    getColumnJoinText() {
      return " & & ";
    }
    toLatex(e, t, r) {
      return 1 == e.column ? this.innerToLatex(e, t, r, "gathered") : " " + this.innerToLatex(e, t, r, "aligned");
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t);
      return r.width = void 0, r;
    }
  }
  var Y = r(45148),
    Q = r(90437),
    J = r(70224);
  class X extends a.A {
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
  }
  class $ extends n.eV {
    getViewComponent() {
      return X;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor"
      }, "\\aligned");
      return e.elements["0_1"] = J.A.createOneTextEditor("="), e.row = 1, e.column = 2, e;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\aligned"],
        height: 30,
        renderSymbol: () => s().createElement(Y.A, null)
      });
    }
    getLatexName() {
      return "\\aligned";
    }
    toModel(e, t, r) {
      var n = super.toModel(e, t);
      return r && (n = this.realignColumnsForEqnArray(n)), n;
    }
    realignColumnsForEqnArray(e) {
      for (var t = 0, r = {}, n = 0; n < e.column; n++) {
        for (var i = (n + 1) % 3 == 0, o = 0; o < e.row; o++) {
          var s = Q.Z.getKeyFromRowCol(o, n),
            a = Q.Z.getKeyFromRowCol(o, t);
          if (i) {
            var a = Q.Z.getKeyFromRowCol(o, t - 1),
              l = g().last(e.elements[a].lines);
            l.blocks = l.blocks.concat(e.elements[s].lines[0].blocks);
          } else r[a] = e.elements[s];
        }
        i || t++;
      }
      return e.elements = r, e.column = t, e;
    }
    toLatex(e, t, r) {
      return this.innerToLatex(e, t, r, "aligned");
    }
    toMathml(e, t) {
      var r = (0, n.G4)(e, t);
      return r.width = void 0, r.columnalign = g().times(e.column, e => e % 2 == 0 ? "right" : "left").join(" "), r.columnspacing = g().times(e.column, e => e % 2 == 0 ? "0em" : "2em").join(" "), r;
    }
  }
  var ee = new V(),
    te = new v(),
    re = new x(),
    ne = new w(),
    ie = new n.eV(),
    oe = new Z(),
    se = new $();
};
