System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TILE_TYPE_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENITIY_TYPE_ENUM, _crd, mapInfo, player, enemies, spikes, bursts, door, level;

  function _reportPossibleCrUseOfIEnitiy(extras) {
    _reporterNs.report("IEnitiy", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpikes(extras) {
    _reporterNs.report("ISpikes", ".", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_ENUM", "../Enum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      TILE_TYPE_ENUM = _unresolved_2.TILE_TYPE_ENUM;
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENITIY_TYPE_ENUM = _unresolved_2.ENITIY_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b3acfNkl1JqLm1Xi/4waI8", "level8", undefined);

      mapInfo = [[{
        src: 16,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_TOP
      }, {
        src: 5,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_COLUMN
      }, {
        src: 23,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_BOTTOM
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: 20,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: 21,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 17,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER
      }, {
        src: null,
        type: null
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }], [{
        src: 9,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 1,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR
      }, {
        src: 24,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW
      }, {
        src: 18,
        type: (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
          error: Error()
        }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }, {
        src: null,
        type: null
      }]];
      player = {
        x: 1,
        y: 7,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).PLAYER
      };
      enemies = [{
        x: 8,
        y: 1,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).WOODEN
      }];
      spikes = [];
      bursts = [{
        x: 1,
        y: 2,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 1,
        y: 5,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 1,
        y: 6,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 2,
        y: 1,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 3,
        y: 1,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 4,
        y: 1,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 5,
        y: 1,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 6,
        y: 1,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }, {
        x: 6,
        y: 2,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).BURST,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP
      }];
      door = {
        x: 9,
        y: 1,
        direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
          error: Error()
        }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT,
        state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
          error: Error()
        }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
        type: (_crd && ENITIY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENITIY_TYPE_ENUM({
          error: Error()
        }), ENITIY_TYPE_ENUM) : ENITIY_TYPE_ENUM).DOOR
      };
      level = {
        mapInfo,
        player,
        enemies,
        spikes,
        bursts,
        door
      };

      _export("default", level);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b49ec5d28e03938d07b7d0dbaf12f4d86c8ad7cc.js.map