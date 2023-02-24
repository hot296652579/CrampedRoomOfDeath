System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, ENUM_EVENT, EventMgr, _dec, _class, _crd, ccclass, property, BottomControl;

  function _reportPossibleCrUseOfENUM_BOTTOM_CONTROLLER(extras) {
    _reporterNs.report("ENUM_BOTTOM_CONTROLLER", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENUM_EVENT(extras) {
    _reporterNs.report("ENUM_EVENT", "../../Enum", _context.meta, extras);
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
      ENUM_EVENT = _unresolved_2.ENUM_EVENT;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.default;
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
          }), EventMgr) : EventMgr).Instance.emit((_crd && ENUM_EVENT === void 0 ? (_reportPossibleCrUseOfENUM_EVENT({
            error: Error()
          }), ENUM_EVENT) : ENUM_EVENT).ENUM_CTRL_CLICK, data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7444870dd0c99849cc8074ca5a111be4d57532e7.js.map