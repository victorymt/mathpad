/* module 22799 — 2799 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && Symbol.for,
    n = r ? Symbol.for("react.element") : 60103,
    i = r ? Symbol.for("react.portal") : 60106,
    o = r ? Symbol.for("react.fragment") : 60107,
    s = r ? Symbol.for("react.strict_mode") : 60108,
    a = r ? Symbol.for("react.profiler") : 60114,
    l = r ? Symbol.for("react.provider") : 60109,
    c = r ? Symbol.for("react.context") : 60110,
    d = r ? Symbol.for("react.async_mode") : 60111,
    h = r ? Symbol.for("react.concurrent_mode") : 60111,
    p = r ? Symbol.for("react.forward_ref") : 60112,
    u = r ? Symbol.for("react.suspense") : 60113,
    g = r ? Symbol.for("react.memo") : 60115,
    m = r ? Symbol.for("react.lazy") : 60116;
  function f(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case n:
          switch (e = e.type) {
            case d:
            case h:
            case o:
            case a:
            case s:
            case u:
              return e;
            default:
              switch (e = e && e.$$typeof) {
                case c:
                case p:
                case l:
                  return e;
                default:
                  return t;
              }
          }
        case m:
        case g:
        case i:
          return t;
      }
    }
  }
  function y(e) {
    return f(e) === h;
  }
  t.typeOf = f, t.AsyncMode = d, t.ConcurrentMode = h, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = o, t.Lazy = m, t.Memo = g, t.Portal = i, t.Profiler = a, t.StrictMode = s, t.Suspense = u, t.isValidElementType = function (e) {
    return "string" == typeof e || "function" == typeof e || e === o || e === h || e === a || e === s || e === u || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p);
  }, t.isAsyncMode = function (e) {
    return y(e) || f(e) === d;
  }, t.isConcurrentMode = y, t.isContextConsumer = function (e) {
    return f(e) === c;
  }, t.isContextProvider = function (e) {
    return f(e) === l;
  }, t.isElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === n;
  }, t.isForwardRef = function (e) {
    return f(e) === p;
  }, t.isFragment = function (e) {
    return f(e) === o;
  }, t.isLazy = function (e) {
    return f(e) === m;
  }, t.isMemo = function (e) {
    return f(e) === g;
  }, t.isPortal = function (e) {
    return f(e) === i;
  }, t.isProfiler = function (e) {
    return f(e) === a;
  }, t.isStrictMode = function (e) {
    return f(e) === s;
  }, t.isSuspense = function (e) {
    return f(e) === u;
  };
};
