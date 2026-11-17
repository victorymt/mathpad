/* module 7763 — 2013 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    g: () => a
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91335);
  class a extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "headScaleItems", [{
        key: -1,
        value: this.props.headerName,
        noSelect: !0
      }, {
        key: 0,
        value: "0px"
      }, {
        key: 1,
        value: "1px"
      }, {
        key: 2,
        value: "2px"
      }, {
        key: 3,
        value: "3px"
      }, {
        key: 4,
        value: "4px"
      }, {
        key: 5,
        value: "5px"
      }, {
        key: 6,
        value: "6px"
      }, {
        key: 7,
        value: "7px"
      }, {
        key: 8,
        value: "8px"
      }, {
        key: 9,
        value: "9px"
      }, {
        key: 10,
        value: "10px"
      }, {
        key: 11,
        value: "11px"
      }, {
        key: 12,
        value: "12px"
      }, {
        key: 13,
        value: "13px"
      }, {
        key: 14,
        value: "14px"
      }, {
        key: 15,
        value: "15px"
      }, {
        key: 16,
        value: "16px"
      }, {
        key: 17,
        value: "17px"
      }, {
        key: 18,
        value: "18px"
      }, {
        key: 19,
        value: "19px"
      }]), (0, n.A)(this, "handleRenderValue", e => o().createElement("span", null, e.key));
    }
    render() {
      var e;
      return o().createElement(s.A, {
        usePositionFixedOnExpand: !0,
        className: "head-scale-input",
        itemsStyle: {
          maxHeight: 250,
          overflowY: "auto"
        },
        data: this.headScaleItems,
        value: null !== (e = this.props.angleByDistance) && void 0 !== e ? e : 0,
        onChange: e => {
          this.props.onHAngleAtDistanceChange(e);
        },
        style: {
          marginTop: 2
        },
        expansionWidth: 130,
        onRenderValue: this.handleRenderValue,
        width: 35
      });
    }
  }
};
