/* module 3502 — 3720 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(64467),
    i = r(516),
    o = r(2543),
    s = r.n(o),
    a = r(40927),
    l = r.n(a),
    c = r(39791),
    d = r(97994),
    h = r(60693),
    p = r(22012);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m {
    renderRestEditors(e, t, r) {
      var n = [];
      return this.getRemaindersSortedKeys(e.props.data).forEach(i => {
        i != r && n.push(l().createElement(c.A, g(g({
          key: i
        }, e.buildMetaDataFromName(i)), {}, {
          showBorder: t,
          className: "role-remainder-editor"
        })));
      }), n;
    }
    getRemaindersSortedKeys(e) {
      return p.t.getRemaindersSortedKeys1(s().keys(e.elements));
    }
    getRemainderPairFromIndex(e) {
      return e % 2 == 0 ? [p.t.buildRemainderKey(e), p.t.buildRemainderKey(e + 1)] : [p.t.buildRemainderKey(e - 1), p.t.buildRemainderKey(e)];
    }
    drawOtherLines(e, t) {
      var r = [],
        n = null;
      return s().keys(t).forEach(i => {
        var o;
        p.t.isRemainderKey(i) && (p.t.parseRemainderIndex(i) % 2 != 1 ? r.push(this.drawUnderline(t[i].editor, e, n)) : n = t[i].editor);
      }), r.join("");
    }
    drawUnderline(e, t, r) {
      var n = h.T.getBCRectToRect(e, t),
        i = this.findLeftRightPosition(e, t, n.left, n.bottom),
        o = i.left,
        s = i.right;
      if (r) {
        var a = h.T.getBCRectToRect(e, t),
          l = this.findLeftRightPosition(r, t, a.left, a.bottom),
          c = l.left,
          p = l.right;
        o = Math.min(o, c), s = Math.max(s, p);
      }
      var u = d.A.round2(o),
        g = d.A.round2(s),
        m = d.A.round2(n.bottom),
        f;
      return "M".concat(u, ",").concat(m, " L").concat(g, ",").concat(m, " ");
    }
    findLeftRightPosition(e, t, r, n) {
      var o = i.A.findEditLines(e),
        a = s().last(o),
        l = i.A.findBlocks(a),
        c = r,
        d = r + 10;
      e: for (var p = 0; p < l.length; p++) {
        var u = l[p];
        if (!i.A.isChar(u)) {
          c = h.T.getBCRectToRect(u, t).left;
          break;
        }
        for (var g = 0; g < u.textContent.length; g++) {
          var m;
          if (" " != u.textContent[g] || g >= u.textContent.length - 1) {
            var f = i.A.rangeFrom2Indexes(u, g, g + 1);
            c = h.T.getBCRectToRect(f, t).left;
            break e;
          }
        }
      }
      e: for (var y = l.length - 1; y >= 0; y--) {
        var v = l[y];
        if (!i.A.isChar(v)) {
          d = h.T.getBCRectToRect(v, t).right;
          break;
        }
        for (var b = v.textContent.length - 1; b >= 0; b--) {
          var x;
          if (" " != v.textContent[b]) {
            var C = i.A.rangeFrom2Indexes(v, b, b + 1);
            d = h.T.getBCRectToRect(C, t).right;
            break e;
          }
        }
      }
      return {
        left: c,
        right: Math.max(c + 10, d)
      };
    }
  }
  const f = new m();
};
