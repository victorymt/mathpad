/* module 39528 — 3069 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    d: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(516),
    l = r(40961),
    c = r.n(l),
    d = r(38482),
    h = r(77009),
    p = r(55451);
  class u extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "presetColorHotkeyNumbering", void 0), (0, n.A)(this, "lastColorPickerExpandedInstance", void 0), (0, n.A)(this, "handlePresetColorHotkeyNumberingRef", e => {
        this.presetColorHotkeyNumbering = e;
      });
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    show() {
      var e = c().findDOMNode(this),
        t = a.A.getElementRect(e),
        r = this.selectors.map(r => {
          var n = s.YG(s.aY(e), r.selector)[0];
          if (n) return {
            key: r.key,
            rect: a.A.findRectElementToRect(n, t)
          };
        }).filter(e => e);
      this.setState({
        rects: r
      });
    }
    hide(e) {
      (this.state.rects || this.state.isColorSelected) && this.setState({
        rects: void 0,
        isColorSelected: !1
      }), this.lastColorPickerExpandedInstance && !e && (this.lastColorPickerExpandedInstance.closeExpand(), this.lastColorPickerExpandedInstance = void 0);
    }
    triggerSelectByKey(e) {
      var t;
      if (this.state.isColorSelected) return null === (t = this.presetColorHotkeyNumbering) || void 0 === t || t.triggerSelectByNumber(e - 48), this.hide(!1), "handled";
      var r = this.selectors.find(t => t.keyCode == e);
      if (r) {
        var n = c().findDOMNode(this),
          i = s.aY(s.YG(s.aY(n), r.selector))[0];
        if (i && i.reactInstance) return this.lastColorPickerExpandedInstance = i.reactInstance, this.lastColorPickerExpandedInstance.openExpand(!1), p.A.next(() => {
          var e;
          this.setState({
            isColorSelected: !0
          }), null === (e = this.presetColorHotkeyNumbering) || void 0 === e || e.show(e => {
            var t = s.YG(e, ".sketch-picker>.flexbox-fix").slice(2, 3);
            return s.YG(t, ">div>span>div");
          }, "top", s.aY(n));
        }), "handled";
      }
    }
    renderRects() {
      if (this.state.rects && !this.state.isColorSelected) return this.state.rects.map((e, t) => {
        var r = e.key,
          n = e.rect;
        return o().createElement(d.j, {
          key: t,
          rect: n,
          char: r,
          pos: "bottom"
        });
      });
    }
    render() {
      return o().createElement("div", {
        className: "hotkey-show-container",
        style: {
          fontFamily: "'Open Sans', sans-serif",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 10
        }
      }, this.renderPresetColorHotkeys(), this.renderRects());
    }
    renderPresetColorHotkeys() {
      if (this.state.isColorSelected) return o().createElement(h.d, {
        maxNumbering: 8,
        ref: this.handlePresetColorHotkeyNumberingRef
      });
    }
  }
};
