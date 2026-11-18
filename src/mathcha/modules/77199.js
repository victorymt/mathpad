/* module 77199 — 1246 chars */
module.exports = function (e, t, r) {
  var n = r(49653),
    i = r(76169),
    o = r(73201),
    s = r(93736),
    a = r(71961),
    l = "[object Boolean]",
    c = "[object Date]",
    d = "[object Map]",
    h = "[object Number]",
    p = "[object RegExp]",
    u = "[object Set]",
    g = "[object String]",
    m = "[object Symbol]",
    f = "[object ArrayBuffer]",
    y = "[object DataView]",
    v = "[object Float32Array]",
    b = "[object Float64Array]",
    x = "[object Int8Array]",
    C = "[object Int16Array]",
    S = "[object Int32Array]",
    A = "[object Uint8Array]",
    w = "[object Uint8ClampedArray]",
    E = "[object Uint16Array]",
    k = "[object Uint32Array]";
  function O(e, t, r) {
    var O = e.constructor;
    switch (t) {
      case f:
        return n(e);
      case l:
      case c:
        return new O(+e);
      case y:
        return i(e, r);
      case v:
      case b:
      case x:
      case C:
      case S:
      case A:
      case w:
      case E:
      case k:
        return a(e, r);
      case d:
        return new O();
      case h:
      case g:
        return new O(e);
      case p:
        return o(e);
      case u:
        return new O();
      case m:
        return s(e);
    }
  }
  e.exports = O;
};
