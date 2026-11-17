/* module 83997 — 1964 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90160),
    o = r(71698),
    s = r(90646),
    a = i.ID_ATTRIBUTE_NAME,
    l = o,
    c = "__reactInternalInstance$" + Math.random().toString(36).slice(2);
  function d(e, t) {
    return 1 === e.nodeType && e.getAttribute(a) === String(t) || 8 === e.nodeType && e.nodeValue === " react-text: " + t + " " || 8 === e.nodeType && e.nodeValue === " react-empty: " + t + " ";
  }
  function h(e) {
    for (var t; t = e._renderedComponent;) e = t;
    return e;
  }
  function p(e, t) {
    var r = h(e);
    r._hostNode = t, t[c] = r;
  }
  function u(e) {
    var t = e._hostNode;
    t && (delete t[c], e._hostNode = null);
  }
  function g(e, t) {
    if (!(e._flags & l.hasCachedChildNodes)) {
      var r = e._renderedChildren,
        i = t.firstChild;
      e: for (var o in r) if (r.hasOwnProperty(o)) {
        var s = r[o],
          a = h(s)._domID;
        if (0 !== a) {
          for (; null !== i; i = i.nextSibling) if (d(i, a)) {
            p(s, i);
            continue e;
          }
          n("32", a);
        }
      }
      e._flags |= l.hasCachedChildNodes;
    }
  }
  function m(e) {
    if (e[c]) return e[c];
    for (var t = [], r, n; !e[c];) {
      if (t.push(e), !e.parentNode) return null;
      e = e.parentNode;
    }
    for (; e && (n = e[c]); e = t.pop()) r = n, t.length && g(n, e);
    return r;
  }
  function f(e) {
    var t = m(e);
    return null != t && t._hostNode === e ? t : null;
  }
  function y(e) {
    if (void 0 === e._hostNode && n("33"), e._hostNode) return e._hostNode;
    for (var t = []; !e._hostNode;) t.push(e), e._hostParent || n("34"), e = e._hostParent;
    for (; t.length; e = t.pop()) g(e, e._hostNode);
    return e._hostNode;
  }
  var v = {
    getClosestInstanceFromNode: m,
    getInstanceFromNode: f,
    getNodeFromInstance: y,
    precacheChildNodes: g,
    precacheNode: p,
    uncacheNode: u
  };
  e.exports = v;
};
