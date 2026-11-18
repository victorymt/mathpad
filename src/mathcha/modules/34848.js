/* module 34848 — 485 chars */
module.exports = function (e, t, r) {
  var n = r(55089),
    i = r(67574)("toStringTag"),
    o = "Arguments" == n(function () {
      return arguments;
    }()),
    s = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    };
  e.exports = function (e) {
    var t, r, a;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = s(t = Object(e), i)) ? r : o ? n(t) : "Object" == (a = n(t)) && "function" == typeof t.callee ? "Arguments" : a;
  };
};
