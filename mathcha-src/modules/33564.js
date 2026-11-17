/* module 33564 — 5542 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Theorem: () => b,
    default: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(48440),
    c = r(69153),
    d = r(25742),
    h = r(39791),
    p = r(79490),
    u = r(32485),
    g = r.n(u),
    m = r(47858),
    f = r(21774);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends d.A {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleTheoremMouseDown", e => {
        this.props.onSelectedChanged({
          key: "theorem",
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }), e.stopPropagation(), e.preventDefault();
      }), this.containerClassName = "theorem", this.showSelectedAnyLevel = !0;
    }
    setResolve(e, t) {
      f.A.areEqualShallow(this.state.resolved, e) && !t || this.setState({
        resolved: e
      });
    }
    getDefaultBaseLine() {
      var e = a().findDOMNode(this);
      return {
        top: this.getElementRect(e.lastElementChild).bottom,
        positionType: "bottom"
      };
    }
    componentDidMount() {
      super.componentDidMount(), this.getMtFuncs().notifyTheorem("theorem-change");
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.getMtFuncs().notifyTheorem("theorem-change");
    }
    getTheoremContentClass(e, t) {
      return g()("edit-theorem-content", {
        normal: !p.T.theoremShouldItalic(e, t)
      });
    }
    renderConfig() {
      if (this.isDirectChildSelected()) return o().createElement("bulb", {
        key: "bulb",
        className: "smaller",
        style: {
          left: -25,
          top: 0
        },
        onMouseDown: e => {
          e.stopPropagation(), this.getMtFuncs().requestTheoremConfig();
        }
      }, o().createElement("i", {
        className: "fa fa-cog"
      }));
    }
    getTheoremPrefixStyle(e) {
      var t = e.style || p.T.getDefaultTheoremStyle(),
        r;
      return m.A.getHtmlFromBlockStyle(t, !0, void 0, "Asana", "ptm");
    }
    renderComponent() {
      var e,
        t,
        r = this.getMtFuncs().getTheoremInfo(),
        n = p.T.getTheoremOrDefault(this.props.data.theoremKey, r),
        i = this.getTheoremPrefixStyle(n),
        s = n.countPaddings || p.T.getDefaultCountPaddings(),
        a = this.state.resolved,
        l = null !== (e = null == a ? void 0 : a.prefix) && void 0 !== e ? e : n.name,
        c = null !== (t = null == a ? void 0 : a.count) && void 0 !== t ? t : "1";
      return [o().createElement("theorem-name", {
        "data-theorem-id": this.props.data.id,
        style: i,
        key: "theorem-name",
        onMouseDown: this.handleTheoremMouseDown
      }, l), o().createElement("theorem-counting", {
        style: v(v({}, i), {}, {
          paddingLeft: "".concat(s.left, "em"),
          paddingRight: "".concat(s.right, "em")
        }),
        key: "couting",
        onMouseDown: this.handleTheoremMouseDown
      }, c), o().createElement(h.A, v(v({
        key: "content"
      }, this.buildMetaDataFromName("theorem")), {}, {
        showBorderOnSelected: !1,
        isTextMode: !0,
        className: this.getTheoremContentClass(r, n)
      })), this.renderConfig()];
    }
  }
  class x extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getModel(e) {
      var t = super.getModel(e);
      return e ? (t.theoremKey = e.theorem.key, t) : t;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          theorem: {
            onRemove: "all"
          }
        }
      };
    }
    getViewComponent() {
      return b;
    }
    getLatextName() {
      return "\\theorem";
    }
    getSymbol() {
      return "theorem";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("theorem-symbol", null, "Theorem")
      });
    }
    toLatex(e, t, r) {
      if ("latex-latex" == t.textType) {
        var n = p.T.getTheorem(e.theoremKey, t.theoremInfo);
        t.convertedInfo.addRequiredTheorem(n.key, t.theoremInfo);
        var i = r.toLatexFromEditor(e.elements.theorem, t);
        return c.Ay.surroundByLine(i, "\\begin{".concat(n.env, "}"), "\\end{".concat(n.env, "}"));
      }
      return "bbcode" == t.textType ? "[b]".concat(e.___theoremName, "[/b]  [i]").concat(r.toLatexFromEditor(e.elements.theorem, t), "[/i]") : e.___theoremName + " " + r.toLatexFromEditor(e.elements.theorem, t);
    }
  }
  const C = new x();
};
