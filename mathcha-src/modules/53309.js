/* module 53309 — 511 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(32456),
    i = /\/?>/,
    o = /^<\!\-\-/,
    s = {
      CHECKSUM_ATTR_NAME: "data-react-checksum",
      addChecksumToMarkup: function (e) {
        var t = n(e);
        return o.test(e) ? e : e.replace(i, " " + s.CHECKSUM_ATTR_NAME + '="' + t + '"$&');
      },
      canReuseMarkup: function (e, t) {
        var r = t.getAttribute(s.CHECKSUM_ATTR_NAME),
          i;
        return r = r && parseInt(r, 10), n(e) === r;
      }
    };
  e.exports = s;
};
