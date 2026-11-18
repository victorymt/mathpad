/* module 28783 — 3143 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    a: () => o
  });
  var n = r(70224);
  class i {
    create(e) {
      switch (e) {
        case "surface":
          return {
            type: "surface",
            subType: "solid",
            model: n.A.createOneTextEditor("x+y+(cos x)+(sin y)"),
            xRange: {
              from: -10,
              to: 10,
              step: 30
            },
            yRange: {
              from: -10,
              to: 10,
              step: 30
            },
            solidTypeProps: {
              frameColor: [74, 74, 74, 1]
            }
          };
        case "implicit":
          return {
            type: "implicit",
            model: n.A.createOneTextEditor("cos(x)+cos(y)+cos(z)"),
            xRange: {
              from: -10,
              to: 10,
              step: 15
            },
            yRange: {
              from: -10,
              to: 10,
              step: 15
            },
            zRange: {
              from: -10,
              to: 10,
              step: 15
            },
            solidTypeProps: {
              frameColor: "gray"
            }
          };
        case "parametric":
          return {
            type: "parametric",
            model: n.A.createOneTextEditor("(4 - v*sin(u))*cos(2u)"),
            ymodel: n.A.createOneTextEditor("(4 - v*sin(u))*sin(2u)"),
            zmodel: n.A.createOneTextEditor("v*cos(u)"),
            uRange: {
              from: 0,
              to: 6.283,
              step: 45
            },
            vRange: {
              from: 0,
              to: 6.283,
              step: 45
            },
            solidTypeProps: {
              frameColor: "gray"
            }
          };
        case "parametric-curve":
          return {
            type: "parametric-curve",
            model: n.A.createOneTextEditor("3*cos(u)"),
            ymodel: n.A.createOneTextEditor("3*sin(u)"),
            zmodel: n.A.createOneTextEditor("u/3.14"),
            uRange: {
              from: 0,
              to: 6.283,
              step: 50
            }
          };
        case "point-list":
          return {
            type: "point-list",
            model: n.A.createOneTextEditor("3,3,3 4,4,4"),
            markerSymbol: "circle"
          };
        case "vector":
          return {
            type: "vector",
            model: n.A.createOneTextEditor("(1,1,1) (3,3,3)"),
            color: [245, 166, 35],
            size: .1
          };
        case "vector-field":
          return {
            type: "vector-field",
            model: n.A.createOneTextEditor("x-xy"),
            jmodel: n.A.createOneTextEditor("x-y"),
            kmodel: n.A.createOneTextEditor("0"),
            xRange: {
              from: -2,
              to: 2,
              step: 9
            },
            yRange: {
              from: -1,
              to: 1,
              step: 9
            },
            zRange: {
              from: -1,
              to: 1,
              step: 4
            },
            sizeRatio: 1
          };
      }
    }
  }
  var o = new i();
};
