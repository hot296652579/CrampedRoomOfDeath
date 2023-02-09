import { Component, _decorator, Node, AnimationClip, Animation, SpriteFrame, SpriteAtlas } from "cc";
import { ENUM_EVENT, ENUM_MOVE, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE } from "../../Enum";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { StateMachine } from "./SateMachine";
import Sate from "./State";
import State from "./State";


type ParamsTypeValue = boolean | number

export interface IParamsVaule {
    type: FSM_PARAMS_TYPE_ENUM,
    value: ParamsTypeValue
}

export const getParamsInitValue = () => {
    return {
        type: FSM_PARAMS_TYPE_ENUM.TRIGGER,
        value: false
    }
}

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
        this.params.set(PARAMS_NAME_TYPE.IDEL, getParamsInitValue())
        this.params.set(PARAMS_NAME_TYPE.TURNLEFT, getParamsInitValue())
    }

    initSateMachine() {
        this.stateMachine.set(PARAMS_NAME_TYPE.IDEL, new Sate(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop))
        this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new Sate(this, 'texture/player/turnleft/top/turnleft'))
    }

    addAnimationEvent() {
        this.animationCom.on(Animation.EventType.FINISHED, () => {
            const animationName = this.animationCom.defaultClip.name
            const list = ['turn']

            if (list.some(v => animationName.includes(v))) {
                this.setParams(PARAMS_NAME_TYPE.IDEL, true)
            }
        })
    }

    run() {
        switch (this.currentSate) {
            case this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT):

            case this.stateMachine.get(PARAMS_NAME_TYPE.IDEL):
                if (this.params.get(PARAMS_NAME_TYPE.TURNLEFT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT)
                } else if (this.params.get(PARAMS_NAME_TYPE.IDEL).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDEL)
                }
                break;

            default:
                this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDEL)
                break;
        }
    }
}