import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE } from "../../../Enum";
import { EnitiyMgr } from "../../Base/EnitiyMgr";
import EventMgr from "../../Base/EventMgr";
import { PlayerStateMachine } from "../../Player/PlayerStateMachine";
import DataManager from "../../Runtime/DataManager";
import { WoodenStateMachine } from "./WoodenStateMachine";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('WoodenMgr')
export class WoodenMgr extends EnitiyMgr {

    async init() {
        this.fsm = this.addComponent(WoodenStateMachine)
        await this.fsm.init()

        super.init({
            x: 2,
            y: 4,
            type: ENITIY_TYPE_ENUM.WOODEN,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.TOP
        })

    }

    handlerPlayerMoveEnd() {
        if (!DataManager.Instance.playerInfo)
            return
        if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.playerInfo)
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

    checkAttack() {
        console.log('当前state', this.state)
        if (this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.playerInfo)
            return

        const { x: playerX, y: playerY, state: playerState } = DataManager.Instance.playerInfo
        const disX = Math.abs(this.x - playerX)
        const disY = Math.abs(this.y - playerY)

        if (playerState == ENTITY_STATE_ENUM.DEATH || playerState == ENTITY_STATE_ENUM.AIRDEATH)
            return

        if ((this.x === playerX && disY <= 1) || (this.y === playerY && disX <= 1)) {
            this.state = ENTITY_STATE_ENUM.ATTACK
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_PLAYER_DEATH, ENTITY_STATE_ENUM.DEATH)
        } else {
            this.state = ENTITY_STATE_ENUM.IDLE
        }
    }

    onDeath(id: string) {
        if (this.id === id) {
            this.state = ENTITY_STATE_ENUM.DEATH
            console.log('怪物死亡 状态改变')
        }
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.handlerPlayerMoveEnd, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.handlerPlayerMoveEnd, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkAttack, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_ENEMY_DEATH, this.onDeath, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.handlerPlayerMoveEnd)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.handlerPlayerMoveEnd)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkAttack)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_ENEMY_DEATH, this.onDeath)
    }


}