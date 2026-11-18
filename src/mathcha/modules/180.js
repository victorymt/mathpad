/* module 180 — 5048 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(26642);
  class c extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "closedOnEscape", !0);
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.showEmpty != this.props.showEmpty || e.value != this.props.value;
    }
    getItemOptionClss(e) {
      var t = this.props.showEmpty;
      return a()("thickness-option", {
        selected: !t && e == this.getThickness()
      });
    }
    renderHalfPixel() {
      if (this.props.supportHalfPixel) {
        var e = o().createElement("line", {
            x1: 2,
            y1: 5,
            x2: 37,
            y2: 5
          }),
          t = {
            width: 40,
            height: 20
          };
        return o().createElement("item-option", {
          class: this.getItemOptionClss(.5),
          onMouseDown: e => this.onItemSelect(.5, e)
        }, o().createElement("svg", {
          style: t
        }, o().cloneElement(e, {
          style: {
            strokeWidth: "0.5px"
          }
        })));
      }
    }
    renderExpandComponent() {
      var e = o().createElement("line", {
          x1: 2,
          y1: 5,
          x2: 37,
          y2: 5
        }),
        t = {
          width: 40,
          height: 20
        },
        r = this.props.useFixedPosition,
        n = this.suggestExpandPositionLeftTop(),
        i = {
          position: r ? "fixed" : "absolute",
          left: n.left,
          top: n.top
        };
      return o().createElement(l.i, {
        onHtmlRef: e => this.registerExpandContainer(e),
        style: i
      }, this.renderHalfPixel(), o().createElement("item-option", {
        class: this.getItemOptionClss(1),
        onMouseDown: e => this.onItemSelect(1, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "1px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(2),
        onMouseDown: e => this.onItemSelect(2, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "2px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(3),
        onMouseDown: e => this.onItemSelect(3, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "3px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(4),
        onMouseDown: e => this.onItemSelect(4, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "4px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(5),
        onMouseDown: e => this.onItemSelect(5, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "5px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(6),
        onMouseDown: e => this.onItemSelect(6, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "6px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(7),
        onMouseDown: e => this.onItemSelect(7, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "7px"
        }
      }))), o().createElement("item-option", {
        class: this.getItemOptionClss(8),
        onMouseDown: e => this.onItemSelect(8, e)
      }, o().createElement("svg", {
        style: t
      }, o().cloneElement(e, {
        style: {
          strokeWidth: "8px"
        }
      }))));
    }
    getComponentClassName() {
      return "thickness";
    }
    getThickness() {
      return this.props.value || 1;
    }
    renderComponent() {
      var e = this.props.showEmpty,
        t = {
          strokeWidth: e ? 3 : this.getThickness(),
          stroke: e ? "transparent" : void 0
        },
        r = Math.max(this.getThickness() / 2, 1),
        n = "M9,".concat(7 - r, " L13,").concat(11 - r, " L17,").concat(7 - r),
        i = "M9,".concat(17 + r, " L13,").concat(13 + r, " L17,").concat(17 + r);
      return o().createElement("item", {
        className: "setting",
        title: "Stroke Thickness",
        style: {
          width: 26
        }
      }, o().createElement("thickness", null, o().createElement("svg", {
        className: "thickness"
      }, o().createElement("path", {
        d: n
      }), o().createElement("path", {
        d: i
      }), o().createElement("line", {
        x1: 2,
        y1: 12,
        x2: 24,
        y2: 12,
        style: t
      }))));
    }
  }
};
