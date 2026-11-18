/* module 61848 — 2059 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(2543),
    i = r.n(n),
    o = r(76502),
    s = r.n(o);
  class a {
    replaceArrayItemBy(e, t) {
      for (var r = [], n = 0; n < e.length; n++) {
        var i = e[n],
          o = t(i);
        o = o || i, r.push(o);
      }
      return r;
    }
    replaceArrayByEntity(e, t) {
      var r = e.findIndex(e => e.id == t.id);
      return r < 0 ? e : this.setIndex(e, r, t);
    }
    update(e, t) {
      return i().assign(i().clone(e), t);
    }
    setProp(e, t, r) {
      return this.set(e, t, r);
    }
    setIndex(e, t, r) {
      return this.set(e, t, r);
    }
    set(e, t, r) {
      var n = t.toString().split(".");
      return this.setFromPropsInner(e, n, 0, r);
    }
    insert(e, t, r) {
      return null == e && (e = []), s()(e, {
        $splice: [[t, 0, r]]
      });
    }
    insertMultiple(e, t, r) {
      return null == e && (e = []), e.slice(0, t).concat(r).concat(e.slice(t));
    }
    remove(e, t) {
      return s()(e, {
        $splice: [[t, 1]]
      });
    }
    removeEntity(e, t) {
      var r = e.findIndex(e => e.id == t);
      return r < 0 ? e : this.remove(e, r);
    }
    splice(e, t, r) {
      for (var n = arguments.length, i = new Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) i[o - 3] = arguments[o];
      return s()(e, {
        $splice: [[t, r].concat(i)]
      });
    }
    spliceInsArr(e, t, r, n) {
      return s()(e, {
        $splice: [[t, r].concat(n)]
      });
    }
    replaceWithArray(e, t, r, n) {
      return e.slice(0, t).concat(n).concat(e.slice(t + r));
    }
    setFromProps(e, t, r) {
      return this.setFromPropsInner(e, t, 0, r);
    }
    setFromPropsInner(e, t, r, n) {
      var i = t[r],
        o;
      if (r == t.length - 1) return e[i] == n ? e : ((o = {})[i] = {
        $set: n
      }, s()(e, o));
      var a = this.setFromPropsInner(e[i], t, r + 1, n),
        o;
      return a == e[i] ? e : ((o = {})[i] = {
        $set: a
      }, s()(e, o));
    }
  }
  const l = new a();
};
