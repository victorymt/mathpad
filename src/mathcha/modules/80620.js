/* module 80620 — 1264 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(86125),
    i = r(22505),
    o = r(7454),
    s = r(50781),
    a = r(87361),
    l = r(29641),
    c = r(19626),
    d = r(70969),
    h = r(83997),
    p = r(40748),
    u = r(58020),
    g = r(90192),
    m = r(86420),
    f = r(19948),
    y = r(42349),
    v = r(83210),
    b = r(5852),
    x = r(89666),
    C = r(46048),
    S = !1;
  function A() {
    S || (S = !0, y.EventEmitter.injectReactEventListener(f), y.EventPluginHub.injectEventPluginOrder(s), y.EventPluginUtils.injectComponentTree(h), y.EventPluginUtils.injectTreeTraversal(u), y.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: C,
      EnterLeaveEventPlugin: a,
      ChangeEventPlugin: o,
      SelectEventPlugin: x,
      BeforeInputEventPlugin: i
    }), y.HostComponent.injectGenericComponentClass(d), y.HostComponent.injectTextComponentClass(g), y.DOMProperty.injectDOMPropertyConfig(n), y.DOMProperty.injectDOMPropertyConfig(l), y.DOMProperty.injectDOMPropertyConfig(b), y.EmptyComponent.injectEmptyComponentFactory(function (e) {
      return new p(e);
    }), y.Updates.injectReconcileTransaction(v), y.Updates.injectBatchingStrategy(m), y.Component.injectEnvironment(c));
  }
  e.exports = {
    inject: A
  };
};
