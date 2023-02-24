System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ENTITY_STATE_ENUM, ENUM_EVENT, EnemyMgr, EventMgr, DataManager, WoodenStateMachine, _dec, _class, _crd, MOVE_SPEED, ccclass, property, WoodenMgr;

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", "../../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMgr(extras) {
    _reporterNs.report("EnemyMgr", "../../Base/EnemyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenStateMachine(extras) {
    _reporterNs.report("WoodenStateMachine", "./WoodenStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
    }, function (_unresolved_3) {
      EnemyMgr = _unresolved_3.EnemyMgr;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      DataManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      WoodenStateMachine = _unresolved_6.WoodenStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12a30cxxS9GlI+ZJ4RLAeQm", "WoodenMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      _export("MOVE_SPEED", MOVE_SPEED = 1 / 10);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WoodenMgr", WoodenMgr = (_dec = ccclass('WoodenMgr'), _dec(_class = class WoodenMgr extends (_crd && EnemyMgr === void 0 ? (_reportPossibleCrUseOfEnemyMgr({
        error: Error()
      }), EnemyMgr) : EnemyMgr) {
        async init(params) {
          this.fsm = this.addComponent(_crd && WoodenStateMachine === void 0 ? (_reportPossibleCrUseOfWoodenStateMachine({
            error: Error()
          }), WoodenStateMachine) : WoodenStateMachine);
          await this.fsm.init();
          super.init(params);
        }

        checkAttack() {
          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || !(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo) return;
          const {
            x: playerX,
            y: playerY,
            state: playerState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo;
          const disX = Math.abs(this.x - playerX);
          const disY = Math.abs(this.y - playerY);
          if (playerState == (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || playerState == (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH) return;

          if (this.x === playerX && disY <= 1 || this.y === playerY && disX <= 1) {
            console.log('攻击玩家..');
            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_DEATH, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          } else {
            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE;
          }
        }

        onLoad() {
          super.onLoad();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END, this.checkAttack, this);
        }

        onDestry() {
          super.onDestry();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END, this.checkAttack);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8cfdd50e787b0c5d88db446008879bf919ca77f.js.map