/* module 74767 — 4297 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(91858),
    o = r(72667),
    s = r(83982),
    a = r(38479),
    l = r(3340),
    c = r(49820),
    d = r(59395),
    h = r(34056),
    p = r(90646);
  function u(e, t, r) {
    return {
      type: "INSERT_MARKUP",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: r,
      afterNode: t
    };
  }
  function g(e, t, r) {
    return {
      type: "MOVE_EXISTING",
      content: null,
      fromIndex: e._mountIndex,
      fromNode: l.getHostNode(e),
      toIndex: r,
      afterNode: t
    };
  }
  function m(e, t) {
    return {
      type: "REMOVE_NODE",
      content: null,
      fromIndex: e._mountIndex,
      fromNode: t,
      toIndex: null,
      afterNode: null
    };
  }
  function f(e) {
    return {
      type: "SET_MARKUP",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }
  function y(e) {
    return {
      type: "TEXT_CONTENT",
      content: e,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }
  function v(e, t) {
    return t && (e = e || []).push(t), e;
  }
  function b(e, t) {
    i.processChildrenUpdates(e, t);
  }
  var x = null,
    C,
    S = {
      Mixin: {
        _reconcilerInstantiateChildren: function (e, t, r) {
          var n;
          return c.instantiateChildren(e, t, r);
        },
        _reconcilerUpdateChildren: function (e, t, r, n, i, o) {
          var s,
            a = 0;
          return s = h(t, 0), c.updateChildren(e, s, r, n, i, this, this._hostContainerInfo, o, 0), s;
        },
        mountChildren: function (e, t, r) {
          var n = this._reconcilerInstantiateChildren(e, t, r);
          this._renderedChildren = n;
          var i = [],
            o = 0;
          for (var s in n) if (n.hasOwnProperty(s)) {
            var a = n[s],
              c = 0;
            0;
            var d = l.mountComponent(a, t, this, this._hostContainerInfo, r, 0);
            a._mountIndex = o++, i.push(d);
          }
          return i;
        },
        updateTextContent: function (e) {
          var t = this._renderedChildren,
            r;
          for (var i in c.unmountChildren(t, !1), t) t.hasOwnProperty(i) && n("118");
          b(this, [y(e)]);
        },
        updateMarkup: function (e) {
          var t = this._renderedChildren,
            r;
          for (var i in c.unmountChildren(t, !1), t) t.hasOwnProperty(i) && n("118");
          b(this, [f(e)]);
        },
        updateChildren: function (e, t, r) {
          this._updateChildren(e, t, r);
        },
        _updateChildren: function (e, t, r) {
          var n = this._renderedChildren,
            i = {},
            o = [],
            s = this._reconcilerUpdateChildren(n, e, o, i, t, r);
          if (s || n) {
            var a = null,
              c,
              d = 0,
              h = 0,
              p = 0,
              u = null;
            for (c in s) if (s.hasOwnProperty(c)) {
              var g = n && n[c],
                m = s[c];
              g === m ? (a = v(a, this.moveChild(g, u, d, h)), h = Math.max(g._mountIndex, h), g._mountIndex = d) : (g && (h = Math.max(g._mountIndex, h)), a = v(a, this._mountChildAtIndex(m, o[p], u, d, t, r)), p++), d++, u = l.getHostNode(m);
            }
            for (c in i) i.hasOwnProperty(c) && (a = v(a, this._unmountChild(n[c], i[c])));
            a && b(this, a), this._renderedChildren = s;
          }
        },
        unmountChildren: function (e) {
          var t = this._renderedChildren;
          c.unmountChildren(t, e), this._renderedChildren = null;
        },
        moveChild: function (e, t, r, n) {
          if (e._mountIndex < n) return g(e, t, r);
        },
        createChild: function (e, t, r) {
          return u(r, t, e._mountIndex);
        },
        removeChild: function (e, t) {
          return m(e, t);
        },
        _mountChildAtIndex: function (e, t, r, n, i, o) {
          return e._mountIndex = n, this.createChild(e, r, t);
        },
        _unmountChild: function (e, t) {
          var r = this.removeChild(e, t);
          return e._mountIndex = null, r;
        }
      }
    };
  e.exports = S;
};
