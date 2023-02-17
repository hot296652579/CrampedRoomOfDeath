System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, level1, level2, level3, level4, _crd, levels;

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENITIY_TYPE_SPIKES_ENUM(extras) {
    _reporterNs.report("ENITIY_TYPE_SPIKES_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel(extras) {
    _reporterNs.report("level1", "./level1", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel2(extras) {
    _reporterNs.report("level2", "./level2", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel3(extras) {
    _reporterNs.report("level3", "./level3", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel4(extras) {
    _reporterNs.report("level4", "./level4", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      level1 = _unresolved_2.default;
    }, function (_unresolved_3) {
      level2 = _unresolved_3.default;
    }, function (_unresolved_4) {
      level3 = _unresolved_4.default;
    }, function (_unresolved_5) {
      level4 = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3baba/qplpKZpq6SzR+L5NY", "index", undefined);

      levels = {
        level1: _crd && level1 === void 0 ? (_reportPossibleCrUseOflevel({
          error: Error()
        }), level1) : level1,
        level2: _crd && level2 === void 0 ? (_reportPossibleCrUseOflevel2({
          error: Error()
        }), level2) : level2,
        level3: _crd && level3 === void 0 ? (_reportPossibleCrUseOflevel3({
          error: Error()
        }), level3) : level3,
        level4: _crd && level4 === void 0 ? (_reportPossibleCrUseOflevel4({
          error: Error()
        }), level4) : level4
      };

      _export("default", levels);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab7209c992b6aa0be8909256ea67ad4081a1c4f5.js.map