/* module 49539 — 1045 chars */
module.exports = function (e, t, r) {
  var n = r(48116),
    i = r(37512);
  function o(e, t, r) {
    if (!e && !t && !r) throw new Error("Missing required arguments");
    if (!n.string(t)) throw new TypeError("Second argument must be a String");
    if (!n.fn(r)) throw new TypeError("Third argument must be a Function");
    if (n.node(e)) return s(e, t, r);
    if (n.nodeList(e)) return a(e, t, r);
    if (n.string(e)) return l(e, t, r);
    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
  }
  function s(e, t, r) {
    return e.addEventListener(t, r), {
      destroy: function () {
        e.removeEventListener(t, r);
      }
    };
  }
  function a(e, t, r) {
    return Array.prototype.forEach.call(e, function (e) {
      e.addEventListener(t, r);
    }), {
      destroy: function () {
        Array.prototype.forEach.call(e, function (e) {
          e.removeEventListener(t, r);
        });
      }
    };
  }
  function l(e, t, r) {
    return i(document.body, e, t, r);
  }
  e.exports = o;
};
