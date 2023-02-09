System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM, ENUM_EVENT, ENUM_MOVE, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE, DIRECTION_ENUM, ENTITY_STATE_ENUM, DIRECTION_ORDER_ENUM;

  _export({
    TILE_TYPE_ENUM: void 0,
    ENUM_EVENT: void 0,
    ENUM_MOVE: void 0,
    FSM_PARAMS_TYPE_ENUM: void 0,
    PARAMS_NAME_TYPE: void 0,
    DIRECTION_ENUM: void 0,
    ENTITY_STATE_ENUM: void 0,
    DIRECTION_ORDER_ENUM: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41c2cXFCPVH9rm2tw5gvlEl", "index", undefined);

      (function (TILE_TYPE_ENUM) {
        TILE_TYPE_ENUM["WALL_LEFT_TOP"] = "WALL_LEFT_TOP";
        TILE_TYPE_ENUM["WALL_COLUMN"] = "WALL_COLUMN";
        TILE_TYPE_ENUM["WALL_LEFT_BOTTOM"] = "WALL_LEFT_BOTTOM";
        TILE_TYPE_ENUM["CLIFF_LEFT"] = "CLIFF_LEFT";
        TILE_TYPE_ENUM["FLOOR"] = "FLOOR";
        TILE_TYPE_ENUM["WALL_ROW"] = "WALL_ROW";
        TILE_TYPE_ENUM["CLIFF_CENTER"] = "CLIFF_CENTER";
        TILE_TYPE_ENUM["WALL_RIGHT_BOTTOM"] = "WALL_RIGHT_BOTTOM";
        TILE_TYPE_ENUM["WALL_RIGHT_TOP"] = "WALL_RIGHT_TOP";
        TILE_TYPE_ENUM["CLIFF_RIGHT"] = "CLIFF_RIGHT";
      })(TILE_TYPE_ENUM || _export("TILE_TYPE_ENUM", TILE_TYPE_ENUM = {}));

      (function (ENUM_EVENT) {
        ENUM_EVENT["ENUM_NEXTLEVEL"] = "ENUM_NEXTLEVEL";
        ENUM_EVENT["ENUM_MOVE_PLAYER"] = "ENUM_MOVE_PLAYER";
      })(ENUM_EVENT || _export("ENUM_EVENT", ENUM_EVENT = {}));

      (function (ENUM_MOVE) {
        ENUM_MOVE["TOP"] = "TOP";
        ENUM_MOVE["BOTTOM"] = "BOTTOM";
        ENUM_MOVE["LEFT"] = "LEFT";
        ENUM_MOVE["RIGHT"] = "RIGHT";
        ENUM_MOVE["TURNLEFT"] = "TURNLEFT";
        ENUM_MOVE["TURNRIGHT"] = "TURNRIGHT";
      })(ENUM_MOVE || _export("ENUM_MOVE", ENUM_MOVE = {}));

      (function (FSM_PARAMS_TYPE_ENUM) {
        FSM_PARAMS_TYPE_ENUM["TRIGGER"] = "TRIGGER";
        FSM_PARAMS_TYPE_ENUM["NUMBER"] = "NUMBER";
      })(FSM_PARAMS_TYPE_ENUM || _export("FSM_PARAMS_TYPE_ENUM", FSM_PARAMS_TYPE_ENUM = {}));

      (function (PARAMS_NAME_TYPE) {
        PARAMS_NAME_TYPE["IDEL"] = "IDLE";
        PARAMS_NAME_TYPE["TURNLEFT"] = "TURNLEFT";
        PARAMS_NAME_TYPE["DIRECTION"] = "DIRECTION";
      })(PARAMS_NAME_TYPE || _export("PARAMS_NAME_TYPE", PARAMS_NAME_TYPE = {}));

      (function (DIRECTION_ENUM) {
        DIRECTION_ENUM["TOP"] = "TOP";
        DIRECTION_ENUM["BOTTOM"] = "BOTTOM";
        DIRECTION_ENUM["LEFT"] = "LEFT";
        DIRECTION_ENUM["RIGHT"] = "RIGHT";
      })(DIRECTION_ENUM || _export("DIRECTION_ENUM", DIRECTION_ENUM = {}));

      (function (ENTITY_STATE_ENUM) {
        ENTITY_STATE_ENUM["IDEL"] = "IDEL";
        ENTITY_STATE_ENUM["TURNLEFT"] = "TURNLEFT";
      })(ENTITY_STATE_ENUM || _export("ENTITY_STATE_ENUM", ENTITY_STATE_ENUM = {}));

      (function (DIRECTION_ORDER_ENUM) {
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["TOP"] = 0] = "TOP";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["BOTTOM"] = 1] = "BOTTOM";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["LEFT"] = 2] = "LEFT";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["RIGHT"] = 3] = "RIGHT";
      })(DIRECTION_ORDER_ENUM || _export("DIRECTION_ORDER_ENUM", DIRECTION_ORDER_ENUM = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab1cbe8263119499e2a9337a39743130f21cd7f1.js.map