import { Component, _decorator, Node } from "cc";
import { ENUM_EVENT } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import DataManager from "../Runtime/DataManager";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";

const { ccclass, property } = _decorator;
@ccclass('BottomControl')
export class BottomControl extends Component {
    handlerNextLevelClick() {
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_NEXTLEVEL)
    }
}