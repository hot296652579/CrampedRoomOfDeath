System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, levels, EventMgr, BurstMgr, DoorMgr, IronMgr, WoodenMgr, PlayerMrg, DataManager, TileMapManager, createNewNode, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, UIBattleScene;

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
      TileMapManager = _unresolved_11.TileMapManager;
    }, function (_unresolved_12) {
      createNewNode = _unresolved_12.createNewNode;
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
        constructor(...args) {
          super(...args);
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
          const level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex}`];

          if (level) {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapInfo = level.mapInfo;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapColumCount = level.mapInfo[0].length; //???

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapRowCount = level.mapInfo.length;
          }

          this.generateTileMap(); // this.generateBurst()

          this.generateWooden();
          this.generateIron();
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
          const stageNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          stageNode.setParent(this.node);
          this.stage = stageNode;
        }

        async generateTileMap() {
          const tileMapNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          tileMapNode.setParent(this.stage);
          const tileMapManager = tileMapNode.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          await tileMapManager.init();
        }

        async generatePlayer() {
          const playerNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          playerNode.setParent(this.stage);
          const playerManager = playerNode.addComponent(_crd && PlayerMrg === void 0 ? (_reportPossibleCrUseOfPlayerMrg({
            error: Error()
          }), PlayerMrg) : PlayerMrg);
          await playerManager.init({
            x: 7,
            y: 2,
            type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
              error: Error()
            }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).PLAYER,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM
          });
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.playerInfo = playerManager;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_PLAYER_BORN);
        }

        async generateWooden() {
          const woodenNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          woodenNode.setParent(this.stage);
          const woodenManager = woodenNode.addComponent(_crd && WoodenMgr === void 0 ? (_reportPossibleCrUseOfWoodenMgr({
            error: Error()
          }), WoodenMgr) : WoodenMgr);
          await woodenManager.init({
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
        }

        async generateBurst() {
          const burstNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          burstNode.setParent(this.stage);
          const burstManager = burstNode.addComponent(_crd && BurstMgr === void 0 ? (_reportPossibleCrUseOfBurstMgr({
            error: Error()
          }), BurstMgr) : BurstMgr);
          await burstManager.init({
            x: 7,
            y: 4,
            type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
              error: Error()
            }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
          });
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.push(burstManager);
        }

        async generateIron() {
          const ironNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          ironNode.setParent(this.stage);
          const ironManager = ironNode.addComponent(_crd && IronMgr === void 0 ? (_reportPossibleCrUseOfIronMgr({
            error: Error()
          }), IronMgr) : IronMgr);
          await ironManager.init({
            x: 2,
            y: 4,
            type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
              error: Error()
            }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).WOODEN,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM
          });
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.push(ironManager);
        }

        async generateDoor() {
          const doorNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          doorNode.setParent(this.stage);
          const doorManager = doorNode.addComponent(_crd && DoorMgr === void 0 ? (_reportPossibleCrUseOfDoorMgr({
            error: Error()
          }), DoorMgr) : DoorMgr);
          await doorManager.init();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.doorInfo = doorManager;
        }

        fitPos() {
          const {
            mapColumCount,
            mapRowCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const disX = TILE_WIDTH * mapRowCount / 2;
          const disY = TILE_HEIGHT * mapColumCount / 2 + 100;
          this.stage.setPosition(-disX, disY);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0497cb6a654614b55599b8659c12c6739203f75a.js.map