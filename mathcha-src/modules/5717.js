/* module 5717 — 748 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    h: () => a
  });
  var n = r(2543),
    i = r.n(n),
    o = r(30803);
  class s {
    assignIds(e) {
      return (e = i().cloneDeep(e)).forEach(e => {
        this.assignIdsForLine(e);
      }), e;
    }
    assignIdsForCompositeBlock(e) {
      Object.keys(e.elements).map(t => e.elements[t]).forEach(e => {
        o.Z.isDiagramEditorId(e.id) || (e.id = o.Z.nextId()), this.assignIds(e.lines);
      });
    }
    assignIdsForBlocks(e) {
      e.forEach(e => {
        e.id = o.Z.nextId(), "composite" == e.type && this.assignIdsForCompositeBlock(e);
      });
    }
    assignIdsForLine(e) {
      e && (e.id = o.Z.nextId(), this.assignIdsForBlocks(e.blocks));
    }
  }
  var a = new s();
};
