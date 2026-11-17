/* module 61802 — 388 chars */
module.exports = function (e, t, r) {
  var n = r(62224),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g,
    s = n(function (e) {
      var t = [];
      return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function (e, r, n, i) {
        t.push(n ? i.replace(o, "$1") : r || e);
      }), t;
    });
  e.exports = s;
};
