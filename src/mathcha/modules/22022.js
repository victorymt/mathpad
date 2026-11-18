/* module 22022 — 6023 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => g,
    mt: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(33535),
    d = r(84369);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u extends a.dV {
    render() {
      var e = g(this.shape()),
        t = l.A.pathsD(e.part1),
        r = l.A.pathsD(e.part2),
        n = l.A.pathsD(e.part3);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: r,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: n,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: this.style()
      }));
    }
  }
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = .1,
      o,
      a,
      l = s.A.rectWidth(e.data) * i,
      d = s.A.rectHeight(e.data) * i,
      h = m({
        p1: {
          x: r.x + 2 * l,
          y: r.y
        },
        p2: {
          x: n.x,
          y: n.y - 2 * d
        }
      }),
      p = m({
        p1: {
          x: r.x + l,
          y: r.y + d
        },
        p2: {
          x: n.x - l,
          y: n.y - d
        }
      }),
      u = m({
        p1: {
          x: r.x,
          y: r.y + 2 * d
        },
        p2: {
          x: n.x - 2 * l,
          y: n.y
        }
      });
    return {
      part1: c.A.genericLinesTransformed(e.data, h),
      part2: c.A.genericLinesTransformed(e.data, p),
      part3: c.A.genericLinesTransformed(e.data, u)
    };
  }
  function m(e) {
    var t = e.p1,
      r = e.p2,
      n = .175,
      i = s.A.rectWidth(e),
      o,
      a = s.A.rectHeight(e) * n,
      l = .4 * a,
      c = t.y,
      d = r.y - a,
      h = r.y - l,
      p = r.y,
      u = t.x,
      g = r.x,
      m;
    return [{
      p1: {
        x: u,
        y: c
      },
      p2: {
        x: g,
        y: c
      }
    }, {
      p1: {
        x: g,
        y: c
      },
      p2: {
        x: g,
        y: d
      }
    }, {
      p1: {
        x: g,
        y: d
      },
      p2: {
        x: u,
        y: h
      },
      cp: {
        x: u + i / 2 - i / 8,
        y: d
      },
      cp2: {
        x: u + i / 4 + i / 4,
        y: p + a / 2 + l / 2
      }
    }, {
      p1: {
        x: u,
        y: h
      },
      p2: {
        x: u,
        y: c
      }
    }];
  }
  class f extends a.US {}
  class y extends a.Au {
    getComponent() {
      return u;
    }
    getIcon() {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "white",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M7.42,5.2 L16.8,5.2 L16.8,11.09 C10.94,11.09 12.11,13.21 7.42,11.84 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "white",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M5.41,6.73 L14.79,6.73 L14.79,12.62 C8.93,12.62 10.1,14.74 5.41,13.37 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "white",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M3.4,8.26 L12.78,8.26 L12.78,14.15 C6.92,14.15 8.09,16.27 3.4,14.9 Z"
        }))
      };
    }
    createShape(e) {
      var t = super.createShape(p(p({}, e), {}, {
        shapeWidth: e.shapeWidth || 40,
        shapeHeight: e.shapeHeight || 170
      }));
      return t.style = {
        fillColor: [255, 255, 255, 1]
      }, t;
    }
    getType() {
      return "flow-multidocument";
    }
    getSettingsComponent() {
      return f;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = g(e);
      return {
        data: t.part1.concat(t.part2).concat(t.part3)
      };
    }
    getSnapablePoints(e) {
      var t = g(e);
      return t.part3.map(e => e.p2).concat([t.part1[0].p1], t.part2[0].p1, t.part1[1].p1, t.part1[1].p2, t.part2[1].p2);
    }
    getBoundingRect(e) {
      var t = g(e);
      return s.A.genericLinesBbox(t.part1.concat(t.part2).concat(t.part3));
    }
    getPaperPath(e) {
      var t = g(e);
      return d.A.compoundPath([d.A.fromGenericLines(t.part1), d.A.fromGenericLines(t.part2), d.A.fromGenericLines(t.part3)]);
    }
  }
  var v = new y();
};
