/* module 91335 — 20030 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => I
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(35835),
    c = r(37566),
    d = r(40961),
    h = r.n(d),
    p = r(32485),
    u = r.n(p);
  class g extends o().Component {
    renderItem(e) {
      return null != this.props.onRenderItem ? this.props.onRenderItem(e) : e.hasOwnProperty("value") ? e.value : e;
    }
    getKeyAsString(e) {
      return "number" == typeof e || "string" == typeof e ? e.toString() : JSON.stringify(e);
    }
    render() {
      var e = u()("item tw:flex tw:flex-row tw:min-h-[25px] tw:px-[4px] tw:items-center tw:cursor-pointer", {
        "last-selected": this.props.isLastSelected,
        selected: this.props.isSelected,
        "no-select": !!this.props.data.noSelect,
        disabled: !!this.props.data.disabled
      });
      return o().createElement("div", {
        className: e,
        id: this.props.id,
        role: this.props.data.noSelect ? "presentation" : "option",
        "aria-selected": this.props.isLastSelected,
        "aria-disabled": !!this.props.data.disabled,
        onMouseDown: e => {
          this.props.data.noSelect || this.props.data.disabled || (this.props.onSelected(this.props.data), this.props.stopPropagationOnSelect && (e.preventDefault(), e.stopPropagation()));
        },
        onMouseOver: () => {
          this.props.onSelectedItemChange(this.props.data);
        }
      }, o().createElement("div", {
        className: "tw:flex-1",
        "data-key": this.getKeyAsString(this.props.data.key)
      }, this.renderItem(this.props.data)));
    }
  }
  var m = r(21774);
  class f {
    keysEqual(e, t) {
      return this.isSelectBoxComplexKey(e) && this.isSelectBoxComplexKey(t) ? e.getUniqueKey() == t.getUniqueKey() : e == t;
    }
    isSelectable(e) {
      return !(!e || e.hidden || e.noSelect || e.disabled);
    }
    isSelectBoxComplexKey(e) {
      return m.A.isObj(e) && "SelectBoxComplexKey" == e.type;
    }
  }
  var y = new f();
  class v extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "onSelect", e => {
        var t = this.props.data.find(t => e && y.keysEqual(t.key, e.key));
        y.isSelectable(t) && this.props.onSelect(t);
      }), this.state = {
        selectedItem: this.resolve(e, e.selectedData)
      };
    }
    resolve(e, t) {
      return e.data.find(e => y.isSelectable(e) && t && y.keysEqual(e.key, t.key)) || e.data.find(e => y.isSelectable(e)) || null;
    }
    componentWillReceiveProps(e) {
      var t,
        r,
        n = !y.keysEqual(null === (t = e.selectedData) || void 0 === t ? void 0 : t.key, null === (r = this.props.selectedData) || void 0 === r ? void 0 : r.key);
      this.setState({
        selectedItem: this.resolve(e, n ? e.selectedData : this.state.selectedItem)
      });
    }
    componentDidMount() {
      this.notifyActive();
    }
    componentDidUpdate() {
      this.notifyActive();
    }
    notifyActive() {
      var e,
        t,
        r = this.props.data.indexOf(this.state.selectedItem);
      null === (e = (t = this.props).onActiveChange) || void 0 === e || e.call(t, r < 0 ? void 0 : this.props.id + "-" + r);
      var n = h().findDOMNode(this),
        i = c.Zy(n, ".selected");
      i && n.clientHeight && (i.offsetTop < n.scrollTop || i.offsetTop + i.offsetHeight > n.scrollTop + n.clientHeight) && (n.scrollTop = i.offsetTop - n.clientHeight / 2);
    }
    move(e) {
      var t = this.props.data.filter(e => y.isSelectable(e)),
        r = t.indexOf(this.state.selectedItem),
        n = r < 0 ? e > 0 ? 0 : t.length - 1 : Math.max(0, Math.min(t.length - 1, r + e));
      this.setState({
        selectedItem: t[n] || null
      });
    }
    goDown() {
      this.move(1);
    }
    goUp() {
      this.move(-1);
    }
    goFirst() {
      this.setState({
        selectedItem: this.props.data.find(e => y.isSelectable(e)) || null
      });
    }
    goLast() {
      this.setState({
        selectedItem: this.props.data.filter(e => y.isSelectable(e)).slice(-1)[0] || null
      });
    }
    selectItem() {
      this.onSelect(this.state.selectedItem);
    }
    itemKey(e) {
      return y.isSelectBoxComplexKey(e.key) ? e.key.getUniqueKey() : e.key;
    }
    render() {
      return o().createElement("div", {
        role: "listbox",
        id: this.props.id,
        style: this.props.style
      }, this.props.data.map((e, t) => e.hidden ? null : o().createElement(g, {
        key: this.itemKey(e),
        id: this.props.id + "-" + t,
        data: e,
        isSelected: !!this.state.selectedItem && y.keysEqual(this.state.selectedItem.key, e.key),
        isLastSelected: !!this.props.selectedData && y.keysEqual(this.props.selectedData.key, e.key),
        onSelected: this.onSelect,
        onSelectedItemChange: e => {
          y.isSelectable(e) && this.setState({
            selectedItem: e
          });
        },
        onRenderItem: this.props.onRenderItem,
        stopPropagationOnSelect: this.props.stopPropagationOnSelect
      })));
    }
  }
  var b = r(36223),
    x = r(55451),
    C = r(84258),
    S = r(85576),
    A = r(516);
  function w(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function E(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? w(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var k = "tw:[font-family:'Segoe_UI',Arial,Verdana,sans-serif]",
    O = "select-box-container tw:relative tw:text-[13px] tw:[outline:none] " + k,
    D = "input-container tw:box-border tw:flex tw:items-center tw:min-h-[var(--ui-control-height,24px)] tw:px-[3px] tw:py-[2px]",
    P = "tw:block tw:w-full tw:h-auto tw:whitespace-nowrap tw:p-0 tw:m-0 tw:border-0 tw:[outline:none] tw:leading-[1.35em] " + k,
    M = "arrow-down-icon tw:absolute tw:top-1/2 tw:right-[3px] tw:-translate-y-1/2 tw:leading-[18px]";
  class I extends o().Component {
    componentWillReceiveProps(e) {
      (e.disabled || !e.searchable && this.props.searchable) && this.setState({
        isExpanded: !1,
        searchText: "",
        searchChanged: !1
      });
    }
    componentWillUnmount() {
      this.mounted = !1, document.removeEventListener("mousedown", this.outside, !0), document.removeEventListener("touchstart", this.outside, !0);
    }
    constructor(e) {
      super(e), (0, n.A)(this, "items", void 0), (0, n.A)(this, "container", void 0), (0, n.A)(this, "expandContainer", void 0), (0, n.A)(this, "searchInput", void 0), (0, n.A)(this, "isBlurring", !1), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "listId", "ui-select-" + ++I.nextId), (0, n.A)(this, "activeId", void 0), (0, n.A)(this, "onActiveChange", e => {
        this.activeId = e;
        var t = this.searchInput || this.container;
        t && (e ? t.setAttribute("aria-activedescendant", e) : t.removeAttribute("aria-activedescendant"));
      }), (0, n.A)(this, "outside", e => {
        this.state.isExpanded && this.container && !this.container.contains(e.target) && this.setState({
          isExpanded: !1
        });
      }), (0, n.A)(this, "onKeyDown", e => {
        if (!this.props.disabled) {
          var t = e.target,
            r,
            n,
            i;
          if (t === this.searchInput || !/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName)) if (27 !== e.keyCode) {
            if (e.stopPropagation(), this.state.isExpanded) {
              var o, s, a, l, c;
              if (13 === e.keyCode || 32 === e.keyCode && !this.props.searchable) return e.preventDefault(), void (null === (o = this.items) || void 0 === o || o.selectItem());
              if (36 === e.keyCode || 35 === e.keyCode) e.preventDefault(), 36 === e.keyCode ? null === (s = this.items) || void 0 === s || s.goFirst() : null === (a = this.items) || void 0 === a || a.goLast();
              if (38 == e.keyCode) null === (l = this.items) || void 0 === l || l.goUp(), e.preventDefault();
              if (40 == e.keyCode) null === (c = this.items) || void 0 === c || c.goDown(), e.preventDefault();
            } else 13 !== e.keyCode && 32 !== e.keyCode && 38 !== e.keyCode && 40 !== e.keyCode || (e.preventDefault(), this.setState({
              isExpanded: !0,
              searchText: this.getSearchTextOnOpen(),
              searchChanged: !1
            }));
          } else this.state.isExpanded && (e.preventDefault(), e.stopPropagation(), null === (r = e.nativeEvent) || void 0 === r || null === (n = r.stopImmediatePropagation) || void 0 === n || n.call(r), null === (i = this.container) || void 0 === i || i.focus(), this.setState({
            isExpanded: !1
          }));
        }
      }), (0, n.A)(this, "onSelect", e => {
        var t;
        !this.props.disabled && y.isSelectable(e) && this.getData().some(t => y.keysEqual(t.key, e.key) && y.isSelectable(t)) && (this.props.searchable && (null === (t = this.container) || void 0 === t || t.focus()), this.setState({
          isExpanded: !1,
          searchText: "",
          searchChanged: !1
        }), y.isSelectBoxComplexKey(e.key) ? this.props.onChange(e.key) : m.A.isObj(e.key) || this.props.onChange(e.key));
      }), (0, n.A)(this, "onBlur", () => {
        I.__testDisableCollapsedOnBlur || (this.isBlurring = !0, x.A.next(() => {
          this.mounted && (this.isFocusInside() ? this.isBlurring = !1 : this.isBlurring && this.setState({
            isExpanded: !1
          }));
        }));
      }), (0, n.A)(this, "handleFocus", () => {
        this.isBlurring = !1;
      }), (0, n.A)(this, "onSelectBoxMouseDown", e => {
        this.state.isExpanded || (b.A.setCustomInfo(e, l.A.getBuilder().withFocusAcquired().build()), x.A.next(() => {
          this.mounted && this.state.isExpanded && !this.props.searchable && this.container && this.container.focus();
        })), this.setState({
          isExpanded: !this.state.isExpanded,
          searchText: this.state.isExpanded ? "" : this.getSearchTextOnOpen(),
          searchChanged: !1
        }), e.preventDefault(), this.props.stopPropagationOnSelect && e.stopPropagation();
      }), (0, n.A)(this, "handleSearchInputKeyDown", e => {
        [13, 38, 40, 27, 36, 35].indexOf(e.keyCode) >= 0 ? this.onKeyDown(e) : e.stopPropagation();
      }), (0, n.A)(this, "selectSearchInputText", e => {
        var t;
        e.target.select();
      }), this.state = {
        isExpanded: !1,
        arrowClassName: "",
        searchText: "",
        searchChanged: !1
      };
    }
    getData() {
      var e;
      return this.props.data || [];
    }
    getFilteredData(e) {
      if (!this.props.searchable || !this.state.searchChanged || !this.state.searchText) return e;
      var t = this.state.searchText.toLowerCase();
      return a().filter(e, e => (e.value || "").toLowerCase().indexOf(t) >= 0);
    }
    getSelectedData(e, t) {
      return null == e || 0 == e.length ? null : null == t ? e[0] : y.isSelectBoxComplexKey(t) ? a().find(e, e => {
        if (y.isSelectBoxComplexKey(e.key)) return e.key.getUniqueKey() == t.getUniqueKey();
      }) : a().find(e, e => e.key == t);
    }
    renderItems(e, t) {
      return this.state.isExpanded ? o().createElement(v, {
        style: this.props.itemsStyle,
        ref: e => this.items = e,
        data: e,
        onSelect: this.onSelect,
        id: this.listId,
        onActiveChange: this.onActiveChange,
        selectedData: t,
        onRenderItem: this.props.onRenderItem,
        stopPropagationOnSelect: this.props.stopPropagationOnSelect
      }) : null;
    }
    renderInput(e) {
      return this.props.searchable && this.state.isExpanded && !this.props.disabled ? o().createElement("input", {
        ref: e => {
          this.searchInput = e;
        },
        role: "combobox",
        "aria-expanded": "true",
        "aria-controls": this.listId,
        "aria-label": this.props.ariaLabel || this.props.title || "Select an option",
        "aria-autocomplete": "list",
        "aria-activedescendant": this.activeId,
        className: u()("select-box-direct-search-input tw:box-border tw:block tw:w-full tw:h-auto", k),
        value: this.state.searchText || "",
        placeholder: e && e.value || this.props.searchPlaceholder || "Search",
        style: this.props.inputStyle,
        onMouseDown: e => e.stopPropagation(),
        onClick: this.selectSearchInputText,
        onFocus: this.selectSearchInputText,
        onChange: e => this.setState({
          searchText: e.target.value,
          searchChanged: !0
        }),
        onKeyDown: this.handleSearchInputKeyDown
      }) : !e || !e.value && !y.isSelectBoxComplexKey(e.key) || this.props.showEmpty ? o().createElement("input-like", {
        class: P,
        readOnly: !0,
        style: E({
          whiteSpace: "pre"
        }, this.props.inputStyle)
      }, " ") : this.props.onRenderValue ? o().createElement("input-like", {
        class: P,
        style: this.props.inputStyle,
        readOnly: !0
      }, this.props.onRenderValue(e)) : y.isSelectBoxComplexKey(e.key) && this.props.onRenderItem ? o().createElement("input-like", {
        class: P,
        style: this.props.inputStyle,
        readOnly: !0
      }, this.props.onRenderItem(e)) : e.hasOwnProperty("value") ? o().createElement("input-like", {
        class: P,
        style: this.props.inputStyle,
        readOnly: !0
      }, e.value) : o().createElement("input-like", {
        class: P,
        style: this.props.inputStyle,
        readOnly: !0
      }, e);
    }
    renderInDisabled(e) {
      var t = E(E({}, this.props.selectBoxStyle), {}, {
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          color: "var(--ui-text-disabled, lightgray)"
        }),
        r = E(E({}, this.props.style), {}, {
          width: this.props.width || 200
        });
      return o().createElement("div", {
        className: u()(O, "disabled", this.props.className, {
          compact: "compact" === this.props.variant
        }),
        ref: e => this.container = e,
        style: r,
        title: this.props.title,
        role: "combobox",
        "aria-disabled": "true",
        "aria-expanded": "false",
        "aria-label": this.props.ariaLabel || this.props.title || "Select an option"
      }, o().createElement("div", {
        style: t,
        "data-for": "select-box",
        className: D
      }, this.renderInput(e), !this.props.hideCaret && o().createElement("div", {
        className: u()(M, this.state.arrowClassName)
      }, o().createElement("i", {
        className: "fa fa-caret-down",
        "aria-hidden": "true",
        style: {
          color: "var(--ui-text-disabled, lightgray)"
        }
      }))));
    }
    componentDidUpdate(e, t) {
      this.state.isExpanded && this.expandContainer && (t.isExpanded != this.state.isExpanded || t.searchText != this.state.searchText || e.data !== this.props.data || e.width !== this.props.width || e.expansionWidth !== this.props.expansionWidth) && this.setState({
        expandContainerSize: A.A.getElementClientSize(this.expandContainer)
      }), this.props.searchable && this.state.isExpanded && t.isExpanded != this.state.isExpanded && this.searchInput && (this.searchInput.focus(), this.searchInput.select());
    }
    componentDidMount() {
      this.mounted = !0, document.addEventListener("mousedown", this.outside, !0), document.addEventListener("touchstart", this.outside, !0), this.props.focusOnMount && x.A.next(() => {
        this.mounted && !this.props.disabled && h().findDOMNode(this).focus();
      }, 50);
    }
    getExpandStyle() {
      var e = this.props.usePositionFixedOnExpand,
        t = {
          width: this.props.expansionWidth || this.props.width || 200
        };
      if (e && this.container) {
        var r = S.c.suggestExpandPositionLeftTop({
          type: "fixed",
          elementToSearchContext: this.container,
          mainElement: this.container.firstElementChild
        }, this.state.expandContainerSize);
        t = E(E({}, t), {}, {
          position: "fixed",
          left: r.left,
          top: r.top
        });
      } else {
        var n = S.c.suggestExpandPositionLeftTop({
          type: "absolute",
          absoluteTo: this.container,
          mainElement: this.container.firstElementChild
        }, this.state.expandContainerSize);
        t = E(E({}, t), {}, {
          position: "absolute",
          left: n.left,
          top: n.top
        });
      }
      return t;
    }
    renderExpand(e, t) {
      var r;
      if (this.state.isExpanded) {
        var n = this.getFilteredData(e),
          i = n.indexOf(t) >= 0 ? t : n[0];
        return o().createElement("div", {
          ref: e => this.expandContainer = e,
          className: "show items tw:leading-[1.35] tw:[outline:none] tw:z-[9999]",
          style: this.getExpandStyle()
        }, this.renderItems(n, i));
      }
    }
    getSearchTextOnOpen() {
      if (!this.props.searchable) return "";
      var e = this.getSelectedData(this.getData(), this.props.value);
      return e && e.value || "";
    }
    isFocusInside() {
      var e = document.activeElement;
      return !!e && (this.container && this.container.contains(e) || this.expandContainer && this.expandContainer.contains(e));
    }
    render() {
      var e = this.getData(),
        t = this.getSelectedData(e, this.props.value);
      if (this.props.disabled) return this.renderInDisabled(t);
      var r = E(E({}, this.props.style), {}, {
          width: this.props.width || 200,
          cursor: C.A.isMobileOrTablet() ? "pointer" : void 0
        }),
        n = this.props.selectBoxStyle;
      return o().createElement("div", {
        className: u()(O, this.props.className, {
          searchable: this.props.searchable,
          compact: "compact" === this.props.variant
        }),
        ref: e => this.container = e,
        onKeyDown: this.onKeyDown,
        style: r,
        onBlur: this.onBlur,
        onFocus: this.handleFocus,
        title: this.props.title,
        role: this.props.searchable && this.state.isExpanded ? void 0 : "combobox",
        "aria-label": this.props.ariaLabel || this.props.title || "Select an option",
        "aria-expanded": this.state.isExpanded,
        "aria-haspopup": "listbox",
        "aria-controls": this.state.isExpanded ? this.listId : void 0,
        "aria-activedescendant": this.state.isExpanded ? this.activeId : void 0,
        tabIndex: this.props.searchable && this.state.isExpanded ? -1 : 0
      }, o().createElement("div", {
        style: n,
        "data-for": "select-box",
        className: u()(D, {
          "standout-on-hover": this.props.standoutOnHover
        }),
        onMouseDown: this.onSelectBoxMouseDown,
        onMouseOver: () => {
          this.setState({
            arrowClassName: "selected"
          });
        },
        onMouseLeave: () => {
          this.setState({
            arrowClassName: ""
          });
        }
      }, this.renderInput(t), this.props.hideCaret ? null : o().createElement("div", {
        className: u()(M, this.state.arrowClassName)
      }, o().createElement("i", {
        className: "fa fa-caret-down",
        "aria-hidden": "true"
      }))), this.renderExpand(e, t));
    }
  }
  (0, n.A)(I, "nextId", 0), (0, n.A)(I, "__testDisableCollapsedOnBlur", void 0), C.A.isCollaboratingTesting() && (window.SelectBox = I);
};
