/* module 98318 — 1981 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = this.props,
        t = e.item,
        r = e.showLatex,
        n = null,
        o = null;
      if (t.hasExpanded && (n = i().createElement("span", null, "Press ", i().createElement("b", {
        style: s
      }, "Shift"), " to expand boxes")), t.shortcut) {
        var c = t.hasExpanded ? "," : "";
        o = i().createElement("span", null, c, " Shortcut ", i().createElement("b", {
          style: a
        }, t.shortcut.char));
      }
      var d = t.description || "";
      return d && (n || o) && (d = ", " + d), r && (d = "Name: " + t.names[0] + ", " + d), i().createElement("description-container", {
        style: l
      }, i().createElement("description-text", null, n, o, i().createElement("span", null, d)));
    }
  }
  var s = {
      background: "var(--ui-surface, white)",
      fontWeight: "normal",
      display: "inline-block",
      color: "var(--ui-text-muted, gray)",
      border: "1px solid var(--ui-border, lightgray)",
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 3,
      boxShadow: "1px 1px 0px var(--ui-shadow, #e8e5e5)"
    },
    a = {
      background: "var(--ui-surface, white)",
      fontWeight: "normal",
      display: "inline-block",
      color: "var(--ui-text-muted, gray)",
      border: "1px solid var(--ui-border, lightgray)",
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 3,
      boxShadow: "1px 1px 0px var(--ui-shadow, #e8e5e5)"
    },
    l = {
      whiteSpace: "normal",
      fontFamily: "Asana",
      display: "block",
      background: "var(--ui-surface-muted, rgb(247, 247, 247))",
      padding: "3px",
      boxShadow: "var(--ui-shadow, rgb(224, 221, 221)) 1px 1px 1px 0px",
      border: "1px solid var(--ui-border, #dedcdc)",
      marginTop: "2px",
      color: "var(--ui-text-muted, gray)"
    };
};
