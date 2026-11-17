/* module 86562 — 1431 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    a: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "states", new Map()), (0, n.A)(this, "listeners", new Map());
    }
    getState(e) {
      var t;
      return null !== (t = this.states.get(e)) && void 0 !== t ? t : {};
    }
    setHoveredTrajectory(e, t) {
      var r,
        n = null !== (r = this.states.get(e)) && void 0 !== r ? r : {};
      n.hoveredTrajectoryIndex = t, this.states.set(e, n), this.notifyListeners(e);
    }
    setHoveredEquilibria(e, t) {
      var r,
        n = null !== (r = this.states.get(e)) && void 0 !== r ? r : {};
      n.hoveredEquilibriaIndex = t, this.states.set(e, n), this.notifyListeners(e);
    }
    setHoveredBoundaryEquilibria(e, t) {
      var r,
        n = null !== (r = this.states.get(e)) && void 0 !== r ? r : {};
      n.hoveredBoundaryEquilibriaIndex = t, this.states.set(e, n), this.notifyListeners(e);
    }
    subscribe(e, t) {
      this.listeners.has(e) || this.listeners.set(e, new Set()), this.listeners.get(e).add(t);
    }
    unsubscribe(e, t) {
      var r;
      null === (r = this.listeners.get(e)) || void 0 === r || r.delete(t);
    }
    cleanup(e) {
      this.states.delete(e), this.listeners.delete(e);
    }
    notifyListeners(e) {
      var t;
      null === (t = this.listeners.get(e)) || void 0 === t || t.forEach(e => e());
    }
  }
  var o = new i();
};
