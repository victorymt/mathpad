/* module 95839 — 1292 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(45228),
    o = r(71552),
    s = r(25078),
    a = r(2981),
    l = r(30971),
    c = r(90646),
    d = r(14594),
    h = function (e) {
      this.construct(e);
    };
  function p(e) {
    if (e) {
      var t = e.getName();
      if (t) return " Check the render method of `" + t + "`.";
    }
    return "";
  }
  function u(e) {
    return "function" == typeof e && void 0 !== e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent;
  }
  function g(e, t) {
    var r;
    if (null === e || !1 === e) r = s.create(g);else if ("object" == typeof e) {
      var i = e,
        o = i.type;
      if ("function" != typeof o && "string" != typeof o) {
        var l = "";
        0, l += p(i._owner), n("130", null == o ? o : typeof o, l);
      }
      "string" == typeof i.type ? r = a.createInternalComponent(i) : u(i.type) ? (r = new i.type(i)).getHostNode || (r.getHostNode = r.getNativeNode) : r = new h(i);
    } else "string" == typeof e || "number" == typeof e ? r = a.createInstanceForText(e) : n("131", typeof e);
    return r._mountIndex = 0, r._mountImage = null, r;
  }
  i(h.prototype, o, {
    _instantiateReactComponent: g
  }), e.exports = g;
};
