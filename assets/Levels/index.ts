import { TILE_TYPE_ENUM } from '../Enum';
import level1 from './level1';

export interface ITitle {
    src: number | null,
    type: TILE_TYPE_ENUM | null
}

export interface ILevel {
    mapInfo: Array<Array<ITitle>>
}

const levels = {
    level1
};

export default levels;