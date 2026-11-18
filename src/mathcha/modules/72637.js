/* module 72637 — 2494 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    connectStrokes: () => l,
    flatStrokesToArray: () => h,
    scaleAndSlide: () => p,
    spaceEvenlyStrokes: () => d
  });
  var n = r(2543),
    i = r.n(n),
    o = r(81249),
    s = r.n(o);
  function a(e, t, r) {
    if (void 0 === r && (r = Math.max(Math.round(t - e) + 1, 1)), r < 2) return 1 === r ? [e] : [];
    var n,
      i = Array(r);
    for (n = --r; n >= 0; n--) i[n] = (n * t + (r - n) * e) / r;
    return i;
  }
  function l(e) {
    if (e.length <= 1) return e;
    for (var t = 1, r = [e[0]], t = 1; t < e.length; t++) {
      var n = i().last(r),
        o = e[t];
      c(i().last(n), i().first(o)) ? r[r.length - 1] = i().last(r).concat(o) : r.push(o);
    }
    return r;
  }
  function c(e, t) {
    return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)) < 8;
  }
  function d(e) {
    return e = i().map([0, 1, 2, 3], t => {
      var r = e[t];
      return r ?? [];
    }), i().map(e, e => {
      return e.length <= 1 ? i().map(i().range(20), () => ({
        x: 0,
        y: 0,
        time: 0
      })) : m(e);
      var t;
    });
  }
  function h(e) {
    return i().flatMap(e, e => i().flatMap(e, e => [e.x, e.y]));
  }
  function p(e) {
    var t = i().flatMap(e, e => e),
      r = i().minBy(t, e => e.y).y,
      n = i().maxBy(t, e => e.y).y,
      o = i().minBy(t, e => e.x).x,
      s = i().maxBy(t, e => e.x).x,
      a = i().minBy(t, e => e.time).time,
      l = s - o + 1,
      c = n - r + 1,
      d = 1 / l,
      h = 1 / c,
      p = Math.min(d, h),
      u = l * p / 2,
      g = c * p / 2;
    return i().map(e, e => i().map(e, e => ({
      x: (e.x - o) * p - u,
      y: (e.y - r) * p - g,
      time: e.time - a + 1
    })));
  }
  function u(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function g(e) {
    for (var t = 0; t < e.length - 1; t++) {
      var r;
      e[t] == e[t + 1] && (e[t + 1] += .01);
    }
    return e;
  }
  function m(e) {
    var t = g(i().map(e, e => e.x)),
      r = g(i().map(e, e => e.y)),
      n = g(i().map(e, e => e.time)),
      o = new (s())(n, t),
      l = new (s())(n, r),
      c = a(n[0], n[n.length - 1], 20);
    return i().map(c, e => {
      var i = {
        x: u(o.interpolate(e)),
        y: u(l.interpolate(e)),
        time: e
      };
      if (isNaN(i.x) || isNaN(i.y)) throw console.log("xArr: ", t, "yArr: ", r, "timeArr: ", n), console.log("result: ", i), new Error("stop");
      return i;
    });
  }
};
