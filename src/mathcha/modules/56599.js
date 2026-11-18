/* module 56599 — 5617 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(25742),
    l = r(35835),
    c = r(51915),
    d = r(36223),
    h = r(39791),
    p = r(94362),
    u = r(4776);
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
  class f extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "onSelected", e => {
        this.getEditorInfo().isReadOnly || (d.A.setCustomInfo(e, l.A.getBuilder().withHandledCursorSelected().build()), this.props.onSelectedChanged({
          controlled: !0
        }), console.log("on selected"));
      }), (0, n.A)(this, "onDataChanged", e => {
        this.props.onDataChanged(e, {
          focusAcquired: !0,
          isOneLineChanged: !0,
          preventScroll: !0
        });
      }), (0, n.A)(this, "handleImageDataChange", (e, t) => {
        t ? p.A.in(() => {
          this.props.onDataChanged(e), this.props.onSelectedChanged(t);
        }) : this.props.onDataChanged(e);
      }), (0, n.A)(this, "handleImageSelectedChange", e => {
        this.props.onSelectedChanged(e);
      }), (0, n.A)(this, "handleOnSwitchInlineContainer", () => {
        this.props.onDataChanged(m(m({}, this.props.data), {}, {
          text: "\\inline-image"
        }), {
          isOneLineChanged: !0
        });
      }), this.containerClassName = "image-container no-cursor-selected no-editor";
    }
    isInlineMode() {
      return !1;
    }
    getJustifyContentFromAlign(e) {
      return "center" == (e = e || "left") ? "center" : "right" == e ? "flex-end" : "flex-start";
    }
    renderCaption(e) {
      var t,
        r = this.context.fixedContextHandler.getMtFuncs(),
        n = this.props.data;
      return o().createElement(u.q, {
        key: e,
        data: n,
        selected: this.props.selected,
        captionInfo: r.getCaptionInfo("image"),
        justifyContent: this.getJustifyContentFromAlign(n.align),
        onDataChange: this.handleImageDataChange,
        onSelectedChanged: this.handleImageSelectedChange,
        fixedContextHandler: this.context.fixedContextHandler,
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
    getCapPos() {
      return this.props.data.capPos || "below";
    }
    renderCaptionAbove() {
      if ("above" == this.getCapPos()) return this.renderCaption("cap-above");
    }
    renderCaptionBelow() {
      if ("below" == this.getCapPos()) return this.renderCaption("cap-below");
    }
    renderComponent() {
      return [this.renderCaptionAbove(), o().createElement(c.A, {
        getDzContainer: this.getDzContainer,
        onSwitchInlineContainer: this.handleOnSwitchInlineContainer,
        fixedContextHandler: this.context.fixedContextHandler,
        key: "image-view",
        selectOnly: this.isSelectModeOnly(),
        width: "300",
        height: "300",
        isSelected: this.props.selected && this.props.selected.controlled,
        onSelected: this.onSelected,
        data: this.props.data,
        onDataChanged: this.onDataChanged
      }), this.renderCaptionBelow()];
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
      return "\\image-container";
    }
    getModel(e) {
      var t = this.getModelFromStructure({}, this.getLatextName());
      return t.align = "center", t.scaleOption = "width", t.imageSize = {
        width: 300,
        height: 300
      }, t.url = e && e.imageUrl ? e.imageUrl : "", t;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "value",
        elements: {
          caption: {
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        height: 25,
        singleBlockLine: !0,
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
