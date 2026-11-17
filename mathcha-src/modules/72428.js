/* module 72428 — 312 chars */
module.exports = function (e, t, r) {
  var n = r(27534),
    i = r(40346),
    o = Object.prototype,
    s = o.hasOwnProperty,
    a = o.propertyIsEnumerable,
    l = n(function () {
      return arguments;
    }()) ? n : function (e) {
      return i(e) && s.call(e, "callee") && !a.call(e, "callee");
    };
  e.exports = l;
};
