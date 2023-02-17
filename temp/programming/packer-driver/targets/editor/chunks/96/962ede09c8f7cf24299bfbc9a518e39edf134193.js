System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, ENITIY_TYPE_SPIKES_ENUM, PARAMS_NAME_TYPE, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, getParamsInitNumber, StateMachine, SpikesOneSubStateMachine, _dec, _class, _crd, ccclass, property, SpikeStateMachine;

  function _reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_SPIKES_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetParamsInitNumber(extras) {
    _reporterNs.report("getParamsInitNumber", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesOneSubStateMachine(extras) {
    _reporterNs.report("SpikesOneSubStateMachine", "./SpikesOneSubStateMachine", _context.meta, extras);
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
      ENITIY_TYPE_SPIKES_ENUM = _unresolved_2.ENITIY_TYPE_SPIKES_ENUM;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      getParamsInitNumber = _unresolved_3.getParamsInitNumber;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SpikesOneSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0c9fQr+0lEHaoaw5WYwuI/", "SpikeStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      // import { DataManager.Instance } from "../Runtime/DataManager";
      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikeStateMachine", SpikeStateMachine = (_dec = ccclass('SpikeStateMachine'), _dec(_class = class SpikeStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
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
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_CUR_COUNT, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
          this.params.set((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT, (_crd && getParamsInitNumber === void 0 ? (_reportPossibleCrUseOfgetParamsInitNumber({
            error: Error()
          }), getParamsInitNumber) : getParamsInitNumber)());
        }

        initSateMachine() {
          this.stateMachine.set((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
            error: Error()
          }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE, new (_crd && SpikesOneSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesOneSubStateMachine({
            error: Error()
          }), SpikesOneSubStateMachine) : SpikesOneSubStateMachine)(this));
        }

        addAnimationEvent() {// this.animationCom.on(Animation.EventType.FINISHED, () => {
          //     const animationName = this.animationCom.defaultClip.name
          //     const list = ['attack']
          //     if (list.some(v => animationName.includes(v))) {
          //         // this.setParams(PARAMS_NAME_TYPE.IDLE, true)
          //         this.node.getComponent(EnitiyMgr).state = ENTITY_STATE_ENUM.IDLE
          //     }
          // })
        }

        run() {
          const value = this.getParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT).value;

          switch (this.currentSate) {
            case this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
              error: Error()
            }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE):
              if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE) {
                this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                  error: Error()
                }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE);
              } else {
                this.currentSate = this.currentSate;
              }

              break;

            default:
              this.currentSate = this.stateMachine.get((_crd && ENITIY_TYPE_SPIKES_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM({
                error: Error()
              }), ENITIY_TYPE_SPIKES_ENUM) : ENITIY_TYPE_SPIKES_ENUM).SPIKES_ONE);
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=962ede09c8f7cf24299bfbc9a518e39edf134193.js.map