/* module 64027 — 89131 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    LongDivision: () => rt,
    default: () => it
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(40961),
    c = r.n(l),
    d = r(39791),
    h = r(37566),
    p = r(23237),
    u = r(20243),
    g = r(3502),
    m = r(78183);
  class f {
    multicolumn(e, t, r) {
      return {
        type: "inline-environment",
        name: "multicolumn",
        options: [{
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: e.toString()
          }
        }, {
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: t
          }
        }],
        element: r
      };
    }
    raw(e) {
      return {
        type: "raw-element",
        rawText: e
      };
    }
    tabular() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "tabular",
        rows: t
      };
    }
    tabularRow() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "tabular-row",
        cells: t
      };
    }
    array(e, t) {
      return {
        type: "environment",
        name: "array",
        options: [{
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: e
          }
        }],
        element: t
      };
    }
    kern(e) {
      return {
        type: "raw-element",
        rawText: "\\kern".concat(e)
      };
    }
    lines() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "group-by-lines",
        lines: t
      };
    }
    group() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "group",
        elements: t
      };
    }
    spaceGroup() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "group",
        elements: t,
        delimiter: " "
      };
    }
    empty() {
      return {
        type: "empty"
      };
    }
  }
  const y = new f();
  var v = r(97372),
    b = r(2543),
    x = r.n(b),
    C = r(49812);
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w {
    countStartWhiteSpace(e) {
      if (e.lines.length > 1) return 0;
      var t = e.lines[0].blocks[0];
      return t && v.A.isTextBlock(t) ? x().takeWhile(t.text, e => " " == e).length : 0;
    }
    removeSpaceFirstBlock(e, t) {
      var r = e.lines[0].blocks[0],
        n = A(A({}, r), {}, {
          text: r.text.substr(t)
        });
      return C.A.replaceBlockInEditor(e, 0, n);
    }
  }
  const E = new w();
  var k = r(97994),
    O = r(22012);
  class D {
    buildRemainders(e, t, r, n) {
      var i = g.A.getRemaindersSortedKeys(e),
        o = 0,
        s;
      return {
        type: "environment",
        name: "array",
        options: [{
          type: "environment-option",
          bracketType: "square",
          element: {
            type: "raw-element",
            rawText: "t"
          }
        }, {
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: "l"
          }
        }],
        element: {
          type: "tabular",
          rows: i.map(i => {
            return i == n ? null : O.t.parseRemainderIndex(i) % 2 == 0 ? this.buildForUnderline(e.elements[i], o, t, r) : (o = E.countStartWhiteSpace(e.elements[i]), this.buildEditorWithWhitespacePrefix(e.elements[i], t, r));
            var s;
          }).filter(e => e)
        }
      };
    }
    buildEditorWithWhitespacePrefix(e, t, r) {
      var n = E.countStartWhiteSpace(e);
      return n > 0 ? y.spaceGroup(y.raw(this.getWhitespaceKern(n)), y.raw(r.toLatexFromEditor(E.removeSpaceFirstBlock(e, n), t))) : {
        type: "raw-element",
        rawText: r.toLatexFromEditor(e, t)
      };
    }
    getWhitespaceKern(e) {
      return "\\kern+".concat(k.A.round2(e / 3.8), "em");
    }
    buildForUnderline(e, t, r, n) {
      var i = Math.min(E.countStartWhiteSpace(e), t);
      if (i > 0) {
        var o = this.getWhitespaceKern(i),
          s = E.removeSpaceFirstBlock(e, i);
        return {
          type: "group",
          elements: [{
            type: "raw-element",
            rawText: o
          }, {
            type: "inline-environment",
            name: "underline",
            element: this.buildEditorWithWhitespacePrefix(s, r, n)
          }]
        };
      }
      return {
        type: "inline-environment",
        name: "underline",
        element: this.buildEditorWithWhitespacePrefix(e, r, n)
      };
    }
  }
  const P = new D();
  class M {
    buildRemainders(e, t, r) {
      var n = g.A.getRemaindersSortedKeys(e),
        i = 0,
        o,
        s;
      return {
        type: "mtable",
        columnalign: "left",
        columnspacing: "0em",
        framespacing: "0em 0em",
        rows: n.map(n => {
          return n == r ? null : O.t.parseRemainderIndex(n) % 2 == 0 ? this.buildForUnderline(e.elements[n], i, t) : (i = E.countStartWhiteSpace(e.elements[n]), this.buildEditorWithWhitespacePrefix(e.elements[n], t));
          var o;
        }).filter(e => e).map(e => {
          var t;
          return {
            type: "mtr",
            cells: [{
              type: "mtd",
              element: e
            }]
          };
        })
      };
    }
    buildEditorWithWhitespacePrefix(e, t) {
      var r = E.countStartWhiteSpace(e);
      return r > 0 ? {
        type: "mrow",
        elements: [this.getWhitespaceKern(r), t.generateEditor(E.removeSpaceFirstBlock(e, r))]
      } : t.generateEditor(e);
    }
    getWhitespaceKern(e) {
      return {
        type: "mspace",
        width: "".concat(k.A.round2(e / 3.8), "em")
      };
    }
    buildForUnderline(e, t, r) {
      var n = Math.min(E.countStartWhiteSpace(e), t);
      if (n > 0) {
        var i = this.getWhitespaceKern(n),
          o = E.removeSpaceFirstBlock(e, n);
        return {
          type: "mrow",
          elements: [i, {
            type: "munder",
            base: this.buildEditorWithWhitespacePrefix(o, r),
            accent: !0,
            underscript: {
              type: "mo",
              value: "_"
            }
          }]
        };
      }
      return {
        type: "munder",
        base: this.buildEditorWithWhitespacePrefix(e, r),
        accent: !0,
        underscript: {
          type: "mo",
          value: "_"
        }
      };
    }
  }
  const I = new M();
  function T(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? T(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class R {
    table(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
      return L(L({
        type: "mtable"
      }, e), {}, {
        rows: r
      });
    }
    tableRow() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "mtr",
        cells: t.map(e => {
          var t;
          return {
            type: "mtd",
            element: e
          };
        })
      };
    }
    underline(e) {
      return {
        type: "munder",
        base: e,
        accent: !0,
        underscript: {
          type: "mo",
          value: "_"
        }
      };
    }
    overline(e) {
      return {
        type: "mover",
        base: e,
        accent: !0,
        overscript: {
          type: "mo",
          value: "¯"
        }
      };
    }
    mrow() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        type: "mrow",
        elements: t
      };
    }
    text(e) {
      return {
        type: "mtext",
        value: e
      };
    }
    mo(e) {
      return {
        type: "mo",
        value: e
      };
    }
    menclose(e, t) {
      return {
        type: "menclose",
        notation: e,
        element: t
      };
    }
  }
  const B = new R();
  var F = r(60693);
  function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? j(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class N {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement(d.A, _(_({
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r,
        style: {
          paddingRight: 5
        }
      })), o().createElement("div", {
        style: {
          paddingLeft: 2
        }
      }, o().createElement(d.A, _(_({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        style: {
          float: "left"
        },
        showBorder: r
      })), o().createElement("div", {
        style: {
          clear: "both"
        }
      }), o().createElement(d.A, _(_({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), g.A.renderRestEditors(e, r)), t);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>div>.role-quotient-editor"),
        i = h.YG(e, ">div>.role-divisor-editor"),
        s = h.YG(e, ">div>div>.role-divident-editor"),
        a = h.YG(e, ">div>.role-long-division-lines"),
        l = -5,
        d = F.T.getBCRect(e, r),
        m = F.T.getBCRectToRect(n[0], d),
        f = F.T.getBCRectToRect(i[0], d),
        y = F.T.getBCRectToRect(s[0], d),
        v = k.A.round2(m.left + l - 1),
        b = k.A.round2(m.right),
        x = k.A.round2(m.bottom),
        C = "M".concat(v, ",").concat(x, " L").concat(b, ",").concat(x),
        S = new u.Z().translate(f.right + l, Math.min(f.top - 1, y.top - 1)).toSVG(),
        A = g.A.drawOtherLines(d, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: C,
        fill: "none"
      }), o().createElement("g", {
        transform: S
      }, (0, p.d)(Math.max(F.T.heightOf(f) + 1, F.T.heightOf(y) + 1), 13)), o().createElement("path", {
        d: A,
        fill: "none"
      })), a[0]);
    }
    toLatex(e, t, r) {
      var n = {
        type: "environment",
        name: "array",
        options: [{
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: "ll"
          }
        }],
        element: {
          type: "tabular",
          rows: [{
            type: "tabular-row",
            cells: [{
              type: "empty"
            }, {
              type: "raw-element",
              rawText: r.toLatexFromEditor(e.elements.quotient, t)
            }]
          }, {
            type: "group-by-lines",
            lines: [{
              type: "raw-element",
              rawText: "\\cline{2-2}"
            }, {
              type: "tabular-row",
              cells: [{
                type: "raw-element",
                rawText: "".concat(r.toLatexFromEditor(e.elements.divisor, t), " )\\kern-0.7em")
              }, {
                type: "raw-element",
                rawText: r.toLatexFromEditor(e.elements.divident, t)
              }]
            }]
          }, {
            type: "tabular-row",
            cells: [{
              type: "empty"
            }, {
              type: "group",
              elements: [{
                type: "raw-element",
                rawText: "\\kern-0.4em"
              }, P.buildRemainders(e, t, r)]
            }]
          }]
        }
      };
      return m.A.fromEnvironment(n);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left",
        columnspacing: "0em 0em"
      }, B.tableRow(t.getEmptyElement(), B.underline(t.generateEditor(e.elements.quotient))), B.tableRow(B.mrow(t.generateEditor(e.elements.divisor), B.text(")")), t.generateEditor(e.elements.divident)), B.tableRow(t.getEmptyElement(), I.buildRemainders(e, t)));
    }
  }
  const z = new N();
  function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function W(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class V {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement("div", {
        style: {
          paddingRight: 4
        }
      }, o().createElement(d.A, W(W({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), g.A.renderRestEditors(e, r)), o().createElement("div", {
        style: {
          paddingLeft: 6
        }
      }, o().createElement(d.A, W(W({
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r
      })), o().createElement(d.A, W(W({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: r
      }))), t);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>div>.role-divisor-editor"),
        i = h.YG(e, ">div>.role-long-division-lines"),
        s = F.T.getBCRect(e, r),
        a = F.T.getBCRectToRect(n[0], s),
        l = k.A.round2(a.left - 6),
        d = 0,
        p = k.A.round2(s.bottom - s.top),
        u = "M".concat(l, ",").concat(0, " L").concat(l, ",").concat(p, " M").concat(l, ",").concat(k.A.round2(a.bottom), " L").concat(k.A.round2(a.right), ",").concat(k.A.round2(a.bottom)),
        m = g.A.drawOtherLines(s, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: u,
        fill: "none"
      }), o().createElement("path", {
        d: m,
        fill: "none"
      })), i[0]);
    }
    toLatex(e, t, r) {
      var n = y.array("l|l", y.tabular(y.tabularRow(y.raw(r.toLatexFromEditor(e.elements.divident, t)), y.raw(r.toLatexFromEditor(e.elements.divisor, t))), y.lines(y.raw("\\cline{2-2}"), y.tabularRow(y.spaceGroup(y.kern("-0.4em"), P.buildRemainders(e, t, r), y.kern("-0.4em")), y.raw(r.toLatexFromEditor(e.elements.quotient, t))))));
      return m.A.fromElement(n);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left",
        columnlines: "solid none"
      }, B.tableRow(t.generateEditor(e.elements.divident), t.generateEditor(e.elements.divisor)), B.tableRow(I.buildRemainders(e, t), B.overline(t.generateEditor(e.elements.quotient))));
    }
  }
  const U = new V();
  function q(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class K {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        style: {
          paddingRight: 4
        }
      }, o().createElement(d.A, G(G({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), o().createElement(d.A, G(G({
        key: "r_0",
        className: "role-remainder-editor"
      }, e.buildMetaDataFromName("r_0")), {}, {
        showBorder: r
      }))), o().createElement("div", {
        className: "role-right-container",
        style: {
          paddingLeft: 6
        }
      }, o().createElement(d.A, G(G({
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r
      })), o().createElement(d.A, G(G({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: r
      })))), g.A.renderRestEditors(e, r, "r_0"), t);
    }
    handleDrawingLines(e, t, r, n) {
      var i = h.YG(e, ">div>div>div.role-right-container"),
        s = h.YG(e, ">div>div>div>.role-divisor-editor"),
        a = h.YG(e, ">div>.role-long-division-lines"),
        l = F.T.getBCRect(e, n),
        d = F.T.getBCRectToRect(s[0], l),
        p = F.T.getBCRectToRect(i[0], l),
        u = k.A.round2(d.left - 6),
        m = 0,
        f = k.A.round2(r ? F.T.heightOf(d) : F.T.heightOf(p)),
        y = "M".concat(u, ",").concat(0, " L").concat(u, ",").concat(f, " M").concat(u, ",").concat(k.A.round2(d.bottom), " L").concat(k.A.round2(d.right), ",").concat(k.A.round2(d.bottom)),
        v = g.A.drawOtherLines(l, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: y,
        fill: "none"
      }), o().createElement("path", {
        d: v,
        fill: "none"
      })), a[0]);
    }
    toLatex(e, t, r, n) {
      var i = {
        type: "tabular-row",
        cells: [P.buildForUnderline(e.elements.r_0, 0, t, r), {
          type: "raw-element",
          rawText: r.toLatexFromEditor(e.elements.quotient, t)
        }]
      };
      n && (i = {
        type: "tabular-row",
        cells: [y.multicolumn(1, "l", P.buildForUnderline(e.elements.r_0, 0, t, r)), {
          type: "raw-element",
          rawText: r.toLatexFromEditor(e.elements.quotient, t)
        }]
      });
      var o = {
        type: "environment",
        name: "array",
        options: [{
          type: "environment-option",
          bracketType: "brace",
          element: {
            type: "raw-element",
            rawText: "l|l"
          }
        }],
        element: {
          type: "tabular",
          rows: [{
            type: "tabular-row",
            cells: [{
              type: "raw-element",
              rawText: r.toLatexFromEditor(e.elements.divident, t)
            }, {
              type: "raw-element",
              rawText: r.toLatexFromEditor(e.elements.divisor, t)
            }]
          }, {
            type: "group-by-lines",
            lines: [{
              type: "raw-element",
              rawText: "\\cline{2-2}"
            }, i]
          }, {
            type: "tabular-row",
            cells: [y.multicolumn(2, "l", {
              type: "group",
              elements: [{
                type: "raw-element",
                rawText: "\\kern-0.4em"
              }, P.buildRemainders(e, t, r, "r_0")]
            })]
          }]
        }
      };
      return m.A.fromEnvironment(o);
    }
  }
  class Z {
    handleDrawingLines(e, t, r) {
      return X.handleDrawingLines(e, t, !1, r);
    }
    getRendering(e, t, r) {
      return X.getRendering(e, t, r);
    }
    toLatex(e, t, r) {
      return X.toLatex(e, t, r, !1);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left"
      }, B.tableRow(B.table({
        rowalign: "top",
        columnalign: "left left",
        columnlines: "solid none"
      }, B.tableRow(t.generateEditor(e.elements.divident), t.generateEditor(e.elements.divisor)), B.tableRow(I.buildForUnderline(e.elements.r_0, 0, t), B.overline(t.generateEditor(e.elements.quotient))))), B.tableRow(I.buildRemainders(e, t, "r_0")));
    }
  }
  class Y {
    handleDrawingLines(e, t, r) {
      return X.handleDrawingLines(e, t, !0, r);
    }
    getRendering(e, t, r) {
      return X.getRendering(e, t, r);
    }
    toLatex(e, t, r) {
      return X.toLatex(e, t, r, !0);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left"
      }, B.tableRow(B.table({
        rowalign: "top",
        columnalign: "left left"
      }, B.tableRow(t.generateEditor(e.elements.divident), B.menclose("left", t.generateEditor(e.elements.divisor))), B.tableRow(I.buildForUnderline(e.elements.r_0, 0, t), B.overline(t.generateEditor(e.elements.quotient))))), B.tableRow(I.buildRemainders(e, t, "r_0")));
    }
  }
  var Q = new Z(),
    J = new Y(),
    X = new K();
  function $(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class te {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "block"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement(d.A, ee(ee({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: r
      })), o().createElement("div", {
        className: "role-right-container",
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement(d.A, ee(ee({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), g.A.renderRestEditors(e, r)), o().createElement(d.A, ee(ee({
        style: {
          paddingLeft: 6,
          paddingRight: 6
        },
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r
      }))), t);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>div.role-right-container"),
        i = h.YG(e, ">div>div>.role-divisor-editor"),
        s = h.YG(e, ">div>.role-long-division-lines"),
        a = F.T.getBCRect(e, r),
        l = F.T.getBCRectToRect(i[0], a),
        d = F.T.getBCRectToRect(n[0], a),
        p = "",
        u = k.A.round2(d.left),
        m = k.A.round2(d.right),
        f = k.A.round2(d.top);
      p += "M".concat(u, ",").concat(f, " L").concat(m, ",").concat(f), p += " M".concat(k.A.round2(l.left), ",").concat(k.A.round2(l.top), " L").concat(k.A.round2(l.left), ",").concat(k.A.round2(l.bottom), " L").concat(k.A.round2(l.right), ",").concat(k.A.round2(l.bottom));
      var y = g.A.drawOtherLines(a, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: p,
        fill: "none"
      }), o().createElement("path", {
        d: y,
        fill: "none"
      })), s[0]);
    }
    toLatex(e, t, r) {
      var n = y.array("ll", y.tabular(y.multicolumn(2, "l", y.raw(r.toLatexFromEditor(e.elements.quotient, t))), y.lines(y.raw("\\hline"), y.tabularRow(y.raw(r.toLatexFromEditor(e.elements.divident, t)), y.multicolumn(1, "|l", y.raw(r.toLatexFromEditor(e.elements.divisor, t))))), y.lines(y.raw("\\cline{2-2}"), y.spaceGroup(y.kern("-0.4em"), P.buildRemainders(e, t, r), y.kern("-0.4em")))));
      return m.A.fromElement(n);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left"
      }, B.tableRow(B.table({
        rowalign: "top",
        columnalign: "left left",
        rowlines: "solid none",
        framespacing: "0em 0em"
      }, B.tableRow(t.generateEditor(e.elements.quotient)), B.tableRow(t.generateEditor(e.elements.divident), B.menclose("left bottom", t.generateEditor(e.elements.divisor))))), B.tableRow(I.buildRemainders(e, t)));
    }
  }
  const re = new te();
  function ne(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ne(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class oe {
    getLeftRightFromType(e) {
      return "slash" === e ? {
        left: "/",
        right: "\\"
      } : {
        left: ")",
        right: "("
      };
    }
    getRendering(e, t, r, n) {
      var i = this.getLeftRightFromType(t),
        s = i.left,
        a = i.right;
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement(d.A, ie(ie({
        style: {},
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: n
      })), o().createElement("span", {
        className: "role-division-svg-text",
        style: {
          paddingLeft: 3,
          paddingRight: 3
        }
      }, s), o().createElement("div", {
        className: "role-right-container",
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement(d.A, ie(ie({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: n
      })), o().createElement("span", {
        className: "role-division-svg-text",
        style: {
          paddingLeft: 3,
          paddingRight: 3
        }
      }, a), o().createElement(d.A, ie(ie({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: n
      }))), g.A.renderRestEditors(e, n)), r);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>.role-long-division-lines"),
        i = F.T.getBCRect(e, r),
        s = g.A.drawOtherLines(i, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: s,
        fill: "none"
      })), n[0]);
    }
    getLeftRightLatexFromType(e) {
      return "slash" === e ? {
        left: "/",
        right: "\\backslash"
      } : {
        left: ")",
        right: "("
      };
    }
    toLatex(e, t, r, n) {
      var i = this.getLeftRightLatexFromType(n),
        o = i.left,
        s = i.right,
        a = y.array("ll", y.tabular(y.tabularRow(y.spaceGroup(y.raw(r.toLatexFromEditor(e.elements.divisor, t)), y.raw("\\thinspace"), y.raw(o), y.kern("-0.7em")), y.spaceGroup(y.raw(r.toLatexFromEditor(e.elements.divident, t)), y.raw("\\thinspace"), y.raw(s), y.group(y.raw("\\thinspace"), y.raw(r.toLatexFromEditor(e.elements.quotient, t))))), y.tabularRow(y.empty(), y.spaceGroup(y.kern("-0.4em"), P.buildRemainders(e, t, r)))));
      return m.A.fromElement(a);
    }
    toMathml(e, t, r) {
      var n = this.getLeftRightFromType(r),
        i = n.left,
        o = n.right,
        s;
      return B.table({
        rowalign: "top",
        columnalign: "left left",
        columnspacing: "0em"
      }, B.tableRow(B.mrow(t.generateEditor(e.elements.divisor), B.text(i)), B.mrow(t.generateEditor(e.elements.divident), B.text(o), t.generateEditor(e.elements.quotient))), B.tableRow(t.getEmptyElement(), I.buildRemainders(e, t)));
    }
  }
  class se {
    handleDrawingLines(e, t, r) {
      return le.handleDrawingLines(e, t, r);
    }
    getRendering(e, t, r) {
      return le.getRendering(e, "slash", t, r);
    }
    toLatex(e, t, r) {
      return le.toLatex(e, t, r, "slash");
    }
    toMathml(e, t) {
      return le.toMathml(e, t, "slash");
    }
  }
  class ae {
    handleDrawingLines(e, t, r) {
      return le.handleDrawingLines(e, t, r);
    }
    getRendering(e, t, r) {
      return le.getRendering(e, "brackets", t, r);
    }
    toLatex(e, t, r) {
      return le.toLatex(e, t, r, "brackets");
    }
    toMathml(e, t) {
      return le.toMathml(e, t, "brackets");
    }
  }
  var le = new oe(),
    ce = new se(),
    de = new ae();
  function he(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function pe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? he(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ue {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement(d.A, pe(pe({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), o().createElement("span", {
        className: "role-division-svg-text",
        style: {
          paddingLeft: 3,
          paddingRight: 3
        }
      }, ":"), o().createElement(d.A, pe(pe({
        style: {},
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r
      })), o().createElement("span", {
        className: "role-division-svg-text",
        style: {
          paddingLeft: 3,
          paddingRight: 3
        }
      }, "="), o().createElement(d.A, pe(pe({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: r
      }))), g.A.renderRestEditors(e, r), t);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>.role-long-division-lines"),
        i = F.T.getBCRect(e, r),
        s = g.A.drawOtherLines(i, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: s,
        fill: "none"
      })), n[0]);
    }
    toLatex(e, t, r) {
      var n = y.array("ll", y.tabular(y.tabularRow(y.spaceGroup(y.raw(r.toLatexFromEditor(e.elements.divident, t)), y.raw(":"), y.raw(r.toLatexFromEditor(e.elements.divisor, t)), y.raw("="), y.raw(r.toLatexFromEditor(e.elements.quotient, t)))), y.tabularRow(y.spaceGroup(y.kern("-0.4em"), P.buildRemainders(e, t, r)))));
      return m.A.fromElement(n);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left",
        columnspacing: "0em"
      }, B.tableRow(B.mrow(t.generateEditor(e.elements.divident), B.mo(":"), t.generateEditor(e.elements.divisor), B.mo("="), t.generateEditor(e.elements.quotient))), B.tableRow(I.buildRemainders(e, t)));
    }
  }
  const ge = new ue();
  function me(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function fe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? me(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ye {
    getRendering(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          flexDirection: "row"
        }
      }, o().createElement("div", {
        className: "role-long-division-lines",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          userSelect: "none",
          pointerEvents: "none"
        }
      }), o().createElement("div", {
        className: "role-left-container",
        style: {
          display: "flex",
          flexDirection: "column",
          paddingRight: 6
        }
      }, o().createElement(d.A, fe(fe({
        className: "role-divisor-editor"
      }, e.buildMetaDataFromName("divisor")), {}, {
        showBorder: r,
        lineStyle: {
          textAlign: "right"
        }
      })), o().createElement(d.A, fe(fe({
        className: "role-quotient-editor"
      }, e.buildMetaDataFromName("quotient")), {}, {
        showBorder: r,
        lineStyle: {
          textAlign: "right"
        }
      }))), o().createElement("div", {
        className: "role-right-container",
        style: {
          display: "flex",
          flexDirection: "column",
          paddingLeft: 6
        }
      }, o().createElement(d.A, fe(fe({
        className: "role-divident-editor"
      }, e.buildMetaDataFromName("divident")), {}, {
        showBorder: r
      })), g.A.renderRestEditors(e, r)), t);
    }
    handleDrawingLines(e, t, r) {
      var n = h.YG(e, ">div>div.role-left-container"),
        i = h.YG(e, ">div>div>.role-divisor-editor"),
        s = h.YG(e, ">div>.role-long-division-lines"),
        a = F.T.getBCRect(e, r),
        l = F.T.getBCRectToRect(i[0], a),
        d = F.T.getBCRectToRect(n[0], a),
        p = k.A.round2(d.right),
        u = 0,
        m = k.A.round2(d.bottom - d.top),
        f = "M".concat(p, ",").concat(0, " L").concat(p, ",").concat(m, " M").concat(k.A.round2(l.left), ",").concat(k.A.round2(l.bottom), " L").concat(k.A.round2(d.right), ",").concat(k.A.round2(l.bottom)),
        y = g.A.drawOtherLines(a, t);
      c().render(o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, o().createElement("path", {
        d: f,
        fill: "none"
      }), o().createElement("path", {
        d: y,
        fill: "none"
      })), s[0]);
    }
    toLatex(e, t, r) {
      var n = y.array("r|l", y.tabular(y.tabularRow(y.raw(r.toLatexFromEditor(e.elements.divisor, t)), y.raw(r.toLatexFromEditor(e.elements.divident, t))), y.lines(y.raw("\\cline{1-1}"), y.tabularRow(y.raw(r.toLatexFromEditor(e.elements.quotient, t)), y.spaceGroup(y.kern("-0.4em"), P.buildRemainders(e, t, r))))));
      return m.A.fromElement(n);
    }
    toMathml(e, t) {
      var r;
      return B.table({
        rowalign: "top",
        columnalign: "left left",
        columnlines: "solid none",
        columnspacing: "0em"
      }, B.tableRow(t.generateEditor(e.elements.divisor), t.generateEditor(e.elements.divident)), B.tableRow(B.overline(t.generateEditor(e.elements.quotient)), I.buildRemainders(e, t)));
    }
  }
  const ve = new ye();
  var be = r(33476),
    xe = r(36223),
    Ce = r(36606),
    Se;
  function Ae() {
    return Ae = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Ae.apply(null, arguments);
  }
  const we = function e(t) {
    return i.createElement("svg", Ae({
      xmlns: "http://www.w3.org/2000/svg",
      className: "left-top_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "left-top_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M22.33 4.2H44v5.66H22.33Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M16.33 12.67h40.34",
      className: "left-top_svg__connection left-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M16.33 12.67C18.5 16 19.25 20 17 23.5",
      className: "left-top_svg__connection left-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M23.33 34.33h13",
      className: "left-top_svg__connection left-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M30.33 56.33h13",
      className: "left-top_svg__connection left-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M22.62 15.49h21.67v5.65H22.62Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M3.12 15.49h12.13v5.65H3.12Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M23.12 25.24h13.63v5.65H23.12Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M29.62 37.99h13.63v5.65H29.62Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M30.12 46.49h13.63v5.65H30.12Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M35.37 59.24h7.96v5.65h-7.96Z",
      className: "left-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    }))));
  };
  function Ee() {
    return Ee = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Ee.apply(null, arguments);
  }
  var ke;
  const Oe = function e(t) {
    return i.createElement("svg", Ee({
      xmlns: "http://www.w3.org/2000/svg",
      className: "stacked-right-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "stacked-right-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M32.33 17.17H54v5.65H32.33Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M29.83 15.17H54",
      className: "stacked-right-right_svg__connection stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M5.33 26.33h13",
      className: "stacked-right-right_svg__connection stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M12.33 48.33h13",
      className: "stacked-right-right_svg__connection stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M4.62 7.49h21.67v5.65H4.62Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M33.12 7.49h12.13v5.65H33.12Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M5.12 17.24h13.63v5.65H5.12Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M11.62 29.99h13.63v5.65H11.62Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M12.12 38.49h13.63v5.65H12.12Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M17.37 51.24h7.96v5.65h-7.96Z",
      className: "stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M29.5 5.67V63.2",
      className: "stacked-right-right_svg__connection stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function De() {
    return De = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, De.apply(null, arguments);
  }
  var Pe;
  const Me = function e(t) {
    return i.createElement("svg", De({
      xmlns: "http://www.w3.org/2000/svg",
      className: "medium-stacked-right-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "medium-stacked-right-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M31.33 17.17H53v5.65H31.33Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M28.83 15.17H53",
      className: "medium-stacked-right-right_svg__connection medium-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M7.33 26.33h13",
      className: "medium-stacked-right-right_svg__connection medium-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M14.33 48.33h13",
      className: "medium-stacked-right-right_svg__connection medium-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M6.62 7.49h18.63v5.65H6.62Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M32.12 7.49h12.13v5.65H32.12Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M7.12 17.24h13.63v5.65H7.12Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M13.62 29.99h13.63v5.65H13.62Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M14.12 38.49h13.63v5.65H14.12Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M19.37 51.24h7.96v5.65h-7.96Z",
      className: "medium-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "medium-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M28.5 5.67v19",
      className: "medium-stacked-right-right_svg__connection medium-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function Ie() {
    return Ie = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Ie.apply(null, arguments);
  }
  var Te;
  const Le = function e(t) {
    return i.createElement("svg", Ie({
      xmlns: "http://www.w3.org/2000/svg",
      className: "short-stacked-right-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "short-stacked-right-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M31.33 17.17H53v5.65H31.33Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M28.83 15.17H53",
      className: "short-stacked-right-right_svg__connection short-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M7.33 26.33h13",
      className: "short-stacked-right-right_svg__connection short-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M14.33 48.33h13",
      className: "short-stacked-right-right_svg__connection short-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M6.62 7.49h18.63v5.65H6.62Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M32.12 7.49h12.13v5.65H32.12Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M7.12 17.24h13.63v5.65H7.12Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M13.62 29.99h13.63v5.65H13.62Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M14.12 38.49h13.63v5.65H14.12Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M19.37 51.24h7.96v5.65h-7.96Z",
      className: "short-stacked-right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "short-stacked-right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M28.5 5.67v10",
      className: "short-stacked-right-right_svg__connection short-stacked-right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function Re() {
    return Re = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Re.apply(null, arguments);
  }
  var Be;
  const Fe = function e(t) {
    return i.createElement("svg", Re({
      xmlns: "http://www.w3.org/2000/svg",
      className: "right-top_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "right-top_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M9.38 7.17h26.08v5.65H9.38Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M9 15.17h43.29",
      className: "right-top_svg__connection right-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M9.33 36.33h13",
      className: "right-top_svg__connection right-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M16.33 58.33h13",
      className: "right-top_svg__connection right-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M8.62 17.49H30v5.65H8.62Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M39.62 16.9h12.13v5.66H39.62Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M9.12 27.24h13.63v5.65H9.12Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M15.62 39.99h14.13v5.65H15.62Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M16.12 48.49h13.63v5.65H16.12Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M21.37 61.24h7.96v5.65h-7.96Z",
      className: "right-top_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M37.5 15.15v9.52",
      className: "right-top_svg__connection right-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-top_svg__arrow-line"
    }, i.createElement("path", {
      d: "M51.71 24.67H37.5",
      className: "right-top_svg__connection right-top_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function je() {
    return je = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, je.apply(null, arguments);
  }
  var _e;
  const Ne = function e(t) {
    return i.createElement("svg", je({
      xmlns: "http://www.w3.org/2000/svg",
      className: "left-slash-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "left-slash-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M38.63 8.42H52.5v5.65H38.63Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M19.33 26.33h13",
      className: "left-slash-right_svg__connection left-slash-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M26.33 48.33h13",
      className: "left-slash-right_svg__connection left-slash-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M2.87 8.74h8.38v5.65H2.87Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M19.12 17.24h9.63v5.65h-9.63Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M28.75 29.99h11v5.65h-11Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M28.5 38.49h11.25v5.65H28.5Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M31.37 51.24h7.96v5.65h-7.96Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "m13.83 15.33 2.92-8.08",
      className: "left-slash-right_svg__connection left-slash-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M36.75 14.75 34 7.25",
      className: "left-slash-right_svg__connection left-slash-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-slash-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M18.63 8.42H32.5v5.65H18.63Z",
      className: "left-slash-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    }))));
  };
  function ze() {
    return ze = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, ze.apply(null, arguments);
  }
  var He;
  const We = function e(t) {
    return i.createElement("svg", ze({
      xmlns: "http://www.w3.org/2000/svg",
      className: "left-bracket-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "left-bracket-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M38.63 9.42H52.5v5.65H38.63Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M19.33 27.33h13",
      className: "left-bracket-right_svg__connection left-bracket-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M26.33 49.33h13",
      className: "left-bracket-right_svg__connection left-bracket-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M2.87 9.74h8.38v5.65H2.87Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M19.12 18.24h9.63v5.65h-9.63Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M28.75 30.99h11v5.65h-11Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M28.5 39.49h11.25v5.65H28.5Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M31.37 52.24h7.96v5.65h-7.96Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M18.63 9.42H32.5v5.65H18.63Z",
      className: "left-bracket-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M14 8c2.17 3.33 2.54 5.07.29 8.57",
      className: "left-bracket-right_svg__connection left-bracket-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "left-bracket-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M36.29 8c-2 2.57-2 5.71.28 8.57",
      className: "left-bracket-right_svg__connection left-bracket-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function Ve() {
    return Ve = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Ve.apply(null, arguments);
  }
  var Ue;
  const qe = function e(t) {
    return i.createElement("svg", Ve({
      xmlns: "http://www.w3.org/2000/svg",
      className: "right-right_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "right-right_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M40.5 9.42h12v5.65h-12Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M3.33 27.33h13",
      className: "right-right_svg__connection right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M10.33 49.33h13",
      className: "right-right_svg__connection right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M2.87 9.74h12.38v5.65H2.87Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M3.12 18.24h9.63v5.65H3.12Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M12.75 30.99h11v5.65h-11Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M12.5 39.49h11.25v5.65H12.5Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M15.37 52.24h7.96v5.65h-7.96Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M23.75 9.42h6.75v5.65h-6.75Z",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M18.33 10.67c0-.74.6-1.34 1.34-1.34a1.336 1.336 0 1 1-1.34 1.34",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#000"
      }
    })), i.createElement("g", {
      className: "right-right_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M18.33 14.07c0-.74.6-1.34 1.34-1.34a1.336 1.336 0 1 1-1.34 1.34",
      className: "right-right_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#000"
      }
    })), i.createElement("g", {
      className: "right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M31.83 10.83h6.42",
      className: "right-right_svg__connection right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "right-right_svg__arrow-line"
    }, i.createElement("path", {
      d: "M31.83 13.33h6.42",
      className: "right-right_svg__connection right-right_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  function Ge() {
    return Ge = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, Ge.apply(null, arguments);
  }
  var Ke;
  const Ze = function e(t) {
    return i.createElement("svg", Ge({
      xmlns: "http://www.w3.org/2000/svg",
      className: "stacked-left-left_svg__role-diagram-draw-area"
    }, t), i.createElement("g", {
      className: "stacked-left-left_svg__shapes-region",
      style: {
        stroke: "#000",
        fill: "none"
      }
    }, i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M2.83 17.92H24.5v5.65H2.83Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__arrow-line"
    }, i.createElement("path", {
      d: "M3.33 15.92H27.5",
      className: "stacked-left-left_svg__connection stacked-left-left_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__arrow-line"
    }, i.createElement("path", {
      d: "M31.33 27.33h13",
      className: "stacked-left-left_svg__connection stacked-left-left_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__arrow-line"
    }, i.createElement("path", {
      d: "M38.33 49.33h13",
      className: "stacked-left-left_svg__connection stacked-left-left_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M30.62 8.49h21.67v5.65H30.62Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M12.62 8.24h12.13v5.65H12.62Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M31.12 18.24h13.63v5.65H31.12Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M37.62 30.99h13.63v5.65H37.62Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M38.12 39.49h13.63v5.65H38.12Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__composite-shape"
    }, i.createElement("path", {
      stroke: "none",
      d: "M43.37 52.24h7.96v5.65h-7.96Z",
      className: "stacked-left-left_svg__real",
      style: {
        strokeWidth: 1,
        stroke: "none",
        fill: "#d3d3d3"
      }
    })), i.createElement("g", {
      className: "stacked-left-left_svg__arrow-line"
    }, i.createElement("path", {
      d: "M27.5 5.67V63.2",
      className: "stacked-left-left_svg__connection stacked-left-left_svg__real",
      style: {
        stroke: "#000",
        strokeWidth: 1,
        fill: "none"
      }
    }))));
  };
  var Ye = r(40383);
  function Qe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Je(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qe(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qe(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Xe extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "groups", void 0), (0, n.A)(this, "handleItemSelect", e => {
        this.setState({
          selectedItem: e
        });
      }), (0, n.A)(this, "handleCommit", e => {
        this.props.onSelect(e.item);
      }), this.groups = [{
        name: "root",
        items: ["left-top", "stacked-right-right", "medium-stacked-right-right", "short-stacked-right-right", "right-top", "left-slash-right", "left-bracket-right", "right-right", "stacked-left-left"]
      }], this.state = {
        selectedItem: {
          group: this.groups[0],
          item: this.props.layout
        }
      };
    }
    render() {
      var e = {
          width: 55,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 14,
          border: "1px solid var(--ui-border, lightgray)",
          display: "flex",
          cursor: "pointer",
          background: "var(--ui-surface, white)",
          overflow: "hidden",
          margin: 2,
          padding: 2
        },
        t = Je(Je({}, e), {}, {
          background: "var(--ui-selection, rgb(227, 253, 225))"
        }),
        r = this.props.getDzContainer();
      return o().createElement(be.A, {
        smaller: !0,
        appliedDzContainer: r,
        reversedScaleDZOrigin: "right bottom",
        closeOnClickOutside: !0,
        style: {
          top: -20,
          left: -24
        }
      }, o().createElement("setting", {
        className: "mt-common-dialog no-print",
        style: Ye.a.applyReverseZoomStyle({
          top: -105,
          left: 0,
          position: "absolute",
          fontSize: 12,
          width: 350,
          height: 90
        }, r, "left bottom"),
        onMouseDown: xe.A.focusAndCursorSelectAcquired,
        onDoubleClick: xe.A.onDoubleClickStopPropagation
      }, o().createElement(Ce.A, {
        itemContainerStyle: e,
        itemContainerStyleSelected: t,
        groups: this.groups,
        numberOfItemsPerLine: 5,
        renderGroupName: () => null,
        renderItem: (e, t, r) => {
          var n = {
            width: "100%",
            height: "100%"
          };
          switch (e) {
            case "left-top":
              return o().createElement(we, {
                style: n
              });
            case "stacked-right-right":
              return o().createElement(Oe, {
                style: n
              });
            case "medium-stacked-right-right":
              return o().createElement(Me, {
                style: n
              });
            case "short-stacked-right-right":
              return o().createElement(Le, {
                style: n
              });
            case "right-top":
              return o().createElement(Fe, {
                style: n
              });
            case "left-slash-right":
              return o().createElement(Ne, {
                style: n
              });
            case "left-bracket-right":
              return o().createElement(We, {
                style: n
              });
            case "right-right":
              return o().createElement(qe, {
                style: n
              });
            case "stacked-left-left":
              return o().createElement(Ze, {
                style: n
              });
          }
          return o().createElement("span", null, e);
        },
        selected: this.state.selectedItem,
        lastSelected: {
          group: this.groups[0],
          item: this.props.layout
        },
        onSelect: this.handleItemSelect,
        onCommit: this.handleCommit
      })));
    }
  }
  function $e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function et(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $e(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function tt(e) {
    switch (e) {
      case "left-top":
      default:
        return z;
      case "stacked-right-right":
        return U;
      case "medium-stacked-right-right":
        return Q;
      case "short-stacked-right-right":
        return J;
      case "right-top":
        return re;
      case "left-slash-right":
        return ce;
      case "left-bracket-right":
        return de;
      case "right-right":
        return ge;
      case "stacked-left-left":
        return ve;
    }
  }
  class rt extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "long-division-symbol"), (0, n.A)(this, "handleLayoutChange", e => {
        this.props.onDataChanged(et(et({}, this.props.data), {}, {
          layout: e
        }));
      }), (0, n.A)(this, "handleDrawingLines", () => {
        this.context.fixedContextHandler.getRenderingContext().nextCycleIfRequired(() => {
          var e = c().findDOMNode(this);
          tt(this.props.data.layout).handleDrawingLines(e, this.refMap, this.getDzContainer());
        });
      });
    }
    getCompositeBlockStyle() {
      return et(et({}, super.getCompositeBlockStyle()), {}, {
        verticalAlign: "baseline"
      });
    }
    getLineColor() {
      return this.context.fixedContextHandler.getDefaultBorderColor();
    }
    renderComponent() {
      return tt(this.props.data.layout).getRendering(this, this.renderSettings(), this.isChildSelected());
    }
    renderSettings() {
      if (this.isDirectAndChildSelected()) return o().createElement(Xe, {
        key: "settings",
        getDzContainer: this.getDzContainer,
        layout: this.props.data.layout || "left-top",
        onSelect: this.handleLayoutChange
      });
    }
    afterReactRenderWhenDataChanged() {
      this.context.fixedContextHandler.getBatchUpdater().pushToEnd(this.handleDrawingLines, this);
    }
  }
  class nt extends a.A {
    getViewComponent() {
      return rt;
    }
    getLatextName() {
      return "\\longdivision";
    }
    getSymbol() {
      return "longdivision";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "ulvalue",
        elements: {
          quotient: {
            onRemove: "all"
          },
          divisor: {
            onRemove: "all"
          },
          divident: {
            onRemove: "all"
          },
          r_0: {
            onRemove: "only"
          },
          r_1: {
            onRemove: "only"
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
            width: 30,
            height: 40,
            background: "var(--ui-surface-muted, #f7f7f7)"
          }
        }, o().createElement(we, {
          viewBox: "0 0 50 70",
          style: {
            width: "100%",
            height: "100%"
          }
        })),
        description: "Long Division Layout",
        height: 40
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex(e, t, r) {
      var n;
      return tt(e.layout).toLatex(e, t, r);
    }
    toMathml(e, t) {
      var r;
      return tt(e.layout).toMathml(e, t);
    }
  }
  const it = new nt();
};
