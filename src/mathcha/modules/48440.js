/* module 48440 — 1545 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(2543),
    i = r.n(n),
    o = r(73524),
    s = r(30803),
    a = r(70224);
  class l {
    getModelFromStructure(e, t) {
      if ("editor" == e) return {
        id: s.w.nextId(),
        lines: [{
          id: s.w.nextId(),
          blocks: []
        }]
      };
      var r = {
        id: s.w.nextId(),
        type: "composite",
        text: t,
        elements: {}
      };
      return i().keys(e).forEach(t => {
        r.elements[t] = this.getModelFromStructure(e[t], void 0);
      }), r;
    }
    getModel(e) {
      var t = this.getModelMeta(),
        r = a.A.createComposite(t.text);
      return i().keys(t.elements).forEach(n => {
        var i = t.elements[n];
        e && !e.isExpanded && (e.isExpanded || i.defaultHide) || (r.elements[n] = a.A.createEmptyEditor());
      }), r;
    }
    fillSymbolInfo(e) {
      return null == e.searchText && (e.searchText = e.names.join(" "), e.description && (e.searchText += " " + e.description)), e;
    }
    isEmptyOrOneCharEditor(e) {
      return this.isEmptyEditor(e) || this.isOneCharacterEditor(e);
    }
    isOneCharacterEditor(e) {
      return 1 == e.lines.length && 1 == e.lines[0].blocks.length && null == e.lines[0].blocks[0].type && o.Ay.isSingleChar(e.lines[0].blocks[0].text);
    }
    isNotExistOrEmptyEditor(e) {
      return null == e || this.isEmptyEditor(e);
    }
    isEmptyEditor(e) {
      return !e || 1 == e.lines.length && 0 == e.lines[0].blocks.length;
    }
  }
};
