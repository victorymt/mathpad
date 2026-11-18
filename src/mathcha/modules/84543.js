/* module 84543 — 899 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "data", null), (0, n.A)(this, "modelHandler", void 0), (0, n.A)(this, "tablePropertiesHandler", void 0);
    }
    subscribeModelHandler(e) {
      this.modelHandler = e, null != this.data && e.notifiy(this.data);
    }
    subscribeTablePropertiesHandler(e) {
      this.tablePropertiesHandler = e, null != this.data && e.notifiy(this.data);
    }
    unsubscribeModelHandler() {
      this.modelHandler = null, this.data = null;
    }
    unsubscribeTablePropertiesHandler() {
      this.tablePropertiesHandler = null, this.data = null;
    }
    changeData(e) {
      this.data = e, this.modelHandler && this.modelHandler.notifiy(this.data), this.tablePropertiesHandler && this.tablePropertiesHandler.notifiy(this.data);
    }
  }
  const o = new i();
};
