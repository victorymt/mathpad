/* module 82292 — 1563 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l,
    E: () => c
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
  class l extends o().Component {
    render() {
      return o().createElement("div", {
        className: "empty-right-icon"
      }, o().createElement("div", {
        style: a(a({}, c), {}, {
          borderLeft: "1px solid gray",
          borderRight: "4px solid gray"
        })
      }));
    }
  }
  var c = {
    width: "23px",
    height: "12px",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center",
    borderColor: "gray",
    fontFamily: "fantasy",
    color: "black",
    paddingTop: "1px",
    fontSize: "9px",
    lineHeight: "14px",
    verticalAlign: "middle",
    margin: "auto",
    borderLeft: "4px solid gray"
  };
};
