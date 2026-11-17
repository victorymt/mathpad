/* module 28979 — 5959 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => P
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(48440),
    c = r(30803),
    d = r(69153),
    h = r(39791),
    p = r(61848),
    u = r(43085);
  class g extends o().Component {
    render() {
      return o().createElement("div", {
        style: v
      }, o().createElement("div", {
        style: y
      }), o().createElement("div", {
        style: f
      }), o().createElement("div", {
        style: m
      }));
    }
  }
  var m = {
      marginLeft: 9,
      border: "1px solid gray",
      width: 20
    },
    f = {
      height: 2
    },
    y = {
      border: "1px solid gray",
      width: 20
    },
    v = {
      display: "flex",
      flexDirection: "column",
      width: 32,
      border: "1px solid gray",
      padding: "2px 2px"
    },
    b = r(25742),
    x = r(32485),
    C = r.n(x),
    S = r(58578),
    A = r(53359),
    w = r(47858);
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
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class O extends b.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "onTagInfoChanged", (e, t) => {
        var r = p.A.setProp(this.props.data, "tagInfo", e);
        this.props.onDataChanged(r, t);
      });
    }
    getCompositeBlockStyle() {
      var e = super.getCompositeBlockStyle(),
        t = this.getComputedFontSizeRatio();
      return k(k({}, e), {}, {
        fontSize: this.context.mathFontSizeBase * t,
        display: "flex",
        alignItems: "flex-end",
        background: "transparent"
      });
    }
    isInlineMode() {
      return !1;
    }
    getClassName() {
      return C()("math-container-symbol", "display", "composite-multiline", "role-mathmode-area", "role-multiline-block");
    }
    renderTag() {
      if (this.props.selected || A.p.shouldShowTagInfo(this.props.data)) {
        var e = this.context.fixedContextHandler.getMtFuncs(),
          t = e.getBaseTextModeFontSize() * (this.props.fontSizeRatio || 1),
          r = S.A.textFontFamilyFromKey(e.getBaseTextModeFont());
        return o().createElement(u.G, {
          key: "tag",
          getDzContainer: e.getDocZoomContainer,
          tagPosition: "block",
          fontFamily: r,
          fontSize: t,
          emptyStyle: {
            marginRight: -28,
            top: "unset",
            transform: "none",
            bottom: 0
          },
          existStyle: {
            display: "block",
            position: "relative",
            transform: "none",
            paddingLeft: 10,
            top: "unset",
            right: "unset",
            marginBottom: 1
          },
          onTagInfoChanged: this.onTagInfoChanged,
          tagInfo: this.props.data.tagInfo,
          fixedContextHandler: this.context.fixedContextHandler
        });
      }
    }
    getSelectedBg() {
      return this.context.fixedContextHandler.getSelectedMathBg();
    }
    renderComponent() {
      return [o().createElement(h.A, k(k({
        key: "editarea",
        className: "math-mode-font multiline",
        displayMode: !0
      }, this.buildMetaDataFromName("mathValue")), {}, {
        showBorderOnSelected: !1,
        noAreaContainer: !0,
        isFirstMathModeLevel: !0,
        style: k({
          background: this.props.selected ? this.getSelectedBg() : void 0
        }, w.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily))
      })), this.renderTag()];
    }
  }
  class D extends l.A {
    getViewComponent() {
      return O;
    }
    getModel() {
      var e;
      return this.getModelFromStructure({
        mathValue: "editor"
      }, "\\multiline");
    }
    getModelMeta() {
      return {
        text: "\\multiline",
        keyInsertOnSelection: "mathValue",
        elements: {
          mathValue: {
            onRemove: "all"
          }
        }
      };
    }
    toModel(e, t) {
      return {
        id: c.w.nextId(),
        type: "composite",
        text: "\\multiline",
        elements: {
          mathValue: {
            id: c.w.nextId(),
            lines: t
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\multiline"],
        height: 25,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement(g, null)
      });
    }
    toLatex(e, t, r) {
      t = a().assign({}, t, {
        inMathExpression: !0
      });
      var n = r.toLatexFromEditor(e.elements.mathValue, t, {
        ignoreWrapMultiline: !0
      });
      return d.Ay.surroundByLine(n, "\\begin{multline*}", "\\end{multline*}");
    }
    toMathml(e, t) {
      var r = t.generateEditor(e.elements.mathValue, {
        forceTable: !0
      });
      if ("mtable" == r.type && r.mcEditorGroup) {
        r.columnalign = void 0;
        for (var n = 1; n < r.rows.length - 1; n++) {
          var i;
          r.rows[n].cells[0].columnalign = "center";
        }
        a().last(r.rows).cells[0].columnalign = "right", a().first(r.rows).cells[0].columnalign = "left";
      }
      return {
        type: "math",
        display: "block",
        elements: [r]
      };
    }
  }
  const P = new D();
};
