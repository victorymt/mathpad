/* module 47401 — 636 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    $: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().PureComponent {
    render() {
      var e = this.props,
        t = e.text,
        r = e.query;
      if (!r) return i().createElement("span", null, t);
      for (var n = new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), o = [], s = 0, a; a = n.exec(t);) a.index > s && o.push(t.slice(s, a.index)), o.push(i().createElement("mark", {
        key: a.index
      }, a[0])), s = a.index + a[0].length;
      return s < t.length && o.push(t.slice(s)), i().createElement("span", null, o);
    }
  }
};
