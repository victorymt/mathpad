/* module 62624 — 8063 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => A,
    mt: () => w
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(33535),
    c = r(88925),
    d = r(38070),
    h = r(48541),
    p = r(20260),
    u = r(30803),
    g = r(86835),
    m = r(34029),
    f = r(84369),
    y = r(30968);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends a.dV {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleSelect", e => {
        this.props.onMouseDown(e);
      });
    }
    getDefaultFillBorderColor() {
      return this.props.fixedContextHandler.getDefaultBorderColor();
    }
    render() {
      var e = this.shape(),
        t = e.data.innerShape,
        r = A(e),
        n = y.L.retrieve(e, this.getStyleIdContext());
      if (g.A.isCubicLineArrow(t) || g.A.isStraightLineArrow(t)) {
        var i = d.A.getReactStyleInfo(b(b({}, t.style), e.style), ["strokeColor", "thickness", "fillColor", "lineJoin", "lineCap"], this.getDefaultFillBorderColor(), n),
          a = d.A.getEntityStyle(t, "thickness");
        return o().createElement(h.Ay, {
          key: t.id,
          type: t.type || "straight",
          headAngleByDistance: t.angleBy,
          mAngleBy: t.mAngleBy,
          mVer: t.mVer,
          tail: t.tail,
          head: t.head,
          shaft: t.shaft,
          middle: t.middle,
          thickness: a,
          headScale: t.headScale,
          data: r.data,
          onMouseDown: this.props.onMouseDown,
          className: "connection",
          isSelected: this.props.isSelected,
          isGroupSelected: this.props.isGroupSelected,
          isRemoteSelected: !1,
          remoteSelectedColor: void 0,
          settings: t.settings,
          noControlPointGuideLine: !0,
          htmlStyleInfo: i
        });
      }
      if (g.A.isPolygon(t)) {
        var l = d.A.getReactStyleInfo(b(b({}, t.style), e.style), ["strokeColor", "thickness", "fillColor", "lineJoin", "lineCap", "strokeType", "boxShadow"], this.getDefaultFillBorderColor(), n);
        return m.A.renderPolygon(t, r.data, this.props.className, this.handleSelect, null, l, {
          isSelected: this.props.isSelected,
          isGroupSelected: this.props.isGroupSelected,
          isRemoteSelected: this.props.isRemoteSelected,
          remoteSelectedColor: this.props.remoteSelectedColor
        });
      }
      if (g.A.isPolygonCurve(t)) {
        var p = d.A.getReactStyleInfo(b(b({}, t.style), e.style), ["strokeColor", "thickness", "fillColor", "lineJoin", "lineCap", "strokeType"], this.getDefaultFillBorderColor(), n);
        return m.A.renderPolygonCurve(t, r.data, this.props.className, p, {
          isSelected: this.props.isSelected,
          isGroupSelected: this.props.isGroupSelected,
          isRemoteSelected: this.props.isRemoteSelected,
          remoteSelectedColor: this.props.remoteSelectedColor,
          disableGuide: !0
        }, null, this.handleSelect);
      }
      var u = s.A.getPointsRect(e.data),
        f = s.A.pointsToLines(u),
        v = c.A.pathsD(f);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(v), o().createElement("path", {
        className: "real",
        d: v,
        style: this.style()
      }));
    }
  }
  class C extends a.US {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleUnBox", () => {
        var e = this.props.entity,
          t = e.data.innerShape,
          r = s.A.rectWidth(e.data),
          n = s.A.rectHeight(e.data);
        switch (t.type) {
          case "cubic":
          case "polygon-curve":
            var i = t,
              o = i.data.map(t => s.A.transformCubicBezier(t, r, n, e.data.p1.x, e.data.p1.y)),
              a,
              c = l.A.genericLinesTransformed(e.data, o).map(e => s.A.toRelativeControlPointCubic(e)),
              d = b(b({
                id: u.w.nextIdByPreviousId(i.id)
              }, i), {}, {
                data: c,
                style: b(b({}, i.style), e.style)
              });
            return void this.props.onNewTypeEntityChanged(e, d);
          default:
            var h = t,
              p = h.data.map(t => ({
                x: t.x * r + e.data.p1.x,
                y: t.y * n + e.data.p1.y
              })),
              g = b(b({
                id: u.w.nextIdByPreviousId(h.id)
              }, h), {}, {
                data: l.A.pointsTransformed(e.data, p),
                style: b(b({}, h.style), e.style)
              });
            this.props.onNewTypeEntityChanged(e, g);
        }
      });
    }
    shouldComponentUpdate() {
      return !1;
    }
    render() {
      return o().createElement("line-box-settings", null, o().createElement("main", null, o().createElement("button", {
        className: "btn-normal",
        title: "Unbox to Original Shape",
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          width: 60
        },
        onClick: this.handleUnBox
      }, "Unboxed"), p.A.separator()));
    }
  }
  class S extends a.Au {
    getComponent() {
      return x;
    }
    getIcon() {
      var e = d.A.getIconSvgStyle();
      return {
        component: o().createElement("svg", {
          key: this.getType(),
          style: e
        }, o().createElement("rect", {
          x: "5",
          y: "6",
          width: "13",
          height: "9"
        }))
      };
    }
    styleSupports(e) {
      return "cubic" != e.data.innerShape.type && e.data.innerShape.type ? ["thickness", "strokeColor", "fillColor", "strokeType", "rotation", "skewX", "boxShadow"] : ["thickness", "strokeColor", "fillColor", "rotation", "skewX"];
    }
    getType() {
      return "line-box";
    }
    getSettingsComponent() {
      return C;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = A(e);
      return "line" == t.type ? {
        data: t.data
      } : {
        data: s.A.pointsToLines(t.data)
      };
    }
    getSnapablePoints(e) {
      var t = A(e);
      if ("line" == t.type) {
        var r = t.data;
        return r.length <= 0 ? [] : [r[0].p1].concat(r.map(e => e.p2));
      }
      return t.data;
    }
    getPaperPath(e) {
      var t = A(e);
      return "line" == t.type ? f.A.fromGenericLines(t.data, !0) : f.A.fromPoints(t.data, !0);
    }
  }
  function A(e) {
    var t = e.data.innerShape,
      r = Math.max(s.A.rectWidth(e.data), 1),
      n = Math.max(s.A.rectHeight(e.data), 1),
      i;
    if ("cubic" == t.type || "polygon-curve" == t.type) {
      var o,
        a = e.data.innerShape.data.map(t => s.A.transformCubicBezier(t, r, n, e.data.p1.x, e.data.p1.y));
      return {
        type: "line",
        data: l.A.genericLinesTransformed(e.data, a)
      };
    }
    if (!t.type || "polygon" == t.type) {
      var c,
        d = e.data.innerShape.data.map(t => ({
          x: t.x * r + e.data.p1.x,
          y: t.y * n + e.data.p1.y
        }));
      return {
        type: "points",
        data: l.A.pointsTransformed(e.data, d)
      };
    }
    return {
      type: "points",
      data: s.A.getPointsRect(e.data)
    };
  }
  var w = new S();
};
