/* module 86102 — 2222 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(71070),
    o,
    s,
    a = r(90130)(r(63475).isValidElement),
    l = r(90646),
    c = r(14594),
    d = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
  function h(e) {
    null != e.checkedLink && null != e.valueLink && n("87");
  }
  function p(e) {
    h(e), (null != e.value || null != e.onChange) && n("88");
  }
  function u(e) {
    h(e), (null != e.checked || null != e.onChange) && n("89");
  }
  var g = {
      value: function (e, t, r) {
        return !e[t] || d[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
      },
      checked: function (e, t, r) {
        return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
      },
      onChange: a.func
    },
    m = {};
  function f(e) {
    if (e) {
      var t = e.getName();
      if (t) return " Check the render method of `" + t + "`.";
    }
    return "";
  }
  var y = {
    checkPropTypes: function (e, t, r) {
      for (var n in g) {
        if (g.hasOwnProperty(n)) var o = g[n](t, n, e, "prop", null, i);
        if (o instanceof Error && !(o.message in m)) {
          m[o.message] = !0;
          var s = f(r);
        }
      }
    },
    getValue: function (e) {
      return e.valueLink ? (p(e), e.valueLink.value) : e.value;
    },
    getChecked: function (e) {
      return e.checkedLink ? (u(e), e.checkedLink.value) : e.checked;
    },
    executeOnChange: function (e, t) {
      return e.valueLink ? (p(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (u(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0;
    }
  };
  e.exports = y;
};
