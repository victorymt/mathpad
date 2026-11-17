/* module 53218 — 6505 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O: () => p
  });
  var n = r(64467),
    i = r(50510),
    o = r(40927),
    s = r.n(o),
    a = r(19798),
    l = r(28031);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    toBibliography(e, t, r) {
      var n = (t = t || {}).lineHeightEm || l.z.defulatLineHeight,
        o = t.pSpacing || l.z.defaultSpacing,
        a = t.padLeftEm || 0,
        c,
        d = o,
        h = o,
        p = ["csl-context"],
        u = this.detectListItemWrappedBrackets(e, {
          listItemWidthEm: void 0,
          linkStyle: void 0
        }),
        g = 1;
      return "dot" == u ? g = 1.4 : "brackets" == u && (g = 1.8), e.length >= 10 && (g += .4), s().createElement("div", {
        className: p.join(" ")
      }, e.map((t, o) => {
        var s = i.m.runSpacing(c, d, h, o < e.length - 1),
          l = s.resolvedSpacing;
        return c = d, d = s.nextSpacing, this.toReactInternal({
          obj: t,
          key: o,
          style: {
            marginTop: "".concat(l.beforeSpacingSet, "em"),
            marginBottom: "".concat(l.afterSpacingSet, "em"),
            lineHeight: n,
            paddingLeft: "".concat(a, "em")
          },
          lineOptions: {
            hasSpacing: i.m.anySpacingResolvedSet(l)
          },
          listItemWidthEm: g,
          idPrefix: r
        });
      }));
    }
    detectListItemWrappedBrackets(e, t) {
      if (e.length > 0 && "html" == e[0].node.type) {
        var r = e[0].node;
        if ("html" == r.children[0].type) {
          var n = r.children[0],
            i;
          if (this.tryParseListItemPattern(n, t)) {
            var o,
              s = this.findFirstTextNode(n).text.trim();
            return 2 == s.length ? "dot" : s.length > 2 ? "brackets" : void 0;
          }
        }
      }
    }
    findFirstTextNode(e) {
      if ("text" == e.type) return e;
      if ("linkable" != e.type) for (var t = 0; t < e.children.length; t++) {
        var r = e.children[t],
          n = this.findFirstTextNode(r);
        if (n) return n;
      }
    }
    toReactInternal(e) {
      var t;
      return s().createElement("div", {
        key: e.key,
        "data-id": this.getIdOfBib(e.obj, e.idPrefix),
        style: this.buildStyle(e.obj, e.style),
        "data-psc": null !== (t = e.lineOptions) && void 0 !== t && t.hasSpacing ? 1 : void 0
      }, this.renderNode(e.obj.node, d(d({}, e), {}, {
        linkStyle: this.resolveLinkStyle(e.obj)
      })));
    }
    resolveLinkStyle(e) {
      if ("cite" != e.meta.type) return e.meta.linkHighlight ? {
        textDecoration: "underline",
        color: "rgb(17, 85, 204)",
        wordBreak: "break-all"
      } : {
        textDecoration: "none",
        color: "inherit",
        wordBreak: "break-all"
      };
    }
    toReact(e, t, r, n) {
      return this.toReactInternal({
        obj: e,
        key: t,
        style: r,
        lineOptions: n,
        idPrefix: "ignore-"
      });
    }
    buildStyle(e, t) {
      var r = e.meta;
      return "cite" == (null == r ? void 0 : r.type) && "numeric" == r.citationFormat ? d(d({}, t), {}, {
        whiteSpace: "nowrap"
      }) : t;
    }
    getIdOfBib(e, t) {
      if (e.meta && "bibliography" == e.meta.type) return a.I.constructLinkId(e.meta.dbItemId, t);
    }
    renderNode(e, t) {
      switch (e.type) {
        case "text":
          return this.renderTextNode(e);
        case "html":
          return this.renderHtmlNode(e, void 0, t);
        case "linkable":
          return this.renderLinkableNode(e, t);
      }
    }
    renderLinkableNode(e, t) {
      return s().createElement("span", null, e.nodes.map((e, r) => "string" == typeof e ? s().createElement("span", {
        key: r
      }, e) : s().createElement("a", {
        style: t.linkStyle,
        key: r,
        href: e.href,
        target: "_blank"
      }, e.text)));
    }
    renderTextNode(e) {
      return s().createElement("span", null, e.text);
    }
    tryParseListItemPattern(e, t) {
      var r, n, i;
      if ("csl-entry" == (null === (r = e.attributes) || void 0 === r ? void 0 : r.className) && 2 == e.children.length) {
        var o = e.children[0],
          s = e.children[1];
        if ("text" != o.type && "text" != s.type && "linkable" != o.type && "linkable" != s.type && "csl-left-margin" == (null === (n = o.attributes) || void 0 === n ? void 0 : n.className) && "csl-right-inline" == (null === (i = s.attributes) || void 0 === i ? void 0 : i.className)) {
          var a = this.renderHtmlNode(o, {
              flexShrink: 0,
              textAlign: "left",
              width: null != t && t.listItemWidthEm ? "".concat(null == t ? void 0 : t.listItemWidthEm, "em") : void 0
            }, t),
            l = this.renderHtmlNode(s, {
              display: "inline-block",
              textAlign: "left",
              marginLeft: 0
            }, t);
          return this.makeHtmlNode(e.tag, e.attributes, [a, l], {
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline"
          });
        }
      }
    }
    makeHtmlNode(e, t, r, n) {
      return s().createElement(e, {
        style: d(d({}, null == t ? void 0 : t.styles), n),
        className: null == t ? void 0 : t.className,
        "data-cslId": null == t ? void 0 : t.cslId
      }, ...r);
    }
    renderHtmlNode(e, t, r) {
      var n = this.tryParseListItemPattern(e, r);
      return n || (e.children.length <= 0 ? s().createElement("span", null) : 1 == e.children.length && "text" == e.children[0].type ? this.makeHtmlNode(e.tag, e.attributes, [e.children[0].text], t) : this.makeHtmlNode(e.tag, e.attributes, e.children.map(e => this.renderNode(e, r)), t));
    }
  }
  var p = new h();
};
