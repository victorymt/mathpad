/* module 39260 — 8986 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Wo: () => c,
    dF: () => h,
    lD: () => l,
    sL: () => d,
    sx: () => a
  });
  var n = r(40927),
    i = r.n(n),
    o = r(22005),
    s = r(88925),
    a = {
      width: "100%",
      height: "100%",
      stroke: "var(--ui-text-muted, gray)",
      strokeWidth: "1px",
      fill: "none",
      overflow: "hidden"
    },
    l = {
      width: "100%",
      height: "100%",
      stroke: "var(--ui-text-muted, gray)",
      strokeWidth: "1px",
      fill: "none",
      overflow: "visible"
    };
  function c(e) {
    return i().createElement("svg", {
      style: a,
      key: x(e)
    }, u(e, 0, 60, 10));
  }
  function d(e) {
    return i().createElement("svg", {
      style: l,
      key: x(e)
    }, p(e));
  }
  function h(e, t, r) {
    var n = b(e),
      o = "no" == r ? 66 : 58;
    return i().createElement("svg", {
      style: C,
      viewBox: "0 0 74 24"
    }, g(e, 8, 12), u(t, n, o, 12), m(r, 58, 12));
  }
  function p(e) {
    switch (e) {
      case ">":
        return i().createElement("g", {
          style: {
            transform: "translate(2px,10px)"
          }
        }, i().createElement("g", {
          style: {
            transform: "scale(-1,1) translate(-14px,0)"
          }
        }, y(!1)), i().createElement("line", {
          x1: "0",
          y1: "0",
          x2: "10",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "2>":
        return i().createElement("g", {
          style: {
            transform: "translate(2px,10px)"
          }
        }, i().createElement("g", {
          style: {
            transform: "scale(-1,1) translate(-14px,0)"
          }
        }, y(!0)), i().createElement("line", {
          x1: "0",
          y1: "0",
          x2: "10",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "<":
        return i().createElement("g", {
          style: {
            transform: "translate(6px,10px)"
          }
        }, y(!1), i().createElement("line", {
          x1: "-5",
          y1: "0",
          x2: "4",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "2<":
        return i().createElement("g", {
          style: {
            transform: "translate(6px,10px)"
          }
        }, y(!0), i().createElement("line", {
          x1: "-5",
          y1: "0",
          x2: "4",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case ">>":
        return i().createElement("g", {
          style: {
            transform: "translate(6px,10px)"
          }
        }, i().createElement("g", {
          style: {
            transform: "scale(-1,1) translateX(-10px)"
          }
        }, v(!1)), i().createElement("line", {
          x1: "-6",
          y1: "0",
          x2: "10",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "2>>":
        return i().createElement("g", {
          style: {
            transform: "translate(6px,10px)"
          }
        }, i().createElement("g", {
          style: {
            transform: "scale(-1,1) translateX(-10px)"
          }
        }, v(!0)), i().createElement("line", {
          x1: "-6",
          y1: "0",
          x2: "10",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "<<":
        return i().createElement("g", {
          style: {
            transform: "translate(4px,10px)"
          }
        }, v(!1), i().createElement("line", {
          x1: "-2",
          y1: "0",
          x2: "4",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
      case "2<<":
        return i().createElement("g", {
          style: {
            transform: "translate(4px,10px)"
          }
        }, v(!0), i().createElement("line", {
          x1: "-2",
          y1: "0",
          x2: "4",
          y2: "0",
          strokeDasharray: "1.125 1.35"
        }));
    }
    return i().createElement("g", null);
  }
  function u(e, t, r, n) {
    switch (e) {
      case "2-":
        return i().createElement("g", null, i().createElement("line", {
          x1: t,
          y1: n - 1.5,
          x2: r,
          y2: n - 1.5
        }), i().createElement("line", {
          x1: t,
          y1: n + 1.5,
          x2: r,
          y2: n + 1.5
        }));
      case ".":
        return i().createElement("line", {
          x1: t,
          y1: n,
          x2: r,
          y2: n,
          strokeDasharray: "1.125 3.35"
        });
      case "2.":
        return i().createElement("g", null, i().createElement("line", {
          x1: t,
          y1: n - 1.5,
          x2: r,
          y2: n - 1.5,
          strokeDasharray: "1.125 3.35"
        }), i().createElement("line", {
          x1: t,
          y1: n + 1.5,
          x2: r,
          y2: n + 1.5,
          strokeDasharray: "1.125 3.35"
        }));
      case "--":
        return i().createElement("line", {
          x1: t,
          y1: n,
          x2: r,
          y2: n,
          strokeDasharray: "6 6"
        });
      case "2--":
        return i().createElement("g", null, i().createElement("line", {
          x1: t,
          y1: n - 1.5,
          x2: r,
          y2: n - 1.5,
          strokeDasharray: "6 6"
        }), i().createElement("line", {
          x1: t,
          y1: n + 1.5,
          x2: r,
          y2: n + 1.5,
          strokeDasharray: "6 6"
        }));
      case "~":
        return o.A.getWaveLine({
          x: t,
          y: n
        }, {
          x: r,
          y: n
        }, 5, 2.5, 0, 0);
      case "2~":
        return o.A.getDoubleWaveLine({
          x: t,
          y: n
        }, {
          x: r,
          y: n
        }, 5, 2.5);
      case "~.":
        return i().cloneElement(o.A.getWaveLine({
          x: t,
          y: n
        }, {
          x: r,
          y: n
        }, 5, 2.5, 0, 0), {
          strokeDasharray: "1 1"
        });
      case "2~.":
        return i().cloneElement(o.A.getDoubleWaveLine({
          x: t,
          y: n
        }, {
          x: r,
          y: n
        }, 5, 2.5), {
          strokeDasharray: "1 1"
        });
      case "|":
        return i().createElement("path", {
          d: s.A.getRulerLinesDFromPoints([{
            x: t,
            y: n
          }, {
            x: r,
            y: n
          }], 8, 10),
          style: {
            stroke: "var(--ui-text-muted, gray)",
            strokeWidth: 1,
            fill: "none"
          }
        });
      default:
        return i().createElement("line", {
          x1: t,
          y1: n,
          x2: r,
          y2: n
        });
    }
  }
  function g(e, t, r) {
    switch (e) {
      case "|":
        return i().createElement("line", {
          x1: t,
          y1: r - 5.59,
          x2: t,
          y2: r + 5.59
        });
      case "(":
        return i().createElement("path", {
          d: "M".concat(t + 5.59, ",").concat(r - 5.59, " A 5.59,5.59 0 0,0 ").concat(t + 5.59, ",").concat(r + 5.59)
        });
      default:
        return;
    }
  }
  function m(e, t, r) {
    switch (e) {
      case "2>":
        return i().createElement("g", null, f(t, r, !0));
      case "2>>":
        return i().createElement("g", null, f(t - 6.71, r, !0), f(t, r, !0));
      case ">":
        return i().createElement("g", null, f(t, r, !1));
      default:
        return;
    }
  }
  function f(e, t, r) {
    var n = r ? 1 : .45,
      o = r ? 4.9 : 3.29;
    return i().createElement("g", null, i().createElement("path", {
      d: "M".concat(e, ",").concat(t, " Q").concat(e - 4.96, ",").concat(t - n, " ").concat(e - 10.93, ",").concat(t - o)
    }), i().createElement("path", {
      d: "M".concat(e, ",").concat(t, " Q").concat(e - 4.96, ",").concat(t + n, " ").concat(e - 10.93, ",").concat(t + o)
    }));
  }
  function y(e) {
    var t = e ? 1 : .45,
      r = e ? 4.9 : 3.29;
    return i().createElement("g", null, i().createElement("path", {
      d: "M0,0 Q4.96,-".concat(t, " 10.93,-").concat(r)
    }), i().createElement("path", {
      d: "M0,0 Q4.96,".concat(t, " 10.93,").concat(r)
    }));
  }
  function v(e) {
    var t = e ? 1 : .45,
      r = e ? 4.9 : 3.29;
    return i().createElement("g", null, i().createElement("path", {
      d: "M6.71,0 Q11.67,-".concat(t, " 17.64,-").concat(r)
    }), i().createElement("path", {
      d: "M6.71,0 Q11.67,".concat(t, " 17.64,").concat(r)
    }), i().createElement("path", {
      d: "M0,0 Q4.96,-".concat(t, " 10.93,-").concat(r)
    }), i().createElement("path", {
      d: "M0,0 Q4.96,".concat(t, " 10.93,").concat(r)
    }));
  }
  function b(e) {
    return "|" == e ? 8 : "(" == e ? 15 : 10;
  }
  function x(e) {
    return "string" == typeof e ? e : "custom";
  }
  var C = {
    width: 74,
    height: 24,
    overflow: "visible",
    stroke: "var(--ui-text, #333)",
    strokeWidth: 1.4,
    fill: "none"
  };
};
