/* module 63746 — 3128 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335),
    a = r(30156),
    l = r(58578),
    c = r(84258);
  class d extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "presetFonts", void 0), (0, n.A)(this, "onFontRenderItem", e => o().createElement("div", {
        style: {
          fontWeight: "--local-select-font" == e.key ? "bold" : void 0,
          color: "--local-select-font" == e.key ? "#4caf4f" : void 0,
          fontFamily: this.getFontFamilyFromKey(e.key)
        }
      }, e.value)), (0, n.A)(this, "handleSelectFontChange", e => {
        "--local-select-font" != e ? "--local-custom" != e && this.props.onFontNameChange(e) : this.props.onRequestLocalFont();
      }), this.invalidFontSelects(e);
    }
    shouldComponentUpdate(e) {
      return e.fontName != this.props.fontName;
    }
    componentWillUpdate(e) {
      e.fontName != this.props.fontName && this.invalidFontSelects(e);
    }
    getFontFamilyFromKey(e) {
      switch (e) {
        case "--local-custom":
          return this.props.fontName.name;
        case "--local-select-font":
          return "Arial";
      }
      return l.A.textFontFamilyFromKey(e);
    }
    getFontNameKey() {
      return "string" == typeof this.props.fontName ? this.props.fontName : "--local-custom";
    }
    invalidFontSelects(e) {
      var t = [{
        key: "pcr",
        value: l.A.textFontDisplayFromKey("pcr")
      }, {
        key: "helvet",
        value: l.A.textFontDisplayFromKey("helvet")
      }, {
        key: "ptm",
        value: l.A.textFontDisplayFromKey("ptm")
      }, {
        key: "cmun-serif",
        value: l.A.textFontDisplayFromKey("cmun-serif")
      }, {
        key: "thickercm-serif",
        value: l.A.textFontDisplayFromKey("thickercm-serif")
      }, {
        key: "cmun-sans",
        value: l.A.textFontDisplayFromKey("cmun-sans")
      }, {
        key: "cmun-typewriter",
        value: l.A.textFontDisplayFromKey("cmun-typewriter")
      }];
      e.showDefault && t.splice(0, 0, {
        key: "default",
        value: l.A.textFontDisplayFromKey("default")
      }), l.A.isLocalFont(e.fontName) && t.push({
        key: "--local-custom",
        value: "".concat(l.A.getFontNameWithoutQuote(e.fontName.name), " (*)")
      }), e.selectLocalFonts && e.onRequestLocalFont && c.A.supportLocalCustomFonts() && t.push({
        key: "--local-select-font",
        value: "Select Local Fonts..."
      }), this.presetFonts = t;
    }
    render() {
      return o().createElement(s.A, {
        variant: "compact",
        usePositionFixedOnExpand: !0,
        inputStyle: {
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        expansionWidth: this.props.expansionWidth,
        data: this.presetFonts,
        isReadOnly: !0,
        onChange: this.handleSelectFontChange,
        value: this.getFontNameKey(),
        width: this.props.width || 100,
        onRenderItem: this.onFontRenderItem,
        title: a.A.getToolTipByKey("font-name")
      });
    }
  }
};
