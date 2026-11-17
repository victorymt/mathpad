/* module 34126 — 7337 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TallyMarks: () => m,
    TallyMarksSc: () => f,
    default: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(2543),
    c = r.n(l),
    d = r(40383);
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleOnFocus", () => {
        this.setState({
          editingVl: this.props.value.toString()
        });
      }), (0, n.A)(this, "handleOnBlur", () => {
        if (null != this.state.editingVl) {
          var e = this.parseOrDefault(this.state.editingVl, this.props.defaultOnInvalid);
          this.setState({
            editingVl: void 0
          }, () => {
            e != this.props.value && this.props.onChange(e);
          });
        }
      });
    }
    getCurValue() {
      return null != this.state.editingVl ? this.state.editingVl : null == this.props.value ? "" : this.props.value.toString();
    }
    render() {
      return o().createElement("input", {
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnBlur,
        value: this.getCurValue(),
        style: this.props.style,
        onChange: e => {
          this.setState({
            editingVl: e.target.value
          });
          var t = this.parseOrDefault(e.target.value, this.props.defaultOnInvalid);
          t != this.props.value && this.props.onChange(t);
        }
      });
    }
    parseOrDefault(e, t) {
      var r = Number.parseFloat(e);
      return null == r || isNaN(r) ? t : (null != this.props.min && (r = Math.max(this.props.min, r)), null != this.props.max && (r = Math.min(this.props.max, r)), r);
    }
  }
  var p = r(36223);
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
    getClassName() {
      return "tally-marks-symbols";
    }
    renderBar(e, t, r) {
      var n = this.calculatePad(t),
        i = Math.floor(e / 5),
        s = e - 5 * i,
        a = this.calculateBarSpace(t),
        l;
      if (4 == s) {
        var c = n + i * a * 4 + 1.5 * a + a / 2 + this.calculateSpacingBetween(e, t),
          d;
        return o().createElement("rect", {
          key: e,
          transform: "rotate( 115 ".concat(c, " ").concat(r / 2, " )"),
          x: c - a / 2,
          y: 1 * -a,
          width: this.calculateBarSize(t).toFixed(2),
          height: r + 2 * a,
          stroke: "none"
        });
      }
      var h = n + i * a * 4 + a * s + a / 2 + this.calculateSpacingBetween(e, t),
        p;
      return o().createElement("rect", {
        key: e,
        x: h,
        y: 0,
        width: this.calculateBarSize(t).toFixed(2),
        height: r,
        stroke: "none"
      });
    }
    calculateWidth(e, t) {
      var r = this.calculatePad(t),
        n = Math.floor(e / 5),
        i = e - 5 * n,
        o = this.calculateBarSpace(t);
      return 2 * r + n * o * 4 + o * i + this.calculateSpacingBetween(e - 1, t);
    }
    calculateSpacingBetween(e, t) {
      return Math.round((Math.ceil((e + 1) / 5) - 1) * t / 3);
    }
    calculateBarSize(e) {
      return this.roundPoint2(e / 14);
    }
    calculateBarSpace(e) {
      return 3.5 * this.calculateBarSize(e);
    }
    roundPoint2(e) {
      return .2 * Math.round(e / .2);
    }
    calculatePad(e) {
      return Math.round(e / 5);
    }
    renderSettings() {
      if (this.props.selected) return o().createElement("setting", g(g({}, p.A.getStopPropagationForFocusClickMouseDown()), {}, {
        className: "mt-common-dialog  no-print",
        style: d.a.applyReverseZoomStyle({
          position: "absolute",
          left: 0,
          bottom: "100%",
          fontSize: 13
        }, this.getDzContainer(), "left bottom")
      }), o().createElement("span", null, "Value: "), o().createElement(h, {
        value: this.props.data.value || 1,
        defaultOnInvalid: 1,
        onChange: e => {
          this.props.onDataChanged(g(g({}, this.props.data), {}, {
            value: e
          }), {
            focusAcquired: !0
          });
        },
        style: {
          width: 30
        },
        max: 50,
        min: 1
      }));
    }
    renderComponent() {
      var e = c().clamp(this.props.data.value || 1, 1, 50),
        t = this.getMathFontSizePixel(),
        r = Math.round(.9 * t);
      return o().createElement("div", {
        style: {
          width: this.calculateWidth(e, t),
          height: r
        }
      }, o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, c().times(e, e => this.renderBar(e, t, r))), this.renderSettings());
    }
  }
  class f extends a.A {
    getViewComponent() {
      return m;
    }
    getLatextName() {
      return "\\tallymarks";
    }
    getSymbol() {
      return "tallymarks";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.value = 5, t;
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\tallymarks"],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 24,
            height: 15
          }
        }, o().createElement("svg", {
          style: {
            width: "100%",
            height: "100%"
          }
        }, o().createElement("rect", {
          x: "5.25",
          y: "0",
          width: "1.5",
          height: "15",
          stroke: "none"
        }), o().createElement("rect", {
          x: "9.75",
          y: "0",
          width: "1.5",
          height: "15",
          stroke: "none"
        }), o().createElement("rect", {
          x: "14.25",
          y: "0",
          width: "1.5",
          height: "15",
          stroke: "none"
        }), o().createElement("rect", {
          x: "18.75",
          y: "0",
          width: "1.5",
          height: "15",
          stroke: "none"
        }), o().createElement("rect", {
          transform: "rotate( 115 12 7.5 )",
          x: "9.75",
          y: "-4.5",
          width: "1.5",
          height: "24",
          stroke: "none"
        })))
      })];
    }
    toModel() {
      return this.getModel();
    }
    toLatex(e) {
      return "\\tallymark{".concat(e.value || 1, "}");
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: "tally mark ".concat(e.value || 1)
      };
    }
  }
  const y = new f();
};
