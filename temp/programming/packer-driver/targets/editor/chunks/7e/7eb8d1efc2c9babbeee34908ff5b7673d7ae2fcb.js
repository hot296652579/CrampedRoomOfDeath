System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, level1, _crd, levels;

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel(extras) {
    _reporterNs.report("level1", "./level1", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      level1 = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3baba/qplpKZpq6SzR+L5NY", "index", undefined);

      levels = {
        level1: _crd && level1 === void 0 ? (_reportPossibleCrUseOflevel({
          error: Error()
        }), level1) : level1
      };

      _export("default", levels);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7eb8d1efc2c9babbeee34908ff5b7673d7ae2fcb.js.map