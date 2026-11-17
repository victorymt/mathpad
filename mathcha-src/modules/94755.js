/* module 94755 — 5336 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = l(r(9506)),
    o,
    s = l(r(97588)),
    a = r(6284);
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var c = function () {
    function e(t) {
      var r = t.cellCount,
        n = t.cellSizeGetter,
        o = t.estimatedCellSize;
      (0, i.default)(this, e), this._cellSizeAndPositionData = {}, this._lastMeasuredIndex = -1, this._lastBatchedIndex = -1, this._cellSizeGetter = n, this._cellCount = r, this._estimatedCellSize = o;
    }
    return (0, s.default)(e, [{
      key: "areOffsetsAdjusted",
      value: function e() {
        return !1;
      }
    }, {
      key: "configure",
      value: function e(t) {
        var r = t.cellCount,
          n = t.estimatedCellSize,
          i = t.cellSizeGetter;
        this._cellCount = r, this._estimatedCellSize = n, this._cellSizeGetter = i;
      }
    }, {
      key: "getCellCount",
      value: function e() {
        return this._cellCount;
      }
    }, {
      key: "getEstimatedCellSize",
      value: function e() {
        return this._estimatedCellSize;
      }
    }, {
      key: "getLastMeasuredIndex",
      value: function e() {
        return this._lastMeasuredIndex;
      }
    }, {
      key: "getOffsetAdjustment",
      value: function e() {
        return 0;
      }
    }, {
      key: "getSizeAndPositionOfCell",
      value: function e(t) {
        if (t < 0 || t >= this._cellCount) throw Error("Requested index " + t + " is outside of range 0.." + this._cellCount);
        if (t > this._lastMeasuredIndex) for (var r = this.getSizeAndPositionOfLastMeasuredCell(), n = r.offset + r.size, i = this._lastMeasuredIndex + 1; i <= t; i++) {
          var o = this._cellSizeGetter({
            index: i
          });
          if (void 0 === o || isNaN(o)) throw Error("Invalid size returned for cell " + i + " of value " + o);
          null === o ? (this._cellSizeAndPositionData[i] = {
            offset: n,
            size: 0
          }, this._lastBatchedIndex = t) : (this._cellSizeAndPositionData[i] = {
            offset: n,
            size: o
          }, n += o, this._lastMeasuredIndex = t);
        }
        return this._cellSizeAndPositionData[t];
      }
    }, {
      key: "getSizeAndPositionOfLastMeasuredCell",
      value: function e() {
        return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
          offset: 0,
          size: 0
        };
      }
    }, {
      key: "getTotalSize",
      value: function e() {
        var t = this.getSizeAndPositionOfLastMeasuredCell(),
          r,
          n,
          i;
        return t.offset + t.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
      }
    }, {
      key: "getUpdatedOffsetForIndex",
      value: function e(t) {
        var r = t.align,
          n = void 0 === r ? "auto" : r,
          i = t.containerSize,
          o = t.currentOffset,
          s = t.targetIndex;
        if (i <= 0) return 0;
        var a = this.getSizeAndPositionOfCell(s),
          l = a.offset,
          c = l - i + a.size,
          d = void 0;
        switch (n) {
          case "start":
            d = l;
            break;
          case "end":
            d = c;
            break;
          case "center":
            d = l - (i - a.size) / 2;
            break;
          default:
            d = Math.max(c, Math.min(l, o));
        }
        var h = this.getTotalSize();
        return Math.max(0, Math.min(h - i, d));
      }
    }, {
      key: "getVisibleCellRange",
      value: function e(t) {
        var r = t.containerSize,
          n = t.offset,
          i;
        if (0 === this.getTotalSize()) return {};
        var o = n + r,
          s = this._findNearestCell(n),
          a = this.getSizeAndPositionOfCell(s);
        n = a.offset + a.size;
        for (var l = s; n < o && l < this._cellCount - 1;) l++, n += this.getSizeAndPositionOfCell(l).size;
        return {
          start: s,
          stop: l
        };
      }
    }, {
      key: "resetCell",
      value: function e(t) {
        this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, t - 1);
      }
    }, {
      key: "_binarySearch",
      value: function e(t, r, n) {
        for (; r <= t;) {
          var i = r + Math.floor((t - r) / 2),
            o = this.getSizeAndPositionOfCell(i).offset;
          if (o === n) return i;
          o < n ? r = i + 1 : o > n && (t = i - 1);
        }
        return r > 0 ? r - 1 : 0;
      }
    }, {
      key: "_exponentialSearch",
      value: function e(t, r) {
        for (var n = 1; t < this._cellCount && this.getSizeAndPositionOfCell(t).offset < r;) t += n, n *= 2;
        return this._binarySearch(Math.min(t, this._cellCount - 1), Math.floor(t / 2), r);
      }
    }, {
      key: "_findNearestCell",
      value: function e(t) {
        if (isNaN(t)) throw Error("Invalid offset " + t + " specified");
        t = Math.max(0, t);
        var r = this.getSizeAndPositionOfLastMeasuredCell(),
          n = Math.max(0, this._lastMeasuredIndex);
        return r.offset >= t ? this._binarySearch(n, 0, t) : this._exponentialSearch(n, t);
      }
    }]), e;
  }();
  t.default = c;
};
