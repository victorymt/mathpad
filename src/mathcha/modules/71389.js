/* module 71389 — 38042 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    W: () => U
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(61848),
    a = r(70224),
    l = r(30803),
    c = r(10192),
    d = r(69153),
    h = r(49812);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g {
    normalizeDiagram(e, t) {
      var r = u(u({}, e), {}, {
          elements: u({}, e.elements || {}),
          shapes: e.shapes || []
        }),
        n = !1,
        i = r.shapes.map(e => {
          if (!t.isXyMatrix(e)) return e;
          r = t.ensureOwnedEditors(r, e), r = t.layoutOwnedEditors(r, e);
          var i = t.ensureShapeCoversLayout(e, r.elements || {}),
            o = t.generateSource(i, r.elements || {});
          return e.data.source == o && i == e ? e : (n = !0, u(u({}, i), {}, {
            data: u(u({}, i.data), {}, {
              source: o
            })
          }));
        });
      return n && (r = s.A.setProp(r, "shapes", i)), r;
    }
  }
  var m = new g();
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
  var v = 58,
    b = 7.5,
    x = 24,
    C = 22,
    S = {
      rowGapPx: 84,
      colGapPx: 84,
      paddingPx: 32
    };
  class A {
    getSettings(e) {
      var t;
      return y(y({}, S), e.data.settings || {});
    }
    getTopLeft(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2;
      return {
        x: Math.min(r.x, n.x),
        y: Math.min(r.y, n.y)
      };
    }
    getCellCenter(e, t, r, n, i) {
      return this.getCellCenterFromLayout(e, t, r, this.getLayout(e, n, i));
    }
    getCellCenterFromLayout(e, t, r, n) {
      return {
        x: n.x[r] || this.getTopLeft(e).x,
        y: n.y[t] || this.getTopLeft(e).y
      };
    }
    getContentSize(e, t, r) {
      var n = this.getLayout(e, t, r);
      return {
        width: n.width,
        height: n.height
      };
    }
    getCellRect(e, t, r, n, i) {
      var o = n.getCellFallbackSize(),
        s = this.getCellCenter(e, t, r, n, i);
      return {
        left: s.x - o.width / 2,
        top: s.y - o.height / 2,
        width: o.width,
        height: o.height,
        right: s.x + o.width / 2,
        bottom: s.y + o.height / 2
      };
    }
    ensureShapeCoversLayout(e, t, r) {
      var n = this.getTopLeft(e),
        i = Math.abs(e.data.p2.x - e.data.p1.x),
        o = Math.abs(e.data.p2.y - e.data.p1.y),
        s = this.getContentSize(e, t, r),
        a = s.width,
        l = s.height;
      return Math.abs(a - i) < .5 && Math.abs(l - o) < .5 && Math.abs(n.x - e.data.p1.x) < .5 && Math.abs(n.y - e.data.p1.y) < .5 ? e : y(y({}, e), {}, {
        data: y(y({}, e.data), {}, {
          p1: n,
          p2: {
            x: n.x + a,
            y: n.y + l
          }
        })
      });
    }
    getLayout(e, t, r) {
      for (var n = this.getSettings(e), i = this.getTopLeft(e), s = t.getCellFallbackSize(), a = Math.max(1, e.data.cells.length), l = Math.max(1, e.data.cells.reduce((e, t) => Math.max(e, t.length), 0)), c = e.data.cells.map(e => e.map(e => this.estimateCellSize(e, r && r[e.editorId], t))), d = o().range(l).map(e => Math.max(x, ...c.map(t => t[e] ? t[e].width : x))), h = o().range(a).map(e => Math.max(C, ...(c[e] || []).map(e => e.height))), p = this.getCurvePadding(e), u = Math.max(n.paddingPx, p), g = Math.max(u, (d[0] || s.width) / 2), m = Math.max(u, (d[l - 1] || s.width) / 2), f = Math.max(u, (h[0] || s.height) / 2), y = Math.max(u, (h[a - 1] || s.height) / 2), b = [i.x + g], S = 1; S < l; S++) {
        var A = d[S - 1] || s.width,
          w = d[S] || s.width,
          E = Math.max(n.colGapPx, A / 2 + w / 2 + v);
        b[S] = b[S - 1] + E;
      }
      for (var k = [i.y + f], O = 1; O < a; O++) {
        var D = h[O - 1] || s.height,
          P = h[O] || s.height,
          M = Math.max(n.rowGapPx, D / 2 + P / 2 + v);
        k[O] = k[O - 1] + M;
      }
      return {
        x: b,
        y: k,
        cellSizes: c,
        width: g + Math.max(0, o().last(b) - b[0]) + m,
        height: f + Math.max(0, o().last(k) - k[0]) + y
      };
    }
    estimateCellSize(e, t, r) {
      var n = r.getCellFallbackSize();
      if (!t) return n;
      var i,
        o = r.getEditorLatex(t) || r.getEditorText(t),
        s = Math.max(x, this.estimateLatexVisualLength(o) * b),
        a = /[_^]/.test(o),
        l = /\\(frac|sqrt|sum|int|prod|matrix|begin)/.test(o),
        c = C + (a ? 6 : 0) + (l ? 12 : 0);
      return e.frame && "none" != e.frame ? {
        width: Math.max(24, s + 8),
        height: Math.max(22, c + 8)
      } : {
        width: s,
        height: c
      };
    }
    estimateLatexVisualLength(e) {
      return (e || "").replace(/\\[a-zA-Z]+/g, "M").replace(/[\\{}_^]/g, "").length || 1;
    }
    getCurvePadding(e) {
      var t = (e.data.arrows || []).map(e => {
        var t = "above" == e.slide || "below" == e.slide ? 8 : 0;
        switch (e.curve) {
          case "up":
          case "down":
            return 12 + t;
          case "up-1pc":
          case "down-1pc":
            return 22 + t;
          case "up-2pc":
          case "down-2pc":
            return 42 + t;
          default:
            return t;
        }
      });
      return Math.max(0, ...t) + 8;
    }
  }
  var w = new A(),
    E = r(19539);
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function O(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var D = 12,
    P = "no",
    M = "-",
    I = "2>",
    T = 12,
    L = 22,
    R = 42,
    B = 8,
    F = 44;
  class j {
    nextArrowId() {
      return "xya" + Math.random().toString().substr(2);
    }
    createDefaultArrow(e) {
      var t = e[0][0],
        r = e[0][1] || t;
      return {
        id: this.nextArrowId(),
        fromCellKey: t.key,
        toCellKey: r.key,
        direction: "r",
        labels: [],
        style: "normal"
      };
    }
    isSelfLoop(e, t) {
      return !!e && !!t && t.fromCellKey == t.toCellKey;
    }
    getArrowPoints(e, t, r, n) {
      var i = r.getCellByKey(e, t.fromCellKey),
        o = r.getCellByKey(e, t.toCellKey);
      if (!i || !o) return null;
      var s = r.getLayout(e, n),
        a = w.getCellCenterFromLayout(e, i.rowIndex, i.colIndex, s),
        l = w.getCellCenterFromLayout(e, o.rowIndex, o.colIndex, s),
        c = r.getCellFallbackSize(),
        d = s.cellSizes[i.rowIndex][i.colIndex] || c,
        h = s.cellSizes[o.rowIndex][o.colIndex] || c;
      if (this.isSelfLoop(e, t)) return {
        from: this.getLoopEndpoint(i.cell, a, d, t.loopStartDir || "ul"),
        to: this.getLoopEndpoint(o.cell, l, h, t.loopEndDir || "ur")
      };
      var p = this.getSlideOffset({
          from: a,
          to: l
        }, t),
        u = E.A.addPoint(a, p),
        g = E.A.addPoint(l, p);
      return {
        from: this.getCellEdgePoint(i.cell, u, g, d),
        to: this.getCellEdgePoint(o.cell, g, u, h)
      };
    }
    getArrowLabelPoint(e, t, r, n, i) {
      var o = this.getArrowPoints(e, t, n, i);
      if (!o) return w.getTopLeft(e);
      var s = E.A.getCenterPoint(o.from, o.to),
        a = this.getArrowCurveBezier(o, t, e, n, i),
        l = a ? this.getCubicBezierPoint(a, .5) : null;
      if (this.isSelfLoop(e, t)) return a ? this.getLoopLabelPoint(a, r) : s;
      var c = this.getArrowLabelNormal(e, t, o, n);
      if ("middle" == r) return this.getMiddleLabelPoint(o, l || s);
      var d = "below" == r ? -1 : 1;
      return {
        x: (l || s).x + c.x * D * d,
        y: (l || s).y + c.y * D * d
      };
    }
    getArrowCurveBezier(e, t, r, n, i) {
      if (r && n && this.isSelfLoop(r, t)) return this.getLoopBezier(r, t, n, i);
      var o = this.getArrowCurveAmount(t);
      if (!o || !e) return null;
      var s = r && n && this.getCurveEndpointPoints(r, t, n, i, o) || e,
        a = this.getNormal(s),
        l = s.to.x - s.from.x,
        c = s.to.y - s.from.y;
      return {
        p1: s.from,
        cp: {
          x: s.from.x + l / 3 + a.x * o,
          y: s.from.y + c / 3 + a.y * o
        },
        cp2: {
          x: s.from.x + 2 * l / 3 + a.x * o,
          y: s.from.y + 2 * c / 3 + a.y * o
        },
        p2: s.to
      };
    }
    addArrow(e, t, r) {
      var n = t.data.cells[0][0],
        i = t.data.cells[0][1] || n,
        o = O({}, this.createDefaultArrow([[n, i]])),
        s = O(O({}, t), {}, {
          data: O(O({}, t.data), {}, {
            arrows: t.data.arrows.concat([o])
          })
        });
      return r.normalizeDiagram(r.replaceShape(e, s));
    }
    updateArrow(e, t, r, n) {
      var i = t.data.arrows.map(e => e.id == r.id ? r : e);
      return n.normalizeDiagram(n.replaceShape(e, O(O({}, t), {}, {
        data: O(O({}, t.data), {}, {
          arrows: i
        })
      })));
    }
    addArrowLabel(e, t, r, n, i) {
      if (this.getArrowLabels(r).some(e => e.position == n)) return e;
      var o = l.w.nextDiagramControlledEditorId(t.id),
        a = O(O({}, r), {}, {
          labels: this.getArrowLabels(r).concat([{
            position: n,
            editorId: o
          }]),
          labelEditorId: void 0,
          labelPosition: void 0
        });
      return e = s.A.set(e, "elements." + o, i.createOwnedEditor(t.id, o, "label", "")), i.normalizeDiagram(this.updateArrow(e, t, a, i));
    }
    removeArrowLabel(e, t, r, n, i) {
      var o = this.getArrowLabels(r),
        s = o.find(e => e.position == n),
        a = O(O({}, r), {}, {
          labels: o.filter(e => e.position != n),
          labelEditorId: void 0,
          labelPosition: void 0
        });
      return i.replaceShapeAndRemoveEditors(e, O(O({}, t), {}, {
        data: O(O({}, t.data), {}, {
          arrows: t.data.arrows.map(e => e.id == r.id ? a : e)
        })
      }), s ? [s.editorId] : []);
    }
    updateArrowLabelPosition(e, t, r, n, i, o) {
      var s = this.getArrowLabels(r).map(e => e.editorId == n.editorId ? O(O({}, e), {}, {
          position: i
        }) : e),
        a = this.normalizeLabels(s),
        l = s.filter(e => !a.some(t => t.editorId == e.editorId)).map(e => e.editorId),
        c = O(O({}, r), {}, {
          labels: a,
          labelEditorId: void 0,
          labelPosition: void 0
        });
      return o.replaceShapeAndRemoveEditors(e, O(O({}, t), {}, {
        data: O(O({}, t.data), {}, {
          arrows: t.data.arrows.map(e => e.id == r.id ? c : e)
        })
      }), l);
    }
    updateArrowLabelModel(e, t, r, n, i, o) {
      return o.updateEditorModel(e, n.editorId, i);
    }
    removeArrow(e, t, r, n) {
      var i = t.data.arrows.find(e => e.id == r),
        o = t.data.arrows.filter(e => e.id != r),
        s = O(O({}, t), {}, {
          data: O(O({}, t.data), {}, {
            arrows: o
          })
        });
      return n.replaceShapeAndRemoveEditors(e, s, i ? this.getArrowLabels(i).map(e => e.editorId) : []);
    }
    removeArrowsLinkedToEditors(e, t, r) {
      var n = new Set(t),
        i = e.data.arrows.filter(t => {
          var i = r.getCellByKey(e, t.fromCellKey),
            o = r.getCellByKey(e, t.toCellKey);
          return !(i && n.has(i.cell.editorId) || o && n.has(o.cell.editorId));
        });
      return O(O({}, e), {}, {
        data: O(O({}, e.data), {}, {
          arrows: i
        })
      });
    }
    inferDirectionByCellKeys(e, t, r, n) {
      var i = n.getCellByKey(e, t),
        o = n.getCellByKey(e, r);
      if (!i || !o) return "r";
      var s = o.rowIndex - i.rowIndex,
        a = o.colIndex - i.colIndex,
        l = "";
      return s < 0 ? l += this.repeat("u", Math.abs(s)) : s > 0 && (l += this.repeat("d", s)), a < 0 ? l += this.repeat("l", Math.abs(a)) : a > 0 && (l += this.repeat("r", a)), l || "r";
    }
    arrowToSource(e, t, r, n) {
      var i = "\\ar";
      this.getArrowLabels(t).forEach(e => {
        var t = n.getEditorLatex(r[e.editorId]);
        if (t) {
          var o = "below" == e.position ? "_" : "middle" == e.position ? "|" : "^";
          i += o + "{" + t + "}";
        }
      });
      var o = this.arrowStyleToSource(t.style || "normal");
      if (o && (i += "@{" + o + "}"), this.isSelfLoop(e, t)) return i + "@(" + (t.loopStartDir || "ul") + "," + (t.loopEndDir || "ur") + ")[]";
      var s = this.arrowSlideToSource(t.slide || "none");
      s && (i += s);
      var a = this.arrowCurveToSource(t.curve || "none");
      return a && (i += a), i + "[" + this.inferDirectionByCellKeys(e, t.fromCellKey, t.toCellKey, n) + "]";
    }
    getArrowLabels(e) {
      return e.labels && e.labels.length > 0 ? this.normalizeLabels(e.labels) : e.labelEditorId ? [{
        position: e.labelPosition || "above",
        editorId: e.labelEditorId
      }] : [];
    }
    normalizeLabels(e) {
      var t = [];
      return (e || []).filter(e => !(t.indexOf(e.position) >= 0) && (t.push(e.position), !0));
    }
    getArrowTail(e) {
      switch (e.style) {
        case "tail-bar":
          return "|";
        case "hook":
          return "(";
        default:
          return P;
      }
    }
    getArrowShaft(e) {
      switch (e.style) {
        case "dotted":
          return ".";
        case "dashed":
          return "--";
        case "double-line":
          return "2-";
        case "wavy":
          return "~";
        default:
          return M;
      }
    }
    getArrowHead(e) {
      switch (e.style) {
        case "none":
          return "no";
        case "double-head":
          return "2>>";
        default:
          return I;
      }
    }
    arrowStyleToSource(e) {
      switch (e) {
        case "tail-bar":
          return "|->";
        case "none":
          return "-";
        case "hook":
          return "^{(}->";
        case "double-head":
          return "->>";
        case "dotted":
          return ".>";
        case "dashed":
          return "--\x3e";
        case "double-line":
          return "=>";
        case "wavy":
          return "~>";
        default:
          return "";
      }
    }
    arrowCurveToSource(e) {
      switch (e) {
        case "up":
          return "@/^/";
        case "up-1pc":
          return "@/^1pc/";
        case "up-2pc":
          return "@/^2pc/";
        case "down":
          return "@/_/";
        case "down-1pc":
          return "@/_1pc/";
        case "down-2pc":
          return "@/_2pc/";
        default:
          return "";
      }
    }
    arrowSlideToSource(e) {
      switch (e) {
        case "above":
          return "@<1ex>";
        case "below":
          return "@<-1ex>";
        default:
          return "";
      }
    }
    getCubicBezierPoint(e, t) {
      var r = 1 - t;
      return {
        x: r * r * r * e.p1.x + 3 * r * r * t * e.cp.x + 3 * r * t * t * e.cp2.x + t * t * t * e.p2.x,
        y: r * r * r * e.p1.y + 3 * r * r * t * e.cp.y + 3 * r * t * t * e.cp2.y + t * t * t * e.p2.y
      };
    }
    getCubicBezierDerivative(e, t) {
      var r = 1 - t;
      return {
        x: 3 * r * r * (e.cp.x - e.p1.x) + 6 * r * t * (e.cp2.x - e.cp.x) + 3 * t * t * (e.p2.x - e.cp2.x),
        y: 3 * r * r * (e.cp.y - e.p1.y) + 6 * r * t * (e.cp2.y - e.cp.y) + 3 * t * t * (e.p2.y - e.cp2.y)
      };
    }
    getLoopLabelPoint(e, t) {
      var r = .5,
        n = this.getCubicBezierPoint(e, r);
      if ("middle" == t) return n;
      var i = this.getCubicBezierDerivative(e, r),
        o = Math.max(1, Math.sqrt(i.x * i.x + i.y * i.y)),
        s = i.y / o,
        a = -i.x / o,
        l = "below" == t ? -1 : 1;
      return {
        x: n.x + s * D * l,
        y: n.y + a * D * l
      };
    }
    getArrowCurveAmount(e) {
      switch (e.curve) {
        case "up":
          return T;
        case "up-1pc":
          return L;
        case "up-2pc":
          return R;
        case "down":
          return -12;
        case "down-1pc":
          return -22;
        case "down-2pc":
          return -42;
        default:
          return 0;
      }
    }
    getNormal(e) {
      var t = e.to.x - e.from.x,
        r = e.to.y - e.from.y,
        n = Math.max(1, Math.sqrt(t * t + r * r));
      return {
        x: r / n,
        y: -t / n
      };
    }
    getSlideOffset(e, t) {
      var r = this.getArrowSlideAmount(t);
      if (!r || !e) return {
        x: 0,
        y: 0
      };
      var n = this.getNormal(e);
      return {
        x: n.x * r,
        y: n.y * r
      };
    }
    getArrowSlideAmount(e) {
      switch (e.slide) {
        case "above":
          return 8;
        case "below":
          return -8;
        default:
          return 0;
      }
    }
    getCurveEndpointPoints(e, t, r, n, i) {
      var o = r.getCellByKey(e, t.fromCellKey),
        s = r.getCellByKey(e, t.toCellKey);
      if (!o || !s) return null;
      var a = r.getLayout(e, n),
        l = r.getCellFallbackSize(),
        c = w.getCellCenterFromLayout(e, o.rowIndex, o.colIndex, a),
        d = w.getCellCenterFromLayout(e, s.rowIndex, s.colIndex, a),
        h = a.cellSizes[o.rowIndex][o.colIndex] || l,
        p = a.cellSizes[s.rowIndex][s.colIndex] || l,
        u = this.getSlideOffset({
          from: c,
          to: d
        }, t),
        g = E.A.addPoint(c, u),
        m = E.A.addPoint(d, u),
        f = m.x - g.x,
        y = m.y - g.y,
        v = this.getNormal({
          from: g,
          to: m
        });
      return {
        from: this.getEllipseEdgePoint(g, h, {
          x: f / 3 + v.x * i,
          y: y / 3 + v.y * i
        }),
        to: this.getEllipseEdgePoint(m, p, {
          x: -f / 3 + v.x * i,
          y: -y / 3 + v.y * i
        })
      };
    }
    getEllipseEdgePoint(e, t, r) {
      var n = Math.max(4, t.width / 2),
        i = Math.max(4, t.height / 2),
        o = 1 / Math.max(1e-4, Math.sqrt(r.x * r.x / (n * n) + r.y * r.y / (i * i)));
      return {
        x: e.x + r.x * o,
        y: e.y + r.y * o
      };
    }
    getCellEdgePoint(e, t, r, n) {
      return e && "oval" == e.frame ? this.getEllipseEdgePoint(t, n, {
        x: r.x - t.x,
        y: r.y - t.y
      }) : this.getEdgePoint(t, r, n);
    }
    getLoopBezier(e, t, r, n) {
      var i = r.getCellByKey(e, t.fromCellKey);
      if (!i) return null;
      var o = r.getLayout(e, n),
        s = o.cellSizes[i.rowIndex][i.colIndex] || r.getCellFallbackSize(),
        a = w.getCellCenterFromLayout(e, i.rowIndex, i.colIndex, o),
        l = t.loopStartDir || "ul",
        c = t.loopEndDir || "ur",
        d = this.getLoopEndpoint(i.cell, a, s, l),
        h = this.getLoopEndpoint(i.cell, a, s, c),
        p = this.getLoopDirectionVector(l),
        u = this.getLoopDirectionVector(c),
        g = this.getLoopOutwardVector(l, c),
        m = this.getLoopTangentVector(p, g),
        f = this.getLoopTangentVector(u, g);
      return {
        p1: d,
        cp: {
          x: d.x + m.x * F,
          y: d.y + m.y * F
        },
        cp2: {
          x: h.x + f.x * F,
          y: h.y + f.y * F
        },
        p2: h
      };
    }
    getLoopEndpoint(e, t, r, n) {
      var i = this.getLoopDirectionVector(n);
      return e && "oval" == e.frame ? this.getEllipseEdgePoint(t, r, i) : this.getRectangleRayEdgePoint(t, r, i);
    }
    getLoopOutwardVector(e, t) {
      var r = this.getLoopDirectionVector(e),
        n = this.getLoopDirectionVector(t),
        i = r.x + n.x,
        o = r.y + n.y,
        s = Math.sqrt(i * i + o * o);
      return s < 1e-4 && (i = r.x, o = r.y, s = Math.sqrt(i * i + o * o)), {
        x: i / Math.max(1e-4, s),
        y: o / Math.max(1e-4, s)
      };
    }
    getLoopTangentVector(e, t) {
      var r = .72 * e.x + .28 * t.x,
        n = .72 * e.y + .28 * t.y,
        i = Math.sqrt(r * r + n * n);
      return {
        x: r / Math.max(1e-4, i),
        y: n / Math.max(1e-4, i)
      };
    }
    getLoopDirectionVector(e) {
      var t = Math.SQRT1_2;
      switch (e) {
        case "u":
          return {
            x: 0,
            y: -1
          };
        case "ur":
          return {
            x: t,
            y: -t
          };
        case "r":
          return {
            x: 1,
            y: 0
          };
        case "dr":
          return {
            x: t,
            y: t
          };
        case "d":
          return {
            x: 0,
            y: 1
          };
        case "dl":
          return {
            x: -t,
            y: t
          };
        case "l":
          return {
            x: -1,
            y: 0
          };
        default:
          return {
            x: -t,
            y: -t
          };
      }
    }
    getRectangleRayEdgePoint(e, t, r) {
      var n = Math.max(4, t.width / 2),
        i = Math.max(4, t.height / 2),
        o = Math.min(Math.abs(r.x) < 1e-4 ? Number.POSITIVE_INFINITY : n / Math.abs(r.x), Math.abs(r.y) < 1e-4 ? Number.POSITIVE_INFINITY : i / Math.abs(r.y));
      return {
        x: e.x + r.x * o,
        y: e.y + r.y * o
      };
    }
    getEdgePoint(e, t, r) {
      var n = t.x - e.x,
        i = t.y - e.y,
        o = Math.abs(n),
        s = Math.abs(i),
        a = r.width / 2,
        l = r.height / 2;
      return o >= s ? {
        x: e.x + (n >= 0 ? a : -a),
        y: e.y + i * a / Math.max(1, o)
      } : {
        x: e.x + n * l / Math.max(1, s),
        y: e.y + (i >= 0 ? l : -l)
      };
    }
    getArrowLabelNormal(e, t, r, n) {
      var i = n.getCellByKey(e, t.fromCellKey),
        o = n.getCellByKey(e, t.toCellKey);
      if (i && o) {
        var s = o.rowIndex - i.rowIndex,
          a = o.colIndex - i.colIndex;
        if (0 == s && 0 != a) return {
          x: 0,
          y: a > 0 ? -1 : 1
        };
      }
      var l = r.to.x - r.from.x,
        c = r.to.y - r.from.y,
        d = Math.max(1, Math.sqrt(l * l + c * c));
      return {
        x: c / d,
        y: -l / d
      };
    }
    getMiddleLabelPoint(e, t) {
      var r = e.to.x - e.from.x,
        n = e.to.y - e.from.y;
      return Math.abs(r) > Math.abs(n) ? {
        x: t.x,
        y: t.y - 2
      } : t;
    }
    repeat(e, t) {
      for (var r = "", n = 0; n < t; n++) r += e;
      return r;
    }
  }
  var _ = new j();
  function N(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? N(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var H = ["A", "B", "C", "D"],
    W = {
      width: 20,
      height: 20
    };
  class V {
    isXyMatrix(e) {
      return !!e && l.w.isDiagramCompositeShapeId(e.id) && "xymatrix" == e.type;
    }
    createShape(e) {
      var t = c.A.createRectWrapShape(z(z({}, e), {}, {
          shapeWidth: e.shapeWidth || 260,
          shapeHeight: e.shapeHeight || 170
        }), "xymatrix"),
        r = [[this.createCell(t.id, "0_0"), this.createCell(t.id, "0_1")], [this.createCell(t.id, "1_0"), this.createCell(t.id, "1_1")]];
      return t.data = z(z({}, t.data), {}, {
        cells: r,
        arrows: [_.createDefaultArrow(r)],
        settings: {},
        source: ""
      }), t;
    }
    addShapeToDiagram(e, t) {
      if (!this.isXyMatrix(t)) return z(z({}, e), {}, {
        shapes: (e.shapes || []).concat([t])
      });
      var r = z(z({}, e), {}, {
        shapes: (e.shapes || []).concat([t]),
        elements: z({}, e.elements || {})
      });
      return this.normalizeDiagram(r);
    }
    normalizeDiagram(e) {
      return m.normalizeDiagram(e, this);
    }
    ensureOwnedEditors(e, t) {
      var r = z({}, e.elements || {}),
        n = !1;
      return t.data.cells.forEach((e, i) => e.forEach((e, o) => {
        r[e.editorId] || (r[e.editorId] = this.createOwnedEditor(t.id, e.editorId, "cell", H[2 * i + o] || ""), n = !0);
      })), t.data.arrows.forEach(e => {
        this.getArrowLabels(e).forEach(e => {
          r[e.editorId] || (r[e.editorId] = this.createOwnedEditor(t.id, e.editorId, "label", ""), n = !0);
        });
      }), n ? s.A.setProp(e, "elements", r) : e;
    }
    layoutOwnedEditors(e, t) {
      var r = z({}, e.elements || {}),
        n = !1,
        i = this.getLayout(t, r);
      return t.data.cells.forEach((e, o) => e.forEach((e, s) => {
        var a = r[e.editorId];
        if (a) {
          var l = w.getCellCenterFromLayout(t, o, s, i),
            c = this.setEditorPosition(this.setOwnedEditorInfo(a, t.id, "cell"), l, "cell");
          c != a && (r[e.editorId] = c, n = !0);
        }
      })), t.data.arrows.forEach(e => {
        this.getArrowLabels(e).forEach(i => {
          var o = r[i.editorId];
          if (o) {
            var s = this.getArrowLabelPoint(t, e, i.position, r),
              a = this.hasEditorContent(o),
              l = this.setEditorVisibility(this.setEditorPosition(this.setOwnedEditorInfo(o, t.id, "label"), s, "label"), !e.hidden && a);
            l != o && (r[i.editorId] = l, n = !0);
          }
        });
      }), n ? s.A.setProp(e, "elements", r) : e;
    }
    deleteOwnedEditors(e, t) {
      var r = this.getOwnedEditorIds(t);
      if (r.length <= 0) return e;
      var n = z({}, e.elements || {});
      r.forEach(e => delete n[e]);
      var i = (e.connections || []).filter(e => r.indexOf(e.fromEditorId) < 0 && r.indexOf(e.toEditorId) < 0);
      return s.A.update(e, {
        elements: n,
        connections: i
      });
    }
    findOwnerByEditorId(e, t) {
      var r = l.w.getDiagramControlledEditorOwnerId(t);
      if (r) return (e.shapes || []).find(e => e.id == r && this.isXyMatrix(e));
      var n = (e.elements || {})[t];
      return n && n.xyMatrixOwnerId ? (e.shapes || []).find(e => e.id == n.xyMatrixOwnerId && this.isXyMatrix(e)) : (e.shapes || []).find(e => this.isXyMatrix(e) && this.getOwnedEditorIds(e).indexOf(t) >= 0);
    }
    isOwnedEditorId(e, t) {
      return !!this.findOwnerByEditorId(e, t);
    }
    getOwnedEditorIds(e) {
      var t = [];
      return e.data.cells.forEach(e => e.forEach(e => t.push(e.editorId))), e.data.arrows.forEach(e => {
        this.getArrowLabels(e).forEach(e => t.push(e.editorId));
      }), t;
    }
    getCellCenter(e, t, r) {
      return w.getCellCenter(e, t, r, this);
    }
    getContentSize(e, t) {
      return w.getContentSize(e, this, t);
    }
    getCellRect(e, t, r) {
      return w.getCellRect(e, t, r, this);
    }
    getArrowPoints(e, t, r) {
      return _.getArrowPoints(e, t, this, r);
    }
    getArrowCurveBezier(e, t, r, n) {
      return _.getArrowCurveBezier(e, t, r, this, n);
    }
    getArrowSlideOffset(e, t) {
      return _.getSlideOffset(e, t);
    }
    isSelfLoopArrow(e, t) {
      return _.isSelfLoop(e, t);
    }
    getArrowLabelPoint(e, t, r, n) {
      return _.getArrowLabelPoint(e, t, r, this, n);
    }
    getArrowTail(e) {
      return _.getArrowTail(e);
    }
    getArrowShaft(e) {
      return _.getArrowShaft(e);
    }
    getArrowHead(e) {
      return _.getArrowHead(e);
    }
    getArrowLabels(e) {
      return _.getArrowLabels(e);
    }
    updateCellText(e, t, r) {
      var n;
      return (e.elements || {})[t] ? this.updateEditorText(e, t, r) : e;
    }
    updateEditorText(e, t, r) {
      var n = (e.elements || {})[t];
      if (!n) return e;
      var i = z(z({}, n), {}, {
        lines: [z(z({}, n.lines[0] || a.A.createEmptyLine()), {}, {
          blocks: r ? [{
            id: n.lines[0] && n.lines[0].blocks[0] && n.lines[0].blocks[0].id || l.w.nextId(),
            text: r
          }] : []
        })]
      });
      return s.A.set(e, "elements." + t, i);
    }
    updateEditorModel(e, t, r) {
      var n = (e.elements || {})[t];
      if (!n || !r) return e;
      if (n == r) return e;
      var i = this.normalizeEmptyEditor(r);
      return s.A.set(e, "elements." + t, z(z({}, i), {}, {
        id: n.id,
        shape: n.shape,
        isMathDisplayMode: n.isMathDisplayMode,
        xyMatrixOwnerId: n.xyMatrixOwnerId,
        xyMatrixRole: n.xyMatrixRole,
        xyMatrixHidden: n.xyMatrixHidden
      }));
    }
    updateCellFrame(e, t, r, n) {
      var i = t.data.cells.map(e => e.map(e => e.key != r ? e : n && "none" != n ? z(z({}, e), {}, {
        frame: n
      }) : {
        key: e.key,
        editorId: e.editorId
      }));
      return this.replaceShape(e, this.withCells(t, i));
    }
    getEditorText(e) {
      return e && e.lines && e.lines[0] && e.lines[0].blocks && e.lines[0].blocks[0] && e.lines[0].blocks[0].text || "";
    }
    hasEditorContent(e) {
      return !h.A.isEditorEmpty(e) && !(!this.getEditorText(e).trim() && !this.getEditorLatex(e).trim());
    }
    addRow(e, t) {
      var r = Math.max(1, t.data.cells[0] ? t.data.cells[0].length : 1),
        n = t.data.cells.length,
        i = t.data.cells.concat([o().range(r).map(e => this.createCell(t.id, n + "_" + e))]);
      return this.replaceShape(e, this.withCells(t, i));
    }
    addColumn(e, t) {
      var r = t.data.cells.map((e, r) => e.concat([this.createCell(t.id, r + "_" + e.length)]));
      return this.replaceShape(e, this.withCells(t, r));
    }
    removeRow(e, t, r) {
      if (t.data.cells.length <= 1) return e;
      var n = t.data.cells[r].map(e => e.editorId),
        i = t.data.cells.filter((e, t) => t != r);
      return this.replaceShapeAndRemoveEditors(e, this.withCells(t, i), n);
    }
    removeColumn(e, t, r) {
      if (!t.data.cells[0] || t.data.cells[0].length <= 1) return e;
      var n = [],
        i = t.data.cells.map(e => e.filter((e, t) => t != r || (n.push(e.editorId), !1)));
      return this.replaceShapeAndRemoveEditors(e, this.withCells(t, i), n);
    }
    moveRow(e, t, r, n) {
      return r != n && t.data.cells[r] && t.data.cells[n] ? this.replaceShape(e, this.withCells(t, this.moveItem(t.data.cells, r, n))) : e;
    }
    moveColumn(e, t, r, n) {
      if (r == n || !t.data.cells[0] || !t.data.cells[0][r] || !t.data.cells[0][n]) return e;
      var i = t.data.cells.map(e => this.moveItem(e, r, n));
      return this.replaceShape(e, this.withCells(t, i));
    }
    addArrow(e, t) {
      return _.addArrow(e, t, this);
    }
    updateArrow(e, t, r) {
      return _.updateArrow(e, t, r, this);
    }
    addArrowLabel(e, t, r, n) {
      return _.addArrowLabel(e, t, r, n, this);
    }
    removeArrowLabel(e, t, r, n) {
      return _.removeArrowLabel(e, t, r, n, this);
    }
    updateArrowLabelPosition(e, t, r, n, i) {
      return _.updateArrowLabelPosition(e, t, r, n, i, this);
    }
    updateArrowLabelModel(e, t, r, n, i) {
      return _.updateArrowLabelModel(e, t, r, n, i, this);
    }
    removeArrow(e, t, r) {
      return _.removeArrow(e, t, r, this);
    }
    generateSource(e, t) {
      var r = e.data.cells.map(r => r.map(r => {
        var n = this.getEditorLatexOrEmptyCell(t[r.editorId]),
          i = e.data.arrows.filter(e => !e.hidden && e.fromCellKey == r.key).map(r => _.arrowToSource(e, r, t, this)).join("");
        return this.wrapCellSource(r, n || "{}") + i;
      }).join(" & "));
      return "\\xymatrix" + this.getSourceSpacingOptions(e) + "{\n" + r.join(" \\\\\n") + "}";
    }
    wrapCellSource(e, t) {
      switch (e.frame) {
        case "rectangle":
          return "*+[F]{" + t + "}";
        case "double-rectangle":
          return "*+[F=]{" + t + "}";
        case "oval":
          return "*+[o][F]{" + t + "}";
        case "dotted":
          return "*+[F.]{" + t + "}";
        default:
          return t;
      }
    }
    getEditorLatexOrEmptyCell(e) {
      return e && this.getEditorText(e).trim() ? this.getEditorLatex(e) : "";
    }
    getSourceSpacingOptions(e) {
      var t = this.getSettings(e),
        r = "";
      return Math.abs(t.colGapPx - S.colGapPx) >= 1 && (r += "@C=" + this.pxToPc(t.colGapPx) + "pc"), Math.abs(t.rowGapPx - S.rowGapPx) >= 1 && (r += "@R=" + this.pxToPc(t.rowGapPx) + "pc"), r;
    }
    pxToPc(e) {
      return Math.max(.5, e / 32).toFixed(1).replace(/\.0$/, "");
    }
    inferDirectionByCellKeys(e, t, r) {
      return _.inferDirectionByCellKeys(e, t, r, this);
    }
    replaceShape(e, t) {
      var r = s.A.replaceArrayByEntity(e.shapes || [], t),
        n = s.A.setProp(e, "shapes", r);
      return this.normalizeDiagram(n);
    }
    getShape(e, t) {
      return (e.shapes || []).find(e => e.id == t);
    }
    replaceShapeAndRemoveEditors(e, t, r) {
      var n = z({}, e.elements || {});
      r.forEach(e => delete n[e]), t = _.removeArrowsLinkedToEditors(t, r, this);
      var i = s.A.setProp(e, "elements", n);
      return this.replaceShape(i, t);
    }
    withCells(e, t) {
      return z(z({}, e), {}, {
        data: z(z({}, e.data), {}, {
          cells: t
        })
      });
    }
    moveItem(e, t, r) {
      var n = e.slice(),
        i = n.splice(t, 1)[0];
      return n.splice(r, 0, i), n;
    }
    createCell(e, t) {
      return {
        key: t,
        editorId: l.w.nextDiagramControlledEditorId(e)
      };
    }
    createOwnedEditor(e, t, r, n) {
      var i = n ? a.A.createOneTextEditor(n, t) : this.createEmptyOwnedEditor(t);
      return i.shape = {
        data: {
          p: {
            x: 0,
            y: 0
          },
          size: void 0
        },
        anchor: "center"
      }, i.isMathDisplayMode = !0, i.xyMatrixOwnerId = e, i.xyMatrixRole = r, i;
    }
    createEmptyOwnedEditor(e) {
      var t;
      return z(z({}, a.A.createEmptyEditor()), {}, {
        id: e
      });
    }
    normalizeEmptyEditor(e) {
      if (!e || !e.lines || 1 != e.lines.length || !e.lines[0]) return e;
      var t = e.lines[0].blocks || [];
      return 1 != t.length || t[0].type || (t[0].text || "").trim() ? e : z(z({}, e), {}, {
        lines: [z(z({}, e.lines[0]), {}, {
          blocks: []
        })]
      });
    }
    setEditorPosition(e, t, r) {
      var n = e.shape && e.shape.data && e.shape.data.p,
        i = n && Math.abs(n.x - t.x) < .5 && Math.abs(n.y - t.y) < .5,
        o = e.shape && "center" == e.shape.anchor,
        s = "label" == r || !(e.shape && e.shape.data && e.shape.data.size);
      return i && o && s ? e : z(z({}, e), {}, {
        shape: z(z({}, e.shape || {}), {}, {
          anchor: "center",
          data: z(z({}, e.shape && e.shape.data || {}), {}, {
            p: t,
            size: "cell" == r ? void 0 : e.shape && e.shape.data && e.shape.data.size
          })
        })
      });
    }
    setOwnedEditorInfo(e, t, r) {
      var n = e;
      return n.xyMatrixOwnerId == t && n.xyMatrixRole == r ? e : z(z({}, e), {}, {
        xyMatrixOwnerId: t,
        xyMatrixRole: r
      });
    }
    setEditorVisibility(e, t) {
      var r;
      return e.xyMatrixHidden == !t ? e : z(z({}, e), {}, {
        xyMatrixHidden: !t
      });
    }
    ensureShapeCoversLayout(e, t) {
      return w.ensureShapeCoversLayout(e, this, t);
    }
    getLayout(e, t) {
      return w.getLayout(e, this, t);
    }
    getCellFallbackSize() {
      return W;
    }
    getSettings(e) {
      return w.getSettings(e);
    }
    getTopLeft(e) {
      return w.getTopLeft(e);
    }
    getCellByKey(e, t) {
      for (var r = 0; r < e.data.cells.length; r++) for (var n = e.data.cells[r], i = 0; i < n.length; i++) if (n[i].key == t) return {
        rowIndex: r,
        colIndex: i,
        cell: n[i]
      };
    }
    getEditorLatex(e) {
      return e ? d.Ay.toLatexFromEditor(e, {
        inMathExpression: !0,
        mathTypeHtml: null,
        pageSettings: null,
        convertedInfo: new d.xx()
      }) : "";
    }
  }
  var U = new V();
};
