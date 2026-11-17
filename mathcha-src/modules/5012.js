/* module 5012 — 3114 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    l: () => p,
    z: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(48440),
    l = r(25742),
    c = r(24373),
    d = r(21774);
  class h extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    setResolve(e) {
      d.A.areEqualShallow(this.state.resolved, e) || this.setState({
        resolved: e
      });
    }
    renderComponent() {
      var e = this.state.resolved,
        t = "?";
      return t = e && "missing" != e.type ? "auto" == e.type ? "".concat(e.prefix, " ").concat(e.count) : e.prefixResolved : "?", [o().createElement("span", {
        key: "name",
        className: this.spanClssName,
        style: {
          outline: this.isSelected() ? "1px solid lightgray" : void 0
        },
        "data-caption-ref-id": this.props.data.refTagId
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
            var r = s.Zy(document, ".role-".concat(this.cType, '-caption-container[data-caption-block-id="').concat(t, '"]'));
            if (r) {
              var n = this.getEditorInfo().scrollSelector;
              c.A.scrollToElement(n, r, {
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
      super.componentWillMount && super.componentWillMount(), this.context.fixedContextHandler.getMtFuncs().notifyCaptionRef(this.cType);
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
};
