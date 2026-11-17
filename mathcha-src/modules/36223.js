/* module 36223 — 2561 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(35835),
    o;
  function s() {
    if ("undefined" == typeof window) return !1;
    if (void 0 === o) {
      o = !1;
      var e = () => {},
        t = Object.defineProperty({}, "passive", {
          get: () => (o = !0, !1)
        });
      try {
        window.addEventListener("mathcha-passive-test", e, t), window.removeEventListener("mathcha-passive-test", e, t);
      } catch (e) {
        o = !1;
      }
    }
    return !!o && {
      passive: !1
    };
  }
  class a {
    getLeftTopFromEvent(e) {
      return this.isTouchEvent(e) ? {
        left: e.touches[0].clientX,
        top: e.touches[0].clientY
      } : {
        left: e.clientX,
        top: e.clientY
      };
    }
    getTargetOnMoveEvent(e) {
      if (this.isTouchEvent(e)) {
        var t = e.touches[0];
        return document.elementFromPoint(t.clientX, t.clientY);
      }
      return e.target;
    }
    isTouchEvent(e) {
      return e.touches;
    }
    isLeftButton(e) {
      return 0 === e.button;
    }
    isLeftButtonOrTouch(e) {
      return this.isLeftButton(e) || this.isTouchEvent(e);
    }
    isMiddleButton(e) {
      return 1 === e.button;
    }
    isRightButton(e) {
      return 2 === e.button;
    }
    getStopPropagationForFocusClickMouseDown() {
      return a.stopPropagationForFocusClickMouseDown;
    }
    focusAndCursorSelectAcquired(e) {
      e.customInfo = i.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build();
    }
    onDoubleClickStopPropagation(e) {
      e.stopPropagation();
    }
    onMouseDownStopPropagation(e) {
      e.stopPropagation();
    }
    getFalsePassiveObject() {
      return s();
    }
    getCustomEventInfo(e) {
      return e.customInfo ? e.customInfo : e.nativeEvent && e.nativeEvent.customInfo ? e.nativeEvent.customInfo : void 0;
    }
    cleanCustomInfo(e) {
      e.customInfo && (e.customInfo = void 0);
    }
    setCustomInfo(e, t) {
      e.nativeEvent ? e.nativeEvent.customInfo = t : e.customInfo = t;
    }
    triggerMouseEvent(e, t) {
      var r = new MouseEvent(t, {
        button: 0,
        bubbles: !0,
        cancelable: !1
      });
      e.dispatchEvent(r);
    }
  }
  (0, n.A)(a, "stopPropagationForFocusClickMouseDown", {
    onFocus(e) {
      e.stopPropagation();
    },
    onMouseDown(e) {
      e.stopPropagation();
    },
    onClick(e) {
      e.stopPropagation();
    },
    onDoubleClick(e) {
      e.stopPropagation();
    }
  });
  const l = new a();
};
