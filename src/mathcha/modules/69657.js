/* module 69657 — 2434 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Raised = void 0;
  var n,
    i = h(r(40927)),
    o,
    s = h(r(5556)),
    a,
    l = h(r(58527)),
    c,
    d = h(r(55364));
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var p = t.Raised = function e(t) {
    var r = t.zDepth,
      n = t.radius,
      o = t.background,
      s = t.children,
      a = t.styles,
      c = void 0 === a ? {} : a,
      h = (0, l.default)((0, d.default)({
        default: {
          wrap: {
            position: "relative",
            display: "inline-block"
          },
          content: {
            position: "relative"
          },
          bg: {
            absolute: "0px 0px 0px 0px",
            boxShadow: "0 " + r + "px " + 4 * r + "px rgba(0,0,0,.24)",
            borderRadius: n,
            background: o
          }
        },
        "zDepth-0": {
          bg: {
            boxShadow: "none"
          }
        },
        "zDepth-1": {
          bg: {
            boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
          }
        },
        "zDepth-2": {
          bg: {
            boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
          }
        },
        "zDepth-3": {
          bg: {
            boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
          }
        },
        "zDepth-4": {
          bg: {
            boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
          }
        },
        "zDepth-5": {
          bg: {
            boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
          }
        },
        square: {
          bg: {
            borderRadius: "0"
          }
        },
        circle: {
          bg: {
            borderRadius: "50%"
          }
        }
      }, c), {
        "zDepth-1": 1 === r
      });
    return i.default.createElement("div", {
      style: h.wrap
    }, i.default.createElement("div", {
      style: h.bg
    }), i.default.createElement("div", {
      style: h.content
    }, s));
  };
  p.propTypes = {
    background: s.default.string,
    zDepth: s.default.oneOf([0, 1, 2, 3, 4, 5]),
    radius: s.default.number,
    styles: s.default.object
  }, p.defaultProps = {
    background: "#fff",
    zDepth: 1,
    radius: 2,
    styles: {}
  }, t.default = p;
};
