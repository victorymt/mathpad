/* module 56069 — 23703 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => V
  });
  var n = r(64467),
    i = r(30803),
    o = r(61848),
    s = r(75663),
    a = r(2543),
    l = r.n(a),
    c = r(86835),
    d = r(391),
    h = r(48662),
    p = r(71389);
  class u {
    deleteEntity(e, t) {
      if (i.w.isDiagramShapeOrArrowOrCompositeId(t.id) || i.w.isDiagramGroupId(t.id)) {
        var r = l().findIndex(e.shapes, e => e.id == t.id),
          n = o.A.remove(e.shapes, r),
          a = o.A.setProp(e, "shapes", n),
          c = s.A.removeEntity(e.intersections, t);
        return a = o.A.setProp(a, "intersections", c), p.W.isXyMatrix(t) && (a = p.W.deleteOwnedEditors(a, t)), a;
      }
      if (i.w.isDiagramConnectionId(t.id)) return this.deleteConnection(e, t);
      if (i.w.isDiagramEditorId(t.id)) {
        var d = l().clone(e.elements);
        delete d[t.id];
        var h = this.findDAllConnectionsLinkToEditor(e.connections, t.id);
        return o.A.update(e, {
          connections: h.connections,
          elements: d
        });
      }
      return e;
    }
    deleteEntities(e, t) {
      return (t = l().sortBy(t, e => {
        switch (c.A.getEntityType(e)) {
          case "connection":
            return 2;
          case "text":
            return 10;
        }
      })).forEach(t => e = this.deleteEntity(e, t)), e;
    }
    deleteConnection(e, t) {
      var r = l().findIndex(e.connections, e => e.id == t.id),
        n = o.A.remove(e.connections, r),
        i = l().findIndex(n, e => h.A.isConnectTheSame2Editor(e, t));
      return i >= 0 && (n = o.A.setIndex(n, i, d.A.setSetting(n[i], "perpendicularDistance", 0))), o.A.setProp(e, "connections", n);
    }
    findDAllConnectionsLinkToEditor(e, t) {
      var r = {
        deletedConnections: [],
        connections: []
      };
      return e.forEach(e => {
        var n;
        e.fromEditorId != t && e.toEditorId != t ? r.connections.push(e) : r.deletedConnections.push(e);
      }), r;
    }
  }
  const g = new u();
  var m = r(96411),
    f = r(62993),
    y = r(19539),
    v = r(89870),
    b = r(99942),
    x = r(51022),
    C = r(92604),
    S = r(3453),
    A = r(73700),
    w = r(15783),
    E = r(96860),
    k = r(62970),
    O = r(33535);
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
  class M {
    constructor() {
      (0, n.A)(this, "emptyMovingInfo", {
        snapToGridSize: 0,
        shapesToSnap: [],
        groupBox: {
          p1: {
            x: 0,
            y: 0
          },
          p2: {
            x: 0,
            y: 0
          }
        },
        vGuidesToSnap: [],
        hGuidesToSnap: []
      });
    }
    moveEntities(e, t, r, n, o) {
      if (!n) return {
        diagram: e
      };
      if (!t || 0 == t.length) return {
        diagram: e
      };
      var s = 1 == t.length,
        a = s && !i.w.isDiagramEditorId(t[0].id),
        l = s && !a,
        c = t[0],
        d = n.vGuidesToSnap || [],
        h = n.hGuidesToSnap || [];
      if (a) {
        var p = m.A.moveShapes([c], r),
          u,
          g = (0, S.A)(p, 1)[0];
        if (null == g) return {
          diagram: e
        };
        var y = n.shapesToSnap.length > 0 ? E.A.detect(g, n.shapesToSnap, [], 5 / o.zoomRatio) : null,
          v;
        (d.length > 0 || h.length > 0) && (v = w.A.detectGuides(d, h, [g]));
        var b = this.handleGuidesDetectResult(v, y, r, e, t);
        if (b) return b;
      }
      if (l && n.editorGuideSnapInfo) {
        var x = f.A.moveEditors(t, r),
          C,
          D = (0, S.A)(x, 1)[0],
          M,
          I;
        if (n.shapesToSnap.length > 0) if (D.shape.data.size) {
          var T = f.A.convertToRectangleLikeData(D.shape.data),
            L = O.A.rectTo4Points(T);
          M = E.A.detectPoints(L.concat([D.shape.data.p]), n.shapesToSnap, [], 5 / o.zoomRatio);
        } else M = E.A.detectPoint(D.shape.data.p, n.shapesToSnap, [], 5 / o.zoomRatio);
        if (d.length > 0 || h.length > 0) {
          var R = A.A.getTemporaryShapes(n.editorGuideSnapInfo, [D]),
            B,
            F = (0, S.A)(R, 1)[0];
          I = w.A.detectGuides(d, h, [F]);
        }
        var j = this.handleGuidesDetectResult(I, M, r, e, t);
        if (j) return j;
      }
      if (n.snapToGridSize < 2) return {
        diagram: this.internalMoveEntities(e, t, r)
      };
      var _ = {
        gridSize: n.snapToGridSize,
        delta: r,
        diagram: e,
        groupBox: n.groupBox
      };
      if (a) {
        var N = k.A.snapSingle(c, _),
          z = N.delta,
          H;
        return N.handled ? {
          diagram: this.internalMoveEntities(e, t, z, P(P({}, _), {}, {
            gridSize: 0
          }))
        } : {
          diagram: this.internalMoveEntities(e, t, z, _)
        };
      }
      var W = k.A.snapEntities(t, _);
      return {
        diagram: this.internalMoveEntities(e, t, W.delta, P(P({}, _), {}, {
          gridSize: 0
        }))
      };
    }
    moveEntitiesIgnoreSnap(e, t, r) {
      return this.internalMoveEntities(e, t, r);
    }
    internalMoveEntities(e, t, r, n) {
      var i = m.A.moveShapes(t, r, n),
        o = m.A.setShapesInData(e, i),
        s = f.A.moveEditors(t, r);
      o = f.A.setEditorsInData(o, s);
      var a = v.A.findAllOriginalEditors(t, e.elements);
      if (a && a.length > 0) {
        var l = f.A.moveEditors(a, r);
        o = f.A.setEditorsInData(o, l);
      }
      return p.W.normalizeDiagram(o);
    }
    handleGuidesDetectResult(e, t, r, n, i) {
      if (e) switch (e.type) {
        case "both":
          var o = y.A.distanceFromVector(e.delta);
          if (null == t || o < t.distance) {
            var s = y.A.addPoint(r, e.delta);
            return {
              diagram: this.internalMoveEntities(n, i, s),
              snapPoints: [e.hSnapPoint, e.vSnapPoint]
            };
          }
          break;
        case "horizontal":
          var a = e.yDelta;
          if (null == t || a < t.distance) {
            var l = y.A.addPoint(r, {
                x: 0,
                y: e.yDelta
              }),
              c = [e.snapPoint];
            return {
              diagram: this.internalMoveEntities(n, i, l),
              snapPoints: c
            };
          }
          break;
        case "vertical":
          var d = e.xDelta;
          if (null == t || d < t.distance) {
            var h = y.A.addPoint(r, {
                x: e.xDelta,
                y: 0
              }),
              p = [e.snapPoint];
            return {
              diagram: this.internalMoveEntities(n, i, h),
              snapPoints: p
            };
          }
      }
      if (t) {
        var u = y.A.addPoint(r, t.delta);
        return {
          diagram: this.internalMoveEntities(n, i, u),
          snapPoints: [t.snapPoint]
        };
      }
    }
  }
  const I = new M();
  class T {
    getSize(e, t) {
      return "distribute-horizontally" == t ? y.A.rectWidth(e) : y.A.rectHeight(e);
    }
    buildDeltaFirstMinusSecond(e, t, r) {
      return "distribute-horizontally" == r ? {
        x: e.x - t.x,
        y: 0
      } : {
        x: 0,
        y: e.y - t.y
      };
    }
    buildDeltaFirstNumberMinusSecond(e, t, r) {
      return "distribute-horizontally" == r ? {
        x: e - t.x,
        y: 0
      } : {
        x: 0,
        y: e - t.y
      };
    }
    getXOrY(e, t) {
      return "distribute-horizontally" == t ? e.x : e.y;
    }
    getLeftSize(e, t, r, n) {
      return "distribute-horizontally" == n ? Math.min(t.rect.p2.x - e.p1.x, r.rect.p1.x - e.p1.x) : Math.min(t.rect.p2.y - e.p1.y, r.rect.p1.y - e.p1.y);
    }
    getRightSize(e, t, r, n) {
      return "distribute-horizontally" == n ? Math.min(e.p2.x - r.rect.p1.x, e.p2.x - t.rect.p2.x) : Math.min(e.p2.y - r.rect.p1.y, e.p2.y - t.rect.p2.y);
    }
    deltaWithinBox(e, t, r) {
      var n = {
          x: r.p1.x - t.p1.x,
          y: r.p1.y - t.p1.y
        },
        i = {
          x: r.p2.x - t.p2.x,
          y: r.p2.y - t.p2.y
        };
      return {
        x: l().clamp(e.x, n.x, i.x),
        y: l().clamp(e.y, n.y, i.y)
      };
    }
    distributeEntities(e, t, r, n) {
      var o = C.A.getFromEntities(t, r),
        s = t.map(e => {
          if (i.w.isDiagramConnectionId(e.id)) return null;
          var t = C.A.get(e, r);
          return t ? {
            entity: e,
            rect: t,
            center: y.A.getCenterPoint(t)
          } : null;
        }).filter(e => e);
      "distribute-horizontally" == n && (s = l().sortBy(s, e => e.rect.p2.x)), "distribute-vertically" == n && (s = l().sortBy(s, e => e.rect.p2.y));
      var a = l().first(s),
        c = l().last(s),
        d = this.getSize(o, n),
        h = this.getLeftSize(o, a, c, n),
        p = this.getRightSize(o, a, c, n),
        u = Math.max(0, d - h - p),
        g = s.slice(1, s.length - 1),
        m,
        f = u - l().sumBy(g, e => this.getSize(e.rect, n)),
        v = y.A.round2(f / (g.length + 1)),
        b = this.buildDeltaFirstMinusSecond(o.p1, a.rect.p1, n),
        x = this.buildDeltaFirstMinusSecond(o.p2, c.rect.p2, n),
        S = e;
      S = I.moveEntitiesIgnoreSnap(S, [a.entity], b), S = I.moveEntitiesIgnoreSnap(S, [c.entity], x);
      for (var A = this.getXOrY(o.p1, n) + h + v / 2, w = 1; w < s.length - 1; w++) {
        var E = s[w],
          k,
          O = this.getSize(E.rect, n) + v,
          D = A + O / 2,
          P = this.buildDeltaFirstNumberMinusSecond(D, E.center, n);
        P = this.deltaWithinBox(P, E.rect, o), S = I.moveEntitiesIgnoreSnap(S, [E.entity], P), A += O;
      }
      return S;
    }
  }
  const L = new T();
  var R = r(86081),
    B = r(65620),
    F = r(91355),
    j = r(83084),
    _ = r(94214),
    N = r(10192);
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
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class W {
    isMultipleEntitiesSelected(e) {
      var t;
      return B.A.getSelectedIdsOrEmpty(e).length > 1;
    }
    isAtleast3EntitiesSelected(e) {
      var t;
      return B.A.getSelectedIdsOrEmpty(e).filter(e => !i.w.isDiagramConnectionId(e)).length > 2;
    }
    isGroupEntitySelected(e, t) {
      if (!t) return !1;
      var r = B.A.getSelectedIdsOrEmpty(e);
      if (1 != r.length) return !1;
      var n = r[0],
        o = t.shapes.find(e => e.id == n);
      return o && i.w.isDiagramGroupId(o.id);
    }
    smoothBezierEntityIfRequire(e) {
      var t;
      if (d.A.getSettings(e, "isControlPointBreak")) return e;
      var r = y.A.smoothBeziers(e.data);
      return e = o.A.setProp(e, "data", r);
    }
    moveMainControlPoint(e, t, r, n) {
      if (c.A.isShapeArrow(e) && c.A.isStraightLineArrow(e)) {
        if (!e.data[t]) return e;
        r = r || y.A.addPoint(e.data[t], n);
        var i = o.A.setIndex(e.data, t, r);
        return o.A.setProp(e, "data", i);
      }
      if (c.A.isPrimitiveShape(e) && c.A.isPolygon(e)) {
        if (!e.data[t]) return e;
        r = r || y.A.addPoint(e.data[t], n);
        var s = o.A.setIndex(e.data, t, r);
        return o.A.setProp(e, "data", s);
      }
      if (c.A.isShapeArrow(e) && c.A.isCubicLineArrow(e) || c.A.isPrimitiveShape(e) && c.A.isPolygonCurve(e)) {
        if (!r) {
          var a = e.data.length;
          r = t < a ? y.A.addPoint(e.data[t].p1, n) : y.A.addPoint(e.data[a - 1].p2, n);
        }
        var l = e.data,
          h = c.A.isPolygonCurve(e),
          p;
        return l = y.A.moveCubicBeizerPoint(l, t, r, h), d.A.getSettings(e, "isControlPointBreak") || (l = y.A.smoothBeziers(l, h)), o.A.setProp(e, "data", l);
      }
    }
    mergeLines(e, t, r, n) {
      var i,
        o,
        s,
        a = e[0].blocks[0],
        l;
      if (!a && null != n && null !== (i = n.originalPastedLines) && void 0 !== i && null !== (o = i[0]) && void 0 !== o && null !== (s = o.blocks) && void 0 !== s && s[0] && (a = n.originalPastedLines[0].blocks[0]), !a) return console.warn("missing pasted data"), {
        block: t,
        selected: r
      };
      if (R.A.isMathContainer(a)) {
        var c = a.elements.mathValue.lines,
          d;
        if (!(1 == c.length && 1 == c[0].blocks.length) || !R.A.isDiagramBlock(c[0].blocks[0])) return {
          block: t,
          selected: r
        };
        a = c[0].blocks[0];
      }
      return R.A.isDiagramBlock(a) ? {
        block: this.mergeBlock(a, t, n),
        selected: H(H({}, r), {}, {
          controlSelectedInfo: {
            selectedIds: this.getAllSelectableEntityIds(a)
          }
        })
      } : (console.log("not supported merge arbitrary items"), {
        block: t,
        selected: r
      });
    }
    mergeBlock(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = {
          left: Number.MIN_SAFE_INTEGER,
          top: Number.MIN_SAFE_INTEGER,
          right: Number.MAX_SAFE_INTEGER,
          bottom: Number.MAX_SAFE_INTEGER
        },
        i = t.isInline ? d.A.getSettings(t, "diagramWidth") : r.docWidth || 700,
        o = r.retainShapesInHeight ? d.A.getSettings(t, "diagramHeight") : void 0;
      if (r.dgInstance && r.retainShapesInHeight) {
        var s = r.dgInstance.getShapeCreationInfo();
        n = N.A.extractBoundary(s);
      } else if (r.retainShapesInHeight) {
        n.left = 0, n.right = i;
        var a = o;
        void 0 !== a && (n.top = 0, n.bottom = a);
      }
      r.keepPosition || (e = this.moveAllEntities(e, {
        x: 20,
        y: 20
      }, n, i, o));
      var c = l().clone(t);
      return c.connections = t.connections.concat(e.connections), c.intersections = l().clone(t.intersections), c.intersections.items = t.intersections.items.concat(e.intersections.items), c.elements = l().clone(t.elements), c.shapes = t.shapes.concat(e.shapes), F.A.getDiagramEditorKeys(e.elements).forEach(t => {
        "caption" != t && (c.elements[t] = e.elements[t]);
      }), c;
    }
    getAllSelectableEntityIds(e) {
      return e.connections.filter(e => !e.isInGroup).map(e => e.id).concat(F.A.getDiagramEditorKeys(e.elements).filter(t => !e.elements[t].isInGroup && !p.W.isOwnedEditorId(e, t))).concat(e.shapes.map(e => e.id));
    }
    moveEntitiesByIds(e, t, r, n) {
      var i = this.getEntities(e, t, !1);
      return I.moveEntities(e, i, r, I.emptyMovingInfo, n);
    }
    moveEntities(e, t, r, n, i) {
      return I.moveEntities(e, t, r, n, i);
    }
    distributeEntities(e, t, r, n) {
      return L.distributeEntities(e, t, r, n);
    }
    alignEntities(e, t, r, n) {
      if ("distribute-horizontally" == n || "distribute-vertically" == n) return this.distributeEntities(e, t, r, n);
      var i = C.A.getFromEntities(t, r),
        o = m.A.alignShapes(t, r, n, i),
        s = o.newShapes,
        a = o.movedLinkedItems,
        l = m.A.setShapesInData(e, s),
        c = f.A.alignEditors(t, r, n, i);
      l = f.A.setEditorsInData(l, c);
      var d = v.A.findAllOriginalEditors(t, e.elements);
      if (d && d.length > 0) {
        var h = [];
        d.forEach(e => {
          var t = a.find(t => t.linkedEntity.linkedId == e.id);
          t && h.push(f.A.moveEditor(e, t.delta));
        }), l = f.A.setEditorsInData(l, h);
      }
      return l;
    }
    changePropertyEntities(e, t, r, n, i, o) {
      var s = this.innerChangePropertyEntities(t, r, n, i, o),
        a = v.A.findAllOriginalEditorIds(t);
      if (a && a.length > 0) {
        var l = b.A.findConnectedEditorAndConnections(a, e),
          c = x.A.getEntitiesByIds(l, e);
        s = s.concat(this.innerChangePropertyEntities(c, r, n, i, o));
      }
      return s;
    }
    innerChangePropertyEntities(e, t, r, n, s) {
      var a;
      return l().map(e, e => {
        if (c.A.isDiagramEditor(e)) {
          if ("data" == t) {
            if ("rotation" == r) {
              var a = j.x.shiftToKeepCenter(e.shape.data, H(H({}, e.shape.data), {}, {
                rotation: n
              }), e.shape.anchor, s[e.id].editor.parentElement);
              return H(H({}, e), {}, {
                shape: H(H({}, e.shape), {}, {
                  data: a
                })
              });
            }
            if ("skewX" == r) {
              var l = j.x.shiftToKeepCenter(e.shape.data, H(H({}, e.shape.data), {}, {
                skewX: n
              }), e.shape.anchor, s[e.id].editor.parentElement);
              return H(H({}, e), {}, {
                shape: H(H({}, e.shape), {}, {
                  data: l
                })
              });
            }
          }
          if (null == t && "anchor" == r) {
            var d = _.D.repositionForAnchorChange(e, n, s[e.id].editor.parentElement);
            return H(H({}, e), {}, {
              shape: H(H({}, e.shape), {}, {
                anchor: n,
                data: H(H({}, e.shape.data), {}, {
                  p: d
                })
              })
            });
          }
          var h = this.changePropertyForShape(e.shape, t, r, n);
          return o.A.setProp(e, "shape", h);
        }
        if (i.w.isDiagramGroupId(e.id)) {
          var p = e,
            u = this.innerChangePropertyEntities(p.entities, t, r, n, s);
          return H(H({}, p), {}, {
            entities: u
          });
        }
        return i.w.isDiagramLinkedId(e.id) ? e : this.changePropertyForShape(e, t, r, n);
      });
    }
    changePropertyForShape(e, t, r, n) {
      if (t) {
        var i = e[t] || {};
        return i = o.A.setProp(i, r, n), o.A.setProp(e, t, i);
      }
      return o.A.setProp(e, r, n);
    }
    getBoundaryOfEntities(e, t) {
      var r = m.A.getMinMaxBoundaryEntities(e);
      return F.A.getDiagramEditorKeys(t).forEach(e => {
        r.top = Math.min(r.top, t[e].shape.data.p.y - 30), r.bottom = Math.max(r.bottom, t[e].shape.data.p.y + 30), r.left = Math.min(r.left, t[e].shape.data.p.x - 30), r.right = Math.max(r.right, t[e].shape.data.p.x + 30);
      }), y.A.extendRectBounding(r, 10);
    }
    moveAllEntities(e, t, r, n, i) {
      var o = this.getBoundaryOfEntities(e.shapes, e.elements),
        s = y.A.tryToFixInsideRectBounding(y.A.moveRectBounding(o, t), r),
        a = y.A.tryToFixInsideRectBounding(s, {
          left: 0,
          top: 0,
          right: n,
          bottom: i
        }),
        l = {
          x: a.left - o.left,
          y: a.top - o.top
        };
      return e.shapes = m.A.moveShapes(e.shapes, l), F.A.getDiagramEditorKeys(e.elements).forEach(t => {
        e.elements[t] = f.A.moveEditor(e.elements[t], l);
      }), e;
    }
    removeEntities(e, t) {
      var r = this.getEntities(e, t, !1);
      return g.deleteEntities(e, r);
    }
    removeEntitiesAndRelating(e, t) {
      var r = this.getEntities(e, t, !0);
      return g.deleteEntities(e, r);
    }
    extractSelectedEntities(e, t) {
      var r = l().clone(e),
        n = this.expandSelectedIdsForCompositeOwnedEditors(e, t);
      r.elements = this.filterElements(e.elements, n);
      var o = new Set(F.A.getDiagramEditorKeys(r.elements));
      r.connections = l().filter(e.connections, e => n.has(e.id) && o.has(e.fromEditorId) && o.has(e.toEditorId)), r.shapes = l().filter(e.shapes, e => t.has(e.id));
      var s = l().map(r.shapes, e => e.id);
      r.intersections = l().clone(e.intersections), r.intersections.items = l().filter(e.intersections.items, e => {
        if (e.entities.length > 1) throw new Error("not implemented this intersection");
        return s.indexOf(e.entities[0]) >= 0;
      });
      var a = e.shapes.filter(e => i.w.isDiagramGroupId(e.id) && t.has(e.id)),
        c = v.A.findAllOriginalEditors(a, e.elements);
      return this.appendMoreInformationForLinkedEntities(c, e, r), r;
    }
    expandSelectedIdsForCompositeOwnedEditors(e, t) {
      var r = t;
      return (e.shapes || []).forEach(e => {
        t.has(e.id) && p.W.isXyMatrix(e) && (r == t && (r = new Set(t)), p.W.getOwnedEditorIds(e).forEach(e => r.add(e)));
      }), r;
    }
    appendMoreInformationForLinkedEntities(e, t, r) {
      var n = e.map(e => e.id),
        o;
      b.A.findConnectedEditorAndConnections(n, t).forEach(e => {
        i.w.isDiagramEditorId(e) ? r.elements[e] || (r.elements[e] = t.elements[e]) : i.w.isDiagramConnectionId(e) && (r.connections.some(t => t.id == e) || r.connections.push(t.connections.find(t => t.id == e)));
      });
    }
    filterElements(e, t) {
      var r = {};
      return F.A.getDiagramEditorKeys(e).forEach(n => {
        t.has(n) && (r[n] = e[n]);
      }), r;
    }
    findSelectedAtDiagramEditor(e) {
      return e.key && i.w.isStrictDiagramEditorId(e.key) ? e : e.selected ? this.findSelectedAtDiagramEditor(e.selected) : null;
    }
    buildDiagramControlledSelected(e) {
      var t = l().cloneDeep(e),
        r = this.findSelectedAtDiagramEditor(t);
      if (r) return r.controlSelectedInfo = {
        selectedIds: [r.key]
      }, r.selected = null, r.key = null, r.controlled = !0, t;
    }
    getEntities(e, t, r) {
      var n = this,
        o = c.A.extractAllEntities(e);
      if (!r) return o.filter(e => t.has(e.id));
      for (var s = [], a = function r(a) {
          var l = o[a];
          if (!t.has(l.id)) return "continue";
          if (s.push(l), i.w.isDiagramGroupId(l.id)) {
            var c = v.A.findAllOriginalEditorIds([e.shapes.find(e => e.id == l.id)]);
            if (c.length > 0) {
              var d = b.A.findConnectedEditorAndConnections(c, e);
              s = s.concat(n.getEntities(e, new Set(d), !1));
            }
          }
        }, l = 0; l < o.length; l++) var d = a(l);
      return s;
    }
    changeConnection(e, t, r, n) {
      var i = l().findIndex(e, e => e.id == t),
        s = e[i],
        a = o.A.setProp(s, r, n);
      return o.A.setIndex(e, i, a);
    }
    changeConnectionObj(e, t, r) {
      var n = l().findIndex(e, e => e.id == t),
        i = e[n],
        s = o.A.update(i, r);
      return o.A.setIndex(e, n, s);
    }
    changeConnectionInData(e, t, r, n) {
      return o.A.setProp(e, "connections", this.changeConnection(e.connections, t, r, n));
    }
    getDataValue(e, t, r) {
      var n, i;
      c.A.isDiagramEditor(e) ? n = e.shape.data[t] : n = (e.data || {})[t];
      return void 0 === n ? r : n;
    }
  }
  const V = new W();
};
