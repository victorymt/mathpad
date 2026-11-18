/* module 90864 — 10546 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => A,
    B: () => w
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(51164),
    a = r(94114),
    l = r(19340),
    c = r(71311);
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
  class p {
    getEditorStyle(e, t, r, n, i, o) {
      var s = this.rawGetEditorStyle(e, t, r, n, i, o);
      return h(h({}, s), {}, {
        marginLeft: s.marginLeft ? "".concat(s.marginLeft, "em") : void 0,
        marginRight: s.marginRight ? "".concat(s.marginRight, "em") : void 0
      });
    }
    fromToLeft(e, t, r, n) {
      switch (e) {
        case "from":
          return {
            marginBottom: t,
            marginLeft: n
          };
        case "to":
          return {
            marginTop: r,
            marginLeft: n
          };
      }
    }
    rawGetEditorStyle(e, t, r, n, i, o) {
      switch (o) {
        case "Asana":
          return this.rawGetEditorStyleAsana(e, t, r, n, i);
        case "LatinModern":
        case "ThickerLm":
          return this.rawGetEditorStyleLatin(e, t, r, n, i);
        case "Sans":
          return this.rawGetEditorStyleSans(e, t, r, n, i);
      }
      return this.rawGetEditorStyleAsana(e, t, r, n, i);
    }
    rawGetEditorStyleAsana(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              return this.fromToLeft(e, -.2, .07, void 0);
            case "display":
              return this.fromToLeft(e, -.45, .1, void 0);
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (r) {
                case "\\prod":
                case "\\coprod":
                  return this.fromToLeft(e, -.6, -.45, 1.1);
                case "\\bigcup":
                case "\\bigcap":
                  return this.fromToLeft(e, -.6, -.45, 1);
              }
              return this.fromToLeft(e, -.6, -.45, .9);
            case "display":
              switch (r) {
                case "\\prod":
                case "\\coprod":
                  return this.styleForDisplayNonLimit(e, 1.5, -1.2, -.55);
                case "\\bigcup":
                case "\\bigcap":
                  return this.styleForDisplayNonLimit(e, 1.4, -1.2, -.55);
              }
              return this.styleForDisplayNonLimit(e, 1.3, -1.2, -.55);
          }
      }
    }
    rawGetEditorStyleSans(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              switch (r) {
                case "\\bigvee":
                case "\\bigwedge":
                case "\\bigcup":
                case "\\bigcap":
                  return this.fromToLeft(e, -.2, -.2, void 0);
              }
              return this.fromToLeft(e, -.2, .07, void 0);
            case "display":
              return this.fromToLeft(e, -.45, -.1, void 0);
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (r) {
                case "\\bigvee":
                case "\\bigwedge":
                  return this.fromToLeft(e, -.6, -.55, 1);
                case "\\prod":
                case "\\coprod":
                  return this.fromToLeft(e, -.6, -.45, .9);
                case "\\bigcup":
                case "\\bigcap":
                  return this.fromToLeft(e, -.6, -.45, 1);
              }
              return this.fromToLeft(e, -.6, -.45, .8);
            case "display":
              switch (r) {
                case "\\bigvee":
                case "\\bigwedge":
                  return this.styleForDisplayNonLimit(e, 1.3, -1.2, -.65);
                case "\\prod":
                case "\\coprod":
                  return this.styleForDisplayNonLimit(e, 1.2, -1.2, -.65);
                case "\\bigcup":
                case "\\bigcap":
                  return this.styleForDisplayNonLimit(e, 1.4, -1.2, -.55);
              }
              return this.styleForDisplayNonLimit(e, 1.15, -1.2, -.65);
          }
      }
    }
    rawGetEditorStyleLatin(e, t, r, n, i) {
      switch (n) {
        case "limit":
          switch (i) {
            case "inline":
              return this.fromToLeft(e, -.2, .1, void 0);
            case "display":
              return this.fromToLeft(e, -.4, .16, void 0);
          }
        case "non-limit":
          switch (i) {
            case "inline":
              switch (r) {
                case "\\sum":
                  return this.fromToLeft(e, -.6, -.4, 1.1);
                case "\\prod":
                case "\\coprod":
                  return this.fromToLeft(e, -.6, -.4, 1);
              }
              return this.fromToLeft(e, -.6, -.4, .9);
            case "display":
              switch (r) {
                case "\\sum":
                  return this.styleForDisplayNonLimit(e, 1.6, -1.2, -.55);
                case "\\prod":
                case "\\coprod":
                  return this.styleForDisplayNonLimit(e, 1.5, -1.2, -.55);
              }
              return this.styleForDisplayNonLimit(e, 1.35, -1.2, -.55);
          }
      }
    }
    styleForDisplayNonLimit(e, t, r, n) {
      return "from" == e ? {
        marginLeft: t,
        marginBottom: r
      } : {
        marginLeft: t,
        marginTop: n
      };
    }
  }
  const u = new p();
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f {
    getEditorStyle(e, t, r, n, i, o) {
      var s = (0, l.zN)(o),
        a = (0, c.ok)(s, e, r, n, i);
      return a ? m(m({}, a), {}, {
        marginLeft: a.marginLeft ? "".concat(a.marginLeft, "em") : void 0,
        marginRight: a.marginRight ? "".concat(a.marginRight, "em") : void 0
      }) : u.getEditorStyle(e, t, r, n, i, s.legacyPositionFamily);
    }
  }
  const y = new f();
  var v = r(40961),
    b = r.n(v),
    x = r(37566);
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A extends s.s {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "summation-like-symbol limit-type");
    }
    shoudUseEditAreaBlock() {
      return !1;
    }
    getSymbol() {
      return "∑";
    }
    getSymbolClassName() {
      return "";
    }
    getEditorFromToMarginLeft() {
      return "lef-1-margin";
    }
    getPowerIndexInfo() {
      var e = b().findDOMNode(this),
        t = x.jS(e, "symbol")[0] || e,
        r = this.getElementRect(t),
        n = r.bottom - r.top,
        i = .26 * n,
        o,
        s;
      return {
        shouldConsiderAsChar: !1,
        rect: {
          top: r.top + i,
          height: n - .95 * i
        }
      };
    }
    getSettingTopEm() {
      return this.isEditorEmpty(this.props.data.elements.from) ? -2.8 : -1.9;
    }
    isLimitKind() {
      return null != this.props.data.isLimitKind ? !!this.props.data.isLimitKind : !this.isInlineMode();
    }
    getSumBaseEditorStyle(e) {
      var t = this.shoudUseEditAreaBlock(),
        r = this.isInlineMode(),
        n = this.isLimitKind();
      return y.getEditorStyle(e, t ? "editor-block" : "editor", this.props.data.text, n ? "limit" : "non-limit", r ? "inline" : "display", this.context.baseMathModeFontFamily);
    }
    getFromStyle() {
      var e = this.getSumBaseEditorStyle("from"),
        t = this.isInlineMode(),
        r = this.isLimitKind();
      return S(S({}, e), {}, {
        marginBottom: this.getRoundEmStr(e.marginBottom),
        minHeight: r || t ? "" : this.getRoundEmStr(1.1)
      });
    }
    getToStyle() {
      var e = this.getSumBaseEditorStyle("to"),
        t = this.isInlineMode(),
        r = this.isLimitKind();
      return S(S({}, e), {}, {
        marginTop: this.getRoundEmStr(e.marginTop),
        minHeight: r || t ? "" : this.getRoundEmStr(.9)
      });
    }
  }
  class w extends s.O {
    getFilterTag() {
      return null;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        filterTag: this.getFilterTag(),
        height: 35,
        hasExpanded: !0,
        renderSymbol() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return o().createElement(a.A, {
            symbol: this.symbol,
            isExpanded: e
          });
        }
      });
    }
  }
};
