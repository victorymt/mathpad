/* module 31800 — 142 chars */
module.exports = function (e) {
  var t = /\s/;
  function r(e) {
    for (var r = e.length; r-- && t.test(e.charAt(r)););
    return r;
  }
  e.exports = r;
};
