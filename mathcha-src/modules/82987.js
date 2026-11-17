/* module 82987 — 503 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646);
  function o(e) {
    return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef);
  }
  var s = {
    addComponentAsRefTo: function (e, t, r) {
      o(r) || n("119"), r.attachRef(t, e);
    },
    removeComponentAsRefFrom: function (e, t, r) {
      o(r) || n("120");
      var i = r.getPublicInstance();
      i && i.refs[t] === e.getPublicInstance() && r.detachRef(t);
    }
  };
  e.exports = s;
};
