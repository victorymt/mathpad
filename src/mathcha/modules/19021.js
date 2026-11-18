/* module 19021 — 2318 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646),
    o = null,
    s = {};
  function a() {
    if (o) for (var e in s) {
      var t = s[e],
        r = o.indexOf(e);
      if (r > -1 || n("96", e), !d.plugins[r]) {
        t.extractEvents || n("97", e), d.plugins[r] = t;
        var i = t.eventTypes;
        for (var a in i) l(i[a], t, a) || n("98", a, e);
      }
    }
  }
  function l(e, t, r) {
    d.eventNameDispatchConfigs.hasOwnProperty(r) && n("99", r), d.eventNameDispatchConfigs[r] = e;
    var i = e.phasedRegistrationNames;
    if (i) {
      for (var o in i) {
        var s;
        if (i.hasOwnProperty(o)) c(i[o], t, r);
      }
      return !0;
    }
    return !!e.registrationName && (c(e.registrationName, t, r), !0);
  }
  function c(e, t, r) {
    var i;
    d.registrationNameModules[e] && n("100", e), d.registrationNameModules[e] = t, d.registrationNameDependencies[e] = t.eventTypes[r].dependencies;
  }
  var d = {
    plugins: [],
    eventNameDispatchConfigs: {},
    registrationNameModules: {},
    registrationNameDependencies: {},
    possibleRegistrationNames: null,
    injectEventPluginOrder: function (e) {
      o && n("101"), o = Array.prototype.slice.call(e), a();
    },
    injectEventPluginsByName: function (e) {
      var t = !1;
      for (var r in e) if (e.hasOwnProperty(r)) {
        var i = e[r];
        s.hasOwnProperty(r) && s[r] === i || (s[r] && n("102", r), s[r] = i, t = !0);
      }
      t && a();
    },
    getPluginModuleForEvent: function (e) {
      var t = e.dispatchConfig;
      if (t.registrationName) return d.registrationNameModules[t.registrationName] || null;
      if (void 0 !== t.phasedRegistrationNames) {
        var r = t.phasedRegistrationNames;
        for (var n in r) if (r.hasOwnProperty(n)) {
          var i = d.registrationNameModules[r[n]];
          if (i) return i;
        }
      }
      return null;
    },
    _resetEventPlugins: function () {
      for (var e in o = null, s) s.hasOwnProperty(e) && delete s[e];
      d.plugins.length = 0;
      var t = d.eventNameDispatchConfigs;
      for (var r in t) t.hasOwnProperty(r) && delete t[r];
      var n = d.registrationNameModules,
        i,
        a;
      for (var l in n) n.hasOwnProperty(l) && delete n[l];
    }
  };
  e.exports = d;
};
