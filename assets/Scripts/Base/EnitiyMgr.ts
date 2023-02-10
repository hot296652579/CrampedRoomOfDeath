import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_MOVE, PARAMS_NAME_TYPE } from "../../Enum";
import levels, { IEnitiy, ILevel } from "../../Levels";
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
@ccclass('EnitiyMgr')
export class EnitiyMgr extends Component {
    x: number = 0
    y: number = 0

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

    async init(params: IEnitiy) {
        const sprite = this.addComponent(Sprite)
        sprite.sizeMode = Sprite.SizeMode.CUSTOM
        const transform = this.node.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

        this.x = params.x
        this.y = params.y
        this.direction = params.direction
        this.state = params.state
    }

    onLoad() { }

    onDestry() { }

    update() {
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
    }
}