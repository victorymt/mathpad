/* module 37512 — 726 chars */
module.exports = function (e, t, r) {
  var n = r(3036);
  function i(e, t, r, n, i) {
    var o = s.apply(this, arguments);
    return e.addEventListener(r, o, i), {
      destroy: function () {
        e.removeEventListener(r, o, i);
      }
    };
  }
  function o(e, t, r, n, o) {
    return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof r ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
      return i(e, t, r, n, o);
    }));
  }
  function s(e, t, r, i) {
    return function (r) {
      r.delegateTarget = n(r.target, t), r.delegateTarget && i.call(e, r);
    };
  }
  e.exports = o;
};
