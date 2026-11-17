/* module 65606 — 2414 chars */
module.exports = function (e) {
  var t = e.exports = {},
    r,
    n;
  function i() {
    throw new Error("setTimeout has not been defined");
  }
  function o() {
    throw new Error("clearTimeout has not been defined");
  }
  function s(e) {
    if (r === setTimeout) return setTimeout(e, 0);
    if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
    try {
      return r(e, 0);
    } catch (t) {
      try {
        return r.call(null, e, 0);
      } catch (t) {
        return r.call(this, e, 0);
      }
    }
  }
  function a(e) {
    if (n === clearTimeout) return clearTimeout(e);
    if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
    try {
      return n(e);
    } catch (t) {
      try {
        return n.call(null, e);
      } catch (t) {
        return n.call(this, e);
      }
    }
  }
  !function () {
    try {
      r = "function" == typeof setTimeout ? setTimeout : i;
    } catch (e) {
      r = i;
    }
    try {
      n = "function" == typeof clearTimeout ? clearTimeout : o;
    } catch (e) {
      n = o;
    }
  }();
  var l = [],
    c = !1,
    d,
    h = -1;
  function p() {
    c && d && (c = !1, d.length ? l = d.concat(l) : h = -1, l.length && u());
  }
  function u() {
    if (!c) {
      var e = s(p);
      c = !0;
      for (var t = l.length; t;) {
        for (d = l, l = []; ++h < t;) d && d[h].run();
        h = -1, t = l.length;
      }
      d = null, c = !1, a(e);
    }
  }
  function g(e, t) {
    this.fun = e, this.array = t;
  }
  function m() {}
  t.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    l.push(new g(e, t)), 1 !== l.length || c || s(u);
  }, g.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = m, t.addListener = m, t.once = m, t.off = m, t.removeListener = m, t.removeAllListeners = m, t.emit = m, t.prependListener = m, t.prependOnceListener = m, t.listeners = function (e) {
    return [];
  }, t.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, t.cwd = function () {
    return "/";
  }, t.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, t.umask = function () {
    return 0;
  };
};
