/* module 6720 — 7653 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    G4: () => A,
    eV: () => v,
    m_: () => C,
    tC: () => x
  });
  var n = r(3453),
    i = r(64467),
    o = r(2543),
    s = r.n(o),
    a = r(40927),
    l = r.n(a),
    c = r(48440),
    d = r(30803),
    h = r(6855),
    p = r(39774),
    u = r(90437),
    g = r(70224);
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
  var y = {
    "{": "Bmatrix",
    "[": "bmatrix",
    "(": "pmatrix",
    "|": "vmatrix",
    " ": "matrix",
    "‖": "Vmatrix"
  };
  class v extends c.A {
    getViewComponent() {
      return h.A;
    }
    getModel(e) {
      var t;
      e && e.names[0] && (t = e.names[0].substr(1));
      var r = this.bracketFromName(t),
        n = this.getModelFromStructure({
          "0_0": "editor",
          "0_1": "editor",
          "1_0": "editor",
          "1_1": "editor"
        }, "\\matrix");
      return n.row = 2, n.column = 2, n.bracket = r, n;
    }
    getLatexName() {
      return "\\matrix";
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\matrix"],
        height: 30,
        filterTag: "matrix ",
        renderSymbol: () => l().createElement(p.A, {
          bracketType: " "
        })
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\pmatrix"],
        height: 30,
        filterTag: "matrix",
        renderSymbol: () => l().createElement(p.A, {
          bracketType: "("
        })
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\bmatrix"],
        height: 30,
        renderSymbol: () => l().createElement(p.A, {
          bracketType: "["
        })
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Bmatrix"],
        height: 30,
        renderSymbol: () => l().createElement(p.A, {
          bracketType: "{"
        })
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\vmatrix"],
        height: 30,
        renderSymbol: () => l().createElement(p.A, {
          bracketType: "|"
        })
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\Vmatrix"],
        height: 30,
        renderSymbol: () => l().createElement(p.A, {
          bracketType: "‖"
        })
      })];
    }
    bracketFromName(e) {
      return "pmatrix" == e ? "(" : "Bmatrix" == e ? "{" : "bmatrix" == e ? "[" : "vmatrix" == e ? "|" : "Vmatrix" == e ? "‖" : "matrix" == e ? null : void 0;
    }
    toModel(e, t, r, n) {
      if (null == t) throw new Error("Wrong expression");
      var i = this.bracketFromName(e),
        o,
        s;
      return f(f({}, x(this.getLatexName(), t)), {}, {
        bracket: i
      });
    }
    isInMathExpression() {
      return !0;
    }
    toLatex(e, t, r) {
      var i = e.bracket || " ",
        o = y[i],
        s = this.convertToHVLines(e.borderSeparation, e.row, e.column),
        a = (0, n.A)(s, 2),
        l = a[0],
        c = a[1],
        d;
      return C({
        block: f(f({}, e), {}, {
          hLines: l,
          vLines: c
        }),
        options: t,
        latexConverter: r,
        matrixName: o,
        arrayOption: null,
        forceHLine: !1,
        inMathExpression: this.isInMathExpression(),
        columnJoinText: this.getColumnJoinText()
      });
    }
    convertToHVLines(e, t, r) {
      if (!e) return [[], []];
      var n = new Set(),
        i = new Set();
      return e["second-right"] && i.add(r - 1), e["second-left"] && i.add(1), e["horizontal-middle"] && (n.add(Math.floor(t / 2)), n.add(Math.round(t / 2))), e["vertical-middle"] && (n.add(Math.floor(r / 2)), n.add(Math.round(r / 2))), [Array.from(n.values()), Array.from(i.values())];
    }
    toMathml(e, t) {
      var r = A(e, t),
        n = [{
          l: "\\pmatrix",
          left: "(",
          right: ")"
        }, {
          l: "\\bmatrix",
          left: "[",
          right: "]"
        }, {
          l: "\\Bmatrix",
          left: "{",
          right: "}"
        }, {
          l: "\\vmatrix",
          left: "|",
          right: "|"
        }, {
          l: "\\Vmatrix",
          left: "‖",
          right: "‖"
        }],
        i = n.find(t => t.l == e.text);
      return i || "\\matrix" == e.text && (i = n.find(t => t.left == e.bracket)) ? {
        type: "mrow",
        elements: [{
          type: "mo",
          value: i.left,
          fence: !0
        }, r, {
          type: "mo",
          value: i.right,
          fence: !0
        }]
      } : r;
    }
    innerToLatex(e, t, r, n) {
      return C({
        block: e,
        options: t,
        latexConverter: r,
        matrixName: n,
        arrayOption: null,
        forceHLine: !1,
        inMathExpression: this.isInMathExpression(),
        columnJoinText: this.getColumnJoinText()
      });
    }
    getColumnJoinText() {
      return " & ";
    }
  }
  function b(e) {
    for (var t = 0, r = 0; r < e.length; r++) {
      var n = e[r].sections ? e[r].sections.length : 0;
      t = Math.max(n, t);
    }
    return t;
  }
  function x(e, t) {
    for (var r = t, n = {}, i = b(t), o = r.length, s = 0; s < r.length; s++) {
      var a = r[s];
      a.sections = a.sections || [];
      for (var l = 0; l < i; l++) {
        var c;
        n[s + "_" + l] = a.sections[l] ? a.sections[l] : g.A.createEmptyEditor();
      }
    }
    return null == n["0_0"] && (n["0_0"] = g.A.createEmptyEditor(), i = 1, o = 1), {
      id: d.w.nextId(),
      type: "composite",
      text: e,
      row: o,
      column: i,
      elements: n
    };
  }
  function C(e) {
    var t = e.arrayOption || "",
      r = s().assign({}, e.options, {
        inMathExpression: e.inMathExpression
      }),
      n = e.matrixName;
    return "\\begin{".concat(n, "}").concat(t, "\n").concat(S(e.block, r, e.latexConverter, e.forceHLine, e.columnJoinText), "\n\\end{").concat(n, "}");
  }
  function S(e, t, r, n, i) {
    for (var o = [], a = 0; a < e.row; a++) {
      var l = [],
        c = "";
      (n || e.hLines && e.hLines.indexOf(a) >= 0) && (c += "\\hline\n");
      for (var d = 0; d < e.column; d++) {
        var h = a + "_" + d,
          p = e.elements[h];
        l.push("".concat(r.toLatexFromEditor(p, t)));
      }
      c += l.join(i), "" == s().trim(c) && (c += " \\\\"), o.push(c);
    }
    return (n || e.hLines && e.hLines.indexOf(a) >= 0) && o.push("\\hline"), o.join("\\\\\n");
  }
  function A(e, t) {
    for (var r = [], n = 0; n < e.row; n++) {
      var i = {
        type: "mtr",
        cells: []
      };
      r.push(i);
      for (var o = 0; o < e.column; o++) {
        var a = e.elements[u.Z.getKeyFromRowCol(n, o)];
        i.cells.push({
          type: "mtd",
          element: t.generateEditor(a)
        });
      }
    }
    var l;
    return {
      type: "mtable",
      rows: r,
      columnalign: s().times(e.column, () => "center").join(" ")
    };
  }
};
