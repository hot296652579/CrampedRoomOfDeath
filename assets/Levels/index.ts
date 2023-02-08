import { TILE_TYPE_ENUM } from '../Enum';
import level1 from './level1';
import level2 from './level2';

export interface ITitle {
    src: number | null,
    type: TILE_TYPE_ENUM | null
}

export interface ILevel {
    mapInfo: Array<Array<ITitle>>
}

const levels: Record<string, ILevel> = {
    level1,
    level2
};

export default levels;