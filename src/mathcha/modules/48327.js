/* module 48327 — 4879 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(26642),
    a = r(35835),
    l = r(46774),
    c = r(36223),
    d = r(40961),
    h = r.n(d),
    p = r(85849);
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
  class m extends s.A {
    constructor(e) {
      super(e), (0, n.A)(this, "disableNoColor", void 0), (0, n.A)(this, "closedOnEscape", !0), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "lastPos", void 0), (0, n.A)(this, "onColorSelectMouseDown", e => {
        this.props.stopPropagation ? e.stopPropagation() : c.A.setCustomInfo(e, a.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
      }), (0, n.A)(this, "handleColorChange", e => {
        this.props.onItemSelect(e, !0);
      }), (0, n.A)(this, "onExpandContainerMouseDown", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "handleMovableBarMouseDown", e => {
        if (this.lastPos) this.lastPos = {
          x: this.state.containerLeft || 0,
          y: this.state.containerTop || 0
        };else {
          var t = this.getSuggestExpandStyle();
          this.lastPos = {
            x: Number.parseInt(t.left) || 0,
            y: Number.parseInt(t.top) || 0
          };
        }
        if (!this.movingHandler.baseElement) {
          var r = h().findDOMNode(this);
          this.movingHandler.setBaseElement(r), this.movingHandler.setContainer(window.document.body);
        }
        this.movingHandler.mouseDown(e);
      }), this.props.enableMoving && (this.movingHandler = new p.A(), this.movingHandler.onMoving = e => {
        this.setState({
          containerLeft: this.lastPos.x + e.x,
          containerTop: this.lastPos.y + e.y
        });
      }, this.movingHandler.onMoved = () => {});
    }
    componentDidMount() {
      var e;
      super.componentDidMount(), h().findDOMNode(this).reactInstance = this;
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.showEmpty != this.props.showEmpty || t.containerLeft != this.state.containerLeft || t.containerTop != this.state.containerTop || e.value != this.props.value;
    }
    getComponentClassName() {
      return "color-picker";
    }
    renderNoColorSelect() {
      if (!this.disableNoColor && !this.props.disableNoColor) return o().createElement("no-color-select", {
        onMouseDown: () => this.props.onItemSelect("noColorValue" in this.props ? this.props.noColorValue : "none")
      }, "No Color");
    }
    renderExpandComponent() {
      return this.innerRenderExpandComponent(this.getSuggestExpandStyle());
    }
    innerRenderExpandComponent(e) {
      return this.props.enableMoving && (e = g(g({}, e), {}, {
        top: this.state.containerTop,
        left: this.state.containerLeft
      })), o().createElement("color-select", {
        ref: e => this.registerExpandContainer(e),
        onTouchStart: e => e.nativeEvent.handledTouchStart = !0,
        style: e,
        onMouseDown: this.onColorSelectMouseDown
      }, this.renderMovableBar(), this.renderNoColorSelect(), o().createElement(l.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        color: this.props.value,
        onChange: this.handleColorChange
      }), this.renderManageColorPresetBtn());
    }
    renderMovableBar() {
      if (this.props.enableMoving) return o().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, lightgray)",
          backgroundColor: "var(--ui-surface-muted, #f7f7f7)",
          height: 15,
          cursor: "move",
          margin: -1
        },
        onMouseDown: this.handleMovableBarMouseDown
      });
    }
    renderManageColorPresetBtn() {
      if (this.props.showChangingPresetColorBtn && this.props.requestPickerSettings().allowChangePresetColor()) return o().createElement("button", {
        style: {
          width: "100%"
        },
        className: "btn-normal btn-large",
        onClick: () => {
          this.closeExpand(), this.props.requestPickerSettings().onChangePresetColor();
        }
      }, "Change Preset Colors");
    }
  }
};
