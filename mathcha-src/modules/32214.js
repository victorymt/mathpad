/* module 32214 — 1517 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    R: () => a
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335);
  class a extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "headScaleItems", [{
        key: .3,
        value: "Arrow Scale:",
        noSelect: !0
      }, {
        key: .4,
        value: "0.4"
      }, {
        key: .6,
        value: "0.6"
      }, {
        key: .7,
        value: "0.7"
      }, {
        key: .8,
        value: "0.8"
      }, {
        key: .9,
        value: "0.9"
      }, {
        key: 1,
        value: "1.0"
      }, {
        key: 1.1,
        value: "1.1"
      }, {
        key: 1.2,
        value: "1.2"
      }, {
        key: 1.4,
        value: "1.4"
      }, {
        key: 1.6,
        value: "1.6"
      }, {
        key: 1.8,
        value: "1.8"
      }, {
        key: 2,
        value: "2.0"
      }]), (0, n.A)(this, "handleRenderValue", e => o().createElement("span", null, e.key));
    }
    render() {
      var e;
      return o().createElement(s.A, {
        usePositionFixedOnExpand: !0,
        className: "head-scale-input",
        data: this.headScaleItems,
        value: null !== (e = this.props.headScale) && void 0 !== e ? e : 1,
        onChange: e => {
          this.props.onHeadScaleChange(e);
        },
        style: {
          marginTop: 2
        },
        expansionWidth: 100,
        onRenderValue: this.handleRenderValue,
        width: 35
      });
    }
  }
};
