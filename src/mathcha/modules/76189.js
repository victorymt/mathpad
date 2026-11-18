/* module 76189 — 267 chars */
module.exports = function (e) {
  var t,
    r = Object.prototype.hasOwnProperty;
  function n(e) {
    var t = e.length,
      n = new e.constructor(t);
    return t && "string" == typeof e[0] && r.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  e.exports = n;
};
