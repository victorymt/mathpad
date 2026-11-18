/* module 73700 — 6449 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(516),
    i = r(57507),
    o = r(19539),
    s = r(30803),
    a = r(38070),
    l = r(83084);
  class c {
    getTemporaryShapes(e, t) {
      return t.map(t => {
        var r = e.refMap[t.id],
          n = this.getTextRectInfo(r.editor.parentNode, t),
          i = this.getFrameShape(t, n);
        return this.frameToTemporaryShape(i);
      });
    }
    frameToTemporaryShape(e) {
      var t = e.outsideShape || e.shape;
      switch (e.type || "rectangle") {
        case "circle":
          var r = t.cp,
            n = t.r,
            i = [{
              x: r.x,
              y: r.y - n
            }, {
              x: r.x + n,
              y: r.y
            }, {
              x: r.x,
              y: r.y + n
            }, {
              x: r.x - n,
              y: r.y
            }, r];
          return {
            id: s.w.nextTemporaryEntity(),
            breakDownInfo: {
              data: o.A.ellipseToCubicBeziers({
                x: r.x - n,
                y: r.y - n
              }, {
                x: r.x + n,
                y: r.y + n
              })
            },
            snapPoints: i
          };
        case "rectangle":
          var a = t.rect,
            l = [{
              x: a.left,
              y: a.top
            }, {
              x: a.left + a.width,
              y: a.top
            }, {
              x: a.left + a.width,
              y: a.top + a.height
            }, {
              x: a.left,
              y: a.top + a.height
            }, {
              x: a.left + a.width / 2,
              y: a.top + a.height / 2
            }];
          return {
            id: s.w.nextTemporaryEntity(),
            breakDownInfo: {
              data: [{
                p1: l[0],
                p2: l[1]
              }, {
                p1: l[1],
                p2: l[2]
              }, {
                p1: l[2],
                p2: l[3]
              }, {
                p1: l[3],
                p2: l[0]
              }]
            },
            snapPoints: l
          };
        case "ellipse":
          var c = t.cp,
            d = t.rx,
            h = t.ry,
            p = [{
              x: c.x,
              y: c.y - h
            }, {
              x: c.x + d,
              y: c.y
            }, {
              x: c.x,
              y: c.y + h
            }, {
              x: c.x - d,
              y: c.y
            }, c];
          return {
            id: s.w.nextTemporaryEntity(),
            breakDownInfo: {
              data: o.A.ellipseToCubicBeziers({
                x: c.x - d,
                y: c.y - h
              }, {
                x: c.x + d,
                y: c.y + h
              })
            },
            snapPoints: p
          };
      }
    }
    getFrameShape(e, t) {
      var r = a.A.getEditorStyle(e, "strokeType"),
        n = "2-" == r || "2." == r || "2--" == r,
        s = 3;
      switch (e.shape.frameType || "rectangle") {
        case "ellipse":
          var l = this.findBoundingRect(t),
            c = o.A.getCenterPoint(l),
            d = o.A.rectWidthHeight(l),
            h = d.width,
            p = d.height,
            u = Math.max(h / Math.sqrt(2), 6),
            g = Math.max(p / Math.sqrt(2), 6);
          return {
            shape: {
              cp: c,
              rx: u,
              ry: g
            },
            outsideShape: n ? {
              cp: c,
              rx: u + 3,
              ry: g + 3
            } : null,
            type: e.shape.frameType
          };
        case "rectangle":
          var m = this.findBoundingRect(t),
            f = o.A.rectWidthHeight(m),
            y = f.width,
            v = f.height,
            b = m.p1.x,
            x = m.p1.y;
          return {
            shape: {
              rect: {
                left: b - 2,
                top: x - 2,
                width: y + 4,
                height: v + 4
              }
            },
            outsideShape: n ? {
              rect: {
                left: b - 2 - 3,
                top: x - 2 - 3,
                width: y + 4 + 6,
                height: v + 4 + 6
              }
            } : null,
            type: e.shape.frameType
          };
        case "circle":
          var C = t.p,
            S = t.width,
            A = t.height,
            w = t.skewX,
            E = {
              p1: {
                x: C.x - S / 2,
                y: C.y - A / 2
              },
              p2: {
                x: C.x + S / 2,
                y: C.y + A / 2
              }
            },
            k = i.A.rectTo4PointsSkewed(E, w, 0),
            O = o.A.getBoundingRectFromPoints(k),
            D = o.A.getCenterPoint(O),
            P = o.A.rectWidthHeight(O),
            M = P.width,
            I = P.height,
            T = Math.sqrt(Math.pow((M + 2) / 2, 2) + Math.pow((I + 2) / 2, 2));
          return {
            shape: {
              cp: D,
              r: T = Math.max(T, 6),
              doubleLineDistance: 3
            },
            outsideShape: n ? {
              cp: D,
              r: T + 3
            } : null,
            type: e.shape.frameType
          };
      }
    }
    getFrameRectInfo(e) {
      var t, r;
      return {
        rect: {
          left: e.left,
          top: e.top,
          width: e.width,
          height: e.height
        },
        cp: {
          x: e.left + e.width / 2,
          y: e.top + e.height / 2
        }
      };
    }
    getTextRectInfo(e, t) {
      var r = t.shape.data,
        i = r.rotation,
        o = void 0 === i ? 0 : i,
        s = r.skewX,
        a = void 0 === s ? 0 : s,
        c = n.A.getElementClientSize(e);
      return {
        id: t.id,
        p: l.x.calculateCenterPoint(t, e),
        rotation: o,
        skewX: a,
        width: c.width - 2,
        height: c.height - 2
      };
    }
    findBoundingRect(e) {
      var t = e.p,
        r = e.width,
        n = e.height,
        s = e.skewX,
        a = e.rotation,
        l = {
          p1: {
            x: t.x - r / 2,
            y: t.y - n / 2
          },
          p2: {
            x: t.x + r / 2,
            y: t.y + n / 2
          }
        },
        c = i.A.rectTo4PointsSkewed(l, s, a);
      return o.A.getBoundingRectFromPoints(c);
    }
  }
  const d = new c();
};
