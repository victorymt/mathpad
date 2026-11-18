/* module 76769 — 3350 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => g
  });
  var n = r(40961),
    i = r.n(n),
    o = r(37566),
    s = r(516),
    a = r(2543),
    l = r.n(a),
    c = r(40927),
    d = r.n(c),
    h = r(47858),
    p = r(60693);
  class u {
    generate(e, t, r, n) {
      var a = o.YG(e, ">editarea"),
        c = s.A.findEditLines(a[0]),
        u = [],
        g = [],
        m = [],
        f = -2;
      c.forEach(e => {
        if (s.A.isEmptyLine(e)) {
          var t = p.T.getBCRect(s.A.getEmptyBlock(e), n);
          return u.push(p.T.collapseRect(t, "left")), void this.addBaseLines([t], m);
        }
        var r;
        s.A.findBlocks(e).forEach(e => {
          if ("BLOCK" == e.tagName) {
            var t = this.getTextRects(e, n),
              r = t.blockRects,
              i = t.spaceRects;
            g = g.concat(i), this.addBaseLines(r, m), u = u.concat(r);
          } else u.push(p.T.getBCRect(e, n));
        });
      });
      var y = p.T.getBCRect(e, n),
        v = [],
        b,
        x;
      r.lineOnText ? m.forEach(e => {
        var t = 0,
          r = (0, h.r2)(y.right - y.left),
          n = (0, h.r2)(e - y.top + f);
        v.push("M".concat(0, ",").concat(n, " L").concat(r, ",").concat(n, " "));
      }) : (l().flatMap(m, e => this.baseLineToGaps(e, u, y.left, y.right, n)).forEach(e => {
        var t = (0, h.r2)(e.left - y.left),
          r = (0, h.r2)(e.right - y.left),
          n = (0, h.r2)(e.bottom - y.top + f);
        v.push("M".concat(t, ",").concat(n, " L").concat(r, ",").concat(n, " "));
      }), g.forEach(e => {
        var t = (0, h.r2)(e.left - y.left),
          r = (0, h.r2)(e.right - y.left),
          n = m.find(t => e.top < t && t <= e.bottom);
        if (n) {
          var i = (0, h.r2)(n - y.top + f);
          v.push("M".concat(t, ",").concat(i, " L").concat(r, ",").concat(i, " "));
        }
      }));
      "dotted" == r.lineType && (x = "1"), "dashed" == r.lineType && (x = "4 2");
      var C = {
        strokeDasharray: x,
        stroke: r.color
      };
      i().render(d().createElement("svg", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, d().createElement("path", {
        d: v.join(" "),
        fill: "none",
        style: C
      })), t);
    }
    addBaseLines(e, t) {
      e.forEach(e => {
        var r;
        t.find(t => Math.abs(t - e.bottom) < 3) || t.push(e.bottom);
      });
    }
    getTextRects(e, t) {
      for (var r = p.T.getBCRects(e, t), n, i = [], o = e.textContent, a = 0; a < o.length; a++) {
        var l;
        "\t" == o[a] ? n ? n.to = a : i.push({
          from: a,
          to: a
        }) : n = null;
      }
      var c = [];
      return i.forEach(r => {
        c.push(p.T.getBCRect(s.A.rangeFrom2Indexes(e, r.from, r.to + 1), t));
      }), {
        blockRects: r,
        spaceRects: c
      };
    }
    baseLineToGaps(e, t, r, n, i) {
      for (var o = [p.T.buildRectAtPoint(r, e, i)].concat(l().sortBy(t.filter(t => t.top < e && e <= t.bottom), e => e.right)).concat([p.T.buildRectAtPoint(n, e, i)]), s = [], a = 0; a < o.length - 1; a++) {
        var c = o[a],
          d = o[a + 1];
        s.push(p.T.buildBcRect(c.right, e, d.left, e, i));
      }
      return s.filter(e => e.right - e.left > 3);
    }
  }
  const g = new u();
};
