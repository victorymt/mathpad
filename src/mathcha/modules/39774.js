/* module 39774 — 2169 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var l = {
    "{": "}",
    "[": "]",
    "(": ")",
    "|": "|",
    " ": " ",
    "‖": "‖"
  };
  class c extends o().PureComponent {
    render() {
      var e = {
          fontSize: "18px",
          lineHeight: "18px"
        },
        t = "square common-square-icon common-square-icon-expand",
        r = this.props.bracketType || "(",
        n = l[r],
        i = this.props.smaller ? {
          width: 3,
          height: 3,
          minHeight: 3
        } : {};
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("div", {
        style: e
      }, r), o().createElement("div", null, o().createElement("div", {
        style: a({
          marginTop: 3,
          marginRight: 2
        }, i),
        className: t
      }), o().createElement("div", {
        style: a({
          marginTop: 2,
          marginRight: 2
        }, i),
        className: t
      })), o().createElement("div", null, o().createElement("div", {
        style: a({
          marginTop: 3
        }, i),
        className: t
      }), o().createElement("div", {
        style: a({
          marginTop: 2
        }, i),
        className: t
      })), o().createElement("div", {
        style: e
      }, n));
    }
  }
};
