/* module 90251 — 2557 chars */
module.exports = function (e, t, r) {
  var n, i, o, s;
  o = this, s = function (e) {
    "use strict";

    var t = function (e) {
        for (var t = 1, r = arguments.length, n; t < r; t++) for (n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e;
      },
      r = {
        template: "[%t] %l:",
        levelFormatter: function (e) {
          return e.toUpperCase();
        },
        nameFormatter: function (e) {
          return e || "root";
        },
        timestampFormatter: function (e) {
          return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        },
        format: void 0
      },
      n,
      i = {},
      o,
      s = function (e, o) {
        if (!e || !e.setLevel) throw new TypeError("Argument is not a logger");
        var s = e.methodFactory,
          a = e.name || "",
          l = i[a] || i[""] || r;
        function c(e, t, r) {
          var n = s(e, t, r),
            o = i[r] || i[""],
            l = -1 !== o.template.indexOf("%t"),
            c = -1 !== o.template.indexOf("%l"),
            d = -1 !== o.template.indexOf("%n");
          return function () {
            for (var t = "", s = arguments.length, h = Array(s), p = 0; p < s; p++) h[p] = arguments[p];
            if (a || !i[r]) {
              var u = o.timestampFormatter(new Date()),
                g = o.levelFormatter(e),
                m = o.nameFormatter(r);
              o.format ? t += o.format(g, m, u) : (t += o.template, l && (t = t.replace(/%t/, u)), c && (t = t.replace(/%l/, g)), d && (t = t.replace(/%n/, m))), h.length && "string" == typeof h[0] ? h[0] = t + " " + h[0] : h.unshift(t);
            }
            n.apply(void 0, h);
          };
        }
        return i[a] || (e.methodFactory = c), (o = o || {}).template && (o.format = void 0), i[a] = t({}, l, o), e.setLevel(e.getLevel()), n || e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"), e;
      },
      a = {
        reg: function (e) {
          if (!e || !e.getLogger) throw new TypeError("Argument is not a root logger");
          n = e;
        },
        apply: s
      },
      l;
    return e && (l = e.prefix, a.noConflict = function () {
      return e.prefix === a && (e.prefix = l), a;
    }), a;
  }, void 0 === (i = "function" == typeof (n = s) ? n.call(t, r, t, e) : n) || (e.exports = i);
};
