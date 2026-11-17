/* module 31881 — 3445 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = x(r(86007)),
    o,
    s = x(r(9506)),
    a,
    l = x(r(97588)),
    c,
    d = x(r(50539)),
    h,
    p = x(r(27714)),
    u,
    g = b(r(40927)),
    m = r(40961),
    f = r(82910),
    y,
    v = x(r(5556));
  function b(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function x(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var C = function (e) {
    function t() {
      var e, r, n, o;
      (0, s.default)(this, t);
      for (var a = arguments.length, l = Array(a), c = 0; c < a; c++) l[c] = arguments[c];
      return r = n = (0, d.default)(this, (e = t.__proto__ || (0, i.default)(t)).call.apply(e, [this].concat(l))), n._measure = function () {
        var e = n.props,
          t = e.cache,
          r = e.columnIndex,
          i = void 0 === r ? 0 : r,
          o = e.parent,
          s = e.rowIndex,
          a = void 0 === s ? n.props.index || 0 : s,
          l = n._getCellMeasurements(),
          c = l.height,
          d = l.width;
        c === t.getHeight(a, i) && d === t.getWidth(a, i) || (t.set(a, i, d, c), o && "function" == typeof o.recomputeGridSize && o.recomputeGridSize({
          columnIndex: i,
          rowIndex: a
        }));
      }, o = r, (0, d.default)(n, o);
    }
    return (0, p.default)(t, e), (0, l.default)(t, [{
      key: "componentDidMount",
      value: function e() {
        this._maybeMeasureCell();
      }
    }, {
      key: "componentDidUpdate",
      value: function e() {
        this._maybeMeasureCell();
      }
    }, {
      key: "render",
      value: function e() {
        var t = this.props.children;
        return "function" == typeof t ? t({
          measure: this._measure
        }) : t;
      }
    }, {
      key: "_getCellMeasurements",
      value: function e() {
        var t = this.props.cache,
          r = (0, m.findDOMNode)(this);
        if (r && r.ownerDocument && r.ownerDocument.defaultView && r instanceof r.ownerDocument.defaultView.HTMLElement) {
          var n = r.style.width,
            i = r.style.height;
          t.hasFixedWidth() || (r.style.width = "auto"), t.hasFixedHeight() || (r.style.height = "auto");
          var o = Math.ceil(r.offsetHeight),
            s = Math.ceil(r.offsetWidth);
          return n && (r.style.width = n), i && (r.style.height = i), {
            height: o,
            width: s
          };
        }
        return {
          height: 0,
          width: 0
        };
      }
    }, {
      key: "_maybeMeasureCell",
      value: function e() {
        var t = this.props,
          r = t.cache,
          n = t.columnIndex,
          i = void 0 === n ? 0 : n,
          o = t.parent,
          s = t.rowIndex,
          a = void 0 === s ? this.props.index || 0 : s;
        if (!r.has(a, i)) {
          var l = this._getCellMeasurements(),
            c = l.height,
            d = l.width;
          r.set(a, i, d, c), o && "function" == typeof o.invalidateCellSizeAfterRender && o.invalidateCellSizeAfterRender({
            columnIndex: i,
            rowIndex: a
          });
        }
      }
    }]), t;
  }(g.PureComponent);
  C.__internalCellMeasurerFlag = !1, C.propTypes = null, t.default = C;
};
