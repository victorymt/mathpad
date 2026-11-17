/* module 36606 — 8371 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => m
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(24373),
    c = r(55451),
    d = r(32485),
    h = r.n(d),
    p = r(37566);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "lastSelectedInfo", null), (0, n.A)(this, "currentMaxColumn", -1), (0, n.A)(this, "handleItemMouseEnter", (e, t) => {
        this.props.preventHover || this.props.onSelect({
          item: e,
          group: t
        });
      }), (0, n.A)(this, "handleItemMouseLeave", (e, t) => {}), (0, n.A)(this, "handleKeyDown", e => {
        var t = this.props,
          r = t.onKeyDown,
          n = t.onCommit,
          i = t.selected,
          o = {
            handled: !1
          };
        if (r && r(e, o), !o.handled) return 13 == e.keyCode ? (n && i && i.item && n(i), e.preventDefault(), void e.stopPropagation()) : 38 == e.keyCode ? (this.goUp(), e.preventDefault(), void e.stopPropagation()) : 40 == e.keyCode ? (this.goDown(), e.preventDefault(), void e.stopPropagation()) : 37 == e.keyCode ? (this.goLeft(), e.preventDefault(), void e.stopPropagation()) : 39 == e.keyCode ? (this.goRight(), e.preventDefault(), void e.stopPropagation()) : void 0;
      });
    }
    goLeft() {
      var e = this.props,
        t = e.selected,
        r = e.groups,
        n = e.onSelect,
        i = e.numberOfItemsPerLine,
        o = t || this.lastSelectedInfo;
      if (o) {
        var s = r.findIndex(e => e == o.group),
          a = r[s].items.findIndex(e => e == o.item);
        if (!(s <= 0 && a <= 0)) {
          if (a <= 0) {
            var l = r[s - 1];
            return this.currentMaxColumn = (l.items.length - 1) % i, void n({
              group: l,
              item: l.items[l.items.length - 1]
            });
          }
          var c = r[s];
          this.currentMaxColumn = (a - 1) % i, n({
            group: c,
            item: c.items[a - 1]
          });
        }
      }
    }
    goRight() {
      var e = this.props,
        t = e.selected,
        r = e.groups,
        n = e.onSelect,
        i = e.numberOfItemsPerLine,
        o = t || this.lastSelectedInfo;
      if (o) {
        var s = r.findIndex(e => e == o.group),
          a = r[s].items.findIndex(e => e == o.item),
          l = r[s];
        if (!(s >= r.length - 1 && a >= l.items.length - 1)) {
          if (a >= l.items.length - 1) {
            var c = r[s + 1];
            return this.currentMaxColumn = 0, void n({
              group: c,
              item: c.items[0]
            });
          }
          this.currentMaxColumn = (a + 1) % i, n({
            group: l,
            item: l.items[a + 1]
          });
        }
      }
    }
    goUp() {
      var e = this.props,
        t = e.selected,
        r = e.groups,
        n = e.onSelect,
        i = e.numberOfItemsPerLine,
        o = t || this.lastSelectedInfo;
      if (o) {
        var s = r.findIndex(e => e == o.group),
          a = r[s].items.findIndex(e => e == o.item),
          l = Math.floor(a / i),
          c = Math.max(l * i + this.currentMaxColumn, a);
        if (l <= 0) {
          var d = r[s - 1];
          if (!d) return;
          var h = Math.ceil(d.items.length / i),
            p = Math.min(c % i + (h - 1) * i, d.items.length - 1);
          n({
            group: d,
            item: d.items[p]
          });
        } else {
          var u = r[s],
            g = Math.max(c - i, 0);
          n({
            group: u,
            item: u.items[g]
          });
        }
      }
    }
    goDown() {
      var e = this.props,
        t = e.selected,
        r = e.groups,
        n = e.onSelect,
        i = e.numberOfItemsPerLine,
        o = t || this.lastSelectedInfo;
      if (o) {
        var s = r.findIndex(e => e == o.group),
          a = r[s].items.findIndex(e => e == o.item),
          l = Math.ceil(r[s].items.length / i),
          c = Math.floor(a / i),
          d = Math.max(c * i + this.currentMaxColumn, a);
        if (c >= l - 1) {
          var h = r[s + 1];
          if (!h) return;
          var p = Math.min(d % i, h.items.length - 1);
          n({
            group: h,
            item: h.items[p]
          });
        } else {
          var u = r[s],
            g = Math.min(d + i, u.items.length - 1);
          n({
            group: u,
            item: u.items[g]
          });
        }
      }
    }
    componentDidMount() {
      c.A.next(() => {
        this.focus();
      }, 50);
      var e = a().findDOMNode(this);
      l.A.registerEventToFixScroll(p.Yt(e)[0]), this.props.scrollToSelectedOnOpen && this.scrollToSelected();
    }
    componentWillUnmount() {
      var e = a().findDOMNode(this);
      p.Rq(e), l.A.unregisterEventToFixScroll(p.Yt(e)[0]);
    }
    focus() {
      var e;
      a().findDOMNode(this).focus();
    }
    componentDidUpdate(e) {
      if (e.selected && (this.lastSelectedInfo = e.selected), this.props.selected != e.selected) {
        if (!this.props.selected) return;
        this.scrollToSelected();
      }
    }
    scrollToSelected() {
      if (this.props.selected && this.props.selected.item) {
        var e = a().findDOMNode(this),
          t = p.Yt(e),
          r = p.YG(e, ".role-item-selected"),
          n = t[0].getBoundingClientRect(),
          i = r[0].getBoundingClientRect(),
          o;
        if (i.top <= n.top) p.C6(t), p.i0(t, {
          scrollTop: (null === (o = t[0]) || void 0 === o ? void 0 : o.scrollTop) - (n.top - i.top) - 40
        });else if (i.bottom >= n.bottom) {
          var s;
          p.C6(t), p.i0(t, {
            scrollTop: (null === (s = t[0]) || void 0 === s ? void 0 : s.scrollTop) + (i.bottom - n.bottom) + 40
          });
        }
      }
    }
    render() {
      var e = this.props,
        t = e.groups,
        r = e.renderGroupName,
        n = e.renderItem,
        i = e.itemContainerStyle,
        s = e.itemContainerStyleSelected,
        a = e.selected,
        l = e.lastSelected;
      return o().createElement("div", {
        className: "role-grid-item-select",
        tabIndex: -1,
        onKeyDown: this.handleKeyDown,
        style: g({
          display: "flex",
          flexDirection: "column",
          paddingBottom: 5,
          outline: "none",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%"
        }, this.props.mainStyle)
      }, t.map(e => o().createElement("div", {
        key: e.name,
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, r(e), o().createElement("div", {
        style: g({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: 5,
          paddingRight: 5
        }, this.props.itemsContainerStyle)
      }, e.items.map((t, r) => {
        var c = i,
          d = a && a.group == e && a.item == t,
          p = l && l.group == e && l.item == t;
        return d && (c = s || f), p && (c = s || f), o().createElement("div", {
          key: r,
          style: c,
          className: h()("role-item", {
            "role-item-selected": d
          }),
          onMouseDown: () => this.props.onCommit && this.props.onCommit({
            group: e,
            item: t
          }),
          onMouseEnter: () => this.handleItemMouseEnter(t, e),
          onMouseLeave: () => this.handleItemMouseLeave(t, e)
        }, n(t, e, d));
      })))));
    }
  }
  var f = {
    background: "var(--ui-selection, #bfe4bd)"
  };
};
