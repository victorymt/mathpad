/* module 26188 — 1170 chars */
module.exports = function (e, t, r) {
  !function () {
    "use strict";

    var t = r(66583),
      n = function (e) {
        this.curves = [], this._3d = !1, e && (this.curves = e, this._3d = this.curves[0]._3d);
      };
    n.prototype = {
      valueOf: function () {
        return this.toString();
      },
      toString: function () {
        return "[" + this.curves.map(function (e) {
          return t.pointsToString(e.points);
        }).join(", ") + "]";
      },
      addCurve: function (e) {
        this.curves.push(e), this._3d = this._3d || e._3d;
      },
      length: function () {
        return this.curves.map(function (e) {
          return e.length();
        }).reduce(function (e, t) {
          return e + t;
        });
      },
      curve: function (e) {
        return this.curves[e];
      },
      bbox: function () {
        for (var e = this.curves, r = e[0].bbox(), n = 1; n < e.length; n++) t.expandbox(r, e[n].bbox());
        return r;
      },
      offset: function (e) {
        var t = [];
        return this.curves.forEach(function (r) {
          t = t.concat(r.offset(e));
        }), new n(t);
      }
    }, e.exports = n;
  }();
};
