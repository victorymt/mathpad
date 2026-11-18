/* module 44085 — 1418 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(53576),
    i = r(90646),
    o = function (e) {
      var t = this;
      if (t.instancePool.length) {
        var r = t.instancePool.pop();
        return t.call(r, e), r;
      }
      return new t(e);
    },
    s,
    a,
    l,
    c = function (e) {
      var t = this;
      e instanceof t || n("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e);
    },
    d = 10,
    h = o,
    p,
    u = {
      addPoolingTo: function (e, t) {
        var r = e;
        return r.instancePool = [], r.getPooled = t || h, r.poolSize || (r.poolSize = d), r.release = c, r;
      },
      oneArgumentPooler: o,
      twoArgumentPooler: function (e, t) {
        var r = this;
        if (r.instancePool.length) {
          var n = r.instancePool.pop();
          return r.call(n, e, t), n;
        }
        return new r(e, t);
      },
      threeArgumentPooler: function (e, t, r) {
        var n = this;
        if (n.instancePool.length) {
          var i = n.instancePool.pop();
          return n.call(i, e, t, r), i;
        }
        return new n(e, t, r);
      },
      fourArgumentPooler: function (e, t, r, n) {
        var i = this;
        if (i.instancePool.length) {
          var o = i.instancePool.pop();
          return i.call(o, e, t, r, n), o;
        }
        return new i(e, t, r, n);
      }
    };
  e.exports = u;
};
