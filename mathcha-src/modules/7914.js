/* module 7914 — 711 chars */
module.exports = function (e, t, r) {
  r(52293);
  for (var n = r(66670), i = r(2677), o = r(20210), s = r(30254)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < a.length; l++) {
    var c = a[l],
      d = n[c],
      h = d && d.prototype;
    h && !h[s] && i(h, s, c), o[c] = o.Array;
  }
};
