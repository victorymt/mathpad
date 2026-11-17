/* module 13138 — 1293 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = r(90646),
    o = n.canUseDOM ? document.createElement("div") : null,
    s = {},
    a = [1, '<select multiple="true">', "</select>"],
    l = [1, "<table>", "</table>"],
    c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    d = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
    h = {
      "*": [1, "?<div>", "</div>"],
      area: [1, "<map>", "</map>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      param: [1, "<object>", "</object>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      optgroup: a,
      option: a,
      caption: l,
      colgroup: l,
      tbody: l,
      tfoot: l,
      thead: l,
      td: c,
      th: c
    },
    p;
  function u(e) {
    return o || i(!1), h.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || (o.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">", s[e] = !o.firstChild), s[e] ? h[e] : null;
  }
  ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function (e) {
    h[e] = d, s[e] = !0;
  }), e.exports = u;
};
