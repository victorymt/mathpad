/* module 54211 — 2269 chars */
module.exports = function (e) {
  function t(e) {
    var t = (e = e.replace(/,/g, " ").replace(/-/g, " - ").replace(/-\s+/g, "-").replace(/([a-zA-Z])/g, " $1 ")).replace(/([a-zA-Z])\s?/g, "|$1").split("|"),
      r = t.length,
      n,
      i,
      o,
      s,
      a = [],
      l,
      c,
      d = 0,
      h = 0,
      p = 0,
      u = 0,
      g = 0,
      m = 0,
      f = 0,
      y = 0,
      v = "";
    for (n = 1; n < r; n++) if (s = (o = (i = t[n]).substring(0, 1)).toLowerCase(), l = (a = (a = i.replace(o, "").trim().split(" ")).filter(function (e) {
      return "" !== e;
    }).map(parseFloat)).length, "m" === s) {
      if (v += "M ", "m" === o ? (p += a[0], u += a[1]) : (p = a[0], u = a[1]), d = p, h = u, v += p + " " + u + " ", l > 2) for (c = 0; c < l; c += 2) "m" === o ? (p += a[c], u += a[c + 1]) : (p = a[c], u = a[c + 1]), v += ["L", p, u, ""].join(" ");
    } else if ("l" === s) for (c = 0; c < l; c += 2) "l" === o ? (p += a[c], u += a[c + 1]) : (p = a[c], u = a[c + 1]), v += ["L", p, u, ""].join(" ");else if ("h" === s) for (c = 0; c < l; c++) "h" === o ? p += a[c] : p = a[c], v += ["L", p, u, ""].join(" ");else if ("v" === s) for (c = 0; c < l; c++) "v" === o ? u += a[c] : u = a[c], v += ["L", p, u, ""].join(" ");else if ("q" === s) for (c = 0; c < l; c += 4) "q" === o ? (g = p + a[c], m = u + a[c + 1], p += a[c + 2], u += a[c + 3]) : (g = a[c], m = a[c + 1], p = a[c + 2], u = a[c + 3]), v += ["Q", g, m, p, u, ""].join(" ");else if ("t" === s) for (c = 0; c < l; c += 2) g = p + (p - g), m = u + (u - m), "t" === o ? (p += a[c], u += a[c + 1]) : (p = a[c], u = a[c + 1]), v += ["Q", g, m, p, u, ""].join(" ");else if ("c" === s) for (c = 0; c < l; c += 6) "c" === o ? (g = p + a[c], m = u + a[c + 1], f = p + a[c + 2], y = u + a[c + 3], p += a[c + 4], u += a[c + 5]) : (g = a[c], m = a[c + 1], f = a[c + 2], y = a[c + 3], p = a[c + 4], u = a[c + 5]), v += ["C", g, m, f, y, p, u, ""].join(" ");else if ("s" === s) for (c = 0; c < l; c += 4) g = p + (p - f), m = u + (u - y), "s" === o ? (f = p + a[c], y = u + a[c + 1], p += a[c + 2], u += a[c + 3]) : (f = a[c], y = a[c + 1], p = a[c + 2], u = a[c + 3]), v += ["C", g, m, f, y, p, u, ""].join(" ");else "z" === s && (v += "Z ", p = d, u = h);
    return v.trim();
  }
  e.exports = t;
};
