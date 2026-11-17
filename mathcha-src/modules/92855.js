/* module 92855 — 3509 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    G: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(38187);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c extends o().Component {
    changeStyle(e) {
      var t = e(this.props.blockStyle || {});
      this.props.onBlockStyleChange(t);
    }
    render() {
      var e = this.props.blockStyle || {},
        t = e.fontName,
        r = e.fontSize,
        n = e.color,
        i = e.bgColor,
        a = e.isBold,
        c = e.isItalic,
        d = e.textDecoration;
      return o().createElement(s.C, {
        requestPickerSettings: this.props.requestPickerSettings,
        isFontNameHidden: this.props.isFontNameHidden,
        isFontSizeHidden: this.props.isFontSizeHidden,
        showClearButton: this.props.showClearButton,
        clearButtonText: this.props.clearButtonText,
        onClear: this.props.onClear,
        containerStyle: this.props.containerStyle,
        fontBaseSize: this.props.fontBaseSize,
        fontName: t,
        fontSize: r,
        isBold: a,
        isItalic: c,
        isUnderline: "underline" == d,
        isLineThrough: "line-through" == d,
        fontColor: n || this.props.dfColor,
        fontBgColor: i,
        expandZIndex: this.props.expandZIndex,
        isFontBgColorHidden: this.props.isFontBgColorHidden,
        hBarStyle: this.props.hBarStyle,
        textModeSelectLocalFonts: this.props.textModeSelectLocalFonts,
        onRequestLocalFont: this.props.onRequestLocalFont,
        onFontNameChange: e => this.changeStyle(t => l(l({}, t), {}, {
          fontName: e
        })),
        onFontSizeChange: e => this.changeStyle(t => l(l({}, t), {}, {
          fontSize: e
        })),
        onFontBoldSelected: () => this.changeStyle(e => l(l({}, e), {}, {
          isBold: !e.isBold
        })),
        onFontItalicSelected: () => this.changeStyle(e => l(l({}, e), {}, {
          isItalic: !e.isItalic
        })),
        onFontUnderlineSelectd: () => {
          this.changeStyle(e => "underline" == e.textDecoration ? l(l({}, e), {}, {
            textDecoration: "none"
          }) : l(l({}, e), {}, {
            textDecoration: "underline"
          }));
        },
        onFontLineThroughSelectd: () => {
          this.changeStyle(e => "line-through" == e.textDecoration ? l(l({}, e), {}, {
            textDecoration: "none"
          }) : l(l({}, e), {}, {
            textDecoration: "line-through"
          }));
        },
        onFontColorChange: e => this.changeStyle(t => l(l({}, t), {}, {
          color: e
        })),
        onFontBgColorChange: e => this.changeStyle(t => l(l({}, t), {}, {
          bgColor: e
        })),
        requestFontSizeRatio: this.props.requestFontSizeRatio
      });
    }
  }
};
