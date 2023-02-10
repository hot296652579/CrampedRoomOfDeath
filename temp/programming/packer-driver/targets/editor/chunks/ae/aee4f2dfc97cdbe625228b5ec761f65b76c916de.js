System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, TILE_TYPE_ENUM, _dec, _class, _crd, TILE_WIDTH, TILE_HEIGHT, ccclass, property, TileManager;

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../../Enum", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      TILE_TYPE_ENUM = _unresolved_2.TILE_TYPE_ENUM;
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
        constructor(...args) {
          super(...args);
          this.canMove = void 0;
          this.canTurn = void 0;
          this.type = void 0;
        }

        init(type, sp, {
          i,
          j
        }) {
          this.type = type;
          const sprite = this.addComponent(Sprite);
          sprite.spriteFrame = sp;
          const transfrom = this.getComponent(UITransform);
          transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);

          if (type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_COLUMN || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_BOTTOM || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_TOP || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_BOTTOM || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_TOP || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW) {
            this.canMove = false;
            this.canTurn = false;
          } else if (type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT || type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_RIGHT) {
            this.canMove = false;
            this.canTurn = true;
          } else if (type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR) {
            this.canMove = true;
            this.canTurn = true;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aee4f2dfc97cdbe625228b5ec761f65b76c916de.js.map