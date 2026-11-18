/* module 46522 — 1105 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    LeftSlash: () => a,
    LeftSlashSc: () => l,
    default: () => c
  });
  var n = r(37566),
    i = r(516),
    o = r(74185),
    s = r(52431);
  class a extends o.A {
    bkType() {
      return "slash";
    }
    bracketText() {
      return "/";
    }
    delimiter() {
      return "open-slash";
    }
    componentDidMount() {
      super.componentDidMount(), n.hS(this.ref, "height", "1em");
    }
    setHeightInfo(e, t, r, n) {
      var i = super.setHeightInfo(e, t, r, n);
      return this.props.data.___normal = !1, i;
    }
    clearCustomHeight() {
      var e = i.A.getComputedFontSize(this.ref),
        t = 4 * e / 5,
        r = this.setHeightInfo(t, e - t, e, !0);
      return this.props.data.___normal = !0, r;
    }
    renderBracket() {
      return this.renderComposed();
    }
  }
  class l extends s.A {
    getViewComponent() {
      return a;
    }
    getLatextName() {
      return "\\left/";
    }
    getSymbol() {
      return "/";
    }
    toLatex() {
      return "\\left/";
    }
  }
  const c = new l();
};
