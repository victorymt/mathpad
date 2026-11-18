/* module 5936 — 1788 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(31371),
    i = r(81986),
    o = r(83997),
    s = r(83982),
    a = r(96936),
    l = r(84916),
    c = r(67017);
  function d(e, t) {
    return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild;
  }
  var h = a(function (e, t, r) {
      e.insertBefore(t, r);
    }),
    p;
  function u(e, t, r) {
    n.insertTreeBefore(e, t, r);
  }
  function g(e, t, r) {
    Array.isArray(t) ? f(e, t[0], t[1], r) : h(e, t, r);
  }
  function m(e, t) {
    if (Array.isArray(t)) {
      var r = t[1];
      y(e, t = t[0], r), e.removeChild(r);
    }
    e.removeChild(t);
  }
  function f(e, t, r, n) {
    for (var i = t;;) {
      var o = i.nextSibling;
      if (h(e, i, n), i === r) break;
      i = o;
    }
  }
  function y(e, t, r) {
    for (;;) {
      var n = t.nextSibling;
      if (n === r) break;
      e.removeChild(n);
    }
  }
  function v(e, t, r) {
    var n = e.parentNode,
      i = e.nextSibling;
    i === t ? r && h(n, document.createTextNode(r), i) : r ? (c(i, r), y(n, i, t)) : y(n, e, t);
  }
  var b = {
    dangerouslyReplaceNodeWithMarkup: i.dangerouslyReplaceNodeWithMarkup,
    replaceDelimitedText: v,
    processUpdates: function (e, t) {
      for (var r, n = 0; n < t.length; n++) {
        var i = t[n];
        switch (i.type) {
          case "INSERT_MARKUP":
            u(e, i.content, d(e, i.afterNode));
            break;
          case "MOVE_EXISTING":
            g(e, i.fromNode, d(e, i.afterNode));
            break;
          case "SET_MARKUP":
            l(e, i.content);
            break;
          case "TEXT_CONTENT":
            c(e, i.content);
            break;
          case "REMOVE_NODE":
            m(e, i.fromNode);
        }
      }
    }
  };
  e.exports = b;
};
