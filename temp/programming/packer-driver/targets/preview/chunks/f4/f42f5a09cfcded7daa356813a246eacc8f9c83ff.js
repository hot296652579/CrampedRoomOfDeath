System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, game, _decorator, ENUM_EVENT, SHAKE_TYPE_ENUM, EventMgr, _dec, _class, _crd, ccclass, ShakeManager;

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      game = _cc.game;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
      SHAKE_TYPE_ENUM = _unresolved_2.SHAKE_TYPE_ENUM;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16853PPll9E7oM9vDuYU/oK", "ShakeManager", undefined);

      __checkObsolete__(['Component', 'game', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("ShakeManager", ShakeManager = (_dec = ccclass('ShakeManager'), _dec(_class = class ShakeManager extends Component {
        constructor() {
          super(...arguments);
          this.isShaking = void 0;
          this.shakeType = void 0;
          this.oldTime = void 0;
          this.oldPos = {
            x: 0,
            y: 0
          };
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, this.onShake, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, this.onShake);
        }

        stop() {
          this.isShaking = false;
        }

        onShake(type) {
          if (this.isShaking) {
            return;
          }

          this.isShaking = true;
          this.shakeType = type;
          this.oldTime = game.totalTime;
          this.oldPos.x = this.node.position.x;
          this.oldPos.y = this.node.position.y;
        }

        update() {
          this.onShakeUpdate();
        }
        /***
         * 正弦震动
         * y= A * sin *(wx + f)
         */


        onShakeUpdate() {
          if (this.isShaking) {
            //振幅
            var shakeAmount = 1.6; //持续时间

            var duration = 200; //频率

            var frequency = 12; //当前时间

            var curSecond = (game.totalTime - this.oldTime) / 1000; //总时间

            var totalSecond = duration / 1000;
            var offset = shakeAmount * Math.sin(frequency * Math.PI * curSecond);

            if (this.shakeType === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP) {
              this.node.setPosition(this.oldPos.x, this.oldPos.y - offset);
            } else if (this.shakeType === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM) {
              this.node.setPosition(this.oldPos.x, this.oldPos.y + offset);
            } else if (this.shakeType === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT) {
              this.node.setPosition(this.oldPos.x - offset, this.oldPos.y);
            } else if (this.shakeType === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT) {
              this.node.setPosition(this.oldPos.x + offset, this.oldPos.y);
            }

            if (curSecond > totalSecond) {
              this.isShaking = false;
              this.node.setPosition(this.oldPos.x, this.oldPos.y);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f42f5a09cfcded7daa356813a246eacc8f9c83ff.js.map