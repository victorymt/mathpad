/* module 91414 — 1883 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(80045),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(54281),
    l = r(60150),
    c = ["title", "icon", "unit", "containerStyle"];
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends s().PureComponent {
    constructor() {
      super(...arguments), (0, i.A)(this, "handleSelectedChanged", () => {
        this.props.onSelectedChanged && this.props.onSelectedChanged();
      });
    }
    renderIcon() {
      if (this.props.icon) return s().createElement("numeric-icon", {
        onMouseDown: this.handleSelectedChanged
      }, this.props.icon);
    }
    render() {
      var e = this.props,
        t = e.title,
        r = e.icon,
        i = e.unit,
        o = e.containerStyle,
        d = (0, n.A)(e, c),
        p = l.A.addMobileTabletClssIfRequired();
      return s().createElement("numeric-slider", {
        style: o,
        title: t,
        class: p
      }, this.renderIcon(), s().createElement(a.A, h({
        ariaLabel: t
      }, d)), s().createElement("numeric-unit", {
        style: this.props.unitStyle
      }, i));
    }
  }
};
