/* module 27800 — 470 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  var n = r(43145);
  function i(e, t) {
    if (e) {
      if ("string" == typeof e) return (0, n.A)(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, n.A)(e, t) : void 0;
    }
  }
};
