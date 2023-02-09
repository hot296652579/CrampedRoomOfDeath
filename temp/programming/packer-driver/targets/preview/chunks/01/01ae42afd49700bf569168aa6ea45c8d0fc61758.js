System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_MOVE, PARAMS_NAME_TYPE, EventMgr, TILE_HEIGHT, TILE_WIDTH, PlayerStateMachine, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

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
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
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
        constructor() {
          super(...arguments);
          this.x = 0;
          this.y = 0;
          this.tartgetX = 0;
          this.tartgetY = 0;
          this.fsm = null;
          this._direction = void 0;
          this._state = void 0;
        }

        get direction() {
          return this._direction;
        }

        set direction(newDirection) {
          this._direction = newDirection;
          this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DIRECTION, (_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[this._direction]);
        }

        get state() {
          return this._state;
        }

        set state(newState) {
          this._state = newState;
          this.fsm.setParams(newState, true);
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var sprite = _this.addComponent(Sprite);

            sprite.sizeMode = Sprite.SizeMode.CUSTOM;

            var transform = _this.node.getComponent(UITransform);

            transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
              error: Error()
            }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
              error: Error()
            }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
            _this.fsm = _this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init(); // this.fsm.setParams(PARAMS_NAME_TYPE.IDEL, true)

            _this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDEL;
          })();
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
              // this.fsm.setParams(PARAMS_NAME_TYPE.TURNLEFT, true)
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNLEFT;
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
//# sourceMappingURL=01ae42afd49700bf569168aa6ea45c8d0fc61758.js.map