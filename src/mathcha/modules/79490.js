/* module 79490 — 8332 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => m
  });
  var n = r(37566),
    i = r(516),
    o = r(61848),
    s = r(2543),
    a = r.n(s),
    l = r(35267),
    c = r(86081),
    d = r(26532);
  class h {
    merge(e, t) {
      var r = a().clone(this.getTheorems(e));
      if (!t || !t.theorems) return {
        info: e,
        keyMap: {}
      };
      var n = a().clone(this.getTheorems(t)),
        i = n.filter(e => r.some(t => t.name == e.name)),
        s = {};
      i.forEach(e => {
        var t = r.find(t => t.name == e.name).key;
        t != e.key && (s[e.key] = t);
      });
      var l = a().difference(n, i),
        c = [];
      return l.forEach(e => {
        var t = r.find(t => t.env == e.env),
          n = r.find(t => t.key == e.key),
          i = e;
        if (t && (i = o.A.setProp(i, "env", e.env + Math.random().toString().substr(3))), n) {
          var a = "trr".concat(Math.random().toString());
          s[e.key] = a, i = o.A.setProp(i, "key", a);
        }
        c.push(i);
      }), {
        info: {
          theorems: r.concat(c)
        },
        keyMap: s
      };
    }
    theoremShouldItalic(e, t) {
      var r,
        n = t.italicContent || "inherit";
      return "true" == n || "false" != n && !1 !== (null == e || null === (r = e.theoremContentStyle) || void 0 === r ? void 0 : r.isItalic);
    }
    modifyLinesWithMergeMod(e, t) {
      a().keys(t.keyMap).length <= 0 || e.forEach(e => {
        d.a.visitTextModeLine(e, {
          visitBlock: e => {
            c.A.isTheorem(e) && t.keyMap[e.theoremKey] && (e.theoremKey = t.keyMap[e.theoremKey]);
          }
        });
      });
    }
    getTheorems(e) {
      return e ? e.theorems : g;
    }
    getDefaultTheoremStyle() {
      return u;
    }
    getDefaultCountPaddings() {
      return p;
    }
    getDefaultCountingTemplate() {
      return "${count}";
    }
    getTheoremsByKeys(e, t) {
      var r;
      return this.getTheorems(t).filter(t => e.indexOf(t.key) >= 0);
    }
    getTheorem(e, t) {
      return this.getTheorems(t).find(t => t.key == e);
    }
    getTheoremOrDefault(e, t) {
      return this.getTheorem(e, t) || {
        env: "\\theorem",
        key: e,
        name: "Unknown"
      };
    }
    toLatex(e, t) {
      var r = this.getTheorems(t),
        n = this.buildCountMap(r),
        i = a().mapKeys(r, e => e.key),
        o = [];
      return e.forEach(e => {
        var t = r.find(t => t.key == e);
        this.buildTheoremLatex(t, i, n, o);
      }), a().uniq(o).join("\n");
    }
    buildTheoremLatex(e, t, r, n) {
      if (e.ignoreNumbering) return n.push("\\newtheorem*{".concat(e.env, "}{").concat(e.name, "}"));
      if (!e.numeringType || "default" == e.numeringType) return n.push("\\newtheorem{".concat(e.env, "}{").concat(e.name, "}"));
      if ("section" == e.numeringType) return n.push("\\newtheorem{".concat(e.env, "}{").concat(e.name, "}[").concat(e.section, "]"));
      if ("share" == e.numeringType) {
        var i = r[e.key],
          o = a().keys(r).filter(e => r[e] == i);
        if (o.length <= 1) return void n.push("\\newtheorem{".concat(e.env, "}{").concat(e.name, "}"));
        var s = o.find(e => "share" != t[e].numeringType),
          l = t[s];
        return this.buildTheoremLatex(l, t, r, n), void n.push("\\newtheorem{".concat(e.env, "}[").concat(l.env, "]{").concat(e.name, "}"));
      }
      if ("with" == e.numeringType) {
        var c = t[e.nestedWith];
        return c ? (this.buildTheoremLatex(c, t, r, n), n.push("\\newtheorem{".concat(e.env, "}{").concat(e.name, "}[").concat(c.env, "]"))) : void n.push("\\newtheorem{".concat(e.env, "}{").concat(e.name, "}"));
      }
      throw new Error("not supported");
    }
    getTheoremUsages(e) {
      var t = {};
      return n.YG(n.YG(e, ">area-container"), "compositeblock.theorem").forEach((e, r) => {
        var n,
          i = e.reactInstance.getModel();
        t[i.theoremKey] || (t[i.theoremKey] = 0), t[i.theoremKey] += 1;
      }), t;
    }
    buildTheoremRef(e, t) {
      t = t || n.YG(n.YG(e, ">area-container"), "compositeblock.theorem"), n.YG(n.YG(e, ">area-container"), "compositeblock.theorem-ref").forEach((e, r) => {
        var i = e.reactInstance;
        if (i) {
          var o = i.getModel().refTagId;
          if (o) {
            var s = t.find(e => {
              var t;
              return (null === (t = e.reactInstance) || void 0 === t ? void 0 : t.getModel().id) == o;
            });
            s ? i.setResolve({
              type: "auto",
              prefix: n.yR(n.jS(s, "theorem-name")),
              count: n.yR(n.jS(s, "theorem-counting"))
            }) : i.setResolve({
              type: "missing"
            });
          }
        }
      });
    }
    buildTheoremNumber(e, t, r, o) {
      var s = this.getTheorems(t),
        a = this.theoremMap(s),
        l = this.buildCountMap(s),
        c = i.A.findEditLines(e),
        d = n.YG(n.YG(e, ">area-container"), "compositeblock.theorem");
      return d.forEach(e => {
        var t,
          i = e.reactInstance;
        if (i) {
          var s = i.getModel(),
            d = l[s.theoremKey] || {
              count: 0
            },
            h = d.count.toString(),
            p;
          if ((a[s.theoremKey] || {
            env: s.theoremKey,
            key: s.theoremKey,
            name: s.theoremKey,
            numeringType: "default"
          }).ignoreNumbering) h = "";else if (d.sectionType || d.parentTheoremLatex) {
            var u = n.f$(e, "line")[0],
              g = this.buildPrefixForParent(d.sectionType || d.parentTheoremLatex, l, u, c, r);
            d.lastPrefix != g && (d.count = 1, d.lastPrefix = g), h = d.lastPrefix + d.count;
          }
          var m = a[s.theoremKey] || {
            env: "\\theorem",
            key: s.theoremKey,
            name: "Unknown"
          };
          h = this.resolvedCountByTemplate(h, null !== (t = m.countTemplate) && void 0 !== t ? t : this.getDefaultCountingTemplate()), i.setResolve({
            type: "auto",
            prefix: m.name,
            count: h
          }, o), s.___theoremName = "".concat(m.name, " ").concat(h), d.count += 1;
        }
      }), d;
    }
    resolvedCountByTemplate(e, t) {
      return t.split("${count}").join(e.toString());
    }
    buildPrefixForParent(e, t, r, n, i) {
      if ("section" == e) return l.A.buildPrefix(r, n, 1, i);
      if ("subsection" == e) return l.A.buildPrefix(r, n, 2, i);
      if ("subsubsection" == e) return l.A.buildPrefix(r, n, 3, i);
      var o = t[e],
        s = "",
        a = o.count;
      return (o.sectionType || o.parentTheoremLatex) && (s = this.buildPrefixForParent(o.sectionType || o.parentTheoremLatex, t, r, n, i), o.lastPrefix != s && (a = 1)), s + Math.max(a - 1, 0).toString() + ".";
    }
    buildCountMap(e) {
      var t = {},
        r = a().mapKeys(e, e => e.key);
      return (e = e.filter(e => !e.ignoreNumbering)).filter(e => !e.numeringType || "default" == e.numeringType).forEach(e => {
        t[e.key] = {
          count: 1
        };
      }), e.filter(e => "section" == e.numeringType).forEach(e => {
        t[e.key] = {
          count: 1,
          sectionType: e.section
        };
      }), e.filter(e => "with" == e.numeringType).forEach(e => {
        t[e.key] = {
          count: 1
        }, r[e.nestedWith] && (t[e.key].parentTheoremLatex = e.nestedWith);
      }), e.filter(e => "share" == e.numeringType).forEach(e => {
        for (var n = e.shareWith, i = r[n]; i && "share" == i.numeringType;) n = i.shareWith, i = r[n];
        t[n] ? t[e.key] = t[n] : t[e.key] = {
          count: 1
        };
      }), t;
    }
    theoremMap(e) {
      var t = {};
      return e.forEach(e => {
        t[e.key] = e;
      }), t;
    }
  }
  var p = {
      left: .5,
      right: .5
    },
    u = {
      isBold: !0
    },
    g = [{
      key: "thm",
      env: "thm",
      name: "Theorem"
    }, {
      key: "lema",
      env: "lema",
      name: "Lemma"
    }, {
      key: "corollary",
      env: "corollary",
      name: "Corollary"
    }, {
      key: "proposition",
      env: "proposition",
      name: "Proposition"
    }, {
      key: "definition",
      env: "definition",
      name: "Definition"
    }],
    m = new h();
};
