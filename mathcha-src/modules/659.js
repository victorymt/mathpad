/* module 659 — 371 chars */
module.exports = function (e, t, r) {
  var n = r(51873),
    i = Object.prototype,
    o = i.hasOwnProperty,
    s = i.toString,
    a = n ? n.toStringTag : void 0;
  function l(e) {
    var t = o.call(e, a),
      r = e[a];
    try {
      e[a] = void 0;
      var n = !0;
    } catch (e) {}
    var i = s.call(e);
    return n && (t ? e[a] = r : delete e[a]), i;
  }
  e.exports = l;
};
