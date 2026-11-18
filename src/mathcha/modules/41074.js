/* module 41074 — 367469 chars */
module.exports = function (e, t, r) {
  var n,
    i,
    o = function (o, s) {
      var a = (o = o || r(2965)).window,
        l = o.document,
        c = new function () {
          var e = /^(statics|enumerable|beans|preserve)$/,
            t = [],
            r = t.slice,
            n = Object.create,
            i = Object.getOwnPropertyDescriptor,
            o = Object.defineProperty,
            a = t.forEach || function (e, t) {
              for (var r = 0, n = this.length; r < n; r++) e.call(t, this[r], r, this);
            },
            l = function (e, t) {
              for (var r in this) this.hasOwnProperty(r) && e.call(t, this[r], r, this);
            },
            c = Object.assign || function (e) {
              for (var t = 1, r = arguments.length; t < r; t++) {
                var n = arguments[t];
                for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
              }
              return e;
            },
            d = function (e, t, r) {
              if (e) {
                var n = i(e, "length");
                (n && "number" == typeof n.value ? a : l).call(e, t, r = r || e);
              }
              return r;
            };
          function h(t, r, n, s, a) {
            var l = {};
            function c(e, c) {
              "string" == typeof (c = c || (c = i(r, e)) && (c.get ? c : c.value)) && "#" === c[0] && (c = t[c.substring(1)] || c);
              var d = "function" == typeof c,
                h = c,
                u = a || d && !c.base ? c && c.get ? e in t : t[e] : null,
                g;
              a && u || (d && u && (c.base = u), d && !1 !== s && (g = e.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (l[g[3].toLowerCase() + g[4]] = g[2]), h && !d && h.get && "function" == typeof h.get && p.isPlainObject(h) || (h = {
                value: h,
                writable: !0
              }), (i(t, e) || {
                configurable: !0
              }).configurable && (h.configurable = !0, h.enumerable = null != n ? n : !g), o(t, e, h));
            }
            if (r) {
              for (var d in r) r.hasOwnProperty(d) && !e.test(d) && c(d);
              for (var d in l) {
                var h = l[d],
                  u = t["set" + h],
                  g = t["get" + h] || u && t["is" + h];
                !g || !0 !== s && 0 !== g.length || c(d, {
                  get: g,
                  set: u
                });
              }
            }
            return t;
          }
          function p() {
            for (var e = 0, t = arguments.length; e < t; e++) {
              var r = arguments[e];
              r && c(this, r);
            }
            return this;
          }
          return h(p, {
            inject: function (e) {
              if (e) {
                var t = !0 === e.statics ? e : e.statics,
                  r = e.beans,
                  n = e.preserve;
                t !== e && h(this.prototype, e, e.enumerable, r, n), h(this, t, null, r, n);
              }
              for (var i = 1, o = arguments.length; i < o; i++) this.inject(arguments[i]);
              return this;
            },
            extend: function () {
              for (var e = this, t, r, i = 0, s, a = arguments.length; i < a && (!t || !r); i++) s = arguments[i], t = t || s.initialize, r = r || s.prototype;
              return t = t || function () {
                e.apply(this, arguments);
              }, r = t.prototype = r || n(this.prototype), o(r, "constructor", {
                value: t,
                writable: !0,
                configurable: !0
              }), h(t, this), arguments.length && this.inject.apply(t, arguments), t.base = e, t;
            }
          }).inject({
            enumerable: !1,
            initialize: p,
            set: p,
            inject: function () {
              for (var e = 0, t = arguments.length; e < t; e++) {
                var r = arguments[e];
                r && h(this, r, r.enumerable, r.beans, r.preserve);
              }
              return this;
            },
            extend: function () {
              var e = n(this);
              return e.inject.apply(e, arguments);
            },
            each: function (e, t) {
              return d(this, e, t);
            },
            clone: function () {
              return new this.constructor(this);
            },
            statics: {
              set: c,
              each: d,
              create: n,
              define: o,
              describe: i,
              clone: function (e) {
                return c(new e.constructor(), e);
              },
              isPlainObject: function (e) {
                var t = null != e && e.constructor;
                return t && (t === Object || t === p || "Object" === t.name);
              },
              pick: function (e, t) {
                return e !== s ? e : t;
              },
              slice: function (e, t, n) {
                return r.call(e, t, n);
              }
            }
          });
        }();
      e.exports = c, c.inject({
        enumerable: !1,
        toString: function () {
          return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + c.each(this, function (e, t) {
            if (!/^_/.test(t)) {
              var r = typeof e;
              this.push(t + ": " + ("number" === r ? u.instance.number(e) : "string" === r ? "'" + e + "'" : e));
            }
          }, []).join(", ") + " }";
        },
        getClassName: function () {
          return this._class || "";
        },
        importJSON: function (e) {
          return c.importJSON(e, this);
        },
        exportJSON: function (e) {
          return c.exportJSON(this, e);
        },
        toJSON: function () {
          return c.serialize(this);
        },
        set: function (e, t) {
          return e && c.filter(this, e, t, this._prioritize), this;
        }
      }, {
        beans: !1,
        statics: {
          exports: {},
          extend: function e() {
            var t = e.base.apply(this, arguments),
              r = t.prototype._class;
            return r && !c.exports[r] && (c.exports[r] = t), t;
          },
          equals: function (e, t) {
            if (e === t) return !0;
            if (e && e.equals) return e.equals(t);
            if (t && t.equals) return t.equals(e);
            if (e && t && "object" == typeof e && "object" == typeof t) {
              if (Array.isArray(e) && Array.isArray(t)) {
                var r;
                if ((r = e.length) !== t.length) return !1;
                for (; r--;) if (!c.equals(e[r], t[r])) return !1;
              } else {
                var n = Object.keys(e),
                  r;
                if ((r = n.length) !== Object.keys(t).length) return !1;
                for (; r--;) {
                  var i = n[r];
                  if (!t.hasOwnProperty(i) || !c.equals(e[i], t[i])) return !1;
                }
              }
              return !0;
            }
            return !1;
          },
          read: function (e, t, r, n) {
            if (this === c) {
              var i = this.peek(e, t);
              return e.__index++, i;
            }
            var o = this.prototype,
              a = o._readIndex,
              l = t || a && e.__index || 0,
              d = e.length,
              h = e[l];
            if (n = n || d - l, h instanceof this || r && r.readNull && null == h && n <= 1) return a && (e.__index = l + 1), h && r && r.clone ? h.clone() : h;
            if (h = c.create(o), a && (h.__read = !0), h = h.initialize.apply(h, l > 0 || l + n < d ? c.slice(e, l, l + n) : e) || h, a) {
              e.__index = l + h.__read;
              var p = h.__filtered;
              p && (e.__filtered = p, h.__filtered = s), h.__read = s;
            }
            return h;
          },
          peek: function (e, t) {
            return e[e.__index = t || e.__index || 0];
          },
          remain: function (e) {
            return e.length - (e.__index || 0);
          },
          readList: function (e, t, r, n) {
            for (var i = [], o, s = t || 0, a = n ? s + n : e.length, l = s; l < a; l++) i.push(Array.isArray(o = e[l]) ? this.read(o, 0, r) : this.read(e, l, r, 1));
            return i;
          },
          readNamed: function (e, t, r, n, i) {
            var o = this.getNamed(e, t),
              a = o !== s;
            if (a) {
              var l = e.__filtered;
              l || ((l = e.__filtered = c.create(e[0])).__unfiltered = e[0]), l[t] = s;
            }
            var d = a ? [o] : e,
              h;
            return this.read(d, r, n, i);
          },
          getNamed: function (e, t) {
            var r = e[0];
            if (e._hasObject === s && (e._hasObject = 1 === e.length && c.isPlainObject(r)), e._hasObject) return t ? r[t] : e.__filtered || r;
          },
          hasNamed: function (e, t) {
            return !!this.getNamed(e, t);
          },
          filter: function (e, t, r, n) {
            var i;
            function o(n) {
              if (!(r && n in r || i && n in i)) {
                var o = t[n];
                o !== s && (e[n] = o);
              }
            }
            if (n) {
              for (var a = {}, l = 0, c, d = n.length; l < d; l++) (c = n[l]) in t && (o(c), a[c] = !0);
              i = a;
            }
            return Object.keys(t.__unfiltered || t).forEach(o), e;
          },
          isPlainValue: function (e, t) {
            return c.isPlainObject(e) || Array.isArray(e) || t && "string" == typeof e;
          },
          serialize: function (e, t, r, n) {
            t = t || {};
            var i = !n,
              o;
            if (i && (t.formatter = new u(t.precision), n = {
              length: 0,
              definitions: {},
              references: {},
              add: function (e, t) {
                var r = "#" + e._id,
                  n = this.references[r];
                if (!n) {
                  this.length++;
                  var i = t.call(e),
                    o = e._class;
                  o && i[0] !== o && i.unshift(o), this.definitions[r] = i, n = this.references[r] = [r];
                }
                return n;
              }
            }), e && e._serialize) {
              o = e._serialize(t, n);
              var s = e._class;
              !s || e._compactSerialize || !i && r || o[0] === s || o.unshift(s);
            } else if (Array.isArray(e)) {
              o = [];
              for (var a = 0, l = e.length; a < l; a++) o[a] = c.serialize(e[a], t, r, n);
            } else if (c.isPlainObject(e)) {
              o = {};
              for (var d = Object.keys(e), a = 0, l = d.length; a < l; a++) {
                var h = d[a];
                o[h] = c.serialize(e[h], t, r, n);
              }
            } else o = "number" == typeof e ? t.formatter.number(e, t.precision) : e;
            return i && n.length > 0 ? [["dictionary", n.definitions], o] : o;
          },
          deserialize: function (e, t, r, n, i) {
            var o = e,
              s = !r,
              a = s && e && e.length && "dictionary" === e[0][0];
            if (r = r || {}, Array.isArray(e)) {
              var l = e[0],
                d = "dictionary" === l;
              if (1 == e.length && /^#/.test(l)) return r.dictionary[l];
              o = [];
              for (var h = (l = c.exports[l]) ? 1 : 0, p = e.length; h < p; h++) o.push(c.deserialize(e[h], t, r, d, a));
              if (l) {
                var u = o;
                o = t ? t(l, u, s || i) : new l(u);
              }
            } else if (c.isPlainObject(e)) for (var g in o = {}, n && (r.dictionary = o), e) o[g] = c.deserialize(e[g], t, r);
            return a ? o[1] : o;
          },
          exportJSON: function (e, t) {
            var r = c.serialize(e, t);
            return t && 0 == t.asString ? r : JSON.stringify(r);
          },
          importJSON: function (e, t) {
            return c.deserialize("string" == typeof e ? JSON.parse(e) : e, function (e, r, n) {
              var i = n && t && t.constructor === e,
                o = i ? t : c.create(e.prototype);
              if (1 === r.length && o instanceof E && (i || !(o instanceof O))) {
                var s = r[0];
                c.isPlainObject(s) && (s.insert = !1, i && (r = r.concat([{
                  insert: !0
                }])));
              }
              return (i ? o.set : e).apply(o, r), i && (t = null), o;
            });
          },
          push: function (e, t) {
            var r = t.length;
            if (r < 4096) e.push.apply(e, t);else {
              var n = e.length;
              e.length += r;
              for (var i = 0; i < r; i++) e[n + i] = t[i];
            }
            return e;
          },
          splice: function (e, t, r, n) {
            var i = t && t.length,
              o = r === s;
            (r = o ? e.length : r) > e.length && (r = e.length);
            for (var a = 0; a < i; a++) t[a]._index = r + a;
            if (o) return c.push(e, t), [];
            var l = [r, n];
            t && c.push(l, t);
            for (var d = e.splice.apply(e, l), a = 0, h = d.length; a < h; a++) d[a]._index = s;
            for (var a = r + i, h = e.length; a < h; a++) e[a]._index = a;
            return d;
          },
          capitalize: function (e) {
            return e.replace(/\b[a-z]/g, function (e) {
              return e.toUpperCase();
            });
          },
          camelize: function (e) {
            return e.replace(/-(.)/g, function (e, t) {
              return t.toUpperCase();
            });
          },
          hyphenate: function (e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          }
        }
      });
      var d = {
          on: function (e, t) {
            if ("string" != typeof e) c.each(e, function (e, t) {
              this.on(t, e);
            }, this);else {
              var r = this._eventTypes,
                n = r && r[e],
                i = this._callbacks = this._callbacks || {};
              -1 === (i = i[e] = i[e] || []).indexOf(t) && (i.push(t), n && n.install && 1 === i.length && n.install.call(this, e));
            }
            return this;
          },
          off: function (e, t) {
            if ("string" == typeof e) {
              var r = this._eventTypes,
                n = r && r[e],
                i = this._callbacks && this._callbacks[e],
                o;
              return i && (!t || -1 !== (o = i.indexOf(t)) && 1 === i.length ? (n && n.uninstall && n.uninstall.call(this, e), delete this._callbacks[e]) : -1 !== o && i.splice(o, 1)), this;
            }
            c.each(e, function (e, t) {
              this.off(t, e);
            }, this);
          },
          once: function (e, t) {
            return this.on(e, function r() {
              t.apply(this, arguments), this.off(e, r);
            });
          },
          emit: function (e, t) {
            var r = this._callbacks && this._callbacks[e];
            if (!r) return !1;
            var n = c.slice(arguments, 1),
              i = t && t.target && !t.currentTarget;
            r = r.slice(), i && (t.currentTarget = this);
            for (var o = 0, s = r.length; o < s; o++) if (0 == r[o].apply(this, n)) {
              t && t.stop && t.stop();
              break;
            }
            return i && delete t.currentTarget, !0;
          },
          responds: function (e) {
            return !(!this._callbacks || !this._callbacks[e]);
          },
          attach: "#on",
          detach: "#off",
          fire: "#emit",
          _installEvents: function (e) {
            var t = this._eventTypes,
              r = this._callbacks,
              n = e ? "install" : "uninstall";
            if (t) for (var i in r) if (r[i].length > 0) {
              var o = t[i],
                s = o && o[n];
              s && s.call(this, i);
            }
          },
          statics: {
            inject: function e(t) {
              var r = t._events;
              if (r) {
                var n = {};
                c.each(r, function (e, r) {
                  var i = "string" == typeof e,
                    o = i ? e : r,
                    s = c.capitalize(o),
                    a = o.substring(2).toLowerCase();
                  n[a] = i ? {} : e, o = "_" + o, t["get" + s] = function () {
                    return this[o];
                  }, t["set" + s] = function (e) {
                    var t = this[o];
                    t && this.off(a, t), e && this.on(a, e), this[o] = e;
                  };
                }), t._eventTypes = n;
              }
              return e.base.apply(this, arguments);
            }
          }
        },
        h = c.extend({
          _class: "PaperScope",
          initialize: function e() {
            de = this, this.settings = new c({
              applyMatrix: !0,
              insertItems: !0,
              handleSize: 4,
              hitTolerance: 0
            }), this.project = null, this.projects = [], this.tools = [], this._id = e._id++, e._scopes[this._id] = this;
            var t = e.prototype;
            if (!this.support) {
              var r = se.getContext(1, 1) || {};
              t.support = {
                nativeDash: "setLineDash" in r || "mozDash" in r,
                nativeBlendModes: ae.nativeModes
              }, se.release(r);
            }
            if (!this.agent) {
              var n = o.navigator.userAgent.toLowerCase(),
                i = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(n) || [])[0],
                s = "darwin" === i ? "mac" : i,
                a = t.agent = t.browser = {
                  platform: s
                };
              s && (a[s] = !0), n.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function (e, t, r, n, i) {
                if (!a.chrome) {
                  var o = "opera" === t ? n : /^(node|trident)$/.test(t) ? i : r;
                  a.version = o, a.versionNumber = parseFloat(o), t = {
                    trident: "msie",
                    jsdom: "node"
                  }[t] || t, a.name = t, a[t] = !0;
                }
              }), a.chrome && delete a.webkit, a.atom && delete a.chrome;
            }
          },
          version: "0.12.3",
          getView: function () {
            var e = this.project;
            return e && e._view;
          },
          getPaper: function () {
            return this;
          },
          execute: function (e, t) {},
          install: function (e) {
            var t = this;
            for (var r in c.each(["project", "view", "tool"], function (r) {
              c.define(e, r, {
                configurable: !0,
                get: function () {
                  return t[r];
                }
              });
            }), this) !/^_/.test(r) && this[r] && (e[r] = this[r]);
          },
          setup: function (e) {
            return de = this, this.project = new w(e), this;
          },
          createCanvas: function (e, t) {
            return se.getCanvas(e, t);
          },
          activate: function () {
            de = this;
          },
          clear: function () {
            for (var e = this.projects, t = this.tools, r = e.length - 1; r >= 0; r--) e[r].remove();
            for (var r = t.length - 1; r >= 0; r--) t[r].remove();
          },
          remove: function () {
            this.clear(), delete h._scopes[this._id];
          },
          statics: new function () {
            function e(e) {
              return e += "Attribute", function (t, r) {
                return t[e](r) || t[e]("data-paper-" + r);
              };
            }
            return {
              _scopes: {},
              _id: 0,
              get: function (e) {
                return this._scopes[e] || null;
              },
              getAttribute: e("get"),
              hasAttribute: e("has")
            };
          }()
        }),
        p = c.extend(d, {
          initialize: function (e) {
            this._scope = de, this._index = this._scope[this._list].push(this) - 1, !e && this._scope[this._reference] || this.activate();
          },
          activate: function () {
            if (!this._scope) return !1;
            var e = this._scope[this._reference];
            return e && e !== this && e.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", e), !0;
          },
          isActive: function () {
            return this._scope[this._reference] === this;
          },
          remove: function () {
            return null != this._index && (c.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0);
          },
          getView: function () {
            return this._scope.getView();
          }
        }),
        u = c.extend({
          initialize: function (e) {
            this.precision = c.pick(e, 5), this.multiplier = Math.pow(10, this.precision);
          },
          number: function (e) {
            return this.precision < 16 ? Math.round(e * this.multiplier) / this.multiplier : e;
          },
          pair: function (e, t, r) {
            return this.number(e) + (r || ",") + this.number(t);
          },
          point: function (e, t) {
            return this.number(e.x) + (t || ",") + this.number(e.y);
          },
          size: function (e, t) {
            return this.number(e.width) + (t || ",") + this.number(e.height);
          },
          rectangle: function (e, t) {
            return this.point(e, t) + (t || ",") + this.size(e, t);
          }
        });
      u.instance = new u();
      var g = new function () {
          var e = [[.5773502691896257], [0, .7745966692414834], [.33998104358485626, .8611363115940526], [0, .5384693101056831, .906179845938664], [.2386191860831969, .6612093864662645, .932469514203152], [0, .4058451513773972, .7415311855993945, .9491079123427585], [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363], [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261], [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717], [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057], [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192], [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881], [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123], [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854], [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]],
            t = [[1], [.8888888888888888, .5555555555555556], [.6521451548625461, .34785484513745385], [.5688888888888889, .47862867049936647, .23692688505618908], [.46791393457269104, .3607615730481386, .17132449237917036], [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697], [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626], [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441], [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814], [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366], [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183], [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588], [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186], [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727], [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]],
            r = Math.abs,
            n = Math.sqrt,
            i = Math.pow,
            o = Math.log2 || function (e) {
              return Math.log(e) * Math.LOG2E;
            },
            s = 1e-12,
            a = 112e-18;
          function l(e, t, r) {
            return e < t ? t : e > r ? r : e;
          }
          function c(e, t, n) {
            function i(e) {
              var t = 134217729 * e,
                r,
                n = e - t + t,
                i;
              return [n, e - n];
            }
            var o = t * t - e * n,
              s = t * t + e * n;
            if (3 * r(o) < s) {
              var a = i(e),
                l = i(t),
                c = i(n),
                d = t * t,
                h,
                p = e * n,
                u;
              o = d - p + (l[0] * l[0] - d + 2 * l[0] * l[1] + l[1] * l[1] - (a[0] * c[0] - p + a[0] * c[1] + a[1] * c[0] + a[1] * c[1]));
            }
            return o;
          }
          function d() {
            var e = Math.max.apply(Math, arguments);
            return e && (e < 1e-8 || e > 1e8) ? i(2, -Math.round(o(e))) : 0;
          }
          return {
            EPSILON: s,
            MACHINE_EPSILON: a,
            CURVETIME_EPSILON: 1e-8,
            GEOMETRIC_EPSILON: 1e-7,
            TRIGONOMETRIC_EPSILON: 1e-8,
            KAPPA: 4 * (n(2) - 1) / 3,
            isZero: function (e) {
              return e >= -1e-12 && e <= s;
            },
            clamp: l,
            integrate: function (r, n, i, o) {
              for (var s = e[o - 2], a = t[o - 2], l = .5 * (i - n), c = l + n, d = 0, h = o + 1 >> 1, p = 1 & o ? a[d++] * r(c) : 0; d < h;) {
                var u = l * s[d];
                p += a[d++] * (r(c + u) + r(c - u));
              }
              return l * p;
            },
            findRoot: function (e, t, n, i, o, s, a) {
              for (var c = 0; c < s; c++) {
                var d = e(n),
                  h = d / t(n),
                  p = n - h;
                if (r(h) < a) {
                  n = p;
                  break;
                }
                d > 0 ? (o = n, n = p <= i ? .5 * (i + o) : p) : (i = n, n = p >= o ? .5 * (i + o) : p);
              }
              return l(n, i, o);
            },
            solveQuadratic: function (e, t, i, o, h, p) {
              var u,
                g = 1 / 0;
              if (r(e) < s) {
                if (r(t) < s) return r(i) < s ? -1 : 0;
                u = -i / t;
              } else {
                var m = c(e, t *= -.5, i);
                if (m && r(m) < a) {
                  var f = d(r(e), r(t), r(i));
                  f && (m = c(e *= f, t *= f, i *= f));
                }
                if (m >= -112e-18) {
                  var y = m < 0 ? 0 : n(m),
                    v = t + (t < 0 ? -y : y);
                  0 === v ? g = -(u = i / e) : (u = v / e, g = i / v);
                }
              }
              var b = 0,
                x = null == h,
                C = h - s,
                S = p + s;
              return isFinite(u) && (x || u > C && u < S) && (o[b++] = x ? u : l(u, h, p)), g !== u && isFinite(g) && (x || g > C && g < S) && (o[b++] = x ? g : l(g, h, p)), b;
            },
            solveCubic: function (e, t, o, c, h, p, u) {
              var m = d(r(e), r(t), r(o), r(c)),
                f,
                y,
                v,
                b,
                x;
              function C(r) {
                var n = e * (f = r);
                b = (n + (y = n + t)) * f + (v = y * f + o), x = v * f + c;
              }
              if (m && (e *= m, t *= m, o *= m, c *= m), r(e) < s) e = t, y = o, v = c, f = 1 / 0;else if (r(c) < s) y = t, v = o, f = 0;else {
                C(-t / e / 3);
                var S = x / e,
                  A = i(r(S), 1 / 3),
                  w = S < 0 ? -1 : 1,
                  E = -b / e,
                  k = E > 0 ? 1.324717957244746 * Math.max(A, n(E)) : A,
                  O = f - w * k;
                if (O !== f) {
                  do {
                    C(O), O = 0 === b ? f : f - x / b / (1 + a);
                  } while (w * O > w * f);
                  r(e) * f * f > r(c / f) && (y = ((v = -c / f) - o) / f);
                }
              }
              var D = g.solveQuadratic(e, y, v, h, p, u),
                P = null == p;
              return isFinite(f) && (0 === D || D > 0 && f !== h[0] && f !== h[1]) && (P || f > p - s && f < u + s) && (h[D++] = P ? f : l(f, p, u)), D;
            }
          };
        }(),
        m = {
          _id: 1,
          _pools: {},
          get: function (e) {
            if (e) {
              var t = this._pools[e];
              return t || (t = this._pools[e] = {
                _id: 1
              }), t._id++;
            }
            return this._id++;
          }
        },
        f = c.extend({
          _class: "Point",
          _readIndex: !0,
          initialize: function e(t, r) {
            var n = typeof t,
              i = this.__read,
              o = 0;
            if ("number" === n) {
              var s = "number" == typeof r;
              this._set(t, s ? r : t), i && (o = s ? 2 : 1);
            } else if ("undefined" === n || null === t) this._set(0, 0), i && (o = null === t ? 1 : 0);else {
              var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
              o = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "x" in a ? this._set(a.x || 0, a.y || 0) : "width" in a ? this._set(a.width || 0, a.height || 0) : "angle" in a ? (this._set(a.length || 0, 0), this.setAngle(a.angle || 0)) : (this._set(0, 0), o = 0);
            }
            return i && (this.__read = o), this;
          },
          set: "#initialize",
          _set: function (e, t) {
            return this.x = e, this.y = t, this;
          },
          equals: function (e) {
            return this === e || e && (this.x === e.x && this.y === e.y || Array.isArray(e) && this.x === e[0] && this.y === e[1]) || !1;
          },
          clone: function () {
            return new f(this.x, this.y);
          },
          toString: function () {
            var e = u.instance;
            return "{ x: " + e.number(this.x) + ", y: " + e.number(this.y) + " }";
          },
          _serialize: function (e) {
            var t = e.formatter;
            return [t.number(this.x), t.number(this.y)];
          },
          getLength: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          },
          setLength: function (e) {
            if (this.isZero()) {
              var t = this._angle || 0;
              this._set(Math.cos(t) * e, Math.sin(t) * e);
            } else {
              var r = e / this.getLength();
              g.isZero(r) && this.getAngle(), this._set(this.x * r, this.y * r);
            }
          },
          getAngle: function () {
            return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI;
          },
          setAngle: function (e) {
            this.setAngleInRadians.call(this, e * Math.PI / 180);
          },
          getAngleInDegrees: "#getAngle",
          setAngleInDegrees: "#setAngle",
          getAngleInRadians: function () {
            if (arguments.length) {
              var e = f.read(arguments),
                t = this.getLength() * e.getLength();
              if (g.isZero(t)) return NaN;
              var r = this.dot(e) / t;
              return Math.acos(r < -1 ? -1 : r > 1 ? 1 : r);
            }
            return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x);
          },
          setAngleInRadians: function (e) {
            if (this._angle = e, !this.isZero()) {
              var t = this.getLength();
              this._set(Math.cos(e) * t, Math.sin(e) * t);
            }
          },
          getQuadrant: function () {
            return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
          }
        }, {
          beans: !1,
          getDirectedAngle: function () {
            var e = f.read(arguments);
            return 180 * Math.atan2(this.cross(e), this.dot(e)) / Math.PI;
          },
          getDistance: function () {
            var e = f.read(arguments),
              t = e.x - this.x,
              r = e.y - this.y,
              n = t * t + r * r,
              i;
            return c.read(arguments) ? n : Math.sqrt(n);
          },
          normalize: function (e) {
            e === s && (e = 1);
            var t = this.getLength(),
              r = 0 !== t ? e / t : 0,
              n = new f(this.x * r, this.y * r);
            return r >= 0 && (n._angle = this._angle), n;
          },
          rotate: function (e, t) {
            if (0 === e) return this.clone();
            e = e * Math.PI / 180;
            var r = t ? this.subtract(t) : this,
              n = Math.sin(e),
              i = Math.cos(e);
            return r = new f(r.x * i - r.y * n, r.x * n + r.y * i), t ? r.add(t) : r;
          },
          transform: function (e) {
            return e ? e._transformPoint(this) : this;
          },
          add: function () {
            var e = f.read(arguments);
            return new f(this.x + e.x, this.y + e.y);
          },
          subtract: function () {
            var e = f.read(arguments);
            return new f(this.x - e.x, this.y - e.y);
          },
          multiply: function () {
            var e = f.read(arguments);
            return new f(this.x * e.x, this.y * e.y);
          },
          divide: function () {
            var e = f.read(arguments);
            return new f(this.x / e.x, this.y / e.y);
          },
          modulo: function () {
            var e = f.read(arguments);
            return new f(this.x % e.x, this.y % e.y);
          },
          negate: function () {
            return new f(-this.x, -this.y);
          },
          isInside: function () {
            return x.read(arguments).contains(this);
          },
          isClose: function () {
            var e = f.read(arguments),
              t = c.read(arguments);
            return this.getDistance(e) <= t;
          },
          isCollinear: function () {
            var e = f.read(arguments);
            return f.isCollinear(this.x, this.y, e.x, e.y);
          },
          isColinear: "#isCollinear",
          isOrthogonal: function () {
            var e = f.read(arguments);
            return f.isOrthogonal(this.x, this.y, e.x, e.y);
          },
          isZero: function () {
            var e = g.isZero;
            return e(this.x) && e(this.y);
          },
          isNaN: function () {
            return isNaN(this.x) || isNaN(this.y);
          },
          isInQuadrant: function (e) {
            return this.x * (e > 1 && e < 4 ? -1 : 1) >= 0 && this.y * (e > 2 ? -1 : 1) >= 0;
          },
          dot: function () {
            var e = f.read(arguments);
            return this.x * e.x + this.y * e.y;
          },
          cross: function () {
            var e = f.read(arguments);
            return this.x * e.y - this.y * e.x;
          },
          project: function () {
            var e = f.read(arguments),
              t = e.isZero() ? 0 : this.dot(e) / e.dot(e);
            return new f(e.x * t, e.y * t);
          },
          statics: {
            min: function () {
              var e = f.read(arguments),
                t = f.read(arguments);
              return new f(Math.min(e.x, t.x), Math.min(e.y, t.y));
            },
            max: function () {
              var e = f.read(arguments),
                t = f.read(arguments);
              return new f(Math.max(e.x, t.x), Math.max(e.y, t.y));
            },
            random: function () {
              return new f(Math.random(), Math.random());
            },
            isCollinear: function (e, t, r, n) {
              return Math.abs(e * n - t * r) <= 1e-8 * Math.sqrt((e * e + t * t) * (r * r + n * n));
            },
            isOrthogonal: function (e, t, r, n) {
              return Math.abs(e * r + t * n) <= 1e-8 * Math.sqrt((e * e + t * t) * (r * r + n * n));
            }
          }
        }, c.each(["round", "ceil", "floor", "abs"], function (e) {
          var t = Math[e];
          this[e] = function () {
            return new f(t(this.x), t(this.y));
          };
        }, {})),
        y = f.extend({
          initialize: function e(t, r, n, i) {
            this._x = t, this._y = r, this._owner = n, this._setter = i;
          },
          _set: function (e, t, r) {
            return this._x = e, this._y = t, r || this._owner[this._setter](this), this;
          },
          getX: function () {
            return this._x;
          },
          setX: function (e) {
            this._x = e, this._owner[this._setter](this);
          },
          getY: function () {
            return this._y;
          },
          setY: function (e) {
            this._y = e, this._owner[this._setter](this);
          },
          isSelected: function () {
            return !!(this._owner._selection & this._getSelection());
          },
          setSelected: function (e) {
            this._owner._changeSelection(this._getSelection(), e);
          },
          _getSelection: function () {
            return "setPosition" === this._setter ? 4 : 0;
          }
        }),
        v = c.extend({
          _class: "Size",
          _readIndex: !0,
          initialize: function e(t, r) {
            var n = typeof t,
              i = this.__read,
              o = 0;
            if ("number" === n) {
              var s = "number" == typeof r;
              this._set(t, s ? r : t), i && (o = s ? 2 : 1);
            } else if ("undefined" === n || null === t) this._set(0, 0), i && (o = null === t ? 1 : 0);else {
              var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
              o = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "width" in a ? this._set(a.width || 0, a.height || 0) : "x" in a ? this._set(a.x || 0, a.y || 0) : (this._set(0, 0), o = 0);
            }
            return i && (this.__read = o), this;
          },
          set: "#initialize",
          _set: function (e, t) {
            return this.width = e, this.height = t, this;
          },
          equals: function (e) {
            return e === this || e && (this.width === e.width && this.height === e.height || Array.isArray(e) && this.width === e[0] && this.height === e[1]) || !1;
          },
          clone: function () {
            return new v(this.width, this.height);
          },
          toString: function () {
            var e = u.instance;
            return "{ width: " + e.number(this.width) + ", height: " + e.number(this.height) + " }";
          },
          _serialize: function (e) {
            var t = e.formatter;
            return [t.number(this.width), t.number(this.height)];
          },
          add: function () {
            var e = v.read(arguments);
            return new v(this.width + e.width, this.height + e.height);
          },
          subtract: function () {
            var e = v.read(arguments);
            return new v(this.width - e.width, this.height - e.height);
          },
          multiply: function () {
            var e = v.read(arguments);
            return new v(this.width * e.width, this.height * e.height);
          },
          divide: function () {
            var e = v.read(arguments);
            return new v(this.width / e.width, this.height / e.height);
          },
          modulo: function () {
            var e = v.read(arguments);
            return new v(this.width % e.width, this.height % e.height);
          },
          negate: function () {
            return new v(-this.width, -this.height);
          },
          isZero: function () {
            var e = g.isZero;
            return e(this.width) && e(this.height);
          },
          isNaN: function () {
            return isNaN(this.width) || isNaN(this.height);
          },
          statics: {
            min: function (e, t) {
              return new v(Math.min(e.width, t.width), Math.min(e.height, t.height));
            },
            max: function (e, t) {
              return new v(Math.max(e.width, t.width), Math.max(e.height, t.height));
            },
            random: function () {
              return new v(Math.random(), Math.random());
            }
          }
        }, c.each(["round", "ceil", "floor", "abs"], function (e) {
          var t = Math[e];
          this[e] = function () {
            return new v(t(this.width), t(this.height));
          };
        }, {})),
        b = v.extend({
          initialize: function e(t, r, n, i) {
            this._width = t, this._height = r, this._owner = n, this._setter = i;
          },
          _set: function (e, t, r) {
            return this._width = e, this._height = t, r || this._owner[this._setter](this), this;
          },
          getWidth: function () {
            return this._width;
          },
          setWidth: function (e) {
            this._width = e, this._owner[this._setter](this);
          },
          getHeight: function () {
            return this._height;
          },
          setHeight: function (e) {
            this._height = e, this._owner[this._setter](this);
          }
        }),
        x = c.extend({
          _class: "Rectangle",
          _readIndex: !0,
          beans: !0,
          initialize: function e(t, r, n, i) {
            var o = typeof t,
              a;
            if ("number" === o ? (this._set(t, r, n, i), a = 4) : "undefined" === o || null === t ? (this._set(0, 0, 0, 0), a = null === t ? 1 : 0) : 1 === arguments.length && (Array.isArray(t) ? (this._set.apply(this, t), a = 1) : t.x !== s || t.width !== s ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), a = 1) : t.from === s && t.to === s && (this._set(0, 0, 0, 0), c.filter(this, t), a = 1)), a === s) {
              var l = f.readNamed(arguments, "from"),
                d = c.peek(arguments),
                h = l.x,
                p = l.y,
                u,
                g;
              if (d && d.x !== s || c.hasNamed(arguments, "to")) {
                var m = f.readNamed(arguments, "to");
                u = m.x - h, g = m.y - p, u < 0 && (h = m.x, u = -u), g < 0 && (p = m.y, g = -g);
              } else {
                var y = v.read(arguments);
                u = y.width, g = y.height;
              }
              this._set(h, p, u, g), a = arguments.__index;
              var b = arguments.__filtered;
              b && (this.__filtered = b);
            }
            return this.__read && (this.__read = a), this;
          },
          set: "#initialize",
          _set: function (e, t, r, n) {
            return this.x = e, this.y = t, this.width = r, this.height = n, this;
          },
          clone: function () {
            return new x(this.x, this.y, this.width, this.height);
          },
          equals: function (e) {
            var t = c.isPlainValue(e) ? x.read(arguments) : e;
            return t === this || t && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height || !1;
          },
          toString: function () {
            var e = u.instance;
            return "{ x: " + e.number(this.x) + ", y: " + e.number(this.y) + ", width: " + e.number(this.width) + ", height: " + e.number(this.height) + " }";
          },
          _serialize: function (e) {
            var t = e.formatter;
            return [t.number(this.x), t.number(this.y), t.number(this.width), t.number(this.height)];
          },
          getPoint: function (e) {
            var t;
            return new (e ? f : y)(this.x, this.y, this, "setPoint");
          },
          setPoint: function () {
            var e = f.read(arguments);
            this.x = e.x, this.y = e.y;
          },
          getSize: function (e) {
            var t;
            return new (e ? v : b)(this.width, this.height, this, "setSize");
          },
          _fw: 1,
          _fh: 1,
          setSize: function () {
            var e = v.read(arguments),
              t = this._sx,
              r = this._sy,
              n = e.width,
              i = e.height;
            t && (this.x += (this.width - n) * t), r && (this.y += (this.height - i) * r), this.width = n, this.height = i, this._fw = this._fh = 1;
          },
          getLeft: function () {
            return this.x;
          },
          setLeft: function (e) {
            if (!this._fw) {
              var t = e - this.x;
              this.width -= .5 === this._sx ? 2 * t : t;
            }
            this.x = e, this._sx = this._fw = 0;
          },
          getTop: function () {
            return this.y;
          },
          setTop: function (e) {
            if (!this._fh) {
              var t = e - this.y;
              this.height -= .5 === this._sy ? 2 * t : t;
            }
            this.y = e, this._sy = this._fh = 0;
          },
          getRight: function () {
            return this.x + this.width;
          },
          setRight: function (e) {
            if (!this._fw) {
              var t = e - this.x;
              this.width = .5 === this._sx ? 2 * t : t;
            }
            this.x = e - this.width, this._sx = 1, this._fw = 0;
          },
          getBottom: function () {
            return this.y + this.height;
          },
          setBottom: function (e) {
            if (!this._fh) {
              var t = e - this.y;
              this.height = .5 === this._sy ? 2 * t : t;
            }
            this.y = e - this.height, this._sy = 1, this._fh = 0;
          },
          getCenterX: function () {
            return this.x + this.width / 2;
          },
          setCenterX: function (e) {
            this._fw || .5 === this._sx ? this.x = e - this.width / 2 : (this._sx && (this.x += 2 * (e - this.x) * this._sx), this.width = 2 * (e - this.x)), this._sx = .5, this._fw = 0;
          },
          getCenterY: function () {
            return this.y + this.height / 2;
          },
          setCenterY: function (e) {
            this._fh || .5 === this._sy ? this.y = e - this.height / 2 : (this._sy && (this.y += 2 * (e - this.y) * this._sy), this.height = 2 * (e - this.y)), this._sy = .5, this._fh = 0;
          },
          getCenter: function (e) {
            var t;
            return new (e ? f : y)(this.getCenterX(), this.getCenterY(), this, "setCenter");
          },
          setCenter: function () {
            var e = f.read(arguments);
            return this.setCenterX(e.x), this.setCenterY(e.y), this;
          },
          getArea: function () {
            return this.width * this.height;
          },
          isEmpty: function () {
            return 0 === this.width || 0 === this.height;
          },
          contains: function (e) {
            return e && e.width !== s || 4 === (Array.isArray(e) ? e : arguments).length ? this._containsRectangle(x.read(arguments)) : this._containsPoint(f.read(arguments));
          },
          _containsPoint: function (e) {
            var t = e.x,
              r = e.y;
            return t >= this.x && r >= this.y && t <= this.x + this.width && r <= this.y + this.height;
          },
          _containsRectangle: function (e) {
            var t = e.x,
              r = e.y;
            return t >= this.x && r >= this.y && t + e.width <= this.x + this.width && r + e.height <= this.y + this.height;
          },
          intersects: function () {
            var e = x.read(arguments),
              t = c.read(arguments) || 0;
            return e.x + e.width > this.x - t && e.y + e.height > this.y - t && e.x < this.x + this.width + t && e.y < this.y + this.height + t;
          },
          intersect: function () {
            var e = x.read(arguments),
              t = Math.max(this.x, e.x),
              r = Math.max(this.y, e.y),
              n = Math.min(this.x + this.width, e.x + e.width),
              i = Math.min(this.y + this.height, e.y + e.height);
            return new x(t, r, n - t, i - r);
          },
          unite: function () {
            var e = x.read(arguments),
              t = Math.min(this.x, e.x),
              r = Math.min(this.y, e.y),
              n = Math.max(this.x + this.width, e.x + e.width),
              i = Math.max(this.y + this.height, e.y + e.height);
            return new x(t, r, n - t, i - r);
          },
          include: function () {
            var e = f.read(arguments),
              t = Math.min(this.x, e.x),
              r = Math.min(this.y, e.y),
              n = Math.max(this.x + this.width, e.x),
              i = Math.max(this.y + this.height, e.y);
            return new x(t, r, n - t, i - r);
          },
          expand: function () {
            var e = v.read(arguments),
              t = e.width,
              r = e.height;
            return new x(this.x - t / 2, this.y - r / 2, this.width + t, this.height + r);
          },
          scale: function (e, t) {
            return this.expand(this.width * e - this.width, this.height * (t === s ? e : t) - this.height);
          }
        }, c.each([["Top", "Left"], ["Top", "Right"], ["Bottom", "Left"], ["Bottom", "Right"], ["Left", "Center"], ["Top", "Center"], ["Right", "Center"], ["Bottom", "Center"]], function (e, t) {
          var r = e.join(""),
            n = /^[RL]/.test(r);
          t >= 4 && (e[1] += n ? "Y" : "X");
          var i = e[n ? 0 : 1],
            o = e[n ? 1 : 0],
            s = "get" + i,
            a = "get" + o,
            l = "set" + i,
            c = "set" + o,
            d,
            h = "set" + r;
          this["get" + r] = function (e) {
            var t;
            return new (e ? f : y)(this[s](), this[a](), this, h);
          }, this[h] = function () {
            var e = f.read(arguments);
            this[l](e.x), this[c](e.y);
          };
        }, {
          beans: !0
        })),
        C = x.extend({
          initialize: function e(t, r, n, i, o, s) {
            this._set(t, r, n, i, !0), this._owner = o, this._setter = s;
          },
          _set: function (e, t, r, n, i) {
            return this._x = e, this._y = t, this._width = r, this._height = n, i || this._owner[this._setter](this), this;
          }
        }, new function () {
          var e = x.prototype;
          return c.each(["x", "y", "width", "height"], function (e) {
            var t = c.capitalize(e),
              r = "_" + e;
            this["get" + t] = function () {
              return this[r];
            }, this["set" + t] = function (e) {
              this[r] = e, this._dontNotify || this._owner[this._setter](this);
            };
          }, c.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function (t) {
            var r = "set" + t;
            this[r] = function () {
              this._dontNotify = !0, e[r].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this);
            };
          }, {
            isSelected: function () {
              return !!(2 & this._owner._selection);
            },
            setSelected: function (e) {
              var t = this._owner;
              t._changeSelection && t._changeSelection(2, e);
            }
          }));
        }()),
        S = c.extend({
          _class: "Matrix",
          initialize: function e(t, r) {
            var n = arguments.length,
              i = !0;
            if (n >= 6 ? this._set.apply(this, arguments) : 1 === n || 2 === n ? t instanceof e ? this._set(t._a, t._b, t._c, t._d, t._tx, t._ty, r) : Array.isArray(t) ? this._set.apply(this, r ? t.concat([r]) : t) : i = !1 : n ? i = !1 : this.reset(), !i) throw new Error("Unsupported matrix parameters");
            return this;
          },
          set: "#initialize",
          _set: function (e, t, r, n, i, o, s) {
            return this._a = e, this._b = t, this._c = r, this._d = n, this._tx = i, this._ty = o, s || this._changed(), this;
          },
          _serialize: function (e, t) {
            return c.serialize(this.getValues(), e, !0, t);
          },
          _changed: function () {
            var e = this._owner;
            e && (e._applyMatrix ? e.transform(null, !0) : e._changed(25));
          },
          clone: function () {
            return new S(this._a, this._b, this._c, this._d, this._tx, this._ty);
          },
          equals: function (e) {
            return e === this || e && this._a === e._a && this._b === e._b && this._c === e._c && this._d === e._d && this._tx === e._tx && this._ty === e._ty;
          },
          toString: function () {
            var e = u.instance;
            return "[[" + [e.number(this._a), e.number(this._c), e.number(this._tx)].join(", ") + "], [" + [e.number(this._b), e.number(this._d), e.number(this._ty)].join(", ") + "]]";
          },
          reset: function (e) {
            return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, e || this._changed(), this;
          },
          apply: function (e, t) {
            var r = this._owner;
            return !!r && (r.transform(null, !0, c.pick(e, !0), t), this.isIdentity());
          },
          translate: function () {
            var e = f.read(arguments),
              t = e.x,
              r = e.y;
            return this._tx += t * this._a + r * this._c, this._ty += t * this._b + r * this._d, this._changed(), this;
          },
          scale: function () {
            var e = f.read(arguments),
              t = f.read(arguments, 0, {
                readNull: !0
              });
            return t && this.translate(t), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, t && this.translate(t.negate()), this._changed(), this;
          },
          rotate: function (e) {
            e *= Math.PI / 180;
            var t = f.read(arguments, 1),
              r = t.x,
              n = t.y,
              i = Math.cos(e),
              o = Math.sin(e),
              s = r - r * i + n * o,
              a = n - r * o - n * i,
              l = this._a,
              c = this._b,
              d = this._c,
              h = this._d;
            return this._a = i * l + o * d, this._b = i * c + o * h, this._c = -o * l + i * d, this._d = -o * c + i * h, this._tx += s * l + a * d, this._ty += s * c + a * h, this._changed(), this;
          },
          shear: function () {
            var e = f.read(arguments),
              t = f.read(arguments, 0, {
                readNull: !0
              });
            t && this.translate(t);
            var r = this._a,
              n = this._b;
            return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * r, this._d += e.x * n, t && this.translate(t.negate()), this._changed(), this;
          },
          skew: function () {
            var e = f.read(arguments),
              t = f.read(arguments, 0, {
                readNull: !0
              }),
              r = Math.PI / 180,
              n = new f(Math.tan(e.x * r), Math.tan(e.y * r));
            return this.shear(n, t);
          },
          append: function (e, t) {
            if (e) {
              var r = this._a,
                n = this._b,
                i = this._c,
                o = this._d,
                s = e._a,
                a = e._c,
                l = e._b,
                c = e._d,
                d = e._tx,
                h = e._ty;
              this._a = s * r + l * i, this._c = a * r + c * i, this._b = s * n + l * o, this._d = a * n + c * o, this._tx += d * r + h * i, this._ty += d * n + h * o, t || this._changed();
            }
            return this;
          },
          prepend: function (e, t) {
            if (e) {
              var r = this._a,
                n = this._b,
                i = this._c,
                o = this._d,
                s = this._tx,
                a = this._ty,
                l = e._a,
                c = e._c,
                d = e._b,
                h = e._d,
                p = e._tx,
                u = e._ty;
              this._a = l * r + c * n, this._c = l * i + c * o, this._b = d * r + h * n, this._d = d * i + h * o, this._tx = l * s + c * a + p, this._ty = d * s + h * a + u, t || this._changed();
            }
            return this;
          },
          appended: function (e) {
            return this.clone().append(e);
          },
          prepended: function (e) {
            return this.clone().prepend(e);
          },
          invert: function () {
            var e = this._a,
              t = this._b,
              r = this._c,
              n = this._d,
              i = this._tx,
              o = this._ty,
              s = e * n - t * r,
              a = null;
            return s && !isNaN(s) && isFinite(i) && isFinite(o) && (this._a = n / s, this._b = -t / s, this._c = -r / s, this._d = e / s, this._tx = (r * o - n * i) / s, this._ty = (t * i - e * o) / s, a = this), a;
          },
          inverted: function () {
            return this.clone().invert();
          },
          concatenate: "#append",
          preConcatenate: "#prepend",
          chain: "#appended",
          _shiftless: function () {
            return new S(this._a, this._b, this._c, this._d, 0, 0);
          },
          _orNullIfIdentity: function () {
            return this.isIdentity() ? null : this;
          },
          isIdentity: function () {
            return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty;
          },
          isInvertible: function () {
            var e = this._a * this._d - this._c * this._b;
            return e && !isNaN(e) && isFinite(this._tx) && isFinite(this._ty);
          },
          isSingular: function () {
            return !this.isInvertible();
          },
          transform: function (e, t, r) {
            return arguments.length < 3 ? this._transformPoint(f.read(arguments)) : this._transformCoordinates(e, t, r);
          },
          _transformPoint: function (e, t, r) {
            var n = e.x,
              i = e.y;
            return t || (t = new f()), t._set(n * this._a + i * this._c + this._tx, n * this._b + i * this._d + this._ty, r);
          },
          _transformCoordinates: function (e, t, r) {
            for (var n = 0, i = 2 * r; n < i; n += 2) {
              var o = e[n],
                s = e[n + 1];
              t[n] = o * this._a + s * this._c + this._tx, t[n + 1] = o * this._b + s * this._d + this._ty;
            }
            return t;
          },
          _transformCorners: function (e) {
            var t = e.x,
              r = e.y,
              n = t + e.width,
              i = r + e.height,
              o = [t, r, n, r, n, i, t, i];
            return this._transformCoordinates(o, o, 4);
          },
          _transformBounds: function (e, t, r) {
            for (var n = this._transformCorners(e), i = n.slice(0, 2), o = i.slice(), s = 2; s < 8; s++) {
              var a = n[s],
                l = 1 & s;
              a < i[l] ? i[l] = a : a > o[l] && (o[l] = a);
            }
            return t || (t = new x()), t._set(i[0], i[1], o[0] - i[0], o[1] - i[1], r);
          },
          inverseTransform: function () {
            return this._inverseTransform(f.read(arguments));
          },
          _inverseTransform: function (e, t, r) {
            var n = this._a,
              i = this._b,
              o = this._c,
              s = this._d,
              a = this._tx,
              l = this._ty,
              c = n * s - i * o,
              d = null;
            if (c && !isNaN(c) && isFinite(a) && isFinite(l)) {
              var h = e.x - this._tx,
                p = e.y - this._ty;
              t || (t = new f()), d = t._set((h * s - p * o) / c, (p * n - h * i) / c, r);
            }
            return d;
          },
          decompose: function () {
            var e = this._a,
              t = this._b,
              r = this._c,
              n = this._d,
              i = e * n - t * r,
              o = Math.sqrt,
              s = Math.atan2,
              a = 180 / Math.PI,
              l,
              c,
              d;
            if (0 !== e || 0 !== t) {
              var h = o(e * e + t * t);
              l = Math.acos(e / h) * (t > 0 ? 1 : -1), c = [h, i / h], d = [s(e * r + t * n, h * h), 0];
            } else if (0 !== r || 0 !== n) {
              var p = o(r * r + n * n);
              l = Math.asin(r / p) * (n > 0 ? 1 : -1), c = [i / p, p], d = [0, s(e * r + t * n, p * p)];
            } else l = 0, d = c = [0, 0];
            return {
              translation: this.getTranslation(),
              rotation: l * a,
              scaling: new f(c),
              skewing: new f(d[0] * a, d[1] * a)
            };
          },
          getValues: function () {
            return [this._a, this._b, this._c, this._d, this._tx, this._ty];
          },
          getTranslation: function () {
            return new f(this._tx, this._ty);
          },
          getScaling: function () {
            return this.decompose().scaling;
          },
          getRotation: function () {
            return this.decompose().rotation;
          },
          applyToContext: function (e) {
            this.isIdentity() || e.transform(this._a, this._b, this._c, this._d, this._tx, this._ty);
          }
        }, c.each(["a", "b", "c", "d", "tx", "ty"], function (e) {
          var t = c.capitalize(e),
            r = "_" + e;
          this["get" + t] = function () {
            return this[r];
          }, this["set" + t] = function (e) {
            this[r] = e, this._changed();
          };
        }, {})),
        A = c.extend({
          _class: "Line",
          initialize: function e(t, r, n, i, o) {
            var s = !1;
            arguments.length >= 4 ? (this._px = t, this._py = r, this._vx = n, this._vy = i, s = o) : (this._px = t.x, this._py = t.y, this._vx = r.x, this._vy = r.y, s = n), s || (this._vx -= this._px, this._vy -= this._py);
          },
          getPoint: function () {
            return new f(this._px, this._py);
          },
          getVector: function () {
            return new f(this._vx, this._vy);
          },
          getLength: function () {
            return this.getVector().getLength();
          },
          intersect: function (e, t) {
            return A.intersect(this._px, this._py, this._vx, this._vy, e._px, e._py, e._vx, e._vy, !0, t);
          },
          getSide: function (e, t) {
            return A.getSide(this._px, this._py, this._vx, this._vy, e.x, e.y, !0, t);
          },
          getDistance: function (e) {
            return Math.abs(this.getSignedDistance(e));
          },
          getSignedDistance: function (e) {
            return A.getSignedDistance(this._px, this._py, this._vx, this._vy, e.x, e.y, !0);
          },
          isCollinear: function (e) {
            return f.isCollinear(this._vx, this._vy, e._vx, e._vy);
          },
          isOrthogonal: function (e) {
            return f.isOrthogonal(this._vx, this._vy, e._vx, e._vy);
          },
          statics: {
            intersect: function (e, t, r, n, i, o, s, a, l, c) {
              l || (r -= e, n -= t, s -= i, a -= o);
              var d = r * a - n * s;
              if (!g.isZero(d)) {
                var h = e - i,
                  p = t - o,
                  u = (s * p - a * h) / d,
                  m = (r * p - n * h) / d,
                  y = 1e-12,
                  v = -1e-12,
                  b = 1 + y;
                if (c || v < u && u < b && v < m && m < b) return c || (u = u <= 0 ? 0 : u >= 1 ? 1 : u), new f(e + u * r, t + u * n);
              }
            },
            getSide: function (e, t, r, n, i, o, s, a) {
              s || (r -= e, n -= t);
              var l = i - e,
                c,
                d = l * n - (o - t) * r;
              return !a && g.isZero(d) && (d = (l * r + l * r) / (r * r + n * n)) >= 0 && d <= 1 && (d = 0), d < 0 ? -1 : d > 0 ? 1 : 0;
            },
            getSignedDistance: function (e, t, r, n, i, o, s) {
              return s || (r -= e, n -= t), 0 === r ? n > 0 ? i - e : e - i : 0 === n ? r < 0 ? o - t : t - o : ((i - e) * n - (o - t) * r) / Math.sqrt(r * r + n * n);
            },
            getDistance: function (e, t, r, n, i, o, s) {
              return Math.abs(A.getSignedDistance(e, t, r, n, i, o, s));
            }
          }
        }),
        w = p.extend({
          _class: "Project",
          _list: "projects",
          _reference: "project",
          _compactSerialize: !0,
          initialize: function e(t) {
            p.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new K(null, null, this), this._view = Q.create(this, t || se.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0;
          },
          _serialize: function (e, t) {
            return c.serialize(this._children, e, !0, t);
          },
          _changed: function (e, t) {
            if (1 & e) {
              var r = this._view;
              r && (r._needsUpdate = !0, !r._requested && r._autoUpdate && r.requestUpdate());
            }
            var n = this._changes;
            if (n && t) {
              var i = this._changesById,
                o = t._id,
                s = i[o];
              s ? s.flags |= e : n.push(i[o] = {
                item: t,
                flags: e
              });
            }
          },
          clear: function () {
            for (var e = this._children, t = e.length - 1; t >= 0; t--) e[t].remove();
          },
          isEmpty: function () {
            return !this._children.length;
          },
          remove: function e() {
            return !!e.base.call(this) && (this._view && this._view.remove(), !0);
          },
          getView: function () {
            return this._view;
          },
          getCurrentStyle: function () {
            return this._currentStyle;
          },
          setCurrentStyle: function (e) {
            this._currentStyle.set(e);
          },
          getIndex: function () {
            return this._index;
          },
          getOptions: function () {
            return this._scope.settings;
          },
          getLayers: function () {
            return this._children;
          },
          getActiveLayer: function () {
            return this._activeLayer || new O({
              project: this,
              insert: !0
            });
          },
          getSymbolDefinitions: function () {
            var e = [],
              t = {};
            return this.getItems({
              class: M,
              match: function (r) {
                var n = r._definition,
                  i = n._id;
                return t[i] || (t[i] = !0, e.push(n)), !1;
              }
            }), e;
          },
          getSymbols: "getSymbolDefinitions",
          getSelectedItems: function () {
            var e = this._selectionItems,
              t = [];
            for (var r in e) {
              var n = e[r],
                i = n._selection;
              1 & i && n.isInserted() ? t.push(n) : i || this._updateSelection(n);
            }
            return t;
          },
          _updateSelection: function (e) {
            var t = e._id,
              r = this._selectionItems;
            e._selection ? r[t] !== e && (this._selectionCount++, r[t] = e) : r[t] === e && (this._selectionCount--, delete r[t]);
          },
          selectAll: function () {
            for (var e = this._children, t = 0, r = e.length; t < r; t++) e[t].setFullySelected(!0);
          },
          deselectAll: function () {
            var e = this._selectionItems;
            for (var t in e) e[t].setFullySelected(!1);
          },
          addLayer: function (e) {
            return this.insertLayer(s, e);
          },
          insertLayer: function (e, t) {
            if (t instanceof O) {
              t._remove(!1, !0), c.splice(this._children, [t], e, 0), t._setProject(this, !0);
              var r = t._name;
              r && t.setName(r), this._changes && t._changed(5), this._activeLayer || (this._activeLayer = t);
            } else t = null;
            return t;
          },
          _insertItem: function (e, t, r) {
            return t = this.insertLayer(e, t) || (this._activeLayer || this._insertItem(s, new O(E.NO_INSERT), !0)).insertChild(e, t), r && t.activate && t.activate(), t;
          },
          getItems: function (e) {
            return E._getItems(this, e);
          },
          getItem: function (e) {
            return E._getItems(this, e, null, null, !0)[0] || null;
          },
          importJSON: function (e) {
            this.activate();
            var t = this._activeLayer;
            return c.importJSON(e, t && t.isEmpty() && t);
          },
          removeOn: function (e) {
            var t = this._removeSets;
            if (t) {
              "mouseup" === e && (t.mousedrag = null);
              var r = t[e];
              if (r) {
                for (var n in r) {
                  var i = r[n];
                  for (var o in t) {
                    var s = t[o];
                    s && s != r && delete s[i._id];
                  }
                  i.remove();
                }
                t[e] = null;
              }
            }
          },
          draw: function (e, t, r) {
            this._updateVersion++, e.save(), t.applyToContext(e);
            for (var n = this._children, i = new c({
                offset: new f(0, 0),
                pixelRatio: r,
                viewMatrix: t.isIdentity() ? null : t,
                matrices: [new S()],
                updateMatrix: !0
              }), o = 0, s = n.length; o < s; o++) n[o].draw(e, i);
            if (e.restore(), this._selectionCount > 0) {
              e.save(), e.strokeWidth = 1;
              var a = this._selectionItems,
                l = this._scope.settings.handleSize,
                d = this._updateVersion;
              for (var h in a) a[h]._drawSelection(e, t, l, a, d);
              e.restore();
            }
          }
        }),
        E = c.extend(d, {
          statics: {
            extend: function e(t) {
              return t._serializeFields && (t._serializeFields = c.set({}, this.prototype._serializeFields, t._serializeFields)), e.base.apply(this, arguments);
            },
            NO_INSERT: {
              insert: !1
            }
          },
          _class: "Item",
          _name: null,
          _applyMatrix: !0,
          _canApplyMatrix: !0,
          _canScaleStroke: !1,
          _pivot: null,
          _visible: !0,
          _blendMode: "normal",
          _opacity: 1,
          _locked: !1,
          _guide: !1,
          _clipMask: !1,
          _selection: 0,
          _selectBounds: !0,
          _selectChildren: !1,
          _serializeFields: {
            name: null,
            applyMatrix: null,
            matrix: new S(),
            pivot: null,
            visible: !0,
            blendMode: "normal",
            opacity: 1,
            locked: !1,
            guide: !1,
            clipMask: !1,
            selected: !1,
            data: {}
          },
          _prioritize: ["applyMatrix"]
        }, new function () {
          var e = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
          return c.each(e, function (e) {
            this._events[e] = {
              install: function (e) {
                this.getView()._countItemEvent(e, 1);
              },
              uninstall: function (e) {
                this.getView()._countItemEvent(e, -1);
              }
            };
          }, {
            _events: {
              onFrame: {
                install: function () {
                  this.getView()._animateItem(this, !0);
                },
                uninstall: function () {
                  this.getView()._animateItem(this, !1);
                }
              },
              onLoad: {},
              onError: {}
            },
            statics: {
              _itemHandlers: e
            }
          });
        }(), {
          initialize: function e() {},
          _initialize: function (e, t) {
            var r = e && c.isPlainObject(e),
              n = r && !0 === e.internal,
              i = this._matrix = new S(),
              o = r && e.project || de.project,
              a = de.settings;
            return this._id = n ? null : m.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && a.applyMatrix, t && i.translate(t), i._owner = this, this._style = new K(o._currentStyle, this, o), n || r && 0 == e.insert || !a.insertItems && (!r || !0 !== e.insert) ? this._setProject(o) : (r && e.parent || o)._insertItem(s, this, !0), r && e !== E.NO_INSERT && this.set(e, {
              internal: !0,
              insert: !0,
              project: !0,
              parent: !0
            }), r;
          },
          _serialize: function (e, t) {
            var r = {},
              n = this;
            function i(i) {
              for (var o in i) {
                var s = n[o];
                c.equals(s, "leading" === o ? 1.2 * i.fontSize : i[o]) || (r[o] = c.serialize(s, e, "data" !== o, t));
              }
            }
            return i(this._serializeFields), this instanceof k || i(this._style._defaults), [this._class, r];
          },
          _changed: function (e) {
            var t = this._symbol,
              r = this._parent || t,
              n = this._project;
            8 & e && (this._bounds = this._position = this._decomposed = s), 16 & e && (this._globalMatrix = s), r && 72 & e && E._clearBoundsCache(r), 2 & e && E._clearBoundsCache(this), n && n._changed(e, this), t && t._changed(e);
          },
          getId: function () {
            return this._id;
          },
          getName: function () {
            return this._name;
          },
          setName: function (e) {
            if (this._name && this._removeNamed(), e === +e + "") throw new Error("Names consisting only of numbers are not supported.");
            var t = this._getOwner();
            if (e && t) {
              var r = t._children,
                n = t._namedChildren;
              (n[e] = n[e] || []).push(this), e in r || (r[e] = this);
            }
            this._name = e || s, this._changed(256);
          },
          getStyle: function () {
            return this._style;
          },
          setStyle: function (e) {
            this.getStyle().set(e);
          }
        }, c.each(["locked", "visible", "blendMode", "opacity", "guide"], function (e) {
          var t = c.capitalize(e),
            r = "_" + e,
            n = {
              locked: 256,
              visible: 265
            };
          this["get" + t] = function () {
            return this[r];
          }, this["set" + t] = function (t) {
            t != this[r] && (this[r] = t, this._changed(n[e] || 257));
          };
        }, {}), {
          beans: !0,
          getSelection: function () {
            return this._selection;
          },
          setSelection: function (e) {
            if (e !== this._selection) {
              this._selection = e;
              var t = this._project;
              t && (t._updateSelection(this), this._changed(257));
            }
          },
          _changeSelection: function (e, t) {
            var r = this._selection;
            this.setSelection(t ? r | e : r & ~e);
          },
          isSelected: function () {
            if (this._selectChildren) for (var e = this._children, t = 0, r = e.length; t < r; t++) if (e[t].isSelected()) return !0;
            return !!(1 & this._selection);
          },
          setSelected: function (e) {
            if (this._selectChildren) for (var t = this._children, r = 0, n = t.length; r < n; r++) t[r].setSelected(e);
            this._changeSelection(1, e);
          },
          isFullySelected: function () {
            var e = this._children,
              t = !!(1 & this._selection);
            if (e && t) {
              for (var r = 0, n = e.length; r < n; r++) if (!e[r].isFullySelected()) return !1;
              return !0;
            }
            return t;
          },
          setFullySelected: function (e) {
            var t = this._children;
            if (t) for (var r = 0, n = t.length; r < n; r++) t[r].setFullySelected(e);
            this._changeSelection(1, e);
          },
          isClipMask: function () {
            return this._clipMask;
          },
          setClipMask: function (e) {
            this._clipMask != (e = !!e) && (this._clipMask = e, e && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048));
          },
          getData: function () {
            return this._data || (this._data = {}), this._data;
          },
          setData: function (e) {
            this._data = e;
          },
          getPosition: function (e) {
            var t = e ? f : y,
              r = this._position || (this._position = this._getPositionFromBounds());
            return new t(r.x, r.y, this, "setPosition");
          },
          setPosition: function () {
            this.translate(f.read(arguments).subtract(this.getPosition(!0)));
          },
          _getPositionFromBounds: function (e) {
            return this._pivot ? this._matrix._transformPoint(this._pivot) : (e || this.getBounds()).getCenter(!0);
          },
          getPivot: function () {
            var e = this._pivot;
            return e ? new y(e.x, e.y, this, "setPivot") : null;
          },
          setPivot: function () {
            this._pivot = f.read(arguments, 0, {
              clone: !0,
              readNull: !0
            }), this._position = s;
          }
        }, c.each({
          getStrokeBounds: {
            stroke: !0
          },
          getHandleBounds: {
            handle: !0
          },
          getInternalBounds: {
            internal: !0
          }
        }, function (e, t) {
          this[t] = function (t) {
            return this.getBounds(t, e);
          };
        }, {
          beans: !0,
          getBounds: function (e, t) {
            var r = t || e instanceof S,
              n = c.set({}, r ? t : e, this._boundsOptions);
            n.stroke && !this.getStrokeScaling() || (n.cacheItem = this);
            var i = this._getCachedBounds(r && e, n).rect;
            return arguments.length ? i : new C(i.x, i.y, i.width, i.height, this, "setBounds");
          },
          setBounds: function () {
            var e = x.read(arguments),
              t = this.getBounds(),
              r = this._matrix,
              n = new S(),
              i = e.getCenter();
            n.translate(i), e.width == t.width && e.height == t.height || (r.isInvertible() || (r.set(r._backup || new S().translate(r.getTranslation())), t = this.getBounds()), n.scale(0 !== t.width ? e.width / t.width : 0, 0 !== t.height ? e.height / t.height : 0)), i = t.getCenter(), n.translate(-i.x, -i.y), this.transform(n);
          },
          _getBounds: function (e, t) {
            var r = this._children;
            return r && r.length ? (E._updateBoundsCache(this, t.cacheItem), E._getBounds(r, e, t)) : new x();
          },
          _getBoundsCacheKey: function (e, t) {
            return [e.stroke ? 1 : 0, e.handle ? 1 : 0, t ? 1 : 0].join("");
          },
          _getCachedBounds: function (e, t, r) {
            e = e && e._orNullIfIdentity();
            var n = t.internal && !r,
              i = t.cacheItem,
              o = n ? null : this._matrix._orNullIfIdentity(),
              s = i && (!e || e.equals(o)) && this._getBoundsCacheKey(t, n),
              a = this._bounds,
              l;
            if (E._updateBoundsCache(this._parent || this._symbol, i), s && a && s in a) return {
              rect: (l = a[s]).rect.clone(),
              nonscaling: l.nonscaling
            };
            var c = this._getBounds(e || o, t),
              d = c.rect || c,
              h = this._style,
              p = c.nonscaling || h.hasStroke() && !h.getStrokeScaling();
            if (s) {
              a || (this._bounds = a = {});
              var l = a[s] = {
                rect: d.clone(),
                nonscaling: p,
                internal: n
              };
            }
            return {
              rect: d,
              nonscaling: p
            };
          },
          _getStrokeMatrix: function (e, t) {
            var r = this.getStrokeScaling() ? null : t && t.internal ? this : this._parent || this._symbol && this._symbol._item,
              n = r ? r.getViewMatrix().invert() : e;
            return n && n._shiftless();
          },
          statics: {
            _updateBoundsCache: function (e, t) {
              if (e && t) {
                var r = t._id,
                  n = e._boundsCache = e._boundsCache || {
                    ids: {},
                    list: []
                  };
                n.ids[r] || (n.list.push(t), n.ids[r] = t);
              }
            },
            _clearBoundsCache: function (e) {
              var t = e._boundsCache;
              if (t) {
                e._bounds = e._position = e._boundsCache = s;
                for (var r = 0, n = t.list, i = n.length; r < i; r++) {
                  var o = n[r];
                  o !== e && (o._bounds = o._position = s, o._boundsCache && E._clearBoundsCache(o));
                }
              }
            },
            _getBounds: function (e, t, r) {
              var n = 1 / 0,
                i = -n,
                o = n,
                s = i,
                a = !1;
              r = r || {};
              for (var l = 0, c = e.length; l < c; l++) {
                var d = e[l];
                if (d._visible && !d.isEmpty(!0)) {
                  var h = d._getCachedBounds(t && t.appended(d._matrix), r, !0),
                    p = h.rect;
                  n = Math.min(p.x, n), o = Math.min(p.y, o), i = Math.max(p.x + p.width, i), s = Math.max(p.y + p.height, s), h.nonscaling && (a = !0);
                }
              }
              return {
                rect: isFinite(n) ? new x(n, o, i - n, s - o) : new x(),
                nonscaling: a
              };
            }
          }
        }), {
          beans: !0,
          _decompose: function () {
            return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose());
          },
          getRotation: function () {
            var e = this._decompose();
            return e ? e.rotation : 0;
          },
          setRotation: function (e) {
            var t = this.getRotation();
            if (null != t && null != e) {
              var r = this._decomposed;
              this.rotate(e - t), r && (r.rotation = e, this._decomposed = r);
            }
          },
          getScaling: function () {
            var e = this._decompose(),
              t = e && e.scaling;
            return new y(t ? t.x : 1, t ? t.y : 1, this, "setScaling");
          },
          setScaling: function () {
            var e = this.getScaling(),
              t = f.read(arguments, 0, {
                clone: !0,
                readNull: !0
              });
            if (e && t && !e.equals(t)) {
              var r = this.getRotation(),
                n = this._decomposed,
                i = new S(),
                o = this.getPosition(!0);
              i.translate(o), r && i.rotate(r), i.scale(t.x / e.x, t.y / e.y), r && i.rotate(-r), i.translate(o.negate()), this.transform(i), n && (n.scaling = t, this._decomposed = n);
            }
          },
          getMatrix: function () {
            return this._matrix;
          },
          setMatrix: function () {
            var e = this._matrix;
            e.initialize.apply(e, arguments);
          },
          getGlobalMatrix: function (e) {
            var t = this._globalMatrix,
              r;
            if (t) for (var r = this._parent, n = []; r;) {
              if (!r._globalMatrix) {
                t = null;
                for (var i = 0, o = n.length; i < o; i++) n[i]._globalMatrix = null;
                break;
              }
              n.push(r), r = r._parent;
            }
            t || (t = this._globalMatrix = this._matrix.clone(), (r = this._parent) && t.prepend(r.getGlobalMatrix(!0)));
            return e ? t : t.clone();
          },
          getViewMatrix: function () {
            return this.getGlobalMatrix().prepend(this.getView()._matrix);
          },
          getApplyMatrix: function () {
            return this._applyMatrix;
          },
          setApplyMatrix: function (e) {
            (this._applyMatrix = this._canApplyMatrix && !!e) && this.transform(null, !0);
          },
          getTransformContent: "#getApplyMatrix",
          setTransformContent: "#setApplyMatrix"
        }, {
          getProject: function () {
            return this._project;
          },
          _setProject: function (e, t) {
            if (this._project !== e) {
              this._project && this._installEvents(!1), this._project = e;
              for (var r = this._children, n = 0, i = r && r.length; n < i; n++) r[n]._setProject(e);
              t = !0;
            }
            t && this._installEvents(!0);
          },
          getView: function () {
            return this._project._view;
          },
          _installEvents: function e(t) {
            e.base.call(this, t);
            for (var r = this._children, n = 0, i = r && r.length; n < i; n++) r[n]._installEvents(t);
          },
          getLayer: function () {
            for (var e = this; e = e._parent;) if (e instanceof O) return e;
            return null;
          },
          getParent: function () {
            return this._parent;
          },
          setParent: function (e) {
            return e.addChild(this);
          },
          _getOwner: "#getParent",
          getChildren: function () {
            return this._children;
          },
          setChildren: function (e) {
            this.removeChildren(), this.addChildren(e);
          },
          getFirstChild: function () {
            return this._children && this._children[0] || null;
          },
          getLastChild: function () {
            return this._children && this._children[this._children.length - 1] || null;
          },
          getNextSibling: function () {
            var e = this._getOwner();
            return e && e._children[this._index + 1] || null;
          },
          getPreviousSibling: function () {
            var e = this._getOwner();
            return e && e._children[this._index - 1] || null;
          },
          getIndex: function () {
            return this._index;
          },
          equals: function (e) {
            return e === this || e && this._class === e._class && this._style.equals(e._style) && this._matrix.equals(e._matrix) && this._locked === e._locked && this._visible === e._visible && this._blendMode === e._blendMode && this._opacity === e._opacity && this._clipMask === e._clipMask && this._guide === e._guide && this._equals(e) || !1;
          },
          _equals: function (e) {
            return c.equals(this._children, e._children);
          },
          clone: function (e) {
            var t = new this.constructor(E.NO_INSERT),
              r = this._children,
              n = c.pick(e ? e.insert : s, e === s || !0 === e),
              i = c.pick(e ? e.deep : s, !0);
            r && t.copyAttributes(this), r && !i || t.copyContent(this), r || t.copyAttributes(this), n && t.insertAbove(this);
            var o = this._name,
              a = this._parent;
            if (o && a) {
              for (var r = a._children, l = o, d = 1; r[o];) o = l + " " + d++;
              o !== l && t.setName(o);
            }
            return t;
          },
          copyContent: function (e) {
            for (var t = e._children, r = 0, n = t && t.length; r < n; r++) this.addChild(t[r].clone(!1), !0);
          },
          copyAttributes: function (e, t) {
            this.setStyle(e._style);
            for (var r = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], n = 0, i = r.length; n < i; n++) {
              var o = r[n];
              e.hasOwnProperty(o) && (this[o] = e[o]);
            }
            t || this._matrix.set(e._matrix, !0), this.setApplyMatrix(e._applyMatrix), this.setPivot(e._pivot), this.setSelection(e._selection);
            var s = e._data,
              a = e._name;
            this._data = s ? c.clone(s) : null, a && this.setName(a);
          },
          rasterize: function (e, t) {
            var r = this.getStrokeBounds(),
              n = (e || this.getView().getResolution()) / 72,
              i = r.getTopLeft().floor(),
              o = r.getBottomRight().ceil(),
              a = new v(o.subtract(i)),
              l = new P(E.NO_INSERT);
            if (!a.isZero()) {
              var d = se.getCanvas(a.multiply(n)),
                h = d.getContext("2d"),
                p = new S().scale(n).translate(i.negate());
              h.save(), p.applyToContext(h), this.draw(h, new c({
                matrices: [p]
              })), h.restore(), l.setCanvas(d);
            }
            return l.transform(new S().translate(i.add(a.divide(2))).scale(1 / n)), (t === s || t) && l.insertAbove(this), l;
          },
          contains: function () {
            var e = this._matrix;
            return e.isInvertible() && !!this._contains(e._inverseTransform(f.read(arguments)));
          },
          _contains: function (e) {
            var t = this._children;
            if (t) {
              for (var r = t.length - 1; r >= 0; r--) if (t[r].contains(e)) return !0;
              return !1;
            }
            return e.isInside(this.getInternalBounds());
          },
          isInside: function () {
            return x.read(arguments).contains(this.getBounds());
          },
          _asPathItem: function () {
            return new _.Rectangle({
              rectangle: this.getInternalBounds(),
              matrix: this._matrix,
              insert: !1
            });
          },
          intersects: function (e, t) {
            return e instanceof E && this._asPathItem().getIntersections(e._asPathItem(), null, t, !0).length > 0;
          }
        }, new function () {
          function e() {
            return this._hitTest(f.read(arguments), T.getOptions(arguments));
          }
          function t() {
            var e = f.read(arguments),
              t = T.getOptions(arguments),
              r = [];
            return this._hitTest(e, c.set({
              all: r
            }, t)), r;
          }
          function r(e, t, r, n) {
            var i = this._children;
            if (i) for (var o = i.length - 1; o >= 0; o--) {
              var s = i[o],
                a = s !== n && s._hitTest(e, t, r);
              if (a && !t.all) return a;
            }
            return null;
          }
          return w.inject({
            hitTest: e,
            hitTestAll: t,
            _hitTest: r
          }), {
            hitTest: e,
            hitTestAll: t,
            _hitTestChildren: r
          };
        }(), {
          _hitTest: function (e, t, r) {
            if (this._locked || !this._visible || this._guide && !t.guides || this.isEmpty()) return null;
            var n = this._matrix,
              i = r ? r.appended(n) : this.getGlobalMatrix().prepend(this.getView()._matrix),
              o = Math.max(t.tolerance, 1e-12),
              s = t._tolerancePadding = new v(_._getStrokePadding(o, n._shiftless().invert()));
            if (!(e = n._inverseTransform(e)) || !this._children && !this.getBounds({
              internal: !0,
              stroke: !0,
              handle: !0
            }).expand(s.multiply(2))._containsPoint(e)) return null;
            var a = !(t.guides && !this._guide || t.selected && !this.isSelected() || t.type && t.type !== c.hyphenate(this._class) || t.class && !(this instanceof t.class)),
              l = t.match,
              d = this,
              h,
              p;
            function u(e) {
              return e && l && !l(e) && (e = null), e && t.all && t.all.push(e), e;
            }
            function g(t, r) {
              var n = r ? h["get" + r]() : d.getPosition();
              if (e.subtract(n).divide(s).length <= 1) return new T(t, d, {
                name: r ? c.hyphenate(r) : t,
                point: n
              });
            }
            var m = t.position,
              f = t.center,
              y = t.bounds;
            if (a && this._parent && (m || f || y)) {
              if ((f || y) && (h = this.getInternalBounds()), !(p = m && g("position") || f && g("center", "Center")) && y) for (var b = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], x = 0; x < 8 && !p; x++) p = g("bounds", b[x]);
              p = u(p);
            }
            return p || (p = this._hitTestChildren(e, t, i) || a && u(this._hitTestSelf(e, t, i, this.getStrokeScaling() ? null : i._shiftless().invert())) || null), p && p.point && (p.point = n.transform(p.point)), p;
          },
          _hitTestSelf: function (e, t) {
            if (t.fill && this.hasFill() && this._contains(e)) return new T("fill", this);
          },
          matches: function (e, t) {
            function r(e, t) {
              for (var n in e) if (e.hasOwnProperty(n)) {
                var i = e[n],
                  o = t[n];
                if (c.isPlainObject(i) && c.isPlainObject(o)) {
                  if (!r(i, o)) return !1;
                } else if (!c.equals(i, o)) return !1;
              }
              return !0;
            }
            var n = typeof e;
            if ("object" === n) {
              for (var i in e) if (e.hasOwnProperty(i) && !this.matches(i, e[i])) return !1;
              return !0;
            }
            if ("function" === n) return e(this);
            if ("match" === e) return t(this);
            var o = /^(empty|editable)$/.test(e) ? this["is" + c.capitalize(e)]() : "type" === e ? c.hyphenate(this._class) : this[e];
            if ("class" === e) {
              if ("function" == typeof t) return this instanceof t;
              o = this._class;
            }
            if ("function" == typeof t) return !!t(o);
            if (t) {
              if (t.test) return t.test(o);
              if (c.isPlainObject(t)) return r(t, o);
            }
            return c.equals(o, t);
          },
          getItems: function (e) {
            return E._getItems(this, e, this._matrix);
          },
          getItem: function (e) {
            return E._getItems(this, e, this._matrix, null, !0)[0] || null;
          },
          statics: {
            _getItems: function e(t, r, n, i, o) {
              if (!i) {
                var s = "object" == typeof r && r,
                  a = s && s.overlapping,
                  l = s && s.inside,
                  d,
                  h = (d = a || l) && x.read([d]);
                i = {
                  items: [],
                  recursive: s && !1 !== s.recursive,
                  inside: !!l,
                  overlapping: !!a,
                  rect: h,
                  path: a && new _.Rectangle({
                    rectangle: h,
                    insert: !1
                  })
                }, s && (r = c.filter({}, r, {
                  recursive: !0,
                  inside: !0,
                  overlapping: !0
                }));
              }
              var p = t._children,
                u = i.items,
                h;
              n = (h = i.rect) && (n || new S());
              for (var g = 0, m = p && p.length; g < m; g++) {
                var f = p[g],
                  y = n && n.appended(f._matrix),
                  v = !0;
                if (h) {
                  var d = f.getBounds(y);
                  if (!h.intersects(d)) continue;
                  h.contains(d) || i.overlapping && (d.contains(h) || i.path.intersects(f, y)) || (v = !1);
                }
                if (v && f.matches(r) && (u.push(f), o)) break;
                if (!1 !== i.recursive && e(f, r, y, i, o), o && u.length > 0) break;
              }
              return u;
            }
          }
        }, {
          importJSON: function (e) {
            var t = c.importJSON(e, this);
            return t !== this ? this.addChild(t) : t;
          },
          addChild: function (e) {
            return this.insertChild(s, e);
          },
          insertChild: function (e, t) {
            var r = t ? this.insertChildren(e, [t]) : null;
            return r && r[0];
          },
          addChildren: function (e) {
            return this.insertChildren(this._children.length, e);
          },
          insertChildren: function (e, t) {
            var r = this._children;
            if (r && t && t.length > 0) {
              for (var n = {}, i = (t = c.slice(t)).length - 1; i >= 0; i--) {
                var o,
                  s = (o = t[i]) && o._id;
                !o || n[s] ? t.splice(i, 1) : (o._remove(!1, !0), n[s] = !0);
              }
              c.splice(r, t, e, 0);
              for (var a = this._project, l = a._changes, i = 0, d = t.length; i < d; i++) {
                var o,
                  h = (o = t[i])._name;
                o._parent = this, o._setProject(a, !0), h && o.setName(h), l && o._changed(5);
              }
              this._changed(11);
            } else t = null;
            return t;
          },
          _insertItem: "#insertChild",
          _insertAt: function (e, t) {
            var r = e && e._getOwner(),
              n = e !== this && r ? this : null;
            return n && (n._remove(!1, !0), r._insertItem(e._index + t, n)), n;
          },
          insertAbove: function (e) {
            return this._insertAt(e, 1);
          },
          insertBelow: function (e) {
            return this._insertAt(e, 0);
          },
          sendToBack: function () {
            var e = this._getOwner();
            return e ? e._insertItem(0, this) : null;
          },
          bringToFront: function () {
            var e = this._getOwner();
            return e ? e._insertItem(s, this) : null;
          },
          appendTop: "#addChild",
          appendBottom: function (e) {
            return this.insertChild(0, e);
          },
          moveAbove: "#insertAbove",
          moveBelow: "#insertBelow",
          addTo: function (e) {
            return e._insertItem(s, this);
          },
          copyTo: function (e) {
            return this.clone(!1).addTo(e);
          },
          reduce: function (e) {
            var t = this._children;
            if (t && 1 === t.length) {
              var r = t[0].reduce(e);
              return this._parent ? (r.insertAbove(this), this.remove()) : r.remove(), r;
            }
            return this;
          },
          _removeNamed: function () {
            var e = this._getOwner();
            if (e) {
              var t = e._children,
                r = e._namedChildren,
                n = this._name,
                i = r[n],
                o = i ? i.indexOf(this) : -1;
              -1 !== o && (t[n] == this && delete t[n], i.splice(o, 1), i.length ? t[n] = i[0] : delete r[n]);
            }
          },
          _remove: function (e, t) {
            var r = this._getOwner(),
              n = this._project,
              i = this._index;
            return this._style && this._style._dispose(), !!r && (this._name && this._removeNamed(), null != i && (n._activeLayer === this && (n._activeLayer = this.getNextSibling() || this.getPreviousSibling()), c.splice(r._children, null, i, 1)), this._installEvents(!1), e && n._changes && this._changed(5), t && r._changed(11, this), this._parent = null, !0);
          },
          remove: function () {
            return this._remove(!0, !0);
          },
          replaceWith: function (e) {
            var t = e && e.insertBelow(this);
            return t && this.remove(), t;
          },
          removeChildren: function (e, t) {
            if (!this._children) return null;
            e = e || 0, t = c.pick(t, this._children.length);
            for (var r = c.splice(this._children, null, e, t - e), n = r.length - 1; n >= 0; n--) r[n]._remove(!0, !1);
            return r.length > 0 && this._changed(11), r;
          },
          clear: "#removeChildren",
          reverseChildren: function () {
            if (this._children) {
              this._children.reverse();
              for (var e = 0, t = this._children.length; e < t; e++) this._children[e]._index = e;
              this._changed(11);
            }
          },
          isEmpty: function (e) {
            var t = this._children,
              r = t ? t.length : 0;
            if (e) {
              for (var n = 0; n < r; n++) if (!t[n].isEmpty(e)) return !1;
              return !0;
            }
            return !r;
          },
          isEditable: function () {
            for (var e = this; e;) {
              if (!e._visible || e._locked) return !1;
              e = e._parent;
            }
            return !0;
          },
          hasFill: function () {
            return this.getStyle().hasFill();
          },
          hasStroke: function () {
            return this.getStyle().hasStroke();
          },
          hasShadow: function () {
            return this.getStyle().hasShadow();
          },
          _getOrder: function (e) {
            function t(e) {
              var t = [];
              do {
                t.unshift(e);
              } while (e = e._parent);
              return t;
            }
            for (var r = t(this), n = t(e), i = 0, o = Math.min(r.length, n.length); i < o; i++) if (r[i] != n[i]) return r[i]._index < n[i]._index ? 1 : -1;
            return 0;
          },
          hasChildren: function () {
            return this._children && this._children.length > 0;
          },
          isInserted: function () {
            return !!this._parent && this._parent.isInserted();
          },
          isAbove: function (e) {
            return -1 === this._getOrder(e);
          },
          isBelow: function (e) {
            return 1 === this._getOrder(e);
          },
          isParent: function (e) {
            return this._parent === e;
          },
          isChild: function (e) {
            return e && e._parent === this;
          },
          isDescendant: function (e) {
            for (var t = this; t = t._parent;) if (t === e) return !0;
            return !1;
          },
          isAncestor: function (e) {
            return !!e && e.isDescendant(this);
          },
          isSibling: function (e) {
            return this._parent === e._parent;
          },
          isGroupedWith: function (e) {
            for (var t = this._parent; t;) {
              if (t._parent && /^(Group|Layer|CompoundPath)$/.test(t._class) && e.isDescendant(t)) return !0;
              t = t._parent;
            }
            return !1;
          }
        }, c.each(["rotate", "scale", "shear", "skew"], function (e) {
          var t = "rotate" === e;
          this[e] = function () {
            var r = (t ? c : f).read(arguments),
              n = f.read(arguments, 0, {
                readNull: !0
              });
            return this.transform(new S()[e](r, n || this.getPosition(!0)));
          };
        }, {
          translate: function () {
            var e = new S();
            return this.transform(e.translate.apply(e, arguments));
          },
          transform: function (e, t, r, n) {
            var i = this._matrix,
              o = e && !e.isIdentity(),
              s = (t || this._applyMatrix) && (!i.isIdentity() || o || t && r && this._children);
            if (!o && !s) return this;
            if (o) {
              !e.isInvertible() && i.isInvertible() && (i._backup = i.getValues()), i.prepend(e, !0);
              var a = this._style,
                l = a.getFillColor(!0),
                c = a.getStrokeColor(!0);
              l && l.transform(e), c && c.transform(e);
            }
            if (s && (s = this._transformContent(i, r, n))) {
              var d = this._pivot;
              d && i._transformPoint(d, d, !0), i.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0);
            }
            var h = this._bounds,
              p = this._position;
            (o || s) && this._changed(25);
            var u = o && h && e.decompose();
            if (u && u.skewing.isZero() && u.rotation % 90 == 0) {
              for (var g in h) {
                var m = h[g];
                if (m.nonscaling) delete h[g];else if (s || !m.internal) {
                  var f = m.rect;
                  e._transformBounds(f, f);
                }
              }
              this._bounds = h;
              var y = h[this._getBoundsCacheKey(this._boundsOptions || {})];
              y && (this._position = this._getPositionFromBounds(y.rect));
            } else o && p && this._pivot && (this._position = e._transformPoint(p, p));
            return this;
          },
          _transformContent: function (e, t, r) {
            var n = this._children;
            if (n) {
              for (var i = 0, o = n.length; i < o; i++) n[i].transform(e, !0, t, r);
              return !0;
            }
          },
          globalToLocal: function () {
            return this.getGlobalMatrix(!0)._inverseTransform(f.read(arguments));
          },
          localToGlobal: function () {
            return this.getGlobalMatrix(!0)._transformPoint(f.read(arguments));
          },
          parentToLocal: function () {
            return this._matrix._inverseTransform(f.read(arguments));
          },
          localToParent: function () {
            return this._matrix._transformPoint(f.read(arguments));
          },
          fitBounds: function (e, t) {
            e = x.read(arguments);
            var r = this.getBounds(),
              n = r.height / r.width,
              i = e.height / e.width,
              o = (t ? n > i : n < i) ? e.width / r.width : e.height / r.height,
              s = new x(new f(), new v(r.width * o, r.height * o));
            s.setCenter(e.getCenter()), this.setBounds(s);
          }
        }), {
          _setStyles: function (e, t, r) {
            var n = this._style,
              i = this._matrix;
            if (n.hasFill() && (e.fillStyle = n.getFillColor().toCanvasStyle(e, i)), n.hasStroke()) {
              e.strokeStyle = n.getStrokeColor().toCanvasStyle(e, i), e.lineWidth = n.getStrokeWidth();
              var o = n.getStrokeJoin(),
                s = n.getStrokeCap(),
                a = n.getMiterLimit();
              if (o && (e.lineJoin = o), s && (e.lineCap = s), a && (e.miterLimit = a), de.support.nativeDash) {
                var l = n.getDashArray(),
                  c = n.getDashOffset();
                l && l.length && ("setLineDash" in e ? (e.setLineDash(l), e.lineDashOffset = c) : (e.mozDash = l, e.mozDashOffset = c));
              }
            }
            if (n.hasShadow()) {
              var d = t.pixelRatio || 1,
                h = r._shiftless().prepend(new S().scale(d, d)),
                p = h.transform(new f(n.getShadowBlur(), 0)),
                u = h.transform(this.getShadowOffset());
              e.shadowColor = n.getShadowColor().toCanvasStyle(e), e.shadowBlur = p.getLength(), e.shadowOffsetX = u.x, e.shadowOffsetY = u.y;
            }
          },
          draw: function (e, t, r) {
            var n = this._updateVersion = this._project._updateVersion;
            if (this._visible && 0 !== this._opacity) {
              var i = t.matrices,
                o = t.viewMatrix,
                s = this._matrix,
                a = i[i.length - 1].appended(s);
              if (a.isInvertible()) {
                o = o ? o.appended(a) : a, i.push(a), t.updateMatrix && (this._globalMatrix = a);
                var l = this._blendMode,
                  c = this._opacity,
                  d = "normal" === l,
                  h = ae.nativeModes[l],
                  p = d && 1 === c || t.dontStart || t.clip || (h || d && c < 1) && this._canComposite(),
                  u = t.pixelRatio || 1,
                  g,
                  m,
                  f;
                if (!p) {
                  var y = this.getStrokeBounds(o);
                  if (!y.width || !y.height) return void i.pop();
                  f = t.offset, m = t.offset = y.getTopLeft().floor(), g = e, e = se.getContext(y.getSize().ceil().add(1).multiply(u)), 1 !== u && e.scale(u, u);
                }
                e.save();
                var v = r ? r.appended(s) : this._canScaleStroke && !this.getStrokeScaling(!0) && o,
                  b = !p && t.clipItem,
                  x = !v || b;
                if (p ? (e.globalAlpha = c, h && (e.globalCompositeOperation = l)) : x && e.translate(-m.x, -m.y), x && (p ? s : o).applyToContext(e), b && t.clipItem.draw(e, t.extend({
                  clip: !0
                })), v) {
                  e.setTransform(u, 0, 0, u, 0, 0);
                  var C = t.offset;
                  C && e.translate(-C.x, -C.y);
                }
                this._draw(e, t, o, v), e.restore(), i.pop(), t.clip && !t.dontFinish && e.clip(this.getFillRule()), p || (ae.process(l, e, g, c, m.subtract(f).multiply(u)), se.release(e), t.offset = f);
              }
            }
          },
          _isUpdated: function (e) {
            var t = this._parent;
            if (t instanceof N) return t._isUpdated(e);
            var r = this._updateVersion === e;
            return !r && t && t._visible && t._isUpdated(e) && (this._updateVersion = e, r = !0), r;
          },
          _drawSelection: function (e, t, r, n, i) {
            var o = this._selection,
              s = 1 & o,
              a = 2 & o || s && this._selectBounds,
              l = 4 & o;
            if (this._drawSelected || (s = !1), (s || a || l) && this._isUpdated(i)) {
              var c,
                d = this.getSelectedColor(!0) || (c = this.getLayer()) && c.getSelectedColor(!0),
                h = t.appended(this.getGlobalMatrix(!0)),
                p = r / 2;
              if (e.strokeStyle = e.fillStyle = d ? d.toCanvasStyle(e) : "#009dec", s && this._drawSelected(e, h, n), l) {
                var u = this.getPosition(!0),
                  g = this._parent,
                  m = g ? g.localToGlobal(u) : u,
                  f = m.x,
                  y = m.y;
                e.beginPath(), e.arc(f, y, p, 0, 2 * Math.PI, !0), e.stroke();
                for (var v = [[0, -1], [1, 0], [0, 1], [-1, 0]], b = p, x = r + 1, C = 0; C < 4; C++) {
                  var S = v[C],
                    A = S[0],
                    w = S[1];
                  e.moveTo(f + A * b, y + w * b), e.lineTo(f + A * x, y + w * x), e.stroke();
                }
              }
              if (a) {
                var E = h._transformCorners(this.getInternalBounds());
                e.beginPath();
                for (var C = 0; C < 8; C++) e[C ? "lineTo" : "moveTo"](E[C], E[++C]);
                e.closePath(), e.stroke();
                for (var C = 0; C < 8; C++) e.fillRect(E[C] - p, E[++C] - p, r, r);
              }
            }
          },
          _canComposite: function () {
            return !1;
          }
        }, c.each(["down", "drag", "up", "move"], function (e) {
          this["removeOn" + c.capitalize(e)] = function () {
            var t = {};
            return t[e] = !0, this.removeOn(t);
          };
        }, {
          removeOn: function (e) {
            for (var t in e) if (e[t]) {
              var r = "mouse" + t,
                n = this._project,
                i = n._removeSets = n._removeSets || {};
              i[r] = i[r] || {}, i[r][this._id] = this;
            }
            return this;
          }
        }), {
          tween: function (e, t, r) {
            r || (r = t, t = e, e = null, r || (r = t, t = null));
            var n = r && r.easing,
              i = r && r.start,
              o = null != r && ("number" == typeof r ? r : r.duration),
              s = new ie(this, e, t, o, n, i);
            function a(e) {
              s._handleFrame(1e3 * e.time), s.running || this.off("frame", a);
            }
            return o && this.on("frame", a), s;
          },
          tweenTo: function (e, t) {
            return this.tween(null, e, t);
          },
          tweenFrom: function (e, t) {
            return this.tween(e, null, t);
          }
        }),
        k = E.extend({
          _class: "Group",
          _selectBounds: !1,
          _selectChildren: !0,
          _serializeFields: {
            children: []
          },
          initialize: function e(t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments);
          },
          _changed: function e(t) {
            e.base.call(this, t), 2050 & t && (this._clipItem = s);
          },
          _getClipItem: function () {
            var e = this._clipItem;
            if (e === s) {
              e = null;
              for (var t = this._children, r = 0, n = t.length; r < n; r++) if (t[r]._clipMask) {
                e = t[r];
                break;
              }
              this._clipItem = e;
            }
            return e;
          },
          isClipped: function () {
            return !!this._getClipItem();
          },
          setClipped: function (e) {
            var t = this.getFirstChild();
            t && t.setClipMask(e);
          },
          _getBounds: function e(t, r) {
            var n = this._getClipItem();
            return n ? n._getCachedBounds(n._matrix.prepended(t), c.set({}, r, {
              stroke: !1
            })) : e.base.call(this, t, r);
          },
          _hitTestChildren: function e(t, r, n) {
            var i = this._getClipItem();
            return (!i || i.contains(t)) && e.base.call(this, t, r, n, i);
          },
          _draw: function (e, t) {
            var r = t.clip,
              n = !r && this._getClipItem();
            t = t.extend({
              clipItem: n,
              clip: !1
            }), r ? (e.beginPath(), t.dontStart = t.dontFinish = !0) : n && n.draw(e, t.extend({
              clip: !0
            }));
            for (var i = this._children, o = 0, s = i.length; o < s; o++) {
              var a = i[o];
              a !== n && a.draw(e, t);
            }
          }
        }),
        O = k.extend({
          _class: "Layer",
          initialize: function e() {
            k.apply(this, arguments);
          },
          _getOwner: function () {
            return this._parent || null != this._index && this._project;
          },
          isInserted: function e() {
            return this._parent ? e.base.call(this) : null != this._index;
          },
          activate: function () {
            this._project._activeLayer = this;
          },
          _hitTestSelf: function () {}
        }),
        D = E.extend({
          _class: "Shape",
          _applyMatrix: !1,
          _canApplyMatrix: !1,
          _canScaleStroke: !0,
          _serializeFields: {
            type: null,
            size: null,
            radius: null
          },
          initialize: function e(t, r) {
            this._initialize(t, r);
          },
          _equals: function (e) {
            return this._type === e._type && this._size.equals(e._size) && c.equals(this._radius, e._radius);
          },
          copyContent: function (e) {
            this.setType(e._type), this.setSize(e._size), this.setRadius(e._radius);
          },
          getType: function () {
            return this._type;
          },
          setType: function (e) {
            this._type = e;
          },
          getShape: "#getType",
          setShape: "#setType",
          getSize: function () {
            var e = this._size;
            return new b(e.width, e.height, this, "setSize");
          },
          setSize: function () {
            var e = v.read(arguments);
            if (this._size) {
              if (!this._size.equals(e)) {
                var t = this._type,
                  r = e.width,
                  n = e.height;
                "rectangle" === t ? this._radius.set(v.min(this._radius, e.divide(2))) : "circle" === t ? (r = n = (r + n) / 2, this._radius = r / 2) : "ellipse" === t && this._radius._set(r / 2, n / 2), this._size._set(r, n), this._changed(9);
              }
            } else this._size = e.clone();
          },
          getRadius: function () {
            var e = this._radius;
            return "circle" === this._type ? e : new b(e.width, e.height, this, "setRadius");
          },
          setRadius: function (e) {
            var t = this._type;
            if ("circle" === t) {
              if (e === this._radius) return;
              var r = 2 * e;
              this._radius = e, this._size._set(r, r);
            } else if (e = v.read(arguments), this._radius) {
              if (this._radius.equals(e)) return;
              if (this._radius.set(e), "rectangle" === t) {
                var r = v.max(this._size, e.multiply(2));
                this._size.set(r);
              } else "ellipse" === t && this._size._set(2 * e.width, 2 * e.height);
            } else this._radius = e.clone();
            this._changed(9);
          },
          isEmpty: function () {
            return !1;
          },
          toPath: function (e) {
            var t = new _[c.capitalize(this._type)]({
              center: new f(),
              size: this._size,
              radius: this._radius,
              insert: !1
            });
            return t.copyAttributes(this), de.settings.applyMatrix && t.setApplyMatrix(!0), (e === s || e) && t.insertAbove(this), t;
          },
          toShape: "#clone",
          _asPathItem: function () {
            return this.toPath(!1);
          },
          _draw: function (e, t, r, n) {
            var i = this._style,
              o = i.hasFill(),
              s = i.hasStroke(),
              a = t.dontFinish || t.clip,
              l = !n;
            if (o || s || a) {
              var c = this._type,
                d = this._radius,
                h = "circle" === c;
              if (t.dontStart || e.beginPath(), l && h) e.arc(0, 0, d, 0, 2 * Math.PI, !0);else {
                var p = h ? d : d.width,
                  u = h ? d : d.height,
                  g = this._size,
                  m = g.width,
                  f = g.height;
                if (l && "rectangle" === c && 0 === p && 0 === u) e.rect(-m / 2, -f / 2, m, f);else {
                  var y = m / 2,
                    v = f / 2,
                    b = .44771525016920644,
                    x = p * b,
                    C = u * b,
                    S = [-y, -v + u, -y, -v + C, -y + x, -v, -y + p, -v, y - p, -v, y - x, -v, y, -v + C, y, -v + u, y, v - u, y, v - C, y - x, v, y - p, v, -y + p, v, -y + x, v, -y, v - C, -y, v - u];
                  n && n.transform(S, S, 32), e.moveTo(S[0], S[1]), e.bezierCurveTo(S[2], S[3], S[4], S[5], S[6], S[7]), y !== p && e.lineTo(S[8], S[9]), e.bezierCurveTo(S[10], S[11], S[12], S[13], S[14], S[15]), v !== u && e.lineTo(S[16], S[17]), e.bezierCurveTo(S[18], S[19], S[20], S[21], S[22], S[23]), y !== p && e.lineTo(S[24], S[25]), e.bezierCurveTo(S[26], S[27], S[28], S[29], S[30], S[31]);
                }
              }
              e.closePath();
            }
            a || !o && !s || (this._setStyles(e, t, r), o && (e.fill(i.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), s && e.stroke());
          },
          _canComposite: function () {
            return !(this.hasFill() && this.hasStroke());
          },
          _getBounds: function (e, t) {
            var r = new x(this._size).setCenter(0, 0),
              n = this._style,
              i = t.stroke && n.hasStroke() && n.getStrokeWidth();
            return e && (r = e._transformBounds(r)), i ? r.expand(_._getStrokePadding(i, this._getStrokeMatrix(e, t))) : r;
          }
        }, new function () {
          function e(e, t, r) {
            var n = e._radius;
            if (!n.isZero()) for (var i = e._size.divide(2), o = 1; o <= 4; o++) {
              var s = new f(o > 1 && o < 4 ? -1 : 1, o > 2 ? -1 : 1),
                a = s.multiply(i),
                l = a.subtract(s.multiply(n)),
                c;
              if (new x(r ? a.add(s.multiply(r)) : a, l).contains(t)) return {
                point: l,
                quadrant: o
              };
            }
          }
          function t(e, t, r, n) {
            var i = e.divide(t);
            return (!n || i.isInQuadrant(n)) && i.subtract(i.normalize()).multiply(t).divide(r).length <= 1;
          }
          return {
            _contains: function t(r) {
              if ("rectangle" === this._type) {
                var n = e(this, r);
                return n ? r.subtract(n.point).divide(this._radius).getLength() <= 1 : t.base.call(this, r);
              }
              return r.divide(this.size).getLength() <= .5;
            },
            _hitTestSelf: function r(n, i, o, s) {
              var a = !1,
                l = this._style,
                c = i.stroke && l.hasStroke(),
                d = i.fill && l.hasFill();
              if (c || d) {
                var h = this._type,
                  p = this._radius,
                  u = c ? l.getStrokeWidth() / 2 : 0,
                  g = i._tolerancePadding.add(_._getStrokePadding(u, !l.getStrokeScaling() && s));
                if ("rectangle" === h) {
                  var m = g.multiply(2),
                    f = e(this, n, m);
                  if (f) a = t(n.subtract(f.point), p, g, f.quadrant);else {
                    var y = new x(this._size).setCenter(0, 0),
                      v = y.expand(m),
                      b = y.expand(m.negate());
                    a = v._containsPoint(n) && !b._containsPoint(n);
                  }
                } else a = t(n, p, g);
              }
              return a ? new T(c ? "stroke" : "fill", this) : r.base.apply(this, arguments);
            }
          };
        }(), {
          statics: new function () {
            function e(e, t, r, n, i) {
              var o = new D(c.getNamed(i), t);
              return o._type = e, o._size = r, o._radius = n, o;
            }
            return {
              Circle: function () {
                var t = f.readNamed(arguments, "center"),
                  r = c.readNamed(arguments, "radius");
                return e("circle", t, new v(2 * r), r, arguments);
              },
              Rectangle: function () {
                var t = x.readNamed(arguments, "rectangle"),
                  r = v.min(v.readNamed(arguments, "radius"), t.getSize(!0).divide(2));
                return e("rectangle", t.getCenter(!0), t.getSize(!0), r, arguments);
              },
              Ellipse: function () {
                var t = D._readEllipse(arguments),
                  r = t.radius;
                return e("ellipse", t.center, r.multiply(2), r, arguments);
              },
              _readEllipse: function (e) {
                var t, r;
                if (c.hasNamed(e, "radius")) t = f.readNamed(e, "center"), r = v.readNamed(e, "radius");else {
                  var n = x.readNamed(e, "rectangle");
                  t = n.getCenter(!0), r = n.getSize(!0).divide(2);
                }
                return {
                  center: t,
                  radius: r
                };
              }
            };
          }()
        }),
        P = E.extend({}, {
          _class: "Raster",
          _applyMatrix: !1,
          _canApplyMatrix: !1,
          _boundsOptions: {
            stroke: !1,
            handle: !1
          },
          _serializeFields: {
            crossOrigin: null,
            source: null
          },
          _prioritize: ["crossOrigin"],
          _smoothing: !0,
          beans: !0,
          initialize: function e(t, r) {
            if (!this._initialize(t, r !== s && f.read(arguments))) {
              var n,
                i = typeof t,
                o = "string" === i ? l.getElementById(t) : "object" === i ? t : null;
              if (o && o !== E.NO_INSERT) if (o.getContent || null != o.naturalHeight) n = o;else if (o) {
                var a = v.read(arguments);
                a.isZero() || (n = se.getCanvas(a));
              }
              n ? this.setImage(n) : this.setSource(t);
            }
            this._size || (this._size = new v(), this._loaded = !1);
          },
          _equals: function (e) {
            return this.getSource() === e.getSource();
          },
          copyContent: function (e) {
            var t = e._image,
              r = e._canvas;
            if (t) this._setImage(t);else if (r) {
              var n = se.getCanvas(e._size);
              n.getContext("2d").drawImage(r, 0, 0), this._setImage(n);
            }
            this._crossOrigin = e._crossOrigin;
          },
          getSize: function () {
            var e = this._size;
            return new b(e ? e.width : 0, e ? e.height : 0, this, "setSize");
          },
          setSize: function () {
            var e = v.read(arguments);
            if (!e.equals(this._size)) if (e.width > 0 && e.height > 0) {
              var t = this.getElement();
              this._setImage(se.getCanvas(e)), t && this.getContext(!0).drawImage(t, 0, 0, e.width, e.height);
            } else this._canvas && se.release(this._canvas), this._size = e.clone();
          },
          getWidth: function () {
            return this._size ? this._size.width : 0;
          },
          setWidth: function (e) {
            this.setSize(e, this.getHeight());
          },
          getHeight: function () {
            return this._size ? this._size.height : 0;
          },
          setHeight: function (e) {
            this.setSize(this.getWidth(), e);
          },
          getLoaded: function () {
            return this._loaded;
          },
          isEmpty: function () {
            var e = this._size;
            return !e || 0 === e.width && 0 === e.height;
          },
          getResolution: function () {
            var e = this._matrix,
              t = new f(0, 0).transform(e),
              r = new f(1, 0).transform(e).subtract(t),
              n = new f(0, 1).transform(e).subtract(t);
            return new v(72 / r.getLength(), 72 / n.getLength());
          },
          getPpi: "#getResolution",
          getImage: function () {
            return this._image;
          },
          setImage: function (e) {
            var t = this;
            function r(e) {
              var r = t.getView(),
                n = e && e.type || "load";
              r && t.responds(n) && (de = r._scope, t.emit(n, new X(e)));
            }
            this._setImage(e), this._loaded ? setTimeout(r, 0) : e && Y.add(e, {
              load: function (n) {
                t._setImage(e), r(n);
              },
              error: r
            });
          },
          _setImage: function (e) {
            this._canvas && se.release(this._canvas), e && e.getContext ? (this._image = null, this._canvas = e, this._loaded = !0) : (this._image = e, this._canvas = null, this._loaded = !!(e && e.src && e.complete)), this._size = new v(e ? e.naturalWidth || e.width : 0, e ? e.naturalHeight || e.height : 0), this._context = null, this._changed(1033);
          },
          getCanvas: function () {
            if (!this._canvas) {
              var e = se.getContext(this._size);
              try {
                this._image && e.drawImage(this._image, 0, 0), this._canvas = e.canvas;
              } catch (t) {
                se.release(e);
              }
            }
            return this._canvas;
          },
          setCanvas: "#setImage",
          getContext: function (e) {
            return this._context || (this._context = this.getCanvas().getContext("2d")), e && (this._image = null, this._changed(1025)), this._context;
          },
          setContext: function (e) {
            this._context = e;
          },
          getSource: function () {
            var e = this._image;
            return e && e.src || this.toDataURL();
          },
          setSource: function (e) {
            var t = new o.Image(),
              r = this._crossOrigin;
            r && (t.crossOrigin = r), e && (t.src = e), this.setImage(t);
          },
          getCrossOrigin: function () {
            var e = this._image;
            return e && e.crossOrigin || this._crossOrigin || "";
          },
          setCrossOrigin: function (e) {
            this._crossOrigin = e;
            var t = this._image;
            t && (t.crossOrigin = e);
          },
          getSmoothing: function () {
            return this._smoothing;
          },
          setSmoothing: function (e) {
            this._smoothing = e, this._changed(257);
          },
          getElement: function () {
            return this._canvas || this._loaded && this._image;
          }
        }, {
          beans: !1,
          getSubCanvas: function () {
            var e = x.read(arguments),
              t = se.getContext(e.getSize());
            return t.drawImage(this.getCanvas(), e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), t.canvas;
          },
          getSubRaster: function () {
            var e = x.read(arguments),
              t = new P(E.NO_INSERT);
            return t._setImage(this.getSubCanvas(e)), t.translate(e.getCenter().subtract(this.getSize().divide(2))), t._matrix.prepend(this._matrix), t.insertAbove(this), t;
          },
          toDataURL: function () {
            var e = this._image,
              t = e && e.src;
            if (/^data:/.test(t)) return t;
            var r = this.getCanvas();
            return r ? r.toDataURL.apply(r, arguments) : null;
          },
          drawImage: function (e) {
            var t = f.read(arguments, 1);
            this.getContext(!0).drawImage(e, t.x, t.y);
          },
          getAverageColor: function (e) {
            var t, r;
            if (e ? e instanceof j ? (r = e, t = e.getBounds()) : "object" == typeof e && ("width" in e ? t = new x(e) : "x" in e && (t = new x(e.x - .5, e.y - .5, 1, 1))) : t = this.getBounds(), !t) return null;
            var n = 32,
              i = Math.min(t.width, n),
              o = Math.min(t.height, n),
              s = P._sampleContext;
            s ? s.clearRect(0, 0, 33, 33) : s = P._sampleContext = se.getContext(new v(n)), s.save();
            var a = new S().scale(i / t.width, o / t.height).translate(-t.x, -t.y);
            a.applyToContext(s), r && r.draw(s, new c({
              clip: !0,
              matrices: [a]
            })), this._matrix.applyToContext(s);
            var l = this.getElement(),
              d = this._size;
            l && s.drawImage(l, -d.width / 2, -d.height / 2), s.restore();
            for (var h = s.getImageData(.5, .5, Math.ceil(i), Math.ceil(o)).data, p = [0, 0, 0], u = 0, g = 0, m = h.length; g < m; g += 4) {
              var f = h[g + 3];
              u += f, f /= 255, p[0] += h[g] * f, p[1] += h[g + 1] * f, p[2] += h[g + 2] * f;
            }
            for (var g = 0; g < 3; g++) p[g] /= u;
            return u ? U.read(p) : null;
          },
          getPixel: function () {
            var e = f.read(arguments),
              t = this.getContext().getImageData(e.x, e.y, 1, 1).data;
            return new U("rgb", [t[0] / 255, t[1] / 255, t[2] / 255], t[3] / 255);
          },
          setPixel: function () {
            var e = f.read(arguments),
              t = U.read(arguments),
              r = t._convert("rgb"),
              n = t._alpha,
              i = this.getContext(!0),
              o = i.createImageData(1, 1),
              s = o.data;
            s[0] = 255 * r[0], s[1] = 255 * r[1], s[2] = 255 * r[2], s[3] = null != n ? 255 * n : 255, i.putImageData(o, e.x, e.y);
          },
          clear: function () {
            var e = this._size;
            this.getContext(!0).clearRect(0, 0, e.width + 1, e.height + 1);
          },
          createImageData: function () {
            var e = v.read(arguments);
            return this.getContext().createImageData(e.width, e.height);
          },
          getImageData: function () {
            var e = x.read(arguments);
            return e.isEmpty() && (e = new x(this._size)), this.getContext().getImageData(e.x, e.y, e.width, e.height);
          },
          setImageData: function (e) {
            var t = f.read(arguments, 1);
            this.getContext(!0).putImageData(e, t.x, t.y);
          },
          _getBounds: function (e, t) {
            var r = new x(this._size).setCenter(0, 0);
            return e ? e._transformBounds(r) : r;
          },
          _hitTestSelf: function (e) {
            if (this._contains(e)) {
              var t = this;
              return new T("pixel", t, {
                offset: e.add(t._size.divide(2)).round(),
                color: {
                  get: function () {
                    return t.getPixel(this.offset);
                  }
                }
              });
            }
          },
          _draw: function (e, t, r) {
            var n = this.getElement();
            n && n.width > 0 && n.height > 0 && (e.globalAlpha = this._opacity, this._setStyles(e, t, r), Z.setPrefixed(e, "imageSmoothingEnabled", this._smoothing), e.drawImage(n, -this._size.width / 2, -this._size.height / 2));
          },
          _canComposite: function () {
            return !0;
          }
        }),
        M = E.extend({
          _class: "SymbolItem",
          _applyMatrix: !1,
          _canApplyMatrix: !1,
          _boundsOptions: {
            stroke: !0
          },
          _serializeFields: {
            symbol: null
          },
          initialize: function e(t, r) {
            this._initialize(t, r !== s && f.read(arguments, 1)) || this.setDefinition(t instanceof I ? t : new I(t));
          },
          _equals: function (e) {
            return this._definition === e._definition;
          },
          copyContent: function (e) {
            this.setDefinition(e._definition);
          },
          getDefinition: function () {
            return this._definition;
          },
          setDefinition: function (e) {
            this._definition = e, this._changed(9);
          },
          getSymbol: "#getDefinition",
          setSymbol: "#setDefinition",
          isEmpty: function () {
            return this._definition._item.isEmpty();
          },
          _getBounds: function (e, t) {
            var r = this._definition._item;
            return r._getCachedBounds(r._matrix.prepended(e), t);
          },
          _hitTestSelf: function (e, t, r) {
            var n = this._definition._item._hitTest(e, t, r);
            return n && (n.item = this), n;
          },
          _draw: function (e, t) {
            this._definition._item.draw(e, t);
          }
        }),
        I = c.extend({
          _class: "SymbolDefinition",
          initialize: function e(t, r) {
            this._id = m.get(), this.project = de.project, t && this.setItem(t, r);
          },
          _serialize: function (e, t) {
            return t.add(this, function () {
              return c.serialize([this._class, this._item], e, !1, t);
            });
          },
          _changed: function (e) {
            8 & e && E._clearBoundsCache(this), 1 & e && this.project._changed(e);
          },
          getItem: function () {
            return this._item;
          },
          setItem: function (e, t) {
            e._symbol && (e = e.clone()), this._item && (this._item._symbol = null), this._item = e, e.remove(), e.setSelected(!1), t || e.setPosition(new f()), e._symbol = this, this._changed(9);
          },
          getDefinition: "#getItem",
          setDefinition: "#setItem",
          place: function (e) {
            return new M(this, e);
          },
          clone: function () {
            return new I(this._item.clone(!1));
          },
          equals: function (e) {
            return e === this || e && this._item.equals(e._item) || !1;
          }
        }),
        T = c.extend({
          _class: "HitResult",
          initialize: function e(t, r, n) {
            this.type = t, this.item = r, n && this.inject(n);
          },
          statics: {
            getOptions: function (e) {
              var t = e && c.read(e);
              return c.set({
                type: null,
                tolerance: de.settings.hitTolerance,
                fill: !t,
                stroke: !t,
                segments: !t,
                handles: !1,
                ends: !1,
                position: !1,
                center: !1,
                bounds: !1,
                guides: !1,
                selected: !1
              }, t);
            }
          }
        }),
        L = c.extend({
          _class: "Segment",
          beans: !0,
          _selection: 0,
          initialize: function e(t, r, n, i, o, a) {
            var l = arguments.length,
              c,
              d,
              h,
              p;
            l > 0 && (null == t || "object" == typeof t ? 1 === l && t && "point" in t ? (c = t.point, d = t.handleIn, h = t.handleOut, p = t.selection) : (c = t, d = r, h = n, p = i) : (c = [t, r], d = n !== s ? [n, i] : null, h = o !== s ? [o, a] : null)), new R(c, this, "_point"), new R(d, this, "_handleIn"), new R(h, this, "_handleOut"), p && this.setSelection(p);
          },
          _serialize: function (e, t) {
            var r = this._point,
              n = this._selection,
              i = n || this.hasHandles() ? [r, this._handleIn, this._handleOut] : r;
            return n && i.push(n), c.serialize(i, e, !0, t);
          },
          _changed: function (e) {
            var t = this._path;
            if (t) {
              var r = t._curves,
                n = this._index,
                i;
              r && (e && e !== this._point && e !== this._handleIn || !(i = n > 0 ? r[n - 1] : t._closed ? r[r.length - 1] : null) || i._changed(), e && e !== this._point && e !== this._handleOut || !(i = r[n]) || i._changed()), t._changed(41);
            }
          },
          getPoint: function () {
            return this._point;
          },
          setPoint: function () {
            this._point.set(f.read(arguments));
          },
          getHandleIn: function () {
            return this._handleIn;
          },
          setHandleIn: function () {
            this._handleIn.set(f.read(arguments));
          },
          getHandleOut: function () {
            return this._handleOut;
          },
          setHandleOut: function () {
            this._handleOut.set(f.read(arguments));
          },
          hasHandles: function () {
            return !this._handleIn.isZero() || !this._handleOut.isZero();
          },
          isSmooth: function () {
            var e = this._handleIn,
              t = this._handleOut;
            return !e.isZero() && !t.isZero() && e.isCollinear(t);
          },
          clearHandles: function () {
            this._handleIn._set(0, 0), this._handleOut._set(0, 0);
          },
          getSelection: function () {
            return this._selection;
          },
          setSelection: function (e) {
            var t = this._selection,
              r = this._path;
            this._selection = e = e || 0, r && e !== t && (r._updateSelection(this, t, e), r._changed(257));
          },
          _changeSelection: function (e, t) {
            var r = this._selection;
            this.setSelection(t ? r | e : r & ~e);
          },
          isSelected: function () {
            return !!(7 & this._selection);
          },
          setSelected: function (e) {
            this._changeSelection(7, e);
          },
          getIndex: function () {
            return this._index !== s ? this._index : null;
          },
          getPath: function () {
            return this._path || null;
          },
          getCurve: function () {
            var e = this._path,
              t = this._index;
            return e ? (t > 0 && !e._closed && t === e._segments.length - 1 && t--, e.getCurves()[t] || null) : null;
          },
          getLocation: function () {
            var e = this.getCurve();
            return e ? new F(e, this === e._segment1 ? 0 : 1) : null;
          },
          getNext: function () {
            var e = this._path && this._path._segments;
            return e && (e[this._index + 1] || this._path._closed && e[0]) || null;
          },
          smooth: function (e, t, r) {
            var n = e || {},
              i = n.type,
              o = n.factor,
              a = this.getPrevious(),
              l = this.getNext(),
              c = (a || this)._point,
              d = this._point,
              h = (l || this)._point,
              p = c.getDistance(d),
              u = d.getDistance(h);
            if (i && "catmull-rom" !== i) {
              if ("geometric" !== i) throw new Error("Smoothing method '" + i + "' not supported.");
              if (a && l) {
                var g = c.subtract(h),
                  m = o === s ? .4 : o,
                  y = m * p / (p + u);
                t || this.setHandleIn(g.multiply(y)), r || this.setHandleOut(g.multiply(y - m));
              }
            } else {
              var v = o === s ? .5 : o,
                b = Math.pow(p, v),
                x = b * b,
                C = Math.pow(u, v),
                S = C * C;
              if (!t && a) {
                var A = 2 * S + 3 * C * b + x,
                  w = 3 * C * (C + b);
                this.setHandleIn(0 !== w ? new f((S * c._x + A * d._x - x * h._x) / w - d._x, (S * c._y + A * d._y - x * h._y) / w - d._y) : new f());
              }
              if (!r && l) {
                var A = 2 * x + 3 * b * C + S,
                  w = 3 * b * (b + C);
                this.setHandleOut(0 !== w ? new f((x * h._x + A * d._x - S * c._x) / w - d._x, (x * h._y + A * d._y - S * c._y) / w - d._y) : new f());
              }
            }
          },
          getPrevious: function () {
            var e = this._path && this._path._segments;
            return e && (e[this._index - 1] || this._path._closed && e[e.length - 1]) || null;
          },
          isFirst: function () {
            return !this._index;
          },
          isLast: function () {
            var e = this._path;
            return e && this._index === e._segments.length - 1 || !1;
          },
          reverse: function () {
            var e = this._handleIn,
              t = this._handleOut,
              r = e.clone();
            e.set(t), t.set(r);
          },
          reversed: function () {
            return new L(this._point, this._handleOut, this._handleIn);
          },
          remove: function () {
            return !!this._path && !!this._path.removeSegment(this._index);
          },
          clone: function () {
            return new L(this._point, this._handleIn, this._handleOut);
          },
          equals: function (e) {
            return e === this || e && this._class === e._class && this._point.equals(e._point) && this._handleIn.equals(e._handleIn) && this._handleOut.equals(e._handleOut) || !1;
          },
          toString: function () {
            var e = ["point: " + this._point];
            return this._handleIn.isZero() || e.push("handleIn: " + this._handleIn), this._handleOut.isZero() || e.push("handleOut: " + this._handleOut), "{ " + e.join(", ") + " }";
          },
          transform: function (e) {
            this._transformCoordinates(e, new Array(6), !0), this._changed();
          },
          interpolate: function (e, t, r) {
            var n = 1 - r,
              i = r,
              o = e._point,
              s = t._point,
              a = e._handleIn,
              l = t._handleIn,
              c = t._handleOut,
              d = e._handleOut;
            this._point._set(n * o._x + i * s._x, n * o._y + i * s._y, !0), this._handleIn._set(n * a._x + i * l._x, n * a._y + i * l._y, !0), this._handleOut._set(n * d._x + i * c._x, n * d._y + i * c._y, !0), this._changed();
          },
          _transformCoordinates: function (e, t, r) {
            var n = this._point,
              i = r && this._handleIn.isZero() ? null : this._handleIn,
              o = r && this._handleOut.isZero() ? null : this._handleOut,
              s = n._x,
              a = n._y,
              l = 2;
            return t[0] = s, t[1] = a, i && (t[l++] = i._x + s, t[l++] = i._y + a), o && (t[l++] = o._x + s, t[l++] = o._y + a), e && (e._transformCoordinates(t, t, l / 2), s = t[0], a = t[1], r ? (n._x = s, n._y = a, l = 2, i && (i._x = t[l++] - s, i._y = t[l++] - a), o && (o._x = t[l++] - s, o._y = t[l++] - a)) : (i || (t[l++] = s, t[l++] = a), o || (t[l++] = s, t[l++] = a))), t;
          }
        }),
        R = f.extend({
          initialize: function e(t, r, n) {
            var i, o, a;
            if (t) {
              if ((i = t[0]) !== s) o = t[1];else {
                var l = t;
                (i = l.x) === s && (i = (l = f.read(arguments)).x), o = l.y, a = l.selected;
              }
            } else i = o = 0;
            this._x = i, this._y = o, this._owner = r, r[n] = this, a && this.setSelected(!0);
          },
          _set: function (e, t) {
            return this._x = e, this._y = t, this._owner._changed(this), this;
          },
          getX: function () {
            return this._x;
          },
          setX: function (e) {
            this._x = e, this._owner._changed(this);
          },
          getY: function () {
            return this._y;
          },
          setY: function (e) {
            this._y = e, this._owner._changed(this);
          },
          isZero: function () {
            var e = g.isZero;
            return e(this._x) && e(this._y);
          },
          isSelected: function () {
            return !!(this._owner._selection & this._getSelection());
          },
          setSelected: function (e) {
            this._owner._changeSelection(this._getSelection(), e);
          },
          _getSelection: function () {
            var e = this._owner;
            return this === e._point ? 1 : this === e._handleIn ? 2 : this === e._handleOut ? 4 : 0;
          }
        }),
        B = c.extend({
          _class: "Curve",
          beans: !0,
          initialize: function e(t, r, n, i, o, s, a, l) {
            var c = arguments.length,
              d,
              h,
              p,
              u,
              g,
              m;
            3 === c ? (this._path = t, d = r, h = n) : c ? 1 === c ? "segment1" in t ? (d = new L(t.segment1), h = new L(t.segment2)) : "point1" in t ? (p = t.point1, g = t.handle1, m = t.handle2, u = t.point2) : Array.isArray(t) && (p = [t[0], t[1]], u = [t[6], t[7]], g = [t[2] - t[0], t[3] - t[1]], m = [t[4] - t[6], t[5] - t[7]]) : 2 === c ? (d = new L(t), h = new L(r)) : 4 === c ? (p = t, g = r, m = n, u = i) : 8 === c && (p = [t, r], u = [a, l], g = [n - t, i - r], m = [o - a, s - l]) : (d = new L(), h = new L()), this._segment1 = d || new L(p, null, g), this._segment2 = h || new L(u, m, null);
          },
          _serialize: function (e, t) {
            return c.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], e, !0, t);
          },
          _changed: function () {
            this._length = this._bounds = s;
          },
          clone: function () {
            return new B(this._segment1, this._segment2);
          },
          toString: function () {
            var e = ["point1: " + this._segment1._point];
            return this._segment1._handleOut.isZero() || e.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || e.push("handle2: " + this._segment2._handleIn), e.push("point2: " + this._segment2._point), "{ " + e.join(", ") + " }";
          },
          classify: function () {
            return B.classify(this.getValues());
          },
          remove: function () {
            var e = !1;
            if (this._path) {
              var t = this._segment2,
                r = t._handleOut;
              (e = t.remove()) && this._segment1._handleOut.set(r);
            }
            return e;
          },
          getPoint1: function () {
            return this._segment1._point;
          },
          setPoint1: function () {
            this._segment1._point.set(f.read(arguments));
          },
          getPoint2: function () {
            return this._segment2._point;
          },
          setPoint2: function () {
            this._segment2._point.set(f.read(arguments));
          },
          getHandle1: function () {
            return this._segment1._handleOut;
          },
          setHandle1: function () {
            this._segment1._handleOut.set(f.read(arguments));
          },
          getHandle2: function () {
            return this._segment2._handleIn;
          },
          setHandle2: function () {
            this._segment2._handleIn.set(f.read(arguments));
          },
          getSegment1: function () {
            return this._segment1;
          },
          getSegment2: function () {
            return this._segment2;
          },
          getPath: function () {
            return this._path;
          },
          getIndex: function () {
            return this._segment1._index;
          },
          getNext: function () {
            var e = this._path && this._path._curves;
            return e && (e[this._segment1._index + 1] || this._path._closed && e[0]) || null;
          },
          getPrevious: function () {
            var e = this._path && this._path._curves;
            return e && (e[this._segment1._index - 1] || this._path._closed && e[e.length - 1]) || null;
          },
          isFirst: function () {
            return !this._segment1._index;
          },
          isLast: function () {
            var e = this._path;
            return e && this._segment1._index === e._curves.length - 1 || !1;
          },
          isSelected: function () {
            return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected();
          },
          setSelected: function (e) {
            this.getPoint1().setSelected(e), this.getHandle1().setSelected(e), this.getHandle2().setSelected(e), this.getPoint2().setSelected(e);
          },
          getValues: function (e) {
            return B.getValues(this._segment1, this._segment2, e);
          },
          getPoints: function () {
            for (var e = this.getValues(), t = [], r = 0; r < 8; r += 2) t.push(new f(e[r], e[r + 1]));
            return t;
          }
        }, {
          getLength: function () {
            return null == this._length && (this._length = B.getLength(this.getValues(), 0, 1)), this._length;
          },
          getArea: function () {
            return B.getArea(this.getValues());
          },
          getLine: function () {
            return new A(this._segment1._point, this._segment2._point);
          },
          getPart: function (e, t) {
            return new B(B.getPart(this.getValues(), e, t));
          },
          getPartLength: function (e, t) {
            return B.getLength(this.getValues(), e, t);
          },
          divideAt: function (e) {
            return this.divideAtTime(e && e.curve === this ? e.time : this.getTimeAt(e));
          },
          divideAtTime: function (e, t) {
            var r = 1e-8,
              n,
              i = null;
            if (e >= r && e <= 1 - r) {
              var o = B.subdivide(this.getValues(), e),
                s = o[0],
                a = o[1],
                l = t || this.hasHandles(),
                c = this._segment1,
                d = this._segment2,
                h = this._path;
              l && (c._handleOut._set(s[2] - s[0], s[3] - s[1]), d._handleIn._set(a[4] - a[6], a[5] - a[7]));
              var p = s[6],
                u = s[7],
                g = new L(new f(p, u), l && new f(s[4] - p, s[5] - u), l && new f(a[2] - p, a[3] - u));
              h ? (h.insert(c._index + 1, g), i = this.getNext()) : (this._segment2 = g, this._changed(), i = new B(g, d));
            }
            return i;
          },
          splitAt: function (e) {
            var t = this._path;
            return t ? t.splitAt(e) : null;
          },
          splitAtTime: function (e) {
            return this.splitAt(this.getLocationAtTime(e));
          },
          divide: function (e, t) {
            return this.divideAtTime(e === s ? .5 : t ? e : this.getTimeAt(e));
          },
          split: function (e, t) {
            return this.splitAtTime(e === s ? .5 : t ? e : this.getTimeAt(e));
          },
          reversed: function () {
            return new B(this._segment2.reversed(), this._segment1.reversed());
          },
          clearHandles: function () {
            this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0);
          },
          statics: {
            getValues: function (e, t, r, n) {
              var i = e._point,
                o = e._handleOut,
                s = t._handleIn,
                a = t._point,
                l = i.x,
                c = i.y,
                d = a.x,
                h = a.y,
                p = n ? [l, c, l, c, d, h, d, h] : [l, c, l + o._x, c + o._y, d + s._x, h + s._y, d, h];
              return r && r._transformCoordinates(p, p, 4), p;
            },
            subdivide: function (e, t) {
              var r = e[0],
                n = e[1],
                i = e[2],
                o = e[3],
                a = e[4],
                l = e[5],
                c = e[6],
                d = e[7];
              t === s && (t = .5);
              var h = 1 - t,
                p = h * r + t * i,
                u = h * n + t * o,
                g = h * i + t * a,
                m = h * o + t * l,
                f = h * a + t * c,
                y = h * l + t * d,
                v = h * p + t * g,
                b = h * u + t * m,
                x = h * g + t * f,
                C = h * m + t * y,
                S = h * v + t * x,
                A = h * b + t * C;
              return [[r, n, p, u, v, b, S, A], [S, A, x, C, f, y, c, d]];
            },
            getMonoCurves: function (e, t) {
              var r = [],
                n = t ? 0 : 1,
                i = e[n + 0],
                o = e[n + 2],
                s = e[n + 4],
                a = e[n + 6];
              if (i >= o == o >= s && o >= s == s >= a || B.isStraight(e)) r.push(e);else {
                var l = 3 * (o - s) - i + a,
                  c = 2 * (i + s) - 4 * o,
                  d = o - i,
                  h = 1e-8,
                  p = 1 - h,
                  u = [],
                  m = g.solveQuadratic(l, c, d, u, h, p);
                if (m) {
                  u.sort();
                  var f = u[0],
                    y = B.subdivide(e, f);
                  r.push(y[0]), m > 1 && (f = (u[1] - f) / (1 - f), y = B.subdivide(y[1], f), r.push(y[0])), r.push(y[1]);
                } else r.push(e);
              }
              return r;
            },
            solveCubic: function (e, t, r, n, i, o) {
              var s = e[t],
                a = e[t + 2],
                l = e[t + 4],
                c = e[t + 6],
                d = 0;
              if (!(s < r && c < r && a < r && l < r || s > r && c > r && a > r && l > r)) {
                var h = 3 * (a - s),
                  p = 3 * (l - a) - h,
                  u = c - s - h - p;
                d = g.solveCubic(u, p, h, s - r, n, i, o);
              }
              return d;
            },
            getTimeOf: function (e, t) {
              var r = new f(e[0], e[1]),
                n = new f(e[6], e[7]),
                i = 1e-12,
                o = 1e-7,
                s;
              if (null === (t.isClose(r, i) ? 0 : t.isClose(n, i) ? 1 : null)) for (var a = [t.x, t.y], l = [], c = 0; c < 2; c++) for (var d = B.solveCubic(e, c, a[c], l, 0, 1), h = 0; h < d; h++) {
                var p = l[h];
                if (t.isClose(B.getPoint(e, p), o)) return p;
              }
              return t.isClose(r, o) ? 0 : t.isClose(n, o) ? 1 : null;
            },
            getNearestTime: function (e, t) {
              if (B.isStraight(e)) {
                var r = e[0],
                  n = e[1],
                  i,
                  o,
                  s = e[6] - r,
                  a = e[7] - n,
                  l = s * s + a * a;
                if (0 === l) return 0;
                var c = ((t.x - r) * s + (t.y - n) * a) / l;
                return c < 1e-12 ? 0 : c > .999999999999 ? 1 : B.getTimeOf(e, new f(r + c * s, n + c * a));
              }
              var d = 100,
                h = 1 / 0,
                p = 0;
              function u(r) {
                if (r >= 0 && r <= 1) {
                  var n = t.getDistance(B.getPoint(e, r), !0);
                  if (n < h) return h = n, p = r, !0;
                }
              }
              for (var g = 0; g <= d; g++) u(g / d);
              for (var m = .005; m > 1e-8;) u(p - m) || u(p + m) || (m /= 2);
              return p;
            },
            getPart: function (e, t, r) {
              var n = t > r;
              if (n) {
                var i = t;
                t = r, r = i;
              }
              return t > 0 && (e = B.subdivide(e, t)[1]), r < 1 && (e = B.subdivide(e, (r - t) / (1 - t))[0]), n ? [e[6], e[7], e[4], e[5], e[2], e[3], e[0], e[1]] : e;
            },
            isFlatEnough: function (e, t) {
              var r = e[0],
                n = e[1],
                i = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                l = e[6],
                c = e[7],
                d = 3 * i - 2 * r - l,
                h = 3 * o - 2 * n - c,
                p = 3 * s - 2 * l - r,
                u = 3 * a - 2 * c - n;
              return Math.max(d * d, p * p) + Math.max(h * h, u * u) <= 16 * t * t;
            },
            getArea: function (e) {
              var t = e[0],
                r = e[1],
                n = e[2],
                i = e[3],
                o = e[4],
                s = e[5],
                a = e[6],
                l = e[7];
              return 3 * ((l - r) * (n + o) - (a - t) * (i + s) + i * (t - o) - n * (r - s) + l * (o + t / 3) - a * (s + r / 3)) / 20;
            },
            getBounds: function (e) {
              for (var t = e.slice(0, 2), r = t.slice(), n = [0, 0], i = 0; i < 2; i++) B._addBounds(e[i], e[i + 2], e[i + 4], e[i + 6], i, 0, t, r, n);
              return new x(t[0], t[1], r[0] - t[0], r[1] - t[1]);
            },
            _addBounds: function (e, t, r, n, i, o, s, a, l) {
              function c(e, t) {
                var r = e - t,
                  n = e + t;
                r < s[i] && (s[i] = r), n > a[i] && (a[i] = n);
              }
              o /= 2;
              var d = s[i] - o,
                h = a[i] + o;
              if (e < d || t < d || r < d || n < d || e > h || t > h || r > h || n > h) if (t < e != t < n && r < e != r < n) c(e, o), c(n, o);else {
                var p = 3 * (t - r) - e + n,
                  u = 2 * (e + r) - 4 * t,
                  m = t - e,
                  f = g.solveQuadratic(p, u, m, l),
                  y = 1e-8,
                  v = 1 - y;
                c(n, 0);
                for (var b = 0; b < f; b++) {
                  var x = l[b],
                    C = 1 - x;
                  y <= x && x <= v && c(C * C * C * e + 3 * C * C * x * t + 3 * C * x * x * r + x * x * x * n, o);
                }
              }
            }
          }
        }, c.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function (e) {
          this[e] = function () {
            this._bounds || (this._bounds = {});
            var t = this._bounds[e];
            return t || (t = this._bounds[e] = _[e]([this._segment1, this._segment2], !1, this._path)), t.clone();
          };
        }, {}), c.each({
          isStraight: function (e, t, r, n) {
            if (t.isZero() && r.isZero()) return !0;
            var i = n.subtract(e);
            if (i.isZero()) return !1;
            if (i.isCollinear(t) && i.isCollinear(r)) {
              var o = new A(e, n),
                s = 1e-7;
              if (o.getDistance(e.add(t)) < s && o.getDistance(n.add(r)) < s) {
                var a = i.dot(i),
                  l = i.dot(t) / a,
                  c = i.dot(r) / a;
                return l >= 0 && l <= 1 && c <= 0 && c >= -1;
              }
            }
            return !1;
          },
          isLinear: function (e, t, r, n) {
            var i = n.subtract(e).divide(3);
            return t.equals(i) && r.negate().equals(i);
          }
        }, function (e, t) {
          this[t] = function (t) {
            var r = this._segment1,
              n = this._segment2;
            return e(r._point, r._handleOut, n._handleIn, n._point, t);
          }, this.statics[t] = function (t, r) {
            var n = t[0],
              i = t[1],
              o = t[6],
              s = t[7];
            return e(new f(n, i), new f(t[2] - n, t[3] - i), new f(t[4] - o, t[5] - s), new f(o, s), r);
          };
        }, {
          statics: {},
          hasHandles: function () {
            return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero();
          },
          hasLength: function (e) {
            return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (e || 0);
          },
          isCollinear: function (e) {
            return e && this.isStraight() && e.isStraight() && this.getLine().isCollinear(e.getLine());
          },
          isHorizontal: function () {
            return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8;
          },
          isVertical: function () {
            return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8;
          }
        }), {
          beans: !1,
          getLocationAt: function (e, t) {
            return this.getLocationAtTime(t ? e : this.getTimeAt(e));
          },
          getLocationAtTime: function (e) {
            return null != e && e >= 0 && e <= 1 ? new F(this, e) : null;
          },
          getTimeAt: function (e, t) {
            return B.getTimeAt(this.getValues(), e, t);
          },
          getParameterAt: "#getTimeAt",
          getTimesWithTangent: function () {
            var e = f.read(arguments);
            return e.isZero() ? [] : B.getTimesWithTangent(this.getValues(), e);
          },
          getOffsetAtTime: function (e) {
            return this.getPartLength(0, e);
          },
          getLocationOf: function () {
            return this.getLocationAtTime(this.getTimeOf(f.read(arguments)));
          },
          getOffsetOf: function () {
            var e = this.getLocationOf.apply(this, arguments);
            return e ? e.getOffset() : null;
          },
          getTimeOf: function () {
            return B.getTimeOf(this.getValues(), f.read(arguments));
          },
          getParameterOf: "#getTimeOf",
          getNearestLocation: function () {
            var e = f.read(arguments),
              t = this.getValues(),
              r = B.getNearestTime(t, e),
              n = B.getPoint(t, r);
            return new F(this, r, n, null, e.getDistance(n));
          },
          getNearestPoint: function () {
            var e = this.getNearestLocation.apply(this, arguments);
            return e ? e.getPoint() : e;
          }
        }, new function () {
          var e = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
          return c.each(e, function (e) {
            this[e + "At"] = function (t, r) {
              var n = this.getValues();
              return B[e](n, r ? t : B.getTimeAt(n, t));
            }, this[e + "AtTime"] = function (t) {
              return B[e](this.getValues(), t);
            };
          }, {
            statics: {
              _evaluateMethods: e
            }
          });
        }(), new function () {
          function e(e) {
            var t = e[0],
              r = e[1],
              n = e[2],
              i = e[3],
              o = e[4],
              s = e[5],
              a = e[6],
              l = e[7],
              c = 9 * (n - o) + 3 * (a - t),
              d = 6 * (t + o) - 12 * n,
              h = 3 * (n - t),
              p = 9 * (i - s) + 3 * (l - r),
              u = 6 * (r + s) - 12 * i,
              g = 3 * (i - r);
            return function (e) {
              var t = (c * e + d) * e + h,
                r = (p * e + u) * e + g;
              return Math.sqrt(t * t + r * r);
            };
          }
          function t(e, t) {
            return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(t - e))));
          }
          function r(e, t, r, n) {
            if (null == t || t < 0 || t > 1) return null;
            var i = e[0],
              o = e[1],
              s = e[2],
              a = e[3],
              l = e[4],
              c = e[5],
              d = e[6],
              h = e[7],
              p = g.isZero;
            p(s - i) && p(a - o) && (s = i, a = o), p(l - d) && p(c - h) && (l = d, c = h);
            var u = 3 * (s - i),
              m = 3 * (l - s) - u,
              y = d - i - u - m,
              v = 3 * (a - o),
              b = 3 * (c - a) - v,
              x = h - o - v - b,
              C,
              S;
            if (0 === r) C = 0 === t ? i : 1 === t ? d : ((y * t + m) * t + u) * t + i, S = 0 === t ? o : 1 === t ? h : ((x * t + b) * t + v) * t + o;else {
              var A = 1e-8,
                w = 1 - A;
              if (t < A ? (C = u, S = v) : t > w ? (C = 3 * (d - l), S = 3 * (h - c)) : (C = (3 * y * t + 2 * m) * t + u, S = (3 * x * t + 2 * b) * t + v), n) {
                0 === C && 0 === S && (t < A || t > w) && (C = l - s, S = c - a);
                var E = Math.sqrt(C * C + S * S);
                E && (C /= E, S /= E);
              }
              if (3 === r) {
                var l = 6 * y * t + 2 * m,
                  c = 6 * x * t + 2 * b,
                  k = Math.pow(C * C + S * S, 1.5);
                C = 0 !== k ? (C * c - S * l) / k : 0, S = 0;
              }
            }
            return 2 === r ? new f(S, -C) : new f(C, S);
          }
          return {
            statics: {
              classify: function (e) {
                var t = e[0],
                  r = e[1],
                  n = e[2],
                  i = e[3],
                  o = e[4],
                  a = e[5],
                  l = e[6],
                  c = e[7],
                  d,
                  h = n * (r - c) + i * (l - t) + t * c - r * l,
                  p,
                  u = 3 * (o * (i - r) + a * (t - n) + n * r - i * t),
                  m = u - h,
                  f = m - h + (t * (c - a) + r * (o - l) + l * a - c * o),
                  y = Math.sqrt(f * f + m * m + u * u),
                  v = 0 !== y ? 1 / y : 0,
                  b = g.isZero,
                  x = "serpentine";
                function C(e, t, r) {
                  var n = t !== s,
                    i = n && t > 0 && t < 1,
                    o = n && r > 0 && r < 1;
                  return !n || (i || o) && ("loop" !== e || i && o) || (e = "arch", i = o = !1), {
                    type: e,
                    roots: i || o ? i && o ? t < r ? [t, r] : [r, t] : [i ? t : r] : null
                  };
                }
                if (m *= v, u *= v, b(f *= v)) return b(m) ? C(b(u) ? "line" : "quadratic") : C(x, u / (3 * m));
                var S = 3 * m * m - 4 * f * u;
                if (b(S)) return C("cusp", m / (2 * f));
                var A = S > 0 ? Math.sqrt(S / 3) : Math.sqrt(-S),
                  w = 2 * f;
                return C(S > 0 ? x : "loop", (m + A) / w, (m - A) / w);
              },
              getLength: function (r, n, i, o) {
                if (n === s && (n = 0), i === s && (i = 1), B.isStraight(r)) {
                  var a = r;
                  i < 1 && (a = B.subdivide(a, i)[0], n /= i), n > 0 && (a = B.subdivide(a, n)[1]);
                  var l = a[6] - a[0],
                    c = a[7] - a[1];
                  return Math.sqrt(l * l + c * c);
                }
                return g.integrate(o || e(r), n, i, t(n, i));
              },
              getTimeAt: function (r, n, i) {
                if (i === s && (i = n < 0 ? 1 : 0), 0 === n) return i;
                var o = Math.abs,
                  a = 1e-12,
                  l = n > 0,
                  c = l ? i : 0,
                  d = l ? 1 : i,
                  h = e(r),
                  p = B.getLength(r, c, d, h),
                  u = o(n) - p;
                if (o(u) < a) return l ? d : c;
                if (u > a) return null;
                var m = n / p,
                  f = 0;
                function y(e) {
                  return f += g.integrate(h, i, e, t(i, e)), i = e, f - n;
                }
                return g.findRoot(y, h, i + m, c, d, 32, 1e-12);
              },
              getPoint: function (e, t) {
                return r(e, t, 0, !1);
              },
              getTangent: function (e, t) {
                return r(e, t, 1, !0);
              },
              getWeightedTangent: function (e, t) {
                return r(e, t, 1, !1);
              },
              getNormal: function (e, t) {
                return r(e, t, 2, !0);
              },
              getWeightedNormal: function (e, t) {
                return r(e, t, 2, !1);
              },
              getCurvature: function (e, t) {
                return r(e, t, 3, !1).x;
              },
              getPeaks: function (e) {
                var t = e[0],
                  r = e[1],
                  n = e[2],
                  i = e[3],
                  o = e[4],
                  s = e[5],
                  a,
                  l,
                  c = 3 * n - t - 3 * o + e[6],
                  d = 3 * t - 6 * n + 3 * o,
                  h = -3 * t + 3 * n,
                  p = 3 * i - r - 3 * s + e[7],
                  u = 3 * r - 6 * i + 3 * s,
                  m = -3 * r + 3 * i,
                  f = 1e-8,
                  y = 1 - f,
                  v = [];
                return g.solveCubic(9 * (c * c + p * p), 9 * (c * d + u * p), 2 * (d * d + u * u) + 3 * (h * c + m * p), h * d + u * m, v, f, y), v.sort();
              }
            }
          };
        }(), new function () {
          function e(e, t, r, n, i, o, s) {
            var a = !s && r.getPrevious() === i,
              l = !s && r !== i && r.getNext() === i,
              c = 1e-8,
              d = 1 - c;
            if (null !== n && n >= (a ? c : 0) && n <= (l ? d : 1) && null !== o && o >= (l ? c : 0) && o <= (a ? d : 1)) {
              var h = new F(r, n, null, s),
                p = new F(i, o, null, s);
              h._intersection = p, p._intersection = h, t && !t(h) || F.insert(e, h, !0);
            }
          }
          function t(i, o, s, a, l, c, d, h, p, u, g, m, f) {
            if (++p >= 4096 || ++h >= 40) return p;
            var y = 1e-9,
              v = o[0],
              b = o[1],
              x = o[6],
              C = o[7],
              S = A.getSignedDistance,
              w = S(v, b, x, C, o[2], o[3]),
              E = S(v, b, x, C, o[4], o[5]),
              k = w * E > 0 ? 3 / 4 : 4 / 9,
              O = k * Math.min(0, w, E),
              D = k * Math.max(0, w, E),
              P = S(v, b, x, C, i[0], i[1]),
              M = S(v, b, x, C, i[2], i[3]),
              I = S(v, b, x, C, i[4], i[5]),
              T = S(v, b, x, C, i[6], i[7]),
              L = r(P, M, I, T),
              R = L[0],
              F = L[1],
              j,
              _;
            if (0 === w && 0 === E && 0 === P && 0 === M && 0 === I && 0 === T || null == (j = n(R, F, O, D)) || null == (_ = n(R.reverse(), F.reverse(), O, D))) return p;
            var N = u + (g - u) * j,
              z = u + (g - u) * _;
            if (Math.max(f - m, z - N) < y) {
              var H = (N + z) / 2,
                W = (m + f) / 2;
              e(l, c, d ? a : s, d ? W : H, d ? s : a, d ? H : W);
            } else if (i = B.getPart(i, j, _), _ - j > .8) {
              if (z - N > f - m) {
                var V,
                  H = (N + z) / 2;
                p = t(o, (V = B.subdivide(i, .5))[0], a, s, l, c, !d, h, p, m, f, N, H), p = t(o, V[1], a, s, l, c, !d, h, p, m, f, H, z);
              } else {
                var V,
                  W = (m + f) / 2;
                p = t((V = B.subdivide(o, .5))[0], i, a, s, l, c, !d, h, p, m, W, N, z), p = t(V[1], i, a, s, l, c, !d, h, p, W, f, N, z);
              }
            } else p = f - m >= y ? t(o, i, a, s, l, c, !d, h, p, m, f, N, z) : t(i, o, s, a, l, c, d, h, p, N, z, m, f);
            return p;
          }
          function r(e, t, r, n) {
            var i = [0, e],
              o = [1 / 3, t],
              s = [2 / 3, r],
              a = [1, n],
              l = t - (2 * e + n) / 3,
              c = r - (e + 2 * n) / 3,
              d;
            if (l * c < 0) d = [[i, o, a], [i, s, a]];else {
              var h = l / c;
              d = [h >= 2 ? [i, o, a] : h <= .5 ? [i, s, a] : [i, o, s, a], [i, a]];
            }
            return (l || c) < 0 ? d.reverse() : d;
          }
          function n(e, t, r, n) {
            return e[0][1] < r ? i(e, !0, r) : t[0][1] > n ? i(t, !1, n) : e[0][0];
          }
          function i(e, t, r) {
            for (var n = e[0][0], i = e[0][1], o = 1, s = e.length; o < s; o++) {
              var a = e[o][0],
                l = e[o][1];
              if (t ? l >= r : l <= r) return l === r ? a : n + (r - i) * (a - n) / (l - i);
              n = a, i = l;
            }
            return null;
          }
          function o(e, t, r, n, i) {
            var o = g.isZero;
            if (o(n) && o(i)) {
              var s = B.getTimeOf(e, new f(t, r));
              return null === s ? [] : [s];
            }
            for (var a = Math.atan2(-i, n), l = Math.sin(a), c = Math.cos(a), d = [], h = [], p = 0; p < 8; p += 2) {
              var u = e[p] - t,
                m = e[p + 1] - r;
              d.push(u * c - m * l, u * l + m * c);
            }
            return B.solveCubic(d, 1, 0, h, 0, 1), h;
          }
          function s(t, r, n, i, s, a, l) {
            for (var c = r[0], d = r[1], h, p, u = o(t, c, d, r[6] - c, r[7] - d), g = 0, m = u.length; g < m; g++) {
              var f = u[g],
                y = B.getPoint(t, f),
                v = B.getTimeOf(r, y);
              null !== v && e(s, a, l ? i : n, l ? v : f, l ? n : i, l ? f : v);
            }
          }
          function a(t, r, n, i, o, s) {
            var a = A.intersect(t[0], t[1], t[6], t[7], r[0], r[1], r[6], r[7]);
            a && e(o, s, n, B.getTimeOf(t, a), i, B.getTimeOf(r, a));
          }
          function l(r, n, i, o, l, c) {
            var d = 1e-12,
              h = Math.min,
              u = Math.max;
            if (u(r[0], r[2], r[4], r[6]) + d > h(n[0], n[2], n[4], n[6]) && h(r[0], r[2], r[4], r[6]) - d < u(n[0], n[2], n[4], n[6]) && u(r[1], r[3], r[5], r[7]) + d > h(n[1], n[3], n[5], n[7]) && h(r[1], r[3], r[5], r[7]) - d < u(n[1], n[3], n[5], n[7])) {
              var g = p(r, n);
              if (g) for (var m = 0; m < 2; m++) {
                var y = g[m];
                e(l, c, i, y[0], o, y[1], !0);
              } else {
                var v = B.isStraight(r),
                  b = B.isStraight(n),
                  x = v && b,
                  C = v && !b,
                  S = l.length;
                if ((x ? a : v || b ? s : t)(C ? n : r, C ? r : n, C ? o : i, C ? i : o, l, c, C, 0, 0, 0, 1, 0, 1), !x || l.length === S) for (var m = 0; m < 4; m++) {
                  var A = m >> 1,
                    w = 1 & m,
                    E = 6 * A,
                    k = 6 * w,
                    O = new f(r[E], r[E + 1]),
                    D = new f(n[k], n[k + 1]);
                  O.isClose(D, d) && e(l, c, i, A, o, w);
                }
              }
            }
            return l;
          }
          function d(t, r, n, i) {
            var o = B.classify(t);
            if ("loop" === o.type) {
              var s = o.roots;
              e(n, i, r, s[0], r, s[1]);
            }
            return n;
          }
          function h(e, t, r, n, i, o) {
            var s = !t;
            s && (t = e);
            for (var a = e.length, h = t.length, p = [], u = [], g, m, f = 0; f < h; f++) p[f] = t[f].getValues(i);
            for (var f = 0; f < a; f++) {
              var y = e[f],
                v = s ? p[f] : y.getValues(n),
                b = y.getPath();
              b !== m && (m = b, g = [], u.push(g)), s && d(v, y, g, r);
              for (var x = s ? f + 1 : 0; x < h; x++) {
                if (o && g.length) return g;
                l(v, p[x], y, t[x], g, r);
              }
            }
            g = [];
            for (var f = 0, C = u.length; f < C; f++) c.push(g, u[f]);
            return g;
          }
          function p(e, t) {
            function r(e) {
              var t = e[6] - e[0],
                r = e[7] - e[1];
              return t * t + r * r;
            }
            var n = Math.abs,
              i = A.getDistance,
              o = 1e-8,
              s = 1e-7,
              a = B.isStraight(e),
              l = B.isStraight(t),
              c = a && l,
              d = r(e) < r(t),
              h = d ? t : e,
              p = d ? e : t,
              u = h[0],
              g = h[1],
              m = h[6] - u,
              y = h[7] - g;
            if (i(u, g, m, y, p[0], p[1], !0) < s && i(u, g, m, y, p[6], p[7], !0) < s) !c && i(u, g, m, y, h[2], h[3], !0) < s && i(u, g, m, y, h[4], h[5], !0) < s && i(u, g, m, y, p[2], p[3], !0) < s && i(u, g, m, y, p[4], p[5], !0) < s && (a = l = c = !0);else if (c) return null;
            if (a ^ l) return null;
            for (var v = [e, t], b = [], x = 0; x < 4 && b.length < 2; x++) {
              var C = 1 & x,
                S = 1 ^ C,
                w = x >> 1,
                E = B.getTimeOf(v[C], new f(v[S][w ? 6 : 0], v[S][w ? 7 : 1]));
              if (null != E) {
                var k = C ? [w, E] : [E, w];
                (!b.length || n(k[0] - b[0][0]) > o && n(k[1] - b[0][1]) > o) && b.push(k);
              }
              if (x > 2 && !b.length) break;
            }
            if (2 !== b.length) b = null;else if (!c) {
              var O = B.getPart(e, b[0][0], b[1][0]),
                D = B.getPart(t, b[0][1], b[1][1]);
              (n(D[2] - O[2]) > s || n(D[3] - O[3]) > s || n(D[4] - O[4]) > s || n(D[5] - O[5]) > s) && (b = null);
            }
            return b;
          }
          function u(e, t) {
            var r = e[0],
              n = e[1],
              i = e[2],
              o = e[3],
              s = e[4],
              a = e[5],
              l = e[6],
              c = e[7],
              d = t.normalize(),
              h = d.x,
              p = d.y,
              u = 3 * l - 9 * s + 9 * i - 3 * r,
              m = 3 * c - 9 * a + 9 * o - 3 * n,
              f = 6 * s - 12 * i + 6 * r,
              y = 6 * a - 12 * o + 6 * n,
              v = 3 * i - 3 * r,
              b = 3 * o - 3 * n,
              x = 2 * u * p - 2 * m * h,
              C = [];
            if (Math.abs(x) < g.CURVETIME_EPSILON) {
              var S, x;
              if (0 != (x = u * y - m * f)) {
                var A = -(u * b - m * v) / x;
                A >= 0 && A <= 1 && C.push(A);
              }
            } else {
              var w = (f * f - 4 * u * v) * p * p + (-2 * f * y + 4 * m * v + 4 * u * b) * h * p + (y * y - 4 * m * b) * h * h,
                E = f * p - y * h;
              if (w >= 0 && 0 != x) {
                var k = Math.sqrt(w),
                  O = -(E + k) / x,
                  D = (-E + k) / x;
                O >= 0 && O <= 1 && C.push(O), D >= 0 && D <= 1 && C.push(D);
              }
            }
            return C;
          }
          return {
            getIntersections: function (e) {
              var t = this.getValues(),
                r = e && e !== this && e.getValues();
              return r ? l(t, r, this, e, []) : d(t, this, []);
            },
            statics: {
              getOverlaps: p,
              getIntersections: h,
              getCurveLineIntersections: o,
              getTimesWithTangent: u
            }
          };
        }()),
        F = c.extend({
          _class: "CurveLocation",
          initialize: function e(t, r, n, i, o) {
            if (r >= .99999999) {
              var s = t.getNext();
              s && (r = 0, t = s);
            }
            this._setCurve(t), this._time = r, this._point = n || t.getPointAtTime(r), this._overlap = i, this._distance = o, this._intersection = this._next = this._previous = null;
          },
          _setCurve: function (e) {
            var t = e._path;
            this._path = t, this._version = t ? t._version : 0, this._curve = e, this._segment = null, this._segment1 = e._segment1, this._segment2 = e._segment2;
          },
          _setSegment: function (e) {
            this._setCurve(e.getCurve()), this._segment = e, this._time = e === this._segment1 ? 0 : 1, this._point = e._point.clone();
          },
          getSegment: function () {
            var e = this._segment;
            if (!e) {
              var t = this.getCurve(),
                r = this.getTime();
              0 === r ? e = t._segment1 : 1 === r ? e = t._segment2 : null != r && (e = t.getPartLength(0, r) < t.getPartLength(r, 1) ? t._segment1 : t._segment2), this._segment = e;
            }
            return e;
          },
          getCurve: function () {
            var e = this._path,
              t = this;
            function r(e) {
              var r = e && e.getCurve();
              if (r && null != (t._time = r.getTimeOf(t._point))) return t._setCurve(r), r;
            }
            return e && e._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || r(this._segment) || r(this._segment1) || r(this._segment2.getPrevious());
          },
          getPath: function () {
            var e = this.getCurve();
            return e && e._path;
          },
          getIndex: function () {
            var e = this.getCurve();
            return e && e.getIndex();
          },
          getTime: function () {
            var e = this.getCurve(),
              t = this._time;
            return e && null == t ? this._time = e.getTimeOf(this._point) : t;
          },
          getParameter: "#getTime",
          getPoint: function () {
            return this._point;
          },
          getOffset: function () {
            var e = this._offset;
            if (null == e) {
              e = 0;
              var t = this.getPath(),
                r = this.getIndex();
              if (t && null != r) for (var n = t.getCurves(), i = 0; i < r; i++) e += n[i].getLength();
              this._offset = e += this.getCurveOffset();
            }
            return e;
          },
          getCurveOffset: function () {
            var e = this._curveOffset;
            if (null == e) {
              var t = this.getCurve(),
                r = this.getTime();
              this._curveOffset = e = null != r && t && t.getPartLength(0, r);
            }
            return e;
          },
          getIntersection: function () {
            return this._intersection;
          },
          getDistance: function () {
            return this._distance;
          },
          divide: function () {
            var e = this.getCurve(),
              t = e && e.divideAtTime(this.getTime());
            return t && this._setSegment(t._segment1), t;
          },
          split: function () {
            var e = this.getCurve(),
              t = e._path,
              r = e && e.splitAtTime(this.getTime());
            return r && this._setSegment(t.getLastSegment()), r;
          },
          equals: function (e, t) {
            var r = this === e;
            if (!r && e instanceof F) {
              var n = this.getCurve(),
                i = e.getCurve(),
                o = n._path,
                s;
              if (o === i._path) {
                var a = Math.abs,
                  l = 1e-7,
                  c = a(this.getOffset() - e.getOffset()),
                  d = !t && this._intersection,
                  h = !t && e._intersection;
                r = (c < l || o && a(o.getLength() - c) < l) && (!d && !h || d && h && d.equals(h, !0));
              }
            }
            return r;
          },
          toString: function () {
            var e = [],
              t = this.getPoint(),
              r = u.instance;
            t && e.push("point: " + t);
            var n = this.getIndex();
            null != n && e.push("index: " + n);
            var i = this.getTime();
            return null != i && e.push("time: " + r.number(i)), null != this._distance && e.push("distance: " + r.number(this._distance)), "{ " + e.join(", ") + " }";
          },
          isTouching: function () {
            var e = this._intersection;
            if (e && this.getTangent().isCollinear(e.getTangent())) {
              var t = this.getCurve(),
                r = e.getCurve();
              return !(t.isStraight() && r.isStraight() && t.getLine().intersect(r.getLine()));
            }
            return !1;
          },
          isCrossing: function () {
            var e = this._intersection;
            if (!e) return !1;
            var t = this.getTime(),
              r = e.getTime(),
              n = 1e-8,
              i = 1 - n,
              o = t >= n && t <= i,
              s = r >= n && r <= i;
            if (o && s) return !this.isTouching();
            var a = this.getCurve(),
              l = t < n ? a.getPrevious() : a,
              c = e.getCurve(),
              d = r < n ? c.getPrevious() : c;
            if (t > i && (a = a.getNext()), r > i && (c = c.getNext()), !(l && a && d && c)) return !1;
            var h = [];
            function p(e, t) {
              var r = e.getValues(),
                n = B.classify(r).roots || B.getPeaks(r),
                i = n.length,
                o = t && i > 1 ? n[i - 1] : i > 0 ? n[0] : .5;
              h.push(B.getLength(r, t ? o : 0, t ? 1 : o) / 2);
            }
            function u(e, t, r) {
              return t < r ? e > t && e < r : e > t || e < r;
            }
            o || (p(l, !0), p(a, !1)), s || (p(d, !0), p(c, !1));
            var g = this.getPoint(),
              m = Math.min.apply(Math, h),
              f = o ? a.getTangentAtTime(t) : a.getPointAt(m).subtract(g),
              y = o ? f.negate() : l.getPointAt(-m).subtract(g),
              v = s ? c.getTangentAtTime(r) : c.getPointAt(m).subtract(g),
              b = s ? v.negate() : d.getPointAt(-m).subtract(g),
              x = y.getAngle(),
              C = f.getAngle(),
              S = b.getAngle(),
              A = v.getAngle();
            return !!(o ? u(x, S, A) ^ u(C, S, A) && u(x, A, S) ^ u(C, A, S) : u(S, x, C) ^ u(A, x, C) && u(S, C, x) ^ u(A, C, x));
          },
          hasOverlap: function () {
            return !!this._overlap;
          }
        }, c.each(B._evaluateMethods, function (e) {
          var t = e + "At";
          this[e] = function () {
            var e = this.getCurve(),
              r = this.getTime();
            return null != r && e && e[t](r, !0);
          };
        }, {
          preserve: !0
        }), new function () {
          function e(e, t, r) {
            var n = e.length,
              i = 0,
              o = n - 1;
            function s(r, i) {
              for (var o = r + i; o >= -1 && o <= n; o += i) {
                var s = e[(o % n + n) % n];
                if (!t.getPoint().isClose(s.getPoint(), 1e-7)) break;
                if (t.equals(s)) return s;
              }
              return null;
            }
            for (; i <= o;) {
              var a = i + o >>> 1,
                l = e[a],
                c;
              if (r && (c = t.equals(l) ? l : s(a, -1) || s(a, 1))) return t._overlap && (c._overlap = c._intersection._overlap = !0), c;
              var d = t.getPath(),
                h = l.getPath(),
                p;
              (d !== h ? d._id - h._id : t.getIndex() + t.getTime() - (l.getIndex() + l.getTime())) < 0 ? o = a - 1 : i = a + 1;
            }
            return e.splice(i, 0, t), t;
          }
          return {
            statics: {
              insert: e,
              expand: function (t) {
                for (var r = t.slice(), n = t.length - 1; n >= 0; n--) e(r, t[n]._intersection, !1);
                return r;
              }
            }
          };
        }()),
        j = E.extend({
          _class: "PathItem",
          _selectBounds: !1,
          _canScaleStroke: !0,
          beans: !0,
          initialize: function e() {},
          statics: {
            create: function (e) {
              var t, r, n, i;
              if (c.isPlainObject(e) ? (r = e.segments, t = e.pathData) : Array.isArray(e) ? r = e : "string" == typeof e && (t = e), r) {
                var o = r[0];
                n = o && Array.isArray(o[0]);
              } else t && (n = (t.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(t));
              return new (n ? N : _)(e);
            }
          },
          _asPathItem: function () {
            return this;
          },
          isClockwise: function () {
            return this.getArea() >= 0;
          },
          setClockwise: function (e) {
            this.isClockwise() != (e = !!e) && this.reverse();
          },
          setPathData: function (e) {
            var t = e && e.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
              r,
              n = !1,
              i,
              o,
              s = new f(),
              a = new f();
            function l(e, t) {
              var i = +r[e];
              return n && (i += s[t]), i;
            }
            function c(e) {
              return new f(l(e, "x"), l(e + 1, "y"));
            }
            this.clear();
            for (var d = 0, h = t && t.length; d < h; d++) {
              var p = t[d],
                u = p[0],
                g = u.toLowerCase(),
                m = (r = p.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g)) && r.length;
              switch (n = u === g, "z" !== i || /[mz]/.test(g) || this.moveTo(s), g) {
                case "m":
                case "l":
                  for (var y = "m" === g, b = 0; b < m; b += 2) this[y ? "moveTo" : "lineTo"](s = c(b)), y && (a = s, y = !1);
                  o = s;
                  break;
                case "h":
                case "v":
                  var x = "h" === g ? "x" : "y";
                  s = s.clone();
                  for (var b = 0; b < m; b++) s[x] = l(b, x), this.lineTo(s);
                  o = s;
                  break;
                case "c":
                  for (var b = 0; b < m; b += 6) this.cubicCurveTo(c(b), o = c(b + 2), s = c(b + 4));
                  break;
                case "s":
                  for (var b = 0; b < m; b += 4) this.cubicCurveTo(/[cs]/.test(i) ? s.multiply(2).subtract(o) : s, o = c(b), s = c(b + 2)), i = g;
                  break;
                case "q":
                  for (var b = 0; b < m; b += 4) this.quadraticCurveTo(o = c(b), s = c(b + 2));
                  break;
                case "t":
                  for (var b = 0; b < m; b += 2) this.quadraticCurveTo(o = /[qt]/.test(i) ? s.multiply(2).subtract(o) : s, s = c(b)), i = g;
                  break;
                case "a":
                  for (var b = 0; b < m; b += 7) this.arcTo(s = c(b + 5), new v(+r[b], +r[b + 1]), +r[b + 2], +r[b + 4], +r[b + 3]);
                  break;
                case "z":
                  this.closePath(1e-12), s = a;
              }
              i = g;
            }
          },
          _canComposite: function () {
            return !(this.hasFill() && this.hasStroke());
          },
          _contains: function (e) {
            var t = e.isInside(this.getBounds({
              internal: !0,
              handle: !0
            })) ? this._getWinding(e) : {};
            return t.onPath || !!("evenodd" === this.getFillRule() ? 1 & t.windingL || 1 & t.windingR : t.winding);
          },
          getIntersections: function (e, t, r, n) {
            var i = this === e || !e,
              o = this._matrix._orNullIfIdentity(),
              s = i ? o : (r || e._matrix)._orNullIfIdentity();
            return i || this.getBounds(o).intersects(e.getBounds(s), 1e-12) ? B.getIntersections(this.getCurves(), !i && e.getCurves(), t, o, s, n) : [];
          },
          getCrossings: function (e) {
            return this.getIntersections(e, function (e) {
              return e.hasOverlap() || e.isCrossing();
            });
          },
          getNearestLocation: function () {
            for (var e = f.read(arguments), t = this.getCurves(), r = 1 / 0, n = null, i = 0, o = t.length; i < o; i++) {
              var s = t[i].getNearestLocation(e);
              s._distance < r && (r = s._distance, n = s);
            }
            return n;
          },
          getNearestPoint: function () {
            var e = this.getNearestLocation.apply(this, arguments);
            return e ? e.getPoint() : e;
          },
          interpolate: function (e, t, r) {
            var n = !this._children,
              i = n ? "_segments" : "_children",
              o = e[i],
              s = t[i],
              a = this[i];
            if (!o || !s || o.length !== s.length) throw new Error("Invalid operands in interpolate() call: " + e + ", " + t);
            var l = a.length,
              c = s.length;
            if (l < c) for (var d = n ? L : _, h = l; h < c; h++) this.add(new d());else l > c && this[n ? "removeSegments" : "removeChildren"](c, l);
            for (var h = 0; h < c; h++) a[h].interpolate(o[h], s[h], r);
            n && (this.setClosed(e._closed), this._changed(9));
          },
          compare: function (e) {
            var t = !1;
            if (e) {
              var r = this._children || [this],
                n = e._children ? e._children.slice() : [e],
                i = r.length,
                o = n.length,
                s = [],
                a = 0;
              t = !0;
              for (var l = i - 1; l >= 0 && t; l--) {
                var c = r[l];
                t = !1;
                for (var d = o - 1; d >= 0 && !t; d--) c.compare(n[d]) && (s[d] || (s[d] = !0, a++), t = !0);
              }
              t = t && a === o;
            }
            return t;
          }
        }),
        _ = j.extend({
          _class: "Path",
          _serializeFields: {
            segments: [],
            closed: !1
          },
          initialize: function e(t) {
            this._closed = !1, this._segments = [], this._version = 0;
            var r = Array.isArray(t) ? "object" == typeof t[0] ? t : arguments : !t || t.size !== s || t.x === s && t.point === s ? null : arguments;
            r && r.length > 0 ? this.setSegments(r) : (this._curves = s, this._segmentSelection = 0, r || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!r && t);
          },
          _equals: function (e) {
            return this._closed === e._closed && c.equals(this._segments, e._segments);
          },
          copyContent: function (e) {
            this.setSegments(e._segments), this._closed = e._closed;
          },
          _changed: function e(t) {
            if (e.base.call(this, t), 8 & t) {
              if (this._length = this._area = s, 32 & t) this._version++;else if (this._curves) for (var r = 0, n = this._curves.length; r < n; r++) this._curves[r]._changed();
            } else 64 & t && (this._bounds = s);
          },
          getStyle: function () {
            var e = this._parent;
            return (e instanceof N ? e : this)._style;
          },
          getSegments: function () {
            return this._segments;
          },
          setSegments: function (e) {
            var t = this.isFullySelected(),
              r = e && e.length;
            if (this._segments.length = 0, this._segmentSelection = 0, this._curves = s, r) {
              var n = e[r - 1];
              "boolean" == typeof n && (this.setClosed(n), r--), this._add(L.readList(e, 0, {}, r));
            }
            t && this.setFullySelected(!0);
          },
          getFirstSegment: function () {
            return this._segments[0];
          },
          getLastSegment: function () {
            return this._segments[this._segments.length - 1];
          },
          getCurves: function () {
            var e = this._curves,
              t = this._segments;
            if (!e) {
              var r = this._countCurves();
              e = this._curves = new Array(r);
              for (var n = 0; n < r; n++) e[n] = new B(this, t[n], t[n + 1] || t[0]);
            }
            return e;
          },
          getFirstCurve: function () {
            return this.getCurves()[0];
          },
          getLastCurve: function () {
            var e = this.getCurves();
            return e[e.length - 1];
          },
          isClosed: function () {
            return this._closed;
          },
          setClosed: function (e) {
            if (this._closed != (e = !!e)) {
              if (this._closed = e, this._curves) {
                var t = this._curves.length = this._countCurves();
                e && (this._curves[t - 1] = new B(this, this._segments[t - 1], this._segments[0]));
              }
              this._changed(41);
            }
          }
        }, {
          beans: !0,
          getPathData: function (e, t) {
            var r = this._segments,
              n = r.length,
              i = new u(t),
              o = new Array(6),
              s = !0,
              a,
              l,
              c,
              d,
              h,
              p,
              g,
              m,
              f = [];
            function y(t, r) {
              if (t._transformCoordinates(e, o), a = o[0], l = o[1], s) f.push("M" + i.pair(a, l)), s = !1;else if (h = o[2], p = o[3], h === a && p === l && g === c && m === d) {
                if (!r) {
                  var n = a - c,
                    u = l - d;
                  f.push(0 === n ? "v" + i.number(u) : 0 === u ? "h" + i.number(n) : "l" + i.pair(n, u));
                }
              } else f.push("c" + i.pair(g - c, m - d) + " " + i.pair(h - c, p - d) + " " + i.pair(a - c, l - d));
              c = a, d = l, g = o[4], m = o[5];
            }
            if (!n) return "";
            for (var v = 0; v < n; v++) y(r[v]);
            return this._closed && n > 0 && (y(r[0], !0), f.push("z")), f.join("");
          },
          isEmpty: function () {
            return !this._segments.length;
          },
          _transformContent: function (e) {
            for (var t = this._segments, r = new Array(6), n = 0, i = t.length; n < i; n++) t[n]._transformCoordinates(e, r, !0);
            return !0;
          },
          _add: function (e, t) {
            for (var r = this._segments, n = this._curves, i = e.length, o = null == t, t = o ? r.length : t, s = 0; s < i; s++) {
              var a = e[s];
              a._path && (a = e[s] = a.clone()), a._path = this, a._index = t + s, a._selection && this._updateSelection(a, 0, a._selection);
            }
            if (o) c.push(r, e);else {
              r.splice.apply(r, [t, 0].concat(e));
              for (var s = t + i, l = r.length; s < l; s++) r[s]._index = s;
            }
            if (n) {
              var d = this._countCurves(),
                h = t > 0 && t + i - 1 === d ? t - 1 : t,
                p = h,
                u = Math.min(h + i, d);
              e._curves && (n.splice.apply(n, [h, 0].concat(e._curves)), p += e._curves.length);
              for (var s = p; s < u; s++) n.splice(s, 0, new B(this, null, null));
              this._adjustCurves(h, u);
            }
            return this._changed(41), e;
          },
          _adjustCurves: function (e, t) {
            for (var r = this._segments, n = this._curves, i, o = e; o < t; o++) (i = n[o])._path = this, i._segment1 = r[o], i._segment2 = r[o + 1] || r[0], i._changed();
            (i = n[this._closed && !e ? r.length - 1 : e - 1]) && (i._segment2 = r[e] || r[0], i._changed()), (i = n[t]) && (i._segment1 = r[t], i._changed());
          },
          _countCurves: function () {
            var e = this._segments.length;
            return !this._closed && e > 0 ? e - 1 : e;
          },
          add: function (e) {
            return arguments.length > 1 && "number" != typeof e ? this._add(L.readList(arguments)) : this._add([L.read(arguments)])[0];
          },
          insert: function (e, t) {
            return arguments.length > 2 && "number" != typeof t ? this._add(L.readList(arguments, 1), e) : this._add([L.read(arguments, 1)], e)[0];
          },
          addSegment: function () {
            return this._add([L.read(arguments)])[0];
          },
          insertSegment: function (e) {
            return this._add([L.read(arguments, 1)], e)[0];
          },
          addSegments: function (e) {
            return this._add(L.readList(e));
          },
          insertSegments: function (e, t) {
            return this._add(L.readList(t), e);
          },
          removeSegment: function (e) {
            return this.removeSegments(e, e + 1)[0] || null;
          },
          removeSegments: function (e, t, r) {
            e = e || 0, t = c.pick(t, this._segments.length);
            var n = this._segments,
              i = this._curves,
              o = n.length,
              s = n.splice(e, t - e),
              a = s.length;
            if (!a) return s;
            for (var l = 0; l < a; l++) {
              var d = s[l];
              d._selection && this._updateSelection(d, d._selection, 0), d._index = d._path = null;
            }
            for (var l = e, h = n.length; l < h; l++) n[l]._index = l;
            if (i) {
              for (var p = e > 0 && t === o + (this._closed ? 1 : 0) ? e - 1 : e, i, l = (i = i.splice(p, a)).length - 1; l >= 0; l--) i[l]._path = null;
              r && (s._curves = i.slice(1)), this._adjustCurves(p, p);
            }
            return this._changed(41), s;
          },
          clear: "#removeSegments",
          hasHandles: function () {
            for (var e = this._segments, t = 0, r = e.length; t < r; t++) if (e[t].hasHandles()) return !0;
            return !1;
          },
          clearHandles: function () {
            for (var e = this._segments, t = 0, r = e.length; t < r; t++) e[t].clearHandles();
          },
          getLength: function () {
            if (null == this._length) {
              for (var e = this.getCurves(), t = 0, r = 0, n = e.length; r < n; r++) t += e[r].getLength();
              this._length = t;
            }
            return this._length;
          },
          getArea: function () {
            var e = this._area;
            if (null == e) {
              var t = this._segments,
                r = this._closed;
              e = 0;
              for (var n = 0, i = t.length; n < i; n++) {
                var o = n + 1 === i;
                e += B.getArea(B.getValues(t[n], t[o ? 0 : n + 1], null, o && !r));
              }
              this._area = e;
            }
            return e;
          },
          isFullySelected: function () {
            var e = this._segments.length;
            return this.isSelected() && e > 0 && this._segmentSelection === 7 * e;
          },
          setFullySelected: function (e) {
            e && this._selectSegments(!0), this.setSelected(e);
          },
          setSelection: function e(t) {
            1 & t || this._selectSegments(!1), e.base.call(this, t);
          },
          _selectSegments: function (e) {
            var t = this._segments,
              r = t.length,
              n = e ? 7 : 0;
            this._segmentSelection = n * r;
            for (var i = 0; i < r; i++) t[i]._selection = n;
          },
          _updateSelection: function (e, t, r) {
            var n;
            e._selection = r, (this._segmentSelection += r - t) > 0 && this.setSelected(!0);
          },
          divideAt: function (e) {
            var t = this.getLocationAt(e),
              r;
            return t && (r = t.getCurve().divideAt(t.getCurveOffset())) ? r._segment1 : null;
          },
          splitAt: function (e) {
            var t = this.getLocationAt(e),
              r = t && t.index,
              n = t && t.time,
              i = 1e-8,
              o;
            n > 1 - i && (r++, n = 0);
            var s = this.getCurves();
            if (r >= 0 && r < s.length) {
              n >= i && s[r++].divideAtTime(n);
              var a = this.removeSegments(r, this._segments.length, !0),
                l;
              return this._closed ? (this.setClosed(!1), l = this) : ((l = new _(E.NO_INSERT)).insertAbove(this), l.copyAttributes(this)), l._add(a, 0), this.addSegment(a[0]), l;
            }
            return null;
          },
          split: function (e, t) {
            var r,
              n = t === s ? e : (r = this.getCurves()[e]) && r.getLocationAtTime(t);
            return null != n ? this.splitAt(n) : null;
          },
          join: function (e, t) {
            var r = t || 0;
            if (e && e !== this) {
              var n = e._segments,
                i = this.getLastSegment(),
                o = e.getLastSegment();
              if (!o) return this;
              i && i._point.isClose(o._point, r) && e.reverse();
              var s = e.getFirstSegment();
              if (i && i._point.isClose(s._point, r)) i.setHandleOut(s._handleOut), this._add(n.slice(1));else {
                var a = this.getFirstSegment();
                a && a._point.isClose(s._point, r) && e.reverse(), o = e.getLastSegment(), a && a._point.isClose(o._point, r) ? (a.setHandleIn(o._handleIn), this._add(n.slice(0, n.length - 1), 0)) : this._add(n.slice());
              }
              e._closed && this._add([n[0]]), e.remove();
            }
            var l = this.getFirstSegment(),
              c = this.getLastSegment();
            return l !== c && l._point.isClose(c._point, r) && (l.setHandleIn(c._handleIn), c.remove(), this.setClosed(!0)), this;
          },
          reduce: function (e) {
            for (var t = this.getCurves(), r = e && e.simplify, n = r ? 1e-7 : 0, i = t.length - 1; i >= 0; i--) {
              var o = t[i];
              !o.hasHandles() && (!o.hasLength(n) || r && o.isCollinear(o.getNext())) && o.remove();
            }
            return this;
          },
          reverse: function () {
            this._segments.reverse();
            for (var e = 0, t = this._segments.length; e < t; e++) {
              var r = this._segments[e],
                n = r._handleIn;
              r._handleIn = r._handleOut, r._handleOut = n, r._index = e;
            }
            this._curves = null, this._changed(9);
          },
          flatten: function (e) {
            for (var t, r = new z(this, e || .25, 256, !0).parts, n = r.length, i = [], o = 0; o < n; o++) i.push(new L(r[o].curve.slice(0, 2)));
            !this._closed && n > 0 && i.push(new L(r[n - 1].curve.slice(6))), this.setSegments(i);
          },
          simplify: function (e) {
            var t = new H(this).fit(e || 2.5);
            return t && this.setSegments(t), !!t;
          },
          smooth: function (e) {
            var t = this,
              r = e || {},
              n = r.type || "asymmetric",
              i = this._segments,
              o = i.length,
              a = this._closed;
            function l(e, r) {
              var n = e && e.index;
              if (null != n) {
                var i = e.path;
                if (i && i !== t) throw new Error(e._class + " " + n + " of " + i + " is not part of " + t);
                r && e instanceof B && n++;
              } else n = "number" == typeof e ? e : r;
              return Math.min(n < 0 && a ? n % o : n < 0 ? n + o : n, o - 1);
            }
            var c = a && r.from === s && r.to === s,
              d = l(r.from, 0),
              h = l(r.to, o - 1);
            if (d > h) if (a) d -= o;else {
              var p = d;
              d = h, h = p;
            }
            if (/^(?:asymmetric|continuous)$/.test(n)) {
              var u = "asymmetric" === n,
                g = Math.min,
                m = h - d + 1,
                f = m - 1,
                y = c ? g(m, 4) : 1,
                v = y,
                b = y,
                x = [];
              if (a || (v = g(1, d), b = g(1, o - h - 1)), (f += v + b) <= 1) return;
              for (var C = 0, S = d - v; C <= f; C++, S++) x[C] = i[(S < 0 ? S + o : S) % o]._point;
              for (var A = x[0]._x + 2 * x[1]._x, w = x[0]._y + 2 * x[1]._y, E = 2, k = f - 1, O = [A], D = [w], P = [E], M = [], I = [], C = 1; C < f; C++) {
                var T = C < k,
                  L,
                  R = T ? 4 : u ? 2 : 7,
                  F = T ? 4 : u ? 3 : 8,
                  j = T ? 2 : u ? 0 : 1,
                  _ = (T || u ? 1 : 2) / E;
                E = P[C] = R - _, A = O[C] = F * x[C]._x + j * x[C + 1]._x - _ * A, w = D[C] = F * x[C]._y + j * x[C + 1]._y - _ * w;
              }
              M[k] = O[k] / P[k], I[k] = D[k] / P[k];
              for (var C = f - 2; C >= 0; C--) M[C] = (O[C] - M[C + 1]) / P[C], I[C] = (D[C] - I[C + 1]) / P[C];
              M[f] = (3 * x[f]._x - M[k]) / 2, I[f] = (3 * x[f]._y - I[k]) / 2;
              for (var C = v, N = f - b, S = d; C <= N; C++, S++) {
                var z = i[S < 0 ? S + o : S],
                  H = z._point,
                  W = M[C] - H._x,
                  V = I[C] - H._y;
                (c || C < N) && z.setHandleOut(W, V), (c || C > v) && z.setHandleIn(-W, -V);
              }
            } else for (var C = d; C <= h; C++) i[C < 0 ? C + o : C].smooth(r, !c && C === d, !c && C === h);
          },
          toShape: function (e) {
            if (!this._closed) return null;
            var t = this._segments,
              r,
              n,
              i,
              o;
            function a(e, r) {
              var n = t[e],
                i = n.getNext(),
                o = t[r],
                s = o.getNext();
              return n._handleOut.isZero() && i._handleIn.isZero() && o._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(o._point));
            }
            function l(e) {
              var r = t[e],
                n = r.getPrevious(),
                i = r.getNext();
              return n._handleOut.isZero() && r._handleIn.isZero() && r._handleOut.isZero() && i._handleIn.isZero() && r._point.subtract(n._point).isOrthogonal(i._point.subtract(r._point));
            }
            function c(e) {
              var r = t[e],
                n = r.getNext(),
                i = r._handleOut,
                o = n._handleIn,
                s = .5522847498307936;
              if (i.isOrthogonal(o)) {
                var a = r._point,
                  l = n._point,
                  c = new A(a, i, !0).intersect(new A(l, o, !0), !0);
                return c && g.isZero(i.getLength() / c.subtract(a).getLength() - s) && g.isZero(o.getLength() / c.subtract(l).getLength() - s);
              }
              return !1;
            }
            function d(e, r) {
              return t[e]._point.getDistance(t[r]._point);
            }
            if (!this.hasHandles() && 4 === t.length && a(0, 2) && a(1, 3) && l(1) ? (r = D.Rectangle, n = new v(d(0, 3), d(0, 1)), o = t[1]._point.add(t[2]._point).divide(2)) : 8 === t.length && c(0) && c(2) && c(4) && c(6) && a(1, 5) && a(3, 7) ? (r = D.Rectangle, i = (n = new v(d(1, 6), d(0, 3))).subtract(new v(d(0, 7), d(1, 2))).divide(2), o = t[3]._point.add(t[4]._point).divide(2)) : 4 === t.length && c(0) && c(1) && c(2) && c(3) && (g.isZero(d(0, 2) - d(1, 3)) ? (r = D.Circle, i = d(0, 2) / 2) : (r = D.Ellipse, i = new v(d(2, 0) / 2, d(3, 1) / 2)), o = t[1]._point), r) {
              var h = this.getPosition(!0),
                p = new r({
                  center: h,
                  size: n,
                  radius: i,
                  insert: !1
                });
              return p.copyAttributes(this, !0), p._matrix.prepend(this._matrix), p.rotate(o.subtract(h).getAngle() + 90), (e === s || e) && p.insertAbove(this), p;
            }
            return null;
          },
          toPath: "#clone",
          compare: function e(t) {
            if (!t || t instanceof N) return e.base.call(this, t);
            var r = this.getCurves(),
              n = t.getCurves(),
              i = r.length,
              o = n.length;
            if (!i || !o) return i == o;
            for (var s = r[0].getValues(), a = [], l = 0, c, d = 0, h, p = 0; p < o; p++) {
              var u = n[p].getValues(),
                g;
              if (a.push(u), g = B.getOverlaps(s, u)) {
                c = !p && g[0][0] > 0 ? o - 1 : p, h = g[0][1];
                break;
              }
            }
            for (var m = Math.abs, f = 1e-8, u = a[c], y; s && u;) {
              var g, v;
              if (g = B.getOverlaps(s, u)) if (m(g[0][0] - d) < f) {
                1 === (d = g[1][0]) && (s = ++l < i ? r[l].getValues() : null, d = 0);
                var b = g[0][1];
                if (m(b - h) < f) {
                  if (y || (y = [c, b]), 1 === (h = g[1][1]) && (++c >= o && (c = 0), u = a[c] || n[c].getValues(), h = 0), !s) return y[0] === c && y[1] === h;
                  continue;
                }
              }
              break;
            }
            return !1;
          },
          _hitTestSelf: function (e, t, r, n) {
            var i = this,
              o = this.getStyle(),
              s = this._segments,
              a = s.length,
              l = this._closed,
              c = t._tolerancePadding,
              d = c,
              h,
              p,
              u,
              g,
              m,
              f,
              y = t.stroke && o.hasStroke(),
              v = t.fill && o.hasFill(),
              b = t.curves,
              x = y ? o.getStrokeWidth() / 2 : v && t.tolerance > 0 || b ? 0 : null;
            function C(t, r) {
              return e.subtract(t).divide(r).length <= 1;
            }
            function S(e, r, n) {
              if (!t.selected || r.isSelected()) {
                var o = e._point;
                if (r !== o && (r = r.add(o)), C(r, d)) return new T(n, i, {
                  segment: e,
                  point: r
                });
              }
            }
            function A(e, r) {
              return (r || t.segments) && S(e, e._point, "segment") || !r && t.handles && (S(e, e._handleIn, "handle-in") || S(e, e._handleOut, "handle-out"));
            }
            function w(e) {
              g.add(e);
            }
            function E(t) {
              var r = l || t._index > 0 && t._index < a - 1,
                i;
              return "round" === (r ? h : p) ? C(t._point, d) : (g = new _({
                internal: !0,
                closed: !0
              }), r ? t.isSmooth() || _._addBevelJoin(t, h, x, u, null, n, w, !0) : "square" === p && _._addSquareCap(t, p, x, null, n, w, !0), g.isEmpty() ? void 0 : g.contains(e) || (i = g.getNearestLocation(e)) && C(i.getPoint(), c));
            }
            if (null !== x && (x > 0 ? (h = o.getStrokeJoin(), p = o.getStrokeCap(), u = o.getMiterLimit(), d = d.add(_._getStrokePadding(x, n))) : h = p = "round"), !t.ends || t.segments || l) {
              if (t.segments || t.handles) for (var k = 0; k < a; k++) if (f = A(s[k])) return f;
            } else if (f = A(s[0], !0) || A(s[a - 1], !0)) return f;
            if (null !== x) {
              if (m = this.getNearestLocation(e)) {
                var O = m.getTime();
                0 === O || 1 === O && a > 1 ? E(m.getSegment()) || (m = null) : C(m.getPoint(), d) || (m = null);
              }
              if (!m && "miter" === h && a > 1) for (var k = 0; k < a; k++) {
                var D = s[k];
                if (e.getDistance(D._point) <= u * x && E(D)) {
                  m = D.getLocation();
                  break;
                }
              }
            }
            return !m && v && this._contains(e) || m && !y && !b ? new T("fill", this) : m ? new T(y ? "stroke" : "curve", this, {
              location: m,
              point: m.getPoint()
            }) : null;
          }
        }, c.each(B._evaluateMethods, function (e) {
          this[e + "At"] = function (t) {
            var r = this.getLocationAt(t);
            return r && r[e]();
          };
        }, {
          beans: !1,
          getLocationOf: function () {
            for (var e = f.read(arguments), t = this.getCurves(), r = 0, n = t.length; r < n; r++) {
              var i = t[r].getLocationOf(e);
              if (i) return i;
            }
            return null;
          },
          getOffsetOf: function () {
            var e = this.getLocationOf.apply(this, arguments);
            return e ? e.getOffset() : null;
          },
          getLocationAt: function (e) {
            if ("number" == typeof e) {
              for (var t = this.getCurves(), r = 0, n = 0, i = t.length; n < i; n++) {
                var o = r,
                  s = t[n];
                if ((r += s.getLength()) > e) return s.getLocationAt(e - o);
              }
              if (t.length > 0 && e <= this.getLength()) return new F(t[t.length - 1], 1);
            } else if (e && e.getPath && e.getPath() === this) return e;
            return null;
          },
          getOffsetsWithTangent: function () {
            var e = f.read(arguments);
            if (e.isZero()) return [];
            for (var t = [], r = 0, n = this.getCurves(), i = 0, o = n.length; i < o; i++) {
              for (var s = n[i], a = s.getTimesWithTangent(e), l = 0, c = a.length; l < c; l++) {
                var d = r + s.getOffsetAtTime(a[l]);
                t.indexOf(d) < 0 && t.push(d);
              }
              r += s.length;
            }
            return t;
          }
        }), new function () {
          function e(e, t, r, n) {
            if (!(n <= 0)) for (var i = n / 2, o = n - 2, s = i - 1, a = new Array(6), l, c, d = 0, h = t.length; d < h; d++) {
              var p = t[d],
                u = p._selection;
              if (p._transformCoordinates(r, a), l = a[0], c = a[1], 2 & u && m(2), 4 & u && m(4), e.fillRect(l - i, c - i, n, n), o > 0 && !(1 & u)) {
                var g = e.fillStyle;
                e.fillStyle = "#ffffff", e.fillRect(l - s, c - s, o, o), e.fillStyle = g;
              }
            }
            function m(t) {
              var r = a[t],
                n = a[t + 1];
              l == r && c == n || (e.beginPath(), e.moveTo(l, c), e.lineTo(r, n), e.stroke(), e.beginPath(), e.arc(r, n, i, 0, 2 * Math.PI, !0), e.fill());
            }
          }
          function t(e, t, r) {
            var n = t._segments,
              i = n.length,
              o = new Array(6),
              s = !0,
              a,
              l,
              c,
              d,
              h,
              p,
              u,
              g;
            function m(t) {
              if (r) t._transformCoordinates(r, o), a = o[0], l = o[1];else {
                var n = t._point;
                a = n._x, l = n._y;
              }
              if (s) e.moveTo(a, l), s = !1;else {
                if (r) h = o[2], p = o[3];else {
                  var i = t._handleIn;
                  h = a + i._x, p = l + i._y;
                }
                h === a && p === l && u === c && g === d ? e.lineTo(a, l) : e.bezierCurveTo(u, g, h, p, a, l);
              }
              if (c = a, d = l, r) u = o[4], g = o[5];else {
                var i = t._handleOut;
                u = c + i._x, g = d + i._y;
              }
            }
            for (var f = 0; f < i; f++) m(n[f]);
            t._closed && i > 0 && m(n[0]);
          }
          return {
            _draw: function (e, r, n, i) {
              var o = r.dontStart,
                s = r.dontFinish || r.clip,
                a = this.getStyle(),
                l = a.hasFill(),
                c = a.hasStroke(),
                d = a.getDashArray(),
                h = !de.support.nativeDash && c && d && d.length;
              function p(e) {
                return d[(e % h + h) % h];
              }
              if (o || e.beginPath(), (l || c && !h || s) && (t(e, this, i), this._closed && e.closePath()), !s && (l || c) && (this._setStyles(e, r, n), l && (e.fill(a.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), c)) {
                if (h) {
                  o || e.beginPath();
                  var u = new z(this, .25, 32, !1, i),
                    g = u.length,
                    m = -a.getDashOffset(),
                    f,
                    y = 0;
                  for (m %= g; m > 0;) m -= p(y--) + p(y--);
                  for (; m < g;) f = m + p(y++), (m > 0 || f > 0) && u.drawPart(e, Math.max(m, 0), Math.max(f, 0)), m = f + p(y++);
                }
                e.stroke();
              }
            },
            _drawSelected: function (r, n) {
              r.beginPath(), t(r, this, n), r.stroke(), e(r, this._segments, n, de.settings.handleSize);
            }
          };
        }(), new function () {
          function e(e) {
            var t = e._segments;
            if (!t.length) throw new Error("Use a moveTo() command first");
            return t[t.length - 1];
          }
          return {
            moveTo: function () {
              var e = this._segments;
              1 === e.length && this.removeSegment(0), e.length || this._add([new L(f.read(arguments))]);
            },
            moveBy: function () {
              throw new Error("moveBy() is unsupported on Path items.");
            },
            lineTo: function () {
              this._add([new L(f.read(arguments))]);
            },
            cubicCurveTo: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = f.read(arguments),
                i = e(this);
              i.setHandleOut(t.subtract(i._point)), this._add([new L(n, r.subtract(n))]);
            },
            quadraticCurveTo: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = e(this)._point;
              this.cubicCurveTo(t.add(n.subtract(t).multiply(1 / 3)), t.add(r.subtract(t).multiply(1 / 3)), r);
            },
            curveTo: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = c.pick(c.read(arguments), .5),
                i = 1 - n,
                o = e(this)._point,
                s = t.subtract(o.multiply(i * i)).subtract(r.multiply(n * n)).divide(2 * n * i);
              if (s.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + n);
              this.quadraticCurveTo(s, r);
            },
            arcTo: function () {
              var t = Math.abs,
                r = Math.sqrt,
                n = e(this),
                i = n._point,
                o = f.read(arguments),
                s,
                a = c.peek(arguments),
                l,
                d,
                h,
                p,
                u;
              if ("boolean" == typeof (l = c.pick(a, !0))) var m,
                s = (m = i.add(o).divide(2)).add(m.subtract(i).rotate(l ? -90 : 90));else if (c.remain(arguments) <= 2) s = o, o = f.read(arguments);else if (!i.equals(o)) {
                var y = v.read(arguments),
                  b = g.isZero;
                if (b(y.width) || b(y.height)) return this.lineTo(o);
                var x = c.read(arguments),
                  l = !!c.read(arguments),
                  C = !!c.read(arguments),
                  m = i.add(o).divide(2),
                  w,
                  E = (w = i.subtract(m).rotate(-x)).x,
                  k = w.y,
                  O = t(y.width),
                  D = t(y.height),
                  P = O * O,
                  M = D * D,
                  I = E * E,
                  T = k * k,
                  R = r(I / P + T / M);
                if (R > 1 && (P = (O *= R) * O, M = (D *= R) * D), t(R = (P * M - P * T - M * I) / (P * T + M * I)) < 1e-12 && (R = 0), R < 0) throw new Error("Cannot create an arc with the given arguments");
                d = new f(O * k / D, -D * E / O).multiply((C === l ? -1 : 1) * r(R)).rotate(x).add(m), h = (p = (u = new S().translate(d).rotate(x).scale(O, D))._inverseTransform(i)).getDirectedAngle(u._inverseTransform(o)), !l && h > 0 ? h -= 360 : l && h < 0 && (h += 360);
              }
              if (s) {
                var B = new A(i.add(s).divide(2), s.subtract(i).rotate(90), !0),
                  F = new A(s.add(o).divide(2), o.subtract(s).rotate(90), !0),
                  j = new A(i, o),
                  _ = j.getSide(s);
                if (!(d = B.intersect(F, !0))) {
                  if (!_) return this.lineTo(o);
                  throw new Error("Cannot create an arc with the given arguments");
                }
                h = (p = i.subtract(d)).getDirectedAngle(o.subtract(d));
                var N = j.getSide(d, !0);
                0 === N ? h = _ * t(h) : _ === N && (h += h < 0 ? 360 : -360);
              }
              if (h) {
                for (var z = 1e-7, H = t(h), W = H >= 360 ? 4 : Math.ceil((H - z) / 90), V = h / W, U = V * Math.PI / 360, q = 4 / 3 * Math.sin(U) / (1 + Math.cos(U)), G = [], K = 0; K <= W; K++) {
                  var w = o,
                    Z = null;
                  if (K < W && (Z = p.rotate(90).multiply(q), u ? (w = u._transformPoint(p), Z = u._transformPoint(p.add(Z)).subtract(w)) : w = d.add(p)), K) {
                    var Y = p.rotate(-90).multiply(q);
                    u && (Y = u._transformPoint(p.add(Y)).subtract(w)), G.push(new L(w, Y, Z));
                  } else n.setHandleOut(Z);
                  p = p.rotate(V);
                }
                this._add(G);
              }
            },
            lineBy: function () {
              var t = f.read(arguments),
                r = e(this)._point;
              this.lineTo(r.add(t));
            },
            curveBy: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = c.read(arguments),
                i = e(this)._point;
              this.curveTo(i.add(t), i.add(r), n);
            },
            cubicCurveBy: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = f.read(arguments),
                i = e(this)._point;
              this.cubicCurveTo(i.add(t), i.add(r), i.add(n));
            },
            quadraticCurveBy: function () {
              var t = f.read(arguments),
                r = f.read(arguments),
                n = e(this)._point;
              this.quadraticCurveTo(n.add(t), n.add(r));
            },
            arcBy: function () {
              var t = e(this)._point,
                r = t.add(f.read(arguments)),
                n = c.pick(c.peek(arguments), !0);
              "boolean" == typeof n ? this.arcTo(r, n) : this.arcTo(r, t.add(f.read(arguments)));
            },
            closePath: function (e) {
              this.setClosed(!0), this.join(this, e);
            }
          };
        }(), {
          _getBounds: function (e, t) {
            var r = t.handle ? "getHandleBounds" : t.stroke ? "getStrokeBounds" : "getBounds";
            return _[r](this._segments, this._closed, this, e, t);
          },
          statics: {
            getBounds: function (e, t, r, n, i, o) {
              var s = e[0];
              if (!s) return new x();
              var a = new Array(6),
                l = s._transformCoordinates(n, new Array(6)),
                c = l.slice(0, 2),
                d = c.slice(),
                h = new Array(2);
              function p(e) {
                e._transformCoordinates(n, a);
                for (var t = 0; t < 2; t++) B._addBounds(l[t], l[t + 4], a[t + 2], a[t], t, o ? o[t] : 0, c, d, h);
                var r = l;
                l = a, a = r;
              }
              for (var u = 1, g = e.length; u < g; u++) p(e[u]);
              return t && p(s), new x(c[0], c[1], d[0] - c[0], d[1] - c[1]);
            },
            getStrokeBounds: function (e, t, r, n, i) {
              var o = r.getStyle(),
                s = o.hasStroke(),
                a = o.getStrokeWidth(),
                l = s && r._getStrokeMatrix(n, i),
                c = s && _._getStrokePadding(a, l),
                d = _.getBounds(e, t, r, n, i, c);
              if (!s) return d;
              var h = a / 2,
                p = o.getStrokeJoin(),
                u = o.getStrokeCap(),
                g = o.getMiterLimit(),
                m = new x(new v(c));
              function f(e) {
                d = d.include(e);
              }
              function y(e) {
                d = d.unite(m.setCenter(e._point.transform(n)));
              }
              function b(e, t) {
                "round" === t || e.isSmooth() ? y(e) : _._addBevelJoin(e, t, h, g, n, l, f);
              }
              function C(e, t) {
                "round" === t ? y(e) : _._addSquareCap(e, t, h, n, l, f);
              }
              for (var S = e.length - (t ? 0 : 1), A = 1; A < S; A++) b(e[A], p);
              return t ? b(e[0], p) : S > 0 && (C(e[0], u), C(e[e.length - 1], u)), d;
            },
            _getStrokePadding: function (e, t) {
              if (!t) return [e, e];
              var r = new f(e, 0).transform(t),
                n = new f(0, e).transform(t),
                i = r.getAngleInRadians(),
                o = r.getLength(),
                s = n.getLength(),
                a = Math.sin(i),
                l = Math.cos(i),
                c = Math.tan(i),
                d = Math.atan2(s * c, o),
                h = Math.atan2(s, c * o);
              return [Math.abs(o * Math.cos(d) * l + s * Math.sin(d) * a), Math.abs(s * Math.sin(h) * l + o * Math.cos(h) * a)];
            },
            _addBevelJoin: function (e, t, r, n, i, o, s, a) {
              var l = e.getCurve(),
                c = l.getPrevious(),
                d = l.getPoint1().transform(i),
                h = c.getNormalAtTime(1).multiply(r).transform(o),
                p = l.getNormalAtTime(0).multiply(r).transform(o),
                u = h.getDirectedAngle(p);
              if ((u < 0 || u >= 180) && (h = h.negate(), p = p.negate()), a && s(d), s(d.add(h)), "miter" === t) {
                var g = new A(d.add(h), new f(-h.y, h.x), !0).intersect(new A(d.add(p), new f(-p.y, p.x), !0), !0);
                g && d.getDistance(g) <= n * r && s(g);
              }
              s(d.add(p));
            },
            _addSquareCap: function (e, t, r, n, i, o, s) {
              var a = e._point.transform(n),
                l = e.getLocation(),
                c = l.getNormal().multiply(0 === l.getTime() ? r : -r).transform(i);
              "square" === t && (s && (o(a.subtract(c)), o(a.add(c))), a = a.add(c.rotate(-90))), o(a.add(c)), o(a.subtract(c));
            },
            getHandleBounds: function (e, t, r, n, i) {
              var o = r.getStyle(),
                s,
                a,
                l;
              if (i.stroke && o.hasStroke()) {
                var c = r._getStrokeMatrix(n, i),
                  d = o.getStrokeWidth() / 2,
                  h = d;
                "miter" === o.getStrokeJoin() && (h = d * o.getMiterLimit()), "square" === o.getStrokeCap() && (h = Math.max(h, d * Math.SQRT2)), a = _._getStrokePadding(d, c), l = _._getStrokePadding(h, c);
              }
              for (var p = new Array(6), u = 1 / 0, g = -u, m = u, f = g, y = 0, v = e.length; y < v; y++) {
                var b;
                e[y]._transformCoordinates(n, p);
                for (var C = 0; C < 6; C += 2) {
                  var S = C ? a : l,
                    A = S ? S[0] : 0,
                    w = S ? S[1] : 0,
                    E = p[C],
                    k = p[C + 1],
                    O = E - A,
                    D = E + A,
                    P = k - w,
                    M = k + w;
                  O < u && (u = O), D > g && (g = D), P < m && (m = P), M > f && (f = M);
                }
              }
              return new x(u, m, g - u, f - m);
            }
          }
        });
      _.inject({
        statics: new function () {
          var e = .5522847498307936,
            t = [new L([-1, 0], [0, e], [0, -e]), new L([0, -1], [-e, 0], [e, 0]), new L([1, 0], [0, -e], [0, e]), new L([0, 1], [e, 0], [-e, 0])];
          function r(e, t, r) {
            var n = c.getNamed(r),
              i = new _(n && 0 == n.insert && E.NO_INSERT);
            return i._add(e), i._closed = t, i.set(n, {
              insert: !0
            });
          }
          function n(e, n, i) {
            for (var o = new Array(4), s = 0; s < 4; s++) {
              var a = t[s];
              o[s] = new L(a._point.multiply(n).add(e), a._handleIn.multiply(n), a._handleOut.multiply(n));
            }
            return r(o, !0, i);
          }
          return {
            Line: function () {
              return r([new L(f.readNamed(arguments, "from")), new L(f.readNamed(arguments, "to"))], !1, arguments);
            },
            Circle: function () {
              var e = f.readNamed(arguments, "center"),
                t = c.readNamed(arguments, "radius");
              return n(e, new v(t), arguments);
            },
            Rectangle: function () {
              var t = x.readNamed(arguments, "rectangle"),
                n = v.readNamed(arguments, "radius", 0, {
                  readNull: !0
                }),
                i = t.getBottomLeft(!0),
                o = t.getTopLeft(!0),
                s = t.getTopRight(!0),
                a = t.getBottomRight(!0),
                l;
              if (!n || n.isZero()) l = [new L(i), new L(o), new L(s), new L(a)];else {
                var c = (n = v.min(n, t.getSize(!0).divide(2))).width,
                  d = n.height,
                  h = c * e,
                  p = d * e;
                l = [new L(i.add(c, 0), null, [-h, 0]), new L(i.subtract(0, d), [0, p]), new L(o.add(0, d), null, [0, -p]), new L(o.add(c, 0), [-h, 0], null), new L(s.subtract(c, 0), null, [h, 0]), new L(s.add(0, d), [0, -p], null), new L(a.subtract(0, d), null, [0, p]), new L(a.subtract(c, 0), [h, 0])];
              }
              return r(l, !0, arguments);
            },
            RoundRectangle: "#Rectangle",
            Ellipse: function () {
              var e = D._readEllipse(arguments);
              return n(e.center, e.radius, arguments);
            },
            Oval: "#Ellipse",
            Arc: function () {
              var e = f.readNamed(arguments, "from"),
                t = f.readNamed(arguments, "through"),
                r = f.readNamed(arguments, "to"),
                n = c.getNamed(arguments),
                i = new _(n && 0 == n.insert && E.NO_INSERT);
              return i.moveTo(e), i.arcTo(t, r), i.set(n);
            },
            RegularPolygon: function () {
              for (var e = f.readNamed(arguments, "center"), t = c.readNamed(arguments, "sides"), n = c.readNamed(arguments, "radius"), i = 360 / t, o = t % 3 == 0, s = new f(0, o ? -n : n), a = o ? -1 : .5, l = new Array(t), d = 0; d < t; d++) l[d] = new L(e.add(s.rotate((d + a) * i)));
              return r(l, !0, arguments);
            },
            Star: function () {
              for (var e = f.readNamed(arguments, "center"), t = 2 * c.readNamed(arguments, "points"), n = c.readNamed(arguments, "radius1"), i = c.readNamed(arguments, "radius2"), o = 360 / t, s = new f(0, -1), a = new Array(t), l = 0; l < t; l++) a[l] = new L(e.add(s.rotate(o * l).multiply(l % 2 ? i : n)));
              return r(a, !0, arguments);
            }
          };
        }()
      });
      var N = j.extend({
        _class: "CompoundPath",
        _serializeFields: {
          children: []
        },
        beans: !0,
        initialize: function e(t) {
          this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments));
        },
        insertChildren: function e(t, r) {
          var n = r,
            i = n[0];
          i && "number" == typeof i[0] && (n = [n]);
          for (var o = r.length - 1; o >= 0; o--) {
            var s = n[o];
            n !== r || s instanceof _ || (n = c.slice(n)), Array.isArray(s) ? n[o] = new _({
              segments: s,
              insert: !1
            }) : s instanceof N && (n.splice.apply(n, [o, 1].concat(s.removeChildren())), s.remove());
          }
          return e.base.call(this, t, n);
        },
        reduce: function e(t) {
          for (var r = this._children, n = r.length - 1, i; n >= 0; n--) {
            var i;
            (i = r[n].reduce(t)).isEmpty() && i.remove();
          }
          return r.length ? e.base.call(this) : ((i = new _(E.NO_INSERT)).copyAttributes(this), i.insertAbove(this), this.remove(), i);
        },
        isClosed: function () {
          for (var e = this._children, t = 0, r = e.length; t < r; t++) if (!e[t]._closed) return !1;
          return !0;
        },
        setClosed: function (e) {
          for (var t = this._children, r = 0, n = t.length; r < n; r++) t[r].setClosed(e);
        },
        getFirstSegment: function () {
          var e = this.getFirstChild();
          return e && e.getFirstSegment();
        },
        getLastSegment: function () {
          var e = this.getLastChild();
          return e && e.getLastSegment();
        },
        getCurves: function () {
          for (var e = this._children, t = [], r = 0, n = e.length; r < n; r++) c.push(t, e[r].getCurves());
          return t;
        },
        getFirstCurve: function () {
          var e = this.getFirstChild();
          return e && e.getFirstCurve();
        },
        getLastCurve: function () {
          var e = this.getLastChild();
          return e && e.getLastCurve();
        },
        getArea: function () {
          for (var e = this._children, t = 0, r = 0, n = e.length; r < n; r++) t += e[r].getArea();
          return t;
        },
        getLength: function () {
          for (var e = this._children, t = 0, r = 0, n = e.length; r < n; r++) t += e[r].getLength();
          return t;
        },
        getPathData: function (e, t) {
          for (var r = this._children, n = [], i = 0, o = r.length; i < o; i++) {
            var s = r[i],
              a = s._matrix;
            n.push(s.getPathData(e && !a.isIdentity() ? e.appended(a) : e, t));
          }
          return n.join("");
        },
        _hitTestChildren: function e(t, r, n) {
          return e.base.call(this, t, r.class === _ || "path" === r.type ? r : c.set({}, r, {
            fill: !1
          }), n);
        },
        _draw: function (e, t, r, n) {
          var i = this._children;
          if (i.length) {
            t = t.extend({
              dontStart: !0,
              dontFinish: !0
            }), e.beginPath();
            for (var o = 0, s = i.length; o < s; o++) i[o].draw(e, t, n);
            if (!t.clip) {
              this._setStyles(e, t, r);
              var a = this._style;
              a.hasFill() && (e.fill(a.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), a.hasStroke() && e.stroke();
            }
          }
        },
        _drawSelected: function (e, t, r) {
          for (var n = this._children, i = 0, o = n.length; i < o; i++) {
            var s = n[i],
              a = s._matrix;
            r[s._id] || s._drawSelected(e, a.isIdentity() ? t : t.appended(a));
          }
        }
      }, new function () {
        function e(e, t) {
          var r = e._children;
          if (t && !r.length) throw new Error("Use a moveTo() command first");
          return r[r.length - 1];
        }
        return c.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function (t) {
          this[t] = function () {
            var r = e(this, !0);
            r[t].apply(r, arguments);
          };
        }, {
          moveTo: function () {
            var t = e(this),
              r = t && t.isEmpty() ? t : new _(E.NO_INSERT);
            r !== t && this.addChild(r), r.moveTo.apply(r, arguments);
          },
          moveBy: function () {
            var t = e(this, !0),
              r = t && t.getLastSegment(),
              n = f.read(arguments);
            this.moveTo(r ? n.add(r._point) : n);
          },
          closePath: function (t) {
            e(this, !0).closePath(t);
          }
        });
      }(), c.each(["reverse", "flatten", "simplify", "smooth"], function (e) {
        this[e] = function (t) {
          for (var r = this._children, n, i = 0, o = r.length; i < o; i++) n = r[i][e](t) || n;
          return n;
        };
      }, {}));
      j.inject(new function () {
        var e = Math.min,
          t = Math.max,
          r = Math.abs,
          n = {
            unite: {
              1: !0,
              2: !0
            },
            intersect: {
              2: !0
            },
            subtract: {
              1: !0
            },
            exclude: {
              1: !0,
              "-1": !0
            }
          };
        function i(e, t) {
          var r = e.clone(!1).reduce({
            simplify: !0
          }).transform(null, !0, !0);
          return t ? r.resolveCrossings().reorient("nonzero" === r.getFillRule(), !0) : r;
        }
        function o(e, t, r, n, i) {
          var o = new N(E.NO_INSERT);
          return o.addChildren(e, !0), o = o.reduce({
            simplify: t
          }), i && 0 == i.insert || o.insertAbove(n && r.isSibling(n) && r.getIndex() < n.getIndex() ? n : r), o.copyAttributes(r, !0), o;
        }
        function a(e, t, r, s) {
          if (s && (0 == s.trace || s.stroke) && /^(subtract|intersect)$/.test(r)) return l(e, t, r);
          var a = i(e, !0),
            d = t && e !== t && i(t, !0),
            h = n[r];
          h[r] = !0, d && (h.subtract || h.exclude) ^ d.isClockwise() ^ a.isClockwise() && d.reverse();
          var g = u(F.expand(a.getCrossings(d))),
            m = a._children || [a],
            v = d && (d._children || [d]),
            b = [],
            x = [],
            C;
          function S(e) {
            for (var t = 0, r = e.length; t < r; t++) {
              var n = e[t];
              c.push(b, n._segments), c.push(x, n.getCurves()), n._overlapsOnly = !0;
            }
          }
          if (g.length) {
            S(m), v && S(v);
            for (var A = 0, w = g.length; A < w; A++) f(g[A]._segment, a, d, x, h);
            for (var A = 0, w = b.length; A < w; A++) {
              var E = b[A],
                k = E._intersection;
              E._winding || f(E, a, d, x, h), k && k._overlap || (E._path._overlapsOnly = !1);
            }
            C = y(b, h);
          } else C = p(v ? m.concat(v) : m.slice(), function (e) {
            return !!h[e];
          });
          return o(C, !0, e, t, s);
        }
        function l(e, t, r) {
          var n = i(e),
            s = i(t),
            a = n.getCrossings(s),
            l = "subtract" === r,
            c = "divide" === r,
            d = {},
            h = [];
          function p(e) {
            if (!d[e._id] && (c || s.contains(e.getPointAt(e.getLength() / 2)) ^ l)) return h.unshift(e), d[e._id] = !0;
          }
          for (var u = a.length - 1; u >= 0; u--) {
            var g = a[u].split();
            g && (p(g) && g.getFirstSegment().setHandleIn(0, 0), n.getLastSegment().setHandleOut(0, 0));
          }
          return p(n), o(h, !1, e, t);
        }
        function d(e, t) {
          for (var r = e; r;) {
            if (r === t) return;
            r = r._previous;
          }
          for (; e._next && e._next !== t;) e = e._next;
          if (!e._next) {
            for (; t._previous;) t = t._previous;
            e._next = t, t._previous = e;
          }
        }
        function h(e) {
          for (var t = e.length - 1; t >= 0; t--) e[t].clearHandles();
        }
        function p(e, t, n) {
          var i = e && e.length;
          if (i) {
            var o = c.each(e, function (e, t) {
                this[e._id] = {
                  container: null,
                  winding: e.isClockwise() ? 1 : -1,
                  index: t
                };
              }, {}),
              s = e.slice().sort(function (e, t) {
                return r(t.getArea()) - r(e.getArea());
              }),
              a = s[0];
            null == n && (n = a.isClockwise());
            for (var l = 0; l < i; l++) {
              for (var d = s[l], h = o[d._id], p = d.getInteriorPoint(), u = 0, g = l - 1; g >= 0; g--) {
                var m = s[g];
                if (m.contains(p)) {
                  var f = o[m._id];
                  u = f.winding, h.winding += u, h.container = f.exclude ? f.container : m;
                  break;
                }
              }
              if (t(h.winding) === t(u)) h.exclude = !0, e[h.index] = null;else {
                var y = h.container;
                d.setClockwise(y ? !y.isClockwise() : n);
              }
            }
          }
          return e;
        }
        function u(e, t, r) {
          var n = t && [],
            i = 1e-8,
            o = 1 - i,
            s = !1,
            a = r || [],
            l = r && {},
            c,
            p,
            u;
          function g(e) {
            return e._path._id + "." + e._segment1._index;
          }
          for (var m = (r && r.length) - 1; m >= 0; m--) {
            var f;
            (f = r[m])._path && (l[g(f)] = !0);
          }
          for (var m = e.length - 1; m >= 0; m--) {
            var y = e[m],
              v = y._time,
              b = v,
              x = t && !t(y),
              f,
              C;
            if ((f = y._curve) && (f !== p ? (s = !f.hasHandles() || l && l[g(f)], c = [], u = null, p = f) : u >= i && (v /= u)), x) c && c.push(y);else {
              if (t && n.unshift(y), u = b, v < i) C = f._segment1;else if (v > o) C = f._segment2;else {
                var S = f.divideAtTime(v, !0);
                s && a.push(f, S), C = S._segment1;
                for (var A = c.length - 1; A >= 0; A--) {
                  var w = c[A];
                  w._time = (w._time - v) / (1 - v);
                }
              }
              y._setSegment(C);
              var E = C._intersection,
                k = y._intersection;
              if (E) {
                d(E, k);
                for (var O = E; O;) d(O._intersection, E), O = O._next;
              } else C._intersection = k;
            }
          }
          return r || h(a), n || e;
        }
        function m(n, i, o, s, a) {
          var l = o ? 1 : 0,
            c = 1 ^ l,
            d = [n.x, n.y],
            h = d[l],
            p = d[c],
            u = 1e-9,
            g = 1e-6,
            f = h - u,
            y = h + u,
            v = 0,
            b = 0,
            x = 0,
            C = 0,
            S = !1,
            A = !1,
            w = 1,
            E = [],
            k,
            O;
          function D(r) {
            var d = r[c + 0],
              u = r[c + 6];
            if (!(p < e(d, u) || p > t(d, u))) {
              var v = r[l + 0],
                b = r[l + 2],
                A = r[l + 4],
                O = r[l + 6];
              if (d !== u) {
                var D = p === d ? 0 : p === u || f > t(v, b, A, O) || y < e(v, b, A, O) ? 1 : B.solveCubic(r, c, p, E, 0, 1) > 0 ? E[0] : 1,
                  P = 0 === D ? v : 1 === D ? O : B.getPoint(r, D)[o ? "y" : "x"],
                  M = d > u ? 1 : -1,
                  I = k[c] > k[c + 6] ? 1 : -1,
                  T = k[l + 6];
                return p !== d ? (P < f ? x += M : P > y ? C += M : S = !0, P > h - g && P < h + g && (w /= 2)) : (M !== I ? v < f ? x += M : v > y && (C += M) : v != T && (T < y && P > y ? (C += M, S = !0) : T > f && P < f && (x += M, S = !0)), w = 0), k = r, !a && P > f && P < y && 0 === B.getTangent(r, D)[o ? "x" : "y"] && m(n, i, !o, s, !0);
              }
              (v < y && O > f || O < y && v > f) && (S = !0);
            }
          }
          function P(r) {
            var n = r[c + 0],
              i = r[c + 2],
              s = r[c + 4],
              a = r[c + 6];
            if (p <= t(n, i, s, a) && p >= e(n, i, s, a)) for (var d = r[l + 0], h = r[l + 2], u = r[l + 4], g = r[l + 6], m = f > t(d, h, u, g) || y < e(d, h, u, g) ? [r] : B.getMonoCurves(r, o), v, b = 0, x = m.length; b < x; b++) if (v = D(m[b])) return v;
          }
          for (var M = 0, I = i.length; M < I; M++) {
            var T = i[M],
              L = T._path,
              R = T.getValues(),
              F;
            if (!(M && i[M - 1]._path === L || (k = null, L._closed || (O = B.getValues(L.getLastCurve().getSegment2(), T.getSegment1(), null, !s))[c] !== O[c + 6] && (k = O), k))) {
              k = R;
              for (var j = L.getLastCurve(); j && j !== T;) {
                var _ = j.getValues();
                if (_[c] !== _[c + 6]) {
                  k = _;
                  break;
                }
                j = j.getPrevious();
              }
            }
            if (F = P(R)) return F;
            if (M + 1 === I || i[M + 1]._path !== L) {
              if (O && (F = P(O))) return F;
              !S || x || C || (x = C = L.isClockwise(s) ^ o ? 1 : -1), v += x, b += C, x = C = 0, S && (A = !0, S = !1), O = null;
            }
          }
          return v = r(v), b = r(b), {
            winding: t(v, b),
            windingL: v,
            windingR: b,
            quality: w,
            onPath: A
          };
        }
        function f(e, t, n, i, o) {
          var s = [],
            a = e,
            l = 0,
            c;
          do {
            var d,
              h = (d = e.getCurve()).getLength();
            s.push({
              segment: e,
              curve: d,
              length: h
            }), l += h, e = e.getNext();
          } while (e && !e._intersection && e !== a);
          for (var p = [.5, .25, .75], c = {
              winding: 0,
              quality: -1
            }, u = 1e-8, f = 1 - u, y = 0; y < p.length && c.quality < .5; y++) for (var h = l * p[y], v = 0, b = s.length; v < b; v++) {
            var x = s[v],
              C = x.length;
            if (h <= C) {
              var d,
                S = (d = x.curve)._path,
                A = S._parent,
                w = A instanceof N ? A : S,
                E = g.clamp(d.getTimeAt(h), u, f),
                k = d.getPointAtTime(E),
                O = r(d.getTangentAtTime(E).y) < Math.SQRT1_2,
                D = null;
              if (o.subtract && n) {
                var P = w === t ? n._getWinding(k, O, !0) : t._getWinding(k, O, !0);
                if (w === t && P.winding || w === n && !P.winding) {
                  if (P.quality < 1) continue;
                  D = {
                    winding: 0,
                    quality: 1
                  };
                }
              }
              (D = D || m(k, i, O, !0)).quality > c.quality && (c = D);
              break;
            }
            h -= C;
          }
          for (var v = s.length - 1; v >= 0; v--) s[v].segment._winding = c;
        }
        function y(e, t) {
          var r = [],
            n;
          function i(e) {
            var r;
            return !(!e || e._visited || t && (!t[(r = e._winding || {}).winding] || t.unite && 2 === r.winding && r.windingL && r.windingR));
          }
          function o(e) {
            if (e) for (var t = 0, r = n.length; t < r; t++) if (e === n[t]) return !0;
            return !1;
          }
          function s(e) {
            for (var t = e._segments, r = 0, n = t.length; r < n; r++) t[r]._visited = !0;
          }
          function a(e, t) {
            var r = e._intersection,
              s = r,
              a = [];
            function l(r, s) {
              for (; r && r !== s;) {
                var l = r._segment,
                  c = l && l._path;
                if (c) {
                  var d = l.getNext() || c.getFirstSegment(),
                    h = d._intersection;
                  l !== e && (o(l) || o(d) || d && i(l) && (i(d) || h && i(h._segment))) && a.push(l), t && n.push(l);
                }
                r = r._next;
              }
            }
            if (t && (n = [e]), r) {
              for (l(r); r && r._prev;) r = r._prev;
              l(r, s);
            }
            return a;
          }
          e.sort(function (e, t) {
            var r = e._intersection,
              n = t._intersection,
              i = !(!r || !r._overlap),
              o = !(!n || !n._overlap),
              s = e._path,
              a = t._path;
            return i ^ o ? i ? 1 : -1 : !r ^ !n ? r ? 1 : -1 : s !== a ? s._id - a._id : e._index - t._index;
          });
          for (var l = 0, c = e.length; l < c; l++) {
            var d = e[l],
              h = i(d),
              p = null,
              u = !1,
              g = !0,
              m = [],
              f,
              y,
              v;
            if (h && d._path._overlapsOnly) {
              var b = d._path,
                x = d._intersection._segment._path;
              b.compare(x) && (b.getArea() && r.push(b.clone(!1)), s(b), s(x), h = !1);
            }
            for (; h;) {
              var C = !p,
                S = a(d, C),
                A = S.shift(),
                u,
                w = !(u = !C && (o(d) || o(A))) && A;
              if (C && (p = new _(E.NO_INSERT), f = null), u) {
                (d.isFirst() || d.isLast()) && (g = d._path._closed), d._visited = !0;
                break;
              }
              if (w && f && (m.push(f), f = null), f || (w && S.push(d), f = {
                start: p._segments.length,
                crossings: S,
                visited: y = [],
                handleIn: v
              }), w && (d = A), !i(d)) {
                p.removeSegments(f.start);
                for (var k = 0, O = y.length; k < O; k++) y[k]._visited = !1;
                y.length = 0;
                do {
                  (d = f && f.crossings.shift()) && d._path || (d = null, (f = m.pop()) && (y = f.visited, v = f.handleIn));
                } while (f && !i(d));
                if (!d) break;
              }
              var D = d.getNext();
              p.add(new L(d._point, v, D && d._handleOut)), d._visited = !0, y.push(d), d = D || d._path.getFirstSegment(), v = D && D._handleIn;
            }
            u && (g && (p.getFirstSegment().setHandleIn(v), p.setClosed(g)), 0 !== p.getArea() && r.push(p));
          }
          return r;
        }
        return {
          _getWinding: function (e, t, r) {
            return m(e, this.getCurves(), t, r);
          },
          unite: function (e, t) {
            return a(this, e, "unite", t);
          },
          intersect: function (e, t) {
            return a(this, e, "intersect", t);
          },
          subtract: function (e, t) {
            return a(this, e, "subtract", t);
          },
          exclude: function (e, t) {
            return a(this, e, "exclude", t);
          },
          divide: function (e, t) {
            return t && (0 == t.trace || t.stroke) ? l(this, e, "divide") : o([this.subtract(e, t), this.intersect(e, t)], !0, this, e, t);
          },
          resolveCrossings: function () {
            var e = this._children,
              t = e || [this];
            function r(e, t) {
              var r = e && e._intersection;
              return r && r._overlap && r._path === t;
            }
            var n = !1,
              i = !1,
              o = this.getIntersections(null, function (e) {
                return e.hasOverlap() && (n = !0) || e.isCrossing() && (i = !0);
              }),
              s = n && i && [];
            if (o = F.expand(o), n) for (var a = u(o, function (e) {
                return e.hasOverlap();
              }, s), l = a.length - 1; l >= 0; l--) {
              var d = a[l],
                p = d._path,
                g = d._segment,
                m = g.getPrevious(),
                f = g.getNext();
              r(m, p) && r(f, p) && (g.remove(), m._handleOut._set(0, 0), f._handleIn._set(0, 0), m === g || m.getCurve().hasLength() || (f._handleIn.set(m._handleIn), m.remove()));
            }
            i && (u(o, n && function (e) {
              var t = e.getCurve(),
                r = e.getSegment(),
                n = e._intersection,
                i = n._curve,
                o = n._segment;
              if (t && i && t._path && i._path) return !0;
              r && (r._intersection = null), o && (o._intersection = null);
            }, s), s && h(s), t = y(c.each(t, function (e) {
              c.push(this, e._segments);
            }, [])));
            var v = t.length,
              b;
            return v > 1 && e ? (t !== e && this.setChildren(t), b = this) : 1 !== v || e || (t[0] !== this && this.setSegments(t[0].removeSegments()), b = this), b || ((b = new N(E.NO_INSERT)).addChildren(t), (b = b.reduce()).copyAttributes(this), this.replaceWith(b)), b;
          },
          reorient: function (e, t) {
            var r = this._children;
            return r && r.length ? this.setChildren(p(this.removeChildren(), function (t) {
              return !!(e ? t : 1 & t);
            }, t)) : t !== s && this.setClockwise(t), this;
          },
          getInteriorPoint: function () {
            var r,
              n = this.getBounds().getCenter(!0);
            if (!this.contains(n)) {
              for (var i = this.getCurves(), o = n.y, s = [], a = [], l = 0, c = i.length; l < c; l++) {
                var d = i[l].getValues(),
                  h = d[1],
                  p = d[3],
                  u = d[5],
                  g = d[7];
                if (o >= e(h, p, u, g) && o <= t(h, p, u, g)) for (var m = B.getMonoCurves(d), f = 0, y = m.length; f < y; f++) {
                  var v = m[f],
                    b = v[1],
                    x = v[7];
                  if (b !== x && (o >= b && o <= x || o >= x && o <= b)) {
                    var C = o === b ? v[0] : o === x ? v[6] : 1 === B.solveCubic(v, 1, o, a, 0, 1) ? B.getPoint(v, a[0]).x : (v[0] + v[6]) / 2;
                    s.push(C);
                  }
                }
              }
              s.length > 1 && (s.sort(function (e, t) {
                return e - t;
              }), n.x = (s[0] + s[1]) / 2);
            }
            return n;
          }
        };
      }());
      var z = c.extend({
          _class: "PathFlattener",
          initialize: function (e, t, r, n, i) {
            var o = [],
              s = [],
              a = 0,
              l = 1 / (r || 32),
              c = e._segments,
              d = c[0],
              h;
            function p(e, t) {
              var r = B.getValues(e, t, i);
              o.push(r), u(r, e._index, 0, 1);
            }
            function u(e, r, i, o) {
              if (!(o - i > l) || n && B.isStraight(e) || B.isFlatEnough(e, t || .25)) {
                var c = e[6] - e[0],
                  d = e[7] - e[1],
                  h = Math.sqrt(c * c + d * d);
                h > 0 && (a += h, s.push({
                  offset: a,
                  curve: e,
                  index: r,
                  time: o
                }));
              } else {
                var p = B.subdivide(e, .5),
                  g = (i + o) / 2;
                u(p[0], r, i, g), u(p[1], r, g, o);
              }
            }
            for (var g = 1, m = c.length; g < m; g++) p(d, h = c[g]), d = h;
            e._closed && p(h || d, c[0]), this.curves = o, this.parts = s, this.length = a, this.index = 0;
          },
          _get: function (e) {
            for (var t = this.parts, r = t.length, n, i, o = this.index; i = o, o && !(t[--o].offset < e););
            for (; i < r; i++) {
              var s = t[i];
              if (s.offset >= e) {
                this.index = i;
                var a = t[i - 1],
                  l = a && a.index === s.index ? a.time : 0,
                  c = a ? a.offset : 0;
                return {
                  index: s.index,
                  time: l + (s.time - l) * (e - c) / (s.offset - c)
                };
              }
            }
            return {
              index: t[r - 1].index,
              time: 1
            };
          },
          drawPart: function (e, t, r) {
            for (var n = this._get(t), i = this._get(r), o = n.index, s = i.index; o <= s; o++) {
              var a = B.getPart(this.curves[o], o === n.index ? n.time : 0, o === i.index ? i.time : 1);
              o === n.index && e.moveTo(a[0], a[1]), e.bezierCurveTo.apply(e, a.slice(2));
            }
          }
        }, c.each(B._evaluateMethods, function (e) {
          this[e + "At"] = function (t) {
            var r = this._get(t);
            return B[e](this.curves[r.index], r.time);
          };
        }, {})),
        H = c.extend({
          initialize: function (e) {
            for (var t = this.points = [], r = e._segments, n = e._closed, i = 0, o, s = r.length; i < s; i++) {
              var a = r[i].point;
              o && o.equals(a) || t.push(o = a.clone());
            }
            n && (t.unshift(t[t.length - 1]), t.push(t[1])), this.closed = n;
          },
          fit: function (e) {
            var t = this.points,
              r = t.length,
              n = null;
            return r > 0 && (n = [new L(t[0])], r > 1 && (this.fitCubic(n, e, 0, r - 1, t[1].subtract(t[0]), t[r - 2].subtract(t[r - 1])), this.closed && (n.shift(), n.pop()))), n;
          },
          fitCubic: function (e, t, r, n, i, o) {
            var s = this.points;
            if (n - r !== 1) {
              for (var a = this.chordLengthParameterize(r, n), l = Math.max(t, t * t), c, d = !0, h = 0; h <= 4; h++) {
                var p = this.generateBezier(r, n, a, i, o),
                  u = this.findMaxError(r, n, p, a);
                if (u.error < t && d) return void this.addCurve(e, p);
                if (c = u.index, u.error >= l) break;
                d = this.reparameterize(r, n, a, p), l = u.error;
              }
              var g = s[c - 1].subtract(s[c + 1]);
              this.fitCubic(e, t, r, c, i, g), this.fitCubic(e, t, c, n, g.negate(), o);
            } else {
              var m = s[r],
                f = s[n],
                y = m.getDistance(f) / 3;
              this.addCurve(e, [m, m.add(i.normalize(y)), f.add(o.normalize(y)), f]);
            }
          },
          addCurve: function (e, t) {
            var r;
            e[e.length - 1].setHandleOut(t[1].subtract(t[0])), e.push(new L(t[3], t[2].subtract(t[3])));
          },
          generateBezier: function (e, t, r, n, i) {
            for (var o = 1e-12, s = Math.abs, a = this.points, l = a[e], c = a[t], d = [[0, 0], [0, 0]], h = [0, 0], p = 0, u = t - e + 1; p < u; p++) {
              var g = r[p],
                m = 1 - g,
                f = 3 * g * m,
                y = m * m * m,
                v = f * m,
                b = f * g,
                x = g * g * g,
                C = n.normalize(v),
                S = i.normalize(b),
                A = a[e + p].subtract(l.multiply(y + v)).subtract(c.multiply(b + x));
              d[0][0] += C.dot(C), d[0][1] += C.dot(S), d[1][0] = d[0][1], d[1][1] += S.dot(S), h[0] += C.dot(A), h[1] += S.dot(A);
            }
            var w = d[0][0] * d[1][1] - d[1][0] * d[0][1],
              E,
              k;
            if (s(w) > o) {
              var O = d[0][0] * h[1] - d[1][0] * h[0],
                D;
              E = (h[0] * d[1][1] - h[1] * d[0][1]) / w, k = O / w;
            } else {
              var P = d[0][0] + d[0][1],
                M = d[1][0] + d[1][1];
              E = k = s(P) > o ? h[0] / P : s(M) > o ? h[1] / M : 0;
            }
            var I = c.getDistance(l),
              T = o * I,
              L,
              R;
            if (E < T || k < T) E = k = I / 3;else {
              var B = c.subtract(l);
              L = n.normalize(E), R = i.normalize(k), L.dot(B) - R.dot(B) > I * I && (E = k = I / 3, L = R = null);
            }
            return [l, l.add(L || n.normalize(E)), c.add(R || i.normalize(k)), c];
          },
          reparameterize: function (e, t, r, n) {
            for (var i = e; i <= t; i++) r[i - e] = this.findRoot(n, this.points[i], r[i - e]);
            for (var i = 1, o = r.length; i < o; i++) if (r[i] <= r[i - 1]) return !1;
            return !0;
          },
          findRoot: function (e, t, r) {
            for (var n = [], i = [], o = 0; o <= 2; o++) n[o] = e[o + 1].subtract(e[o]).multiply(3);
            for (var o = 0; o <= 1; o++) i[o] = n[o + 1].subtract(n[o]).multiply(2);
            var s = this.evaluate(3, e, r),
              a = this.evaluate(2, n, r),
              l = this.evaluate(1, i, r),
              c = s.subtract(t),
              d = a.dot(a) + c.dot(l);
            return g.isZero(d) ? r : r - c.dot(a) / d;
          },
          evaluate: function (e, t, r) {
            for (var n = t.slice(), i = 1; i <= e; i++) for (var o = 0; o <= e - i; o++) n[o] = n[o].multiply(1 - r).add(n[o + 1].multiply(r));
            return n[0];
          },
          chordLengthParameterize: function (e, t) {
            for (var r = [0], n = e + 1; n <= t; n++) r[n - e] = r[n - e - 1] + this.points[n].getDistance(this.points[n - 1]);
            for (var n = 1, i = t - e; n <= i; n++) r[n] /= r[i];
            return r;
          },
          findMaxError: function (e, t, r, n) {
            for (var i = Math.floor((t - e + 1) / 2), o = 0, s = e + 1; s < t; s++) {
              var a,
                l = this.evaluate(3, r, n[s - e]).subtract(this.points[s]),
                c = l.x * l.x + l.y * l.y;
              c >= o && (o = c, i = s);
            }
            return {
              error: o,
              index: i
            };
          }
        }),
        W = E.extend({
          _class: "TextItem",
          _applyMatrix: !1,
          _canApplyMatrix: !1,
          _serializeFields: {
            content: null
          },
          _boundsOptions: {
            stroke: !1,
            handle: !1
          },
          initialize: function e(t) {
            this._content = "", this._lines = [];
            var r = t && c.isPlainObject(t) && t.x === s && t.y === s;
            this._initialize(r && t, !r && f.read(arguments));
          },
          _equals: function (e) {
            return this._content === e._content;
          },
          copyContent: function (e) {
            this.setContent(e._content);
          },
          getContent: function () {
            return this._content;
          },
          setContent: function (e) {
            this._content = "" + e, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(521);
          },
          isEmpty: function () {
            return !this._content;
          },
          getCharacterStyle: "#getStyle",
          setCharacterStyle: "#setStyle",
          getParagraphStyle: "#getStyle",
          setParagraphStyle: "#setStyle"
        }),
        V = W.extend({
          _class: "PointText",
          initialize: function e() {
            W.apply(this, arguments);
          },
          getPoint: function () {
            var e = this._matrix.getTranslation();
            return new y(e.x, e.y, this, "setPoint");
          },
          setPoint: function () {
            var e = f.read(arguments);
            this.translate(e.subtract(this._matrix.getTranslation()));
          },
          _draw: function (e, t, r) {
            if (this._content) {
              this._setStyles(e, t, r);
              var n = this._lines,
                i = this._style,
                o = i.hasFill(),
                s = i.hasStroke(),
                a = i.getLeading(),
                l = e.shadowColor;
              e.font = i.getFontStyle(), e.textAlign = i.getJustification();
              for (var c = 0, d = n.length; c < d; c++) {
                e.shadowColor = l;
                var h = n[c];
                o && (e.fillText(h, 0, 0), e.shadowColor = "rgba(0,0,0,0)"), s && e.strokeText(h, 0, 0), e.translate(0, a);
              }
            }
          },
          _getBounds: function (e, t) {
            var r = this._style,
              n = this._lines,
              i = n.length,
              o = r.getJustification(),
              s = r.getLeading(),
              a = this.getView().getTextWidth(r.getFontStyle(), n),
              l = 0;
            "left" !== o && (l -= a / ("center" === o ? 2 : 1));
            var c = new x(l, i ? -.75 * s : 0, a, i * s);
            return e ? e._transformBounds(c, c) : c;
          }
        }),
        U = c.extend(new function () {
          var e = {
              gray: ["gray"],
              rgb: ["red", "green", "blue"],
              hsb: ["hue", "saturation", "brightness"],
              hsl: ["hue", "saturation", "lightness"],
              gradient: ["gradient", "origin", "destination", "highlight"]
            },
            t = {},
            r = {
              transparent: [0, 0, 0, 0]
            },
            n;
          function i(e) {
            var t = e.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i) || e.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i),
              i = "rgb",
              o;
            if (t) {
              var s = t[4] ? 4 : 3;
              o = new Array(s);
              for (var l = 0; l < s; l++) {
                var c = t[l + 1];
                o[l] = parseInt(1 == c.length ? c + c : c, 16) / 255;
              }
            } else if (t = e.match(/^(rgb|hsl)a?\((.*)\)$/)) {
              i = t[1], o = t[2].trim().split(/[,\s]+/g);
              for (var d = "hsl" === i, l = 0, h = Math.min(o.length, 4); l < h; l++) {
                var p = o[l],
                  c = parseFloat(p);
                if (d) {
                  if (0 === l) {
                    var u = p.match(/([a-z]*)$/)[1];
                    c *= {
                      turn: 360,
                      rad: 180 / Math.PI,
                      grad: .9
                    }[u] || 1;
                  } else l < 3 && (c /= 100);
                } else l < 3 && (c /= 255);
                o[l] = c;
              }
            } else {
              var g = r[e];
              if (!g) if (a) {
                n || ((n = se.getContext(1, 1)).globalCompositeOperation = "copy"), n.fillStyle = "rgba(0,0,0,0)", n.fillStyle = e, n.fillRect(0, 0, 1, 1);
                var m = n.getImageData(0, 0, 1, 1).data;
                g = r[e] = [m[0] / 255, m[1] / 255, m[2] / 255];
              } else g = [0, 0, 0];
              o = g.slice();
            }
            return [i, o];
          }
          var o = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]],
            s = {
              "rgb-hsb": function (e, t, r) {
                var n = Math.max(e, t, r),
                  i,
                  o = n - Math.min(e, t, r),
                  s;
                return [0 === o ? 0 : 60 * (n == e ? (t - r) / o + (t < r ? 6 : 0) : n == t ? (r - e) / o + 2 : (e - t) / o + 4), 0 === n ? 0 : o / n, n];
              },
              "hsb-rgb": function (e, t, r) {
                var n,
                  i = (e = (e / 60 % 6 + 6) % 6) - (n = Math.floor(e)),
                  n,
                  s = [r, r * (1 - t), r * (1 - t * i), r * (1 - t * (1 - i))];
                return [s[(n = o[n])[0]], s[n[1]], s[n[2]]];
              },
              "rgb-hsl": function (e, t, r) {
                var n = Math.max(e, t, r),
                  i = Math.min(e, t, r),
                  o = n - i,
                  s = 0 === o,
                  a,
                  l = (n + i) / 2,
                  c;
                return [s ? 0 : 60 * (n == e ? (t - r) / o + (t < r ? 6 : 0) : n == t ? (r - e) / o + 2 : (e - t) / o + 4), s ? 0 : l < .5 ? o / (n + i) : o / (2 - n - i), l];
              },
              "hsl-rgb": function (e, t, r) {
                if (0 === t) return [r, r, r];
                for (var n = [(e = (e / 360 % 1 + 1) % 1) + 1 / 3, e, e - 1 / 3], i = r < .5 ? r * (1 + t) : r + t - r * t, o = 2 * r - i, s = [], a = 0; a < 3; a++) {
                  var l = n[a];
                  l < 0 && (l += 1), l > 1 && (l -= 1), s[a] = 6 * l < 1 ? o + 6 * (i - o) * l : 2 * l < 1 ? i : 3 * l < 2 ? o + (i - o) * (2 / 3 - l) * 6 : o;
                }
                return s;
              },
              "rgb-gray": function (e, t, r) {
                return [.2989 * e + .587 * t + .114 * r];
              },
              "gray-rgb": function (e) {
                return [e, e, e];
              },
              "gray-hsb": function (e) {
                return [0, 0, e];
              },
              "gray-hsl": function (e) {
                return [0, 0, e];
              },
              "gradient-rgb": function () {
                return [];
              },
              "rgb-gradient": function () {
                return [];
              }
            };
          return c.each(e, function (r, n) {
            t[n] = [], c.each(r, function (r, i) {
              var o = c.capitalize(r),
                s = /^(hue|saturation)$/.test(r),
                a = t[n][i] = "gradient" === n ? "gradient" === r ? function (e) {
                  var t = this._components[0];
                  return t !== (e = q.read(Array.isArray(e) ? e : arguments, 0, {
                    readNull: !0
                  })) && (t && t._removeOwner(this), e && e._addOwner(this)), e;
                } : function () {
                  return f.read(arguments, 0, {
                    readNull: "highlight" === r,
                    clone: !0
                  });
                } : function (e) {
                  return null == e || isNaN(e) ? 0 : +e;
                };
              this["get" + o] = function () {
                return this._type === n || s && /^hs[bl]$/.test(this._type) ? this._components[i] : this._convert(n)[i];
              }, this["set" + o] = function (t) {
                this._type === n || s && /^hs[bl]$/.test(this._type) || (this._components = this._convert(n), this._properties = e[n], this._type = n), this._components[i] = a.call(this, t), this._changed();
              };
            }, this);
          }, {
            _class: "Color",
            _readIndex: !0,
            initialize: function r(n) {
              var o = arguments,
                s = this.__read,
                a = 0,
                l,
                d,
                h,
                p;
              Array.isArray(n) && (n = (o = n)[0]);
              var u = null != n && typeof n;
              if ("string" === u && n in e && (l = n, n = o[1], Array.isArray(n) ? (d = n, h = o[2]) : (s && (a = 1), o = c.slice(o, 1), u = typeof n)), !d) {
                if (p = "number" === u ? o : "object" === u && null != n.length ? n : null) {
                  l || (l = p.length >= 3 ? "rgb" : "gray");
                  var g = e[l].length;
                  h = p[g], s && (a += p === arguments ? g + (null != h ? 1 : 0) : 1), p.length > g && (p = c.slice(p, 0, g));
                } else if ("string" === u) {
                  var m = i(n);
                  l = m[0], 4 === (d = m[1]).length && (h = d[3], d.length--);
                } else if ("object" === u) if (n.constructor === r) {
                  if (l = n._type, d = n._components.slice(), h = n._alpha, "gradient" === l) for (var f = 1, y = d.length; f < y; f++) {
                    var v = d[f];
                    v && (d[f] = v.clone());
                  }
                } else if (n.constructor === q) l = "gradient", p = o;else {
                  var b = e[l = "hue" in n ? "lightness" in n ? "hsl" : "hsb" : "gradient" in n || "stops" in n || "radial" in n ? "gradient" : "gray" in n ? "gray" : "rgb"],
                    x = t[l];
                  this._components = d = [];
                  for (var f = 0, y = b.length; f < y; f++) {
                    var C;
                    null == (C = n[b[f]]) && !f && "gradient" === l && "stops" in n && (C = {
                      stops: n.stops,
                      radial: n.radial
                    }), null != (C = x[f].call(this, C)) && (d[f] = C);
                  }
                  h = n.alpha;
                }
                s && l && (a = 1);
              }
              if (this._type = l || "rgb", !d) {
                this._components = d = [];
                for (var x, f = 0, y = (x = t[this._type]).length; f < y; f++) {
                  var C;
                  null != (C = x[f].call(this, p && p[f])) && (d[f] = C);
                }
              }
              return this._components = d, this._properties = e[this._type], this._alpha = h, s && (this.__read = a), this;
            },
            set: "#initialize",
            _serialize: function (e, t) {
              var r = this.getComponents();
              return c.serialize(/^(gray|rgb)$/.test(this._type) ? r : [this._type].concat(r), e, !0, t);
            },
            _changed: function () {
              this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129));
            },
            _convert: function (e) {
              var t;
              return this._type === e ? this._components.slice() : (t = s[this._type + "-" + e]) ? t.apply(this, this._components) : s["rgb-" + e].apply(this, s[this._type + "-rgb"].apply(this, this._components));
            },
            convert: function (e) {
              return new U(e, this._convert(e), this._alpha);
            },
            getType: function () {
              return this._type;
            },
            setType: function (t) {
              this._components = this._convert(t), this._properties = e[t], this._type = t;
            },
            getComponents: function () {
              var e = this._components.slice();
              return null != this._alpha && e.push(this._alpha), e;
            },
            getAlpha: function () {
              return null != this._alpha ? this._alpha : 1;
            },
            setAlpha: function (e) {
              this._alpha = null == e ? null : Math.min(Math.max(e, 0), 1), this._changed();
            },
            hasAlpha: function () {
              return null != this._alpha;
            },
            equals: function (e) {
              var t = c.isPlainValue(e, !0) ? U.read(arguments) : e;
              return t === this || t && this._class === t._class && this._type === t._type && this.getAlpha() === t.getAlpha() && c.equals(this._components, t._components) || !1;
            },
            toString: function () {
              for (var e = this._properties, t = [], r = "gradient" === this._type, n = u.instance, i = 0, o = e.length; i < o; i++) {
                var s = this._components[i];
                null != s && t.push(e[i] + ": " + (r ? s : n.number(s)));
              }
              return null != this._alpha && t.push("alpha: " + n.number(this._alpha)), "{ " + t.join(", ") + " }";
            },
            toCSS: function (e) {
              var t = this._convert("rgb"),
                r = e || null == this._alpha ? 1 : this._alpha;
              function n(e) {
                return Math.round(255 * (e < 0 ? 0 : e > 1 ? 1 : e));
              }
              return t = [n(t[0]), n(t[1]), n(t[2])], r < 1 && t.push(r < 0 ? 0 : r), e ? "#" + ((1 << 24) + (t[0] << 16) + (t[1] << 8) + t[2]).toString(16).slice(1) : (4 == t.length ? "rgba(" : "rgb(") + t.join(",") + ")";
            },
            toCanvasStyle: function (e, t) {
              if (this._canvasStyle) return this._canvasStyle;
              if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
              var r = this._components,
                n = r[0],
                i = n._stops,
                o = r[1],
                s = r[2],
                a = r[3],
                l = t && t.inverted(),
                c;
              if (l && (o = l._transformPoint(o), s = l._transformPoint(s), a && (a = l._transformPoint(a))), n._radial) {
                var d = s.getDistance(o);
                if (a) {
                  var h = a.subtract(o);
                  h.getLength() > d && (a = o.add(h.normalize(d - .1)));
                }
                var p = a || o;
                c = e.createRadialGradient(p.x, p.y, 0, o.x, o.y, d);
              } else c = e.createLinearGradient(o.x, o.y, s.x, s.y);
              for (var u = 0, g = i.length; u < g; u++) {
                var m = i[u],
                  f = m._offset;
                c.addColorStop(f ?? u / (g - 1), m._color.toCanvasStyle());
              }
              return this._canvasStyle = c;
            },
            transform: function (e) {
              if ("gradient" === this._type) {
                for (var t = this._components, r = 1, n = t.length; r < n; r++) {
                  var i = t[r];
                  e._transformPoint(i, i, !0);
                }
                this._changed();
              }
            },
            statics: {
              _types: e,
              random: function () {
                var e = Math.random;
                return new U(e(), e(), e());
              },
              _setOwner: function (e, t, r) {
                return e && (e._owner && t && e._owner !== t && (e = e.clone()), !e._owner ^ !t && (e._owner = t || null, e._setter = r || null)), e;
              }
            }
          });
        }(), new function () {
          var e = {
            add: function (e, t) {
              return e + t;
            },
            subtract: function (e, t) {
              return e - t;
            },
            multiply: function (e, t) {
              return e * t;
            },
            divide: function (e, t) {
              return e / t;
            }
          };
          return c.each(e, function (e, t) {
            this[t] = function (t) {
              t = U.read(arguments);
              for (var r = this._type, n = this._components, i = t._convert(r), o = 0, s = n.length; o < s; o++) i[o] = e(n[o], i[o]);
              return new U(r, i, null != this._alpha ? e(this._alpha, t.getAlpha()) : null);
            };
          }, {});
        }()),
        q = c.extend({
          _class: "Gradient",
          initialize: function e(t, r) {
            this._id = m.get(), t && c.isPlainObject(t) && (this.set(t), t = r = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof r && "radial" === r || r || !1);
          },
          _serialize: function (e, t) {
            return t.add(this, function () {
              return c.serialize([this._stops, this._radial], e, !0, t);
            });
          },
          _changed: function () {
            for (var e = 0, t = this._owners && this._owners.length; e < t; e++) this._owners[e]._changed();
          },
          _addOwner: function (e) {
            this._owners || (this._owners = []), this._owners.push(e);
          },
          _removeOwner: function (e) {
            var t = this._owners ? this._owners.indexOf(e) : -1;
            -1 != t && (this._owners.splice(t, 1), this._owners.length || (this._owners = s));
          },
          clone: function () {
            for (var e = [], t = 0, r = this._stops.length; t < r; t++) e[t] = this._stops[t].clone();
            return new q(e, this._radial);
          },
          getStops: function () {
            return this._stops;
          },
          setStops: function (e) {
            if (e.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
            var t = this._stops;
            if (t) for (var r = 0, n = t.length; r < n; r++) t[r]._owner = s;
            for (var r = 0, n = (t = this._stops = G.readList(e, 0, {
                clone: !0
              })).length; r < n; r++) t[r]._owner = this;
            this._changed();
          },
          getRadial: function () {
            return this._radial;
          },
          setRadial: function (e) {
            this._radial = e, this._changed();
          },
          equals: function (e) {
            if (e === this) return !0;
            if (e && this._class === e._class) {
              var t = this._stops,
                r = e._stops,
                n = t.length;
              if (n === r.length) {
                for (var i = 0; i < n; i++) if (!t[i].equals(r[i])) return !1;
                return !0;
              }
            }
            return !1;
          }
        }),
        G = c.extend({
          _class: "GradientStop",
          initialize: function e(t, r) {
            var n = t,
              i = r;
            "object" == typeof t && r === s && (Array.isArray(t) && "number" != typeof t[0] ? (n = t[0], i = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (n = t.color, i = t.offset || t.rampPoint || 0)), this.setColor(n), this.setOffset(i);
          },
          clone: function () {
            return new G(this._color.clone(), this._offset);
          },
          _serialize: function (e, t) {
            var r = this._color,
              n = this._offset;
            return c.serialize(null == n ? [r] : [r, n], e, !0, t);
          },
          _changed: function () {
            this._owner && this._owner._changed(129);
          },
          getOffset: function () {
            return this._offset;
          },
          setOffset: function (e) {
            this._offset = e, this._changed();
          },
          getRampPoint: "#getOffset",
          setRampPoint: "#setOffset",
          getColor: function () {
            return this._color;
          },
          setColor: function () {
            U._setOwner(this._color, null), this._color = U._setOwner(U.read(arguments, 0), this, "setColor"), this._changed();
          },
          equals: function (e) {
            return e === this || e && this._class === e._class && this._color.equals(e._color) && this._offset == e._offset || !1;
          }
        }),
        K = c.extend(new function () {
          var e = {
              fillColor: null,
              fillRule: "nonzero",
              strokeColor: null,
              strokeWidth: 1,
              strokeCap: "butt",
              strokeJoin: "miter",
              strokeScaling: !0,
              miterLimit: 10,
              dashOffset: 0,
              dashArray: [],
              shadowColor: null,
              shadowBlur: 0,
              shadowOffset: new f(),
              selectedColor: null
            },
            t = c.set({}, e, {
              fontFamily: "sans-serif",
              fontWeight: "normal",
              fontSize: 12,
              leading: null,
              justification: "left"
            }),
            r = c.set({}, t, {
              fillColor: new U()
            }),
            n = {
              strokeWidth: 193,
              strokeCap: 193,
              strokeJoin: 193,
              strokeScaling: 201,
              miterLimit: 193,
              fontFamily: 9,
              fontWeight: 9,
              fontSize: 9,
              font: 9,
              leading: 9,
              justification: 9
            },
            i = {
              beans: !0
            },
            o = {
              _class: "Style",
              beans: !0,
              initialize: function n(i, o, s) {
                this._values = {}, this._owner = o, this._project = o && o._project || s || de.project, this._defaults = !o || o instanceof k ? t : o instanceof W ? r : e, i && this.set(i);
              }
            };
          return c.each(t, function (e, t) {
            var r = /Color$/.test(t),
              a = "shadowOffset" === t,
              l = c.capitalize(t),
              d = n[t],
              h = "set" + l,
              p = "get" + l;
            o[h] = function (e) {
              var n = this._owner,
                i = n && n._children,
                o = i && i.length > 0 && !(n instanceof N);
              if (o) for (var s = 0, a = i.length; s < a; s++) i[s]._style[h](e);
              if (("selectedColor" === t || !o) && t in this._defaults) {
                var l = this._values[t];
                l !== e && (r && (l && (U._setOwner(l, null), l._canvasStyle = null), e && e.constructor === U && (e = U._setOwner(e, n, o && h))), this._values[t] = e, n && n._changed(d || 129));
              }
            }, o[p] = function (e) {
              var n = this._owner,
                i = n && n._children,
                o = i && i.length > 0 && !(n instanceof N),
                l;
              if (o && !e) for (var d = 0, u = i.length; d < u; d++) {
                var g = i[d]._style[p]();
                if (d) {
                  if (!c.equals(l, g)) return s;
                } else l = g;
              } else if (t in this._defaults) {
                var l;
                if ((l = this._values[t]) === s) (l = this._defaults[t]) && l.clone && (l = l.clone());else {
                  var m = r ? U : a ? f : null;
                  !m || l && l.constructor === m || (this._values[t] = l = m.read([l], 0, {
                    readNull: !0,
                    clone: !0
                  }));
                }
              }
              return l && r && (l = U._setOwner(l, n, o && h)), l;
            }, i[p] = function (e) {
              return this._style[p](e);
            }, i[h] = function (e) {
              this._style[h](e);
            };
          }), c.each({
            Font: "FontFamily",
            WindingRule: "FillRule"
          }, function (e, t) {
            var r = "get" + t,
              n = "set" + t;
            o[r] = i[r] = "#get" + e, o[n] = i[n] = "#set" + e;
          }), E.inject(i), o;
        }(), {
          set: function (e) {
            var t = e instanceof K,
              r = t ? e._values : e;
            if (r) for (var n in r) if (n in this._defaults) {
              var i = r[n];
              this[n] = i && t && i.clone ? i.clone() : i;
            }
          },
          equals: function (e) {
            function t(e, t, r) {
              var n = e._values,
                i = t._values,
                o = t._defaults;
              for (var a in n) {
                var l = n[a],
                  d = i[a];
                if (!(r && a in i || c.equals(l, d === s ? o[a] : d))) return !1;
              }
              return !0;
            }
            return e === this || e && this._class === e._class && t(this, e) && t(e, this, !0) || !1;
          },
          _dispose: function () {
            var e;
            (e = this.getFillColor()) && (e._canvasStyle = null), (e = this.getStrokeColor()) && (e._canvasStyle = null), (e = this.getShadowColor()) && (e._canvasStyle = null);
          },
          hasFill: function () {
            var e = this.getFillColor();
            return !!e && e.alpha > 0;
          },
          hasStroke: function () {
            var e = this.getStrokeColor();
            return !!e && e.alpha > 0 && this.getStrokeWidth() > 0;
          },
          hasShadow: function () {
            var e = this.getShadowColor();
            return !!e && e.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero());
          },
          getView: function () {
            return this._project._view;
          },
          getFontStyle: function () {
            var e = this.getFontSize();
            return this.getFontWeight() + " " + e + (/[a-z]/i.test(e + "") ? " " : "px ") + this.getFontFamily();
          },
          getFont: "#getFontFamily",
          setFont: "#setFontFamily",
          getLeading: function e() {
            var t = e.base.call(this),
              r = this.getFontSize();
            return /pt|em|%|px/.test(r) && (r = this.getView().getPixelSize(r)), null != t ? t : 1.2 * r;
          }
        }),
        Z = new function () {
          function e(e, t, r, n) {
            for (var i = ["", "webkit", "moz", "Moz", "ms", "o"], o = t[0].toUpperCase() + t.substring(1), s = 0; s < 6; s++) {
              var a = i[s],
                l = a ? a + o : t;
              if (l in e) {
                if (!r) return e[l];
                e[l] = n;
                break;
              }
            }
          }
          return {
            getStyles: function (e) {
              var t = e && 9 !== e.nodeType ? e.ownerDocument : e,
                r = t && t.defaultView;
              return r && r.getComputedStyle(e, "");
            },
            getBounds: function (e, t) {
              var r = e.ownerDocument,
                n = r.body,
                i = r.documentElement,
                o;
              try {
                o = e.getBoundingClientRect();
              } catch (e) {
                o = {
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0
                };
              }
              var s = o.left - (i.clientLeft || n.clientLeft || 0),
                a = o.top - (i.clientTop || n.clientTop || 0);
              if (!t) {
                var l = r.defaultView;
                s += l.pageXOffset || i.scrollLeft || n.scrollLeft, a += l.pageYOffset || i.scrollTop || n.scrollTop;
              }
              return new x(s, a, o.width, o.height);
            },
            getViewportBounds: function (e) {
              var t = e.ownerDocument,
                r = t.defaultView,
                n = t.documentElement;
              return new x(0, 0, r.innerWidth || n.clientWidth, r.innerHeight || n.clientHeight);
            },
            getOffset: function (e, t) {
              return Z.getBounds(e, t).getPoint();
            },
            getSize: function (e) {
              return Z.getBounds(e, !0).getSize();
            },
            isInvisible: function (e) {
              return Z.getSize(e).equals(new v(0, 0));
            },
            isInView: function (e) {
              return !Z.isInvisible(e) && Z.getViewportBounds(e).intersects(Z.getBounds(e, !0));
            },
            isInserted: function (e) {
              return l.body.contains(e);
            },
            getPrefixed: function (t, r) {
              return t && e(t, r);
            },
            setPrefixed: function (t, r, n) {
              if ("object" == typeof r) for (var i in r) e(t, i, !0, r[i]);else e(t, r, !0, n);
            }
          };
        }(),
        Y = {
          add: function (e, t) {
            if (e) for (var r in t) for (var n = t[r], i = r.split(/[\s,]+/g), o = 0, s = i.length; o < s; o++) {
              var a = i[o],
                c = e === l && ("touchstart" === a || "touchmove" === a) && {
                  passive: !1
                };
              e.addEventListener(a, n, c);
            }
          },
          remove: function (e, t) {
            if (e) for (var r in t) for (var n = t[r], i = r.split(/[\s,]+/g), o = 0, s = i.length; o < s; o++) e.removeEventListener(i[o], n, !1);
          },
          getPoint: function (e) {
            var t = e.targetTouches ? e.targetTouches.length ? e.targetTouches[0] : e.changedTouches[0] : e;
            return new f(t.pageX || t.clientX + l.documentElement.scrollLeft, t.pageY || t.clientY + l.documentElement.scrollTop);
          },
          getTarget: function (e) {
            return e.target || e.srcElement;
          },
          getRelatedTarget: function (e) {
            return e.relatedTarget || e.toElement;
          },
          getOffset: function (e, t) {
            return Y.getPoint(e).subtract(Z.getOffset(t || Y.getTarget(e)));
          }
        };
      Y.requestAnimationFrame = new function () {
        var e = Z.getPrefixed(a, "requestAnimationFrame"),
          t = !1,
          r = [],
          n;
        function i() {
          var n = r;
          r = [];
          for (var o = 0, s = n.length; o < s; o++) n[o]();
          (t = e && r.length) && e(i);
        }
        return function (o) {
          r.push(o), e ? t || (e(i), t = !0) : n || (n = setInterval(i, 1e3 / 60));
        };
      }();
      var Q = c.extend(d, {
          _class: "View",
          initialize: function e(t, r) {
            function n(e) {
              return r[e] || parseInt(r.getAttribute(e), 10);
            }
            function i() {
              var e = Z.getSize(r);
              return e.isNaN() || e.isZero() ? new v(n("width"), n("height")) : e;
            }
            var o;
            if (a && r) {
              this._id = r.getAttribute("id"), null == this._id && r.setAttribute("id", this._id = "view-" + e._id++), Y.add(r, this._viewEvents);
              var s = "none";
              if (Z.setPrefixed(r.style, {
                userDrag: s,
                userSelect: s,
                touchCallout: s,
                contentZooming: s,
                tapHighlightColor: "rgba(0,0,0,0)"
              }), h.hasAttribute(r, "resize")) {
                var c = this;
                Y.add(a, this._windowEvents = {
                  resize: function () {
                    c.setViewSize(i());
                  }
                });
              }
              if (o = i(), h.hasAttribute(r, "stats") && "undefined" != typeof Stats) {
                this._stats = new Stats();
                var d = this._stats.domElement,
                  p = d.style,
                  u = Z.getOffset(r);
                p.position = "absolute", p.left = u.x + "px", p.top = u.y + "px", l.body.appendChild(d);
              }
            } else o = new v(r), r = null;
            this._project = t, this._scope = t._scope, this._element = r, this._pixelRatio || (this._pixelRatio = a && a.devicePixelRatio || 1), this._setElementSize(o.width, o.height), this._viewSize = o, e._views.push(this), e._viewsById[this._id] = this, (this._matrix = new S())._owner = this, e._focused || (e._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
              native: {},
              virtual: {}
            }, this._autoUpdate = !de.agent.node, this._needsUpdate = !1;
          },
          remove: function () {
            if (!this._project) return !1;
            Q._focused === this && (Q._focused = null), Q._views.splice(Q._views.indexOf(this), 1), delete Q._viewsById[this._id];
            var e = this._project;
            return e._view === this && (e._view = null), Y.remove(this._element, this._viewEvents), Y.remove(a, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0;
          },
          _events: c.each(E._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function (e) {
            this[e] = {};
          }, {
            onFrame: {
              install: function () {
                this.play();
              },
              uninstall: function () {
                this.pause();
              }
            }
          }),
          _animate: !1,
          _time: 0,
          _count: 0,
          getAutoUpdate: function () {
            return this._autoUpdate;
          },
          setAutoUpdate: function (e) {
            this._autoUpdate = e, e && this.requestUpdate();
          },
          update: function () {},
          draw: function () {
            this.update();
          },
          requestUpdate: function () {
            if (!this._requested) {
              var e = this;
              Y.requestAnimationFrame(function () {
                if (e._requested = !1, e._animate) {
                  e.requestUpdate();
                  var t = e._element;
                  Z.getPrefixed(l, "hidden") && "true" !== h.getAttribute(t, "keepalive") || !Z.isInView(t) || e._handleFrame();
                }
                e._autoUpdate && e.update();
              }), this._requested = !0;
            }
          },
          play: function () {
            this._animate = !0, this.requestUpdate();
          },
          pause: function () {
            this._animate = !1;
          },
          _handleFrame: function () {
            de = this._scope;
            var e = Date.now() / 1e3,
              t = this._last ? e - this._last : 0;
            this._last = e, this.emit("frame", new c({
              delta: t,
              time: this._time += t,
              count: this._count++
            })), this._stats && this._stats.update();
          },
          _animateItem: function (e, t) {
            var r = this._frameItems;
            t ? (r[e._id] = {
              item: e,
              time: 0,
              count: 0
            }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete r[e._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems));
          },
          _handleFrameItems: function (e) {
            for (var t in this._frameItems) {
              var r = this._frameItems[t];
              r.item.emit("frame", new c(e, {
                time: r.time += e.delta,
                count: r.count++
              }));
            }
          },
          _changed: function () {
            this._project._changed(4097), this._bounds = this._decomposed = s;
          },
          getElement: function () {
            return this._element;
          },
          getPixelRatio: function () {
            return this._pixelRatio;
          },
          getResolution: function () {
            return 72 * this._pixelRatio;
          },
          getViewSize: function () {
            var e = this._viewSize;
            return new b(e.width, e.height, this, "setViewSize");
          },
          setViewSize: function () {
            var e = v.read(arguments),
              t = e.subtract(this._viewSize);
            t.isZero() || (this._setElementSize(e.width, e.height), this._viewSize.set(e), this._changed(), this.emit("resize", {
              size: e,
              delta: t
            }), this._autoUpdate && this.update());
          },
          _setElementSize: function (e, t) {
            var r = this._element;
            r && (r.width !== e && (r.width = e), r.height !== t && (r.height = t));
          },
          getBounds: function () {
            return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new x(new f(), this._viewSize))), this._bounds;
          },
          getSize: function () {
            return this.getBounds().getSize();
          },
          isVisible: function () {
            return Z.isInView(this._element);
          },
          isInserted: function () {
            return Z.isInserted(this._element);
          },
          getPixelSize: function (e) {
            var t = this._element,
              r;
            if (t) {
              var n = t.parentNode,
                i = l.createElement("div");
              i.style.fontSize = e, n.appendChild(i), r = parseFloat(Z.getStyles(i).fontSize), n.removeChild(i);
            } else r = parseFloat(r);
            return r;
          },
          getTextWidth: function (e, t) {
            return 0;
          }
        }, c.each(["rotate", "scale", "shear", "skew"], function (e) {
          var t = "rotate" === e;
          this[e] = function () {
            var r = (t ? c : f).read(arguments),
              n = f.read(arguments, 0, {
                readNull: !0
              });
            return this.transform(new S()[e](r, n || this.getCenter(!0)));
          };
        }, {
          _decompose: function () {
            return this._decomposed || (this._decomposed = this._matrix.decompose());
          },
          translate: function () {
            var e = new S();
            return this.transform(e.translate.apply(e, arguments));
          },
          getCenter: function () {
            return this.getBounds().getCenter();
          },
          setCenter: function () {
            var e = f.read(arguments);
            this.translate(this.getCenter().subtract(e));
          },
          getZoom: function () {
            var e = this._decompose().scaling;
            return (e.x + e.y) / 2;
          },
          setZoom: function (e) {
            this.transform(new S().scale(e / this.getZoom(), this.getCenter()));
          },
          getRotation: function () {
            return this._decompose().rotation;
          },
          setRotation: function (e) {
            var t = this.getRotation();
            null != t && null != e && this.rotate(e - t);
          },
          getScaling: function () {
            var e = this._decompose().scaling;
            return new y(e.x, e.y, this, "setScaling");
          },
          setScaling: function () {
            var e = this.getScaling(),
              t = f.read(arguments, 0, {
                clone: !0,
                readNull: !0
              });
            e && t && this.scale(t.x / e.x, t.y / e.y);
          },
          getMatrix: function () {
            return this._matrix;
          },
          setMatrix: function () {
            var e = this._matrix;
            e.initialize.apply(e, arguments);
          },
          transform: function (e) {
            this._matrix.append(e);
          },
          scrollBy: function () {
            this.translate(f.read(arguments).negate());
          }
        }), {
          projectToView: function () {
            return this._matrix._transformPoint(f.read(arguments));
          },
          viewToProject: function () {
            return this._matrix._inverseTransform(f.read(arguments));
          },
          getEventPoint: function (e) {
            return this.viewToProject(Y.getOffset(e, this._element));
          }
        }, {
          statics: {
            _views: [],
            _viewsById: {},
            _id: 0,
            create: function (e, t) {
              var r;
              return l && "string" == typeof t && (t = l.getElementById(t)), new (a ? J : Q)(e, t);
            }
          }
        }, new function () {
          if (a) {
            var e,
              t,
              r = !1,
              n = !1,
              i = a.navigator,
              o,
              s,
              c;
            i.pointerEnabled || i.msPointerEnabled ? (o = "pointerdown MSPointerDown", s = "pointermove MSPointerMove", c = "pointerup pointercancel MSPointerUp MSPointerCancel") : (o = "touchstart", s = "touchmove", c = "touchend touchcancel", "ontouchstart" in a && i.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (o += " mousedown", s += " mousemove", c += " mouseup"));
            var d = {},
              h = {
                mouseout: function (e) {
                  var t = Q._focused,
                    r = Y.getRelatedTarget(e);
                  if (t && (!r || "HTML" === r.nodeName)) {
                    var n = Y.getOffset(e, t._element),
                      i = n.x,
                      o = Math.abs,
                      s = o(i),
                      a,
                      l = s - (1 << 25);
                    n.x = o(l) < s ? l * (i < 0 ? -1 : 1) : i, D(t, e, t.viewToProject(n));
                  }
                },
                scroll: O
              };
            d[o] = function (e) {
              var t = Q._focused = k(e);
              r || (r = !0, t._handleMouseEvent("mousedown", e));
            }, h[s] = function (r) {
              var i = Q._focused;
              if (!n) {
                var o = k(r);
                o ? i !== o && (i && D(i, r), e || (e = i), i = Q._focused = t = o) : t && t === i && (e && !e.isInserted() && (e = null), i = Q._focused = e, e = null, O());
              }
              i && D(i, r);
            }, h[o] = function () {
              n = !0;
            }, h[c] = function (e) {
              var t = Q._focused;
              t && r && t._handleMouseEvent("mouseup", e), n = r = !1;
            }, Y.add(l, h), Y.add(a, {
              load: O
            });
            var p = !1,
              u = !1,
              g = {
                doubleclick: "click",
                mousedrag: "mousemove"
              },
              m = !1,
              f,
              y,
              v,
              b,
              x,
              C,
              S,
              A,
              w,
              E = {
                mousedown: {
                  mousedown: 1,
                  mousedrag: 1,
                  click: 1,
                  doubleclick: 1
                },
                mouseup: {
                  mouseup: 1,
                  mousedrag: 1,
                  click: 1,
                  doubleclick: 1
                },
                mousemove: {
                  mousedrag: 1,
                  mousemove: 1,
                  mouseenter: 1,
                  mouseleave: 1
                }
              };
            return {
              _viewEvents: d,
              _handleMouseEvent: function (e, t, n) {
                var i = this._itemEvents,
                  o = i.native[e],
                  s = "mousemove" === e,
                  a = this._scope.tool,
                  l = this;
                function c(e) {
                  return i.virtual[e] || l.responds(e) || a && a.responds(e);
                }
                s && r && c("mousedrag") && (e = "mousedrag"), n || (n = this.getEventPoint(t));
                var d = this.getBounds().contains(n),
                  h = o && d && l._project.hitTest(n, {
                    tolerance: 0,
                    fill: !0,
                    stroke: !0
                  }),
                  g = h && h.item || null,
                  E = !1,
                  k = {};
                if (k[e.substr(5)] = !0, o && g !== x && (x && P(x, null, "mouseleave", t, n), g && P(g, null, "mouseenter", t, n), x = g), m ^ d && (P(this, null, d ? "mouseenter" : "mouseleave", t, n), f = d ? this : null, E = !0), !d && !k.drag || n.equals(v) || (M(this, g, s ? e : "mousemove", t, n, v), E = !0), m = d, k.down && d || k.up && y) {
                  if (M(this, g, e, t, n, y), k.down) {
                    if (w = g === S && Date.now() - A < 300, b = S = g, !u && g) {
                      for (var O = g; O && !O.responds("mousedrag");) O = O._parent;
                      O && (C = g);
                    }
                    y = n;
                  } else k.up && (u || g !== b || (A = Date.now(), M(this, g, w ? "doubleclick" : "click", t, n, y), w = !1), b = C = null);
                  m = !1, E = !0;
                }
                v = n, E && a && (p = a._handleMouseEvent(e, t, n, k) || p), !1 !== t.cancelable && (p && !k.move || k.down && c("mouseup")) && t.preventDefault();
              },
              _handleKeyEvent: function (e, t, r, n) {
                var i = this._scope,
                  o = i.tool,
                  s;
                function a(o) {
                  o.responds(e) && (de = i, o.emit(e, s = s || new $(e, t, r, n)));
                }
                this.isVisible() && (a(this), o && o.responds(e) && a(o));
              },
              _countItemEvent: function (e, t) {
                var r = this._itemEvents,
                  n = r.native,
                  i = r.virtual;
                for (var o in E) n[o] = (n[o] || 0) + (E[o][e] || 0) * t;
                i[e] = (i[e] || 0) + t;
              },
              statics: {
                updateFocus: O,
                _resetState: function () {
                  r = n = p = m = !1, e = t = f = y = v = b = x = C = S = A = w = null;
                }
              }
            };
          }
          function k(e) {
            var t = Y.getTarget(e);
            return t.getAttribute && Q._viewsById[t.getAttribute("id")];
          }
          function O() {
            var e = Q._focused;
            if (!e || !e.isVisible()) for (var r = 0, n = Q._views.length; r < n; r++) if ((e = Q._views[r]).isVisible()) {
              Q._focused = t = e;
              break;
            }
          }
          function D(e, t, r) {
            e._handleMouseEvent("mousemove", t, r);
          }
          function P(e, t, r, n, i, o, s) {
            var a = !1,
              l;
            function c(e, r) {
              if (e.responds(r)) {
                if (l || (l = new te(r, n, i, t || e, o ? i.subtract(o) : null)), e.emit(r, l) && (p = !0, l.prevented && (u = !0), l.stopped)) return a = !0;
              } else {
                var s = g[r];
                if (s) return c(e, s);
              }
            }
            for (; e && e !== s && !c(e, r);) e = e._parent;
            return a;
          }
          function M(e, t, r, n, i, o) {
            return e._project.removeOn(r), u = p = !1, C && P(C, null, r, n, i, o) || t && t !== C && !t.isDescendant(C) && P(t, null, "mousedrag" === r ? "mousemove" : r, n, i, o, C) || P(e, C || t || e, r, n, i, o);
          }
        }()),
        J = Q.extend({
          _class: "CanvasView",
          initialize: function e(t, r) {
            if (!(r instanceof a.HTMLCanvasElement)) {
              var n = v.read(arguments, 1);
              if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + c.slice(arguments, 1));
              r = se.getCanvas(n);
            }
            var i = this._context = r.getContext("2d");
            if (i.save(), this._pixelRatio = 1, !/^off|false$/.test(h.getAttribute(r, "hidpi"))) {
              var o = a.devicePixelRatio || 1,
                s = Z.getPrefixed(i, "backingStorePixelRatio") || 1;
              this._pixelRatio = o / s;
            }
            Q.call(this, t, r), this._needsUpdate = !0;
          },
          remove: function e() {
            return this._context.restore(), e.base.call(this);
          },
          _setElementSize: function e(t, r) {
            var n = this._pixelRatio;
            if (e.base.call(this, t * n, r * n), 1 !== n) {
              var i = this._element,
                o = this._context;
              if (!h.hasAttribute(i, "resize")) {
                var s = i.style;
                s.width = t + "px", s.height = r + "px";
              }
              o.restore(), o.save(), o.scale(n, n);
            }
          },
          getContext: function () {
            return this._context;
          },
          getPixelSize: function e(t) {
            var r = de.agent,
              n;
            if (r && r.firefox) n = e.base.call(this, t);else {
              var i = this._context,
                o = i.font;
              i.font = t + " serif", n = parseFloat(i.font), i.font = o;
            }
            return n;
          },
          getTextWidth: function (e, t) {
            var r = this._context,
              n = r.font,
              i = 0;
            r.font = e;
            for (var o = 0, s = t.length; o < s; o++) i = Math.max(i, r.measureText(t[o]).width);
            return r.font = n, i;
          },
          update: function () {
            if (!this._needsUpdate) return !1;
            var e = this._project,
              t = this._context,
              r = this._viewSize;
            return t.clearRect(0, 0, r.width + 1, r.height + 1), e && e.draw(t, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0;
          }
        }),
        X = c.extend({
          _class: "Event",
          initialize: function e(t) {
            this.event = t, this.type = t && t.type;
          },
          prevented: !1,
          stopped: !1,
          preventDefault: function () {
            this.prevented = !0, this.event.preventDefault();
          },
          stopPropagation: function () {
            this.stopped = !0, this.event.stopPropagation();
          },
          stop: function () {
            this.stopPropagation(), this.preventDefault();
          },
          getTimeStamp: function () {
            return this.event.timeStamp;
          },
          getModifiers: function () {
            return ee.modifiers;
          }
        }),
        $ = X.extend({
          _class: "KeyEvent",
          initialize: function e(t, r, n, i) {
            this.type = t, this.event = r, this.key = n, this.character = i;
          },
          toString: function () {
            return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }";
          }
        }),
        ee = new function () {
          var e = {
              "\t": "tab",
              " ": "space",
              "\b": "backspace",
              "": "delete",
              Spacebar: "space",
              Del: "delete",
              Win: "meta",
              Esc: "escape"
            },
            t = {
              tab: "\t",
              space: " ",
              enter: "\r"
            },
            r = {},
            n = {},
            i,
            o,
            d = new c({
              shift: !1,
              control: !1,
              alt: !1,
              meta: !1,
              capsLock: !1,
              space: !1
            }).inject({
              option: {
                get: function () {
                  return this.alt;
                }
              },
              command: {
                get: function () {
                  var e = de && de.agent;
                  return e && e.mac ? this.meta : this.control;
                }
              }
            });
          function h(t) {
            var r = t.key || t.keyIdentifier;
            return r = /^U\+/.test(r) ? String.fromCharCode(parseInt(r.substr(2), 16)) : /^Arrow[A-Z]/.test(r) ? r.substr(5) : "Unidentified" === r || r === s ? String.fromCharCode(t.keyCode) : r, e[r] || (r.length > 1 ? c.hyphenate(r) : r.toLowerCase());
          }
          function p(e, t, o, s) {
            var a = e ? "keydown" : "keyup",
              l = Q._focused,
              h;
            if (r[t] = e, e ? n[t] = o : delete n[t], t.length > 1 && (h = c.camelize(t)) in d) {
              d[h] = e;
              var u = de && de.agent;
              if ("meta" === h && u && u.mac) if (e) i = {};else {
                for (var g in i) g in n && p(!1, g, i[g], s);
                i = null;
              }
            } else e && i && (i[t] = o);
            l && l._handleKeyEvent(e ? "keydown" : "keyup", s, t, o);
          }
          return Y.add(l, {
            keydown: function (e) {
              var r = h(e),
                n = de && de.agent;
              r.length > 1 || n && n.chrome && (e.altKey || n.mac && e.metaKey || !n.mac && e.ctrlKey) ? p(!0, r, t[r] || (r.length > 1 ? "" : r), e) : o = r;
            },
            keypress: function (e) {
              if (o) {
                var t = h(e),
                  r = e.charCode,
                  n = r >= 32 ? String.fromCharCode(r) : t.length > 1 ? "" : t;
                t !== o && (t = n.toLowerCase()), p(!0, t, n, e), o = null;
              }
            },
            keyup: function (e) {
              var t = h(e);
              t in n && p(!1, t, n[t], e);
            }
          }), Y.add(a, {
            blur: function (e) {
              for (var t in n) p(!1, t, n[t], e);
            }
          }), {
            modifiers: d,
            isDown: function (e) {
              return !!r[e];
            }
          };
        }(),
        te = X.extend({
          _class: "MouseEvent",
          initialize: function e(t, r, n, i, o) {
            this.type = t, this.event = r, this.point = n, this.target = i, this.delta = o;
          },
          toString: function () {
            return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }";
          }
        }),
        re = X.extend({
          _class: "ToolEvent",
          _item: null,
          initialize: function e(t, r, n) {
            this.tool = t, this.type = r, this.event = n;
          },
          _choosePoint: function (e, t) {
            return e || (t ? t.clone() : null);
          },
          getPoint: function () {
            return this._choosePoint(this._point, this.tool._point);
          },
          setPoint: function (e) {
            this._point = e;
          },
          getLastPoint: function () {
            return this._choosePoint(this._lastPoint, this.tool._lastPoint);
          },
          setLastPoint: function (e) {
            this._lastPoint = e;
          },
          getDownPoint: function () {
            return this._choosePoint(this._downPoint, this.tool._downPoint);
          },
          setDownPoint: function (e) {
            this._downPoint = e;
          },
          getMiddlePoint: function () {
            return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint;
          },
          setMiddlePoint: function (e) {
            this._middlePoint = e;
          },
          getDelta: function () {
            return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta;
          },
          setDelta: function (e) {
            this._delta = e;
          },
          getCount: function () {
            return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"];
          },
          setCount: function (e) {
            this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = e;
          },
          getItem: function () {
            if (!this._item) {
              var e = this.tool._scope.project.hitTest(this.getPoint());
              if (e) {
                for (var t = e.item, r = t._parent; /^(Group|CompoundPath)$/.test(r._class);) t = r, r = r._parent;
                this._item = t;
              }
            }
            return this._item;
          },
          setItem: function (e) {
            this._item = e;
          },
          toString: function () {
            return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }";
          }
        }),
        ne = p.extend({
          _class: "Tool",
          _list: "tools",
          _reference: "tool",
          _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
          initialize: function e(t) {
            p.call(this), this._moveCount = -1, this._downCount = -1, this.set(t);
          },
          getMinDistance: function () {
            return this._minDistance;
          },
          setMinDistance: function (e) {
            this._minDistance = e, null != e && null != this._maxDistance && e > this._maxDistance && (this._maxDistance = e);
          },
          getMaxDistance: function () {
            return this._maxDistance;
          },
          setMaxDistance: function (e) {
            this._maxDistance = e, null != this._minDistance && null != e && e < this._minDistance && (this._minDistance = e);
          },
          getFixedDistance: function () {
            return this._minDistance == this._maxDistance ? this._minDistance : null;
          },
          setFixedDistance: function (e) {
            this._minDistance = this._maxDistance = e;
          },
          _handleMouseEvent: function (e, t, r, n) {
            de = this._scope, n.drag && !this.responds(e) && (e = "mousemove");
            var i = n.move || n.drag,
              o = this.responds(e),
              s = this.minDistance,
              a = this.maxDistance,
              l = !1,
              c = this;
            function d(e, t) {
              var o = r,
                s = i ? c._point : c._downPoint || o;
              if (i) {
                if (c._moveCount >= 0 && o.equals(s)) return !1;
                if (s && (null != e || null != t)) {
                  var a = o.subtract(s),
                    l = a.getLength();
                  if (l < (e || 0)) return !1;
                  t && (o = s.add(a.normalize(Math.min(l, t))));
                }
                c._moveCount++;
              }
              return c._point = o, c._lastPoint = s || o, n.down && (c._moveCount = -1, c._downPoint = o, c._downCount++), !0;
            }
            function h() {
              o && (l = c.emit(e, new re(c, e, t)) || l);
            }
            if (n.down) d(), h();else if (n.up) d(null, a), h();else if (o) for (; d(s, a);) h();
            return l;
          }
        }),
        ie = c.extend(d, {
          _class: "Tween",
          statics: {
            easings: {
              linear: function (e) {
                return e;
              },
              easeInQuad: function (e) {
                return e * e;
              },
              easeOutQuad: function (e) {
                return e * (2 - e);
              },
              easeInOutQuad: function (e) {
                return e < .5 ? 2 * e * e : 2 * (2 - e) * e - 1;
              },
              easeInCubic: function (e) {
                return e * e * e;
              },
              easeOutCubic: function (e) {
                return --e * e * e + 1;
              },
              easeInOutCubic: function (e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              },
              easeInQuart: function (e) {
                return e * e * e * e;
              },
              easeOutQuart: function (e) {
                return 1 - --e * e * e * e;
              },
              easeInOutQuart: function (e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
              },
              easeInQuint: function (e) {
                return e * e * e * e * e;
              },
              easeOutQuint: function (e) {
                return 1 + --e * e * e * e * e;
              },
              easeInOutQuint: function (e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
              }
            }
          },
          initialize: function e(t, r, n, i, o, s) {
            this.object = t;
            var a = typeof o,
              l = "function" === a;
            this.type = l ? a : "string" === a ? o : "linear", this.easing = l ? o : e.easings[this.type], this.duration = i, this.running = !1, this._then = null, this._startTime = null;
            var c = r || n;
            this._keys = c ? Object.keys(c) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = c && this._getState(r), this._to = c && this._getState(n), !1 !== s && this.start();
          },
          then: function (e) {
            return this._then = e, this;
          },
          start: function () {
            return this._startTime = null, this.running = !0, this;
          },
          stop: function () {
            return this.running = !1, this;
          },
          update: function (e) {
            if (this.running) {
              e > 1 && (e = 1, this.running = !1);
              for (var t = this.easing(e), r = this._keys, n = function (r) {
                  return "function" == typeof r ? r(t, e) : r;
                }, i = 0, o = r && r.length; i < o; i++) {
                var s = r[i],
                  a = n(this._from[s]),
                  l = n(this._to[s]),
                  d = a && l && a.__add && l.__add ? l.__subtract(a).__multiply(t).__add(a) : (l - a) * t + a;
                this._setProperty(this._parsedKeys[s], d);
              }
              !this.running && this._then && this._then(this.object), this.responds("update") && this.emit("update", new c({
                progress: e,
                factor: t
              }));
            }
            return this;
          },
          _events: {
            onUpdate: {}
          },
          _handleFrame: function (e) {
            var t = this._startTime,
              r = t ? (e - t) / this.duration : 0;
            t || (this._startTime = e), this.update(r);
          },
          _getState: function (e) {
            for (var t = this._keys, r = {}, n = 0, i = t.length; n < i; n++) {
              var o = t[n],
                s = this._parsedKeys[o],
                a = this._getProperty(s),
                l;
              if (e) {
                var c = this._resolveValue(a, e[o]);
                this._setProperty(s, c), l = (l = this._getProperty(s)) && l.clone ? l.clone() : l, this._setProperty(s, a);
              } else l = a && a.clone ? a.clone() : a;
              r[o] = l;
            }
            return r;
          },
          _resolveValue: function (e, t) {
            if (t) {
              if (Array.isArray(t) && 2 === t.length) {
                var r = t[0];
                return r && r.match && r.match(/^[+\-\*\/]=/) ? this._calculate(e, r[0], t[1]) : t;
              }
              if ("string" == typeof t) {
                var n = t.match(/^[+\-*/]=(.*)/);
                if (n) {
                  var i = JSON.parse(n[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                  return this._calculate(e, t[0], i);
                }
              }
            }
            return t;
          },
          _calculate: function (e, t, r) {
            return de.PaperScript.calculateBinary(e, t, r);
          },
          _parseKeys: function (e) {
            for (var t = {}, r = 0, n = e.length; r < n; r++) {
              var i = e[r],
                o = i.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
              t[i] = o.split("/");
            }
            return t;
          },
          _getProperty: function (e, t) {
            for (var r = this.object, n = 0, i = e.length - (t || 0); n < i && r; n++) r = r[e[n]];
            return r;
          },
          _setProperty: function (e, t) {
            var r = this._getProperty(e, 1);
            r && (r[e[e.length - 1]] = t);
          }
        }),
        oe = function (e) {
          var t = new o.XMLHttpRequest();
          return t.open((e.method || "get").toUpperCase(), e.url, c.pick(e.async, !0)), e.mimeType && t.overrideMimeType(e.mimeType), t.onload = function () {
            var r = t.status;
            0 === r || 200 === r ? e.onLoad && e.onLoad.call(t, t.responseText) : t.onerror();
          }, t.onerror = function () {
            var r = t.status,
              n = 'Could not load "' + e.url + '" (Status: ' + r + ")";
            if (!e.onError) throw new Error(n);
            e.onError(n, r);
          }, t.send(null);
        },
        se = {
          canvases: [],
          getCanvas: function (e, t) {
            if (!a) return null;
            var r,
              n = !0;
            "object" == typeof e && (t = e.height, e = e.width), this.canvases.length ? r = this.canvases.pop() : (r = l.createElement("canvas"), n = !1);
            var i = r.getContext("2d");
            if (!i) throw new Error("Canvas " + r + " is unable to provide a 2D context.");
            return r.width === e && r.height === t ? n && i.clearRect(0, 0, e + 1, t + 1) : (r.width = e, r.height = t), i.save(), r;
          },
          getContext: function (e, t) {
            var r = this.getCanvas(e, t);
            return r ? r.getContext("2d") : null;
          },
          release: function (e) {
            var t = e && e.canvas ? e.canvas : e;
            t && t.getContext && (t.getContext("2d").restore(), this.canvases.push(t));
          }
        },
        ae = new function () {
          var e = Math.min,
            t = Math.max,
            r = Math.abs,
            n,
            i,
            o,
            s,
            a,
            l,
            d,
            h,
            p,
            u,
            g;
          function m(e, t, r) {
            return .2989 * e + .587 * t + .114 * r;
          }
          function f(r, n, i, o) {
            var s = o - m(r, n, i),
              o = m(p = r + s, u = n + s, g = i + s),
              a = e(p, u, g),
              l = t(p, u, g);
            if (a < 0) {
              var c = o - a;
              p = o + (p - o) * o / c, u = o + (u - o) * o / c, g = o + (g - o) * o / c;
            }
            if (l > 255) {
              var d = 255 - o,
                h = l - o;
              p = o + (p - o) * d / h, u = o + (u - o) * d / h, g = o + (g - o) * d / h;
            }
          }
          function y(r, n, i) {
            return t(r, n, i) - e(r, n, i);
          }
          function v(r, n, i, o) {
            var s = [r, n, i],
              a = t(r, n, i),
              l = e(r, n, i),
              c;
            c = 0 === e(l = l === r ? 0 : l === n ? 1 : 2, a = a === r ? 0 : a === n ? 1 : 2) ? 1 === t(l, a) ? 2 : 1 : 0, s[a] > s[l] ? (s[c] = (s[c] - s[l]) * o / (s[a] - s[l]), s[a] = o) : s[c] = s[a] = 0, s[l] = 0, p = s[0], u = s[1], g = s[2];
          }
          var b = {
              multiply: function () {
                p = a * n / 255, u = l * i / 255, g = d * o / 255;
              },
              screen: function () {
                p = a + n - a * n / 255, u = l + i - l * i / 255, g = d + o - d * o / 255;
              },
              overlay: function () {
                p = a < 128 ? 2 * a * n / 255 : 255 - 2 * (255 - a) * (255 - n) / 255, u = l < 128 ? 2 * l * i / 255 : 255 - 2 * (255 - l) * (255 - i) / 255, g = d < 128 ? 2 * d * o / 255 : 255 - 2 * (255 - d) * (255 - o) / 255;
              },
              "soft-light": function () {
                var e = n * a / 255;
                p = e + a * (255 - (255 - a) * (255 - n) / 255 - e) / 255, u = (e = i * l / 255) + l * (255 - (255 - l) * (255 - i) / 255 - e) / 255, g = (e = o * d / 255) + d * (255 - (255 - d) * (255 - o) / 255 - e) / 255;
              },
              "hard-light": function () {
                p = n < 128 ? 2 * n * a / 255 : 255 - 2 * (255 - n) * (255 - a) / 255, u = i < 128 ? 2 * i * l / 255 : 255 - 2 * (255 - i) * (255 - l) / 255, g = o < 128 ? 2 * o * d / 255 : 255 - 2 * (255 - o) * (255 - d) / 255;
              },
              "color-dodge": function () {
                p = 0 === a ? 0 : 255 === n ? 255 : e(255, 255 * a / (255 - n)), u = 0 === l ? 0 : 255 === i ? 255 : e(255, 255 * l / (255 - i)), g = 0 === d ? 0 : 255 === o ? 255 : e(255, 255 * d / (255 - o));
              },
              "color-burn": function () {
                p = 255 === a ? 255 : 0 === n ? 0 : t(0, 255 - 255 * (255 - a) / n), u = 255 === l ? 255 : 0 === i ? 0 : t(0, 255 - 255 * (255 - l) / i), g = 255 === d ? 255 : 0 === o ? 0 : t(0, 255 - 255 * (255 - d) / o);
              },
              darken: function () {
                p = a < n ? a : n, u = l < i ? l : i, g = d < o ? d : o;
              },
              lighten: function () {
                p = a > n ? a : n, u = l > i ? l : i, g = d > o ? d : o;
              },
              difference: function () {
                (p = a - n) < 0 && (p = -p), (u = l - i) < 0 && (u = -u), (g = d - o) < 0 && (g = -g);
              },
              exclusion: function () {
                p = a + n * (255 - a - a) / 255, u = l + i * (255 - l - l) / 255, g = d + o * (255 - d - d) / 255;
              },
              hue: function () {
                v(n, i, o, y(a, l, d)), f(p, u, g, m(a, l, d));
              },
              saturation: function () {
                v(a, l, d, y(n, i, o)), f(p, u, g, m(a, l, d));
              },
              luminosity: function () {
                f(a, l, d, m(n, i, o));
              },
              color: function () {
                f(n, i, o, m(a, l, d));
              },
              add: function () {
                p = e(a + n, 255), u = e(l + i, 255), g = e(d + o, 255);
              },
              subtract: function () {
                p = t(a - n, 0), u = t(l - i, 0), g = t(d - o, 0);
              },
              average: function () {
                p = (a + n) / 2, u = (l + i) / 2, g = (d + o) / 2;
              },
              negation: function () {
                p = 255 - r(255 - n - a), u = 255 - r(255 - i - l), g = 255 - r(255 - o - d);
              }
            },
            x = this.nativeModes = c.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function (e) {
              this[e] = !0;
            }, {}),
            C = se.getContext(1, 1);
          C && (c.each(b, function (e, t) {
            var r = "darken" === t,
              n = !1;
            C.save();
            try {
              C.fillStyle = r ? "#300" : "#a00", C.fillRect(0, 0, 1, 1), C.globalCompositeOperation = t, C.globalCompositeOperation === t && (C.fillStyle = r ? "#a00" : "#300", C.fillRect(0, 0, 1, 1), n = C.getImageData(0, 0, 1, 1).data[0] !== r ? 170 : 51);
            } catch (e) {}
            C.restore(), x[t] = n;
          }), se.release(C)), this.process = function (e, t, r, c, m) {
            var f = t.canvas,
              y = "normal" === e;
            if (y || x[e]) r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.globalAlpha = c, y || (r.globalCompositeOperation = e), r.drawImage(f, m.x, m.y), r.restore();else {
              var v = b[e];
              if (!v) return;
              for (var C = r.getImageData(m.x, m.y, f.width, f.height), S = C.data, A = t.getImageData(0, 0, f.width, f.height).data, w = 0, E = S.length; w < E; w += 4) {
                n = A[w], a = S[w], i = A[w + 1], l = S[w + 1], o = A[w + 2], d = S[w + 2], s = A[w + 3], h = S[w + 3], v();
                var k = s * c / 255,
                  O = 1 - k;
                S[w] = k * p + O * a, S[w + 1] = k * u + O * l, S[w + 2] = k * g + O * d, S[w + 3] = s * c + O * h;
              }
              r.putImageData(C, m.x, m.y);
            }
          };
        }(),
        le = new function () {
          var e = "http://www.w3.org/2000/svg",
            t = "http://www.w3.org/2000/xmlns",
            r = "http://www.w3.org/1999/xlink",
            n = {
              href: r,
              xlink: t,
              xmlns: t + "/",
              "xmlns:xlink": t + "/"
            };
          function i(t, r, n) {
            return s(l.createElementNS(e, t), r, n);
          }
          function o(e, t) {
            var r = n[t],
              i = r ? e.getAttributeNS(r, t) : e.getAttribute(t);
            return "null" === i ? null : i;
          }
          function s(e, t, r) {
            for (var i in t) {
              var o = t[i],
                s = n[i];
              "number" == typeof o && r && (o = r.number(o)), s ? e.setAttributeNS(s, i, o) : e.setAttribute(i, o);
            }
            return e;
          }
          return {
            svg: e,
            xmlns: t,
            xlink: r,
            create: i,
            get: o,
            set: s
          };
        }(),
        ce = c.each({
          fillColor: ["fill", "color"],
          fillRule: ["fill-rule", "string"],
          strokeColor: ["stroke", "color"],
          strokeWidth: ["stroke-width", "number"],
          strokeCap: ["stroke-linecap", "string"],
          strokeJoin: ["stroke-linejoin", "string"],
          strokeScaling: ["vector-effect", "lookup", {
            true: "none",
            false: "non-scaling-stroke"
          }, function (e, t) {
            return !t && (e instanceof j || e instanceof D || e instanceof W);
          }],
          miterLimit: ["stroke-miterlimit", "number"],
          dashArray: ["stroke-dasharray", "array"],
          dashOffset: ["stroke-dashoffset", "number"],
          fontFamily: ["font-family", "string"],
          fontWeight: ["font-weight", "string"],
          fontSize: ["font-size", "number"],
          justification: ["text-anchor", "lookup", {
            left: "start",
            center: "middle",
            right: "end"
          }],
          opacity: ["opacity", "number"],
          blendMode: ["mix-blend-mode", "style"]
        }, function (e, t) {
          var r = c.capitalize(t),
            n = e[2];
          this[t] = {
            type: e[1],
            property: t,
            attribute: e[0],
            toSVG: n,
            fromSVG: n && c.each(n, function (e, t) {
              this[e] = t;
            }, {}),
            exportFilter: e[3],
            get: "get" + r,
            set: "set" + r
          };
        }, {});
      new function () {
        var e;
        function t(t, r, n) {
          var i = new c(),
            o = t.getTranslation(),
            s;
          r && (t.isInvertible() ? (s = (t = t._shiftless())._inverseTransform(o), o = null) : s = new f(), i[n ? "cx" : "x"] = s.x, i[n ? "cy" : "y"] = s.y);
          if (!t.isIdentity()) {
            var a = t.decompose();
            if (a) {
              var l = [],
                d = a.rotation,
                h = a.scaling,
                p = a.skewing;
              o && !o.isZero() && l.push("translate(" + e.point(o) + ")"), d && l.push("rotate(" + e.number(d) + ")"), g.isZero(h.x - 1) && g.isZero(h.y - 1) || l.push("scale(" + e.point(h) + ")"), p.x && l.push("skewX(" + e.number(p.x) + ")"), p.y && l.push("skewY(" + e.number(p.y) + ")"), i.transform = l.join(" ");
            } else i.transform = "matrix(" + t.getValues().join(",") + ")";
          }
          return i;
        }
        function r(r, n) {
          for (var i = t(r._matrix), o = r._children, s = le.create("g", i, e), a = 0, l = o.length; a < l; a++) {
            var c = o[a],
              d = k(c, n);
            if (d) if (c.isClipMask()) {
              var h = le.create("clipPath");
              h.appendChild(d), C(c, h, "clip"), le.set(s, {
                "clip-path": "url(#" + h.id + ")"
              });
            } else s.appendChild(d);
          }
          return s;
        }
        function n(r, n) {
          var i = t(r._matrix, !0),
            o = r.getSize(),
            s = r.getImage();
          return i.x -= o.width / 2, i.y -= o.height / 2, i.width = o.width, i.height = o.height, i.href = 0 == n.embedImages && s && s.src || r.toDataURL(), le.create("image", i, e);
        }
        function i(r, n) {
          var i = n.matchShapes;
          if (i) {
            var o = r.toShape(!1);
            if (o) return s(o, n);
          }
          var a = r._segments,
            l = a.length,
            c,
            d = t(r._matrix);
          if (i && l >= 2 && !r.hasHandles()) {
            if (l > 2) {
              c = r._closed ? "polygon" : "polyline";
              for (var h = [], p = 0; p < l; p++) h.push(e.point(a[p]._point));
              d.points = h.join(" ");
            } else {
              c = "line";
              var u = a[0]._point,
                g = a[1]._point;
              d.set({
                x1: u.x,
                y1: u.y,
                x2: g.x,
                y2: g.y
              });
            }
          } else c = "path", d.d = r.getPathData(null, n.precision);
          return le.create(c, d, e);
        }
        function s(r) {
          var n = r._type,
            i = r._radius,
            o = t(r._matrix, !0, "rectangle" !== n);
          if ("rectangle" === n) {
            n = "rect";
            var s = r._size,
              a = s.width,
              l = s.height;
            o.x -= a / 2, o.y -= l / 2, o.width = a, o.height = l, i.isZero() && (i = null);
          }
          return i && ("circle" === n ? o.r = i : (o.rx = i.width, o.ry = i.height)), le.create(n, o, e);
        }
        function a(r, n) {
          var i = t(r._matrix),
            o = r.getPathData(null, n.precision);
          return o && (i.d = o), le.create("path", i, e);
        }
        function l(r, n) {
          var i = t(r._matrix, !0),
            o = r._definition,
            s = b(o, "symbol"),
            a = o._item,
            l = a.getStrokeBounds();
          return s || ((s = le.create("symbol", {
            viewBox: e.rectangle(l)
          })).appendChild(k(a, n)), C(o, s, "symbol")), i.href = "#" + s.id, i.x += l.x, i.y += l.y, i.width = l.width, i.height = l.height, i.overflow = "visible", le.create("use", i, e);
        }
        function d(t) {
          var r = b(t, "color");
          if (!r) {
            var n = t.getGradient(),
              i = n._radial,
              o = t.getOrigin(),
              s = t.getDestination(),
              a;
            if (i) {
              a = {
                cx: o.x,
                cy: o.y,
                r: o.getDistance(s)
              };
              var l = t.getHighlight();
              l && (a.fx = l.x, a.fy = l.y);
            } else a = {
              x1: o.x,
              y1: o.y,
              x2: s.x,
              y2: s.y
            };
            a.gradientUnits = "userSpaceOnUse", r = le.create((i ? "radial" : "linear") + "Gradient", a, e);
            for (var c = n._stops, d = 0, h = c.length; d < h; d++) {
              var p = c[d],
                u = p._color,
                g = u.getAlpha(),
                m = p._offset;
              a = {
                offset: m ?? d / (h - 1)
              }, u && (a["stop-color"] = u.toCSS(!0)), g < 1 && (a["stop-opacity"] = g), r.appendChild(le.create("stop", a, e));
            }
            C(t, r, "color");
          }
          return "url(#" + r.id + ")";
        }
        function h(r) {
          var n = le.create("text", t(r._matrix, !0), e);
          return n.textContent = r._content, n;
        }
        var p = {
            Group: r,
            Layer: r,
            Raster: n,
            Path: i,
            Shape: s,
            CompoundPath: a,
            SymbolItem: l,
            PointText: h
          },
          y;
        function v(t, r, n) {
          var i = {},
            o = !n && t.getParent(),
            s = [];
          return null != t._name && (i.id = t._name), c.each(ce, function (e) {
            var r = e.get,
              n = e.type,
              a = t[r]();
            if (e.exportFilter ? e.exportFilter(t, a) : !o || !c.equals(o[r](), a)) {
              if ("color" === n && null != a) {
                var l = a.getAlpha();
                l < 1 && (i[e.attribute + "-opacity"] = l);
              }
              "style" === n ? s.push(e.attribute + ": " + a) : i[e.attribute] = null == a ? "none" : "color" === n ? a.gradient ? d(a, t) : a.toCSS(!0) : "array" === n ? a.join(",") : "lookup" === n ? e.toSVG[a] : a;
            }
          }), s.length && (i.style = s.join(";")), 1 === i.opacity && delete i.opacity, t._visible || (i.visibility = "hidden"), le.set(r, i, e);
        }
        function b(e, t) {
          return y || (y = {
            ids: {},
            svgs: {}
          }), e && y.svgs[t + "-" + (e._id || e.__id || (e.__id = m.get("svg")))];
        }
        function C(e, t, r) {
          y || b();
          var n = y.ids[r] = (y.ids[r] || 0) + 1;
          t.id = r + "-" + n, y.svgs[r + "-" + (e._id || e.__id)] = t;
        }
        function A(e, t) {
          var r = e,
            n = null;
          if (y) {
            for (var i in r = "svg" === e.nodeName.toLowerCase() && e, y.svgs) n || (r || (r = le.create("svg")).appendChild(e), n = r.insertBefore(le.create("defs"), r.firstChild)), n.appendChild(y.svgs[i]);
            y = null;
          }
          return t.asString ? new o.XMLSerializer().serializeToString(r) : r;
        }
        function k(e, t, r) {
          var n = p[e._class],
            i = n && n(e, t);
          if (i) {
            var o = t.onExport;
            o && (i = o(e, i, t) || i);
            var s = JSON.stringify(e._data);
            s && "{}" !== s && "null" !== s && i.setAttribute("data-paper-data", s);
          }
          return i && v(e, i, r);
        }
        function O(t) {
          return t || (t = {}), e = new u(t.precision), t;
        }
        E.inject({
          exportSVG: function (e) {
            return A(k(this, e = O(e), !0), e);
          }
        }), w.inject({
          exportSVG: function (r) {
            r = O(r);
            var n = this._children,
              i = this.getView(),
              o = c.pick(r.bounds, "view"),
              s = r.matrix || "view" === o && i._matrix,
              a = s && S.read([s]),
              l = "view" === o ? new x([0, 0], i.getViewSize()) : "content" === o ? E._getBounds(n, a, {
                stroke: !0
              }).rect : x.read([o], 0, {
                readNull: !0
              }),
              d = {
                version: "1.1",
                xmlns: le.svg,
                "xmlns:xlink": le.xlink
              };
            l && (d.width = l.width, d.height = l.height, (l.x || 0 === l.x || l.y || 0 === l.y) && (d.viewBox = e.rectangle(l)));
            var h = le.create("svg", d, e),
              p = h;
            a && !a.isIdentity() && (p = h.appendChild(le.create("g", t(a), e)));
            for (var u = 0, g = n.length; u < g; u++) p.appendChild(k(n[u], r, !0));
            return A(h, r);
          }
        });
      }(), new function () {
        var e = {},
          t;
        function r(e, r, n, i, o, s) {
          var a = le.get(e, r) || s,
            l = null == a ? i ? null : n ? "" : 0 : n ? a : parseFloat(a);
          return /%\s*$/.test(a) ? l / 100 * (o ? 1 : t[/x|^width/.test(r) ? "width" : "height"]) : l;
        }
        function n(e, t, n, i, o, s, a) {
          return t = r(e, t || "x", !1, i, o, s), n = r(e, n || "y", !1, i, o, a), !i || null != t && null != n ? new f(t, n) : null;
        }
        function i(e, t, n, i, o) {
          return t = r(e, t || "width", !1, i, o), n = r(e, n || "height", !1, i, o), !i || null != t && null != n ? new v(t, n) : null;
        }
        function d(e, t, r) {
          return "none" === e ? null : "number" === t ? parseFloat(e) : "array" === t ? e ? e.split(/[\s,]+/g).map(parseFloat) : [] : "color" === t ? M(e) || e : "lookup" === t ? r[e] : e;
        }
        function h(e, t, r, n) {
          var i = e.childNodes,
            o = "clippath" === t,
            s = "defs" === t,
            a = new k(),
            l = a._project,
            c = l._currentStyle,
            d = [];
          if (o || s || (a = O(a, e, n), l._currentStyle = a._style.clone()), n) for (var h = e.querySelectorAll("defs"), p = 0, u = h.length; p < u; p++) T(h[p], r, !1);
          for (var p = 0, u = i.length; p < u; p++) {
            var g = i[p],
              m;
            1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(m = T(g, r, !1)) || m instanceof I || d.push(m);
          }
          return a.addChildren(d), o && (a = O(a.reduce(), e, n)), l._currentStyle = c, (o || s) && (a.remove(), a = null), a;
        }
        function p(e, t) {
          for (var r = e.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), n = [], i = 0, o = r.length; i < o; i += 2) n.push(new f(parseFloat(r[i]), parseFloat(r[i + 1])));
          var s = new _(n);
          return "polygon" === t && s.closePath(), s;
        }
        function u(e) {
          return j.create(e.getAttribute("d"));
        }
        function g(t, i) {
          var o = (r(t, "href", !0) || "").substring(1),
            s = "radialgradient" === i,
            a;
          if (o) (a = e[o].getGradient())._radial ^ s && ((a = a.clone())._radial = s);else {
            for (var l = t.childNodes, c = [], d = 0, h = l.length; d < h; d++) {
              var p = l[d];
              1 === p.nodeType && c.push(O(new G(), p));
            }
            a = new q(c, s);
          }
          var u,
            g,
            m,
            f = "userSpaceOnUse" !== r(t, "gradientUnits", !0),
            y;
          return s ? (g = (u = n(t, "cx", "cy", !1, f, "50%", "50%")).add(r(t, "r", !1, !1, f, "50%"), 0), m = n(t, "fx", "fy", !0, f)) : (u = n(t, "x1", "y1", !1, f, "0%", "0%"), g = n(t, "x2", "y2", !1, f, "100%", "0%")), O(new U(a, u, g, m), t)._scaleToBounds = f, null;
        }
        var m = {
          "#document": function (e, t, r, n) {
            for (var i = e.childNodes, o = 0, s = i.length; o < s; o++) {
              var a = i[o];
              if (1 === a.nodeType) return T(a, r, n);
            }
          },
          g: h,
          svg: h,
          clippath: h,
          polygon: p,
          polyline: p,
          path: u,
          lineargradient: g,
          radialgradient: g,
          image: function (e) {
            var t = new P(r(e, "href", !0));
            return t.on("load", function () {
              var t = i(e);
              this.setSize(t);
              var r = n(e).add(t.divide(2));
              this._matrix.append(new S().translate(r));
            }), t;
          },
          symbol: function (e, t, r, n) {
            return new I(h(e, t, r, n), !0);
          },
          defs: h,
          use: function (t) {
            var i = (r(t, "href", !0) || "").substring(1),
              o = e[i],
              s = n(t);
            return o ? o instanceof I ? o.place(s) : o.clone().translate(s) : null;
          },
          circle: function (e) {
            return new D.Circle(n(e, "cx", "cy"), r(e, "r"));
          },
          ellipse: function (e) {
            return new D.Ellipse({
              center: n(e, "cx", "cy"),
              radius: i(e, "rx", "ry")
            });
          },
          rect: function (e) {
            return new D.Rectangle(new x(n(e), i(e)), i(e, "rx", "ry"));
          },
          line: function (e) {
            return new _.Line(n(e, "x1", "y1"), n(e, "x2", "y2"));
          },
          text: function (e) {
            var t = new V(n(e).add(n(e, "dx", "dy")));
            return t.setContent(e.textContent.trim() || ""), t;
          },
          switch: h
        };
        function y(e, t, r, n) {
          if (e.transform) {
            for (var i = (n.getAttribute(r) || "").split(/\)\s*/g), o = new S(), s = 0, a = i.length; s < a; s++) {
              var l = i[s];
              if (!l) break;
              for (var c = l.split(/\(\s*/), d = c[0], h = c[1].split(/[\s,]+/g), p = 0, u = h.length; p < u; p++) h[p] = parseFloat(h[p]);
              switch (d) {
                case "matrix":
                  o.append(new S(h[0], h[1], h[2], h[3], h[4], h[5]));
                  break;
                case "rotate":
                  o.rotate(h[0], h[1] || 0, h[2] || 0);
                  break;
                case "translate":
                  o.translate(h[0], h[1] || 0);
                  break;
                case "scale":
                  o.scale(h);
                  break;
                case "skewX":
                  o.skew(h[0], 0);
                  break;
                case "skewY":
                  o.skew(0, h[0]);
              }
            }
            e.transform(o);
          }
        }
        function b(e, t, r) {
          var n = "fill-opacity" === r ? "getFillColor" : "getStrokeColor",
            i = e[n] && e[n]();
          i && i.setAlpha(parseFloat(t));
        }
        var C = c.set(c.each(ce, function (e) {
          this[e.attribute] = function (t, r) {
            if (t[e.set] && (t[e.set](d(r, e.type, e.fromSVG)), "color" === e.type)) {
              var n = t[e.get]();
              if (n && n._scaleToBounds) {
                var i = t.getBounds();
                n.transform(new S().translate(i.getPoint()).scale(i.getSize()));
              }
            }
          };
        }, {}), {
          id: function (t, r) {
            e[r] = t, t.setName && t.setName(r);
          },
          "clip-path": function (e, t) {
            var r = M(t);
            if (r) {
              if ((r = r.clone()).setClipMask(!0), !(e instanceof k)) return new k(r, e);
              e.insertChild(0, r);
            }
          },
          gradientTransform: y,
          transform: y,
          "fill-opacity": b,
          "stroke-opacity": b,
          visibility: function (e, t) {
            e.setVisible && e.setVisible("visible" === t);
          },
          display: function (e, t) {
            e.setVisible && e.setVisible(null !== t);
          },
          "stop-color": function (e, t) {
            e.setColor && e.setColor(t);
          },
          "stop-opacity": function (e, t) {
            e._color && e._color.setAlpha(parseFloat(t));
          },
          offset: function (e, t) {
            if (e.setOffset) {
              var r = t.match(/(.*)%$/);
              e.setOffset(r ? r[1] / 100 : parseFloat(t));
            }
          },
          viewBox: function (e, t, r, n, o) {
            var s = new x(d(t, "array")),
              a = i(n, null, null, !0),
              l,
              c;
            if (e instanceof k) {
              var h = a ? a.divide(s.getSize()) : 1,
                c = new S().scale(h).translate(s.getPoint().negate());
              l = e;
            } else e instanceof I && (a && s.setSize(a), l = e._item);
            if (l) {
              if ("visible" !== A(n, "overflow", o)) {
                var p = new D.Rectangle(s);
                p.setClipMask(!0), l.addChild(p);
              }
              c && l.transform(c);
            }
          }
        });
        function A(e, t, r) {
          var n = e.attributes[t],
            i = n && n.value;
          if (!i && e.style) {
            var o = c.camelize(t);
            (i = e.style[o]) || r.node[o] === r.parent[o] || (i = r.node[o]);
          }
          return i ? "none" === i ? null : i : s;
        }
        function O(e, t, r) {
          var n = t.parentNode,
            i = {
              node: Z.getStyles(t) || {},
              parent: !r && !/^defs$/i.test(n.tagName) && Z.getStyles(n) || {}
            };
          return c.each(C, function (r, n) {
            var o = A(t, n, i);
            e = o !== s && r(e, o, n, t, i) || e;
          }), e;
        }
        function M(t) {
          var r = t && t.match(/\((?:["'#]*)([^"')]+)/),
            n = r && r[1],
            i = n && e[a ? n.replace(a.location.href.split("#")[0] + "#", "") : n];
          return i && i._scaleToBounds && ((i = i.clone())._scaleToBounds = !0), i;
        }
        function T(r, n, o) {
          var s = r.nodeName.toLowerCase(),
            a = "#document" !== s,
            d = l.body,
            h,
            p,
            u;
          o && a && (t = de.getView().getSize(), t = i(r, null, null, !0) || t, h = le.create("svg", {
            style: "stroke-width: 1px; stroke-miterlimit: 10"
          }), p = r.parentNode, u = r.nextSibling, h.appendChild(r), d.appendChild(h));
          var g = de.settings,
            f = g.applyMatrix,
            y = g.insertItems;
          g.applyMatrix = !1, g.insertItems = !1;
          var v = m[s],
            b = v && v(r, s, n, o) || null;
          if (g.insertItems = y, g.applyMatrix = f, b) {
            !a || b instanceof k || (b = O(b, r, o));
            var x = n.onImport,
              C = a && r.getAttribute("data-paper-data");
            x && (b = x(r, b, n) || b), n.expandShapes && b instanceof D && (b.remove(), b = b.toPath()), C && (b._data = JSON.parse(C));
          }
          return h && (d.removeChild(h), p && (u ? p.insertBefore(r, u) : p.appendChild(r))), o && (e = {}, b && c.pick(n.applyMatrix, f) && b.matrix.apply(!0, !0)), b;
        }
        function L(e, t, r) {
          if (!e) return null;
          t = "function" == typeof t ? {
            onLoad: t
          } : t || {};
          var n = de,
            i = null;
          function a(a) {
            try {
              var l = "object" == typeof a ? a : new o.DOMParser().parseFromString(a, "image/svg+xml");
              if (!l.nodeName) throw l = null, new Error("Unsupported SVG source: " + e);
              de = n, i = T(l, t, !0), t && !1 === t.insert || r._insertItem(s, i);
              var d = t.onLoad;
              d && d(i, a);
            } catch (e) {
              c(e);
            }
          }
          function c(e, r) {
            var n = t.onError;
            if (!n) throw new Error(e);
            n(e, r);
          }
          if ("string" != typeof e || /^.*</.test(e)) {
            if ("undefined" != typeof File && e instanceof File) {
              var d = new FileReader();
              return d.onload = function () {
                a(d.result);
              }, d.onerror = function () {
                c(d.error);
              }, d.readAsText(e);
            }
            a(e);
          } else {
            var h = l.getElementById(e);
            h ? a(h) : oe({
              url: e,
              async: !0,
              onLoad: a,
              onError: c
            });
          }
          return i;
        }
        E.inject({
          importSVG: function (e, t) {
            return L(e, t, this);
          }
        }), w.inject({
          importSVG: function (e, t) {
            return this.activate(), L(e, t, this);
          }
        });
      }();
      var de = new (h.inject(c.exports, {
        Base: c,
        Numerical: g,
        Key: ee,
        DomEvent: Y,
        DomElement: Z,
        document: l,
        window: a,
        Symbol: I,
        PlacedSymbol: M
      }))();
      return de.agent.node && r(66999)(de), (i = "function" == typeof (n = de) ? n.call(t, r, t, e) : n) === s || (e.exports = i), de;
    }.call(this, "object" == typeof self ? self : null);
};
