System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, Sprite, SpriteAtlas, ResourceLoadMgr, sortSpriteFrame, State, _crd, ANIMATION_SPEED;

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "./ResourceLoadMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./SateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsortSpriteFrame(extras) {
    _reporterNs.report("sortSpriteFrame", "../Utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      sortSpriteFrame = _unresolved_3.sortSpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a63a5C4CZAQaPiq5B6A4by", "State", undefined);

      __checkObsolete__(['animation', 'AnimationClip', 'Sprite', 'SpriteAtlas', 'SpriteFrame']);

      ANIMATION_SPEED = 1 / 8;
      /**真正播动画的地方*/

      _export("default", State = class State {
        constructor(fsm, path, isLoop = AnimationClip.WrapMode.Normal) {
          this.animationClip = void 0;
          this.fsm = fsm;
          this.path = path;
          this.isLoop = isLoop;
          this.init();
        }

        async init() {
          const promise = (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
            error: Error()
          }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes(this.path, SpriteAtlas);
          this.fsm.waitList.push(promise);
          const spriteAtlas = await promise;
          this.animationClip = new AnimationClip();
          const track = new animation.ObjectTrack(); // 创建一个对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 找子节点组件 以及属性

          const spFrames = spriteAtlas.spriteFrames;
          const frams = [];
          let index = 0;
          let sortSpFrames = (_crd && sortSpriteFrame === void 0 ? (_reportPossibleCrUseOfsortSpriteFrame({
            error: Error()
          }), sortSpriteFrame) : sortSpriteFrame)(spFrames);

          for (const key in sortSpFrames) {
            if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
              const element = spFrames[key];
              frams.push([ANIMATION_SPEED * index, element]);
              index++;
            }
          } // console.log(frams)


          track.channel.curve.assignSorted(frams); // // 最后将轨道添加到动画剪辑以应用

          this.animationClip.addTrack(track);
          this.animationClip.name = this.path;
          this.animationClip.wrapMode = this.isLoop;
          this.animationClip.duration = frams.length * ANIMATION_SPEED; // 整个动画剪辑的周期
        }

        run() {
          this.fsm.animationCom.defaultClip = this.animationClip;
          this.fsm.animationCom.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95c81d18a7834a1c552373cb4778dbf0ea9f63c1.js.map