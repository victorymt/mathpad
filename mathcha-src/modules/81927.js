/* module 81927 — 2712 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    k: () => s
  });
  var n = r(40927),
    i = r.n(n);
  class o {
    renderResizeArea(e) {
      return i().createElement("div", {
        className: "dkc-resize"
      }, i().createElement("div", {
        key: "l",
        onMouseDown: t => e(t, "l"),
        style: {
          position: "absolute",
          top: 0,
          left: -2,
          width: 4,
          bottom: 0,
          backgroundColor: "transparent",
          cursor: "ew-resize"
        }
      }), i().createElement("div", {
        key: "t",
        onMouseDown: t => e(t, "t"),
        style: {
          position: "absolute",
          top: -2,
          left: 0,
          height: 4,
          right: 0,
          backgroundColor: "transparent",
          cursor: "ns-resize"
        }
      }), i().createElement("div", {
        key: "r",
        onMouseDown: t => e(t, "r"),
        style: {
          position: "absolute",
          top: 0,
          right: -2,
          width: 4,
          bottom: 0,
          backgroundColor: "transparent",
          cursor: "ew-resize"
        }
      }), i().createElement("div", {
        key: "b",
        onMouseDown: t => e(t, "b"),
        style: {
          position: "absolute",
          bottom: -2,
          left: 0,
          height: 4,
          right: 0,
          backgroundColor: "transparent",
          cursor: "ns-resize"
        }
      }), i().createElement("div", {
        key: "l+t",
        onMouseDown: t => e(t, "l+t"),
        style: {
          position: "absolute",
          top: -2,
          left: -2,
          width: 8,
          height: 8,
          backgroundColor: "transparent",
          cursor: "nwse-resize"
        }
      }), i().createElement("div", {
        key: "t+r",
        onMouseDown: t => e(t, "t+r"),
        style: {
          position: "absolute",
          top: -2,
          right: -2,
          width: 8,
          height: 8,
          backgroundColor: "transparent",
          cursor: "nesw-resize"
        }
      }), i().createElement("div", {
        key: "r+b",
        onMouseDown: t => e(t, "r+b"),
        style: {
          position: "absolute",
          bottom: -2,
          right: -2,
          width: 8,
          height: 8,
          backgroundColor: "transparent",
          cursor: "nwse-resize"
        }
      }), i().createElement("div", {
        key: "b+l",
        onMouseDown: t => e(t, "b+l"),
        style: {
          position: "absolute",
          bottom: -2,
          left: -2,
          width: 8,
          height: 8,
          backgroundColor: "transparent",
          cursor: "nesw-resize"
        }
      }));
    }
  }
  var s = new o();
};
