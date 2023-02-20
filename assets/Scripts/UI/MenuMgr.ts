import { Component, _decorator, Node } from "cc";
import { ENUM_BOTTOM_CONTROLLER, ENUM_EVENT } from "../../Enum";
import EventMgr from "../Base/EventMgr";

const { ccclass, property } = _decorator;
@ccclass('MenuMgr')
export class MenuMgr extends Component {
    handlerUndo() {
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_REVOKE_STEP)
    }

    handlerRestart() {
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_RESTART_GAME)
    }
}