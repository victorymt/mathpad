/* module 92342 — 710 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    k: () => i
  });
  class n {
    render(e) {
      return e.map(e => this.renderNode(e.node, {})).join("\n");
    }
    renderNode(e, t) {
      switch (e.type) {
        case "text":
          return this.renderTextNode(e);
        case "html":
          return this.renderHtmlNode(e, t);
        case "linkable":
          return this.renderLinkableNode(e);
      }
    }
    renderLinkableNode(e) {
      return e.nodes.map(e => "string" == typeof e ? e : e.text).join("");
    }
    renderTextNode(e) {
      return e.text;
    }
    renderHtmlNode(e, t) {
      return e.children.map(e => this.renderNode(e, t)).join("");
    }
  }
  var i = new n();
};
