/* module 88806 — 2849 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Q: () => a
  });
  var n = r(64467),
    i = r(37566),
    o = "button, input, textarea, select, a[href], [tabindex], [contenteditable='true']";
  function s(e) {
    if (e.hasAttribute("disabled") || "true" === e.getAttribute("aria-disabled") || "hidden" === e.getAttribute("type") || e.tabIndex < 0) return !1;
    for (var t = e; t; t = t.parentElement) {
      if (t.hidden || "true" === t.getAttribute("aria-hidden")) return !1;
      var r = window.getComputedStyle(t);
      if ("none" === r.display || "hidden" === r.visibility) return !1;
    }
    return !0;
  }
  class a {
    constructor() {
      (0, n.A)(this, "previousFocus", void 0), (0, n.A)(this, "root", void 0), (0, n.A)(this, "onFocusIn", e => {
        this.isTop() && !this.root.contains(e.target) && this.root.focus();
      }), (0, n.A)(this, "onKeyDown", e => {
        if (this.isTop() && 9 === e.keyCode && !e.defaultPrevented) {
          var t = this.controls(),
            r = document.activeElement,
            n = t[0],
            i = t[t.length - 1],
            o;
          if (!t.length || !this.root.contains(r) || r === this.root || (e.shiftKey ? r === n : r === i)) e.preventDefault(), null === (o = e.shiftKey ? i : n) || void 0 === o || o.focus();
        }
      });
    }
    mount(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.activeElement,
        r = arguments.length > 2 ? arguments[2] : void 0;
      this.root = e, this.previousFocus = t;
      var n = a.stack.findIndex(t => e.contains(t.root));
      if (n < 0 ? a.stack.push(this) : a.stack.splice(n, 0, this), document.addEventListener("keydown", this.onKeyDown, !0), document.addEventListener("focus", this.onFocusIn, !0), this.isTop() && !e.contains(document.activeElement)) {
        var o = "cancel" === r ? i.Zy(e, "button.cancel") : void 0;
        (o && s(o) ? o : e).focus();
      }
    }
    unmount() {
      var e = this.isTop();
      if (a.stack = a.stack.filter(e => e !== this), document.removeEventListener("keydown", this.onKeyDown, !0), document.removeEventListener("focus", this.onFocusIn, !0), e) if (this.previousFocus && document.documentElement.contains(this.previousFocus)) this.previousFocus.focus();else {
        var t = a.stack[a.stack.length - 1];
        t && t.root.focus();
      }
    }
    isTop() {
      return a.stack[a.stack.length - 1] === this;
    }
    controls() {
      return i.YG(this.root, o).filter(s).map((e, t) => ({
        element: e,
        index: t
      })).sort((e, t) => {
        var r = e.element.tabIndex > 0 ? e.element.tabIndex : 1 / 0,
          n = t.element.tabIndex > 0 ? t.element.tabIndex : 1 / 0;
        return r === n ? e.index - t.index : r - n;
      }).map(e => e.element);
    }
  }
  (0, n.A)(a, "stack", []);
};
