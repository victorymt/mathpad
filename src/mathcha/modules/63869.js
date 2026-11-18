/* module 63869 — 4254 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(25742),
    c = r(57858),
    d = r(47858),
    h = r(84258),
    p = r(71074);
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
  class m extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "managedState", p.x), (0, n.A)(this, "ref", void 0), (0, n.A)(this, "handleRef", e => {
        this.ref = e, e && (e.reactInstance = this);
      });
    }
    shouldComponentUpdate(e, t) {
      return e.data.style != this.props.data.style;
    }
    getVerticalInfo() {
      if (null == this.managedState.heightBottom) return null;
      if (this.managedState.symmetric) {
        var e = this.managedState.calculatedHalfTop,
          t = this.managedState.calculatedHalfBottom;
        return h.A.isChrome() ? {
          heightTop: Math.max(e, t) + this.managedState.fontSize / 12 + .22 * this.managedState.fontSize,
          heightBottom: Math.max(e, t) - this.managedState.fontSize / 12 - .22 * this.managedState.fontSize
        } : {
          heightTop: Math.max(e, t) + this.managedState.fontSize / 12 + .27 * this.managedState.fontSize,
          heightBottom: Math.max(e, t) - this.managedState.fontSize / 12 - .27 * this.managedState.fontSize
        };
      }
      return {
        heightTop: this.managedState.calculatedHalfTop,
        heightBottom: this.managedState.calculatedHalfBottom
      };
    }
    setHeightInfo(e, t, r, n) {
      var i = p.A.constructManageState(e, t, r, n, this.delimiter(), this.managedState);
      return this.resolveMixinResult(i);
    }
    clearCustomHeight() {
      var e = p.A.clearCustomHeight(this.managedState);
      return this.resolveMixinResult(e);
    }
    resolveMixinResult(e) {
      if ("unchanged" != e) return this.managedState = e, new Promise(e => {
        this.forceUpdate(e);
      });
    }
    renderNormal() {
      return o().createElement("bracket-span", null, this.bracketText());
    }
    renderComposed() {
      return o().createElement(c.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        delimiter: this.delimiter(),
        fontSize: this.getMathFontSizePixel(),
        fontSizeEm: this.managedState.fontSizeEm
      });
    }
    isNormalBracket() {
      return !this.managedState.heightTop;
    }
    renderBracket() {
      return this.isNormalBracket() ? (this.props.data.___normal = !0, this.renderNormal()) : (this.props.data.___normal = !1, this.renderComposed());
    }
    renderHiddenSpan() {
      if (!this.isNormalBracket() || !this.noHiddenNormalOnNormalBracket) return o().createElement("hidden-span", {
        style: {
          marginTop: this.managedState.hiddenSpanMarginTop,
          alignSelf: this.managedState.hiddenSpanAlignSelf
        }
      }, this.bracketText());
    }
    renderComponent() {}
    render() {
      var e = d.A.getHtmlFromStyle(this.props.data, void 0, this.context.baseMathModeFontFamily, void 0);
      null !== this.managedState.height && (e = g(g({}, e), {}, {
        height: this.managedState.height
      }));
      var t = a()(this.getClassName(), {
        normal: this.isNormalBracket()
      });
      return o().createElement(this.tagName(), {
        ref: this.handleRef,
        className: t,
        type: this.bkType(),
        style: e
      }, this.renderHiddenSpan(), this.renderBracket());
    }
  }
};
