/* module 4776 — 4456 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    q: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(70224),
    a = r(87571),
    l = r(40383);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleCaptionPosChange", e => {
        this.props.onDataChange(d(d({}, this.props.data), {}, {
          capPos: e
        }), void 0);
      }), (0, n.A)(this, "handleCaptionInfoChange", e => {
        this.props.onDataChange(d(d({}, this.props.data), {}, {
          cpi: e
        }), void 0);
      }), (0, n.A)(this, "handleAddCaption", e => {
        var t = this.props.data,
          r = s.A.createEmptyEditor();
        r.lines[0].style = {
          align: "center"
        };
        var n = d(d({}, t), {}, {
          elements: {
            caption: r
          }
        });
        e.stopPropagation(), e.preventDefault(), this.props.onDataChange(n, {
          selected: {
            lineIndex: 0,
            charIndex: 0
          },
          key: "caption"
        });
      }), (0, n.A)(this, "handleEditCaptionPrefix", () => {
        this.props.fixedContextHandler.getMtFuncs().notifyCaptionNumbering("request-prefix-edit", "image");
      }), (0, n.A)(this, "handleCaptionPrefixMouseDown", e => {
        this.props.onSelectedChanged({
          key: "caption",
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        }), e.stopPropagation(), e.preventDefault();
      }), (0, n.A)(this, "handleDeleteCaption", () => {
        var e = d(d({}, this.props.data), {}, {
          elements: d(d({}, this.props.data.elements), {}, {
            caption: void 0
          })
        });
        this.props.onDataChange(e, {
          controlled: !0
        });
      });
    }
    getTextAlignFromFirstLine() {
      if (!this.props.data.elements.caption) return "left";
      var e = this.props.data.elements.caption.lines[0].style;
      return e && e.align || "left";
    }
    render() {
      if (!this.props.data.elements.caption) return this.props.selected ? o().createElement("div", {
        style: l.a.applyReverseZoomStyle({
          transform: "translate(-50%, 0)",
          fontFamily: '"Segoe UI", Arial, Verdana, sans-serif'
        }, this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer(), "center"),
        className: "add-caption no-print",
        onMouseDown: this.handleAddCaption,
        key: "add-caption"
      }, "Add Caption") : o().createElement("div", {
        style: {
          display: "none"
        }
      });
      var e = this.props.captionInfo,
        t = this.props.fixedContextHandler.getMtFuncs();
      return o().createElement(a.q, {
        requestPickerSettings: t.requestColorPickerSettings,
        capPos: this.props.data.capPos || "below",
        allowSwichCaption: !0,
        onCaptionPosChange: this.handleCaptionPosChange,
        mainStyle: d(d({}, this.props.style), {}, {
          justifyContent: this.props.justifyContent
        }),
        cType: "image",
        blockId: this.props.data.id,
        classNameKey: "image",
        captionPrefix: e.name,
        psTextStyle: e.textStyle,
        selected: this.props.selected,
        textAlignFirstLine: this.getTextAlignFromFirstLine(),
        onCaptionPrefixMouseDown: this.handleCaptionPrefixMouseDown,
        onDeleteCaption: this.handleDeleteCaption,
        onEditCaptionPrefix: this.handleEditCaptionPrefix,
        notifyCaptionNumbering: t.notifyCaptionNumbering,
        captionInfo: this.props.data.cpi,
        onCaptionInfoChange: this.handleCaptionInfoChange
      }, this.props.renderCaptionEditArea());
    }
  }
};
