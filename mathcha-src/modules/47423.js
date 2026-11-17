/* module 47423 — 2255 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => d,
    mt: () => u
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(34796),
    a = r(33535),
    l = r(88925);
  class c extends s.PH {
    render() {
      var e = d(this.shape()),
        t = l.A.pathsD(e);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), i().createElement("path", {
        className: "transparent no-print",
        style: this.transparentStyle(),
        d: t
      }), i().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function d(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = o.A.getCenterPoint(r, n),
      s = n.y - r.y,
      l = n.x - r.x,
      c = {
        p1: r,
        cp: {
          x: r.x + l / 2,
          y: i.y - s / 12
        },
        p2: {
          x: n.x,
          y: i.y
        }
      },
      d = {
        p1: {
          x: n.x,
          y: i.y
        },
        cp: {
          x: r.x + l / 2,
          y: i.y + s / 12
        },
        p2: {
          x: r.x,
          y: n.y
        }
      };
    return a.A.genericLinesTransformed(e.data, [o.A.quadraticToCubic(c), o.A.quadraticToCubic(d)]);
  }
  class h extends s.yq {}
  class p extends s.o9 {
    getComponent() {
      return c;
    }
    getType() {
      return "arrow-head-4";
    }
    getSettingsComponent() {
      return h;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: d(e)
      };
    }
    getBoundingRect(e) {
      return o.A.genericLinesBbox(d(e));
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
          key: "arrow-head-4"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M4,4 Q9.75,9 15.5,10 Q9.75,11  4,16"
        }))
      };
    }
  }
  var u = new p();
};
