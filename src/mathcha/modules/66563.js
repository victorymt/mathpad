/* module 66563 — 2932 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    s: () => c
  });
  var n = r(20260),
    i = r(91414),
    o = r(40927),
    s = r.n(o),
    a = r(29315);
  class l extends s().Component {
    render() {
      var e = this.props,
        t = e.start,
        r = e.end,
        o = e.defaultStart,
        a = e.defaultEnd,
        l = null != t ? t : o,
        c = null != r ? r : a;
      return s().createElement("main", null, s().createElement("svg", {
        style: {
          width: 18,
          height: 20,
          strokeWidth: 1,
          stroke: "gray",
          fill: "none",
          overflow: "visible"
        }
      }, s().createElement("path", {
        style: {
          stroke: "gray",
          fill: "none",
          transform: "translate(1px,2px)"
        },
        d: " M8.81,16.33 C6.8,15.38 5.4,13.25 5.4,10.77 C5.4,7.42 7.97,4.69 11.15,4.69 C12.42,4.69 13.6,5.13 14.55,5.87"
      })), s().createElement(i.A, {
        style: {
          width: 40
        },
        unit: "°",
        min: 0,
        max: 359,
        step: 1,
        value: l,
        onValueChanging: e => this.props.onStartChange(!0, e, !1),
        onValueChanged: (e, t) => this.props.onStartChange(!1, e, t)
      }), s().createElement(i.A, {
        style: {
          width: 40
        },
        unit: "°",
        min: 0,
        max: 359,
        step: 1,
        value: c,
        onValueChanging: e => this.props.onEndChange(!0, e, !1),
        onValueChanged: (e, t) => this.props.onEndChange(!1, e, t)
      }), n.A.separator());
    }
  }
  class c extends a.US {
    shouldComponentUpdate(e) {
      var t,
        r,
        n,
        i,
        o = e.entity,
        s = this.props.entity,
        a = null !== (t = o.data.angle1) && void 0 !== t ? t : this.getDefaultStart(),
        l = null !== (r = s.data.angle1) && void 0 !== r ? r : this.getDefaultStart(),
        c = null !== (n = o.data.angle2) && void 0 !== n ? n : this.getDefaultEnd(),
        d = null !== (i = s.data.angle2) && void 0 !== i ? i : this.getDefaultEnd();
      return a != l || c != d;
    }
    render() {
      var e = this.props.entity;
      return s().createElement("div", {
        style: {
          display: "flex"
        }
      }, this.renderPlaceHolder && this.renderPlaceHolder(), s().createElement(l, {
        start: e.data.angle1,
        defaultStart: this.getDefaultStart(),
        end: e.data.angle2,
        defaultEnd: this.getDefaultEnd(),
        onStartChange: (e, t, r) => {
          e ? this.props.onEntityPropertyChanging(this.props.entity, "data", "angle1", t) : this.props.onEntityPropertyChanged(this.props.entity, "data", "angle1", t, r);
        },
        onEndChange: (e, t, r) => {
          e ? this.props.onEntityPropertyChanging(this.props.entity, "data", "angle2", t) : this.props.onEntityPropertyChanged(this.props.entity, "data", "angle2", t, r);
        }
      }));
    }
  }
};
