/* module 37084 — 2087 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O: () => d,
    mt: () => u
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(88925),
    a = r(34796),
    l = r(33535);
  class c extends a.PH {
    render() {
      var e = s.A.pathsD(d(this.shape()));
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), i().createElement("path", {
        className: "transparent no-print",
        style: this.transparentStyle(),
        d: e
      }), i().createElement("path", {
        className: "real",
        d: e,
        style: this.style()
      }));
    }
  }
  function d(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = o.A.getCenterPoint(r, n);
    return l.A.genericLinesTransformed(e.data, [{
      p1: {
        x: r.x,
        y: i.y
      },
      p2: {
        x: n.x,
        y: i.y
      }
    }, {
      p1: {
        x: i.x,
        y: r.y
      },
      p2: {
        x: i.x,
        y: n.y
      }
    }]);
  }
  class h extends a.yq {}
  class p extends a.o9 {
    getComponent() {
      return c;
    }
    getType() {
      return "arrow-head-7";
    }
    getSettingsComponent() {
      return h;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: d(e)
      };
    }
    getBoundingRect(e) {
      var t = d(e);
      return o.A.genericLinesBbox(t);
    }
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "arrow-head-7"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M4.66609690743087,10.049157637614059 L17.5,10.049157637614059 M11.083048453715435,4.098315275228117 L11.083048453715435,16"
        }))
      };
    }
  }
  var u = new p();
};
