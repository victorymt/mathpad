/* module 38937 — 14914 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    s: () => T
  });
  var n = r(10467),
    i = r(64467),
    o = r(92207),
    s = r.n(o),
    a = r(40927),
    l = r.n(a),
    c = r(39791),
    d = r(43085),
    h = r(21774),
    p = r(58578);
  class u extends l().Component {
    componentDidMount() {
      var e = this.props;
      e.fixedContextHandler.getMtFuncs().delayRegisterLazyLineAdded(e.parentEditAreaId, e.lineId);
    }
    renderFakeRefTag() {
      if (this.props.lineTagInfo) {
        var e = this.props.fixedContextHandler.getMtFuncs();
        return l().createElement("div", {
          style: {
            visibility: "hidden",
            position: "relative"
          }
        }, l().createElement(d.G, {
          tagPosition: "line",
          getDzContainer: e.getDocZoomContainer,
          defaultText: this.props.defaultRefTag,
          fontFamily: p.A.textFontDisplayFromKey("default"),
          fontSize: 10,
          onTagInfoChanged: h.A.noopFunc,
          tagInfo: this.props.lineTagInfo,
          fixedContextHandler: this.props.fixedContextHandler
        }));
      }
    }
    renderDisplayMath() {
      var e = this.props.lineSize;
      return l().createElement("lazy-line", {
        style: {
          height: e.h,
          display: "block",
          overflow: "visible",
          background: "#efeeee",
          width: "100%"
        }
      }, this.renderFakeRefTag(), l().createElement("min-width", {
        style: {
          minWidth: e.w,
          display: "inline-block"
        }
      }));
    }
    renderInlineMath() {
      var e = this.props.lineSize;
      if (this.props.insideSingleLine) {
        var t = this.props.fixedContextHandler.getMtFuncs().getPageSettings();
        return l().createElement("lazy-line", {
          style: {
            height: e.h,
            width: e.w,
            display: "inline-block",
            overflow: "visible",
            background: "#efeeee",
            lineHeight: t.mathLineHeight
          }
        }, l().createElement("area-baseline", {
          style: {
            display: "inline-block",
            height: 1,
            marginTop: e.bl ? e.bl * e.h - 1 : .8 * e.h - 1
          }
        }));
      }
      return l().createElement("lazy-line", {
        style: {
          height: e.h,
          width: e.w,
          display: "block",
          overflow: "visible",
          background: "#efeeee",
          color: "transparent"
        }
      });
    }
    render() {
      return this.props.inlineMath ? this.renderInlineMath() : this.renderDisplayMath();
    }
  }
  var g = r(516),
    m = r(40961),
    f = r.n(m),
    y = r(55451),
    v = r(84258),
    b = r(4258),
    x = v.A.retrieveOptimizerDelta();
  class C {
    run(e) {
      var t = e.rect,
        r = e.wHeight,
        n = e.opmLines,
        i = e.lines;
      return b.O.shouldAlwaysShown(i) ? n ? "full-visible" : void 0 : t.bottom > -x && t.top < r + x ? t.top > -x && t.bottom < r + x && i.length <= 2 ? n ? "full-visible" : void 0 : "partial-visible" : "all" != n ? "invisible" : void 0;
    }
  }
  var S = new C(),
    A = r(3453),
    w = r(2543),
    E = r.n(w);
  class k {
    runWithOrderRects(e, t, r) {
      if (e.length <= 0) return e;
      var n = Number.MAX_SAFE_INTEGER,
        i = 0,
        o = e.map((e, o) => {
          var s = this.deltaToMiddle(e, r, t);
          return n > s && (n = s, i = o), s;
        }),
        s = new Array(e.length);
      s[0] = e[i];
      for (var a = 1, l = i - 1, c = i + 1; l >= 0 || c < e.length;) {
        var d, h;
        (l >= 0 ? o[l] : Number.MAX_SAFE_INTEGER) < (c < e.length ? o[c] : Number.MAX_SAFE_INTEGER) ? (s[a] = e[l], l--) : (s[a] = e[c], c++), a++;
      }
      return s;
    }
    deltaToMiddle(e, t, r) {
      var n = t(e);
      return Math.abs((n.top + n.bottom) / 2 - r);
    }
  }
  var O = new k();
  class D {
    run(e) {
      var t = e.wHeight / 2,
        r = e.htmLines.map((t, r) => [t, e.lines[r]]),
        n = this.fasterSortTuple(r, t),
        i = {
          params: e,
          index: 0,
          sortedTuples: n,
          opmLines: E().clone(e.prevOpmLines)
        };
      return this.runWithContext(i).then(() => i.params.lineParams.almostLineProcessingCount);
    }
    fasterSortTuple(e, t) {
      return O.runWithOrderRects(e, t, e => g.A.getElementRect(e[0]));
    }
    runWithContext(e) {
      var t = e.params.lineParams;
      if (t.cancel) return Promise.resolve();
      for (var r = e.params, n = r.viewPortDelta, i = r.selected, o = r.wHeight, s = r.prevOpmLines, a = e.sortedTuples, l = e.opmLines; e.index < a.length;) {
        var c = (0, A.A)(a[e.index], 2),
          d = c[0],
          h = c[1],
          p = g.A.getElementRect(d);
        if (p.bottom > -n && p.top < o + n ? l[h.id] && (l[h.id] = void 0) : i && i.lineIndex == e.index || (l[h.id] = h), e.index++, !!s[h.id] != !!l[h.id] && (t.almostLineProcessingCount++, !t.noDelayToShowProgress && b.O.shouldDelayToShowProgress(t.almostLineProcessingCount))) return e.params.onUpdate(e.params.batchProcess, l).then(b.O.delay).then(() => this.runWithContext(e));
      }
      return e.params.onUpdate(e.params.batchProcess, l);
    }
  }
  var P = new D(),
    M = r(53359),
    I = r(11742);
  class T extends c.A {
    constructor(e) {
      super(e), (0, i.A)(this, "clearTempRender", () => new Promise(e => {
        this.latestRenderedBy = "state", this.setState({
          requestTempRender: void 0
        }, () => {
          y.A.nextMicro(e);
        });
      })), (0, i.A)(this, "onRequestLinesUpdate", (e, t) => this.editor ? new Promise(r => {
        this.latestRenderedBy = "state", this.setState({
          opmLines: t
        }, () => {
          e("handleSpecificLines").then(r);
        });
      }) : (console.warn("component unmounted, running on line"), Promise.resolve())), this.state = {
        opmLines: this.initOpmLines(e)
      };
    }
    disableRegisterCalulateLine() {
      this.registerCalculateLineDisabled = !0;
    }
    enableRegisterCalulateLine() {
      this.registerCalculateLineDisabled = !1;
    }
    getLineCount() {
      return this.props.data.lines.length;
    }
    initOpmLines(e) {
      if (e.delayEnabled) {
        I.A.makeSureLines(this.props.data);
        var t = this.props.data.lines;
        if (!b.O.shouldAlwaysShown(t)) return "all";
      }
    }
    renderLine(e, t, r, n, i) {
      return this.renderOptimized(e, t, r, n, i);
    }
    componentDidMount() {
      if (super.componentDidMount && super.componentDidMount(), this.props.delayEnabled) {
        var e = this.context.fixedContextHandler.getMtFuncs();
        e.registerDelayEditArea(this), e.registerRefreshVisible(this);
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount(), this.props.delayEnabled && this.context.fixedContextHandler.getMtFuncs().unregisterDelayEditArea(this, this.props.data.id);
    }
    runTempRender(e, t, r) {
      var i = this;
      return this.startTempRender(e, r).then(function () {
        var e = (0, n.A)(s().mark(function e(r) {
          return s().wrap(function e(n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.prev = 0, n.next = 3, null == t ? void 0 : t(i);
              case 3:
                return n.prev = 3, n.next = 6, r();
              case 6:
                return n.finish(3);
              case 7:
              case "end":
                return n.stop();
            }
          }, e, null, [[0,, 3, 7]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }());
    }
    startTempRender(e, t) {
      return this.props.delayEnabled ? new Promise((r, n) => {
        this.latestRenderedBy = "state", this.setState({
          requestTempRender: t
        }, () => {
          Promise.resolve().then(() => e("opm-editarea startTempRender")).then(() => {
            y.A.nextMicro(() => {
              r(this.clearTempRender);
            });
          }).catch(e => {
            this.clearTempRender().then(() => n(e), n);
          });
        });
      }) : Promise.resolve(() => Promise.resolve());
    }
    componentWillReceiveProps(e, t) {
      if (super.componentWillReceiveProps && super.componentWillReceiveProps(e, t), "props" != this.latestRenderedBy && (this.latestRenderedBy = "props"), this.props.delayEnabled) {
        if (this.isLazyRendering && e.data.lines != this.props.data.lines) return console.warn("Data change when lazy rendering is happening, safe guard by setting lazy for whole editor"), void this.setState({
          opmLines: "all"
        });
        var r = this.state.opmLines,
          n;
        if ("all" != r || e.data.lines == this.props.data.lines && !e.selected || (r = this.initCacheAllMap()), r && "all" != r) {
          if (e.selected) {
            var i = e.data.lines[e.selected.lineIndex];
            r[i.id] && (r[i.id] = void 0);
          }
          if (e.data.lines != this.props.data.lines) for (var o = e.data.lines.length, s = e.data.lines, a = 0; a < o; a++) {
            var l = s[a],
              c = r[l.id];
            c && c != l && (r[l.id] = void 0);
          }
        }
        if (r != this.state.opmLines && this.setState({
          opmLines: r
        }), !e.selected && e.data.lines != this.props.data.lines) this.context.fixedContextHandler.getMtFuncs().registerRefreshVisible(this);
      }
    }
    initCacheAllMap() {
      var e = {};
      return this.props.data.lines.forEach(t => e[t.id] = t), e;
    }
    getBaseClassname() {
      return this.props.delayEnabled && this.state.opmLines ? "lazy lazyable" : "lazyable";
    }
    requireRefresh() {
      var e = g.A.getElementRect(f().findDOMNode(this)),
        t = window.innerHeight,
        r;
      return S.run({
        rect: e,
        wHeight: t,
        opmLines: this.state.opmLines,
        lines: this.props.data.lines
      }) ? e : "no-processing";
    }
    optimizerRefresh(e, t) {
      return this.isLazyRendering ? (console.warn("isLazyRendering in optimizerRefresh is true"), Promise.resolve(0)) : (this.isLazyRendering = !0, this.innerOptimizerRefresh(e, t).finally(() => {
        this.isLazyRendering = void 0;
      }));
    }
    innerOptimizerRefresh(e, t) {
      if (!this.props.delayEnabled) return Promise.resolve(0);
      if (!this.editor) return console.warn("component unmounted"), Promise.resolve(t && t.almostLineProcessingCount || 0);
      this.isLazyRendering = !0, t = t || {
        almostLineProcessingCount: 0,
        rect: g.A.getElementRect(f().findDOMNode(this)),
        noDelayToShowProgress: !0
      };
      var r = window.innerHeight,
        n;
      switch (S.run({
        rect: t.rect,
        wHeight: r,
        opmLines: this.state.opmLines,
        lines: this.props.data.lines
      })) {
        case "full-visible":
          return this.latestRenderedBy = "state", new Promise(r => this.setState({
            opmLines: void 0
          }, () => {
            t.almostLineProcessingCount++, !t.noDelayToShowProgress && b.O.shouldDelayToShowProgress(t.almostLineProcessingCount) ? e("opm-editarea full-visible delay").then(() => b.O.delay()).then(() => r(t.almostLineProcessingCount)) : e("opm-editarea full-visible").then(() => r(t.almostLineProcessingCount));
          }));
        case "invisible":
          return this.props.selected ? this.handleSpecificLines(e, window.innerHeight, x, t) : (this.latestRenderedBy = "state", t.almostLineProcessingCount++, new Promise(e => this.setState({
            opmLines: "all"
          }, () => e(t.almostLineProcessingCount))));
        case "partial-visible":
          return this.handleSpecificLines(e, window.innerHeight, x, t);
      }
      return Promise.resolve(0);
    }
    handleSpecificLines(e, t, r, n) {
      var i = f().findDOMNode(this),
        o = g.A.findEditLines(i, !0),
        s = {};
      return "all" == this.state.opmLines ? s = this.initCacheAllMap() : this.state.opmLines && (s = this.state.opmLines), P.run({
        htmLines: o,
        lines: this.props.data.lines,
        selected: this.props.selected,
        wHeight: t,
        viewPortDelta: r,
        prevOpmLines: s,
        lineParams: n,
        batchProcess: e,
        onUpdate: this.onRequestLinesUpdate
      });
    }
    renderPlaceHolder() {}
    shouldStoreCacheSize() {
      return !0;
    }
    enableDebugCompareCacheSize() {
      return !1;
    }
    isActualRenderByTempRender(e, t) {
      var r = this.state.requestTempRender;
      if (!r) return !1;
      if ("object" == typeof r) {
        var n = r.fromLineIdx,
          i = r.toLineIdx;
        return "lines-visible" == r.type ? n <= t && t <= i : n <= t && t <= i && !this.fetchCacheSize(e.id);
      }
      return "full-visible" == r || "on-unsized" == r && !this.fetchCacheSize(e.id);
    }
    fetchCacheSize(e) {
      return this.context.fixedContextHandler.getMtFuncs().fetchCacheSize(this.props.data.id, e);
    }
    fetchDefaultRefTag(e, t) {
      var r;
      if (this.editor && M.p.shouldShowTagInfo(e)) {
        var n = g.A.findLineByIndex(this.editor, t);
        if (n) {
          var i = null === (r = g.A.findRefTag(n)) || void 0 === r ? void 0 : r.firstElementChild;
          return i ? i.textContent : void 0;
        }
      }
    }
    renderDelayLine(e, t, r) {
      return l().createElement(u, {
        fixedContextHandler: this.context.fixedContextHandler,
        insideSingleLine: this.props.insideSingleLine,
        inlineMath: this.props.inlineMath,
        lineTagInfo: M.p.shouldShowTagInfo(e) ? e.tagInfo : void 0,
        key: e.id,
        lineSize: t,
        defaultRefTag: this.fetchDefaultRefTag(e, r),
        lineId: e.id,
        parentEditAreaId: this.props.data.id
      });
    }
    renderOptimized(e, t, r, n, i) {
      var o;
      if (!this.props.delayEnabled || null !== (o = this.props.dgTextInfo) && void 0 !== o && o.inDgFullView || this.isActualRenderByTempRender(e, t)) return super.renderLine(e, t, r, n, i, !1);
      if (this.state.opmLines && (!this.props.selected || this.props.selected.lineIndex != t) && (!this.props.extendedSelected || this.props.extendedSelected.lineIndex != t)) {
        if (b.O.shouldAlwaysShownOn1Line(e)) return super.renderLine(e, t, r, n, i, !0);
        var s = this.fetchCacheSize(e.id);
        if ("d" == s) return super.renderLine(e, t, r, n, i, !1);
        if (!s) return this.registerCalculateLineDisabled || this.context.fixedContextHandler.getMtFuncs().registerRecalculateSize(this), this.renderDelayLine(e, {
          h: 17,
          w: 2
        }, t);
        if ("all" == this.state.opmLines || this.state.opmLines[e.id]) return this.renderDelayLine(e, s, t);
      }
      return super.renderLine(e, t, r, n, i, !1);
    }
  }
};
