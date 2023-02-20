System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, RenderRoot2D, Singleton, DEFAULT_FADE_DURATION, DrawManager, createNewNode, FadeMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEFAULT_FADE_DURATION(extras) {
    _reporterNs.report("DEFAULT_FADE_DURATION", "../UI/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawManager(extras) {
    _reporterNs.report("DrawManager", "../UI/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateNewNode(extras) {
    _reporterNs.report("createNewNode", "../Utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      RenderRoot2D = _cc.RenderRoot2D;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      DEFAULT_FADE_DURATION = _unresolved_3.DEFAULT_FADE_DURATION;
      DrawManager = _unresolved_3.DrawManager;
    }, function (_unresolved_4) {
      createNewNode = _unresolved_4.createNewNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4b30gOZEFCRq1qlV7gD/Dp", "FadeMgr", undefined);

      __checkObsolete__(['director', 'game', 'RenderRoot2D']);

      _export("default", FadeMgr = class FadeMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this._fader = null;
        }

        static get Instance() {
          // super()
          return super.getInstance();
        }

        get fader() {
          if (this._fader) {
            return this._fader;
          } else {
            var root = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            root.addComponent(RenderRoot2D);
            var fadeNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            fadeNode.setParent(root);
            this._fader = fadeNode.addComponent(_crd && DrawManager === void 0 ? (_reportPossibleCrUseOfDrawManager({
              error: Error()
            }), DrawManager) : DrawManager);

            this._fader.init();

            director.addPersistRootNode(root);
            return this._fader;
          }
        }

        fadeIn(duration) {
          if (duration === void 0) {
            duration = _crd && DEFAULT_FADE_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_FADE_DURATION({
              error: Error()
            }), DEFAULT_FADE_DURATION) : DEFAULT_FADE_DURATION;
          }

          return this._fader.fadeIn(duration);
        }

        fadeOut(duration) {
          if (duration === void 0) {
            duration = _crd && DEFAULT_FADE_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_FADE_DURATION({
              error: Error()
            }), DEFAULT_FADE_DURATION) : DEFAULT_FADE_DURATION;
          }

          return this._fader.fadeOut(duration);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38377795a1db141d397897f64fe7836dd636ea9a.js.map