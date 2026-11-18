/* module 91638 — 627 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    g: () => s
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i);
  class s {
    constructor(e) {
      (0, n.A)(this, "data", void 0), (0, n.A)(this, "firstElement", void 0), this.data = e, this.data = this.sortByNumberOfFrequency(this.data);
    }
    sort(e) {
      this.firstElement = e, this.data = this.sortByNumberOfFrequency(this.data);
    }
    sortByNumberOfFrequency(e) {
      return o().orderBy(e, [e => this.firstElement && e == this.firstElement ? 999999 : e.numberOfFrequency || 0], ["desc"]);
    }
    getdata() {
      return this.data;
    }
  }
};
