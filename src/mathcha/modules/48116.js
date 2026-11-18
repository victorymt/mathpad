/* module 48116 — 542 chars */
module.exports = function (e, t) {
  t.node = function (e) {
    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
  }, t.nodeList = function (e) {
    var r = Object.prototype.toString.call(e);
    return void 0 !== e && ("[object NodeList]" === r || "[object HTMLCollection]" === r) && "length" in e && (0 === e.length || t.node(e[0]));
  }, t.string = function (e) {
    return "string" == typeof e || e instanceof String;
  }, t.fn = function (e) {
    var t;
    return "[object Function]" === Object.prototype.toString.call(e);
  };
};
