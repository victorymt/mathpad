/* module 96411 — 6558 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y
  });
  var n = r(64467),
    i = r(19539),
    o = r(2543),
    s = r.n(o),
    a = r(30803),
    l = r(21744),
    c = r(61848),
    d = r(21774),
    h = r(92604),
    p = r(70884),
    u = r(86835);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f {
    getMinMaxBoundaryEntities(e) {
      var t = {
          min: Number.MAX_SAFE_INTEGER,
          max: Number.MIN_SAFE_INTEGER
        },
        r = {
          min: Number.MAX_SAFE_INTEGER,
          max: Number.MIN_SAFE_INTEGER
        };
      return s().forEach(e, e => {
        if (a.w.isDiagramShapeOrArrowOrCompositeId(e.id)) {
          var n = this.getVerticalMinMax(e),
            i = this.getHorizontalMinMax(e);
          t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max), r.min = Math.min(r.min, i.min), r.max = Math.max(r.max, i.max);
        }
      }), {
        left: r.min,
        top: t.min,
        right: r.max,
        bottom: t.max
      };
    }
    getVerticalMinMaxEntities(e) {
      var t = {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER
      };
      return s().forEach(e, e => {
        if (a.w.isDiagramShapeOrArrowOrCompositeId(e.id)) {
          var r = this.getVerticalMinMax(e);
          t = {
            min: Math.min(t.min, r.min),
            max: Math.max(t.max, r.max)
          };
        }
      }), t;
    }
    getHorizontalMinMaxEntities(e) {
      var t = {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER
      };
      return s().forEach(e, e => {
        if (a.w.isDiagramShapeOrArrowOrCompositeId(e.id)) {
          var r = this.getHorizontalMinMax(e);
          t = {
            min: Math.min(t.min, r.min),
            max: Math.max(t.max, r.max)
          };
        }
      }), t;
    }
    alignShapes(e, t, r, n) {
      for (var i = [], o = [], s = 0; s < e.length; s++) {
        var l = e[s];
        if (a.w.isDiagramShapeOrArrowOrCompositeId(l.id) || a.w.isDiagramGroupId(l.id)) {
          var c = h.A.get(l, t),
            d = p.A.calculateDeltaFromAlignment(n, c, r);
          i.push(this.moveEntity(l, d, {
            movedLinkedItems: o
          }));
        }
        a.w.isDiagramLinkedId(l.id) && i.push(l);
      }
      return {
        newShapes: i,
        movedLinkedItems: o
      };
    }
    moveShapes(e, t, r) {
      return this.internalMoveShapes(e, t, {
        snapGridOptions: r
      });
    }
    internalMoveShapes(e, t, r) {
      for (var n = [], i = 0; i < e.length; i++) {
        var o = this.moveEntity(e[i], t, r);
        o && n.push(o);
      }
      return n;
    }
    moveGroup(e, t, r) {
      var n = this.internalMoveShapes(e.entities, t, r);
      return m(m({}, e), {}, {
        entities: n
      });
    }
    moveEntity(e, t, r) {
      return a.w.isDiagramShapeOrArrowOrCompositeId(e.id) ? this.moveShape(e, t, r) : a.w.isDiagramGroupId(e.id) ? this.moveGroup(e, t, r) : a.w.isDiagramLinkedId(e.id) ? (r.movedLinkedItems && r.movedLinkedItems.push({
        linkedEntity: e,
        delta: t
      }), e) : void 0;
    }
    moveShape(e, t, r) {
      if (u.A.isShapeArrow(e)) {
        if (u.A.isStraightLineArrow(e)) {
          var n = s().map(e.data, e => i.A.addPoint(e, t));
          return c.A.setProp(e, "data", n);
        }
        if (u.A.isCubicLineArrow(e)) {
          var o = s().map(e.data, e => ({
            p1: i.A.addPoint(e.p1, t),
            p2: i.A.addPoint(e.p2, t),
            cp: e.cp,
            cp2: e.cp2
          }));
          return c.A.setProp(e, "data", o);
        }
      }
      var a;
      if (u.A.isShapeComposite(e)) return l.A.getShapeManagement(e).move(e, t, {
        snapGridOptions: r && r.snapGridOptions
      });
      if (u.A.isPrimitiveShape(e)) {
        if (u.A.isPolygon(e)) {
          var n = s().map(e.data, e => i.A.addPoint(e, t));
          return c.A.setProp(e, "data", n);
        }
        if (u.A.isPolygonCurve(e)) {
          var d = s().map(e.data, e => c.A.update(e, {
            p1: i.A.addPoint(e.p1, t),
            p2: i.A.addPoint(e.p2, t)
          }));
          return c.A.setProp(e, "data", d);
        }
      }
    }
    getVerticalMinMax(e) {
      if (u.A.isShapeArrow(e)) {
        if (u.A.isStraightLineArrow(e)) return d.A.minMax(e.data, e => e.y);
        if (u.A.isCubicLineArrow(e)) return d.A.minMax(e.data, e => Math.min(e.p1.y, e.p2.y), e => Math.max(e.p1.y, e.p2.y));
      }
      var t;
      if (u.A.isShapeComposite(e)) return l.A.getShapeManagement(e).minMaxVertical(e);
      if (u.A.isPrimitiveShape(e)) {
        if (u.A.isPolygon(e)) return d.A.minMax(e.data, e => e.y);
        if (u.A.isPolygonCurve(e)) return d.A.minMax(e.data, e => Math.min(e.p1.y, e.p2.y), e => Math.max(e.p1.y, e.p2.y));
      }
    }
    getHorizontalMinMax(e) {
      if (u.A.isShapeArrow(e)) {
        if (u.A.isStraightLineArrow(e)) return d.A.minMax(e.data, e => e.x);
        if (u.A.isCubicLineArrow(e)) return d.A.minMax(e.data, e => Math.min(e.p1.x, e.p2.x), e => Math.max(e.p1.x, e.p2.x));
      }
      var t;
      if (u.A.isShapeComposite(e)) return l.A.getShapeManagement(e).minMaxHorizontal(e);
      if (u.A.isPrimitiveShape(e)) {
        if (u.A.isPolygon(e)) return d.A.minMax(e.data, e => e.x);
        if (u.A.isPolygonCurve(e)) return d.A.minMax(e.data, e => Math.min(e.p1.x, e.p2.x), e => Math.max(e.p1.x, e.p2.x));
      }
    }
    setShapesInData(e, t) {
      if (!t || !t.length) return e;
      var r = this.replaceShapes(e.shapes, t);
      return c.A.set(e, "shapes", r);
    }
    replaceShapes(e, t) {
      for (var r = s().clone(e), n = 0; n < e.length; n++) {
        var i = e[n],
          o = s().find(t, e => e.id == i.id);
        o && (r[n] = o);
      }
      return r;
    }
  }
  const y = new f();
};
