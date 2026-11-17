/* module 70695 — 622 chars */
module.exports = function (e, t, r) {
  var n = r(78096),
    i = r(72428),
    o = r(56449),
    s = r(3656),
    a = r(30361),
    l = r(37167),
    c,
    d = Object.prototype.hasOwnProperty;
  function h(e, t) {
    var r = o(e),
      c = !r && i(e),
      h = !r && !c && s(e),
      p = !r && !c && !h && l(e),
      u = r || c || h || p,
      g = u ? n(e.length, String) : [],
      m = g.length;
    for (var f in e) !t && !d.call(e, f) || u && ("length" == f || h && ("offset" == f || "parent" == f) || p && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || a(f, m)) || g.push(f);
    return g;
  }
  e.exports = h;
};
