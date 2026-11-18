/* module 71345 — 2871 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n() {
    var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
    null != e && this.setState(e);
  }
  function i(e) {
    function t(t) {
      var r = this.constructor.getDerivedStateFromProps(e, t);
      return null != r ? r : null;
    }
    this.setState(t.bind(this));
  }
  function o(e, t) {
    try {
      var r = this.props,
        n = this.state;
      this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n);
    } finally {
      this.props = r, this.state = n;
    }
  }
  function s(e) {
    var t = e.prototype;
    if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
    if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
    var r = null,
      s = null,
      a = null;
    if ("function" == typeof t.componentWillMount ? r = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (r = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? s = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (s = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? a = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (a = "UNSAFE_componentWillUpdate"), null !== r || null !== s || null !== a) {
      var l = e.displayName || e.name,
        c = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
      throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + l + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== r ? "\n  " + r : "") + (null !== s ? "\n  " + s : "") + (null !== a ? "\n  " + a : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
    }
    if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = n, t.componentWillReceiveProps = i), "function" == typeof t.getSnapshotBeforeUpdate) {
      if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
      t.componentWillUpdate = o;
      var d = t.componentDidUpdate;
      t.componentDidUpdate = function e(t, r, n) {
        var i = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
        d.call(this, t, r, i);
      };
    }
    return e;
  }
  r.r(t), r.d(t, {
    polyfill: () => s
  }), n.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0;
};
