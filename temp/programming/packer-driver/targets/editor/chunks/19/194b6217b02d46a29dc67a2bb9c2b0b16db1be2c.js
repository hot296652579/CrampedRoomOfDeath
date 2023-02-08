System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, SpriteAtlas, ResourceLoadMgr, DataManager, createNewNode, randomTileByrange, TileManager, _dec, _class, _crd, ccclass, property, TileMapManager;

  function _reportPossibleCrUseOfResourceLoadMgr(extras) {
    _reporterNs.report("ResourceLoadMgr", "../Base/ResourceLoadMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateNewNode(extras) {
    _reporterNs.report("createNewNode", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomTileByrange(extras) {
    _reporterNs.report("randomTileByrange", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileManager(extras) {
    _reporterNs.report("TileManager", "./TileManager", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      ResourceLoadMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      createNewNode = _unresolved_4.createNewNode;
      randomTileByrange = _unresolved_4.randomTileByrange;
    }, function (_unresolved_5) {
      TileManager = _unresolved_5.TileManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4a8f5vYSFDIKIxXbK5F6gy", "TileMapManager", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'resources', 'SpriteFrame', 'Sprite', 'UITransform', 'Layers', 'SpriteAtlas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        start() {}

        async init() {
          const spriteAtlas = await (_crd && ResourceLoadMgr === void 0 ? (_reportPossibleCrUseOfResourceLoadMgr({
            error: Error()
          }), ResourceLoadMgr) : ResourceLoadMgr).Instance.loadRes(['texture/tile/tile'], SpriteAtlas);
          const {
            mapInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;

          for (let i = 0; i < mapInfo.length; i++) {
            const colnum = mapInfo[i];

            for (let j = 0; j < colnum.length; j++) {
              const item = colnum[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              let num = item.src;

              if (num === 1 || num === 5 || num === 9) {
                num += (_crd && randomTileByrange === void 0 ? (_reportPossibleCrUseOfrandomTileByrange({
                  error: Error()
                }), randomTileByrange) : randomTileByrange)(0, 4);
              }

              console.log('num', num);
              const node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              const imgSrc = `tile (${num})`;
              const sp = spriteAtlas[0].spriteFrames[imgSrc]; // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

              const tileManager = node.addComponent(_crd && TileManager === void 0 ? (_reportPossibleCrUseOfTileManager({
                error: Error()
              }), TileManager) : TileManager);
              tileManager.init(sp, {
                i,
                j
              });
              node.setParent(this.node);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=194b6217b02d46a29dc67a2bb9c2b0b16db1be2c.js.map