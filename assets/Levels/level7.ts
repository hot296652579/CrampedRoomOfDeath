import { IEnitiy, ILevel, ISpikes } from '.';
import { TILE_TYPE_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM } from '../Enum';
const mapInfo = [
    [
        {
            src: 16,
            type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 13,
            type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
        },
        {
            src: 18,
            type: TILE_TYPE_ENUM.CLIFF_LEFT,
        },
    ],
    [
        {
            src: 21,
            type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 21,
            type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
        },
        {
            src: 17,
            type: TILE_TYPE_ENUM.CLIFF_CENTER,
        },
    ],
    [
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 17,
            type: TILE_TYPE_ENUM.CLIFF_CENTER,
        },
    ],
    [
        {
            src: 20,
            type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 20,
            type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
        },
        {
            src: 17,
            type: TILE_TYPE_ENUM.CLIFF_CENTER,
        },
    ],
    [
        {
            src: 9,
            type: TILE_TYPE_ENUM.WALL_ROW,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 1,
            type: TILE_TYPE_ENUM.FLOOR,
        },
        {
            src: 9,
            type: TILE_TYPE_ENUM.WALL_ROW,
        },
        {
            src: 17,
            type: TILE_TYPE_ENUM.CLIFF_CENTER,
        },
    ],
    [
        {
            src: 15,
            type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 5,
            type: TILE_TYPE_ENUM.WALL_COLUMN,
        },
        {
            src: 14,
            type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
        },
        {
            src: 19,
            type: TILE_TYPE_ENUM.CLIFF_RIGHT,
        },
    ],
];


const player: IEnitiy = {
    x: 2,
    y: 7,
    direction: DIRECTION_ENUM.TOP,
    state: ENTITY_STATE_ENUM.IDLE,
    type: ENITIY_TYPE_ENUM.PLAYER,
};

const enemies: Array<IEnitiy> = [
    {
        x: 2,
        y: 2,
        direction: DIRECTION_ENUM.BOTTOM,
        state: ENTITY_STATE_ENUM.IDLE,
        type: ENITIY_TYPE_ENUM.WOODEN,
    },
];

const spikes: Array<ISpikes> = [
    {
        x: 1,
        y: 4,
        type: ENITIY_TYPE_SPIKES_ENUM.SPIKES_ONE,
        count: 0,
    },
    {
        x: 2,
        y: 4,
        type: ENITIY_TYPE_SPIKES_ENUM.SPIKES_TWO,
        count: 0,
    },
    {
        x: 3,
        y: 4,
        type: ENITIY_TYPE_SPIKES_ENUM.SPIKES_TWO,
        count: 0,
    },
    {
        x: 4,
        y: 4,
        type: ENITIY_TYPE_SPIKES_ENUM.SPIKES_THREE,
        count: 0,
    },
];

const bursts: Array<IEnitiy> = [];

const door: IEnitiy = {
    x: 2,
    y: 0,
    direction: DIRECTION_ENUM.BOTTOM,
    state: ENTITY_STATE_ENUM.IDLE,
    type: ENITIY_TYPE_ENUM.DOOR,
};

const level: ILevel = {
    mapInfo,
    player,
    enemies,
    spikes,
    bursts,
    door,
};
export default level;