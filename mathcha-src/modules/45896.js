/* module 45896 — 138918 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => X,
    R: () => Q
  });
  var n = r(64467),
    i = r(10467),
    o = r(92207),
    s = r.n(o),
    a = r(40927),
    l = r.n(a),
    c = r(97422),
    d = r(19340),
    h = r(71311),
    p = r(91636),
    u = r(516),
    g = r(37566),
    m = r(2543),
    f = r.n(m),
    y = {
      U: {},
      parse: function (e) {
        var t = y._bin,
          r = new Uint8Array(e),
          n = 0,
          i = t.readFixed(r, n);
        n += 4;
        var o = t.readUshort(r, n);
        n += 2;
        var s = t.readUshort(r, n);
        n += 2;
        var a = t.readUshort(r, n);
        n += 2;
        var l = t.readUshort(r, n);
        n += 2;
        for (var c = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], d = {
            _data: r
          }, h = {}, p = 0; p < o; p++) {
          var u = t.readASCII(r, n, 4);
          n += 4;
          var g = t.readUint(r, n);
          n += 4;
          var m = t.readUint(r, n);
          n += 4;
          var f = t.readUint(r, n);
          n += 4, h[u] = {
            offset: m,
            length: f
          };
        }
        for (var p = 0; p < c.length; p++) {
          var v = c[p];
          h[v] && (d[v.trim()] = y[v.trim()].parse(r, h[v].offset, h[v].length, d));
        }
        return d;
      },
      _tabOffset: function (e, t) {
        for (var r = y._bin, n = r.readUshort(e, 4), i = 12, o = 0; o < n; o++) {
          var s = r.readASCII(e, i, 4);
          i += 4;
          var a = r.readUint(e, i);
          i += 4;
          var l = r.readUint(e, i);
          i += 4;
          var c = r.readUint(e, i);
          if (i += 4, s == t) return l;
        }
        return 0;
      }
    };
  y._bin = {
    readFixed: function e(t, r) {
      return (t[r] << 8 | t[r + 1]) + (t[r + 2] << 8 | t[r + 3]) / 65540;
    },
    readF2dot14: function e(t, r) {
      var n, i, o;
      return y._bin.readShort(t, r) / 16384;
    },
    readInt: function e(t, r) {
      var n = y._bin.t.uint8;
      return n[0] = t[r + 3], n[1] = t[r + 2], n[2] = t[r + 1], n[3] = t[r], y._bin.t.int32[0];
    },
    readInt8: function e(t, r) {
      var n;
      return y._bin.t.uint8[0] = t[r], y._bin.t.int8[0];
    },
    readShort: function e(t, r) {
      var n = y._bin.t.uint8;
      return n[1] = t[r], n[0] = t[r + 1], y._bin.t.int16[0];
    },
    readUshort: function e(t, r) {
      return t[r] << 8 | t[r + 1];
    },
    readUshorts: function e(t, r, n) {
      for (var i = [], o = 0; o < n; o++) i.push(y._bin.readUshort(t, r + 2 * o));
      return i;
    },
    readUint: function e(t, r) {
      var n = y._bin.t.uint8;
      return n[3] = t[r], n[2] = t[r + 1], n[1] = t[r + 2], n[0] = t[r + 3], y._bin.t.uint32[0];
    },
    readUint64: function e(t, r) {
      return 4294967296 * y._bin.readUint(t, r) + y._bin.readUint(t, r + 4);
    },
    readASCII: function e(t, r, n) {
      for (var i = "", o = 0; o < n; o++) i += String.fromCharCode(t[r + o]);
      return i;
    },
    readUnicode: function e(t, r, n) {
      for (var i = "", o = 0; o < n; o++) {
        var s = t[r++] << 8 | t[r++];
        i += String.fromCharCode(s);
      }
      return i;
    },
    _tdec: window.TextDecoder ? new window.TextDecoder() : null,
    readUTF8: function e(t, r, n) {
      var i = y._bin._tdec;
      return i && 0 == r && n == t.length ? i.decode(t) : y._bin.readASCII(t, r, n);
    },
    readBytes: function e(t, r, n) {
      for (var i = [], o = 0; o < n; o++) i.push(t[r + o]);
      return i;
    },
    readASCIIArray: function e(t, r, n) {
      for (var i = [], o = 0; o < n; o++) i.push(String.fromCharCode(t[r + o]));
      return i;
    }
  }, y._bin.t = {
    buff: new ArrayBuffer(8)
  }, y._bin.t.int8 = new Int8Array(y._bin.t.buff), y._bin.t.uint8 = new Uint8Array(y._bin.t.buff), y._bin.t.int16 = new Int16Array(y._bin.t.buff), y._bin.t.uint16 = new Uint16Array(y._bin.t.buff), y._bin.t.int32 = new Int32Array(y._bin.t.buff), y._bin.t.uint32 = new Uint32Array(y._bin.t.buff), y._lctf = {}, y._lctf.parse = function (e, t, r, n, i) {
    var o = y._bin,
      s = {},
      a = t,
      l = o.readFixed(e, t);
    t += 4;
    var c = o.readUshort(e, t);
    t += 2;
    var d = o.readUshort(e, t);
    t += 2;
    var h = o.readUshort(e, t);
    return t += 2, s.scriptList = y._lctf.readScriptList(e, a + c), s.featureList = y._lctf.readFeatureList(e, a + d), s.lookupList = y._lctf.readLookupList(e, a + h, i), s;
  }, y._lctf.readLookupList = function (e, t, r) {
    var n = y._bin,
      i = t,
      o = [],
      s = n.readUshort(e, t);
    t += 2;
    for (var a = 0; a < s; a++) {
      var l = n.readUshort(e, t);
      t += 2;
      var c = y._lctf.readLookupTable(e, i + l, r);
      o.push(c);
    }
    return o;
  }, y._lctf.readLookupTable = function (e, t, r) {
    var n = y._bin,
      i = t,
      o = {
        tabs: []
      };
    o.ltype = n.readUshort(e, t), t += 2, o.flag = n.readUshort(e, t), t += 2;
    var s = n.readUshort(e, t);
    t += 2;
    for (var a = 0; a < s; a++) {
      var l = n.readUshort(e, t);
      t += 2;
      var c = r(e, o.ltype, i + l);
      o.tabs.push(c);
    }
    return o;
  }, y._lctf.numOfOnes = function (e) {
    for (var t = 0, r = 0; r < 32; r++) e >>> r & 1 && t++;
    return t;
  }, y._lctf.readClassDef = function (e, t) {
    var r = y._bin,
      n = [],
      i = r.readUshort(e, t);
    if (t += 2, 1 == i) {
      var o = r.readUshort(e, t);
      t += 2;
      var s = r.readUshort(e, t);
      t += 2;
      for (var a = 0; a < s; a++) n.push(o + a), n.push(o + a), n.push(r.readUshort(e, t)), t += 2;
    }
    if (2 == i) {
      var l = r.readUshort(e, t);
      t += 2;
      for (var a = 0; a < l; a++) n.push(r.readUshort(e, t)), t += 2, n.push(r.readUshort(e, t)), t += 2, n.push(r.readUshort(e, t)), t += 2;
    }
    return n;
  }, y._lctf.getInterval = function (e, t) {
    for (var r = 0; r < e.length; r += 3) {
      var n = e[r],
        i = e[r + 1],
        o = e[r + 2];
      if (n <= t && t <= i) return r;
    }
    return -1;
  }, y._lctf.readValueRecord = function (e, t, r) {
    var n = y._bin,
      i = [];
    return i.push(1 & r ? n.readShort(e, t) : 0), t += 1 & r ? 2 : 0, i.push(2 & r ? n.readShort(e, t) : 0), t += 2 & r ? 2 : 0, i.push(4 & r ? n.readShort(e, t) : 0), t += 4 & r ? 2 : 0, i.push(8 & r ? n.readShort(e, t) : 0), t += 8 & r ? 2 : 0, i;
  }, y._lctf.readCoverage = function (e, t) {
    var r = y._bin,
      n = {};
    n.fmt = r.readUshort(e, t), t += 2;
    var i = r.readUshort(e, t);
    return t += 2, 1 == n.fmt && (n.tab = r.readUshorts(e, t, i)), 2 == n.fmt && (n.tab = r.readUshorts(e, t, 3 * i)), n;
  }, y._lctf.coverageIndex = function (e, t) {
    var r = e.tab;
    if (1 == e.fmt) return r.indexOf(t);
    if (2 == e.fmt) {
      var n = y._lctf.getInterval(r, t);
      if (-1 != n) return r[n + 2] + (t - r[n]);
    }
    return -1;
  }, y._lctf.readFeatureList = function (e, t) {
    var r = y._bin,
      n = t,
      i = [],
      o = r.readUshort(e, t);
    t += 2;
    for (var s = 0; s < o; s++) {
      var a = r.readASCII(e, t, 4);
      t += 4;
      var l = r.readUshort(e, t);
      t += 2, i.push({
        tag: a.trim(),
        tab: y._lctf.readFeatureTable(e, n + l)
      });
    }
    return i;
  }, y._lctf.readFeatureTable = function (e, t) {
    var r = y._bin,
      n = r.readUshort(e, t);
    t += 2;
    var i = r.readUshort(e, t);
    t += 2;
    for (var o = [], s = 0; s < i; s++) o.push(r.readUshort(e, t + 2 * s));
    return o;
  }, y._lctf.readScriptList = function (e, t) {
    var r = y._bin,
      n = t,
      i = {},
      o = r.readUshort(e, t);
    t += 2;
    for (var s = 0; s < o; s++) {
      var a = r.readASCII(e, t, 4);
      t += 4;
      var l = r.readUshort(e, t);
      t += 2, i[a.trim()] = y._lctf.readScriptTable(e, n + l);
    }
    return i;
  }, y._lctf.readScriptTable = function (e, t) {
    var r = y._bin,
      n = t,
      i = {},
      o = r.readUshort(e, t);
    t += 2, i.default = y._lctf.readLangSysTable(e, n + o);
    var s = r.readUshort(e, t);
    t += 2;
    for (var a = 0; a < s; a++) {
      var l = r.readASCII(e, t, 4);
      t += 4;
      var c = r.readUshort(e, t);
      t += 2, i[l.trim()] = y._lctf.readLangSysTable(e, n + c);
    }
    return i;
  }, y._lctf.readLangSysTable = function (e, t) {
    var r = y._bin,
      n = {},
      i = r.readUshort(e, t);
    t += 2, n.reqFeature = r.readUshort(e, t), t += 2;
    var o = r.readUshort(e, t);
    return t += 2, n.features = r.readUshorts(e, t, o), n;
  }, y.CFF = {}, y.CFF.parse = function (e, t, r) {
    var n = y._bin,
      i = (e = new Uint8Array(e.buffer, t, r))[t = 0],
      o = e[++t],
      s = e[++t],
      a = e[++t];
    t++;
    var l = [];
    t = y.CFF.readIndex(e, t, l);
    for (var c = [], d = 0; d < l.length - 1; d++) c.push(n.readASCII(e, t + l[d], l[d + 1] - l[d]));
    t += l[l.length - 1];
    var h = [];
    t = y.CFF.readIndex(e, t, h);
    for (var p = [], d = 0; d < h.length - 1; d++) p.push(y.CFF.readDict(e, t + h[d], t + h[d + 1]));
    t += h[h.length - 1];
    var u = p[0],
      g = [];
    t = y.CFF.readIndex(e, t, g);
    for (var m = [], d = 0; d < g.length - 1; d++) m.push(n.readASCII(e, t + g[d], g[d + 1] - g[d]));
    if (t += g[g.length - 1], y.CFF.readSubrs(e, t, u), u.CharStrings) {
      t = u.CharStrings;
      var g = [];
      t = y.CFF.readIndex(e, t, g);
      for (var f = [], d = 0; d < g.length - 1; d++) f.push(n.readBytes(e, t + g[d], g[d + 1] - g[d]));
      u.CharStrings = f;
    }
    u.Encoding && (u.Encoding = y.CFF.readEncoding(e, u.Encoding, u.CharStrings.length)), u.charset && (u.charset = y.CFF.readCharset(e, u.charset, u.CharStrings.length)), u.Private && (t = u.Private[1], u.Private = y.CFF.readDict(e, t, t + u.Private[0]), u.Private.Subrs && y.CFF.readSubrs(e, t + u.Private.Subrs, u.Private));
    var v = {};
    for (var b in u) -1 != ["FamilyName", "FullName", "Notice", "version", "Copyright"].indexOf(b) ? v[b] = m[u[b] - 426 + 35] : v[b] = u[b];
    return v;
  }, y.CFF.readSubrs = function (e, t, r) {
    var n = y._bin,
      i = [];
    t = y.CFF.readIndex(e, t, i);
    var o,
      s = i.length;
    o = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, r.Bias = o, r.Subrs = [];
    for (var a = 0; a < i.length - 1; a++) r.Subrs.push(n.readBytes(e, t + i[a], i[a + 1] - i[a]));
  }, y.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], y.CFF.glyphByUnicode = function (e, t) {
    for (var r = 0; r < e.charset.length; r++) if (e.charset[r] == t) return r;
    return -1;
  }, y.CFF.glyphBySE = function (e, t) {
    return t < 0 || t > 255 ? -1 : y.CFF.glyphByUnicode(e, y.CFF.tableSE[t]);
  }, y.CFF.readEncoding = function (e, t, r) {
    var n = y._bin,
      i = [".notdef"],
      o = e[t];
    if (t++, 0 != o) throw "error: unknown encoding format: " + o;
    var s = e[t];
    t++;
    for (var a = 0; a < s; a++) i.push(e[t + a]);
    return i;
  }, y.CFF.readCharset = function (e, t, r) {
    var n = y._bin,
      i = [".notdef"],
      o = e[t];
    if (t++, 0 == o) for (var s = 0; s < r; s++) {
      var a = n.readUshort(e, t);
      t += 2, i.push(a);
    } else {
      if (1 != o && 2 != o) throw "error: format: " + o;
      for (; i.length < r;) {
        var a = n.readUshort(e, t);
        t += 2;
        var l = 0;
        1 == o ? (l = e[t], t++) : (l = n.readUshort(e, t), t += 2);
        for (var s = 0; s <= l; s++) i.push(a), a++;
      }
    }
    return i;
  }, y.CFF.readIndex = function (e, t, r) {
    var n = y._bin,
      i = n.readUshort(e, t),
      o = e[t += 2];
    if (t++, 1 == o) for (var s = 0; s < i + 1; s++) r.push(e[t + s]);else if (2 == o) for (var s = 0; s < i + 1; s++) r.push(n.readUshort(e, t + 2 * s));else if (3 == o) for (var s = 0; s < i + 1; s++) r.push(16777215 & n.readUint(e, t + 3 * s - 1));else if (0 != i) throw "unsupported offset size: " + o + ", count: " + i;
    return (t += (i + 1) * o) - 1;
  }, y.CFF.getCharString = function (e, t, r) {
    var n = y._bin,
      i = e[t],
      o = e[t + 1],
      s = e[t + 2],
      a = e[t + 3],
      l = e[t + 4],
      c = 1,
      d = null,
      h = null;
    i <= 20 && (d = i, c = 1), 12 == i && (d = 100 * i + o, c = 2), 21 <= i && i <= 27 && (d = i, c = 1), 28 == i && (h = n.readShort(e, t + 1), c = 3), 29 <= i && i <= 31 && (d = i, c = 1), 32 <= i && i <= 246 && (h = i - 139, c = 1), 247 <= i && i <= 250 && (h = 256 * (i - 247) + o + 108, c = 2), 251 <= i && i <= 254 && (h = 256 * -(i - 251) - o - 108, c = 2), 255 == i && (h = n.readInt(e, t + 1) / 65535, c = 5), r.val = null != h ? h : "o" + d, r.size = c;
  }, y.CFF.readCharString = function (e, t, r) {
    for (var n = t + r, i = y._bin, o = []; t < n;) {
      var s = e[t],
        a = e[t + 1],
        l = e[t + 2],
        c = e[t + 3],
        d = e[t + 4],
        h = 1,
        p = null,
        u = null;
      s <= 20 && (p = s, h = 1), 12 == s && (p = 100 * s + a, h = 2), 19 != s && 20 != s || (p = s, h = 2), 21 <= s && s <= 27 && (p = s, h = 1), 28 == s && (u = i.readShort(e, t + 1), h = 3), 29 <= s && s <= 31 && (p = s, h = 1), 32 <= s && s <= 246 && (u = s - 139, h = 1), 247 <= s && s <= 250 && (u = 256 * (s - 247) + a + 108, h = 2), 251 <= s && s <= 254 && (u = 256 * -(s - 251) - a - 108, h = 2), 255 == s && (u = i.readInt(e, t + 1) / 65535, h = 5), o.push(null != u ? u : "o" + p), t += h;
    }
    return o;
  }, y.CFF.readDict = function (e, t, r) {
    for (var n = y._bin, i = {}, o = []; t < r;) {
      var s = e[t],
        a = e[t + 1],
        l = e[t + 2],
        c = e[t + 3],
        d = e[t + 4],
        h = 1,
        p = null,
        u = null,
        g,
        g;
      if (28 == s && (u = n.readShort(e, t + 1), h = 3), 29 == s && (u = n.readInt(e, t + 1), h = 5), 32 <= s && s <= 246 && (u = s - 139, h = 1), 247 <= s && s <= 250 && (u = 256 * (s - 247) + a + 108, h = 2), 251 <= s && s <= 254 && (u = 256 * -(s - 251) - a - 108, h = 2), 255 == s) throw u = n.readInt(e, t + 1) / 65535, h = 5, "unknown number";
      if (30 == s) {
        var m = [];
        for (h = 1;;) {
          var f = e[t + h];
          h++;
          var v = f >> 4,
            b = 15 & f;
          if (15 != v && m.push(v), 15 != b && m.push(b), 15 == b) break;
        }
        for (var x = "", C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], S = 0; S < m.length; S++) x += C[m[S]];
        u = parseFloat(x);
      }
      if (s <= 21) if (p = (g = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"])[s], h = 1, 12 == s) p = (g = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"])[a], h = 2;
      null != p ? (i[p] = 1 == o.length ? o[0] : o, o = []) : o.push(u), t += h;
    }
    return i;
  }, y.cmap = {}, y.cmap.parse = function (e, t, r) {
    e = new Uint8Array(e.buffer, t, r);
    var n = t = 0,
      i = y._bin,
      o = {},
      s = i.readUshort(e, t);
    t += 2;
    var a = i.readUshort(e, t);
    t += 2;
    var l = [];
    o.tables = [];
    for (var c = 0; c < a; c++) {
      var d = i.readUshort(e, t);
      t += 2;
      var h = i.readUshort(e, t);
      t += 2;
      var p = i.readUint(e, t);
      t += 4;
      var u = "p" + d + "e" + h,
        g = l.indexOf(p);
      if (-1 == g) {
        var m;
        g = o.tables.length, l.push(p);
        var f = i.readUshort(e, p);
        0 == f ? m = y.cmap.parse0(e, p) : 4 == f ? m = y.cmap.parse4(e, p) : 6 == f ? m = y.cmap.parse6(e, p) : 12 == f ? m = y.cmap.parse12(e, p) : console.log("unknown format: " + f, d, h, p), o.tables.push(m);
      }
      if (null != o[u]) throw "multiple tables for one platform+encoding";
      o[u] = g;
    }
    return o;
  }, y.cmap.parse0 = function (e, t) {
    var r = y._bin,
      n = {};
    n.format = r.readUshort(e, t), t += 2;
    var i = r.readUshort(e, t);
    t += 2;
    var o = r.readUshort(e, t);
    t += 2, n.map = [];
    for (var s = 0; s < i - 6; s++) n.map.push(e[t + s]);
    return n;
  }, y.cmap.parse4 = function (e, t) {
    var r = y._bin,
      n = t,
      i = {};
    i.format = r.readUshort(e, t), t += 2;
    var o = r.readUshort(e, t);
    t += 2;
    var s = r.readUshort(e, t);
    t += 2;
    var a = r.readUshort(e, t);
    t += 2;
    var l = a / 2;
    i.searchRange = r.readUshort(e, t), t += 2, i.entrySelector = r.readUshort(e, t), t += 2, i.rangeShift = r.readUshort(e, t), t += 2, i.endCount = r.readUshorts(e, t, l), t += 2 * l, t += 2, i.startCount = r.readUshorts(e, t, l), t += 2 * l, i.idDelta = [];
    for (var c = 0; c < l; c++) i.idDelta.push(r.readShort(e, t)), t += 2;
    for (i.idRangeOffset = r.readUshorts(e, t, l), t += 2 * l, i.glyphIdArray = []; t < n + o;) i.glyphIdArray.push(r.readUshort(e, t)), t += 2;
    return i;
  }, y.cmap.parse6 = function (e, t) {
    var r = y._bin,
      n = t,
      i = {};
    i.format = r.readUshort(e, t), t += 2;
    var o = r.readUshort(e, t);
    t += 2;
    var s = r.readUshort(e, t);
    t += 2, i.firstCode = r.readUshort(e, t), t += 2;
    var a = r.readUshort(e, t);
    t += 2, i.glyphIdArray = [];
    for (var l = 0; l < a; l++) i.glyphIdArray.push(r.readUshort(e, t)), t += 2;
    return i;
  }, y.cmap.parse12 = function (e, t) {
    var r = y._bin,
      n = t,
      i = {};
    i.format = r.readUshort(e, t), t += 2, t += 2;
    var o = r.readUint(e, t);
    t += 4;
    var s = r.readUint(e, t);
    t += 4;
    var a = r.readUint(e, t);
    t += 4, i.groups = [];
    for (var l = 0; l < a; l++) {
      var c = t + 12 * l,
        d = r.readUint(e, c + 0),
        h = r.readUint(e, c + 4),
        p = r.readUint(e, c + 8);
      i.groups.push([d, h, p]);
    }
    return i;
  }, y.glyf = {}, y.glyf.parse = function (e, t, r, n) {
    for (var i = [], o = 0; o < n.maxp.numGlyphs; o++) i.push(null);
    return i;
  }, y.glyf._parseGlyf = function (e, t) {
    var r = y._bin,
      n = e._data,
      i = y._tabOffset(n, "glyf") + e.loca[t];
    if (e.loca[t] == e.loca[t + 1]) return null;
    var o = {};
    if (o.noc = r.readShort(n, i), i += 2, o.xMin = r.readShort(n, i), i += 2, o.yMin = r.readShort(n, i), i += 2, o.xMax = r.readShort(n, i), i += 2, o.yMax = r.readShort(n, i), i += 2, o.xMin >= o.xMax || o.yMin >= o.yMax) return null;
    if (o.noc > 0) {
      o.endPts = [];
      for (var s = 0; s < o.noc; s++) o.endPts.push(r.readUshort(n, i)), i += 2;
      var a = r.readUshort(n, i);
      if (i += 2, n.length - i < a) return null;
      o.instructions = r.readBytes(n, i, a), i += a;
      var l = o.endPts[o.noc - 1] + 1;
      o.flags = [];
      for (var s = 0; s < l; s++) {
        var c = n[i];
        if (i++, o.flags.push(c), 8 & c) {
          var d = n[i];
          i++;
          for (var h = 0; h < d; h++) o.flags.push(c), s++;
        }
      }
      o.xs = [];
      for (var s = 0; s < l; s++) {
        var p = !!(2 & o.flags[s]),
          u = !!(16 & o.flags[s]);
        p ? (o.xs.push(u ? n[i] : -n[i]), i++) : u ? o.xs.push(0) : (o.xs.push(r.readShort(n, i)), i += 2);
      }
      o.ys = [];
      for (var s = 0; s < l; s++) {
        var p = !!(4 & o.flags[s]),
          u = !!(32 & o.flags[s]);
        p ? (o.ys.push(u ? n[i] : -n[i]), i++) : u ? o.ys.push(0) : (o.ys.push(r.readShort(n, i)), i += 2);
      }
      for (var g = 0, m = 0, s = 0; s < l; s++) g += o.xs[s], m += o.ys[s], o.xs[s] = g, o.ys[s] = m;
    } else {
      var f = 1,
        v = 2,
        b = 4,
        x = 8,
        C = 16,
        S = 32,
        A = 64,
        w = 128,
        E = 256,
        k = 512,
        O = 1024,
        D = 2048,
        P = 4096,
        M;
      o.parts = [];
      do {
        M = r.readUshort(n, i), i += 2;
        var I = {
          m: {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            tx: 0,
            ty: 0
          },
          p1: -1,
          p2: -1
        };
        if (o.parts.push(I), I.glyphIndex = r.readUshort(n, i), i += 2, 1 & M) {
          var T = r.readShort(n, i);
          i += 2;
          var L = r.readShort(n, i);
          i += 2;
        } else {
          var T = r.readInt8(n, i);
          i++;
          var L = r.readInt8(n, i);
          i++;
        }
        2 & M ? (I.m.tx = T, I.m.ty = L) : (I.p1 = T, I.p2 = L), 8 & M ? (I.m.a = I.m.d = r.readF2dot14(n, i), i += 2) : M & A ? (I.m.a = r.readF2dot14(n, i), i += 2, I.m.d = r.readF2dot14(n, i), i += 2) : M & w && (I.m.a = r.readF2dot14(n, i), i += 2, I.m.b = r.readF2dot14(n, i), i += 2, I.m.c = r.readF2dot14(n, i), i += 2, I.m.d = r.readF2dot14(n, i), i += 2);
      } while (M & S);
      if (M & E) {
        var R = r.readUshort(n, i);
        i += 2, o.instr = [];
        for (var s = 0; s < R; s++) o.instr.push(n[i]), i++;
      }
    }
    return o;
  }, y.GPOS = {}, y.GPOS.parse = function (e, t, r, n) {
    return y._lctf.parse(e, t, r, n, y.GPOS.subt);
  }, y.GPOS.subt = function (e, t, r) {
    if (2 != t) return null;
    var n = y._bin,
      i = r,
      o = {};
    o.format = n.readUshort(e, r), r += 2;
    var s = n.readUshort(e, r);
    r += 2, o.coverage = y._lctf.readCoverage(e, s + i), o.valFmt1 = n.readUshort(e, r), r += 2, o.valFmt2 = n.readUshort(e, r), r += 2;
    var a = y._lctf.numOfOnes(o.valFmt1),
      l = y._lctf.numOfOnes(o.valFmt2);
    if (1 == o.format) {
      o.pairsets = [];
      var c = n.readUshort(e, r);
      r += 2;
      for (var d = 0; d < c; d++) {
        var h = n.readUshort(e, r);
        r += 2, h += i;
        var p = n.readUshort(e, h);
        h += 2;
        for (var u = [], g = 0; g < p; g++) {
          var m = n.readUshort(e, h),
            f,
            v;
          h += 2, 0 != o.valFmt1 && (f = y._lctf.readValueRecord(e, h, o.valFmt1), h += 2 * a), 0 != o.valFmt2 && (v = y._lctf.readValueRecord(e, h, o.valFmt2), h += 2 * l), u.push({
            gid2: m,
            val1: f,
            val2: v
          });
        }
        o.pairsets.push(u);
      }
    }
    if (2 == o.format) {
      var b = n.readUshort(e, r);
      r += 2;
      var x = n.readUshort(e, r);
      r += 2;
      var C = n.readUshort(e, r);
      r += 2;
      var S = n.readUshort(e, r);
      r += 2, o.classDef1 = y._lctf.readClassDef(e, i + b), o.classDef2 = y._lctf.readClassDef(e, i + x), o.matrix = [];
      for (var d = 0; d < C; d++) {
        for (var A = [], g = 0; g < S; g++) {
          var f = null,
            v = null;
          0 != o.valFmt1 && (f = y._lctf.readValueRecord(e, r, o.valFmt1), r += 2 * a), 0 != o.valFmt2 && (v = y._lctf.readValueRecord(e, r, o.valFmt2), r += 2 * l), A.push({
            val1: f,
            val2: v
          });
        }
        o.matrix.push(A);
      }
    }
    return o;
  }, y.GSUB = {}, y.GSUB.parse = function (e, t, r, n) {
    return y._lctf.parse(e, t, r, n, y.GSUB.subt);
  }, y.GSUB.subt = function (e, t, r) {
    var n = y._bin,
      i = r,
      o = {};
    if (1 != t && 4 != t && 5 != t) return null;
    o.fmt = n.readUshort(e, r), r += 2;
    var s = n.readUshort(e, r);
    if (r += 2, o.coverage = y._lctf.readCoverage(e, s + i), 1 == t) {
      if (1 == o.fmt) o.delta = n.readShort(e, r), r += 2;else if (2 == o.fmt) {
        var a = n.readUshort(e, r);
        r += 2, o.newg = n.readUshorts(e, r, a), r += 2 * o.newg.length;
      }
    } else if (4 == t) {
      o.vals = [];
      var a = n.readUshort(e, r);
      r += 2;
      for (var l = 0; l < a; l++) {
        var c = n.readUshort(e, r);
        r += 2, o.vals.push(y.GSUB.readLigatureSet(e, i + c));
      }
    } else if (5 == t) if (2 == o.fmt) {
      var d = n.readUshort(e, r);
      r += 2, o.cDef = y._lctf.readClassDef(e, i + d), o.scset = [];
      var h = n.readUshort(e, r);
      r += 2;
      for (var l = 0; l < h; l++) {
        var p = n.readUshort(e, r);
        r += 2, o.scset.push(0 == p ? null : y.GSUB.readSubClassSet(e, i + p));
      }
    } else console.log("unknown table format", o.fmt);
    return o;
  }, y.GSUB.readSubClassSet = function (e, t) {
    var r = y._bin.readUshort,
      n = t,
      i = [],
      o = r(e, t);
    t += 2;
    for (var s = 0; s < o; s++) {
      var a = r(e, t);
      t += 2, i.push(y.GSUB.readSubClassRule(e, n + a));
    }
    return i;
  }, y.GSUB.readSubClassRule = function (e, t) {
    var r = y._bin.readUshort,
      n = t,
      i = {},
      o = r(e, t),
      s = r(e, t += 2);
    t += 2, i.input = [];
    for (var a = 0; a < o - 1; a++) i.input.push(r(e, t)), t += 2;
    return i.substLookupRecords = y.GSUB.readSubstLookupRecords(e, t, s), i;
  }, y.GSUB.readSubstLookupRecords = function (e, t, r) {
    for (var n = y._bin.readUshort, i = [], o = 0; o < r; o++) i.push(n(e, t), n(e, t + 2)), t += 4;
    return i;
  }, y.GSUB.readChainSubClassSet = function (e, t) {
    var r = y._bin,
      n = t,
      i = [],
      o = r.readUshort(e, t);
    t += 2;
    for (var s = 0; s < o; s++) {
      var a = r.readUshort(e, t);
      t += 2, i.push(y.GSUB.readChainSubClassRule(e, n + a));
    }
    return i;
  }, y.GSUB.readChainSubClassRule = function (e, t) {
    for (var r = y._bin, n = t, i = {}, o = ["backtrack", "input", "lookahead"], s = 0; s < o.length; s++) {
      var a = r.readUshort(e, t);
      t += 2, 1 == s && a--, i[o[s]] = r.readUshorts(e, t, a), t += 2 * i[o[s]].length;
    }
    var a = r.readUshort(e, t);
    return t += 2, i.subst = r.readUshorts(e, t, 2 * a), t += 2 * i.subst.length, i;
  }, y.GSUB.readLigatureSet = function (e, t) {
    var r = y._bin,
      n = t,
      i = [],
      o = r.readUshort(e, t);
    t += 2;
    for (var s = 0; s < o; s++) {
      var a = r.readUshort(e, t);
      t += 2, i.push(y.GSUB.readLigature(e, n + a));
    }
    return i;
  }, y.GSUB.readLigature = function (e, t) {
    var r = y._bin,
      n = {
        chain: []
      };
    n.nglyph = r.readUshort(e, t), t += 2;
    var i = r.readUshort(e, t);
    t += 2;
    for (var o = 0; o < i - 1; o++) n.chain.push(r.readUshort(e, t)), t += 2;
    return n;
  }, y.head = {}, y.head.parse = function (e, t, r) {
    var n = y._bin,
      i = {},
      o = n.readFixed(e, t);
    t += 4, i.fontRevision = n.readFixed(e, t), t += 4;
    var s = n.readUint(e, t);
    t += 4;
    var a = n.readUint(e, t);
    return t += 4, i.flags = n.readUshort(e, t), t += 2, i.unitsPerEm = n.readUshort(e, t), t += 2, i.created = n.readUint64(e, t), t += 8, i.modified = n.readUint64(e, t), t += 8, i.xMin = n.readShort(e, t), t += 2, i.yMin = n.readShort(e, t), t += 2, i.xMax = n.readShort(e, t), t += 2, i.yMax = n.readShort(e, t), t += 2, i.macStyle = n.readUshort(e, t), t += 2, i.lowestRecPPEM = n.readUshort(e, t), t += 2, i.fontDirectionHint = n.readShort(e, t), t += 2, i.indexToLocFormat = n.readShort(e, t), t += 2, i.glyphDataFormat = n.readShort(e, t), t += 2, i;
  }, y.hhea = {}, y.hhea.parse = function (e, t, r) {
    var n = y._bin,
      i = {},
      o = n.readFixed(e, t);
    return t += 4, i.ascender = n.readShort(e, t), t += 2, i.descender = n.readShort(e, t), t += 2, i.lineGap = n.readShort(e, t), t += 2, i.advanceWidthMax = n.readUshort(e, t), t += 2, i.minLeftSideBearing = n.readShort(e, t), t += 2, i.minRightSideBearing = n.readShort(e, t), t += 2, i.xMaxExtent = n.readShort(e, t), t += 2, i.caretSlopeRise = n.readShort(e, t), t += 2, i.caretSlopeRun = n.readShort(e, t), t += 2, i.caretOffset = n.readShort(e, t), t += 2, t += 8, i.metricDataFormat = n.readShort(e, t), t += 2, i.numberOfHMetrics = n.readUshort(e, t), t += 2, i;
  }, y.hmtx = {}, y.hmtx.parse = function (e, t, r, n) {
    for (var i = y._bin, o = {
        aWidth: [],
        lsBearing: []
      }, s = 0, a = 0, l = 0; l < n.maxp.numGlyphs; l++) l < n.hhea.numberOfHMetrics && (s = i.readUshort(e, t), t += 2, a = i.readShort(e, t), t += 2), o.aWidth.push(s), o.lsBearing.push(a);
    return o;
  }, y.kern = {}, y.kern.parse = function (e, t, r, n) {
    var i = y._bin,
      o = i.readUshort(e, t);
    if (t += 2, 1 == o) return y.kern.parseV1(e, t - 2, r, n);
    var s = i.readUshort(e, t);
    t += 2;
    for (var a = {
        glyph1: [],
        rval: []
      }, l = 0; l < s; l++) {
      t += 2;
      var r = i.readUshort(e, t);
      t += 2;
      var c = i.readUshort(e, t);
      t += 2;
      var d = c >>> 8;
      if (0 != (d &= 15)) throw "unknown kern table format: " + d;
      t = y.kern.readFormat0(e, t, a);
    }
    return a;
  }, y.kern.parseV1 = function (e, t, r, n) {
    var i = y._bin,
      o = i.readFixed(e, t);
    t += 4;
    var s = i.readUint(e, t);
    t += 4;
    for (var a = {
        glyph1: [],
        rval: []
      }, l = 0; l < s; l++) {
      var r = i.readUint(e, t);
      t += 4;
      var c = i.readUshort(e, t);
      t += 2;
      var d = i.readUshort(e, t);
      t += 2;
      var h = c >>> 8;
      if (0 != (h &= 15)) throw "unknown kern table format: " + h;
      t = y.kern.readFormat0(e, t, a);
    }
    return a;
  }, y.kern.readFormat0 = function (e, t, r) {
    var n = y._bin,
      i = -1,
      o = n.readUshort(e, t);
    t += 2;
    var s = n.readUshort(e, t);
    t += 2;
    var a = n.readUshort(e, t);
    t += 2;
    var l = n.readUshort(e, t);
    t += 2;
    for (var c = 0; c < o; c++) {
      var d = n.readUshort(e, t);
      t += 2;
      var h = n.readUshort(e, t);
      t += 2;
      var p = n.readShort(e, t);
      t += 2, d != i && (r.glyph1.push(d), r.rval.push({
        glyph2: [],
        vals: []
      }));
      var u = r.rval[r.rval.length - 1];
      u.glyph2.push(h), u.vals.push(p), i = d;
    }
    return t;
  }, y.loca = {}, y.loca.parse = function (e, t, r, n) {
    var i = y._bin,
      o = [],
      s = n.head.indexToLocFormat,
      a = n.maxp.numGlyphs + 1;
    if (0 == s) for (var l = 0; l < a; l++) o.push(i.readUshort(e, t + (l << 1)) << 1);
    if (1 == s) for (var l = 0; l < a; l++) o.push(i.readUint(e, t + (l << 2)));
    return o;
  }, y.maxp = {}, y.maxp.parse = function (e, t, r) {
    var n = y._bin,
      i = {},
      o = n.readUint(e, t);
    return t += 4, i.numGlyphs = n.readUshort(e, t), t += 2, 65536 == o && (i.maxPoints = n.readUshort(e, t), t += 2, i.maxContours = n.readUshort(e, t), t += 2, i.maxCompositePoints = n.readUshort(e, t), t += 2, i.maxCompositeContours = n.readUshort(e, t), t += 2, i.maxZones = n.readUshort(e, t), t += 2, i.maxTwilightPoints = n.readUshort(e, t), t += 2, i.maxStorage = n.readUshort(e, t), t += 2, i.maxFunctionDefs = n.readUshort(e, t), t += 2, i.maxInstructionDefs = n.readUshort(e, t), t += 2, i.maxStackElements = n.readUshort(e, t), t += 2, i.maxSizeOfInstructions = n.readUshort(e, t), t += 2, i.maxComponentElements = n.readUshort(e, t), t += 2, i.maxComponentDepth = n.readUshort(e, t), t += 2), i;
  }, y.name = {}, y.name.parse = function (e, t, r) {
    var n = y._bin,
      i = {},
      o = n.readUshort(e, t);
    t += 2;
    var s = n.readUshort(e, t);
    t += 2;
    for (var a = n.readUshort(e, t), l = t += 2, c = 0, d; c < s; c++) {
      var h = n.readUshort(e, t);
      t += 2;
      var p = n.readUshort(e, t);
      t += 2;
      var u = n.readUshort(e, t);
      t += 2;
      var g = n.readUshort(e, t);
      t += 2;
      var r = n.readUshort(e, t);
      t += 2;
      var m = n.readUshort(e, t);
      t += 2;
      var f = "p" + h;
      null == i[f] && (i[f] = {});
      var v,
        b = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"][g],
        x = l + 12 * s + m,
        C;
      if (0 == h) C = n.readUnicode(e, x, r / 2);else if (3 == h && 0 == p) C = n.readUnicode(e, x, r / 2);else if (0 == p) C = n.readASCII(e, x, r);else if (1 == p) C = n.readUnicode(e, x, r / 2);else if (3 == p) C = n.readUnicode(e, x, r / 2);else {
        if (1 != h) throw "unknown encoding " + p + ", platformID: " + h;
        C = n.readASCII(e, x, r), console.log("reading unknown MAC encoding " + p + " as ASCII");
      }
      i[f][b] = C, i[f]._lang = u;
    }
    for (var S in i) if (null != i[S].postScriptName && 1033 == i[S]._lang) return i[S];
    for (var S in i) if (null != i[S].postScriptName && 3084 == i[S]._lang) return i[S];
    for (var S in i) if (null != i[S].postScriptName) return i[S];
    for (var S in i) {
      d = S;
      break;
    }
    return console.log("returning name table with languageID " + i[d]._lang), i[d];
  }, y["OS/2"] = {}, y["OS/2"].parse = function (e, t, r) {
    var n,
      i = y._bin.readUshort(e, t);
    t += 2;
    var o = {};
    if (0 == i) y["OS/2"].version0(e, t, o);else if (1 == i) y["OS/2"].version1(e, t, o);else if (2 == i || 3 == i || 4 == i) y["OS/2"].version2(e, t, o);else {
      if (5 != i) throw "unknown OS/2 table version: " + i;
      y["OS/2"].version5(e, t, o);
    }
    return o;
  }, y["OS/2"].version0 = function (e, t, r) {
    var n = y._bin;
    return r.xAvgCharWidth = n.readShort(e, t), t += 2, r.usWeightClass = n.readUshort(e, t), t += 2, r.usWidthClass = n.readUshort(e, t), t += 2, r.fsType = n.readUshort(e, t), t += 2, r.ySubscriptXSize = n.readShort(e, t), t += 2, r.ySubscriptYSize = n.readShort(e, t), t += 2, r.ySubscriptXOffset = n.readShort(e, t), t += 2, r.ySubscriptYOffset = n.readShort(e, t), t += 2, r.ySuperscriptXSize = n.readShort(e, t), t += 2, r.ySuperscriptYSize = n.readShort(e, t), t += 2, r.ySuperscriptXOffset = n.readShort(e, t), t += 2, r.ySuperscriptYOffset = n.readShort(e, t), t += 2, r.yStrikeoutSize = n.readShort(e, t), t += 2, r.yStrikeoutPosition = n.readShort(e, t), t += 2, r.sFamilyClass = n.readShort(e, t), t += 2, r.panose = n.readBytes(e, t, 10), t += 10, r.ulUnicodeRange1 = n.readUint(e, t), t += 4, r.ulUnicodeRange2 = n.readUint(e, t), t += 4, r.ulUnicodeRange3 = n.readUint(e, t), t += 4, r.ulUnicodeRange4 = n.readUint(e, t), t += 4, r.achVendID = [n.readInt8(e, t), n.readInt8(e, t + 1), n.readInt8(e, t + 2), n.readInt8(e, t + 3)], t += 4, r.fsSelection = n.readUshort(e, t), t += 2, r.usFirstCharIndex = n.readUshort(e, t), t += 2, r.usLastCharIndex = n.readUshort(e, t), t += 2, r.sTypoAscender = n.readShort(e, t), t += 2, r.sTypoDescender = n.readShort(e, t), t += 2, r.sTypoLineGap = n.readShort(e, t), t += 2, r.usWinAscent = n.readUshort(e, t), t += 2, r.usWinDescent = n.readUshort(e, t), t += 2;
  }, y["OS/2"].version1 = function (e, t, r) {
    var n = y._bin;
    return t = y["OS/2"].version0(e, t, r), r.ulCodePageRange1 = n.readUint(e, t), t += 4, r.ulCodePageRange2 = n.readUint(e, t), t += 4;
  }, y["OS/2"].version2 = function (e, t, r) {
    var n = y._bin;
    return t = y["OS/2"].version1(e, t, r), r.sxHeight = n.readShort(e, t), t += 2, r.sCapHeight = n.readShort(e, t), t += 2, r.usDefault = n.readUshort(e, t), t += 2, r.usBreak = n.readUshort(e, t), t += 2, r.usMaxContext = n.readUshort(e, t), t += 2;
  }, y["OS/2"].version5 = function (e, t, r) {
    var n = y._bin;
    return t = y["OS/2"].version2(e, t, r), r.usLowerOpticalPointSize = n.readUshort(e, t), t += 2, r.usUpperOpticalPointSize = n.readUshort(e, t), t += 2;
  }, y.post = {}, y.post.parse = function (e, t, r) {
    var n = y._bin,
      i = {};
    return i.version = n.readFixed(e, t), t += 4, i.italicAngle = n.readFixed(e, t), t += 4, i.underlinePosition = n.readShort(e, t), t += 2, i.underlineThickness = n.readShort(e, t), t += 2, i;
  }, y.SVG = {}, y.SVG.parse = function (e, t, r) {
    var n = y._bin,
      i = {
        entries: []
      },
      o = t,
      s = n.readUshort(e, t);
    t += 2;
    var a = n.readUint(e, t);
    t += 4;
    var l = n.readUint(e, t);
    t += 4, t = a + o;
    var c = n.readUshort(e, t);
    t += 2;
    for (var d = 0; d < c; d++) {
      var h = n.readUshort(e, t);
      t += 2;
      var p = n.readUshort(e, t);
      t += 2;
      var u = n.readUint(e, t);
      t += 4;
      var g = n.readUint(e, t);
      t += 4;
      for (var m = new Uint8Array(e.buffer, o + u + a, g), f = n.readUTF8(m, 0, m.length), v = h; v <= p; v++) i.entries[v] = f;
    }
    return i;
  }, y.SVG.toPath = function (e) {
    var t = {
      cmds: [],
      crds: []
    };
    if (null == e) return t;
    for (var r, n, i = new DOMParser().parseFromString(e, "image/svg+xml").firstChild; "svg" != i.tagName;) i = i.nextSibling;
    var o = i.getAttribute("viewBox");
    o = o ? o.trim().split(" ").map(parseFloat) : [0, 0, 1e3, 1e3], y.SVG._toPath(i.children, t);
    for (var s = 0; s < t.crds.length; s += 2) {
      var a = t.crds[s],
        l = t.crds[s + 1];
      a -= o[0], l = -(l -= o[1]), t.crds[s] = a, t.crds[s + 1] = l;
    }
    return t;
  }, y.SVG._toPath = function (e, t, r) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        o = i.tagName,
        s = i.getAttribute("fill");
      if (null == s && (s = r), "g" == o) y.SVG._toPath(i.children, t, s);else if ("path" == o) {
        t.cmds.push(s || "#000000");
        var a = i.getAttribute("d"),
          l = y.SVG._tokens(a);
        y.SVG._toksToPath(l, t), t.cmds.push("X");
      } else "defs" == o || console.log(o, i);
    }
  }, y.SVG._tokens = function (e) {
    for (var t = [], r = 0, n = !1, i = ""; r < e.length;) {
      var o = e.charCodeAt(r),
        s = e.charAt(r);
      r++;
      var a = 48 <= o && o <= 57 || "." == s || "-" == s;
      n ? "-" == s ? (t.push(parseFloat(i)), i = s) : a ? i += s : (t.push(parseFloat(i)), "," != s && " " != s && t.push(s), n = !1) : a ? (i = s, n = !0) : "," != s && " " != s && t.push(s);
    }
    return n && t.push(parseFloat(i)), t;
  }, y.SVG._toksToPath = function (e, t) {
    for (var r = 0, n = 0, i = 0, o = 0, s = 0, a = {
        M: 2,
        L: 2,
        H: 1,
        V: 1,
        S: 4,
        C: 6
      }, l = t.cmds, c = t.crds; r < e.length;) {
      var d = e[r];
      if (r++, "z" == d) l.push("Z"), n = o, i = s;else for (var h = d.toUpperCase(), p = a[h], u = y.SVG._reps(e, r, p), g = 0; g < u; g++) {
        var m = 0,
          f = 0;
        if (d != h && (m = n, f = i), "M" == h) n = m + e[r++], i = f + e[r++], l.push("M"), c.push(n, i), o = n, s = i;else if ("L" == h) n = m + e[r++], i = f + e[r++], l.push("L"), c.push(n, i);else if ("H" == h) n = m + e[r++], l.push("L"), c.push(n, i);else if ("V" == h) i = f + e[r++], l.push("L"), c.push(n, i);else if ("C" == h) {
          var v = m + e[r++],
            b = f + e[r++],
            x = m + e[r++],
            C = f + e[r++],
            S = m + e[r++],
            A = f + e[r++];
          l.push("C"), c.push(v, b, x, C, S, A), n = S, i = A;
        } else if ("S" == h) {
          var w = Math.max(c.length - 4, 0),
            v = n + n - c[w],
            b = i + i - c[w + 1],
            x = m + e[r++],
            C = f + e[r++],
            S = m + e[r++],
            A = f + e[r++];
          l.push("C"), c.push(v, b, x, C, S, A), n = S, i = A;
        } else console.log("Unknown SVG command " + d);
      }
    }
  }, y.SVG._reps = function (e, t, r) {
    for (var n = t; n < e.length && "string" != typeof e[n];) n += r;
    return (n - t) / r;
  };
  const v = y;
  function b(e) {
    for (var t = [], r = [], n = 0; n < e.length; n++) {
      var i,
        o = e[n].GSUB;
      o && (t = t.concat(o.lookupList), r = r.concat(o.featureList));
    }
    return {
      llist: t,
      flist: r
    };
  }
  null == v.U && (v.U = {}), v.U.codeToGlyph = function (e, t) {
    var r = e.cmap,
      n = -1;
    if (null != r.p0e10 ? n = r.p0e10 : null != r.p0e4 ? n = r.p0e4 : null != r.p3e1 ? n = r.p3e1 : null != r.p1e0 && (n = r.p1e0), -1 == n) throw "no familiar platform and encoding!";
    var i = r.tables[n];
    if (0 == i.format) return t >= i.map.length ? 0 : i.map[t];
    if (4 == i.format) {
      for (var o = -1, s = 0; s < i.endCount.length; s++) if (t <= i.endCount[s]) {
        o = s;
        break;
      }
      if (-1 == o) return 0;
      if (i.startCount[o] > t) return 0;
      var a = 0;
      return 65535 & (a = 0 != i.idRangeOffset[o] ? i.glyphIdArray[t - i.startCount[o] + (i.idRangeOffset[o] >> 1) - (i.idRangeOffset.length - o)] : t + i.idDelta[o]);
    }
    if (12 == i.format) {
      if (t > i.groups[i.groups.length - 1][1]) return 0;
      for (var s = 0; s < i.groups.length; s++) {
        var l = i.groups[s];
        if (l[0] <= t && t <= l[1]) return l[2] + (t - l[0]);
      }
      return 0;
    }
    throw "unknown cmap table format " + i.format;
  }, v.U.glyphToPath = function (e, t) {
    var r = {
      cmds: [],
      crds: []
    };
    if (e.SVG && e.SVG.entries[t]) {
      var n = e.SVG.entries[t];
      return null == n ? r : ("string" == typeof n && (n = v.SVG.toPath(n), e.SVG.entries[t] = n), n);
    }
    if (e.CFF) {
      var i = {
        x: 0,
        y: 0,
        stack: [],
        nStems: 0,
        haveWidth: !1,
        width: e.CFF.Private ? e.CFF.Private.defaultWidthX : 0,
        open: !1
      };
      v.U._drawCFF(e.CFF.CharStrings[t], i, e.CFF, r);
    } else e.glyf && v.U._drawGlyf(t, e, r);
    return r;
  }, v.U._drawGlyf = function (e, t, r) {
    var n = t.glyf[e];
    null == n && (n = t.glyf[e] = v.glyf._parseGlyf(t, e)), null != n && (n.noc > -1 ? v.U._simpleGlyph(n, r) : v.U._compoGlyph(n, t, r));
  }, v.U._simpleGlyph = function (e, t) {
    for (var r = 0; r < e.noc; r++) {
      for (var n = 0 == r ? 0 : e.endPts[r - 1] + 1, i = e.endPts[r], o = n; o <= i; o++) {
        var s = o == n ? i : o - 1,
          a = o == i ? n : o + 1,
          l = 1 & e.flags[o],
          c = 1 & e.flags[s],
          d = 1 & e.flags[a],
          h = e.xs[o],
          p = e.ys[o];
        if (o == n) if (l) {
          if (!c) {
            v.U.P.moveTo(t, h, p);
            continue;
          }
          v.U.P.moveTo(t, e.xs[s], e.ys[s]);
        } else c ? v.U.P.moveTo(t, e.xs[s], e.ys[s]) : v.U.P.moveTo(t, (e.xs[s] + h) / 2, (e.ys[s] + p) / 2);
        l ? c && v.U.P.lineTo(t, h, p) : d ? v.U.P.qcurveTo(t, h, p, e.xs[a], e.ys[a]) : v.U.P.qcurveTo(t, h, p, (h + e.xs[a]) / 2, (p + e.ys[a]) / 2);
      }
      v.U.P.closePath(t);
    }
  }, v.U._compoGlyph = function (e, t, r) {
    for (var n = 0; n < e.parts.length; n++) {
      var i = {
          cmds: [],
          crds: []
        },
        o = e.parts[n];
      v.U._drawGlyf(o.glyphIndex, t, i);
      for (var s = o.m, a = 0; a < i.crds.length; a += 2) {
        var l = i.crds[a],
          c = i.crds[a + 1];
        r.crds.push(l * s.a + c * s.b + s.tx), r.crds.push(l * s.c + c * s.d + s.ty);
      }
      for (var a = 0; a < i.cmds.length; a++) r.cmds.push(i.cmds[a]);
    }
  }, v.U._getGlyphClass = function (e, t) {
    var r = v._lctf.getInterval(t, e);
    return -1 == r ? 0 : t[r + 2];
  }, v.U.getPairAdjustment = function (e, t, r) {
    if (e.GPOS) {
      for (var n = null, i = 0; i < e.GPOS.featureList.length; i++) {
        var o = e.GPOS.featureList[i];
        if ("kern" == o.tag) for (var s = 0; s < o.tab.length; s++) 2 == e.GPOS.lookupList[o.tab[s]].ltype && (n = e.GPOS.lookupList[o.tab[s]]);
      }
      if (n) for (var a = 0, i = 0; i < n.tabs.length; i++) {
        var l = n.tabs[i],
          c = v._lctf.coverageIndex(l.coverage, t);
        if (-1 != c) {
          var d;
          if (1 == l.format) {
            for (var h = l.pairsets[c], s = 0; s < h.length; s++) h[s].gid2 == r && (d = h[s]);
            if (null == d) continue;
          } else if (2 == l.format) var p = v.U._getGlyphClass(t, l.classDef1),
            u = v.U._getGlyphClass(r, l.classDef2),
            d = l.matrix[p][u];
          return d.val1[2];
        }
      }
    }
    if (e.kern) {
      var g = e.kern.glyph1.indexOf(t);
      if (-1 != g) {
        var m = e.kern.rval[g].glyph2.indexOf(r);
        if (-1 != m) return e.kern.rval[g].vals[m];
      }
    }
    return 0;
  }, v.U.processLFList = function (e) {
    for (var t = e.llist, r = e.flist, n = e.gls, i = e.str, o = '\n\t" ,.:;!?()  ،', s = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬", a = "ꡲ્૗", l = 0; l < n.length; l++) {
      var c = n[l],
        d = 0 == l || -1 != o.indexOf(i[l - 1]),
        h = l == n.length - 1 || -1 != o.indexOf(i[l + 1]);
      d || -1 == s.indexOf(i[l - 1]) || (d = !0), h || -1 == s.indexOf(i[l]) || (h = !0), h || -1 == a.indexOf(i[l + 1]) || (h = !0), d || -1 == a.indexOf(i[l]) || (d = !0);
      var p = null;
      p = d ? h ? "isol" : "init" : h ? "fina" : "medi";
      for (var u = 0; u < r.length; u++) if (r[u].tag == p) for (var g = 0; g < r[u].tab.length; g++) {
        var m;
        1 == (m = t[r[u].tab[g]]).ltype && v.U._applyType1(n, l, m);
      }
    }
    for (var f = ["rlig", "liga", "mset"], l = 0; l < n.length; l++) for (var c = n[l], y = Math.min(3, n.length - l - 1), u = 0; u < r.length; u++) {
      var b = r[u];
      if (-1 != f.indexOf(b.tag)) for (var g = 0; g < b.tab.length; g++) for (var m = t[b.tab[g]], x = 0; x < m.tabs.length; x++) if (null != m.tabs[x]) {
        var C = v._lctf.coverageIndex(m.tabs[x].coverage, c);
        if (-1 != C) if (4 == m.ltype) for (var S = m.tabs[x].vals[C], A = 0; A < S.length; A++) {
          var w = S[A],
            E = w.chain.length;
          if (!(E > y)) {
            for (var k = !0, O = 0; O < E; O++) w.chain[O] != n[l + (1 + O)] && (k = !1);
            if (k) {
              n[l] = w.nglyph;
              for (var O = 0; O < E; O++) n[l + O + 1] = -1;
            }
          }
        } else if (5 == m.ltype) {
          var D = m.tabs[x];
          if (2 != D.fmt) continue;
          for (var P = v._lctf.getInterval(D.cDef, c), M = D.cDef[P + 2], I = D.scset[M], T = 0; T < I.length; T++) {
            var L,
              R = I[T].input;
            if (!(R.length > y)) for (var k = !0, O = 0; O < R.length; O++) {
              var B = v._lctf.getInterval(D.cDef, n[l + 1 + O]);
              if (-1 == P && D.cDef[B + 2] != R[O]) {
                k = !1;
                break;
              }
            }
          }
        }
      }
    }
  }, v.U.stringToGlyphs = function (e, t) {
    for (var r = Array.isArray(e) ? e : [e], n = [], i = [], o = 0; o < t.length; o++) {
      var s = t.codePointAt(o);
      s > 65535 && o++;
      var a = r.find(e => v.U.codeToGlyph(e, s));
      a ? (n.push(v.U.codeToGlyph(a, s)), i.push(a)) : (n.push(0), i.push(r[0]));
    }
    var l = b(r),
      c = l.llist,
      d = l.flist;
    return v.U.processLFList({
      llist: c,
      flist: d,
      gls: n,
      str: t
    }), {
      gls: n,
      glsFonts: i
    };
  }, v.U._applyType1 = function (e, t, r) {
    for (var n = e[t], i = 0; i < r.tabs.length; i++) {
      var o = r.tabs[i],
        s = v._lctf.coverageIndex(o.coverage, n);
      -1 != s && (1 == o.fmt ? e[t] = e[t] + o.delta : e[t] = o.newg[s]);
    }
  }, v.U.glyphsToPath = function (e, t) {
    for (var r = {
        cmds: [],
        crds: []
      }, n = 0, i = 0; i < e.length; i++) {
      var o = t[i],
        s = e[i];
      if (-1 != s) {
        for (var a = i < e.length - 1 && -1 != e[i + 1] ? e[i + 1] : 0, l = v.U.glyphToPath(o, s), c = 0; c < l.crds.length; c += 2) r.crds.push(l.crds[c] + n), r.crds.push(l.crds[c + 1]);
        for (var d = 0; d < l.cmds.length; d++) r.cmds.push(l.cmds[d]);
        n += o.hmtx.aWidth[s], i < e.length - 1 && (n += v.U.getPairAdjustment(o, s, a));
      }
    }
    return r.width = n, r;
  }, v.U.pathToSVG = function (e, t) {
    null == t && (t = 5);
    for (var r = [], n = 0, i = {
        M: 2,
        L: 2,
        Q: 4,
        C: 6
      }, o = 0; o < e.cmds.length; o++) {
      var s = e.cmds[o],
        a = n + (i[s] ? i[s] : 0);
      for (r.push(s); n < a;) {
        var l = e.crds[n++];
        r.push(parseFloat(l.toFixed(t)) + (n == a ? "" : " "));
      }
    }
    return r.join("");
  }, v.U.pathToContext = function (e, t) {
    for (var r = 0, n = e.crds, i = 0; i < e.cmds.length; i++) {
      var o = e.cmds[i];
      "M" == o ? (t.moveTo(n[r], n[r + 1]), r += 2) : "L" == o ? (t.lineTo(n[r], n[r + 1]), r += 2) : "C" == o ? (t.bezierCurveTo(n[r], n[r + 1], n[r + 2], n[r + 3], n[r + 4], n[r + 5]), r += 6) : "Q" == o ? (t.quadraticCurveTo(n[r], n[r + 1], n[r + 2], n[r + 3]), r += 4) : "#" == o.charAt(0) ? (t.beginPath(), t.fillStyle = o) : "Z" == o ? t.closePath() : "X" == o && t.fill();
    }
  }, v.U.P = {}, v.U.P.moveTo = function (e, t, r) {
    e.cmds.push("M"), e.crds.push(t, r);
  }, v.U.P.lineTo = function (e, t, r) {
    e.cmds.push("L"), e.crds.push(t, r);
  }, v.U.P.curveTo = function (e, t, r, n, i, o, s) {
    e.cmds.push("C"), e.crds.push(t, r, n, i, o, s);
  }, v.U.P.qcurveTo = function (e, t, r, n, i) {
    e.cmds.push("Q"), e.crds.push(t, r, n, i);
  }, v.U.P.closePath = function (e) {
    e.cmds.push("Z");
  }, v.U._drawCFF = function (e, t, r, n) {
    for (var i = t.stack, o = t.nStems, s = t.haveWidth, a = t.width, l = t.open, c = 0, d = t.x, h = t.y, p = 0, u = 0, g = 0, m = 0, f = 0, y = 0, b = 0, x = 0, C = 0, S = 0, A = {
        val: 0,
        size: 0
      }; c < e.length;) {
      v.CFF.getCharString(e, c, A);
      var w = A.val,
        E;
      if (c += A.size, "o1" == w || "o18" == w) (E = i.length % 2 != 0) && !s && (a = i.shift() + r.Private.nominalWidthX), o += i.length >> 1, i.length = 0, s = !0;else if ("o3" == w || "o23" == w) {
        var E;
        (E = i.length % 2 != 0) && !s && (a = i.shift() + r.Private.nominalWidthX), o += i.length >> 1, i.length = 0, s = !0;
      } else if ("o4" == w) i.length > 1 && !s && (a = i.shift() + r.Private.nominalWidthX, s = !0), l && v.U.P.closePath(n), h += i.pop(), v.U.P.moveTo(n, d, h), l = !0;else if ("o5" == w) for (; i.length > 0;) d += i.shift(), h += i.shift(), v.U.P.lineTo(n, d, h);else if ("o6" == w || "o7" == w) for (var k = i.length, O = "o6" == w, D = 0; D < k; D++) {
        var P = i.shift();
        O ? d += P : h += P, O = !O, v.U.P.lineTo(n, d, h);
      } else if ("o8" == w || "o24" == w) {
        for (var k = i.length, M = 0; M + 6 <= k;) p = d + i.shift(), u = h + i.shift(), g = p + i.shift(), m = u + i.shift(), d = g + i.shift(), h = m + i.shift(), v.U.P.curveTo(n, p, u, g, m, d, h), M += 6;
        "o24" == w && (d += i.shift(), h += i.shift(), v.U.P.lineTo(n, d, h));
      } else {
        if ("o11" == w) break;
        if ("o1234" == w || "o1235" == w || "o1236" == w || "o1237" == w) "o1234" == w && (u = h, g = (p = d + i.shift()) + i.shift(), S = m = u + i.shift(), y = m, x = h, d = (b = (f = (C = g + i.shift()) + i.shift()) + i.shift()) + i.shift(), v.U.P.curveTo(n, p, u, g, m, C, S), v.U.P.curveTo(n, f, y, b, x, d, h)), "o1235" == w && (p = d + i.shift(), u = h + i.shift(), g = p + i.shift(), m = u + i.shift(), C = g + i.shift(), S = m + i.shift(), f = C + i.shift(), y = S + i.shift(), b = f + i.shift(), x = y + i.shift(), d = b + i.shift(), h = x + i.shift(), i.shift(), v.U.P.curveTo(n, p, u, g, m, C, S), v.U.P.curveTo(n, f, y, b, x, d, h)), "o1236" == w && (p = d + i.shift(), u = h + i.shift(), g = p + i.shift(), S = m = u + i.shift(), y = m, b = (f = (C = g + i.shift()) + i.shift()) + i.shift(), x = y + i.shift(), d = b + i.shift(), v.U.P.curveTo(n, p, u, g, m, C, S), v.U.P.curveTo(n, f, y, b, x, d, h)), "o1237" == w && (p = d + i.shift(), u = h + i.shift(), g = p + i.shift(), m = u + i.shift(), C = g + i.shift(), S = m + i.shift(), f = C + i.shift(), y = S + i.shift(), b = f + i.shift(), x = y + i.shift(), Math.abs(b - d) > Math.abs(x - h) ? d = b + i.shift() : h = x + i.shift(), v.U.P.curveTo(n, p, u, g, m, C, S), v.U.P.curveTo(n, f, y, b, x, d, h));else if ("o14" == w) {
          if (i.length > 0 && !s && (a = i.shift() + r.nominalWidthX, s = !0), 4 == i.length) {
            var I = 0,
              T = i.shift(),
              L = i.shift(),
              R = i.shift(),
              B = i.shift(),
              F = v.CFF.glyphBySE(r, R),
              j = v.CFF.glyphBySE(r, B);
            v.U._drawCFF(r.CharStrings[F], t, r, n), t.x = T, t.y = L, v.U._drawCFF(r.CharStrings[j], t, r, n);
          }
          l && (v.U.P.closePath(n), l = !1);
        } else if ("o19" == w || "o20" == w) {
          var E;
          (E = i.length % 2 != 0) && !s && (a = i.shift() + r.Private.nominalWidthX), o += i.length >> 1, i.length = 0, s = !0, c += o + 7 >> 3;
        } else if ("o21" == w) i.length > 2 && !s && (a = i.shift() + r.Private.nominalWidthX, s = !0), h += i.pop(), d += i.pop(), l && v.U.P.closePath(n), v.U.P.moveTo(n, d, h), l = !0;else if ("o22" == w) i.length > 1 && !s && (a = i.shift() + r.Private.nominalWidthX, s = !0), d += i.pop(), l && v.U.P.closePath(n), v.U.P.moveTo(n, d, h), l = !0;else if ("o25" == w) {
          for (; i.length > 6;) d += i.shift(), h += i.shift(), v.U.P.lineTo(n, d, h);
          p = d + i.shift(), u = h + i.shift(), g = p + i.shift(), m = u + i.shift(), d = g + i.shift(), h = m + i.shift(), v.U.P.curveTo(n, p, u, g, m, d, h);
        } else if ("o26" == w) for (i.length % 2 && (d += i.shift()); i.length > 0;) p = d, u = h + i.shift(), d = g = p + i.shift(), h = (m = u + i.shift()) + i.shift(), v.U.P.curveTo(n, p, u, g, m, d, h);else if ("o27" == w) for (i.length % 2 && (h += i.shift()); i.length > 0;) u = h, g = (p = d + i.shift()) + i.shift(), m = u + i.shift(), d = g + i.shift(), h = m, v.U.P.curveTo(n, p, u, g, m, d, h);else if ("o10" == w || "o29" == w) {
          var _ = "o10" == w ? r.Private : r;
          if (0 == i.length) console.log("error: empty stack");else {
            var N = i.pop(),
              z = _.Subrs[N + _.Bias];
            t.x = d, t.y = h, t.nStems = o, t.haveWidth = s, t.width = a, t.open = l, v.U._drawCFF(z, t, r, n), d = t.x, h = t.y, o = t.nStems, s = t.haveWidth, a = t.width, l = t.open;
          }
        } else if ("o30" == w || "o31" == w) {
          var k,
            H = i.length,
            M = 0,
            W = "o31" == w;
          for (M += H - (k = -3 & H); M < k;) W ? (u = h, g = (p = d + i.shift()) + i.shift(), h = (m = u + i.shift()) + i.shift(), k - M == 5 ? (d = g + i.shift(), M++) : d = g, W = !1) : (p = d, u = h + i.shift(), g = p + i.shift(), m = u + i.shift(), d = g + i.shift(), k - M == 5 ? (h = m + i.shift(), M++) : h = m, W = !0), v.U.P.curveTo(n, p, u, g, m, d, h), M += 4;
        } else {
          if ("o" == (w + "").charAt(0)) throw console.log("Unknown operation: " + w, e), w;
          i.push(w);
        }
      }
    }
    t.x = d, t.y = h, t.nStems = o, t.haveWidth = s, t.width = a, t.open = l;
  };
  const x = v;
  var C = r(73524),
    S = r(39958),
    A = r(60693);
  class w {
    constructor() {
      (0, n.A)(this, "cached", {});
    }
    getAppliedFontsFromElement(e) {
      var t = g._T(e, "font-family"),
        r = this.isElementBold(e),
        n = "italic" == g._T(e, "font-style");
      return this.getAppliedFonts(t, r, n);
    }
    splitFamilyNames(e) {
      return e.split(",").map(e => f().trim(f().trim(e), '"'));
    }
    getAppliedFonts(e, t, r) {
      var n = S.A.getFontsInfo(),
        i,
        o = this.splitFamilyNames(e).filter(e => n.isFontLoadable(e));
      return Promise.all(o.map(e => {
        var n;
        return S.A.getFontsDataLoader().loadFontDataIfRequire(e, t, r);
      })).then(e => e.filter(e => e).map(e => {
        if (!this.cached[e.fullName]) {
          var t = {
            name: e.fullName,
            font: v.parse(e.data)
          };
          this.cached[e.fullName] = t, console.log("fonts parsed no cache hit");
        }
        return this.cached[e.fullName];
      }));
    }
    isBoldAlreadyForGlyph(e, t) {
      var r = S.A.getFontsInfo();
      return t == e[0].font && r.isFontBold(e[0].name);
    }
    isItalicAlreadyForGlyph(e, t) {
      var r = S.A.getFontsInfo();
      return t == e[0].font && r.isTextModeFontItalic(e[0].name);
    }
    buildTextBlock(e) {
      var t = e.element,
        r = e.baseRect,
        n = e.notNormalText,
        i = e.adjustForChromeHack,
        o = e.rectContainerText,
        s = e.dzc;
      return t.textContent ? this.getAppliedFontsFromElement(t).then(a => {
        for (var l = a.map(e => e.font), c = C.Ay.getUnistringUncached(t.textContent), d, h = "", p = [], g = 0, m, f = 0; f < c.length + 1; f++) {
          var y = f >= c.length,
            v = [],
            b = null;
          if (!y) {
            v = c.codePointsAt(f);
            var S = this.findGlyph(a, v);
            S && (b = S[0]);
          }
          var w = !1;
          if (e.lineWrap && !y) {
            var E = A.T.getBCRect(u.A.rangeFrom2Indexes(t, f, f + 1), s);
            void 0 !== m && E.top > m - 1 && (w = !0), m = E.bottom;
          }
          var k = !("path" != d || b && !y && !w || !h),
            O = !("text" != d || !(b || y || w) || !h),
            D = !k && !O,
            P = k || O;
          if (k) {
            var M = x.U.stringToGlyphs(l, h),
              I = M.gls,
              T = M.glsFonts,
              L = this.getRect(t, r, c.rawIndexAt(g), c.rawIndexAt(f), o, e.lineWrap, s);
            p.push({
              type: "vector-text",
              rect: L,
              text: h,
              path: x.U.glyphsToPath(I, T),
              fontSize: u.A.getComputedStyleAsNumber(t, "font-size"),
              color: u.A.getComputedStyle(t, "color"),
              unitsPerEm: T[0].head.unitsPerEm,
              textWidth: u.A.measureInnerOneLineTextWidth(t),
              textDecoration: this.getTextDecoration(t),
              isItalic: !this.isItalicAlreadyForGlyph(a, T[0]) && this.isElementItalic(t),
              isBold: !this.isBoldAlreadyForGlyph(a, T[0]) && this.isElementBold(t),
              containerRect: A.T.getBCRect(t, r.zc),
              adjustForChromeHack: i
            });
          }
          if (O) {
            var R = this.getRect(t, r, c.rawIndexAt(g), c.rawIndexAt(f), void 0, e.lineWrap, s);
            p.push({
              isHidden: this.isElementHidden(t),
              type: "text",
              rect: R,
              text: h,
              fontWeight: u.A.getComputedStyle(t, "font-weight"),
              fontSize: u.A.getComputedStyleAsNumber(t, "font-size"),
              fontFamily: u.A.getComputedStyle(t, "font-family"),
              isCustomLoadedFont: a.length > 0,
              fontStyle: u.A.getComputedStyle(t, "font-style"),
              color: u.A.getComputedStyle(t, "color"),
              textDecoration: u.A.getComputedStyle(t, "text-decoration"),
              notNormalText: !!n,
              isRtl: "rtl" == u.A.getComputedStyle(t, "direction"),
              containerRect: A.T.getBCRect(t, r.zc)
            });
          }
          D && (h += c.clusterAt(f)), P && (g = f, h = c.clusterAt(f)), d = b ? "path" : "text";
        }
        var B = this.getRect(t, r, 0, t.textContent.length, void 0, e.lineWrap, s),
          F;
        return {
          type: "composite-text",
          rect: A.T.getBCRectToRect(o || t, r),
          textWidth: A.T.widthOf(B),
          blocks: p,
          bgColor: u.A.getComputedStyle(t, "background-color")
        };
      }) : Promise.resolve({
        type: "empty-text",
        rect: A.T.getBCRectToRect(t, r)
      });
    }
    isElementHidden(e) {
      return "none" == g._T(e, "display") || "hidden" == g._T(e, "visibility") || "collapsed" == g._T(e, "visibility");
    }
    isElementBold(e) {
      return "bold" == g._T(e, "font-weight") || "700" == g._T(e, "font-weight");
    }
    getTextDecoration(e) {
      var t = g._T(e, "text-decoration");
      return t.includes("underline") ? "underline" : t.includes("line-through") ? "line-through" : null;
    }
    isElementItalic(e) {
      return g._T(e, "font-style").includes("italic");
    }
    getRect(e, t, r, n, i, o, s) {
      var a = A.T.getBCRect(u.A.rangeFrom2Indexes(e, r, n), s),
        l = a.left,
        c = a.right,
        d = A.T.getBCRect(i || e, s);
      return o ? A.T.buildBcRect(l - t.left, a.top - t.top, c - t.left, a.bottom - t.top, t.zc) : A.T.buildBcRect(l - t.left, d.top - t.top, c - t.left, d.bottom - t.top, t.zc);
    }
    findGlyph(e, t) {
      if (t.length > 1) return null;
      for (var r = 0; r < e.length; r++) {
        var n = e[r].font,
          i = v.U.codeToGlyph(n, t[0]);
        if (i) return [i, n];
      }
      return null;
    }
  }
  const E = new w();
  class k {
    find(e, t, r) {
      return u.A.isInlineMathContainer(e) || u.A.isDiagram(e) ? A.T.expandAll(A.T.getBCRect(e, r), t) : u.A.isAlignBlock(e) || u.A.isGatherBlock(e) ? this.findForAlignAndGather(e, t, r) : u.A.isZSchemaBlock(e) ? A.T.expandAll(A.T.getBCRect(e, r), t) : this.findForMathContainer(e, t, r);
    }
    findForAlignAndGather(e, t, r) {
      var n,
        i = g.nB(e, "align-symbol-v2") ? g.YG(g.YG(e, ">matrix>.align-grid>.align-row").slice(0, 1), ">.align-cell:not(.non-select)") : g.YG(g.YG(e, ">matrix>table>tbody>tr").slice(0, 1), ">td:not(.non-select)"),
        o = i.slice(0, 1)[0],
        s = i.slice(-1)[0],
        a = {
          left: 1e4,
          right: 0
        };
      a = {
        left: (a = {
          left: Math.min(A.T.getBCRect(o, r).left, a.left),
          right: a.right
        }).left,
        right: Math.max(A.T.getBCRect(s, r).right, a.right)
      };
      var l = A.T.getBCRect(e, r);
      return A.T.expandAll(A.T.buildBcRect(a.left, l.top, a.right, l.bottom, r), t);
    }
    findForMathContainer(e, t, r) {
      if (g.YG(e, ">editarea>lazy-line").length > 0) return A.T.getBCRect(e, r);
      var n = {
        left: 1e4,
        right: 0
      };
      g.YG(e, ">editarea>line").forEach((e, t) => {
        var i = g.jS(e, "BLOCK".concat(", ", "OPENSYMBOLBLOCK", ", ", "CLOSESYMBOLBLOCK", ", ", "COMPOSITEBLOCK")),
          o = i.slice(0, 1)[0],
          s = i.slice(-1)[0];
        o && s && (n = {
          left: (n = {
            left: Math.min(A.T.getBCRect(o, r).left, n.left),
            right: n.right
          }).left,
          right: Math.max(A.T.getBCRect(s, r).right, n.right)
        });
      });
      var i = A.T.getBCRect(e, r),
        o = i.right - i.left;
      return 1e4 == n.left && (n.left = i.left + o / 2 - 10, n.right = i.left + o / 2 + 10), A.T.expandAll(A.T.buildBcRect(n.left, i.top, n.right, i.bottom, r), t);
    }
  }
  const O = new k();
  var D = r(98667),
    P = r(88925),
    M = r(84258),
    I = r(39314),
    T = r(62095);
  function L(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function R(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? L(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function B(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = F(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function F(e, t) {
    if (e) {
      if ("string" == typeof e) return j(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0;
    }
  }
  function j(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  class _ extends Error {
    constructor(e) {
      super(), (0, n.A)(this, "lineCount", void 0), this.lineCount = e;
    }
  }
  class N {
    constructor(e, t, r) {
      (0, n.A)(this, "dgGenerator", void 0), (0, n.A)(this, "dzc", void 0), (0, n.A)(this, "ctx", void 0), this.dgGenerator = e, this.dzc = t, this.ctx = r;
    }
    generate(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        var i, o, a, l, c, d;
        return s().wrap(function n(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              i = O.find(e, t, r.dzc), o = B(g.YG(e, "[data-math-source-symbol]"));
              try {
                for (o.s(); !(a = o.n()).done;) l = a.value, c = A.T.getBCRect(l, r.dzc), i = A.T.buildBcRect(Math.min(i.left, c.left - t), Math.min(i.top, c.top - t), Math.max(i.right, c.right + t), Math.max(i.bottom, c.bottom + t), r.dzc);
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
              return s.next = 5, r.findAndGenerateEditAreas(e, i, !1, r.ctx);
            case 5:
              return d = s.sent, s.abrupt("return", {
                baseRect: i,
                areas: d,
                drawings: r.findAndGenerateSvgs(e, i)
              });
            case 7:
            case "end":
              return s.stop();
          }
        }, n);
      }))();
    }
    generateDiagramTexts(e) {
      var t = this;
      return (0, i.A)(s().mark(function r() {
        var n;
        return s().wrap(function r(i) {
          for (;;) switch (i.prev = i.next) {
            case 0:
              return n = A.T.getBCRect(e, t.dzc), i.t0 = n, i.next = 4, t.findAndGenerateEditAreasForDiagramTexts(e, n, t.ctx);
            case 4:
              return i.t1 = i.sent, i.t2 = [], i.abrupt("return", {
                baseRect: i.t0,
                areas: i.t1,
                drawings: i.t2
              });
            case 7:
            case "end":
              return i.stop();
          }
        }, r);
      }))();
    }
    cloneEditorIfTransform(e, t, r) {
      var n = this,
        o = g.YG(e, ">diagram-editors"),
        a = o[0].cloneNode(!1);
      return g.hS(a, "opacity", "0"), g.UY(e, a), (0, p._q)(g.YG(o, ">position-container"), function () {
        var e = (0, i.A)(s().mark(function e(i) {
          var o, l, c, d;
          return s().wrap(function e(s) {
            for (;;) switch (s.prev = s.next) {
              case 0:
                if (o = n.getTransformRotation(i), l = n.getTransformSkewX(i), c = n.getTransformFlipX(i), !(o || l || c)) {
                  s.next = 7;
                  break;
                }
                return d = i.cloneNode(!0), a.appendChild(d), s.abrupt("return", t(d, {
                  angle: o,
                  skewX: l,
                  flipX: c
                }));
              case 7:
                return s.abrupt("return", r(i));
              case 8:
              case "end":
                return s.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }()).then(e => e).finally(() => {
        console.log("cloned dg editors removed!"), g.g5(a);
      });
    }
    findAndGenerateEditAreasForDiagramTexts(e, t, r) {
      var n = this;
      return this.cloneEditorIfTransform(e, function () {
        var e = (0, i.A)(s().mark(function e(i, o) {
          var a, l, c, d, h, p, u, m, f;
          return s().wrap(function e(s) {
            for (;;) switch (s.prev = s.next) {
              case 0:
                return a = o.angle, l = o.flipX, c = o.skewX, d = g.YG(i, ">dg-editor-container"), h = g.YG(d, ">editarea")[0], "center" != (p = n.parseAnchor(i)) && (u = A.T.getBCRectToRect(d[0], t), m = {
                  x: u.left + A.T.widthOf(u) / 2,
                  y: u.top + A.T.heightOf(u) / 2
                }, g.hS(i, "left", "".concat(m.x, "px")), g.hS(i, "top", "".concat(m.y, "px"))), g.hS(i, "transform", "rotate(0)"), g.hS(d, "transform", "translate(-50%, -50%)"), s.next = 9, n.generateEditArea(h, t, !g.nB(h, "non-wrap"), r);
              case 9:
                return (f = s.sent).rotation = a, f.skewX = c, f.flipX = l, s.abrupt("return", f);
              case 14:
              case "end":
                return s.stop();
            }
          }, e);
        }));
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(), function () {
        var e = (0, i.A)(s().mark(function e(i) {
          var o, a;
          return s().wrap(function e(s) {
            for (;;) switch (s.prev = s.next) {
              case 0:
                return o = g.YG(i, ">dg-editor-container"), a = g.YG(o, ">editarea")[0], s.next = 4, n.generateEditArea(a, t, !g.nB(a, "non-wrap"), r);
              case 4:
                return s.abrupt("return", s.sent);
              case 5:
              case "end":
                return s.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }());
    }
    parseAnchor(e) {
      return e.getAttribute("data-anchor") || "center";
    }
    getTransformSkewX(e) {
      return Number.parseFloat(e.getAttribute("data-skewx"));
    }
    getTransformRotation(e) {
      return Number.parseFloat(e.getAttribute("data-rotation"));
    }
    getTransformFlipX(e) {
      return "true" == e.getAttribute("data-flipx");
    }
    generateSvg(e, t) {
      var r = A.T.getBCRectToRect(e, t);
      return {
        type: "drawing",
        viewBox: g.vK(e, "viewBox"),
        rect: r,
        elements: g.jS(e).map(e => this.generateSvgElement(e)).filter(e => e),
        forceNestedSvg: !0
      };
    }
    getSvgElementStyle(e) {
      var t = g._T(e, "stroke-width"),
        r = Number.parseFloat(g._T(e, "stroke-opacity")),
        n = Number.parseFloat(g._T(e, "fill-opacity"));
      r = isNaN(r) ? 1 : r, n = isNaN(n) ? 1 : n;
      var i = I.A.getHtmlColorWithOpacity(g._T(e, "stroke"), !0),
        o = I.A.getHtmlColorWithOpacity(g._T(e, "fill"), !0);
      return r *= i.opacity, n *= o.opacity, {
        strokeWidth: t,
        stroke: i.color,
        strokeOpacity: r,
        fill: o.color,
        fillOpacity: n
      };
    }
    generateSvgElement(e) {
      var t = e.tagName.toLowerCase();
      switch (t) {
        case "g":
          return {
            type: "group",
            transform: g.vK(e, "transform"),
            elements: g.jS(e).map(e => this.generateSvgElement(e)).filter(e => e)
          };
        case "path":
          return R({
            type: "path",
            d: g.vK(e, "d")
          }, this.getSvgElementStyle(e));
        case "polygon":
          return R({
            type: "polygon",
            points: g.vK(e, "points")
          }, this.getSvgElementStyle(e));
        case "polyline":
          return R({
            type: "polyline",
            points: g.vK(e, "points")
          }, this.getSvgElementStyle(e));
        case "rect":
          return R({
            type: "rect",
            x: Number.parseFloat(g.vK(e, "x")),
            y: Number.parseFloat(g.vK(e, "y")),
            width: Number.parseFloat(g.vK(e, "width")),
            height: Number.parseFloat(g.vK(e, "height")),
            transform: g.vK(e, "transform")
          }, this.getSvgElementStyle(e));
        case "circle":
          return R({
            type: "circle",
            cx: g.vK(e, "cx"),
            cy: g.vK(e, "cy"),
            r: g.vK(e, "r")
          }, this.getSvgElementStyle(e));
        case "ellipse":
          return R({
            type: "ellipse",
            cx: g.vK(e, "cx"),
            cy: g.vK(e, "cy"),
            rx: g.vK(e, "rx"),
            ry: g.vK(e, "ry")
          }, this.getSvgElementStyle(e));
        default:
          throw new Error("".concat(t, " not supported"));
      }
    }
    findFirstLevelEditors(e) {
      return z(e, "editarea, editarea-block, editarea-line");
    }
    findAndGenerateEditAreas(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function i() {
        var a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, (0, p._q)(o.findFirstLevelEditors(e), e => o.generateEditArea(e, t, r, n));
            case 2:
              if (a = s.sent, !u.A.isZSchemaBlock(e)) {
                s.next = 5;
                break;
              }
              return s.abrupt("return", o.generateLeftRightBracketsForZSpec(e, t, a));
            case 5:
              return s.abrupt("return", a);
            case 6:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateLeftRightBracketsForZSpec(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a, l, c, d, h;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (o = g.YG(e, ">.role-name-section>.role-name-content>span").slice(0, 1)[0], a = g.YG(e, ">.role-name-section>.role-name-content>span").slice(1, 2)[0], !o || "none" == g._T(o, "display")) {
                s.next = 22;
                break;
              }
              return l = A.T.getBCRectToRect(o, t), s.t0 = l, s.next = 7, n.buildTextBlock(o, t, !1, !1);
            case 7:
              return s.t1 = s.sent, s.t2 = [s.t1], s.t3 = {
                blocks: s.t2
              }, s.t4 = [s.t3], c = {
                rect: s.t0,
                lines: s.t4
              }, d = A.T.getBCRectToRect(a, t), s.t5 = d, s.next = 16, n.buildTextBlock(a, t, !1, !1);
            case 16:
              return s.t6 = s.sent, s.t7 = [s.t6], s.t8 = {
                blocks: s.t7
              }, s.t9 = [s.t8], h = {
                rect: s.t5,
                lines: s.t9
              }, s.abrupt("return", [c, h].concat(r));
            case 22:
              return s.abrupt("return", r);
            case 23:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    findAndGenerateSvgs(e, t) {
      if (u.A.isZSchemaBlock(e)) return this.generateZSchemaBorder(e, t);
      var r = z(e, "editarea, editarea-block, editarea-line");
      return z(e, "svg").filter(e => !r.some(t => g.rm(t, e).length > 0)).map(e => this.generateSvg(e, t));
    }
    generateZSchemaBorder(e, t) {
      var r = this.buildLineFromBorderPosition(g.YG(e, ">.role-another-top-border")[0], t, "top")[0],
        n = this.buildLineFromBorderPosition(g.YG(e, ">.role-another-top-border")[0], t, "left")[0],
        i = this.buildLineFromBorderPosition(g.YG(e, ">.role-dec-pred-section")[0], t, "top")[0],
        o = this.buildLineFromBorderPosition(g.YG(e, ">.role-dec-pred-section")[0], t, "left")[0],
        s = this.buildLineFromBorderPosition(g.YG(e, ">.role-dec-pred-section")[0], t, "bottom")[0],
        a = this.buildLineFromBorderPosition(g.YG(e, ">.role-dec-pred-section>.role-pred-border")[0], t, "top")[0];
      return this.splitLineByZNameSection(r, e, t).concat(this.splitLineByZNameSection(i, e, t)).concat([n, o, s, a].filter(e => e));
    }
    splitLineByZNameSection(e, t, r) {
      if (!e) return [];
      var n = g.YG(t, ">.role-name-section>.role-name-content");
      if (!n[0]) return [e];
      var i = A.T.getBCRectToRect(n[0], r),
        o = f().cloneDeep(e),
        s = f().cloneDeep(e);
      return o.x2 = i.left, s.x1 = i.right, [o, s];
    }
    generateEditArea(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function i() {
        var a, l, c;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (a = A.T.getBCRectToRect(e, t), "EDITAREA-BLOCK" != e.tagName) {
                s.next = 10;
                break;
              }
              return s.t0 = a, s.next = 5, o.buildTextBlock(e, t, !1, r);
            case 5:
              return s.t1 = s.sent, s.t2 = [s.t1], s.t3 = {
                blocks: s.t2
              }, s.t4 = [s.t3], s.abrupt("return", {
                rect: s.t0,
                lines: s.t4
              });
            case 10:
              if ("EDITAREA-LINE" != e.tagName) {
                s.next = 17;
                break;
              }
              return s.t5 = a, s.next = 14, o.generateLine(e, t, r, n);
            case 14:
              return s.t6 = s.sent, s.t7 = [s.t6], s.abrupt("return", {
                rect: s.t5,
                lines: s.t7
              });
            case 17:
              if (l = g.YG(e, ">line,>area-container>line,>lazy-line,>area-container>lazy-line").length, !(n.throwIfLinesMoreThan && l > n.throwIfLinesMoreThan)) {
                s.next = 20;
                break;
              }
              throw new _(l);
            case 20:
              return s.next = 22, o.generateLines(e, t, r, n);
            case 22:
              return c = s.sent, s.abrupt("return", {
                rect: a,
                lines: c
              });
            case 24:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateLines(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function i() {
        var a, l;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (a = g.YG(e, ">lazy-line,>area-container>lazy-line").length > 0) {
                s.next = 3;
                break;
              }
              return s.abrupt("return", (0, p._q)(g.YG(e, ">line,>area-container>line"), e => o.generateLine(e, t, r, n)));
            case 3:
              if (!a || !n.throwIfLinesMoreThan) {
                s.next = 5;
                break;
              }
              throw new _(10);
            case 5:
              return console.log("lazy line found!"), l = [], s.abrupt("return", n.rootUpdater.requestBusyOfDelayRender(i => T.$.run(e, "full-visible", i, e => {
                if (T.$.isEditLineHtmlElement(e)) return o.generateLine(e, t, r, n).then(e => {
                  l.push(e);
                });
              }, () => {}, {
                numberOfLinesToSeparate: 50,
                onLineVisibleAsPromise: !0
              })).then(() => l));
            case 8:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    buildTextBlock(e, t, r, n) {
      return E.buildTextBlock({
        element: e,
        baseRect: t,
        notNormalText: r,
        lineWrap: n,
        dzc: t.zc
      });
    }
    generateDefaultComposite(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function i() {
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (r = R({
                editareas: !0,
                svg: !0
              }, r), s.t0 = u.A.getComputedStyle(e, "background-color"), s.t1 = A.T.getBCRectToRect(e, t), !r.editareas) {
                s.next = 9;
                break;
              }
              return s.next = 6, o.findAndGenerateEditAreas(e, t, !1, n);
            case 6:
              s.t2 = s.sent, s.next = 10;
              break;
            case 9:
              s.t2 = [];
            case 10:
              return s.t3 = s.t2, s.t4 = r.svg ? o.findAndGenerateSvgs(e, t) : [], s.abrupt("return", {
                type: "composite",
                bgColor: s.t0,
                rect: s.t1,
                areas: s.t3,
                drawings: s.t4
              });
            case 13:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateFractionComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {}, r);
            case 2:
              return o = s.sent, a = g.YG(e, ">.frac-line>inline")[0], o.drawings = o.drawings.concat(n.buildLineFromBorderPosition(a, t, "bottom")), s.abrupt("return", o);
            case 6:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateBoxexComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {}, r);
            case 2:
              return o = s.sent, a = g.YG(e, ">div")[0], o.drawings = o.drawings.concat(n.buildLinesFromBorder(a, t)), s.abrupt("return", o);
            case 6:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateIntegralLikeComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a, l, c, p, m, f, y, v, b, x;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {}, r);
            case 2:
              return o = s.sent, a = g.YG(e, ">symbol"), l = g.YG(e, ">symbol>span"), c = {}, g.nB(a, "inf") && (c.textDecoration = "underline", p = A.T.getBCRectToRect(l[0], t), m = .11, (g._T(a, "font-family").includes("LatinModern") || g._T(a, "font-family").includes("ThickerLm")) && (m = .09), f = (0, h.aN)((0, d.X$)(g._T(a, "font-family"))), y = u.A.getComputedStyleAsNumber(l[0], "font-size"), v = f ? p.top + y * (f.ascentEm - f.positionEm) : p.bottom - A.T.heightOf(p) * m, o.drawings.push({
                type: "line",
                x1: p.left,
                y1: v,
                x2: p.right,
                y2: v,
                strokeWidth: f ? "".concat(y * f.thicknessEm, "px") : void 0,
                stroke: g._T(l, "color")
              })), g.nB(a, "sup") && (c.textDecoration = "overline", b = A.T.getBCRectToRect(l[0], t), o.drawings.push({
                type: "line",
                x1: b.left,
                y1: b.top,
                x2: b.right,
                y2: b.top,
                stroke: g._T(l, "color")
              })), s.next = 10, E.buildTextBlock({
                element: l[0],
                baseRect: t,
                adjustForChromeHack: M.A.isChrome(),
                notNormalText: !1,
                lineWrap: !1,
                dzc: t.zc
              });
            case 10:
              return x = s.sent, o.textBlocks = [x], s.abrupt("return", o);
            case 13:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateConstantComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !1,
                svg: !1
              }, r);
            case 2:
              return o = s.sent, a = g.YG(e, "constant-text"), s.next = 6, n.buildTextBlock(a[0], t, !1, !1);
            case 6:
              return s.t0 = s.sent, o.textBlocks = [s.t0], s.abrupt("return", o);
            case 9:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    getAllNodesHasTextNode(e) {
      return this.getTextNodesIn(e, !1).map(e => e.parentElement);
    }
    getTextNodesIn(e, t) {
      var r = [],
        n = /\S/;
      function i(e) {
        if (3 == e.nodeType) (t || n.test(e.nodeValue)) && r.push(e);else for (var o = 0, s = e.childNodes.length; o < s; ++o) i(e.childNodes[o]);
      }
      return i(e), r;
    }
    buildClipDrawingWithSelector(e, t, r, n) {
      var o = arguments,
        a = this;
      return (0, i.A)(s().mark(function i() {
        var l, c, d;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (l = o.length > 4 && void 0 !== o[4] && o[4], c = o.length > 5 && void 0 !== o[5] ? o[5] : 0, d = g.YG(e, t)[c], !n || d) {
                s.next = 5;
                break;
              }
              return s.abrupt("return", null);
            case 5:
              if (d) {
                s.next = 7;
                break;
              }
              throw new Error("element not found");
            case 7:
              return s.t0 = A.T.getBCRectToRect(d, r), s.next = 10, a.buildAllClipTexts(d, A.T.getBCRect(d, a.dzc), l);
            case 10:
              return s.t1 = s.sent, s.abrupt("return", {
                type: "drawing",
                rect: s.t0,
                clip: !0,
                elements: s.t1,
                forceNestedSvg: !1
              });
            case 12:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    buildAllClipTexts(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function o() {
        return s().wrap(function o(a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return a.abrupt("return", (0, p._q)(n.getAllNodesHasTextNode(e), function () {
                var e = (0, i.A)(s().mark(function e(n) {
                  var i, o;
                  return s().wrap(function e(s) {
                    for (;;) switch (s.prev = s.next) {
                      case 0:
                        return i = r ? n.parentElement : n, s.next = 3, E.buildTextBlock({
                          element: n,
                          baseRect: A.T.getBCRect(i, t.zc),
                          notNormalText: !1,
                          rectContainerText: r ? i : void 0,
                          lineWrap: !1,
                          dzc: t.zc
                        });
                      case 3:
                        return o = s.sent, s.abrupt("return", {
                          type: "drawing",
                          rect: A.T.getBCRectToRect(i, t),
                          clip: !0,
                          elements: [o],
                          forceNestedSvg: !1
                        });
                      case 5:
                      case "end":
                        return s.stop();
                    }
                  }, e);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return a.stop();
          }
        }, o);
      }))();
    }
    generateArrowLikeComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a, l, c;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {}, r);
            case 2:
              if (o = s.sent, a = g.YG(e, ">arrow-like-simple>span"), l = g.YG(e, ">middle"), !(a.length > 0)) {
                s.next = 10;
                break;
              }
              return s.next = 8, n.buildTextBlock(a[0], t, !1, !1);
            case 8:
              s.t0 = s.sent, o.textBlocks = [s.t0];
            case 10:
              if (!(l.length > 0)) {
                s.next = 17;
                break;
              }
              return c = g.YG(l, "hcomposed-symbol"), s.t1 = o.drawings, s.next = 15, n.generateFromHVComposed(c[0], t);
            case 15:
              s.t2 = s.sent, o.drawings = s.t1.concat.call(s.t1, s.t2);
            case 17:
              return s.abrupt("return", o);
            case 18:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateOverUnderbraceComposite(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function i() {
        var a, l, c, d;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, o.generateDefaultComposite(e, t, {}, n);
            case 2:
              if (a = s.sent, l = g.YG(e, ">".concat(r)), !((c = g.YG(e, ">".concat(r, " middle-wrapper"))).length > 0)) {
                s.next = 33;
                break;
              }
              return d = g.YG(l, ">brace-top-wrapper")[0], s.t0 = a.drawings, s.next = 10, o.buildClipDrawingWithSelector(d, ">first", t, !1);
            case 10:
              return s.t1 = s.sent, s.t0.push.call(s.t0, s.t1), s.t2 = a.drawings, s.next = 15, o.buildClipDrawingWithSelector(d, ">middle-wrapper", t, !1, !0, 0);
            case 15:
              return s.t3 = s.sent, s.t2.push.call(s.t2, s.t3), s.t4 = a.drawings, s.next = 20, o.buildClipDrawingWithSelector(d, ">middle", t, !1);
            case 20:
              return s.t5 = s.sent, s.t4.push.call(s.t4, s.t5), s.t6 = a.drawings, s.next = 25, o.buildClipDrawingWithSelector(d, ">middle-wrapper", t, !1, !0, 1);
            case 25:
              return s.t7 = s.sent, s.t6.push.call(s.t6, s.t7), s.t8 = a.drawings, s.next = 30, o.buildClipDrawingWithSelector(d, ">last", t, !1);
            case 30:
              return s.t9 = s.sent, s.t8.push.call(s.t8, s.t9), s.abrupt("return", a);
            case 33:
              if (!(l.length > 0)) {
                s.next = 37;
                break;
              }
              return s.next = 36, (0, p._q)(o.getAllNodesHasTextNode(l[0]), e => o.buildTextBlock(e, t, !1, !1));
            case 36:
              a.textBlocks = s.sent;
            case 37:
              return s.abrupt("return", a);
            case 38:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateOverbraceComposite(e, t, r) {
      return this.generateOverUnderbraceComposite(e, t, "top-brace", r);
    }
    generateUnderbraceComposite(e, t, r) {
      return this.generateOverUnderbraceComposite(e, t, "bottom-brace", r);
    }
    generateOverSymbolComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (!g.Zy(e, ":scope > symbol > svg")) {
                s.next = 2;
                break;
              }
              return s.abrupt("return", n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !0
              }, r));
            case 2:
              return s.next = 4, n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !1
              }, r);
            case 4:
              return o = s.sent, s.next = 7, (0, p._q)(n.getAllNodesHasTextNode(g.YG(e, ">symbol")[0]), e => n.buildTextBlock(e, t, !0, !1));
            case 7:
              return o.textBlocks = s.sent, s.abrupt("return", o);
            case 9:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateUnderLineSymbolComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return o = n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !0
              }, r), s.abrupt("return", o);
            case 2:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateOverlineSymbolComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !1
              }, r);
            case 2:
              return o = s.sent, a = g.YG(e, ">line-border")[0], s.t0 = o.drawings, s.next = 7, n.buildClipDrawingWithSelector(a, ">hcomposed-symbol", t, !1);
            case 7:
              return s.t1 = s.sent, s.t0.push.call(s.t0, s.t1), s.abrupt("return", o);
            case 10:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateGroupInlineCollapsedBlock(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !0
              }, r);
            case 2:
              return (o = s.sent).drawings = o.drawings.concat(n.buildLinesFromBorder(e, t)), o.drawings = o.drawings.concat(n.buildLinesFromBorder(g.YG(e, ">span").slice(0, 1)[0], t)), s.abrupt("return", o);
            case 6:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateMathchaTextBlock(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !1,
                svg: !1
              }, r);
            case 2:
              return o = s.sent, s.next = 5, n.buildTextBlock(g.YG(e, ">mathcha-text>span").slice(0, 1)[0], t, !1, !1);
            case 5:
              return a = s.sent, o.textBlocks = [a], o.drawings = [n.generateSvg(g.YG(e, ">mathcha-text>svg").slice(0, 1)[0], t)], s.abrupt("return", o);
            case 9:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateLongDivision(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a, l;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.t0 = u.A.getComputedStyle(e, "background-color"), s.t1 = A.T.getBCRectToRect(e, t), s.next = 4, n.findAndGenerateEditAreas(e, t, !1, r);
            case 4:
              return s.t2 = s.sent, s.t3 = n.findAndGenerateSvgs(e, t), o = {
                type: "composite",
                bgColor: s.t0,
                rect: s.t1,
                areas: s.t2,
                drawings: s.t3
              }, a = g.YG(e, ">div>.role-division-svg-text, >div>div>div>.role-division-svg-text, >div>div>.role-division-svg-text"), s.next = 10, (0, p._q)(a, e => n.buildTextBlock(e, t, !1, !1));
            case 10:
              return l = s.sent, o.drawings = o.drawings.concat(l), s.abrupt("return", o);
            case 13:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateCheckBoxBlock(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a, l, c, d, h;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !1,
                svg: !1
              }, r);
            case 2:
              return o = s.sent, a = g.YG(e, ".regular-checkbox")[0], l = A.T.getBCRectToRect(a, t), c = (0, D.UL)({
                type: "doc-rounded-rect",
                id: "fake",
                data: {
                  p1: {
                    x: l.left,
                    y: l.top
                  },
                  p2: {
                    x: l.right,
                    y: l.bottom
                  },
                  cornerRadiusPercentage: 2 / A.T.widthOf(l)
                }
              }), d = P.A.pathsD(c), h = {
                type: "path",
                d,
                stroke: g._T(a, "color")
              }, o.drawings = [h].concat(n.findAndGenerateSvgs(e, t)), s.abrupt("return", o);
            case 10:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateOverArrowSymbolComposite(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.next = 2, n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !0
              }, r);
            case 2:
              if (o = s.sent, a = g.YG(e, ">arrow-symbol")[0], !(g.YG(a, ">svg").length > 0)) {
                s.next = 6;
                break;
              }
              return s.abrupt("return", o);
            case 6:
              return s.t0 = o.drawings, s.next = 9, n.buildClipDrawingWithSelector(a, ">hcomposed-symbol>start", t, !1);
            case 9:
              return s.t1 = s.sent, s.t0.push.call(s.t0, s.t1), s.t2 = o.drawings, s.next = 14, n.buildClipDrawingWithSelector(a, ">hcomposed-symbol>middle", t, !1);
            case 14:
              return s.t3 = s.sent, s.t2.push.call(s.t2, s.t3), s.abrupt("return", o);
            case 17:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateFromHVComposed(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        return s().wrap(function n(i) {
          for (;;) switch (i.prev = i.next) {
            case 0:
              if (e) {
                i.next = 2;
                break;
              }
              return i.abrupt("return", []);
            case 2:
              return i.next = 4, r.buildClipDrawingWithSelector(e, ">start", t, !0);
            case 4:
              return i.t0 = i.sent, i.next = 7, r.buildClipDrawingWithSelector(e, ">middle", t, !0, !1, 0);
            case 7:
              return i.t1 = i.sent, i.next = 10, r.buildClipDrawingWithSelector(e, ">middle-center", t, !0);
            case 10:
              return i.t2 = i.sent, i.next = 13, r.buildClipDrawingWithSelector(e, ">middle", t, !0, !1, 1);
            case 13:
              return i.t3 = i.sent, i.next = 16, r.buildClipDrawingWithSelector(e, ">end", t, !0);
            case 16:
              return i.t4 = i.sent, i.abrupt("return", [i.t0, i.t1, i.t2, i.t3, i.t4].filter(e => e));
            case 18:
            case "end":
              return i.stop();
          }
        }, n);
      }))();
    }
    generateOpenCloseBlockOrMiddles(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        return s().wrap(function i(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (!(g.YG(e, ">bracket-span").length > 0)) {
                o.next = 2;
                break;
              }
              return o.abrupt("return", n.buildTextBlock(g.YG(e, ">bracket-span")[0], t, !1, !1));
            case 2:
              if (!(g.YG(e, ">vcomposed-symbol").length > 0)) {
                o.next = 10;
                break;
              }
              return o.t0 = u.A.getComputedStyle(e, "background-color"), o.t1 = A.T.getBCRectToRect(e, t), o.t2 = [], o.next = 8, n.generateFromHVComposed(g.YG(e, ">vcomposed-symbol")[0], t);
            case 8:
              return o.t3 = o.sent, o.abrupt("return", {
                type: "composite",
                bgColor: o.t0,
                rect: o.t1,
                areas: o.t2,
                drawings: o.t3
              });
            case 10:
              return o.abrupt("return", n.generateDefaultComposite(e, t, {
                editareas: !1,
                svg: !0
              }, r));
            case 11:
            case "end":
              return o.stop();
          }
        }, i);
      }))();
    }
    generateBigDelimiterBlock(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        return s().wrap(function i(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              if (!(g.YG(e, ">big-delimiter>vcomposed-symbol").length > 0)) {
                o.next = 8;
                break;
              }
              return o.t0 = u.A.getComputedStyle(e, "background-color"), o.t1 = A.T.getBCRectToRect(e, t), o.t2 = [], o.next = 6, n.generateFromHVComposed(g.YG(e, ">big-delimiter>vcomposed-symbol")[0], t);
            case 6:
              return o.t3 = o.sent, o.abrupt("return", {
                bgColor: o.t0,
                type: "composite",
                rect: o.t1,
                areas: o.t2,
                drawings: o.t3
              });
            case 8:
              return o.abrupt("return", n.generateDefaultComposite(e, t, {
                editareas: !1,
                svg: !0
              }, r));
            case 9:
            case "end":
              return o.stop();
          }
        }, i);
      }))();
    }
    getBorderColor(e, t) {
      return g._T(e, "border-".concat(t, "-color"));
    }
    getBorderStyle(e, t) {
      return g._T(e, "border-".concat(t, "-style"));
    }
    buildLineFromBorderPosition(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = this.getBorderStyle(e, r);
      if ("solid" != i && "dotted" != i) return [];
      if (n.ignoreColors) {
        var o = this.getBorderColor(e, r);
        if (n.ignoreColors.some(e => o.includes(e))) return [];
      }
      var s = A.T.getBCRectToRect(e, t),
        a;
      switch (r) {
        case "top":
          a = {
            x1: s.left,
            x2: s.right,
            y1: s.top,
            y2: s.top
          };
          break;
        case "bottom":
          a = {
            x1: s.left,
            x2: s.right,
            y1: s.bottom,
            y2: s.bottom
          };
          break;
        case "left":
          a = {
            x1: s.left,
            x2: s.left,
            y1: s.top,
            y2: s.bottom
          };
          break;
        case "right":
          a = {
            x1: s.right,
            x2: s.right,
            y1: s.top,
            y2: s.bottom
          };
      }
      return [R({
        type: "line",
        fill: "none",
        strokeDashArray: "dotted" == i ? "1" : void 0,
        stroke: g._T(e, "border-".concat(r, "-color")),
        strokeWidth: n.forceLineWidth ? n : g._T(e, "border-".concat(r, "-width"))
      }, a)];
    }
    buildLinesFromBorder(e, t, r) {
      return f().flatten([this.buildLineFromBorderPosition(e, t, "top", r), this.buildLineFromBorderPosition(e, t, "left", r), this.buildLineFromBorderPosition(e, t, "right", r), this.buildLineFromBorderPosition(e, t, "bottom", r)]);
    }
    generateRowCellBorders(e, t) {
      var r = {
        ignoreColors: ["115, 113, 113, 0", "224, 224, 224"],
        forceLineWidth: "1px"
      };
      return f().flatten(g.YG(e, ">matrix>table>tbody>tr").map(e => this.buildLinesFromBorder(e, t, r)).concat(g.YG(e, ">matrix>table>tbody>tr>td").map(e => this.buildLinesFromBorder(e, t, r))));
    }
    generateMatrixBlock(e, t, r) {
      var n = this;
      return (0, i.A)(s().mark(function i() {
        var o, a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              if (!(g.YG(e, ">matrix.array").length > 0)) {
                s.next = 8;
                break;
              }
              return s.t0 = u.A.getComputedStyle(e, "background-color"), s.t1 = A.T.getBCRectToRect(e, t), s.next = 5, n.findAndGenerateEditAreas(e, t, !1, r);
            case 5:
              return s.t2 = s.sent, s.t3 = n.generateRowCellBorders(e, t), s.abrupt("return", {
                type: "composite",
                bgColor: s.t0,
                rect: s.t1,
                areas: s.t2,
                drawings: s.t3
              });
            case 8:
              if (!(g.YG(e, ">matrix>vcomposed-symbol").length > 0)) {
                s.next = 22;
                break;
              }
              return s.next = 11, n.generateFromHVComposed(g.YG(e, ">matrix>vcomposed-symbol")[0], t);
            case 11:
              return o = s.sent, s.next = 14, n.generateFromHVComposed(g.YG(e, ">matrix>vcomposed-symbol")[1], t);
            case 14:
              return a = s.sent, s.t4 = u.A.getComputedStyle(e, "background-color"), s.t5 = A.T.getBCRectToRect(e, t), s.next = 19, n.findAndGenerateEditAreas(e, t, !1, r);
            case 19:
              return s.t6 = s.sent, s.t7 = o.concat(a), s.abrupt("return", {
                type: "composite",
                bgColor: s.t4,
                rect: s.t5,
                areas: s.t6,
                drawings: s.t7
              });
            case 22:
              if (!(g.YG(e, ">matrix.matrix").length > 0)) {
                s.next = 30;
                break;
              }
              return s.t8 = u.A.getComputedStyle(e, "background-color"), s.t9 = A.T.getBCRectToRect(e, t), s.next = 27, n.findAndGenerateEditAreas(e, t, !1, r);
            case 27:
              return s.t10 = s.sent, s.t11 = n.findAndGenerateSvgs(e, t).concat(n.generateRowCellBorders(e, t)), s.abrupt("return", {
                type: "composite",
                bgColor: s.t8,
                rect: s.t9,
                areas: s.t10,
                drawings: s.t11
              });
            case 30:
              return s.abrupt("return", n.generateDefaultComposite(e, t, {
                editareas: !0,
                svg: !0
              }, r));
            case 31:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    generateLine(e, t, r, n) {
      var o = this;
      return (0, i.A)(s().mark(function a() {
        var l;
        return s().wrap(function a(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return l = u.A.findBlocks(e).map(function () {
                var e = (0, i.A)(s().mark(function e(i) {
                  var a, l, c, d, h, p;
                  return s().wrap(function e(s) {
                    for (;;) switch (s.prev = s.next) {
                      case 0:
                        l = i.tagName.toLowerCase(), s.t0 = l, s.next = "block" === s.t0 ? 4 : "compositeblock" === s.t0 ? 5 : "opensymbolblock" === s.t0 || "closesymbolblock" === s.t0 ? 66 : 67;
                        break;
                      case 4:
                        return s.abrupt("return", o.buildTextBlock(i, t, !1, r));
                      case 5:
                        if (!g.nB(i, "fraction-symbol")) {
                          s.next = 7;
                          break;
                        }
                        return s.abrupt("return", o.generateFractionComposite(i, t, n));
                      case 7:
                        if (!g.nB(i, "boxed")) {
                          s.next = 9;
                          break;
                        }
                        return s.abrupt("return", o.generateBoxexComposite(i, t, n));
                      case 9:
                        if (!g.nB(i, "integral-like-symbol")) {
                          s.next = 11;
                          break;
                        }
                        return s.abrupt("return", o.generateIntegralLikeComposite(i, t, n));
                      case 11:
                        if (!g.nB(i, "summation-like-symbol")) {
                          s.next = 13;
                          break;
                        }
                        return s.abrupt("return", o.generateIntegralLikeComposite(i, t, n));
                      case 13:
                        if (!(g.YG(i, ">constant-text").length > 0)) {
                          s.next = 15;
                          break;
                        }
                        return s.abrupt("return", o.generateConstantComposite(i, t, n));
                      case 15:
                        if (!g.nB(i, "lim-like-symbol")) {
                          s.next = 17;
                          break;
                        }
                        return s.abrupt("return", o.generateIntegralLikeComposite(i, t, n));
                      case 17:
                        if (!g.nB(i, "arrow-like-symbol")) {
                          s.next = 19;
                          break;
                        }
                        return s.abrupt("return", o.generateArrowLikeComposite(i, t, n));
                      case 19:
                        if (!g.nB(i, "over-brace-symbol")) {
                          s.next = 21;
                          break;
                        }
                        return s.abrupt("return", o.generateOverbraceComposite(i, t, n));
                      case 21:
                        if (!g.nB(i, "under-brace-symbol")) {
                          s.next = 23;
                          break;
                        }
                        return s.abrupt("return", o.generateUnderbraceComposite(i, t, n));
                      case 23:
                        if (!g.nB(i, "over-symbol")) {
                          s.next = 25;
                          break;
                        }
                        return s.abrupt("return", o.generateOverSymbolComposite(i, t, n));
                      case 25:
                        if (!g.nB(i, "under-line-symbol")) {
                          s.next = 27;
                          break;
                        }
                        return s.abrupt("return", o.generateUnderLineSymbolComposite(i, t, n));
                      case 27:
                        if (!g.nB(i, "over-line-symbol")) {
                          s.next = 29;
                          break;
                        }
                        return s.abrupt("return", o.generateOverlineSymbolComposite(i, t, n));
                      case 29:
                        if (!g.nB(i, "over-arrow-symbol")) {
                          s.next = 31;
                          break;
                        }
                        return s.abrupt("return", o.generateOverArrowSymbolComposite(i, t, n));
                      case 31:
                        if (!g.nB(i, "big-delimiter-symbol")) {
                          s.next = 33;
                          break;
                        }
                        return s.abrupt("return", o.generateBigDelimiterBlock(i, t, n));
                      case 33:
                        if (!g.nB(i, "matrix-symbol")) {
                          s.next = 35;
                          break;
                        }
                        return s.abrupt("return", o.generateMatrixBlock(i, t, n));
                      case 35:
                        if (!g.nB(i, "text-mode-group-inline-collapsed")) {
                          s.next = 37;
                          break;
                        }
                        return s.abrupt("return", o.generateGroupInlineCollapsedBlock(i, t, n));
                      case 37:
                        if (!g.nB(i, "math-mode-group-collapsed")) {
                          s.next = 39;
                          break;
                        }
                        return s.abrupt("return", o.generateGroupInlineCollapsedBlock(i, t, n));
                      case 39:
                        if (!g.nB(i, "mathcha-text")) {
                          s.next = 41;
                          break;
                        }
                        return s.abrupt("return", o.generateMathchaTextBlock(i, t, n));
                      case 41:
                        if (!g.nB(i, "checkbox-symbol")) {
                          s.next = 43;
                          break;
                        }
                        return s.abrupt("return", o.generateCheckBoxBlock(i, t, n));
                      case 43:
                        if (!g.nB(i, "long-division-symbol")) {
                          s.next = 45;
                          break;
                        }
                        return s.abrupt("return", o.generateLongDivision(i, t, n));
                      case 45:
                        if (!g.nB(i, "math-diagram")) {
                          s.next = 53;
                          break;
                        }
                        return c = g.YG(i, ">math-diagram")[0], d = A.T.getBCRectToRect(c, t), s.next = 50, o.dgGenerator.generateToSvgStr(c, d);
                      case 50:
                        return s.t1 = s.sent, s.t2 = d, s.abrupt("return", {
                          type: "diagram",
                          data: s.t1,
                          rect: s.t2
                        });
                      case 53:
                        if (!g.nB(i, "middle-vert-symbol")) {
                          s.next = 55;
                          break;
                        }
                        return s.abrupt("return", o.generateOpenCloseBlockOrMiddles(i, t, n));
                      case 55:
                        if (!(h = g.Zy(i, ":scope > [data-math-source-symbol]"))) {
                          s.next = 65;
                          break;
                        }
                        return s.next = 59, o.generateDefaultComposite(i, t, {
                          editareas: !1,
                          svg: !1
                        }, n);
                      case 59:
                        return p = s.sent, s.next = 62, o.buildTextBlock(h, t, !1, !1);
                      case 62:
                        return s.t3 = s.sent, p.textBlocks = [s.t3], s.abrupt("return", p);
                      case 65:
                        return s.abrupt("return", o.generateDefaultComposite(i, t, {}, n));
                      case 66:
                        return s.abrupt("return", o.generateOpenCloseBlockOrMiddles(i, t, n));
                      case 67:
                        return s.abrupt("return", a);
                      case 68:
                      case "end":
                        return s.stop();
                    }
                  }, e);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }()), c.next = 3, (0, p._q)(l, e => e);
            case 3:
              return c.t0 = c.sent.filter(e => e), c.abrupt("return", {
                blocks: c.t0
              });
            case 5:
            case "end":
              return c.stop();
          }
        }, a);
      }))();
    }
  }
  var z = function e(t, r) {
      var n = g.Yt(t);
      return g.YG(n, r).filter(e => function () {
        if (g.f$(this, "setting.setting-popup-zindex").length > 0) return !1;
        var e = g.f$(g.aY(this), r);
        return 0 == e.length || 0 == g.rm(n, e).length;
      }.call(e));
    },
    H = r(46621),
    W = r(20243),
    V = r(55451),
    U = r(58578),
    q = r(85055);
  function G(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function K(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? G(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Z = {};
  class Y {
    toSvgBlob(e) {
      return Promise.resolve(new Blob([e.svg], {
        type: "image/svg+xml;charset=utf-8"
      }));
    }
    toImageBlob(e, t) {
      var r = document.createElement("canvas");
      return this.drawToCanvas(r, e.width, e.height, e.svg, t).then(() => new Promise(e => {
        r.toBlob(t => {
          e(t);
        });
      }));
    }
    exportSvg(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        return s().wrap(function n(i) {
          for (;;) switch (i.prev = i.next) {
            case 0:
              return i.abrupt("return", r.rawToOutput(n => {
                var i = e.element;
                return r.generateToStr(i, K(K({}, t), {}, {
                  double: n
                }));
              }));
            case 1:
            case "end":
              return i.stop();
          }
        }, n);
      }))();
    }
    rawToOutput(e) {
      var t = this;
      return {
        drawToCanvas: function r(n) {
          var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return e(!0).then(e => t.drawToCanvas(n, e.width, e.height, e.svg, i).then(t => ({
            width: e.width,
            height: e.height,
            data: t
          })));
        },
        getImageBlob: t => e(!0).then(e => this.toImageBlob(e, t).then(t => ({
          width: e.width,
          height: e.height,
          data: t
        }))),
        getSvgBlob: () => e(!1).then(e => this.toSvgBlob(e).then(t => ({
          width: e.width,
          height: e.height,
          data: t
        }))),
        getSvgText: () => e(!1).then(e => ({
          width: e.width,
          height: e.height,
          data: e.svg
        }))
      };
    }
    drawToCanvas(e, t, r, n, o) {
      return (0, i.A)(s().mark(function i() {
        var a;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return g.Bq(e, "width", "".concat(t * o, "px")), g.Bq(e, "height", "".concat(r * o, "px")), a = new Image(), s.abrupt("return", new Promise((i, s) => {
                a.onload = () => {
                  var n = e.getContext("2d");
                  n.scale(2, 2), n.drawImage(a, 0, 0, t * o, r * o), i(e);
                }, a.style.width = "".concat(t * o, "px"), a.style.height = "".concat(r * o, "px"), a.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(n), a.onerror = () => {
                  console.log("image rejected"), s();
                };
              }));
            case 4:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    exportDiagramSvg(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        return s().wrap(function n(i) {
          for (;;) switch (i.prev = i.next) {
            case 0:
              return i.abrupt("return", r.rawToOutput(n => {
                var i = e.element,
                  o = e.noGrid;
                return r.generateDiagram(i, K(K({}, t), {}, {
                  double: n
                }), o, 2).then(e => {
                  var r = A.T.getBCWidthHeight(i, t.dzc),
                    n,
                    o;
                  return {
                    width: r.rWidth,
                    height: r.rHeight,
                    svg: e
                  };
                }).catch(e => {
                  if (e instanceof _) return r.renderPrevieUnavailable("Data is big, preview unavailable");
                  throw e;
                });
              }));
            case 1:
            case "end":
              return i.stop();
          }
        }, n);
      }))();
    }
    generateToStr(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        var i, o, a, l;
        return s().wrap(function n(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return s.prev = 0, i = t.padding, o = r.getRenderInfoGenerate(t), s.next = 5, o.generate(e, i);
            case 5:
              return a = s.sent, l = r.generateRootBlock(a, t), s.abrupt("return", {
                svg: (0, c.renderToStaticMarkup)(l),
                width: A.T.widthOf(a.baseRect),
                height: A.T.heightOf(a.baseRect)
              });
            case 10:
              if (s.prev = 10, s.t0 = s.catch(0), !(s.t0 instanceof _)) {
                s.next = 14;
                break;
              }
              return s.abrupt("return", r.renderPrevieUnavailable("Data is big, preview unavailable"));
            case 14:
              throw s.t0;
            case 15:
            case "end":
              return s.stop();
          }
        }, n, null, [[0, 10]]);
      }))();
    }
    generateToJSX(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        var i, o, a;
        return s().wrap(function n(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return i = t.padding, o = r.getRenderInfoGenerate(t), s.next = 4, o.generate(e, i);
            case 4:
              return a = s.sent, s.abrupt("return", r.generateRootBlock(a, t));
            case 6:
            case "end":
              return s.stop();
          }
        }, n);
      }))();
    }
    generateDiagram(e, t, r) {
      var n = arguments,
        o = this;
      return (0, i.A)(s().mark(function i() {
        var a, l, d, h, p, u, m, f, y, v, b, x, C, S, w, E, k, O, D;
        return s().wrap(function i(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return a = n.length > 3 && void 0 !== n[3] ? n[3] : 2, l = t.transparent, d = t.bgColor, h = t.double, p = t.pos, u = void 0 === p ? {
                x: 0,
                y: 0
              } : p, m = A.T.getBCWidthHeight(e, t.dzc), f = m.rWidth, y = m.rHeight, v = g.YG(e, ">clip-region>zoom-region>svg").slice(0, 1).map(e => e.cloneNode(!0)), b = g.YG(e, ">clip-region>zoom-region>svg").slice(1, 2).map(e => e.cloneNode(!0)), s.next = 7, o.inlineSvgImagesInfo(b, a);
            case 7:
              return g.g5(g.YG(b, ".transparent")), x = r ? "" : new XMLSerializer().serializeToString(v[0]), C = new XMLSerializer().serializeToString(b[0]), s.next = 12, o.generateDiagramTextsToJSX(g.YG(e, ">clip-region>zoom-region")[0], K(K({}, t), {}, {
                padding: 0
              }));
            case 12:
              return S = s.sent, E = h ? 2 * y : y, k = "\n        width:".concat(w = h ? 2 * f : f, "px;\n        height:").concat(E, "px;\n        background: ").concat(l ? "transparent" : d || "white", ";\n        fill: none;\n"), O = (0, c.renderToStaticMarkup)(S), s.next = 19, q.j.generatePlotlyToSvgGroup(e);
            case 19:
              return D = s.sent, s.abrupt("return", '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="'.concat(u.x, '" y="').concat(u.y, '" width="').concat(w, '" height="').concat(E, '" style="').concat(k, '">\n        ').concat(x, "\n        ").concat(D, "\n        ").concat(C, "\n        ").concat(O, "\n</svg>\n"));
            case 21:
            case "end":
              return s.stop();
          }
        }, i);
      }))();
    }
    inlineSvgImagesInfo(e, t) {
      return Promise.all(g.YG(e, "image").map(e => {
        var r = g.Yt(e);
        return H.A.getImageBase64Ver2(e, t).then(e => {
          g.Bq(r, "xlink:href", e);
        }).catch(e => {
          console.log(e), g.cd(r, "xlink:href");
        });
      }));
    }
    getRenderInfoGenerate(e) {
      return new N({
        generateToSvgStr: (t, r) => this.generateDiagram(t, K(K({}, e), {}, {
          double: !1,
          pos: {
            x: r.left,
            y: r.top
          }
        }), !1)
      }, e.dzc, {
        throwIfLinesMoreThan: e.throwIfLinesMoreThan,
        rootUpdater: e.rootUpdater
      });
    }
    generateDiagramTextsToJSX(e, t) {
      var r = this;
      return (0, i.A)(s().mark(function n() {
        var i, o;
        return s().wrap(function n(s) {
          for (;;) switch (s.prev = s.next) {
            case 0:
              return i = r.getRenderInfoGenerate(t), s.next = 3, i.generateDiagramTexts(e);
            case 3:
              return o = s.sent, s.abrupt("return", r.generateRootBlock(o, t));
            case 5:
            case "end":
              return s.stop();
          }
        }, n);
      }))();
    }
    renderPrevieUnavailable(e) {
      return {
        width: 300,
        height: 200,
        svg: (0, c.renderToStaticMarkup)(l().createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          width: 300,
          height: 200,
          style: {
            width: 300,
            height: 200,
            background: "white"
          }
        }, l().createElement("text", {
          x: "10",
          y: "45",
          fontSize: 8
        }, e)))
      };
    }
    generateRootBlock(e, t) {
      var r = A.T.widthOf(e.baseRect),
        n = A.T.heightOf(e.baseRect),
        i = t.double,
        o = t.subMathFont,
        s = t.baseFamily,
        a = t.transparent,
        c = t.bgColor;
      return l().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: i ? 2 * r : r,
        height: i ? 2 * n : n,
        style: {
          width: i ? 2 * r : r,
          height: i ? 2 * n : n,
          fontFamily: U.A.mathFontFamilyFromKey(o, s, "characters"),
          background: a ? "transparent" : c || "white"
        }
      }, e.areas.map(e => this.generateEditArea(e, t)), e.drawings.map(e => this.generateDrawingElement(e, t)));
    }
    generateEditArea(e, t) {
      var r = A.T.widthOf(e.rect),
        n = A.T.heightOf(e.rect),
        i = new W.Z().orgin(e.rect.left + r / 2, e.rect.top + n / 2);
      return e.rotation && (i = i.rotate(e.rotation, "deg")), e.skewX && (i = i.skew(e.skewX, 0, "deg")), e.flipX && (i = i.scale(-1, 1)), l().createElement("g", {
        transform: i.toSVG(),
        key: Math.random()
      }, e.lines.map(e => this.generateLine(e, t)));
    }
    getSvgStyle(e) {
      return {
        fill: e.fill,
        fillOpacity: e.fillOpacity,
        strokeWidth: e.strokeWidth,
        stroke: e.stroke,
        strokeOpacity: e.strokeOpacity
      };
    }
    buildClippedNestedSvg(e, t) {
      var r = e.rect,
        n = r.left,
        i = r.top,
        o = A.T.widthOf(e.rect),
        s = A.T.heightOf(e.rect),
        a = "ccp".concat(Math.random());
      return l().createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: n,
        key: Math.random(),
        y: i,
        viewBox: e.viewBox,
        height: s || 1,
        width: o || 1
      }, l().createElement("defs", null, l().createElement("clipPath", {
        id: a
      }, l().createElement("rect", {
        x: "-0.5",
        y: "-0.5",
        width: o + .5,
        height: s + .5
      }))), l().createElement("g", {
        clipPath: "url(#".concat(a, ")")
      }, e.elements.map(e => this.generateDrawingElement(e, t))));
    }
    generateDrawingElement(e, t) {
      switch (e.type) {
        case "drawing":
          if (e.clip && !e.forceNestedSvg && !e.viewBox) return this.buildClippedNestedSvg(e, t);
          var r = e.rect,
            n = r.left,
            i = r.top,
            o = A.T.widthOf(e.rect),
            s = A.T.heightOf(e.rect);
          return l().createElement("svg", {
            x: n,
            key: Math.random(),
            overflow: e.clip ? "hidden" : "visible",
            y: i,
            viewBox: e.viewBox,
            height: s || 1,
            width: o || 1
          }, e.elements.map(e => this.generateDrawingElement(e, t)));
        case "path":
          return l().createElement("path", {
            key: Math.random(),
            d: e.d,
            style: this.getSvgStyle(e)
          });
        case "group":
          return l().createElement("g", {
            transform: e.transform,
            key: Math.random()
          }, e.elements.map(e => this.generateDrawingElement(e, t)));
        case "polygon":
          return l().createElement("polygon", {
            key: Math.random(),
            points: e.points,
            style: this.getSvgStyle(e)
          });
        case "polyline":
          return l().createElement("polyline", {
            key: Math.random(),
            points: e.points,
            style: this.getSvgStyle(e)
          });
        case "line":
          return l().createElement("line", {
            key: Math.random(),
            strokeDasharray: e.strokeDashArray,
            style: this.getSvgStyle(e),
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2
          });
        case "rect":
          return l().createElement("rect", {
            transform: e.transform,
            key: Math.random(),
            style: this.getSvgStyle(e),
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
          });
        case "circle":
          return l().createElement("circle", {
            key: Math.random(),
            style: this.getSvgStyle(e),
            cx: e.cx,
            cy: e.cy,
            r: e.r
          });
        case "ellipse":
          return l().createElement("ellipse", {
            key: Math.random(),
            style: this.getSvgStyle(e),
            cx: e.cx,
            cy: e.cy,
            rx: e.rx,
            ry: e.ry
          });
        case "text":
        case "composite-text":
        case "empty-text":
        case "vector-text":
          return this.generateTextBlock(e, t);
      }
    }
    generateLine(e, t) {
      return l().createElement("g", {
        key: Math.random()
      }, e.blocks.map(e => this.generateBlock(e, t)));
    }
    generateBlock(e, t) {
      switch (e.type) {
        case "text":
        case "composite-text":
        case "vector-text":
          return this.generateTextBlock(e, t);
        case "composite":
          return this.generateCompositeBlock(e, t);
        case "diagram":
          return l().createElement("svg", {
            dangerouslySetInnerHTML: {
              __html: e.data
            }
          });
      }
    }
    pathToSvgD(e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5, r = [], n = 0, i = {
          M: 2,
          L: 2,
          Q: 4,
          C: 6
        }, o = 0; o < e.cmds.length; o++) {
        var s = e.cmds[o],
          a = n + (i[s] ? i[s] : 0);
        for (r.push(s); n < a;) {
          var l = e.crds[n++];
          r.push(parseFloat(l.toFixed(t)) + (n == a ? "" : " "));
        }
      }
      return r.join("");
    }
    generateTextBlock(e, t) {
      switch (e.type) {
        case "empty-text":
          return l().createElement("g", {
            key: Math.random()
          });
        case "composite-text":
          return l().createElement("g", {
            key: Math.random()
          }, this.buildBgText(e.rect.left, e.rect.top, A.T.widthOf(e.rect), A.T.heightOf(e.rect), e.bgColor), e.blocks.map(e => this.generateTextBlock(e, t)));
        case "vector-text":
          return this.generateVectorTextBlock(e, t);
        case "text":
          return this.generatePlainTextBlock(e, t);
      }
    }
    generatePlainTextBlock(e, t) {
      if (e.isHidden) return l().createElement("g", {
        key: Math.random()
      });
      var r = e.rect,
        n = r.left,
        i = r.top,
        o = A.T.heightOf(e.rect),
        s = e.isCustomLoadedFont && !e.notNormalText,
        a = I.A.getHtmlColorWithOpacity(e.color, !0),
        c = {
          whiteSpace: "pre",
          stroke: "none",
          fill: a.color,
          fillOpacity: a.opacity,
          fontSize: e.fontSize,
          fontFamily: this.fontFamilyAppendDefaultFont(e.fontFamily),
          fontWeight: e.fontWeight,
          fontStyle: e.fontStyle,
          dominantBaseline: s ? "auto" : "text-before-edge",
          textDecoration: e.textDecoration || void 0,
          direction: e.isRtl ? "rtl" : void 0,
          textAnchor: e.isRtl ? "end" : void 0
        };
      if (s && !Z[e.fontFamily]) {
        var d = J(e.fontFamily);
        console.log("result baseline: ", d), Z[e.fontFamily] = d, console.log("height:", o);
      }
      var h = Z[e.fontFamily];
      return l().createElement("text", {
        key: Math.random(),
        x: n,
        y: s ? i + o * (h + .025) : i,
        style: c
      }, e.text);
    }
    fontFamilyAppendDefaultFont(e) {
      return e;
    }
    generateVectorTextBlock(e, t) {
      var r = e.rect,
        n = r.left,
        i = r.top,
        o = e.fontSize / e.unitsPerEm,
        s,
        a = I.A.getHtmlColorWithOpacity(e.color, !0);
      if ("underline" == e.textDecoration) {
        var c = 1 + e.fontSize / 16,
          d = e.fontSize / 16;
        s = l().createElement("path", {
          d: "M 0,".concat(c, " L").concat(A.T.widthOf(e.rect), ",").concat(c),
          strokeWidth: d,
          stroke: a.color,
          strokeOpacity: a.opacity,
          fill: "none"
        });
      } else if ("line-through" == e.textDecoration) {
        var h = -e.fontSize / 4,
          p = e.fontSize / 16;
        s = l().createElement("path", {
          d: "M 0,".concat(h, " L").concat(A.T.widthOf(e.rect), ",").concat(h),
          strokeWidth: p,
          stroke: a.color,
          strokeOpacity: a.opacity,
          fill: "none"
        });
      }
      var u = A.T.heightOf(e.containerRect),
        g = e.fontSize;
      return e.adjustForChromeHack && u > 1.2 * e.fontSize && (g += u - 1.2 * e.fontSize), l().createElement("g", {
        key: Math.random(),
        transform: new W.Z().translate(n, i + g).toSVG()
      }, l().createElement("path", {
        transform: new W.Z().scale(o, -o).toSVG(),
        d: this.pathToSvgD(e.path),
        stroke: a.color,
        strokeOpacity: a.opacity,
        strokeWidth: this.getVectorTextStrokeWidth(e.isBold, t.vectorTextNoExtraBorder),
        fill: a.color,
        fillOpacity: a.opacity
      }), s);
    }
    buildBgText(e, t, r, n, i) {
      if ("rgba(0, 0, 0, 0)" != i && i) {
        var o = I.A.getHtmlColorWithOpacity(i);
        return l().createElement("rect", {
          x: e,
          y: t,
          width: r,
          height: n,
          fill: o.color,
          fillOpacity: o.opacity,
          stroke: "none"
        });
      }
    }
    getVectorTextStrokeWidth(e, t) {
      return t ? e ? 24 : 0 : e ? 24 : 8;
    }
    generateCompositeBlock(e, t) {
      var r = A.T.widthOf(e.rect),
        n = A.T.heightOf(e.rect);
      return l().createElement("g", {
        key: Math.random()
      }, this.buildBgText(e.rect.left, e.rect.top, r, n, e.bgColor), e.areas.map(e => this.generateEditArea(e, t)), e.drawings.map(e => this.generateDrawingElement(e, t)), (e.textBlocks || []).map(e => this.generateTextBlock(e, t)));
    }
  }
  function Q(e) {
    var t = e.getMonth() + 1,
      r = e.getDate();
    return [e.getFullYear(), (t > 9 ? "" : "0") + t, (r > 9 ? "" : "0") + r].join("");
  }
  var J = function e(t) {
    var r = document.createElement("div"),
      n = document.createElement("span"),
      i = document.createElement("span");
    n.textContent = i.textContent = "A", g.hS(r, {
      position: "fixed",
      left: 0,
      top: 0,
      visibility: "hidden",
      fontFamily: t
    }), g.hS(n, {
      fontSize: 0,
      lineHeight: 0
    }), g.hS(i, {
      fontSize: "800px",
      lineHeight: "960px"
    }), r.appendChild(n), r.appendChild(i), document.body.appendChild(r);
    var o = [r],
      s = [n],
      a = [i];
    return V.A.waitABit(function () {
      return g.g5(o);
    }), console.log("top: ", g.uR(s).top), console.log("height: ", g.vc(a, "height")), g.uR(s).top / g.vc(a, "height");
  };
  const X = new Y();
};
