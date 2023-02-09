System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, EventMgr, _dec, _class, _crd, ccclass, property, BottomControl;

  function _reportPossibleCrUseOfENUM_MOVE(extras) {
    _reporterNs.report("ENUM_MOVE", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../Base/EventMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a90eeDXJ0pOzJLKgu1yGB/M", "BottomControl", undefined);

      __checkObsolete__(['Component', '_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BottomControl", BottomControl = (_dec = ccclass('BottomControl'), _dec(_class = class BottomControl extends Component {
        handlerNextLevelClick() {// EventMgr.Instance.emit(ENUM_EVENT.ENUM_NEXTLEVEL)
        }

        handlerClickDirection(evt, data) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).Instance.emit(data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fea248108a878c4da5613c0dbf9462bdec9d6b04.js.map