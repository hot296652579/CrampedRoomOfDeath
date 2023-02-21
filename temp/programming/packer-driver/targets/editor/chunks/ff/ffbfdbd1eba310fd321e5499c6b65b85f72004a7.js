System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, PARAMS_NAME_TYPE, getParamsInitNumber, getParamsInitTrigger, StateMachine, SoundMgr, DeathIronSubStateMachine, IdleIronSubStateMachine, _dec, _class, _crd, ccclass, property, IronStateMachine;

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitNumber(extras) {
    _reporterNs.report("getParamsInitNumber", "../../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitTrigger(extras) {
    _reporterNs.report("getParamsInitTrigger", "../../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundMgr(extras) {
    _reporterNs.report("SoundMgr", "../../Runtime/SoundMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathIronSubStateMachine(extras) {
    _reporterNs.report("DeathIronSubStateMachine", "./DeathIronSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdleIronSubStateMachine(extras) {
    _reporterNs.report("IdleIronSubStateMachine", "./IdleIronSubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      getParamsInitNumber = _unresolved_3.getParamsInitNumber;
      getParamsInitTrigger = _unresolved_3.getParamsInitTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SoundMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      DeathIronSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      IdleIronSubStateMachine = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af3221SDnJMjIKqn4XfssxV", "IronStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronStateMachine", IronStateMachine = (_dec = ccclass('IronStateMachine'), _dec(_class = class IronStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        async init() {
          this.animationCom = this.addComponent(Animation);
          this.initParams();
          this.initSateMachine();
          this.addAnimationEvent();
          await Promise.all(this.waitList);
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DIRECTION, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
        }

        initSateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE, new (_crd && IdleIronSubStateMachine === void 0 ? (_reportPossibleCrUseOfIdleIronSubStateMachine({
            error: Error()
          }), IdleIronSubStateMachine) : IdleIronSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH, new (_crd && DeathIronSubStateMachine === void 0 ? (_reportPossibleCrUseOfDeathIronSubStateMachine({
            error: Error()
          }), DeathIronSubStateMachine) : DeathIronSubStateMachine)(this));
        }

        addAnimationEvent() {}

        run() {
          switch (this.currentSate) {
            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT):
            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKFRONT):
            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKTURNLEFT):
            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE):
              if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH);
                (_crd && SoundMgr === void 0 ? (_reportPossibleCrUseOfSoundMgr({
                  error: Error()
                }), SoundMgr) : SoundMgr).Instance.playSound('sound/enemyDeath');
              } else {
                this.currentSate = this.currentSate;
              }

              break;

            default:
              this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE);
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffbfdbd1eba310fd321e5499c6b65b85f72004a7.js.map