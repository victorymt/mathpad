/* module 7762 — 492 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(4644),
    i = r(53080),
    o = {
      view: function (e) {
        if (e.view) return e.view;
        var t = i(e);
        if (t.window === t) return t;
        var r = t.ownerDocument;
        return r ? r.defaultView || r.parentWindow : window;
      },
      detail: function (e) {
        return e.detail || 0;
      }
    };
  function s(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(s, o), e.exports = s;
};
