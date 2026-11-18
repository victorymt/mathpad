/* module 83606 — 1669 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(45228),
    o = r(86102),
    s = r(83997),
    a = r(18806),
    l = r(90646),
    c = r(14594),
    d = !1,
    h = !1;
  function p() {
    this._rootNodeID && u.updateWrapper(this);
  }
  var u = {
    getHostProps: function (e, t) {
      var r;
      return null != t.dangerouslySetInnerHTML && n("91"), i({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
        onChange: e._wrapperState.onChange
      });
    },
    mountWrapper: function (e, t) {
      var r = o.getValue(t),
        i = r;
      if (null == r) {
        var s = t.defaultValue,
          a = t.children;
        null != a && (null != s && n("92"), Array.isArray(a) && (a.length <= 1 || n("93"), a = a[0]), s = "" + a), null == s && (s = ""), i = s;
      }
      e._wrapperState = {
        initialValue: "" + i,
        listeners: null,
        onChange: g.bind(e)
      };
    },
    updateWrapper: function (e) {
      var t = e._currentElement.props,
        r = s.getNodeFromInstance(e),
        n = o.getValue(t);
      if (null != n) {
        var i = "" + n;
        i !== r.value && (r.value = i), null == t.defaultValue && (r.defaultValue = i);
      }
      null != t.defaultValue && (r.defaultValue = t.defaultValue);
    },
    postMountWrapper: function (e) {
      var t = s.getNodeFromInstance(e),
        r = t.textContent;
      r === e._wrapperState.initialValue && (t.value = r);
    }
  };
  function g(e) {
    var t = this._currentElement.props,
      r = o.executeOnChange(t, e);
    return a.asap(p, this), r;
  }
  e.exports = u;
};
