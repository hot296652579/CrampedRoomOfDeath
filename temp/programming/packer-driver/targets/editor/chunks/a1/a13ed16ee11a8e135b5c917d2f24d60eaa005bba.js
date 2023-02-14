System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, PARAMS_NAME_TYPE, ENTITY_STATE_ENUM, BlockFrontSubStateMachine, BlockTurnLeftSubStateMachine, IdleSubStateMachine, TurnLeftSubStateMachine, EnitiyMgr, getParamsInitNumber, getParamsInitTrigger, StateMachine, _dec, _class, _crd, ccclass, property, PlayerStateMachine;

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockFrontSubStateMachine(extras) {
    _reporterNs.report("BlockFrontSubStateMachine", "../Player/BlockFrontSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockTurnLeftSubStateMachine(extras) {
    _reporterNs.report("BlockTurnLeftSubStateMachine", "../Player/BlockTurnLeftSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdleSubStateMachine(extras) {
    _reporterNs.report("IdleSubStateMachine", "../Player/IdleSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTurnLeftSubStateMachine(extras) {
    _reporterNs.report("TurnLeftSubStateMachine", "../Player/TurnLeftSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnitiyMgr(extras) {
    _reporterNs.report("EnitiyMgr", "./EnitiyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitNumber(extras) {
    _reporterNs.report("getParamsInitNumber", "./SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitTrigger(extras) {
    _reporterNs.report("getParamsInitTrigger", "./SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./SateMachine", _context.meta, extras);
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
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
    }, function (_unresolved_3) {
      BlockFrontSubStateMachine = _unresolved_3.default;
    }, function (_unresolved_4) {
      BlockTurnLeftSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      IdleSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      TurnLeftSubStateMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      EnitiyMgr = _unresolved_7.EnitiyMgr;
    }, function (_unresolved_8) {
      getParamsInitNumber = _unresolved_8.getParamsInitNumber;
      getParamsInitTrigger = _unresolved_8.getParamsInitTrigger;
      StateMachine = _unresolved_8.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6883a7qa75JVqgE4sZsfJT+", "PlayerStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerStateMachine", PlayerStateMachine = (_dec = ccclass('PlayerStateMachine'), _dec(_class = class PlayerStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
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
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DIRECTION, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKFRONT, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKTURNLEFT, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
            error: Error()
          }), getParamsInitTrigger) : getParamsInitTrigger)());
        }

        initSateMachine() {
          // this.stateMachine.set(PARAMS_NAME_TYPE.IDLE, new State(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop))
          // this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new State(this, 'texture/player/turnleft/top/turnleft'))
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE, new (_crd && IdleSubStateMachine === void 0 ? (_reportPossibleCrUseOfIdleSubStateMachine({
            error: Error()
          }), IdleSubStateMachine) : IdleSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT, new (_crd && TurnLeftSubStateMachine === void 0 ? (_reportPossibleCrUseOfTurnLeftSubStateMachine({
            error: Error()
          }), TurnLeftSubStateMachine) : TurnLeftSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKFRONT, new (_crd && BlockFrontSubStateMachine === void 0 ? (_reportPossibleCrUseOfBlockFrontSubStateMachine({
            error: Error()
          }), BlockFrontSubStateMachine) : BlockFrontSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKTURNLEFT, new (_crd && BlockTurnLeftSubStateMachine === void 0 ? (_reportPossibleCrUseOfBlockTurnLeftSubStateMachine({
            error: Error()
          }), BlockTurnLeftSubStateMachine) : BlockTurnLeftSubStateMachine)(this));
        }

        addAnimationEvent() {
          this.animationCom.on(Animation.EventType.FINISHED, () => {
            const animationName = this.animationCom.defaultClip.name;
            const list = ['block', 'turn'];

            if (list.some(v => animationName.includes(v))) {
              // this.setParams(PARAMS_NAME_TYPE.IDLE, true)
              this.node.getComponent(_crd && EnitiyMgr === void 0 ? (_reportPossibleCrUseOfEnitiyMgr({
                error: Error()
              }), EnitiyMgr) : EnitiyMgr).state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE;
            }
          });
        }

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
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKFRONT).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKFRONT);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKTURNLEFT).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).BLOCKTURNLEFT);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDLE);
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
//# sourceMappingURL=a13ed16ee11a8e135b5c917d2f24d60eaa005bba.js.map