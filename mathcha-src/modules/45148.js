/* module 45148 — 2175 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
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
      var e = {
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          padding: "3px 2px 0px 2px"
        },
        t = {
          border: "1px solid gray",
          width: "8px",
          height: "0px",
          marginTop: "1px"
        },
        r = {
          width: "12px",
          marginTop: "-6px"
        },
        n = {
          border: "1px solid gray",
          width: "8px",
          height: "0px",
          marginTop: "1px"
        };
      return o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          border: "1px solid gray"
        }
      }, o().createElement("div", {
        style: e
      }, o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: r
      }, "="), o().createElement("div", {
        style: n
      })), o().createElement("div", {
        style: a(a({}, e), {}, {
          marginTop: "-5px"
        })
      }, o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: a(a({}, r), {}, {
          marginBottom: "-2px"
        })
      }, "="), o().createElement("div", {
        style: n
      })));
    }
  }
};
