/* module 17965 — 1621 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16426),
    i = "Copy to clipboard: #{key}, Enter";
  function o(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  function s(e, t) {
    var r,
      s,
      a,
      l,
      c,
      d,
      h = !1;
    t || (t = {}), r = t.debug || !1;
    try {
      var p;
      if (a = n(), l = document.createRange(), c = document.getSelection(), (d = document.createElement("span")).textContent = e, d.style.all = "unset", d.style.position = "fixed", d.style.top = 0, d.style.clip = "rect(0, 0, 0, 0)", d.style.whiteSpace = "pre", d.style.webkitUserSelect = "text", d.style.MozUserSelect = "text", d.style.msUserSelect = "text", d.style.userSelect = "text", d.addEventListener("copy", function (e) {
        e.stopPropagation();
      }), document.body.appendChild(d), l.selectNodeContents(d), c.addRange(l), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
      h = !0;
    } catch (n) {
      r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData("text", e), h = !0;
      } catch (n) {
        r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), s = o("message" in t ? t.message : i), window.prompt(s, e);
      }
    } finally {
      c && ("function" == typeof c.removeRange ? c.removeRange(l) : c.removeAllRanges()), d && document.body.removeChild(d), a();
    }
    return h;
  }
  e.exports = s;
};
