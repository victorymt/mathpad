/* module 31052 — 3384 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    G: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(58907),
    a = r(94668),
    l = r(41214),
    c = r(45862),
    d = r(85020);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var u = s.A.getModalDialog();
  class g extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        isLoading: !0
      });
    }
    renderImageLoading() {
      if (this.state.isLoading) return o().createElement(l.A, null);
    }
    render() {
      return o().createElement(u, {
        show: !0
      }, o().createElement(a.A, {
        title: "Image preview",
        size: "wide",
        scroll: "body",
        headerHidden: !0,
        onClick: this.props.onClose,
        show: !0,
        opacity: .9,
        style: p({
          background: "none",
          boxShadow: "none",
          border: "none",
          width: "calc(100% - 60px)",
          height: "calc(100% - 100px)",
          padding: 0
        }, s.A.getCenterStyle()),
        overlayStyle: {
          opacity: .8,
          backgroundColor: "black"
        },
        contentStyle: {
          width: "100%",
          height: "100%",
          display: "block",
          position: "relative"
        },
        backDrop: !0,
        onClose: this.props.onClose,
        headerStyle: {
          display: "none"
        },
        footerStyle: {
          display: "block"
        },
        footerSeparator: !1,
        renderFooterContent: () => o().createElement("div", {
          style: {
            textAlign: "center",
            color: "var(--ui-on-accent, white)",
            paddingTop: 10,
            fontSize: 13
          }
        }, this.props.imageName, o().createElement(d.i, {
          separator: !1,
          className: "tw:mt-2"
        }, o().createElement(c.$, {
          dialogAction: !0,
          onMouseDown: e => e.stopPropagation(),
          onClick: e => {
            e.stopPropagation(), this.props.onClose();
          }
        }, "Close"))),
        notifyShow: () => {}
      }, o().createElement("img", {
        src: this.props.fullUrl,
        onLoad: () => this.setState({
          isLoading: !1
        }),
        onError: () => this.setState({
          isLoading: !1
        }),
        onMouseDown: e => e.stopPropagation(),
        onClick: e => e.stopPropagation(),
        style: {
          maxWidth: "100%",
          maxHeight: "100%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }
      }), this.renderImageLoading()));
    }
  }
};
