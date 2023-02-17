System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE, DIRECTION_ENUM, ENTITY_STATE_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, SPIKE_COUNT_ENUM;

  _export({
    TILE_TYPE_ENUM: void 0,
    ENUM_EVENT: void 0,
    ENUM_BOTTOM_CONTROLLER: void 0,
    FSM_PARAMS_TYPE_ENUM: void 0,
    PARAMS_NAME_TYPE: void 0,
    DIRECTION_ENUM: void 0,
    ENTITY_STATE_ENUM: void 0,
    DIRECTION_ORDER_ENUM: void 0,
    ENITIY_TYPE_ENUM: void 0,
    ENITIY_TYPE_SPIKES_ENUM: void 0,
    SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM: void 0,
    SPIKE_COUNT_ENUM: void 0
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
        ENUM_EVENT["ENUM_ATTACK_PLAYER"] = "ENUM_ATTACK_PLAYER";
        ENUM_EVENT["ENUM_MOVE_END"] = "ENUM_MOVE_END";
        ENUM_EVENT["ENUM_PLAYER_BORN"] = "ENUM_PLAYER_BORN";
        ENUM_EVENT["ENUM_PLAYER_DEATH"] = "ENUM_PLAYER_DEATH";
        ENUM_EVENT["ENUM_PLAYER_AIRDEATH"] = "ENUM_PLAYER_AIRDEATH";
        ENUM_EVENT["ENUM_ENEMY_DEATH"] = "ENUM_ENEMY_DEATH";
        ENUM_EVENT["ENUM_OPEN_DOOR"] = "ENUM_OPEN_DOOR";
      })(ENUM_EVENT || _export("ENUM_EVENT", ENUM_EVENT = {}));

      (function (ENUM_BOTTOM_CONTROLLER) {
        ENUM_BOTTOM_CONTROLLER["TOP"] = "TOP";
        ENUM_BOTTOM_CONTROLLER["BOTTOM"] = "BOTTOM";
        ENUM_BOTTOM_CONTROLLER["LEFT"] = "LEFT";
        ENUM_BOTTOM_CONTROLLER["RIGHT"] = "RIGHT";
        ENUM_BOTTOM_CONTROLLER["TURNLEFT"] = "TURNLEFT";
        ENUM_BOTTOM_CONTROLLER["TURNRIGHT"] = "TURNRIGHT";
      })(ENUM_BOTTOM_CONTROLLER || _export("ENUM_BOTTOM_CONTROLLER", ENUM_BOTTOM_CONTROLLER = {}));

      (function (FSM_PARAMS_TYPE_ENUM) {
        FSM_PARAMS_TYPE_ENUM["TRIGGER"] = "TRIGGER";
        FSM_PARAMS_TYPE_ENUM["NUMBER"] = "NUMBER";
      })(FSM_PARAMS_TYPE_ENUM || _export("FSM_PARAMS_TYPE_ENUM", FSM_PARAMS_TYPE_ENUM = {}));

      (function (PARAMS_NAME_TYPE) {
        PARAMS_NAME_TYPE["IDLE"] = "IDLE";
        PARAMS_NAME_TYPE["TURNLEFT"] = "TURNLEFT";
        PARAMS_NAME_TYPE["TURNRIGHT"] = "TURNRIGHT";
        PARAMS_NAME_TYPE["DIRECTION"] = "DIRECTION";
        PARAMS_NAME_TYPE["BLOCKFRONT"] = "BLOCKFRONT";
        PARAMS_NAME_TYPE["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        PARAMS_NAME_TYPE["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        PARAMS_NAME_TYPE["ATTACK"] = "ATTACK";
        PARAMS_NAME_TYPE["DEATH"] = "DEATH";
        PARAMS_NAME_TYPE["AIRDEATH"] = "AIRDEATH";
        PARAMS_NAME_TYPE["SPIKES_CUR_COUNT"] = "SPIKES_CUR_COUNT";
        PARAMS_NAME_TYPE["SPIKES_TOTAL_COUNT"] = "SPIKES_TOTAL_COUNT";
      })(PARAMS_NAME_TYPE || _export("PARAMS_NAME_TYPE", PARAMS_NAME_TYPE = {}));

      (function (DIRECTION_ENUM) {
        DIRECTION_ENUM["TOP"] = "TOP";
        DIRECTION_ENUM["BOTTOM"] = "BOTTOM";
        DIRECTION_ENUM["LEFT"] = "LEFT";
        DIRECTION_ENUM["RIGHT"] = "RIGHT";
      })(DIRECTION_ENUM || _export("DIRECTION_ENUM", DIRECTION_ENUM = {}));

      (function (ENTITY_STATE_ENUM) {
        ENTITY_STATE_ENUM["IDLE"] = "IDLE";
        ENTITY_STATE_ENUM["TURNLEFT"] = "TURNLEFT";
        ENTITY_STATE_ENUM["TURNRIGHT"] = "TURNRIGHT";
        ENTITY_STATE_ENUM["BLOCKBACK"] = "BLOCKBACK";
        ENTITY_STATE_ENUM["BLOCKFRONT"] = "BLOCKFRONT";
        ENTITY_STATE_ENUM["BLOCKLEFT"] = "BLOCKLEFT";
        ENTITY_STATE_ENUM["BLOCKRIGHT"] = "BLOCKRIGHT";
        ENTITY_STATE_ENUM["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        ENTITY_STATE_ENUM["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        ENTITY_STATE_ENUM["ATTACK"] = "ATTACK";
        ENTITY_STATE_ENUM["DEATH"] = "DEATH";
        ENTITY_STATE_ENUM["AIRDEATH"] = "AIRDEATH";
      })(ENTITY_STATE_ENUM || _export("ENTITY_STATE_ENUM", ENTITY_STATE_ENUM = {}));

      (function (DIRECTION_ORDER_ENUM) {
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["TOP"] = 0] = "TOP";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["BOTTOM"] = 1] = "BOTTOM";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["LEFT"] = 2] = "LEFT";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["RIGHT"] = 3] = "RIGHT";
      })(DIRECTION_ORDER_ENUM || _export("DIRECTION_ORDER_ENUM", DIRECTION_ORDER_ENUM = {}));

      (function (ENITIY_TYPE_ENUM) {
        ENITIY_TYPE_ENUM["PLAYER"] = "PLAYER";
        ENITIY_TYPE_ENUM["WOODEN"] = "WOODEN";
        ENITIY_TYPE_ENUM["IRON"] = "IRON";
        ENITIY_TYPE_ENUM["DOOR"] = "DOOR";
        ENITIY_TYPE_ENUM["BURST"] = "BURST";
      })(ENITIY_TYPE_ENUM || _export("ENITIY_TYPE_ENUM", ENITIY_TYPE_ENUM = {}));

      (function (ENITIY_TYPE_SPIKES_ENUM) {
        ENITIY_TYPE_SPIKES_ENUM["SPIKES_ONE"] = "SPIKES_ONE";
        ENITIY_TYPE_SPIKES_ENUM["SPIKES_TWO"] = "SPIKES_TWO";
        ENITIY_TYPE_SPIKES_ENUM["SPIKES_THREE"] = "SPIKES_THREE";
        ENITIY_TYPE_SPIKES_ENUM["SPIKES_FOUR"] = "SPIKES_FOUR";
      })(ENITIY_TYPE_SPIKES_ENUM || _export("ENITIY_TYPE_SPIKES_ENUM", ENITIY_TYPE_SPIKES_ENUM = {}));

      (function (SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) {
        SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM["SPIKES_ONE"] = 2] = "SPIKES_ONE";
        SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM["SPIKES_TWO"] = 3] = "SPIKES_TWO";
        SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM["SPIKES_THREE"] = 4] = "SPIKES_THREE";
        SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM["SPIKES_FOUR"] = 5] = "SPIKES_FOUR";
      })(SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM || _export("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = {}));

      (function (SPIKE_COUNT_ENUM) {
        SPIKE_COUNT_ENUM["ZERO"] = "ZERO";
        SPIKE_COUNT_ENUM["ONE"] = "ONE";
        SPIKE_COUNT_ENUM["TWO"] = "TWO";
        SPIKE_COUNT_ENUM["THREE"] = "THREE";
        SPIKE_COUNT_ENUM["FOUR"] = "FOUR";
        SPIKE_COUNT_ENUM["FIVE"] = "FIVE";
      })(SPIKE_COUNT_ENUM || _export("SPIKE_COUNT_ENUM", SPIKE_COUNT_ENUM = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f9db9711fb5c5cd5a47d1d60ad596630f075741.js.map