/* module 54281 — 13370 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => E
  });
  var n = r(3453),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(2543),
    l = r.n(a),
    c = r(6810),
    d = r(84258),
    h = r(40961),
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var m = () => {};
  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = t.resetOnSpecialKeys || !1,
      n = t.getSpecificEventData || (() => ({})),
      o = t.onDragStart || m,
      a = t.onDragStop || m,
      l = t.onDragMove || m;
    class c extends s().Component {
      constructor(e) {
        super(e), (0, i.A)(this, "wasUsingSpecialKeys", !1), (0, i.A)(this, "movingHandler", new p.A({
          noPreventDefault: !0
        })), (0, i.A)(this, "onMouseDown", e => {
          var t, r;
          this.props.disabled || null != e.button && 0 !== e.button || (null === (t = (r = this.props).onMouseDown) || void 0 === t || t.call(r, e), this.props.disableSlider || (this.movingHandler.baseElement || this.movingHandler.setBaseElement((0, h.findDOMNode)(this)), this.movingHandler.mouseDown(e)));
        }), (0, i.A)(this, "onMouseMove", (e, t, i, o) => {
          if (!this.props.disabled && !this.props.disableSlider) {
            var s = o.metaKey || o.ctrlKey || o.shiftKey || o.altKey;
            r && this.wasUsingSpecialKeys !== s ? this.wasUsingSpecialKeys = s : this.setState(g({
              isMoving: !0,
              moveDeltaX: e.x,
              moveDeltaY: e.y
            }, n(o))), l(o);
          }
        }), this.state = {
          isMouseDown: !1,
          isMoving: !1,
          moveDeltaX: 0,
          moveDeltaY: 0
        }, this.movingHandler.onMovingStarted = e => {
          this.setState({
            isMoving: !1,
            isMouseDown: !0
          }), o(e);
        }, this.movingHandler.onMoved = (e, t, r) => {
          a(r), this.setState({
            isMoving: !1,
            isMouseDown: !1
          });
        }, this.movingHandler.onMoving = this.onMouseMove;
      }
      componentWillReceiveProps(e) {
        (e.disabled || e.disableSlider) && this.movingHandler.movingInfo && (this.movingHandler.cancel(), this.setState({
          isMoving: !1,
          isMouseDown: !1,
          moveDeltaX: 0,
          moveDeltaY: 0
        }));
      }
      componentWillUnmount() {
        this.movingHandler.cancel();
      }
      render() {
        return s().createElement(e, g(g({}, this.props), {}, {
          dataDrag: this.state,
          onMouseDown: this.onMouseDown
        }));
      }
    }
    return c;
  }
  const y = f;
  var v = r(7289),
    b = r(32485),
    x = r.n(b),
    C = r(55451);
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends s().PureComponent {
    constructor(e) {
      super(e), (0, i.A)(this, "onDoubleClick", e => {
        e.stopPropagation();
        var t = e.currentTarget;
        C.A.waitALitteWhile(function () {
          t.select();
        }), this.setState({
          startManualInput: !0
        });
      }), (0, i.A)(this, "handleInputChange", e => {
        var t = e.currentTarget.value,
          r = this.props,
          n = r.defaultUnableToParseValue,
          i = r.showEmpty;
        if (!this.props.disabled) {
          if (!(0, v.FN)(t)) return this.setState({
            currentValue: t
          }), void (i && "" == (t || "").trim() && this.props.onValueChanged(void 0, !0));
          var o = (0, v.Ro)(t, n, void 0);
          o.toString() === t ? this.setState({
            currentValue: o
          }) : this.setState({
            currentValue: t
          }), o >= this.min() && o <= this.max() && this.props.onValueChanged(this.safeNumber(o, !0), !0);
        }
      }), (0, i.A)(this, "onBlur", e => {
        this.props.disabled || !this.state.focused || !this.state.inChangingState || this.props.showEmpty && "" === this.state.currentValue || this.changeValue(this.state.currentValue, !1), this.setState({
          focused: !1,
          currentValue: this.safeNumber(this.props.value, !0),
          startManualInput: !1
        });
      }), (0, i.A)(this, "onKeyDown", e => {
        var t, r;
        if (!e.metaKey && !e.ctrlKey || e.which === k.UP || e.which === k.DOWN) {
          if (!this.props.disabled) {
            var n = this.getStepValue(e, this.props.step),
              i = this.safeNumber(this.state.currentValue),
              o = e.which;
            o === k.UP ? (e.preventDefault(), this.changeValue(i + n, !0)) : o === k.DOWN ? (e.preventDefault(), this.changeValue(i - n, !0)) : o === k.ENTER ? (e.preventDefault(), this.isInEditingMode() ? this.setAndStopEditing(e.currentTarget.value) : (this.setState({
              startManualInput: !0
            }), e.currentTarget.select())) : o !== k.BACKSPACE || this.isInEditingMode() ? -1 === O.indexOf(o) && e.preventDefault() : e.preventDefault(), this.props.onKeyDown && this.props.onKeyDown(e);
          }
        } else null === (t = (r = this.props).onKeyDown) || void 0 === t || t.call(r, e);
      }), (0, i.A)(this, "onMouseDown", e => {
        e.stopPropagation(), this.props.onMouseDown && this.props.onMouseDown(e);
      }), (0, i.A)(this, "handleFocus", () => {
        this.state.focused || this.setState({
          focused: !0,
          currentValue: this.props.showEmpty ? "" : this.safeNumber(this.props.value, !0)
        });
      }), this.state = {
        startManualInput: !!d.A.isMobileOrTablet(),
        wasUsingSpecialKeys: !1,
        dragStartValue: e.value,
        currentValue: e.value,
        focused: !1
      };
    }
    isStartDrag(e) {
      return e.isMouseDown && !e.isMoving;
    }
    isDragging(e) {
      return e.isMoving;
    }
    isUnDrag(e, t) {
      return !t.isMouseDown && e.isMouseDown;
    }
    isValueChangedAndDifferentWithState(e, t) {
      var r, n;
      return !!t && (e != this.state.currentValue || e != this.props.value);
    }
    componentWillReceiveProps(e) {
      if (e.disabled) this.setState({
        focused: !1,
        startManualInput: !1,
        inChangingState: !1,
        currentValue: e.value
      });else if (this.isStartDrag(e.dataDrag)) this.setState({
        dragStartValue: this.props.value
      });else if (this.isDragging(e.dataDrag)) {
        var t;
        if (!(this.props.dataDrag.moveDeltaX == e.dataDrag.moveDeltaX)) {
          var r = this.getStepValue(e.dataDrag, e.step, e.stepModifier);
          this.changeValue(this.state.dragStartValue + e.dataDrag.moveDeltaX * (null == e.velocity ? 1 : e.velocity) * r, !0, e);
        }
      } else if (this.isUnDrag(this.props.dataDrag, e.dataDrag)) this.changeValue(this.state.currentValue, !1);else {
        if (this.isInEditingMode() && e.ignorePropValueInFocusMode) return;
        if (e.value === this.props.value && e.min === this.props.min && e.max === this.props.max && e.decimals === this.props.decimals) return;
        if (e.showEmpty && null == e.value) return;
        var n = this.safeNumber(e.value, !0, e);
        this.isValueChangedAndDifferentWithState(n, this.isInEditingMode()) && this.setState({
          currentValue: n
        });
      }
    }
    bounds() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
        t = Number.isFinite(e.min) ? e.min : -Number.MAX_VALUE,
        r = Number.isFinite(e.max) ? e.max : Number.MAX_VALUE;
      return [Math.min(t, r), Math.max(t, r)];
    }
    min() {
      return this.bounds()[0];
    }
    max() {
      return this.bounds()[1];
    }
    safeNumber(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props,
        i = r.defaultUnableToParseValue,
        o = r.decimals,
        s = (0, v.Ro)(e, i),
        a = Number.isFinite(s) ? s : Number.isFinite(i) ? i : 0,
        c = Math.max(0, Math.min(100, Math.floor(o || 0))),
        d = this.bounds(r),
        h = (0, n.A)(d, 2),
        p = h[0],
        u = h[1];
      return l().clamp(t ? +a.toFixed(c) : a, p, u);
    }
    changeValue(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props;
      if (!r.disabled) {
        (e = this.safeNumber(e, !0, r)) !== this.state.currentValue && this.setState({
          currentValue: e
        });
        var n = this.state.inChangingState;
        this.state.inChangingState != t && this.setState({
          inChangingState: t
        }), t ? this.safeNumber(r.value, !0, r) != e && (r.onValueChanging ? r.onValueChanging(e) : r.onValueChanged(e)) : (e != r.value || n) && r.onValueChanged(e);
      }
    }
    setAndStopEditing(e) {
      this.changeValue(this.safeNumber(e), !1), this.setState({
        startManualInput: !1
      });
    }
    getStepValue(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.props.stepModifier,
        n = t;
      return e.metaKey || e.ctrlKey ? n /= r || 10 : e.shiftKey && (n *= r || 10), n;
    }
    getCursor() {
      return this.noSliderMode() ? "auto" : "ew-resize";
    }
    isInEditingMode() {
      return this.state.focused;
    }
    noSliderMode() {
      return this.state.startManualInput || this.props.disableSlider;
    }
    render() {
      var e,
        t = this.props.showEmpty,
        r = this.getCursor(),
        n = !this.noSliderMode(),
        i = this.props.value;
      i = this.isInEditingMode() ? this.state.currentValue : this.safeNumber(i, !0);
      var o = A(A({
        width: 20,
        padding: "2px 2px 2px 2px"
      }, this.props.style), {}, {
        textAlign: this.props.textAlign || (null === (e = this.props.style) || void 0 === e ? void 0 : e.textAlign) || "left",
        cursor: r
      });
      return this.props.disabled ? c.A.wrapInput(s().createElement("input", {
        autoCorrect: "off",
        autoCapitalize: "off",
        type: "text",
        "aria-label": this.props.ariaLabel,
        className: this.props.className,
        readOnly: !0,
        disabled: !0,
        value: t ? "" : i,
        style: {
          cursor: r,
          textAlign: this.props.textAlign || "left"
        }
      }), A(A({}, o), {}, {
        cursor: "default",
        background: "var(--ui-surface-muted, #f7f7f7)",
        border: "1px solid var(--ui-border, #e6e5e5)",
        color: "var(--ui-text-disabled, lightgray)"
      }), x()("ui-numeric-input", this.props.className)) : c.A.wrapInput(s().createElement("input", {
        autoCorrect: "off",
        autoCapitalize: "off",
        type: "text",
        "aria-label": this.props.ariaLabel,
        className: this.props.className,
        readOnly: n,
        value: t && !this.state.focused ? "" : i,
        style: {
          cursor: r,
          textAlign: this.props.textAlign || "left"
        },
        onKeyDown: this.onKeyDown,
        onDoubleClick: this.onDoubleClick,
        onChange: this.handleInputChange,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onMouseDown,
        onBlur: this.onBlur,
        onFocus: this.handleFocus
      }), o, x()("ui-numeric-input", this.props.className));
    }
  }
  (0, i.A)(w, "defaultProps", {
    className: "",
    decimals: 2,
    max: Number.MAX_VALUE,
    min: -Number.MAX_VALUE,
    step: 1,
    stepModifier: 10,
    defaultUnableToParseValue: 0
  });
  const E = y(w, {
    resetOnSpecialKeys: !0,
    touch: !0,
    getSpecificEventData: e => ({
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey
    }),
    onDragMove: e => {
      e.stopPropagation(), e.preventDefault();
    },
    onDragStart: e => {
      e.handledTouchStart = !0;
    }
  });
  var k = {
      UP: 38,
      DOWN: 40,
      ENTER: 13,
      BACKSPACE: 8
    },
    O = [8, 9, 35, 36, 37, 39, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190, 189, 173, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 109, 110];
};
