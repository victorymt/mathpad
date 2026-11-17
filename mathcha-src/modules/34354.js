/* module 34354 — 11950 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    x: () => S,
    A: () => C
  });
  var n = r(64467),
    i = r(84258),
    o = r(40927),
    s = r.n(o),
    a = r(6293);
  class l extends s().Component {
    render() {
      var e = "( ",
        t = this.props.shortcut;
      for (var r in t) if (t.hasOwnProperty(r)) {
        if ("char" == r) {
          e = e.concat(t[r], " )");
          break;
        }
        e = e.concat(r, " +");
      }
      return s().createElement("div", {
        style: {
          marginRight: 10
        }
      }, s().createElement("span", null, e, " "));
    }
  }
  var c = r(58578);
  class d extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleMouseMove", () => {
        this.props.isSelected || this.props.onSelectedItemChange(this.props.data);
      });
    }
    renderShortCutOrShiftIcon(e) {
      return e.hasExpanded && e.shortcut ? [s().createElement("b", {
        key: "1",
        style: h
      }, "⇧"), s().createElement(l, {
        key: "2",
        shortcut: e.shortcut
      })] : e.hasExpanded ? s().createElement("b", {
        style: h
      }, "⇧") : e.shortcut ? s().createElement(l, {
        shortcut: e.shortcut
      }) : void 0;
    }
    renderSymbol(e) {
      return "mathxx" == e.type ? s().createElement("mathxx", {
        style: {
          fontFamily: c.A.mathFontFamilyFromKey(e.mathxxType, this.props.baseMathModeFontFamily, "characters", void 0)
        }
      }, e.symbol) : e.renderSymbol ? e.renderSymbol(this.props.isExpanded, this.props.baseMathModeFontFamily) : e.symbol;
    }
    renderSymbolType(e) {
      switch (e) {
        case "single":
        case "composite":
          return s().createElement("svg", {
            width: "9",
            height: "9"
          }, s().createElement("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: "var(--ui-success, green)"
          }));
        case "settings":
          return s().createElement("i", {
            className: "fa fa-cog",
            "aria-hidden": "true",
            style: {
              color: "var(--ui-success, green)"
            }
          });
        case "action":
          return s().createElement("svg", {
            width: "11",
            height: "12"
          }, s().createElement("circle", {
            cx: "5",
            cy: "7",
            r: "4",
            fill: "none",
            stroke: "var(--ui-success, green)"
          }), s().createElement("circle", {
            cx: "5",
            cy: "7",
            r: "2",
            fill: "var(--ui-success, green)",
            stroke: "none"
          }));
        default:
          return null;
      }
    }
    renderFriendlyName(e) {
      return e.displayName ? e.displayName : e.names.join(",");
    }
    render() {
      var e = "symbol-container ";
      e += this.props.isSelected ? "selected" : "";
      var t = this.props.data;
      return s().createElement("div", {
        onMouseMove: this.handleMouseMove,
        style: this.props.style,
        className: e,
        key: t.symbol,
        onMouseDown: () => {
          this.props.onSelect(t);
        }
      }, s().createElement("div", {
        style: {
          width: 9,
          paddingRight: 3
        }
      }, this.renderSymbolType(t.type)), s().createElement("div", {
        className: "symbol-friendly-name"
      }, this.renderFriendlyName(t)), s().createElement("div", {
        className: "short-cut"
      }, this.renderShortCutOrShiftIcon(t)), s().createElement("div", {
        className: "symbol-icon"
      }, this.renderSymbol(t)));
    }
  }
  var h = {
      background: "var(--ui-surface, white)",
      fontWeight: "normal",
      display: "inline-block",
      color: "var(--ui-text-disabled, #b5b4b4)",
      border: "1px solid var(--ui-border, lightgray)",
      paddingLeft: 4,
      paddingRight: 4,
      borderRadius: 3,
      fontSize: 10,
      marginRight: 10,
      fontFamily: "Arial, Times"
    },
    p = r(55451),
    u = r(60150);
  class g extends s().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "supressMouseSelection", !0), (0, n.A)(this, "virtualScroll", void 0), (0, n.A)(this, "lastSelectedIndex", void 0), (0, n.A)(this, "onExpandChanged", e => {
        this.setState({
          isExpanded: e
        });
      }), (0, n.A)(this, "onSelectedIndexChange", (e, t) => {
        e < 0 || e >= t.length ? this.props.onSelectedItemChange(null) : (this.setState({
          selectedItem: t[e]
        }), null != this.lastSelectedIndex && this.virtualScroll.recomputeRowHeights(this.lastSelectedIndex), this.lastSelectedIndex = e, this.virtualScroll.recomputeRowHeights(e), this.props.onSelectedItemChange(t[e]));
      }), (0, n.A)(this, "onSelectedItemChange", e => {
        if (!this.supressMouseSelection) {
          var t = this.props.data.indexOf(e);
          this.onSelectedIndexChange(t, this.props.data);
        }
      }), (0, n.A)(this, "onSelect", e => {
        e.isExpanded = this.state.isExpanded, this.props.onSelect(e);
      }), (0, n.A)(this, "selectItem", () => {
        this.onSelect(this.state.selectedItem);
      }), (0, n.A)(this, "renderItem", e => {
        var t = e.index,
          r = e.key,
          n = e.style,
          i = this.props.data[t],
          o = this.state.selectedItem == i;
        return s().createElement(d, {
          key: r,
          baseMathModeFontFamily: this.props.baseMathModeFontFamily,
          isExpanded: this.state.isExpanded && o,
          style: n,
          isSelected: o,
          onSelectedItemChange: this.onSelectedItemChange,
          onSelect: this.selectItem,
          data: i
        });
      });
      var t = this.props.data;
      this.state = {
        selectedItem: t.length > 0 ? t[0] : null,
        isExpanded: !1
      };
    }
    componentDidMount() {
      p.A.waitALitteWhile(() => {
        this.supressMouseSelection = !1;
      });
    }
    goDown() {
      var e = this.props.data.indexOf(this.state.selectedItem);
      ++e >= this.props.data.length || (this.onSelectedIndexChange(e, this.props.data), this.supressMouseSelection = !0);
    }
    goUp() {
      var e = this.props.data.indexOf(this.state.selectedItem);
      --e < 0 || (this.onSelectedIndexChange(e, this.props.data), this.supressMouseSelection = !0);
    }
    componentWillReceiveProps(e) {
      e.data != this.props.data && this.onSelectedIndexChange(0, e.data);
    }
    render() {
      var e = this.props.data,
        t = u.A.autocompleteItemsScale();
      return s().createElement("div", {
        onMouseMove: () => this.supressMouseSelection = !1
      }, s().createElement(a.B8, {
        style: {
          outline: "none"
        },
        ref: e => {
          this.virtualScroll = e;
        },
        width: this.props.width,
        height: this.props.height,
        rowCount: e.length,
        rowHeight: r => {
          var n = e[r.index],
            i = 25 * t;
          return n.height && (i = n.height * t), i;
        },
        scrollToIndex: e.indexOf(this.state.selectedItem),
        rowRenderer: this.renderItem
      }));
    }
  }
  var m = r(98318),
    f = r(24320),
    y = r(40961),
    v = r.n(y),
    b = r(24373),
    x = r(37566);
  class C extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "itemsRef", void 0), (0, n.A)(this, "state", {
        selectedItem: this.props.data[0] || null
      }), (0, n.A)(this, "onSelect", e => {
        this.props.onItemCommit(e);
      }), (0, n.A)(this, "handleItemsRef", e => {
        this.itemsRef = e;
      }), (0, n.A)(this, "handleItemChange", e => {
        this.setState({
          selectedItem: e
        });
      }), (0, n.A)(this, "handleKeyDown", e => {
        if (this.props.onKeyDown) {
          var t = {
            handled: !1
          };
          if (this.props.onKeyDown(e, t), t.handled) return;
        }
        return 16 == e.keyCode && (this.itemsRef.onExpandChanged(!0), e.preventDefault(), e.stopPropagation()), 13 == e.keyCode ? (this.itemsRef.selectItem(), e.preventDefault(), void e.stopPropagation()) : 38 == e.keyCode ? (this.itemsRef.goUp(), e.preventDefault(), void e.stopPropagation()) : 40 == e.keyCode ? (this.itemsRef.goDown(), e.preventDefault(), void e.stopPropagation()) : 9 == e.keyCode ? (e.shiftKey ? this.previousTabItem() : this.nextTabItem(), e.preventDefault(), void e.stopPropagation()) : void 0;
      }), (0, n.A)(this, "handleKeyUp", e => {
        if (this.props.onKeyUp) {
          var t = {
            handled: !1
          };
          if (this.props.onKeyUp(e, t), t.handled) return;
        }
        16 == e.keyCode && (this.itemsRef.onExpandChanged(!1), e.preventDefault()), e.stopPropagation();
      });
    }
    renderFilter() {
      return this.props.renderFilter();
    }
    renderContent() {
      var e = this.props.itemsHeight || 209,
        t = 260;
      return s().createElement(g, {
        baseMathModeFontFamily: this.props.baseMathModeFontFamily,
        ref: this.handleItemsRef,
        data: this.props.data,
        onSelect: this.onSelect,
        height: e,
        width: t,
        onSelectedItemChange: this.handleItemChange
      });
    }
    renderDescription(e) {
      if (!i.A.isMobileOrTablet()) return e && (e.description || e.hasExpanded || e.shortcut) ? s().createElement(m.A, {
        item: e
      }) : null;
    }
    renderTabItem() {
      if (this.hasTabItems()) return s().createElement(f.A, {
        items: this.props.tabItems,
        selectedKey: this.props.tabSelectedKey,
        onSelect: this.props.onTabSelect
      });
    }
    hasTabItems() {
      return this.props.tabItems && this.props.tabItems.length > 0;
    }
    nextTabItem() {
      if (this.hasTabItems() && this.props.onTabSelect) {
        var e,
          t = (this.props.tabItems.findIndex(e => e.key == this.props.tabSelectedKey) + 1) % this.props.tabItems.length;
        this.props.onTabSelect(this.props.tabItems[t].key);
      }
    }
    previousTabItem() {
      if (this.hasTabItems() && this.props.onTabSelect) {
        var e = this.props.tabItems.findIndex(e => e.key == this.props.tabSelectedKey),
          t = e - 1 >= 0 ? e - 1 : this.props.tabItems.length - 1;
        this.props.onTabSelect(this.props.tabItems[t].key);
      }
    }
    focus() {
      var e;
      v().findDOMNode(this).focus();
    }
    componentDidMount() {
      this.props.mainContainerFocus && p.A.next(() => {
        this.focus();
      });
      var e = v().findDOMNode(this);
      b.A.registerEventToFixScroll(x.YG(e, ".ReactVirtualized__Grid.ReactVirtualized__List"));
    }
    componentWillUnmount() {
      var e = v().findDOMNode(this);
      b.A.unregisterEventToFixScroll(x.YG(e, ".ReactVirtualized__Grid.ReactVirtualized__List"));
    }
    renderExtra() {
      if (this.props.renderExtra) return this.props.renderExtra();
    }
    render() {
      return s().createElement("div", {
        tabIndex: -1,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        style: {
          outline: "none"
        }
      }, s().createElement("ac-main", {
        style: S
      }, s().createElement("div", {
        className: "auto-complete-content"
      }, this.renderFilter(), s().createElement("div", {
        style: {
          fontFamily: c.A.mathFontFamilyFromKey("raw", this.props.baseMathModeFontFamily, "characters")
        },
        className: "math-symbol-container"
      }, s().createElement("div", null, this.renderContent()))), this.renderTabItem()), this.renderDescription(this.state.selectedItem), this.renderExtra());
    }
  }
  var S = {
    display: "block",
    background: "var(--ui-surface-muted, #f7f7f7)",
    padding: 3,
    boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)",
    border: "1px var(--ui-border, lightgray) solid"
  };
};
