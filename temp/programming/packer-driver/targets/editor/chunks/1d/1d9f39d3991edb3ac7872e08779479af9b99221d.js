System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, levels, DataManagerInstance, TileMapManager, createNewNode, _dec, _class, _crd, ccclass, property, UIBattleScene;

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManagerInstance(extras) {
    _reporterNs.report("DataManagerInstance", "../Runtime/DataManager", _context.meta, extras);
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
      levels = _unresolved_2.default;
    }, function (_unresolved_3) {
      DataManagerInstance = _unresolved_3.DataManagerInstance;
    }, function (_unresolved_4) {
      TileMapManager = _unresolved_4.TileMapManager;
    }, function (_unresolved_5) {
      createNewNode = _unresolved_5.createNewNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69201h2HalKUrZ4h0cvBNuf", "UIBattleScene", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBattleScene", UIBattleScene = (_dec = ccclass('UIBattleScene'), _dec(_class = class UIBattleScene extends Component {
        constructor(...args) {
          super(...args);
          this.level = void 0;
        }

        start() {
          this.initLevel();
        }

        initLevel() {
          const level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${1}`];

          if (level) {
            this.level = level;
            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapInfo = level.mapInfo;
            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapColumCount = level.mapInfo[0].length; //列

            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapRowCount = level.mapInfo.length;
            this.generateTileMap();
          }
        }

        generateTileMap() {
          const stageNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          stageNode.setParent(this.node);
          const tileMapNode = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
            error: Error()
          }), createNewNode) : createNewNode)();
          tileMapNode.setParent(stageNode);
          const tileMapManager = tileMapNode.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          tileMapManager.init();
        }

        onLoad() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d9f39d3991edb3ac7872e08779479af9b99221d.js.map