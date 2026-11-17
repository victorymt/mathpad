/* module 72966 — 5547 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(64467),
    i = r(49812),
    o = r(27271),
    s = r(90437);
  class a {
    constructor(e, t) {
      if ((0, n.A)(this, "fromLineIndex", void 0), (0, n.A)(this, "fromCharIndex", void 0), (0, n.A)(this, "toLineIndex", void 0), (0, n.A)(this, "toCharIndex", void 0), (0, n.A)(this, "fromSelected", void 0), (0, n.A)(this, "toSelected", void 0), (0, n.A)(this, "orginalFromSelected", void 0), (0, n.A)(this, "orginalToSelected", void 0), this.fromLineIndex = e.lineIndex, this.fromCharIndex = e.charIndex, this.toLineIndex = t.lineIndex, this.toCharIndex = t.charIndex, this.fromSelected = e, this.toSelected = t, this.orginalFromSelected = e, this.orginalToSelected = t, this.isSelectionRangeReverted()) {
        var r = this.fromSelected;
        this.fromSelected = this.toSelected, this.toSelected = r, this.revertLineAndCharFromTo();
      }
      this.isCurrentLevelSameRoute() || this.isSelectedInComposite() && (this.toCharIndex += 1);
    }
    getJoinStartSelected() {
      return this.innerGetJoinStartSelected(this.fromSelected, this.toSelected);
    }
    isCurrentLevelSameLine() {
      return this.fromLineIndex == this.toLineIndex;
    }
    isLeafLevelSameLine() {
      return this.isLeafLevelSameLineRecursive(this.fromSelected, this.toSelected);
    }
    isLeafLevelSameRoute() {
      return this.isSameRouteRecursive(this.fromSelected, this.toSelected);
    }
    isSameRouteRecursive(e, t) {
      return e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.key == t.key && !!e.selected == !!t.selected && (!e.selected && !t.selected || this.isSameRouteRecursive(e.selected, t.selected));
    }
    isLeafLevelSameLineRecursive(e, t) {
      return e.key && t.key && e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.key == t.key ? this.isLeafLevelSameLineRecursive(e.selected, t.selected) : e.lineIndex == t.lineIndex;
    }
    innerGetJoinStartSelected(e, t) {
      return null == e.key || null == t.key ? {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      } : e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.key == t.key ? {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex,
        key: e.key,
        selected: this.innerGetJoinStartSelected(e.selected, t.selected)
      } : e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && s.Z.isKeyInTabularFormat(e.key) && s.Z.isKeyInTabularFormat(t.key) ? {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex,
        keys: this.innerGetTabularSelectedKeys(e.key, t.key)
      } : {
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      };
    }
    forEach(e, t) {
      if (!this.isCurrentLevelSameRoute()) for (var r = !1, n = () => {
          r = !0;
        }, o = this.fromLineIndex; o <= this.toLineIndex; o++) {
        var s = e[o];
        if (!(s.blocks.length <= 0)) {
          var a = 0,
            l = s.blocks.length - 1;
          if (o == this.fromLineIndex) {
            var c = i.A.blockFromIndex(s, this.fromCharIndex);
            if (null == c) continue;
            a = c.blockIndex;
          }
          if (o == this.toLineIndex) {
            var d = i.A.blockFromIndex(s, this.toCharIndex - 1);
            if (null == d) continue;
            l = d.blockIndex;
          }
          for (var h = a; h <= l; h++) {
            var p;
            if (t(s.blocks[h], o, h, n), r) return;
          }
        }
      }
    }
    isTabularRoute() {
      return this.fromSelected.lineIndex == this.toSelected.lineIndex && this.fromSelected.charIndex == this.toSelected.charIndex && s.Z.isKeyInTabularFormat(this.fromSelected.key) && s.Z.isKeyInTabularFormat(this.toSelected.key);
    }
    innerGetTabularSelectedKeys(e, t) {
      return o.A.getRangedKeys(e, t);
    }
    getTabularSelectedKeys() {
      return this.innerGetTabularSelectedKeys(this.fromSelected.key, this.toSelected.key);
    }
    isCurrentLevelSameRoute() {
      return this.fromLineIndex == this.toLineIndex && this.fromCharIndex == this.toCharIndex && (null == this.fromSelected && null == this.toSelected || this.fromSelected.key == this.toSelected.key);
    }
    isSameOrBefore(e, t) {
      if (e.lineIndex == t.lineIndex && e.charIndex == t.charIndex) {
        if (!e.selected && t.selected) return !0;
        if (e.selected && !t.selected) return !1;
        if (!e.selected && !t.selected) return !0;
        if (e.key && t.selected.key && s.Z.isKeyInTabularFormat(e.key) && s.Z.isKeyInTabularFormat(t.key)) {
          var r = s.Z.getTabularCellIndexFromKey(e.key),
            n = s.Z.getTabularCellIndexFromKey(t.key);
          if (r.row < n.row) return !0;
          if (r.row > n.row) return !1;
          if (r.column < n.column) return !0;
          if (r.column > n.column) return !1;
        }
        return this.isSameOrBefore(e.selected, t.selected);
      }
      return e.lineIndex < t.lineIndex || !(e.lineIndex > t.lineIndex) && e.charIndex <= t.charIndex;
    }
    isSelectionRangeReverted() {
      return !this.isSameOrBefore(this.fromSelected, this.toSelected);
    }
    revertLineAndCharFromTo() {
      var e = {
        toLineIndex: this.toLineIndex,
        toCharIndex: this.toCharIndex
      };
      this.toLineIndex = this.fromLineIndex, this.toCharIndex = this.fromCharIndex, this.fromLineIndex = e.toLineIndex, this.fromCharIndex = e.toCharIndex;
    }
    isSelectedInComposite() {
      return null != this.toSelected.selected;
    }
  }
};
