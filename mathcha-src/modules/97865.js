/* module 97865 — 13303 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(40927),
    i = r.n(n),
    o = r(39314);
  class s {
    renderBricksPatterDef(e, t, r) {
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: 0,
        y: 0,
        width: e.size,
        height: e.size,
        patternTransform: "rotate(0,0,0)",
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L".concat(e.size, ",0"),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(e.size / 2, ",0 L").concat(e.size / 2, ",").concat(e.size / 2),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(e.size / 2, " L").concat(e.size, ",").concat(e.size / 2),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(e.size / 2, " L0,").concat(e.size),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(e.size, ",").concat(e.size / 2, " L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(e.size, " L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderCrossHatchPatterDef(e, t, r) {
      var n = e.size * Math.sqrt(2);
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: 0,
        y: 0,
        width: n,
        height: n,
        patternTransform: "rotate(45,0,0)",
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L0,".concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n / 2, ",0 L").concat(n / 2, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n, ",0 L").concat(n, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,0 L".concat(n, ",0"),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(n / 2, " L").concat(n, ",").concat(n / 2),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(n, " L").concat(n, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderDotsPatternDef(e, t, r) {
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: 0,
        y: 0,
        width: e.size,
        height: e.size,
        patternTransform: "rotate(0,0,0)",
        patternUnits: "userSpaceOnUse"
      }, i().createElement("circle", {
        cx: e.size / 2,
        cy: e.size / 2,
        r: e.radius,
        style: this.getPatternReactStyle(e)
      }));
    }
    renderGridPatternDef(e, t, r) {
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: e.size / 2,
        y: e.size / 2,
        width: e.size,
        height: e.size,
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L0,".concat(e.size),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(e.size, ",0 L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,0 L".concat(e.size, ",0"),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(e.size, " L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderHorizontalLinesPatternDef(e, t, r) {
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: e.size / 2,
        y: e.size / 2,
        width: e.size,
        height: e.size,
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L".concat(e.size, ",0"),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M0,".concat(e.size, " L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderNorthEastLinesPatternDef(e, t, r) {
      var n = e.size * Math.sqrt(2);
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: 0,
        y: 0,
        width: n,
        height: n,
        patternTransform: "rotate(45,0,0)",
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L0,".concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n / 2, ",0 L").concat(n / 2, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n, ",0 L").concat(n, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderNorthWestLinesPatternDef(e, t, r) {
      var n = e.size * Math.sqrt(2);
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: 0,
        y: 0,
        width: n,
        height: n,
        patternTransform: "rotate(-45,0,0)",
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L0,".concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n / 2, ",0 L").concat(n / 2, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(n, ",0 L").concat(n, ",").concat(n),
        style: this.getPatternReactStyle(e)
      }));
    }
    renderVerticalLinesPatternDef(e, t, r) {
      return i().createElement("pattern", {
        key: r,
        id: t,
        x: e.size / 2,
        y: e.size / 2,
        width: e.size,
        height: e.size,
        patternUnits: "userSpaceOnUse"
      }, i().createElement("path", {
        d: "M0,0 L0,".concat(e.size),
        style: this.getPatternReactStyle(e)
      }), i().createElement("path", {
        d: "M".concat(e.size, ",0 L").concat(e.size, ",").concat(e.size),
        style: this.getPatternReactStyle(e)
      }));
    }
    getPatternReactStyle(e) {
      var t = o.A.getHtmlColorWithOpacity(e.color, !0);
      return {
        stroke: t.color,
        strokeOpacity: t.opacity,
        strokeWidth: e.thickness,
        fill: "none"
      };
    }
    renderPatternDefs(e, t, r) {
      switch (e.name) {
        case "VerticalLinesPattern":
          return this.renderVerticalLinesPatternDef(e, t, r);
        case "HorizontalLinesPattern":
          return this.renderHorizontalLinesPatternDef(e, t, r);
        case "GridPattern":
          return this.renderGridPatternDef(e, t, r);
        case "NorthEastLinesPattern":
          return this.renderNorthEastLinesPatternDef(e, t, r);
        case "NorthWestLinesPattern":
          return this.renderNorthWestLinesPatternDef(e, t, r);
        case "CrossHatchPattern":
          return this.renderCrossHatchPatterDef(e, t, r);
        case "BrickPattern":
          return this.renderBricksPatterDef(e, t, r);
        case "DotsPattern":
          return this.renderDotsPatternDef(e, t, r);
      }
    }
    convertTikzSetPatternDef() {
      var e;
      return "\n\\tikzset{\npattern size/.store in=\\mcSize, \npattern size = 5pt,\npattern thickness/.store in=\\mcThickness, \npattern thickness = 0.3pt,\npattern radius/.store in=\\mcRadius, \npattern radius = 1pt}";
    }
    convertTikzVerticalLinesPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0}{\\mcSize}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
    convertTikzBricksPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfpointorigin}\n{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0pt}{0.5*\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0.5*\\mcSize}}\n\\pgfpathmoveto{\\pgfpoint{0.5*\\mcSize}{0.5*\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{0.5*\\mcSize}{\\mcSize}}\n\\pgfpathmoveto{\\pgfpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{\\mcSize}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
    convertTikzCrossHatchPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{0pt}{0pt}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+\\mcThickness}{-\\mcThickness}}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{0pt}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
    convertTikzDotsPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\makeatletter" + "\n\\pgfdeclarepatternformonly[\\mcRadius,\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfpoint{-0.5*\\mcSize}{-0.5*\\mcSize}}\n{\\pgfpoint{0.5*\\mcSize}{0.5*\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathcircle\\pgfpointorigin{\\mcRadius}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
    convertTikzGridPatternDef(e) {
      var t;
      return "\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{-\\mcThickness}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0}}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{0}{\\mcSize}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
    convertTikzHorizontalLinesPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, " lines}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{0pt}{0pt}}\n{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfpointorigin}\n\\pgfpathlineto{\\pgfpoint{\\mcSize}{0}}\n\\pgfusepath{stroke}}}\n\\makeatother";
    }
    convertTikzNorthEastLinesPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{0pt}{0pt}}\n{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{0pt}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+\\mcThickness}{\\mcSize+\\mcThickness}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
    convertTikzNorthWestLinesPatternDef(e) {
      var t;
      return "\n\\makeatletter" + "\n\\pgfutil@ifundefined{pgf@pattern@name@".concat(e, "}{") + "\n\\pgfdeclarepatternformonly[\\mcThickness,\\mcSize]{".concat(e, "}") + "\n{\\pgfqpoint{0pt}{-\\mcThickness}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\\pgfpoint{\\mcSize}{\\mcSize}}\n{\n\\pgfsetcolor{\\tikz@pattern@color}\n\\pgfsetlinewidth{\\mcThickness}\n\\pgfpathmoveto{\\pgfqpoint{0pt}{\\mcSize}}\n\\pgfpathlineto{\\pgfpoint{\\mcSize+\\mcThickness}{-\\mcThickness}}\n\\pgfusepath{stroke}\n}}\n\\makeatother";
    }
    ConvertTikzPatternDefs(e, t) {
      switch (e.name) {
        case "VerticalLinesPattern":
          return this.convertTikzVerticalLinesPatternDef(t);
        case "HorizontalLinesPattern":
          return this.convertTikzHorizontalLinesPatternDef(t);
        case "GridPattern":
          return this.convertTikzGridPatternDef(t);
        case "NorthEastLinesPattern":
          return this.convertTikzNorthEastLinesPatternDef(t);
        case "NorthWestLinesPattern":
          return this.convertTikzNorthWestLinesPatternDef(t);
        case "CrossHatchPattern":
          return this.convertTikzCrossHatchPatternDef(t);
        case "BrickPattern":
          return this.convertTikzBricksPatternDef(t);
        case "DotsPattern":
          return this.convertTikzDotsPatternDef(t);
      }
    }
  }
  const a = new s();
};
