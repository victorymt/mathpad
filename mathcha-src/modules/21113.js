/* module 21113 — 46224 chars */
module.exports = function (e) {
  var t = t || {
    REVISION: "ALPHA"
  };
  !function (e) {
    "use strict";

    var t = !1,
      r = 0,
      n = function e() {
        if (t) return t = !1, r;
        var n = 2 * generator.nextId() - 1,
          i = 2 * generator.nextId() - 1,
          o = n * n + i * i;
        if (0 == o || o > 1) return e();
        var s = Math.sqrt(-2 * Math.log(o) / o);
        return r = i * s, t = !0, n * s;
      },
      i = function e(t, r) {
        return generator.nextId() * (r - t) + t;
      },
      o = function e(t, r) {
        return Math.floor(generator.nextId() * (r - t) + t);
      },
      s = function e(t, r) {
        return t + n() * r;
      },
      a = function e(t) {
        if (void 0 === t || isNaN(t)) return [];
        if ("undefined" == typeof ArrayBuffer) {
          for (var r = new Array(t), n = 0; n < t; n++) r[n] = 0;
          return r;
        }
        return new Float64Array(t);
      },
      l = function e(t, r) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === r) return !0;
        return !1;
      },
      c = function e(t) {
        for (var r = [], n = 0, i = t.length; n < i; n++) l(r, t[n]) || r.push(t[n]);
        return r;
      },
      d = function e(t) {
        if (0 === t.length) return {};
        for (var r = t[0], n = t[0], i = 0, o = 0, s = t.length, a = 1; a < s; a++) t[a] > r && (r = t[a], i = a), t[a] < n && (n = t[a], o = a);
        return {
          maxi: i,
          maxv: r,
          mini: o,
          minv: n,
          dv: r - n
        };
      },
      h = function e(t) {
        for (var r = t, n = 0, i, o = [], s = 0; s < t; s++) o[s] = s;
        for (; r--;) n = Math.floor(generator.nextId() * (r + 1)), i = o[r], o[r] = o[n], o[n] = i;
        return o;
      },
      p = function e(t, r) {
        for (var n = i(0, 1), o = 0, s = 0, a = t.length; s < a; s++) if (n < (o += r[s])) return t[s];
      },
      u = function e(t, r, n) {
        if ("string" == typeof r) return void 0 !== t[r] ? t[r] : n;
        for (var i = n, o = 0; o < r.length; o++) {
          var s = r[o];
          void 0 !== t[s] && (i = t[s]);
        }
        return i;
      };
    function g(e, t) {
      if (!e) {
        if (t = t || "Assertion failed", "undefined" != typeof Error) throw new Error(t);
        throw t;
      }
    }
    e.randf = i, e.randi = o, e.randn = s, e.zeros = a, e.maxmin = d, e.randperm = h, e.weightedSample = p, e.arrUnique = c, e.arrContains = l, e.getopt = u, e.assert = g;
  }(t), function (e) {
    "use strict";

    var t = function t(r, n, i, o) {
      if ("[object Array]" === Object.prototype.toString.call(r)) {
        this.sx = 1, this.sy = 1, this.depth = r.length, this.w = e.zeros(this.depth), this.dw = e.zeros(this.depth);
        for (var s = 0; s < this.depth; s++) this.w[s] = r[s];
      } else {
        this.sx = r, this.sy = n, this.depth = i;
        var a = r * n * i;
        if (this.w = e.zeros(a), this.dw = e.zeros(a), void 0 === o) for (var l = Math.sqrt(1 / (r * n * i)), s = 0; s < a; s++) this.w[s] = e.randn(0, l);else for (var s = 0; s < a; s++) this.w[s] = o;
      }
    };
    t.prototype = {
      get: function e(t, r, n) {
        var i = (this.sx * r + t) * this.depth + n;
        return this.w[i];
      },
      set: function e(t, r, n, i) {
        var o = (this.sx * r + t) * this.depth + n;
        this.w[o] = i;
      },
      add: function e(t, r, n, i) {
        var o = (this.sx * r + t) * this.depth + n;
        this.w[o] += i;
      },
      get_grad: function e(t, r, n) {
        var i = (this.sx * r + t) * this.depth + n;
        return this.dw[i];
      },
      set_grad: function e(t, r, n, i) {
        var o = (this.sx * r + t) * this.depth + n;
        this.dw[o] = i;
      },
      add_grad: function e(t, r, n, i) {
        var o = (this.sx * r + t) * this.depth + n;
        this.dw[o] += i;
      },
      cloneAndZero: function e() {
        return new t(this.sx, this.sy, this.depth, 0);
      },
      clone: function e() {
        for (var r = new t(this.sx, this.sy, this.depth, 0), n = this.w.length, i = 0; i < n; i++) r.w[i] = this.w[i];
        return r;
      },
      addFrom: function e(t) {
        for (var r = 0; r < this.w.length; r++) this.w[r] += t.w[r];
      },
      addFromScaled: function e(t, r) {
        for (var n = 0; n < this.w.length; n++) this.w[n] += r * t.w[n];
      },
      setConst: function e(t) {
        for (var r = 0; r < this.w.length; r++) this.w[r] = t;
      },
      toJSON: function e() {
        var t = {};
        return t.sx = this.sx, t.sy = this.sy, t.depth = this.depth, t.w = this.w, t;
      },
      fromJSON: function t(r) {
        this.sx = r.sx, this.sy = r.sy, this.depth = r.depth;
        var n = this.sx * this.sy * this.depth;
        this.w = e.zeros(n), this.dw = e.zeros(n);
        for (var i = 0; i < n; i++) this.w[i] = r.w[i];
      }
    }, e.Vol = t;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function r(n, i, o, s, a) {
        if (void 0 === a) var a = !1;
        if (void 0 === o) var o = e.randi(0, n.sx - i);
        if (void 0 === s) var s = e.randi(0, n.sy - i);
        var l;
        if (i !== n.sx || 0 !== o || 0 !== s) {
          l = new t(i, i, n.depth, 0);
          for (var c = 0; c < i; c++) for (var d = 0; d < i; d++) if (!(c + o < 0 || c + o >= n.sx || d + s < 0 || d + s >= n.sy)) for (var h = 0; h < n.depth; h++) l.set(c, d, h, n.get(c + o, d + s, h));
        } else l = n;
        if (a) {
          for (var p = l.cloneAndZero(), c = 0; c < l.sx; c++) for (var d = 0; d < l.sy; d++) for (var h = 0; h < l.depth; h++) p.set(c, d, h, l.get(l.sx - c - 1, d, h));
          l = p;
        }
        return l;
      },
      n = function e(r, n) {
        if (void 0 === n) var n = !1;
        var i = document.createElement("canvas");
        i.width = r.width, i.height = r.height;
        var o = i.getContext("2d");
        try {
          o.drawImage(r, 0, 0);
        } catch (e) {
          if ("NS_ERROR_NOT_AVAILABLE" === e.name) return !1;
          throw e;
        }
        try {
          var s = o.getImageData(0, 0, i.width, i.height);
        } catch (e) {
          if ("IndexSizeError" === e.name) return !1;
          throw e;
        }
        for (var a = s.data, l = r.width, c = r.height, d = [], h = 0; h < a.length; h++) d.push(a[h] / 255 - .5);
        var p = new t(l, c, 4, 0);
        if (p.w = d, n) {
          for (var u = new t(l, c, 1, 0), h = 0; h < l; h++) for (var g = 0; g < c; g++) u.set(h, g, 0, p.get(h, g, 0));
          p = u;
        }
        return p;
      };
    e.augment = r, e.img_to_vol = n;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function e(r) {
        var r = r || {};
        this.out_depth = r.filters, this.sx = r.sx, this.in_depth = r.in_depth, this.in_sx = r.in_sx, this.in_sy = r.in_sy, this.sy = void 0 !== r.sy ? r.sy : this.sx, this.stride = void 0 !== r.stride ? r.stride : 1, this.pad = void 0 !== r.pad ? r.pad : 0, this.l1_decay_mul = void 0 !== r.l1_decay_mul ? r.l1_decay_mul : 0, this.l2_decay_mul = void 0 !== r.l2_decay_mul ? r.l2_decay_mul : 1, this.out_sx = Math.floor((this.in_sx + 2 * this.pad - this.sx) / this.stride + 1), this.out_sy = Math.floor((this.in_sy + 2 * this.pad - this.sy) / this.stride + 1), this.layer_type = "conv";
        var n = void 0 !== r.bias_pref ? r.bias_pref : 0;
        this.filters = [];
        for (var i = 0; i < this.out_depth; i++) this.filters.push(new t(this.sx, this.sy, this.in_depth));
        this.biases = new t(1, 1, this.out_depth, n);
      };
    r.prototype = {
      forward: function e(r, n) {
        this.in_act = r;
        for (var i = new t(0 | this.out_sx, 0 | this.out_sy, 0 | this.out_depth, 0), o = 0 | r.sx, s = 0 | r.sy, a = 0 | this.stride, l = 0; l < this.out_depth; l++) for (var c = this.filters[l], d = 0 | -this.pad, h = 0 | -this.pad, p = 0; p < this.out_sy; h += a, p++) {
          d = 0 | -this.pad;
          for (var u = 0; u < this.out_sx; d += a, u++) {
            for (var g = 0, m = 0; m < c.sy; m++) for (var f = h + m, y = 0; y < c.sx; y++) {
              var v = d + y;
              if (f >= 0 && f < s && v >= 0 && v < o) for (var b = 0; b < c.depth; b++) g += c.w[(c.sx * m + y) * c.depth + b] * r.w[(o * f + v) * r.depth + b];
            }
            g += this.biases.w[l], i.set(u, p, l, g);
          }
        }
        return this.out_act = i, this.out_act;
      },
      backward: function t() {
        var r = this.in_act;
        r.dw = e.zeros(r.w.length);
        for (var n = 0 | r.sx, i = 0 | r.sy, o = 0 | this.stride, s = 0; s < this.out_depth; s++) for (var a = this.filters[s], l = 0 | -this.pad, c = 0 | -this.pad, d = 0; d < this.out_sy; c += o, d++) {
          l = 0 | -this.pad;
          for (var h = 0; h < this.out_sx; l += o, h++) {
            for (var p = this.out_act.get_grad(h, d, s), u = 0; u < a.sy; u++) for (var g = c + u, m = 0; m < a.sx; m++) {
              var f = l + m;
              if (g >= 0 && g < i && f >= 0 && f < n) for (var y = 0; y < a.depth; y++) {
                var v = (n * g + f) * r.depth + y,
                  b = (a.sx * u + m) * a.depth + y;
                a.dw[b] += r.w[v] * p, r.dw[v] += a.w[b] * p;
              }
            }
            this.biases.dw[s] += p;
          }
        }
      },
      getParamsAndGrads: function e() {
        for (var t = [], r = 0; r < this.out_depth; r++) t.push({
          params: this.filters[r].w,
          grads: this.filters[r].dw,
          l2_decay_mul: this.l2_decay_mul,
          l1_decay_mul: this.l1_decay_mul
        });
        return t.push({
          params: this.biases.w,
          grads: this.biases.dw,
          l1_decay_mul: 0,
          l2_decay_mul: 0
        }), t;
      },
      toJSON: function e() {
        var t = {};
        t.sx = this.sx, t.sy = this.sy, t.stride = this.stride, t.in_depth = this.in_depth, t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.l1_decay_mul = this.l1_decay_mul, t.l2_decay_mul = this.l2_decay_mul, t.pad = this.pad, t.filters = [];
        for (var r = 0; r < this.filters.length; r++) t.filters.push(this.filters[r].toJSON());
        return t.biases = this.biases.toJSON(), t;
      },
      fromJSON: function e(r) {
        this.out_depth = r.out_depth, this.out_sx = r.out_sx, this.out_sy = r.out_sy, this.layer_type = r.layer_type, this.sx = r.sx, this.sy = r.sy, this.stride = r.stride, this.in_depth = r.in_depth, this.filters = [], this.l1_decay_mul = void 0 !== r.l1_decay_mul ? r.l1_decay_mul : 1, this.l2_decay_mul = void 0 !== r.l2_decay_mul ? r.l2_decay_mul : 1, this.pad = void 0 !== r.pad ? r.pad : 0;
        for (var n = 0; n < r.filters.length; n++) {
          var i = new t(0, 0, 0, 0);
          i.fromJSON(r.filters[n]), this.filters.push(i);
        }
        this.biases = new t(0, 0, 0, 0), this.biases.fromJSON(r.biases);
      }
    };
    var n = function e(r) {
      var r = r || {};
      this.out_depth = void 0 !== r.num_neurons ? r.num_neurons : r.filters, this.l1_decay_mul = void 0 !== r.l1_decay_mul ? r.l1_decay_mul : 0, this.l2_decay_mul = void 0 !== r.l2_decay_mul ? r.l2_decay_mul : 1, this.num_inputs = r.in_sx * r.in_sy * r.in_depth, this.out_sx = 1, this.out_sy = 1, this.layer_type = "fc";
      var n = void 0 !== r.bias_pref ? r.bias_pref : 0;
      this.filters = [];
      for (var i = 0; i < this.out_depth; i++) this.filters.push(new t(1, 1, this.num_inputs));
      this.biases = new t(1, 1, this.out_depth, n);
    };
    n.prototype = {
      forward: function e(r, n) {
        this.in_act = r;
        for (var i = new t(1, 1, this.out_depth, 0), o = r.w, s = 0; s < this.out_depth; s++) {
          for (var a = 0, l = this.filters[s].w, c = 0; c < this.num_inputs; c++) a += o[c] * l[c];
          a += this.biases.w[s], i.w[s] = a;
        }
        return this.out_act = i, this.out_act;
      },
      backward: function t() {
        var r = this.in_act;
        r.dw = e.zeros(r.w.length);
        for (var n = 0; n < this.out_depth; n++) {
          for (var i = this.filters[n], o = this.out_act.dw[n], s = 0; s < this.num_inputs; s++) r.dw[s] += i.w[s] * o, i.dw[s] += r.w[s] * o;
          this.biases.dw[n] += o;
        }
      },
      getParamsAndGrads: function e() {
        for (var t = [], r = 0; r < this.out_depth; r++) t.push({
          params: this.filters[r].w,
          grads: this.filters[r].dw,
          l1_decay_mul: this.l1_decay_mul,
          l2_decay_mul: this.l2_decay_mul
        });
        return t.push({
          params: this.biases.w,
          grads: this.biases.dw,
          l1_decay_mul: 0,
          l2_decay_mul: 0
        }), t;
      },
      toJSON: function e() {
        var t = {};
        t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.num_inputs = this.num_inputs, t.l1_decay_mul = this.l1_decay_mul, t.l2_decay_mul = this.l2_decay_mul, t.filters = [];
        for (var r = 0; r < this.filters.length; r++) t.filters.push(this.filters[r].toJSON());
        return t.biases = this.biases.toJSON(), t;
      },
      fromJSON: function e(r) {
        this.out_depth = r.out_depth, this.out_sx = r.out_sx, this.out_sy = r.out_sy, this.layer_type = r.layer_type, this.num_inputs = r.num_inputs, this.l1_decay_mul = void 0 !== r.l1_decay_mul ? r.l1_decay_mul : 1, this.l2_decay_mul = void 0 !== r.l2_decay_mul ? r.l2_decay_mul : 1, this.filters = [];
        for (var n = 0; n < r.filters.length; n++) {
          var i = new t(0, 0, 0, 0);
          i.fromJSON(r.filters[n]), this.filters.push(i);
        }
        this.biases = new t(0, 0, 0, 0), this.biases.fromJSON(r.biases);
      }
    }, e.ConvLayer = r, e.FullyConnLayer = n;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function t(r) {
        var r = r || {};
        this.sx = r.sx, this.in_depth = r.in_depth, this.in_sx = r.in_sx, this.in_sy = r.in_sy, this.sy = void 0 !== r.sy ? r.sy : this.sx, this.stride = void 0 !== r.stride ? r.stride : 2, this.pad = void 0 !== r.pad ? r.pad : 0, this.out_depth = this.in_depth, this.out_sx = Math.floor((this.in_sx + 2 * this.pad - this.sx) / this.stride + 1), this.out_sy = Math.floor((this.in_sy + 2 * this.pad - this.sy) / this.stride + 1), this.layer_type = "pool", this.switchx = e.zeros(this.out_sx * this.out_sy * this.out_depth), this.switchy = e.zeros(this.out_sx * this.out_sy * this.out_depth);
      };
    r.prototype = {
      forward: function e(r, n) {
        this.in_act = r;
        for (var i = new t(this.out_sx, this.out_sy, this.out_depth, 0), o = 0, s = 0; s < this.out_depth; s++) for (var a = -this.pad, l = -this.pad, c = 0; c < this.out_sx; a += this.stride, c++) {
          l = -this.pad;
          for (var d = 0; d < this.out_sy; l += this.stride, d++) {
            for (var h = -99999, p = -1, u = -1, g = 0; g < this.sx; g++) for (var m = 0; m < this.sy; m++) {
              var f = l + m,
                y = a + g;
              if (f >= 0 && f < r.sy && y >= 0 && y < r.sx) {
                var v = r.get(y, f, s);
                v > h && (h = v, p = y, u = f);
              }
            }
            this.switchx[o] = p, this.switchy[o] = u, o++, i.set(c, d, s, h);
          }
        }
        return this.out_act = i, this.out_act;
      },
      backward: function t() {
        var r = this.in_act;
        r.dw = e.zeros(r.w.length);
        for (var n = this.out_act, i = 0, o = 0; o < this.out_depth; o++) for (var s = -this.pad, a = -this.pad, l = 0; l < this.out_sx; s += this.stride, l++) {
          a = -this.pad;
          for (var c = 0; c < this.out_sy; a += this.stride, c++) {
            var d = this.out_act.get_grad(l, c, o);
            r.add_grad(this.switchx[i], this.switchy[i], o, d), i++;
          }
        }
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.sx = this.sx, t.sy = this.sy, t.stride = this.stride, t.in_depth = this.in_depth, t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.pad = this.pad, t;
      },
      fromJSON: function t(r) {
        this.out_depth = r.out_depth, this.out_sx = r.out_sx, this.out_sy = r.out_sy, this.layer_type = r.layer_type, this.sx = r.sx, this.sy = r.sy, this.stride = r.stride, this.in_depth = r.in_depth, this.pad = void 0 !== r.pad ? r.pad : 0, this.switchx = e.zeros(this.out_sx * this.out_sy * this.out_depth), this.switchy = e.zeros(this.out_sx * this.out_sy * this.out_depth);
      }
    }, e.PoolLayer = r;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = e.getopt,
      n = function e(t) {
        var t = t || {};
        this.out_depth = r(t, ["out_depth", "depth"], 0), this.out_sx = r(t, ["out_sx", "sx", "width"], 1), this.out_sy = r(t, ["out_sy", "sy", "height"], 1), this.layer_type = "input";
      };
    n.prototype = {
      forward: function e(t, r) {
        return this.in_act = t, this.out_act = t, this.out_act;
      },
      backward: function e() {},
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type;
      }
    }, e.InputLayer = n;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function e(t) {
        var t = t || {};
        this.num_inputs = t.in_sx * t.in_sy * t.in_depth, this.out_depth = this.num_inputs, this.out_sx = 1, this.out_sy = 1, this.layer_type = "softmax";
      };
    r.prototype = {
      forward: function r(n, i) {
        this.in_act = n;
        for (var o = new t(1, 1, this.out_depth, 0), s = n.w, a = n.w[0], l = 1; l < this.out_depth; l++) s[l] > a && (a = s[l]);
        for (var c = e.zeros(this.out_depth), d = 0, l = 0; l < this.out_depth; l++) {
          var h = Math.exp(s[l] - a);
          d += h, c[l] = h;
        }
        for (var l = 0; l < this.out_depth; l++) c[l] /= d, o.w[l] = c[l];
        return this.es = c, this.out_act = o, this.out_act;
      },
      backward: function t(r) {
        var n = this.in_act;
        n.dw = e.zeros(n.w.length);
        for (var i = 0; i < this.out_depth; i++) {
          var o,
            s = -((i === r ? 1 : 0) - this.es[i]);
          n.dw[i] = s;
        }
        return -Math.log(this.es[r]);
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.num_inputs = this.num_inputs, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type, this.num_inputs = t.num_inputs;
      }
    };
    var n = function e(t) {
      var t = t || {};
      this.num_inputs = t.in_sx * t.in_sy * t.in_depth, this.out_depth = this.num_inputs, this.out_sx = 1, this.out_sy = 1, this.layer_type = "regression";
    };
    n.prototype = {
      forward: function e(t, r) {
        return this.in_act = t, this.out_act = t, t;
      },
      backward: function t(r) {
        var n = this.in_act;
        n.dw = e.zeros(n.w.length);
        var i = 0;
        if (r instanceof Array || r instanceof Float64Array) for (var o = 0; o < this.out_depth; o++) {
          var s = n.w[o] - r[o];
          n.dw[o] = s, i += .5 * s * s;
        } else if ("number" == typeof r) {
          var s = n.w[0] - r;
          n.dw[0] = s, i += .5 * s * s;
        } else {
          var o = r.dim,
            a = r.val,
            s = n.w[o] - a;
          n.dw[o] = s, i += .5 * s * s;
        }
        return i;
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.num_inputs = this.num_inputs, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type, this.num_inputs = t.num_inputs;
      }
    };
    var i = function e(t) {
      var t = t || {};
      this.num_inputs = t.in_sx * t.in_sy * t.in_depth, this.out_depth = this.num_inputs, this.out_sx = 1, this.out_sy = 1, this.layer_type = "svm";
    };
    i.prototype = {
      forward: function e(t, r) {
        return this.in_act = t, this.out_act = t, t;
      },
      backward: function t(r) {
        var n = this.in_act;
        n.dw = e.zeros(n.w.length);
        for (var i = n.w[r], o = 1, s = 0, a = 0; a < this.out_depth; a++) if (r !== a) {
          var l = -i + n.w[a] + 1;
          l > 0 && (n.dw[a] += 1, n.dw[r] -= 1, s += l);
        }
        return s;
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.num_inputs = this.num_inputs, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type, this.num_inputs = t.num_inputs;
      }
    }, e.RegressionLayer = n, e.SoftmaxLayer = r, e.SVMLayer = i;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function e(t) {
        var t = t || {};
        this.out_sx = t.in_sx, this.out_sy = t.in_sy, this.out_depth = t.in_depth, this.layer_type = "relu";
      };
    r.prototype = {
      forward: function e(t, r) {
        this.in_act = t;
        for (var n = t.clone(), i = t.w.length, o = n.w, s = 0; s < i; s++) o[s] < 0 && (o[s] = 0);
        return this.out_act = n, this.out_act;
      },
      backward: function t() {
        var r = this.in_act,
          n = this.out_act,
          i = r.w.length;
        r.dw = e.zeros(i);
        for (var o = 0; o < i; o++) n.w[o] <= 0 ? r.dw[o] = 0 : r.dw[o] = n.dw[o];
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type;
      }
    };
    var n = function e(t) {
      var t = t || {};
      this.out_sx = t.in_sx, this.out_sy = t.in_sy, this.out_depth = t.in_depth, this.layer_type = "sigmoid";
    };
    n.prototype = {
      forward: function e(t, r) {
        this.in_act = t;
        for (var n = t.cloneAndZero(), i = t.w.length, o = n.w, s = t.w, a = 0; a < i; a++) o[a] = 1 / (1 + Math.exp(-s[a]));
        return this.out_act = n, this.out_act;
      },
      backward: function t() {
        var r = this.in_act,
          n = this.out_act,
          i = r.w.length;
        r.dw = e.zeros(i);
        for (var o = 0; o < i; o++) {
          var s = n.w[o];
          r.dw[o] = s * (1 - s) * n.dw[o];
        }
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type;
      }
    };
    var i = function t(r) {
      var r = r || {};
      this.group_size = void 0 !== r.group_size ? r.group_size : 2, this.out_sx = r.in_sx, this.out_sy = r.in_sy, this.out_depth = Math.floor(r.in_depth / this.group_size), this.layer_type = "maxout", this.switches = e.zeros(this.out_sx * this.out_sy * this.out_depth);
    };
    function o(e) {
      var t = Math.exp(2 * e);
      return (t - 1) / (t + 1);
    }
    i.prototype = {
      forward: function e(r, n) {
        this.in_act = r;
        var i = this.out_depth,
          o = new t(this.out_sx, this.out_sy, this.out_depth, 0);
        if (1 === this.out_sx && 1 === this.out_sy) for (var s = 0; s < i; s++) {
          for (var a = s * this.group_size, l = r.w[a], c = 0, d = 1; d < this.group_size; d++) {
            var h;
            (h = r.w[a + d]) > l && (l = h, c = d);
          }
          o.w[s] = l, this.switches[s] = a + c;
        } else for (var p = 0, u = 0; u < r.sx; u++) for (var g = 0; g < r.sy; g++) for (var s = 0; s < i; s++) {
          for (var a = s * this.group_size, l = r.get(u, g, a), c = 0, d = 1; d < this.group_size; d++) {
            var h;
            (h = r.get(u, g, a + d)) > l && (l = h, c = d);
          }
          o.set(u, g, s, l), this.switches[p] = a + c, p++;
        }
        return this.out_act = o, this.out_act;
      },
      backward: function t() {
        var r = this.in_act,
          n = this.out_act,
          i = this.out_depth;
        if (r.dw = e.zeros(r.w.length), 1 === this.out_sx && 1 === this.out_sy) for (var o = 0; o < i; o++) {
          var s = n.dw[o];
          r.dw[this.switches[o]] = s;
        } else for (var a = 0, l = 0; l < n.sx; l++) for (var c = 0; c < n.sy; c++) for (var o = 0; o < i; o++) {
          var s = n.get_grad(l, c, o);
          r.set_grad(l, c, this.switches[a], s), a++;
        }
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.group_size = this.group_size, t;
      },
      fromJSON: function t(r) {
        this.out_depth = r.out_depth, this.out_sx = r.out_sx, this.out_sy = r.out_sy, this.layer_type = r.layer_type, this.group_size = r.group_size, this.switches = e.zeros(this.group_size);
      }
    };
    var s = function e(t) {
      var t = t || {};
      this.out_sx = t.in_sx, this.out_sy = t.in_sy, this.out_depth = t.in_depth, this.layer_type = "tanh";
    };
    s.prototype = {
      forward: function e(t, r) {
        this.in_act = t;
        for (var n = t.cloneAndZero(), i = t.w.length, s = 0; s < i; s++) n.w[s] = o(t.w[s]);
        return this.out_act = n, this.out_act;
      },
      backward: function t() {
        var r = this.in_act,
          n = this.out_act,
          i = r.w.length;
        r.dw = e.zeros(i);
        for (var o = 0; o < i; o++) {
          var s = n.w[o];
          r.dw[o] = (1 - s * s) * n.dw[o];
        }
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type;
      }
    }, e.TanhLayer = s, e.MaxoutLayer = i, e.ReluLayer = r, e.SigmoidLayer = n;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function t(r) {
        var r = r || {};
        this.out_sx = r.in_sx, this.out_sy = r.in_sy, this.out_depth = r.in_depth, this.layer_type = "dropout", this.drop_prob = void 0 !== r.drop_prob ? r.drop_prob : .5, this.dropped = e.zeros(this.out_sx * this.out_sy * this.out_depth);
      };
    r.prototype = {
      forward: function e(t, r) {
        this.in_act = t, void 0 === r && (r = !1);
        var n = t.clone(),
          i = t.w.length;
        if (r) for (var o = 0; o < i; o++) generator.nextId() < this.drop_prob ? (n.w[o] = 0, this.dropped[o] = !0) : this.dropped[o] = !1;else for (var o = 0; o < i; o++) n.w[o] *= this.drop_prob;
        return this.out_act = n, this.out_act;
      },
      backward: function t() {
        var r = this.in_act,
          n = this.out_act,
          i = r.w.length;
        r.dw = e.zeros(i);
        for (var o = 0; o < i; o++) this.dropped[o] || (r.dw[o] = n.dw[o]);
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.out_depth = this.out_depth, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.layer_type = this.layer_type, t.drop_prob = this.drop_prob, t;
      },
      fromJSON: function e(t) {
        this.out_depth = t.out_depth, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.layer_type = t.layer_type, this.drop_prob = t.drop_prob;
      }
    }, e.DropoutLayer = r;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function e(t) {
        var t = t || {};
        this.k = t.k, this.n = t.n, this.alpha = t.alpha, this.beta = t.beta, this.out_sx = t.in_sx, this.out_sy = t.in_sy, this.out_depth = t.in_depth, this.layer_type = "lrn", this.n % 2 == 0 && console.log("WARNING n should be odd for LRN layer");
      };
    r.prototype = {
      forward: function e(t, r) {
        this.in_act = t;
        var n = t.cloneAndZero();
        this.S_cache_ = t.cloneAndZero();
        for (var i = Math.floor(this.n / 2), o = 0; o < t.sx; o++) for (var s = 0; s < t.sy; s++) for (var a = 0; a < t.depth; a++) {
          for (var l = t.get(o, s, a), c = 0, d = Math.max(0, a - i); d <= Math.min(a + i, t.depth - 1); d++) {
            var h = t.get(o, s, d);
            c += h * h;
          }
          c *= this.alpha / this.n, c += this.k, this.S_cache_.set(o, s, a, c), c = Math.pow(c, this.beta), n.set(o, s, a, l / c);
        }
        return this.out_act = n, this.out_act;
      },
      backward: function t() {
        var r = this.in_act;
        r.dw = e.zeros(r.w.length);
        for (var n = this.out_act, i = Math.floor(this.n / 2), o = 0; o < r.sx; o++) for (var s = 0; s < r.sy; s++) for (var a = 0; a < r.depth; a++) for (var l = this.out_act.get_grad(o, s, a), c = this.S_cache_.get(o, s, a), d = Math.pow(c, this.beta), h = d * d, p = Math.max(0, a - i); p <= Math.min(a + i, r.depth - 1); p++) {
          var u = r.get(o, s, p),
            g = -u * this.beta * Math.pow(c, this.beta - 1) * this.alpha / this.n * 2 * u;
          p === a && (g += d), g /= h, g *= l, r.add_grad(o, s, p, g);
        }
      },
      getParamsAndGrads: function e() {
        return [];
      },
      toJSON: function e() {
        var t = {};
        return t.k = this.k, t.n = this.n, t.alpha = this.alpha, t.beta = this.beta, t.out_sx = this.out_sx, t.out_sy = this.out_sy, t.out_depth = this.out_depth, t.layer_type = this.layer_type, t;
      },
      fromJSON: function e(t) {
        this.k = t.k, this.n = t.n, this.alpha = t.alpha, this.beta = t.beta, this.out_sx = t.out_sx, this.out_sy = t.out_sy, this.out_depth = t.out_depth, this.layer_type = t.layer_type;
      }
    }, e.LocalResponseNormalizationLayer = r;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = e.assert,
      n = function e(t) {
        this.layers = [];
      };
    n.prototype = {
      makeLayers: function t(n) {
        r(n.length >= 2, "Error! At least one input layer and one loss layer are required."), r("input" === n[0].type, "Error! First layer must be the input layer, to declare size of inputs");
        var i = function e() {
          for (var t = [], r = 0; r < n.length; r++) {
            var i = n[r];
            if ("softmax" !== i.type && "svm" !== i.type || t.push({
              type: "fc",
              num_neurons: i.num_classes
            }), "regression" === i.type && t.push({
              type: "fc",
              num_neurons: i.num_neurons
            }), "fc" !== i.type && "conv" !== i.type || void 0 !== i.bias_pref || (i.bias_pref = 0, void 0 !== i.activation && "relu" === i.activation && (i.bias_pref = .1)), t.push(i), void 0 !== i.activation) if ("relu" === i.activation) t.push({
              type: "relu"
            });else if ("sigmoid" === i.activation) t.push({
              type: "sigmoid"
            });else if ("tanh" === i.activation) t.push({
              type: "tanh"
            });else if ("maxout" === i.activation) {
              var o = "undefined" !== i.group_size ? i.group_size : 2;
              t.push({
                type: "maxout",
                group_size: o
              });
            } else console.log("ERROR unsupported activation " + i.activation);
            void 0 !== i.drop_prob && "dropout" !== i.type && t.push({
              type: "dropout",
              drop_prob: i.drop_prob
            });
          }
          return t;
        };
        n = i(n), this.layers = [];
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          if (o > 0) {
            var a = this.layers[o - 1];
            s.in_sx = a.out_sx, s.in_sy = a.out_sy, s.in_depth = a.out_depth;
          }
          switch (s.type) {
            case "fc":
              this.layers.push(new e.FullyConnLayer(s));
              break;
            case "lrn":
              this.layers.push(new e.LocalResponseNormalizationLayer(s));
              break;
            case "dropout":
              this.layers.push(new e.DropoutLayer(s));
              break;
            case "input":
              this.layers.push(new e.InputLayer(s));
              break;
            case "softmax":
              this.layers.push(new e.SoftmaxLayer(s));
              break;
            case "regression":
              this.layers.push(new e.RegressionLayer(s));
              break;
            case "conv":
              this.layers.push(new e.ConvLayer(s));
              break;
            case "pool":
              this.layers.push(new e.PoolLayer(s));
              break;
            case "relu":
              this.layers.push(new e.ReluLayer(s));
              break;
            case "sigmoid":
              this.layers.push(new e.SigmoidLayer(s));
              break;
            case "tanh":
              this.layers.push(new e.TanhLayer(s));
              break;
            case "maxout":
              this.layers.push(new e.MaxoutLayer(s));
              break;
            case "svm":
              this.layers.push(new e.SVMLayer(s));
              break;
            default:
              console.log("ERROR: UNRECOGNIZED LAYER TYPE: " + s.type);
          }
        }
      },
      forward: function e(t, r) {
        void 0 === r && (r = !1);
        for (var n = this.layers[0].forward(t, r), i = 1; i < this.layers.length; i++) n = this.layers[i].forward(n, r);
        return n;
      },
      getCostLoss: function e(t, r) {
        this.forward(t, !1);
        var n = this.layers.length,
          i;
        return this.layers[n - 1].backward(r);
      },
      backward: function e(t) {
        for (var r = this.layers.length, n = this.layers[r - 1].backward(t), i = r - 2; i >= 0; i--) this.layers[i].backward();
        return n;
      },
      getParamsAndGrads: function e() {
        for (var t = [], r = 0; r < this.layers.length; r++) for (var n = this.layers[r].getParamsAndGrads(), i = 0; i < n.length; i++) t.push(n[i]);
        return t;
      },
      getPrediction: function e() {
        var t = this.layers[this.layers.length - 1];
        r("softmax" === t.layer_type, "getPrediction function assumes softmax as last layer of the net!");
        for (var n = t.out_act.w, i = n[0], o = 0, s = 1; s < n.length; s++) n[s] > i && (i = n[s], o = s);
        return o;
      },
      toJSON: function e() {
        for (var t = {
            layers: []
          }, r = 0; r < this.layers.length; r++) t.layers.push(this.layers[r].toJSON());
        return t;
      },
      fromJSON: function t(r) {
        this.layers = [];
        for (var n = 0; n < r.layers.length; n++) {
          var i = r.layers[n],
            o = i.layer_type,
            s;
          "input" === o && (s = new e.InputLayer()), "relu" === o && (s = new e.ReluLayer()), "sigmoid" === o && (s = new e.SigmoidLayer()), "tanh" === o && (s = new e.TanhLayer()), "dropout" === o && (s = new e.DropoutLayer()), "conv" === o && (s = new e.ConvLayer()), "pool" === o && (s = new e.PoolLayer()), "lrn" === o && (s = new e.LocalResponseNormalizationLayer()), "softmax" === o && (s = new e.SoftmaxLayer()), "regression" === o && (s = new e.RegressionLayer()), "fc" === o && (s = new e.FullyConnLayer()), "maxout" === o && (s = new e.MaxoutLayer()), "svm" === o && (s = new e.SVMLayer()), s.fromJSON(i), this.layers.push(s);
        }
      }
    }, e.Net = n;
  }(t), function (e) {
    "use strict";

    var t = e.Vol,
      r = function e(t, r) {
        this.net = t;
        var r = r || {};
        this.learning_rate = void 0 !== r.learning_rate ? r.learning_rate : .01, this.l1_decay = void 0 !== r.l1_decay ? r.l1_decay : 0, this.l2_decay = void 0 !== r.l2_decay ? r.l2_decay : 0, this.batch_size = void 0 !== r.batch_size ? r.batch_size : 1, this.method = void 0 !== r.method ? r.method : "sgd", this.momentum = void 0 !== r.momentum ? r.momentum : .9, this.ro = void 0 !== r.ro ? r.ro : .95, this.eps = void 0 !== r.eps ? r.eps : 1e-6, this.k = 0, this.gsum = [], this.xsum = [];
      };
    r.prototype = {
      train: function t(r, n) {
        this.net.forward(r, !0);
        var i = this.net.backward(n),
          o = 0,
          s = 0;
        if (this.k++, this.k % this.batch_size === 0) {
          var a = this.net.getParamsAndGrads();
          if (0 === this.gsum.length && ("sgd" !== this.method || this.momentum > 0)) for (var l = 0; l < a.length; l++) this.gsum.push(e.zeros(a[l].params.length)), "adadelta" === this.method ? this.xsum.push(e.zeros(a[l].params.length)) : this.xsum.push([]);
          for (var l = 0; l < a.length; l++) for (var c = a[l], d = c.params, h = c.grads, p = 1 * this.l2_decay, u = 0 * this.l1_decay, g = d.length, m = 0; m < g; m++) {
            o += p * d[m] * d[m] / 2, s += u * Math.abs(d[m]);
            var f = u * (d[m] > 0 ? 1 : -1),
              y,
              v = (p * d[m] + f + h[m]) / this.batch_size,
              b = this.gsum[l],
              x = this.xsum[l],
              C = this.momentum * b[m] - this.learning_rate * v;
            b[m] = C, d[m] += C, h[m] = 0;
          }
        }
        return i + s + o;
      }
    }, e.Trainer = r, e.SGDTrainer = r;
  }(t), function (e) {
    "use strict";

    var t = e.randf,
      r = e.randi,
      n = e.Net,
      i = e.Trainer,
      o = e.maxmin,
      s = e.randperm,
      a = e.weightedSample,
      l = e.getopt,
      c = e.arrUnique,
      d = function e(t, r, n) {
        var n = n || {};
        void 0 === t && (t = []), void 0 === r && (r = []), this.data = t, this.labels = r, this.train_ratio = l(n, "train_ratio", .7), this.num_folds = l(n, "num_folds", 10), this.num_candidates = l(n, "num_candidates", 50), this.num_epochs = l(n, "num_epochs", 50), this.ensemble_size = l(n, "ensemble_size", 10), this.batch_size_min = l(n, "batch_size_min", 10), this.batch_size_max = l(n, "batch_size_max", 300), this.l2_decay_min = l(n, "l2_decay_min", -4), this.l2_decay_max = l(n, "l2_decay_max", 2), this.learning_rate_min = l(n, "learning_rate_min", -4), this.learning_rate_max = l(n, "learning_rate_max", 0), this.momentum_min = l(n, "momentum_min", .9), this.momentum_max = l(n, "momentum_max", .9), this.neurons_min = l(n, "neurons_min", 5), this.neurons_max = l(n, "neurons_max", 30), this.folds = [], this.candidates = [], this.evaluated_candidates = [], this.unique_labels = c(r), this.iter = 0, this.foldix = 0, this.finish_fold_callback = null, this.finish_batch_callback = null, this.data.length > 0 && (this.sampleFolds(), this.sampleCandidates());
      };
    d.prototype = {
      sampleFolds: function e() {
        var t = this.data.length,
          r = Math.floor(this.train_ratio * t);
        this.folds = [];
        for (var n = 0; n < this.num_folds; n++) {
          var i = s(t);
          this.folds.push({
            train_ix: i.slice(0, r),
            test_ix: i.slice(r, t)
          });
        }
      },
      sampleCandidate: function e() {
        var o = this.data[0].w.length,
          s = this.unique_labels.length,
          l = [];
        l.push({
          type: "input",
          out_sx: 1,
          out_sy: 1,
          out_depth: o
        });
        for (var c = a([0, 1, 2, 3], [.2, .3, .3, .2]), d = 0; d < c; d++) {
          var h = r(this.neurons_min, this.neurons_max),
            p = ["tanh", "maxout", "relu"][r(0, 3)];
          if (t(0, 1) < .5) {
            var u = generator.nextId();
            l.push({
              type: "fc",
              num_neurons: h,
              activation: p,
              drop_prob: u
            });
          } else l.push({
            type: "fc",
            num_neurons: h,
            activation: p
          });
        }
        l.push({
          type: "softmax",
          num_classes: s
        });
        var g = new n();
        g.makeLayers(l);
        var m = r(this.batch_size_min, this.batch_size_max),
          f = Math.pow(10, t(this.l2_decay_min, this.l2_decay_max)),
          y = Math.pow(10, t(this.learning_rate_min, this.learning_rate_max)),
          v = t(this.momentum_min, this.momentum_max),
          b = t(0, 1),
          x,
          C = new i(g, x = b < .33 ? {
            method: "adadelta",
            batch_size: m,
            l2_decay: f
          } : b < .66 ? {
            method: "adagrad",
            learning_rate: y,
            batch_size: m,
            l2_decay: f
          } : {
            method: "sgd",
            learning_rate: y,
            momentum: v,
            batch_size: m,
            l2_decay: f
          }),
          S = {
            acc: [],
            accv: 0
          };
        return S.layer_defs = l, S.trainer_def = x, S.net = g, S.trainer = C, S;
      },
      sampleCandidates: function e() {
        this.candidates = [];
        for (var t = 0; t < this.num_candidates; t++) {
          var r = this.sampleCandidate();
          this.candidates.push(r);
        }
      },
      step: function e() {
        this.iter++;
        for (var t = this.folds[this.foldix], o = t.train_ix[r(0, t.train_ix.length)], s = 0; s < this.candidates.length; s++) {
          var a = this.data[o],
            l = this.labels[o];
          this.candidates[s].trainer.train(a, l);
        }
        var c = this.num_epochs * t.train_ix.length;
        if (this.iter >= c) {
          for (var d = this.evalValErrors(), s = 0; s < this.candidates.length; s++) {
            var h;
            (h = this.candidates[s]).acc.push(d[s]), h.accv += d[s];
          }
          if (this.iter = 0, this.foldix++, null !== this.finish_fold_callback && this.finish_fold_callback(), this.foldix >= this.folds.length) {
            for (var s = 0; s < this.candidates.length; s++) this.evaluated_candidates.push(this.candidates[s]);
            this.evaluated_candidates.sort(function (e, t) {
              return e.accv / e.acc.length > t.accv / t.acc.length ? -1 : 1;
            }), this.evaluated_candidates.length > 3 * this.ensemble_size && (this.evaluated_candidates = this.evaluated_candidates.slice(0, 3 * this.ensemble_size)), null !== this.finish_batch_callback && this.finish_batch_callback(), this.sampleCandidates(), this.foldix = 0;
          } else for (var s = 0; s < this.candidates.length; s++) {
            var h = this.candidates[s],
              p = new n();
            p.makeLayers(h.layer_defs);
            var u = new i(p, h.trainer_def);
            h.net = p, h.trainer = u;
          }
        }
      },
      evalValErrors: function e() {
        for (var t = [], r = this.folds[this.foldix], n = 0; n < this.candidates.length; n++) {
          for (var i = this.candidates[n].net, o = 0, s = 0; s < r.test_ix.length; s++) {
            var a = this.data[r.test_ix[s]],
              l = this.labels[r.test_ix[s]],
              c;
            i.forward(a), o += i.getPrediction() === l ? 1 : 0;
          }
          o /= r.test_ix.length, t.push(o);
        }
        return t;
      },
      predict_soft: function e(t) {
        var r = [],
          n = 0,
          i,
          o;
        0 === this.evaluated_candidates.length ? (n = this.candidates.length, r = this.candidates) : (n = Math.min(this.ensemble_size, this.evaluated_candidates.length), r = this.evaluated_candidates);
        for (var s = 0; s < n; s++) {
          var a,
            l = r[s].net.forward(t);
          if (0 === s) i = l, o = l.w.length;else for (var c = 0; c < o; c++) i.w[c] += l.w[c];
        }
        for (var c = 0; c < o; c++) i.w[c] /= n;
        return i;
      },
      predict: function e(t) {
        var r = this.predict_soft(t);
        if (0 !== r.w.length) var n,
          i = o(r.w).maxi;else var i = -1;
        return i;
      },
      toJSON: function e() {
        for (var t = Math.min(this.ensemble_size, this.evaluated_candidates.length), r = {
            nets: []
          }, n = 0; n < t; n++) r.nets.push(this.evaluated_candidates[n].net.toJSON());
        return r;
      },
      fromJSON: function e(t) {
        this.ensemble_size = t.nets.length, this.evaluated_candidates = [];
        for (var r = 0; r < this.ensemble_size; r++) {
          var i = new n();
          i.fromJSON(t.nets[r]);
          var o = {};
          o.net = i, this.evaluated_candidates.push(o);
        }
      },
      onFinishFold: function e(t) {
        this.finish_fold_callback = t;
      },
      onFinishBatch: function e(t) {
        this.finish_batch_callback = t;
      }
    }, e.MagicNet = d;
  }(t), function (t) {
    "use strict";

    void 0 === e.exports ? window.jsfeat = t : e.exports = t;
  }(t);
};
