/* module 55484 — 4065 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => m,
    mt: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(33535),
    d = r(20260),
    h = r(84369);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g extends a.dV {
    render() {
      var e = m(this.shape()),
        t = l.A.getLineD(e);
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
  function m(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = r.y,
      o = n.y,
      s = r.x,
      a = n.x;
    return c.A.pointsTransformed(e.data, [{
      x: s,
      y: i
    }, {
      x: a,
      y: i
    }, {
      x: a,
      y: o
    }]);
  }
  class f extends a.US {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRotate90", () => {
        var e = this.props.entity,
          t = s.A.addRotation360(e.data.rotation, 90);
        this.props.onEntityPropertyChanged(this.props.entity, "data", "rotation", t, !1);
      });
    }
    shouldComponentUpdate(e) {
      return !1;
    }
    render() {
      return o().createElement("parallelogram-settings", null, o().createElement("main", null, o().createElement("button", {
        className: "btn-normal",
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          width: 90
        },
        onClick: this.handleRotate90
      }, "Rotate 90"), d.A.separator()));
    }
  }
  class y extends a.Au {
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
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M4,5.6 L16.1,5.6 L16.1,15.2 "
        }))
      };
    }
    createShape(e) {
      return super.createShape(u(u({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getComponent() {
      return g;
    }
    getType() {
      return "doc-right-angle";
    }
    getSettingsComponent() {
      return f;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: s.A.pointsToLines(m(e))
      };
    }
    buildSnapPoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = r.y,
        o = n.y,
        s = r.x,
        a = n.x;
      return c.A.pointsTransformed(e.data, [{
        x: s,
        y: i
      }, {
        x: a,
        y: i
      }, {
        x: a,
        y: o
      }, {
        x: s,
        y: o
      }]);
    }
    getSnapablePoints(e) {
      return this.buildSnapPoints(e).concat(s.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = m(e);
      return s.A.getBoundingRectFromPoints(t);
    }
    getPaperPath(e) {
      return h.A.fromPoints(m(e), !0);
    }
  }
  var v = new y();
};
