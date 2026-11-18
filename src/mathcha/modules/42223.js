/* module 42223 — 12385 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Y: () => O,
    mt: () => D
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(30803),
    l = r(91414),
    c = r(42480),
    d = r(20260),
    h = r(78760),
    p = r(43774),
    u = r(26855),
    g = r(22005),
    m = r(29315),
    f = r(33535),
    y = r(10192),
    v = r(39314),
    b = r(38070),
    x = r(391);
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A extends u.T2 {
    render() {
      var e = this.props.shape,
        t = O(e),
        r = g.A.fromPaths([t.xAxis, t.yAxis], "real"),
        n = g.A.fromPaths([t.xAxis, t.yAxis], "transparent", this.transparentStyle()),
        i = t.lines ? g.A.fromPaths(t.lines) : void 0,
        s = v.A.getHtmlColorWithOpacity(b.A.getEntityStyle(e, "textColor"), !0),
        a = t.textPoints ? o().createElement("g", {
          style: {
            fill: s.color,
            fillOpacity: s.opacity,
            fontSize: 11,
            fontWeight: "normal",
            textAnchor: "end",
            stroke: "none",
            fontFamily: "Times"
          }
        }, t.textPoints.map((e, t) => o().createElement("text", {
          key: t,
          x: e.p.x,
          y: e.p.y
        }, e.text))) : void 0,
        l = g.A.fromPoints(t.xArrow),
        c = g.A.fromPoints(t.yArrow);
      return o().createElement("g", {
        className: this.props.className + " axis2d",
        style: this.props.styleInfo.style,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, r, n, l, c, i, a);
    }
  }
  class w extends u.ih {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity;
      return this.isSettingDifferent(t, r, "separatorDistance") || this.isSettingDifferent(t, r, "numering") || this.isStyleDifferent(t, r, "textColor") || this.isSettingDifferent(t, r, "separator");
    }
    renderSepratorDistance(e) {
      if (e) {
        var t = this.props.entity,
          r = x.A.getSettings(t, "separatorDistance");
        return [o().createElement(l.A, {
          title: "Separator distance",
          key: "2",
          unit: "px",
          min: 5,
          max: 200,
          step: 1,
          value: r,
          icon: o().createElement("svg", {
            style: {
              width: "21px",
              height: "14px",
              strokeWidth: "1px",
              stroke: "lightgray",
              fill: "none",
              overflow: "visible"
            }
          }, o().createElement("path", {
            style: {
              transform: "translate(-4px,5px)",
              stroke: "gray"
            },
            d: "M2,7 L20,7 M6,4 L6,10  M16,4 L16,10"
          }), o().createElement(c.A, {
            p1: {
              x: 0,
              y: 6
            },
            p2: {
              x: 14,
              y: 6
            },
            style: {
              stroke: "green",
              strokeOpacity: .8,
              fill: "none",
              fillOpacity: .6
            }
          })),
          onValueChanging: e => this.props.onEntityPropertyChanging(t, "settings", "separatorDistance", e),
          onValueChanged: (e, r) => this.props.onEntityPropertyChanged(t, "settings", "separatorDistance", e, r)
        }), d.A.separator1()];
      }
    }
    renderNumering(e) {
      if (e) {
        var t = this.props.entity,
          r = x.A.getSettings(t, "numering");
        return o().createElement("numering-settings", {
          style: {
            display: "flex"
          }
        }, o().createElement("item", {
          title: "Show Number",
          onMouseDown: () => this.props.onEntityPropertyChanged(t, "settings", "numering", !r),
          className: r ? "selected" : "",
          style: {
            width: 22
          }
        }, d.A.svgNumberIcon()), o().createElement(h.A, {
          requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
          value: b.A.getEntityStyle(t, "textColor"),
          onItemSelect: (e, r) => this.props.onEntityPropertyChanged(t, "style", "textColor", e, r)
        }), d.A.separator());
      }
    }
    render() {
      var e = this.props.entity,
        t = x.A.getSettings(e, "separator");
      return o().createElement("axis2d-settings", {
        style: {
          display: "flex"
        }
      }, o().createElement("item", {
        title: "Enable Separator",
        onMouseDown: () => this.props.onEntityPropertyChanged(e, "settings", "separator", !t),
        className: t ? "selected" : "",
        style: {
          width: 22
        }
      }, d.A.svgAxisIcon()), d.A.separator(), this.renderSepratorDistance(t), this.renderNumering(t));
    }
  }
  class E extends m.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return A;
    }
    getType() {
      return "axis2d";
    }
    getSettingDefaultValue(e) {
      return "separator" != e && ("separatorDistance" == e ? 20 : "textColor" == e ? "#000" : void 0);
    }
    getSettingsComponent() {
      return w;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = O(e);
      return {
        data: [t.xAxis, t.yAxis]
      };
    }
    createShape(e) {
      return e = S(S({}, e), {}, {
        shapeWidth: 100,
        shapeHeight: 10
      }), y.A.createBy(e, e => {
        var t = e.bottom,
          r = p.A.getRandomPosYAround(e.top + 50, e.top + 150, t);
        return {
          id: a.w.nextDiagramCompositeShapeId(),
          type: "axis2d",
          data: {
            p1: {
              x: e.left + 50,
              y: r.y1
            },
            p2: {
              x: e.left + 150,
              y: r.y1 + 100
            },
            cp: {
              x: e.left + 60,
              y: r.y1 + 90
            }
          }
        };
      });
    }
    getIcon() {
      return {
        caption: "axis",
        component: o().createElement("svg", {
          style: {
            width: 25,
            height: 20,
            position: "relative"
          },
          key: "axis2d"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(3px,8px)"
          },
          d: "M2,7 L18,7   M15,5 L18,7 L15,9"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "rotate(-90deg) translate(-21px, 2px)"
          },
          d: "M2,7 L18,7 M15,5 L18,7 L15,9"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = f.A.pointTransformed(e.data, e.data.cp);
      return n.concat([{
        key: "md1",
        type: "square",
        p: i
      }]);
    }
    keepCenterRatio(e, t) {
      var r = e.data,
        n = r.cp,
        i = r.p1,
        o = s.A.rectWidthHeight(e.data),
        a = o.width,
        l = o.height,
        c = (n.x - i.x) / a,
        d = (n.y - i.y) / l,
        h = s.A.rectWidthHeight(t.data),
        p = h.width,
        u = h.height,
        g = {
          x: t.data.p1.x + p * c,
          y: t.data.p1.y + u * d
        };
      return g = s.A.clampPoint(g, t.data.p1, t.data.p2), this.changeShapeData(t, "cp", g);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) {
        var t = super.moveControlPoint(e);
        return this.keepCenterRatio(e.shape, t);
      }
      if ("md1" == e.key) {
        var r = e.shape.data,
          n = r.p1,
          i = r.p2,
          o = f.A.reversePoint(e.shape.data, e.point),
          a = s.A.clampPoint(o, n, i);
        return this.changeShapeData(e.shape, "cp", a);
      }
      return e.shape;
    }
    move(e, t, r) {
      var n = e.data,
        i = n.p1,
        o = n.cp,
        a = super.move(e, t, r),
        l = s.A.substractPoint(o, i),
        c = s.A.addPoint(a.data.p1, l);
      return this.changeShapeData(a, "cp", c);
    }
    scale(e, t, r, n) {
      var i = super.scale(e, t, r, n);
      return this.keepCenterRatio(e, i);
    }
    styleSupports() {
      return ["thickness", "strokeColor", "intersection", "strokeType", "rotation", "skewX"];
    }
    getSnapablePoints(e) {
      return f.A.pointsTransformed(e.data, [e.data.cp]);
    }
    rotateAround(e, t, r) {
      var n = super.rotateAround(e, t, r);
      return this.keepCenterRatio(e, n);
    }
    skewXAtCenter(e, t, r) {
      var n = super.skewXAtCenter(e, t, r);
      return this.keepCenterRatio(e, n);
    }
  }
  function k(e, t, r) {
    var n, i;
    return {
      xAxis: {
        p1: {
          x: e.x,
          y: r.y
        },
        p2: {
          x: t.x,
          y: r.y
        }
      },
      yAxis: {
        p1: {
          x: r.x,
          y: e.y
        },
        p2: {
          x: r.x,
          y: t.y
        }
      }
    };
  }
  function O(e) {
    var t = x.A.getSettings(e, "separator"),
      r = e.data,
      n = r.p1,
      i = r.p2,
      o = r.cp,
      a = k(n, i, o),
      l = a.xAxis,
      c = a.yAxis,
      d = [{
        x: l.p2.x - 7,
        y: l.p2.y - 5
      }, {
        x: l.p2.x,
        y: l.p2.y
      }, {
        x: l.p2.x - 7,
        y: l.p2.y + 5
      }],
      h = [{
        x: c.p1.x - 5,
        y: c.p1.y + 7
      }, {
        x: c.p1.x,
        y: c.p1.y
      }, {
        x: c.p1.x + 5,
        y: c.p1.y + 7
      }];
    if (!t) return {
      xAxis: f.A.genericLinesTransformed(e.data, [l])[0],
      yAxis: f.A.genericLinesTransformed(e.data, [c])[0],
      xArrow: f.A.pointsTransformed(e.data, d),
      yArrow: f.A.pointsTransformed(e.data, h),
      lines: null,
      textPoints: null
    };
    for (var p = x.A.getSettings(e, "separatorDistance"), u = x.A.getSettings(e, "numering"), g = s.A.distance2Points(o, l.p2), m = [], y = [], v = p, b = 1; v < g - 15; v += p, b++) m.push({
      p1: {
        x: o.x + v,
        y: o.y - 5
      },
      p2: {
        x: o.x + v,
        y: o.y + 5
      }
    }), u && y.push({
      text: b.toString(),
      p: {
        x: o.x + v + 3,
        y: o.y + 15
      }
    });
    for (var C = s.A.distance2Points(o, l.p1), S = p, A = 1; S < C - 5; S += p, A++) m.push({
      p1: {
        x: o.x - S,
        y: o.y - 5
      },
      p2: {
        x: o.x - S,
        y: o.y + 5
      }
    }), u && y.push({
      text: (-A).toString(),
      p: {
        x: o.x - S + 3,
        y: o.y + 15
      }
    });
    for (var w = s.A.distance2Points(o, c.p1), E = p, O = 1; E < w - 15; E += p, O++) m.push({
      p1: {
        x: o.x - 5,
        y: o.y - E
      },
      p2: {
        x: o.x + 5,
        y: o.y - E
      }
    }), u && y.push({
      text: O.toString(),
      p: {
        x: o.x - 7,
        y: o.y - E + 3
      }
    });
    for (var D = s.A.distance2Points(o, c.p2), P = p, M = 1; P < D - 5; P += p, M++) m.push({
      p1: {
        x: o.x - 5,
        y: o.y + P
      },
      p2: {
        x: o.x + 5,
        y: o.y + P
      }
    }), u && y.push({
      text: (-M).toString(),
      p: {
        x: o.x - 7,
        y: o.y + P + 3
      }
    });
    return {
      lines: f.A.genericLinesTransformed(e.data, m),
      textPoints: y.map(t => ({
        p: f.A.pointTransformed(e.data, t.p),
        text: t.text
      })),
      xAxis: f.A.genericLinesTransformed(e.data, [l])[0],
      yAxis: f.A.genericLinesTransformed(e.data, [c])[0],
      xArrow: f.A.pointsTransformed(e.data, d),
      yArrow: f.A.pointsTransformed(e.data, h)
    };
  }
  var D = new E();
};
