/* module 75067 — 1376 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(61848),
    i = r(86835),
    o = r(2543),
    s = r.n(o),
    a = r(71389);
  class l {
    changeEntityInData(e, t) {
      var r = i.A.getEntityType(t);
      if ("diagram" == r) return t;
      if ("connection" == r) return this.setConnectionInData(e, t);
      if ("shape-arrow" == r) return this.setArrowInData(e, t);
      if ("shape-object" == r || "shape-composite" == r || "group" == r) return this.setShapeInData(e, t);
      if ("text" == r) return this.setEditorInData(e, t);
      if ("intersection" == r) return n.A.setProp(e, "intersections", t);
      if ("linked" == r) return e;
      throw new Error("not supported");
    }
    setConnectionInData(e, t) {
      var r = s().findIndex(e.connections, e => e.id == t.id);
      return n.A.set(e, "connections." + r, t);
    }
    setArrowInData(e, t) {
      return this.setShapeInData(e, t);
    }
    setShapeInData(e, t) {
      var r = s().findIndex(e.shapes, e => e.id == t.id),
        i = n.A.set(e, "shapes." + r, t);
      return a.W.isXyMatrix(t) ? a.W.normalizeDiagram(i) : i;
    }
    setEditorInData(e, t) {
      return n.A.set(e, "elements." + t.id, t);
    }
    changeEntitiesInData(e, t) {
      return t.forEach(t => {
        e = this.changeEntityInData(e, t);
      }), e;
    }
  }
  const c = new l();
};
