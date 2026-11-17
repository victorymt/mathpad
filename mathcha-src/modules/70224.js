/* module 70224 — 2655 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(30803);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    createEmptyLine() {
      return {
        id: i.Z.nextId(),
        blocks: []
      };
    }
    createComposite(e) {
      return {
        id: i.Z.nextId(),
        text: e,
        type: "composite",
        elements: {}
      };
    }
    createLineFromBlock(e) {
      return {
        id: i.Z.nextId(),
        blocks: [e]
      };
    }
    createLineFromBlocks(e) {
      return {
        id: i.Z.nextId(),
        blocks: e
      };
    }
    createPureTextLine(e, t) {
      return e ? {
        id: i.Z.nextId(),
        blocks: [{
          id: i.Z.nextId(),
          text: e
        }],
        style: t
      } : {
        id: i.Z.nextId(),
        blocks: [],
        style: t
      };
    }
    createEmptyEditor(e) {
      return {
        id: e || i.Z.nextId(),
        lines: [{
          id: i.Z.nextId(),
          blocks: []
        }]
      };
    }
    createEditorWithSingleLineBlocks(e) {
      return {
        id: i.Z.nextId(),
        lines: [{
          id: i.Z.nextId(),
          blocks: e
        }]
      };
    }
    createEditorWith(e) {
      return null == e ? this.createEmptyEditor() : "string" == typeof e ? this.createOneTextEditor(e) : 0 == e.length ? this.createEmptyEditor() : (e.text && (e = [this.createLineFromBlock(e)]), {
        id: i.Z.nextId(),
        lines: e
      });
    }
    createOneTextEditor(e, t) {
      var r = this.createEmptyEditor(t);
      return r.lines[0].blocks = [{
        id: i.Z.nextId(),
        text: e
      }], r;
    }
    createTextBlock(e, t) {
      return s(s({}, t), {}, {
        id: i.Z.nextId(),
        text: e
      });
    }
    createSingleBlock(e) {
      return {
        type: "single",
        id: i.Z.nextId(),
        text: e
      };
    }
  }
  const l = new a();
};
