/* module 2694 — 953 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(6925);
  function i() {}
  function o() {}
  o.resetWarningCache = i, e.exports = function () {
    function e(e, t, r, i, o, s) {
      if (s !== n) {
        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw a.name = "Invariant Violation", a;
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var r = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: o,
      resetWarningCache: i
    };
    return r.PropTypes = r, r;
  };
};
