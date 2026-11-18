/* module 88295 — 3591 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = S(r(85505)),
    o,
    s = S(r(86007)),
    a,
    l = S(r(9506)),
    c,
    d = S(r(97588)),
    h,
    p = S(r(50539)),
    u,
    g = S(r(27714)),
    m,
    f = C(r(40927)),
    y,
    v = S(r(86846)),
    b,
    x = S(r(5556));
  function C(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function S(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var A = function (e) {
    function t() {
      var e, r, n, i;
      (0, l.default)(this, t);
      for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
      return r = n = (0, p.default)(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(a))), n.state = {
        height: n.props.defaultHeight || 0,
        width: n.props.defaultWidth || 0
      }, n._onResize = function () {
        var e = n.props,
          t = e.disableHeight,
          r = e.disableWidth,
          i = e.onResize;
        if (n._parentNode) {
          var o = n._parentNode.offsetHeight || 0,
            s = n._parentNode.offsetWidth || 0,
            a = window.getComputedStyle(n._parentNode) || {},
            l = parseInt(a.paddingLeft, 10) || 0,
            c = parseInt(a.paddingRight, 10) || 0,
            d = parseInt(a.paddingTop, 10) || 0,
            h = parseInt(a.paddingBottom, 10) || 0,
            p = o - d - h,
            u = s - l - c;
          (!t && n.state.height !== p || !r && n.state.width !== u) && (n.setState({
            height: o - d - h,
            width: s - l - c
          }), i({
            height: o,
            width: s
          }));
        }
      }, n._setRef = function (e) {
        n._autoSizer = e;
      }, i = r, (0, p.default)(n, i);
    }
    return (0, g.default)(t, e), (0, d.default)(t, [{
      key: "componentDidMount",
      value: function e() {
        var t = this.props.nonce;
        this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = (0, v.default)(t), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize());
      }
    }, {
      key: "componentWillUnmount",
      value: function e() {
        this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }, {
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.children,
          n = t.className,
          o = t.disableHeight,
          s = t.disableWidth,
          a = t.style,
          l = this.state,
          c = l.height,
          d = l.width,
          h = {
            overflow: "visible"
          },
          p = {};
        return o || (h.height = 0, p.height = c), s || (h.width = 0, p.width = d), f.createElement("div", {
          className: n,
          ref: this._setRef,
          style: (0, i.default)({}, h, a)
        }, r(p));
      }
    }]), t;
  }(f.PureComponent);
  A.defaultProps = {
    onResize: function e() {},
    disableHeight: !1,
    disableWidth: !1,
    style: {}
  }, A.propTypes = null, t.default = A;
};
