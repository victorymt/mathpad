/* module 32992 — 8198 chars */
module.exports = function (e, t, r) {
  var n,
    i = function () {
      var e = String.fromCharCode,
        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        n = {};
      function i(e, t) {
        if (!n[e]) {
          n[e] = {};
          for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r;
        }
        return n[e][t];
      }
      var o = {
        compressToBase64: function (e) {
          if (null == e) return "";
          var r = o._compress(e, 6, function (e) {
            return t.charAt(e);
          });
          switch (r.length % 4) {
            default:
            case 0:
              return r;
            case 1:
              return r + "===";
            case 2:
              return r + "==";
            case 3:
              return r + "=";
          }
        },
        decompressFromBase64: function (e) {
          return null == e ? "" : "" == e ? null : o._decompress(e.length, 32, function (r) {
            return i(t, e.charAt(r));
          });
        },
        compressToUTF16: function (t) {
          return null == t ? "" : o._compress(t, 15, function (t) {
            return e(t + 32);
          }) + " ";
        },
        decompressFromUTF16: function (e) {
          return null == e ? "" : "" == e ? null : o._decompress(e.length, 16384, function (t) {
            return e.charCodeAt(t) - 32;
          });
        },
        compressToUint8Array: function (e) {
          for (var t = o.compress(e), r = new Uint8Array(2 * t.length), n = 0, i = t.length; n < i; n++) {
            var s = t.charCodeAt(n);
            r[2 * n] = s >>> 8, r[2 * n + 1] = s % 256;
          }
          return r;
        },
        decompressFromUint8Array: function (t) {
          if (null == t) return o.decompress(t);
          for (var r = new Array(t.length / 2), n = 0, i = r.length; n < i; n++) r[n] = 256 * t[2 * n] + t[2 * n + 1];
          var s = [];
          return r.forEach(function (t) {
            s.push(e(t));
          }), o.decompress(s.join(""));
        },
        compressToEncodedURIComponent: function (e) {
          return null == e ? "" : o._compress(e, 6, function (e) {
            return r.charAt(e);
          });
        },
        decompressFromEncodedURIComponent: function (e) {
          return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), o._decompress(e.length, 32, function (t) {
            return i(r, e.charAt(t));
          }));
        },
        compress: function (t) {
          return o._compress(t, 16, function (t) {
            return e(t);
          });
        },
        _compress: function (e, t, r) {
          if (null == e) return "";
          var n,
            i,
            o = {},
            s = {},
            a = "",
            l = "",
            c = "",
            d = 2,
            h = 3,
            p = 2,
            u = [],
            g = 0,
            m = 0,
            f;
          for (f = 0; f < e.length; f += 1) if (a = e.charAt(f), Object.prototype.hasOwnProperty.call(o, a) || (o[a] = h++, s[a] = !0), l = c + a, Object.prototype.hasOwnProperty.call(o, l)) c = l;else {
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              if (c.charCodeAt(0) < 256) {
                for (n = 0; n < p; n++) g <<= 1, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++;
                for (i = c.charCodeAt(0), n = 0; n < 8; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
              } else {
                for (i = 1, n = 0; n < p; n++) g = g << 1 | i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i = 0;
                for (i = c.charCodeAt(0), n = 0; n < 16; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
              }
              0 == --d && (d = Math.pow(2, p), p++), delete s[c];
            } else for (i = o[c], n = 0; n < p; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
            0 == --d && (d = Math.pow(2, p), p++), o[l] = h++, c = String(a);
          }
          if ("" !== c) {
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              if (c.charCodeAt(0) < 256) {
                for (n = 0; n < p; n++) g <<= 1, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++;
                for (i = c.charCodeAt(0), n = 0; n < 8; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
              } else {
                for (i = 1, n = 0; n < p; n++) g = g << 1 | i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i = 0;
                for (i = c.charCodeAt(0), n = 0; n < 16; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
              }
              0 == --d && (d = Math.pow(2, p), p++), delete s[c];
            } else for (i = o[c], n = 0; n < p; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
            0 == --d && (d = Math.pow(2, p), p++);
          }
          for (i = 2, n = 0; n < p; n++) g = g << 1 | 1 & i, m == t - 1 ? (m = 0, u.push(r(g)), g = 0) : m++, i >>= 1;
          for (;;) {
            if (g <<= 1, m == t - 1) {
              u.push(r(g));
              break;
            }
            m++;
          }
          return u.join("");
        },
        decompress: function (e) {
          return null == e ? "" : "" == e ? null : o._decompress(e.length, 32768, function (t) {
            return e.charCodeAt(t);
          });
        },
        _decompress: function (t, r, n) {
          var i = [],
            o,
            s = 4,
            a = 4,
            l = 3,
            c = "",
            d = [],
            h,
            p,
            u,
            g,
            m,
            f,
            y,
            v = {
              val: n(0),
              position: r,
              index: 1
            };
          for (h = 0; h < 3; h += 1) i[h] = h;
          for (u = 0, m = Math.pow(2, 2), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
          switch (o = u) {
            case 0:
              for (u = 0, m = Math.pow(2, 8), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
              y = e(u);
              break;
            case 1:
              for (u = 0, m = Math.pow(2, 16), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
              y = e(u);
              break;
            case 2:
              return "";
          }
          for (i[3] = y, p = y, d.push(y);;) {
            if (v.index > t) return "";
            for (u = 0, m = Math.pow(2, l), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
            switch (y = u) {
              case 0:
                for (u = 0, m = Math.pow(2, 8), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
                i[a++] = e(u), y = a - 1, s--;
                break;
              case 1:
                for (u = 0, m = Math.pow(2, 16), f = 1; f != m;) g = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = r, v.val = n(v.index++)), u |= (g > 0 ? 1 : 0) * f, f <<= 1;
                i[a++] = e(u), y = a - 1, s--;
                break;
              case 2:
                return d.join("");
            }
            if (0 == s && (s = Math.pow(2, l), l++), i[y]) c = i[y];else {
              if (y !== a) return null;
              c = p + p.charAt(0);
            }
            d.push(c), i[a++] = p + c.charAt(0), p = c, 0 == --s && (s = Math.pow(2, l), l++);
          }
        }
      };
      return o;
    }();
  void 0 === (n = function () {
    return i;
  }.call(t, r, t, e)) || (e.exports = n);
};
