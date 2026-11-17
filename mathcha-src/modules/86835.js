/* module 86835 — 2934 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(30803),
    i = r(2543),
    o = r.n(i);
  class s {
    isDiagramEditor(e) {
      return n.w.isDiagramEditorId(e.id);
    }
    isStraightLineArrow(e) {
      return this.isShapeArrow(e) && !e.type;
    }
    isQuadraticLineArrow(e) {
      return this.isShapeArrow(e) && "quadratic" == e.type;
    }
    isCubicLineArrow(e) {
      return this.isShapeArrow(e) && "cubic" == e.type;
    }
    isEllipse(e) {
      return "ellipse" == e.type;
    }
    isRectangle(e) {
      return "rectangle" == e.type;
    }
    isSquare(e) {
      return "square" == e.type;
    }
    isPolygon(e) {
      return "polygon" == e.type;
    }
    isCompositeShape(e) {
      return n.w.isDiagramCompositeShapeId(e.id);
    }
    isRectWrapShape(e) {
      if (!this.isCompositeShape(e)) return !1;
      var t = e.data;
      return !!t.p1 && !!t.p2;
    }
    isConnection(e) {
      return n.w.isDiagramConnectionId(e.id);
    }
    isStraightConnection(e) {
      return this.isConnection(e) && !e.type;
    }
    isQuadraticConnection(e) {
      return this.isConnection(e) && "quadratic" == e.type;
    }
    isCubicConnection(e) {
      return this.isConnection(e) && "cubic" == e.type;
    }
    isPolygonCurve(e) {
      return "polygon-curve" == e.type;
    }
    isAxis2d(e) {
      return "axis2d" == e.type;
    }
    isRullerArrow(e) {
      return "|" == e.shaft;
    }
    isShapeArrow(e) {
      return n.w.isDiagramArrowId(e.id);
    }
    isShapeComposite(e) {
      return n.w.isDiagramCompositeShapeId(e.id);
    }
    isGroupedEntity(e) {
      return n.w.isDiagramGroupId(e.id);
    }
    isTemporaryEntity(e) {
      return n.w.isTemporaryEntity(e.id);
    }
    isPrimitiveShape(e) {
      return n.w.isDiagramShapeId(e.id);
    }
    isGeneralShape(e) {
      return this.isShapeArrow(e) || this.isPrimitiveShape(e) || this.isShapeComposite(e);
    }
    getEntityType(e) {
      return n.w.isTemporaryEntity(e.id) ? "temporary" : n.w.isDiagramEditorId(e.id) ? "text" : n.w.isDiagramConnectionId(e.id) ? "connection" : n.w.isDiagramArrowId(e.id) ? "shape-arrow" : n.w.isDiagramShapeId(e.id) ? "shape-object" : n.w.isDiagramCompositeShapeId(e.id) ? "shape-composite" : n.w.isDiagramIntersectionId(e.id) ? "intersection" : n.w.isDiagramGroupId(e.id) ? "group" : n.w.isDiagramLinkedId(e.id) ? "linked" : "diagram";
    }
    getEntityById(e, t) {
      return n.w.isDiagramShapeOrArrowOrCompositeId(t) || n.w.isDiagramGroupId(t) ? o().find(e.shapes, e => e.id == t) : n.w.isDiagramEditorId(t) ? e.elements[t] : n.w.isDiagramConnectionId(t) ? o().find(e.connections, e => e.id == t) : n.w.isDiagramIntersectionId(t) ? e.intersections : void 0;
    }
    extractAllEntities(e) {
      return (e.shapes || []).concat(o().values(e.elements).filter(e => e)).concat(e.connections || []).concat(e.intersections || []);
    }
  }
  const a = new s();
};
