/* module 64540 — 2373 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = r(8868),
    o = r(64098);
  function s(e, t, r, n) {
    return e === r && t === n;
  }
  function a(e) {
    var t,
      r = document.selection.createRange(),
      n = r.text.length,
      i = r.duplicate();
    i.moveToElementText(e), i.setEndPoint("EndToStart", r);
    var o = i.text.length,
      s;
    return {
      start: o,
      end: o + n
    };
  }
  function l(e) {
    var t = window.getSelection && window.getSelection();
    if (!t || 0 === t.rangeCount) return null;
    var r = t.anchorNode,
      n = t.anchorOffset,
      i = t.focusNode,
      o = t.focusOffset,
      a = t.getRangeAt(0);
    try {
      a.startContainer.nodeType, a.endContainer.nodeType;
    } catch (e) {
      return null;
    }
    var l,
      c = s(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset) ? 0 : a.toString().length,
      d = a.cloneRange();
    d.selectNodeContents(e), d.setEnd(a.startContainer, a.startOffset);
    var h,
      p = s(d.startContainer, d.startOffset, d.endContainer, d.endOffset) ? 0 : d.toString().length,
      u = p + c,
      g = document.createRange();
    g.setStart(r, n), g.setEnd(i, o);
    var m = g.collapsed;
    return {
      start: m ? u : p,
      end: m ? p : u
    };
  }
  function c(e, t) {
    var r = document.selection.createRange().duplicate(),
      n,
      i;
    void 0 === t.end ? i = n = t.start : t.start > t.end ? (n = t.end, i = t.start) : (n = t.start, i = t.end), r.moveToElementText(e), r.moveStart("character", n), r.setEndPoint("EndToStart", r), r.moveEnd("character", i - n), r.select();
  }
  function d(e, t) {
    if (window.getSelection) {
      var r = window.getSelection(),
        n = e[o()].length,
        s = Math.min(t.start, n),
        a = void 0 === t.end ? s : Math.min(t.end, n);
      if (!r.extend && s > a) {
        var l = a;
        a = s, s = l;
      }
      var c = i(e, s),
        d = i(e, a);
      if (c && d) {
        var h = document.createRange();
        h.setStart(c.node, c.offset), r.removeAllRanges(), s > a ? (r.addRange(h), r.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), r.addRange(h));
      }
    }
  }
  var h = n.canUseDOM && "selection" in document && !("getSelection" in window),
    p = {
      getOffsets: h ? a : l,
      setOffsets: h ? c : d
    };
  e.exports = p;
};
