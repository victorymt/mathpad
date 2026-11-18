/* module 24320 — 2543 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(84258),
    a = r(32485),
    l = r.n(a);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "itemStyle", {
        padding: "3px 7px",
        cursor: "pointer"
      }), (0, n.A)(this, "handleMouseEnter", e => {
        this.setState({
          hoverKey: e
        });
      }), (0, n.A)(this, "handleMouseOut", e => {
        this.state.hoverKey == e && this.setState({
          hoverKey: null
        });
      });
    }
    renderItem(e) {
      var t = this.itemStyle;
      return s.A.isMobileOrTablet() && (t = d(d({}, t), {}, {
        padding: " 5px 7px"
      })), e.key == this.props.selectedKey ? t = d(d({}, t), {}, {
        borderBottom: "2px solid rgba(174, 180, 173, 0.76)"
      }) : e.key == this.state.hoverKey && (t = d(d({}, t), {}, {
        borderBottom: "2px solid rgba(174, 180, 173, 0.36)"
      })), o().createElement("div", {
        className: l()("role-tab-item", {
          selected: e.key == this.props.selectedKey
        }),
        key: e.key,
        style: t,
        onMouseEnter: () => this.handleMouseEnter(e.key),
        onMouseOut: () => this.handleMouseOut(e.key),
        onClick: () => {
          this.props.onSelect && this.props.onSelect(e.key);
        }
      }, e.value);
    }
    render() {
      var e = {
        display: "flex",
        borderTop: "1px solid rgba(175, 175, 175, 0.2)",
        marginTop: 3,
        paddingTop: 4,
        paddingBottom: 2,
        fontSize: 10
      };
      return o().createElement("div", {
        style: e
      }, this.props.items.map(e => this.renderItem(e)));
    }
  }
};
