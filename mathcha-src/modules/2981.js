/* module 2981 — 557 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646),
    o = null,
    s = null,
    a;
  function l(e) {
    return o || n("111", e.type), new o(e);
  }
  function c(e) {
    return new s(e);
  }
  function d(e) {
    return e instanceof s;
  }
  var h = {
    createInternalComponent: l,
    createInstanceForText: c,
    isTextComponent: d,
    injection: {
      injectGenericComponentClass: function (e) {
        o = e;
      },
      injectTextComponentClass: function (e) {
        s = e;
      }
    }
  };
  e.exports = h;
};
