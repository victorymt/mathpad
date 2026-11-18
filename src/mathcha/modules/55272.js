/* module 55272 — 12139 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => c,
    i: () => l
  });
  var n = r(64467),
    i = r(12753);
  class o {
    constructor(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      if ((0, n.A)(this, "batchIds", void 0), (0, n.A)(this, "level", void 0), (0, n.A)(this, "tag", void 0), (0, n.A)(this, "commands", []), (0, n.A)(this, "tailCommands", []), (0, n.A)(this, "isProcessing", !1), (0, n.A)(this, "subUpdaterProcess", void 0), (0, n.A)(this, "isUpgraded", void 0), this.batchIds = e, this.level = t, this.tag = r, this.level >= 100) throw new Error("Why do we need to create sub level >100 !!!");
    }
    upgradeToTag(e) {
      this.tag = e, this.isUpgraded = !0, console.info("upgraded to Tag", this.tag);
    }
    hasCommands() {
      return this.commands.length > 0 || this.tailCommands.length > 0;
    }
    push(e, t, r) {
      if (this.isProcessing) return this.getSubUpdater().push(e, t, r);
      e.instanceToCheck = t, this._pushTo(this.commands, e, r);
    }
    pushOnCallback(e, t, r) {
      if (this.isProcessing) return this.getSubUpdater().pushOnCallback(e, t, r);
      var n = i.A.toPromiseOnRequire(e);
      this.isPromise(n) && this.push({
        promise: n
      }, t, r);
    }
    pushToEnd(e, t) {
      if (this.isProcessing) return this.getSubUpdater().pushToEnd(e, t);
      e.instanceToCheck = t, this._pushTo(this.tailCommands, e, !0);
    }
    process() {
      if (this.isProcessing) return console.warn("is processing, other process will be ignore"), void console.warn("cur batch id: ", this.batchIds, " level:", this.level);
      try {
        return this._process();
      } catch (e) {
        console.error("Error on run process"), console.error(e);
      }
    }
    getSubUpdater() {
      return this.subUpdaterProcess || (this.subUpdaterProcess = new o(this.batchIds.concat(["sub-".concat(Math.random())]), this.level + 1)), this.subUpdaterProcess;
    }
    isPromise(e) {
      return e && void 0 !== e.then;
    }
    static isPromisedCommand(e) {
      return e && null != e.promise;
    }
    _pushTo(e, t, r) {
      if (!t) throw new Error("command should not be null");
      if (r && t.instanceToCheck) {
        if (o.shouldIgnoreCommand(t, r)) return;
        void 0 === t.instanceToCheck.queueCount && (t.instanceToCheck.queueCount = 0), t.instanceToCheck.queueCount++, t.instanceToCheck.queuedCommand && (t.instanceToCheck.queuedCommand[1] = !0);
        var n = [t, !1];
        return t.instanceToCheck.queuedCommand = n, void e.push(n);
      }
      e.push(t);
    }
    static shouldIgnoreCommand(e, t) {
      return !!(t && e.instanceToCheck && e.instanceToCheck.queuedCommand) && e.instanceToCheck.queueCount > 10;
    }
    static callCommand(e) {
      if (e) {
        if (e instanceof Array) {
          if (e[1]) return;
          e = e[0];
        }
        if (!e.instanceToCheck || !e.instanceToCheck.willComponentUnmount) {
          if (this.isPromisedCommand(e)) return e.promise;
          try {
            var t;
            return e();
          } catch (e) {
            console.error(e);
          } finally {
            e.instanceToCheck && e.instanceToCheck.queuedCommand && (e.instanceToCheck.queuedCommand = void 0, e.instanceToCheck.queueCount = 0);
          }
        }
      }
    }
    _process() {
      this.isProcessing = !0;
      var e = this.commands.concat([{
        promise: Promise.resolve()
      }]).concat(this.tailCommands);
      return this.tailCommands = [], this.commands = [], this.promiseEach({
        commands: e,
        commandsLength: e.length,
        commandIndex: 0,
        nOfPromisedCommand: 0
      }).then(() => {
        if (this.subUpdaterProcess) return this.subUpdaterProcess.process();
      }).catch(e => {
        console.error("Something happen inside batch"), console.error(e);
      }).finally(() => {
        this.commands = [], this.tailCommands = [], this.isProcessing = !1;
      });
    }
    clear() {
      this.commands = [], this.tailCommands = [], this.isProcessing = !1;
    }
    promiseEach(e) {
      for (var t; e.commandIndex < e.commandsLength;) {
        var r = e.commands[e.commandIndex];
        if (e.commandIndex += 1, r) {
          var n = o.callCommand(r);
          if (this.isPromise(n)) {
            t = n;
            break;
          }
        }
      }
      return t ? (e.nOfPromisedCommand += 1, t.then(() => this.promiseEach(e))) : Promise.resolve(e);
    }
  }
  class s {
    constructor(e) {
      (0, n.A)(this, "tag", void 0), (0, n.A)(this, "p", Promise.resolve()), this.tag = e;
    }
    push() {
      throw new Error("Method not implemented.");
    }
    pushOnCallback() {
      throw new Error("Method not implemented.");
    }
    pushToEnd() {
      throw new Error("Method not implemented.");
    }
    upgradeToTag() {
      throw new Error("Method not implemented.");
    }
    process() {
      return this.p;
    }
    hasCommands() {
      return !1;
    }
  }
  var a = r(55451);
  class l {
    constructor(e, t, r) {
      var i = this;
      (0, n.A)(this, "afterChangeHandler", void 0), (0, n.A)(this, "delayRenderHandler", void 0), (0, n.A)(this, "onMountedProcessed", void 0), (0, n.A)(this, "rootEmpty", new s("root")), (0, n.A)(this, "curDelayRenderEmpty", new s("delay")), (0, n.A)(this, "updaterProcess", this.rootEmpty), (0, n.A)(this, "extraCycleCommands", void 0), (0, n.A)(this, "busyPromise", void 0), (0, n.A)(this, "delayRunningCtx", void 0), (0, n.A)(this, "requestedBusy", !1), (0, n.A)(this, "processForPassiveDelay", e => this.updaterProcess.process()), (0, n.A)(this, "processForLazyDelayNonBusy", () => this.updaterProcess.process()), (0, n.A)(this, "processForRequestBusyDelayHandle", () => this.updaterProcess.process().then(() => {
        this.afterChangeHandler.notifyForDelayRender();
      })), (0, n.A)(this, "clean", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
          r = () => {
            t() && (i.updaterProcess = i.rootEmpty, i.extraCycleCommands = void 0, i.busyPromise = void 0, i.delayRunningCtx = void 0);
          };
        try {
          var n = i.drainRemainingWork(0, t);
          if (n) return n.finally(r);
          r();
        } catch (e) {
          throw r(), e;
        }
      }), this.afterChangeHandler = e, this.delayRenderHandler = t, this.onMountedProcessed = r;
    }
    initUpdater() {
      return this.updaterProcess == this.rootEmpty && (this.updaterProcess = new o(["root-".concat(Math.random())], 0, "root")), this.updaterProcess == this.curDelayRenderEmpty && (this.updaterProcess = new o(["cur-delay-render-".concat(Math.random())], 0, "delay")), this.updaterProcess;
    }
    waitFree() {
      return this.isBusy() ? i.A.retryOnTrueOrThrow(() => !this.isBusy(), 10, 500, new c("Document is stuck in processing data, you may need to refresh the page")) : Promise.resolve();
    }
    push(e, t, r) {
      return this.initUpdater().push(e, t, r);
    }
    pushOnCallback(e, t, r) {
      return this.initUpdater().pushOnCallback(e, t, r);
    }
    pushToEnd(e, t) {
      return this.initUpdater().pushToEnd(e, t);
    }
    upgradeDelayToRoot() {
      var e, t;
      null !== (e = this.delayRunningCtx) && void 0 !== e && null !== (t = e.options) && void 0 !== t && t.cancel && (this.delayRunningCtx.preventClear = !0, this.delayRunningCtx.options.cancel()), this.initUpdater().upgradeToTag("root"), this.delayRunningCtx = void 0, console.debug(this.updaterProcess);
    }
    withinDelayRenderNonBusy(e, t) {
      if (!this.isBusy()) {
        this.updaterProcess = this.curDelayRenderEmpty;
        var r = {
          p: void 0,
          options: t,
          preventClear: !1
        };
        return this.delayRunningCtx = r, r.p = e(this.processForLazyDelayNonBusy).finally(() => {
          var e = () => this.delayRunningCtx === r && !r.preventClear;
          if (e()) return this.afterChangeHandler.notifyForDelayRender(), this.clean("withinDelayRender", e);
        }), r.p;
      }
      console.warn("withinDelayRender: Can not request within delay render as busy with: ", this.updaterProcess);
    }
    processOnly(e) {
      return this.isBusy() ? (console.warn("processOnly: Batch is busy with: ", this.updaterProcess.tag, "can not processOnly with", e), this.busyPromise) : "delay" == this.updaterProcess.tag ? (console.warn("processOnly: Current batch is: ", this.updaterProcess.tag, "can not processOnly with", e), (null === (t = this.delayRunningCtx) || void 0 === t ? void 0 : t.p) || Promise.resolve()) : (this.busyPromise = this.updaterProcess.process().finally(() => this.clean("processOnly")), this.busyPromise);
      var t;
    }
    processMount() {
      return this.busyPromise = this.updaterProcess.process().then(() => this.afterChangeHandler.batchUpdateAfterMount()).then(() => this.delayRenderHandler.processAfterUpdate(this.processForPassiveDelay)).then(e => this.afterChangeHandler.delayRenderAfterMount(e)).then(() => this.drainRemainingWork()).then(() => this.delayRenderHandler.notifyMathTypeMountProcessed(this.processForPassiveDelay)).catch(e => {
        console.error("Error on process batch updater"), console.error(e);
      }).finally(() => i.A.executeAfter(this.clean("processMount"), () => {
        var e;
        return null === (e = this.onMountedProcessed) || void 0 === e ? void 0 : e.call(this);
      })), this.busyPromise;
    }
    handleInBusyMode(e, t) {
      if (this.afterChangeHandler.isNonDataChange(e, t)) return console.info("processUpdate: Batch is busy with: ", this.updaterProcess.tag, " but we allow any change not by model"), a.A.nextMicroPromise().then(() => this.afterChangeHandler.delayRenderAfterChange(e, t, !1));
      console.warn("processUpdate: Batch is busy with: ", this.updaterProcess.tag);
    }
    processUpdate(e, t) {
      return this.isBusy() ? this.handleInBusyMode(e, t) : this.innerProcessUpdate(e, t);
    }
    refreshDelayRender() {
      return this.delayRenderHandler.refreshDelayRenderView();
    }
    requestBusyOfDelayRender(e) {
      if (this.requestedBusy) throw new Error("only allow single request busy at a time");
      this.requestedBusy = !0;
      var t = (this.busyPromise || Promise.resolve()).then(() => (this.busyPromise = t, e(this.processForRequestBusyDelayHandle))).finally(() => Promise.resolve(this.clean("requestBusy")).finally(() => {
        this.requestedBusy = !1;
      }));
      return t;
    }
    innerProcessUpdate(e, t) {
      var r = this.updaterProcess;
      return this.busyPromise = r.process().then(() => r instanceof s && r != this.updaterProcess ? this.updaterProcess.process() : this.afterChangeHandler.batchUpdateAfterChange(e, t)).then(() => this.delayRenderHandler.processAfterUpdate(this.processForPassiveDelay)).then(r => this.afterChangeHandler.delayRenderAfterChange(e, t, r)).then(() => this.drainRemainingWork()).then(() => {
        if (this.updaterProcess.isUpgraded) return this.refreshDelayRender();
      }).catch(e => {
        console.error("Error on process batch updater"), console.error(e);
      }).finally(() => this.clean("processUpdate")), this.busyPromise;
    }
    drainRemainingWork() {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0; e < 100; e++) {
        if (!t()) return;
        if (this.updaterProcess.hasCommands()) return this.updaterProcess.process().then(() => this.drainRemainingWork(e + 1, t));
        var r = this.extraCycleCommands;
        if (this.extraCycleCommands = void 0, null == r || !r.length) return;
        r.forEach(e => e());
      }
      throw new c("Post-render updates did not settle after 100 passes");
    }
    requestExtraCycle(e) {
      this.extraCycleCommands || (this.extraCycleCommands = []), this.extraCycleCommands.push(e);
    }
    isBusy() {
      return !!this.busyPromise;
    }
    isDelayLazyBusy() {
      return !!this.delayRunningCtx;
    }
  }
  class c extends Error {}
};
