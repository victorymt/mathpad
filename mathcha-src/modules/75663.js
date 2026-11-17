/* module 75663 — 1760 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(2543),
    i = r.n(n),
    o = r(61848),
    s = r(30803);
  class a {
    addEntity(e, t) {
      return e = this.removeEntity(e, t), o.A.setProp(e, "items", e.items.concat([{
        id: s.w.nextDiagramIntersectionId(),
        entities: [t.id]
      }]));
    }
    addEntities(e, t) {
      return o.A.setProp(e, "items", e.items.concat({
        id: s.w.nextDiagramIntersectionId(),
        entities: i().map(t, e => e.id)
      }));
    }
    removeEntity(e, t) {
      for (var r = [], n = 0; n < e.items.length; n++) {
        var s = e.items[n],
          a = s.entities;
        if (1 != a.length || a[0] != t.id) {
          var l = i().filter(a, e => e != t.id);
          l.length == a.length ? r.push(s) : l.length > 1 && r.push(o.A.setProp(s, "entities", l));
        }
      }
      return o.A.setProp(e, "items", r);
    }
    removeEntities(e, t) {
      for (var r = i().map(t, e => e.id), n = [], s = 0; s < e.items.length; s++) {
        var a = e.items[s],
          l = a.entities;
        if (this.isSubsetIntersection(a, r)) {
          var c = i().differenceBy(a.entities, t, "id");
          l = c.length > 1 ? c : null;
        }
        l && n.push(o.A.setProp(a, "entities", l));
      }
      return o.A.setProp(e, "items", n);
    }
    isEntityIn(e, t) {
      return this.isSubset(e, [t]);
    }
    isSubset(e, t) {
      var r = i().map(t, e => e.id);
      return i().some(e.items, e => i().intersection(e.entities, r).length == t.length);
    }
    isSubsetIntersection(e, t) {
      return this.isSubsetOf(t, e.entities);
    }
    isSubsetOf(e, t) {
      return i().intersection(t, e).length == e.length;
    }
  }
  const l = new a();
};
