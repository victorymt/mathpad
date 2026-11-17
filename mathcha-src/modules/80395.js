/* module 80395 — 2974 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335),
    a = r(30156),
    l = r(47858);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "mathFonts", void 0), (0, n.A)(this, "onRenderItem", e => {
        var t = e.key,
          r = "ABCDabc",
          n = this.props.baseMathModeFontFamily,
          i = d({
            paddingLeft: 10,
            fontSize: 14
          }, l.A.basicMathStyle(e.key, n));
        return o().createElement("div", null, o().createElement("span", {
          style: {
            width: 65,
            display: "inline-block"
          }
        }, t), o().createElement("span", {
          style: i
        }, r));
      }), this.mathFonts = [{
        key: "default",
        value: "(font default)"
      }, {
        key: "\\mathnormal",
        value: "mathnormal"
      }, {
        key: "\\mathrm",
        value: "mathrm"
      }, {
        key: "\\mathbf",
        value: "mathbf"
      }, {
        key: "\\boldsymbol",
        value: "boldsymbol"
      }, {
        key: "\\mathit",
        value: "mathit"
      }, {
        key: "\\mathbb",
        value: "mathbb"
      }, {
        key: "\\mathcal",
        value: "mathcal"
      }, {
        key: "\\mathscr",
        value: "mathscr"
      }, {
        key: "\\mathfrak",
        value: "mathfrak"
      }, {
        key: "\\mathsf",
        value: "mathsf"
      }, {
        key: "\\mathtt",
        value: "mathtt"
      }, {
        key: "\\text",
        value: "text"
      }], this.props.noDefault && (this.mathFonts = this.mathFonts.filter(e => "default" != e.key));
    }
    render() {
      return o().createElement(s.A, {
        variant: "compact",
        usePositionFixedOnExpand: !0,
        data: this.mathFonts,
        isReadOnly: !0,
        style: {
          color: "var(--ui-text-muted, #757575)"
        },
        onChange: this.props.onChange,
        value: this.props.value,
        width: this.props.width || 100,
        expansionWidth: 180,
        onRenderItem: this.onRenderItem,
        title: a.A.getToolTipByKey("math-font")
      });
    }
  }
};
