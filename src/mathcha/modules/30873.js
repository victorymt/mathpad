/* module 30873 — 2981 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(64467);
  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? i(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class s {
    visit(e, t) {
      switch (e[0]) {
        case "CompoundPath":
          return this.visitCompound(e, t);
        case "Path":
          return this.visitSimple(e, t);
      }
    }
    update(e, t) {
      switch (e[0]) {
        case "CompoundPath":
          return this.updateCompound(e, t);
        case "Path":
          return this.updateSimple(e, t);
      }
    }
    fold(e, t) {
      return this.innerFold(e, t, t.initValue);
    }
    map(e, t) {
      switch (e[0]) {
        case "CompoundPath":
          return this.mapCompound(e, t);
        case "Path":
          return this.mapSimple(e, t);
      }
    }
    findSimple(e, t) {
      switch (e[0]) {
        case "CompoundPath":
          return this.innerFindSimpleInCompound(e, t);
        case "Path":
          return t(e) ? e : void 0;
      }
    }
    innerFindSimpleInCompound(e, t) {
      for (var r = e[1].children, n = 0; n < r.length; n++) {
        var i = r[n],
          o = this.findSimple(i, t);
        if (o) return o;
      }
    }
    mapCompound(e, t) {
      var r = e[1].children.map(e => this.map(e, t));
      return t.mapCompound(e, r);
    }
    mapSimple(e, t) {
      return t.mapSimple(e);
    }
    innerFold(e, t, r) {
      switch (e[0]) {
        case "Path":
          return t.fold(r, e);
        case "CompoundPath":
          return this.foldCompound(e, t, r);
      }
    }
    foldCompound(e, t, r) {
      for (var n = 0; n < e[1].children.length; n++) {
        var i = e[1].children[n];
        r = this.innerFold(i, t, r);
      }
      return r;
    }
    updateCompound(e, t) {
      var r = e[1].children.map(e => this.update(e, t)),
        n = ["CompoundPath", o(o({}, e[1]), {}, {
          children: r
        })];
      return t.updateCompound && (n = t.updateCompound(n)), n;
    }
    updateSimple(e, t) {
      return t.updateSimple ? t.updateSimple(e) : e;
    }
    visitCompound(e, t) {
      e[1].children.forEach(e => this.visit(e, t)), t.visitCompound && t.visitCompound(e);
    }
    visitSimple(e, t) {
      t.visitSimple && t.visitSimple(e);
    }
  }
  const a = new s();
};
