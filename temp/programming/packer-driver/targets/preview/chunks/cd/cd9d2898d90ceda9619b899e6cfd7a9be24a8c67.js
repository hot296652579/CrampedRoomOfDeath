System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, levels, EventMgr, DoorMgr, WoodenMgr, PlayerMrg, DataManager, TileMapManager, createNewNode, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, UIBattleScene;

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

  function _reportPossibleCrUseOfDoorMgr(extras) {
    _reporterNs.report("DoorMgr", "../Door/DoorMgr", _context.meta, extras);
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
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENITIY_TYPE_ENUM = _unresolved_2.ENITIY_TYPE_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
    }, function (_unresolved_3) {
      levels = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      DoorMgr = _unresolved_5.DoorMgr;
    }, function (_unresolved_6) {
      WoodenMgr = _unresolved_6.WoodenMgr;
    }, function (_unresolved_7) {
      PlayerMrg = _unresolved_7.PlayerMrg;
    }, function (_unresolved_8) {
      DataManager = _unresolved_8.default;
    }, function (_unresolved_9) {
      TileMapManager = _unresolved_9.TileMapManager;
    }, function (_unresolved_10) {
      createNewNode = _unresolved_10.createNewNode;
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
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.addEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_NEXTLEVEL, this.nextLevelMap, this);
        }

        onDestry() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.unEventListen((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_NEXTLEVEL, this.nextLevelMap);
        }

        initLevel() {
          this.clearLevelMap();
          var level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)["level" + (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex];

          if (level) {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapInfo = level.mapInfo;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapColumCount = level.mapInfo[0].length; //列

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapRowCount = level.mapInfo.length;
          }

          this.generateTileMap();
          this.generateEnemy();
          this.generateDoor();
          this.generatePlayer();
          this.fitPos();
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

        generateStage() {
          var stageNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          stageNode.setParent(this.node);
          this.stage = stageNode;
        }

        generateTileMap() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var tileMapNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            tileMapNode.setParent(_this.stage);
            var tileMapManager = tileMapNode.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
              error: Error()
            }), TileMapManager) : TileMapManager);
            yield tileMapManager.init();
          })();
        }

        generatePlayer() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var playerNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            playerNode.setParent(_this2.stage);
            var playerManager = playerNode.addComponent(_crd && PlayerMrg === void 0 ? (_reportPossibleCrUseOfPlayerMrg({
              error: Error()
            }), PlayerMrg) : PlayerMrg);
            yield playerManager.init();
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

        generateEnemy() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var woodenNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            woodenNode.setParent(_this3.stage);
            var woodenManager = woodenNode.addComponent(_crd && WoodenMgr === void 0 ? (_reportPossibleCrUseOfWoodenMgr({
              error: Error()
            }), WoodenMgr) : WoodenMgr);
            yield woodenManager.init({
              x: 7,
              y: 7,
              type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
                error: Error()
              }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).WOODEN,
              state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
              direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
            });
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.push(woodenManager);
          })();
        }

        generateDoor() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var doorNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
              error: Error()
            }), createNewNode) : createNewNode)();
            doorNode.setParent(_this4.stage);
            var doorManager = doorNode.addComponent(_crd && DoorMgr === void 0 ? (_reportPossibleCrUseOfDoorMgr({
              error: Error()
            }), DoorMgr) : DoorMgr);
            yield doorManager.init();
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
          this.stage.setPosition(-disX, disY);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd9d2898d90ceda9619b899e6cfd7a9be24a8c67.js.map