/* module 36084 — 7893 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => k,
    mt: () => P,
    p2: () => E
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(19539),
    c = r(29315),
    d = r(88925),
    h = r(35900),
    p = r(33535),
    u = r(84369),
    g = r(66563),
    m = r(81120),
    f = r(56144),
    y = r(22005),
    v = r(32214),
    b = r(7763),
    x = r(20260),
    C = r(48541);
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends c.dV {
    render() {
      var e = this.shape(),
        t = k(e),
        r = t,
        n = E(e),
        i,
        s,
        a = this.styleNoFill();
      if (e.data.head || e.data.tail) {
        var l,
          c,
          h = (null === (l = e.style) || void 0 === l ? void 0 : l.thickness) || 1,
          p = e.data.headScale || 1,
          u = e.data,
          g = u.head,
          m = u.tail,
          f = null !== (c = e.data.angleBy) && void 0 !== c ? c : 6,
          v = (0, C.lq)(t, {
            head: g,
            tail: m,
            shaft: "-"
          }, {}, h, p, f, 0, 6);
        i = y.A.fromHeadInfo(v.headInfo, a), s = y.A.fromHeadInfo(v.tailInfo, a), r = v.pathsInfo.lines;
      }
      var b = d.A.pathsD(r),
        x = d.A.pathsD(n);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: b,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: x,
        style: this.styleNoStroke()
      }), o().createElement("path", {
        className: "real",
        d: b,
        style: a
      }), i, s);
    }
  }
  function E(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.angle1,
      o = void 0 === i ? 70 : i,
      s = t.angle2,
      c = void 0 === s ? 290 : s,
      d = (0, h.k)({
        p1: r,
        p2: n
      }, o, c),
      u = a().first(d),
      g = a().last(d),
      m = l.A.getCenterPoint(e.data);
    return p.A.genericLinesTransformed(e.data, [...d, {
      p1: g.p2,
      p2: m
    }, {
      p1: m,
      p2: u.p1
    }]);
  }
  function k(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.angle1,
      o = void 0 === i ? 70 : i,
      s = t.angle2,
      a = void 0 === s ? 290 : s;
    return p.A.genericLinesTransformed(e.data, (0, h.k)({
      p1: r,
      p2: n
    }, o, a));
  }
  class O extends g.s {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleOnTailChange", e => {
        var t = this.props.entity,
          r = A(A({}, t), {}, {
            data: A(A({}, t.data), {}, {
              tail: e
            })
          });
        this.props.onEntityChanged(r);
      }), (0, n.A)(this, "handleOnHeadChange", e => {
        var t = this.props.entity,
          r = A(A({}, t), {}, {
            data: A(A({}, t.data), {}, {
              head: e
            })
          });
        this.props.onEntityChanged(r);
      }), (0, n.A)(this, "handleHeadScaleChange", e => {
        var t = this.props.entity,
          r = A(A({}, t), {}, {
            data: A(A({}, t.data), {}, {
              headScale: e
            })
          });
        this.props.onEntityChanged(r);
      }), (0, n.A)(this, "handleHeadAngleByDistanceChange", e => {
        var t = this.props.entity,
          r = A(A({}, t), {}, {
            data: A(A({}, t.data), {}, {
              angleBy: e
            })
          });
        this.props.onEntityChanged(r);
      });
    }
    getDefaultStart() {
      return 70;
    }
    getDefaultEnd() {
      return 290;
    }
    shouldComponentUpdate(e) {
      if (super.shouldComponentUpdate(e)) return !0;
      var t = e.entity.data,
        r = this.props.entity.data;
      return t.head !== r.head || t.tail !== r.tail || t.headScale !== r.headScale || t.angleBy !== r.angleBy;
    }
    renderPlaceHolder() {
      var e,
        t,
        r = this.props.entity;
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("div", {
        style: {
          marginRight: 5
        }
      }, o().createElement(m.A, {
        part: r.data.tail || "no",
        onItemSelect: this.handleOnTailChange
      })), o().createElement(v.R, {
        headScale: null !== (e = r.data.headScale) && void 0 !== e ? e : 1,
        onHeadScaleChange: this.handleHeadScaleChange
      }), o().createElement(b.g, {
        headerName: "Head Angle from Start:",
        angleByDistance: null !== (t = r.data.angleBy) && void 0 !== t ? t : 6,
        onHAngleAtDistanceChange: this.handleHeadAngleByDistanceChange
      }), o().createElement("div", {
        style: {
          marginLeft: 5
        }
      }, o().createElement(f.A, {
        part: r.data.head || "no",
        onItemSelect: this.handleOnHeadChange
      })), x.A.separator());
    }
  }
  class D extends c.Au {
    getComponent() {
      return w;
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
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M8.81,16.33 C6.8,15.38 5.4,13.25 5.4,10.77 C5.4,7.42 7.97,4.69 11.15,4.69 C12.42,4.69 13.6,5.13 14.55,5.87"
        }))
      };
    }
    createShape(e) {
      return super.createShape(A(A({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 60
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = k(e);
      return n.concat([{
        key: "md1",
        p: i[0].p1,
        type: "square"
      }, {
        key: "md2",
        p: i[i.length - 1].p2,
        type: "square"
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.key,
        r = e.shape,
        n = r.data.p2,
        i = l.A.getCenterPoint(r.data),
        o = p.A.reversePoint(e.shape.data, e.point),
        s = l.A.angleFrom3Points360({
          x: n.x,
          y: i.y
        }, o, i);
      switch (t) {
        case "md1":
          return this.changeShapeData(e.shape, "angle1", s);
        case "md2":
          return this.changeShapeData(e.shape, "angle2", s);
      }
      return e.shape;
    }
    getType() {
      return "doc-arc";
    }
    getSettingsComponent() {
      return O;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: k(e)
      };
    }
    getSnapablePoints(e) {
      var t = k(e);
      return [a().first(t).p1, a().last(t).p2].concat(l.A.getCenterPoint(e.data));
    }
    getPaperPath(e) {
      return u.A.fromGenericLines(E(e));
    }
  }
  var P = new D();
};
