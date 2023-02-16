System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EnemyMgr, _dec, _class, _crd, MOVE_SPEED, ccclass, property, IronMgr;

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", "../../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMgr(extras) {
    _reporterNs.report("EnemyMgr", "../../Base/EnemyMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EnemyMgr = _unresolved_2.EnemyMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2401cP9FbtP6r1jQZTYSzrp", "IronMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      _export("MOVE_SPEED", MOVE_SPEED = 1 / 10);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronMgr", IronMgr = (_dec = ccclass('IronMgr'), _dec(_class = class IronMgr extends (_crd && EnemyMgr === void 0 ? (_reportPossibleCrUseOfEnemyMgr({
        error: Error()
      }), EnemyMgr) : EnemyMgr) {
        async init(params) {
          this.fsm = this.addComponent(WoodenStateMachine);
          await this.fsm.init();
          super.init(params);
        }

        onLoad() {
          super.onLoad();
        }

        onDestry() {
          super.onDestry();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4616200075c9cb7d34a3c3126e3492b91c3f228a.js.map