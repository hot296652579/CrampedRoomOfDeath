import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_MOVE, PARAMS_NAME_TYPE } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import DataManager from "../Runtime/DataManager";
import { TILE_HEIGHT, TILE_WIDTH } from "../TileMap/TileManager";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { PlayerStateMachine } from "../Base/PlayerStateMachine";
import { EnitiyMgr } from "../Base/EnitiyMgr";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('PlayerMrg')
export class PlayerMrg extends EnitiyMgr {

    tartgetX: number = 0
    tartgetY: number = 0

    async init() {
        this.fsm = this.addComponent(PlayerStateMachine)
        await this.fsm.init()

        super.init({
            x: 0,
            y: 0,
            type: ENITIY_TYPE_ENUM.PLAYER,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.TOP
        })
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove)
    }

    update() {
        this.updateXY()
        super.update()
    }

    updateXY() {
        if (this.tartgetX < this.x) {
            this.x -= MOVE_SPEED
        } else if (this.tartgetX > this.x) {
            this.x += MOVE_SPEED
        } else if (this.tartgetY < this.y) {
            this.y -= MOVE_SPEED
        } else if (this.tartgetY > this.y) {
            this.y += MOVE_SPEED
        }

        if (Math.abs(this.tartgetX - this.x) <= 0.1 && Math.abs(this.tartgetY - this.y) <= 0.1) {
            this.x = this.tartgetX
            this.y = this.tartgetY
        }
    }

    handlerMove(direction: ENUM_MOVE) {
        switch (direction) {
            case ENUM_MOVE.TOP:
                this.tartgetY -= 1
                break;
            case ENUM_MOVE.BOTTOM:
                this.tartgetY += 1
                break;
            case ENUM_MOVE.LEFT:
                this.tartgetX -= 1
                break;
            case ENUM_MOVE.RIGHT:
                this.tartgetX += 1
                break;
            case ENUM_MOVE.TURNLEFT:
                // this.fsm.setParams(PARAMS_NAME_TYPE.TURNLEFT, true)

                if (this.direction === DIRECTION_ENUM.TOP) {
                    this.direction = DIRECTION_ENUM.LEFT
                } else if (this.direction === DIRECTION_ENUM.BOTTOM) {
                    this.direction = DIRECTION_ENUM.RIGHT
                } else if (this.direction === DIRECTION_ENUM.LEFT) {
                    this.direction = DIRECTION_ENUM.BOTTOM
                } else if (this.direction === DIRECTION_ENUM.RIGHT) {
                    this.direction = DIRECTION_ENUM.TOP
                }
                this.state = ENTITY_STATE_ENUM.TURNLEFT
                break;
            case ENUM_MOVE.TURNRIGHT:

                break;

            default:
                break;
        }
    }
}