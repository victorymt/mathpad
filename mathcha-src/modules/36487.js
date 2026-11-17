/* module 36487 — 5649 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    S: () => p
  });
  var n = r(3453),
    i = r(41257),
    o = r(90113),
    s = r(2543),
    a = r.n(s),
    l = r(516),
    c = r(73524),
    d = r(10632);
  class h {
    findWithDir(e, t, r, n, i, o) {
      return "increase" == n ? this.find(e, t, r, i, o) : this.backwardFind(e, t, r, i, o);
    }
    find(e, t, r, n, i) {
      for (var o = this.extractInitPhase(e, t, r), s = o.blockSecondIndex, a = o.blockUniStrings, l = o.middleCharIndex, c = o.localMiddleCharIndex, d = o.allCharCount, h = o.lineDir, p = 0;;) {
        var u = this.raisePredicate(t, a, s, l, c, d, h, n, i);
        if (u) return u;
        if (c++, ++l == d || (l > d ? (c = 0, s = 0, l = 0, p++) : c >= a[s].length && (c = 0, s++)), p > 2) return;
        if (l == r) return;
      }
    }
    raisePredicate(e, t, r, n, i, o, s, l, c) {
      var d;
      if (0 == n) d = this.extractBeginLine(e, t[0], a().last(t), s, c);else if (n == o) d = this.extractEndLine(e, t[0], a().last(t), s, o, c);else {
        var h = i > 0 ? r : r - 1,
          p = i > 0 ? i - 1 : t[h].length - 1;
        d = this.extractAtMiddleLine(e[h], e[r], t[h], t[r], p, i, s, n, c);
      }
      if (l(d, n)) return d;
    }
    backwardFind(e, t, r, n, i) {
      for (var o = this.extractInitPhase(e, t, r), s = o.blockSecondIndex, a = o.blockUniStrings, l = o.middleCharIndex, c = o.localMiddleCharIndex, d = o.allCharCount, h = o.lineDir, p = 0;;) {
        var u = this.raisePredicate(t, a, s, l, c, d, h, n, i);
        if (u) return u;
        if (c--, --l < 0 ? (l = d, c = a[s = t.length - 1].length, p++) : c < 0 && (c = a[s -= 1].length - 1), p > 2) return;
        if (l == r) return;
      }
    }
    extractInitPhase(e, t, r) {
      var n = t.map(e => l.A.isChar(e) ? c.Ay.getUnistring(e) : c.Ay.getUnistringUncached(" ")),
        i = a().sumBy(n, e => e.length);
      if (!(i <= 0)) {
        var s = 0,
          d;
        r < 0 && (r = 0), r > i && (r = i);
        for (var h = r, p, u, g = 0; g < t.length; g++) {
          var m = n[g].length;
          void 0 === u && s <= h && h < s + m && (u = g, p = h - s), s += m;
        }
        return void 0 === u && (p = a().last(n).length, u = t.length - 1), {
          blockSecondIndex: u,
          blockUniStrings: n,
          middleCharIndex: h,
          localMiddleCharIndex: p,
          allCharCount: i,
          lineDir: o.H.getLineDir(e)
        };
      }
    }
    extractBeginLine(e, t, r, n, i) {
      var o = e[0],
        s = a().last(e);
      return {
        type: "begin-line",
        iRange: d.x.retrieveSingleRangePosInfo(o, t, 0, n, i),
        endLineIRange: d.x.retrieveSingleRangePosInfo(s, r, r.length - 1, n, i),
        lineDir: n,
        charIndex: 0
      };
    }
    extractEndLine(e, t, r, n, i, o) {
      var s = e[0],
        l = a().last(e);
      return {
        type: "end-line",
        iRange: d.x.retrieveSingleRangePosInfo(l, r, r.length - 1, n, o),
        beginLineIRange: d.x.retrieveSingleRangePosInfo(s, t, 0, n, o),
        totalChar: i,
        lineDir: n,
        charIndex: i
      };
    }
    extractAtMiddleLine(e, t, r, n, i, o, s, a, c) {
      var h = d.x.retrieveSingleRangePosInfo(e, r, i, s, c),
        p = d.x.retrieveSingleRangePosInfo(t, n, o, s, c);
      return l.A.isLeftOverlapped(p.block) ? {
        type: "middle-left-overlaped-index",
        firstIRange: h,
        secondIRange: p,
        lineDir: "ltr",
        charIndex: a
      } : {
        type: "middle-index",
        firstIRange: h,
        secondIRange: p,
        lineDir: s,
        charIndex: a
      };
    }
    extractTuple(e, t, r, s) {
      var l = o.H.getLineDir(e);
      if (t.length <= 0) return {
        type: "empty-line",
        line: e,
        lineDir: l,
        charIndex: 0
      };
      if (r < 0) return {
        type: "out-of-range",
        line: e,
        outOfRangeType: "negative",
        lineDir: l,
        charIndex: 0,
        posibleTupleInfo: this.extractTuple(e, t, 0, s)
      };
      if (r <= 0) {
        var c = this.getUniStringCache(t[0], a().last(t)),
          d = (0, n.A)(c, 2),
          h = d[0],
          p = d[1];
        return this.extractBeginLine(t, h, p, l, s);
      }
      for (var u = 0, g, m, f = r - 1, y = r, v, b, x = 0; x < t.length; x++) {
        var C = t[x],
          S = i.A.getNumberOfCharsInBlock(C);
        !g && u <= f && f < u + S && (g = C, v = f - u), !m && u <= y && y < u + S && (m = C, b = y - u), u += S;
      }
      if (r > u) return {
        type: "out-of-range",
        line: e,
        outOfRangeType: "exceed-total-char",
        lineDir: l,
        charIndex: u,
        posibleTupleInfo: this.extractTuple(e, t, u, s)
      };
      if (r >= u) {
        var A = this.getUniStringCache(t[0], a().last(t)),
          w = (0, n.A)(A, 2),
          E = w[0],
          k = w[1];
        return this.extractEndLine(t, E, k, l, u, s);
      }
      var O = this.getUniStringCache(g, m),
        D = (0, n.A)(O, 2),
        P = D[0],
        M = D[1];
      return this.extractAtMiddleLine(g, m, P, M, v, b, l, r, s);
    }
    getUniStringCache() {
      for (var e = new Map(), t = new Array(arguments.length), r = 0; r < arguments.length; r++) {
        var n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        if (e.has(n)) t[r] = e.get(n);else if (l.A.isNonChar(n)) {
          var i = c.Ay.getUnistringUncached(" ");
          e.set(n, i), t[r] = i;
        } else {
          var o = c.Ay.getUnistring(n);
          e.set(n, o), t[r] = o;
        }
      }
      return t;
    }
  }
  var p = new h();
};
