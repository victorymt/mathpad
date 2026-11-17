/* module 53640 — 1020 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(53576),
    i = r(45228),
    o = r(32183),
    s = r(21980),
    a = r(5184),
    l = r(90646),
    c = r(18652),
    d,
    h,
    p;
  function u(e, t, r) {
    this.props = e, this.context = t, this.refs = a, this.updater = r || o;
  }
  function g(e, t, r) {
    this.props = e, this.context = t, this.refs = a, this.updater = r || o;
  }
  function m() {}
  u.prototype.isReactComponent = {}, u.prototype.setState = function (e, t) {
    "object" != typeof e && "function" != typeof e && null != e && n("85"), this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState");
  }, u.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate");
  }, m.prototype = u.prototype, g.prototype = new m(), g.prototype.constructor = g, i(g.prototype, u.prototype), g.prototype.isPureReactComponent = !0, e.exports = {
    Component: u,
    PureComponent: g
  };
};
