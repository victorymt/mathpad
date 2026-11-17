/* module 9371 — 2198 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(21774),
    o = r(57381),
    s = r(9099),
    a = r(14930);
  class l {
    constructor() {
      (0, n.A)(this, "walls", {}), (0, n.A)(this, "loadingEvent", void 0), (0, n.A)(this, "handleAllMsg", (e, t) => {
        if (this.loadingEvent) if (e) switch ("spell-check-loaded-result" == e.type && "error" == e.status && this.markErrorWorker(t), e.type) {
          case "dic-loading-result":
          case "spell-check-loaded-result":
            this.loadingEvent.onEvent(t, e);
        } else console.warn(e, t);
      });
    }
    getWall(e) {
      var t = a.u.langToUniqkey(e),
        r = this.walls[t];
      return r ? r && i.A.isObj(e) && i.A.isObj(r.language) && e.ver != r.language.ver && (console.log("language version changed"), r.wall.terminate(), r = this.initWall(e), this.walls[t] = r) : (r = this.initWall(e), this.walls[t] = r), r;
    }
    initWall(e) {
      var t = {
        wall: new s.A("spell-check.worker", t => {
          this.handleAllMsg(t, e);
        }, t => {
          this.handleAllMsg(t, e);
        }, () => {
          this.markErrorWorker(e), this.loadingEvent.onEvent(e, {
            type: "spell-check-loaded-result",
            status: "error",
            errMsg: "Error on Loading Worker"
          });
        }),
        language: e
      };
      return t.wall.requestAndIgnore({
        action: "init",
        language: e,
        downloadAndUsingLocalDic: o.A.downloadAndUsingLocalDic
      }), t;
    }
    markErrorWorker(e) {
      var t = this.walls[a.u.langToUniqkey(e)];
      t && (t.error = !0);
    }
    preload(e) {
      this.getWall(e);
    }
    request(e, t, r) {
      var n;
      return this.getWall(t).wall.request(e, r);
    }
    retryLoadingSpellCheck(e) {
      if ("none" != e) {
        var t = a.u.langToUniqkey(e),
          r = this.walls[t];
        r && r.error && (console.log("retry to load spellcheck"), r.wall.terminate(), r = this.initWall(e), this.walls[t] = r);
      }
    }
    cancellAllRequests() {
      Object.values(this.walls).forEach(e => e.wall.clearAllCall());
    }
  }
  const c = new l();
};
