/* module 87361 — 1426 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(25483),
    i = r(83997),
    o = r(28019),
    s = {
      mouseEnter: {
        registrationName: "onMouseEnter",
        dependencies: ["topMouseOut", "topMouseOver"]
      },
      mouseLeave: {
        registrationName: "onMouseLeave",
        dependencies: ["topMouseOut", "topMouseOver"]
      }
    },
    a = {
      eventTypes: s,
      extractEvents: function (e, t, r, a) {
        if ("topMouseOver" === e && (r.relatedTarget || r.fromElement)) return null;
        if ("topMouseOut" !== e && "topMouseOver" !== e) return null;
        var l, c, d;
        if (a.window === a) l = a;else {
          var h = a.ownerDocument;
          l = h ? h.defaultView || h.parentWindow : window;
        }
        if ("topMouseOut" === e) {
          c = t;
          var p = r.relatedTarget || r.toElement;
          d = p ? i.getClosestInstanceFromNode(p) : null;
        } else c = null, d = t;
        if (c === d) return null;
        var u = null == c ? l : i.getNodeFromInstance(c),
          g = null == d ? l : i.getNodeFromInstance(d),
          m = o.getPooled(s.mouseLeave, c, r, a);
        m.type = "mouseleave", m.target = u, m.relatedTarget = g;
        var f = o.getPooled(s.mouseEnter, d, r, a);
        return f.type = "mouseenter", f.target = g, f.relatedTarget = u, n.accumulateEnterLeaveDispatches(m, f, c, d), [m, f];
      }
    };
  e.exports = a;
};
