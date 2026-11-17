/* module 46774 — 1173 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a,
    r: () => s
  });
  var n = r(40927),
    i = r.n(n),
    o = r(91614),
    s = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#808080", "#FFFFFF"];
  class a extends i().PureComponent {
    constructor(e) {
      super(e);
      var t = this.props.color,
        r = "string" == typeof (t = t || "#000") ? t : {
          r: t[0],
          g: t[1],
          b: t[2],
          a: t[3]
        };
      this.state = {
        curColor: r
      };
    }
    render() {
      var e = this.props,
        t = e.onChange,
        r = e.style,
        n = this.props.requestPickerSettings ? this.props.requestPickerSettings().presetColors : s;
      return i().createElement(o.Ay, {
        presetColors: n || s,
        style: r,
        color: this.state.curColor,
        onChange: e => {
          console.log(e), null != e.rgb.a ? t([e.rgb.r, e.rgb.g, e.rgb.b, e.rgb.a]) : t([e.rgb.r, e.rgb.g, e.rgb.b]), this.setState({
            curColor: e.rgb
          });
        }
      });
    }
  }
};
