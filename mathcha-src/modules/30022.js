/* module 30022 — 4530 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = u(r(5748)),
    o,
    s = u(r(9506)),
    a,
    l = u(r(97588)),
    c,
    d = u(r(94755)),
    h = r(79080),
    p = r(6284);
  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var g = function () {
    function e(t) {
      var r = t.maxScrollSize,
        n = void 0 === r ? (0, h.getMaxElementSize)() : r,
        o = (0, i.default)(t, ["maxScrollSize"]);
      (0, s.default)(this, e), this._cellSizeAndPositionManager = new d.default(o), this._maxScrollSize = n;
    }
    return (0, l.default)(e, [{
      key: "areOffsetsAdjusted",
      value: function e() {
        return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
      }
    }, {
      key: "configure",
      value: function e(t) {
        this._cellSizeAndPositionManager.configure(t);
      }
    }, {
      key: "getCellCount",
      value: function e() {
        return this._cellSizeAndPositionManager.getCellCount();
      }
    }, {
      key: "getEstimatedCellSize",
      value: function e() {
        return this._cellSizeAndPositionManager.getEstimatedCellSize();
      }
    }, {
      key: "getLastMeasuredIndex",
      value: function e() {
        return this._cellSizeAndPositionManager.getLastMeasuredIndex();
      }
    }, {
      key: "getOffsetAdjustment",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset,
          i = this._cellSizeAndPositionManager.getTotalSize(),
          o = this.getTotalSize(),
          s = this._getOffsetPercentage({
            containerSize: r,
            offset: n,
            totalSize: o
          });
        return Math.round(s * (o - i));
      }
    }, {
      key: "getSizeAndPositionOfCell",
      value: function e(t) {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(t);
      }
    }, {
      key: "getSizeAndPositionOfLastMeasuredCell",
      value: function e() {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
      }
    }, {
      key: "getTotalSize",
      value: function e() {
        return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
      }
    }, {
      key: "getUpdatedOffsetForIndex",
      value: function e(t) {
        var r = t.align,
          n = void 0 === r ? "auto" : r,
          i = t.containerSize,
          o = t.currentOffset,
          s = t.targetIndex;
        o = this._safeOffsetToOffset({
          containerSize: i,
          offset: o
        });
        var a = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: n,
          containerSize: i,
          currentOffset: o,
          targetIndex: s
        });
        return this._offsetToSafeOffset({
          containerSize: i,
          offset: a
        });
      }
    }, {
      key: "getVisibleCellRange",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset;
        return n = this._safeOffsetToOffset({
          containerSize: r,
          offset: n
        }), this._cellSizeAndPositionManager.getVisibleCellRange({
          containerSize: r,
          offset: n
        });
      }
    }, {
      key: "resetCell",
      value: function e(t) {
        this._cellSizeAndPositionManager.resetCell(t);
      }
    }, {
      key: "_getOffsetPercentage",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset,
          i = t.totalSize;
        return i <= r ? 0 : n / (i - r);
      }
    }, {
      key: "_offsetToSafeOffset",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset,
          i = this._cellSizeAndPositionManager.getTotalSize(),
          o = this.getTotalSize();
        if (i === o) return n;
        var s = this._getOffsetPercentage({
          containerSize: r,
          offset: n,
          totalSize: i
        });
        return Math.round(s * (o - r));
      }
    }, {
      key: "_safeOffsetToOffset",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset,
          i = this._cellSizeAndPositionManager.getTotalSize(),
          o = this.getTotalSize();
        if (i === o) return n;
        var s = this._getOffsetPercentage({
          containerSize: r,
          offset: n,
          totalSize: o
        });
        return Math.round(s * (i - r));
      }
    }]), e;
  }();
  t.default = g;
};
