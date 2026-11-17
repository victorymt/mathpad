/* module 59769 — 2654 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t, r) {
    if (!e.length || !Number.isFinite(t) || t <= 0) return null;
    for (var n = e.filter(e => e.extender).length, i = e.length - n, o = n ? Math.floor((1024 - i) / n) : 0, s = function n(i) {
        var s = [];
        if (e.forEach(e => {
          for (var t = e.extender ? i : 1, r = 0; r < t; r++) s.push(e);
        }), !s.length) return "continue";
        var a = s.slice(1).map((e, t) => Math.min(s[t].end, e.start));
        if (a.some(e => e < r)) return "continue";
        var l = s.reduce((e, t) => e + t.advance, 0),
          c = l - a.reduce((e, t) => e + t, 0),
          d = l - a.length * r;
        if (d < t && i < o) return "continue";
        var h = Math.max(c, Math.min(d, t)),
          p = a.reduce((e, t) => e + t - r, 0),
          u = p ? (l - h - a.length * r) / p : 0,
          g = a.map(e => r + (e - r) * u),
          m = 0,
          f;
        return {
          v: {
            placed: s.map((e, t) => {
              var r = {
                part: e,
                offset: m
              };
              return m += e.advance - (g[t] || 0), r;
            }),
            overlaps: g,
            repeats: i,
            extent: h
          }
        };
      }, a = 0; a <= o; a++) {
      var l = s(a);
      if ("continue" !== l && "object" == typeof l) return l.v;
    }
    return null;
  }
  function i(e, t, r) {
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.minConnectorOverlap;
    if (!Number.isFinite(r) || r <= 0) return null;
    var s = (i ? e.horizontal : e.vertical)[t];
    if (!s) return null;
    var a = i ? 0 : 1,
      l = s.variants.find(e => e.advance >= r),
      c,
      d = [],
      h = 0,
      p = "variant";
    if (l) c = [{
      glyph: l.glyph,
      x: 0,
      y: 0
    }];else {
      var u = s.parts && n(s.parts, r, o);
      if (!u) return null;
      p = "assembly", d = u.overlaps, h = u.repeats, c = u.placed.map(e => ({
        glyph: e.part.glyph,
        x: i ? e.offset : 0,
        y: i ? 0 : e.offset
      }));
    }
    var g = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    c.forEach(t => {
      var r = e.glyphs[t.glyph].bounds;
      g[0] = Math.min(g[0], r[0] + t.x), g[1] = Math.min(g[1], r[1] + t.y), g[2] = Math.max(g[2], r[2] + t.x), g[3] = Math.max(g[3], r[3] + t.y);
    });
    var m = g[a + 2] - g[a];
    return m > 0 ? {
      mode: p,
      placements: c,
      bounds: g,
      fit: r / m,
      overlaps: d,
      repeats: h
    } : null;
  }
  r.d(t, {
    H: () => i
  });
};
