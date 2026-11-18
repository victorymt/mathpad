/* module 6984 — 2536 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(84258),
    a = r(91617);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d extends o().Component {
    getShortcut() {
      return s.A.isMac() ? "(Cmd+Shift+J)" : "(Ctrl+Shift+J)";
    }
    render() {
      var e = [],
        t = 70,
        r;
      return s.A.supportCopyMathImageToClipboard() && (e = [{
        value: "latex-to-clipboard",
        display: () => o().createElement("span", null, o().createElement("span", {
          style: {
            paddingRight: 5
          }
        }, this.props.shortcutText), o().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, this.getShortcut()))
      }], t = 90, r = o().createElement("span", {
        className: "hidden-cp-latex",
        style: {
          visibility: "hidden"
        },
        onClick: () => {
          this.props.onCopyLatexToClipboard();
        }
      })), o().createElement("span", {
        style: {
          display: "inline-block"
        }
      }, o().createElement(a.A, {
        buttonWithMoreOptionsStyle: !0,
        onItemSelect: () => {
          this.props.onCopyLatexToClipboard();
        },
        onMainButtonClick: () => {
          this.props.onExportLatex();
        },
        labelStyle: {
          justifyContent: "center"
        },
        label: this.props.label,
        items: e,
        buttonWithMoreOptionsStyleClass: this.props.buttonWithMoreOptionsStyleClass,
        buttonWithMoreOptionsTitle: this.props.buttonWithMoreOptionsTitle,
        containerStyle: {
          width: 260
        },
        style: c(c({}, this.props.style), {}, {
          width: t
        })
      }), r);
    }
  }
};
