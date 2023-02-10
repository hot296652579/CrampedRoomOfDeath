import { AnimationClip } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_TYPE } from "../../Enum";
import { StateMachine } from "../Base/SateMachine";
import State from "../Base/State";
import { SubStateMachine } from "../Base/SubStateMachine";


const BASE_URL = 'texture/player/turnleft/'
const BASE_END = '/turnleft'
export default class TurnLeftSubStateMachine extends SubStateMachine {
    constructor(fsm: StateMachine) {
        super(fsm)

        this.stateMachine.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}top` + BASE_END))
        this.stateMachine.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}bottom` + BASE_END))
        this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}left` + BASE_END))
        this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}right` + BASE_END))
    }

    run() {
        const { value } = this.fsm.getParams(PARAMS_NAME_TYPE.DIRECTION)
        this.currentSate = this.stateMachine.get(DIRECTION_ORDER_ENUM[value as number])
    }
}