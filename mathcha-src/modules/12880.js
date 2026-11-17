/* module 12880 — 2991 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => o
  });
  var n = r(64467),
    i = r(85849);
  class o {
    constructor(e) {
      (0, n.A)(this, "props", void 0), (0, n.A)(this, "moveHandler", new i.A()), (0, n.A)(this, "resizeHandler", new i.A()), (0, n.A)(this, "containerMoveMouseDown", e => {
        this.moveHandler.baseElement || this.moveHandler.setBaseElement(document.body), this.moveHandler.mouseDown(e, {
          lastPoint: this.props.dialogPos
        });
      }), (0, n.A)(this, "containerResizeMouseDown", (e, t) => {
        this.resizeHandler.baseElement || this.resizeHandler.setBaseElement(document.body), this.resizeHandler.mouseDown(e, {
          pos: t,
          dialogPos: this.props.dialogPos,
          dialogSize: this.props.dialogSize
        });
      }), this.props = e, this.registerHdl();
    }
    dispose() {
      this.moveHandler.cancel(), this.resizeHandler.cancel();
    }
    updateProps(e) {
      this.props = e;
    }
    registerHdl() {
      this.moveHandler.onMoving = (e, t, r) => {
        var n = r.customData.lastPoint;
        this.props.onPosSizeChange({
          x: n.x + e.x,
          y: n.y + e.y
        }, this.props.dialogSize);
      }, this.resizeHandler.onMoving = (e, t, r) => {
        var n = r.customData,
          i = n.dialogPos,
          o = n.dialogSize,
          s;
        switch (n.pos) {
          case "l":
            this.props.onPosSizeChange({
              x: i.x + e.x,
              y: i.y
            }, {
              x: o.x - e.x,
              y: o.y
            });
            break;
          case "t":
            this.props.onPosSizeChange({
              x: i.x,
              y: i.y + e.y
            }, {
              x: o.x,
              y: o.y - e.y
            });
            break;
          case "r":
            this.props.onPosSizeChange(this.props.dialogPos, {
              x: o.x + e.x,
              y: o.y
            });
            break;
          case "b":
            this.props.onPosSizeChange(this.props.dialogPos, {
              x: o.x,
              y: o.y + e.y
            });
            break;
          case "l+t":
            this.props.onPosSizeChange({
              x: i.x + e.x,
              y: i.y + e.y
            }, {
              x: o.x - e.x,
              y: o.y - e.y
            });
            break;
          case "t+r":
            this.props.onPosSizeChange({
              x: i.x,
              y: i.y + e.y
            }, {
              x: o.x + e.x,
              y: o.y - e.y
            });
            break;
          case "r+b":
            this.props.onPosSizeChange(this.props.dialogPos, {
              x: o.x + e.x,
              y: o.y + e.y
            });
            break;
          case "b+l":
            this.props.onPosSizeChange({
              x: i.x + e.x,
              y: i.y
            }, {
              x: o.x - e.x,
              y: o.y + e.y
            });
        }
      };
    }
  }
};
