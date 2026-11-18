/* module 44124 — 10564 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    BibBibliography: () => w,
    BibBibliographySc: () => E,
    default: () => k
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(53218),
    c = r(3453),
    d = r(47286),
    h = r(58907),
    p = r(54528);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "FakeModalDialog", h.A.getModalDialog()), (0, n.A)(this, "bibManagerRef", void 0), (0, n.A)(this, "handleBigManagerRef", e => {
        this.bibManagerRef = e;
      }), (0, n.A)(this, "onSuccessCallback", () => {
        this.close();
      }), (0, n.A)(this, "onErrorCallback", e => {
        this.setState({
          isProgressing: !1,
          errorMessage: e
        });
      }), (0, n.A)(this, "onProgressing", e => {
        this.setState({
          isProgressing: e
        });
      }), (0, n.A)(this, "handleOk", () => {
        if (this.bibManagerRef) {
          var e = this.bibManagerRef.extractItems(),
            t = (0, c.A)(e, 3),
            r = t[0],
            n = t[1],
            i = t[2],
            o = this.validateName(r.name);
          if (o) return void this.setState({
            errorMessage: o
          });
          this.onProgressing(!0), this.props.onOk(r, n, i, this.onSuccessCallback, this.onErrorCallback);
        }
      }), (0, n.A)(this, "handleClose", () => {
        this.close();
      }), (0, n.A)(this, "close", () => {
        this.setState({
          isProgressing: !1
        }), this.props.onClose();
      });
    }
    renderContent() {
      var e = this.state.BigManagerClss;
      return e ? o().createElement(e, {
        ref: this.handleBigManagerRef,
        bibDb: this.props.bibDb,
        allDbs: this.props.allDbs,
        onRecentCslStyleAdded: this.props.onRecentCslStyleAdded,
        recentCslStyles: this.props.recentCslStyles,
        lineStyle: this.props.lineStyles
      }) : o().createElement("div", null, "Loading");
    }
    componentDidMount() {
      p.d.import(this.props.bibDb).then(e => {
        var t = e.BibManager;
        this.setState({
          BigManagerClss: t
        });
      }).catch(e => {
        console.error(e), this.setState({
          errorMessage: "Unable to load and open, Connection error"
        });
      });
    }
    validateName(e) {
      return e ? /^[a-z0-9\-]+$/i.test(e) ? e.length > 50 ? "Name is max at 50 characters" : this.props.allDbs.some(t => t != this.props.bibDb && t.name == e) ? "Name existed in another bibiliography" : void 0 : "Name is only alphabet or number" : "Name is empty";
    }
    getErrorMessage() {
      return this.state.errorMessage;
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(d.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Bibliography Database Manager",
        style: g({
          minWidth: 200,
          minHeight: 150,
          width: "auto",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, h.A.getCenterStyle()),
        message: this.getErrorMessage(),
        isProgressing: this.state.isProgressing,
        isOkDisabled: !1,
        onOk: this.handleOk,
        onCancel: this.handleClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  class f {
    process(e, t, r, n, i) {
      p.d.import(r.bibDb).then(o => {
        var s = o.bibAllUpdater;
        try {
          var a,
            l = s.updateAll(e.getMathTypeHtmlElement(), e.getCurrentRootModel(), r, null === (a = t.bibDb) || void 0 === a ? void 0 : a.name);
          e.setCurrentRootModel(l), n();
        } catch (e) {
          console.error(e), i("Error on updating bibliography. Details: " + e.message);
        }
      }).catch(e => {
        console.error(e), i("error on loading resources on server, please try again");
      });
    }
  }
  var y = new f(),
    v = r(2543),
    b = r.n(v),
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
  class w extends s.A {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), this.containerClassName = "bib-bibliography";
    }
    componentWillMount() {
      super.componentWillMount && super.componentWillMount();
      var e = this.props.data;
      if (!e.bibDb) {
        var t,
          r,
          n = this.getMtFuncs().getPageSettings();
        e.bibDb = b().cloneDeep(null === (t = n.cites) || void 0 === t ? void 0 : t.bibDatabase) || {
          name: ""
        }, e.bibDb.name = e.bibDb.name || "main", console.log("bib upgrade");
      }
      if (!e.bibLineStyle) {
        var i,
          o,
          s = this.getMtFuncs().getPageSettings();
        e.bibLineStyle = b().cloneDeep(null === (i = s.cites) || void 0 === i ? void 0 : i.lineStyle), console.log("bib upgrade");
      }
    }
    componentDidMount() {
      super.componentDidMount && super.componentDidMount(), w.showDialogOnMount && (this.setState({
        showSettingsDialog: !0
      }), w.showDialogOnMount = void 0);
    }
    gatherSelected(e) {
      this.props.onSelectedChanged({}, {
        gatheredSelectedArr: e
      });
    }
    showDialog() {
      this.setState({
        showSettingsDialog: !0
      });
    }
    renderSettingsDialog() {
      if (this.state.showSettingsDialog) {
        var e,
          t = this.props.data,
          r = this.getMtFuncs();
        return o().createElement(m, {
          key: "BibManagerDialog",
          lineStyles: t.bibLineStyle || {},
          onRecentCslStyleAdded: e => {
            r.requestPageSettingsSet({
              type: "ps-recent-csl-style-added",
              item: e
            });
          },
          recentCslStyles: (null === (e = r.getPageSettings().cites) || void 0 === e ? void 0 : e.recentCslStyles) || [],
          info: this.props.data.cslInfo || {},
          bibDb: x.I.fillDefaultDb(t.bibDb),
          allDbs: x.I.findAllBibliography(r.getMathTypeHtmlElement(), !1),
          onClose: () => {
            this.setState({
              showSettingsDialog: void 0
            });
          },
          onOk: (e, t, r, n, i) => {
            var o = A(A({}, this.props.data), {}, {
              bibDb: e,
              bibLineStyle: r
            });
            y.process(this.getMtFuncs(), this.props.data, o, n, i);
          }
        });
      }
    }
    renderSettings() {
      if (this.isSelected()) {
        var e = {
          width: 18,
          height: 18
        };
        return o().createElement("div", {
          key: "settings-icon",
          style: {
            position: "absolute",
            left: -15,
            top: -21,
            display: "flex",
            flexDirection: "row"
          }
        }, o().createElement("span", {
          className: "setting-select",
          style: e,
          onMouseDown: e => {
            this.setState({
              showSettingsDialog: !0
            }), e.stopPropagation();
          }
        }, o().createElement("i", {
          className: "fa fa-cog",
          style: {
            fontSize: 15
          }
        })));
      }
    }
    renderContent() {
      var e = this.props.data,
        t = e.cslInfo,
        r = e.bibDb,
        n = e.bibLineStyle,
        i = (null == t ? void 0 : t.nodes) || [];
      return i.length <= 0 || !r ? o().createElement("div", null, "?") : l.O.toBibliography(i, n || {}, r.name);
    }
    renderComponent() {
      return o().createElement("div", {
        className: "no-print-outline",
        style: {
          outline: this.isSelected() ? "1px dotted gray" : void 0
        }
      }, this.renderContent(), this.renderSettings(), this.renderSettingsDialog());
    }
  }
  (0, n.A)(w, "showDialogOnMount", void 0);
  class E extends a.A {
    getViewComponent() {
      return w;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.cslInfo = {
        nodes: []
      }, t.bibDb = {
        name: ""
      }, t.bibLineStyle = {
        detectUrl: !0,
        urlHighlight: !0
      }, t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getLatextName() {
      return "\\bibliography";
    }
    getSymbol() {
      return "bibliography";
    }
    toLatex(e, t) {
      var r, n;
      return "plain" == t.textType ? C.k.render((null === (n = e.cslInfo) || void 0 === n ? void 0 : n.nodes) || []) : "\\bibliography{".concat((null === (r = e.bibDb) || void 0 === r ? void 0 : r.name) || "", "}");
    }
    toMathml() {
      return {
        type: "mtext",
        value: "bibliography"
      };
    }
  }
  const k = new E();
};
