/* module 5043 — 6018 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335),
    a = r(36223),
    l = r(98231),
    c = r(180),
    d = r(91414),
    h = r(56540),
    p = r(40383);
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
  class m extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleLineTypeChanged", e => {
        this.changeSettingWidth(t => g(g({}, t), {}, {
          lineType: e
        }), !1);
      }), (0, n.A)(this, "handleColorSelect", (e, t) => {
        this.changeSettingWidth(t => g(g({}, t), {}, {
          lineColor: e
        }), t);
      }), (0, n.A)(this, "handleBgColorSelect", (e, t) => {
        "none" == e && (e = void 0), this.changeSettingWidth(t => g(g({}, t), {}, {
          bgColor: e
        }), t);
      });
    }
    changeSettingWidth(e, t) {
      var r = e(this.props.settings);
      this.props.onSettingsChange(r, t);
    }
    render() {
      var e = this.props.settings,
        t = e.lineType,
        r = void 0 === t ? "solid" : t,
        n = e.lineColor,
        i = void 0 === n ? this.props.defaultBorderColor : n,
        u = e.padding,
        m = void 0 === u ? this.props.defaultPadding : u,
        f = e.thickness,
        y = void 0 === f ? 1 : f,
        v = e.bgColor,
        b = void 0 === v ? "#FFF" : v,
        x = e.corner,
        C = void 0 === x ? 0 : x,
        S = [{
          key: "solid",
          value: "Solid"
        }, {
          key: "dotted",
          value: "Dotted"
        }, {
          key: "dashed",
          value: "Dashed"
        }];
      return o().createElement("setting", {
        className: "mt-common-dialog no-print",
        style: p.a.applyReverseZoomStyle({
          top: -75,
          left: -1,
          position: "absolute",
          fontSize: 12,
          paddingLeft: 10,
          paddingRight: 10,
          color: "var(--ui-text-muted, gray)"
        }, this.props.dzContainer, "left bottom"),
        onMouseDown: a.A.focusAndCursorSelectAcquired,
        onDoubleClick: a.A.onDoubleClickStopPropagation
      }, o().createElement("div", null, o().createElement("span", {
        style: {
          paddingRight: 3,
          width: 60,
          display: "inline-block"
        }
      }, "Line: "), o().createElement(s.A, {
        width: 60,
        style: {
          display: "inline-block"
        },
        data: S,
        value: r,
        onChange: this.handleLineTypeChanged
      }), o().createElement(l.A, {
        requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        stopPropagation: !0,
        style: {
          display: "inline-block",
          verticalAlign: "bottom",
          marginLeft: 5
        },
        value: i,
        onItemSelect: this.handleColorSelect
      }), o().createElement(c.A, {
        style: {
          display: "inline-block",
          verticalAlign: "-5px",
          marginLeft: 5
        },
        value: y,
        onItemSelect: e => this.changeSettingWidth(t => g(g({}, t), {}, {
          thickness: e
        }), !1)
      }), o().createElement("span", {
        style: {
          paddingRight: 3,
          paddingLeft: 20,
          display: "inline-block"
        }
      }, "Background: "), o().createElement(h.A, {
        requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        stopPropagation: !0,
        style: {
          display: "inline-block",
          verticalAlign: "bottom",
          marginLeft: 5,
          cursor: "pointer"
        },
        itemStyle: {
          display: "inline-block",
          verticalAlign: "-4px"
        },
        value: b,
        onItemSelect: this.handleBgColorSelect
      })), o().createElement("div", {
        style: {
          marginTop: 3
        }
      }, o().createElement("span", {
        style: {
          paddingRight: 3,
          width: 62,
          display: "inline-block"
        }
      }, "Padding: "), o().createElement(d.A, {
        disableSlider: !0,
        containerStyle: {
          display: "inline-flex",
          marginLeft: -2
        },
        style: {
          width: 34
        },
        unit: "em",
        min: 0,
        max: 50,
        step: .1,
        decimals: 2,
        value: m,
        onValueChanging: e => this.changeSettingWidth(t => g(g({}, t), {}, {
          padding: e
        }), !0),
        onValueChanged: e => this.changeSettingWidth(t => g(g({}, t), {}, {
          padding: e
        }), !0)
      }), o().createElement("span", {
        style: {
          paddingRight: 3,
          marginLeft: 84,
          width: 77,
          display: "inline-block"
        }
      }, "Corner: "), o().createElement(d.A, {
        disableSlider: !0,
        containerStyle: {
          display: "inline-flex",
          marginLeft: -2
        },
        unit: "px",
        min: 0,
        max: 1e4,
        step: 1,
        decimals: 0,
        value: C,
        onValueChanging: e => this.changeSettingWidth(t => g(g({}, t), {}, {
          corner: e
        }), !0),
        onValueChanged: e => this.changeSettingWidth(t => g(g({}, t), {}, {
          corner: e
        }), !0)
      })));
    }
  }
};
