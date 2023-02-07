System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, resources, SpriteAtlas, levels, createNewNode, TileManager, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileMapManager;

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateNewNode(extras) {
    _reporterNs.report("createNewNode", "../Utils", _context.meta, extras);
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
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      levels = _unresolved_2.default;
    }, function (_unresolved_3) {
      createNewNode = _unresolved_3.createNewNode;
    }, function (_unresolved_4) {
      TileManager = _unresolved_4.TileManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4a8f5vYSFDIKIxXbK5F6gy", "TileMapManager", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'resources', 'SpriteFrame', 'Sprite', 'UITransform', 'Layers', 'SpriteAtlas']);

      TILE_WIDTH = 55;
      TILE_HEIGHT = 55;
      ({
        ccclass,
        property
      } = _decorator);

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        start() {}

        async init() {
          const spriteAtlas = await this.loadRes();
          const {
            mapInfo
          } = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${1}`];

          for (let i = 0; i < mapInfo.length; i++) {
            const colnum = mapInfo[i];

            for (let j = 0; j < colnum.length; j++) {
              const item = colnum[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                error: Error()
              }), createNewNode) : createNewNode)();
              const imgSrc = `tile (${item.src})`;
              const sp = spriteAtlas.spriteFrames[imgSrc]; // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

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

        loadRes() {
          return new Promise((resolve, reject) => {
            // resources.loadDir("texture/tile/tile", SpriteFrame, function (err, assets) {
            //     if (!err) {
            //         resolve(assets)
            //         return
            //     } else {
            //         console.log(err)
            //         reject(false)
            //     }
            // });
            resources.load("texture/tile/tile", SpriteAtlas, (err, atlas) => {
              if (!err) {
                resolve(atlas);
                return;
              } else {
                console.log(err);
                reject(false);
              }
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66564fca7e7543da4f33bcd22a17b7dddee1ac8a.js.map