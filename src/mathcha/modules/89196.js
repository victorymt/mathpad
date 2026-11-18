/* module 89196 — 7244 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  const s = () => o().createElement("g", {
    style: {
      stroke: "var(--ui-text, black)",
      fill: "none"
    }
  }, o().createElement("g", null, o().createElement("path", {
    d: " M10.25,7.5 L80.25,7.5 L80.25,92.5 L10.25,92.5 Z",
    style: {
      strokeWidth: 1,
      stroke: "var(--ui-text, rgb(0, 0, 0))",
      fill: "var(--ui-on-accent, rgb(255, 255, 255))"
    }
  })), o().createElement("g", null, o().createElement("g", null, o().createElement("path", {
    d: "  M10,49 L27.91,49",
    style: {
      stroke: "rgb(65, 117, 5)",
      strokeWidth: 1,
      fill: "none"
    }
  })), o().createElement("g", null, o().createElement("path", {
    d: "  M63,49 L80.91,49",
    style: {
      stroke: "rgb(65, 117, 5)",
      strokeWidth: 1,
      fill: "none"
    }
  })), o().createElement("g", null, o().createElement("path", {
    d: "  M45.53,92.88 L45.53,76.25",
    style: {
      stroke: "rgb(65, 117, 5)",
      strokeWidth: 1,
      fill: "none"
    }
  })), o().createElement("g", null, o().createElement("path", {
    d: "  M45.53,23.55 L45.53,6.92",
    style: {
      stroke: "rgb(65, 117, 5)",
      strokeWidth: 1,
      fill: "none"
    }
  }))), o().createElement("g", null, o().createElement("path", {
    d: " M27.63,23.75 L62.88,23.75 L62.88,76.25 L27.63,76.25 Z",
    style: {
      strokeWidth: 1,
      stroke: "var(--ui-text-muted, rgb(155, 155, 155))",
      fill: "var(--ui-on-accent, rgb(255, 255, 255))",
      strokeDasharray: "1.125, 3.35"
    }
  })), o().createElement("g", null));
  r.dn(s);
  var a = r(54281),
    l = r(36268),
    c = r(67107);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends i.Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleUnitChanged", e => {
        var t = this.props.marginInfo,
          r = t.left,
          n = t.top,
          i = t.right,
          o = t.bottom,
          s = t.unit,
          a = c.L.convert(r, s, e),
          l = c.L.convert(n, s, e),
          d = c.L.convert(i, s, e),
          p = c.L.convert(o, s, e);
        this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
          left: a,
          top: l,
          right: d,
          bottom: p,
          unit: e
        }));
      });
    }
    renderPageMarginText() {
      var e = this.props,
        t = e.title,
        r = e.disabled,
        n = this.props.marginInfo.unit;
      return o().createElement("span", {
        style: {
          color: "var(--ui-text-muted, gray)",
          width: "100%",
          textAlign: "center",
          display: "inline-block",
          paddingTop: 5,
          fontWeight: "bold"
        }
      }, o().createElement("span", null, t || "Page Margin"), o().createElement(l.t, {
        disabled: r,
        style: {
          textAlign: "left",
          marginLeft: 5,
          fontWeight: "normal"
        },
        unit: n,
        onUnitChange: this.handleUnitChanged
      }));
    }
    render() {
      var e = this.props.marginInfo,
        t = e.left,
        r = e.top,
        n = e.right,
        i = e.bottom,
        l = this.props.disabled,
        c = 4;
      return o().createElement("div", {
        className: "role-margin-input-root-container",
        style: {
          position: "relative",
          height: 200,
          width: 250,
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          marginTop: 5,
          marginBottom: 5
        }
      }, this.renderPageMarginText(), o().createElement("div", {
        style: {
          position: "relative",
          left: 24
        }
      }, o().createElement("svg", {
        style: {
          position: "absolute",
          left: 56,
          top: 35,
          width: 150,
          height: 150
        }
      }, s()), o().createElement(a.A, {
        style: h(h({}, u), {}, {
          left: 6,
          top: 70,
          width: 40
        }),
        disabled: l,
        min: 0,
        max: 1e3,
        step: 1,
        decimals: 2,
        disableSlider: !0,
        value: t,
        onValueChanged: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            left: e
          }));
        },
        onValueChanging: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            left: e
          }));
        }
      }), o().createElement(a.A, {
        style: h(h({}, u), {}, {
          left: 77,
          top: 10,
          width: 40
        }),
        disabled: l,
        min: 0,
        max: 1e3,
        step: 1,
        decimals: 2,
        disableSlider: !0,
        value: r,
        onValueChanged: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            top: e
          }));
        },
        onValueChanging: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            top: e
          }));
        }
      }), o().createElement(a.A, {
        style: h(h({}, u), {}, {
          left: 146,
          top: 70,
          width: 40
        }),
        disabled: l,
        min: 0,
        max: 1e3,
        step: 1,
        decimals: 2,
        disableSlider: !0,
        value: n,
        onValueChanged: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            right: e
          }));
        },
        onValueChanging: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            right: e
          }));
        }
      }), o().createElement(a.A, {
        style: h(h({}, u), {}, {
          left: 77,
          top: 132,
          width: 40
        }),
        disabled: l,
        min: 0,
        max: 1e3,
        step: 1,
        decimals: 2,
        disableSlider: !0,
        value: i,
        onValueChanged: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            bottom: e
          }));
        },
        onValueChanging: e => {
          this.props.onMarginInfoChanged(h(h({}, this.props.marginInfo), {}, {
            bottom: e
          }));
        }
      })));
    }
  }
  var u = {
    fontSize: 12,
    padding: 3,
    margin: "3px 1px 1px 1px",
    display: "inline-block",
    height: 16,
    width: 26,
    textAlign: "center",
    position: "absolute"
  };
};
