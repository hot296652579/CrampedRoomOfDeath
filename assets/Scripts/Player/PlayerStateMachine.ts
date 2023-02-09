import { Component, _decorator, Node, AnimationClip, Animation, SpriteFrame, SpriteAtlas } from "cc";
import { ENUM_EVENT, ENUM_MOVE, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_TYPE } from "../../Enum";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
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
export class PlayerStateMachine extends Component {
    private _currentSate: State = null
    params: Map<string, IParamsVaule> = new Map() //参数列表
    stateMachine: Map<string, State> = new Map()  //动画state列表

    animationCom: Animation = null

    waitList: Array<Promise<SpriteAtlas>> = []


    getParams(paramsName: string) {
        if (this.params.has(paramsName)) {
            return this.params.get(paramsName)
        }
    }

    setParams(paramsName: string, value: ParamsTypeValue) {
        if (this.params.has(paramsName)) {
            this.params.get(paramsName).value = value
            this.run()
        }
    }

    get currentSate() {
        return this._currentSate
    }

    set currentSate(newSate) {
        this._currentSate = newSate
        this._currentSate.run()
    }
    async init() {
        this.animationCom = this.addComponent(Animation)

        this.initParams()
        this.initSateMachine()

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

    run() {
        switch (this.currentSate) {
            case this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT):

                break;
            case this.stateMachine.get(PARAMS_NAME_TYPE.IDEL):
                if (this.params.get(PARAMS_NAME_TYPE.TURNLEFT)) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.TURNLEFT)
                } else if (this.params.get(PARAMS_NAME_TYPE.IDEL)) {
                    this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDEL)
                }
                break;

            default:
                this.currentSate = this.stateMachine.get(PARAMS_NAME_TYPE.IDEL)
                break;
        }
    }
}