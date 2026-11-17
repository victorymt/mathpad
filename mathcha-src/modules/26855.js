/* module 26855 — 4823 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    OL: () => u,
    T2: () => h,
    ih: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(38070),
    a = r(391),
    l = r(43923);
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
  class h extends i.Component {
    shouldComponentUpdate(e, t) {
      return e.shape != this.props.shape || e.className != this.props.className || e.subSelection != this.props.subSelection || e.isSelected != this.props.isSelected || e.isGroupSelected != this.props.isGroupSelected || e.isRemoteSelected != this.props.isRemoteSelected || e.remoteSelectedColor != this.props.remoteSelectedColor;
    }
    shape() {
      return this.props.shape;
    }
    getDzContainer() {
      return this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer();
    }
    getStyleIdContext() {
      return "diagram" == this.props.fixedContextHandler.getMtFuncs().getOneMode() ? "dg-full-view" : "normal";
    }
    hasFillColor() {
      return s.A.hasFillColor(this.style());
    }
    noFillColor() {
      return !this.hasFillColor();
    }
    style() {
      var e, t;
      return this.props.styleInfo.style;
    }
    styleNoFill() {
      return d(d({}, this.style()), {}, {
        fill: "none"
      });
    }
    styleNoStroke() {
      return d(d({}, this.style()), {}, {
        stroke: "none"
      });
    }
    getStyleDefs() {
      var e;
      if (this.props.styleInfo.defs) return this.props.styleInfo.defs;
    }
    transparentStyle() {
      return l.A.getSelectionStyle(this.props, this.props.shape);
    }
    isAnySelected() {
      return l.A.isAnySelection(this.props);
    }
    getTransparentOnlyNoFill(e) {
      return this.hasFillColor() && !this.isAnySelected() ? null : o().createElement("path", {
        className: "transparent no-print",
        d: e,
        style: this.transparentStyle()
      });
    }
  }
  class p extends i.Component {
    shouldComponentUpdate(e) {
      return e.entity != this.props.entity || e.forManyEntities != this.props.forManyEntities || e.subSelection != this.props.subSelection;
    }
    isStyleDifferent(e, t, r) {
      return s.A.getEntityStyle(e, r) != s.A.getEntityStyle(t, r);
    }
    isSettingDifferent(e, t, r) {
      return a.A.getSettings(e, r) != a.A.getSettings(t, r);
    }
    render() {
      return o().createElement("base-composite-settings", null);
    }
  }
  class u {
    constructor() {
      (0, n.A)(this, "getRotationPoints", void 0), (0, n.A)(this, "getBaseRotationPoints", void 0), (0, n.A)(this, "getSupplementaryLines", void 0), (0, n.A)(this, "controlPointMoved", void 0);
    }
    getIcon(e) {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M4,5.6 L16.1,5.6 L16.1,15.2 L4,15.2 Z"
        }))
      };
    }
    getInfo() {
      return {
        entityType: "shape-composite",
        type: this.getType()
      };
    }
    getSettingDefaultValue(e) {}
    getSnapablePoints(e) {
      return [];
    }
    isSupportStyle(e, t) {
      return this.styleSupports(t).indexOf(e) >= 0;
    }
    styleSupports(e) {
      return ["thickness", "strokeColor", "fillColor", "intersection", "strokeType"];
    }
    getBreakdownInfo(e) {
      return this.wrapBreakdownCachable(e, e => this.getBreakdownInfoWhenInvalidCache(e));
    }
    wrapBreakdownCachable(e, t) {
      if (e.___breakdownInfoCache && e.___breakdownInfoCache.data == e.data && e.___breakdownInfoCache.settings == e.settings) return e.___breakdownInfoCache.info;
      var r = t(e);
      return e.___breakdownInfoCache = {
        data: e.data,
        settings: e.settings,
        info: r
      }, r;
    }
    getControlPoints(e, t, r) {
      return [];
    }
    moveControlPoint(e) {
      return e.shape;
    }
  }
};
