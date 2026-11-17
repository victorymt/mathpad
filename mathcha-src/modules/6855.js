/* module 6855 — 5713 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(13067),
    o = r(4993),
    s = r(40927),
    a = r.n(s),
    l = r(61848),
    c = r(2543),
    d = r.n(c),
    h = r(57858),
    p = r(49414);
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
  var m = {
    "(": "open-parenthesis",
    ")": "close-parenthesis",
    "{": "open-brace",
    "}": "close-brace",
    "[": "open-bracket",
    "]": "close-bracket",
    "|": "open-vert"
  };
  class f extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "onLayoutChange", e => {
        this.props.onDataChanged(l.A.set(this.props.data, "text", e));
      }), (0, n.A)(this, "handleBorderSeparationChange", e => {
        var t = g(g({}, this.props.data), {}, {
          borderSeparation: e
        });
        this.props.onDataChanged(t, p.A.getBuilder().withFocusAcquired().build());
      }), (0, n.A)(this, "onBracketChange", e => {
        var t = e;
        if (t) {
          t = t[0];
          var r = this.findPair(t);
          t = r ? r[0] : "(";
        } else t = "";
        this.props.onDataChanged(l.A.set(this.props.data, "bracket", t));
      });
    }
    renderBeforeTable() {
      return this.renderOpenBracket();
    }
    renderAfterTable() {
      return this.renderCloseBracket();
    }
    findPair(e) {
      return d().find(f.bracketPairs, t => t.indexOf(e) >= 0);
    }
    renderOpenBracket() {
      if (!this.props.data.bracket) return null;
      var e = this.findPair(this.props.data.bracket),
        t = m[e[0]];
      return "|" == this.props.data.bracket && (t = "open-vert"), "‖" == this.props.data.bracket && (t = "open-Vert"), this.renderBracket(t, 1);
    }
    renderBracket(e, t) {
      return a().createElement(h.A, {
        stretchToParent: !0,
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        zIndex: t,
        updateOnlyOnNotifyDataChanged: !0,
        notifyData: this.props.data,
        delimiter: e,
        fontSize: this.getMathFontSizePixel()
      });
    }
    renderCloseBracket() {
      if (!this.props.data.bracket) return null;
      var e = this.findPair(this.props.data.bracket),
        t = m[e[1]];
      return "|" == this.props.data.bracket && (t = "close-vert"), "‖" == this.props.data.bracket && (t = "close-Vert"), this.renderBracket(t);
    }
    renderSetting() {
      var e = this.props.data;
      if (this.isChildSelected() && !this.isTabularDescendantSelected() && !this.state.showBorderDesign) {
        if (this.isSelectModeOnly()) return;
        return a().createElement(o.A, {
          getDzContainer: this.getDzContainer,
          disableLayoutType: !!this.disableLayoutType,
          onLayoutChange: this.onLayoutChange,
          onRowChange: this.onRowChange,
          onColumnChange: this.onColumnChange,
          text: e.text,
          row: this.state.row,
          column: this.state.column,
          bracket: e.bracket,
          onBracketChange: this.onBracketChange,
          onShowBorderDesignChange: e => this.setState({
            showBorderDesign: e
          }),
          enableBorderSeparation: !0,
          borderSeparation: e.borderSeparation,
          onBorderSeparationChange: this.handleBorderSeparationChange
        });
      }
    }
    getColumnStyle(e, t) {
      var r = this.props.data,
        n = r.borderSeparation,
        i = r.column,
        o = r.row;
      if (n) {
        var s = Math.max(1, Math.round(this.getMathFontSizePixel() / 17)),
          a;
        return n["second-right"] && t == i - 1 && (a = g(g({}, a), {}, {
          borderLeftWidth: s,
          borderLeftStyle: "solid",
          borderLeftColor: "unset"
        })), n.ladder && e == t && (a = g(g({}, a), {}, {
          borderTopWidth: s,
          borderTopStyle: "solid",
          borderTopColor: "unset",
          borderRightWidth: s,
          borderRightStyle: "solid",
          borderRightColor: "unset"
        })), n["second-left"] && 0 == t && (a = g(g({}, a), {}, {
          borderRightWidth: s,
          borderRightStyle: "solid",
          borderRightColor: "unset"
        })), n["vertical-middle"] && t == Math.floor(i / 2) && (a = g(g({}, a), {}, {
          borderLeftWidth: s,
          borderLeftStyle: "solid",
          borderLeftColor: "unset"
        }), i % 2 == 1 && (a = g(g({}, a), {}, {
          borderRightWidth: s,
          borderRightStyle: "solid",
          borderRightColor: "unset"
        }))), n["horizontal-middle"] && e == Math.floor(o / 2) && (a = g(g({}, a), {}, {
          borderTopWidth: s,
          borderTopStyle: "solid",
          borderTopColor: "unset"
        }), o % 2 == 1 && (a = g(g({}, a), {}, {
          borderBottomWidth: s,
          borderBottomStyle: "solid",
          borderBottomColor: "unset"
        }))), a;
      }
    }
  }
  (0, n.A)(f, "bracketPairs", ["()", "{}", "<>", "[]", "| |", "‖ ‖"]);
};
