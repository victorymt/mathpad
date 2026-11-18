/* module 63241 — 7392 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    p: () => f
  });
  var n = r(64467),
    i = r(55719),
    o = r(84258),
    s = r(23017),
    a = r(73524),
    l = r(49812),
    c = r(97372),
    d = r(5717),
    h = r(2543),
    p = r.n(h),
    u = r(21774);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f {
    constructor() {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      (0, n.A)(this, "useDefault", void 0), (0, n.A)(this, "cachedModels", void 0), (0, n.A)(this, "analyzedInfo", void 0), (0, n.A)(this, "defaultSequenceShortcuts", null), this.useDefault = e;
    }
    isShorcutDuplicate(e) {
      var t = e.shortcut;
      if ("char-sequence" == t.type) return !!this.cachedModels.find(r => r.id != e.id && "char-sequence" == r.shortcut.type && (r.shortcut.sequence.includes(t.sequence) || t.sequence.includes(r.shortcut.sequence)));
      var r = i.A.constructModifierHashForShorctut(t);
      return !!this.cachedModels.find(n => {
        if (n.id == e.id) return !1;
        if ("hot-key" != n.shortcut.type) return !1;
        var o = i.A.constructModifierHashForShorctut(n.shortcut);
        return r == o && n.shortcut.keyCode == t.keyCode && (!n.shortcut.secondKeyCode || !t.secondKeyCode || n.shortcut.secondKeyCode == t.secondKeyCode);
      });
    }
    initDefault() {
      this.defaultSequenceShortcuts || (this.defaultSequenceShortcuts = s.A.get());
    }
    matchSequenceByInsertedOneChar(e, t, r) {
      if (!this.analyzedInfo) return null;
      for (var n = this.analyzedInfo.charRootMap, i = r, o = t; i >= 0;) {
        var s = n[o];
        if (!s) return null;
        if (s.data) return {
          data: this.cloneAndAssignIdReturnData(s.data),
          replacementInfo: s.replacementInfo
        };
        if (!s.nextMap) return null;
        if (n = s.nextMap, --i < 0) break;
        o = e.clusterAt(i);
      }
      return null;
    }
    cloneAndAssignIdReturnData(e) {
      var t = p().cloneDeep(e.textModeLine);
      d.h.assignIdsForLine(t);
      var r = p().cloneDeep(e.mathModeLine);
      return d.h.assignIdsForLine(r), m(m({}, e), {}, {
        textModeLine: t,
        mathModeLine: r
      });
    }
    matchSequence(e, t, r) {
      if (!this.analyzedInfo) return null;
      for (var n = this.analyzedInfo.charRootMap, i = r; i >= 0; i--) {
        var o,
          s = n[i >= e.length ? t.clusterAt(i - e.length) : e.clusterAt(i)];
        if (!s) return null;
        if (s.data) return {
          data: this.cloneAndAssignIdReturnData(s.data),
          replacementInfo: s.replacementInfo
        };
        if (!s.nextMap) return null;
        n = s.nextMap;
      }
      return null;
    }
    anyModifierOn(e) {
      return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    }
    matchHotkey(e, t) {
      if (!this.analyzedInfo) return null;
      if (!this.anyModifierOn(e)) return null;
      if (t) {
        var r = this.findKeyCode(t.hotkeyInfo),
          n = this.constructModifierHash(t.hotkeyInfo),
          i = this.constructModifierHash(e);
        if (r && n == i && r.secondMap[e.keyCode]) return {
          type: "found-matched",
          data: this.cloneAndAssignIdReturnData(r.secondMap[e.keyCode].data),
          replacementInfo: r.secondMap[e.keyCode].replacementInfo
        };
      }
      var o = this.findKeyCode(e);
      return o ? o.data ? {
        type: "found-matched",
        data: this.cloneAndAssignIdReturnData(o.data),
        replacementInfo: o.replacementInfo
      } : {
        type: "first-matched",
        hotkeyInfo: {
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          shiftKey: e.shiftKey,
          keyCode: e.keyCode
        }
      } : null;
    }
    findKeyCode(e) {
      var t = this.constructModifierHash(e);
      if (0 == t) return null;
      var r = this.analyzedInfo.modifierMap[t];
      return r ? r.keyCodeMap[e.keyCode] : null;
    }
    getAnalyzedInfo() {
      return this.analyzedInfo;
    }
    setShortcutModels(e) {
      !o.A.inNodeEnv() && this.useDefault ? this.initDefault() : this.defaultSequenceShortcuts = [], this.cachedModels != e && (this.cachedModels = e, this.analyze(e));
    }
    analyze(e) {
      e = this.defaultSequenceShortcuts.concat(e), this.analyzedInfo = {
        charRootMap: this.analyzeCharSequenceModels(e),
        modifierMap: this.analyzeHotkeyModels(e)
      };
    }
    findOrCreateMatch(e, t, r, n) {
      var i = e.clusterAt(t);
      if (i) if (n[i] = n[i] || {
        char: i
      }, t <= 0) {
        n[i].data = r;
        var o = r.shortcut;
        n[i].replacementInfo = this.buildReplacementInfo(r, a.Ay.length(o.sequence));
      } else n[i].nextMap = n[i].nextMap || {}, this.findOrCreateMatch(e, t - 1, r, n[i].nextMap);
    }
    analyzeCharSequenceModels(e) {
      var t = {};
      return e.forEach(e => {
        if ("char-sequence" == e.shortcut.type) {
          var r = a.Ay.getUnistringUncached(e.shortcut.sequence);
          this.findOrCreateMatch(r, r.length - 1, e, t);
        }
      }), t;
    }
    analyzeHotkeyModels(e) {
      var t = {};
      return e.forEach(e => {
        "hot-key" == e.shortcut.type && this.analyzeHotKeyModel(e.shortcut, e, t);
      }), t;
    }
    analyzeHotKeyModel(e, t, r) {
      var n = i.A.constructModifierHashForShorctut(e);
      r[n] = r[n] || {
        modifierHash: n,
        keyCodeMap: {}
      };
      var o = r[n].keyCodeMap;
      if (o[e.keyCode] = o[e.keyCode] || {
        keyCode: e.keyCode
      }, !e.secondKeyCode) return o[e.keyCode].data = t, void (o[e.keyCode].replacementInfo = this.buildReplacementInfo(t, 0));
      var s = o[e.keyCode];
      s.secondMap = s.secondMap || {}, s.secondMap[e.secondKeyCode] = s.secondMap[e.secondKeyCode] || {
        keyCode: e.secondKeyCode,
        data: t
      }, s.secondMap[e.secondKeyCode].data = t, s.secondMap[e.secondKeyCode].replacementInfo = this.buildReplacementInfo(t, 0);
    }
    buildReplacementInfo(e, t) {
      var r = e.textModeLine && e.textModeLine.blocks || u.A.emptyArr,
        n = e.mathModeLine && e.mathModeLine.blocks || u.A.emptyArr;
      return {
        deletedCount: t,
        textModeInsertedCount: l.A.getTotalChar(r),
        mathModeInsertedCount: l.A.getTotalChar(n),
        singleTextModeTextOnly: 1 == r.length && c.A.isTextBlock(r[0]) && !r[0].style,
        singleMathModeTextOnly: 1 == n.length && c.A.isTextBlock(n[0]) && !n[0].style
      };
    }
    constructModifierHash(e) {
      var t = 0;
      return e.ctrlKey && (t |= 1), e.metaKey && (t |= 2), e.altKey && (t |= 4), e.shiftKey && (t |= 8), t;
    }
  }
};
