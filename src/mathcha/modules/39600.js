/* module 39600 — 30608 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => V
  });
  var n = r(64467),
    i = r(45862),
    o = r(85020),
    s = r(40927),
    a = r.n(s),
    l = r(94324),
    c = r(11271),
    d = r(80831),
    h = r(27812),
    p = r(46621),
    u = r(2543),
    g = r.n(u);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends a().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "cellMeasurerCache", void 0), (0, n.A)(this, "cellPositioner", void 0), (0, n.A)(this, "masonryRef", void 0), (0, n.A)(this, "lastClickedKey", void 0), (0, n.A)(this, "handleImageClick", (e, t) => {
        e.metaKey || e.altKey ? this.handleSelectAddImage(t) : e.shiftKey ? this.handleSelectRangeImages(t) : this.props.onSelect([t.key]), this.lastClickedKey = t.key;
      }), (0, n.A)(this, "cellRenderer", e => {
        var t = e.index,
          r = e.key,
          n = e.parent,
          i = e.isScrolling,
          o = e.style,
          s = this.getList()[t];
        if (!s) return null;
        var l = (this.props.selectedKeys || []).indexOf(s.key) >= 0,
          d = f(f({}, o), {}, {
            width: 140,
            height: 140,
            padding: 5,
            background: l ? "var(--ui-selection, #b8deb8)" : "",
            color: l ? "var(--ui-text, black)" : ""
          }),
          u = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            background: l ? "" : "var(--ui-surface-hover, #e8e6e6)"
          },
          g = s.name.indexOf("-"),
          m = s.name.substr(g + 1);
        return a().createElement(c.dl, {
          cache: this.cellMeasurerCache,
          index: t,
          key: r,
          parent: n
        }, a().createElement("div", {
          style: d,
          onDoubleClick: this.props.onDoubleClick,
          onClick: e => this.handleImageClick(e, s)
        }, a().createElement("div", {
          style: u
        }, a().createElement("img", {
          src: h.A.getThumbnailUrl(s.key, this.props.imageFolder),
          style: {
            maxWidth: 140,
            maxHeight: 100
          }
        }), a().createElement("div", {
          style: {
            display: "inline-block",
            position: "absolute",
            right: 5,
            bottom: 45,
            fontSize: 10,
            background: "#00000054",
            color: "var(--ui-on-accent, white)",
            paddingLeft: 2,
            paddingRight: 2
          }
        }, p.A.formatBytes(s.size))), a().createElement("div", {
          style: {
            paddingTop: 10,
            maxHeight: 30,
            overflow: "hidden"
          }
        }, m)));
      }), (0, n.A)(this, "keyMapper", e => {
        var t = this.getList()[e];
        return t ? t.key : "n" + Math.random();
      }), (0, n.A)(this, "onResize", e => {
        var t = e.width,
          r = Math.floor(t / 160);
        this.cellPositioner.reset({
          columnCount: r,
          columnWidth: 150,
          spacer: 10
        }), this.masonryRef.recomputeCellPositions();
      }), (0, n.A)(this, "getMasonryRef", e => {
        this.masonryRef = e;
      }), (0, n.A)(this, "handleRemove", () => {
        this.props.onRemove(this.props.selectedKeys);
      }), this.cellMeasurerCache = new c.jS({
        defaultHeight: 150,
        defaultWidth: 150,
        fixedWidth: !0,
        fixedHeight: !0
      }), this.cellPositioner = (0, l.py)({
        cellMeasurerCache: this.cellMeasurerCache,
        columnCount: 3,
        columnWidth: 150,
        spacer: 10
      });
    }
    getList() {
      return this.props.images || [];
    }
    handleSelectAddImage(e) {
      var t = this.props.selectedKeys;
      g().includes(t, e.key) ? this.props.onSelect(t.filter(t => t != e.key)) : this.props.onSelect(t.concat(e.key));
    }
    handleSelectRangeImages(e) {
      var t = this.props.selectedKeys;
      if (t.length <= 0) this.props.onSelect([e.key]);else {
        var r = this.props.images.indexOf(e),
          n = this.lastClickedKey ? this.props.images.findIndex(e => e.key == this.lastClickedKey) : -1;
        if (n < 0 || n == r || t.includes(e.key)) this.handleSelectAddImage(e);else {
          var i = Math.min(n, r),
            o = Math.max(n, r);
          i >= 0 && o >= 0 && this.props.onSelect(Array.from(new Set(this.props.images.slice(i, o + 1).map(e => e.key).concat(t)).values()));
        }
      }
    }
    renderError() {
      if (!this.props.error) return null;
      var e = {
          position: "absolute",
          top: -20,
          left: "50%",
          transform: "translate(-50%,0)"
        },
        t = this.props.error;
      return t.includes("Your session has expired") && (t = 'Please login to use this feature (or switch to tab "From Url")'), a().createElement("warning-error-region", {
        style: e
      }, a().createElement("error", null, a().createElement("i", {
        className: "fa fa-exclamation-triangle",
        "aria-hidden": "true"
      }), t));
    }
    renderRemoveButton() {
      var e = this.props,
        t = e.selectedKeys,
        r = e.images;
      return a().createElement("button", {
        disabled: !t || t.length <= 0 || !r || r.length <= 0 || this.props.isLoading,
        className: "btn-normal",
        style: {
          height: 22
        },
        onClick: this.handleRemove
      }, a().createElement("i", {
        className: "fa fa-trash",
        "aria-hidden": "true",
        style: {
          fontSize: "1.2em",
          color: "var(--ui-danger, #ce0303)",
          paddingRight: 5
        }
      }), a().createElement("span", null, "Remove"));
    }
    renderRefreshButton() {
      return a().createElement("button", {
        disabled: this.props.isLoading,
        className: "btn-normal",
        style: {
          height: 22,
          marginLeft: 10,
          border: "none"
        },
        onClick: this.props.onRefresh
      }, a().createElement("i", {
        className: "fa fa-refresh",
        "aria-hidden": "true",
        style: {
          fontSize: "1.2em",
          color: "rgb(76, 175, 80)"
        }
      }));
    }
    render() {
      var e = {
          height: 4,
          width: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 29,
          left: 0,
          display: this.props.isLoading ? "block" : "none"
        },
        t = this.props.selectedKeys || [],
        r = this.props.images || [],
        n = p.A.formatBytes(g().sumBy(r, e => e.size));
      return a().createElement("div", {
        style: {
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          position: "relative"
        }
      }, a().createElement("div", {
        className: "thin-loader",
        style: e
      }), this.renderError(), a().createElement("div", {
        style: {
          height: 25,
          fontSize: 12,
          borderBottom: "1px solid var(--ui-border, lightgray)",
          marginBottom: 15,
          display: "flex",
          alignItems: "baseline"
        }
      }, this.renderRemoveButton(), a().createElement("div", {
        style: {
          marginLeft: 10
        }
      }, t.length, " Selected"), a().createElement("div", {
        style: {
          flexGrow: 1,
          textAlign: "right",
          fontSize: 12
        }
      }, r.length, " Images, Used ", a().createElement("span", {
        style: {
          color: "rgb(76, 175, 80)"
        }
      }, n, " "), " (Max 500MB)"), this.renderRefreshButton()), a().createElement("div", {
        style: {
          flexGrow: 1
        }
      }, a().createElement(d.t$, {
        onResize: this.onResize
      }, e => {
        var t = e.height,
          r = e.width;
        return a().createElement(l.a, {
          style: {
            outline: "none",
            cursor: "default"
          },
          ref: this.getMasonryRef,
          keyMapper: this.keyMapper,
          autoHeight: !1,
          cellCount: this.getList().length,
          cellMeasurerCache: this.cellMeasurerCache,
          cellPositioner: this.cellPositioner,
          cellRenderer: this.cellRenderer,
          width: r,
          height: t
        });
      })));
    }
  }
  var v = 19999,
    b = {
      flexGrow: 1,
      margin: "0 10px 10px 10px",
      border: "1px solid var(--ui-border, lightgray)",
      background: "var(--ui-surface, white)",
      padding: 10,
      display: "flex"
    },
    x = null,
    C = {
      display: "flex",
      flexDirection: "row"
    },
    S = {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderLeft: "1px solid var(--ui-border, lightgray)",
      borderRight: "1px solid var(--ui-border, lightgray)",
      borderBottom: "1px solid var(--ui-border, lightgray)",
      background: "var(--ui-surface, white)"
    },
    A = {
      flexGrow: 1,
      textAlign: "center",
      borderLeft: "1px solid var(--ui-border, lightgray)",
      borderTop: "2px solid #4CAF50",
      borderRight: "1px solid var(--ui-border, lightgray)",
      lineHeight: "1.8em",
      background: "var(--ui-surface, white)"
    },
    w = {
      flexGrow: 1,
      textAlign: "center",
      borderBottom: "1px solid var(--ui-border, lightgray)",
      lineHeight: "1.8em",
      cursor: "pointer",
      borderLeft: "1px solid transparent",
      borderTop: "2px solid transparent",
      borderRight: "1px solid transparent"
    },
    E = {
      flexGrow: 1,
      margin: "10px 10px 10px 0",
      display: "flex",
      flexDirection: "column"
    },
    k = {
      height: 100,
      width: 170,
      margin: 10,
      border: "1px solid var(--ui-border, lightgray)",
      background: "var(--ui-surface, white)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    },
    O = {
      display: "flex",
      flexDirection: "row"
    },
    D = r(31595),
    P = r(91636),
    M = r(14825),
    I = r(3531);
  function T(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? T(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class R extends a().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "files", []), (0, n.A)(this, "uploadOperation", void 0), (0, n.A)(this, "onDrop", e => {
        if (e = e.slice(0, 10), console.log(e), !(e.length <= 0)) {
          this.files = e, 1 == e.length ? this.props.onImageSelect(e[0].preview) : this.props.onImageSelect(void 0);
          var t = null,
            r;
          e.some(e => e.size >= 5e6) && (t = "File too big! (Max 5MB)"), g().sumBy(e, e => e.size) + this.props.totalSize > this.props.maxToltalSize && (t = "Exceed limit of total max size is 500MB");
          var n = 1 == e.length ? e[0].name : "".concat(e.length, " files");
          this.setState({
            fileName: n,
            uploadDone: !1,
            fileError: t
          });
        }
      }), (0, n.A)(this, "onUpload", e => {
        var t;
        this.setState({
          uploadInfo: {
            progress: 0
          }
        }), e.stopPropagation(), e.preventDefault();
        var r = this.files.length;
        null === (t = this.uploadOperation) || void 0 === t || t.cancel();
        var n = new P.uG();
        this.uploadOperation = n, (0, P._q)(this.files, (e, t) => (n.check(), D.A.uploadImage(e, e => {
          n.cancelled || this.setState({
            uploadInfo: {
              progress: e / r + t / r
            }
          });
        }, n).then(e => (n.check(), this.props.onUploadDone(e), e)))).then(() => {
          n.check(), this.setState({
            uploadInfo: null,
            uploadDone: !0
          });
        }).catch(e => {
          n.cancelled || this.setState({
            uploadInfo: L(L({}, this.state.uploadInfo), {}, {
              errorMessage: e.message
            })
          });
        }).finally(() => {
          this.uploadOperation === n && (this.uploadOperation = void 0);
        });
      }), (0, n.A)(this, "cancelUpload", () => {
        var e;
        null === (e = this.uploadOperation) || void 0 === e || e.cancel(), this.uploadOperation = void 0, this.setState({
          uploadInfo: null
        });
      }), (0, n.A)(this, "onDragEnter", () => {
        this.setState({
          isDropActive: !0
        });
      }), (0, n.A)(this, "onDragLeave", () => {
        this.setState({
          isDropActive: !1
        });
      });
    }
    componentWillUnmount() {
      var e;
      null === (e = this.uploadOperation) || void 0 === e || e.cancel();
    }
    renderError() {
      if (this.state.fileError) return a().createElement("label", {
        style: {
          color: "#ce0303",
          fontSize: 12,
          position: "absolute",
          bottom: -6,
          left: 10
        }
      }, this.state.fileError, " ");
    }
    render() {
      if (this.state.uploadInfo) {
        var e = null;
        return e = this.state.uploadInfo.errorMessage ? a().createElement("div", {
          style: {
            display: "inline-block",
            float: "right"
          }
        }, a().createElement("button", {
          className: "btn-normal",
          style: {
            display: "inline-block",
            marginRight: 10
          },
          onClick: this.onUpload
        }, "Try Again"), a().createElement("button", {
          className: "btn-normal",
          style: {
            display: "inline-block"
          },
          onClick: () => this.setState({
            fileName: null,
            uploadInfo: null
          })
        }, "Upload another one")) : a().createElement("div", {
          style: {
            display: "inline-block",
            float: "right"
          }
        }, a().createElement("button", {
          className: "btn-normal",
          style: {
            display: "inline-block"
          },
          onClick: this.cancelUpload
        }, "Cancel")), a().createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            padding: 10
          }
        }, a().createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            paddingBottom: 5
          }
        }, a().createElement("span", {
          style: {
            flexGrow: 1
          }
        }, this.state.fileName), a().createElement("span", null, Math.round(100 * this.state.uploadInfo.progress), "%")), a().createElement(I.Z, {
          progress: this.state.uploadInfo.progress,
          strokeWidth: 1,
          style: {
            marginBottom: 5
          }
        }), a().createElement("div", {
          style: {
            height: "1.2em",
            color: "#ce0303",
            fontSize: 12
          }
        }, this.state.uploadInfo.errorMessage, e));
      }
      var t = a().createElement("p", null, "Drop file here, or click to select file (max 5MB).");
      if (this.state.fileName) {
        var r = g().sumBy(this.files, e => e.size);
        t = a().createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            padding: 10,
            width: "100%"
          }
        }, a().createElement("label", {
          style: {
            paddingRight: 10,
            flexGrow: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: 0,
            textOverflow: "ellipsis"
          }
        }, this.state.fileName, " "), a().createElement("label", {
          style: {
            paddingRight: 5,
            fontSize: 12
          }
        }, "[", p.A.formatBytes(r), "]"), a().createElement("button", {
          className: "btn-primary btn-large",
          disabled: !!this.state.fileError,
          style: {
            width: 80
          },
          onClick: this.onUpload
        }, " Upload "));
      }
      this.state.uploadDone && (t = a().createElement("div", {
        style: {
          textAlign: "center"
        }
      }, a().createElement("div", {
        style: {
          color: "rgb(76, 175, 80)"
        }
      }, "Image has been uploaded successfully. "), a().createElement("div", null, this.state.fileName, " ")));
      var n = this.state.isDropActive ? "2px dashed rgb(76, 175, 80)" : "2px dashed lightgray";
      return a().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          padding: 10,
          position: "relative"
        }
      }, a().createElement(M.A, {
        style: {
          border: n,
          flexGrow: 1,
          height: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        },
        onDrop: this.onDrop,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave
      }, t), this.renderError());
    }
  }
  var B = r(82477),
    F = r(58907),
    j = r(31052),
    _ = r(47286);
  function N(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? N(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var H = {
      key: "",
      keys: [],
      type: "from-library"
    },
    W = {
      key: "",
      keys: [],
      imageFolder: "",
      type: "from-library"
    };
  class V extends a().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "ConfirmModalDialog", F.A.getModalDialog()), (0, n.A)(this, "ManagerModalDialog", F.A.getModalDialog()), (0, n.A)(this, "cacheFromUrl", {
        key: "",
        type: "from-url"
      }), (0, n.A)(this, "cacheFromLibrary", {
        key: "",
        type: "from-library"
      }), (0, n.A)(this, "fetchAllImages", () => {
        this.setState({
          imageLoading: !0
        }), D.A.getImageList().then(e => {
          this.setState({
            images: this.sortImages(e.images.map(e => ({
              name: e.key,
              key: e.key,
              lastModified: e.lastModified,
              size: e.size
            }))),
            imageFolder: e.folder,
            imageLoading: !1
          });
        }).catch(e => this.setState({
          imageLoadingError: e.message,
          imageLoading: !1
        }));
      }), (0, n.A)(this, "urlChanged", e => {
        this.setNewSelectedImage({
          key: e.currentTarget.value,
          type: "from-url"
        });
      }), (0, n.A)(this, "onUploadDone", e => {
        var t = this.state.images.filter(t => t.key != e.name);
        this.setState({
          images: this.sortImages(t.concat({
            name: e.name,
            key: e.name,
            lastModified: e.date,
            size: e.size
          })),
          selectedImage: {
            key: e.name,
            keys: [e.name],
            imageFolder: this.state.imageFolder,
            type: "from-library"
          }
        });
      }), (0, n.A)(this, "onDropZoneImageSelect", e => {
        e ? this.setNewSelectedImage({
          key: e,
          type: "temp"
        }) : this.setState({
          selectedImage: W
        });
      }), (0, n.A)(this, "onSelectImage", e => {
        this.setNewSelectedImage({
          key: e[0],
          keys: e,
          imageFolder: this.state.imageFolder,
          type: "from-library"
        });
      }), (0, n.A)(this, "handleRemoveImages", e => {
        this.setState({
          showDeleteConfirm: !0
        }), console.log(e);
      }), (0, n.A)(this, "handleOk", () => {
        var e;
        "temp" != this.state.selectedImage.type && this.props.onUrlChanged(this.getComponentImageUr(), this.props.customData);
      }), (0, n.A)(this, "handleDeleteConfirmClose", () => {
        this.setState({
          showDeleteConfirm: !1
        });
      }), (0, n.A)(this, "handleDeleteConfirmOk", (e, t) => {
        var r = new Set(this.state.selectedImage.keys);
        D.A.deleteImages(this.state.selectedImage.keys).then(() => {
          e(), this.setState({
            selectedImage: H,
            images: this.state.images.filter(e => !r.has(e.key))
          });
        }).catch(e => {
          var r = e.message;
          return t(r);
        });
      });
      var t = this.parseUrlToImageInfo(this.props.url);
      "from-library" == t.type && (this.cacheFromLibrary = t), "from-url" == t.type && (this.cacheFromUrl = t), this.state = {
        images: [],
        imageLoading: !0,
        imageFolder: "",
        selectedImage: t,
        imageLoadingError: null
      };
    }
    parseUrlToImageInfo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (!e) return W;
      var t = h.A.parseUrlToImageInfo(e);
      return "internal" == t.type ? {
        key: t.key,
        keys: [t.key],
        imageFolder: t.imageFolder,
        type: "from-library"
      } : {
        key: e,
        type: "from-url"
      };
    }
    componentDidMount() {
      var e = V.lastImagesInfo;
      e ? this.setState({
        images: e.images,
        imageFolder: e.folder,
        imageLoading: !1
      }) : this.fetchAllImages();
    }
    sortImages(e) {
      return g().orderBy(e, ["lastModified"], ["desc"]);
    }
    setState(e, t) {
      e.images && (e.imageFolder || this.state.imageFolder) && (V.lastImagesInfo = {
        images: e.images,
        folder: e.imageFolder || this.state.imageFolder
      }), super.setState(e, t);
    }
    handleSelectImgType(e) {
      e ? this.setState({
        selectedImage: this.cacheFromLibrary
      }) : this.setState({
        selectedImage: this.cacheFromUrl
      });
    }
    setNewSelectedImage(e) {
      this.setState({
        selectedImage: e
      }), "from-library" == e.type && (this.cacheFromLibrary = e), "from-url" == e.type && (this.cacheFromUrl = e);
    }
    renderFromUrlConfig() {
      return a().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          padding: 10
        }
      }, a().createElement("label", {
        style: {
          paddingRight: 10
        }
      }, "Url: "), a().createElement("input", {
        style: {
          flexGrow: 1,
          height: 20,
          fontSize: 12
        },
        onChange: this.urlChanged,
        type: "text",
        value: this.state.selectedImage.key
      }));
    }
    renderUploadZone() {
      return a().createElement(R, {
        maxToltalSize: 5e8,
        totalSize: g().sumBy(this.state.images, e => e.size),
        onUploadDone: this.onUploadDone,
        onImageSelect: this.onDropZoneImageSelect
      });
    }
    renderTabContent() {
      return this.isLibraryTab() ? this.renderUploadZone() : this.renderFromUrlConfig();
    }
    isLibraryTab() {
      return "from-library" == this.state.selectedImage.type || "temp" == this.state.selectedImage.type;
    }
    renderLibraryContainer() {
      if (this.isLibraryTab()) {
        var e = this.state.selectedImage;
        return a().createElement("div", {
          style: b
        }, a().createElement(y, {
          onSelect: this.onSelectImage,
          onDoubleClick: () => this.setState({
            showFullImageView: !0
          }),
          onRemove: this.handleRemoveImages,
          onRefresh: this.fetchAllImages,
          isLoading: this.state.imageLoading,
          error: this.state.imageLoadingError,
          imageFolder: e.imageFolder || this.state.imageFolder,
          selectedKeys: e.keys,
          images: this.state.images
        }));
      }
    }
    getRawImageUrlOrThumbnail() {
      var e = this.state.selectedImage;
      if (!e.key) return "";
      switch (e.type) {
        case "from-library":
          return h.A.getThumbnailUrl(e.key, e.imageFolder);
        case "from-url":
        case "temp":
          return e.key;
      }
    }
    getComponentImageUr() {
      var e = this.state.selectedImage;
      switch (e.type) {
        case "from-library":
          return h.A.getComponentUrl(e.key, e.imageFolder);
        case "from-url":
          return e.key;
        case "temp":
          throw new Error("should not use this");
      }
    }
    shouldDisableOk() {
      var e = this.state.selectedImage;
      return "temp" == e.type || !e.key || "from-url" != e.type && (!!this.state.imageLoading || void 0);
    }
    renderConfirmDelete() {
      if (this.state.showDeleteConfirm) return a().createElement(this.ConfirmModalDialog, {
        show: !0
      }, a().createElement(B.A, {
        title: "Delete images",
        okLabel: "Delete",
        okVariant: "danger",
        style: {
          top: 190
        },
        label: a().createElement("span", null, "Do you confirm to delete selected Images, other documents may use these images"),
        onOk: this.handleDeleteConfirmOk,
        onCancel: this.handleDeleteConfirmClose,
        onClose: this.handleDeleteConfirmClose,
        show: !0
      }));
    }
    renderFullImageView() {
      if (this.state.showFullImageView) {
        var e = this.state.selectedImage,
          t = h.A.getRawUrl({
            key: e.key,
            imageFolder: e.imageFolder,
            type: "from-library" == e.type ? "internal" : "external"
          }),
          r = "from-library" == e.type ? h.A.getImageDisplayName(e.key) : e.key;
        return a().createElement(j.G, {
          fullUrl: t,
          imageName: r,
          onClose: () => this.setState({
            showFullImageView: !1
          })
        });
      }
    }
    render() {
      var e = this.isLibraryTab(),
        t = this.getRawImageUrlOrThumbnail(),
        r = {
          color: "var(--ui-text-muted, gray)",
          background: "var(--ui-surface-hover, rgb(239, 238, 238))",
          boxShadow: "0 0 2px var(--ui-shadow, black)",
          display: "flex",
          flexDirection: "column",
          fontSize: 13,
          width: "100%",
          height: "100%",
          bottom: e ? 80 : null
        },
        n = {
          outline: "none",
          width: "100%",
          height: "100%"
        };
      return a().createElement(this.ManagerModalDialog, {
        show: !0
      }, a().createElement(_.A, {
        title: "Insert image",
        size: "wide",
        scroll: "body",
        show: !0,
        style: z({
          width: "calc(100% - 100px)",
          height: "calc(100% - 100px)",
          maxWidth: 1340,
          maxHeight: 830,
          padding: 0
        }, F.A.getCenterStyle()),
        renderFooterContent: () => {},
        footerStyle: {
          display: "none"
        },
        contentStyle: {
          display: "block"
        },
        onCancel: this.props.onCancel,
        onClose: this.props.onCancel
      }, a().createElement("div", {
        style: n,
        onDragEnter: e => e.stopPropagation(),
        onDragOver: e => e.stopPropagation(),
        onDragLeave: e => e.stopPropagation(),
        onDrop: e => e.stopPropagation()
      }, a().createElement("div", {
        style: r,
        id: "image-manager-main"
      }, a().createElement("div", {
        style: O
      }, a().createElement("div", {
        style: k,
        onClick: () => this.setState({
          showFullImageView: !0
        })
      }, a().createElement("img", {
        style: {
          maxWidth: "100%",
          maxHeight: "100%"
        },
        src: t
      })), a().createElement("div", {
        style: E
      }, a().createElement("div", {
        style: C
      }, a().createElement("div", {
        onClick: () => this.handleSelectImgType(null),
        style: e ? w : A
      }, "From Url"), a().createElement("div", {
        onClick: () => this.handleSelectImgType(!0),
        style: e ? A : w
      }, "Upload and use From Library")), a().createElement("div", {
        style: S
      }, this.renderTabContent()))), this.renderLibraryContainer(), a().createElement(o.i, {
        className: "tw:px-3 tw:pb-3"
      }, a().createElement(i.$, {
        dialogAction: !0,
        onClick: this.props.onCancel
      }, "Cancel"), a().createElement(i.$, {
        dialogAction: !0,
        variant: "primary",
        disabled: this.shouldDisableOk(),
        onClick: this.handleOk
      }, "Insert")), this.renderConfirmDelete(), this.renderFullImageView()))));
    }
  }
  (0, n.A)(V, "lastImagesInfo", void 0);
};
