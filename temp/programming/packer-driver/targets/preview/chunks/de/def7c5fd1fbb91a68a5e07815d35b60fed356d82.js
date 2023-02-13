System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, EventMgr, DataManager, PlayerStateMachine, EnitiyMgr, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER(extras) {
    _reporterNs.report("ENUM_BOTTOM_CONTROLLER", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "../Base/PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnitiyMgr(extras) {
    _reporterNs.report("EnitiyMgr", "../Base/EnitiyMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENITIY_TYPE_ENUM = _unresolved_2.ENITIY_TYPE_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
      ENUM_BOTTOM_CONTROLLER = _unresolved_2.ENUM_BOTTOM_CONTROLLER;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      PlayerStateMachine = _unresolved_5.PlayerStateMachine;
    }, function (_unresolved_6) {
      EnitiyMgr = _unresolved_6.EnitiyMgr;
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

      _export("PlayerMrg", PlayerMrg = (_dec = ccclass('PlayerMrg'), _dec(_class = class PlayerMrg extends (_crd && EnitiyMgr === void 0 ? (_reportPossibleCrUseOfEnitiyMgr({
        error: Error()
      }), EnitiyMgr) : EnitiyMgr) {
        constructor() {
          super(...arguments);
          this.tartgetX = 0;
          this.tartgetY = 0;
        }

        init() {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, {
              x: 2,
              y: 8,
              type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
                error: Error()
              }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).PLAYER,
              state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
              direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
            });

            _this.tartgetX = _this.x;
            _this.tartgetY = _this.y;
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
          super.update();
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

        inputHanlder(inputDirection) {
          if (this.willBlock(inputDirection)) {
            console.log('block!!!!');
            return;
          }

          this.handlerMove(inputDirection);
        }

        willBlock(inputDirection) {
          var {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          var {
            tileMgrInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance; //先判断输入上时候

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var playerNextY = y - 1;
              var weaponNextY = y - 2;
              if (playerNextY < 0) return true;
              var playerTile = tileMgrInfo[x][playerNextY];
              var weaponTile = tileMgrInfo[x][weaponNextY];

              if (playerTile && playerTile.canMove && (!weaponTile || weaponTile.canTurn)) {//empty
              } else {
                true;
              }
            }
          }

          return false;
        }

        handlerMove(direction) {
          console.log((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.tileMgrInfo);

          switch (direction) {
            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP:
              this.tartgetY -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM:
              this.tartgetY += 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT:
              this.tartgetX -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT:
              this.tartgetX += 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT:
              // this.fsm.setParams(PARAMS_NAME_TYPE.TURNLEFT, true)
              if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
              }

              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNLEFT;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT:
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
//# sourceMappingURL=def7c5fd1fbb91a68a5e07815d35b60fed356d82.js.map