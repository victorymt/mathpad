/* module 74056 — 2673 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(86102),
    o = r(83997),
    s = r(18806),
    a = r(14594),
    l = !1,
    c = !1;
  function d() {
    if (this._rootNodeID && this._wrapperState.pendingUpdate) {
      this._wrapperState.pendingUpdate = !1;
      var e = this._currentElement.props,
        t = i.getValue(e);
      null != t && g(this, Boolean(e.multiple), t);
    }
  }
  function h(e) {
    if (e) {
      var t = e.getName();
      if (t) return " Check the render method of `" + t + "`.";
    }
    return "";
  }
  var p = null;
  function u(e, t) {
    var r = e._currentElement._owner;
    i.checkPropTypes("select", t, r), void 0 === t.valueLink || l || (l = !0);
    for (var n = 0; n < p.length; n++) {
      var o = p[n];
      if (null != t[o]) {
        var s = Array.isArray(t[o]);
        t.multiple && !s || t.multiple;
      }
    }
  }
  function g(e, t, r) {
    var n,
      i,
      s = o.getNodeFromInstance(e).options;
    if (t) {
      for (n = {}, i = 0; i < r.length; i++) n["" + r[i]] = !0;
      for (i = 0; i < s.length; i++) {
        var a = n.hasOwnProperty(s[i].value);
        s[i].selected !== a && (s[i].selected = a);
      }
    } else {
      for (n = "" + r, i = 0; i < s.length; i++) if (s[i].value === n) return void (s[i].selected = !0);
      s.length && (s[0].selected = !0);
    }
  }
  var m = {
    getHostProps: function (e, t) {
      return n({}, t, {
        onChange: e._wrapperState.onChange,
        value: void 0
      });
    },
    mountWrapper: function (e, t) {
      var r = i.getValue(t);
      e._wrapperState = {
        pendingUpdate: !1,
        initialValue: null != r ? r : t.defaultValue,
        listeners: null,
        onChange: f.bind(e),
        wasMultiple: Boolean(t.multiple)
      }, void 0 === t.value || void 0 === t.defaultValue || c || (c = !0);
    },
    getSelectValueContext: function (e) {
      return e._wrapperState.initialValue;
    },
    postUpdateWrapper: function (e) {
      var t = e._currentElement.props;
      e._wrapperState.initialValue = void 0;
      var r = e._wrapperState.wasMultiple;
      e._wrapperState.wasMultiple = Boolean(t.multiple);
      var n = i.getValue(t);
      null != n ? (e._wrapperState.pendingUpdate = !1, g(e, Boolean(t.multiple), n)) : r !== Boolean(t.multiple) && (null != t.defaultValue ? g(e, Boolean(t.multiple), t.defaultValue) : g(e, Boolean(t.multiple), t.multiple ? [] : ""));
    }
  };
  function f(e) {
    var t = this._currentElement.props,
      r = i.executeOnChange(t, e);
    return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), s.asap(d, this), r;
  }
  e.exports = m;
};
