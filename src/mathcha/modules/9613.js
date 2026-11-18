/* module 9613 — 1330 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(88819),
    i = r(18367),
    o = r(83982),
    s = r(70480),
    a = r(16627),
    l = r(61254),
    c = r(94793),
    d = r(14594),
    h = c(function (e) {
      return l(e);
    }),
    p = !1,
    u = "cssFloat",
    g,
    m,
    f,
    y,
    v,
    b,
    x,
    C,
    S,
    A,
    w;
  if (i.canUseDOM) {
    var E = document.createElement("div").style;
    try {
      E.font = "";
    } catch (e) {
      p = !0;
    }
    void 0 === document.documentElement.style.cssFloat && (u = "styleFloat");
  }
  var k = {
    createMarkupForStyles: function (e, t) {
      var r = "";
      for (var n in e) if (e.hasOwnProperty(n)) {
        var i = 0 === n.indexOf("--"),
          o = e[n];
        0, null != o && (r += h(n) + ":", r += a(n, o, t, i) + ";");
      }
      return r || null;
    },
    setValueForStyles: function (e, t, r) {
      var i = e.style;
      for (var o in t) if (t.hasOwnProperty(o)) {
        var s = 0 === o.indexOf("--");
        0;
        var l = a(o, t[o], r, s);
        if ("float" !== o && "cssFloat" !== o || (o = u), s) i.setProperty(o, l);else if (l) i[o] = l;else {
          var c = p && n.shorthandPropertyExpansions[o];
          if (c) for (var d in c) i[d] = "";else i[o] = "";
        }
      }
    }
  };
  e.exports = k;
};
