/* module 75832 — 980 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(83997),
    i = r(80620),
    o = r(62597),
    s = r(3340),
    a = r(18806),
    l = r(21828),
    c = r(31952),
    d = r(95705),
    h = r(81390),
    p = r(14594);
  i.inject();
  var u = {
      findDOMNode: c,
      render: o.render,
      unmountComponentAtNode: o.unmountComponentAtNode,
      version: l,
      unstable_batchedUpdates: a.batchedUpdates,
      unstable_renderSubtreeIntoContainer: h
    },
    g,
    m,
    f,
    y,
    v,
    b,
    x,
    C,
    S,
    A;
  "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    ComponentTree: {
      getClosestInstanceFromNode: n.getClosestInstanceFromNode,
      getNodeFromInstance: function (e) {
        return e._renderedComponent && (e = d(e)), e ? n.getNodeFromInstance(e) : null;
      }
    },
    Mount: o,
    Reconciler: s
  }), e.exports = u;
};
