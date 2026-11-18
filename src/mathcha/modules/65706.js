/* module 65706 — 7968 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    r: () => h
  });
  var n = r(64467),
    i = r(391),
    o = r(19539),
    s = r(75331),
    a = r(80238);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d {
    getScale(e) {
      return {
        x: i.A.getPlotSettings(null == e ? void 0 : e.xAxis, "scale"),
        y: i.A.getPlotSettings(null == e ? void 0 : e.yAxis, "scale")
      };
    }
    getCenterDelta(e) {
      var t, r;
      return {
        x: i.A.getSettings(e, "centerXDelta"),
        y: i.A.getSettings(e, "centerYDelta")
      };
    }
    swithViewPort(e, t, r) {
      var n = e.width,
        i = e.height,
        o = t.width,
        s = t.height,
        a = o / n,
        l = r.delta.x / n,
        c = r.delta.y / i;
      return {
        scale: {
          x: r.scale.x * a,
          y: r.scale.y * a
        },
        delta: {
          x: o * l,
          y: s * c
        }
      };
    }
    buildVariableScope() {
      var e,
        t = {};
      return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(e => {
        "value" == e.type && (t[e.name] = e.value);
      }), t;
    }
    buildMathPlotSettings(e, t, r, n, i) {
      var o = this.getViewPort(e.p1, e.p2, e.axisType),
        s = o.p1,
        a = o.p2,
        l,
        c,
        d;
      return {
        domain: {
          xDomain: {
            from: -n / t,
            to: (a.x - s.x) / t - n / t
          },
          yDomain: {
            from: i / r,
            to: (a.y - s.y) / r + i / r
          }
        },
        view: {
          p1: s,
          p2: a,
          centerDelta: {
            x: n,
            y: i
          },
          viewWidth: a.x - s.x,
          viewHeight: a.y - s.y
        },
        domainToViewScale: {
          x: t,
          y: r
        },
        shapeView: e
      };
    }
    getViewPort(e, t, r) {
      return "scientific-clean" == r ? {
        p1: {
          x: e.x + 20,
          y: e.y
        },
        p2: {
          x: t.x,
          y: t.y - 20
        }
      } : "scientific" == r ? {
        p1: {
          x: e.x + 14,
          y: e.y + 3
        },
        p2: {
          x: t.x - 8,
          y: t.y - 14
        }
      } : {
        p1: e,
        p2: t
      };
    }
    resolveMajorStep(e, t) {
      return "number" == typeof e ? e : Math.max(2, Math.floor(t / 70));
    }
    resolveMajorStepBound(e, t, r, n) {
      if (o.A.round4(e.scale) == o.A.round4(t.scale) && e.unitType == t.unitType && "auto" == e.majorSteps && "auto" == t.majorSteps) {
        var i = s.j.getYMinMax(n, e.scale, r.width),
          l = s.j.getYMinMax(n, t.scale, r.height),
          c = a.A.calculateRadix10StepSize(i, e.majorStepsResolved),
          d = a.A.calculateRadix10StepSize(l, t.majorStepsResolved);
        if (c != d) for (var h = c < d ? -1 : 1, p = 1; p < 20; p++) {
          var u = e.majorStepsResolved + h * p / 2,
            g;
          if (u <= 0) return void (e.majorStepsResolved = 2);
          if (a.A.calculateRadix10StepSize(i, u) == d) return void (e.majorStepsResolved = u);
        }
      }
    }
    majorStepsHandle(e) {
      return "auto" == e ? e : Math.max(1, e);
    }
    buildPlotInfo(e, t, r) {
      var n = e.xAxis || {},
        s = e.yAxis || {},
        a = {
          axisType: i.A.getPlotSettings(e, "axisType"),
          axisArrangement: i.A.getPlotSettings(e, "axisArrangement"),
          arrowMode: i.A.getPlotSettings(e, "arrowMode"),
          blockIntersection: !1
        },
        l = this.getViewPort(t.p1, t.p2, a.axisType),
        c = o.A.rectWidthHeight(l),
        d = {
          plotAxisShow: i.A.getPlotSettings(n, "plotAxisShow"),
          plotAxisNumering: i.A.getPlotSettings(n, "plotAxisNumering"),
          plotGridShow: i.A.getPlotSettings(n, "plotGridShow"),
          majorSteps: this.majorStepsHandle(i.A.getPlotSettings(n, "majorSteps")),
          majorTextColor: i.A.getPlotSettings(n, "majorTextColor"),
          majorTextFontSize: i.A.getPlotSettings(n, "majorTextFontSize"),
          minorTickShow: i.A.getPlotSettings(n, "minorTickShow"),
          minorGridShow: i.A.getPlotSettings(n, "minorGridShow"),
          minorStep: i.A.getPlotSettings(n, "minorStep"),
          unitType: i.A.getPlotSettings(n, "unitType"),
          axisColor: i.A.getPlotSettings(n, "axisColor"),
          scale: i.A.getPlotSettings(n, "scale"),
          axisThickness: i.A.getPlotSettings(n, "axisThickness"),
          majorTickThickness: i.A.getPlotSettings(n, "majorTickThickness"),
          minorTickThickness: i.A.getPlotSettings(n, "minorTickThickness"),
          blockIntersection: !1,
          majorStepsResolved: this.resolveMajorStep(i.A.getPlotSettings(n, "majorSteps"), c.width)
        },
        h = {
          plotAxisShow: i.A.getPlotSettings(s, "plotAxisShow"),
          plotAxisNumering: i.A.getPlotSettings(s, "plotAxisNumering"),
          plotGridShow: i.A.getPlotSettings(s, "plotGridShow"),
          majorSteps: this.majorStepsHandle(i.A.getPlotSettings(s, "majorSteps")),
          majorTextColor: i.A.getPlotSettings(s, "majorTextColor"),
          majorTextFontSize: i.A.getPlotSettings(s, "majorTextFontSize"),
          minorTickShow: i.A.getPlotSettings(s, "minorTickShow"),
          minorGridShow: i.A.getPlotSettings(s, "minorGridShow"),
          minorStep: i.A.getPlotSettings(s, "minorStep"),
          unitType: i.A.getPlotSettings(s, "unitType"),
          axisColor: i.A.getPlotSettings(s, "axisColor"),
          scale: i.A.getPlotSettings(s, "scale"),
          axisThickness: i.A.getPlotSettings(s, "axisThickness"),
          majorTickThickness: i.A.getPlotSettings(s, "majorTickThickness"),
          minorTickThickness: i.A.getPlotSettings(s, "minorTickThickness"),
          blockIntersection: !1,
          majorStepsResolved: this.resolveMajorStep(i.A.getPlotSettings(s, "majorSteps"), c.height)
        },
        p;
      return this.resolveMajorStepBound(d, h, c, r), {
        axes: a,
        xAxis: d,
        yAxis: h,
        arrowMode: i.A.getPlotSettings(e, "arrowMode")
      };
    }
    axisTypeChange(e, t) {
      return this.buildMathPlotSettings(c(c({}, t.shapeView), {}, {
        axisType: e
      }), t.domainToViewScale.x, t.domainToViewScale.y, t.view.centerDelta.x, t.view.centerDelta.y);
    }
    centerDeltaMove(e, t) {
      return this.buildMathPlotSettings(t.shapeView, t.domainToViewScale.x, t.domainToViewScale.y, t.view.centerDelta.x + e.x, t.view.centerDelta.y + e.y);
    }
    mouseWheelScale(e, t) {
      var r = t.scale.x,
        n = t.scale.y,
        i = .005,
        s,
        a,
        l = r * (e * i) + r,
        c = n * (e * i) + n;
      if (l < .01 || c < .01) return t;
      if (l > 1e4 || c > 1e4) return t;
      var d = t.viewSize,
        h = d.height,
        p = d.width,
        u = t.delta,
        g = {
          x: p / 2,
          y: -h / 2
        },
        m = o.A.substractPoint(u, g),
        f;
      return m = {
        x: m.x * (l / r),
        y: m.y * (c / n)
      }, {
        scale: {
          x: l,
          y: c
        },
        delta: o.A.addPoint(g, m),
        viewSize: t.viewSize
      };
    }
  }
  var h = new d();
};
