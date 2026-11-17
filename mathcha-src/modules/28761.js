/* module 28761 — 3200 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O: () => d,
    mt: () => u
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(88925),
    a = r(34796),
    l = r(33535);
  class c extends a.PH {
    render() {
      var e = d(this.shape()),
        t = s.A.pathsD(e.circle),
        r = s.A.pathsD(e.line1),
        n = s.A.pathsD(e.line2);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), i().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), i().createElement("path", {
        className: "transparent no-print",
        d: r,
        style: this.transparentStyle()
      }), i().createElement("path", {
        className: "transparent no-print",
        d: n,
        style: this.transparentStyle()
      }), i().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }), i().createElement("path", {
        className: "real",
        d: r,
        style: this.styleNoFill()
      }), i().createElement("path", {
        className: "real",
        d: n,
        style: this.styleNoFill()
      }));
    }
  }
  function d(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = o.A.rectWidth(e.data),
      s = o.A.rectHeight(e.data),
      a = o.A.ellipseToCubicBeziers(r, n);
    return {
      circle: l.A.genericLinesTransformed(e.data, a),
      line1: l.A.genericLinesTransformed(e.data, [{
        p1: {
          x: r.x,
          y: r.y + s / 2
        },
        p2: {
          x: n.x,
          y: r.y + s / 2
        }
      }]),
      line2: l.A.genericLinesTransformed(e.data, [{
        p1: {
          x: r.x + i / 2,
          y: r.y
        },
        p2: {
          x: r.x + i / 2,
          y: n.y
        }
      }])
    };
  }
  class h extends a.yq {}
  class p extends a.o9 {
    getComponent() {
      return c;
    }
    getType() {
      return "arrow-head-6";
    }
    getSettingsComponent() {
      return h;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = d(e);
      return {
        data: t.circle.concat(t.line1).concat(t.line2)
      };
    }
    getBoundingRect(e) {
      var t = d(e);
      return o.A.genericLinesBbox(t.circle);
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
          key: "arrow-head-6"
        }, i().createElement("ellipse", {
          cx: "11.083",
          cy: "10.0491",
          rx: "6.4169",
          ry: "5.950",
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          }
        }), i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M4.666,10.0491 L17.5,10.0491 M11.083,4.098 L11.083,16"
        }))
      };
    }
  }
  var u = new p();
};
