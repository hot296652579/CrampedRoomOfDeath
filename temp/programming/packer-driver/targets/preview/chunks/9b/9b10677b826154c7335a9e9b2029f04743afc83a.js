System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, FSM_PARAMS_TYPE_ENUM, _dec, _class, _crd, getParamsInitTrigger, getParamsInitNumber, ccclass, property, StateMachine;

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "../../Enum", _context.meta, extras);
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

      _cclegacy._RF.push({}, "8fed2fJdWRN6rGg7ppBrpxx", "SateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      _export("getParamsInitTrigger", getParamsInitTrigger = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER,
          value: false
        };
      });

      _export("getParamsInitNumber", getParamsInitNumber = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).NUMBER,
          value: 0
        };
      });

      ({
        ccclass,
        property
      } = _decorator);

      _export("StateMachine", StateMachine = (_dec = ccclass('StateMachine'), _dec(_class = class StateMachine extends Component {
        constructor() {
          super(...arguments);
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
            this.resetTrigger();
          }
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
//# sourceMappingURL=9b10677b826154c7335a9e9b2029f04743afc83a.js.map