import { Component, _decorator, Node, AnimationClip, Animation, SpriteFrame, SpriteAtlas } from "cc";
import { ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, PARAMS_NAME_TYPE, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM } from "../../Enum";
import { EnitiyMgr } from "../Base/EnitiyMgr";
import { getParamsInitNumber, StateMachine } from "../Base/SateMachine";
import SpikesFourSubStateMachine from "./SpikesFourStateMahine";
import SpikesOneSubStateMachine from "./SpikesOneSubStateMachine";
import SpikesThreeSubStateMachine from "./SpikesThreeStateMachine";
import SpikesTwoSubStateMachine from "./SpikesTwoSubStateMachine";
// import { DataManager.Instance } from "../Runtime/DataManager";


const { ccclass, property } = _decorator;
@ccclass('SpikeStateMachine')
export class SpikeStateMachine extends StateMachine {
    async init() {
        this.animationCom = this.addComponent(Animation)

        this.initParams()
        this.initSateMachine()
        this.addAnimationEvent()

        await Promise.all(this.waitList)
    }

    initParams() {
        this.params.set(PARAMS_NAME_TYPE.SPIKES_CUR_COUNT, getParamsInitNumber())
        this.params.set(PARAMS_NAME_TYPE.SPIKES_TOTAL_COUNT, getParamsInitNumber())
    }

    initSateMachine() {
        this.stateMachine.set(ENITIY_TYPE_SPIKES_ENUM.SPIKES_ONE, new SpikesOneSubStateMachine(this))
        this.stateMachine.set(ENITIY_TYPE_SPIKES_ENUM.SPIKES_TWO, new SpikesTwoSubStateMachine(this))
        this.stateMachine.set(ENITIY_TYPE_SPIKES_ENUM.SPIKES_THREE, new SpikesThreeSubStateMachine(this))
        this.stateMachine.set(ENITIY_TYPE_SPIKES_ENUM.SPIKES_FOUR, new SpikesFourSubStateMachine(this))
    }

    addAnimationEvent() {
        // this.animationCom.on(Animation.EventType.FINISHED, () => {
        //     const animationName = this.animationCom.defaultClip.name
        //     const list = ['attack']

        //     if (list.some(v => animationName.includes(v))) {
        //         // this.setParams(PARAMS_NAME_TYPE.IDLE, true)
        //         this.node.getComponent(EnitiyMgr).state = ENTITY_STATE_ENUM.IDLE
        //     }
        // })
    }

    run() {
        const value = this.getParams(PARAMS_NAME_TYPE.SPIKES_TOTAL_COUNT).value
        switch (this.currentSate) {
            case this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_ONE):
            case this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_TWO):
            case this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_THREE):
            case this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_FOUR):

                if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) {
                    this.currentSate = this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_ONE)
                } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) {
                    this.currentSate = this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_TWO)
                } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) {
                    this.currentSate = this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_THREE)
                } else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR) {
                    this.currentSate = this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_FOUR)
                }
                else {
                    this.currentSate = this.currentSate
                }
                break;

            default:
                this.currentSate = this.stateMachine.get(ENITIY_TYPE_SPIKES_ENUM.SPIKES_ONE)
                break;
        }
    }
}