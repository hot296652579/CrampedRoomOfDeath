import { Component, _decorator, Node, AnimationClip, Animation, SpriteFrame, SpriteAtlas } from "cc";
import { ENUM_EVENT, ENUM_MOVE, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE } from "../../Enum";
import IdleSubStateMachine from "../Player/IdleSubStateMachine";
import TurnLeftSubStateMachine from "../Player/TurnLeftSubStateMachine";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { getParamsInitNumber, getParamsInitTrigger, StateMachine } from "./SateMachine";
import State from "./State";


const { ccclass, property } = _decorator;
@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends StateMachine {
    async init() {
        this.animationCom = this.addComponent(Animation)

        this.initParams()
        this.initSateMachine()
        this.addAnimationEvent()

        await Promise.all(this.waitList)
    }

    initParams() {
        this.params.set(PARAMS_NAME_TYPE.IDLE, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.TURNLEFT, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.DIRECTION, getParamsInitNumber())
    }

    initSateMachine() {
        // this.stateMachine.set(PARAMS_NAME_TYPE.IDLE, new State(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop))
        // this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new State(this, 'texture/player/turnleft/top/turnleft'))
        this.stateMachine.set(PARAMS_NAME_TYPE.IDLE, new IdleSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new TurnLeftSubStateMachine(this))
    }

    addAnimationEvent() {
        this.animationCom.on(Animation.EventType.FINISHED, () => {
            const animationName = this.animationCom.defaultClip.name
            const list = ['turn']

            if (list.some(v => animationName.includes(v))) {
                this.setParams(PARAMS_NAME_TYPE.IDLE, true)
            }
        })
    }

    run() {
        switch (this.currentSate) {
            case this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT):

            case this.stateMachine.get(PARAMS_NAME_TYPE.IDLE):
                if (this.params.get(PARAMS_NAME_TYPE.TURNLEFT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT)
                } else if (this.params.get(PARAMS_NAME_TYPE.IDLE).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDLE)
                } else {
                    this.currentSate = this.currentSate
                }
                break;

            default:
                this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDLE)
                break;
        }
    }
}