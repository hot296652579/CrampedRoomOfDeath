System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Sprite, UITransform, PARAMS_NAME_TYPE, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, TILE_HEIGHT, TILE_WIDTH, randomNameByLen, _dec, _class, _crd, MOVE_SPEED, ccclass, property, SpikesMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_TYPE(extras) {
    _reporterNs.report("PARAMS_NAME_TYPE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_SPIKES_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpike(extras) {
    _reporterNs.report("ISpike", "../../Levels", _context.meta, extras);
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
    _reporterNs.report("StateMachine", "../Base/SateMachine", _context.meta, extras);
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
      PARAMS_NAME_TYPE = _unresolved_2.PARAMS_NAME_TYPE;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      TILE_HEIGHT = _unresolved_3.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_3.TILE_WIDTH;
    }, function (_unresolved_4) {
      randomNameByLen = _unresolved_4.randomNameByLen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e98fPahBVKa7UFRq0wf0/f", "SpikesMgr", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node', 'Sprite', 'UITransform', 'Animation', 'SpriteAtlas', 'AnimationClip', 'animation', 'SpriteFrame', 'Texture2D', 'math']);

      _export("MOVE_SPEED", MOVE_SPEED = 1 / 10);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikesMgr", SpikesMgr = (_dec = ccclass('SpikesMgr'), _dec(_class = class SpikesMgr extends Component {
        constructor() {
          super(...arguments);
          this.id = (_crd && randomNameByLen === void 0 ? (_reportPossibleCrUseOfrandomNameByLen({
            error: Error()
          }), randomNameByLen) : randomNameByLen)(12);
          this.x = 0;
          this.y = 0;
          this.fsm = null;
          this._count = void 0;
          this._totalCount = void 0;
          this._state = void 0;
          this._type = void 0;
        }

        get count() {
          return this._count;
        }

        set count(newCount) {
          this._count = newCount;
          this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_CUR_COUNT, newCount);
        }

        get totalCount() {
          return this._totalCount;
        }

        set totalCount(newTotalCount) {
          this._totalCount = newTotalCount;
          this.fsm.setParams((_crd && PARAMS_NAME_TYPE === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_TYPE({
            error: Error()
          }), PARAMS_NAME_TYPE) : PARAMS_NAME_TYPE).SPIKES_TOTAL_COUNT, newTotalCount);
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
            _this.fsm = _this.addComponent(BurstStateMachine);
            yield _this.fsm.init();
            _this.x = params.x;
            _this.y = params.y;
            _this._type = params.type;
            _this.totalCount = (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM)[_this._type];
            _this.count = params.count;
          })();
        }

        onLoad() {}

        onDestry() {}

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
//# sourceMappingURL=1914b459a9f5f9e65d8e1ceca6b039abaddb8fbe.js.map