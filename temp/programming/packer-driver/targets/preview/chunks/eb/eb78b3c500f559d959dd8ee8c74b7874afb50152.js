System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, levels, EventMgr, BurstMgr, DoorMgr, IronMgr, WoodenMgr, PlayerMrg, DataManager, FadeMgr, ShakeManager, SmokeMgr, SpikesMgr, TileMapManager, createNewNode, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, UIBattleScene;

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

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstMgr(extras) {
    _reporterNs.report("BurstMgr", "../Burst/BurstMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorMgr(extras) {
    _reporterNs.report("DoorMgr", "../Door/DoorMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronMgr(extras) {
    _reporterNs.report("IronMgr", "../Enemy/Iron/IronMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenMgr(extras) {
    _reporterNs.report("WoodenMgr", "../Enemy/Wooden/WoodenMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMrg(extras) {
    _reporterNs.report("PlayerMrg", "../Player/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRecord(extras) {
    _reporterNs.report("IRecord", "../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFadeMgr(extras) {
    _reporterNs.report("FadeMgr", "../Runtime/FadeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeManager(extras) {
    _reporterNs.report("ShakeManager", "../Runtime/ShakeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeMgr(extras) {
    _reporterNs.report("SmokeMgr", "../Smoke/SmokeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesMgr(extras) {
    _reporterNs.report("SpikesMgr", "../Spikes/SpikesMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileMapManager(extras) {
    _reporterNs.report("TileMapManager", "../TileMap/TileMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateNewNode(extras) {
    _reporterNs.report("createNewNode", "../Utils", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ENITIY_TYPE_ENUM = _unresolved_2.ENITIY_TYPE_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
    }, function (_unresolved_3) {
      levels = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      BurstMgr = _unresolved_5.BurstMgr;
    }, function (_unresolved_6) {
      DoorMgr = _unresolved_6.DoorMgr;
    }, function (_unresolved_7) {
      IronMgr = _unresolved_7.IronMgr;
    }, function (_unresolved_8) {
      WoodenMgr = _unresolved_8.WoodenMgr;
    }, function (_unresolved_9) {
      PlayerMrg = _unresolved_9.PlayerMrg;
    }, function (_unresolved_10) {
      DataManager = _unresolved_10.default;
    }, function (_unresolved_11) {
      FadeMgr = _unresolved_11.default;
    }, function (_unresolved_12) {
      ShakeManager = _unresolved_12.ShakeManager;
    }, function (_unresolved_13) {
      SmokeMgr = _unresolved_13.SmokeMgr;
    }, function (_unresolved_14) {
      SpikesMgr = _unresolved_14.SpikesMgr;
    }, function (_unresolved_15) {
      TileMapManager = _unresolved_15.TileMapManager;
    }, function (_unresolved_16) {
      createNewNode = _unresolved_16.createNewNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69201h2HalKUrZ4h0cvBNuf", "UIBattleScene", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node']);

      TILE_WIDTH = 55;
      TILE_HEIGHT = 55;
      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBattleScene", UIBattleScene = (_dec = ccclass('UIBattleScene'), _dec(_class = class UIBattleScene extends Component {
        constructor() {
          super(...arguments);
          this.level = void 0;
          this.stage = void 0;
          this.smokeLayer = void 0;
        }

        start() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex = 1;
          this.generateStage();
          this.initLevel();
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_NEXTLEVEL, this.nextLevelMap, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END, this.checkArrived, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHOW_SMOKE, this.showSmokeHandler, this);
        }

        onDestry() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_NEXTLEVEL, this.nextLevelMap);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_MOVE_END, this.checkArrived);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_SHOW_SMOKE, this.showSmokeHandler);
        }

        initLevel() {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && FadeMgr === void 0 ? (_reportPossibleCrUseOfFadeMgr({
              error: Error()
            }), FadeMgr) : FadeMgr).Instance.fader.fadeIn();

            _this.clearLevelMap();

            _this.level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
              error: Error()
            }), levels) : levels)["level" + (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.levelIndex];

            if (_this.level) {
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapInfo = _this.level.mapInfo;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapColumCount = _this.level.mapInfo[0].length; //列

              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapRowCount = _this.level.mapInfo.length;
            }

            yield Promise.all([_this.generateTileMap(), _this.generateBurst(), _this.generateEnemies(), _this.generateSpikes(), _this.generateDoor(), _this.generateSmokeLayer(), _this.generatePlayer(), _this.fitPos()]);
            (_crd && FadeMgr === void 0 ? (_reportPossibleCrUseOfFadeMgr({
              error: Error()
            }), FadeMgr) : FadeMgr).Instance.fader.fadeOut();
          })();
        }

        nextLevelMap() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex++;
          this.initLevel();
        }

        clearLevelMap() {
          this.stage.removeAllChildren();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.reset();
        }

        checkArrived() {
          var {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo;
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo;

          if (playerX === doorX && playerY === doorY && doorState === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_NEXTLEVEL);
          }
        }

        showSmokeHandler(x, y, direction) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var smokeItem = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.smokes.find(smoke => smoke.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

            if (smokeItem) {
              smokeItem.x = x;
              smokeItem.y = y;
              smokeItem.direction = direction;
              smokeItem.node.setPosition(x * TILE_WIDTH - TILE_WIDTH * 1.5, -y * TILE_HEIGHT + TILE_HEIGHT * 1.5);
            } else {
              var smokeNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              smokeNode.setParent(_this2.smokeLayer);
              var smokeMgr = smokeNode.addComponent(_crd && SmokeMgr === void 0 ? (_reportPossibleCrUseOfSmokeMgr({
                error: Error()
              }), SmokeMgr) : SmokeMgr);
              yield smokeMgr.init({
                x,
                y,
                state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
                type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
                  error: Error()
                }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).SMOKE,
                direction
              });
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.smokes.push(smokeMgr);
            }
          })();
        }

        generateStage() {
          var stageNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          stageNode.setParent(this.node);
          this.stage = stageNode;
          this.stage.addComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager);
        }

        generateTileMap() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var tileMapNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            tileMapNode.setParent(_this3.stage);
            var tileMapManager = tileMapNode.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
              error: Error()
            }), TileMapManager) : TileMapManager);
            yield tileMapManager.init();
          })();
        }

        generatePlayer() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var playerNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            playerNode.setParent(_this4.stage);
            var playerManager = playerNode.addComponent(_crd && PlayerMrg === void 0 ? (_reportPossibleCrUseOfPlayerMrg({
              error: Error()
            }), PlayerMrg) : PlayerMrg);
            yield playerManager.init(_this4.level.player);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo = playerManager;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
              error: Error()
            }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_BORN);
          })();
        }

        generateEnemies() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies = [];
            var promises = [];

            for (var i = 0; i < _this5.level.enemies.length; i++) {
              var enemy = _this5.level.enemies[i];
              var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              node.setParent(_this5.stage);
              var Manager = enemy.type === (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
                error: Error()
              }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).WOODEN ? _crd && WoodenMgr === void 0 ? (_reportPossibleCrUseOfWoodenMgr({
                error: Error()
              }), WoodenMgr) : WoodenMgr : _crd && IronMgr === void 0 ? (_reportPossibleCrUseOfIronMgr({
                error: Error()
              }), IronMgr) : IronMgr;
              var manager = node.addComponent(Manager);
              promises.push(manager.init(enemy));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies.push(manager);
            }

            yield Promise.all(promises);
          })();
        }

        generateBurst() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var i = 0; i < _this6.level.bursts.length; i++) {
              var burst = _this6.level.bursts[i];
              var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              node.setParent(_this6.stage);
              var burstManager = node.addComponent(_crd && BurstMgr === void 0 ? (_reportPossibleCrUseOfBurstMgr({
                error: Error()
              }), BurstMgr) : BurstMgr);
              promises.push(burstManager.init(burst));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts.push(burstManager);
            }

            yield Promise.all(promises);
          })();
        }

        generateSpikes() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var promises = [];

            for (var i = 0; i < _this7.level.spikes.length; i++) {
              var spikes = _this7.level.spikes[i];
              var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              node.setParent(_this7.stage);
              var spikesManager = node.addComponent(_crd && SpikesMgr === void 0 ? (_reportPossibleCrUseOfSpikesMgr({
                error: Error()
              }), SpikesMgr) : SpikesMgr);
              promises.push(spikesManager.init(spikes));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes.push(spikesManager);
            }

            yield Promise.all(promises);
          })();
        }

        generateSmokeLayer() {
          var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          this.smokeLayer = node;
          node.setParent(this.stage);
        }

        generateDoor() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            node.setParent(_this8.stage);
            var doorManager = node.addComponent(_crd && DoorMgr === void 0 ? (_reportPossibleCrUseOfDoorMgr({
              error: Error()
            }), DoorMgr) : DoorMgr);
            yield doorManager.init(_this8.level.door);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo = doorManager;
          })();
        }

        fitPos() {
          var {
            mapColumCount,
            mapRowCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var disX = TILE_WIDTH * mapRowCount / 2;
          var disY = TILE_HEIGHT * mapColumCount / 2 + 100;
          this.stage.getComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager).stop();
          this.stage.setPosition(-disX, disY);
        }

        saveRecord() {
          var item = {
            player: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.playerInfo.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.playerInfo.y,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.playerInfo.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.playerInfo.state,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.playerInfo._type
            },
            door: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.doorInfo.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.doorInfo.y,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.doorInfo.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.doorInfo.state,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.doorInfo._type
            },
            enemies: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.map(_ref => {
              var {
                x,
                y,
                type,
                state,
                direction
              } = _ref;
              return {
                x,
                y,
                type,
                state,
                direction
              };
            }),
            bursts: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.map(_ref2 => {
              var {
                x,
                y,
                type,
                state,
                direction
              } = _ref2;
              return {
                x,
                y,
                type,
                state,
                direction
              };
            }),
            spikes: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.map(_ref3 => {
              var {
                x,
                y,
                count,
                type
              } = _ref3;
              return {
                x,
                y,
                count,
                type
              };
            })
          };
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.push(item);
        }

        revokeRecord() {
          var item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.pop();

          if (item) {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.x = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.tartgetX = item.player.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.y = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.tartgetY = item.player.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.direction = item.player.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.state = item.player.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.playerInfo.type = item.player.type;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo.x = item.door.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo.y = item.door.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo.direction = item.door.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo.state = item.door.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.doorInfo.type = item.door.type;

            for (var index = 0; index < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.length; index++) {
              var enemy = item.enemies[index];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[index].x = enemy.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[index].y = enemy.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[index].direction = enemy.direction;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[index].state = enemy.state;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[index].type = enemy.type;
            }

            for (var _index = 0; _index < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.length; _index++) {
              var burst = item.enemies[_index];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_index].x = burst.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_index].y = burst.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_index].direction = burst.direction;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_index].state = burst.state;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_index].type = burst.type;
            }

            for (var _index2 = 0; _index2 < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.length; _index2++) {
              var spike = item.spikes[_index2];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[_index2].x = spike.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[_index2].y = spike.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[_index2].count = spike.count;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[_index2].type = spike.type;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb78b3c500f559d959dd8ee8c74b7874afb50152.js.map