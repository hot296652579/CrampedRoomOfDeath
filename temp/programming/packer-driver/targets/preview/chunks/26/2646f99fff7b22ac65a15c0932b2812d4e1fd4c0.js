System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, DIRECTION_ORDER_ENUM, PARAMS_NAME_TYPE, TILE_HEIGHT, TILE_WIDTH, randomNameByLen, _dec, _class, _crd, MOVE_SPEED, ccclass, property, EnitiyMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../TileMap/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../TileMap/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomNameByLen(extras) {
    _reporterNs.report("randomNameByLen", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./SateMachine", _context.meta, extras);
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
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
    }, function (_unresolved_3) {
      TILE_HEIGHT = _unresolved_3.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_3.TILE_WIDTH;
    }, function (_unresolved_4) {
      randomNameByLen = _unresolved_4.randomNameByLen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "694a6MekKxNXpAQnR3qA+Sw", "EnitiyMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      _export("MOVE_SPEED", MOVE_SPEED = 1 / 10);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnitiyMgr", EnitiyMgr = (_dec = ccclass('EnitiyMgr'), _dec(_class = class EnitiyMgr extends Component {
        constructor() {
          super(...arguments);
          this.id = (_crd && randomNameByLen === void 0 ? (_reportPossibleCrUseOfrandomNameByLen({
            error: Error()
          }), randomNameByLen) : randomNameByLen)(12);
          this.x = 0;
          this.y = 0;
          this.fsm = null;
          this._direction = void 0;
          this._state = void 0;
          this._type = void 0;
        }

        get direction() {
          return this._direction;
        }

        set direction(newDirection) {
          console.log('newDirection', newDirection);
          this._direction = newDirection;
          this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).DIRECTION, (_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[this._direction]);
        }

        get state() {
          return this._state;
        }

        set state(newState) {
          this._state = newState;
          this.fsm.setParams(this.state, true);
        }

        get type() {
          return this._type;
        }

        set type(newType) {
          this._type = newType;
        }

        init(params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var sprite = _this.addComponent(Sprite);

            sprite.sizeMode = Sprite.SizeMode.CUSTOM;

            var transform = _this.node.getComponent(UITransform);

            transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
              error: Error()
            }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
              error: Error()
            }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
            _this.x = params.x;
            _this.y = params.y;
            _this.direction = params.direction;
            _this.state = params.state;
            _this.type = params.type;
          })();
        }

        onLoad() {}

        onDestroy() {}

        update() {
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) - (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 1.5, -this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 1.5);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2646f99fff7b22ac65a15c0932b2812d4e1fd4c0.js.map