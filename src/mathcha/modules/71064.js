/* module 71064 — 4277 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    RawLatex: () => y,
    RawLatexSc: () => v,
    default: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(33476),
    d = r(36223),
    h = r(2543),
    p = r.n(h),
    u = r(58578),
    g = r(40383);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "handleRawLatexChange", e => {
        var t = e.currentTarget.value,
          r = f(f({}, this.props.data), {}, {
            rawLatex: t
          });
        this.props.onDataChanged(r, {
          focusAcquired: !0
        });
      }), this.containerClassName = "raw-latex", this.migrateToNewStructure();
    }
    renderSettings() {
      var e = this.props.data.rawLatex,
        t = this.getDzContainer();
      if (this.isDirectAndChildSelected()) return o().createElement(c.A, {
        appliedDzContainer: t,
        reversedScaleDZOrigin: "right bottom",
        smaller: !0,
        closeOnClickOutside: !0
      }, o().createElement("setting", {
        className: "mt-common-dialog no-print",
        onMouseDown: d.A.focusAndCursorSelectAcquired,
        style: g.a.applyReverseZoomStyle({
          position: "absolute",
          top: "100%",
          fontSize: 14,
          marginTop: 5
        }, t, "left top")
      }, o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("span", {
        style: {
          display: "block",
          color: "gray",
          paddingBottom: 2
        }
      }, "Latex: "), o().createElement("textarea", {
        value: e || "",
        style: {
          flexGrow: 1,
          height: 60,
          width: 250
        },
        onChange: this.handleRawLatexChange
      }))));
    }
    renderComponent() {
      return this.migrateToNewStructure(), o().createElement("div", null, o().createElement(s.A, f(f({}, this.buildMetaDataFromName("rawLatexValue")), {}, {
        style: {
          fontFamily: u.A.textFontFamilyFromKey(this.context.fixedContextHandler.getMtFuncs().getBaseTextModeFont()),
          fontSize: this.getTextFontSizePixel()
        },
        borderIfEmpty: !0,
        isTextMode: !0
      })), this.renderSettings());
    }
    migrateToNewStructure() {
      this.props.data.elements.textValue && (this.props.data.elements.rawLatexValue = p().cloneDeep(this.props.data.elements.textValue), delete this.props.data.elements.textValue);
    }
  }
  class v extends l.A {
    constructor() {
      super();
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\raw-latex";
    }
    getSymbol() {
      return "raw-latex";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          rawLatexValue: {
            onRemove: "all"
          }
        }
      };
    }
    toModel() {
      var e;
      return this.getModel();
    }
    migrateToNewStructure(e) {
      e.elements.textValue && (e.elements.rawLatexValue = p().cloneDeep(e.elements.textValue), delete e.elements.textValue);
    }
    toLatex(e) {
      return e.rawLatex ? e.rawLatex : (this.migrateToNewStructure(e), e.elements.rawLatexValue.lines.reduce((e, t) => e + t.blocks.reduce((e, t) => e + t.text, ""), ""));
      var t, r;
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: this.toLatex(e)
      };
    }
  }
  const b = new v();
};
