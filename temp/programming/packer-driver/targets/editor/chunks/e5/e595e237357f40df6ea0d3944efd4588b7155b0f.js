System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, resources, Sprite, UITransform, Layers, SpriteAtlas, levels, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileMapManager;

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "../../Levels", _context.meta, extras);
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
      Node = _cc.Node;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      levels = _unresolved_2.default;
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
        start() {
          this.loadTileAtlas();
        }

        loadTileAtlas() {
          resources.load("texture/tile/newTiles", SpriteAtlas, (err, atlas) => {
            console.log(atlas);
          });
        }

        async init() {
          const spriteFrames = await this.loadRes();
          const {
            mapInfo
          } = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${1}`];
          console.log(spriteFrames);

          for (let index = 0; index < mapInfo.length; index++) {
            const colnum = mapInfo[index];

            for (let j = 0; j < colnum.length; j++) {
              const item = colnum[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = new Node();
              const sprite = node.addComponent(Sprite);
              const imgSrc = `tile (${item.src})`; // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

              sprite.spriteFrame = spriteFrames.find(v => {
                console.log(v.name);
              }); // for (const key in spriteFrames) {
              //     if (Object.prototype.hasOwnProperty.call(spriteFrames, key)) {
              //         const sp = spriteFrames[key];
              //         if (key == String(item.src)) {
              //             sprite.spriteFrame = sp
              //         }
              //     }
              // }

              const transfrom = node.addComponent(UITransform);
              transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
              node.layer = 1 << Layers.nameToLayer('UI_2D');
              node.setPosition(index * TILE_WIDTH, -j * TILE_HEIGHT);
              node.setParent(this.node);
            }
          }
        }

        loadRes() {
          return new Promise((resolve, reject) => {// resources.loadDir("texture/tile/newTiles", SpriteFrame, function (err, assets) {
            //     if (!err) {
            //         resolve(assets)
            //         return
            //     } else {
            //         console.log(err)
            //         reject(false)
            //     }
            // });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e595e237357f40df6ea0d3944efd4588b7155b0f.js.map