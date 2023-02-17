System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SPIKE_COUNT_ENUM, State, SpikesSubStateMachine, SpikesThreeSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfSPIKE_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKE_COUNT_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesSubStateMachine(extras) {
    _reporterNs.report("SpikesSubStateMachine", "./SpikesSubStateMahine", _context.meta, extras);
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
      SPIKE_COUNT_ENUM = _unresolved_2.SPIKE_COUNT_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.default;
    }, function (_unresolved_4) {
      SpikesSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71d59Ek7UBKjpK/Ac6S0rN0", "SpikesThreeStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = 'texture/spikes/spikesthree/';

      _export("default", SpikesThreeSubStateMachine = class SpikesThreeSubStateMachine extends (_crd && SpikesSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesSubStateMachine({
        error: Error()
      }), SpikesSubStateMachine) : SpikesSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).ZERO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}zero/zero`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).ONE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}one/one`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).TWO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}two/two`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).THREE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}three/three`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).FOUR, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}four/four`));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6cadf87486c57d13eac81ed9b29c65438215002.js.map