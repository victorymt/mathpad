/* module 48662 — 297 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    isConnectTheSame2Editor(e, t) {
      return e.fromEditorId == t.fromEditorId && e.toEditorId == t.toEditorId || e.fromEditorId == t.toEditorId && e.toEditorId == t.fromEditorId;
    }
  }
  const i = new n();
};
