/* module 89806 — 3826 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ay: () => f,
    UL: () => y,
    mt: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(33535),
    c = r(88925),
    d = r(38070),
    h = r(84369),
    p = r(20260),
    u = r(30803);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends a.dV {
    render() {
      var e = y(this.shape()),
        t = c.A.pathsD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = s.A.ellipseToCubicBeziers(r, n);
    return l.A.genericLinesTransformed(e.data, i);
  }
  class v extends a.US {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleToArc", () => {
        var e = {
          id: u.w.nextDiagramCompositeShapeId(),
          type: "doc-arc",
          data: m({}, this.props.entity.data),
          style: m({}, this.props.entity.style)
        };
        this.props.onNewTypeEntityChanged(this.props.entity, e);
      }), (0, n.A)(this, "handleToPie", () => {
        var e = {
          id: u.w.nextDiagramCompositeShapeId(),
          type: "doc-pie",
          data: m({}, this.props.entity.data),
          style: m({}, this.props.entity.style)
        };
        this.props.onNewTypeEntityChanged(this.props.entity, e);
      });
    }
    render() {
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("button", {
        style: {
          width: 60
        },
        className: "btn-normal btn-large",
        onClick: this.handleToArc
      }, "To Arc"), o().createElement("button", {
        style: {
          marginLeft: 5,
          width: 60
        },
        className: "btn-normal btn-large",
        onClick: this.handleToPie
      }, "To Pie"), p.A.separator());
    }
  }
  class b extends a.Au {
    getComponent() {
      return f;
    }
    getIcon() {
      var e = d.A.getIconSvgStyle();
      return {
        component: o().createElement("svg", {
          key: this.getType(),
          style: e
        }, o().createElement("ellipse", {
          cx: "11",
          cy: "10",
          rx: "7",
          ry: "5"
        }))
      };
    }
    getType() {
      return "ellipse";
    }
    getSettingsComponent() {
      return v;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: y(e)
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = s.A.getCenterPoint(r, n);
      return y(e).map(e => e.p2).concat(i);
    }
    getBoundingRect(e) {
      var t = y(e);
      return s.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return h.A.fromGenericLines(y(e));
    }
  }
  var x = new b();
};
