/* module 35969 — 19331 chars */
module.exports = function (e) {
  !function t(r, n) {
    e.exports = n();
  }(this, function () {
    return function (e) {
      var t = {};
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
      }
      return r.m = e, r.c = t, r.i = function (e) {
        return e;
      }, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
      }, r.n = function (e) {
        var t = e && e.__esModule ? function t() {
          return e.default;
        } : function t() {
          return e;
        };
        return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "", r(r.s = 8);
    }([function (e, t, r) {
      "use strict";

      e.exports = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    }, function (e, t, r) {
      "use strict";

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }();
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      var o = r(5),
        s = r(7),
        a = r(4),
        l = function () {
          function e(t, r) {
            var n = r.location,
              o = void 0 === n ? 0 : n,
              s = r.distance,
              l = void 0 === s ? 100 : s,
              c = r.threshold,
              d = void 0 === c ? .6 : c,
              h = r.maxPatternLength,
              p = void 0 === h ? 32 : h,
              u = r.isCaseSensitive,
              g = void 0 !== u && u,
              m = r.tokenSeparator,
              f = void 0 === m ? / +/g : m,
              y = r.findAllMatches,
              v = void 0 !== y && y,
              b = r.minMatchCharLength,
              x = void 0 === b ? 1 : b;
            i(this, e), this.options = {
              location: o,
              distance: l,
              threshold: d,
              maxPatternLength: p,
              isCaseSensitive: g,
              tokenSeparator: f,
              findAllMatches: v,
              minMatchCharLength: x
            }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= p && (this.patternAlphabet = a(this.pattern));
          }
          return n(e, [{
            key: "search",
            value: function e(t) {
              if (this.options.isCaseSensitive || (t = t.toLowerCase()), this.pattern === t) return {
                isMatch: !0,
                score: 0,
                matchedIndices: [[0, t.length - 1]]
              };
              var r = this.options,
                n = r.maxPatternLength,
                i = r.tokenSeparator;
              if (this.pattern.length > n) return o(t, this.pattern, i);
              var a = this.options,
                l = a.location,
                c = a.distance,
                d = a.threshold,
                h = a.findAllMatches,
                p = a.minMatchCharLength;
              return s(t, this.pattern, this.patternAlphabet, {
                location: l,
                distance: c,
                threshold: d,
                findAllMatches: h,
                minMatchCharLength: p
              });
            }
          }]), e;
        }();
      e.exports = l;
    }, function (e, t, r) {
      "use strict";

      var n = r(0),
        i = function e(t, r, i) {
          if (r) {
            var o = r.indexOf("."),
              s = r,
              a = null;
            -1 !== o && (s = r.slice(0, o), a = r.slice(o + 1));
            var l = t[s];
            if (null != l) if (a || "string" != typeof l && "number" != typeof l) {
              if (n(l)) for (var c = 0, d = l.length; c < d; c += 1) e(l[c], a, i);else a && e(l, a, i);
            } else i.push(l);
          } else i.push(t);
          return i;
        };
      e.exports = function (e, t) {
        return i(e, t, []);
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function () {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = [], n = -1, i = -1, o = 0, s = e.length; o < s; o += 1) {
          var a = e[o];
          a && -1 === n ? n = o : a || -1 === n || ((i = o - 1) - n + 1 >= t && r.push([n, i]), n = -1);
        }
        return e[o - 1] && o - n >= t && r.push([n, o - 1]), r;
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e) {
        for (var t = {}, r = e.length, n = 0; n < r; n += 1) t[e.charAt(n)] = 0;
        for (var i = 0; i < r; i += 1) t[e.charAt(i)] |= 1 << r - i - 1;
        return t;
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
          n = e.match(new RegExp(t.replace(r, "|"))),
          i = !!n,
          o = [];
        if (i) for (var s = 0, a = n.length; s < a; s += 1) match = n[s], o.push([e.indexOf(match), match.length - 1]);
        return {
          score: i ? .5 : 1,
          isMatch: i,
          matchedIndices: o
        };
      };
    }, function (e, t, r) {
      "use strict";

      e.exports = function (e, t) {
        var r = t.errors,
          n = void 0 === r ? 0 : r,
          i = t.currentLocation,
          o = void 0 === i ? 0 : i,
          s = t.expectedLocation,
          a = void 0 === s ? 0 : s,
          l = t.distance,
          c = void 0 === l ? 100 : l,
          d = n / e.length,
          h = Math.abs(a - o);
        return c ? d + h / c : h ? 1 : d;
      };
    }, function (e, t, r) {
      "use strict";

      var n = r(6),
        i = r(3);
      e.exports = function (e, t, r, o) {
        for (var s = o.location, a = void 0 === s ? 0 : s, l = o.distance, c = void 0 === l ? 100 : l, d = o.threshold, h = void 0 === d ? .6 : d, p = o.findAllMatches, u = void 0 !== p && p, g = o.minMatchCharLength, m = void 0 === g ? 1 : g, f = a, y = e.length, v = h, b = e.indexOf(t, f), x = t.length, C = [], S = 0; S < y; S += 1) C[S] = 0;
        if (-1 != b) {
          var A = n(t, {
            errors: 0,
            currentLocation: b,
            expectedLocation: f,
            distance: c
          });
          if (v = Math.min(A, v), -1 != (b = e.lastIndexOf(t, f + x))) {
            var w = n(t, {
              errors: 0,
              currentLocation: b,
              expectedLocation: f,
              distance: c
            });
            v = Math.min(w, v);
          }
        }
        b = -1;
        for (var E = [], k = 1, O = x + y, D = 1 << x - 1, P = 0; P < x; P += 1) {
          for (var M = 0, I = O; M < I;) {
            var T;
            n(t, {
              errors: P,
              currentLocation: f + I,
              expectedLocation: f,
              distance: c
            }) <= v ? M = I : O = I, I = Math.floor((O - M) / 2 + M);
          }
          O = I;
          var L = Math.max(1, f - I + 1),
            R = u ? y : Math.min(f + I, y) + x,
            B = Array(R + 2),
            F;
          B[R + 1] = (1 << P) - 1;
          for (var j = R; j >= L; j -= 1) {
            var _ = j - 1,
              N = r[e.charAt(_)];
            if (N && (C[_] = 1), B[j] = (B[j + 1] << 1 | 1) & N, 0 !== P && (B[j] |= (E[j + 1] | E[j]) << 1 | 1 | E[j + 1]), B[j] & D && (k = n(t, {
              errors: P,
              currentLocation: _,
              expectedLocation: f,
              distance: c
            })) <= v) {
              if (v = k, (b = _) <= f) break;
              L = Math.max(1, 2 * f - b);
            }
          }
          if (n(t, {
            errors: P + 1,
            currentLocation: f,
            expectedLocation: f,
            distance: c
          }) > v) break;
          E = B;
        }
        return {
          isMatch: b >= 0,
          score: 0 === k ? .001 : k,
          matchedIndices: i(C, m)
        };
      };
    }, function (e, t, r) {
      "use strict";

      var n = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }();
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      var o = r(1),
        s = r(2),
        a = r(0),
        l = function () {
          function e(t, r) {
            var n = r.location,
              o = void 0 === n ? 0 : n,
              a = r.distance,
              l = void 0 === a ? 100 : a,
              c = r.threshold,
              d = void 0 === c ? .6 : c,
              h = r.maxPatternLength,
              p = void 0 === h ? 32 : h,
              u = r.caseSensitive,
              g = void 0 !== u && u,
              m = r.tokenSeparator,
              f = void 0 === m ? / +/g : m,
              y = r.findAllMatches,
              v = void 0 !== y && y,
              b = r.minMatchCharLength,
              x = void 0 === b ? 1 : b,
              C = r.id,
              S = void 0 === C ? null : C,
              A = r.keys,
              w = void 0 === A ? [] : A,
              E = r.shouldSort,
              k = void 0 === E || E,
              O = r.getFn,
              D = void 0 === O ? s : O,
              P = r.sortFn,
              M = void 0 === P ? function (e, t) {
                return e.score - t.score;
              } : P,
              I = r.tokenize,
              T = void 0 !== I && I,
              L = r.matchAllTokens,
              R = void 0 !== L && L,
              B = r.includeMatches,
              F = void 0 !== B && B,
              j = r.includeScore,
              _ = void 0 !== j && j,
              N = r.verbose,
              z = void 0 !== N && N;
            i(this, e), this.options = {
              location: o,
              distance: l,
              threshold: d,
              maxPatternLength: p,
              isCaseSensitive: g,
              tokenSeparator: f,
              findAllMatches: v,
              minMatchCharLength: x,
              id: S,
              keys: w,
              includeMatches: F,
              includeScore: _,
              shouldSort: k,
              getFn: D,
              sortFn: M,
              verbose: z,
              tokenize: T,
              matchAllTokens: R
            }, this.set(t);
          }
          return n(e, [{
            key: "set",
            value: function e(t) {
              return this.list = t, t;
            }
          }, {
            key: "search",
            value: function e(t) {
              this._log('---------\nSearch pattern: "' + t + '"');
              var r = this._prepareSearchers(t),
                n = r.tokenSearchers,
                i = r.fullSearcher,
                o = this._search(n, i),
                s = o.weights,
                a = o.results;
              return this._computeScore(s, a), this.options.shouldSort && this._sort(a), this._format(a);
            }
          }, {
            key: "_prepareSearchers",
            value: function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                r = [],
                n;
              if (this.options.tokenize) for (var i = t.split(this.options.tokenSeparator), s = 0, a = i.length; s < a; s += 1) r.push(new o(i[s], this.options));
              return {
                tokenSearchers: r,
                fullSearcher: new o(t, this.options)
              };
            }
          }, {
            key: "_search",
            value: function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments[1],
                n = this.list,
                i = {},
                o = [];
              if ("string" == typeof n[0]) {
                for (var s = 0, a = n.length; s < a; s += 1) this._analyze({
                  key: "",
                  value: n[s],
                  record: s,
                  index: s
                }, {
                  resultMap: i,
                  results: o,
                  tokenSearchers: t,
                  fullSearcher: r
                });
                return {
                  weights: null,
                  results: o
                };
              }
              for (var l = {}, c = 0, d = n.length; c < d; c += 1) for (var h = n[c], p = 0, u = this.options.keys.length; p < u; p += 1) {
                var g = this.options.keys[p];
                if ("string" != typeof g) {
                  if (l[g.name] = {
                    weight: 1 - g.weight || 1
                  }, g.weight <= 0 || g.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                  g = g.name;
                } else l[g] = {
                  weight: 1
                };
                this._analyze({
                  key: g,
                  value: this.options.getFn(h, g),
                  record: h,
                  index: c
                }, {
                  resultMap: i,
                  results: o,
                  tokenSearchers: t,
                  fullSearcher: r
                });
              }
              return {
                weights: l,
                results: o
              };
            }
          }, {
            key: "_analyze",
            value: function e(t, r) {
              var n = t.key,
                i = t.value,
                o = t.record,
                s = t.index,
                l = r.tokenSearchers,
                c = void 0 === l ? [] : l,
                d = r.fullSearcher,
                h = void 0 === d ? [] : d,
                p = r.resultMap,
                u = void 0 === p ? {} : p,
                g = r.results,
                m = void 0 === g ? [] : g;
              if (null != i) {
                var f = !1,
                  y = -1,
                  v = 0;
                if ("string" == typeof i) {
                  this._log("\nKey: " + ("" === n ? "-" : n));
                  var b = h.search(i);
                  if (this._log('Full text: "' + i + '", score: ' + b.score), this.options.tokenize) {
                    for (var x = i.split(this.options.tokenSeparator), C = [], S = 0; S < c.length; S += 1) {
                      var A = c[S];
                      this._log('\nPattern: "' + A.pattern + '"');
                      for (var w = !1, E = 0; E < x.length; E += 1) {
                        var k = x[E],
                          O = A.search(k),
                          D = {};
                        O.isMatch ? (D[k] = O.score, f = !0, w = !0, C.push(O.score)) : (D[k] = 1, this.options.matchAllTokens || C.push(1)), this._log('Token: "' + k + '", score: ' + D[k]);
                      }
                      w && (v += 1);
                    }
                    y = C[0];
                    for (var P = C.length, M = 1; M < P; M += 1) y += C[M];
                    y /= P, this._log("Token score average:", y);
                  }
                  var I = b.score;
                  y > -1 && (I = (I + y) / 2), this._log("Score average:", I);
                  var T = !this.options.tokenize || !this.options.matchAllTokens || v >= c.length;
                  if (this._log("\nCheck Matches: " + T), (f || b.isMatch) && T) {
                    var L = u[s];
                    L ? L.output.push({
                      key: n,
                      score: I,
                      matchedIndices: b.matchedIndices
                    }) : (u[s] = {
                      item: o,
                      output: [{
                        key: n,
                        score: I,
                        matchedIndices: b.matchedIndices
                      }]
                    }, m.push(u[s]));
                  }
                } else if (a(i)) for (var R = 0, B = i.length; R < B; R += 1) this._analyze({
                  key: n,
                  value: i[R],
                  record: o,
                  index: s
                }, {
                  resultMap: u,
                  results: m,
                  tokenSearchers: c,
                  fullSearcher: h
                });
              }
            }
          }, {
            key: "_computeScore",
            value: function e(t, r) {
              this._log("\n\nComputing score:\n");
              for (var n = 0, i = r.length; n < i; n += 1) {
                for (var o = r[n].output, s = o.length, a = 0, l = 1, c = 0; c < s; c += 1) {
                  var d = o[c].score,
                    h = t ? t[o[c].key].weight : 1,
                    p = d * h;
                  1 !== h ? l = Math.min(l, p) : (o[c].nScore = p, a += p);
                }
                r[n].score = 1 === l ? a / s : l, this._log(r[n]);
              }
            }
          }, {
            key: "_sort",
            value: function e(t) {
              this._log("\n\nSorting...."), t.sort(this.options.sortFn);
            }
          }, {
            key: "_format",
            value: function e(t) {
              var r = [];
              this._log("\n\nOutput:\n\n", t);
              var n = [];
              this.options.includeMatches && n.push(function (e, t) {
                var r = e.output;
                t.matches = [];
                for (var n = 0, i = r.length; n < i; n += 1) {
                  var o = r[n],
                    s = {
                      indices: o.matchedIndices
                    };
                  o.key && (s.key = o.key), t.matches.push(s);
                }
              }), this.options.includeScore && n.push(function (e, t) {
                t.score = e.score;
              });
              for (var i = 0, o = t.length; i < o; i += 1) {
                var s = t[i];
                if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), n.length) {
                  for (var a = {
                      item: s.item
                    }, l = 0, c = n.length; l < c; l += 1) n[l](s, a);
                  r.push(a);
                } else r.push(s.item);
              }
              return r;
            }
          }, {
            key: "_log",
            value: function e() {
              var t;
              this.options.verbose && (t = console).log.apply(t, arguments);
            }
          }]), e;
        }();
      e.exports = l;
    }]);
  });
};
