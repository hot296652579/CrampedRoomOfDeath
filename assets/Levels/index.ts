import { DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, ENTITY_STATE_ENUM, TILE_TYPE_ENUM } from '../Enum';
import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import level4 from './level4';

export interface IEnitiy {
    x: number
    y: number
    state: ENTITY_STATE_ENUM
    direction: DIRECTION_ENUM
    type: ENITIY_TYPE_ENUM
}

export interface ISpikes {
    x: number
    y: number
    type: ENITIY_TYPE_SPIKES_ENUM
    count: number
}

export interface ITitle {
    src: number | null,
    type: TILE_TYPE_ENUM | null
}

export interface ILevel {
    mapInfo: Array<Array<ITitle>>
    player: IEnitiy,
    enemies: Array<IEnitiy>,
    spikes: Array<ISpikes>,
    bursts: Array<IEnitiy>,
    door: IEnitiy,
}

const levels: Record<string, ILevel> = {
    level1,
    level2,
    level3,
    level4,
};

export default levels;