/* module 35267 — 1036 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(47858),
    i = r(21735);
  class o {
    buildPrefix(e, t, r, n) {
      var o = this.findSectionLineInfo(t, e);
      return o ? (n = n || {}, i.A.getSection(r - 1, o.indentCounters, {
        includingUpperSection: !0,
        level1: {
          numbering: this.getRequiredNumbering(n.level1)
        },
        level2: {
          numbering: this.getRequiredNumbering(n.level2)
        },
        level3: {
          numbering: this.getRequiredNumbering(n.level3)
        }
      }).trim()) : "";
    }
    getRequiredNumbering(e) {
      return e && e.numbering && "None" != e.numbering ? e.numbering : "1";
    }
    findSectionLineInfo(e, t) {
      for (var r = e.indexOf(t); r >= 0;) {
        var i,
          o = e[r].reactInstance,
          s = o.getLineData(),
          a,
          l;
        if ("section" == n.A.getLineStyle(s, "listType")) return o.getLineData && o.getLineInfo();
        r--;
      }
    }
  }
  const s = new o();
};
