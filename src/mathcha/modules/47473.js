/* module 47473 — 258 chars */
module.exports = function (e) {
  var t,
    r = Function.prototype.toString;
  function n(e) {
    if (null != e) {
      try {
        return r.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }
  e.exports = n;
};
