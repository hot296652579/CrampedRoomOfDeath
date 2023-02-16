System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, PARAMS_NAME_TYPE, getParamsInitTrigger, StateMachine, State, _dec, _class, _crd, BASE_URL, ccclass, property, BurstStateMachine;

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitTrigger(extras) {
    _reporterNs.report("getParamsInitTrigger", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
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
      getParamsInitTrigger = _unresolved_3.getParamsInitTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      State = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd511eyCjxB0Lnaj3GJ3Qpe", "BurstStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      BASE_URL = 'texture/burst/';
      ({
        ccclass,
        property
      } = _decorator);

      _export("BurstStateMachine", BurstStateMachine = (_dec = ccclass('BurstStateMachine'), _dec(_class = class BurstStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
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
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).ATTACK, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
        }

        initSateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, BASE_URL + 'idle/idle'));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).ATTACK, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, BASE_URL + 'attack/idle'));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DEATH, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, BASE_URL + 'death/idle'));
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
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).ATTACK):
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
              }

              break;

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
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).ATTACK).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).ATTACK);
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
//# sourceMappingURL=e19e2d809846c114a666ff50fdaab1b95df0ffb8.js.map