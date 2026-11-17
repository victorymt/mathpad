/* module 16831 — 5645 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    m: () => l
  });
  var n = r(67107),
    i = r(77664),
    o = r(2543),
    s = r.n(o);
  class a {
    keyToPageSize(e) {
      switch (e) {
        case "letter":
        case "custom":
          return this.makePageSizeInfo(8.5, 11);
        case "tabloid":
          return this.makePageSizeInfo(11, 17);
        case "legal":
          return this.makePageSizeInfo(8.5, 14);
        case "a3":
          return this.makePageSizeInfo(11.69, 16.54);
        case "a4":
          return this.makePageSizeInfo(8.27, 11.69);
        case "a5":
          return this.makePageSizeInfo(5.83, 8.27);
        case "b4":
          return this.makePageSizeInfo(9.84, 13.9);
        case "b5":
          return this.makePageSizeInfo(6.93, 9.84);
      }
      return this.makePageSizeInfo(8.5, 11);
    }
    widthFromKey(e, t, r, i) {
      if (!e || "custom" == e) return n.L.convert(t, r, i);
      var o = this.getPageSizeInfoByKey(e);
      return n.L.convert(o.width, o.unit, i);
    }
    heightFromKey(e, t, r, i) {
      var o, s;
      if (t = null !== (o = t) && void 0 !== o ? o : 1122, r = null !== (s = r) && void 0 !== s ? s : "px", !e || "custom" == e) return n.L.convert(t, r, i);
      var a = this.getPageSizeInfoByKey(e);
      return n.L.convert(a.height, a.unit, i);
    }
    getSelectBoxItemsForPrint() {
      var e;
      return [{
        key: "letter",
        value: 'Letter (8.5" x 11")',
        pageSizeInfo: this.keyToPageSize("letter")
      }, {
        key: "tabloid",
        value: 'Tabloid (11" x 17")',
        pageSizeInfo: this.keyToPageSize("tabloid")
      }, {
        key: "legal",
        value: 'Legal (8.5" x 14")',
        pageSizeInfo: this.keyToPageSize("legal")
      }, {
        key: "a3",
        value: 'A3 (11.69" x 16.54")',
        pageSizeInfo: this.keyToPageSize("a3")
      }, {
        key: "a4",
        value: 'A4 (8.27" x 11.69")',
        pageSizeInfo: this.keyToPageSize("a4")
      }, {
        key: "a5",
        value: 'A5 (5.83" x 8.27")',
        pageSizeInfo: this.keyToPageSize("a5")
      }, {
        key: "b4",
        value: 'B4 (9.84" x 13.90")',
        pageSizeInfo: this.keyToPageSize("b4")
      }, {
        key: "b5",
        value: 'B5 (6.93" x 9.84")',
        pageSizeInfo: this.keyToPageSize("b5")
      }, {
        key: "custom",
        value: "Custom",
        pageSizeInfo: this.keyToPageSize("custom")
      }, {
        key: "same-as-doc",
        value: "Same as Document",
        pageSizeInfo: this.keyToPageSize("a4")
      }, {
        key: "whole-doc",
        value: "Single Whole Document",
        pageSizeInfo: this.keyToPageSize("a4")
      }];
    }
    getSelectBoxItemsForDocumentWidth() {
      var e;
      return [{
        key: "letter",
        value: 'Letter (8.5" x 11")',
        pageSizeInfo: this.keyToPageSize("letter")
      }, {
        key: "tabloid",
        value: 'Tabloid (11" x 17")',
        pageSizeInfo: this.keyToPageSize("tabloid")
      }, {
        key: "legal",
        value: 'Legal (8.5" x 14")',
        pageSizeInfo: this.keyToPageSize("legal")
      }, {
        key: "a3",
        value: 'A3 (11.69" x 16.54")',
        pageSizeInfo: this.keyToPageSize("a3")
      }, {
        key: "a4",
        value: 'A4 (8.27" x 11.69")',
        pageSizeInfo: this.keyToPageSize("a4")
      }, {
        key: "a5",
        value: 'A5 (5.83" x 8.27")',
        pageSizeInfo: this.keyToPageSize("a5")
      }, {
        key: "b4",
        value: 'B4 (9.84" x 13.90")',
        pageSizeInfo: this.keyToPageSize("b4")
      }, {
        key: "b5",
        value: 'B5 (6.93" x 9.84")',
        pageSizeInfo: this.keyToPageSize("b5")
      }, {
        key: "custom",
        value: "Custom",
        pageSizeInfo: this.keyToPageSize("custom")
      }];
    }
    getPageSizeInfoByKey(e) {
      var t;
      return null === (t = this.getSelectBoxItemsForPrint().find(t => t.key == e)) || void 0 === t ? void 0 : t.pageSizeInfo;
    }
    getPredefinedSizeKeyBySize(e) {
      var t = this.getSelectBoxItemsForDocumentWidth().find(t => {
        var r = t.pageSizeInfo;
        return r.width == e.width && r.height == e.height && r.unit == e.unit;
      });
      return null == t ? void 0 : t.key;
    }
    makePageSizeInfo(e, t) {
      var r;
      return {
        width: e,
        height: t,
        unit: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "inch"
      };
    }
    getMaringOrDefault(e) {
      return e || i.e.margin;
    }
    getMaringOrDefaultInPixel(e, t) {
      var r = this.getMaringOrDefault(e),
        i = r.left,
        o = r.top,
        s = r.right,
        a = r.bottom,
        l = r.unit,
        c = void 0 === l ? "px" : l;
      return {
        left: this.innerClampMarginPixel(n.L.toPixel(i, c), t),
        top: this.innerClampMarginPixel(n.L.toPixel(o, c), t),
        right: this.innerClampMarginPixel(n.L.toPixel(s, c), t),
        bottom: this.innerClampMarginPixel(n.L.toPixel(a, c), t),
        unit: "px"
      };
    }
    calculatePageWidthCoutingPadding(e, t, r) {
      var n = this.getMaringOrDefaultInPixel(t, r);
      return this.innerClampPageDimensionPixel(e - n.left - n.right, r);
    }
    innerClampMarginPixel(e, t) {
      return "none" == t ? e : s().clamp(e, 0, 1e3);
    }
    innerClampPageDimensionPixel(e, t) {
      return "none" == t ? e : s().clamp(e, 50, 1e4);
    }
    clampMarginPixel(e) {
      return this.innerClampMarginPixel(e, "clamp");
    }
    clampPageDimensionPixel(e) {
      return this.innerClampPageDimensionPixel(e, "clamp");
    }
  }
  var l = new a();
};
