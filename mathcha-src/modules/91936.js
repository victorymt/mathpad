/* module 91936 — 3620 chars */
module.exports = function (e, t, r) {
  var n,
    i = i || function (e) {
      "use strict";

      if (!(void 0 === e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
          r = function () {
            return e.URL || e.webkitURL || e;
          },
          n = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
          i = "download" in n,
          o = function (e) {
            var t = new MouseEvent("click");
            e.dispatchEvent(t);
          },
          s = /constructor/i.test(e.HTMLElement) || e.safari,
          a = /CriOS\/[\d]+/.test(navigator.userAgent),
          l = function (t) {
            (e.setImmediate || e.setTimeout)(function () {
              throw t;
            }, 0);
          },
          c = "application/octet-stream",
          d = 4e4,
          h = function (e) {
            var t;
            setTimeout(function () {
              "string" == typeof e ? r().revokeObjectURL(e) : e.remove();
            }, d);
          },
          p = function (e, t, r) {
            for (var n = (t = [].concat(t)).length; n--;) {
              var i = e["on" + t[n]];
              if ("function" == typeof i) try {
                i.call(e, r || e);
              } catch (e) {
                l(e);
              }
            }
          },
          u = function (e) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
              type: e.type
            }) : e;
          },
          g = function (t, l, d) {
            d || (t = u(t));
            var g = this,
              m,
              f = t.type === c,
              y,
              v = function () {
                p(g, "writestart progress write writeend".split(" "));
              },
              b = function () {
                if ((a || f && s) && e.FileReader) {
                  var n = new FileReader();
                  return n.onloadend = function () {
                    var t = a ? n.result : n.result.replace(/^data:[^;]*;/, "data:attachment/file;"),
                      r;
                    e.open(t, "_blank") || (e.location.href = t), t = void 0, g.readyState = g.DONE, v();
                  }, n.readAsDataURL(t), void (g.readyState = g.INIT);
                }
                var i;
                (y || (y = r().createObjectURL(t)), f) ? e.location.href = y : e.open(y, "_blank") || (e.location.href = y);
                g.readyState = g.DONE, v(), h(y);
              };
            if (g.readyState = g.INIT, i) return y = r().createObjectURL(t), void setTimeout(function () {
              n.href = y, n.download = l, o(n), v(), h(y), g.readyState = g.DONE;
            });
            b();
          },
          m = g.prototype,
          f = function (e, t, r) {
            return new g(e, t || e.name || "download", r);
          };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, r) {
          return t = t || e.name || "download", r || (e = u(e)), navigator.msSaveOrOpenBlob(e, t);
        } : (m.abort = function () {}, m.readyState = m.INIT = 0, m.WRITING = 1, m.DONE = 2, m.error = m.onwritestart = m.onprogress = m.onwrite = m.onabort = m.onerror = m.onwriteend = null, f);
      }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
  e.exports ? e.exports.saveAs = i : null !== r.amdD && null !== r.amdO && (void 0 === (n = function () {
    return i;
  }.call(t, r, t, e)) || (e.exports = n));
};
