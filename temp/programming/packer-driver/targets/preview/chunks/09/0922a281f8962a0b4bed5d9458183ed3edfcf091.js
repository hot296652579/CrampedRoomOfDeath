System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, ResourceLoadMgr, TILE_HEIGHT, TILE_WIDTH, _dec, _class, _crd, ANIMATION_SPEED, ccclass, property, PlayerMrg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "../Base/ResourceLoadMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../TileMap/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../TileMap/TileManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      SpriteAtlas = _cc.SpriteAtlas;
      AnimationClip = _cc.AnimationClip;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      TILE_HEIGHT = _unresolved_3.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_3.TILE_WIDTH;
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
          var _this = this;

          return _asyncToGenerator(function* () {
            var spriteAtlas = yield (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
              error: Error()
            }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes('texture/player/idle/top/idle', SpriteAtlas);

            var sprite = _this.addComponent(Sprite);

            sprite.sizeMode = Sprite.SizeMode.CUSTOM;

            var transform = _this.node.getComponent(UITransform);

            transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
              error: Error()
            }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
              error: Error()
            }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
            var animationClip = new AnimationClip();

            var animationCom = _this.addComponent(Animation);

            var track = new animation.ObjectTrack(); // 创建一个对象轨道

            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 找子节点组件 以及属性

            var spFrames = spriteAtlas.spriteFrames;
            var frams = [];
            var index = 0;

            for (var key in spFrames) {
              if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
                var element = spFrames[key];
                frams.push([ANIMATION_SPEED * index, element]);
                index++;
              }
            }

            console.log(frams);
            track.channel.curve.assignSorted(frams); // const frames: Array<[number, SpriteFrame]> = spFrames.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
            // // 最后将轨道添加到动画剪辑以应用

            animationClip.addTrack(track);
            animationClip.wrapMode = AnimationClip.WrapMode.Loop;
            animationClip.duration = frams.length / ANIMATION_SPEED; // 整个动画剪辑的周期

            animationCom.defaultClip = animationClip;
            animationCom.play();
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0922a281f8962a0b4bed5d9458183ed3edfcf091.js.map