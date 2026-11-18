/* module 73787 — 1884 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = h(r(52040)),
    o,
    s = h(r(9506)),
    a,
    l = h(r(97588)),
    c,
    d = h(r(88818));
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var p = function () {
    function e() {
      (0, s.default)(this, e), this._columnSizeMap = {}, this._intervalTree = (0, d.default)(), this._leftMap = {};
    }
    return (0, l.default)(e, [{
      key: "estimateTotalHeight",
      value: function e(t, r, n) {
        var i = t - this.count;
        return this.tallestColumnSize + Math.ceil(i / r) * n;
      }
    }, {
      key: "range",
      value: function e(t, r, n) {
        var o = this;
        this._intervalTree.queryInterval(t, t + r, function (e) {
          var t = (0, i.default)(e, 3),
            r = t[0],
            s = t[1],
            a = t[2];
          return n(a, o._leftMap[a], r);
        });
      }
    }, {
      key: "setPosition",
      value: function e(t, r, n, i) {
        this._intervalTree.insert([n, n + i, t]), this._leftMap[t] = r;
        var o = this._columnSizeMap,
          s = o[r];
        o[r] = void 0 === s ? n + i : Math.max(s, n + i);
      }
    }, {
      key: "count",
      get: function e() {
        return this._intervalTree.count;
      }
    }, {
      key: "shortestColumnSize",
      get: function e() {
        var t = this._columnSizeMap,
          r = 0;
        for (var n in t) {
          var i = t[n];
          r = 0 === r ? i : Math.min(r, i);
        }
        return r;
      }
    }, {
      key: "tallestColumnSize",
      get: function e() {
        var t = this._columnSizeMap,
          r = 0;
        for (var n in t) {
          var i = t[n];
          r = Math.max(r, i);
        }
        return r;
      }
    }]), e;
  }();
  t.default = p;
};
