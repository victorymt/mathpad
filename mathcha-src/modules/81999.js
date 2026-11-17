/* module 81999 — 6028 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => C
  });
  var n = r(64467),
    i = r(19340),
    o = r(40927),
    s = r.n(o),
    a = r(39791),
    l = r(25742),
    c = r(61848),
    d = r(84881),
    h = r(30803),
    p = r(84258),
    u = r(69446),
    g = r(40383),
    m = r(32485),
    f = r.n(m),
    y = r(7258),
    v = r(15706);
  function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "arrow-like-symbol"), (0, n.A)(this, "sourceArrowRef", v.q.create()), (0, n.A)(this, "onSettingClick", e => {
        e.stopPropagation(), e.preventDefault();
        var t = {
          top: {
            id: h.w.nextId(),
            lines: [{
              id: h.w.nextId(),
              blocks: []
            }]
          },
          bottom: {
            id: h.w.nextId(),
            lines: [{
              id: h.w.nextId(),
              blocks: []
            }]
          }
        };
        this.props.onDataChanged(c.A.set(this.props.data, "elements", t)), this.selectElement("top");
      });
    }
    notifyChildrenWidthChange() {
      this.sourceArrowRef.invalidateDrawing(), this.forceUpdate();
    }
    renderSetting() {
      if (this.isDirectSelectedNoSelectionMode()) {
        var e = {};
        return e = p.A.isMobileOrTablet() ? {
          transform: "scale(1.3)"
        } : g.a.applyReverseZoomStyle(e, this.getDzContainer(), "center bottom"), s().createElement("add", {
          className: "no-print",
          style: e,
          key: 2,
          onMouseDown: this.onSettingClick
        }, s().createElement("i", {
          className: "fa fa-plus",
          "aria-hidden": "true"
        }));
      }
    }
    getArrow() {
      return "⇔";
    }
    getMarginClass() {
      var e = this.shiftSupSub();
      return e || "small-margin";
    }
    renderComposedArrow() {
      return s().createElement(d.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        repeatChar: "⏪",
        endChar: "⏫"
      });
    }
    renderMiddle() {
      var e = (0, i.zN)(this.context.baseMathModeFontFamily),
        t = (0, y.zc)(e, this.getArrow()),
        r = (0, y.wb)(e, {
          char: this.getArrow(),
          fontSize: this.getMathFontSizePixel(),
          fixedContextHandler: this.context.fixedContextHandler,
          drawingRef: this.sourceArrowRef.ref,
          notifyData: this.props.data,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "visible"
          }
        });
      return s().createElement("middle", {
        key: "middle",
        style: t ? {
          height: "".concat(t.heightEm, "em"),
          lineHeight: 0
        } : void 0
      }, s().createElement("inside", {
        style: t ? {
          height: "100%",
          verticalAlign: "top"
        } : void 0
      }, r || this.renderComposedArrow()));
    }
    renderSimpleArrow() {
      return s().createElement("arrow-like-simple", null, s().createElement("span", {
        key: 1
      }, this.getArrow()), this.renderSetting());
    }
    moreSpaceSupSub() {}
    shiftSupSub() {}
    getLowerKindTopEm() {
      return .2;
    }
    renderTop() {
      if (this.props.data.elements.top) {
        var e = f()(this.getMarginClass(), "top", "center", this.moreSpaceSupSub());
        return s().createElement(a.A, x(x({
          key: "top",
          className: e,
          style: (0, y.zc)((0, i.zN)(this.context.baseMathModeFontFamily), this.getArrow()) ? {
            marginBottom: "".concat((0, i.zN)(this.context.baseMathModeFontFamily).arrows.labelMarginEm || 0, "em")
          } : void 0
        }, this.buildMetaDataDirectChildOrEmpty("top")), {}, {
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noAreaContainer: !0,
          noSpacingRule: !0,
          stripInfo: this.getMergedStripInfoWithProps(u.m5)
        }));
      }
      return null;
    }
    renderBottom() {
      if (this.props.data.elements.bottom) {
        var e = f()(this.getMarginClass(), "bottom", "center", this.moreSpaceSupSub());
        return s().createElement(a.A, x(x({
          key: "bottom",
          style: (0, y.zc)((0, i.zN)(this.context.baseMathModeFontFamily), this.getArrow()) ? {
            marginTop: "".concat((0, i.zN)(this.context.baseMathModeFontFamily).arrows.labelMarginEm || 0, "em")
          } : void 0 === (0, i.zN)(this.context.baseMathModeFontFamily).arrows.lowerLabelMarginEm || this.moreSpaceSupSub() ? void 0 : {
            marginTop: this.getRoundEmStr((0, i.zN)(this.context.baseMathModeFontFamily).arrows.lowerLabelMarginEm)
          },
          className: e
        }, this.buildMetaDataDirectChildOrEmpty("bottom")), {}, {
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noAreaContainer: !0,
          noSpacingRule: !0,
          stripInfo: this.getMergedStripInfoWithProps(u.zZ)
        }));
      }
      return null;
    }
    renderComponent() {
      return this.hasElementsData() ? [this.renderTop(), this.renderMiddle(), this.renderBottom()] : this.renderSimpleArrow();
    }
  }
};
