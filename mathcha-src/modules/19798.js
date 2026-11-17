/* module 19798 — 2044 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    I: () => l
  });
  var n = r(64467),
    i = r(37566);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    constructor() {
      (0, n.A)(this, "defaultCslStyle", {
        key: "apa",
        display: "American Psychological Association 7th edition"
      }), (0, n.A)(this, "defaultCslLocale", "en-US");
    }
    fillDefaultDb(e) {
      var t = e || {};
      return t.cslLocale || (t = s(s({}, t), {}, {
        cslLocale: this.defaultCslLocale
      })), t.cslStyle || (t = s(s({}, t), {}, {
        cslStyle: this.defaultCslStyle
      })), t.items || (t = s(s({}, t), {}, {
        items: []
      })), t.name || (t = s(s({}, t), {}, {
        name: ""
      })), t;
    }
    findBibInstance(e, t) {
      return i.YG(e, "compositeblock.bib-bibliography").map(e => e.reactInstance).find(e => {
        var r;
        return (null === (r = e.getModel().bibDb) || void 0 === r ? void 0 : r.name) == t;
      });
    }
    findAllBibliography(e, t) {
      return i.YG(e, "compositeblock.bib-bibliography").map(e => {
        var t, r;
        return e.reactInstance.getModel().bibDb;
      }).filter(e => !t || !(null == e || !e.name));
    }
    constructLinkId(e, t) {
      return "bib-".concat(t || "", "-").concat(e || "");
    }
  }
  var l = new a();
};
