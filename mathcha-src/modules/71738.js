/* module 71738 — 652 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => c
  });
  var n = r(3453),
    i = r(40961),
    o = r.n(i),
    s = r(73856),
    a = r(55451);
  class l {
    findLineEditorIds(e) {
      var t = o().findDOMNode(e),
        r = s.w.findClosetEditArea(t),
        i = (0, n.A)(r, 2),
        l = i[0],
        c = i[1];
      if (l && c) return new Promise(t => {
        a.A.nextMicro(() => {
          if (!e.willComponentUnmount) return t({
            editorId: c.reactInstance.getModel().id,
            lineId: l.reactInstance.getLineData().id
          });
          t(void 0);
        });
      });
    }
  }
  var c = new l();
};
