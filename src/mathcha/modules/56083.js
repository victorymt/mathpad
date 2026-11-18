/* module 56083 — 4733 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DEFAULT_WIDTH = t.DEFAULT_HEIGHT = void 0;
  var n,
    i = l(r(9506)),
    o,
    s = l(r(97588)),
    a = r(82910);
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var c = t.DEFAULT_HEIGHT = 30,
    d = t.DEFAULT_WIDTH = 100,
    h = function () {
      function e() {
        var t = this,
          r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, i.default)(this, e), this._cellHeightCache = {}, this._cellWidthCache = {}, this._columnWidthCache = {}, this._rowHeightCache = {}, this._columnCount = 0, this._rowCount = 0, this.columnWidth = function (e) {
          var r = e.index,
            n = t._keyMapper(0, r);
          return t._columnWidthCache.hasOwnProperty(n) ? t._columnWidthCache[n] : t._defaultWidth;
        }, this.rowHeight = function (e) {
          var r = e.index,
            n = t._keyMapper(r, 0);
          return t._rowHeightCache.hasOwnProperty(n) ? t._rowHeightCache[n] : t._defaultHeight;
        };
        var n = r.defaultHeight,
          o = r.defaultWidth,
          s = r.fixedHeight,
          a = r.fixedWidth,
          l = r.keyMapper,
          h = r.minHeight,
          u = r.minWidth;
        this._hasFixedHeight = !0 === s, this._hasFixedWidth = !0 === a, this._minHeight = h || 0, this._minWidth = u || 0, this._keyMapper = l || p, this._defaultHeight = Math.max(this._minHeight, "number" == typeof n ? n : c), this._defaultWidth = Math.max(this._minWidth, "number" == typeof o ? o : d);
      }
      return (0, s.default)(e, [{
        key: "clear",
        value: function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = this._keyMapper(t, r);
          delete this._cellHeightCache[n], delete this._cellWidthCache[n], this._updateCachedColumnAndRowSizes(t, r);
        }
      }, {
        key: "clearAll",
        value: function e() {
          this._cellHeightCache = {}, this._cellWidthCache = {}, this._columnWidthCache = {}, this._rowHeightCache = {}, this._rowCount = 0, this._columnCount = 0;
        }
      }, {
        key: "hasFixedHeight",
        value: function e() {
          return this._hasFixedHeight;
        }
      }, {
        key: "hasFixedWidth",
        value: function e() {
          return this._hasFixedWidth;
        }
      }, {
        key: "getHeight",
        value: function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (this._hasFixedHeight) return this._defaultHeight;
          var n = this._keyMapper(t, r);
          return this._cellHeightCache.hasOwnProperty(n) ? Math.max(this._minHeight, this._cellHeightCache[n]) : this._defaultHeight;
        }
      }, {
        key: "getWidth",
        value: function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (this._hasFixedWidth) return this._defaultWidth;
          var n = this._keyMapper(t, r);
          return this._cellWidthCache.hasOwnProperty(n) ? Math.max(this._minWidth, this._cellWidthCache[n]) : this._defaultWidth;
        }
      }, {
        key: "has",
        value: function e(t) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = this._keyMapper(t, r);
          return this._cellHeightCache.hasOwnProperty(n);
        }
      }, {
        key: "set",
        value: function e(t, r, n, i) {
          var o = this._keyMapper(t, r);
          r >= this._columnCount && (this._columnCount = r + 1), t >= this._rowCount && (this._rowCount = t + 1), this._cellHeightCache[o] = i, this._cellWidthCache[o] = n, this._updateCachedColumnAndRowSizes(t, r);
        }
      }, {
        key: "_updateCachedColumnAndRowSizes",
        value: function e(t, r) {
          if (!this._hasFixedWidth) {
            for (var n = 0, i = 0; i < this._rowCount; i++) n = Math.max(n, this.getWidth(i, r));
            var o = this._keyMapper(0, r);
            this._columnWidthCache[o] = n;
          }
          if (!this._hasFixedHeight) {
            for (var s = 0, a = 0; a < this._columnCount; a++) s = Math.max(s, this.getHeight(t, a));
            var l = this._keyMapper(t, 0);
            this._rowHeightCache[l] = s;
          }
        }
      }, {
        key: "defaultHeight",
        get: function e() {
          return this._defaultHeight;
        }
      }, {
        key: "defaultWidth",
        get: function e() {
          return this._defaultWidth;
        }
      }]), e;
    }();
  function p(e, t) {
    return e + "-" + t;
  }
  t.default = h;
};
