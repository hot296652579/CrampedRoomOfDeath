System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f3439D7UNOP4nypbHizC8M", "TileManager", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'resources', 'SpriteFrame', 'Sprite', 'UITransform', 'Layers', 'SpriteAtlas']);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TileManager", TileManager = (_dec = ccclass('TileManager'), _dec(_class = class TileManager extends Component {
        init(sp, _ref) {
          var {
            i,
            j
          } = _ref;
          var sprite = this.addComponent(Sprite);
          sprite.spriteFrame = sp;
          var transfrom = this.getComponent(UITransform);
          transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=397a44feca2aa3d1fb7bb746215b3a6b76fcabec.js.map