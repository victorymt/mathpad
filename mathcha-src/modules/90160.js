/* module 90160 — 2465 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646);
  function o(e, t) {
    return (e & t) === t;
  }
  var s = {
      MUST_USE_PROPERTY: 1,
      HAS_BOOLEAN_VALUE: 4,
      HAS_NUMERIC_VALUE: 8,
      HAS_POSITIVE_NUMERIC_VALUE: 24,
      HAS_OVERLOADED_BOOLEAN_VALUE: 32,
      injectDOMPropertyConfig: function (e) {
        var t = s,
          r = e.Properties || {},
          i = e.DOMAttributeNamespaces || {},
          a = e.DOMAttributeNames || {},
          c = e.DOMPropertyNames || {},
          d = e.DOMMutationMethods || {};
        for (var h in e.isCustomAttribute && l._isCustomAttributeFunctions.push(e.isCustomAttribute), r) {
          l.properties.hasOwnProperty(h) && n("48", h);
          var p = h.toLowerCase(),
            u = r[h],
            g = {
              attributeName: p,
              attributeNamespace: null,
              propertyName: h,
              mutationMethod: null,
              mustUseProperty: o(u, t.MUST_USE_PROPERTY),
              hasBooleanValue: o(u, t.HAS_BOOLEAN_VALUE),
              hasNumericValue: o(u, t.HAS_NUMERIC_VALUE),
              hasPositiveNumericValue: o(u, t.HAS_POSITIVE_NUMERIC_VALUE),
              hasOverloadedBooleanValue: o(u, t.HAS_OVERLOADED_BOOLEAN_VALUE)
            };
          if (g.hasBooleanValue + g.hasNumericValue + g.hasOverloadedBooleanValue <= 1 || n("50", h), a.hasOwnProperty(h)) {
            var m = a[h];
            g.attributeName = m;
          }
          i.hasOwnProperty(h) && (g.attributeNamespace = i[h]), c.hasOwnProperty(h) && (g.propertyName = c[h]), d.hasOwnProperty(h) && (g.mutationMethod = d[h]), l.properties[h] = g;
        }
      }
    },
    a = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    l = {
      ID_ATTRIBUTE_NAME: "data-reactid",
      ROOT_ATTRIBUTE_NAME: "data-reactroot",
      ATTRIBUTE_NAME_START_CHAR: a,
      ATTRIBUTE_NAME_CHAR: a + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
      properties: {},
      getPossibleStandardName: null,
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function (e) {
        for (var t = 0; t < l._isCustomAttributeFunctions.length; t++) {
          var r;
          if ((0, l._isCustomAttributeFunctions[t])(e)) return !0;
        }
        return !1;
      },
      injection: s
    };
  e.exports = l;
};
