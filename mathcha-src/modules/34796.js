/* module 34796 — 1247 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    PH: () => a,
    o9: () => c,
    yq: () => l
  });
  var n = r(64467),
    i = r(29315);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a extends i.dV {}
  class l extends i.US {}
  class c extends i.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    createShape(e) {
      return super.createShape(s(s({}, e), {}, {
        shapeWidth: e.shapeWidth || 30,
        shapeHeight: e.shapeHeight || 30
      }));
    }
  }
};
