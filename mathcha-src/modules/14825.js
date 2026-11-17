/* module 14825 — 13230 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => M
  });
  var n = r(40927),
    i = r.n(n),
    o = r(5556),
    s = r.n(o),
    a = r(62490),
    l = r.n(a),
    c = "undefined" == typeof document || !document || !document.createElement || "multiple" in document.createElement("input");
  function d(e) {
    var t = [];
    if (e.dataTransfer) {
      var r = e.dataTransfer;
      r.files && r.files.length ? t = r.files : r.items && r.items.length && (t = r.items);
    } else e.target && e.target.files && (t = e.target.files);
    return Array.prototype.slice.call(t);
  }
  function h(e, t) {
    return "application/x-moz-file" === e.type || l()(e, t);
  }
  function p(e, t, r) {
    return e.size <= t && e.size >= r;
  }
  function u(e, t) {
    return e.every(function (e) {
      return h(e, t);
    });
  }
  function g(e) {
    e.preventDefault();
  }
  function m(e) {
    return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/");
  }
  function f(e) {
    return -1 !== e.indexOf("Edge/");
  }
  function y() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
    return m(e) || f(e);
  }
  const v = {
      borderStyle: "solid",
      borderColor: "#c66",
      backgroundColor: "#eee"
    },
    b = {
      opacity: .5
    },
    x = {
      borderStyle: "solid",
      borderColor: "#6c6",
      backgroundColor: "#eee"
    },
    C = {
      width: 200,
      height: 200,
      borderWidth: 2,
      borderColor: "#666",
      borderStyle: "dashed",
      borderRadius: 5
    };
  var S = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    A = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();
  function w(e, t) {
    var r = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
    return r;
  }
  function E(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
      return r;
    }
    return Array.from(e);
  }
  function k(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function O(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }
  function D(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var P = function (e) {
    function t(e, r) {
      k(this, t);
      var n = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
      return n.renderChildren = function (e, t, r, i) {
        return "function" == typeof e ? e(S({}, n.state, {
          isDragActive: t,
          isDragAccept: r,
          isDragReject: i
        })) : e;
      }, n.composeHandlers = n.composeHandlers.bind(n), n.onClick = n.onClick.bind(n), n.onDocumentDrop = n.onDocumentDrop.bind(n), n.onDragEnter = n.onDragEnter.bind(n), n.onDragLeave = n.onDragLeave.bind(n), n.onDragOver = n.onDragOver.bind(n), n.onDragStart = n.onDragStart.bind(n), n.onDrop = n.onDrop.bind(n), n.onFileDialogCancel = n.onFileDialogCancel.bind(n), n.onInputElementClick = n.onInputElementClick.bind(n), n.setRef = n.setRef.bind(n), n.setRefs = n.setRefs.bind(n), n.isFileDialogActive = !1, n.state = {
        draggedFiles: [],
        acceptedFiles: [],
        rejectedFiles: []
      }, n;
    }
    return D(t, e), A(t, [{
      key: "componentDidMount",
      value: function e() {
        var t = this.props.preventDropOnDocument;
        this.dragTargets = [], t && (document.addEventListener("dragover", g, !1), document.addEventListener("drop", this.onDocumentDrop, !1)), this.fileInputEl.addEventListener("click", this.onInputElementClick, !1), window.addEventListener("focus", this.onFileDialogCancel, !1);
      }
    }, {
      key: "componentWillUnmount",
      value: function e() {
        var t;
        this.props.preventDropOnDocument && (document.removeEventListener("dragover", g), document.removeEventListener("drop", this.onDocumentDrop)), null != this.fileInputEl && this.fileInputEl.removeEventListener("click", this.onInputElementClick, !1), window.removeEventListener("focus", this.onFileDialogCancel, !1);
      }
    }, {
      key: "composeHandlers",
      value: function e(t) {
        return this.props.disabled ? null : t;
      }
    }, {
      key: "onDocumentDrop",
      value: function e(t) {
        this.node && this.node.contains(t.target) || (t.preventDefault(), this.dragTargets = []);
      }
    }, {
      key: "onDragStart",
      value: function e(t) {
        this.props.onDragStart && this.props.onDragStart.call(this, t);
      }
    }, {
      key: "onDragEnter",
      value: function e(t) {
        var r = this;
        t.preventDefault(), -1 === this.dragTargets.indexOf(t.target) && this.dragTargets.push(t.target), Promise.resolve(this.props.getDataTransferItems(t)).then(function (e) {
          r.setState({
            isDragActive: !0,
            draggedFiles: e
          });
        }), this.props.onDragEnter && this.props.onDragEnter.call(this, t);
      }
    }, {
      key: "onDragOver",
      value: function e(t) {
        t.preventDefault(), t.stopPropagation();
        try {
          t.dataTransfer.dropEffect = this.isFileDialogActive ? "none" : "copy";
        } catch (e) {}
        return this.props.onDragOver && this.props.onDragOver.call(this, t), !1;
      }
    }, {
      key: "onDragLeave",
      value: function e(t) {
        var r = this;
        t.preventDefault(), this.dragTargets = this.dragTargets.filter(function (e) {
          return e !== t.target && r.node.contains(e);
        }), this.dragTargets.length > 0 || (this.setState({
          isDragActive: !1,
          draggedFiles: []
        }), this.props.onDragLeave && this.props.onDragLeave.call(this, t));
      }
    }, {
      key: "onDrop",
      value: function e(t) {
        var r = this,
          n = this.props,
          e = n.onDrop,
          i = n.onDropAccepted,
          o = n.onDropRejected,
          s = n.multiple,
          a = n.disablePreview,
          l = n.accept,
          c = n.getDataTransferItems;
        t.preventDefault(), this.dragTargets = [], this.isFileDialogActive = !1, this.draggedFiles = null, this.setState({
          isDragActive: !1,
          draggedFiles: []
        }), Promise.resolve(c(t)).then(function (n) {
          var c = [],
            d = [];
          n.forEach(function (e) {
            if (!a) try {
              e.preview = window.URL.createObjectURL(e);
            } catch (e) {
              0;
            }
            h(e, l) && p(e, r.props.maxSize, r.props.minSize) ? c.push(e) : d.push(e);
          }), s || d.push.apply(d, E(c.splice(1))), e && e.call(r, c, d, t), d.length > 0 && o && o.call(r, d, t), c.length > 0 && i && i.call(r, c, t);
        });
      }
    }, {
      key: "onClick",
      value: function e(t) {
        var r = this.props,
          e = r.onClick,
          n;
        r.disableClick || (t.stopPropagation(), e && e.call(this, t), y() ? setTimeout(this.open.bind(this), 0) : this.open());
      }
    }, {
      key: "onInputElementClick",
      value: function e(t) {
        t.stopPropagation(), this.props.inputProps && this.props.inputProps.onClick && this.props.inputProps.onClick();
      }
    }, {
      key: "onFileDialogCancel",
      value: function e() {
        var t = this,
          e = this.props.onFileDialogCancel;
        this.isFileDialogActive && setTimeout(function () {
          var r;
          null != t.fileInputEl && (t.fileInputEl.files.length || (t.isFileDialogActive = !1));
          "function" == typeof e && e();
        }, 300);
      }
    }, {
      key: "setRef",
      value: function e(t) {
        this.node = t;
      }
    }, {
      key: "setRefs",
      value: function e(t) {
        this.fileInputEl = t;
      }
    }, {
      key: "open",
      value: function e() {
        this.isFileDialogActive = !0, this.fileInputEl.value = null, this.fileInputEl.click();
      }
    }, {
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.accept,
          n = t.acceptClassName,
          o = t.activeClassName,
          s = t.children,
          a = t.disabled,
          l = t.disabledClassName,
          d = t.inputProps,
          h = t.multiple,
          p = t.name,
          g = t.rejectClassName,
          m = w(t, ["accept", "acceptClassName", "activeClassName", "children", "disabled", "disabledClassName", "inputProps", "multiple", "name", "rejectClassName"]),
          f = m.acceptStyle,
          y = m.activeStyle,
          A = m.className,
          E = void 0 === A ? "" : A,
          k = m.disabledStyle,
          O = m.rejectStyle,
          D = m.style,
          P = w(m, ["acceptStyle", "activeStyle", "className", "disabledStyle", "rejectStyle", "style"]),
          M = this.state,
          I = M.isDragActive,
          T = M.draggedFiles,
          L = T.length,
          R = h || L <= 1,
          B = L > 0 && u(T, this.props.accept),
          F = L > 0 && (!B || !R),
          j = !(E || D || y || f || O || k);
        I && o && (E += " " + o), B && n && (E += " " + n), F && g && (E += " " + g), a && l && (E += " " + l), j && (D = C, y = x, f = x, O = v, k = b);
        var _ = S({
          position: "relative"
        }, D);
        y && I && (_ = S({}, _, y)), f && B && (_ = S({}, _, f)), O && F && (_ = S({}, _, O)), k && a && (_ = S({}, _, k));
        var N = {
          accept: r,
          disabled: a,
          type: "file",
          style: S({
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 1e-5,
            pointerEvents: "none"
          }, d.style),
          multiple: c && h,
          ref: this.setRefs,
          onChange: this.onDrop,
          autoComplete: "off"
        };
        p && p.length && (N.name = p);
        var z = P.acceptedFiles,
          H = P.preventDropOnDocument,
          W = P.disablePreview,
          V = P.disableClick,
          U = P.onDropAccepted,
          q = P.onDropRejected,
          G = P.onFileDialogCancel,
          K = P.maxSize,
          Z = P.minSize,
          Y = P.getDataTransferItems,
          Q = w(P, ["acceptedFiles", "preventDropOnDocument", "disablePreview", "disableClick", "onDropAccepted", "onDropRejected", "onFileDialogCancel", "maxSize", "minSize", "getDataTransferItems"]);
        return i().createElement("div", S({
          className: E,
          style: _
        }, Q, {
          onClick: this.composeHandlers(this.onClick),
          onDragStart: this.composeHandlers(this.onDragStart),
          onDragEnter: this.composeHandlers(this.onDragEnter),
          onDragOver: this.composeHandlers(this.onDragOver),
          onDragLeave: this.composeHandlers(this.onDragLeave),
          onDrop: this.composeHandlers(this.onDrop),
          ref: this.setRef,
          "aria-disabled": a
        }), this.renderChildren(s, I, B, F), i().createElement("input", S({}, d, N)));
      }
    }]), t;
  }(i().Component);
  const M = P;
  P.propTypes = {
    accept: s().oneOfType([s().string, s().arrayOf(s().string)]),
    children: s().oneOfType([s().node, s().func]),
    disableClick: s().bool,
    disabled: s().bool,
    disablePreview: s().bool,
    preventDropOnDocument: s().bool,
    inputProps: s().object,
    multiple: s().bool,
    name: s().string,
    maxSize: s().number,
    minSize: s().number,
    className: s().string,
    activeClassName: s().string,
    acceptClassName: s().string,
    rejectClassName: s().string,
    disabledClassName: s().string,
    style: s().object,
    activeStyle: s().object,
    acceptStyle: s().object,
    rejectStyle: s().object,
    disabledStyle: s().object,
    getDataTransferItems: s().func,
    onClick: s().func,
    onDrop: s().func,
    onDropAccepted: s().func,
    onDropRejected: s().func,
    onDragStart: s().func,
    onDragEnter: s().func,
    onDragOver: s().func,
    onDragLeave: s().func,
    onFileDialogCancel: s().func
  }, P.defaultProps = {
    preventDropOnDocument: !0,
    disabled: !1,
    disablePreview: !1,
    disableClick: !1,
    inputProps: {},
    multiple: !0,
    maxSize: 1 / 0,
    minSize: 0,
    getDataTransferItems: d
  };
};
