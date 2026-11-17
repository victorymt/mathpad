/* module 12481 — 2835 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(516),
    c = r(55451),
    d = r(60693);
  class h extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "cache", {}), (0, n.A)(this, "willComponentUnmount", void 0), (0, n.A)(this, "rootElement", void 0), (0, n.A)(this, "smallHeightUpdateRetries", 0), (0, n.A)(this, "updateComponent", () => {
        this.props.fixedContextHandler.getRenderingContext().nextCycleIfRequired(() => {
          if (!this.willComponentUnmount) {
            var e = d.T.getBCRect(this.rootElement, this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer()),
              t = d.T.widthOf(e),
              r = d.T.heightOf(e);
            if (0 != t && 0 != r) {
              var n = l.A.getComputedFontSize(this.rootElement);
              if (this.props.heightShouldNotBeSmall && r < 3) {
                if (this.smallHeightUpdateRetries < 10) return c.A.next(this.updateComponent, 50 * this.smallHeightUpdateRetries + 10), void this.smallHeightUpdateRetries++;
                this.smallHeightUpdateRetries = 0;
              } else this.smallHeightUpdateRetries > 0 && (this.smallHeightUpdateRetries = 0);
              this.cache.width == t && this.cache.height == r && this.cache.fontSize == n && this.cache.changedData == this.props.changedData && this.cache.className == this.props.className || (this.cache = {
                width: t,
                height: r,
                fontSize: n,
                className: this.props.className,
                changedData: this.props.changedData
              }, this.forceUpdate());
            } else console.warn("why rect is 0");
          }
        });
      });
    }
    componentWillUnmount() {
      this.willComponentUnmount = !0;
    }
    componentWillReceiveProps() {
      this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    shouldComponentUpdate(e) {
      return e.className != this.props.className || !!e.dimensionChangedInStyle && e.style != this.props.style;
    }
    componentDidMount() {
      this.rootElement = a().findDOMNode(this), this.props.fixedContextHandler.getBatchUpdater().pushToEnd(this.updateComponent, this);
    }
    invalidateDrawing() {
      this.updateComponent();
    }
    renderInsideSvg() {
      return this.props.renderSvg(this.cache.width, this.cache.height, this.cache.fontSize);
    }
    render() {
      return this.rootElement ? o().createElement("svg", {
        style: this.props.style,
        className: this.props.className
      }, this.renderInsideSvg()) : o().createElement("svg", {
        style: this.props.style,
        className: this.props.className
      });
    }
  }
};
