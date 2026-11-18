/* module 87010 — 2718 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(84258),
    o = r(40927),
    s = r.n(o),
    a = r(6810),
    l = r(55451),
    c = r(34354);
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
      super(...arguments), (0, n.A)(this, "inputRef", void 0), (0, n.A)(this, "state", {
        input: "",
        selectedItem: this.props.data[0] || null,
        filteredData: this.props.data
      }), (0, n.A)(this, "handleInputChange", e => {
        this.changeSearchText(e.currentTarget.value);
      }), (0, n.A)(this, "getInputRef", e => {
        this.inputRef = e, this.inputRef && l.A.next(() => {
          this.inputRef && this.inputRef.focus();
        });
      }), (0, n.A)(this, "handleRenderFilter", () => this.renderInput());
    }
    componentWillReceiveProps(e) {
      e.data != this.props.data && this.setState({
        input: "",
        selectedItem: this.props.data[0] || null,
        filteredData: e.data
      });
    }
    changeSearchText(e) {
      var t = this.props.data;
      e && (t = this.props.symbolFilter.filter(t, e)), this.setState({
        input: e,
        filteredData: t
      });
    }
    renderInput() {
      var e = {
          width: "calc(100% - 0px)",
          height: "22px",
          marginBottom: "10px"
        },
        t = {
          width: "calc(100% - 5px)",
          height: "17px",
          marginBottom: "10px"
        },
        r = i.A.isMobileOrTablet() ? e : t;
      return a.A.wrapInput(s().createElement("input", {
        "aria-label": "Search symbols",
        value: this.state.input,
        autoCorrect: "off",
        autoCapitalize: "off",
        ref: this.getInputRef,
        onChange: this.handleInputChange
      }), r);
    }
    render() {
      return s().createElement(c.A, h(h({}, this.props), {}, {
        data: this.state.filteredData,
        renderFilter: this.handleRenderFilter
      }));
    }
  }
};
