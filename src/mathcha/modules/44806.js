/* module 44806 — 1862 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => h,
    mt: () => u
  });
  var n = r(40927),
    i = r.n(n),
    o = r(88925),
    s = r(19539),
    a = r(34796),
    l = r(33535);
  class c extends a.PH {
    render() {
      var e = h(this.shape()),
        t = o.A.pathsD(e);
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
  class d extends a.yq {}
  function h(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = s.A.getCenterPoint(r, n);
    return l.A.genericLinesTransformed(e.data, [{
      p1: r,
      p2: {
        x: n.x,
        y: i.y
      }
    }, {
      p1: {
        x: n.x,
        y: i.y
      },
      p2: {
        x: r.x,
        y: n.y
      }
    }]);
  }
  class p extends a.o9 {
    getComponent() {
      return c;
    }
    getType() {
      return "arrow-head-1";
    }
    getSettingsComponent() {
      return d;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t;
      return {
        data: h(e)
      };
    }
    getBoundingRect(e) {
      return s.A.genericLinesBbox(h(e));
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
          key: "arrow-head-1"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M4.5,5 L16.5,10.5 L4.5,16"
        }))
      };
    }
  }
  var u = new p();
};
