/* module 2814 — 440 chars */
module.exports = function (e) {
  "use strict";

  var t = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function r(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === r ? !!t[e.type] : "textarea" === r;
  }
  e.exports = r;
};
