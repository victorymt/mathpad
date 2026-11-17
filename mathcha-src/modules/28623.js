/* module 28623 — 72638 chars */
module.exports = function (e) {
  "use strict";

  function t(e, t) {
    function r() {
      this.constructor = e;
    }
    r.prototype = t.prototype, e.prototype = new r();
  }
  function r(e, t, n, i) {
    this.message = e, this.expected = t, this.found = n, this.location = i, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, r);
  }
  function n(e, t) {
    t = void 0 !== t ? t : {};
    var n = {},
      i = {
        Expression: qa,
        MathExpression: il
      },
      o = qa,
      s = "",
      a = "{",
      l = va("{", !1),
      c = /^[^\r\n \t\u02DC#$%\^_\\{}&[\]]/,
      d = ba(["\r", "\n", " ", "\t", "˜", "#", "$", "%", "^", "_", "\\", "{", "}", "&", "[", "]"], !0, !1),
      h = "}",
      p = va("}", !1),
      u = function (e) {
        return e;
      },
      g = "\\begin",
      m = va("\\begin", !1),
      f = "\\end",
      y = va("\\end", !1),
      v = function (e, t) {
        return {
          id: Xl.nextId(),
          type: "composite",
          text: "\\" + e[0],
          elements: {
            block: {
              lines: t
            }
          }
        };
      },
      b = /^[ \t\n\r]/,
      x = ba([" ", "\t", "\n", "\r"], !1, !1),
      C = "{aligned}",
      S = va("{aligned}", !1),
      A = function () {
        return "";
      },
      w = /^[ \t]/,
      E = ba([" ", "\t"], !1, !1),
      k = "\n",
      O = va("\n", !1),
      D = function () {
        return " ";
      },
      P = /^[ \t\r\n]/,
      M = ba([" ", "\t", "\r", "\n"], !1, !1),
      I = "\\&",
      T = va("\\&", !1),
      L = "\\%",
      R = va("\\%", !1),
      B = "\\$",
      F = va("\\$", !1),
      j = "\\#",
      _ = va("\\#", !1),
      N = "\\_",
      z = va("\\_", !1),
      H = "\\{",
      W = va("\\{", !1),
      V = "\\}",
      U = va("\\}", !1),
      q = function () {
        return ga().substring(1);
      },
      G = "\\",
      K = va("\\", !1),
      Z = " ",
      Y = va(" ", !1),
      Q = "\\,",
      J = va("\\,", !1),
      X = "\\:",
      $ = va("\\:", !1),
      ee = "\\;",
      te = va("\\;", !1),
      re = "\\!",
      ne = va("\\!", !1),
      ie = "\\quad",
      oe = va("\\quad", !1),
      se = function () {
        return "  ";
      },
      ae = "\\qquad",
      le = va("\\qquad", !1),
      ce = function () {
        return "    ";
      },
      de = function (e) {
        return rc(e, !0);
      },
      he = function (e) {
        var t;
        return {
          id: Xl.nextId(),
          blocks: e
        };
      },
      pe = "align*",
      ue = va("align*", !1),
      ge = "align",
      me = va("align", !1),
      fe = "gather*",
      ye = va("gather*", !1),
      ve = "gather",
      be = va("gather", !1),
      xe = function (e, t) {
        "align*" == e && (e = "align"), "gather*" == e && (e = "gather"), e = "\\" + e;
        var r,
          n = Yl.getCustomSymbolComponent(e).toModel(e, t);
        return {
          id: Xl.nextId(),
          blocks: [n]
        };
      },
      Ce = function (e) {
        return oc([{
          id: Xl.nextId(),
          blocks: [e]
        }]);
      },
      Se = function (e) {
        return "\\" + e;
      },
      Ae = "equation*",
      we = va("equation*", !1),
      Ee = "equation",
      ke = va("equation", !1),
      Oe = "math",
      De = va("math", !1),
      Pe = function (e, t) {
        return oc(t);
      },
      Me = "$$",
      Ie = va("$$", !1),
      Te = function (e, t) {
        return oc(t);
      },
      Le = "$",
      Re = va("$", !1),
      Be = function (e, t) {
        var r;
        return Yl.getCustomSymbolComponent("\\math-container").toModel(!1, t);
      },
      Fe = /^[^\\\n\r$]/,
      je = ba(["\\", "\n", "\r", "$"], !0, !1),
      _e = function () {
        return ga();
      },
      Ne = function (e) {
        return {
          id: Xl.nextId(),
          text: e
        };
      },
      ze = function () {
        return tc();
      },
      He = "\\\\",
      We = va("\\\\", !1),
      Ve = function (e) {
        return tc();
      },
      Ue = function (e) {
        return rc(e);
      },
      qe = function (e, t) {
        return {
          id: Xl.nextId(),
          blocks: e
        };
      },
      Ge = /^[^\r\n \t\u02DC#$%\^_\\{}&]/,
      Ke = ba(["\r", "\n", " ", "\t", "˜", "#", "$", "%", "^", "_", "\\", "{", "}", "&"], !0, !1),
      Ze = function (e) {
        return {
          id: Xl.nextId(),
          text: e.join("")
        };
      },
      Ye = function (e) {
        return e;
      },
      Qe = function (e, t) {
        var r = "",
          n;
        return "align*" != e && "align" != e || (r = "\\aligned", e = "align"), "gather*" != e && "gather" != e || (r = "\\gathered"), Yl.getCustomSymbolComponent(r).toModel(e, t);
      },
      Je = "smallmatrix",
      Xe = va("smallmatrix", !1),
      $e = "pmatrix",
      et = va("pmatrix", !1),
      tt = "Bmatrix",
      rt = va("Bmatrix", !1),
      nt = "bmatrix",
      it = va("bmatrix", !1),
      ot = "vmatrix",
      st = va("vmatrix", !1),
      at = "Vmatrix",
      lt = va("Vmatrix", !1),
      ct = "matrix",
      dt = va("matrix", !1),
      ht = "eqnarray",
      pt = va("eqnarray", !1),
      ut = "cases",
      gt = va("cases", !1),
      mt = "gathered",
      ft = va("gathered", !1),
      yt = "aligned",
      vt = va("aligned", !1),
      bt = function (e, t) {
        var r = "\\matrix",
          n;
        return "cases" == e && (r = "\\cases"), "gathered" == e && (r = "\\gathered"), "aligned" == e && (r = "\\aligned"), "eqnarray" == e && (r = "\\aligned"), "smallmatrix" == e && (r = "\\smallmatrix"), Yl.getCustomSymbolComponent(r).toModel(e, t, "eqnarray" == e);
      },
      xt = function (e) {
        return e[1].join("");
      },
      Ct = "{array}",
      St = va("{array}", !1),
      At = function (e, t) {
        var r;
        return Yl.getCustomSymbolComponent("\\array").toModel("array", t, e);
      },
      wt = "\\bigg",
      Et = va("\\bigg", !1),
      kt = "\\Bigg",
      Ot = va("\\Bigg", !1),
      Dt = "\\big",
      Pt = va("\\big", !1),
      Mt = "\\Big",
      It = va("\\Big", !1),
      Tt = "l",
      Lt = va("l", !1),
      Rt = "r",
      Bt = va("r", !1),
      Ft = "/",
      jt = va("/", !1),
      _t = "\\backslash",
      Nt = va("\\backslash", !1),
      zt = "\\Vert",
      Ht = va("\\Vert", !1),
      Wt = "\\|",
      Vt = va("\\|", !1),
      Ut = "\\rangle",
      qt = va("\\rangle", !1),
      Gt = "<",
      Kt = va("<", !1),
      Zt = "(",
      Yt = va("(", !1),
      Qt = "[",
      Jt = va("[", !1),
      Xt = "|",
      $t = va("|", !1),
      er = "\\lceil",
      tr = va("\\lceil", !1),
      rr = "\\lfloor",
      nr = va("\\lfloor", !1),
      ir = "\\uparrow",
      or = va("\\uparrow", !1),
      sr = "\\Uparrow",
      ar = va("\\Uparrow", !1),
      lr = "\\downarrow",
      cr = va("\\downarrow", !1),
      dr = "\\Downarrow",
      hr = va("\\Downarrow", !1),
      pr = "\\updownarrow",
      ur = va("\\updownarrow", !1),
      gr = "\\Updownarrow",
      mr = va("\\Updownarrow", !1),
      fr = ">",
      yr = va(">", !1),
      vr = ")",
      br = va(")", !1),
      xr = "]",
      Cr = va("]", !1),
      Sr = "\\rceil",
      Ar = va("\\rceil", !1),
      wr = "\\rfloor",
      Er = va("\\rfloor", !1),
      kr = function (e, t, r) {
        var n = "\\bigl",
          i;
        return "\\rangle" == r && (r = ">"), "\\|" == r && (r = "\\Vert"), Yl.getCustomSymbolComponent(n).toModel(e.substring(1), t, r);
      },
      Or = "\\left",
      Dr = va("\\left", !1),
      Pr = "\\lbrack",
      Mr = va("\\lbrack", !1),
      Ir = "\\lbrace",
      Tr = va("\\lbrace", !1),
      Lr = "\\langle",
      Rr = va("\\langle", !1),
      Br = "\\vert",
      Fr = va("\\vert", !1),
      jr = ".",
      _r = va(".", !1),
      Nr = function (e) {
        var t = "\\left" + e;
        return "\\left\\vert" == t && (t = "\\left|"), "[" != e && "(" != e || (t = e), "\\lbrack" == e && (t = "["), "\\lbrace" == e && (t = Ql), "\\langle" != e && "<" != e || (t = "\\left\\angle"), "\\|" == e && (t = "\\left\\Vert"), e == "\\" + Ql && (t = Ql), {
          type: "single",
          id: Xl.nextId(),
          text: t
        };
      },
      zr = "\\middle",
      Hr = va("\\middle", !1),
      Wr = function (e) {
        return {
          type: "composite",
          id: Xl.nextId(),
          text: "\\middle|"
        };
      },
      Vr = "\\right",
      Ur = va("\\right", !1),
      qr = "\\rbrack",
      Gr = va("\\rbrack", !1),
      Kr = "\\rbrace",
      Zr = va("\\rbrace", !1),
      Yr = function (e) {
        var t = "\\right" + e;
        return "\\right\\vert" == t && (t = "\\right|"), "]" != e && ")" != e || (t = e), "\\rbrack" == e && (t = "]"), "\\rbrace" == e && (t = Jl), "\\rangle" != e && ">" != e || (t = "\\right\\angle"), "\\|" == e && (t = "\\right\\Vert"), e == "\\" + Jl && (t = Jl), {
          type: "single",
          id: Xl.nextId(),
          text: t
        };
      },
      Qr = function (e) {
        return e;
      },
      Jr = function (e) {
        return e;
      },
      Xr = /^[^\r\n \t\u02DC#$%\^_\\{}&a-zA-Z]/,
      $r = ba(["\r", "\n", " ", "\t", "˜", "#", "$", "%", "^", "_", "\\", "{", "}", "&", ["a", "z"], ["A", "Z"]], !0, !1),
      en = function (e) {
        switch (e) {
          case "\\int":
          case "\\iint":
          case "\\iiint":
          case "\\oint":
          case "\\oiint":
          case "\\oiiint":
          case "\\sum":
          case "\\bigcap":
          case "\\coprod":
          case "\\bigcup":
          case "\\prod":
          case "\\bigvee":
          case "\\bigwedge":
          case "\\limsup":
          case "\\liminf":
          case "\\varliminf":
          case "\\lim":
          case "\\varlimsup":
          case "\\sup":
            return !0;
        }
        return !1;
      },
      tn = function (e) {
        return e;
      },
      rn = "\\limits",
      nn = va("\\limits", !1),
      on = "\\nolimits",
      sn = va("\\nolimits", !1),
      an = function (e, t, r) {
        var n;
        return Yl.getCustomSymbolComponent(e).toModel(e, (t || [])[1], r);
      },
      ln = "\\cfrac",
      cn = va("\\cfrac", !1),
      dn = "\\frac",
      hn = va("\\frac", !1),
      pn = "\\dfrac",
      un = va("\\dfrac", !1),
      gn = "\\tfrac",
      mn = va("\\tfrac", !1),
      fn = "\\binom",
      yn = va("\\binom", !1),
      vn = "\\tbinom",
      bn = va("\\tbinom", !1),
      xn = "\\dbinom",
      Cn = va("\\dbinom", !1),
      Sn = "\\stackrel",
      An = va("\\stackrel", !1),
      wn = "\\overset",
      En = va("\\overset", !1),
      kn = "\\underset",
      On = va("\\underset", !1),
      Dn = function (e, t, r) {
        var n, i, n, i;
        return "\\dbinom" == e || "\\tbinom" == e ? ((i = (n = Yl.getCustomSymbolComponent("\\binom")).toModel("\\binom", null, t, r)).style = i.style || {}, i.style.mathModeType = "\\dbinom" == e ? "\\displaystyle" : "\\textstyle", i) : i = (n = Yl.getCustomSymbolComponent(e)).toModel(e, null, t, r);
      },
      Pn = "\\sqrt",
      Mn = va("\\sqrt", !1),
      In = "\\xrightarrow",
      Tn = va("\\xrightarrow", !1),
      Ln = "\\xleftarrow",
      Rn = va("\\xleftarrow", !1),
      Bn = "\\xhookleftarrow",
      Fn = va("\\xhookleftarrow", !1),
      jn = "\\xhookrightarrow",
      _n = va("\\xhookrightarrow", !1),
      Nn = "\\xleftharpoondown",
      zn = va("\\xleftharpoondown", !1),
      Hn = "\\xleftharpoonup",
      Wn = va("\\xleftharpoonup", !1),
      Vn = "\\xleftrightarrows",
      Un = va("\\xleftrightarrows", !1),
      qn = "\\xleftrightarrow",
      Gn = va("\\xleftrightarrow", !1),
      Kn = "\\xleftrightharpoons",
      Zn = va("\\xleftrightharpoons", !1),
      Yn = "\\xlongequal",
      Qn = va("\\xlongequal", !1),
      Jn = "\\xmapsto",
      Xn = va("\\xmapsto", !1),
      $n = "\\xrightharpoondown",
      ei = va("\\xrightharpoondown", !1),
      ti = "\\xrightharpoonup",
      ri = va("\\xrightharpoonup", !1),
      ni = "\\xrightleftarrows",
      ii = va("\\xrightleftarrows", !1),
      oi = "\\xrightleftharpoons",
      si = va("\\xrightleftharpoons", !1),
      ai = "\\xLeftarrow",
      li = va("\\xLeftarrow", !1),
      ci = "\\xLeftrightarrow",
      di = va("\\xLeftrightarrow", !1),
      hi = "\\xRightarrow",
      pi = va("\\xRightarrow", !1),
      ui = function (e, t, r) {
        var n;
        return "\\xrightarrow" == e && (e = "\\rightarrow"), "\\xleftarrow" == e && (e = "\\leftarrow"), Yl.getCustomSymbolComponent(e).toModel(e, t, r);
      },
      gi = "\\overbrace",
      mi = va("\\overbrace", !1),
      fi = "\\underbrace",
      yi = va("\\underbrace", !1),
      vi = function (e, t, r) {
        var n;
        return Yl.getCustomSymbolComponent(e).toModel(e, t, r);
      },
      bi = "\\overleftarrow",
      xi = va("\\overleftarrow", !1),
      Ci = "\\widetilde",
      Si = va("\\widetilde", !1),
      Ai = "\\tilde",
      wi = va("\\tilde", !1),
      Ei = "\\widehat",
      ki = va("\\widehat", !1),
      Oi = "\\hat",
      Di = va("\\hat", !1),
      Pi = "\\dot",
      Mi = va("\\dot", !1),
      Ii = "\\ddot",
      Ti = va("\\ddot", !1),
      Li = "\\dddot",
      Ri = va("\\dddot", !1),
      Bi = "\\ddddot",
      Fi = va("\\ddddot", !1),
      ji = "\\overline",
      _i = va("\\overline", !1),
      Ni = "\\underline",
      zi = va("\\underline", !1),
      Hi = "\\overrightarrow",
      Wi = va("\\overrightarrow", !1),
      Vi = "\\mbox",
      Ui = va("\\mbox", !1),
      qi = "\\fbox",
      Gi = va("\\fbox", !1),
      Ki = "\\vphantom",
      Zi = va("\\vphantom", !1),
      Yi = "\\mathrel",
      Qi = va("\\mathrel", !1),
      Ji = "\\vec",
      Xi = va("\\vec", !1),
      $i = "\\acute",
      eo = va("\\acute", !1),
      to = "\\breve",
      ro = va("\\breve", !1),
      no = "\\check",
      io = va("\\check", !1),
      oo = "\\grave",
      so = va("\\grave", !1),
      ao = "\\bar",
      lo = va("\\bar", !1),
      co = "\\overparen",
      ho = va("\\overparen", !1),
      po = "\\overarc",
      uo = va("\\overarc", !1),
      go = "\\not",
      mo = va("\\not", !1),
      fo = "\\cancel",
      yo = va("\\cancel", !1),
      vo = "\\bcancel",
      bo = va("\\bcancel", !1),
      xo = "\\xcancel",
      Co = va("\\xcancel", !1),
      So = "\\underparen",
      Ao = va("\\underparen", !1),
      wo = "\\underarc",
      Eo = va("\\underarc", !1),
      ko = "\\operatorname",
      Oo = va("\\operatorname", !1),
      Do = "\\boxed",
      Po = va("\\boxed", !1),
      Mo = "\\textcircled",
      Io = va("\\textcircled", !1),
      To = function (e, t) {
        return "\\vphantom" == e ? {
          text: ""
        } : ("\\tilde" == e || "\\hat" == e) && t instanceof Array && 0 == t.length ? {
          id: Xl.nextId(),
          text: nc[e]
        } : Yl.getCustomSymbolComponent(e).toModel(e, null, t);
        var r;
      },
      Lo = /^[^}]/,
      Ro = ba(["}"], !0, !1),
      Bo = function () {
        return ga();
      },
      Fo = function (e) {
        return e;
      },
      jo = "\\text",
      _o = va("\\text", !1),
      No = function (e) {
        var t;
        return Yl.getCustomSymbolComponent("\\text").toModel(e);
      },
      zo = "\\mathrm",
      Ho = va("\\mathrm", !1),
      Wo = "\\mathbf",
      Vo = va("\\mathbf", !1),
      Uo = "\\boldsymbol",
      qo = va("\\boldsymbol", !1),
      Go = "\\mathit",
      Ko = va("\\mathit", !1),
      Zo = "\\mathbb",
      Yo = va("\\mathbb", !1),
      Qo = "\\mathcal",
      Jo = va("\\mathcal", !1),
      Xo = "\\mathfrak",
      $o = va("\\mathfrak", !1),
      es = "\\mathsf",
      ts = va("\\mathsf", !1),
      rs = "\\mathtt",
      ns = va("\\mathtt", !1),
      is = "\\mathscr",
      os = va("\\mathscr", !1),
      ss = "\\rm",
      as = va("\\rm", !1),
      ls = "\\bf",
      cs = va("\\bf", !1),
      ds = "\\it",
      hs = va("\\it", !1),
      ps = "\\bb",
      us = va("\\bb", !1),
      gs = "\\cal",
      ms = va("\\cal", !1),
      fs = "\\frak",
      ys = va("\\frak", !1),
      vs = "\\sf",
      bs = va("\\sf", !1),
      xs = "\\tt",
      Cs = va("\\tt", !1),
      Ss = function (e, t) {
        var r;
        return Zl.startsWith(e, "\\math") || "\\boldsymbol" === e || (e = "\\math" + e.substring(1)), Yl.getCustomSymbolComponent("\\mathbb").toModel(e, null, t);
      },
      As = ",",
      ws = va(",", !1),
      Es = ":",
      ks = va(":", !1),
      Os = ";",
      Ds = va(";", !1),
      Ps = "!",
      Ms = va("!", !1),
      Is = function (e) {
        return "!" == e ? {
          text: ""
        } : hc(" ");
      },
      Ts = /^[a-zA-Z|]/,
      Ls = ba([["a", "z"], ["A", "Z"], "|"], !1, !1),
      Rs = function () {
        return ga();
      },
      Bs = function (e) {
        switch (e) {
          case "\\begin":
          case "\\end":
          case "\\item":
          case "\\section":
          case "\\subsection":
          case "\\subsubsection":
          case "\\hline":
            return !1;
        }
        return !0;
      },
      Fs = function (e) {
        switch (e) {
          case "\\lVert":
            return {
              type: "single",
              id: Xl.nextId(),
              text: "\\left\\Vert"
            };
          case "\\rVert":
            return {
              type: "single",
              id: Xl.nextId(),
              text: "\\right\\Vert"
            };
          case "\\lvert":
            return {
              type: "single",
              id: Xl.nextId(),
              text: "\\left|"
            };
          case "\\rvert":
            return {
              type: "single",
              id: Xl.nextId(),
              text: "\\right|"
            };
          case "\\strut":
          case "\\mathstrut":
            return {
              text: ""
            };
          case "\\tilde":
            return hc("~");
          case "\\hat":
            return hc("^");
          case "\\backslash":
            return hc("\\");
          case "\\quad":
            return hc("  ");
          case "\\qquad":
            return hc("    ");
          case "\\gets":
            e = "\\leftarrow";
            break;
          case "\\to":
            e = "\\rightarrow";
            break;
          case "\\empty":
            e = "\\emptyset";
        }
        var t = Yl.getByName(e),
          r;
        return t && null == t.type ? hc(t.symbol) : t ? Yl.getCustomSymbolComponent(e).toModel(e) : dc(e);
      },
      js = function (e) {
        var t;
        return Yl.getCustomSymbolComponent("\\group").toModel(null, null, e);
      },
      _s = "%",
      Ns = va("%", !1),
      zs = /^[^\r\n]/,
      Hs = ba(["\r", "\n"], !0, !1),
      Ws = function (e) {
        return {
          type: "comment",
          text: e.join("")
        };
      },
      Vs = "^",
      Us = va("^", !1),
      qs = "_",
      Gs = va("_", !1),
      Ks = function (e, t, r) {
        var n;
        return Yl.getCustomSymbolComponent("\\power-index").toModel(e, t, r);
      },
      Zs = function (e) {
        return rc(e);
      },
      Ys = function (e, t) {
        return {
          id: Xl.nextId(),
          blocks: e
        };
      },
      Qs = /^[^\r\n \t\u02DC#$%\^_\\{}&\]]/,
      Js = ba(["\r", "\n", " ", "\t", "˜", "#", "$", "%", "^", "_", "\\", "{", "}", "&", "]"], !0, !1),
      Xs = function (e) {
        return {
          id: Xl.nextId(),
          text: e.join("")
        };
      },
      $s = function (e) {
        return e.length > 0 && "\\hline" == e[e.length - 1] && (e.length > 1 ? (e[e.length - 2].lastHLine = !0, e.splice(e.length - 1, 1)) : e[0] = {
          id: Xl.nextId(),
          blocks: [],
          firstHLine: !0
        }), e;
      },
      ea = "\\hline",
      ta = va("\\hline", !1),
      ra = function (e) {
        return e;
      },
      na = "&",
      ia = va("&", !1),
      oa = function (e, t, r) {
        for (var n = 0; n < t.length; n++) {
          var i;
          "&" == t[n] && (t[n] = ec.createEmptyEditor());
        }
        return {
          id: Xl.nextId(),
          sections: t,
          firstHLine: null != e
        };
      },
      sa = function (e) {
        return {
          id: Xl.nextId(),
          lines: rc([{
            id: Xl.nextId(),
            blocks: e
          }])
        };
      },
      aa = 0,
      la = 0,
      ca = [{
        line: 1,
        column: 1
      }],
      da = 0,
      ha = [],
      pa = 0,
      ua;
    if ("startRule" in t) {
      if (!(t.startRule in i)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
      o = i[t.startRule];
    }
    function ga() {
      return e.substring(la, aa);
    }
    function ma() {
      return wa(la, aa);
    }
    function fa(t, r) {
      throw r = void 0 !== r ? r : wa(la, aa), Oa([Sa(t)], e.substring(la, aa), r);
    }
    function ya(e, t) {
      throw ka(e, t = void 0 !== t ? t : wa(la, aa));
    }
    function va(e, t) {
      return {
        type: "literal",
        text: e,
        ignoreCase: t
      };
    }
    function ba(e, t, r) {
      return {
        type: "class",
        parts: e,
        inverted: t,
        ignoreCase: r
      };
    }
    function xa() {
      return {
        type: "any"
      };
    }
    function Ca() {
      return {
        type: "end"
      };
    }
    function Sa(e) {
      return {
        type: "other",
        description: e
      };
    }
    function Aa(t) {
      var r = ca[t],
        n;
      if (r) return r;
      for (n = t - 1; !ca[n];) n--;
      for (r = {
        line: (r = ca[n]).line,
        column: r.column
      }; n < t;) 10 === e.charCodeAt(n) ? (r.line++, r.column = 1) : r.column++, n++;
      return ca[t] = r, r;
    }
    function wa(e, t) {
      var r = Aa(e),
        n = Aa(t);
      return {
        start: {
          offset: e,
          line: r.line,
          column: r.column
        },
        end: {
          offset: t,
          line: n.line,
          column: n.column
        }
      };
    }
    function Ea(e) {
      aa < da || (aa > da && (da = aa, ha = []), ha.push(e));
    }
    function ka(e, t) {
      return new r(e, null, null, t);
    }
    function Oa(e, t, n) {
      return new r(r.buildMessage(e, t), e, t, n);
    }
    function Da() {
      var e;
      return e = s;
    }
    function Pa() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (i = a, aa++) : (i = n, 0 === pa && Ea(l)), i !== n ? (c.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea(d)), o === n && (o = null), o !== n ? (125 === e.charCodeAt(aa) ? (s = h, aa++) : (s = n, 0 === pa && Ea(p)), s !== n ? (la = t, t = r = o) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Ma() {
      var t, r, i, o, s, a, l;
      if (t = aa, e.substr(aa, 6) === g ? (r = g, aa += 6) : (r = n, 0 === pa && Ea(m)), r !== n) {
        if (i = [], (o = Pa()) !== n) for (; o !== n;) i.push(o), o = Pa();else i = n;
        if (i !== n) {
          if ((o = il()) !== n) {
            if (e.substr(aa, 4) === f ? (s = f, aa += 4) : (s = n, 0 === pa && Ea(y)), s !== n) {
              if (a = [], (l = Pa()) !== n) for (; l !== n;) a.push(l), l = Pa();else a = n;
              a !== n ? (la = t, t = r = v(i, o)) : (aa = t, t = n);
            } else aa = t, t = n;
          } else aa = t, t = n;
        } else aa = t, t = n;
      } else aa = t, t = n;
      return t;
    }
    function Ia() {
      var t, r;
      for (t = [], b.test(e.charAt(aa)) ? (r = e.charAt(aa), aa++) : (r = n, 0 === pa && Ea(x)); r !== n;) t.push(r), b.test(e.charAt(aa)) ? (r = e.charAt(aa), aa++) : (r = n, 0 === pa && Ea(x));
      return t;
    }
    function Ta() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === g ? (i = g, aa += 6) : (i = n, 0 === pa && Ea(m)), i !== n && (o = Ia()) !== n ? (e.substr(aa, 9) === C ? (s = C, aa += 9) : (s = n, 0 === pa && Ea(S)), s !== n && (a = Ia()) !== n ? (la = t, t = r = A()) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function La() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 4) === f ? (i = f, aa += 4) : (i = n, 0 === pa && Ea(y)), i !== n && (o = Ia()) !== n ? (e.substr(aa, 9) === C ? (s = C, aa += 9) : (s = n, 0 === pa && Ea(S)), s !== n && (a = Ia()) !== n ? (la = t, t = r = A()) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Ra() {
      var t, r, i, o, s, a;
      if (t = aa, r = [], w.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(E)), i === n && (i = aa, 10 === e.charCodeAt(aa) ? (o = k, aa++) : (o = n, 0 === pa && Ea(O)), o !== n ? (s = aa, pa++, 10 === e.charCodeAt(aa) ? (a = k, aa++) : (a = n, 0 === pa && Ea(O)), pa--, a === n ? s = void 0 : (aa = s, s = n), s !== n ? i = o = [o, s] : (aa = i, i = n)) : (aa = i, i = n)), i !== n) for (; i !== n;) r.push(i), w.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(E)), i === n && (i = aa, 10 === e.charCodeAt(aa) ? (o = k, aa++) : (o = n, 0 === pa && Ea(O)), o !== n ? (s = aa, pa++, 10 === e.charCodeAt(aa) ? (a = k, aa++) : (a = n, 0 === pa && Ea(O)), pa--, a === n ? s = void 0 : (aa = s, s = n), s !== n ? i = o = [o, s] : (aa = i, i = n)) : (aa = i, i = n));else r = n;
      return r !== n && (la = t, r = D()), t = r;
    }
    function Ba() {
      var t, r, i;
      if (t = aa, r = [], P.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(M)), i !== n) for (; i !== n;) r.push(i), P.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(M));else r = n;
      return r !== n && (la = t, r = A()), t = r;
    }
    function Fa() {
      var t, r;
      return t = aa, e.substr(aa, 2) === I ? (r = I, aa += 2) : (r = n, 0 === pa && Ea(T)), r === n && (e.substr(aa, 2) === L ? (r = L, aa += 2) : (r = n, 0 === pa && Ea(R)), r === n && (e.substr(aa, 2) === B ? (r = B, aa += 2) : (r = n, 0 === pa && Ea(F)), r === n && (e.substr(aa, 2) === j ? (r = j, aa += 2) : (r = n, 0 === pa && Ea(_)), r === n && (e.substr(aa, 2) === N ? (r = N, aa += 2) : (r = n, 0 === pa && Ea(z)), r === n && (e.substr(aa, 2) === H ? (r = H, aa += 2) : (r = n, 0 === pa && Ea(W)), r === n && (e.substr(aa, 2) === V ? (r = V, aa += 2) : (r = n, 0 === pa && Ea(U)))))))), r !== n && (la = t, r = q()), t = r;
    }
    function ja() {
      var t, r, i, o;
      if (t = aa, 92 === e.charCodeAt(aa) ? (r = G, aa++) : (r = n, 0 === pa && Ea(K)), r !== n) {
        if (i = [], 32 === e.charCodeAt(aa) ? (o = Z, aa++) : (o = n, 0 === pa && Ea(Y)), o !== n) for (; o !== n;) i.push(o), 32 === e.charCodeAt(aa) ? (o = Z, aa++) : (o = n, 0 === pa && Ea(Y));else i = n;
        i !== n ? (la = t, t = r = D()) : (aa = t, t = n);
      } else aa = t, t = n;
      return t;
    }
    function _a() {
      var t, r;
      return t = aa, e.substr(aa, 2) === Q ? (r = Q, aa += 2) : (r = n, 0 === pa && Ea(J)), r !== n && (la = t, r = D()), t = r;
    }
    function Na() {
      var t, r;
      return t = aa, e.substr(aa, 2) === X ? (r = X, aa += 2) : (r = n, 0 === pa && Ea($)), r !== n && (la = t, r = D()), t = r;
    }
    function za() {
      var t, r;
      return t = aa, e.substr(aa, 2) === ee ? (r = ee, aa += 2) : (r = n, 0 === pa && Ea(te)), r !== n && (la = t, r = D()), t = r;
    }
    function Ha() {
      var t, r;
      return t = aa, e.substr(aa, 2) === re ? (r = re, aa += 2) : (r = n, 0 === pa && Ea(ne)), r !== n && (la = t, r = A()), t = r;
    }
    function Wa() {
      var t, r;
      return t = aa, e.substr(aa, 5) === ie ? (r = ie, aa += 5) : (r = n, 0 === pa && Ea(oe)), r !== n && (la = t, r = se()), t = r;
    }
    function Va() {
      var t, r;
      return t = aa, e.substr(aa, 6) === ae ? (r = ae, aa += 6) : (r = n, 0 === pa && Ea(le)), r !== n && (la = t, r = ce()), t = r;
    }
    function Ua() {
      var e;
      return (e = ja()) === n && (e = _a()) === n && (e = Na()) === n && (e = za()) === n && (e = Ha()) === n && (e = Wa()) === n && (e = Va()), e;
    }
    function qa() {
      var e;
      return e = Ga();
    }
    function Ga() {
      var e, t, r;
      for (e = aa, t = [], (r = Xa()) === n && (r = Ja()) === n && (r = Za()) === n && (r = Ya()) === n && (r = Ka()) === n && (r = Qa()) === n && (r = rl()); r !== n;) t.push(r), (r = Xa()) === n && (r = Ja()) === n && (r = Za()) === n && (r = Ya()) === n && (r = Ka()) === n && (r = Qa()) === n && (r = rl());
      return t !== n && (la = e, t = de(t)), e = t;
    }
    function Ka() {
      var e, t, r;
      if (e = aa, t = [], (r = tl()) === n && (r = $a()), r !== n) for (; r !== n;) t.push(r), (r = tl()) === n && (r = $a());else t = n;
      return t !== n ? ((r = rl()) === n && (r = null), r !== n ? (la = e, e = t = he(t)) : (aa = e, e = n)) : (aa = e, e = n), e;
    }
    function Za() {
      var t, r, i, o, s, c, d, u, v, b, x, C, S, A, w, E, k, O;
      return t = aa, e.substr(aa, 6) === g ? (r = g, aa += 6) : (r = n, 0 === pa && Ea(m)), r !== n && (i = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (o = a, aa++) : (o = n, 0 === pa && Ea(l)), o !== n && (s = Ia()) !== n ? (e.substr(aa, 6) === pe ? (c = pe, aa += 6) : (c = n, 0 === pa && Ea(ue)), c === n && (e.substr(aa, 5) === ge ? (c = ge, aa += 5) : (c = n, 0 === pa && Ea(me)), c === n && (e.substr(aa, 7) === fe ? (c = fe, aa += 7) : (c = n, 0 === pa && Ea(ye)), c === n && (e.substr(aa, 6) === ve ? (c = ve, aa += 6) : (c = n, 0 === pa && Ea(be))))), c !== n && (d = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (u = h, aa++) : (u = n, 0 === pa && Ea(p)), u !== n && (v = Ia()) !== n && (b = Vl()) !== n && (x = Ia()) !== n ? (e.substr(aa, 4) === f ? (C = f, aa += 4) : (C = n, 0 === pa && Ea(y)), C !== n && (S = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (A = a, aa++) : (A = n, 0 === pa && Ea(l)), A !== n && (w = Ia()) !== n ? (e.substr(aa, 6) === pe ? (E = pe, aa += 6) : (E = n, 0 === pa && Ea(ue)), E === n && (e.substr(aa, 5) === ge ? (E = ge, aa += 5) : (E = n, 0 === pa && Ea(me)), E === n && (e.substr(aa, 7) === fe ? (E = fe, aa += 7) : (E = n, 0 === pa && Ea(ye)), E === n && (e.substr(aa, 6) === ve ? (E = ve, aa += 6) : (E = n, 0 === pa && Ea(be))))), E !== n ? (125 === e.charCodeAt(aa) ? (k = h, aa++) : (k = n, 0 === pa && Ea(p)), k !== n ? ((O = rl()) === n && (O = null), O !== n ? (la = t, t = r = xe(c, b)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Ya() {
      var e, t;
      return e = aa, (t = hl()) === n && (t = ul()), t !== n && (la = e, t = Ce(t)), e = t;
    }
    function Qa() {
      var t, r, i, o;
      if (t = aa, 92 === e.charCodeAt(aa) ? (r = G, aa++) : (r = n, 0 === pa && Ea(K)), r !== n) {
        for (i = [], o = el(); o !== n;) i.push(o), o = el();
        i !== n ? (la = t, t = r = Se(i)) : (aa = t, t = n);
      } else aa = t, t = n;
      return t;
    }
    function Ja() {
      var t, r, i, o, s, c, d, u, v, b, x, C, S, A, w, E, k, O;
      return t = aa, e.substr(aa, 6) === g ? (r = g, aa += 6) : (r = n, 0 === pa && Ea(m)), r !== n && (i = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (o = a, aa++) : (o = n, 0 === pa && Ea(l)), o !== n && (s = Ia()) !== n ? (e.substr(aa, 9) === Ae ? (c = Ae, aa += 9) : (c = n, 0 === pa && Ea(we)), c === n && (e.substr(aa, 8) === Ee ? (c = Ee, aa += 8) : (c = n, 0 === pa && Ea(ke)), c === n && (e.substr(aa, 4) === Oe ? (c = Oe, aa += 4) : (c = n, 0 === pa && Ea(De)))), c !== n && (d = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (u = h, aa++) : (u = n, 0 === pa && Ea(p)), u !== n && (v = Ia()) !== n && (b = il()) !== n && (x = Ia()) !== n ? (e.substr(aa, 4) === f ? (C = f, aa += 4) : (C = n, 0 === pa && Ea(y)), C !== n && (S = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (A = a, aa++) : (A = n, 0 === pa && Ea(l)), A !== n && (w = Ia()) !== n ? (e.substr(aa, 9) === Ae ? (E = Ae, aa += 9) : (E = n, 0 === pa && Ea(we)), E === n && (e.substr(aa, 8) === Ee ? (E = Ee, aa += 8) : (E = n, 0 === pa && Ea(ke)), E === n && (e.substr(aa, 4) === Oe ? (E = Oe, aa += 4) : (E = n, 0 === pa && Ea(De)))), E !== n ? (125 === e.charCodeAt(aa) ? (k = h, aa++) : (k = n, 0 === pa && Ea(p)), k !== n ? ((O = rl()) === n && (O = null), O !== n ? (la = t, t = r = Pe(c, b)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Xa() {
      var t, r, i, o, s, a, l;
      return t = aa, e.substr(aa, 2) === Me ? (r = Me, aa += 2) : (r = n, 0 === pa && Ea(Ie)), r !== n && (i = Ia()) !== n && (o = il()) !== n && (s = Ia()) !== n ? (e.substr(aa, 2) === Me ? (a = Me, aa += 2) : (a = n, 0 === pa && Ea(Ie)), a !== n ? ((l = rl()) === n && (l = null), l !== n ? (la = t, t = r = Te(r, o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function $a() {
      var t, r, i, o, s, a, l, c;
      return t = aa, r = aa, 36 === e.charCodeAt(aa) ? (i = Le, aa++) : (i = n, 0 === pa && Ea(Re)), i !== n ? (o = aa, pa++, 36 === e.charCodeAt(aa) ? (s = Le, aa++) : (s = n, 0 === pa && Ea(Re)), pa--, s === n ? o = void 0 : (aa = o, o = n), o !== n ? r = i = [i, o] : (aa = r, r = n)) : (aa = r, r = n), r !== n && (i = Ia()) !== n && (o = il()) !== n && (s = Ia()) !== n ? (36 === e.charCodeAt(aa) ? (a = Le, aa++) : (a = n, 0 === pa && Ea(Re)), a !== n ? (l = aa, pa++, 36 === e.charCodeAt(aa) ? (c = Le, aa++) : (c = n, 0 === pa && Ea(Re)), pa--, c === n ? l = void 0 : (aa = l, l = n), l !== n ? (la = t, t = r = Be(r, o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function el() {
      var t, r, i;
      if (t = aa, r = [], Fe.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(je)), i !== n) for (; i !== n;) r.push(i), Fe.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(je));else r = n;
      return r !== n && (la = t, r = _e()), t = r;
    }
    function tl() {
      var e, t;
      return e = aa, (t = el()) !== n && (la = e, t = Ne(t)), e = t;
    }
    function rl() {
      var t, r;
      return t = aa, 10 === e.charCodeAt(aa) ? (r = k, aa++) : (r = n, 0 === pa && Ea(O)), r !== n && (la = t, r = ze()), t = r;
    }
    function nl() {
      var t, r, i, o;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 2) === He ? (i = He, aa += 2) : (i = n, 0 === pa && Ea(We)), i !== n ? ((o = Sl()) === n && (o = null), o !== n ? (la = t, t = r = Ve(o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function il() {
      var e, t, r;
      for (e = aa, t = [], (r = nl()) === n && (r = ol()); r !== n;) t.push(r), (r = nl()) === n && (r = ol());
      return t !== n && (la = e, t = Ue(t)), e = t;
    }
    function ol() {
      var e, t, r;
      if (e = aa, t = [], (r = cl()) === n && (r = al()), r !== n) for (; r !== n;) t.push(r), (r = cl()) === n && (r = al());else t = n;
      return t !== n ? ((r = nl()) === n && (r = null), r !== n ? (la = e, e = t = qe(t, r)) : (aa = e, e = n)) : (aa = e, e = n), e;
    }
    function sl() {
      var t, r, i;
      if (t = aa, r = [], Ge.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Ke)), i !== n) for (; i !== n;) r.push(i), Ge.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Ke));else r = n;
      return r !== n && (la = t, r = _e()), t = r;
    }
    function al() {
      var e, t, r;
      if (e = aa, t = [], (r = sl()) === n && (r = Ua()) === n && (r = Ba()) === n && (r = Fa()), r !== n) for (; r !== n;) t.push(r), (r = sl()) === n && (r = Ua()) === n && (r = Ba()) === n && (r = Fa());else t = n;
      return t !== n && (la = e, t = Ze(t)), e = t;
    }
    function ll() {
      var e, t, r;
      return (e = Ll()) === n && (e = Ol()) === n && (e = Dl()) === n && (e = kl()) === n && (e = aa, (t = El()) !== n && (r = wl()) !== n ? e = t = [t, r] : (aa = e, e = n), e === n && (e = Bl())), e;
    }
    function cl() {
      var e, t;
      return e = aa, (t = Ll()) === n && (t = ml()) === n && (t = yl()) === n && (t = fl()) === n && (t = ul()) === n && (t = dl()) === n && (t = gl()) === n && (t = Il()) === n && (t = Ol()) === n && (t = Dl()) === n && (t = kl()) === n && (t = El()) === n && (t = wl()) === n && (t = hl()) === n && (t = Tl()) === n && (t = Bl()) === n && (t = Fl()) === n && (t = jl()) === n && (t = _l()), t !== n && (la = e, t = Ye(t)), e = t;
    }
    function dl() {
      var t, r, i, o, s, c, d, u, v, b, x, C, S, A, w, E, k, O, D;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === g ? (i = g, aa += 6) : (i = n, 0 === pa && Ea(m)), i !== n && (o = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (s = a, aa++) : (s = n, 0 === pa && Ea(l)), s !== n && (c = Ia()) !== n ? (e.substr(aa, 6) === pe ? (d = pe, aa += 6) : (d = n, 0 === pa && Ea(ue)), d === n && (e.substr(aa, 5) === ge ? (d = ge, aa += 5) : (d = n, 0 === pa && Ea(me)), d === n && (e.substr(aa, 7) === fe ? (d = fe, aa += 7) : (d = n, 0 === pa && Ea(ye)), d === n && (e.substr(aa, 6) === ve ? (d = ve, aa += 6) : (d = n, 0 === pa && Ea(be))))), d !== n ? (125 === e.charCodeAt(aa) ? (u = h, aa++) : (u = n, 0 === pa && Ea(p)), u !== n && (v = Ia()) !== n && (b = Vl()) !== n && (x = Ia()) !== n ? (e.substr(aa, 4) === f ? (C = f, aa += 4) : (C = n, 0 === pa && Ea(y)), C !== n && (S = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (A = a, aa++) : (A = n, 0 === pa && Ea(l)), A !== n && (w = Ia()) !== n ? (e.substr(aa, 6) === pe ? (E = pe, aa += 6) : (E = n, 0 === pa && Ea(ue)), E === n && (e.substr(aa, 5) === ge ? (E = ge, aa += 5) : (E = n, 0 === pa && Ea(me)), E === n && (e.substr(aa, 7) === fe ? (E = fe, aa += 7) : (E = n, 0 === pa && Ea(ye)), E === n && (e.substr(aa, 6) === ve ? (E = ve, aa += 6) : (E = n, 0 === pa && Ea(be))))), E !== n && (k = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (O = h, aa++) : (O = n, 0 === pa && Ea(p)), O !== n && (D = Ia()) !== n ? (la = t, t = r = Qe(d, b)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function hl() {
      var t, r, i, o, s, c, d, u, v, b, x, C, S, A, w, E, k, O, D;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === g ? (i = g, aa += 6) : (i = n, 0 === pa && Ea(m)), i !== n && (o = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (s = a, aa++) : (s = n, 0 === pa && Ea(l)), s !== n && (c = Ia()) !== n ? (e.substr(aa, 11) === Je ? (d = Je, aa += 11) : (d = n, 0 === pa && Ea(Xe)), d === n && (e.substr(aa, 7) === $e ? (d = $e, aa += 7) : (d = n, 0 === pa && Ea(et)), d === n && (e.substr(aa, 7) === tt ? (d = tt, aa += 7) : (d = n, 0 === pa && Ea(rt)), d === n && (e.substr(aa, 7) === nt ? (d = nt, aa += 7) : (d = n, 0 === pa && Ea(it)), d === n && (e.substr(aa, 7) === ot ? (d = ot, aa += 7) : (d = n, 0 === pa && Ea(st)), d === n && (e.substr(aa, 7) === at ? (d = at, aa += 7) : (d = n, 0 === pa && Ea(lt)), d === n && (e.substr(aa, 6) === ct ? (d = ct, aa += 6) : (d = n, 0 === pa && Ea(dt)), d === n && (e.substr(aa, 8) === ht ? (d = ht, aa += 8) : (d = n, 0 === pa && Ea(pt)), d === n && (e.substr(aa, 5) === ut ? (d = ut, aa += 5) : (d = n, 0 === pa && Ea(gt)), d === n && (e.substr(aa, 8) === mt ? (d = mt, aa += 8) : (d = n, 0 === pa && Ea(ft)), d === n && (e.substr(aa, 7) === yt ? (d = yt, aa += 7) : (d = n, 0 === pa && Ea(vt)))))))))))), d !== n ? (125 === e.charCodeAt(aa) ? (u = h, aa++) : (u = n, 0 === pa && Ea(p)), u !== n && (v = Ia()) !== n && (b = Vl()) !== n && (x = Ia()) !== n ? (e.substr(aa, 4) === f ? (C = f, aa += 4) : (C = n, 0 === pa && Ea(y)), C !== n && (S = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (A = a, aa++) : (A = n, 0 === pa && Ea(l)), A !== n && (w = Ia()) !== n ? (e.substr(aa, 11) === Je ? (E = Je, aa += 11) : (E = n, 0 === pa && Ea(Xe)), E === n && (e.substr(aa, 7) === $e ? (E = $e, aa += 7) : (E = n, 0 === pa && Ea(et)), E === n && (e.substr(aa, 7) === nt ? (E = nt, aa += 7) : (E = n, 0 === pa && Ea(it)), E === n && (e.substr(aa, 7) === tt ? (E = tt, aa += 7) : (E = n, 0 === pa && Ea(rt)), E === n && (e.substr(aa, 7) === ot ? (E = ot, aa += 7) : (E = n, 0 === pa && Ea(st)), E === n && (e.substr(aa, 7) === at ? (E = at, aa += 7) : (E = n, 0 === pa && Ea(lt)), E === n && (e.substr(aa, 6) === ct ? (E = ct, aa += 6) : (E = n, 0 === pa && Ea(dt)), E === n && (e.substr(aa, 8) === ht ? (E = ht, aa += 8) : (E = n, 0 === pa && Ea(pt)), E === n && (e.substr(aa, 5) === ut ? (E = ut, aa += 5) : (E = n, 0 === pa && Ea(gt)), E === n && (e.substr(aa, 8) === mt ? (E = mt, aa += 8) : (E = n, 0 === pa && Ea(ft)), E === n && (e.substr(aa, 7) === yt ? (E = yt, aa += 7) : (E = n, 0 === pa && Ea(vt)))))))))))), E !== n && (k = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (O = h, aa++) : (O = n, 0 === pa && Ea(p)), O !== n && (D = Ia()) !== n ? (la = t, t = r = bt(d, b)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function pl() {
      var t, r, i, o, s;
      if (Ge.test(e.charAt(aa)) ? (t = e.charAt(aa), aa++) : (t = n, 0 === pa && Ea(Ke)), t === n) {
        if (t = aa, r = aa, 123 === e.charCodeAt(aa) ? (i = a, aa++) : (i = n, 0 === pa && Ea(l)), i !== n) {
          for (o = [], Ge.test(e.charAt(aa)) ? (s = e.charAt(aa), aa++) : (s = n, 0 === pa && Ea(Ke)), s === n && (w.test(e.charAt(aa)) ? (s = e.charAt(aa), aa++) : (s = n, 0 === pa && Ea(E))); s !== n;) o.push(s), Ge.test(e.charAt(aa)) ? (s = e.charAt(aa), aa++) : (s = n, 0 === pa && Ea(Ke)), s === n && (w.test(e.charAt(aa)) ? (s = e.charAt(aa), aa++) : (s = n, 0 === pa && Ea(E)));
          o !== n ? (125 === e.charCodeAt(aa) ? (s = h, aa++) : (s = n, 0 === pa && Ea(p)), s !== n ? r = i = [i, o, s] : (aa = r, r = n)) : (aa = r, r = n);
        } else aa = r, r = n;
        r !== n && (la = t, r = xt(r)), t = r;
      }
      return t;
    }
    function ul() {
      var t, r, i, o, s, a, l, c, d, h, p, u, v, b;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === g ? (i = g, aa += 6) : (i = n, 0 === pa && Ea(m)), i !== n && (o = Ia()) !== n ? (e.substr(aa, 7) === Ct ? (s = Ct, aa += 7) : (s = n, 0 === pa && Ea(St)), s !== n && (a = Ia()) !== n && (l = pl()) !== n && (c = Ia()) !== n && (d = Vl()) !== n && (h = Ia()) !== n ? (e.substr(aa, 4) === f ? (p = f, aa += 4) : (p = n, 0 === pa && Ea(y)), p !== n && (u = Ia()) !== n ? (e.substr(aa, 7) === Ct ? (v = Ct, aa += 7) : (v = n, 0 === pa && Ea(St)), v !== n && (b = Ia()) !== n ? (la = t, t = r = At(l, d)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function gl() {
      var t, r, i, o, s, a, l;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 5) === wt ? (i = wt, aa += 5) : (i = n, 0 === pa && Ea(Et)), i === n && (e.substr(aa, 5) === kt ? (i = kt, aa += 5) : (i = n, 0 === pa && Ea(Ot)), i === n && (e.substr(aa, 4) === Dt ? (i = Dt, aa += 4) : (i = n, 0 === pa && Ea(Pt)), i === n && (e.substr(aa, 4) === Mt ? (i = Mt, aa += 4) : (i = n, 0 === pa && Ea(It))))), i !== n ? (108 === e.charCodeAt(aa) ? (o = Tt, aa++) : (o = n, 0 === pa && Ea(Lt)), o === n && (114 === e.charCodeAt(aa) ? (o = Rt, aa++) : (o = n, 0 === pa && Ea(Bt))), o === n && (o = null), o !== n && (s = Ia()) !== n ? (47 === e.charCodeAt(aa) ? (a = Ft, aa++) : (a = n, 0 === pa && Ea(jt)), a === n && (e.substr(aa, 10) === _t ? (a = _t, aa += 10) : (a = n, 0 === pa && Ea(Nt)), a === n && (e.substr(aa, 5) === zt ? (a = zt, aa += 5) : (a = n, 0 === pa && Ea(Ht)), a === n && (e.substr(aa, 2) === Wt ? (a = Wt, aa += 2) : (a = n, 0 === pa && Ea(Vt)), a === n && (e.substr(aa, 7) === Ut ? (a = Ut, aa += 7) : (a = n, 0 === pa && Ea(qt)), a === n && (60 === e.charCodeAt(aa) ? (a = Gt, aa++) : (a = n, 0 === pa && Ea(Kt)), a === n && (40 === e.charCodeAt(aa) ? (a = Zt, aa++) : (a = n, 0 === pa && Ea(Yt)), a === n && (91 === e.charCodeAt(aa) ? (a = Qt, aa++) : (a = n, 0 === pa && Ea(Jt)), a === n && (e.substr(aa, 2) === H ? (a = H, aa += 2) : (a = n, 0 === pa && Ea(W)), a === n && (124 === e.charCodeAt(aa) ? (a = Xt, aa++) : (a = n, 0 === pa && Ea($t)), a === n && (e.substr(aa, 6) === er ? (a = er, aa += 6) : (a = n, 0 === pa && Ea(tr)), a === n && (e.substr(aa, 7) === rr ? (a = rr, aa += 7) : (a = n, 0 === pa && Ea(nr)), a === n && (e.substr(aa, 8) === ir ? (a = ir, aa += 8) : (a = n, 0 === pa && Ea(or)), a === n && (e.substr(aa, 8) === sr ? (a = sr, aa += 8) : (a = n, 0 === pa && Ea(ar)), a === n && (e.substr(aa, 10) === lr ? (a = lr, aa += 10) : (a = n, 0 === pa && Ea(cr)), a === n && (e.substr(aa, 10) === dr ? (a = dr, aa += 10) : (a = n, 0 === pa && Ea(hr)), a === n && (e.substr(aa, 12) === pr ? (a = pr, aa += 12) : (a = n, 0 === pa && Ea(ur)), a === n && (e.substr(aa, 12) === gr ? (a = gr, aa += 12) : (a = n, 0 === pa && Ea(mr)), a === n && (62 === e.charCodeAt(aa) ? (a = fr, aa++) : (a = n, 0 === pa && Ea(yr)), a === n && (41 === e.charCodeAt(aa) ? (a = vr, aa++) : (a = n, 0 === pa && Ea(br)), a === n && (93 === e.charCodeAt(aa) ? (a = xr, aa++) : (a = n, 0 === pa && Ea(Cr)), a === n && (e.substr(aa, 2) === V ? (a = V, aa += 2) : (a = n, 0 === pa && Ea(U)), a === n && (e.substr(aa, 6) === Sr ? (a = Sr, aa += 6) : (a = n, 0 === pa && Ea(Ar)), a === n && (e.substr(aa, 7) === wr ? (a = wr, aa += 7) : (a = n, 0 === pa && Ea(Er))))))))))))))))))))))))), a !== n && (l = Ia()) !== n ? (la = t, t = r = kr(i, o, a)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function ml() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 5) === Or ? (i = Or, aa += 5) : (i = n, 0 === pa && Ea(Dr)), i !== n && (o = Ia()) !== n ? (91 === e.charCodeAt(aa) ? (s = Qt, aa++) : (s = n, 0 === pa && Ea(Jt)), s === n && (40 === e.charCodeAt(aa) ? (s = Zt, aa++) : (s = n, 0 === pa && Ea(Yt)), s === n && (e.substr(aa, 2) === H ? (s = H, aa += 2) : (s = n, 0 === pa && Ea(W)), s === n && (124 === e.charCodeAt(aa) ? (s = Xt, aa++) : (s = n, 0 === pa && Ea($t)), s === n && (e.substr(aa, 2) === Wt ? (s = Wt, aa += 2) : (s = n, 0 === pa && Ea(Vt)), s === n && (e.substr(aa, 7) === Pr ? (s = Pr, aa += 7) : (s = n, 0 === pa && Ea(Mr)), s === n && (e.substr(aa, 7) === Ir ? (s = Ir, aa += 7) : (s = n, 0 === pa && Ea(Tr)), s === n && (47 === e.charCodeAt(aa) ? (s = Ft, aa++) : (s = n, 0 === pa && Ea(jt)), s === n && (124 === e.charCodeAt(aa) ? (s = Xt, aa++) : (s = n, 0 === pa && Ea($t)), s === n && (60 === e.charCodeAt(aa) ? (s = Gt, aa++) : (s = n, 0 === pa && Ea(Kt)), s === n && (e.substr(aa, 7) === Lr ? (s = Lr, aa += 7) : (s = n, 0 === pa && Ea(Rr)), s === n && (e.substr(aa, 5) === zt ? (s = zt, aa += 5) : (s = n, 0 === pa && Ea(Ht)), s === n && (e.substr(aa, 5) === Br ? (s = Br, aa += 5) : (s = n, 0 === pa && Ea(Fr)), s === n && (e.substr(aa, 6) === er ? (s = er, aa += 6) : (s = n, 0 === pa && Ea(tr)), s === n && (e.substr(aa, 7) === rr ? (s = rr, aa += 7) : (s = n, 0 === pa && Ea(nr)), s === n && (e.substr(aa, 8) === ir ? (s = ir, aa += 8) : (s = n, 0 === pa && Ea(or)), s === n && (e.substr(aa, 8) === sr ? (s = sr, aa += 8) : (s = n, 0 === pa && Ea(ar)), s === n && (e.substr(aa, 10) === lr ? (s = lr, aa += 10) : (s = n, 0 === pa && Ea(cr)), s === n && (e.substr(aa, 10) === dr ? (s = dr, aa += 10) : (s = n, 0 === pa && Ea(hr)), s === n && (e.substr(aa, 12) === pr ? (s = pr, aa += 12) : (s = n, 0 === pa && Ea(ur)), s === n && (e.substr(aa, 12) === gr ? (s = gr, aa += 12) : (s = n, 0 === pa && Ea(mr)), s === n && (46 === e.charCodeAt(aa) ? (s = jr, aa++) : (s = n, 0 === pa && Ea(_r))))))))))))))))))))))), s !== n && (a = Ia()) !== n ? (la = t, t = r = Nr(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function fl() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 7) === zr ? (i = zr, aa += 7) : (i = n, 0 === pa && Ea(Hr)), i !== n && (o = Ia()) !== n ? (124 === e.charCodeAt(aa) ? (s = Xt, aa++) : (s = n, 0 === pa && Ea($t)), s !== n && (a = Ia()) !== n ? (la = t, t = r = Wr(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function yl() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === Vr ? (i = Vr, aa += 6) : (i = n, 0 === pa && Ea(Ur)), i !== n && (o = Ia()) !== n ? (93 === e.charCodeAt(aa) ? (s = xr, aa++) : (s = n, 0 === pa && Ea(Cr)), s === n && (41 === e.charCodeAt(aa) ? (s = vr, aa++) : (s = n, 0 === pa && Ea(br)), s === n && (e.substr(aa, 2) === V ? (s = V, aa += 2) : (s = n, 0 === pa && Ea(U)), s === n && (124 === e.charCodeAt(aa) ? (s = Xt, aa++) : (s = n, 0 === pa && Ea($t)), s === n && (e.substr(aa, 2) === Wt ? (s = Wt, aa += 2) : (s = n, 0 === pa && Ea(Vt)), s === n && (e.substr(aa, 7) === qr ? (s = qr, aa += 7) : (s = n, 0 === pa && Ea(Gr)), s === n && (e.substr(aa, 7) === Kr ? (s = Kr, aa += 7) : (s = n, 0 === pa && Ea(Zr)), s === n && (e.substr(aa, 10) === _t ? (s = _t, aa += 10) : (s = n, 0 === pa && Ea(Nt)), s === n && (124 === e.charCodeAt(aa) ? (s = Xt, aa++) : (s = n, 0 === pa && Ea($t)), s === n && (62 === e.charCodeAt(aa) ? (s = fr, aa++) : (s = n, 0 === pa && Ea(yr)), s === n && (e.substr(aa, 7) === Ut ? (s = Ut, aa += 7) : (s = n, 0 === pa && Ea(qt)), s === n && (e.substr(aa, 5) === zt ? (s = zt, aa += 5) : (s = n, 0 === pa && Ea(Ht)), s === n && (e.substr(aa, 5) === Br ? (s = Br, aa += 5) : (s = n, 0 === pa && Ea(Fr)), s === n && (e.substr(aa, 6) === Sr ? (s = Sr, aa += 6) : (s = n, 0 === pa && Ea(Ar)), s === n && (e.substr(aa, 7) === wr ? (s = wr, aa += 7) : (s = n, 0 === pa && Ea(Er)), s === n && (e.substr(aa, 8) === ir ? (s = ir, aa += 8) : (s = n, 0 === pa && Ea(or)), s === n && (e.substr(aa, 8) === sr ? (s = sr, aa += 8) : (s = n, 0 === pa && Ea(ar)), s === n && (e.substr(aa, 10) === lr ? (s = lr, aa += 10) : (s = n, 0 === pa && Ea(cr)), s === n && (e.substr(aa, 10) === dr ? (s = dr, aa += 10) : (s = n, 0 === pa && Ea(hr)), s === n && (e.substr(aa, 12) === pr ? (s = pr, aa += 12) : (s = n, 0 === pa && Ea(ur)), s === n && (e.substr(aa, 12) === gr ? (s = gr, aa += 12) : (s = n, 0 === pa && Ea(mr)), s === n && (46 === e.charCodeAt(aa) ? (s = jr, aa++) : (s = n, 0 === pa && Ea(_r))))))))))))))))))))))), s !== n && (a = Ia()) !== n ? (la = t, t = r = Yr(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function vl() {
      var t, r, i, o, s, c, d;
      return t = aa, (r = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (i = a, aa++) : (i = n, 0 === pa && Ea(l)), i !== n && (o = Ia()) !== n && (s = il()) !== n && (c = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (d = h, aa++) : (d = n, 0 === pa && Ea(p)), d !== n ? (la = t, t = r = Qr(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function bl() {
      var t, r, i;
      if (t = aa, r = [], P.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(M)), i !== n) for (; i !== n;) r.push(i), P.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(M));else r = n;
      return r !== n ? (Ge.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Ke)), i !== n ? (la = t, t = r = Jr(i)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function xl() {
      var t;
      return Xr.test(e.charAt(aa)) ? (t = e.charAt(aa), aa++) : (t = n, 0 === pa && Ea($r)), t === n && (t = bl()) === n && (t = vl()) === n && (t = ll()), t;
    }
    function Cl() {
      var t;
      return Ge.test(e.charAt(aa)) ? (t = e.charAt(aa), aa++) : (t = n, 0 === pa && Ea(Ke)), t === n && (t = bl()) === n && (t = vl()) === n && (t = ll()), t;
    }
    function Sl() {
      var t, r, i, o, s, a, l;
      return t = aa, (r = Ia()) !== n ? (91 === e.charCodeAt(aa) ? (i = Qt, aa++) : (i = n, 0 === pa && Ea(Jt)), i !== n && (o = Ia()) !== n ? ((s = Nl()) === n && (s = null), s !== n && (a = Ia()) !== n ? (93 === e.charCodeAt(aa) ? (l = xr, aa++) : (l = n, 0 === pa && Ea(Cr)), l !== n ? (la = t, t = r = Qr(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Al() {
      var e, t, r;
      return e = aa, (t = Rl()) !== n ? (la = aa, (r = (r = en(t)) ? void 0 : n) !== n ? (la = e, e = t = tn(t)) : (aa = e, e = n)) : (aa = e, e = n), e;
    }
    function wl() {
      var t, r, i, o, s, a, l, c;
      return t = aa, (r = Ia()) !== n && (i = Al()) !== n && (o = Ia()) !== n ? (s = aa, (a = Ia()) !== n ? (e.substr(aa, 7) === rn ? (l = rn, aa += 7) : (l = n, 0 === pa && Ea(nn)), l === n && (e.substr(aa, 9) === on ? (l = on, aa += 9) : (l = n, 0 === pa && Ea(sn))), l !== n ? s = a = [a, l] : (aa = s, s = n)) : (aa = s, s = n), s === n && (s = null), s !== n && (a = Ia()) !== n ? ((l = _l()) === n && (l = null), l !== n && (c = Ia()) !== n ? (la = t, t = r = an(i, s, l)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function El() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 6) === ln ? (i = ln, aa += 6) : (i = n, 0 === pa && Ea(cn)), i === n && (e.substr(aa, 5) === dn ? (i = dn, aa += 5) : (i = n, 0 === pa && Ea(hn)), i === n && (e.substr(aa, 6) === pn ? (i = pn, aa += 6) : (i = n, 0 === pa && Ea(un)), i === n && (e.substr(aa, 6) === gn ? (i = gn, aa += 6) : (i = n, 0 === pa && Ea(mn)), i === n && (e.substr(aa, 6) === fn ? (i = fn, aa += 6) : (i = n, 0 === pa && Ea(yn)), i === n && (e.substr(aa, 7) === vn ? (i = vn, aa += 7) : (i = n, 0 === pa && Ea(bn)), i === n && (e.substr(aa, 7) === xn ? (i = xn, aa += 7) : (i = n, 0 === pa && Ea(Cn)), i === n && (e.substr(aa, 9) === Sn ? (i = Sn, aa += 9) : (i = n, 0 === pa && Ea(An)), i === n && (e.substr(aa, 8) === wn ? (i = wn, aa += 8) : (i = n, 0 === pa && Ea(En)), i === n && (e.substr(aa, 9) === kn ? (i = kn, aa += 9) : (i = n, 0 === pa && Ea(On))))))))))), i !== n && (o = xl()) !== n && (s = Cl()) !== n && (a = Ia()) !== n ? (la = t, t = r = Dn(i, o, s)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function kl() {
      var t, r, i, o, s, a;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 5) === Pn ? (i = Pn, aa += 5) : (i = n, 0 === pa && Ea(Mn)), i === n && (e.substr(aa, 12) === In ? (i = In, aa += 12) : (i = n, 0 === pa && Ea(Tn)), i === n && (e.substr(aa, 11) === Ln ? (i = Ln, aa += 11) : (i = n, 0 === pa && Ea(Rn)), i === n && (e.substr(aa, 15) === Bn ? (i = Bn, aa += 15) : (i = n, 0 === pa && Ea(Fn)), i === n && (e.substr(aa, 16) === jn ? (i = jn, aa += 16) : (i = n, 0 === pa && Ea(_n)), i === n && (e.substr(aa, 17) === Nn ? (i = Nn, aa += 17) : (i = n, 0 === pa && Ea(zn)), i === n && (e.substr(aa, 15) === Hn ? (i = Hn, aa += 15) : (i = n, 0 === pa && Ea(Wn)), i === n && (e.substr(aa, 17) === Vn ? (i = Vn, aa += 17) : (i = n, 0 === pa && Ea(Un)), i === n && (e.substr(aa, 16) === qn ? (i = qn, aa += 16) : (i = n, 0 === pa && Ea(Gn)), i === n && (e.substr(aa, 19) === Kn ? (i = Kn, aa += 19) : (i = n, 0 === pa && Ea(Zn)), i === n && (e.substr(aa, 11) === Yn ? (i = Yn, aa += 11) : (i = n, 0 === pa && Ea(Qn)), i === n && (e.substr(aa, 8) === Jn ? (i = Jn, aa += 8) : (i = n, 0 === pa && Ea(Xn)), i === n && (e.substr(aa, 18) === $n ? (i = $n, aa += 18) : (i = n, 0 === pa && Ea(ei)), i === n && (e.substr(aa, 16) === ti ? (i = ti, aa += 16) : (i = n, 0 === pa && Ea(ri)), i === n && (e.substr(aa, 17) === ni ? (i = ni, aa += 17) : (i = n, 0 === pa && Ea(ii)), i === n && (e.substr(aa, 19) === oi ? (i = oi, aa += 19) : (i = n, 0 === pa && Ea(si)), i === n && (e.substr(aa, 11) === ai ? (i = ai, aa += 11) : (i = n, 0 === pa && Ea(li)), i === n && (e.substr(aa, 16) === ci ? (i = ci, aa += 16) : (i = n, 0 === pa && Ea(di)), i === n && (e.substr(aa, 12) === hi ? (i = hi, aa += 12) : (i = n, 0 === pa && Ea(pi)))))))))))))))))))), i !== n ? ((o = Sl()) === n && (o = null), o !== n && (s = xl()) !== n && (a = Ia()) !== n ? (la = t, t = r = ui(i, o, s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Ol() {
      var t, r, i, o, s, a, l;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 10) === gi ? (i = gi, aa += 10) : (i = n, 0 === pa && Ea(mi)), i === n && (e.substr(aa, 11) === fi ? (i = fi, aa += 11) : (i = n, 0 === pa && Ea(yi))), i !== n && (o = xl()) !== n && (s = Ia()) !== n ? ((a = _l()) === n && (a = null), a !== n && (l = Ia()) !== n ? (la = t, t = r = vi(i, o, a)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Dl() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 14) === bi ? (i = bi, aa += 14) : (i = n, 0 === pa && Ea(xi)), i === n && (e.substr(aa, 10) === Ci ? (i = Ci, aa += 10) : (i = n, 0 === pa && Ea(Si)), i === n && (e.substr(aa, 6) === Ai ? (i = Ai, aa += 6) : (i = n, 0 === pa && Ea(wi)), i === n && (e.substr(aa, 8) === Ei ? (i = Ei, aa += 8) : (i = n, 0 === pa && Ea(ki)), i === n && (e.substr(aa, 4) === Oi ? (i = Oi, aa += 4) : (i = n, 0 === pa && Ea(Di)), i === n && (e.substr(aa, 4) === Pi ? (i = Pi, aa += 4) : (i = n, 0 === pa && Ea(Mi)), i === n && (e.substr(aa, 5) === Ii ? (i = Ii, aa += 5) : (i = n, 0 === pa && Ea(Ti)), i === n && (e.substr(aa, 6) === Li ? (i = Li, aa += 6) : (i = n, 0 === pa && Ea(Ri)), i === n && (e.substr(aa, 7) === Bi ? (i = Bi, aa += 7) : (i = n, 0 === pa && Ea(Fi)), i === n && (e.substr(aa, 9) === ji ? (i = ji, aa += 9) : (i = n, 0 === pa && Ea(_i)), i === n && (e.substr(aa, 10) === Ni ? (i = Ni, aa += 10) : (i = n, 0 === pa && Ea(zi)), i === n && (e.substr(aa, 15) === Hi ? (i = Hi, aa += 15) : (i = n, 0 === pa && Ea(Wi)), i === n && (e.substr(aa, 5) === Vi ? (i = Vi, aa += 5) : (i = n, 0 === pa && Ea(Ui)), i === n && (e.substr(aa, 5) === qi ? (i = qi, aa += 5) : (i = n, 0 === pa && Ea(Gi)), i === n && (e.substr(aa, 9) === Ki ? (i = Ki, aa += 9) : (i = n, 0 === pa && Ea(Zi)), i === n && (e.substr(aa, 8) === Yi ? (i = Yi, aa += 8) : (i = n, 0 === pa && Ea(Qi)), i === n && (e.substr(aa, 4) === Ji ? (i = Ji, aa += 4) : (i = n, 0 === pa && Ea(Xi)), i === n && (e.substr(aa, 6) === $i ? (i = $i, aa += 6) : (i = n, 0 === pa && Ea(eo)), i === n && (e.substr(aa, 6) === to ? (i = to, aa += 6) : (i = n, 0 === pa && Ea(ro)), i === n && (e.substr(aa, 6) === no ? (i = no, aa += 6) : (i = n, 0 === pa && Ea(io)), i === n && (e.substr(aa, 6) === oo ? (i = oo, aa += 6) : (i = n, 0 === pa && Ea(so)), i === n && (e.substr(aa, 4) === ao ? (i = ao, aa += 4) : (i = n, 0 === pa && Ea(lo)), i === n && (e.substr(aa, 10) === co ? (i = co, aa += 10) : (i = n, 0 === pa && Ea(ho)), i === n && (e.substr(aa, 8) === po ? (i = po, aa += 8) : (i = n, 0 === pa && Ea(uo)), i === n && (e.substr(aa, 4) === go ? (i = go, aa += 4) : (i = n, 0 === pa && Ea(mo)), i === n && (e.substr(aa, 7) === fo ? (i = fo, aa += 7) : (i = n, 0 === pa && Ea(yo)), i === n && (e.substr(aa, 8) === vo ? (i = vo, aa += 8) : (i = n, 0 === pa && Ea(bo)), i === n && (e.substr(aa, 8) === xo ? (i = xo, aa += 8) : (i = n, 0 === pa && Ea(Co)), i === n && (e.substr(aa, 11) === So ? (i = So, aa += 11) : (i = n, 0 === pa && Ea(Ao)), i === n && (e.substr(aa, 9) === wo ? (i = wo, aa += 9) : (i = n, 0 === pa && Ea(Eo)), i === n && (e.substr(aa, 13) === ko ? (i = ko, aa += 13) : (i = n, 0 === pa && Ea(Oo)), i === n && (e.substr(aa, 6) === Do ? (i = Do, aa += 6) : (i = n, 0 === pa && Ea(Po)), i === n && (e.substr(aa, 12) === Mo ? (i = Mo, aa += 12) : (i = n, 0 === pa && Ea(Io)))))))))))))))))))))))))))))))))), i !== n && (o = xl()) !== n && (s = Ia()) !== n ? (la = t, t = r = To(i, o)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Pl() {
      var t, r, i;
      for (t = aa, r = [], Lo.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Ro)); i !== n;) r.push(i), Lo.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Ro));
      return r !== n && (la = t, r = Bo()), t = r;
    }
    function Ml() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (i = a, aa++) : (i = n, 0 === pa && Ea(l)), i !== n && (o = Pl()) !== n ? (125 === e.charCodeAt(aa) ? (s = h, aa++) : (s = n, 0 === pa && Ea(p)), s !== n ? (la = t, t = r = Fo(o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Il() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 5) === jo ? (i = jo, aa += 5) : (i = n, 0 === pa && Ea(_o)), i === n && (e.substr(aa, 5) === Vi ? (i = Vi, aa += 5) : (i = n, 0 === pa && Ea(Ui))), i !== n ? (Xr.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea($r)), o === n && (o = bl()) === n && (o = Ml()), o !== n && (s = Ia()) !== n ? (la = t, t = r = No(o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Tl() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (e.substr(aa, 7) === zo ? (i = zo, aa += 7) : (i = n, 0 === pa && Ea(Ho)), i === n && (e.substr(aa, 7) === Wo ? (i = Wo, aa += 7) : (i = n, 0 === pa && Ea(Vo)), i === n && (e.substr(aa, 11) === Uo ? (i = Uo, aa += 11) : (i = n, 0 === pa && Ea(qo)), i === n && (e.substr(aa, 7) === Go ? (i = Go, aa += 7) : (i = n, 0 === pa && Ea(Ko)), i === n && (e.substr(aa, 7) === Zo ? (i = Zo, aa += 7) : (i = n, 0 === pa && Ea(Yo)), i === n && (e.substr(aa, 8) === Qo ? (i = Qo, aa += 8) : (i = n, 0 === pa && Ea(Jo)), i === n && (e.substr(aa, 9) === Xo ? (i = Xo, aa += 9) : (i = n, 0 === pa && Ea($o)), i === n && (e.substr(aa, 7) === es ? (i = es, aa += 7) : (i = n, 0 === pa && Ea(ts)), i === n && (e.substr(aa, 7) === rs ? (i = rs, aa += 7) : (i = n, 0 === pa && Ea(ns)), i === n && (e.substr(aa, 8) === is ? (i = is, aa += 8) : (i = n, 0 === pa && Ea(os)), i === n && (e.substr(aa, 3) === ss ? (i = ss, aa += 3) : (i = n, 0 === pa && Ea(as)), i === n && (e.substr(aa, 3) === ls ? (i = ls, aa += 3) : (i = n, 0 === pa && Ea(cs)), i === n && (e.substr(aa, 3) === ds ? (i = ds, aa += 3) : (i = n, 0 === pa && Ea(hs)), i === n && (e.substr(aa, 3) === ps ? (i = ps, aa += 3) : (i = n, 0 === pa && Ea(us)), i === n && (e.substr(aa, 4) === gs ? (i = gs, aa += 4) : (i = n, 0 === pa && Ea(ms)), i === n && (e.substr(aa, 5) === fs ? (i = fs, aa += 5) : (i = n, 0 === pa && Ea(ys)), i === n && (e.substr(aa, 3) === vs ? (i = vs, aa += 3) : (i = n, 0 === pa && Ea(bs)), i === n && (e.substr(aa, 3) === xs ? (i = xs, aa += 3) : (i = n, 0 === pa && Ea(Cs))))))))))))))))))), i !== n && (o = xl()) !== n && (s = Ia()) !== n ? (la = t, t = r = Ss(i, o)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Ll() {
      var t, r, i, o, s;
      return t = aa, (r = Ia()) !== n ? (92 === e.charCodeAt(aa) ? (i = G, aa++) : (i = n, 0 === pa && Ea(K)), i !== n ? (32 === e.charCodeAt(aa) ? (o = Z, aa++) : (o = n, 0 === pa && Ea(Y)), o === n && (44 === e.charCodeAt(aa) ? (o = As, aa++) : (o = n, 0 === pa && Ea(ws)), o === n && (58 === e.charCodeAt(aa) ? (o = Es, aa++) : (o = n, 0 === pa && Ea(ks)), o === n && (59 === e.charCodeAt(aa) ? (o = Os, aa++) : (o = n, 0 === pa && Ea(Ds)), o === n && (33 === e.charCodeAt(aa) ? (o = Ps, aa++) : (o = n, 0 === pa && Ea(Ms)))))), o !== n && (s = Ia()) !== n ? (la = t, t = r = Is(o)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Rl() {
      var t, r, i, o;
      if (t = aa, 92 === e.charCodeAt(aa) ? (r = G, aa++) : (r = n, 0 === pa && Ea(K)), r !== n) {
        if (i = [], Ts.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea(Ls)), o !== n) for (; o !== n;) i.push(o), Ts.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea(Ls));else i = n;
        i !== n ? (la = t, t = r = Rs()) : (aa = t, t = n);
      } else aa = t, t = n;
      return t;
    }
    function Bl() {
      var e, t, r, i, o;
      return e = aa, (t = Ia()) !== n && (r = Rl()) !== n && (i = Ia()) !== n ? (la = aa, (o = (o = Bs(r)) ? void 0 : n) !== n ? (la = e, e = t = Fs(r)) : (aa = e, e = n)) : (aa = e, e = n), e;
    }
    function Fl() {
      var t, r, i, o, s, c, d, u;
      return t = aa, (r = Ia()) !== n ? (123 === e.charCodeAt(aa) ? (i = a, aa++) : (i = n, 0 === pa && Ea(l)), i !== n && (o = Ia()) !== n && (s = il()) !== n && (c = Ia()) !== n ? (125 === e.charCodeAt(aa) ? (d = h, aa++) : (d = n, 0 === pa && Ea(p)), d !== n && (u = Ia()) !== n ? (la = t, t = r = js(s)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function jl() {
      var t, r, i, o;
      if (t = aa, 37 === e.charCodeAt(aa) ? (r = _s, aa++) : (r = n, 0 === pa && Ea(Ns)), r !== n) {
        for (i = [], zs.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea(Hs)); o !== n;) i.push(o), zs.test(e.charAt(aa)) ? (o = e.charAt(aa), aa++) : (o = n, 0 === pa && Ea(Hs));
        i !== n ? (la = t, t = r = Ws(i)) : (aa = t, t = n);
      } else aa = t, t = n;
      return t;
    }
    function _l() {
      var t, r, i, o, s, a, l, c, d, h;
      return t = aa, (r = Ia()) !== n ? (94 === e.charCodeAt(aa) ? (i = Vs, aa++) : (i = n, 0 === pa && Ea(Us)), i === n && (95 === e.charCodeAt(aa) ? (i = qs, aa++) : (i = n, 0 === pa && Ea(Gs))), i !== n && (o = Ia()) !== n ? (Ge.test(e.charAt(aa)) ? (s = e.charAt(aa), aa++) : (s = n, 0 === pa && Ea(Ke)), s === n && (s = vl()) === n && (s = ll()), s !== n && (a = Ia()) !== n ? (l = aa, 94 === e.charCodeAt(aa) ? (c = Vs, aa++) : (c = n, 0 === pa && Ea(Us)), c === n && (95 === e.charCodeAt(aa) ? (c = qs, aa++) : (c = n, 0 === pa && Ea(Gs))), c !== n && (d = Ia()) !== n ? (Ge.test(e.charAt(aa)) ? (h = e.charAt(aa), aa++) : (h = n, 0 === pa && Ea(Ke)), h === n && (h = vl()) === n && (h = ll()), h !== n ? l = c = [c, d, h] : (aa = l, l = n)) : (aa = l, l = n), l === n && (l = null), l !== n ? (la = t, t = r = Ks(i, s, l)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    function Nl() {
      var e, t, r;
      for (e = aa, t = [], (r = zl()) === n && (r = nl()); r !== n;) t.push(r), (r = zl()) === n && (r = nl());
      return t !== n && (la = e, t = Zs(t)), e = t;
    }
    function zl() {
      var e, t, r;
      if (e = aa, t = [], (r = Wl()) === n && (r = cl()), r !== n) for (; r !== n;) t.push(r), (r = Wl()) === n && (r = cl());else t = n;
      return t !== n ? ((r = nl()) === n && (r = null), r !== n ? (la = e, e = t = Ys(t, r)) : (aa = e, e = n)) : (aa = e, e = n), e;
    }
    function Hl() {
      var t, r, i;
      if (t = aa, r = [], Qs.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Js)), i !== n) for (; i !== n;) r.push(i), Qs.test(e.charAt(aa)) ? (i = e.charAt(aa), aa++) : (i = n, 0 === pa && Ea(Js));else r = n;
      return r !== n && (la = t, r = _e()), t = r;
    }
    function Wl() {
      var e, t, r;
      if (e = aa, t = [], (r = Hl()) === n && (r = Ua()) === n && (r = Ba()) === n && (r = Fa()), r !== n) for (; r !== n;) t.push(r), (r = Hl()) === n && (r = Ua()) === n && (r = Ba()) === n && (r = Fa());else t = n;
      return t !== n && (la = e, t = Xs(t)), e = t;
    }
    function Vl() {
      var e, t, r, i;
      if (e = aa, (t = Ia()) !== n) {
        for (r = [], (i = Gl()) === n && (i = nl()) === n && (i = ql()); i !== n;) r.push(i), (i = Gl()) === n && (i = nl()) === n && (i = ql());
        r !== n && (i = Ia()) !== n ? (la = e, e = t = $s(r)) : (aa = e, e = n);
      } else aa = e, e = n;
      return e;
    }
    function Ul() {
      var t;
      return e.substr(aa, 6) === ea ? (t = ea, aa += 6) : (t = n, 0 === pa && Ea(ta)), t;
    }
    function ql() {
      var e, t, r, i;
      return e = aa, (t = Ia()) !== n && (r = Ul()) !== n && (i = Ia()) !== n ? (la = e, e = t = ra(r)) : (aa = e, e = n), e;
    }
    function Gl() {
      var t, r, i, o, s, a, l;
      if (t = aa, (r = Ia()) !== n) {
        if ((i = Ul()) === n && (i = null), i !== n) {
          if ((o = Ia()) !== n) {
            if (s = [], (a = Kl()) === n && (38 === e.charCodeAt(aa) ? (a = na, aa++) : (a = n, 0 === pa && Ea(ia))), a !== n) for (; a !== n;) s.push(a), (a = Kl()) === n && (38 === e.charCodeAt(aa) ? (a = na, aa++) : (a = n, 0 === pa && Ea(ia)));else s = n;
            s !== n && (a = Ia()) !== n ? ((l = nl()) === n && (l = null), l !== n ? (la = t, t = r = oa(i, s, l)) : (aa = t, t = n)) : (aa = t, t = n);
          } else aa = t, t = n;
        } else aa = t, t = n;
      } else aa = t, t = n;
      return t;
    }
    function Kl() {
      var t, r, i;
      if (t = aa, r = [], (i = al()) === n && (i = cl()), i !== n) for (; i !== n;) r.push(i), (i = al()) === n && (i = cl());else r = n;
      return r !== n ? (38 === e.charCodeAt(aa) ? (i = na, aa++) : (i = n, 0 === pa && Ea(ia)), i === n && (i = null), i !== n ? (la = t, t = r = sa(r)) : (aa = t, t = n)) : (aa = t, t = n), t;
    }
    var Zl = t._,
      Yl = t.symbolProvider,
      Ql = t.openBraces,
      Jl = t.closeBraces,
      Xl = t.generator,
      $l = t.modelHelper,
      ec = t.modelCreator;
    function tc() {
      return {
        id: Xl.nextId(),
        blocks: []
      };
    }
    var rc = t.grammarHelper.processLines,
      nc = {
        "\\tilde": "~",
        "\\hat": "^"
      },
      ic = [];
    function oc(e) {
      var t,
        r = Yl.getCustomSymbolComponent("\\math-container").toModel(!0, e);
      return {
        id: Xl.nextId(),
        singleBlock: !0,
        mathContainer: !0,
        blocks: [r]
      };
    }
    function sc(e, t) {
      for (var r = 0; r < e.length; r++) e[r].style || (e[r].style = {}), e[r].style.align = t;
      return e;
    }
    function ac(e, t) {
      return {
        id: Xl.nextId(),
        type: e,
        text: t
      };
    }
    function lc(e) {
      return {
        id: Xl.nextId(),
        type: "composite",
        text: e
      };
    }
    function cc() {
      return {
        text: ""
      };
    }
    function dc(e) {
      return {
        id: Xl.nextId(),
        type: "unknown-command",
        text: e
      };
    }
    function hc(e) {
      return {
        id: Xl.nextId(),
        text: e
      };
    }
    if ((ua = o()) !== n && aa === e.length) return ua;
    throw ua !== n && aa < e.length && Ea({
      type: "end"
    }), Oa(ha, da < e.length ? e.charAt(da) : null, da < e.length ? wa(da, da + 1) : wa(da, da));
  }
  t(r, Error), r.buildMessage = function (e, t) {
    var r = {
      literal: function (e) {
        return '"' + i(e.text) + '"';
      },
      class: function (e) {
        var t = "",
          r;
        for (r = 0; r < e.parts.length; r++) t += e.parts[r] instanceof Array ? o(e.parts[r][0]) + "-" + o(e.parts[r][1]) : o(e.parts[r]);
        return "[" + (e.inverted ? "^" : "") + t + "]";
      },
      any: function (e) {
        return "any character";
      },
      end: function (e) {
        return "end of input";
      },
      other: function (e) {
        return e.description;
      }
    };
    function n(e) {
      return e.charCodeAt(0).toString(16).toUpperCase();
    }
    function i(e) {
      return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
        return "\\x0" + n(e);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return "\\x" + n(e);
      });
    }
    function o(e) {
      return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
        return "\\x0" + n(e);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
        return "\\x" + n(e);
      });
    }
    function s(e) {
      return r[e.type](e);
    }
    function a(e) {
      var t = new Array(e.length),
        r,
        n;
      for (r = 0; r < e.length; r++) t[r] = s(e[r]);
      if (t.sort(), t.length > 0) {
        for (r = 1, n = 1; r < t.length; r++) t[r - 1] !== t[r] && (t[n] = t[r], n++);
        t.length = n;
      }
      switch (t.length) {
        case 1:
          return t[0];
        case 2:
          return t[0] + " or " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
      }
    }
    function l(e) {
      return e ? '"' + i(e) + '"' : "end of input";
    }
    return "Expected " + a(e) + " but " + l(t) + " found.";
  }, e.exports = {
    SyntaxError: r,
    parse: n
  };
};
