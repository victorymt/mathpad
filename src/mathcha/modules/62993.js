/* module 62993 — 4693 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => b
  });
  var n = r(64467),
    i = r(19539),
    o = r(2543),
    s = r.n(o),
    a = r(30803),
    l = r(61848),
    c = r(57507),
    d = r(92604),
    h = r(70884),
    p = r(33272),
    u = r(91355),
    g = r(83084),
    m = r(60693);
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
  class v {
    sizeAbsoluteToFakeRectWrapShape(e) {
      return {
        id: a.w.nextDiagramCompositeShapeId(),
        type: "rectangle",
        data: this.convertToRectangleLikeData(e.shape.data)
      };
    }
    toSizeAbsoluteEditor(e, t) {
      return y(y({}, t), {}, {
        shape: y(y({}, t.shape), {}, {
          data: this.convertFromRectangleLikeData(e.data)
        })
      });
    }
    convertToRectangleLikeData(e) {
      return {
        p1: {
          x: e.p.x - e.size.width / 2,
          y: e.p.y - e.size.height / 2
        },
        p2: {
          x: e.p.x + e.size.width / 2,
          y: e.p.y + e.size.height / 2
        },
        flipX: e.flipX,
        rotation: e.rotation,
        skewX: e.skewX
      };
    }
    convertFromRectangleLikeData(e) {
      var t, r;
      return {
        p: i.A.getCenterPoint(e),
        size: i.A.rectWidthHeight(e),
        flipX: e.flipX,
        rotation: e.rotation,
        skewX: e.skewX
      };
    }
    setEditorsInData(e, t) {
      if (!t || !t.length) return e;
      var r = s().clone(e.elements);
      return t.forEach(e => r[e.id] = e), l.A.set(e, "elements", r);
    }
    moveEditors(e, t) {
      for (var r = [], n = 0; n < e.length; n++) {
        var i = e[n];
        a.w.isDiagramEditorId(i.id) && r.push(this.moveEditor(i, t));
      }
      return r;
    }
    alignEditors(e, t, r, n) {
      for (var i = [], o = 0; o < e.length; o++) {
        var s = e[o];
        if (a.w.isDiagramEditorId(s.id)) {
          var l = d.A.get(s, t),
            c = h.A.calculateDeltaFromAlignment(n, l, r);
          i.push(this.moveEditor(s, c));
        }
      }
      return i;
    }
    moveEditor(e, t) {
      var r = i.A.addPoint(e.shape.data.p, t);
      return l.A.set(e, "shape.data.p", r);
    }
    getRotationPoints(e, t, r) {
      var n = g.x.calculateCenterPoint(e, t),
        o;
      return {
        cp: n,
        p: i.A.pointRotate({
          x: n.x,
          y: n.y - t.offsetHeight / 2 - p.A.rotateControlDistance() / r.zoomRatio
        }, n, e.shape.data.rotation || 0)
      };
    }
    getSkewPoint(e, t) {
      var r = e.shape.data.skewX,
        n = t.offsetWidth,
        o = t.offsetHeight,
        s = g.x.calculateCenterPoint(e, t),
        a = {
          x: s.x - n / 2 - 5,
          y: s.y + o / 2
        },
        l;
      return a = c.A.pointsFromSkew(s, r, [a])[0], {
        cp: s,
        p: i.A.pointRotate({
          x: a.x,
          y: a.y + p.A.skewControlDistance()
        }, s, e.shape.data.rotation || 0)
      };
    }
    createEditorRectShapesTemporary(e, t, r, n) {
      var o = m.T.getBCRect(r, n);
      return u.A.getDiagramEditorKeys(e).map(e => {
        if (!t[e]) return null;
        var r = m.T.getBCRectToRect(t[e].editor, o),
          n = {
            p1: {
              x: r.left,
              y: r.top
            },
            p2: {
              x: r.right,
              y: r.bottom
            }
          },
          s = i.A.pointsToLines(i.A.getPointsRect(n));
        return s.push({
          p1: n.p1,
          p2: n.p2
        }), s.push({
          p1: {
            x: n.p1.x,
            y: n.p2.y
          },
          p2: {
            x: n.p2.x,
            y: n.p1.y
          }
        }), {
          id: a.w.nextTemporaryEntity(),
          breakDownInfo: {
            data: s
          },
          realId: e
        };
      }).filter(e => e);
    }
    changeEditorsInMap(e, t) {
      if (!t || 0 == t.length) return e;
      var r = s().clone(e);
      return t.forEach(e => r[e.id] = e), r;
    }
  }
  const b = new v();
};
