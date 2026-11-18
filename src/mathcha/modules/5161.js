/* module 5161 — 1390 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(63475),
    o = r(83997),
    s = r(74056),
    a = r(14594),
    l = !1;
  function c(e) {
    var t = "";
    return i.Children.forEach(e, function (e) {
      null != e && ("string" == typeof e || "number" == typeof e ? t += e : l || (l = !0));
    }), t;
  }
  var d = {
    mountWrapper: function (e, t, r) {
      var n = null;
      if (null != r) {
        var i = r;
        "optgroup" === i._tag && (i = i._hostParent), null != i && "select" === i._tag && (n = s.getSelectValueContext(i));
      }
      var o = null,
        a;
      if (null != n) if (a = null != t.value ? t.value + "" : c(t.children), o = !1, Array.isArray(n)) {
        for (var l = 0; l < n.length; l++) if ("" + n[l] === a) {
          o = !0;
          break;
        }
      } else o = "" + n === a;
      e._wrapperState = {
        selected: o
      };
    },
    postMountWrapper: function (e) {
      var t = e._currentElement.props,
        r;
      null != t.value && o.getNodeFromInstance(e).setAttribute("value", t.value);
    },
    getHostProps: function (e, t) {
      var r = n({
        selected: void 0,
        children: void 0
      }, t);
      null != e._wrapperState.selected && (r.selected = e._wrapperState.selected);
      var i = c(t.children);
      return i && (r.children = i), r;
    }
  };
  e.exports = d;
};
