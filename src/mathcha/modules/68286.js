/* module 68286 — 5027 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(64467),
    i = r(25742),
    o = r(61848),
    s = r(27271),
    a = r(90437);
  class l {
    insertRowBelow(e, t) {
      var r = e.model,
        n = e.selected,
        i = s.A.insertNewRowBelow(r, n.key),
        l = n;
      return t && (l = o.A.update(n, {
        key: a.Z.nextRowFormKey(n.key),
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      })), {
        model: i,
        selected: l
      };
    }
    insertRowAbove(e) {
      var t = e.model,
        r = e.selected,
        n,
        i;
      return {
        model: s.A.insertNewRowAbove(t, r.key),
        selected: o.A.update(r, {
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        })
      };
    }
    insertColumnOnLeft(e) {
      var t = e.model,
        r = e.selected,
        n,
        i;
      return {
        model: s.A.insertColumnOnLeft(t, r.key),
        selected: o.A.update(r, {
          selected: {
            lineIndex: 0,
            charIndex: 0
          }
        })
      };
    }
    insertColumnOnRight(e, t) {
      var r = e.model,
        n = e.selected,
        i = s.A.insertColumnOnRight(r, n.key),
        l = n;
      return t && (l = o.A.update(n, {
        key: a.Z.nextColumnFormKey(n.key),
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      })), {
        model: i,
        selected: l
      };
    }
    removeCurrentRow(e, t) {
      var r = e.model,
        n = e.selected,
        i = s.A.removeRows(r, t),
        o;
      return i.row <= 0 || i.column <= 0 ? {
        model: i,
        selected: n
      } : {
        model: i,
        selected: s.A.findSafeCursorBackward(i, n, t[0])
      };
    }
    removeCurrentColumn(e, t) {
      var r = e.model,
        n = e.selected,
        i = s.A.removeColumns(r, t),
        o;
      return i.row <= 0 || i.column <= 0 ? {
        model: i,
        selected: n
      } : {
        model: i,
        selected: s.A.findSafeCursorBackward(i, n.selected, t[0])
      };
    }
  }
  const c = new l();
  var d = r(2543),
    h = r.n(d),
    p = r(94362);
  class u extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "cacheRowIds", {});
    }
    insertRowBelow() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      p.A.in(() => {
        var t = c.insertRowBelow({
            model: this.props.data,
            selected: this.props.selected
          }, e),
          r = t.model,
          n = t.selected;
        this.props.onDataChanged(r), e && this.props.onSelectedChanged(n);
      });
    }
    insertRowAbove() {
      p.A.in(() => {
        var e = c.insertRowAbove({
            model: this.props.data,
            selected: this.props.selected
          }),
          t = e.model,
          r = e.selected;
        this.props.onDataChanged(t), this.props.onSelectedChanged(r);
      });
    }
    insertColumnOnLeft() {
      p.A.in(() => {
        var e = c.insertColumnOnLeft({
            model: this.props.data,
            selected: this.props.selected
          }),
          t = e.model,
          r = e.selected;
        this.props.onDataChanged(t), this.props.onSelectedChanged(r);
      });
    }
    insertColumnOnRight() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      p.A.in(() => {
        var t = c.insertColumnOnRight({
            model: this.props.data,
            selected: this.props.selected
          }, e),
          r = t.model,
          n = t.selected;
        this.props.onDataChanged(r), e && this.props.onSelectedChanged(n);
      });
    }
    removeCurrentRow(e) {
      return p.A.in(() => {
        e = e || [this.props.selected.key];
        var t = c.removeCurrentRow({
            model: this.props.data,
            selected: this.props.selected
          }, e),
          r = t.model,
          n = t.selected;
        if (r.row <= 0 || r.column <= 0) return {
          removeSelf: !0
        };
        this.props.onDataChanged(r), this.props.onSelectedChanged(n);
      });
    }
    removeCurrentColumn(e) {
      return p.A.in(() => {
        e = e || [this.props.selected.key];
        var t = c.removeCurrentColumn({
            model: this.props.data,
            selected: this.props.selected
          }, e),
          r = t.model,
          n = t.selected;
        if (r.row <= 0 || r.column <= 0) return {
          removeSelf: !0
        };
        this.props.onDataChanged(r), this.props.onSelectedChanged(n);
      });
    }
    getKeyForRow(e) {
      var t = a.Z.getAllKeysFromRow(this.props.data, e),
        r = h().map(t, e => this.props.data.elements[e].id),
        n = h().find(h().keys(this.cacheRowIds), e => {
          var t = this.cacheRowIds[e];
          return h().intersection(r, t).length > 0;
        });
      return n || (n = "n" + Math.random()), this.cacheRowIds[n] = r, n;
    }
  }
};
