System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, FSM_PARAMS_TYPE_ENUM, _dec, _class, _crd, ccclass, property, SubStateMachine;

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "../../Enum", _context.meta, extras);
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
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24e9aDpZodDSpHQTfTV5uMg", "SubStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SubStateMachine", SubStateMachine = (_dec = ccclass('SubStateMachine'), _dec(_class = class SubStateMachine extends Component {
        constructor(fsm) {
          super();
          this._currentSate = null;
          this.stateMachine = new Map();
          this.animationCom = null;
          this.waitList = [];
        }

        get currentSate() {
          return this._currentSate;
        }

        set currentSate(newSate) {
          this._currentSate = newSate;

          this._currentSate.run();
        }

        resetTrigger() {
          for (var [_, data] of this.params) {
            if (data.type == (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
              error: Error()
            }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER) {
              data.value = false;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d64d293c8a4339be8a19e3b8e0bf160d095b398.js.map