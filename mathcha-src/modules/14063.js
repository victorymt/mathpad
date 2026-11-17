/* module 14063 — 1186 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    RightSlash: () => a,
    RightSlashSc: () => l,
    default: () => c
  });
  var n = r(37566),
    i = r(516),
    o = r(69995),
    s = r(52431);
  class a extends o.A {
    bkType() {
      return "slash";
    }
    bracketText() {
      return "\\";
    }
    delimiter() {
      return "close-slash";
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
      return "\\right\\backslash";
    }
    getSymbol() {
      return "\\";
    }
    toLatex(e, t) {
      return "mathjax" == t.mathType ? "\\right\\backslash " : "\\right\\backslash";
    }
  }
  const c = new l();
};
