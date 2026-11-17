/* module 94841 — 3843 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    X: () => d
  });
  var n = r(64467),
    i = r(516),
    o = r(41257),
    s = r(2543),
    a = r.n(s);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d {
    constructor(e) {
      (0, n.A)(this, "line", void 0), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "charIndex", void 0), (0, n.A)(this, "lineIndex", void 0), (0, n.A)(this, "copiedCurPosition", void 0), (0, n.A)(this, "requestGeoPos", void 0), (0, n.A)(this, "prevCursorPos", void 0), this.copiedCurPosition = e;
    }
    static copyMetadata(e, t) {
      return t ? c(c({}, t), {}, {
        direction: e.direction,
        maxRelativeXAxisPosition: e.maxRelativeXAxisPosition
      }) : t;
    }
    withPrevCursorPos(e) {
      return this.prevCursorPos = e, this;
    }
    withRequestGeoPos(e) {
      return this.requestGeoPos = e, this;
    }
    withCopyPosition(e) {
      return this.copiedCurPosition = e, this;
    }
    build() {
      var e = {
        type: "cursor-position",
        line: this.line,
        lineIndex: this.findAndUpdateLineIndex(),
        charIndex: this.charIndex,
        editor: this.findAndUpdateEditor(),
        requestGeoPos: this.requestGeoPos,
        prevPos: this.prevCursorPos
      };
      return this.copiedCurPosition && (e.direction = this.copiedCurPosition.direction, e.maxRelativeXAxisPosition = this.copiedCurPosition.maxRelativeXAxisPosition), e;
    }
    static build(e, t, r, n, i) {
      return {
        type: "cursor-position",
        line: t,
        lineIndex: r,
        charIndex: n,
        editor: e,
        requestGeoPos: i
      };
    }
    static emptyLine(e, t) {
      return t = t || i.A.closestEditor(e), {
        type: "cursor-position",
        line: e,
        lineIndex: i.A.findEditLineIndex(t, e),
        charIndex: 0,
        editor: t,
        requestGeoPos: void 0
      };
    }
    static lazyLine() {
      return d.lazy;
    }
    static fromCharIndex(e, t, r) {
      return new d().withLine(t).withEditor(r).withCharIndex(e).build();
    }
    withLine(e) {
      return this.line = e, this;
    }
    withEditor(e) {
      return this.editor = e, this;
    }
    withCharIndex(e) {
      return this.charIndex = e, this;
    }
    withCharIndexBySumOfBlocks(e) {
      return this.charIndex = a().sumBy(e, e => o.A.getNumberOfCharsInBlock(e)), this;
    }
    withLineIndex(e) {
      return this.lineIndex = e, this;
    }
    findAndUpdateLineIndex() {
      if (null != this.lineIndex) return this.lineIndex;
      if (null == this.line) throw new Error("can not detect lineindex, missing line");
      var e = this.findAndUpdateEditor();
      if (i.A.isEditAreaLine(e)) return 0;
      var t = i.A.findEditLineIndex(e, this.line);
      if (t < 0) throw new Error("something wrong with line index");
      return this.lineIndex = t, t;
    }
    findAndUpdateEditor() {
      if (this.editor) return this.editor;
      if (this.line) return i.A.closestEditor(this.line);
      throw new Error("can not detect editor, missing and editor id");
    }
  }
  (0, n.A)(d, "lazy", {
    type: "lazy"
  });
};
