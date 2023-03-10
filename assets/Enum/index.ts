/**
 * 瓦片10种类型 wall墙壁 cliff悬崖 floor地板 
 */
export enum TILE_TYPE_ENUM {
    WALL_LEFT_TOP = 'WALL_LEFT_TOP',
    WALL_COLUMN = 'WALL_COLUMN',
    WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',
    CLIFF_LEFT = 'CLIFF_LEFT',
    FLOOR = 'FLOOR',
    WALL_ROW = 'WALL_ROW',
    CLIFF_CENTER = 'CLIFF_CENTER',
    WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',
    WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',
    CLIFF_RIGHT = 'CLIFF_RIGHT'
}

export enum ENUM_EVENT {
    ENUM_NEXTLEVEL = 'ENUM_NEXTLEVEL',
    ENUM_CTRL_CLICK = 'ENUM_CTRL_CLICK',
    ENUM_MOVE_END = 'ENUM_MOVE_END',
    ENUM_ATTACK_PLAYER = 'ENUM_ATTACK_PLAYER',
    ENUM_ATTACK_ENEMY = 'ENUM_ATTACK_ENEMY',
    ENUM_PLAYER_BORN = 'ENUM_PLAYER_BORN',
    ENUM_PLAYER_DEATH = 'ENUM_PLAYER_DEATH',
    ENUM_PLAYER_AIRDEATH = 'ENUM_PLAYER_AIRDEATH',
    ENUM_ENEMY_DEATH = 'ENUM_ENEMY_DEATH',
    ENUM_OPEN_DOOR = 'ENUM_OPEN_DOOR',
    ENUM_SHOW_SMOKE = 'ENUM_SHOW_SMOKE',
    ENUM_SHAKE_SCREEN = 'ENUM_SHAKE_SCREEN',
    ENUM_RECORD_STEP = 'ENUM_RECORD_STEP',
    ENUM_REVOKE_STEP = 'ENUM_REVOKE_STEP',
    ENUM_RESTART_GAME = 'ENUM_RESTART_GAME',
    ENUM_WIN_RESTART_GAME = 'ENUM_WIN_RESTART_GAME'
}

export enum ENUM_BOTTOM_CONTROLLER {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TURNLEFT = 'TURNLEFT',
    TURNRIGHT = 'TURNRIGHT'
}

export enum FSM_PARAMS_TYPE_ENUM {
    TRIGGER = 'TRIGGER',
    NUMBER = 'NUMBER'
}

/** PARAMS枚举 IDLE TURNLEFT DIRECTION*/
export enum PARAMS_NAME_TYPE {
    IDLE = 'IDLE',
    TURNLEFT = 'TURNLEFT',
    TURNRIGHT = 'TURNRIGHT',
    DIRECTION = 'DIRECTION',
    BLOCKFRONT = 'BLOCKFRONT',
    BLOCKTURNLEFT = 'BLOCKTURNLEFT',
    BLOCKLEFT = 'BLOCKLEFT',
    BLOCKRIGHT = 'BLOCKRIGHT',
    BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
    ATTACK = 'ATTACK',
    DEATH = 'DEATH',
    AIRDEATH = 'AIRDEATH',
    SPIKES_CUR_COUNT = 'SPIKES_CUR_COUNT',
    SPIKES_TOTAL_COUNT = 'SPIKES_TOTAL_COUNT'
}
/**四个方向枚举 TOP BOTTOM LEFT RIGHT*/
export enum DIRECTION_ENUM {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export enum ENTITY_STATE_ENUM {
    IDLE = 'IDLE',
    TURNLEFT = 'TURNLEFT',
    TURNRIGHT = 'TURNRIGHT',
    BLOCKBACK = 'BLOCKBACK',
    BLOCKFRONT = 'BLOCKFRONT',
    BLOCKLEFT = 'BLOCKLEFT',
    BLOCKRIGHT = 'BLOCKRIGHT',
    BLOCKTURNLEFT = 'BLOCKTURNLEFT',
    BLOCKTURNRIGHT = 'BLOCKTURNRIGHT',
    ATTACK = 'ATTACK',
    DEATH = 'DEATH',
    AIRDEATH = 'AIRDEATH'
}

export enum DIRECTION_ORDER_ENUM {
    TOP = 0,
    BOTTOM = 1,
    LEFT = 2,
    RIGHT = 3,
}

export enum ENITIY_TYPE_ENUM {
    PLAYER = 'PLAYER',
    WOODEN = 'WOODEN',
    IRON = 'IRON',
    DOOR = 'DOOR',
    BURST = 'BURST',
    SMOKE = 'SMOKE'
}

export enum ENITIY_TYPE_SPIKES_ENUM {
    SPIKES_ONE = 'SPIKES_ONE',
    SPIKES_TWO = 'SPIKES_TWO',
    SPIKES_THREE = 'SPIKES_THREE',
    SPIKES_FOUR = 'SPIKES_FOUR',
}

export enum SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM {
    SPIKES_ONE = 2,
    SPIKES_TWO = 3,
    SPIKES_THREE = 4,
    SPIKES_FOUR = 5,
}

export enum SPIKE_COUNT_ENUM {
    ZERO = 'ZERO',
    ONE = 'ONE',
    TWO = 'TWO',
    THREE = 'THREE',
    FOUR = 'FOUR',
    FIVE = 'FIVE'
}

export enum SPIKES_COUNT_MAP_NUMBER_ENUM {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

export enum SHAKE_TYPE_ENUM {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export enum SCENE_ENUM {
    START = 'Start',
    BATTLE = 'Battle',
    LOADING = 'Loading'
}
