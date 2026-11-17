/* module 13764 — 7143 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(516),
    i = r(94841),
    o = r(3453),
    s = r(73524),
    a = r(96579),
    l = r(10632),
    c = r(90113),
    d = r(36487),
    h = r(50255);
  class p {
    search(e, t, r, n) {
      var i = n.zc,
        s = this.buildBlockInfo(t),
        l = (0, o.A)(s, 2),
        d = l[0],
        h = l[1],
        p = c.H.getLineDir(e);
      n = a.l.clampPos(r, n);
      for (var u = 0, g = h, m = 0; g - u > 1;) {
        var f = Math.floor((g + u) / 2);
        if (this.posIn(u, f, d, n, i)) g = f;else if (u = f, ++m > 200) break;
      }
      if (g == u) return {
        type: "quick",
        charIndex: u
      };
      g != u + 1 && (g = u + 1);
      var y = this.extractRangeInfoStartWith(d, u, n, p, i),
        v = y.rangeFlow,
        b = y.posSide,
        x = y.rangeRect;
      if ("right" == v) {
        if ("left" == b) {
          if (0 == u) return {
            type: "quick",
            charIndex: 0
          };
          var C, S;
          if ("right" == this.extractRangeInfoStartWith(d, u - 1, n, p, i).rangeFlow) return {
            type: "quick",
            charIndex: u
          };
          var A = this.findMatchedVLine(e, t, r, c.H.vlineFromRect(x, "left"), i),
            w = (0, o.A)(A, 2),
            E = w[0],
            k = w[1];
          return E ? {
            type: "slow",
            charIndex: k,
            vline: E
          } : {
            type: "quick",
            charIndex: u
          };
        }
        if ("right" == b) {
          if (g == h) return {
            type: "quick",
            charIndex: g
          };
          var O, D;
          if ("right" == this.extractRangeInfoStartWith(d, g, n, p, i).rangeFlow) return {
            type: "quick",
            charIndex: g
          };
          var P = this.findMatchedVLine(e, t, r, c.H.vlineFromRect(x, "right"), i),
            M = (0, o.A)(P, 2),
            I = M[0],
            T = M[1];
          return I ? {
            type: "slow",
            charIndex: T,
            vline: I
          } : {
            type: "quick",
            charIndex: g
          };
        }
      }
      if ("right" == b) {
        if (0 == u) return {
          type: "quick",
          charIndex: 0
        };
        var L, R;
        if ("left" == this.extractRangeInfoStartWith(d, u - 1, n, p, i).rangeFlow) return {
          type: "quick",
          charIndex: u
        };
        var B = this.findMatchedVLine(e, t, r, c.H.vlineFromRect(x, "right"), i),
          F = (0, o.A)(B, 2),
          j = F[0],
          _ = F[1];
        return j ? {
          type: "slow",
          charIndex: _,
          vline: j
        } : {
          type: "quick",
          charIndex: u
        };
      }
      if ("left" == b) {
        if (g == h) return {
          type: "quick",
          charIndex: g
        };
        var N, z;
        if ("left" == this.extractRangeInfoStartWith(d, g, n, p, i).rangeFlow) return {
          type: "quick",
          charIndex: g
        };
        var H = this.findMatchedVLine(e, t, r, c.H.vlineFromRect(x, "left"), i),
          W = (0, o.A)(H, 2),
          V = W[0],
          U = W[1];
        return V ? {
          type: "slow",
          charIndex: U,
          vline: V
        } : {
          type: "quick",
          charIndex: g
        };
      }
    }
    findMatchedVLine(e, t, r, n, i) {
      var o, s;
      return d.S.find(e, t, 0, (e, t) => {
        var a = h.T.extractVLine(e, r, i);
        if (this.vlineInfoMatch(a, n, r)) return o = a, s = t, !0;
      }, i), [o, s];
    }
    vlineInfoMatch(e, t, r) {
      switch (e.type) {
        case "single":
        case "gap":
        case "line-wrap":
          return !!this.vCursorMatch(e.vcursor, t, r) || !(!e.altVCursor || !this.vCursorMatch(e.altVCursor, t, r));
        case "same-dir-break":
        case "change-direction":
          return !!this.vCursorMatch(e.vcursor, t, r);
      }
    }
    vCursorMatch(e, t, r) {
      return !!a.l.almostMatchVLine(r, e.vline, t) || !(!e.edgeWrapVLine || !a.l.almostMatchVLine(r, e.edgeWrapVLine, t));
    }
    extractRangeInfoStartWith(e, t, r, n, i) {
      var o = this.findRangeRectStartWith(t, e, n, i),
        s = this.posInRects(o.rects, r) || o.rects[0],
        a = this.posSideOf(s, r);
      return {
        rangeFlow: o.flow,
        posSide: a,
        rangeRect: s
      };
    }
    posSideOf(e, t) {
      return Math.abs(t.left - e.left) < Math.abs(t.left - e.right) ? "left" : "right";
    }
    findRangeRectStartWith(e, t, r, n) {
      for (var i = 0; i < t.length; i++) {
        var o = t[i],
          s;
        if (o.startIdx <= e && e + 1 <= o.endIdx) return l.x.retrieveSingleRangePosInfo(o.block, o.uniStr, e - o.startIdx, r, n);
      }
    }
    posIn(e, t, r, n, i) {
      for (var o = 0; o < r.length; o++) {
        var s = r[o];
        if (s.startIdx <= e && t <= s.endIdx) {
          var a = l.x.rangeRectsFrom2Idx(s.block, s.uniStr, e - s.startIdx, t - s.startIdx, i);
          return this.posInRects(a, n);
        }
        if (e <= s.startIdx && s.endIdx <= t) {
          var c = l.x.rangeRectsFrom2Idx(s.block, s.uniStr, 0, s.uniStr.length, i),
            d = this.posInRects(c, n);
          if (d) return d;
        }
        if (s.startIdx <= e && e < s.endIdx) {
          var h = l.x.rangeRectsFrom2Idx(s.block, s.uniStr, e - s.startIdx, s.uniStr.length, i),
            p = this.posInRects(h, n);
          if (p) return p;
        }
        if (s.startIdx < t && t <= s.endIdx) {
          var u = l.x.rangeRectsFrom2Idx(s.block, s.uniStr, 0, t - s.startIdx, i),
            g = this.posInRects(u, n);
          if (g) return g;
        }
      }
    }
    posInRects(e, t) {
      return e.find(e => e.left <= t.left && t.left <= e.right && e.top <= t.top && t.top <= e.bottom);
    }
    buildBlockInfo(e) {
      for (var t = new Array(e.length), r = 0, i = 0; i < e.length; i++) {
        var o = e[i],
          a = n.A.isChar(o) ? s.Ay.getUnistring(o) : s.Ay.whitespaceUni;
        t[i] = {
          uniStr: a,
          block: o,
          startIdx: r,
          endIdx: r + a.length
        }, r += a.length;
      }
      return [t, r];
    }
  }
  var u = new p(),
    g = r(89473);
  class m {
    buildForEditAreaBlock(e, t) {
      var r = new i.X().withLine(e).withEditor(e);
      return e.textContent ? this.forLine(e, e, t) : r.withCharIndex(0).build();
    }
    buildForEditAreaLine(e, t) {
      var r = new i.X().withLine(e).withEditor(e);
      return n.A.isEmptyLine(e) ? r.withCharIndex(0).build() : this.forLine(e, e, t);
    }
    build(e, t, r, o) {
      var s = new i.X().withLine(e).withEditor(t).withPrevCursorPos(o);
      return n.A.isEmptyLine(e) ? s.withCharIndex(0).build() : this.forLine(e, t, r);
    }
    forLine(e, t, r) {
      var o = n.A.findBlocks(e),
        s = g.z.extract(e, o, r.zc),
        a = u.search(e, o, s, r),
        l;
      return new i.X().withRequestGeoPos(r).withCharIndex(a.charIndex).withEditor(t).withLine(e).build();
    }
  }
  const f = new m();
};
