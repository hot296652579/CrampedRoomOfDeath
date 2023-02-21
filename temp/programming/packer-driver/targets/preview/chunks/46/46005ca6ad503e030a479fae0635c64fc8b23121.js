System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, director, SCENE_ENUM, FadeMgr, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, UIStartScene;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFadeMgr(extras) {
    _reporterNs.report("FadeMgr", "../Runtime/FadeMgr", _context.meta, extras);
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
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      SCENE_ENUM = _unresolved_2.SCENE_ENUM;
    }, function (_unresolved_3) {
      FadeMgr = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07b26VBSV1N4oGZDR2DXM97", "UIStartScene", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'director']);

      TILE_WIDTH = 55;
      TILE_HEIGHT = 55;
      ({
        ccclass,
        property
      } = _decorator);

      _export("UIStartScene", UIStartScene = (_dec = ccclass('UIStartScene'), _dec(_class = class UIStartScene extends Component {
        onLoad() {
          var _this = this;

          return _asyncToGenerator(function* () {
            director.preloadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).LOADING);
            (_crd && FadeMgr === void 0 ? (_reportPossibleCrUseOfFadeMgr({
              error: Error()
            }), FadeMgr) : FadeMgr).Instance.fader.fadeOut(1000);

            _this.node.once(Node.EventType.TOUCH_START, _this.handlerStart, _this);
          })();
        }

        handlerStart() {
          return _asyncToGenerator(function* () {
            yield (_crd && FadeMgr === void 0 ? (_reportPossibleCrUseOfFadeMgr({
              error: Error()
            }), FadeMgr) : FadeMgr).Instance.fader.fadeIn(300);
            director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).LOADING);
          })();
        }

        onDestry() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46005ca6ad503e030a479fae0635c64fc8b23121.js.map