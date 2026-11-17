/* module 49099 — 8732 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    _: () => S
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(7289),
    c = r(60150),
    d = r(8747),
    h = r(40961),
    p = r.n(h),
    u = r(60693),
    g = r(40383);
  class m extends o().Component {
    getBoxClass(e) {
      var t = !1;
      return "width" == this.props.scaleOption ? t = "rightmiddle" != e && "leftmiddle" != e : "height" == this.props.scaleOption && (t = "topmiddle" != e && "bottommiddle" != e), c.A.addMobileTabletClssIfRequired(a()("resize-box", {
        hide: t || this.props.selectOnly
      }));
    }
    getRect() {
      var e = p().findDOMNode(this);
      return u.T.getBCRect(e, this.props.getDzContainer());
    }
    render() {
      var e,
        t = this.props,
        r = t.isResized,
        n = t.scaleOption,
        i = this.props.getDzContainer();
      e = this.props.isResized ? {
        display: "block",
        position: "absolute",
        top: this.props.rect.top || 0,
        left: this.props.rect.left || 0,
        width: this.props.rect.width * i.zoomRatio,
        height: this.props.rect.height * i.zoomRatio,
        marginLeft: -1,
        marginTop: -1,
        cursor: "default",
        outline: "none"
      } : {
        display: "block",
        width: "".concat(100 * i.zoomRatio, "%"),
        height: "".concat(100 * i.zoomRatio, "%"),
        position: "absolute",
        left: 0,
        top: 0,
        cursor: "default",
        outline: "none",
        zIndex: 999
      }, e = g.a.applyReverseZoomStyle(e, i, "left top");
      var s = null;
      if (r) {
        var a = {
            position: "absolute",
            background: "rgba(255, 255, 255, 0.8)",
            top: 10,
            right: 10,
            color: "gray",
            fontSize: 12
          },
          c = "Width: ".concat((0, l.QQ)(this.props.rect.width, 0), " px");
        "both" == n && (c = "".concat((0, l.QQ)(this.props.rect.width, 0), " x ").concat((0, l.QQ)(this.props.rect.height, 0))), s = o().createElement("div", {
          style: a
        }, c);
      }
      return o().createElement("div", {
        onFocus: () => {
          console.log("focus");
        },
        tabIndex: -1,
        className: "no-print",
        onMouseDown: e => {
          e.preventDefault(), e.stopPropagation(), this.props.onOverlayMouseDown && this.props.onOverlayMouseDown(e);
        },
        style: e
      }, s, o().createElement("div", {
        className: "ghost-viewer"
      }), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "topleft", this.getRect());
        }
      }, o().createElement("topleft", {
        className: this.getBoxClass("topleft")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "topright", this.getRect());
        }
      }, o().createElement("topright", {
        className: this.getBoxClass("topright")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "topmiddle", this.getRect());
        }
      }, o().createElement("topmiddle", {
        className: this.getBoxClass("topmiddle")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "leftmiddle", this.getRect());
        }
      }, o().createElement("leftmiddle", {
        className: this.getBoxClass("leftmiddle")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "rightmiddle", this.getRect());
        }
      }, o().createElement("rightmiddle", {
        className: this.getBoxClass("rightmiddle")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "bottomleft", this.getRect());
        }
      }, o().createElement("bottomleft", {
        className: this.getBoxClass("bottomleft")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "bottomright", this.getRect());
        }
      }, o().createElement("bottomright", {
        className: this.getBoxClass("bottomright")
      })), o().createElement(d.F, {
        onTouchOrMouseDown: e => {
          this.props.onBoxMouseDown(e, "bottommiddle", this.getRect());
        }
      }, o().createElement("bottommiddle", {
        className: this.getBoxClass("bottommiddle")
      })));
    }
  }
  var f = 5,
    y = 5,
    v = (e, t, r) => {
      switch (e) {
        case "bottomright":
          return {
            width: Math.max(t.left, 5),
            height: Math.max(t.top, 5)
          };
        case "topright":
          var n, i;
          return {
            width: n = Math.max(t.left, 5),
            height: i = Math.max(r.height - t.top, 5),
            top: Math.min(t.top, r.height - 5)
          };
        case "bottomleft":
          var n, i;
          return {
            width: n = Math.max(r.width - t.left, 5),
            height: i = Math.max(t.top, 5),
            left: Math.min(t.left, r.width - 5)
          };
        case "topleft":
          var n, i;
          return {
            width: n = Math.max(r.width - t.left, 5),
            height: i = Math.max(r.height - t.top, 5),
            left: Math.min(t.left, r.width - 5),
            top: Math.min(t.top, r.height - 5)
          };
        case "rightmiddle":
          var n;
          return {
            width: n = Math.max(t.left, 5)
          };
        case "topmiddle":
          var i;
          return {
            height: i = Math.max(r.height - t.top, 5),
            top: Math.min(t.top, r.height - 5)
          };
        case "leftmiddle":
          var n;
          return {
            width: n = Math.max(r.width - t.left, 5),
            left: Math.min(t.left, r.width - 5)
          };
        case "bottommiddle":
          var i;
          return {
            height: i = Math.max(t.top, 5)
          };
      }
    },
    b = r(20418);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class S extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", new b.X({
        cacheBaseRect: !0
      }, this.props.getDzContainer)), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleMouseMoving", (e, t, r) => {
        if (this.state.isResizing) {
          var n = v(r.customData.positionBox, {
            left: t.left,
            top: t.top
          }, r.customData.objectRect);
          this.setState({
            rect: C(C({}, this.props.objectSize), n)
          });
        }
      }), (0, n.A)(this, "handleBoxMouseDown", (e, t, r) => {
        this.movingHandler.setBaseElement(p().findDOMNode(this));
        var n = u.T.getRectWidthHeight(r),
          i = n.rHeight,
          o = n.rWidth;
        this.movingHandler.mouseDown(e, {
          objectRect: {
            width: o,
            height: i
          },
          positionBox: t
        });
      }), this.movingHandler.onMovingStarted = () => {
        this.setState({
          isResizing: !0,
          rect: {
            width: this.props.objectSize.width,
            height: this.props.objectSize.height
          }
        });
      }, this.movingHandler.onMoving = this.handleMouseMoving, this.movingHandler.onMoved = () => {
        this.state.isResizing && (this.props.onResized({
          width: this.state.rect.width,
          height: this.state.rect.height
        }), this.setState({
          isResizing: !1,
          rect: void 0
        }));
      };
    }
    render() {
      return o().createElement(m, {
        onOverlayMouseDown: this.props.onOverlayMouseDown,
        rect: this.state.rect,
        isResized: this.state.isResizing,
        scaleOption: this.props.scaleOption,
        selectOnly: this.props.selectOnly,
        onBoxMouseDown: this.handleBoxMouseDown,
        getDzContainer: this.props.getDzContainer
      });
    }
  }
};
