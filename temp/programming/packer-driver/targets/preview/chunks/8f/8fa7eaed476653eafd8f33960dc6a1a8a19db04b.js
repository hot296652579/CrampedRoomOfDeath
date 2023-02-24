System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EnemyMgr, IronStateMachine, _dec, _class, _crd, MOVE_SPEED, ccclass, property, IronMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", "../../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMgr(extras) {
    _reporterNs.report("EnemyMgr", "../../Base/EnemyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronStateMachine(extras) {
    _reporterNs.report("IronStateMachine", "./IronStateMachine", _context.meta, extras);
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
    }, function (_unresolved_3) {
      IronStateMachine = _unresolved_3.IronStateMachine;
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
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && IronStateMachine === void 0 ? (_reportPossibleCrUseOfIronStateMachine({
              error: Error()
            }), IronStateMachine) : IronStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fa7eaed476653eafd8f33960dc6a1a8a19db04b.js.map