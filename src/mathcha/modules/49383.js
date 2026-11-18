/* module 49383 — 142 chars */
module.exports = function (e) {
  var t = Math.ceil,
    r = Math.floor;
  e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e);
  };
};
