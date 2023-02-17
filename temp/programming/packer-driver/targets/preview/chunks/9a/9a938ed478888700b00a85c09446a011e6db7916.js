System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PARAMS_NAME_TYPE, SPIKES_COUNT_MAP_NUMBER_ENUM, SubStateMachine, SpikesSubStateMachine, _crd;

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_MAP_NUMBER_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "../Base/SubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
      SPIKES_COUNT_MAP_NUMBER_ENUM = _unresolved_2.SPIKES_COUNT_MAP_NUMBER_ENUM;
    }, function (_unresolved_3) {
      SubStateMachine = _unresolved_3.SubStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7138dUg+4hLmY6oCloEjQXl", "SpikesSubStateMahine", undefined);

      __checkObsolete__(['AnimationClip']);

      _export("default", SpikesSubStateMachine = class SpikesSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        constructor(fsm) {
          super(fsm);
        }

        run() {
          var value = this.fsm.getParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_CUR_COUNT).value;
          this.currentSate = this.stateMachine.get((_crd && SPIKES_COUNT_MAP_NUMBER_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM({
            error: Error()
          }), SPIKES_COUNT_MAP_NUMBER_ENUM) : SPIKES_COUNT_MAP_NUMBER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a938ed478888700b00a85c09446a011e6db7916.js.map