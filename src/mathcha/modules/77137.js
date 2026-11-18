/* module 77137 — 731 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(2543),
    i = r.n(n);
  class o {
    constructor() {
      this.info("Log service initialized");
    }
    info(e) {
      this.logWithColor(e, "blue");
    }
    warn(e) {
      this.logWithColor(e, "orange");
    }
    error(e) {
      this.logWithColor(e, "red");
    }
    logWithColor(e, t) {
      e && (i().isString(e) || (this.log(e.toString(), t), this.log(e.message, t)), this.log(e, t));
    }
    log(e, t) {
      if (e) {
        var r = window && window.console || console;
        t ? (r.log("%c ".concat(e), "color: ".concat(t)), e.stack && r.log(e.stack, "color: ".concat(t))) : r.log(e);
      }
    }
  }
  const s = new o();
};
