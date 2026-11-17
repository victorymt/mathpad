/* module 28859 — 631 chars */
module.exports = function (e, t, r) {
  var n = r(67526),
    i = r(33341),
    o = r(57917),
    s = r(4415)("src"),
    a = r(49461),
    l = "toString",
    c = ("" + a).split(l);
  r(56094).inspectSource = function (e) {
    return a.call(e);
  }, (e.exports = function (e, t, r, a) {
    var l = "function" == typeof r;
    l && (o(r, "name") || i(r, "name", t)), e[t] !== r && (l && (o(r, s) || i(r, s, e[t] ? "" + e[t] : c.join(String(t)))), e === n ? e[t] = r : a ? e[t] ? e[t] = r : i(e, t, r) : (delete e[t], i(e, t, r)));
  })(Function.prototype, l, function e() {
    return "function" == typeof this && this[s] || a.call(this);
  });
};
