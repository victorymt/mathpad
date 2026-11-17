/* module 34651 — 2322 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(9099);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var a = new i.A("builtin.worker");
  class l {
    constructor() {
      (0, n.A)(this, "id", Math.random().toString());
    }
    getWall() {
      return null == a && (a = new i.A("builtin.worker")), a;
    }
    plot3d(e) {
      var t = {
        requestType: "plotly-3d-func",
        expressions: e
      };
      try {
        JSON.stringify(t);
      } catch (e) {
        var r = {
          status: "result",
          data: {
            responseType: "plotly-3d-func",
            expressions: t.expressions.map(e => {
              var t;
              return s(s({
                type: "error"
              }, e), {}, {
                message: "Error on serialization"
              });
            })
          }
        };
        return Promise.resolve(r);
      }
      return this.getWall().request(t, this.id);
    }
    plot(e) {
      var t = {
        requestType: "plot",
        expressions: e
      };
      try {
        JSON.stringify(t);
      } catch (e) {
        var r = {
          status: "result",
          data: {
            responseType: "plot",
            expressions: t.expressions.map(e => {
              var t;
              return s(s({
                type: "error"
              }, e), {}, {
                message: "Error on serialization"
              });
            })
          }
        };
        return Promise.resolve(r);
      }
      return this.getWall().request(t, this.id);
    }
  }
};
