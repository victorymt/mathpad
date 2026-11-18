/* module 51504 — 913 chars */
module.exports = function (e) {
  function t() {}
  t.prototype = {
    on: function (e, t, r) {
      var n = this.e || (this.e = {});
      return (n[e] || (n[e] = [])).push({
        fn: t,
        ctx: r
      }), this;
    },
    once: function (e, t, r) {
      var n = this;
      function i() {
        n.off(e, i), t.apply(r, arguments);
      }
      return i._ = t, this.on(e, i, r);
    },
    emit: function (e) {
      for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, t);
      return this;
    },
    off: function (e, t) {
      var r = this.e || (this.e = {}),
        n = r[e],
        i = [];
      if (n && t) for (var o = 0, s = n.length; o < s; o++) n[o].fn !== t && n[o].fn._ !== t && i.push(n[o]);
      return i.length ? r[e] = i : delete r[e], this;
    }
  }, e.exports = t, e.exports.TinyEmitter = t;
};
