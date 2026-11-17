/* module 40748 — 910 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(31371),
    o = r(83997),
    s = function (e) {
      this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0;
    };
  n(s.prototype, {
    mountComponent: function (e, t, r, n) {
      var s = r._idCounter++;
      this._domID = s, this._hostParent = t, this._hostContainerInfo = r;
      var a = " react-empty: " + this._domID + " ";
      if (e.useCreateElement) {
        var l,
          c = r._ownerDocument.createComment(a);
        return o.precacheNode(this, c), i(c);
      }
      return e.renderToStaticMarkup ? "" : "\x3c!--" + a + "--\x3e";
    },
    receiveComponent: function () {},
    getHostNode: function () {
      return o.getNodeFromInstance(this);
    },
    unmountComponent: function () {
      o.uncacheNode(this);
    }
  }), e.exports = s;
};
