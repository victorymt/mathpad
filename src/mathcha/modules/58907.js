/* module 58907 — 2392 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  class s {
    constructor() {
      (0, n.A)(this, "sendModalComponent", null);
    }
    getCenterStyle() {
      return {
        transform: "none",
        position: "static",
        margin: "auto"
      };
    }
    getModalDialogContainer() {
      var e = this;
      return class t extends o().Component {
        constructor(t) {
          super(t), (0, n.A)(this, "modals", []), e.sendModalComponent = (e, t) => {
            var r = this.modals.find(e => e.id == t);
            (r || e) && (r && r.element == e || (e ? r ? r.element = e : this.modals = this.modals.concat([{
              id: t,
              element: e
            }]) : this.modals = this.modals.filter(e => e.id != t), this.forceUpdate()));
          };
        }
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return this.modals.length <= 0 ? o().createElement("div", {
            className: "modal-dialog-root-container",
            style: {
              width: 0,
              height: 0
            }
          }) : o().createElement("div", {
            className: "modal-dialog-root-container"
          }, this.modals.map((e, t) => o().createElement("div", {
            style: {
              zIndex: t + 10,
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            key: e.id
          }, o().createElement("overlay", null), e.element)));
        }
      };
    }
    getModalDialog() {
      var e = this;
      return class t extends o().Component {
        constructor() {
          super(...arguments), (0, n.A)(this, "id", "mdialog-" + Math.random());
        }
        componentDidMount() {
          this.props.show && e.sendModalComponent(this.props.children, this.id);
        }
        componentWillUnmount() {
          this.props.show && e.sendModalComponent(null, this.id);
        }
        componentWillReceiveProps(t) {
          if (t.show) e.sendModalComponent(t.children, this.id);else if (t.show != this.props.show) return t.show ? void 0 : e.sendModalComponent(null, this.id);
        }
        render() {
          return o().createElement("div", null);
        }
      };
    }
  }
  const a = new s();
};
