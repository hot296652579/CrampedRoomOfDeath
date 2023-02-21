System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ProgressBar, resources, AudioClip, SCENE_ENUM, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, LoadingManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../Enum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
      resources = _cc.resources;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      SCENE_ENUM = _unresolved_2.SCENE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8b46POwE1LyISAO6yBmJXw", "UILoadingScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'ProgressBar', 'resources', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingManager", LoadingManager = (_dec = ccclass('LoadingManager'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class LoadingManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar", _descriptor, this);
        }

        start() {}

        onLoad() {// this.preLoad()
        }

        preLoad() {
          director.preloadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).BATTLE);
          resources.preloadDir('texture', (cur, total) => {
            this.bar.progress = cur / total;
          }, async err => {
            if (err) {
              await new Promise(rs => {
                setTimeout(rs, 1000);
              });
              this.preLoad();
              return;
            }

            await this.loadSoundRes();
            director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).BATTLE);
          });
        }

        async loadSoundRes() {
          return new Promise(rs => {
            resources.preloadDir('sound', AudioClip, () => {
              console.log('音频资源预加载完成');
              rs(null);
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=283efd811c58af953dfedc7c54b4aa8357406797.js.map