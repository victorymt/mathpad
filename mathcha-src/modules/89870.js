/* module 89870 — 2069 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(30803);
  class i {
    findAllOriginalEditorIds(e) {
      return this.findAllLinkedEntities(e).map(e => e.linkedId);
    }
    findAllLinkedEntities(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var i = e[r];
        n.w.isDiagramGroupId(i.id) && this.innerFindAllLinkedEntities(i, t), n.w.isDiagramLinkedId(i.id) && t.push(i);
      }
      return t;
    }
    findAllOriginalEditors(e, t) {
      return this.findAllLinkedEntities(e).map(e => t[e.linkedId]);
    }
    innerFindAllLinkedEntities(e, t) {
      for (var r = 0; r < e.entities.length; r++) {
        var i = e.entities[r];
        n.w.isDiagramGroupId(i.id) && this.innerFindAllLinkedEntities(i, t), n.w.isDiagramLinkedId(i.id) && t.push(i);
      }
    }
    findLinkWithLinkToEditor(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (n.w.isDiagramGroupId(i.id)) {
          var o = this.findLinkWithLinkToEditor(e, i.entities);
          if (o) return o;
        }
        if (n.w.isDiagramLinkedId(i.id) && i.linkedId == e) return i;
      }
      return null;
    }
    findOriginalEntityFromLink(e, t) {
      return t[e.linkedId];
    }
    findGroupedEnityFromEditor(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (n.w.isDiagramGroupId(i.id) && this.isEditorIdInGroup(e, i)) return i;
      }
      return null;
    }
    findGroupedEnityFromConnection(e, t) {
      for (var r = 0; r < t.length; r++) {
        var i = t[r];
        if (n.w.isDiagramGroupId(i.id) && (this.isEditorIdInGroup(e.fromEditorId, i) || this.isEditorIdInGroup(e.toEditorId, i))) return i;
      }
      return null;
    }
    isEditorIdInGroup(e, t) {
      for (var r = 0; r < t.entities.length; r++) {
        var i = t.entities[r];
        if (n.w.isDiagramGroupId(i.id) && this.isEditorIdInGroup(e, i)) return !0;
        if (n.w.isDiagramLinkedId(i.id) && i.linkedId == e) return !0;
      }
      return !1;
    }
  }
  const o = new i();
};
