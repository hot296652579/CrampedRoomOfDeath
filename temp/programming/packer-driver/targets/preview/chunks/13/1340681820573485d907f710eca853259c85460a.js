System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, SpriteAtlas, ResourceLoadMgr, _dec, _class, _crd, ANIMATION_SPEED, ccclass, property, PlayerMrg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "../Base/ResourceLoadMgr", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67611d7XOpC8KOUzqv+bXVI", "PlayerMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D']);

      ANIMATION_SPEED = 1 / 8;
      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerMrg", PlayerMrg = (_dec = ccclass('PlayerMrg'), _dec(_class = class PlayerMrg extends Component {
        init() {
          return _asyncToGenerator(function* () {
            //
            var spriteAtlas = yield (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
              error: Error()
            }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes('texture/player/idle/top/idle', SpriteAtlas); // const sprite = this.addComponent(Sprite)
            // const transform = this.node.getComponent(UITransform)
            // const animationClip = new AnimationClip();
            // animationClip.duration = 1.0; // ???????????????????????????
            // const animationCom = this.addComponent(Animation)
            // const track = new animation.ObjectTrack(); // ????????????????????????
            // track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // ?????????????????? ????????????
            // track.channel.curve.assignSorted([ // ??? x ?????????????????????????????? @params ????????????
            //     [0.4, ({ value: spriteAtlas[0] })],
            //     [0.6, ({ value: 0.6 })],
            //     [0.8, ({ value: 0.8 })],
            // ])
            // const spFrames = spriteAtlas[0].spriteFrames
            // const frams: Array<[number, SpriteFrame]> = []
            // for (const key in spFrames) {
            //     if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
            //         const element = spFrames[key];
            //         frams.push([Number(key), element])
            //     }
            // }
            // console.log(frams)
            // const frames: Array<[number, SpriteFrame]> = spFrames.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
            // const frames: Array<[number, SpriteFrame]> = spriteAtlas.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
            // track.channel.curve.assignSorted(frames);
            // // ?????????????????????????????????????????????
            // animationClip.addTrack(track);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1340681820573485d907f710eca853259c85460a.js.map