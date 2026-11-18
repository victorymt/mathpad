/* module 88987 — 7222 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    c: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(55021),
    a = r(24829),
    l = r(99909),
    c = r(19775),
    d = r(22372),
    h = r(83538),
    p = r(25245),
    u = r(94483),
    g = r(43485),
    m = r(56724),
    f = r(81190),
    y = r(49799);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends s.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), this.state = {
        selectedIconKey: !1 === this.props.showDrawing ? "function" : "drawing"
      };
    }
    shouldComponentUpdate(e, t) {
      var r;
      return super.shouldComponentUpdate(e, t) || e.showDrawing != this.props.showDrawing || e.disabled != this.props.disabled;
    }
    selectHotKeyByNumber(e) {
      this.diagramHotkeyNumbering && this.diagramHotkeyNumbering.triggerSelectByNumber(e);
    }
    expandByHotKey() {
      this.innerExpandByHotKey(">css-expand>css-shapes>item-option", "top");
    }
    renderComponent() {
      return this.props.disabled ? o().createElement("div", {
        style: {
          marginLeft: 2,
          padding: 2,
          paddingTop: 3
        }
      }, a.A.shapes(!0)) : super.renderComponent();
    }
    renderDrawingIcon(e) {
      if (!1 !== this.props.showDrawing) return this.getIconOption("drawing", void 0, e);
    }
    renderExpandComponent() {
      var e = {
        width: 40,
        textAlign: "center"
      };
      return o().createElement("css-expand", {
        style: this.getCssExpandStyle()
      }, o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.renderDrawingIcon(e), this.getIconOption("function", void 0, e), this.getIconOption("3d-func", void 0, e), this.getIconOption("xymatrix", void 0, e)), o().createElement("css-shapes", {
        style: {
          display: "flex",
          marginTop: 5
        }
      }, this.getIconOption("scatter", void 0, e), this.getIconOption("line", void 0, e), this.getIconOption("area", void 0, e), this.getIconOption("contour", void 0, e), this.getIconOption("heatmap", void 0, e)), o().createElement("css-shapes", {
        style: {
          display: "flex",
          marginTop: 5
        }
      }, this.getIconOption("pie", void 0, e), this.getIconOption("bar", void 0, e), this.getIconOption("surface", void 0, e), this.getIconOption("scatter3d", void 0, e), this.getIconOption("mesh3d", void 0, e)));
    }
    initIcons() {
      var e = {
          stroke: "var(--ui-text-muted, gray)",
          paddingTop: 2,
          paddingBottom: 2
        },
        t = {
          height: 16
        };
      return [{
        caption: "Drawing Area",
        component: o().createElement("div", {
          key: "drawing",
          style: b(b({}, e), {}, {
            marginLeft: 3,
            paddingBottom: 0
          })
        }, a.A.shapes())
      }, {
        caption: "Function Plot",
        component: o().createElement("div", {
          key: "function",
          style: b(b({}, e), {}, {
            paddingBottom: 3
          })
        }, a.A.diagram)
      }, {
        caption: "Scatter Plot",
        component: o().createElement("div", {
          key: "scatter",
          style: e
        }, o().createElement(l.A, {
          style: t
        }))
      }, {
        caption: "Line Plot",
        component: o().createElement("div", {
          key: "line",
          style: e
        }, o().createElement(c.A, {
          style: t
        }))
      }, {
        caption: "Area Plot",
        component: o().createElement("div", {
          key: "area",
          style: e
        }, o().createElement(d.A, {
          style: t
        }))
      }, {
        caption: "Bar Plot",
        component: o().createElement("div", {
          key: "bar",
          style: e
        }, o().createElement(h.A, {
          style: t
        }))
      }, {
        caption: "Contour Plot",
        component: o().createElement("div", {
          key: "contour",
          style: e
        }, o().createElement(p.A, {
          style: t
        }))
      }, {
        caption: "Heatmap Plot",
        component: o().createElement("div", {
          key: "heatmap",
          style: e
        }, o().createElement(u.A, {
          style: t
        }))
      }, {
        caption: "Pie Plot",
        component: o().createElement("div", {
          key: "pie",
          style: e
        }, o().createElement(g.A, {
          style: t
        }))
      }, {
        caption: "Function 3d Plot",
        component: o().createElement("div", {
          key: "3d-func",
          style: b(b({}, e), {}, {
            paddingBottom: 3
          })
        }, a.A.plot3dfunc)
      }, {
        caption: "XyMatrix (Comm.)",
        component: o().createElement("div", {
          key: "xymatrix",
          style: b(b({}, e), {}, {
            paddingBottom: 3
          })
        }, this.renderXyMatrixIcon())
      }, {
        caption: "Surface 3d",
        component: o().createElement("div", {
          key: "surface",
          style: e
        }, o().createElement(m.A, {
          style: t
        }))
      }, {
        caption: "Scatter 3d",
        component: o().createElement("div", {
          key: "scatter3d",
          style: e
        }, o().createElement(f.A, {
          style: t
        }))
      }, {
        caption: "Mesh 3d",
        component: o().createElement("div", {
          key: "mesh3d",
          style: e
        }, o().createElement(y.A, {
          style: t
        }))
      }];
    }
    renderXyMatrixIcon() {
      return o().createElement("svg", {
        viewBox: "0 0 26 22",
        style: {
          width: 24,
          height: 20,
          stroke: "var(--ui-text-muted, gray)",
          fill: "none",
          strokeWidth: 1.4
        }
      }, o().createElement("rect", {
        x: "3",
        y: "4",
        width: "6",
        height: "4"
      }), o().createElement("rect", {
        x: "17",
        y: "4",
        width: "6",
        height: "4"
      }), o().createElement("rect", {
        x: "3",
        y: "14",
        width: "6",
        height: "4"
      }), o().createElement("rect", {
        x: "17",
        y: "14",
        width: "6",
        height: "4"
      }), o().createElement("path", {
        d: "M9,6 L17,6 M6,8 L6,14"
      }), o().createElement("path", {
        d: "M14.5,4.5 L17,6 L14.5,7.5 M4.5,11.5 L6,14 L7.5,11.5"
      }));
    }
  }
};
