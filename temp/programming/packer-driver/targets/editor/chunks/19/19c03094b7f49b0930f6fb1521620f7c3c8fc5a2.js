System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataManager, _crd, DataManagerInstance;

  function _reportPossibleCrUseOfITitle(extras) {
    _reporterNs.report("ITitle", "../../Levels", _context.meta, extras);
  }

  _export("DataManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "622c647WehL+bHAcmb7t6pG", "DataManager", undefined);

      _export("DataManager", DataManager = class DataManager {
        constructor() {
          this.mapInfo = void 0;
          this.mapRowCount = void 0;
          this.mapColumCount = void 0;
        }

      });

      _export("DataManagerInstance", DataManagerInstance = new DataManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=19c03094b7f49b0930f6fb1521620f7c3c8fc5a2.js.map