System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, resources, Singleton, SoundMgr, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d486jPIXFGw6eUEjoYM4XH", "SoundMgr", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'director', 'game', 'RenderRoot2D', 'resources']);

      _export("default", SoundMgr = class SoundMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.audioSouce = null;
        }

        static get Instance() {
          // super()
          return super.getInstance();
        }

        playMusic(path, isLoop) {
          resources.load(path, AudioClip, (err, clip) => {
            if (!err) {
              this.audioSouce.clip = clip;
              this.audioSouce.loop = isLoop;
              this.audioSouce.play();
            } else {
              console.log(err);
            }
          });
        }

        playSound(path) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5fc8f0fa1f05306fff727f14fd047ed37236f37.js.map