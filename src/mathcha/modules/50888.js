/* module 50888 — 5125 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335),
    a = r(30156),
    l = r(18808),
    c = r(19539),
    d = r(2543),
    h = r.n(d);
  class p extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "inputHtml", void 0), (0, n.A)(this, "handleApplyClick", () => {
        if (this.inputHtml) {
          var e = this.parseFontSizeValue(this.inputHtml.value);
          this.props.onChange({
            fType: void 0,
            value: c.A.round4(e / this.getCalculatedFontBaseSize())
          });
        }
      }), (0, n.A)(this, "onFontSizeRenderItem", e => {
        var t = 13,
          r = this.props.value || "\\normalsize";
        if ("\\custom" == e.key) {
          var n = "";
          return l.l.isAbsoluteObj(r) && (n = "".concat(r.value, "px")), l.l.isRelativeObj(r) && (n = "".concat(c.A.round2(r.value * this.getCalculatedFontBaseSize()), "px")), o().createElement("div", {
            style: {
              lineHeight: "1.2",
              fontSize: t
            }
          }, n);
        }
        if ("\\more-options" == e.key) return o().createElement("div", {
          onMouseDown: e => e.stopPropagation(),
          style: {
            lineHeight: "1.2",
            fontSize: t,
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            background: "none",
            marginTop: 6,
            marginBottom: 5
          }
        }, o().createElement("input", {
          defaultValue: "" + l.l.getAbsoluteFontSize(r, this.getCalculatedFontBaseSize()),
          ref: e => this.inputHtml = e,
          style: {
            width: 35,
            fontSize: 13
          }
        }), o().createElement("span", {
          style: {
            paddingLeft: 3
          }
        }, "px"), o().createElement("button", {
          className: "btn-primary",
          style: {
            marginLeft: 22,
            width: 52
          },
          onClick: this.handleApplyClick
        }, "Apply"));
        var i = l.l.getFontRatioFromStr(e.key);
        return o().createElement("div", {
          style: {
            lineHeight: "1.2",
            fontSize: t,
            flex: 1,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "flex-end"
          }
        }, o().createElement("span", {
          style: {
            flex: 1
          }
        }, e.value), o().createElement("span", {
          style: {
            fontSize: "0.9em",
            paddingLeft: 2,
            display: "inline-block",
            float: "right",
            paddingRight: 4
          }
        }, "(", c.A.round2(this.getCalculatedFontBaseSize() * i), " px)"));
      }), (0, n.A)(this, "handleChange", e => {
        "\\more-options" != e && ("\\custom" != e ? this.props.onChange(e) : this.props.onChange(this.props.value || "\\normalsize"));
      });
    }
    parseFontSizeValue(e) {
      var t = Number.parseFloat(e);
      return "number" != typeof t || Number.isNaN(t) ? this.getCalculatedFontBaseSize() : h().clamp(t, 1, 500);
    }
    getSelectValue() {
      var e = this.props.value;
      return null == e ? "\\normalsize" : "" == e ? "" : l.l.isRelativeStr(e) ? e : "\\custom";
    }
    getRenderItems() {
      var e = [{
          key: "\\tiny",
          value: "tiny"
        }, {
          key: "\\scriptsize",
          value: "scriptsize"
        }, {
          key: "\\footnotesize",
          value: "footnotesize"
        }, {
          key: "\\small",
          value: "small"
        }, {
          key: "\\normalsize",
          value: "normalsize"
        }, {
          key: "\\large",
          value: "large"
        }, {
          key: "\\Large",
          value: "Large"
        }, {
          key: "\\LARGE",
          value: "LARGE"
        }, {
          key: "\\huge",
          value: "huge"
        }, {
          key: "\\Huge",
          value: "Huge"
        }],
        t = this.props.value || "\\normalsize";
      return l.l.isAbsoluteObj(t) ? e = e.concat([{
        key: "\\custom",
        value: "".concat(t, "px")
      }]) : l.l.isRelativeObj(t) && (e = e.concat([{
        key: "\\custom",
        value: "".concat(c.A.round2(t.value * this.getCalculatedFontBaseSize()), "px")
      }])), e = e.concat([{
        key: "\\more-options",
        value: "More Options",
        noSelect: !0
      }]);
    }
    getCalculatedFontBaseSize() {
      return c.A.round2(this.props.fontBaseSize * this.props.requestFontSizeRatio());
    }
    render() {
      var e = this.props.width;
      return o().createElement(s.A, {
        variant: "compact",
        usePositionFixedOnExpand: !0,
        data: this.getRenderItems(),
        isReadOnly: !0,
        onChange: this.handleChange,
        value: this.getSelectValue(),
        width: e || 100,
        expansionWidth: 145,
        onRenderItem: this.onFontSizeRenderItem,
        title: a.A.getToolTipByKey("font-size")
      });
    }
  }
};
