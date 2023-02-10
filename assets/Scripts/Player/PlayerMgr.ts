import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_MOVE, PARAMS_NAME_TYPE } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import DataManager from "../Runtime/DataManager";
import { TILE_HEIGHT, TILE_WIDTH } from "../TileMap/TileManager";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { PlayerStateMachine } from "../Base/PlayerStateMachine";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('PlayerMrg')
export class PlayerMrg extends Component {
    x: number = 0
    y: number = 0

    tartgetX: number = 0
    tartgetY: number = 0

    fsm: PlayerStateMachine = null

    private _direction: DIRECTION_ENUM
    private _state: ENTITY_STATE_ENUM

    get direction() {
        return this._direction
    }
    set direction(newDirection) {
        this._direction = newDirection
        this.fsm.setParams(PARAMS_NAME_TYPE.DIRECTION, DIRECTION_ORDER_ENUM[this._direction])
    }

    get state() {
        return this._state
    }
    set state(newState) {
        this._state = newState
        this.fsm.setParams(this.state, true)
    }

    async init() {
        const sprite = this.addComponent(Sprite)
        sprite.sizeMode = Sprite.SizeMode.CUSTOM
        const transform = this.node.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

        this.fsm = this.addComponent(PlayerStateMachine)
        await this.fsm.init()
        // this.fsm.setParams(PARAMS_NAME_TYPE.IDEL, true)
        this.direction = DIRECTION_ENUM.TOP
        this.state = ENTITY_STATE_ENUM.IDLE
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove)
    }

    update() {
        this.updateXY()
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
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