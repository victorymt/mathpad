/* module 63971 — 5421 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O4: () => x,
    ZP: () => u,
    b: () => g,
    gA: () => b,
    rk: () => f,
    yY: () => y
  });
  var n = r(64467),
    i = r(37566),
    o = r(2543),
    s = r.n(o),
    a = r(70224),
    l = r(12557);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var h = new WeakMap();
  function p(e) {
    return "composite" === e.type && "\\exercise" === e.text;
  }
  function u() {
    return d(d({}, a.A.createComposite("\\exercise")), {}, {
      answerLines: 4,
      elements: {
        question: a.A.createEmptyEditor(),
        hint: a.A.createEmptyEditor(),
        solution: a.A.createEmptyEditor()
      }
    });
  }
  function g(e) {
    var t = h.get(e);
    if (t) return t;
    var r = {},
      n = 0;
    return e.lines.forEach(e => e.blocks.forEach(e => {
      p(e) && (r[e.id] = ++n);
    })), h.set(e, r), r;
  }
  function m(e) {
    return Object.keys(g(e)).length > 0;
  }
  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = 0;
    return e.lines.forEach(e => e.blocks.forEach(e => {
      if (t && p(e) && r++, "composite" === e.type) {
        var n,
          i = e;
        [i.elements, i.___tempElements].forEach(e => {
          Object.keys(e || {}).forEach(t => {
            e[t] && (r += f(e[t], !0));
          });
        }), null !== (n = i.hiddenData) && void 0 !== n && n.lines && (r += f(i.hiddenData, !0));
      }
    })), r;
  }
  function y(e) {
    return Number.isFinite(e) ? Math.max(0, Math.min(20, Math.round(e))) : 4;
  }
  function v(e) {
    return !!e && e.lines.some(e => e.blocks.some(e => !!e.type || !!e.text.trim()));
  }
  function b(e, t, r) {
    var n = s().cloneDeep(e),
      i = (0, l.WK)(e.pageSettings),
      o = g(n);
    r && (n = d(d({}, n), {}, {
      lines: n.lines.reduce((e, t) => {
        var n = t.blocks.filter(e => p(e) && e.id === r);
        return n.length ? e.concat(d(d({}, t), {}, {
          blocks: n
        })) : e;
      }, [])
    }));
    var c = e => v(e) ? u(e).lines : [],
      h = e => {
        var t = a.A.createPureTextLine(e);
        return d(d({}, t), {}, {
          customCn: "worksheet-keep-next",
          blocks: t.blocks.map(e => d(d({}, e), {}, {
            style: {
              isBold: !0
            }
          }))
        });
      },
      u = r => {
        var n = [];
        return r.lines.forEach(r => {
          var s = [],
            g = !1,
            m = () => {
              s.length && (n.push(d(d({}, r), {}, {
                id: g ? a.A.createEmptyLine().id : r.id,
                blocks: s
              })), g = !0, s = []);
            };
          r.blocks.forEach(r => {
            if (p(r)) {
              m();
              var d = Number.isFinite(r.marks) && r.marks >= 0 ? " (".concat((0, l.FX)(e.pageSettings, r.marks), ")") : "";
              if (n.push(h("".concat((0, l.rc)(e.pageSettings, o[r.id])).concat(d))), n.push(...c(r.elements.question)), "student" !== t && v(r.elements.hint) && n.push(h(i.hintHeading), ...c(r.elements.hint)), "teacher" === t) v(r.elements.solution) && n.push(h(i.solutionHeading), ...c(r.elements.solution));else for (var g = 0; g < y(r.answerLines); g++) {
                var f = a.A.createPureTextLine(" "),
                  b = a.A.createComposite("\\underline-section");
                b.elements = {
                  ulvalue: a.A.createEditorWith([f])
                }, b.lineStyle = {
                  line: "solid",
                  color: "#b8b8b8"
                }, n.push(a.A.createLineFromBlock(b));
              }
              n.push(a.A.createEmptyLine());
            } else {
              if ("composite" === r.type) {
                var x,
                  C = r;
                Object.keys(C.elements || {}).forEach(e => {
                  C.elements[e] = u(C.elements[e]);
                }), null !== (x = C.hiddenData) && void 0 !== x && x.lines && (C.hiddenData = u(C.hiddenData)), C.___tempElements && Object.keys(C.___tempElements).forEach(e => {
                  C.___tempElements[e] = u(C.___tempElements[e]);
                });
              }
              s.push(r);
            }
          }), m(), r.blocks.length || n.push(r);
        }), d(d({}, r), {}, {
          lines: n.length ? n : [a.A.createEmptyLine()]
        });
      },
      m = u(n);
    return delete m.delayRenderCache, m;
  }
  function x(e, t) {
    if (e) {
      var r = g(t);
      i.YG(e, ".exercise-number").forEach(e => {
        var n = r[e.getAttribute("data-exercise-id")],
          i = (0, l.rc)(t.pageSettings, n);
        e.textContent !== i && (e.textContent = i);
      });
    }
  }
};
