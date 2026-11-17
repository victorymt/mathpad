/* module 77009 — 1909 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    d: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(516),
    l = r(40961),
    c = r.n(l),
    d = r(38482);
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showingPosition: "right"
      }), (0, n.A)(this, "rootElementSelector", void 0);
    }
    currentCssSelector() {
      return this.state.cssSelector;
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    show(e, t, r) {
      var n = c().findDOMNode(this);
      this.rootElementSelector = r || s.aY(n);
      var i = a.A.getElementRect(n),
        o,
        l = this.findItems(e).slice(0, this.props.maxNumbering || 10).map(e => a.A.findRectElementToRect(e, i));
      this.setState({
        rects: l,
        showingPosition: t,
        cssSelector: e
      });
    }
    hide() {
      this.state.rects && this.setState({
        rects: void 0
      });
    }
    triggerSelectByNumber(e) {
      if (this.state.cssSelector) {
        e <= 0 && (e = 10);
        var t,
          r = this.findItems(this.state.cssSelector)[e - 1];
        if (r) return s.Yf(r, "click"), "handled";
      }
    }
    findItems(e) {
      return "string" == typeof e ? s.YG(this.rootElementSelector, e) : e(this.rootElementSelector);
    }
    renderRects() {
      if (this.state.rects) return this.state.rects.map((e, t) => o().createElement(d.j, {
        key: t,
        rect: e,
        char: "".concat((t + 1) % 10),
        pos: this.state.showingPosition
      }));
    }
    render() {
      return o().createElement("div", {
        className: "hotkey-numbering-container",
        style: {
          fontFamily: "'Open Sans', sans-serif",
          position: "absolute",
          left: 0,
          top: 0
        }
      }, this.renderRects());
    }
  }
};
