/* module 23009 — 5829 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(58907),
    a = r(47286),
    l = r(6293),
    c = r(58578);
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
    constructor() {
      super(...arguments), (0, n.A)(this, "FakeModalDialog", s.A.getModalDialog()), (0, n.A)(this, "state", {
        fonts: [],
        allFonts: [],
        selectedFont: void 0,
        filter: "",
        isLoading: !0
      });
    }
    componentDidMount() {
      this.props.requestLocalFonts().then(e => {
        this.setState({
          allFonts: e,
          filter: "",
          fonts: e,
          isLoading: !1
        });
      });
    }
    filterFonts(e, t) {
      return t = t.toLowerCase(), e.filter(e => e.toLowerCase().indexOf(t) >= 0);
    }
    changeFilter(e) {
      var t = this.filterFonts(this.state.allFonts, e);
      this.setState({
        fonts: t,
        filter: e
      });
    }
    renderContent() {
      var e = this.state.filter;
      return o().createElement("div", {
        style: {
          flex: 1,
          minWidth: 1
        }
      }, o().createElement("div", {
        style: {
          paddingBottom: 10,
          fontSize: 13,
          fontWeight: "bold",
          textAlign: "center"
        }
      }, "Select from your Local Fonts"), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          marginBottom: 5,
          fontSize: 13,
          flex: 1
        }
      }, o().createElement("div", {
        style: {
          minWidth: 200,
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("input", {
        value: e,
        onChange: e => this.changeFilter(e.target.value),
        placeholder: "Filter",
        style: {
          marginBottom: 5,
          paddingLeft: 5
        }
      }), o().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, this.renderList())), o().createElement("div", {
        className: "test-font-preview-container",
        style: {
          flex: 1,
          border: "1px solid var(--ui-border, lightgray)",
          marginLeft: 5,
          display: "flex",
          flexDirection: "column",
          minWidth: 1
        }
      }, o().createElement("div", {
        style: {
          fontWeight: "bold",
          marginBottom: 20,
          borderBottom: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          alignSelf: "center",
          padding: 5
        }
      }, c.A.getFontNameWithoutQuote(this.state.selectedFont) || "No Font Selected"), this.renderPreview())), o().createElement("div", {
        style: {
          paddingBottom: 10,
          color: "orange"
        }
      }, "Note*: Please note that, fonts used in this machine may not exist in other machines."));
    }
    renderList() {
      var e = this.state.fonts;
      return o().createElement(l.B8, {
        style: {
          outline: "none"
        },
        width: 200,
        height: 300,
        rowCount: e.length,
        rowHeight: 25,
        rowRenderer: e => {
          var t = this.state.fonts[e.index];
          return o().createElement("div", {
            key: e.key,
            className: "hover-hightlight",
            style: h(h({}, e.style), {}, {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              fontFamily: c.A.getFontFamilyFromLocalFontName(t),
              paddingLeft: 5,
              lineHeight: "25px",
              background: t == this.state.selectedFont ? "var(--ui-surface-active, lightgray)" : void 0
            }),
            onClick: () => this.setState({
              selectedFont: t
            })
          }, c.A.getFontNameWithoutQuote(t));
        }
      });
    }
    renderPreview() {
      return o().createElement("textarea", {
        spellCheck: !1,
        style: {
          fontFamily: c.A.getFontFamilyFromLocalFontName(this.state.selectedFont),
          textAlign: "center",
          fontSize: 20,
          resize: "none",
          flex: 1,
          border: "none",
          color: "var(--ui-text-muted, gray)",
          letterSpacing: "0.2em",
          minWidth: 1
        },
        defaultValue: "\nABCDEFGHIJKLM\nNOPQRSTUVWXYZ\nnopqrstuvwxyz\nabcdefghijklm\n1234567890"
      });
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(a.A, {
        title: "Local fonts",
        size: "medium",
        scroll: "body",
        style: {
          width: 550,
          height: "auto",
          padding: 15
        },
        message: "",
        isProgressing: this.state.isLoading,
        isOkDisabled: this.state.isLoading,
        onOk: () => this.props.onClose(this.state.selectedFont),
        onCancel: () => this.props.onClose(),
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
};
