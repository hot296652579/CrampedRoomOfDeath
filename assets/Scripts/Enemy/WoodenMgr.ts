import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE } from "../../Enum";
import { EnitiyMgr } from "../Base/EnitiyMgr";
import EventMgr from "../Base/EventMgr";
import { PlayerStateMachine } from "../Base/PlayerStateMachine";
import DataManager from "../Runtime/DataManager";
import { WoodenStateMachine } from "./WoodenStateMachine";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('WoodenMgr')
export class WoodenMgr extends EnitiyMgr {

    async init() {
        this.fsm = this.addComponent(WoodenStateMachine)
        await this.fsm.init()

        super.init({
            x: 7,
            y: 7,
            type: ENITIY_TYPE_ENUM.PLAYER,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.TOP
        })

    }

    handlerPlayerMoveEnd() {
        if (!DataManager.Instance.playerInfo)
            return

        const { x: playerX, y: playerY } = DataManager.Instance.playerInfo
        const disX = Math.abs(this.x - playerX)
        const disY = Math.abs(this.y - playerY)

        if (playerX >= this.x && playerY <= this.y) {
            disY > disX ? this.direction = DIRECTION_ENUM.TOP : this.direction = DIRECTION_ENUM.RIGHT
        } else if (playerX <= this.x && playerY <= this.y) {
            disY > disX ? this.direction = DIRECTION_ENUM.TOP : this.direction = DIRECTION_ENUM.LEFT
        } else if (playerX <= this.x && this.y >= playerY) {
            disY > disX ? this.direction = DIRECTION_ENUM.BOTTOM : this.direction = DIRECTION_ENUM.LEFT
        } else if (playerX >= this.x && this.y >= playerY) {
            disY > disX ? this.direction = DIRECTION_ENUM.BOTTOM : this.direction = DIRECTION_ENUM.RIGHT
        }
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.handlerPlayerMoveEnd, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.handlerPlayerMoveEnd, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.handlerPlayerMoveEnd)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.handlerPlayerMoveEnd)
    }


}