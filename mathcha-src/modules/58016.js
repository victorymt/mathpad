/* module 58016 — 52652 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CodeSection: () => pe,
    CodeSectionSc: () => ge,
    default: () => me
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(36223),
    c = r(91335),
    d = r(33476),
    h = r(98231),
    p = r(39314),
    u = r(32485),
    g = r.n(u),
    m = r(91636),
    f = r(2543),
    y = r.n(f),
    v = r(11742),
    b = r(5556),
    x = r.n(b),
    C = r(25644);
  class S {
    constructor() {
      (0, n.A)(this, "result", void 0), (0, n.A)(this, "loadingPromise", void 0);
    }
    load() {
      return this.result ? Promise.resolve(this.result) : (this.loadingPromise || (this.loadingPromise = Promise.resolve(Promise.all([r.e(435), r.e(241)]).then(r.bind(r, 24241))).then(e => {
        var t = e.allLanguages,
          r = e.highlightFunc,
          n = e.tokenizeFunc;
        return this.result = {
          allLanguages: t,
          highlight: r,
          tokenize: n
        }, this.result;
      }).finally(() => {
        this.loadingPromise = null;
      })), this.loadingPromise);
    }
  }
  const A = new S();
  var w = r(30803);
  class E {
    linesToCode(e) {
      return e.map(e => e.blocks.map(e => e.type ? " " : e.text).join("")).join("\n");
    }
    toLines(e, t) {
      var r,
        n = {
          lines: [{
            id: this.getLineId(0, t),
            blocks: []
          }],
          originLines: t
        };
      return this.handleTokenStream(e, n, []), n.lines;
    }
    handleTokenStream(e, t, r) {
      y().isArray(e) ? this.handleTokens(e, t, r) : "string" == typeof e ? this.handleTokenStr(e, t, r) : this.handleToken(e, t, r);
    }
    getLineId(e, t) {
      return e >= t.length ? w.w.nextId() : t[e].id;
    }
    handleTokens(e, t, r) {
      e.forEach(e => {
        "string" == typeof e ? this.handleTokenStr(e, t, r) : this.handleToken(e, t, r);
      });
    }
    handleToken(e, t, r) {
      var n = r.concat([e.type]);
      e.alias && (n = "string" == typeof e.alias ? n.concat([e.alias]) : n.concat(e.alias)), this.handleTokenStream(e.content, t, n);
    }
    handleTokenStr(e, t, r) {
      for (var n, i = 0, o; i < e.length; i++) {
        var s = e[i],
          a,
          l;
        if ("\n" != s) {
          if (n) n.text += s;else n = {
            id: "bid" + this.getCurLine(t).blocks.length,
            text: s,
            tokenClasses: r
          };
        } else n && (this.getCurLine(t).blocks.push(n), n = void 0), this.nextLine(t);
      }
      n && this.getCurLine(t).blocks.push(n);
    }
    getCurLine(e) {
      return e.lines[e.lines.length - 1];
    }
    nextLine(e) {
      var t = {
        id: this.getLineId(e.lines.length, e.originLines),
        blocks: []
      };
      e.lines.push(t);
    }
  }
  const k = new E();
  class O {
    convert(e) {
      var t;
      return {
        comment: this.convertComments(e.mullineComments, e.singlelineComments),
        bold1: this.convertComments(e.boldMulline, e.boldSingleline),
        italic1: this.convertComments(e.italicMulline, e.italicSingleline),
        important1: this.convertComments(e.importantMulline, e.importantSingleline),
        string: this.convertString(e.string),
        keyword: this.convertKeywords(e.keywords && e.keywords.source, e.keywords && e.keywords.caseInsensitive),
        bold: this.convertKeywords(e.bold && e.bold.source, e.bold && e.bold.caseInsensitive),
        italic: this.convertKeywords(e.italic && e.italic.source, e.italic && e.italic.caseInsensitive),
        important: this.convertKeywords(e.important && e.important.source, e.important && e.important.caseInsensitive),
        number: this.convertNumbers(e.numbers),
        operator: this.convertOperators(e.operators),
        punctuation: this.convertPunctuations(e.punctuations)
      };
    }
    convertString(e) {
      if (!this.isEmptyString(e)) return {
        pattern: new RegExp("([".concat(this.splitJoinBy(e, ""), "])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1")),
        greedy: !0
      };
    }
    convertComments(e, t) {
      return this.isEmptyString(e) && this.isEmptyString(t) ? [] : this.convertMullineComments(e).concat(this.convertSinglelineComments(t));
    }
    convertMullineComments(e) {
      if (this.isEmptyString(e)) return [];
      var t = (e || "").split(/\s+/g).filter(e => e);
      return y().chunk(t, 2).filter(e => 2 == e.length).map(e => {
        var t = this.escapeRegExp(e[0]),
          r = this.escapeRegExp(e[1]);
        return {
          pattern: new RegExp("(^|[^\\\\])".concat(t, "[\\s\\S]*?(?:").concat(r, "|$)")),
          lookbehind: !0
        };
      });
    }
    convertSinglelineComments(e) {
      return this.isEmptyString(e) ? [] : [{
        pattern: new RegExp("(^|[^\\\\:])(".concat(this.splitJoinBy(e), ").*")),
        lookbehind: !0,
        greedy: !0
      }];
    }
    convertOperators(e) {
      if (!this.isEmptyString(e)) return new RegExp(this.splitJoinBy(e));
    }
    convertPunctuations(e) {
      if (!this.isEmptyString(e)) return new RegExp(this.splitJoinBy(e));
    }
    convertKeywords(e, t) {
      if (!this.isEmptyString(e)) return new RegExp("\\b(?:" + this.splitJoinBy(e) + ")\\b", t ? "i" : "");
    }
    convertNumbers(e) {
      if (e && !e.disabled) {
        var t = this.getBaseNumbers(e);
        return e.prefix || e.suffix ? new RegExp("\\b".concat(this.wrapInParenthesis(this.splitJoinBy(e.prefix), "?")).concat(t.source).concat(this.wrapInParenthesis(this.splitJoinBy(e.suffix), "?"), "\\b")) : new RegExp("\\b".concat(t.source, "\\b"));
      }
    }
    wrapInParenthesis(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return this.isEmptyString(e) ? "" : "(".concat(e, ")").concat(t);
    }
    splitJoinBy(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "|";
      return (e || "").split(/\s+/g).filter(e => e).map(e => this.escapeRegExp(e)).join(t);
    }
    getBaseNumbers(e) {
      return "comma" == e.separator ? /-?\d+\,?\d+/i : "dot" == e.separator ? /-?\d+\.?\d*/i : "both" == e.separator ? /-?\d+[\d|\,]*\.?\d*/i : /-?\d+/i;
    }
    escapeRegExp(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    isEmptyString(e) {
      return !e || !e.trim();
    }
  }
  const D = new O();
  class P extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        languageResult: void 0,
        selectedLang: void 0
      }), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "error", !1), (0, n.A)(this, "handleCustomLangeDataChange", () => {
        this.forceUpdate();
      }), (0, n.A)(this, "handleRef", e => {
        e && (this.editor = e, e.reactInstance = this);
      });
    }
    componentDidMount() {
      this.changeLanguage(this.props.language, !0), this.props.codeSectionConnector && (this.props.codeSectionConnector.onLangeDataChange = this.handleCustomLangeDataChange);
    }
    componentWillUnmount() {
      this.props.codeSectionConnector && this.props.codeSectionConnector.onLangeDataChange == this.handleCustomLangeDataChange && (this.props.codeSectionConnector.onLangeDataChange = void 0);
    }
    getFontSizeRatio() {
      return 1;
    }
    refreshLanguageIfChanged() {
      "string" != typeof this.props.language && this.forceUpdate();
    }
    componentWillReceiveProps(e) {
      e.language != this.props.language && e.language != this.state.selectedLang && this.changeLanguage(e.language, !1);
    }
    changeLanguage(e, t) {
      this.props.onLoading(), Promise.all([(0, m.cb)(t ? 300 : 200), A.load()]).then(t => {
        this.setState({
          languageResult: t[1],
          selectedLang: e
        }), this.props.onFinished(!1);
      }).catch(() => {
        this.props.onFinished(!0);
      });
    }
    shouldComponentUpdate(e, t) {
      return e.data != this.props.data || e.className != this.props.className || e.fontSize != this.props.fontSize || e.lineNumber != this.props.lineNumber || t.selectedLang != this.state.selectedLang;
    }
    getData() {
      return this.props.data;
    }
    getModel() {
      return this.props.data;
    }
    showCursor() {}
    select(e, t) {
      var r = {
        cursorContext: {
          direction: e.direction,
          maxRelativeXAxisPosition: e.maxRelativeXAxisPosition,
          htmlEditor: this.editor,
          htmLine: e.line,
          requestGeoPos: e.requestGeoPos,
          prevPos: void 0
        },
        isExtendingSelection: !!t
      };
      this.props.onSelectedChanged({
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      }, r);
    }
    selectCursorFromPosition(e, t, r) {
      var n = C.A.buildCursorPosition(this.editor, e, t);
      if (!n) return null;
      this.select(n, r);
    }
    renderBlocks(e) {
      return e.map(e => {
        var t = e;
        if (e.type && (e.type = void 0, e.text = " ", e.elements = void 0), t.tokenClasses) {
          var r = t.tokenClasses.join(" ") + " token";
          return o().createElement("block", {
            className: r,
            key: e.id
          }, e.text);
        }
        return o().createElement("block", {
          className: "token",
          key: e.id
        }, e.text);
      });
    }
    calculatePrefixClassName(e) {
      return e < 10 ? "prefix-l10" : e < 100 ? "prefix-l100" : "prefix-larg";
    }
    renderPrefix(e, t) {
      return this.props.lineNumber ? o().createElement("prefix", {
        className: g()("code-line-number", this.calculatePrefixClassName(t))
      }, e + 1) : o().createElement("prefix", null);
    }
    renderLines(e) {
      var t = e.length;
      return e.map((e, r) => o().createElement("line", {
        key: e.id,
        className: "text-mode code-section-line"
      }, this.renderPrefix(r, t), o().createElement("blocks", {
        className: "code-line-blocks-container"
      }, o().createElement("baselineblock", null), this.renderEmptyLineBlock(e.blocks), this.renderBlocks(e.blocks))));
    }
    renderEmptyLineBlock(e) {
      return 0 == e.length ? o().createElement("emptyblock", {
        "aria-label": "empty line"
      }, " ") : null;
    }
    getKeyName() {
      return this.props.keyName;
    }
    fetchLangData() {
      if (this.props.codeSectionConnector) return this.props.codeSectionConnector.requestLanguageData();
      var e = this.state.selectedLang,
        t;
      if (!e) return y().values(this.state.languageResult.allLanguages)[0];
      if ("object" == typeof e) {
        var r = this.tryToFecthLangDataFromSettings(e.id);
        return r || D.convert(e);
      }
      return this.state.languageResult.allLanguages[e];
    }
    tryToFecthLangDataFromSettings(e) {
      if (this.props.customLanguageProvider) {
        var t = this.props.customLanguageProvider.get();
        if (t) {
          var r = t.items.find(t => t.id == e);
          if (r) return this.props.codeSectionBlock.language = r, D.convert(r);
        }
      }
    }
    renderLinesContainer() {
      if (this.state.languageResult && this.state.selectedLang) try {
        var e = this.fetchLangData(),
          t = k.linesToCode(this.props.data.lines),
          r = this.state.languageResult.tokenize(t, e),
          n = k.toLines(r, this.props.data.lines);
        return this.renderLines(n);
      } catch (e) {
        console.error(e);
      }
      return this.renderLines(this.props.data.lines);
    }
    render() {
      if (this.error) return console.error(this.error), o().createElement("editarea", null, "This document has been corrupted, please report to team@mathcha.io for recovery, sorry for this issue");
      v.A.makeSureLines(this.props.data);
      var e = g()("text-mode", "code-section-edit-area", this.props.className, {
        "read-only": this.props.readOnly
      });
      return o().createElement("editarea", {
        style: {
          fontFamily: '"Fira code", "Fira Mono", monospace'
        },
        ref: this.handleRef,
        className: e
      }, this.renderLinesContainer());
    }
  }
  (0, n.A)(P, "contextTypes", {
    fixedContextHandler: x().any
  });
  const M = P;
  var I = r(23466),
    T = r(6283),
    L = r(58907),
    R = r(47286),
    B = r(24829);
  class F extends o().Component {
    render() {
      return o().createElement("div", {
        style: {
          paddingTop: 5
        }
      }, y().sortBy(this.props.items, e => e.name).map(e => o().createElement("div", {
        key: e.id,
        onClick: () => this.props.onSelectedIdChange(e.id),
        className: g()("lang-name", {
          selected: this.props.selectedId == e.id
        }),
        style: {
          padding: 5
        }
      }, e.name)));
    }
  }
  var j = r(61848),
    _ = r(55451),
    N = JSON.parse('{"id":"n0.7607648826176092","lines":[{"id":"n0.978629696154965","blocks":[{"id":"n0.1602953397407294","text":"\\\\code-section","type":"composite","elements":{"rawCode":{"id":"n0.4924830472872326","lines":[{"id":"n0.8660684277651958","blocks":[{"id":"n0.3881739747791382","text":"function(arg1, arg2){"}]},{"id":"n0.6192079709305476","blocks":[{"id":"n0.5521967892572701","text":" bold italic important;"}]},{"id":"n0.10345662474811079","blocks":[{"id":"n0.4558201147683556","text":""}]},{"id":"n0.29068133239881533","blocks":[{"id":"n0.15495064324204066","text":"  const str = \\"this is string\\";"}]},{"id":"n0.6204254318199165","blocks":[{"id":"n0.6277651466605103","text":"  if (2+3=5) {"}]},{"id":"n0.5577869766945691","blocks":[{"id":"n0.7028770801331641","text":"  a=1.354;"}]},{"id":"n0.5047897976421167","blocks":[{"id":"n0.5095084536462464","text":"  b= 1,345.42"}]},{"id":"n0.795154665061105","blocks":[{"id":"n0.9259451203597384","text":" } else {"}]},{"id":"n0.6442021738903394","blocks":[{"id":"n0.5839865041795431","text":"   //This is comments  "}]},{"id":"n0.3226556051301579","blocks":[{"id":"n0.3424230295655075","text":"   /* Multiline comments"}]},{"id":"n0.8191320693625155","blocks":[{"id":"n0.8509092777073379","text":"   and we have comments here */"}]},{"id":"n0.0344206097804336","blocks":[{"id":"n0.31695383797603816","text":" }"}]},{"id":"n0.5209631741148124","blocks":[{"text":"}","id":"n0.6490944345314371"}]},{"id":"n0.4026982282319531","blocks":[]},{"id":"n0.4421805111253012","blocks":[]},{"id":"n0.796876355425959","blocks":[]}]}}}],"___prefixText":""}]}'),
    z = function e() {
      var t;
      return {
        type: "simple",
        id: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sl".concat(Math.random()),
        name: "Simple Language " + Math.floor(1e3 * Math.random()),
        keywords: {
          source: "if or else which case function const"
        },
        operators: "+ =",
        punctuations: "( ) { } ;",
        mullineComments: "/* */",
        singlelineComments: "//",
        string: "\" '",
        numbers: {},
        bold: {
          source: "bold"
        },
        italic: {
          source: "italic"
        },
        important: {
          source: "important"
        }
      };
    };
  function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function W(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class V extends o().Component {
    render() {
      return o().createElement("div", {
        style: W(W({}, this.props.containerStyle), {}, {
          display: "flex",
          flexDirection: "column"
        })
      }, o().createElement("div", {
        className: "test-item-label",
        style: {
          padding: 5,
          background: "var(--ui-surface-hover, #eae8e8)",
          border: "1px solid var(--ui-border, lightgray)",
          borderBottom: "none"
        }
      }, this.props.label), this.props.children);
    }
  }
  class U extends o().Component {
    renderLabel() {
      return this.props.showCaseInsensitive ? o().createElement("div", null, o().createElement("span", null, this.props.label), this.renderCaseInsensitiveIcon()) : this.props.label;
    }
    renderCaseInsensitiveIcon() {
      return o().createElement("span", {
        onClick: () => this.props.onValueChange(this.props.value || "", !this.props.caseInsensitive),
        style: {
          fontFamily: '"Fira code", "Fira Mono", monospace',
          padding: 5,
          margin: -5,
          float: "right",
          cursor: "pointer",
          position: "relative"
        }
      }, o().createElement("span", {
        title: "Disable/Enable Case Insensitive",
        style: {
          color: this.props.caseInsensitive ? "#008000" : "var(--ui-text-disabled, #c1c0c0)",
          fontWeight: this.props.caseInsensitive ? "bold" : void 0
        }
      }, "i"));
    }
    render() {
      var e = this.props,
        t = e.value,
        r = e.onValueChange,
        n = e.containerStyle,
        i = e.placeHolder;
      return o().createElement(V, {
        label: this.renderLabel(),
        containerStyle: n
      }, o().createElement("textarea", {
        placeholder: i,
        value: t || "",
        onChange: e => {
          r(e.currentTarget.value, !!this.props.caseInsensitive);
        },
        style: {
          flex: 1,
          resize: "none",
          padding: 5,
          minHeight: 10
        }
      }));
    }
  }
  function q(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class K extends o().Component {
    render() {
      var e = this.props,
        t = e.numbers,
        r = e.onNumbersChange;
      return o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(V, {
        label: o().createElement(I.A, {
          name: "Numbers",
          checked: !(!t || t.disabled),
          onValueChanged: e => {
            r(G(G({}, t), {}, {
              disabled: !e
            }));
          }
        })
      }, o().createElement("div", {
        style: {
          border: "1px solid var(--ui-border, lightgray)"
        }
      }, o().createElement("input", {
        value: t && t.prefix || "",
        onChange: e => {
          r(G(G({}, t), {}, {
            prefix: e.currentTarget.value
          }));
        },
        placeholder: "Allow Prefix",
        style: {
          width: 144,
          marginLeft: -1,
          marginTop: -1,
          height: "1.8em"
        }
      }), o().createElement("input", {
        value: t && t.suffix || "",
        onChange: e => {
          r(G(G({}, t), {}, {
            suffix: e.currentTarget.value
          }));
        },
        placeholder: "Allow Suffix",
        style: {
          width: 144,
          marginLeft: -1,
          marginTop: -1,
          marginBottom: -1,
          height: "1.8em"
        }
      }))), o().createElement(V, {
        label: "Decimal Separator",
        containerStyle: {
          marginTop: -1
        }
      }, o().createElement(c.A, {
        style: {
          marginTop: -1
        },
        selectBoxStyle: {
          height: "1.8em",
          lineHeight: "1.6em"
        },
        inputStyle: {
          lineHeight: "1.8em"
        },
        width: 150,
        data: [{
          key: "none",
          value: "None"
        }, {
          key: "comma",
          value: "Comma"
        }, {
          key: "dot",
          value: "Dot"
        }, {
          key: "both",
          value: "Comma, Dot"
        }],
        value: t && t.separator || "none",
        onChange: e => {
          r(G(G({}, t), {}, {
            separator: e
          }));
        }
      })));
    }
  }
  function Z(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Z(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class Q extends o().Component {
    render() {
      var e = this.props.selectedItem;
      return o().createElement("div", {
        style: {
          flex: 1,
          background: "var(--ui-surface-muted, #f7f7f7)",
          display: "flex",
          flexWrap: "wrap",
          overflow: "auto"
        }
      }, o().createElement(U, {
        showCaseInsensitive: !0,
        caseInsensitive: e && e.keywords && e.keywords.caseInsensitive,
        containerStyle: {
          width: 150,
          height: 139,
          margin: 10
        },
        label: "Keywords",
        value: e && e.keywords && e.keywords.source,
        onValueChange: (e, t) => {
          this.changeSelectedItemWith(r => Y(Y({}, r), {}, {
            keywords: Y(Y({}, r.keywords), {}, {
              source: e,
              caseInsensitive: t
            })
          }));
        }
      }), o().createElement(K, {
        numbers: e && e.numbers,
        onNumbersChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            numbers: e
          }));
        }
      }), o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(U, {
        containerStyle: {
          height: 70
        },
        label: "Operators",
        value: e && e.operators,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            operators: e
          }));
        }
      }), o().createElement(U, {
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Punctuations",
        value: e && e.punctuations,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            punctuations: e
          }));
        }
      })), o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(U, {
        placeHolder: "Start End",
        containerStyle: {
          height: 70
        },
        label: "Comments: Multiline",
        value: e && e.mullineComments,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            mullineComments: e
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Comments: Single Line",
        value: e && e.singlelineComments,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            singlelineComments: e
          }));
        }
      })), o().createElement(U, {
        placeHolder: "Characters",
        containerStyle: {
          width: 150,
          height: 70,
          margin: 10
        },
        label: "String",
        value: e && e.string,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            string: e
          }));
        }
      }), o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(U, {
        containerStyle: {
          height: 70
        },
        showCaseInsensitive: !0,
        caseInsensitive: e && e.bold && e.bold.caseInsensitive,
        label: "Bold Keywords",
        value: e && e.bold && e.bold.source,
        onValueChange: (e, t) => {
          this.changeSelectedItemWith(r => Y(Y({}, r), {}, {
            bold: Y(Y({}, r.bold), {}, {
              source: e,
              caseInsensitive: t
            })
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start End",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Bold Multiline",
        value: e && e.boldMulline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            boldMulline: e
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Bold Single Line",
        value: e && e.boldSingleline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            boldSingleline: e
          }));
        }
      })), o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(U, {
        containerStyle: {
          height: 70
        },
        showCaseInsensitive: !0,
        caseInsensitive: e && e.italic && e.italic.caseInsensitive,
        label: "Italic Keywords",
        value: e && e.italic && e.italic.source,
        onValueChange: (e, t) => {
          this.changeSelectedItemWith(r => Y(Y({}, r), {}, {
            italic: Y(Y({}, r.italic), {}, {
              source: e,
              caseInsensitive: t
            })
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start End",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Italic Multiline",
        value: e && e.italicMulline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            italicMulline: e
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Italic Single Line",
        value: e && e.italicSingleline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            italicSingleline: e
          }));
        }
      })), o().createElement("div", {
        style: {
          width: 150,
          display: "flex",
          flexDirection: "column",
          margin: 10
        }
      }, o().createElement(U, {
        containerStyle: {
          height: 70
        },
        showCaseInsensitive: !0,
        caseInsensitive: e && e.important && e.important.caseInsensitive,
        label: "Important Keywords",
        value: e && e.important && e.important.source,
        onValueChange: (e, t) => {
          this.changeSelectedItemWith(r => Y(Y({}, r), {}, {
            important: Y(Y({}, r.important), {}, {
              source: e,
              caseInsensitive: t
            })
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start End",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Important Multiline",
        value: e && e.importantMulline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            importantMulline: e
          }));
        }
      }), o().createElement(U, {
        placeHolder: "Start",
        containerStyle: {
          marginTop: -1,
          height: 70
        },
        label: "Important Single Line",
        value: e && e.importantSingleline,
        onValueChange: e => {
          this.changeSelectedItemWith(t => Y(Y({}, t), {}, {
            importantSingleline: e
          }));
        }
      })));
    }
    changeSelectedItemWith(e) {
      var t = this.props.selectedItem;
      if (t) {
        var r = e(t);
        r && this.props.onSelectedItemChange(r);
      }
    }
  }
  function J(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function X(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? J(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class $ extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        items: this.props.customLanguageSettings.items,
        selectedId: (y().sortBy(this.props.customLanguageSettings.items, e => e.name)[0] || {
          id: void 0
        }).id,
        model: (this.props.customLanguageSettings.lines || []).length > 0 ? {
          id: "root-id-test",
          lines: this.props.customLanguageSettings.lines
        } : N
      }), (0, n.A)(this, "customLangConnector", void 0), (0, n.A)(this, "mathTypeCompRef", void 0), (0, n.A)(this, "delayRunObj", _.A.createLaterRunObject("latest", 200)), (0, n.A)(this, "handleSelectedItemChanged", e => {
        var t = j.A.replaceArrayByEntity(this.state.items, e);
        this.setState({
          items: t
        }), this.delayRunObj.later(this.refreshLangDataForConnector);
      }), (0, n.A)(this, "changeSelectedId", e => {
        this.setState({
          selectedId: e
        }), this.delayRunObj.later(this.refreshLangDataForConnector);
      }), (0, n.A)(this, "refreshLangDataForConnector", () => {
        this.customLangConnector.onLangeDataChange && this.customLangConnector.onLangeDataChange();
      }), (0, n.A)(this, "handleRequestLanguageData", () => {
        var e = this.getSelectedItem();
        return e ? D.convert(e) : {};
      }), (0, n.A)(this, "handleAddItem", () => {
        var e = z();
        this.setState({
          items: this.state.items.concat([e]),
          selectedId: e.id
        }), this.delayRunObj.later(this.refreshLangDataForConnector);
      }), (0, n.A)(this, "handleDeleteItem", () => {
        this.setState({
          items: this.state.items.filter(e => e.id != this.state.selectedId)
        }), this.delayRunObj.later(this.refreshLangDataForConnector);
      }), this.customLangConnector = {
        requestLanguageData: this.handleRequestLanguageData
      };
    }
    getSelectedItem() {
      return this.state.items.find(e => e.id == this.state.selectedId);
    }
    changeSelectedItemWith(e) {
      var t = this.getSelectedItem();
      if (t) {
        var r = e(t);
        r && this.handleSelectedItemChanged(r);
      }
    }
    isDirty() {
      return this.state.items != this.props.customLanguageSettings.items;
    }
    getData() {
      return {
        items: this.state.items,
        lines: this.mathTypeCompRef.getModel().lines
      };
    }
    render() {
      var e = {
          width: 13,
          height: 13,
          overflow: "visible",
          fill: "var(--ui-text-muted, gray)",
          display: "inline-block",
          padding: 5,
          verticalAlign: "-5px",
          marginLeft: 5,
          marginRight: 10
        },
        t = this.getSelectedItem(),
        r = this.props.MathTypeClss;
      return o().createElement("div", {
        className: "custom-lange-area",
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }
      }, o().createElement("div", {
        style: {
          minHeight: 300,
          display: "flex",
          flexDirection: "row",
          border: "1px solid var(--ui-border, lightgray)",
          flexBasis: "50%"
        }
      }, o().createElement("div", {
        style: {
          minWidth: 200,
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        style: {
          borderBottom: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface-muted, #f7f7f7)",
          height: 28,
          paddingTop: 4
        }
      }, o().createElement("span", {
        className: "test-add-item",
        style: {
          cursor: "pointer"
        },
        onClick: this.handleAddItem
      }, B.A.newFile(e)), o().createElement("span", {
        className: "test-delete-item",
        onClick: this.handleDeleteItem
      }, o().createElement("i", {
        className: "fa fa-trash",
        "aria-hidden": "true",
        style: {
          fontSize: "1.3em",
          color: "var(--ui-danger, #ce0303)",
          padding: 5,
          cursor: "pointer"
        }
      }))), o().createElement("div", {
        style: {
          flex: 1,
          overflow: "auto"
        }
      }, o().createElement(F, {
        selectedId: this.state.selectedId,
        onSelectedIdChange: this.changeSelectedId,
        items: this.state.items,
        onChange: () => {}
      }))), o().createElement("div", {
        style: {
          borderLeft: "1px solid var(--ui-border, lightgray)",
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }
      }, o().createElement("div", {
        style: {
          borderBottom: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface-muted, #f7f7f7)",
          display: "flex",
          padding: 5,
          alignItems: "baseline",
          visibility: t ? "visible" : "hidden"
        }
      }, o().createElement("span", {
        style: {
          paddingRight: 5
        }
      }, "Name: "), o().createElement("input", {
        className: "test-name-input",
        style: {
          flex: 1
        },
        value: t && t.name || "",
        onChange: e => {
          this.changeSelectedItemWith(t => X(X({}, t), {}, {
            name: e.currentTarget.value
          }));
        }
      })), t && o().createElement(Q, {
        selectedItem: t,
        onSelectedItemChange: this.handleSelectedItemChanged
      }))), o().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          flexBasis: "50%"
        }
      }, o().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          overflow: "auto",
          marginTop: 10
        }
      }, o().createElement(r, {
        ref: e => this.mathTypeCompRef = e,
        model: this.state.model,
        oneMode: "code-section",
        codeSectionOneModeItem: this.customLangConnector,
        style: {
          flex: 1,
          padding: 0
        },
        rootEditorStyle: {
          minHeight: 0
        }
      }))));
    }
  }
  var ee = r(82477);
  function te(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function re(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? te(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var ne = L.A.getModalDialog(),
    ie = L.A.getModalDialog();
  class oe extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "customLangAreaRef", void 0), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleClose", () => {
        this.customLangAreaRef && this.customLangAreaRef.isDirty() ? this.setState({
          showCloseConfirm: !0
        }) : this.props.onClose();
      }), (0, n.A)(this, "handleOk", () => {
        this.setState({
          isSaving: !0
        });
        var e = this.customLangAreaRef.getData();
        this.props.customLanguageProvider.set(e).then(() => {
          this.props.onOk(), this.props.onClose();
        }).catch(() => {
          this.setState({
            saveError: "Could not save, please check Internet Connection, or Login to save",
            isSaving: !1
          });
        });
      });
    }
    renderConfirmClose() {
      if (this.state.showCloseConfirm) return o().createElement(ie, {
        show: !0
      }, o().createElement(ee.A, {
        title: "Discard language changes",
        okLabel: "Discard",
        okVariant: "danger",
        style: {
          top: 190
        },
        label: o().createElement("span", null, "There are unsaved changes. Are you sure to close?"),
        onOk: () => this.props.onClose(),
        onClose: () => this.setState({
          showCloseConfirm: !1
        }),
        show: !0
      }));
    }
    render() {
      return o().createElement(ne, {
        show: !0
      }, o().createElement(R.A, {
        title: "Code languages",
        size: "medium",
        scroll: "body",
        style: re({
          height: "calc(100% - 100px)",
          maxHeight: 700,
          width: "calc(100% - 100px)",
          maxWidth: 900
        }, L.A.getCenterStyle()),
        disableEscapeToClose: !0,
        message: this.state.saveError,
        isProgressing: this.state.isSaving,
        isOkDisabled: this.state.isSaving,
        onOk: this.handleOk,
        onCancel: this.handleClose,
        okLabel: "Save",
        cancelLabel: "Cancel",
        show: !0,
        footerStyle: {
          flexShrink: 0
        }
      }, o().createElement($, {
        ref: e => this.customLangAreaRef = e,
        customLanguageSettings: this.props.customLanguageProvider.get() || {
          items: [],
          lines: void 0
        },
        MathTypeClss: this.props.MathTypeClss
      }), this.renderConfirmClose()));
    }
  }
  var se = r(40383);
  function ae(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ae(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var ce = "rgb(238, 238, 237)",
    de = {
      preventScroll: !0,
      isOneLineChanged: !0,
      focusAcquired: !0
    },
    he = [{
      key: -1,
      value: "Default"
    }].concat(T.w);
  class pe extends s.A {
    constructor(e) {
      super(e), (0, n.A)(this, "containerClassName", "code-section-symbol"), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleLanguageLoading", () => {
        this.state.isLanguageLoading || this.setState({
          isLanguageLoading: !0,
          loadError: !1
        });
      }), (0, n.A)(this, "handleLanguageLoadFinished", e => {
        this.state.loadError == e && 0 == this.state.isLanguageLoading || this.setState({
          isLanguageLoading: !1,
          loadError: e
        });
      }), (0, n.A)(this, "handleLanguageChange", e => {
        if (e.startsWith("custom-")) this.handleCustomLanguageChange(e);else {
          var t = le(le({}, this.props.data), {}, {
            language: e
          });
          this.props.onDataChanged(t, de);
        }
      }), (0, n.A)(this, "handleBgColorChange", e => {
        var t = le(le({}, this.props.data), {}, {
          codeBlockStyle: le(le({}, this.props.data), {}, {
            bgColor: e
          })
        });
        this.props.onDataChanged(t, de);
      }), (0, n.A)(this, "handleThemeChange", e => {
        var t = le(le({}, this.props.data), {}, {
          theme: e,
          codeBlockStyle: le(le({}, this.props.data.codeBlockStyle), {}, {
            bgColor: this.getDefaultBgColorOnThem(e)
          })
        });
        this.props.onDataChanged(t, de);
      }), (0, n.A)(this, "handleLineNumberCheckChange", e => {
        var t = le(le({}, this.props.data), {}, {
          lineNumber: e
        });
        this.props.onDataChanged(t, de);
      }), (0, n.A)(this, "hanelFontSizeChange", e => {
        var t = le(le({}, this.props.data), {}, {
          fontSize: e
        });
        this.props.onDataChanged(t, de);
      });
    }
    getCompositeBlockStyle() {
      return le(le({}, super.getCompositeBlockStyle()), {}, {
        display: "block"
      });
    }
    refreshLanguage() {
      this.refMap.rawCode && this.refMap.rawCode.refreshLanguageIfChanged(), console.log("refresh language");
    }
    getDataFontSize() {
      var e = this.props.data.fontSize || -1;
      return -1 == e ? this.context.fixedContextHandler.getCodeSectionFontSize() : e;
    }
    renderNotificationArea() {
      var e = {
        position: "absolute",
        border: "1px solid lightgray",
        background: "#ffffff80",
        padding: "3px 20px",
        left: "50%",
        transform: "translate(-50%, 0)",
        bottom: -6,
        fontSize: 12
      };
      return this.state.loadError ? o().createElement("div", {
        style: le(le({}, e), {}, {
          color: "#ce0303"
        })
      }, "There was an error while loading Language information") : this.state.isLanguageLoading ? o().createElement("div", {
        style: le(le({}, e), {}, {
          color: "gray"
        })
      }, "Language Processing...") : void 0;
    }
    renderLanguageDefineDialog() {
      if (this.state.showLanguageDefineDialog) return o().createElement(oe, {
        onOk: () => this.getMtFuncs().refreshCodeSectionLanguages(),
        customLanguageProvider: this.getMtFuncs().getCustomLanguageProvider(),
        MathTypeClss: this.context.fixedContextHandler.getMtFuncs().getMathTypeClss(),
        onClose: () => this.setState({
          showLanguageDefineDialog: !1
        })
      });
    }
    renderComponent() {
      var e = this.props.data.theme || "default";
      return o().createElement("div", {
        className: g()("code-section", "theme-".concat(e)),
        onDragStart: e => e.stopPropagation(),
        onDragEnd: e => e.stopPropagation(),
        onDrag: e => e.stopPropagation(),
        onDragEnter: e => e.stopPropagation(),
        onDrop: e => e.stopPropagation(),
        style: {
          display: "block",
          border: "1px solid lightgray",
          background: p.A.getHtmlColor(this.getCodeBlockBg()),
          padding: 10,
          fontSize: this.getDataFontSize()
        }
      }, o().createElement(M, le(le({}, this.buildMetaDataFromName("rawCode")), {}, {
        codeSectionBlock: this.props.data,
        customLanguageProvider: this.getMtFuncs().getCustomLanguageProvider(),
        onLoading: this.handleLanguageLoading,
        onFinished: this.handleLanguageLoadFinished,
        language: this.props.data.language || "javascript",
        lineNumber: !!this.props.data.lineNumber,
        codeSectionConnector: this.getMtFuncs().getCodeSectionEventConnector()
      })), this.renderSettings(), this.renderNotificationArea(), this.renderLanguageDefineDialog());
    }
    handleCustomLanguageChange(e) {
      var t = e.replace("custom-", ""),
        r = this.getMtFuncs().getCustomLanguageProvider().get().items || [],
        n = le(le({}, this.props.data), {}, {
          language: r.find(e => e.id == t)
        });
      this.props.onDataChanged(n, de);
    }
    getCodeBlockBg() {
      var e = this.props.data;
      return e.codeBlockStyle && e.codeBlockStyle.bgColor || ce;
    }
    getDefaultBgColorOnThem(e) {
      switch (e) {
        case "default":
          return ce;
        case "tomorrow-night":
          return "#2d2d2d";
      }
    }
    renderDefineLangButton() {
      if (this.customLanguageEnabled()) return o().createElement("button", {
        onClick: () => this.setState({
          showLanguageDefineDialog: !0
        }),
        style: {
          width: 142,
          display: "inline-block",
          marginLeft: 10
        },
        className: "btn-normal"
      }, "Custom Languages");
    }
    customLanguageEnabled() {
      return !!this.getMtFuncs().getCustomLanguageProvider();
    }
    buildLangSelectItems() {
      var e = this.props.data.language,
        t = [{
          key: "javascript",
          value: "Javascript"
        }, {
          key: "python",
          value: "Python"
        }, {
          key: "c",
          value: "C"
        }, {
          key: "markup",
          value: "Html/XML/SVG"
        }, {
          key: "css",
          value: "CSS"
        }, {
          key: "bash",
          value: "Bash"
        }, {
          key: "csharp",
          value: "CSharp"
        }, {
          key: "cpp",
          value: "C++"
        }, {
          key: "java",
          value: "Java"
        }, {
          key: "json",
          value: "Json"
        }, {
          key: "latex",
          value: "Latex"
        }, {
          key: "matlab",
          value: "Matlab"
        }, {
          key: "markdown",
          value: "Markdown"
        }, {
          key: "typescript",
          value: "Typescript"
        }, {
          key: "go",
          value: "Go"
        }, {
          key: "rust",
          value: "Rust"
        }, {
          key: "r",
          value: "R"
        }],
        r;
      this.customLanguageEnabled() && (t = (this.getMtFuncs().getCustomLanguageProvider().get().items || []).map(e => ({
        key: this.buildCustomKey(e.id),
        value: e.name
      })).concat(t));
      return e && "object" == typeof e && !t.some(t => t.key == this.buildCustomKey(e.id)) && (t = [{
        key: this.buildCustomKey(e.id),
        value: "Unknown (embedded)"
      }].concat(t)), t;
    }
    buildCustomKey(e) {
      return "custom-".concat(e);
    }
    getLanguageKey() {
      return this.props.data.language ? "object" == typeof this.props.data.language ? this.buildCustomKey(this.props.data.language.id) : this.props.data.language : "javascript";
    }
    renderSettings() {
      if (!this.getMtFuncs().getCodeSectionEventConnector() && this.isSelected()) {
        var e = this.getLanguageKey(),
          t = this.getCodeBlockBg(),
          r = this.props.data.theme || "default",
          n = !!this.props.data.lineNumber,
          i = this.props.data.fontSize || -1,
          s = [{
            key: "default",
            value: "Default"
          }, {
            key: "tomorrow-night",
            value: "Night"
          }],
          a = this.getDzContainer();
        return o().createElement(d.A, {
          appliedDzContainer: a,
          reversedScaleDZOrigin: "right bottom",
          key: "settings",
          closeOnClickOutside: !0,
          style: {
            left: -23
          }
        }, o().createElement("setting", {
          className: "mt-common-dialog no-print",
          style: se.a.applyReverseZoomStyle({
            top: -65,
            left: 0,
            position: "absolute",
            fontSize: 12,
            paddingLeft: 10,
            paddingRight: 10,
            color: "gray"
          }, a, "left bottom"),
          onMouseDown: l.A.focusAndCursorSelectAcquired,
          onDoubleClick: l.A.onDoubleClickStopPropagation
        }, o().createElement("div", {
          style: {
            marginBottom: 3
          }
        }, o().createElement("span", {
          style: {
            display: "inline-block",
            width: 70
          }
        }, "Language: "), o().createElement(c.A, {
          width: 110,
          expansionWidth: 150,
          style: {
            display: "inline-block"
          },
          itemsStyle: {
            maxHeight: 300,
            overflow: "auto"
          },
          inputStyle: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "inline-block",
            verticalAlign: -4
          },
          data: this.buildLangSelectItems(),
          value: e,
          onChange: this.handleLanguageChange
        }), o().createElement("span", {
          style: {
            paddingRight: 3,
            paddingLeft: 10
          }
        }, "Line Number: "), o().createElement(I.A, {
          style: {
            display: "inline-block",
            marginLeft: 5
          },
          name: "",
          checked: n,
          onValueChanged: this.handleLineNumberCheckChange
        }), this.renderDefineLangButton()), o().createElement("div", null, o().createElement("span", {
          style: {
            display: "inline-block",
            width: 70
          }
        }, "Theme: "), o().createElement(c.A, {
          width: 110,
          style: {
            display: "inline-block"
          },
          data: s,
          value: r,
          onChange: this.handleThemeChange
        }), o().createElement("span", {
          style: {
            paddingRight: 3,
            paddingLeft: 10
          }
        }, "Background: "), o().createElement(h.A, {
          requestPickerSettings: this.context.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
          stopPropagation: !0,
          style: {
            display: "inline-block",
            verticalAlign: "bottom",
            marginLeft: 5
          },
          value: t,
          onItemSelect: this.handleBgColorChange
        }), o().createElement("span", {
          style: {
            paddingRight: 3,
            paddingLeft: 10
          }
        }, "Font Size: "), o().createElement(c.A, {
          data: he,
          isReadOnly: !0,
          onChange: this.hanelFontSizeChange,
          value: i,
          itemsStyle: ue,
          width: 80,
          style: {
            display: "inline-block"
          }
        }))));
      }
    }
  }
  var ue = {
    height: 200,
    overflow: "auto",
    fontSize: 12
  };
  class ge extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return pe;
    }
    getLatextName() {
      return "\\code-section";
    }
    getSymbol() {
      return "Code Section";
    }
    getModel() {
      return this.getModelFromStructure({
        rawCode: "editor"
      }, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        insertInTextModeOnly: !0,
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex(e) {
      return "";
    }
  }
  const me = new ge();
};
