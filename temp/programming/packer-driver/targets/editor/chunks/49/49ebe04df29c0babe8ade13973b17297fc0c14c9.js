System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_TYPE, State, SubStateMachine, TurnLeftSubStateMachine, _crd, BASE_URL, BASE_END;

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../Base/State", _context.meta, extras);
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
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      State = _unresolved_3.default;
    }, function (_unresolved_4) {
      SubStateMachine = _unresolved_4.SubStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eba8f+4+PJB+JhV3tkdBXEx", "TurnLeftSubStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = 'texture/player/turnleft/';
      BASE_END = '/turnleft';

      _export("default", TurnLeftSubStateMachine = class TurnLeftSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}top` + BASE_END));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}bottom` + BASE_END));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}left` + BASE_END));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}right` + BASE_END));
        }

        run() {
          const {
            value
          } = this.fsm.getParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DIRECTION);
          this.currentSate = this.stateMachine.get((_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49ebe04df29c0babe8ade13973b17297fc0c14c9.js.map