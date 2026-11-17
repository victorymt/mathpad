/* module 94059 — 3614 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => g,
    mt: () => y
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(91414),
    c = r(88925),
    d = r(20260),
    h = r(34796),
    p = r(33535);
  class u extends h.PH {
    render() {
      var e = g(this.shape()),
        t = c.A.pathsD(e);
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
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .5 : i,
      l = a.A.getCenterPoint(r, n),
      c = n.x - r.x,
      d = [];
    return d.push({
      p1: r,
      p2: {
        x: n.x,
        y: l.y
      }
    }), d.push({
      p1: s().last(d).p2,
      p2: {
        x: r.x,
        y: n.y
      }
    }), d.push({
      p1: s().last(d).p2,
      p2: {
        x: r.x + o * c,
        y: l.y
      }
    }), d.push({
      p1: s().last(d).p2,
      p2: r
    }), p.A.genericLinesTransformed(e.data, d);
  }
  class m extends h.yq {
    render() {
      var e = this.props.entity.data.percentage,
        t = void 0 === e ? .5 : e;
      return i().createElement("arrow-head-3-settings", null, i().createElement(l.A, {
        unit: "%",
        min: 0,
        max: 100,
        step: 1,
        value: 100 * t,
        icon: i().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "lightgray",
            fill: "none",
            overflow: "visible"
          }
        }, i().createElement("path", {
          style: {
            transform: "translate(0px,-1px)"
          },
          d: " M3.968907834428151,3.986814462515074 L16.74460106340797,10.88404171757177 L3.968907834428151,17.781268972628467 L10.35675444891806,10.88404171757177 L3.968907834428151,3.986814462515074"
        }), i().createElement("circle", {
          cx: 8,
          cy: 10,
          r: 2,
          style: {
            stroke: "green",
            fill: "#9af79a",
            strokeWidth: 1
          }
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "percentage", e / 100),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "percentage", e / 100, t)
      }), d.A.separator());
    }
  }
  class f extends h.o9 {
    getComponent() {
      return u;
    }
    getType() {
      return "arrow-head-3";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: g(e)
      };
    }
    getBoundingRect(e) {
      return a.A.genericLinesBbox(g(e));
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
          key: "arrow-head-3"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: " M4,4 L17.5,10 L4,16 L10.75,10 L4,4"
        }))
      };
    }
  }
  var y = new f();
};
