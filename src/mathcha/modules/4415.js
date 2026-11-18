/* module 4415 — 168 chars */
module.exports = function (e) {
  var t = 0,
    r = Math.random();
  e.exports = function (e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36));
  };
};
