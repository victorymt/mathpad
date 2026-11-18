/* module 92604 — 2215 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(21744),
    i = r(19539),
    o = r(73700),
    s = r(56072),
    a = r(89870),
    l = r(86835);
  class c {
    getFromEntities(e, t) {
      return i.A.expandByMaxRectangles(e.map(e => this.get(e, t)));
    }
    get(e, t) {
      if (!e) return null;
      var r = l.A.getEntityType(e);
      if ("shape-arrow" == r) {
        if (l.A.isStraightLineArrow(e)) return i.A.getBoundingRectFromPoints(e.data);
        var o = i.A.toAbsoluteControlPointCubics(e.data);
        return i.A.beziersBbox(o);
      }
      var c = e,
        h;
      if ("shape-composite" == r) return n.A.getShapeManagement(c).getBoundingRect(c);
      if ("shape-object" == r) {
        if (l.A.isPolygon(c)) return i.A.getBoundingRectFromPoints(c.data);
        if (l.A.isPolygonCurve(c)) {
          var p = i.A.toAbsoluteControlPointCubics(c.data);
          return i.A.beziersBbox(p);
        }
      }
      if ("group" == r) return this.getFromEntities(e.entities, t);
      if (!t.editorRef) return d;
      if ("text" == r) return this.handleForText(e, t.editorRef);
      if ("connection" == r) {
        var u = e,
          g = s.A.getIdRectMap([u], t),
          m = s.A.getCalculatedPosition(u, g, t.editors);
        if (!m) {
          var f = t.editors[u.fromEditorId].shape.data.p,
            y = t.editors[u.toEditorId].shape.data.p,
            v = i.A.getCenterPoint(f, y);
          return {
            p1: v,
            p2: v
          };
        }
        return i.A.genericLinesBbox([m]);
      }
      if ("linked" == r) {
        var b = a.A.findOriginalEntityFromLink(e, t.editors);
        return this.handleForText(b, t.editorRef);
      }
      return null;
    }
    handleForText(e, t) {
      var r,
        n = t[e.id];
      if (!n) return {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: 0,
          y: 0
        }
      };
      var i = n.editor.parentElement,
        s = o.A.getTextRectInfo(i, e),
        a;
      return o.A.findBoundingRect(s);
    }
  }
  var d = {
    p1: {
      x: 0,
      y: 0
    },
    p2: {
      x: 0,
      y: 0
    }
  };
  const h = new c();
};
