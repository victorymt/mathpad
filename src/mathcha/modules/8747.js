/* module 8747 — 777 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    F: () => l
  });
  var n = r(40927),
    i = r.n(n),
    o = r(85849),
    s = r(40961),
    a = r.n(s);
  class l extends i().Component {
    componentDidMount() {
      var e = a().findDOMNode(this);
      this.props.touchOnly || o.k.addEventListenerNonPassive(e, "mousedown", this.props.onTouchOrMouseDown), o.k.addEventListenerNonPassive(e, "touchstart", this.props.onTouchOrMouseDown);
    }
    componentWillUnmount() {
      var e = a().findDOMNode(this);
      this.props.touchOnly || o.k.removeEventListenerNonPassive(e, "mousedown", this.props.onTouchOrMouseDown), o.k.removeEventListenerNonPassive(e, "touchstart", this.props.onTouchOrMouseDown);
    }
    render() {
      return this.props.children;
    }
  }
};
