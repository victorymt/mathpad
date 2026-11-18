/* module 391 — 2545 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(86835),
    i = r(30803),
    o = r(21744),
    s = r(61848);
  class a {
    getSettings(e, t) {
      if (n.A.isDiagramEditor(e)) return this.getTextSetting(e, t);
      var r = e.settings || {};
      if (null != r[t]) return r[t];
      if ("cornerRadius" == t) return 0;
      if (i.w.isDiagramArrowId(e.id) || i.w.isDiagramConnectionId(e.id)) return this.getArrowOrConnectionSettingDefault(t);
      if (i.w.isDiagramIntersectionId(e.id)) return this.getIntersectionDefault(t);
      if (n.A.isCompositeShape(e)) {
        var s = o.A.getShapeManagement(e);
        if (null != s && s.getSettingDefaultValue) return s.getSettingDefaultValue(t);
      }
      return "grid" != t && "textSnapToGrid" != t && "onlyShowGridOnEditing" != t && ("gridSize" == t ? 10 : "diagramHeight" == t || "diagramWidth" == t ? 300 : "snapToOtherShapes" == t || ("verticalAlign" == t ? "middle" : void 0));
    }
    getPlotSettings(e, t) {
      var r = ((e = e || {}).settings || {})[t];
      return void 0 !== r ? r : "axisType" == t ? "school" : "plotAxisNumering" == t || "plotAxisShow" == t || "plotGridShow" == t || ("majorSteps" == t ? 5 : "minorTickShow" != t && "minorGridShow" != t && ("minorStep" == t ? 9 : "scale" == t ? 8 : "majorTextColor" == t ? "#808080" : "majorTextFontSize" == t ? 11 : "unitType" == t ? "radix10" : "axisColor" == t ? "#000" : "axisArrangement" == t ? "axis-plot-label" : "axisThickness" == t ? .5 : "arrowMode" == t ? "positive" : void 0));
    }
    getIntersectionDefault(e) {
      return "shapeType" == e ? "o" : "radius" == e ? 5 : void 0;
    }
    getTextSetting(e, t) {
      var r = e.shape.settings || {};
      return null != r[t] ? r[t] : "fontSize" == t ? "\\normalsize" : "cornerRadius" == t ? 0 : void 0;
    }
    getArrowOrConnectionSettingDefault(e) {
      switch (e) {
        case "isControlPointBreak":
          return !1;
        case "separatorDistance":
          return 10;
        case "separatorLength":
          return 8;
        case "breakWidth":
          return;
        case "breakPositionPercentage":
          return .5;
        case "perpendicularDistance":
          return 0;
      }
    }
    getArrowOrConnectionSettings(e, t) {
      return null != (e = e || {})[t] ? e[t] : this.getArrowOrConnectionSettingDefault(t);
    }
    setSetting(e, t, r) {
      var n = e.settings || {},
        i = s.A.setProp(n, t, r);
      return s.A.setProp(e, "settings", i);
    }
  }
  const l = new a();
};
