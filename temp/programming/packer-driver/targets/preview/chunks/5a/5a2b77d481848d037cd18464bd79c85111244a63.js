System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManager, _crd;

  function _reportPossibleCrUseOfITitle(extras) {
    _reporterNs.report("ITitle", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMgr(extras) {
    _reporterNs.report("EnemyMgr", "../Base/EnemyMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstMgr(extras) {
    _reporterNs.report("BurstMgr", "../Burst/BurstMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorMgr(extras) {
    _reporterNs.report("DoorMgr", "../Door/DoorMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMrg(extras) {
    _reporterNs.report("PlayerMrg", "../Player/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileManager(extras) {
    _reporterNs.report("TileManager", "../TileMap/TileManager", _context.meta, extras);
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
          this.tileMgrInfo = void 0;
          this.mapRowCount = 0;
          this.mapColumCount = 0;
          this.levelIndex = 1;
          this.playerInfo = null;
          this.doorInfo = null;
          this.enemies = void 0;
          this.bursts = void 0;
        }

        static get Instance() {
          // super()
          return super.getInstance();
        }

        reset() {
          this.mapInfo = [];
          this.tileMgrInfo = [];
          this.playerInfo = null;
          this.doorInfo = null;
          this.enemies = [];
          this.bursts = [];
          this.mapRowCount = 0;
          this.mapColumCount = 0;
        }

      }); // export const DataManagerInstance = new DataManager()


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a2b77d481848d037cd18464bd79c85111244a63.js.map