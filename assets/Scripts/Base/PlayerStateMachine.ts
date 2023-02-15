import { Component, _decorator, Node, AnimationClip, Animation, SpriteFrame, SpriteAtlas } from "cc";
import { ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM } from "../../Enum";
import BlockFrontSubStateMachine from "../Player/BlockFrontSubStateMachine";
import BlockTurnLeftSubStateMachine from "../Player/BlockTurnLeftSubStateMachine";
import BlockTurnRightSubStateMachine from "../Player/BlockTurnRightSubStateMachine";
import DeathSubStateMachine from "../Player/DeathSubStateMachine";
import IdleSubStateMachine from "../Player/IdleSubStateMachine";
import TurnLeftSubStateMachine from "../Player/TurnLeftSubStateMachine";
import TurnRightSubStateMachine from "../Player/TurnRightSubStateMachine";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { EnitiyMgr } from "./EnitiyMgr";
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
        this.params.set(PARAMS_NAME_TYPE.TURNRIGHT, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.DIRECTION, getParamsInitNumber())
        this.params.set(PARAMS_NAME_TYPE.BLOCKFRONT, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.BLOCKTURNLEFT, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.BLOCKTURNRIGHT, getParamsInitTrigger())
        this.params.set(PARAMS_NAME_TYPE.DEATH, getParamsInitTrigger())
    }

    initSateMachine() {
        // this.stateMachine.set(PARAMS_NAME_TYPE.IDLE, new State(this, 'texture/player/idle/top/idle', AnimationClip.WrapMode.Loop))
        // this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new State(this, 'texture/player/turnleft/top/turnleft'))
        this.stateMachine.set(PARAMS_NAME_TYPE.IDLE, new IdleSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.TURNLEFT, new TurnLeftSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.TURNRIGHT, new TurnRightSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.BLOCKFRONT, new BlockFrontSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.BLOCKTURNLEFT, new BlockTurnLeftSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.BLOCKTURNRIGHT, new BlockTurnRightSubStateMachine(this))
        this.stateMachine.set(PARAMS_NAME_TYPE.DEATH, new DeathSubStateMachine(this))
    }

    addAnimationEvent() {
        this.animationCom.on(Animation.EventType.FINISHED, () => {
            const animationName = this.animationCom.defaultClip.name
            const list = ['block', 'turn']

            if (list.some(v => animationName.includes(v))) {
                // this.setParams(PARAMS_NAME_TYPE.IDLE, true)
                this.node.getComponent(EnitiyMgr).state = ENTITY_STATE_ENUM.IDLE
            }
        })
    }

    run() {
        switch (this.currentSate) {
            case this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT):
            case this.stateMachine.get(PARAMS_NAME_TYPE.BLOCKFRONT):
            case this.stateMachine.get(PARAMS_NAME_TYPE.BLOCKTURNLEFT):

            case this.stateMachine.get(PARAMS_NAME_TYPE.IDLE):
                if (this.params.get(PARAMS_NAME_TYPE.BLOCKFRONT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.BLOCKFRONT)
                } else if (this.params.get(PARAMS_NAME_TYPE.BLOCKTURNRIGHT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.BLOCKTURNRIGHT)
                } else if (this.params.get(PARAMS_NAME_TYPE.TURNLEFT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT)
                } else if (this.params.get(PARAMS_NAME_TYPE.TURNRIGHT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.TURNRIGHT)
                } else if (this.params.get(PARAMS_NAME_TYPE.BLOCKTURNLEFT).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.BLOCKTURNLEFT)
                }
                else if (this.params.get(PARAMS_NAME_TYPE.IDLE).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDLE)
                } else if (this.params.get(PARAMS_NAME_TYPE.DEATH).value) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.DEATH)
                }
                else {
                    this.currentSate = this.currentSate
                }
                break;

            default:
                this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDLE)
                break;
        }
    }
}