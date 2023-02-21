import { DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, ENTITY_STATE_ENUM, TILE_TYPE_ENUM } from '../Enum';
import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import level4 from './level4';
import level5 from './level5';
import level6 from './level6';
import level7 from './level7';
import level8 from './level8';
import level9 from './level9';
import level10 from './level10';

export interface IEnitiy {
    x: number
    y: number
    state: ENTITY_STATE_ENUM
    direction: DIRECTION_ENUM
    type: ENITIY_TYPE_ENUM
}

export interface ISmoke {
    x: number
    y: number
    type: ENITIY_TYPE_SPIKES_ENUM
    state: ENTITY_STATE_ENUM
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
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
};

export default levels;