/* module 11474 — 7262 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(90437),
    a = r(70224),
    l = r(60693);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    isLastRowInMergedRow(e, t) {
      for (var r = s.Z.getAllValidTabularKeys(e), n = 0; n < r.length; n++) {
        var i = r[n],
          o = e.elements[i];
        if (o.rowSpan && o.rowSpan > 1) {
          var a,
            l = s.Z.getTabularCellIndexFromKey(i).row;
          if (o.rowSpan - 1 + l == t) return !0;
        }
      }
      return !1;
    }
    addCaption(e) {
      var t = a.A.createEmptyEditor(),
        r;
      return t.lines[0].style = {
        align: "center"
      }, d(d({}, e), {}, {
        elements: d(d({}, e.elements), {}, {
          caption: t
        })
      });
    }
    getNextAvailableLine(e, t) {
      for (t++; e[t].length <= 0;) t++;
      return {
        line: t,
        spans: e[t]
      };
    }
    getPreviousAvailableLine(e, t) {
      for (t--; e[t].length <= 0;) t--;
      return {
        line: t,
        spans: e[t]
      };
    }
    findKeysHandleAtVLine(e, t) {
      for (var r = [], n = 0; n < t.row; n++) for (var i = 0; i < t.column; i++) {
        var a = s.Z.getKeyFromRowCol(n, i),
          l = t.elements[a];
        l.hidden || (l.rowSpan || n != e - 1 || r.push({
          key: a,
          rowSpan: 1
        }), l.rowSpan && n + l.rowSpan == e && r.push({
          key: a,
          rowSpan: l.rowSpan
        }));
      }
      return o().map(r, e => e.key);
    }
    buildResizeRowLines(e, t, r, n, i) {
      for (var a = l.T.getBCRect(r, i), c = o().range(0, e.row + 1).map(() => [{
          from: 0,
          to: e.column
        }]), d = 0; d < e.row; d++) for (var h = 0; h < e.column; h++) {
        var p = s.Z.getKeyFromRowCol(d, h);
        e.elements[p].rowSpan && this.splitOfRowSpan(d, h, e.elements[p].rowSpan, e.elements[p].colSpan || 1, c);
      }
      return o().map(c, (r, i) => r.map(r => this.getRowFromToPoint(i, r.from, r.to, e, t, a, n)));
    }
    buildResizeColumnLines(e, t, r, n, i) {
      for (var a = l.T.getBCRect(r, i), c = o().range(0, e.column + 1).map(() => [{
          from: 0,
          to: e.row
        }]), d = 0; d < e.column; d++) for (var h = 0; h < e.row; h++) {
        var p = s.Z.getKeyFromRowCol(h, d);
        e.elements[p].colSpan && this.splitOfColumnSpan(h, d, e.elements[p].rowSpan || 1, e.elements[p].colSpan, c);
      }
      return o().map(c, (r, i) => r.map(r => this.getColumnFromToPoint(i, r.from, r.to, e, t, a, n)));
    }
    getColumnFromToPoint(e, t, r, n, i, o, a) {
      if (0 == e) {
        var c = l.T.getBCRectToRect(a, o);
        return {
          fromPoint: {
            x: c.left,
            y: c.top
          },
          toPoint: {
            x: c.left,
            y: c.bottom
          }
        };
      }
      if (e == n.column) {
        var d = i[s.Z.getKeyFromRowCol(t, this.whileColPrevious(t, e - 1, n))],
          h = i[s.Z.getKeyFromRowCol(this.whileRowPrevious(r - 1, e - 1, n), e - 1)];
        if (!d || !h) return {
          fromPoint: {
            x: 0,
            y: 0
          },
          toPoint: {
            x: 0,
            y: 0
          }
        };
        var p = l.T.getBCRectToRect(d.editor.parentElement, o),
          u = l.T.getBCRectToRect(h.editor.parentElement, o);
        return {
          fromPoint: {
            x: p.right,
            y: p.top
          },
          toPoint: {
            x: u.right,
            y: u.bottom
          }
        };
      }
      var g = i[s.Z.getKeyFromRowCol(t, e)],
        m = i[s.Z.getKeyFromRowCol(this.whileRowPrevious(r - 1, e, n), e)];
      if (!g || !m) return {
        fromPoint: {
          x: 0,
          y: 0
        },
        toPoint: {
          x: 0,
          y: 0
        }
      };
      var f = l.T.getBCRectToRect(g.editor.parentElement, o),
        y = l.T.getBCRectToRect(m.editor.parentElement, o);
      return {
        fromPoint: {
          x: f.left,
          y: f.top
        },
        toPoint: {
          x: y.left,
          y: y.bottom
        }
      };
    }
    getRowFromToPoint(e, t, r, n, i, o, a) {
      if (0 == e) {
        var c = l.T.getBCRectToRect(a, o);
        return {
          fromPoint: {
            x: c.left,
            y: c.top
          },
          toPoint: {
            x: c.right,
            y: c.top
          }
        };
      }
      if (e == n.row) {
        var d = l.T.getBCRectToRect(a, o);
        return {
          fromPoint: {
            x: d.left,
            y: d.bottom
          },
          toPoint: {
            x: d.right,
            y: d.bottom
          }
        };
      }
      var h = i[s.Z.getKeyFromRowCol(e, t)],
        p = i[s.Z.getKeyFromRowCol(e, this.whileColPrevious(e, r - 1, n))];
      if (!h || !p) return {
        fromPoint: {
          x: 0,
          y: 0
        },
        toPoint: {
          x: 0,
          y: 0
        }
      };
      var u = l.T.getBCRectToRect(h.editor.parentElement, o),
        g = l.T.getBCRectToRect(p.editor.parentElement, o);
      return {
        fromPoint: {
          x: u.left,
          y: u.top
        },
        toPoint: {
          x: g.right,
          y: g.top
        }
      };
    }
    whileColPrevious(e, t, r) {
      for (;;) {
        var n = s.Z.getKeyFromRowCol(e, t);
        if (!r.elements[n].hidden) return t;
        if (t <= 0) return t;
        t--;
      }
    }
    whileRowPrevious(e, t, r) {
      for (;;) {
        var n = s.Z.getKeyFromRowCol(e, t);
        if (!r.elements[n].hidden) return e;
        if (e <= 0) return e;
        e--;
      }
    }
    splitOfRowSpan(e, t, r, n, i) {
      for (var o = e + 1; o < e + r; o++) i[o] = this.splitCells(t, n, i[o]);
      return i;
    }
    splitOfColumnSpan(e, t, r, n, i) {
      for (var o = t + 1; o < t + n; o++) i[o] = this.splitCells(e, r, i[o]);
      return i;
    }
    splitCells(e, t, r) {
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (i.from <= e && e + t <= i.to) return r.splice(n, 1, ...this.splitSpan(i, e, e + t)), r;
      }
      return r;
    }
    splitSpan(e, t, r) {
      return e.from == t && e.to == r ? [] : e.from == t ? [{
        from: r,
        to: e.to
      }] : e.to == r ? [{
        from: e.from,
        to: t
      }] : [{
        from: e.from,
        to: t
      }, {
        from: r,
        to: e.to
      }];
    }
  }
  const p = new h();
};
