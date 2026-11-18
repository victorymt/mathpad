/* module 56072 — 9186 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(30803),
    o = r(19539),
    s = r(48662),
    a = r(71768),
    l = r(73700),
    c = r(2543),
    d = r.n(c),
    h = r(391),
    p = r(61848);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m {
    addNewConnection(e, t) {
      var r = [];
      if (t.connections.forEach((t, n) => {
        s.A.isConnectTheSame2Editor(t, e) && r.push({
          c: t,
          index: n
        });
      }), r.length >= 2) return t;
      var n = t.connections;
      if (1 == r.length) {
        n = d().clone(n);
        var i = r[0];
        n[i.index] = h.A.setSetting(i.c, "perpendicularDistance", 5);
        var o = i.c.fromEditorId == e.fromEditorId ? -5 : 5,
          a = h.A.setSetting(e, "perpendicularDistance", o);
        return n = n.concat(a), p.A.setProp(t, "connections", n);
      }
      return n = n.concat(e), p.A.setProp(t, "connections", n);
    }
    setConnectionsInGroup(e, t, r) {
      return e && 0 != e.length ? t.map(t => e.indexOf(t.id) >= 0 ? g(g({}, t), {}, {
        isInGroup: r
      }) : t) : t;
    }
    getIdRectMap(e, t) {
      var r = {};
      return e.forEach(e => {
        var n = t.editors[e.fromEditorId],
          i = t.editorRef[e.fromEditorId].editor.parentElement,
          o = t.editors[e.toEditorId],
          s = t.editorRef[e.toEditorId].editor.parentElement;
        r[e.fromEditorId] || (r[e.fromEditorId] = l.A.getTextRectInfo(i, n)), r[e.toEditorId] || (r[e.toEditorId] = l.A.getTextRectInfo(s, o));
      }), r;
    }
    createConnectionShapesTemporary(e, t, r) {
      return d().map(e, e => {
        var n = this.getCalculatedPosition(e, t, r);
        return n ? (o.A.isQuadraticBezierPath(n) && (n = o.A.quadraticToCubic(n)), {
          id: i.w.nextTemporaryEntity(),
          breakDownInfo: {
            data: [n]
          },
          realId: e.id
        }) : {
          id: i.w.nextTemporaryEntity(),
          breakDownInfo: {
            data: []
          },
          realId: e.id
        };
      });
    }
    getTempShape(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        n = {
          id: i.w.nextTemporaryEntity(),
          breakDownInfo: {
            data: null
          }
        };
      switch (e || "rectangle") {
        case "circle":
          var s = t.outsideShape || t.shape,
            a = s.cp,
            l = s.r;
          l += r, n.breakDownInfo.data = o.A.ellipseToCubicBeziers({
            x: a.x - l,
            y: a.y - l
          }, {
            x: a.x + l,
            y: a.y + l
          });
          break;
        case "ellipse":
          var c = t.outsideShape || t.shape,
            d = c.cp,
            h = c.rx,
            p = c.ry;
          h += r, p += r, n.breakDownInfo.data = o.A.ellipseToCubicBeziers({
            x: d.x - h,
            y: d.y - p
          }, {
            x: d.x + h,
            y: d.y + p
          });
          break;
        default:
          var u,
            m = (t.outsideShape || t.shape).rect;
          r && (m = g(g({}, m), {}, {
            left: m.left - r,
            top: m.top - r,
            width: m.width + 2 * r,
            height: m.height + 2 * r
          }));
          var f = {
            p1: {
              x: m.left,
              y: m.top
            },
            p2: {
              x: m.left + m.width,
              y: m.top + m.height
            }
          };
          n.breakDownInfo.data = o.A.pointsToLines(o.A.getPointsRect(f));
      }
      return n;
    }
    getConnectionPointsInConnection(e, t) {
      return {
        from: e[t.fromEditorId].p,
        to: e[t.toEditorId].p
      };
    }
    getCalculatedPosition(e, t, r) {
      var n = this.getConnectionPointsInConnection(t, e),
        s = n.from,
        c = n.to,
        d = h.A.getSettings(e, "perpendicularDistance");
      if (d) {
        var p = o.A.parallelLine(s, c, d);
        s = p.p1, c = p.p2;
      }
      var u = r[e.fromEditorId],
        g = r[e.toEditorId],
        m = t[e.fromEditorId],
        f = t[e.toEditorId],
        y = l.A.getFrameShape(u, m),
        v = l.A.getFrameShape(g, f),
        b = null;
      if (e.type) {
        if ("quadratic" == e.type) {
          var x = o.A.toAbsoluteConnectionControlPoint(e.data.cp, s, c),
            C = o.A.quadraticToCubic({
              p1: s,
              cp: x,
              p2: c
            });
          b = {
            id: i.w.nextTemporaryEntity(),
            breakDownInfo: {
              data: [C]
            }
          };
        } else {
          var S = o.A.toAbsoluteConnectionControlPoint(e.data.cp, s, c),
            A = o.A.toAbsoluteConnectionControlPoint(e.data.cp2, s, c);
          b = {
            id: i.w.nextTemporaryEntity(),
            breakDownInfo: {
              data: [{
                p1: s,
                cp: S,
                cp2: A,
                p2: c
              }]
            }
          };
        }
      } else b = {
        id: i.w.nextTemporaryEntity(),
        breakDownInfo: {
          data: [{
            p1: s,
            p2: c
          }]
        }
      };
      var w = this.getHeadTailRedundantSize("tail", e.tail),
        E = this.getHeadTailRedundantSize("head", e.head),
        k = this.getTempShape(u.shape.frameType, y, w),
        O = this.getTempShape(g.shape.frameType, v, E),
        D = a.A.getIntersects(b, k),
        P = a.A.getIntersects(b, O);
      return !D || D.length <= 0 || !P || P.length <= 0 ? null : "quadratic" == e.type ? {
        p1: D[0],
        p2: P[0],
        cp: o.A.toAbsoluteConnectionControlPoint(e.data.cp, s, c)
      } : "cubic" == e.type ? {
        p1: D[0],
        p2: P[0],
        cp: o.A.toAbsoluteConnectionControlPoint(e.data.cp, s, c),
        cp2: o.A.toAbsoluteConnectionControlPoint(e.data.cp2, s, c)
      } : {
        p1: D[0],
        p2: P[0]
      };
    }
    getHeadTailRedundantSize(e, t) {
      switch (e) {
        case "head":
          switch (t) {
            case "o":
            case "*":
              return 5;
            case "2|<<":
            case "|<<":
            case "2<<":
            case "<<":
              return 20;
            case "2>>|":
            case ">>|":
            case "2>|":
            case ">|":
              return 2;
            case "x":
              return 6;
            case "+":
            case "hook-up-)":
            case "hook-down-)":
              return 8;
            case "2|<":
            case "|<":
            case "2<":
              return 13;
            case "2>>":
            case ">>":
            case ")":
            case "2>":
            case "fh>":
            case "f>":
            case ">":
            case "no":
            case "hook-up-(":
            case "hook-down-(":
            case "elg>":
              return 0;
            case "||":
            case "|":
              return 3;
            case "(":
              return 7;
            case "fh<":
              return 10;
            case "f<":
            case "elg<":
              return 9;
            case "<":
              return 11;
          }
        case "tail":
          switch (t) {
            case "o":
            case "*":
              return 5;
            case "2|<<":
            case "|<<":
            case "2|<":
            case "|<":
            case "||":
            case "|":
              return 2;
            case "2>>|":
            case ">>|":
            case "2>>":
            case ">>":
              return 20;
            case "x":
              return 6;
            case "+":
            case "hook-up-(":
            case "hook-down-(":
              return 8;
            case "2>|":
            case ">|":
            case "2>":
              return 13;
            case "2<<":
            case "<<":
            case "(":
            case "2<":
            case "fh<":
            case "f<":
            case "<":
            case "no":
            case "hook-up-)":
            case "hook-down-)":
            case "elg<":
              return 0;
            case ")":
              return 7;
            case "fh>":
              return 10;
            case "f>":
            case "elg>":
              return 9;
            case ">":
              return 11;
          }
      }
      return 0;
    }
  }
  const f = new m();
};
