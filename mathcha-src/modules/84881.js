/* module 84881 — 3322 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(516),
    a = r(58578),
    l = r(60693);
  class c extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "root", void 0), (0, n.A)(this, "willComponentUnmount", void 0), (0, n.A)(this, "updateComponent", () => {
        this.props.fixedContextHandler.getRenderingContext().nextCycleIfRequired(() => {
          this.forceUpdate();
        });
      });
    }
    renderRepeat(e, t) {
      t = t || this.getFontSize();
      for (var r = l.T.getBCWidth(this.root, this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer()), n = [], i = 0, s = 0; s <= r; s += t) n.push(o().createElement("inside", {
        key: i
      }, e)), i++;
      return n;
    }
    componentWillReceiveProps() {
      this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    shouldComponentUpdate() {
      return !1;
    }
    componentDidMount() {
      this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    invalidateDrawing() {
      this.updateComponent();
    }
    componentWillUnmount() {
      this.willComponentUnmount = !0;
    }
    renderAs3Parts() {
      var e = this.props,
        t = e.startChar,
        r = e.repeatChar,
        n = e.endChar,
        i = e.topEm,
        s = {
          fontSize: this.props.fontSize,
          fontFamily: a.A.mathFontFamilyFromKey("\\mathnormal", this.props.baseMathModeFontFamily, "use-custom-symbol"),
          fontStyle: "normal",
          fontWeight: "normal",
          top: i ? "".concat(i, "em") : void 0
        };
      return o().createElement("hcomposed-symbol", {
        style: s,
        ref: e => this.root = e
      }, t ? o().createElement("start", null, t) : null, o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r))), n ? o().createElement("end", null, n) : null);
    }
    getFontSize() {
      return this.props.fontSize || s.A.getComputedFontSize(this.root);
    }
    renderAs5Parts() {
      var e = this.props,
        t = e.startChar,
        r = e.repeatChar,
        n = e.endChar,
        i = e.middleChar,
        s = this.getFontSize(),
        l = {
          fontSize: this.props.fontSize,
          fontFamily: a.A.mathFontFamilyFromKey("\\mathnormal", this.props.baseMathModeFontFamily, "use-custom-symbol"),
          fontStyle: "normal",
          fontWeight: "normal"
        };
      return o().createElement("hcomposed-symbol", {
        style: l,
        ref: e => this.root = e
      }, t ? o().createElement("start", null, t) : null, o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r, 2 * s))), o().createElement("middle-center", null, i), o().createElement("middle", null, o().createElement("fixed", null, this.renderRepeat(r, 2 * s))), n ? o().createElement("end", null, n) : null);
    }
    render() {
      if (null == this.root) {
        var e = this.props.heightChar || this.props.repeatChar;
        return o().createElement("hcomposed-symbol", {
          ref: e => this.root = e
        }, e);
      }
      return this.props.middleChar ? this.renderAs5Parts() : this.renderAs3Parts();
    }
  }
};
