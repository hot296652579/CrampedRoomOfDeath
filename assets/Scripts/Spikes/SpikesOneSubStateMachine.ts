import { AnimationClip } from "cc";
import { PARAMS_NAME_TYPE, SPIKES_COUNT_MAP_NUMBER_ENUM, SPIKE_COUNT_ENUM } from "../../Enum";
import { StateMachine } from "../Base/SateMachine";
import State from "../Base/State";
import { SubStateMachine } from "../Base/SubStateMachine";



const BASE_URL = 'texture/spikes/spikesone/'
export default class SpikesOneSubStateMachine extends SubStateMachine {
    constructor(fsm: StateMachine) {
        super(fsm)

        this.stateMachine.set(SPIKE_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}zero/zero`))
        this.stateMachine.set(SPIKE_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}one/one`))
        this.stateMachine.set(SPIKE_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}two/two`))
    }

    run() {
        const value = this.fsm.getParams(PARAMS_NAME_TYPE.SPIKES_CUR_COUNT).value
        this.currentSate = this.stateMachine.get(SPIKES_COUNT_MAP_NUMBER_ENUM[value as number])
    }
}