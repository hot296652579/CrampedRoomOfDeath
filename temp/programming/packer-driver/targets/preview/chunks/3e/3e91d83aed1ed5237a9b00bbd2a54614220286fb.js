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
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_PLAYER, this.inputHanlder, this);
        }

        onDestry() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_PLAYER, this.inputHanlder);
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
            tileMgrInfo,
            mapColumCount,
            mapRowCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          console.log('y', y); //先判断输入上时候

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
            var playerNextY = y - 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x, _tileMgrInfo$x2;

              //判断是否超出地图
              if (playerNextY <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var weaponNextY = y - 2;
              var nextPlayerTile = (_tileMgrInfo$x = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x[playerNextY];
              var nextWeaponTile = (_tileMgrInfo$x2 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x2[weaponNextY]; //最后判断地图元素

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x3, _tileMgrInfo$x4;

              //判断是否超出地图
              if (playerNextY <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY = y;

              var _nextPlayerTile = (_tileMgrInfo$x3 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x3[playerNextY];

              var _nextWeaponTile = (_tileMgrInfo$x4 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x4[_weaponNextY]; //最后判断地图元素


              if (_nextPlayerTile && _nextPlayerTile.canMove && (!_nextWeaponTile || _nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x5, _tileMgrInfo$weaponNe;

              //判断是否超出地图
              if (playerNextY <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var weaponNextX = x - 1;

              var _weaponNextY2 = y - 1;

              var _nextPlayerTile2 = (_tileMgrInfo$x5 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x5[playerNextY];

              var _nextWeaponTile2 = (_tileMgrInfo$weaponNe = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe[_weaponNextY2]; //最后判断地图元素


              if (_nextPlayerTile2 && _nextPlayerTile2.canMove && (!_nextWeaponTile2 || _nextWeaponTile2.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x6, _tileMgrInfo$_weaponN;

              //判断是否超出地图
              if (playerNextY <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX = x + 1;

              var _weaponNextY3 = y - 1;

              var _nextPlayerTile3 = (_tileMgrInfo$x6 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x6[playerNextY];

              var _nextWeaponTile3 = (_tileMgrInfo$_weaponN = tileMgrInfo[_weaponNextX]) == null ? void 0 : _tileMgrInfo$_weaponN[_weaponNextY3]; //最后判断地图元素


              if (_nextPlayerTile3 && _nextPlayerTile3.canMove && (!_nextWeaponTile3 || _nextWeaponTile3.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT) {
            var playerNextX = x - 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$playerNe, _tileMgrInfo$_weaponN2;

              //判断是否超出地图
              if (playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX2 = x - 1;

              var _weaponNextY4 = y - 1;

              var _nextPlayerTile4 = (_tileMgrInfo$playerNe = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe[y];

              var _nextWeaponTile4 = (_tileMgrInfo$_weaponN2 = tileMgrInfo[_weaponNextX2]) == null ? void 0 : _tileMgrInfo$_weaponN2[_weaponNextY4]; //最后判断地图元素


              if (_nextPlayerTile4 && _nextPlayerTile4.canMove && (!_nextWeaponTile4 || _nextWeaponTile4.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$playerNe2, _tileMgrInfo$_weaponN3;

              //判断是否超出地图
              if (playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX3 = x - 1;

              var _weaponNextY5 = y + 1;

              var _nextPlayerTile5 = (_tileMgrInfo$playerNe2 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe2[y];

              var _nextWeaponTile5 = (_tileMgrInfo$_weaponN3 = tileMgrInfo[_weaponNextX3]) == null ? void 0 : _tileMgrInfo$_weaponN3[_weaponNextY5]; //最后判断地图元素


              if (_nextPlayerTile5 && _nextPlayerTile5.canMove && (!_nextWeaponTile5 || _nextWeaponTile5.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$playerNe3, _tileMgrInfo$_weaponN4;

              //判断是否超出地图
              if (playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX4 = x - 2;

              var _nextPlayerTile6 = (_tileMgrInfo$playerNe3 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe3[y];

              var _nextWeaponTile6 = (_tileMgrInfo$_weaponN4 = tileMgrInfo[_weaponNextX4]) == null ? void 0 : _tileMgrInfo$_weaponN4[y]; //最后判断地图元素


              if (_nextPlayerTile6 && _nextPlayerTile6.canMove && (!_nextWeaponTile6 || _nextWeaponTile6.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$playerNe4, _tileMgrInfo$_weaponN5;

              //判断是否超出地图
              if (playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX5 = x;

              var _nextPlayerTile7 = (_tileMgrInfo$playerNe4 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe4[y];

              var _nextWeaponTile7 = (_tileMgrInfo$_weaponN5 = tileMgrInfo[_weaponNextX5]) == null ? void 0 : _tileMgrInfo$_weaponN5[y]; //最后判断地图元素


              if (_nextPlayerTile7 && _nextPlayerTile7.canMove && (!_nextWeaponTile7 || _nextWeaponTile7.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT) {
            var _playerNextX = x + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$_playerN, _tileMgrInfo$_weaponN6;

              if (_playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX6 = x + 1;

              var _weaponNextY6 = y - 1;

              var _nextPlayerTile8 = (_tileMgrInfo$_playerN = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN[y];

              var _nextWeaponTile8 = (_tileMgrInfo$_weaponN6 = tileMgrInfo[_weaponNextX6]) == null ? void 0 : _tileMgrInfo$_weaponN6[_weaponNextY6]; //最后判断地图元素


              if (_nextPlayerTile8 && _nextPlayerTile8.canMove && (!_nextWeaponTile8 || _nextWeaponTile8.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$_playerN2, _tileMgrInfo$_weaponN7;

              if (_playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX7 = x + 1;

              var _weaponNextY7 = y + 1;

              var _nextPlayerTile9 = (_tileMgrInfo$_playerN2 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN2[y];

              var _nextWeaponTile9 = (_tileMgrInfo$_weaponN7 = tileMgrInfo[_weaponNextX7]) == null ? void 0 : _tileMgrInfo$_weaponN7[_weaponNextY7]; //最后判断地图元素


              if (_nextPlayerTile9 && _nextPlayerTile9.canMove && (!_nextWeaponTile9 || _nextWeaponTile9.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$_playerN3, _tileMgrInfo$_weaponN8;

              if (_playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX8 = x;

              var _nextPlayerTile10 = (_tileMgrInfo$_playerN3 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN3[y];

              var _nextWeaponTile10 = (_tileMgrInfo$_weaponN8 = tileMgrInfo[_weaponNextX8]) == null ? void 0 : _tileMgrInfo$_weaponN8[y]; //最后判断地图元素


              if (_nextPlayerTile10 && _nextPlayerTile10.canMove && (!_nextWeaponTile10 || _nextWeaponTile10.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$_playerN4, _tileMgrInfo$_weaponN9;

              if (_playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX9 = x + 2;

              var _nextPlayerTile11 = (_tileMgrInfo$_playerN4 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN4[y];

              var _nextWeaponTile11 = (_tileMgrInfo$_weaponN9 = tileMgrInfo[_weaponNextX9]) == null ? void 0 : _tileMgrInfo$_weaponN9[y]; //最后判断地图元素


              if (_nextPlayerTile11 && _nextPlayerTile11.canMove && (!_nextWeaponTile11 || _nextWeaponTile11.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            var _playerNextY = y + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x7, _tileMgrInfo$x8;

              if (_playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY8 = y;

              var _nextPlayerTile12 = (_tileMgrInfo$x7 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x7[_playerNextY];

              var _nextWeaponTile12 = (_tileMgrInfo$x8 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x8[_weaponNextY8]; //最后判断地图元素


              if (_nextPlayerTile12 && _nextPlayerTile12.canMove && (!_nextWeaponTile12 || _nextWeaponTile12.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x9, _tileMgrInfo$x10;

              if (_playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextY9 = y + 2;

              var _nextPlayerTile13 = (_tileMgrInfo$x9 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x9[_playerNextY];

              var _nextWeaponTile13 = (_tileMgrInfo$x10 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x10[_weaponNextY9]; //最后判断地图元素


              if (_nextPlayerTile13 && _nextPlayerTile13.canMove && (!_nextWeaponTile13 || _nextWeaponTile13.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x11, _tileMgrInfo$_weaponN10;

              if (_playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX10 = x - 1;

              var _weaponNextY10 = y + 1;

              var _nextPlayerTile14 = (_tileMgrInfo$x11 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x11[_playerNextY];

              var _nextWeaponTile14 = (_tileMgrInfo$_weaponN10 = tileMgrInfo[_weaponNextX10]) == null ? void 0 : _tileMgrInfo$_weaponN10[_weaponNextY10]; //最后判断地图元素


              if (_nextPlayerTile14 && _nextPlayerTile14.canMove && (!_nextWeaponTile14 || _nextWeaponTile14.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x12, _tileMgrInfo$_weaponN11;

              if (_playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX11 = x + 1;

              var _weaponNextY11 = y + 1;

              var _nextPlayerTile15 = (_tileMgrInfo$x12 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x12[_playerNextY];

              var _nextWeaponTile15 = (_tileMgrInfo$_weaponN11 = tileMgrInfo[_weaponNextX11]) == null ? void 0 : _tileMgrInfo$_weaponN11[_weaponNextY11]; //最后判断地图元素


              if (_nextPlayerTile15 && _nextPlayerTile15.canMove && (!_nextWeaponTile15 || _nextWeaponTile15.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT) {
            var _tileMgrInfo$x13, _tileMgrInfo$x14, _tileMgrInfo$nextX, _tileMgrInfo$nextX2, _tileMgrInfo$nextX3, _tileMgrInfo$nextX4;

            var nextY, nextX;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //朝上左转的话，左上角三个tile都必须turnable为true，并且没有敌人
              nextY = y - 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextY = y + 1;
              nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextY = y + 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextY = y - 1;
              nextX = x + 1;
            } //最后判断地图元素


            if ((!((_tileMgrInfo$x13 = tileMgrInfo[x]) != null && _tileMgrInfo$x13[nextY]) || (_tileMgrInfo$x14 = tileMgrInfo[x]) != null && _tileMgrInfo$x14[nextY].canTurn) && (!((_tileMgrInfo$nextX = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX[y]) || (_tileMgrInfo$nextX2 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX2[y].canTurn) && (!((_tileMgrInfo$nextX3 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX3[nextY]) || (_tileMgrInfo$nextX4 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX4[nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT) {
            var _tileMgrInfo$x15, _tileMgrInfo$x16, _tileMgrInfo$_nextX, _tileMgrInfo$_nextX2, _tileMgrInfo$_nextX3, _tileMgrInfo$_nextX4;

            var _nextX, _nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //朝上右转的话，右上角三个tile都必须turnable为true
              _nextY = y - 1;
              _nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              _nextY = y + 1;
              _nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              _nextY = y - 1;
              _nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              _nextY = y + 1;
              _nextX = x + 1;
            } //最后判断地图元素


            if ((!((_tileMgrInfo$x15 = tileMgrInfo[x]) != null && _tileMgrInfo$x15[_nextY]) || (_tileMgrInfo$x16 = tileMgrInfo[x]) != null && _tileMgrInfo$x16[_nextY].canTurn) && (!((_tileMgrInfo$_nextX = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX[y]) || (_tileMgrInfo$_nextX2 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX2[y].canTurn) && (!((_tileMgrInfo$_nextX3 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX3[_nextY]) || (_tileMgrInfo$_nextX4 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX4[_nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
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
              if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
              } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
                this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                  error: Error()
                }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
              }

              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNRIGHT;
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
//# sourceMappingURL=3e91d83aed1ed5237a9b00bbd2a54614220286fb.js.map