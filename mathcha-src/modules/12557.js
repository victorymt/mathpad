/* module 12557 — 1771 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    FX: () => a,
    Lh: () => l,
    PT: () => n,
    WK: () => i,
    rc: () => s
  });
  var n = {
    exerciseHeading: "Exercise {number}",
    hintHeading: "Hint",
    solutionHeading: "Solution",
    marks: {
      one: "{count} mark",
      other: "{count} marks"
    }
  };
  function i(e) {
    var t,
      r,
      i,
      o,
      s,
      a,
      l,
      c = null == e ? void 0 : e.worksheetLabels;
    return {
      exerciseHeading: null !== (t = null == c ? void 0 : c.exerciseHeading) && void 0 !== t ? t : n.exerciseHeading,
      hintHeading: null !== (r = null == c ? void 0 : c.hintHeading) && void 0 !== r ? r : n.hintHeading,
      solutionHeading: null !== (i = null == c ? void 0 : c.solutionHeading) && void 0 !== i ? i : n.solutionHeading,
      marks: {
        one: null !== (o = null == c || null === (s = c.marks) || void 0 === s ? void 0 : s.one) && void 0 !== o ? o : n.marks.one,
        other: null !== (a = null == c || null === (l = c.marks) || void 0 === l ? void 0 : l.other) && void 0 !== a ? a : n.marks.other
      }
    };
  }
  function o(e, t) {
    return e.replace(/\{(number|count)\}/g, (e, r) => void 0 === t[r] ? "" : String(t[r])).trim();
  }
  function s(e, t) {
    return o(i(e).exerciseHeading, {
      number: t
    });
  }
  function a(e, t) {
    var r;
    return o(i(e).marks[1 === t ? "one" : "other"], {
      count: t
    });
  }
  function l(e, t) {
    var r;
    if (!e.trim()) return "Enter a label.";
    if (e.length > 160) return "Use at most 160 characters.";
    var n = null === (r = e.match(/\{[^{}]*\}/g)) || void 0 === r ? void 0 : r.find(e => e !== "{".concat(t, "}"));
    return n ? "Unsupported placeholder ".concat(n, ".") : void 0;
  }
};
