/* module 25125 — 4754 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => f,
    mt: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(88925),
    l = r(33535),
    c = r(29315),
    d = r(20260),
    h = r(30803),
    p = r(39314);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends c.dV {
    getStyle() {
      var e = this.style();
      if (this.props.fixedContextHandler.isDarkMode()) {
        var t = p.A.colorToArr(e.stroke, [0, 0, 0]);
        if (0 == t[0] && 0 == t[1] && 0 == t[2]) return g(g({}, e), {}, {
          stroke: this.props.fixedContextHandler.getDefaultBorderColor()
        });
      }
      return e;
    }
    render() {
      var e = f(this.shape()),
        t = a.A.pathsD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), o().createElement("path", {
        className: "real",
        d: t,
        style: g(g({}, this.getStyle()), {}, {
          strokeLinejoin: "round",
          strokeLinecap: "round"
        })
      }));
    }
  }
  function f(e) {
    var t = e.data.p1,
      r = s.A.rectWidthHeight(e.data),
      n = r.width,
      i = r.height,
      o = e.data.paths.map(e => ({
        p1: s.A.relativeToAbsolutePoint(t, e.p1, n, i),
        p2: s.A.relativeToAbsolutePoint(t, e.p2, n, i),
        cp: s.A.relativeToAbsolutePoint(t, e.cp, n, i),
        cp2: s.A.relativeToAbsolutePoint(t, e.cp2, n, i)
      }));
    return l.A.genericLinesTransformed(e.data, o);
  }
  class y extends c.US {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleConvertToCurve", () => {
        var e = this.props.entity,
          t,
          r = f(e).map(e => s.A.toRelativeControlPointCubic(e)),
          n = {
            id: h.w.nextDiagramArrowId(),
            type: "cubic",
            data: r,
            head: "no",
            tail: "no",
            shaft: "-",
            mVer: 1,
            settings: {
              isControlPointBreak: !0
            },
            style: {
              thickness: e.style.thickness,
              strokeColor: e.style.strokeColor,
              lineJoin: "round",
              lineCap: "round"
            }
          };
        this.props.onNewTypeEntityChanged(e, n);
      });
    }
    render() {
      return this.props.forManyEntities ? o().createElement("div", null) : o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("button", {
        className: "btn-normal",
        onClick: this.handleConvertToCurve,
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5
        }
      }, "To Curve"), d.A.separator());
    }
  }
  class v extends c.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
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
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M4,5.6 L16.1,5.6 L16.1,15.2 L4,15.2 Z"
        }))
      };
    }
    createShape(e) {
      throw new Error("not implemented");
    }
    getComponent() {
      return m;
    }
    getType() {
      return "free-drawing";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      return [];
    }
    getBoundingRect(e) {
      return s.A.genericLinesBbox(f(e));
    }
    styleSupports() {
      return ["thickness", "strokeColor", "strokeType"];
    }
  }
  var b = new v();
};
