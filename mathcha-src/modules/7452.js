/* module 7452 — 10027 chars */
module.exports = function (e) {
  var t = function (e) {
    "use strict";

    var t = Object.prototype,
      r = t.hasOwnProperty,
      n,
      i = "function" == typeof Symbol ? Symbol : {},
      o = i.iterator || "@@iterator",
      s = i.asyncIterator || "@@asyncIterator",
      a = i.toStringTag || "@@toStringTag";
    function l(e, t, r) {
      return Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), e[t];
    }
    try {
      l({}, "");
    } catch (e) {
      l = function (e, t, r) {
        return e[t] = r;
      };
    }
    function c(e, t, r, n) {
      var i = t && t.prototype instanceof f ? t : f,
        o = Object.create(i.prototype),
        s = new P(n || []);
      return o._invoke = E(e, r, s), o;
    }
    function d(e, t, r) {
      try {
        return {
          type: "normal",
          arg: e.call(t, r)
        };
      } catch (e) {
        return {
          type: "throw",
          arg: e
        };
      }
    }
    e.wrap = c;
    var h = "suspendedStart",
      p = "suspendedYield",
      u = "executing",
      g = "completed",
      m = {};
    function f() {}
    function y() {}
    function v() {}
    var b = {};
    b[o] = function () {
      return this;
    };
    var x = Object.getPrototypeOf,
      C = x && x(x(M([])));
    C && C !== t && r.call(C, o) && (b = C);
    var S = v.prototype = f.prototype = Object.create(b);
    function A(e) {
      ["next", "throw", "return"].forEach(function (t) {
        l(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function w(e, t) {
      function n(i, o, s, a) {
        var l = d(e[i], e, o);
        if ("throw" !== l.type) {
          var c = l.arg,
            h = c.value;
          return h && "object" == typeof h && r.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
            n("next", e, s, a);
          }, function (e) {
            n("throw", e, s, a);
          }) : t.resolve(h).then(function (e) {
            c.value = e, s(c);
          }, function (e) {
            return n("throw", e, s, a);
          });
        }
        a(l.arg);
      }
      var i;
      function o(e, r) {
        function o() {
          return new t(function (t, i) {
            n(e, r, t, i);
          });
        }
        return i = i ? i.then(o, o) : o();
      }
      this._invoke = o;
    }
    function E(e, t, r) {
      var n = h;
      return function i(o, s) {
        if (n === u) throw new Error("Generator is already running");
        if (n === g) {
          if ("throw" === o) throw s;
          return I();
        }
        for (r.method = o, r.arg = s;;) {
          var a = r.delegate;
          if (a) {
            var l = k(a, r);
            if (l) {
              if (l === m) continue;
              return l;
            }
          }
          if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
            if (n === h) throw n = g, r.arg;
            r.dispatchException(r.arg);
          } else "return" === r.method && r.abrupt("return", r.arg);
          n = u;
          var c = d(e, t, r);
          if ("normal" === c.type) {
            if (n = r.done ? g : p, c.arg === m) continue;
            return {
              value: c.arg,
              done: r.done
            };
          }
          "throw" === c.type && (n = g, r.method = "throw", r.arg = c.arg);
        }
      };
    }
    function k(e, t) {
      var r = e.iterator[t.method];
      if (r === n) {
        if (t.delegate = null, "throw" === t.method) {
          if (e.iterator.return && (t.method = "return", t.arg = n, k(e, t), "throw" === t.method)) return m;
          t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return m;
      }
      var i = d(r, e.iterator, t.arg);
      if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, m;
      var o = i.arg;
      return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m);
    }
    function O(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
    }
    function D(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t;
    }
    function P(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(O, this), this.reset(!0);
    }
    function M(e) {
      if (e) {
        var t = e[o];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var i = -1,
            s = function t() {
              for (; ++i < e.length;) if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
              return t.value = n, t.done = !0, t;
            };
          return s.next = s;
        }
      }
      return {
        next: I
      };
    }
    function I() {
      return {
        value: n,
        done: !0
      };
    }
    return y.prototype = S.constructor = v, v.constructor = y, y.displayName = l(v, a, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name));
    }, e.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, l(e, a, "GeneratorFunction")), e.prototype = Object.create(S), e;
    }, e.awrap = function (e) {
      return {
        __await: e
      };
    }, A(w.prototype), w.prototype[s] = function () {
      return this;
    }, e.AsyncIterator = w, e.async = function (t, r, n, i, o) {
      void 0 === o && (o = Promise);
      var s = new w(c(t, r, n, i), o);
      return e.isGeneratorFunction(r) ? s : s.next().then(function (e) {
        return e.done ? e.value : s.next();
      });
    }, A(S), l(S, a, "Generator"), S[o] = function () {
      return this;
    }, S.toString = function () {
      return "[object Generator]";
    }, e.keys = function (e) {
      var t = [];
      for (var r in e) t.push(r);
      return t.reverse(), function r() {
        for (; t.length;) {
          var n = t.pop();
          if (n in e) return r.value = n, r.done = !1, r;
        }
        return r.done = !0, r;
      };
    }, e.values = M, P.prototype = {
      constructor: P,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(D), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n);
      },
      stop: function () {
        this.done = !0;
        var e,
          t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var t = this;
        function i(r, i) {
          return a.type = "throw", a.arg = e, t.next = r, i && (t.method = "next", t.arg = n), !!i;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var s = this.tryEntries[o],
            a = s.completion;
          if ("root" === s.tryLoc) return i("end");
          if (s.tryLoc <= this.prev) {
            var l = r.call(s, "catchLoc"),
              c = r.call(s, "finallyLoc");
            if (l && c) {
              if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
              if (this.prev < s.finallyLoc) return i(s.finallyLoc);
            } else if (l) {
              if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < s.finallyLoc) return i(s.finallyLoc);
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n];
          if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
            var o = i;
            break;
          }
        }
        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
        var s = o ? o.completion : {};
        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(s);
      },
      complete: function (e, t) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m;
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), D(r), m;
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ("throw" === n.type) {
              var i = n.arg;
              D(r);
            }
            return i;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, t, r) {
        return this.delegate = {
          iterator: M(e),
          resultName: t,
          nextLoc: r
        }, "next" === this.method && (this.arg = n), m;
      }
    }, e;
  }(e.exports);
  try {
    regeneratorRuntime = t;
  } catch (e) {
    Function("r", "regeneratorRuntime = r")(t);
  }
};
