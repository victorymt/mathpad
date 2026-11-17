/* module 99942 — 3848 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(3453),
    i = r(64467),
    o = r(30803),
    s = r(51022),
    a = r(2543),
    l = r.n(a),
    c = r(86835);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p {
    regenerateEditorIds(e, t, r) {
      var n = {},
        i = l().clone(e);
      return t.forEach(e => {
        var t = o.w.nextIdByPreviousId(e.id);
        n[e.id] = t, delete i[e.id], i[t] = h(h({}, e), {}, {
          id: t,
          isInGroup: r
        });
      }), [i, n];
    }
    regenerateConnectionIds(e, t, r, n, i) {
      if (!e) return [e, []];
      var s = [],
        a;
      return [e.map(e => {
        var a = t.has(e.id),
          l;
        if (a != (r.has(e.fromEditorId) || r.has(e.toEditorId))) throw new Error("there is some problem on grouping editors with connections");
        if (!a) return e;
        var c = o.w.nextDiagramConnectionId();
        return s.push(c), h(h({}, e), {}, {
          id: c,
          fromEditorId: n[e.fromEditorId] || e.fromEditorId,
          toEditorId: n[e.toEditorId] || e.toEditorId,
          isInGroup: i
        });
      }), []];
    }
    regenerateShapeIds(e) {
      return e.map(e => h(h({}, e), {}, {
        id: o.w.nextIdByPreviousId(e.id)
      }));
    }
    destructAllLevelToShapes(e) {
      var t = {
        shapes: [],
        shapeOnly: !0
      };
      return this.innerDestructAllToShapes(e, t), t;
    }
    innerDestructAllToShapes(e, t) {
      for (var r = 0; r < e.entities.length; r++) {
        var n = e.entities[r],
          i;
        switch (c.A.getEntityType(n)) {
          case "text":
          case "connection":
          case "linked":
            t.shapeOnly = !1;
            continue;
          case "group":
            this.innerDestructAllToShapes(n, t);
          default:
            t.shapes.push(n);
        }
      }
    }
    partitionConnectedEntityByConnections(e, t) {
      var r = s.A.partitionShapeAndNonShapeIds(e),
        i = (0, n.A)(r, 2),
        a = i[0],
        c = i[1],
        d = this.findConnectedEditorAndConnections(c, t),
        h = l().partition(d, e => o.w.isDiagramEditorId(e)),
        p = (0, n.A)(h, 2),
        u,
        g;
      return {
        shapeIds: a,
        editorIds: p[0],
        connectionIds: p[1]
      };
    }
    findConnectedEditorAndConnections(e, t) {
      for (var r = this, n = [...e], i = [], s = function e() {
          var s = n.pop(),
            a;
          if (i.push(s), o.w.isDiagramEditorId(s)) r.findAllConnectionsToEditor(s, t).forEach(e => r.addIfNotExists(e, n, i));else if (o.w.isDiagramConnectionId(s)) {
            var l = t.connections.find(e => e.id == s);
            r.addIfNotExists(l.fromEditorId, n, i), r.addIfNotExists(l.toEditorId, n, i);
          }
        }; n.length > 0;) s();
      return i;
    }
    addIfNotExists(e, t, r) {
      r.indexOf(e) < 0 && t.indexOf(e) < 0 && t.push(e);
    }
    findAllConnectionsToEditor(e, t) {
      return t.connections.filter(t => t.fromEditorId == e || t.toEditorId == e).map(e => e.id);
    }
  }
  const u = new p();
};
