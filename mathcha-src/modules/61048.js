/* module 61048 — 4239 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(516),
    c = r(2543),
    d = r.n(c);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showSub: !1
      }), (0, n.A)(this, "rootElement", void 0), (0, n.A)(this, "handleMouseEnter", () => {
        this.setState({
          showSub: !0
        });
      }), (0, n.A)(this, "handleMouseLeave", () => {
        this.setState({
          showSub: !1
        });
      });
    }
    componentDidMount() {
      this.rootElement = a().findDOMNode(this);
    }
    render() {
      return o().createElement("ct-item", {
        style: {
          position: "relative"
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, o().createElement("ct-icon", null, this.props.icon), o().createElement("ct-name", null, this.props.text), o().createElement("ct-more", {
        style: {
          position: "absolute",
          right: "1em",
          top: "0.5em"
        }
      }, o().createElement("i", {
        className: "fa fa-caret-right",
        "aria-hidden": "true"
      })), this.props.ignoreTransparentExpandDiv ? void 0 : o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          height: 200,
          background: "transparent"
        }
      }), this.renderSubMenu());
    }
    getSubMenuStyle() {
      if (!this.rootElement) return {
        position: "absolute",
        left: "100%",
        top: 0,
        marginLeft: -2
      };
      var e = l.A.getElementRect(this.rootElement),
        t = window.innerWidth,
        r = window.innerHeight - e.top,
        n = d().sumBy(this.props.items, e => e.value ? 29 : 10) + 30,
        i = Math.min(r - n, -5);
      return e.right > t - 190 ? {
        position: "absolute",
        left: -(this.props.containerWidth || 200),
        top: i,
        marginRight: -2
      } : {
        position: "absolute",
        left: "100%",
        top: i,
        marginLeft: -2
      };
    }
    handleItemSelect(e) {
      this.props.onItemSelect(e);
    }
    renderSubMenu() {
      var e = p({
          padding: "5px 12px",
          whiteSpace: "nowrap"
        }, this.props.itemStyle),
        t = p(p({}, e), {}, {
          color: "var(--ui-text-disabled, lightgray)"
        });
      if (this.state.showSub) return o().createElement("context-menu-container", {
        style: p(p({}, this.getSubMenuStyle()), {}, {
          fill: "var(--ui-text-muted, gray)",
          stroke: "none",
          paddingTop: 3,
          paddingBottom: 3,
          width: this.props.containerWidth
        })
      }, this.props.items.map((r, n) => r.renderItem ? r.renderItem(r.value) : null == r.value ? o().createElement("ct-separator", {
        key: "s".concat(n)
      }) : r.disabled ? o().createElement("ct-item", {
        key: (r.value || "").toString(),
        style: t
      }, r.icon || o().createElement("ct-icon", null), o().createElement("ct-name", null, r.display, " ")) : o().createElement("ct-item", {
        key: (r.value || "").toString(),
        style: e,
        onClick: () => this.handleItemSelect(r.value)
      }, r.icon || o().createElement("ct-icon", null), o().createElement("ct-name", null, r.display, " "))));
    }
  }
};
