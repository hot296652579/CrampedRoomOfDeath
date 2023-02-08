System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, SpriteAtlas, ResourceLoadMgr, _dec, _class, _crd, ccclass, property, PlayerMrg;

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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67611d7XOpC8KOUzqv+bXVI", "PlayerMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas']);

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
          const transform = this.node.getComponent(UITransform); // const animationClip = new AnimationClip();
          // animationClip.duration = 1.0; // 整个动画剪辑的周期
          // const track = new animation.VectorTrack(); // 创建一个向量轨道
          // track.componentsCount = 3; // 使用向量轨道的前三条通道
          // track.path = new animation.TrackPath().toHierarchy('Foo').toProperty('position'); // 指定轨道路径，即指定目标对象为 "Foo" 子节点的 "position" 属性
          // const [x, y, z] = track.channels(); // x, y, z 是前三条通道
          // x.curve.assignSorted([ // 为 x 通道的曲线添加关键帧
          //     [0.4, ({ value: 0.4 })],
          //     [0.6, ({ value: 0.6 })],
          //     [0.8, ({ value: 0.8 })],
          // ]);
          // // 如果关键帧的组织是 [时间, 向量] 数组，可以利用解构语法赋值每一条通道曲线。
          // const vec3KeyFrames = [
          //     [0.4, new Vec3(1.0, 2.0, 3.0)],
          //     [0.6, new Vec3(1.0, 2.0, 3.0)],
          //     [0.8, new Vec3(1.0, 2.0, 3.0)],
          // ] as [number, Vec3][];
          // x.curve.assignSorted(vec3KeyFrames.map(([time, vec3]) => [time, { value: vec3.x }]));
          // y.curve.assignSorted(vec3KeyFrames.map(([time, vec3]) => [time, { value: vec3.y }]));
          // z.curve.assignSorted(vec3KeyFrames.map(([time, vec3]) => [time, { value: vec3.z }]));
          // // 最后将轨道添加到动画剪辑以应用
          // animationClip.addTrack(track);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9534c6106bfb6f838395f043466adc383c108f2a.js.map