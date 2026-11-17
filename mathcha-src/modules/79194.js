/* module 79194 — 10993 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    BibCite: () => w,
    BibCiteSc: () => E,
    default: () => k
  });
  var n = r(64467),
    i = r(37566),
    o = r(40927),
    s = r.n(o),
    a = r(25742),
    l = r(48440),
    c = r(47286),
    d = r(58907),
    h = r(54528);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "FakeModalDialog", d.A.getModalDialog()), (0, n.A)(this, "bibCitesSelectRef", void 0), (0, n.A)(this, "handleBibCitesSelectRef", e => {
        this.bibCitesSelectRef = e;
      });
    }
    renderContent() {
      if (this.props.bibDbs.length <= 0) return s().createElement("div", {
        style: {
          textAlign: "center",
          padding: 20
        }
      }, " There is no bibliography in this document to cite, please create one by using \\bibliography");
      var e = this.state.BibCitesSelectClss;
      return e ? s().createElement("div", null, s().createElement(e, {
        onOpenBibManager: this.props.onOpenBibManager,
        lineHeight: this.props.lineHeight,
        onRecentCslStyleAdded: this.props.onRecentCslStyleAdded,
        recentCslStyles: this.props.recentCslStyles,
        initInfo: this.props.info,
        ref: this.handleBibCitesSelectRef,
        bibDb: this.props.bibDb,
        bibDbs: this.props.bibDbs
      })) : s().createElement("div", null, "Loading");
    }
    componentDidMount() {
      h.d.import(this.props.bibDb).then(e => {
        var t = e.BibCitesSelect;
        this.setState({
          BibCitesSelectClss: t
        });
      }).catch(e => {
        console.error(e), this.setState({
          errorMessage: "Unable to load and open, Connection error"
        });
      });
    }
    render() {
      return s().createElement(this.FakeModalDialog, {
        show: !0
      }, s().createElement(c.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Citation Settings",
        style: u({
          minWidth: 200,
          minHeight: 150,
          width: "auto",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, d.A.getCenterStyle()),
        message: this.state.errorMessage,
        isProgressing: !1,
        isOkDisabled: this.props.bibDbs.length <= 0,
        onOk: () => {
          this.bibCitesSelectRef && this.props.onOk(this.bibCitesSelectRef.extractBibCiteCslInfo());
        },
        onCancel: this.props.onClose,
        cancelLabel: this.props.bibDbs.length <= 0 ? "Close" : "Cancel",
        okLabel: "OK",
        showOk: !(this.props.bibDbs.length <= 0),
        show: !0
      }, this.renderContent()));
    }
  }
  var m = r(53218),
    f = r(24373),
    y = r(40961),
    v = r.n(y),
    b = r(60693),
    x = r(19798),
    C = r(92342);
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleOpenBibManager", () => {
        var e;
        this.setState({
          showDialog: void 0
        });
        var t = x.I.findBibInstance(this.getMtFuncs().getMathTypeHtmlElement(), null === (e = this.props.data.cslInfo) || void 0 === e ? void 0 : e.bibDbName);
        t && t.showDialog();
      }), this.containerClassName = "bib-cite";
    }
    componentWillMount() {
      super.componentWillMount && super.componentWillMount();
      var e = this.props.data;
      e.cslInfo && !e.cslInfo.bibDbName && (e.cslInfo.bibDbName = "main");
    }
    getWraplineRects() {
      return b.T.getBCRects(v().findDOMNode(this), this.getMtFuncs().getDocZoomContainer());
    }
    componentDidMount() {
      super.componentDidMount && super.componentDidMount(), w.showDialogOnMount && (w.showDialogOnMount = void 0, this.showSettings());
    }
    showSettings(e) {
      var t = x.I.findAllBibliography(this.getMtFuncs().getMathTypeHtmlElement(), !0),
        r = e ? t.find(t => t.name == e) : t[0];
      r = r || t[0], this.setState({
        showDialog: {
          type: "bib-cite",
          bibDb: r,
          bibDbs: t
        }
      });
    }
    gatherSelected(e) {
      this.props.onSelectedChanged({}, {
        gatheredSelectedArr: e
      });
    }
    renderCiteSettings() {
      var e,
        t = this.state.showDialog;
      if (t) {
        var r = this.getMtFuncs(),
          n = r.getPageSettings();
        return s().createElement(g, {
          key: "BibCiteSettingsDialog",
          lineHeight: r.getPageSettings().textLineHeight,
          onRecentCslStyleAdded: e => {
            r.requestPageSettingsSet({
              type: "ps-recent-csl-style-added",
              item: e
            });
          },
          recentCslStyles: (null === (e = n.cites) || void 0 === e ? void 0 : e.recentCslStyles) || [],
          info: this.props.data.cslInfo || {
            bibDbName: "main"
          },
          bibDb: t.bibDb,
          bibDbs: t.bibDbs,
          onClose: () => {
            this.setState({
              showDialog: void 0
            });
          },
          onOk: e => {
            this.props.onDataChanged(A(A({}, this.props.data), {}, {
              cslInfo: e
            })), this.setState({
              showDialog: void 0
            });
          },
          onOpenBibManager: this.handleOpenBibManager
        });
      }
    }
    renderSettings() {
      if (this.isSelected()) {
        var e = {
          width: 18,
          height: 18
        };
        return s().createElement("div", {
          key: "settings-icon",
          style: {
            position: "absolute",
            left: -15,
            top: -21,
            display: "flex",
            flexDirection: "row"
          }
        }, s().createElement("span", {
          className: "setting-select",
          style: A(A({}, e), {}, {
            marginLeft: 5
          }),
          onMouseDown: e => {
            var t;
            this.showSettings(null === (t = this.props.data.cslInfo) || void 0 === t ? void 0 : t.bibDbName), e.stopPropagation();
          }
        }, s().createElement("i", {
          className: "fa fa-cog",
          style: {
            fontSize: 15
          }
        })), s().createElement("span", {
          className: "setting-select",
          style: A(A({}, e), {}, {
            marginLeft: 5
          }),
          onMouseDown: e => {
            e.stopPropagation();
            var t = this.props.data.cslInfo;
            if (null != t && t.bibIds) {
              var r = t.bibIds[0];
              if (r) {
                var n = x.I.constructLinkId(r, t.bibDbName),
                  o = i.Zy(document, '[data-id="'.concat(n, '"]'));
                if (o) {
                  var s = this.getEditorInfo().scrollSelector;
                  f.A.scrollToElement(s, o, {
                    duration: 500
                  });
                }
              }
            }
          }
        }, s().createElement("i", {
          className: "fa fa-arrow-right",
          style: {
            fontSize: 13
          }
        })));
      }
    }
    renderContent() {
      var e = this.props.data.cslInfo,
        t = (null == e ? void 0 : e.nodes) || [];
      if (t.length <= 0) return s().createElement("div", {
        style: {
          display: "inline"
        },
        key: "content"
      }, "?");
      var r = null != e && e.bibIds ? null == e ? void 0 : e.bibIds[0] : void 0,
        n = x.I.constructLinkId(r, null == e ? void 0 : e.bibDbName);
      return s().createElement("div", {
        style: {
          display: "inline",
          outline: this.isSelected() ? "1px dotted gray" : void 0
        },
        key: "content",
        className: "csl-context csl-cite no-print-outline",
        "data-cite-to": n
      }, t.map((e, t) => m.O.toReact(e, t)));
    }
    renderComponent() {
      return [this.renderContent(), this.renderSettings(), this.renderCiteSettings()];
    }
  }
  (0, n.A)(w, "showDialogOnMount", void 0);
  class E extends l.A {
    getViewComponent() {
      return w;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.cslInfo = {
        bibIds: [],
        nodes: [],
        bibDbName: "main"
      }, t;
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getLatextName() {
      return "\\cite";
    }
    getSymbol() {
      return "cite";
    }
    toLatex(e, t) {
      var r, n, i, o;
      if ("plain" == t.textType) return C.k.render((null === (o = e.cslInfo) || void 0 === o ? void 0 : o.nodes) || []);
      if (!t.mathTypeHtml) return "\\cite{}";
      var s = x.I.findBibInstance(t.mathTypeHtml, null === (r = e.cslInfo) || void 0 === r ? void 0 : r.bibDbName);
      if (!s) return "\\cite{}";
      var a = s.getModel(),
        l = (null === (n = e.cslInfo) || void 0 === n ? void 0 : n.bibIds) || [],
        c = ((null === (i = a.bibDb) || void 0 === i ? void 0 : i.items) || []).filter(e => l.includes(e.id)).map(e => e.cslObj.id || e.id);
      return "\\cite{".concat(c.join(", "), "}");
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: "cite"
      };
    }
  }
  const k = new E();
};
