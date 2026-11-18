/* module 62805 — 3665 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => m,
    mt: () => v
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(91414),
    c = r(42480),
    d = r(88925),
    h = r(20260),
    p = r(34796),
    u = r(33535);
  class g extends p.PH {
    render() {
      var e = m(this.shape()),
        t = d.A.pathsD(e);
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
  function m(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.distance,
      o = void 0 === i ? 4 : i,
      l = n.x - r.x,
      c = a.A.getCenterPoint(r, n),
      d = [];
    return d.push({
      p1: r,
      p2: {
        x: Math.max(n.x - o, r.x),
        y: c.y
      }
    }), d.push({
      p1: s().last(d).p2,
      p2: {
        x: r.x,
        y: n.y
      }
    }), l > o && (d.push({
      p1: {
        x: r.x + o,
        y: r.y
      },
      p2: {
        x: n.x,
        y: c.y
      }
    }), d.push({
      p1: s().last(d).p2,
      p2: {
        x: r.x + o,
        y: n.y
      }
    })), u.A.genericLinesTransformed(e.data, d);
  }
  class f extends p.yq {
    render() {
      var e = this.props.entity.data.distance,
        t = void 0 === e ? 4 : e;
      return i().createElement("arrow-head-2-settings", null, i().createElement(l.A, {
        unit: "px",
        min: 0,
        max: 100,
        step: 1,
        value: t,
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
            transform: "translate(2px,0)"
          },
          d: "M2,4 L10.5,10 L2,16M8,4 L16.5,10 L8,16 "
        }), i().createElement(c.A, {
          p1: {
            x: 8,
            y: 10
          },
          p2: {
            x: 19,
            y: 10
          },
          style: {
            stroke: "green",
            strokeOpacity: .6,
            fill: "none",
            fillOpacity: .6
          }
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "distance", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "distance", e, t)
      }), h.A.separator());
    }
  }
  class y extends p.o9 {
    getComponent() {
      return g;
    }
    getType() {
      return "arrow-head-2";
    }
    getSettingsComponent() {
      return f;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: m(e)
      };
    }
    getBoundingRect(e) {
      return a.A.genericLinesBbox(m(e));
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
          key: "arrow-head-2"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M3.5,4 L13.5,10 L3.5,16M7.5,4 L17.5,10 L7.5,16"
        }))
      };
    }
  }
  var v = new y();
};
