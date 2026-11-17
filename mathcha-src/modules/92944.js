/* module 92944 — 6821 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => h
  });
  var n = r(49812),
    i = r(90437),
    o = r(27271),
    s = r(47858),
    a = r(2543),
    l = r.n(a),
    c = r(90112);
  class d {
    setBorderStyleForTabular(e, t, r) {
      var s = n.A.cloneCompositeBlockWithNewElements(e),
        a = i.Z.getMinMaxTabularKeyIndex(t);
      switch (r) {
        case "full":
          for (var c = 0; c < t.length; c++) {
            var d = t[c];
            this.addBorderStyleForEditor(d, s, 15);
          }
          return s;
        case "none":
          for (var h = 0; h < t.length; h++) {
            var p = t[h];
            this.addBorderStyleForEditor(p, s, 0);
          }
          return s;
      }
      if ("outside" == r) return l().range(a.minRow, a.maxRow + 1).map(e => i.Z.getKeyFromRowCol(e, a.minCol)).forEach(e => this.addBorderStyleForEditor(e, s, 1)), l().range(a.minCol, a.maxCol + 1).map(e => i.Z.getKeyFromRowCol(a.minRow, e)).forEach(e => this.addBorderStyleForEditor(e, s, 2)), l().range(a.minRow, a.maxRow + 1).map(e => i.Z.getKeyFromRowCol(e, a.maxCol)).forEach(e => {
        var t = o.A.checkAndFindValidKeyPosition(e, s);
        this.addBorderStyleForEditor(t, s, 4);
      }), l().range(a.minCol, a.maxCol + 1).map(e => i.Z.getKeyFromRowCol(a.maxRow, e)).forEach(e => {
        var t = o.A.checkAndFindValidKeyPosition(e, s);
        this.addBorderStyleForEditor(t, s, 8);
      }), s;
      if ("inside" == r) {
        for (var u = a.minRow; u <= a.maxRow; u++) for (var g = a.minCol; g <= a.maxCol; g++) {
          var m = i.Z.getKeyFromRowCol(u, g),
            f = s.elements[m],
            y = o.A.getColSpan(f),
            v = o.A.getRowSpan(f);
          u == a.minRow && u != a.maxRow && u + v - 1 < a.maxRow ? this.addBorderStyleForEditor(m, s, 8) : u == a.maxRow && u != a.minRow ? this.addBorderStyleForEditor(m, s, 2) : u != a.minRow && u != a.maxRow && (this.addBorderStyleForEditor(m, s, 2), u + v - 1 < a.maxRow && this.addBorderStyleForEditor(m, s, 8)), g == a.minCol && g != a.maxCol && g + y - 1 < a.maxCol ? this.addBorderStyleForEditor(m, s, 4) : g == a.maxCol && g != a.minCol ? this.addBorderStyleForEditor(m, s, 1) : g != a.minCol && g != a.maxCol && (this.addBorderStyleForEditor(m, s, 1), g + y - 1 < a.maxCol && this.addBorderStyleForEditor(m, s, 4));
        }
        return s;
      }
      switch (r) {
        case "top":
          return l().range(a.minCol, a.maxCol + 1).map(e => i.Z.getKeyFromRowCol(a.minRow, e)).forEach(e => this.addBorderStyleForEditor(e, s, 2)), s;
        case "middle":
          for (var b = a.minRow; b <= a.maxRow; b++) for (var x = a.minCol; x <= a.maxCol; x++) {
            var C = i.Z.getKeyFromRowCol(b, x),
              S = s.elements[C],
              A = o.A.getRowSpan(S);
            b == a.minRow && b != a.maxRow && b + A - 1 < a.maxRow ? this.addBorderStyleForEditor(C, s, 8) : b == a.maxRow && b != a.minRow ? this.addBorderStyleForEditor(C, s, 2) : b != a.minRow && b != a.maxRow && (this.addBorderStyleForEditor(C, s, 2), b + A - 1 < a.maxRow && this.addBorderStyleForEditor(C, s, 8));
          }
          return s;
        case "bottom":
          return l().range(a.minCol, a.maxCol + 1).map(e => i.Z.getKeyFromRowCol(a.maxRow, e)).forEach(e => {
            var t = o.A.checkAndFindValidKeyPosition(e, s);
            this.addBorderStyleForEditor(t, s, 8);
          }), s;
        case "left":
          return l().range(a.minRow, a.maxRow + 1).map(e => i.Z.getKeyFromRowCol(e, a.minCol)).forEach(e => this.addBorderStyleForEditor(e, s, 1)), s;
        case "center":
          for (var w = a.minRow; w <= a.maxRow; w++) for (var E = a.minCol; E <= a.maxCol; E++) {
            var k = i.Z.getKeyFromRowCol(w, E),
              O = s.elements[k],
              D = o.A.getColSpan(O);
            E == a.minCol && E != a.maxCol && E + D - 1 < a.maxCol ? this.addBorderStyleForEditor(k, s, 4) : E == a.maxCol && E != a.minCol ? this.addBorderStyleForEditor(k, s, 1) : E != a.minCol && E != a.maxCol && (this.addBorderStyleForEditor(k, s, 1), E + D - 1 < a.maxCol && this.addBorderStyleForEditor(k, s, 4));
          }
          return s;
        case "right":
          return l().range(a.minRow, a.maxRow + 1).map(e => i.Z.getKeyFromRowCol(e, a.maxCol)).forEach(e => {
            var t = o.A.checkAndFindValidKeyPosition(e, s);
            this.addBorderStyleForEditor(t, s, 4);
          }), s;
      }
    }
    addBorderStyleForEditor(e, t, r) {
      var n;
      if (!t.elements[e].hidden) {
        if (15 === r || null == r) return this.addBorder(t, e, void 0, !0), this.addSide(t, e, "left", 4, !1), this.addSide(t, e, "top", 8, !1), this.addSide(t, e, "right", 1, !1), void this.addSide(t, e, "bottom", 2, !1);
        if (0 === r) return this.addBorder(t, e, 0, !0), this.removeSide(t, e, "left", 4), this.removeSide(t, e, "top", 8), this.removeSide(t, e, "right", 1), void this.removeSide(t, e, "bottom", 2);
        switch (this.addBorder(t, e, r, !1), r) {
          case 1:
            this.addSide(t, e, "left", 4, !1);
            break;
          case 2:
            this.addSide(t, e, "top", 8, !1);
            break;
          case 4:
            this.addSide(t, e, "right", 1, !1);
            break;
          case 8:
            this.addSide(t, e, "bottom", 2, !1);
        }
      }
    }
    addBorder(e, t, r, n) {
      if (n) e.elements[t] = s.A.setStyleToEditor(e.elements[t], "border", r);else {
        var i = s.A.getStyleForEditor(e.elements[t], "border", 15);
        15 != i && (e.elements[t] = s.A.setStyleToEditor(e.elements[t], "border", i | r));
      }
    }
    removeBorder(e, t, r) {
      var n = s.A.getStyleForEditor(e.elements[t], "border", 15);
      0 != n && (e.elements[t] = s.A.setStyleToEditor(e.elements[t], "border", n ^ r));
    }
    addSide(e, t, r, n, i) {
      var o;
      switch (r) {
        case "left":
          o = c.d.getLeftAvailableCellKeys(t, e);
          break;
        case "top":
          o = c.d.getAboveAvailableCellKeys(t, e);
          break;
        case "right":
          o = c.d.getRightAvailableCellKeys(t, e);
          break;
        case "bottom":
          o = c.d.getBelowAvailableCellKeys(t, e);
      }
      o.forEach(t => {
        this.addBorder(e, t, n, i);
      });
    }
    removeSide(e, t, r, n) {
      var i;
      switch (r) {
        case "left":
          i = c.d.getLeftAvailableCellKeys(t, e);
          break;
        case "top":
          i = c.d.getAboveAvailableCellKeys(t, e);
          break;
        case "right":
          i = c.d.getRightAvailableCellKeys(t, e);
          break;
        case "bottom":
          i = c.d.getBelowAvailableCellKeys(t, e);
      }
      i.forEach(t => {
        this.removeBorder(e, t, n);
      });
    }
  }
  var h = new d();
};
