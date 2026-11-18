/* module 1226 — 846 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.bpfrpt_proptype_AnimationTimeoutId = t.requestAnimationTimeout = t.cancelAnimationTimeout = void 0;
  var n,
    i = l(r(5045)),
    o = r(4555),
    s,
    a = l(r(5556));
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var c = null,
    d = t.cancelAnimationTimeout = function e(t) {
      return (0, o.caf)(t.id);
    },
    h = t.requestAnimationTimeout = function e(t, r) {
      var n = void 0;
      i.default.resolve().then(function () {
        n = Date.now();
      });
      var s = function e() {
          Date.now() - n >= r ? t.call() : a.id = (0, o.raf)(e);
        },
        a = {
          id: (0, o.raf)(s)
        };
      return a;
    };
  t.bpfrpt_proptype_AnimationTimeoutId = c;
};
