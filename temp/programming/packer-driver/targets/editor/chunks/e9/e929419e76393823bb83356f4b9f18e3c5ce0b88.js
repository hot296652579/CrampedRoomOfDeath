System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, SubStateMachine;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24e9aDpZodDSpHQTfTV5uMg", "SubStateMachine", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'AnimationClip', 'Animation', 'SpriteFrame', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SubStateMachine", SubStateMachine = (_dec = ccclass('SubStateMachine'), _dec(_class = class SubStateMachine {
        constructor(fsm) {
          this._currentSate = null;
          this.stateMachine = new Map();
          this.fsm = fsm;
        }

        //动画state列表
        get currentSate() {
          return this._currentSate;
        }

        set currentSate(newSate) {
          this._currentSate = newSate;

          this._currentSate.run();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e929419e76393823bb83356f4b9f18e3c5ce0b88.js.map