System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, SHAKE_TYPE_ENUM, EventMgr, DataManager, PlayerStateMachine, EnitiyMgr, AudioMgr, _dec, _class, _crd, MOVE_SPEED, ccclass, property, PlayerMrg;

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

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../Runtime/AudioMgr", _context.meta, extras);
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
    }, function (_unresolved_7) {
      AudioMgr = _unresolved_7.AudioMgr;
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
          this.targetX = 0;
          this.targetY = 0;
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

            _this.targetX = _this.x;
            _this.targetY = _this.y;
          })();
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_CTRL_CLICK, this.inputHanlder, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_DEATH, this.onDeathHanlder, this);
        }

        onDestry() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_CTRL_CLICK, this.inputHanlder);
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
          if (this.targetX < this.x) {
            this.x -= MOVE_SPEED;
          } else if (this.targetX > this.x) {
            this.x += MOVE_SPEED;
          } else if (this.targetY < this.y) {
            this.y -= MOVE_SPEED;
          } else if (this.targetY > this.y) {
            this.y += MOVE_SPEED;
          }

          if (Math.abs(this.targetX - this.x) <= 0.01 && Math.abs(this.targetY - this.y) <= 0.01 && this.isMoving) {
            this.x = this.targetX;
            this.y = this.targetY;
            this.isMoving = false;
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
            (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr).inst.playOneShot('sound/attack');
            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_ATTACK_ENEMY, enemyId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_OPEN_DOOR);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_RECORD_STEP);
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
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
                error: Error()
              }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            }

            return;
          }

          this.handlerMove(inputDirection);
        }

        onDeathHanlder(type) {
          this.state = type;
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.playOneShot('sound/death');
        }

        willBlock(type) {
          var {
            targetX: x,
            targetY: y,
            direction
          } = this;
          var {
            tileMgrInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo || {};
          var bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          var {
            mapRowCount: row,
            mapColumCount: column
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance; //????????????????????????

          if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP) {
            var playerNextY = y - 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x, _tileMgrInfo$x2;

              //????????????????????????
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var weaponNextY = y - 2;
              var nextPlayerTile = (_tileMgrInfo$x = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x[playerNextY];
              var nextWeaponTile = (_tileMgrInfo$x2 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x2[weaponNextY]; //?????????

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // ????????????


              for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];
                var {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === weaponNextY || enemyX === x && enemyY === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                return false;
              } //????????????????????????


              if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$x3, _tileMgrInfo$x4;

              //????????????????????????
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY = y;

              var _nextPlayerTile = (_tileMgrInfo$x3 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x3[playerNextY];

              var _nextWeaponTile = (_tileMgrInfo$x4 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x4[_weaponNextY]; //?????????


              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === _weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????


              for (var _i = 0; _i < enemies.length; _i++) {
                var _enemy = enemies[_i];
                var {
                  x: _enemyX,
                  y: _enemyY
                } = _enemy;

                if (_enemyX === x && _enemyY === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile || _nextWeaponTile.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile && _nextPlayerTile.canMove && (!_nextWeaponTile || _nextWeaponTile.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x5, _tileMgrInfo$weaponNe;

              //????????????????????????
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var weaponNextX = x - 1;

              var _weaponNextY2 = y - 1;

              var _nextPlayerTile2 = (_tileMgrInfo$x5 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x5[playerNextY];

              var _nextWeaponTile2 = (_tileMgrInfo$weaponNe = tileMgrInfo[weaponNextX]) == null ? void 0 : _tileMgrInfo$weaponNe[_weaponNextY2]; //?????????


              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === _weaponNextY2) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????


              for (var _i2 = 0; _i2 < enemies.length; _i2++) {
                var _enemy2 = enemies[_i2];
                var {
                  x: _enemyX2,
                  y: _enemyY2
                } = _enemy2;

                if (_enemyX2 === x && _enemyY2 === playerNextY || _enemyX2 === weaponNextX && _enemyY2 === _weaponNextY2) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile2 || _nextWeaponTile2.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile2 && _nextPlayerTile2.canMove && (!_nextWeaponTile2 || _nextWeaponTile2.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x6, _tileMgrInfo$_weaponN;

              //????????????????????????
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX = x + 1;

              var _weaponNextY3 = y - 1;

              var _nextPlayerTile3 = (_tileMgrInfo$x6 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x6[playerNextY];

              var _nextWeaponTile3 = (_tileMgrInfo$_weaponN = tileMgrInfo[_weaponNextX]) == null ? void 0 : _tileMgrInfo$_weaponN[_weaponNextY3]; //?????????


              if ((doorX === x && doorY === playerNextY || doorX === _weaponNextX && doorY === _weaponNextY3) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????


              for (var _i3 = 0; _i3 < enemies.length; _i3++) {
                var _enemy3 = enemies[_i3];
                var {
                  x: _enemyX3,
                  y: _enemyY3
                } = _enemy3;

                if (_enemyX3 === x && _enemyY3 === playerNextY || _enemyX3 === _weaponNextX && _enemyY3 === _weaponNextY3) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } // ??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile3 || _nextWeaponTile3.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile3 && _nextPlayerTile3.canMove && (!_nextWeaponTile3 || _nextWeaponTile3.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } //????????????????????????

          } else if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM) {
            var _playerNextY = y + 1; //????????????????????????


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$x7, _tileMgrInfo$x8;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY4 = y;

              var _nextPlayerTile4 = (_tileMgrInfo$x7 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x7[_playerNextY];

              var _nextWeaponTile4 = (_tileMgrInfo$x8 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x8[_weaponNextY4]; //?????????


              if ((doorX === x && doorY === _playerNextY || doorX === x && doorY === _weaponNextY4) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????


              for (var _i4 = 0; _i4 < enemies.length; _i4++) {
                var _enemy4 = enemies[_i4];
                var {
                  x: _enemyX4,
                  y: _enemyY4
                } = _enemy4;

                if (_enemyX4 === x && _enemyY4 === _playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } // ??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile4 || _nextWeaponTile4.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile4 && _nextPlayerTile4.canMove && (!_nextWeaponTile4 || _nextWeaponTile4.canTurn)) {// empty
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

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextY5 = y + 2;

              var _nextPlayerTile5 = (_tileMgrInfo$x9 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x9[_playerNextY];

              var _nextWeaponTile5 = (_tileMgrInfo$x10 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x10[_weaponNextY5]; //?????????


              if ((doorX === x && doorY === _playerNextY || doorX === x && doorY === _weaponNextY5) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // ????????????


              for (var _i5 = 0; _i5 < enemies.length; _i5++) {
                var _enemy5 = enemies[_i5];
                var {
                  x: _enemyX5,
                  y: _enemyY5
                } = _enemy5;

                if (_enemyX5 === x && _enemyY5 === _weaponNextY5 || _enemyX5 === x && _enemyY5 === _playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile5 || _nextWeaponTile5.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile5 && _nextPlayerTile5.canMove && (!_nextWeaponTile5 || _nextWeaponTile5.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$x11, _tileMgrInfo$_weaponN2;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX2 = x - 1;

              var _weaponNextY6 = y + 1;

              var _nextPlayerTile6 = (_tileMgrInfo$x11 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x11[_playerNextY];

              var _nextWeaponTile6 = (_tileMgrInfo$_weaponN2 = tileMgrInfo[_weaponNextX2]) == null ? void 0 : _tileMgrInfo$_weaponN2[_weaponNextY6]; //?????????


              if ((doorX === x && doorY === _playerNextY || doorX === _weaponNextX2 && doorY === _weaponNextY6) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????


              for (var _i6 = 0; _i6 < enemies.length; _i6++) {
                var _enemy6 = enemies[_i6];
                var {
                  x: _enemyX6,
                  y: _enemyY6
                } = _enemy6;

                if (_enemyX6 === x && _enemyY6 === _playerNextY || _enemyX6 === _weaponNextX2 && _enemyY6 === _weaponNextY6) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile6 || _nextWeaponTile6.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile6 && _nextPlayerTile6.canMove && (!_nextWeaponTile6 || _nextWeaponTile6.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$x12, _tileMgrInfo$_weaponN3;

              if (_playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX3 = x + 1;

              var _weaponNextY7 = y + 1;

              var _nextPlayerTile7 = (_tileMgrInfo$x12 = tileMgrInfo[x]) == null ? void 0 : _tileMgrInfo$x12[_playerNextY];

              var _nextWeaponTile7 = (_tileMgrInfo$_weaponN3 = tileMgrInfo[_weaponNextX3]) == null ? void 0 : _tileMgrInfo$_weaponN3[_weaponNextY7]; //?????????


              if ((doorX === x && doorY === _playerNextY || doorX === _weaponNextX3 && doorY === _weaponNextY7) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????


              for (var _i7 = 0; _i7 < enemies.length; _i7++) {
                var _enemy7 = enemies[_i7];
                var {
                  x: _enemyX7,
                  y: _enemyY7
                } = _enemy7;

                if (_enemyX7 === x && _enemyY7 === _playerNextY || _enemyX7 === _weaponNextX3 && _enemyY7 === _weaponNextY7) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY) && (!_nextWeaponTile7 || _nextWeaponTile7.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile7 && _nextPlayerTile7.canMove && (!_nextWeaponTile7 || _nextWeaponTile7.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            } //????????????????????????

          } else if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT) {
            var playerNextX = x - 1; //????????????????????????

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$playerNe, _tileMgrInfo$_weaponN4;

              //????????????????????????
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX4 = x - 1;

              var _weaponNextY8 = y - 1;

              var _nextPlayerTile8 = (_tileMgrInfo$playerNe = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe[y];

              var _nextWeaponTile8 = (_tileMgrInfo$_weaponN4 = tileMgrInfo[_weaponNextX4]) == null ? void 0 : _tileMgrInfo$_weaponN4[_weaponNextY8]; //?????????


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX4 && doorY === _weaponNextY8) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????


              for (var _i8 = 0; _i8 < enemies.length; _i8++) {
                var _enemy8 = enemies[_i8];
                var {
                  x: _enemyX8,
                  y: _enemyY8
                } = _enemy8;

                if (_enemyX8 === playerNextX && _enemyY8 === y || _enemyX8 === _weaponNextX4 && _enemyY8 === _weaponNextY8) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile8 || _nextWeaponTile8.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile8 && _nextPlayerTile8.canMove && (!_nextWeaponTile8 || _nextWeaponTile8.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$playerNe2, _tileMgrInfo$_weaponN5;

              //????????????????????????
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX5 = x - 1;

              var _weaponNextY9 = y + 1;

              var _nextPlayerTile9 = (_tileMgrInfo$playerNe2 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe2[y];

              var _nextWeaponTile9 = (_tileMgrInfo$_weaponN5 = tileMgrInfo[_weaponNextX5]) == null ? void 0 : _tileMgrInfo$_weaponN5[_weaponNextY9]; //?????????


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX5 && doorY === _weaponNextY9) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????


              for (var _i9 = 0; _i9 < enemies.length; _i9++) {
                var _enemy9 = enemies[_i9];
                var {
                  x: _enemyX9,
                  y: _enemyY9
                } = _enemy9;

                if (_enemyX9 === playerNextX && _enemyY9 === y || _enemyX9 === _weaponNextX5 && _enemyY9 === _weaponNextY9) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile9 || _nextWeaponTile9.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile9 && _nextPlayerTile9.canMove && (!_nextWeaponTile9 || _nextWeaponTile9.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$playerNe3, _tileMgrInfo$_weaponN6;

              //????????????????????????
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX6 = x - 2;

              var _nextPlayerTile10 = (_tileMgrInfo$playerNe3 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe3[y];

              var _nextWeaponTile10 = (_tileMgrInfo$_weaponN6 = tileMgrInfo[_weaponNextX6]) == null ? void 0 : _tileMgrInfo$_weaponN6[y]; //?????????


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX6 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????


              for (var _i10 = 0; _i10 < enemies.length; _i10++) {
                var _enemy10 = enemies[_i10];
                var {
                  x: _enemyX10,
                  y: _enemyY10
                } = _enemy10;

                if (_enemyX10 === playerNextX && _enemyY10 === y || _enemyX10 === _weaponNextX6 && _enemyY10 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile10 || _nextWeaponTile10.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile10 && _nextPlayerTile10.canMove && (!_nextWeaponTile10 || _nextWeaponTile10.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$playerNe4, _tileMgrInfo$_weaponN7;

              //????????????????????????
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX7 = x;

              var _nextPlayerTile11 = (_tileMgrInfo$playerNe4 = tileMgrInfo[playerNextX]) == null ? void 0 : _tileMgrInfo$playerNe4[y];

              var _nextWeaponTile11 = (_tileMgrInfo$_weaponN7 = tileMgrInfo[_weaponNextX7]) == null ? void 0 : _tileMgrInfo$_weaponN7[y]; //?????????


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX7 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????


              for (var _i11 = 0; _i11 < enemies.length; _i11++) {
                var _enemy11 = enemies[_i11];
                var {
                  x: _enemyX11,
                  y: _enemyY11
                } = _enemy11;

                if (_enemyX11 === playerNextX && _enemyY11 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile11 || _nextWeaponTile11.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile11 && _nextPlayerTile11.canMove && (!_nextWeaponTile11 || _nextWeaponTile11.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } //????????????????????????

          } else if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT) {
            var _playerNextX = x + 1; //????????????????????????


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileMgrInfo$_playerN, _tileMgrInfo$_weaponN8;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX8 = x + 1;

              var _weaponNextY10 = y - 1;

              var _nextPlayerTile12 = (_tileMgrInfo$_playerN = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN[y];

              var _nextWeaponTile12 = (_tileMgrInfo$_weaponN8 = tileMgrInfo[_weaponNextX8]) == null ? void 0 : _tileMgrInfo$_weaponN8[_weaponNextY10]; //?????????


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX8 && doorY === _weaponNextY10) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????


              for (var _i12 = 0; _i12 < enemies.length; _i12++) {
                var _enemy12 = enemies[_i12];
                var {
                  x: _enemyX12,
                  y: _enemyY12
                } = _enemy12;

                if (_enemyX12 === _playerNextX && _enemyY12 === y || _enemyX12 === _weaponNextX8 && _enemyY12 === _weaponNextY10) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile12 || _nextWeaponTile12.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile12 && _nextPlayerTile12.canMove && (!_nextWeaponTile12 || _nextWeaponTile12.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileMgrInfo$_playerN2, _tileMgrInfo$_weaponN9;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX9 = x + 1;

              var _weaponNextY11 = y + 1;

              var _nextPlayerTile13 = (_tileMgrInfo$_playerN2 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN2[y];

              var _nextWeaponTile13 = (_tileMgrInfo$_weaponN9 = tileMgrInfo[_weaponNextX9]) == null ? void 0 : _tileMgrInfo$_weaponN9[_weaponNextY11]; //?????????


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX9 && doorY === _weaponNextY11) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????


              for (var _i13 = 0; _i13 < enemies.length; _i13++) {
                var _enemy13 = enemies[_i13];
                var {
                  x: _enemyX13,
                  y: _enemyY13
                } = _enemy13;

                if (_enemyX13 === _playerNextX && _enemyY13 === y || _enemyX13 === _weaponNextX9 && _enemyY13 === _weaponNextY11) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile13 || _nextWeaponTile13.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile13 && _nextPlayerTile13.canMove && (!_nextWeaponTile13 || _nextWeaponTile13.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileMgrInfo$_playerN3, _tileMgrInfo$_weaponN10;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX10 = x;

              var _nextPlayerTile14 = (_tileMgrInfo$_playerN3 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN3[y];

              var _nextWeaponTile14 = (_tileMgrInfo$_weaponN10 = tileMgrInfo[_weaponNextX10]) == null ? void 0 : _tileMgrInfo$_weaponN10[y]; //?????????


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX10 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????


              for (var _i14 = 0; _i14 < enemies.length; _i14++) {
                var _enemy14 = enemies[_i14];
                var {
                  x: _enemyX14,
                  y: _enemyY14
                } = _enemy14;

                if (_enemyX14 === _playerNextX && _enemyY14 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile14 || _nextWeaponTile14.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile14 && _nextPlayerTile14.canMove && (!_nextWeaponTile14 || _nextWeaponTile14.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //????????????????????????

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileMgrInfo$_playerN4, _tileMgrInfo$_weaponN11;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX11 = x + 2;

              var _nextPlayerTile15 = (_tileMgrInfo$_playerN4 = tileMgrInfo[_playerNextX]) == null ? void 0 : _tileMgrInfo$_playerN4[y];

              var _nextWeaponTile15 = (_tileMgrInfo$_weaponN11 = tileMgrInfo[_weaponNextX11]) == null ? void 0 : _tileMgrInfo$_weaponN11[y]; //?????????


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX11 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //????????????


              for (var _i15 = 0; _i15 < enemies.length; _i15++) {
                var _enemy15 = enemies[_i15];
                var {
                  x: _enemyX15,
                  y: _enemyY15
                } = _enemy15;

                if (_enemyX15 === _playerNextX && _enemyY15 === y || _enemyX15 === _weaponNextX11 && _enemyY15 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //??????????????????


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile15 || _nextWeaponTile15.canTurn)) {
                return false;
              } //????????????????????????


              if (_nextPlayerTile15 && _nextPlayerTile15.canMove && (!_nextWeaponTile15 || _nextWeaponTile15.canTurn)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } //????????????????????????

          } else if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT) {
            var _tileMgrInfo$x13, _tileMgrInfo$x14, _tileMgrInfo$nextX, _tileMgrInfo$nextX2, _tileMgrInfo$nextX3, _tileMgrInfo$nextX4;

            var nextY, nextX;

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
            } //?????????


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //????????????


            for (var _i16 = 0; _i16 < enemies.length; _i16++) {
              var _enemy16 = enemies[_i16];
              var {
                x: _enemyX16,
                y: _enemyY16
              } = _enemy16;

              if (_enemyX16 === nextX && _enemyY16 === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (_enemyX16 === nextX && _enemyY16 === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (_enemyX16 === x && _enemyY16 === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
            } //????????????????????????


            if ((!((_tileMgrInfo$x13 = tileMgrInfo[x]) != null && _tileMgrInfo$x13[nextY]) || (_tileMgrInfo$x14 = tileMgrInfo[x]) != null && _tileMgrInfo$x14[nextY].canTurn) && (!((_tileMgrInfo$nextX = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX[y]) || (_tileMgrInfo$nextX2 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX2[y].canTurn) && (!((_tileMgrInfo$nextX3 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX3[nextY]) || (_tileMgrInfo$nextX4 = tileMgrInfo[nextX]) != null && _tileMgrInfo$nextX4[nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //????????????????????????

          } else if (type === (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
            error: Error()
          }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNRIGHT) {
            var _tileMgrInfo$x15, _tileMgrInfo$x16, _tileMgrInfo$_nextX, _tileMgrInfo$_nextX2, _tileMgrInfo$_nextX3, _tileMgrInfo$_nextX4;

            var _nextX, _nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //????????????????????????????????????tile?????????turnable???true
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
            } //?????????


            if ((doorX === x && doorY === _nextY || doorX === _nextX && doorY === y || doorX === _nextX && doorY === _nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //????????????


            for (var _i17 = 0; _i17 < enemies.length; _i17++) {
              var _enemy17 = enemies[_i17];
              var {
                x: _enemyX17,
                y: _enemyY17
              } = _enemy17;

              if (_enemyX17 === _nextX && _enemyY17 === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX17 === _nextX && _enemyY17 === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX17 === x && _enemyY17 === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            } //????????????????????????


            if ((!((_tileMgrInfo$x15 = tileMgrInfo[x]) != null && _tileMgrInfo$x15[_nextY]) || (_tileMgrInfo$x16 = tileMgrInfo[x]) != null && _tileMgrInfo$x16[_nextY].canTurn) && (!((_tileMgrInfo$_nextX = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX[y]) || (_tileMgrInfo$_nextX2 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX2[y].canTurn) && (!((_tileMgrInfo$_nextX3 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX3[_nextY]) || (_tileMgrInfo$_nextX4 = tileMgrInfo[_nextX]) != null && _tileMgrInfo$_nextX4[_nextY].canTurn)) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            }
          }

          return false;
        } // checkCollisionDoor(playerNext, weaponNext, state: ENTITY_STATE_ENUM, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        //     const { targetX: x, targetY: y, direction } = this
        //     const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.doorInfo
        //     if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP || inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
        //         //???????????????
        //         if (
        //             ((doorX === x && doorY === playerNext) || (doorX === x && doorY === weaponNext)) &&
        //             doorState !== ENTITY_STATE_ENUM.DEATH
        //         ) {
        //             this.state = state
        //             console.log('????????????')
        //             return true
        //         }
        //     } else {
        //         //???????????????
        //         if (
        //             ((doorX === playerNext && doorY === y) || (doorX === weaponNext && doorY === weaponNext)) &&
        //             doorState !== ENTITY_STATE_ENUM.DEATH
        //         ) {
        //             this.state = state
        //             console.log('????????????')
        //             return true
        //         }
        //     }
        //     return false
        // }
        // checkCollisionEnenies(playerNext, weaponNext, state: ENTITY_STATE_ENUM, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        //     const { targetX: x, targetY: y, direction } = this
        //     const enemies: EnemyMgr[] = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)
        //     if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP || inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
        //         for (let i = 0; i < enemies.length; i++) {
        //             const enemy = enemies[i]
        //             const { x: enemyX, y: enemyY } = enemy
        //             if ((enemyX === x && enemyY === weaponNext) || (enemyX === x && enemyY === playerNext)) {
        //                 this.state = state
        //                 console.log('???????????????')
        //                 return true
        //             }
        //         }
        //     }
        //     return false
        // }
        // //??????????????????
        // checkBurstCollision(playerNext, nextWeaponTile, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        //     const { targetX: x, targetY: y, direction } = this
        //     const bursts: BurstMgr[] = DataManager.Instance.bursts.filter(
        //         (burst: BurstMgr) => burst.state !== ENTITY_STATE_ENUM.DEATH,
        //     )
        //     if (
        //         bursts.some(burst => burst.x === x && burst.y === playerNext) &&
        //         (!nextWeaponTile || nextWeaponTile.canTurn)
        //     ) {
        //         return false
        //     }
        // }


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
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_RECORD_STEP);

          switch (direction) {
            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TOP:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.targetY -= 1;
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.playOneShot('sound/move');
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).BOTTOM:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.targetY += 1;
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.playOneShot('sound/move');
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).LEFT:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.targetX -= 1;
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.playOneShot('sound/move');
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).RIGHT:
              this.isMoving = true;
              this.onSmokeHandler(direction);
              this.targetX += 1;
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.playOneShot('sound/move');
              break;

            case (_crd && ENUM_BOTTOM_CONTROLLER === void 0 ? (_reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER({
              error: Error()
            }), ENUM_BOTTOM_CONTROLLER) : ENUM_BOTTOM_CONTROLLER).TURNLEFT:
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
          }
        }

        onSmokeHandler(type) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHOW_SMOKE, this.x, this.y, type);
        }

        onAttackShake(type) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHAKE_SCREEN, type);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de88b22b88d96bd737533d42ca0a6c0e26c3069b.js.map