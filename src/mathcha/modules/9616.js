/* module 9616 — 712 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    q: () => i
  });
  class n {
    notifyWidthChangeToAncestor(e) {
      var t = e.parentElement,
        r = () => {
          for (; t && "MATH-TYPE" != t.tagName;) {
            var e = t;
            if (t = t.parentElement, "COMPOSITEBLOCK" == e.tagName) {
              var n = e.reactInstance;
              if (n && !n.willComponentUnmount) {
                var i = this.runNotifyWidthChange(n);
                if (i) return i.then(r);
              }
            }
          }
        };
      return r();
    }
    runNotifyWidthChange(e) {
      if (e.notifyChildrenWidthChange) return e.notifyChildrenWidthChange();
    }
  }
  var i = new n();
};
