System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, SHAKE_TYPE_ENUM, EventMgr, DataManager, PlayerStateMachine, EnitiyMgr, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

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

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../Enum", _context.meta, extras);
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
      SHAKE_TYPE_ENUM = _unresolved_2.SHAKE_TYPE_ENUM;
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
        constructor(...args) {
          super(...args);
          this.tartgetX = 0;
          this.tartgetY = 0;
          this.isMoving = false;
        }

        async init(params) {
          this.fsm = this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine);
          await this.fsm.init();
          super.init(params);
          this.tartgetX = this.x;
          this.tartgetY = this.y;
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
          const enemyId = this.willAttack(inputDirection);

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
            if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            }

            return;
          }

          this.handlerMove(inputDirection);
        }

        onDeathHanlder(type) {
          this.state = type;
        }

        willBlock(inputDirection) {
          const {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          const {
            tileMgrInfo,
            mapColumCount,
            mapRowCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo;
          const enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          console.log('y', y); //????????????????????????

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
            const playerNextY = y - 1;
            const playerNextX = x - 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x, _tileMgrInfo$x2;

              //????????????????????????
              if (playerNextY <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextY = y - 2;
              const nextPlayerTile = (_tileMgrInfo$x = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$x2 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x2[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x3, _tileMgrInfo$x4;

              //????????????????????????
              if (playerNextY <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextY = y;
              const nextPlayerTile = (_tileMgrInfo$x3 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x3[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$x4 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x4[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x5, _tileMgrInfo$weaponNe;

              //????????????????????????
              if (playerNextY <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileMgrInfo$x5 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x5[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$weaponNe = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x6, _tileMgrInfo$weaponNe2;

              //????????????????????????
              if (playerNextY <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileMgrInfo$x6 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x6[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$weaponNe2 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe2[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT) {
            const playerNextY = y - 1;
            const playerNextX = x - 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$playerNe, _tileMgrInfo$weaponNe3;

              //????????????????????????
              if (playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileMgrInfo$playerNe = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe3 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe3[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$playerNe2, _tileMgrInfo$weaponNe4;

              //????????????????????????
              if (playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileMgrInfo$playerNe2 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe2[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe4 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe4[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$playerNe3, _tileMgrInfo$weaponNe5;

              //????????????????????????
              if (playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x - 2;
              const nextPlayerTile = (_tileMgrInfo$playerNe3 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe3[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe5 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe5[y]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$playerNe4, _tileMgrInfo$weaponNe6;

              //????????????????????????
              if (playerNextX <= 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileMgrInfo$playerNe4 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe4[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe6 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe6[y]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT) {
            const playerNextX = x + 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$playerNe5, _tileMgrInfo$weaponNe7;

              if (playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileMgrInfo$playerNe5 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe5[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe7 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe7[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$playerNe6, _tileMgrInfo$weaponNe8;

              if (playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileMgrInfo$playerNe6 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe6[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe8 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe8[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$playerNe7, _tileMgrInfo$weaponNe9;

              if (playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileMgrInfo$playerNe7 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe7[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe9 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe9[y]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$playerNe8, _tileMgrInfo$weaponNe10;

              if (playerNextX > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x + 2;
              const nextPlayerTile = (_tileMgrInfo$playerNe8 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe8[y];
              const nextWeaponTile = (_tileMgrInfo$weaponNe10 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe10[y]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst;
            }
          } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            const playerNextY = y + 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x7, _tileMgrInfo$x8;

              if (playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextY = y;
              const nextPlayerTile = (_tileMgrInfo$x7 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x7[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$x8 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x8[weaponNextY];
              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x9, _tileMgrInfo$x10;

              if (playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextY = y + 2;
              const nextPlayerTile = (_tileMgrInfo$x9 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x9[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$x10 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x10[weaponNextY];
              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x11, _tileMgrInfo$weaponNe11;

              if (playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileMgrInfo$x11 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x11[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$weaponNe11 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe11[weaponNextY]; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (!checkEnemy) return checkEnemy; //????????????????????????
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x12, _tileMgrInfo$weaponNe12;

              if (playerNextY > mapColumCount - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileMgrInfo$x12 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x12[playerNextY];
              const nextWeaponTile = (_tileMgrInfo$weaponNe12 = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe12[weaponNextY];
              const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkDoor) return checkDoor;
              const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT, inputDirection);
              if (checkEnemy) return checkEnemy;
              const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection);
              if (!checkBurst) return checkBurst; //????????????????????????

              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
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

            let nextY, nextX;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //????????????????????????????????????tile?????????turnable???true?????????????????????
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
            } //????????????????????????


            if ((!((_tileMgrInfo$x13 = tileMgrInfo[x]) != null && _tileMgrInfo$x13[nextY]) || (_tileMgrInfo$x14 = tileMgrInfo[x]) != null && _tileMgrInfo$x14[nextY].canTurn) && (!((_tileMgrInfo$nextX = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX[y]) || (_tileMgrInfo$nextX2 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX2[y].canTurn) && (!((_tileMgrInfo$nextX3 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX3[nextY]) || (_tileMgrInfo$nextX4 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX4[nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //?????????


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //????????????


            for (let i = 0; i < enemies.length; i++) {
              const enemy = enemies[i];
              const {
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
            var _tileMgrInfo$x15, _tileMgrInfo$x16, _tileMgrInfo$nextX5, _tileMgrInfo$nextX6, _tileMgrInfo$nextX7, _tileMgrInfo$nextX8;

            let nextX, nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //????????????????????????????????????tile?????????turnable???true
              nextY = y - 1;
              nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextY = y + 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextY = y - 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextY = y + 1;
              nextX = x + 1;
            } //????????????????????????


            if ((!((_tileMgrInfo$x15 = tileMgrInfo[x]) != null && _tileMgrInfo$x15[nextY]) || (_tileMgrInfo$x16 = tileMgrInfo[x]) != null && _tileMgrInfo$x16[nextY].canTurn) && (!((_tileMgrInfo$nextX5 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX5[y]) || (_tileMgrInfo$nextX6 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX6[y].canTurn) && (!((_tileMgrInfo$nextX7 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX7[nextY]) || (_tileMgrInfo$nextX8 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX8[nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //?????????


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //????????????


            for (let i = 0; i < enemies.length; i++) {
              const enemy = enemies[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === nextX && enemyY === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (enemyX === nextX && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (enemyX === x && enemyY === nextY) {
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
          const {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          const {
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
            //???????????????
            if ((doorX === x && doorY === playerNext || doorX === x && doorY === weaponNext) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = state;
              console.log('????????????');
              return true;
            }
          } else {
            //???????????????
            if ((doorX === playerNext && doorY === y || doorX === weaponNext && doorY === weaponNext) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = state;
              console.log('????????????');
              return true;
            }
          }

          return false;
        }

        checkCollisionEnenies(playerNext, weaponNext, state, inputDirection) {
          const {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          const enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP || inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            for (let i = 0; i < enemies.length; i++) {
              const enemy = enemies[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === x && enemyY === weaponNext || enemyX === x && enemyY === playerNext) {
                this.state = state;
                console.log('???????????????');
                return true;
              }
            }
          }

          return false;
        } //??????????????????


        checkBurstCollision(playerNext, nextWeaponTile, inputDirection) {
          const {
            tartgetX: x,
            tartgetY: y,
            direction
          } = this;
          const bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (bursts.some(burst => burst.x === x && burst.y === playerNext) && (!nextWeaponTile || nextWeaponTile.canTurn)) {
            return false;
          }
        }

        willAttack(inputDirection) {
          // let enemies = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)
          let enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => {
            return enemy.state != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH;
          });

          for (let index = 0; index < enemies.length; index++) {
            const {
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
              this.onSmokeHandler(direction);
              this.tartgetY -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.tartgetY += 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.tartgetX -= 1;
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT:
              this.isMoving = true;
              this.onSmokeHandler(direction);
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
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END);
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
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END);
              break;

            default:
              break;
          }
        }

        onSmokeHandler(type) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHOW_SMOKE, this.x, this.y, type);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7e1df486f0f60c332347a4a71870bd91912b9b51.js.map