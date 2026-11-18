/* module 21744 — 47929 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => Zr
  });
  var n = r(86835),
    i = r(42223),
    o = r(86029),
    s = r(81048),
    a = r(20149),
    l = r(2778),
    c = r(19539),
    d = r(40927),
    h = r.n(d),
    p = r(38070),
    u = r(84369);
  class g extends s.Ay {}
  class m extends l.p5 {}
  class f extends l.lX {
    getComponent() {
      return g;
    }
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return {
        component: h().createElement("svg", {
          key: this.getType(),
          style: e
        }, h().createElement("rect", {
          x: "6",
          y: "5",
          width: "10",
          height: "10"
        }))
      };
    }
    getType() {
      return "square";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: (0, s.GU)(e)
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = c.A.getCenterPoint(r, n);
      return (0, s.GU)(e).map(e => e.p2).concat((0, l.sE)(e), i);
    }
    getTransformedShapeTypeWhenConstrainBroken() {
      return "rectangle";
    }
    getPaperPath(e) {
      return u.A.fromGenericLines((0, s.GU)(e));
    }
  }
  var y = new f(),
    v = r(89806),
    b = r(64467),
    x = r(20260),
    C = r(30803);
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
        (0, b.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends v.Ay {}
  class E extends l.p5 {
    constructor() {
      super(...arguments), (0, b.A)(this, "handleToArc", () => {
        var e = {
          id: C.w.nextDiagramCompositeShapeId(),
          type: "doc-arc",
          data: A({}, this.props.entity.data),
          style: A({}, this.props.entity.style)
        };
        this.props.onNewTypeEntityChanged(this.props.entity, e);
      }), (0, b.A)(this, "handleToPie", () => {
        var e = {
          id: C.w.nextDiagramCompositeShapeId(),
          type: "doc-pie",
          data: A({}, this.props.entity.data),
          style: A({}, this.props.entity.style)
        };
        this.props.onNewTypeEntityChanged(this.props.entity, e);
      });
    }
    render() {
      return h().createElement("div", {
        style: {
          display: "flex"
        }
      }, h().createElement("button", {
        style: {
          width: 60
        },
        className: "btn-normal btn-large",
        onClick: this.handleToArc
      }, "To Arc"), h().createElement("button", {
        style: {
          marginLeft: 5,
          width: 60
        },
        className: "btn-normal btn-large",
        onClick: this.handleToPie
      }, "To Pie"), x.A.separator());
    }
  }
  class k extends l.lX {
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return {
        component: h().createElement("svg", {
          key: this.getType(),
          style: e
        }, h().createElement("circle", {
          cx: "11",
          cy: "11",
          r: "6",
          style: {
            transform: "translate(0px,-1px)"
          }
        }))
      };
    }
    getComponent() {
      return w;
    }
    getType() {
      return "circle";
    }
    getSettingsComponent() {
      return E;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: (0, v.UL)(e)
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = c.A.getCenterPoint(r, n);
      return (0, v.UL)(e).map(e => e.p2).concat(i);
    }
    getBoundingRect(e) {
      var t = (0, v.UL)(e);
      return c.A.genericLinesBbox(t);
    }
    getTransformedShapeTypeWhenConstrainBroken() {
      return "ellipse";
    }
    getPaperPath(e) {
      return u.A.fromGenericLines((0, v.UL)(e));
    }
  }
  var O = new k(),
    D = r(62624),
    P = r(35656),
    M = r(89184),
    I = r(30608),
    T = r(40813),
    L = r(30073),
    R = r(82654),
    B = r(2543),
    F = r.n(B),
    j = r(29315),
    _ = r(20243),
    N = r(10192),
    z = r(17524),
    H = r(66977),
    W = r(65706),
    V = r(21774),
    U = r(30968);
  class q extends h().Component {
    shouldComponentUpdate(e) {
      var t = e.plot,
        r = this.props.plot,
        n = c.A.rectWidthHeight(t.data),
        i = c.A.rectWidthHeight(r.data);
      return t.axes != r.axes || t.functions != r.functions || t.settings != r.settings || t.variables != r.variables || t.style != r.style || n.width != i.width || n.height != i.height;
    }
    render() {
      var e = this.props.plot,
        t = U.L.retrieve(e, this.props.styleIdContext),
        r = e.axes,
        n = e.functions,
        i = e.variables,
        o = e.data,
        s = c.A.rectWidthHeight(o),
        a = s.width,
        l = s.height,
        d = W.r.getCenterDelta(e);
      return h().createElement(H.c, {
        styleId: t,
        plotInfo: W.r.buildPlotInfo(r, {
          p1: o.p1,
          p2: o.p2
        }, d),
        expressions: n,
        variables: i || V.A.emptyArr,
        shapeView: {
          p1: {
            x: 0,
            y: 0
          },
          p2: {
            x: a,
            y: l
          }
        },
        delta: d,
        onRendered: () => {}
      });
    }
  }
  var G = r(57381);
  class K extends j.dV {
    constructor(e) {
      super(e), (0, b.A)(this, "handleMouseDown", e => {
        this.inSettingMode() || this.props.onMouseDown(e);
      }), this.state = {
        cacheShape: null
      };
    }
    shouldComponentUpdate(e, t) {
      return t.cacheShape != this.state.cacheShape || super.shouldComponentUpdate(e, t);
    }
    shape() {
      return this.state.cacheShape || this.props.shape;
    }
    inSettingMode() {
      return this.props.subSelection && "plot" == this.props.subSelection.type;
    }
    renderBasedOnType() {
      var e = this.shape();
      return h().createElement(q, {
        plot: e,
        styleIdContext: this.getStyleIdContext()
      });
    }
    render() {
      var e = this.shape(),
        t = e.data,
        r = t.p1,
        n = t.rotation,
        i = t.skewX,
        o = c.A.rectWidth(e.data),
        s = c.A.rectHeight(e.data),
        a = {
          x: o / 2,
          y: s / 2
        },
        l = new _.Z().orgin(a.x, a.y).translate(r.x, r.y);
      return n && (l = l.rotate(n)), i && (l = l.skew(i, 0)), G.A.graphingDisabled ? h().createElement("g", {
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        className: this.props.className,
        "data-amt": "diagram/shapes/plot",
        transform: l.toSVG()
      }, h().createElement("text", {
        x: a.x,
        y: a.y,
        fill: "black"
      }, "Graphing Disabled")) : h().createElement("g", {
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleMouseDown,
        className: this.props.className,
        "data-amt": "diagram/shapes/plot",
        transform: l.toSVG()
      }, this.renderSelectinOutline(o, s), this.renderBasedOnType());
    }
    renderSelectinOutline(e, t) {
      if (this.props.isGroupSelected || this.props.isRemoteSelected) return h().createElement("rect", {
        className: "transparent no-print",
        x: 1,
        y: 1,
        width: e - 2,
        height: t - 2,
        style: this.transparentStyle()
      });
    }
  }
  class Z extends j.US {}
  class Y extends j.Au {
    constructor() {
      super(), (0, b.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return K;
    }
    getType() {
      return "plot";
    }
    getSettingsComponent() {
      return Z;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: this.getRectangleBreakdownInfoData(e)
      };
    }
    getSettingDefaultValue(e) {
      var t = super.getSettingDefaultValue(e);
      return t || ("centerXDelta" == e || "centerYDelta" == e ? 0 : void 0);
    }
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return e = F().assign(e, {
        height: 20,
        strokeWidth: 1
      }), {
        caption: "plot",
        component: h().createElement("span", {
          key: "plot"
        }, h().createElement("svg", {
          style: e
        }, h().createElement("path", {
          d: "M2,4 L20,4 M2,11 L20,11 M2,18 L20,18   M4,2 L4,20 M11,2 L11,20 M18,2 L18,20"
        })))
      };
    }
    styleSupports() {
      return ["rotation", "skewX"];
    }
    createShape(e) {
      return N.A.createBy(e, t => {
        var r = super.createShape(e);
        return z.A.createFunctionPlot(r, {
          p1: {
            x: t.left + 20,
            y: t.top + 20
          },
          p2: {
            x: t.left + 450,
            y: t.top + 220
          }
        }, {
          x: 200,
          y: -100
        });
      });
    }
  }
  var Q = new Y(),
    J = r(44350),
    X = r(67194),
    $ = r(33535);
  class ee extends X.Ay {}
  class te extends X.Un {}
  class re extends l.lX {
    constructor() {
      super(...arguments), (0, b.A)(this, "getSupplementaryLines", e => {
        var t = [];
        return t = (t = c.A.pointsToLines(c.A.getPointsRect(e.data))).concat(c.A.ellipseToCubicBeziers(e.data.p1, e.data.p2)), $.A.genericLinesTransformed(e.data, t);
      });
    }
    getComponent() {
      return ee;
    }
    getType() {
      return "regular-polygon";
    }
    getSettingsComponent() {
      return te;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: (0, X.A)(e)
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = c.A.getCenterPoint(r, n),
        o;
      return (0, X.A)(e).map(e => e.p2).concat(i).concat(i);
    }
    getBoundingRect(e) {
      return c.A.genericLinesBbox((0, X.A)(e));
    }
    getTransformedShapeTypeWhenConstrainBroken() {
      return "regular-polygon-almost";
    }
    getPaperPath(e) {
      return u.A.fromGenericLines((0, X.A)(e));
    }
  }
  var ne = new re(),
    ie = r(44806),
    oe = r(62805),
    se = r(94059),
    ae = r(47423),
    le = r(28761),
    ce = r(37084),
    de = r(69568),
    he = r(63495),
    pe = r(38327),
    ue = r(70704),
    ge = r(77698),
    me = r(20066),
    fe = r(4201),
    ye = r(48852),
    ve = r(43533),
    be = r(32629),
    xe = r(37239),
    Ce = r(80955),
    Se = r(16317),
    Ae = r(77198),
    we = r(77658),
    Ee = r(49602),
    ke = r(74820),
    Oe = r(62103),
    De = r(99871),
    Pe = r(43547),
    Me = r(49476),
    Ie = r(98667),
    Te = r(88904),
    Le = r(27510),
    Re = r(31101),
    Be = r(16277),
    Fe = r(829),
    je = r(88092),
    _e = r(23004),
    Ne = r(57437),
    ze = r(90720),
    He = r(78478),
    We = r(99346),
    Ve = r(11237),
    Ue = r(41964),
    qe = r(27232),
    Ge = r(51092),
    Ke = r(97656),
    Ze = r(1425),
    Ye = r(36084),
    Qe = r(19814),
    Je = r(34106),
    Xe = r(31850),
    $e = r(16659),
    et = r(50025),
    tt = r(56698),
    rt = r(320),
    nt = r(84035),
    it = r(90361),
    ot = r(81724),
    st = r(35113),
    at = r(4480),
    lt = r(55484),
    ct = r(78421),
    dt = r(71539),
    ht = r(81138),
    pt = r(15979),
    ut = r(37819),
    gt = r(22022),
    mt = r(87671),
    ft = r(13608),
    yt = r(86391),
    vt = r(42328),
    bt = r(42804),
    xt = r(50207),
    Ct = r(99562),
    St = r(11238),
    At = r(26160),
    wt = r(6256),
    Et = r(23541),
    kt = r(71433),
    Ot = r(41574),
    Dt = r(65291),
    Pt = r(62456),
    Mt = r(59410),
    It = r(11798),
    Tt = r(95785),
    Lt = r(28110),
    Rt = r(2632),
    Bt = r(62716),
    Ft = r(14693),
    jt = r(90751),
    _t = r(27812),
    Nt = r(37566),
    zt = r(46621),
    Ht = r(17048),
    Wt = r(84258),
    Vt = r(91636),
    Ut = r(31595);
  class qt extends h().Component {
    constructor() {
      super(...arguments), (0, b.A)(this, "state", {
        progress: 0
      }), (0, b.A)(this, "uploadOperation", new Vt.uG());
    }
    componentDidMount() {
      this.props.file && Ut.A.uploadImage(this.props.file, e => {
        this.uploadOperation.cancelled || this.setState({
          progress: e
        });
      }, this.uploadOperation).then(e => {
        var t = e.name,
          r = e.folderName;
        this.uploadOperation.check(), this.props.onUploadDone(_t.A.getComponentUrl(t, r));
      }).catch(() => {
        this.uploadOperation.cancelled || this.props.onUploadFailed();
      });
    }
    componentWillUnmount() {
      this.uploadOperation.cancel();
    }
    render() {
      var e = this.props.image,
        t = c.A.rectWidthHeight(e.data),
        r = t.width,
        n = t.height,
        i = c.A.round2(this.state.progress);
      return h().createElement("g", null, h().createElement("rect", {
        x: e.data.p1.x,
        y: e.data.p1.y + n,
        width: r,
        height: 7,
        fill: "white",
        stroke: "lightgray"
      }), h().createElement("rect", {
        x: e.data.p1.x,
        y: e.data.p1.y + n,
        width: r * i,
        height: 7,
        fill: "#4caf4f",
        stroke: "lightgray"
      }), h().createElement("text", {
        x: e.data.p1.x + r / 2,
        y: e.data.p1.y + n + 20,
        textAnchor: "middle",
        fontSize: 14,
        fill: "gray",
        stroke: "none"
      }, "".concat(Math.round(100 * i), "%")));
    }
  }
  function Gt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Kt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Gt(Object(r), !0).forEach(function (t) {
        (0, b.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Zt extends j.dV {
    constructor(e) {
      super(e), (0, b.A)(this, "imageRef", void 0), (0, b.A)(this, "orgSize", void 0), (0, b.A)(this, "state", {
        isLoading: this.getLoadable(),
        uploadFile: this.props.shape.___uploadFile
      }), (0, b.A)(this, "handleImageLoaded", () => {
        var e = this.shape().data;
        zt.A.getImageSize(_t.A.getComponentUrlToRawUrl(e.url)).then(e => {
          console.log("loaded"), this.orgSize = e, this.shape().___size = e, this.setState({
            isLoading: !1,
            isError: !1
          });
        }).catch(() => {
          this.setState({
            isLoading: !1,
            isError: !0
          });
        });
      }), (0, b.A)(this, "handleImageError", () => {
        this.setState({
          isLoading: !1,
          isError: !0
        });
      }), (0, b.A)(this, "handleRef", e => this.imageRef = e), (0, b.A)(this, "handleUploadDone", e => {
        this.setState({
          uploadFile: void 0
        });
        var t = this.props.shape;
        this.props.onShapeChanged(Kt(Kt({}, t), {}, {
          data: Kt(Kt({}, t.data), {}, {
            url: e
          })
        }));
      }), (0, b.A)(this, "handleUploadFailed", () => {
        this.setState({
          uploadFile: void 0
        }), this.props.fixedContextHandler.getMtFuncs().showMessage("Upload Image Failed!", "error");
      }), this.props.shape.___uploadFile && (this.props.shape.___uploadFile = void 0);
    }
    getLoadable() {
      return !Wt.A.isSafari();
    }
    shouldComponentUpdate(e, t) {
      return this.state.isLoading != t.isLoading || this.state.isError != t.isError || super.shouldComponentUpdate(e, t);
    }
    componentWillReceiveProps(e) {
      this.props.shape.data.url != e.shape.data.url && this.setState({
        isLoading: this.getLoadable()
      });
    }
    componentDidMount() {
      Wt.A.isSafari() || (Nt.KT(this.imageRef, "load", this.handleImageLoaded), Nt.KT(this.imageRef, "error", this.handleImageError));
    }
    componentWillUnmount() {
      Wt.A.isSafari() || (Nt.Bo(this.imageRef, "load", this.handleImageLoaded), Nt.Bo(this.imageRef, "error", this.handleImageError));
    }
    renderLoading() {
      if (this.state.isLoading || this.state.isError) {
        var e = this.shape().data,
          t = c.A.getCenterPoint(e),
          r = e.p1,
          n = e.rotation,
          i = e.skewX,
          o = e.flipX,
          s = c.A.rectWidthHeight(e),
          a = s.width,
          l = s.height,
          d = new _.Z().orgin(t.x, t.y).rotate(n).skew(i, 0).scale(o ? -1 : 1, 1);
        if (this.state.isError) {
          var p = "translate(".concat(a / 2 - 15, "px,").concat(l / 2 - 10, "px) scale(0.05,0.05)");
          return h().createElement("g", {
            style: {
              transform: d.translate(r.x, r.y).toCssStyle()
            }
          }, h().createElement("rect", {
            fill: "rgba(0, 0, 0, 0.35)",
            stroke: "none",
            x: 0,
            y: 0,
            width: a,
            height: l
          }), h().createElement("g", {
            style: {
              transform: p
            }
          }, h().createElement("path", {
            fill: "red",
            stroke: "none",
            d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"
          })));
        }
        return this.state.isLoading ? h().createElement("g", {
          style: {
            transform: d.translate(r.x, r.y).toCssStyle()
          }
        }, h().createElement(Ht.A, {
          width: a,
          height: l
        })) : void 0;
      }
    }
    renderUpload() {
      if (this.state.uploadFile) return h().createElement(qt, {
        image: this.props.shape,
        file: this.state.uploadFile,
        onUploadDone: this.handleUploadDone,
        onUploadFailed: this.handleUploadFailed
      });
    }
    render() {
      var e = this.shape().data,
        t = e.p1,
        r = e.rotation,
        n = e.skewX,
        i = e.flipX,
        o = c.A.rectWidthHeight(e),
        s = o.width,
        a = o.height,
        l = c.A.getCenterPoint(e),
        d = _t.A.getComponentUrlToRawUrl(e.url);
      return this.shape().___size = this.orgSize, h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getTransparentOnlyNoFill("M".concat(t.x, ",").concat(t.y, " L").concat(t.x + s, ",").concat(t.y, " L").concat(t.x + s, ",").concat(t.y + a, " L").concat(t.x, ",").concat(t.y + a, " Z")), h().createElement("image", {
        transform: new _.Z().orgin(l.x, l.y).rotate(r).skew(n, 0).scale(i ? -1 : 1, 1).toSVG(),
        ref: this.handleRef,
        x: t.x,
        y: t.y,
        width: s,
        height: a,
        preserveAspectRatio: "none",
        xlinkHref: d
      }), this.renderLoading(), this.renderUpload());
    }
  }
  function Yt(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = r.y,
      o = n.y,
      s = r.x,
      a = n.x;
    return $.A.pointsTransformed(e.data, [{
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
    }, {
      x: s,
      y: i
    }]);
  }
  class Qt extends j.US {}
  class Jt extends j.Au {
    constructor() {
      super(...arguments), (0, b.A)(this, "getPaperPath", void 0);
    }
    getIcon() {
      return {
        caption: "",
        component: h().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, h().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M10.1,4.6 L16.3,10 L10.1,15.4 L3.9,10 Z"
        }))
      };
    }
    styleSupports() {
      return ["rotation", "skewX"];
    }
    createShape(e) {
      return super.createShape(Kt(Kt({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getComponent() {
      return Zt;
    }
    getType() {
      return "image";
    }
    getSettingsComponent() {
      return Qt;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: c.A.pointsToLines(Yt(e))
      };
    }
    getSnapablePoints(e) {
      return Yt(e);
    }
    getBoundingRect(e) {
      var t = Yt(e);
      return c.A.getBoundingRectFromPoints(t);
    }
  }
  var Xt = new Jt(),
    $t = r(25125);
  function er(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function tr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? er(Object(r), !0).forEach(function (t) {
        (0, b.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class rr extends j.dV {
    componentDidMount() {
      super.componentDidMount && super.componentDidMount(), G.A.graphingDisabled || this.props.diagramFixedCtxHandler.notifyPlotly({
        type: "change",
        plotly: this.props.shape
      });
    }
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount(), G.A.graphingDisabled || this.props.diagramFixedCtxHandler.notifyPlotly({
        type: "remove",
        id: this.props.shape.id
      });
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate && super.componentDidUpdate(e, t, void 0), G.A.graphingDisabled || this.props.diagramFixedCtxHandler.notifyPlotly({
        type: "change",
        plotly: this.props.shape
      });
    }
    render() {
      var e = this.shape().data,
        t = e.p1,
        r = e.p2,
        n = this.getWidth(),
        i = this.getHeight(),
        o = 0;
      if (G.A.graphingDisabled) {
        var s = r.x - t.x,
          a = r.y - t.y,
          l = {
            x: t.x + s / 2,
            y: t.y + a / 2
          };
        return h().createElement("g", {
          className: this.props.className,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onMouseDown
        }, h().createElement("text", {
          x: l.x,
          y: l.y,
          fill: "black"
        }, "Graphing Disabled"));
      }
      return h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, h().createElement("rect", {
        className: "transparent no-print",
        rx: 0,
        ry: 0,
        style: tr(tr({}, this.transparentStyleWithRotation()), {}, {
          fill: "transparent"
        }),
        x: t.x,
        y: t.y,
        width: n,
        height: i
      }), h().createElement("rect", {
        className: "real",
        rx: 0,
        ry: 0,
        x: t.x,
        y: t.y,
        width: n,
        style: tr(tr({}, this.styleWithRotation()), {}, {
          stroke: "none"
        }),
        height: i
      }));
    }
  }
  class nr extends j.US {}
  class ir extends j.Au {
    constructor() {
      super(...arguments), (0, b.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return rr;
    }
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return {
        component: h().createElement("svg", {
          key: this.getType(),
          style: e
        }, h().createElement("rect", {
          x: "5",
          y: "6",
          width: "13",
          height: "9"
        }))
      };
    }
    getType() {
      return "plotly";
    }
    getSettingsComponent() {
      return nr;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: this.getRectangleBreakdownInfoData(e)
      };
    }
    styleSupports() {
      return ["rotation", "skewX"];
    }
    createShape(e) {
      var t = super.createShape(e),
        r = z.A.create("scatter");
      return t.plotlyData = r, t;
    }
  }
  var or = new ir(),
    sr = r(22005),
    ar = r(59847);
  class lr extends j.dV {
    render() {
      var e = ar.A.getAbsolutePaperPath(this.shape()),
        t = sr.A.paperPath(e, this.style(), "real"),
        r = h().cloneElement(t, {
          className: "transparent no-print",
          style: this.transparentStyle(),
          key: "paper-root-transparent"
        });
      return h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), r, t);
    }
  }
  class cr extends j.US {}
  class dr extends j.Au {
    getComponent() {
      return lr;
    }
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return {
        component: h().createElement("svg", {
          key: this.getType(),
          style: e
        }, h().createElement("rect", {
          x: "5",
          y: "6",
          width: "13",
          height: "9"
        }))
      };
    }
    getType() {
      return "path-data-shape";
    }
    getSettingsComponent() {
      return cr;
    }
    getSnapablePoints(e) {
      return ar.A.flattenToLines(e).map(e => e.p1);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: ar.A.flattenToLines(e)
      };
    }
    getPaperPath(e) {
      return ar.A.getPaperPathForImporting(e);
    }
  }
  var hr = new dr(),
    pr = r(26855),
    ur = r(53020),
    gr = r(62970),
    mr = r(80541),
    fr = r(94240),
    yr = r(76546),
    vr = r(61848),
    br = r(30873),
    xr = r(32485),
    Cr = r.n(xr),
    Sr = r(96860),
    Ar = r(36223),
    wr = r(60693);
  function Er(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function kr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Er(Object(r), !0).forEach(function (t) {
        (0, b.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Or extends pr.T2 {
    constructor() {
      super(...arguments), (0, b.A)(this, "handleDoubleClick", e => {
        var t = this.shape().data,
          r = this.getDzContainer(),
          n = wr.T.getFromAbsLt(Ar.A.getLeftTopFromEvent(e), r),
          i = wr.T.getBCRect(this.props.getBaseElement(), r),
          o = mr.A.splitAtPoint(t, n.left - i.left, n.top - i.top),
          s = kr(kr({}, this.shape()), {}, {
            data: o
          });
        this.props.onShapeChanged(s);
      });
    }
    render() {
      var e = fr.A.pathDFromPaperPath(this.shape().data, !0);
      return h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown,
        onDoubleClick: this.handleDoubleClick
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(e), h().createElement("path", {
        className: "real",
        d: e,
        style: this.style()
      }));
    }
  }
  class Dr extends pr.ih {
    constructor() {
      super(...arguments), (0, b.A)(this, "handleUnclose", () => {
        var e = this.props.subSelection;
        if (e && "complex-shape-control" == e.type) {
          var t = e.index,
            r = this.props.entity,
            n = 0,
            i,
            o = 0;
          if (br.A.visit(r.data, {
            visitSimple: e => {
              var r = e[1].segments;
              r.length <= 2 || (t >= n && t < n + r.length && (i = e, o = t - n), n += r.length);
            }
          }), i) {
            var s = mr.A.unclosePath(r.data, i, o),
              a = kr(kr({}, r), {}, {
                data: s
              });
            this.props.onEntityChanged(a);
          }
        }
      }), (0, b.A)(this, "handleRemovePoint", () => {
        var e = this.props.subSelection;
        if (e && "complex-shape-control" == e.type) {
          var t = e.index,
            r = this.props.entity,
            n = 0,
            i = br.A.update(r.data, {
              updateSimple: e => {
                var r = e[1].segments;
                if (!(r.length <= 2)) {
                  var i = e;
                  if (t >= n && t < n + r.length) {
                    var o = vr.A.remove(r, t - n);
                    i = ["Path", kr(kr({}, e[1]), {}, {
                      segments: o
                    })];
                  }
                  return n += r.length, i;
                }
              }
            }),
            o = kr(kr({}, r), {}, {
              data: i
            });
          this.props.onEntityChanged(o);
        }
      });
    }
    render() {
      var e = this.props,
        t = e.subSelection,
        r = e.entity,
        n = !1;
      if (t && "complex-shape-control" == t.type) {
        var i = t.index,
          o = 0;
        br.A.visit(r.data, {
          visitSimple: e => {
            var t = e[1].segments;
            e[1].closed && i >= o && i < o + t.length && (n = !0), o += t.length;
          }
        });
      }
      return h().createElement("item-group", null, h().createElement("item", {
        title: "Remove Selected Point",
        className: Cr()("control-point-removing", {
          disabled: !t || "complex-shape-control" != t.type
        }),
        onMouseDown: this.handleRemovePoint
      }, h().createElement("svg", null, h().createElement("circle", {
        cx: "8",
        cy: "10",
        r: "4"
      }), h().createElement("path", {
        d: "M0,10 L6,10"
      }))), h().createElement("item", {
        title: "Unclose Path At this Point",
        className: Cr()("control-point-removing", {
          disabled: !n
        }),
        onMouseDown: this.handleUnclose
      }, h().createElement("svg", {
        viewBox: "12 -10 62 60"
      }, h().createElement("path", {
        style: {
          strokeWidth: 4
        },
        d: "  M4.33,15.65 L21.05,15.65"
      }), h().createElement("path", {
        style: {
          strokeWidth: 4
        },
        d: "  M34.79,15.65 L51.5,15.65"
      }), h().createElement("path", {
        style: {
          strokeWidth: 3
        },
        strokeDasharray: "3.375 4",
        d: "  M27.36,2.67 L27.36,30"
      }))), x.A.separator());
    }
  }
  class Pr extends pr.OL {
    constructor() {
      super(...arguments), (0, b.A)(this, "getSupplementaryLines", e => {
        var t = u.A.pathToLines(e.data, !0);
        return F().flatMap(t, e => c.A.isCubicBezierData(e) ? [{
          p1: e.p1,
          p2: e.cp
        }, {
          p1: e.p2,
          p2: e.cp2
        }] : []);
      }), (0, b.A)(this, "controlPointMoved", e => {
        if (e.outputSnapPoint && !e.key.startsWith("cp")) {
          var t = this.getMainPointIndexFromKey(e.key),
            r = 0,
            n = e.outputSnapPoint,
            i,
            o;
          if (br.A.visit(e.shape.data, {
            visitSimple: e => {
              if (!e[1].closed) {
                var s = e[1].segments;
                s.length <= 3 || (t == r ? ur.A.isPointOnSegmentEnd(s, n.x, n.y) && (i = e, o = "first-to-end") : t == r + s.length - 1 && ur.A.isPointOnSegmentStart(s, n.x, n.y) && (i = e, o = "end-to-first"), r += s.length);
              }
            }
          }), i) {
            var s = br.A.update(e.shape.data, {
              updateSimple: e => {
                return e != i ? e : (t = "first-to-end" == o ? mr.A.removeFirstToCloseSegments(e[1].segments) : mr.A.removeEndToCloseSegments(e[1].segments), ["Path", kr(kr({}, e[1]), {}, {
                  segments: t,
                  closed: !0
                })]);
                var t;
              }
            });
            return kr(kr({}, e.shape), {}, {
              data: s
            });
          }
        }
      }), (0, b.A)(this, "getPaperPath", void 0);
    }
    styleSupports() {
      return ["thickness", "strokeColor", "fillColor", "strokeType", "boxShadow"];
    }
    rotate(e, t) {
      return this.transformByBoxed(e, e => kr(kr({}, e), {}, {
        rotation: c.A.round2(c.A.addRotation360(0, t))
      }));
    }
    rotateAround(e, t, r) {
      return this.transformByBoxed(e, e => yr.A.rotateAround(e, t, r));
    }
    skewXAtCenter(e, t, r) {
      return this.transformByBoxed(e, e => yr.A.skewXAtCenter(e, t, r));
    }
    minMaxVertical(e) {
      var t, r;
      return {
        min: br.A.fold(e.data, {
          fold: (e, t) => {
            var r = F().minBy(t[1].segments, e => ur.A.getSegmentPoint(e)[1]);
            return Math.min(e, ur.A.getSegmentPoint(r)[1]);
          },
          initValue: Number.MAX_SAFE_INTEGER
        }),
        max: br.A.fold(e.data, {
          fold: (e, t) => {
            var r = F().maxBy(t[1].segments, e => ur.A.getSegmentPoint(e)[1]);
            return Math.max(e, ur.A.getSegmentPoint(r)[1]);
          },
          initValue: Number.MIN_SAFE_INTEGER
        })
      };
    }
    minMaxHorizontal(e) {
      var t, r;
      return {
        min: br.A.fold(e.data, {
          fold: (e, t) => {
            var r = F().minBy(t[1].segments, e => ur.A.getSegmentPoint(e)[0]);
            return Math.min(e, ur.A.getSegmentPoint(r)[0]);
          },
          initValue: Number.MAX_SAFE_INTEGER
        }),
        max: br.A.fold(e.data, {
          fold: (e, t) => {
            var r = F().maxBy(t[1].segments, e => ur.A.getSegmentPoint(e)[0]);
            return Math.max(e, ur.A.getSegmentPoint(r)[0]);
          },
          initValue: Number.MIN_SAFE_INTEGER
        })
      };
    }
    move(e, t, r) {
      if (r && r.snapGridOptions && r.snapGridOptions.gridSize >= 2) {
        var n = u.A.getPathPoints(e.data);
        t = gr.A.getMinDeltaForPoints(n, r.snapGridOptions);
      }
      var i = br.A.update(e.data, {
        updateSimple: e => ["Path", kr(kr({}, e[1]), {}, {
          segments: ur.A.segmentsAddDelta(e[1].segments, t.x, t.y, !0)
        })]
      });
      return kr(kr({}, e), {}, {
        data: i
      });
    }
    createShape(e) {
      return {
        id: C.w.nextDiagramCompositeShapeId(),
        type: "complex",
        data: ["Path", {
          applyMatrix: !0,
          segments: [[10, 20], [20, 30], [40, 40]],
          closed: !1
        }]
      };
    }
    scale(e, t, r, n) {
      return this.transformByBoxed(e, e => yr.A.scaleFromTo(e, t, r, n));
    }
    getCentralPoint(e) {
      return c.A.getCenterPoint(this.getBoundingRect(e));
    }
    transformByBoxed(e, t) {
      var r = this.getBoundingRect(e),
        n = mr.A.absolutePathToBox(e.data, r, !0),
        i = t(r),
        o = mr.A.pathInBoxedToAbsolute(n, i, !0);
      return kr(kr({}, e), {}, {
        data: o
      });
    }
    flipHorizontally(e) {
      return this.transformByBoxed(e, e => yr.A.flipHorizontally(e));
    }
    flipVertically(e) {
      return this.transformByBoxed(e, e => yr.A.flipVertically(e));
    }
    flipToLineThroughPoint(e, t) {
      return this.transformByBoxed(e, e => yr.A.flipToLineThroughPoint(e, t));
    }
    flipToPoint(e, t) {
      return this.transformByBoxed(e, e => yr.A.flipToPoint(e, t));
    }
    getComponent() {
      return Or;
    }
    getType() {
      return "complex";
    }
    getSettingsComponent() {
      return Dr;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: u.A.pathToLines(e.data, !0)
      };
    }
    getSnapablePoints(e) {
      return u.A.getPathPoints(e.data);
    }
    getIcon() {
      return {
        component: h().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "complex"
        }, h().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M3.664580556367241,4 Q9.83229027818362,28 16,4"
        }))
      };
    }
    getBoundingRect(e) {
      var t = mr.A.toPaperPathInstance(e.data);
      return u.A.paperRectToRectangle(t.bounds);
    }
    getControlPoints(e, t) {
      var r = t && "complex-shape-control" == t.type,
        n = u.A.getPathPoints(e.data),
        i,
        o = u.A.getPathHandledPoints(e.data, !0).map((e, t) => ({
          key: "cp-".concat(t),
          p: e,
          type: "circle-sub",
          cursor: "crosshair"
        })),
        s;
      return n.map((e, n) => ({
        key: "c-".concat(n),
        p: e,
        type: "circle",
        cursor: "crosshair",
        selected: r && t.index == n,
        subSelectionOnClick: {
          type: "complex-shape-control",
          index: n
        }
      })).concat(o);
    }
    moveControlPoint(e) {
      return e.key.startsWith("cp") ? this.moveSubControlPoint(e) : this.moveMainPoint(e);
    }
    moveSubControlPoint(e) {
      var t = this.getControlPointIndexFromKey(e.key),
        r = 0,
        n = e.point,
        i = br.A.update(e.shape.data, {
          updateSimple: e => {
            for (var i = e[1].segments, o = F().clone(i), s = 0, a = 0; a < i.length; a++) {
              var l = i[a];
              ur.A.isSegmentPoint(l) || (l[1] && (r + s == t && (o[a][1] = [n.x - l[0][0], n.y - l[0][1]]), s++), l[2] && (r + s == t && (o[a][2] = [n.x - l[0][0], n.y - l[0][1]]), s++));
            }
            return s > 0 ? ["Path", kr(kr({}, e[1]), {}, {
              segments: o
            })] : (r += s, e);
          }
        });
      return kr(kr({}, e.shape), {}, {
        data: i
      });
    }
    moveMainPoint(e) {
      var t = this.getMainPointIndexFromKey(e.key),
        r = 0,
        n = e.otherShapes,
        i = e.isControl,
        o,
        s,
        a = e.point;
      if (!i) {
        var l = u.A.getPathPoints(e.shape.data);
        l.splice(t, 1);
        var c = Sr.A.detectPoint(a, n, l, 5 / e.dzc.zoomRatio);
        c && (e.outputSnapPoint = c.snapPoint, a = c.snapPoint);
      }
      var d = br.A.update(e.shape.data, {
        updateSimple: e => {
          var n = e[1].segments;
          if (t >= r && t < r + n.length) {
            var i = F().clone(n);
            return i[t] = mr.A.changeSegmentPoint(i[t], [a.x, a.y]), ["Path", kr(kr({}, e[1]), {}, {
              segments: i
            })];
          }
          return r += n.length, e;
        }
      });
      return kr(kr({}, e.shape), {}, {
        data: d
      });
    }
    getMainPointIndexFromKey(e) {
      return Number.parseInt(e.substr(2), 10);
    }
    getControlPointIndexFromKey(e) {
      return Number.parseInt(e.substr(3), 10);
    }
    insertionPointMove(e, t, r) {
      if (!t) return {
        id: C.w.nextDiagramCompositeShapeId(),
        type: "complex",
        data: ["Path", {
          applyMatrix: !0,
          segments: [[e.x, e.y], [r.x, r.y]],
          closed: !1
        }]
      };
      var n = t.data;
      return kr(kr({}, t), {}, {
        data: ["Path", kr(kr({}, n[1]), {}, {
          segments: n[1].segments.slice(0, n[1].segments.length - 1).concat([[r.x, r.y]])
        })]
      });
    }
    insertionPointDown(e, t, r) {
      var n = this.insertionPointMove(e, t, r);
      return {
        shape: this.nextPointForInsertion(n),
        continue: !0
      };
    }
    nextPointForInsertion(e) {
      var t = e.data,
        r = ur.A.getSegmentPoint(F().last(t[1].segments));
      return kr(kr({}, e), {}, {
        data: ["Path", kr(kr({}, t[1]), {}, {
          segments: t[1].segments.concat([[r[0] + .1, r[1] + .1]])
        })]
      });
    }
  }
  var Mr = new Pr(),
    Ir = r(54092),
    Tr = r(71389);
  class Lr extends j.dV {
    render() {
      var e = this.props.shape.data,
        t = e.p1,
        r = e.p2,
        n = Math.min(t.x, r.x),
        i = Math.min(t.y, r.y),
        o = Math.abs(r.x - t.x),
        s = Math.abs(r.y - t.y);
      return h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, h().createElement("rect", {
        className: "transparent no-print",
        x: n,
        y: i,
        width: o,
        height: s,
        style: this.transparentStyleWithRotation()
      }), this.props.isSelected ? h().createElement("rect", {
        className: "real no-print",
        x: n,
        y: i,
        width: o,
        height: s,
        style: {
          fill: "none",
          stroke: "#4caf50",
          strokeDasharray: "4 3",
          pointerEvents: "none"
        }
      }) : null);
    }
  }
  class Rr extends j.US {}
  class Br extends j.Au {
    getComponent() {
      return Lr;
    }
    getIcon() {
      var e = p.A.getIconSvgStyle();
      return {
        caption: "XY",
        component: h().createElement("svg", {
          key: this.getType(),
          style: e
        }, h().createElement("rect", {
          x: "4",
          y: "5",
          width: "6",
          height: "4"
        }), h().createElement("rect", {
          x: "15",
          y: "5",
          width: "6",
          height: "4"
        }), h().createElement("rect", {
          x: "4",
          y: "14",
          width: "6",
          height: "4"
        }), h().createElement("rect", {
          x: "15",
          y: "14",
          width: "6",
          height: "4"
        }), h().createElement("path", {
          d: "M10,7 L15,7 M7,9 L7,14"
        }))
      };
    }
    getType() {
      return "xymatrix";
    }
    createShape(e) {
      return Tr.W.createShape(e);
    }
    styleSupports(e) {
      return [];
    }
    getSettingsComponent() {
      return Rr;
    }
    getPaperPath(e) {
      return null;
    }
  }
  var Fr = new Br();
  function jr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jr(Object(r), !0).forEach(function (t) {
        (0, b.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Nr extends s.Ay {
    render() {
      Wr(this.props.shape);
      var e = this.shape().data.p1,
        t = this.getWidth(),
        r = this.getHeight(),
        n = 0;
      return h().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), h().createElement("rect", {
        className: "transparent no-print",
        rx: 0,
        ry: 0,
        style: this.transparentStyleWithRotation(),
        x: e.x,
        y: e.y,
        width: t,
        height: r
      }), h().createElement("rect", {
        className: "real",
        rx: 0,
        ry: 0,
        x: e.x,
        y: e.y,
        width: t,
        style: _r(_r({}, this.styleWithRotation()), {}, {
          stroke: "red"
        }),
        height: r
      }), h().createElement("text", {
        x: e.x + t / 2,
        y: e.y + r / 2 + 10,
        textAnchor: "middle",
        fill: "red",
        stroke: "red"
      }, "???"));
    }
  }
  class zr extends j.US {}
  class Hr extends s.cC {
    constructor() {
      super(...arguments), (0, b.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return Nr;
    }
    getType() {
      return "not-found";
    }
    getSettingsComponent() {
      return zr;
    }
    scale(e, t, r, n) {
      return e = Wr(e), super.scale(e, t, r, n);
    }
    getBoundingRect(e) {
      return e = Wr(e), super.getBoundingRect(e);
    }
    getRectangleBreakdownInfoData(e) {
      return e = Wr(e), super.getRectangleBreakdownInfoData(e);
    }
    minMaxVertical(e) {
      return e = Wr(e), super.minMaxVertical(e);
    }
    minMaxHorizontal(e) {
      return e = Wr(e), super.minMaxHorizontal(e);
    }
  }
  function Wr(e) {
    var t = Vr(e.data);
    return t != e.data && (e.data = t), e;
  }
  function Vr(e) {
    if (!e) return e = {
      p1: {
        x: 10,
        y: 10
      },
      p2: {
        x: 20,
        y: 20
      }
    };
    if (!e.p1 && !e.p2) return e.p1 = {
      x: 10,
      y: 10
    }, e.p2 = {
      x: 20,
      y: 20
    }, e;
    if (!e.p1) {
      var t = e.p2;
      return e.p1 = {
        x: t.x - 10,
        y: t.y - 10
      }, e;
    }
    if (!e.p2) {
      var r = e.p1;
      return e.p2 = {
        x: r.x + 10,
        y: r.y + 10
      }, e;
    }
    return e;
  }
  var Ur = new Hr(),
    qr = [i.mt, o.mt, s.mt, y, v.mt, O, P.mt, D.mt, M.mt, I.mt, T.mt, L.mt, ne, X.mt, ie.mt, oe.mt, se.mt, ae.mt, le.mt, ce.mt, R.mt, Q, a.mt, de.mt, he.mt, pe.mt, ue.mt, ge.mt, me.mt, fe.mt, ye.mt, ve.mt, be.mt, xe.mt, Ce.mt, Se.mt, Ae.mt, we.mt, Ee.mt, ke.mt, Oe.mt, De.mt, Pe.mt, Me.mt, Ie.mt, Te.mt, Le.mt, Re.mt, Be.mt, Fe.mt, je.mt, _e.mt, Ne.mt, ze.mt, He.mt, We.mt, Ve.mt, Ue.mt, qe.mt, Ge.mt, Ke.mt, Ze.mt, Ye.mt, Qe.mt, Je.mt, Xe.mt, tt.mt, rt.mt, nt.mt, it.mt, ot.mt, st.mt, at.mt, lt.mt, dt.mt, ht.mt, pt.mt, ut.mt, gt.mt, mt.mt, ft.mt, yt.mt, vt.mt, bt.mt, xt.mt, Ct.mt, St.mt, At.mt, wt.mt, $e.mt, et.mt, Et.mt, kt.mt, Ot.mt, It.mt, Dt.mt, Pt.mt, Mt.mt, Tt.mt, Lt.mt, Rt.mt, Bt.mt, Ft.mt, jt.mt, Xt, $t.mt, or, hr, J.mt, Mr, Ir.mt, ct.mt, Fr],
    Gr = {};
  qr.forEach(e => Gr[e.getInfo().type] = e);
  class Kr {
    getShapeManagement(e) {
      var t;
      if ("shape-composite" == n.A.getEntityType(e)) return this.getCompositeShapeManagementFromType(e.type);
    }
    getCompositesMts() {
      return qr;
    }
    getCompositeShapeManagementFromType(e) {
      return Gr[e] || Ur;
    }
  }
  const Zr = new Kr();
};
