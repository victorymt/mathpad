/* module 56585 — 3253 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(36223),
    a = r(24829),
    l = r(70224);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var h = " ? ";
  class p {
    isCollapsed(e) {
      return !!e.collapsed;
    }
    getCompositeBlockClassName() {
      return "group-symbol-collapsed";
    }
    toggleShowHide(e, t) {
      if (!e.collapsed && !e.hiddenData) return {
        selected: {
          charIndex: 0,
          key: "value",
          selected: {
            lineIndex: 0,
            charIndex: 2
          }
        },
        data: d(d({}, e), {}, {
          elements: d(d({}, e.elements), {}, {
            value: this.createEmptyTextElement(t)
          }),
          collapsed: !0,
          hiddenData: e.elements.value
        })
      };
      var r = 0;
      return 1 == e.hiddenData.lines[0].blocks.length && e.hiddenData.lines[0].blocks[0].text == h && (r = 2), {
        selected: {
          charIndex: 0,
          key: "value",
          selected: {
            lineIndex: 0,
            charIndex: r
          }
        },
        data: d(d({}, e), {}, {
          collapsed: !e.collapsed,
          elements: d(d({}, e.elements), {}, {
            value: e.hiddenData
          }),
          hiddenData: e.elements.value
        })
      };
    }
    renderShowHideElement(e, t, r, n) {
      return o().createElement("div", {
        key: "settings",
        className: "settings-show-hide no-print",
        style: {
          position: "absolute",
          left: -42,
          top: 0,
          fontSize: 12,
          border: "1px solid lightgray",
          padding: 4,
          paddingTop: 2,
          cursor: "pointer",
          width: 8,
          height: 10,
          fill: "gray",
          zIndex: 400
        },
        onMouseDown: s.A.onMouseDownStopPropagation,
        onDoubleClick: s.A.onDoubleClickStopPropagation,
        onMouseEnter: r,
        onMouseLeave: n,
        onClick: t
      }, e ? a.A.plus : a.A.minus);
    }
    createEmptyTextElement(e) {
      var t = l.A.createEmptyEditor();
      return t.lines[0].blocks.push(l.A.createTextBlock(h)), this.assignDefaultStyle(t.lines, e), t;
    }
    assignDefaultStyle(e, t) {
      e.forEach(e => {
        "text" == t && (e.style = {
          align: "center"
        }), e.blocks.forEach(e => {
          e.style = {
            color: "rgb(128, 128, 128)"
          };
        });
      });
    }
  }
  const u = new p();
};
