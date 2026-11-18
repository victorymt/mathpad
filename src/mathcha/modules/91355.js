/* module 91355 — 586 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    getDiagramEditors(e) {
      if (!e) return [];
      var t = [];
      for (var r in e) if (e.hasOwnProperty(r)) {
        if (!e[r]) continue;
        if ("caption" == r) continue;
        t.push(e[r]);
      }
      return t;
    }
    getDiagramEditorKeys(e) {
      if (!e) return [];
      var t = [];
      for (var r in e) if (e.hasOwnProperty(r)) {
        if (!e[r]) continue;
        if ("caption" == r) continue;
        t.push(r);
      }
      return t;
    }
  }
  const i = new n();
};
