/* module 38187 — 6576 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    C: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(63746),
    a = r(50888),
    l = r(32485),
    c = r.n(l),
    d = r(30156),
    h = r(46600),
    p = r(77753);
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
      super(...arguments), (0, n.A)(this, "handleFontNameChange", e => {
        if ("default" == e) return this.props.onFontNameChange(void 0);
        this.props.onFontNameChange(e);
      }), (0, n.A)(this, "handleFontSizeChange", e => {
        if ("\\normalsize" == e) return this.props.onFontSizeChange(void 0);
        this.props.onFontSizeChange(e);
      });
    }
    shouldComponentUpdate(e) {
      return e.fontName != this.props.fontName || e.fontSize != this.props.fontSize || e.isBold != this.props.isBold || e.isItalic != this.props.isItalic || e.isUnderline != this.props.isUnderline || e.isLineThrough != this.props.isLineThrough || e.fontColor != this.props.fontColor || e.fontBgColor != this.props.fontBgColor || e.isFontNameHidden != this.props.isFontNameHidden || e.isFontSizeHidden != this.props.isFontSizeHidden || e.isUnderlineHidden != this.props.isUnderlineHidden || e.fontBaseSize != this.props.fontBaseSize || e.isFontBgColorHidden != this.props.isFontBgColorHidden;
    }
    hbar() {
      return this.props.hBarStyle ? o().createElement("separate-hbar", {
        style: g({
          marginLeft: 5,
          marginRight: 5
        }, this.props.hBarStyle)
      }) : o().createElement("separate-hbar", {
        style: {
          marginLeft: 5,
          marginRight: 5
        }
      });
    }
    renderTextBgColor() {
      if (!this.props.isFontBgColorHidden) {
        var e = this.props.fontBgColor;
        return e = e || "#FFF", o().createElement(p.A, {
          showChangingPresetColorBtn: this.props.showChangingPresetColorBtn,
          requestPickerSettings: this.props.requestPickerSettings,
          stopPropagation: !0,
          style: {
            marginTop: -1,
            zIndex: this.props.expandZIndex || 0
          },
          value: e,
          onItemSelect: this.props.onFontBgColorChange
        });
      }
    }
    renderClearButton() {
      if (this.props.showClearButton) return o().createElement("button", {
        className: "btn-normal",
        onClick: this.props.onClear,
        style: {
          paddingLeft: 10,
          paddingRight: 10,
          marginLeft: 5,
          marginTop: 3
        }
      }, this.props.clearButtonText || "Clear Style");
    }
    render() {
      var e = this.props,
        t = e.fontName,
        r = e.fontSize,
        n = e.isBold,
        i = e.isItalic,
        l = e.isLineThrough,
        p = e.isUnderline,
        u = e.fontColor,
        g = e.isFontNameHidden,
        m = e.isUnderlineHidden,
        f = e.isFontSizeHidden;
      return u = u || "#000", void 0 === r && (r = "\\normalsize"), void 0 === t && (t = "default"), o().createElement("span", {
        style: this.props.containerStyle,
        className: "text-style-settings-container"
      }, !g && o().createElement("styled-select", {
        class: "font-select",
        style: {
          color: "var(--ui-text-muted, #757575)",
          paddingTop: 3
        }
      }, o().createElement(s.A, {
        showChangingPresetColorBtn: this.props.showChangingPresetColorBtn,
        fontName: t,
        onFontNameChange: this.handleFontNameChange,
        width: 100,
        expansionWidth: 170,
        showDefault: !0,
        selectLocalFonts: this.props.textModeSelectLocalFonts,
        onRequestLocalFont: this.props.onRequestLocalFont
      })), !f && o().createElement("styled-select", {
        class: "font-size-select",
        style: {
          color: "var(--ui-text-muted, #757575)",
          paddingTop: 3
        }
      }, o().createElement(a.A, {
        requestFontSizeRatio: this.props.requestFontSizeRatio,
        fontBaseSize: this.props.fontBaseSize,
        width: 80,
        value: r,
        onChange: this.handleFontSizeChange
      })), o().createElement("list-items-options", {
        class: "setting-group-options"
      }, o().createElement("i", {
        className: c()("fa fa-bold", {
          selected: n
        }),
        onMouseDown: e => {
          e.stopPropagation(), this.props.onFontBoldSelected();
        },
        "aria-hidden": "true",
        title: d.A.getToolTipByKey("bold")
      }), o().createElement("i", {
        className: c()("fa fa-italic", {
          selected: i
        }),
        onMouseDown: e => {
          e.stopPropagation(), this.props.onFontItalicSelected();
        },
        "aria-hidden": "true",
        title: d.A.getToolTipByKey("italic")
      }), !m && o().createElement("i", {
        className: c()("fa fa-underline", {
          selected: p
        }),
        onMouseDown: e => {
          e.stopPropagation(), this.props.onFontUnderlineSelectd();
        },
        "aria-hidden": "true",
        title: d.A.getToolTipByKey("underline")
      }), o().createElement("i", {
        className: c()("fa fa-strikethrough", {
          selected: l
        }),
        onMouseDown: e => {
          e.stopPropagation(), this.props.onFontLineThroughSelectd();
        },
        "aria-hidden": "true",
        title: d.A.getToolTipByKey("strike-through")
      })), this.hbar(), o().createElement(h.A, {
        showChangingPresetColorBtn: this.props.showChangingPresetColorBtn,
        requestPickerSettings: this.props.requestPickerSettings,
        stopPropagation: !0,
        style: {
          marginTop: -1,
          zIndex: this.props.expandZIndex || 0
        },
        value: u,
        onItemSelect: this.props.onFontColorChange
      }), this.renderTextBgColor(), this.hbar(), this.renderClearButton());
    }
  }
};
