/* module 2651 — 1649 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    RightAngle: () => c,
    RightAngleSc: () => d,
    default: () => h
  });
  var n = r(37566),
    i = r(516),
    o = r(52431),
    s = r(69995),
    a = r(32485),
    l = r.n(a);
  class c extends s.A {
    bkType() {
      return "angle";
    }
    bracketText() {
      return ">";
    }
    delimiter() {
      return "close-angle";
    }
    getClassName() {
      if (this.managedState && void 0 !== this.managedState.height && "string" == typeof this.managedState.height && this.managedState.height.endsWith("em")) {
        var e = Number.parseFloat(this.managedState.height.slice(0, this.managedState.height.length - 2));
        if (e && e < 1.8) return l()(super.getClassName(), "sm-2");
      }
      return super.getClassName();
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
  class d extends o.A {
    getViewComponent() {
      return c;
    }
    getLatextName() {
      return "\\right\\angle";
    }
    getSymbol() {
      return "⟩";
    }
    toLatex(e, t) {
      return "mathjax" == t.mathType ? "\\right> " : "\\right>";
    }
    getFilterTag() {
      return "rangle";
    }
  }
  const h = new d();
};
