/* module 94513 — 998261 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Diagram: () => jf,
    DiagramSc: () => zf,
    default: () => Hf
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(30803),
    l = r(3453),
    c = r(91636),
    d = r(2543),
    h = r.n(d),
    p = r(40961),
    u = r.n(p),
    g = r(39791),
    m = r(36223),
    f = r(61848),
    y = r(19539),
    v = r(35835),
    b = r(84258),
    x = r(89870),
    C = r(11742),
    S = r(91355),
    A = r(5556),
    w = r.n(A),
    E = r(37566),
    k = r(39314),
    O = r(58578),
    D = r(391),
    P = r(38070),
    M = r(32485),
    I = r.n(M),
    T = r(94214),
    L = r(55451),
    R = r(83084),
    B = r(57507),
    F = r(60693),
    j = r(80741);
  function _(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class z extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "editorContainer", void 0), (0, n.A)(this, "lastEditorShape", void 0), (0, n.A)(this, "anchorStateInfo", void 0), (0, n.A)(this, "handleEventRequestEditing", e => {
        var t = e.detail;
        setTimeout(() => {
          u().unstable_batchedUpdates(() => {
            this.requestEditing(t);
          });
        }, 50);
      }), (0, n.A)(this, "onCoverLayerMouseDown", (e, t) => {
        this.props.onSelectItem(e, t);
      }), (0, n.A)(this, "onEditorContainerMouseDown", e => {
        if ("COVERLAYER" !== e.target.tagName) {
          var t = m.A.getCustomEventInfo(e);
          m.A.setCustomInfo(e, v.A.getBuilder(t).withRequestCursorSelect().build());
        }
      }), (0, n.A)(this, "onCoverLayerDoubleClick", e => {
        if (!this.props.isEditing) {
          console.log("cover doube clicked!!");
          var t = F.T.getFromAbsPos(e.clientX, e.clientY, this.props.getDzContainer());
          this.requestEditing(t), e.preventDefault(), e.stopPropagation();
        }
      }), (0, n.A)(this, "handleEditorContainerRef", e => {
        this.editorContainer = e;
      }), this.state = {
        suppressTransformation: !1,
        requestedTransformationOnMounted: !this.hasTransformation(this.props.editor)
      };
    }
    isEditorContentOrSelectedChanged(e, t) {
      var r, n;
      return D.A.getTextSetting(e.editor, "fontSize") != D.A.getTextSetting(t.editor, "fontSize") || e.editor.lines != t.editor.lines || e.editingSelected != t.editingSelected;
    }
    hasTransformation(e) {
      var t = e.shape.data,
        r = t.rotation,
        n = t.skewX,
        i = t.flipX;
      return !!r || !!n || !!i;
    }
    componentWillReceiveProps(e) {
      var t = this.hasTransformation(e.editor);
      if (this.isEditorContentOrSelectedChanged(e, this.props) && t && this.setState({
        suppressTransformation: !0
      }), e.isEditing && !this.props.isEditing && t) {
        var r = R.x.calculateCenterPoint(this.props.editor, this.editorContainer),
          n = e.editor,
          i = R.x.getSamplePosition(n.shape.anchor, this.editorContainer.offsetWidth, this.editorContainer.offsetHeight, {}, r);
        this.anchorStateInfo = {
          anchorPoint: i
        };
      }
      !e.isEditing && this.anchorStateInfo && (this.anchorStateInfo = void 0);
    }
    shouldComponentUpdate(e, t) {
      return t.suppressTransformation != this.state.suppressTransformation || t.requestedTransformationOnMounted != this.state.requestedTransformationOnMounted || e.isSelected != this.props.isSelected || e.editor != this.props.editor || e.isEditing != this.props.isEditing || e.isEditing != this.props.isEditing || e.editingSelected != this.props.editingSelected || e.isRemotedSelected != this.props.isRemotedSelected || e.remoteSelectedColor != this.props.remoteSelectedColor;
    }
    componentDidUpdate(e, t) {
      !this.state.suppressTransformation || this.props.editingSelected ? t.suppressTransformation == this.state.suppressTransformation && t.requestedTransformationOnMounted == this.state.requestedTransformationOnMounted && e.editor == this.props.editor && e.isSelected == this.props.isSelected && e.isEditing == this.props.isEditing || this.props.editorDidUpdate() : this.context.fixedContextHandler.getBatchUpdater().requestExtraCycle(() => {
        this.setState({
          suppressTransformation: !1
        });
      });
    }
    componentDidMount() {
      this.hasTransformation(this.props.editor) && this.context.fixedContextHandler.getBatchUpdater().requestExtraCycle(() => {
        this.setState({
          requestedTransformationOnMounted: !0
        });
      }), this.props.editorDidUpdate(), this.registerRequestEditingEvent();
    }
    componentWillUnmount() {
      this.unregisterRequestEditingEvent();
    }
    registerRequestEditingEvent() {
      if (b.A.isMobileOrTablet()) {
        var e = u().findDOMNode(this);
        E.KT(e, "request-editing", this.handleEventRequestEditing);
      }
    }
    unregisterRequestEditingEvent() {
      if (b.A.isMobileOrTablet()) {
        var e = u().findDOMNode(this);
        E.Bo(e, "request-editing", this.handleEventRequestEditing);
      }
    }
    getReversedMousePosition(e) {
      var t = this.props.editor.shape.data,
        r = t.rotation,
        n = t.flipX,
        i = t.skewX,
        o = {
          x: e.left,
          y: e.top
        };
      if (!r && !n && !i) return o;
      var s = R.x.calculateCenterPoint(this.props.editor, this.editorContainer),
        a = F.T.getBCRect(this.props.getBaseElement(), e.zc),
        l = {
          x: s.x + a.left,
          y: s.y + a.top
        };
      return o = y.A.pointRotate(o, l, -r), o = B.A.pointSkewed(l, -i, o), n && (o = y.A.reflectPointOverLine(o, l, {
        x: l.x,
        y: l.y + 10
      })), o;
    }
    requestEditing(e) {
      this.props.onRequestEdit(), L.A.next(() => {
        var t = this.getReversedMousePosition(e),
          r = this.context.fixedContextHandler.getMtFuncs(),
          n = j.y.fromRelativeLeftTop(t.x, t.y, r.getDocZoomContainer()).toAbsolute(),
          i = document.elementFromPoint(n.absLeft, n.absTop);
        E.f$(i, this.editorContainer).length > 0 && r.selectFromPos(i, e);
      });
    }
    renderCover(e) {
      return this.props.isEditing ? null : (e.shape.data.size, o().createElement("coverlayer", {
        className: "no-print",
        onDoubleClick: e => this.onCoverLayerDoubleClick(e),
        onTouchStart: t => this.onCoverLayerMouseDown(t, e),
        onMouseDown: t => this.onCoverLayerMouseDown(t, e)
      }));
    }
    render() {
      var e = this.props.editor,
        t = e.shape.data,
        r = {
          left: t.p.x,
          top: t.p.y
        };
      this.anchorStateInfo && (r.left = this.anchorStateInfo.anchorPoint.x, r.top = this.anchorStateInfo.anchorPoint.y);
      var n = e.shape.data,
        i = n.rotation,
        s = void 0 === i ? 0 : i,
        a = n.skewX,
        l = void 0 === a ? 0 : a,
        c = n.flipX;
      !this.state.suppressTransformation && this.state.requestedTransformationOnMounted && (r.transform = "", s && (r.transform = "rotate(".concat(s, "deg)")), l && (r.transform += " skewX(".concat(l, "deg)")));
      var d = this.props.getDzContainer().zoomRatio,
        h = {
          border: "".concat(1 / d, "px solid transparent"),
          transform: T.D.getAnchorTranslate(this.props.editor.shape.anchor)
        };
      this.props.isEditing || this.props.isSelected || this.props.isRemotedSelected, this.props.isEditing ? (h.zIndex = 10, h.background = "rgba(255, 255, 255, 0.580)") : c && (h.transform += " scaleX(-1)");
      var p = "no-border-on-print";
      if (this.props.isEditing && this.hasTransformation(e)) {
        if (!this.lastEditorShape && this.editorContainer) {
          var u,
            g,
            m = {
              minWidth: this.editorContainer.clientWidth,
              minHeight: this.editorContainer.clientHeight,
              border: "1px solid lightgray",
              transform: "".concat(T.D.getAnchorTranslate(this.props.editor.shape.anchor), " rotate(").concat(s, "deg) skewX(").concat(l, "deg)"),
              position: "absolute"
            };
          this.lastEditorShape = o().createElement("div", {
            className: "shadow-box",
            style: m
          });
        }
      } else this.lastEditorShape = null;
      return e.isTextMode ? (p = I()(p, "text-diagram-editor"), h.fontSize = this.props.textFontSizeBase, h.fontFamily = O.A.textFontFamilyFromKey(this.props.baseTextModeFont), h.fontWeight = "normal", h.fontStyle = "normal", "label" == e.xyMatrixRole && (h.fontSize = .78 * this.props.textFontSizeBase)) : (p = I()(p, "math-diagram-editor"), h.fontSize = this.props.mathFontSizeBase, h.fontFamily = O.A.mathFontFamilyFromKey(this.props.subMathTypeFont, this.props.baseMathModeFont, "characters"), "label" == e.xyMatrixRole && (h.fontSize = .78 * this.props.mathFontSizeBase)), (e.xyMatrixHidden || this.isEmptyXyMatrixCell(e)) && (h.visibility = "hidden"), o().createElement("position-container", {
        "data-rotation": y.A.round2(s),
        "data-skewx": y.A.round2(l),
        "data-flipx": !!c,
        "data-anchor": e.shape.anchor || "center",
        style: r
      }, this.lastEditorShape, o().createElement("dg-editor-container", {
        "data-editor-id": e.id,
        class: p,
        onMouseDown: this.onEditorContainerMouseDown,
        style: h,
        ref: this.handleEditorContainerRef
      }, this.props.renderEditArea(e, this.getEditAreaStyle(e)), this.renderCover(e), this.renderSelectOutline(d)));
    }
    renderSelectOutline(e) {
      return this.props.isEditing || this.props.isSelected ? this.getOutlineSvg(e, "green") : this.props.isRemotedSelected ? this.getOutlineSvg(e, this.props.remoteSelectedColor) : void 0;
    }
    getOutlineSvg(e, t) {
      return o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          overflow: "visible",
          pointerEvents: "none"
        }
      }, o().createElement("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        stroke: t,
        strokeDasharray: "".concat(4 / e, " ").concat(2 / e),
        fill: "none",
        strokeWidth: 1 / e
      }));
    }
    getEditAreaStyle(e) {
      var t = P.A.getEditorStyle(e, "textColor"),
        r = k.A.getHtmlColor(t),
        n;
      return "#000" != r && (n = {
        color: r,
        fill: r,
        stroke: r,
        borderColor: r
      }), e.shape.data.size && (n = N(N({}, n), {}, {
        justifyContent: "flex-start",
        margin: 0,
        width: e.shape.data.size.width,
        height: e.shape.data.size.height,
        padding: "0.2em"
      }), "cell" == e.xyMatrixRole && (n.justifyContent = "center", n.alignItems = "center", n.textAlign = "center", n.padding = 0)), n;
    }
    isEmptyXyMatrixCell(e) {
      return "cell" == e.xyMatrixRole && (!(e.lines && e.lines[0] && e.lines[0].blocks && e.lines[0].blocks[0]) || !e.lines[0].blocks[0].text);
    }
  }
  (0, n.A)(z, "contextTypes", {
    getEditorInfo: w().any,
    mathFontSizeBase: w().any,
    baseMathModeFontFamily: w().any,
    fixedContextHandler: w().any
  });
  var H = r(71389);
  class W extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "editorDidUpdate", void 0), (0, n.A)(this, "handleSelectItem", (e, t) => {
        var r = H.W.findOwnerByEditorId(this.props.data, t.id);
        if (r) this.props.onSelectItem(e, r);else if (t.isInGroup) {
          var n = x.A.findGroupedEnityFromEditor(t.id, this.props.data.shapes);
          n && this.props.onSelectItem(e, n);
        } else this.props.onSelectItem(e, t);
      });
    }
    shouldComponentUpdate(e) {
      return e.singleSelectedId != this.props.singleSelectedId || e.selectedDgObj != this.props.selectedDgObj || e.data.elements != this.props.data.elements || e.remoteSelections != this.props.remoteSelections || e.selected != this.props.selected;
    }
    componentDidUpdate(e) {
      if (h().keys(e.data.elements).length != h().keys(this.props.data.elements).length) return this.props.editorDidUpdate(), void (this.editorDidUpdate = !1);
      this.editorDidUpdate && (this.props.editorDidUpdate(), this.editorDidUpdate = !1);
    }
    getEditorModels() {
      var e = this.props.data.elements;
      if (!e) return [];
      var t = [];
      return S.A.getDiagramEditorKeys(e).forEach(r => {
        C.A.deleteWrongFormatDiagramEditor(this.props.data, r);
        var n = e[r];
        n && t.push(n);
      }), t;
    }
    renderEditors() {
      return h().map(this.getEditorModels(), e => {
        var t = this.props.selected && this.props.selected.key == e.id,
          r = H.W.isOwnedEditorId(this.props.data, e.id);
        return o().createElement(z, {
          onRequestEdit: () => this.props.onRequestEdit(e.id),
          getBaseElement: this.props.getBaseElement,
          subMathTypeFont: this.props.subMathTypeFont,
          mathFontSizeBase: this.props.mathFontSizeBase,
          baseMathModeFont: this.props.baseMathModeFont,
          textFontSizeBase: this.props.textFontSizeBase,
          baseTextModeFont: this.props.baseTextModeFont,
          editorDidUpdate: () => {
            this.editorDidUpdate = !0, this.forceUpdate();
          },
          key: e.id,
          isSelected: !r && this.props.selectionCarrier.isAnySelected(e.id, !0),
          isRemotedSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
          remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id),
          isEditing: t,
          editingSelected: t ? this.props.selected.selected : null,
          editor: e,
          onEditorChange: this.props.onEditorChange,
          renderEditArea: this.props.renderEditArea,
          onSelectItem: this.handleSelectItem,
          getDzContainer: this.props.getDzContainer
        });
      });
    }
    render() {
      return o().createElement("diagram-editors", null, this.renderEditors());
    }
  }
  var V = r(70224),
    U = r(21744),
    q = r(55021);
  function G(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function K(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? G(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Z extends q.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "closedOnEscape", !0);
    }
    renderExpandComponent() {
      return o().createElement("css-expand", {
        style: this.getCssExpandStyle()
      }, o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, b.A.supportComplexShape() ? this.getIconOption("complex", "Line") : void 0, this.getIconOption("straight-no-head", "Line"), this.getIconOption("cubic-no-head", "Curve"), this.getIconOption("straight", "Arrow"), this.getIconOption("cubic", "Curved Arrow"), this.getIconOption("polygon", "Polygon"), this.getIconOption("polygon-curve", "Curved Polygon")));
    }
    selectHotKeyByNumber(e) {
      this.diagramHotkeyNumbering && this.diagramHotkeyNumbering.triggerSelectByNumber(e);
    }
    expandByHotKey() {
      this.innerExpandByHotKey(">css-expand>css-shapes>item-option", "top");
    }
    initIcons() {
      var e = P.A.getIconSvgStyle();
      return h().assign(e, {
        transform: "translate(1px, 2px)"
      }), [{
        component: o().createElement("svg", {
          key: "straight-no-head",
          style: e
        }, o().createElement("path", {
          d: "M2,9 L18,9"
        }))
      }, {
        component: o().createElement("svg", {
          key: "cubic-no-head",
          style: e
        }, o().createElement("path", {
          d: " M4,9 C17,-2 5,18 20,6"
        }))
      }, {
        component: o().createElement("svg", {
          key: "straight",
          style: e
        }, o().createElement("path", {
          d: "M2,9 L18,9"
        }), o().createElement("path", {
          d: "M12.97,5.15 L18,9.08 L12.97,13"
        }))
      }, {
        component: o().createElement("svg", {
          key: "cubic",
          style: K(K({}, e), {}, {
            transform: "translate(-2px,2px)"
          })
        }, o().createElement("path", {
          d: " M4,9 C17,-2 5,18 20,6"
        }), o().createElement("path", {
          d: " M15.7,3.11 L21.39,6.7 L15.7,10.28",
          style: {
            transform: "translate(-1px,12px) rotate(-34deg)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "polygon",
          style: e
        }, o().createElement("path", {
          d: "M2,2 L12,4 L14,9 L5,12 L2,2",
          style: {
            transform: "translate(2px, 0px)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "polygon-curve",
          style: e
        }, o().createElement("path", {
          d: "M2,2 C4,0 6,0 10,6 S12,12 5,12 S4,7 4,7 S0,2 2,2",
          style: {
            transform: "translate(4px, 1px)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "complex",
          style: e
        }, o().createElement("path", {
          d: "M2,2 C4,0 6,0 10,6 S12,12 5,12 S4,7 4,7 S0,2 2,2",
          style: {
            transform: "translate(4px, 1px)"
          }
        }))
      }];
    }
  }
  class Y extends q.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), this.state = {
        selectedIconKey: "rectangle"
      };
    }
    selectHotKeyByNumber(e) {
      this.diagramHotkeyNumbering && (">css-expand>css-shapes" != this.diagramHotkeyNumbering.currentCssSelector() ? this.diagramHotkeyNumbering.triggerSelectByNumber(e) : this.innerExpandByHotKey(">css-expand>css-shapes:nth-of-type(".concat(e, ")>item-option"), "top"));
    }
    expandByHotKey() {
      this.innerExpandByHotKey(">css-expand>css-shapes", "right");
    }
    renderExpandComponent() {
      return o().createElement("css-expand", {
        style: this.getCssExpandStyle()
      }, o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("rectangle", "Rectangle"), this.getIconOption("doc-rounded-rect", "Rounded Rectangle"), this.getIconOption("doc-rounded-single-corner-rect", "Rounded Single Corner Rectangle"), this.getIconOption("doc-rounded-same-side-corner-rect", "Rounded Same Side Corner Rectangle"), this.getIconOption("doc-rounded-diagonal-corner-rect", "Rounded Diagonal Corner Rectangle"), this.getIconOption("doc-snip-single-corner-rect", "Snip Single Corner Rectangle"), this.getIconOption("doc-snip-same-side-corner-rect", "Snip Same Side Corner Rectangle"), this.getIconOption("doc-snip-diagonal-corner-rect", "Snip Diagonal Corner Rectangle"), this.getIconOption("doc-snip-round-single-corner-rect", "Snip Round Single Corner Rectangle")), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 10
        }
      }, o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, gray)",
          height: 1,
          flexGrow: 1
        }
      })), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("square", "Square"), this.getIconOption("parallelogram", "Parallelogram"), this.getIconOption("doc-triangle", "Triangle"), this.getIconOption("doc-right-triangle", "Right Triangle"), this.getIconOption("doc-trapezoid", "Trapezoid"), this.getIconOption("doc-diamond", "Diamond"), this.getIconOption("regular-polygon-5", "Regular Pentagon"), this.getIconOption("regular-polygon-6", "Hexagon"), this.getIconOption("regular-polygon-8", "Octagon"), this.getIconOption("regular-polygon-10", "Decagon")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("ellipse", "Ellipse"), this.getIconOption("circle", "Circle"), this.getIconOption("doc-arc", "Arc"), this.getIconOption("doc-chord", "Chord"), this.getIconOption("doc-pie", "Pie"), this.getIconOption("doc-frame", "Frame"), this.getIconOption("doc-half-frame", "Half Frame"), this.getIconOption("doc-l-shape", "L Shape"), this.getIconOption("doc-diagonal-stripe", "Diagonal Stripe"), this.getIconOption("doc-cross", "Cross")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("doc-plaque", "Plaque"), this.getIconOption("doc-can", "Can"), this.getIconOption("doc-cube", "Cube"), this.getIconOption("doc-bevel", "Bevel"), this.getIconOption("doc-donut", "Donut"), this.getIconOption("doc-block-arc", "Block Arc"), this.getIconOption("doc-folded-corner", "Folded Corner Document"), this.getIconOption("doc-moon", "Moon"), this.getIconOption("doc-tear-drop", "Tear Drop"), this.getIconOption("doc-cloud", "Cloud")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("doc-smiley-face", "Smiley Face"), this.getIconOption("doc-right-angle", "Right Angle"), this.getIconOption("star", "Star"), this.getIconOption("spiral", "Spiral")), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2
        }
      }, o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, gray)",
          height: 1,
          flexGrow: 1
        }
      }), o().createElement("div", {
        style: {
          fontSize: 10,
          color: "var(--ui-text-muted, gray)",
          paddingRight: 5,
          paddingLeft: 5
        }
      }, "Flowchart"), o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, gray)",
          height: 1,
          flexGrow: 1
        }
      })), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("flow-process", "Process"), this.getIconOption("flow-alternative-process", "Alternative Process"), this.getIconOption("flow-decision", "Decision"), this.getIconOption("flow-data", "Data"), this.getIconOption("flow-predefined-process", "Predefined Process"), this.getIconOption("flow-internal-storage", "Internal Storage"), this.getIconOption("flow-document", "Document"), this.getIconOption("flow-multidocument", "Multidocument"), this.getIconOption("flow-terminator", "Terminator"), this.getIconOption("flow-preparation", "Preparation")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("flow-manual-input", "Manual Input"), this.getIconOption("flow-manual-operation", "Manual Operation"), this.getIconOption("flow-connector", "Connector"), this.getIconOption("flow-off-page-connector", "Off-page Connector"), this.getIconOption("flow-card", "Card"), this.getIconOption("flow-punched-tape", "Punched Tape"), this.getIconOption("flow-summing-junction", "Summing Junction"), this.getIconOption("flow-or", "Or"), this.getIconOption("flow-collate", "Collate"), this.getIconOption("flow-sort", "Sort")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("flow-extract", "Extract"), this.getIconOption("flow-merge", "Merge"), this.getIconOption("flow-stored-data", "Sorted Data"), this.getIconOption("flow-delay", "Delay"), this.getIconOption("flow-sequential-access-storage", "Sequential Access Storage"), this.getIconOption("flow-magnetic-disk", "Magnetic Disk"), this.getIconOption("flow-direct-access-storage", "Direct Access Storage"), this.getIconOption("flow-display", "Display")));
    }
    initIcons() {
      var e = h().chain(U.A.getCompositesMts()).filter(e => !!e.getIcon).map(e => e.getIcon()).value(),
        t = P.A.getIconSvgStyle();
      return [{
        component: o().createElement("svg", {
          key: "arc",
          style: t
        }, o().createElement("path", {
          d: " M11.74,15.28 C11.25,15.42 10.73,15.5 10.2,15.5 C7.21,15.5 4.78,13.12 4.78,10.19 C4.78,7.26 7.21,4.89 10.2,4.89 C11.13,4.89 12.01,5.12 12.77,5.52",
          style: {
            transform: "translate(2px,-1px)",
            transformOrigin: "50% 50%"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "regular-polygon",
          style: t
        }, o().createElement("polygon", {
          points: "7,2 12,5 12,10 7,13 2,10  2,5 ",
          style: {
            transform: "translate(4px,2px)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "regular-polygon-5",
          style: t
        }, o().createElement("path", {
          d: " M16.75,10.2 L12.22,16.43 L4.9,14.05 L4.9,6.35 L12.22,3.97 Z",
          style: {
            transform: "translate(1px,0)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "regular-polygon-6",
          style: t
        }, o().createElement("path", {
          d: " M17.18,10.29 L13.66,16.38 L6.63,16.38 L3.11,10.29 L6.63,4.19 L13.66,4.19 Z",
          style: {
            transform: "translate(1px,0)"
          }
        }), o().createElement("text", {
          fontSize: "8",
          fontWeight: "100",
          x: "9",
          y: "13",
          fill: "none"
        }, "6"))
      }, {
        component: o().createElement("svg", {
          key: "regular-polygon-8",
          style: t
        }, o().createElement("path", {
          d: " M16.5,10.75 L14.6,15.35 L10,17.25 L5.4,15.35 L3.5,10.75 L5.4,6.15 L10,4.25 L14.6,6.15 Z",
          style: {
            transform: "translate(1px,-0.5px)"
          }
        }), o().createElement("text", {
          fontSize: "8",
          x: "9",
          y: "13",
          fill: "none"
        }, "8"))
      }, {
        component: o().createElement("svg", {
          key: "regular-polygon-10",
          style: t
        }, o().createElement("path", {
          d: " M17.13,10.5 L15.78,14.62 L12.28,17.17 L7.94,17.17 L4.43,14.62 L3.09,10.5 L4.43,6.38 L7.94,3.83 L12.28,3.83 L15.78,6.38 Z",
          style: {
            transform: "translate(1px,0)"
          }
        }), o().createElement("text", {
          fontSize: "8",
          x: "6.5",
          y: "13",
          fill: "none"
        }, "10"))
      }, {
        component: o().createElement("svg", {
          key: "polygon-curve",
          style: t
        }, o().createElement("path", {
          d: "M2,2 C4,0 6,0 10,6 S12,12 5,12 S4,7 4,7 S0,2 2,2",
          style: {
            transform: "translate(3px, 3px)"
          }
        }))
      }, {
        component: o().createElement("svg", {
          key: "polygon",
          style: t
        }, o().createElement("path", {
          d: "M2,2 L12,4 L14,9 L5,12 L2,2",
          style: {
            transform: "translate(3px, 3px)"
          }
        }))
      }].concat(e);
    }
  }
  class Q {
    mapName(e) {
      switch (e = e.startsWith("generic-shape-") ? e.replace("generic-shape-", "") : e) {
        case "and":
          return "And Gate";
        case "nand":
          return "Nand Gate";
        case "or":
          return "Or Gate";
        case "xor":
          return "Xor Gate";
        case "nor":
          return "Nor Gate";
        case "inverter":
          return "Not/Inverter Gate";
        case "resistor-1":
        case "resistor-2":
          return "Resistor";
        case "memristor-1":
          return "Memristor";
        case "capacitor-1":
          return "Capacitor";
        case "inductor":
          return "Inductor";
        case "inductor-3":
        case "inductor-5":
          return "Inductor (Air Core)";
        case "2-way-switch":
          return "2 Way Switch";
        case "simple-switch":
          return "Simple Switch";
        case "stay-put":
          return "Stay Put";
        case "diode":
          return "Diode";
        case "loudspeaker":
          return "Speaker";
        case "headphones":
          return "Headphone";
        case "monocell-battery":
          return "Battery";
        case "fuse-1":
          return "Fuse";
        case "light-bulb":
          return "Light Bulb";
        case "lamp":
          return "Lamp";
        case "contact":
          return "Contact";
        case "not-contact":
          return "Not Contact";
        case "output-1":
        case "output-2":
          return "Output";
        case "aerial---antenna-1":
          return "Antenna";
        case "signal-ground":
          return "Ground";
        case "pulse-1":
        case "pulse-2":
          return "Pulse Wave Form";
        case "sawtooth":
          return "Sawtooth Wave Form";
        case "sine-wave":
          return "Sine Wave Form";
        case "square-wave":
          return "Square Wave Form";
        case "slow-square-wave":
          return "Chopped Wave Form";
      }
      return "Generic";
    }
  }
  var J = new Q();
  class X extends q.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), this.state = {
        selectedIconKey: "grid"
      };
    }
    selectHotKeyByNumber(e) {
      this.diagramHotkeyNumbering && (">css-expand>css-shapes" != this.diagramHotkeyNumbering.currentCssSelector() ? this.diagramHotkeyNumbering.triggerSelectByNumber(e) : this.innerExpandByHotKey(">css-expand>css-shapes:nth-of-type(".concat(e, ")>item-option"), "top"));
    }
    expandByHotKey() {
      this.innerExpandByHotKey(">css-expand>css-shapes", "right");
    }
    getIconOption(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = arguments.length > 2 ? arguments[2] : void 0;
      e.startsWith("generic-shape-") && (t = J.mapName(e));
      var n = this.getIconMap()[e];
      return this.renderIconOption(n, e, t, r);
    }
    renderExpandComponent() {
      var e = {
        width: 26
      };
      return o().createElement("css-expand", {
        style: this.getCssExpandStyle()
      }, o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("axis2d", void 0, e), this.getIconOption("wave", void 0, e), this.getIconOption("parabola", void 0, e), this.getIconOption("polynomial", void 0, e), this.getIconOption("spring", void 0, e), this.getIconOption("brace", void 0, e), this.getIconOption("ruler", void 0, e), this.getIconOption("ruler-curve", void 0, e), this.getIconOption("grid", void 0, e)), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
          marginBottom: 3
        }
      }, o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, gray)",
          height: 1,
          flexGrow: 1
        }
      }), o().createElement("div", {
        style: {
          fontSize: 10,
          color: "var(--ui-text-muted, gray)",
          paddingRight: 5,
          paddingLeft: 5
        }
      }, "Electrical"), o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, gray)",
          height: 1,
          flexGrow: 1
        }
      })), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("generic-shape-and", void 0, e), this.getIconOption("generic-shape-nand", void 0, e), this.getIconOption("generic-shape-or", void 0, e), this.getIconOption("generic-shape-xor", void 0, e), this.getIconOption("generic-shape-nor", void 0, e), this.getIconOption("generic-shape-inverter", void 0, e), this.getIconOption("generic-shape-resistor-1", void 0, e), this.getIconOption("generic-shape-resistor-2", void 0, e), this.getIconOption("generic-shape-memristor-1", void 0, e)), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("generic-shape-capacitor-1", void 0, e), this.getIconOption("generic-shape-inductor", void 0, e), this.getIconOption("generic-shape-inductor-3", void 0, e), this.getIconOption("generic-shape-inductor-5", void 0, e), this.getIconOption("generic-shape-2-way-switch", void 0, e), this.getIconOption("generic-shape-simple-switch", void 0, e), this.getIconOption("generic-shape-stay-put", void 0, e), this.getIconOption("generic-shape-diode", void 0, e), this.getIconOption("generic-shape-loudspeaker", void 0, e)), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("generic-shape-headphones", void 0, e), this.getIconOption("generic-shape-monocell-battery", void 0, e), this.getIconOption("generic-shape-fuse-1", void 0, e), this.getIconOption("generic-shape-light-bulb", void 0, e), this.getIconOption("generic-shape-lamp", void 0, e), this.getIconOption("generic-shape-contact", void 0, e), this.getIconOption("generic-shape-not-contact", void 0, e), this.getIconOption("generic-shape-output-1", void 0, e), this.getIconOption("generic-shape-output-2", void 0, e)), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("generic-shape-aerial---antenna-1", void 0, e), this.getIconOption("generic-shape-signal-ground", void 0, e), this.getIconOption("generic-shape-pulse-1", void 0, e), this.getIconOption("generic-shape-pulse-2", void 0, e), this.getIconOption("generic-shape-sawtooth", void 0, e), this.getIconOption("generic-shape-sine-wave", void 0, e), this.getIconOption("generic-shape-square-wave", void 0, e), this.getIconOption("generic-shape-slow-square-wave", void 0, e)));
    }
    getComponentClassName() {
      return "composite-shape-selector";
    }
    initIcons() {
      var e = h().chain(U.A.getCompositesMts()).filter(e => !!e.getIcon).map(e => e.getIcon()).value(),
        t = U.A.getCompositeShapeManagementFromType("generic-shape"),
        r = ["generic-shape-and", "generic-shape-nand", "generic-shape-or", "generic-shape-xor", "generic-shape-nor", "generic-shape-inverter", "generic-shape-resistor-1", "generic-shape-resistor-2", "generic-shape-memristor-1", "generic-shape-capacitor-1", "generic-shape-inductor", "generic-shape-inductor-3", "generic-shape-inductor-5", "generic-shape-2-way-switch", "generic-shape-simple-switch", "generic-shape-stay-put", "generic-shape-diode", "generic-shape-loudspeaker", "generic-shape-headphones", "generic-shape-monocell-battery", "generic-shape-fuse-1", "generic-shape-light-bulb", "generic-shape-lamp", "generic-shape-contact", "generic-shape-not-contact", "generic-shape-output-1", "generic-shape-output-2", "generic-shape-aerial---antenna-1", "generic-shape-blocking-device", "generic-shape-rotation", "generic-shape-automatic-return", "generic-shape-mechanical-interlock", "generic-shape-signal-ground", "generic-shape-pulse-1", "generic-shape-pulse-2", "generic-shape-sawtooth", "generic-shape-sine-wave", "generic-shape-square-wave", "generic-shape-slow-square-wave"];
      e = e.concat(r.map(e => t.getIcon(e.replace("generic-shape-", ""))));
      var n = P.A.getIconSvgStyle();
      return h().assign(n, {
        height: 20,
        transform: "translate(-1px, 5px)"
      }), e.push({
        caption: "ruler",
        component: o().createElement("svg", {
          key: "ruler",
          style: n
        }, o().createElement("path", {
          d: "  M3,7 L23,7 M8,4 L8,10 M13,4 L13,10 M18,4 L18,10"
        }))
      }), e.push({
        caption: "ruler",
        component: o().createElement("svg", {
          key: "ruler-curve",
          style: n
        }, o().createElement("path", {
          d: " M3,10 C8,4 16,4 21,11 M5.46,4.17 L8.25,9.48 M11.73,2.62 L11.68,8.62 M17.94,4.26 L15.07,9.53 M22.62,8.19 L17.99,12.01"
        }))
      }), e;
    }
  }
  class $ extends q.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), this.state = {
        selectedIconKey: "right-arrow"
      };
    }
    selectHotKeyByNumber(e) {
      this.diagramHotkeyNumbering && (">css-expand>css-shapes" != this.diagramHotkeyNumbering.currentCssSelector() ? this.diagramHotkeyNumbering.triggerSelectByNumber(e) : this.innerExpandByHotKey(">css-expand>css-shapes:nth-of-type(".concat(e, ")>item-option"), "top"));
    }
    expandByHotKey() {
      this.innerExpandByHotKey(">css-expand>css-shapes", "right");
    }
    renderExpandComponent() {
      return o().createElement("css-expand", {
        style: this.getCssExpandStyle()
      }, o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("arrow-head-1"), this.getIconOption("arrow-head-2"), this.getIconOption("arrow-head-3"), this.getIconOption("arrow-head-4"), this.getIconOption("arrow-head-6", "Circle Plus"), this.getIconOption("arrow-head-7", "Plus"), this.getIconOption("right-arrow", "Right Arrow"), this.getIconOption("left-arrow", "Left Arrow"), this.getIconOption("up-arrow", "Up Arrow"), this.getIconOption("down-arrow", "Down Arrow")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("left-right-arrow", "Left Right Arrow"), this.getIconOption("up-down-arrow", "Up Down Arrow"), this.getIconOption("quad-arrow", "Quad Arrow"), this.getIconOption("left-top-right-arrow", "Left Top Right Arrow"), this.getIconOption("bend-arrow", "Bend Arrow"), this.getIconOption("u-turn-arrow", "U Turn Arrow"), this.getIconOption("left-up-arrow", "Left Up Arrow"), this.getIconOption("bend-up-arrow", "Bend Up Arrow"), this.getIconOption("curve-left-arrow", "Curve Left Arrow"), this.getIconOption("curve-right-arrow", "Curve Right Arrow")), o().createElement("css-shapes", {
        style: {
          display: "flex"
        }
      }, this.getIconOption("striped-right-arrow", "Striped Right Arrow"), this.getIconOption("notched-right-arrow", "Notched Right Arrow"), this.getIconOption("pentagon-arrow", "Pentagon Arrow"), this.getIconOption("chevron-arrow", "Chevron Arrow"), this.getIconOption("callout-right-arrow", "Callout Right Arrow"), this.getIconOption("callout-left-right-arrow", "Callout Left Right Arrow"), this.getIconOption("callout-quad-arrow", "Callout Quad Arrow")));
    }
    initIcons() {
      return h().chain(U.A.getCompositesMts()).filter(e => !!e.getIcon).map(e => e.getIcon()).value();
    }
  }
  var ee = r(88987),
    te = r(43774),
    re = r(24829),
    ne = r(10192),
    ie = r(17524),
    oe = r(77009),
    se = r(20260),
    ae;
  class le extends o().Component {
    render() {
      return this.props.hidden ? o().createElement("div", null) : o().createElement("diagram-bar-region", null, o().createElement("diagram-bar", null, this.props.items, this.renderSelectionBox(), this.renderRemoveItem(), this.renderDisableLayer(this.props.isDisabled)), this.props.hotkeyItem);
    }
    renderDisableLayer(e) {
      if (e) return o().createElement("disabled-layer", null);
    }
    renderRemoveItem() {
      return b.A.isMobileOrTablet() ? se.A.getRemoveItem(() => this.props.onDeleteEntities(!0)) : null;
    }
    renderSelectionBox() {
      if (!b.A.isMobileOrTablet()) return null;
      var e = {
        display: "block",
        height: 26,
        width: 30,
        position: "relative",
        marginBottom: 10
      };
      return "select" == this.props.showSelectionOverlayFor && (e.background = "white", e.border = "1px solid lightgray"), o().createElement("db-selection", {
        style: e
      }, o().createElement("svg", {
        className: "selectable",
        onMouseDown: this.props.requestTouchSelection,
        style: {
          width: "100%",
          height: "100%",
          overflow: "visible",
          position: "static"
        }
      }, o().createElement("path", {
        style: {
          transform: "translate(7px, 4px) scale(1.3)"
        },
        d: "M-0.5,0 L12.5,0  M-0.5,12 L12.5,12 M0,0 L0,12  M12,0 L12,12",
        stroke: "gray",
        strokeWidth: "0.5",
        strokeDasharray: "1 1"
      })));
    }
  }
  class ce extends o().Component {
    render() {
      var e = this.props.title;
      return o().createElement("div", {
        className: "collapsible-view",
        style: {
          borderBottom: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("div", {
        className: "collapsible-view-title",
        style: {
          padding: "7px 5px",
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          cursor: "pointer"
        },
        onClick: () => {
          this.props.onExpandedChange(!this.props.expanded);
        }
      }, o().createElement("span", null, e), this.renderIndicator()), this.renderContent());
    }
    renderIndicator() {
      var e = {
        float: "right",
        marginRight: 5
      };
      return this.props.expanded ? o().createElement("i", {
        className: "fa fa-caret-down",
        style: e
      }) : o().createElement("i", {
        className: "fa fa-caret-right",
        style: e
      });
    }
    renderContent() {
      if (this.props.expanded) {
        var e = this.props.content;
        return o().createElement("div", {
          className: "collapsible-view-content",
          style: {
            padding: 5
          }
        }, e);
      }
    }
  }
  class de extends o().Component {
    constructor(e) {
      super(e), ae || (ae = new Set([0, 1, 2]));
    }
    render() {
      return o().createElement("div", null, this.props.items.map((e, t) => o().createElement(ce, {
        key: t,
        title: e.name,
        content: e.element,
        expanded: ae.has(t),
        onExpandedChange: e => {
          e ? ae.add(t) : ae.delete(t), this.forceUpdate();
        }
      })));
    }
    componentWillMount() {}
  }
  var he = r(516);
  class pe {
    getInfoFrom(e, t) {
      var r = e.requestDgExternalConnector(),
        n = "none" == r ? "none" : r.getMathViewPort();
      return ue.getInfo(t, n, e.getDocZoomContainer());
    }
    getInfo(e, t, r) {
      var n,
        i = {
          diagramRect: he.A.getElementRect(e),
          dzc: r
        };
      return t && "none" != t && (i.viewRect = t.viewPort), i;
    }
  }
  var ue = new pe();
  function ge(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function me(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ge(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ge(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class fe extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "container", void 0), (0, n.A)(this, "diagramHotkeyNumbering", void 0), (0, n.A)(this, "arrowShapeSelectorRef", void 0), (0, n.A)(this, "polygonShapeSelectorRef", void 0), (0, n.A)(this, "compositeShapeSelectorRef", void 0), (0, n.A)(this, "arrowHeadShapeSelectorRef", void 0), (0, n.A)(this, "diagramPlotSelectorRef", void 0), (0, n.A)(this, "handleSelectTextModeItem", () => {
        this.handleSelectTextItem(!0, void 0);
      }), (0, n.A)(this, "handleSelectTextModeBoundingItem", () => {
        this.handleSelectTextItem(!0, {
          width: 100,
          height: 50
        });
      }), (0, n.A)(this, "handleSelectMathModeItem", () => {
        this.handleSelectTextItem(!1, void 0);
      }), (0, n.A)(this, "handleSelectImage", () => {
        this.onCompositeShapeSelect("image");
      }), (0, n.A)(this, "handleSelectTextItem", (e, t) => {
        ne.A.createBy(this.getShapeCreationInfo(), r => {
          var n,
            i,
            o = V.A.createOneTextEditor(e ? "text" : "fx", a.w.nextDiagramEditorId()),
            s = te.A.getRandomPosYAround(r.top + 120, r.top + 160, r.bottom),
            l = ne.A.calculatePositionX(r, 50, 120);
          r.right - r.left < 130 && r.bottom - r.top < 130 && (s = te.A.getRandomPosYAround(r.top, r.top + (Math.min, r.bottom - r.top), r.bottom), l = Math.min(r.left + 10, r.right - 40)), o.shape = {
            data: {
              p: {
                x: l,
                y: s.y1
              }
            }
          }, e ? o.isTextMode = !0 : (null === (n = null === (i = this.props.fixedContextHandler.getMtFuncs().getMtSettings().complexObject) || void 0 === i ? void 0 : i.displayStyleForDiagramMath) || void 0 === n || n) && (o.isMathDisplayMode = !0), b.A.isTestEnv() || (o.shape.anchor = "left-top"), t && (o.shape.data.size = t, o.shape.anchor = "center"), this.props.onAddNewItem("text", o);
        });
      }), (0, n.A)(this, "onArrowShapeSelect", e => {
        if ("complex" != e) return "polygon" == e || "polygon-curve" == e ? this.onShapeSelect(e) : void ne.A.createBy(this.getShapeCreationInfo(), t => {
          var r = te.A.getRandomPosYAround(t.top + 100, t.top + 200, t.bottom),
            n = ne.A.calculatePositionX(t, 100, 100),
            i = {
              id: a.w.nextDiagramArrowId(),
              data: [{
                x: n,
                y: r.y1
              }, {
                x: n + 100,
                y: r.y1 + 100
              }],
              head: ">",
              tail: "no",
              shaft: "-",
              mVer: 1
            };
          "cubic" != e && "cubic-no-head" != e && "ruler-curve" != e || (i.type = "cubic", r = te.A.getRandomPosYAround(t.top + 70, t.top + 130, t.bottom), i.data = [y.A.toRelativeControlPointCubic({
            p1: {
              x: n,
              y: r.y1 + 30
            },
            cp: {
              x: n + 40,
              y: r.y1
            },
            cp2: {
              x: n + 60,
              y: r.y1 + 60
            },
            p2: {
              x: n + 100,
              y: r.y1 + 30
            }
          })]), e.indexOf("ruler") >= 0 && (i.head = "no", i.shaft = "|"), e.indexOf("no-head") >= 0 && (i.head = "no"), this.props.onAddNewItem("shape-arrow", i);
        });
        this.props.onRequestInsertion("complex");
      }), (0, n.A)(this, "onCompositeShapeSelect", e => {
        if (e.startsWith("generic-shape-")) {
          var t = U.A.getCompositeShapeManagementFromType("generic-shape"),
            r = this.getShapeCreationInfo();
          r.customData = e.replace("generic-shape-", "");
          var n = t.createShape(r);
          this.props.onAddNewItem("shape-composite", n);
        } else if ("cubic" != e && "quadratic" != e) {
          if ("ruler" == e || "ruler-curve" == e) return this.onArrowShapeSelect(e);
          if ("polygon" == e || "polygon-curve" == e) return this.onShapeSelect(e);
          var i = null,
            o;
          if ("regular-polygon-5" == e || "regular-polygon-6" == e || "regular-polygon-8" == e || "regular-polygon-10" == e) i = {
            sides: Number.parseInt(h().last(e.split("-")), 10)
          }, e = "regular-polygon";
          var s,
            a = U.A.getCompositeShapeManagementFromType(e).createShape(this.getShapeCreationInfo());
          i && (a = me(me({}, a), {}, {
            data: me(me({}, a.data), i)
          })), this.props.onAddNewItem("shape-composite", a);
        }
      }), (0, n.A)(this, "onShapeSelect", e => {
        var t = a.w.nextDiagramShapeId();
        "polygon" == e && ne.A.createBy(this.getShapeCreationInfo(), r => {
          var n = ne.A.calculatePositionX(r, 100, 20),
            i = te.A.getRandomPosYAround(r.top + 20, r.top + 170, r.bottom),
            o = {
              id: t,
              type: e,
              data: [{
                x: n + 50,
                y: i.y1
              }, {
                x: n + 100,
                y: i.y1 + 30
              }, {
                x: n + 50,
                y: i.y1 + 110
              }, {
                x: n + 20,
                y: i.y1 + 90
              }, {
                x: n,
                y: i.y1 + 30
              }]
            };
          this.props.onAddNewItem("shape-object", o);
        }), "polygon-curve" == e && ne.A.createBy(this.getShapeCreationInfo(), r => {
          var n = te.A.getRandomPosYAround(r.top + 40, r.top + 120, r.bottom),
            i = ne.A.calculatePositionX(r, 90, 140),
            o = {
              id: t,
              type: e,
              data: y.A.smoothBeziers([{
                p1: {
                  x: i,
                  y: n.y1
                },
                p2: {
                  x: i + 90,
                  y: n.y1
                },
                cp: {
                  dx: 20,
                  dy: -20
                },
                cp2: {
                  dx: 20,
                  dy: -20
                }
              }, {
                p1: {
                  x: i + 90,
                  y: n.y1
                },
                p2: {
                  x: i + 90,
                  y: n.y1 + 60
                },
                cp: {
                  dx: 20,
                  dy: 20
                },
                cp2: {
                  dx: -20,
                  dy: -30
                }
              }, {
                p1: {
                  x: i + 90,
                  y: n.y1 + 60
                },
                p2: {
                  x: i,
                  y: n.y1 + 60
                },
                cp: {
                  dx: -20,
                  dy: -20
                },
                cp2: {
                  dx: 20,
                  dy: 30
                }
              }, {
                p1: {
                  x: i,
                  y: n.y1 + 60
                },
                p2: {
                  x: i,
                  y: n.y1
                },
                cp: {
                  dx: 20,
                  dy: -20
                },
                cp2: {
                  dx: -20,
                  dy: 10
                }
              }], !0)
            };
          this.props.onAddNewItem("shape-object", o);
        });
      }), (0, n.A)(this, "handlePlotSelect", e => {
        "function" != e ? "xymatrix" != e ? this.onPlotlySelect(e) : this.onCompositeShapeSelect("xymatrix") : this.onCompositeShapeSelect("plot");
      }), (0, n.A)(this, "handleDiagramPlotSelectorRef", e => {
        this.diagramPlotSelectorRef = e;
      }), (0, n.A)(this, "handleArrowShapeSelectorRef", e => {
        this.arrowShapeSelectorRef = e;
      }), (0, n.A)(this, "handlePolygonShapeSelectorRef", e => {
        this.polygonShapeSelectorRef = e;
      }), (0, n.A)(this, "handleCompositeShapeSelectorRef", e => {
        this.compositeShapeSelectorRef = e;
      }), (0, n.A)(this, "handleArrowHeadShapeSelectorRef", e => {
        this.arrowHeadShapeSelectorRef = e;
      }), (0, n.A)(this, "handleDiagramHotkeyNumbering", e => {
        this.diagramHotkeyNumbering = e;
      });
    }
    shouldComponentUpdate(e, t) {
      return t != this.state || e.hidden != this.props.hidden || e.onRequestFreeDrawing != this.props.onRequestFreeDrawing || e.showSelectionOverlayFor != this.props.showSelectionOverlayFor || e.freeDrawingSelected != this.props.freeDrawingSelected;
    }
    setInfo(e, t) {
      this.container = t;
    }
    getShapeCreationInfo() {
      var e = this.props.fixedContextHandler;
      return ue.getInfoFrom(e.getMtFuncs(), this.container);
    }
    onPlotlySelect(e) {
      var t = ie.A.create(e),
        r = {
          id: a.w.nextDiagramCompositeShapeId(),
          type: "plotly",
          data: {
            p1: {
              x: 10,
              y: 10
            },
            p2: {
              x: 350,
              y: 250
            }
          },
          plotlyData: t
        };
      this.props.onAddNewItem("shape-composite", r);
    }
    renderPlotItem(e) {
      return o().createElement(ee.c, {
        key: "DiagramPlotSelector",
        fullVisibleMode: e,
        preventCloseOnSelect: !0,
        ref: this.handleDiagramPlotSelectorRef,
        onItemSelect: this.handlePlotSelect,
        showDrawing: !1
      });
    }
    getExpandedSelection() {
      return this.arrowShapeSelectorRef && this.arrowShapeSelectorRef.isExpanded() ? this.arrowShapeSelectorRef : this.polygonShapeSelectorRef && this.polygonShapeSelectorRef.isExpanded() ? this.polygonShapeSelectorRef : this.compositeShapeSelectorRef && this.compositeShapeSelectorRef.isExpanded() ? this.compositeShapeSelectorRef : this.arrowHeadShapeSelectorRef && this.arrowHeadShapeSelectorRef.isExpanded() ? this.arrowHeadShapeSelectorRef : this.diagramPlotSelectorRef && this.diagramPlotSelectorRef.isExpanded() ? this.diagramPlotSelectorRef : void 0;
    }
    innerSelectHotKeyByNumber(e) {
      var t = this.getExpandedSelection();
      if (t) return t.selectHotKeyByNumber(e), !0;
      switch (e) {
        case 1:
          return this.handleSelectMathModeItem(), !1;
        case 2:
          return this.handleSelectTextModeItem(), !1;
        case 3:
          return this.arrowShapeSelectorRef && this.arrowShapeSelectorRef.expandByHotKey(), !0;
        case 4:
          return this.polygonShapeSelectorRef && this.polygonShapeSelectorRef.expandByHotKey(), !0;
        case 5:
          return this.compositeShapeSelectorRef && this.compositeShapeSelectorRef.expandByHotKey(), !0;
        case 6:
          return this.arrowHeadShapeSelectorRef && this.arrowHeadShapeSelectorRef.expandByHotKey(), !0;
        case 7:
          return this.diagramPlotSelectorRef && this.diagramPlotSelectorRef.expandByHotKey(), !0;
        case 8:
          return this.handleSelectImage(), !1;
        case 9:
          return this.props.onRequestFreeDrawing(), !1;
      }
    }
    handleHotkey(e) {
      var t = e - 48,
        r;
      if (this.innerSelectHotKeyByNumber(t) && this.diagramHotkeyNumbering) return this.diagramHotkeyNumbering.hide(), "handled";
    }
    showHotkeys() {
      this.diagramHotkeyNumbering && this.diagramHotkeyNumbering.show(">diagram-bar>.hotkey-numbering-item,>diagram-bar>expandable-component", "right");
    }
    hideHotkeys() {
      this.diagramHotkeyNumbering && this.diagramHotkeyNumbering.hide(), this.arrowShapeSelectorRef && this.arrowShapeSelectorRef.closeExpand(), this.polygonShapeSelectorRef && this.polygonShapeSelectorRef.closeExpand(), this.compositeShapeSelectorRef && this.compositeShapeSelectorRef.closeExpand(), this.arrowHeadShapeSelectorRef && this.arrowHeadShapeSelectorRef.closeExpand(), this.diagramPlotSelectorRef && this.diagramPlotSelectorRef.closeExpand();
    }
    getMath() {
      return o().createElement("item", {
        key: "mt",
        style: {
          width: 24,
          fontFamily: "Asana-Math, Asana",
          fontSize: 15
        },
        className: "text-field role-diagram-fx hotkey-numbering-item",
        onMouseDown: this.handleSelectMathModeItem
      }, " fx ");
    }
    getText() {
      return o().createElement("item", {
        key: "tt",
        style: {
          width: 24,
          fontSize: 11,
          lineHeight: "14px",
          paddingTop: 5
        },
        className: "role-diagram-text hotkey-numbering-item",
        onMouseDown: this.handleSelectTextModeItem
      }, " Text ");
    }
    getTextBounding() {
      return o().createElement("item", {
        key: "ttb",
        style: {
          fontSize: 11,
          lineHeight: "14px",
          paddingTop: 3,
          marginLeft: 3
        },
        className: "role-diagram-text-bounding hotkey-numbering-item",
        onMouseDown: this.handleSelectTextModeBoundingItem
      }, o().createElement("span", {
        style: {
          border: "1px dotted lightgray",
          padding: 3,
          display: "inline-block"
        }
      }, "Text"));
    }
    getArrowShapeSelector(e) {
      return o().createElement(Z, {
        key: "ArrowShapeSelector",
        fullVisibleMode: e,
        preventCloseOnSelect: !0,
        ref: this.handleArrowShapeSelectorRef,
        onItemSelect: this.onArrowShapeSelect
      });
    }
    getPolygonShapeSelector(e) {
      return o().createElement(Y, {
        key: "PolygonShapeSelector",
        fullVisibleMode: e,
        preventCloseOnSelect: !0,
        ref: this.handlePolygonShapeSelectorRef,
        onItemSelect: e => this.onCompositeShapeSelect(e)
      });
    }
    getCompositeShapeSelector(e) {
      return o().createElement(X, {
        key: "CompositeShapeSelector",
        fullVisibleMode: e,
        preventCloseOnSelect: !0,
        ref: this.handleCompositeShapeSelectorRef,
        onItemSelect: e => this.onCompositeShapeSelect(e)
      });
    }
    getArrowHeadShapeSelector(e) {
      return o().createElement($, {
        key: "ArrowHeadShapeSelector",
        fullVisibleMode: e,
        preventCloseOnSelect: !0,
        ref: this.handleArrowHeadShapeSelectorRef,
        onItemSelect: e => this.onCompositeShapeSelect(e)
      });
    }
    getImageSelector() {
      return o().createElement("item", {
        key: "image",
        className: "hotkey-numbering-item",
        style: {
          height: 16,
          position: "relative"
        },
        "data-amt": "diagram/items-bar/image",
        onMouseDown: this.handleSelectImage
      }, o().createElement("div", null, re.A.imageIcon));
    }
    getFreeDrawing() {
      var e = this.props.freeDrawingSelected;
      return o().createElement("item", {
        key: "free-drawing",
        className: "hotkey-numbering-item",
        style: {
          height: 16,
          position: "relative",
          border: e ? "1px #e6e5e5 solid" : void 0,
          background: e ? "white" : void 0
        },
        "data-amt": "diagram/items-bar/free-drawing",
        onMouseDown: this.props.onRequestFreeDrawing
      }, o().createElement("div", null, re.A.pencilIcon));
    }
    render() {
      return this.props.largeView ? o().createElement(de, {
        items: [{
          name: "General",
          element: o().createElement("div", null, this.getMath(), this.getText(), this.getTextBounding())
        }, {
          name: "Lines, Polygons",
          element: this.getArrowShapeSelector(!0)
        }, {
          name: "Document Shapes, Flow Chart",
          element: this.getPolygonShapeSelector(!0)
        }, {
          name: "Electrical, Grid,...",
          element: this.getCompositeShapeSelector(!0)
        }, {
          name: "Arrow Shapes",
          element: this.getArrowHeadShapeSelector(!0)
        }, {
          name: "Plot",
          element: this.renderPlotItem(!0)
        }, {
          name: "Image, Free Drawing",
          element: o().createElement("div", null, this.getImageSelector(), this.getFreeDrawing())
        }]
      }) : o().createElement(le, {
        items: [this.getMath(), this.getText(), this.getArrowShapeSelector(!1), this.getPolygonShapeSelector(!1), this.getCompositeShapeSelector(!1), this.getArrowHeadShapeSelector(!1), this.renderPlotItem(!1), this.getImageSelector(), this.getFreeDrawing()],
        isDisabled: this.props.isDisabled,
        showSelectionOverlayFor: this.props.showSelectionOverlayFor,
        hidden: this.props.hidden,
        onDeleteEntities: this.props.onDeleteEntities,
        requestTouchSelection: this.props.requestTouchSelection,
        hotkeyItem: o().createElement(oe.d, {
          ref: this.handleDiagramHotkeyNumbering
        })
      });
    }
  }
  var ye = r(49414),
    ve = r(6779),
    be = r(26642);
  class xe extends o().Component {
    render() {
      return o().createElement("div", {
        onMouseDown: e => e.stopPropagation(),
        onClick: e => {
          e.stopPropagation(), this.props.onOpenDashDialog();
        }
      }, o().createElement("span", {
        style: {
          fontSize: 12,
          verticalAlign: "-4px"
        }
      }, "Dashed..."));
    }
  }
  var Ce = r(98930),
    Se = r(47286),
    Ae = r(58907);
  class we {
    normalizeSvgDashArr(e) {
      return this.arrToSvgDashArr(this.parsePatternToArr(e));
    }
    parsePatternToArr(e) {
      return e ? e.split(" ").filter(e => e).map(e => Number.parseInt(e)).filter(e => e).map(e => h().clamp(e, 0, 1e4)) : [];
    }
    arrToSvgDashArr(e) {
      return e.join(" ");
    }
  }
  var Ee = new we();
  function ke(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ke(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class De extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        pattern: this.props.vl ? Ee.arrToSvgDashArr(this.props.vl.pattern) : "5 4 10 2"
      }), (0, n.A)(this, "FakeModalDialog", Ae.A.getModalDialog());
    }
    renderPreview() {
      var e = Ee.normalizeSvgDashArr(this.state.pattern);
      return o().createElement("div", {
        style: {
          marginTop: 5
        }
      }, o().createElement("div", null, "Preview:"), o().createElement("svg", {
        style: {
          width: 200,
          height: 50
        }
      }, o().createElement("path", {
        d: "M5, 10 L195,10",
        stroke: "black",
        strokeWidth: "1",
        strokeDasharray: e
      }), o().createElement("path", {
        d: "M5, 30 L195,30",
        stroke: "black",
        strokeWidth: "2",
        strokeDasharray: e
      })));
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(Se.A, {
        title: "Custom dash pattern",
        size: "medium",
        scroll: "body",
        style: Oe({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, Ae.A.getCenterStyle()),
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onOk({
            type: "dash",
            pattern: Ee.parsePatternToArr(this.state.pattern)
          });
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, o().createElement("div", {
        style: {
          flex: 1,
          flexDirection: "column",
          display: "flex",
          padding: "5px 5px 15px 5px",
          fontSize: 13
        }
      }, o().createElement("div", {
        style: {
          paddingBottom: 5
        }
      }, o().createElement("span", null, "Dash Array Pattern:"), o().createElement(Ce.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        iconStyle: {},
        msg: o().createElement("span", null, "The numbers are in format: ", o().createElement("b", null, "draw gap draw gap ..."), " For example, below are valid numbers ", o().createElement("br", null), "2 3 ", o().createElement("br", null), "2 3 5 4 ", o().createElement("br", null), "2 3 5 4 9 20")
      })), o().createElement("input", {
        value: this.state.pattern,
        style: {
          fontSize: 13,
          padding: 4
        },
        onChange: e => this.setState({
          pattern: e.currentTarget.value
        })
      }), this.renderPreview())));
    }
  }
  var Pe = r(39260);
  class Me extends ve.A {
    constructor(e) {
      super(e), this.title = "Shaft Type";
    }
    renderOptions(e) {
      return o().createElement(be.i, {
        onHtmlRef: e => this.registerExpandContainer(e),
        style: e
      }, this.renderOne((0, Pe.Wo)("-")), this.renderOne((0, Pe.Wo)("2-")), this.renderOne((0, Pe.Wo)(".")), this.renderOne((0, Pe.Wo)("2.")), this.renderOne((0, Pe.Wo)("--")), this.renderOne((0, Pe.Wo)("2--")), this.renderOne((0, Pe.Wo)("~")), this.renderOne((0, Pe.Wo)("2~")), this.renderOne((0, Pe.Wo)("~.")), this.renderOne((0, Pe.Wo)("2~.")), this.renderOne((0, Pe.Wo)("|")), this.renderOne(o().createElement(xe, {
        key: "dash-custom",
        onOpenDashDialog: () => {
          this.setState({
            showShaftCustomDialog: !0
          });
        }
      }), !0));
    }
    getComponentClassName() {
      return super.getComponentClassName() + " arrow-shaft";
    }
    getItemStyle() {
      return {
        width: 40
      };
    }
    getItemOptionStyle() {
      return {
        width: 60
      };
    }
    customRenderSelected(e) {
      if ("string" != typeof e) return o().createElement("svg", {
        style: {
          width: 40,
          height: 30
        }
      }, o().createElement("path", {
        d: "M2,13 L38,13",
        stroke: "black",
        strokeWidth: "1",
        strokeDasharray: Ee.arrToSvgDashArr(e.pattern)
      }));
    }
    renderMore() {
      if (this.state.showShaftCustomDialog) return o().createElement(De, {
        vl: this.props.part && "object" == typeof this.props.part ? this.props.part : void 0,
        onClose: () => {
          this.setState({
            showShaftCustomDialog: !1
          });
        },
        onOk: e => {
          this.props.onItemSelect(e), this.setState({
            showShaftCustomDialog: !1
          });
        }
      });
    }
  }
  class Ie extends ve.A {
    constructor(e) {
      super(e), this.title = "Shaft Type";
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || t.showShaftCustomDialog != this.state.showShaftCustomDialog;
    }
    renderOptions(e) {
      return o().createElement(be.i, {
        onHtmlRef: e => this.registerExpandContainer(e),
        style: e
      }, this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "-"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "."
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "1.125 3.35"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "--"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "6 6"
      }))), this.renderOne(o().createElement(xe, {
        key: "dash-custom",
        onOpenDashDialog: () => {
          this.setState({
            showShaftCustomDialog: !0
          });
        }
      }), !0));
    }
    customRenderSelected(e) {
      if ("string" != typeof e) return o().createElement("svg", {
        style: {
          width: 40,
          height: 30
        }
      }, o().createElement("path", {
        d: "M2,13 L38,13",
        stroke: "black",
        strokeWidth: "1",
        strokeDasharray: Ee.arrToSvgDashArr(e.pattern)
      }));
    }
    getItemStyle() {
      return {
        width: 40
      };
    }
    getItemOptionStyle() {
      return {
        width: 60
      };
    }
    getComponentClassName() {
      return super.getComponentClassName() + " arrow-shaft";
    }
    renderMore() {
      if (this.state.showShaftCustomDialog) return o().createElement(De, {
        vl: this.props.part && "object" == typeof this.props.part ? this.props.part : void 0,
        onClose: () => {
          this.setState({
            showShaftCustomDialog: !1
          });
        },
        onOk: e => {
          this.props.onItemSelect(e), this.setState({
            showShaftCustomDialog: !1
          });
        }
      });
    }
  }
  class Te extends ve.A {
    renderOptions(e) {
      return o().createElement(be.i, {
        onHtmlRef: e => this.registerExpandContainer(e),
        style: e
      }, this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "-"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "."
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "1.125 3.35"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "--"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "6 6"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "2-"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10"
      }), o().createElement("line", {
        x1: "0",
        y1: "12",
        x2: "60",
        y2: "12"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "2."
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "1.125 3.35"
      }), o().createElement("line", {
        x1: "0",
        y1: "12",
        x2: "60",
        y2: "12",
        strokeDasharray: "1.125 3.35"
      }))), this.renderOne(o().createElement("svg", {
        style: Pe.sx,
        key: "2--"
      }, o().createElement("line", {
        x1: "0",
        y1: "10",
        x2: "60",
        y2: "10",
        strokeDasharray: "6 6"
      }), o().createElement("line", {
        x1: "0",
        y1: "12",
        x2: "60",
        y2: "12",
        strokeDasharray: "6 6"
      }))));
    }
    getComponentClassName() {
      return super.getComponentClassName() + " arrow-shaft";
    }
    getItemOptionStyle() {
      return {
        width: 60
      };
    }
    getItemStyle() {
      return null;
    }
  }
  var Le = r(180),
    Re = r(98231),
    Be = r(46774),
    Fe = r(24373);
  const je = e => {
    var t = e.stops,
      r = e.width,
      n = e.height,
      i,
      s = [...t].sort((e, t) => {
        var r, n;
        return e.pos - t.pos;
      }),
      a = "_" + Math.random().toString(36).substr(2, 9),
      l = "url(#".concat(a, ")");
    return o().createElement("div", {
      className: "palette",
      style: {
        width: r,
        height: n,
        border: "1px solid var(--ui-border, lightgray)",
        position: "relative"
      }
    }, o().createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center'
      }
    }), o().createElement("svg", {
      width: "100%",
      height: "100%",
      style: {
        position: "relative"
      }
    }, o().createElement("defs", null, o().createElement("linearGradient", {
      id: a,
      x1: "0",
      y1: "0.5",
      x2: "1",
      y2: "0.5"
    }, " ", s.map((e, t) => o().createElement("stop", {
      key: t,
      offset: e.pos,
      style: {
        stopColor: k.A.getHtmlColor(e.color)
      }
    })))), o().createElement("rect", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      fill: l
    })));
  };
  r.dn(je);
  class _e extends o().PureComponent {
    render() {
      var e = this.props,
        t = e.palette,
        r = e.width,
        n = e.height;
      if (!t) return o().createElement("div", {
        className: "palette",
        style: {
          width: r,
          height: n,
          border: "1px solid var(--ui-border, lightgray)",
          position: "relative"
        }
      });
      var i = (e, t) => {
          var r, n;
          return e.pos - t.pos;
        },
        s = [...t.stops].sort(i),
        a = "_" + Math.random().toString(36).substr(2, 9),
        l = "url(#".concat(a, ")"),
        c = t.center || {
          x: 50,
          y: 50
        },
        d = {
          x: c.x / 100,
          y: c.y / 100
        },
        h = t.scale || 1;
      if ("radial" == t.type) {
        var p = t.focal || {
            x: 0,
            y: 0
          },
          u = {
            x: c.x + p.x,
            y: c.y + p.y
          },
          g = "matrix(".concat(y.A.round2(h), ", 0, 0, ").concat(y.A.round2(h), ", ").concat(y.A.round2(.5 - .5 * h), ", ").concat(y.A.round2(.5 - .5 * h), ")");
        return o().createElement("div", {
          className: "palette",
          style: {
            width: r,
            height: n,
            border: "1px solid var(--ui-border, lightgray)",
            borderRadius: "50%",
            position: "relative"
          }
        }, o().createElement("div", {
          style: {
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: "50%",
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center'
          }
        }), o().createElement("svg", {
          width: "100%",
          height: "100%",
          style: {
            position: "relative"
          }
        }, o().createElement("defs", null, o().createElement("radialGradient", {
          id: a,
          cx: "".concat(d.x),
          gradientTransform: g,
          cy: "".concat(d.y),
          fx: "".concat(u.x / 100),
          fy: "".concat(u.y / 100)
        }, " ", s.map((e, t) => o().createElement("stop", {
          key: t,
          offset: e.pos,
          style: {
            stopColor: k.A.getHtmlColor(e.color)
          }
        })))), o().createElement("circle", {
          cx: "50%",
          cy: "50%",
          r: "50%",
          fill: l
        })));
      }
      var m = "translate(".concat(d.x - .5, ",").concat(d.y - .5, ")"),
        f = t.scale ? "matrix(".concat(h, ", 0, 0, ").concat(h, ", ").concat(.5 - .5 * h, ", ").concat(.5 - .5 * h, ")") : "";
      return o().createElement("div", {
        className: "palette",
        style: {
          width: r,
          height: n,
          border: "1px solid var(--ui-border, lightgray)",
          position: "relative"
        }
      }, o().createElement("div", {
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center'
        }
      }), o().createElement("svg", {
        width: "100%",
        height: "100%",
        style: {
          position: "relative"
        }
      }, o().createElement("defs", null, o().createElement("linearGradient", {
        id: a,
        gradientTransform: "".concat(f, " ").concat(m, " rotate(").concat(t.rotation || 0, " ", .5, " ", .5, ")"),
        x1: "0",
        y1: "0.5",
        x2: 1,
        y2: .5
      }, " ", s.map((e, t) => o().createElement("stop", {
        key: t,
        offset: e.pos,
        style: {
          stopColor: k.A.getHtmlColor(e.color)
        }
      })))), o().createElement("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: l
      })));
    }
  }
  var Ne = r(80045);
  function ze(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function He(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ze(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class We extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "dragging", !1), (0, n.A)(this, "deltaX", 0), (0, n.A)(this, "isDragRaise", !1), (0, n.A)(this, "handleMouseDown", e => {
        e.stopPropagation(), e.button || this.activate(e.clientX);
      }), (0, n.A)(this, "handleMouseMove", e => {
        var t = e.clientX,
          r = e.clientY;
        if (this.dragging) {
          this.isDragRaise || (console.log("raise dragigng"), this.isDragRaise = !0, this.props.onDragging(!0));
          var n = this.props,
            i = n.drop,
            o = n.onPosChange,
            s = u().findDOMNode(this).parentElement.getBoundingClientRect();
          if (Math.abs(r - s.top) > i) this.setState({
            isInRemoveMode: !0
          });else {
            this.state.isInRemoveMode && this.setState({
              isInRemoveMode: !1
            });
            var a = h().clamp((t - s.left - this.deltaX) / this.props.width, 0, 1);
            o(He(He({}, this.props.stop), {}, {
              pos: a
            }));
          }
        }
      }), (0, n.A)(this, "handleMouseUp", () => {
        this.deactivate();
      }), this.state = {
        isInRemoveMode: !1
      };
    }
    activate(e) {
      var t = u().findDOMNode(this).getBoundingClientRect();
      this.deltaX = e - t.left - t.width / 2, this.dragging = !0, this.isDragRaise = !1, this.props.onActivate(this.props.stop), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
    }
    deactivate() {
      this.dragging = !1, this.props.onDragging(!1), this.state.isInRemoveMode && (this.setState({
        isInRemoveMode: !1
      }), this.props.onDeleteColor(this.props.stop)), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp);
    }
    componentWillUnmount() {
      document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp);
    }
    render() {
      var e = this.props.stop,
        t = e.pos,
        r = e.color,
        n = t * this.props.width,
        i = this.props.isActive,
        s = i ? "#4CAF50" : "white",
        a = this.state.isInRemoveMode ? 15 : 0;
      return o().createElement("div", {
        style: f.A.update(qe, {
          left: n,
          top: a
        }),
        className: i ? "cs active" : "cs",
        onMouseDown: this.handleMouseDown
      }, o().createElement("svg", {
        style: Ue
      }, o().createElement("path", {
        d: "M 0,15 L 6,0 L 12,15 Q 6,6 0,15 Z",
        stroke: "gray",
        strokeWidth: "1",
        fill: s
      })), o().createElement("div", {
        style: f.A.update(Ge, {
          backgroundColor: k.A.getHtmlColor(r)
        })
      }), this.state.isInRemoveMode ? o().createElement("i", {
        style: Ve,
        className: "fa fa-times"
      }) : void 0);
    }
  }
  var Ve = {
      display: "block",
      position: "absolute",
      right: -11,
      top: -3,
      color: "#d00505"
    },
    Ue = {
      width: 20,
      height: 20
    },
    qe = {
      backgroundPosition: "right center",
      height: 17,
      position: "absolute",
      width: 12,
      cursor: "pointer",
      transform: "translateX(-50%)"
    },
    Ge = {
      height: 8,
      left: 1,
      width: 8,
      position: "absolute",
      top: 12,
      borderRadius: 10,
      border: "1px solid var(--ui-border, lightgray)"
    },
    Ke = ["width", "stops", "onAddColor", "activeStop"];
  function Ze(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ye(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ze(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ze(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Qe extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleMouseDown", e => {
        if (e.preventDefault(), !e.button) {
          var t,
            r = {
              pos: (e.clientX - e.target.getBoundingClientRect().left) / this.props.width,
              color: this.props.activeStop.color
            };
          this.props.onAddColor(r);
        }
      }), (0, n.A)(this, "handleStopDragging", e => {
        console.log("rendering"), e != this.state.isDragging && (this.setState({
          isDragging: e
        }), this.props.onDragging(e));
      }), this.state = {
        isDragging: !1
      };
    }
    render() {
      var e = this.props,
        t = e.width,
        r = e.stops,
        n = e.onAddColor,
        i = e.activeStop,
        s = (0, Ne.A)(e, Ke),
        a = {
          width: t,
          height: 17,
          position: "relative",
          cursor: this.state.isDragging ? "default" : "copy",
          marginTop: 1,
          border: "1px solid transparent"
        };
      return o().createElement("div", {
        className: "csh",
        style: a,
        onMouseDown: this.handleMouseDown
      }, r.map((e, r) => o().createElement(We, Ye(Ye({
        key: r,
        stop: e,
        drop: 30,
        width: t,
        isActive: i == e
      }, s), {}, {
        onDragging: this.handleStopDragging
      }))));
    }
  }
  var Je = r(72459),
    Xe = r(56540),
    $e = r(91414);
  const et = [{
    backgroundCss: "linear-gradient(45deg, rgba(0,128,0,1) 0%, rgba(0,128,0,1) 1%, rgba(255,255,0,1) 50%, rgba(0,128,0,1) 100%)",
    palette: {
      stops: [{
        pos: 0,
        color: [0, 128, 0, 1]
      }, {
        pos: .01,
        color: [0, 128, 0, 1]
      }, {
        pos: .5,
        color: [255, 255, 0, 1]
      }, {
        pos: 1,
        color: [0, 128, 0, 1]
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 25%, rgba(5,193,255,1) 50%, rgba(255,255,0,1) 75%, rgba(255,0,0,1) 100%)",
    palette: {
      stops: [{
        color: [255, 0, 0, 1],
        pos: 0
      }, {
        color: [255, 255, 0, 1],
        pos: .25
      }, {
        color: [5, 193, 255, 1],
        pos: .5
      }, {
        color: [255, 255, 0, 1],
        pos: .75
      }, {
        color: [255, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(53deg, rgba(153,218,255,1) 0%, rgba(0,128,128,1) 100%)",
    palette: {
      stops: [{
        color: [153, 218, 255, 1],
        pos: 0
      }, {
        color: [0, 128, 128, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(255,255,0,1) 0%, rgba(0,128,128,1) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 0, 1],
        pos: 0
      }, {
        color: [0, 128, 128, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(0,51,51,1) 0%, rgba(5,193,255,1) 50%, rgba(0,51,51,1) 100%)",
    palette: {
      stops: [{
        color: [0, 51, 51, 1],
        pos: 0
      }, {
        color: [5, 193, 255, 1],
        pos: .5
      }, {
        color: [0, 51, 51, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(5,193,255,1) 50%, rgba(5,193,255,0.9) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [255, 255, 255, 1],
        pos: .49
      }, {
        color: [5, 193, 255, 1],
        pos: .5
      }, {
        color: [5, 193, 255, .9],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.9) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [0, 0, 0, .9],
        pos: 1
      }]
    }
  }, {
    palette: {
      type: "radial",
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [0, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    palette: {
      type: "radial",
      focal: {
        x: -9,
        y: -13
      },
      scale: 1.32,
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [122, 38, 38, 1],
        pos: 1
      }]
    }
  }, {
    palette: {
      type: "radial",
      focal: {
        x: -9,
        y: -11
      },
      scale: 1.32,
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [0, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    palette: {
      type: "radial",
      focal: {
        x: 20,
        y: 16
      },
      scale: 1.32,
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [0, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(0,255,0,1) 0%, rgba(255,0,0,1) 50%, rgba(255,255,0,1) 100%)",
    palette: {
      stops: [{
        color: [0, 255, 0, 1],
        pos: 0
      }, {
        color: [255, 0, 0, 1],
        pos: .5
      }, {
        color: [255, 255, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(255,0,0,1) 100%)",
    palette: {
      stops: [{
        color: [255, 0, 0, 1],
        pos: 0
      }, {
        color: [255, 255, 0, 1],
        pos: .5
      }, {
        color: [255, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(241, 241, 241) 50%, rgb(225, 225, 225) 51%, rgb(246, 246, 246) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [241, 241, 241, 1],
        pos: .5
      }, {
        color: [225, 225, 225, 1],
        pos: .51
      }, {
        color: [246, 246, 246, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(149, 149, 149) 0%, rgb(13, 13, 13) 46%, rgb(1, 1, 1) 50%, rgb(10, 10, 10) 53%, rgb(78, 78, 78) 76%, rgb(56, 56, 56) 87%, rgb(27, 27, 27) 100%)",
    palette: {
      stops: [{
        color: [149, 149, 149, 1],
        pos: 0
      }, {
        color: [13, 13, 13, 1],
        pos: .46
      }, {
        color: [1, 1, 1, 1],
        pos: .5
      }, {
        color: [10, 10, 10, 1],
        pos: .53
      }, {
        color: [78, 78, 78, 1],
        pos: .76
      }, {
        color: [56, 56, 56, 1],
        pos: .87
      }, {
        color: [27, 27, 27, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(167, 207, 223) 0%, rgb(35, 83, 138) 100%)",
    palette: {
      stops: [{
        color: [167, 207, 223, 1],
        pos: 0
      }, {
        color: [35, 83, 138, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(229, 229, 229) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [229, 229, 229, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(174, 188, 191) 0%, rgb(110, 119, 116) 50%, rgb(10, 14, 10) 51%, rgb(10, 8, 9) 100%)",
    palette: {
      stops: [{
        color: [174, 188, 191, 1],
        pos: 0
      }, {
        color: [110, 119, 116, 1],
        pos: .5
      }, {
        color: [10, 14, 10, 1],
        pos: .51
      }, {
        color: [10, 8, 9, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(183, 222, 237) 0%, rgb(113, 206, 239) 50%, rgb(33, 180, 226) 51%, rgb(183, 222, 237) 100%)",
    palette: {
      stops: [{
        color: [183, 222, 237, 1],
        pos: 0
      }, {
        color: [113, 206, 239, 1],
        pos: .5
      }, {
        color: [33, 180, 226, 1],
        pos: .51
      }, {
        color: [183, 222, 237, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(203, 96, 179) 0%, rgb(173, 18, 131) 50%, rgb(222, 71, 172) 100%)",
    palette: {
      stops: [{
        color: [203, 96, 179, 1],
        pos: 0
      }, {
        color: [173, 18, 131, 1],
        pos: .5
      }, {
        color: [222, 71, 172, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(245, 246, 246) 0%, rgb(219, 220, 226) 21%, rgb(184, 186, 198) 49%, rgb(221, 223, 227) 80%, rgb(245, 246, 246) 100%)",
    palette: {
      stops: [{
        color: [245, 246, 246, 1],
        pos: 0
      }, {
        color: [219, 220, 226, 1],
        pos: .21
      }, {
        color: [184, 186, 198, 1],
        pos: .49
      }, {
        color: [221, 223, 227, 1],
        pos: .8
      }, {
        color: [245, 246, 246, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(210, 223, 237) 0%, rgb(200, 215, 235) 26%, rgb(166, 192, 227) 51%, rgb(175, 199, 232) 62%, rgb(186, 208, 239) 75%, rgb(153, 181, 219) 88%, rgb(121, 155, 200) 100%)",
    palette: {
      stops: [{
        color: [210, 223, 237, 1],
        pos: 0
      }, {
        color: [200, 215, 235, 1],
        pos: .26
      }, {
        color: [166, 192, 227, 1],
        pos: .51
      }, {
        color: [175, 199, 232, 1],
        pos: .62
      }, {
        color: [186, 208, 239, 1],
        pos: .75
      }, {
        color: [153, 181, 219, 1],
        pos: .88
      }, {
        color: [121, 155, 200, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(181, 189, 200) 0%, rgb(130, 140, 149) 36%, rgb(40, 52, 59) 100%)",
    palette: {
      stops: [{
        color: [181, 189, 200, 1],
        pos: 0
      }, {
        color: [130, 140, 149, 1],
        pos: .36
      }, {
        color: [40, 52, 59, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(254, 252, 234) 0%, rgb(241, 218, 54) 100%)",
    palette: {
      stops: [{
        color: [254, 252, 234, 1],
        pos: 0
      }, {
        color: [241, 218, 54, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(206, 219, 233) 0%, rgb(170, 197, 222) 17%, rgb(97, 153, 199) 50%, rgb(58, 132, 195) 51%, rgb(65, 154, 214) 59%, rgb(75, 184, 240) 71%, rgb(58, 139, 194) 84%, rgb(38, 85, 139) 100%)",
    palette: {
      stops: [{
        color: [206, 219, 233, 1],
        pos: 0
      }, {
        color: [170, 197, 222, 1],
        pos: .17
      }, {
        color: [97, 153, 199, 1],
        pos: .5
      }, {
        color: [58, 132, 195, 1],
        pos: .51
      }, {
        color: [65, 154, 214, 1],
        pos: .59
      }, {
        color: [75, 184, 240, 1],
        pos: .71
      }, {
        color: [58, 139, 194, 1],
        pos: .84
      }, {
        color: [38, 85, 139, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(30, 87, 153) 0%, rgb(41, 137, 216) 50%, rgb(32, 124, 202) 51%, rgb(125, 185, 232) 100%)",
    palette: {
      stops: [{
        color: [30, 87, 153, 1],
        pos: 0
      }, {
        color: [41, 137, 216, 1],
        pos: .5
      }, {
        color: [32, 124, 202, 1],
        pos: .51
      }, {
        color: [125, 185, 232, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(240, 249, 255) 0%, rgb(203, 235, 255) 47%, rgb(161, 219, 255) 100%)",
    palette: {
      stops: [{
        color: [240, 249, 255, 1],
        pos: 0
      }, {
        color: [203, 235, 255, 1],
        pos: .47
      }, {
        color: [161, 219, 255, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(254, 255, 255) 0%, rgb(221, 241, 249) 35%, rgb(160, 216, 239) 100%)",
    palette: {
      stops: [{
        color: [254, 255, 255, 1],
        pos: 0
      }, {
        color: [221, 241, 249, 1],
        pos: .35
      }, {
        color: [160, 216, 239, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(184, 225, 252) 0%, rgb(169, 210, 243) 10%, rgb(144, 186, 228) 25%, rgb(144, 188, 234) 37%, rgb(144, 191, 240) 50%, rgb(107, 168, 229) 51%, rgb(162, 218, 245) 83%, rgb(189, 243, 253) 100%)",
    palette: {
      stops: [{
        color: [184, 225, 252, 1],
        pos: 0
      }, {
        color: [169, 210, 243, 1],
        pos: .1
      }, {
        color: [144, 186, 228, 1],
        pos: .25
      }, {
        color: [144, 188, 234, 1],
        pos: .37
      }, {
        color: [144, 191, 240, 1],
        pos: .5
      }, {
        color: [107, 168, 229, 1],
        pos: .51
      }, {
        color: [162, 218, 245, 1],
        pos: .83
      }, {
        color: [189, 243, 253, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(59, 103, 158) 0%, rgb(43, 136, 217) 50%, rgb(32, 124, 202) 51%, rgb(125, 185, 232) 100%)",
    palette: {
      stops: [{
        color: [59, 103, 158, 1],
        pos: 0
      }, {
        color: [43, 136, 217, 1],
        pos: .5
      }, {
        color: [32, 124, 202, 1],
        pos: .51
      }, {
        color: [125, 185, 232, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(109, 179, 242) 0%, rgb(84, 163, 238) 50%, rgb(54, 144, 240) 51%, rgb(30, 105, 222) 100%)",
    palette: {
      stops: [{
        color: [109, 179, 242, 1],
        pos: 0
      }, {
        color: [84, 163, 238, 1],
        pos: .5
      }, {
        color: [54, 144, 240, 1],
        pos: .51
      }, {
        color: [30, 105, 222, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(228, 245, 252) 0%, rgb(191, 232, 249) 50%, rgb(159, 216, 239) 51%, rgb(42, 176, 237) 100%)",
    palette: {
      stops: [{
        color: [228, 245, 252, 1],
        pos: 0
      }, {
        color: [191, 232, 249, 1],
        pos: .5
      }, {
        color: [159, 216, 239, 1],
        pos: .51
      }, {
        color: [42, 176, 237, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(167, 199, 220) 0%, rgb(133, 178, 211) 100%)",
    palette: {
      stops: [{
        color: [167, 199, 220, 1],
        pos: 0
      }, {
        color: [133, 178, 211, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(208, 228, 247) 0%, rgb(115, 177, 231) 24%, rgb(10, 119, 213) 50%, rgb(83, 159, 225) 79%, rgb(135, 188, 234) 100%)",
    palette: {
      stops: [{
        color: [208, 228, 247, 1],
        pos: 0
      }, {
        color: [115, 177, 231, 1],
        pos: .24
      }, {
        color: [10, 119, 213, 1],
        pos: .5
      }, {
        color: [83, 159, 225, 1],
        pos: .79
      }, {
        color: [135, 188, 234, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(225, 255, 255) 0%, rgb(225, 255, 255) 7%, rgb(253, 255, 255) 12%, rgb(230, 248, 253) 30%, rgb(200, 238, 251) 54%, rgb(190, 228, 248) 75%, rgb(177, 216, 245) 100%)",
    palette: {
      stops: [{
        color: [225, 255, 255, 1],
        pos: 0
      }, {
        color: [225, 255, 255, 1],
        pos: .07
      }, {
        color: [253, 255, 255, 1],
        pos: .12
      }, {
        color: [230, 248, 253, 1],
        pos: .3
      }, {
        color: [200, 238, 251, 1],
        pos: .54
      }, {
        color: [190, 228, 248, 1],
        pos: .75
      }, {
        color: [177, 216, 245, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(213, 206, 166) 0%, rgb(201, 193, 144) 40%, rgb(183, 173, 112) 100%)",
    palette: {
      stops: [{
        color: [213, 206, 166, 1],
        pos: 0
      }, {
        color: [201, 193, 144, 1],
        pos: .4
      }, {
        color: [183, 173, 112, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(180, 221, 180) 0%, rgb(131, 199, 131) 17%, rgb(82, 177, 82) 33%, rgb(0, 138, 0) 67%, rgb(0, 87, 0) 83%, rgb(0, 36, 0) 100%)",
    palette: {
      stops: [{
        color: [180, 221, 180, 1],
        pos: 0
      }, {
        color: [131, 199, 131, 1],
        pos: .17
      }, {
        color: [82, 177, 82, 1],
        pos: .33
      }, {
        color: [0, 138, 0, 1],
        pos: .67
      }, {
        color: [0, 87, 0, 1],
        pos: .83
      }, {
        color: [0, 36, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(205, 235, 142) 0%, rgb(165, 201, 86) 100%)",
    palette: {
      stops: [{
        color: [205, 235, 142, 1],
        pos: 0
      }, {
        color: [165, 201, 86, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(201, 222, 150) 0%, rgb(138, 182, 107) 44%, rgb(57, 130, 53) 100%)",
    palette: {
      stops: [{
        color: [201, 222, 150, 1],
        pos: 0
      }, {
        color: [138, 182, 107, 1],
        pos: .44
      }, {
        color: [57, 130, 53, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(169, 219, 128) 0%, rgb(150, 197, 111) 100%)",
    palette: {
      stops: [{
        color: [169, 219, 128, 1],
        pos: 0
      }, {
        color: [150, 197, 111, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(180, 227, 145) 0%, rgb(97, 196, 25) 50%, rgb(180, 227, 145) 100%)",
    palette: {
      stops: [{
        color: [180, 227, 145, 1],
        pos: 0
      }, {
        color: [97, 196, 25, 1],
        pos: .5
      }, {
        color: [180, 227, 145, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(216, 224, 222) 0%, rgb(174, 191, 188) 22%, rgb(153, 175, 171) 33%, rgb(142, 166, 162) 50%, rgb(130, 157, 152) 67%, rgb(78, 92, 90) 82%, rgb(14, 14, 14) 100%)",
    palette: {
      stops: [{
        color: [216, 224, 222, 1],
        pos: 0
      }, {
        color: [174, 191, 188, 1],
        pos: .22
      }, {
        color: [153, 175, 171, 1],
        pos: .33
      }, {
        color: [142, 166, 162, 1],
        pos: .5
      }, {
        color: [130, 157, 152, 1],
        pos: .67
      }, {
        color: [78, 92, 90, 1],
        pos: .82
      }, {
        color: [14, 14, 14, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(207, 231, 250) 0%, rgb(99, 147, 193) 100%)",
    palette: {
      stops: [{
        color: [207, 231, 250, 1],
        pos: 0
      }, {
        color: [99, 147, 193, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(226, 226, 226) 0%, rgb(219, 219, 219) 50%, rgb(209, 209, 209) 51%, rgb(254, 254, 254) 100%)",
    palette: {
      stops: [{
        color: [226, 226, 226, 1],
        pos: 0
      }, {
        color: [219, 219, 219, 1],
        pos: .5
      }, {
        color: [209, 209, 209, 1],
        pos: .51
      }, {
        color: [254, 254, 254, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(242, 246, 248) 0%, rgb(216, 225, 231) 50%, rgb(181, 198, 208) 51%, rgb(224, 239, 249) 100%)",
    palette: {
      stops: [{
        color: [242, 246, 248, 1],
        pos: 0
      }, {
        color: [216, 225, 231, 1],
        pos: .5
      }, {
        color: [181, 198, 208, 1],
        pos: .51
      }, {
        color: [224, 239, 249, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(254, 254, 253) 0%, rgb(220, 227, 196) 42%, rgb(174, 191, 118) 100%)",
    palette: {
      stops: [{
        color: [254, 254, 253, 1],
        pos: 0
      }, {
        color: [220, 227, 196, 1],
        pos: .42
      }, {
        color: [174, 191, 118, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(241, 231, 103) 0%, rgb(254, 182, 69) 100%)",
    palette: {
      stops: [{
        color: [241, 231, 103, 1],
        pos: 0
      }, {
        color: [254, 182, 69, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(255, 214, 94) 0%, rgb(254, 191, 4) 100%)",
    palette: {
      stops: [{
        color: [255, 214, 94, 1],
        pos: 0
      }, {
        color: [254, 191, 4, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(234, 185, 45) 0%, rgb(199, 152, 16) 100%)",
    palette: {
      stops: [{
        color: [234, 185, 45, 1],
        pos: 0
      }, {
        color: [199, 152, 16, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(246, 248, 249) 0%, rgb(229, 235, 238) 50%, rgb(215, 222, 227) 51%, rgb(245, 247, 249) 100%)",
    palette: {
      stops: [{
        color: [246, 248, 249, 1],
        pos: 0
      }, {
        color: [229, 235, 238, 1],
        pos: .5
      }, {
        color: [215, 222, 227, 1],
        pos: .51
      }, {
        color: [245, 247, 249, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(243, 243, 243) 50%, rgb(237, 237, 237) 51%, rgb(255, 255, 255) 100%)",
    palette: {
      stops: [{
        color: [255, 255, 255, 1],
        pos: 0
      }, {
        color: [243, 243, 243, 1],
        pos: .5
      }, {
        color: [237, 237, 237, 1],
        pos: .51
      }, {
        color: [255, 255, 255, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(242, 249, 254) 0%, rgb(214, 240, 253) 100%)",
    palette: {
      stops: [{
        color: [242, 249, 254, 1],
        pos: 0
      }, {
        color: [214, 240, 253, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(254, 255, 255) 0%, rgb(210, 235, 249) 100%)",
    palette: {
      stops: [{
        color: [254, 255, 255, 1],
        pos: 0
      }, {
        color: [210, 235, 249, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(125, 126, 125) 0%, rgb(14, 14, 14) 100%)",
    palette: {
      stops: [{
        color: [125, 126, 125, 1],
        pos: 0
      }, {
        color: [14, 14, 14, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(69, 72, 77) 0%, rgb(0, 0, 0) 100%)",
    palette: {
      stops: [{
        color: [69, 72, 77, 1],
        pos: 0
      }, {
        color: [0, 0, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(243, 197, 189) 0%, rgb(232, 108, 87) 50%, rgb(234, 40, 3) 51%, rgb(255, 102, 0) 75%, rgb(199, 34, 0) 100%)",
    palette: {
      stops: [{
        color: [243, 197, 189, 1],
        pos: 0
      }, {
        color: [232, 108, 87, 1],
        pos: .5
      }, {
        color: [234, 40, 3, 1],
        pos: .51
      }, {
        color: [255, 102, 0, 1],
        pos: .75
      }, {
        color: [199, 34, 0, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(239, 197, 202) 0%, rgb(210, 75, 90) 50%, rgb(186, 39, 55) 51%, rgb(241, 142, 153) 100%)",
    palette: {
      stops: [{
        color: [239, 197, 202, 1],
        pos: 0
      }, {
        color: [210, 75, 90, 1],
        pos: .5
      }, {
        color: [186, 39, 55, 1],
        pos: .51
      }, {
        color: [241, 142, 153, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(254, 204, 177) 0%, rgb(241, 116, 50) 50%, rgb(234, 85, 7) 51%, rgb(251, 149, 94) 100%)",
    palette: {
      stops: [{
        color: [254, 204, 177, 1],
        pos: 0
      }, {
        color: [241, 116, 50, 1],
        pos: .5
      }, {
        color: [234, 85, 7, 1],
        pos: .51
      }, {
        color: [251, 149, 94, 1],
        pos: 1
      }]
    }
  }, {
    backgroundCss: "linear-gradient(135deg, rgb(248, 80, 50) 0%, rgb(241, 111, 92) 50%, rgb(246, 41, 12) 51%, rgb(240, 47, 23) 71%, rgb(231, 56, 39) 100%)",
    palette: {
      stops: [{
        color: [248, 80, 50, 1],
        pos: 0
      }, {
        color: [241, 111, 92, 1],
        pos: .5
      }, {
        color: [246, 41, 12, 1],
        pos: .51
      }, {
        color: [240, 47, 23, 1],
        pos: .71
      }, {
        color: [231, 56, 39, 1],
        pos: 1
      }]
    }
  }];
  class tt extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "presetDiv", void 0), (0, n.A)(this, "handleActivate", e => {
        this.setState({
          activeIndex: this.props.gradient.stops.findIndex(t => t == e)
        });
      }), (0, n.A)(this, "handleDeleteColor", e => {
        if (!(this.props.gradient.stops.length < 3)) {
          var t = f.A.remove(this.props.gradient.stops, this.props.gradient.stops.indexOf(e)),
            r = f.A.setProp(this.props.gradient, "stops", t);
          this.setState({
            activeIndex: h().clamp(this.state.activeIndex, 0, r.stops.length - 1)
          }), this.raiseGradientChanged(r, !1);
        }
      }), (0, n.A)(this, "handlePosChange", e => {
        var t = f.A.setIndex(this.props.gradient.stops, this.state.activeIndex, e),
          r = f.A.setProp(this.props.gradient, "stops", t);
        this.raiseGradientChanged(r, !1);
      }), (0, n.A)(this, "handleAddColor", e => {
        var t = this.props.gradient.stops.concat([e]),
          r = f.A.setProp(this.props.gradient, "stops", t);
        this.setState({
          activeIndex: this.props.gradient.stops.length
        }), this.raiseGradientChanged(r, !1);
      }), (0, n.A)(this, "handleSelectColor", e => {
        this.setState({
          activeIndex: this.props.gradient.stops.findIndex(t => t == e)
        });
      }), (0, n.A)(this, "handleStepColorChanged", e => {
        var t = k.A.getHtmlColor(e),
          r = f.A.setProp(this.selectedStop(), "color", t),
          n = f.A.setIndex(this.props.gradient.stops, this.state.activeIndex, r),
          i = f.A.setProp(this.props.gradient, "stops", n);
        this.raiseGradientChanged(i, !1);
      }), (0, n.A)(this, "handleStopDragging", e => {
        e != this.state.isDragging && this.setState({
          isDragging: e
        });
      }), (0, n.A)(this, "handleGradientTypeChanged", e => {
        var t = "linear" == e.key ? void 0 : e.key;
        this.raiseGradientChanged(f.A.setProp(this.props.gradient, "type", t), !1);
      }), (0, n.A)(this, "handlePropertyChanged", (e, t, r) => {
        if ("rotation" != e) {
          var n = this.props.gradient.center || {
              x: 50,
              y: 50
            },
            i = this.props.gradient.focal || {
              x: 0,
              y: 0
            };
          "centerX" == e && this.raiseGradientChanged(f.A.setProp(this.props.gradient, "center", {
            x: t,
            y: n.y
          }), r), "centerY" == e && this.raiseGradientChanged(f.A.setProp(this.props.gradient, "center", {
            x: n.x,
            y: t
          }), r), "focalX" == e && this.raiseGradientChanged(f.A.setProp(this.props.gradient, "focal", {
            x: t,
            y: i.y
          }), r), "focalY" == e && this.raiseGradientChanged(f.A.setProp(this.props.gradient, "focal", {
            x: i.x,
            y: t
          }), r), "scale" == e && this.raiseGradientChanged(f.A.setProp(this.props.gradient, "scale", t), r);
        } else this.raiseGradientChanged(f.A.setProp(this.props.gradient, "rotation", t), r);
      }), this.state = {
        isDragging: !1,
        activeIndex: 0
      };
    }
    shouldComponentUpdate(e, t) {
      return e.gradient != this.props.gradient || t != this.state;
    }
    selectedStop() {
      return this.props.gradient.stops[this.state.activeIndex];
    }
    componentDidMount() {
      Fe.A.registerEventToFixScroll(this.presetDiv);
    }
    componentWillUnmount() {
      Fe.A.unregisterEventToFixScroll(this.presetDiv);
    }
    renderPresets() {
      return o().createElement("preset-container", {
        style: {
          display: "flex"
        }
      }, o().createElement("presets", {
        style: {
          flexGrow: 1,
          border: "1px solid var(--ui-border, lightgray)",
          position: "relative",
          padding: 2,
          paddingBottom: 12
        }
      }, o().createElement("div", {
        ref: e => this.presetDiv = e,
        style: {
          overflowY: "auto",
          maxHeight: 85
        }
      }, h().chunk(et, 6).map((e, t) => o().createElement("ps-row", {
        key: t,
        style: st
      }, e.map((e, t) => o().createElement("ps-box-container", {
        key: t,
        onMouseDown: () => this.setFromPreset(e.palette),
        style: at
      }, e.palette.type ? o().createElement(_e, {
        key: t,
        width: 25,
        height: 25,
        palette: e.palette
      }) : o().createElement("ps-box", {
        style: f.A.update(lt, {
          background: e.backgroundCss
        })
      })))))), o().createElement("div", {
        style: nt
      }, "Presets")), o().createElement("preview-container", {
        style: {
          display: "flex",
          border: "1px solid var(--ui-border, lightgray)",
          position: "relative",
          padding: "4px 9px",
          paddingBottom: 12,
          borderLeft: "none"
        }
      }, o().createElement(_e, {
        width: 65,
        height: 65,
        palette: this.props.gradient
      }), o().createElement("div", {
        style: nt
      }, "Preview")));
    }
    calculateColorPickerLeft() {
      var e = this.selectedStop();
      return h().clamp(280 * e.pos - 5, 0, 270);
    }
    renderColorStops() {
      return this.props.gradient ? o().createElement("gradient-color-range", {
        style: it
      }, o().createElement(je, {
        width: 280,
        height: 25,
        stops: this.props.gradient.stops
      }), o().createElement("div", {
        style: f.A.update(nt, {
          transform: "translateX(-50%)",
          left: "50%",
          color: this.state.isDragging ? "orange" : "var(--ui-text-muted, gray)"
        })
      }, this.state.isDragging ? "Drag down to remove" : ""), o().createElement(Qe, {
        width: 280,
        activeStop: this.selectedStop(),
        stops: this.props.gradient.stops,
        onDragging: this.handleStopDragging,
        onPosChange: this.handlePosChange,
        onAddColor: this.handleAddColor,
        onActivate: this.handleActivate,
        onDeleteColor: this.handleDeleteColor
      }), o().createElement("div", {
        style: {
          display: this.state.isDragging ? "none" : "",
          position: "absolute",
          bottom: -10,
          left: this.calculateColorPickerLeft()
        }
      }, o().createElement(Xe.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        disableNoColor: !0,
        value: k.A.getHtmlColor(this.selectedStop().color),
        onItemSelect: this.handleStepColorChanged
      }))) : o().createElement("gradient-color-range", {
        style: f.A.update(it, {
          height: 47
        })
      });
    }
    raiseGradientChanged(e, t) {
      this.props.onGradientChanged(e, t);
    }
    setFromPreset(e) {
      var t = f.A.update(e, this.props.gradient ? {
        rotation: this.props.gradient.rotation
      } : {});
      this.raiseGradientChanged(t, !1);
    }
    renderRadialGradientSettings() {
      var e = this.props.gradient.center || {
          x: 50,
          y: 50
        },
        t = this.props.gradient.focal || {
          x: 0,
          y: 0
        },
        r = this.props.gradient.scale || 1;
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 4,
          paddingLeft: 10,
          width: 45
        }
      }, "Center:"), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 4,
          fontSize: 14
        }
      }, "("), o().createElement($e.A, {
        title: "Center x",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -25,
        max: 125,
        step: 1,
        value: e.x,
        onValueChanging: e => this.handlePropertyChanged("centerX", e, !0),
        onValueChanged: e => this.handlePropertyChanged("centerX", e, !1)
      }), o().createElement($e.A, {
        title: "Center y",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0,
          marginRight: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -25,
        max: 125,
        step: 1,
        value: e.y,
        onValueChanging: e => this.handlePropertyChanged("centerY", e, !0),
        onValueChanged: e => this.handlePropertyChanged("centerY", e, !1)
      }), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 0,
          fontSize: 14
        }
      }, ")")), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 4,
          paddingLeft: 10,
          width: 45
        }
      }, "Focal:"), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 4,
          fontSize: 14
        }
      }, "("), o().createElement($e.A, {
        title: "Focal x",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -45,
        max: 45,
        step: 1,
        value: t.x,
        onValueChanging: e => this.handlePropertyChanged("focalX", e, !0),
        onValueChanged: e => this.handlePropertyChanged("focalX", e, !1)
      }), o().createElement($e.A, {
        title: "Focal y",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0,
          marginRight: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -45,
        max: 45,
        step: 1,
        value: t.y,
        onValueChanging: e => this.handlePropertyChanged("focalY", e, !0),
        onValueChanged: e => this.handlePropertyChanged("focalY", e, !1)
      }), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 0,
          fontSize: 14
        }
      }, ")")), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 4,
          paddingLeft: 10,
          width: 45
        }
      }, "Scale:"), o().createElement($e.A, {
        title: "Scale",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 9
        },
        style: {
          width: 25
        },
        unit: "%",
        min: 100,
        max: 300,
        step: 2,
        value: 100 * r,
        onValueChanging: e => this.handlePropertyChanged("scale", e / 100, !0),
        onValueChanged: e => this.handlePropertyChanged("scale", e / 100, !1)
      }))));
    }
    renderLinearGradientSettings() {
      var e = this.props.gradient,
        t = this.props.gradient.center || {
          x: 50,
          y: 50
        },
        r = this.props.gradient.scale || 1;
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 10,
          width: 45
        }
      }, "Rotate:"), o().createElement($e.A, {
        title: "Rotation in degree",
        containerStyle: {
          paddingTop: 0
        },
        style: {
          width: 25,
          marginLeft: 6
        },
        unit: "deg",
        min: 0,
        max: 359,
        step: 1,
        value: e.rotation || 0,
        onValueChanging: e => this.handlePropertyChanged("rotation", e, !0),
        onValueChanged: e => this.handlePropertyChanged("rotation", e, !1)
      })), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 4,
          paddingLeft: 10,
          width: 45
        }
      }, "Scale:"), o().createElement($e.A, {
        title: "Scale",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 9
        },
        style: {
          width: 25
        },
        unit: "%",
        min: 100,
        max: 300,
        step: 2,
        value: 100 * r,
        onValueChanging: e => this.handlePropertyChanged("scale", e / 100, !0),
        onValueChanged: e => this.handlePropertyChanged("scale", e / 100, !1)
      })), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("span", {
        style: {
          paddingTop: 4,
          paddingLeft: 10,
          width: 45
        }
      }, "Center:"), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 4,
          fontSize: 14
        }
      }, "("), o().createElement($e.A, {
        title: "Center x",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -25,
        max: 125,
        step: 1,
        value: t.x,
        onValueChanging: e => this.handlePropertyChanged("centerX", e, !0),
        onValueChanged: e => this.handlePropertyChanged("centerX", e, !1)
      }), o().createElement($e.A, {
        title: "Center y",
        containerStyle: {
          paddingTop: 2,
          marginLeft: 0,
          marginRight: 0
        },
        style: {
          width: 25
        },
        unit: "%",
        min: -25,
        max: 125,
        step: 1,
        value: t.y,
        onValueChanging: e => this.handlePropertyChanged("centerY", e, !0),
        onValueChanged: e => this.handlePropertyChanged("centerY", e, !1)
      }), o().createElement("span", {
        style: {
          paddingTop: 2,
          paddingLeft: 0,
          fontSize: 14
        }
      }, ")"))));
    }
    renderGradientSettings() {
      var e;
      if (!this.props.gradient) return o().createElement("gradient-settings", {
        style: f.A.update(rt, {
          height: 22
        })
      });
      var t = this.props.gradient.type || "linear";
      return o().createElement("gradient-settings", {
        style: rt
      }, o().createElement(Je.A, {
        style: {
          flexGrow: 1
        },
        onSelect: this.handleGradientTypeChanged,
        items: dt,
        selectedKeys: [t]
      }), "linear" == t ? this.renderLinearGradientSettings() : this.renderRadialGradientSettings());
    }
    render() {
      return o().createElement("gradient-container", {
        style: ot
      }, this.renderPresets(), this.renderGradientSettings(), this.renderColorStops());
    }
  }
  var rt = {
      fontSize: 12,
      color: "var(--ui-text-muted, gray)",
      display: "flex",
      marginTop: 10,
      border: "1px solid var(--ui-border, lightgray)",
      position: "relative",
      padding: "8px 9px"
    },
    nt = {
      position: "absolute",
      bottom: "-0.5em",
      background: "var(--ui-surface-muted, rgb(247, 247, 247))",
      left: "10px",
      padding: "0 5px",
      fontSize: "11px",
      color: "var(--ui-text-muted, gray)"
    },
    it = {
      marginTop: 10,
      border: "1px solid var(--ui-border, lightgray)",
      position: "relative",
      padding: "4px 9px",
      paddingBottom: 20,
      marginBottom: 20
    },
    ot = {
      display: "flex",
      flexDirection: "column",
      width: 300
    },
    st = {
      display: "flex"
    },
    at = {
      display: "block",
      padding: 2,
      cursor: "pointer"
    },
    lt = {
      width: 25,
      height: 25,
      display: "block",
      border: "1px solid var(--ui-border, lightgray)"
    },
    ct = {
      padding: "3px 6px",
      textAlign: "center",
      width: 40,
      fontSize: 12
    },
    dt = [{
      style: ct,
      key: "linear",
      element: o().createElement("span", null, "Linear")
    }, {
      style: ct,
      key: "radial",
      element: o().createElement("span", null, "Radial")
    }];
  class ht extends o().Component {
    convertTikzSet() {
      var e;
      return "\n\\tikzset{\npattern size/.store in=\\mcSize, \npattern size = 5pt,\npattern thickness/.store in=\\mcThickness, \npattern thickness = 0.3pt,\npattern radius/.store in=\\mcRadius, \npattern radius = 1pt}";
    }
  }
  var pt = r(97865);
  class ut extends ht {
    renderSvgDefs(e) {
      return o().createElement("defs", null, pt.A.renderPatternDefs(this.props.settings, e, e));
    }
    convertTikzPattern() {
      return "";
    }
    getPatternId() {
      return "_" + Math.random().toString(36).substr(2, 9);
    }
    renderRect(e) {
      return o().createElement("rect", {
        x: "0",
        y: "0",
        width: this.props.viewSize,
        height: this.props.viewSize,
        style: {
          fill: "url(#".concat(e, ")"),
          strokeWidth: 1,
          stroke: "black"
        }
      });
    }
    renderPattern() {
      var e = {
          cursor: "pointer",
          height: "".concat(this.props.viewSize, "px"),
          padding: 3
        },
        t = this.getPatternId();
      return o().createElement("div", {
        style: e,
        onClick: () => {
          this.props.onClick();
        }
      }, o().createElement("svg", {
        width: this.props.viewSize,
        height: this.props.viewSize,
        viewBox: "0 0 ".concat(this.props.viewSize, " ").concat(this.props.viewSize),
        xmlns: "http://www.w3.org/2000/svg"
      }, this.renderSvgDefs(t), this.renderRect(t)));
    }
    render() {
      return o().createElement("pattern-box", {
        style: gt
      }, this.renderPattern());
    }
  }
  var gt = {};
  class mt extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cvertical lines}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{cvertical lines}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0}{\\mcSize}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
  }
  class ft extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@chorizontal lines}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{chorizontal lines}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
  }
  class yt extends ut {
    convertTikzPattern() {
      var e;
      return "\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cgrid}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{cgrid}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0}}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0}{\\mcSize}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
  }
  class vt extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cnorth east lines}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{cnorth east lines}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{0pt}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+0.1pt}{\\mcSize+0.1pt}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
  }
  class bt extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cnorth west lines}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{cnorth west lines}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+0.1pt}{-0.1pt}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
  }
  class xt extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@ccrosshatch}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{ccrosshatch}\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+0.1pt}{-0.1pt}}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{0pt}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+0.1pt}{\\mcSize+0.1pt}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
  }
  class Ct extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cbricks}{\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{cbricks}\n{\\pgfpointorigin}\n{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0pt}{0.5*\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0.5*\\mcSize}}\n\\pgfpathmoveto{\\pgfpoint{0.5*\\mcSize}{0.5*\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{0.5*\\mcSize}{\\mcSize}}\n\\pgfpathmoveto{\\pgfpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{\\mcSize}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
  }
  class St extends ut {
    convertTikzPattern() {
      var e;
      return "\n\\makeatletter\n\\pgfutil@ifundefined{pgf@pattern@name@cdots}{\n\\makeatletter\n\\pgfdeclarepatternformonly[\\mcRadius,\\mcThickness,\\mcSize]{cdots}\n{\\pgfpoint{-0.5*\\mcSize}{-0.5*\\mcSize}}\n{\\pgfpoint{0.5*\\mcSize}{0.5*\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathcircle\\pgfpointorigin{\\mcRadius}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
  }
  var At = [{
    clss: mt,
    name: "VerticalLinesPattern"
  }, {
    clss: ft,
    name: "HorizontalLinesPattern"
  }, {
    clss: yt,
    name: "GridPattern"
  }, {
    clss: vt,
    name: "NorthEastLinesPattern"
  }, {
    clss: bt,
    name: "NorthWestLinesPattern"
  }, {
    clss: xt,
    name: "CrossHatchPattern"
  }, {
    clss: Ct,
    name: "BrickPattern"
  }, {
    clss: St,
    name: "DotsPattern"
  }];
  class wt extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        patternSettings: void 0,
        patternSettingsChosen: void 0
      }), (0, n.A)(this, "onSizeChanged", (e, t) => {
        this.onSettingsChanged({
          name: this.state.patternSettingsChosen,
          size: e
        }, t);
      }), (0, n.A)(this, "onThicknessChanged", (e, t) => {
        this.onSettingsChanged({
          name: this.state.patternSettingsChosen,
          thickness: e
        }, t);
      }), (0, n.A)(this, "onStrokeColorPickerItemSelect", e => {
        var t;
        "string" == typeof e ? this.onSettingsChanged({
          name: this.state.patternSettingsChosen,
          color: e
        }) : this.onSettingsChanged({
          name: this.state.patternSettingsChosen,
          color: "rgba(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ",").concat(null !== (t = e[3]) && void 0 !== t ? t : 1, ")")
        });
      }), (0, n.A)(this, "onSettingsChanged", (e, t) => {
        var r = this.getNewPatternSettings(e);
        this.setState({
          patternSettings: r
        }), this.raisePatternChanged(r, t);
      }), (0, n.A)(this, "onRadiusChanged", (e, t) => {
        this.onSettingsChanged({
          name: this.state.patternSettingsChosen,
          radius: e
        }, t);
      }), null != this.props && null != this.props.pattern && (this.state.patternSettingsChosen = this.props.pattern.name, this.state.patternSettings = this.props.pattern);
    }
    shouldComponentUpdate(e, t) {
      return e.pattern != this.props.pattern || t != this.state;
    }
    componentWillReceiveProps(e) {
      null != e && null != e.pattern && (this.setState({
        patternSettingsChosen: e.pattern.name
      }), this.setState({
        patternSettings: e.pattern
      }));
    }
    getSettingsDefault(e) {
      var t = e;
      return null != e && null != e.name && "DotsPattern" == e.name && (t = h().assign({}, e, {
        radius: 1
      })), h().assign({}, {
        name: "VerticalLinesPattern",
        size: 8,
        thickness: 1,
        color: "rgba(0, 0, 0, 1)",
        radius: void 0
      }, t);
    }
    onPatternSettingsChanged(e) {
      this.setState({
        patternSettingsChosen: e
      });
      var t = this.getSettingsDefault({
        name: e
      });
      this.setState({
        patternSettings: t
      }), this.raisePatternChanged(t);
    }
    getNewPatternSettings(e) {
      return h().assign({}, this.state.patternSettings, e);
    }
    raisePatternChanged(e, t) {
      this.props.onPatternChanged(e, t);
    }
    renderRadiusSetting(e) {
      if (e.radius) return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, o().createElement($e.A, {
        title: "Radius",
        style: {
          width: 25
        },
        velocity: .1,
        unit: "px",
        min: 1,
        max: 100,
        step: 1,
        value: e.radius,
        icon: o().createElement("span", {
          style: {
            width: 50,
            display: "inline-block",
            paddingRight: 5,
            fontSize: 12,
            color: "var(--ui-text-muted, gray)"
          }
        }, "Radius:"),
        onValueChanging: e => {
          this.onRadiusChanged(e, !0);
        },
        onValueChanged: e => {
          this.onRadiusChanged(e);
        }
      }));
    }
    renderSettings() {
      if (!this.state.patternSettings) return o().createElement("div", {
        style: Mt
      });
      var e = this.state.patternSettings,
        t = {
          border: "1px solid var(--ui-border, lightgray)",
          marginTop: 20,
          padding: 5
        };
      return o().createElement("pattern-settings", {
        style: t
      }, o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, o().createElement($e.A, {
        title: "Size",
        style: {
          width: 25
        },
        velocity: .1,
        unit: "px",
        min: 1,
        max: 100,
        step: 1,
        value: e.size,
        icon: o().createElement("span", {
          style: {
            width: 50,
            display: "inline-block",
            paddingRight: 5,
            fontSize: 12,
            color: "var(--ui-text-muted, gray)"
          }
        }, "Size:"),
        onValueChanging: e => {
          this.onSizeChanged(e, !0);
        },
        onValueChanged: e => {
          this.onSizeChanged(e);
        }
      })), o().createElement(Le.A, {
        style: {
          marginLeft: 10
        },
        value: e.thickness,
        onItemSelect: e => this.onThicknessChanged(e)
      }), o().createElement(Re.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        value: e.color,
        style: {
          paddingLeft: 5
        },
        disableNoColor: !0,
        onItemSelect: e => {
          this.onStrokeColorPickerItemSelect(e);
        }
      })), this.renderRadiusSetting(e));
    }
    renderPresets() {
      return At.map((e, t) => {
        var r = e.clss,
          n = e.name,
          i = r;
        return o().createElement(i, {
          key: t,
          onClick: () => {
            this.onPatternSettingsChanged(n);
          },
          settings: this.getSettingsDefault({
            name: n,
            radius: 1
          }),
          isChosen: this.state.patternSettingsChosen == n,
          viewSize: "25"
        });
      });
    }
    renderPreview(e) {
      if (!this.state.patternSettings) return o().createElement("div", {
        style: {
          width: 65,
          height: 65
        }
      });
      var t = e.clss;
      return o().createElement(t, {
        onClick: () => {
          this.onPatternSettingsChanged(e.name);
        },
        settings: this.state.patternSettings,
        isChosen: this.state.patternSettingsChosen == e.name,
        viewSize: "65"
      });
    }
    render() {
      var e = At.find(e => e.name == this.state.patternSettingsChosen);
      return o().createElement("fill-pattern-container", {
        style: kt
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: 100
        }
      }, o().createElement("presets", {
        style: {
          display: "flex",
          flexDirection: "column",
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("div", {
        style: Et
      }, this.renderPresets()), o().createElement("div", {
        style: Dt
      }, "Presets")), o().createElement("preview-container", {
        style: Ot
      }, o().createElement("div", null, this.renderPreview(e)), o().createElement("div", {
        style: Pt
      }, "Preview"))), this.renderSettings());
    }
  }
  var Et = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "200px"
    },
    kt = {
      display: "flex",
      flexDirection: "column",
      padding: 2
    },
    Ot = {
      borderTop: "1px solid var(--ui-border, lightgray)",
      borderRight: "1px solid var(--ui-border, lightgray)",
      borderBottom: "1px solid var(--ui-border, lightgray)",
      position: "relative",
      padding: "4px 9px 12px"
    },
    Dt = {
      position: "absolute",
      background: "var(--ui-surface-muted, rgb(247, 247, 247))",
      left: "10px",
      top: 104,
      padding: "2px 8px",
      fontSize: "11px",
      color: "var(--ui-text-muted, gray)"
    },
    Pt = {
      position: "absolute",
      bottom: "-0.5em",
      background: "var(--ui-surface-muted, rgb(247, 247, 247))",
      left: "1px",
      padding: "2px 8px",
      fontSize: "11px",
      color: "var(--ui-text-muted, gray)"
    },
    Mt = {
      border: "1px solid var(--ui-border, lightgray)",
      marginTop: "20px",
      padding: "5px",
      height: "30px"
    },
    It = r(85849),
    Tt = r(8747);
  function Lt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Rt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lt(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bt extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "styles", this.buildStyles());
    }
    render() {
      var e = this.styles,
        t = e.tabContainerStyle,
        r = e.tabItemsStyle,
        n = e.dragAreaStyle,
        i = e.tabContentStyle,
        s = e.borderOnlyStyle,
        a = this.props,
        l = a.tabItems,
        c = a.renderTabContent,
        d = a.selectedKey;
      return o().createElement("tabs-container", {
        style: Rt(Rt({}, t), this.props.tabContainerStyle)
      }, o().createElement("tab-items", {
        style: Rt(Rt({}, r), this.props.tabItemsStyle)
      }, o().createElement("div", {
        style: s
      }), !this.props.disabledDrag && o().createElement(Tt.F, {
        onTouchOrMouseDown: this.props.onTabItemsMouseDown
      }, o().createElement("drag-area", {
        style: n
      })), l.map(e => this.getTabItem(e))), o().createElement("tab-content", {
        style: Rt(Rt({}, i), this.props.tabContentStyle)
      }, c(d)));
    }
    getTabItem(e) {
      var t = this.props.selectedKey,
        r = this.styles,
        n = r.tabItemStyle,
        i = r.tabItemSelectStyle,
        s = t == e.key ? i : n;
      return o().createElement("tab-item", {
        key: e.key,
        onMouseDown: () => this.props.onSelectTabItem(e.key),
        onTouchStart: () => this.props.onSelectTabItem(e.key),
        style: Rt(Rt({}, s), this.props.tabItemStyle)
      }, e.label);
    }
    buildStyles() {
      var e,
        t,
        r,
        n,
        i = {
          fontSize: 12,
          padding: 5,
          display: "block",
          boxSizing: "border-box",
          border: "1px solid transparent",
          position: "relative",
          background: "var(--ui-surface-muted, #f7f7f7)"
        },
        o,
        s;
      return {
        tabContainerStyle: {
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "column",
          background: "var(--ui-surface-muted, #f7f7f7)",
          padding: 5,
          border: "1px solid var(--ui-border, lightgray)",
          boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
          minHeight: 0
        },
        tabItemsStyle: {
          display: "flex",
          flexDirection: "row",
          marginLeft: -5,
          marginRight: -5,
          paddingLeft: 5,
          marginBottom: -1,
          position: "relative"
        },
        tabContentStyle: {
          position: "relative"
        },
        dragAreaStyle: {
          display: "block",
          width: "100%",
          height: "100%",
          cursor: "move",
          position: "absolute"
        },
        tabItemStyle: i,
        tabItemSelectStyle: Object.assign({}, i, {
          border: "1px solid var(--ui-border, lightgray)",
          color: "var(--ui-text, black)",
          zIndex: 2,
          borderBottom: "1px solid var(--ui-border, rgb(247, 247, 247))"
        }),
        borderOnlyStyle: {
          borderTop: "1px solid var(--ui-border, lightgray)",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }
      };
    }
  }
  class Ft extends be.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), (0, n.A)(this, "movingHandler", new It.A()), (0, n.A)(this, "lastPos", void 0), (0, n.A)(this, "tabItems", [{
        key: "Basic",
        label: "Basic"
      }, {
        key: "Gradient",
        label: "Gradient"
      }, {
        key: "Pattern",
        label: "Pattern"
      }]), (0, n.A)(this, "onExpandContainerMouseDown", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "handleColorChange", (e, t) => {
        this.setState({
          value: e
        }), this.props.onItemSelect(e, !0, t);
      }), (0, n.A)(this, "onColorSelectMouseDown", e => {
        m.A.setCustomInfo(e, v.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
      }), (0, n.A)(this, "handleGradientChanged", (e, t) => {
        this.handleColorChange(e, t);
      }), (0, n.A)(this, "handlePatternChanged", (e, t) => {
        this.handleColorChange(e, t);
      }), (0, n.A)(this, "handleTabItemsMouseDown", e => {
        if (this.lastPos = {
          x: this.state.containerLeft,
          y: this.state.containerTop
        }, !this.movingHandler.baseElement) {
          var t = u().findDOMNode(this);
          this.movingHandler.setBaseElement(t), this.movingHandler.setContainer(window.document.body);
        }
        this.movingHandler.mouseDown(e);
      }), (0, n.A)(this, "renderContent", e => {
        switch (e) {
          case "Basic":
            return this.renderBasicColorContent();
          case "Gradient":
            return this.renderGradientColorContent();
          case "Pattern":
            return this.renderPatternContent();
        }
      }), this.state = {
        selectedTab: this.getTabTypeBasedOnColor(this.props.value),
        value: this.props.value,
        expand: !1,
        containerTop: 30,
        containerLeft: 0
      }, this.movingHandler.onMoving = e => {
        this.setState({
          containerLeft: this.lastPos.x + e.x,
          containerTop: this.lastPos.y + e.y
        });
      }, this.movingHandler.onMoved = () => {};
    }
    componentDidMount() {
      var e;
      super.componentDidMount(), u().findDOMNode(this).reactInstance = this;
    }
    getTabTypeBasedOnColor(e) {
      return P.A.isPattern(e) ? "Pattern" : P.A.isGradient(e) ? "Gradient" : "Basic";
    }
    componentWillReceiveProps(e) {
      e.value != this.state.value && (this.setState({
        value: e.value
      }), this.getTabTypeBasedOnColor(e.value) != this.state.selectedTab && this.setState({
        selectedTab: this.getTabTypeBasedOnColor(e.value)
      }));
    }
    getComponentClassName() {
      return "color-picker";
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.value != this.props.value || t.selectedTab != this.state.selectedTab || t.containerLeft != this.state.containerLeft || t.containerTop != this.state.containerTop || t.value != this.state.value;
    }
    renderComponent() {
      var e = {
        fill: P.A.isBasicColor(this.state.value) ? k.A.getHtmlColor(this.state.value) : "var(--ui-on-accent, white)",
        stroke: "var(--ui-text-muted, gray)"
      };
      return o().createElement("item", {
        className: "setting",
        style: {
          width: 23
        },
        title: "Fill Color"
      }, re.A.fillColor({
        width: "100%",
        height: "100%"
      }, e));
    }
    renderNoColorSelect() {
      return o().createElement("no-color-select", {
        onMouseDown: () => this.handleColorChange("none")
      }, "No Color");
    }
    renderBasicColorContent() {
      if ("Basic" == this.state.selectedTab) {
        var e = P.A.isBasicColor(this.state.value) ? this.state.value : "#000";
        return o().createElement("div", null, this.renderNoColorSelect(), o().createElement(Be.A, {
          requestPickerSettings: this.props.requestPickerSettings,
          style: {
            boxShadow: "none",
            border: "1px solid var(--ui-border, lightgray)",
            borderRadius: 0
          },
          color: e,
          onChange: this.handleColorChange
        }), this.renderManageColorPresetBtn());
      }
    }
    renderManageColorPresetBtn() {
      if (this.props.showChangingPresetColorBtn && this.props.requestPickerSettings().allowChangePresetColor()) return o().createElement("button", {
        style: {
          width: "100%"
        },
        className: "btn-normal btn-large",
        onClick: () => {
          this.closeExpand(), this.props.requestPickerSettings().onChangePresetColor();
        }
      }, "Change Preset Colors");
    }
    renderGradientColorContent() {
      if ("Gradient" == this.state.selectedTab) {
        var e = P.A.isGradient(this.state.value) ? this.state.value : void 0;
        return o().createElement(tt, {
          requestPickerSettings: this.props.requestPickerSettings,
          gradient: e,
          onGradientChanged: this.handleGradientChanged
        });
      }
    }
    renderPatternContent() {
      if ("Pattern" == this.state.selectedTab) {
        var e = P.A.isPattern(this.state.value) ? this.state.value : void 0;
        return o().createElement(wt, {
          requestPickerSettings: this.props.requestPickerSettings,
          pattern: e,
          onPatternChanged: this.handlePatternChanged
        });
      }
    }
    renderExpandComponent() {
      return this.innerRenderExpandComponent();
    }
    innerRenderExpandComponent() {
      var e = {
        top: this.state.containerTop,
        left: this.state.containerLeft
      };
      return o().createElement("color-select", {
        ref: e => this.registerExpandContainer(e),
        onTouchStart: e => e.nativeEvent.handledTouchStart = !0,
        style: e,
        onMouseDown: this.onColorSelectMouseDown
      }, o().createElement(Bt, {
        tabContentStyle: {
          paddingTop: 10
        },
        tabItems: this.tabItems,
        selectedKey: this.state.selectedTab,
        onSelectTabItem: e => this.setState({
          selectedTab: e
        }),
        onTabItemsMouseDown: this.handleTabItemsMouseDown,
        renderTabContent: this.renderContent
      }), o().createElement("div", {
        onClick: e => {
          e.stopPropagation(), e.preventDefault(), this.closeExpand();
        },
        style: {
          position: "absolute",
          right: 0,
          top: 0,
          border: "1px solid var(--ui-border, lightgray)",
          padding: 2,
          background: "var(--ui-surface-muted, #f7f7f7)",
          color: "var(--ui-danger, #ce0303)",
          cursor: "pointer"
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        style: {
          display: "block"
        }
      })));
    }
  }
  class jt extends o().Component {
    shouldComponentUpdate(e) {
      if (!e.watch) return !1;
      var t = this.props.watch,
        r = e.watch;
      if (t.length != r.length) return !0;
      for (var n = 0; n < t.length; n++) if (t[n] != r[n]) return !0;
      return !1;
    }
    render() {
      return o().createElement("div", null, this.props.children);
    }
  }
  var _t = r(42480),
    Nt = r(91617);
  class zt extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "onItemSelect", e => {
        var t = D.A.setSetting(this.props.data, e, !D.A.getSettings(this.props.data, e));
        this.props.onChanged(t);
      });
    }
    render() {
      var e = this.props.data,
        t = D.A.getSettings(e, "textSnapToGrid"),
        r = D.A.getSettings(e, "onlyShowGridOnEditing"),
        n = D.A.getSettings(e, "snapToOtherShapes"),
        i = D.A.getSettings(e, "grid"),
        s = [{
          value: "textSnapToGrid",
          display: "Snap to Grid",
          checked: t,
          isCheckBox: !0,
          disabled: !i
        }, {
          value: "onlyShowGridOnEditing",
          display: "Only Show Grid on Editing",
          checked: r,
          isCheckBox: !0,
          disabled: !i
        }, {
          value: "snapToOtherShapes",
          display: "Snap to Other Shapes",
          checked: n,
          isCheckBox: !0
        }];
      return o().createElement("div", null, o().createElement("main", {
        title: "Options"
      }, o().createElement(Nt.A, {
        label: "Options",
        useFixedPosition: !0,
        containerStyle: {
          width: 200
        },
        items: s,
        onItemSelect: this.onItemSelect
      }), se.A.separator()));
    }
  }
  var Ht = r(80137),
    Wt = r(22662),
    Vt = r(94362),
    Ut = r(91335);
  class qt {
    isCustom(e) {
      return e && "object" == typeof e;
    }
    getCustomValue(e, t) {
      return this.isCustom(e) ? e.value : t;
    }
    getCSSAlign(e) {
      return this.isCustom(e) ? "".concat(e.value, "px") : e;
    }
  }
  var Gt = new qt();
  class Kt extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "inputHtml", void 0), (0, n.A)(this, "handleApplyClick", () => {
        if (this.inputHtml) {
          var e = this.parsePixelValue(this.inputHtml.value);
          this.props.onValueChange(e);
        }
      }), (0, n.A)(this, "handleRenderItem", e => {
        var t = this.props.value;
        return "custom" == e.key ? o().createElement("span", null, Gt.getCustomValue(t, 0), "px") : "custom-select" == e.key ? o().createElement("div", {
          onMouseDown: e => e.stopPropagation(),
          style: {
            lineHeight: "1.2",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            background: "none",
            marginTop: 6,
            marginBottom: 5
          }
        }, o().createElement("input", {
          defaultValue: Gt.getCustomValue(t, 0).toString(),
          ref: e => this.inputHtml = e,
          style: {
            width: 35,
            fontSize: 13
          }
        }), o().createElement("span", {
          style: {
            paddingLeft: 3
          }
        }, "px"), o().createElement("button", {
          className: "btn-primary",
          style: {
            marginLeft: 22,
            width: 52
          },
          onClick: this.handleApplyClick
        }, "Apply")) : o().createElement("span", null, e.value);
      }), (0, n.A)(this, "handleChange", e => {
        "custom" != e ? "custom-select" != e && this.props.onValueChange(e) : this.props.onValueChange(this.props.value);
      }), (0, n.A)(this, "handleRenderValue", e => {
        var t = this.props.value;
        switch (e.key) {
          case "custom":
            return o().createElement("span", null, "".concat(Gt.getCustomValue(t, 0), "px"));
          case "top":
            return o().createElement("span", null, "Top");
          case "middle":
            return o().createElement("span", null, "Middle");
          case "bottom":
            return o().createElement("span", null, "Bottom");
          case "text-top":
            return o().createElement("span", null, "Text Top");
          case "text-bottom":
            return o().createElement("span", null, "Text Bottom");
        }
        return o().createElement("span", null);
      });
    }
    getRenderItems() {
      var e = this.props.value,
        t = [{
          key: "top",
          value: "Top"
        }, {
          key: "middle",
          value: "Middle"
        }, {
          key: "bottom",
          value: "Bottom"
        }, {
          key: "text-top",
          value: "Text Top"
        }, {
          key: "text-bottom",
          value: "Text Bottom"
        }, {
          key: "custom-select",
          value: "Custom",
          noSelect: !0
        }];
      return Gt.isCustom(e) && t.splice(0, 0, {
        key: "custom",
        value: "".concat(e.value, "px")
      }), t;
    }
    getSelectedValue() {
      var e = this.props.value;
      return Gt.isCustom(e) ? "custom" : e;
    }
    parsePixelValue(e) {
      var t = Number.parseFloat(e);
      return "number" != typeof t || Number.isNaN(t) ? {
        value: 1.2
      } : {
        value: h().clamp(t, -1e4, 1e4)
      };
    }
    render() {
      return o().createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--ui-text-muted, gray)",
          paddingTop: 2
        },
        className: "test-dva",
        onMouseDown: e => e.stopPropagation()
      }, o().createElement("span", {
        style: {
          paddingLeft: 5,
          paddingRight: 5
        }
      }, "V Align: "), o().createElement(Ut.A, {
        data: this.getRenderItems(),
        onRenderValue: this.handleRenderValue,
        style: {
          display: "inline-block"
        },
        isReadOnly: !0,
        onChange: this.handleChange,
        value: this.getSelectedValue(),
        width: 90,
        expansionWidth: 145,
        onRenderItem: this.handleRenderItem,
        title: "V Align"
      }));
    }
  }
  var Zt = r(77982),
    Yt = r(6984);
  function Qt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Jt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qt(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qt(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Xt extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showExportDialog: null
      }), (0, n.A)(this, "handleMoreOptionsSelect", e => {
        switch (e) {
          case "accessibility":
            return void this.setState({
              showAccessibility: !0
            });
          case "caption":
            var t = this.props.data;
            if (t.elements.caption) return;
            var r = V.A.createEmptyEditor();
            r.lines[0].style = {
              align: "center"
            };
            var n = Jt(Jt({}, t), {}, {
              elements: Jt(Jt({}, t.elements), {}, {
                caption: r
              })
            });
            return void Vt.A.in(() => {
              this.props.onModelChanged(n), this.props.onSelectedChanged({
                selected: {
                  lineIndex: 0,
                  charIndex: 0
                },
                key: "caption"
              });
            });
        }
      }), (0, n.A)(this, "handleAccessibilityChanged", e => {
        this.props.onModelChanged(Jt(Jt({}, this.props.data), {}, {
          accessibility: e
        })), this.setState({
          showAccessibility: !1
        });
      }), (0, n.A)(this, "handleRequestMathAreaElement", () => this.props.requestDiagramElement()), (0, n.A)(this, "handleImageExport", e => {
        if (b.A.isTestEnv()) {
          var t = this.props.requestDiagramElement();
          if (!t) return;
          Ht.A.handleDiagramExportForTest(t, this.getbaseMathModeFontFamily(), this.getSubMathFont(), this.getMtFuncs().getDocZoomContainer(), this.props.fixedContextHandler.getBatchUpdater());
        } else this.setState({
          showExportDialog: e
        });
      }), (0, n.A)(this, "handleCopyImageToClipboard", () => {
        this.setState({
          showExportDialog: "Clipboard"
        });
      });
    }
    render() {
      var e = D.A.getSettings(this.props.data, "grid"),
        t = !!D.A.getSettings(this.props.data, "gridBold"),
        r = D.A.getSettings(this.props.data, "gridSize"),
        n = D.A.getSettings(this.props.data, "textSnapToGrid"),
        i = D.A.getSettings(this.props.data, "onlyShowGridOnEditing"),
        s = D.A.getSettings(this.props.data, "snapToOtherShapes"),
        a = D.A.getSettings(this.props.data, "verticalAlign"),
        l = null;
      e && (l = o().createElement("main", null, o().createElement($e.A, {
        title: "Grid Size",
        key: "2",
        unit: "px",
        min: 2,
        max: 200,
        step: 1,
        value: r,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "var(--ui-text-disabled, lightgray)",
            fill: "none",
            overflow: "visible"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(-4px,5px)",
            stroke: "var(--ui-text-muted, gray)"
          },
          d: "M2,7 L20,7 M6,4 L6,10  M16,4 L16,10"
        }), o().createElement(_t.A, {
          p1: {
            x: 0,
            y: 6
          },
          p2: {
            x: 14,
            y: 6
          },
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6
          }
        })),
        onValueChanging: e => this.props.changeEntityProperty("settings", "gridSize", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "gridSize", e, !1, t)
      }), se.A.separator()));
      var c = {
          marginTop: 2,
          marginLeft: 5,
          width: 70,
          zIndex: 501,
          position: "relative",
          fontSize: 12,
          height: 22
        },
        d = {
          marginTop: 6,
          color: "var(--ui-text-muted, gray)",
          fontSize: 12,
          marginLeft: 3
        };
      return o().createElement(jt, {
        watch: [t, e, r, n, i, s, a, this.state.showExportDialog, this.state.showAccessibility]
      }, o().createElement("main", null, o().createElement("item", {
        title: "Showing Grid",
        style: tr,
        onMouseDown: () => this.props.changeEntityProperty("settings", "grid", !e, void 0, void 0),
        className: e ? "selected" : ""
      }, o().createElement("svg", {
        style: $t
      }, o().createElement("path", {
        d: "M2,4 L20,4 M2,11 L20,11 M2,18 L20,18   M4,2 L4,20 M11,2 L11,20 M18,2 L18,20"
      }))), e && o().createElement("item", {
        title: "Showing Grid Major",
        style: tr,
        onMouseDown: () => this.props.changeEntityProperty("settings", "gridBold", !t, void 0, void 0),
        className: t ? "selected" : ""
      }, o().createElement("svg", {
        style: er
      }, o().createElement("path", {
        d: "M2,4 L20,4 M2,11 L20,11 M2,18 L20,18   M4,2 L4,20 M11,2 L11,20 M18,2 L18,20",
        strokeWidth: .5
      }), o().createElement("path", {
        d: "M2,4 L20,4 M2,18 L20,18   M4,2 L4,20  M18,2 L18,20",
        strokeWidth: 1
      }))), l, o().createElement(zt, {
        data: this.props.data,
        onChanged: this.props.onModelChanged
      }), o().createElement("span", {
        style: d
      }, "Export: "), o().createElement(Zt.U, {
        key: "svg-image",
        fixedContextHandler: this.props.fixedContextHandler,
        requestMathAreaElement: this.handleRequestMathAreaElement,
        onCopyImageToClipboard: this.handleCopyImageToClipboard,
        onExportImage: () => this.handleImageExport("SVG"),
        buttonWithMoreOptionsStyleClass: "btn-normal save-as-svg",
        style: c,
        isDiagram: !0
      }), o().createElement(Yt.b, {
        label: "Tikz",
        buttonWithMoreOptionsTitle: "Tikz",
        shortcutText: "Copy Tikz to Clipboard",
        buttonWithMoreOptionsStyleClass: "btn-normal test-btntikz",
        onExportLatex: () => this.props.requestTikzExport(!1),
        onCopyLatexToClipboard: () => this.props.requestTikzExport(!0),
        style: c
      }), this.renderVerticalAlign(), se.A.separator(), this.renderMoreOptions(), this.renderAccessibilityDialog()));
    }
    renderMoreOptions() {
      if (this.props.showMoreOptions) return o().createElement(Nt.A, {
        className: "dg-more-options",
        useFixedPosition: !0,
        key: "1",
        containerStyle: {
          width: 150
        },
        caret: !1,
        label: "...",
        style: {
          marginLeft: 4,
          color: "var(--ui-text-muted, gray)",
          fill: "var(--ui-text-muted, gray)",
          marginTop: 2
        },
        labelStyle: {
          paddingTop: 0,
          lineHeight: "1.5em",
          paddingBottom: 2
        },
        items: rr,
        onItemSelect: this.handleMoreOptionsSelect
      });
    }
    renderVerticalAlign() {
      if (this.props.showMoreOptions && this.props.isInline) {
        var e = D.A.getSettings(this.props.data, "verticalAlign");
        return [se.A.separator1(), o().createElement(Kt, {
          key: "va",
          value: e,
          onValueChange: e => this.props.changeEntityProperty("settings", "verticalAlign", e, !1, !1)
        })];
      }
    }
    renderAccessibilityDialog() {
      if (this.state.showAccessibility) return o().createElement(Wt.A, {
        hideTitle: !0,
        info: this.props.data.accessibility,
        onClose: () => this.setState({
          showAccessibility: !1
        }),
        onOk: this.handleAccessibilityChanged
      });
    }
    getSubMathFont() {
      return this.props.fixedContextHandler.getMtFuncs().getSubMathFont();
    }
    getbaseMathModeFontFamily() {
      return this.props.fixedContextHandler.getMtFuncs().getbaseMathModeFontFamily();
    }
    getMtFuncs() {
      return this.props.fixedContextHandler.getMtFuncs();
    }
  }
  var $t = Jt(Jt({}, P.A.getIconSvgStyle()), {}, {
      height: 20,
      strokeWidth: .5
    }),
    er = Jt(Jt({}, P.A.getIconSvgStyle()), {}, {
      height: 20,
      strokeWidth: 1
    }),
    tr = {
      width: 22,
      marginLeft: 3
    },
    rr = [{
      value: "accessibility",
      display: "Accessibility"
    }, {
      value: "caption",
      display: "Add Caption"
    }],
    nr = r(75663);
  class ir extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleAction", e => {
        var t = this.props.entity,
          r = this.getInfo(t),
          n = r.selected,
          i = r.blockIntersection;
        switch (e) {
          case "intersection-enable":
            return this.props.handleToggleIntersection(n);
          case "intersection-block":
            return this.props.handleToggleBlockIntersection(i);
        }
      });
    }
    render() {
      var e = this.props.entity,
        t = this.getInfo(e),
        r = t.selected,
        n = t.blockIntersection,
        i = [{
          value: "intersection-enable",
          display: "Intersection",
          isCheckBox: !0,
          checked: r
        }, {
          value: "intersection-block",
          display: "Block Intersection",
          isCheckBox: !0,
          checked: n
        }];
      return o().createElement(jt, {
        watch: [r, n]
      }, o().createElement("main", null, o().createElement(Nt.A, {
        containerStyle: {
          width: 150
        },
        caret: !1,
        label: "...",
        items: i,
        onItemSelect: this.handleAction
      }), se.A.separator()));
    }
    getInfo(e) {
      var t, r;
      return {
        selected: nr.A.isEntityIn(this.props.intersections, e),
        blockIntersection: !!D.A.getSettings(e, "blockIntersection")
      };
    }
  }
  class or extends o().PureComponent {
    render() {
      var e,
        t = this.props.entity.shape.frameType,
        r = P.A.getIconSvgStyle(),
        n = "rectangle" == t,
        i = "ellipse" == t,
        s = "circle" == t;
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement("item", {
        title: "Rectangle Frame",
        style: sr,
        onMouseDown: () => this.props.changeEntityProperty(null, "frameType", n ? void 0 : "rectangle", void 0, void 0),
        className: n ? "selected" : ""
      }, o().createElement("svg", {
        key: "rectangle",
        style: r
      }, o().createElement("rect", {
        x: "5",
        y: "8",
        width: "12",
        height: "8"
      }))), o().createElement("item", {
        title: "Ellipse Frame",
        style: sr,
        onMouseDown: () => this.props.changeEntityProperty(null, "frameType", i ? void 0 : "ellipse", void 0, void 0),
        className: i ? "selected" : ""
      }, o().createElement("svg", {
        key: "ellipse",
        style: r
      }, o().createElement("ellipse", {
        cx: "11",
        cy: "12",
        rx: "6",
        ry: "4"
      }))), o().createElement("item", {
        title: "Circle Frame",
        style: sr,
        onMouseDown: () => this.props.changeEntityProperty(null, "frameType", s ? void 0 : "circle", void 0, void 0),
        className: s ? "selected" : ""
      }, o().createElement("svg", {
        key: "circle",
        style: r
      }, o().createElement("circle", {
        cx: "11",
        cy: "12",
        r: "5"
      }))), se.A.separator()));
    }
  }
  var sr = {
    width: 22
  };
  class ar extends o().PureComponent {
    render() {
      var e = this.props.entities,
        t;
      if (!h().every(e, e => a.w.isDiagramIntersectionId(e.id))) return o().createElement("div", null);
      var r = e[0];
      if (!r) return o().createElement("div", null);
      var n = D.A.getSettings(r, "shapeType"),
        i = D.A.getSettings(r, "radius"),
        s = r.style;
      return o().createElement(jt, {
        watch: [n, i, s]
      }, o().createElement("intersections-details", null, o().createElement("item", {
        title: "Intersection Type",
        onMouseDown: () => this.props.changeEntityProperty("settings", "shapeType", "o", !1, void 0),
        className: "intersection-type" + ("o" == n ? " selected" : "")
      }, o().createElement("svg", null, o().createElement("circle", {
        style: {
          stroke: "var(--ui-text, black)",
          strokeWidth: 1
        },
        cx: "12",
        cy: "12",
        r: "4"
      }))), o().createElement("item", {
        title: "Intersection Type",
        onMouseDown: () => this.props.changeEntityProperty("settings", "shapeType", "o+", !1, void 0),
        className: "intersection-type" + ("o+" == n ? " selected" : "")
      }, o().createElement("svg", null, o().createElement("path", {
        d: "M8,12 L16,12 M12,8 L12,16",
        style: {
          stroke: "var(--ui-text, black)",
          strokeWidth: 1
        }
      }), o().createElement("circle", {
        style: {
          stroke: "var(--ui-text, black)",
          strokeWidth: 1
        },
        cx: "12",
        cy: "12",
        r: "4"
      }))), o().createElement("item", {
        title: "Intersection Type",
        onMouseDown: () => this.props.changeEntityProperty("settings", "shapeType", "x", !1, void 0),
        className: "intersection-type" + ("x" == n ? " selected" : "")
      }, o().createElement("svg", null, o().createElement("path", {
        d: "M8,8 L16,16 M16,8 L8,16",
        style: {
          stroke: "var(--ui-text, black)",
          strokeWidth: 1
        }
      }))), o().createElement("item", {
        title: "Intersection Type",
        onMouseDown: () => this.props.changeEntityProperty("settings", "shapeType", "+", !1, void 0),
        className: "intersection-type" + ("+" == n ? " selected" : "")
      }, o().createElement("svg", null, o().createElement("path", {
        d: "M8,12 L16,12 M12,8 L12,16",
        style: {
          stroke: "var(--ui-text, black)",
          strokeWidth: 1
        }
      }))), se.A.separator(), o().createElement($e.A, {
        title: "Intersection Size",
        unit: "px",
        min: 2,
        max: 50,
        step: 1,
        value: i,
        icon: o().createElement("span", {
          style: {
            fontSize: 11,
            color: "var(--ui-text-muted, gray)",
            paddingRight: 2
          }
        }, "Size"),
        onValueChanging: e => this.props.changeEntityProperty("settings", "radius", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "radius", e, !1, t)
      }), se.A.separator()));
    }
  }
  var lr = r(81120),
    cr = r(56144);
  class dr extends cr.A {
    constructor(e) {
      super(e), this.title = "Middle Arrow Type";
    }
    abovePlaceHolder() {
      var e = this.props,
        t = e.mVer,
        r = e.part;
      if (!r || "no" == r) return o().createElement("div", null);
      var n = [{
        key: 0,
        value: "Arrow Tip Middle"
      }, {
        key: 1,
        value: "Middle Middle"
      }];
      return o().createElement("div", null, o().createElement(Ut.A, {
        data: n,
        isReadOnly: !0,
        onChange: e => {
          this.props.onMVerChange(e);
        },
        value: t,
        width: 100,
        stopPropagationOnSelect: !0,
        style: {
          marginBottom: 5
        }
      }));
    }
  }
  class hr extends o().PureComponent {
    render() {
      var e = this.props.entity,
        t = D.A.getSettings(e, "breakWidth"),
        r = D.A.getSettings(e, "breakPositionPercentage"),
        n = !!D.A.getSettings(e, "breakWidth"),
        i = null,
        s = null,
        a = null;
      return n && (s = o().createElement(jt, {
        watch: [t]
      }, o().createElement($e.A, {
        title: "Break Size",
        unit: "px",
        min: 4,
        max: 200,
        step: 1,
        value: t,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "var(--ui-text-disabled, lightgray)",
            fill: "none",
            overflow: "visible"
          }
        }, o().createElement("g", {
          style: {
            transform: "translate(-7px,0px)"
          }
        }, o().createElement("line", {
          x1: "4",
          y1: "12",
          x2: "10",
          y2: "12",
          stroke: "gray",
          strokeWidth: "1"
        }), o().createElement("line", {
          x1: "10",
          y1: "12",
          x2: "18",
          y2: "12",
          stroke: "#e4e3e3",
          strokeWidth: "1"
        }), o().createElement("line", {
          x1: "18",
          y1: "12",
          x2: "24",
          y2: "12",
          stroke: "gray",
          strokeWidth: "1"
        })), o().createElement(_t.A, {
          p1: {
            x: 0,
            y: 6
          },
          p2: {
            x: 14,
            y: 6
          },
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6
          }
        })),
        onValueChanging: e => this.props.changeEntityProperty("settings", "breakWidth", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "breakWidth", e, !1, t)
      })), i = o().createElement(jt, {
        watch: [r]
      }, o().createElement($e.A, {
        title: "Break Position",
        unit: "%",
        min: 0,
        max: 100,
        step: 1,
        value: 100 * r,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "var(--ui-text-disabled, lightgray)",
            fill: "none",
            overflow: "visible"
          }
        }, o().createElement("g", {
          style: {
            transform: "translate(-7px, -2px)"
          }
        }, o().createElement("line", {
          x1: "4",
          y1: "12",
          x2: "10",
          y2: "12",
          stroke: "gray",
          strokeWidth: "1"
        }), o().createElement("line", {
          x1: "10",
          y1: "12",
          x2: "18",
          y2: "12",
          stroke: "#e4e3e3",
          strokeWidth: "1"
        }), o().createElement("line", {
          x1: "18",
          y1: "12",
          x2: "24",
          y2: "12",
          stroke: "gray",
          strokeWidth: "1"
        })), o().createElement("path", {
          d: "M0,6 L9,6 M3,4 L0,6L3,8",
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6,
            transform: "translate(-3px,8px)"
          }
        }), o().createElement("path", {
          d: "M5,6 L14,6  M11,4 L14,6 L11,8",
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6,
            transform: "translate(4px,0)"
          }
        })),
        onValueChanging: e => this.props.changeEntityProperty("settings", "breakPositionPercentage", e / 100, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "breakPositionPercentage", e / 100, !1, t)
      })), a = se.A.separator()), o().createElement("main", null, o().createElement("item", {
        title: "Adding Break In Middle Of Arrow",
        className: n ? "selected" : "",
        onMouseDown: () => this.props.changeEntityProperty("settings", "breakWidth", n ? void 0 : 20, !1, void 0)
      }, o().createElement("svg", null, o().createElement("line", {
        x1: "2",
        y1: "12",
        x2: "10",
        y2: "12",
        stroke: "gray",
        strokeWidth: "1"
      }), o().createElement("line", {
        x1: "10",
        y1: "12",
        x2: "18",
        y2: "12",
        stroke: "#e4e3e3",
        strokeWidth: "1"
      }), o().createElement("line", {
        x1: "18",
        y1: "12",
        x2: "26",
        y2: "12",
        stroke: "gray",
        strokeWidth: "1"
      }))), se.A.separator(), s, i, a);
    }
  }
  var pr = r(99942),
    ur = r(51022),
    gr = r(86835);
  function mr(e, t) {
    var r = h().find(e, e => !a.w.isDiagramGroupId(e.id));
    return r ? a.w.isDiagramLinkedId(r.id) ? x.A.findOriginalEntityFromLink(r, t.elements) : r : mr(e[0].entities, t);
  }
  function fr(e, t, r, n, i) {
    return t.length <= 0 ? o().createElement("div", null) : yr(e, t, r, i) ? n(mr(t, r), t) : o().createElement("div", null);
    var s, a;
  }
  function yr(e, t, r, n) {
    var i;
    return (n ? h().some : h().every)(t, t => {
      if (a.w.isDiagramGroupEntity(t)) return yr(e, t.entities, r, n);
      if (a.w.isDiagramLinkedEntity(t)) {
        var i = x.A.findOriginalEntityFromLink(t, r.elements),
          o = pr.A.findConnectedEditorAndConnections([i.id], r),
          s = ur.A.getEntitiesByIds(o, r);
        return yr(e, s, r, n);
      }
      return e(t);
    });
  }
  function vr(e, t, r) {
    if (e.length <= 0) return o().createElement("div", null);
    var n = {
        isTextMode: "none",
        sameMode: !0
      },
      i,
      s;
    return br(e, t, n) ? r(mr(e, t), n.sameMode, n.hasAnyAbsoluteSize) : o().createElement("div", null);
  }
  function br(e, t, r) {
    return h().every(e, e => {
      var n = gr.A.getEntityType(e);
      if ("group" == n) return br(e.entities, t, r);
      if ("linked" == n) {
        var i = x.A.findOriginalEntityFromLink(e, t.elements),
          o = pr.A.findConnectedEditorAndConnections([i.id], t),
          s;
        return br(ur.A.getEntitiesByIds(o, t), t, r);
      }
      return "text" == n && (r.sameMode && ("none" == r.isTextMode ? r.isTextMode = !!e.isTextMode : r.isTextMode != !!e.isTextMode && (r.sameMode = !1)), e.shape.data.size && (r.hasAnyAbsoluteSize = !0), !0);
    });
  }
  function xr(e, t, r, n, i, s) {
    if (r.length <= 0) return o().createElement("div", null);
    var a = {
        allTextEditor: void 0,
        hasEditorNoFrameType: !1
      },
      l,
      c;
    return Cr(e, t, r, n, i, a) ? a.allTextEditor && a.hasEditorNoFrameType && "with-frame-type" == i ? o().createElement("div", null) : s(mr(r, n)) : o().createElement("div", null);
  }
  function Cr(e, t, r, n, i, o) {
    return h().every(r, r => {
      var s = gr.A.getEntityType(r);
      if ("text" == s) return void 0 === o.allTextEditor && (o.allTextEditor = !0), r.shape.frameType || o.hasEditorNoFrameType || (o.hasEditorNoFrameType = !0), "none" != i;
      if ((void 0 === o.allTextEditor || o.allTextEditor) && (o.allTextEditor = !1), e.indexOf(s) >= 0) return !0;
      if (t && "shape-composite" == s) return U.A.getShapeManagement(r).isSupportStyle(t, r);
      if ("group" == s) return Cr(e, t, r.entities, n, i, o);
      if ("linked" == s) {
        var a = x.A.findOriginalEntityFromLink(r, n.elements),
          l = pr.A.findConnectedEditorAndConnections([a.id], n),
          c = ur.A.getEntitiesByIds(l, n);
        return Cr(e, t, c, n, i, o);
      }
    });
  }
  class Sr extends o().PureComponent {
    render() {
      var e;
      return fr(e => gr.A.isRullerArrow(e), this.props.entities, this.props.diagram, e => {
        var t = D.A.getSettings(e, "separatorDistance"),
          r = D.A.getSettings(e, "separatorLength"),
          n = {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "var(--ui-text-disabled, lightgray)",
            fill: "none",
            overflow: "visible"
          };
        return o().createElement(jt, {
          watch: [t, r]
        }, o().createElement("main", null, o().createElement($e.A, {
          title: "Separator Unit Distance",
          style: {
            width: 30
          },
          key: "2",
          unit: "px",
          min: 2,
          max: 1e4,
          step: 1,
          value: t,
          icon: o().createElement("svg", {
            style: n
          }, o().createElement("path", {
            style: {
              transform: "translate(-4px,5px)",
              stroke: "var(--ui-text-muted, gray)"
            },
            d: "M2,7 L20,7 M6,4 L6,10  M16,4 L16,10"
          }), o().createElement(_t.A, {
            p1: {
              x: 0,
              y: 6
            },
            p2: {
              x: 14,
              y: 6
            },
            style: {
              stroke: "green",
              strokeOpacity: .8,
              fill: "none",
              fillOpacity: .6
            }
          })),
          onValueChanging: e => this.props.changeEntityProperty("settings", "separatorDistance", e, !0, void 0),
          onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "separatorDistance", e, !1, t)
        }), o().createElement($e.A, {
          title: "Separator Size",
          key: "3",
          unit: "px",
          min: 2,
          max: 50,
          step: 1,
          value: r,
          icon: o().createElement("svg", {
            style: n
          }, o().createElement("path", {
            style: {
              transform: "translate(-4px, 3px)",
              stroke: "var(--ui-text-muted, gray)"
            },
            d: "M2,7 L20,7 M6,4 L6,10  M16,4 L16,10"
          }), o().createElement(_t.A, {
            p1: {
              x: 0,
              y: 6
            },
            p2: {
              x: 14,
              y: 6
            },
            style: {
              stroke: "green",
              strokeOpacity: .8,
              fill: "none",
              fillOpacity: .6,
              transform: "rotate(90deg) translate(3px,-10px)"
            }
          })),
          onValueChanging: e => this.props.changeEntityProperty("settings", "separatorLength", e, !0, void 0),
          onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "separatorLength", e, !1, t)
        }), se.A.separator()));
      });
    }
  }
  class Ar {
    getQuadraticAbsoluteControlPoint(e, t, r, n) {
      var i = this.getConnection(e, n),
        o = this.getConnectionPoints(e, t, r, i),
        s = o.from,
        a = o.to;
      return y.A.toAbsoluteConnectionControlPoint(i.data.cp, s, a);
    }
    getCubicAbsoluteControlPoints(e, t, r, n) {
      var i = this.getConnection(e, n),
        o = this.getConnectionPoints(e, t, r, i),
        s = o.from,
        a = o.to;
      return [y.A.toAbsoluteConnectionControlPoint(i.data.cp, s, a), y.A.toAbsoluteConnectionControlPoint(i.data.cp2, s, a)];
    }
    getConnectionPoints(e, t, r, n) {
      var i = this.getConnection(e, n),
        o,
        s;
      return {
        from: R.x.calculateCenterPoint(t[i.fromEditorId], r[i.fromEditorId].editor.parentElement),
        to: R.x.calculateCenterPoint(t[i.toEditorId], r[i.toEditorId].editor.parentElement)
      };
    }
    getConnection(e, t) {
      return h().isString(t) ? h().find(e, e => e.id == t) : t;
    }
  }
  var wr = new Ar(),
    Er = r(32214),
    kr = r(7763);
  class Or extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleHeadAngleByDistanceChange", e => {
        this.props.changeEntityProperty(void 0, "angleBy", e, !1, void 0);
      }), (0, n.A)(this, "handleMVerChange", e => {
        this.props.changeEntityProperty(null, "mVer", e, void 0, void 0);
      }), (0, n.A)(this, "handleSelectStraightLineType", () => {
        this.props.changeEntityProperty(null, "type", void 0, void 0, void 0);
      }), (0, n.A)(this, "handleSelectQuadraticLineType", () => {
        var e = this.props.data,
          t = e.connections,
          r = e.elements,
          n = this.props.getSelectedEntites().filter(e => "quadratic" !== e.type).map(e => {
            var n = f.A.setProp(e, "type", "quadratic");
            if (n.data || (n.data = {}), !n.data.cp) {
              var i = wr.getConnectionPoints(t, r, this.props.refMap, n),
                o = i.from,
                s = i.to,
                a = {
                  dh: y.A.distance2Points(o, s) / 2 / 1.4,
                  df: .5
                };
              n = f.A.set(n, "data.cp", a);
            }
            return n;
          });
        this.props.raiseEntitiesChange(n, !1);
      }), (0, n.A)(this, "handleSelectCubicLineType", () => {
        var e = this.props.data,
          t = e.connections,
          r = e.elements,
          n = this.props.getSelectedEntites().filter(e => "cubic" !== e.type).map(e => {
            var n = f.A.setProp(e, "type", "cubic");
            n.data || (n.data = {});
            var i = wr.getConnectionPoints(t, r, this.props.refMap, n),
              o = i.from,
              s = i.to;
            if (!n.data.cp) {
              var a = {
                dh: y.A.distance2Points(o, s) / 2 / 1.4,
                df: .5
              };
              n = f.A.set(n, "data.cp", a);
            }
            if (!n.data.cp2) {
              var l = {
                dh: y.A.distance2Points(o, s) / 2 / 1.7,
                df: .5
              };
              n = f.A.set(n, "data.cp2", l);
            }
            return n;
          });
        this.props.raiseEntitiesChange(n, !1);
      }), (0, n.A)(this, "onTailChanged", e => {
        this.props.changeEntityProperty(null, "tail", e, void 0, void 0);
      }), (0, n.A)(this, "onShaftChanged", e => {
        this.props.changeEntityProperty(null, "shaft", e, void 0, void 0);
      }), (0, n.A)(this, "onHeadChanged", e => {
        this.props.changeEntityProperty(null, "head", e, void 0, void 0);
      }), (0, n.A)(this, "onMiddleChanged", e => {
        this.props.changeEntityProperty(null, "middle", e, void 0, void 0);
      });
    }
    render() {
      var e = this.props.entities,
        t;
      if (!h().every(e, e => a.w.isDiagramConnectionId(e.id))) return o().createElement("div", null);
      var r = e[0];
      return r ? o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(jt, {
        watch: [r.type]
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("item", {
        title: "Straight Line",
        className: "straight-line-select" + this.getLineTypeSelected(r, void 0),
        onMouseDown: this.handleSelectStraightLineType
      }, o().createElement("svg", null, o().createElement("line", {
        x1: "5",
        y1: "12",
        x2: "23",
        y2: "12",
        stroke: "gray",
        strokeWidth: "1"
      }), o().createElement("circle", {
        cx: "5",
        cy: "12",
        r: "2",
        fill: "green"
      }), o().createElement("circle", {
        cx: "23",
        cy: "12",
        r: "2",
        fill: "green"
      }))), o().createElement("item", {
        title: "Quadratic Curve Line",
        className: "quadratic-line-select" + this.getLineTypeSelected(r, "quadratic"),
        onMouseDown: this.handleSelectQuadraticLineType
      }, o().createElement("svg", null, o().createElement("path", {
        d: "M5,12 Q14,5 23,12",
        stroke: "gray",
        strokeWidth: "1",
        fill: "none"
      }), o().createElement("circle", {
        cx: "5",
        cy: "12",
        r: "2",
        fill: "green"
      }), o().createElement("circle", {
        cx: "23",
        cy: "12",
        r: "2",
        fill: "green"
      }))), o().createElement("item", {
        title: "Cubic Curve Line",
        className: "cubic-line-select" + this.getLineTypeSelected(r, "cubic"),
        onMouseDown: this.handleSelectCubicLineType
      }, o().createElement("svg", null, o().createElement("path", {
        d: "M5,12 C14,2 16,22 23,12",
        stroke: "gray",
        strokeWidth: "1",
        fill: "none"
      }), o().createElement("circle", {
        cx: "5",
        cy: "12",
        r: "2",
        fill: "green"
      }), o().createElement("circle", {
        cx: "23",
        cy: "12",
        r: "2",
        fill: "green"
      }))))), se.A.separator(), o().createElement(jt, {
        watch: [r.tail, r.shaft, r.head, r.middle, r.headScale, r.angleBy, r.mAngleBy, r.mVer]
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(lr.A, {
        part: r.tail,
        onItemSelect: this.onTailChanged
      }), o().createElement(Me, {
        part: r.shaft,
        onItemSelect: this.onShaftChanged
      }), o().createElement(cr.A, {
        part: r.head,
        onItemSelect: this.onHeadChanged
      }), this.renderAngleByDistance(r), se.A.separator(), this.renderMiddleHead(r), se.A.separator(), this.renderHeadScale(r))), se.A.separator(), this.renderBreakInformation(r), this.renderRulerArrowCustomDetails(e)) : o().createElement("div", null);
    }
    renderAngleByDistance(e) {
      var t;
      if ("cubic" == e.type || "quadratic" == e.type) return o().createElement(kr.g, {
        headerName: "Head Angle from Start:",
        angleByDistance: null !== (t = e.angleBy) && void 0 !== t ? t : 0,
        onHAngleAtDistanceChange: this.handleHeadAngleByDistanceChange
      });
    }
    renderMiddleHead(e) {
      var t = {
        borderBottom: "1px solid var(--ui-border, gray)",
        width: 5,
        height: 12,
        marginLeft: 4
      };
      return [o().createElement("div", {
        key: "mdl-1",
        style: t
      }), o().createElement(dr, {
        mVer: e.mVer,
        onMVerChange: this.handleMVerChange,
        key: "amd",
        part: e.middle || "no",
        onItemSelect: this.onMiddleChanged
      }), o().createElement("div", {
        key: "mdl-2",
        style: t
      })];
    }
    renderHeadScale(e) {
      var t;
      return o().createElement(Er.R, {
        headScale: null !== (t = e.headScale) && void 0 !== t ? t : 1,
        onHeadScaleChange: e => {
          this.props.changeEntityProperty(void 0, "headScale", e, !1, void 0);
        }
      });
    }
    getLineTypeSelected(e, t) {
      return e.type == t ? " selected" : "";
    }
    renderBreakInformation(e) {
      return o().createElement(hr, {
        entity: e,
        changeEntityProperty: this.props.changeEntityProperty
      });
    }
    renderRulerArrowCustomDetails(e) {
      return o().createElement(Sr, {
        entities: e,
        diagram: this.props.data,
        changeEntityProperty: this.props.changeEntityProperty
      });
    }
  }
  var Dr = r(78760),
    Pr = r(50888);
  class Mr extends be.A {
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.anchor != this.props.anchor;
    }
    renderComponent() {
      return o().createElement("div", {
        title: "Text Anchor"
      }, this.renderByAnchor(this.props.anchor, () => {}, !1));
    }
    renderByAnchor(e, t) {
      var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      switch (e) {
        case "left-top":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 15,
            cy: 23,
            onClick: () => t("left-top")
          });
        case "top":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 50,
            cy: 23,
            onClick: () => t("top")
          });
        case "top-right":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 85,
            cy: 23,
            onClick: () => t("top-right")
          });
        case "left":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 15,
            cy: 50,
            onClick: () => t("left")
          });
        case "center":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 50,
            cy: 50,
            onClick: () => t("center")
          });
        case "right":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 85,
            cy: 50,
            onClick: () => t("right")
          });
        case "bottom-left":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 15,
            cy: 77,
            onClick: () => t("bottom-left")
          });
        case "bottom":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 50,
            cy: 77,
            onClick: () => t("bottom")
          });
        case "right-bottom":
          return o().createElement(Ir, {
            stopPropagation: r,
            cx: 85,
            cy: 77,
            onClick: () => t("right-bottom")
          });
      }
      return o().createElement(Ir, {
        cx: 50,
        cy: 50,
        onClick: () => t("center"),
        stopPropagation: r
      });
    }
    renderExpandComponent() {
      return o().createElement("div", {
        style: {
          position: "absolute",
          top: 22,
          left: 0,
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
          padding: "3px"
        }
      }, o().createElement("div", {
        style: {
          padding: 5,
          borderBottom: "1px solid var(--ui-border, lightgray)",
          fontSize: 12,
          color: "var(--ui-text-muted, gray)"
        }
      }, "Select Text Anchor:"), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, this.renderByAnchor("left-top", this.props.onAnchorSelect), this.renderByAnchor("top", this.props.onAnchorSelect), this.renderByAnchor("top-right", this.props.onAnchorSelect)), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, this.renderByAnchor("left", this.props.onAnchorSelect), this.renderByAnchor("center", this.props.onAnchorSelect), this.renderByAnchor("right", this.props.onAnchorSelect)), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, this.renderByAnchor("bottom-left", this.props.onAnchorSelect), this.renderByAnchor("bottom", this.props.onAnchorSelect), this.renderByAnchor("right-bottom", this.props.onAnchorSelect)));
    }
  }
  function Ir(e) {
    var t = e.cx,
      r = e.cy,
      n = e.onClick,
      i = e.stopPropagation,
      s = 30,
      a = 20;
    return o().createElement("div", {
      onMouseDown: e => {
        i && e.stopPropagation(), n && n();
      },
      style: {
        border: "1px solid var(--ui-border, lightgray)",
        margin: 5,
        width: s,
        height: a,
        cursor: "pointer",
        background: "var(--ui-surface, white)"
      }
    }, o().createElement("svg", {
      style: {
        width: s,
        height: a
      }
    }, o().createElement("circle", {
      cx: t + "%",
      cy: r + "%",
      r: "4",
      fill: "#4caf4f"
    })));
  }
  class Tr extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRequestFontSizeRatio", () => 1), (0, n.A)(this, "handleMoreSelect", e => "display-style" == e ? this.props.onDisplayStyleChange(!0) : "small-style" == e ? this.props.onDisplayStyleChange(!1) : this.props.onRemove());
    }
    renderTextAnchorSelect(e, t) {
      if (!e.shape.data.size && !this.props.disableAnchor) return [o().createElement("div", {
        key: "k1",
        style: {
          marginTop: -3,
          marginLeft: -5,
          marginRight: -5,
          display: "inline-block"
        }
      }, o().createElement(Mr, {
        anchor: t,
        onAnchorSelect: e => {
          this.props.changeEntityProperty(void 0, "anchor", e, !1, !1);
        }
      })), se.A.separator1()];
    }
    renderMoreOptions() {
      var e;
      return e = this.props.entity.isTextMode || !this.props.sameMode ? [{
        value: "remove",
        display: "Remove Object"
      }] : [{
        value: "display-style",
        display: "Display Style (\\frac has normal size)"
      }, {
        value: "small-style",
        display: "Small Style (\\frac has smaller size)"
      }, {
        value: void 0,
        isSeperator: !0,
        display: ""
      }, {
        value: "remove",
        display: "Remove Object"
      }], o().createElement(Nt.A, {
        containerStyle: {
          width: 250
        },
        caret: !1,
        label: "...",
        items: e,
        onItemSelect: this.handleMoreSelect
      });
    }
    render() {
      var e = this.props.entity,
        t = P.A.getEntityStyle(e, "textColor"),
        r = D.A.getTextSetting(e, "fontSize"),
        n = e.shape && e.shape.anchor || "center";
      return o().createElement(jt, {
        watch: [r, t, n, this.props.sameMode, this.props.fontBaseSize]
      }, o().createElement("main", {
        className: "font-size-container"
      }, this.renderTextAnchorSelect(e, n), o().createElement(Dr.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        value: t,
        onItemSelect: (e, t) => this.props.changeEntityProperty("style", "textColor", e, !1, t)
      }), this.props.sameMode ? o().createElement("div", {
        style: {
          marginTop: 2,
          marginLeft: 4
        }
      }, o().createElement(Pr.A, {
        requestFontSizeRatio: this.handleRequestFontSizeRatio,
        fontBaseSize: this.props.fontBaseSize,
        onChange: e => this.props.changeEntityProperty("settings", "fontSize", e, void 0, void 0),
        value: r
      })) : void 0, se.A.separator(), this.renderMoreOptions(), se.A.separator()));
    }
  }
  class Lr extends o().PureComponent {
    render() {
      var e = this.props.entity,
        t = D.A.getSettings(e, "cornerRadius"),
        r = {
          stroke: "var(--ui-text-muted, gray)",
          fill: "none",
          strokeWidth: 1,
          width: 21,
          height: 14,
          overflow: "visible"
        };
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", {
        className: "font-size-container"
      }, o().createElement($e.A, {
        title: "Corner Radius",
        key: "2",
        unit: "",
        min: 0,
        max: 1e3,
        step: 1,
        value: t,
        icon: re.A.cornerRadius(r),
        onValueChanging: e => this.props.changeEntityProperty("settings", "cornerRadius", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("settings", "cornerRadius", e, !1, t)
      }), se.A.separator()));
    }
  }
  function Rr() {
    return o().createElement("svg", {
      style: {
        width: "17px",
        height: "14px",
        strokeWidth: "1px",
        stroke: "none",
        fill: "green",
        overflow: "visible"
      }
    }, o().createElement("g", {
      style: {
        transform: "translate(1px,3px) scale(0.4,0.4)"
      }
    }, o().createElement("path", {
      d: "M27.998,16c-0.012,6.628-5.373,11.986-11.999,11.998C9.373,27.986,4.012,22.627,4,15.999    C4.012,9.373,9.373,4.012,15.999,4c2.024,0.003,3.928,0.515,5.601,1.402l-2.6,2.6h8.002V0l-2.476,2.476    c-2.47-1.561-5.39-2.475-8.527-2.476C7.164,0.002,0.002,7.164,0,15.999C0.002,24.837,7.164,31.998,15.999,32    C24.835,31.998,31.998,24.838,32,16H27.998z"
    }), o().createElement("path", {
      d: "M10.001,16c0,3.314,2.685,5.999,5.999,6c3.314-0.002,5.999-2.688,5.999-6H22    c-0.001-3.314-2.686-6-6-6.001C12.686,10,10.001,12.686,10.001,16z M19.999,15.999L19.999,15.999    c-0.004,2.21-1.79,3.995-3.999,3.999c-2.208-0.004-3.995-1.789-3.999-3.999C12.005,13.792,13.792,12.004,16,12    C18.209,12.004,19.995,13.79,19.999,15.999z"
    })));
  }
  var Br = r(56069);
  class Fr extends o().PureComponent {
    render() {
      var e = this.props.entity,
        t = Br.A.getDataValue(e, "rotation", 0);
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement($e.A, {
        title: "Rotation in degree",
        disableSlider: !0,
        containerStyle: {
          marginRight: 0
        },
        style: {
          width: 33
        },
        key: "2",
        unit: "",
        decimals: 1,
        min: 0,
        max: 359,
        step: 1,
        value: t,
        icon: Rr(),
        onValueChanging: e => this.props.changeEntityProperty("data", "rotation", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("data", "rotation", e, !1, t)
      }), se.A.separator()));
    }
  }
  function jr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Nr {
    traverse(e) {
      var t = e.entities.map(t => this.traverseSingle(t, e)),
        r,
        n = (x.A.findAllOriginalEditors(e.entities, e.allEditors) || []).map(t => this.handleEditor(t, e));
      return {
        entities: t,
        linkedEditors: n,
        allEditors: this.mergeEditors(n, e.allEditors),
        editorRefMap: e.editorRefMap
      };
    }
    mergeEditors(e, t) {
      if (0 == e.length) return t;
      for (var r = h().clone(t), n = 0; n < e.length; n++) {
        var i = e[n];
        r[i.id] = i;
      }
      return r;
    }
    innerTraverse(e, t) {
      return e.map(e => this.traverseSingle(e, t));
    }
    orNull(e) {
      return e || this.emptyFunc;
    }
    emptyFunc(e, t) {
      return e;
    }
    handleEditor(e, t) {
      return this.orNull(t.handleText)(e, t.data);
    }
    traverseSingle(e, t) {
      if (!e) return null;
      var r = gr.A.getEntityType(e);
      if ("connection" == r) {
        var n = e;
        return gr.A.isStraightConnection(e) ? this.orNull(t.handleStraightConnection)(e, t.data) : gr.A.isQuadraticConnection(n) ? this.orNull(t.handleQuadraticConnection)(e, t.data) : gr.A.isCubicConnection(n) ? this.orNull(t.handleCubicConnection)(e, t.data) : e;
      }
      if ("shape-arrow" == r) return gr.A.isStraightLineArrow(e) ? this.orNull(t.handleStraightArrow)(e, t.data) : this.orNull(t.handleCubicArrow)(e, t.data);
      var i = e;
      if ("shape-composite" == r) return this.orNull(t.handleComposite)(e, t.data);
      if ("shape-object" == r) {
        if (gr.A.isPolygon(i)) return this.orNull(t.handlePolygon)(i, t.data);
        if (gr.A.isPolygonCurve(i)) return this.orNull(t.handlePolygonCurve)(i, t.data);
      }
      if ("text" == r) return this.orNull(t.handleText)(e, t.data);
      if ("group" == r) {
        var o = e,
          s = this.innerTraverse(o.entities, t),
          a = _r(_r({}, o), {}, {
            entities: s
          });
        return this.orNull(t.handleGroupEntity)(a, t.data);
      }
      return e;
    }
  }
  function zr(e) {
    return e.entities.concat(h().values(e.linkedEditors));
  }
  const Hr = new Nr();
  function Wr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Vr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Wr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ur {
    rotateEntities(e, t, r, n, i) {
      return Hr.traverse({
        entities: e,
        allEditors: n,
        data: {
          cp: t,
          rotation: r
        },
        editorRefMap: i,
        handleStraightArrow(e, t) {
          var r = t.cp,
            n = t.rotation;
          return Vr(Vr({}, e), {}, {
            data: e.data.map(e => y.A.pointRotate(e, r, n))
          });
        },
        handleCubicArrow(e, t) {
          var r = t.cp,
            n = t.rotation,
            i,
            o = y.A.toAbsoluteControlPointCubics(e.data).map(e => y.A.bezierRotate(e, r, n));
          return Vr(Vr({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleComposite(e, t) {
          var r = t.cp,
            n = t.rotation,
            i;
          return U.A.getShapeManagement(e).rotateAround(e, n, r);
        },
        handlePolygon(e, t) {
          var r = t.cp,
            n = t.rotation;
          return Vr(Vr({}, e), {}, {
            data: e.data.map(e => y.A.pointRotate(e, r, n))
          });
        },
        handlePolygonCurve(e, t) {
          var r = t.cp,
            n = t.rotation,
            i,
            o = y.A.toAbsoluteControlPointCubics(e.data).map(e => y.A.bezierRotate(e, r, n));
          return Vr(Vr({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleText(e, t) {
          var r = t.cp,
            n = t.rotation,
            i = e.shape.data,
            o = i.rotation,
            s = void 0 === o ? 0 : o,
            a = i.p,
            l = y.A.addRotation360(s, n),
            c = y.A.pointRotate(a, r, n);
          return Vr(Vr({}, e), {}, {
            shape: Vr(Vr({}, e.shape), {}, {
              data: Vr(Vr({}, e.shape.data), {}, {
                p: c,
                rotation: l
              })
            })
          });
        },
        handleGroupEntity(e, t) {
          var r = t.rotation,
            n,
            i = (e.data || {}).rotation,
            o = void 0 === i ? 0 : i;
          return Vr(Vr({}, e), {}, {
            data: Vr(Vr({}, e.data), {}, {
              rotation: y.A.addRotation360(o, r)
            })
          });
        }
      });
    }
  }
  const qr = new Ur();
  var Gr = r(62993);
  function Kr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Zr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Kr(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kr(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Yr {
    skewEntities(e, t, r, n, i) {
      return Hr.traverse({
        entities: e,
        allEditors: n,
        data: {
          cp: t,
          skewX: r
        },
        editorRefMap: i,
        handleStraightArrow(e, t) {
          var r = t.cp,
            n = t.skewX;
          return Zr(Zr({}, e), {}, {
            data: B.A.pointsFromSkew(r, n, e.data)
          });
        },
        handleCubicArrow(e, t) {
          var r = t.cp,
            n = t.skewX,
            i = y.A.toAbsoluteControlPointCubics(e.data),
            o = B.A.genericLinesFromSkewedCenter(r, n, i);
          return Zr(Zr({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleComposite(e, t) {
          var r = t.cp,
            n = t.skewX,
            i;
          return U.A.getShapeManagement(e).skewXAtCenter(e, n, r);
        },
        handlePolygon(e, t) {
          var r = t.cp,
            n = t.skewX;
          return Zr(Zr({}, e), {}, {
            data: B.A.pointsFromSkew(r, n, e.data)
          });
        },
        handlePolygonCurve(e, t) {
          var r = t.cp,
            n = t.skewX,
            i = y.A.toAbsoluteControlPointCubics(e.data),
            o = B.A.genericLinesFromSkewedCenter(r, n, i);
          return Zr(Zr({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleText(e, t) {
          var r = t.cp,
            n = t.skewX;
          if (e.shape.data.size) {
            var i = Gr.A.sizeAbsoluteToFakeRectWrapShape(e),
              o,
              s = U.A.getShapeManagement(i).skewXAtCenter(i, n, r);
            return Gr.A.toSizeAbsoluteEditor(s, e);
          }
          return Zr(Zr({}, e), {}, {
            shape: Zr(Zr({}, e.shape), {}, {
              data: Zr(Zr({}, e.shape.data), {}, {
                p: B.A.pointSkewed(r, n, e.shape.data.p)
              })
            })
          });
        },
        handleGroupEntity: e => e
      });
    }
  }
  const Qr = new Yr();
  class Jr {
    unTransform(e, t, r, n, i, o) {
      var s = qr.rotateEntities(e, n, -t, i, o);
      return Qr.skewEntities(s.entities, n, -r, s.allEditors, o);
    }
    transform(e, t, r, n, i, o) {
      var s = Qr.skewEntities(e, n, r, i, o);
      return qr.rotateEntities(s.entities, n, t, s.allEditors, o);
    }
  }
  const Xr = new Jr();
  var $r = r(92604),
    en = r(7789),
    tn = r(76546);
  function rn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function nn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? rn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class on {
    scaleEntities(e, t, r, n, i) {
      return Hr.traverse({
        entities: e,
        allEditors: n,
        data: {
          from: t,
          to: r,
          editors: n,
          editorRefMap: i
        },
        editorRefMap: i,
        handleStraightArrow(e, t) {
          var r = t.from,
            n = t.to;
          return nn(nn({}, e), {}, {
            data: en.A.scalePoints(e.data, r, n.rect, !!n.isFlipX)
          });
        },
        handleCubicArrow(e, t) {
          var r = t.from,
            n = t.to,
            i,
            o = y.A.toAbsoluteControlPointCubics(e.data).map(e => en.A.scalePropertyInData(e, ["p1", "cp", "cp2", "p2"], r, n.rect, !!n.isFlipX));
          return nn(nn({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleComposite(e, t) {
          var r = t.from,
            n = t.to,
            i;
          return U.A.getShapeManagement(e).scale(e, r, n.rect, !!n.isFlipX);
        },
        handlePolygon(e, t) {
          var r = t.from,
            n = t.to;
          return nn(nn({}, e), {}, {
            data: en.A.scalePoints(e.data, r, n.rect, !!n.isFlipX)
          });
        },
        handlePolygonCurve(e, t) {
          var r = t.from,
            n = t.to,
            i,
            o = y.A.toAbsoluteControlPointCubics(e.data).map(e => en.A.scalePropertyInData(e, ["p1", "cp", "cp2", "p2"], r, n.rect, !!n.isFlipX));
          return nn(nn({}, e), {}, {
            data: o.map(e => y.A.toRelativeControlPointCubic(e))
          });
        },
        handleText(e, t) {
          var r = t.editorRefMap[e.id];
          return an(e, t, r);
        },
        handleQuadraticConnection(e, t) {
          var r = t.from,
            n = t.to,
            i = t.editors,
            o = t.editorRefMap,
            s = ln(i, e, r, n, o);
          return nn(nn({}, e), {}, {
            data: nn(nn({}, e.data), {}, {
              cp: nn(nn({}, e.data.cp), {}, {
                dh: e.data.cp.dh * s
              })
            })
          });
        },
        handleCubicConnection(e, t) {
          var r = t.from,
            n = t.to,
            i = t.editors,
            o = t.editorRefMap,
            s = ln(i, e, r, n, o);
          return nn(nn({}, e), {}, {
            data: nn(nn({}, e.data), {}, {
              cp: nn(nn({}, e.data.cp), {}, {
                dh: e.data.cp.dh * s
              }),
              cp2: nn(nn({}, e.data.cp2), {}, {
                dh: e.data.cp2.dh * s
              })
            })
          });
        }
      });
    }
  }
  var sn = (e, t) => {
      var r = t.from,
        n = t.to,
        i = Gr.A.sizeAbsoluteToFakeRectWrapShape(e),
        o,
        s = U.A.getShapeManagement(i).scale(i, r, n.rect, !!n.isFlipX);
      return Gr.A.toSizeAbsoluteEditor(s, e);
    },
    an = (e, t, r) => {
      var n = t.from,
        i = t.to;
      if (e.shape.data.size) return sn(e, {
        from: n,
        to: i
      });
      var o = e.shape.data.flipX,
        s = r.editor.parentElement,
        a = R.x.calculateCenterPoint(e, s),
        l = en.A.scalePoint(a, n, i.rect, i.isFlipX),
        c = (i.isFlipX ? !o : o) || void 0,
        d = e.shape.data.skewX,
        h = l,
        p = e.shape.data.rotation,
        u = e.shape.data,
        g;
      if (i.isFlipX) {
        var m = tn.A.buildTransformedRectForEditor(s, e),
          f;
        u = {
          rotation: p = tn.A.flipHorizontally(m).rotation,
          skewX: d = -d
        };
      }
      return e.shape.anchor && "center" != e.shape.anchor && (h = R.x.getSamplePosition(e.shape.anchor, s.offsetWidth, s.offsetHeight, u, l)), nn(nn({}, e), {}, {
        shape: nn(nn({}, e.shape), {}, {
          data: nn(nn({}, e.shape.data), {}, {
            p: h,
            flipX: c,
            rotation: p,
            skewX: d
          })
        })
      });
    },
    ln = (e, t, r, n, i) => {
      var o = e[t.fromEditorId],
        s = e[t.toEditorId],
        a = i[t.fromEditorId],
        l = i[t.toEditorId],
        c = an(o, {
          from: r,
          to: n
        }, a),
        d = an(s, {
          from: r,
          to: n
        }, l),
        h = y.A.distance2Points(c.shape.data.p, d.shape.data.p) / y.A.distance2Points(o.shape.data.p, s.shape.data.p);
      return Math.max(h * (n.isFlipX ? -1 : 1), .1);
    };
  const cn = new on();
  var dn = r(79230),
    hn = r(88925),
    pn = r(33272),
    un = r(20418);
  function gn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function mn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class fn extends o().PureComponent {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "onMoving", (e, t, r) => {
        var n = {
            x: t.left,
            y: t.top
          },
          i = {
            x: r.downPoint.left,
            y: r.downPoint.top
          },
          o = y.A.angleFrom3Points360(i, n, this.props.center);
        this.props.onPointMoving(n, o);
      }), (0, n.A)(this, "handleRotationControlPoint", e => {
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body), this.movingHandler.mouseDown(e, {});
      }), this.movingHandler = new un.X({}, this.props.getDZContainer), this.movingHandler.onMoving = this.onMoving, this.movingHandler.onMoved = e => {
        !e.didMove && this.props.onSelect && this.props.onSelect(), this.props.onPointMoved();
      }, this.movingHandler.onMovingStarted = () => {
        this.props.onPointMovingStarted && this.props.onPointMovingStarted();
      };
    }
    getZoomRatio() {
      return this.props.getDZContainer().zoomRatio;
    }
    render() {
      var e = this.props.point,
        t = this.getZoomRatio(),
        r = pn.A.getRotationRadius() / t;
      return o().createElement("g", null, this.renderSuplementLine(e), o().createElement(Tt.F, {
        onTouchOrMouseDown: this.handleRotationControlPoint
      }, o().createElement("g", {
        className: "test-rotation-control-point",
        style: mn(mn({}, dn.A.baseStyle(t)), {}, {
          transform: P.A.buildTranslateStyleTransform(e.x - r, e.y - r)
        })
      }, o().createElement("g", {
        style: {
          fill: "orange",
          strokeWidth: 1 / t,
          stroke: "white"
        }
      }, o().createElement("circle", {
        className: "drcp",
        cx: r,
        cy: r,
        r
      })))));
    }
    renderSuplementLine(e) {
      if (this.props.renderGuideLine) {
        var t = this.props.center,
          r = this.getZoomRatio();
        return o().createElement("line", {
          x1: t.x,
          y1: t.y,
          x2: e.x,
          y2: e.y,
          style: {
            stroke: "gray",
            strokeOpacity: .3,
            strokeWidth: 1 / r,
            fill: "none"
          }
        });
      }
    }
  }
  class yn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originalInfo", void 0), (0, n.A)(this, "onMoved", () => {
        this.originalInfo = null, this.props.onEntitiesMoved();
      }), (0, n.A)(this, "onPointMovingStarted", () => {
        var e = this.props,
          t = e.rect,
          r = e.rotation,
          n = e.entities,
          i = e.diagram;
        this.originalInfo = {
          rect: t,
          rotation: r,
          diagram: i,
          entities: n
        };
      }), (0, n.A)(this, "onMoving", (e, t) => {
        var r = this.originalInfo,
          n = r.diagram,
          i = r.entities,
          o = r.rotation,
          s = r.rect,
          a = y.A.getCenterPoint(s),
          l = qr.rotateEntities(i, a, t, n.elements, this.props.editorRef);
        this.props.onEntitiesMoving(zr(l), y.A.addRotation360(o, t), this.originalInfo);
      });
    }
    render() {
      var e = this.props,
        t = e.rect,
        r = e.rotation,
        n = dn.A.getRotationPoint(t, r, this.props.getDZContainer()),
        i = y.A.getCenterPoint(t);
      return o().createElement(fn, {
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        onSelect: this.props.onSelect,
        getRootElement: this.props.getRootElement,
        point: n.p,
        center: i,
        onPointMoved: this.onMoved,
        onPointMoving: this.onMoving,
        onPointMovingStarted: this.onPointMovingStarted,
        renderGuideLine: !0
      });
    }
    requestRotate(e) {
      var t = "clockwise" == e ? 90 : -90,
        r = this.props,
        n = r.rect,
        i = r.rotation,
        o = r.entities,
        s = r.diagram,
        a = r.editorRef,
        l = y.A.getCenterPoint(n),
        c = qr.rotateEntities(o, l, t, s.elements, a);
      this.props.onEntitiesMoving(zr(c), y.A.addRotation360(i, t), {
        rect: n
      }), L.A.next(() => {
        this.props.onEntitiesMoved();
      });
    }
  }
  function vn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class xn extends o().PureComponent {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "onMoving", (e, t, r) => {
        var n = r.customData,
          i = n.rect,
          o = n.untransformedEntities,
          s = o.allEditors,
          a = o.entities,
          l = this.props,
          c = l.rotation,
          d = void 0 === c ? 0 : c,
          h = l.editorRef,
          p = {
            x: t.left,
            y: t.top
          },
          u = y.A.getCenterPoint(i),
          g = y.A.pointRotate(p, u, -d),
          m = B.A.skewXAngleFromDisplacement(i, {
            x: i.p1.x,
            y: i.p2.y
          }, g),
          f = Xr.transform(a, d, m, u, s, h);
        this.props.onEntityMoving(zr(f), m, r.customData);
      }), (0, n.A)(this, "handleSkewControlPointStart", e => {
        var t = this.props,
          r = t.entities,
          n = t.rect,
          i = t.skewX,
          o = void 0 === i ? 0 : i,
          s = t.rotation,
          a = void 0 === s ? 0 : s,
          l = t.diagram,
          c = t.editorRef;
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body);
        var d = y.A.getCenterPoint(n),
          h = Xr.unTransform(r, a, o, d, l.elements, c);
        this.movingHandler.mouseDown(e, {
          entities: r,
          rect: n,
          originalSkewX: o || 0,
          untransformedEntities: h
        });
      }), this.movingHandler = new un.X({}, this.props.getDzContainer), this.movingHandler.onMoving = this.onMoving, this.movingHandler.onMoved = () => {
        this.props.onEntityMoved();
      };
    }
    render() {
      var e = this.props,
        t = e.rect,
        r = e.skewX,
        n = e.rotation,
        i = B.A.rectTo4PointsSkewed(t, r),
        s,
        a = (0, l.A)(i, 4)[3],
        c = y.A.getCenterPoint(t),
        d = this.props.getDzContainer().zoomRatio,
        h = y.A.pointRotate({
          x: a.x,
          y: a.y + pn.A.skewControlDistance() / d
        }, c, n),
        p = (b.A.isMobileOrTablet() ? 7 : 4) / d;
      return o().createElement(Tt.F, {
        key: "skew-p",
        onTouchOrMouseDown: this.handleSkewControlPointStart
      }, o().createElement("g", {
        style: bn(bn({}, dn.A.baseStyle(d)), {}, {
          transform: P.A.buildTranslateStyleTransform(h.x, h.y, n)
        })
      }, o().createElement("rect", {
        className: "dscp",
        transform: "skewX(-30)",
        x: -p,
        y: -p,
        width: 2 * p,
        height: 2 * p,
        fill: "orange",
        stroke: "white",
        strokeWidth: 1 / d
      })));
    }
  }
  var Cn = r(96860),
    Sn = r(15783);
  class An {
    detect(e, t, r, n, i) {
      var o = Cn.A.detectPointFromSnapablePoints(e, n, i);
      if (o) return o.snapPoint;
      var s = Sn.A.detectWithPoints(t, r, [e], i);
      if (s) switch (s.type) {
        case "horizontal":
          return {
            x: e.x,
            y: s.snapPoint.y
          };
        case "vertical":
          return {
            x: s.snapPoint.x,
            y: e.y
          };
        case "both":
          return {
            x: s.vSnapPoint.x,
            y: s.hSnapPoint.y
          };
      }
    }
  }
  const wn = new An();
  function En(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function kn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? En(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : En(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class On extends o().PureComponent {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        pointAround: void 0
      }), (0, n.A)(this, "centralPointMh", new un.X({}, this.props.getDZContainer)), (0, n.A)(this, "pointAroundMh", new un.X({}, this.props.getDZContainer)), (0, n.A)(this, "pointAroundMoving", (e, t, r, n) => {
        var i = {
          x: t.left,
          y: t.top
        };
        if (n.ctrlKey) this.setState({
          pointAround: i
        });else {
          var o = r.customData,
            s = o.snapablePoints,
            a = o.dzc,
            l = wn.detect(i, this.props.diagramModel.verticalGuides || [], this.props.diagramModel.horizontalGuides || [], s, 5 / a.zoomRatio);
          l ? this.setState({
            pointAround: l
          }) : this.setState({
            pointAround: i
          });
        }
      }), (0, n.A)(this, "handleOnCentrolPointMoving", (e, t, r) => {
        var n = {
            x: t.left,
            y: t.top
          },
          i = {
            x: r.downPoint.left,
            y: r.downPoint.top
          },
          o = this.getPointToRotateAround(),
          s = y.A.angleFrom3Points360(i, n, o);
        this.props.onRotating(o, s);
      }), (0, n.A)(this, "handleCentralPointMouseDown", e => {
        this.centralPointMh.setBaseElement(this.props.getRootElement()), this.centralPointMh.mouseDown(e, {
          centralPoint: this.props.centralPoint
        });
      }), (0, n.A)(this, "handlePointAroundMouseDown", e => {
        this.pointAroundMh.setBaseElement(this.props.getRootElement());
        var t = Cn.A.getSnapablePointsFromShapesInfo({
          editors: S.A.getDiagramEditors(this.props.diagramModel.elements),
          frameInfo: this.props.getEditorFrameInfo(),
          shapes: this.props.diagramModel.shapes
        });
        this.pointAroundMh.mouseDown(e, {
          centralPoint: this.props.centralPoint,
          snapablePoints: t,
          dzc: this.props.getDZContainer()
        });
      }), this.centralPointMh.onMoved = () => {
        this.props.onRotated();
      }, this.centralPointMh.onMoving = this.handleOnCentrolPointMoving, this.centralPointMh.onMovingStarted = () => {
        this.props.onRotatingStarted();
      }, this.pointAroundMh.onMoved = () => {
        this.state.pointAround && (this.props.onSubSelectionChanged(kn(kn({}, this.props.subSelection), {}, {
          point: this.state.pointAround
        })), this.setState({
          pointAround: void 0
        }));
      }, this.pointAroundMh.onMoving = this.pointAroundMoving;
    }
    getPointToRotateAround() {
      return this.state.pointAround || this.props.subSelection.point;
    }
    render() {
      return o().createElement("g", null, this.renderRotationAround());
    }
    renderRotationAround() {
      var e = this.props.centralPoint,
        t = this.getPointToRotateAround(),
        r = this.props.getDZContainer().zoomRatio,
        n = pn.A.getRotationRadius() / r,
        i = o().createElement(Tt.F, {
          key: "central-p",
          onTouchOrMouseDown: this.handleCentralPointMouseDown
        }, o().createElement("circle", {
          className: "test-rotate-around-central-shape-point",
          style: {
            pointerEvents: "visiblepainted",
            cursor: "crosshair"
          },
          cx: e.x,
          cy: e.y,
          r: n,
          fill: "orange",
          stroke: "white",
          strokeWidth: 1 / r
        })),
        s = o().createElement(Tt.F, {
          key: "rotate-around",
          onTouchOrMouseDown: this.handlePointAroundMouseDown
        }, o().createElement("g", null, o().createElement("circle", {
          className: "test-rotate-around-point",
          style: {
            pointerEvents: "visiblepainted",
            cursor: "crosshair"
          },
          cx: t.x,
          cy: t.y,
          r: n,
          fill: "orange",
          stroke: "white",
          strokeWidth: 1 / r
        }), o().createElement("path", {
          stroke: "#a06802",
          strokeWidth: 1 / r,
          d: "M".concat(t.x - n + 1, ",").concat(t.y, " L").concat(t.x + n - 1 / r, ",").concat(t.y, " M").concat(t.x, ",").concat(t.y - n + 1, " L").concat(t.x, ",").concat(t.y + n - 1 / r)
        }))),
        a;
      return [o().createElement("line", {
        key: "rotate-around-connect",
        x1: e.x,
        x2: t.x,
        y1: e.y,
        y2: t.y,
        strokeDasharray: "".concat(4 / r, " ").concat(2 / r),
        stroke: "orange",
        strokeWidth: 1 / r
      }), i, s];
    }
  }
  var Dn = r(33535);
  function Pn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Mn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Pn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class In extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originalInfo", void 0), (0, n.A)(this, "handleRotatingAround", (e, t) => {
        var r = this.originalInfo,
          n = r.diagram,
          i = r.entities,
          o = r.rotation,
          s = r.rect,
          a = qr.rotateEntities(i, e, t, n.elements, this.props.editorRef),
          l = this.rotateAroundBoundingRect(s, t, e, o);
        this.props.onEntitiesMoving(zr(a), y.A.addRotation360(o, t), {
          rect: l
        });
      }), (0, n.A)(this, "handleRotatedAround", () => {
        this.originalInfo = null, this.props.onEntitiesMoved();
      }), (0, n.A)(this, "handleRotatingStarted", () => {
        var e = this.props,
          t = e.rect,
          r = e.rotation,
          n = e.entities,
          i = e.diagram;
        this.originalInfo = {
          rect: t,
          rotation: r,
          diagram: i,
          entities: n
        };
      });
    }
    render() {
      var e = this.props.rect,
        t = y.A.getCenterPoint(e);
      return o().createElement(On, {
        key: "rotation-around",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        onRotating: this.handleRotatingAround,
        onRotated: this.handleRotatedAround,
        onRotatingStarted: this.handleRotatingStarted,
        centralPoint: t,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        diagramModel: this.props.diagram,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        subSelection: this.props.subSelection,
        getRootElement: this.props.getRootElement
      });
    }
    rotateAroundBoundingRect(e, t, r, n) {
      var i = Dn.A.rectTo4Points(Mn(Mn({}, e), {}, {
          rotation: n
        })),
        o = y.A.pointsRotate(i, r, t),
        s = Dn.A.threePointsToRectangleInfo(o[0], o[1], o[2]);
      return Mn(Mn({}, e), {}, {
        p1: s.p1,
        p2: s.p2
      });
    }
  }
  var Tn = r(20243);
  function Ln(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Rn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ln(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ln(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bn extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "groupBoxRotationControlRef", void 0), (0, n.A)(this, "movingHandler", new un.X({}, this.props.getDZContainer)), (0, n.A)(this, "lastRenderedRect", void 0), (0, n.A)(this, "handleControlMouseDown", (e, t) => {
        this.movingHandler.setBaseElement(this.props.getRootElement());
        var r = this.getGroupBoxRect(),
          n = y.A.getCenterPoint(r),
          i = this.props,
          o = i.entities,
          s = i.skewX,
          a = void 0 === s ? 0 : s,
          l = i.rotation,
          c = void 0 === l ? 0 : l,
          d = i.diagram,
          h = i.editorRef,
          p = Xr.unTransform(o, c, a, n, d.elements, h);
        this.movingHandler.mouseDown(e, {
          cpInfo: t,
          rect: r,
          startEntities: this.props.entities,
          diagram: this.props.diagram,
          untransformedEntities: p
        });
      }), (0, n.A)(this, "onMouseMoving", (e, t, r, n) => {
        var i = r.customData,
          o = i.cpInfo,
          s = i.diagram,
          a = i.rect,
          l = i.untransformedEntities,
          c = te.A.getGridSizeIfSnapEnabled(s, n),
          d = n.shiftKey,
          h = n.altKey,
          p = y.A.snapToGridSize({
            x: t.left,
            y: t.top
          }, c);
        if ("skew-x" != o.pos) {
          var u = Dn.A.moveControlPoint(o.pos, a, p, {
              keepRatio: d,
              symmetricResize: h
            }),
            g = this.transformToNewRect(l, a, u);
          this.props.onEntitiesChanging(zr(g), u.rotation, u.skewX), this.setState({
            tempRect: u
          }), r.customData.entities = g;
        }
      }), (0, n.A)(this, "handleRotationEntitiesMoving", (e, t, r) => {
        this.setState({
          tempRect: Rn(Rn({}, r.rect), {}, {
            rotation: t
          })
        }), this.props.onEntitiesChanging(e, t, this.props.skewX);
      }), (0, n.A)(this, "handleEntitiesMoved", () => {
        this.setState({
          tempRect: void 0
        }), this.props.onEntitiesChanged(this.props.entities, this.props.rotation, this.props.skewX);
      }), (0, n.A)(this, "handleRotationSelect", e => {
        this.requestRotateAround(e);
      }), (0, n.A)(this, "handleGroupBoxRotationControlRef", e => {
        this.groupBoxRotationControlRef = e;
      }), (0, n.A)(this, "handleSkewXEntitiesMoving", (e, t, r) => {
        this.setState({
          tempRect: Rn(Rn({}, r.rect), {}, {
            skewX: t
          })
        }), this.props.onEntitiesChanging(e, this.props.rotation, t);
      }), this.movingHandler.onMoving = this.onMouseMoving, this.movingHandler.onMoved = e => {
        var t = this.state.tempRect;
        this.setState({
          tempRect: void 0
        }), e.customData.entities && t && this.props.onEntitiesChanged(zr(e.customData.entities), t.rotation, t.skewX);
      }, this.state = {};
    }
    resize(e, t, r) {
      this.raiseChangeByNewRect(r => {
        var n;
        return Rn(Rn({}, r), {}, {
          p2: {
            x: r.p1.x + e,
            y: r.p1.y + t
          }
        });
      }, r);
    }
    getBoundingRect() {
      return this.state.tempRect || this.lastRenderedRect;
    }
    allowRequestAction(e) {
      return "rotate-flip" == e;
    }
    rotateByRequest(e) {
      switch (e) {
        case "clockwise":
        case "couter-clockwise":
          return void (this.groupBoxRotationControlRef && this.groupBoxRotationControlRef.requestRotate(e));
        case "flip-horizontally":
        case "flip-vertically":
          return this.handleFlip(e);
        case "show-rotate-around":
          return this.requestRotateAround(this.getGroupBoxRect());
        case "flip-to-line-through-point":
        case "flip-to-point":
          return this.handleFlipAround(e);
      }
    }
    handleFlipAround(e) {
      if (this.props.subSelection && "rotation-around" == this.props.subSelection.type) {
        var t = this.props.subSelection;
        this.raiseChangeByNewRect(r => {
          var n;
          return "flip-to-line-through-point" == e ? tn.A.flipToLineThroughPoint(r, t.point) : tn.A.flipToPoint(r, t.point);
        });
      }
    }
    handleFlip(e) {
      this.raiseChangeByNewRect(t => "flip-horizontally" == e ? tn.A.flipHorizontally(t) : tn.A.flipVertically(t));
    }
    raiseChangeByNewRect(e, t) {
      var r = this.getGroupBoxRect(),
        n = y.A.getCenterPoint(r),
        i = this.props,
        o = i.entities,
        s = i.skewX,
        a = void 0 === s ? 0 : s,
        l = i.rotation,
        c = void 0 === l ? 0 : l,
        d = i.diagram,
        h = i.editorRef,
        p = Xr.unTransform(o, c, a, n, d.elements, h),
        u = e(r),
        g = this.transformToNewRect(p, r, u);
      this.props.onEntitiesChanged(zr(g), u.rotation, u.skewX, t);
    }
    transformToNewRect(e, t, r) {
      var n = e.entities,
        i = e.allEditors,
        o = this.props.editorRef,
        s = cn.scaleEntities(n, t, {
          rect: {
            p1: r.p1,
            p2: r.p2
          },
          isFlipX: !!r.flipX
        }, i, o),
        a = y.A.getCenterPoint(r),
        l = Qr.skewEntities(s.entities, a, r.skewX, s.allEditors, o);
      return qr.rotateEntities(l.entities, a, r.rotation, l.allEditors, o);
    }
    getColorTheme() {
      return this.props.colorTheme || "green";
    }
    render() {
      var e = this.props.entities;
      if (!e || 0 == e.length) return o().createElement("g", null);
      var t = this.state.tempRect || this.getGroupBoxRect();
      this.lastRenderedRect = t;
      var r = y.A.getCenterPoint(t),
        n = Dn.A.rectTo4Points(Rn(Rn({}, t), {}, {
          skewX: this.getSkewX(),
          rotation: this.getRotation()
        })),
        i = y.A.pointsToLines(n, !0),
        s = hn.A.pathsD(i),
        a = this.props.getDZContainer().zoomRatio;
      return o().createElement("g", null, o().createElement("path", {
        d: s,
        fill: "none",
        style: {
          strokeWidth: 1 / a,
          stroke: this.getColorTheme(),
          strokeDasharray: "".concat(5 / a, " ").concat(5 / a)
        }
      }), this.renderGroupBoxMove(r), o().createElement("g", {
        role: "group-resize-container"
      }, this.renderGroupResize(t)), o().createElement("g", null, this.renderRotateAround(t)), o().createElement("g", null, this.getRotationControlPoint(t)), o().createElement("g", null, this.getSkewPoint(t)));
    }
    renderGroupBoxMove(e) {
      if (!this.props.subSelection || "rotation-around" != this.props.subSelection.type) {
        var t = this.props.getDZContainer().zoomRatio;
        return o().createElement(Tt.F, {
          onTouchOrMouseDown: e => this.props.onGroupMouseDown(e)
        }, o().createElement("g", {
          className: "group-box-move",
          style: {
            cursor: "move",
            transform: new Tn.Z().orgin(e.x, e.y).rotate(this.getRotation(), "deg").toCssStyle(),
            pointerEvents: "visiblePainted"
          }
        }, o().createElement("rect", {
          x: e.x - 10 / t,
          y: e.y - 10 / t,
          width: 20 / t,
          height: 20 / t,
          style: {
            fill: "rgba(255, 255, 255, 0.59)",
            stroke: this.getColorTheme(),
            strokeWidth: 1 / t
          }
        }), o().createElement("g", {
          style: {
            transform: new Tn.Z().translate(e.x - 9 / t, e.y - 9 / t).scale(.035 / t).toCssStyle(),
            fill: this.getColorTheme()
          }
        }, re.A.arrowAltPath)));
      }
    }
    renderRotateAround(e) {
      if (this.props.subSelection && "rotation-around" == this.props.subSelection.type) return o().createElement(In, {
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        key: "rotation-around",
        rect: e,
        editorRef: this.props.editorRef,
        diagram: this.props.diagram,
        rotation: this.getRotation(),
        entities: this.props.entities,
        getRootElement: this.props.getRootElement,
        onEntitiesMoved: this.handleEntitiesMoved,
        onEntitiesMoving: this.handleRotationEntitiesMoving,
        subSelection: this.props.subSelection,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        onSubSelectionChanged: this.props.onSubSelectionChanged
      });
    }
    requestRotateAround(e) {
      if (!this.props.subSelection) {
        var t = y.A.getCenterPoint(e);
        this.props.onSubSelectionChanged({
          type: "rotation-around",
          point: {
            x: t.x - 50,
            y: t.y
          }
        });
      }
    }
    getRotationControlPoint(e) {
      return o().createElement(yn, {
        key: "rotation-cp",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        ref: this.handleGroupBoxRotationControlRef,
        editorRef: this.props.editorRef,
        onSelect: () => this.handleRotationSelect(e),
        rect: e,
        diagram: this.props.diagram,
        rotation: this.getRotation(),
        entities: this.props.entities,
        getRootElement: this.props.getRootElement,
        onEntitiesMoved: this.handleEntitiesMoved,
        onEntitiesMoving: this.handleRotationEntitiesMoving
      });
    }
    getSkewPoint(e) {
      return o().createElement(xn, {
        selectedSessionId: this.props.selectedSessionId,
        editorRef: this.props.editorRef,
        skewX: this.getSkewX(),
        rect: e,
        diagram: this.props.diagram,
        rotation: this.getRotation(),
        entities: this.props.entities,
        getRootElement: this.props.getRootElement,
        onEntityMoving: this.handleSkewXEntitiesMoving,
        onEntityMoved: this.handleEntitiesMoved,
        getDzContainer: this.props.getDZContainer
      });
    }
    getRotation() {
      return null != this.state.tempRect ? this.state.tempRect.rotation || 0 : this.props.rotation || 0;
    }
    getSkewX() {
      return null != this.state.tempRect ? this.state.tempRect.skewX || 0 : this.props.skewX || 0;
    }
    getGroupBoxRect() {
      var e = this.props,
        t = e.entities,
        r = e.diagram,
        n = e.editorRef,
        i = e.rotation,
        o = void 0 === i ? 0 : i,
        s = e.skewX,
        a = void 0 === s ? 0 : s,
        l;
      return Rn(Rn({}, Fn(o, a, t, r.elements, n)), {}, {
        rotation: o,
        skewX: a
      });
    }
    renderGroupResize(e) {
      var t = Dn.A.rectTo4Points(Rn(Rn({}, e), {}, {
          skewX: this.getSkewX(),
          rotation: this.getRotation()
        })),
        r = (0, l.A)(t, 4),
        n = r[0],
        i = r[1],
        s = r[2],
        a = r[3],
        c = y.A.getMiddlePointLine(n, a),
        d = y.A.getMiddlePointLine(n, i),
        h = y.A.getMiddlePointLine(i, s),
        p = y.A.getMiddlePointLine(s, a),
        u = this.props.getDZContainer().zoomRatio,
        g = pn.A.getRectControlSize() / u,
        m;
      return [{
        pos: "left-top",
        point: n,
        cursor: "nwse-resize"
      }, {
        pos: "top",
        point: d,
        cursor: "ns-resize"
      }, {
        pos: "top-right",
        point: i,
        cursor: "nesw-resize"
      }, {
        pos: "right",
        point: h,
        cursor: "ew-resize"
      }, {
        pos: "right-bottom",
        point: s,
        cursor: "nwse-resize"
      }, {
        pos: "bottom",
        point: p,
        cursor: "ns-resize"
      }, {
        pos: "bottom-left",
        point: a,
        cursor: "nesw-resize"
      }, {
        pos: "left",
        point: c,
        cursor: "ew-resize"
      }].map(e => {
        var t = e.pos,
          r = e.point,
          n = e.cursor,
          i = Rn(Rn({}, dn.A.baseStyle(u)), {}, {
            opacity: .7,
            cursor: n,
            transform: new Tn.Z().orgin(r.x, r.y).rotate(this.getRotation(), "deg").toCssStyle()
          });
        return o().createElement(Tt.F, {
          key: t,
          onTouchOrMouseDown: t => this.handleControlMouseDown(t, e)
        }, o().createElement("rect", {
          className: "drectcp",
          x: r.x - g / 2,
          y: r.y - g / 2,
          style: i,
          width: g,
          height: g,
          fill: this.getColorTheme(),
          stroke: "white",
          strokeWidth: 1 / u
        }));
      });
    }
  }
  function Fn(e, t, r, n, i) {
    if (e || t) {
      var o = {
          x: 0,
          y: 0
        },
        s = qr.rotateEntities(r, o, -e, n, i),
        a = $r.A.getFromEntities(s.entities, {
          editorRef: i,
          editors: s.allEditors
        }),
        l = y.A.getCenterPoint(a),
        c = Qr.skewEntities(s.entities, l, -t, s.allEditors, i),
        d = $r.A.getFromEntities(c.entities, {
          editorRef: i,
          editors: c.allEditors
        }),
        h = y.A.getCenterPoint(d),
        p = y.A.pointRotate(h, o, e);
      return y.A.moveRectBy2Points(d, h, p);
    }
    return $r.A.getFromEntities(r, {
      editorRef: i,
      editors: n
    });
  }
  function jn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Nn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originalInfo", void 0), (0, n.A)(this, "handleValueChanging", e => {
        this.rotateEntity(e, !0, !0);
      }), (0, n.A)(this, "handleValueChanged", (e, t) => {
        this.rotateEntity(e, !1, t), this.originalInfo = null;
      });
    }
    calculateOriginalInfo() {
      var e = this.props,
        t = e.entity,
        r = e.allEditors,
        n = e.allEditorRef,
        i = t.data || {},
        o = i.rotation,
        s = void 0 === o ? 0 : o,
        a = i.skewX,
        l = void 0 === a ? 0 : a;
      if (!this.originalInfo) {
        var c = Fn(s, l, t.entities, r, n),
          d = y.A.getCenterPoint(c);
        this.originalInfo = {
          entity: t,
          unrotatedEntities: Xr.unTransform(t.entities, s, 0, d, r, n),
          rect: c
        };
      }
      return this.originalInfo;
    }
    rotateEntity(e, t, r) {
      var n = this.calculateOriginalInfo(),
        i = n.rect,
        o = n.unrotatedEntities,
        s = n.entity,
        a = y.A.getCenterPoint(i),
        l = qr.rotateEntities(o.entities, a, e, o.allEditors, this.props.allEditorRef),
        c = _n(_n({}, s), {}, {
          data: _n(_n({}, s.data), {}, {
            rotation: e
          })
        });
      this.props.onEntityChanged(zr(l), c, t, r);
    }
    render() {
      var e = this.props.entity,
        t = Br.A.getDataValue(e, "rotation", 0);
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement($e.A, {
        title: "Rotation in degree",
        disableSlider: !0,
        containerStyle: {
          marginRight: 0
        },
        decimals: 1,
        style: {
          width: 33
        },
        key: "2",
        unit: "",
        min: 0,
        max: 359,
        step: 1,
        value: t,
        icon: Rr(),
        onValueChanging: this.handleValueChanging,
        onValueChanged: this.handleValueChanged
      }), se.A.separator()));
    }
  }
  function zn() {
    return o().createElement("svg", {
      style: {
        width: "14px",
        height: "14px",
        strokeWidth: "1px",
        stroke: "none",
        fill: "green",
        overflow: "visible"
      }
    }, o().createElement("rect", {
      transform: "skewX(-30)",
      x: 4,
      y: 4,
      width: 10,
      height: 10,
      fill: "orange",
      stroke: "white"
    }));
  }
  function Hn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Wn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Hn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Vn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originalInfo", void 0), (0, n.A)(this, "handleValueChanging", e => {
        this.rotateEntity(e, !0, !0);
      }), (0, n.A)(this, "handleValueChanged", (e, t) => {
        this.rotateEntity(e, !1, t), this.originalInfo = null;
      });
    }
    calculateOriginalInfo() {
      var e = this.props,
        t = e.entity,
        r = e.allEditors,
        n = e.allEditorRef,
        i = t.data || {},
        o = i.rotation,
        s = void 0 === o ? 0 : o,
        a = i.skewX,
        l = void 0 === a ? 0 : a;
      if (!this.originalInfo) {
        var c = Fn(s, l, t.entities, r, n),
          d = y.A.getCenterPoint(c);
        this.originalInfo = {
          entity: t,
          untransformedEntities: Xr.unTransform(t.entities, s, l, d, r, n),
          rect: c,
          rotation: s
        };
      }
      return this.originalInfo;
    }
    rotateEntity(e, t, r) {
      var n = this.calculateOriginalInfo(),
        i = n.rect,
        o = n.untransformedEntities,
        s = n.entity,
        a = n.rotation,
        l = y.A.getCenterPoint(i),
        c = Xr.transform(o.entities, a, e, l, o.allEditors, this.props.allEditorRef),
        d = Wn(Wn({}, s), {}, {
          data: Wn(Wn({}, s.data), {}, {
            skewX: e
          })
        });
      this.props.onEntityChanged(zr(c), d, t, r);
    }
    render() {
      var e = this.props.entity,
        t = Br.A.getDataValue(e, "skewX", 0);
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement($e.A, {
        title: "Skew X in degree",
        disableSlider: !0,
        containerStyle: {
          marginRight: 0
        },
        style: {
          width: 30
        },
        key: "2",
        unit: "°",
        min: -85,
        max: 85,
        step: 1,
        value: t,
        decimals: 1,
        icon: zn(),
        onValueChanging: this.handleValueChanging,
        onValueChanged: this.handleValueChanged
      }), se.A.separator()));
    }
  }
  class Un extends o().PureComponent {
    render() {
      var e = this.props.entity,
        t = Br.A.getDataValue(e, "skewX", 0);
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement($e.A, {
        title: "Skew X in degree",
        disableSlider: !0,
        containerStyle: {
          marginRight: 0
        },
        style: {
          width: 30
        },
        key: "2",
        unit: "°",
        min: -85,
        max: 85,
        step: 1,
        value: t,
        decimals: 1,
        icon: zn(),
        onValueChanging: e => this.props.changeEntityProperty("data", "skewX", e, !0, void 0),
        onValueChanged: (e, t) => this.props.changeEntityProperty("data", "skewX", e, !1, t)
      }), se.A.separator()));
    }
  }
  var qn = r(59074),
    Gn = r(59310);
  function Kn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Zn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Kn(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kn(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Yn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "pointAddedCountInputRef", void 0), (0, n.A)(this, "handleToBox", () => {
        var e = this.props.getSelectedEntites()[0];
        if (e) {
          var t = $r.A.get(e, {
              editorRef: null,
              editors: null
            }),
            r = Math.max(y.A.rectWidth(t), 1),
            n = Math.max(y.A.rectHeight(t), 1);
          if (gr.A.isStraightLineArrow(e) || gr.A.isPolygon(e)) {
            var i = e.data.map(e => ({
                x: (e.x - t.p1.x) * (1 / r),
                y: (e.y - t.p1.y) * (1 / n)
              })),
              o = e.style || {},
              s = {
                id: a.w.nextDiagramCompositeShapeId(),
                type: "line-box",
                data: {
                  p1: t.p1,
                  p2: t.p2,
                  innerShape: Zn(Zn({
                    type: void 0
                  }, e), {}, {
                    data: i
                  })
                },
                style: {
                  strokeColor: o.strokeColor,
                  fillColor: o.fillColor,
                  fillRule: o.fillRule,
                  thickness: o.thickness
                }
              };
            gr.A.isPolygon(e) && (s.style.strokeType = o.strokeType, s.style.boxShadow = o.boxShadow), this.props.onNewTypeEntityChanged(e, s);
          }
          if (gr.A.isCubicLineArrow(e) || gr.A.isPolygonCurve(e)) {
            var l,
              c = y.A.toAbsoluteControlPointCubics(e.data).map(e => y.A.transformCubicBezier(e, 1, 1, -t.p1.x, -t.p1.y));
            c = c.map(e => y.A.transformCubicBezier(e, 1 / r, 1 / n, 0, 0));
            var d = e.style || {},
              h = {
                id: a.w.nextDiagramCompositeShapeId(),
                type: "line-box",
                data: {
                  p1: t.p1,
                  p2: t.p2,
                  innerShape: Zn(Zn({}, e), {}, {
                    data: c
                  })
                },
                style: {
                  strokeColor: d.strokeColor,
                  fillColor: d.fillColor,
                  fillRule: d.fillRule,
                  thickness: d.thickness
                }
              };
            gr.A.isPolygonCurve(e) && (h.style.strokeType = d.strokeType), this.props.onNewTypeEntityChanged(e, h);
          }
        }
      }), (0, n.A)(this, "handleCloseLine", () => {
        var e = this.props.getSelectedEntites()[0];
        if (e) if (gr.A.isStraightLineArrow(e)) {
          var t = {
            id: a.w.nextDiagramShapeId(),
            type: "polygon",
            data: e.data,
            style: Zn(Zn({}, e.style), {}, {
              strokeType: "-"
            })
          };
          this.props.onNewTypeEntityChanged(e, t);
        } else if (gr.A.isPolygon(e)) {
          var r = {
            id: a.w.nextDiagramArrowId(),
            type: void 0,
            data: e.data.slice(0, e.data.length),
            style: Zn(Zn({}, e.style), {}, {
              strokeType: "-"
            }),
            head: "no",
            tail: "no",
            shaft: "-",
            mVer: 1
          };
          this.props.onNewTypeEntityChanged(e, r);
        } else if (gr.A.isCubicLineArrow(e)) {
          var n = e.data[0],
            i = e.data[e.data.length - 1],
            o = D.A.getSettings(e, "isControlPointBreak"),
            s = e.data.concat({
              p1: i.p2,
              p2: n.p1,
              cp: {
                dx: 10,
                dy: 10
              },
              cp2: {
                dx: 10,
                dy: 10
              }
            });
          o || (s = y.A.smoothBeziers(s, !0));
          var l = {
            id: a.w.nextDiagramShapeId(),
            type: "polygon-curve",
            data: s,
            settings: {
              isControlPointBreak: o
            },
            style: Zn(Zn({}, e.style), {}, {
              strokeType: "-"
            })
          };
          this.props.onNewTypeEntityChanged(e, l);
        } else if (gr.A.isPolygonCurve(e)) {
          var c = D.A.getSettings(e, "isControlPointBreak"),
            d = {
              id: a.w.nextDiagramArrowId(),
              type: "cubic",
              data: e.data.slice(0, e.data.length - 1),
              settings: {
                isControlPointBreak: c
              },
              style: Zn(Zn({}, e.style), {}, {
                strokeType: "-"
              }),
              head: "no",
              tail: "no",
              shaft: "-",
              mVer: 1
            };
          this.props.onNewTypeEntityChanged(e, d);
        } else ;
      }), (0, n.A)(this, "handleAddingMore", () => {
        var e = this.props.subSelection ? this.props.subSelection.index : void 0,
          t = this.props.getSelectedEntites(),
          r = this.getAddingPointCount(),
          n = h().clamp(Math.round(100 / r), 10, 50);
        h().times(r, r => {
          t = qn.f.addPointsTo(t, e, {
            straight: {
              x: n,
              y: r % 2 ? 50 : -50
            },
            curve: {
              x: n,
              y: 10
            }
          }), void 0 !== e && e++;
        }), this.props.raiseEntitiesChange(t, !1);
      }), (0, n.A)(this, "handleAddingInside", () => {
        var e = this.props.subSelection ? this.props.subSelection.index : void 0,
          t = this.getAddingPointCount(),
          r = qn.f.addPointsInside(this.props.getSelectedEntites(), e, t);
        this.props.raiseEntitiesChange(r, !1);
      }), (0, n.A)(this, "handleSplitBetween", () => {
        var e = this.props.subSelection ? this.props.subSelection.index : void 0,
          t = this.getAddingPointCount(),
          r = this.props.getSelectedEntites(),
          n = this.props.model.shapes,
          i = [];
        r.forEach(r => {
          if (gr.A.isStraightLineArrow(r)) {
            var o = qn.f.splitStraightLineInside(r, e, t),
              s = n.findIndex(e => e.id == r.id);
            Gn.Q.idxFound(s) && (n = f.A.spliceInsArr(n, s, 1, o), i = i.concat(o.map(e => e.id)));
          }
        }), n != this.props.model.shapes && this.props.onDiagramModelChanged(Zn(Zn({}, this.props.model), {}, {
          shapes: n
        }), i);
      }), (0, n.A)(this, "handleAddingControlPoint", () => {
        var e = this.props.subSelection ? this.props.subSelection.index : void 0,
          t = qn.f.addPointsTo(this.props.getSelectedEntites(), e, {
            straight: {
              x: 50,
              y: 50
            },
            curve: {
              x: 50,
              y: 10
            }
          });
        this.props.raiseEntitiesChange(t, !1);
      }), (0, n.A)(this, "handleRemovingPoint", () => {
        var e = this.props.getSelectedEntites()[0],
          t = qn.f.removeControlPoint(e, this.props.subSelection);
        e != t && (this.props.raiseEntitiesChange([t]), this.props.onRemoveControlPoint());
      });
    }
    render() {
      var e = this.props.entity,
        t = this.shouldDisableRemovingControlPoint(e);
      return o().createElement(jt, {
        watch: [t, e]
      }, o().createElement("item-group", null, this.renderAddNewPoint(), o().createElement("item", {
        title: "Remove Selected Point",
        style: {
          width: 24,
          opacity: t ? .2 : void 0,
          border: t ? "1px solid transparent" : void 0,
          cursor: t ? "default" : void 0
        },
        className: "control-point-removing",
        onMouseDown: t ? void 0 : this.handleRemovingPoint
      }, re.A.pointRemove({
        width: 26
      }, {
        stroke: "green",
        strokeWidth: 2,
        fill: "snow"
      }, {
        stroke: "var(--ui-text-muted, gray)",
        strokeWidth: 2,
        fill: "green"
      })), se.A.separator(), this.renderCloseLine(), this.renderToBox()));
    }
    renderAddNewPoint() {
      var e = [{
        noSelect: !0,
        value: "split",
        display: () => o().createElement("div", {
          style: {
            display: "flex"
          },
          onMouseDown: e => e.stopPropagation()
        }, o().createElement("input", {
          defaultValue: "5",
          ref: e => this.pointAddedCountInputRef = e,
          style: {
            width: 30
          }
        }), o().createElement("button", {
          className: "btn-normal",
          style: {
            marginLeft: 5,
            width: 50
          },
          onClick: this.handleAddingMore
        }, "Add"), o().createElement("button", {
          className: "btn-normal",
          style: {
            margin: "0px 5px",
            width: 90
          },
          onClick: this.handleAddingInside
        }, "Add Inside"), o().createElement("button", {
          className: "btn-normal",
          style: {
            width: 50
          },
          onClick: this.handleSplitBetween
        }, "Split"))
      }];
      return o().createElement("item", {
        title: "Add new Point",
        style: {
          width: "auto",
          display: "flex"
        },
        className: "control-point-adding"
      }, o().createElement("div", {
        onMouseDown: this.handleAddingControlPoint
      }, re.A.pointAdd({
        width: 26
      }, {
        stroke: "green",
        strokeWidth: 2,
        fill: "snow"
      }, {
        stroke: "var(--ui-text-muted, gray)",
        strokeWidth: 2,
        fill: "green"
      })), this.props.straightArrowOnly && o().createElement(Nt.A, {
        containerStyle: {
          width: "auto"
        },
        preventCloseOnSelect: !0,
        caret: !1,
        style: {
          width: 12,
          borderTop: "none",
          borderRight: "none",
          borderBottom: "none"
        },
        items: e,
        label: "",
        icon: o().createElement("i", {
          className: "fa fa-caret-down",
          style: {
            padding: "0px 0px"
          }
        })
      }));
    }
    renderCloseLine() {
      if (this.shouldRenderCloseLine()) {
        var e = this.props.getSelectedEntites()[0],
          t = gr.A.isStraightLineArrow(e) || gr.A.isCubicLineArrow(e) ? "Closed" : "Unclosed";
        return [o().createElement("button", {
          title: t,
          key: "2",
          className: "btn-normal",
          onClick: this.handleCloseLine,
          style: {
            marginTop: 3,
            marginLeft: 5,
            marginRight: 5
          }
        }, t)];
      }
    }
    renderToBox() {
      return [o().createElement("button", {
        title: "Wrap inside Box",
        key: "to-box",
        className: "btn-normal",
        onClick: this.handleToBox,
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          paddingLeft: 8,
          paddingRight: 8
        }
      }, "Boxed"), se.A.separator1()];
    }
    shouldRenderCloseLine() {
      var e = this.props.getSelectedEntites();
      if (1 != e.length) return !1;
      var t = e[0];
      return gr.A.isStraightLineArrow(t) ? t.data.length > 2 : gr.A.isCubicLineArrow(t) ? t.data.length > 1 : !(!gr.A.isPolygon(t) && !gr.A.isPolygonCurve(t));
    }
    getAddingPointCount() {
      return this.pointAddedCountInputRef && h().clamp(Number.parseInt(this.pointAddedCountInputRef.value), 1, 30) || 1;
      var e;
    }
    shouldDisableRemovingControlPoint(e) {
      return !this.props.subSelection || !!(gr.A.isStraightLineArrow(e) && e.data.length <= 2) || !!(gr.A.isPolygon(e) && e.data.length <= 3) || !!(gr.A.isCubicLineArrow(e) && e.data.length <= 1) || !!(gr.A.isPolygonCurve(e) && e.data.length <= 2);
    }
  }
  class Qn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleControlBreakChanged", e => {
        var t = this.props.getChangedEntityProperty("settings", "isControlPointBreak", e);
        e || (t = t.map(e => {
          var t = e.data,
            r = y.A.smoothBeziers(t, gr.A.isPolygonCurve(e));
          return f.A.setProp(e, "data", r);
        })), this.props.raiseEntitiesChange(t, !1, !1);
      });
    }
    render() {
      var e = this.props.entity,
        t = D.A.getSettings(e, "isControlPointBreak");
      return o().createElement(jt, {
        watch: [t]
      }, o().createElement("main", null, o().createElement("item", {
        title: "Disable Smooth At Joint Points",
        onMouseDown: () => this.handleControlBreakChanged(!t),
        className: t ? "selected" : "",
        style: {
          width: 24,
          marginRight: -2
        }
      }, o().createElement("svg", {
        style: {
          transform: "translate(5px,2px)",
          overflow: "visible"
        }
      }, o().createElement("path", {
        d: "M3,17 L7,5 L 11,17",
        stroke: "gray",
        strokeWidth: "1",
        fill: "none"
      }), o().createElement("path", {
        d: "M0,11 L7,5 L 14,11",
        stroke: "lightgray",
        strokeWidth: "1",
        fill: "none"
      }), o().createElement("circle", {
        cx: "7",
        cy: "5",
        r: "2",
        fill: "green",
        stroke: "none"
      }), o().createElement("circle", {
        cx: "0",
        cy: "11",
        r: "2",
        fill: "#b1afaf",
        stroke: "none"
      }), o().createElement("circle", {
        cx: "14",
        cy: "11",
        r: "2",
        fill: "#b1afaf",
        stroke: "none"
      }))), se.A.separator()));
    }
  }
  class Jn extends cr.A {
    constructor(e) {
      super(e), this.title = "Breakpoint Arrow Type";
    }
  }
  class Xn extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleHeadScaleChange", e => {
        this.props.changeEntityProperty(void 0, "headScale", e, !1, void 0);
      }), (0, n.A)(this, "handleHeadAngleByDistanceChange", e => {
        this.props.changeEntityProperty(void 0, "angleBy", e, !1, void 0);
      }), (0, n.A)(this, "handleMiddleAngleByDistanceChange", e => {
        this.props.changeEntityProperty(void 0, "mAngleBy", e, !1, void 0);
      }), (0, n.A)(this, "handleMVerChange", e => {
        this.props.changeEntityProperty(null, "mVer", e, void 0, void 0);
      }), (0, n.A)(this, "onTailChanged", e => {
        this.props.changeEntityProperty(null, "tail", e, void 0, void 0);
      }), (0, n.A)(this, "onShaftChanged", e => {
        this.props.changeEntityProperty(null, "shaft", e, void 0, void 0);
      }), (0, n.A)(this, "onHeadChanged", e => {
        this.props.changeEntityProperty(null, "head", e, void 0, void 0);
      }), (0, n.A)(this, "onBreakpointHeadChanged", e => {
        this.props.changeEntityProperty(null, "bpHead", e, void 0, void 0);
      }), (0, n.A)(this, "onMiddleChanged", e => {
        e && this.props.entities.every(e => void 0 === e.mVer) ? (this.props.changeEntityProperty(null, "middle", e, !0, void 0), this.props.changeEntityProperty(null, "mVer", 1, void 0, void 0)) : this.props.changeEntityProperty(null, "middle", e, void 0, void 0);
      });
    }
    render() {
      var e,
        t = this.props.entities,
        r;
      if (!h().every(t, e => a.w.isDiagramArrowId(e.id))) return o().createElement("div", null);
      var n = t[0];
      return n ? o().createElement("main", null, o().createElement(jt, {
        watch: [n.tail, n.shaft, n.head, n.middle, n.bpHead, n.headScale, n.angleBy, n.mAngleBy, n.mVer]
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(lr.A, {
        part: n.tail || "no",
        onItemSelect: this.onTailChanged
      }), o().createElement(Me, {
        part: n.shaft || "-",
        onItemSelect: this.onShaftChanged
      }), o().createElement(cr.A, {
        part: n.head || "no",
        onItemSelect: this.onHeadChanged
      }), this.renderAngleByDistance(n), se.A.separator(), this.renderMiddleHead(n), this.renderMiddleAngleByDistance(n), se.A.separator(), this.renderBreakpointHead(n), se.A.separator(), o().createElement(Er.R, {
        headScale: null !== (e = n.headScale) && void 0 !== e ? e : 1,
        onHeadScaleChange: this.handleHeadScaleChange
      }))), se.A.separator(), o().createElement(Sr, {
        changeEntityProperty: this.props.changeEntityProperty,
        diagram: this.props.diagram,
        entities: t
      })) : o().createElement("div", null);
    }
    renderMiddleAngleByDistance(e) {
      var t;
      if (e.middle && "no" != e.middle && ("cubic" == e.type || "quadratic" == e.type)) return o().createElement(kr.g, {
        headerName: "Head Angle from Middle:",
        angleByDistance: null !== (t = e.mAngleBy) && void 0 !== t ? t : 6,
        onHAngleAtDistanceChange: this.handleMiddleAngleByDistanceChange
      });
    }
    renderAngleByDistance(e) {
      var t;
      if ("cubic" == e.type || "quadratic" == e.type) return o().createElement(kr.g, {
        headerName: "Head Angle from Start:",
        angleByDistance: null !== (t = e.angleBy) && void 0 !== t ? t : 0,
        onHAngleAtDistanceChange: this.handleHeadAngleByDistanceChange
      });
    }
    renderBreakpointHead(e) {
      return o().createElement(Jn, {
        key: "abp",
        part: e.bpHead || "no",
        onItemSelect: this.onBreakpointHeadChanged
      });
    }
    renderMiddleHead(e) {
      var t = {
        borderBottom: "1px solid var(--ui-border, gray)",
        width: 5,
        height: 12,
        marginLeft: 4
      };
      return [o().createElement("div", {
        key: "mdl-1",
        style: t
      }), o().createElement(dr, {
        key: "amd",
        mVer: e.mVer,
        onMVerChange: this.handleMVerChange,
        part: e.middle || "no",
        onItemSelect: this.onMiddleChanged
      }), o().createElement("div", {
        key: "mdl-2",
        style: t
      })];
    }
  }
  var $n = r(80541),
    ei = r(53020),
    ti = r(59847);
  class ri {
    operate(e, t) {
      if (e.length <= 1) return e[0];
      var r = this.applyOperation(e, t),
        n;
      return !r || r.length <= 0 ? void 0 : r.length <= 1 ? ti.A.createShape(r[0].paperPath, r[0].style) : {
        id: a.w.nextDiagramGroupEntityId(),
        entities: r.map(e => ti.A.createShape(e.paperPath, e.style))
      };
    }
    operatePathsToPath(e, t, r) {
      return e.map(e => this.operateBetweenPath(e, t, r)).filter(e => e);
    }
    operateBetweenPath(e, t, r) {
      if (e.paperPath && t) {
        var n = $n.A.toPaperPathInstance(e.paperPath),
          i = $n.A.toPaperPathInstance(t),
          o = n[r](i);
        if (!ei.A.isPaperItemEmpty(o)) return {
          paperPath: $n.A.paperInstanceToData(o),
          style: e.style
        };
      }
    }
    applyOperation(e, t) {
      for (var r = this.getPaperPathForLeftOperand(e[0]), n = 1; n < e.length; n++) {
        var i = this.getPaperPathForRightOperand(e[n]);
        r = this.operatePathsToPath(r, i, t);
      }
      return r;
    }
    getPaperPathForLeftOperand(e) {
      if (gr.A.isGroupedEntity(e)) {
        var t = pr.A.destructAllLevelToShapes(e),
          r = t.shapes.filter(e => $n.A.supportBooleanOperation(e));
        if (t.shapes.length != r.length) throw new ni();
        return r.map(e => ({
          paperPath: $n.A.getPaperPath(e),
          style: e.style
        }));
      }
      var n = $n.A.getPaperPath(e);
      if (!n) throw new ni();
      return [{
        paperPath: n,
        style: e.style
      }];
    }
    getPaperPathForRightOperand(e) {
      if (gr.A.isGroupedEntity(e)) {
        var t = pr.A.destructAllLevelToShapes(e),
          r = t.shapes.filter(e => $n.A.supportBooleanOperation(e));
        if (t.shapes.length != r.length) throw new ni();
        return this.applyOperation(r, "unite")[0].paperPath;
      }
      var n = $n.A.getPaperPath(e);
      if (!n) throw new ni();
      return n;
    }
  }
  class ni extends Error {}
  const ii = new ri();
  function oi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function si(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? oi(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ai {
    group(e) {
      var t = e.connectionIds,
        r = e.editorIds,
        n = e.shapeIds,
        i = e.diagramModel,
        o = this.findFirstIndexOf(i.shapes, n),
        s = Br.A.removeEntities(i, n),
        c = i.shapes.filter(e => n.has(e.id)),
        d = pr.A.regenerateShapeIds(c),
        h = this.generateNewEditorIdsInGroup(i.elements, r, i.connections, t),
        p = (0, l.A)(h, 3),
        u = p[0],
        g = p[1],
        m,
        y = p[2].map(e => ({
          id: a.w.nextDiagramLinkedEntityId(),
          linkedId: e
        })),
        v = {
          id: a.w.nextDiagramGroupEntityId(),
          entities: d.concat(y)
        };
      return {
        dg: s = si(si({}, s), {}, {
          shapes: f.A.insert(s.shapes, o, v),
          elements: u,
          connections: g
        }),
        groupId: v.id
      };
    }
    findFirstIndexOf(e, t) {
      var r = e.findIndex(e => t.has(e.id));
      return r >= 0 ? r : 0;
    }
    generateNewEditorIdsInGroup(e, t, r, n) {
      var i = S.A.getDiagramEditors(e).filter(e => t.has(e.id)),
        o = pr.A.regenerateEditorIds(e, i, !0),
        s = (0, l.A)(o, 2),
        a = s[0],
        c = s[1],
        d = pr.A.regenerateConnectionIds(r, n, t, c, !0),
        p,
        u;
      return [a, (0, l.A)(d, 1)[0], h().values(c)];
    }
  }
  var li = new ai();
  function ci(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function di(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ci(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ci(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class hi extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleClick", () => {
        var e = this.props,
          t = e.diagramModel,
          r,
          n = e.sCarrier.partitionConnectedEntityByConnections(),
          i = n.shapeIds,
          o = n.connectionIds,
          s = n.editorIds,
          a = li.group({
            shapeIds: i,
            connectionIds: o,
            editorIds: s,
            diagramModel: t
          }),
          l = a.dg,
          c = a.groupId;
        this.props.onDiagramModelChanged(l, [c]);
      }), (0, n.A)(this, "handleJoin", e => {
        var t = this.props,
          r = t.diagramModel,
          n = t.sCarrier,
          i,
          o = n.partitionConnectedEntityByConnections().shapeIds,
          s = this.findFirstIndexOf(r.shapes, o),
          a = Br.A.removeEntities(r, o),
          l = r.shapes.filter(e => n.hasSelected(e.id));
        if (l.length <= 1) this.showUnsupportedShapesMessage();else try {
          var c = ii.operate(l, e);
          if (!c) return void this.showOperationYieldNoResult(e);
          a = di(di({}, a), {}, {
            shapes: f.A.insert(a.shapes, s, c)
          }), this.props.onDiagramModelChanged(a, [c.id]);
        } catch (t) {
          if (t instanceof ni) return void this.showUnsupportedShapesMessage();
          this.showUnexpectedException(t, e);
        }
      }), (0, n.A)(this, "handleCombine", e => {
        this.handleJoin(e);
      });
    }
    findFirstIndexOf(e, t) {
      var r = e.findIndex(e => t.has(e.id));
      return r >= 0 ? r : 0;
    }
    showUnsupportedShapesMessage() {
      this.props.fixedContextHandler.getMtFuncs().showMessage("Plots, Lines, Arrows, Text,... do not support Combination operation", "warning", !0);
    }
    showOperationYieldNoResult(e) {
      this.props.fixedContextHandler.getMtFuncs().showMessage("".concat(h().upperFirst(e), " Operation yields no result"), "warning", !0);
    }
    showUnexpectedException(e, t) {
      this.props.fixedContextHandler.getMtFuncs().showMessage("There was an error when perform ".concat(h().upperFirst(t), " Operation"), "error", !0), console.error(e);
    }
    combine(e) {
      this.handleCombine(e);
    }
    render() {
      var e = {
          width: 13,
          fill: "var(--ui-text-muted, gray)",
          stroke: "var(--ui-text-muted, gray)",
          overflow: "visible",
          marginRight: 10,
          verticalAlign: -3
        },
        t = [{
          value: "unite",
          display: "Unite",
          icon: re.A.objectUnion(e)
        }, {
          value: "intersect",
          display: "Intersect",
          icon: re.A.objectIntersection(e)
        }, {
          value: "subtract",
          display: "Subtract",
          icon: re.A.objectSubtraction(e)
        }, {
          value: "exclude",
          display: "Exclude",
          icon: re.A.objectExclusion(e)
        }, {
          value: "divide",
          display: "Divide",
          icon: re.A.objectDivision(e)
        }];
      return o().createElement("span", {
        style: {
          whiteSpace: "nowrap"
        }
      }, o().createElement("button", {
        className: "btn-normal btn-diagram-group",
        style: {
          marginTop: 2,
          display: "inline-block"
        },
        onClick: this.handleClick
      }, re.A.objectGroup({
        fill: "var(--ui-text-muted, gray)",
        width: 15,
        verticalAlign: -3,
        marginRight: 5
      }), o().createElement("span", null, "Group")), o().createElement(Nt.A, {
        label: "Combine",
        className: "button-style combine-button",
        labelStyle: {
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 5,
          paddingRight: 5,
          height: 16,
          display: "inline-block"
        },
        style: {
          display: "inline-block",
          marginLeft: 5
        },
        icon: re.A.objectIntersection({
          width: 13,
          fill: "var(--ui-text-muted, gray)",
          stroke: "var(--ui-text-muted, gray)",
          overflow: "visible",
          marginRight: 5,
          verticalAlign: -3
        }),
        items: t,
        onItemSelect: this.handleCombine
      }));
    }
  }
  function pi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ui(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? pi(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class gi {
    ungroup(e) {
      var t = e.diagramModel,
        r = e.groupEntity,
        n = this.findGroupIndex(t.shapes, r),
        i = Br.A.removeEntities(t, new Set([r.id])),
        o = h().partition(r.entities, e => !a.w.isDiagramLinkedId(e.id)),
        s = (0, l.A)(o, 2),
        c = s[0],
        d = s[1];
      if (c = pr.A.regenerateShapeIds(c), i = ui(ui({}, i), {}, {
        shapes: f.A.insertMultiple(i.shapes, n, c)
      }), d.length > 0) {
        var p = d.map(e => x.A.findOriginalEntityFromLink(e, t.elements)).filter(e => e),
          u = new Set(p.map(e => e.id)),
          g = pr.A.regenerateEditorIds(t.elements, p, !1),
          m = (0, l.A)(g, 2),
          y = m[0],
          v = m[1],
          b,
          C = pr.A.findConnectedEditorAndConnections(d.map(e => e.linkedId), t).filter(e => a.w.isDiagramConnectionId(e)),
          S = pr.A.regenerateConnectionIds(t.connections, new Set(C), u, v, !1),
          A = (0, l.A)(S, 2),
          w = A[0],
          E = A[1],
          k = h().values(v).concat(E),
          O;
        return {
          dg: i = ui(ui({}, i), {}, {
            elements: y,
            connections: w
          }),
          ids: h().uniq(c.map(e => e.id).concat(k))
        };
      }
      return {
        dg: i,
        ids: c.map(e => e.id)
      };
    }
    findGroupIndex(e, t) {
      var r = e.indexOf(t);
      return r >= 0 ? r : 0;
    }
  }
  var mi = new gi();
  class fi extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleClick", () => {
        var e = this.props,
          t = e.diagramModel,
          r = e.groupEntity,
          n = mi.ungroup({
            diagramModel: t,
            groupEntity: r
          }),
          i = n.dg,
          o = n.ids;
        this.props.onDiagramModelChanged(i, o);
      });
    }
    render() {
      return o().createElement("button", {
        className: "btn-normal btn-diagram-ungroup",
        style: {
          marginTop: 3
        },
        onClick: this.handleClick
      }, re.A.objectUngroup({
        fill: "var(--ui-text-muted, gray)",
        width: 15,
        verticalAlign: -3,
        marginRight: 5
      }), o().createElement("span", null, "Ungroup"));
    }
  }
  var yi = r(65620),
    vi = r(54281);
  function bi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function xi(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? bi(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ci extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "onColorSelectMouseDown", e => {
        e.stopPropagation();
      });
    }
    renderWarning() {
      var e = this.props.value || {},
        t = e.fill,
        r = void 0 === t ? k.A.blackArr : t,
        n = e.blur,
        i;
      if (0 != (void 0 === n ? 0 : n) && !k.A.isBlackColor(r)) return o().createElement("div", {
        style: {
          position: "absolute",
          top: "100%",
          background: "var(--ui-surface, white)",
          left: 0,
          margin: -1,
          marginTop: 0,
          padding: 5,
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("span", {
        style: {
          color: "orange",
          fontSize: 12
        }
      }, "NOTE: Tikz only supports blur with black color"));
    }
    render() {
      var e = this.props.value || {},
        t = e.xOffset,
        r = void 0 === t ? 0 : t,
        n = e.yOffset,
        i = void 0 === n ? 0 : n,
        s = e.fill,
        a = void 0 === s ? k.A.blackArr : s,
        l = e.blur,
        c = void 0 === l ? 0 : l,
        d = {
          width: 60,
          display: "inline-block"
        },
        h = {
          padding: "5px 0"
        },
        p = {
          width: 24
        };
      return o().createElement("div", {
        onMouseDown: this.onColorSelectMouseDown,
        style: {
          color: "var(--ui-text-muted, gray)",
          width: 140,
          position: "absolute",
          top: 25,
          left: 0,
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface, white)",
          padding: 10,
          boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)"
        }
      }, o().createElement("div", {
        style: h
      }, o().createElement("span", {
        style: d
      }, "X offset"), o().createElement(vi.A, {
        style: p,
        min: -1e3,
        max: 1e3,
        decimals: 2,
        value: r,
        onValueChanged: e => {
          this.props.onValueChanged(xi(xi({}, this.props.value), {}, {
            xOffset: e
          }));
        },
        onValueChanging: e => {
          this.props.onValueChanging(xi(xi({}, this.props.value), {}, {
            xOffset: e
          }));
        }
      })), o().createElement("div", {
        style: h
      }, o().createElement("span", {
        style: d
      }, "Y offset"), o().createElement(vi.A, {
        style: p,
        min: -1e3,
        max: 1e3,
        decimals: 2,
        value: i,
        onValueChanged: e => {
          this.props.onValueChanged(xi(xi({}, this.props.value), {}, {
            yOffset: e
          }));
        },
        onValueChanging: e => {
          this.props.onValueChanging(xi(xi({}, this.props.value), {}, {
            yOffset: e
          }));
        }
      })), o().createElement("div", null, o().createElement("span", {
        style: d
      }, "Fill"), o().createElement(Xe.A, {
        requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        style: {
          display: "inline-block",
          verticalAlign: -4,
          paddingBottom: 5
        },
        value: a,
        disableNoColor: !0,
        onItemSelect: e => {
          this.props.onValueChanged(xi(xi({}, this.props.value), {}, {
            fill: e
          }));
        }
      })), o().createElement("div", {
        style: h
      }, o().createElement("span", {
        style: d
      }, "Blur"), o().createElement(vi.A, {
        style: p,
        min: 0,
        max: 1e3,
        decimals: 2,
        value: c,
        onValueChanged: e => {
          this.props.onValueChanged(xi(xi({}, this.props.value), {}, {
            blur: e
          }));
        },
        onValueChanging: e => {
          this.props.onValueChanging(xi(xi({}, this.props.value), {}, {
            blur: e
          }));
        }
      })), this.renderWarning());
    }
  }
  class Si extends be.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "closedOnEscape", !0);
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.value != this.props.value;
    }
    renderComponent() {
      return o().createElement("item", {
        style: {
          width: 24,
          height: 22,
          paddingTop: 1
        }
      }, re.A.boxShadow({
        width: 20,
        height: 20
      }));
    }
    renderExpandComponent() {
      return o().createElement(Ci, {
        fixedContextHandler: this.props.fixedContextHandler,
        value: this.props.value,
        onValueChanged: this.props.onValueChanged,
        onValueChanging: this.props.onValueChanging
      });
    }
  }
  var Ai = r(39528);
  class wi extends Ai.d {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectors", [{
        key: "S",
        keyCode: 83,
        selector: 'item[title="Stroke Color"]'
      }, {
        key: "F",
        keyCode: 70,
        selector: 'item[title="Fill Color"]'
      }]);
    }
  }
  class Ei extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "root", void 0), (0, n.A)(this, "setRoot", e => {
        this.root = e;
      });
    }
    componentDidMount() {
      this.updateHighlightRect();
    }
    componentDidUpdate(e) {
      e.dragging == this.props.dragging && e.dragOverRowIndex == this.props.dragOverRowIndex && e.dragOverColumnIndex == this.props.dragOverColumnIndex || this.updateHighlightRect();
    }
    render() {
      return o().createElement("div", {
        ref: this.setRoot,
        style: {
          position: "relative"
        }
      }, this.props.children, this.props.dragging ? o().createElement("div", {
        style: this.getDimOverlayStyle()
      }) : null, this.props.dragging && this.state.highlightRect ? o().createElement("div", {
        style: this.getHighlightStyle(this.state.highlightRect)
      }) : null);
    }
    updateHighlightRect() {
      this.root && this.props.dragging ? this.setState({
        highlightRect: this.getTargetRect()
      }) : this.setState({
        highlightRect: void 0
      });
    }
    getTargetRect() {
      return void 0 !== this.props.dragOverRowIndex ? this.getRowRect(this.props.dragOverRowIndex) : void 0 !== this.props.dragOverColumnIndex ? this.getColumnRect(this.props.dragOverColumnIndex) : void 0;
    }
    getRowRect(e) {
      var t = this.getTable();
      if (t && t.rows[e + 1]) return this.toLocalRect(t.rows[e + 1].getBoundingClientRect());
    }
    getColumnRect(e) {
      var t = this.getTable();
      if (t) {
        for (var r = [], n = 0; n < t.rows.length; n++) {
          var i = t.rows[n].cells[e + 1];
          i && r.push(i.getBoundingClientRect());
        }
        if (!(r.length <= 0)) {
          var o = this.root.getBoundingClientRect(),
            s = Math.min(...r.map(e => e.left)) - o.left,
            a = Math.min(...r.map(e => e.top)) - o.top,
            l,
            c;
          return {
            left: s,
            top: a,
            width: Math.max(...r.map(e => e.right)) - o.left - s,
            height: Math.max(...r.map(e => e.bottom)) - o.top - a
          };
        }
      }
    }
    getTable() {
      return E.Zy(this.root, "table");
    }
    toLocalRect(e) {
      var t = this.root.getBoundingClientRect();
      return {
        left: e.left - t.left,
        top: e.top - t.top,
        width: e.width,
        height: e.height
      };
    }
    getDimOverlayStyle() {
      return {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: "rgba(255, 255, 255, 0.3)",
        pointerEvents: "none",
        zIndex: 1
      };
    }
    getHighlightStyle(e) {
      return {
        position: "absolute",
        left: e.left,
        top: e.top,
        width: e.width,
        height: e.height,
        background: "rgba(76, 175, 80, 0.22)",
        boxShadow: "inset 0 0 0 2px rgba(76, 175, 80, 0.8)",
        pointerEvents: "none",
        zIndex: 2
      };
    }
  }
  function ki(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Oi(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ki(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ki(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Di = Ae.A.getModalDialog();
  class Pi extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        rootModel: this.buildRootModel(this.props.cacheKey, this.props.model)
      }), (0, n.A)(this, "handleModelChanged", e => {
        this.props.onModelChanged(this.extractInlineMathEditor(e));
      });
    }
    componentWillReceiveProps(e) {
      e.cacheKey != this.props.cacheKey && this.setState({
        rootModel: this.buildRootModel(e.cacheKey, e.model)
      });
    }
    render() {
      var e = this.props.height || (this.props.compact ? 26 : 34),
        t = this.props.MathTypeClss,
        r = this.props.quietBorder && (this.state.hover || this.state.focus) ? "#d1d5db" : "transparent";
      return o().createElement("div", {
        className: (this.props.bordered ? "tw:border tw:border-[var(--ui-border,#d1d5db)] " : "") + "tw:box-border tw:w-full tw:overflow-hidden tw:bg-[var(--ui-surface,white)] tw:px-1",
        style: Oi({
          minHeight: e,
          height: this.props.height,
          boxSizing: "border-box",
          fontSize: this.props.compact ? 12 : void 0,
          border: this.props.quietBorder ? "1px solid ".concat(r) : void 0
        }, this.props.containerStyle),
        onMouseEnter: () => this.setState({
          hover: !0
        }),
        onMouseLeave: () => this.setState({
          hover: !1
        }),
        onFocus: () => this.setState({
          focus: !0
        }),
        onBlur: () => this.setState({
          focus: !1
        })
      }, o().createElement(t, {
        className: "ui-math-input",
        model: this.state.rootModel,
        oneMode: "math-mode",
        multiline: !1,
        toolbarEnabled: !1,
        itemsBarHide: !0,
        cursorHiddenOnLostFocus: !0,
        restrictedView: !0,
        enableContextMenu: !0,
        autoCompleteUsingPositionFixed: !0,
        shouldFocusOnCreated: !1,
        deplayRenderEnabled: !1,
        style: {
          padding: 2,
          border: "none",
          marginTop: 0,
          background: "var(--ui-surface, white)",
          minHeight: this.props.height ? this.props.height - 6 : this.props.compact ? 20 : 28,
          width: "100%",
          fontSize: this.props.compact ? 12 : void 0
        },
        rootEditorStyle: {
          minHeight: 0,
          padding: 0,
          fontSize: this.props.compact ? 12 : void 0
        },
        onModelChanged: this.handleModelChanged
      }));
    }
    buildRootModel(e, t) {
      var r = V.A.createComposite("\\math-container"),
        n = V.A.createEmptyEditor(),
        i = Oi(Oi({}, r), {}, {
          id: "xy-math-container-" + e,
          elements: Oi(Oi({}, r.elements || {}), {}, {
            mathValue: t || V.A.createEmptyEditor()
          })
        });
      return Oi(Oi({}, n), {}, {
        id: "xy-inline-root-" + e,
        lines: [Oi(Oi({}, n.lines[0]), {}, {
          blocks: [i]
        })]
      });
    }
    extractInlineMathEditor(e) {
      var t = e && e.lines && e.lines[0] && e.lines[0].blocks && e.lines[0].blocks[0],
        r;
      return t && t.elements && t.elements.mathValue || V.A.createEmptyEditor();
    }
  }
  class Mi extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        model: H.W.normalizeDiagram(this.props.data)
      }), (0, n.A)(this, "handleOk", () => {
        this.props.onOk(H.W.normalizeDiagram(this.state.model), [this.props.shape.id]);
      }), (0, n.A)(this, "handleApply", () => {
        this.props.onApply && this.props.onApply(H.W.normalizeDiagram(this.state.model), [this.props.shape.id]);
      }), (0, n.A)(this, "handleRowDragStart", (e, t) => {
        e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", "row:" + t), this.setState({
          draggingRowIndex: t,
          draggingColumnIndex: void 0
        });
      }), (0, n.A)(this, "handleColumnDragStart", (e, t) => {
        e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", "column:" + t), this.setState({
          draggingColumnIndex: t,
          draggingRowIndex: void 0
        });
      }), (0, n.A)(this, "handleDragOver", e => {
        e.preventDefault(), e.dataTransfer.dropEffect = "move";
      }), (0, n.A)(this, "handleRowDragOver", (e, t) => {
        this.handleDragOver(e), void 0 !== this.state.draggingRowIndex && this.state.dragOverRowIndex != t && this.setState({
          dragOverRowIndex: t,
          dragOverColumnIndex: void 0
        });
      }), (0, n.A)(this, "handleColumnDragOver", (e, t) => {
        this.handleDragOver(e), void 0 !== this.state.draggingColumnIndex && this.state.dragOverColumnIndex != t && this.setState({
          dragOverColumnIndex: t,
          dragOverRowIndex: void 0
        });
      }), (0, n.A)(this, "handleCellDragOver", (e, t) => {
        void 0 !== this.state.draggingColumnIndex && (e.stopPropagation(), this.handleColumnDragOver(e, t));
      }), (0, n.A)(this, "handleRowDrop", (e, t) => {
        e.preventDefault(), void 0 !== this.state.draggingRowIndex && this.moveRow(this.state.draggingRowIndex, t), this.handleDragEnd();
      }), (0, n.A)(this, "handleColumnDrop", (e, t) => {
        e.preventDefault(), void 0 !== this.state.draggingColumnIndex && this.moveColumn(this.state.draggingColumnIndex, t), this.handleDragEnd();
      }), (0, n.A)(this, "handleCellDrop", (e, t) => {
        void 0 !== this.state.draggingColumnIndex && (e.stopPropagation(), this.handleColumnDrop(e, t));
      }), (0, n.A)(this, "handleDragEnd", () => {
        this.setState({
          draggingRowIndex: void 0,
          draggingColumnIndex: void 0,
          dragOverRowIndex: void 0,
          dragOverColumnIndex: void 0
        });
      }), (0, n.A)(this, "renderCellFrameItem", e => o().createElement("div", {
        className: "tw:flex tw:items-center tw:gap-2"
      }, this.renderCellFrameIcon(e.key), o().createElement("span", null, e.value))), (0, n.A)(this, "renderCellFrameValue", e => o().createElement("div", {
        className: "tw:flex tw:h-full tw:items-center tw:justify-center"
      }, this.renderCellFrameIcon(e.key))), (0, n.A)(this, "addRow", () => {
        this.setModel(H.W.addRow(this.state.model, this.getShape()));
      }), (0, n.A)(this, "addColumn", () => {
        this.setModel(H.W.addColumn(this.state.model, this.getShape()));
      }), (0, n.A)(this, "addArrow", () => {
        this.setModel(H.W.addArrow(this.state.model, this.getShape()));
      }), (0, n.A)(this, "renderArrowStyleItem", e => o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-center"
      }, this.renderArrowStyleIcon(e.key))), (0, n.A)(this, "renderArrowStyleValue", e => o().createElement("div", {
        className: "tw:flex tw:h-full tw:items-center"
      }, this.renderArrowStyleIcon(e.key))), (0, n.A)(this, "renderArrowCurveItem", e => o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-center"
      }, this.renderArrowCurveIcon(e.key))), (0, n.A)(this, "renderArrowCurveValue", e => o().createElement("div", {
        className: "tw:flex tw:h-full tw:items-center"
      }, this.renderArrowCurveIcon(e.key))), (0, n.A)(this, "renderArrowSlideItem", e => o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-center"
      }, this.renderArrowSlideIcon(e.key))), (0, n.A)(this, "renderArrowSlideValue", e => o().createElement("div", {
        className: "tw:flex tw:h-full tw:items-center"
      }, this.renderArrowSlideIcon(e.key))), (0, n.A)(this, "markSourceCopied", () => {
        this.setState({
          sourceCopied: !0
        }), setTimeout(() => {
          this.state.sourceCopied && this.setState({
            sourceCopied: !1
          });
        }, 1200);
      });
    }
    componentWillReceiveProps(e) {
      e.show && e.shape != this.props.shape && this.setState({
        model: H.W.normalizeDiagram(e.data)
      });
    }
    getShape() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.model;
      return H.W.getShape(e, this.props.shape.id);
    }
    setModel(e) {
      e != this.state.model && this.setState({
        model: H.W.normalizeDiagram(e)
      });
    }
    renderCellTable(e) {
      var t = Math.max(1, e.data.cells[0] ? e.data.cells[0].length : 1);
      return o().createElement(Ei, {
        dragging: this.isDraggingCellTable(),
        dragOverRowIndex: this.state.dragOverRowIndex,
        dragOverColumnIndex: this.state.dragOverColumnIndex
      }, o().createElement("table", {
        className: "tw:w-full tw:border-collapse",
        style: {
          tableLayout: "fixed"
        }
      }, o().createElement("colgroup", null, o().createElement("col", {
        style: {
          width: 58
        }
      }), (e.data.cells[0] || []).map(e => o().createElement("col", {
        key: e.key,
        style: {
          width: "calc((100% - 94px) / ".concat(t, ")")
        }
      })), o().createElement("col", {
        style: {
          width: 36
        }
      })), o().createElement("tbody", null, o().createElement("tr", null, o().createElement("td", null), (e.data.cells[0] || []).map((e, t) => o().createElement("td", {
        key: e.key,
        className: "tw:p-1",
        onDragOver: e => this.handleColumnDragOver(e, t),
        onDrop: e => this.handleColumnDrop(e, t)
      }, o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-center tw:gap-1"
      }, this.renderGuideBadge(t + 1, "Column " + (t + 1)), this.renderColumnDragHandle(t)))), o().createElement("td", null)), e.data.cells.map((e, t) => o().createElement("tr", {
        key: t,
        onMouseEnter: () => this.setState({
          hoveredRowIndex: t
        }),
        onMouseLeave: () => this.setState({
          hoveredRowIndex: void 0
        }),
        onDragOver: e => this.handleRowDragOver(e, t),
        onDrop: e => this.handleRowDrop(e, t)
      }, o().createElement("td", {
        className: "tw:p-1 tw:align-middle"
      }, o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-center tw:gap-2"
      }, this.renderGuideBadge(t + 1, "Row " + (t + 1)), this.renderRowDragHandle(t))), e.map((e, t) => o().createElement("td", {
        key: e.key,
        className: "tw:relative tw:border tw:border-[var(--ui-border,#d1d5db)] tw:p-1 tw:overflow-hidden",
        onDragOver: e => this.handleCellDragOver(e, t),
        onDrop: e => this.handleCellDrop(e, t),
        onMouseEnter: () => this.setState({
          hoveredColumnIndex: t,
          hoveredCellKey: e.key
        }),
        onMouseLeave: () => this.setState({
          hoveredColumnIndex: void 0,
          hoveredCellKey: void 0
        })
      }, this.renderCellFrameSelector(e), this.renderInlineMathEditor(e.editorId, this.state.model.elements[e.editorId], t => this.handleCellModelChanged(e.editorId, t)))), o().createElement("td", {
        className: "tw:p-1 tw:w-8"
      }, o().createElement("button", {
        className: "btn-normal",
        title: "Remove row",
        style: {
          visibility: this.state.hoveredRowIndex == t ? "visible" : "hidden"
        },
        onClick: () => this.removeRow(t)
      }, o().createElement("i", {
        className: "fa fa-trash"
      }))))), o().createElement("tr", null, o().createElement("td", null), (e.data.cells[0] || []).map((e, t) => o().createElement("td", {
        key: e.key,
        className: "tw:p-1 tw:text-center",
        onMouseEnter: () => this.setState({
          hoveredColumnIndex: t
        }),
        onMouseLeave: () => this.setState({
          hoveredColumnIndex: void 0
        })
      }, o().createElement("button", {
        className: "btn-normal",
        title: "Remove column",
        style: {
          visibility: this.state.hoveredColumnIndex == t ? "visible" : "hidden"
        },
        onClick: () => this.removeColumn(t)
      }, o().createElement("i", {
        className: "fa fa-trash"
      })))), o().createElement("td", null)))));
    }
    renderRowDragHandle(e) {
      return o().createElement("span", {
        draggable: !0,
        title: "Drag row",
        className: "tw:inline-flex tw:h-5 tw:w-5 tw:cursor-move tw:items-center tw:justify-center tw:text-[color:var(--ui-text-muted,#6b7280)]",
        style: {
          opacity: this.state.draggingRowIndex == e ? .45 : 1
        },
        onDragStart: t => this.handleRowDragStart(t, e),
        onDragEnd: this.handleDragEnd
      }, o().createElement("i", {
        className: "fa fa-bars"
      }));
    }
    renderColumnDragHandle(e) {
      return o().createElement("span", {
        draggable: !0,
        title: "Drag column",
        className: "tw:inline-flex tw:h-5 tw:w-5 tw:cursor-move tw:items-center tw:justify-center tw:text-[color:var(--ui-text-muted,#6b7280)]",
        style: {
          opacity: this.state.draggingColumnIndex == e ? .45 : 1
        },
        onDragStart: t => this.handleColumnDragStart(t, e),
        onDragEnd: this.handleDragEnd
      }, o().createElement("i", {
        className: "fa fa-bars"
      }));
    }
    renderGuideBadge(e, t, r) {
      return o().createElement("span", {
        title: t,
        style: Oi(Oi({}, this.getGuideBadgeStyle()), r)
      }, e);
    }
    getGuideBadgeStyle() {
      return {
        display: "inline-block",
        width: 18,
        height: 18,
        lineHeight: "18px",
        borderRadius: 9,
        background: "rgba(76, 175, 80, 0.12)",
        color: "#3f7f43",
        fontSize: 10,
        fontFamily: "Segoe UI, Arial, Verdana, sans-serif",
        textAlign: "center",
        pointerEvents: "none",
        zIndex: 5
      };
    }
    isDraggingCellTable() {
      return void 0 !== this.state.draggingRowIndex || void 0 !== this.state.draggingColumnIndex;
    }
    handleCellModelChanged(e, t) {
      this.setModel(H.W.updateEditorModel(this.state.model, e, t));
    }
    updateCellFrame(e, t) {
      this.setModel(H.W.updateCellFrame(this.state.model, this.getShape(), e.key, t));
    }
    getCellFrameItems() {
      return [{
        key: "none",
        value: "none"
      }, {
        key: "rectangle",
        value: "rectangle"
      }, {
        key: "double-rectangle",
        value: "double rectangle"
      }, {
        key: "oval",
        value: "oval"
      }, {
        key: "dotted",
        value: "dotted"
      }];
    }
    renderCellFrameSelector(e) {
      var t = this.state.hoveredCellKey == e.key || !(!e.frame || "none" == e.frame);
      return o().createElement("div", {
        className: "tw:absolute tw:right-1 tw:top-1 tw:z-10",
        style: {
          visibility: t ? "visible" : "hidden"
        },
        title: "Cell frame"
      }, o().createElement(Ut.A, {
        width: 24,
        expansionWidth: 132,
        data: this.getCellFrameItems(),
        value: e.frame || "none",
        onRenderItem: this.renderCellFrameItem,
        onRenderValue: this.renderCellFrameValue,
        selectBoxStyle: {
          height: 22,
          boxSizing: "border-box"
        },
        inputStyle: {
          height: 20,
          lineHeight: "20px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center"
        },
        onChange: t => this.updateCellFrame(e, t),
        className: "button-dropdown",
        hideCaret: !0,
        stopPropagationOnSelect: !0,
        usePositionFixedOnExpand: !0
      }));
    }
    renderCellFrameIcon(e) {
      var t = {
        stroke: "var(--ui-text-muted, #777)",
        strokeWidth: 1,
        fill: "none"
      };
      switch (e) {
        case "double-rectangle":
          return o().createElement("svg", {
            viewBox: "0 0 22 18",
            style: {
              width: 18,
              height: 16
            }
          }, o().createElement("rect", Oi({
            x: 3,
            y: 3,
            width: 16,
            height: 12
          }, t)), o().createElement("rect", Oi({
            x: 5,
            y: 5,
            width: 12,
            height: 8
          }, t)));
        case "oval":
          return o().createElement("svg", {
            viewBox: "0 0 22 18",
            style: {
              width: 18,
              height: 16
            }
          }, o().createElement("ellipse", Oi({
            cx: 11,
            cy: 9,
            rx: 8,
            ry: 6
          }, t)));
        case "dotted":
          return o().createElement("svg", {
            viewBox: "0 0 22 18",
            style: {
              width: 18,
              height: 16
            }
          }, o().createElement("rect", Oi({
            x: 3,
            y: 3,
            width: 16,
            height: 12,
            strokeDasharray: "1.5 2.5"
          }, t)));
        case "rectangle":
          return o().createElement("svg", {
            viewBox: "0 0 22 18",
            style: {
              width: 18,
              height: 16
            }
          }, o().createElement("rect", Oi({
            x: 3,
            y: 3,
            width: 16,
            height: 12
          }, t)));
        default:
          return o().createElement("svg", {
            viewBox: "0 0 22 18",
            style: {
              width: 18,
              height: 16
            }
          }, o().createElement("path", Oi({
            d: "M4,9 L18,9"
          }, t)));
      }
    }
    renderInlineMathEditor(e, t, r, n, i, s, a, l) {
      return o().createElement(Pi, {
        cacheKey: e,
        model: t,
        MathTypeClss: this.props.MathTypeClss,
        onModelChanged: r,
        bordered: n,
        compact: i,
        height: s,
        quietBorder: a,
        containerStyle: l
      });
    }
    updateSettings(e) {
      var t = this.getShape(),
        r = Oi(Oi({}, t.data.settings || {}), e);
      void 0 === r.colGapPx && delete r.colGapPx, void 0 === r.rowGapPx && delete r.rowGapPx, this.setModel(H.W.replaceShape(this.state.model, Oi(Oi({}, t), {}, {
        data: Oi(Oi({}, t.data), {}, {
          settings: r
        })
      })));
    }
    removeRow(e) {
      this.setModel(H.W.removeRow(this.state.model, this.getShape(), e));
    }
    removeColumn(e) {
      this.setModel(H.W.removeColumn(this.state.model, this.getShape(), e));
    }
    moveRow(e, t) {
      this.setModel(H.W.moveRow(this.state.model, this.getShape(), e, t));
    }
    moveColumn(e, t) {
      this.setModel(H.W.moveColumn(this.state.model, this.getShape(), e, t));
    }
    removeArrow(e) {
      this.setModel(H.W.removeArrow(this.state.model, this.getShape(), e));
    }
    updateArrow(e, t) {
      var r = this.getShape();
      this.setModel(H.W.updateArrow(this.state.model, r, Oi(Oi({}, e), t)));
    }
    toggleArrowHidden(e) {
      this.updateArrow(e, {
        hidden: !e.hidden
      });
    }
    updateArrowFromCell(e, t) {
      var r = {
        fromCellKey: t
      };
      t == e.toCellKey && (r.loopStartDir = e.loopStartDir || "ul", r.loopEndDir = e.loopEndDir || "ur"), this.updateArrow(e, r);
    }
    updateArrowToCell(e, t) {
      var r = {
        toCellKey: t
      };
      e.fromCellKey == t && (r.loopStartDir = e.loopStartDir || "ul", r.loopEndDir = e.loopEndDir || "ur"), this.updateArrow(e, r);
    }
    updateArrowLabelModel(e, t, r) {
      this.setModel(H.W.updateArrowLabelModel(this.state.model, this.getShape(), e, t, r));
    }
    addArrowLabel(e, t) {
      this.setModel(H.W.addArrowLabel(this.state.model, this.getShape(), e, t));
    }
    removeArrowLabel(e, t) {
      this.setModel(H.W.removeArrowLabel(this.state.model, this.getShape(), e, t));
    }
    updateArrowLabelPosition(e, t, r) {
      this.setModel(H.W.updateArrowLabelPosition(this.state.model, this.getShape(), e, t, r));
    }
    getCellOptions(e) {
      return e.data.cells.map((e, t) => e.map((e, r) => ({
        key: e.key,
        name: "".concat(t + 1, ",").concat(r + 1)
      }))).reduce((e, t) => e.concat(t), []);
    }
    getCellSelectItems(e) {
      return this.getCellOptions(e).map(e => ({
        key: e.key,
        value: e.name
      }));
    }
    getArrowStyleItems() {
      return [{
        key: "normal",
        value: "arrow"
      }, {
        key: "tail-bar",
        value: "bar arrow"
      }, {
        key: "none",
        value: "line"
      }, {
        key: "hook",
        value: "hook arrow"
      }, {
        key: "double-head",
        value: "double arrow"
      }, {
        key: "dotted",
        value: "dotted"
      }, {
        key: "dashed",
        value: "dashed"
      }, {
        key: "double-line",
        value: "double line"
      }, {
        key: "wavy",
        value: "wavy"
      }];
    }
    getArrowCurveItems() {
      return [{
        key: "up-2pc",
        value: "up 2pc"
      }, {
        key: "up-1pc",
        value: "up 1pc"
      }, {
        key: "up",
        value: "up"
      }, {
        key: "none",
        value: "straight"
      }, {
        key: "down",
        value: "down"
      }, {
        key: "down-1pc",
        value: "down 1pc"
      }, {
        key: "down-2pc",
        value: "down 2pc"
      }];
    }
    getArrowSlideItems() {
      return [{
        key: "above",
        value: "above"
      }, {
        key: "none",
        value: "center"
      }, {
        key: "below",
        value: "below"
      }];
    }
    renderLoopDirectionIcon(e, t, r, n) {
      var i = this.getLoopDirectionIconVector(e),
        s = 14,
        a = 14,
        l = t ? {
          x: -i.x,
          y: -i.y
        } : i,
        c = {
          x: s + 10 * l.x,
          y: a + 10 * l.y
        },
        d = {
          x: s - 6 * l.x,
          y: a - 6 * l.y
        },
        h = -l.y,
        p = l.x,
        u = 6,
        g = 3.5,
        m = {
          x: c.x - 6 * l.x + h * g,
          y: c.y - 6 * l.y + p * g
        },
        f = {
          x: c.x - 6 * l.x - h * g,
          y: c.y - 6 * l.y - p * g
        },
        y = r ? "#16a34a" : "#333";
      return o().createElement("svg", {
        viewBox: "0 0 28 28",
        style: {
          width: n || 22,
          height: n || 22,
          overflow: "visible",
          stroke: y,
          strokeWidth: r ? 1.8 : 1.4,
          fill: "none"
        }
      }, o().createElement("path", {
        d: "M".concat(d.x, ",").concat(d.y, " L").concat(c.x, ",").concat(c.y)
      }), o().createElement("path", {
        d: "M".concat(c.x, ",").concat(c.y, " L").concat(m.x, ",").concat(m.y)
      }), o().createElement("path", {
        d: "M".concat(c.x, ",").concat(c.y, " L").concat(f.x, ",").concat(f.y)
      }));
    }
    getLoopDirectionIconVector(e) {
      var t = Math.SQRT1_2;
      switch (e) {
        case "u":
          return {
            x: 0,
            y: -1
          };
        case "ur":
          return {
            x: t,
            y: -t
          };
        case "r":
          return {
            x: 1,
            y: 0
          };
        case "dr":
          return {
            x: t,
            y: t
          };
        case "d":
          return {
            x: 0,
            y: 1
          };
        case "dl":
          return {
            x: -t,
            y: t
          };
        case "l":
          return {
            x: -1,
            y: 0
          };
        default:
          return {
            x: -t,
            y: -t
          };
      }
    }
    renderLoopDirectionPicker(e, t, r, n) {
      var i = e.id + "-" + t,
        s = this.state.openLoopDirectionPickerKey == i,
        a = "end" == t;
      return o().createElement("div", {
        className: "tw:relative tw:flex tw:h-full tw:items-center tw:justify-center",
        onMouseDown: e => e.stopPropagation()
      }, o().createElement("button", {
        type: "button",
        className: "button-dropdown",
        title: "start" == t ? "Loop out direction" : "Loop in direction",
        style: {
          width: "100%",
          height: n,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer"
        },
        onClick: () => this.setState({
          openLoopDirectionPickerKey: s ? void 0 : i
        })
      }, this.renderLoopDirectionIcon(r, a, !1, 22)), s ? this.renderLoopDirectionPopup(e, t, r, a) : void 0);
    }
    renderLoopDirectionPopup(e, t, r, n) {
      var i = ["u", "ur", "r", "dr", "d", "dl", "l", "ul"],
        s = {
          x: 58,
          y: 58
        },
        a = 38;
      return o().createElement("div", {
        className: "tw:absolute tw:left-1/2 tw:top-full tw:z-50 tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)] tw:shadow",
        style: {
          width: 116,
          height: 116,
          marginLeft: -58,
          marginTop: 2
        },
        onMouseLeave: () => this.setState({
          openLoopDirectionPickerKey: void 0
        })
      }, o().createElement("svg", {
        viewBox: "0 0 116 116",
        style: {
          width: 116,
          height: 116
        }
      }, o().createElement("circle", {
        cx: s.x,
        cy: s.y,
        r: 22,
        style: {
          fill: "var(--ui-on-accent, #fff)",
          stroke: "var(--ui-text, #222)",
          strokeWidth: 1
        }
      }), i.map(i => {
        var l = this.getLoopDirectionIconVector(i),
          c = {
            x: s.x + l.x * a,
            y: s.y + l.y * a
          },
          d = i == r;
        return o().createElement("g", {
          key: i,
          onClick: () => this.selectLoopDirection(e, t, i),
          style: {
            cursor: "pointer"
          }
        }, o().createElement("circle", {
          cx: c.x,
          cy: c.y,
          r: 13,
          style: {
            fill: d ? "rgba(34, 197, 94, 0.16)" : "transparent"
          }
        }), this.renderLoopDirectionPopupArrow(i, n, d, s));
      })));
    }
    renderLoopDirectionPopupArrow(e, t, r, n) {
      var i = this.getLoopDirectionIconVector(e),
        s = 22,
        a = 45,
        l = {
          x: n.x + i.x * a,
          y: n.y + i.y * a
        },
        c = {
          x: n.x + i.x * s,
          y: n.y + i.y * s
        },
        d = t ? l : c,
        h = t ? c : l,
        p = -i.y,
        u = i.x,
        g = t ? {
          x: -i.x,
          y: -i.y
        } : i,
        m = 7,
        f = 4,
        y = {
          x: h.x - 7 * g.x + 4 * p,
          y: h.y - 7 * g.y + 4 * u
        },
        v = {
          x: h.x - 7 * g.x - 4 * p,
          y: h.y - 7 * g.y - 4 * u
        },
        b = r ? "#16a34a" : "#222";
      return o().createElement("g", {
        style: {
          stroke: b,
          strokeWidth: r ? 1.8 : 1.2,
          fill: "none"
        }
      }, o().createElement("path", {
        d: "M".concat(d.x, ",").concat(d.y, " L").concat(h.x, ",").concat(h.y)
      }), o().createElement("path", {
        d: "M".concat(h.x, ",").concat(h.y, " L").concat(y.x, ",").concat(y.y)
      }), o().createElement("path", {
        d: "M".concat(h.x, ",").concat(h.y, " L").concat(v.x, ",").concat(v.y)
      }));
    }
    selectLoopDirection(e, t, r) {
      this.setState({
        openLoopDirectionPickerKey: void 0
      }), this.updateArrow(e, "start" == t ? {
        loopStartDir: r
      } : {
        loopEndDir: r
      });
    }
    renderArrowStyleIcon(e) {
      var t = {
          style: e
        },
        r = (0, Pe.dF)(H.W.getArrowTail(t), H.W.getArrowShaft(t), H.W.getArrowHead(t));
      return o().cloneElement(r, {
        style: Oi(Oi({}, r.props.style), {}, {
          width: 46,
          height: 16,
          strokeWidth: 1
        })
      });
    }
    renderArrowCurveIcon(e) {
      var t = this.getArrowCurveIconOffset(e),
        r = 14,
        n = 7,
        i = 49,
        s = r + t,
        a = t ? "M".concat(7, ",").concat(r, " C20,").concat(s, " 44,").concat(s, " ").concat(i, ",").concat(r) : "M".concat(7, ",").concat(r, " L").concat(i, ",").concat(r);
      return o().createElement("svg", {
        viewBox: "0 0 56 28",
        style: {
          width: 46,
          height: 20,
          overflow: "visible",
          stroke: "var(--ui-text, #333)",
          strokeWidth: 1,
          fill: "none"
        }
      }, o().createElement("path", {
        d: a
      }), this.renderCurveIconHead(i, r, t));
    }
    renderArrowSlideIcon(e) {
      var t = "above" == e ? 9 : "below" == e ? 19 : 14;
      return o().createElement("svg", {
        viewBox: "0 0 52 28",
        style: {
          width: 40,
          height: 20,
          overflow: "visible",
          stroke: "var(--ui-text, #333)",
          strokeWidth: 1,
          fill: "none"
        }
      }, o().createElement("path", {
        d: "M7,14 L45,14",
        style: {
          opacity: "none" == e ? 1 : .22
        }
      }), o().createElement("path", {
        d: "M7,".concat(t, " L45,").concat(t)
      }), o().createElement("path", {
        d: "M45,".concat(t, " L37,").concat(t - 4)
      }), o().createElement("path", {
        d: "M45,".concat(t, " L37,").concat(t + 4)
      }));
    }
    renderCurveIconHead(e, t, r) {
      var n = 14,
        i = -r,
        s = Math.max(1, Math.sqrt(n * n + i * i)),
        a = n / s,
        l = i / s,
        c = -l,
        d = a,
        h = 8,
        p = 4;
      return o().createElement("g", null, o().createElement("path", {
        d: "M".concat(e, ",").concat(t, " L").concat(e - 8 * a + 4 * c, ",").concat(t - 8 * l + 4 * d)
      }), o().createElement("path", {
        d: "M".concat(e, ",").concat(t, " L").concat(e - 8 * a - 4 * c, ",").concat(t - 8 * l - 4 * d)
      }));
    }
    getArrowCurveIconOffset(e) {
      switch (e) {
        case "up":
          return -4;
        case "up-1pc":
          return -7;
        case "up-2pc":
          return -12;
        case "down":
          return 4;
        case "down-1pc":
          return 7;
        case "down-2pc":
          return 12;
        default:
          return 0;
      }
    }
    getLabelPositionItems() {
      return [{
        key: "above",
        value: "above"
      }, {
        key: "below",
        value: "below"
      }, {
        key: "middle",
        value: "middle"
      }];
    }
    getLabelActionItems(e, t) {
      var r = this.getLabelPositionItems().map(e => e.key),
        n = H.W.getArrowLabels(e).map(e => e.position),
        i = [{
          key: this.getCurrentLabelActionKey(t),
          value: t.position,
          hidden: !0
        }];
      return r.forEach(e => {
        e != t.position && n.indexOf(e) < 0 && i.push({
          key: "change:" + e,
          value: "Change to " + this.capitalizeLabelPosition(e) + " Position"
        });
      }), r.forEach(e => {
        n.indexOf(e) < 0 && i.push({
          key: "add:" + e,
          value: "Add new " + this.capitalizeLabelPosition(e) + " Position"
        });
      }), i.push({
        key: "delete",
        value: "Delete this label"
      }), i;
    }
    getNewLabelActionItems(e) {
      var t = H.W.getArrowLabels(e).map(e => e.position);
      return [{
        key: "current:new",
        value: "+",
        hidden: !0
      }, ...this.getLabelPositionItems().filter(e => t.indexOf(e.key) < 0).map(e => ({
        key: "add:" + e.key,
        value: "Add new " + this.capitalizeLabelPosition(e.key) + " Position"
      }))];
    }
    getCurrentLabelActionKey(e) {
      return "current:" + e.position;
    }
    handleLabelAction(e, t, r) {
      "delete" != r ? 0 != r.indexOf("change:") ? 0 == r.indexOf("add:") && this.addArrowLabel(e, r.substring(4)) : this.updateArrowLabelPosition(e, t, r.substring(7)) : this.removeArrowLabel(e, t.position);
    }
    capitalizeLabelPosition(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    renderNewLabelAction(e, t) {
      var r = this.getNewLabelActionItems(e);
      return r.length <= 1 ? null : o().createElement(Ut.A, {
        width: 28,
        expansionWidth: 150,
        data: r,
        value: "current:new",
        selectBoxStyle: {
          height: t - 4,
          boxSizing: "border-box"
        },
        inputStyle: {
          height: t - 6,
          lineHeight: "".concat(t - 6, "px"),
          boxSizing: "border-box",
          textAlign: "center"
        },
        onChange: t => this.handleNewLabelAction(e, t),
        className: "button-dropdown",
        hideCaret: !0,
        stopPropagationOnSelect: !0,
        usePositionFixedOnExpand: !0
      });
    }
    handleNewLabelAction(e, t) {
      0 == t.indexOf("add:") && this.addArrowLabel(e, t.substring(4));
    }
    renderArrows(e) {
      var t = this.getCellSelectItems(e),
        r = 28,
        n = "#d1d5db",
        i = {
          borderTop: "1px solid ".concat(n),
          borderBottom: "1px solid ".concat(n),
          borderLeft: "none",
          borderRight: "none",
          padding: 0,
          verticalAlign: "middle",
          background: "var(--ui-surface, white)"
        },
        s = {
          height: r,
          boxSizing: "border-box"
        },
        a = {
          height: 26,
          lineHeight: "".concat(26, "px"),
          boxSizing: "border-box"
        },
        l = {
          maxHeight: 300,
          overflowY: "auto"
        };
      return o().createElement("div", {
        className: "tw:flex tw:flex-col tw:gap-0"
      }, o().createElement("table", {
        className: "tw:mx-2 tw:border-collapse tw:bg-[var(--ui-surface,white)]"
      }, o().createElement("colgroup", null, o().createElement("col", {
        style: {
          width: 20
        }
      }), o().createElement("col", {
        style: {
          width: 76
        }
      }), o().createElement("col", {
        style: {
          width: 76
        }
      }), o().createElement("col", {
        style: {
          width: 62
        }
      }), o().createElement("col", {
        style: {
          width: 56
        }
      }), o().createElement("col", {
        style: {
          width: 50
        }
      }), o().createElement("col", null), o().createElement("col", {
        style: {
          width: 32
        }
      })), o().createElement("thead", null, o().createElement("tr", {
        className: "tw:text-xs tw:font-bold tw:text-[color:var(--ui-text-muted,#6b7280)]"
      }, o().createElement("th", null), o().createElement("th", {
        className: "tw:text-left"
      }, "From"), o().createElement("th", {
        className: "tw:text-left"
      }, "To"), o().createElement("th", {
        className: "tw:text-left"
      }, "Style"), o().createElement("th", {
        className: "tw:text-left"
      }, "Curve/Out"), o().createElement("th", {
        className: "tw:text-left"
      }, "Slide/In"), o().createElement("th", {
        className: "tw:text-left"
      }, o().createElement("div", {
        className: "tw:flex tw:items-center tw:justify-between"
      }, o().createElement("span", null, "Labels"), o().createElement("button", {
        className: "btn-normal",
        style: {
          height: 24,
          padding: "0 8px"
        },
        onClick: this.addArrow
      }, o().createElement("i", {
        className: "fa fa-plus"
      }), " Arrow"))), o().createElement("th", null))), o().createElement("tbody", null, e.data.arrows.map(n => {
        var c = H.W.isSelfLoopArrow(e, n);
        return o().createElement("tr", {
          key: n.id,
          style: {
            opacity: n.hidden ? .45 : void 0
          },
          onMouseEnter: () => this.setState({
            hoveredArrowId: n.id
          }),
          onMouseMove: () => this.state.hoveredArrowId == n.id ? void 0 : this.setState({
            hoveredArrowId: n.id
          }),
          onMouseLeave: () => this.setState({
            hoveredArrowId: void 0
          })
        }, o().createElement("td", {
          style: {
            padding: 0,
            textAlign: "center",
            verticalAlign: "middle"
          }
        }, o().createElement("i", {
          className: n.hidden ? "fa fa-eye-slash" : "fa fa-eye",
          title: n.hidden ? "Show arrow" : "Hide arrow",
          style: {
            cursor: "pointer",
            color: n.hidden ? "#9ca3af" : "#6b7280",
            fontSize: 14
          },
          onClick: () => this.toggleArrowHidden(n)
        })), o().createElement("td", {
          style: i
        }, o().createElement(Ut.A, {
          width: "100%",
          expansionWidth: 96,
          data: t,
          value: n.fromCellKey,
          selectBoxStyle: s,
          inputStyle: a,
          onChange: e => this.updateArrowFromCell(n, e),
          className: "border-only-focus",
          itemsStyle: l,
          searchable: !0,
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        })), o().createElement("td", {
          style: i
        }, o().createElement(Ut.A, {
          width: "100%",
          expansionWidth: 96,
          data: t,
          value: n.toCellKey,
          selectBoxStyle: s,
          inputStyle: a,
          onChange: e => this.updateArrowToCell(n, e),
          className: "border-only-focus",
          itemsStyle: l,
          searchable: !0,
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        })), o().createElement("td", {
          style: i
        }, o().createElement(Ut.A, {
          width: "100%",
          expansionWidth: 76,
          data: this.getArrowStyleItems(),
          value: n.style || "normal",
          onRenderItem: this.renderArrowStyleItem,
          onRenderValue: this.renderArrowStyleValue,
          selectBoxStyle: s,
          inputStyle: Oi(Oi({}, a), {}, {
            display: "flex",
            alignItems: "center"
          }),
          onChange: e => this.updateArrow(n, {
            style: e
          }),
          className: "button-dropdown",
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        })), o().createElement("td", {
          style: i
        }, c ? this.renderLoopDirectionPicker(n, "start", n.loopStartDir || "ul", r) : o().createElement(Ut.A, {
          width: "100%",
          expansionWidth: 74,
          data: this.getArrowCurveItems(),
          value: n.curve || "none",
          onRenderItem: this.renderArrowCurveItem,
          onRenderValue: this.renderArrowCurveValue,
          selectBoxStyle: s,
          inputStyle: Oi(Oi({}, a), {}, {
            display: "flex",
            alignItems: "center"
          }),
          onChange: e => this.updateArrow(n, {
            curve: e
          }),
          className: "button-dropdown",
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        })), o().createElement("td", {
          style: i
        }, c ? this.renderLoopDirectionPicker(n, "end", n.loopEndDir || "ur", r) : o().createElement(Ut.A, {
          width: "100%",
          expansionWidth: 66,
          data: this.getArrowSlideItems(),
          value: n.slide || "none",
          onRenderItem: this.renderArrowSlideItem,
          onRenderValue: this.renderArrowSlideValue,
          selectBoxStyle: s,
          inputStyle: Oi(Oi({}, a), {}, {
            display: "flex",
            alignItems: "center"
          }),
          onChange: e => this.updateArrow(n, {
            slide: e
          }),
          className: "button-dropdown",
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        })), o().createElement("td", {
          style: i
        }, o().createElement("div", {
          className: "tw:min-w-0 tw:flex tw:flex-col tw:gap-1 tw:overflow-hidden tw:p-1"
        }, H.W.getArrowLabels(n).length <= 0 ? this.renderNewLabelAction(n, r) : null, H.W.getArrowLabels(n).map(e => o().createElement("div", {
          key: e.position,
          className: "tw:flex tw:min-w-0 tw:items-center tw:gap-1"
        }, o().createElement(Ut.A, {
          width: 70,
          expansionWidth: 150,
          data: this.getLabelActionItems(n, e),
          value: this.getCurrentLabelActionKey(e),
          selectBoxStyle: {
            height: 24,
            boxSizing: "border-box"
          },
          inputStyle: {
            height: 22,
            lineHeight: "".concat(22, "px"),
            boxSizing: "border-box"
          },
          onChange: t => this.handleLabelAction(n, e, t),
          className: "button-dropdown",
          hideCaret: !0,
          stopPropagationOnSelect: !0,
          usePositionFixedOnExpand: !0
        }), o().createElement("div", {
          className: "tw:min-w-0 tw:flex-1"
        }, this.renderInlineMathEditor("label-" + n.id + "-" + e.position, this.state.model.elements[e.editorId], t => this.updateArrowLabelModel(n, e, t), !1, !0, 24, !0)))))), o().createElement("td", {
          style: {
            padding: 0,
            verticalAlign: "middle"
          }
        }, o().createElement("button", {
          className: "btn-normal",
          title: "Remove arrow",
          style: {
            height: r,
            width: 28,
            boxSizing: "border-box",
            padding: 0,
            visibility: this.state.hoveredArrowId == n.id ? "visible" : "hidden"
          },
          onClick: () => this.removeArrow(n.id)
        }, o().createElement("i", {
          className: "fa fa-trash"
        }))));
      }))));
    }
    renderSpacingSettings(e) {
      var t = e.data.settings || {},
        r = this.state.showColStretchInput || void 0 !== t.colGapPx,
        n = this.state.showRowStretchInput || void 0 !== t.rowGapPx;
      return o().createElement("div", {
        className: "tw:flex tw:items-center tw:gap-2 tw:text-xs tw:text-[color:var(--ui-text-muted,#4b5563)]"
      }, o().createElement("div", {
        className: "tw:relative"
      }, o().createElement("button", {
        className: "btn-normal",
        title: "XyMatrix spacing settings",
        onClick: () => this.setState({
          showSpacingMenu: !this.state.showSpacingMenu
        })
      }, o().createElement("i", {
        className: "fa fa-cog"
      })), this.state.showSpacingMenu ? o().createElement("div", {
        className: "tw:absolute tw:left-0 tw:top-full tw:z-50 tw:flex tw:flex-col tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)] tw:shadow",
        style: {
          minWidth: 130
        },
        onMouseLeave: () => this.setState({
          showSpacingMenu: !1
        })
      }, o().createElement("button", {
        className: "btn-normal tw:text-left",
        style: {
          border: "none"
        },
        onClick: () => this.setState({
          showColStretchInput: !0,
          showSpacingMenu: !1
        })
      }, "Set Col Stretch"), o().createElement("button", {
        className: "btn-normal tw:text-left",
        style: {
          border: "none"
        },
        onClick: () => this.setState({
          showRowStretchInput: !0,
          showSpacingMenu: !1
        })
      }, "Set Row Stretch")) : void 0), r ? this.renderSpacingInput("Col stretch", "colGapPx", t.colGapPx) : void 0, n ? this.renderSpacingInput("Row stretch", "rowGapPx", t.rowGapPx) : void 0);
    }
    renderSpacingInput(e, t, r) {
      return o().createElement("label", {
        className: "tw:flex tw:items-center tw:gap-1"
      }, o().createElement("span", null, e), o().createElement("input", {
        type: "number",
        min: 40,
        max: 240,
        step: 4,
        value: void 0 === r ? "" : r,
        className: "tw:w-16 tw:border tw:border-[var(--ui-border,#d1d5db)] tw:px-1",
        onChange: e => this.updateSpacingSetting(t, e.target.value)
      }));
    }
    updateSpacingSetting(e, t) {
      if ("" === t.trim()) return this.setState("colGapPx" == e ? {
        showColStretchInput: !0
      } : {
        showRowStretchInput: !0
      }), void this.updateSettings("colGapPx" == e ? {
        colGapPx: void 0
      } : {
        rowGapPx: void 0
      });
      var r = Number(t);
      isFinite(r) && this.updateSettings("colGapPx" == e ? {
        colGapPx: r
      } : {
        rowGapPx: r
      });
    }
    renderPreview(e, t) {
      var r = this.props.MathTypeClss,
        n = this.buildPreviewShape(e, t.diagramWidth, t.diagramHeight, this.state.model.elements);
      return o().createElement("div", {
        className: "tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)]",
        style: {
          width: "100%",
          maxWidth: t.viewportWidth,
          height: t.viewportHeight,
          overflow: "auto"
        }
      }, o().createElement("div", {
        style: {
          width: t.diagramWidth,
          height: t.diagramHeight,
          position: "relative"
        }
      }, o().createElement(r, {
        readOnly: !0,
        model: this.buildPreviewModel(e, t),
        selected: {
          lineIndex: 0,
          charIndex: 0,
          controlled: !0
        },
        oneMode: "diagram",
        style: {
          padding: 0,
          background: "white",
          width: t.diagramWidth,
          height: t.diagramHeight
        },
        rootEditorStyle: {
          minHeight: 0,
          padding: 0
        },
        toolbarEnabled: !1,
        itemsBarHide: !0,
        deplayRenderEnabled: !1,
        requestRenderDiagramExtraControls: () => {}
      }), this.renderPreviewHighlights(n), this.renderPreviewGuides(n)));
    }
    renderPreviewHighlights(e) {
      var t = this.renderPreviewCellHighlight(e),
        r = this.renderPreviewArrowHighlight(e);
      return t || r ? o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 1e3
        }
      }, t, r) : null;
    }
    renderPreviewCellHighlight(e) {
      if (!this.state.hoveredCellKey) return null;
      for (var t = H.W.getLayout(e, this.state.model.elements), r = 0; r < e.data.cells.length; r++) for (var n = e.data.cells[r], i = 0; i < n.length; i++) if (n[i].key == this.state.hoveredCellKey) {
        var s = {
            x: t.x[i],
            y: t.y[r]
          },
          a = t.cellSizes[r][i] || {
            width: 24,
            height: 22
          };
        return o().createElement("div", {
          key: "cell-highlight",
          style: {
            position: "absolute",
            left: s.x - a.width / 2 - 6,
            top: s.y - a.height / 2 - 5,
            width: a.width + 12,
            height: a.height + 10,
            background: "rgba(34, 197, 94, 0.14)",
            border: "1px solid rgba(34, 197, 94, 0.55)",
            boxSizing: "border-box"
          }
        });
      }
      return null;
    }
    renderPreviewArrowHighlight(e) {
      if (!this.state.hoveredArrowId) return null;
      var t = e.data.arrows.find(e => e.id == this.state.hoveredArrowId);
      if (!t || t.hidden) return null;
      var r = H.W.getArrowPoints(e, t, this.state.model.elements);
      if (!r) return null;
      var n = H.W.getArrowCurveBezier(r, t, e, this.state.model.elements),
        i = n ? "M".concat(n.p1.x, ",").concat(n.p1.y, " C").concat(n.cp.x, ",").concat(n.cp.y, " ").concat(n.cp2.x, ",").concat(n.cp2.y, " ").concat(n.p2.x, ",").concat(n.p2.y) : "M".concat(r.from.x, ",").concat(r.from.y, " L").concat(r.to.x, ",").concat(r.to.y);
      return o().createElement("svg", {
        key: "arrow-highlight",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "visible"
        }
      }, o().createElement("path", {
        d: i,
        stroke: "rgba(34, 197, 94, 0.22)",
        strokeWidth: 10,
        fill: "none",
        strokeLinecap: "round"
      }));
    }
    renderPreviewGuides(e) {
      var t = H.W.getLayout(e, this.state.model.elements),
        r = Math.max(1, e.data.cells.length),
        n = Math.max(1, e.data.cells.reduce((e, t) => Math.max(e, t.length), 0)),
        i = Oi(Oi({}, this.getGuideBadgeStyle()), {}, {
          position: "absolute",
          marginLeft: -9,
          marginTop: -9
        });
      return o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 1001
        }
      }, t.x.slice(0, n).map((e, t) => o().createElement("div", {
        key: "col-" + t,
        title: "Column " + (t + 1),
        style: Oi(Oi({}, i), {}, {
          left: e,
          top: 18
        })
      }, t + 1)), t.y.slice(0, r).map((e, t) => o().createElement("div", {
        key: "row-" + t,
        title: "Row " + (t + 1),
        style: Oi(Oi({}, i), {}, {
          left: 18,
          top: e
        })
      }, t + 1)));
    }
    buildPreviewModel(e, t) {
      var r;
      return {
        id: "xy-preview-root",
        lines: [{
          id: "xy-preview-line",
          blocks: [this.buildPreviewDiagram(e, t)]
        }]
      };
    }
    buildPreviewDiagram(e, t) {
      var r = this.buildPreviewShape(e, t.diagramWidth, t.diagramHeight, this.state.model.elements),
        n = H.W.getOwnedEditorIds(e),
        i = {};
      n.forEach(e => {
        var t = this.state.model.elements[e];
        t && (i[e] = Oi(Oi({}, t), {}, {
          shape: t.shape ? Oi(Oi({}, t.shape), {}, {
            data: t.shape.data ? Oi({}, t.shape.data) : t.shape.data
          }) : t.shape
        }));
      });
      var o = {
        id: "xy-preview-diagram",
        type: "composite",
        text: "\\diagram",
        elements: i,
        shapes: [r],
        connections: [],
        intersections: {
          id: "xy-preview-intersections",
          items: [],
          style: {}
        },
        settings: {
          grid: !1,
          diagramHeight: t.diagramHeight,
          diagramWidth: t.diagramWidth
        }
      };
      return H.W.normalizeDiagram(o);
    }
    buildPreviewShape(e, t, r, n) {
      var i = H.W.getContentSize(e, n),
        o = i.width,
        s = i.height,
        a = Math.max(8, (t - o) / 2),
        l = Math.max(8, (r - s) / 2);
      return Oi(Oi({}, e), {}, {
        data: Oi(Oi({}, e.data), {}, {
          p1: {
            x: a,
            y: l
          },
          p2: {
            x: a + o,
            y: l + s
          }
        })
      });
    }
    getPreviewSize(e) {
      var t = H.W.getContentSize(e, this.state.model.elements),
        r = t.width,
        n = t.height,
        i = Math.max(300, r + 16),
        o = Math.max(220, n + 16);
      return {
        diagramWidth: i,
        diagramHeight: o,
        viewportWidth: Math.min(540, Math.max(430, i)),
        viewportHeight: Math.min(470, Math.max(340, o))
      };
    }
    renderSourceText(e) {
      var t = e.data.source || H.W.generateSource(e, this.state.model.elements);
      return o().createElement("div", {
        className: "tw:relative tw:min-h-0 tw:min-w-0 tw:max-w-full tw:flex-1"
      }, o().createElement("textarea", {
        readOnly: !0,
        wrap: "soft",
        className: "tw:block tw:h-full tw:min-h-[150px] tw:w-full tw:max-w-full tw:box-border tw:resize-none tw:overflow-auto tw:border tw:border-[var(--ui-border,#d1d5db)] tw:p-2 tw:pr-9 tw:font-mono tw:whitespace-pre-wrap tw:break-words",
        value: t
      }), o().createElement("button", {
        className: "btn-normal",
        title: this.state.sourceCopied ? "Copied" : "Copy XyMatrix source",
        style: {
          position: "absolute",
          right: 6,
          bottom: 9,
          width: 26,
          height: 24,
          padding: 0
        },
        onClick: () => this.copySourceText(t)
      }, o().createElement("i", {
        className: this.state.sourceCopied ? "fa fa-check" : "fa fa-copy"
      })));
    }
    copySourceText(e) {
      navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(e).then(this.markSourceCopied, () => this.copySourceTextFallback(e)) : this.copySourceTextFallback(e);
    }
    copySourceTextFallback(e) {
      var t = document.createElement("textarea");
      t.value = e, t.style.position = "fixed", t.style.left = "-9999px", t.style.top = "0", document.body.appendChild(t), t.focus(), t.select(), document.execCommand("copy"), document.body.removeChild(t), this.markSourceCopied();
    }
    renderDialog() {
      var e = this.getShape(),
        t = this.getPreviewSize(e),
        r = Math.max(1040, t.viewportWidth + 560);
      return o().createElement(Se.A, {
        size: "medium",
        scroll: "body",
        show: this.props.show,
        title: "XyMatrix",
        headerHidden: !1,
        style: {
          width: r,
          maxWidth: "calc(100vw - 60px)"
        },
        contentStyle: {
          padding: 12,
          minHeight: 600,
          maxHeight: "calc(100vh - 160px)",
          overflow: "auto"
        },
        applyLabel: "Apply",
        okLabel: "OK",
        onApply: this.handleApply,
        onOk: this.handleOk,
        onCancel: this.props.onCancel,
        onClose: this.props.onCancel
      }, o().createElement("div", {
        className: "tw:grid tw:gap-4",
        style: {
          gridTemplateColumns: "minmax(500px, 1fr) minmax(".concat(t.viewportWidth, "px, 0.8fr)"),
          minHeight: 576
        }
      }, o().createElement("div", {
        className: "tw:flex tw:min-w-0 tw:flex-col tw:gap-3"
      }, o().createElement("div", {
        className: "tw:flex tw:gap-2"
      }, o().createElement("button", {
        className: "btn-normal",
        onClick: this.addRow
      }, o().createElement("i", {
        className: "fa fa-plus"
      }), " Row"), o().createElement("button", {
        className: "btn-normal",
        onClick: this.addColumn
      }, o().createElement("i", {
        className: "fa fa-plus"
      }), " Column"), this.renderSpacingSettings(e)), this.renderCellTable(e), this.renderArrows(e)), o().createElement("div", {
        className: "tw:flex tw:min-h-0 tw:min-w-0 tw:flex-col tw:gap-3"
      }, this.renderPreview(e, t), this.renderSourceText(e))));
    }
    render() {
      return o().createElement(Di, {
        show: this.props.show
      }, this.renderDialog());
    }
  }
  function Ii(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ti(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ii(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ii(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Li extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "groupSettingsRef", void 0), (0, n.A)(this, "delayUpdate", L.A.createLaterRunObject("latest", 200)), (0, n.A)(this, "diagramSettingsHotkey", void 0), (0, n.A)(this, "refresh", () => {
        this.forceUpdate();
      }), (0, n.A)(this, "handleDeleteItem", () => {
        this.props.onDeleteEntities();
      }), (0, n.A)(this, "handleThicknessChanged", e => {
        this.changeEntityStyle("thickness", e);
      }), (0, n.A)(this, "handleStrokeColorChanged", (e, t) => {
        this.changeEntityStyle("strokeColor", e, t);
      }), (0, n.A)(this, "handleFillColorChanged", (e, t, r) => {
        if (r) return this.changingEntityStyle("fillColor", e, t);
        this.changeEntityStyle("fillColor", e, t);
      }), (0, n.A)(this, "raiseEntitiesChange", (e, t, r) => {
        var n = r ? ye.A.getBuilder().withFocusAcquired().build() : null;
        t ? this.props.onEntitiesChanging(e, n) : this.props.onEntitiesChanged(e, n);
      }), (0, n.A)(this, "getSelectedEntites", () => this.props.entities.length > 0 ? this.props.entities : [this.props.data]), (0, n.A)(this, "getChangedEntitiesProperty", (e, t, r, n) => (n = n || this.getSelectedEntites(), Br.A.changePropertyEntities(this.props.data, n, e, t, r, this.props.editorRefMap))), (0, n.A)(this, "changeEntityProperty", (e, t, r, n, i) => {
        var o = this.getChangedEntitiesProperty(e, t, r, this.getSelectedEntites());
        this.raiseEntitiesChange(o, n, i);
      }), (0, n.A)(this, "handleToggleIntersection", e => {
        e ? this.props.onRemoveIntersections(this.getSelectedEntites()) : this.props.onAddIntersections(this.getSelectedEntites());
      }), (0, n.A)(this, "handleToggleBlockIntersection", e => {
        this.changeEntityProperty("settings", "blockIntersection", !e);
      }), (0, n.A)(this, "handleChangePresetColor", () => {
        this.props.fixedContextHandler.getMtFuncs().genericRequest("preset-color-manager-request");
      }), (0, n.A)(this, "handleBoxShadowChanged", e => {
        this.changeEntityStyle("boxShadow", e, !0);
      }), (0, n.A)(this, "handleBoxShadowChanging", e => {
        this.changingEntityStyle("boxShadow", e, !0);
      }), (0, n.A)(this, "handleGroupEntityRotationChanged", (e, t, r, n) => {
        r ? this.props.onEntitiesChangingForGroup(e, t, n) : this.props.onEntitiesChangedForGroup(e, t, n);
      }), (0, n.A)(this, "handleNewTypeEntityChanged", (e, t) => {
        var r = f.A.replaceArrayItemBy(this.props.data.shapes, r => r.id != e.id ? null : t),
          n = Ti(Ti({}, this.props.data), {}, {
            shapes: r
          });
        this.props.onDiagramModelChanged(n, [t.id]);
      }), (0, n.A)(this, "handleEntityPropertyChanging", (e, t, r, n) => {
        this.changeEntityProperty(t, r, n, !0, !1);
      }), (0, n.A)(this, "handleEntityPropertyChanged", (e, t, r, n, i) => {
        this.changeEntityProperty(t, r, n, !1, i);
      }), (0, n.A)(this, "handleNewEntityChanged", e => {
        var t = f.A.replaceArrayByEntity(this.props.data.shapes, e),
          r = Ti(Ti({}, this.props.data), {}, {
            shapes: t
          });
        this.props.onDiagramModelChanged(r, [e.id]);
      }), (0, n.A)(this, "handleResetImageSize", e => {
        if (e.___size) {
          var t = e.___size.width / e.___size.height,
            r,
            n = y.A.rectWidth(e.data) / t,
            i = e.data,
            o = i.p1,
            s = i.p2,
            a = Ti(Ti({}, e), {}, {
              data: Ti(Ti({}, e.data), {}, {
                p2: {
                  x: s.x,
                  y: o.y + n
                }
              })
            });
          this.props.onEntitiesChanged([a], null);
        }
      }), (0, n.A)(this, "markXyMatrixSourceCopied", () => {
        this.setState({
          xyMatrixSourceCopied: !0
        }), setTimeout(() => {
          this.state.xyMatrixSourceCopied && this.setState({
            xyMatrixSourceCopied: !1
          });
        }, 1200);
      }), (0, n.A)(this, "handleCloseXyMatrixDialog", () => {
        this.setState({
          xyMatrixDialogShapeId: void 0
        });
      }), (0, n.A)(this, "handleXyMatrixDialogOk", (e, t) => {
        this.setState({
          xyMatrixDialogShapeId: void 0
        }), this.props.onDiagramModelChanged(e, t);
      }), (0, n.A)(this, "handleXyMatrixDialogApply", (e, t) => {
        this.props.onDiagramModelChanged(e, t);
      }), (0, n.A)(this, "handleEditorDisplayStyleChange", e => {
        var t,
          r = this.getSelectedEntites().map(t => Ti(Ti({}, t), {}, {
            isMathDisplayMode: e
          }));
        this.raiseEntitiesChange(r, !1, !1);
      }), (0, n.A)(this, "handleRequestDiagramElement", () => this.props.diagramRef), (0, n.A)(this, "handleDiagramModelChanged", e => {
        this.raiseEntitiesChange([e]);
      }), (0, n.A)(this, "handleGroupSettingsRef", e => {
        this.groupSettingsRef = e;
      }), (0, n.A)(this, "handleFreeDrawingThicknessChanged", e => {
        this.props.onFreeDrawingInfoChanged(Ti(Ti({}, this.props.freeDrawingInfo), {}, {
          thickness: e
        }));
      }), (0, n.A)(this, "handleFreeDrawingStrokeColorChanged", e => {
        this.props.onFreeDrawingInfoChanged(Ti(Ti({}, this.props.freeDrawingInfo), {}, {
          strokeColor: e
        }));
      }), (0, n.A)(this, "handleDiagramSettingsHotkey", e => {
        this.diagramSettingsHotkey = e;
      });
    }
    componentDidMount() {
      this.openXyMatrixDialogOnMount();
    }
    componentDidUpdate() {
      this.openXyMatrixDialogOnMount();
    }
    openXyMatrixDialog(e) {
      this.setState({
        xyMatrixDialogShapeId: e
      });
    }
    openXyMatrixDialogOnMount() {
      var e = this.props.entities && 1 == this.props.entities.length ? this.props.entities[0] : void 0;
      Li.showXyMatrixDialogOnMount && H.W.isXyMatrix(e) && (Li.showXyMatrixDialogOnMount = void 0, this.openXyMatrixDialog(e.id));
    }
    shouldComponentUpdate(e, t) {
      var r = t.xyMatrixDialogShapeId != this.state.xyMatrixDialogShapeId || t.xyMatrixSourceCopied != this.state.xyMatrixSourceCopied || this.innerShouldUpdateComponent(e);
      return e.isChanging ? (r && this.delayUpdate.later(this.refresh), !1) : (r && this.delayUpdate.cancel(), r);
    }
    getMtFuncs() {
      return this.props.fixedContextHandler.getMtFuncs();
    }
    innerShouldUpdateComponent(e) {
      var t = e.data.settings != this.props.data.settings || e.subSelection != this.props.subSelection || e.isChanging != this.props.isChanging || e.data.intersections != this.props.data.intersections || e.hidden != this.props.hidden || e.freeDrawingInfo != this.props.freeDrawingInfo || e.selectedDgPropObj != this.props.selectedDgPropObj;
      if (t) return t;
      var r = e.entities,
        n = this.props.entities;
      if (r.length != n.length) return !0;
      for (var i = 0; i < r.length; i++) if (r[i] != n[i]) return !0;
      return !1;
    }
    changeEntityStyle(e, t, r) {
      this.changeEntityProperty("style", e, t, !1, r);
    }
    changingEntityStyle(e, t, r) {
      this.changeEntityProperty("style", e, t, !0, r);
    }
    renderBezierCustomDetails(e) {
      return fr(e => gr.A.isCubicLineArrow(e) && !gr.A.isConnection(e) || gr.A.isPolygonCurve(e), e, this.props.data, e => o().createElement(Qn, {
        entity: e,
        getChangedEntityProperty: this.getChangedEntitiesProperty,
        raiseEntitiesChange: this.raiseEntitiesChange
      }));
    }
    renderArrowDetails(e) {
      return o().createElement(Xn, {
        entities: e,
        diagram: this.props.data,
        changeEntityProperty: this.changeEntityProperty
      });
    }
    renderConnectionDetails(e) {
      return o().createElement(Or, {
        refMap: this.props.editorRefMap,
        entities: e,
        data: this.props.data,
        raiseEntitiesChange: this.raiseEntitiesChange,
        getSelectedEntites: this.getSelectedEntites,
        changeEntityProperty: this.changeEntityProperty
      });
    }
    renderControlPointSettings(e) {
      if (1 != e.length) return null;
      var t = !0;
      return fr(e => (t = t && gr.A.isStraightLineArrow(e), gr.A.isShapeArrow(e) || gr.A.isPolygonCurve(e) || gr.A.isPolygon(e)), e, this.props.data, e => {
        var r = yi.A.getSubOrUndefined(this.props.subSelection, "line-point");
        return o().createElement(Yn, {
          straightArrowOnly: t,
          entity: e,
          model: this.props.data,
          subSelection: r,
          getSelectedEntites: this.getSelectedEntites,
          onRemoveControlPoint: this.props.onRemoveControlPoint,
          raiseEntitiesChange: this.raiseEntitiesChange,
          onNewTypeEntityChanged: this.handleNewTypeEntityChanged,
          onDiagramModelChanged: this.props.onDiagramModelChanged
        });
      });
    }
    renderIntersectionDetails(e) {
      return o().createElement(ar, {
        entities: e,
        changeEntityProperty: this.changeEntityProperty
      });
    }
    renderStrokeColorPicker(e, t) {
      return xr(["shape-object", "shape-arrow", "connection", "intersection"], "strokeColor", e, this.props.data, "with-frame-type", e => {
        var r = P.A.getEntityStyle(e, "strokeColor");
        return o().createElement(jt, {
          watch: [r]
        }, o().createElement("main", null, o().createElement(Re.A, {
          enableMoving: !0,
          showChangingPresetColorBtn: !0,
          requestPickerSettings: t.requestColorPickerSettings,
          value: r,
          onItemSelect: this.handleStrokeColorChanged,
          onChangePresetColor: this.handleChangePresetColor
        }), se.A.separator()));
      });
    }
    renderThicknessPicker(e) {
      return 1 == e.length && a.w.isDiagramEditorId(e[0].id) && !e[0].shape.frameType ? null : xr(["shape-object", "shape-arrow", "connection", "intersection"], "thickness", e, this.props.data, "with-frame-type", e => {
        var t = P.A.getEntityStyle(e, "thickness");
        return o().createElement(jt, {
          watch: [t]
        }, o().createElement(Le.A, {
          value: t,
          onItemSelect: this.handleThicknessChanged
        }));
      });
    }
    renderFillColorPicker(e, t) {
      return xr(["shape-object", "intersection", "shape-arrow"], "fillColor", e, this.props.data, "with-frame-type", e => {
        var r = P.A.getEntityStyle(e, "fillColor");
        return o().createElement(jt, {
          watch: [r]
        }, o().createElement("main", null, o().createElement(Ft, {
          showChangingPresetColorBtn: !0,
          value: r,
          requestPickerSettings: t.requestColorPickerSettings,
          onItemSelect: this.handleFillColorChanged
        }), se.A.separator()));
      });
    }
    renderBoxShadowSelect(e) {
      return xr(["shape-object"], "boxShadow", e, this.props.data, "with-frame-type", e => {
        var t = P.A.getEntityStyle(e, "boxShadow") || {};
        return o().createElement(jt, {
          watch: [t]
        }, o().createElement("main", {
          className: "test-box-shadow"
        }, o().createElement(Si, {
          fixedContextHandler: this.props.fixedContextHandler,
          value: t,
          onValueChanged: this.handleBoxShadowChanged,
          onValueChanging: this.handleBoxShadowChanging
        }), se.A.separator()));
      });
    }
    renderRotation(e) {
      if (!e || 1 != e.length) return null;
      if (gr.A.isGroupedEntity(e[0])) {
        var t = this.props,
          r = t.data,
          n = t.editorRefMap;
        return o().createElement(Nn, {
          entity: e[0],
          allEditors: r.elements,
          allEditorRef: n,
          onEntityChanged: this.handleGroupEntityRotationChanged
        });
      }
      return xr(["text"], "rotation", e, this.props.data, "all", e => o().createElement(Fr, {
        entity: e,
        changeEntityProperty: this.changeEntityProperty
      }));
    }
    renderSkewX(e) {
      if (!e || 1 != e.length) return null;
      if (gr.A.isGroupedEntity(e[0])) {
        var t = this.props,
          r = t.data,
          n = t.editorRefMap;
        return o().createElement(Vn, {
          entity: e[0],
          allEditors: r.elements,
          allEditorRef: n,
          onEntityChanged: this.handleGroupEntityRotationChanged
        });
      }
      return xr(["text"], "skewX", e, this.props.data, "all", e => o().createElement(Un, {
        entity: e,
        changeEntityProperty: this.changeEntityProperty
      }));
    }
    renderIntersecitonIcon(e) {
      if (!(e && e.length > 1)) return xr(["shape-object", "shape-arrow"], "intersection", e, this.props.data, "none", e => o().createElement(ir, {
        handleToggleBlockIntersection: this.handleToggleBlockIntersection,
        handleToggleIntersection: this.handleToggleIntersection,
        entity: e,
        intersections: this.props.data.intersections
      }));
    }
    renderRemove(e) {
      if (!h().every(e, e => a.w.isDiagramIntersectionId(e.id) || a.w.isDiagramEditorId(e.id))) return o().createElement(jt, null, se.A.getRemoveItem(this.handleDeleteItem));
    }
    isAllTheSameCompositeEntityType(e) {
      var t = e[0];
      return !h().some(e, e => !a.w.isDiagramCompositeShapeId(e.id) || e.type != t.type || void 0);
    }
    renderCompositeCustomSettings(e) {
      if (this.isAllTheSameCompositeEntityType(e)) {
        var t = e[0],
          r,
          n = U.A.getShapeManagement(t).getSettingsComponent();
        return o().createElement(n, {
          entity: t,
          fixedContextHandler: this.props.fixedContextHandler,
          forManyEntities: e.length > 1,
          subSelection: this.props.subSelection,
          onEntityPropertyChanging: this.handleEntityPropertyChanging,
          onEntityPropertyChanged: this.handleEntityPropertyChanged,
          onNewTypeEntityChanged: this.handleNewTypeEntityChanged,
          onEntityChanged: this.handleNewEntityChanged
        });
      }
    }
    renderChangeImageButton(e) {
      if (1 == e.length) {
        var t = e[0];
        if (a.w.isDiagramCompositeShapeId(t.id) && "image" == t.type) return o().createElement("main", null, o().createElement("button", {
          className: "btn-normal",
          style: {
            marginTop: 3,
            marginLeft: 5,
            marginRight: 5,
            width: 120
          },
          onClick: () => this.props.requestChangeImage(e[0])
        }, "Change Image"), o().createElement("button", {
          className: "btn-normal",
          style: {
            marginTop: 3,
            marginLeft: 5,
            marginRight: 5,
            width: 150
          },
          onClick: () => this.handleResetImageSize(e[0])
        }, "Reset Size Ratio"), se.A.separator());
      }
    }
    renderXyMatrixButton(e) {
      if (1 != e.length || !H.W.isXyMatrix(e[0])) return null;
      var t = e[0];
      return o().createElement("main", null, o().createElement("button", {
        className: "btn-normal",
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          width: 120
        },
        onClick: () => this.setState({
          xyMatrixDialogShapeId: t.id
        })
      }, o().createElement("i", {
        className: "fa fa-cog",
        style: {
          paddingRight: 4
        }
      }), "XyMatrix"), o().createElement("button", {
        className: "btn-normal",
        style: {
          marginTop: 3,
          marginRight: 5,
          width: 190
        },
        title: this.state.xyMatrixSourceCopied ? "Copied" : "Copy as \\xymatrix tex",
        onClick: () => this.copyXyMatrixSource(t)
      }, o().createElement("i", {
        className: this.state.xyMatrixSourceCopied ? "fa fa-check" : "fa fa-copy",
        style: {
          paddingRight: 4
        }
      }), "Copy as \\xymatrix tex"), se.A.separator());
    }
    copyXyMatrixSource(e) {
      var t = H.W.generateSource(e, this.props.data.elements);
      navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t).then(this.markXyMatrixSourceCopied, () => this.copyXyMatrixSourceFallback(t)) : this.copyXyMatrixSourceFallback(t);
    }
    copyXyMatrixSourceFallback(e) {
      var t = document.createElement("textarea");
      t.value = e, t.style.position = "fixed", t.style.left = "-9999px", t.style.top = "0", document.body.appendChild(t), t.focus(), t.select(), document.execCommand("copy"), document.body.removeChild(t), this.markXyMatrixSourceCopied();
    }
    renderXyMatrixDialog() {
      if (!this.state.xyMatrixDialogShapeId) return null;
      var e = H.W.getShape(this.props.data, this.state.xyMatrixDialogShapeId);
      return e ? o().createElement(Mi, {
        show: !0,
        data: this.props.data,
        shape: e,
        MathTypeClss: this.getMtFuncs().getMathTypeClss(),
        onCancel: this.handleCloseXyMatrixDialog,
        onApply: this.handleXyMatrixDialogApply,
        onOk: this.handleXyMatrixDialogOk
      }) : null;
    }
    renderStrokeType(e) {
      return xr(["shape-object"], "strokeType", e, this.props.data, "none", e => {
        var t = P.A.getEntityStyle(e, "strokeType");
        return o().createElement(jt, {
          watch: [t]
        }, o().createElement("main", null, o().createElement(Ie, {
          part: t,
          onItemSelect: e => this.changeEntityProperty("style", "strokeType", e)
        }), se.A.separator()));
      });
    }
    renderFrameStrokeType(e) {
      return xr(["text"], null, e, this.props.data, "with-frame-type", e => {
        if (!e.shape.frameType) return null;
        var t = P.A.getEditorStyle(e, "strokeType");
        return o().createElement(jt, {
          watch: [t]
        }, o().createElement("main", null, o().createElement(Te, {
          title: "Frame Stroke Type",
          part: t,
          onItemSelect: e => this.changeEntityProperty("style", "strokeType", e)
        }), se.A.separator()));
      });
    }
    renderFrameType(e) {
      return xr(["text"], null, e, this.props.data, "all", e => o().createElement(or, {
        entity: e,
        changeEntityProperty: this.changeEntityProperty
      }));
    }
    renderRoundedCorner(e) {
      return fr(e => a.w.isDiagramEditorId(e.id) && "rectangle" == e.shape.frameType || gr.A.isRectangle(e) || gr.A.isSquare(e), e, this.props.data, e => o().createElement(Lr, {
        entity: e,
        changeEntityProperty: this.changeEntityProperty
      }));
    }
    renderEditorSettings(e, t) {
      return vr(e, this.props.data, (e, r, n) => {
        var i = t.getPageSettings(),
          s = e.isTextMode ? i.fontSize : i.mathFontSize;
        return o().createElement(Tr, {
          requestPickerSettings: t.requestColorPickerSettings,
          disableAnchor: n,
          sameMode: r,
          fontBaseSize: s,
          entity: e,
          changeEntityProperty: this.changeEntityProperty,
          onRemove: this.props.onDeleteEntities,
          onDisplayStyleChange: this.handleEditorDisplayStyleChange
        });
      });
    }
    renderDiagramDetail() {
      return o().createElement(Xt, {
        data: this.props.data,
        isInline: this.props.isInline,
        fixedContextHandler: this.props.fixedContextHandler,
        onSelectedChanged: this.props.onSelectedChanged,
        onModelChanged: this.handleDiagramModelChanged,
        requestDiagramElement: this.handleRequestDiagramElement,
        requestTikzExport: this.props.requestTikzExport,
        changeEntityProperty: this.changeEntityProperty,
        showMoreOptions: this.props.showMoreOptions
      });
    }
    renderGroupSetting() {
      var e = this.props,
        t = e.sCarrier,
        r = e.entities;
      return r.length > 1 ? [o().createElement(hi, {
        key: "group",
        ref: this.handleGroupSettingsRef,
        fixedContextHandler: this.props.fixedContextHandler,
        diagramModel: this.props.data,
        sCarrier: t,
        onDiagramModelChanged: this.props.onDiagramModelChanged
      }), se.A.separator1()] : 1 == r.length && a.w.isDiagramGroupId(r[0].id) ? [o().createElement(fi, {
        key: "group2",
        diagramModel: this.props.data,
        groupEntity: r[0],
        onDiagramModelChanged: this.props.onDiagramModelChanged
      }), se.A.separator1()] : void 0;
    }
    renderFreeDrawing(e) {
      var t = this.props.freeDrawingInfo,
        r = t.thickness,
        n = t.strokeColor;
      return o().createElement("inside", null, o().createElement(jt, {
        watch: [r]
      }, o().createElement(Le.A, {
        value: r,
        onItemSelect: this.handleFreeDrawingThicknessChanged
      })), o().createElement(jt, {
        watch: [n]
      }, o().createElement("main", null, o().createElement(Re.A, {
        enableMoving: !0,
        requestPickerSettings: e.requestColorPickerSettings,
        value: n,
        onItemSelect: this.handleFreeDrawingStrokeColorChanged
      }), se.A.separator())), o().createElement("button", {
        style: {
          marginTop: 1
        },
        onClick: this.props.onExitDrawingMode,
        className: "btn-normal"
      }, "Exit Drawing Mode"));
    }
    renderDetails() {
      var e = this.props.fixedContextHandler.getMtFuncs();
      if (this.props.freeDrawingInfo) return this.renderFreeDrawing(e);
      var t = this.props.entities;
      return t.length <= 0 ? o().createElement("inside", null, this.renderDiagramDetail()) : o().createElement("inside", null, this.renderArrowDetails(t), this.renderConnectionDetails(t), this.renderIntersectionDetails(t), this.renderBezierCustomDetails(t), this.renderFrameType(t), this.renderRoundedCorner(t), this.renderFrameStrokeType(t), this.renderThicknessPicker(t), this.renderStrokeColorPicker(t, e), this.renderFillColorPicker(t, e), this.renderBoxShadowSelect(t), this.renderStrokeType(t), this.renderControlPointSettings(t), this.renderRotation(t), this.renderSkewX(t), this.renderChangeImageButton(t), this.renderXyMatrixButton(t), this.renderCompositeCustomSettings(t), this.renderEditorSettings(t, e), this.renderGroupSetting(), this.renderIntersecitonIcon(t), this.renderRemove(t));
    }
    renderDisableLayer(e) {
      if (e) return o().createElement("disabled-layer", null);
    }
    combine(e) {
      this.groupSettingsRef && this.groupSettingsRef.combine(e);
    }
    handleHotkey(e) {
      return this.diagramSettingsHotkey.triggerSelectByKey(e);
    }
    showHotkeys() {
      var e;
      null === (e = this.diagramSettingsHotkey) || void 0 === e || e.show();
    }
    hideHotkeys(e) {
      var t;
      null === (t = this.diagramSettingsHotkey) || void 0 === t || t.hide(e);
    }
    render() {
      return this.props.hidden ? o().createElement("div", null) : o().createElement("diagram-settings", null, this.renderDetails(), this.renderXyMatrixDialog(), this.renderHotKeyNumbering(), this.renderDisableLayer(this.props.isDisabled));
    }
    renderHotKeyNumbering() {
      return o().createElement(wi, {
        ref: this.handleDiagramSettingsHotkey
      });
    }
  }
  (0, n.A)(Li, "showXyMatrixDialogOnMount", void 0);
  class Ri extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "randomId", ("G" + Math.random()).substr(2)), (0, n.A)(this, "boldRandomId", ("GB" + Math.random()).substr(2));
    }
    shouldComponentUpdate(e) {
      return e.data.settings != this.props.data.settings || e.selected != this.props.selected;
    }
    renderGridBold(e, t) {
      var r, n, i;
      if (e) {
        var s = this.props.data,
          a;
        if (!(null === (r = s.settings) || void 0 === r || !r.gridBold)) {
          var l = (null !== (n = null === (i = s.settings) || void 0 === i ? void 0 : i.gridBoldEvery) && void 0 !== n ? n : 5) * t;
          return o().createElement("g", null, o().createElement("defs", null, o().createElement("pattern", {
            id: this.boldRandomId,
            width: l,
            height: l,
            patternUnits: "userSpaceOnUse"
          }, o().createElement("path", {
            d: "M ".concat(l, " 0 L 0 0 0 ").concat(l),
            fill: "none",
            stroke: "gray",
            strokeWidth: "1"
          }))), o().createElement("rect", {
            width: "100%",
            height: "100%",
            fill: "url(#".concat(this.boldRandomId, ")"),
            stroke: "gray",
            strokeWidth: "0"
          }));
        }
      }
    }
    renderGridGroup(e, t) {
      if (e) return o().createElement("g", null, o().createElement("defs", null, o().createElement("pattern", {
        id: this.randomId,
        width: t,
        height: t,
        patternUnits: "userSpaceOnUse"
      }, o().createElement("path", {
        d: "M ".concat(t, " 0 L 0 0 0 ").concat(t),
        fill: "none",
        stroke: "lightgray",
        strokeWidth: "0.5"
      }))), o().createElement("rect", {
        width: "100%",
        height: "100%",
        fill: "url(#".concat(this.randomId, ")"),
        stroke: "lightgray",
        strokeWidth: "0.5"
      }));
    }
    shouldShowGrid() {
      var e = this.props.data,
        t = D.A.getSettings(e, "grid"),
        r = D.A.getSettings(e, "onlyShowGridOnEditing");
      return !(!t || r && !this.props.selected);
    }
    render() {
      var e = this.shouldShowGrid(),
        t = D.A.getSettings(this.props.data, "gridSize");
      return o().createElement("svg", null, this.renderGridGroup(e, t), this.renderGridBold(e, t));
    }
  }
  var Bi = r(56072),
    Fi = r(73700),
    ji = r(71768),
    _i = r(48541);
  class Ni extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "baseElement", void 0), (0, n.A)(this, "movingHandler", new un.X({
        noPreventDefault: !0
      }, this.props.getDocZoomContainer)), this.state = {
        to: void 0,
        fromEditor: void 0,
        toEditor: void 0,
        foundRect: void 0
      }, this.movingHandler.onMoving = (e, t, r, n) => {
        var i = m.A.getTargetOnMoveEvent(n);
        if ("COVERLAYER" == i.tagName) {
          var o = i.previousElementSibling.reactInstance.getModel().id,
            s = this.props.diagramModel.elements[o];
          if (s.isInGroup) this.setState({
            to: this.buildToPosInfo(t),
            toEditor: void 0,
            foundRect: void 0
          });else if (s.id != this.state.fromEditor.id) {
            var a = this.props.getDocZoomContainer(),
              l = F.T.getBCRectToElement(i.previousElementSibling, this.baseElement, a);
            this.setState({
              to: this.buildToPosInfo(t),
              toEditor: s,
              foundRect: l
            });
          } else this.setState({
            to: this.buildToPosInfo(t)
          });
        } else this.setState({
          to: this.buildToPosInfo(t),
          toEditor: null,
          foundRect: null
        });
      }, this.movingHandler.onMoved = () => {
        this.state.toEditor && this.props.addConnection(this.createNewConnection(this.state.fromEditor.id, this.state.toEditor.id)), this.setState({
          to: void 0,
          fromEditor: void 0,
          foundRect: void 0
        });
      };
    }
    buildToPosInfo(e) {
      return {
        pos: e,
        posPoint: {
          x: e.left,
          y: e.top
        }
      };
    }
    setInfo(e) {
      this.baseElement = e;
    }
    startAt(e, t) {
      this.movingHandler.setBaseElement(this.baseElement), this.movingHandler.mouseDown(t), this.setState({
        to: void 0,
        fromEditor: e
      });
    }
    createNewConnection(e, t) {
      return {
        id: a.w.nextDiagramConnectionId(),
        fromEditorId: e,
        toEditorId: t,
        head: ">",
        shaft: "-",
        tail: "no",
        mVer: 1
      };
    }
    getStartPoint(e) {
      var t = this.props.refMap[e.id].editor,
        r = Fi.A.getTextRectInfo(t, e),
        n = Fi.A.getFrameShape(e, r),
        i = Bi.A.getTempShape(e.shape.frameType, n),
        o = e.shape.data.p,
        s = {
          id: a.w.nextTemporaryEntity(),
          breakDownInfo: {
            data: [{
              p1: o,
              p2: this.state.to.posPoint
            }]
          }
        },
        l = ji.A.getIntersects(s, i);
      return !l || l.length <= 0 ? null : l[0];
    }
    renderEditorBox() {
      if (this.state.foundRect) {
        var e = this.state.foundRect;
        return o().createElement("rect", {
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
          fill: "none",
          stroke: "green",
          strokeWidth: 1,
          strokeDasharray: "2 2"
        });
      }
    }
    render() {
      if (!this.state.fromEditor || !this.state.to) return o().createElement("g", null);
      var e = this.getStartPoint(this.state.fromEditor);
      if (null == e) return o().createElement("g", null);
      var t = e,
        r = this.state.to.posPoint;
      return o().createElement("g", {
        pointerEvents: "none"
      }, o().createElement(_i.Ay, {
        type: "straight",
        thickness: 1,
        headScale: 1,
        mAngleBy: 0,
        tail: "no",
        head: ">",
        shaft: "-",
        data: [t, r],
        className: "connection",
        isSelected: !1,
        isGroupSelected: !1,
        isRemoteSelected: !1,
        remoteSelectedColor: void 0,
        settings: {},
        htmlStyleInfo: {
          style: {
            stroke: "green"
          }
        }
      }), this.renderEditorBox());
    }
  }
  var zi = r(30968);
  class Hi {
    getEntityHtmlStyleInfo(e, t, r) {
      var n = gr.A.getEntityType(e),
        i = zi.L.retrieve(e, r);
      switch (n) {
        case "connection":
        case "shape-arrow":
          return P.A.getReactStyleInfo(e.style, ["strokeColor", "thickness", "fillColor", "lineJoin", "lineCap"], t, i);
        case "shape-object":
          return P.A.getReactStyleInfo(e.style, ["strokeColor", "thickness", "fillColor", "strokeType", "lineJoin", "lineCap", "boxShadow"], t, i);
        case "intersection":
          return P.A.getReactStyleInfo(e.style, ["strokeColor", "thickness", "fillColor", "strokeType"], t, i);
        case "shape-composite":
          return P.A.getReactStyleInfo(e.style, U.A.getShapeManagement(e).styleSupports(e) || [], t, i);
        case "text":
          return P.A.getReactStyleInfo(e.shape.style, ["strokeColor", "thickness", "fillColor", "strokeType", "boxShadow"], t, i);
      }
      return {
        style: {}
      };
    }
  }
  const Wi = new Hi();
  class Vi extends o().Component {
    shouldComponentUpdate(e) {
      return e.elementData != this.props.elementData || e.selectedKey != this.props.selectedKey;
    }
    render() {
      var e,
        t = this.props.editorInstance.editor.parentNode,
        r = E.nB(t.previousSibling, "shadow-box"),
        n = r ? t.previousSibling : t,
        i = this.props.elementData,
        s = i.shape.frameType;
      if (!s) return null;
      var a = Wi.getEntityHtmlStyleInfo(i, this.props.defaultFillBorderColor, this.props.styleIdContext),
        l = a.style,
        c = a.defs,
        d;
      d = r || !E.nB(n, "in-editing") ? Fi.A.getTextRectInfo(n, i) : this.getTextRectInfoConsiderAnchor(n, i);
      var h = Fi.A.getFrameShape(i, d);
      switch (i.___shapeInfo = h, s) {
        case "circle":
          var p = h.shape,
            u = p.cp,
            g = p.r,
            m = o().createElement("circle", {
              key: i.id,
              cx: u.x,
              cy: u.y,
              r: g,
              style: l
            });
          if (h.outsideShape) {
            var f = h.outsideShape;
            u = f.cp, g = f.r;
            var y = o().createElement("circle", {
              cx: u.x,
              cy: u.y,
              r: g,
              style: l
            });
            return o().createElement("g", {
              key: i.id
            }, c, y, m);
          }
          return o().createElement("g", {
            key: i.id
          }, c, m);
        case "rectangle":
          var v = h.shape.rect,
            b = D.A.getTextSetting(i, "cornerRadius"),
            x = o().createElement("rect", {
              key: i.id,
              rx: b,
              ry: b,
              x: v.left,
              y: v.top,
              width: v.width,
              height: v.height,
              style: l
            });
          if (h.outsideShape) {
            v = h.outsideShape.rect;
            var C = o().createElement("rect", {
              rx: b,
              ry: b,
              x: v.left,
              y: v.top,
              width: v.width,
              height: v.height,
              style: l
            });
            return o().createElement("g", {
              key: i.id
            }, c, C, x);
          }
          return o().createElement("g", {
            key: i.id
          }, c, x);
        case "ellipse":
          var S = h.shape,
            A = S.cp,
            w = S.rx,
            k = S.ry,
            O = o().createElement("ellipse", {
              key: i.id,
              cx: A.x,
              cy: A.y,
              rx: w,
              ry: k,
              style: l
            });
          if (h.outsideShape) {
            var P = h.outsideShape;
            A = P.cp, w = P.rx, k = P.ry;
            var M = o().createElement("ellipse", {
              cx: A.x,
              cy: A.y,
              rx: w,
              ry: k,
              style: l
            });
            return o().createElement("g", {
              key: i.id
            }, c, M, O);
          }
          return o().createElement("g", {
            key: i.id
          }, c, O);
      }
    }
    getTextRectInfoConsiderAnchor(e, t) {
      var r = t.shape.data,
        n = r.rotation,
        i = void 0 === n ? 0 : n,
        o = r.skewX,
        s = void 0 === o ? 0 : o,
        a = F.T.getBCRectToElement(e, this.props.getBaseElement(), this.props.getDzContainer()),
        l = he.A.getElementClientSize(e),
        c = F.T.getRectWidthHeight(a),
        d = c.rWidth,
        h = c.rHeight,
        p = {
          x: a.left + d / 2,
          y: a.top + h / 2
        };
      return {
        id: t.id,
        p,
        rotation: i,
        skewX: s,
        width: l.width - 2,
        height: l.height - 2
      };
    }
  }
  class Ui extends o().Component {
    render() {
      var e = this.props,
        t = e.model,
        r = e.points;
      return o().createElement("g", null, this.renderConnectionPoint(t, "left", r.left), this.renderConnectionPoint(t, "right", r.right), this.renderConnectionPoint(t, "bottom", r.bottom));
    }
    renderConnectionPoint(e, t, r) {
      var n = this.props.getDZContainer().zoomRatio,
        i = {
          left: r.x - 5 / n,
          top: r.y - 5 / n,
          width: 10 / n,
          height: 10 / n
        },
        s = "scale(".concat(.015 / n, ")"),
        a = "";
      switch (t) {
        case "left":
          i.left -= 15 / n, a = "M 249.43125 500.5 L 0.5 251.00371 L 250.39666 1.468574 L 388.85053 1.525764 L 197.54097 194.51019 L 594.16634 194.58168 L 594.0434 305.57099 L 194.93053 305.59147 L 388.29695 500.5 L 249.43125 500.5z";
          break;
        case "top":
          i.top -= 15 / n, a = "M 0.5,249.76491 L 249.99629,0.8336513 L 499.53144,250.73032 L 499.47425,389.18419 L 306.48981,197.87462 L 306.41832,594.5 L 195.42902,594.37706 L 195.40854,195.26418 L 0.5,388.63061 L 0.5,249.76491 z ";
          break;
        case "right":
          i.left += 15 / n, a = "M 345.23509 500.5 L 594.16634 251.00371 L 344.26968 1.468574 L 205.81581 1.525764 L 397.12537 194.51019 L 0.49999607 194.58168 L 0.62293607 305.57099 L 399.73581 305.59147 L 206.36939 500.5 L 345.23509 500.5 z ";
          break;
        case "bottom":
          i.top += 15 / n, a = "M 499.53144,345.56874 L 250.03515,594.5 L 0.5,344.60333 L 0.55719,206.14946 L 193.54163,397.45903 L 193.61312,0.8336513 L 304.60242,0.9565913 L 304.6229,400.06947 L 499.53144,206.70304 L 499.53144,345.56874 z ";
      }
      var l = 1;
      b.A.isMobileOrTablet() && (l *= 1.4);
      var c = "translate(".concat(i.left, ",").concat(i.top, ") scale(").concat(l, ")");
      return o().createElement("g", {
        key: t,
        className: "connection-point",
        transform: c
      }, o().createElement("rect", {
        className: "frame-rect",
        onMouseDown: t => {
          this.props.onConnectionPointMouseDown(e, t);
        },
        onTouchStart: t => {
          this.props.onConnectionPointMouseDown(e, t);
        },
        width: i.width,
        height: i.height,
        strokeWidth: "1",
        stroke: "none",
        fill: "transparent"
      }), o().createElement("g", {
        transform: s,
        pointerEvents: "none"
      }, o().createElement("path", {
        style: {
          fontSize: 12,
          fill: "purple"
        },
        d: a
      })));
    }
  }
  class qi extends o().Component {
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.singleSelectedId != t.singleSelectedId || e.editorChangedHash != t.editorChangedHash || e.selectedKey != t.selectedKey || e.data.elements != t.data.elements;
    }
    renderConnectionPoints() {
      var e = this.props.singleSelectedId;
      if (e) {
        if (H.W.isOwnedEditorId(this.props.data, e)) return null;
        var t = this.props.refMap[e];
        if (!t) return null;
        var r = this.props.data.elements[e],
          n = Fi.A.getTextRectInfo(t.editor.parentNode, r),
          i = Fi.A.getFrameShape(r, n),
          s = i.outsideShape || i.shape,
          a;
        switch (r.shape.frameType) {
          case "circle":
            var l = s.cp,
              c = s.r;
            a = {
              left: {
                x: l.x - c,
                y: l.y
              },
              top: {
                x: l.x,
                y: l.y - c
              },
              right: {
                x: l.x + c,
                y: l.y
              },
              bottom: {
                x: l.x,
                y: l.y + c
              }
            };
            break;
          case "ellipse":
            var d = s.cp,
              h = s.rx,
              p = s.ry;
            a = {
              left: {
                x: d.x - h,
                y: d.y
              },
              top: {
                x: d.x,
                y: d.y - p
              },
              right: {
                x: d.x + h,
                y: d.y
              },
              bottom: {
                x: d.x,
                y: d.y + p
              }
            };
            break;
          default:
            var u = s.rect,
              g = {
                x: u.left + u.width / 2,
                y: u.top + u.height / 2
              };
            a = {
              left: {
                x: u.left,
                y: g.y
              },
              top: {
                x: g.x,
                y: u.top
              },
              right: {
                x: u.left + u.width,
                y: g.y
              },
              bottom: {
                x: g.x,
                y: u.top + u.height
              }
            };
        }
        return o().createElement(Ui, {
          model: r,
          points: a,
          onConnectionPointMouseDown: this.props.onConnectionPointMouseDown,
          getDZContainer: this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer
        });
      }
    }
    getDefaultFillBorderColor() {
      return this.props.fixedContextHandler.getDefaultBorderColor();
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    renderRects() {
      var e = [],
        t = this.getDefaultFillBorderColor(),
        r = this.props.selectedKey;
      return h().values(this.props.refMap).forEach(n => {
        var i = n.getData(),
          s = i.id;
        if (a.w.isDiagramEditorId(s) && !H.W.isOwnedEditorId(this.props.data, s) && i.shape.frameType) {
          var l = this.props.data.elements[s];
          e.push(o().createElement(Vi, {
            getDzContainer: this.props.getDzContainer,
            selectedKey: r && r == s ? r : void 0,
            styleIdContext: this.getStyleIdContext(),
            key: s,
            editorInstance: n,
            elementData: l,
            defaultFillBorderColor: t,
            getBaseElement: this.props.getBaseElement
          }));
        }
      }), e;
    }
    render() {
      return this.props.refMap ? o().createElement("g", null, this.renderRects(), this.renderConnectionPoints()) : o().createElement("g", null);
    }
  }
  class Gi extends o().Component {
    getConnections() {
      return this.props.data.connections;
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.singleSelectedId != t.singleSelectedId || e.editorChangedHash != t.editorChangedHash || e.data.connections != t.data.connections;
    }
    renderConnections() {
      var e = this.getConnections();
      return h().map(e, e => this.renderConnection(e));
    }
    selectConnection(e, t) {
      if (t.isInGroup) {
        var r = x.A.findGroupedEnityFromConnection(t, this.props.data.shapes);
        r && this.props.onMouseDown(e, r);
      } else this.props.onMouseDown(e, t);
    }
    renderLine(e, t) {
      return e.type ? "quadratic" == e.type ? this.renderQuadraticLine(e, t) : this.renderCubicLine(e, t) : this.renderStraightLine(e, t);
    }
    isSelectedConnectionId(e) {
      return this.props.singleSelectedId == e;
    }
    renderConnection(e) {
      if (!this.props.refMap[e.fromEditorId] || !this.props.refMap[e.toEditorId]) return null;
      var t = this.props,
        r = t.data,
        n = t.refMap,
        i = Bi.A.getIdRectMap([e], {
          editorRef: n,
          editors: r.elements
        }),
        s = Bi.A.getCalculatedPosition(e, i, r.elements);
      if (e.___path = s, !s) return null;
      var a = D.A.getSettings(e, "perpendicularDistance");
      return o().createElement("g", {
        className: "connection-group",
        key: e.fromEditorId + e.toEditorId + "_" + a
      }, this.renderLine(e, s));
    }
    getDefaultFillBorderColor() {
      return this.props.fixedContextHandler.getDefaultBorderColor();
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    renderQuadraticLine(e, t) {
      var r = P.A.getEntityStyle(e, "thickness");
      return o().createElement(_i.Ay, {
        type: "quadratic",
        headAngleByDistance: e.angleBy,
        mAngleBy: e.mAngleBy,
        mVer: e.mVer,
        tail: e.tail,
        head: e.head,
        shaft: e.shaft,
        middle: e.middle,
        bpHead: e.bpHead,
        thickness: r,
        headScale: e.headScale,
        data: [t],
        onMouseDown: t => this.selectConnection(t, e),
        className: "connection",
        isSelected: this.isSelectedConnectionId(e.id),
        isGroupSelected: this.props.selectionCarrier.isInGroupSelected(e.id),
        isRemoteSelected: !1,
        remoteSelectedColor: void 0,
        settings: e.settings,
        htmlStyleInfo: Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext())
      });
    }
    renderCubicLine(e, t) {
      var r = P.A.getEntityStyle(e, "thickness");
      return o().createElement(_i.Ay, {
        type: "cubic",
        headAngleByDistance: e.angleBy,
        mAngleBy: e.mAngleBy,
        mVer: e.mVer,
        tail: e.tail,
        head: e.head,
        shaft: e.shaft,
        middle: e.middle,
        bpHead: e.bpHead,
        thickness: r,
        headScale: e.headScale,
        data: [t],
        onMouseDown: t => this.selectConnection(t, e),
        className: "connection",
        isSelected: this.isSelectedConnectionId(e.id),
        isGroupSelected: this.props.selectionCarrier.isInGroupSelected(e.id),
        isRemoteSelected: !1,
        remoteSelectedColor: void 0,
        settings: e.settings,
        htmlStyleInfo: Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext())
      });
    }
    renderStraightLine(e, t) {
      var r = P.A.getEntityStyle(e, "thickness");
      return o().createElement(_i.Ay, {
        type: "straight",
        mAngleBy: e.mAngleBy,
        mVer: e.mVer,
        tail: e.tail,
        head: e.head,
        shaft: e.shaft,
        middle: e.middle,
        bpHead: e.bpHead,
        thickness: r,
        headScale: e.headScale,
        data: [t.p1, t.p2],
        onMouseDown: t => this.selectConnection(t, e),
        className: "connection",
        isSelected: this.isSelectedConnectionId(e.id),
        isGroupSelected: this.isSelectedConnectionId(e.id) || this.props.selectionCarrier.isInGroupSelected(e.id),
        isRemoteSelected: !1,
        remoteSelectedColor: void 0,
        settings: e.settings,
        htmlStyleInfo: Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext())
      });
    }
    render() {
      return this.props.refMap ? o().createElement("g", null, this.renderConnections()) : null;
    }
  }
  function Ki(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Zi(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ki(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ki(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Yi {
    constructor(e, t, r, i) {
      (0, n.A)(this, "dgModel", void 0), (0, n.A)(this, "rawSelectedIds", void 0), (0, n.A)(this, "remoteSelections", void 0), (0, n.A)(this, "idSet", void 0), (0, n.A)(this, "remoteIdSet", void 0), (0, n.A)(this, "idInEntityGroupSet", new Set()), (0, n.A)(this, "remoteIdInEntityGroupSet", new Set()), (0, n.A)(this, "remoteIdColorMap", {}), (0, n.A)(this, "cEntities", void 0), (0, n.A)(this, "firstEntity", void 0), (0, n.A)(this, "subSelection", void 0), this.dgModel = e, this.rawSelectedIds = t, this.remoteSelections = i, this.rawSelectedIds = this.rawSelectedIds || [], this.idSet = new Set(this.rawSelectedIds), this.remoteIdSet = new Set(h().flatMap(this.remoteSelections, e => e.ids)), this.remoteSelections.forEach(e => e.ids.forEach(t => {
        this.remoteIdColorMap[t] = e.color;
      })), this.cEntities = Br.A.getEntities(e, this.idSet, !1);
      var o = this.rebuildIdSetForSelected(this.rawSelectedIds, this.idSet, this.cEntities);
      this.idSet = o[0], o[1] && (this.firstEntity = this.cEntities.find(e => e.id == o[1])), 1 == this.cEntities.length && 1 == this.rawSelectedIds.length && r ? this.subSelection = this.normalizeSubSelection(r, this.cEntities[0]) : this.cEntities.length > 0 && r && "rotation-around" == r.type && (this.subSelection = r);
    }
    getSubSelection() {
      return this.subSelection;
    }
    normalizeSubSelection(e, t) {
      switch (e.type) {
        case "plot":
          return gr.A.isShapeComposite(t) && "plot" == t.type ? e : void 0;
        case "complex-shape-control":
          return gr.A.isShapeComposite(t) && "complex" == t.type ? e : void 0;
        case "rotation-around":
          return e;
        case "line-point":
          return this.normalizeLinePointSubSelection(t, e);
      }
    }
    normalizeLinePointSubSelection(e, t) {
      return gr.A.isStraightLineArrow(e) || gr.A.isPolygon(e) ? t.index < 0 || t.index > e.data.length - 1 ? Zi(Zi({}, t), {}, {
        index: h().clamp(t.index, 0, e.data.length - 1)
      }) : t : (gr.A.isCubicLineArrow(e) || gr.A.isPolygonCurve(e)) && (t.index < 0 || t.index > e.data.length) ? Zi(Zi({}, t), {}, {
        index: h().clamp(t.index, 0, e.data.length)
      }) : t;
    }
    rebuildIdSetForSelected(e, t, r) {
      if (e.length == r.length) return [t, e[0]];
      var n,
        i = new Set(r.map(e => e.id)),
        o = new Set();
      return e.forEach(e => {
        i.has(e) && (n || (n = e), o.add(e));
      }), [o, n];
    }
    getSelectedDgObj() {
      return this.rawSelectedIds;
    }
    selectedIdSet() {
      return this.idSet;
    }
    getSelectedEntities() {
      return this.cEntities;
    }
    partitionConnectedEntityByConnections() {
      var e = pr.A.partitionConnectedEntityByConnections(this.rawSelectedIds || [], this.dgModel);
      return {
        shapeIds: new Set(e.shapeIds),
        editorIds: new Set(e.editorIds),
        connectionIds: new Set(e.connectionIds)
      };
    }
    singleEditorId() {
      if (this.firstEntity && 1 == this.idSet.size) return a.w.isDiagramEditorId(this.firstEntity.id) ? this.firstEntity.id : void 0;
    }
    singleIntersectionId() {
      if (this.firstEntity && 1 == this.idSet.size) return a.w.isDiagramIntersectionId(this.firstEntity.id) ? this.firstEntity.id : void 0;
    }
    singleConnectionId() {
      if (this.firstEntity && 1 == this.idSet.size) return a.w.isDiagramConnectionId(this.firstEntity.id) ? this.firstEntity.id : void 0;
    }
    singleEntity() {
      if (1 == this.idSet.size) return this.firstEntity;
    }
    singleShape() {
      if (this.firstEntity && 1 == this.idSet.size) {
        var e = this.firstEntity.id;
        return a.w.isDiagramArrowId(e) || a.w.isDiagramShapeId(e) || a.w.isDiagramCompositeShapeId(e) || a.w.isDiagramGroupId(e) ? this.firstEntity : void 0;
      }
    }
    hasSelected(e) {
      return this.idSet.has(e);
    }
    isSingleSelected(e) {
      return 1 == this.idSet.size && this.idSet.has(e);
    }
    isInGroupSelected(e) {
      return 1 != this.idSet.size && this.idSet.has(e);
    }
    isAnySelected(e, t) {
      return this.idSet.has(e) || !!t && this.idInEntityGroupSet.has(e);
    }
    addSelectedIdInEntityGroup(e) {
      this.idInEntityGroupSet.add(e);
    }
    isRemoteSelected(e) {
      return this.remoteIdSet.has(e) || this.remoteIdInEntityGroupSet.has(e);
    }
    getRemoteSelectedColor(e) {
      return this.remoteIdColorMap[e] || "orange";
    }
    addRemoteSelectedIdInGroup(e, t) {
      this.remoteIdInEntityGroupSet.add(e), this.remoteIdColorMap[e] = t;
    }
  }
  function Qi(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ji(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qi(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qi(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Xi {
    constructor(e) {
      (0, n.A)(this, "target", void 0), this.target = e;
    }
    getCacheableData() {
      return this.state.data || this.props.data;
    }
    get state() {
      return this.target.state;
    }
    get props() {
      return this.target.props;
    }
    getPropSelectedIdsOrEmpty() {
      return this.props.selected && this.props.selected.controlled && this.props.selected.controlSelectedInfo && this.props.selected.controlSelectedInfo.selectedIds || [];
    }
    selectDiagram() {
      var e;
      this.target.isMtFocus() && this.props.selected && this.props.selected.controlled && !this.props.selected.selected && !this.props.selected.controlSelectedInfo || this.props.onSelectedChanged({
        controlled: !0
      });
    }
    setSubSelection(e) {
      this.props.selected && this.props.onSelectedChanged(Ji(Ji({}, this.props.selected), {}, {
        controlSelectedInfo: Ji(Ji({}, this.props.selected.controlSelectedInfo), {}, {
          subSelection: e
        })
      }));
    }
    createCarrier(e, t) {
      var r;
      return this.props.selected && this.props.selected.controlled && this.props.selected.controlSelectedInfo && (r = this.props.selected.controlSelectedInfo.subSelection), new Yi(t, this.getPropSelectedIdsOrEmpty(), r, e);
    }
    shouldDeselectSubSelection(e) {
      return e && ("line-point" == e.type || "plot" == e.type || "complex-shape-control" == e.type);
    }
    select(e, t) {
      if (e = this.normalizeSelectedEntityId(e), t = t || {}, this.props.selected && this.props.selected.controlSelectedInfo) {
        var r = this.props.selected.controlSelectedInfo.selectedIds;
        if (r.indexOf(e) >= 0) return t.shiftKey && this.props.onSelectedChanged({
          controlled: !0,
          controlSelectedInfo: {
            selectedIds: h().filter(r, t => t != e)
          }
        }), void (this.shouldDeselectSubSelection(this.props.selected.controlSelectedInfo.subSelection) && this.props.onSelectedChanged({
          controlled: !0,
          controlSelectedInfo: {
            selectedIds: [e]
          }
        }));
        if (this.isAllIntersections(r) == this.isAllIntersections([e])) {
          var n = [e];
          t.shiftKey && (n = r.concat([e])), this.props.onSelectedChanged({
            controlled: !0,
            controlSelectedInfo: {
              selectedIds: n
            }
          });
        } else this.props.onSelectedChanged({
          controlled: !0,
          controlSelectedInfo: {
            selectedIds: [e]
          }
        });
      } else this.props.onSelectedChanged({
        controlled: !0,
        controlSelectedInfo: {
          selectedIds: [e]
        }
      });
    }
    normalizeSelectedEntityId(e) {
      if (!a.w.isDiagramEditorId(e)) return e;
      var t = H.W.findOwnerByEditorId(this.getCacheableData(), e);
      return t ? t.id : e;
    }
    isAllIntersections(e) {
      return e.every(e => a.w.isDiagramIntersectionId(e));
    }
    selectGroup(e) {
      this.props.onSelectedChanged({
        controlled: !0,
        controlSelectedInfo: {
          selectedIds: e
        }
      });
    }
    selectConnection(e, t) {
      this.select(e, t);
    }
    selectEditor(e, t) {
      this.select(e, t);
    }
    selectShape(e, t) {
      this.select(e, t);
    }
    selectIntersection(e, t) {
      this.select(e, t);
    }
  }
  class $i {
    constructor(e) {
      (0, n.A)(this, "target", void 0), (0, n.A)(this, "isDiagramMounted", !1), (0, n.A)(this, "queue", []), (0, n.A)(this, "diagramBarRef", void 0), (0, n.A)(this, "handleEditorFramesRef", e => {
        this.target.frames = e;
      }), (0, n.A)(this, "handleConnectionsRef", e => {
        null != e && (this.target.connections = e);
      }), (0, n.A)(this, "handleDiagramControlsRef", e => {
        this.target.diagramControls = e;
      }), (0, n.A)(this, "handleDiagramControlsDrawingRef", e => {
        this.target.diagramControlsDrawing = e;
      }), (0, n.A)(this, "handleEditorsRef", e => {
        this.target.editors = e;
      }), (0, n.A)(this, "handleDiagramBarRef", e => {
        this.diagramBarRef = e, null != e && this.call(() => {
          e.setInfo(this.target.compositeBlock, this.target.mathDiagram);
        });
      }), (0, n.A)(this, "handleConnectionFinderRef", e => {
        this.target.connectionFinder = e, null != e && this.call(() => {
          this.target.connectionFinder.setInfo(this.target.zoomRef);
        });
      }), (0, n.A)(this, "handleRectangleSelectionLayerRef", e => {
        this.target.selectionLayer = e, null != e && this.call(() => {
          this.target.selectionLayer.setInfo(this.target.zoomRef);
        });
      }), (0, n.A)(this, "handleDiagramShapesRef", e => {
        this.target.diagramShapes = e;
      }), (0, n.A)(this, "handleDiagramRef", e => {
        this.target.mathDiagram = e, null != e && this.call(() => {
          this.target.movingHandler.setBaseElement(this.target.zoomRef);
        });
      }), this.target = e;
    }
    call(e) {
      if (this.isDiagramMounted) return e();
      this.queue.push(e);
    }
    notifyDiagramMounted() {
      this.isDiagramMounted = !0, this.queue.forEach(e => e()), this.queue = [];
    }
    getCachedRefMethod(e, t) {
      return this.target.cacheRefMethod[e] || (this.target.cacheRefMethod[e] = t.bind(this)), this.target.cacheRefMethod[e];
    }
  }
  function eo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function to(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? eo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ro extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originObj", void 0), (0, n.A)(this, "requestShowRotateAround", () => {
        var e = R.x.calculateCenterPoint(this.props.entity, this.props.element);
        this.props.subSelection || this.props.onSubSelectionChanged({
          type: "rotation-around",
          point: {
            x: e.x - 50,
            y: e.y
          }
        });
      }), (0, n.A)(this, "onMoved", () => {
        this.originObj = void 0, this.props.onEntityMoved();
      }), (0, n.A)(this, "onMovingStarted", () => {
        this.originObj = {
          editor: this.props.entity,
          offsetWidth: he.A.getComputedStyleAsNumber(this.props.element, "width"),
          offsetHeight: he.A.getComputedStyleAsNumber(this.props.element, "height")
        };
      }), (0, n.A)(this, "onMoving", (e, t) => {
        if (this.originObj) {
          var r = this.rotateEditor(this.originObj.editor, t);
          this.props.onEntityMoving(r);
        }
      });
    }
    render() {
      var e = this.props,
        t = e.entity,
        r = e.element,
        n = this.originObj || r,
        i,
        s = Gr.A.getRotationPoints(t, n, this.props.getDZContainer()).p,
        a = R.x.calculateCenterPoint(t, n);
      return o().createElement(fn, {
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        onSelect: this.requestShowRotateAround,
        getRootElement: this.props.getRootElement,
        point: s,
        onPointMoved: this.onMoved,
        onPointMoving: this.onMoving,
        onPointMovingStarted: this.onMovingStarted,
        center: a,
        renderGuideLine: !1
      });
    }
    rotateByRequest(e) {
      if ("clockwise" == e || "couter-clockwise" == e) return this.handleRotate(e);
      "flip-horizontally" != e && "flip-vertically" != e || this.handleFlip(e), "show-rotate-around" == e && this.requestShowRotateAround();
    }
    handleFlip(e) {
      var t = this.props.entity,
        r = tn.A.buildTransformedRectForEditor(this.props.element, t),
        n = "flip-horizontally" == e ? tn.A.flipHorizontally(r) : tn.A.flipVertically(r),
        i = y.A.getCenterPoint(n),
        o = R.x.getSamplePosition(t.shape.anchor, this.props.element.offsetWidth, this.props.element.offsetHeight, {
          rotation: n.rotation,
          skewX: n.skewX
        }, i),
        s = to(to({}, t), {}, {
          shape: to(to({}, t.shape), {}, {
            data: to(to({}, t.shape.data), {}, {
              p: o,
              rotation: n.rotation,
              skewX: n.skewX,
              flipX: n.flipX
            })
          })
        });
      this.props.onEntityMoving(s), L.A.next(() => {
        this.props.onEntityMoved();
      });
    }
    handleRotate(e) {
      var t = "clockwise" == e ? 90 : -90,
        r = this.rotateEditor(this.props.entity, t);
      this.props.onEntityMoving(r), L.A.next(() => {
        this.props.onEntityMoved();
      });
    }
    rotateEditor(e, t) {
      var r = e,
        n = y.A.round2(y.A.addRotation360(r.shape.data.rotation || 0, t)),
        i = R.x.shiftToKeepCenter(r.shape.data, to(to({}, r.shape.data), {}, {
          rotation: n
        }), r.shape.anchor, this.props.element),
        o;
      return to(to({}, r), {}, {
        shape: to(to({}, r.shape), {}, {
          data: i
        })
      });
    }
  }
  function no(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function io(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? no(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class oo extends o().PureComponent {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "onMoving", (e, t, r) => {
        var n = F.T.toPoint(t),
          i = r.customData,
          o = i.entity,
          s = i.offsetWidth,
          a = i.offsetHeight,
          l = o.shape.data.rotation,
          c = void 0 === l ? 0 : l,
          d = R.x.calculateCenterPoint(o, r.customData),
          h = {
            x: d.x - s / 2 - 5,
            y: d.y + a / 2
          },
          p = y.A.pointRotate(n, d, -c);
        p = {
          x: p.x,
          y: p.y
        };
        var u = B.A.skewXAngleFromDisplacementCp(d, h, p),
          g = io(io({}, o.shape.data), {}, {
            skewX: u
          });
        g = R.x.shiftToKeepCenter(o.shape.data, g, o.shape.anchor, r.customData);
        var m = io(io({}, o), {}, {
          shape: io(io({}, o.shape), {}, {
            data: g
          })
        });
        this.props.onEntityMoving(m);
      }), (0, n.A)(this, "handleSkewControlPointStart", e => {
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body), this.movingHandler.mouseDown(e, {
          entity: this.props.entity,
          offsetWidth: this.props.element.offsetWidth,
          offsetHeight: this.props.element.offsetHeight
        });
      }), this.movingHandler = new un.X({}, this.props.getDZContainer), this.movingHandler.onMoving = this.onMoving, this.movingHandler.onMoved = () => {
        this.props.onEntityMoved();
      };
    }
    render() {
      var e = this.props,
        t = e.entity,
        r = e.element,
        n,
        i = Gr.A.getSkewPoint(t, r).p,
        s = this.props.getDZContainer().zoomRatio,
        a = (b.A.isMobileOrTablet() ? 7 : 4) / s;
      return o().createElement(Tt.F, {
        key: "skew-p",
        onTouchOrMouseDown: this.handleSkewControlPointStart
      }, o().createElement("g", {
        style: io(io({}, dn.A.baseStyle(s)), {}, {
          transform: P.A.buildTranslateStyleTransform(i.x, i.y, t.shape.data.rotation)
        })
      }, o().createElement("rect", {
        className: "dscp",
        transform: "skewX(-30)",
        x: -a,
        y: -a,
        width: 2 * a,
        height: 2 * a,
        fill: "orange",
        stroke: "white",
        strokeWidth: 1 / s
      })));
    }
  }
  class so extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originShape", void 0), (0, n.A)(this, "onMoved", () => {
        this.originShape = void 0, this.props.onEntityMoved();
      }), (0, n.A)(this, "onMovingStarted", () => {
        this.originShape = this.props.entity;
      }), (0, n.A)(this, "onMoving", (e, t) => this.rotateCompositeShape(t));
    }
    rotateByRequest(e) {
      var t = "clockwise" == e ? 90 : -90,
        r,
        n = U.A.getShapeManagement(this.props.entity).rotate(this.props.entity, t);
      this.props.onEntityMoving(n), L.A.next(() => {
        this.props.onEntityMoved();
      });
    }
    render() {
      var e = this.props.entity,
        t = U.A.getShapeManagement(e);
      if (!t.getBaseRotationPoints) return o().createElement("div", null);
      var r = t.getRotationPoints(e, this.props.getDZContainer()),
        n = r.p,
        i = r.cp;
      return o().createElement(fn, {
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        getRootElement: this.props.getRootElement,
        point: n,
        center: i,
        onPointMoved: this.onMoved,
        onPointMoving: this.onMoving,
        onPointMovingStarted: this.onMovingStarted,
        onSelect: this.props.onSelect,
        renderGuideLine: !1
      });
    }
    rotateCompositeShape(e) {
      if (this.originShape) {
        var t,
          r = U.A.getShapeManagement(this.originShape).rotate(this.originShape, e);
        this.props.onEntityMoving(r);
      }
    }
  }
  class ao extends o().PureComponent {
    constructor(e) {
      super(e), (0, n.A)(this, "controlPointMh", void 0), (0, n.A)(this, "lastSnapPoint", void 0), (0, n.A)(this, "originalShape", void 0), (0, n.A)(this, "compositeRotationControlRef", void 0), (0, n.A)(this, "lastCpm", void 0), (0, n.A)(this, "handleRotationSelect", () => {
        this.requestShowRotateAround();
      }), (0, n.A)(this, "handleRotatingAround", (e, t) => {
        if (this.originalShape) {
          var r,
            n = qr.rotateEntities([this.originalShape], e, t, null, null).entities;
          this.props.onEntityMoving(n[0]);
        }
      }), (0, n.A)(this, "handleRotatedAround", () => {
        this.originalShape = void 0, this.props.onEntityMoved();
      }), (0, n.A)(this, "handleRotatingStarted", () => {
        this.originalShape = this.props.shape;
      }), (0, n.A)(this, "onMoving", (e, t, r, n) => {
        r.customData.otherShapes || (r.customData.otherShapes = [], D.A.getSettings(this.props.diagramModel, "snapToOtherShapes") && (r.customData.otherShapes = this.props.diagramModel.shapes.filter(e => e.id != r.customData.entity.id)));
        var i = r.customData,
          o = i.key,
          s = i.entity,
          a = i.otherShapes,
          l = U.A.getShapeManagement(s),
          c = {
            key: o,
            point: {
              x: t.left,
              y: t.top
            },
            diagramModel: this.props.diagramModel,
            shape: s,
            e: n,
            otherShapes: a,
            isShift: n.shiftKey,
            isControl: n.ctrlKey,
            isAlt: n.altKey,
            snapToGridSize: te.A.getGridSizeIfSnapEnabled(this.props.diagramModel, n),
            dzc: t.zc
          },
          d = l.moveControlPoint(c);
        this.lastSnapPoint != c.outputSnapPoint && (this.props.onSnapPoint(c.outputSnapPoint), this.lastSnapPoint = c.outputSnapPoint), this.lastCpm = c, this.props.onEntityMoving(d);
      }), (0, n.A)(this, "handleCompositeRotationControlRef", e => {
        this.compositeRotationControlRef = e;
      }), (0, n.A)(this, "handleCompositeShapeControlPoint", (e, t, r) => {
        this.lastCpm = void 0, this.controlPointMh.setBaseElement(this.props.getRootElement()), this.controlPointMh.setContainer(document.body), this.controlPointMh.mouseDown(e, {
          key: t,
          entity: this.props.shape
        }), r && this.props.onSubSelectionChanged(r);
      }), (0, n.A)(this, "buildControlPointRendering", e => {
        var t = this.props.getDZContainer().zoomRatio,
          r = dn.A.getCpRadius(t),
          n = r - 1 / t;
        e.smaller && "square" != e.type && (n = y.A.round4((r - 1 / t) / 1.5));
        var i = e.p,
          s = {
            pointerEvents: "visiblePainted",
            transform: new Tn.Z().orgin(n, n).translate(i.x - n, i.y - n).rotate(e.rotation, "deg").toCssStyle(),
            cursor: e.cursor || "crosshair",
            opacity: e.selected ? 1 : .7
          },
          a;
        switch (e.type) {
          case "square":
            a = o().createElement("path", {
              className: "dsquarecp",
              style: {
                stroke: "orange",
                fill: "yellow",
                strokeWidth: 1 / t
              },
              d: "M".concat(0, ",", n, " L").concat(n, ",").concat(n - n, " L").concat(n + r - 1 / t, ",").concat(n, " L").concat(n, ",").concat(n + n, " Z")
            });
            break;
          case "skew":
            a = o().createElement("rect", {
              className: "dscp",
              transform: "skewX(-30)",
              x: 0,
              y: 0,
              width: 2 * n,
              height: 2 * n,
              fill: "orange",
              stroke: "white",
              strokeWidth: 1 / t
            });
            break;
          case "circle":
            a = o().createElement("circle", {
              className: "dcirclecp",
              style: {
                stroke: "white",
                fill: "green",
                strokeWidth: 1 / t
              },
              cx: n,
              cy: n,
              r: n
            });
            break;
          case "circle-sub":
            a = o().createElement("circle", {
              className: "dsubcircletcp",
              style: {
                stroke: "white",
                fill: "gray",
                strokeWidth: 1 / t
              },
              cx: n,
              cy: n,
              r: n
            });
            break;
          default:
            a = o().createElement("rect", {
              className: "drectcp",
              x: 0,
              y: 0,
              width: 2 * n,
              height: 2 * n,
              fill: "green",
              stroke: "white",
              strokeWidth: 1 / t
            });
        }
        return o().createElement(Tt.F, {
          key: e.key,
          onTouchOrMouseDown: t => this.handleCompositeShapeControlPoint(t, e.key, e.subSelectionOnClick)
        }, o().createElement("g", {
          key: e.key,
          style: s
        }, a));
      }), this.controlPointMh = new un.X({}, this.props.getDZContainer), this.controlPointMh.onMoving = this.onMoving, this.controlPointMh.onMoved = e => {
        if (e.customData.entity) {
          var t = U.A.getShapeManagement(e.customData.entity);
          if (t.controlPointMoved && this.lastCpm) {
            var r = t.controlPointMoved(this.lastCpm);
            if (r) return void this.props.onEntityMoved(r);
          }
          this.props.onEntityMoved();
        }
      };
    }
    resize(e, t, r) {
      var n = U.A.getShapeManagement(this.props.shape);
      if (n.handleResize) {
        var i = n.handleResize(this.props.shape, e, t);
        this.raiseShapeChanged(i, r);
      }
    }
    raiseShapeChanged(e, t) {
      this.props.onEntityChanged(e, t);
    }
    rotateByRequest(e) {
      switch (e) {
        case "clockwise":
        case "couter-clockwise":
          return void (this.compositeRotationControlRef && this.compositeRotationControlRef.rotateByRequest(e));
        case "flip-horizontally":
          var t,
            r = U.A.getShapeManagement(this.props.shape).flipHorizontally(this.props.shape);
          return void this.raiseShapeChanged(r);
        case "flip-vertically":
          var n,
            i = U.A.getShapeManagement(this.props.shape).flipVertically(this.props.shape);
          return void this.raiseShapeChanged(i);
        case "show-rotate-around":
          this.requestShowRotateAround();
        case "flip-to-line-through-point":
          if (this.props.subSelection && "rotation-around" == this.props.subSelection.type) {
            var o,
              s = U.A.getShapeManagement(this.props.shape).flipToLineThroughPoint(this.props.shape, this.props.subSelection.point);
            this.raiseShapeChanged(s);
          }
          return;
        case "flip-to-point":
          if (this.props.subSelection && "rotation-around" == this.props.subSelection.type) {
            var a,
              l = U.A.getShapeManagement(this.props.shape).flipToPoint(this.props.shape, this.props.subSelection.point);
            this.raiseShapeChanged(l);
          }
          return;
      }
    }
    allowRequestAction(e) {
      return !!this.compositeRotationControlRef && "rotate-flip" == e;
    }
    requestShowRotateAround() {
      if (!this.props.subSelection) {
        var e,
          t = U.A.getShapeManagement(this.props.shape).getCentralPoint(this.props.shape);
        this.props.onSubSelectionChanged({
          type: "rotation-around",
          point: {
            x: t.x - 50,
            y: t.y
          }
        });
      }
    }
    render() {
      var e = this.props.shape,
        t = U.A.getShapeManagement(e),
        r = h().map(t.getControlPoints(e, this.props.subSelection, this.props.getDZContainer()), e => this.buildControlPointRendering(e));
      if (t.getRotationPoints && (r = r.concat([this.getRotationControlPoint(e)])), this.props.subSelection && "rotation-around" == this.props.subSelection.type) {
        var n = t.getCentralPoint(e);
        r = r.concat(o().createElement(On, {
          key: "rotation-around",
          selectedSessionId: this.props.selectedSessionId,
          getDZContainer: this.props.getDZContainer,
          onRotating: this.handleRotatingAround,
          onRotated: this.handleRotatedAround,
          onRotatingStarted: this.handleRotatingStarted,
          centralPoint: n,
          onSubSelectionChanged: this.props.onSubSelectionChanged,
          diagramModel: this.props.diagramModel,
          getEditorFrameInfo: this.props.getEditorFrameInfo,
          subSelection: this.props.subSelection,
          getRootElement: this.props.getRootElement
        }));
      }
      return o().createElement("g", null, r);
    }
    getRotationControlPoint(e) {
      return o().createElement(so, {
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        ref: this.handleCompositeRotationControlRef,
        onSelect: this.handleRotationSelect,
        key: "rotation-cp",
        entity: e,
        getRootElement: this.props.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving
      });
    }
  }
  function lo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function co(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? lo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ho extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "onMoving", (e, t, r) => {
        var n = this.props.diagramModel,
          i = n.connections,
          o = n.elements,
          s = r.customData,
          a = s.key,
          l = s.entity,
          c = wr.getConnectionPoints(i, o, this.props.refMap, l),
          d = c.from,
          h = c.to,
          p = y.A.toRelativeControlPoint({
            x: t.left,
            y: t.top
          }, d, h),
          u = co(co({}, l), {}, {
            data: co(co({}, l.data), {}, {
              [a]: p
            })
          });
        this.props.onEntityMoving(u);
      }), (0, n.A)(this, "handleBezierSubControlPoint", (e, t) => {
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body), this.movingHandler.mouseDown(e, {
          key: t,
          entity: this.props.connection
        });
      }), this.movingHandler = new un.X({}, this.props.getDzContainer), this.movingHandler.onMoving = this.onMoving, this.movingHandler.onMoved = () => {
        this.props.onEntityMoved();
      };
    }
    render() {
      return o().createElement("g", null, this.renderConnectionControlPoints(this.props.connection));
    }
    renderConnectionControlPoints(e) {
      return "quadratic" == e.type ? this.renderQuadraticConnectionControlPoint(e) : "cubic" == e.type ? this.renderCubicConnectionControlPoint(e) : void 0;
    }
    renderQuadraticConnectionControlPoint(e) {
      var t = this.props.diagramModel,
        r = t.connections,
        n = t.elements,
        i = this.props.getDzContainer().zoomRatio,
        s = (b.A.isMobileOrTablet() ? 10 : 5) / i,
        a,
        l = wr.getQuadraticAbsoluteControlPoint(r, n, this.props.refMap, e),
        c = co({
          transform: P.A.buildTranslateStyleTransform(l.x - s, l.y - s)
        }, dn.A.baseStyle(i));
      return o().createElement("g", {
        style: c,
        onMouseDown: e => this.handleBezierSubControlPoint(e, "cp"),
        onTouchStart: e => this.handleBezierSubControlPoint(e, "cp")
      }, o().createElement("circle", {
        cx: s,
        cy: s,
        r: s - 1 / i
      }));
    }
    renderCubicConnectionControlPoint(e) {
      var t = this.props.diagramModel,
        r = t.connections,
        n = t.elements,
        i = this.props.getDzContainer().zoomRatio,
        s = (b.A.isMobileOrTablet() ? 10 : 5) / i,
        a = wr.getCubicAbsoluteControlPoints(r, n, this.props.refMap, e),
        l = a[0],
        c = a[1],
        d = co({
          transform: P.A.buildTranslateStyleTransform(l.x - s, l.y - s)
        }, dn.A.baseStyle(i)),
        h = co({
          transform: P.A.buildTranslateStyleTransform(c.x - s, c.y - s)
        }, dn.A.baseStyle(i));
      return [o().createElement(Tt.F, {
        key: "cp",
        onTouchOrMouseDown: e => this.handleBezierSubControlPoint(e, "cp")
      }, o().createElement("g", {
        style: d
      }, o().createElement("circle", {
        cx: s,
        cy: s,
        r: s - 1 / i
      }))), o().createElement(Tt.F, {
        key: "cp2",
        onTouchOrMouseDown: e => this.handleBezierSubControlPoint(e, "cp2")
      }, o().createElement("g", {
        style: h
      }, o().createElement("circle", {
        cx: s,
        cy: s,
        r: s - 1 / i
      })))];
    }
  }
  function po(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function uo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? po(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : po(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class go extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "onMoving", (e, t, r, n) => {
        var i = r.customData,
          o = i.key,
          s = i.index,
          a = i.entity,
          l = i.type,
          c = {
            x: t.left,
            y: t.top
          },
          d = this.props.diagramModel;
        if ("mainPoint" == l) {
          var h = d.horizontalGuides || [],
            p = d.verticalGuides || [],
            u = !!n.altKey,
            g = !u,
            m = (h.length > 0 || p.length > 0) && !n.ctrlKey,
            f = null;
          if (dn.A.isSnapToOtherShapes(d, n) && !u) {
            var v = this.handleSnapToOther(r, a, s, c);
            c = v.point, v.snapToOtherShape && (g = !1, m = !1, f = v.point);
          }
          if (m && !u) {
            var b = Sn.A.detectWithPoints(p, h, [c]);
            if (b) switch (g = !1, b.type) {
              case "horizontal":
              case "vertical":
                c = b.snapPoint, f = b.snapPoint;
                break;
              case "both":
                f = c = {
                  x: b.vSnapPoint.x,
                  y: b.hSnapPoint.y
                };
            }
          }
          if (n.shiftKey && (c = this.calculateVerticalHorizonOr45Deg(a, c, s)), u) {
            var x = n.ctrlKey ? [] : p,
              C = n.ctrlKey ? [] : h,
              S = this.calculateKeepAngle(a, c, s, x, C);
            c = S.point, S.snapPoint && (f = S.snapPoint);
          }
          this.props.onSnapPoint(f), g && dn.A.isSnapToGrid(this.props.diagramModel, n) && (gr.A.isShapeArrow(a) || gr.A.isPolygon(a) || gr.A.isPolygonCurve(a)) && (c = y.A.snapToGridSize(c, dn.A.snapToGridSize(this.props.diagramModel)));
          var A = Br.A.moveMainControlPoint(a, s, c);
          this.props.onEntityMoving(A);
        }
        "subPoint" == l && this.handleSubPointMove(a, s, o, c);
      }), (0, n.A)(this, "handleBezierSubControlPoint", (e, t, r) => {
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body), this.movingHandler.mouseDown(e, {
          type: "subPoint",
          index: t,
          key: r,
          entity: this.props.entity,
          downPoint: this.getDownPoint(e),
          dzc: this.props.getDzContainer()
        });
      }), (0, n.A)(this, "handleMainControlPoint", (e, t) => {
        this.movingHandler.setBaseElement(this.props.getRootElement()), this.movingHandler.setContainer(document.body), this.movingHandler.mouseDown(e, {
          type: "mainPoint",
          index: t,
          entity: this.props.entity,
          downPoint: this.getDownPoint(e),
          dzc: this.props.getDzContainer()
        }), this.props.onControlSelected({
          type: "line-point",
          index: t
        });
      }), this.movingHandler = new un.X({}, this.props.getDzContainer), this.movingHandler.onMoving = this.onMoving, this.movingHandler.onMoved = () => {
        this.props.onEntityMoved(), this.props.onSnapPoint(null);
      };
    }
    render() {
      return o().createElement("g", null, this.renderControlPoints());
    }
    getZoomRatio() {
      return this.props.getDzContainer().zoomRatio;
    }
    renderControlPoints() {
      if (this.props.entity) {
        var e = this.props.entity;
        if (gr.A.isShapeArrow(e)) {
          if (gr.A.isStraightLineArrow(e)) return this.renderStraightLinePoints(e);
          if (gr.A.isCubicLineArrow(e)) return this.renderCubicArrowPoints(e);
        }
        if (gr.A.isPrimitiveShape(e)) {
          if (gr.A.isPolygon(e)) return this.renderPolygonPoints(e.data);
          if (gr.A.isPolygonCurve(e)) return this.renderCubicPoints(e.data, e.data);
        }
      }
    }
    renderCubicPoints(e, t) {
      var r = this.getZoomRatio(),
        n = dn.A.getCpRadius(r),
        i = h().map(e, (e, t) => {
          var i = e.p1,
            s = uo(uo({}, dn.A.baseStyle(r)), {}, {
              transform: P.A.buildTranslateStyleTransform(i.x - n, i.y - n),
              opacity: .5
            });
          return this.props.controlSelectedInfo && this.props.controlSelectedInfo.index == t && (s.opacity = 1), o().createElement(Tt.F, {
            key: "m" + t,
            onTouchOrMouseDown: e => this.handleMainControlPoint(e, t)
          }, o().createElement("g", {
            style: s
          }, o().createElement("circle", {
            cx: n,
            cy: n,
            r: n - 1 / r
          })));
        }),
        s = h().flatMap(t, (e, t) => {
          var i = y.A.toAbsoluteControlPointCubic(e),
            s = i.cp,
            a = i.cp2,
            l = uo(uo({}, dn.A.baseStyle(this.getZoomRatio())), {}, {
              fill: "gray",
              transform: P.A.buildTranslateStyleTransform(s.x - n, s.y - n),
              opacity: .5
            }),
            c = uo(uo({}, dn.A.baseStyle(this.getZoomRatio())), {}, {
              fill: "gray",
              transform: P.A.buildTranslateStyleTransform(a.x - n, a.y - n),
              opacity: .5
            });
          return [o().createElement(Tt.F, {
            onTouchOrMouseDown: e => this.handleBezierSubControlPoint(e, t, "cp"),
            key: "c1" + t
          }, o().createElement("g", {
            style: l
          }, o().createElement("circle", {
            cx: n,
            cy: n,
            r: n - 1 / r
          }))), o().createElement(Tt.F, {
            onTouchOrMouseDown: e => this.handleBezierSubControlPoint(e, t, "cp2"),
            key: "c2" + t
          }, o().createElement("g", {
            style: c
          }, o().createElement("circle", {
            cx: n,
            cy: n,
            r: n - 1 / r
          })))];
        });
      return i.concat(s);
    }
    renderCubicArrowPoints(e) {
      return this.renderCubicPoints(e.data.concat({
        p1: e.data[e.data.length - 1].p2,
        p2: null,
        cp: null,
        cp2: null
      }), e.data);
    }
    renderStraightLinePoints(e) {
      var t = this.getZoomRatio(),
        r = dn.A.getCpRadius(t);
      return h().map(e.data, (e, n) => {
        var i = e,
          s = uo(uo({}, dn.A.baseStyle(t)), {}, {
            transform: P.A.buildTranslateStyleTransform(i.x - r, i.y - r),
            opacity: .5
          });
        return this.props.controlSelectedInfo && this.props.controlSelectedInfo.index == n && (s.opacity = 1), o().createElement(Tt.F, {
          key: n,
          onTouchOrMouseDown: e => this.handleMainControlPoint(e, n)
        }, o().createElement("g", {
          style: s
        }, o().createElement("circle", {
          cx: r,
          cy: r,
          r: r - 1 / t
        })));
      });
    }
    renderPolygonPoints(e) {
      var t = this.getZoomRatio(),
        r = dn.A.getCpRadius(t);
      return h().map(e, (e, n) => {
        var i = e,
          s = uo(uo({
            transform: P.A.buildTranslateStyleTransform(i.x - r, i.y - r)
          }, dn.A.baseStyle(t)), {}, {
            opacity: .5
          });
        return this.props.controlSelectedInfo && this.props.controlSelectedInfo.index == n && (s.opacity = 1), o().createElement(Tt.F, {
          key: "c" + n,
          onTouchOrMouseDown: e => this.handleMainControlPoint(e, n)
        }, o().createElement("g", {
          style: s
        }, o().createElement("circle", {
          cx: r,
          cy: r,
          r: r - 1 / t
        })));
      });
    }
    handleSnapToOther(e, t, r, n) {
      e.customData.otherShapes || (e.customData.otherShapes = this.props.diagramModel.shapes.filter(t => t.id != e.customData.entity.id), e.customData.extraPoints = Cn.A.getSnapablePointsEntity(t, r));
      var i = e.customData,
        o = i.otherShapes,
        s = i.dzc,
        a = Cn.A.detectPoint(n, o, e.customData.extraPoints, 5 / s.zoomRatio);
      return a ? {
        point: n = a.snapPoint,
        snapToOtherShape: !0
      } : {
        point: n,
        snapToOtherShape: !1
      };
    }
    calculateVerticalHorizonOr45Deg(e, t, r) {
      if (gr.A.isStraightLineArrow(e)) {
        var n = e.data;
        t = y.A.snapLinePoint45(n[0 == r ? 1 : r - 1], t);
      }
      if (gr.A.isPolygon(e)) {
        var i = e.data;
        t = y.A.snapLinePoint45(i[0 == r ? i.length - 1 : r - 1], t);
      }
      return t;
    }
    handlePointKeepAngle(e, t, r, n, i) {
      var o = y.A.distance2Points(e, r),
        s = y.A.pointAtDistance(e, t, o),
        a = y.A.pointAtDistance(e, t, -o),
        l,
        c,
        d = y.A.distance2Points(r, s) < y.A.distance2Points(r, a) ? s : a,
        h = Number.MAX_SAFE_INTEGER,
        p = null;
      return n.forEach(t => {
        var r = y.A.intersectRayRay(e, d, {
          x: t.x,
          y: 0
        }, {
          x: t.x,
          y: 1
        });
        if (r) {
          var n = y.A.distance2Points(d, r);
          p = n < h ? r : p, h = Math.min(h, n);
        }
      }), i.forEach(t => {
        var r = y.A.intersectRayRay(e, d, {
          x: 0,
          y: t.y
        }, {
          x: 1,
          y: t.y
        });
        if (r) {
          var n = y.A.distance2Points(d, r);
          p = n < h ? r : p, h = Math.min(h, n);
        }
      }), p && h <= 5 ? {
        point: p,
        snapPoint: p
      } : {
        point: d,
        snapPoint: null
      };
    }
    calculateKeepAngle(e, t, r, n, i) {
      if (gr.A.isStraightLineArrow(e)) {
        var o = e.data,
          s = o[0 == r ? 1 : r - 1],
          a = o[r];
        return this.handlePointKeepAngle(s, a, t, n, i);
      }
      if (gr.A.isPolygon(e)) {
        var l = e.data,
          c = l[0 == r ? l.length - 1 : r - 1],
          d = l[r];
        return this.handlePointKeepAngle(c, d, t, n, i);
      }
      return {
        point: t
      };
    }
    handleSubPointMove(e, t, r, n) {
      var i = e.data,
        o = gr.A.isPolygonCurve(e),
        s = i[t];
      if (s) {
        var a = D.A.getSettings(e, "isControlPointBreak");
        "cp" == r ? (s = y.A.setAbsoluteCpForBezier(s, n, null), i = f.A.setIndex(i, t, s), a || (i = y.A.smoothBeziersFromCurrentPoint(i, o))) : "cp2" == r && (s = y.A.setAbsoluteCpForBezier(s, null, n), i = f.A.setIndex(i, t, s), a || (i = y.A.smoothBeziers(i, o))), this.props.onEntityMoving(uo(uo({}, e), {}, {
          data: i
        }));
      }
    }
    getDownPoint(e) {
      var t = m.A.getLeftTopFromEvent(e);
      return {
        x: t.left,
        y: t.top
      };
    }
  }
  function mo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function fo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? mo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class yo extends o().PureComponent {
    constructor() {
      super(...arguments), (0, n.A)(this, "originalEditor", void 0), (0, n.A)(this, "handleRotatingAround", (e, t) => {
        if (this.originalEditor) {
          var r = this.originalEditor,
            n = R.x.calculateCenterPoint(this.originalEditor, this.props.element),
            i = y.A.pointRotate(n, e, t),
            o = y.A.addPoint(r.shape.data.p, y.A.substractPoint(i, n)),
            s = fo(fo({}, r.shape.data), {}, {
              p: o
            }),
            a = fo(fo({}, r.shape.data), {}, {
              p: o,
              rotation: y.A.round2(y.A.addRotation360(r.shape.data.rotation || 0, t))
            }),
            l = R.x.shiftToKeepCenter(s, a, r.shape.anchor, this.props.element),
            c = fo(fo({}, r), {}, {
              shape: fo(fo({}, r.shape), {}, {
                data: l
              })
            });
          this.props.onEntityMoving(c);
        }
      }), (0, n.A)(this, "handleRotatedAround", () => {
        this.originalEditor = void 0, this.props.onEntityMoved();
      }), (0, n.A)(this, "handleRotatingStarted", () => {
        this.originalEditor = this.props.entity;
      });
    }
    render() {
      var e = this.props,
        t = e.entity,
        r = e.element,
        n = R.x.calculateCenterPoint(t, r);
      return o().createElement(On, {
        key: "rotation-around",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        onRotating: this.handleRotatingAround,
        onRotated: this.handleRotatedAround,
        onRotatingStarted: this.handleRotatingStarted,
        centralPoint: n,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        diagramModel: this.props.diagram,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        subSelection: this.props.subSelection,
        getRootElement: this.props.getRootElement
      });
    }
    rotateByRequest(e) {
      "flip-to-point" != e && "flip-to-line-through-point" != e || this.handleFlipTo(e);
    }
    handleFlipTo(e) {
      var t = this.props.entity,
        r = tn.A.buildTransformedRectForEditor(this.props.element, t),
        n = "flip-to-point" == e ? tn.A.flipToPoint(r, this.props.subSelection.point) : tn.A.flipToLineThroughPoint(r, this.props.subSelection.point),
        i = y.A.getCenterPoint(n),
        o = R.x.getSamplePosition(t.shape.anchor, this.props.element.offsetWidth, this.props.element.offsetHeight, {
          rotation: n.rotation,
          skewX: n.skewX
        }, i),
        s = fo(fo({}, t), {}, {
          shape: fo(fo({}, t.shape), {}, {
            data: fo(fo({}, t.shape.data), {}, {
              p: o,
              rotation: n.rotation,
              skewX: n.skewX,
              flipX: n.flipX
            })
          })
        });
      this.props.onEntityMoving(s), L.A.next(() => {
        this.props.onEntityMoved();
      });
    }
  }
  var vo = ["editor", "onEntityMoving", "onEntityMoved", "onEntityChanged"];
  function bo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function xo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? bo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Co extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "compositeShapeControlsRef", void 0), (0, n.A)(this, "onEntityMoved", e => {
        e ? this.props.onEntityMoved(Gr.A.toSizeAbsoluteEditor(e, this.props.editor)) : this.props.onEntityMoved();
      }), (0, n.A)(this, "onEntityMoving", e => {
        e && this.props.onEntityMoving(Gr.A.toSizeAbsoluteEditor(e, this.props.editor));
      }), (0, n.A)(this, "onEntityChanged", (e, t) => {
        this.props.onEntityChanged(Gr.A.toSizeAbsoluteEditor(e, this.props.editor), t);
      }), (0, n.A)(this, "handleCompositeShapeControlsRef", e => {
        this.compositeShapeControlsRef = e;
      });
    }
    resize(e, t, r) {
      this.compositeShapeControlsRef && this.compositeShapeControlsRef.resize(e, t, r);
    }
    render() {
      var e = this.props,
        t = e.editor,
        r = e.onEntityMoving,
        n = e.onEntityMoved,
        i = e.onEntityChanged,
        s = (0, Ne.A)(e, vo);
      return o().createElement(ao, xo(xo({}, s), {}, {
        ref: this.handleCompositeShapeControlsRef,
        shape: Gr.A.sizeAbsoluteToFakeRectWrapShape(t),
        onEntityChanged: this.onEntityChanged,
        onEntityMoved: this.onEntityMoved,
        onEntityMoving: this.onEntityMoving
      }));
    }
  }
  class So extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "controlPoint", void 0), (0, n.A)(this, "baseSVGElement", void 0), (0, n.A)(this, "compositeShapeControlsRef", void 0), (0, n.A)(this, "editorRotationControlRef", void 0), (0, n.A)(this, "editorRotateAroundControlRef", void 0), (0, n.A)(this, "editorBoundingControlRef", void 0), (0, n.A)(this, "handleCompositeShapeControlsRef", e => {
        this.compositeShapeControlsRef = e;
      }), (0, n.A)(this, "handleEditorRotationControlRef", e => {
        this.editorRotationControlRef = e;
      }), (0, n.A)(this, "handleEditorBoundingControlsRef", e => {
        this.editorBoundingControlRef = e;
      }), (0, n.A)(this, "handleEditorRotateAroundControlRef", e => {
        this.editorRotateAroundControlRef = e;
      }), (0, n.A)(this, "getRootElement", () => this.baseSVGElement);
    }
    resize(e, t, r) {
      this.compositeShapeControlsRef && this.compositeShapeControlsRef.resize(e, t, r), this.editorBoundingControlRef && this.editorBoundingControlRef.resize(e, t, r);
    }
    rotateByRequest(e) {
      this.compositeShapeControlsRef && this.compositeShapeControlsRef.rotateByRequest(e), this.editorRotationControlRef && this.editorRotationControlRef.rotateByRequest(e), this.editorRotateAroundControlRef && this.editorRotateAroundControlRef.rotateByRequest(e);
    }
    allowRequestAction(e) {
      return this.compositeShapeControlsRef ? this.compositeShapeControlsRef.allowRequestAction(e) : this.editorRotationControlRef ? "rotate-flip" == e : void 0;
    }
    componentDidMount() {
      this.baseSVGElement = E.f$(u().findDOMNode(this), "svg")[0];
    }
    setControlPoints(e) {
      this.controlPoint && this.controlPoint.x == e.x && this.controlPoint.y == e.y || (this.controlPoint = e, this.forceUpdate());
    }
    clearControlPoint() {
      null != this.controlPoint && (this.controlPoint = null, this.forceUpdate());
    }
    getSelectedEntityType() {
      return gr.A.getEntityType(this.props.entity);
    }
    renderConnectionControlPoints(e) {
      if ("quadratic" == e.type || "cubic" == e.type) return o().createElement(ho, {
        selectedSessionId: this.props.selectedSessionId,
        connection: e,
        refMap: this.props.refMap,
        diagramModel: this.props.data,
        getRootElement: this.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        getDzContainer: this.props.getDZContainer
      });
    }
    renderCompositeShapeControlPoints(e) {
      if (!this.props.isSinglePlotSettings) return o().createElement(ao, {
        ref: this.handleCompositeShapeControlsRef,
        getDZContainer: this.props.getDZContainer,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        subSelection: this.props.subSelection,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        diagramModel: this.props.data,
        selectedSessionId: this.props.selectedSessionId,
        getRootElement: this.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        onEntityChanged: this.props.onEntityChanged,
        onSnapPoint: this.props.onSnapPoint,
        shape: e
      });
    }
    renderEditorControlPoints(e) {
      if (!this.props.refMap[e.id]) return [];
      var t = this.props.refMap[e.id].editor.parentElement;
      return [this.renderEditorRotate(e, t), this.renderEditorSkew(e, t), this.renderEditorBoundingControls(e), this.renderEditorRotateAround(e, t)];
    }
    renderEditorRotate(e, t) {
      if (!e.shape.data.size) return o().createElement(ro, {
        key: "rotation-cp",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        ref: this.handleEditorRotationControlRef,
        element: t,
        entity: e,
        subSelection: yi.A.getSubOrUndefined(this.props.subSelection, "rotation-around"),
        getRootElement: this.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        onSubSelectionChanged: this.props.onSubSelectionChanged
      });
    }
    renderEditorSkew(e, t) {
      if (!e.shape.data.size) return o().createElement(oo, {
        key: "skew-p",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        element: t,
        entity: e,
        elementHeight: t.clientHeight,
        getRootElement: this.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving
      });
    }
    renderEditorBoundingControls(e) {
      if (e.shape.data.size) return o().createElement(Co, {
        ref: this.handleEditorBoundingControlsRef,
        key: "e-bounding",
        getDZContainer: this.props.getDZContainer,
        editor: e,
        selectedSessionId: this.props.selectedSessionId,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        subSelection: this.props.subSelection,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        diagramModel: this.props.data,
        getRootElement: this.getRootElement,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        onEntityChanged: this.props.onEntityChanged,
        onSnapPoint: this.props.onSnapPoint
      });
    }
    renderEditorRotateAround(e, t) {
      if (this.props.subSelection && "rotation-around" == this.props.subSelection.type) return o().createElement(yo, {
        key: "editor-rotate-around",
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        ref: this.handleEditorRotateAroundControlRef,
        diagram: this.props.data,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        entity: e,
        element: t,
        getRootElement: this.getRootElement,
        subSelection: this.props.subSelection,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        getEditorFrameInfo: this.props.getEditorFrameInfo
      });
    }
    renderLinesControlPoints(e) {
      var t = yi.A.getSubOrUndefined(this.props.subSelection, "line-point");
      return o().createElement(go, {
        controlSelectedInfo: t,
        diagramModel: this.props.data,
        entity: e,
        getRootElement: this.getRootElement,
        onControlSelected: this.props.onSubSelectionChanged,
        onEntityMoved: this.props.onEntityMoved,
        onEntityMoving: this.props.onEntityMoving,
        onSnapPoint: this.props.onSnapPoint,
        getDzContainer: this.props.getDZContainer
      });
    }
    renderControlPoints() {
      if (this.props.entity) {
        var e = this.props.entity.id;
        return a.w.isDiagramConnectionId(e) ? this.renderConnectionControlPoints(this.props.entity) : a.w.isDiagramArrowId(e) || a.w.isDiagramShapeId(e) ? this.renderLinesControlPoints(this.props.entity) : a.w.isDiagramCompositeShapeId(e) ? this.renderCompositeShapeControlPoints(this.props.entity) : a.w.isDiagramEditorId(e) ? this.renderEditorControlPoints(this.props.entity) : void 0;
      }
    }
    render() {
      return this.props.hidden ? o().createElement("g", null) : o().createElement("g", {
        className: "no-print dg-controls-layer"
      }, this.renderControlPoints());
    }
  }
  class Ao extends o().Component {
    renderDrawing() {
      if (!this.props.isSinglePlotSettings && this.props.entity) {
        var e = [],
          t = this.props.entity;
        if (gr.A.isCompositeShape(t)) {
          var r = this.props.getDZContainer().zoomRatio,
            n = U.A.getShapeManagement(t);
          if (n.getRotationPoints) {
            var i = n.getRotationPoints(t, this.props.getDZContainer()),
              s = i.p,
              a = i.cp;
            e.push(o().createElement("path", {
              key: "rotate-cp",
              d: "M".concat(a.x, ",").concat(a.y, " L").concat(s.x, ",").concat(s.y),
              style: {
                stroke: "gray",
                strokeOpacity: .3,
                strokeWidth: 1 / r,
                fill: "none"
              }
            }));
          }
          if (n.getSupplementaryLines) {
            var l = n.getSupplementaryLines(t),
              c = hn.A.pathsD(l);
            e.push(o().createElement("path", {
              key: "sl",
              d: c,
              style: {
                stroke: "gray",
                strokeOpacity: .3,
                strokeWidth: 1 / r,
                fill: "none"
              }
            }));
          }
        }
        if (gr.A.isDiagramEditor(t) && this.props.refMap[t.id]) {
          var d = this.props.getDZContainer().zoomRatio,
            h = this.props.refMap[t.id].editor.parentElement,
            p = Gr.A.getRotationPoints(t, h, this.props.getDZContainer()),
            u = p.cp,
            g = p.p,
            m = hn.A.getLineD([g, u]);
          e.push(o().createElement("path", {
            key: "sl",
            d: m,
            style: {
              stroke: "gray",
              strokeOpacity: .3,
              strokeWidth: 1 / d,
              fill: "none"
            }
          }));
        }
        return e;
      }
    }
    render() {
      return o().createElement("g", {
        className: "controls-drawing no-print",
        style: {
          pointerEvents: "none"
        }
      }, this.renderDrawing());
    }
  }
  class wo {
    getIntersectsByPoints(e, t) {
      var r;
      return {
        points: e,
        intersections: h().map(e, e => {
          var r = t.radius;
          switch (t.shapeType) {
            case "o":
              return {
                circle: {
                  cp: e,
                  r
                }
              };
            case "o+":
              return {
                circle: {
                  cp: e,
                  r
                },
                lines: [{
                  p1: {
                    x: e.x - r,
                    y: e.y
                  },
                  p2: {
                    x: e.x + r,
                    y: e.y
                  }
                }, {
                  p1: {
                    x: e.x,
                    y: e.y - r
                  },
                  p2: {
                    x: e.x,
                    y: e.y + r
                  }
                }]
              };
            case "x":
              var n = r / 1.3;
              return {
                lines: [{
                  p1: {
                    x: e.x - n,
                    y: e.y - n
                  },
                  p2: {
                    x: e.x + n,
                    y: e.y + n
                  }
                }, {
                  p1: {
                    x: e.x + n,
                    y: e.y - n
                  },
                  p2: {
                    x: e.x - n,
                    y: e.y + n
                  }
                }]
              };
            case "+":
              return {
                lines: [{
                  p1: {
                    x: e.x - r,
                    y: e.y
                  },
                  p2: {
                    x: e.x + r,
                    y: e.y
                  }
                }, {
                  p1: {
                    x: e.x,
                    y: e.y - r
                  },
                  p2: {
                    x: e.x,
                    y: e.y + r
                  }
                }]
              };
          }
        })
      };
    }
  }
  const Eo = new wo();
  var ko = r(22005);
  class Oo {
    getIntersections(e) {
      var t = {
        stroke: "transparent",
        strokeWidth: 6,
        fill: "none"
      };
      return e.intersections.map((e, r) => {
        var n = ko.A.fromCircle(e.circle, null),
          i = ko.A.fromCircle(e.circle, null, t),
          s = ko.A.fromPaths(e.lines, null),
          a = ko.A.fromPaths(e.lines, null, t);
        return o().createElement("g", {
          key: r
        }, n, i, s, a);
      });
    }
    getIntersectsByPoints(e, t) {
      var r = Eo.getIntersectsByPoints(e, t);
      return {
        svgs: this.getIntersections(r),
        points: e
      };
    }
    getIntersects(e, t, r) {
      var n = ji.A.getIntersects(e, t);
      return this.getIntersectsByPoints(n, r);
    }
  }
  const Do = new Oo();
  class Po extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "intersectionsCache", void 0);
    }
    componentWillReceiveProps(e) {
      e.intersections.settings != this.props.intersections.settings && h().values(this.getCache()).forEach(e => {
        e.svg && (e.svg = "invalid");
      });
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    getCache() {
      return this.intersectionsCache || {};
    }
    setCache(e) {
      this.intersectionsCache = e;
    }
    hasNoIntersection(e) {
      if (!e || !e.items || e.items.length <= 0) return !0;
      if (1 == e.items.length) {
        var t = e.items[0];
        if (!t.entities || t.entities.length <= 0) return !0;
      }
      return !1;
    }
    getDefaultFillBorderColor() {
      return this.props.fixedContextHandler.getDefaultBorderColor();
    }
    render() {
      if (this.hasNoIntersection(this.props.intersections)) return o().createElement("g", null);
      for (var e = [], t = this.getShapeMap(this.props.shapes), r = this.getCache(), n = {}, i = [], s = this.props.intersections, a = Mo(s), l = a.radius, c = Wi.getEntityHtmlStyleInfo(s, this.getDefaultFillBorderColor(), this.getStyleIdContext()), d = 0; d < s.items.length; d++) {
        var p = s.items[d];
        if (1 == p.entities.length) {
          var u = p.entities[0],
            g = this.getIntersectionsBetweenShapes(p.id, [t[u]], this.props.shapes, r, n, a),
            m = g.component,
            y = g.points;
          e.push(m), i = i.concat(y);
        }
      }
      this.setCache(n), s.___points = i;
      var v = "intersections-group",
        b = null,
        x = {
          stroke: "green",
          strokeWidth: 1,
          transform: "translate(-".concat(l + 15, "px, -5px)")
        },
        C = f.A.setProp(x, "transform", "rotate(90deg) translate(-".concat(l + 15, "px, -5px)")),
        S = f.A.setProp(x, "transform", "rotate(180deg) translate(-".concat(l + 15, "px, -5px)")),
        A = f.A.setProp(x, "transform", "rotate(270deg) translate(-".concat(l + 15, "px, -5px)"));
      return this.props.intersectionSelected && (b = h().map(i, (e, t) => {
        var r = {
          transform: "translate(".concat(e.x, "px,").concat(e.y, "px)"),
          cursor: "move"
        };
        return o().createElement("g", {
          key: t,
          style: r
        }, o().createElement("path", {
          d: "M0,5 10,5 M5,2 L10,5 L5,8",
          style: x
        }), o().createElement("path", {
          d: "M0,5 10,5 M5,2 L10,5 L5,8",
          style: C
        }), o().createElement("path", {
          d: "M0,5 10,5 M5,2 L10,5 L5,8",
          style: S
        }), o().createElement("path", {
          d: "M0,5 10,5 M5,2 L10,5 L5,8",
          style: A
        }));
      })), o().createElement("g", {
        className: v,
        onMouseDown: e => this.props.selectIntersections(s, e)
      }, c.defs, b, o().createElement("g", {
        style: c.style
      }, e));
    }
    stringHashCode(e) {
      var t = 0,
        r,
        n;
      if (0 === e.length) return t;
      for (r = 0; r < e.length; r++) t = (t << 5) - t + (n = e.charCodeAt(r)), t |= 0;
      return t;
    }
    isValidCache(e, t, r) {
      if (e) {
        var n = !1;
        if (e.data1 == t.data && e.data2 == r.data && (n = !0), e.data2 == t.data && e.data1 == r.data && (n = !0), !n) return !1;
        var i = !1;
        if (e.settings1 == t.settings && e.settings2 == r.settings && (i = !0), e.settings1 == r.settings && e.settings2 == t.settings && (i = !0), n && i) return !0;
      }
      return !1;
    }
    getIntersectionsBetweenShapes(e, t, r, n, i, s) {
      for (var a = [], l = [], c = 0; c < t.length; c++) {
        var d = t[c],
          h;
        if (d) if (!(h = D.A.getSettings(d, "blockIntersection"))) for (var p = 0; p < r.length; p++) {
          var u = r[p],
            h;
          if (u) if (d.id != u.id) if (!(h = D.A.getSettings(u, "blockIntersection"))) {
            var g = this.stringHashCode(d.id) + this.stringHashCode(u.id);
            if (!i[g]) {
              var m = n[g];
              if (this.isValidCache(m, d, u)) {
                if ("invalid" == m.svg) {
                  var f = Do.getIntersectsByPoints(m.points, s),
                    y = f.svgs,
                    v = f.points;
                  m.svg = o().createElement("g", {
                    key: d.id + u.id,
                    className: "intersection-group"
                  }, y);
                }
                m.svg && "string" != typeof m.svg && (a.push(m.svg), l = l.concat(m.points)), i[g] = n[g];
              } else {
                var b = Do.getIntersects(d, u, s),
                  y = b.svgs,
                  v = b.points;
                if (i[g] = {
                  data1: d.data,
                  data2: u.data,
                  settings1: d.settings,
                  settings2: u.settings,
                  points: v,
                  svg: null
                }, y && y.length > 0) {
                  var x = o().createElement("g", {
                    key: d.id + u.id,
                    className: "intersection-group"
                  }, y);
                  i[g].svg = x, a.push(x), l = l.concat(v);
                }
              }
            }
          }
        }
      }
      return {
        component: o().createElement("g", {
          key: e
        }, a),
        points: l
      };
    }
    getShapeMap(e) {
      var t = {};
      return e.forEach(e => t[e.id] = e), t;
    }
  }
  function Mo(e) {
    var t, r;
    return {
      shapeType: D.A.getSettings(e, "shapeType"),
      radius: D.A.getSettings(e, "radius")
    };
  }
  var Io = r(34029);
  function To(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Lo(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? To(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : To(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ro {
    splitCubicLine(e, t) {
      var r = h().map(e.data, e => y.A.toAbsoluteControlPointCubic(e)),
        n,
        i = this.splitBeziers(r, t).map(e => y.A.toRelativeControlPointCubic(e)),
        o;
      return Lo(Lo({}, e), {}, {
        data: i
      });
    }
    splitBeziers(e, t) {
      var r = h().minBy(e, e => y.A.distanceFromBezier(t, e).distance),
        n,
        i = y.A.nearestPointOnBezier(t, r).location;
      if (0 == y.A.round2(i) || 1 == y.A.round2(i)) return e;
      var o = y.A.splitBezier(r, i),
        s;
      return h().flatMap(e, e => e == r ? o : [e]);
    }
    splitPolycurveLine(e, t) {
      var r = h().map(e.data, e => y.A.toAbsoluteControlPointCubic(e)),
        n,
        i = this.splitBeziers(r, t).map(e => y.A.toRelativeControlPointCubic(e)),
        o;
      return Lo(Lo({}, e), {}, {
        data: i
      });
    }
    splitPolygon(e, t) {
      var r = y.A.pointsToLines(e.data, !0),
        n,
        i = this.splitLinesByPoint(r, t).map(e => e.p1),
        o;
      return Lo(Lo({}, e), {}, {
        data: i
      });
    }
    splitStraightLine(e, t) {
      var r = y.A.pointsToLines(e.data),
        n,
        i = this.splitLinesByPoint(r, t).map(e => e.p1).concat([h().last(r).p2]),
        o;
      return Lo(Lo({}, e), {}, {
        data: i
      });
    }
    splitLinesByPoint(e, t) {
      var r = h().minBy(e, e => y.A.distanceToLine(t, e.p1, e.p2)),
        n = y.A.splitByNearestPointOnLine(t, r.p1, r.p2),
        i;
      return h().flatMap(e, e => e == r ? n : [e]);
    }
  }
  const Bo = new Ro();
  class Fo extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectShape", (e, t) => {
        this.props.onSelect(e, t);
      }), (0, n.A)(this, "handleStraightLineDoubleClick", (e, t) => {
        var r = F.T.getPosFromAbsToElement(m.A.getLeftTopFromEvent(e), this.props.getBaseElement(), this.getDzc()),
          n = {
            x: r.left,
            y: r.top
          },
          i = Bo.splitStraightLine(t, n);
        this.props.onShapeChanged(i);
      }), (0, n.A)(this, "handleCubicLineDoubeClick", (e, t) => {
        var r = F.T.getPosFromAbsToElement(m.A.getLeftTopFromEvent(e), this.props.getBaseElement(), this.getDzc()),
          n = F.T.toPoint(r),
          i = Bo.splitCubicLine(t, n);
        this.props.onShapeChanged(i);
      }), (0, n.A)(this, "handleShapeChanged", e => {
        this.props.onShapeChanged(e);
      }), (0, n.A)(this, "handlePolygonDoubleClick", (e, t) => {
        var r = F.T.getPosFromAbsToElement(m.A.getLeftTopFromEvent(e), this.props.getBaseElement(), this.getDzc()),
          n = F.T.toPoint(r),
          i = Bo.splitPolygon(t, n);
        this.props.onShapeChanged(i);
      }), (0, n.A)(this, "handlePolycurveDoubleClick", (e, t) => {
        var r = this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer(),
          n = F.T.getPosFromAbsToElement(m.A.getLeftTopFromEvent(e), this.props.getBaseElement(), r),
          i = F.T.toPoint(n),
          o = Bo.splitPolycurveLine(t, i);
        this.props.onShapeChanged(o);
      });
    }
    shouldComponentUpdate(e, t) {
      var r = this.props;
      return r.remoteSelections != e.remoteSelections || r.selectedDgObj != e.selectedDgObj || r.intersections != e.intersections || r.shapes != e.shapes || r.subSelection != e.subSelection;
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    isSelectedId(e) {
      return this.props.selectionCarrier.isSingleSelected(e);
    }
    isGroupSelectedId(e) {
      return this.props.selectionCarrier.isInGroupSelected(e);
    }
    getDefaultFillBorderColor() {
      return this.props.fixedContextHandler.getDefaultBorderColor();
    }
    renderStraightLine(e, t, r) {
      var n = e.data,
        i = P.A.getEntityStyle(e, "thickness");
      return o().createElement(_i.Ay, {
        key: e.id,
        type: "straight",
        mAngleBy: e.mAngleBy,
        mVer: e.mVer,
        tail: e.tail,
        head: e.head,
        shaft: e.shaft,
        middle: e.middle,
        bpHead: e.bpHead,
        headScale: e.headScale,
        thickness: i,
        data: n,
        onMouseDown: r => {
          r.stopPropagation(), t(r, e);
        },
        onDoubleClick: t => this.handleStraightLineDoubleClick(t, e),
        className: "connection",
        isSelected: this.isSelectedId(e.id),
        isGroupSelected: r || this.isGroupSelectedId(e.id),
        isRemoteSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
        remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id),
        settings: e.settings,
        htmlStyleInfo: Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext())
      });
    }
    getDzc() {
      return this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer();
    }
    renderCubicLine(e, t, r) {
      var n = h().map(e.data, e => y.A.toAbsoluteControlPointCubic(e)),
        i = P.A.getEntityStyle(e, "thickness");
      return o().createElement(_i.Ay, {
        key: e.id,
        type: "cubic",
        headAngleByDistance: e.angleBy,
        mAngleBy: e.mAngleBy,
        mVer: e.mVer,
        tail: e.tail,
        head: e.head,
        shaft: e.shaft,
        middle: e.middle,
        bpHead: e.bpHead,
        headScale: e.headScale,
        thickness: i,
        data: n,
        onMouseDown: r => {
          r.stopPropagation(), t(r, e);
        },
        onDoubleClick: t => this.handleCubicLineDoubeClick(t, e),
        className: "connection",
        isSelected: this.isSelectedId(e.id),
        isGroupSelected: r || this.isGroupSelectedId(e.id),
        isRemoteSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
        remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id),
        settings: e.settings,
        htmlStyleInfo: Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext())
      });
    }
    getSelectedClassName(e, t, r) {
      return I()(t, {
        selected: this.isSelectedId(e),
        "group-selected": r || this.isGroupSelectedId(e)
      });
    }
    renderArrow(e, t, r) {
      return gr.A.isStraightLineArrow(e) ? this.renderStraightLine(e, t, r) : this.renderCubicLine(e, t, r);
    }
    renderCompositeShape(e, t, r) {
      var n = r || this.isGroupSelectedId(e.id),
        i = this.getSelectedClassName(e.id, "composite-shape", n),
        s = this.getReactStyleInfo(e),
        a = U.A.getShapeManagement(e).getComponent(),
        l = this.isSelectedId(e.id),
        c = l ? this.props.subSelection : null;
      return o().createElement(a, {
        key: e.id,
        isSelected: l,
        isGroupSelected: n,
        isRemoteSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
        remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id),
        subSelection: c,
        shape: e,
        styleInfo: s,
        className: i,
        onShapeChanged: this.handleShapeChanged,
        fixedContextHandler: this.props.fixedContextHandler,
        diagramFixedCtxHandler: this.props.diagramFixedCtxHandler,
        onMouseDown: r => t(r, e),
        getBaseElement: this.props.getBaseElement
      });
    }
    getReactStyleInfo(e) {
      return Wi.getEntityHtmlStyleInfo(e, this.getDefaultFillBorderColor(), this.getStyleIdContext());
    }
    renderShape(e, t, r) {
      var n = this.getSelectedClassName(e.id, "shape", r),
        i = this.getReactStyleInfo(e);
      if (gr.A.isPolygon(e)) return Io.A.renderPolygon(e, e.data, n, t, t => this.handlePolygonDoubleClick(t, e), i, {
        isSelected: this.isSelectedId(e.id),
        isGroupSelected: r || this.isGroupSelectedId(e.id),
        isRemoteSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
        remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id)
      });
      if (gr.A.isPolygonCurve(e)) {
        var o = h().map(e.data, e => y.A.toAbsoluteControlPointCubic(e));
        return Io.A.renderPolygonCurve(e, o, n, i, {
          isSelected: this.isSelectedId(e.id),
          isGroupSelected: r || this.isGroupSelectedId(e.id),
          isRemoteSelected: this.props.selectionCarrier.isRemoteSelected(e.id),
          remoteSelectedColor: this.props.selectionCarrier.getRemoteSelectedColor(e.id)
        }, t => this.handlePolycurveDoubleClick(t, e), t);
      }
    }
    renderShapes(e, t, r, n, i, o) {
      return h().map(e, e => {
        n && this.props.selectionCarrier.addSelectedIdInEntityGroup(e.id), i && this.props.selectionCarrier.addRemoteSelectedIdInGroup(e.id, o);
        var s = gr.A.getEntityType(e);
        return "linked" == s && (n && this.props.selectionCarrier.addSelectedIdInEntityGroup(e.linkedId), i && this.props.selectionCarrier.addRemoteSelectedIdInGroup(e.linkedId, o)), "shape-arrow" == s ? this.renderArrow(e, t, n) : "shape-object" == s ? this.renderShape(e, t, n) : "shape-composite" == s ? this.renderCompositeShape(e, t, n) : "group" == s ? this.renderGroup(e, r ? t : null, n, i || this.props.selectionCarrier.isRemoteSelected(e.id), o || this.props.selectionCarrier.getRemoteSelectedColor(e.id)) : void 0;
      });
    }
    selectGroupShape(e, t, r) {
      this.selectShape(t, e);
    }
    renderGroup(e, t, r, n, i) {
      t = t || this.selectGroupShape.bind(this, e);
      var s = this.isSelectedId(e.id),
        a = r || this.isGroupSelectedId(e.id),
        l = I()("grouped-shape", {
          selected: s
        });
      return o().createElement("g", {
        key: e.id,
        className: l
      }, this.renderShapes(e.entities, t, !0, s || a, n, i));
    }
    render() {
      return o().createElement("g", {
        className: "shapes-region",
        style: {
          stroke: "black",
          fill: "none"
        }
      }, this.renderShapes(this.props.shapes, this.selectShape, !1, !1, !1, void 0), o().createElement(Po, {
        fixedContextHandler: this.props.fixedContextHandler,
        selectIntersections: this.props.selectIntersections,
        intersectionSelected: this.props.intersectionSelected,
        shapes: this.props.shapes,
        intersections: this.props.intersections
      }));
    }
  }
  class jo extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", new un.X({}, this.props.getDzContainer)), (0, n.A)(this, "zoomElement", void 0), this.state = {
        fromPos: null,
        toPos: null
      }, this.movingHandler.onMoving = (e, t, r, n) => {
        this.setState({
          toPos: t
        });
      }, this.movingHandler.onMoved = () => {
        if (this.state.toPos) {
          var e = {
              p1: this.state.fromPos,
              p2: this.state.toPos
            },
            t = u().findDOMNode(this),
            r = F.T.getBCRectToElement(t, this.zoomElement, this.props.getDzContainer()),
            n = {
              p1: {
                x: e.p1.left + r.left,
                y: e.p1.top + r.top
              },
              p2: {
                x: e.p2.left + r.left,
                y: e.p2.top + r.top
              }
            };
          this.props.onRectangleSelect(n);
        }
        this.setState({
          fromPos: null,
          toPos: null
        });
      };
    }
    setInfo(e) {
      this.zoomElement = e;
    }
    setMouseDown(e) {
      if (!this.movingHandler.container) {
        var t = u().findDOMNode(this);
        this.movingHandler.setBaseElement(t);
      }
      var r = this.movingHandler.mouseDown(e);
      this.setState({
        fromPos: r
      });
    }
    renderSelection() {
      if (this.state.fromPos && this.state.toPos) {
        var e = y.A.getClientRect({
          p1: F.T.toPoint(this.state.fromPos),
          p2: F.T.toPoint(this.state.toPos)
        });
        return o().createElement("rect", {
          style: No,
          x: e.left,
          y: e.top,
          width: e.width,
          height: e.height
        });
      }
    }
    render() {
      return o().createElement("svg", {
        style: _o
      }, this.renderSelection());
    }
  }
  var _o = {
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "visible",
      left: 0,
      top: 0,
      pointerEvents: "none"
    },
    No = {
      stroke: "gray",
      fill: "none",
      strokeWidth: 1,
      strokeDasharray: "1.5px 2.5px"
    };
  class zo {
    pixelToPointScale() {
      return .75;
    }
  }
  const Ho = new zo();
  var Wo = function () {
      function e(e, t) {
        var r = [],
          n = !0,
          i = !1,
          o = void 0;
        try {
          for (var s = e[Symbol.iterator](), a; !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            !n && s.return && s.return();
          } finally {
            if (i) throw o;
          }
        }
        return r;
      }
      return function (t, r) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    Vo = 2 * Math.PI,
    Uo = function e(t, r, n, i, o, s, a) {
      var l = t.x,
        c = t.y,
        d,
        h;
      return {
        x: i * (l *= r) - o * (c *= n) + s,
        y: o * l + i * c + a
      };
    },
    qo = function e(t, r) {
      var n = 1.5707963267948966 === r ? .551915024494 : -1.5707963267948966 === r ? -.551915024494 : 4 / 3 * Math.tan(r / 4),
        i = Math.cos(t),
        o = Math.sin(t),
        s = Math.cos(t + r),
        a = Math.sin(t + r);
      return [{
        x: i - o * n,
        y: o + i * n
      }, {
        x: s + a * n,
        y: a - s * n
      }, {
        x: s,
        y: a
      }];
    },
    Go = function e(t, r, n, i) {
      var o,
        s = t * n + r * i;
      return s > 1 && (s = 1), s < -1 && (s = -1), (t * i - r * n < 0 ? -1 : 1) * Math.acos(s);
    },
    Ko = function e(t, r, n, i, o, s, a, l, c, d, h, p) {
      var u = Math.pow(o, 2),
        g = Math.pow(s, 2),
        m = Math.pow(h, 2),
        f = Math.pow(p, 2),
        y = u * g - u * f - g * m;
      y < 0 && (y = 0), y /= u * f + g * m;
      var v = (y = Math.sqrt(y) * (a === l ? -1 : 1)) * o / s * p,
        b = y * -s / o * h,
        x = d * v - c * b + (t + n) / 2,
        C = c * v + d * b + (r + i) / 2,
        S = (h - v) / o,
        A = (p - b) / s,
        w = (-h - v) / o,
        E = (-p - b) / s,
        k = Go(1, 0, S, A),
        O = Go(S, A, w, E);
      return 0 === l && O > 0 && (O -= Vo), 1 === l && O < 0 && (O += Vo), [x, C, k, O];
    },
    Zo;
  const Yo = function e(t) {
    var r = t.px,
      n = t.py,
      i = t.cx,
      o = t.cy,
      s = t.rx,
      a = t.ry,
      l = t.xAxisRotation,
      c = void 0 === l ? 0 : l,
      d = t.largeArcFlag,
      h = void 0 === d ? 0 : d,
      p = t.sweepFlag,
      u = void 0 === p ? 0 : p,
      g = [];
    if (0 === s || 0 === a) return [];
    var m = Math.sin(c * Vo / 360),
      f = Math.cos(c * Vo / 360),
      y = f * (r - i) / 2 + m * (n - o) / 2,
      v = -m * (r - i) / 2 + f * (n - o) / 2;
    if (0 === y && 0 === v) return [];
    s = Math.abs(s), a = Math.abs(a);
    var b = Math.pow(y, 2) / Math.pow(s, 2) + Math.pow(v, 2) / Math.pow(a, 2);
    b > 1 && (s *= Math.sqrt(b), a *= Math.sqrt(b));
    var x = Ko(r, n, i, o, s, a, h, u, m, f, y, v),
      C = Wo(x, 4),
      S = C[0],
      A = C[1],
      w = C[2],
      E = C[3],
      k = Math.abs(E) / (Vo / 4);
    Math.abs(1 - k) < 1e-7 && (k = 1);
    var O = Math.max(Math.ceil(k), 1);
    E /= O;
    for (var D = 0; D < O; D++) g.push(qo(w, E)), w += E;
    return g.map(function (e) {
      var t = Uo(e[0], s, a, f, m, S, A),
        r = t.x,
        n = t.y,
        i = Uo(e[1], s, a, f, m, S, A),
        o = i.x,
        l = i.y,
        c = Uo(e[2], s, a, f, m, S, A),
        d,
        h;
      return {
        x1: r,
        y1: n,
        x2: o,
        y2: l,
        x: c.x,
        y: c.y
      };
    });
  };
  class Qo {
    drawPath(e) {
      switch (e[0]) {
        case "Path":
          return this.drawSimplePath(e);
        case "CompoundPath":
          return this.drawCompoundPaht(e);
      }
    }
    drawSimplePath(e) {
      return this.drawSegments(e[1].segments, e[1].closed);
    }
    drawCompoundPaht(e) {
      return e[1].children.map(e => this.drawPath(e)).join(" ");
    }
    drawSegments(e, t) {
      if (e.length <= 1) return "";
      for (var r = ei.A.getSegmentPoint(e[0]), n = this.pointD(r), i = 0; i < e.length - 1; i++) {
        var o = e[i],
          s = e[i + 1];
        n += this.connectSegment(o, s);
      }
      if (t) {
        var a = ei.A.getSegmentPoint(e[0]),
          l = ei.A.getSegmentPoint(h().last(e));
        ei.A.segPointEquals(a, l) || (n += this.connectSegment(h().last(e), e[0])), n += " -- cycle";
      }
      return n;
    }
    connectSegment(e, t) {
      if (ei.A.isSegmentPoint(e) || ei.A.isSegmentPoint(t)) return " -- ".concat(this.pointD(ei.A.getSegmentPoint(t)));
      var r = ei.A.getHandleOut(e),
        n = ei.A.getHandleIn(t);
      return r && n ? " .. controls ".concat(this.pointD(r)) + " and ".concat(this.pointD(n)) + " .. ".concat(this.pointD(ei.A.getSegmentPoint(t))) : " -- ".concat(this.pointD(ei.A.getSegmentPoint(t)));
    }
    pointD(e) {
      return "(".concat(y.A.round2(e[0]), ",").concat(y.A.round2(e[1]), ")");
    }
  }
  const Jo = new Qo();
  function Xo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function $o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Xo(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xo(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function es(e) {
    return y.A.round2(e);
  }
  class ts {
    constructor() {
      (0, n.A)(this, "idTestCount", 1e3);
    }
    pathsTikz(e) {
      if (!e || e.length <= 0) return "";
      for (var t = "", r = null, n = e.length > 1, i = 0; i < e.length; i++) {
        var o = y.A.roundPath(e[i]),
          s = i > 0 ? y.A.roundPoint(e[i - 1].p2) : null,
          a = s && y.A.pointEquals(s, o.p1),
          l = i == e.length - 1,
          c = !o.cp;
        if (a && n && c && r && y.A.pointEquals(o.p2, r.p1)) t += " -- cycle", r = null;else {
          if (a || (t += this.pointD(o.p1)), o.cp2) t += " .. controls ".concat(this.pointD(o.cp)), t += " and ".concat(this.pointD(o.cp2)), t += " .. ".concat(this.pointD(o.p2));else if (o.cp) {
            var d = y.A.quadraticToCubic(o);
            t += " .. controls ".concat(this.pointD(d.cp)), t += " and ".concat(this.pointD(d.cp2)), t += " .. ".concat(this.pointD(d.p2));
          } else t += " -- ".concat(this.pointD(o.p2));
          n && r && l && y.A.pointEquals(o.p2, r.p1) ? (t += " -- cycle", r = null) : r || (r = y.A.roundPath(e[i]));
        }
      }
      return t;
    }
    getStrokeTypeTikz(e, t) {
      var r = P.A.getStrokeDashArray(e, t);
      if (!r || r.length <= 0) return "";
      var n = Ho.pixelToPointScale(),
        i = r.map(e => es(e * n));
      return 2 == r.length ? "[dash pattern={on ".concat(i[0], "pt off ").concat(i[1], "pt}]") : 4 == r.length ? "[dash pattern={on ".concat(i[0], "pt off ").concat(i[1], "pt on ").concat(i[2], "pt off ").concat(i[3], "pt}]") : "";
    }
    pointsTikz(e) {
      var t = [];
      return h().forEach(e, (r, n) => {
        n > 0 && n == e.length - 1 && y.A.pointEquals(e[0], r) ? t.push("cycle") : t.push("(".concat(es(r.x), ",").concat(es(r.y), ")"));
      }), t.join(" -- ");
    }
    drawWithD(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "draw";
      t = t || {};
      var i = r ? this.rotateOptionsTikz(r.rotation, r.cp) : "",
        o = r ? this.canvasRotateOptionsTikz(r.rotation, r.cp) : "",
        s = this.style(t);
      if (s.gradient && s.fading && "draw" == n && "none" != t.strokeColor) {
        var a = this.style({
            fillColor: t.fillColor,
            boxShadow: t.boxShadow
          }),
          l = this.style($o($o({}, t), {}, {
            fillColor: void 0,
            boxShadow: void 0
          })),
          c = "\\path ".concat(o, " ").concat(a.style, " ").concat(e, " ; % for fading"),
          d = "\\draw ".concat(i, " ").concat(l.style, " ").concat(e, " ; % for border");
        return {
          d: "".concat(c, " \n ").concat(d, " \n"),
          defs: (a.defs || []).concat(l.defs || [])
        };
      }
      var h = "\\".concat(n, " ").concat(i, " ").concat(s.style, " ").concat(e, " ;");
      return s.gradient && r && r.rotation && (h = "\\path ".concat(i, " ").concat(e, " ; % fake path for bounding box"), h += "\n\\".concat(n, " ").concat(o, " ").concat(s.style, " ").concat(e, " ;")), s.scopeScripts && (h = "\\begin{scope}\n            ".concat(s.scopeScripts.join("\n"), "\n            ").concat(h, "\n\\end{scope}")), {
        d: h,
        defs: s.defs
      };
    }
    pointD(e) {
      return "(".concat(es(e.x), ",").concat(es(e.y), ")");
    }
    lineWidth(e) {
      return (e = es(Ho.pixelToPointScale() * e)) ? "[line width=".concat(e, "] ") : "";
    }
    shaft(e, t) {
      return this.getStrokeTypeTikz(e, t);
    }
    drawPaperPath(e, t) {
      return this.drawWithD(Jo.drawPath(e), t);
    }
    drawPaths(e, t, r) {
      return this.drawWithD(this.pathsTikz(e), t, r);
    }
    drawPoints(e, t) {
      return this.drawWithD(this.pointsTikz(e), t);
    }
    cycleLines(e, t) {
      var r = h().map(e, e => "(".concat(es(e.x), ",").concat(es(e.y), ")")).join(" -- ") + " -- cycle";
      return this.drawWithD(r, t);
    }
    circleTikz(e) {
      return " (".concat(es(e.cp.x), ", ").concat(es(e.cp.y), ") circle [x radius= ").concat(es(e.r), ", y radius= ").concat(es(e.r), "] ");
    }
    arcTikz(e) {
      var t = Yo({
          px: e.p1.x,
          py: e.p1.y,
          cx: e.p2.x,
          cy: e.p2.y,
          rx: e.rx,
          ry: e.ry,
          xAxisRotation: e.xRotation,
          largeArcFlag: 0,
          sweepFlag: 0
        }),
        r = t.map((r, n) => {
          var i;
          return {
            p1: n > 0 ? {
              x: t[n - 1].x,
              y: t[n - 1].y
            } : e.p1,
            cp: {
              x: r.x1,
              y: r.y1
            },
            cp2: {
              x: r.x2,
              y: r.y2
            },
            p2: {
              x: r.x,
              y: r.y
            }
          };
        });
      return this.pathsTikz(r);
    }
    drawArc(e, t) {
      return this.drawWithD(this.arcTikz(e), t);
    }
    ellipseTikz(e) {
      return " (".concat(es(e.cp.x), ", ").concat(es(e.cp.y), ") circle [x radius= ").concat(es(e.rx), ", y radius= ").concat(es(e.ry), "] ");
    }
    ellipseFromRectTikz(e) {
      return this.ellipseTikz({
        cp: {
          x: (e.p2.x + e.p1.x) / 2,
          y: (e.p2.y + e.p1.y) / 2
        },
        rx: (e.p2.x - e.p1.x) / 2,
        ry: (e.p2.y - e.p1.y) / 2
      });
    }
    rectangleTikz(e) {
      return "(".concat(es(e.p1.x), ", ").concat(es(e.p1.y), ") rectangle (").concat(es(e.p2.x), ", ").concat(es(e.p2.y), ") ");
    }
    roundCornerTikz(e) {
      return "[rounded corners= ".concat(e * Ho.pixelToPointScale(), "]");
    }
    canvasRotateOptionsTikz(e, t, r) {
      if (!e) return "";
      var n = t ? {
          x: t.x,
          y: -t.y
        } : void 0,
        i = this.rotateOptionsTikz(-e, n, !1);
      if (!i) return "";
      var o = "transform canvas= { ".concat(i, " }");
      return !1 === r ? o : "[".concat(o, "]");
    }
    rotateOptionsTikz(e, t, r) {
      if (!e) return "";
      var n = "";
      return n = t ? "rotate around= { ".concat(es(e), ": (").concat(es(t.x), ", ").concat(es(t.y), ")\n    }") : "rotate= ".concat(es(e), " "), !1 === r ? n : "[".concat(n, "]");
    }
    color(e) {
      var t = P.A.colorAsArray(e, k.A.blackArr);
      return "{rgb, 255:red, ".concat(t[0], "; green, ").concat(t[1], "; blue, ").concat(t[2], " } ");
    }
    colorOptionsAsTikz(e) {
      if (!e || "none" == e) return {
        colorParts: []
      };
      if (h().isString(e)) {
        var t = k.A.stringToRgbaArr(e, k.A.blackArr);
        if (3 == t.length || 1 == t[3]) return {
          colorParts: ["".concat(this.color(t), " ")]
        };
        e = t;
      }
      return h().isArray(e) ? {
        colorParts: ["".concat(this.color(e), " "), "".concat(e[3], " ")]
      } : P.A.isPattern(e) ? this.patternToTikzPattern(e) : this.gradientToTikzShading(e);
    }
    patternToTikzPattern(e) {
      var t = this.generateNameId(),
        r = "".concat(pt.A.convertTikzSetPatternDef()).concat(pt.A.ConvertTikzPatternDefs(e, t)),
        n = e.color.match(/\d+/g);
      return {
        type: "pattern",
        def: r,
        colorParts: ["pattern=".concat(t, ",pattern size=").concat(.75 * e.size, "pt,pattern thickness=").concat(.75 * e.thickness, "pt,pattern radius=").concat(e.radius ? .75 * e.radius : 0, "pt, pattern color={rgb, 255:red, ").concat(n[0], "; green, ").concat(n[1], "; blue, ").concat(n[2], "}")]
      };
    }
    pointTransformPgf(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "bp";
      return "\\pgfpoint{".concat(es(e), " ").concat(r, " } { ").concat(es(t), " ").concat(r, " } ");
    }
    shiftPgf(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "bp";
      return "\\pgftransformshift{".concat(this.pointTransformPgf(e, t, r), " } ");
    }
    scalePgf(e) {
      return "\\pgftransformscale{".concat(e, " } ");
    }
    rotatePgf(e) {
      return "\\pgftransformrotate{".concat(e, " } ");
    }
    generateNameId() {
      return b.A.isTestEnv() ? (this.idTestCount += 1, "_" + this.idTestCount.toString(36).substr(0, 9)) : "_" + Math.random().toString(36).substr(2, 9);
    }
    getTikzRgbStop(e, t, r, n) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "bp";
      return "rgb(".concat(n).concat(i, ")=(").concat(e, ",").concat(t, ",").concat(r, ")");
    }
    getTikzFadingStop(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "bp";
      return "color(".concat(t).concat(r, ")=(transparent!").concat(100 - 100 * e, ")");
    }
    fromPgfTransforms(e) {
      return e.map(e => "shift" == e.type ? this.shiftPgf(e.x, e.y) : "scale" == e.type ? this.scalePgf(e.scale) : this.rotatePgf(e.rotation)).join(" ");
    }
    fromTikzLinearFading(e) {
      return this.fromTikzFading(e, {
        declareShading: "\\pgfdeclarehorizontalshading{#1} {150bp} {#2 } "
      });
    }
    fromTikzRadialFading(e) {
      return this.fromTikzFading(e, {
        declareShading: "\\pgfdeclareradialshading{#1} { \\pgfpoint{".concat(e.focal.x, "bp} {").concat(e.focal.y, "bp}} {#2} ")
      });
    }
    fromTikzFading(e, t) {
      if (h().every(e.sortedStops, e => e.a >= 1)) return {
        type: "gradient",
        colorParts: [],
        def: ""
      };
      var r = h().last(e.sortedStops),
        n = e.sortedStops[0],
        i = [f.A.set(n, "pos", 0)].concat(e.sortedStops).concat([f.A.set(r, "pos", e.lastStopPos)]).map(e => this.getTikzFadingStop(e.a, e.pos)).join(";\n"),
        o = this.generateNameId(),
        s = t.declareShading.replace("#1", o).replace("#2", i),
        a = this.generateNameId(),
        l = ["\\pgfdeclarefading{".concat(a, "}{\\pgfuseshading{").concat(o, " } } ")],
        c = ["path fading= ".concat(a, " ")],
        d = [],
        p = [];
      if (e.transforms && e.transforms.length > 0) {
        var u = "\\pgfsetadditionalshadetransform{".concat(this.fromPgfTransforms(e.transforms), "}"),
          g = this.generateNameId();
        d = ["\n\\tikzset{".concat(g, "/.code = {").concat(u, "}}")], l = ["\\pgfdeclarefading{".concat(a, "}{\\tikz \\fill[shading=").concat(o, ",").concat(g, "] (0,0) rectangle (50bp,50bp); } ")], c.push("fading transform={xshift=2}");
      }
      return {
        type: "gradient",
        def: d.concat(s).concat(l).join("\n"),
        colorParts: c.concat(p)
      };
    }
    fromTikzLinearGradient(e) {
      var t = this.fromTikzGradient(e, {
          declareShading: "\\pgfdeclarehorizontalshading{#1}{150bp}{#2}"
        }),
        r = this.fromTikzLinearFading(e);
      return {
        type: "gradient",
        def: t.def + r.def,
        colorParts: t.colorParts.concat(r.colorParts)
      };
    }
    fromTikzRadialGradient(e) {
      var t = this.fromTikzGradient(e, {
          declareShading: "\\pgfdeclareradialshading{#1}{\\pgfpoint{".concat(e.focal.x, "bp}{").concat(e.focal.y, "bp}}{#2}")
        }),
        r = this.fromTikzRadialFading(e);
      return {
        type: "gradient",
        def: t.def + r.def,
        colorParts: t.colorParts.concat(r.colorParts)
      };
    }
    fromTikzGradient(e, t) {
      var r = h().last(e.sortedStops),
        n = e.sortedStops[0],
        i = [f.A.set(n, "pos", 0)].concat(e.sortedStops).concat([f.A.set(r, "pos", e.lastStopPos)]).map(e => this.getTikzRgbStop(e.r, e.g, e.b, e.pos)).join(";\n"),
        o = [],
        s = [];
      if (e.transforms && e.transforms.length > 0) {
        var a = "\\pgfsetadditionalshadetransform{ ".concat(this.fromPgfTransforms(e.transforms), " }"),
          l = this.generateNameId();
        o = ["\n\\tikzset {".concat(l, "/.code = {").concat(a, "}}")], s = [l];
      }
      var c = this.generateNameId(),
        d = t.declareShading.replace("#1", c).replace("#2", i),
        p = ["shading=".concat(c)];
      return {
        type: "gradient",
        def: o.concat(d).join("\n"),
        colorParts: p.concat(s)
      };
    }
    colorToRgbA1Round(e) {
      var t = P.A.colorAsArray(e, k.A.blackArr);
      return {
        r: es(t[0] / 255),
        g: es(t[1] / 255),
        b: es(t[2] / 255),
        a: void 0 === t[3] ? 1 : t[3]
      };
    }
    getRgbaSortedStops(e, t) {
      return h().sortBy(e, e => e.pos).map(e => {
        var r = this.colorToRgbA1Round(e.color);
        return {
          r: r.r,
          g: r.g,
          b: r.b,
          a: r.a,
          pos: t(e.pos)
        };
      });
    }
    isGradientAlphaExist(e) {
      return !!P.A.isGradient(e) && h().some(e.stops, e => this.colorToRgbA1Round(e.color).a <= 1);
    }
    gradientToTikzShading(e) {
      var t = e.center || {
        x: 50,
        y: 50
      };
      if (e.type && "linear" != e.type) {
        var r = 4,
          n = e.focal || {
            x: 0,
            y: 0
          },
          i = {
            x: t.x + n.x,
            y: t.y + n.y
          },
          o = e.center || {
            x: 50,
            y: 50
          },
          s = e.scale || 1,
          a = {
            x: o.x - 50,
            y: -(o.y - 50)
          },
          l = {
            type: "shift",
            x: (2 * -(i.x - o.x) * 4 + a.x / 2 + (i.x - o.x) / 2) * s,
            y: (4 * (i.y - o.y) * 2 + a.y / 2 - (i.y - o.y) / 2) * s
          },
          c = {
            x: 2 * (i.x - o.x) * 4,
            y: 2 * -(i.y - o.y) * 4
          },
          d = {
            type: "scale",
            scale: s
          },
          h = this.getRgbaSortedStops(e.stops, e => 25 * e);
        return this.fromTikzRadialGradient({
          sortedStops: h,
          focal: c,
          lastStopPos: 400,
          transforms: [l, d]
        });
      }
      var p = e.scale || 1,
        u = 2,
        g = {
          type: "shift",
          x: (t.x - 50) * p / 2,
          y: -(t.y - 50) * p / 2
        },
        m = {
          type: "scale",
          scale: 2 * p
        },
        f = {
          type: "rotate",
          rotation: -(e.rotation || 0)
        },
        y = this.getRgbaSortedStops(e.stops, e => 37.5 + 50 * e / 2);
      return this.fromTikzLinearGradient({
        sortedStops: y,
        lastStopPos: 100,
        transforms: [g, f, m]
      });
    }
    colorOptions(e, t, r, n) {
      var i = [];
      if ("stroke" == t && "none" == e) i = ["draw opacity=0"];else {
        var o = this.colorOptionsAsTikz(e);
        if ("gradient" == o.type) return {
          def: "\n% Gradient Info\n  ".concat(o.def),
          fill: !1 === n ? o.colorParts.join(",") : "[".concat(o.colorParts.join(","), "]")
        };
        if ("pattern" == o.type) return {
          def: "\n% Pattern Info\n ".concat(o.def),
          fill: !1 === n ? o.colorParts.join(",") : "[".concat(o.colorParts.join(","), "]")
        };
        var s = o.colorParts;
        if (0 == s.length) return {
          fill: ""
        };
        var a = "",
          l = "";
        "fill" == t ? (a = "fill=".concat(s[0]), l = s.length > 1 ? "fill opacity=".concat(s[1]) : "") : "stroke" == t ? (a = "color=".concat(s[0]), l = s.length > 1 ? "draw opacity=".concat(s[1]) : "") : "text" == t && (a = "color=".concat(s[0]), l = s.length > 1 ? "opacity=".concat(s[1]) : ""), i = [a], l && i.push(l), "evenodd" == r && i.push("even odd rule");
      }
      return !1 === n ? {
        fill: "".concat(i.join(","))
      } : {
        fill: "[".concat(i.join(","), "]")
      };
    }
    getBoxShadow(e) {
      if (e) {
        var t = e => "".concat(.75 * e, "pt"),
          r = e.xOffset,
          n = void 0 === r ? 0 : r,
          i = e.yOffset,
          o = void 0 === i ? 0 : i,
          s = e.fill,
          a = e.blur,
          l = void 0 === a ? 0 : a;
        if (0 != n || 0 != o || 0 != l) {
          if (0 == l) {
            var c,
              d = "";
            if (s) {
              var h = this.colorOptionsAsTikz(s);
              c = h.colorParts[0], h.colorParts[1] && (d = ", opacity=".concat(h.colorParts[1]));
            } else c = "black";
            return {
              tikz: "[general shadow={fill=".concat(c, ",shadow xshift=").concat(t(n), ",shadow yshift=").concat(t(-o)).concat(d, "}]")
            };
          }
          var p = e => "[blur shadow={shadow xshift=".concat(t(n), ",shadow yshift=").concat(t(-o), ", shadow blur radius=").concat(t(l), ", shadow blur steps=").concat(Math.max(4, l), " ").concat(e, "}]");
          if (!s || k.A.isBlackColor(s)) return {
            tikz: p(",shadow opacity=".concat(es(100 * this.getOpacityFromColorArray(s))))
          };
          var u = this.colorOptionsAsTikz(s);
          return {
            scopeScripts: ["\\tikzset{\n    render blur shadow/.prefix code={\n      \\colorlet{black}".concat(u.colorParts[0], "\n    }\n  }\n")],
            tikz: p(u.colorParts[1] ? ",shadow opacity=".concat(es(100 * Number.parseFloat(u.colorParts[1]))) : "")
          };
        }
      }
    }
    getOpacityFromColorArray(e) {
      return e instanceof Array ? void 0 === e[3] ? 1 : e[3] : 1;
    }
    style(e) {
      if (!e) return {
        style: ""
      };
      var t = "",
        r = "",
        n = "",
        i = "",
        o = "",
        s = "",
        a = "",
        l = "",
        c = [],
        d = !1,
        h = !1,
        p = !1,
        u = "",
        g;
      if (e.strokeType && (t = this.shaft(e.strokeType, e.thickness)), e.thickness && (r = this.lineWidth(e.thickness)), e.textColor) {
        var m = this.colorOptions(e.textColor, "text");
        s = m.fill, m.def && c.push(m.def);
      }
      if (e.fillColor) {
        var f = this.colorOptions(e.fillColor, "fill", e.fillRule);
        d = d || P.A.isGradient(e.fillColor), p = p || P.A.isPattern(e.fillColor), h = h || this.isGradientAlphaExist(e.fillColor), i = f.fill, f.def && c.push(f.def);
      }
      if (e.strokeColor) {
        var y = this.colorOptions(e.strokeColor, "stroke");
        o = y.fill, y.def && c.push(y.def);
      }
      if (e.lineJoin && (a = "[line join = ".concat(e.lineJoin, "]")), e.lineCap && (l = "[line cap = ".concat(e.lineCap, "]")), e.boxShadow) {
        var v = this.getBoxShadow(e.boxShadow);
        v && (u = v.tikz, g = v.scopeScripts);
      }
      return {
        defs: c.length > 0 ? c : void 0,
        style: "".concat(o).concat(i).concat(s).concat(t).concat(n).concat(r).concat(a).concat(l).concat(u),
        gradient: d,
        pattern: p,
        fading: h,
        scopeScripts: g
      };
    }
  }
  function rs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ns(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? rs(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rs(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class is {
    constructor() {
      (0, n.A)(this, "helper", void 0), this.helper = new ts();
    }
    fromTikzPathInfo(e, t) {
      return {
        data: e.d,
        defs: e.defs,
        regionDescription: t
      };
    }
    assignRegionDescription(e, t) {
      return t.regionDescription = e, t;
    }
    fromTikzPathInfoes() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return {
        data: t.map(e => e.d).join(" "),
        defs: h().flatMap(t, e => e.defs || [])
      };
    }
    getStyleNoFill(e) {
      return ns(ns({}, e), {}, {
        fillColor: "none"
      });
    }
    getStyleNoStroke(e) {
      return ns(ns({}, e), {}, {
        strokeColor: "none"
      });
    }
  }
  var os = r(89806);
  class ss extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "ellipse" == e.type;
    }
    convert(e) {
      var t = (0, os.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Ellipse"
      };
    }
  }
  class as extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "circle" == e.type;
    }
    convert(e) {
      var t = (0, os.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Circle"
      };
    }
  }
  class ls extends is {
    check(e) {
      return a.w.isDiagramShapeId(e.id) && "polygon-curve" == e.type;
    }
    convert(e) {
      var t = y.A.toAbsoluteControlPointCubics(e.data);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Polygon Curved");
    }
  }
  class cs extends is {
    check(e) {
      return !1;
    }
    convert(e) {
      var t = y.A.toAbsoluteControlPointCubics(e.data),
        r = {
          strokeType: e.shaft,
          thickness: e.style ? e.style.thickness : "",
          arrow: {
            head: e.head,
            tail: e.tail
          },
          strokeColor: e.style ? e.style.strokeColor : ""
        };
      return this.fromTikzPathInfo(this.helper.drawPaths(t, r));
    }
  }
  class ds extends is {
    check(e) {
      return a.w.isDiagramShapeId(e.id) && "polygon" == e.type;
    }
    convert(e) {
      return this.fromTikzPathInfo(this.helper.cycleLines(e.data, e.style), "Shape: Polygon");
    }
  }
  var hs = r(35656);
  class ps extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arc" == e.type;
    }
    convert(e) {
      var t = D.A.getSettings(e, "centerConnectLine"),
        r = (0, hs.t)(e, t),
        n = (0, hs.t)(e, !0),
        i = this.getStyleNoFill(e.style),
        o = this.getStyleNoStroke(e.style);
      return this.assignRegionDescription("Shape: Arc", this.fromTikzPathInfoes(this.helper.drawPaths(n, o), this.helper.drawPaths(r, i)));
    }
  }
  var us = r(81048);
  class gs extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "rectangle" == e.type;
    }
    convert(e) {
      var t = D.A.getSettings(e, "cornerRadius"),
        r = (0, us.GU)(e, t);
      return this.fromTikzPathInfo(this.helper.drawPaths(r, e.style), "Shape: Rectangle");
    }
  }
  var ms = r(20149);
  class fs extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "parallelogram" == e.type;
    }
    convert(e) {
      var t = (0, ms.A)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Parallelogram");
    }
  }
  class ys extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "square" == e.type;
    }
    convert(e) {
      var t = D.A.getSettings(e, "cornerRadius"),
        r = (0, us.GU)(e, t);
      return this.fromTikzPathInfo(this.helper.drawPaths(r, e.style), "Shape: Square");
    }
  }
  class vs extends is {
    getStraightArrow(e) {
      var t,
        r = e.shaft,
        n = e.head,
        i = e.tail,
        o = e.middle,
        s = e.settings,
        a = e.data,
        l = e.style,
        c = void 0 === l ? {} : l,
        d = e.mVer,
        h = (0, _i.iA)(a, {
          head: n,
          shaft: r,
          tail: i,
          middle: o
        }, s, c.thickness || 1, null !== (t = e.headScale) && void 0 !== t ? t : 1, d),
        p = this.fromPathInfo(h.pathsInfo, c, r),
        u = this.fromHeadInfo(h.headInfo, c),
        g = this.fromHeadInfo(h.tailInfo, c),
        m = h.middleInfo ? h.middleInfo.map(e => this.fromHeadInfo(e, c)).join("\n") : "";
      return {
        d: [p.d, u, m, g].filter(e => e).join("\n"),
        defs: p.defs
      };
    }
    getBezierArrow(e, t) {
      var r,
        n = e.shaft,
        i = e.head,
        o = e.tail,
        s = e.middle,
        a = e.settings,
        l = e.data,
        c = e.angleBy,
        d = e.style,
        h = void 0 === d ? {} : d,
        p = e.mVer,
        u = e.mAngleBy,
        g = t ? l : y.A.toAbsoluteControlPointCubics(l),
        m = (0, _i.lq)(g, {
          head: i,
          shaft: n,
          tail: o,
          middle: s
        }, a, h.thickness || 1, null !== (r = e.headScale) && void 0 !== r ? r : 1, c, p, null != u ? u : 6),
        f = this.fromPathInfo(m.pathsInfo, h, n),
        v = this.fromHeadInfo(m.headInfo, h),
        b = this.fromHeadInfo(m.tailInfo, h),
        x = m.middleInfo ? m.middleInfo.map(e => this.fromHeadInfo(e, h)).join("\n") : "";
      return {
        d: [f.d, v, x, b].filter(e => e).join("\n"),
        defs: f.defs
      };
    }
    fromPathInfo(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0;
      t = t || {};
      var n = this.pathsInfoD(e),
        i = r ? this.helper.getStrokeTypeTikz(r, t.thickness) : void 0,
        o = this.helper.style(t);
      return {
        d: "\\draw ".concat(o.style, " ").concat(i, " ").concat(n, " ;"),
        defs: o.defs
      };
    }
    pathsInfoD(e) {
      var t = "";
      return e.points && (t += " " + this.helper.pointsTikz(e.points)), e.lines && (t += " " + this.helper.pathsTikz(e.lines)), t;
    }
    fromHeadInfo(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!e) return "";
      var r = P.A.getStyle(t, "strokeColor"),
        n = e.rotation,
        i = e.p,
        o = e.points ? this.helper.pointsTikz(e.points) : "",
        s = e.lines ? this.helper.pathsTikz(e.lines) : "",
        a = e.circle ? this.helper.circleTikz(e.circle) : "",
        l = e.arc ? this.helper.arcTikz(e.arc) : "",
        c = h().clone(t);
      c.strokeColor = !1 === e.stroke ? void 0 : r, c.fillColor = e.fill ? r : void 0, c.thickness = t.thickness || 1;
      var d = "";
      !1 === e.stroke && (d = "[draw opacity=0]", c.thickness = .1);
      var p = this.helper.style(c).style;
      return "\\draw [shift={(".concat(es(i.x), ",").concat(es(i.y), ")}, rotate = ").concat(es(bs(n)), "] ").concat(p, " ").concat(d, " ").concat(o, " ").concat(s, " ").concat(a, " ").concat(l, " ;");
    }
  }
  function bs(e) {
    return e > 360 ? e - 360 : e;
  }
  class xs extends vs {
    check(e) {
      return a.w.isDiagramArrowId(e.id);
    }
    convert(e) {
      if (!e.type) {
        var t = this.getStraightArrow(e);
        return {
          data: t.d,
          defs: t.defs,
          regionDescription: "Straight Lines"
        };
      }
      var r = this.getBezierArrow(e, !1);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Curve Lines"
      };
    }
  }
  var Cs = r(67194);
  class Ss extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "regular-polygon" == e.type;
    }
    convert(e) {
      var t = (0, Cs.A)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Regular Polygon");
    }
  }
  class As extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "regular-polygon-almost" == e.type;
    }
    convert(e) {
      var t = (0, Cs.A)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Polygon");
    }
  }
  var ws = r(89184);
  class Es extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "parabola" == e.type;
    }
    convert(e) {
      var t = (0, ws.b)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Parabola");
    }
  }
  var ks = r(30608);
  class Os extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "polynomial" == e.type;
    }
    convert(e) {
      var t = (0, ks.b)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Polynomial");
    }
  }
  var Ds = r(86029);
  class Ps extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "wave" == e.type;
    }
    convert(e) {
      var t = (0, Ds.b)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Wave");
    }
  }
  var Ms = r(82654);
  class Is extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "grid" == e.type;
    }
    convert(e) {
      var t = (0, Ms.z)(e),
        r = this.getStyleNoFill(e.style),
        n = this.getStyleNoStroke(e.style);
      return this.assignRegionDescription("Shape: Grid", this.fromTikzPathInfoes(this.helper.drawPoints(t.rect, n), this.helper.drawPaths(t.vLines, r), this.helper.drawPaths(t.hLines, r), this.helper.drawPoints(t.borders, r)));
    }
  }
  var Ts = r(40813);
  class Ls extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "spring" == e.type;
    }
    convert(e) {
      var t = (0, Ts.b)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Spring");
    }
  }
  var Rs = r(30073);
  class Bs extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "brace" == e.type;
    }
    convert(e) {
      var t = (0, Rs.J)(e);
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Brace");
    }
  }
  var Fs = r(62624);
  function js(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? js(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : js(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ns extends vs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "line-box" == e.type;
    }
    convert(e) {
      var t = (0, Fs.A)(e),
        r = e.data.innerShape;
      if (gr.A.isCubicLineArrow(r)) {
        var n = _s(_s({}, r), {}, {
            data: t.data,
            style: e.style
          }),
          i = this.getBezierArrow(n, !0);
        return this.fromTikzPathInfo(i, "Shape: Boxed Bezier Curve");
      }
      if (gr.A.isStraightLineArrow(r)) {
        var o = _s(_s({}, r), {}, {
            data: t.data,
            style: e.style
          }),
          s = this.getStraightArrow(o);
        return this.fromTikzPathInfo(s, "Shape: Boxed Line");
      }
      return gr.A.isPolygon(r) ? this.fromTikzPathInfo(this.helper.cycleLines(t.data, e.style), "Shape: Boxed Polygon") : gr.A.isPolygonCurve(r) ? this.fromTikzPathInfo(this.helper.drawPaths(t.data, e.style), "Shape: Regular Polygon") : {
        data: "",
        regionDescription: "Unknown shape"
      };
    }
  }
  class zs extends vs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "path-data-shape" == e.type;
    }
    convert(e) {
      var t = ti.A.getAbsolutePaperPath(e);
      return this.fromTikzPathInfo(this.helper.drawPaperPath(t, e.style), "Shape: Path Data");
    }
  }
  var Hs = r(44350);
  class Ws extends vs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "star" == e.type;
    }
    convert(e) {
      var t = (0, Hs.A)(e);
      return this.fromTikzPathInfo(this.helper.drawPoints(t, e.style), "Shape: Star");
    }
  }
  var Vs = r(54092);
  class Us extends vs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "generic-shape" == e.type;
    }
    convert(e) {
      var t = (0, Vs.UL)(e),
        r = "Shape: ".concat(J.mapName(e.subType));
      return this.fromTikzPathInfo(this.helper.drawPaperPath(t, e.style), r);
    }
  }
  var qs = r(44806);
  class Gs extends is {
    convert(e) {
      var t = this.getPathTikz(e),
        r = this.helper.drawWithD(t, e.style);
      return {
        data: r.d,
        defs: r.defs
      };
    }
  }
  class Ks extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-1" == e.type;
    }
    getPathTikz(e) {
      var t = (0, qs.i)(e);
      return this.helper.pathsTikz(t);
    }
  }
  var Zs = r(62805);
  class Ys extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-2" == e.type;
    }
    getPathTikz(e) {
      var t = (0, Zs.i)(e);
      return this.helper.pathsTikz(t);
    }
  }
  var Qs = r(94059);
  class Js extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-3" == e.type;
    }
    getPathTikz(e) {
      var t = (0, Qs.i)(e);
      return this.helper.pathsTikz(t);
    }
  }
  var Xs = r(47423);
  class $s extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-4" == e.type;
    }
    getPathTikz(e) {
      var t = (0, Xs.b)(e);
      return this.helper.pathsTikz(t);
    }
  }
  var ea = r(28761);
  class ta extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-6" == e.type;
    }
    convert(e) {
      var t = (0, ea.O)(e);
      return this.fromTikzPathInfoes(this.helper.drawPaths(t.circle, e.style), this.helper.drawPaths(t.line1, this.getStyleNoFill(e.style)), this.helper.drawPaths(t.line2, this.getStyleNoFill(e.style)));
    }
    getPathTikz() {
      return "";
    }
  }
  var ra = r(37084);
  class na extends Gs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "arrow-head-7" == e.type;
    }
    getPathTikz(e) {
      var t;
      return this.helper.pathsTikz((0, ra.O)(e));
    }
  }
  class ia extends is {
    check(e) {
      return a.w.isDiagramEditorId(e.id) && "square" == e.type;
    }
    convert(e) {
      var t = e.elements,
        r = e.connections,
        n = [],
        i = "";
      return h().forOwn(t, (e, t) => {
        i += "\\node [draw] [".concat(e.shape.frameType, "] (").concat(t, ") at (").concat(e.shape.data.p.x, ",").concat(e.shape.data.p.y, ") {f(x)};\n");
      }), h().forEach(r, e => {
        var t = {
            strokeType: e.shaft,
            thickness: e.style ? e.style.thickness : "",
            arrow: {
              head: e.head,
              tail: e.tail
            },
            strokeColor: e.style ? e.style.strokeColor : ""
          },
          r = this.helper.style(t);
        i += "\\draw ".concat(r.style, "(").concat(e.fromEditorId, ") -- (").concat(e.toEditorId, ");\n"), r.defs && (n = n.concat(r.defs));
      }), {
        data: i,
        defs: n,
        error: ""
      };
    }
  }
  var oa = r(42223);
  class sa extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "axis2d" == e.type;
    }
    convert(e) {
      var t = (0, oa.Y)(e),
        r = this.helper.pathsTikz([t.xAxis, t.yAxis]),
        n = this.helper.pointsTikz(t.xArrow),
        i = this.helper.pointsTikz(t.yArrow),
        o = t.lines ? this.helper.pathsTikz(t.lines) : "",
        s = t.textPoints ? t.textPoints.reduce((e, t) => e + " (".concat(y.A.round2(t.p.x + 4), ",").concat(y.A.round2(t.p.y - 3), ") node[anchor=east, scale=0.75]{").concat(t.text, "}"), "") : "",
        a = e.style || {},
        l = this.helper.style({
          strokeColor: a.strokeColor,
          thickness: a.thickness,
          strokeType: a.strokeType
        }),
        c = this.helper.style({
          textColor: a.textColor
        }),
        d = ["\\draw ".concat(l.style, " ").concat(r, " ").concat(n, " ").concat(i, " ").concat(o, " ;")];
      return t.textPoints && d.push("\\draw ".concat(c.style, " ").concat(s, " ;")), {
        data: d.join("\n"),
        defs: (l.defs || []).concat(c.defs || []),
        regionDescription: "Shape: Axis 2D"
      };
    }
  }
  var aa = r(27077),
    la = r(18808),
    ca = new ts();
  class da {
    convertFrame(e) {
      if (!e.shape.frameType) return {
        d: ""
      };
      var t = e.___shapeInfo,
        r = e.shape.style || {},
        n = {
          fillColor: r.fillColor,
          strokeColor: r.strokeColor,
          strokeType: r.strokeType,
          thickness: r.thickness,
          boxShadow: r.boxShadow
        };
      switch (e.shape.frameType) {
        case "circle":
          var i = ca.circleTikz(t.shape),
            o = "";
          return t.outsideShape && (o = ca.circleTikz(t.outsideShape)), ca.drawWithD("".concat(i, " ").concat(o), n);
        case "rectangle":
          var s = D.A.getTextSetting(e, "cornerRadius"),
            a = ha(t.shape),
            l = (0, us.GU)({
              data: a,
              type: "rectangle",
              id: "123"
            }, s),
            c = ca.pathsTikz(l),
            d = "";
          if (t.outsideShape) {
            var h = ha(t.outsideShape),
              p = (0, us.GU)({
                data: h,
                type: "rectangle",
                id: "123"
              }, s);
            d = ca.pathsTikz(p);
          }
          return ca.drawWithD(" ".concat(c, " ").concat(d), n);
        case "ellipse":
          var u = ca.ellipseTikz(t.shape),
            g = "";
          return t.outsideShape && (g = ca.ellipseTikz(t.outsideShape)), ca.drawWithD("".concat(u, " ").concat(g), n);
      }
    }
    findMatchedMap(e, t) {
      for (var r = E.YG(t, "compositeblock.math-diagram"), n = 0; n < r.length; n++) {
        var i = r[n].reactInstance;
        if (i.getModel().elements == e) return i.refMap;
      }
    }
    resolveAnchorInfo(e, t, r) {
      var n = e.shape.data,
        i = {
          x: 0,
          y: 0
        };
      if (!e.shape.anchor || "center" == e.shape.anchor) {
        null != r && r.nodeDelta && (i = y.A.addPoint(i, r.nodeDelta));
        var o = y.A.addPoint(n.p, i);
        return {
          positionText: "(".concat(es(o.x), ",").concat(es(o.y), ")"),
          anchorText: ""
        };
      }
      if (t) {
        var s = e.shape.anchor,
          a = t.editor.parentElement,
          l = he.A.getComputedStyleAsNumber(a, "line-height"),
          c = he.A.getComputedStyleAsNumber(a, "font-size"),
          d = Math.max((l - c) / 2, 1),
          h = he.A.getComputedStyleAsNumber(a, "width"),
          p = he.A.getComputedStyleAsNumber(a, "height"),
          u = R.x.calculateCenterPointWithWh(n.p, s, h, p, n),
          g = R.x.getSamplePosition(s, h - 4, p - 2 * d, n, u),
          m = R.x.getSamplePosition(s, h, p, n, u);
        i = y.A.substractPoint(g, m);
      }
      null != r && r.nodeDelta && (i = y.A.addPoint(i, r.nodeDelta));
      var f = n.flipX ? "east" : "west",
        v = n.flipX ? "west" : "east";
      switch (e.shape.anchor) {
        case "left-top":
          var b = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(b.x), ",").concat(es(b.y), ")"),
            anchorText: "[anchor=north ".concat(f, "][inner sep=0.75pt] ")
          };
        case "top":
          var x = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(x.x), ",").concat(es(x.y), ")"),
            anchorText: "[anchor=north] [inner sep=0.75pt] "
          };
        case "top-right":
          var C = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(C.x), ",").concat(es(C.y), ")"),
            anchorText: "[anchor=north ".concat(v, "] [inner sep=0.75pt] ")
          };
        case "left":
          var S = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(S.x), ",").concat(es(S.y), ")"),
            anchorText: "[anchor=".concat(f, "] [inner sep=0.75pt] ")
          };
        case "right":
          var A = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(A.x), ",").concat(es(A.y), ")"),
            anchorText: "[anchor=".concat(v, "] [inner sep=0.75pt] ")
          };
        case "bottom-left":
          var w = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(w.x), ",").concat(es(w.y), ")"),
            anchorText: "[anchor=south ".concat(f, "] [inner sep=0.75pt] ")
          };
        case "bottom":
          var E = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(E.x), ",").concat(es(E.y), ")"),
            anchorText: "[anchor=south] [inner sep=0.75pt] "
          };
        case "right-bottom":
          var k = y.A.addPoint(n.p, i);
          return {
            positionText: "(".concat(es(k.x), ",").concat(es(k.y), ")"),
            anchorText: "[anchor=south ".concat(v, "] [inner sep=0.75pt] ")
          };
      }
    }
    convert(e, t, r, n, i) {
      n = n || {
        nodeDelta: {
          x: 0,
          y: 0
        },
        nodeScale: 1
      }, console.log(n);
      var o = [],
        s = [],
        a = this.findMatchedMap(e, t) || {};
      return a && console.log("found instance", a), S.A.getDiagramEditors(e).filter(e => !i || i(e)).forEach(e => {
        var i, l;
        o.push("% Text Node");
        var c = E.vc(E.YG(t, "[data-editor-id=".concat(e.id, "]")), "width") || 100,
          d = aa.H.toLatex(e.lines, {
            inMathExpression: !e.isTextMode,
            newLineUsingBackSlash: !0,
            tikzNode: {
              width: c
            },
            mathTypeHtml: t,
            pageSettings: r
          }),
          h = [];
        if (e.shape.settings) {
          var p = e.shape.settings;
          if (p.fontSize) {
            var u = e.isTextMode ? r.fontSize : r.mathFontSize,
              g = la.l.getFontSizeLatex(p.fontSize, u, !1);
            g && h.push("font=".concat(g));
          }
        }
        if (e.shape.style) {
          var m = e.shape.style;
          m.textColor && h.push(ca.colorOptions(m.textColor, "text", null, !1).fill);
        }
        var f = e.shape.data;
        f.rotation && h.push("rotate=".concat(es(-f.rotation))), f.skewX && h.push("xslant=".concat(es(Math.tan(y.A.toRadians(-f.skewX))))), this.resolveScale(f.flipX, null !== (i = null === (l = n) || void 0 === l ? void 0 : l.nodeScale) && void 0 !== i ? i : 1, h);
        var v = h.length > 0 ? "[".concat(h.join(","), "]") : "",
          b = e.isTextMode ? this.wrapAroundMiniPageIfAnyFlushOrBounding(d, c, e) : "$".concat(d, "$"),
          x = e.isTextMode ? "[align=left]" : "",
          C = this.convertFrame(e);
        C.d && o.push(C.d), C.defs && (s = s.concat(C.defs));
        var S = this.resolveAnchorInfo(e, a[e.id], n);
        o.push("\\draw ".concat(S.positionText, " node ").concat(S.anchorText, " ").concat(v, " ").concat(x, " {").concat(b, "};"));
      }), {
        d: o.join("\n"),
        defs: s
      };
    }
    resolveScale(e, t, r) {
      if (1 != t) {
        var n = e ? -t : t;
        r.push("xscale=".concat(n)), r.push("yscale=".concat(t));
      } else e && r.push("xscale=-1");
    }
    wrapAroundMiniPageIfAnyFlushOrBounding(e, t, r) {
      return r.shape.data.size && (t = Math.max(t, r.shape.data.size.width)), e.includes("\\begin{flushright}") || e.includes("\\begin{center}") || r.shape.data.size ? "\\begin{minipage}[lt]{".concat(es(.68 * t), "pt}\\setlength\\topsep{0pt}\n").concat(e, "\n\\end{minipage}") : e;
    }
  }
  function ha(e) {
    var t = e.rect;
    return {
      p1: {
        x: t.left,
        y: t.top
      },
      p2: {
        x: t.left + t.width,
        y: t.top + t.height
      }
    };
  }
  const pa = new da();
  class ua extends vs {
    check(e) {
      return a.w.isDiagramArrowId(e.id) && null == e.type;
    }
    convert(e) {
      var t = [];
      return e.forEach(e => {
        var r = e.___path;
        if (r) if (t.push("% Connection"), "cubic" == e.type) {
          var n = h().assign({}, e, {
            data: [r]
          });
          t.push(this.getBezierArrow(n, !0).d);
        } else if ("quadratic" == e.type) {
          var i = y.A.quadraticToCubic(r),
            o = h().assign({}, e, {
              data: [i]
            });
          t.push(this.getBezierArrow(o, !0).d);
        } else {
          var s = h().assign({}, e, {
            data: [r.p1, r.p2]
          });
          t.push(this.getStraightArrow(s).d);
        }
      }), {
        data: t.join("\n"),
        error: ""
      };
    }
  }
  const ga = new ua();
  class ma extends is {
    check(e) {
      return !1;
    }
    convert(e) {
      if (!e) return {
        data: ""
      };
      var t = e.___points,
        r = Eo.getIntersectsByPoints(t, Mo(e)),
        n = [],
        i;
      return {
        data: r.intersections.map(t => {
          var r = t.circle ? this.helper.circleTikz(t.circle) : "",
            i = t.lines ? this.helper.pathsTikz(t.lines) : "",
            o = this.helper.style(e.style);
          return o.defs && (n = n.concat(o.defs)), "\\draw ".concat(o.style, " ").concat(r, " ").concat(i, " ;");
        }).join("\n"),
        defs: n
      };
    }
  }
  var fa = r(69568);
  class ya extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, fa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Right Arrow"
      };
    }
  }
  var va = r(63495);
  class ba extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "left-arrow" == e.type;
    }
    convert(e) {
      var t = (0, va.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Left Arrow"
      };
    }
  }
  var xa = r(38327);
  class Ca extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "up-arrow" == e.type;
    }
    convert(e) {
      var t = (0, xa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Up Arrow"
      };
    }
  }
  var Sa = r(70704);
  class Aa extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "down-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Sa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Down Arrow"
      };
    }
  }
  var wa = r(77698);
  class Ea extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "left-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, wa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Left Right Arrow"
      };
    }
  }
  var ka = r(20066);
  class Oa extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "up-down-arrow" == e.type;
    }
    convert(e) {
      var t = (0, ka.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Up Down Arrow"
      };
    }
  }
  var Da = r(4201);
  class Pa extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "quad-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Da.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Quad Arrow"
      };
    }
  }
  var Ma = r(48852);
  class Ia extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "left-top-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Ma.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Left Top Right Arrow"
      };
    }
  }
  var Ta = r(43533);
  class La extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "left-up-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Ta.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Left Up Arrow"
      };
    }
  }
  var Ra = r(32629);
  class Ba extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "bend-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Ra.U)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Bend Arrow"
      };
    }
  }
  var Fa = r(37239);
  class ja extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "bend-up-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Fa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Bend Up Arrow"
      };
    }
  }
  var _a = r(80955);
  class Na extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "u-turn-arrow" == e.type;
    }
    convert(e) {
      var t = (0, _a.U)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "U Turn Arrow"
      };
    }
  }
  var za = r(16317);
  class Ha extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "curve-left-arrow" == e.type;
    }
    convert(e) {
      var t = (0, za.U)(e),
        r = t.slice(0, 3),
        n = t.slice(3),
        i = this.helper.drawPaths(r, e.style),
        o = this.helper.drawPaths(n, e.style);
      return {
        data: i.d.concat(o.d),
        defs: (o.defs || []).concat(o.defs || []),
        regionDescription: "Curve Left Arrow"
      };
    }
  }
  var Wa = r(77198);
  class Va extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "curve-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Wa.U)(e),
        r = t.slice(0, 3),
        n = t.slice(3),
        i = this.helper.drawPaths(r, e.style),
        o = this.helper.drawPaths(n, e.style);
      return {
        data: i.d.concat(o.d),
        defs: (o.defs || []).concat(o.defs || []),
        regionDescription: "Curve Right Arrow"
      };
    }
  }
  var Ua = r(77658);
  class qa extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "striped-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Ua.U)(e),
        r = this.helper.drawPoints(t.points1, e.style),
        n = this.helper.drawPoints(t.points2, e.style),
        i = this.helper.drawPoints(t.points3, e.style);
      return {
        data: r.d + n.d + i.d,
        defs: (r.defs || []).concat(n.defs || []).concat(i.defs || []),
        regionDescription: "Striped Right Arrow"
      };
    }
  }
  var Ga = r(49602);
  class Ka extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "notched-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Ga.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Notched Right Arrow"
      };
    }
  }
  var Za = r(74820);
  class Ya extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "pentagon-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Za.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Pentagon Arrow"
      };
    }
  }
  var Qa = r(62103);
  class Ja extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "chevron-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Qa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Chevron Arrow"
      };
    }
  }
  var Xa = r(99871);
  class $a extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "callout-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, Xa.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Callout Right Arrow"
      };
    }
  }
  var el = r(43547);
  class tl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "callout-left-right-arrow" == e.type;
    }
    convert(e) {
      var t = (0, el.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Callout Left Right Arrow"
      };
    }
  }
  var rl = r(49476);
  class nl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "callout-quad-arrow" == e.type;
    }
    convert(e) {
      var t = (0, rl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Callout Quad Arrow"
      };
    }
  }
  var il = r(98667);
  class ol extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-rounded-rect" == e.type;
    }
    convert(e) {
      var t = (0, il.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Rounded Rect"
      };
    }
  }
  var sl = r(88904);
  class al extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-rounded-single-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, sl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Rounded Single Corner Rect"
      };
    }
  }
  var ll = r(27510);
  class cl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-rounded-same-side-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, ll.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Rounded Same Side Corner Rect"
      };
    }
  }
  var dl = r(31101);
  class hl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-rounded-diagonal-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, dl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Rounded Diagonal Corner Rect"
      };
    }
  }
  var pl = r(16277);
  class ul extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-snip-single-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, pl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Snip Single Corner Rect"
      };
    }
  }
  var gl = r(829);
  class ml extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-snip-same-side-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, gl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Snip Same Side Corner Rect"
      };
    }
  }
  var fl = r(88092);
  class yl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-snip-diagonal-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, fl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Snip Diagonal Corner Rect"
      };
    }
  }
  var vl = r(23004);
  class bl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-snip-round-single-corner-rect" == e.type;
    }
    convert(e) {
      var t = (0, vl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Snip Round Single Corner Rect"
      };
    }
  }
  var xl = r(57437);
  class Cl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-right-triangle" == e.type;
    }
    convert(e) {
      var t = (0, xl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Right Triangle"
      };
    }
  }
  var Sl = r(90720);
  class Al extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-trapezoid" == e.type;
    }
    convert(e) {
      var t = (0, Sl.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Trapezoid"
      };
    }
  }
  var wl = r(78421);
  class El extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "spiral" == e.type;
    }
    convert(e) {
      var t = (0, wl.U)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Spiral"
      };
    }
  }
  var kl = r(78478);
  class Ol extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-plaque" == e.type;
    }
    convert(e) {
      var t = (0, kl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Plaque"
      };
    }
  }
  var Dl = r(99346);
  class Pl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-can" == e.type;
    }
    convert(e) {
      var t = (0, Dl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Can"
      };
    }
  }
  var Ml = r(11237);
  class Il extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-cube" == e.type;
    }
    convert(e) {
      var t = (0, Ml.UL)(e),
        r = e.style,
        n = this.getStyleNoFill(e.style);
      return this.assignRegionDescription("Shape: Cube", this.fromTikzPathInfoes(this.helper.drawPoints(t.outerBox, r), this.helper.drawPoints(t.line1, n), this.helper.drawPoints(t.line2, n)));
    }
  }
  var Tl = r(41964);
  class Ll extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-bevel" == e.type;
    }
    convert(e) {
      var t = (0, Tl.UL)(e),
        r = e.style,
        n = this.getStyleNoFill(e.style);
      return this.assignRegionDescription("Shape: Bevel", this.fromTikzPathInfoes(this.helper.drawPoints(t.outerBox, r), this.helper.drawPoints(t.innerBox, n), this.helper.drawPoints(t.leftTopLink, n), this.helper.drawPoints(t.rightTopLink, n), this.helper.drawPoints(t.rightBottomLink, n), this.helper.drawPoints(t.leftBottomLink, n)));
    }
  }
  var Rl = r(27232);
  function Bl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Fl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Bl(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bl(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class jl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-donut" == e.type;
    }
    convert(e) {
      var t = (0, Rl.UL)(e),
        r = this.helper.drawPaths(t, Fl(Fl({}, e.style), {}, {
          fillRule: "evenodd"
        }));
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Donut"
      };
    }
  }
  var _l = r(51092);
  class Nl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-block-arc" == e.type;
    }
    convert(e) {
      var t = (0, _l.Q1)((0, _l.UL)(e));
      return this.fromTikzPathInfo(this.helper.drawPaths(t, e.style), "Shape: Block Arc");
    }
  }
  var zl = r(97656);
  class Hl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-folded-corner" == e.type;
    }
    convert(e) {
      var t = (0, zl.UL)(e);
      return this.assignRegionDescription("Shape: Folded Corner", this.fromTikzPathInfoes(this.helper.drawPaths(t.outerBox, e.style), this.helper.drawPaths(t.corner, this.getStyleNoFill(e.style))));
    }
  }
  var Wl = r(1425);
  class Vl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-moon" == e.type;
    }
    convert(e) {
      var t = (0, Wl.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Moon"
      };
    }
  }
  var Ul = r(36084);
  class ql extends vs {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-arc" == e.type;
    }
    convert(e) {
      var t = (0, Ul.UL)(e),
        r = (0, Ul.p2)(e),
        n = e.style || {},
        i = this.helper.drawPaths(t, this.getStyleNoFill(n)),
        o,
        s;
      if (e.data.head || e.data.tail) {
        var a = (null == n ? void 0 : n.thickness) || 1,
          l = e.data.headScale || 1,
          c = e.data,
          d = c.head,
          h = c.tail,
          p = c.angleBy,
          u = null != p ? p : 6,
          g = (0, _i.lq)(t, {
            head: d,
            tail: h,
            shaft: "-"
          }, {}, a, l, u, 0, 6);
        o = this.fromHeadInfo(g.headInfo, n), s = this.fromHeadInfo(g.tailInfo, n), i = this.fromPathInfo(g.pathsInfo, n, n.strokeType || "-");
      }
      var m = this.helper.drawPaths(r, this.getStyleNoStroke(n));
      return this.assignRegionDescription("Shape: Arc", {
        data: [m.d, i.d, o, s].map(e => e).join(" "),
        defs: m.defs
      });
    }
  }
  var Gl = r(19814);
  class Kl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-chord" == e.type;
    }
    convert(e) {
      var t = (0, Gl.UL)(e);
      return this.assignRegionDescription("Shape: Chord", this.fromTikzPathInfoes(this.helper.drawPaths(t, e.style)));
    }
  }
  var Zl = r(34106);
  class Yl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-pie" == e.type;
    }
    convert(e) {
      var t = (0, Zl.UL)(e);
      return this.assignRegionDescription("Shape: Pie", this.fromTikzPathInfoes(this.helper.drawPaths(t, e.style)));
    }
  }
  var Ql = r(31850);
  class Jl extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-tear-drop" == e.type;
    }
    convert(e) {
      var t = (0, Ql.UL)(e);
      return this.assignRegionDescription("Shape: Tear Drop", this.fromTikzPathInfoes(this.helper.drawPaths(t, e.style)));
    }
  }
  var Xl = r(16659);
  class $l extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-cloud" == e.type;
    }
    convert(e) {
      var t = (0, Xl.UL)(e);
      return this.assignRegionDescription("Shape: Cloud", this.fromTikzPathInfoes(this.helper.drawPaths(t.fill, e.style), this.helper.drawPaths(t.strokes, this.getStyleNoFill(e.style))));
    }
  }
  var ec = r(50025);
  class tc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-smiley-face" == e.type;
    }
    convert(e) {
      var t = (0, ec.UL)(e),
        r = e.style,
        n = this.getStyleNoFill(e.style);
      return this.assignRegionDescription("Shape: Smiley Face", this.fromTikzPathInfoes(this.helper.drawPaths(t.outerCircle, r), this.helper.drawPaths(t.eye1, r), this.helper.drawPaths(t.eye2, r), this.helper.drawPaths(t.smile, n)));
    }
  }
  var rc = r(56698);
  class nc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-triangle" == e.type;
    }
    convert(e) {
      var t = (0, rc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Triangle"
      };
    }
  }
  var ic = r(320);
  class oc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-diamond" == e.type;
    }
    convert(e) {
      var t = (0, ic.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Diamond"
      };
    }
  }
  var sc = r(84035);
  class ac extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-frame" == e.type;
    }
    convert(e) {
      var t = (0, sc.U)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Frame"
      };
    }
  }
  var lc = r(90361);
  class cc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-half-frame" == e.type;
    }
    convert(e) {
      var t = (0, lc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Half Frame"
      };
    }
  }
  var dc = r(81724);
  class hc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-l-shape" == e.type;
    }
    convert(e) {
      var t = (0, dc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: L Shape"
      };
    }
  }
  var pc = r(35113);
  class uc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-diagonal-stripe" == e.type;
    }
    convert(e) {
      var t = (0, pc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Diagonal Stripe"
      };
    }
  }
  var gc = r(4480);
  class mc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-cross" == e.type;
    }
    convert(e) {
      var t = (0, gc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Cross"
      };
    }
  }
  var fc = r(55484);
  class yc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "doc-right-angle" == e.type;
    }
    convert(e) {
      var t = (0, fc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Shape: Right Angle"
      };
    }
  }
  var vc = r(71539);
  class bc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-alternative-process" == e.type;
    }
    convert(e) {
      var t = (0, vc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Alternative Process"
      };
    }
  }
  var xc = r(81138);
  class Cc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-predefined-process" == e.type;
    }
    convert(e) {
      var t = (0, xc.UL)(e),
        r = e.style,
        n = this.getStyleNoFill(e.style);
      return this.assignRegionDescription("Flowchart: Prodefined Process", this.fromTikzPathInfoes(this.helper.drawPoints(t.outerBox, r), this.helper.drawPoints(t.line1, n), this.helper.drawPoints(t.line2, n)));
    }
  }
  var Sc = r(15979);
  class Ac extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-internal-storage" == e.type;
    }
    convert(e) {
      var t = (0, Sc.UL)(e),
        r = e.style,
        n = this.getStyleNoFill(e.style);
      return this.assignRegionDescription("Flowchart: Internal Storage", this.fromTikzPathInfoes(this.helper.drawPoints(t.outerBox, r), this.helper.drawPoints(t.line1, n), this.helper.drawPoints(t.line2, n)));
    }
  }
  var wc = r(37819);
  class Ec extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-document" == e.type;
    }
    convert(e) {
      var t = (0, wc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Document"
      };
    }
  }
  var kc = r(22022);
  class Oc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-multidocument" == e.type;
    }
    convert(e) {
      var t = (0, kc.UL)(e);
      return this.assignRegionDescription("Flowchart: Multidocument", this.fromTikzPathInfoes(this.helper.drawPaths(t.part1, e.style), this.helper.drawPaths(t.part2, e.style), this.helper.drawPaths(t.part3, e.style)));
    }
  }
  var Dc = r(87671);
  class Pc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-terminator" == e.type;
    }
    convert(e) {
      var t = (0, Dc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Terminator"
      };
    }
  }
  var Mc = r(13608);
  class Ic extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-punched-tape" == e.type;
    }
    convert(e) {
      var t = (0, Mc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Punched Tape"
      };
    }
  }
  var Tc = r(86391);
  class Lc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-summing-junction" == e.type;
    }
    convert(e) {
      var t = (0, Tc.UL)(e);
      return this.assignRegionDescription("Flowchart: Summing Junction", this.fromTikzPathInfoes(this.helper.drawPaths(t.circle, e.style), this.helper.drawPaths(t.line1, this.getStyleNoFill(e.style)), this.helper.drawPaths(t.line2, this.getStyleNoFill(e.style))));
    }
  }
  var Rc = r(42328);
  class Bc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-or" == e.type;
    }
    convert(e) {
      var t = (0, Rc.UL)(e);
      return this.assignRegionDescription("Flowchart: Or", this.fromTikzPathInfoes(this.helper.drawPaths(t.circle, e.style), this.helper.drawPaths(t.line1, this.getStyleNoFill(e.style)), this.helper.drawPaths(t.line2, this.getStyleNoFill(e.style))));
    }
  }
  var Fc = r(42804);
  class jc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-stored-data" == e.type;
    }
    convert(e) {
      var t = (0, Fc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Stored Data"
      };
    }
  }
  var _c = r(50207);
  class Nc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-delay" == e.type;
    }
    convert(e) {
      var t = (0, _c.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Delay"
      };
    }
  }
  var zc = r(99562);
  class Hc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-sequential-access-storage" == e.type;
    }
    convert(e) {
      var t = (0, zc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Sequential Access Storage"
      };
    }
  }
  var Wc = r(11238);
  class Vc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-magnetic-disk" == e.type;
    }
    convert(e) {
      var t = (0, Wc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Magnetic Disk"
      };
    }
  }
  var Uc = r(26160);
  class qc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-direct-access-storage" == e.type;
    }
    convert(e) {
      var t = (0, Uc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Direct Access Storage"
      };
    }
  }
  var Gc = r(6256);
  class Kc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-display" == e.type;
    }
    convert(e) {
      var t = (0, Gc.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Display"
      };
    }
  }
  var Zc = r(23541);
  class Yc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-preparation" == e.type;
    }
    convert(e) {
      var t = (0, Zc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Preparation"
      };
    }
  }
  var Qc = r(71433);
  class Jc extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-manual-input" == e.type;
    }
    convert(e) {
      var t = (0, Qc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Manual Input"
      };
    }
  }
  var Xc = r(41574);
  class $c extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-manual-operation" == e.type;
    }
    convert(e) {
      var t = (0, Xc.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Manual Operation"
      };
    }
  }
  var ed = r(11798);
  class td extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-merge" == e.type;
    }
    convert(e) {
      var t = (0, ed.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Merge"
      };
    }
  }
  var rd = r(65291);
  class nd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-off-page-connector" == e.type;
    }
    convert(e) {
      var t = (0, rd.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Off Page Connector"
      };
    }
  }
  var id = r(62456);
  class od extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-data" == e.type;
    }
    convert(e) {
      var t = (0, id.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Data"
      };
    }
  }
  var sd = r(59410);
  class ad extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-decision" == e.type;
    }
    convert(e) {
      var t = (0, sd.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Decision"
      };
    }
  }
  var ld = r(95785);
  class cd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-extract" == e.type;
    }
    convert(e) {
      var t = (0, ld.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Extract"
      };
    }
  }
  var dd = r(2632);
  class hd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-collate" == e.type;
    }
    convert(e) {
      var t = (0, dd.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Collate"
      };
    }
  }
  var pd = r(62716);
  class ud extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-sort" == e.type;
    }
    convert(e) {
      var t = (0, pd.U)(e);
      return this.assignRegionDescription("Flowchart: Sort", this.fromTikzPathInfoes(this.helper.drawPoints(t.outside, e.style), this.helper.drawPoints(t.line, this.getStyleNoFill(e.style))));
    }
  }
  var gd = r(28110);
  class md extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-card" == e.type;
    }
    convert(e) {
      var t = (0, gd.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Card"
      };
    }
  }
  var fd = r(14693);
  class yd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-process" == e.type;
    }
    convert(e) {
      var t = (0, fd.U)(e),
        r = this.helper.drawPoints(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Process"
      };
    }
  }
  var vd = r(90751);
  class bd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "flow-connector" == e.type;
    }
    convert(e) {
      var t = (0, vd.UL)(e),
        r = this.helper.drawPaths(t, e.style);
      return {
        data: r.d,
        defs: r.defs,
        regionDescription: "Flowchart: Connector"
      };
    }
  }
  class xd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "plot" == e.type;
    }
    convert(e) {
      return {
        data: "% Plotting does not support converting to Tikz"
      };
    }
  }
  var Cd = r(27812);
  class Sd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "image" == e.type;
    }
    convert(e) {
      var t = Cd.A.getComponentUrlToRawUrl(e.data.url || ""),
        r = t.lastIndexOf("/") + 1,
        n = t.substr(r);
      32 === n.indexOf("-") && (n = n.substr(33)), 10 === n.indexOf("-") && (n = n.substr(11));
      var i = y.A.rectWidthHeight(e.data),
        o = i.width,
        s = i.height,
        a = "\\includegraphics[width=".concat(es(.75 * o), "pt,height=").concat(es(.75 * s), "pt]{").concat(n, "}"),
        l = [],
        c = e.data,
        d = y.A.getCenterPoint(e.data);
      c.rotation && l.push("rotate=".concat(es(-c.rotation))), c.skewX && l.push("xslant=".concat(es(Math.tan(y.A.toRadians(-c.skewX))))), c.flipX && l.push("xscale=-1");
      var h = l.length > 0 ? "[".concat(l.join(","), "]") : "",
        p;
      return {
        data: "\\draw (".concat(es(d.x), ",").concat(es(d.y), ") node ").concat(h, " {").concat(a, "};"),
        regionDescription: "Image"
      };
    }
  }
  var Ad = r(25125);
  function wd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ed(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class kd extends is {
    check(e) {
      return a.w.isDiagramCompositeShapeId(e.id) && "free-drawing" == e.type;
    }
    convert(e) {
      var t = (0, Ad.U)(e),
        r = Ed(Ed({}, e.style), {}, {
          lineCap: "round",
          lineJoin: "round"
        }),
        n = this.helper.drawPaths(t, r);
      return {
        data: n.d,
        defs: n.defs,
        regionDescription: "Shape: Free Drawing"
      };
    }
  }
  function Od(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Dd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Od(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pd {
    constructor() {
      (0, n.A)(this, "converters", void 0), (0, n.A)(this, "intersectionConverter", new ma()), setTimeout(() => {
        this.converters = [new as(), new ss(), new ls(), new cs(), new ds(), new cs(), new ds(), new ps(), new gs(), new ys(), new xs(), new Ss(), new As(), new Es(), new Os(), new Ps(), new Ls(), new Bs(), new Ks(), new Ys(), new Js(), new $s(), new ta(), new na(), new ia(), new sa(), new Is(), new Ns(), new zs(), new Ws(), new Us(), new fs(), new ya(), new ba(), new Ca(), new Aa(), new Ea(), new Oa(), new Pa(), new Ia(), new La(), new Ba(), new ja(), new Na(), new Ha(), new Va(), new qa(), new Ka(), new Ya(), new Ja(), new $a(), new tl(), new nl(), new ol(), new al(), new cl(), new hl(), new ul(), new ml(), new yl(), new bl(), new Cl(), new Al(), new El(), new Ol(), new Pl(), new Il(), new Ll(), new jl(), new Nl(), new Hl(), new Vl(), new ql(), new Kl(), new Yl(), new Jl(), new $l(), new tc(), new nc(), new oc(), new ac(), new cc(), new hc(), new uc(), new mc(), new yc(), new bc(), new Cc(), new Ac(), new Ec(), new Oc(), new Pc(), new Ic(), new Lc(), new Bc(), new jc(), new Nc(), new Hc(), new Vc(), new qc(), new Kc(), new Yc(), new Jc(), new $c(), new td(), new nd(), new od(), new ad(), new cd(), new hd(), new ud(), new md(), new yd(), new bd(), new Sd(), new kd(), new xd()];
      }, 1e3);
    }
    findConverter(e) {
      return h().find(this.converters, t => t.check(e));
    }
    convert(e) {
      for (var t = "", r = [], n = 0; n < e.length; n++) {
        var i = e[n];
        if (i.style || (i = Dd(Dd({}, i), {}, {
          style: {}
        })), a.w.isDiagramGroupId(i.id)) {
          var o = this.convert(i.entities);
          t += "".concat(o.d, "\n"), r = r.concat(o.defs);
        } else {
          var s = this.findConverter(i);
          if (s) {
            var l = i;
            l.style || (l = f.A.setProp(l, "style", {})), l.settings || (l = f.A.setProp(l, "settings", {}));
            var c = s.convert(l);
            !b.A.isTestEnv() && c.regionDescription && (t += "%".concat(c.regionDescription, " [id:").concat(i.id, "] \n")), t += "".concat(c.data, "\n"), r = r.concat(c.defs || []);
          }
        }
      }
      return {
        d: t,
        defs: r
      };
    }
    convertModel(e, t, r, n) {
      var i = D.A.getSettings(e, "diagramHeight"),
        o = D.A.getSettings(e, "diagramWidth"),
        s = this.convert(e.shapes),
        a = pa.convert(e.elements, t, r, null == n ? void 0 : n.nodeOptions, t => !H.W.isOwnedEditorId(e, t.id)),
        l = ga.convert(this.getTikzConnections(e)),
        c = this.intersectionConverter.convert(e.intersections),
        d = [];
      d = (d = (d = (d = d.concat(s.defs || [])).concat(a.defs || [])).concat(l.defs || [])).concat(c.defs || []);
      var h = Math.round(i),
        p = "",
        u = "%uncomment if require: \\path (0,".concat(h, "); %set diagram left start at 0, and has height of ").concat(h);
      if (null != n && n.forceBoxSize && (u = "\\path (0,".concat(h, ");\\path (").concat(o, ",0);")), null != n && n.verticalAlign) if (Gt.isCustom(null == n ? void 0 : n.verticalAlign)) u += "\\draw    ($(current bounding box.south)+(0,-0.3em)+(0,".concat(null == n ? void 0 : n.verticalAlign.value, "pt)$) node [anchor=south] (XXXX) {};"), p = ", baseline=(XXXX.south) ";else switch (null == n ? void 0 : n.verticalAlign) {
        case "bottom":
        case "text-bottom":
          u += "\\draw    ($(current bounding box.south)+(0,-0.3em)$) node [anchor=south] (XXXX) {};", p = ", baseline=(XXXX.south) ";
          break;
        case "top":
        case "text-top":
          u += "\\draw    ($(current bounding box.north)+(0,0.95em)$) node [anchor=north] (XXXX) {};", p = ", baseline=(XXXX.north) ";
          break;
        case "middle":
          u += "\\draw    ($(current bounding box.center)+(0,0.3em)$) node [anchor=south] (XXXX) {};", p = ", baseline=(XXXX.south) ";
      }
      var g = "\n".concat(d.join("\n"), "\n\\tikzset{every picture/.style={line width=").concat(Ho.pixelToPointScale(), "pt}} %set default line width to ").concat(Ho.pixelToPointScale(), "pt        \n\n\\begin{tikzpicture}[x=").concat(Ho.pixelToPointScale(), "pt,y=").concat(Ho.pixelToPointScale(), "pt,yscale=-1,xscale=1").concat(p, "]\n").concat(u, "\n\n").concat(s.d, "\n").concat(a.d, "\n").concat(l.data, "\n").concat(c.data, "\n\\end{tikzpicture}\n");
      return null != n && n.removeEmptyLine ? g.replace(/(^[ \t]*\n)/gm, "") : g;
    }
    getTikzConnections(e) {
      return (e.connections || []).filter(t => !H.W.isOwnedEditorId(e, t.fromEditorId) && !H.W.isOwnedEditorId(e, t.toEditorId));
    }
  }
  const Md = new Pd();
  var Id = r(40383);
  function Td(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ld(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Td(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Td(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Rd extends o().Component {
    shouldComponentUpdate(e) {
      return e.showGuide != this.props.showGuide || e.hasAnyGuide != this.props.hasAnyGuide;
    }
    render() {
      var e = [{
        value: "vertical",
        display: "Add Vertical Guide"
      }, {
        value: "horizontal",
        display: "Add Horizontal Guide"
      }, {
        value: void 0,
        display: "Seperator",
        isSeperator: !0
      }, {
        value: "show-guides",
        display: "Show Guides",
        checked: this.props.showGuide,
        isCheckBox: !0,
        disabled: !this.props.hasAnyGuide
      }];
      return o().createElement(Nt.A, {
        labelStyle: {
          paddingTop: 7,
          paddingBottom: 2,
          paddingLeft: 5,
          paddingRight: 5
        },
        checkboxTextStyle: {
          color: this.props.hasAnyGuide ? "black" : "lightgray"
        },
        containerStyle: {
          width: 150
        },
        style: Ld({
          borderLeft: "1px solid lightgray"
        }, this.props.style),
        label: "Guides",
        items: e,
        onItemSelect: e => {
          "vertical" == e && this.props.onAddNewVerticalGuide(), "horizontal" == e && this.props.onAddNewHorizontalGuide(), "show-guides" == e && this.props.onGuideShow(!this.props.showGuide);
        }
      });
    }
  }
  class Bd {
    getZoomInDelta(e) {
      return e < 1 ? .25 : .5;
    }
    getZoomOutDelta(e) {
      return e <= 1 ? .25 : .5;
    }
    getZoomItems(e) {
      var t = {
        padding: 3,
        verticalAlign: "-1px"
      };
      return e ? [{
        key: "zoom-in",
        element: o().createElement("i", {
          style: t,
          className: "fa fa-search-plus fa-regular"
        })
      }, {
        key: "zoom-out",
        element: o().createElement("i", {
          style: t,
          className: "fa fa-search-minus fa-regular"
        })
      }] : [{
        key: "full-view",
        element: re.A.fullScreen({
          width: 23,
          stroke: "none",
          verticalAlign: "-6px"
        })
      }];
    }
  }
  var Fd = new Bd();
  function jd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Nd extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleZoom", e => {
        var t = this.props.zoom;
        "zoom-in" == e.key && this.props.onZoomChange(t + Fd.getZoomInDelta(t)), "zoom-out" == e.key && this.props.onZoomChange(t - Fd.getZoomOutDelta(t)), "full-view" == e.key && this.props.onFullViewRequest();
      });
    }
    shouldComponentUpdate(e) {
      return e.zoom != this.props.zoom;
    }
    render() {
      var e = [],
        t = this.props.zoom;
      t <= .5 && e.push("zoom-out"), t >= 12 && e.push("zoom-in");
      var r = {
        fontSize: 15,
        display: "inline-block"
      };
      return o().createElement("div", {
        style: this.props.style
      }, o().createElement(Je.A, {
        style: r,
        preventDefault: !0,
        stopPropagation: !0,
        selectedKeys: [],
        onSelect: this.handleZoom,
        disabledKeys: e,
        items: Fd.getZoomItems(this.props.inFullView)
      }), this.renderZoomText());
    }
    renderZoomText() {
      if (!this.props.inFullView) return [];
      var e,
        t = 1 != this.props.zoom ? "" : "none",
        r = {
          fontWeight: 300,
          paddingLeft: 10,
          paddingRight: 2,
          color: "var(--ui-text, #4c4b4b)",
          fontSize: 14
        };
      return [o().createElement("span", {
        key: "tz",
        style: _d(_d({}, r), {}, {
          display: t
        })
      }, this.props.zoom.toFixed(2)), o().createElement("span", {
        key: "tzx",
        style: {
          paddingRight: 10,
          color: "var(--ui-text, #4c4b4b)",
          fontSize: 13,
          display: t
        }
      }, "x")];
    }
  }
  class zd extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleSelectAction", e => {
        "hand-move" == e.key && this.props.requestViewPortFor("move" == this.props.viewPortActionFor ? void 0 : "move"), "select" == e.key && this.props.requestViewPortFor("select" == this.props.viewPortActionFor ? void 0 : "select");
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.zoom != t.zoom || e.viewPortActionFor != t.viewPortActionFor || e.hasAnyGuide != t.hasAnyGuide || e.selectedSessionId != t.selectedSessionId || e.showGuide != t.showGuide;
    }
    renderSelectActions() {
      if (!(this.props.zoom <= 1)) {
        var e = [];
        "move" == this.props.viewPortActionFor && e.push("hand-move"), "select" == this.props.viewPortActionFor && e.push("select");
        var t = {
            width: 25,
            height: 21,
            marginBottom: -3,
            marginLeft: -5,
            marginTop: -2
          },
          r = [{
            key: "hand-move",
            element: o().createElement("i", {
              style: Hd,
              className: "fa fa-hand-paper-o"
            })
          }, {
            key: "select",
            element: o().createElement("svg", {
              style: t
            }, o().createElement("path", {
              style: {
                transform: "translate(7px, 4px) scale(1.3)"
              },
              d: "M-0.5,0 L12.5,0  M-0.5,12 L12.5,12 M0,0 L0,12  M12,0 L12,12",
              stroke: "gray",
              strokeWidth: "0.5",
              strokeDasharray: "1 1"
            }))
          }];
        return o().createElement(Je.A, {
          style: {
            fontSize: 15
          },
          preventDefault: !0,
          stopPropagation: !0,
          selectedKeys: e,
          onSelect: this.handleSelectAction,
          items: r
        });
      }
    }
    renderGuidesAdding() {
      if (b.A.isMobileOrTablet()) return o().createElement(Rd, {
        showGuide: this.props.showGuide,
        hasAnyGuide: this.props.hasAnyGuide,
        onAddNewVerticalGuide: this.props.onAddNewVerticalGuide,
        onAddNewHorizontalGuide: this.props.onAddNewHorizontalGuide,
        onGuideShow: this.props.onGuideShow
      });
    }
    renderZoomControls() {
      if (!b.A.isMobileOrTablet()) return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement(Nd, {
        zoom: this.props.zoom,
        inFullView: !1,
        onFullViewRequest: this.props.onFullViewRequest,
        onZoomChange: this.props.onZoom
      }));
    }
    render() {
      var e = Id.a.applyReverseZoomStyle({
        background: "var(--ui-surface, white)",
        display: "flex",
        position: "absolute",
        top: "100%",
        left: 0,
        zIndex: 10,
        border: "1px solid var(--ui-border, lightgray)",
        alignItems: "baseline",
        fontFamily: '"Segoe UI", Arial, Verdana, sans-serif'
      }, this.props.dzContainer, "left top");
      return o().createElement("zoom-control", {
        style: e,
        onDoubleClick: e => e.stopPropagation(),
        class: "no-print"
      }, this.renderZoomControls(), this.renderSelectActions(), this.renderGuidesAdding());
    }
  }
  var Hd = {
      padding: 3
    },
    Wd = r(25742);
  class Vd {
    constructor() {
      (0, n.A)(this, "funcArr", []);
    }
    register(e) {
      this.funcArr.push(e);
    }
    unRegister(e) {
      this.funcArr = this.funcArr.filter(t => t != e);
    }
    notify() {
      this.funcArr.forEach(e => e());
    }
  }
  class Ud extends Wd.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "selectedOf", void 0), (0, n.A)(this, "diagramRefs", void 0), (0, n.A)(this, "movingHandler", void 0), (0, n.A)(this, "grid", void 0), (0, n.A)(this, "mainSvg", void 0), (0, n.A)(this, "frames", void 0), (0, n.A)(this, "connections", void 0), (0, n.A)(this, "mathDiagram", void 0), (0, n.A)(this, "diagramControls", void 0), (0, n.A)(this, "diagramControlsDrawing", void 0), (0, n.A)(this, "connectionFinder", void 0), (0, n.A)(this, "selectionLayer", void 0), (0, n.A)(this, "editors", void 0), (0, n.A)(this, "diagramShapes", void 0), (0, n.A)(this, "editorUpdateNotifier", new Vd()), (0, n.A)(this, "groupBoxSelectedInstance", void 0), (0, n.A)(this, "entityGroupBoxSelectedInstance", void 0), (0, n.A)(this, "remoteSelection", void 0), (0, n.A)(this, "state", {
        showingExpanderLine: !1,
        showGuide: !0
      }), (0, n.A)(this, "doubleTapHammer", void 0), (0, n.A)(this, "zoomRef", void 0), (0, n.A)(this, "lastProps", void 0);
    }
    getClassName() {
      return this.props.selected ? I()(super.getClassName(), "role-diagram-selected", "role-prevent-selection") : super.getClassName();
    }
    shouldNotMoveOutsideEditor() {
      return !0;
    }
    componentWillUpdate(e, t, r) {
      super.componentWillUpdate && super.componentWillUpdate(e, t, r), this.lastProps = this.props;
    }
  }
  (0, n.A)(Ud, "childContextTypes", {
    getScale: w().any
  });
  class qd extends o().Component {
    render() {
      var e = this.props.snapPoints;
      if (!e || 0 == e.length) return o().createElement("g", null);
      var t = {},
        r = this.props.getDZContainer().zoomRatio;
      return o().createElement("g", {
        style: t
      }, e.map((e, t) => o().createElement("circle", {
        key: t,
        cx: e.x,
        cy: e.y,
        r: 5 / r,
        fill: "rgba(144, 238, 144, 0.52)",
        stroke: "green",
        strokeWidth: 1 / r
      })));
    }
  }
  class Gd extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "didMount", !1), (0, n.A)(this, "componentInUpdateMode", !1), (0, n.A)(this, "delayPresenterRef", void 0), (0, n.A)(this, "requestedByEditorNotified", !1), (0, n.A)(this, "refresh", () => {
        this.componentInUpdateMode ? this.requestedByEditorNotified = !0 : this.delayPresenterRef && (this.delayPresenterRef.refresh(!0), this.requestedByEditorNotified = !1);
      }), (0, n.A)(this, "refreshPresenter", () => {
        this.delayPresenterRef && (this.delayPresenterRef.refresh(this.requestedByEditorNotified), this.requestedByEditorNotified = !1);
      }), (0, n.A)(this, "handleDelayPresenterRef", e => {
        this.delayPresenterRef = e;
      });
    }
    componentDidMount() {
      this.props.editorUpdateNotifier.register(this.refresh), this.didMount = !0, this.props.manager.requestCycle(() => this.forceUpdate());
    }
    componentWillUnmount() {
      this.props.editorUpdateNotifier.unRegister(this.refresh);
    }
    componentWillUpdate() {
      this.componentInUpdateMode = !0;
    }
    componentDidUpdate() {
      this.componentInUpdateMode = !1, this.props.manager.requestCycle(this.refreshPresenter);
    }
    render() {
      return this.didMount ? o().createElement(Kd, {
        ref: this.handleDelayPresenterRef
      }, this.props.children) : o().createElement("div", null);
    }
  }
  class Kd extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "editorRandom", Math.random());
    }
    refresh(e) {
      e && (this.editorRandom = Math.random()), this.forceUpdate();
    }
    shouldComponentUpdate() {
      return !1;
    }
    render() {
      return o().cloneElement(o().Children.only(this.props.children), {
        editorChangedHash: this.editorRandom
      });
    }
  }
  class Zd {
    constructor(e) {
      (0, n.A)(this, "getBachUpdater", void 0), (0, n.A)(this, "requested", !1), this.getBachUpdater = e;
    }
    requestCycle(e) {
      this.getBachUpdater().requestExtraCycle(e), this.requestProcess();
    }
    requestProcess() {
      this.requested || (this.requested = !0, L.A.nextMicro(() => {
        var e = this.getBachUpdater();
        e.isBusy() || e.processOnly("DelayUpdaterManager"), this.requested = !1;
      }));
    }
  }
  function Yd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Qd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Yd(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Jd extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "groupBoxRef", void 0), (0, n.A)(this, "handleEntitiesChangedForGroup", (e, t, r, n) => {
        var i = this.updateRotationSkewX(t, r);
        this.props.onEntitiesChanged(e, i, !(null == n || !n.focusAcquired));
      }), (0, n.A)(this, "handleEntitiesChangingForGroup", (e, t, r) => {
        var n = this.updateRotationSkewX(t, r);
        this.props.onEntitiesChanging(e, n);
      }), (0, n.A)(this, "handleGroupBoxRef", e => {
        this.groupBoxRef = e;
      });
    }
    rotateByRequest(e) {
      this.groupBoxRef && this.groupBoxRef.rotateByRequest(e);
    }
    allowRequestAction(e) {
      return "rotate-flip" == e;
    }
    getBoundingRect() {
      if (this.groupBoxRef) return this.groupBoxRef.getBoundingRect();
    }
    resize(e, t, r) {
      if (this.groupBoxRef) return this.groupBoxRef.resize(e, t, r);
    }
    updateRotationSkewX(e, t) {
      return Qd(Qd({}, this.props.groupEntity), {}, {
        data: Qd(Qd({}, this.props.groupEntity.data), {}, {
          rotation: e,
          skewX: t
        })
      });
    }
    render() {
      var e = this.props.groupEntity.data,
        t = void 0 === e ? {} : e;
      return o().createElement(Bn, {
        ref: this.handleGroupBoxRef,
        selectedSessionId: this.props.selectedSessionId,
        getDZContainer: this.props.getDZContainer,
        subSelection: this.props.subSelection,
        onSubSelectionChanged: this.props.onSubSelectionChanged,
        getEditorFrameInfo: this.props.getEditorFrameInfo,
        rotation: t.rotation,
        skewX: t.skewX,
        colorTheme: "green",
        entities: this.props.groupEntity.entities,
        diagram: this.props.diagram,
        editorRef: this.props.editorRef,
        getRootElement: this.props.getRootElement,
        onGroupMouseDown: this.props.onGroupMouseDown,
        onEntitiesChanged: this.handleEntitiesChangedForGroup,
        onEntitiesChanging: this.handleEntitiesChangingForGroup
      });
    }
  }
  var Xd = r(9363),
    $d = r.n(Xd),
    eh = r(61885);
  function th(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function rh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? th(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : th(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class nh extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHandler", new un.X({}, this.props.getDzContainer)), (0, n.A)(this, "canvasRef", void 0), (0, n.A)(this, "canvasContext", void 0), (0, n.A)(this, "handleMouseDown", e => {
        this.movingHandler.baseElement || this.movingHandler.setBaseElement(this.canvasRef), this.movingHandler.mouseDown(e, {
          points: [],
          maxRect: {
            p1: {
              x: Number.MAX_SAFE_INTEGER,
              y: Number.MAX_SAFE_INTEGER
            },
            p2: {
              x: Number.MIN_SAFE_INTEGER,
              y: Number.MIN_SAFE_INTEGER
            }
          }
        });
      }), (0, n.A)(this, "getRef", e => {
        this.canvasRef = e;
      }), (0, n.A)(this, "handleKeyDown", e => {
        27 == e.keyCode && this.props.requestStopDrawing();
      }), this.movingHandler.onMovingStarted = (e, t, r) => {
        this.canvasContext = this.canvasRef.getContext("2d");
        var n = this.canvasContext;
        n.lineJoin = n.lineCap = "round", n.lineWidth = this.props.freeDrawingInfo.thickness, n.strokeStyle = k.A.getHtmlColor(this.props.freeDrawingInfo.strokeColor), r.customData.points.push({
          x: t.left,
          y: t.top
        });
      }, this.movingHandler.onMoving = (e, t, r) => {
        var n = {
            x: t.left,
            y: t.top
          },
          i = this.canvasContext,
          o = r.customData,
          s = o.points,
          a = o.maxRect;
        console.log(s.length), s.length > 0 && i.clearRect(a.p1.x - 50, a.p1.y - 50, a.p2.x - a.p1.x + 100, a.p2.y - a.p1.y + 100), s.push(n);
        var l = $d()(s, .3),
          c = l[0],
          d = l[1];
        i.beginPath(), i.moveTo(c.x, c.y);
        for (var h = 0, p = l.length; h < p; h++) {
          var u = y.A.getMiddlePointLine(c, d);
          i.quadraticCurveTo(u.x, u.y, d.x, d.y), c = l[h], d = l[h + 1];
        }
        i.stroke();
        var g = y.A.expandByMaxRectangleByPoint(a, n);
        r.customData.maxRect = g, r.customData.points = l;
      }, this.movingHandler.onMoved = e => {
        var t = e.customData,
          r = t.maxRect,
          n = t.points;
        if (!(n.length <= 1)) {
          var i = this.canvasContext;
          n.length > 0 && i.clearRect(r.p1.x - 50, r.p1.y - 50, r.p2.x - r.p1.x + 100, r.p2.y - r.p1.y + 100);
          var o = y.A.expandByMaxRectangleAround(r, 5),
            s = y.A.rectWidthHeight(o),
            l,
            c = new eh.u(n).simplify();
          console.log("total: ", c.length);
          var d = this.props.freeDrawingInfo,
            h = d.thickness,
            p = d.defaultStrokeColor,
            u = d.strokeColor,
            g = {
              id: a.w.nextDiagramCompositeShapeId(),
              type: "free-drawing",
              data: {
                p1: o.p1,
                p2: o.p2,
                paths: c.map(e => ({
                  p1: y.A.absoluteToRelativePoint(o.p1, e.p1, s.width, s.height, !0),
                  p2: y.A.absoluteToRelativePoint(o.p1, e.p2, s.width, s.height, !0),
                  cp: y.A.absoluteToRelativePoint(o.p1, e.cp, s.width, s.height, !0),
                  cp2: y.A.absoluteToRelativePoint(o.p1, e.cp2, s.width, s.height, !0)
                }))
              },
              style: {
                thickness: h,
                strokeColor: u == p ? void 0 : u
              }
            };
          this.props.onCreateEntity(g);
        }
      };
    }
    componentDidMount() {
      E.KT(document, "keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
      E.Bo(document, "keydown", this.handleKeyDown);
    }
    render() {
      var e = this.props,
        t = e.width,
        r = e.height;
      return o().createElement(Tt.F, {
        onTouchOrMouseDown: this.handleMouseDown
      }, o().createElement("canvas", {
        width: t,
        height: r,
        ref: this.getRef,
        style: rh(rh({}, ih), {}, {
          width: t,
          height: r
        })
      }));
    }
  }
  var ih = {
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      cursor: "crosshair"
    },
    oh = r(47168),
    sh = r.n(oh);
  class ah {
    constructor() {
      (0, n.A)(this, "onRootTouchMoveMayPrevent", e => {
        e.handledMove && e.preventDefault();
      }), (0, n.A)(this, "onRootTouchStartMayPrevent", e => {
        e.handledTouchStart && (e.preventDefault(), e.stopPropagation());
      });
    }
    registerRootTouchEvent(e) {
      if (b.A.isMobileOrTablet()) {
        var t = m.A.getFalsePassiveObject();
        e.addEventListener("touchstart", this.onRootTouchStartMayPrevent, t), e.addEventListener("touchmove", this.onRootTouchMoveMayPrevent, t);
      }
    }
    unregisterRootTouchEvent(e) {
      b.A.isMobileOrTablet() && (e.removeEventListener("touchstart", this.onRootTouchStartMayPrevent), e.removeEventListener("touchmove", this.onRootTouchMoveMayPrevent));
    }
    registerDoubleTap(e, t) {
      if (b.A.isMobileOrTablet()) {
        var r = new (sh())(e, {
            touchAction: "auto",
            presets: ["tap"]
          }),
          n;
        return r.on("tap", e => {
          "COVERLAYER" == e.target.tagName && E.ms(e.target, "request-editing", F.T.getFromAbsPos(e.center.x, e.center.y, t()));
        }), r.get("tap").set({
          taps: 2
        }), r;
      }
    }
    unregisterDoubleTap(e) {
      b.A.isMobileOrTablet() && e && e.off("tap");
    }
  }
  const lh = new ah();
  var ch = {
      zIndex: 20,
      position: "absolute",
      background: "white",
      padding: 2,
      border: "1px solid lightgray",
      top: "100%",
      left: 0
    },
    dh = {
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      overflow: "visible",
      width: "100%",
      height: "100%"
    };
  function hh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ph(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? hh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class uh extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "movingHandler", new un.X({}, this.props.getDzContainer)), (0, n.A)(this, "didUnmount", !1), (0, n.A)(this, "handleGuideMoving", (e, t, r, n) => {
        var i = r.customData,
          o = i.svgWidth,
          s = i.svgHeight,
          a = o / 2 - o / 2 - 10,
          l = s / 2 - s / 2 - 10,
          c = o / 2 + o / 2 + 10,
          d = s / 2 + s / 2 + 10,
          h = {
            x: e.left,
            y: e.top
          },
          p = t.left,
          u = t.top;
        r.customData = ph(ph({}, r.customData), {}, {
          removeState: p < a || p > c || u < l || u > d
        }), this.props.onLineMoving(ph(ph({}, r.customData), {}, {
          delta: h,
          isCtrl: n.ctrlKey
        })), this.setState({
          movingGuide: r.customData
        });
      }), (0, n.A)(this, "handleGuideMoved", () => {
        if (this.state.movingGuide) {
          if (this.state.movingGuide.removeState) return this.props.onLineRemove(), void (this.didUnmount || this.setState({
            movingGuide: null
          }));
          this.props.onLineMoved(), this.didUnmount || this.setState({
            movingGuide: null
          });
        }
      }), (0, n.A)(this, "handleGuideMouseDown", (e, t) => {
        var r = E.f$(u().findDOMNode(this), "svg")[0];
        this.movingHandler.setBaseElement(r);
        var n = F.T.getBCWidthHeight(r, this.props.getDzContainer()),
          i,
          o,
          s = {
            index: t,
            svgWidth: n.rWidth,
            svgHeight: n.rHeight,
            removeState: !1
          };
        this.movingHandler.mouseDown(e, s), this.setState({
          movingGuide: s
        });
      }), this.movingHandler.onMoving = this.handleGuideMoving, this.movingHandler.onMoved = this.handleGuideMoved;
    }
    componentWillUnmount() {
      this.didUnmount = !0;
    }
    render() {
      var e = this.props.guides;
      return o().createElement("g", null, e.map(t => {
        var r = "rgba(0, 0, 0, 0.32)";
        return this.state.movingGuide && this.state.movingGuide.index == t.index && (r = "#4CAF50", this.state.movingGuide.removeState && (r = "red", t = e[t.index])), o().createElement(Tt.F, {
          key: t.index,
          onTouchOrMouseDown: e => this.handleGuideMouseDown(e, t.index)
        }, o().createElement("g", {
          style: {
            cursor: this.props.cursor,
            pointerEvents: "visiblePainted"
          }
        }, o().createElement("line", {
          x1: t.p1.x,
          y1: t.p1.y,
          x2: t.p2.x,
          y2: t.p2.y,
          stroke: r,
          strokeWidth: 1
        }), o().createElement("line", {
          x1: t.p1.x,
          y1: t.p1.y,
          x2: t.p2.x,
          y2: t.p2.y,
          stroke: "transparent",
          strokeWidth: pn.A.hiddenSelectLineWidth()
        })));
      }), this.renderNotice());
    }
    renderNotice() {
      if (this.state.movingGuide) return this.state.movingGuide.removeState ? o().createElement("g", null, o().createElement("rect", {
        x: 0,
        width: "100%",
        y: this.state.movingGuide.svgHeight,
        height: 33,
        stroke: "none",
        fill: "rgba(255, 255, 255, 0.92)"
      }), o().createElement("text", {
        fontSize: "13",
        y: this.state.movingGuide.svgHeight + 15,
        x: "50%",
        textAnchor: "middle",
        fill: "red",
        stroke: "none"
      }, "Release to remove")) : o().createElement("g", null, o().createElement("rect", {
        x: 0,
        width: "100%",
        y: this.state.movingGuide.svgHeight,
        height: 33,
        stroke: "none",
        fill: "rgba(255, 255, 255, 0.92)"
      }), o().createElement("text", {
        fontSize: "13",
        y: this.state.movingGuide.svgHeight + 15,
        x: "50%",
        textAnchor: "middle",
        fill: "orange",
        stroke: "none"
      }, "Drag out to remove"));
    }
  }
  function gh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function mh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? gh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class fh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "cachedSnapableShapes", void 0), (0, n.A)(this, "handleGuideMoving", e => {
        var t = e.delta,
          r = e.index,
          n = e.isCtrl,
          i = e.svgWidth,
          o = this.props.guides[r],
          s = o.x + t.x,
          a = mh(mh({}, o), {}, {
            x: h().clamp(s, 1, i - 1)
          }),
          l = !0;
        if (!n) {
          var c = this.props.model;
          this.cachedSnapableShapes || (this.cachedSnapableShapes = c.shapes.concat(Fi.A.getTemporaryShapes(this.props.getEditorGuideSnapInfo(), S.A.getDiagramEditors(c.elements))));
          var d = Sn.A.detectVerticalGuides([a], this.cachedSnapableShapes);
          d && (a.x = d.inputPoint.x, this.props.onSnape(d.inputPoint), l = !1);
        }
        var p = f.A.setIndex(this.props.guides, r, a);
        e.removeState && (l = !0), l && this.props.onSnape(null), this.setState({
          movingGuide: {
            newGuides: p,
            index: r,
            removeState: e.removeState
          }
        });
      }), (0, n.A)(this, "handleGuideMoved", () => {
        this.cachedSnapableShapes && (this.cachedSnapableShapes = void 0), this.state.movingGuide && (this.props.onGuidesChanged(this.state.movingGuide.newGuides), this.props.onSnape(null));
      }), (0, n.A)(this, "handleGuideRemove", () => {
        var e = f.A.remove(this.props.guides, this.state.movingGuide.index);
        this.props.onGuidesChanged(e);
      });
    }
    componentWillReceiveProps(e) {
      e.guides != this.props.guides && this.state.movingGuide && this.setState({
        movingGuide: null
      });
    }
    getGuides() {
      return this.state.movingGuide && !this.state.movingGuide.removeState ? this.state.movingGuide.newGuides : this.props.guides || [];
    }
    render() {
      var e,
        t = this.getGuides().map((e, t) => {
          var r = y.A.round2(e.x);
          return {
            p1: {
              x: r,
              y: "0%"
            },
            p2: {
              x: r,
              y: "100%"
            },
            index: t
          };
        });
      return o().createElement(uh, {
        cursor: "col-resize",
        guides: t,
        onLineMoving: this.handleGuideMoving,
        onLineMoved: this.handleGuideMoved,
        onLineRemove: this.handleGuideRemove,
        getDzContainer: this.props.getDZContainer
      });
    }
  }
  function yh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function vh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? yh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class bh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "cachedSnapableShapes", void 0), (0, n.A)(this, "handleGuideMoving", e => {
        var t = e.delta,
          r = e.index,
          n = e.isCtrl,
          i = e.svgHeight,
          o = this.props.guides[r],
          s = o.y + t.y,
          a = vh(vh({}, o), {}, {
            y: h().clamp(s, 1, i - 1)
          }),
          l = !0;
        if (!n) {
          var c = this.props.model;
          this.cachedSnapableShapes || (this.cachedSnapableShapes = c.shapes.concat(Fi.A.getTemporaryShapes(this.props.getEditorGuideSnapInfo(), S.A.getDiagramEditors(c.elements))));
          var d = Sn.A.detectHorizontalGuides([a], this.cachedSnapableShapes);
          d && (a.y = d.inputPoint.y, this.props.onSnape(d.inputPoint), l = !1);
        }
        var p = f.A.setIndex(this.props.guides, r, a);
        e.removeState && (l = !0), l && this.props.onSnape(null), this.setState({
          movingGuide: {
            newGuides: p,
            index: r,
            removeState: e.removeState
          }
        });
      }), (0, n.A)(this, "handleGuideMoved", () => {
        this.cachedSnapableShapes && (this.cachedSnapableShapes = void 0), this.state.movingGuide && (this.props.onGuidesChanged(this.state.movingGuide.newGuides), this.props.onSnape(null));
      }), (0, n.A)(this, "handleGuideRemove", () => {
        var e = f.A.remove(this.props.guides, this.state.movingGuide.index);
        this.props.onGuidesChanged(e);
      });
    }
    componentWillReceiveProps(e) {
      e.guides != this.props.guides && this.state.movingGuide && this.setState({
        movingGuide: null
      });
    }
    getGuides() {
      return this.state.movingGuide && !this.state.movingGuide.removeState ? this.state.movingGuide.newGuides : this.props.guides || [];
    }
    render() {
      var e,
        t = this.getGuides().map((e, t) => {
          var r = y.A.round2(e.y);
          return {
            p1: {
              x: "0%",
              y: r
            },
            p2: {
              x: "100%",
              y: r
            },
            index: t
          };
        });
      return o().createElement(uh, {
        cursor: "row-resize",
        guides: t,
        onLineMoving: this.handleGuideMoving,
        onLineMoved: this.handleGuideMoved,
        onLineRemove: this.handleGuideRemove,
        getDzContainer: this.props.getDZContainer
      });
    }
  }
  function xh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ch(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Sh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleHorizontalGuidesChanged", e => {
        var t = Ch(Ch({}, this.props.model), {}, {
          horizontalGuides: e
        });
        this.props.onModelChanged(t);
      }), (0, n.A)(this, "handleVerticalGuidesChanged", e => {
        var t = Ch(Ch({}, this.props.model), {}, {
          verticalGuides: e
        });
        this.props.onModelChanged(t);
      });
    }
    render() {
      return o().createElement("svg", {
        style: dh,
        className: "role-guides no-print"
      }, this.renderVerticalGuides(), this.renderHorizontalGuides());
    }
    renderVerticalGuides() {
      var e = this.props,
        t = e.showGuide,
        r = e.model;
      if (t) return o().createElement(fh, {
        getEditorGuideSnapInfo: this.props.requestEditorGuideSnapInfo,
        onSnape: this.props.onSnapPointChanged,
        model: r,
        guides: r.verticalGuides,
        onGuidesChanged: this.handleVerticalGuidesChanged,
        getDZContainer: this.props.getDZContainer
      });
    }
    renderHorizontalGuides() {
      var e = this.props,
        t = e.showGuide,
        r = e.model;
      if (t) return o().createElement(bh, {
        getEditorGuideSnapInfo: this.props.requestEditorGuideSnapInfo,
        onSnape: this.props.onSnapPointChanged,
        model: r,
        guides: r.horizontalGuides,
        onGuidesChanged: this.handleHorizontalGuidesChanged,
        getDZContainer: this.props.getDZContainer
      });
    }
  }
  var Ah = r(46086),
    wh = r(60150),
    Eh = r(75067),
    kh = r(64777);
  class Oh {
    diffModelWithState(e, t) {
      var r, n, i, o, s;
      return {
        type: "map-diff",
        updates: [{
          key: "shapes",
          value: this.diffEntities(e.shapes, t.shapes, void 0)
        }, {
          key: "elements",
          value: this.diffElements(e.elements, t.elements)
        }, {
          key: "verticalGuides",
          value: this.diffEntities(e.verticalGuides, t.verticalGuides, "guide")
        }, {
          key: "horizontalGuides",
          value: this.diffEntities(e.horizontalGuides, t.horizontalGuides, "guide")
        }].filter(e => e.value && e.value.updates && e.value.updates.length > 0)
      };
    }
    diffElements(e, t) {
      e = e || {}, t = t || {};
      var r = S.A.getDiagramEditorKeys(e),
        n = [];
      return r.forEach(r => {
        if (!t[r]) throw this.getError();
        if (e[r] != t[r]) {
          var i = this.diffEntity(e[r], t[r], void 0);
          i && n.push({
            key: r,
            value: i
          });
        }
      }), {
        type: "map-diff",
        updates: n
      };
    }
    diffEntities(e, t, r) {
      if (t = t || [], (e = e || []).length != t.length) throw this.getError();
      for (var n = {
          type: "entity-list-diff",
          updates: []
        }, i = 0; i < e.length; i++) {
        var o = e[i],
          s = t[i];
        if (!!o != !!s) throw this.getError();
        o != s && n.updates.push({
          id: o.id,
          value: this.diffEntity(o, s, r)
        });
      }
      return n;
    }
    getRawDiffOnObject(e, t, r) {
      e = e || {}, t = t || {};
      var n = h().uniq(h().keys(e).concat(h().keys(t))),
        i = [];
      return n.forEach(n => {
        r && r.includes(n) || e[n] != t[n] && i.push({
          key: n.toString(),
          value: {
            type: "raw-data",
            value: t[n]
          }
        });
      }), i;
    }
    getGeneralEntityDiff(e, t, r) {
      var n = ["id", "realId", "style", "settings", "type"];
      r && (n = n.concat(r));
      var i = this.getRawDiffOnObject(e, t, n),
        o = this.getStylesAndSettingsDiff(e, t);
      return {
        type: "map-diff",
        updates: i.concat(o)
      };
    }
    getStylesAndSettingsDiff(e, t) {
      var r = [],
        n;
      return ["style", "settings"].forEach(n => {
        if (e[n] != t[n]) {
          var i = this.getRawDiffOnObject(e[n], t[n]);
          i && i.length > 0 && r.push({
            key: n,
            value: {
              type: "map-diff",
              updates: i
            }
          });
        }
      }), r;
    }
    diffGroupEntity(e, t) {
      var r;
      return {
        type: "map-diff",
        updates: this.getGeneralEntityDiff(e, t, ["entities"]).updates.concat({
          key: "entities",
          value: this.diffEntities(e.entities, t.entities, void 0)
        })
      };
    }
    getTextDiff(e, t) {
      return e.shape == t.shape ? {
        type: "map-diff",
        updates: []
      } : {
        type: "map-diff",
        updates: [{
          key: "shape",
          value: this.getGeneralEntityDiff(e.shape, t.shape)
        }]
      };
    }
    diffEntity(e, t, r) {
      if (e.id != t.id) throw this.getError();
      if ("guide" == r) return this.getGeneralEntityDiff(e, t);
      var n = gr.A.getEntityType(e),
        i;
      if (n != gr.A.getEntityType(t)) throw this.getError();
      switch (n) {
        case "connection":
        case "intersection":
        case "shape-arrow":
        case "shape-composite":
        case "shape-object":
          return this.getGeneralEntityDiff(e, t);
        case "diagram":
        case "temporary":
          throw this.getError();
        case "group":
          return this.diffGroupEntity(e, t);
        case "linked":
          return {
            type: "map-diff",
            updates: []
          };
        case "text":
          return this.getTextDiff(e, t);
        default:
          (0, kh.d)(n);
      }
    }
    getError() {
      return new Error("Unsupported diff from state");
    }
  }
  const Dh = new Oh();
  class Ph {
    mergeStateDiffWithModel(e, t) {
      return this.mergeMapDiff(e, t);
    }
    mergeMapDiff(e, t) {
      if (!t || !t.updates || t.updates.length <= 0) return e;
      e = e || {};
      var r = h().clone(e);
      return t.updates.forEach(t => {
        r[t.key] = this.mergeOn(e[t.key], t.value);
      }), r;
    }
    mergeListDiff(e, t) {
      if (!t || !t.updates || t.updates.length <= 0) return e;
      e = e || [];
      var r = h().clone(e);
      return t.updates.forEach(t => {
        t.index >= r.length ? console.warn("index out of bound on merging") : r[t.index] = this.mergeOn(e[t.index], t.value);
      }), r;
    }
    mergeEntityListDiff(e, t) {
      if (!t || !t.updates || t.updates.length <= 0) return e;
      e = e || [];
      var r = h().clone(e);
      return t.updates.forEach(t => {
        var n = e.findIndex(e => e.id == t.id);
        n < 0 ? console.warn("could not found with id: ", t.id) : r[n] = this.mergeOn(e[n], t.value);
      }), r;
    }
    mergeOn(e, t) {
      switch (t.type) {
        case "entity-list-diff":
          return this.mergeEntityListDiff(e, t);
        case "list-diff":
          return this.mergeListDiff(e, t);
        case "map-diff":
          return this.mergeMapDiff(e, t);
        case "raw-data":
          return t.value;
        default:
          (0, kh.d)(t);
      }
    }
  }
  const Mh = new Ph();
  class Ih {
    merge(e, t, r) {
      try {
        var n = Dh.diffModelWithState(t, r);
        return Mh.mergeStateDiffWithModel(e, n);
      } catch (t) {
        return console.warn("There is some problem on diffing with state!!!"), console.warn(t), e;
      }
    }
  }
  const Th = new Ih();
  class Lh {
    assignIds(e) {
      !e || e.length <= 0 || null != e[0].id || e.forEach((e, t) => {
        e.id = a.w.nextDiagramGuideId(t);
      });
    }
    assignIdsForGuides(e) {
      this.assignIds(e.verticalGuides), this.assignIds(e.horizontalGuides);
    }
  }
  const Rh = new Lh();
  class Bh {
    process(e, t, r) {
      if (r.isNextCycleLastRendering()) {
        var n = document.createElement("div");
        n.className = "init-diagram-layer-loading", E.hS(n, {
          position: "absolute",
          background: t,
          zIndex: 2,
          width: "100%",
          height: "100%",
          left: 0,
          top: 0
        }), e.appendChild(n), setTimeout(() => {
          E.Sq(n);
        }, 300);
      }
    }
  }
  const Fh = new Bh();
  class jh {
    getSelectedShapesKeepOrder(e, t) {
      return h().filter(t, t => e.indexOf(t.id) >= 0);
    }
    arrange(e, t, r) {
      if ("forward" == e) return this.moveForward(t, r);
      if ("backward" == e) return this.moveBackward(t, r);
      var n = this.getSelectedShapesKeepOrder(t, r),
        i = h().filter(r, e => t.indexOf(e.id) < 0);
      return "front" == e ? i.concat(n) : n.concat(i);
    }
    moveForward(e, t) {
      for (var r = t.slice(), n = r.length - 2; n >= 0; n--) if (e.indexOf(r[n].id) >= 0 && e.indexOf(r[n + 1].id) < 0) {
        var i = r[n + 1];
        r[n + 1] = r[n], r[n] = i;
      }
      return r;
    }
    moveBackward(e, t) {
      for (var r = t.slice(), n = 1; n < r.length; n++) if (e.indexOf(r[n].id) >= 0 && e.indexOf(r[n - 1].id) < 0) {
        var i = r[n - 1];
        r[n - 1] = r[n], r[n] = i;
      }
      return r;
    }
  }
  const _h = new jh();
  class Nh {
    constructor() {
      (0, n.A)(this, "selections", []);
    }
    getSelections() {
      return this.selections;
    }
    setSelections(e) {
      this.selections = h().clone(e);
    }
    unset() {
      return !(this.selections.length <= 0) && (this.selections = [], !0);
    }
  }
  var zh = r(87571);
  function Hh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Wh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Hh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Vh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleDeleteCaption", () => {
        var e = this.props.data;
        if (e.elements.caption) {
          var t = Wh(Wh({}, e), {}, {
            elements: Wh({}, e.elements)
          });
          delete t.elements.caption, this.props.onDiagramModelChange(t), Vt.A.in(() => {
            this.props.onDiagramModelChange(t), this.props.onSelectedChanged({
              controlled: !0
            });
          });
        }
      }), (0, n.A)(this, "handleEditCaptionPrefix", () => {
        this.props.notifyCaptionNumbering("request-prefix-edit", "diagram");
      }), (0, n.A)(this, "handleCaptionPrefixMouseDown", e => {
        e.stopPropagation(), e.preventDefault(), this.props.onSelectedChanged({
          key: "caption",
          selected: {
            lineIndex: 0,
            charIndex: 0
          },
          controlled: void 0,
          controlSelectedInfo: void 0
        });
      }), (0, n.A)(this, "handleCaptionInfoChange", e => {
        this.props.onDiagramModelChange(Wh(Wh({}, this.props.data), {}, {
          cpi: e
        }));
      }), (0, n.A)(this, "handleCaptionPosChange", e => {
        this.props.onDiagramModelChange(Wh(Wh({}, this.props.data), {}, {
          capPos: e
        }));
      });
    }
    getTextAlignFromFirstLine() {
      if (!this.props.data.elements.caption) return "left";
      var e = this.props.data.elements.caption.lines[0].style;
      return e && e.align || "left";
    }
    render() {
      return o().createElement(zh.q, {
        requestPickerSettings: this.props.requestPickerSettings,
        capPos: this.props.data.capPos || "below",
        allowSwichCaption: !0,
        onCaptionPosChange: this.handleCaptionPosChange,
        classNameKey: "diagram",
        cType: "diagram",
        mainStyle: this.props.mainStyle,
        blockId: this.props.data.id,
        captionPrefix: this.props.captionInfo.name,
        psTextStyle: this.props.captionInfo.textStyle,
        textAlignFirstLine: this.getTextAlignFromFirstLine(),
        selected: this.props.selected,
        onCaptionPrefixMouseDown: this.handleCaptionPrefixMouseDown,
        onDeleteCaption: this.handleDeleteCaption,
        onEditCaptionPrefix: this.handleEditCaptionPrefix,
        notifyCaptionNumbering: this.props.notifyCaptionNumbering,
        captionInfo: this.props.data.cpi,
        onCaptionInfoChange: this.handleCaptionInfoChange
      }, this.props.children);
    }
  }
  class Uh {
    getColumnName(e) {
      var t = "";
      return e > 701 ? (t += String.fromCharCode(64 + parseInt(e / 676 + "")), t += String.fromCharCode(64 + parseInt(e % 676 / 26 + ""))) : e > 25 && (t += String.fromCharCode(64 + parseInt(e / 26 + ""))), t += String.fromCharCode(65 + e % 26);
    }
    jexcelDataToDataSources(e, t) {
      var r = e.data;
      if (t = t || {}, r.length <= 0) return {
        dataSources: {},
        dataSourceOptions: []
      };
      for (var n = r[0].length, i = r.length, o = {}, s = 0; s < n; s++) {
        var a = this.getColumnName(s),
          l = this.getRowInfo(r, i, s),
          c = l.count,
          d = l.isAllNumber,
          h = new Array(c);
        o[a] = h;
        for (var p = 0; p < c; p++) {
          var u = r[p][s],
            g = this.getCellName(p, s);
          t[g] ? h[p] = t[g] : h[p] = d ? u ? Number.parseFloat(u) : 0 : u || void 0;
        }
      }
      var m = Object.keys(o).map(e => ({
        value: e,
        label: e
      }));
      return {
        dataSources: o,
        dataSourceOptions: m
      };
    }
    getCellName(e, t) {
      var r = this.getColumnName(t);
      return "".concat(r).concat(e + 1);
    }
    getRowInfo(e, t, r) {
      for (var n = 0, i = !0, o = 0; o < t; o++) {
        var s = e[o][r];
        s && (n = o + 1, isNaN(s) && (i = !1));
      }
      return {
        count: n,
        isAllNumber: i
      };
    }
  }
  const qh = new Uh();
  class Gh {
    mergeTraces(e, t) {
      return e.map(e => this._mergeTrace(e, t));
    }
    extractTracesInfo(e) {
      return e.map(e => this._extractTraceInfo(e));
    }
    _mergeTrace(e, t) {
      var r = this._extractTraceInfo(e);
      return h().keys(r).forEach(e => {
        if (this._isSrcKey(e)) {
          var n = this._extractColumnSrcKey(e),
            i = r[e];
          if ("string" == typeof i) r[n] = t[i] || [];else if (i instanceof Array) {
            var o = i;
            r[n] = o.map(e => t[e] || []);
          }
        }
      }), r;
    }
    _extractTraceInfo(e) {
      var t = h().clone(e);
      return h().keys(t).forEach(t => {
        if (this._isSrcKey(t)) {
          var r = this._extractColumnSrcKey(t);
          delete e[r];
        }
      }), t;
    }
    _extractColumnSrcKey(e) {
      return /^(.+)src$/.exec(e)[1];
    }
    _isSrcKey(e) {
      return /^.+src$/.test(e);
    }
  }
  const Kh = new Gh();
  function Zh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Yh(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Zh(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zh(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Qh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "PlotlyInstance", void 0), (0, n.A)(this, "delayRun", L.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "initialRun", L.A.createLaterRunObject("latest", 0)), (0, n.A)(this, "touchListenerLater", L.A.createLaterRunObject("latest", 100)), (0, n.A)(this, "disposed", !1), (0, n.A)(this, "renderedRoot", void 0), (0, n.A)(this, "listenerRoot", void 0), (0, n.A)(this, "registerRelayout", () => {
        if (!this.disposed && this.props.onRelayout) {
          var e = u().findDOMNode(this);
          this.listenerRoot = e, e.on("plotly_relayout", this.props.onRelayout), b.A.isMobileOrTablet() && this.touchListenerLater.later(() => {
            this.disposed || e.addEventListener("touchend", this.handleTouchEnd);
          });
        }
      }), (0, n.A)(this, "handleTouchEnd", () => {
        var e, t;
        if (!this.disposed && this.listenerRoot) {
          var r = this.listenerRoot._fullLayout.scene._scene.getCamera();
          null === (e = (t = this.props).onRelayout) || void 0 === e || e.call(t, {
            "scene.camera": r,
            scene: void 0,
            xaxis: void 0,
            yaxis: void 0
          });
        }
      }), (0, n.A)(this, "updatePlotlyAll", () => {
        if (!this.disposed && this.PlotlyInstance) {
          var e = this.props,
            t = e.traces,
            r = e.layout,
            n = e.positionData,
            i = y.A.rectWidthHeightAbs(n),
            o = u().findDOMNode(this);
          this.PlotlyInstance.react(o, t, Yh(Yh({}, r), {}, {
            width: i.width,
            height: i.height
          })), console.log("Plotly react run"), this.setForTest();
        }
      }), (0, n.A)(this, "updatePlotlyLayout", () => {
        if (!this.disposed && this.PlotlyInstance) {
          console.log("plotly update layout only");
          var e = u().findDOMNode(this),
            t = this.props.layout;
          this.PlotlyInstance.relayout(e, Yh({}, t)), this.setForTest();
        }
      }), (0, n.A)(this, "updatePlotlySize", () => {
        if (!this.disposed && this.PlotlyInstance) {
          console.log("plotly update width,height only");
          var e = u().findDOMNode(this),
            t = this.props.positionData,
            r = y.A.rectWidthHeightAbs(t);
          this.PlotlyInstance.relayout(e, {
            width: r.width,
            height: r.height
          }), this.setForTest();
        }
      });
    }
    componentDidMount() {
      Promise.all([r.e(287), r.e(673), r.e(288)]).then(r.bind(r, 94887)).then(e => {
        this.disposed || (this.PlotlyInstance = e.default, this.setState({
          loaded: !0
        }, () => {
          this.initialRun.later(() => {
            this.disposed || this.handleRenderPlotly();
          });
        }));
      }).catch(e => {
        this.disposed || (console.error(e), this.setState({
          errorMsg: "Error loading Plot library, please refresh the page",
          loaded: !0
        }));
      });
    }
    componentWillUnmount() {
      var e, t, r;
      this.disposed = !0, this.delayRun.cancel(), this.initialRun.cancel(), this.touchListenerLater.cancel(), null === (e = this.listenerRoot) || void 0 === e || e.removeAllListeners("plotly_relayout"), null === (t = this.listenerRoot) || void 0 === t || t.removeEventListener("touchend", this.handleTouchEnd), this.renderedRoot && (null === (r = this.PlotlyInstance) || void 0 === r || r.purge(this.renderedRoot)), this.listenerRoot = void 0;
    }
    handleRenderPlotly() {
      if (!this.disposed) {
        var e = u().findDOMNode(this);
        this.renderedRoot = e;
        var t = this.props,
          r = t.traces,
          n = t.layout,
          i = t.positionData,
          o = t.displayModeBar,
          s = y.A.rectWidthHeightAbs(i),
          a = {};
        void 0 !== o && (a.displayModeBar = o), this.PlotlyInstance.plot(e, r, Yh(Yh({}, n), {}, {
          autosize: !1,
          width: s.width,
          height: s.height
        }), a).then(() => {
          this.disposed ? this.PlotlyInstance.purge(e) : this.registerRelayout();
        }).catch(e => {
          this.disposed || console.error(e);
        });
      }
    }
    componentDidUpdate(e) {
      if (!this.disposed && this.state.loaded) {
        var t = this.props;
        if (e.layout != t.layout && e.traces == t.traces && e.positionData == t.positionData) {
          if (e.ignoreOnSceneChangeOnly && this.isCameraChangeOnly(e.layout, t.layout)) return void console.log("%c Scene change only, ignore update", "color:purple");
          this.delayRun.later(this.updatePlotlyLayout);
        } else e.layout != t.layout || e.traces != t.traces ? this.delayRun.later(this.updatePlotlyAll) : e.positionData != t.positionData && this.delayRun.later(this.updatePlotlySize);
      }
    }
    isCameraChangeOnly(e, t) {
      if (e.scene && t.scene) {
        for (var r = h().uniq(h().keys(e.scene).concat(h().keys(t.scene))).filter(e => "xaxis" == e || "yaxis" == e || "zaxis" == e), n = 0; n < r.length; n++) {
          var i = r[n];
          if (e.scene[i] != t.scene[i]) return !1;
        }
        return !0;
      }
      for (var o = h().uniq(h().keys(e).concat(h().keys(t))).filter(e => "scene" != e), s = 0; s < o.length; s++) {
        var a = o[s];
        if (e[a] != t[a]) return !1;
      }
      return !0;
    }
    setForTest() {
      b.A.isTestEnv() && (window.plotly3d = {
        layout: this.props.layout,
        traces: this.props.traces
      });
    }
    hasTransformation(e) {
      var t = e.rotation,
        r = e.skewX,
        n = e.flipX;
      return !!t || !!r || !!n;
    }
    renderLoading() {
      return o().createElement("div", {
        className: "plotly-render-container",
        style: Yh(Yh({}, this.getContainerStyle()), {}, {
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        })
      }, o().createElement("div", {
        style: {
          textAlign: "center",
          color: "gray",
          whiteSpace: "pre-wrap"
        }
      }, "Loading Plotly Library..."));
    }
    renderError() {
      return o().createElement("div", {
        className: "plotly-render-container",
        style: Yh(Yh({}, this.getContainerStyle()), {}, {
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        })
      }, o().createElement("div", {
        style: {
          textAlign: "center",
          whiteSpace: "pre-wrap",
          color: "#ce0303",
          fontWeight: "bold"
        }
      }, this.state.errorMsg));
    }
    render() {
      if (!this.state.loaded) return this.renderLoading();
      if (this.state.errorMsg) return this.renderError();
      this.setForTest();
      var e = this.props.positionData,
        t = e.rotation,
        r = e.skewX,
        n = e.flipX;
      return o().createElement("div", {
        "data-rotation": y.A.round2(t || 0),
        "data-skewx": y.A.round2(r || 0),
        "data-flipx": !!n,
        className: I()("plotly-render-container", this.props.containerClassName),
        style: this.getContainerStyle()
      });
    }
    getScene() {
      var e;
      if (!this.disposed && this.PlotlyInstance) return u().findDOMNode(this).layout.scene;
    }
    getContainerStyle() {
      var e = this.props.positionData,
        t = e.rotation,
        r = e.skewX,
        n = e.flipX,
        i = y.A.rectWidthHeightAbs(e),
        o = {
          position: "absolute",
          left: e.p1.x,
          top: e.p1.y,
          width: i.width,
          height: i.height
        };
      return this.hasTransformation(e) && (o.transform = "", t && (o.transform = "rotate(".concat(t, "deg)")), r && (o.transform += " skewX(".concat(r, "deg)")), n && (o.transform += " scaleX(-1)")), o;
    }
  }
  class Jh extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        traces: this.buildTraces(this.props.plotly)
      });
    }
    buildTraces(e) {
      var t = e.plotlyData,
        r,
        n = qh.jexcelDataToDataSources(t.jexcelSource, t.calculatedMap).dataSources,
        i;
      return Kh.mergeTraces(t.traces, n);
    }
    componentDidUpdate(e) {
      var t = e.plotly.plotlyData,
        r = this.props.plotly.plotlyData;
      t.jexcelSource == r.jexcelSource && t.traces == r.traces || this.setState({
        traces: this.buildTraces(this.props.plotly)
      });
    }
    render() {
      var e = this.props.plotly,
        t = e.plotlyData;
      return o().createElement(Qh, {
        ignoreOnSceneChangeOnly: !1,
        displayModeBar: !1,
        layout: t.layout,
        positionData: e.data,
        traces: this.state.traces
      });
    }
  }
  var Xh = r(34651),
    $h = r(17196);
  function ep(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function tp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ep(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class rp {
    build(e, t, r) {
      var n,
        i,
        o = r.xContourRange,
        s = r.yContourRange,
        a = this.resolveColorScale(e.colorScale, "RdBu"),
        l = null === (n = null === (i = e.solidTypeProps) || void 0 === i ? void 0 : i.showFrame) || void 0 === n || n,
        c = t.x,
        d = t.y,
        h = t.z;
      switch (e.subType || "solid") {
        case "solid":
          var p,
            u,
            g,
            m,
            f,
            y,
            v = "use-colorscale" == (null !== (p = null === (u = e.solidTypeProps) || void 0 === u ? void 0 : u.frameColor) && void 0 !== p ? p : "use-colorscale"),
            b = v ? void 0 : k.A.getHtmlColor(null !== (g = null === (m = e.solidTypeProps) || void 0 === m ? void 0 : m.frameColor) && void 0 !== g ? g : k.A.greenArr),
            x = l ? {
              x: {
                show: !0,
                size: (o.to - o.from) / o.step,
                start: o.from,
                end: o.to,
                usecolormap: v,
                color: b
              },
              y: {
                show: !0,
                size: (s.to - s.from) / s.step,
                start: s.from,
                end: s.to,
                usecolormap: v,
                color: b
              }
            } : {};
          return x = tp(tp({}, x), {}, {
            z: this.buildProjectedContours(e, t).z
          }), [{
            type: "surface",
            x: c,
            y: d,
            z: h,
            showscale: null !== (f = e.showscale) && void 0 !== f && f,
            contours: x,
            colorscale: a,
            opacity: null !== (y = e.opacity) && void 0 !== y ? y : 1,
            hoverinfo: "x+y+z",
            lighting: e.lighting
          }];
        case "wireframe":
          var C,
            S,
            A,
            w = {
              type: "surface",
              x: c,
              y: d,
              z: h,
              colorscale: [[0, "rgb(255,255,255)"], [1, "rgb(255,255,255)"]],
              lighting: {
                ambient: 1
              },
              showscale: !1,
              hoverinfo: "x+y+z",
              opacity: null !== (C = e.opacity) && void 0 !== C ? C : 1
            },
            E = {
              type: "surface",
              x: c,
              y: d,
              z: h,
              hidesurface: !0,
              contours: {
                x: {
                  show: !0,
                  size: (o.to - o.from) / o.step,
                  start: o.from,
                  end: o.to,
                  usecolormap: !0
                },
                y: {
                  show: !0,
                  size: (s.to - s.from) / s.step,
                  start: s.from,
                  end: s.to,
                  usecolormap: !0
                }
              },
              showscale: null !== (S = e.showscale) && void 0 !== S && S,
              colorscale: a,
              hoverinfo: "none",
              opacity: null !== (A = e.opacity) && void 0 !== A ? A : 1
            };
          return "z" == e.contours && (E.contours.z = this.buildProjectedContours(e, t).z), [w, E];
      }
    }
    resolveColorScale(e, t) {
      return e ? "string" == typeof e ? e : [[0, k.A.getHtmlColor(e.value)], [1, k.A.getHtmlColor(e.value)]] : t;
    }
    isSingleColor(e) {
      return e && "string" != typeof e;
    }
    buildProjectedContours(e, t) {
      switch (e.contours || "none") {
        case "none":
          return {};
        case "z":
          var r,
            n = this.findMinMax(t.z),
            i = (0, l.A)(n, 2),
            o = i[0],
            s = i[1],
            a;
          return {
            z: {
              show: !0,
              usecolormap: !0,
              project: {
                z: !0
              },
              size: (s - o) / (null !== (r = e.contoursSteps) && void 0 !== r ? r : 40),
              start: o,
              end: s
            }
          };
      }
    }
    findMinMax(e) {
      for (var t = Number.MAX_SAFE_INTEGER, r = Number.MIN_SAFE_INTEGER, n = 0; n < e.length; n++) for (var i = e[n], o = 0; o < i.length; o++) {
        var s = i[o];
        s > r && (r = s), s < t && (t = s);
      }
      return [t, r];
    }
  }
  var np = new rp();
  class ip {
    build(e, t) {
      return np.build(e, t, {
        xContourRange: e.xRange,
        yContourRange: e.yRange,
        parametric: !1
      });
    }
  }
  var op = new ip();
  class sp {
    build(e, t) {
      var r = t.x,
        n = t.y,
        i = t.z,
        o,
        s,
        a;
      return "line" === (e.markerSymbol || "circle") ? [{
        x: r,
        y: n,
        z: i,
        type: "scatter3d",
        mode: "lines",
        line: {
          width: null !== (o = e.size) && void 0 !== o ? o : 6,
          color: k.A.getHtmlColor(e.color || k.A.greenArr)
        },
        hoverinfo: "x+y+z",
        showlegend: !1
      }] : [{
        x: r,
        y: n,
        z: i,
        type: "scatter3d",
        mode: "markers",
        marker: {
          symbol: null !== (s = e.markerSymbol) && void 0 !== s ? s : "circle",
          size: null !== (a = e.size) && void 0 !== a ? a : 6,
          color: k.A.getHtmlColor(e.color || k.A.greenArr),
          line: {
            color: "rgb(204, 204, 204)",
            width: 1
          }
        },
        hoverinfo: "x+y+z",
        showlegend: !1
      }];
    }
  }
  var ap = new sp();
  class lp {
    build(e, t) {
      var r,
        n,
        i,
        o,
        s,
        a = this.initTraces(t),
        c = (0, l.A)(a, 2),
        d = c[0],
        h = c[1],
        p = np.resolveColorScale(e.colorScale, "RdBu"),
        u = null === (r = null === (n = e.solidTypeProps) || void 0 === n ? void 0 : n.showFrame) || void 0 === r || r,
        g = k.A.getHtmlColor(null !== (i = null === (o = e.solidTypeProps) || void 0 === o ? void 0 : o.frameColor) && void 0 !== i ? i : k.A.greenArr);
      return h.line = {
        color: g
      }, d.colorscale = p, d.opacity = null !== (s = e.opacity) && void 0 !== s ? s : 1, d.lighting = e.lighting, u ? [d, h] : [d];
    }
    initTraces(e) {
      return [{
        type: "mesh3d",
        x: e.x,
        y: e.y,
        z: e.z,
        i: e.i,
        j: e.j,
        k: e.k,
        flatshading: !0,
        intensity: e.z,
        showscale: !1,
        hoverinfo: "x+y+z"
      }].concat(this.buildFrames(e));
    }
    buildFrames(e) {
      var t = e.x,
        r = e.y,
        n = e.z,
        i = e.i,
        o = e.j,
        s = e.k,
        a = [],
        l = [],
        c = [],
        d = e.i.length;
      console.log("total:", e.i.length);
      for (var h = 0; h < d; h++) a.push(t[i[h]], t[o[h]], t[s[h]], t[i[h]], NaN), l.push(r[i[h]], r[o[h]], r[s[h]], r[i[h]], NaN), c.push(n[i[h]], n[o[h]], n[s[h]], n[i[h]], NaN);
      return [{
        type: "scatter3d",
        x: a,
        y: l,
        z: c,
        mode: "lines",
        showlegend: !1,
        hoverinfo: "none"
      }];
    }
  }
  var cp = new lp();
  function dp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function hp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class pp {
    build(e, t) {
      var r,
        n,
        i,
        o,
        s,
        a = this.initTraces(t),
        c = (0, l.A)(a, 3),
        d = c[0],
        h = c[1],
        p = c[2],
        u = np.resolveColorScale(e.colorScale, "RdBu"),
        g = null === (r = null === (n = e.solidTypeProps) || void 0 === n ? void 0 : n.showFrame) || void 0 === r || r,
        m = k.A.getHtmlColor(null !== (i = null === (o = e.solidTypeProps) || void 0 === o ? void 0 : o.frameColor) && void 0 !== i ? i : k.A.greenArr),
        f = {};
      return d.colorscale = u, f.line = {
        color: m
      }, d.opacity = null !== (s = e.opacity) && void 0 !== s ? s : 1, d.lighting = e.lighting, g ? [d, hp(hp({}, h), f), hp(hp({}, p), f)] : [d];
    }
    initTraces(e) {
      var t = this.buildWireFrameVertical(e),
        r = this.buildWireFrameHorizontal(e);
      return [{
        type: "mesh3d",
        x: e.x,
        y: e.y,
        z: e.z,
        i: e.i,
        j: e.j,
        k: e.k,
        flatshading: !0,
        intensity: e.z,
        showscale: !1,
        hoverinfo: "x+y+z"
      }, {
        type: "scatter3d",
        x: r[0],
        y: r[1],
        z: r[2],
        mode: "lines",
        showlegend: !1,
        hoverinfo: "none"
      }, {
        type: "scatter3d",
        x: t[0],
        y: t[1],
        z: t[2],
        mode: "lines",
        showlegend: !1,
        hoverinfo: "none"
      }];
    }
    buildWireFrameVertical(e) {
      for (var t = [], r = [], n = [], i = 0; i < e.uLength; i++) {
        for (var o = 0; o < e.vLength; o++) t.push(e.x[o * e.uLength + i]), r.push(e.y[o * e.uLength + i]), n.push(e.z[o * e.uLength + i]);
        t.push(NaN), r.push(NaN), n.push(NaN);
      }
      return [t, r, n];
    }
    buildWireFrameHorizontal(e) {
      for (var t = [], r = [], n = [], i = 0; i < e.vLength; i++) {
        for (var o = 0; o < e.uLength; o++) t.push(e.x[i * e.uLength + o]), r.push(e.y[i * e.uLength + o]), n.push(e.z[i * e.uLength + o]);
        t.push(NaN), r.push(NaN), n.push(NaN);
      }
      return [t, r, n];
    }
  }
  var up = new pp();
  class gp {
    build(e, t) {
      var r,
        n = this.initTraces(t),
        i,
        o = (0, l.A)(n, 1)[0],
        s = e.lineStyle,
        a = void 0 === s ? {} : s,
        c = np.resolveColorScale(a.colorScale, "RdBu");
      return o.line = {
        width: null !== (r = a.width) && void 0 !== r ? r : 5,
        autocolorscale: !1,
        colorscale: np.isSingleColor(a.colorScale) ? void 0 : c,
        color: np.isSingleColor(a.colorScale) ? k.A.getHtmlColor(a.colorScale.value) : t.z
      }, [o];
    }
    initTraces(e) {
      return [{
        type: "scatter3d",
        x: e.x,
        y: e.y,
        z: e.z,
        mode: "lines",
        showlegend: !1,
        hoverinfo: "x+y+z"
      }];
    }
  }
  var mp = new gp();
  class fp {
    constructor(e, t, r, i) {
      (0, n.A)(this, "w", void 0), (0, n.A)(this, "x", void 0), (0, n.A)(this, "y", void 0), (0, n.A)(this, "z", void 0), this.w = e, this.x = t, this.y = r, this.z = i;
    }
    static fromBetweenVectors(e, t) {
      var r = e[0],
        n = e[1],
        i = e[2],
        o = t[0],
        s = t[1],
        a = t[2],
        l = r * o + n * s + i * a,
        c = n * a - i * s,
        d = i * o - r * a,
        h = r * s - n * o;
      return new fp(l + Math.sqrt(l * l + c * c + d * d + h * h), c, d, h).normalize();
    }
    normalize() {
      var e = this.w,
        t = this.x,
        r = this.y,
        n = this.z,
        i = Math.sqrt(e * e + t * t + r * r + n * n);
      return i < fp.EPSILON ? fp.ZERO : new fp(e * (i = 1 / i), t * i, r * i, n * i);
    }
    rotateVector(e) {
      var t = this.w,
        r = this.x,
        n = this.y,
        i = this.z,
        o = e[0],
        s = e[1],
        a = e[2],
        l = -r * o - n * s - i * a,
        c = t * o + n * a - i * s,
        d = t * s + i * o - r * a,
        h = t * a + r * s - n * o,
        p,
        u,
        g;
      return [c * t - l * r - d * i + h * n, d * t - l * n - h * r + c * i, h * t - l * i - c * n + d * r];
    }
  }
  (0, n.A)(fp, "EPSILON", 1e-16), (0, n.A)(fp, "ZERO", new fp(0, 0, 0, 0));
  class yp {
    build(e, t) {
      var r = t.p1,
        n = t.p2,
        i = this.subtractVector(n, r);
      return this.buildFromData([r.x], [r.y], [r.z], [i.x], [i.y], [i.z], e.size, e.color).concat([this.getBoundingMarks(r, n)]);
    }
    buildFromData(e, t, r, n, i, o, s, a) {
      for (var l = [], c = [], d = 0, h = 0; h < e.length; h++) {
        var p = {
            x: e[h],
            y: t[h],
            z: r[h]
          },
          u = {
            x: e[h] + n[h],
            y: t[h] + i[h],
            z: r[h] + o[h]
          },
          g = fp.fromBetweenVectors([0, 1, 0], [u.x - p.x, u.y - p.y, u.z - p.z]),
          m = null != s ? s : 1,
          f = 2.5 * m,
          y = 2.5 * f,
          v = this.transform(this.createTruncatedConeVertices(f, 0, y, 8, 1, !0, !1, d), g, u),
          b = this.distance3dPoint2(p, u);
        if (l = l.concat(v.position), c = c.concat(v.indices), d += v.position.length / 3, b > y / 2) {
          var x = this.middlePoint(p, u),
            C = this.transform(this.createTruncatedConeVertices(m, m, b, 8, 1, !1, !1, d), g, x);
          l = l.concat(C.position), c = c.concat(C.indices), d += C.position.length / 3;
        }
      }
      var S = k.A.getHtmlColor(a || k.A.greenArr);
      return [{
        type: "mesh3d",
        x: l.filter((e, t) => t % 3 == 0),
        y: l.filter((e, t) => t % 3 == 1),
        z: l.filter((e, t) => t % 3 == 2),
        i: c.filter((e, t) => t % 3 == 0),
        j: c.filter((e, t) => t % 3 == 1),
        k: c.filter((e, t) => t % 3 == 2),
        showscale: !1,
        hoverinfo: "none",
        color: S
      }];
    }
    middlePoint(e, t) {
      return {
        x: (t.x + e.x) / 2,
        y: (t.y + e.y) / 2,
        z: (t.z + e.z) / 2
      };
    }
    subtractVector(e, t) {
      return {
        x: e.x - t.x,
        y: e.y - t.y,
        z: e.z - t.z
      };
    }
    getBoundingMarks(e, t) {
      var r = this.middlePoint(e, t),
        n = Math.max(Math.abs(e.x - r.x), Math.abs(t.x - r.x), Math.abs(e.y - r.y), Math.abs(t.y - r.y), Math.abs(e.z - r.z), Math.abs(t.z - r.z)),
        i = {
          x: r.x - n,
          y: r.y - n,
          z: r.z - n
        },
        o = {
          x: r.x + n,
          y: r.y + n,
          z: r.z + n
        },
        s,
        a,
        l,
        c,
        d,
        h,
        p,
        u,
        g = [this.makePoint(i, o, [0, 0, 0]), this.makePoint(i, o, [0, 0, 1]), this.makePoint(i, o, [0, 1, 0]), this.makePoint(i, o, [0, 1, 1]), this.makePoint(i, o, [1, 0, 0]), this.makePoint(i, o, [1, 0, 1]), this.makePoint(i, o, [1, 1, 0]), this.makePoint(i, o, [1, 1, 1])];
      return {
        x: g.map(e => e.x),
        y: g.map(e => e.y),
        z: g.map(e => e.z),
        type: "scatter3d",
        mode: "markers",
        marker: {
          color: "transparent"
        },
        hoverinfo: "none",
        showlegend: !1
      };
    }
    makePoint(e, t, r) {
      return {
        x: r[0] ? Math.max(e.x, t.x) : Math.min(e.x, t.x),
        y: r[1] ? Math.max(e.y, t.y) : Math.min(e.y, t.y),
        z: r[2] ? Math.max(e.z, t.z) : Math.min(e.z, t.z)
      };
    }
    transform(e, t, r) {
      for (var n = e.position, i = new Array(n.length), o = 0; o < n.length; o += 3) {
        var s = t.rotateVector([n[o], n[o + 1], n[o + 2]]);
        i[o] = s[0] + r.x, i[o + 1] = s[1] + r.y, i[o + 2] = s[2] + r.z;
      }
      return {
        position: i,
        indices: e.indices
      };
    }
    distance3dPoint2(e, t) {
      var r = e.x - t.x,
        n = e.y - t.y,
        i = e.z - t.z,
        o = r * r + n * n + i * i;
      return Math.sqrt(o);
    }
    createTruncatedConeVertices(e, t, r, n, i, o, s, a) {
      if (n < 3) throw Error("radialSubdivisions must be 3 or greater");
      if (i < 1) throw Error("verticalSubdivisions must be 1 or greater");
      for (var l = void 0 === o || o, c = void 0 === s || s, d = (l ? 2 : 0) + (c ? 2 : 0), h = [], p = [], u = n + 1, g, m = i + (c ? 2 : 0), f = l ? -2 : 0; f <= m; ++f) {
        var y = f / i,
          v = r * y,
          b = void 0;
        f < 0 ? (v = 0, y = 1, b = e) : f > i ? (v = r, y = 1, b = t) : b = e + f / i * (t - e), -2 !== f && f !== i + 2 || (b = 0, y = 0), v -= r / 2;
        for (var x = 0; x < u; ++x) {
          var C = Math.sin(x * Math.PI * 2 / n),
            S = Math.cos(x * Math.PI * 2 / n);
          h.push(C * b, v, S * b);
        }
      }
      for (var A = 0; A < i + d; ++A) for (var w = 0; w < n; ++w) p.push(a + u * (A + 0) + 0 + w, a + u * (A + 0) + 1 + w, a + u * (A + 1) + 1 + w), p.push(a + u * (A + 0) + 0 + w, a + u * (A + 1) + 1 + w, a + u * (A + 1) + 0 + w);
      return {
        position: h,
        indices: p
      };
    }
  }
  var vp = new yp();
  class bp {
    build(e, t) {
      for (var r, n = 0, i = t.xrun, o = t.yrun, s = t.zrun, a = t.i, l = t.j, c = t.k, d = new Array(i.length * o.length * s.length), h = new Array(i.length * o.length * s.length), p = new Array(i.length * o.length * s.length), u = 0; u < i.length; u++) for (var g = i[u], m = 0; m < o.length; m++) for (var f = o[m], y = 0; y < s.length; y++) {
        var v = s[y];
        d[n] = g, h[n] = f, p[n] = v, n++;
      }
      var b = np.resolveColorScale(e.colorScale, "RdBu"),
        x = {
          x: d.reduce((e, t) => Math.min(e, t), d[0]),
          y: h.reduce((e, t) => Math.min(e, t), h[0]),
          z: p.reduce((e, t) => Math.min(e, t), p[0])
        },
        C = {
          x: d.reduce((e, t) => Math.max(e, t), d[0]),
          y: h.reduce((e, t) => Math.max(e, t), h[0]),
          z: p.reduce((e, t) => Math.max(e, t), p[0])
        };
      return [{
        type: "cone",
        x: d,
        y: h,
        z: p,
        u: a,
        v: l,
        w: c,
        showscale: !1,
        hoverinfo: "none",
        colorscale: b,
        sizeref: null !== (r = e.sizeRatio) && void 0 !== r ? r : .5,
        sizemode: "scale"
      }, vp.getBoundingMarks(x, C)];
    }
  }
  var xp = new bp();
  function Cp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Sp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Cp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ap extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "plotRun", new Xh.A()), (0, n.A)(this, "delayRun", L.A.createLaterRunObject("latest", 1)), (0, n.A)(this, "basePlotAreaRef", void 0), (0, n.A)(this, "lastProps", void 0), (0, n.A)(this, "lastResponseData", void 0), (0, n.A)(this, "state", {
        traces: this.buildTraces([]),
        plotResult: {
          responseType: "plotly-3d-func",
          expressions: []
        },
        loaded: !1,
        layout: {}
      }), (0, n.A)(this, "runRequestPlotDelayed", () => {
        this.requestPlot(this.props);
      }), (0, n.A)(this, "handlePlotFinish", (e, t, r) => {
        if (this.lastResponseData == e) return console.log("layout change only"), void this.setState({
          plotResult: e,
          layout: this.buildLayout(t),
          loaded: !0
        });
        var n = e.expressions.filter(e => "error" == e.type).map(e => ({
            modelId: e.expression.model.id,
            message: e.message
          })),
          i = e.expressions.filter(e => "ok" == e.type);
        this.props.onRendered(n);
        var o = this.buildTraces(i),
          s;
        if ("traces" == this.analyzeChange(t, r)) return console.log("trances change only"), void this.setState({
          plotResult: e,
          traces: o,
          loaded: !0
        });
        this.setState({
          plotResult: e,
          traces: o,
          layout: this.buildLayout(t),
          loaded: !0
        });
      });
    }
    componentWillMount() {
      this.requestPlot(this.props);
    }
    componentDidUpdate(e, t) {
      e.plotlyData != this.props.plotlyData && this.delayRun.later(this.runRequestPlotDelayed), this.lastProps = e;
    }
    getScene() {
      if (this.basePlotAreaRef) return this.basePlotAreaRef.getScene();
    }
    buildLayout(e) {
      var t,
        r,
        n,
        i,
        o = this.props.plotlyData,
        s = o.axes,
        a = null == e || null === (t = e.plotlyData) || void 0 === t ? void 0 : t.axes,
        l = (null == s ? void 0 : s.visible) != (null == a ? void 0 : a.visible),
        c = null === (r = this.state.layout.scene) || void 0 === r ? void 0 : r.xaxis,
        d = null === (n = this.state.layout.scene) || void 0 === n ? void 0 : n.yaxis,
        h = null === (i = this.state.layout.scene) || void 0 === i ? void 0 : i.zaxis;
      return Sp(Sp({}, o.layout), {}, {
        scene: Sp(Sp({}, o.layout.scene), {}, {
          xaxis: (null == a ? void 0 : a.x) == s.x && !l && c ? c : this.buildSceneAxis(s.x, s, "x"),
          yaxis: (null == a ? void 0 : a.y) == s.y && !l && d ? d : this.buildSceneAxis(s.y, s, "y"),
          zaxis: (null == a ? void 0 : a.z) == s.z && !l && h ? h : this.buildSceneAxis(s.z, s, "z")
        })
      });
    }
    analyzeChange(e, t) {
      if (!e) return "all";
      var r = e.plotlyData,
        n = t.plotlyData;
      return r.axes == n.axes && r.layout == n.layout ? "traces" : r.expressions == n.expressions ? "layout" : void 0;
    }
    buildSceneAxis(e, t, r) {
      var n, i, o, s;
      if (null !== (n = t.visible) && void 0 !== n && !n) return {
        range: "auto" != e.range ? [e.range.from, e.range.to] : void 0,
        autorange: "auto" == e.range,
        backgroundcolor: void 0,
        showbackground: !1,
        showaxeslabels: !1,
        title: "",
        showticklabels: !1,
        showgrid: !1,
        zeroline: !1,
        nticks: null !== (s = e.nticks) && void 0 !== s ? s : 0
      };
      var a = !!e.backgroundcolor,
        l = null === (i = e.labels) || void 0 === i || i;
      return {
        range: "auto" != e.range ? [e.range.from, e.range.to] : void 0,
        autorange: "auto" == e.range,
        backgroundcolor: a ? k.A.getHtmlColor(e.backgroundcolor) : void 0,
        showbackground: a,
        showaxeslabels: l,
        title: l ? r : "",
        showticklabels: l,
        showgrid: !0,
        zeroline: !0,
        nticks: null !== (o = e.nticks) && void 0 !== o ? o : 0
      };
    }
    requestPlot(e) {
      var t = this.lastProps,
        r;
      if ("layout" == this.analyzeChange(t, e) && this.lastResponseData) this.handlePlotFinish(this.lastResponseData, t, e);else {
        var n,
          i = e.plotlyData.expressions.filter(e => !e.hidden).map(e => "parametric" == e.type || "parametric-curve" == e.type ? {
            expStr: $h.A.editorModelToExpression(e.model),
            expStr2: $h.A.editorModelToExpression(e.ymodel),
            expStr3: $h.A.editorModelToExpression(e.zmodel),
            expression: e
          } : "vector-field" == e.type ? {
            expStr: $h.A.editorModelToExpression(e.model),
            expStr2: $h.A.editorModelToExpression(e.jmodel),
            expStr3: $h.A.editorModelToExpression(e.kmodel),
            expression: e
          } : {
            expStr: $h.A.editorModelToExpression(e.model),
            expression: e
          });
        this.plotRun.plot3d(i).then(r => {
          "running" != r.status && (this.handlePlotFinish(r.data, t, e), this.lastResponseData = r.data);
        });
      }
    }
    buildTraces(e) {
      return 0 == e.length ? [{
        type: "surface",
        x: [0, 10],
        y: [0, 10],
        z: [[0, 0], [0, 0]],
        showscale: !1,
        hoverinfo: "none",
        opacity: 0
      }] : e.flatMap(e => {
        switch (e.expression.type) {
          case "surface":
            return op.build(e.expression, e.resultdata);
          case "implicit":
            return cp.build(e.expression, e.resultdata);
          case "parametric":
            return up.build(e.expression, e.resultdata);
          case "parametric-curve":
            return mp.build(e.expression, e.resultdata);
          case "point-list":
            return ap.build(e.expression, e.resultdata);
          case "vector":
            return vp.build(e.expression, e.resultdata);
          case "vector-field":
            return xp.build(e.expression, e.resultdata);
        }
      }).filter(e => e);
    }
    render() {
      var e = this.props,
        t = e.positionData,
        r = e.displayModeBar,
        n = this.state.layout;
      return o().createElement(Qh, {
        ignoreOnSceneChangeOnly: this.props.ignoreOnSceneChangeOnly,
        displayModeBar: r,
        containerClassName: "3d-func",
        ref: e => this.basePlotAreaRef = e,
        layout: n,
        positionData: t,
        traces: this.state.traces,
        onRelayout: this.props.onRelayout
      });
    }
  }
  var wp = r(17048);
  class Ep {
    check(e) {
      return new Promise((t, r) => {
        var n = setTimeout(function () {
            r();
          }, 1e4),
          i = document.createElement("img");
        i.onload = function () {
          clearTimeout(n), t();
        }, i.onerror = function () {
          clearTimeout(n), r();
        }, i.src = e.replace("index.html", "imgcheck.png");
      });
    }
  }
  const kp = new Ep();
  function Op(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Dp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Op(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Op(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Pp = Ae.A.getModalDialog();
  class Mp extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        okDisabled: !0
      }), (0, n.A)(this, "iframe", void 0), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "handleOnMessage", e => {
        var t = JSON.parse(e.data);
        this.verifySourceOrigin(e.origin), this.handleAction(t);
      }), (0, n.A)(this, "handleOk", () => {
        this.sendIframeMessage({
          action: "plotly_request_data"
        });
      });
    }
    componentDidMount() {
      b.A.isElectronEnv() || kp.check(this.getIframeUrl()).catch(() => {
        this.unmounted || this.setState({
          errorMsg: "Could not load Plot Library, please try to reopen Dialog or refresh the Page"
        });
      });
    }
    componentWillMount() {
      window.onmessage = this.handleOnMessage;
    }
    componentWillUnmount() {
      window.onmessage == this.handleOnMessage && (window.onmessage = void 0), this.unmounted = !0;
    }
    handleAction(e) {
      if (!this.unmounted) if ("plotly_load_error" != e.action) {
        if ("plotly_loaded" == e.action && L.A.next(() => {
          var e = this.props.plotly.plotlyData;
          this.sendIframeMessage({
            action: "plotly_set_data",
            traces: e.traces,
            layout: e.layout,
            jexcelSource: e.jexcelSource
          });
        }, 100), "plotly_data_loaded" == e.action && (this.setState({
          isHiding: !0
        }), setTimeout(() => {
          this.unmounted || this.setState({
            okDisabled: !1,
            isHiding: !1
          });
        }, 500)), "plotly_data_received" == e.action) {
          var t = Dp(Dp({}, this.props.plotly.plotlyData), {}, {
              jexcelSource: e.jexcelSource,
              traces: e.traces,
              layout: e.layout,
              calculatedMap: e.calculatedMap
            }),
            r = Dp(Dp({}, this.props.plotly), {}, {
              plotlyData: t
            });
          this.props.onOk(r);
        }
      } else this.setState({
        errorMsg: "Could not load Plot Library, please try to reopen Dialog or refresh the Page"
      });
    }
    verifySourceOrigin(e) {
      if ("http://localhost:8080" != e && "math-server://fserver" != e && "math-server://plotlyserver" != e && "https://plotly.mathcha.io" != e && "https://plotly-staging.mathcha.io" != e) throw new Error("wrong origin");
    }
    sendIframeMessage(e) {
      this.iframe.contentWindow.postMessage(JSON.stringify(e), this.getIframeDest());
    }
    getIframeDest() {
      if (b.A.isElectronEnv()) return "math-server://plotlyserver";
      var e = window.location.hostname,
        t = window.location.host;
      return "localhost" == e ? "*" : "www.mathcha.io" == t || "mathcha.io" == t ? "https://plotly.mathcha.io" : "https://plotly-staging.mathcha.io";
    }
    getIframeUrl() {
      if (b.A.isElectronEnv()) return "math-server://plotlyserver/index.html";
      var e = window.location.hostname,
        t = window.location.host;
      return "localhost" == e ? "http://localhost:8080/index.html" : "www.mathcha.io" == t || "mathcha.io" == t ? "https://plotly.mathcha.io/index.html" : "https://plotly-staging.mathcha.io/index.html";
    }
    renderLoading() {
      return this.state.errorMsg ? o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 13,
          color: "var(--ui-danger, #ce0303)",
          background: "rgba(0,0,0,0.4)"
        }
      }, o().createElement("span", {
        style: {
          padding: 5,
          background: "var(--ui-surface, white)"
        }
      }, o().createElement("span", null, o().createElement("i", {
        className: "fa fa-warning",
        style: {
          paddingRight: 5
        }
      })), o().createElement("span", null, this.state.errorMsg))) : this.state.okDisabled ? o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }
      }, o().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "var(--ui-surface-active, #c3c2c2)",
          opacity: this.state.isHiding ? 0 : 1,
          transition: "opacity 0.5s ease-in-out"
        }
      }), this.state.isHiding ? void 0 : o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0
        },
        viewBox: "0 0 540 250"
      }, o().createElement(wp.A, {
        noOverlay: !0,
        width: 540,
        height: 250
      }))) : void 0;
    }
    renderContent() {
      return b.A.graphingDisabled ? o().createElement("div", null, "Graphing disabled") : o().createElement("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          position: "relative"
        }
      }, o().createElement("iframe", {
        ref: e => this.iframe = e,
        src: this.getIframeUrl(),
        width: "100%",
        height: "100%",
        frameBorder: 0
      }), this.renderLoading());
    }
    render() {
      return o().createElement(Pp, {
        show: !0
      }, o().createElement(Se.A, {
        title: "Chart settings",
        size: "wide",
        scroll: "body",
        showlyShow: !0,
        style: Dp({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 1400,
          maxHeight: 900
        }, Ae.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: this.state.okDisabled,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  function Ip(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Tp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ip(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ip(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Lp extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "movingHandler", new It.A()), (0, n.A)(this, "handleMoveRegionMouseDown", (e, t, r) => {
        if (!(r < 0)) {
          var n = u().findDOMNode(this),
            i = this.findDivItems(n)[r],
            o = he.A.getElementRect(i),
            s = this.initFlyInfo(t, r, m.A.getLeftTopFromEvent(e).top - o.top);
          this.movingHandler.setBaseElement(n), this.movingHandler.mouseDown(e, s);
        }
      }), (0, n.A)(this, "handleMoved", () => {
        var e = this.state.fly;
        if (e) {
          var t = this.props.expressions;
          if (e.targetIndex != e.originalIndex) {
            var r = f.A.remove(t, e.originalIndex);
            r = f.A.insert(r, e.targetIndex, e.selectedExp), this.props.onExpressionsChange(r);
          }
          this.setState({
            fly: void 0
          });
        }
      }), (0, n.A)(this, "handleMoving", (e, t, r) => {
        var n = r.customData,
          i = n.restItemSizes,
          o = n.selectedItemSize,
          s = n.targetIndex,
          a = u().findDOMNode(this),
          l = (null == a ? void 0 : a.scrollTop) || 0,
          c = t.y + l,
          d = c - r.customData.yDelta,
          h = this.calculateInsertIndex(i, d + o.height / 2, o, s),
          p = Tp(Tp({}, r.customData), {}, {
            y: c - r.customData.yDelta,
            targetIndex: h
          });
        this.setState({
          fly: p
        });
      }), this.movingHandler.onMoving = this.handleMoving, this.movingHandler.onMoved = this.handleMoved;
    }
    render() {
      return o().createElement("div", {
        style: Tp({
          minWidth: 250,
          paddingTop: 1,
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          flex: 1
        }, this.props.containerStyle)
      }, this.renderExpressionsInput(this.props.expressions));
    }
    renderInput(e, t) {
      return this.props.renderExp(e, t, this.handleMoveRegionMouseDown);
    }
    renderExpressionsInput(e) {
      var t = this.state.fly;
      return t ? this.renderExpMoving(e, t) : e.map(e => this.renderInput(e, void 0));
    }
    renderExpMoving(e, t) {
      var r,
        n = e.filter(e => e != t.selectedExp).flatMap((r, n) => {
          var i = [];
          return t.targetIndex == n && i.push(this.buildGap(t)), i.push(this.renderInput(r, void 0)), n == e.length - 1 && t.targetIndex == n + 1 && i.push(this.buildGap(t)), i;
        });
      return n.push(this.renderInput(t.selectedExp, t)), n;
    }
    buildGap(e) {
      return o().createElement("div", {
        key: "fake-moving",
        style: {
          height: e.selectedItemSize.height,
          width: 1
        }
      });
    }
    findDivItems(e) {
      return E.YG(e, ">div");
    }
    initFlyInfo(e, t, r) {
      var n = u().findDOMNode(this),
        i = this.findDivItems(n).map(e => he.A.getElementClientSize(e)),
        o = i[t];
      return i.splice(t, 1), {
        restItemSizes: i,
        selectedExp: e,
        selectedItemSize: o,
        y: 0,
        yDelta: r,
        targetIndex: t,
        originalIndex: t
      };
    }
    calculateInsertIndex(e, t, r, n) {
      for (var i = 0, o = 0, s = 0; s < e.length + 1; s++) if (s == n) {
        var a = r;
        if (o = 1, t >= i && t < i + a.height) return s;
        i += a.height;
      } else {
        var l = e[s - o];
        if (t >= i && t < i + l.height) return s;
        i += l.height;
      }
      return e.length;
    }
  }
  class Rp {
    wrapMathModel(e) {
      return {
        id: a.w.nextId(),
        lines: [{
          id: a.w.nextId(),
          blocks: [{
            id: a.w.nextId(),
            type: "composite",
            text: "\\math-container",
            elements: {
              mathValue: e
            }
          }]
        }]
      };
    }
    extractMathModel(e) {
      return e.lines[0].blocks[0].elements.mathValue;
    }
    parseOrDefault(e, t) {
      var r = Number.parseFloat(e);
      return null == r || isNaN(r) ? t : r;
    }
  }
  var Bp = new Rp();
  class Fp extends o().Component {
    render() {
      var e = this.props,
        t = e.MathTypeClss,
        r = e.onRootModelChange,
        n = e.rootModel,
        i = {
          padding: 4,
          border: "none",
          marginTop: 0,
          background: "var(--ui-surface, white)",
          flex: 1
        };
      return o().createElement(t, {
        className: "plot-math-input ui-math-input",
        restrictedView: !0,
        oneMode: "math-mode",
        multiline: !1,
        onModelChanged: r,
        model: n,
        insidePlotFunction: !0,
        cursorHiddenOnLostFocus: !0,
        enableContextMenu: !0,
        style: i,
        shouldFocusOnCreated: !1,
        autoCompleteUsingPositionFixed: !0
      });
    }
  }
  function jp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? jp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Np extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleThicknessChanged", e => {
        this.props.onStylesChange(_p(_p({}, this.props.styles), {}, {
          thickness: e
        }));
      }), (0, n.A)(this, "handleStrokeColorChanged", e => {
        this.props.onStylesChange(_p(_p({}, this.props.styles), {}, {
          strokeColor: e
        }));
      }), (0, n.A)(this, "handleStrokeTypeChanged", e => {
        this.props.onStylesChange(_p(_p({}, this.props.styles), {}, {
          strokeType: e
        }));
      }), (0, n.A)(this, "handleFillColorChanged", e => {
        this.props.onStylesChange(_p(_p({}, this.props.styles), {}, {
          fillColor: e
        }));
      });
    }
    render() {
      var e = this.props,
        t = e.styles,
        r = void 0 === t ? {} : t,
        n = e.expanded,
        i = e.renderMoreStyleInput;
      if (!n) return o().createElement("div", null);
      var s = P.A.getStyle(r, "thickness"),
        a = P.A.getStyle(r, "strokeColor"),
        l = P.A.getStyle(r, "strokeType");
      return o().createElement("div", {
        style: {
          padding: 5,
          background: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }
      }, o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(Le.A, {
        value: s,
        onItemSelect: this.handleThicknessChanged,
        style: {
          zIndex: "unset",
          margin: "0 3px"
        },
        useFixedPosition: !0
      }), o().createElement(Re.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        style: {
          zIndex: "unset",
          margin: "0 3px"
        },
        value: a,
        useFixedPosition: !0,
        onItemSelect: this.handleStrokeColorChanged
      }), o().createElement(Ie, {
        style: {
          zIndex: "unset",
          margin: "0 3px"
        },
        useFixedPosition: !0,
        part: l,
        onItemSelect: this.handleStrokeTypeChanged
      }), this.renderFillColor()), i && i());
    }
    renderFillColor() {
      var e = this.props,
        t = e.styles,
        r = void 0 === t ? {} : t,
        n;
      if (e.fillColorEnabled) {
        var i = P.A.getStyle(r, "fillColor");
        return o().createElement(Xe.A, {
          requestPickerSettings: this.props.requestPickerSettings,
          style: {
            zIndex: "unset",
            width: 30,
            height: 25,
            margin: "0 3px"
          },
          useFixedPosition: !0,
          value: i,
          onItemSelect: this.handleFillColorChanged
        });
      }
    }
  }
  class zp extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        mouseEnter: !1
      });
    }
    render() {
      var e = this.props.children(this.state.mouseEnter);
      return o().cloneElement(e, {
        onMouseOver: () => {
          this.state.mouseEnter || this.setState({
            mouseEnter: !0
          });
        },
        onMouseLeave: () => this.setState({
          mouseEnter: !1
        })
      });
    }
  }
  function Hp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Wp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Hp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Vp extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        rootModel: Bp.wrapMathModel(this.props.expression.model),
        confirmDelete: !1
      }), (0, n.A)(this, "handleExpressionModelChange", e => {
        this.props.onExpressionChange(Wp(Wp({}, this.props.expression), {}, {
          model: e.lines[0].blocks[0].elements.mathValue
        }));
      }), (0, n.A)(this, "handleExpStyleChange", e => {
        var t = this.props,
          r = t.expression,
          n;
        (0, t.onExpressionChange)(Wp(Wp({}, r), {}, {
          style: e
        }));
      }), (0, n.A)(this, "handleMathModelChange", e => {
        this.props.onExpressionChange(Wp(Wp({}, this.props.expression), {}, {
          model: e
        }));
      });
    }
    renderPrefix() {
      if (this.props.renderPrefix) return this.props.renderPrefix();
      var e = {
        whiteSpace: "nowrap"
      };
      return o().createElement("span", {
        style: e
      }, this.props.prefixText);
    }
    renderSettings() {
      if (this.props.renderSettings) return this.props.renderSettings();
    }
    renderRightSettings(e) {
      var t = this.state.stylesExpanded;
      return o().createElement("div", null, o().createElement("div", {
        onClick: () => {
          this.setState({
            confirmDelete: !0
          });
        },
        className: "plot-input-style-settings",
        style: {
          position: "absolute",
          right: 2,
          top: 2,
          cursor: "pointer",
          padding: 3,
          visibility: t || e ? "visible" : "hidden"
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        style: {
          fontSize: 15,
          color: "var(--ui-danger, #ce0303)"
        }
      })), o().createElement("div", {
        className: "plot-input-style-settings",
        style: {
          position: "absolute",
          right: 2,
          top: 30,
          cursor: "pointer",
          padding: 3,
          visibility: t || e ? "visible" : "hidden"
        },
        onClick: () => this.setState({
          stylesExpanded: !t
        })
      }, t ? o().createElement("i", {
        className: "fa fa-caret-right",
        style: {
          fontSize: 15,
          transform: "translate(-4px,0px) rotate(-90deg)"
        }
      }) : o().createElement("i", {
        style: {
          fontSize: 12,
          width: 14,
          height: 14,
          lineHeight: "14px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        },
        className: "fa fa-cog"
      })));
    }
    renderMathInput() {
      if (this.props.renderMathInput) {
        var e = this.props,
          t,
          r;
        return (0, e.renderMathInput)(e.expression, this.handleMathModelChange);
      }
      return o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state.rootModel,
        onRootModelChange: this.handleExpressionModelChange
      });
    }
    renderDeleteConfirm() {
      if (this.state.confirmDelete) {
        var e = {
          width: 70,
          margin: "0 10px"
        };
        return o().createElement("div", {
          className: "test-remove-container",
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: "var(--ui-surface, white)",
            zIndex: 999
          }
        }, o().createElement("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            border: "1px solid orange"
          }
        }, o().createElement("div", {
          style: {
            padding: 10
          }
        }, o().createElement("i", {
          style: {
            fontSize: 15,
            verticalAlign: "-2px",
            color: "orange",
            padding: 5
          },
          className: "fa fa-warning"
        }), o().createElement("span", null, "Remove?")), o().createElement("div", {
          style: {
            flex: 1,
            display: "flex",
            justifyContent: "center"
          }
        }, o().createElement("button", {
          onClick: () => {
            this.setState({
              confirmDelete: !1
            });
          },
          style: e,
          className: "btn-normal"
        }, "Cancel"), o().createElement("button", {
          onClick: this.props.onRemove,
          style: e,
          className: "btn-normal"
        }, "Ok"))));
      }
    }
    renderIndicator() {
      if (this.props.plotError) return o().createElement("div", {
        className: "toolbar-container",
        style: {
          width: 14,
          height: 14,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          color: "orange",
          cursor: "default"
        }
      }, o().createElement("i", {
        className: "fa fa-warning"
      }), o().createElement("div", {
        className: "tool-bar-text",
        style: {
          position: "absolute",
          left: 25,
          top: 0,
          margintop: 5,
          color: "orange",
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          fontSize: 12,
          padding: 3,
          width: 220,
          lineHeight: "1.4em"
        }
      }, this.props.genericErrorMessage));
      var e = P.A.getStyle(this.props.expression.style, "strokeColor") || "black",
        t = e => {
          e.stopPropagation(), e.preventDefault(), this.props.onExpressionChange(Wp(Wp({}, this.props.expression), {}, {
            hidden: !this.props.expression.hidden
          }));
        };
      return o().createElement("div", {
        onClick: t,
        style: Wp({
          width: 14,
          height: 14,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: 12,
          backgroundColor: this.props.expression.hidden ? "transparent" : k.A.getHtmlColor(e),
          border: "1px solid var(--ui-border, lightgray)",
          cursor: "pointer"
        }, this.overrideIndicatorStyle())
      });
    }
    overrideIndicatorStyle() {
      if (!this.props.expression.hidden) return this.props.overrideIndicatorStyle ? this.props.overrideIndicatorStyle() : void 0;
    }
    renderStylesInput() {
      var e = this.state.stylesExpanded;
      if (e) {
        if (this.props.renderStylesInput) return this.props.renderStylesInput();
        var t = this.props,
          r = t.expression,
          n = t.renderMoreStyleInput;
        return o().createElement(Np, {
          requestPickerSettings: this.props.requestPickerSettings,
          styles: r.style,
          fillColorEnabled: this.props.showFillColor,
          onStylesChange: this.handleExpStyleChange,
          expanded: e,
          renderMoreStyleInput: n
        });
      }
    }
    render() {
      var e = this.props.flyY,
        t = {
          display: "flex",
          alignItems: "baseline",
          padding: 10,
          fontFamily: O.A.defaultMathUsageFamily(),
          fontSize: 17,
          overflowX: "auto",
          marginRight: 20
        },
        r = {
          display: "flex",
          direction: "row",
          border: "1px solid var(--ui-border, lightgray)",
          marginTop: -1,
          maxWidth: "100%",
          position: "relative"
        };
      return void 0 !== e && (r.position = "absolute", r.left = 0, r.top = e, r.width = "100%", r.zIndex = 9999, r.opacity = .5), o().createElement(zp, null, e => o().createElement("div", {
        className: "test-plot-input-container",
        style: r
      }, o().createElement("div", {
        onMouseDown: this.props.onMoveRegionMouseDown,
        onTouchStart: this.props.onMoveRegionMouseDown,
        className: "test-input-indicator-container",
        style: {
          minWidth: 30,
          position: "relative",
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          cursor: "move",
          zIndex: 100
        }
      }, this.renderIndicator()), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "var(--ui-surface, white)",
          flex: 1,
          minWidth: 50
        }
      }, o().createElement("div", {
        style: t
      }, this.renderPrefix(), this.renderMathInput()), this.renderSettings(), this.renderStylesInput(), this.renderRightSettings(e || b.A.isMobileOrTablet())), this.renderDeleteConfirm()));
    }
  }
  class Up {
    getUnderBorderInputStyle() {
      return {
        border: "none",
        borderBottom: "1px solid lightgray",
        width: 30,
        fontSize: 12,
        textAlign: "center",
        fontFamily: O.A.defaultMathUsageFamily()
      };
    }
  }
  var qp = new Up();
  function Gp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Kp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Gp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Zp extends o().Component {
    render() {
      var e,
        t,
        r,
        n = this.props,
        i = n.range,
        s = n.maxStep,
        a = n.style,
        l = n.varName,
        c = qp.getUnderBorderInputStyle();
      return o().createElement("div", {
        style: Kp({
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          fontSize: 12,
          color: "var(--ui-text, black)",
          background: "var(--ui-surface, white)",
          fontFamily: O.A.defaultMathUsageFamily()
        }, a)
      }, o().createElement("input", {
        defaultValue: (null !== (e = i.from) && void 0 !== e ? e : -10).toString(),
        onChange: e => {
          var t = Number.parseFloat(e.target.value) || 0;
          this.props.onRangeChange(Kp(Kp({}, this.props.range), {}, {
            from: t
          }));
        },
        style: c
      }), o().createElement("span", {
        style: {
          whiteSpace: "pre"
        }
      }, " ⩽ ".concat(l, " ⩽ ")), o().createElement("input", {
        defaultValue: (null !== (t = i.to) && void 0 !== t ? t : 10).toString(),
        onChange: e => {
          var t = Number.parseFloat(e.target.value) || 0;
          this.props.onRangeChange(Kp(Kp({}, this.props.range), {}, {
            to: t
          }));
        },
        style: c
      }), o().createElement("span", {
        style: {
          whiteSpace: "pre",
          paddingLeft: 10
        }
      }, " steps:"), o().createElement("input", {
        defaultValue: (null !== (r = i.step) && void 0 !== r ? r : 2).toString(),
        onChange: e => {
          var t,
            r = h().clamp(null !== (t = Number.parseFloat(e.target.value)) && void 0 !== t ? t : 0, 1, s);
          this.props.onRangeChange(Kp(Kp({}, this.props.range), {}, {
            step: r
          }));
        },
        style: c
      }));
    }
  }
  function Yp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Qp(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Yp(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Jp extends o().Component {
    render() {
      var e = this.props.expression;
      return o().createElement("div", {
        className: "test-xvc",
        style: {
          marginLeft: 10
        }
      }, o().createElement(Zp, {
        range: e.xRange,
        onRangeChange: t => this.props.onExpressionChange(Qp(Qp({}, e), {}, {
          xRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 100,
        varName: "x"
      }), o().createElement(Zp, {
        range: e.yRange,
        onRangeChange: t => this.props.onExpressionChange(Qp(Qp({}, e), {}, {
          yRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 100,
        varName: "y"
      }));
    }
  }
  class Xp {
    toBackgroundImageGradient(e) {
      var t = {
        Greys: [[0, "rgb(0,0,0)"], [1, "rgb(255,255,255)"]],
        YlGnBu: [[0, "rgb(8,29,88)"], [.125, "rgb(37,52,148)"], [.25, "rgb(34,94,168)"], [.375, "rgb(29,145,192)"], [.5, "rgb(65,182,196)"], [.625, "rgb(127,205,187)"], [.75, "rgb(199,233,180)"], [.875, "rgb(237,248,217)"], [1, "rgb(255,255,217)"]],
        Greens: [[0, "rgb(0,68,27)"], [.125, "rgb(0,109,44)"], [.25, "rgb(35,139,69)"], [.375, "rgb(65,171,93)"], [.5, "rgb(116,196,118)"], [.625, "rgb(161,217,155)"], [.75, "rgb(199,233,192)"], [.875, "rgb(229,245,224)"], [1, "rgb(247,252,245)"]],
        YlOrRd: [[0, "rgb(128,0,38)"], [.125, "rgb(189,0,38)"], [.25, "rgb(227,26,28)"], [.375, "rgb(252,78,42)"], [.5, "rgb(253,141,60)"], [.625, "rgb(254,178,76)"], [.75, "rgb(254,217,118)"], [.875, "rgb(255,237,160)"], [1, "rgb(255,255,204)"]],
        Bluered: [[0, "rgb(0,0,255)"], [1, "rgb(255,0,0)"]],
        RdBu: [[0, "rgb(5,10,172)"], [.35, "rgb(106,137,247)"], [.5, "rgb(190,190,190)"], [.6, "rgb(220,170,132)"], [.7, "rgb(230,145,90)"], [1, "rgb(178,10,28)"]],
        Reds: [[0, "rgb(220,220,220)"], [.2, "rgb(245,195,157)"], [.4, "rgb(245,160,105)"], [1, "rgb(178,10,28)"]],
        Blues: [[0, "rgb(5,10,172)"], [.35, "rgb(40,60,190)"], [.5, "rgb(70,100,245)"], [.6, "rgb(90,120,245)"], [.7, "rgb(106,137,247)"], [1, "rgb(220,220,220)"]],
        Picnic: [[0, "rgb(0,0,255)"], [.1, "rgb(51,153,255)"], [.2, "rgb(102,204,255)"], [.3, "rgb(153,204,255)"], [.4, "rgb(204,204,255)"], [.5, "rgb(255,255,255)"], [.6, "rgb(255,204,255)"], [.7, "rgb(255,153,255)"], [.8, "rgb(255,102,204)"], [.9, "rgb(255,102,102)"], [1, "rgb(255,0,0)"]],
        Rainbow: [[0, "rgb(150,0,90)"], [.125, "rgb(0,0,200)"], [.25, "rgb(0,25,255)"], [.375, "rgb(0,152,255)"], [.5, "rgb(44,255,150)"], [.625, "rgb(151,255,0)"], [.75, "rgb(255,234,0)"], [.875, "rgb(255,111,0)"], [1, "rgb(255,0,0)"]],
        Portland: [[0, "rgb(12,51,131)"], [.25, "rgb(10,136,186)"], [.5, "rgb(242,211,56)"], [.75, "rgb(242,143,56)"], [1, "rgb(217,30,30)"]],
        Jet: [[0, "rgb(0,0,131)"], [.125, "rgb(0,60,170)"], [.375, "rgb(5,255,255)"], [.625, "rgb(255,255,0)"], [.875, "rgb(250,0,0)"], [1, "rgb(128,0,0)"]],
        Hot: [[0, "rgb(0,0,0)"], [.3, "rgb(230,0,0)"], [.6, "rgb(255,210,0)"], [1, "rgb(255,255,255)"]],
        Blackbody: [[0, "rgb(0,0,0)"], [.2, "rgb(230,0,0)"], [.4, "rgb(230,210,0)"], [.7, "rgb(255,255,255)"], [1, "rgb(160,200,255)"]],
        Earth: [[0, "rgb(0,0,130)"], [.1, "rgb(0,180,180)"], [.2, "rgb(40,210,40)"], [.4, "rgb(230,230,50)"], [.6, "rgb(120,70,20)"], [1, "rgb(255,255,255)"]],
        Electric: [[0, "rgb(0,0,0)"], [.15, "rgb(30,0,100)"], [.4, "rgb(120,0,100)"], [.6, "rgb(160,90,0)"], [.8, "rgb(230,200,0)"], [1, "rgb(255,250,220)"]],
        Viridis: [[0, "#440154"], [.06274509803921569, "#48186a"], [.12549019607843137, "#472d7b"], [.18823529411764706, "#424086"], [.25098039215686274, "#3b528b"], [.3137254901960784, "#33638d"], [.3764705882352941, "#2c728e"], [.4392156862745098, "#26828e"], [.5019607843137255, "#21918c"], [.5647058823529412, "#1fa088"], [.6274509803921569, "#28ae80"], [.6901960784313725, "#3fbc73"], [.7529411764705882, "#5ec962"], [.8156862745098039, "#84d44b"], [.8784313725490196, "#addc30"], [.9411764705882353, "#d8e219"], [1, "#fde725"]],
        Cividis: [[0, "rgb(0,32,76)"], [.058824, "rgb(0,42,102)"], [.117647, "rgb(0,52,110)"], [.176471, "rgb(39,63,108)"], [.235294, "rgb(60,74,107)"], [.294118, "rgb(76,85,107)"], [.352941, "rgb(91,95,109)"], [.411765, "rgb(104,106,112)"], [.470588, "rgb(117,117,117)"], [.529412, "rgb(131,129,120)"], [.588235, "rgb(146,140,120)"], [.647059, "rgb(161,152,118)"], [.705882, "rgb(176,165,114)"], [.764706, "rgb(192,177,109)"], [.823529, "rgb(209,191,102)"], [.882353, "rgb(225,204,92)"], [.941176, "rgb(243,219,79)"], [1, "rgb(255,233,69)"]]
      };
      if ("string" == typeof e) return this.arrToGradient(t[e]);
      var r = k.A.getHtmlColor(e.value);
      return this.arrToGradient([[0, r], [1, r]]);
    }
    arrToGradient(e) {
      var t = e.map(e => "".concat(e[1], " ").concat(Math.round(100 * e[0]), "%")).join(",");
      return "linear-gradient(".concat(t, ")");
    }
  }
  var $p = new Xp();
  class eu extends o().Component {
    render() {
      var e,
        t = "Greys,YlGnBu,Greens,YlOrRd,Bluered,RdBu,Reds,Blues,Picnic,Rainbow,Portland,Jet,Hot,Blackbody,Earth,Electric,Viridis,Cividis".split(",").map(e => ({
          key: e,
          value: e
        }));
      return t.splice(0, 0, {
        key: "single-color",
        value: "Single Color"
      }), o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement(Ut.A, {
        width: 100,
        itemsStyle: {
          maxHeight: 200,
          overflowY: "auto"
        },
        usePositionFixedOnExpand: !0,
        value: this.resolveColorSelect(),
        data: t,
        onChange: e => {
          "single-color" == e ? this.props.onColorScaleChange({
            type: "color",
            value: [0, 240, 0]
          }) : this.props.onColorScaleChange(e);
        }
      }), this.renderSingleColor());
    }
    renderSingleColor() {
      var e = this.props.colorScale;
      if ("string" != typeof e) return o().createElement(Xe.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        noZIndex: !0,
        disableNoColor: !0,
        style: {
          marginLeft: 10,
          marginTop: -1,
          marginBottom: -2
        },
        useFixedPosition: !0,
        value: e.value,
        onItemSelect: e => this.props.onColorScaleChange({
          type: "color",
          value: e
        })
      });
    }
    resolveColorSelect() {
      var e = this.props.colorScale;
      return "string" == typeof e ? e : "single-color";
    }
  }
  var tu = r(23466);
  function ru(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function nu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ru(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ru(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class iu extends o().Component {
    render() {
      var e = this.props.lighting,
        t = e.ambient,
        r = void 0 === t ? .8 : t,
        n = e.diffuse,
        i = void 0 === n ? .8 : n,
        s = e.specular,
        a = void 0 === s ? .05 : s,
        l = e.roughness,
        c = void 0 === l ? .5 : l,
        d = e.fresnel,
        h = void 0 === d ? .2 : d;
      return o().createElement("div", null, this.renderNumericRow("Ambient", 1, "ambient", r), this.renderNumericRow("Diffuse", 1, "diffuse", i), this.renderNumericRow("Specular", 2, "specular", a), this.renderNumericRow("Roughness", 1, "roughness", c), this.renderNumericRow("Fresnel", 5, "fresnel", h));
    }
    renderNumericRow(e, t, r, n) {
      var i = {
          display: "flex",
          alignItems: "baseline",
          marginTop: 5
        },
        s = {
          display: "inline-block",
          width: 100
        },
        a = {
          padding: 0,
          marginLeft: 0
        };
      return o().createElement("div", {
        style: i
      }, o().createElement("div", {
        style: s
      }, e, ":"), o().createElement($e.A, {
        style: {
          width: 40
        },
        min: 0,
        max: t,
        step: .1,
        decimals: 2,
        value: n,
        containerStyle: a,
        onValueChanged: e => {
          this.props.onLightingChange(nu(nu({}, this.props.lighting), {}, {
            [r]: e
          }));
        }
      }));
    }
  }
  class ou extends o().Component {
    render() {
      var e = [{
        value: "ignore",
        display: () => o().createElement(iu, {
          lighting: this.props.lighting,
          onLightingChange: this.props.onLightingChange
        }),
        noSelect: !0
      }];
      return o().createElement(Nt.A, {
        noZIndex: !0,
        items: e,
        label: "Settings",
        containerStyle: {
          width: 150
        },
        useFixedPosition: !0
      });
    }
  }
  function su(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function au(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? su(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : su(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class lu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderStylesInput", () => {
        var e,
          t,
          r,
          n,
          i,
          s,
          a = this.props,
          l = a.expression,
          c = a.showScaleDisabled,
          d = a.contourDisabled,
          h = a.subTypeDisabled,
          p = [{
            key: "solid",
            value: "Solid"
          }, {
            key: "wireframe",
            value: "Wireframe"
          }],
          u = [{
            key: "none",
            value: "None"
          }, {
            key: "z",
            value: "Z"
          }],
          g = {
            display: "flex",
            alignItems: "baseline",
            marginTop: 5
          },
          m = {
            display: "inline-block",
            width: 100
          },
          f = 100,
          y = {
            padding: 0,
            marginLeft: 0
          };
        return o().createElement("div", {
          className: "test-sti",
          style: {
            paddingBottom: 5,
            paddingLeft: 10,
            backgroundColor: "var(--ui-surface-muted, #f7f7f7)"
          }
        }, this.renderOnEnabled(!h, () => o().createElement("div", {
          style: g
        }, o().createElement("div", {
          style: m
        }, "Type:"), o().createElement(Ut.A, {
          width: f,
          usePositionFixedOnExpand: !0,
          data: p,
          value: l.subType || "solid",
          onChange: e => this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
            subType: e
          }))
        }))), this.renderOnEnabled(!c, () => {
          var e;
          return o().createElement("div", {
            style: g
          }, o().createElement("div", {
            style: m
          }, "Show Scale:"), o().createElement(tu.A, {
            name: "",
            checked: null !== (e = l.showscale) && void 0 !== e && e,
            onValueChanged: e => {
              this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
                showscale: e
              }));
            }
          }));
        }), o().createElement("div", {
          style: g
        }, o().createElement("div", {
          style: m
        }, "Color Scale:"), o().createElement(eu, {
          requestPickerSettings: this.props.requestPickerSettings,
          colorScale: l.colorScale || "RdBu",
          onColorScaleChange: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              colorScale: e
            }));
          }
        })), o().createElement("div", {
          style: g
        }, o().createElement("div", {
          style: m
        }, "Opacity:"), o().createElement($e.A, {
          min: 0,
          max: 1,
          step: .1,
          decimals: 2,
          value: null !== (e = this.props.expression.opacity) && void 0 !== e ? e : 1,
          containerStyle: y,
          onValueChanged: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              opacity: e
            }));
          }
        })), this.renderOnEnabled(!d, () => o().createElement("div", {
          style: g
        }, o().createElement("div", {
          style: m
        }, "Contours:"), o().createElement(Ut.A, {
          width: f,
          usePositionFixedOnExpand: !0,
          data: u,
          value: l.contours || "none",
          onChange: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              contours: e
            }));
          }
        }))), o().createElement("div", {
          style: au(au({}, g), {}, {
            display: "solid" == (null !== (t = l.subType) && void 0 !== t ? t : "solid") ? g.display : "none"
          })
        }, o().createElement("div", {
          style: m
        }, "Show Frame:"), o().createElement(tu.A, {
          name: "",
          checked: null === (r = null === (n = l.solidTypeProps) || void 0 === n ? void 0 : n.showFrame) || void 0 === r || r,
          onValueChanged: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              solidTypeProps: au(au({}, this.props.expression.solidTypeProps), {}, {
                showFrame: e
              })
            }));
          }
        })), this.renderFrameColorInput(g, m), o().createElement("div", {
          style: au(au({}, g), {}, {
            display: "none" != (null !== (i = l.contours) && void 0 !== i ? i : "none") ? "block" : "none"
          })
        }, o().createElement("div", {
          style: m
        }, "Contour Steps:"), o().createElement($e.A, {
          min: 0,
          max: 100,
          step: 1,
          disableSlider: !0,
          containerStyle: au(au({}, y), {}, {
            display: "inline-block"
          }),
          value: null !== (s = this.props.expression.contoursSteps) && void 0 !== s ? s : 40,
          onValueChanged: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              contoursSteps: e
            }));
          }
        })), o().createElement("div", {
          style: g
        }, o().createElement("div", {
          style: m
        }, "Lighting:"), o().createElement(ou, {
          lighting: this.props.expression.lighting || {},
          onLightingChange: e => {
            this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
              lighting: e
            }));
          }
        })));
      });
    }
    render() {
      return this.renderStylesInput();
    }
    renderOnEnabled(e, t) {
      if (e) return t();
    }
    renderFrameColorInput(e, t) {
      var r,
        n,
        i,
        s,
        a,
        l = this.props,
        c = l.expression,
        d = l.frameColorAutoDisabled,
        h = "solid" == (null !== (r = c.subType) && void 0 !== r ? r : "solid"),
        p = null === (n = null === (i = c.solidTypeProps) || void 0 === i ? void 0 : i.showFrame) || void 0 === n || n;
      if (h && p) return d ? o().createElement("div", {
        style: au(au({}, e), {}, {
          display: "block"
        })
      }, o().createElement("div", {
        style: t
      }, "Frame Color:"), this.renderFrameColor(!0)) : o().createElement("div", {
        style: au(au({}, e), {}, {
          display: "block"
        })
      }, o().createElement("div", {
        style: t
      }, "Frame Color:"), o().createElement(tu.A, {
        style: {
          display: "inline-block"
        },
        name: "Auto",
        checked: "use-colorscale" == (null !== (s = null === (a = c.solidTypeProps) || void 0 === a ? void 0 : a.frameColor) && void 0 !== s ? s : "use-colorscale"),
        onValueChanged: e => {
          e ? this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
            solidTypeProps: au(au({}, this.props.expression.solidTypeProps), {}, {
              frameColor: "use-colorscale"
            })
          })) : this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
            solidTypeProps: au(au({}, this.props.expression.solidTypeProps), {}, {
              frameColor: k.A.greenArr
            })
          }));
        }
      }), this.renderFrameColor(!1));
    }
    renderFrameColor(e) {
      var t,
        r,
        n,
        i,
        s = this.props.expression,
        a;
      if (!("use-colorscale" == (null !== (t = null === (r = s.solidTypeProps) || void 0 === r ? void 0 : r.frameColor) && void 0 !== t ? t : "use-colorscale")) || e) return o().createElement(Xe.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        style: {
          marginLeft: e ? -2 : 10,
          verticalAlign: "-3px",
          display: "inline-block"
        },
        noZIndex: !0,
        disableNoColor: !0,
        useFixedPosition: !0,
        value: null !== (n = null === (i = s.solidTypeProps) || void 0 === i ? void 0 : i.frameColor) && void 0 !== n ? n : k.A.greenArr,
        onItemSelect: e => {
          this.props.onExpressionChange(au(au({}, this.props.expression), {}, {
            solidTypeProps: au(au({}, this.props.expression.solidTypeProps), {}, {
              frameColor: e
            })
          }));
        }
      });
    }
  }
  function cu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function du(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? cu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class hu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e,
          t = this.props.expression;
        return {
          backgroundColor: void 0,
          backgroundImage: $p.toBackgroundImageGradient(null !== (e = t.colorScale) && void 0 !== e ? e : "RdBu")
        };
      }), (0, n.A)(this, "renderStylesInput", () => o().createElement(lu, {
        requestPickerSettings: this.props.requestPickerSettings,
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), (0, n.A)(this, "renderSettings", () => o().createElement(Jp, {
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      }));
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, du(du({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderSettings: this.renderSettings,
        renderStylesInput: this.renderStylesInput,
        overrideIndicatorStyle: this.overrideIndicatorStyle,
        prefixText: "z(x,y) = "
      }));
    }
  }
  function pu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function uu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? pu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class gu extends o().Component {
    render() {
      var e = this.props.expression;
      return o().createElement("div", {
        className: "test-xvc",
        style: {
          marginLeft: 10
        }
      }, o().createElement(Zp, {
        range: e.xRange,
        onRangeChange: t => this.props.onExpressionChange(uu(uu({}, e), {}, {
          xRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 50,
        varName: "x"
      }), o().createElement(Zp, {
        range: e.yRange,
        onRangeChange: t => this.props.onExpressionChange(uu(uu({}, e), {}, {
          yRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 50,
        varName: "y"
      }), o().createElement(Zp, {
        range: e.zRange,
        onRangeChange: t => this.props.onExpressionChange(uu(uu({}, e), {}, {
          zRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 50,
        varName: "z"
      }));
    }
  }
  function mu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function fu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? mu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class yu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e,
          t = this.props.expression;
        return {
          backgroundColor: void 0,
          backgroundImage: $p.toBackgroundImageGradient(null !== (e = t.colorScale) && void 0 !== e ? e : "RdBu")
        };
      }), (0, n.A)(this, "renderStylesInput", () => o().createElement(lu, {
        requestPickerSettings: this.props.requestPickerSettings,
        contourDisabled: !0,
        showScaleDisabled: !0,
        frameColorAutoDisabled: !0,
        subTypeDisabled: !0,
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), (0, n.A)(this, "renderSettings", () => o().createElement(gu, {
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      }));
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, fu(fu({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderSettings: this.renderSettings,
        renderStylesInput: this.renderStylesInput,
        overrideIndicatorStyle: this.overrideIndicatorStyle,
        prefixText: "0 = "
      }));
    }
  }
  function vu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function bu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? vu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class xu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e = this.props.expression;
        return {
          backgroundColor: k.A.getHtmlColor(e.color || k.A.greenArr)
        };
      }), (0, n.A)(this, "renderMathInput", (e, t) => {
        var r = e.model.lines[0].blocks[0].text;
        return o().createElement("input", {
          style: {
            fontSize: 17,
            fontFamily: O.A.defaultMathUsageFamily(),
            border: "none",
            width: "100%",
            height: 26
          },
          defaultValue: r,
          onChange: e => {
            this.handleInputChange(e, t);
          }
        });
      }), (0, n.A)(this, "handleInputChange", (e, t) => {
        var r = this.props.expression.model,
          n;
        t(bu(bu({}, r), {}, {
          lines: [bu(bu({}, r.lines[0]), {}, {
            blocks: [bu(bu({}, r.lines[0].blocks[0]), {}, {
              text: e.target.value
            })]
          })]
        }));
      }), (0, n.A)(this, "renderStylesInput", () => {
        var e,
          t,
          r = this.props.expression,
          n = [{
            key: "circle",
            value: "●"
          }, {
            key: "circle-open",
            value: "○"
          }, {
            key: "square",
            value: "■"
          }, {
            key: "square-open",
            value: "□"
          }, {
            key: "diamond",
            value: "◆"
          }, {
            key: "diamond-open",
            value: "◇"
          }, {
            key: "cross",
            value: "+"
          }, {
            key: "x",
            value: "x"
          }, {
            key: "line",
            value: "line"
          }];
        return o().createElement("div", {
          className: "test-sti",
          style: {
            display: "flex",
            alignItems: "center",
            paddingBottom: 5,
            paddingLeft: 5,
            backgroundColor: "var(--ui-surface-muted, #f7f7f7)"
          }
        }, o().createElement(Ut.A, {
          style: {
            margin: "0 3px"
          },
          usePositionFixedOnExpand: !0,
          width: 50,
          data: n,
          value: null !== (e = r.markerSymbol) && void 0 !== e ? e : "circle",
          onChange: e => {
            this.props.onExpressionChange(bu(bu({}, this.props.expression), {}, {
              markerSymbol: e
            }));
          }
        }), o().createElement($e.A, {
          value: null !== (t = r.size) && void 0 !== t ? t : 6,
          containerStyle: {
            paddingTop: 0
          },
          min: 0,
          max: 100,
          decimals: 0,
          onValueChanged: e => {
            this.props.onExpressionChange(bu(bu({}, this.props.expression), {}, {
              size: e
            }));
          }
        }), o().createElement(Xe.A, {
          requestPickerSettings: this.props.requestPickerSettings,
          useFixedPosition: !0,
          value: r.color || k.A.greenArr,
          onItemSelect: e => {
            this.props.onExpressionChange(bu(bu({}, this.props.expression), {}, {
              color: e
            }));
          }
        }));
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, bu(bu({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderStylesInput: this.renderStylesInput,
        renderMathInput: this.renderMathInput,
        overrideIndicatorStyle: this.overrideIndicatorStyle,
        prefixText: "x,y,z = "
      }));
    }
  }
  function Cu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Su(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Cu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Au extends o().Component {
    render() {
      var e = this.props.expression;
      return o().createElement("div", {
        className: "test-xvc",
        style: {
          marginLeft: 10
        }
      }, o().createElement(Zp, {
        range: e.uRange,
        onRangeChange: t => this.props.onExpressionChange(Su(Su({}, e), {}, {
          uRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 100,
        varName: "u"
      }), o().createElement(Zp, {
        range: e.vRange,
        onRangeChange: t => this.props.onExpressionChange(Su(Su({}, e), {}, {
          vRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 100,
        varName: "v"
      }));
    }
  }
  function wu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Eu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ku extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e,
          t = this.props.expression;
        return {
          backgroundColor: void 0,
          backgroundImage: $p.toBackgroundImageGradient(null !== (e = t.colorScale) && void 0 !== e ? e : "RdBu")
        };
      }), (0, n.A)(this, "handleRenderMathInput", () => o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderMathRow("model", "x(u,v) ="), this.renderMathRow("ymodel", "y(u,v) ="), this.renderMathRow("zmodel", "z(u,v) ="))), (0, n.A)(this, "renderSettings", () => o().createElement(Au, {
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), (0, n.A)(this, "renderStylesInput", () => o().createElement(lu, {
        requestPickerSettings: this.props.requestPickerSettings,
        contourDisabled: !0,
        showScaleDisabled: !0,
        frameColorAutoDisabled: !0,
        subTypeDisabled: !0,
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), this.state = {
        model: Bp.wrapMathModel(this.props.expression.model),
        ymodel: Bp.wrapMathModel(this.props.expression.ymodel),
        zmodel: Bp.wrapMathModel(this.props.expression.zmodel)
      };
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, Eu(Eu({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderPrefix: () => {},
        renderMathInput: this.handleRenderMathInput,
        renderSettings: this.renderSettings,
        renderStylesInput: this.renderStylesInput,
        overrideIndicatorStyle: this.overrideIndicatorStyle
      }));
    }
    renderMathRow(e, t) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("span", null, t), o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state[e],
        onRootModelChange: t => {
          this.props.onExpressionChange(Eu(Eu({}, this.props.expression), {}, {
            [e]: t.lines[0].blocks[0].elements.mathValue
          }));
        }
      }));
    }
  }
  function Ou(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Du(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ou(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pu extends o().Component {
    render() {
      var e = this.props.expression;
      return o().createElement("div", {
        className: "test-xvc",
        style: {
          marginLeft: 10
        }
      }, o().createElement(Zp, {
        range: e.uRange,
        onRangeChange: t => this.props.onExpressionChange(Du(Du({}, e), {}, {
          uRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 100,
        varName: "u"
      }));
    }
  }
  function Mu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Iu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Mu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Tu extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e,
          t,
          r = this.props.expression;
        return {
          backgroundColor: void 0,
          backgroundImage: $p.toBackgroundImageGradient(null !== (e = null === (t = r.lineStyle) || void 0 === t ? void 0 : t.colorScale) && void 0 !== e ? e : "RdBu")
        };
      }), (0, n.A)(this, "handleRenderMathInput", () => o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderMathRow("model", "x(u) ="), this.renderMathRow("ymodel", "y(u) ="), this.renderMathRow("zmodel", "z(u) ="))), (0, n.A)(this, "renderSettings", () => o().createElement(Pu, {
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), (0, n.A)(this, "renderStylesInput", () => {
        var e,
          t = {
            display: "flex",
            alignItems: "baseline",
            marginTop: 5
          },
          r = {
            display: "inline-block",
            width: 100
          },
          n = {
            padding: 0,
            marginLeft: 0
          },
          i = this.props.expression.lineStyle,
          s = void 0 === i ? {} : i;
        return o().createElement("div", {
          className: "test-sti",
          style: {
            paddingBottom: 5,
            paddingLeft: 10,
            backgroundColor: "var(--ui-surface-muted, #f7f7f7)"
          }
        }, o().createElement("div", {
          style: t
        }, o().createElement("div", {
          style: r
        }, "Line Width:"), o().createElement($e.A, {
          min: 0,
          max: 1e3,
          step: 1,
          decimals: 0,
          value: null !== (e = s.width) && void 0 !== e ? e : 5,
          containerStyle: n,
          onValueChanged: e => {
            this.props.onExpressionChange(Iu(Iu({}, this.props.expression), {}, {
              lineStyle: Iu(Iu({}, this.props.expression.lineStyle), {}, {
                width: e
              })
            }));
          }
        })), o().createElement("div", {
          style: t
        }, o().createElement("div", {
          style: r
        }, "Color Scale:"), o().createElement(eu, {
          requestPickerSettings: this.props.requestPickerSettings,
          colorScale: s.colorScale || "RdBu",
          onColorScaleChange: e => {
            this.props.onExpressionChange(Iu(Iu({}, this.props.expression), {}, {
              lineStyle: Iu(Iu({}, this.props.expression.lineStyle), {}, {
                colorScale: e
              })
            }));
          }
        })));
      }), this.state = {
        model: Bp.wrapMathModel(this.props.expression.model),
        ymodel: Bp.wrapMathModel(this.props.expression.ymodel),
        zmodel: Bp.wrapMathModel(this.props.expression.zmodel)
      };
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, Iu(Iu({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderPrefix: () => {},
        renderMathInput: this.handleRenderMathInput,
        renderSettings: this.renderSettings,
        renderStylesInput: this.renderStylesInput,
        overrideIndicatorStyle: this.overrideIndicatorStyle
      }));
    }
    renderMathRow(e, t) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("span", null, t), o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state[e],
        onRootModelChange: t => {
          this.props.onExpressionChange(Iu(Iu({}, this.props.expression), {}, {
            [e]: t.lines[0].blocks[0].elements.mathValue
          }));
        }
      }));
    }
  }
  function Lu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ru(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Bu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e = this.props.expression;
        return {
          backgroundColor: k.A.getHtmlColor(e.color || k.A.greenArr)
        };
      }), (0, n.A)(this, "renderSettings", () => {
        var e,
          t = this.props.expression,
          r = qp.getUnderBorderInputStyle();
        return o().createElement("div", {
          className: "test-sti",
          style: {
            display: "flex",
            alignItems: "center",
            paddingBottom: 5,
            paddingLeft: 5,
            fontFamily: O.A.defaultMathUsageFamily(),
            color: "var(--ui-text, black)"
          }
        }, o().createElement("span", null, "Arrow Size: "), o().createElement("input", {
          defaultValue: (null !== (e = t.size) && void 0 !== e ? e : 1).toString(),
          onChange: e => {
            var t = Number.parseFloat(e.target.value) || 0;
            this.props.onExpressionChange(Ru(Ru({}, this.props.expression), {}, {
              size: t
            }));
          },
          style: r
        }));
      }), (0, n.A)(this, "handleInputChange", (e, t) => {
        var r = this.props.expression.model,
          n;
        t(Ru(Ru({}, r), {}, {
          lines: [Ru(Ru({}, r.lines[0]), {}, {
            blocks: [Ru(Ru({}, r.lines[0].blocks[0]), {}, {
              text: e.target.value
            })]
          })]
        }));
      }), (0, n.A)(this, "renderMathInput", (e, t) => {
        var r = e.model.lines[0].blocks[0].text;
        return o().createElement("input", {
          style: {
            fontSize: 17,
            fontFamily: O.A.defaultMathUsageFamily(),
            border: "none",
            width: "100%",
            height: 26
          },
          defaultValue: r,
          onChange: e => {
            this.handleInputChange(e, t);
          }
        });
      }), (0, n.A)(this, "renderStylesInput", () => {
        var e = this.props.expression;
        return o().createElement("div", {
          className: "test-sti",
          style: {
            display: "flex",
            alignItems: "center",
            paddingBottom: 5,
            paddingLeft: 5,
            backgroundColor: "var(--ui-surface-muted, #f7f7f7)"
          }
        }, o().createElement(Xe.A, {
          requestPickerSettings: this.props.requestPickerSettings,
          useFixedPosition: !0,
          value: e.color || k.A.greenArr,
          onItemSelect: e => {
            this.props.onExpressionChange(Ru(Ru({}, this.props.expression), {}, {
              color: e
            }));
          }
        }));
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, Ru(Ru({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression, please make sure input in correct format: (10,20) (30,50)",
        showFillColor: !1,
        prefixText: "(p1) (p2) =",
        renderStylesInput: this.renderStylesInput,
        renderMathInput: this.renderMathInput,
        renderSettings: this.renderSettings,
        overrideIndicatorStyle: this.overrideIndicatorStyle
      }));
    }
  }
  function Fu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function ju(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Fu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class _u extends o().Component {
    render() {
      var e = this.props.expression;
      return o().createElement("div", {
        className: "test-xvc",
        style: {
          marginLeft: 10
        }
      }, o().createElement(Zp, {
        range: e.xRange,
        onRangeChange: t => this.props.onExpressionChange(ju(ju({}, e), {}, {
          xRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 30,
        varName: "x"
      }), o().createElement(Zp, {
        range: e.yRange,
        onRangeChange: t => this.props.onExpressionChange(ju(ju({}, e), {}, {
          yRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 30,
        varName: "y"
      }), o().createElement(Zp, {
        range: e.zRange,
        onRangeChange: t => this.props.onExpressionChange(ju(ju({}, e), {}, {
          zRange: t
        })),
        style: {
          paddingBottom: 10
        },
        maxStep: 30,
        varName: "z"
      }));
    }
  }
  function Nu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function zu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Nu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Hu extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "overrideIndicatorStyle", () => {
        var e,
          t = this.props.expression;
        return {
          backgroundColor: void 0,
          backgroundImage: $p.toBackgroundImageGradient(null !== (e = t.colorScale) && void 0 !== e ? e : "RdBu")
        };
      }), (0, n.A)(this, "renderStyles", () => {
        var e,
          t = this.props.expression,
          r = {
            display: "inline-block",
            width: 100
          },
          n = {
            display: "flex",
            alignItems: "baseline",
            paddingBottom: 3
          };
        return o().createElement("div", {
          className: "test-sti",
          style: {
            marginBottom: 10,
            paddingLeft: 5
          }
        }, o().createElement("div", {
          style: n
        }, o().createElement("div", {
          style: r
        }, "Color Scale:"), o().createElement(eu, {
          requestPickerSettings: this.props.requestPickerSettings,
          colorScale: t.colorScale || "RdBu",
          onColorScaleChange: e => {
            this.props.onExpressionChange(zu(zu({}, this.props.expression), {}, {
              colorScale: e
            }));
          }
        })), o().createElement("div", {
          style: n
        }, o().createElement("div", {
          style: r
        }, "Size Ratio:"), o().createElement("input", {
          style: {
            width: 94
          },
          defaultValue: (null !== (e = t.sizeRatio) && void 0 !== e ? e : .5).toString(),
          onChange: e => {
            var t = Number.parseFloat(e.target.value) || 0;
            this.props.onExpressionChange(zu(zu({}, this.props.expression), {}, {
              sizeRatio: t
            }));
          }
        })));
      }), (0, n.A)(this, "renderSettings", () => o().createElement(_u, {
        expression: this.props.expression,
        onExpressionChange: this.props.onExpressionChange
      })), (0, n.A)(this, "handleRenderMathInput", () => o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderMathRow("model", "i(x,y,z) ="), this.renderMathRow("jmodel", "j(x,y,z) ="), this.renderMathRow("kmodel", "k(x,y,z) ="))), this.state = {
        model: Bp.wrapMathModel(this.props.expression.model),
        jmodel: Bp.wrapMathModel(this.props.expression.jmodel),
        kmodel: Bp.wrapMathModel(this.props.expression.kmodel)
      };
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, zu(zu({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderPrefix: () => {},
        renderMathInput: this.handleRenderMathInput,
        renderSettings: this.renderSettings,
        renderStylesInput: this.renderStyles,
        overrideIndicatorStyle: this.overrideIndicatorStyle
      }));
    }
    renderMathRow(e, t) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("span", null, t), o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state[e],
        onRootModelChange: t => {
          this.props.onExpressionChange(zu(zu({}, this.props.expression), {}, {
            [e]: t.lines[0].blocks[0].elements.mathValue
          }));
        }
      }));
    }
  }
  class Wu extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleRemoveExp", e => {
        this.props.onExpressionsChange(f.A.remove(this.props.expressions, e));
      }), (0, n.A)(this, "renderInput", (e, t, r) => {
        var n,
          i = this.props.plotErrors.find(t => t.modelId == e.model.id),
          s;
        switch (e.type) {
          case "surface":
            s = hu;
            break;
          case "implicit":
            s = yu;
            break;
          case "parametric":
            s = ku;
            break;
          case "parametric-curve":
            s = Tu;
            break;
          case "point-list":
            s = xu;
            break;
          case "vector":
            s = Bu;
            break;
          case "vector-field":
            s = Hu;
        }
        return o().createElement(s, {
          key: e.model.id,
          requestPickerSettings: this.props.requestPickerSettings,
          plotError: i,
          flyY: null == t ? void 0 : t.y,
          MathTypeClss: this.props.MathTypeClss,
          expression: e,
          onExpressionChange: t => {
            var r = this.props.expressions.indexOf(e);
            this.handleExpressionChange(t, r);
          },
          onMoveRegionMouseDown: t => {
            var n = this.props.expressions.indexOf(e);
            r(t, e, n);
          },
          onRemove: () => {
            var t = this.props.expressions.indexOf(e);
            this.handleRemoveExp(t);
          }
        });
      });
    }
    shouldComponentUpdate(e, t) {
      return e.expressions != this.props.expressions || e.plotErrors != this.props.plotErrors || t != this.state;
    }
    render() {
      return o().createElement(Lp, {
        containerStyle: {
          height: "100%"
        },
        expressions: this.props.expressions,
        renderExp: this.renderInput,
        onExpressionsChange: this.props.onExpressionsChange
      });
    }
    handleExpressionChange(e, t) {
      this.props.onExpressionsChange(f.A.setIndex(this.props.expressions, t, e));
    }
  }
  var Vu = r(94320);
  class Uu extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        viewSize: {
          p1: {
            x: 0,
            y: 0
          },
          p2: {
            x: 100,
            y: 100
          }
        }
      }), (0, n.A)(this, "plotAreaContainerResizeObserver", void 0), (0, n.A)(this, "plotAreaContainerHtml", void 0), this.plotAreaContainerResizeObserver = new Vu.t(e => {
        if (!(e.length <= 0)) {
          var t = e[0],
            r = he.A.getElementClientSize(t.target);
          this.setState({
            viewSize: {
              p1: {
                x: 0,
                y: 0
              },
              p2: {
                x: r.width,
                y: r.height
              }
            }
          });
        }
      });
    }
    componentDidMount() {
      this.plotAreaContainerResizeObserver.observe(this.plotAreaContainerHtml);
    }
    componentWillUnmount() {
      this.plotAreaContainerResizeObserver.disconnect();
    }
    render() {
      return o().createElement("div", {
        ref: e => this.plotAreaContainerHtml = e,
        style: {
          flex: 1,
          display: "flex",
          position: "relative"
        }
      }, o().createElement(Ap, {
        ignoreOnSceneChangeOnly: !0,
        plotlyData: this.props.plotly.plotlyData,
        positionData: this.state.viewSize,
        onRendered: this.props.onRendered,
        onRelayout: this.props.onRelayout
      }));
    }
  }
  function qu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Gu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? qu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ku extends o().Component {
    render() {
      var e,
        t = this.props.axes;
      return o().createElement("div", {
        style: {
          marginTop: 10
        }
      }, o().createElement(tu.A, {
        style: {
          marginLeft: 5
        },
        name: "Visible All",
        checked: null === (e = t.visible) || void 0 === e || e,
        onValueChanged: e => this.props.onAxesChange(Gu(Gu({}, t), {}, {
          visible: e
        }))
      }), this.renderAxis("x"), this.renderAxis("y"), this.renderAxis("z"));
    }
    renderAxis(e) {
      var t,
        r,
        n,
        i = this.props.axes,
        s = {
          width: 40,
          display: "inline-block"
        },
        a = i[e],
        l = this.resolveRange(a.range),
        c = {
          paddingLeft: 5,
          paddingRight: 5,
          width: 80,
          display: "inline-block"
        },
        d = {
          marginTop: 3
        },
        h = null === (t = i.visible) || void 0 === t || t,
        p = Gu(Gu({}, d), {}, {
          display: h ? d.display : "none"
        });
      return o().createElement("div", null, o().createElement("div", {
        style: {
          paddingTop: 20,
          paddingLeft: 5
        }
      }, e.toUpperCase(), " Axis"), o().createElement("div", {
        style: p
      }, o().createElement("span", {
        style: c
      }, "Background:"), o().createElement(Xe.A, {
        requestPickerSettings: this.props.requestPickerSettings,
        style: {
          display: "inline-block",
          verticalAlign: -3,
          zIndex: "unset"
        },
        noColorValue: null,
        value: a.backgroundcolor || k.A.whiteArr,
        onItemSelect: t => {
          this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
            backgroundcolor: t
          }));
        }
      })), o().createElement("div", {
        style: p
      }, o().createElement("span", {
        style: c
      }, "Labels:"), o().createElement(tu.A, {
        style: {
          display: "inline-block",
          marginLeft: 3
        },
        name: "",
        checked: null === (r = a.labels) || void 0 === r || r,
        onValueChanged: t => this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
          labels: t
        }))
      })), o().createElement("div", {
        style: p
      }, o().createElement("span", {
        style: c
      }, "Max Ticks:"), o().createElement($e.A, {
        containerStyle: {
          display: "inline-block"
        },
        min: 0,
        max: 100,
        decimals: 0,
        value: null !== (n = a.nticks) && void 0 !== n ? n : 0,
        onValueChanged: t => {
          this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
            nticks: t
          }));
        },
        style: s
      })), o().createElement("div", {
        style: Gu({
          display: "flex",
          alignItems: "baseline"
        }, d)
      }, o().createElement("span", {
        style: c
      }, "Range From: "), o().createElement($e.A, {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        disableSlider: !0,
        disabled: "auto" == a.range,
        value: l[0],
        onValueChanged: t => {
          this.raiseChangeRange(e, "from", t);
        },
        style: s
      }), o().createElement("span", {
        style: Gu(Gu({}, c), {}, {
          width: void 0
        })
      }, "To:"), o().createElement($e.A, {
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        disableSlider: !0,
        disabled: "auto" == a.range,
        value: l[1],
        onValueChanged: t => {
          this.raiseChangeRange(e, "to", t);
        },
        style: s
      }), o().createElement(tu.A, {
        style: {
          marginLeft: 5,
          display: "inline-block"
        },
        name: "Auto",
        checked: "auto" == a.range,
        onValueChanged: t => {
          t ? this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
            range: "auto"
          })) : this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
            range: {
              from: -10,
              to: 10
            }
          }));
        }
      })));
    }
    raiseChangeRange(e, t, r) {
      var n = this.props.axes[e].range;
      "auto" != n && this.raiseChangeAxis(e, e => Gu(Gu({}, e), {}, {
        range: Gu(Gu({}, n), {}, {
          [t]: r
        })
      }));
    }
    raiseChangeAxis(e, t) {
      var r,
        n = t(this.props.axes[e]);
      this.props.onAxesChange(Gu(Gu({}, this.props.axes), {}, {
        [e]: n
      }));
    }
    resolveRange(e) {
      return "auto" == e ? [0, 0, !0] : [e.from, e.to, !1];
    }
  }
  var Zu = r(28783),
    Yu = r(57381);
  function Qu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ju(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Qu(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qu(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Xu = Ae.A.getModalDialog();
  class $u extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        plot: this.props.plot,
        selectedTab: "expression",
        plotErrors: []
      }), (0, n.A)(this, "handleItemSelect", e => {
        var t = Zu.a.create(e);
        this.raisePlotDataChange(e => Ju(Ju({}, e), {}, {
          expressions: e.expressions.concat([t])
        }));
      }), (0, n.A)(this, "renderTabContent", e => {
        var t = this.state.plot.plotlyData;
        switch (e) {
          case "axes":
            return o().createElement(Ku, {
              requestPickerSettings: this.props.requestPickerSettings,
              axes: t.axes,
              onAxesChange: e => {
                this.raisePlotDataChange(t => Ju(Ju({}, t), {}, {
                  axes: e
                }));
              }
            });
          case "expression":
            return o().createElement("div", {
              style: {
                height: "calc(100% - 4px)",
                display: "flex",
                flexDirection: "column"
              }
            }, this.renderTopBar(), o().createElement(Wu, {
              requestPickerSettings: this.props.requestPickerSettings,
              plot: this.state.plot,
              onExpressionsChange: e => {
                this.raisePlotDataChange(t => Ju(Ju({}, t), {}, {
                  expressions: e
                }));
              },
              expressions: t.expressions,
              MathTypeClss: this.props.MathTypeClss,
              plotErrors: this.state.plotErrors
            }));
        }
      }), (0, n.A)(this, "handleRelayout", e => {
        e["scene.camera"] && this.raisePlotDataChange(t => Ju(Ju({}, t), {}, {
          layout: Ju(Ju({}, t.layout), {}, {
            scene: {
              camera: e["scene.camera"]
            }
          })
        }));
      });
    }
    renderTabs() {
      var e = [{
        key: "expression",
        label: "Expressions"
      }, {
        key: "axes",
        label: "Axes"
      }];
      return o().createElement(Bt, {
        tabContainerStyle: {
          height: "100%",
          boxShadow: "none",
          border: "none"
        },
        tabContentStyle: {
          flex: 1,
          minHeight: 0
        },
        tabItemStyle: {
          fontSize: 13,
          paddingLeft: 20,
          paddingRight: 20
        },
        tabItems: e,
        selectedKey: this.state.selectedTab,
        renderTabContent: this.renderTabContent,
        onSelectTabItem: e => {
          this.setState({
            selectedTab: e
          });
        },
        onTabItemsMouseDown: () => {}
      });
    }
    raisePlotDataChange(e) {
      var t,
        r = e(this.state.plot.plotlyData);
      this.setState({
        plot: Ju(Ju({}, this.state.plot), {}, {
          plotlyData: r
        })
      });
    }
    renderTopBar() {
      var e = {
          fontFamily: O.A.defaultMathUsageFamily(),
          color: "var(--ui-text-muted, gray)",
          whiteSpace: "pre"
        },
        t = [{
          value: "surface",
          display: o().createElement("span", null, "Regular", o().createElement("span", {
            style: e
          }, " (z = 2x * y)"))
        }, {
          value: "implicit",
          display: o().createElement("span", null, "Implicit", o().createElement("span", {
            style: e
          }, " (0 = cos(x) + y + z)"))
        }, {
          value: "parametric",
          display: o().createElement("span", null, "Parametric Surface", o().createElement("span", {
            style: e
          }, " (x(u,v) y(u,v) z(u,v))"))
        }, {
          value: "parametric-curve",
          display: o().createElement("span", null, "Parametric Curve", o().createElement("span", {
            style: e
          }, " (x(u) y(u) z(u))"))
        }, {
          value: "point-list",
          display: o().createElement("span", null, "Points", o().createElement("span", {
            style: e
          }, " (4,5,6 1,1,1)"))
        }, {
          value: "vector",
          display: o().createElement("span", null, "Vector", o().createElement("span", {
            style: e
          }, " (1,1,1) (3,3,3)"))
        }, {
          value: "vector-field",
          display: o().createElement("span", null, "Vector Field", o().createElement("span", {
            style: e
          }, " i,j,k"))
        }];
      return o().createElement("div", {
        className: "test-top-bar-container",
        style: {
          zIndex: 110,
          position: "relative"
        }
      }, o().createElement(Nt.A, {
        useFixedPosition: !0,
        style: {
          display: "inline-block",
          margin: 5
        },
        containerStyle: {
          fontSize: 14,
          width: 260,
          background: "var(--ui-surface, white)"
        },
        labelStyle: {
          fontSize: 14
        },
        labelSelectStyle: {
          fontSize: 14
        },
        label: "Add",
        icon: o().createElement("i", {
          className: "fa fa-plus",
          style: {
            paddingRight: 5,
            color: "#4caf4f"
          }
        }),
        items: t,
        onItemSelect: this.handleItemSelect
      }));
    }
    renderContent() {
      return Yu.A.graphingDisabled ? o().createElement("div", null, "Graphing disabled") : o().createElement("div", {
        className: "test-p3df",
        style: {
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          position: "relative",
          display: "flex"
        }
      }, o().createElement("div", {
        style: {
          borderRight: "1px solid var(--ui-border, lightgray)",
          width: 360
        }
      }, this.renderTabs()), o().createElement(Uu, {
        plotly: this.state.plot,
        onRelayout: this.handleRelayout,
        onRendered: e => this.setState({
          plotErrors: e
        })
      }));
    }
    render() {
      return o().createElement(Xu, {
        show: !0
      }, o().createElement(Se.A, {
        title: "3D function plot",
        size: "wide",
        scroll: "body",
        showlyShow: !0,
        style: Ju({
          height: "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 1200,
          maxHeight: 800
        }, Ae.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onClose(this.state.plot);
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        showOk: !Yu.A.graphingDisabled,
        okStyle: {
          width: 100,
          height: 24
        },
        footerStyle: {
          flexShrink: 0
        },
        show: !0
      }, this.renderContent()));
    }
  }
  class eg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "actionQueue", []), (0, n.A)(this, "items", []), (0, n.A)(this, "notifyPlotly", e => {
        "edit" != e.type ? this.actionQueue.push(e) : this.setState({
          plotlyToEdit: e.plotly
        });
      }), (0, n.A)(this, "handlePlotlyConfigOk", e => {
        this.props.onPlotlyChange(e), this.setState({
          plotlyToEdit: void 0
        });
      });
    }
    shouldComponentUpdate(e, t) {
      return this.state != t;
    }
    processPlotly() {
      if (!(this.actionQueue.length <= 0)) {
        var e = this.mergeWithDataItems(this.actionQueue, this.items);
        this.actionQueue = [], this.items = e, this.forceUpdate();
      }
    }
    mergeWithDataItems(e, t) {
      for (var r = function r(n) {
          var i = e[n];
          switch (i.type) {
            case "remove":
              var o = t.findIndex(e => e.id == i.id);
              o >= 0 && t.splice(o, 1);
              break;
            case "change":
              var s = t.findIndex(e => e.id == i.plotly.id);
              if (s >= 0) {
                t[s] = i.plotly;
                break;
              }
              t.push(i.plotly);
          }
        }, n = 0; n < e.length; n++) r(n);
      return t;
    }
    renderSettings() {
      var e;
      if (this.state.plotlyToEdit) return "3d-func" == this.state.plotlyToEdit.plotlyData.type ? o().createElement($u, {
        requestPickerSettings: this.props.requestPickerSettings,
        plot: this.state.plotlyToEdit,
        MathTypeClss: this.props.requestMathTypeClss(),
        onClose: e => {
          e && this.props.onPlotlyChange(e), this.setState({
            plotlyToEdit: void 0
          });
        }
      }) : o().createElement(Mp, {
        plotly: this.state.plotlyToEdit,
        onOk: this.handlePlotlyConfigOk,
        onClose: () => {
          this.setState({
            plotlyToEdit: void 0
          });
        }
      });
    }
    renderPlotly(e) {
      var t = e.plotlyData;
      return "3d-func" == t.type ? o().createElement(Ap, {
        ignoreOnSceneChangeOnly: !1,
        displayModeBar: !1,
        plotlyData: t,
        positionData: e.data,
        key: e.id,
        onRendered: e => {
          console.log(e);
        }
      }) : o().createElement(Jh, {
        plotly: e,
        key: e.id
      });
    }
    render() {
      return o().createElement("div", {
        className: "diagram-plotly-layer",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          fill: "none",
          stroke: "none"
        }
      }, o().createElement("div", null, this.items.map(e => this.renderPlotly(e))), this.renderSettings());
    }
  }
  class tg {
    constructor() {
      (0, n.A)(this, "nextPlotToConfig", void 0);
    }
    setNextPlotConfig(e) {
      this.nextPlotToConfig = e;
    }
    retrieveAndResetNextPlotConfig() {
      if (this.nextPlotToConfig) {
        var e = this.nextPlotToConfig;
        return this.nextPlotToConfig = void 0, e;
      }
    }
  }
  const rg = new tg();
  var ng = r(21774),
    ig = r(32725);
  class og extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "shapeMt", U.A.getCompositeShapeManagementFromType(this.props.shapeType)), (0, n.A)(this, "handleGlobalKey", e => {
        27 == e.event.keyCode && this.props.onFinish(), 13 == e.event.keyCode && this.props.onFinish(this.state.shape);
      }), (0, n.A)(this, "handleMoving", e => {
        if (this.state.firstDownPoint) {
          var t = this.getPointFromEvent(e),
            r = this.shapeMt.insertionPointMove(this.state.firstDownPoint, this.state.shape, t);
          this.setState({
            shape: r
          });
        }
      }), (0, n.A)(this, "handleMouseDown", e => {
        if (e.stopPropagation(), e.preventDefault(), this.state.firstDownPoint) {
          var t = this.shapeMt.insertionPointDown(this.state.firstDownPoint, this.state.shape, this.getPointFromEvent(e));
          t.continue ? this.setState({
            shape: t.shape
          }) : this.props.onFinish();
        } else this.setState({
          firstDownPoint: this.getPointFromEvent(e)
        });
      });
    }
    componentDidMount() {
      ig.A.stack(this.handleGlobalKey);
    }
    componentWillUnmount() {
      ig.A.remove(this.handleGlobalKey);
    }
    getPointFromEvent(e) {
      var t = this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer(),
        r = F.T.getPosFromAbsToElement(m.A.getLeftTopFromEvent(e), this.props.getBaseElement(), t);
      return {
        x: r.left,
        y: r.top
      };
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    renderShape() {
      if (this.state.shape) {
        var e = this.state.shape,
          t = Wi.getEntityHtmlStyleInfo(e, this.props.fixedContextHandler.getDefaultBorderColor(), this.getStyleIdContext()),
          r = this.shapeMt.getComponent();
        return o().createElement(r, {
          key: e.id,
          isSelected: !1,
          isGroupSelected: !1,
          isRemoteSelected: !1,
          remoteSelectedColor: void 0,
          subSelection: void 0,
          shape: e,
          styleInfo: t,
          className: "composite-shape",
          onShapeChanged: ng.A.noopFunc,
          fixedContextHandler: this.props.fixedContextHandler,
          diagramFixedCtxHandler: this.props.diagramFixedCtxHandler,
          onMouseDown: ng.A.noopFunc,
          getBaseElement: this.props.getBaseElement
        });
      }
    }
    render() {
      return o().createElement("svg", {
        style: {
          width: "100%",
          height: "100%",
          cursor: "crosshair"
        },
        onMouseMove: this.handleMoving,
        onMouseDown: this.handleMouseDown
      }, this.renderShape());
    }
  }
  class sg extends o().Component {
    render() {
      var e = this.props,
        t = e.lo,
        r = e.hi,
        n = e.varName,
        i = {
          border: "none",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          width: 30,
          fontSize: 12,
          textAlign: "center",
          fontFamily: O.A.defaultMathUsageFamily()
        };
      return o().createElement("div", {
        className: "test-t-variable-container"
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          fontSize: 12,
          color: "var(--ui-text, black)",
          background: "var(--ui-surface, white)",
          paddingBottom: 10,
          fontFamily: O.A.defaultMathUsageFamily(),
          marginLeft: 10
        }
      }, o().createElement("input", {
        defaultValue: (null != t ? t : "").toString(),
        onChange: e => {
          var t = Bp.parseOrDefault(e.target.value, this.props.unparsedValue);
          this.props.onChange(t, r);
        },
        style: i
      }), o().createElement("span", {
        style: {
          whiteSpace: "pre"
        }
      }, " ⩽ ".concat(n, " ⩽ ")), o().createElement("input", {
        defaultValue: (null != r ? r : "").toString(),
        onChange: e => {
          var r = Bp.parseOrDefault(e.target.value, this.props.unparsedValue);
          this.props.onChange(t, r);
        },
        style: i
      })));
    }
  }
  function ag(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function lg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ag(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class cg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    showExpandView() {
      var e;
      return !!this.props.expression.range;
    }
    renderExpandView() {
      var e,
        t,
        r = this.props.expression;
      return o().createElement(sg, {
        varName: r.switchXToY ? "y" : "x",
        lo: null === (e = r.range) || void 0 === e ? void 0 : e.lo,
        hi: null === (t = r.range) || void 0 === t ? void 0 : t.hi,
        unparsedValue: void 0,
        onChange: (e, t) => {
          this.props.onExpressionChange(lg(lg({}, this.props.expression), {}, {
            range: lg(lg({}, this.props.expression.range), {}, {
              lo: e,
              hi: t
            })
          }));
        }
      });
    }
    render() {
      return this.showExpandView() ? this.renderExpandView() : o().createElement("div", null);
    }
  }
  function dg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function hg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class pg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRenderMoreStyleInput", () => {
        var e = this.props.expression;
        return o().createElement("button", {
          style: {
            marginTop: 2,
            marginLeft: 5
          },
          onClick: () => {
            e.range ? this.props.onExpressionChange(hg(hg({}, e), {}, {
              range: void 0
            })) : this.props.onExpressionChange(hg(hg({}, e), {}, {
              range: {}
            }));
          },
          className: "btn-normal"
        }, e.range ? "Remove Range" : "Specify Range");
      }), (0, n.A)(this, "handleRenderSettings", () => o().createElement(cg, {
        expression: this.props.expression,
        onExpressionChange: e => this.props.onExpressionChange(e)
      })), (0, n.A)(this, "handleComparisonChange", e => {
        var t = this.props.expression,
          r = hg(hg({}, t), {}, {
            comparison: e
          });
        if (!("=" == e || r.style && r.style.fillColor)) {
          var n,
            i,
            o = null !== (n = null === (i = t.style) || void 0 === i ? void 0 : i.strokeColor) && void 0 !== n ? n : "#000",
            s = k.A.colorToArr(o, k.A.blackArr);
          r = hg(hg({}, r), {}, {
            style: hg(hg({}, r.style), {}, {
              fillColor: [s[0], s[1], s[2], .15]
            })
          });
        }
        this.props.onExpressionChange(r);
      }), (0, n.A)(this, "renderPrefix", () => {
        var e = this.props.expression,
          t = [{
            key: "<",
            value: "<"
          }, {
            key: ">",
            value: ">"
          }, {
            key: "=",
            value: "="
          }, {
            key: "≤",
            value: "≤"
          }, {
            key: "≥",
            value: "≥"
          }];
        return o().createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          }
        }, o().createElement("div", {
          className: "test-comparison-select",
          style: {
            display: "flex",
            alignItems: "baseline"
          }
        }, o().createElement("span", null, e.switchXToY ? "x(y)" : "y(x)"), o().createElement(Ut.A, {
          usePositionFixedOnExpand: !0,
          standoutOnHover: !0,
          style: {
            marginLeft: 5
          },
          selectBoxStyle: {
            height: 15,
            fontFamily: "Asana-Math, Asana",
            cursor: "pointer"
          },
          inputStyle: {
            fontFamily: "Asana-Math, Asana",
            fontSize: 17,
            lineHeight: "0.9em",
            color: "var(--ui-text, black)"
          },
          itemsStyle: {
            fontSize: 17,
            fontFamily: "Asana-Math, Asana"
          },
          width: 30,
          data: t,
          value: this.props.expression.comparison || "=",
          onChange: this.handleComparisonChange
        })));
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      var e = this.props.expression;
      return o().createElement(Vp, hg(hg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: e.comparison && "=" != e.comparison,
        renderPrefix: this.renderPrefix,
        renderSettings: this.handleRenderSettings,
        renderMoreStyleInput: this.handleRenderMoreStyleInput
      }));
    }
  }
  function ug(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function gg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ug(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class mg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderSettings", () => {
        var e,
          t,
          r = this.props.expression;
        return o().createElement(sg, {
          varName: "t",
          lo: null !== (e = r.t1) && void 0 !== e ? e : -1,
          hi: null !== (t = r.t2) && void 0 !== t ? t : 1,
          unparsedValue: 0,
          onChange: (e, t) => {
            this.props.onExpressionChange(gg(gg({}, this.props.expression), {}, {
              t1: e,
              t2: t
            }));
          }
        });
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, gg(gg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression, please make sure input in correct format: 2t,3t",
        showFillColor: !1,
        prefixText: "x(t),y(t) =",
        renderSettings: this.renderSettings
      }));
    }
  }
  function fg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function yg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? fg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class vg extends o().Component {
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, yg(yg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression, please make sure input has both x,y: 2x-y-4",
        showFillColor: !1,
        prefixText: "0 ="
      }));
    }
  }
  var bg = r(25005);
  function xg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Cg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Sg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "renderItem", e => "line" == e.key ? o().createElement("svg", {
        style: {
          width: 20,
          height: 10
        }
      }, o().createElement("path", {
        d: "M2,4 L6,8 L10,4 L14,8",
        stroke: "black",
        strokeWidth: "2",
        fill: "none"
      })) : o().createElement("svg", {
        style: {
          width: 20,
          height: 10
        }
      }, bg.I.draw({
        x: 5,
        y: 6
      }, 6, e.key, 0, {
        stroke: "var(--ui-text, black)",
        fill: "var(--ui-text-disabled, lightgray)",
        strokeWidth: 2
      }))), (0, n.A)(this, "renderMoreStyleInput", () => {
        var e,
          t,
          r,
          n = this.props.expression.style,
          i = void 0 === n ? {} : n,
          s = [{
            key: "o",
            value: "o"
          }, {
            key: "r",
            value: "r"
          }, {
            key: "x",
            value: "x"
          }, {
            key: "+",
            value: "+"
          }, {
            key: "-",
            value: "-"
          }, {
            key: "|",
            value: "|"
          }, {
            key: "line",
            value: "Line"
          }];
        return o().createElement("div", {
          className: "test-point-list-specific-container",
          style: {
            display: "flex",
            paddingTop: 2
          }
        }, o().createElement(Ut.A, {
          style: {
            margin: "0 3px"
          },
          usePositionFixedOnExpand: !0,
          width: 50,
          data: s,
          value: null !== (e = i.pType) && void 0 !== e ? e : "o",
          onRenderItem: this.renderItem,
          onRenderValue: this.renderItem,
          onChange: e => {
            this.props.onExpressionChange(Cg(Cg({}, this.props.expression), {}, {
              style: Cg(Cg({}, this.props.expression.style), {}, {
                pType: e
              })
            }));
          }
        }), o().createElement($e.A, {
          containerStyle: {
            paddingTop: 0
          },
          min: 0,
          max: 100,
          step: 1,
          disableSlider: !0,
          value: null !== (t = i.pSize) && void 0 !== t ? t : 6,
          onValueChanged: e => {
            this.props.onExpressionChange(Cg(Cg({}, this.props.expression), {}, {
              style: Cg(Cg({}, this.props.expression.style), {}, {
                pSize: e
              })
            }));
          }
        }));
      }), (0, n.A)(this, "handleInputChange", (e, t) => {
        var r = this.props.expression.model,
          n;
        t(Cg(Cg({}, r), {}, {
          lines: [Cg(Cg({}, r.lines[0]), {}, {
            blocks: [Cg(Cg({}, r.lines[0].blocks[0]), {}, {
              text: e.target.value
            })]
          })]
        }));
      }), (0, n.A)(this, "renderMathInput", (e, t) => {
        var r = e.model.lines[0].blocks[0].text;
        return o().createElement("input", {
          style: {
            fontSize: 17,
            fontFamily: O.A.defaultMathUsageFamily(),
            border: "none",
            width: "100%",
            height: 26
          },
          defaultValue: r,
          onChange: e => {
            this.handleInputChange(e, t);
          }
        });
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, Cg(Cg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression, please make sure input in correct format: 10,20 30,50",
        showFillColor: !0,
        prefixText: "x,y =",
        renderMathInput: this.renderMathInput,
        renderMoreStyleInput: this.renderMoreStyleInput
      }));
    }
  }
  function Ag(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function wg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ag(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ag(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Eg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleRenderMoreStyles", () => {
        var e = this.props.expression,
          t = e.head,
          r = e.tail;
        return o().createElement("div", {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, o().createElement("span", {
          style: {
            marginTop: 1
          }
        }, "Tail:"), o().createElement(lr.A, {
          part: r || "no",
          onItemSelect: e => {
            this.props.onExpressionChange(wg(wg({}, this.props.expression), {}, {
              tail: e
            }));
          }
        }), o().createElement("span", {
          style: {
            marginRight: 4,
            marginLeft: 6,
            marginTop: 1
          }
        }, "Head:"), o().createElement(cr.A, {
          part: t || "no",
          onItemSelect: e => {
            this.props.onExpressionChange(wg(wg({}, this.props.expression), {}, {
              head: e
            }));
          }
        }));
      }), (0, n.A)(this, "handleInputChange", (e, t) => {
        var r = this.props.expression.model,
          n;
        t(wg(wg({}, r), {}, {
          lines: [wg(wg({}, r.lines[0]), {}, {
            blocks: [wg(wg({}, r.lines[0].blocks[0]), {}, {
              text: e.target.value
            })]
          })]
        }));
      }), (0, n.A)(this, "renderMathInput", (e, t) => {
        var r = e.model.lines[0].blocks[0].text;
        return o().createElement("input", {
          style: {
            fontSize: 17,
            fontFamily: O.A.defaultMathUsageFamily(),
            border: "none",
            width: "100%",
            height: 26
          },
          defaultValue: r,
          onChange: e => {
            this.handleInputChange(e, t);
          }
        });
      });
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, wg(wg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression, please make sure input in correct format: (10,20) (30,50)",
        showFillColor: !1,
        prefixText: "(p1) (p2) =",
        renderMathInput: this.renderMathInput,
        renderMoreStyleInput: this.handleRenderMoreStyles
      }));
    }
  }
  function kg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Og(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? kg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Dg extends o().Component {
    render() {
      var e,
        t,
        r,
        n,
        i,
        s = this.props.expression;
      return o().createElement("div", null, o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement(sg, {
        varName: "x",
        lo: null === (e = s.xrange) || void 0 === e ? void 0 : e.lo,
        hi: null === (t = s.xrange) || void 0 === t ? void 0 : t.hi,
        unparsedValue: void 0,
        onChange: (e, t) => {
          this.props.onExpressionChange(Og(Og({}, this.props.expression), {}, {
            xrange: Og(Og({}, this.props.expression.xrange), {}, {
              lo: e,
              hi: t
            })
          }));
        }
      }), this.renderSteps("xstep", "step:")), o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement(sg, {
        varName: "y",
        lo: null === (r = s.yrange) || void 0 === r ? void 0 : r.lo,
        hi: null === (n = s.yrange) || void 0 === n ? void 0 : n.hi,
        unparsedValue: void 0,
        onChange: (e, t) => {
          this.props.onExpressionChange(Og(Og({}, this.props.expression), {}, {
            yrange: Og(Og({}, this.props.expression.yrange), {}, {
              lo: e,
              hi: t
            })
          }));
        }
      }), this.renderSteps("ystep", "step:")), o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          fontFamily: O.A.defaultMathUsageFamily(),
          color: "var(--ui-text, black)",
          marginLeft: 10,
          marginBottom: 5
        }
      }, o().createElement("div", null, "Scale: "), o().createElement("input", {
        style: qp.getUnderBorderInputStyle(),
        defaultValue: (null !== (i = this.props.expression.scale) && void 0 !== i ? i : "").toString(),
        onChange: e => {
          var t = Bp.parseOrDefault(e.target.value, void 0);
          this.props.onExpressionChange(Og(Og({}, this.props.expression), {}, {
            scale: t
          }));
        }
      })));
    }
    renderSteps(e, t) {
      var r,
        n = this.props.expression[e],
        i = {
          border: "none",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          width: 30,
          fontSize: 12,
          textAlign: "center",
          fontFamily: O.A.defaultMathUsageFamily()
        };
      return o().createElement("div", {
        style: {
          fontFamily: O.A.defaultMathUsageFamily(),
          color: "var(--ui-text, black)",
          paddingLeft: 10
        }
      }, o().createElement("span", null, t), o().createElement("input", {
        style: i,
        defaultValue: (null != n ? n : "").toString(),
        onChange: t => {
          var r = Bp.parseOrDefault(t.target.value, void 0);
          this.props.onExpressionChange(Og(Og({}, this.props.expression), {}, {
            [e]: r
          }));
        }
      }));
    }
  }
  function Pg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Mg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Pg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Ig extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleRenderSettings", () => o().createElement(Dg, {
        expression: this.props.expression,
        onExpressionChange: e => this.props.onExpressionChange(e)
      })), (0, n.A)(this, "handleRenderMathInput", () => o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderMathRow("model", "i(x,y) ="), this.renderMathRow("jmodel", "j(x,y) ="))), this.state = {
        model: Bp.wrapMathModel(this.props.expression.model),
        jmodel: Bp.wrapMathModel(this.props.expression.jmodel)
      };
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, Mg(Mg({}, this.props), {}, {
        genericErrorMessage: "Invalid Expression",
        showFillColor: !1,
        renderPrefix: () => {},
        renderMathInput: this.handleRenderMathInput,
        renderSettings: this.handleRenderSettings
      }));
    }
    renderMathRow(e, t) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement("span", null, t), o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state[e],
        onRootModelChange: t => {
          this.props.onExpressionChange(Mg(Mg({}, this.props.expression), {}, {
            [e]: t.lines[0].blocks[0].elements.mathValue
          }));
        }
      }));
    }
  }
  function Tg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Lg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Tg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Rg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    showExpandView() {
      var e;
      return !!this.props.expression.range;
    }
    renderExpandView() {
      var e,
        t,
        r = this.props.expression;
      return o().createElement(sg, {
        varName: r.switchXToY ? "y" : "x",
        lo: null === (e = r.range) || void 0 === e ? void 0 : e.lo,
        hi: null === (t = r.range) || void 0 === t ? void 0 : t.hi,
        unparsedValue: void 0,
        onChange: (e, t) => {
          this.props.onExpressionChange(Lg(Lg({}, this.props.expression), {}, {
            range: Lg(Lg({}, this.props.expression.range), {}, {
              lo: e,
              hi: t
            })
          }));
        }
      });
    }
    render() {
      return this.showExpandView() ? this.renderExpandView() : o().createElement("div", null);
    }
  }
  function Bg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Fg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Bg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class jg extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        lowerRootModel: Bp.wrapMathModel(this.props.expression.model),
        upperRootModel: Bp.wrapMathModel(this.props.expression.upperModel),
        confirmDelete: !1
      }), (0, n.A)(this, "handleLowerModelChange", e => {
        this.props.onExpressionChange(Fg(Fg({}, this.props.expression), {}, {
          model: Bp.extractMathModel(e)
        }));
      }), (0, n.A)(this, "handleUpperModelChange", e => {
        this.props.onExpressionChange(Fg(Fg({}, this.props.expression), {}, {
          upperModel: Bp.extractMathModel(e)
        }));
      }), (0, n.A)(this, "handleExpStyleChange", e => {
        var t = this.props,
          r = t.expression,
          n;
        (0, t.onExpressionChange)(Fg(Fg({}, r), {}, {
          style: e
        }));
      }), (0, n.A)(this, "handleRenderMoreStyleInput", () => {
        var e = this.props.expression;
        return o().createElement("button", {
          style: {
            marginTop: 2,
            marginLeft: 5
          },
          onClick: () => {
            e.range ? this.props.onExpressionChange(Fg(Fg({}, e), {}, {
              range: void 0
            })) : this.props.onExpressionChange(Fg(Fg({}, e), {}, {
              range: {}
            }));
          },
          className: "btn-normal"
        }, e.range ? "Remove Range" : "Specify Range");
      }), (0, n.A)(this, "renderSettings", () => o().createElement(Rg, {
        expression: this.props.expression,
        onExpressionChange: e => this.props.onExpressionChange(e)
      }));
    }
    shouldComponentUpdate(e, t) {
      var r = this.props,
        n = this.state;
      return e.expression !== r.expression || e.flyY !== r.flyY || e.plotError !== r.plotError || t.stylesExpanded !== n.stylesExpanded || t.confirmDelete !== n.confirmDelete;
    }
    renderRightSettings(e) {
      var t = this.state.stylesExpanded;
      return o().createElement("div", null, o().createElement("div", {
        className: "plot-input-style-settings",
        style: {
          position: "absolute",
          right: 2,
          bottom: 2,
          cursor: "pointer",
          padding: 3,
          visibility: t || e ? "visible" : "hidden"
        },
        onClick: () => this.setState({
          stylesExpanded: !t
        })
      }, t ? o().createElement("i", {
        className: "fa fa-caret-right",
        style: {
          fontSize: 15,
          transform: "translate(-4px,0px) rotate(-90deg)"
        }
      }) : o().createElement("i", {
        style: {
          fontSize: 12,
          width: 14,
          height: 14,
          lineHeight: "14px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        },
        className: "fa fa-cog"
      })), o().createElement("div", {
        onClick: () => {
          this.setState({
            confirmDelete: !0
          });
        },
        className: "plot-input-style-settings",
        style: {
          position: "absolute",
          right: 2,
          top: 2,
          cursor: "pointer",
          padding: 3,
          visibility: t || e ? "visible" : "hidden"
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        style: {
          fontSize: 15,
          color: "var(--ui-danger, #ce0303)"
        }
      })));
    }
    renderDeleteConfirm() {
      if (this.state.confirmDelete) {
        var e = {
          width: 70,
          margin: "0 10px"
        };
        return o().createElement("div", {
          className: "test-remove-container",
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid orange",
            padding: "8px 0"
          }
        }, o().createElement("div", {
          style: {
            padding: 10
          }
        }, o().createElement("i", {
          style: {
            fontSize: 15,
            verticalAlign: "-2px",
            color: "orange",
            padding: 5
          },
          className: "fa fa-warning"
        }), o().createElement("span", null, "Remove?")), o().createElement("div", {
          style: {
            display: "flex",
            justifyContent: "center"
          }
        }, o().createElement("button", {
          onClick: () => {
            this.setState({
              confirmDelete: !1
            });
          },
          style: e,
          className: "btn-normal"
        }, "Cancel"), o().createElement("button", {
          onClick: this.props.onRemove,
          style: e,
          className: "btn-normal"
        }, "Ok")));
      }
    }
    renderIndicator() {
      if (this.props.plotError) return o().createElement("div", {
        className: "toolbar-container",
        style: {
          width: 14,
          height: 14,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          color: "orange",
          cursor: "default"
        }
      }, o().createElement("i", {
        className: "fa fa-warning"
      }), o().createElement("div", {
        className: "tool-bar-text",
        style: {
          position: "absolute",
          left: 25,
          top: 0,
          marginTop: 5,
          color: "orange",
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          fontSize: 12,
          padding: 3,
          width: 220,
          lineHeight: "1.4em"
        }
      }, "Invalid Expression"));
      var e = P.A.getStyle(this.props.expression.style, "strokeColor") || "black",
        t = e => {
          e.stopPropagation(), e.preventDefault(), this.props.onExpressionChange(Fg(Fg({}, this.props.expression), {}, {
            hidden: !this.props.expression.hidden
          }));
        };
      return o().createElement("div", {
        onClick: t,
        style: {
          width: 14,
          height: 14,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: 12,
          backgroundColor: this.props.expression.hidden ? "transparent" : k.A.getHtmlColor(e),
          border: "1px solid var(--ui-border, lightgray)",
          cursor: "pointer"
        }
      });
    }
    renderStylesInput() {
      var e = this.state.stylesExpanded;
      if (e) {
        var t = this.props.expression;
        return o().createElement(Np, {
          requestPickerSettings: this.props.requestPickerSettings,
          styles: t.style,
          fillColorEnabled: !0,
          onStylesChange: this.handleExpStyleChange,
          expanded: e,
          renderMoreStyleInput: this.handleRenderMoreStyleInput
        });
      }
    }
    render() {
      var e = this.props,
        t = e.expression,
        r = e.flyY,
        n = e.MathTypeClss,
        i = this.state.stylesExpanded,
        s = t.switchXToY ? "x(y)" : "y(x)",
        a = {
          border: "1px solid var(--ui-border, lightgray)",
          marginTop: -1,
          paddingBottom: i ? 10 : void 0
        };
      return void 0 !== r && (a.position = "absolute", a.left = 0, a.top = r, a.width = "100%", a.zIndex = 9999, a.opacity = .5), o().createElement(zp, null, e => o().createElement("div", {
        className: "base-plot-input",
        style: a
      }, this.state.confirmDelete ? this.renderDeleteConfirm() : this.renderMainContent(e, s, n)));
    }
    renderMainContent(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex"
        }
      }, o().createElement("div", {
        onMouseDown: this.props.onMoveRegionMouseDown,
        onTouchStart: this.props.onMoveRegionMouseDown,
        style: {
          minWidth: 30,
          position: "relative",
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          cursor: "move",
          zIndex: 100,
          flexShrink: 0
        }
      }, this.renderIndicator()), o().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "var(--ui-surface, white)",
          minWidth: 50
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          padding: "8px 10px 4px 10px",
          marginRight: 20
        }
      }, o().createElement("span", {
        style: {
          whiteSpace: "nowrap",
          marginRight: 5,
          fontSize: 13,
          color: "var(--ui-text-disabled, #ccc)"
        }
      }, t, " ", ">"), o().createElement(Fp, {
        MathTypeClss: r,
        rootModel: this.state.lowerRootModel,
        onRootModelChange: this.handleLowerModelChange
      })), o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          padding: "4px 10px 8px 10px",
          marginRight: 20
        }
      }, o().createElement("span", {
        style: {
          whiteSpace: "nowrap",
          marginRight: 5,
          fontSize: 13,
          color: "var(--ui-text-disabled, #ccc)"
        }
      }, t, " ", "<"), o().createElement(Fp, {
        MathTypeClss: r,
        rootModel: this.state.upperRootModel,
        onRootModelChange: this.handleUpperModelChange
      })), this.renderRightSettings(e), this.renderStylesInput(), this.renderSettings()));
    }
  }
  function _g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ng(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var zg = {
    border: "none",
    borderBottom: "1px solid var(--ui-border, lightgray)",
    fontSize: 12,
    textAlign: "center"
  };
  function Hg(e) {
    var t = parseFloat(e);
    if (isNaN(t)) return 1;
    var r = e.indexOf(".");
    if (-1 === r) return 1;
    var n = e.length - r - 1;
    return Math.pow(10, -n);
  }
  class Wg extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleFocus", e => {
        this.setState({
          isFocused: !0,
          editingValue: this.props.value.toString()
        }), e.target.select();
      }), (0, n.A)(this, "handleBlur", () => {
        this.setState({
          isFocused: !1
        });
      }), (0, n.A)(this, "handleChange", e => {
        var t = this.props,
          r = t.value,
          n = t.isInteger,
          i = t.min,
          o = t.max,
          s = t.onChange,
          a = e.target.value;
        this.setState({
          editingValue: a
        });
        var l = Bp.parseOrDefault(a, r);
        n && (l = Math.round(l)), void 0 !== i && (l = Math.max(i, l)), void 0 !== o && (l = Math.min(o, l)), s(l);
      }), (0, n.A)(this, "handleKeyDown", e => {
        var t;
        if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
          var r = this.props,
            n = r.value,
            i = r.isInteger,
            o = r.min,
            s = r.max,
            a = r.onChange;
          e.preventDefault();
          var l = this.state.editingValue,
            c = Hg(l),
            d = Bp.parseOrDefault(l, n),
            h = "ArrowUp" === e.key ? d + c : d - c;
          i && (h = Math.round(h)), void 0 !== o && (h = Math.max(o, h)), void 0 !== s && (h = Math.min(s, h));
          var p = l.includes(".") && (null === (t = l.split(".")[1]) || void 0 === t ? void 0 : t.length) || 0,
            u = (h = parseFloat(h.toFixed(Math.max(p, i ? 0 : 2)))).toString();
          this.setState({
            editingValue: u
          }), a(h);
        }
      }), this.state = {
        isFocused: !1,
        editingValue: e.value.toString()
      };
    }
    render() {
      var e = this.props,
        t = e.value,
        r = e.width,
        n = void 0 === r ? 50 : r,
        i = e.style,
        s = this.state,
        a = s.isFocused,
        l = s.editingValue,
        c = a ? l : t.toString();
      return o().createElement("input", {
        style: Ng(Ng({}, zg), {}, {
          width: n
        }, i),
        value: c,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });
    }
  }
  var Vg = r(60441),
    Ug = r(86562),
    qg = ["color"],
    Gg = ["boundaryColor"];
  function Kg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Zg(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Kg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Yg = {
      fontSize: 12,
      color: "var(--ui-text, black)",
      marginRight: 5
    },
    Qg = {
      display: "flex",
      alignItems: "center",
      marginBottom: 5,
      marginLeft: 10
    };
  class Jg extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "handleModeChange", e => {
        this.setState({
          clickToAddMode: e
        });
      }), (0, n.A)(this, "toggleClickToAddMode", () => {
        var e = this.props.expression.model.id;
        this.state.clickToAddMode ? Vg.T.deactivateMode() : Vg.T.activateMode(e);
      }), (0, n.A)(this, "handleDiscClick", (e, t, r) => {
        var n,
          i = this.props.expression,
          o = null !== (n = i.trajectories) && void 0 !== n ? n : [],
          s = {
            x0: t,
            y0: r
          };
        this.props.onExpressionChange(Zg(Zg({}, i), {}, {
          trajectories: [...o, s]
        })), Vg.T.deactivateMode();
      }), (0, n.A)(this, "handleToggleVisibility", e => {
        var t,
          r = this.props.expression,
          n = [...(null !== (t = r.trajectories) && void 0 !== t ? t : [])],
          i = n[e];
        n[e] = Zg(Zg({}, i), {}, {
          visible: !1 === i.visible
        }), this.props.onExpressionChange(Zg(Zg({}, r), {}, {
          trajectories: n
        }));
      }), (0, n.A)(this, "handleColorChange", (e, t) => {
        var r,
          n = this.props.expression,
          i = [...(null !== (r = n.trajectories) && void 0 !== r ? r : [])];
        i[e] = Zg(Zg({}, i[e]), {}, {
          color: t
        }), this.props.onExpressionChange(Zg(Zg({}, n), {}, {
          trajectories: i
        }));
      }), (0, n.A)(this, "handleClearColor", e => {
        var t,
          r = this.props.expression,
          n = [...(null !== (t = r.trajectories) && void 0 !== t ? t : [])],
          i = n[e],
          o = i.color,
          s = (0, Ne.A)(i, qg);
        n[e] = s, this.props.onExpressionChange(Zg(Zg({}, r), {}, {
          trajectories: n
        }));
      }), (0, n.A)(this, "handleToggleBoundaryVisibility", () => {
        var e = this.props.expression;
        this.props.onExpressionChange(Zg(Zg({}, e), {}, {
          showBoundary: !1 === e.showBoundary
        }));
      }), (0, n.A)(this, "handleBoundaryColorChange", e => {
        var t = this.props.expression;
        this.props.onExpressionChange(Zg(Zg({}, t), {}, {
          boundaryColor: e
        }));
      }), (0, n.A)(this, "handleClearBoundaryColor", () => {
        var e = this.props.expression,
          t = e.boundaryColor,
          r = (0, Ne.A)(e, Gg);
        this.props.onExpressionChange(r);
      }), (0, n.A)(this, "handleAddTrajectory", () => {
        var e,
          t = this.props.expression,
          r = null !== (e = t.trajectories) && void 0 !== e ? e : [],
          n = 2 * Math.random() * Math.PI,
          i = .7 * Math.random(),
          o = e => Math.round(1e4 * e) / 1e4,
          s = {
            x0: o(i * Math.cos(n)),
            y0: o(i * Math.sin(n))
          };
        this.props.onExpressionChange(Zg(Zg({}, t), {}, {
          trajectories: [...r, s]
        }));
      }), (0, n.A)(this, "handleRemoveTrajectory", e => {
        var t,
          r = this.props.expression,
          n = [...(null !== (t = r.trajectories) && void 0 !== t ? t : [])];
        n.splice(e, 1), this.props.onExpressionChange(Zg(Zg({}, r), {}, {
          trajectories: n
        }));
      }), (0, n.A)(this, "handleTrajectoryChange", (e, t, r) => {
        var n,
          i = this.props.expression,
          o = [...(null !== (n = i.trajectories) && void 0 !== n ? n : [])];
        o[e] = Zg(Zg({}, o[e]), {}, {
          [t]: r
        });
        var s = o[e],
          a = s.x0 * s.x0 + s.y0 * s.y0;
        if (a > .98) {
          var l = Math.sqrt(.98 / a),
            c = e => Math.round(1e6 * e) / 1e6;
          o[e] = Zg(Zg({}, s), {}, {
            x0: c(s.x0 * l),
            y0: c(s.y0 * l)
          });
        }
        this.props.onExpressionChange(Zg(Zg({}, i), {}, {
          trajectories: o
        }));
      }), this.state = {
        clickToAddMode: !1
      };
    }
    componentDidMount() {
      var e = this.props.expression.model.id;
      Vg.T.register(e, this.handleDiscClick, this.handleModeChange);
    }
    componentWillUnmount() {
      var e = this.props.expression.model.id;
      Vg.T.deactivateMode(), Vg.T.unregister(e);
    }
    render() {
      var e,
        t,
        r = null !== (e = this.props.expression.trajectories) && void 0 !== e ? e : [];
      return o().createElement("div", null, o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, #eee)",
          paddingTop: 8
        }
      }, o().createElement("div", {
        style: Zg(Zg({}, Qg), {}, {
          justifyContent: "space-between"
        })
      }, o().createElement("span", {
        style: Zg(Zg({}, Yg), {}, {
          fontWeight: "bold"
        })
      }, "Trajectories (", r.length, ")"), o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          marginRight: 10,
          gap: 8
        }
      }, o().createElement("button", {
        className: "btn btn-normal",
        style: {
          fontSize: 11,
          padding: "3px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        },
        onClick: this.toggleClickToAddMode,
        title: "Click inside the disc to add a trajectory"
      }, o().createElement("i", {
        className: "fa fa-mouse-pointer"
      }), this.state.clickToAddMode ? "Click Disc..." : "Click to Add"), o().createElement("button", {
        className: "btn btn-normal",
        style: {
          fontSize: 11,
          padding: "3px 8px",
          display: "flex",
          alignItems: "center",
          gap: 4
        },
        onClick: this.handleAddTrajectory
      }, o().createElement("i", {
        className: "fa fa-plus"
      }), "Add"))), this.renderBoundaryRow(), r.map((e, t) => this.renderTrajectoryRow(e, t)), 0 === r.length && o().createElement("div", {
        style: Zg(Zg({}, Qg), {}, {
          color: "var(--ui-text-muted, #999)",
          fontSize: 11
        })
      }, this.state.clickToAddMode ? "Click inside the disc to add a trajectory." : 'Use "Click to Add" or "Add" to create trajectories.')));
    }
    renderBoundaryRow() {
      var e,
        t,
        r = this.props.expression,
        n = !1 !== r.showBoundary,
        i = k.A.colorToArr(null === (e = r.style) || void 0 === e ? void 0 : e.strokeColor, k.A.greenArr),
        s = null !== (t = r.boundaryColor) && void 0 !== t ? t : i,
        a = null != r.boundaryColor;
      return o().createElement("div", {
        style: Zg(Zg({}, Qg), {}, {
          marginBottom: 10
        })
      }, o().createElement("div", {
        onClick: this.handleToggleBoundaryVisibility,
        style: {
          cursor: "pointer",
          padding: "0 5px",
          marginRight: 3,
          display: "flex",
          alignItems: "center"
        },
        title: n ? "Hide boundary" : "Show boundary"
      }, n ? o().createElement("i", {
        className: "fa fa-eye",
        style: {
          fontSize: 14,
          color: "var(--ui-text-muted, #666)"
        }
      }) : o().createElement("i", {
        className: "fa fa-eye-slash",
        style: {
          fontSize: 14,
          color: "var(--ui-text-disabled, #ccc)"
        }
      })), o().createElement("span", {
        style: Zg(Zg({}, Yg), {}, {
          minWidth: 60
        })
      }, "Boundary"), o().createElement("div", {
        style: {
          marginLeft: 8,
          display: "flex",
          alignItems: "center",
          position: "relative"
        },
        title: a ? "Click to change color" : "Using main color (click to override)"
      }, o().createElement(Xe.A, {
        noZIndex: !0,
        value: s,
        showEmpty: !a,
        itemStyle: {
          width: 22,
          height: 18,
          opacity: a ? 1 : .5,
          marginTop: -5
        },
        noHoverBorder: !0,
        useFixedPosition: !0,
        requestPickerSettings: this.props.requestPickerSettings,
        onItemSelect: e => {
          "none" === e || void 0 === e ? this.handleClearBoundaryColor() : this.handleBoundaryColorChange(e);
        }
      })), o().createElement("div", {
        style: {
          marginLeft: "auto",
          marginRight: 4,
          width: 25
        }
      }));
    }
    renderTrajectoryRow(e, t) {
      var r,
        n,
        i = !1 !== e.visible,
        s = k.A.colorToArr(null === (r = this.props.expression.style) || void 0 === r ? void 0 : r.strokeColor, k.A.greenArr),
        a = null !== (n = e.color) && void 0 !== n ? n : s,
        l = null != e.color,
        c = this.props.expression.model.id;
      return o().createElement(zp, {
        key: t
      }, r => {
        var n = Ug.a.getState(c).hoveredTrajectoryIndex;
        return r && n !== t ? setTimeout(() => Ug.a.setHoveredTrajectory(c, t), 0) : r || n !== t || setTimeout(() => Ug.a.setHoveredTrajectory(c, void 0), 0), o().createElement("div", {
          style: Qg
        }, o().createElement("div", {
          onClick: () => this.handleToggleVisibility(t),
          style: {
            cursor: "pointer",
            padding: "0 5px",
            marginRight: 3,
            display: "flex",
            alignItems: "center"
          },
          title: i ? "Hide trajectory" : "Show trajectory"
        }, i ? o().createElement("i", {
          className: "fa fa-eye",
          style: {
            fontSize: 14,
            color: "var(--ui-text-muted, #666)"
          }
        }) : o().createElement("i", {
          className: "fa fa-eye-slash",
          style: {
            fontSize: 14,
            color: "var(--ui-text-disabled, #ccc)"
          }
        })), o().createElement("span", {
          style: Zg(Zg({}, Yg), {}, {
            width: 20
          })
        }, "#", t + 1), o().createElement("span", {
          style: Yg
        }, "X:"), o().createElement(Wg, {
          width: 60,
          min: -.99,
          max: .99,
          value: e.x0,
          onChange: e => this.handleTrajectoryChange(t, "x0", e)
        }), o().createElement("span", {
          style: Zg(Zg({}, Yg), {}, {
            marginLeft: 8
          })
        }, "Y:"), o().createElement(Wg, {
          width: 60,
          min: -.99,
          max: .99,
          value: e.y0,
          onChange: e => this.handleTrajectoryChange(t, "y0", e)
        }), o().createElement("div", {
          style: {
            marginBottom: 10,
            marginLeft: 8,
            display: "flex",
            alignItems: "center",
            position: "relative"
          },
          title: l ? "Click to change color" : "Using main color (click to override)"
        }, o().createElement(Xe.A, {
          noZIndex: !0,
          value: a,
          showEmpty: !l,
          itemStyle: {
            width: 22,
            height: 18,
            opacity: l ? 1 : .5
          },
          noHoverBorder: !0,
          useFixedPosition: !0,
          requestPickerSettings: this.props.requestPickerSettings,
          onItemSelect: e => {
            "none" === e || void 0 === e ? this.handleClearColor(t) : this.handleColorChange(t, e);
          }
        })), o().createElement("div", {
          className: "icon-action-delete",
          onClick: () => this.handleRemoveTrajectory(t),
          style: {
            cursor: "pointer",
            padding: "5px 6px",
            marginLeft: "auto",
            marginRight: 4,
            visibility: r ? "visible" : "hidden"
          },
          title: "Remove trajectory"
        }, o().createElement("i", {
          className: "fa fa-times",
          style: {
            fontSize: 13,
            color: "var(--ui-danger, #ce0303)"
          }
        })));
      });
    }
  }
  function Xg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function $g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Xg(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xg(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class em extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "arrowStyleItems", [{
        key: "mid",
        value: "Middle"
      }, {
        key: "end",
        value: "End"
      }, {
        key: "none",
        value: "None"
      }]), (0, n.A)(this, "handleRenderMoreStyleInput", () => {
        var e,
          t,
          r,
          n,
          i,
          s = this.props.expression,
          a = {
            fontSize: 12,
            color: "var(--ui-text, black)",
            marginRight: 5
          },
          l = {
            display: "flex",
            alignItems: "center",
            marginTop: 5
          },
          c = [221, 0, 0],
          d = [255, 153, 0],
          h = s.model.id;
        return o().createElement("div", null, o().createElement("div", {
          style: l
        }, o().createElement("div", {
          style: {
            whiteSpace: "nowrap",
            minWidth: 85
          }
        }, o().createElement(tu.A, {
          checked: null !== (e = s.showEquilibria) && void 0 !== e && e,
          onValueChanged: e => {
            this.props.onExpressionChange($g($g({}, s), {}, {
              showEquilibria: e
            }));
          },
          name: "Equilibria"
        })), o().createElement("div", {
          style: {
            display: "flex",
            gap: 12,
            marginLeft: 8
          }
        }, Array.from({
          length: 7
        }).map((e, t) => {
          var r,
            n,
            i,
            a = null !== (n = (null !== (r = s.equilibriaColors) && void 0 !== r ? r : [])[t]) && void 0 !== n ? n : c;
          return o().createElement("div", {
            key: t,
            onMouseEnter: () => {
              Ug.a.setHoveredEquilibria(h, t);
            },
            onMouseLeave: () => {
              Ug.a.setHoveredEquilibria(h, void 0);
            }
          }, o().createElement(Xe.A, {
            value: a,
            itemStyle: {
              width: 16,
              height: 16
            },
            shape: "circle",
            noHoverBorder: !0,
            useFixedPosition: !0,
            noZIndex: !0,
            requestPickerSettings: this.props.requestPickerSettings,
            onItemSelect: e => {
              if ("none" === e || void 0 === e) {
                var r,
                  n = [...(null !== (r = s.equilibriaColors) && void 0 !== r ? r : [])];
                n[t] = c, this.props.onExpressionChange($g($g({}, s), {}, {
                  equilibriaColors: n
                }));
              } else {
                var i,
                  o = [...(null !== (i = s.equilibriaColors) && void 0 !== i ? i : Array(7).fill(c))];
                o[t] = e, this.props.onExpressionChange($g($g({}, s), {}, {
                  equilibriaColors: o
                }));
              }
            }
          }));
        }))), o().createElement("div", {
          style: l
        }, o().createElement("div", {
          style: {
            whiteSpace: "nowrap",
            minWidth: 85
          }
        }, o().createElement(tu.A, {
          checked: null === (t = s.showBoundaryEquilibria) || void 0 === t || t,
          onValueChanged: e => {
            this.props.onExpressionChange($g($g({}, s), {}, {
              showBoundaryEquilibria: e
            }));
          },
          name: "∞ Equilibria"
        })), o().createElement("div", {
          style: {
            display: "flex",
            gap: 12,
            marginLeft: 8
          }
        }, Array.from({
          length: 7
        }).map((e, t) => {
          var r,
            n,
            i,
            a = null !== (n = (null !== (r = s.boundaryEquilibriaColors) && void 0 !== r ? r : [])[t]) && void 0 !== n ? n : d;
          return o().createElement("div", {
            key: t,
            onMouseEnter: () => {
              Ug.a.setHoveredBoundaryEquilibria(h, t);
            },
            onMouseLeave: () => {
              Ug.a.setHoveredBoundaryEquilibria(h, void 0);
            }
          }, o().createElement(Xe.A, {
            value: a,
            itemStyle: {
              width: 16,
              height: 16
            },
            shape: "circle",
            noHoverBorder: !0,
            useFixedPosition: !0,
            noZIndex: !0,
            requestPickerSettings: this.props.requestPickerSettings,
            onItemSelect: e => {
              if ("none" === e || void 0 === e) {
                var r,
                  n = [...(null !== (r = s.boundaryEquilibriaColors) && void 0 !== r ? r : [])];
                n[t] = d, this.props.onExpressionChange($g($g({}, s), {}, {
                  boundaryEquilibriaColors: n
                }));
              } else {
                var i,
                  o = [...(null !== (i = s.boundaryEquilibriaColors) && void 0 !== i ? i : Array(7).fill(d))];
                o[t] = e, this.props.onExpressionChange($g($g({}, s), {}, {
                  boundaryEquilibriaColors: o
                }));
              }
            }
          }));
        }))), o().createElement("div", {
          style: $g($g({}, l), {}, {
            marginTop: 12
          })
        }, o().createElement("span", {
          style: a
        }, "Arrow:"), o().createElement(Ut.A, {
          usePositionFixedOnExpand: !0,
          width: 80,
          data: this.arrowStyleItems,
          value: null !== (r = s.arrowStyle) && void 0 !== r ? r : "mid",
          onChange: e => {
            this.props.onExpressionChange($g($g({}, s), {}, {
              arrowStyle: e
            }));
          }
        })), o().createElement("div", {
          style: l
        }, o().createElement("span", {
          style: a
        }, "Step size:"), o().createElement(Wg, {
          value: null !== (n = s.stepSize) && void 0 !== n ? n : .01,
          onChange: e => {
            this.props.onExpressionChange($g($g({}, s), {}, {
              stepSize: e
            }));
          }
        }), o().createElement("span", {
          style: $g($g({}, a), {}, {
            marginLeft: 15
          })
        }, "Max steps:"), o().createElement(Wg, {
          width: 60,
          isInteger: !0,
          value: null !== (i = s.maxSteps) && void 0 !== i ? i : 2e3,
          onChange: e => {
            this.props.onExpressionChange($g($g({}, s), {}, {
              maxSteps: e
            }));
          }
        })));
      }), (0, n.A)(this, "handleRenderSettings", () => o().createElement(Jg, {
        expression: this.props.expression,
        onExpressionChange: e => this.props.onExpressionChange(e),
        requestPickerSettings: this.props.requestPickerSettings
      })), (0, n.A)(this, "handleRenderMathInput", () => o().createElement("div", {
        style: {
          flex: 1
        }
      }, this.renderMathRow("model", "P(x,y) = dx/dt ="), this.renderMathRow("qmodel", "Q(x,y) = dy/dt ="))), this.state = {
        model: Bp.wrapMathModel(this.props.expression.model),
        qmodel: Bp.wrapMathModel(this.props.expression.qmodel)
      };
    }
    shouldComponentUpdate(e) {
      var t = this.props;
      return e.expression != t.expression || e.flyY != t.flyY || e.plotError != t.plotError;
    }
    render() {
      return o().createElement(Vp, $g($g({}, this.props), {}, {
        genericErrorMessage: "Invalid ODE Expression",
        showFillColor: !1,
        renderPrefix: () => {},
        renderMathInput: this.handleRenderMathInput,
        renderSettings: this.handleRenderSettings,
        renderMoreStyleInput: this.handleRenderMoreStyleInput
      }));
    }
    renderMathRow(e, t) {
      return o().createElement("div", {
        style: {
          display: "flex",
          alignItems: "baseline",
          marginBottom: 3
        }
      }, o().createElement("span", {
        style: {
          fontFamily: "system-ui",
          fontSize: 12,
          color: "var(--ui-text, #333)",
          whiteSpace: "nowrap",
          marginRight: 5
        }
      }, t), o().createElement(Fp, {
        MathTypeClss: this.props.MathTypeClss,
        rootModel: this.state[e],
        onRootModelChange: t => {
          this.props.onExpressionChange($g($g({}, this.props.expression), {}, {
            [e]: t.lines[0].blocks[0].elements.mathValue
          }));
        }
      }));
    }
  }
  class tm extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleRemoveExp", e => {
        this.props.onExpressionsChange(f.A.remove(this.props.expressions, e));
      }), (0, n.A)(this, "renderInput", (e, t, r) => {
        var n,
          i = this.props.plotErrors.find(t => t.modelId == e.model.id),
          s;
        if (e.type) switch (e.type) {
          case "parametric":
            s = mg;
            break;
          case "implicit":
            s = vg;
            break;
          case "point-list":
            s = Sg;
            break;
          case "vector":
            s = Eg;
            break;
          case "vector-field":
            s = Ig;
            break;
          case "bounded-inequality":
            s = jg;
            break;
          case "poincare-disc":
            s = em;
        } else s = pg;
        return o().createElement(s, {
          requestPickerSettings: this.props.requestPickerSettings,
          key: e.model.id,
          plotError: i,
          flyY: null == t ? void 0 : t.y,
          MathTypeClss: this.props.MathTypeClss,
          expression: e,
          onExpressionChange: t => {
            var r = this.props.expressions.indexOf(e);
            this.handleExpressionChange(t, r);
          },
          onMoveRegionMouseDown: t => {
            var n = this.props.expressions.indexOf(e);
            r(t, e, n);
          },
          onRemove: () => {
            var t = this.props.expressions.indexOf(e);
            this.handleRemoveExp(t);
          }
        });
      });
    }
    shouldComponentUpdate(e, t) {
      return e.expressions != this.props.expressions || e.plotErrors != this.props.plotErrors || t != this.state;
    }
    render() {
      return o().createElement(Lp, {
        expressions: this.props.expressions,
        renderExp: this.renderInput,
        onExpressionsChange: this.props.onExpressionsChange
      });
    }
    handleExpressionChange(e, t) {
      this.props.onExpressionsChange(f.A.setIndex(this.props.expressions, t, e));
    }
  }
  var rm = r(51737);
  class nm {
    constructor() {
      (0, n.A)(this, "latexParser", new rm.A());
    }
    create(e, t) {
      switch (e) {
        case "regular":
          var r = this.pickColor(t);
          return {
            type: void 0,
            model: this.wrapMathModel("2x"),
            style: {
              thickness: 2,
              strokeColor: k.A.setAlpha(r, .8),
              fillColor: k.A.setAlpha(r, .15)
            }
          };
        case "inequality":
          var n = this.pickColor(t);
          return {
            type: void 0,
            model: this.wrapMathModel("2x"),
            comparison: ">",
            style: {
              thickness: 2,
              strokeColor: k.A.setAlpha(n, .8),
              fillColor: k.A.setAlpha(n, .15)
            }
          };
        case "bounded-inequality":
          var i = this.pickColor(t);
          return {
            type: "bounded-inequality",
            model: this.wrapMathModel("x^2", !0),
            upperModel: this.wrapMathModel("x+2"),
            style: {
              thickness: 2,
              strokeColor: k.A.setAlpha(i, .8),
              fillColor: k.A.setAlpha(i, .15)
            }
          };
        case "parametric":
          return {
            type: "parametric",
            model: this.wrapMathModel("5sin(2t),5cos(2t)"),
            style: {
              thickness: 2,
              strokeColor: this.pickColor(t)
            }
          };
        case "xtermy":
          var o = this.pickColor(t);
          return {
            type: void 0,
            model: this.wrapMathModel("2y"),
            switchXToY: !0,
            style: {
              thickness: 2,
              strokeColor: k.A.setAlpha(o, .8),
              fillColor: k.A.setAlpha(o, .15)
            }
          };
        case "implicit":
          return {
            type: "implicit",
            model: this.wrapMathModel("x+cos(2y)"),
            style: {
              thickness: 2,
              strokeColor: this.pickColor(t)
            }
          };
        case "point-list":
          var s = this.pickColor(t);
          return {
            type: "point-list",
            model: this.wrapMathModel("3,5 -6,8"),
            style: {
              thickness: 3,
              strokeColor: k.A.setAlpha(s, .8),
              fillColor: k.A.setAlpha(s, .15),
              pSize: 8
            }
          };
        case "vector":
          var a = this.pickColor(t);
          return {
            type: "vector",
            model: this.wrapMathModel("(1,1) (6,9)"),
            head: "f>",
            style: {
              thickness: 2,
              strokeColor: a
            }
          };
        case "vector-field":
          var l = this.pickColor(t);
          return {
            type: "vector-field",
            model: this.wrapMathModel("x+y"),
            jmodel: this.wrapMathModel("x+y"),
            xstep: 10,
            ystep: 10,
            xrange: {
              lo: -5,
              hi: 5
            },
            yrange: {
              lo: -5,
              hi: 5
            },
            scale: .05,
            style: {
              thickness: 2,
              strokeColor: l
            }
          };
        case "poincare-disc":
          var c = this.pickColor(t);
          return {
            type: "poincare-disc",
            model: this.wrapMathModel("y"),
            qmodel: this.wrapMathModel("-x-x^3", !0),
            stepSize: .01,
            maxSteps: 2e3,
            showEquilibria: !0,
            arrowStyle: "mid",
            trajectories: [],
            style: {
              thickness: 2,
              strokeColor: c
            }
          };
      }
    }
    pickColor(e) {
      var t = ["#4480c2", "#3cb44b", "#f58231", "#9d28c0", "#d64366", "#f032e6", "#46f0f0", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080", "#ffe119", "#4363d8", "#000000"];
      return k.A.colorToArr(t[e % t.length], k.A.blackArr);
    }
    wrapMathModel(e, t) {
      if (t) {
        var r = this.latexParser.parse(e, "MathExpression");
        return {
          id: a.w.nextId(),
          lines: r.length > 0 ? r : [{
            id: a.w.nextId(),
            blocks: [{
              id: a.w.nextId(),
              text: e
            }]
          }]
        };
      }
      return {
        id: a.w.nextId(),
        lines: [{
          id: a.w.nextId(),
          blocks: [{
            id: a.w.nextId(),
            text: e
          }]
        }]
      };
    }
  }
  var im = new nm();
  class om {
    getAddActionItems() {
      var e = {
        fontFamily: O.A.defaultMathUsageFamily(),
        color: "var(--ui-text-muted, gray)",
        whiteSpace: "pre"
      };
      return [{
        value: "regular",
        display: o().createElement("span", null, "Regular Plot", o().createElement("span", {
          style: e
        }, " (y = 2x)"))
      }, {
        value: "inequality",
        display: o().createElement("span", null, "Inequality Plot", o().createElement("span", {
          style: e
        }, " ", "(y > 2x)"))
      }, {
        value: "bounded-inequality",
        display: o().createElement("span", null, "Bounded Region", o().createElement("span", {
          style: e
        }, " ", "(f(x) < y < g(x))"))
      }, {
        value: "xtermy",
        display: o().createElement("span", null, "X in term of Y", o().createElement("span", {
          style: e
        }, " (x = 2y)"))
      }, {
        value: "parametric",
        display: o().createElement("span", null, "Parametric", o().createElement("span", {
          style: e
        }, " (sin(t),cos(t))"))
      }, {
        value: "implicit",
        display: o().createElement("span", null, "Implicit", o().createElement("span", {
          style: e
        }, " (0 = x + cos(2y))"))
      }, {
        value: "point-list",
        display: o().createElement("span", null, "Points", o().createElement("span", {
          style: e
        }, " (4,5 6,7 )"))
      }, {
        value: "vector",
        display: o().createElement("span", null, "Vectors", o().createElement("span", {
          style: e
        }, " (1,2) (5,6)"))
      }, {
        value: "vector-field",
        display: o().createElement("span", null, "Vector Field", o().createElement("span", {
          style: e
        }, " i(x,y), j(x,y)"))
      }, {
        value: "poincare-disc",
        display: o().createElement("span", null, "Poincaré Disc", o().createElement("span", {
          style: e
        }, " dx/dt=P, dy/dt=Q"))
      }];
    }
    getTabItems() {
      return [{
        key: "expression",
        label: "Expressions"
      }, {
        key: "axes",
        label: "Axes"
      }, {
        key: "x-axis",
        label: "X Axis"
      }, {
        key: "y-axis",
        label: "Y Axis"
      }];
    }
  }
  class sm extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleAxisTypeChanged", e => {
        var t = e.key,
          r = this.props,
          n = r.axes,
          i,
          o;
        (0, r.onAxesChanged)(D.A.setSetting(n, "axisType", t));
      }), (0, n.A)(this, "handleAxisArrangmentChanged", e => {
        var t = e.key,
          r = this.props,
          n = r.axes,
          i,
          o;
        (0, r.onAxesChanged)(D.A.setSetting(n, "axisArrangement", t));
      }), (0, n.A)(this, "handleArrowModeChanged", e => {
        var t = e.key,
          r = this.props,
          n = r.axes,
          i,
          o;
        (0, r.onAxesChanged)(D.A.setSetting(n, "arrowMode", t));
      });
    }
    shouldComponentUpdate(e) {
      return e.axes != this.props.axes;
    }
    handleChangeAxisSetting(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i = this.props,
        o = i.axes,
        s = i.onAxesChanged,
        a = D.A.setSetting(o[e] || {}, t, r),
        l;
      n.dependTo && r && !a.settings[n.dependTo] && (a = D.A.setSetting(a, n.dependTo, !0)), (n.dependFroms || []).forEach(e => {
        !r && a.settings[e] && (a = D.A.setSetting(a, e, !1));
      }), s(f.A.setProp(o, e, a));
    }
    renderAxesTab() {
      var e = this.props.axes,
        t = e.xAxis || {},
        r = e.yAxis || {},
        n = D.A.getPlotSettings(e, "axisType"),
        i = D.A.getPlotSettings(t, "scale"),
        s = D.A.getPlotSettings(r, "scale"),
        a = D.A.getPlotSettings(e, "axisArrangement"),
        l = D.A.getPlotSettings(e, "arrowMode"),
        c = {
          display: "inline-block",
          width: 90,
          paddingTop: 10,
          paddingBottom: 10
        };
      return o().createElement("div", {
        style: {
          margin: 10,
          fontSize: 12
        }
      }, o().createElement("div", null, o().createElement("span", {
        style: c
      }, "Axes Type:")), o().createElement("div", null, o().createElement(Je.A, {
        style: {
          fontSize: 12,
          display: "inline-block",
          lineHeight: "1.2em",
          marginLeft: 4
        },
        preventDefault: !0,
        stopPropagation: !0,
        selectedKeys: [n],
        onSelect: this.handleAxisTypeChanged,
        items: am
      })), o().createElement("div", {
        style: {
          marginTop: 5
        }
      }, o().createElement("div", null, o().createElement("span", {
        style: c
      }, "Arrangement:")), o().createElement(Je.A, {
        disabled: "school" != n,
        style: {
          fontSize: 12,
          display: "inline-block",
          lineHeight: "1.2em",
          marginLeft: 4
        },
        preventDefault: !0,
        stopPropagation: !0,
        selectedKeys: [a],
        onSelect: this.handleAxisArrangmentChanged,
        items: lm
      })), o().createElement("div", {
        style: {
          marginTop: 5
        }
      }, o().createElement("div", null, o().createElement("span", {
        style: c
      }, "Arrows:")), o().createElement(Je.A, {
        disabled: "school" != n,
        style: {
          fontSize: 12,
          display: "inline-block",
          lineHeight: "1.2em",
          marginLeft: 4
        },
        preventDefault: !0,
        stopPropagation: !0,
        selectedKeys: [l],
        onSelect: this.handleArrowModeChanged,
        items: cm
      })), o().createElement("div", {
        style: {}
      }, o().createElement("div", null, o().createElement("span", {
        style: c
      }, "Scale:")), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline"
        }
      }, o().createElement($e.A, {
        title: "Scale",
        decimals: 1,
        containerStyle: {
          paddingTop: 0,
          marginLeft: 2
        },
        style: {
          width: 50
        },
        unit: "px",
        min: .1,
        max: 500,
        step: .1,
        value: i,
        onValueChanging: e => this.handleChangeAxisSetting("xAxis", "scale", e),
        onValueChanged: e => this.handleChangeAxisSetting("xAxis", "scale", e)
      }), o().createElement($e.A, {
        title: "Scale",
        decimals: 1,
        containerStyle: {
          paddingTop: 0,
          marginLeft: 4
        },
        style: {
          width: 46
        },
        unit: "px",
        min: .1,
        max: 500,
        step: .1,
        value: s,
        onValueChanging: e => this.handleChangeAxisSetting("yAxis", "scale", e),
        onValueChanged: e => this.handleChangeAxisSetting("yAxis", "scale", e)
      }))));
    }
    render() {
      return this.renderAxesTab();
    }
  }
  var am = [{
      key: "school",
      style: {
        width: 70,
        textAlign: "center"
      },
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "School")
    }, {
      style: {
        marginLeft: 4,
        width: 70,
        textAlign: "center"
      },
      key: "scientific",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Scientific")
    }, {
      style: {
        marginLeft: 4,
        textAlign: "center"
      },
      key: "scientific-clean",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Scientific Clean")
    }],
    lm = [{
      key: "axis-plot-label",
      style: {
        width: 70,
        textAlign: "center"
      },
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Label Top")
    }, {
      style: {
        marginLeft: 4,
        width: 70,
        textAlign: "center"
      },
      key: "axis-label-plot",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Plot Top")
    }, {
      style: {
        marginLeft: 4,
        textAlign: "center"
      },
      key: "plot-axis-label",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Axis Top")
    }],
    cm = [{
      key: "positive",
      style: {
        width: 90,
        textAlign: "center"
      },
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Positive Only")
    }, {
      style: {
        marginLeft: 4,
        width: 90,
        textAlign: "center"
      },
      key: "both",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "Both Ends")
    }, {
      style: {
        marginLeft: 4,
        width: 60,
        textAlign: "center"
      },
      key: "none",
      element: o().createElement("span", {
        style: {
          padding: 4,
          lineHeight: "!5px"
        }
      }, "None")
    }];
  function dm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function hm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? dm(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dm(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class pm extends o().PureComponent {
    shouldComponentUpdate(e) {
      return e.axis != this.props.axis;
    }
    handleChangeAxisSetting(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = this.props,
        i = n.axis,
        o = n.onAxisChanged,
        s = D.A.setSetting(i || {}, e, t);
      r.dependTo && t && !s.settings[r.dependTo] && (s = D.A.setSetting(s, r.dependTo, !0)), (r.dependFroms || []).forEach(e => {
        !t && s.settings[e] && (s = D.A.setSetting(s, e, !1));
      }), o(s);
    }
    renderMajorTickCountInput(e, t, r) {
      var n = "auto" == r ? 1 : r,
        i = "auto" == r;
      return o().createElement("div", {
        style: {
          display: "inline-block"
        }
      }, o().createElement($e.A, {
        title: "Number of steps",
        velocity: .1,
        containerStyle: {
          paddingTop: 4,
          marginLeft: 2,
          display: "inline-block"
        },
        style: {
          width: 25
        },
        unit: "",
        min: 1,
        max: 40,
        step: 1,
        value: n,
        disabled: i || !e && !t,
        onValueChanging: e => this.handleChangeAxisSetting("majorSteps", e),
        onValueChanged: e => this.handleChangeAxisSetting("majorSteps", e)
      }), o().createElement(tu.A, {
        style: {
          display: "inline-block"
        },
        name: "Auto",
        checked: i,
        onValueChanged: e => {
          e ? this.handleChangeAxisSetting("majorSteps", "auto") : this.handleChangeAxisSetting("majorSteps", 5);
        }
      }));
    }
    renderMajorTickCount(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "inline-block"
        }
      }, o().createElement("span", {
        style: {
          position: "relative",
          display: "inline-block"
        },
        className: "toolbar-container"
      }, o().createElement("span", null, "Count:"), o().createElement("span", {
        style: {
          padding: "0 5px",
          color: "lightblue"
        }
      }, o().createElement("i", {
        className: "fa fa-info-circle"
      }), o().createElement("div", {
        className: "tool-bar-text",
        style: {
          position: "absolute",
          top: "100%",
          margintop: 5,
          color: "orange",
          background: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          textAlign: "center",
          fontSize: 12,
          padding: 3,
          width: 220,
          lineHeight: "1.4em"
        }
      }, "Number of Tick is just approximate"))), this.renderMajorTickCountInput(e, t, r));
    }
    renderMinorTickCount(e, t, r) {
      return o().createElement("div", {
        style: {
          display: "flex",
          width: 100
        }
      }, o().createElement("span", {
        style: {
          width: 55
        }
      }, "Count:"), o().createElement($e.A, {
        title: "Number of minor steps between steps",
        velocity: .1,
        containerStyle: {
          paddingTop: 4,
          marginLeft: 2
        },
        style: {
          width: 25
        },
        unit: "",
        min: 1,
        max: 20,
        step: 1,
        value: r,
        disabled: !e && !t,
        onValueChanging: e => this.handleChangeAxisSetting("minorStep", e),
        onValueChanged: e => this.handleChangeAxisSetting("minorStep", e)
      }));
    }
    renderAxis() {
      var e = this.props.axis || {},
        t = D.A.getPlotSettings(e, "plotAxisShow"),
        r = D.A.getPlotSettings(e, "plotAxisNumering"),
        n = D.A.getPlotSettings(e, "plotGridShow"),
        i = D.A.getPlotSettings(e, "majorSteps"),
        s = D.A.getPlotSettings(e, "majorTextColor"),
        a = D.A.getPlotSettings(e, "majorTextFontSize"),
        l = D.A.getPlotSettings(e, "minorTickShow"),
        c = D.A.getPlotSettings(e, "minorGridShow"),
        d = D.A.getPlotSettings(e, "minorStep"),
        h = D.A.getPlotSettings(e, "unitType"),
        p = D.A.getPlotSettings(e, "axisColor"),
        u = "horizontal" == this.props.gridOrientation ? re.A.gridY : re.A.gridX,
        g = D.A.getPlotSettings(e, "axisThickness"),
        m = D.A.getPlotSettings(e, "majorTickThickness"),
        f = D.A.getPlotSettings(e, "minorTickThickness"),
        y = 35,
        v = this.props.fixedContextHandler.getMtFuncs();
      return o().createElement("div", {
        style: mm
      }, o().createElement("div", null, o().createElement("span", {
        style: {
          width: 70,
          display: "inline-block"
        }
      }, "Axis:")), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: y
        }
      }, o().createElement(Ut.A, {
        width: 70,
        style: {
          position: "relative",
          lineHeight: "1.4em",
          marginTop: 3,
          marginLeft: 5
        },
        inputStyle: {
          color: "var(--ui-text, black)"
        },
        data: um,
        value: h,
        onChange: e => this.handleChangeAxisSetting("unitType", e)
      }), o().createElement(Re.A, {
        requestPickerSettings: v.requestColorPickerSettings,
        useFixedPosition: !0,
        style: {
          stroke: "none",
          lineHeight: "1.4em",
          marginLeft: 4
        },
        value: p,
        onItemSelect: e => this.handleChangeAxisSetting("axisColor", e)
      }), o().createElement(Le.A, {
        noZIndex: !0,
        useFixedPosition: !0,
        supportHalfPixel: !0,
        style: {
          marginLeft: 4
        },
        value: g,
        onItemSelect: e => this.handleChangeAxisSetting("axisThickness", e)
      })), o().createElement("div", null, o().createElement("span", {
        style: {
          width: 70,
          display: "inline-block"
        }
      }, "Major Ticks:")), o().createElement("div", {
        className: "tw:flex",
        style: {
          height: y
        }
      }, o().createElement("div", {
        style: {
          display: "inline-block",
          width: 80,
          verticalAlign: "-6px"
        }
      }, o().createElement("item", {
        title: "Enable Axis",
        onMouseDown: () => {
          this.handleChangeAxisSetting("plotAxisShow", !t, {
            dependFroms: ["plotAxisNumering", "minorTickShow"]
          });
        },
        className: I()("setting", {
          selected: t
        }),
        style: hm(hm({}, fm), {}, {
          display: "inline-block"
        })
      }, re.A.axis), o().createElement("item", {
        title: "Grid",
        onMouseDown: () => this.handleChangeAxisSetting("plotGridShow", !n, {
          dependFroms: ["minorGridShow"]
        }),
        className: I()("setting", {
          selected: n
        }),
        style: hm(hm({}, fm), {}, {
          display: "inline-block"
        })
      }, u)), o().createElement(Le.A, {
        title: "Major tick and grid thickness",
        noZIndex: !0,
        useFixedPosition: !0,
        supportHalfPixel: !0,
        style: {
          marginRight: 4
        },
        value: null != m ? m : g,
        onItemSelect: e => this.handleChangeAxisSetting("majorTickThickness", e)
      }), this.renderMajorTickCount(t, n, i)), o().createElement("div", null, o().createElement("span", {
        style: {
          width: 64
        }
      }, "Numering:")), o().createElement("div", {
        style: {
          display: "flex",
          height: y
        }
      }, o().createElement("item", {
        title: "Show Number",
        onMouseDown: () => this.handleChangeAxisSetting("plotAxisNumering", !r, {
          dependTo: "plotAxisShow"
        }),
        className: I()("setting", {
          selected: r
        }),
        style: fm
      }, se.A.svgNumberIcon()), o().createElement(Dr.A, {
        requestPickerSettings: v.requestColorPickerSettings,
        useFixedPosition: !0,
        style: {
          stroke: "none",
          lineHeight: "1.4em"
        },
        value: s,
        onItemSelect: e => this.handleChangeAxisSetting("majorTextColor", e)
      }), o().createElement(Ut.A, {
        useFixedPosition: !0,
        width: 50,
        style: {
          position: "relative",
          lineHeight: "1.4em",
          marginTop: 3,
          marginLeft: 5
        },
        inputStyle: {
          color: "var(--ui-text, black)"
        },
        data: gm,
        value: a,
        onChange: e => this.handleChangeAxisSetting("majorTextFontSize", Number.parseInt(e.toString(), 10))
      })), o().createElement("div", null, o().createElement("span", {
        style: {
          width: 70,
          display: "inline-block"
        }
      }, "Minor Ticks:")), o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: y
        }
      }, o().createElement("div", {
        style: {
          display: "flex",
          width: 80
        }
      }, o().createElement("item", {
        title: "Enable Axis",
        onMouseDown: () => {
          this.handleChangeAxisSetting("minorTickShow", !l, {
            dependTo: "plotAxisShow"
          });
        },
        className: I()("setting", {
          selected: l
        }),
        style: fm
      }, re.A.axis), o().createElement("item", {
        title: "Grid",
        onMouseDown: () => this.handleChangeAxisSetting("minorGridShow", !c, {
          dependTo: "plotGridShow"
        }),
        className: I()("setting", {
          selected: c
        }),
        style: fm
      }, u)), o().createElement(Le.A, {
        title: "Minor tick and grid thickness",
        noZIndex: !0,
        useFixedPosition: !0,
        supportHalfPixel: !0,
        style: {
          marginRight: 4
        },
        value: null != f ? f : g,
        onItemSelect: e => this.handleChangeAxisSetting("minorTickThickness", e)
      }), this.renderMinorTickCount(l, c, d)));
    }
    render() {
      return o().createElement("div", {
        style: {
          margin: 10,
          fontSize: 12
        }
      }, this.renderAxis());
    }
  }
  var um = [{
      key: "radix10",
      value: "Number"
    }, {
      key: "pi",
      value: "Radian"
    }],
    gm = [{
      key: 8,
      value: "8px"
    }, {
      key: 9,
      value: "9px"
    }, {
      key: 10,
      value: "10px"
    }, {
      key: 11,
      value: "11px"
    }, {
      key: 12,
      value: "12px"
    }, {
      key: 13,
      value: "13px"
    }, {
      key: 14,
      value: "14px"
    }, {
      key: 15,
      value: "15px"
    }, {
      key: 16,
      value: "16px"
    }, {
      key: 17,
      value: "17px"
    }, {
      key: 18,
      value: "18px"
    }, {
      key: 19,
      value: "19px"
    }, {
      key: 20,
      value: "20px"
    }, {
      key: 21,
      value: "21px"
    }, {
      key: 22,
      value: "22px"
    }],
    mm = {
      display: "flex",
      flexDirection: "column",
      lineHeight: "2.5em"
    },
    fm = {
      width: 24,
      marginLeft: 4,
      marginRight: 4
    };
  function ym(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function vm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ym(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class bm extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    shouldComponentUpdate(e) {
      return e.variables != this.props.variables;
    }
    render() {
      return o().createElement("div", {
        style: {
          minHeight: 50,
          maxHeight: 150,
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        className: "test-plot-variables-header",
        style: {
          padding: 5
        }
      }, o().createElement("span", null, "Variables"), o().createElement("i", {
        onClick: () => {
          this.props.onVariablesChange(this.props.variables.concat([{
            type: "value",
            name: "a",
            value: 1
          }]));
        },
        className: "fa fa-plus settings__item",
        style: {
          padding: 5,
          color: "#4caf4f",
          cursor: "pointer",
          marginLeft: 5
        }
      })), o().createElement("div", {
        style: {
          overflowY: "auto",
          paddingBottom: 10
        }
      }, this.props.variables.map((e, t) => {
        if ("value" === e.type) return this.renderVdValueInput(e, t);
      })));
    }
    changeInput(e, t) {
      this.props.onVariablesChange(f.A.setIndex(this.props.variables, t, e));
    }
    renderVdValueInput(e, t) {
      return o().createElement(zp, {
        key: t
      }, r => o().createElement("div", {
        className: "test-plot-variable-input-container",
        style: {
          display: "flex",
          position: "relative"
        }
      }, o().createElement("div", {
        style: {
          width: 20,
          display: "flex",
          padding: 5,
          border: "1px solid var(--ui-border, lightgray)",
          marginBottom: -1
        }
      }, o().createElement("input", {
        value: e.name,
        onChange: e => {
          var r = this.props.variables[t],
            n = e.target.value.slice(0, 1);
          this.changeInput(vm(vm({}, r), {}, {
            name: n
          }), t);
        },
        style: {
          minWidth: 0,
          border: "none"
        }
      })), o().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          padding: 5,
          border: "1px solid var(--ui-border, lightgray)",
          marginLeft: -1,
          marginBottom: -1
        }
      }, o().createElement($e.A, {
        containerStyle: {
          paddingTop: 0
        },
        style: {
          height: 20,
          width: 50,
          border: "none"
        },
        value: e.value,
        step: e.step,
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        onValueChanged: e => {
          var r = this.props.variables[t];
          this.changeInput(vm(vm({}, r), {}, {
            value: e
          }), t);
        }
      })), o().createElement("div", {
        onClick: () => {
          this.props.onVariablesChange(f.A.remove(this.props.variables, t));
        },
        className: "plot-input-style-settings",
        style: {
          position: "absolute",
          right: 2,
          top: 2,
          cursor: "pointer",
          padding: 5,
          visibility: r ? "visible" : "hidden"
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        style: {
          color: "var(--ui-danger, #ce0303)"
        }
      }))));
    }
  }
  var xm = r(66977),
    Cm = r(65706),
    Sm = r(2432);
  class Am extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "rectRef", null), (0, n.A)(this, "handleRegistrationChange", () => {
        this.setState({
          hasRegistration: Sm.T.isActive(),
          mousePos: null
        });
      }), (0, n.A)(this, "handleDocumentMouseDown", e => {
        var t = Sm.T.getRegistration();
        if (t && this.rectRef) {
          var r = this.rectRef.getBoundingClientRect();
          if (!(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) {
            e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault();
            var n = this.rectRef.ownerSVGElement;
            if (n) {
              var i = n.getBoundingClientRect(),
                o = e.clientX - i.left,
                s = e.clientY - i.top;
              t.onMouseDown && t.onMouseDown(o, s, e);
            }
          }
        }
      }), (0, n.A)(this, "handleMouseMove", e => {
        var t = Sm.T.getRegistration();
        if (t) {
          var r = e.currentTarget.ownerSVGElement;
          if (r) {
            var n = r.getBoundingClientRect(),
              i = e.clientX - n.left,
              o = e.clientY - n.top;
            this.setState({
              mousePos: {
                x: i,
                y: o
              }
            }), t.onMouseMove && t.onMouseMove(i, o, e.nativeEvent);
          }
        }
      }), (0, n.A)(this, "handleMouseLeave", () => {
        var e = Sm.T.getRegistration();
        this.setState({
          mousePos: null
        }), null != e && e.onMouseLeave && e.onMouseLeave();
      }), this.state = {
        hasRegistration: Sm.T.isActive(),
        mousePos: null
      };
    }
    componentDidMount() {
      Sm.T.addListener(this.handleRegistrationChange), document.addEventListener("mousedown", this.handleDocumentMouseDown, !0);
    }
    componentWillUnmount() {
      Sm.T.removeListener(this.handleRegistrationChange), document.removeEventListener("mousedown", this.handleDocumentMouseDown, !0);
    }
    render() {
      var e = Sm.T.getRegistration(),
        t = this.props.viewBounds,
        r = this.state.mousePos;
      if (!e) return null;
      var n = t.p2.x - t.p1.x,
        i = t.p2.y - t.p1.y,
        s = {
          viewBounds: t,
          mousePos: r
        };
      return o().createElement("g", {
        key: "plot-overlay-layer"
      }, o().createElement("rect", {
        ref: e => this.rectRef = e,
        x: t.p1.x,
        y: t.p1.y,
        width: n,
        height: i,
        fill: "transparent",
        style: {
          cursor: e.cursor || "crosshair"
        },
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave
      }), e.render(s));
    }
  }
  function wm(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = Em(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function Em(e, t) {
    if (e) {
      if ("string" == typeof e) return km(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? km(e, t) : void 0;
    }
  }
  function km(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Om(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Dm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Om(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Pm extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        labelInsets: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }), (0, n.A)(this, "plotAreaContainerResizeObserver", void 0), (0, n.A)(this, "plotAreaContainerHtml", void 0), (0, n.A)(this, "previewSvg", void 0), (0, n.A)(this, "movingHandler", new It.A({})), (0, n.A)(this, "handleMoving", (e, t, r) => {
        var n = this.props.plotState.axes,
          i = r.customData.curDelta,
          o = {
            x: i.x + e.x,
            y: i.y + e.y
          };
        this.props.onScaleAndDeltaChange(Cm.r.getScale(n), o);
      }), (0, n.A)(this, "handleSvgMouseDown", e => {
        this.movingHandler.setBaseElement(e.currentTarget), this.movingHandler.setContainer(e.currentTarget), this.movingHandler.mouseDown(e, {
          curDelta: this.props.plotState.delta
        });
      }), (0, n.A)(this, "handleMouseWheel", e => {
        this.handleZoomAtDeltaY(-e.deltaY);
      }), this.plotAreaContainerResizeObserver = new Vu.t(e => {
        if (!(e.length <= 0)) {
          var t = e[0],
            r = he.A.getElementClientSize(t.target);
          this.props.onViewSizeChange({
            width: r.width - 20,
            height: r.height - 30
          });
        }
      }), this.movingHandler.onMoving = this.handleMoving;
    }
    shouldComponentUpdate(e, t) {
      return e.plotState != this.props.plotState || e.viewState != this.props.viewState || t != this.state;
    }
    componentDidMount() {
      this.plotAreaContainerResizeObserver.observe(this.plotAreaContainerHtml), this.fitFullViewLabels();
    }
    componentDidUpdate() {
      this.fitFullViewLabels();
    }
    fitFullViewLabels() {
      var e = this.props.viewState,
        t = e.fullView,
        r = e.viewSize,
        n = this.state.labelInsets,
        i = ["left", "right", "top", "bottom"],
        o = D.A.getPlotSettings(this.props.plotState.axes, "axisType");
      if (!t || "scientific" != o && "scientific-clean" != o) i.some(e => 0 != n[e]) && this.setState({
        labelInsets: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      });else if (r && this.previewSvg) {
        var s = Dm({}, n),
          a = wm((0, E.YG)(this.previewSvg, ".test-xtl, .test-ytl")),
          l;
        try {
          for (a.s(); !(l = a.n()).done;) {
            var c = l.value;
            if (c.childElementCount) {
              var d = c.getBBox();
              s.left = Math.max(s.left, n.left + Math.ceil(2 - d.x)), s.top = Math.max(s.top, n.top + Math.ceil(2 - d.y)), s.right = Math.max(s.right, n.right + Math.ceil(d.x + d.width + 2 - r.width)), s.bottom = Math.max(s.bottom, n.bottom + Math.ceil(d.y + d.height + 2 - r.height));
            }
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
        s.left = Math.min(s.left, r.width / 3), s.right = Math.min(s.right, r.width / 3), s.top = Math.min(s.top, r.height / 3), s.bottom = Math.min(s.bottom, r.height / 3), i.some(e => s[e] != n[e]) && this.setState({
          labelInsets: s
        });
      }
    }
    componentWillUnmount() {
      this.plotAreaContainerResizeObserver.disconnect();
    }
    getRenderViewPort() {
      var e = this.props.viewState,
        t = e.fullView,
        r = e.viewSize;
      return t && r ? this.getSettingPlotView() : this.getShapeView();
    }
    getSettingPlotView() {
      var e = this.props.viewState.viewSize,
        t = this.state.labelInsets,
        r = t.left,
        n = t.right,
        i = t.top,
        o = t.bottom;
      return {
        p1: {
          x: r,
          y: i
        },
        p2: {
          x: e.width - n,
          y: e.height - o
        }
      };
    }
    getShapeView() {
      var e = this.props.plotState.shapeViewSize,
        t = this.props.viewState.viewSize;
      if (t) {
        var r = {
          x: t.width / 2,
          y: t.height / 2
        };
        return {
          p1: {
            x: r.x - e.width / 2,
            y: r.y - e.height / 2
          },
          p2: {
            x: r.x + e.width / 2,
            y: r.y + e.height / 2
          }
        };
      }
      return {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: e.width,
          y: e.height
        }
      };
    }
    swithViewPort(e) {
      this.props.onFullViewChange(e);
    }
    handleZoomAtDeltaY(e) {
      var t = this.props.plotState,
        r = t.delta,
        n = t.axes,
        i = this.getRenderViewPort(),
        o = {
          viewSize: y.A.rectWidthHeight(i),
          delta: r,
          scale: Cm.r.getScale(n)
        },
        s = Cm.r.mouseWheelScale(e, o);
      this.props.onScaleAndDeltaChange(s.scale, s.delta);
    }
    render() {
      var e = this.props.plotState,
        t = e.axes,
        r = e.expressions,
        n = e.variables,
        i = e.delta,
        s = this.props.viewState.fullView,
        a = this.getRenderViewPort();
      return o().createElement("div", {
        className: "psa-cn",
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        className: "test-psa-header",
        style: {
          height: 13,
          borderBottom: "1px solid var(--ui-border, lightgray)",
          padding: 9
        }
      }, o().createElement("div", null, o().createElement(tu.A, {
        style: {
          display: "inline-block"
        },
        name: "View Full",
        checked: s,
        onValueChanged: e => this.swithViewPort(e)
      })), o().createElement("div", {
        style: {
          display: "flex",
          position: "absolute",
          right: 5,
          top: 5,
          alignItems: "baseline"
        }
      }, o().createElement("div", {
        style: {
          paddingRight: 10
        }
      }, "Zoom: "), o().createElement("div", {
        onClick: () => {
          this.handleZoomAtDeltaY(25);
        },
        className: "settings__item",
        style: {
          padding: 5,
          width: 10,
          height: 10,
          cursor: "pointer",
          fill: "var(--ui-text-muted, gray)"
        }
      }, re.A.plus), o().createElement("div", {
        onClick: () => {
          this.handleZoomAtDeltaY(-25);
        },
        className: "settings__item",
        style: {
          padding: 5,
          width: 10,
          height: 10,
          cursor: "pointer",
          fill: "var(--ui-text-muted, gray)",
          marginLeft: 0
        }
      }, re.A.minus))), o().createElement(Tt.F, {
        onTouchOrMouseDown: e => {
          e.stopPropagation(), this.handleSvgMouseDown(e);
        }
      }, o().createElement("div", {
        className: "plot-preview-surface",
        tabIndex: -1,
        ref: e => this.plotAreaContainerHtml = e,
        style: {
          flex: 1,
          padding: 10,
          outline: "none",
          background: "white"
        },
        onWheel: e => this.handleMouseWheel(e)
      }, o().createElement("svg", {
        className: "test-svg-area",
        ref: e => this.previewSvg = e,
        tabIndex: -1,
        style: {
          width: "100%",
          height: "100%",
          fill: "none",
          cursor: b.A.isIos() ? "pointer" : "move",
          outline: "none",
          userSelect: "none"
        }
      }, o().createElement(xm.c, {
        styleId: "kkkid",
        plotInfo: Cm.r.buildPlotInfo(t, a, i),
        expressions: r,
        variables: n,
        shapeView: a,
        delta: i,
        onScaleAndDeltaChange: this.props.onScaleAndDeltaChange,
        onRendered: this.props.onRendered,
        inSettingArea: !0
      }), o().createElement(Am, {
        viewBounds: a
      })))), o().createElement("div", {
        className: "ps-hint",
        style: {
          position: "absolute",
          right: 5,
          bottom: 5,
          color: "gray",
          border: "1px solid gray",
          padding: 5,
          pointerEvents: "none"
        }
      }, "Drag to move, or scroll to zoom"));
    }
  }
  function Mm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Im(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Mm(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Tm = Ae.A.getModalDialog();
  class Lm extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "params", new om()), (0, n.A)(this, "handleItemSelect", e => {
        var t = im.create(e, this.state.plotState.expressions.length);
        this.setState({
          plotState: Im(Im({}, this.state.plotState), {}, {
            expressions: this.state.plotState.expressions.concat([t])
          })
        });
      }), (0, n.A)(this, "renderTabContent", e => {
        var t = this.state.plotState,
          r = t.expressions,
          n = t.variables,
          i = t.axes;
        switch (e) {
          case "expression":
            return o().createElement("div", {
              style: {
                margin: -1,
                maxHeight: "100%",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }
            }, this.renderTopBar(), o().createElement(tm, {
              requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
              MathTypeClss: this.props.MathTypeClss,
              expressions: r,
              onExpressionsChange: e => this.setPlotState({
                expressions: e
              }),
              plotErrors: this.state.plotErrors
            }), o().createElement(bm, {
              variables: n,
              onVariablesChange: e => this.setPlotState({
                variables: e
              })
            }));
          case "axes":
            return o().createElement(sm, {
              axes: i,
              onAxesChanged: e => {
                this.setPlotState({
                  axes: e
                });
              }
            });
          case "x-axis":
            return o().createElement(pm, {
              fixedContextHandler: this.props.fixedContextHandler,
              axis: i.xAxis,
              onAxisChanged: e => this.setPlotState({
                axes: Im(Im({}, i), {}, {
                  xAxis: e
                })
              }),
              gridOrientation: "vertical"
            });
          case "y-axis":
            return o().createElement(pm, {
              fixedContextHandler: this.props.fixedContextHandler,
              axis: i.yAxis,
              onAxisChanged: e => this.setPlotState({
                axes: Im(Im({}, i), {}, {
                  yAxis: e
                })
              }),
              gridOrientation: "horizontal"
            });
        }
      }), (0, n.A)(this, "handleScaleAndDeltaChange", (e, t) => {
        var r = this.state.plotState.axes || {},
          n = r.xAxis,
          i = void 0 === n ? {} : n,
          o = r.yAxis,
          s = void 0 === o ? {} : o,
          a = Im(Im({}, i), {}, {
            settings: Im(Im({}, i.settings), {}, {
              scale: e.x
            })
          }),
          l = Im(Im({}, s), {}, {
            settings: Im(Im({}, s.settings), {}, {
              scale: e.y
            })
          }),
          c = Im(Im({}, this.state.plotState.axes), {}, {
            xAxis: a,
            yAxis: l
          });
        this.setPlotState({
          delta: t,
          axes: c
        });
      }), this.state = this.initState(e);
    }
    initState(e) {
      var t = e.plot,
        r = Cm.r.getCenterDelta(t);
      return {
        plotState: {
          expressions: t.functions,
          axes: t.axes,
          variables: t.variables || [],
          shapeViewSize: {
            width: y.A.rectWidth(t.data),
            height: y.A.rectHeight(t.data)
          },
          delta: r
        },
        selectedTab: "expression",
        viewState: {},
        plotErrors: []
      };
    }
    buildPlotFromState() {
      var e,
        t,
        r,
        n,
        i,
        o,
        s = this.props.plot,
        a = this.state.plotState,
        l = this.getExpectScaleDelta("shape-view"),
        c;
      return Im(Im({}, s), {}, {
        functions: a.expressions,
        axes: Im(Im({}, a.axes), {}, {
          xAxis: Im(Im({}, null === (e = a.axes) || void 0 === e ? void 0 : e.xAxis), {}, {
            settings: Im(Im({}, null === (t = a.axes) || void 0 === t || null === (r = t.xAxis) || void 0 === r ? void 0 : r.settings), {}, {
              scale: l.scale.x
            })
          }),
          yAxis: Im(Im({}, null === (n = a.axes) || void 0 === n ? void 0 : n.yAxis), {}, {
            settings: Im(Im({}, null === (i = a.axes) || void 0 === i || null === (o = i.yAxis) || void 0 === o ? void 0 : o.settings), {}, {
              scale: l.scale.y
            })
          })
        }),
        variables: a.variables,
        settings: Im(Im({}, s.settings), {}, {
          centerXDelta: l.delta.x,
          centerYDelta: l.delta.y
        })
      });
    }
    renderTopBar() {
      return o().createElement("div", {
        className: "test-top-bar-container",
        style: {
          zIndex: 110
        }
      }, o().createElement(Nt.A, {
        useFixedPosition: !0,
        style: {
          display: "inline-block",
          margin: 5
        },
        containerStyle: {
          fontSize: 14,
          width: 230,
          background: "var(--ui-surface, white)"
        },
        labelStyle: {
          fontSize: 14
        },
        labelSelectStyle: {
          fontSize: 14
        },
        label: "Add",
        icon: o().createElement("i", {
          className: "fa fa-plus",
          style: {
            paddingRight: 5,
            color: "#4caf4f"
          }
        }),
        items: this.params.getAddActionItems(),
        onItemSelect: this.handleItemSelect
      }));
    }
    renderTabs() {
      return o().createElement(Bt, {
        tabContainerStyle: {
          height: "100%",
          boxShadow: "none",
          border: "none"
        },
        tabContentStyle: {
          flex: 1,
          minHeight: 0
        },
        tabItemStyle: {
          fontSize: 13,
          paddingLeft: 20,
          paddingRight: 20
        },
        tabItems: this.params.getTabItems(),
        selectedKey: this.state.selectedTab,
        renderTabContent: this.renderTabContent,
        onSelectTabItem: e => {
          this.setState({
            selectedTab: e
          });
        },
        onTabItemsMouseDown: () => {}
      });
    }
    setPlotState(e) {
      this.setState({
        plotState: Im(Im({}, this.state.plotState), e)
      });
    }
    setViewState(e) {
      this.setState({
        viewState: Im(Im({}, this.state.viewState), e)
      });
    }
    getExpectScaleDelta(e) {
      var t = this.state.plotState,
        r = t.axes,
        n = t.delta,
        i = {
          scale: Cm.r.getScale(r),
          delta: n
        };
      if (!this.state.viewState.fullView) {
        if ("full-view" == e) {
          var o = this.state.plotState.shapeViewSize,
            s = this.state.viewState.viewSize;
          return Cm.r.swithViewPort(o, s, i);
        }
        return i;
      }
      if ("full-view" == e) return i;
      if ("shape-view" == e) {
        var a = this.state.viewState.viewSize,
          l = this.state.plotState.shapeViewSize;
        return Cm.r.swithViewPort(a, l, i);
      }
    }
    swithViewPort(e) {
      if (this.state.viewState.fullView != e) {
        var t = this.getExpectScaleDelta(e ? "full-view" : "shape-view");
        this.setViewState({
          fullView: e
        }), this.handleScaleAndDeltaChange(t.scale, t.delta);
      }
    }
    renderContent() {
      return Yu.A.graphingDisabled ? o().createElement("div", null, "Graphing disabled") : o().createElement("div", {
        className: "test-plot-setting-dialog-content",
        style: {
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))",
          position: "relative",
          display: "flex"
        }
      }, o().createElement("div", {
        style: {
          borderRight: "1px solid var(--ui-border, lightgray)",
          width: 360
        }
      }, this.renderTabs()), o().createElement(Pm, {
        plotState: this.state.plotState,
        viewState: this.state.viewState,
        onScaleAndDeltaChange: this.handleScaleAndDeltaChange,
        onFullViewChange: e => {
          this.swithViewPort(e);
        },
        onViewSizeChange: e => {
          this.setViewState({
            viewSize: e
          });
        },
        onRendered: e => this.setState({
          plotErrors: e
        })
      }));
    }
    render() {
      return o().createElement(Tm, {
        show: !0
      }, o().createElement(Se.A, {
        title: "Function plot",
        size: "wide",
        scroll: "body",
        showlyShow: !0,
        disableEscapeToClose: !0,
        style: Im({
          height: Yu.A.isTestEnv() && Yu.A.plotSettingDialogFixHeight ? Yu.A.plotSettingDialogFixHeight : "calc(100% - 100px)",
          width: "calc(100% - 100px)",
          maxWidth: 1200,
          maxHeight: 800
        }, Ae.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onClose(this.buildPlotFromState());
        },
        onApply: this.props.onApply ? () => {
          this.props.onApply(this.buildPlotFromState());
        } : void 0,
        onCancel: this.props.onClose,
        okLabel: "OK",
        applyStyle: {
          width: 100,
          height: 24
        },
        showOk: !Yu.A.graphingDisabled,
        okStyle: {
          width: 100,
          height: 24
        },
        show: !0
      }, this.renderContent()));
    }
  }
  var Rm = {
    height: 34,
    background: "var(--ui-surface-muted, #f7f7f7)"
  };
  class Bm extends o().Component {
    constructor(e) {
      super(e), this.state = {
        element: o().createElement("div", {
          style: Rm
        })
      };
    }
    shouldComponentUpdate(e, t) {
      return this.state != t || e.hide != this.props.hide;
    }
    updateElement(e) {
      this.setState({
        element: e
      });
    }
    render() {
      var e = this.state.element;
      return o().createElement("div", {
        className: "role-toolbar-wrapper dg-full-view",
        style: {
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          borderBottom: "1px solid var(--ui-border, rgb(221, 221, 221))",
          minHeight: 35
        }
      }, e);
    }
  }
  class Fm extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        show: !!b.A.isTestEnv()
      }), setTimeout(() => {
        this.setState({
          show: !0
        });
      }, 200);
    }
    render() {
      var e = this.state,
        t = e.show,
        r = e.element,
        n = {
          opacity: t ? 1 : 0,
          transition: "opacity 0.3s linear"
        };
      if (r) {
        var i = {
          diagramOnlyMode: !0,
          hiddenOnDefaultItemsBar: !0
        };
        return o().createElement("div", {
          style: n,
          className: "dg-items-bar-container"
        }, o().cloneElement(r, i));
      }
      return o().createElement("div", {
        style: n
      });
    }
    requestRender(e) {
      this.setState({
        element: e
      });
    }
  }
  class jm extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    render() {
      return this.state.element ? o().createElement("div", {
        className: "dg-controls-container"
      }, o().cloneElement(this.state.element, {
        zoom: this.props.zoom,
        onZoom: this.props.onZoom
      })) : o().createElement("div", null);
    }
    requestRender(e) {
      this.setState({
        element: e
      });
    }
  }
  class _m extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        remoteSelections: []
      });
    }
    setRemotes(e) {
      this.setState({
        remoteSelections: e.filter(e => e.rootSelected.controlled)
      });
    }
    render() {
      var e = this.state.remoteSelections;
      return o().createElement("div", {
        className: "rmptc",
        style: {
          display: "flex",
          position: "absolute",
          left: 1,
          top: 37,
          zIndex: 999
        }
      }, e.map(e => o().createElement("div", {
        key: e.siteId,
        style: {
          background: e.color,
          color: "var(--ui-on-accent, white)",
          fontSize: 12,
          padding: 2,
          maxWidth: 100,
          whiteSpace: "nowrap"
        }
      }, e.siteName)));
    }
  }
  var Nm = r(12753);
  class zm {
    capture(e, t, r) {
      return new Wm(e, t, r);
    }
  }
  var Hm = new zm();
  class Wm {
    constructor(e, t, r) {
      (0, n.A)(this, "scrollContainer", void 0), (0, n.A)(this, "dgSize", void 0), (0, n.A)(this, "zoom", void 0), (0, n.A)(this, "scrollLeftTop", void 0), this.scrollContainer = e, this.dgSize = t, this.zoom = r, this.scrollLeftTop = {
        left: e.scrollLeft,
        top: e.scrollTop
      };
    }
    calDeltaRatio(e) {
      if ("string" == typeof e) switch (e) {
        case "left-top":
          return {
            x: 0,
            y: 0
          };
        case "center":
          return {
            x: .5,
            y: .5
          };
      }
      return e;
    }
    retrieve(e, t, r) {
      var n = this.calDeltaRatio(e),
        i = this.scrollContainer.clientWidth * n.x,
        o = this.scrollContainer.clientHeight * n.y,
        s = 3 * this.dgSize.width * this.zoom,
        a = 3 * this.dgSize.height * this.zoom,
        l = (this.scrollLeftTop.left + i) / s,
        c = (this.scrollLeftTop.top + o) / a,
        d,
        h;
      return {
        x: l * (3 * r.width * t) - i,
        y: c * (3 * r.height * t) - o
      };
    }
    applyToScroll(e, t, r) {
      var n = this.retrieve(e, t, r);
      this.scrollContainer.scrollLeft = n.x, this.scrollContainer.scrollTop = n.y;
    }
  }
  function Vm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Um(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Vm(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class qm extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "mathTypeCompRef", void 0), (0, n.A)(this, "scrollContainerElement", void 0), (0, n.A)(this, "remotePartyNamesRef", void 0), (0, n.A)(this, "zoomByWheelLaterRun", void 0), (0, n.A)(this, "itemsBarContainerPRef", Nm.A.buildHandleRefPromise()), (0, n.A)(this, "dgControlsContainerPRef", Nm.A.buildHandleRefPromise()), (0, n.A)(this, "fakeToolbarPRef", Nm.A.buildHandleRefPromise()), (0, n.A)(this, "handleZoomIn", () => {
        this.handleZoomChange(this.state.zoom + Fd.getZoomInDelta(this.state.zoom));
      }), (0, n.A)(this, "handleZoomOut", () => {
        this.handleZoomChange(this.state.zoom - Fd.getZoomOutDelta(this.state.zoom));
      }), (0, n.A)(this, "handleWheel", e => {
        !e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault(), e.stopPropagation(), this.zoomByWheelLaterRun || (this.zoomByWheelLaterRun = L.A.createLaterRunObject("first-request", 150)), e.deltaY > 0 ? this.zoomByWheelLaterRun.later(this.handleZoomIn) : e.deltaY < 0 && this.zoomByWheelLaterRun.later(this.handleZoomOut));
      }), (0, n.A)(this, "handleZoomChange", e => {
        if (!(e < .5 || e > 12)) {
          var t = Hm.capture(this.scrollContainerElement, this.state.dgSize, this.state.zoom),
            r = this.findCenterDgSelectedPos();
          this.setState({
            zoom: e
          }, () => {
            t.applyToScroll(r, this.state.zoom, this.state.dgSize);
          });
        }
      }), (0, n.A)(this, "gettRemotePartyNamesRef", e => {
        this.remotePartyNamesRef = e;
      }), (0, n.A)(this, "handleRequestItemsBar", e => {
        this.itemsBarContainerPRef.pm.then(t => {
          t.requestRender(e);
        });
      }), (0, n.A)(this, "handleRequestRenderToolbar", e => {
        this.fakeToolbarPRef.pm.then(t => {
          t.updateElement(e);
        });
      }), (0, n.A)(this, "handleRequestDgControls", e => {
        this.dgControlsContainerPRef.pm.then(t => {
          t.requestRender(e);
        });
      }), (0, n.A)(this, "handleRequestDiagramShapePositionDetails", e => {
        console.log(e);
      }), (0, n.A)(this, "handleMathViewPortInfo", () => ({
        getMathViewPort: () => {
          var e;
          return {
            viewPort: this.scrollContainerElement.getBoundingClientRect()
          };
        }
      })), (0, n.A)(this, "handleMtModelChange", e => {
        var t = this.extractDgModel(e),
          r = this.extractDiagramSize(t);
        if (this.state.dgSize.width != r.width || this.state.dgSize.height != r.height) {
          var n = Hm.capture(this.scrollContainerElement, this.state.dgSize, this.state.zoom);
          this.setState({
            dgSize: r
          }, () => {
            n.applyToScroll("center", this.state.zoom, this.state.dgSize);
          });
        }
      }), (0, n.A)(this, "mathTypeRef", e => {
        this.mathTypeCompRef = e;
      }), (0, n.A)(this, "handleModelChanged", e => {
        console.log("model changed !!!"), console.log(e.delayRenderCache), this.handleMtModelChange(e), this.props.inColMode ? this.props.onColModelChange(this.extractDgModel(e), this.mathTypeCompRef.consumeDelayRenderChanges()) : this.props.onChange();
      }), this.state = {
        model: this.wrapDiagramBlock(this.props.model),
        zoom: 1,
        dgSize: this.extractDiagramSize(e.model)
      };
    }
    wrapDiagramBlock(e) {
      return {
        id: "root-id",
        lines: [{
          id: a.w.nextId(),
          blocks: [e]
        }],
        pageSettings: this.props.pageSettings
      };
    }
    replaceDiagramModel(e, t) {
      return Um(Um({}, e), {}, {
        lines: [Um(Um({}, e.lines[0]), {}, {
          blocks: [t]
        })]
      });
    }
    getCurrentDiagramModel() {
      var e = this.mathTypeCompRef.getModel();
      return [this.extractDgModel(e), this.mathTypeCompRef.consumeDelayRenderChanges()];
    }
    extractDgModel(e) {
      var t = e.lines[0].blocks[0];
      if (t.type && "\\diagram" == t.text) return t;
    }
    componentDidMount() {
      this.centerView(), this.initRemoteSelectionInColMode(), this.registerWheelZoom();
    }
    componentWillUnmount() {
      this.unregisterWheelZoom();
    }
    registerWheelZoom() {
      this.scrollContainerElement.addEventListener("wheel", this.handleWheel, {
        passive: !1
      });
    }
    unregisterWheelZoom() {
      this.scrollContainerElement.removeEventListener("wheel", this.handleWheel);
    }
    componentWillReceiveProps(e) {
      if (this.props.inColMode && this.isDgChanged(e.model) && e.model != this.props.model && this.mathTypeCompRef) {
        console.log("set model to diagram view!!");
        var t = this.replaceDiagramModel(this.state.model, e.model);
        this.colModelUpdate(t);
      }
    }
    isDgChanged(e) {
      var t;
      return this.getCurrentDiagramModel()[0] != e;
    }
    colModelUpdate(e) {
      try {
        this.getColMt().colIncrementUpdate({
          model: e
        });
      } catch (e) {
        console.error(e);
      }
    }
    colRemoteUpdate(e, t) {
      L.A.next(() => {
        try {
          this.getColMt().setRemoteCursors(e, t);
        } catch (e) {
          console.error(e);
        }
      });
    }
    getColMt() {
      return this.mathTypeCompRef;
    }
    initRemoteSelectionInColMode() {
      this.props.inColMode && L.A.next(() => {
        var e = this.props.initRemoteSelections;
        this.setRemoteCursors(e);
      });
    }
    unsetRemote() {
      var e = this.mathTypeCompRef.getSelectedDiagramInstance();
      e && e.unsetRemote(), this.remotePartyNamesRef && this.remotePartyNamesRef.setRemotes([]), this.colRemoteUpdate([], []);
    }
    setRemoteCursors(e) {
      if (this.remotePartyNamesRef && this.remotePartyNamesRef.setRemotes(e), this.mathTypeCompRef) {
        var t = this.mathTypeCompRef.getSelectedDiagramInstance();
        t && t.remoteSelect(e);
        var r = [],
          n = [];
        e.forEach(e => {
          if (!e.rootSelected.controlled) {
            var t = this.findDiagramEditorSelectedLevel(e.rootSelected),
              i = this.findDiagramEditorSelectedLevel(e.eRootSelected);
            t && (r.push({
              anonymous: !1,
              siteId: e.siteId,
              displayName: e.siteName
            }), n.push({
              siteId: e.siteId,
              selected: t && Um(Um({}, t), {}, {
                lineIndex: 0,
                charIndex: 0
              }),
              extendedSelected: i && Um(Um({}, i), {}, {
                lineIndex: 0,
                charIndex: 0
              })
            }));
          }
        }), this.colRemoteUpdate(r, n);
      }
    }
    findDiagramEditorSelectedLevel(e) {
      if (e) return a.w.isDiagramEditorId(e.key) ? e : e.selected ? this.findDiagramEditorSelectedLevel(e.selected) : void 0;
    }
    centerView() {
      var e = this.scrollContainerElement.clientWidth,
        t = this.scrollContainerElement.clientHeight,
        r = this.scrollContainerElement.firstElementChild.clientWidth,
        n = this.scrollContainerElement.firstElementChild.clientHeight;
      this.scrollContainerElement.scrollLeft = (r - e) / 2, this.scrollContainerElement.scrollTop = (n - t) / 2;
    }
    extractDiagramSize(e) {
      var t = this.props.mtWidth,
        r = e.settings || {},
        n = r.diagramWidth,
        i = void 0 === n ? 300 : n,
        o = r.diagramHeight,
        s = void 0 === o ? 300 : o;
      return {
        width: e.isInline ? i : t,
        height: s
      };
    }
    renderColLayer() {
      if (this.props.inColMode && this.props.colParams && "ok" != this.props.colParams.status) {
        var e = this.props.colParams.status;
        return o().createElement("div", {
          className: "dgfv-col-layer",
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.21)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }
        }, o().createElement("div", {
          style: {
            width: 200,
            height: 100,
            background: "var(--ui-surface, white)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }, o().createElement("span", null, "Connection: ", "connecting" == e ? "Retrying..." : "Lost")));
      }
    }
    render() {
      var e = this.state.dgSize;
      return o().createElement("div", {
        className: "dg-full-view",
        style: {
          display: "flex",
          flexDirection: "row",
          fontSize: 13,
          width: "100%",
          position: "relative"
        }
      }, o().createElement("div", {
        style: {
          width: 280,
          flexShrink: 0,
          border: "1px solid var(--ui-border, lightgray)",
          overflowY: "auto",
          height: "calc(100% - 2px)",
          marginRight: -1
        }
      }, o().createElement(Fm, {
        ref: this.itemsBarContainerPRef.hdl
      })), o().createElement("div", {
        style: {
          width: "calc(100% - 280px)",
          border: "1px solid var(--ui-border, lightgray)",
          display: "flex",
          flexDirection: "column",
          position: "relative"
        }
      }, o().createElement(Bm, {
        ref: this.fakeToolbarPRef.hdl
      }), o().createElement("div", {
        className: "dg-scroll-container",
        ref: e => this.scrollContainerElement = e,
        style: {
          overflow: "auto",
          flex: 1
        }
      }, o().createElement("div", {
        style: {
          width: 3 * e.width * this.state.zoom,
          height: 3 * e.height * this.state.zoom,
          display: "block"
        }
      }, o().createElement("div", {
        style: {
          width: e.width,
          maxWidth: e.width,
          minWidth: e.width,
          display: "block",
          position: "relative",
          left: e.width * this.state.zoom,
          top: e.height * this.state.zoom
        }
      }, this.renderMathTypeSection()))), o().createElement(jm, {
        zoom: this.state.zoom,
        onZoom: this.handleZoomChange,
        ref: this.dgControlsContainerPRef.hdl
      }), this.renderRemoteParties()), this.renderColLayer());
    }
    findCenterDgSelectedPos() {
      var e = this.mathTypeCompRef.getSelectedDiagramInstance();
      if (!e) throw new Error("diagram is not selected");
      var t = e.getSelectedBoundingRect();
      if (!t) return "center";
      var r = y.A.getCenterPoint(t),
        n = e.getRootElement(),
        i = he.A.getElementRect(n),
        o = he.A.getElementRect(this.scrollContainerElement),
        s = i.left + r.x * this.state.zoom,
        a = i.top + r.y * this.state.zoom;
      return {
        x: h().clamp((s - o.left) / o.width, 0, 1),
        y: h().clamp((a - o.top) / o.height, 0, 1)
      };
    }
    renderRemoteParties() {
      if (this.props.inColMode) return o().createElement(_m, {
        ref: this.gettRemotePartyNamesRef
      });
    }
    renderMathTypeSection() {
      var e = this.props.MathTypeClss;
      return o().createElement(e, {
        deplayRenderEnabled: !0,
        docZoomPercentage: 100 * this.state.zoom,
        ref: this.mathTypeRef,
        requestDgExternalConnector: this.handleMathViewPortInfo,
        hideUndoRedo: !0,
        inColMode: this.props.inColMode,
        onColEvent: e => {
          switch (e.type) {
            case "redo":
            case "undo":
              this.props.onMtColEvent(e);
          }
        },
        onSelectionChange: this.props.inColMode ? (e, t) => {
          L.A.next(() => {
            console.log(e, t), this.props.onColSelectedChange(e);
          });
        } : void 0,
        requestRenderDiagramShapePositionDetails: this.handleRequestDiagramShapePositionDetails,
        requestRenderToolbar: this.handleRequestRenderToolbar,
        requestRenderItemsBar: this.handleRequestItemsBar,
        requestRenderDiagramExtraControls: this.handleRequestDgControls,
        model: this.state.model,
        settings: this.props.mtSettings,
        selected: {
          lineIndex: 0,
          charIndex: 0,
          controlled: !0
        },
        preventFocusOnCreated: !0,
        oneMode: "diagram",
        style: {
          width: "100%"
        },
        rootEditorStyle: {
          minHeight: 0
        },
        onModelChanged: this.handleModelChanged,
        onUserSettingsChange: this.props.onUserSettingsChange
      });
    }
  }
  var Gm = r(82477),
    Km = r(45862),
    Zm = r(85020),
    Ym = r(96971);
  class Qm extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "saveIntervalId", void 0), (0, n.A)(this, "state", {}), (0, n.A)(this, "ConfirmModalDialog", Ae.A.getModalDialog()), (0, n.A)(this, "handleSaveShortcutPress", e => {
        var t = e.event;
        b.A.isMac() ? 83 != t.keyCode || !t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || (e.stopOther = !0, this.handleSave()) : 83 != t.keyCode || !t.ctrlKey || t.altKey || t.shiftKey || (e.stopOther = !0, this.handleSave());
      }), (0, n.A)(this, "handleSave", () => {
        this.isSaveEnabled() && this.props.onSave();
      });
    }
    componentWillMount() {
      ig.A.stack(this.handleSaveShortcutPress), this.registerSaveInterval();
    }
    componentWillUnmount() {
      ig.A.remove(this.handleSaveShortcutPress), this.unregisterSaveInterval();
    }
    render() {
      var e = this.props.saveStatus;
      return o().createElement("div", null, o().createElement(Zm.i, null, o().createElement(Km.$, {
        dialogAction: !0,
        disabled: "saving" == e,
        onClick: () => {
          this.handleCloseDialog();
        }
      }, "Close"), o().createElement("div", {
        className: "tw:relative"
      }, o().createElement(Km.$, {
        dialogAction: !0,
        variant: "primary",
        disabled: !this.isSaveEnabled(),
        onClick: this.handleSave,
        loading: "saving" === e
      }, this.getSaveText()), this.renderSaveShortcut())), this.renderErrorMessage(), this.renderCloseConfirmation());
    }
    handleCloseDialog() {
      this.isSaveEnabled() ? this.setState({
        showCloseConfirmation: !0
      }) : this.props.onClose();
    }
    renderSaveShortcut() {
      if (this.props.isDirty) {
        var e = {
          fontSize: 11,
          color: "var(--ui-text-muted, gray)",
          marginLeft: 5
        };
        return b.A.isMac() ? o().createElement("span", {
          style: e
        }, "(Cmd+S)") : o().createElement("span", {
          style: e
        }, "(Ctrl+S)");
      }
    }
    renderErrorMessage() {
      if ("error" == this.props.saveStatus) return o().createElement(Ym.d, {
        tone: "error",
        message: "Error on saving. Please try again or refresh the page."
      });
    }
    renderCloseConfirmation() {
      if (this.state.showCloseConfirmation) return o().createElement(this.ConfirmModalDialog, {
        show: !0
      }, o().createElement(Gm.A, {
        title: "Discard diagram changes",
        okLabel: "Discard",
        okVariant: "danger",
        label: "There are unsaved changes, are you sure to close",
        show: !0,
        onOk: e => {
          e(), L.A.next(() => {
            this.props.onClose();
          });
        },
        onClose: () => {
          this.setState({
            showCloseConfirmation: !1
          });
        }
      }));
    }
    getSaveText() {
      var e = this.props.saveStatus;
      return this.props.inColMode ? "InSync" : "saving" == e ? "Saving" : this.props.isDirty || "error" == e || "unsave" == e ? "Save" : "Saved";
    }
    registerSaveInterval() {
      this.props.inColMode || (this.saveIntervalId = setInterval(() => {
        this.state.showCloseConfirmation || this.isSaveEnabled() && this.handleSave();
      }, 15e3));
    }
    unregisterSaveInterval() {
      clearInterval(this.saveIntervalId), this.saveIntervalId = void 0;
    }
    isSaveEnabled() {
      return !this.props.inColMode && "saving" != this.props.saveStatus && !this.state.showCloseConfirmation && (this.props.isDirty || "error" == this.props.saveStatus || "unsave" == this.props.saveStatus);
    }
  }
  function Jm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Xm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Jm(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class $m extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "dgFullView", void 0), (0, n.A)(this, "FakeModalDialog", Ae.A.getModalDialog()), (0, n.A)(this, "state", {
        isDirty: !1,
        showDocName: !!localStorage.getItem("dg-full-view-dialog-show-doc-name")
      }), (0, n.A)(this, "DocumentInfoCompClss", void 0), (0, n.A)(this, "ColInfoCompClss", void 0), (0, n.A)(this, "renderHeader", () => this.state.showDocName ? o().createElement("div", {
        style: {
          color: "var(--ui-text-muted, gray)",
          textAlign: "center",
          fontSize: 13,
          padding: 7,
          marginLeft: -10,
          marginRight: -10,
          cursor: "pointer"
        },
        onClick: () => {
          this.setState({
            showDocName: void 0
          }), localStorage.removeItem("dg-full-view-dialog-show-doc-name");
        }
      }, 'Drawing of "', this.state.docName || "", '"') : o().createElement("div", {
        style: {
          paddingTop: 3,
          paddingBottom: 3
        }
      }, o().createElement("i", {
        className: "fa fa-info-circle",
        style: {
          color: "var(--ui-text-muted, gray)",
          fontSize: 12,
          float: "right",
          cursor: "pointer"
        },
        onClick: () => {
          this.setState({
            showDocName: !0
          }), localStorage.setItem("dg-full-view-dialog-show-doc-name", "TRUE");
        }
      }))), (0, n.A)(this, "renderFooter", () => o().createElement(this.DocumentInfoCompClss, null, (e, t) => (this.state.docName || L.A.next(() => {
        this.setState({
          docName: t
        });
      }), o().createElement(Qm, {
        inColMode: this.props.inColMode,
        isDirty: this.state.isDirty,
        saveStatus: e,
        onClose: () => this.props.onClose(),
        onSave: () => {
          var e = this.dgFullView.getCurrentDiagramModel(),
            t = (0, l.A)(e, 2),
            r = t[0],
            n = t[1];
          this.props.onStore(r, n), this.setState({
            isDirty: !1
          }), L.A.next(() => {
            this.props.requestDocSave();
          }, 50);
        }
      })))), this.DocumentInfoCompClss = this.props.requestDocumentInfoCompClss();
    }
    unsetRemote() {
      this.dgFullView && this.dgFullView.unsetRemote();
    }
    setRemoteCursors(e) {
      this.dgFullView && this.dgFullView.setRemoteCursors(e);
    }
    renderContent() {
      return this.props.inColMode ? (this.ColInfoCompClss = this.ColInfoCompClss || this.props.requestColInfoCompClss(), o().createElement(this.ColInfoCompClss, {
        key: "dgfv"
      }, e => (console.log("render dg params !!!", e), this.renderDgFullView(e)))) : this.renderDgFullView(void 0);
    }
    renderDgFullView(e) {
      return o().createElement(qm, {
        key: "dgfv",
        ref: e => this.dgFullView = e,
        onUserSettingsChange: this.props.onUserSettingsChange,
        colParams: e,
        inColMode: this.props.inColMode,
        initRemoteSelections: this.props.initRemoteSelections,
        pageSettings: this.props.pageSettings,
        mtSettings: this.props.mtSettings,
        model: this.props.model,
        selected: this.props.selected,
        MathTypeClss: this.props.MathTypeClss,
        mtWidth: this.props.mtWidth,
        onColSelectedChange: this.props.onColSelectedChange,
        onColModelChange: this.props.onColModelChange,
        onMtColEvent: this.props.onMtColEvent,
        onChange: () => {
          this.state.isDirty || this.setState({
            isDirty: !0
          });
        }
      });
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(Se.A, {
        title: "Diagram editor",
        size: "wide",
        scroll: "body",
        disableEscapeToClose: !0,
        preventCloseEscape: !0,
        style: Xm({
          height: "calc(100% - 50px)",
          width: "calc(100% - 50px)",
          maxHeight: 1200,
          maxWidth: 1600,
          padding: 10,
          paddingTop: 1
        }, Ae.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {},
        onCancel: () => this.props.onClose(),
        okLabel: "OK",
        thinLoaderStyle: {
          display: "none"
        },
        footerStyle: {
          flexShrink: 0
        },
        renderFooterContent: this.renderFooter,
        show: !0,
        renderHeader: this.renderHeader
      }, this.renderContent()));
    }
  }
  class ef {
    getDiagramStyle(e, t) {
      var r = {
        height: D.A.getSettings(e, "diagramHeight"),
        zIndex: 1
      };
      return (this.isDiagramControledSelected(t) || this.isChildSelected(t)) && (r.zIndex = 2), e.isInline && (r.width = D.A.getSettings(e, "diagramWidth"), r.display = "inline-block"), r;
    }
    isDiagramControledSelected(e) {
      return e.selected && e.selected.controlled;
    }
    isChildSelected(e) {
      return null != e.selected && null != e.selected.key;
    }
  }
  var tf = new ef(),
    rf = r(85576);
  class nf extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "expanderMovingHandler", void 0), (0, n.A)(this, "handleExpanderMouseDown", (e, t) => {
        this.expanderMovingHandler.baseElement || this.expanderMovingHandler.setBaseElement(this.props.requestDiagramRef()), this.expanderMovingHandler.mouseDown(e, {
          pos: t
        });
      }), this.state = {
        movingData: void 0
      }, this.expanderMovingHandler = new un.X({}, this.props.getDzContainer), this.expanderMovingHandler.onMoved = e => {
        if (e.didMove && this.state.movingData) {
          var t = this.state.movingData,
            r = t.curSize,
            n,
            i;
          i = "bottom" == t.pos ? D.A.setSetting(this.props.data, "diagramHeight", Math.max(5, r.height)) : D.A.setSetting(this.props.data, "diagramWidth", Math.max(r.width, 5)), this.props.onDiagramChange(i);
        }
        this.state.movingData && this.setState({
          movingData: void 0
        });
      }, this.expanderMovingHandler.onMoving = (e, t, r) => {
        var n,
          i,
          o,
          s = this.props.getDzContainer(),
          a = (null === (n = this.state.movingData) || void 0 === n ? void 0 : n.diagramRect) || F.T.getBCRect(this.props.requestDiagramRef(), s),
          l = (null === (i = this.state.movingData) || void 0 === i ? void 0 : i.pos) || r.customData.pos,
          c = null === (o = this.state.movingData) || void 0 === o ? void 0 : o.fixedContextElementRect;
        if (!this.state.movingData) {
          var d = rf.c.findFixedContextElement(this.props.requestDiagramRef());
          c = d ? F.T.getBCRect(d, s) : void 0;
        }
        this.setState({
          movingData: {
            diagramRect: a,
            curSize: {
              width: F.T.widthOf(a) + e.left,
              height: F.T.heightOf(a) + e.top
            },
            pos: l,
            fixedContextElementRect: c
          }
        });
      };
    }
    getContainerStyle() {
      if (this.state.movingData) {
        var e = this.state.movingData,
          t = e.diagramRect,
          r = e.curSize,
          n = e.pos,
          i = e.fixedContextElementRect,
          o = F.T.resolveFixLeftTop(t, i),
          s,
          a;
        return {
          position: "fixed",
          left: o.left - 1,
          top: o.top - 1,
          width: "bottom" == n ? F.T.widthOf(t) : r.width,
          height: "right" == n ? F.T.heightOf(t) : r.height,
          border: "1px solid var(--ui-border, lightgray)"
        };
      }
      return {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      };
    }
    render() {
      return o().createElement("div", {
        style: this.getContainerStyle()
      }, this.props.hideResizeControl ? void 0 : o().createElement("diagram-expander", {
        class: "no-print",
        style: this.getBottomExpanderStyle(),
        onTouchStart: e => this.handleExpanderMouseDown(e, "bottom"),
        onMouseDown: e => this.handleExpanderMouseDown(e, "bottom")
      }), this.props.showRightResize && !this.props.hideResizeControl ? o().createElement("diagram-expander", {
        class: "no-print",
        style: this.getRightExpanderStyle(),
        onTouchStart: e => this.handleExpanderMouseDown(e, "right"),
        onMouseDown: e => this.handleExpanderMouseDown(e, "right")
      }) : void 0);
    }
    getBottomExpanderStyle() {
      var e = this.props.getDzContainer(),
        t = b.A.isMobileOrTablet() ? 18 : 7;
      return Id.a.applyReverseZoomStyle({
        display: "block",
        position: "absolute",
        left: "calc(50% - ".concat(t / 2, "px)"),
        bottom: -t,
        border: "1px solid var(--ui-border, gray)",
        background: "var(--ui-surface, white)",
        width: t,
        height: t,
        cursor: "ns-resize"
      }, e, "center top");
    }
    getRightExpanderStyle() {
      var e = this.props.getDzContainer(),
        t = b.A.isMobileOrTablet() ? 18 : 7;
      return Id.a.applyReverseZoomStyle({
        display: "block",
        position: "absolute",
        top: "calc(50% - ".concat(t / 2, "px)"),
        right: -t,
        border: "1px solid var(--ui-border, gray)",
        background: "var(--ui-surface, white)",
        width: t,
        height: t,
        cursor: "ew-resize"
      }, e, "left center");
    }
  }
  class of {
    mapBySubSelected(e, t, r, n) {
      if (!t || "line-point" != t.type) {
        if (!n) return;
        t = {
          type: "line-point",
          index: 0
        };
      }
      var i,
        o = t.index;
      return gr.A.isStraightLineArrow(e) ? r.onStraightLine(e, o) : gr.A.isCubicLineArrow(e) ? o == e.data.length ? r.onCubic(e, o - 1, !0) : r.onCubic(e, o, !1) : gr.A.isPolygon(e) ? r.onPolygon(e, o) : gr.A.isPolygonCurve(e) ? o == e.data.length ? r.onPolygonCurve(e, o - 1, !0) : r.onPolygonCurve(e, o, !1) : void 0;
    }
  }
  var sf = new of(),
    af = r(96411);
  function lf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function cf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? lf(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lf(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class df {
    constructor() {
      (0, n.A)(this, "handleMapLineOrPolygon", (e, t, r) => cf(cf({}, e), {}, {
        data: f.A.setIndex(e.data, t, {
          x: e.data[t].x + r.x,
          y: e.data[t].y + r.y
        })
      })), (0, n.A)(this, "handleMapCubic", (e, t, r, n) => {
        if (r) {
          var i = cf(cf({}, e.data[t]), {}, {
            p2: {
              x: e.data[t].p2.x + n.x,
              y: e.data[t].p2.y + n.y
            }
          });
          return cf(cf({}, e), {}, {
            data: f.A.setIndex(e.data, t, i)
          });
        }
        var o = cf(cf({}, e.data[t]), {}, {
          p1: {
            x: e.data[t].p1.x + n.x,
            y: e.data[t].p1.y + n.y
          }
        });
        return cf(cf({}, e), {}, {
          data: f.A.setIndex(e.data, t, o)
        });
      }), (0, n.A)(this, "handleMapPolygonCurve", (e, t, r, n) => {
        var i = {
            x: e.data[t].p1.x + n.x,
            y: e.data[t].p1.y + n.y
          },
          o = 0 == t ? e.data.length - 1 : t - 1,
          s = e.data[t],
          a = e.data[o],
          l = cf(cf({}, s), {}, {
            p1: i
          }),
          c = cf(cf({}, a), {}, {
            p2: i
          }),
          d = f.A.setIndex(e.data, t, l);
        return d = f.A.setIndex(d, o, c), cf(cf({}, e), {}, {
          data: d
        });
      });
    }
    moveEntities(e, t, r) {
      var n = e.groupBox,
        i = e.data,
        o = e.entities,
        s = e.subSelection;
      if (1 == o.length) {
        var a = o[0],
          l = sf.mapBySubSelected(a, s, {
            onStraightLine: (e, r) => this.handleMapLineOrPolygon(e, r, t),
            onPolygon: (e, r) => this.handleMapLineOrPolygon(e, r, t),
            onCubic: (e, r, n) => this.handleMapCubic(e, r, n, t),
            onPolygonCurve: (e, r, n) => this.handleMapPolygonCurve(e, r, n, t)
          }, !1);
        if (l) return af.A.setShapesInData(i, [l]);
      }
      var c = {
          shapesToSnap: [],
          snapToGridSize: 0,
          groupBox: n,
          vGuidesToSnap: [],
          hGuidesToSnap: [],
          editorGuideSnapInfo: void 0
        },
        d;
      return Br.A.moveEntities(i, o, t, c, r).diagram;
    }
    detectChange(e, t) {
      if (e.type != t.type) throw new Error("Unexpected Type Change");
      return e.x != t.x || e.y != t.y ? "move" : "position-size" != e.type || "position-size" != t.type || e.w == t.w && e.h == t.h ? void 0 : "resize";
    }
  }
  var hf = new df();
  class pf {
    constructor(e) {
      (0, n.A)(this, "requestGroupBoxRect", void 0), (0, n.A)(this, "operation", void 0), (0, n.A)(this, "handleMapLineOrPolygon", (e, t) => this.positionOnly(e.data[t].x, e.data[t].y)), (0, n.A)(this, "handleMapCubicOrPolygonCurve", (e, t, r) => r ? this.positionOnly(e.data[t].p2.x, e.data[t].p2.y) : this.positionOnly(e.data[t].p1.x, e.data[t].p1.y)), this.requestGroupBoxRect = e;
    }
    retrieve(e, t) {
      this.cancel();
      var r = new c.uG();
      if (this.operation = r, !e || e.length <= 0) return Promise.resolve(void 0);
      var n = e[0];
      return e.length > 1 || gr.A.isGroupedEntity(n) ? r.wait(new Promise(e => {
        L.A.next(() => {
          if (!r.cancelled) {
            var t = this.requestGroupBoxRect();
            e(t ? {
              type: "position-size-readonly",
              x: t.p1.x,
              y: t.p1.y,
              w: t.p2.x - t.p1.x,
              h: t.p2.y - t.p1.y
            } : void 0);
          }
        }, 10);
      })).finally(() => {
        this.operation === r && (this.operation = void 0);
      }) : r.wait(Promise.resolve(this.retriveSync(n, t))).finally(() => {
        this.operation === r && (this.operation = void 0);
      });
    }
    cancel() {
      var e;
      null === (e = this.operation) || void 0 === e || e.cancel(), this.operation = void 0;
    }
    retriveSync(e, t) {
      if (gr.A.isCompositeShape(e)) {
        var r = U.A.getShapeManagement(e).getPositionDetails;
        return r && r(e);
      }
      if (gr.A.isDiagramEditor(e)) {
        if (e.shape.data.size) {
          var n = Gr.A.sizeAbsoluteToFakeRectWrapShape(e),
            i = e.shape.data;
          return {
            type: "position-size",
            x: n.data.p1.x,
            y: n.data.p1.y,
            w: i.size.width,
            h: i.size.height
          };
        }
        return this.positionOnly(e.shape.data.p.x, e.shape.data.p.y);
      }
      return sf.mapBySubSelected(e, t, {
        onStraightLine: this.handleMapLineOrPolygon,
        onPolygon: this.handleMapLineOrPolygon,
        onCubic: this.handleMapCubicOrPolygonCurve,
        onPolygonCurve: this.handleMapCubicOrPolygonCurve
      }, !0);
    }
    positionOnly(e, t) {
      return {
        type: "position-only",
        x: e,
        y: t
      };
    }
  }
  function uf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function gf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? uf(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uf(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class mf extends o().Component {
    shouldComponentUpdate(e) {
      var t = this.props;
      return !ng.A.areEqualShallow(t.posData, e.posData);
    }
    render() {
      return o().createElement("div", {
        style: {
          flex: 1,
          justifyContent: "flex-end",
          display: "flex",
          fontSize: 12
        }
      }, this.renderByPosType(this.props.posData));
    }
    inputFor(e, t, r, n) {
      return o().createElement($e.A, {
        disabled: n || "none" == t,
        decimals: 1,
        showEmpty: "none" == t,
        value: "none" == t ? void 0 : y.A.round1(e[t]),
        containerStyle: {
          display: "inline-block",
          marginLeft: 0,
          marginRight: 0
        },
        style: {
          width: 40,
          fontSize: 12,
          color: "var(--ui-text-muted, gray)"
        },
        disableSlider: !0,
        min: r,
        max: 1e5,
        ignorePropValueInFocusMode: !0,
        onValueChanged: e => {
          "none" != t && this.props.onPosDataChange(gf(gf({}, this.props.posData), {}, {
            [t]: e
          }), this.props.posData);
        }
      });
    }
    renderByPosType(e) {
      var t = {
        paddingLeft: 5,
        paddingRight: 5
      };
      switch (e.type) {
        case "position-only":
          return o().createElement("div", {
            key: e.type
          }, o().createElement("span", {
            style: t
          }, "x,y="), this.inputFor(e, "x", -1e5), o().createElement("span", null, ","), this.inputFor(e, "y", -1e5), o().createElement("span", {
            style: t
          }, "w,h="), this.inputFor(e, "none", 1), o().createElement("span", null, ","), this.inputFor(e, "none", 1));
        case "position-size":
          return o().createElement("div", {
            key: e.type
          }, o().createElement("span", {
            style: t
          }, "x,y="), this.inputFor(e, "x", -1e5), o().createElement("span", null, ","), this.inputFor(e, "y", -1e5), o().createElement("span", {
            style: t
          }, "w,h="), this.inputFor(e, "w", 1), o().createElement("span", null, ","), this.inputFor(e, "h", 1));
        case "position-size-readonly":
          return o().createElement("div", {
            key: e.type
          }, o().createElement("span", {
            style: t
          }, "x,y="), this.inputFor(e, "x", -1e5), o().createElement("span", null, ","), this.inputFor(e, "y", -1e5), o().createElement("span", {
            style: t
          }, "w,h="), this.inputFor(e, "w", 1, !0), o().createElement("span", null, ","), this.inputFor(e, "h", 1, !0));
      }
    }
  }
  class ff extends o().Component {
    render() {
      return o().createElement("div", {
        style: {
          padding: "5px 10px",
          borderTop: "1px solid var(--ui-border, lightgray)",
          display: "flex",
          alignItems: "baseline"
        }
      }, o().createElement(Nd, {
        style: {
          display: "inline-block"
        },
        zoom: this.props.zoom,
        inFullView: !0,
        onFullViewRequest: () => {},
        onZoomChange: this.props.onZoom
      }), o().createElement(Rd, {
        style: {
          display: "inline-block",
          marginLeft: 5
        },
        showGuide: this.props.showGuide,
        hasAnyGuide: this.props.hasAnyGuide,
        onAddNewVerticalGuide: this.props.onAddNewVerticalGuide,
        onAddNewHorizontalGuide: this.props.onAddNewHorizontalGuide,
        onGuideShow: this.props.onGuideShow
      }), this.renderPositionDetails());
    }
    renderPositionDetails() {
      if (this.props.posData) return o().createElement(mf, {
        posData: this.props.posData,
        onPosDataChange: this.props.onPosDataChange
      });
    }
  }
  function yf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function vf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? yf(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class bf {
    constructor(e) {
      (0, n.A)(this, "target", void 0), this.target = e;
    }
    requestShow(e) {
      return Promise.resolve().then(() => (this.target.inColMode() && this.target.limitColUndoIdx(), this.target.raiseDgMainAreaSelected(), (0, c.cb)(10))).then(() => new Promise(t => {
        this.target.setState({
          fullviewTransition: {
            state: "showing",
            model: e
          }
        }, t);
      })).then(() => new Promise(t => {
        this.target.setState({
          fullviewTransition: {
            state: "visible",
            model: e
          }
        }, t);
      }));
    }
    requestHide() {
      return Promise.resolve().then(() => new Promise(e => {
        this.target.setState({
          fullviewTransition: vf(vf({}, this.target.state.fullviewTransition), {}, {
            state: "hiding"
          })
        }, e);
      })).then(() => new Promise(e => {
        this.target.setState({
          fullviewTransition: void 0
        }, e);
      })).then(() => {
        this.target.processEditorRendered();
      }).then(() => {
        this.target.inColMode() && this.target.releaseLimitUndoCurrent();
      });
    }
  }
  var xf = r(73894),
    Cf = r(38937),
    Sf = r(74987),
    Af = r.n(Sf);
  class wf {
    constructor() {
      (0, n.A)(this, "cacheDgTextInfo", Af()((e, t) => ({
        textTransform: e,
        inDgFullView: t
      })));
    }
  }
  var Ef = new wf(),
    kf = r(73856);
  function Of(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = Df(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function Df(e, t) {
    if (e) {
      if ("string" == typeof e) return Pf(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pf(e, t) : void 0;
    }
  }
  function Pf(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  class Mf {
    constructor() {
      (0, n.A)(this, "hostMap", new Map()), (0, n.A)(this, "isActiveRecivingHost", void 0);
    }
    notifyDiagramChanged() {
      this.isActiveRecivingHost && (this.isActiveRecivingHost = void 0);
    }
    setDgBarHost(e) {
      this.hostMap.set("bar", e);
    }
    setDgSettingsHost(e) {
      this.hostMap.set("settings", e);
    }
    handleHotkey(e) {
      var t;
      return this.isActiveRecivingHost ? null === (t = this.hostMap.get(this.isActiveRecivingHost)) || void 0 === t ? void 0 : t.handleHotkey(e) : e >= 48 && e <= 57 ? this.triggerFistHotkey("bar", e) : 83 == e || 70 == e ? this.triggerFistHotkey("settings", e) : void 0;
    }
    triggerFistHotkey(e, t) {
      var r;
      this.isActiveRecivingHost = e;
      var n = null === (r = this.hostMap.get(e)) || void 0 === r ? void 0 : r.handleHotkey(t),
        i = Of(this.hostMap),
        o;
      try {
        for (i.s(); !(o = i.n()).done;) {
          var s = (0, l.A)(o.value, 2),
            a = s[0],
            c = s[1];
          c && a != e && c.hideHotkeys(!1);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
      return n;
    }
    showAll() {
      var e = Of(this.hostMap),
        t;
      try {
        for (e.s(); !(t = e.n()).done;) {
          var r,
            n = (0, l.A)(t.value, 2)[1];
          null == n || n.showHotkeys();
        }
      } catch (t) {
        e.e(t);
      } finally {
        e.f();
      }
    }
    hideAll(e) {
      this.isActiveRecivingHost = void 0;
      var t = Of(this.hostMap),
        r;
      try {
        for (t.s(); !(r = t.n()).done;) {
          var n,
            i = (0, l.A)(r.value, 2)[1];
          null == i || i.hideHotkeys(e);
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    }
  }
  function If(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Tf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? If(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : If(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Lf extends o().Component {
    shouldComponentUpdate(e) {
      return e.data.shapes != this.props.data.shapes || e.data.elements != this.props.data.elements || e.editorChangedHash != this.props.editorChangedHash || e.selectionCarrier != this.props.selectionCarrier;
    }
    render() {
      var e = (this.props.data.shapes || []).filter(e => H.W.isXyMatrix(e));
      return e.length <= 0 ? null : o().createElement("g", {
        className: "xymatrix-layer",
        style: {
          fill: "none"
        }
      }, h().flatMap(e, e => this.renderShapeFrames(e)), h().flatMap(e, e => this.renderShapeArrows(e)));
    }
    renderShapeFrames(e) {
      var t = H.W.getLayout(e, this.props.data.elements);
      return h().flatMap(e.data.cells, (r, n) => r.map((r, i) => this.renderCellFrame(e, r, n, i, t))).filter(e => !!e);
    }
    renderCellFrame(e, t, r, n, i) {
      if (!t.frame || "none" == t.frame) return null;
      var s = {
          x: i.x[n],
          y: i.y[r]
        },
        a = i.cellSizes[r] && i.cellSizes[r][n] || H.W.getCellFallbackSize(),
        l = Math.max(26, a.width),
        c = Math.max(22, a.height),
        d = s.x - l / 2,
        h = s.y - c / 2,
        p,
        u = {
          stroke: "#111",
          strokeWidth: 1,
          fill: "none",
          onMouseDown: t => this.props.onSelect(t, e)
        };
      switch (t.frame) {
        case "double-rectangle":
          return o().createElement("g", {
            key: e.id + "-" + t.key + "-frame",
            className: "xymatrix-cell-frame"
          }, o().createElement("rect", Tf({
            x: d,
            y: h,
            width: l,
            height: c
          }, u)), o().createElement("rect", Tf({
            x: d + 3,
            y: h + 3,
            width: Math.max(1, l - 6),
            height: Math.max(1, c - 6)
          }, u)));
        case "oval":
          return o().createElement("ellipse", Tf({
            key: e.id + "-" + t.key + "-frame",
            className: "xymatrix-cell-frame",
            cx: s.x,
            cy: s.y,
            rx: l / 2,
            ry: c / 2
          }, u));
        case "dotted":
          return o().createElement("rect", Tf({
            key: e.id + "-" + t.key + "-frame",
            className: "xymatrix-cell-frame",
            x: d,
            y: h,
            width: l,
            height: c,
            strokeDasharray: "1.5 3"
          }, u));
        default:
          return o().createElement("rect", Tf({
            key: e.id + "-" + t.key + "-frame",
            className: "xymatrix-cell-frame",
            x: d,
            y: h,
            width: l,
            height: c
          }, u));
      }
    }
    renderShapeArrows(e) {
      return e.data.arrows.filter(e => !e.hidden).map(t => this.renderArrow(e, t));
    }
    renderArrow(e, t) {
      var r = H.W.getArrowTail(t),
        n = H.W.getArrowShaft(t),
        i = H.W.getArrowHead(t),
        s,
        a = H.W.isSelfLoopArrow(e, t) || this.hasFramedEndpoint(e, t) ? H.W.getArrowPoints(e, t, this.props.data.elements) : this.getMeasuredArrowPoints(e, t, r, n, i) || H.W.getArrowPoints(e, t);
      if (!a) return null;
      var l = H.W.getArrowCurveBezier(a, t, e, this.props.data.elements),
        c = this.getArrowSettingsForLabels(t);
      return o().createElement(_i.Ay, {
        key: e.id + "-" + t.id,
        type: l ? "cubic" : "straight",
        data: l ? [l] : [a.from, a.to],
        shaft: n,
        head: i,
        tail: r,
        middle: void 0,
        thickness: 1,
        headScale: 1,
        mAngleBy: .5,
        settings: c,
        htmlStyleInfo: {
          style: {
            stroke: "#111"
          },
          defs: null
        },
        className: "xymatrix-arrow",
        noControlPointGuideLine: !0,
        isSelected: this.props.selectionCarrier.isSingleSelected(e.id),
        isGroupSelected: !1,
        isRemoteSelected: !1,
        remoteSelectedColor: void 0,
        onMouseDown: t => this.props.onSelect(t, e)
      });
    }
    getArrowSettingsForLabels(e) {
      var t = H.W.getArrowLabels(e).find(e => "middle" == e.position);
      return t ? {
        breakWidth: this.getLabelBreakWidth(t),
        breakPositionPercentage: .5
      } : {};
    }
    getLabelBreakWidth(e) {
      var t = this.props.refMap[e.editorId],
        r = t && t.editor;
      if (!r) return 24;
      var n = r.getBoundingClientRect();
      return Math.max(18, n.width + 8);
    }
    getMeasuredArrowPoints(e, t, r, n, i) {
      var o = this.getEditorIdByCellKey(e, t.fromCellKey),
        s = this.getEditorIdByCellKey(e, t.toCellKey);
      if (!(o && s && this.props.refMap[o] && this.props.refMap[s])) return null;
      var a = {
          id: t.id,
          fromEditorId: o,
          toEditorId: s,
          shaft: n,
          head: i,
          tail: r,
          headScale: 1,
          settings: {}
        },
        l = Bi.A.getIdRectMap([a], {
          editorRef: this.props.refMap,
          editors: this.props.data.elements
        }),
        c = Bi.A.getCalculatedPosition(a, l, this.props.data.elements);
      if (!c || !c.p1 || !c.p2) return null;
      var d = H.W.getArrowSlideOffset({
        from: c.p1,
        to: c.p2
      }, t);
      return {
        from: {
          x: c.p1.x + d.x,
          y: c.p1.y + d.y
        },
        to: {
          x: c.p2.x + d.x,
          y: c.p2.y + d.y
        }
      };
    }
    hasFramedEndpoint(e, t) {
      return this.isFramedCell(e, t.fromCellKey) || this.isFramedCell(e, t.toCellKey);
    }
    isFramedCell(e, t) {
      var r = this.getCellByKey(e, t);
      return !(!r || !r.frame || "none" == r.frame);
    }
    getCellByKey(e, t) {
      for (var r = 0; r < e.data.cells.length; r++) for (var n = e.data.cells[r], i = 0; i < n.length; i++) if (n[i].key == t) return n[i];
    }
    getEditorIdByCellKey(e, t) {
      for (var r = 0; r < e.data.cells.length; r++) for (var n = e.data.cells[r], i = 0; i < n.length; i++) if (n[i].key == t) return n[i].editorId;
    }
  }
  function Rf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Bf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Rf(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rf(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var Ff = null;
  class jf extends Ud {
    constructor(e) {
      var t;
      super(e), t = this, (0, n.A)(this, "diagramFixedConextHandler", void 0), (0, n.A)(this, "plotlyLayer", void 0), (0, n.A)(this, "diagramSettingsRef", void 0), (0, n.A)(this, "positionDetailsRetriever", void 0), (0, n.A)(this, "dgFullViewDg", void 0), (0, n.A)(this, "fvTransitionHdl", new bf(this)), (0, n.A)(this, "delayUpdaterManager", void 0), (0, n.A)(this, "selectedSessionId", Math.random()), (0, n.A)(this, "hotkeyCoordinator", new Mf()), (0, n.A)(this, "handlePostDataChange", (e, t) => {
        var r = this.getCacheableData(),
          n = this.buildSelectionCarrier(),
          i = n.getSelectedEntities(),
          o = hf.detectChange(t, e);
        if ("move" != o) "resize" == o && "position-size" == e.type && this.resizeShape(e.w, e.h);else {
          var s = y.A.substractPoint(e, t),
            a = hf.moveEntities({
              data: r,
              entities: i,
              posData: e,
              prevPosData: t,
              subSelection: n.getSubSelection(),
              groupBox: $r.A.getFromEntities(i, {
                editors: r.elements,
                editorRef: this.refMap
              })
            }, s, this.getDzContainer());
          this.raiseDataChanged(a, {
            focusAcquired: !0
          });
        }
      }), (0, n.A)(this, "handleNotifyPlotly", e => {
        this.plotlyLayer && this.plotlyLayer.notifyPlotly(e);
      }), (0, n.A)(this, "handleShapeMoveStarted", (e, t, r) => {
        this.isSelectModeOnly() || this.initDataForMoving(r, e.altKey);
      }), (0, n.A)(this, "handleShapeMoving", (e, t, r, n) => {
        if (!this.isSelectModeOnly() && r.customData) if (r.customData.requestDuplicate) console.log("request duplicated!");else {
          var i = {
            x: e.left,
            y: e.top
          };
          this.processShapeMoving(i, r, n.ctrlKey);
        }
      }), (0, n.A)(this, "handleShapeMoved", () => {
        this.submitDataFromState();
      }), (0, n.A)(this, "handleRectangelSelect", e => {
        this.state.showSelectionOverlayFor && this.setState({
          showSelectionOverlayFor: void 0
        });
        var t = te.A.getShapeIdsIntersectWithRect(e, this.props.data, this.refMap, this.zoomRef, this.getDzContainer());
        t && 0 != t.length && (1 != t.length ? this.selectedOf.selectGroup(t) : this.selectedOf.select(t[0]));
      }), (0, n.A)(this, "handleFinderAddConnection", e => {
        this.raiseDataChanged(Bi.A.addNewConnection(e, this.getCacheableData()));
      }), (0, n.A)(this, "handleShaprsOrderChanged", e => {
        var t = f.A.setProp(this.getCacheableData(), "shapes", e);
        this.raiseDataChanged(t);
      }), (0, n.A)(this, "handleEntityMoving", e => {
        this.setState({
          data: this.applyEntityChange(this.getCacheableData(), e)
        });
      }), (0, n.A)(this, "handleEntityMoved", e => {
        e ? this.raiseDataChanged(this.applyEntityChange(this.getCacheableData(), e)) : this.submitDataFromState();
      }), (0, n.A)(this, "handleEntityChanged", (e, t) => {
        this.raiseDataChanged(this.applyEntityChange(this.getCacheableData(), e), t);
      }), (0, n.A)(this, "onConnectionPointMouseDown", (e, t) => {
        this.connectionFinder.startAt(e, t);
      }), (0, n.A)(this, "handleRequestTikzCopyToClipboard", () => {
        var e = this.fetchFromStorage() || {
            nodeDelta: {
              x: 0,
              y: 0
            },
            nodeScale: 1
          },
          t = Md.convertModel(this.props.data, this.getMtFuncs().getMathTypeHtmlElement(), this.getMtFuncs().getPageSettings(), {
            nodeOptions: e
          }),
          r = new Blob([t], {
            type: "text/plain"
          }),
          n = new window.ClipboardItem({
            "text/plain": r
          });
        navigator.clipboard.write([n]), this.getMtFuncs().showMessage("Tikz copied!", "info", 2e3);
      }), (0, n.A)(this, "handleRequestTikzExport", e => {
        e = e || this.fetchFromStorage() || {
          nodeDelta: {
            x: 0,
            y: 0
          },
          nodeScale: 1
        };
        var t = Md.convertModel(this.props.data, this.getMtFuncs().getMathTypeHtmlElement(), this.getMtFuncs().getPageSettings(), {
          nodeOptions: e
        });
        this.getMtFuncs().requestExportDialog({
          latex: t,
          mathml: void 0,
          isDiagram: !0,
          handler: {
            onReloadDiagramLatex: this.handleReloadDiagramLatex
          },
          tizkNodeSettings: e
        });
      }), (0, n.A)(this, "handleReloadDiagramLatex", e => {
        console.log("reload diagram latex requested"), this.saveToStorage(e), this.handleRequestTikzExport(e);
      }), (0, n.A)(this, "handleEntitiesChanging", (e, t) => {
        this.changeEntities(e, !0, t);
      }), (0, n.A)(this, "handleEntitiesChanged", (e, t) => {
        this.changeEntities(e, !1, t);
      }), (0, n.A)(this, "handleGroupBoxEntitiesChanging", e => {
        this.handleEntitiesChanging(e);
      }), (0, n.A)(this, "handleGroupBoxEntitiesChanged", (e, t, r, n) => {
        this.handleEntitiesChanged(e, n);
      }), (0, n.A)(this, "onDiagramModelChanged", (e, t) => {
        t ? Vt.A.in(() => {
          this.props.onDataChanged(e);
          var r = Bf(Bf({}, this.props.selected), {}, {
            controlSelectedInfo: {
              selectedIds: t
            }
          });
          this.props.onSelectedChanged(r);
        }) : this.props.onDataChanged(e);
      }), (0, n.A)(this, "handleRequestChangeImage", e => {
        this.getMtFuncs().requestImageSelection(e.data.url, (e, t) => {
          var r = Bf(Bf({}, t), {}, {
            data: Bf(Bf({}, t.data), {}, {
              url: e
            })
          });
          this.changeEntities([r], !1, null);
        }, e);
      }), (0, n.A)(this, "handleFreeDrawingChanged", e => {
        Ff = e, this.setState({
          freeDrawingInfo: e
        });
      }), (0, n.A)(this, "handleDiagaramSettingsRef", e => {
        this.diagramSettingsRef = e, this.hotkeyCoordinator.setDgSettingsHost(e);
      }), (0, n.A)(this, "handleExitDrawingMode", () => {
        this.setState({
          freeDrawingInfo: void 0
        });
      }), (0, n.A)(this, "handleRequestGroupRect", () => this.groupBoxSelectedInstance ? this.groupBoxSelectedInstance.getBoundingRect() : this.entityGroupBoxSelectedInstance ? this.entityGroupBoxSelectedInstance.getBoundingRect() : void 0), (0, n.A)(this, "getBatchUpdater", () => this.context.fixedContextHandler.getBatchUpdater()), (0, n.A)(this, "batchEditorUpdaterNotify", () => {
        u().unstable_batchedUpdates(() => {
          this.editorUpdateNotifier.notify();
        });
      }), (0, n.A)(this, "handleEditorDidUpdate", () => {
        this.delayUpdaterManager.requestCycle(this.batchEditorUpdaterNotify);
      }), (0, n.A)(this, "raiseDataChanged", (e, t) => {
        this.props.onDataChanged(e, Bf(Bf({}, t), {}, {
          isOneLineChanged: !0
        }));
      }), (0, n.A)(this, "onAddNewItem", (e, t) => {
        if (this.state.freeDrawingInfo && this.setState({
          freeDrawingInfo: null
        }), "text" == e) {
          var r = t,
            n = f.A.setFromProps(this.props.data, ["elements", t.id], r);
          this.raiseDataChanged(n);
          var i = {
              key: t.id,
              selected: {
                lineIndex: 0,
                charIndex: 0
              }
            },
            o = {
              key: t.id,
              selected: {
                lineIndex: 0,
                charIndex: r.lines[0].blocks[0].text.length
              }
            };
          return this.props.onSelectedChanged(i), void L.A.next(() => {
            this.props.onSelectedChanged(o, {
              isExtendingSelection: !0
            });
          });
        }
        if ("shape-composite" == e && "image" == t.type) {
          var s = t;
          if (!s.data.url) return void this.getMtFuncs().requestImageSelection("", (e, t) => {
            t.data.url = e, this.onAddNewItem("shape-composite", t);
          }, s);
        }
        "shape-arrow" != e && "shape-object" != e && "shape-composite" != e || this.addNewShape(t);
      }), (0, n.A)(this, "onAddIntersections", e => {
        var t = this.props.data.intersections;
        e.forEach(e => t = nr.A.addEntity(t, e)), this.raiseDataChanged(f.A.setProp(this.props.data, "intersections", t));
      }), (0, n.A)(this, "onRemoveIntersection", e => {
        var t = this.props.data.intersections;
        e.forEach(e => t = nr.A.removeEntity(t, e)), this.raiseDataChanged(f.A.setProp(this.props.data, "intersections", t));
      }), (0, n.A)(this, "onDeleteEntities", e => {
        var t = this.selectedOf.getPropSelectedIdsOrEmpty();
        if (t.length <= 0) e && this.getMtFuncs().requestDelete();else {
          var r = Br.A.removeEntitiesAndRelating(this.props.data, new Set(t));
          r != this.props.data && (this.clearAllSelectedState(), this.raiseDataChanged(r));
        }
      }), (0, n.A)(this, "handleRemoveControlPoint", () => {
        this.selectedOf.setSubSelection(null);
      }), (0, n.A)(this, "handleSubSelectionChanged", e => {
        this.selectedOf.setSubSelection(e);
      }), (0, n.A)(this, "handleEntitySelect", (e, t) => {
        (m.A.isLeftButton(e) || m.A.isTouchEvent(e)) && (this.selectedOf.select(t.id, e), this.movingHandler.mouseDown(e, null));
      }), (0, n.A)(this, "handleGroupBoxMouseDown", e => {
        (m.A.isLeftButton(e) || m.A.isTouchEvent(e)) && this.movingHandler.mouseDown(e, null);
      }), (0, n.A)(this, "handleRequestTouchSelection", () => {
        this.state.showSelectionOverlayFor ? this.setState({
          showSelectionOverlayFor: void 0
        }) : this.setState({
          showSelectionOverlayFor: "select"
        });
      }), (0, n.A)(this, "handleRequestFreeDrawing", () => {
        if (this.selectedOf.selectDiagram(), this.state.freeDrawingInfo) this.setState({
          freeDrawingInfo: null
        });else if (Ff) this.setState({
          freeDrawingInfo: Ff
        });else {
          var e = this.context.fixedContextHandler.getDefaultBorderColor();
          this.setState({
            freeDrawingInfo: {
              thickness: 4,
              strokeColor: e,
              defaultStrokeColor: e
            }
          }), this.context.fixedContextHandler.getMtFuncs().requestMathTypeFocus(), L.A.next(() => {
            this.context.fixedContextHandler.getMtFuncs().requestMathTypeFocus();
          });
        }
      }), (0, n.A)(this, "handleRequestEditorInfo", () => this.getEditorInfo()), (0, n.A)(this, "handleRequestInsertion", e => {
        this.setState({
          insertionShapeType: e
        });
      }), (0, n.A)(this, "handleDiagramBarRef", e => {
        this.diagramRefs.handleDiagramBarRef(e), this.hotkeyCoordinator.setDgBarHost(e);
      }), (0, n.A)(this, "handleSnapPointChanged", e => {
        var t = this.state.snapPoints;
        null == t && null == e || t && 1 == t.length && t[0] == e || (null != e ? this.setState({
          snapPoints: [e]
        }) : this.setState({
          snapPoints: null
        }));
      }), (0, n.A)(this, "handleAddNewEntity", e => {
        this.addNewShape(e, !1);
      }), (0, n.A)(this, "handleRequestSettingMode", () => {
        if (this.props.selected) {
          var e = Bf(Bf({}, this.props.selected), {}, {
            controlSelectedInfo: Bf(Bf({}, this.props.selected.controlSelectedInfo), {}, {
              subSelection: {
                type: "plot"
              }
            })
          });
          this.props.onSelectedChanged(e);
        }
      }), (0, n.A)(this, "handleCompositeShapeChanged", e => {
        var t = Eh.A.changeEntitiesInData(this.props.data, [e]);
        this.raiseDataChanged(t, {
          focusAcquired: !0
        });
      }), (0, n.A)(this, "handleVerticalGuideAdding", () => {
        var e = this.getCacheableData(),
          t = Bf(Bf({}, e), {}, {
            verticalGuides: (e.verticalGuides || []).concat({
              id: a.w.nextDiagramGuideId(),
              x: this.getGuideRandom()
            })
          });
        this.raiseDataChanged(t);
      }), (0, n.A)(this, "handleHorizontalGuideAdding", () => {
        var e = this.getCacheableData(),
          t = Bf(Bf({}, e), {}, {
            horizontalGuides: (e.horizontalGuides || []).concat({
              id: a.w.nextDiagramGuideId(),
              y: this.getGuideRandom()
            })
          });
        this.raiseDataChanged(t);
      }), (0, n.A)(this, "handleGuideShow", e => {
        this.setState({
          showGuide: e
        });
      }), (0, n.A)(this, "handleFullViewRequest", () => {
        this.fvTransitionHdl.requestShow(this.props.data).then(() => {
          this.isFullViewColMode() && (console.log(this.remoteSelection.getSelections()), this.dgFullViewDg.setRemoteCursors(this.remoteSelection.getSelections()));
        });
      }), (0, n.A)(this, "handleEntitiesChangingForGroup", function (e, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = t.gatherChangedEntitiesForGroup(e, r);
        t.changeEntities(i, !0, {
          focusAcquired: n
        });
      }), (0, n.A)(this, "handleEntitiesChangedForGroup", function (e, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = t.gatherChangedEntitiesForGroup(e, r);
        n ? t.changeEntities(i, !1, {
          focusAcquired: !0
        }) : t.changeEntities(i, !1, {
          focusAcquired: n
        });
      }), (0, n.A)(this, "getZoomRef", () => this.zoomRef), (0, n.A)(this, "onDiagramFocus", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "getEditorFrameInfo", () => ({
        refMap: this.refMap,
        baseElement: this.zoomRef
      })), (0, n.A)(this, "handleMathDiagramDoubleClick", e => {
        this.isDiagramControledSelected() && e.stopPropagation();
      }), (0, n.A)(this, "handleGroupBoxSelectedInstanceRef", e => {
        this.groupBoxSelectedInstance = e;
      }), (0, n.A)(this, "handleEntityGroupBoxSelectedInstanceRef", e => {
        this.entityGroupBoxSelectedInstance = e;
      }), (0, n.A)(this, "onDiagramMouseDown", e => {
        this.shouldHandleMouseDown(e) && (e.target != this.mainSvg && "DG-SELECTION-OVERLAY" != e.target.tagName || e.shiftKey || (this.selectedOf.selectDiagram(), this.selectionLayer.setMouseDown(e), e.preventDefault(), e.stopPropagation()));
      }), (0, n.A)(this, "onReactDiagramMouseDown", e => {
        if (this.shouldHandleMouseDown(e)) {
          var t = m.A.getCustomEventInfo(e);
          if (t && t.requestCursorSelect) return !1;
          m.A.setCustomInfo(e, v.A.getBuilder(t).withHandledCursorSelected().build());
        }
      }), (0, n.A)(this, "handlePlotlyLayerRef", e => {
        this.plotlyLayer = e;
      }), (0, n.A)(this, "handlePlotlyChange", e => {
        this.handleCompositeShapeChanged(e);
      }), (0, n.A)(this, "handleRequestMathTypeClss", () => this.getMtFuncs().getMathTypeClss()), (0, n.A)(this, "handleInsertionFinish", e => {
        this.setState({
          insertionShapeType: void 0
        }), e && this.raiseDataChanged(Bf(Bf({}, this.props.data), {}, {
          shapes: this.props.data.shapes.concat([e])
        }));
      }), (0, n.A)(this, "handleEditorChange", e => {
        var t = Bf(Bf({}, this.props.data.elements), {}, {
          [e.id]: e
        });
        this.raiseDataChanged(Bf(Bf({}, this.props.data), {}, {
          elements: t
        }), {});
      }), (0, n.A)(this, "handleRequestEdit", e => {
        var t = H.W.findOwnerByEditorId(this.props.data, e);
        if (t) this.selectedOf.select(t.id);else {
          var r = {
            controlled: void 0,
            controlSelectedInfo: void 0,
            key: e,
            selected: {
              lineIndex: 0,
              charIndex: 0
            }
          };
          this.props.onSelectedChanged(r);
        }
      }), (0, n.A)(this, "handleDgFullViewRequestStore", (e, t) => {
        this.raiseDataChanged(e, {
          focusAcquired: !0,
          cacheMapToMerge: t
        });
      }), (0, n.A)(this, "handleDgFullViewDialogRef", e => {
        this.dgFullViewDg = e;
      }), (0, n.A)(this, "handleUserSettingsChange", e => (console.log("user settings changed from dg full view"), this.getMtFuncs().onUserSettingsChange(e).then(() => {
        this.forceUpdate();
      }))), this.containerClassName = "math-diagram", this.selectedOf = new Xi(this), this.diagramRefs = new $i(this), this.movingHandler = new un.X({}, this.getDzContainer), this.movingHandler.onMoving = this.handleShapeMoving, this.movingHandler.onMoved = this.handleShapeMoved, this.movingHandler.onMovingStarted = this.handleShapeMoveStarted, this.remoteSelection = new Nh(), this.role = "img", this.diagramFixedConextHandler = {
        notifyPlotly: this.handleNotifyPlotly
      }, this.positionDetailsRetriever = new pf(this.handleRequestGroupRect), this.delayUpdaterManager = new Zd(this.getBatchUpdater);
    }
    isInLazyContext() {
      return !this.props.isLineParentTextMode;
    }
    getLazyInfo() {
      var e = u().findDOMNode(this),
        t = kf.w.findClosetEditArea(e),
        r = (0, l.A)(t, 2),
        n = r[0],
        i = r[1];
      if (n && i) return {
        editorId: i.reactInstance.getModel().id,
        lineId: n.reactInstance.getLineData().id,
        blockId: this.props.data.id
      };
    }
    isTemporaryContentHidden() {
      return !!this.state.fullviewTransition;
    }
    resizeShape(e, t) {
      e = Math.max(1, e), t = Math.max(1, t);
      var r = this.getSelectedInstance();
      r && r.resize(e, t, {
        focusAcquired: !0
      });
    }
    getShapeCreationInfo() {
      return ue.getInfoFrom(this.getMtFuncs(), this.mathDiagram);
    }
    uploadImages(e, t) {
      console.log("files: ", e);
      var r = this.getShapeCreationInfo();
      (0, c.__)(e, e => {
        var n,
          i = U.A.getCompositeShapeManagementFromType("image").createShape(r);
        if (t) {
          var o = F.T.getBCRect(this.mathDiagram, this.getMtFuncs().getDocZoomContainer()),
            s = h().clamp(t.left - o.left, 0, F.T.widthOf(o)),
            a = h().clamp(t.top - o.top, 0, F.T.heightOf(o)),
            l = y.A.rectWidthHeight(i.data);
          i.data.p1 = {
            x: s - l.width / 2,
            y: a - l.height / 2
          }, i.data.p2 = {
            x: s + l.width / 2,
            y: a + l.height / 2
          };
        }
        if (b.A.isUploadHandleByService()) {
          var d = e.path;
          xf.A.getService().requestFileUploadFromService(d, e).then(e => {
            i.data.url = e, this.addNewShape(i);
          });
        } else i.___uploadFile = e, this.addNewShape(i);
        return (0, c.cb)(300);
      });
    }
    getCompositeBlockStyle() {
      var e = super.getCompositeBlockStyle(),
        t = this.getCacheableData();
      if (this.props.data.isInline) {
        var r = D.A.getSettings(t, "verticalAlign");
        return Bf(Bf({}, e), {}, {
          display: "inline-block",
          width: "unset",
          textAlign: "center",
          verticalAlign: Gt.getCSSAlign(r)
        });
      }
      return e;
    }
    baseLineIndicatorStyle() {
      return {
        height: .8 * this.context.fontSizeBase
      };
    }
    combine(e) {
      this.diagramSettingsRef && this.diagramSettingsRef.combine(e);
    }
    unsetRemote() {
      this.isFullViewColMode() ? (this.remoteSelection.unset(), this.dgFullViewDg && this.dgFullViewDg.unsetRemote()) : this.remoteSelection.unset() && (this.forceUpdate(), console.log("unset remote"));
    }
    remoteSelect(e) {
      this.isFullViewColMode() ? (this.remoteSelection.setSelections(e), this.dgFullViewDg && (console.log(this.remoteSelection.getSelections()), this.dgFullViewDg.setRemoteCursors(this.remoteSelection.getSelections()))) : (this.remoteSelection.setSelections(e), this.forceUpdate(), console.log("remote set", e));
    }
    duplicateSelectedEntities(e) {
      var t;
      if (e.getSelectedEntities().length <= 0) return {
        block: this.props.data,
        selected: this.props.selected
      };
      var r = Br.A.extractSelectedEntities(this.props.data, e.selectedIdSet()),
        n = [V.A.createLineFromBlock(r)],
        i = Ah.A.stringifyStripId(n),
        o = Ah.A.anyParse(i);
      return Br.A.mergeLines(o, this.props.data, this.props.selected, {
        keepPosition: !0
      });
    }
    initDataForMoving(e, t) {
      var r = this.buildSelectionCarrier();
      if (t) {
        var n = this.duplicateSelectedEntities(r),
          i = n.block,
          o = n.selected;
        return Vt.A.in(() => {
          this.raiseDataChanged(i), this.props.onSelectedChanged(o);
        }), void L.A.next(() => this.initDataForMoving(e, !1));
      }
      var s = this.props.data,
        l = r.getSelectedEntities();
      if (!(l.length <= 0)) {
        var c,
          d = 1 == l.length && (gr.A.isGeneralShape(l[0]) || a.w.isDiagramEditorId(l[0].id)) && D.A.getSettings(s, "snapToOtherShapes"),
          h = te.A.getGridSizeIfSnapEnabled(s),
          p;
        if (d) {
          var u = l[0];
          p = s.shapes.filter(e => e.id != u.id);
        }
        e.customData = {
          movingEntities: l,
          gridSize: h,
          otherShapesToSnap: p,
          isSnapToShapes: d,
          groupBox: $r.A.getFromEntities(l, {
            editors: s.elements,
            editorRef: this.refMap
          }),
          dzc: this.getDzContainer()
        };
      }
    }
    processShapeMoving(e, t, r) {
      var n = this.props.data,
        i = t.customData,
        o = {
          shapesToSnap: !r && i.isSnapToShapes ? i.otherShapesToSnap : [],
          snapToGridSize: r ? 0 : i.gridSize,
          groupBox: i.groupBox,
          vGuidesToSnap: r ? [] : n.verticalGuides || [],
          hGuidesToSnap: r ? [] : n.horizontalGuides || [],
          editorGuideSnapInfo: {
            refMap: this.refMap,
            baseElement: this.zoomRef
          }
        };
      this.state.showGuide || (o.vGuidesToSnap = [], o.hGuidesToSnap = []);
      var s = Br.A.moveEntities(this.props.data, i.movingEntities, e, o, i.dzc);
      this.setState({
        data: s.diagram,
        snapPoints: s.snapPoints
      });
    }
    shouldNotMoveInNestedEditor() {
      return !0;
    }
    raiseDgMainAreaSelected() {
      this.props.selected && this.props.selected.controlled && this.props.onSelectedChanged({
        controlled: !0
      });
    }
    applyEntityChange(e, t) {
      var r = gr.A.getEntityType(t);
      return "text" == r ? f.A.setFromProps(e, ["elements", t.id], t) : "connection" == r ? Eh.A.setConnectionInData(e, t) : "shape-arrow" == r || "shape-object" == r || "shape-composite" == r ? Eh.A.setShapeInData(e, t) : e;
    }
    submitDataFromState() {
      if (this.state.data) {
        var e = this.state.data;
        this.raiseDataChanged(e), L.A.nextMicro(() => {
          this.setState({
            data: void 0,
            snapPoints: void 0
          });
        });
      }
    }
    clearAllSelectedState() {
      this.selectedOf.selectDiagram();
    }
    componentWillReceiveProps(e) {
      if (e.data != this.props.data && this.state.data) {
        var t = Th.merge(e.data, this.props.data, this.state.data);
        this.setState({
          data: t
        });
      }
      !e.selected && this.props.selected && (this.state.freeDrawingInfo && this.stopFreeDrawing(), this.state.data && this.submitDataFromState());
    }
    stopFreeDrawing() {
      this.setState({
        freeDrawingInfo: null
      });
    }
    checkControlledSelected(e) {
      return e.selected && e.selected.controlled;
    }
    refreshSelectedOnZoomChange() {
      L.A.nextMicroPromise().then(() => {
        this.selectedSessionId = Math.random(), this.forceUpdate();
      });
    }
    componentDidMount() {
      this.checkControlledSelected(this.props) && this.getMtFuncs().registerSelectDiagramInstance(!0, this), this.requestDiagramSettings(), this.diagramRefs.notifyDiagramMounted(), this.renderEntityBar();
      var e = u().findDOMNode(this);
      lh.registerRootTouchEvent(e), this.doubleTapHammer = lh.registerDoubleTap(e, this.getDzContainer), Fh.process(e, this.context.fixedContextHandler.getMainThemeColor(), this.context.fixedContextHandler.getRenderingContext()), this.getMtFuncs().registerDiagram(this), this.plotlyLayer && this.plotlyLayer.processPlotly(), this.handleConfigShapeOnDiagramCreated();
    }
    handleConfigShapeOnDiagramCreated() {
      var e = rg.retrieveAndResetNextPlotConfig();
      e && L.A.next(() => {
        this.selectedOf.select(e.id), "plot" == e.type ? L.A.next(() => {
          this.handleRequestSettingMode();
        }) : "xymatrix" == e.type ? Li.showXyMatrixDialogOnMount = !0 : L.A.next(() => {
          this.handleNotifyPlotly({
            type: "edit",
            plotly: e
          });
        }, 300);
      });
    }
    componentWillUnmount() {
      this.positionDetailsRetriever.cancel(), lh.unregisterRootTouchEvent(u().findDOMNode(this)), lh.unregisterDoubleTap(this.doubleTapHammer), this.context.fixedContextHandler.getMtFuncs().unregisterDiagram(this), this.state.fullviewTransition && this.inColMode() && this.releaseLimitUndoCurrent(), this.getMtFuncs().freeDelayCacheChange(!1);
    }
    componentWillUpdate(e, t, r) {
      super.componentWillUpdate && super.componentWillUpdate(e, t, r), t.fullviewTransition != this.state.fullviewTransition && t.fullviewTransition && this.getMtFuncs().freeDelayCacheChange(!0);
    }
    componentDidUpdate(e, t) {
      t.fullviewTransition == this.state.fullviewTransition ? (this.requestDiagramSettings(), this.renderEntityBar(), this.plotlyLayer && this.plotlyLayer.processPlotly(), this.checkControlledSelected(e) != this.checkControlledSelected(this.props) && this.context.fixedContextHandler.getMtFuncs().registerSelectDiagramInstance(this.checkControlledSelected(this.props), this), this.hotkeyCoordinator.notifyDiagramChanged()) : this.state.fullviewTransition || this.getMtFuncs().freeDelayCacheChange(!1);
    }
    enterEditModeForTextBoxIfRequired() {
      var e = this.buildSelectionCarrier();
      if (e.singleEditorId()) {
        var t = H.W.findOwnerByEditorId(this.props.data, e.singleEditorId());
        return t ? (this.selectedOf.select(t.id), !1) : (this.props.onSelectedChanged({
          key: e.singleEditorId(),
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }), !0);
      }
      return !1;
    }
    fetchFromStorage() {
      var e,
        t = null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem("tizkNodeSettings");
      return t ? JSON.parse(t) : void 0;
    }
    saveToStorage(e) {
      var t;
      null === (t = window.localStorage) || void 0 === t || t.setItem("tizkNodeSettings", JSON.stringify(e));
    }
    requestRenderToolBarComponent(e) {
      this.getMtFuncs().requestRenderToolBarComponent(e);
    }
    requestDiagramSettings() {
      var e,
        t = "diagram" == this.getMtFuncs().getOneMode();
      if (this.isDiagramControledSelected() && !this.isNestedSelected() && !this.state.fullviewTransition) {
        var r = this.getCacheableData(),
          n = this.buildSelectionCarrier(),
          i = n.getSelectedEntities();
        this.requestRenderToolBarComponent({
          type: "add",
          key: "DiagramSettings",
          component: o().createElement(Li, {
            ref: this.handleDiagaramSettingsRef,
            sCarrier: n,
            entity: 1 == i.length ? i[0] : void 0,
            entities: i,
            requestGroupRect: this.handleRequestGroupRect,
            isDiagramOnlyMode: t,
            showShapePosition: t,
            isInline: r.isInline,
            showMoreOptions: !t,
            onExitDrawingMode: this.handleExitDrawingMode,
            isChanging: !!this.state.data,
            editorRefMap: this.refMap,
            fixedContextHandler: this.context.fixedContextHandler,
            onEntitiesChangedForGroup: this.handleEntitiesChangedForGroup,
            onEntitiesChangingForGroup: this.handleEntitiesChangingForGroup,
            requestTikzExport: e => {
              e ? this.handleRequestTikzCopyToClipboard() : this.handleRequestTikzExport();
            },
            freeDrawingInfo: this.state.freeDrawingInfo,
            isDisabled: this.isSelectModeOnly(),
            hidden: !1,
            data: r,
            selectedDgPropObj: n.getSelectedDgObj(),
            onRemoveIntersections: this.onRemoveIntersection,
            onAddIntersections: this.onAddIntersections,
            onDeleteEntities: this.onDeleteEntities,
            diagramRef: this.mathDiagram,
            onEntitiesChanged: this.handleEntitiesChanged,
            onEntitiesChanging: this.handleEntitiesChanging,
            onShapesOrderChanged: this.handleShaprsOrderChanged,
            subSelection: n.getSubSelection(),
            onRemoveControlPoint: this.handleRemoveControlPoint,
            onDiagramModelChanged: this.onDiagramModelChanged,
            onSelectedChanged: this.props.onSelectedChanged,
            requestChangeImage: this.handleRequestChangeImage,
            onFreeDrawingInfoChanged: this.handleFreeDrawingChanged
          })
        });
      }
      this.renderDiagramExtraControls(t);
    }
    processEditorRendered() {
      this.getBatchUpdater().processOnly("processEditorRendered");
    }
    addNewShape(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        r = this.props.data;
      null == r.shapes && (r = f.A.setProp(r, "shapes", [])), this.raiseDataChanged(H.W.addShapeToDiagram(r, e)), t && this.selectedOf.select(e.id);
    }
    getCacheableData() {
      return this.state.data || this.props.data;
    }
    changeEntities(e, t, r) {
      var n = Eh.A.changeEntitiesInData(this.getCacheableData(), e);
      t ? this.setState({
        data: n
      }) : (this.state.data && (console.log("set state data to null"), this.setState({
        data: null
      }), b.A.isTestEnv() && (window.lastSubmitData = this.state.data)), this.raiseDataChanged(n, r));
    }
    renderEntityBar() {
      var e = "diagram" == this.getMtFuncs().getOneMode();
      (e || this.isDirectSelected() && this.isDiagramControledSelected()) && this.getMtFuncs().requestRenderItemsBarComponent(o().createElement(fe, {
        model: this.getCacheableData(),
        largeView: e,
        ref: this.handleDiagramBarRef,
        onRequestInsertion: this.handleRequestInsertion,
        showSelectionOverlayFor: this.state.showSelectionOverlayFor,
        onRequestEditorInfo: this.handleRequestEditorInfo,
        requestTouchSelection: this.handleRequestTouchSelection,
        onDeleteEntities: this.onDeleteEntities,
        freeDrawingSelected: !!this.state.freeDrawingInfo,
        isDisabled: this.isSelectModeOnly(),
        hidden: !this.isDiagramControledSelected(),
        onRequestFreeDrawing: this.handleRequestFreeDrawing,
        fixedContextHandler: this.context.fixedContextHandler,
        onAddNewItem: this.onAddNewItem
      }), {
        noWrap: e,
        requestType: "diagram"
      });
    }
    selectHotKey(e) {
      return this.hotkeyCoordinator.handleHotkey(e);
    }
    showHotkey() {
      this.hotkeyCoordinator.showAll();
    }
    hideHotkey(e) {
      this.hotkeyCoordinator.hideAll(e);
    }
    isNestedSelected() {
      return this.isDiagramControledSelected() && this.props.selected.selected;
    }
    isDiagramControledSelected() {
      return this.props.selected && this.props.selected.controlled;
    }
    isSinglePlotSettings(e, t) {
      return !(!e || "plot" != e.type) && t && "plot" == t.type;
    }
    renderDiagramControls(e, t, r) {
      return o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(So, {
        getDZContainer: this.getMtFuncs().getDocZoomContainer,
        isSinglePlotSettings: e,
        getEditorFrameInfo: this.getEditorFrameInfo,
        onSnapPoint: this.handleSnapPointChanged,
        selectedSessionId: this.selectedSessionId,
        hidden: !this.isDiagramControledSelected(),
        data: this.getCacheableData(),
        refMap: this.refMap,
        entity: t,
        onEntityMoving: this.handleEntityMoving,
        onEntityMoved: this.handleEntityMoved,
        onEntityChanged: this.handleEntityChanged,
        subSelection: r,
        onSubSelectionChanged: this.handleSubSelectionChanged,
        ref: this.diagramRefs.handleDiagramControlsRef
      }));
    }
    renderFreeStyleDrawingOverlay() {
      if (this.state.freeDrawingInfo && this.mathDiagram) return o().createElement(nh, {
        requestStopDrawing: () => this.stopFreeDrawing(),
        freeDrawingInfo: this.state.freeDrawingInfo,
        width: this.mathDiagram.clientWidth,
        height: this.mathDiagram.clientHeight,
        onCreateEntity: this.handleAddNewEntity,
        getDzContainer: this.getDzContainer
      });
    }
    renderFunctionPlotInput(e, t) {
      if (e && "plot" == e.type) {
        var r = t && "plot" == t.type,
          n = e;
        if (r) return o().createElement(Lm, {
          fixedContextHandler: this.context.fixedContextHandler,
          plot: n,
          MathTypeClss: this.getMtFuncs().getMathTypeClss(),
          onApply: e => {
            var t = Eh.A.changeEntitiesInData(this.props.data, [e]);
            this.raiseDataChanged(t, {
              focusAcquired: !0
            });
          },
          onClose: t => {
            if (t) {
              var r = Eh.A.changeEntitiesInData(this.props.data, [t]);
              this.raiseDataChanged(r, {
                focusAcquired: !0
              });
            }
            this.selectedOf.select(e.id);
          }
        });
        var i = {
          background: "var(--ui-surface-muted, #fbfafa)",
          position: "absolute",
          left: n.data.p1.x - 3,
          top: n.data.p1.y - 26,
          width: 20,
          height: 18,
          cursor: "pointer",
          fontSize: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        };
        return o().createElement("div", {
          className: "no-print plot-settings-icon-wrapper",
          style: i,
          onMouseDown: this.handleRequestSettingMode
        }, o().createElement("i", {
          className: "fa fa-cog",
          "aria-hidden": "true"
        }));
      }
    }
    renderPlotlySettingIcon(e) {
      if (e && "plotly" == e.type) {
        var t = {
          background: "var(--ui-surface-muted, #fbfafa)",
          position: "absolute",
          left: e.data.p1.x - 3,
          top: e.data.p1.y - 26,
          width: 20,
          height: 18,
          cursor: "pointer",
          fontSize: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        };
        return o().createElement("div", {
          className: "no-print plot-settings-icon-wrapper",
          style: t,
          onMouseDown: () => this.handleNotifyPlotly({
            type: "edit",
            plotly: e
          })
        }, o().createElement("i", {
          className: "fa fa-cog",
          "aria-hidden": "true"
        }));
      }
    }
    renderXyMatrixSettingIcon(e) {
      if (e && "xymatrix" == e.type) {
        var t = e,
          r,
          n,
          i = {
            background: "var(--ui-surface-muted, #fbfafa)",
            position: "absolute",
            left: Math.min(t.data.p1.x, t.data.p2.x) - 3,
            top: Math.min(t.data.p1.y, t.data.p2.y) - 26,
            width: 20,
            height: 18,
            cursor: "pointer",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };
        return o().createElement("div", {
          className: "no-print plot-settings-icon-wrapper",
          style: i,
          onMouseDown: () => this.diagramSettingsRef && this.diagramSettingsRef.openXyMatrixDialog(e.id)
        }, o().createElement("i", {
          className: "fa fa-cog",
          "aria-hidden": "true"
        }));
      }
    }
    getSelectedBoundingRect() {
      var e,
        t = this.buildSelectionCarrier().getSelectedEntities().filter(e => !a.w.isDiagramIntersectionId(e.id)),
        r;
      if (!(t.length <= 0)) return $r.A.getFromEntities(t, {
        editors: this.getCacheableData().elements,
        editorRef: this.refMap
      });
    }
    renderFreeDrawingControl(e) {
      if (!e) return this.state.freeDrawingInfo ? o().createElement("div", {
        style: ch
      }, o().createElement(Je.A, {
        preventDefault: !0,
        stopPropagation: !0,
        selectedKeys: [],
        onSelect: () => this.stopFreeDrawing(),
        items: [{
          key: "close-drawing",
          element: o().createElement("span", null, "Exit Drawing Mode")
        }]
      })) : void 0;
    }
    getGuideRandom() {
      return b.A.isTestEnv() ? 50 : h().random(30, 60);
    }
    hasAnyGuide() {
      var e = this.getCacheableData();
      return !!(e.horizontalGuides && e.horizontalGuides.length > 0) || !!(e.verticalGuides && e.verticalGuides.length > 0);
    }
    renderMoreControls(e) {
      if (!e && !this.state.freeDrawingInfo) return this.isDiagramControledSelected() ? o().createElement(zd, {
        selectedSessionId: this.selectedSessionId,
        dzContainer: this.getDzContainer(),
        hasAnyGuide: this.hasAnyGuide(),
        showGuide: this.state.showGuide,
        viewPortActionFor: this.state.showSelectionOverlayFor,
        requestViewPortFor: e => this.setState({
          showSelectionOverlayFor: e
        }),
        onFullViewRequest: this.handleFullViewRequest,
        zoom: 1,
        onZoom: void 0,
        onAddNewHorizontalGuide: this.handleHorizontalGuideAdding,
        onAddNewVerticalGuide: this.handleVerticalGuideAdding,
        onGuideShow: this.handleGuideShow
      }) : void 0;
    }
    isChangedInState() {
      return this.lastProps == this.props;
    }
    renderGroupBox(e, t) {
      if (e && !(e.length < 2)) return o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(Bn, {
        entities: e,
        selectedSessionId: this.selectedSessionId,
        getDZContainer: this.getMtFuncs().getDocZoomContainer,
        ref: this.handleGroupBoxSelectedInstanceRef,
        onGroupMouseDown: this.handleGroupBoxMouseDown,
        onEntitiesChanged: this.handleGroupBoxEntitiesChanged,
        onEntitiesChanging: this.handleGroupBoxEntitiesChanging,
        diagram: this.getCacheableData(),
        editorRef: this.refMap,
        getRootElement: this.getZoomRef,
        subSelection: t,
        onSubSelectionChanged: this.handleSubSelectionChanged,
        getEditorFrameInfo: this.getEditorFrameInfo
      }));
    }
    gatherChangedEntitiesForGroup(e, t) {
      var r = ur.A.partitionShapeAndNonShapeEntities(e),
        n = (0, l.A)(r, 2),
        i = n[0],
        o = n[1],
        s = Bf(Bf({}, this.getCacheableData()), {}, {
          shapes: i
        }),
        a = Eh.A.changeEntitiesInData(s, e),
        c;
      return [Bf(Bf({}, t), {}, {
        entities: a.shapes
      }), ...o];
    }
    renderGroupBoxForGroupEntity(e, t) {
      if (e && a.w.isDiagramGroupId(e.id)) return o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(Jd, {
        ref: this.handleEntityGroupBoxSelectedInstanceRef,
        selectedSessionId: this.selectedSessionId,
        getDZContainer: this.getMtFuncs().getDocZoomContainer,
        groupEntity: e,
        onGroupMouseDown: this.handleGroupBoxMouseDown,
        onEntitiesChanged: this.handleEntitiesChangedForGroup,
        onEntitiesChanging: this.handleEntitiesChangingForGroup,
        diagram: this.getCacheableData(),
        editorRef: this.refMap,
        getRootElement: this.getZoomRef,
        subSelection: t,
        onSubSelectionChanged: this.handleSubSelectionChanged,
        getEditorFrameInfo: this.getEditorFrameInfo
      }));
    }
    getZoomStyle() {}
    renderSnapIndicator() {
      if (this.state.snapPoints) return o().createElement(qd, {
        snapPoints: this.state.snapPoints,
        getDZContainer: this.getDzContainer
      });
    }
    renderGuides() {
      if (this.hasAnyGuide() && this.isSelected()) return o().createElement(Sh, {
        requestEditorGuideSnapInfo: this.getEditorFrameInfo,
        model: this.getCacheableData(),
        onSnapPointChanged: this.handleSnapPointChanged,
        onModelChanged: e => this.raiseDataChanged(e),
        showGuide: this.state.showGuide && this.isSelected(),
        getDZContainer: this.getDzContainer
      });
    }
    buildSelectionCarrier() {
      return this.selectedOf.createCarrier(this.remoteSelection.getSelections() || [], this.getCacheableData());
    }
    alignShapes(e) {
      var t,
        r = this.buildSelectionCarrier().getSelectedEntities();
      if (!(r.length <= 1)) {
        var n = Br.A.alignEntities(this.getCacheableData(), r, {
          editorRef: this.refMap,
          editors: this.getCacheableData().elements
        }, e);
        this.raiseDataChanged(n);
      }
    }
    rotateByRequest(e) {
      var t = this.getSelectedInstance();
      t && t.rotateByRequest(e);
    }
    allowRequestAction(e) {
      var t;
      if ("arrange" == e) return this.selectedOf.getPropSelectedIdsOrEmpty().some(e => !a.w.isDiagramEditorId(e));
      var r = this.getSelectedInstance();
      return r ? r.allowRequestAction(e) : void 0;
    }
    arrangeRequest(e) {
      var t = this.selectedOf.getPropSelectedIdsOrEmpty(),
        r = _h.arrange(e, t, this.props.data.shapes || []),
        n = Bf(Bf({}, this.props.data), {}, {
          shapes: r
        });
      this.raiseDataChanged(n, null);
    }
    getSelectedInstance() {
      return this.groupBoxSelectedInstance || this.entityGroupBoxSelectedInstance || this.diagramControls;
    }
    getAriaLabel() {
      var e;
      return (this.props.data.accessibility || {}).description || "Diagram";
    }
    rotateAroundPointReady() {
      var e = this.buildSelectionCarrier().getSubSelection();
      return e && "rotation-around" == e.type;
    }
    shouldHandleMouseDown(e) {
      return !(!this.state.showSelectionOverlayFor && m.A.isTouchEvent(e) && b.A.isMobileOrTablet()) && !!m.A.isLeftButtonOrTouch(e);
    }
    isMtFocus() {
      return this.getMtFuncs().isMathTypeFocused();
    }
    renderCaption(e, t) {
      if (!e && this.props.data.elements.caption) {
        var r = this.context.fixedContextHandler.getMtFuncs(),
          n,
          i = this.getCacheableData().isInline ? {
            clear: "both",
            float: "left",
            width: "100%",
            fontFamily: O.A.textFontFamilyFromKey(r.getBaseTextModeFont())
          } : void 0;
        return o().createElement(Vh, {
          requestPickerSettings: r.requestColorPickerSettings,
          mainStyle: i,
          key: t,
          data: this.getCacheableData(),
          selected: this.props.selected,
          onDiagramModelChange: this.raiseDataChanged,
          onSelectedChanged: this.props.onSelectedChanged,
          captionInfo: r.getCaptionInfo("diagram"),
          notifyCaptionNumbering: r.notifyCaptionNumbering
        }, o().createElement(g.A, Bf(Bf({}, this.buildMetaDataFromName("caption")), {}, {
          showBorderOnSelected: !1,
          isTextMode: !0,
          className: "diagram-caption",
          style: {
            minWidth: 50,
            display: "inline",
            fontFamily: O.A.textFontFamilyFromKey(this.context.fixedContextHandler.getMtFuncs().getBaseTextModeFont()),
            fontSize: this.getTextFontSizePixel(),
            fontStyle: "normal"
          }
        })));
      }
    }
    renderPlotlyLayer() {
      return o().createElement(eg, {
        requestPickerSettings: this.getMtFuncs().requestColorPickerSettings,
        requestMathTypeClss: this.handleRequestMathTypeClss,
        onPlotlyChange: this.handlePlotlyChange,
        ref: this.handlePlotlyLayerRef
      });
    }
    renderInsertionLayer() {
      if (this.state.insertionShapeType) return o().createElement(og, {
        shapeType: this.state.insertionShapeType,
        fixedContextHandler: this.context.fixedContextHandler,
        diagramFixedCtxHandler: this.diagramFixedConextHandler,
        getBaseElement: this.getZoomRef,
        onFinish: this.handleInsertionFinish
      });
    }
    renderFullView() {
      var e, t;
      if ("visible" == (null === (e = this.state.fullviewTransition) || void 0 === e ? void 0 : e.state)) {
        var r = this.getMtFuncs(),
          n = r.inColMode() ? this.props.data : this.state.fullviewTransition.model;
        return o().createElement($m, {
          key: "dg-fullview-dg",
          onUserSettingsChange: this.handleUserSettingsChange,
          ref: this.handleDgFullViewDialogRef,
          inColMode: r.inColMode(),
          onMtColEvent: r.raiseMtColEvent,
          initRemoteSelections: this.remoteSelection.getSelections(),
          pageSettings: r.getPageSettings(),
          mtSettings: r.getMtSettings(),
          requestDocumentInfoCompClss: r.requestDocumentInfoCompClss,
          requestColInfoCompClss: r.requestColInfoCompClss,
          requestDocSave: r.requestSave,
          model: n,
          selected: this.props.selected,
          MathTypeClss: this.handleRequestMathTypeClss(),
          mtWidth: r.getMathTypeWidth(),
          onClose: () => {
            this.fvTransitionHdl.requestHide().then(() => {
              this.getMtFuncs().refreshDelayRenderView();
            });
          },
          onColSelectedChange: e => {
            this.props.onSelectedChanged({
              controlled: e.controlled,
              controlSelectedInfo: e.controlSelectedInfo,
              key: e.key,
              selected: e.selected
            }, {
              focusAcquired: !0
            });
          },
          onColModelChange: (e, t) => {
            this.raiseDataChanged(e, {
              focusAcquired: !0,
              cacheMapToMerge: t
            });
          },
          onStore: this.handleDgFullViewRequestStore
        });
      }
    }
    renderDgExpander() {
      if (this.isControlledSelected() || this.isChildSelected()) {
        var e = this.getCacheableData();
        return o().createElement(nf, {
          data: e,
          hideResizeControl: !1,
          requestDiagramRef: () => this.mathDiagram,
          showRightResize: e.isInline,
          onDiagramChange: e => this.raiseDataChanged(e),
          getDzContainer: this.getDzContainer
        });
      }
    }
    renderSelectRegion() {
      if (this.props.selected) {
        var e = "-".concat(0, "%");
        return o().createElement("div", {
          className: "no-print",
          style: {
            position: "absolute",
            left: e,
            top: e,
            right: e,
            bottom: e,
            border: "1px dotted lightgray",
            userSelect: "none"
          }
        });
      }
    }
    isFullViewColMode() {
      return this.getMtFuncs().inColMode() && this.state.fullviewTransition;
    }
    inColMode() {
      return this.getMtFuncs().inColMode();
    }
    limitColUndoIdx() {
      this.getMtFuncs().raiseMtColEvent({
        type: "limit-undo-current"
      });
    }
    releaseLimitUndoCurrent() {
      this.getMtFuncs().raiseMtColEvent({
        type: "release-limit-undo-current"
      });
    }
    renderComponent() {
      var e = this.getCacheableData(),
        t = tf.getDiagramStyle(e, this.props),
        r = wh.A.addMobileTabletClssIfRequired();
      Rh.assignIdsForGuides(e);
      var n = "diagram" == this.getMtFuncs().getOneMode(),
        i = this.buildSelectionCarrier(),
        s = i.singleEntity(),
        a = i.singleShape(),
        l = i.getSubSelection(),
        c = this.isSinglePlotSettings(a, l),
        d = !!this.state.fullviewTransition,
        h = i.getSelectedEntities(),
        p = e.capPos || "below",
        u = !!e.elements.caption;
      return [this.renderCaptionAbove(n), u && e.isInline && "above" == p ? o().createElement("div", {
        key: "clear-div-above",
        style: {
          clear: "both"
        }
      }) : void 0, o().createElement(Tt.F, {
        key: "main-diagram",
        onTouchOrMouseDown: this.onDiagramMouseDown
      }, o().createElement("math-diagram", {
        onMouseDown: this.onReactDiagramMouseDown,
        onTouchStart: this.onReactDiagramMouseDown,
        "aria-hidden": !0,
        "data-amt": "diagram",
        onDoubleClick: this.handleMathDiagramDoubleClick,
        class: r,
        style: t,
        onFocus: this.onDiagramFocus,
        ref: this.diagramRefs.handleDiagramRef
      }, !d && this.renderSelectRegion(), this.renderShapeRegion(n, e, i), !d && this.renderGuides(), !d && o().createElement("svg", {
        style: dh,
        className: "no-print"
      }, o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(Ao, {
        getDZContainer: this.getDzContainer,
        isSinglePlotSettings: c,
        selectedSessionId: this.selectedSessionId,
        refMap: this.refMap,
        entity: s
      })), this.renderDiagramControls(c, s, l), this.renderSnapIndicator(), this.renderGroupBox(h, l), this.renderGroupBoxForGroupEntity(s, l)), this.renderFreeStyleDrawingOverlay(), !d && this.renderFunctionPlotInput(a, l), !d && this.renderPlotlySettingIcon(a), !d && this.renderXyMatrixSettingIcon(a), this.renderMoreControls(n), this.renderFreeDrawingControl(n), !d && this.renderDgExpander())), u && e.isInline && "below" == p ? o().createElement("div", {
        key: "clear-div-below",
        style: {
          clear: "both"
        }
      }) : void 0, this.renderCaptionBelow(n), this.renderFullView()];
    }
    renderCaptionAbove(e) {
      var t;
      if ("above" == this.props.data.capPos) return this.renderCaption(e, "cap-above");
    }
    renderCaptionBelow(e) {
      var t = this.props.data.capPos;
      if (!t || "below" == t) return this.renderCaption(e, "cap-below");
    }
    getRootElement() {
      return u().findDOMNode(this);
    }
    renderShapeRegion(e, t, r) {
      if (this.state.fullviewTransition) return o().createElement("div", {
        style: {
          width: "100%",
          height: "100%",
          backgroundColor: "lightgray"
        }
      });
      var n = this.context.mathFontSizeBase,
        i = this.getSubMathFont();
      return o().createElement("clip-region", {
        style: {
          width: "100%",
          height: "100%",
          display: "block",
          overflow: e ? "visible" : "hidden",
          position: "relative"
        }
      }, o().createElement("zoom-region", {
        ref: this.diagramRefs.getCachedRefMethod("ZoomRegion", e => this.zoomRef = e),
        style: this.getZoomStyle()
      }, o().createElement(Ri, {
        data: t,
        selected: this.props.selected,
        ref: this.diagramRefs.getCachedRefMethod("Grid", e => this.grid = e)
      }), this.renderPlotlyLayer(), o().createElement("svg", {
        style: e ? {
          overflow: "visible"
        } : void 0,
        className: "role-diagram-draw-area",
        ref: this.diagramRefs.getCachedRefMethod("MainSvg", e => this.mainSvg = e)
      }, o().createElement(Fo, {
        getBaseElement: this.getZoomRef,
        ref: this.diagramRefs.handleDiagramShapesRef,
        fixedContextHandler: this.context.fixedContextHandler,
        diagramFixedCtxHandler: this.diagramFixedConextHandler,
        intersectionSelected: !!r.singleIntersectionId(),
        selectedDgObj: r.getSelectedDgObj(),
        selectionCarrier: r,
        remoteSelections: this.remoteSelection.getSelections(),
        subSelection: r.getSubSelection(),
        selectIntersections: (e, t) => this.selectedOf.selectIntersection(e.id, t),
        onSelect: this.handleEntitySelect,
        intersections: t.intersections || {
          items: []
        },
        onShapeChanged: this.handleCompositeShapeChanged,
        shapes: t.shapes || []
      }), o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        updateOnlyByEditor: !0,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(Lf, {
        data: t,
        refMap: this.refMap,
        selectionCarrier: r,
        onSelect: this.handleEntitySelect
      })), o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(Gi, {
        refMap: this.refMap,
        fixedContextHandler: this.context.fixedContextHandler,
        getBaseElement: this.getZoomRef,
        singleSelectedId: r.singleConnectionId(),
        selectionCarrier: r,
        onMouseDown: this.handleEntitySelect,
        data: t,
        ref: this.diagramRefs.handleConnectionsRef
      })), o().createElement(Gd, {
        manager: this.delayUpdaterManager,
        isChangedInState: this.isChangedInState(),
        editorUpdateNotifier: this.editorUpdateNotifier,
        updateOnlyByEditor: !0,
        fixedContextHandler: this.context.fixedContextHandler
      }, o().createElement(qi, {
        ref: this.diagramRefs.handleEditorFramesRef,
        getDzContainer: this.getDzContainer,
        fixedContextHandler: this.context.fixedContextHandler,
        refMap: this.refMap,
        getBaseElement: this.getZoomRef,
        onConnectionPointMouseDown: this.onConnectionPointMouseDown,
        singleSelectedId: r.singleEditorId(),
        data: t,
        selectedKey: this.props.selected && this.props.selected.key
      })), o().createElement(Ni, {
        getDocZoomContainer: this.getMtFuncs().getDocZoomContainer,
        ref: this.diagramRefs.handleConnectionFinderRef,
        diagramModel: t,
        refMap: this.refMap,
        getBaseElement: this.getZoomRef,
        addConnection: this.handleFinderAddConnection
      })), this.renderInsertionLayer(), o().createElement(W, {
        ref: this.diagramRefs.handleEditorsRef,
        onRequestEdit: this.handleRequestEdit,
        getBaseElement: this.getZoomRef,
        getDzContainer: this.getDzContainer,
        data: t,
        onEditorChange: this.handleEditorChange,
        mathFontSizeBase: n,
        baseMathModeFont: this.context.baseMathModeFontFamily,
        textFontSizeBase: this.context.fontSizeBase,
        baseTextModeFont: this.getMtFuncs().getBaseTextModeFont(),
        subMathTypeFont: i,
        singleSelectedId: r.singleEditorId(),
        selectedDgObj: r.getSelectedDgObj(),
        remoteSelections: this.remoteSelection.getSelections(),
        selectionCarrier: r,
        onSelectItem: this.handleEntitySelect,
        editorDidUpdate: this.handleEditorDidUpdate,
        selected: this.props.selected,
        renderEditArea: (t, r) => {
          var n = D.A.getTextSetting(t, "fontSize"),
            i = la.l.getReactFontSizeStyle(n);
          i && (r = Bf(Bf({}, r), {}, {
            fontSize: i
          }));
          var s = t.isTextMode ? this.context.fontSizeBase : this.context.mathFontSizeBase,
            a = la.l.getFontSizeRatio(n, s),
            l = this.buildMetaDataFromName(t.id),
            c = t.shape.data || {},
            d = c.flipX,
            h = c.rotation,
            p = c.skewX,
            u = !!(d || h || p),
            m = this.getMtFuncs(),
            f = m.shouldUseOpmEditArea() && !t.isTextMode ? Cf.s : g.A;
          return o().createElement(f, Bf(Bf({}, l), {}, {
            key: "fs-".concat(a, "-").concat(t.isMathDisplayMode ? "md" : "ms"),
            dgTextInfo: Ef.cacheDgTextInfo(u, e),
            delayEnabled: !u && !e && m.deplayRenderInDiagramEnabled(),
            isTextMode: t.isTextMode,
            style: r,
            borderIfEmpty: !0,
            noAreaContainer: !0,
            isFirstMathModeLevel: !0,
            fontSizeRatio: a,
            displayMode: !t.isTextMode && t.isMathDisplayMode,
            className: I()("diagram-editor", {
              "non-wrap": !t.shape.data.size
            })
          }));
        }
      })), o().createElement(jo, {
        ref: this.diagramRefs.handleRectangleSelectionLayerRef,
        onRectangleSelect: this.handleRectangelSelect,
        getDzContainer: this.getDzContainer
      }));
    }
    renderDiagramExtraControls(e) {
      var t;
      if (e) {
        var r = this.buildSelectionCarrier(),
          n = r.getSelectedEntities();
        null === (t = this.positionDetailsRetriever.retrieve(n, r.getSubSelection())) || void 0 === t || t.then(e => {
          this.getMtFuncs().requestRenderDiagramExtraControls(o().createElement(ff, {
            posData: e,
            hasAnyGuide: this.hasAnyGuide(),
            showGuide: this.state.showGuide,
            zoom: 1,
            onZoom: void 0,
            onAddNewHorizontalGuide: this.handleHorizontalGuideAdding,
            onAddNewVerticalGuide: this.handleVerticalGuideAdding,
            onGuideShow: this.handleGuideShow,
            onPosDataChange: this.handlePostDataChange
          }));
        }).catch(e => {
          (0, c.MB)(e) || console.error(e);
        });
      }
    }
  }
  function _f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Nf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class zf extends s.A {
    constructor() {
      super(), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return jf;
    }
    getLatextName() {
      return "\\diagram";
    }
    getSymbol() {
      return "diagram";
    }
    getModelMeta() {
      return {
        noInnerRemove: !0,
        noInnerInsert: !0,
        text: this.getLatextName(),
        elements: {}
      };
    }
    getModel(e) {
      var t = super.getModel(e);
      t.connections = [], t.intersections = {
        id: a.w.nextDiagramIntersectionId(),
        items: [],
        style: {}
      }, t.shapes = [], t.settings = {
        grid: !0
      }, t.elements || (t.elements = {}), e && e.restrictedView && (t.settings.diagramHeight = 100);
      var r = null == e ? void 0 : e.customData;
      if ("\\inline-diagram" == (null == e ? void 0 : e.names[0]) && (t.isInline = !0, t.settings.diagramHeight = 100, t.settings.diagramWidth = 100, t.settings.grid = !1), r && "plotly-request" == r.type) {
        var n = e.customData;
        return this.createPlotlyShape(n, t), t;
      }
      if (r && "function-plot" == r.type) {
        var i = e.customData,
          o = {
            id: a.w.nextDiagramCompositeShapeId(),
            type: "plot",
            data: void 0,
            functions: [],
            axes: void 0,
            variables: []
          };
        t.settings.diagramHeight = 310, t.settings.grid = !1;
        var s = 40,
          l = {
            p1: {
              x: 20,
              y: 10
            },
            p2: {
              x: i.diagramWidth - 20,
              y: 280
            }
          },
          c = y.A.rectWidth(l);
        return o = ie.A.createFunctionPlot(o, l, {
          x: c / 2,
          y: -140
        }), t.shapes.push(o), rg.setNextPlotConfig(o), t;
      }
      if (r && "xymatrix-request" == r.type) {
        var d = e.customData,
          h = H.W.createShape({
            shapeWidth: 260,
            shapeHeight: 170,
            diagramRect: {
              left: 0,
              top: 0,
              right: d.diagramWidth,
              bottom: 240,
              width: d.diagramWidth,
              height: 240
            },
            dzc: {
              zoomRatio: 1
            }
          }),
          p = Math.max(20, (d.diagramWidth - 260) / 2),
          u = Nf(Nf({}, h), {}, {
            data: Nf(Nf({}, h.data), {}, {
              p1: {
                x: p,
                y: 30
              },
              p2: {
                x: p + 260,
                y: 200
              }
            })
          });
        return t.settings.diagramHeight = 240, t.settings.grid = !1, t = H.W.addShapeToDiagram(t, u), rg.setNextPlotConfig(u), t;
      }
      return t;
    }
    createPlotlyShape(e, t) {
      var r = ie.A.create(e.plotType);
      if (r) {
        t.settings.diagramHeight = 310, t.settings.grid = !1;
        var n = "pie" == e.plotType ? Math.max(0, e.diagramWidth - 400) : 40,
          i = {
            id: a.w.nextDiagramCompositeShapeId(),
            type: "plotly",
            data: {
              p1: {
                x: n / 2,
                y: 10
              },
              p2: {
                x: e.diagramWidth - n / 2,
                y: 280
              }
            },
            plotlyData: r
          };
        rg.setNextPlotConfig(i), t.shapes.push(i);
      }
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        displayName: "\\diagram, \\drawing",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 25,
        singleBlockLine: !0,
        selectControlled: !0,
        insertInTextModeOnly: !0,
        description: "Insert Diagram/Drawing Area",
        renderSymbol: () => o().createElement("div", null, re.A.shapes())
      }), this.fillSymbolInfo({
        type: "composite",
        displayName: "\\inline-diagram, \\inline-drawing",
        names: ["\\inline-diagram"],
        symbol: this.getSymbol(),
        height: 25,
        selectControlled: !0,
        description: "Insert Inline Diagram/Drawing Area",
        renderSymbol: () => o().createElement("div", null, re.A.shapes())
      })];
    }
    toModel(e, t, r) {
      var n;
      return this.getModel();
    }
    toLatex(e, t) {
      var r;
      return e.isInline && (r = {
        removeEmptyLine: !0,
        verticalAlign: e.settings.verticalAlign || "middle",
        forceBoxSize: !0,
        nodeOptions: void 0
      }), "latex-latex" == t.textType ? Md.convertModel(e, t.mathTypeHtml, t.pageSettings, r) : "";
    }
  }
  const Hf = new zf();
};
