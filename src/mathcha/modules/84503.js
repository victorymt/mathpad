/* module 84503 — 20077 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => O
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(47858),
    c = r(39791),
    d = r(91335);
  class h {
    extractBlocks(e, t) {
      return e.elements[t] && e.elements[t].lines && e.elements[t].lines[0] ? e.elements[t].lines[0].blocks : [];
    }
  }
  var p = new h();
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
  class m extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        info: {
          type: "substitute",
          from: "x",
          to: "y"
        }
      });
    }
    getRequest() {
      var e = p.extractBlocks(this.props.mainBlock, "vl1"),
        t = p.extractBlocks(this.props.mainBlock, "vl2"),
        r = p.extractBlocks(this.props.mainBlock, "value");
      return e.length <= 0 || t.length <= 0 ? {
        type: "info-error",
        msg: "From/To variable is missing"
      } : r.length <= 0 ? {
        type: "info-error",
        msg: "Expression is empty"
      } : {
        type: "substitute",
        expr: r,
        from: e,
        to: t
      };
    }
    render() {
      var e = {
          padding: 5
        },
        t = {
          backgroundColor: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          minWidth: 40,
          padding: "0px 2px 3px 2px"
        };
      return a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, this.props.onRenderEditArea("vl1", .88235, g(g({}, t), {}, {
        marginLeft: 10
      })), a().createElement("span", {
        style: e
      }, "➝"), this.props.onRenderEditArea("vl2", .88235, t));
    }
  }
  var f = r(37566),
    y = r(40961),
    v = r.n(y);
  class b extends a().Component {
    getRequest() {
      var e = p.extractBlocks(this.props.mainBlock, "value");
      return e.length <= 0 ? {
        type: "info-error",
        msg: "Expression is empty"
      } : {
        type: this.props.type,
        expr: e
      };
    }
    render() {
      return a().createElement("span", {
        style: {
          marginLeft: 10,
          color: "var(--ui-text-muted, gray)"
        }
      }, "current expression");
    }
  }
  class x extends a().Component {
    getRequest() {
      var e = p.extractBlocks(this.props.mainBlock, "value"),
        t = p.extractBlocks(this.props.mainBlock, "vl1");
      if (e.length <= 0) return {
        type: "info-error",
        msg: "Expression is empty"
      };
      if ("solve" == this.props.type) return t.length > 0 ? {
        type: "solve",
        expr: e,
        variable: t
      } : {
        type: "solve",
        expr: e
      };
      if (t.length <= 0) return {
        type: "info-error",
        msg: "refine" == this.props.type ? "Assumption is missing" : "Variable is missing"
      };
      if ("refine" == this.props.type) return {
        type: "refine",
        expr: e,
        assumption: t
      };
      if ("limit" == this.props.type) {
        var r = p.extractBlocks(this.props.mainBlock, "vl2");
        return r.length <= 0 ? {
          type: "info-error",
          msg: "Limit target is missing"
        } : {
          type: "limit",
          expr: e,
          variable: t,
          to: r
        };
      }
      if ("sum" == this.props.type || "product" == this.props.type) {
        var n = p.extractBlocks(this.props.mainBlock, "vl2"),
          i = p.extractBlocks(this.props.mainBlock, "vl3");
        return n.length <= 0 || i.length <= 0 ? {
          type: "info-error",
          msg: "Bounds are missing"
        } : {
          type: this.props.type,
          expr: e,
          variable: t,
          from: n,
          to: i
        };
      }
      return {
        type: this.props.type,
        expr: e,
        variable: t
      };
    }
    render() {
      var e = {
        backgroundColor: "var(--ui-surface, white)",
        border: "1px solid var(--ui-border, lightgray)",
        minWidth: 40,
        padding: "0px 2px 3px 2px"
      };
      return "limit" == this.props.type ? a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, a().createElement("span", {
        style: {
          marginLeft: 10,
          marginRight: 5,
          color: "var(--ui-text-muted, gray)"
        }
      }, "as"), this.props.onRenderEditArea("vl1", .88235, e), a().createElement("span", {
        style: {
          padding: 5
        }
      }, "→"), this.props.onRenderEditArea("vl2", .88235, e)) : "sum" == this.props.type || "product" == this.props.type ? a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, a().createElement("span", {
        style: {
          marginLeft: 10,
          marginRight: 5,
          color: "var(--ui-text-muted, gray)"
        }
      }, "for"), this.props.onRenderEditArea("vl1", .88235, e), a().createElement("span", {
        style: {
          padding: 5
        }
      }, "="), this.props.onRenderEditArea("vl2", .88235, e), a().createElement("span", {
        style: {
          padding: 5
        }
      }, "to"), this.props.onRenderEditArea("vl3", .88235, e)) : a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, a().createElement("span", {
        style: {
          marginLeft: 10,
          marginRight: 5,
          color: "var(--ui-text-muted, gray)"
        }
      }, this.getSingleFieldLabel()), this.props.onRenderEditArea("vl1", .88235, e));
    }
    getSingleFieldLabel() {
      return "solve" == this.props.type ? "for" : "refine" == this.props.type ? "assuming" : "with respect to";
    }
  }
  class C extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "casActionInfoRef", void 0), (0, n.A)(this, "state", {
        opType: this.props.mainBlock.operationType || "substitute"
      }), (0, n.A)(this, "handleRun", () => {
        if (this.casActionInfoRef) {
          var e = this.casActionInfoRef.getRequest();
          "info-error" != e.type ? (this.state.errMsg && this.setState({
            errMsg: void 0
          }), f.ms(v().findDOMNode(this), "cas-item-run", [this.props.mainBlock.id, e, this.handleError])) : this.setState({
            errMsg: e.msg
          });
        }
      }), (0, n.A)(this, "handleError", e => {
        this.setState({
          errMsg: e.message
        });
      }), (0, n.A)(this, "handleDelete", () => {
        this.props.showDelete && f.ms(v().findDOMNode(this), "cas-item-delete", [this.props.mainBlock.id]);
      }), (0, n.A)(this, "handleCasActionInfoRef", e => {
        e && (this.casActionInfoRef = e);
      }), (0, n.A)(this, "handleOperationChange", e => {
        this.setState({
          opType: e
        }), f.ms(v().findDOMNode(this), "cas-item-operation-change", [this.props.mainBlock.id, e]);
      }), (0, n.A)(this, "operationItems", [{
        key: "substitute",
        value: "Substitute"
      }, {
        key: "simplify",
        value: "Simplify"
      }, {
        key: "expand",
        value: "Expand"
      }, {
        key: "factor",
        value: "Factor"
      }, {
        key: "cancel",
        value: "Cancel"
      }, {
        key: "apart",
        value: "Partial Frac"
      }, {
        key: "together",
        value: "Together"
      }, {
        key: "trigsimp",
        value: "Trig Simplify"
      }, {
        key: "powsimp",
        value: "Power Simplify"
      }, {
        key: "radsimp",
        value: "Radical Simplify"
      }, {
        key: "ratsimp",
        value: "Rational Simplify"
      }, {
        key: "combsimp",
        value: "Combin. Simplify"
      }, {
        key: "signsimp",
        value: "Sign Simplify"
      }, {
        key: "powdenest",
        value: "Power Denest"
      }, {
        key: "logcombine",
        value: "Log Combine"
      }, {
        key: "expand_trig",
        value: "Expand Trig"
      }, {
        key: "expand_log",
        value: "Expand Log"
      }, {
        key: "expand_power_base",
        value: "Expand Power Base"
      }, {
        key: "ask",
        value: "Ask Predicate"
      }, {
        key: "refine",
        value: "Refine"
      }, {
        key: "collect",
        value: "Collect"
      }, {
        key: "solve",
        value: "Solve"
      }, {
        key: "differentiate",
        value: "Differentiate"
      }, {
        key: "integrate",
        value: "Integrate"
      }, {
        key: "limit",
        value: "Limit"
      }, {
        key: "sum",
        value: "Sum"
      }, {
        key: "product",
        value: "Product"
      }, {
        key: "matrix-determinant",
        value: "Matrix Det"
      }, {
        key: "matrix-inverse",
        value: "Matrix Inverse"
      }, {
        key: "matrix-transpose",
        value: "Matrix Transpose"
      }, {
        key: "matrix-rref",
        value: "Matrix RREF"
      }, {
        key: "matrix-eigenvalues",
        value: "Eigenvalues"
      }, {
        key: "matrix-eigenvectors",
        value: "Eigenvectors"
      }]);
    }
    render() {
      return a().createElement("div", {
        style: {
          padding: "6px 8px",
          borderLeft: "1px solid var(--ui-border, #e5e5e5)",
          fontSize: 12,
          width: 330,
          flexShrink: 0,
          backgroundColor: "var(--ui-surface-muted, #fafafa)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }
      }, a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          minWidth: 0
        }
      }, this.renderOperationList(), a().createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, this.renderInfo()), a().createElement("button", {
        onClick: this.handleRun,
        className: "btn-normal",
        style: {
          width: 58,
          marginLeft: 6
        }
      }, "Run"), a().createElement("span", {
        onClick: this.handleDelete,
        title: "Delete row",
        style: {
          width: 22,
          marginLeft: 6,
          color: "var(--ui-text-muted, gray)",
          cursor: this.props.showDelete ? "pointer" : "default",
          visibility: this.props.showDelete ? "visible" : "hidden",
          textAlign: "center",
          display: "inline-block"
        }
      }, a().createElement("i", {
        className: "fa fa-trash"
      }))), this.renderErrMsg());
    }
    renderErrMsg() {
      if (this.state.errMsg) {
        var e = {
            color: "var(--ui-danger, #ce0303)",
            paddingLeft: 3,
            paddingTop: 5,
            position: "relative"
          },
          t = {
            position: "absolute",
            top: 10,
            left: -5,
            right: -5,
            backgroundColor: "var(--ui-surface, white)",
            border: "1px solid var(--ui-border, lightgray)",
            borderRadius: 5
          },
          r = {
            whiteSpace: "pre-wrap",
            overflowWrap: "anywhere",
            maxHeight: 90,
            overflowY: "auto",
            padding: "0px 10px 10px 10px",
            marginTop: 10
          },
          n = {
            position: "absolute",
            left: "calc(50% - 7px)",
            bottom: -6,
            padding: "1px 2px",
            display: "flex",
            cursor: "pointer",
            color: "var(--ui-text-muted, gray)",
            border: "1px solid var(--ui-border, white)",
            borderRadius: 10,
            backgroundColor: "var(--ui-surface, white)",
            fontSize: 10
          };
        return a().createElement("div", {
          style: e
        }, a().createElement("div", {
          style: t
        }, a().createElement("div", {
          style: r
        }, a().createElement("i", {
          className: "fa fa-exclamation-triangle",
          "aria-hidden": "true"
        }), " ", this.state.errMsg), a().createElement("div", {
          style: n,
          onClick: () => {
            this.setState({
              errMsg: void 0
            });
          }
        }, a().createElement("i", {
          className: "fa fa-times"
        }))));
      }
    }
    renderInfo() {
      switch (this.state.opType) {
        case "substitute":
          return a().createElement(m, {
            ref: this.handleCasActionInfoRef,
            mainBlock: this.props.mainBlock,
            onRenderEditArea: this.props.onRenderEditArea
          });
        case "simplify":
        case "expand":
        case "factor":
        case "cancel":
        case "apart":
        case "together":
        case "trigsimp":
        case "powsimp":
        case "radsimp":
        case "ratsimp":
        case "combsimp":
        case "signsimp":
        case "powdenest":
        case "logcombine":
        case "expand_trig":
        case "expand_log":
        case "expand_power_base":
        case "ask":
        case "matrix-determinant":
        case "matrix-inverse":
        case "matrix-transpose":
        case "matrix-rref":
        case "matrix-eigenvalues":
        case "matrix-eigenvectors":
          return a().createElement(b, {
            ref: this.handleCasActionInfoRef,
            mainBlock: this.props.mainBlock,
            type: this.state.opType
          });
        case "differentiate":
        case "integrate":
        case "collect":
        case "refine":
        case "solve":
        case "limit":
        case "sum":
        case "product":
          return a().createElement(x, {
            ref: this.handleCasActionInfoRef,
            mainBlock: this.props.mainBlock,
            type: this.state.opType,
            onRenderEditArea: this.props.onRenderEditArea
          });
      }
    }
    renderOperationList() {
      return a().createElement(d.A, {
        width: 96,
        itemsStyle: {
          maxHeight: 150,
          overflowY: "auto"
        },
        data: this.operationItems,
        value: this.state.opType,
        onChange: this.handleOperationChange,
        stopPropagationOnSelect: !0
      });
    }
  }
  var S = r(85849);
  function A(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class E extends i.A {
    constructor(e) {
      super(e), (0, n.A)(this, "mathAreaResizeHdl", new S.A()), (0, n.A)(this, "state", {
        hovered: !1
      }), (0, n.A)(this, "containerClassName", "cas-item"), (0, n.A)(this, "handleMouseEnter", () => {
        this.state.hovered || this.setState({
          hovered: !0
        });
      }), (0, n.A)(this, "handleMouseLeave", () => {
        this.state.hovered && this.setState({
          hovered: !1
        });
      }), (0, n.A)(this, "handleMathAreaResizeMouseDown", e => {
        e.preventDefault(), e.stopPropagation(), this.mathAreaResizeHdl.mouseDown(e, this.getMathColumnWidth());
      }), (0, n.A)(this, "handleRenderEditArea", (e, t, r) => this.renderEditArea(e, t, r)), this.mathAreaResizeHdl.onMoving = (e, t, r) => {
        f.ms(v().findDOMNode(this), "cas-math-column-width-change", [Math.max(360, r.customData + e.x)]);
      };
    }
    getZIndex() {
      return 0;
    }
    renderComponent() {
      var e = this.props.data.viewSizeOnly;
      return e ? a().createElement("div", {
        style: {
          position: "absolute",
          width: 10,
          height: 10,
          left: e.x,
          top: e.y
        }
      }) : a().createElement("div", {
        tabIndex: -1,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        style: {
          outline: "none",
          display: "flex",
          alignItems: "stretch",
          borderBottom: "1px solid var(--ui-border, #d6d6d6)",
          backgroundColor: "var(--ui-surface, white)",
          minWidth: 0,
          width: "100%"
        }
      }, a().createElement("div", {
        style: {
          backgroundColor: "var(--ui-surface, white)",
          width: this.getMathColumnWidth(),
          flexShrink: 0,
          minHeight: 44,
          overflow: "hidden"
        }
      }, this.renderEditArea("value")), a().createElement("div", {
        onMouseDown: this.handleMathAreaResizeMouseDown,
        title: "Resize math area",
        style: {
          width: 7,
          flexShrink: 0,
          cursor: "ew-resize",
          backgroundColor: this.state.hovered ? "var(--ui-surface-hover, #dcdcdc)" : "var(--ui-surface-hover, #eeeeee)",
          borderLeft: "1px solid var(--ui-border, #d6d6d6)",
          borderRight: "1px solid var(--ui-border, #e5e5e5)"
        }
      }), a().createElement(C, {
        mainBlock: this.props.data,
        onRenderEditArea: this.handleRenderEditArea,
        showDelete: this.state.hovered
      }));
    }
    getMathColumnWidth() {
      return this.props.data.mathColumnWidth || 420;
    }
    renderEditArea(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      return a().createElement(c.A, w(w({}, this.buildMetaDataFromName(e)), {}, {
        delayEnabled: !0,
        className: "math-mode-font",
        noAreaContainer: !1,
        displayMode: !0,
        isFirstMathModeLevel: !0,
        ignoreFindingMovingBlocks: !0,
        inlineMath: !1,
        showBorder: !1,
        showBorderOnSelected: !1,
        fontSizeRatio: t,
        style: w(w({}, l.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)), {}, {
          padding: "8px 12px",
          fontSize: Math.round(17 * t * 100) / 100
        }, r)
      }));
    }
  }
  class k extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return E;
    }
    getLatextName() {
      return "\\mci-cas-item";
    }
    getSymbol() {
      return "";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          value: {
            onRemove: "not"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        insertInTextModeOnly: !0,
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      var n;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return "";
    }
  }
  const O = new k();
};
