/* module 33476 — 6192 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(61848),
    a = r(84258),
    l = r(40961),
    c = r.n(l),
    d = r(55451);
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "rootMouseDown", !1), (0, n.A)(this, "handleDocumentMouseDown", () => {
        this.rootMouseDown || this.props.onClose();
      }), (0, n.A)(this, "handleRootMouseDown", () => {
        this.rootMouseDown = !0, d.A.next(() => {
          this.rootMouseDown = !1;
        });
      });
    }
    componentDidMount() {
      var e;
      document.addEventListener("mousedown", this.handleDocumentMouseDown), c().findDOMNode(this).addEventListener("mousedown", this.handleRootMouseDown);
    }
    componentWillUnmount() {
      var e;
      document.removeEventListener("mousedown", this.handleDocumentMouseDown), c().findDOMNode(this).removeEventListener("mousedown", this.handleRootMouseDown);
    }
    render() {
      return this.props.style ? o().cloneElement(this.props.children, {
        style: this.props.style
      }) : this.props.children;
    }
  }
  var p = r(32485),
    u = r.n(p),
    g = r(40383);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y {
    constructor() {
      (0, n.A)(this, "duration", void 0), (0, n.A)(this, "data", void 0), (0, n.A)(this, "key", void 0), (0, n.A)(this, "timeoutID", void 0);
    }
    register(e, t, r) {
      this.duration = e, this.data = t, this.key = r, this.timeoutID && clearTimeout(this.timeoutID), this.timeoutID = setTimeout(() => {
        this.data = null, this.timeoutID = null, this.key = null;
      }, this.duration);
    }
    retrieveData() {
      return this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null), this.data;
    }
    getKey() {
      return this.key;
    }
  }
  var v = new y();
  class b extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "originalBulbLeft", void 0), (0, n.A)(this, "isMouseEnter", void 0), (0, n.A)(this, "lastMouseEnterTarget", void 0), (0, n.A)(this, "onMouseDown", e => {
        this.showChildren(), e.stopPropagation(), e.preventDefault(), this.props.onBulbMouseLeave && this.props.onBulbMouseLeave(e.currentTarget);
      }), (0, n.A)(this, "onBulbMouseEnter", e => {
        this.props.onBulbMouseEnter && (this.isMouseEnter = !0, this.lastMouseEnterTarget = e.currentTarget, this.props.onBulbMouseEnter(e.currentTarget));
      }), (0, n.A)(this, "onBulbMouseLeave", e => {
        this.props.onBulbMouseLeave && (this.isMouseEnter = !1, this.props.onBulbMouseLeave(e.currentTarget));
      }), (0, n.A)(this, "handleClose", () => {
        this.closeChildren();
      }), this.state = {
        showChildren: !1,
        left: void 0,
        top: void 0
      };
    }
    closeChildren() {
      this.state.showChildren && (this.setState({
        showChildren: !1
      }), this.props.onCloseDetail && this.props.onCloseDetail());
    }
    componentDidMount() {
      !this.state.showChildren && this.props.childPositionByBulbOriginalPos && (this.originalBulbLeft = this.props.left), this.props.keepOpenTimeDuration && v.retrieveData() && this.props.keepOpenKey == v.getKey() && this.setState(v.retrieveData());
    }
    componentDidUpdate() {
      !this.state.showChildren && this.props.childPositionByBulbOriginalPos && (this.originalBulbLeft = this.props.left);
    }
    setPosition(e, t) {
      this.setState({
        left: e,
        top: t
      });
    }
    showChildren() {
      this.setState({
        showChildren: !0
      }), this.props.onExpandDetail && this.props.onExpandDetail();
    }
    componentWillUnmount() {
      this.props.onBulbMouseLeave && this.isMouseEnter && this.props.onBulbMouseLeave(this.lastMouseEnterTarget), this.props.keepOpenTimeDuration && v.register(this.props.keepOpenTimeDuration, this.state, this.props.keepOpenKey), this.state.showChildren && this.props.onCloseDetail && this.props.onCloseDetail();
    }
    isExpandedDetail() {
      return this.state.showChildren;
    }
    render() {
      if (this.state.showChildren) {
        var e = o().Children.only(this.props.children);
        return this.props.childPositionByBulbOriginalPos && (e = o().cloneElement(e, {
          style: f(f({}, e.props.style), {}, {
            left: this.originalBulbLeft
          })
        })), this.props.childHasOnClose && (e = o().cloneElement(e, {
          onClose: this.handleClose
        })), this.props.closeOnClickOutside ? o().createElement(h, {
          onClose: this.handleClose
        }, e) : e;
      }
      var t = this.props.style;
      this.props.left && (t = s.A.set(this.props.style || {}, "left", this.props.left)), this.props.manuallyUpdate && void 0 !== this.state.left && (t.left = this.state.left, t.top = this.state.top), this.props.appliedDzContainer && (t = g.a.applyReverseZoomStyle(t, this.props.appliedDzContainer, this.props.reversedScaleDZOrigin));
      var r = u()("no-print", {
        "mobile-tablet": a.A.isMobileOrTablet(),
        smaller: this.props.smaller
      });
      return o().createElement("bulb", {
        className: r,
        style: t,
        onMouseLeave: this.onBulbMouseLeave,
        onMouseEnter: this.onBulbMouseEnter,
        onMouseDown: this.onMouseDown
      }, this.props.icon || o().createElement("i", {
        className: "fa fa-cog",
        "aria-hidden": "true"
      }));
    }
  }
};
