System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, EventMgr, DataManager, PlayerStateMachine, EnitiyMgr, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
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

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "./PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnitiyMgr(extras) {
    _reporterNs.report("EnitiyMgr", "../Base/EnitiyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMgr(extras) {
    _reporterNs.report("EnemyMgr", "../Base/EnemyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstMgr(extras) {
    _reporterNs.report("BurstMgr", "../Burst/BurstMgr", _context.meta, extras);
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
          this.isMoving = false;
        }

        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

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
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_ATTACK_PLAYER, this.onDeathHanlder, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_DEATH, this.onDeathHanlder, this);
        }

        onDestry() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_PLAYER, this.inputHanlder);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_ATTACK_PLAYER, this.onDeathHanlder);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_DEATH, this.onDeathHanlder);
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

          if (Math.abs(this.tartgetX - this.x) <= 0.1 && Math.abs(this.tartgetY - this.y) <= 0.1 && this.isMoving) {
            this.isMoving = false;
            this.x = this.tartgetX;
            this.y = this.tartgetY;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END);
          }
        }

        inputHanlder(inputDirection) {
          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK) return;
          if (this.isMoving) return;
          var enemyId = this.willAttack(inputDirection);

          if (enemyId) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_ENEMY_DEATH, enemyId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_OPEN_DOOR);
            return;
          }

          if (this.willBlock(inputDirection)) {
            return;
          }

          this.handlerMove(inputDirection);
        }

        onDeathHanlder(type) {
          this.state = type;
          console.log('玩家状态state', this.state);
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
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo;
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          console.log('y', y); //先判断输入上时候

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
            var playerNextY = y - 1;
            var playerNextX = x - 1; //玩家方向——向上

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
              }

              var checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              var checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              var checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (checkBurst) return checkBurst; //玩家方向——向下
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x3, _tileMgrInfo$x4;

              //判断是否超出地图
              if (playerNextY <= 0) {
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
              }

              var _checkDoor = this.checkCollisionDoor(playerNextY, _weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor) return _checkDoor;

              var _checkEnemy = this.checkCollisionEnenies(playerNextY, _weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy) return _checkEnemy; //玩家方向——向左
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x5, _tileMgrInfo$weaponNe;

              //判断是否超出地图
              if (playerNextY <= 0) {
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
              }

              var _checkDoor2 = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT, inputDirection);

              if (_checkDoor2) return _checkDoor2;

              var _checkEnemy2 = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT, inputDirection);

              if (_checkEnemy2) return _checkEnemy2; //玩家方向——向右
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

              var _checkDoor3 = this.checkCollisionDoor(playerNextY, _weaponNextY3, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor3) return _checkDoor3;

              var _checkEnemy3 = this.checkCollisionEnenies(playerNextY, _weaponNextY3, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy3) return _checkEnemy3;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT) {
            var _playerNextY = y - 1;

            var _playerNextX = x - 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$_playerN, _tileMgrInfo$_weaponN2;

              //判断是否超出地图
              if (_playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX2 = x - 1;

              var _weaponNextY4 = y - 1;

              var _nextPlayerTile4 = (_tileMgrInfo$_playerN = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN[y];

              var _nextWeaponTile4 = (_tileMgrInfo$_weaponN2 = tileMgrInfo[_weaponNextX2]) == null ? void 0 : _tileMgrInfo$_weaponN2[_weaponNextY4]; //最后判断地图元素


              if (_nextPlayerTile4 && _nextPlayerTile4.canMove && (!_nextWeaponTile4 || _nextWeaponTile4.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _checkDoor4 = this.checkCollisionDoor(_playerNextX, _weaponNextX2, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor4) return _checkDoor4;

              var _checkEnemy4 = this.checkCollisionEnenies(_playerNextX, _weaponNextX2, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy4) return _checkEnemy4; //玩家方向——向下
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$_playerN2, _tileMgrInfo$_weaponN3;

              //判断是否超出地图
              if (_playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX3 = x - 1;

              var _weaponNextY5 = y + 1;

              var _nextPlayerTile5 = (_tileMgrInfo$_playerN2 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN2[y];

              var _nextWeaponTile5 = (_tileMgrInfo$_weaponN3 = tileMgrInfo[_weaponNextX3]) == null ? void 0 : _tileMgrInfo$_weaponN3[_weaponNextY5]; //最后判断地图元素


              if (_nextPlayerTile5 && _nextPlayerTile5.canMove && (!_nextWeaponTile5 || _nextWeaponTile5.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _checkDoor5 = this.checkCollisionDoor(_playerNextX, _weaponNextX3, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor5) return _checkDoor5;

              var _checkEnemy5 = this.checkCollisionEnenies(_playerNextX, _weaponNextX3, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy5) return _checkEnemy5; //玩家方向——向左
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$_playerN3, _tileMgrInfo$_weaponN4;

              //判断是否超出地图
              if (_playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX4 = x - 2;

              var _nextPlayerTile6 = (_tileMgrInfo$_playerN3 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN3[y];

              var _nextWeaponTile6 = (_tileMgrInfo$_weaponN4 = tileMgrInfo[_weaponNextX4]) == null ? void 0 : _tileMgrInfo$_weaponN4[y]; //最后判断地图元素


              if (_nextPlayerTile6 && _nextPlayerTile6.canMove && (!_nextWeaponTile6 || _nextWeaponTile6.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _checkDoor6 = this.checkCollisionDoor(_playerNextX, _weaponNextX4, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor6) return _checkDoor6;

              var _checkEnemy6 = this.checkCollisionEnenies(_playerNextX, _weaponNextX4, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy6) return _checkEnemy6; //玩家方向——向右
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$_playerN4, _tileMgrInfo$_weaponN5;

              //判断是否超出地图
              if (_playerNextX <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX5 = x;

              var _nextPlayerTile7 = (_tileMgrInfo$_playerN4 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN4[y];

              var _nextWeaponTile7 = (_tileMgrInfo$_weaponN5 = tileMgrInfo[_weaponNextX5]) == null ? void 0 : _tileMgrInfo$_weaponN5[y]; //最后判断地图元素


              if (_nextPlayerTile7 && _nextPlayerTile7.canMove && (!_nextWeaponTile7 || _nextWeaponTile7.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _checkDoor7 = this.checkCollisionDoor(_playerNextX, _weaponNextX5, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor7) return _checkDoor7;

              var _checkEnemy7 = this.checkCollisionEnenies(_playerNextX, _weaponNextX5, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy7) return _checkEnemy7;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT) {
            var _playerNextX2 = x + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$_playerN5, _tileMgrInfo$_weaponN6;

              if (_playerNextX2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX6 = x + 1;

              var _weaponNextY6 = y - 1;

              var _nextPlayerTile8 = (_tileMgrInfo$_playerN5 = tileMgrInfo[_playerNextX2]) == null ? void 0 : _tileMgrInfo$_playerN5[y];

              var _nextWeaponTile8 = (_tileMgrInfo$_weaponN6 = tileMgrInfo[_weaponNextX6]) == null ? void 0 : _tileMgrInfo$_weaponN6[_weaponNextY6]; //最后判断地图元素


              if (_nextPlayerTile8 && _nextPlayerTile8.canMove && (!_nextWeaponTile8 || _nextWeaponTile8.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _checkDoor8 = this.checkCollisionDoor(_playerNextX2, _weaponNextX6, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor8) return _checkDoor8;

              var _checkEnemy8 = this.checkCollisionEnenies(_playerNextX2, _weaponNextX6, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy8) return _checkEnemy8; //玩家方向——向下
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$_playerN6, _tileMgrInfo$_weaponN7;

              if (_playerNextX2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX7 = x + 1;

              var _weaponNextY7 = y + 1;

              var _nextPlayerTile9 = (_tileMgrInfo$_playerN6 = tileMgrInfo[_playerNextX2]) == null ? void 0 : _tileMgrInfo$_playerN6[y];

              var _nextWeaponTile9 = (_tileMgrInfo$_weaponN7 = tileMgrInfo[_weaponNextX7]) == null ? void 0 : _tileMgrInfo$_weaponN7[_weaponNextY7]; //最后判断地图元素


              if (_nextPlayerTile9 && _nextPlayerTile9.canMove && (!_nextWeaponTile9 || _nextWeaponTile9.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _checkDoor9 = this.checkCollisionDoor(_playerNextX2, _weaponNextX7, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor9) return _checkDoor9;

              var _checkEnemy9 = this.checkCollisionEnenies(_playerNextX2, _weaponNextX7, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy9) return _checkEnemy9; //玩家方向——向左
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$_playerN7, _tileMgrInfo$_weaponN8;

              if (_playerNextX2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX8 = x;

              var _nextPlayerTile10 = (_tileMgrInfo$_playerN7 = tileMgrInfo[_playerNextX2]) == null ? void 0 : _tileMgrInfo$_playerN7[y];

              var _nextWeaponTile10 = (_tileMgrInfo$_weaponN8 = tileMgrInfo[_weaponNextX8]) == null ? void 0 : _tileMgrInfo$_weaponN8[y]; //最后判断地图元素


              if (_nextPlayerTile10 && _nextPlayerTile10.canMove && (!_nextWeaponTile10 || _nextWeaponTile10.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _checkDoor10 = this.checkCollisionDoor(_playerNextX2, _weaponNextX8, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor10) return _checkDoor10;

              var _checkEnemy10 = this.checkCollisionEnenies(_playerNextX2, _weaponNextX8, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy10) return _checkEnemy10; //玩家方向——向右
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$_playerN8, _tileMgrInfo$_weaponN9;

              if (_playerNextX2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX9 = x + 2;

              var _nextPlayerTile11 = (_tileMgrInfo$_playerN8 = tileMgrInfo[_playerNextX2]) == null ? void 0 : _tileMgrInfo$_playerN8[y];

              var _nextWeaponTile11 = (_tileMgrInfo$_weaponN9 = tileMgrInfo[_weaponNextX9]) == null ? void 0 : _tileMgrInfo$_weaponN9[y]; //最后判断地图元素


              if (_nextPlayerTile11 && _nextPlayerTile11.canMove && (!_nextWeaponTile11 || _nextWeaponTile11.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _checkDoor11 = this.checkCollisionDoor(_playerNextX2, _weaponNextX9, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor11) return _checkDoor11;

              var _checkEnemy11 = this.checkCollisionEnenies(_playerNextX2, _weaponNextX9, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy11) return _checkEnemy11;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            var _playerNextY2 = y + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x7, _tileMgrInfo$x8;

              if (_playerNextY2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY8 = y;

              var _nextPlayerTile12 = (_tileMgrInfo$x7 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x7[_playerNextY2];

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

              if (_playerNextY2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextY9 = y + 2;

              var _nextPlayerTile13 = (_tileMgrInfo$x9 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x9[_playerNextY2];

              var _nextWeaponTile13 = (_tileMgrInfo$x10 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x10[_weaponNextY9]; //最后判断地图元素


              if (_nextPlayerTile13 && _nextPlayerTile13.canMove && (!_nextWeaponTile13 || _nextWeaponTile13.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _checkDoor12 = this.checkCollisionDoor(_playerNextY2, _weaponNextY9, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor12) return _checkDoor12;

              var _checkEnemy12 = this.checkCollisionEnenies(_playerNextY2, _weaponNextY9, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy12) return _checkEnemy12;

              var _checkBurst = this.checkBurstCollision(_playerNextY2, _nextWeaponTile13, inputDirection);

              if (_checkBurst) return _checkBurst; //玩家方向——向左
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x11, _tileMgrInfo$_weaponN10;

              if (_playerNextY2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX10 = x - 1;

              var _weaponNextY10 = y + 1;

              var _nextPlayerTile14 = (_tileMgrInfo$x11 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x11[_playerNextY2];

              var _nextWeaponTile14 = (_tileMgrInfo$_weaponN10 = tileMgrInfo[_weaponNextX10]) == null ? void 0 : _tileMgrInfo$_weaponN10[_weaponNextY10]; //最后判断地图元素


              if (_nextPlayerTile14 && _nextPlayerTile14.canMove && (!_nextWeaponTile14 || _nextWeaponTile14.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _checkDoor13 = this.checkCollisionDoor(_playerNextY2, _weaponNextY10, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor13) return _checkDoor13;

              var _checkEnemy13 = this.checkCollisionEnenies(_playerNextY2, _weaponNextY10, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy13) return _checkEnemy13; //玩家方向——向右
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x12, _tileMgrInfo$_weaponN11;

              if (_playerNextY2 > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX11 = x + 1;

              var _weaponNextY11 = y + 1;

              var _nextPlayerTile15 = (_tileMgrInfo$x12 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x12[_playerNextY2];

              var _nextWeaponTile15 = (_tileMgrInfo$_weaponN11 = tileMgrInfo[_weaponNextX11]) == null ? void 0 : _tileMgrInfo$_weaponN11[_weaponNextY11]; //最后判断地图元素


              if (_nextPlayerTile15 && _nextPlayerTile15.canMove && (!_nextWeaponTile15 || _nextWeaponTile15.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _checkDoor14 = this.checkCollisionDoor(_playerNextY2, _weaponNextY11, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkDoor14) return _checkDoor14;

              var _checkEnemy14 = this.checkCollisionEnenies(_playerNextY2, _weaponNextY11, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);

              if (_checkEnemy14) return _checkEnemy14;

              var _checkBurst2 = this.checkBurstCollision(_playerNextY2, _nextWeaponTile15, inputDirection);

              if (_checkBurst2) return _checkBurst2;
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
            } //判断门


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //判断敌人


            for (var i = 0; i < enemies.length; i++) {
              var enemy = enemies[i];
              var {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === nextX && enemyY === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (enemyX === nextX && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (enemyX === x && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
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
            } //判断门


            if ((doorX === x && doorY === _nextY || doorX === _nextX && doorY === y || doorX === _nextX && doorY === _nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断敌人


            for (var _i = 0; _i < enemies.length; _i++) {
              var _enemy = enemies[_i];
              var {
                x: _enemyX,
                y: _enemyY
              } = _enemy;

              if (_enemyX === _nextX && _enemyY === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX === _nextX && _enemyY === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX === x && _enemyY === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            }
          }

          return false;
        }

        checkCollisionDoor(playerNext, weaponNext, state, inputDirection) {
          var {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo;

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP || inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            //判断上下门
            if ((doorX === x && doorY === playerNext || doorX === x && doorY === weaponNext) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = state;
              console.log('撞到了门');
              return true;
            }
          } else {
            //判断左右门
            if ((doorX === playerNext && doorY === y || doorX === weaponNext && doorY === weaponNext) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = state;
              console.log('撞到了门');
              return true;
            }
          }

          return false;
        }

        checkCollisionEnenies(playerNext, weaponNext, state, inputDirection) {
          var {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP || inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            for (var i = 0; i < enemies.length; i++) {
              var enemy = enemies[i];
              var {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === x && enemyY === weaponNext || enemyX === x && enemyY === playerNext) {
                this.state = state;
                console.log('撞到了敌人');
                return true;
              }
            }
          }

          return false;
        } //判断地裂陷阱


        checkBurstCollision(playerNext, nextWeaponTile, inputDirection) {
          var {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          var bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (bursts.some(burst => burst.x === x && burst.y === playerNext) && (!nextWeaponTile || nextWeaponTile.turnable)) {
            return false;
          }
        }

        willAttack(inputDirection) {
          // let enemies = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => {
            return enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH;
          });

          for (var index = 0; index < enemies.length; index++) {
            var {
              x: enemyX,
              y: enemyY,
              id
            } = enemies[index];

            if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP && enemyX == this.x && enemyY == this.y - 2) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM && enemyX == this.x && enemyY == this.y + 2) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT && enemyX == this.x - 2 && enemyY == this.y) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return id;
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT && enemyX == this.x + 2 && enemyY == this.y) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return id;
            }
          }

          return '';
        }

        handlerMove(direction) {
          console.log((_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.tileMgrInfo);

          switch (direction) {
            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP:
              this.isMoving = true;
              this.tartgetY -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM:
              this.isMoving = true;
              this.tartgetY += 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT:
              this.isMoving = true;
              this.tartgetX -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT:
              this.isMoving = true;
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
//# sourceMappingURL=2ad3e365e33117094cc1ef9bac39abc9751bda17.js.map