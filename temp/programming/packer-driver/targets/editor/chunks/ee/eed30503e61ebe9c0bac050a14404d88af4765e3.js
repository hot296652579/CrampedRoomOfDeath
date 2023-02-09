System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, AnimationClip, Animation, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE, Sate, _dec, _class, _crd, getParamsInitValue, ccclass, property, PlayerStateMachine;

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSate(extras) {
    _reporterNs.report("Sate", "./State", _context.meta, extras);
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
      Component = _cc.Component;
      _decorator = _cc._decorator;
      AnimationClip = _cc.AnimationClip;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      Sate = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6883a7qa75JVqgE4sZsfJT+", "PlayerStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      _export("getParamsInitValue", getParamsInitValue = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER,
          value: false
        };
      });

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerStateMachine", PlayerStateMachine = (_dec = ccclass('PlayerStateMachine'), _dec(_class = class PlayerStateMachine extends Component {
        constructor(...args) {
          super(...args);
          this._currentSate = null;
          this.params = new Map();
          this.stateMachine = new Map();
          this.animationCom = null;
          this.waitList = [];
        }

        getParams(paramsName) {
          if (this.params.has(paramsName)) {
            return this.params.get(paramsName);
          }
        }

        setParams(paramsName, value) {
          if (this.params.has(paramsName)) {
            this.params.get(paramsName).value = value;
            this.run();
          }
        }

        get currentSate() {
          return this._currentSate;
        }

        set currentSate(newSate) {
          this._currentSate = newSate;

          this._currentSate.run();
        }

        async init() {
          this.animationCom = this.addComponent(Animation);
          this.initParams();
          this.initSateMachine();
          await Promise.all(this.waitList);
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, getParamsInitValue());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT, getParamsInitValue());
        }

        initSateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, new (_crd && Sate === void 0 ? (_reportPossibleCrUseOfSate({
            error: Error()
          }), Sate) : Sate)(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop)); // this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new Sate(this, 'texture/player/turnleft/top/idle'))
        }

        run() {
          switch (this.currentSate) {
            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT):
              break;

            case this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
              error: Error()
            }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL):
              if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT)) {
                this.currentSate = this.stateMachine.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                  error: Error()
                }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT);
              } else if (this.params.get((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL)) {
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
//# sourceMappingURL=eed30503e61ebe9c0bac050a14404d88af4765e3.js.map