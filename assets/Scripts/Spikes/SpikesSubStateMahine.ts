import { AnimationClip } from "cc";
import { PARAMS_NAME_TYPE, SPIKES_COUNT_MAP_NUMBER_ENUM, SPIKE_COUNT_ENUM } from "../../Enum";
import { StateMachine } from "../Base/SateMachine";
import State from "../Base/State";
import { SubStateMachine } from "../Base/SubStateMachine";

export default class SpikesSubStateMachine extends SubStateMachine {
    constructor(fsm: StateMachine) {
        super(fsm)
    }

    run() {
        const value = this.fsm.getParams(PARAMS_NAME_TYPE.SPIKES_CUR_COUNT).value
        this.currentSate = this.stateMachine.get(SPIKES_COUNT_MAP_NUMBER_ENUM[value as number])
    }
}