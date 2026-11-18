/* module 18105 — 1991 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ay: () => c,
    JU: () => d,
    pd: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(6810);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c extends o().Component {
    render() {
      return o().createElement("matrix-layout-detail", {
        style: u
      }, this.props.children);
    }
  }
  var d = e => {
      var t = e.children;
      return o().createElement("label", {
        style: g
      }, t);
    },
    h = e => {
      var t = e.value,
        r = e.onChange,
        n,
        i = e.isFirstOne ? l(l({}, p), {}, {
          marginLeft: 0
        }) : p;
      return s.A.wrapInput(o().createElement("input", {
        autoCorrect: "off",
        autoCapitalize: "off",
        value: t,
        onChange: r
      }), i);
    },
    p = {
      width: 20,
      color: "var(--ui-text-muted, #757575)",
      marginLeft: -1,
      display: "block",
      float: "left"
    },
    u = {
      display: "flex",
      flexDirection: "row",
      float: "left",
      alignItems: "baseline"
    },
    g = {
      marginLeft: 6,
      marginRight: 3,
      fontSize: 11,
      display: "inline-block",
      height: 12,
      color: "var(--ui-text-muted, gray)"
    };
};
