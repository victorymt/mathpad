/* module 57708 — 924 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(9248),
    o = r(64098);
  function s(e) {
    this._root = e, this._startText = this.getText(), this._fallbackText = null;
  }
  n(s.prototype, {
    destructor: function () {
      this._root = null, this._startText = null, this._fallbackText = null;
    },
    getText: function () {
      return "value" in this._root ? this._root.value : this._root[o()];
    },
    getData: function () {
      if (this._fallbackText) return this._fallbackText;
      var e,
        t = this._startText,
        r = t.length,
        n,
        i = this.getText(),
        o = i.length;
      for (e = 0; e < r && t[e] === i[e]; e++);
      var s = r - e;
      for (n = 1; n <= s && t[r - n] === i[o - n]; n++);
      var a = n > 1 ? 1 - n : void 0;
      return this._fallbackText = i.slice(e, a), this._fallbackText;
    }
  }), i.addPoolingTo(s), e.exports = s;
};
