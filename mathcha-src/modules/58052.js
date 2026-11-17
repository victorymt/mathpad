/* module 58052 — 3415 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Fb: () => u,
    Jt: () => p,
    _Y: () => d,
    bE: () => m,
    yJ: () => g
  });
  var n = r(64467),
    i = r(91636);
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
  var a = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  };
  function l() {
    return "undefined" != typeof window && window.customFetch ? window.customFetch : fetch;
  }
  function c(e) {
    if (401 == e.status || 403 == e.status) throw {
      isManaged: !0,
      status: e.status,
      message: "Your session has expired, please refresh page and login again"
    };
    if (413 == e.status) throw {
      isManaged: !0,
      status: e.status,
      message: "Your doucment has exceeded content limit"
    };
    if (422 == e.status) return e.json().then(t => {
      throw {
        isManaged: !0,
        status: e.status,
        message: t.message,
        errorCode: t.errorCode
      };
    });
    if (!e.ok) throw {
      isManaged: !0,
      status: e.status,
      message: e.statusText
    };
    return e;
  }
  function d(e) {
    return e && e.isManaged;
  }
  function h(e) {
    if ((0, i.MB)(e)) throw e;
    if (d(e)) throw e;
    throw {
      isManaged: !0,
      status: 0,
      isConnectionError: !0,
      message: "Connection error, could not perform this action"
    };
  }
  var p = function e(t, r, n) {
      if (null != n && n.cancelled) return n.wait(Promise.resolve(void 0));
      if ("undefined" != typeof window && !window.customFetch && !r && !n) {
        var i = window.mathchaStartupRequests,
          o = i && i[t];
        if (o) return delete i[t], o.then(c).catch(h);
      }
      return Promise.resolve(l()(t, {
        headers: s(s({}, a), r),
        credentials: "same-origin",
        signal: null == n ? void 0 : n.signal
      })).then(c).catch(h);
    },
    u = function e(t, r) {
      return Promise.resolve(l()(t, {
        method: "DELETE",
        headers: a,
        credentials: "same-origin",
        body: f(r)
      })).then(c).catch(h);
    },
    g = function e(t, r) {
      return Promise.resolve(l()(t, {
        method: "PUT",
        headers: a,
        credentials: "same-origin",
        body: f(r)
      })).then(c).catch(h);
    },
    m = function e(t, r, n, i) {
      return null != i && i.cancelled ? i.wait(Promise.resolve(void 0)) : Promise.resolve(l()(t, {
        method: "POST",
        headers: s(s({}, a), n),
        credentials: "same-origin",
        body: f(r),
        signal: null == i ? void 0 : i.signal
      })).then(c).catch(h);
    };
  function f(e) {
    return e ? "string" == typeof e ? e : JSON.stringify(e) : null;
  }
};
