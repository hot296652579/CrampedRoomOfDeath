System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AnimationClip, Animation, PARAMS_NAME_TYPE, getParamsInitNumber, getParamsInitTrigger, StateMachine, State, _dec, _class, _crd, ccclass, property, PlayerStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./State", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AnimationClip = _cc.AnimationClip;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      getParamsInitNumber = _unresolved_3.getParamsInitNumber;
      getParamsInitTrigger = _unresolved_3.getParamsInitTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      State = _unresolved_4.default;
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
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationCom = _this.addComponent(Animation);

            _this.initParams();

            _this.initSateMachine();

            _this.addAnimationEvent();

            yield Promise.all(_this.waitList);
          })();
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, (_crd && getParamsInitTrigger === void 0 ? (_reportPossibleCrUseOfgetParamsInitTrigger({
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
        }

        initSateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop));
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, 'texture/player/turnleft/top/turnleft'));
        }

        addAnimationEvent() {
          this.animationCom.on(Animation.EventType.FINISHED, () => {
            var animationName = this.animationCom.defaultClip.name;
            var list = ['turn'];

            if (list.some(v => animationName.includes(v))) {
              this.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, true);
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
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL):
              if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL).value) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL);
              }

              break;

            default:
              this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL);
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c8b4021cf8ecaa0a0ad4074bbeb7a06cf0e0929.js.map