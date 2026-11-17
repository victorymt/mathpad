/* module 75314 — 2837 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(90160),
    i = r(83997),
    o = r(83982),
    s = r(34685),
    a = r(14594),
    l = new RegExp("^[" + n.ATTRIBUTE_NAME_START_CHAR + "][" + n.ATTRIBUTE_NAME_CHAR + "]*$"),
    c = {},
    d = {};
  function h(e) {
    return !!d.hasOwnProperty(e) || !c.hasOwnProperty(e) && (l.test(e) ? (d[e] = !0, !0) : (c[e] = !0, !1));
  }
  function p(e, t) {
    return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && !1 === t;
  }
  var u = {
    createMarkupForID: function (e) {
      return n.ID_ATTRIBUTE_NAME + "=" + s(e);
    },
    setAttributeForID: function (e, t) {
      e.setAttribute(n.ID_ATTRIBUTE_NAME, t);
    },
    createMarkupForRoot: function () {
      return n.ROOT_ATTRIBUTE_NAME + '=""';
    },
    setAttributeForRoot: function (e) {
      e.setAttribute(n.ROOT_ATTRIBUTE_NAME, "");
    },
    createMarkupForProperty: function (e, t) {
      var r = n.properties.hasOwnProperty(e) ? n.properties[e] : null;
      if (r) {
        if (p(r, t)) return "";
        var i = r.attributeName;
        return r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === t ? i + '=""' : i + "=" + s(t);
      }
      return n.isCustomAttribute(e) ? null == t ? "" : e + "=" + s(t) : null;
    },
    createMarkupForCustomAttribute: function (e, t) {
      return h(e) && null != t ? e + "=" + s(t) : "";
    },
    setValueForProperty: function (e, t, r) {
      var i = n.properties.hasOwnProperty(t) ? n.properties[t] : null,
        o;
      if (i) {
        var s = i.mutationMethod;
        if (s) s(e, r);else {
          if (p(i, r)) return void this.deleteValueForProperty(e, t);
          if (i.mustUseProperty) e[i.propertyName] = r;else {
            var a = i.attributeName,
              l = i.attributeNamespace;
            l ? e.setAttributeNS(l, a, "" + r) : i.hasBooleanValue || i.hasOverloadedBooleanValue && !0 === r ? e.setAttribute(a, "") : e.setAttribute(a, "" + r);
          }
        }
      } else if (n.isCustomAttribute(t)) return void u.setValueForAttribute(e, t, r);
    },
    setValueForAttribute: function (e, t, r) {
      var n;
      h(t) && (null == r ? e.removeAttribute(t) : e.setAttribute(t, "" + r));
    },
    deleteValueForAttribute: function (e, t) {
      e.removeAttribute(t);
    },
    deleteValueForProperty: function (e, t) {
      var r = n.properties.hasOwnProperty(t) ? n.properties[t] : null;
      if (r) {
        var i = r.mutationMethod;
        if (i) i(e, void 0);else if (r.mustUseProperty) {
          var o = r.propertyName;
          r.hasBooleanValue ? e[o] = !1 : e[o] = "";
        } else e.removeAttribute(r.attributeName);
      } else n.isCustomAttribute(t) && e.removeAttribute(t);
    }
  };
  e.exports = u;
};
