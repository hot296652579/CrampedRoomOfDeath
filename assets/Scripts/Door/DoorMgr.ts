import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math, TiledUserNodeData } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE } from "../../Enum";
import { IEnitiy } from "../../Levels";
import { EnitiyMgr } from "../Base/EnitiyMgr";
import EventMgr from "../Base/EventMgr";
import { PlayerStateMachine } from "../Player/PlayerStateMachine";
import DataManager from "../Runtime/DataManager";
import { DoorStateMachine } from "./DoorStateMachine";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('DoorMgr')
export class DoorMgr extends EnitiyMgr {

    async init(params: IEnitiy) {
        this.fsm = this.addComponent(DoorStateMachine)
        await this.fsm.init()

        super.init(params)
    }

    onOpen() {
        if (DataManager.Instance.enemies.every(enemy => enemy.state === ENTITY_STATE_ENUM.DEATH) && this.state != ENTITY_STATE_ENUM.DEATH) {
            this.state = ENTITY_STATE_ENUM.DEATH
        }
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_OPEN_DOOR, this.onOpen, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_OPEN_DOOR, this.onOpen)
    }


}