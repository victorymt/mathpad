/* module 34574 — 8456 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(44363),
    i = r(45228),
    o = r(6925),
    s = r(60228),
    a = Function.call.bind(Object.prototype.hasOwnProperty),
    l = function () {};
  function c() {
    return null;
  }
  e.exports = function (e, t) {
    var r = "function" == typeof Symbol && Symbol.iterator,
      d = "@@iterator";
    function h(e) {
      var t = e && (r && e[r] || e[d]);
      if ("function" == typeof t) return t;
    }
    var p = "<<anonymous>>",
      u = {
        array: y("array"),
        bool: y("boolean"),
        func: y("function"),
        number: y("number"),
        object: y("object"),
        string: y("string"),
        symbol: y("symbol"),
        any: v(),
        arrayOf: b,
        element: x(),
        elementType: C(),
        instanceOf: S,
        node: k(),
        objectOf: w,
        oneOf: A,
        oneOfType: E,
        shape: O,
        exact: D
      };
    function g(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function m(e) {
      this.message = e, this.stack = "";
    }
    function f(e) {
      var r, n;
      function i(r, n, i, s, a, l, c) {
        var d;
        if ((s = s || p, l = l || i, c !== o) && t) {
          var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          throw h.name = "Invariant Violation", h;
        }
        return null == n[i] ? r ? null === n[i] ? new m("The " + a + " `" + l + "` is marked as required in `" + s + "`, but its value is `null`.") : new m("The " + a + " `" + l + "` is marked as required in `" + s + "`, but its value is `undefined`.") : null : e(n, i, s, a, l);
      }
      var s = i.bind(null, !1);
      return s.isRequired = i.bind(null, !0), s;
    }
    function y(e) {
      function t(t, r, n, i, o, s) {
        var a = t[r],
          l,
          c;
        return I(a) !== e ? new m("Invalid " + i + " `" + o + "` of type `" + T(a) + "` supplied to `" + n + "`, expected `" + e + "`.") : null;
      }
      return f(t);
    }
    function v() {
      return f(c);
    }
    function b(e) {
      function t(t, r, n, i, s) {
        if ("function" != typeof e) return new m("Property `" + s + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
        var a = t[r],
          l;
        if (!Array.isArray(a)) return new m("Invalid " + i + " `" + s + "` of type `" + I(a) + "` supplied to `" + n + "`, expected an array.");
        for (var c = 0; c < a.length; c++) {
          var d = e(a, c, n, i, s + "[" + c + "]", o);
          if (d instanceof Error) return d;
        }
        return null;
      }
      return f(t);
    }
    function x() {
      function t(t, r, n, i, o) {
        var s = t[r],
          a;
        return e(s) ? null : new m("Invalid " + i + " `" + o + "` of type `" + I(s) + "` supplied to `" + n + "`, expected a single ReactElement.");
      }
      return f(t);
    }
    function C() {
      function e(e, t, r, i, o) {
        var s = e[t],
          a;
        return n.isValidElementType(s) ? null : new m("Invalid " + i + " `" + o + "` of type `" + I(s) + "` supplied to `" + r + "`, expected a single ReactElement type.");
      }
      return f(e);
    }
    function S(e) {
      function t(t, r, n, i, o) {
        if (!(t[r] instanceof e)) {
          var s = e.name || p,
            a;
          return new m("Invalid " + i + " `" + o + "` of type `" + R(t[r]) + "` supplied to `" + n + "`, expected instance of `" + s + "`.");
        }
        return null;
      }
      return f(t);
    }
    function A(e) {
      if (!Array.isArray(e)) return c;
      function t(t, r, n, i, o) {
        for (var s = t[r], a = 0; a < e.length; a++) if (g(s, e[a])) return null;
        var l = JSON.stringify(e, function e(t, r) {
          var n;
          return "symbol" === T(r) ? String(r) : r;
        });
        return new m("Invalid " + i + " `" + o + "` of value `" + String(s) + "` supplied to `" + n + "`, expected one of " + l + ".");
      }
      return f(t);
    }
    function w(e) {
      function t(t, r, n, i, s) {
        if ("function" != typeof e) return new m("Property `" + s + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
        var l = t[r],
          c = I(l);
        if ("object" !== c) return new m("Invalid " + i + " `" + s + "` of type `" + c + "` supplied to `" + n + "`, expected an object.");
        for (var d in l) if (a(l, d)) {
          var h = e(l, d, n, i, s + "." + d, o);
          if (h instanceof Error) return h;
        }
        return null;
      }
      return f(t);
    }
    function E(e) {
      if (!Array.isArray(e)) return c;
      for (var t = 0; t < e.length; t++) {
        var r = e[t];
        if ("function" != typeof r) return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(r) + " at index " + t + "."), c;
      }
      function n(t, r, n, i, s) {
        for (var a = 0; a < e.length; a++) {
          var l;
          if (null == (0, e[a])(t, r, n, i, s, o)) return null;
        }
        return new m("Invalid " + i + " `" + s + "` supplied to `" + n + "`.");
      }
      return f(n);
    }
    function k() {
      function e(e, t, r, n, i) {
        return P(e[t]) ? null : new m("Invalid " + n + " `" + i + "` supplied to `" + r + "`, expected a ReactNode.");
      }
      return f(e);
    }
    function O(e) {
      function t(t, r, n, i, s) {
        var a = t[r],
          l = I(a);
        if ("object" !== l) return new m("Invalid " + i + " `" + s + "` of type `" + l + "` supplied to `" + n + "`, expected `object`.");
        for (var c in e) {
          var d = e[c];
          if (d) {
            var h = d(a, c, n, i, s + "." + c, o);
            if (h) return h;
          }
        }
        return null;
      }
      return f(t);
    }
    function D(e) {
      function t(t, r, n, s, a) {
        var l = t[r],
          c = I(l);
        if ("object" !== c) return new m("Invalid " + s + " `" + a + "` of type `" + c + "` supplied to `" + n + "`, expected `object`.");
        var d = i({}, t[r], e);
        for (var h in d) {
          var p = e[h];
          if (!p) return new m("Invalid " + s + " `" + a + "` key `" + h + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
          var u = p(l, h, n, s, a + "." + h, o);
          if (u) return u;
        }
        return null;
      }
      return f(t);
    }
    function P(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t)) return t.every(P);
          if (null === t || e(t)) return !0;
          var r = h(t);
          if (!r) return !1;
          var n = r.call(t),
            i;
          if (r !== t.entries) {
            for (; !(i = n.next()).done;) if (!P(i.value)) return !1;
          } else for (; !(i = n.next()).done;) {
            var o = i.value;
            if (o && !P(o[1])) return !1;
          }
          return !0;
        default:
          return !1;
      }
    }
    function M(e, t) {
      return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol);
    }
    function I(e) {
      var t = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : M(t, e) ? "symbol" : t;
    }
    function T(e) {
      if (null == e) return "" + e;
      var t = I(e);
      if ("object" === t) {
        if (e instanceof Date) return "date";
        if (e instanceof RegExp) return "regexp";
      }
      return t;
    }
    function L(e) {
      var t = T(e);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function R(e) {
      return e.constructor && e.constructor.name ? e.constructor.name : p;
    }
    return m.prototype = Error.prototype, u.checkPropTypes = s, u.resetWarningCache = s.resetWarningCache, u.PropTypes = u, u;
  };
};
