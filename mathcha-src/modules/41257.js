/* module 41257 — 1450 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(516),
    i = r(2543),
    o = r.n(i),
    s = r(73524);
  class a {
    findSelectedBlock(e, t, r) {
      for (var i = n.A.findBlocks(e), o = 0, s = 0; s < i.length; s++) {
        var a = i[s],
          l = this.getNumberOfCharsInBlock(a);
        if (t >= o && t < o + l) return {
          element: a,
          localIndex: t - o
        };
        if (!r && t == o + l) {
          var c = {
            element: a,
            localIndex: t - o
          };
          return s < i.length - 1 && (c.sub = {
            element: i[s + 1],
            localIndex: 0
          }), c;
        }
        o += l;
      }
    }
    isLineBlock(e) {
      return !(e instanceof HTMLElement);
    }
    findStartCharIndexOfBlock(e, t) {
      if (n.A.isEditAreaBlock(e) && n.A.isInnerTextEmpty(e)) return 0;
      for (var r = n.A.findBlocks(e), i = 0, o = 0; o < r.length; o++) {
        var s = r[o],
          a;
        if (s == t) return i;
        i += this.getNumberOfCharsInBlock(s);
      }
      return 0;
    }
    getNumberOfCharsInBlock(e) {
      return n.A.isNonChar(e) ? 1 : s.Ay.lengthByCache(e);
    }
    toCharIndexLineBlock(e, t) {
      return o().assign({}, e, {
        charIndex: t
      });
    }
    getNumberOfCharsFromLine(e) {
      return o().sumBy(n.A.findBlocks(e), e => this.getNumberOfCharsInBlock(e));
    }
  }
  const l = new a();
};
