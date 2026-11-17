/* module 62597 — 5670 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(31371),
    o = r(90160),
    s = r(63475),
    a = r(61374),
    l = r(38479),
    c = r(83997),
    d = r(24161),
    h = r(73977),
    p = r(83507),
    u = r(72667),
    g = r(83982),
    m = r(53309),
    f = r(3340),
    y = r(68499),
    v = r(18806),
    b = r(5184),
    x = r(95839),
    C = r(90646),
    S = r(84916),
    A = r(46113),
    w = r(14594),
    E = o.ID_ATTRIBUTE_NAME,
    k = o.ROOT_ATTRIBUTE_NAME,
    O = 1,
    D = 9,
    P = 11,
    M = {};
  function I(e, t) {
    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) if (e.charAt(n) !== t.charAt(n)) return n;
    return e.length === t.length ? -1 : r;
  }
  function T(e) {
    return e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null;
  }
  function L(e) {
    return e.getAttribute && e.getAttribute(E) || "";
  }
  function R(e, t, r, n, i) {
    var o;
    if (p.logTopLevelRenders) {
      var s,
        a = e._currentElement.props.child.type;
      o = "React mount: " + ("string" == typeof a ? a : a.displayName || a.name), console.time(o);
    }
    var l = f.mountComponent(e, r, null, d(e, t), i, 0);
    o && console.timeEnd(o), e._renderedComponent._topLevelWrapper = e, q._mountImageIntoNode(l, t, e, n, r);
  }
  function B(e, t, r, n) {
    var i = v.ReactReconcileTransaction.getPooled(!r && h.useCreateElement);
    i.perform(R, null, e, t, i, r, n), v.ReactReconcileTransaction.release(i);
  }
  function F(e, t, r) {
    for (0, f.unmountComponent(e, r), 9 === t.nodeType && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild);
  }
  function j(e) {
    var t = T(e);
    if (t) {
      var r = c.getInstanceFromNode(t);
      return !(!r || !r._hostParent);
    }
  }
  function _(e) {
    var t = T(e);
    return !(!t || !z(t) || c.getInstanceFromNode(t));
  }
  function N(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && e.nodeType !== P);
  }
  function z(e) {
    return N(e) && (e.hasAttribute(k) || e.hasAttribute(E));
  }
  function H(e) {
    var t = T(e),
      r = t && c.getInstanceFromNode(t);
    return r && !r._hostParent ? r : null;
  }
  function W(e) {
    var t = H(e);
    return t ? t._hostContainerInfo._topLevelWrapper : null;
  }
  var V = 1,
    U = function () {
      this.rootID = V++;
    };
  U.prototype.isReactComponent = {}, U.prototype.render = function () {
    return this.props.child;
  }, U.isReactTopLevelWrapper = !0;
  var q = {
    TopLevelWrapper: U,
    _instancesByReactRootID: M,
    scrollMonitor: function (e, t) {
      t();
    },
    _updateRootComponent: function (e, t, r, n, i) {
      return q.scrollMonitor(n, function () {
        y.enqueueElementInternal(e, t, r), i && y.enqueueCallbackInternal(e, i);
      }), e;
    },
    _renderNewRootComponent: function (e, t, r, i) {
      N(t) || n("37"), a.ensureScrollValueMonitoring();
      var o = x(e, !1);
      v.batchedUpdates(B, o, t, r, i);
      var s = o._instance.rootID;
      return M[s] = o, o;
    },
    renderSubtreeIntoContainer: function (e, t, r, i) {
      return null != e && u.has(e) || n("38"), q._renderSubtreeIntoContainer(e, t, r, i);
    },
    _renderSubtreeIntoContainer: function (e, t, r, i) {
      y.validateCallback(i, "ReactDOM.render"), s.isValidElement(t) || n("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
      var o = s.createElement(U, {
          child: t
        }),
        a;
      if (e) {
        var l = u.get(e);
        a = l._processChildContext(l._context);
      } else a = b;
      var c = W(r);
      if (c) {
        var d,
          h = c._currentElement.props.child;
        if (A(h, t)) {
          var p = c._renderedComponent.getPublicInstance(),
            g = i && function () {
              i.call(p);
            };
          return q._updateRootComponent(c, o, a, r, g), p;
        }
        q.unmountComponentAtNode(r);
      }
      var m = T(r),
        f = m && !!L(m),
        v = j(r),
        x,
        C = f && !c && !v,
        S = q._renderNewRootComponent(o, r, C, a)._renderedComponent.getPublicInstance();
      return i && i.call(S), S;
    },
    render: function (e, t, r) {
      return q._renderSubtreeIntoContainer(null, e, t, r);
    },
    unmountComponentAtNode: function (e) {
      N(e) || n("40");
      var t = W(e);
      if (!t) {
        var r = j(e),
          i = 1 === e.nodeType && e.hasAttribute(k);
        return !1;
      }
      return delete M[t._instance.rootID], v.batchedUpdates(F, t, e, !1), !0;
    },
    _mountImageIntoNode: function (e, t, r, o, s) {
      if (N(t) || n("41"), o) {
        var a = T(t);
        if (m.canReuseMarkup(e, a)) return void c.precacheNode(r, a);
        var l = a.getAttribute(m.CHECKSUM_ATTR_NAME);
        a.removeAttribute(m.CHECKSUM_ATTR_NAME);
        var d = a.outerHTML;
        a.setAttribute(m.CHECKSUM_ATTR_NAME, l);
        var h = e,
          p,
          u = I(h, d),
          g = " (client) " + h.substring(u - 20, u + 20) + "\n (server) " + d.substring(u - 20, u + 20);
        9 === t.nodeType && n("42", g);
      }
      if (9 === t.nodeType && n("43"), s.useCreateElement) {
        for (; t.lastChild;) t.removeChild(t.lastChild);
        i.insertTreeBefore(t, e, null);
      } else S(t, e), c.precacheNode(r, t.firstChild);
      var f;
    }
  };
  e.exports = q;
};
