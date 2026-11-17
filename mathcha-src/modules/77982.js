/* module 77982 — 38523 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => K
  });
  var n = r(3453),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(84258),
    l = r(91617),
    c = r(80137),
    d = r(58907),
    h = r(47286),
    p = r(23466),
    u = r(17048),
    g = r(35246),
    m = r(55451);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class v {
    constructor() {
      (0, i.A)(this, "cachedState", void 0), (0, i.A)(this, "cachedStateForDiagram", void 0);
    }
    getInitState(e) {
      var t;
      return y({
        transparent: !1,
        padding: 2,
        scale: 2,
        imageType: "SVG",
        vectorTextNoExtraBorderForPdf: !0
      }, e ? this.cachedStateForDiagram : this.cachedState);
    }
    storeState(e, t) {
      t ? this.cachedStateForDiagram = e : this.cachedState = e;
    }
    storedStateToExportImage(e, t, r) {
      var n = this.getInitState(e);
      return this.stateToExport(y(y({}, n), {}, {
        imageType: "PNG",
        isDiagram: e
      }), t, r);
    }
    stateToExport(e, t, r) {
      return e.isDiagram ? this.diagramStateToExport(e, t, r) : this.mathStateToExport(e, t, r);
    }
    diagramStateToExport(e, t, r) {
      return [{
        type: "diagram-export",
        element: r,
        noGrid: e.noGrid
      }, this.getTypeOptions(e, t)];
    }
    mathStateToExport(e, t, r) {
      return [{
        type: "math-export",
        element: r
      }, this.getTypeOptions(e, t)];
    }
    getTypeOptions(e, t) {
      switch (e.imageType) {
        case "PNG":
          return y({
            type: "png",
            scale: e.scale
          }, this.getCommonExportOptions(e, t));
        case "SVG":
          return y({
            type: "svg"
          }, this.getCommonExportOptions(e, t));
        case "PDF":
          return y({
            type: "pdf"
          }, this.getCommonExportOptions(e, t));
      }
    }
    getCommonExportOptions(e, t) {
      var r = t.getMtFuncs();
      return {
        baseFamily: r.getbaseMathModeFontFamily(),
        subMathFont: r.getSubMathFont(),
        padding: e.padding,
        transparent: e.transparent,
        bgColor: t.getMainThemeColor(),
        mathLineHeight: r.getPageSettings().mathLineHeight,
        vectorTextNoExtraBorder: "PDF" == e.imageType ? e.vectorTextNoExtraBorderForPdf : e.vectorTextNoExtraBorder,
        dzc: r.getDocZoomContainer(),
        rootUpdater: t.getBatchUpdater()
      };
    }
  }
  var b = new v(),
    x = r(45896);
  class C {
    constructor() {
      (0, i.A)(this, "generatePdf", (e, t, n) => Promise.resolve(Promise.all([r.e(287), r.e(843), r.e(537), r.e(118), r.e(475)]).then(r.bind(r, 3609)).then(r => r.default.fromSvg(e, t, n))));
    }
    export(e, t) {
      switch (e.type) {
        case "math-export":
          return this.generateMath(e, t);
        case "diagram-export":
          return this.generateDiagram(e, t);
      }
    }
    exportToCanvas(e, t) {
      switch (e.type) {
        case "math-export":
          return x.A.exportSvg(e, t).then(e => e.drawToCanvas(t.canvasElement));
        case "diagram-export":
          return x.A.exportDiagramSvg(e, t).then(e => e.drawToCanvas(t.canvasElement));
      }
    }
    generateDiagram(e, t) {
      switch (t.type) {
        case "png":
          return x.A.exportDiagramSvg(e, t).then(e => e.getImageBlob(t.scale));
        case "svg":
          return x.A.exportDiagramSvg(e, t).then(e => e.getSvgBlob());
        case "pdf":
          return x.A.exportDiagramSvg(e, t).then(e => e.getSvgText()).then(e => {
            var t = e.data,
              r = e.width,
              n = e.height;
            return this.generatePdf(t, r, n).then(t => ({
              width: e.width,
              height: e.height,
              data: t
            }));
          });
      }
    }
    generateMath(e, t) {
      switch (t.type) {
        case "png":
          return x.A.exportSvg(e, t).then(e => e.getImageBlob(t.scale));
        case "svg":
          return x.A.exportSvg(e, t).then(e => e.getSvgBlob());
        case "pdf":
          return x.A.exportSvg(e, t).then(e => e.getSvgText()).then(e => {
            var t = e.data,
              r = e.width,
              n = e.height;
            return this.generatePdf(t, r, n).then(t => ({
              width: e.width,
              height: e.height,
              data: t
            }));
          });
      }
    }
  }
  var S = new C(),
    A = r(91936),
    w = r.n(A);
  function E(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class O extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "htmlCanvas", void 0), (0, i.A)(this, "mounted", !1), (0, i.A)(this, "previewRequest", 0), (0, i.A)(this, "delayRender", m.A.createLaterRunObject("latest", "a-little-while")), (0, i.A)(this, "state", k(k({}, b.getInitState(this.props.isDiagram)), {}, {
        isLoading: !1,
        errorOnGenerating: !1
      })), (0, i.A)(this, "onTransparentCheckboxChange", () => {
        this.setState({
          transparent: !this.state.transparent
        }), this.invalidateImage();
      }), (0, i.A)(this, "onNoGridCheckChange", () => {
        this.setState({
          noGrid: !this.state.noGrid
        }), this.invalidateImage();
      }), (0, i.A)(this, "onVectorTextNoExtraBorderChange", () => {
        "PDF" == this.state.imageType ? this.setState({
          vectorTextNoExtraBorderForPdf: !this.state.vectorTextNoExtraBorderForPdf
        }) : this.setState({
          vectorTextNoExtraBorder: !this.state.vectorTextNoExtraBorder
        }), this.invalidateImage();
      }), (0, i.A)(this, "generateToCanvasImmediately", () => {
        if (this.mounted && this.htmlCanvas) {
          var e = ++this.previewRequest;
          this.setState({
            isLoading: !0,
            errorOnGenerating: !1
          }), m.A.nextMicro(() => {
            this.mounted && e === this.previewRequest && this.generateToCanvas().then(() => {
              this.mounted && e === this.previewRequest && this.setState({
                isLoading: !1
              });
            }).catch(t => {
              this.mounted && e === this.previewRequest && (console.error(t), this.setState({
                errorOnGenerating: !0,
                isLoading: !1
              }));
            });
          });
        }
      });
    }
    downloadExportFile() {
      var e = this.props,
        t = e.isDiagram,
        r = e.fixedContextHandler,
        i = e.requestMathAreaElement,
        o = b.stateToExport(k(k({}, this.state), {}, {
          isDiagram: t
        }), r, i()),
        s = (0, n.A)(o, 2),
        a = s[0],
        l = s[1];
      return S.export(a, l).then(e => {
        this.handleDownload(t, this.state.imageType, e.data);
      });
    }
    handleDownload(e, t, r) {
      if (e) switch (t) {
        case "SVG":
          w().saveAs(r, "diagram-".concat((0, x.R)(new Date()), ".svg"));
          break;
        case "PNG":
          w().saveAs(r, "diagram-".concat((0, x.R)(new Date()), ".png"));
          break;
        case "PDF":
          w().saveAs(r, "diagram-".concat((0, x.R)(new Date()), ".pdf"));
      } else switch (t) {
        case "SVG":
          w().saveAs(r, "math-".concat((0, x.R)(new Date()), ".svg"));
          break;
        case "PNG":
          w().saveAs(r, "math-".concat((0, x.R)(new Date()), ".png"));
          break;
        case "PDF":
          w().saveAs(r, "math-".concat((0, x.R)(new Date()), ".pdf"));
      }
    }
    componentDidMount() {
      this.mounted = !0, this.generateToCanvasImmediately();
    }
    componentWillUnmount() {
      this.mounted = !1, this.previewRequest++, this.delayRender.cancel(), b.storeState(this.state, this.props.isDiagram);
    }
    render() {
      return s().createElement("div", {
        style: {
          flex: 1
        }
      }, s().createElement("div", {
        style: {
          height: 250,
          width: "100%",
          position: "relative",
          border: "1px solid var(--ui-border, gray)",
          backgroundImage: "linear-gradient(45deg, #bdbcbc 25%, transparent 25%), linear-gradient(-45deg, #bdbcbc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #bdbcbc 75%), linear-gradient(-45deg, transparent 75%, #bdbcbc 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          boxSizing: "border-box"
        }
      }, s().createElement("canvas", {
        ref: e => this.htmlCanvas = e,
        style: {
          maxWidth: "200%",
          maxHeight: "200%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%) scale(0.5,0.5)"
        }
      }), this.renderLoading()), s().createElement("div", {
        style: {
          marginTop: 10
        }
      }, this.renderExportTypes(), this.renderImageScaleSize(), this.renderPdfWarning()), s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "Background Transparent",
        checked: this.state.transparent,
        style: {
          marginLeft: 1,
          width: 202
        },
        onValueChanged: this.onTransparentCheckboxChange
      }), this.renderPaddingInput()), this.renderNoGridCheck(), this.renderMathNoExtraBorder());
    }
    renderExportTypes() {
      return s().createElement("fieldset", {
        style: {
          display: "inline-block",
          border: "1px solid var(--ui-border, lightgray)",
          borderRadius: 3,
          padding: 5,
          margin: 0,
          width: 214,
          lineHeight: "1.4em"
        }
      }, this.renderRadioExporTypeSelect("SVG"), this.renderRadioExporTypeSelect("PNG"), this.renderRadioExporTypeSelect("PDF"));
    }
    renderRadioExporTypeSelect(e) {
      return s().createElement(g.s, {
        style: {
          width: 70
        },
        label: e,
        value: e,
        checked: this.state.imageType == e,
        onSelect: () => this.setState({
          imageType: e
        })
      });
    }
    renderNoGridCheck() {
      if (this.props.isDiagram) return s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "No Grid",
        checked: this.state.noGrid,
        style: {
          marginLeft: 1,
          flex: "50%"
        },
        onValueChanged: this.onNoGridCheckChange
      }));
    }
    renderMathNoExtraBorder() {
      return s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "Disable Thicker Math Text (should check this option for PDF)",
        checked: "PDF" == this.state.imageType ? this.state.vectorTextNoExtraBorderForPdf : this.state.vectorTextNoExtraBorder,
        style: {
          marginLeft: 1,
          flex: "50%"
        },
        onValueChanged: this.onVectorTextNoExtraBorderChange
      }));
    }
    renderPaddingInput() {
      if (!this.props.isDiagram) return s().createElement("div", {
        style: {
          flex: "50%"
        }
      }, s().createElement("label", {
        style: {
          paddingRight: 5
        }
      }, "Padding:"), s().createElement("input", {
        style: {
          width: 30
        },
        value: this.state.padding,
        onChange: e => {
          var t = Number.parseInt(e.target.value) || 0;
          t != this.state.padding && (this.setState({
            padding: t
          }), this.invalidateImage());
        }
      }), s().createElement("label", {
        style: {
          paddingLeft: 2
        }
      }, "px"));
    }
    renderImageScaleSize() {
      if ("PNG" == this.state.imageType) return s().createElement("fieldset", {
        style: {
          display: "inline-block",
          border: "1px solid var(--ui-border, lightgray)",
          borderRadius: 3,
          padding: 5,
          margin: 0,
          marginLeft: 10,
          lineHeight: "1.4em"
        }
      }, this.renderRadioScaleSelects(1), this.renderRadioScaleSelects(2), this.renderRadioScaleSelects(3), this.renderRadioScaleSelects(4));
    }
    renderRadioScaleSelects(e) {
      return s().createElement(g.s, {
        style: {
          paddingRight: 20
        },
        value: "im-scale-".concat(e, "x"),
        label: "".concat(e, "x"),
        checked: this.state.scale == e,
        onSelect: () => this.setState({
          scale: e
        })
      });
    }
    renderLoading() {
      if (this.state.isLoading) return s().createElement("svg", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }
      }, s().createElement(u.A, {
        width: 540,
        height: 250
      }));
    }
    renderPdfWarning() {
      if ("PDF" == this.state.imageType) return s().createElement("div", {
        style: {
          float: "right",
          width: 260,
          color: "orange",
          marginRight: 10,
          marginTop: 5
        }
      }, s().createElement("div", null, "Note:"), s().createElement("div", null, "- Pdf Export only supports text in alphabet;"), s().createElement("div", null, "- Drop Shadow effect does not support;"));
    }
    invalidateImage() {
      this.delayRender.later(this.generateToCanvasImmediately);
    }
    generateToCanvas() {
      var e = k(k({}, b.getCommonExportOptions(this.state, this.props.fixedContextHandler)), {}, {
        type: "canvas",
        canvasElement: this.htmlCanvas,
        throwIfLinesMoreThan: 100
      });
      return this.props.isDiagram ? S.exportToCanvas({
        type: "diagram-export",
        element: this.props.requestMathAreaElement(),
        noGrid: this.state.noGrid
      }, e) : S.exportToCanvas({
        type: "math-export",
        element: this.props.requestMathAreaElement()
      }, e);
    }
  }
  function D(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function P(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class M extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", {});
    }
    componentDidMount() {
      m.A.next(() => {
        this.handleGenerateForClipboard();
      }, 200);
    }
    render() {
      return this.renderCopyToClipboardContainer();
    }
    handleGenerateForClipboard() {
      var e = this.props,
        t = e.fixedContextHandler,
        r = e.isDiagram,
        i = e.requestMathAreaElement,
        o = e.onProgressing,
        s = b.getInitState(r),
        a = b.stateToExport(P(P({}, s), {}, {
          imageType: "PNG",
          isDiagram: r
        }), t, i()),
        l = (0, n.A)(a, 2),
        c = l[0],
        d = l[1];
      return o(!0), S.export(c, d).then(e => {
        this.copyToClipboard(e.data), this.props.fixedContextHandler.getMtFuncs().showMessage("Copied PNG Image to Clipboard", "info", 3e3), this.props.onClose();
      }).catch(() => {
        this.setState({
          errorOnGenerating: !0
        }), o(!1);
      });
    }
    renderCopyToClipboardContainer() {
      var e = {
        width: "100%",
        justifyContent: "center",
        padding: 20,
        display: "flex"
      };
      return this.state.errorOnGenerating ? s().createElement("div", {
        style: P(P({}, e), {}, {
          color: "#ce0303"
        })
      }, "There was an error on generating Image, please close and try again") : s().createElement("div", {
        style: e
      }, "Copying to Clipboard");
    }
    copyToClipboard(e) {
      var t = new window.ClipboardItem({
        "image/png": e
      });
      navigator.clipboard.write([t]);
    }
  }
  var I = r(91636),
    T = r(37566),
    L;
  function R(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function B(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? R(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class F extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", L || {
        imageType: "PNG",
        scale: 2,
        padding: 2,
        transparent: !1,
        exportItemType: "math"
      }), (0, i.A)(this, "blobToBase64", e => {
        var t = new FileReader();
        return t.readAsDataURL(e), new Promise(e => {
          t.onloadend = () => {
            e(t.result);
          };
        });
      }), (0, i.A)(this, "onTransparentCheckboxChange", () => {
        this.setState({
          transparent: !this.state.transparent
        });
      });
    }
    componentWillUnmount() {
      L = this.state;
    }
    render() {
      return s().createElement("div", {
        style: {
          flex: 1,
          padding: 5
        }
      }, this.renderExportItemTypes(), s().createElement("div", {
        style: {
          marginTop: 10
        }
      }, this.renderExportTypes(), this.renderImageScaleSize()), this.renderPaddingInput(), s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "Background Transparent",
        checked: this.state.transparent,
        style: {
          marginLeft: 1,
          width: 202
        },
        onValueChanged: this.onTransparentCheckboxChange
      })), this.renderNoGridCheck(), this.renderMathNoExtraBorder());
    }
    downloadExportFile() {
      var e = this.props.fixedContextHandler.getMtFuncs().getMathTypeHtmlElement(),
        t = "PNG" == this.state.imageType ? "png" : "svg";
      return Promise.all([r.e(287), r.e(843), r.e(833), r.e(147)]).then(r.t.bind(r, 58833, 23)).then(r => {
        var n,
          i = new (0, r.default)(),
          o = this.exportAllMathContainers(e, i);
        return "math-diagram" == this.state.exportItemType && (o = o.then(() => this.exportAllDiagrams(e, i))), a.A.isTestEnv() ? o.then(() => {}) : o.then(() => {
          i.generateAsync({
            type: "blob"
          }).then(e => {
            w().saveAs(e, "mathcha-".concat(t, ".zip"));
          });
        });
      });
    }
    exportAllDiagrams(e, t) {
      var r = this.props.fixedContextHandler,
        i = "PNG" == this.state.imageType ? "png" : "svg",
        o = 1;
      return (0, I.__)(T.YG(e, "compositeblock.math-diagram>math-diagram"), e => {
        var s = b.stateToExport(B(B({}, this.state), {}, {
            isDiagram: !0
          }), r, e),
          a = (0, n.A)(s, 2),
          l = a[0],
          c = a[1];
        return S.export(l, c).then(e => (this.test_storeExportData(o, e.data, !0), t.file("diagram-".concat(o, ".").concat(i), e.data), o++, (0, I.cb)(300)));
      });
    }
    exportAllMathContainers(e, t) {
      var r = this.props.fixedContextHandler,
        i = "PNG" == this.state.imageType ? "png" : "svg",
        o = 1,
        s = T.YG(e, "compositeblock.math-container-symbol,compositeblock.align-symbol,compositeblock.align-symbol-v2,compositeblock.gather-symbol").filter(e => T.f$(e, "math-diagram").length <= 0);
      return (0, I.__)(s, e => {
        var s = b.stateToExport(B(B({}, this.state), {}, {
            isDiagram: !1
          }), r, e),
          a = (0, n.A)(s, 2),
          l = a[0],
          c = a[1];
        return S.export(l, c).then(e => (this.test_storeExportData(o, e.data, !1), t.file("math-".concat(o, ".").concat(i), e.data), o++, (0, I.cb)(100)));
      });
    }
    test_storeExportData(e, t, r) {
      a.A.isTestEnv() && this.blobToBase64(t.slice(300, 330)).then(t => {
        r ? window["exportAllDiagram".concat(e)] = t.slice(40) : window["exportAllMath".concat(e)] = t.slice(40);
      });
    }
    renderExportTypes() {
      return s().createElement("fieldset", {
        style: {
          display: "inline-block",
          border: "1px solid var(--ui-border, lightgray)",
          borderRadius: 3,
          padding: 5,
          margin: 0,
          width: 214,
          lineHeight: "1.4em"
        }
      }, this.renderRadioExporTypeSelect("SVG"), this.renderRadioExporTypeSelect("PNG"));
    }
    renderPaddingInput() {
      return s().createElement("div", {
        style: {
          flex: "50%",
          margin: "10px 3px"
        }
      }, s().createElement("label", {
        style: {
          paddingRight: 5
        }
      }, "Math Padding:"), s().createElement("input", {
        style: {
          width: 30
        },
        value: this.state.padding,
        onChange: e => {
          var t = Number.parseInt(e.target.value) || 0;
          t != this.state.padding && this.setState({
            padding: t
          });
        }
      }), s().createElement("label", {
        style: {
          paddingLeft: 2
        }
      }, "px"));
    }
    renderNoGridCheck() {
      return s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "No Grid on Diagram/Drawing",
        checked: this.state.noGrid,
        style: {
          marginLeft: 1,
          flex: "50%"
        },
        onValueChanged: () => this.setState({
          noGrid: !this.state.noGrid
        })
      }));
    }
    renderMathNoExtraBorder() {
      return s().createElement("div", {
        style: {
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          alignItems: "baseline"
        }
      }, s().createElement(p.A, {
        name: "Disable Thicker Math Text",
        checked: this.state.vectorTextNoExtraBorder,
        style: {
          marginLeft: 1,
          flex: "50%"
        },
        onValueChanged: () => this.setState({
          vectorTextNoExtraBorder: !this.state.vectorTextNoExtraBorder
        })
      }));
    }
    renderExportItemTypes() {
      return s().createElement("fieldset", {
        style: {
          display: "inline-block",
          border: "1px solid var(--ui-border, lightgray)",
          borderRadius: 3,
          padding: 5,
          margin: 0,
          width: 461,
          lineHeight: "1.4em"
        }
      }, this.renderRadioExportItemSelect("math", "Math only", 100), this.renderRadioExportItemSelect("math-diagram", "Math and Diagram/Drawing", 200));
    }
    renderRadioExportItemSelect(e, t, r) {
      return s().createElement(g.s, {
        style: {
          width: r
        },
        label: t,
        value: e,
        checked: this.state.exportItemType == e,
        onSelect: () => this.setState({
          exportItemType: e
        })
      });
    }
    renderRadioExporTypeSelect(e) {
      return s().createElement(g.s, {
        style: {
          width: 100
        },
        label: e,
        value: e,
        checked: this.state.imageType == e,
        onSelect: () => this.setState({
          imageType: e
        })
      });
    }
    renderImageScaleSize() {
      if ("PNG" == this.state.imageType) return s().createElement("fieldset", {
        style: {
          display: "inline-block",
          border: "1px solid var(--ui-border, lightgray)",
          borderRadius: 3,
          padding: 5,
          margin: 0,
          marginLeft: 10,
          lineHeight: "1.4em"
        }
      }, this.renderRadioScaleSelects(1), this.renderRadioScaleSelects(2), this.renderRadioScaleSelects(3), this.renderRadioScaleSelects(4));
    }
    renderRadioScaleSelects(e) {
      return s().createElement(g.s, {
        style: {
          paddingRight: 20
        },
        value: "im-scale-".concat(e, "x"),
        label: "".concat(e, "x"),
        checked: this.state.scale == e,
        onSelect: () => this.setState({
          scale: e
        })
      });
    }
  }
  function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? j(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class N extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", {});
    }
    componentDidMount() {
      m.A.next(() => {
        this.handleGenerateForClipboard();
      }, 200);
    }
    render() {
      return this.renderCopyToClipboardContainer();
    }
    handleGenerateForClipboard() {
      var e = this.props,
        t = e.fixedContextHandler,
        r = e.isDiagram,
        i = e.requestMathAreaElement,
        o = e.onProgressing,
        s = b.getInitState(r),
        a = b.stateToExport(_(_({}, s), {}, {
          imageType: "SVG",
          isDiagram: r
        }), t, i()),
        l = (0, n.A)(a, 2),
        c = l[0],
        d = l[1];
      return o(!0), S.export(c, d).then(e => e.data.text()).then(e => {
        this.copyToClipboard(e), this.props.fixedContextHandler.getMtFuncs().showMessage("Copied SVG Code to Clipboard", "info", 3e3), this.props.onClose();
      }).catch(() => {
        this.setState({
          errorOnGenerating: !0
        }), o(!1);
      });
    }
    renderCopyToClipboardContainer() {
      var e = {
        width: "100%",
        justifyContent: "center",
        padding: 20,
        display: "flex"
      };
      return this.state.errorOnGenerating ? s().createElement("div", {
        style: _(_({}, e), {}, {
          color: "#ce0303"
        })
      }, "There was an error on generating SVG, please close and try again") : s().createElement("div", {
        style: e
      }, "Copying to Clipboard");
    }
    copyToClipboard(e) {
      navigator.clipboard.writeText(e);
    }
  }
  var z = r(64777);
  class H extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "singleExportOptionsRef", void 0), (0, i.A)(this, "allExportOptionsRef", void 0);
    }
    downloadExportFile() {
      return this.singleExportOptionsRef ? this.singleExportOptionsRef.downloadExportFile() : this.allExportOptionsRef ? this.allExportOptionsRef.downloadExportFile() : void 0;
    }
    renderMainContainer() {
      var e = this.props.requestType;
      switch (e) {
        case "clipboard":
          return s().createElement(M, {
            fixedContextHandler: this.props.fixedContextHandler,
            isDiagram: this.props.isDiagram,
            requestMathAreaElement: this.props.requestMathAreaElement,
            onClose: this.props.onClose,
            onProgressing: this.props.onProgressing
          });
        case "svg-to-clipboard":
          return s().createElement(N, {
            fixedContextHandler: this.props.fixedContextHandler,
            isDiagram: this.props.isDiagram,
            requestMathAreaElement: this.props.requestMathAreaElement,
            onClose: this.props.onClose,
            onProgressing: this.props.onProgressing
          });
        case "single":
          return s().createElement(O, {
            ref: e => this.singleExportOptionsRef = e,
            fixedContextHandler: this.props.fixedContextHandler,
            isDiagram: this.props.isDiagram,
            requestMathAreaElement: this.props.requestMathAreaElement
          });
        case "all":
          return s().createElement(F, {
            ref: e => this.allExportOptionsRef = e,
            fixedContextHandler: this.props.fixedContextHandler,
            isDiagram: this.props.isDiagram,
            requestMathAreaElement: this.props.requestMathAreaElement
          });
        default:
          (0, z.d)(e);
      }
    }
    render() {
      return this.renderMainContainer();
    }
  }
  function W(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function V(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? W(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class U extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", {}), (0, i.A)(this, "FakeModalDialog", d.A.getModalDialog()), (0, i.A)(this, "containerRef", void 0), (0, i.A)(this, "onOk", () => {
        this.setState({
          isLoading: !0
        }), this.containerRef && this.containerRef.downloadExportFile().finally(() => {
          this.setState({
            isLoading: !1
          });
        });
      }), (0, i.A)(this, "handleProgressing", e => {
        this.setState({
          isLoading: e
        });
      });
    }
    render() {
      var e = this.props.requestType;
      return s().createElement("div", null, s().createElement(this.FakeModalDialog, {
        show: !0
      }, s().createElement(h.A, {
        title: "Export image",
        size: "medium",
        scroll: "body",
        style: {
          width: 540
        },
        message: "",
        isProgressing: this.state.isLoading,
        isOkDisabled: !1,
        onOk: this.onOk,
        onCancel: this.props.onClose,
        okLabel: "Export",
        cancelLabel: "Close",
        showOk: !("clipboard" == e || "svg-to-clipboard" == e),
        show: !0
      }, s().createElement(H, V(V({}, this.props), {}, {
        ref: e => this.containerRef = e,
        onProgressing: this.handleProgressing
      })))));
    }
  }
  function q(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class K extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", {
        showExportDialog: null
      }), (0, i.A)(this, "handleExport", e => {
        switch (e) {
          case "image-to-clipboard":
            this.setState({
              showExportDialog: "clipboard"
            });
            break;
          case "svg-to-clipboard":
            this.setState({
              showExportDialog: "svg-to-clipboard"
            });
            break;
          case "export-all":
            this.setState({
              showExportDialog: "all"
            });
            break;
          default:
            (0, z.d)(e);
        }
      }), (0, i.A)(this, "handleExportImage", () => {
        if (a.A.isTestEnv()) {
          var e = this.props.requestMathAreaElement();
          if (!e) return;
          var t = this.props.fixedContextHandler.getMtFuncs();
          this.props.isDiagram ? c.A.handleDiagramExportForTest(e, t.getbaseMathModeFontFamily(), t.getSubMathFont(), t.getDocZoomContainer(), this.props.fixedContextHandler.getBatchUpdater()) : c.A.handleMathExportForTest(e, t.getbaseMathModeFontFamily(), t.getSubMathFont(), t.getDocZoomContainer(), this.props.fixedContextHandler.getBatchUpdater());
        } else this.setState({
          showExportDialog: "single"
        });
      });
    }
    getImgToClipboardShortcut() {
      return a.A.isMac() ? "(⌘+Shift+L)" : "(Ctrl+Shift+L)";
    }
    getSvgToClipboard() {
      return a.A.isMac() ? "(⌘+Shift+G)" : "(Ctrl+Shift+G)";
    }
    initActionItems() {
      var e = [{
        value: "export-all",
        display: "Export All Math Containers"
      }];
      return a.A.supportCopyMathImageToClipboard() && (e.push({
        value: "image-to-clipboard",
        display: () => s().createElement("span", null, s().createElement("span", {
          style: {
            paddingRight: 5
          }
        }, "Copy as Image to Clipboard"), s().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, this.getImgToClipboardShortcut()))
      }), e.push({
        value: "svg-to-clipboard",
        display: () => s().createElement("span", null, s().createElement("span", {
          style: {
            paddingRight: 5
          }
        }, "Copy as SVG Code to Clipboard"), s().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, this.getSvgToClipboard()))
      })), [e, 90];
    }
    getHiddenImgToCpShortcutSpan() {
      if (a.A.supportCopyMathImageToClipboard()) return s().createElement("span", {
        className: "hidden-cp-image",
        style: {
          visibility: "hidden"
        },
        onClick: () => this.handleExport("image-to-clipboard")
      });
    }
    getHiddenSvgToCpShortcutSpan() {
      if (a.A.supportCopyMathImageToClipboard()) return s().createElement("span", {
        className: "hidden-cp-svg",
        style: {
          visibility: "hidden"
        },
        onClick: () => this.handleExport("svg-to-clipboard")
      });
    }
    renderSettingDialog() {
      var e = this.state.showExportDialog;
      if (e) {
        var t = "clipboard" == e ? "PNG" : "SVG";
        return "svg-to-clipboard" == e && (t = "SVG"), s().createElement(U, {
          fixedContextHandler: this.props.fixedContextHandler,
          imageType: t,
          requestType: e,
          requestMathAreaElement: this.props.requestMathAreaElement,
          isDiagram: this.props.isDiagram,
          onClose: () => this.setState({
            showExportDialog: null
          })
        });
      }
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    render() {
      var e = this.initActionItems(),
        t = (0, n.A)(e, 2),
        r = t[0],
        i = t[1];
      return s().createElement("span", {
        style: {
          display: "inline-block"
        }
      }, s().createElement(l.A, {
        buttonWithMoreOptionsStyle: !0,
        onItemSelect: this.handleExport,
        onMainButtonClick: this.handleExportImage,
        labelStyle: {
          justifyContent: "center"
        },
        label: "Image",
        items: r,
        buttonWithMoreOptionsStyleClass: this.props.buttonWithMoreOptionsStyleClass,
        buttonWithMoreOptionsTitle: "Export Image",
        containerStyle: {
          width: 260
        },
        style: G(G({}, this.props.style), {}, {
          width: i
        })
      }), this.getHiddenImgToCpShortcutSpan(), this.getHiddenSvgToCpShortcutSpan(), this.renderSettingDialog());
    }
  }
};
