System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, resources, SpriteAtlas, DataManagerInstance, createNewNode, TileManager, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileMapManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDataManagerInstance(extras) {
    _reporterNs.report("DataManagerInstance", "../Runtime/DataManager", _context.meta, extras);
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
      DataManagerInstance = _unresolved_2.DataManagerInstance;
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

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var spriteAtlas = yield _this.loadRes();
            var {
              mapInfo
            } = _crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance;

            for (var i = 0; i < mapInfo.length; i++) {
              var colnum = mapInfo[i];

              for (var j = 0; j < colnum.length; j++) {
                var item = colnum[j];

                if (item.src === null || item.type === null) {
                  continue;
                }

                var node = (_crd && createNewNode === void 0 ? (_reportPossibleCrUseOfcreateNewNode({
                  error: Error()
                }), createNewNode) : createNewNode)();
                var imgSrc = "tile (" + item.src + ")";
                var sp = spriteAtlas.spriteFrames[imgSrc]; // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

                var tileManager = node.addComponent(_crd && TileManager === void 0 ? (_reportPossibleCrUseOfTileManager({
                  error: Error()
                }), TileManager) : TileManager);
                tileManager.init(sp, {
                  i,
                  j
                });
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
//# sourceMappingURL=d7f97f9e02a4e90fbc29129b0e7151777dbcb6b2.js.map