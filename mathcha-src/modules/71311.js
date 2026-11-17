/* module 71311 — 5660 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ul: () => d,
    V9: () => l,
    Vu: () => g,
    Zy: () => p,
    aN: () => y,
    b1: () => m,
    lM: () => h,
    ok: () => f,
    tc: () => u
  });
  var n = r(64467),
    i = r(7767),
    o = r(59769);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function l(e, t) {
    if ("opentype" === e.radical.renderer && Number.isFinite(t) && !(t <= 0)) {
      var r = e.source(),
        n = (0, o.H)(r, "√", t * r.unitsPerEm);
      if (n) return (n.bounds[2] - n.bounds[0]) * n.fit / r.unitsPerEm + (e.radical.contentGapEm || 0);
    }
  }
  function c(e, t) {
    var r = e.radical.degree;
    if ("opentype" !== e.radical.renderer) return r;
    var n = e.source(),
      i = (0, o.H)(n, "√", t * n.unitsPerEm),
      s = i.placements[0],
      l = n.radicalDegreeAnchors[s.glyph];
    return a(a({}, r), {}, {
      hookTopEm: l ? (s.y + l.y - i.bounds[1]) * i.fit / n.unitsPerEm : r.hookTopEm,
      kernBeforeEm: n.radicalKernBeforeDegree / n.unitsPerEm,
      kernAfterEm: n.radicalKernAfterDegree / n.unitsPerEm
    });
  }
  function d(e, t) {
    return "legacy" === e.radical.renderer ? e.radical.legacyDegreePaddingBottom ? {
      paddingBottom: e.radical.legacyDegreePaddingBottom
    } : void 0 : (0, i.US)(t, c(e, t));
  }
  function h(e, t, r) {
    if ("legacy" === e.radical.renderer) {
      var n = e.radical.degree,
        o = n.kernAfterEm,
        s = Math.min(n.kernGrowthMaxEm, (t - r) / r / e.radical.legacyDegreeGrowthDivisor);
      return {
        marginRight: "".concat(o += s, "em"),
        minWidth: "".concat(-o, "em")
      };
    }
    var a = t / r;
    return (0, i.US)(a, c(e, a));
  }
  function p(e, t) {
    if (e.scripts.nativePrimeWidths) {
      var r = t.match(/['\u2032-\u2034\u2057]+$/);
      if (r) {
        var n = e.source();
        return Array.from(r[0]).reduce((e, t) => e + n.primeWidths[t], 0) / n.unitsPerEm;
      }
    }
    for (var i = 0, o = Object.keys(e.scripts.primeMargins); i < o.length; i++) {
      var s = o[i];
      if (t.endsWith(s)) return e.scripts.primeMargins[s];
    }
  }
  function u(e) {
    if (e.scripts.nativeCombinedGap) {
      var t = e.source();
      return t.scriptGapMin / t.unitsPerEm / e.scripts.scale;
    }
  }
  function g(e, t, r, n) {
    var i = e.namedLimit;
    if (i) {
      var o = e.source(),
        s = o.limitOperators[t];
      if (s) {
        var l = (r ? o.upperLimitGapMin : o.lowerLimitGapMin) / o.unitsPerEm,
          c = r ? l + s.bounds[3] / o.unitsPerEm - i.upperBoxEm : l - s.bounds[1] / o.unitsPerEm - i.lowerBoxEm,
          d = i.decoration[t],
          h = d && (r ? d.upper : d.lower) || 0;
        return a(a({}, r ? {
          marginBottom: n ? c + h : i.sideUpperEm
        } : {
          marginTop: n ? c + h : i.sideLowerEm
        }), n ? {} : {
          marginLeft: "".concat(((d ? s.width : s.bounds[2]) + o.spaceAfterScript) / o.unitsPerEm, "em")
        });
      }
    }
  }
  function m(e, t, r, n, i, o) {
    var s = e.integral;
    if (s) {
      var l = e.source(),
        c = l.integrals[n];
      if (c) {
        var d = s.glyphScale[o],
          h = s.editorScale[r];
        if ("limit" === i) {
          var p = s.boxes[o][r],
            u = c.italicCorrection / l.unitsPerEm * d / 2 / h,
            g = "display" === o ? h : 1;
          return "from" === t ? {
            marginLeft: u,
            marginRight: -u,
            marginBottom: l.upperLimitGapMin / l.unitsPerEm - p.upper
          } : {
            marginLeft: -u,
            marginRight: u,
            marginTop: (l.lowerLimitGapMin / l.unitsPerEm - p.lower) / g
          };
        }
        var m = s.side[o][r],
          f = "from" === t ? {
            justifyContent: "flex-start",
            marginBottom: m.upper
          } : {
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            marginTop: m.lower
          },
          y = "from" === t ? c.bounds[2] : c.width - c.italicCorrection;
        return a(a({}, f), {}, {
          marginLeft: (y * d + l.spaceAfterScript) / l.unitsPerEm / h
        });
      }
    }
  }
  function f(e, t, r, n, i) {
    var o = e.largeOperator;
    if (o) {
      var s = e.source(),
        a = s.operators[r],
        l = "limit" === n ? o.above[a ? "native" : "fallback"][i] : o.side[i],
        c = "limit" === n ? void 0 : a ? (a.bounds[2] * o.glyphScale[i] + s.spaceAfterScript) / s.unitsPerEm : o.fallbackSideLeft[i][r];
      return "from" === t ? {
        marginBottom: l.upper,
        marginLeft: c
      } : {
        marginTop: l.lower,
        marginLeft: c
      };
    }
  }
  function y(e) {
    if (e.underline) {
      var t = e.source();
      return {
        ascentEm: e.underline.ascentEm,
        positionEm: t.underlinePosition / t.unitsPerEm,
        thicknessEm: t.underlineThickness / t.unitsPerEm
      };
    }
  }
};
