/* module 98489 — 89892 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    g: () => F
  });
  var n = r(64467),
    i = r(70224),
    o = r(47286),
    s = r(40927),
    a = r.n(s),
    l = "/cas-sympy-module-worker.js";
  class c {
    constructor() {
      (0, n.A)(this, "worker", void 0), (0, n.A)(this, "initPromise", void 0), (0, n.A)(this, "initialized", !1), (0, n.A)(this, "progressCallbacks", []), (0, n.A)(this, "lastProgress", {
        loaded: 0,
        total: 2
      }), (0, n.A)(this, "lastRunResolve", void 0), (0, n.A)(this, "lastRunReject", void 0), (0, n.A)(this, "lastRunRawCommandResolve", void 0), (0, n.A)(this, "onRunLog", void 0);
    }
    isInitialized() {
      return this.initialized;
    }
    init(e, t) {
      return this.addProgressCallback(t), this.initialized ? (this.notifyProgress(2, 2), Promise.resolve()) : (this.initPromise || (this.initPromise = new Promise((t, r) => {
        var n = this.createWorker();
        n.onmessage = r => {
          var n = r.data;
          switch (n.type) {
            case "init-progress-response":
              this.notifyProgress(n.loaded, n.total);
              break;
            case "init-done-response":
              this.worker.postMessage({
                type: "set-ctx-request",
                ctx: e
              });
              break;
            case "init-ctx-done-response":
              this.initialized = !0, this.notifyProgress(this.lastProgress.total, this.lastProgress.total), t();
              break;
            case "run-response":
              this.lastRunResolve && this.lastRunResolve(n.blocks), this.lastRunResolve = void 0, this.lastRunReject = void 0;
              break;
            case "run-response-error":
              this.lastRunReject && this.lastRunReject(new Error(n.message || "CAS operation failed")), this.lastRunResolve = void 0, this.lastRunReject = void 0;
              break;
            case "run-raw-command-response":
              this.lastRunRawCommandResolve && this.lastRunRawCommandResolve(n.message), this.lastRunRawCommandResolve = void 0;
              break;
            case "run-log-response":
              this.onRunLog && this.onRunLog(n.log);
          }
        }, n.onerror = e => {
          console.error(e), this.initPromise = void 0, r(e instanceof Error ? e : new Error("Could not initialize CAS worker"));
        }, this.worker = n;
      })), this.initPromise);
    }
    createWorker() {
      return new Worker(l, {
        type: "module"
      });
    }
    addProgressCallback(e) {
      this.progressCallbacks.indexOf(e) < 0 && this.progressCallbacks.push(e), e(this.lastProgress.loaded, this.lastProgress.total);
    }
    notifyProgress(e, t) {
      this.lastProgress = {
        loaded: e,
        total: t
      }, this.progressCallbacks.forEach(r => r(e, t));
    }
    run(e) {
      return new Promise((t, r) => {
        this.lastRunResolve = t, this.lastRunReject = r, this.worker.postMessage({
          type: "run-request",
          action: e
        });
      });
    }
    runRawCode(e, t) {
      return new Promise(r => {
        this.lastRunRawCommandResolve = r, this.worker.postMessage({
          type: "run-raw-request",
          code: e,
          dump: t
        });
      });
    }
  }
  var d = new c(),
    h = r(98095);
  function p(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = u(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function u(e, t) {
    if (e) {
      if ("string" == typeof e) return g(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0;
    }
  }
  function g(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  class m extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "unmounted", !1), (0, n.A)(this, "state", {
        loaded: 0,
        total: 2
      });
    }
    componentDidMount() {
      var e = h.A.getAllSymbols().filter(e => {
        if ("composite" == e.type) {
          var t = h.A.getCustomSymbolComponent(e.names[0]);
          return t && t.isConstantText && t.isOperatorName;
        }
      }).map(e => e.names[0].slice(1));
      m.extraFuncNames.forEach(t => {
        e.indexOf(t) < 0 && e.push(t);
      });
      var t = {},
        r = p(h.A.getAllTextSymbols()),
        n;
      try {
        for (r.s(); !(n = r.n()).done;) {
          var i = n.value;
          if ("A" == i.category) {
            var o = p(i.names),
              s;
            try {
              for (o.s(); !(s = o.n()).done;) {
                var a = s.value;
                "\\" == a[0] && a.length >= 3 && !/[\{\}]/.test(a) && (t[a.substr(1)] = i.symbol);
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      console.log(t), this.props.casEngine.init({
        constantTextFuncs: e,
        symbolLatexNames: t
      }, (e, t) => {
        this.unmounted || this.setState({
          loaded: e,
          total: t
        });
      }).then(() => {
        this.unmounted || this.props.onLoaded();
      });
    }
    componentWillUnmount() {
      this.unmounted = !0;
    }
    render() {
      var e = this.state,
        t = e.loaded,
        r = e.total,
        n = r > 0 ? "".concat((t / r * 100).toFixed(2), "% (").concat(t, "/").concat(r, " steps)") : "Preparing CAS engine...",
        i = this.getStepText(t, r);
      return a().createElement("div", {
        style: {
          fontSize: 13,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }
      }, a().createElement("span", null, "CAS Engine (using SymPy) is Loading ..."), a().createElement("span", {
        style: {
          paddingTop: 5
        }
      }, i), a().createElement("span", {
        style: {
          paddingTop: 5
        }
      }, n));
    }
    getStepText(e, t) {
      return t <= 0 ? "Preparing resources" : e <= 0 ? "Loading Pyodide runtime" : e < t ? "Loading SymPy package" : "Starting CAS context";
    }
  }
  (0, n.A)(m, "extraFuncNames", ["integer", "positive", "negative", "zero", "nonzero", "real", "rational", "irrational", "algebraic", "transcendental", "complex", "imaginary", "even", "odd", "prime", "finite", "infinite", "commutative", "hermitian", "hankel1", "hankel2", "jn", "yn", "hn1", "hn2", "fresnels", "fresnelc", "lucas", "tribonacci", "reduced_totient", "primenu", "primeomega", "stieltjes", "catalan", "bernoulli", "euler", "bell", "expint", "chebyshevt", "chebyshevu", "legendre", "laguerre", "hermite", "elliptic_k", "elliptic_f", "elliptic_e", "elliptic_pi", "dirichlet_eta", "lerchphi", "jacobi", "gegenbauer", "assoc_legendre", "assoc_laguerre", "divisor_sigma", "udivisor_sigma", "polar_lift", "mathieuc", "mathieus", "mathieucprime", "mathieusprime", "ynm", "znm", "meijerg", "hyper", "factorial", "factorial2", "subfactorial", "DiracDelta", "Heaviside", "KroneckerDelta", "LeviCivita", "LambertW", "SingularityFunction", "FallingFactorial", "RisingFactorial", "TensorProduct", "KroneckerProduct", "HadamardProduct", "HadamardPower", "Trace", "tr"]);
  var f = r(12488);
  class y extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        menuVisible: !1
      }), (0, n.A)(this, "rootElement", void 0), (0, n.A)(this, "setRootElement", e => {
        this.rootElement = e || void 0;
      }), (0, n.A)(this, "setHoverItem", e => {
        this.setState({
          hoverItem: e
        });
      }), (0, n.A)(this, "clearHoverItem", () => {
        this.setState({
          hoverItem: void 0
        });
      }), (0, n.A)(this, "handleToggleMenu", e => {
        e.preventDefault(), e.stopPropagation();
        var t = !this.state.menuVisible;
        this.setState({
          menuVisible: t
        }), t ? this.addOutsideClickListener() : this.removeOutsideClickListener();
      }), (0, n.A)(this, "handleToggleTerminal", e => {
        e.preventDefault(), e.stopPropagation(), this.props.onToggleTerminal(), this.closeMenu();
      }), (0, n.A)(this, "handleToggleAssuming", e => {
        e.preventDefault(), e.stopPropagation(), this.props.onToggleAssuming(), this.closeMenu();
      }), (0, n.A)(this, "handleDockModeChange", (e, t) => {
        e.preventDefault(), e.stopPropagation(), this.props.onDockModeChange(t), this.closeMenu();
      }), (0, n.A)(this, "handleClose", e => {
        e.preventDefault(), e.stopPropagation(), this.props.onClose(), this.closeMenu();
      }), (0, n.A)(this, "handleDocumentMouseDown", e => {
        this.rootElement && this.rootElement.contains(e.target) || this.closeMenu();
      }), (0, n.A)(this, "stopMouseDown", e => {
        e.preventDefault(), e.stopPropagation();
      }), (0, n.A)(this, "stopClick", e => {
        e.preventDefault(), e.stopPropagation();
      });
    }
    componentWillUnmount() {
      this.removeOutsideClickListener();
    }
    render() {
      return a().createElement("div", {
        ref: this.setRootElement,
        className: "tw:relative",
        onMouseDown: e => e.stopPropagation()
      }, a().createElement("button", {
        type: "button",
        className: this.getButtonClassName(),
        title: "CAS settings",
        style: {
          cursor: "default",
          outline: "none"
        },
        onMouseDown: this.handleToggleMenu,
        onClick: this.stopClick
      }, a().createElement("i", {
        className: "fa fa-cog"
      })), this.state.menuVisible ? this.renderMenu() : null);
    }
    getButtonClassName() {
      var e;
      return "tw:h-6 tw:w-7 tw:border-0 tw:bg-transparent tw:px-0 tw:text-xs " + ("light" == this.props.tone ? "tw:text-[color:var(--ui-on-accent,white)]" : "tw:text-[color:var(--ui-text,#374151)]");
    }
    renderMenu() {
      return a().createElement("div", {
        className: "tw:absolute tw:right-0 tw:top-7 tw:z-[10000] tw:min-w-[170px] tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)] tw:py-1 tw:text-xs tw:text-[color:var(--ui-text,#374151)] tw:shadow-md",
        onMouseDown: this.stopMouseDown
      }, a().createElement("button", {
        type: "button",
        className: "tw:block tw:w-full tw:border-0 tw:px-3 tw:py-1.5 tw:text-left",
        style: this.getMenuItemStyle("terminal"),
        onMouseEnter: () => this.setHoverItem("terminal"),
        onMouseLeave: this.clearHoverItem,
        onClick: this.handleToggleTerminal
      }, this.props.terminalVisible ? "Hide Terminal/Debug" : "Show Terminal/Debug"), a().createElement("button", {
        type: "button",
        className: "tw:block tw:w-full tw:border-0 tw:px-3 tw:py-1.5 tw:text-left",
        style: this.getMenuItemStyle("assuming"),
        onMouseEnter: () => this.setHoverItem("assuming"),
        onMouseLeave: this.clearHoverItem,
        onClick: this.handleToggleAssuming
      }, this.props.assumingVisible ? "Hide Assuming" : "Show Assuming"), this.renderDockMenuItem(), a().createElement("button", {
        type: "button",
        className: "tw:block tw:w-full tw:border-0 tw:px-3 tw:py-1.5 tw:text-left",
        style: this.getMenuItemStyle("close"),
        onMouseEnter: () => this.setHoverItem("close"),
        onMouseLeave: this.clearHoverItem,
        onClick: this.handleClose
      }, "Close"));
    }
    renderDockMenuItem() {
      var e = "right" == this.props.dockMode ? "floating" : "right",
        t = "right" == e ? "dock-right" : "dock-floating";
      return a().createElement("button", {
        type: "button",
        className: "tw:block tw:w-full tw:border-0 tw:px-3 tw:py-1.5 tw:text-left",
        style: this.getMenuItemStyle(t),
        onMouseEnter: () => this.setHoverItem(t),
        onMouseLeave: this.clearHoverItem,
        onClick: t => this.handleDockModeChange(t, e)
      }, "right" == e ? "Dock Right" : "Float");
    }
    getMenuItemStyle(e) {
      return {
        backgroundColor: this.state.hoverItem == e ? "var(--ui-surface-muted, #f0fdf4)" : "var(--ui-surface, white)",
        cursor: "default"
      };
    }
    closeMenu() {
      this.state.menuVisible && (this.setState({
        menuVisible: !1
      }), this.removeOutsideClickListener());
    }
    addOutsideClickListener() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown, !0);
    }
    removeOutsideClickListener() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown, !0);
    }
  }
  var v = r(85849);
  class b extends a().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "movingHdl", new v.A()), (0, n.A)(this, "handleMouseDown", e => {
        this.movingHdl.mouseDown(e, this.props.targetHeight);
      }), this.movingHdl.onMoving = (e, t, r) => {
        var n = this.props,
          i = n.minHeight,
          o,
          s = n.reverse ? -1 : 1,
          a = Math.max(r.customData + s * e.y, i);
        this.props.onTargetHeightChange(a);
      };
    }
    shouldComponentUpdate(e) {
      return this.props.show != e.show;
    }
    render() {
      var e = this.props.show;
      return a().createElement("div", {
        onMouseDown: this.handleMouseDown,
        style: {
          position: "relative",
          display: e ? "block" : "none"
        }
      }, a().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: -3,
          bottom: -3,
          right: 0,
          background: "tranparent",
          zIndex: 1,
          cursor: "ns-resize"
        }
      }));
    }
  }
  var x,
    C = "\nfrom sympy import *\nfrom sympy import core\nfrom sympy.functions.elementary import trigonometric \nfrom sympy.functions.elementary import hyperbolic \nfrom sympy.functions.elementary import exponential \nfrom sympy.functions.elementary import miscellaneous\nfrom sympy import S\n\nfrom sympy.printing.str import sstr\nfrom sympy.core.relational import Relational\nimport json\nimport math\n\ndef _rel_mul(self, other):\n    return self.func(self.lhs * other, self.rhs * other)\n\ndef _rel_rmul(self, other):\n    return self.func(other * self.lhs, other * self.rhs)\n\ndef _rel_truediv(self, other):\n    return self.func(self.lhs / other, self.rhs / other)\n\ndef _rel_pow(self, other):\n    return self.func(self.lhs ** other, self.rhs ** other)\n\nRelational.__mul__ = _rel_mul\nRelational.__rmul__ = _rel_rmul\nRelational.__truediv__ = _rel_truediv\nRelational.__pow__ = _rel_pow\n\n".concat("\n\nclass __McHdl:\n    def hdl_str(self, expr):\n        return {'func': 'Str','text': expr}\n\n    def hdl_tuple(self, expr):\n        return {'func': 'Tuple', 'args':  self.argsMap(expr) }\n\n    def hdl_Tuple(self, expr):\n        return {'func': 'Tuple', 'args':  self.argsMap(expr) }\n\n    def hdl_list(self, expr):\n        return {'func': 'List', 'args': self.argsMap(expr)}\n\n    def hdl_UndefinedFunction(self, expr):\n        return {'func': 'UndefinedFunction', 'name': str(expr), 'args': []}\n    \n    def hdl_Add(self, expr):\n        return {'func': 'Add', 'args': self.argsMap(expr.args)}\n\n    def hdl_Mul(self, expr):\n        return {'func': 'Mul', 'args': self.argsMap(expr.args)}\n    \n    def hdl_MatrixBase(self, expr):\n        l = []\n        for i in range(expr.rows):\n            for j in range(expr.cols):\n                l.append(self.hdlAll(expr[i, j]))\n\n        return {'func':'Matrix','args':l, 'row':expr.rows, 'col':expr.cols}\n    \n    def hdl_Max(self, expr):\n        return self.hdlGenericFunc('max',expr.args)\n\n    def hdl_Min(self, expr):\n        return self.hdlGenericFunc('min',expr.args)\n    \n    def hdl_Symbol(self, expr):\n        return {'func':'Symbol', 'name':expr.name }\n\n    def hdl_MatrixSymbol(self, expr):\n        return {'func':'MatrixSymbol', 'name':expr.name }\n\n    def hdl_RandomSymbol(self, expr):\n        return {'func':'Symbol', 'name':expr.name }\n    \n    def hdl_Poly(self, expr):\n        return {'func': 'Poly','args': [self.hdlAll(expr.domain)]+ self.argsMap(expr.args) }\n\n    def hdl_Integer(self, expr):\n        return {'func':'Integer', 'value':str(expr.p) }\n\n    def hdl_int(self, expr):\n        return {'func':'Integer', 'value':str(expr) }\n        \n    \n    def hdl_Dummy(self, expr):\n        return {'func':'Dummy', 'name':expr.name }\n\n    def hdl_Str(self, expr):\n        return {'func':'Str', 'text':expr.name }\n\n    def hdl_NumberSymbol(self, expr):\n        return {'func':'NumberSymbol', 'name':str(expr) }\n\n    def hdl_Rational(self, expr):\n        return {'func':'Rational', 'p':expr.p, 'q': expr.q}\n\n    def hdl_Float(self, expr):\n        import mpmath.libmp as mlib\n        from mpmath.libmp import prec_to_dps\n        dps = prec_to_dps(expr._prec)\n        str_real = mlib.to_str(expr._mpf_, dps, strip_zeros=True, min_fixed=None, max_fixed=None)\n        return {'func':'Float', 'value':str_real }\n\n    def hdl_float(self, expr):\n        return self.hdl_Float(Float(expr))\n\n    def hdl_CoordSys3D(self, expr):\n        return {'func':'CoordSys3D', 'variableNames':expr._variable_names, 'vectorNames':expr._vector_names, 'args':  self.argsMap(expr.args) }\n\n    def hdl_Derivative(self, expr):\n        from sympy.printing.conventions import requires_partial\n        return {'func':'Derivative', 'partial':requires_partial(expr), 'args':  self.argsMap(expr.args) }\n\n    def hdl_Relational(self, expr):\n        return {'func': 'Relational', 'relOp': expr.rel_op, 'args':  self.argsMap(expr.args)  } \n\n    def hdl_FiniteField(self, expr):\n        return {'func': 'FiniteField', 'mod': self.hdlAll(expr.mod) } \n\n    def hdl_IntegerRing(self, expr):\n        return {'func': 'DisplayedDomain', 'name': 'Z' } \n\n    def hdl_RationalField(self, expr):\n        return {'func': 'DisplayedDomain', 'name': 'Q' } \n\n    def hdl_RealField(self, expr):\n        return {'func': 'DisplayedDomain', 'name': 'R' } \n\n    def hdl_ComplexField(self, expr):\n        return {'func': 'DisplayedDomain', 'name': 'C' } \n\n    def hdl_bool(self, expr):    \n        if expr:\n            return {'func': 'BooleanTrue' } \n        else: \n            return {'func': 'BooleanFalse' } \n\n    def hdl_SingularityFunction(self, expr):\n        return {'func': 'SingularityFunction', 'args': [self.hdlAll(expr.args[0] - expr.args[1]), self.hdlAll(expr.args[2])] }     \n\n    def hdl_Cycle(self, expr):\n        from sympy.combinatorics.permutations import Permutation\n        if expr.size == 0:\n            return { 'func': 'Cycle', 'perm' : [] }\n\n        expr = Permutation(expr)\n        expr_perm = expr.cyclic_form\n        siz = expr.size\n        if expr.array_form[-1] == siz - 1:\n            expr_perm = expr_perm + [[siz - 1]]\n\n        return { 'func': 'Cycle', 'perm' : expr_perm }\n\n    def hdl_Permutation(self, expr):\n        return self.hdl_Cycle(expr)\n\n    def hdl_Exp1(self, expr):\n        return { 'func': 'Exp1' }\n\n    def hdl_genfunc_meijerg(self,expr):\n        return { \n            'func': 'GenericFunc',\n            'name': 'meijerg',\n            'args':[\n                self.hdlAll(len(expr.ap)),\n                self.hdlAll(len(expr.bq)),\n                self.hdlAll(len(expr.bm)),\n                self.hdlAll(len(expr.an)),\n                self.hdlAll(expr.an),\n                self.hdlAll(expr.aother),\n                self.hdlAll(expr.bm),\n                self.hdlAll(expr.bother),\n                self.hdlAll(expr.argument)\n\n            ]            \n         }\n\n    def hdl_genfunc_hyper(self,expr):\n        return { \n        'func': 'GenericFunc',\n        'name': 'hyper',\n        'args':[\n            self.hdlAll(len(expr.ap)),\n            self.hdlAll(len(expr.bq)),            \n            self.hdlAll(expr.ap),\n            self.hdlAll(expr.bq),\n            self.hdlAll(expr.argument)\n        ]            \n    }\n\n    def hdl_set(self,expr):\n        return { 'func': 'Set', 'args': self.argsMap(expr) }\n\n    hdl_frozenset = hdl_set\n\n    def hdl_Range(self,s):\n        dots = Symbol('dots')\n        if s.has(Symbol):\n            return self.hdlGenericFunc('Range', s.args)\n\n        if s.start.is_infinite and s.stop.is_infinite:\n            if s.step.is_positive:\n                printset = dots, -1, 0, 1, dots\n            else:\n                printset = dots, 1, 0, -1, dots\n        elif s.start.is_infinite:\n            printset = dots, s[-1] - s.step, s[-1]\n        elif s.stop.is_infinite:\n            it = iter(s)\n            printset = next(it), next(it), dots\n        elif len(s) > 4:\n            it = iter(s)\n            printset = next(it), next(it), dots, s[-1]\n        else:\n            printset = tuple(s)\n        \n        return {'func':'Range', 'args': self.argsMap(printset)}\n\n    def hdl_SeqFormula(self,s):\n        dots = Symbol('dots')\n        if len(s.start.free_symbols) > 0 or len(s.stop.free_symbols) > 0:\n            return {\n                'func':'SeqFormula', 'args': self.argsMap((\n                s.formula,\n                s.variables[0],\n                s.start,\n                s.stop\n            )), 'freeSymbol': True}\n\n            \n        if s.start is S.NegativeInfinity:\n            stop = s.stop\n            printset = (dots, s.coeff(stop - 3), s.coeff(stop - 2),\n                        s.coeff(stop - 1), s.coeff(stop))\n        elif s.stop is S.Infinity or s.length > 4:\n            printset = s[:4]\n            printset.append(dots)\n        else:\n            printset = tuple(s)\n\n        return {'func':'SeqFormula', 'args': self.argsMap(printset)}\n\n    hdl_SeqPer = hdl_SeqFormula\n    hdl_SeqAdd = hdl_SeqFormula\n    hdl_SeqMul = hdl_SeqFormula\n\n    def hdl_FourierSeries(self, s):\n        return {'func':'FourierSeries', 'args':[self.hdlAll(s.truncate())]}\n\n    def hdl_FormalPowerSeries(self, s):\n        return self.hdlAll(s.infinite)\n\n    def hdl_ProductSet(self, p):\n        return {'func':'ProductSet', 'hasVariety': has_variety(p.sets), 'args': self.argsMap(p.args)}\n\n    def hdl_ComplexRegion(self, p):\n        return {'func':'ComplexRegion',  'args': self.argsMap([p.expr, p.variables, p.sets])}\n    \n    \n    def hdl_Dict(self, d):\n        return { 'func':'GenericFunc', 'name':'dict',  'args': self.argsMap(d.args) }\n\n    def hdl_KroneckerDelta(self, d):\n        return { 'func':'KroneckerDelta',  'args': self.argsMap(d.args), 'isArgsAtom': d.args[0].is_Atom and d.args[1].is_Atom }\n\n    def hdl_LeviCivita(self, d):\n        return { 'func':'LeviCivita',  'args': self.argsMap(d.args), 'isArgsAtom': all(x.is_Atom for x in d.args) }\n\n    def hdl_Complexes(self, d):\n        return { 'func':'Complexes',  'args': [] }\n\n    def hdl_Naturals(self, d):\n        return { 'func':'Naturals',  'args': [] }\n\n    def hdl_Naturals0(self, d):\n        return { 'func':'Naturals0',  'args': [] }\n\n    def hdl_Integers(self, d):\n        return { 'func':'Integers',  'args': [] }\n\n    def hdl_NDimArray(self, d):\n        from sympy.tensor.array import NDimArray\n        def expandAll(arr):\n            rs=[]\n            for item in arr:\n                if isinstance(item, NDimArray):\n                   rs= rs + expandAll(item)\n                else:\n                    rs.append(item)\n            return rs\n        \n        args = expandAll(d)  \n        return { 'func':'NDimArray',  'args': [self.hdlAll(tuple(args))] + [self.hdlAll(d.shape)] }\n\n    def hdl_PolynomialRing(self, d):\n        return {'func': 'PolynomialRing', 'args':self.argsMap([d.domain, d.symbols]) }\n\n    def hdl_FractionField(self, d):\n        return {'func': 'FractionField', 'args':self.argsMap([d.domain, d.symbols]) }\n\n    def hdl_PolyRing(self,d):\n        return {'func': 'PolyRing', 'args':self.argsMap([d.domain, d.symbols, d.ngens, d.zero_monom]) }\n\n    def hdl_PolyElement(self,d):\n        return {'func': 'PolyElement', 'args':self.argsMap([d.ring, d.terms()]) }\n\n    def hdl_FracElement(self,d):\n        return {'func': 'FracElement', 'args':self.argsMap([d.numer, d.denom]) }\n\n    def hdl_PythonRational(self,d):\n        return {'func': 'PythonRational', 'args':self.argsMap([d.numerator, d.denominator]) }\n\n    def hdl_RootSum(self,d):\n        return {'func': 'RootSum', 'args': self.argsMap([d.expr]) if d.fun is  S.IdentityFunction  else self.argsMap([d.expr, d.fun]) }\n    \n    def hdl_MellinTransform(self,d):\n        return {'func':'UnifiedTransform', 'name':'M',  'args': self.argsMap(d.args)}\n    def hdl_InverseMellinTransform(self,d):\n        return {'func':'UnifiedTransform','name':'M', 'args': self.argsMap(d.args), 'inversed':True }\n    def hdl_LaplaceTransform(self,d):\n        return {'func':'UnifiedTransform','name':'L', 'args': self.argsMap(d.args)}\n    def hdl_InverseLaplaceTransform(self,d):\n        return {'func':'UnifiedTransform','name':'L', 'args': self.argsMap(d.args), 'inversed':True }\n    def hdl_FourierTransform(self,d):\n        return {'func':'UnifiedTransform','name':'F', 'args': self.argsMap(d.args)}\n    def hdl_InverseFourierTransform(self,d):\n        return {'func':'UnifiedTransform','name':'F', 'args': self.argsMap(d.args), 'inversed':True }\n    def hdl_SineTransform(self,d):\n        return {'func':'UnifiedTransform','name':'S', 'args': self.argsMap(d.args)}\n    def hdl_InverseSineTransform(self,d):\n        return {'func':'UnifiedTransform','name':'S', 'args': self.argsMap(d.args), 'inversed':True }\n    def hdl_CosineTransform(self,d):\n        return {'func':'UnifiedTransform','name':'C', 'args': self.argsMap(d.args)}\n    def hdl_InverseCosineTransform(self,d):\n        return {'func':'UnifiedTransform','name':'C', 'args': self.argsMap(d.args), 'inversed':True } \n\n    def hdl_PolynomialRingBase(self,d):\n        return {'func':'PolynomialRingBase', 'args': self.argsMap([d.domain,d.symbols]), 'inversed': not d.is_Poly } \n\n    def hdl_Morphism(self,d):\n        return {'func':'Morphism', 'args': self.argsMap([d.domain,d.codomain]) } \n\n    def hdl_NamedMorphism(self,d):\n        from sympy import Symbol\n        return {'func':'NamedMorphism', 'args': self.argsMap([Symbol(d.name), d.domain,d.codomain]) } \n\n    def hdl_IdentityMorphism(self,d):\n        from sympy import Symbol\n        return {'func':'NamedMorphism', 'args': self.argsMap([Symbol('id'), d.domain,d.codomain]) } \n\n    def hdl_CompositeMorphism(self,d):\n        from sympy import Symbol\n        return {'func':'CompositeMorphism', 'args': self.argsMap([[Symbol(component.name) for component in d.components], d.domain,d.codomain]) } \n\n    def hdl_Category(self,d):\n        from sympy import Symbol\n        return {'func':'Category', 'args': self.argsMap([Symbol(d.name)]) } \n\n    def hdl_Diagram(self,d):\n        if not d.premises:\n            return {'func':'EmptySet'}\n        args = [d.premises]\n        if d.conclusions:\n            args.append(d.conclusions)\n        return {'func':'Diagram', 'args': self.argsMap(args) } \n\n    def hdl__Object(self,d):\n        return this.hdlAll(Symbol(d.name))\n\n    def hdl_DiagramGrid(self,d):\n        args=[]\n        for i in range(d.height):\n            for j in range(d.width):\n               args.append(d[i,j])\n        return {'func':'DiagramGrid', 'args': self.argsMap(args), 'row': d.height, 'col': d.width } \n\n    def hdl_FreeModule(self,d):\n        return {'func':'FreeModule', 'args': self.argsMap([d.ring,d.rank]), } \n\n    def hdl_DMP(self,p):\n        try:\n            if p.ring is not None:\n                # TODO incorporate order\n                # return self._print(p.ring.to_sympy(p))\n                return {'func':'DMP', 'args': self.argsMap([p.ring.to_sympy(p)]), } \n        except SympifyError:\n            pass\n        #return self._print(repr(p))\n        return {'func':'DMP', 'args': self.argsMap([repr(p)]), } \n       \n    def hdl_DMF(self,p):\n        return hdl_DMP(p)\n\n    def hdl_FreeModuleElement(self,d):\n        return {'func':'FreeModuleElement', 'args': self.argsMap(d), } \n\n    def hdl_SubModule(self,d):\n        return {'func':'SubModule', 'args': self.argsMap([d.gens]), } \n\n    def hdl_ModuleImplementedIdeal(self,d):\n        return {'func':'SubModule', 'args': self.argsMap([[x for [x] in d._module.gens]]), } \n\n    def hdl_QuotientRing(self,d):\n        return {'func':'Frac', 'args': self.argsMap([d.ring,d.base_ideal]), 'nativeType':'QuotientRing' } \n\n    def hdl_QuotientRingElement(self,d):\n        return {'func':'Add', 'args': self.argsMap([d.data,d.ring.base_ideal]) } \n\n    def hdl_QuotientModuleElement(self,d):\n        return {'func':'Add', 'args': self.argsMap([d.data,d.module.killed_module]) } \n\n    def hdl_QuotientModule(self,d):\n        return {'func':'Frac', 'args': self.argsMap([d.base,d.killed_module]), 'nativeType':'QuotientModule' } \n\n    def hdl_MatrixHomomorphism(self,h):\n        return {'func':'MatrixHomomorphism', 'args': self.argsMap([h._sympy_matrix(),h.domain,h.codomain]) } \n\n    def hdl_MatPow(self,h):\n        return {'func':'Pow', 'args': self.argsMap(h.args) } \n\n    def hdl_ArraySymbol(self,h):\n        from sympy import Symbol\n        return self.hdlAll(h.name)\n\n            \n    def hdl_MatrixSlice(self,d):\n        def myslice(x, dim):\n            x = list(x)\n            if x[2] == 1:\n                del x[2]\n            if x[0] == 0:\n                x[0] = None\n            if x[1] == dim:\n                x[1] = None\n            return x\n        return {'func': 'MatrixSlice', 'args':self.argsMap([d.parent, myslice(d.rowslice, d.parent.rows), myslice(expr.colslice, expr.parent.cols)]) }\n        \n    def hdl_NoneType(self,d):\n        return {'func':'NoneType'}\n\n    def hdl_RandomDomain(self,d):\n        subType=''\n        args=[]\n        if hasattr(d, 'as_boolean'):\n            subType = 'boolean'\n            args=self.argsMap([d.as_boolean()])\n        elif hasattr(d, 'set'):\n            subType = 'set'\n            args=self.argsMap([d.symbols,d.set])\n        elif hasattr(d, 'symbols'):\n            subType = 'symbols'\n            args=self.argsMap([d.symbols])\n\n        return {'func':'RandomDomain', 'subType':subType, 'args': args}\n\n    def hdl_Quantity(self,d):\n        from sympy import Symbol\n        if d._latex_repr:\n            return {'func':'Quantity', 'args': self.argsMap(d.args), 'latex': d._latex_repr }\n\n        return {'func':'Quantity', 'args': self.argsMap(d.args) }\n\n    def hdl_Manifold(self,d):\n        from sympy import Symbol\n        return {'func':'Manifold', 'args': [self.hdlAll(Symbol(d.name.name))] }\n\n    def hdl_Patch(self,d):\n        from sympy import Symbol\n        return {'func':'Patch', 'args': self.argsMap([Symbol(d.name.name),d.manifold]) }\n\n    def hdl_CoordSystem(self,d):\n        from sympy import Symbol\n        return {'func':'CoordSystem', 'args': self.argsMap([Symbol(d.name.name),Symbol(d.patch.name.name),d.manifold]) }\n\n    def hdl_BaseScalarField(self,d):\n        from sympy import Symbol\n        string = d._coord_sys.symbols[d._index].name\n        return {'func':'BaseScalarField', 'args': self.argsMap([Symbol(string)]) }\n\n    def hdl_BaseVectorField(self,field):\n        from sympy import Symbol\n        string = field._coord_sys.symbols[field._index].name\n        return {'func':'BaseVectorField', 'args': self.argsMap([Symbol(string)]) }\n\n    def hdl_Differential(self,diff):\n        from sympy import Symbol\n        field = diff._form_field\n        if hasattr(field, '_coord_sys'):\n            string = field._coord_sys.symbols[field._index].name\n            return {'func':'Differential', 'args': self.argsMap([Symbol(string)]), 'coordSys':True }\n\n        return {'func':'Differential', 'args': self.argsMap([field]) }\n\n    def hdl_TensorIndex(self,d):    \n        return {'func':'TensorIndex', 'isUp': True if d.is_up else False, 'args': self.argsMap([d.args[0]]) }\n\n    def hdl_TensorElement(self,expr):\n        name = expr.expr.args[0].args[0]\n        indices = expr.expr.get_indices()\n        index_map = expr.index_map\n        newIdxMap = []\n        for idx in indices:\n            newIdxMap.append(index_map[idx] if (idx in index_map) else  None )\n\n        return {'func':'TensorElement', 'args': self.argsMap([name, indices,newIdxMap]) }\n\n    def hdl_Tensor(self,expr):\n        name = expr.args[0].args[0]\n        indices = expr.get_indices()\n        return {'func':'Tensor', 'args': self.argsMap([name, indices]) }\n\n    def hdl_TensMul(self,expr):\n        return {'func':'Mul', 'args': self.argsMap(expr.args) }\n\n    def hdl_TensAdd(self,expr):\n        return {'func':'Add', 'args': self.argsMap(expr.args) }\n\n    def hdl_PartialDerivative(self,expr):\n        return {'func':'PartialDerivative', 'args': self.argsMap([expr.expr,expr.variables]) }\n\n    def hdl_Feedback(self,expr):\n        from sympy.physics.control import TransferFunction, Parallel, Series\n\n        num, tf = expr.num, TransferFunction(1, 1, expr.num.var)\n        num_arg_list = list(num.args) if isinstance(num, Series) else [num]\n        den_arg_list = list(expr.den.args) if isinstance(expr.den, Series) else [expr.den]\n\n        if isinstance(num, Series) and isinstance(expr.den, Series):\n            den = Parallel(tf, Series(*num_arg_list, *den_arg_list))\n        elif isinstance(num, Series) and isinstance(expr.den, TransferFunction):\n            if expr.den == tf:\n                den = Parallel(tf, Series(*num_arg_list))\n            else:\n                den = Parallel(tf, Series(*num_arg_list, expr.den))\n        elif isinstance(num, TransferFunction) and isinstance(expr.den, Series):\n            if num == tf:\n                den = Parallel(tf, Series(*den_arg_list))\n            else:\n                den = Parallel(tf, Series(num, *den_arg_list))\n        else:\n            if num == tf:\n                den = Parallel(tf, *den_arg_list)\n            elif expr.den == tf:\n                den = Parallel(tf, *num_arg_list)\n            else:\n                den = Parallel(tf, Series(*num_arg_list, *den_arg_list))\n\n        return {'func':'Frac', 'args': self.argsMap([num, den]), 'nativeType':'Feedback' }\n    \n    def hdl_TransferFunction(self,expr):\n        return {'func':'Frac', 'args': self.argsMap([expr.num, expr.den]), 'nativeType':'TransferFunction' }\n\n    def hdl_Parallel(self,expr):\n        return {'func':'Add', 'args': self.argsMap(expr.args) }\n\n\n    def hdlGenericFunc(self, name, args):\n        dic = {}\n        dic['func'] = 'GenericFunc' \n        dic['name'] = name\n        dic['args']=self.argsMap(args)\n        return dic    \n\n\n    def hdlOthers(self, expr):\n        dic = { 'func':'GenericFunc', 'args':[] }        \n\n        if hasattr(expr.__class__,'__class__') and expr.__class__.__class__.__name__ == 'UndefinedFunction':\n            return { 'func': 'UndefinedFunction', 'name': expr.__class__.__name__, 'args': self.argsMap(expr.args) }\n        \n        if expr.__class__.__name__ == 'FunctionClass':            \n            dic['name']= expr.__name__\n        elif hasattr(expr, 'func'):\n            funcName = expr.func.__name__\n            if funcName[0].islower():\n                dic['name']= funcName\n            else:\n                dic['func']= funcName\n        else:\n            dic['name']= expr.__class__.__name__\n\n        if 'name' in dic and  hasattr(self, 'hdl_genfunc_' + dic['name']) :                \n            found = getattr(self, 'hdl_genfunc_' + dic['name'])(expr)\n            return found\n\n        if hasattr(self, 'hdl_' + dic['func']) :                \n            found = getattr(self, 'hdl_' + dic['func'])(expr)\n            return found\n        \n        \n        if hasattr(expr, 'args') and hasattr(expr.args,'__iter__'):\n            dic['args'] = self.argsMap(expr.args)\n\n        return dic\n\n    \n    \n    def hdlAll(self, expr):\n        if expr.__class__.__name__ == 'dict':\n            return self.hdlDict(expr)\n        \n        result = self.callIfExistsInHierarchy(expr)\n\n        if result == None:\n            result= self.hdlOthers(expr)\n        \n        result['nativeInfo'] = {\n            'isBoolean': hasattr(expr,'is_Boolean') and expr.is_Boolean,\n            'isRelational': hasattr(expr,'is_Relational') and expr.is_Relational\n        }\n        return result\n\n    def callIfExistsInHierarchy(self, expr):\n        import inspect\n        found = None\n        #print(expr.__class__.__name__)\n\n        if hasattr(self, 'hdl_' + expr.__class__.__name__) :\n            found = getattr(self, 'hdl_' + expr.__class__.__name__)(expr)\n        else:\n            for base_class in inspect.getmro(expr.__class__):\n            \n                bclassname = base_class.__name__\n                #print(bclassname)\n                if hasattr(self, 'hdl_' + bclassname) :                \n                    found = getattr(self, 'hdl_' + bclassname)(expr)\n                    break\n\n        return found\n\n    def argsMap(self, args):\n        return list(map(self.hdlAll,args))\n\n    def hdlDict(self, d):\n        items = []\n\n        for key in d.keys():\n            val = d[key]\n            items.append(Tuple(key,val))\n        \n        return { 'func':'GenericFunc', 'name':'dict',  'args': self.argsMap(items) }\n    \ndef ___mcSympyExprDump(expr):\n    # print(expr.func)\n    # print()\n    # print(expr.args)\n\n    dic = __McHdl().hdlAll(expr)\n    \n            \n    #print(dic)\n    return dic\n", "\n"),
    S = r(40961),
    A = r.n(S),
    w = r(37566),
    E = r(55451);
  class k extends a().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        selectedIdx: -1
      }), (0, n.A)(this, "codes", ["from sympy import *", "x, y, z, t = symbols('x y z t')", "k, m, n = symbols('k m n', integer=True)", "f, g, h = symbols('f g h', cls=Function)"]), (0, n.A)(this, "divContainer", void 0), (0, n.A)(this, "handleKeyDown", e => {
        if (38 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.setSelectedIdx(this.state.selectedIdx = Math.max(0, this.state.selectedIdx - 1), "up")), 40 == e.keyCode) {
          if (e.preventDefault(), e.stopPropagation(), this.state.selectedIdx >= this.codes.length - 1) return this.hide(), void this.props.onHide();
          this.setSelectedIdx(this.state.selectedIdx = Math.min(this.codes.length - 1, this.state.selectedIdx + 1), "down");
        }
        27 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.hide(), this.props.onHide()), 13 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.hide(), this.props.onHide(this.codes[this.state.selectedIdx]));
      });
      var t = localStorage.getItem("sympy-cmd-history");
      t && (this.codes = JSON.parse(t));
    }
    render() {
      return this.state.show ? a().createElement("div", {
        onKeyDown: this.handleKeyDown,
        tabIndex: -1,
        ref: e => this.divContainer = e,
        style: {
          outline: "none",
          position: "absolute",
          bottom: 0,
          left: 5,
          width: "95%",
          maxWidth: "100%",
          backgroundColor: "var(--ui-surface-muted, rgb(243 243 243))",
          fontSize: 13,
          border: "1px solid var(--ui-border, #c3c3c3)",
          boxShadow: "var(--ui-shadow, rgb(208 208 208)) 0px 0px 4px 2px",
          maxHeight: "90%",
          overflowY: "auto"
        }
      }, this.codes.map((e, t) => this.renderItem(e, t))) : a().createElement("div", null);
    }
    setSelectedIdx(e, t) {
      this.setState({
        selectedIdx: e
      }, () => {
        var e = A().findDOMNode(this),
          t = w.YG(e, ".h-cmd-item.selected")[0],
          r = t.parentElement.getBoundingClientRect(),
          n = t.getBoundingClientRect();
        n.top > r.top && n.bottom < r.bottom || t.scrollIntoView({
          inline: "nearest",
          block: "nearest"
        });
      });
    }
    renderItem(e, t) {
      return a().createElement("div", {
        key: t,
        className: "h-cmd-item ".concat(this.state.selectedIdx == t ? "selected" : ""),
        style: {
          maxHeight: 50,
          overflow: "hidden",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          padding: "3px 5px",
          backgroundColor: this.state.selectedIdx == t ? "var(--ui-selection, #c3efc5)" : void 0
        }
      }, e);
    }
    show() {
      this.setState({
        show: !0
      }, () => {
        E.A.next(() => {
          this.divContainer.focus({
            preventScroll: !0
          }), this.divContainer.scrollTop = this.divContainer.scrollHeight, this.setSelectedIdx(this.codes.length - 1, "down");
        });
      });
    }
    hide() {
      this.state.show && this.setState({
        show: !1
      });
    }
    addCode(e) {
      if (e.trim()) {
        var t = this.codes.indexOf(e);
        t >= 0 && this.codes.splice(t, 1), this.codes.push(e), this.codes.length > 55 && (this.codes = this.codes.slice(5)), localStorage.setItem("sympy-cmd-history", JSON.stringify(this.codes));
      }
    }
  }
  var O = r(3453);
  class D {
    constructor(e) {
      (0, n.A)(this, "casEngine", void 0), this.casEngine = e;
    }
    run(e) {
      return "#clear" == (e = e.trim()) ? {
        commandLogs: [],
        clearLog: !0,
        runResult: void 0
      } : e.startsWith("#add") ? this.runDump(e) : {
        commandLogs: [e],
        runResult: this.request(e, !1)
      };
    }
    runDump(e) {
      var t = e.replace("#add", "__mcDumpExpr=___mcSympyExprDump");
      return {
        commandLogs: [e, t += "\njson.dumps(__mcDumpExpr)"],
        runResult: this.request(t, !0)
      };
    }
    request(e, t) {
      return this.casEngine.runRawCode(e, t).then(e => {
        var t = (0, O.A)(e, 2),
          r,
          n;
        return {
          text: t[0],
          dump: t[1]
        };
      });
    }
  }
  class P extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        textAreaHeight: 50
      }), (0, n.A)(this, "logDiv", void 0), (0, n.A)(this, "terminal", void 0), (0, n.A)(this, "cmdHistory", void 0), (0, n.A)(this, "uiCodeRunner", new D(this.props.casEngine)), (0, n.A)(this, "handleRunLog", e => {
        this.appendLog(e, "output");
      }), (0, n.A)(this, "handleLogDivRef", e => {
        this.logDiv = e;
      }), (0, n.A)(this, "handleTerminalRef", e => {
        this.terminal = e;
      }), (0, n.A)(this, "handleTerminalKeyDown", e => {
        if (13 == e.keyCode && !e.shiftKey) {
          e.stopPropagation(), e.preventDefault();
          var t = this.terminal.value.trim();
          this.handleSubmitCommand(t), this.terminal.value = "";
        }
        38 == e.keyCode && this.terminal.selectionStart <= this.terminal.value.split("\n")[0].length && this.cmdHistory.show();
      }), (0, n.A)(this, "handleCmdHistoryRef", e => {
        this.cmdHistory = e;
      }), (0, n.A)(this, "handleCmdHistoryClose", e => {
        e && (this.terminal.value = e), this.terminal.focus();
      }), (0, n.A)(this, "handleTerminalFocus", () => {
        this.cmdHistory.hide();
      }), (0, n.A)(this, "handleTextAreaHeightChange", e => {
        this.setState({
          textAreaHeight: e
        });
      }), (0, n.A)(this, "handleTextAreaInput", () => {
        this.resizeAreaInput();
      });
    }
    componentDidMount() {
      setTimeout(() => {
        this.runCode("from sympy import *\nx, y, z, t = symbols('x y z t')\nk, m, n = symbols('k m n', integer=True)\nf, g, h = symbols('f g h', cls=Function)").then(() => {
          this.uiCodeRunner.run(C);
        });
      }, 500), this.props.casEngine.onRunLog = this.handleRunLog, this.logDiv.insertAdjacentHTML("beforeend", '<span style="color:#888">Powered by <b>SymPy</b> (via <b>Pyodide</b>)</span>\n'), this.logDiv.insertAdjacentHTML("beforeend", "<span><b>#clear</b>: Special command to clear log</span>\n"), this.logDiv.insertAdjacentHTML("beforeend", "<span><b>#add(expr)</b>: Special command to add sympy expression to Mathcha, for example <b>#add(3*x+2)</b> </span>\n"), this.logDiv.insertAdjacentText("beforeend", "\n\n");
    }
    componentDidUpdate(e) {
      this.props.show && !e.show && this.scrollLogToEnd();
    }
    componentWillUnmount() {
      this.props.casEngine.onRunLog == this.handleRunLog && (this.props.casEngine.onRunLog = void 0);
    }
    shouldComponentUpdate(e, t) {
      return this.props.show != e.show || this.props.height != e.height || t != this.state;
    }
    handleSubmitCommand(e) {
      e && (this.runCode(e), this.cmdHistory.addCode(e));
    }
    appendLog(e, t) {
      "output" == t ? this.logDiv.insertAdjacentText("beforeend", "".concat(e, "\n")) : this.logDiv.insertAdjacentText("beforeend", "".concat(this.appendPrefixEachLine(e), "\n")), this.trimLog(), this.scrollLogToEnd();
    }
    trimLog() {
      var e,
        t = (this.logDiv.textContent || "").split("\n");
      if (!(t.length <= P.MAX_LOG_LINES)) {
        var r = t.slice(t.length - P.MAX_LOG_LINES).join("\n");
        this.logDiv.textContent = r;
      }
    }
    scrollLogToEnd() {
      this.logDiv.scrollTop = this.logDiv.scrollHeight;
    }
    runCode(e) {
      var t = this.uiCodeRunner.run(e);
      return t.clearLog && (this.logDiv.textContent = ""), t.preventClearTerminal || (this.terminal.value = "", this.resizeAreaInput()), t.commandLogs.forEach(e => {
        this.appendLog(e, "input");
      }), t.runResult ? t.runResult.then(e => {
        var t = e.text,
          r = e.dump;
        t && (this.appendLog(t, "output"), this.logDiv.scrollTop = this.logDiv.scrollHeight), r && this.props.onAddCasItem(r);
      }) : Promise.resolve();
    }
    appendPrefixEachLine(e) {
      return e.split("\n").map((e, t) => 0 == t ? ">>>> ".concat(e) : ".... ".concat(e)).join("\n");
    }
    render() {
      return a().createElement("div", {
        style: {
          height: this.props.height,
          backgroundColor: "var(--ui-surface, white)",
          borderBottom: "1px solid var(--ui-border, lightgray)",
          display: this.props.show ? "flex" : "none",
          flexDirection: "column"
        }
      }, a().createElement("div", {
        style: {
          flex: 1,
          display: "flex",
          position: "relative",
          minHeight: 0
        }
      }, a().createElement("div", {
        ref: this.handleLogDivRef,
        style: {
          userSelect: "text",
          flex: 1,
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          fontSize: 13,
          padding: 8,
          fontFamily: "monospace",
          minHeight: 0,
          backgroundColor: "var(--ui-surface-muted, #f5f5f5)"
        }
      }), a().createElement(k, {
        ref: this.handleCmdHistoryRef,
        onHide: this.handleCmdHistoryClose
      })), a().createElement(b, {
        show: !0,
        targetHeight: this.state.textAreaHeight,
        onTargetHeightChange: this.handleTextAreaHeightChange,
        minHeight: 17,
        reverse: !0
      }), a().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: this.state.textAreaHeight,
          fontFamily: "monospace",
          borderTop: "1px solid var(--ui-border, lightgray)",
          alignItems: "baseline",
          overflowY: "auto",
          position: "relative",
          fontSize: 13
        }
      }, a().createElement("div", {
        onClick: () => this.terminal.focus(),
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        }
      }, a().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          height: "100%"
        }
      }, a().createElement("div", {
        style: {
          flexShrink: 0,
          width: 38,
          position: "relative",
          overflow: "hidden"
        }
      }, a().createElement("div", {
        style: {
          padding: 8,
          lineHeight: "1.35em",
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          whiteSpace: "pre-wrap",
          fontSize: 13
        }
      }, ">>>>\n....\n....\n....\n....\n....\n....\n....\n....\n....\n....\n....\n....\n....")), a().createElement("textarea", {
        spellCheck: !1,
        onFocus: this.handleTerminalFocus,
        onKeyDown: this.handleTerminalKeyDown,
        ref: this.handleTerminalRef,
        onInput: this.handleTextAreaInput,
        style: {
          flexShrink: 0,
          border: "none",
          fontSize: 13,
          padding: 8,
          fontFamily: "monospace",
          resize: "none",
          flex: 1,
          lineHeight: "1.35em",
          height: 10
        }
      })))));
    }
    resizeAreaInput() {
      this.terminal.style.height = "5px", this.terminal.style.height = this.terminal.scrollHeight - 10 + "px";
    }
  }
  function M(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  (0, n.A)(P, "MAX_LOG_LINES", 300);
  var T = {
    "global.assumptions": "",
    "substitute.from": "x",
    "substitute.to": "y",
    "differentiate.variable": "x",
    "integrate.variable": "x",
    "collect.variable": "x",
    "refine.assumption": "positive(x)",
    "solve.variable": "x",
    "limit.variable": "x",
    "limit.to": "0",
    "sum.variable": "n",
    "sum.from": "0",
    "sum.to": "10",
    "product.variable": "n",
    "product.from": "1",
    "product.to": "10"
  };
  class L extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        rootModel: this.buildRootModel(this.props.cacheKey, this.props.model)
      }), (0, n.A)(this, "handleModelChanged", e => {
        this.props.onModelChanged(this.extractMathEditor(e));
      }), (0, n.A)(this, "stopMousePropagation", e => {
        e.stopPropagation();
      });
    }
    componentWillReceiveProps(e) {
      e.cacheKey != this.props.cacheKey && this.setState({
        rootModel: this.buildRootModel(e.cacheKey, e.model)
      });
    }
    render() {
      var e = this.props.MathTypeClss,
        t = this.props.height || 22,
        r = t - 2,
        n = !!this.props.multiline;
      return a().createElement("div", {
        className: "tw:overflow-hidden tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)]",
        style: {
          height: t,
          minWidth: this.props.width || 68,
          width: this.props.width || 68,
          boxSizing: "border-box"
        },
        onMouseDown: this.stopMousePropagation,
        onMouseUp: this.stopMousePropagation,
        onClick: this.stopMousePropagation,
        onDoubleClick: this.stopMousePropagation
      }, a().createElement(e, {
        className: "ui-math-input",
        preventFocusOnCreated: !0,
        mathFontSizeBase: 14,
        model: this.state.rootModel,
        oneMode: "math-mode",
        multiline: n,
        restrictedView: !0,
        toolbarEnabled: !1,
        itemsBarHide: !0,
        cursorHiddenOnLostFocus: !0,
        enableContextMenu: !0,
        autoCompleteUsingPositionFixed: !0,
        shouldFocusOnCreated: !1,
        deplayRenderEnabled: !1,
        mathEditContainerStyle: {
          minHeight: 0,
          height: r,
          overflow: n ? "auto" : "hidden"
        },
        style: {
          padding: "0px 2px",
          border: "none",
          marginTop: 0,
          background: "var(--ui-surface, white)",
          height: r,
          minHeight: r,
          width: "100%",
          fontSize: 10,
          overflow: n ? "auto" : "hidden"
        },
        rootEditorStyle: {
          minHeight: 0,
          padding: 0,
          fontSize: 10,
          lineHeight: "18px"
        },
        onModelChanged: this.handleModelChanged
      }));
    }
    buildRootModel(e, t) {
      var r = i.A.createComposite("\\math-container"),
        n = i.A.createEmptyEditor(),
        o = I(I({}, r), {}, {
          id: "cas-math-container-" + e,
          elements: I(I({}, r.elements || {}), {}, {
            mathValue: t || i.A.createEmptyEditor()
          })
        });
      return I(I({}, n), {}, {
        id: "cas-math-root-" + e,
        lines: [I(I({}, n.lines[0]), {}, {
          blocks: [o]
        })]
      });
    }
    extractMathEditor(e) {
      var t = e && e.lines && e.lines[0] && e.lines[0].blocks && e.lines[0].blocks[0],
        r;
      return t && t.elements && t.elements.mathValue || i.A.createEmptyEditor();
    }
  }
  var R = [{
      type: "substitute",
      title: "Substitute",
      description: "Replace one symbol or expression with another.",
      category: "Algebra",
      fields: ["from", "to"]
    }, {
      type: "simplify",
      title: "Simplify",
      description: "Reduce the current expression to a simpler form.",
      category: "Algebra"
    }, {
      type: "expand",
      title: "Expand",
      description: "Expand products and powers.",
      category: "Algebra"
    }, {
      type: "factor",
      title: "Factor",
      description: "Factor the current expression.",
      category: "Algebra"
    }, {
      type: "cancel",
      title: "Cancel",
      description: "Cancel common factors in rational expressions.",
      category: "Algebra"
    }, {
      type: "apart",
      title: "Partial Fractions",
      description: "Decompose a rational expression into partial fractions.",
      category: "Algebra"
    }, {
      type: "together",
      title: "Together",
      description: "Combine terms into a common denominator.",
      category: "Algebra"
    }, {
      type: "trigsimp",
      title: "Trig Simplify",
      description: "Simplify trigonometric expressions.",
      category: "Algebra"
    }, {
      type: "powsimp",
      title: "Power Simplify",
      description: "Combine powers with related bases or exponents.",
      category: "Algebra"
    }, {
      type: "radsimp",
      title: "Radical Simplify",
      description: "Simplify radicals and rationalized denominators.",
      category: "Algebra"
    }, {
      type: "ratsimp",
      title: "Rational Simplify",
      description: "Simplify rational expressions into a canonical form.",
      category: "Algebra"
    }, {
      type: "combsimp",
      title: "Combinatorial Simplify",
      description: "Simplify combinatorial expressions.",
      category: "Algebra"
    }, {
      type: "signsimp",
      title: "Sign Simplify",
      description: "Simplify signs in expressions.",
      category: "Algebra"
    }, {
      type: "powdenest",
      title: "Power Denest",
      description: "Denest powers where valid.",
      category: "Algebra"
    }, {
      type: "logcombine",
      title: "Log Combine",
      description: "Combine logarithms where valid.",
      category: "Algebra"
    }, {
      type: "expand_trig",
      title: "Expand Trig",
      description: "Expand trigonometric functions.",
      category: "Algebra"
    }, {
      type: "expand_log",
      title: "Expand Log",
      description: "Expand logarithms where valid.",
      category: "Algebra"
    }, {
      type: "expand_power_base",
      title: "Expand Power Base",
      description: "Expand powers over products where valid.",
      category: "Algebra"
    }, {
      type: "collect",
      title: "Collect",
      description: "Collect terms with respect to a variable.",
      category: "Algebra",
      fields: ["variable"]
    }, {
      type: "solve",
      title: "Solve",
      description: "Solve an equation or expression.",
      category: "Algebra",
      fields: ["variable"]
    }, {
      type: "ask",
      title: "Ask Predicate",
      description: "Ask SymPy whether the selected predicate is true.",
      category: "Assumptions"
    }, {
      type: "refine",
      title: "Refine",
      description: "Refine the expression under an assumption.",
      category: "Assumptions",
      fields: ["assumption"]
    }, {
      type: "differentiate",
      title: "Differentiate",
      description: "Differentiate with respect to a variable.",
      category: "Calculus",
      fields: ["variable"]
    }, {
      type: "integrate",
      title: "Integrate",
      description: "Integrate with respect to a variable.",
      category: "Calculus",
      fields: ["variable"]
    }, {
      type: "limit",
      title: "Limit",
      description: "Evaluate a limit.",
      category: "Calculus",
      fields: ["variable", "to"]
    }, {
      type: "sum",
      title: "Sum",
      description: "Compute a symbolic sum with bounds.",
      category: "Calculus",
      fields: ["variable", "from", "to"]
    }, {
      type: "product",
      title: "Product",
      description: "Compute a symbolic product with bounds.",
      category: "Calculus",
      fields: ["variable", "from", "to"]
    }, {
      type: "matrix-determinant",
      title: "Matrix Det",
      description: "Compute the determinant of a matrix.",
      category: "Matrices"
    }, {
      type: "matrix-inverse",
      title: "Matrix Inverse",
      description: "Compute the inverse of a matrix.",
      category: "Matrices"
    }, {
      type: "matrix-transpose",
      title: "Matrix Transpose",
      description: "Transpose a matrix.",
      category: "Matrices"
    }, {
      type: "matrix-rref",
      title: "Matrix RREF",
      description: "Compute reduced row echelon form.",
      category: "Matrices"
    }, {
      type: "matrix-eigenvalues",
      title: "Matrix Eigenvalues",
      description: "Compute matrix eigenvalues.",
      category: "Matrices"
    }, {
      type: "matrix-eigenvectors",
      title: "Matrix Eigenvectors",
      description: "Compute matrix eigenvectors.",
      category: "Matrices"
    }],
    B = ["Algebra", "Calculus", "Matrices", "Assumptions"];
  class F extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "casEngine", d), (0, n.A)(this, "persistInterval", void 0), (0, n.A)(this, "lastPersistedSnapshotText", ""), (0, n.A)(this, "dockResizeStart", void 0), (0, n.A)(this, "closing", !1), (0, n.A)(this, "operationSearchInput", void 0), (0, n.A)(this, "restoringOperationSearchFocus", !1), (0, n.A)(this, "state", {
        pos: {
          x: 100,
          y: 100
        },
        size: {
          x: 940,
          y: 620
        },
        dockMode: "right",
        dockSize: 420,
        casEnglineLoaded: this.casEngine.isInitialized(),
        terminalVisible: !1,
        assumingVisible: !1,
        terminalHeight: 200,
        fieldModels: this.createDefaultFieldModels(),
        operationSearchText: ""
      }), (0, n.A)(this, "persistIfChanged", () => {
        var e = this.buildSnapshot(!0),
          t = this.getSnapshotCompareText(e);
        t != this.lastPersistedSnapshotText && (this.lastPersistedSnapshotText = t, f.d.save(e));
      }), (0, n.A)(this, "handleTerminalHeightChange", e => {
        this.setState({
          terminalHeight: e
        });
      }), (0, n.A)(this, "handleToggleTerminal", () => {
        this.setState({
          terminalVisible: !this.state.terminalVisible
        });
      }), (0, n.A)(this, "handleToggleAssuming", () => {
        this.setState({
          assumingVisible: !this.state.assumingVisible
        });
      }), (0, n.A)(this, "handleAddCasItemFromInteractive", e => {
        this.props.insertResultBlocks(e), this.setState({
          lastError: void 0,
          lastRunInfo: "Inserted result from SymPy terminal."
        });
      }), (0, n.A)(this, "handlePosSizeChange", (e, t) => {
        this.setState({
          pos: e,
          size: t
        });
      }), (0, n.A)(this, "handleDockModeChange", e => {
        this.setState({
          dockMode: e
        });
      }), (0, n.A)(this, "handleClose", () => {
        this.closing = !0, this.persistSnapshot(this.buildSnapshot(!1)), this.props.onClose();
      }), (0, n.A)(this, "setFieldModel", (e, t, r) => {
        this.setFieldModelByKey("".concat(e, ".").concat(t), r);
      }), (0, n.A)(this, "setFieldModelByKey", (e, t) => {
        this.setState({
          fieldModels: I(I({}, this.state.fieldModels), {}, {
            [e]: t
          })
        });
      }), (0, n.A)(this, "showAssumptionInfo", () => {
        this.setState({
          assumptionInfoVisible: !0
        });
      }), (0, n.A)(this, "hideAssumptionInfo", () => {
        this.setState({
          assumptionInfoVisible: !1
        });
      }), (0, n.A)(this, "handleOperationSearchChange", e => {
        this.setState({
          operationSearchText: e.currentTarget.value
        });
      }), (0, n.A)(this, "stopMousePropagation", e => {
        e.stopPropagation();
      }), (0, n.A)(this, "setOperationSearchInput", e => {
        this.operationSearchInput = e;
      }), (0, n.A)(this, "handleClearOperationSearch", () => {
        this.setState({
          operationSearchText: ""
        });
      }), (0, n.A)(this, "handleDockResizeMouseDown", e => {
        e.preventDefault(), e.stopPropagation(), this.dockResizeStart = {
          x: e.pageX,
          y: e.pageY,
          dockSize: this.state.dockSize
        }, document.addEventListener("mousemove", this.handleDockResizeMouseMove), document.addEventListener("mouseup", this.handleDockResizeMouseUp);
      }), (0, n.A)(this, "handleDockResizeMouseMove", e => {
        if (this.dockResizeStart) {
          e.preventDefault();
          var t = e.pageX - this.dockResizeStart.x,
            r = this.dockResizeStart.dockSize - t;
          this.setState({
            dockSize: Math.max(280, Math.min(900, r))
          });
        }
      }), (0, n.A)(this, "handleDockResizeMouseUp", () => {
        this.removeDockResizeListeners();
      });
    }
    componentDidMount() {
      this.loadPersistedData(), this.persistInterval = setInterval(this.persistIfChanged, 5e3), this.notifyDockLayout();
    }
    componentDidUpdate(e, t) {
      t.dockMode == this.state.dockMode && t.dockSize == this.state.dockSize || this.notifyDockLayout(), t.operationSearchText != this.state.operationSearchText && this.operationSearchInput && this.restoreOperationSearchFocus();
    }
    componentWillUnmount() {
      this.removeDockResizeListeners(), this.props.onDockLayoutChange(void 0), clearInterval(this.persistInterval), this.closing || this.persistIfChanged();
    }
    loadPersistedData() {
      f.d.load().then(e => {
        if (e) {
          var t = I(I({}, e), {}, {
            terminalVisible: void 0 !== e.terminalVisible ? e.terminalVisible : this.state.terminalVisible,
            assumingVisible: void 0 !== e.assumingVisible ? e.assumingVisible : this.state.assumingVisible,
            terminalHeight: e.terminalHeight || this.state.terminalHeight,
            size: e.size || this.state.size,
            pos: e.pos || this.state.pos,
            dockMode: this.normalizeDockMode(e.dockMode),
            dockSize: e.dockSize || this.state.dockSize,
            fields: I(I({}, T), e.fields || {}),
            fieldModels: I(I(I({}, this.createDefaultFieldModels()), this.createFieldModelsFromText(e.fields || {})), e.fieldModels || {})
          });
          this.lastPersistedSnapshotText = this.getSnapshotCompareText(t), this.setState({
            terminalVisible: t.terminalVisible,
            assumingVisible: t.assumingVisible,
            terminalHeight: t.terminalHeight,
            size: t.size,
            pos: t.pos,
            dockMode: t.dockMode,
            dockSize: t.dockSize,
            fieldModels: t.fieldModels
          });
        }
      });
    }
    getSnapshotCompareText(e) {
      return JSON.stringify({
        version: e.version,
        show: e.show,
        terminalVisible: e.terminalVisible,
        assumingVisible: e.assumingVisible,
        terminalHeight: e.terminalHeight,
        size: e.size,
        pos: e.pos,
        dockMode: e.dockMode,
        dockSize: e.dockSize,
        fieldModels: e.fieldModels
      });
    }
    persistSnapshot(e) {
      this.lastPersistedSnapshotText = this.getSnapshotCompareText(e), f.d.save(e);
    }
    buildSnapshot(e) {
      return {
        version: 3,
        show: e,
        dockMode: this.state.dockMode,
        dockSize: this.state.dockSize,
        terminalVisible: this.state.terminalVisible,
        assumingVisible: this.state.assumingVisible,
        terminalHeight: this.state.terminalHeight,
        size: this.state.size,
        pos: this.state.pos,
        fieldModels: this.state.fieldModels,
        updatedAt: Date.now()
      };
    }
    normalizeDockMode(e) {
      return "right" == e ? "right" : "floating";
    }
    notifyDockLayout() {
      "floating" != this.state.dockMode ? this.props.onDockLayoutChange({
        dockMode: this.state.dockMode,
        dockSize: this.state.dockSize
      }) : this.props.onDockLayoutChange(void 0);
    }
    getFieldModel(e, t) {
      return this.getFieldModelByKey("".concat(e, ".").concat(t));
    }
    getFieldModelByKey(e) {
      return this.state.fieldModels[e] || this.createEditorFromText(T[e] || "");
    }
    createDefaultFieldModels() {
      return this.createFieldModelsFromText(T);
    }
    createFieldModelsFromText(e) {
      var t = {};
      return Object.keys(e || {}).forEach(r => {
        t[r] = this.createEditorFromText(e[r]);
      }), t;
    }
    createEditorFromText(e) {
      var t = i.A.createEmptyEditor(),
        r = (e || "").trim();
      return r ? I(I({}, t), {}, {
        lines: [I(I({}, t.lines[0]), {}, {
          blocks: [i.A.createTextBlock(r)]
        })]
      }) : t;
    }
    renderContent() {
      return this.state.casEnglineLoaded ? a().createElement("div", {
        className: "tw:relative tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:bg-[var(--ui-surface-muted,#f7f7f7)]"
      }, a().createElement("div", {
        className: this.state.terminalVisible ? "tw:relative tw:z-0 tw:border-b tw:border-[var(--ui-border,#d1d5db)]" : ""
      }, this.renderSympyInteractive()), a().createElement(b, {
        show: this.state.terminalVisible,
        targetHeight: this.state.terminalHeight,
        onTargetHeightChange: this.handleTerminalHeightChange,
        minHeight: 120
      }), a().createElement("div", {
        className: "tw:flex-1 tw:overflow-auto tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:pb-14"
      }, this.state.assumingVisible ? this.renderAssumptionContext() : null, this.renderOperationPalette()), this.renderErrorDetailsPopup()) : a().createElement(m, {
        casEngine: this.casEngine,
        onLoaded: () => {
          this.setState({
            casEnglineLoaded: !0
          });
        }
      });
    }
    renderSympyInteractive() {
      return a().createElement(P, {
        show: this.state.terminalVisible,
        casEngine: this.casEngine,
        onAddCasItem: this.handleAddCasItemFromInteractive,
        height: this.state.terminalHeight
      });
    }
    cleanErrorMessage(e) {
      var t = e.indexOf("\n    at "),
        r,
        n = (t >= 0 ? e.substring(0, t).trimEnd() : e).split("\n"),
        i = n.findIndex(e => /Traceback \(most recent call last\)/.test(e)),
        o = i >= 0 ? n.slice(i) : n,
        s = o.join("\n"),
        a = o.map(e => e.trim()).filter(Boolean),
        l = a[a.length - 1] || e;
      return {
        summary: l = l.replace(/\s*\(at\s+\S+\)\s*$/, ""),
        cleaned: s
      };
    }
    renderOperationError(e) {
      var t = this.state.lastError;
      if (!t || t.operation !== e) return null;
      var r = this.cleanErrorMessage(t.message),
        n = r.summary,
        i,
        o = r.cleaned.includes("\n");
      return a().createElement("div", {
        className: "tw:flex tw:items-start tw:gap-1.5 tw:rounded tw:border tw:border-[var(--ui-danger-border,#fecaca)] tw:bg-[var(--ui-danger-surface,#fef2f2)] tw:px-2 tw:py-1.5"
      }, a().createElement("i", {
        className: "fa fa-exclamation-triangle tw:mt-0.5 tw:flex-shrink-0 tw:text-[11px] tw:text-red-500"
      }), a().createElement("div", {
        className: "tw:min-w-0 tw:flex-1 tw:text-[11px] tw:leading-4 tw:text-[color:var(--ui-danger,#b91c1c)]"
      }, n, o ? a().createElement("span", {
        className: "tw:ml-1.5 tw:cursor-pointer tw:text-red-500 tw:underline",
        onClick: () => this.setState({
          errorDetailsVisible: !0
        })
      }, "Details") : null), a().createElement("span", {
        className: "tw:flex-shrink-0 tw:cursor-pointer tw:text-[10px] tw:text-red-400 tw:hover:text-red-600",
        onClick: () => this.setState({
          lastError: void 0
        })
      }, a().createElement("i", {
        className: "fa fa-times"
      })));
    }
    renderErrorDetailsPopup() {
      if (!this.state.errorDetailsVisible || !this.state.lastError) return null;
      var e,
        t = this.cleanErrorMessage(this.state.lastError.message).cleaned;
      return a().createElement("div", {
        className: "tw:absolute tw:inset-0 tw:z-50 tw:flex tw:items-center tw:justify-center tw:bg-black/30",
        onClick: () => this.setState({
          errorDetailsVisible: !1
        })
      }, a().createElement("div", {
        className: "tw:mx-3 tw:flex tw:max-h-[80%] tw:w-full tw:max-w-lg tw:flex-col tw:rounded tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)] tw:shadow-lg",
        onClick: e => e.stopPropagation()
      }, a().createElement("div", {
        className: "tw:flex tw:items-center tw:border-b tw:border-[var(--ui-border,#e5e7eb)] tw:px-3 tw:py-2"
      }, a().createElement("div", {
        className: "tw:flex-1 tw:text-[12px] tw:font-medium tw:text-[color:var(--ui-danger,#b91c1c)]"
      }, a().createElement("i", {
        className: "fa fa-exclamation-triangle tw:mr-1"
      }), "Error Details"), a().createElement("span", {
        className: "tw:cursor-pointer tw:text-[11px] tw:text-[color:var(--ui-text-disabled,#9ca3af)] tw:hover:text-[color:var(--ui-text-muted,#4b5563)]",
        onClick: () => this.setState({
          errorDetailsVisible: !1
        })
      }, a().createElement("i", {
        className: "fa fa-times"
      }))), a().createElement("pre", {
        className: "tw:flex-1 tw:overflow-auto tw:whitespace-pre-wrap tw:break-words tw:p-3 tw:text-[11px] tw:leading-4 tw:text-[color:var(--ui-text,#1f2937)]"
      }, t)));
    }
    renderAssumptionContext() {
      return a().createElement("div", {
        className: "tw:flex tw:flex-col tw:gap-1 tw:border-b tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:p-2"
      }, a().createElement("div", {
        className: "tw:flex tw:items-baseline tw:gap-2"
      }, a().createElement("div", {
        className: "tw:text-[12px] tw:font-medium tw:leading-4 tw:text-[color:var(--ui-text,#1f2937)]"
      }, "Assuming"), a().createElement("div", {
        className: "tw:text-[10px] tw:leading-3 tw:text-[color:var(--ui-text-muted,#6b7280)]"
      }, "One assumption per line, applied to every run"), this.renderAssumptionInfoIcon()), a().createElement(L, {
        cacheKey: "global-assumptions",
        MathTypeClss: this.props.MathTypeClss,
        model: this.getFieldModelByKey("global.assumptions"),
        width: "100%",
        height: 74,
        multiline: !0,
        onModelChanged: e => this.setFieldModelByKey("global.assumptions", e)
      }));
    }
    renderAssumptionInfoIcon() {
      return a().createElement("span", {
        className: "tw:relative tw:inline-flex tw:items-center tw:text-[color:var(--ui-text-muted,#6b7280)]",
        style: {
          cursor: "default"
        },
        onMouseEnter: this.showAssumptionInfo,
        onMouseLeave: this.hideAssumptionInfo
      }, a().createElement("i", {
        className: "fa fa-info-circle",
        style: {
          fontSize: 10
        }
      }), this.state.assumptionInfoVisible ? a().createElement("div", {
        className: "tw:absolute tw:left-0 tw:top-4 tw:z-50 tw:w-40 tw:border tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface,white)] tw:p-2 tw:text-[10px] tw:font-normal tw:leading-3 tw:text-[color:var(--ui-text-muted,#4b5563)] tw:shadow-md",
        style: {
          cursor: "default"
        }
      }, "Examples:", a().createElement("br", null), a().createElement("span", {
        className: "tw:font-mono"
      }, "positive(x)"), a().createElement("br", null), a().createElement("span", {
        className: "tw:font-mono"
      }, "integer(n)")) : null);
    }
    renderOperationPalette() {
      var e = this.getFilteredOperations();
      return a().createElement("div", {
        className: "tw:flex tw:flex-col tw:bg-[var(--ui-surface-muted,#f7f7f7)]"
      }, this.renderOperationSearch(e.length), e.length <= 0 ? this.renderEmptyOperationSearch() : this.renderOperationGroups(e));
    }
    renderOperationSearch(e) {
      return a().createElement("div", {
        className: "tw:flex tw:items-center tw:gap-2 tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:p-2"
      }, a().createElement("input", {
        ref: this.setOperationSearchInput,
        className: "tw:h-6 tw:min-w-0 tw:flex-1 tw:border tw:border-[var(--ui-border,#d1d5db)] tw:px-2 tw:text-xs tw:outline-none tw:focus:border-green-500",
        value: this.state.operationSearchText,
        placeholder: "Search CAS actions",
        onChange: this.handleOperationSearchChange,
        onMouseDown: this.stopMousePropagation,
        onMouseUp: this.stopMousePropagation,
        onClick: this.stopMousePropagation
      }), this.state.operationSearchText ? a().createElement("button", {
        type: "button",
        className: "btn-normal tw:h-6 tw:px-2 tw:text-xs",
        onClick: this.handleClearOperationSearch
      }, "Clear") : null, a().createElement("div", {
        className: "tw:flex-shrink-0 tw:text-[10px] tw:text-[color:var(--ui-text-muted,#6b7280)]"
      }, e, "/", R.length));
    }
    renderEmptyOperationSearch() {
      return a().createElement("div", {
        className: "tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:p-3 tw:text-xs tw:text-[color:var(--ui-text-muted,#4b5563)]"
      }, "No CAS actions match this search.");
    }
    renderOperationGroups(e) {
      return a().createElement("div", {
        className: "tw:flex tw:flex-col"
      }, B.map(t => {
        var r = e.filter(e => e.category == t);
        return r.length <= 0 ? null : a().createElement("div", {
          key: t,
          className: "tw:flex tw:flex-col"
        }, a().createElement("div", {
          className: "tw:flex tw:items-center tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:px-2 tw:py-1"
        }, a().createElement("div", {
          className: "tw:text-[11px] tw:font-semibold tw:uppercase tw:tracking-wide tw:text-[color:var(--ui-text-muted,#4b5563)]"
        }, t)), a().createElement("div", {
          className: "tw:grid",
          style: {
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
          }
        }, r.map(e => this.renderOperationCard(e))));
      }));
    }
    getFilteredOperations() {
      var e = (this.state.operationSearchText || "").trim().toLowerCase();
      return e ? R.filter(t => {
        var r;
        return "".concat(t.title, " ").concat(t.description, " ").concat(t.category, " ").concat(t.type).toLowerCase().indexOf(e) >= 0;
      }) : R;
    }
    restoreOperationSearchFocus() {
      this.restoringOperationSearchFocus || (this.restoringOperationSearchFocus = !0, setTimeout(() => {
        if (this.restoringOperationSearchFocus = !1, this.operationSearchInput) {
          var e = this.operationSearchInput,
            t = e.selectionStart,
            r = e.selectionEnd;
          e.focus(), null !== t && null !== r && e.setSelectionRange(t, r);
        }
      }, 0));
    }
    renderOperationCard(e) {
      var t = this.state.runningOperation == e.type,
        r = t || this.state.hoveredOperation == e.type;
      return a().createElement("div", {
        key: e.type,
        className: "tw:flex tw:flex-col tw:gap-1.5 tw:border-t tw:border-[var(--ui-border,#d1d5db)] tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:p-2",
        style: {
          cursor: "default"
        },
        onMouseEnter: () => this.setHoveredOperation(e.type),
        onMouseLeave: () => this.setHoveredOperation(void 0)
      }, a().createElement("div", {
        className: "tw:flex tw:w-full tw:items-center tw:gap-2"
      }, a().createElement("div", {
        className: "tw:min-w-0 tw:flex-1"
      }, a().createElement("div", {
        className: "tw:text-[13px] tw:font-medium tw:leading-4 tw:text-[color:var(--ui-text,#1f2937)]"
      }, e.title), a().createElement("div", {
        className: "tw:overflow-hidden tw:text-ellipsis tw:whitespace-nowrap tw:text-[11px] tw:leading-4 tw:text-[color:var(--ui-text-muted,#4b5563)]"
      }, e.description)), a().createElement("button", {
        className: "btn-normal tw:w-14 tw:flex-shrink-0",
        disabled: !!this.state.runningOperation,
        onClick: () => this.handleRunOperation(e.type),
        style: {
          visibility: r ? "visible" : "hidden"
        }
      }, t ? "..." : "Run")), e.fields && e.fields.length > 0 ? a().createElement("div", {
        className: "tw:flex tw:w-full tw:flex-wrap tw:items-center tw:gap-2"
      }, e.fields.map(t => this.renderFieldInput(e.type, t))) : null, this.renderOperationError(e.type));
    }
    setHoveredOperation(e) {
      this.setState({
        hoveredOperation: e
      });
    }
    renderFieldInput(e, t) {
      var r = {
        variable: "var",
        from: "from",
        to: "to",
        assumption: "assuming"
      };
      return a().createElement("div", {
        key: "".concat(e, ".").concat(t),
        className: "tw:flex tw:flex-row tw:items-start tw:gap-1"
      }, a().createElement("span", {
        className: "tw:mt-[5px] tw:flex-shrink-0 tw:text-[10px] tw:leading-3 tw:text-[color:var(--ui-text-muted,#4b5563)]"
      }, r[t]), a().createElement(L, {
        cacheKey: "".concat(e, "-").concat(t),
        MathTypeClss: this.props.MathTypeClss,
        model: this.getFieldModel(e, t),
        width: "assumption" == t ? 110 : "variable" == t ? 78 : 68,
        onModelChanged: r => this.setFieldModel(e, t, r)
      }));
    }
    buildRequest(e, t) {
      switch (e) {
        case "substitute":
          var r = this.getFieldBlocks(e, "from"),
            n = this.getFieldBlocks(e, "to");
          return r.length <= 0 || n.length <= 0 ? {
            type: "info-error",
            msg: "Substitute requires both From and To values."
          } : {
            type: "substitute",
            expr: t,
            from: r,
            to: n
          };
        case "simplify":
        case "expand":
        case "factor":
        case "cancel":
        case "apart":
        case "together":
        case "trigsimp":
        case "powsimp":
        case "radsimp":
        case "ratsimp":
        case "combsimp":
        case "signsimp":
        case "powdenest":
        case "logcombine":
        case "expand_trig":
        case "expand_log":
        case "expand_power_base":
        case "ask":
        case "solve":
        case "matrix-determinant":
        case "matrix-inverse":
        case "matrix-transpose":
        case "matrix-rref":
        case "matrix-eigenvalues":
        case "matrix-eigenvectors":
          if ("solve" == e) {
            var i = this.getFieldBlocks(e, "variable");
            return i.length > 0 ? {
              type: "solve",
              expr: t,
              variable: i
            } : {
              type: "solve",
              expr: t
            };
          }
          return {
            type: e,
            expr: t
          };
        case "refine":
          var o = this.getFieldBlocks(e, "assumption");
          return o.length <= 0 ? {
            type: "info-error",
            msg: "Refine requires an assumption."
          } : {
            type: "refine",
            expr: t,
            assumption: o
          };
        case "differentiate":
        case "integrate":
        case "collect":
          var s = this.getFieldBlocks(e, "variable");
          return s.length <= 0 ? {
            type: "info-error",
            msg: "".concat(R.find(t => t.type == e).title, " requires a variable.")
          } : {
            type: e,
            expr: t,
            variable: s
          };
        case "limit":
          var a = this.getFieldBlocks(e, "variable"),
            l = this.getFieldBlocks(e, "to");
          return a.length <= 0 || l.length <= 0 ? {
            type: "info-error",
            msg: "Limit requires both a variable and a target value."
          } : {
            type: "limit",
            expr: t,
            variable: a,
            to: l
          };
        case "sum":
        case "product":
          var c = this.getFieldBlocks(e, "variable"),
            d = this.getFieldBlocks(e, "from"),
            h = this.getFieldBlocks(e, "to");
          return c.length <= 0 || d.length <= 0 || h.length <= 0 ? {
            type: "info-error",
            msg: "".concat(R.find(t => t.type == e).title, " requires variable, from, and to values.")
          } : {
            type: e,
            expr: t,
            variable: c,
            from: d,
            to: h
          };
      }
    }
    getFieldBlocks(e, t) {
      return this.getFieldBlocksByKey("".concat(e, ".").concat(t));
    }
    getFieldBlocksByKey(e) {
      var t = this.getFieldModelByKey(e),
        r = t && t.lines && t.lines[0];
      return r && r.blocks ? r.blocks : [];
    }
    getFieldLineBlocksByKey(e) {
      var t = this.getFieldModelByKey(e);
      return t && t.lines ? t.lines.map(e => e && e.blocks ? e.blocks : []).filter(e => e.length > 0) : [];
    }
    addAssumptionContext(e) {
      var t = this.getFieldLineBlocksByKey("global.assumptions");
      return t.length <= 0 ? e : I(I({}, e), {}, {
        assumptions: t
      });
    }
    handleRunOperation(e) {
      var t = this.props.getInputBlocks();
      if (!t || t.length <= 0) this.setState({
        lastError: {
          operation: e,
          message: "Current selection is not in math mode, so this CAS action cannot run."
        },
        lastRunInfo: void 0
      });else {
        var r = this.buildRequest(e, t);
        "info-error" != r.type ? (this.setState({
          runningOperation: e,
          lastError: void 0,
          lastRunInfo: void 0,
          errorDetailsVisible: !1
        }), this.casEngine.run(this.addAssumptionContext(r)).then(t => {
          this.props.insertResultBlocks(t), this.setState({
            runningOperation: void 0,
            lastError: void 0,
            lastRunInfo: "".concat(R.find(t => t.type == e).title, " inserted a result into the next line.")
          });
        }).catch(t => {
          var r = t && t.message || String(t) || "Unknown error";
          this.setState({
            runningOperation: void 0,
            lastError: {
              operation: e,
              message: r
            },
            lastRunInfo: void 0
          });
        })) : this.setState({
          lastError: {
            operation: e,
            message: r.msg
          },
          lastRunInfo: void 0
        });
      }
    }
    renderHeaderSettingsButton() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dark";
      return a().createElement(y, {
        tone: e,
        terminalVisible: this.state.terminalVisible,
        assumingVisible: this.state.assumingVisible,
        dockMode: this.state.dockMode,
        onToggleTerminal: this.handleToggleTerminal,
        onToggleAssuming: this.handleToggleAssuming,
        onDockModeChange: this.handleDockModeChange,
        onClose: this.handleClose
      });
    }
    renderDockedHeader() {
      return a().createElement("div", {
        className: "tw:relative tw:z-10 tw:flex tw:h-7 tw:items-center tw:justify-between tw:border-b tw:border-[var(--ui-border,#e5e7eb)] tw:bg-[var(--ui-surface-muted,#f7f7f7)] tw:px-2 tw:text-[color:var(--ui-text,#1f2937)] tw:shadow-sm"
      }, a().createElement("div", {
        className: "tw:text-xs tw:font-semibold"
      }, "CAS Dialog"), a().createElement("div", {
        className: "tw:flex tw:items-center tw:gap-2"
      }, this.renderHeaderSettingsButton("dark")));
    }
    getDockedPanelStyle() {
      var e = {
        position: "fixed",
        zIndex: 1e3,
        backgroundColor: "var(--ui-surface-muted, #f7f7f7)",
        color: "var(--ui-text, black)",
        boxShadow: "0 0 8px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column"
      };
      switch (this.state.dockMode) {
        case "right":
          return I(I({}, e), {}, {
            top: 72,
            right: 0,
            bottom: 0,
            width: this.state.dockSize
          });
        case "floating":
          return e;
      }
    }
    renderDockResizeHandle() {
      if ("floating" == this.state.dockMode) return null;
      var e = {
        position: "absolute",
        left: -4,
        top: 0,
        bottom: 0,
        width: 8,
        cursor: "ew-resize",
        zIndex: 2
      };
      return a().createElement("div", {
        style: e,
        onMouseDown: this.handleDockResizeMouseDown
      });
    }
    removeDockResizeListeners() {
      document.removeEventListener("mousemove", this.handleDockResizeMouseMove), document.removeEventListener("mouseup", this.handleDockResizeMouseUp), this.dockResizeStart = void 0;
    }
    renderDockedPanel() {
      return a().createElement("div", {
        className: "tw:flex tw:flex-col",
        style: this.getDockedPanelStyle()
      }, this.renderDockResizeHandle(), this.renderDockedHeader(), a().createElement("div", {
        className: "tw:flex tw:min-h-0 tw:flex-1 tw:flex-col"
      }, this.renderContent()));
    }
    render() {
      var e = this.state,
        t = e.pos,
        r = e.size;
      return "floating" != this.state.dockMode ? this.renderDockedPanel() : a().createElement(o.A, {
        size: "medium",
        scroll: "dialog",
        style: {
          width: r.x,
          height: r.y,
          left: t.x,
          top: t.y,
          position: "fixed",
          transform: "none",
          display: "flex",
          flexDirection: "column"
        },
        contentStyle: {
          display: "flex",
          flex: 1,
          minHeight: 0,
          width: "100%"
        },
        preventCloseEscape: !0,
        noOverlay: !0,
        resizeAndMoveable: {
          pos: t,
          size: r
        },
        onPosSizeChange: this.handlePosSizeChange,
        grayBackground: !0,
        headerHidden: !1,
        title: "CAS Dialog",
        headerStyle: {
          backgroundColor: "var(--ui-header, #4CAF50)",
          color: "var(--ui-on-accent, white)",
          display: "flex",
          alignItems: "center",
          minHeight: 26,
          marginBottom: 0,
          borderBottom: "1px solid var(--ui-border, #3f9b43)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.22)"
        },
        renderHeaderActions: () => this.renderHeaderSettingsButton("light"),
        hideCloseButton: !0,
        onOk: () => {},
        onCancel: this.handleClose,
        footerStyle: {
          display: "none"
        },
        showOk: !1,
        show: !0
      }, a().createElement("div", {
        className: "tw:flex tw:min-h-0 tw:w-full tw:flex-1 tw:flex-col tw:bg-[var(--ui-surface-muted,#f7f7f7)]"
      }, this.renderContent()));
    }
  }
};
