/* module 26892 — 2669 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.autoprefix = void 0;
  var n,
    i = s(r(33215)),
    o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    };
  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var a = {
      borderRadius: function e(t) {
        return {
          msBorderRadius: t,
          MozBorderRadius: t,
          OBorderRadius: t,
          WebkitBorderRadius: t,
          borderRadius: t
        };
      },
      boxShadow: function e(t) {
        return {
          msBoxShadow: t,
          MozBoxShadow: t,
          OBoxShadow: t,
          WebkitBoxShadow: t,
          boxShadow: t
        };
      },
      userSelect: function e(t) {
        return {
          WebkitTouchCallout: t,
          KhtmlUserSelect: t,
          MozUserSelect: t,
          msUserSelect: t,
          WebkitUserSelect: t,
          userSelect: t
        };
      },
      flex: function e(t) {
        return {
          WebkitBoxFlex: t,
          MozBoxFlex: t,
          WebkitFlex: t,
          msFlex: t,
          flex: t
        };
      },
      flexBasis: function e(t) {
        return {
          WebkitFlexBasis: t,
          flexBasis: t
        };
      },
      justifyContent: function e(t) {
        return {
          WebkitJustifyContent: t,
          justifyContent: t
        };
      },
      transition: function e(t) {
        return {
          msTransition: t,
          MozTransition: t,
          OTransition: t,
          WebkitTransition: t,
          transition: t
        };
      },
      transform: function e(t) {
        return {
          msTransform: t,
          MozTransform: t,
          OTransform: t,
          WebkitTransform: t,
          transform: t
        };
      },
      absolute: function e(t) {
        var r = t && t.split(" ");
        return {
          position: "absolute",
          top: r && r[0],
          right: r && r[1],
          bottom: r && r[2],
          left: r && r[3]
        };
      },
      extend: function e(t, r) {
        var n = r[t];
        return n || {
          extend: t
        };
      }
    },
    l = t.autoprefix = function e(t) {
      var r = {};
      return (0, i.default)(t, function (e, t) {
        var n = {};
        (0, i.default)(e, function (e, t) {
          var r = a[t];
          r ? n = o({}, n, r(e)) : n[t] = e;
        }), r[t] = n;
      }), r;
    };
  t.default = l;
};
