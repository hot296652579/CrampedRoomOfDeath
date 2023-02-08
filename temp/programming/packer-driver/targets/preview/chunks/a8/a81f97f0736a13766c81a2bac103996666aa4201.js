System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManager, _crd;

  function _reportPossibleCrUseOfITitle(extras) {
    _reporterNs.report("ITitle", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "622c647WehL+bHAcmb7t6pG", "DataManager", undefined);

      _export("default", DataManager = class DataManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.mapInfo = void 0;
          this.mapRowCount = void 0;
          this.mapColumCount = void 0;
        }

        static get Instance() {
          // super()
          return super.getInstance();
        }

      }); // export const DataManagerInstance = new DataManager()


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a81f97f0736a13766c81a2bac103996666aa4201.js.map