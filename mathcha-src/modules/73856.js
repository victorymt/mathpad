/* module 73856 — 1285 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    w: () => o
  });
  var n = r(64467),
    i = r(37566);
  class o {
    constructor() {
      (0, n.A)(this, "lazyDisableMap", new Map()), (0, n.A)(this, "cacheBlockInfo", new Map());
    }
    has(e, t) {
      var r = this.lazyDisableMap.get(e);
      if (!r) return !1;
      var n = r.get(t);
      return !!n && n.size > 0;
    }
    add(e, t, r) {
      var n = this.lazyDisableMap.get(e);
      n || (n = new Map(), this.lazyDisableMap.set(e, n));
      var i = n.get(t);
      i || (i = new Set(), n.set(t, i)), i.add(r), this.cacheBlockInfo.set(r, {
        editorId: e,
        lineId: t
      });
    }
    remove(e, t) {
      var r = this.cacheBlockInfo.get(e);
      if (r) {
        this.cacheBlockInfo.delete(e);
        var n = this.lazyDisableMap.get(r.editorId);
        if (n) {
          var i = n.get(r.lineId);
          i && (i.delete(e), i.size <= 0 && t && t(r.editorId, r.lineId));
        }
      }
    }
    static findClosetEditArea(e) {
      for (var t, r, n = e.parentElement; n && "MATH-TYPE" != n.tagName;) {
        if ("LINE" == n.tagName && (t = n), i._I(n, "editarea.lazyable")) {
          r = n;
          break;
        }
        n = n.parentElement;
      }
      return [t, r];
    }
  }
};
