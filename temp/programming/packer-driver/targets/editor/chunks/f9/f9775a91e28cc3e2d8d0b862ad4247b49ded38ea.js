System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, ENUM_EVENT, ENUM_MOVE, EventMgr, ResourceLoadMgr, TILE_HEIGHT, TILE_WIDTH, _dec, _class, _crd, ANIMATION_SPEED, MOVE_SPEED, ccclass, property, PlayerMrg;

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_MOVE(extras) {
    _reporterNs.report("ENUM_MOVE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

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
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
      ENUM_MOVE = _unresolved_2.ENUM_MOVE;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      ResourceLoadMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      TILE_HEIGHT = _unresolved_5.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_5.TILE_WIDTH;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67611d7XOpC8KOUzqv+bXVI", "PlayerMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      ANIMATION_SPEED = 1 / 8;
      MOVE_SPEED = 1 / 10;
      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerMrg", PlayerMrg = (_dec = ccclass('PlayerMrg'), _dec(_class = class PlayerMrg extends Component {
        constructor(...args) {
          super(...args);
          this.x = 0;
          this.y = 0;
          this.tartgetX = 0;
          this.tartgetY = 0;
        }

        async init() {
          await this.loadRes();
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_PLAYER, this.handlerMove, this);
        }

        onDestry() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_PLAYER, this.handlerMove);
        }

        update() {
          this.updateXY();
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) - (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 1.5, -this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 1.5);
        }

        updateXY() {
          if (this.tartgetX < this.x) {
            this.x -= MOVE_SPEED;
          } else if (this.tartgetX > this.x) {
            this.x += MOVE_SPEED;
          } else if (this.tartgetY < this.y) {
            this.y -= MOVE_SPEED;
          } else if (this.tartgetY > this.y) {
            this.y += MOVE_SPEED;
          }

          console.log(Math.abs(this.tartgetY - this.y));

          if (Math.abs(this.tartgetX - this.x) <= 0.1 && Math.abs(this.tartgetY - this.y) <= 0.1) {
            this.x = this.tartgetX;
            this.y = this.tartgetY;
          }
        }

        handlerMove(direction) {
          switch (direction) {
            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).TOP:
              this.tartgetY -= 1;
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).BOTTOM:
              this.tartgetY += 1;
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).LEFT:
              this.tartgetX -= 1;
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).RIGHT:
              this.tartgetX += 1;
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).TURNLEFT:
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).TURNRIGHT:
              break;

            default:
              break;
          }
        }

        async loadRes() {
          const spriteAtlas = await (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
            error: Error()
          }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes('texture/player/idle/top/idle', SpriteAtlas);
          const sprite = this.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          const transform = this.node.getComponent(UITransform);
          transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
          const animationClip = new AnimationClip();
          const animationCom = this.addComponent(Animation);
          const track = new animation.ObjectTrack(); // 创建一个对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 找子节点组件 以及属性

          const spFrames = spriteAtlas.spriteFrames;
          const frams = [];
          let index = 0;

          for (const key in spFrames) {
            if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
              const element = spFrames[key];
              frams.push([ANIMATION_SPEED * index, element]);
              index++;
            }
          }

          console.log(frams);
          track.channel.curve.assignSorted(frams); // const frames: Array<[number, SpriteFrame]> = spFrames.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])
          // // 最后将轨道添加到动画剪辑以应用

          animationClip.addTrack(track);
          animationClip.wrapMode = AnimationClip.WrapMode.Loop;
          animationClip.duration = frams.length * ANIMATION_SPEED; // 整个动画剪辑的周期

          animationCom.defaultClip = animationClip;
          animationCom.play();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9775a91e28cc3e2d8d0b862ad4247b49ded38ea.js.map