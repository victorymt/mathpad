/* module 37819 — 2732 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => h,
    mt: () => g
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(29315),
    a = r(88925),
    l = r(33535),
    c = r(84369);
  class d extends s.dV {
    render() {
      var e = h(this.shape()),
        t = a.A.pathsD(e);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), i().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function h(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = .175,
      s = o.A.rectWidth(e.data),
      a,
      c = o.A.rectHeight(e.data) * i,
      d = .4 * c,
      h = r.y,
      p = n.y - c,
      u = n.y - d,
      g = n.y,
      m = r.x,
      f = n.x,
      y = {
        p1: {
          x: f,
          y: p
        },
        p2: {
          x: m,
          y: u
        },
        cp: {
          x: m + s / 2 - s / 8,
          y: p
        },
        cp2: {
          x: m + s / 4 + s / 4,
          y: g + c / 2 + d / 2
        }
      };
    return l.A.genericLinesTransformed(e.data, [{
      p1: {
        x: m,
        y: h
      },
      p2: {
        x: f,
        y: h
      }
    }, {
      p1: {
        x: f,
        y: h
      },
      p2: {
        x: f,
        y: p
      }
    }, y, {
      p1: {
        x: m,
        y: u
      },
      p2: {
        x: m,
        y: h
      }
    }]);
  }
  class p extends s.US {}
  class u extends s.Au {
    getComponent() {
      return d;
    }
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4.2,5.4 L16,5.4 L16,13.65 C8.63,13.65 10.1,16.63 4.2,14.7 Z"
        }))
      };
    }
    getType() {
      return "flow-document";
    }
    getSettingsComponent() {
      return p;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: h(e)
      };
    }
    getSnapablePoints(e) {
      return h(e).map(e => e.p2).concat(o.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = h(e);
      return o.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return c.A.fromGenericLines(h(e));
    }
  }
  var g = new u();
};
