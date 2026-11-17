/* module 83048 — 426 chars */
module.exports = function (e, t, r) {
  var n = r(43305);
  e.exports = function (e, t) {
    if (!n(e)) return e;
    var r, i;
    if (t && "function" == typeof (r = e.toString) && !n(i = r.call(e))) return i;
    if ("function" == typeof (r = e.valueOf) && !n(i = r.call(e))) return i;
    if (!t && "function" == typeof (r = e.toString) && !n(i = r.call(e))) return i;
    throw TypeError("Can't convert object to primitive value");
  };
};
