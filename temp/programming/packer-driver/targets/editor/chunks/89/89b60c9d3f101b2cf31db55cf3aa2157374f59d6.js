System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, ResourceLoadMgr, _dec, _class, _crd, ANIMATION_SPEED, ccclass, property, PlayerMrg;

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
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      SpriteAtlas = _cc.SpriteAtlas;
      AnimationClip = _cc.AnimationClip;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67611d7XOpC8KOUzqv+bXVI", "PlayerMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame']);

      ANIMATION_SPEED = 1 / 8;
      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerMrg", PlayerMrg = (_dec = ccclass('PlayerMrg'), _dec(_class = class PlayerMrg extends Component {
        async init() {
          const spriteAtlas = await (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
            error: Error()
          }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes(['texture/player/idle/top'], SpriteAtlas);
          const sprite = this.addComponent(Sprite);
          const transform = this.node.getComponent(UITransform);
          const animationClip = new AnimationClip();
          animationClip.duration = 1.0; // 整个动画剪辑的周期

          const animationCom = this.addComponent(Animation);
          const track = new animation.ObjectTrack(); // 创建一个对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 找子节点组件 以及属性

          track.channel.curve.assignSorted([// 为 x 通道的曲线添加关键帧 @params 时间和值
          [0.4, {
            value: spriteAtlas[0]
          }], [0.6, {
            value: 0.6
          }], [0.8, {
            value: 0.8
          }]]);
          const spFrames = spriteAtlas[0].spriteFrames;
          const frams = [];

          for (const key in spFrames) {
            if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
              const element = spFrames[key];
              frams.push([Number(key), element]);
            }
          }

          console.log(frams); // const frames: Array<[number, SpriteFrame]> = spFrames.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
          // const frames: Array<[number, SpriteFrame]> = spriteAtlas.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
          // track.channel.curve.assignSorted(frames);
          // // 最后将轨道添加到动画剪辑以应用
          // animationClip.addTrack(track);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89b60c9d3f101b2cf31db55cf3aa2157374f59d6.js.map