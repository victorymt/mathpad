/* module 35656 — 4684 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    mt: () => x,
    t: () => y
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(61848),
    l = r(19539),
    c = r(88925),
    d = r(20260),
    h = r(29315),
    p = r(35900),
    u = r(33535),
    g = r(391),
    m = r(84369);
  class f extends h.dV {
    render() {
      var e = g.A.getSettings(this.shape(), "centerConnectLine"),
        t = y(this.shape(), e),
        r = y(this.shape(), !0),
        n = c.A.pathsD(t),
        o = c.A.pathsD(r);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), i().createElement("path", {
        className: "transparent no-print",
        d: n,
        style: this.transparentStyle()
      }), i().createElement("path", {
        className: "real",
        d: o,
        style: this.styleNoStroke()
      }), i().createElement("path", {
        className: "real",
        d: n,
        style: this.styleNoFill()
      }));
    }
  }
  function y(e, t) {
    var r = e.data,
      n = r.p1,
      i = r.p2,
      o = r.angle1,
      a = void 0 === o ? 70 : o,
      c = r.angle2,
      d = void 0 === c ? 290 : c,
      h = (0, p.k)({
        p1: n,
        p2: i
      }, a, d);
    if (t) {
      var g = l.A.getCenterPoint({
          p1: n,
          p2: i
        }),
        m = s().first(h),
        f = s().last(h);
      h.push({
        p1: f.p2,
        p2: g
      }), h.push({
        p1: g,
        p2: m.p1
      });
    }
    return u.A.genericLinesTransformed(e.data, h);
  }
  class v extends h.US {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity;
      return this.isSettingDifferent(t, r, "centerConnectLine");
    }
    render() {
      var e = this.props.entity,
        t = g.A.getSettings(e, "centerConnectLine");
      return i().createElement("arc-settings", null, i().createElement("main", null, i().createElement("item", {
        onMouseDown: () => this.props.onEntityPropertyChanged(e, "settings", "centerConnectLine", !t),
        className: t ? "selected" : "",
        style: {
          width: 23,
          marginLeft: 5
        }
      }, i().createElement("svg", null, i().createElement("path", {
        style: {
          stroke: "#e0e0e0",
          fill: "none"
        },
        d: " M2.9,7.28 C5.34,5.68 8.34,4.74 11.58,4.74 C14.62,4.74 17.45,5.57 19.81,7 L11.579484798147945,18.368009507593335 Z"
      }), i().createElement("path", {
        style: {
          stroke: "green",
          fill: "none",
          strokeWidth: 2
        },
        d: "M19.81,7 L11.579484798147945,18.368009507593335 L2.9,7.28"
      }))), d.A.separator()));
    }
  }
  class b extends h.Au {
    getComponent() {
      return f;
    }
    getType() {
      return "arc";
    }
    getSettingsComponent() {
      return v;
    }
    getAngleCutPoints(e) {
      var t,
        r = y(e, g.A.getSettings(e, "centerConnectLine"));
      return [{
        key: "ap1",
        p: r[0].p1,
        type: "square"
      }, {
        key: "ap2",
        p: r[r.length - 1].p2,
        type: "square"
      }];
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = l.A.getCenterPoint(r, n);
      return this.getAngleCutPoints(e).map(e => e.p).concat(i);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.p2;
      n = (n = s().filter(n, e => "right" != e.key && "left" != e.key && "top" != e.key && "bottom" != e.key)).concat(this.getAngleCutPoints(e));
      var l = a.x - o.x,
        c;
      return a.y - o.y <= 30 / r.zoomRatio && l <= 30 / r.zoomRatio && n.forEach(e => e.smaller = !0), n;
    }
    moveControlPoint(e) {
      var t = e.key,
        r = e.shape;
      switch (t) {
        case "ap1":
        case "ap2":
          var n = "ap1" == t ? "data.angle1" : "data.angle2",
            i = r.data.p2,
            o = l.A.getCenterPoint(r.data),
            s = u.A.reversePoint(e.shape.data, e.point),
            c = l.A.angleFrom3Points360({
              x: i.x,
              y: o.y
            }, s, o);
          return a.A.set(r, n, c);
      }
      return super.moveControlPoint(e);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t;
      return {
        data: y(e, g.A.getSettings(e, "centerConnectLine"))
      };
    }
    getPaperPath(e) {
      var t = g.A.getSettings(e, "centerConnectLine");
      return m.A.fromGenericLines(y(e, t));
    }
  }
  var x = new b();
};
