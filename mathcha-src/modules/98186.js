/* module 98186 — 3300 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(45228),
    o = r(75314),
    s = r(86102),
    a = r(83997),
    l = r(18806),
    c = r(90646),
    d = r(14594),
    h = !1,
    p = !1,
    u = !1,
    g = !1,
    m = !1,
    f = !1;
  function y() {
    this._rootNodeID && b.updateWrapper(this);
  }
  function v(e) {
    var t;
    return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value;
  }
  var b = {
    getHostProps: function (e, t) {
      var r = s.getValue(t),
        n = s.getChecked(t),
        o;
      return i({
        type: void 0,
        step: void 0,
        min: void 0,
        max: void 0
      }, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: null != r ? r : e._wrapperState.initialValue,
        checked: null != n ? n : e._wrapperState.initialChecked,
        onChange: e._wrapperState.onChange
      });
    },
    mountWrapper: function (e, t) {
      var r,
        n = t.defaultValue;
      e._wrapperState = {
        initialChecked: null != t.checked ? t.checked : t.defaultChecked,
        initialValue: null != t.value ? t.value : n,
        listeners: null,
        onChange: x.bind(e),
        controlled: v(t)
      };
    },
    updateWrapper: function (e) {
      var t = e._currentElement.props,
        r,
        n,
        i = t.checked;
      null != i && o.setValueForProperty(a.getNodeFromInstance(e), "checked", i || !1);
      var l = a.getNodeFromInstance(e),
        c = s.getValue(t);
      if (null != c) {
        if (0 === c && "" === l.value) l.value = "0";else if ("number" === t.type) {
          var d = parseFloat(l.value, 10) || 0;
          (c != d || c == d && l.value != c) && (l.value = "" + c);
        } else l.value !== "" + c && (l.value = "" + c);
      } else null == t.value && null != t.defaultValue && l.defaultValue !== "" + t.defaultValue && (l.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (l.defaultChecked = !!t.defaultChecked);
    },
    postMountWrapper: function (e) {
      var t = e._currentElement.props,
        r = a.getNodeFromInstance(e);
      switch (t.type) {
        case "submit":
        case "reset":
          break;
        case "color":
        case "date":
        case "datetime":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          r.value = "", r.value = r.defaultValue;
          break;
        default:
          r.value = r.value;
      }
      var n = r.name;
      "" !== n && (r.name = ""), r.defaultChecked = !r.defaultChecked, r.defaultChecked = !r.defaultChecked, "" !== n && (r.name = n);
    }
  };
  function x(e) {
    var t = this._currentElement.props,
      r = s.executeOnChange(t, e);
    l.asap(y, this);
    var i = t.name;
    if ("radio" === t.type && null != i) {
      for (var o = a.getNodeFromInstance(this), c = o; c.parentNode;) c = c.parentNode;
      for (var d = c.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), h = 0; h < d.length; h++) {
        var p = d[h];
        if (p !== o && p.form === o.form) {
          var u = a.getInstanceFromNode(p);
          u || n("90"), l.asap(y, u);
        }
      }
    }
    return r;
  }
  e.exports = b;
};
