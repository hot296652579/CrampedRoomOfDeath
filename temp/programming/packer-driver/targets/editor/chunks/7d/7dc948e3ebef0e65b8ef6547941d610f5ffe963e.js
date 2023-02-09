System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, ENUM_EVENT, ENUM_MOVE, PARAMS_NAME_TYPE, EventMgr, TILE_HEIGHT, TILE_WIDTH, PlayerStateMachine, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_MOVE(extras) {
    _reporterNs.report("ENUM_MOVE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../TileMap/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../TileMap/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "./PlayerStateMachine", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
      ENUM_MOVE = _unresolved_2.ENUM_MOVE;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      TILE_HEIGHT = _unresolved_4.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_4.TILE_WIDTH;
    }, function (_unresolved_5) {
      PlayerStateMachine = _unresolved_5.PlayerStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67611d7XOpC8KOUzqv+bXVI", "PlayerMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      _export("MOVE_SPEED", MOVE_SPEED = 1 / 10);

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
          this.fsm = null;
        }

        async init() {
          const sprite = this.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          const transform = this.node.getComponent(UITransform);
          transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
          this.fsm = this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine);
          this.fsm.init();
          this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).IDEL, true);
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
              this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
                error: Error()
              }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).TURNLEFT, true);
              break;

            case (_crd && ENUM_MOVE === void 0 ? (_reportPossibleCrUseOfENUM_MOVE({
              error: Error()
            }), ENUM_MOVE) : ENUM_MOVE).TURNRIGHT:
              break;

            default:
              break;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7dc948e3ebef0e65b8ef6547941d610f5ffe963e.js.map