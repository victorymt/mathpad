/* module 83120 — 2271 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => g
  });
  var n = r(40927),
    i = r.n(n),
    o = r(40961),
    s = r.n(o),
    a = r(21774),
    l = r(334),
    c = r(516),
    d = r(58578),
    h = r(19340),
    p = r(7258);
  function u(e, t, r) {
    for (var n = [], o = 0, s = 0; s <= t; s += e) n.push(i().createElement("middle-inside", {
      key: o
    }, r)), o++;
    return n;
  }
  class g extends i().Component {
    shouldComponentUpdate(e) {
      return !a.A.areEqualShallow(this.props, e);
    }
    componentDidUpdate() {
      if (this.props.setParentHeight) {
        var e = s().findDOMNode(this);
        this.props.setParentHeight(c.A.getComputedStyleAsNumber(e, "height"));
      }
    }
    render() {
      var e = this.props,
        t = e.isNormal,
        r = e.width,
        n = e.isReverse,
        o = e.fontSize,
        s = e.mathFontFamily,
        a = (0, p.AI)((0, h.zN)(s), r || o || 17, o || 17, n);
      if (a) return a;
      if (t || l.A.shouldUseSingleBracket(r, o)) return n ? i().createElement("brace-top-wrapper", {
        style: {
          height: "0.4em",
          fontFamily: d.A.getOverBracketFontFamily(this.props.mathFontFamily)
        }
      }, "⏦") : i().createElement("brace-top-wrapper", {
        style: {
          height: "0.4em",
          fontFamily: d.A.getOverBracketFontFamily(this.props.mathFontFamily)
        }
      }, "⏥");
      var c = l.A.fontSizeEmByHeight(r, o, "open-brace");
      "Sans" == s && (c = .8);
      var g = c * o,
        m = {
          fontSize: c + "em",
          width: Math.round(r) / g + "em",
          height: "0.65em",
          fontStyle: "normal",
          fontFamily: d.A.getOverBracketFontFamily(this.props.mathFontFamily)
        },
        f = "⏜",
        y = "⏟",
        v = "⏝",
        b = "⏞";
      return n && (f = "⏠", y = "⏣", v = "⏡", b = "⏢"), i().createElement("brace-top-wrapper", {
        style: m
      }, i().createElement("first", null, f), i().createElement("middle-wrapper", null, i().createElement("fixed", null, u(c * o, r / 2, y))), i().createElement("middle", null, v), i().createElement("middle-wrapper", null, i().createElement("fixed", null, u(c * o, r / 2, y))), i().createElement("last", null, b));
    }
  }
};
