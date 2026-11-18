/* module 58020 — 1410 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646);
  function o(e, t) {
    "_hostNode" in e || n("33"), "_hostNode" in t || n("33");
    for (var r = 0, i = e; i; i = i._hostParent) r++;
    for (var o = 0, s = t; s; s = s._hostParent) o++;
    for (; r - o > 0;) e = e._hostParent, r--;
    for (; o - r > 0;) t = t._hostParent, o--;
    for (var a = r; a--;) {
      if (e === t) return e;
      e = e._hostParent, t = t._hostParent;
    }
    return null;
  }
  function s(e, t) {
    "_hostNode" in e || n("35"), "_hostNode" in t || n("35");
    for (; t;) {
      if (t === e) return !0;
      t = t._hostParent;
    }
    return !1;
  }
  function a(e) {
    return "_hostNode" in e || n("36"), e._hostParent;
  }
  function l(e, t, r) {
    for (var n = [], i; e;) n.push(e), e = e._hostParent;
    for (i = n.length; i-- > 0;) t(n[i], "captured", r);
    for (i = 0; i < n.length; i++) t(n[i], "bubbled", r);
  }
  function c(e, t, r, n, i) {
    for (var s = e && t ? o(e, t) : null, a = []; e && e !== s;) a.push(e), e = e._hostParent;
    for (var l = [], c; t && t !== s;) l.push(t), t = t._hostParent;
    for (c = 0; c < a.length; c++) r(a[c], "bubbled", n);
    for (c = l.length; c-- > 0;) r(l[c], "captured", i);
  }
  e.exports = {
    isAncestor: s,
    getLowestCommonAncestor: o,
    getParentInstance: a,
    traverseTwoPhase: l,
    traverseEnterLeave: c
  };
};
