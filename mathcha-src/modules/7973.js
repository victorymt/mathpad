/* module 7973 — 907 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(82987),
    i = {};
  function o(e, t, r) {
    "function" == typeof e ? e(t.getPublicInstance()) : n.addComponentAsRefTo(t, e, r);
  }
  function s(e, t, r) {
    "function" == typeof e ? e(null) : n.removeComponentAsRefFrom(t, e, r);
  }
  i.attachRefs = function (e, t) {
    if (null !== t && "object" == typeof t) {
      var r = t.ref;
      null != r && o(r, e, t._owner);
    }
  }, i.shouldUpdateRefs = function (e, t) {
    var r = null,
      n = null;
    null !== e && "object" == typeof e && (r = e.ref, n = e._owner);
    var i = null,
      o = null;
    return null !== t && "object" == typeof t && (i = t.ref, o = t._owner), r !== i || "string" == typeof i && o !== n;
  }, i.detachRefs = function (e, t) {
    if (null !== t && "object" == typeof t) {
      var r = t.ref;
      null != r && s(r, e, t._owner);
    }
  }, e.exports = i;
};
