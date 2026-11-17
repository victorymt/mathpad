/* module 51022 — 906 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(2543),
    i = r.n(n),
    o = r(30803);
  class s {
    partitionShapeAndNonShapeIds(e) {
      return i().partition(e, e => !o.w.isDiagramEditorId(e) && !o.w.isDiagramConnectionId(e));
    }
    partitionShapeAndNonShapeEntities(e) {
      return i().partition(e, e => !o.w.isDiagramEditorId(e.id) && !o.w.isDiagramConnectionId(e.id));
    }
    getEntitiesByIds(e, t) {
      var r = [];
      return e.forEach(e => {
        if (o.w.isDiagramShapeOrArrowOrCompositeId(e) || o.w.isDiagramLinkedId(e)) {
          var n = t.shapes.find(t => t.id == e);
          n && r.push(n);
        } else if (o.w.isDiagramEditorId(e)) r.push(t.elements[e]);else if (o.w.isDiagramConnectionId(e)) {
          var i = t.connections.find(t => t.id == e);
          i && r.push(i);
        }
      }), r;
    }
  }
  const a = new s();
};
