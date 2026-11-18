/* module 90192 — 2085 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(45228),
    o = r(5936),
    s = r(31371),
    a = r(83997),
    l = r(36953),
    c = r(90646),
    d = r(43225),
    h = function (e) {
      this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null;
    };
  i(h.prototype, {
    mountComponent: function (e, t, r, n) {
      var i,
        o = r._idCounter++,
        c = " react-text: " + o + " ",
        d = " /react-text ";
      if (this._domID = o, this._hostParent = t, e.useCreateElement) {
        var h = r._ownerDocument,
          p = h.createComment(c),
          u = h.createComment(d),
          g = s(h.createDocumentFragment());
        return s.queueChild(g, s(p)), this._stringText && s.queueChild(g, s(h.createTextNode(this._stringText))), s.queueChild(g, s(u)), a.precacheNode(this, p), this._closingComment = u, g;
      }
      var m = l(this._stringText);
      return e.renderToStaticMarkup ? m : "\x3c!--" + c + "--\x3e" + m + "\x3c!--" + d + "--\x3e";
    },
    receiveComponent: function (e, t) {
      if (e !== this._currentElement) {
        this._currentElement = e;
        var r = "" + e;
        if (r !== this._stringText) {
          this._stringText = r;
          var n = this.getHostNode();
          o.replaceDelimitedText(n[0], n[1], r);
        }
      }
    },
    getHostNode: function () {
      var e = this._commentNodes;
      if (e) return e;
      if (!this._closingComment) for (var t, r = a.getNodeFromInstance(this).nextSibling;;) {
        if (null == r && n("67", this._domID), 8 === r.nodeType && " /react-text " === r.nodeValue) {
          this._closingComment = r;
          break;
        }
        r = r.nextSibling;
      }
      return e = [this._hostNode, this._closingComment], this._commentNodes = e, e;
    },
    unmountComponent: function () {
      this._closingComment = null, this._commentNodes = null, a.uncacheNode(this);
    }
  }), e.exports = h;
};
