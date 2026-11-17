/* module 6779 — 4526 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s),
    l = r(26642),
    c = r(21774);
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
  class p extends l.A {
    constructor(e) {
      super(e), (0, n.A)(this, "closedOnEscape", !0), (0, n.A)(this, "partMap", void 0), this.partMap = null;
    }
    shouldComponentUpdate(e, t) {
      return super.shouldComponentUpdate(e, t) || e.part != this.props.part;
    }
    renderPair(e, t) {
      return this.partMap = this.partMap || {}, this.partMap[e.key] = e, this.partMap[t.key] = t, o().createElement("pair-option", null, o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(e.key),
        onMouseDown: this.onItemSelect.bind(this, e.key)
      }, e), o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(t.key),
        onMouseDown: this.onItemSelect.bind(this, t.key)
      }, t));
    }
    render2Pair(e, t, r, n) {
      return this.partMap = this.partMap || {}, this.partMap[e.key] = e, this.partMap[t.key] = t, this.partMap[r.key] = r, this.partMap[n.key] = n, o().createElement("pair-option", null, o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(e.key),
        onMouseDown: this.onItemSelect.bind(this, e.key)
      }, e), o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(t.key),
        onMouseDown: this.onItemSelect.bind(this, t.key)
      }, t), o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(r.key),
        onMouseDown: this.onItemSelect.bind(this, r.key)
      }, r), o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(n.key),
        onMouseDown: this.onItemSelect.bind(this, n.key)
      }, n));
    }
    getItemOptionClss(e) {
      return a()({
        selected: this.props.part == e
      });
    }
    renderOne(e, t) {
      return this.partMap = this.partMap || {}, this.partMap[e.key] = e, o().createElement("item-option", {
        style: this.getItemOptionStyle(),
        class: this.getItemOptionClss(e.key),
        onMouseDown: t ? c.A.noopFunc : this.onItemSelect.bind(this, e.key)
      }, e);
    }
    getOptionsStyle() {
      return h(h({}, this.getSuggestExpandStyle()), {}, {
        zIndex: 20
      });
    }
    renderSelected() {
      if ("no" == this.props.part) return o().createElement(u, null);
      var e = this.customRenderSelected(this.props.part);
      if (e) return e;
      var t = this.partMap[this.props.part];
      return o().cloneElement(t, {
        style: h(h({}, t.props.style), {}, {
          transform: "translateY(2px)"
        })
      });
    }
    customRenderSelected(e) {}
    getCustomClass() {
      return "";
    }
    renderExpandContainer() {
      var e = super.renderExpandContainer();
      return e || this.partMap || this.renderOptions(void 0), e;
    }
    renderExpandComponent() {
      return this.renderOptions(this.getOptionsStyle());
    }
    getComponentClassName() {
      return "arrow-part";
    }
    renderMore() {}
    renderComponent() {
      return o().createElement("item", {
        className: "setting",
        style: this.getItemStyle()
      }, this.renderSelected(), this.renderMore());
    }
  }
  var u = () => o().createElement("div", {
    style: {
      display: "block",
      position: "absolute",
      left: "4px",
      top: "7px",
      background: "var(--ui-surface-active, lightgray)",
      width: "10px",
      height: "10px"
    }
  });
};
