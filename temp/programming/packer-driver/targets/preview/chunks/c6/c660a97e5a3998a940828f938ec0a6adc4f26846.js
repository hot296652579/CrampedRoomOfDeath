System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ENTITY_STATE_ENUM, ENUM_EVENT, EnemyMgr, EventMgr, DataManager, WoodenStateMachine, _dec, _class, _crd, MOVE_SPEED, ccclass, property, WoodenMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && WoodenStateMachine === void 0 ? (_reportPossibleCrUseOfWoodenStateMachine({
              error: Error()
            }), WoodenStateMachine) : WoodenStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END, _this.checkAttack, _this);
          })();
        }

        checkAttack() {
          console.log('当前状态state', this.state);
          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || !(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo) return; // const { x: playerX, y: playerY, state: playerState } = DataManager.Instance.playerInfo
          // const disX = Math.abs(this.x - playerX)
          // const disY = Math.abs(this.y - playerY)
          // if (playerState == ENTITY_STATE_ENUM.DEATH || playerState == ENTITY_STATE_ENUM.AIRDEATH)
          //     return
          // if ((this.x === playerX && disY <= 1) || (this.y === playerY && disX <= 1)) {
          //     this.state = ENTITY_STATE_ENUM.ATTACK
          //     EventMgr.Instance.emit(ENUM_EVENT.ENUM_PLAYER_DEATH, ENTITY_STATE_ENUM.DEATH)
          // } else {
          //     this.state = ENTITY_STATE_ENUM.IDLE
          // }

          var {
            targetX: playerX,
            targetY: playerY,
            state: playerState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo;

          if ((playerX === this.x && Math.abs(playerY - this.y) <= 1 || playerY === this.y && Math.abs(playerX - this.x) <= 1) && playerState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH && playerState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH) {
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
        } // onLoad() {
        //     super.onLoad()
        //     EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkAttack, this)
        // }


        onDestroy() {
          super.onDestroy();
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
//# sourceMappingURL=c660a97e5a3998a940828f938ec0a6adc4f26846.js.map