/* module 81804 — 6842 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(5184),
    o = r(90646),
    s,
    a = "mixins",
    l;
  function c(e) {
    return e;
  }
  function d(e, t, r) {
    var s = [],
      l = {
        mixins: "DEFINE_MANY",
        statics: "DEFINE_MANY",
        propTypes: "DEFINE_MANY",
        contextTypes: "DEFINE_MANY",
        childContextTypes: "DEFINE_MANY",
        getDefaultProps: "DEFINE_MANY_MERGED",
        getInitialState: "DEFINE_MANY_MERGED",
        getChildContext: "DEFINE_MANY_MERGED",
        render: "DEFINE_ONCE",
        componentWillMount: "DEFINE_MANY",
        componentDidMount: "DEFINE_MANY",
        componentWillReceiveProps: "DEFINE_MANY",
        shouldComponentUpdate: "DEFINE_ONCE",
        componentWillUpdate: "DEFINE_MANY",
        componentDidUpdate: "DEFINE_MANY",
        componentWillUnmount: "DEFINE_MANY",
        UNSAFE_componentWillMount: "DEFINE_MANY",
        UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
        UNSAFE_componentWillUpdate: "DEFINE_MANY",
        updateComponent: "OVERRIDE_BASE"
      },
      c = {
        getDerivedStateFromProps: "DEFINE_MANY_MERGED"
      },
      d = {
        displayName: function (e, t) {
          e.displayName = t;
        },
        mixins: function (e, t) {
          if (t) for (var r = 0; r < t.length; r++) u(e, t[r]);
        },
        childContextTypes: function (e, t) {
          e.childContextTypes = n({}, e.childContextTypes, t);
        },
        contextTypes: function (e, t) {
          e.contextTypes = n({}, e.contextTypes, t);
        },
        getDefaultProps: function (e, t) {
          e.getDefaultProps ? e.getDefaultProps = f(e.getDefaultProps, t) : e.getDefaultProps = t;
        },
        propTypes: function (e, t) {
          e.propTypes = n({}, e.propTypes, t);
        },
        statics: function (e, t) {
          g(e, t);
        },
        autobind: function () {}
      };
    function h(e, t, r) {
      for (var n in t) t.hasOwnProperty(n);
    }
    function p(e, t) {
      var r = l.hasOwnProperty(t) ? l[t] : null;
      S.hasOwnProperty(t) && o("OVERRIDE_BASE" === r, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && o("DEFINE_MANY" === r || "DEFINE_MANY_MERGED" === r, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t);
    }
    function u(e, r) {
      if (r) {
        o("function" != typeof r, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), o(!t(r), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
        var n = e.prototype,
          i = n.__reactAutoBindPairs;
        for (var s in r.hasOwnProperty(a) && d.mixins(e, r.mixins), r) if (r.hasOwnProperty(s) && s !== a) {
          var c = r[s],
            h = n.hasOwnProperty(s);
          if (p(h, s), d.hasOwnProperty(s)) d[s](e, c);else {
            var u = l.hasOwnProperty(s),
              g,
              m;
            if ("function" == typeof c && !u && !h && !1 !== r.autobind) i.push(s, c), n[s] = c;else if (h) {
              var v = l[s];
              o(u && ("DEFINE_MANY_MERGED" === v || "DEFINE_MANY" === v), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", v, s), "DEFINE_MANY_MERGED" === v ? n[s] = f(n[s], c) : "DEFINE_MANY" === v && (n[s] = y(n[s], c));
            } else n[s] = c;
          }
        }
      } else var b, x;
    }
    function g(e, t) {
      if (t) for (var r in t) {
        var n = t[r];
        if (t.hasOwnProperty(r)) {
          var i, s;
          if (o(!(r in d), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', r), r in e) {
            var a = c.hasOwnProperty(r) ? c[r] : null;
            return o("DEFINE_MANY_MERGED" === a, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", r), void (e[r] = f(e[r], n));
          }
          e[r] = n;
        }
      }
    }
    function m(e, t) {
      for (var r in o(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(r) && (o(void 0 === e[r], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", r), e[r] = t[r]);
      return e;
    }
    function f(e, t) {
      return function r() {
        var n = e.apply(this, arguments),
          i = t.apply(this, arguments);
        if (null == n) return i;
        if (null == i) return n;
        var o = {};
        return m(o, n), m(o, i), o;
      };
    }
    function y(e, t) {
      return function r() {
        e.apply(this, arguments), t.apply(this, arguments);
      };
    }
    function v(e, t) {
      var r, n, i;
      return t.bind(e);
    }
    function b(e) {
      for (var t = e.__reactAutoBindPairs, r = 0; r < t.length; r += 2) {
        var n = t[r],
          i = t[r + 1];
        e[n] = v(e, i);
      }
    }
    var x = {
        componentDidMount: function () {
          this.__isMounted = !0;
        }
      },
      C = {
        componentWillUnmount: function () {
          this.__isMounted = !1;
        }
      },
      S = {
        replaceState: function (e, t) {
          this.updater.enqueueReplaceState(this, e, t);
        },
        isMounted: function () {
          return !!this.__isMounted;
        }
      },
      A = function () {};
    function w(e) {
      var t = function (e, n, s) {
        this.__reactAutoBindPairs.length && b(this), this.props = e, this.context = n, this.refs = i, this.updater = s || r, this.state = null;
        var a = this.getInitialState ? this.getInitialState() : null;
        o("object" == typeof a && !Array.isArray(a), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = a;
      };
      for (var n in t.prototype = new A(), t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(u.bind(null, t)), u(t, x), u(t, e), u(t, C), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), o(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), l) t.prototype[n] || (t.prototype[n] = null);
      return t;
    }
    return n(A.prototype, e.prototype, S), w;
  }
  l = {}, e.exports = d;
};
