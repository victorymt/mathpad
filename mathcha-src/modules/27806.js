/* module 27806 — 8335 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    G: () => p
  });
  var n = r(64467),
    i = r(59310),
    o = r(40927),
    s = r.n(o),
    a = r(37566),
    l = r(47401);
  class c extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleMouseOver", () => {
        this.setState({
          over: !0
        });
      }), (0, n.A)(this, "handleMouseOut", () => {
        this.setState({
          over: !1
        });
      });
    }
    render() {
      var e = this.props,
        t = e.item,
        r = e.selected,
        n = e.input,
        i = this.state.over,
        o = {
          paddingLeft: 6,
          paddingRight: 6,
          paddingTop: 3,
          paddingBottom: 3,
          backgroundColor: r ? "#bfe4bd" : i ? "rgb(228, 227, 227)" : void 0
        },
        a = s().createElement(l.$, {
          query: n,
          text: t.name
        });
      return s().createElement("div", {
        className: r ? "sdi selected-key" : "sdi",
        key: t.key,
        style: o,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onMouseDown: this.props.onSelect
      }, this.props.onRenderItem ? this.props.onRenderItem(t, a) : a);
    }
  }
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends s().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "scrollContainer", void 0), (0, n.A)(this, "state", {
        allItems: {
          loading: !0,
          items: [],
          show: !1
        }
      }), (0, n.A)(this, "scrollToSelected", () => {
        if (this.scrollContainer) {
          var e = a.YG(this.scrollContainer, ".selected-key"),
            t = e[0].getBoundingClientRect(),
            r = this.scrollContainer.getBoundingClientRect();
          t.top + 3 < r.top ? e[0].scrollIntoView(!0) : t.bottom - 3 > r.bottom && e[0].scrollIntoView(!1);
        }
      }), (0, n.A)(this, "handleInputKeyDown", e => {
        var t = this.state.allItems.selectedKey,
          r = this.getFilteredItems(),
          n = null != t ? r.findIndex(e => e.key == t) : -1;
        switch (e.keyCode) {
          case 38:
            if (e.preventDefault(), this.showIfNot()) return;
            if (!i.Q.idxFound(n) && r.length > 0) return void this.setSelectedKeyState(r[0].key).then(this.scrollToSelected);
            n > 0 && this.setSelectedKeyState(r[n - 1].key).then(this.scrollToSelected);
            break;
          case 40:
            if (e.preventDefault(), this.showIfNot()) return;
            if (!i.Q.idxFound(n) && r.length > 0) return void this.setSelectedKeyState(r[0].key).then(this.scrollToSelected);
            n < r.length - 1 && this.setSelectedKeyState(r[n + 1].key).then(this.scrollToSelected);
            break;
          case 13:
            if (e.preventDefault(), this.setState({
              allItems: h(h({}, this.state.allItems), {}, {
                selectedKey: void 0,
                show: !1
              })
            }), !i.Q.idxFound(n)) {
              var o = this.state.allItems.items.find(e => e.name == this.props.input);
              return void (o && this.props.onChange(o.name, o.key));
            }
            this.props.onChange(r[n].name, r[n].key);
            break;
          case 27:
            e.preventDefault(), e.stopPropagation(), this.showDropdown(!1);
        }
      }), (0, n.A)(this, "handleInputChange", e => {
        !this.showIfNot() && this.state.allItems.selectedKey && this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            selectedKey: void 0
          })
        }), this.scrollContainer && 0 != this.scrollContainer.scrollTop && (this.scrollContainer.scrollTop = 0), this.props.onChange(e.currentTarget.value);
      }), (0, n.A)(this, "handleInputFocus", () => {
        this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            show: !0
          })
        });
      }), (0, n.A)(this, "handleInputBlur", () => {
        this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            show: !1
          })
        });
      }), (0, n.A)(this, "handleScrollContainerRef", e => {
        this.scrollContainer = e;
      });
    }
    componentDidMount() {
      this.props.requestAllItems().then(e => {
        this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            items: e,
            loading: !1,
            error: !1
          })
        });
      }).catch(() => {
        this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            loading: !1,
            error: !0
          })
        });
      });
    }
    renderInput() {
      var e = this.props,
        t = e.input,
        r = e.inputStyle;
      return s().createElement("input", {
        value: t || "",
        style: r,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown
      });
    }
    setSelectedKeyState(e) {
      return new Promise(t => {
        this.setState({
          allItems: h(h({}, this.state.allItems), {}, {
            selectedKey: e
          })
        }, t);
      });
    }
    showIfNot() {
      return !this.state.allItems.show && (this.showDropdown(!0), !0);
    }
    showDropdown(e) {
      this.setState({
        allItems: h(h({}, this.state.allItems), {}, {
          show: e,
          selectedKey: void 0
        })
      });
    }
    getFilteredItems() {
      var e = this.state.allItems,
        t = this.props.input,
        r = void 0 === t ? "" : t,
        n = r.toLowerCase();
      return r ? e.items.filter(e => e.name.toLowerCase().includes(n)) : e.items;
    }
    renderDropdownItems() {
      var e = this.state.allItems;
      if (e.loading) return s().createElement("div", null, "Loading..");
      if (e.error) return s().createElement("div", null, "Error on Loading Items");
      var t = this.props.input,
        r = void 0 === t ? "" : t,
        n = this.state.allItems.selectedKey;
      return s().createElement("div", null, this.getFilteredItems().map(e => s().createElement(c, {
        key: e.key,
        input: r,
        item: e,
        selected: n == e.key,
        onSelect: () => {
          this.setState({
            allItems: h(h({}, this.state.allItems), {}, {
              selectedKey: void 0,
              show: !1
            })
          }), this.props.onChange(e.name, e.key);
        },
        onRenderItem: this.props.onRenderItem
      })));
    }
    renderDropdownContainer() {
      var e;
      if (this.state.allItems.show) return s().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          height: 0
        }
      }, s().createElement("div", {
        ref: this.handleScrollContainerRef,
        style: h({
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          maxHeight: 100,
          backgroundColor: "var(--ui-surface, white)",
          border: "1px solid var(--ui-border, lightgray)",
          overflowY: "auto",
          boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)"
        }, this.props.dropdownContainerStyle)
      }, this.renderDropdownItems()));
    }
    render() {
      return s().createElement("div", {
        style: {
          position: "relative",
          display: "inline-block",
          zIndex: 1
        }
      }, this.renderInput(), this.renderDropdownContainer());
    }
  }
};
