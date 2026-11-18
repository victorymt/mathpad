/* module 38676 — 3420 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TheoremRef: () => h,
    TheoremRefSc: () => p,
    default: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(48440),
    l = r(25742),
    c = r(21774),
    d = r(24373);
  class h extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    getClassName() {
      return "theorem-ref";
    }
    setResolve(e) {
      c.A.areEqualShallow(this.state.resolved, e) || this.setState({
        resolved: e
      });
    }
    renderComponent() {
      var e = this.state.resolved,
        t = "?";
      return e && "missing" != e.type ? "auto" == e.type && (t = "".concat(e.prefix, " ").concat(e.count)) : t = "?", [o().createElement("span", {
        key: "name",
        className: "theorem-ref-resolved-span",
        style: {
          outline: this.isSelected() ? "1px solid lightgray" : void 0
        },
        "data-theorem-ref-id": this.props.data.refTagId
      }, t), this.renderLinkIcon()];
    }
    renderLinkIcon() {
      if (this.isSelected()) return o().createElement("div", {
        key: "more-options",
        style: {
          position: "absolute",
          left: 0,
          top: "-1.5em",
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("span", {
        className: "setting-select",
        style: {
          padding: "2px 3px"
        },
        onMouseDown: e => {
          e.stopPropagation();
          var t = this.props.data.refTagId;
          if (t) {
            var r = s.Zy(document, 'compositeblock.theorem>theorem-name[data-theorem-id="'.concat(t, '"]'));
            if (r) {
              var n = this.getEditorInfo().scrollSelector;
              d.A.scrollToElement(n, r, {
                duration: 500
              });
            }
          }
        }
      }, o().createElement("i", {
        className: "fa fa-arrow-right",
        style: {
          fontSize: 13
        }
      })));
    }
    componentWillMount() {
      super.componentWillMount && super.componentWillMount(), this.getMtFuncs().notifyTheorem("ref-added");
    }
  }
  class p extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getModel(e) {
      e = e || {
        names: []
      };
      var t = super.getModel(e);
      return t.refTagId = e.tagId, t;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getViewComponent() {
      return h;
    }
    getLatextName() {
      return "\\theorem-ref";
    }
    renderSymbolText() {
      return "theorem-ref";
    }
    getDescription() {
      return "reference to theorem";
    }
    getSymbol() {
      return "ref";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0,
        noFocusOnCloseAutoComplete: !0,
        description: this.getDescription(),
        renderSymbol: () => o().createElement("span", null, this.renderSymbolText())
      });
    }
    toLatex(e) {
      var t = e.refTagId,
        r;
      return t ? s.yR("#".concat(t.replace(".", "\\."))) : "(?)";
    }
  }
  const u = new p();
};
