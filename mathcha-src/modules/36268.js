/* module 36268 — 1490 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    t: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335);
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
    render() {
      var e = [{
        key: "px",
        value: "px"
      }, {
        key: "inch",
        value: "inch"
      }, {
        key: "mm",
        value: "mm"
      }, {
        key: "cm",
        value: "cm"
      }];
      return o().createElement(s.A, {
        disabled: this.props.disabled,
        style: l(l({}, this.props.style), {}, {
          display: "inline-block"
        }),
        width: 40,
        value: this.props.unit || "px",
        data: e,
        onChange: e => this.props.onUnitChange(e)
      });
    }
  }
};
