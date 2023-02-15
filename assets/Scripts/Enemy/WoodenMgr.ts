import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE } from "../../Enum";
import { EnitiyMgr } from "../Base/EnitiyMgr";
import { PlayerStateMachine } from "../Base/PlayerStateMachine";
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

    onLoad() {

    }

    onDestry() {
    }


}