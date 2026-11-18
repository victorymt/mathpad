/* module 30803 — 3605 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => i,
    w: () => o
  });
  class n {
    strStartsWith(e, t) {
      return e.substring(0, t.length) == t;
    }
    nextIdByPreviousId(e) {
      if (this.isDiagramEditorId(e)) return this.nextDiagramEditorId();
      if (this.isDiagramConnectionId(e)) return this.nextDiagramConnectionId();
      if (this.isDiagramArrowId(e)) return this.nextDiagramArrowId();
      if (this.isDiagramLinkedId(e)) return this.nextDiagramLinkedEntityId();
      if (this.isDiagramShapeId(e)) return this.nextDiagramShapeId();
      if (this.isDiagramIntersectionId(e)) return this.nextDiagramIntersectionId();
      if (this.isDiagramCompositeShapeId(e)) return this.nextDiagramCompositeShapeId();
      if (this.isDiagramGroupId(e)) return this.nextDiagramGroupEntityId();
      if (this.isTemporaryEntity(e)) return this.nextTemporaryEntity();
      if (this.isDiagramGuideId(e)) return this.nextDiagramGuideId();
      throw new Error("not support now");
    }
    nextId() {
      return "n" + Math.random();
    }
    nextDiagramGuideId(e) {
      return null != e ? "guide000000" + e : "guide" + Math.random().toString().substr(2);
    }
    nextDiagramEditorId() {
      return "de" + Math.random().toString().substr(2);
    }
    nextDiagramControlledEditorId(e) {
      return "dexy_" + e + "_" + Math.random().toString().substr(2);
    }
    nextDiagramConnectionId() {
      return "dc" + Math.random().toString().substr(2);
    }
    nextDiagramArrowId() {
      return "da" + Math.random().toString().substr(2);
    }
    nextDiagramLinkedEntityId() {
      return "dl" + Math.random().toString().substr(2);
    }
    nextDiagramShapeId() {
      return "ds" + Math.random().toString().substr(2);
    }
    nextDiagramIntersectionId() {
      return "di" + Math.random().toString().substr(2);
    }
    nextDiagramCompositeShapeId() {
      return "dp" + Math.random().toString().substr(2);
    }
    nextDiagramGroupEntityId() {
      return "dg" + Math.random().toString().substr(2);
    }
    nextTemporaryEntity() {
      return "temp" + Math.random().toString().substr(2);
    }
    isDiagramGuideId(e) {
      return this.strStartsWith(e, "guide");
    }
    isDiagramArrowId(e) {
      return this.strStartsWith(e, "da");
    }
    isDiagramConnectionId(e) {
      return this.strStartsWith(e, "dc");
    }
    isDiagramEditorId(e) {
      return this.strStartsWith(e, "de");
    }
    isDiagramControlledEditorId(e) {
      return this.strStartsWith(e, "dexy_");
    }
    getDiagramControlledEditorOwnerId(e) {
      if (this.isDiagramControlledEditorId(e)) return e.split("_")[1];
    }
    isStrictDiagramEditorId(e) {
      return this.strStartsWith(e, "de") && Number.isSafeInteger(Number.parseInt(e[2], 10));
    }
    isDiagramShapeId(e) {
      return this.strStartsWith(e, "ds");
    }
    isDiagramShapeOrArrowOrCompositeId(e) {
      return this.isDiagramShapeId(e) || this.isDiagramArrowId(e) || this.isDiagramCompositeShapeId(e);
    }
    isDiagramIntersectionId(e) {
      return this.strStartsWith(e, "di");
    }
    isDiagramGroupId(e) {
      return this.strStartsWith(e, "dg");
    }
    isDiagramGroupEntity(e) {
      return this.isDiagramGroupId(e.id);
    }
    isDiagramCompositeShapeId(e) {
      return this.strStartsWith(e, "dp");
    }
    isDiagramLinkedId(e) {
      return this.strStartsWith(e, "dl");
    }
    isDiagramLinkedEntity(e) {
      return this.isDiagramLinkedId(e.id);
    }
    isTemporaryEntity(e) {
      return this.strStartsWith(e, "temp");
    }
  }
  var i = new n(),
    o = new n();
};
