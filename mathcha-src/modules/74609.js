/* module 74609 — 33649 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;
  var n,
    i = H(r(63193)),
    o,
    s = H(r(85505)),
    a,
    l = H(r(86007)),
    c,
    d = H(r(9506)),
    h,
    p = H(r(97588)),
    u,
    g = H(r(50539)),
    m,
    f = H(r(27714)),
    y,
    v = z(r(40927)),
    b,
    x = H(r(32485)),
    C,
    S = H(r(14474)),
    A,
    w = H(r(30022)),
    E,
    k = H(r(96301)),
    O = r(45273),
    D = H(O),
    P,
    M = H(r(5999)),
    I,
    T = H(r(52560)),
    L,
    R = H(r(61171)),
    B = r(71345),
    F = r(1226),
    j = r(6284),
    _,
    N = H(r(5556));
  function z(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
  }
  function H(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var W = t.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150,
    V = "observed",
    U = "requested",
    q = function e() {
      return null;
    },
    G = function (e) {
      function t(e) {
        (0, d.default)(this, t);
        var r = (0, g.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
        r._onGridRenderedMemoizer = (0, k.default)(), r._onScrollMemoizer = (0, k.default)(!1), r._deferredInvalidateColumnIndex = null, r._deferredInvalidateRowIndex = null, r._recomputeScrollLeftFlag = !1, r._recomputeScrollTopFlag = !1, r._horizontalScrollBarSize = 0, r._verticalScrollBarSize = 0, r._scrollbarPresenceChanged = !1, r._renderedColumnStartIndex = 0, r._renderedColumnStopIndex = 0, r._renderedRowStartIndex = 0, r._renderedRowStopIndex = 0, r._styleCache = {}, r._cellCache = {}, r._debounceScrollEndedCallback = function () {
          r._disablePointerEventsTimeoutId = null, r.setState({
            isScrolling: !1,
            needToResetStyleCache: !1
          });
        }, r._invokeOnGridRenderedHelper = function () {
          var e = r.props.onSectionRendered;
          r._onGridRenderedMemoizer({
            callback: e,
            indices: {
              columnOverscanStartIndex: r._columnStartIndex,
              columnOverscanStopIndex: r._columnStopIndex,
              columnStartIndex: r._renderedColumnStartIndex,
              columnStopIndex: r._renderedColumnStopIndex,
              rowOverscanStartIndex: r._rowStartIndex,
              rowOverscanStopIndex: r._rowStopIndex,
              rowStartIndex: r._renderedRowStartIndex,
              rowStopIndex: r._renderedRowStopIndex
            }
          });
        }, r._setScrollingContainerRef = function (e) {
          r._scrollingContainer = e;
        }, r._onScroll = function (e) {
          e.target === r._scrollingContainer && r.handleScrollEvent(e.target);
        };
        var n = new w.default({
            cellCount: e.columnCount,
            cellSizeGetter: function r(n) {
              return t._wrapSizeGetter(e.columnWidth)(n);
            },
            estimatedCellSize: t._getEstimatedColumnSize(e)
          }),
          i = new w.default({
            cellCount: e.rowCount,
            cellSizeGetter: function r(n) {
              return t._wrapSizeGetter(e.rowHeight)(n);
            },
            estimatedCellSize: t._getEstimatedRowSize(e)
          });
        return r.state = {
          instanceProps: {
            columnSizeAndPositionManager: n,
            rowSizeAndPositionManager: i,
            prevColumnWidth: e.columnWidth,
            prevRowHeight: e.rowHeight,
            prevColumnCount: e.columnCount,
            prevRowCount: e.rowCount,
            prevIsScrolling: !0 === e.isScrolling,
            prevScrollToColumn: e.scrollToColumn,
            prevScrollToRow: e.scrollToRow,
            scrollbarSize: 0,
            scrollbarSizeMeasured: !1
          },
          isScrolling: !1,
          scrollDirectionHorizontal: O.SCROLL_DIRECTION_FORWARD,
          scrollDirectionVertical: O.SCROLL_DIRECTION_FORWARD,
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: null,
          needToResetStyleCache: !1
        }, e.scrollToRow > 0 && (r._initialScrollTop = r._getCalculatedScrollTop(e, r.state)), e.scrollToColumn > 0 && (r._initialScrollLeft = r._getCalculatedScrollLeft(e, r.state)), r;
      }
      return (0, f.default)(t, e), (0, p.default)(t, [{
        key: "getOffsetForCell",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = t.alignment,
            n = void 0 === r ? this.props.scrollToAlignment : r,
            i = t.columnIndex,
            o = void 0 === i ? this.props.scrollToColumn : i,
            a = t.rowIndex,
            l = void 0 === a ? this.props.scrollToRow : a,
            c = (0, s.default)({}, this.props, {
              scrollToAlignment: n,
              scrollToColumn: o,
              scrollToRow: l
            });
          return {
            scrollLeft: this._getCalculatedScrollLeft(c),
            scrollTop: this._getCalculatedScrollTop(c)
          };
        }
      }, {
        key: "getTotalRowsHeight",
        value: function e() {
          return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
        }
      }, {
        key: "getTotalColumnsWidth",
        value: function e() {
          return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
        }
      }, {
        key: "handleScrollEvent",
        value: function e(t) {
          var r = t.scrollLeft,
            n = void 0 === r ? 0 : r,
            i = t.scrollTop,
            o = void 0 === i ? 0 : i;
          if (!(o < 0)) {
            this._debounceScrollEnded();
            var s = this.props,
              a = s.autoHeight,
              l = s.autoWidth,
              c = s.height,
              d = s.width,
              h = this.state.instanceProps,
              p = h.scrollbarSize,
              u = h.rowSizeAndPositionManager.getTotalSize(),
              g = h.columnSizeAndPositionManager.getTotalSize(),
              m = Math.min(Math.max(0, g - d + p), n),
              f = Math.min(Math.max(0, u - c + p), o);
            if (this.state.scrollLeft !== m || this.state.scrollTop !== f) {
              var y,
                v,
                b = {
                  isScrolling: !0,
                  scrollDirectionHorizontal: m !== this.state.scrollLeft ? m > this.state.scrollLeft ? O.SCROLL_DIRECTION_FORWARD : O.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal,
                  scrollDirectionVertical: f !== this.state.scrollTop ? f > this.state.scrollTop ? O.SCROLL_DIRECTION_FORWARD : O.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical,
                  scrollPositionChangeReason: V
                };
              a || (b.scrollTop = f), l || (b.scrollLeft = m), b.needToResetStyleCache = !1, this.setState(b);
            }
            this._invokeOnScrollMemoizer({
              scrollLeft: m,
              scrollTop: f,
              totalColumnsWidth: g,
              totalRowsHeight: u
            });
          }
        }
      }, {
        key: "invalidateCellSizeAfterRender",
        value: function e(t) {
          var r = t.columnIndex,
            n = t.rowIndex;
          this._deferredInvalidateColumnIndex = "number" == typeof this._deferredInvalidateColumnIndex ? Math.min(this._deferredInvalidateColumnIndex, r) : r, this._deferredInvalidateRowIndex = "number" == typeof this._deferredInvalidateRowIndex ? Math.min(this._deferredInvalidateRowIndex, n) : n;
        }
      }, {
        key: "measureAllCells",
        value: function e() {
          var t = this.props,
            r = t.columnCount,
            n = t.rowCount,
            i = this.state.instanceProps;
          i.columnSizeAndPositionManager.getSizeAndPositionOfCell(r - 1), i.rowSizeAndPositionManager.getSizeAndPositionOfCell(n - 1);
        }
      }, {
        key: "recomputeGridSize",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = t.columnIndex,
            n = void 0 === r ? 0 : r,
            i = t.rowIndex,
            o = void 0 === i ? 0 : i,
            s = this.props,
            a = s.scrollToColumn,
            l = s.scrollToRow,
            c = this.state.instanceProps;
          c.columnSizeAndPositionManager.resetCell(n), c.rowSizeAndPositionManager.resetCell(o), this._recomputeScrollLeftFlag = a >= 0 && (this.state.scrollDirectionHorizontal === O.SCROLL_DIRECTION_FORWARD ? n <= a : n >= a), this._recomputeScrollTopFlag = l >= 0 && (this.state.scrollDirectionVertical === O.SCROLL_DIRECTION_FORWARD ? o <= l : o >= l), this._styleCache = {}, this._cellCache = {}, this.forceUpdate();
        }
      }, {
        key: "scrollToCell",
        value: function e(t) {
          var r = t.columnIndex,
            n = t.rowIndex,
            i = this.props.columnCount,
            o = this.props;
          i > 1 && void 0 !== r && this._updateScrollLeftForScrollToColumn((0, s.default)({}, o, {
            scrollToColumn: r
          })), void 0 !== n && this._updateScrollTopForScrollToRow((0, s.default)({}, o, {
            scrollToRow: n
          }));
        }
      }, {
        key: "componentDidMount",
        value: function e() {
          var r = this.props,
            n = r.getScrollbarSize,
            i = r.height,
            o = r.scrollLeft,
            a = r.scrollToColumn,
            l = r.scrollTop,
            c = r.scrollToRow,
            d = r.width,
            h = this.state.instanceProps;
          if (this._initialScrollTop = 0, this._initialScrollLeft = 0, this._handleInvalidatedGridSize(), h.scrollbarSizeMeasured || this.setState(function (e) {
            var t = (0, s.default)({}, e, {
              needToResetStyleCache: !1
            });
            return t.instanceProps.scrollbarSize = n(), t.instanceProps.scrollbarSizeMeasured = !0, t;
          }), "number" == typeof o && o >= 0 || "number" == typeof l && l >= 0) {
            var p = t._getScrollToPositionStateUpdate({
              prevState: this.state,
              scrollLeft: o,
              scrollTop: l
            });
            p && (p.needToResetStyleCache = !1, this.setState(p));
          }
          this._scrollingContainer && (this._scrollingContainer.scrollLeft !== this.state.scrollLeft && (this._scrollingContainer.scrollLeft = this.state.scrollLeft), this._scrollingContainer.scrollTop !== this.state.scrollTop && (this._scrollingContainer.scrollTop = this.state.scrollTop));
          var u = i > 0 && d > 0;
          a >= 0 && u && this._updateScrollLeftForScrollToColumn(), c >= 0 && u && this._updateScrollTopForScrollToRow(), this._invokeOnGridRenderedHelper(), this._invokeOnScrollMemoizer({
            scrollLeft: o || 0,
            scrollTop: l || 0,
            totalColumnsWidth: h.columnSizeAndPositionManager.getTotalSize(),
            totalRowsHeight: h.rowSizeAndPositionManager.getTotalSize()
          }), this._maybeCallOnScrollbarPresenceChange();
        }
      }, {
        key: "componentDidUpdate",
        value: function e(t, r) {
          var n = this,
            i = this.props,
            o = i.autoHeight,
            s = i.autoWidth,
            a = i.columnCount,
            l = i.height,
            c = i.rowCount,
            d = i.scrollToAlignment,
            h = i.scrollToColumn,
            p = i.scrollToRow,
            u = i.width,
            g = this.state,
            m = g.scrollLeft,
            f = g.scrollPositionChangeReason,
            y = g.scrollTop,
            v = g.instanceProps;
          this._handleInvalidatedGridSize();
          var b = a > 0 && 0 === t.columnCount || c > 0 && 0 === t.rowCount;
          f === U && (!s && m >= 0 && (m !== this._scrollingContainer.scrollLeft || b) && (this._scrollingContainer.scrollLeft = m), !o && y >= 0 && (y !== this._scrollingContainer.scrollTop || b) && (this._scrollingContainer.scrollTop = y));
          var x = (0 === t.width || 0 === t.height) && l > 0 && u > 0;
          if (this._recomputeScrollLeftFlag ? (this._recomputeScrollLeftFlag = !1, this._updateScrollLeftForScrollToColumn(this.props)) : (0, M.default)({
            cellSizeAndPositionManager: v.columnSizeAndPositionManager,
            previousCellsCount: t.columnCount,
            previousCellSize: t.columnWidth,
            previousScrollToAlignment: t.scrollToAlignment,
            previousScrollToIndex: t.scrollToColumn,
            previousSize: t.width,
            scrollOffset: m,
            scrollToAlignment: d,
            scrollToIndex: h,
            size: u,
            sizeJustIncreasedFromZero: x,
            updateScrollIndexCallback: function e() {
              return n._updateScrollLeftForScrollToColumn(n.props);
            }
          }), this._recomputeScrollTopFlag ? (this._recomputeScrollTopFlag = !1, this._updateScrollTopForScrollToRow(this.props)) : (0, M.default)({
            cellSizeAndPositionManager: v.rowSizeAndPositionManager,
            previousCellsCount: t.rowCount,
            previousCellSize: t.rowHeight,
            previousScrollToAlignment: t.scrollToAlignment,
            previousScrollToIndex: t.scrollToRow,
            previousSize: t.height,
            scrollOffset: y,
            scrollToAlignment: d,
            scrollToIndex: p,
            size: l,
            sizeJustIncreasedFromZero: x,
            updateScrollIndexCallback: function e() {
              return n._updateScrollTopForScrollToRow(n.props);
            }
          }), this._invokeOnGridRenderedHelper(), m !== r.scrollLeft || y !== r.scrollTop) {
            var C = v.rowSizeAndPositionManager.getTotalSize(),
              S = v.columnSizeAndPositionManager.getTotalSize();
            this._invokeOnScrollMemoizer({
              scrollLeft: m,
              scrollTop: y,
              totalColumnsWidth: S,
              totalRowsHeight: C
            });
          }
          this._maybeCallOnScrollbarPresenceChange();
        }
      }, {
        key: "componentWillUnmount",
        value: function e() {
          this._disablePointerEventsTimeoutId && (0, F.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
        }
      }, {
        key: "render",
        value: function e() {
          var t = this.props,
            r = t.autoContainerWidth,
            n = t.autoHeight,
            i = t.autoWidth,
            o = t.className,
            a = t.containerProps,
            l = t.containerRole,
            c = t.containerStyle,
            d = t.height,
            h = t.id,
            p = t.noContentRenderer,
            u = t.role,
            g = t.style,
            m = t.tabIndex,
            f = t.width,
            y = this.state,
            b = y.instanceProps,
            C = y.needToResetStyleCache,
            S = this._isScrolling(),
            A = {
              boxSizing: "border-box",
              direction: "ltr",
              height: n ? "auto" : d,
              position: "relative",
              width: i ? "auto" : f,
              WebkitOverflowScrolling: "touch",
              willChange: "transform"
            };
          C && (this._styleCache = {}), this.state.isScrolling || this._resetStyleCache(), this._calculateChildrenToRender(this.props, this.state);
          var w = b.columnSizeAndPositionManager.getTotalSize(),
            E = b.rowSizeAndPositionManager.getTotalSize(),
            k = E > d ? b.scrollbarSize : 0,
            O = w > f ? b.scrollbarSize : 0;
          O === this._horizontalScrollBarSize && k === this._verticalScrollBarSize || (this._horizontalScrollBarSize = O, this._verticalScrollBarSize = k, this._scrollbarPresenceChanged = !0), A.overflowX = w + k <= f ? "hidden" : "auto", A.overflowY = E + O <= d ? "hidden" : "auto";
          var D = this._childrenToDisplay,
            P = 0 === D.length && d > 0 && f > 0;
          return v.createElement("div", (0, s.default)({
            ref: this._setScrollingContainerRef
          }, a, {
            "aria-label": this.props["aria-label"],
            "aria-readonly": this.props["aria-readonly"],
            className: (0, x.default)("ReactVirtualized__Grid", o),
            id: h,
            onScroll: this._onScroll,
            role: u,
            style: (0, s.default)({}, A, g),
            tabIndex: m
          }), D.length > 0 && v.createElement("div", {
            className: "ReactVirtualized__Grid__innerScrollContainer",
            role: l,
            style: (0, s.default)({
              width: r ? "auto" : w,
              height: E,
              maxWidth: w,
              maxHeight: E,
              overflow: "hidden",
              pointerEvents: S ? "none" : "",
              position: "relative"
            }, c)
          }, D), P && p());
        }
      }, {
        key: "_calculateChildrenToRender",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
            n = t.cellRenderer,
            i = t.cellRangeRenderer,
            o = t.columnCount,
            s = t.deferredMeasurementCache,
            a = t.height,
            l = t.overscanColumnCount,
            c = t.overscanIndicesGetter,
            d = t.overscanRowCount,
            h = t.rowCount,
            p = t.width,
            u = t.isScrollingOptOut,
            g = r.scrollDirectionHorizontal,
            m = r.scrollDirectionVertical,
            f = r.instanceProps,
            y = this._initialScrollTop > 0 ? this._initialScrollTop : r.scrollTop,
            v = this._initialScrollLeft > 0 ? this._initialScrollLeft : r.scrollLeft,
            b = this._isScrolling(t, r);
          if (this._childrenToDisplay = [], a > 0 && p > 0) {
            var x = f.columnSizeAndPositionManager.getVisibleCellRange({
                containerSize: p,
                offset: v
              }),
              C = f.rowSizeAndPositionManager.getVisibleCellRange({
                containerSize: a,
                offset: y
              }),
              S = f.columnSizeAndPositionManager.getOffsetAdjustment({
                containerSize: p,
                offset: v
              }),
              A = f.rowSizeAndPositionManager.getOffsetAdjustment({
                containerSize: a,
                offset: y
              });
            this._renderedColumnStartIndex = x.start, this._renderedColumnStopIndex = x.stop, this._renderedRowStartIndex = C.start, this._renderedRowStopIndex = C.stop;
            var w = c({
                direction: "horizontal",
                cellCount: o,
                overscanCellsCount: l,
                scrollDirection: g,
                startIndex: "number" == typeof x.start ? x.start : 0,
                stopIndex: "number" == typeof x.stop ? x.stop : -1
              }),
              E = c({
                direction: "vertical",
                cellCount: h,
                overscanCellsCount: d,
                scrollDirection: m,
                startIndex: "number" == typeof C.start ? C.start : 0,
                stopIndex: "number" == typeof C.stop ? C.stop : -1
              }),
              k = w.overscanStartIndex,
              O = w.overscanStopIndex,
              D = E.overscanStartIndex,
              P = E.overscanStopIndex;
            if (s) {
              if (!s.hasFixedHeight()) for (var M = D; M <= P; M++) if (!s.has(M, 0)) {
                k = 0, O = o - 1;
                break;
              }
              if (!s.hasFixedWidth()) for (var I = k; I <= O; I++) if (!s.has(0, I)) {
                D = 0, P = h - 1;
                break;
              }
            }
            this._childrenToDisplay = i({
              cellCache: this._cellCache,
              cellRenderer: n,
              columnSizeAndPositionManager: f.columnSizeAndPositionManager,
              columnStartIndex: k,
              columnStopIndex: O,
              deferredMeasurementCache: s,
              horizontalOffsetAdjustment: S,
              isScrolling: b,
              isScrollingOptOut: u,
              parent: this,
              rowSizeAndPositionManager: f.rowSizeAndPositionManager,
              rowStartIndex: D,
              rowStopIndex: P,
              scrollLeft: v,
              scrollTop: y,
              styleCache: this._styleCache,
              verticalOffsetAdjustment: A,
              visibleColumnIndices: x,
              visibleRowIndices: C
            }), this._columnStartIndex = k, this._columnStopIndex = O, this._rowStartIndex = D, this._rowStopIndex = P;
          }
        }
      }, {
        key: "_debounceScrollEnded",
        value: function e() {
          var t = this.props.scrollingResetTimeInterval;
          this._disablePointerEventsTimeoutId && (0, F.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId), this._disablePointerEventsTimeoutId = (0, F.requestAnimationTimeout)(this._debounceScrollEndedCallback, t);
        }
      }, {
        key: "_handleInvalidatedGridSize",
        value: function e() {
          if ("number" == typeof this._deferredInvalidateColumnIndex && "number" == typeof this._deferredInvalidateRowIndex) {
            var t = this._deferredInvalidateColumnIndex,
              r = this._deferredInvalidateRowIndex;
            this._deferredInvalidateColumnIndex = null, this._deferredInvalidateRowIndex = null, this.recomputeGridSize({
              columnIndex: t,
              rowIndex: r
            });
          }
        }
      }, {
        key: "_invokeOnScrollMemoizer",
        value: function e(t) {
          var r = this,
            n = t.scrollLeft,
            i = t.scrollTop,
            o = t.totalColumnsWidth,
            s = t.totalRowsHeight;
          this._onScrollMemoizer({
            callback: function e(t) {
              var n = t.scrollLeft,
                i = t.scrollTop,
                a = r.props,
                l = a.height,
                c,
                d;
              (0, a.onScroll)({
                clientHeight: l,
                clientWidth: a.width,
                scrollHeight: s,
                scrollLeft: n,
                scrollTop: i,
                scrollWidth: o
              });
            },
            indices: {
              scrollLeft: n,
              scrollTop: i
            }
          });
        }
      }, {
        key: "_isScrolling",
        value: function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
          return Object.hasOwnProperty.call(t, "isScrolling") ? Boolean(t.isScrolling) : Boolean(r.isScrolling);
        }
      }, {
        key: "_maybeCallOnScrollbarPresenceChange",
        value: function e() {
          if (this._scrollbarPresenceChanged) {
            var t = this.props.onScrollbarPresenceChange;
            this._scrollbarPresenceChanged = !1, t({
              horizontal: this._horizontalScrollBarSize > 0,
              size: this.state.instanceProps.scrollbarSize,
              vertical: this._verticalScrollBarSize > 0
            });
          }
        }
      }, {
        key: "scrollToPosition",
        value: function e(r) {
          var n = r.scrollLeft,
            i = r.scrollTop,
            o = t._getScrollToPositionStateUpdate({
              prevState: this.state,
              scrollLeft: n,
              scrollTop: i
            });
          o && (o.needToResetStyleCache = !1, this.setState(o));
        }
      }, {
        key: "_getCalculatedScrollLeft",
        value: function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
          return t._getCalculatedScrollLeft(r, n);
        }
      }, {
        key: "_updateScrollLeftForScrollToColumn",
        value: function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
            i = t._getScrollLeftForScrollToColumnStateUpdate(r, n);
          i && (i.needToResetStyleCache = !1, this.setState(i));
        }
      }, {
        key: "_getCalculatedScrollTop",
        value: function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
          return t._getCalculatedScrollTop(r, n);
        }
      }, {
        key: "_resetStyleCache",
        value: function e() {
          var t = this._styleCache,
            r = this._cellCache,
            n = this.props.isScrollingOptOut;
          this._cellCache = {}, this._styleCache = {};
          for (var i = this._rowStartIndex; i <= this._rowStopIndex; i++) for (var o = this._columnStartIndex; o <= this._columnStopIndex; o++) {
            var s = i + "-" + o;
            this._styleCache[s] = t[s], n && (this._cellCache[s] = r[s]);
          }
        }
      }, {
        key: "_updateScrollTopForScrollToRow",
        value: function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
            i = t._getScrollTopForScrollToRowStateUpdate(r, n);
          i && (i.needToResetStyleCache = !1, this.setState(i));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function e(r, n) {
          var o = {};
          0 === r.columnCount && 0 !== n.scrollLeft || 0 === r.rowCount && 0 !== n.scrollTop ? (o.scrollLeft = 0, o.scrollTop = 0) : (r.scrollLeft !== n.scrollLeft && r.scrollToColumn < 0 || r.scrollTop !== n.scrollTop && r.scrollToRow < 0) && (0, i.default)(o, t._getScrollToPositionStateUpdate({
            prevState: n,
            scrollLeft: r.scrollLeft,
            scrollTop: r.scrollTop
          }));
          var a = n.instanceProps;
          o.needToResetStyleCache = !1, r.columnWidth === a.prevColumnWidth && r.rowHeight === a.prevRowHeight || (o.needToResetStyleCache = !0), a.columnSizeAndPositionManager.configure({
            cellCount: r.columnCount,
            estimatedCellSize: t._getEstimatedColumnSize(r),
            cellSizeGetter: t._wrapSizeGetter(r.columnWidth)
          }), a.rowSizeAndPositionManager.configure({
            cellCount: r.rowCount,
            estimatedCellSize: t._getEstimatedRowSize(r),
            cellSizeGetter: t._wrapSizeGetter(r.rowHeight)
          }), 0 !== a.prevColumnCount && 0 !== a.prevRowCount || (a.prevColumnCount = 0, a.prevRowCount = 0), r.autoHeight && !1 === r.isScrolling && !0 === a.prevIsScrolling && (0, i.default)(o, {
            isScrolling: !1
          });
          var l = void 0,
            c = void 0;
          return (0, S.default)({
            cellCount: a.prevColumnCount,
            cellSize: "number" == typeof a.prevColumnWidth ? a.prevColumnWidth : null,
            computeMetadataCallback: function e() {
              return a.columnSizeAndPositionManager.resetCell(0);
            },
            computeMetadataCallbackProps: r,
            nextCellsCount: r.columnCount,
            nextCellSize: "number" == typeof r.columnWidth ? r.columnWidth : null,
            nextScrollToIndex: r.scrollToColumn,
            scrollToIndex: a.prevScrollToColumn,
            updateScrollOffsetForScrollToIndex: function e() {
              l = t._getScrollLeftForScrollToColumnStateUpdate(r, n);
            }
          }), (0, S.default)({
            cellCount: a.prevRowCount,
            cellSize: "number" == typeof a.prevRowHeight ? a.prevRowHeight : null,
            computeMetadataCallback: function e() {
              return a.rowSizeAndPositionManager.resetCell(0);
            },
            computeMetadataCallbackProps: r,
            nextCellsCount: r.rowCount,
            nextCellSize: "number" == typeof r.rowHeight ? r.rowHeight : null,
            nextScrollToIndex: r.scrollToRow,
            scrollToIndex: a.prevScrollToRow,
            updateScrollOffsetForScrollToIndex: function e() {
              c = t._getScrollTopForScrollToRowStateUpdate(r, n);
            }
          }), a.prevColumnCount = r.columnCount, a.prevColumnWidth = r.columnWidth, a.prevIsScrolling = !0 === r.isScrolling, a.prevRowCount = r.rowCount, a.prevRowHeight = r.rowHeight, a.prevScrollToColumn = r.scrollToColumn, a.prevScrollToRow = r.scrollToRow, a.scrollbarSize = r.getScrollbarSize(), void 0 === a.scrollbarSize ? (a.scrollbarSizeMeasured = !1, a.scrollbarSize = 0) : a.scrollbarSizeMeasured = !0, o.instanceProps = a, (0, s.default)({}, o, l, c);
        }
      }, {
        key: "_getEstimatedColumnSize",
        value: function e(t) {
          return "number" == typeof t.columnWidth ? t.columnWidth : t.estimatedColumnSize;
        }
      }, {
        key: "_getEstimatedRowSize",
        value: function e(t) {
          return "number" == typeof t.rowHeight ? t.rowHeight : t.estimatedRowSize;
        }
      }, {
        key: "_getScrollToPositionStateUpdate",
        value: function e(t) {
          var r = t.prevState,
            n = t.scrollLeft,
            i = t.scrollTop,
            o = {
              scrollPositionChangeReason: U
            };
          return "number" == typeof n && n >= 0 && (o.scrollDirectionHorizontal = n > r.scrollLeft ? O.SCROLL_DIRECTION_FORWARD : O.SCROLL_DIRECTION_BACKWARD, o.scrollLeft = n), "number" == typeof i && i >= 0 && (o.scrollDirectionVertical = i > r.scrollTop ? O.SCROLL_DIRECTION_FORWARD : O.SCROLL_DIRECTION_BACKWARD, o.scrollTop = i), "number" == typeof n && n >= 0 && n !== r.scrollLeft || "number" == typeof i && i >= 0 && i !== r.scrollTop ? o : null;
        }
      }, {
        key: "_wrapSizeGetter",
        value: function e(t) {
          return "function" == typeof t ? t : function () {
            return t;
          };
        }
      }, {
        key: "_getCalculatedScrollLeft",
        value: function e(t, r) {
          var n = t.columnCount,
            i = t.height,
            o = t.scrollToAlignment,
            s = t.scrollToColumn,
            a = t.width,
            l = r.scrollLeft,
            c = r.instanceProps;
          if (n > 0) {
            var d = n - 1,
              h = s < 0 ? d : Math.min(d, s),
              p = c.rowSizeAndPositionManager.getTotalSize(),
              u = c.scrollbarSizeMeasured && p > i ? c.scrollbarSize : 0;
            return c.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
              align: o,
              containerSize: a - u,
              currentOffset: l,
              targetIndex: h
            });
          }
          return 0;
        }
      }, {
        key: "_getScrollLeftForScrollToColumnStateUpdate",
        value: function e(r, n) {
          var i = n.scrollLeft,
            o = t._getCalculatedScrollLeft(r, n);
          return "number" == typeof o && o >= 0 && i !== o ? t._getScrollToPositionStateUpdate({
            prevState: n,
            scrollLeft: o,
            scrollTop: -1
          }) : null;
        }
      }, {
        key: "_getCalculatedScrollTop",
        value: function e(t, r) {
          var n = t.height,
            i = t.rowCount,
            o = t.scrollToAlignment,
            s = t.scrollToRow,
            a = t.width,
            l = r.scrollTop,
            c = r.instanceProps;
          if (i > 0) {
            var d = i - 1,
              h = s < 0 ? d : Math.min(d, s),
              p = c.columnSizeAndPositionManager.getTotalSize(),
              u = c.scrollbarSizeMeasured && p > a ? c.scrollbarSize : 0;
            return c.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
              align: o,
              containerSize: n - u,
              currentOffset: l,
              targetIndex: h
            });
          }
          return 0;
        }
      }, {
        key: "_getScrollTopForScrollToRowStateUpdate",
        value: function e(r, n) {
          var i = n.scrollTop,
            o = t._getCalculatedScrollTop(r, n);
          return "number" == typeof o && o >= 0 && i !== o ? t._getScrollToPositionStateUpdate({
            prevState: n,
            scrollLeft: -1,
            scrollTop: o
          }) : null;
        }
      }]), t;
    }(v.PureComponent);
  G.defaultProps = {
    "aria-label": "grid",
    "aria-readonly": !0,
    autoContainerWidth: !1,
    autoHeight: !1,
    autoWidth: !1,
    cellRangeRenderer: T.default,
    containerRole: "rowgroup",
    containerStyle: {},
    estimatedColumnSize: 100,
    estimatedRowSize: 30,
    getScrollbarSize: R.default,
    noContentRenderer: q,
    onScroll: function e() {},
    onScrollbarPresenceChange: function e() {},
    onSectionRendered: function e() {},
    overscanColumnCount: 0,
    overscanIndicesGetter: D.default,
    overscanRowCount: 10,
    role: "grid",
    scrollingResetTimeInterval: W,
    scrollToAlignment: "auto",
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    tabIndex: 0,
    isScrollingOptOut: !1
  }, G.propTypes = null, (0, B.polyfill)(G), t.default = G;
};
