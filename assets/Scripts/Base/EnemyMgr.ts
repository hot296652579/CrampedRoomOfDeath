/**木骷髅管理器 */
import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT } from "../../Enum";
import { IEnitiy } from "../../Levels";
import DataManager from "../Runtime/DataManager";
import { EnitiyMgr } from "./EnitiyMgr";
import EventMgr from "./EventMgr";

const { ccclass, property } = _decorator;
@ccclass('EnemyMgr')
export class EnemyMgr extends EnitiyMgr {

    async init(params: IEnitiy) {
        super.init(params)
    }
    /***
     * 根据玩家在敌人的象限改变敌人的朝向
     */
    onChangeDirection() {
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

    onDeath(id: string) {
        if (this.state === ENTITY_STATE_ENUM.DEATH) {
            return
        }
        if (this.id === id) {
            this.state = ENTITY_STATE_ENUM.DEATH
        }
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.onChangeDirection, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.onChangeDirection, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_ENEMY_DEATH, this.onDeath, this)
    }

    onDestroy() {
        super.onDestroy()
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.onChangeDirection)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_PLAYER_BORN, this.onChangeDirection)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_ENEMY_DEATH, this.onDeath)
    }


}