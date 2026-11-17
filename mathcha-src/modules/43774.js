/* module 43774 — 1901 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(62993),
    i = r(56072),
    o = r(71768),
    s = r(30803),
    a = r(89870),
    l = r(2543),
    c = r.n(l),
    d = r(84258),
    h = r(391);
  class p {
    getGridSizeIfSnapEnabled(e) {
      var t,
        r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          ctrlKey: !1
        }).ctrlKey,
        n,
        i = h.A.getSettings(e, "grid") && h.A.getSettings(e, "textSnapToGrid"),
        o = h.A.getSettings(e, "gridSize"),
        s;
      return !r && i ? o : 0;
    }
    getRandomPosYAround(e, t, r) {
      if (d.A.isTestEnv()) return {
        y1: e,
        y2: t
      };
      var n = (t = t || e) - e;
      r = r || 1e4;
      var i = Math.floor(30 * Math.random() + 1);
      return {
        y1: (e = Math.max(0, Math.min(e, r - n))) + i,
        y2: e + n + i
      };
    }
    getShapeIdsIntersectWithRect(e, t, r, s, a) {
      var l = t.shapes || [],
        d = n.A.createEditorRectShapesTemporary(t.elements || {}, r, s, a),
        h = i.A.getIdRectMap(t.connections, {
          editorRef: r,
          editors: t.elements
        }),
        p = i.A.createConnectionShapesTemporary(t.connections || [], h, t.elements),
        u = l.concat(d, p),
        g = o.A.getShapesIntersectOrInsideWithRect(u, e);
      return 0 == g.length ? [] : c().uniq(this.getIdsIfEntityInGroup(g, t));
    }
    getIdsIfEntityInGroup(e, t) {
      return e.map(e => {
        var r = e.realId || e.id;
        if (s.w.isDiagramEditorId(r) && t.elements[r].isInGroup) return a.A.findGroupedEnityFromEditor(r, t.shapes).id;
        if (s.w.isDiagramConnectionId(r)) {
          var n = t.connections.find(e => e.id == r);
          if (n.isInGroup) return a.A.findGroupedEnityFromConnection(n, t.shapes).id;
        }
        return r;
      });
    }
  }
  const u = new p();
};
