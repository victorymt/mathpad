/* module 78179 — 9734 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.bpfrpt_proptype_Positioner = t.bpfrpt_proptype_CellMeasurerCache = t.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;
  var n,
    i = D(r(85505)),
    o,
    s = D(r(44508)),
    a,
    l = D(r(86007)),
    c,
    d = D(r(9506)),
    h,
    p = D(r(97588)),
    u,
    g = D(r(50539)),
    m,
    f = D(r(27714)),
    y,
    v = D(r(32485)),
    b,
    x = O(r(40927)),
    C = r(71345),
    S,
    A = D(r(73787)),
    w = r(1226),
    E,
    k = D(r(5556));
  function O(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function D(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var P = {},
    M = t.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150,
    I = function (e) {
      function t() {
        var e, r, n, i;
        (0, d.default)(this, t);
        for (var o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
        return r = n = (0, g.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(s))), n.state = {
          isScrolling: !1,
          scrollTop: 0
        }, n._invalidateOnUpdateStartIndex = null, n._invalidateOnUpdateStopIndex = null, n._positionCache = new A.default(), n._startIndex = null, n._startIndexMemoized = null, n._stopIndex = null, n._stopIndexMemoized = null, n._debounceResetIsScrollingCallback = function () {
          n.setState({
            isScrolling: !1
          });
        }, n._setScrollingContainerRef = function (e) {
          n._scrollingContainer = e;
        }, n._onScroll = function (e) {
          var t = n.props.height,
            r = e.target.scrollTop,
            i = Math.min(Math.max(0, n._getEstimatedTotalHeight() - t), r);
          r === i && (n._debounceResetIsScrolling(), n.state.scrollTop !== i && n.setState({
            isScrolling: !0,
            scrollTop: i
          }));
        }, i = r, (0, g.default)(n, i);
      }
      return (0, f.default)(t, e), (0, p.default)(t, [{
        key: "clearCellPositions",
        value: function e() {
          this._positionCache = new A.default(), this.forceUpdate();
        }
      }, {
        key: "invalidateCellSizeAfterRender",
        value: function e(t) {
          var r = t.rowIndex;
          null === this._invalidateOnUpdateStartIndex ? (this._invalidateOnUpdateStartIndex = r, this._invalidateOnUpdateStopIndex = r) : (this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, r), this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, r));
        }
      }, {
        key: "recomputeCellPositions",
        value: function e() {
          var t = this._positionCache.count - 1;
          this._positionCache = new A.default(), this._populatePositionCache(0, t), this.forceUpdate();
        }
      }, {
        key: "componentDidMount",
        value: function e() {
          this._checkInvalidateOnUpdate(), this._invokeOnScrollCallback(), this._invokeOnCellsRenderedCallback();
        }
      }, {
        key: "componentDidUpdate",
        value: function e(t, r) {
          this._checkInvalidateOnUpdate(), this._invokeOnScrollCallback(), this._invokeOnCellsRenderedCallback(), this.props.scrollTop !== t.scrollTop && this._debounceResetIsScrolling();
        }
      }, {
        key: "componentWillUnmount",
        value: function e() {
          this._debounceResetIsScrollingId && (0, w.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
        }
      }, {
        key: "render",
        value: function e() {
          var t = this,
            r = this.props,
            n = r.autoHeight,
            o = r.cellCount,
            a = r.cellMeasurerCache,
            l = r.cellRenderer,
            c = r.className,
            d = r.height,
            h = r.id,
            p = r.keyMapper,
            u = r.overscanByPixels,
            g = r.role,
            m = r.style,
            f = r.tabIndex,
            y = r.width,
            b = r.rowDirection,
            C = this.state,
            S = C.isScrolling,
            A = C.scrollTop,
            w = [],
            E = this._getEstimatedTotalHeight(),
            k = this._positionCache.shortestColumnSize,
            O = this._positionCache.count,
            D = 0,
            P = void 0;
          if (this._positionCache.range(Math.max(0, A - u), d + 2 * u, function (e, r, n) {
            var i;
            void 0 === P ? (D = e, P = e) : (D = Math.min(D, e), P = Math.max(P, e)), w.push(l({
              index: e,
              isScrolling: S,
              key: p(e),
              parent: t,
              style: (i = {
                height: a.getHeight(e)
              }, (0, s.default)(i, "ltr" === b ? "left" : "right", r), (0, s.default)(i, "position", "absolute"), (0, s.default)(i, "top", n), (0, s.default)(i, "width", a.getWidth(e)), i)
            }));
          }), k < A + d + u && O < o) for (var M = Math.min(o - O, Math.ceil((A + d + u - k) / a.defaultHeight * y / a.defaultWidth)), I = O; I < O + M; I++) P = I, w.push(l({
            index: I,
            isScrolling: S,
            key: p(I),
            parent: this,
            style: {
              width: a.getWidth(I)
            }
          }));
          return this._startIndex = D, this._stopIndex = P, x.createElement("div", {
            ref: this._setScrollingContainerRef,
            "aria-label": this.props["aria-label"],
            className: (0, v.default)("ReactVirtualized__Masonry", c),
            id: h,
            onScroll: this._onScroll,
            role: g,
            style: (0, i.default)({
              boxSizing: "border-box",
              direction: "ltr",
              height: n ? "auto" : d,
              overflowX: "hidden",
              overflowY: E < d ? "hidden" : "auto",
              position: "relative",
              width: y,
              WebkitOverflowScrolling: "touch",
              willChange: "transform"
            }, m),
            tabIndex: f
          }, x.createElement("div", {
            className: "ReactVirtualized__Masonry__innerScrollContainer",
            style: {
              width: "100%",
              height: E,
              maxWidth: "100%",
              maxHeight: E,
              overflow: "hidden",
              pointerEvents: S ? "none" : "",
              position: "relative"
            }
          }, w));
        }
      }, {
        key: "_checkInvalidateOnUpdate",
        value: function e() {
          if ("number" == typeof this._invalidateOnUpdateStartIndex) {
            var t = this._invalidateOnUpdateStartIndex,
              r = this._invalidateOnUpdateStopIndex;
            this._invalidateOnUpdateStartIndex = null, this._invalidateOnUpdateStopIndex = null, this._populatePositionCache(t, r), this.forceUpdate();
          }
        }
      }, {
        key: "_debounceResetIsScrolling",
        value: function e() {
          var t = this.props.scrollingResetTimeInterval;
          this._debounceResetIsScrollingId && (0, w.cancelAnimationTimeout)(this._debounceResetIsScrollingId), this._debounceResetIsScrollingId = (0, w.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, t);
        }
      }, {
        key: "_getEstimatedTotalHeight",
        value: function e() {
          var t = this.props,
            r = t.cellCount,
            n = t.cellMeasurerCache,
            i = t.width,
            o = Math.max(1, Math.floor(i / n.defaultWidth));
          return this._positionCache.estimateTotalHeight(r, o, n.defaultHeight);
        }
      }, {
        key: "_invokeOnScrollCallback",
        value: function e() {
          var t = this.props,
            r = t.height,
            n = t.onScroll,
            i = this.state.scrollTop;
          this._onScrollMemoized !== i && (n({
            clientHeight: r,
            scrollHeight: this._getEstimatedTotalHeight(),
            scrollTop: i
          }), this._onScrollMemoized = i);
        }
      }, {
        key: "_invokeOnCellsRenderedCallback",
        value: function e() {
          var t;
          this._startIndexMemoized === this._startIndex && this._stopIndexMemoized === this._stopIndex || ((0, this.props.onCellsRendered)({
            startIndex: this._startIndex,
            stopIndex: this._stopIndex
          }), this._startIndexMemoized = this._startIndex, this._stopIndexMemoized = this._stopIndex);
        }
      }, {
        key: "_populatePositionCache",
        value: function e(t, r) {
          for (var n = this.props, i = n.cellMeasurerCache, o = n.cellPositioner, s = t; s <= r; s++) {
            var a = o(s),
              l = a.left,
              c = a.top;
            this._positionCache.setPosition(s, l, c, i.getHeight(s));
          }
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function e(t, r) {
          return void 0 !== t.scrollTop && r.scrollTop !== t.scrollTop ? {
            isScrolling: !0,
            scrollTop: t.scrollTop
          } : null;
        }
      }]), t;
    }(x.PureComponent);
  function T(e) {
    return e;
  }
  function L() {}
  I.defaultProps = {
    autoHeight: !1,
    keyMapper: T,
    onCellsRendered: L,
    onScroll: L,
    overscanByPixels: 20,
    role: "grid",
    scrollingResetTimeInterval: M,
    style: P,
    tabIndex: 0,
    rowDirection: "ltr"
  }, I.propTypes = null;
  var R = null;
  (0, C.polyfill)(I), t.default = I;
  var B = null;
  t.bpfrpt_proptype_CellMeasurerCache = R, t.bpfrpt_proptype_Positioner = B;
};
