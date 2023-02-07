System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Node, resources, Sprite, UITransform, Layers, SpriteAtlas, levels, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileMapManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          resources.load("texture/tile/tile", SpriteAtlas, (err, atlas) => {
            console.log(atlas);
          });
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var spriteAtlas = yield _this.loadRes();
            var {
              mapInfo
            } = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
              error: Error()
            }), levels) : levels)["level" + 1];

            for (var index = 0; index < mapInfo.length; index++) {
              var colnum = mapInfo[index];

              for (var j = 0; j < colnum.length; j++) {
                var item = colnum[j];

                if (item.src === null || item.type === null) {
                  continue;
                }

                var node = new Node();
                var sprite = node.addComponent(Sprite);
                var imgSrc = "tile (" + item.src + ")";
                console.log(spriteAtlas.getSpriteFrames()); // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    
                // for (const key in spriteFrames) {
                //     if (Object.prototype.hasOwnProperty.call(spriteFrames, key)) {
                //         const sp = spriteFrames[key];
                //         if (key == String(item.src)) {
                //             sprite.spriteFrame = sp
                //         }
                //     }
                // }

                var transfrom = node.addComponent(UITransform);
                transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
                node.layer = 1 << Layers.nameToLayer('UI_2D');
                node.setPosition(index * TILE_WIDTH, -j * TILE_HEIGHT);
                node.setParent(_this.node);
              }
            }
          })();
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
//# sourceMappingURL=b744a6cc01946a46b546a5de667a158e06d82629.js.map