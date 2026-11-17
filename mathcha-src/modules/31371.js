/* module 31371 — 1422 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(78693),
    i = r(84916),
    o = r(96936),
    s = r(67017),
    a = 1,
    l = 11,
    c = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent);
  function d(e) {
    if (c) {
      var t = e.node,
        r = e.children;
      if (r.length) for (var n = 0; n < r.length; n++) h(t, r[n], null);else null != e.html ? i(t, e.html) : null != e.text && s(t, e.text);
    }
  }
  var h = o(function (e, t, r) {
    t.node.nodeType === l || 1 === t.node.nodeType && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === n.html) ? (d(t), e.insertBefore(t.node, r)) : (e.insertBefore(t.node, r), d(t));
  });
  function p(e, t) {
    e.parentNode.replaceChild(t.node, e), d(t);
  }
  function u(e, t) {
    c ? e.children.push(t) : e.node.appendChild(t.node);
  }
  function g(e, t) {
    c ? e.html = t : i(e.node, t);
  }
  function m(e, t) {
    c ? e.text = t : s(e.node, t);
  }
  function f() {
    return this.node.nodeName;
  }
  function y(e) {
    return {
      node: e,
      children: [],
      html: null,
      text: null,
      toString: f
    };
  }
  y.insertTreeBefore = h, y.replaceChildWithTree = p, y.queueChild = u, y.queueHTML = g, y.queueText = m, e.exports = y;
};
