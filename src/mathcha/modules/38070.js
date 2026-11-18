/* module 38070 — 8249 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => g
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(2543),
    a = r.n(s),
    l = r(97865),
    c = r(20243),
    d = r(39314),
    h = r(30803),
    p = r(37566);
  class u {
    getMathTypeBackgroundColor(e) {
      var t = p._T(e, "background-color"),
        r = d.A.colorToArr(t, void 0);
      return r && r[3] ? t : "white";
    }
    hasFillColor(e) {
      if (!e) return !0;
      var t = e.fill;
      return t && "none" != t && "transparent" != t;
    }
    noFillColor(e) {
      return !this.hasFillColor(e);
    }
    buildTranslateAttributeTransform(e, t, r) {
      return r ? new c.Z().translate(e, t).rotate(r).toSVG() : new c.Z().translate(e, t).toSVG();
    }
    buildTranslateStyleTransform(e, t, r) {
      return r ? new c.Z().translate(e, t).rotate(r).toCssStyle() : new c.Z().translate(e, t).toCssStyle();
    }
    getEntityStyle(e, t) {
      return h.w.isDiagramEditorId(e.id) ? this.getEditorStyle(e, t) : this.getStyle(e.style, t);
    }
    getEditorStyle(e, t) {
      return this.getStyle(e.shape.style, t);
    }
    isGradient(e) {
      return e && null != e.stops;
    }
    isPattern(e) {
      return null != e && null != e.size;
    }
    isBasicColor(e) {
      return !(this.isGradient(e) || this.isPattern(e));
    }
    getIconSvgStyle() {
      return {
        stroke: "gray",
        strokeWidth: 1,
        fill: "none",
        width: 23,
        height: 18,
        position: "relative"
      };
    }
    colorAsArray(e, t) {
      return a().isArray(e) ? e : d.A.stringToRgbaArr(e, t);
    }
    getStrokeDashArray(e, t) {
      return e && "object" == typeof e ? e.pattern || [] : "-" != e && e ? t ? "~." == e || "2~." == e ? [t, t] : "." == e || "2." == e ? [1.125 * t, 3.35 + 3.35 * (t - 1) / 10] : "--" == e || "2--" == e ? [6 + 6 * (t - 1) / 4, 6] : [] : "~." == e || "2~." == e ? [1, 1] : "." == e || "2." == e ? [1.125, 3.35] : "--" == e || "2--" == e ? [6, 6] : [] : [];
      var r;
    }
    getStrokeDasharrayFromStrokeType(e, t) {
      var r = this.getStrokeDashArray(e, t);
      return !r || r.length <= 0 ? "" : r.join(" ");
    }
    getReactBoxShadow(e, t) {
      if (e) {
        var r = e || {},
          n = r.xOffset,
          o = void 0 === n ? 0 : n,
          s = r.yOffset,
          a = void 0 === s ? 0 : s,
          l = r.fill,
          c = void 0 === l ? "#000" : l,
          h = r.blur,
          p = void 0 === h ? 0 : h;
        if (0 != o || 0 != a || 0 != p) {
          var u = "_bsd".concat(t),
            g = "url(#".concat(u, ")"),
            m = d.A.getHtmlColorWithOpacity(c);
          return {
            style: g,
            def: i().createElement("filter", {
              id: u,
              key: "filter",
              height: "150%",
              width: "150%",
              filterUnits: "userSpaceOnUse"
            }, i().createElement("feGaussianBlur", {
              in: "SourceGraphic",
              stdDeviation: p
            }), i().createElement("feOffset", {
              dx: o,
              dy: a,
              result: "offsetblur"
            }), i().createElement("feFlood", {
              floodColor: m.color,
              floodOpacity: m.opacity
            }), i().createElement("feComposite", {
              in2: "offsetblur",
              operator: "in"
            }), i().createElement("feMerge", null, i().createElement("feMergeNode", null), i().createElement("feMergeNode", {
              in: "SourceGraphic"
            })))
          };
        }
      }
    }
    getReactPaintFill(e, t, r) {
      if (a().isString(e)) return {
        style: e,
        opacity: 1
      };
      if (a().isArray(e)) {
        var n = d.A.getHtmlColorWithOpacity(e);
        return {
          style: n.color,
          opacity: n.opacity
        };
      }
      var i = "_pgf".concat(r),
        o = "url(#".concat(i, ")");
      return this.isPattern(e) ? {
        style: o,
        def: this.getPatternDef(e, i, t),
        opacity: 1
      } : {
        style: o,
        def: this.getGradientDef(e, i, t),
        opacity: 1
      };
    }
    getPatternDef(e, t, r) {
      return l.A.renderPatternDefs(e, t, r);
    }
    getGradientDef(e, t, r) {
      if (e && e.stops) {
        var n = o.A.round2,
          s = (e, t) => {
            var r, n;
            return e.pos - t.pos;
          },
          a = [...e.stops].sort(s),
          l = e.center || {
            x: 50,
            y: 50
          },
          c = {
            x: l.x / 100,
            y: l.y / 100
          },
          h = e.scale || 1;
        if (!e.type || "linear" == e.type) {
          var p = "translate(".concat(n(c.x - .5), ",").concat(n(c.y - .5), ")"),
            u = e.scale ? "matrix(".concat(n(h), ", 0, 0, ").concat(n(h), ", ").concat(n(.5 - .5 * h), ", ").concat(n(.5 - .5 * h), ")") : "";
          return i().createElement("linearGradient", {
            key: r,
            id: t,
            gradientTransform: "".concat(u, " ").concat(p, " rotate(").concat(e.rotation || 0, " 0.5 0.5)"),
            x1: "0",
            y1: "0.5",
            x2: 1,
            y2: .5
          }, " ", a.map((e, t) => {
            var r = d.A.getHtmlColorWithOpacity(e.color, !0);
            return i().createElement("stop", {
              style: {
                stopColor: r.color,
                stopOpacity: r.opacity
              },
              key: t,
              offset: n(e.pos)
            });
          }));
        }
        var g = e.focal || {
            x: 0,
            y: 0
          },
          m = l.x + g.x,
          f = l.y + g.y,
          y = "matrix(".concat(n(h), ", 0, 0, ").concat(n(h), ", ").concat(n(.5 - .5 * h), ", ").concat(n(.5 - .5 * h), ")");
        return i().createElement("radialGradient", {
          key: r,
          id: t,
          gradientTransform: y,
          cx: "".concat(c.x),
          cy: "".concat(c.y),
          fx: "".concat(m / 100),
          fy: "".concat(f / 100)
        }, " ", a.map((e, t) => {
          var r = d.A.getHtmlColorWithOpacity(e.color, !0);
          return i().createElement("stop", {
            key: t,
            offset: n(e.pos),
            style: {
              stopColor: r.color,
              stopOpacity: r.opacity
            }
          });
        }));
      }
    }
    getStyle(e, t) {
      return e = e || {}, "thickness" == t ? e[t] || 1 : "strokeColor" == t || "textColor" == t ? e[t] || "#000" : "fillColor" == t ? e[t] || "none" : "strokeType" == t ? e[t] || "-" : "lineJoin" == t || "lineCap" == t || "boxShadow" == t ? e[t] : void 0;
    }
    generateStyleId() {
      return Math.random().toString(36).substr(2, 9);
    }
    getReactStyleInfo(e, t, r, n) {
      e = e || {};
      var o = {},
        s = [];
      return t.forEach(t => {
        switch (t) {
          case "strokeColor":
            if (!e.strokeColor && r) o.stroke = r;else {
              var i = d.A.getHtmlColorWithOpacity(this.getStyle(e, "strokeColor"));
              o.stroke = i.color, o.strokeOpacity = i.opacity;
            }
            break;
          case "thickness":
            o.strokeWidth = this.getStyle(e, "thickness");
            break;
          case "fillColor":
            var a = this.getStyle(e, "fillColor"),
              l = this.getReactPaintFill(a, t, n);
            o.fill = l.style, o.fillOpacity = l.opacity, l.def && s.push(l.def);
            break;
          case "strokeType":
            var c = this.getStyle(e, "strokeType"),
              h = this.getStyle(e, "thickness");
            o.strokeDasharray = this.getStrokeDasharrayFromStrokeType(c, h);
            break;
          case "lineJoin":
            o.strokeLinejoin = this.getStyle(e, "lineJoin");
            break;
          case "lineCap":
            o.strokeLinecap = this.getStyle(e, "lineCap");
            break;
          case "boxShadow":
            var p = this.getReactBoxShadow(e.boxShadow, n);
            p && (o.filter = p.style, p.def && s.push(p.def));
        }
      }), {
        style: o,
        defs: s.length > 0 ? i().createElement("defs", null, " ", s) : void 0
      };
    }
  }
  const g = new u();
};
