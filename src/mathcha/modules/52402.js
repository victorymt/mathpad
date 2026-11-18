/* module 52402 — 11215 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Y: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(61048),
    a = r(32485),
    l = r.n(a),
    c = r(26642);
  class d extends c.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "onExpandContainerMouseDown", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "onAlignChanged", e => {
        this.props.onAlignChanged(e);
      });
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.align != this.props.align;
    }
    getComponentClassName() {
      return "vertical-align-picker";
    }
    renderComponent() {
      return o().createElement("div", null, this.drawAlign());
    }
    drawAlign() {
      var e = {
        width: 16,
        height: 16,
        fill: "var(--ui-text-muted, gray)",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 1,
        paddingRight: 1
      };
      switch (this.props.align) {
        case "top":
          return o().createElement("align-item", {
            title: "Vertical Align"
          }, h(e, "selectable", void 0));
        case "middle":
          return o().createElement("align-item", {
            title: "Vertical Align"
          }, p(e, "selectable", void 0));
        case "bottom":
          return o().createElement("align-item", {
            title: "Vertical Align"
          }, u(e, "selectable", void 0));
        default:
          throw new Error("not supported");
      }
    }
    renderExpandComponent() {
      var e = {
          width: 16,
          height: 16,
          fill: "var(--ui-text-muted, gray)"
        },
        t = this.props.align;
      return o().createElement(c.i, null, o().createElement("align-item", null, h(e, l()("selectable", {
        selected: "top" == t
      }), () => this.onAlignChanged("top"))), o().createElement("align-item", null, p(e, l()("selectable", {
        selected: "middle" == t
      }), () => this.onAlignChanged("middle"))), o().createElement("align-item", null, u(e, l()("selectable", {
        selected: "bottom" == t
      }), () => this.onAlignChanged("bottom"))));
    }
  }
  var h = (e, t, r) => o().createElement("svg", {
      viewBox: "0 0 50 50",
      className: t,
      onMouseDown: r,
      style: e
    }, o().createElement("path", {
      d: "M16 22h6v20h4v-20h6l-8-8-8 8zm-8-16v4h32v-4h-32z"
    })),
    p = (e, t, r) => o().createElement("svg", {
      viewBox: "0 0 50 50",
      className: t,
      onMouseDown: r,
      style: e
    }, o().createElement("path", {
      d: "M16 38h6v8h4v-8h6l-8-8-8 8zm16-28h-6v-8h-4v8h-6l8 8 8-8zm-24 12v4h32v-4h-32z"
    })),
    u = (e, t, r) => o().createElement("svg", {
      viewBox: "0 0 50 50",
      className: t,
      onMouseDown: r,
      style: e
    }, o().createElement("path", {
      d: "M32 26h-6v-20h-4v20h-6l8 8 8-8zm-24 12v4h32v-4h-32z"
    })),
    g = {
      width: 16,
      height: 16,
      overflow: "visible",
      padding: 3
    };
  class m extends c.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "onExpandContainerMouseDown", e => {
        e.stopPropagation();
      });
    }
    getComponentClassName() {
      return "table-border-picker";
    }
    renderComponent() {
      return o().createElement("div", {
        title: "Table Border"
      }, y(g));
    }
    renderExpandComponent() {
      return o().createElement(c.i, null, o().createElement(f, {
        onAction: this.props.onAction
      }));
    }
  }
  class f extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "onAction", e => {
        this.props.onAction(e);
      });
    }
    render() {
      var e = {
          transform: "translate(2px,2px)",
          stroke: "var(--ui-text-muted, gray)",
          strokeWidth: 1
        },
        t = {
          display: "flex"
        };
      return o().createElement("div", null, o().createElement("setting-line", {
        style: t
      }, o().createElement("border-cell", {
        onMouseDown: () => this.onAction("full")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M-0.5,0 L12.5,0 M-0.5,6 L12.5,6 M-0.5,12 L12.5,12 M0,0 L0,12 M6,0 L6,12 M12,0 L12,12"
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("inside")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M-0.5,6 L12.5,6   M6,0 L6,12 "
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("outside")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M-0.5,0 L12.5,0  M-0.5,12 L12.5,12 M0,0 L0,12  M12,0 L12,12"
      })))), o().createElement("setting-line", {
        style: t
      }, o().createElement("border-cell", {
        onMouseDown: () => this.onAction("top")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M-0.5,0 L12.5,0"
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("middle")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: " M-0.5,6 L12.5,6"
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("bottom")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M-0.5,12 L12.5,12"
      })))), o().createElement("setting-line", {
        style: t
      }, o().createElement("border-cell", {
        onMouseDown: () => this.onAction("left")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M0,0 L0,12"
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("center")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M6,0 L6,12"
      }))), o().createElement("border-cell", {
        onMouseDown: () => this.onAction("right")
      }, this.drawBorder(o().createElement("path", {
        style: e,
        d: "M12,0 L12,12"
      })))), o().createElement("setting-line", {
        style: t
      }, o().createElement("border-cell", {
        onMouseDown: () => this.onAction("none")
      }, this.drawBorder())));
    }
    drawBorder(e) {
      return y(g, e);
    }
  }
  var y = (e, t) => o().createElement("svg", {
      viewBox: "0 0 16 16",
      className: "selectable",
      style: e
    }, o().createElement("path", {
      style: {
        transform: "translate(2px,2px)"
      },
      d: "M-0.5,0 L12.5,0 M-0.5,6 L12.5,6 M-0.5,12 L12.5,12 M0,0 L0,12 M6,0 L6,12 M12,0 L12,12",
      stroke: "gray",
      strokeWidth: "0.5",
      strokeDasharray: "1 1"
    }), t),
    v = r(40383);
  function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleRenderBorderItem", () => o().createElement("div", {
        key: "my-item",
        style: {
          padding: 5
        }
      }, o().createElement(f, {
        onAction: e => {
          this.props.onBorderSelect(e);
        }
      })));
    }
    renderVAlignMoreItems() {
      var e = {
          width: 16,
          height: 16,
          fill: "var(--ui-text-muted, gray)",
          verticalAlign: "-4px",
          stroke: "var(--ui-text-muted, gray)"
        },
        t = [{
          value: "top",
          display: "Top",
          icon: o().createElement("ct-icon", null, h(e, void 0, void 0))
        }, {
          value: "middle",
          display: "Middle",
          icon: o().createElement("ct-icon", null, p(e, void 0, void 0))
        }, {
          value: "bottom",
          display: "Bottom",
          icon: o().createElement("ct-icon", null, " ", u(e, void 0, void 0))
        }];
      return o().createElement(s.A, {
        icon: p(e, void 0, void 0),
        ignoreTransparentExpandDiv: !0,
        text: "Vertical Align",
        items: t,
        onItemSelect: e => {
          this.props.onVAlignChange(e);
        }
      });
    }
    renderBorders() {
      var e = [{
        value: "borders",
        display: "",
        renderItem: this.handleRenderBorderItem
      }];
      return o().createElement(s.A, {
        icon: y({
          width: 16,
          height: 16,
          overflow: "visible",
          verticalAlign: "-4px",
          marginLeft: -2
        }),
        containerWidth: "auto",
        ignoreTransparentExpandDiv: !0,
        text: "Borders",
        items: e,
        onItemSelect: () => {}
      });
    }
    render() {
      var e = this.props.onRequestCellCount(),
        t = {},
        r = {
          borderTop: "1px solid var(--ui-border, lightgray)",
          marginTop: 5,
          marginBottom: 5
        };
      return o().createElement("context-menu-container", {
        onMouseDown: e => e.stopPropagation(),
        style: v.a.applyReverseZoomStyle(x({
          paddingTop: 10,
          paddingBottom: 5,
          border: "1px solid var(--ui-border, lightgray)",
          boxShadow: "1px 1px 0px var(--ui-shadow, #e8e5e5)",
          background: "var(--ui-surface, white)",
          fontSize: 13,
          zIndex: 99,
          display: "block",
          width: 160
        }, this.props.style), this.props.dzContainer, "left top")
      }, o().createElement("div", {
        className: "test-cell-count",
        style: {
          color: "var(--ui-text, black)",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: 3
        }
      }, e, " Cell", e > 1 ? "s" : "", " Selected"), o().createElement("div", {
        style: r
      }), this.renderVAlignMoreItems(), this.renderBorders(), o().createElement("ct-item", {
        style: t,
        onMouseDown: e => {
          e.stopPropagation(), this.props.onOpenCellSettings();
        }
      }, o().createElement("ct-icon", null), o().createElement("ct-name", null, "Cell(s) Settings")), o().createElement("ct-item", {
        style: t,
        onMouseDown: e => {
          e.stopPropagation(), this.props.onOpenTableSettings();
        }
      }, o().createElement("ct-icon", null), o().createElement("ct-name", null, "Table Settings")), o().createElement("div", {
        style: r
      }), o().createElement("ct-item", {
        style: t,
        onMouseDown: e => {
          e.stopPropagation(), this.props.onRequestAddCaption();
        }
      }, o().createElement("ct-icon", null), o().createElement("ct-name", null, "Add Caption")));
    }
  }
};
