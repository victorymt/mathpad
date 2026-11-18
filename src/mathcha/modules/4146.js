/* module 4146 — 1573 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(44363),
    i = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    s = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    },
    a = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    l = {};
  function c(e) {
    return n.isMemo(e) ? a : l[e.$$typeof] || i;
  }
  l[n.ForwardRef] = s;
  var d = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    p = Object.getOwnPropertySymbols,
    u = Object.getOwnPropertyDescriptor,
    g = Object.getPrototypeOf,
    m = Object.prototype;
  function f(e, t, r) {
    if ("string" != typeof t) {
      if (m) {
        var n = g(t);
        n && n !== m && f(e, n, r);
      }
      var i = h(t);
      p && (i = i.concat(p(t)));
      for (var s = c(e), a = c(t), l = 0; l < i.length; ++l) {
        var y = i[l];
        if (!(o[y] || r && r[y] || a && a[y] || s && s[y])) {
          var v = u(t, y);
          try {
            d(e, y, v);
          } catch (e) {}
        }
      }
      return e;
    }
    return e;
  }
  e.exports = f;
};
