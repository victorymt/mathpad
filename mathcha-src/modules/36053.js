/* module 36053 — 2076 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    C: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(33476),
    a = r(40383),
    l = r(36223),
    c = r(23466);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends o().Component {
    render() {
      return o().createElement(s.A, {
        appliedDzContainer: this.props.dzContainer,
        reversedScaleDZOrigin: "right bottom",
        key: "settings",
        smaller: !0,
        closeOnClickOutside: !0,
        style: {
          left: -13,
          top: -20
        }
      }, o().createElement("setting", {
        className: "mt-common-dialog no-print",
        style: a.a.applyReverseZoomStyle({
          top: -35,
          left: 0,
          position: "absolute",
          fontSize: 12,
          paddingLeft: 10,
          paddingRight: 10,
          color: "var(--ui-text-muted, gray)"
        }, this.props.dzContainer, "left bottom"),
        onMouseDown: l.A.focusAndCursorSelectAcquired,
        onDoubleClick: l.A.onDoubleClickStopPropagation
      }, o().createElement(c.A, {
        checked: this.props.data.isolateStyle,
        name: "Do not Copy Section Style",
        onValueChanged: e => {
          this.props.onDataChanged(h(h({}, this.props.data), {}, {
            isolateStyle: e
          }));
        }
      })));
    }
  }
};
