/* module 21456 — 5475 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(35835),
    l = r(25742),
    c = r(51915),
    d = r(36223),
    h = r(39791),
    p = r(4776),
    u = r(94362);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends l.A {
    constructor(e) {
      super(e), (0, n.A)(this, "onSelected", e => {
        this.getEditorInfo().isReadOnly || (d.A.setCustomInfo(e, a.A.getBuilder().withHandledCursorSelected().build()), this.props.onSelectedChanged({
          controlled: !0
        }), console.log("on selected"));
      }), (0, n.A)(this, "onDataChanged", e => {
        this.props.onDataChanged(e, {
          focusAcquired: !0,
          preventScroll: !0
        });
      }), (0, n.A)(this, "handleImageDataChange", (e, t) => {
        t ? u.A.in(() => {
          this.props.onDataChanged(e), this.props.onSelectedChanged(t);
        }) : this.props.onDataChanged(e);
      }), (0, n.A)(this, "handleImageSelectedChange", e => {
        this.props.onSelectedChanged(e);
      }), (0, n.A)(this, "handleOnSwitchInlineContainer", () => {
        this.props.onDataChanged(m(m({}, this.props.data), {}, {
          text: "\\image-container"
        }), {
          isOneLineChanged: !0
        });
      }), this.containerClassName = "image-container inline no-cursor-selected no-editor";
    }
    isInlineMode() {
      return !1;
    }
    getCaptionSelected() {
      if (this.props.selected && (this.props.selected.controlled || this.props.selected.selected)) return this.props.selected;
    }
    getCapPos() {
      return this.props.data.capPos || "below";
    }
    renderCaption(e) {
      var t,
        r = this.context.fixedContextHandler.getMtFuncs(),
        n = this.props.data;
      return o().createElement(p.q, {
        key: e,
        style: {
          float: "below" == this.getCapPos() ? "left" : void 0,
          width: "100%"
        },
        data: n,
        selected: this.getCaptionSelected(),
        captionInfo: r.getCaptionInfo("image"),
        justifyContent: "center",
        fixedContextHandler: this.context.fixedContextHandler,
        onDataChange: this.handleImageDataChange,
        onSelectedChanged: this.handleImageSelectedChange,
        renderCaptionEditArea: () => o().createElement(h.A, m(m({}, this.buildMetaDataFromName("caption")), {}, {
          showBorderOnSelected: !1,
          isTextMode: !0,
          className: "image-caption",
          style: {
            minWidth: 50,
            display: "inline"
          }
        }))
      });
    }
    renderComponent() {
      return [this.renderCaptionAbove(), o().createElement(c.A, {
        getDzContainer: this.getDzContainer,
        fixedContextHandler: this.context.fixedContextHandler,
        onSwitchInlineContainer: this.handleOnSwitchInlineContainer,
        key: "image-view",
        inline: !0,
        selectOnly: this.isSelectModeOnly(),
        width: "300",
        height: "300",
        isSelected: this.props.selected && this.props.selected.controlled,
        onSelected: this.onSelected,
        data: this.props.data,
        onDataChanged: this.onDataChanged
      }), this.renderCaptionBelow()];
    }
    renderCaptionAbove() {
      if ("above" == this.getCapPos()) return this.renderCaption("cap-above");
    }
    renderCaptionBelow() {
      if ("below" == this.getCapPos()) return this.renderCaption("cap-below");
    }
  }
  class y extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getViewComponent() {
      return f;
    }
    getLatextName() {
      return "\\inline-image";
    }
    getModel(e) {
      var t = this.getModelFromStructure({}, this.getLatextName());
      return t.align = "center", t.scaleOption = "width", t.imageSize = {
        width: 100,
        height: 100
      }, t.url = e && e.imageUrl ? e.imageUrl : "", t;
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        height: 25,
        selectControlled: !0,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("div", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, o().createElement("i", {
          className: "fa fa-picture-o",
          "aria-hidden": "true"
        }))
      })];
    }
    toLatex(e, t) {
      if (!e.url) return "";
      var r = "img";
      return "bbcode" == t.textType ? "[".concat(r, "]").concat(e.url || "", "[/img]") : "\nimage[".concat(e.url || "", "]\n");
    }
  }
  const v = new y();
};
